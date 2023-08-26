import React from 'react';
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import styles from './page.module.css';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

const About: React.FC = () => {
  return (
    <>
      <Container fixed sx={{mt: 5}}>
        <ThemeProvider theme={theme}>
          <Typography variant={'h5'} sx={{ borderBottom: '1px solid #3a302d' }}>
            私たちについて
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Image
              src={'/image/img_13.jpg'}
              alt={'About Image'}
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
          <Box sx={{ mt: 5 }}>
            <Typography variant="body1">
              私たちは春日井市を中心に活動しています。2022年に独立、起業し個人で活動。お客様一人ひとりとの関係を大切にし、お客様に寄りそった提案を心がけております。個人で経営しているからこそ柔軟に対応できることが強みと感じています。どんな小さな困りごとにも対応します。ご気軽にお声掛けください。
            </Typography>
          </Box>
        </ThemeProvider>
        <Box sx={{ mt: 5 }}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>社名</th>
                <td className={styles.tableCell}>
                  庭屋すぎ蔵（にわやすぎぞう）
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>連絡先</th>
                <td className={styles.tableCell}>
                  <Button
                    sx={{ fontSize: '1rem' }}
                    variant="text"
                    size="large"
                    color="success"
                    href="tel:+0568-50-2621"
                    startIcon={<PhoneForwardedOutlinedIcon />}
                  >
                    0568-50-2621
                  </Button>
                  <p className={styles.p}>
                    ※受付時間 8:00～18:00 (お盆、年末年始除く)
                  </p>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>設立</th>
                <td className={styles.tableCell}>2022年1月</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>代表取締役</th>
                <td className={styles.tableCell}>
                  高杉 竜平（たかすぎ りゅうへい）
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>保有資格</th>
                <td className={styles.tableCell}>
                  一級造園施工管理技士・電気工事士二種
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>所在地</th>
                <td className={styles.tableCell}>
                  愛知県春日井市外之原町2005-2
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Container>
    </>
  );
};

export default About;
