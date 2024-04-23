import React from 'react';
import { BiBitcoin, BiDownload } from 'react-icons/bi';
import tracks from '@/db/tracks';
import Link from 'next/link';
import Image from 'next/image';

const NFTCard = ({ index }: { index: number }) => {
  console.log(tracks[index]);
  return (
    <>
      {tracks[index] ? (
        <Link
          href={`/nft/${index}`}
          className="bg-primary_dark w-full block px-1 py-2 sm:px-2 sm:py-3 text-white border border-transparent  hover:border-primary cursor-pointer "
        >
          <div className="flex gap-4 items-center">
            <Image
              width={80}
              height={80}
              src={tracks[index].thumbUrl}
              className="w-14 h-14 sm:w-20 sm:h-20 aspect-square object-cover"
              alt=""
            ></Image>
            <div className="flex flex-col justify-center text-start flex-1 ">
              <h3 className="font-medium text-lg sm:text-xl">{tracks[index].name}</h3>
              <p className="text-secondary sm:text-base text-sm">{tracks[index].author.name}</p>
            </div>
            <div className="pr-4 flex flex-col gap-1 items-center">
              <span className="text-sm text-secondary opacity-50 z-0">
                <BiDownload className="inline align-sub" /> {tracks[index].sells}
              </span>
              <button className="btn-prim py-0.5 px-2 w-14 ">
                {' '}
                <BiBitcoin className="inline" />
                <span className="text-sm">{tracks[index].bitcoin}</span>
              </button>
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default NFTCard;
