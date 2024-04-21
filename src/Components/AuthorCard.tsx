import Image from 'next/image';
import React from 'react';
import { BiBitcoin } from 'react-icons/bi';

const AuthorCard = () => {
  return (
    <div className="bg-primary_dark p-2 text-white border border-transparent  hover:border-primary cursor-pointer ">
      <div className="flex flex-col justify-center gap-2 items-center">
        <Image
          height={180}
          width={180}
          src="/thumbs/3.jpg"
          className="w-full h-48 aspect-square object-cover"
          alt=""
        ></Image>
        <div className="flex flex-col justify-center flex-1 w-full text-start ml-4 ">
          <h3 className="font-medium text-2xl">Hpjazz</h3>
          <p className="text-secondary text">Bensound</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
