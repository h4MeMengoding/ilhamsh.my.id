import Router from 'next/router';
import { TbListDetails } from 'react-icons/tb';

import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='Get to Know Me' />
        <p className='leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          I invite you to get to know me better, like a book waiting to be
          opened, a story waiting to be told, and an adventure waiting to be
          explored together.
        </p>
      </div>
      <Card className='space-y-4 rounded-xl border bg-neutral-100 p-8 dark:border-none dark:bg-[#1e1e1e]'>
        <div className='flex items-center gap-2'>
          <TbListDetails size={24} />
          <h3 className='text-xl font-medium'>Open my about page!</h3>
        </div>
        <p className='pl-2 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          I provide my Resume, Experience, Education, and Introduction in detail
          on that page.
        </p>
        <Button
          data-umami-event='Klik Tombol Tentang'
          onClick={() => Router.push('/about')}
        >
          Resume
        </Button>
      </Card>
    </section>
  );
};

export default Services;
