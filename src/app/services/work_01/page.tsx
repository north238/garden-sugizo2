import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/app/styles/theme';

const Work: React.FC = () => {
  return (
    <>
      <Container fixed sx={{ mt: 10 }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" sx={{ mt: 2, borderBottom: '1px solid' }}>
            施工実績_01
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              カーポート下に雑草が生えないようにと要望をいただき、土間コンクリートを施工。
            </Typography>
          </Box>
        </ThemeProvider>
        <Box sx={{ mt: 2 }}>
          <Image
            src={'/image/img_16.jpg'}
            alt={'土間コンクリートの施工'}
            width={1980}
            height={1150}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: '100%',
              height: 'auto',
              boxShadow: '5px 5px 5px rgba(20,20,20,.7)',
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default Work;
