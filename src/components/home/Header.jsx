import React from 'react';
import { Typography, Avatar, Box, Stack } from '@mui/material';

import searchIcon from '../../assets/Search.svg';
import notificationIcon from '../../assets/Notification.svg';

const Header = () => {
  return (
    <Box sx={{ padding: '12px' }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography
          components={'p'}
          variant={'p'}
          sx={{ fontSize: '24px', fontWeight: 700 }}
        >
          Dashboard
        </Typography>
        <Stack direction='row'>
          <Avatar sx={{ width: '48px', height: '48px' }}>
            <img
              sx={{ width: '24px', height: '24px' }}
              src={searchIcon}
              alt='searchIcon'
            />
          </Avatar>
          <Avatar sx={{ width: '48px', height: '48px' }}>
            <img
              sx={{ width: '24px', height: '24px' }}
              src={notificationIcon}
              alt='notificationIcon'
            />
          </Avatar>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
