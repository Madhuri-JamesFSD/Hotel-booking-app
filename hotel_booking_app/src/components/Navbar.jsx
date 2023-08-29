import React, { useState } from 'react';
import { AppBar, Avatar, Box, Container, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

export function Navbar({ hotels=[], setHotels, originalHotels=[] }) {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        const filteredHotels = hotels.filter((hotel) =>
            hotel.address.toLowerCase().includes(searchValue.toLowerCase()) ||
            hotel.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setHotels(filteredHotels);
    };

    return (
        <>
            <AppBar position="static" color="inherit">
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    alignItems: 'center',
                        paddingY: 1.2,
                    }}
                    >
                        <Typography onClick={() => navigate('/')}
                            sx={(cursor = "pointer")}
                            variant="h5"
                            color="black"
                            fontWeight="bold">BookStay</Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        {originalHotels.length > 0 && (
                            <>
                                <TextField
                                    value={searchValue}
                                    onChange={(e) => {
                                        setSearchValue(e.target.value)
                                    }
                                    if (e.target.value === ''){
                                    setHotels(originalHotels);
                                    }
                                
                                    variant='outlined', label='Search hotels', size='small'
                                InputProps={{
                                    endAdornment: (
                                        <IconButton disabled={!searchValue}
                                            onClick={() => handleSearch()}
                                            <SearchOutlinedIcon />
                                            </IconButton>
                        ),
                            }}
                             />
                            </>
                        )}
                         <Typography onClick={() => navigate('/')}
                            sx={(cursor = "pointer")}
                            fontSize="16px"
                            onClick={() => navigate('/')}
                            variant="h6"
                            color="black"
                            fontWeight="bold">Home</Typography>
                        <IconButton>
                                <Avatar src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human"
                                        sx={{ width: 32, height: 32 }} />
                            </IconButton>
                            </Box>
                    </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;