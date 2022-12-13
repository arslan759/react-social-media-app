import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

  return (
    <Box>
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography          
                    variant='h6' sx={{display : {xs : 'none' , sm : 'block'}}}>
                        Mogul
                </Typography>
                <Typography          
                    variant='h4' sx={{display : {xs : 'block' , sm : 'none'}}}>
                        M
                </Typography>
                
            </StyledToolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar