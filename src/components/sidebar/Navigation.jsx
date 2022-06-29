import React from 'react';
import { Box, List, ListItem, ListItemText, Avatar } from '@mui/material';

import { navigation } from '../../assets/data';

const Navigation = () => {
  return (
    <Box sx={{borderBottom: '1px solid gray'}}>
      <nav>
        <List>
          {navigation.map((item) => {
            return (
              <ListItem key={Math.random()} sx={{ display: 'flex', gap: '12px' }}>
                <Avatar sx={{ width: 32, height: 32 }}>
                  <img
                    src={item.icon}
                    alt={item.icon}
                    sx={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: 'transparent',
                    }}
                  />
                </Avatar>
                <ListItemText
                  primary={item.title}
                  sx={{ fontSize: '14px', fontWeigt: 500, color: '#6F6F6F' }}
                />
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default Navigation;
