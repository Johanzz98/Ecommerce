import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Slide from '@mui/material/Slide';

const style = {
  position: 'absolute',
  top: '40px',
  left: '5px',
  width: '90%',
  height: '30px',
  border: '2px',
  borderRadius: 10,
  boxShadow: 4,
  p: 4,
  backgroundColor: '#f0f0f0', 
  alignItems: 'center', 
  borderRadius: '30px', 
  padding: '6px', 
  margin: '0 20px', 
};

const inputStyle = {
  marginLeft: 20, 
  flex: 1,
  width: '90%',
  fontSize: '0.9rem',
  maxHeight: '0.9rem',
  
};

const styleBox = {
  backgroundColor: 'white',
  height: '125px',
};



export default function SearchModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <IconButton onClick={handleOpen}><SearchIcon style={{ color: 'black' }}/></IconButton>
      <Modal open={open} onClose={handleClose}>
        <div > 
          <Box sx={styleBox}>
            <Slide direction="left" in={open} inEnter sx={style}>
              <Box>
                <InputBase
                  placeholder="Search..."
                  inputProps={{ 'Roboto': 'search' }}
                  style={inputStyle}
                />
                <SearchIcon style={{ color: 'black' }} />
              </Box>
            </Slide>
          </Box>
        </div>
      </Modal>
    </div>
  );
}




/*import React, { useState } from 'react';
import { Box, Dialog, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchModal = (props) => {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState(''); // Estado para el valor de búsqueda

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value); // Actualiza el valor de búsqueda
    };

    const handleSearchSubmit = () => {
        // Aquí puedes manejar la lógica de búsqueda si es necesario
        console.log("Searching for:", searchValue);
    };

    return (
        <>
            <IconButton onClick={handleOpen}><SearchIcon/></IconButton>
            <Dialog open={open} onClose={handleClose}>
                <Box p={2}>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 10 }}>
                        <SearchIcon />
                        <InputBase
                            placeholder="Search..."
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    handleSearchSubmit(); // Llama a la función de búsqueda al presionar Enter
                                    handleClose(); // Cierra el modal después de buscar
                                }
                            }}
                            style={{ marginLeft: 8, borderRadius: 10, flex: 1 }}
                        />
                    </div>
                </Box>
            </Dialog>
        </>
    );
};

export default SearchModal;


*/