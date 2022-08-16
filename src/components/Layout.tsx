import { NextPage } from 'next';
import React from 'react';
import Header from './Header';

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
