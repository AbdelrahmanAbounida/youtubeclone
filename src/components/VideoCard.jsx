import React from 'react'
import {Card,CardActionArea,CardMedia,CardContent,Typography,Chip} from '@mui/material'
import { getVideoDetails } from '../utils/fetchAPI';
import {Link} from 'react-router-dom';
import { grey,red } from '@mui/material/colors';


const videoCard = (props) => {

    const videoThumbnail  = props.video.snippet.thumbnails.high.url;
    const videoTitle = props.video.snippet.title;
    const channelTitle = props.video.snippet.channelTitle;
    const videoId = props.video.id.videoId

  return (
    <Card 
    sx={{ 
        width: props.width? props.width : {md:'290px',sm:358,xs:'90%'}, 
        height:props.height? props.height :{md:355,sm:290,xs:325},
        mb:3,
        }}>
        <CardActionArea >
        <Link to={`/video/${videoId}`}>
            <CardMedia
                    component="img"
                    image={videoThumbnail}
                    alt="video thumbnail"
                    sx={{
                    height:props.imgHeight?props.imgHeight: {md:163,sm:140,xs:190}
                    }}
                />
        </Link>


            <CardContent 
            sx={{
                backgroundColor:'#1c1c1c',
                color:'white',   
                height:props.contentHeight?props.contentHeight:{md:162,sm:120,xs:110}              
                 }}>

                <Typography 
                variant="body1" 
                sx={{
                fontSize:{md:'1.01vw',sm:'2.5vw',xs:'3.5vw'},
                mb:1
                }}
                >
                {videoTitle}
                </Typography>

                <Typography variant="body3" 
                    sx={{
                    color:'#fff',
                    position:'absolute',
                    top:'85%',
                    left:'4%',
                    pt:2
                    }}>
                <Chip label={channelTitle} size="small" sx={{mb:2,backgroundColor:grey[700],color:"white"}}/>

            </Typography>

            </CardContent>


        </CardActionArea>
  </Card>
  )
}

export default videoCard