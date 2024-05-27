import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Chat from '@/modules/chat';

const PAGE_TITLE = 'Chat';
const PAGE_DESCRIPTION =
  'Tinggalkan pesan untuk saya, katakan apa yang ingin kamu katakan!';

const GuestBookPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ilham Shofa`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Chat />
      </Container>
    </>
  );
};

export default GuestBookPage;
