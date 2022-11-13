import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { PlusIcon, SettingsIcon } from '../assets';
import { Grid, IconButton } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import Footer from '../components/Footer';
import Content from '../components/Content';

const OrderItem = styled.div`
  position: relative;
  background-color: #f2efef;
  width: 23%;
  height: 350px;
  margin-bottom: 70px;

  @media (max-width: 900px) {
    width: 30%;
  }

  @media (max-width: 500px) {
    width: 45%;
  }
`;

const OrderImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 100%;
  margin: auto;
`;

const OrderButtonContainer = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
`;

const OrderButton = styled(IconButton)`
  margin-left: 7px;
  background-color: white;
  border: 3px solid ${props => props.theme.colors.carrotOrange};
`;

interface UploadedImages {
  images: string[];
}

const getPreview = async (imgId: string[]): Promise<string[]> => {
  const url = 'http://127.0.0.1:5000/file/preview';

  const images64: string[] = [];

  for (let i = 0; i < imgId.length; i++) {
    await axios.get(url, { params: { file_id: imgId[i] } }).then(res => images64.push(res.data));
  }

  return images64;
};

const PhotoPage = () => {
  const location = useLocation();
  const state = location.state as UploadedImages;
  const [imagesArr, setImages] = useState([] as string[]);

  useEffect(() => {
    getPreview(state.images)
      .then(res => res)
      .then(res => setImages([...res]));
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Navigation />
        <Button style={{ marginTop: '30px', marginRight: '20px' }} endIcon={<PlusIcon />}>
          ДОБАВИТЬ ФОТО
        </Button>
        <Button style={{ marginTop: '30px' }} endIcon={<SettingsIcon />}>
          НАСТРОЙКИ
        </Button>
        <Grid container marginTop={'70px'} justifyContent={'space-between'}>
          {imagesArr.map((item, index) => {
            return (
              <OrderItem key={index}>
                <OrderImage src={'data:image/png;base64, ' + item} />
                <OrderButtonContainer>
                  <OrderButton>
                    <CreateIcon />
                  </OrderButton>
                  <OrderButton>
                    <CloseIcon />
                  </OrderButton>
                </OrderButtonContainer>
              </OrderItem>
            );
          })}
        </Grid>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button style={{ paddingLeft: '30px', paddingRight: '30px' }}>ЗАГРУЗИТЬ ЕЩË</Button>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default PhotoPage;
