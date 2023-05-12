import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PrintPhoto from '../components/PrintPhoto';
import Footer from '../components/Footer';
import Content from '../components/Content';

const SettingsPage = () => {
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
        <PrintPhoto />
      </Content>
      <Footer />
    </>
  );
};

export default SettingsPage;
