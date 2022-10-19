import NavBar from './NavBar';

export default function Layout({ children }) {
  //layout 컴포넌트는 children이라는 prop을 가지게됨. children은 _app.js의 <Layout></Layout> 사이에 있는 내용을 의미
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
