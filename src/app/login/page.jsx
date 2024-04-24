"use client";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'Yup'


//icons
import LockPersonIcon from '@mui/icons-material/LockPerson';



const login = ({ handleChange }) => {

  const paperStyle = {
    padding: 20,
    height: '72vh',
    width: 300,
    margin: "0 auto"

  }

  const avatarStyle = {
    backgroundColor: '#002481',
  }

  const btnStyle = {
    margin: '8px 0',
  }

  const initialValues = {
    username: '',
    password: '',
    remember: false,
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().email('please enter valid mail').required("Required"),
    password: Yup.string().required("Required")
  })





  const onSubmit = (values, props) => {
    console.log(values)
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)

    }, 2000)

    console.log(props)
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockPersonIcon /> </Avatar>
          <Typography variant="h2"> Sign In</Typography>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props) => (
            <Form>

              <Field as={TextField} label='Username' name="username" placeholder='Enter Username'
                fullWidth required helperText={<ErrorMessage name="username" />}
              />
              <Field as={TextField} label='Password' name="password" placeholder='Enter Password' type='password'
                fullWidth required helperText={<ErrorMessage name="password" />} />

              <Field as={FormControlLabel}
                name='remember'

                control={
                  <Checkbox


                    color="primary"
                  />
                }
                label="Remember me"
              />

              <Button type='submit' color='primary' variant="contained"
                disabled={props.isSubmitting} style={btnStyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"} </Button>
              {console.log(props)}

            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography> Do you have an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>Sign Up </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default login