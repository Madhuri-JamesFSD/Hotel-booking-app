import React from 'react';
import {useQuery} from 'react-query';
import { useParams } from 'react-router-dom';
import { getHotelBySlug } from '../api/request';
import { NavBar } from '../components/Navbar';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import { Box, Button, Container,ListItem, Typography } from '@mui/material';
import { Gallery } from '../components/Gallery';

function HotelInfo() {
    const { slug } = useParams();
    
    const fetchHotelData = async () => {
        const { data } = await.getHotelBySlug(slug);
        console.log('slug data', data);
        return data;
    };

    const { isLoading, data } = useQuery('hotel-slug', fetchHotelData);
    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                    <Container maxWidth="lg">
                        <Typography
                            variant="h6"
                            fontWeight={'bold'}
                            sx={{ marginBottom: '3px 0' }}>{data?.name}</Typography>
                        <Gallery images={data?.images} />
                        
                        <Box sx={{ margin: '3px 0' display: 'flex' fontWeight: 'bold' }}>
                            {data?.rooms.map((room) => (
                                <Typography variant="h6" fontWeight='bold'key={room.id} sx={{ margin: '3px 5px 5px 0' color: 'gray' }}>
                                    {room.content}
                                    </Typography>
                            ))}
                        </Box>
                        <Typography
                            variant='p'
                            fontWeight={'bold'}
                            sx={{ margin: '10px 0' }}>{data?.aboutThePlace}</Typography>
                        <Typography
                            variant='h4'
                            fontWeight={'bold'}
                            sx={{ margin: '3rem 0 1.5rem' }}>
                            What this place offers!!!</Typography>
                        <Box sx={{ margin: '3px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{maxWidth:'70%'}}>{data?.features.map((features) => (
                                <ListItem key={feature.id}>{feature.text}</ListItem>
                            ))}
                            </Box>
                             <Button variant="outlined">Reserve</Button>
                        </Box>
                    </Container>
            )}
        </>
);
}

export default HotelInfo;