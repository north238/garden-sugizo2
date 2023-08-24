import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Map: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container fixed sx={{ mt: 10 }}>
        <Typography
          variant="h5"
          sx={{ mt:2, borderBottom: '1px solid' }}
        >
          対応エリア
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            春日井市を中心に活動しています。隣接している市の名古屋市守山区・北区、瀬戸市、尾張旭市、犬山市、小牧市、豊山町も対応いたします。ぜひご相談ください。
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Image
            src={'/image/map.png'}
            alt={'エリアマップ'}
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

export default Map;
