import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import { TITLE } from '@/constants/text';
import '@/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta property="og:title" content={TITLE} key="title" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
