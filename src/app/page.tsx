import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import Container from '@mui/material/Container';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Grid from '@mui/material/Grid';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import ImageSlider from './components/ImageSlider';
import FadeAnimation from './components/FadeAnimation';
import QAaccordions from './components/QAaccordions';
import { SliderData } from './utils/SliderData';
import { notojp } from './utils/font';
import { QAIcon } from './components/Icon';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import styles from './styles/page.module.css';

export default function Page() {
  return (
    <>
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
              alt={'ホーム画像'}
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
              <Box sx={{ pb: 3, display: 'flex', flexDirection: 'column' }}>
                <ThemeProvider theme={theme}>
                  <Typography variant="subtitle2" sx={{ color: '#0072E5' }}>
                    About
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      borderBottom: '1px solid #3a302d',
                    }}
                  >
                    私たちについて
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    庭屋すぎ蔵のホームページをご覧いただき有難うございます。私たちは個人でお庭まわりの工事を施工しています。
                  </Typography>
                </ThemeProvider>
              </Box>
              <Box className={styles.aboutImage}>
                <FadeAnimation
                  rootMargin="-50px"
                  animation="fadeIn"
                  triggerOnce
                >
                  <Image
                    src={'/image/img_13.jpg'}
                    alt={'私たちについての画像'}
                    width={1980}
                    height={1150}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                      boxShadow: '5px 5px 5px rgba(20,20,20,.7)',
                    }}
                  />
                </FadeAnimation>
              </Box>
            </Grid>
            <Grid item md={6}>
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
                  <Box>
                    <ThemeProvider theme={theme}>
                      <Typography component="div" sx={{ fontSize: '.9rem' }}>
                        <ul>
                          <li>
                            お施主様とのこれまでと、これからの出会いに感謝し、お一人おひとりに最高のご提案をしたい
                          </li>
                          <li>お施主様と友人のような関係になりたい</li>
                        </ul>
                      </Typography>
                    </ThemeProvider>
                  </Box>
                </Box>
                <Box sx={{ p: { xs: 4, md: 10 } }}>
                  <ThemeProvider theme={theme}>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      フランクに会話するという事ではなく、損得勘定を抜きにして、お施主様にとって一番良い選択をさせて頂きたい。
                      <br />
                      <br />
                      もし、私たちにとって大きな利益が生まれそうでも、将来的に問題のありそうな工事、商品は売りません。
                      友人のような関係だからこそできるアドバイスがあります。
                    </Typography>
                  </ThemeProvider>
                </Box>
                <Button
                  href="/about"
                  variant="contained"
                  endIcon={<NavigateNextIcon />}
                  aria-label="aboutへ移動"
                  sx={{textTransform: 'none'}}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 10 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
              <Typography variant="subtitle2" sx={{ color: '#0072E5' }}>
                Services
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', borderBottom: '1px solid #3a302d' }}
              >
                できること
              </Typography>
              <Box sx={{ px: { xs: 2, md: 6 }, mb: 2 }}>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  『庭木の剪定・植栽』から『外構・エクステリア工事』『造園デザイン』まで
                  自社ですべての外構工事を施工しております。
                  <br />
                  お庭のことならすべてお任せください。
                </Typography>
              </Box>
            </ThemeProvider>
          </Box>
          <FadeAnimation rootMargin="-50px" animation="fadeIn" triggerOnce>
            <ImageSlider slides={SliderData} />
          </FadeAnimation>
          <Box
            component={'h2'}
            sx={{ borderBottom: '1px solid #3a302d', mt: 5 }}
          >
            <QAIcon sx={{ fontSize: '1.85rem' }} />
            よくある質問
          </Box>
          <Box sx={{ m: 2 }}>
            <QAaccordions />
          </Box>
          <Box sx={{mt: 3, textAlign: 'center'}}>
            <Button
              href="/services"
              variant="contained"
              endIcon={<NavigateNextIcon />}
              aria-label="servicesへ移動"
              sx={{textTransform: 'none'}}
            >
              Read More
            </Button>
          </Box>
        </Box>

        <Box component={'section'} sx={{ mt: 10 }}>
          <ThemeProvider theme={theme}>
            <Typography variant="subtitle2" sx={{ color: '#0072E5' }}>
              Contact
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', borderBottom: '1px solid #3a302d' }}
            >
              お問い合わせ
            </Typography>
          </ThemeProvider>
        </Box>
        <Grid
          container
          sx={{
            mt: 2,
            justifyContent: 'center',
          }}
          spacing={2}
        >
          <Grid item md={6}>
            <Box sx={{ px: 2 }}>
              <ThemeProvider theme={theme}>
                <Typography variant="body2">
                  お庭まわりでお困りの方...
                  あなたに寄りそったご提案をさせていただきます。
                  雑草除去や庭木一本の剪定からでも喜んでお受けいたします。
                  どんなことでもお気軽にお問い合わせください。
                </Typography>
              </ThemeProvider>
            </Box>
            <Box sx={{ mt: 2, px: 5 }}>
              <Image
                src={'/image/contact_img_by_adomas-aleno.jpg'}
                alt={'お問い合わせ画像'}
                width={1980}
                height={1150}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  boxShadow: '5px 5px 5px rgba(20,20,20,.7)',
                }}
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, md: 5 },
              }}
            >
              <Box component={'h3'} sx={{ fontSize: { xs: 17 } }}>
                WEBからのお問い合わせ
              </Box>
              <Button
                sx={{ fontFamily: notojp, fontSize: { xs: 20, md: 24 } }}
                variant="contained"
                size="large"
                color="success"
                href="/contact"
                startIcon={<ContactMailIcon />}
                aria-label="contactへ移動"
              >
                お問い合わせ
              </Button>
              <Box component={'h3'} sx={{ fontSize: { xs: 17 } }}>
                お電話でのお問い合わせ
              </Box>
              <Button
                sx={{ fontFamily: notojp, fontSize: { xs: 20, md: 24 } }}
                variant="contained"
                size="large"
                color="success"
                href="tel:+0568-50-2621"
                startIcon={<PhoneForwardedOutlinedIcon />}
                aria-label="電話をする"
              >
                0568-50-2621
              </Button>
              <ThemeProvider theme={theme}>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  ※受付時間 8:00～18:00 (お盆、年末年始除く)
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
