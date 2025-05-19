import React from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'


const HeroBanner = () => {
  return (
    <Box
    sx={{mt:{lg:'100px', xs:'70px'}, ml:{xs:'50px'}}} position={"relative"} p={"20px"}>
        <Typography color={'#ff2625'} fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
        </Typography>
        <Typography fontWeight={"700"}  sx={{fontSize:{lg:"44px", xs:"40px"}}} mb={'23px'} mt={"30px"}>
        Sweat, Smile <br/> And Repeat
        </Typography>
        <Typography fontWeight={"500"} fontSize={'20px'} mb="30px">
        checkout the most effective exercises
        </Typography>
        <Stack>
              <a href="#exercises" style={{ textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '10px', fontSize: '20px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
        <Typography fontWeight={"600"} color='#ff2625'
        sx={{opacity:"0.2", display:{md:'block', sm:"none"}, fontSize:{lg:'200px'}}} zIndex={'100'}>
           WORKOUT
        </Typography>
        <img src='/banner.png' alt='banner' className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner