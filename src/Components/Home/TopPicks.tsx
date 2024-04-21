import React from 'react';
import NFTCard from '../NFTCard';
import { VscGraph, VscGraphLine } from 'react-icons/vsc';
import { HiOutlineSparkles } from 'react-icons/hi';

const TopPicks = ({ latest }: { latest?: boolean }) => {
  return (
    <section className="mt-16 text-center container">
      {/* <div className="h-[0.125rem] mb-8 w-1/2 text-transparent mx-auto bg-primary_dark">s</div> */}
      <h2 className="text-4xl md:text-5xl text-white">
        {latest ? (
          <HiOutlineSparkles className="text-primary inline mr-2" />
        ) : (
          <VscGraphLine className="text-primary inline mr-2" />
        )}{' '}
        Top <span className="text-secondary">{latest ? 'Latest' : 'Trendings'}</span>
      </h2>
      <section className="mt-8 flex flex-wrap justify-center grid-fluid-fill-[290px] sm:grid-fluid-fill-[350px] gap-5">
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </section>
    </section>
  );
};

export default TopPicks;
