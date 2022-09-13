import { Stack,CardMedia, Chip, Typography, Paper } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import {getVideoDetails} from '../utils/fetchAPI'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const VideoPage = () => {

    const videoId = useParams()['id'];
    const [videoDetails,setVideoDetails] = useState({})

    useEffect(()=>{
        getVideoDetails(videoId).then((res) =>
            setVideoDetails(res.data.items[0])
      ).catch((err)=>{
        setVideoDetails([])
      })
    },[videoId])
    console.log(videoDetails)
    return (
        <Stack 
            sx={{
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                mx:"auto",
                width:'70%'
            }}
        >
        <CardMedia
            component='iframe'
            allowfullscreen="allowfullscreen"
            allow='autoplay'
            sx={{
                display: 'block',
                mt:3,
                height:{lg:"40vw",md:'40vw',sm:'60vw',xs:'70vw'}
            }}
            image={`//www.youtube.com/embed/${videoId}?autoplay=1`}
            height="auto" width="300" 
        />

        <Typography 
            gutterBottom 
            variant="h4"
            component="div"
            sx = {{
                color:"white",
                mt:2,
                alignSelf:"start"
            }}
            >
                {videoDetails.length? videoDetails.snippet.title : ''}
            </Typography>

        <Stack 
            direction="row" 
            spacing={1}
            alignSelf="start"
            sx={{mt:1}}
            >
                <Paper 
                sx={{
                    fontSize:25,
                    px:1.5,
                    py:0.5,
                    borderColor:'success',
                    borderRadius:5,
                    justifyContent:'center',
                    alignItems:"center"
                }}>
                 {videoDetails.length? videoDetails.statistics.viewCount : 0} 
                <Person2OutlinedIcon color="red" sx={{ml:2,color:'red'}}/></Paper>

            <Paper 
                sx={{
                    fontSize:25,
                    px:1.5,
                    py:0.5,
                    borderColor:'success',
                    borderRadius:5,
                    justifyContent:'center',
                    alignItems:"center"
                }}>
                 {videoDetails.length? videoDetails.statistics.likeCount : 0} 
                <ThumbUpOffAltIcon color="red" sx={{ml:2,color:'red'}}/></Paper>

            

        </Stack>


        </Stack>
    )
}

export default VideoPage