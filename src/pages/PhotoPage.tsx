import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
import UploadPhoto from '../components/UploadPhoto';

const OrderItem = styled.div`
  position: relative;
  background-color: #f2efef;
  width: 260px;
  height: 350px;
  margin-bottom: 70px;

  @media (max-width: 900px) {
    width: 250px;
    height: 300px;
  }

  @media (max-width: 500px) {
    width: 200px;
    height: 250px;
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

  &:hover {
    background-color: #e4e3e3;
  }
`;

const AddPhoto = styled(UploadPhoto)`
  margin-top: 30px;
  margin-right: 20px;
`;

interface LoadMoreProps {
  more: boolean;
}

const LoadMoreButton = styled(Button)<LoadMoreProps>`
  display: ${props => (props.more ? 'block' : 'none')};
`;

const getPreview = async (imgId: string[]): Promise<string[]> => {
  const url = 'http://127.0.0.1:5000/file/preview';

  const images64: string[] = [];

  for (let i = 0; i < imgId.length; i++) {
    await axios.get(url, { params: { file_id: imgId[i] } }).then(res => images64.push(res.data));
  }

  return images64;
};

const PhotoPage = () => {
  const [images, setImages] = useState([] as string[]);
  const [page, setPage] = useState(0 as number);
  const [countImages, setCountImages] = useState(0 as number);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('images')) {
      let count = [...JSON.parse(localStorage.getItem('images') || '{}')].length;
      setCountImages(count);
      let nextPage = images.length + 12;
      if (nextPage > count) {
        nextPage = count;
      }

      getPreview([...JSON.parse(localStorage.getItem('images') || '{}')].splice(images.length, nextPage)).then(res =>
        setImages([...images, ...res])
      );
    }
  }, [page]);

  useEffect(() => {
    if (countImages === 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [countImages]);

  const deleteItem = (index: number) => {
    const storeImages = JSON.parse(localStorage.getItem('images') || '{}');
    const imagesArr = [...images];
    if (storeImages.length === 1) {
      localStorage.removeItem('images');
      setImages([]);
      setCountImages(0);
    } else {
      storeImages.splice(index, 1);
      imagesArr.splice(index, 1);
      localStorage.setItem('images', JSON.stringify(storeImages));
      setImages([...imagesArr]);
      setCountImages(storeImages.length);
      if (imagesArr.length < 8 && storeImages.length >= 8) {
        setPage(page + 1);
      }
    }
  };

  return (
    <>
      <Header />
      <Content>
        <Navigation />
        <AddPhoto buttonText={'ДОБАВИТЬ ФОТО'} icon={<PlusIcon />} />
        <Button style={{ marginTop: '30px' }} endIcon={<SettingsIcon />}>
          НАСТРОЙКИ
        </Button>
        <Grid container marginTop={'70px'} justifyContent={'space-around'}>
          {images.map((item, index) => {
            return (
              <OrderItem key={index}>
                <OrderImage src={'data:image/png;base64, ' + item} />
                <OrderButtonContainer>
                  <OrderButton>
                    <CreateIcon />
                  </OrderButton>
                  <OrderButton onClick={() => deleteItem(index)}>
                    <CloseIcon />
                  </OrderButton>
                </OrderButtonContainer>
              </OrderItem>
            );
          })}
        </Grid>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {loaded && <h3>Нет загруженных изображений</h3>}
          <LoadMoreButton onClick={() => setPage(page + 1)} more={images.length > 0 && images.length < countImages}>
            ЗАГРУЗИТЬ ЕЩЕ
          </LoadMoreButton>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default PhotoPage;
