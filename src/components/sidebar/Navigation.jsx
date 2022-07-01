import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import { navigation } from '../../assets/data';

const Navigation = () => {
  return (
    <Box sx={{ borderBottom: '1px solid gray' }}>
      <nav>
        <List>
          {navigation.map((item) => {
            return (
              <ListItem
                key={Math.random()}
                sx={{
                  display: 'flex',
                  gap: '8px',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    // backgroundColor: 'red',
                  }}
                >
                  <img
                    alt={item.icon}
                    src={item.icon}
                    style={{
                      display: 'block',
                      height: '24px',
                      width: '24px',
                      margin: '4px auto 0',
                      '&:hover': {
                        // backgroundColor: 'green',
                      },
                    }}
                  />
                </Box>
                <Typography
                  primary={item.title}
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#6F6F6F',
                    '&:hover': {
                      color: '#0C0507',
                      fontWeight: 600,
                      transition: 'color .25s ease-in-out',
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};
export default Navigation;
