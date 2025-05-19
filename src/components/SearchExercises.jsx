// import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"

const SearchExercises = () => {
  return (
    <Stack alignItems="center" justifyContent='center' sx={{mt:{lg:'44px', md:'80px', xs:'37px'}}} p='20px'>
      <Typography fontWeight={'700'}
      sx={{fontSize:{lg:'44px', xs:'30px'}}}
      mb={'50px'} textAlign={"center"}>Awesome Exercises You <br/> Should Know</Typography>
      <Box direction={"row"} position="relative" mb="72px">
      <TextField
      sx={{
        input:{
          fontWeight:'700',
          border:'none',
          borberRadius:'4px'
        }, 
        width:{lg:'800px', xs:'350px', background:'#fff', borderBottomLeftRadius:'20px',
        borderTopLeftRadius:'20px'},
        }}
      height='76px'
      values=''
      onChange={()=>{}}
      placeholder='Search Exercises'
      type='text'
      />
      <Button className='search-btn' 
      sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', fontSize: { lg: '20px', xs: '14px' } }}
      >Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises 