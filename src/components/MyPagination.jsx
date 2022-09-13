import React from 'react'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { purple,red } from '@mui/material/colors';
import { Pagination} from "@mui/material";
import { useEffect, useState } from "react";


const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: red[700],
      },
      error: {
        main : '#FC1503',
      }
    },
  });


const MyPagination = (props) => {


  const handleChange = (e)=>{props.setPage(e.target.value)}

  return (
    <ThemeProvider theme={theme}>
        <Pagination 
        page={props.page}
        count={10} 
        color="error" 
        size="large" 
        sx={{ mt:2,mb:3,mx:"auto",justifyContent:"center",alignItems:"center"}}
        onChange={(e)=>{props.setPage(e.target.value)}}
        />
    </ThemeProvider>
  )
}

export default MyPagination