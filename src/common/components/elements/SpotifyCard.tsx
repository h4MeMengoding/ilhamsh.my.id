import Image from 'next/image';
import Link from 'next/link';
import { BiLogoSpotify } from 'react-icons/bi';

import { useGetDataSpotify } from '../useGetDataSpotify';

// Define the interfaces
interface Artist {
  href: string;
  name: string;
}

// eslint-disable-next-line unused-imports/no-unused-vars
interface Data {
  currentlyPlaying: boolean;
  albumArt: {
    url: string;
  };
  href: string;
  name: string;
  artists: Artist[];
  playlistHref: string;
  playlistName: string;
}

const SpotifyCard: React.FC = (): JSX.Element | null => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error, isLoading } = useGetDataSpotify();

  if (isLoading || error) {
    return (
      <div className='flex w-full items-center rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-800'>
        <div className='relative w-full'>
          <div className='flex items-center gap-8'>
            <div className='h-[75px] w-[75px] animate-pulse overflow-hidden rounded-lg bg-neutral-300 dark:bg-neutral-700 sm:h-[100px] sm:w-[100px]'></div>
            <div className='flex flex-col items-start gap-1 md:gap-3'>
              <div className='h-4 w-[178px] animate-pulse rounded bg-neutral-300 dark:bg-neutral-700'></div>
              <div className='h-5 w-[187px] animate-pulse rounded bg-neutral-300 dark:bg-neutral-700'></div>
              <div className='h-4 w-[143px] animate-pulse rounded bg-neutral-300 dark:bg-neutral-700'></div>
            </div>
          </div>
          <Link
            href='https://spotify.com'
            target='_blank'
            rel='noopener noreferrer'
            className='absolute right-0 top-0'
          >
            <BiLogoSpotify className='h-5 w-5 md:h-8 md:w-8' />
          </Link>
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <div className='flex w-full flex-col rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800'>
        <div className='relative mb-2 w-full'>
          <h1 className='text-md font-bold md:text-lg'>
            {data.currentlyPlaying
              ? 'MENDENGARKAN SPOTIFY'
              : 'TERAKHIR DIPUTAR'}
          </h1>
          <div className='absolute right-0 top-0'>
            <BiLogoSpotify className='h-6 w-6 md:h-8 md:w-8' size={40} />
          </div>
        </div>
        <div className='flex gap-4'>
          <Image
            src={data.albumArt.url}
            alt='Album art'
            width={100}
            height={100}
            className='rounded-sm'
          />
          <div className='flex flex-col justify-center gap-1'>
            <Link
              href={data.href}
              className='text-md font-semibold hover:underline md:text-lg'
            >
              {data.name}
            </Link>
            <p>
              {data.artists.map((artist, i) => (
                <Link
                  key={i}
                  href={artist.href}
                  className='text-sm font-medium hover:underline'
                >
                  {artist.name + (i < data.artists.length - 1 ? ', ' : '')}
                </Link>
              ))}
            </p>
            <p>
              Album:{' '}
              <Link
                href={data.playlistHref}
                className='text-sm font-medium hover:underline'
              >
                {data.playlistName}
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SpotifyCard;
