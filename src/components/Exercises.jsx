import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Pagination from "@mui/material/Pagination";

const Exercises = ({ exercises, setExercises, bodyPart, startFromTop }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(4);


  useEffect(() => {
      const fetchExercisesData = async () => {
        let exercisesData = [];
  
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
  
        setExercises(exercisesData);
      };
  
      fetchExercisesData();
      startFromTop.current.scrollIntoView({
      behavior: "smooth"})
    }, [bodyPart, setExercises, startFromTop]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    startFromTop.current.scrollIntoView({
      behavior: "smooth"})
    
  };
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
        ref={startFromTop}
        id="exercises"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 4 && (
          <Pagination
            color="error"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
