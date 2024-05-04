/* @jsxRuntime classic */
"use client";
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Paper, Typography } from '@mui/material';
import SignUp from '../signup/page';
import Login from '../login/page';




const paperStyle = {
  width: 500,
 boxShadow: "none",
 border:'1px solid grey',
  
  margin: "auto",
};


const SignInOutContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component="div"> {children} </Typography>
          </Box>
        )}
      </div>
    );
  };

 

  return (
    <div>
      <Paper elevation={12} style={paperStyle}>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
          <Tab label="Login" />
          <Tab label="SignUp" />
        </Tabs>
        
        <TabPanel value={value} index={0}>
          <Login handleChange={handleChange}/>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <SignUp/>
        </TabPanel>
      </Paper>
      
    </div>
  );
};

export default SignInOutContainer;
