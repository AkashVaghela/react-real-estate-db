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
      <Box
        sx={{
          width: '254px',
          height: '254px',
          overflow: 'hidden',
          '&:hover img': { transform: 'scale(1.05)' },
        }}
      >
        <img
          src={map}
          alt='map'
          style={{
            width: '100%',
            transition: '0.5s all ease-in-out',
          }}
        />
      </Box>
    </Box>
  );
};

export default SalesByRegion;
