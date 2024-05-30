import React from 'react';
import { SiBetterstack } from 'react-icons/si';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';

import UptimeCard from './UptimeCard';

export default function Spotify() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading title='Uptime' icon={<SiBetterstack size={22} />} />
        <SectionSubHeading>
          <p>Diambil secara iframe dari Betterstack</p>
        </SectionSubHeading>
      </div>
      <UptimeCard />
    </div>
  );
}
