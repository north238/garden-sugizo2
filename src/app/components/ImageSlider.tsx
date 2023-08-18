'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SliderData } from '../utils/SliderData';
import styles from './ImageSlider.module.css';

interface slidesProps {
  slides: any;
}

const ImageSlider: React.FC<slidesProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <ArrowBackIcon className={styles.leftArrow} onClick={prevSlide} />
      <ArrowForwardIcon className={styles.rightArrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current ? `${styles.slideActive}` : `${styles.slide}`
            }
            key={index}
          >
            {index === current && (
              <Image
                src={slide.image}
                alt="services image"
                width={1980}
                height={1150}
                style={{
                  width: '100%',
                  height: 'auto',
                  boxShadow: '5px 5px 5px rgba(20,20,20,.7)',
                  border: '1px solid #3a302d',
                  borderRadius: '10px',
                }}
                className={styles.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;