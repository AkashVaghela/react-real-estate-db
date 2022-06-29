import {Box, Avatar, ListItem, ListItemText} from "@mui/material"
import SettingsLogo from '../../assets/icons/logout.png';

const Footer = () => {
    return (
      <Box>
        <ListItem sx={{ display: 'flex', gap: '12px' }}>
          <Avatar sx={{ width: 32, height: 32 }}>
            <img
              src={SettingsLogo}
              alt='SettingsLogo'
              sx={{
                height: '100%',
                width: '100%',
                backgroundColor: 'transparent',
              }}
            />
          </Avatar>
          <ListItemText
            primary='Logout'
            sx={{ fontSize: '14px', fontWeigt: 500, color: '#6F6F6F' }}
          />
        </ListItem>
      </Box>
    );
};
  
export default Footer