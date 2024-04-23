'use client';
import AudioPlayer from '@/Components/AudioPlayer';
import authors from '@/db/authors';
import tracks from '@/db/tracks';
import Link from 'next/link';
import { useState } from 'react';
import { BiDownload } from 'react-icons/bi';

const Page = ({ params }: { params: { index: number } }) => {
  const trackData = tracks[params.index];
  const [selectPay, setSelectPay] = useState(0);

  return (
    <div className="mt-[88px] py-8 md:py-32 bg-cover min-h-[calc(100vh_-_88px)] grid place-items-center   w-screen overflow-hidden  bg-center bg-no-repeat relative">
      <div className="z-10 relative container flex flex-col lg:items-center lg:flex-row gap-8">
        <img
          src={trackData.thumbUrl}
          className="w-full max-w-[450px] xl:max-w-[550px] shadow-lg aspect-square object-cover mx-auto"
        ></img>
        <div className="flex-1 w-full mb-8">
          <div className="flex  flex-col md:flex-row gap-2 md:gap-5 justify-between items-start md:items-center">
            <div>
              <h3 className="text-white text-4xl md:text-5xl"> {trackData.name}</h3>
              <Link
                href={{
                  pathname: '/marketplace',
                  query: { query: authors[trackData.author.id].name },
                }}
                className="text-secondary text-xl mt-4 flex gap-2 items-center hover:underline underline-offset-2"
              >
                <img
                  src={`/authors/${authors[trackData.author.id].name}.jpg`}
                  className="w-10 h-10 border-2 border-primary rounded-full"
                />
                {trackData.author.name}
              </Link>
            </div>
            <div className="text-xl md:text-3xl text-white">
              <BiDownload className="inline text-secondary" /> {trackData.sells}
            </div>
          </div>
          <AudioPlayer index={params.index} />
          <h3 className="text-white text-2xl mb-6 ">
            Buy <span className="text-secondary">Options</span>
          </h3>
          <div className="flex justify-between flex-col md:flex-row gap-4 items-stretch lg:flex-col 2xl:flex-row mb-4 md:pb-2 p-2 bg-[#1142327c]">
            <div className="flex flex-col sm:flex-row  w-full ">
              <button
                onClick={() => setSelectPay(0)}
                type={'button'}
                className={`${
                  selectPay === 0 ? 'bg-primary' : ''
                } text-secondary flex-1 text-2xl flex gap-3 py-2 pl-3 pr-5 items-center leading-none transition-all cursor-pointer`}
              >
                <img className="w-10" src="/cryptos/bitcoin.png" alt="" />
                <p className="flex flex-col items-start">
                  <span className="text-white text-sm block">Bitcoin</span>
                  <span className="block font-Lexend">{trackData.bitcoin}</span>
                </p>
              </button>
              <button
                onClick={() => setSelectPay(1)}
                type={'button'}
                className={`${
                  selectPay === 1 ? 'bg-primary' : ''
                } text-secondary flex-1 text-2xl flex gap-3 py-2 pl-3 pr-5 items-center leading-none transition-all cursor-pointer`}
              >
                <img className="w-10" src="/cryptos/ethereum.png" alt="" />
                <p className="flex flex-col items-start">
                  <span className="text-white text-sm block">Ethereum</span>
                  <span className="block font-Lexend">{trackData.etherium}</span>
                </p>
              </button>
              <button
                onClick={() => setSelectPay(2)}
                type={'button'}
                className={`${
                  selectPay === 2 ? 'bg-primary' : ''
                } text-secondary flex-1 text-2xl flex gap-3 py-2 pl-3 pr-5 items-center leading-none transition-all cursor-pointer`}
              >
                <img className="w-10" src="/cryptos/dogecoin.png" alt="" />
                <p className="flex flex-col items-start">
                  <span className="text-white text-sm block">Doge Coin</span>
                  <span className="block font-Lexend">{trackData.dogecoin}</span>
                </p>
              </button>
            </div>
          </div>
          <div className="flex">
            <button className="btn-prim px-6 py-3 flex-1">Buy</button>
            <button className="btn-sec px-6 py-3  flex-1">Offer</button>
          </div>
        </div>
      </div>
      <img
        src={trackData.thumbUrl}
        className="absolute w-full min-h-[60vh]  inset-0 blur-lg brightness-50 z-0"
      ></img>
    </div>
  );
};

export default Page;
