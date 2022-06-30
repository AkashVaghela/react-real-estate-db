import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from '@mui/material';

import { salesReport } from '../../assets/data';

const SalesReport = () => {
  const tableHeading = {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '18px',
  };

  const tableCell = {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '26px',
    color: '#6F6F6F',
  };

  return (
    <Box
      sx={{
        width: '770px',
        height: '332px',
        borderRadius: '16px',
        border: '1px solid #dee2e6',
        overflowY: 'hidden',
      }}
    >
      <Typography
        component={'h2'}
        variant={'p'}
        sx={{
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '23px',
          padding: '16px',
          paddingTop: '20px',
        }}
      >
        Sales Reports
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ padding: '16px' }}>
              <TableCell>
                <Typography sx={tableHeading}>Sales by</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={tableHeading}>Property name</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={tableHeading}>Sales type</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={tableHeading}>Price</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={tableHeading}>Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {salesReport.map((sale) => {
              return (
                <TableRow sx={{ padding: '16px' }}>
                  <Box>
                    <TableCell>
                      <Stack direction='row' alignItems='center' gap={2}>
                        <Box>
                          <img src={sale.avatar} alt={sale.name} />
                        </Box>
                        <Typography
                          component={'p'}
                          variant={'p'}
                          sx={{
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '26px',
                          }}
                        >
                          {sale.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                  </Box>
                  <TableCell component={'p'} variant={'p'} sx={tableCell}>
                    {sale.propertyName}
                  </TableCell>
                  <TableCell component={'p'} variant={'p'} sx={tableCell}>
                    {sale.salesType}
                  </TableCell>
                  <TableCell component={'p'} variant={'p'} sx={tableCell}>
                    {sale.price}
                  </TableCell>
                  <TableCell component={'p'} variant={'p'} sx={tableCell}>
                    {sale.status}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SalesReport;
