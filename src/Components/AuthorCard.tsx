import authors from '@/db/authors';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { LuMove } from 'react-icons/lu';
import { MdMusicNote } from 'react-icons/md';

const AuthorCard = ({ index }: { index: number }) => {
  const authorData = authors[index];
  return (
    <Link
      href={{ pathname: '/marketplace', query: { query: authorData.name } }}
      className="bg-primary_dark block  text-white border border-transparent  hover:border-primary cursor-pointer "
    >
      <div className="flex flex-col justify-center gap-2 items-center">
        <Image
          height={180}
          width={180}
          src={'/authors/' + authorData.name + '.jpg'}
          className="w-full h-48 aspect-square object-cover"
          alt=""
        ></Image>
        <div className="flex flex-col justify-center flex-1 w-full text-start ml-8 pt-2 pb-3">
          <h3 className="font-medium text-2xl text-secondary">{authorData.name}</h3>
          <div className="text-[#ffffff9c] text flex gap-4">
            <p>
              <MdMusicNote className="inline text-secondary mr-2" />
              {authorData.musics}
            </p>
            <p>
              <BiDownload className="inline text-secondary mr-2" />
              {authorData.sells}
            </p>
            <p>
              <CiHeart className="inline text-secondary mr-2" />
              {authorData.follows}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AuthorCard;
