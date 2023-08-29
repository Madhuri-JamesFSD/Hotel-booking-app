import React, { useState } from "react";
import { Container, Grid, Pagination } from '@mui/material';
import { getHotels } from "../api/request";
import { useQuery } from 'react-query';
import LoadingSkeleton from "../components/LoadingSkeleton";
import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";

function Home() {
    const [hotels, setHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [page, setPage] = useState(1);
    const hotelLimitPerPage = 5;

    const fetchHotels = async () => {
        console.log('calling fetch hotels');
        const { data } = await getHotels();
        setHotels(data);
        setFilteredHotels(data);
        return data;
    };

    const { isLoading } = useQuery( 'hotels', fetchHotels );
    const startIndex = (page - 1) * hotelLimitPerPage;
    const endIndex = page * hotelLimitPerPage - 1;
    const paginatedHotels = filteredHotels.slice(startIndex, endIndex - 1);
    const totalHotels = filteredHotels.length;
    const totalPages = Math.ceil(totalHotels / hotelLimitPerPage);

    return isLoading ? (
            <LoadingSkeleton />
     ) : (
        <>
                <Navbar hotels={filteredHotels}
                    setHotels={setFilteredHotels}
                    originalHotels={hotels} />
                <Container maxWidth="lg">
                <Grid Container spacing={2} sx={{ padding: 2 }}>
                    {paginatedHotels.length > 0 ? (
                        <>
                            {paginatedHotels.map((hotel) => (
                                <Grid key={hotel.id} item xs={12} sm={6} md={4} lg={4}>
                                    <HotelCard key={hotel.id} hotel={hotel} />
                                </Grid>
                                </Container>
                            ))}
                        </> 
                    ) : (
                        <p>No hotel found</p>
                    )}
                </Grid>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(event, value) => setPage{value}}
                sx={{display: 'flex', justifyContent: 'flex-end', padding}}
                />
         </>       
    );
}

export default Home;

