import { Stack } from '@mui/system'
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {getSearchResults} from '../utils/fetchAPI';
import {Videos} from './index'

const VideoSearch = () => {
    const searchTerm = useParams()['searchItem'];
    const [videos,setVideos] = useState([])

    useEffect(() => {   
        getSearchResults(searchTerm).then((v) =>
          setVideos(v.data.items)
        ).catch((err)=>{
          setVideos([])
        }) 
      }, [searchTerm]);

  return (


    <Videos currentCategory={`Search for: ${searchTerm}`} videos={videos} />

    )
}

export default VideoSearch