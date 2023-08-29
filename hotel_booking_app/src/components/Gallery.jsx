import React from "react";
import {Grid} from '@mui/material'

export function Gallery() {
    return <Grid container spacing={2}>
        {images?.map((images) => (
            <Grid item xs={12} sm={6} md={4} key={images.id}>
                <img src={image?.img} style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                    alt="hotels" />
            </Grid>
        ))}
    </Grid>
}

