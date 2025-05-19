import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png';


const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
    type={"button"}
    alignItems={"center"}
    justifyContent={"center"}
    className={'bodyPart-card'}
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '170px', height: '180px', cursor: 'pointer', gap: '30px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '170px', height: '180px', cursor: 'pointer', gap: '30px', mb: '20px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="body part" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Arial" color="#242424" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart