import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import Image from 'next/image';
import { ServiceData } from '../utils/ServiceData';

const Services = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography
          variant="h4"
          sx={{ mt: 2, textAlign: 'center', borderBottom: '1px solid' }}
        >
          施工実績
        </Typography>
        <ImageList cols={2} sx={{ '@media (max-width:600px)': { cols: 2 } }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">施工実績</ListSubheader>
          </ImageListItem>
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
                  width: "fit-content",
                  height: 'auto',
                  border: '1px solid #3a302d',
                }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.text}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Services;
