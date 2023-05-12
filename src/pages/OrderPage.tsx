import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Typography from '../components/Typography';

const StyledInput = styled.input`
  border: 0;
  outline: none;
  border-bottom: 2px solid ${props => props.theme.colors.christine};
  margin-bottom: 20px;
  padding: 10px 0;
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
`;

const HomePage = () => {
  const navigationProps = {
    backLink: '/order/photos',
    backLinkName: 'фотографии',
    forwardLink: '/',
    forwardLinkName: 'на хуй',
  };

  return (
    <>
      <Header />
      <Content>
        <Navigation navigation={navigationProps} />
        <Typography fontSize={'18px'} mt={4}>
          ОФОРМЛЕНИЕ ЗАКАЗА
        </Typography>
        <Box component="div" mt={4}>
          <Typography mt={1}>Заказ фотографий 10Х15 Глянец 11 шт - 300 РУБ</Typography>
          <Typography mt={1}>Доставка - 100 РУБ</Typography>
        </Box>
        <Box
          component="form"
          mt={4}
          sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '100%', md: '40%' } }}
        >
          <StyledInput placeholder="Адрес доставки" />
          <StyledInput placeholder="+7 (___)-___-____" />
        </Box>
        <Box
          mt={4}
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          }}
          justifyContent={'space-between'}
        >
          <Typography>Доставка осуществляется почтой России</Typography>
          <Typography alignSelf={'flex-end'} sx={{ marginTop: { xs: '20px', sm: '20px', md: '0' } }}>
            ИТОГО: 404 РУБ
          </Typography>
        </Box>
      </Content>
      <Footer />
    </>
  );
};

export default HomePage;
