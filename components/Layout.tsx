import React from "react";
import Head from "next/head";

import NavbarComponent from "./Navbar";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Admon. Loterías Ntra. Sra. de los Remedios</title>
    </Head>
    <NavbarComponent />
    {children}
  </div>
);

export default Layout;
