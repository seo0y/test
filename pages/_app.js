import React from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const _app = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default _app;
