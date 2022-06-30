import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { cards } from '../../assets/data';

const Cards = () => {
  return (
    <Box sx={{ width: '414px', height: '200px' }}>
      <Stack direction='row'>
        {cards.map((card) => {
          return (
            <Stack
              key={card.id}
              sx={{
                backgroundColor: card.background,
                flexBasis: '34%',
                height: '200px',
                borderRadius: '16px',
                padding: '24px',
                justifyContent: 'space-around',
              }}
            >
              <Box>
                <Typography
                  variant={'p'}
                  component={'h2'}
                  sx={{ fontSize: '14px', fontWeigt: 400, lineHeight: '24px' }}
                >
                  {card.title}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant={'p'}
                  component={'p'}
                  sx={{ fontSize: '24px', fontWeigt: 500, lineHeight: '34px' }}
                >
                  {card.price}
                </Typography>
                <Typography
                  variant={'p'}
                  component={'p'}
                  sx={{ fontSize: '14px', fontWeigt: 400, lineHeight: '18px' }}
                >
                  {card.change}
                </Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Cards;
