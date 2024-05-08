import NavListDrawers from "./NavListDrawers";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, styled } from "@mui/material";
import { useState, useEffect } from 'react';
import SearchContainer from "./SearchContainer";
import SearchModal from "./SearchModal";
import LoginDrawers from "./LoginDrawers";
import LoginDrawerMax from "./LoginDrawerMax"
import NextLink from 'next/link'; // Importa el componente NextLink
import { ThemeProvider, createTheme } from '@mui/material/styles';
/* Icons */
import InboxIcon from "@mui/icons-material/Inbox";
import MenuIcon from "@mui/icons-material/Menu";
import DraftsIcon from "@mui/icons-material/Drafts";
import SearchIcon from '@mui/icons-material/Search';
import CasesIcon from '@mui/icons-material/Cases';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CartDrawersMax from "./CartDrawers.jsx";
import CartDrawers from "./CartDrawersMax";

const theme = createTheme({
    palette: {
      primary: {
        main: '#fafafa', // Color de fondo del navbar
      },
      secondary: {
        main: '#212121', // Color del texto del navbar
      },
    },
  });
  

const navLinks = [
    {
        title: "Home",
        path: "/home",
        icon: <InboxIcon />
    },
    {
        title: "Login",
        path: "/login",
        icon: <DraftsIcon />
    },
    {
        title: "Register",
        path: "SignInOutContainer",
        icon: <MenuIcon />,
    }
];
/*titulo,imagen, price*/
const rightNavLinks = [
    {
        title: "Like",
        path: "#Like",
        icon: <FavoriteBorderIcon />,
    },
   
];

const TOPrightNavLinks = [
    {
        title: "Centro de Ayuda | ",
        path: "#Like",
        icon: <FavoriteBorderIcon />,
    },
    {
        title: "registrarse/Login",
        path: "SignInOutContainer",
        icon: <CasesIcon />,
    },
];


const SecondAppBar = styled(AppBar)(({ theme }) => ({

    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },

    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
   
    backgroundColor: '#f5f5f5',
}));

const FirstAppBar = styled(AppBar)(({ theme, showSecondAppBar }) => ({
    transition: theme.transitions.create(['top'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    top: showSecondAppBar ? '64px' : '0', // Ajustar la position de top basado en la visiblidad de SecondAppBar 
    [theme.breakpoints.down('sm')]: {
        top: 0, //Cuando se esconda secondAppBar, pegue en el top 
        marginTop: 0, // Y con esto quito todo tipo de margen
    },
   
}));


const imgPath = "https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.10/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg";



export default function Navbar() {
    const [open, setOpen] = useState(false);

    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call the function to set the initial window width

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    

  
    
    return (
        <ThemeProvider theme={theme}>
        <>
            <SecondAppBar>
                <Toolbar>
                    <Box sx={{ display: { xs: "none", sm: "block" }, alignItems: 'center', marginLeft: 'auto', marginRight: '5rem', paddingBottom: '20px' }}>

                        {TOPrightNavLinks.map((item, index) => (
                            <Box key={index} sx={{ display: 'inline-block', marginRight: index === rightNavLinks.length - 1 ? '0' : '-0.5rem' }}>
                                <Button
                                    color="inherit"
                                    key={item.title}
                                    component="a"
                                    href={item.path}
                                    sx={{ fontSize: '0.8rem' }}
                                >
                                    {item.title}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </SecondAppBar>



            <FirstAppBar position="fixed" sx={{ top: '42px' }}> {/* Ajusta la posición para que esté debajo del segundo navbar */}

                <Toolbar>

                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                        <MenuIcon />

                    </IconButton>

                    <Typography variant="h6" sx={{ width: '60px', aspectRatio: 'auto 60 / 28.8', height: '28.8px', marginLeft: '42px', cursor: 'pointer' }}>
    <NextLink href="/">
        <img src={imgPath} alt="Swoosh Icon" />
    </NextLink>
</Typography>
                   {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navLinks.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                component="a"
                                href={item.path}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                    */}
                    <Box sx={{ flexGrow: 1 }} />

                          
       {
  windowWidth > 800 ? (
    <SearchContainer >
      <SearchIcon />
    </SearchContainer>
  ) : (
    <SearchModal>
      <SearchIcon />
    </SearchModal>
  )
}
                     

                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '0.9rem' }}>
                        {rightNavLinks.map((item, index) => (

                            <Box key={index} sx={{ marginRight: index === rightNavLinks.length - 1 ? '0' : '0.5rem' }}>

                                <IconButton
                                    color="inherit"
                                    component="a"
                                    href={item.path}
                                >
                                    {item.icon}
                                </IconButton>
                            </Box>
                        ))}

                    </Box>

                    
{
 windowWidth > 600 ? (
    <CartDrawers />
 ) : (
    <CartDrawersMax/>
 )
}

                    {
 windowWidth > 600 ? (
    <LoginDrawers />
 ) : (
    <LoginDrawerMax />
 )
}



                </Toolbar>
            </FirstAppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavListDrawers navLinks={navLinks} />
            </Drawer>
        </>
        </ThemeProvider>
    );
}
