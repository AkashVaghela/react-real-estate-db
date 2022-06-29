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
    <Box>
      <Header />
      <Stack>
        <Banner />
        <Cards />
      </Stack>
      <Stack>
        <SalesAnalysis />
        <IncomeStastics />
      </Stack>
      <Stack>
        <SalesReport />
        <SalesByRegion />
      </Stack>
    </Box>
  );
};

export default Home;
