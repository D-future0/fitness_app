import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({bodyPart, setBodyPart, setExercises, startFromTop}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseCategoriesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList  ",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseCategoriesData();
  }, []);

  const handleSearch = async () => {
  if (search) {
    try {
      const rawData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      console.log('API response:', rawData); // Check what you're actually getting

      const exercisesData = Array.isArray(rawData) ? rawData : rawData.data;

      if (!Array.isArray(exercisesData)) {
        throw new Error('Expected an array but got: ' + typeof exercisesData);
      }

      const searchTerm = search.trim().toLowerCase();
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.target.toLowerCase().includes(searchTerm) ||
          item.equipment.toLowerCase().includes(searchTerm) ||
          item.bodyPart.toLowerCase().includes(searchTerm)
      );

      startFromTop.current.scrollIntoView({
      behavior: "smooth"})
      setSearch("");
      setExercises(searchedExercises);
    } catch (error) {
      console.error("Search error:", error);
    }
  }
};

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ mt: { lg: "44px", md: "80px", xs: "37px" } }}
      p="20px"
    >
      <Typography
        fontWeight={"700"}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb={"50px"}
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box direction={"row"} position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borberRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              borderTopLeftRadius: "20px",
            },
          }}
          height="76px"
          values={search}
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
