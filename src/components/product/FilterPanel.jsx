import { useState, useEffect } from "react";
import { ProSidebar } from "react-pro-sidebar";
import { Box, Checkbox, Collapse, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, useTheme } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "@/components/dashboardAdmin/theme";

const Sidebar = ({ sizes }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [selectedItems, setSelectedItems] = useState({});
  const [openDescuentos, setOpenDescuentos] = useState(false);
  const [openProductos, setOpenProductos] = useState(false); 

  const handleToggle = (value) => () => {
    const currentIndex = selectedItems[value];
    const newSelectedItems = {
      ...selectedItems,
      [value]: currentIndex ? false : true,
    };

    setSelectedItems(newSelectedItems);
  };




  return (
    <Box
      sx={{ 
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        height: "105%",
        width: "100%",
        display: "flex",
  position: "relative",
      }}
    >
      <ProSidebar >
        <Box textAlign="center">
          <Typography
            variant="h6"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
            Filtros
          </Typography>
        </Box>
        <Divider sx={{ margin: '35px 30px' }} />
        <Box>
        <Typography variant="h6" 
    sx={{
      textAlign: 'center', // Centra el texto horizontalmente
      marginBottom: '10px', // Espacio inferior para separación
      color:'#111',
    }}
  >Talla </Typography>
   <Divider sx={{ margin: '12px 30px' }} />
          <Grid container spacing={2} alignItems="center" paddingRight="42px" paddingLeft="42px">
            {sizes.map((size, index) => (
              <Grid item xs={4} sm={3} md={4} key={index}>
                <Paper elevation={3} style={{ textAlign: 'center', padding: '5px' }}>
                  <Typography variant="body2">{size}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider sx={{ margin: '20px 30px' }} />
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              color: 'black',
              
            }}
            onClick={() => setOpenProductos(!openProductos)}
          >
            <Typography variant="h6" sx={{}} >
              Tipo de Productos
            </Typography>
            {openProductos ? <ExpandLess sx={{ marginRight: '16px' }}/> : <ExpandMore  sx={{ marginRight: '16px' }}/>}
          </Box>
          <Collapse in={openProductos} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{color:'black'}}>
              {['Poleras', 'Poleron ', 'Chaquetas'].map((item, index) => {
                const labelId = `checkbox-list-label-${index}`;

                return (
                  <ListItem key={index} role={undefined} dense button onClick={handleToggle(item)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={selectedItems[item] === true}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        sx={{
                          '&.Mui-checked .MuiSvgIcon-root': {
                            color: '#111',
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={item} />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </Box>
        <Divider sx={{ margin: '10px 20px' }} />
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              color: 'black'
            }}
            onClick={() => setOpenDescuentos(!openDescuentos)}
          >
            <Typography variant="h6" style={{ margin: 0 }}>
              Pura verga compa
            </Typography>
            {openDescuentos ? <ExpandLess sx={{ marginRight: '16px' }} /> : <ExpandMore sx={{ marginRight: '16px' }}/>}
          </Box>
          <Collapse in={openDescuentos} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{color:'black'}}>
              {['Hasta %60', 'Hasta &40 ', 'Hasta %40 '].map((item, index) => {
                const labelId = `checkbox-list-label-${index}`;
                
                return (
                  <ListItem key={index} role={undefined} dense button onClick={handleToggle(item)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={selectedItems[item] === true}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        sx={{
                          '&.Mui-checked .MuiSvgIcon-root': {
                            color: 'black',
                          },
                        }}
                      />
                      
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={item} />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </Box>
        <Divider sx={{ margin: '60px 0' }} />
      </ProSidebar>
      
    </Box>
  );
};

export default Sidebar;
