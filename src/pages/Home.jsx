import { Box, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"80vh", p:2}}>
        <Typography color='primary' sx={{fontSize:"2rem"}}>This is only for demo</Typography>
    </Box>
  )
}

export default Home