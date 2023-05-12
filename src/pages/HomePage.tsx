import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Hero from '../components/Hero';
import PrintPhotoForm from '../components/PrintPhoto';
import Content from '../components/Content';
import UploadPhoto from '../components/UploadPhoto';
import PageContainer from '../components/PageContainer';
import { RightIcon } from '../assets';
import { Box } from '@mui/system';

const UploadPhotoButton = styled(UploadPhoto)`
  align-self: flex-end;
  margin-top: 50px;
  padding-right: 30px;
  padding-left: 30px;

  @media (max-width: 1100px) {
    align-self: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('images')) {
      navigate('/order/photos');
    }
  });

  return (
    <PageContainer>
      <Content>
        <Hero />
        <PrintPhotoForm />
        <Box display={'flex'} component="form" flexDirection={'column'}>
          <UploadPhotoButton buttonText={'ЗАГРУЗИТЬ ФОТО'} icon={<RightIcon />} />
        </Box>
      </Content>
    </PageContainer>
  );
};

export default HomePage;
