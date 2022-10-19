import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import '../styles/globals.css'; //글로벌스타일을 적용시키기 위해 import
//부모컴포넌트
export default function _app({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
