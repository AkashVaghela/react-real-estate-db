import React from 'react';
import { Grid, Box, Stack, Typography, Button } from '@mui/material';

import salesChart from '../../assets/pieChart.png';

const SalesAnalysis = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'pink',
        width: '512px',
        height: '280px',
        borderRadius: '16px',
        padding: '24px',
      }}
    >
      <Stack>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{ marginBottom: '24px' }}
        >
          <Typography
            sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '23px' }}
          >
            Sales Analytics
          </Typography>
          <Button component={'button'}>Jan, 2022</Button>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='center'>
          <Box>
            <img src={salesChart} alt='sales chart' />
          </Box>
          <Grid container>
            {/* <Grid xs={6} sx={{ backgroundColor: 'red' }} item={true}>
              a
            </Grid>
            <Grid xs={6} sx={{ backgroundColor: 'red' }} item={true}>
              b
            </Grid>
            <Grid xs={6} sx={{ backgroundColor: 'red' }} item={true}>
              c
            </Grid>
            <Grid xs={6} sx={{ backgroundColor: 'red' }} item={true}>
              d
            </Grid> */}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SalesAnalysis;
