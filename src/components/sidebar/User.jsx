import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import UserImage from '../../assets/user.png';

const User = () => {
  return (
    <Box>
      <Stack>
        <Box
          sx={{
            width: '80px',
            height: '80px',
            margin: '0 auto 14px',
            backgroundColor: '#FBEBB8',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img alt='User Avatar' src={UserImage} />
        </Box>
        <Typography
          component={'p'}
          variant={'p'}
          align='center'
          sx={{ fontSize: '12px', fontWeight: 400, lineHeight: '16px' }}
        >
          Welcome Back
        </Typography>
        <Typography
          component={'h4'}
          variant={'h4'}
          align='center'
          sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '28px' }}
        >
          Peter Parker
        </Typography>
      </Stack>
    </Box>
  );
};

export default User;
