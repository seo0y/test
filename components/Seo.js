import Head from 'next/head';
//이컴포넌트에는 하드 코딩을 해야하는 부분을 넣어주면 좋음. meta description, 작성자 같은 정보.
export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | NEXT MOVIES</title>
    </Head>
  );
}
