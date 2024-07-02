import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='id'>
      <Head>
        <script
          async
          defer
          src='https://analytics.hame.my.id/script.js'
          data-website-id='0d4c5eae-072d-4bba-b65e-8834d24dd45f'
        ></script>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#121212'
        />
        <meta name='theme-color' content='#121212' />
        <meta name="google-site-verification" content="XyIRwcF70qvInoOXmDaZRRGpQMUBd20GFkcXfO1-Tqk" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
