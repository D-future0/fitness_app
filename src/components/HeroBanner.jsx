import React from 'react'
import { Box, Typography } from '@mui/material'


const HeroBanner = () => {
  return (
    <Box
    sx={{mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'}}} position={"relative"} p={"20px"}>
        <Typography color={'#ff2625'} fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
        </Typography>
        <Typography fontWeight={"700"}  sx={{fontSize:{lg:"44px", xs:"40px"}}}>
        Sweat, Smile <br/> And Repeat
        </Typography>
    </Box>
  )
}

export default HeroBanner