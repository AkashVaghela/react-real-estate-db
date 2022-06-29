import React from 'react';
import { Box, Stack } from '@mui/material';

import Navigation from './Navigation';
import User from './User';
import Footer from './Footer';

const Sidebar = () => {
  return (
    <Box sx={{padding: '40px 40px 0', height: '100vh'}}>
      <Stack sx={{gap: '40px'}}>
        <User />
        <Navigation />
        <Footer />
      </Stack>
    </Box>
  );
};

export default Sidebar;
