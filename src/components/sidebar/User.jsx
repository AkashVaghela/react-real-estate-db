import React from 'react';
import { Box, Avatar, Typography, Stack } from '@mui/material';

import UserImage from '../../assets/user.png';

const User = () => {
  return (
    <Box>
      <Stack>
        <Avatar
          alt='User Avatar'
          src={UserImage}
          sx={{ width: '80px', height: '80px', margin: '0 auto' }}
        />
        <Typography
          component={'p'}
          variant={'p'}
          align='center'
          sx={{ fontSize: '12px', fontWeigt: 400, lineHeight: '16px' }}
        >
          Welcome Back
        </Typography>
        <Typography
          component={'h4'}
          variant={'h4'}
          align='center'
          sx={{ fontSize: '18px', fontWeigt: 700, lineHeight: '28px' }}
        >
          Peter Parker
        </Typography>
      </Stack>
    </Box>
  );
};

export default User;
