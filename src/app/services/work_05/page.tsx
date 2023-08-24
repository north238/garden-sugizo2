import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

const Work: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container fixed sx={{ mt: 10 }}>
        <Typography variant="h5" sx={{ mt: 2, borderBottom: '1px solid' }}>
          施工実績_05
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            生け垣を抜根して、手間のかからないフェンスへのリフォームを設置しました。
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Image
            src={'/image/img_16.jpg'}
            alt={'フェンスの設置'}
            width={1980}
            height={1150}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: '100%',
              height: 'auto',
              boxShadow: '5px 5px 5px rgba(20,20,20,.7)',
              border: '1px solid #3a302d',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Work;
