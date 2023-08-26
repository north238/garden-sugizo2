import React from 'react';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { ServiceData } from '../utils/ServiceData';
import { Tooltip } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

const Services = () => {
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <ThemeProvider theme={theme}>
          <Typography variant={'h5'} sx={{ borderBottom: '1px solid #3a302d' }}>
            施工実績
          </Typography>
        </ThemeProvider>
        <ImageList
          gap={4}
          sx={{
            gridTemplateColumns:
              'repeat(auto-fill, minmax(340px, 1fr))!important',
          }}
        >
          {ServiceData.map((item) => (
            <ImageListItem key={item.title}>
              <Image
                src={`${item.image}`}
                alt={item.alt}
                loading="lazy"
                width={1980}
                height={1150}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '5px',
                }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.text}</span>}
                position="bottom"
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`${item.title}の詳細へ移動`}
                    href={`${item.url}`}
                  >
                    <Tooltip title="詳細を表示">
                      <InfoIcon />
                    </Tooltip>
                  </IconButton>
                }
                sx={{ overflow: 'hidden', borderRadius: '5px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Services;
