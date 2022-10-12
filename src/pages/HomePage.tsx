import Hero from '../components/Hero';
import PrintPhotoForm from '../components/PrintPhoto';
import Content from '../components/Content';
import UploadPhoto from '../components/UploadPhoto';
import PageContainer from '../components/PageContainer';

const HomePage = () => {
  return (
    <PageContainer>
      <Content>
        <Hero />
        <PrintPhotoForm />
        <UploadPhoto />
      </Content>
    </PageContainer>
  );
};

export default HomePage;
