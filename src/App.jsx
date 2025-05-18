
import { Route, Routes } from "react-router-dom"
import './App.css'
import { Box } from "@mui/material"
import Home from "./pages/home"
import Navbar from "./components/Navbar"
import ExerciseDetails from "./pages/exerciseDetails"
import Footer from "./components/Footer"

function App() {


  return (
    <Box width={'400px'} sx={{width:{xl:"1488px"}}} m={"auto"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetails/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
