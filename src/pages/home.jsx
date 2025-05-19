import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
      <Exercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
