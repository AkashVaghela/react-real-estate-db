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
                sx={{ display: 'flex', gap: '8px' }}
              >
                <Box sx={{ width: 32, height: 32 }}>
                  <img
                    src={item.icon}
                    alt={item.icon}
                    sx={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: 'transparent',
                    }}
                  />
                </Box>
                <Typography
                  primary={item.title}
                  sx={{ fontSize: '14px', fontWeight: 500, color: '#6F6F6F' }}
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
