import React from 'react'
import { Stack,Button } from '@mui/material';
import {categories} from '../utils/constants'
import { useState } from 'react';

const Sidebar = (props) => {

  return (
      <Stack
      className='sidebar'
        sx={{
          // position:"fixed",
          top:0,
          bottom:0,
          overflow:"auto",
          height:{sx:"auto",md:"65%"},
          borderRight: '1px solid #3d3d3d',
          mt:2,
          flexDirection:{xs:"row",sm:'row',md:'column'},
        }}

      >
        {
          categories.map((category)=>(
            <Button
              className='cat-btn'
                sx={{
                  
                  backgroundColor:category.name === props.currentCategory && '#FC1503',
                  pr:{md:1,xs:2,sm:1},
                  py:{},
                  my:{md:1.2,sm:1,xs:1},
                  mr:3,
                  px:2,
                  fontSize:{xs:'3vw',sm:'2.5vw',md:'1.5vw',lg:'1.2vw'},
                  borderRadius:6,
                  border:{xs:1,md:0} ,
                  justifyContent:{xs:'center',sm:'center',md:'start'},
                  color:'white',
                  whiteSpace: 'nowrap',   
                  minWidth: {xs:'35%',sm:'28%'} ,
                  alignItems:'center' ,
                  fontWeight:'bold',                
                }}
              onClick={()=>{props.setCurrentCategory(category.name);}}
              key={category.name}
            >
              <span
              style={{
                color: category.name === props.currentCategory ? '#FFF' : '#FC1503',
                marginRight:'10px',
              }}
              >{category.icon}</span> 

              <span
                style={{
                  opacity: category.name === props.currentCategory ? 1 : 0.8,
                }}
              >{category.name}</span>
            </Button>
          ))
        }
      </Stack>
  )
}

export default Sidebar