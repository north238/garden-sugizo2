import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

interface emailProps {
  email: string;
  name: string;
  message: string;
  tel: string;
}

export const Email = ({ email, name, message, tel }: emailProps) => (
  <Html>
    <Head />
    <Preview>お問い合わせいただきありがとうございます</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{name}様</Heading>
        <Text style={paragraph}>
          この度はお問い合わせいただきありがとうございます。
          <br />
          お問い合わせいただいた内容をご確認ください。
          <br />
          <br />
          以下の内容をご確認ください。
        </Text>

        <Hr />
        <Text style={paragraph}>
          <b>お名前: {name}</b>
        </Text>
        <Text style={paragraph}>
          <b>メールアドレス: {email}</b>
        </Text>
        <Text style={paragraph}>
          <b>電話番号: {tel}</b>
        </Text>
        <Text style={paragraph}>
          <b>お問い合わせ内容: {message}</b>
        </Text>
        <Hr />
      </Container>
      <Section style={footer}>
        <Row>
          <Column align="center">
            <Text style={h1}>庭屋すぎ蔵</Text>
            <Img src={`${baseUrl}/static/icon.ico`} style={{ width: '20%' }} />
            <Link href={'https://garden-sugizo.website'} style={link}>
              ホームページへ移動
            </Link>
          </Column>
        </Row>
        <Text style={{ textAlign: 'center', color: '#706a7b' }}>
          © 2022 庭屋すぎ蔵
        </Text>
      </Section>
    </Body>
  </Html>
);

export default Email;

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
  backgroundColor: '#efeef1',
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: '580px',
  margin: '30px auto',
  padding: '10px',
  backgroundColor: '#ffffff',
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
};

const footer = {
  width: '580px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};
