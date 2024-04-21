import React from 'react';
import { BiBitcoin, BiDownload } from 'react-icons/bi';

const NFTCard = () => {
  return (
    <div className="bg-primary_dark w-full p-2 text-white border border-transparent  hover:border-primary cursor-pointer ">
      <div className="flex gap-4 items-center">
        <img
          src="/thumbs/3.jpg"
          className="w-14 h-14 sm:w-20 sm:h-20 aspect-square object-cover"
          alt=""
        ></img>
        <div className="flex flex-col justify-center text-start flex-1 ">
          <h3 className="font-medium text-lg sm:text-2xl">Hpjazz</h3>
          <p className="text-secondary sm:text-base text-sm">Bensound</p>
        </div>
        <div className="pr-4 flex gap-4 items-center">
          <span className="text-sm text-secondary opacity-50 z-0">
            <BiDownload className="inline align-sub" /> 5k
          </span>
          <button className="btn-prim py-2 px-2 ">
            {' '}
            <BiBitcoin className="inline" />
            <span className="text-sm">50</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
