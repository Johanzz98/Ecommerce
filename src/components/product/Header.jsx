import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Divider, Menu, MenuItem, Box } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';



const Header = ({ onMenuClick, onIconChange = () => {} }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDashboardIcon, setShowDashboardIcon] = useState(false);

   
    const toggleIcon = () => {
        const newShowDashboardIcon = !showDashboardIcon;
        setShowDashboardIcon(newShowDashboardIcon);
        onIconChange(newShowDashboardIcon);
    };


    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setIsMenuOpen(false);
    };

    return (
        <Box sx={{ marginTop:'64px'}}>
        <Typography>Todo Parrella</Typography>
        <Typography> Items total:</Typography>
        <AppBar position="relative" sx={{ marginTop: '12px' }}> {/* Agrega marginTop aquí */}
            <Toolbar sx={{ height: '48px' }}>
                <Typography variant="h6" >
                    Ropa Bella 
                </Typography>
                <Divider orientation="vertical" flexItem sx={{ margin: '0 16px' }} />
                
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={onMenuClick}
                >
                    <TuneIcon sx={{marginRight:'20px'}} />
                    <Typography sx={{marginRight:'46px'}}>Filtrar</Typography>
                </IconButton>
                
                <Divider orientation="vertical" flexItem sx={{ margin: '0 16px' }} />
                
                <IconButton
                    color="inherit"
                    aria-label="ordenar"
                    onClick={handleMenuClick}
                >
                    {isMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    <Typography sx={{marginLeft:'10px', marginRight:'20px'}}>Ordenar por</Typography>
                </IconButton>
                
                <Menu
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={handleCloseMenu}
                >
                    <MenuItem onClick={handleCloseMenu}>Nombre</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Precio</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Fecha</MenuItem>
                </Menu>

                 {/* Aquí es donde decides mostrar el icono basado en el estado */}
                 {showDashboardIcon ? (
                    <SpaceDashboardIcon onClick={toggleIcon} />
                ) : (
                    <ViewModuleIcon onClick={toggleIcon} />
                )}
            </Toolbar>
        </AppBar>
        </Box>
    );
};

export default Header;