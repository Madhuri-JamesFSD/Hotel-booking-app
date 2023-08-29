import React from 'react';
import {useQuery} from 'react-query';
import { useParams } from 'react-router-dom';
import { getHotelBySlug } from '../api/request';
import { NavBar } from '../components/Navbar';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import { Typography } from '@mui/material';
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
                        <Gallery images={data?.images } />
                    </Container>
            )}
        </>
);
}

export default HotelInfo;