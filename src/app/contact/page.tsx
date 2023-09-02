'use client';

import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

type Form = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

const contactSchema = yup.object().shape({
  name: yup.string().trim().required('お名前の入力は必須です'),
  email: yup
    .string()
    .trim()
    .email('メールアドレスの形式で入力してください。')
    .required('メールアドレスの入力は必須です'),
  tel: yup
    .string()
    .trim()
    .required('電話番号の入力は必須です')
    .matches(/^[0-9]*$/, { message: '半角数字で入力してください' }),
  message: yup
    .string()
    .trim()
    .required('お問い合わせ内容の入力は必須です')
    .max(1000, '1000文字以内で入力してください'),
});

const Contact = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<Form>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const response: Response = await fetch('api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      response.json();
      router.push('/complete');
    } else {
      alert('正常に送信できませんでした');
    }
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 5 }}>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h5"
            sx={{ mt: 2, borderBottom: '1px solid #3a302d' }}
          >
            お問い合わせ
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              お問い合わせは下記のフォームからご連絡ください。
              原則２営業日以内に折り返しのご連絡をいたします。
              ※現在、事務所での打ち合わせは行っておりません。
              現地でのお打ち合わせのみとなります。 ご了承ください。{' '}
            </Typography>
          </Box>
        </ThemeProvider>
        <Box
          component="form"
          sx={{
            mt: 2,
            width: '100%',
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'column',
          }}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Box>
            <Controller
              name="name"
              control={control}
              defaultValue=""
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
                  error={errors.name ? true : false}
                  helperText={errors.name?.message as string}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="email"
              control={control}
              defaultValue=""
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
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit(onSubmit)}
              aria-label="送信する"
            >
              送信する
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
