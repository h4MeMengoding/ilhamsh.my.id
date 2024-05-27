const canonicalUrl = 'https://hame.my.id';
const metaImage = 'https://cloud.hameresource.my.id/index.php/core/preview?fileId=212&x=1926&y=923&a=true&etag=398e8624a0c953a96fd5eb81a89e1003';
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
        alt: 'hame.my.id og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'hame.my.id og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'hame.my.id og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'hame.my.id',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
