import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const startFromTop = useRef(null);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises}
        startFromTop={startFromTop}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
        startFromTop={startFromTop}
      />
    </Box>
  );
};

export default Home;
