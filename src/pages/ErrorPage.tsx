import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Typography from '../components/Typography';
import styled from 'styled-components';

const ErrorTitle = styled(Typography)`
  color: ${props => props.theme.colors.carrotOrange};
`;

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Content style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <ErrorTitle fontSize={'26px'}>ОШИБКА</ErrorTitle>
        <Typography style={{ marginTop: '20px' }}>НЕВОЗМОЖНО ЗАГРУЗИТЬ ФОТО</Typography>
        <Button style={{ marginTop: '40px' }} fontSize={'20px'}>
          НА ГЛАВНУЮ
        </Button>
      </Content>
      <Footer />
    </>
  );
};

export default ErrorPage;
