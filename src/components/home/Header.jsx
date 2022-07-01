import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import searchIcon from '../../assets/Search.svg';
import notificationIcon from '../../assets/Notification.svg';

const Header = () => {
  return (
    <Box>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography
          components={'p'}
          variant={'p'}
          sx={{ fontSize: '24px', fontWeight: 700 }}
        >
          Dashboard
        </Typography>
        <Stack direction='row'>
          <Box
            sx={{
              width: '48px',
              height: '48px',
              '&:hover': { cursor: 'pointer' },
            }}
          >
            <img
              sx={{ width: '24px', height: '24px' }}
              src={searchIcon}
              alt='searchIcon'
            />
          </Box>
          <Box
            sx={{
              width: '48px',
              height: '48px',
              '&:hover': { cursor: 'pointer' },
            }}
          >
            <img
              sx={{
                width: '24px',
                height: '24px',
              }}
              src={notificationIcon}
              alt='notificationIcon'
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
