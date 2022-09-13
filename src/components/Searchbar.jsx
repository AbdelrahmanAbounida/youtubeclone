import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import {Paper,IconButton} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

const Searchbar = () => {

  const [searchTerm,setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault() // prevent user from searching without input any thing 
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    }
  }
  
  return (
    <div>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            my: 1,
            pl: 2,
            borderRadius: 10,
            border: "1px solid #e3e3e3",
            boxShadow: "none",
            mr: { sm: 5, md: 12, lg: 15 },
          }}
        >
            <input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e)=>{
                console.log(e)
                setSearchTerm(e.target.value)
              }}
              style={{
                border: "none",
                outline: "none",
                width: "320px",

                marginLeft: "5px",
                fontSize: "17px",
              }}
            />
            <IconButton type="submit">
              <SearchIcon
                sx={{
                  fontSize: 30,
                  color: "red",
                }}
              />
            </IconButton>
        </Paper>
    </div>
  )
}

export default Searchbar