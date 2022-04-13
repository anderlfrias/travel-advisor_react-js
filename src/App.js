import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core';

import Header from './components/Header/index';
import List from './components/List/index';
import Map from './components/Map/index';
// import PlaceDetails from './components/PlaceDetails/index';


const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
            <h1>Hello, World!</h1>
        </>
    );
}
export default App;