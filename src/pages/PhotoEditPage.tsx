import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Grid, IconButton } from '@mui/material';
import Button from '../components/Button';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from '../components/Footer';
import { photo1 } from '../assets';
import Content from '../components/Content';

const IncreaseIcon = styled(AddIcon).attrs(props => ({
  sx: {
    color: props.theme.colors.christine,
  },
}))``;

const ReduceIcon = styled(RemoveIcon).attrs(props => ({
  sx: {
    color: props.theme.colors.christine,
  },
}))``;

const PhotoButton = styled(IconButton)`
  border: 3px solid ${props => props.theme.colors.christine};
  border-radius: 15px;
`;

const PhotoEditPage = () => {
  return (
    <>
      <Header />
      <Content>
        <Navigation />
        <Grid container justifyContent={'space-between'} mt={4}>
          <Grid
            sx={{
              display: { xs: 'flex', sm: 'flex', md: 'block' },
              justifyContent: { xs: 'space-between', sm: 'space-between', md: 'flex-start' },
              flexGrow: 1,
            }}
          >
            <Button style={{ marginRight: '15px' }}>Добавить рамку</Button>
            <Button>Кадрирование по ширине</Button>
          </Grid>
          <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <PhotoButton sx={{ marginRight: '15px' }}>
              <IncreaseIcon />
            </PhotoButton>
            <PhotoButton>
              <ReduceIcon />
            </PhotoButton>
          </Grid>
        </Grid>
        <div style={{ margin: '100px 0 0 0' }}>
          <img style={{ display: 'block', width: '45%', height: 'auto', margin: '0 auto' }} src={photo1} alt="" />
        </div>
        <Grid justifyContent={'center'} mt={8} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
          <PhotoButton sx={{ marginRight: '15px' }}>
            <IncreaseIcon />
          </PhotoButton>
          <PhotoButton>
            <ReduceIcon />
          </PhotoButton>
        </Grid>
      </Content>
      <Footer />
    </>
  );
};

export default PhotoEditPage;
