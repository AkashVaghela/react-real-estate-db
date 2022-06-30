import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import salesChart from '../../assets/pieChart.png';

const SalesAnalysis = () => {
  return (
    <Box
      sx={{
        width: '512px',
        height: '280px',
        backgroundColor: 'pink',
        borderRadius: '16px',
      }}
    >
      {/* <Stack>
        <Stack>
          <Typography>Sales Analytics</Typography>
          <Button>Jan, 2022</Button>
        </Stack>
        <Stack>
          <Box>
            <img src={salesChart} alt='sales chart' />
          </Box>
          <Box></Box>
        </Stack>
      </Stack> */}
    </Box>
  );
};

export default SalesAnalysis;
