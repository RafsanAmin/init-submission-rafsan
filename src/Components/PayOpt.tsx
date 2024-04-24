'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const PayOpt = ({ trackData }: { trackData: any }) => {
  const [selectPay, setSelectPay] = useState(0);

  return (
    <div className="flex justify-between flex-col md:flex-row gap-4 items-stretch lg:flex-col 2xl:flex-row mb-4 md:pb-2 p-2 bg-[#1142327c]">
      <div className="flex flex-col sm:flex-row  w-full ">
        <button
          onClick={() => setSelectPay(0)}
          type={'button'}
          className={`${
            selectPay === 0 ? 'bg-primary' : ''
          } text-secondary flex-1 text-2xl flex gap-3 py-2 pl-3 pr-5 items-center leading-none transition-all cursor-pointer`}
        >
          <Image width={40} height={40} className="w-10" src="/cryptos/bitcoin.png" alt="" />
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
          <Image width={40} height={40} className="w-10" src="/cryptos/ethereum.png" alt="" />
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
          <Image width={40} height={40} className="w-10" src="/cryptos/dogecoin.png" alt="" />
          <p className="flex flex-col items-start">
            <span className="text-white text-sm block">Doge Coin</span>
            <span className="block font-Lexend">{trackData.dogecoin}</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default PayOpt;
