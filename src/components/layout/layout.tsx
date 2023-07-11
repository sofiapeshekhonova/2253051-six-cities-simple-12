import { ReactNode } from 'react';
import Header from '../header/header';
import { Helmet } from 'react-helmet-async';

type LayoutProps = {
  className: string;
  title: string;
  children: ReactNode;
  isLoggedIn: boolean;
};

function Layout({ className, title, children, isLoggedIn }: LayoutProps) {
  return (
    <div className={className}>
      <Header isLoggedIn={isLoggedIn} />
      <Helmet>
        <title>Six Cities. {title}</title>
      </Helmet>
      {children}
    </div>
  );
}

export default Layout;
