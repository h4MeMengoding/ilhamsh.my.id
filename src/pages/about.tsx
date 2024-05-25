import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import About from '@/modules/about';

const PAGE_TITLE = 'Tentang';
const PAGE_DESCRIPTION =
  'Sekilas tentang siapa saya - mengenal dan memahami lebih dekat.';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ilham Shofa`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
};

export default AboutPage;
