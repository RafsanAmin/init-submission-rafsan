'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { PiMagicWand } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const Router = useRouter();
  return (
    <nav className="py-6 w-screen  fixed top-0 mx-auto  bg-primary_darkest z-40">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image className="w-[100px]" width={100} height={70} src="/logo.svg" alt="logo" />
        </Link>
        <div>
          <button
            onClick={() => setShowOptions(!showOptions)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center z-50 p-2 w-10 h-10 justify-center text-sm text-secondary rounded-lg lg:hidden hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {showOptions ? (
              <RxCross2 className={'w-6 h-6'} />
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <ul
            className={
              'flex flex-col pt-0 lg:pt-0 lg:flex-row z-40 text-[#ffffffc7]  Inter lg:gap-x-16 gap-y-1  items-center font-light bg-primary_darkest lg:bg-transparent h-screen w-screen lg:h-auto lg:w-auto fixed top-[88px] left-0 lg:relative lg:top-0 transition ' +
              (showOptions
                ? 'translate-x-0  lg:p-0'
                : '-translate-x-[150vw] lg:translate-x-0 pointer-events-none lg:pointer-events-auto')
            }
          >
            <li className="hover:text-secondary_light l:w-auto w-full text-center bg-primary_dark py-3  -ml-1  lg:bg-transparent ">
              <Link onClick={() => setShowOptions(false)} href="/">
                Home
              </Link>
            </li>
            <li className="hover:text-secondary_light  l:w-auto w-full text-center bg-primary_dark  py-3  -ml-1 lg:bg-transparent">
              <Link onClick={() => setShowOptions(false)} href="/#about">
                About
              </Link>
            </li>
            <li className="hover:text-secondary_light   l:w-auto w-full text-center bg-primary_dark  py-3  -ml-1 lg:bg-transparent">
              <a
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => {
                  setShowOptions(false);
                  Router.push(`/nft/${Math.floor(Math.random() * 17)}`);
                }}
              >
                <PiMagicWand className="inline" />
                Magic
              </a>
            </li>
            <li className=" bg-secondary justify-center hover:bg-terenary px-8 py-3 lg:py-2 text-primary_dark -ml-1   font-medium  l:w-auto w-full text-center">
              <Link
                className="flex gap-2 items-center justify-center"
                onClick={() => setShowOptions(false)}
                href="/marketplace"
              >
                <MdOutlineTravelExplore />
                Explore
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
