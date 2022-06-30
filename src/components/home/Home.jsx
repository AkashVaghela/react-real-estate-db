import React from 'react';
import { Box, Stack } from '@mui/material';

import Header from './Header';
import Banner from './Banner';
import Cards from './Cards';
import SalesAnalysis from './SalesAnalysis';
import IncomeStastics from './IncomeStastics';
import SalesReport from './SalesReport';
import SalesByRegion from './SalesByRegion';

const Home = () => {
  return (
    <Box sx={{ padding: '12px', margin: '8px' }}>
      <Header />
      <Stack
        direction='row'
        alignItems='center'
        gap='24px'
        sx={{ marginBottom: '12px' }}
      >
        <Banner />
        <Cards />
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        gap='24px'
        sx={{ marginBottom: '12px' }}
      >
        <SalesAnalysis />
        <IncomeStastics />
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        gap='24px'
        sx={{ marginBottom: '12px' }}
      >
        <SalesReport />
        <SalesByRegion />
      </Stack>
    </Box>
  );
};

export default Home;
