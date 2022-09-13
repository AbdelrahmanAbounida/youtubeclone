import React from "react";
import {  Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
// import { IconButton } from "@mui/material";
import Searchbar from "./Searchbar";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
      <Stack
      
        alignItems="center"
        sx={{
          flexDirection:{sx:"column",sm:"row"},
          zIndex:'1',
          position: "sticky",
          py: 1,
          top: 0,
          mt:1,
          pb:3,
          bgcolor: "#000",
          justifyContent: {xs:"center",sm:"space-between"},
          alignItems:"center",
          border:"#fff",
        }}
      >
        <Link to="/" style={{ paddingLeft: 11, marginTop: 4, marginBottom: 4,alignItems:"center",justifyContent:"center",mx:"auto",pt:4 }}>
        <img src={logo} alt="youtube logo" height={'45vw'} />
          <Paper sx={{color:"red",top:17,px:3,position:"absolute",ml:9,py:1,fontSize:{xs:14,sm:25},fontWeight:"bold",display:{xs:"none",md:"block"}}}>Abounida Youtube</Paper>
        </Link>

        <Searchbar />
      </Stack>
  );
};

export default Navbar;
