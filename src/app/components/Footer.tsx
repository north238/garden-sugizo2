'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import Container from '@mui/material/Container';
import { createSvgIcon } from '@mui/material/utils';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Typography from '@mui/material/Typography';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import { notojp } from '../utils/font';
import styles from './Footer.module.css';

const LineIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
  </svg>,
  'line'
);

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
        <h3>庭屋すぎ蔵</h3>
        <p>住所: 愛知県春日井市外之原町2005-2</p>
        <p>営業時間: 8時～18時（お盆、年末年始は除く）</p>
        <Typography className={notojp.variable} variant="h4" sx={{ mb: 3 }}>
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
          <Button
            sx={{ fontSize: { xs: 15, md: 15 } }}
            size="small"
            color="success"
            href="tel:+0568-50-2621"
            startIcon={<PhoneForwardedOutlinedIcon />}
          >
            電話でお問い合わせ
          </Button>
          <Button
            sx={{ fontSize: { xs: 15, md: 24 } }}
            size="large"
            color="success"
            href="mailto:info@garden-sugizo.com"
            startIcon={<ContactMailIcon />}
          >
            メールでお問い合わせ
          </Button>
          <Button
            sx={{ fontSize: { xs: 15, md: 24 } }}
            size="large"
            color="success"
            href="mailto:info@garden-sugizo.com"
            startIcon={<LineIcon />}
          >
            友達に追加
          </Button>
          <small>&copy; 2022 庭屋すぎ蔵</small>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
