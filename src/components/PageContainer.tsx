import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

interface Props {
  children: React.ReactNode;
}

const PageContainer = (props: Props) => {
  return (
    <div>
      <Loader />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default PageContainer;
