import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const IncomeStastics = () => {
  return (
    <Box
      sx={{
        width: '572px',
        height: '280px',
        backgroundColor: '#0c0507',
        borderRadius: '16px',
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{ marginBottom: '24px', color: '#fff', padding: '24px' }}
      >
        <Typography
          sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '23px' }}
        >
          Income Statistics
        </Typography>
        <Button
          component={'button'}
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '10px',
            padding: '8px 16px',
          }}
        >
          Last Month
        </Button>
      </Stack>
    </Box>
  );
};

export default IncomeStastics;
