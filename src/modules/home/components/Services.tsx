import Router from 'next/router';
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='Mengenal Saya Lebih Banyak' />
        <p className='leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          Saya mengajak Anda untuk lebih mengenal saya dengan lebih dalam,
          seperti halnya buku yang menanti untuk dibuka, cerita yang menunggu
          untuk diceritakan, dan petualangan yang menantikan untuk dijelajahi
          bersama
        </p>
      </div>
      <Card className='space-y-4 rounded-xl border bg-neutral-100 p-8 dark:border-none dark:bg-[#1e1e1e]'>
        <div className='flex items-center gap-2'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>Kenal saya lebih jauh!</h3>
        </div>
        <p className='pl-2 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          Saya terbuka untuk berbincang dan saling mengenal lebih dekat
        </p>
        <Button
          data-umami-event='Click Contact Button'
          onClick={() => Router.push('/contact')}
        >
          Kontak saya
        </Button>
      </Card>
    </section>
  );
};

export default Services;
