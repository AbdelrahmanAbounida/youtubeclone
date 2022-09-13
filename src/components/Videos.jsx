import { Typography, Stack} from "@mui/material";
import React from "react";
import {VideoCard} from './index'
import {Pagination} from '@mui/material'
import {useState} from 'react'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { purple,red } from '@mui/material/colors';

const Videos = (props) => {

  const [page, setPage] = useState(1);
  const videosPerPage = 15;

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


  return (
   <>
    <Stack
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: 47,
          ml: 2,
          pb:1,
          textTransform: "uppercase",
          alignSelf:{sm:"center",md:"start"}
        }}
      >
        <span>{props.currentCategory}</span> <span style={{ color: "#FC1503" }}>Videos</span>
      </Typography>

        <Stack direction={"row"} flexWrap="wrap" gap={2}
        sx={{
          justifyContent:"center" ,
          mt:1,
          width:"100%"
        }} 
      >      
          {
            props.videos.slice((page-1)*videosPerPage,(page-1)*videosPerPage+videosPerPage).map((video)=>(
              
                <VideoCard video={video} key={video.id.videoId} />
              
            ))
          }

        {/* <MyPagination page = {props.page} setPage={props.setPage}/> */}


          </Stack>
          <ThemeProvider theme={theme}>
        <Pagination 
        page={page}
        onChange = {(_,num)=>{setPage(num);}}
        
        count={Math.ceil(props.videos.length/videosPerPage)} 
        color="error" 
        size="large" 
        sx={{ mt:2,mb:3,mx:"auto",justifyContent:"center",alignItems:"center"}}
        />
        </ThemeProvider>


    </Stack>

            

   </>
  );
};

export default Videos;
