import React from 'react';
import Head from 'next/head';

// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NextNprogress from 'nextjs-progressbar';

import theme from '../src/theme';

// own css files here
// import '../styles/theme.css'; 
import '../sass/theme.scss';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Twitch App</title>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <NextNprogress color="#6441a5" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}