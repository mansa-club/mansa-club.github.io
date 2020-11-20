import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Layout from '../components/layout';
import Banner from '../sections/banner';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <Banner />
        </Layout>
    </ThemeProvider>
  );
}
