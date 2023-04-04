import { FC, ReactNode } from 'react';
import Header from '../header/header';
import { Helmet } from 'react-helmet-async';

type LayoutProps = {
  className: string;
  title: string;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ className,title,children }) => (
  <div className={className}>
    <Header />
    <Helmet>
      <title>Six Cities. {title}</title>
    </Helmet>
    {children}
  </div>
);

export default Layout;
