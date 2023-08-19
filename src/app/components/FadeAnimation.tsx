'use client';

import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeAnimation.css'

interface Props {
  children?: ReactNode;
  animation: string;
  startClass?: string;
  endClass?: string;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const FadeAnimation = ({
  children,
  rootMargin = '-100px',
  animation,
  startClass = '',
  endClass = '',
  triggerOnce = false,
  className,
  style,
}: Props) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
  });

  return (
    <div ref={ref} className={className} style={style}>
      <div className={inView ? animation : startClass}>{children}</div>
    </div>
  );
};

export default FadeAnimation;
