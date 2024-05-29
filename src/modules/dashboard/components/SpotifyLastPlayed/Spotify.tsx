import { Popover } from '@headlessui/react';
import Image from 'next/image';
import { BsSpotify as SpotifyIcon } from 'react-icons/bs';
import useSWR from 'swr';

import { DeviceProps, NowPlayingProps } from '@/common/types/spotify';
import { fetcher } from '@/services/fetcher';

const SpoLast = () => {

  const { data: playingData } = useSWR<NowPlayingProps>(
    '/api/now-playing',
    fetcher,
  );

  const { data: devicesData = [] } = useSWR<DeviceProps[]>(
    '/api/available-devices',
    fetcher,
  );

  const activeDevice = devicesData?.find((device) => device.is_active);

  const handleOpenSongUrl = (url?: string) => {
    url && window.open(url, '_blank');
  };

  if (!playingData?.songUrl) return null;

  return (
    <div className='fixed bottom-0 z-[99999] hidden w-full lg:block'>
      <div className='flex justify-between bg-green-400 px-4 pb-0.5 pt-[2.5px] text-[14px] text-neutral-800 dark:bg-green-500 dark:text-neutral-900'>
        {playingData?.songUrl ? (
          <Popover className='relative'>
              <div className='flex items-center gap-2'>
                <div className='hidden sm:block '>Sedang mendengarkan :</div>
                <div className='flex items-center gap-2 transition-all duration-300'>
                  {playingData?.albumImageUrl && (
                    <Image
                      className='rounded-sm'
                      unoptimized
                      alt={playingData?.album}
                      src={playingData?.albumImageUrl}
                      width={18}
                      height={18}
                    />
                  )}
                  <div
                    className='flex gap-1 hover:cursor-pointer hover:underline'
                    onClick={() => handleOpenSongUrl(playingData?.songUrl)}
                  >
                    <span>{playingData?.artist} -</span>
                    <span>{playingData?.title}</span>
                  </div>
                </div>
              </div>
          </Popover>
        ) : (
          <div className='flex items-center gap-1'>
            <SpotifyIcon size={16} className='mr-1' />
            <div>Not Playing</div>
          </div>
        )}

        {playingData?.songUrl && (
          <Popover className='relative'>
              <div className='flex items-center gap-1'>
                <SpotifyIcon size={16} className='mr-0.5' />
                <div>
                  Listening on{' '}
                  <span className='font-medium'>{activeDevice?.name}</span>
                </div>
              </div>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default SpoLast;
