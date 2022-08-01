import Header from '../components/Header';
import Hero from '../components/Hero';
import PrintPhotoForm from '../components/PrintPhoto';
import Footer from '../components/Footer';
import Content from '../components/Content';
import UploadPhoto from '../components/UploadPhoto';

const HomePage = () => {
  return (
    <>
      <Header />
      <Content>
        <Hero />
        <PrintPhotoForm />
        <UploadPhoto />
      </Content>
      <Footer />
    </>
  );
};

export default HomePage;
