"use client";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "Yup";



const login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "108vh",
    width: 460,
    margin: "0 auto",
    boxShadow: "none",
   border:'1px solid grey',
   
  };

  const avatarStyle = {
    backgroundColor: "#002481",
  };

  const btnStyle = {
    margin: "8px 0",
  };

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter valid mail")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    console.log(props);
  };

  return (
    <Grid>
      <Paper elevation={12} style={paperStyle}>
        <Grid align="center">
        <Box>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZKyu34dHm6_lpBjCIvSi1vQ9sVBisYzn4cF5Ocv_Mw&s"
    alt="Under Armour Logo"
    style={{ width: "100px", height: "100px",borderRadius:'24px' }} // Ajusta el tamaño según sea necesario
  />
</Box>
          <Typography sx={{display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin:'12px 0 12px',
              fontSize: "42px",
              color: "#111",
              border: "none",
            
              textAlign: "center",
              fontFamily: " 'Helvetica', sans-serif",}}> Welcome Back</Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="Username"
                name="username"
                placeholder="Enter Username"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
                style={{ marginBottom: "16px" }}
                FormHelperTextProps={{ sx: { color: '#f44336' } }} // Aquí aplicamos el estilo al componente FormHelperText
              />
                
                <Field
  as={TextField}
  label="Password"
  name="password"
  placeholder="Enter Password"
  type="password"
  fullWidth
  required
  helperText={<ErrorMessage name="password" />}
  FormHelperTextProps={{ sx: { color: '#f44336' } }} // Aquí aplicamos el estilo al componente FormHelperText
/>
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                style={btnStyle}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Sign in"}{" "}
              </Button>
              {console.log(props)}
            </Form>
          )}
        </Formik>
        <Box>
          <Typography sx={{display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin:'12px 0 12px',
              fontSize: "14px",
              color: "#111",
              border: "none",
            
              textAlign: "center",
              fontFamily: " 'Helvetica', sans-serif",}}> Or sign in using</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAvVBMVEVHcEz8/f3////////+/v7s7u/6+vr5+vr5+vr9/f3////////5+vr////////Kzs/////////9/v74+fn4+fn////8vwbsTkJFiPPrQjI7q1gpp00yqVPrSTlAhfX9/f2hv/nwgHj2tLGt2bkqe/Q2gPV+qPd7woza5f2WuPns8v5ZtnHD48n92Yj80Wn+6sD4yMXtZ13znpn8xSnwuh3v6+WIwbFwoPb0qKPpKxT1mx7AtydjuXgcpjNCk8nTYqeQAAAAFXRSTlMA5d2fnApdnVLJpWJiowsJZNGXl5g9ng+vAAABP0lEQVQokY2S2XqCMBCFQVGWulRbkIRABASK0FZtq3Z9/8fqZCDK0oueCzJf/sxhJhlF+Z/G1kJVF9a4T2ZD+6LhrM1u7ZZumsyyO5pe2RQ3+O4Qhoddbd32jHzigwiJms4jTAvJqtb7GekIoSbC0F+tCNnvCSFhZawhRE/I84UfP4eyKMEMEXxA3lunYqN2fXZe/ajbjvA1YX10HIeLjXyNyrcQmwAHsD45zgue3gSozQPEgx50UYmELdtTmqYngNJ2WRVEY1nIOnATsS5lK5+MenUr28ANUtmKIvxij1KGuaUbuFgPxxvSxd4Xo9TzisLz2E+SS1e4eCylgFzK4Aj7PuJLVBevTPBfMSQxBp+qsol8UK167DLLsmNZlaVfR0Hv3muDwVjyJuKd8ZzrF8z1eX90jXtTVc07o0/+1C9hwDM1yvfWEgAAAABJRU5ErkJggg=="
              alt="Google Logo"
              style={{ cursor:"pointer", width: "24px", height: "24px", marginRight: "10px",border:'1px solid blue',borderRadius:'4px', padding:'2px 36px 2px 36px', }}
            />
          
              <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD30lEQVR4AayShW4cMRCGLQgzHArKDK9xor5KnyDMSZmZmZmZRWWuKMy8e3y7U8/KvXG6PlR+6dM3Wtv/tElYulnzHXI918HnvQZ7PNfgGfdvz1XQEJzFtz14B++y+crCO+D2XoG97ssw475swhwuGWSOK26T3zX24luWbZbehTxe1uS+YOiuCzGwOB+3mA2yAvcFU8cO7Mrsf30R3Lz4nfMcL+eglZyNkm3QGXZhJ0snzrOw3nE61uc4zQs4wmKOxC3PaIszZA4/I2On6zSsY8ni4P9Kx6loX/WJMCCOk5G47dCZ+r79HLtxR8LfueN45F318TDEORYiW4TJHBcvbf8QhT/TJoRiJkQME2bCJvRpJnwaM8TbuX24Q/k3wS82VR0JwRwOB8nSjF5xJgRvhgxIEtEj3kngLibHcQzc1YdDetWhICSj8iD5UW8MUsX+PoBGdNzJ/qXqQHBv5f4AVHCEBX4yp1LMG26EIJ2I+2hpFn18J8OsuQi5lXv9MxV7/ZAul35HIY0k7cCduJtV7tN95bt0sNgdt5g1sjR/GrX/+E9+j8DyI35xV7eh6q/cpftY2Q5tDwfSoVxYj5jwf5Yf4qV0j+bknXtY2bbZZxxIh9KtlkERfjaD52QFcgdSvl17xkq3zP4u3TwDSAlZAZ2pgmeZgrtZ6aZpraRrGpR0kuVZFTpXv1eBu1lpx5RW3DEFFu1kmWzSM21AiehC04wWc/uUxorbpn4XtU6CiuLWKcvZ5HVPxN7ZQkZwNytqnnxW1DwBSGETWSabnPsSkjuV4G5W2DC+hwPJyCZdL/22ngLJYt7DihonfAW1Y2BRR5bJJhtvaeL9OFoJ7mZrGiC3sHb8b6vlcdswFATRL2ZCDagAX12H+3DOOWe7A8d2fFQZlsRMXpzu6z8kVnGdPcDgDbRJ5InP/nFB3lFOTMlck1TVuW8gD8wzcRO3FeQfFvfeQUbeQU5M2K0yOGBJXlVjcmaO1HFTsernecPZTd/c3ZQ0CeTM7M+S3L0MNWbpT/a94abql7ebXDrburidECiZa5LsspZUZO+kzNI2Z31r9JPsmlx7M2namzHZG7J1vaQkp6qBff09csYN3FKS6jt5w1mPA2stos8sCb/b6zFzIPMcduOG+kzORjpurUaBtRKRuRwSsz8LqnpWQuaoV8MAu9V3VF/MG9Zi2DQXAxrwUlhSENeZA7aWwyY/+bc1tkKu/hOXxkLwZswHVLlTUlINNW0mjFnswC71W+FtGLOd+9ps+7k2qw/MtEmSrlNZB+c6z5jBrPo3nZNjzXQm1FTrjgSp6dYDakr3oFd9U+9y1lO9tTZT6gAAAABJRU5ErkJggg=="
              alt="Facebook Logo"
              style={{ cursor:"pointer",width: "24px", height: "24px", marginRight: "10px",border:'1px solid blue',borderRadius:'4px', padding:'2px 36px 2px 36px', }}
            />
          
              <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4Aa1XQ3hkQRjc+ynX2OZtbfu+tm3b1nlt27a9O4qNS5xxbdd+cTKvXydT31fJoPuvmvf6/ejw86dBlX6CwwQXCq6t5cLaz/xV4+ld6F8r9NdgsCAjIwf5+UUoLCwBydf8jN+JNQbBddzjDQM+gocErRSyWm2QgWu4lntq9/q01UAfwYKCgmK43W6ognu4lzEE+6oamCboLC0tR3vBGIwlOF2vgZm5uQWoqamBXrhcLpw5cxZ79uxFKxCxrGBMxpYZ6Eu33KAXNDp+/AQEBgbzv8Y6Kxi7+e1ofuAKVS/7zp27KE7i6dNnem5HAbVaM3CYh0YF/PWRkdEUpxHoQe3BPNTcQJCgTc9pT0tLh8VigdPpBLFv3368evVKBC7A16/fkJmZKX06qCXo39jAej67Wnjx4iVGjBiJ0NBwBAeHYsCAgTh48BCuXLmCKVOmIioqBrwS4eGRGDduPMxmMzyBWtRsbMCglWSePXuOkJAwCuhmnz79YLVaPSUrGjDWGQhgCvWEyspKdOrURUk8JiYO799/0Exg1KQ2DQxjHveEO3fuKomTPBcyUJPaNLCQxcQTNm3arGzAYDBABmoK7UU0sE7rAC5dukxJPCgoRPy6DMhATWpLDWzbtl35Cty//0DBgOQW3LhxU9nAsGEj4HA4dN0CySHkwvy6bKfECRMmISsrS34IZY8hMXnyFAZV5rFjx6WPoa5E9PnzZ2XxpKQUlJaWaiUik1IqXrBgkZKB06fPwBOKiv4fwA3Ni5FdK3NVVFSgd+++usRnzJilXIzII7JynJOTAxaa7t17Yt68+bh37z6+fPmKCxcuYvToMejVqzdWrVrNMi0rx4cVGxIFKDQkCi2ZAhRaMklTavWqeF6epCltxuneasvLyurb8lmqg0lfLw4m/dozmh0RtBUV6R/NuJZ7avf6eGs4ZeIwMoVmZrYcTvkZv+MarlUZTlUZIDi8diRfX8uFtZ8FqMb7Bx+2VJbBTrlcAAAAAElFTkSuQmCC"
              alt="Apple Logo"
              style={{ cursor:"pointer",width: "24px", height: "24px", marginRight: "10px",border:'1px solid blue',borderRadius:'4px', padding:'2px 36px 2px 36px', }}
            />
         
          </Box>
          <Divider sx={{ borderColor: "#9e9e9e", margin: "24px 0", padding:"2px 36px 12px" }} />
        </Box>
            <Box sx={{
              alignItems: "center",
              justifyContent: "center",
              margin:'12px 0 12px',
              fontSize: "14px",
              color: "#111",
              border: "none",
            
              textAlign: "center",
              fontFamily: " 'Helvetica', sans-serif",}}>
        <Typography >
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography sx={{ marginTop: '4px' }}>
  {'\u00A0'} Do you have an account?{' '}
  <Link href="#" onClick={() => handleChange("event", 1)}>
    Sign Up {'\u00A0'}
  </Link>
</Typography>
        </Box>
        <Divider sx={{ borderColor: "#9e9e9e", margin: "24px 0", padding:"2px 36px 12px" }} />
        <Box>   
        <Typography sx={{
 
  alignItems: "center",
  justifyContent: "center",
  margin: '12px 0', // Eliminé el margen inferior y añadí solo el margen vertical
  fontSize: "11px",
  color: "grey",
  border: "none",
  textAlign: "center",
  fontFamily: "'Helvetica', sans-serif"
}}>
  Click "Sign In" to agree to Parrella{'\u00A0'} <Link href="#" underline="always"> Terms of Service{'\u00A0'} </Link> and acknowledge that
</Typography>
         <Typography sx={{display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin:'12px 0 12px',
              fontSize: "12px",
              color: "grey",
              border: "none",
            
              textAlign: "center",
              fontFamily: " 'Helvetica', sans-serif",}}> Parrella{'\u00A0'}  <Link href="#" underline="always">Privacy Policy{'\u00A0'} </Link> applies to you.</Typography>
        </Box>

      </Paper>
   
    </Grid>
  );
};

export default login;