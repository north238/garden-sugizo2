import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import FadeAnimation from './components/FadeAnimation';
import Footer from './components/Footer';
import QAaccordions from './components/QAaccordions';
import { SliderData } from './utils/SliderData';
import QAIcon from '../../public/Q&A_icon.svg';
import styles from './styles/page.module.css';

export default function Page() {
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box className={styles.homeImg}>
            <Image
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: 'cover',
              }}
              src="/image/home.jpeg"
              alt={'home image'}
            />
            <h6 className={styles.heroSubTitle}>Garden-sugizo</h6>
            <h2 className={styles.heroMainTitle}>庭屋すぎ蔵</h2>
            <h5 className={styles.theme}>「地元を愛する造園家」</h5>
          </Box>
        </Grid>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ mt: 10 }}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
                <Box sx={{ pb: 3, display: 'flex', flexDirection: 'column' }}>
                  <h6 className={styles.subTitle}>About</h6>
                  <h2 className={styles.mainTitle}>
                    <span>私たちについて</span>
                  </h2>
                  <p className={styles.p}>
                    庭屋すぎ蔵のホームページをご覧いただき有難うございます。私たちは個人でお庭まわりの工事を施工しています。
                  </p>
                </Box>
                <Box className={styles.aboutImage}>
                  <Image
                    src={'/image/img_13.jpg'}
                    alt={'About image'}
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
              </FadeAnimation>
            </Grid>
            <Grid item md={6}>
              <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'h3'}
                    sx={{ borderBottom: '1px solid #3a302d', pt: 2 }}
                  >
                    大切にしていること
                  </Box>
                  <Box sx={{ px: { xs: 4, md: 10 } }}>
                    <Box sx={{ fontSize: { xs: '.9rem' } }}>
                      <ul>
                        <li>
                          お施主様とのこれまでと、これからの出会いに感謝し、お一人おひとりに最高のご提案をしたい
                        </li>
                        <li>お施主様と友人のような関係になりたい</li>
                      </ul>
                    </Box>
                  </Box>
                  <Box sx={{ p: { xs: 4, md: 10 }, fontSize: { xs: '.9rem' } }}>
                    フランクに会話するという事ではなく、損得勘定を抜きにして、お施主様にとって1番良い選択をさせて頂きたい。
                    <br />
                    <br />
                    もし、私たちにとって大きな利益が生まれそうでも、将来的に問題のありそうな工事、商品は売りません。
                    友人のような関係だからこそできるアドバイスがあります。
                  </Box>
                  <Button
                    href="/about"
                    variant="contained"
                    endIcon={<NavigateNextIcon />}
                    aria-label="read more"
                  >
                    read more
                  </Button>
                </Box>
              </FadeAnimation>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 10 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
              <h6 className={styles.subTitle}>Services</h6>
              <h2 className={styles.mainTitle}>できること</h2>
            </FadeAnimation>
            <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
              <Box sx={{ px: { xs: 4, md: 10 } }}>
                <p className={styles.p}>
                  『庭木の剪定・植栽』『造園デザイン』まで
                  外構・エクステリア工事なども施工しております。
                  お庭のことならすべてお任せください。
                </p>
              </Box>
            </FadeAnimation>
          </Box>
          <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
            <Box className={styles.slider}>
              <ImageSlider slides={SliderData} />
            </Box>
          </FadeAnimation>
          <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
            <Box
              component={'h2'}
              sx={{ borderBottom: '1px solid #3a302d', mt: 5 }}
            >
              <QAIcon />
              よくある質問
            </Box>
            <Box sx={{ m: 2 }}>
              <QAaccordions />
            </Box>
          </FadeAnimation>
        </Box>

        <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
          <Box component={'section'} sx={{ mt: 10 }}>
            <h6 className={styles.subTitle}>Contact</h6>
            <h2 className={styles.mainTitle}>
              <span>お問い合わせ</span>
            </h2>
          </Box>
        </FadeAnimation>
        <Grid
          container
          sx={{
            mt: 2,
            justifyContent: 'center',
          }}
          spacing={2}
        >
          <Grid item md={6}>
            <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
              <Box sx={{ px: 5 }}>
                <p className={styles.p}>
                  お庭まわりでお困りの方...
                  あなたに寄りそったご提案をさせていただきます。
                  もちろん、庭木１本からでも大丈夫です。
                  お気軽にお問い合わせください。
                </p>
              </Box>
            </FadeAnimation>
          </Grid>
          <Grid item md={6}>
            <FadeAnimation rootMargin="0px" animation="fadeIn" triggerOnce>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  px: { xs: 4, md: 10 },
                }}
              >
                <Box component={'h3'} sx={{ fontSize: { xs: 17 } }}>
                  WEBからのお問い合わせ
                </Box>
                <Button
                  sx={{ fontSize: { xs: 20, md: 24 } }}
                  variant="contained"
                  size="large"
                  color="success"
                  href="/contact"
                  startIcon={<ContactMailIcon />}
                >
                  お問い合わせ
                </Button>
                <Box component={'h3'} sx={{ fontSize: { xs: 17 } }}>
                  お電話でのお問い合わせ
                </Box>
                <Button
                  sx={{ fontSize: { xs: 20, md: 24 } }}
                  variant="contained"
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
              </Box>
            </FadeAnimation>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
