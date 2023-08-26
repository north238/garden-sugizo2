'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
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
      <ChevronLeftIcon className={styles.leftArrow} onClick={prevSlide} aria-label="戻るボタン" />
      <NavigateNextIcon className={styles.rightArrow} onClick={nextSlide} aria-label="進むボタン" />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${styles.slide} ${styles.slideActive}`
                : index === current + 1 ||
                  (current === length - 1 && index === 0)
                ? `${styles.slide} ${styles.slideNext}`
                : index === current - 1 ||
                  (current === 0 && index === length - 1)
                ? `${styles.slide} ${styles.slidePrev}`
                : styles.slide
            }
            key={index}
          >
            {index === current && (
              <Image
                src={slide.image}
                alt="施工実績画像"
                width={1980}
                height={1150}
                style={{
                  width: '100%',
                  height: 'auto',
                  boxShadow: '5px 5px 5px rgba(20,20,20,.7)',
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
