import { Link, Container,Button,Checkbox, FormGroup, Typography,Input,FormControlLabel} from '@mui/material'

import React from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Login = () => {
  return (

<>
<FormGroup 
    sx={{
        zIndex:2,
        textAlign:'center',
        width:"500px",
        height:"650px",
        m:'80px auto',
        justifyContent:"center",
        backgroundColor:"white",
        borderRadius:3,
        boxShadow:4

    }}>

    <LockOpenIcon
            sx={{
                fontSize: 50,
                color: "white",
                backgroundColor:"green",
                m:'0 auto',
                borderRadius:10,
                p:2,
            }}
            />

        <Typography
            variant="h2" 
            component="h2"
        >
            Sign in
        </Typography>

        <Input placeholder="Username *" 
        
            sx={{
                m:'15px auto',
                width:'90%'
            }}
        />
        <Input placeholder="Password *" 
            sx={{
                m:'15px auto',
                width:'90%'
            }}
        />

        <FormControlLabel control={<Checkbox />} label="Remember Me" 
        
            sx={{
                ml:2
            }}
        />
        <Button variant="contained"
        
            sx={{
                m:"8px auto",
                width:"80%",
                py:1,
                fontSize:17,
                backgroundColor:"green"
            }}
        >SIGN IN</Button>

    <Container
    
        sx={{
            textAlign:"left",
            mt:1,
        }}
    >
        <Link href="#">forget password?</Link>
        <p>
            Don't have an account? <span> <Link href="#">Sign up</Link></span>
        </p>
    </Container>

    </FormGroup>

</>
  )
}

export default Login