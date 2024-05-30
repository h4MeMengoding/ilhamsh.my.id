import Image from "next/image";
import Link from "next/link";
import { BiLogoSpotify } from "react-icons/bi";
import { useGetDataSpotify } from "../useGetDataSpotify";

// Define the interfaces
interface Artist {
  href: string;
  name: string;
}

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
  const { data, error, isLoading } = useGetDataSpotify();

  if (isLoading || error) {
    return (
      <div className="w-full flex bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 items-center">
        <div className="relative w-full">
          <div className="flex items-center gap-8">
            <div className="w-[75px] h-[75px] overflow-hidden rounded-lg sm:w-[100px] sm:h-[100px] bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
            <div className="flex flex-col items-start gap-1 md:gap-3">
              <div className="w-[178px] rounded h-4 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
              <div className="w-[187px] rounded h-5 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
              <div className="w-[143px] rounded h-4 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
            </div>
          </div>
          <Link
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 "
          >
            <BiLogoSpotify className="md:w-8 md:h-8 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <div className="w-full flex bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4 flex-col ">
        <div className="w-full mb-2 relative">
          <h1 className="text-md md:text-lg font-bold ">
            {data.currentlyPlaying ? "MENDENGARKAN SPOTIFY" : "TERAKHIR DIPUTAR"}
          </h1>
          <div className="absolute top-0 right-0">
            <BiLogoSpotify className="md:w-8 md:h-8 w-6 h-6" size={40} />
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={data?.albumArt.url}
            alt="Album art"
            width={100}
            height={100}
            className=" rounded-sm"
          />
          <div className="flex-col flex gap-1 justify-center">
            <Link
              href={data?.href}
              className=" text-md md:text-lg font-semibold hover:underline "
            >
              {data.name}
            </Link>
            <p>
              {data.artists.map((artist: Artist, i: number) => (
                <Link
                  key={i}
                  href={artist.href}
                  className="text-sm font-medium hover:underline "
                >
                  {artist.name + (i < data.artists.length - 1 ? ", " : "")}
                </Link>
              ))}
            </p>
            <p>
              Album :{" "}
              <Link
                href={data.playlistHref}
                className="hover:underline text-sm font-medium "
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
