import React from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import styles from './page.module.css';

const page = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <h1 className={styles.title}>お問い合わせ</h1>
          <p className={styles.p}>
            お問い合わせは下記のフォームからご連絡ください。
            原則２営業日以内に折り返しのご連絡をいたします。
            ※現在、事務所での打ち合わせは行っておりません。
            現地でのお打ち合わせのみとなります。 ご了承ください。
          </p>
        </Box>
        <Box
          component="form"
          sx={{
            width: '70%',
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'column',
            m: 1,
          }}
          autoComplete="off"
        >
          <FormControl>
            <InputLabel htmlFor="name">name</InputLabel>
            <OutlinedInput
              id="name"
              type="text"
              placeholder="山田 太郎"
              required
              autoFocus
            />
          </FormControl>
          <FormControl variant="outlined" sx={{ p: 2 }}>
            <InputLabel htmlFor="email">メールアドレス</InputLabel>
            <OutlinedInput
              id="email"
              type="email"
              placeholder="info@sugizo.com"
              required
            />
          </FormControl>
          <FormControl variant="outlined" sx={{ p: 2 }}>
            <InputLabel htmlFor="tel">電話番号</InputLabel>
            <OutlinedInput id="tel" type="tel" placeholder="090-1234-5678" required />
          </FormControl>
          <TextField
            id="message"
            label="お問い合わせ内容"
            multiline
            rows={7}
            placeholder="あなたのお悩みをお聞かせください"
          />
        </Box>
      </Container>
    </>
  );
};

export default page;
