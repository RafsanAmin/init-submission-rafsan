import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary_dark w-screen mt-auto ">
      <div className="container py-12 flex flex-col gap-6 md:flex-row md:justify-between items-center">
        <Image className="w-[100px]" width={100} height={70} src="/logo.svg" alt="logo" />
        <div className="text-[#ffffff6b] flex gap-4 text-2xl ">
          <Link className="hover:text-[#ffffff98]" href="#">
            <FaFacebook />
          </Link>
          <Link className="hover:text-[#ffffff98]" href="#">
            <FaGithub />
          </Link>
          <Link className="hover:text-[#ffffff98]" href="#">
            <FaGlobe />
          </Link>
        </div>
        <div className="text-white">
          <span className="text-secondary"> Musi.nft</span> Ⓡ 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
