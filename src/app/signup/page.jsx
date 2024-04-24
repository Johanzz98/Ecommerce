"use client";
import React from 'react';
import { Avatar, Button, Checkbox, Grid, Paper, TextField, Typography } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'Yup';


import FormHelperText from '@mui/material/FormHelperText';


const SignUp = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: '0 auto',
  };

  const headerStyle = {
    margin: 0,
  };
  const avatarStyle = {
    backgroundColor: '#002481',
  }
  const marginTop = {
    marginTop: 5,
  }

  const initialValues = {
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsAndConditions: false,
  }

  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);  // Corrección aquí
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .matches(
      /^[a-zA-Z]+$/,
      "Name should contain only letters"
    )
    .min(3, "It's too short")
    .required("Required"),
    email: Yup.string()
    .email("Enter a valid email")
    .required("Required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "Invalid email format"
    )
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
      "Only .com domains are allowed"
    ),

    gender:Yup.string().oneOf(["male","female","other"],"Required").required("Required"),
    phoneNumber:Yup.number().typeError("Enter valid Phone Numer").required('Required'),
    password:Yup.string().min(8,"Password minimum  length should be 8 ").required("Required"),
    confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matched").required("Required"),
    termsAndConditions:Yup.string().oneOf(["true"],"Accept terms & conditions")
  })

  return (
    <Grid >
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Grid item>
            <Avatar style={avatarStyle}>
              <AddReactionIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h4" style={headerStyle}>Sign Up</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" gutterBottom>Please fill this form to create an account</Typography>
          </Grid>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
              <Form>

                <Field as={TextField} fullWidth name="name"
                  label='Name' placeholder='Enter your Name' helperText={<ErrorMessage name="name" />} />
                <Field as={TextField} fullWidth name="email" label='Email'
                  placeholder='Enter your Email' helperText={<ErrorMessage name="email" />} />
                <FormControl style={marginTop}>
                  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                  <Field as={RadioGroup}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="gender"
                    name="gender"
                    style={{ display: 'initial' }}
                  >
                    <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </Field>
                </FormControl>
                <FormHelperText><ErrorMessage name="gender" /></FormHelperText>


                <Field as={TextField} fullWidth name="phoneNumber"
  label='Phone Number' helperText={<ErrorMessage name="phoneNumber" />} />
<Field as={TextField} fullWidth name="password" type="password"
  label='Password' helperText={<ErrorMessage name="password" />} />
<Field as={TextField} fullWidth name="confirmPassword" type="password"
  label='Confirm Password' helperText={<ErrorMessage name="confirmPassword" />} />

                <FormControlLabel

                  control={
                    <Field as={Checkbox}

                      name="termsAndConditions"
                      color="primary"
                    />
                  }
                  label="I accept the terms and conditions "
                />
                <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                <Button type='submit' variant="contained" disable={props.isSubmitting}
                > 
                {props.isSubmitting ? "Loading": "Sign Up"}
                </Button>



              </Form>
            )}
          </Formik>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default SignUp;
