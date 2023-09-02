import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

const Complete = () => {
  return (
    <>
      <Container maxWidth="xs" sx={{mt: 5}}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" sx={{ mt: 2, borderBottom: '1px solid #3a302d' }}>
            内容確認
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Typography variant="body1">
              お問い合わせありがとうございました。
              <br />
              内容を確認後返信させていただきます。
              <br />
              遅くとも2営業日以内にはご連絡いたします。
              <br />
              しばらくお待ちください。
            </Typography>
          </Box>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default Complete;
