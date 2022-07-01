import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import SettingsLogo from '../../assets/icons/logout.png';

const Footer = () => {
  return (
    <Box>
      <ListItem
        sx={{
          display: 'flex',
          gap: '12px',
          '&:hover': {
            cursor: 'pointer',
            color: '#0C0507',
            transition: 'all .25s ease-in-out',
          },
        }}
      >
        <Box sx={{ width: 32, height: 32 }}>
          <img
            src={SettingsLogo}
            alt='SettingsLogo'
            sx={{
              height: '100%',
              width: '100%',
              backgroundColor: 'transparent',
            }}
          />
        </Box>
        <Typography
          primary='Logout'
          sx={{
            fontSize: '14px',
            fontWeigt: 500,
            color: '#6F6F6F',
            '&:hover': {
              color: '#0C0507',
              fontWeight: 600,
              transition: 'all .25s ease-in-out',
            },
          }}
        >
          Logout
        </Typography>
      </ListItem>
    </Box>
  );
};

export default Footer;
