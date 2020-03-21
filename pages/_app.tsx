import React from "react";
import App from "next/app";

import Layout from "../components/Layout";
import Head from "../components/Head";

class LandingApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default LandingApp;
