import React from 'react';
import { Box, Typography } from '@mui/material';

import map from '../../assets/map.png';

const SalesByRegion = () => {
  return (
    <Box
      sx={{
        width: '314px',
        height: '332px',
        padding: '24px',
        border: '1px solid #dee2e6',
        borderRadius: '16px',
      }}
    >
      <Typography
        component={'h2'}
        variant={'p'}
        sx={{
          fontSize: '18px',
          fontWeigt: 700,
          lineHeight: '23px',
          marginBottom: '16px',
        }}
      >
        Sales by Region
      </Typography>
      <Box>
        <img src={map} alt='map' />
      </Box>
    </Box>
  );
};

export default SalesByRegion;
