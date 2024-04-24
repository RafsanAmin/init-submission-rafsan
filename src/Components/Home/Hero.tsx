'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SearchBar from '../SearchBar';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';

const Hero = () => {
  const [query, setQuery] = useState<string>('');
  return (
    <header className="container flex flex-col justify-end gap-8 md:gap-12 items-center min-h-[50vh]  mt-[140px] text-center">
      <Image width={750} height={250} className="w-[90%] max-w-[512px]" src="/music.svg" alt="" />
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  text-white">
          Discover <span className="text-secondary">Music</span>{' '}
          <span className="text-primary">NFTs</span>
        </h1>
        <p className="text-gray-200 md:text-lg mt-5  animate-pulse">
          Enjoy Music like never before
        </p>
      </div>
      <div className="flex gap-4 justify-center items-stretch w-[90%]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className=" bg-primary_dark px-5 text-secondary basis-[450px] shrink min-w-0  placeholder:text-primary"
          placeholder="Find your desired Music NFTs"
        />
        <Link
          href={{ pathname: '/marketplace', query: { query } }}
          className={
            'btn-prim w-12 h-12 md:w-14 md:h-14 grid place-items-center basis-[3.5rem] shrink-0'
          }
        >
          <BiSearch className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
};

export default Hero;
