import { Stack , Box} from '@mui/material';
import React from 'react'
import {Sidebar,Videos} from './index'
import { useEffect, useState } from "react";
import { getSearchResults } from "../utils/fetchAPI";


const Feed = (props) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {   
      getSearchResults(`${props.currentCategory} course`).then((v) =>
        setVideos(v.data.items)
      ).catch((err)=>{
        setVideos([])
      })
       
    }, [props.currentCategory]);

  return (
    <>
        <Stack
            sx={{
                flexDirection:{sx:'column',md:'row'},  
            }}
        >
            <Box
                sx={{
                    alignItems:"center",
                    px:{xs:0,md:3},
                }}  
                >
                <Sidebar currentCategory={props.currentCategory} setCurrentCategory={props.setCurrentCategory}/>
            </Box>    
                <Videos currentCategory={props.currentCategory} videos={videos}/>   
                
        </Stack>

    </>
  )
}

export default Feed