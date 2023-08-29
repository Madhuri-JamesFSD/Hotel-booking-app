import React from "react";
import { getHotels } from "../api/request";
import { useQuery } from 'react-query';
import LoadingSkeleton from "../components/LoadingSkeleton";
import Navbar from "../components/Navbar";

function Home() {
    const fetchHotels = async () => {
        const data = await getHotels();
        return data;
    };

    const { data, isLoading } = useQuery{ 'hotels', fetchHotels };
    return isLoading ? (
            <LoadingSkeleton />
     ) : (
        <>
                <Navbar />
         </>       
    );
}

export default Home;

