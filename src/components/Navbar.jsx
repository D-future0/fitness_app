import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Stack
    direction={"row"}
        justifyContent={"space-around"}
        sx={{gap:{sm:"122px", xs:"122px"}, mt:{sm:"32px", xs:"20px"}, justifyContent:"none"}} 
        px={"20px"}>
        <Link to={"/"}>
      <img src={'/logo.png'} alt={'boi-gym-logo'} style={{width: '120px'}}/>
        </Link> 
        <Stack
        direction={"row"}
        gap={"40px"}
        alignItems={"flex-center"}
        >
            <Link to={"/"}>
            Home
            </Link>
            <a href='#exerciseDetails'>Exercise</a>
        </Stack>
    </Stack>
  )
}

export default Navbar