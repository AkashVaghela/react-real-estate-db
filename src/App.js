import React from 'react';
import { Box, Grid } from '@mui/material';


import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';

const App = () => {
  return (
    <Box>
      <Grid container>
        <Grid xs={2} item={true}>
          <Sidebar/>
        </Grid>
        <Grid xs={10} item={true}>
          <Home/>
        </Grid>
        </Grid>
    </Box>
  );
};

export default App;
