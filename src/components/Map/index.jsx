import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './style';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 0, Ing: 0 };

    const onChange = (e) => {
        console.log("onChange", e);
    };

    const onChildClick = (e) => {
        console.log("onChildClick", e);
    };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC-o1I6d8jV8jRknq4ibh1VdOM-SDL_4gw' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={onChange}
                onChildClick={onChildClick}
            >

            </ GoogleMapReact>
        </div>
    );
}

export default Map;
