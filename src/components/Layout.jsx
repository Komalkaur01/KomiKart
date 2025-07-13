// src/components/Layout.jsx
import React, { useContext } from 'react';

import Footer from './Footer';
import { UserContext } from '../context/UserContext';
import Header from './Header';

const Layout = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user && <Header/>}
      <main>{children}</main>
      {user && <Footer/>}
    </>
  );
};

export default Layout;
