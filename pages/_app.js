import React from 'react';
import Head from 'next/head';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import theme from '../src/theme';

// own css files here
import "../styles/global.css"; 

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
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}