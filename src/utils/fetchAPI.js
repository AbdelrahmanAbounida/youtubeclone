import axios from 'axios'


const getSearchResults = async (searchItem)=>{
   
    const options = {
        method:"GET",
        url: `https://youtube-v31.p.rapidapi.com/search`,
        params: {
        q: `${searchItem}`,
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        },
        headers: {
        'X-RapidAPI-Key': '32ee81c912msh349a32b3536e3fep13803ejsn725094ec79b5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        },
    };
   return await axios(options);
  };


const getVideoDetails = async (videoId)=>{
   
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {part: 'contentDetails,snippet,statistics', id: videoId},
        headers: {
          'X-RapidAPI-Key': '32ee81c912msh349a32b3536e3fep13803ejsn725094ec79b5',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

   return await axios(options);
  };

  export {getSearchResults,getVideoDetails}