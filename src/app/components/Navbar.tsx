'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Slide from '@mui/material/Slide';
import styles from './Navbar.module.css';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const setNavLinks: Array<{ text: string; url: string; icon: any }> = [
  { text: 'Home', url: '/', icon: <HomeOutlinedIcon /> },
  { text: 'About', url: '/about', icon: <InfoOutlinedIcon /> },
  { text: 'Services', url: '/services', icon: <WorkOutlineOutlinedIcon /> },
  { text: 'Contact', url: '/contact', icon: <ContactMailOutlinedIcon /> },
];

const Navbar: React.FC = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {setNavLinks.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.url}>
              <span className={styles.span}>{item.icon}</span>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#393e46' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Image src={'/icon.png'} alt={'Nav Logo'} width={60} height={60} />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {setNavLinks.map((item) => (
              <Button key={item.text} href={item.url} sx={{ color: '#fff' }}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
