'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Typography from '@mui/material/Typography';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import { LineIcon } from './Icon';
import { InstagramIcon } from './Icon';
import { notojp } from '../utils/font';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          backgroundColor: '#EBEDED',
          mt: 10,
          py: 5,
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            庭屋すぎ蔵
          </Typography>
          <Typography variant="body2" sx={{ m: 1 }}>
            住所: 愛知県春日井市外之原町2005-2
          </Typography>
          <Typography variant="body2" sx={{ m: 1 }}>
            営業時間: 8時～18時（お盆、年末年始は除く）
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Box>
              <Button
                sx={{ fontSize: 13, fontFamily: notojp }}
                size="small"
                color="success"
                href="tel:+0568-50-2621"
                startIcon={<PhoneForwardedOutlinedIcon />}
                aria-label="電話をする"
              >
                電話でお問い合わせ
              </Button>
            </Box>
            <Box>
              <Button
                sx={{ fontSize: 13, fontFamily: notojp }}
                size="large"
                color="success"
                href="mailto:info@garden-sugizo.website"
                startIcon={<ContactMailIcon />}
                aria-label="メールを送る"
              >
                メールでお問い合わせ
              </Button>
            </Box>
            <Box>
              <Button
                sx={{ fontSize: 13, fontFamily: notojp }}
                size="large"
                color="success"
                href="https://lin.ee/AsKUoin"
                startIcon={<LineIcon />}
                aria-label="友達に追加する"
              >
                友達に追加
              </Button>
            </Box>
            <Box>
              <Button
                sx={{ fontSize: 13, textTransform: 'none', fontFamily: notojp }}
                size="large"
                color="success"
                href="https://www.instagram.com/sugizo_garden/"
                startIcon={<InstagramIcon />}
                aria-label="Instagramへ移動"
              >
                Instagramを見る
              </Button>
            </Box>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              &copy; 2022 庭屋すぎ蔵
            </Typography>
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default Footer;
