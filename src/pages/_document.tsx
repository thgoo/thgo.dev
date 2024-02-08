import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-gradient-to-r dark:from-mirage-950 dark:to-mirage-1000 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
