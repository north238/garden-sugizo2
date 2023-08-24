'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

type Form = {
  text: string;
  email: string;
  tel: string;
  message: string;
};

const Contact = () => {
  const { control, handleSubmit } = useForm<Form>();

  const submit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <Container maxWidth="xs" sx={{ mt: 10 }}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <h4 className={styles.title}>お問い合わせ</h4>
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
            width: '100%',
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'column',
          }}
          onSubmit={handleSubmit(submit)}
          autoComplete="off"
        >
          <Box>
            <Controller
              name="text"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: 'お名前を入力してください' },
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  autoFocus
                  required
                  fullWidth
                  id="name"
                  type="text"
                  label="お名前"
                  margin="dense"
                  error={errors.text ? true : false}
                  helperText={errors.text?.message as string}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: 'メールアドレスを入力してください',
                },
                maxLength: {
                  value: 10,
                  message: '最大10文字です'
                }
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="メールアドレス"
                  margin="dense"
                  error={errors.email ? true : false}
                  helperText={errors.email?.message as string}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="tel"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: '電話番号を入力してください',
                },
                maxLength: {
                  value: 11,
                  message: '11文字以内で入力してください。-(ハイフン)は不要です'
                }
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  id="tel"
                  type="tel"
                  label="電話番号"
                  margin="dense"
                  error={errors.tel ? true : false}
                  helperText={errors.tel?.message as string}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: 'お問い合わせ内容を入力してください',
                },
                maxLength: {
                  value: 300,
                  message: 'お問い合わせ内容は300文字以内で入力してください'
                }
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  multiline
                  rows={5}
                  id="message"
                  type="text"
                  label="お問い合わせ内容"
                  margin="dense"
                  error={errors.message ? true : false}
                  helperText={errors.message?.message as string}
                />
              )}
            />
          </Box>
          <Box sx={{ mt: 2 }} textAlign="left">
            <Button variant="contained" onClick={handleSubmit(submit)} aria-label='送信'>
              送信
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
