import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PrintPhoto from '../components/PrintPhoto';
import Footer from '../components/Footer';
import Content from '../components/Content';

const SettingsPage = () => {
  return (
    <>
      <Header />
      <Content>
        <Navigation />
        <PrintPhoto />
      </Content>
      <Footer />
    </>
  );
};

export default SettingsPage;
