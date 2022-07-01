import React from 'react';
import { Box, Grid, Stack, Typography, Button } from '@mui/material';

import salesChart from '../../assets/pieChart.png';
import { sales } from '../../assets/data';

const SalesAnalysis = () => {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        width: '512px',
        height: '280px',
        padding: '24px',
        border: '1px solid #dee2e6',
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
          <Button
            component={'button'}
            sx={{
              backgroundColor: '#ddd',
              color: '#000',
              borderRadius: '10px',
              padding: '8px 16px',
            }}
          >
            Jan, 2022
          </Button>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-around'
        >
          <Box>
            <img src={salesChart} alt='sales chart' />
          </Box>
          <Box>
            <Grid container>
              {sales.map((sale) => {
                return (
                  <Grid xs={6} key={sale.key} item={true}>
                    <Box
                      sx={{
                        padding: '12px',
                        width: 'max-content',
                        margin: '0 auto',
                      }}
                    >
                      <Typography
                        component={'p'}
                        variant={'p'}
                        sx={{
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '22px',
                          color: '#6F6F6F',
                        }}
                      >
                        {sale.title}
                      </Typography>
                      <Typography
                        component={'h3'}
                        variant={'p'}
                        sx={{
                          fontWeight: 700,
                          fontSize: '20px',
                          lineHeight: '30px',
                          color: '#0c0507',
                        }}
                      >
                        {sale.amount}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SalesAnalysis;
