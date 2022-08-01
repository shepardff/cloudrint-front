import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { photo1, photo2, photo3, PlusIcon, SettingsIcon } from '../assets';
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

const PhotoPage = () => {
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
          <OrderItem>
            <OrderImage src={photo1} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
          <OrderItem>
            <OrderImage src={photo2} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
          <OrderItem>
            <OrderImage src={photo3} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
          <OrderItem>
            <OrderImage src={photo1} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
          <OrderItem>
            <OrderImage src={photo2} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
          <OrderItem>
            <OrderImage src={photo3} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
          <OrderItem>
            <OrderImage src={photo1} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
          <OrderItem>
            <OrderImage src={photo2} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
          <OrderItem>
            <OrderImage src={photo3} />
            <OrderButtonContainer>
              <OrderButton>
                <CreateIcon />
              </OrderButton>
              <OrderButton>
                <CloseIcon />
              </OrderButton>
            </OrderButtonContainer>
          </OrderItem>
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
