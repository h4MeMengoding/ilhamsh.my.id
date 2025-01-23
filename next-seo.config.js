const canonicalUrl = 'https://ilhamsh.my.id';
const metaImage = 'https://i.imgur.com/xLmYv6C.png';
const metaDescription =
  'Someone who likes playing with cameras and making videos, alternating coding with self-study';

const defaultSEOConfig = {
  defaultTitle: 'Ilham Shofa - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Ilham Shofa - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'ilhamsh.my.id og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'ilhamsh.my.id og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'ilhamsh.my.id og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'ilhamsh.my.id',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
