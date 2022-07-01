import React from 'react';

import { Box, Stack, Typography, Button } from '@mui/material';
import bannerImage from '../../assets/banner.png';

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F4F8EE',
        borderRadius: '16px',
        height: '200px',
        width: '670px',
      }}
    >
      <Stack direction='row' alignItems='center' justifyContent='space-around'>
        <Box>
          <Typography
            component={'h1'}
            variant={'p'}
            sx={{
              fontWeigt: 700,
              fontSize: '24px',
              lineHeight: ' 31px',
              marginBottom: '10px',
            }}
          >
            Enjoy your <br /> first home sale
          </Typography>
          <Button
            variant='contained'
            sx={{
              fontSize: '14px',
              fontWeigt: 500,
              borderRadius: '10px',
              backgroundColor: '#0C0507',
              '&:hover': {
                color: '#0C0507',
                backgroundColor: '#A7E0DA',
              },
            }}
          >
            Explore Now
          </Button>
        </Box>
        <Box sx={{ height: '200px', width: '380px', position: 'relative' }}>
          <img
            alt='3D home'
            src={bannerImage}
            style={{
              display: 'block',
              height: '240px',
              width: '380px',
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Banner;
