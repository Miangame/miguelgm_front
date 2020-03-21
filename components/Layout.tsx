import React from "react";
import Head from "next/head";

import NavbarComponent from "./Navbar";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Miguel Ángel Gavilán Merino</title>
    </Head>
    <NavbarComponent />
    {children}
  </div>
);

export default Layout;
