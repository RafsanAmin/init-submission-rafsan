'use client';
import TopAuthors from '@/Components/Home/TopAuthors';
import Search from '@/Components/Marketplace/search';
import NFTCard from '@/Components/NFTCard';
import SearchBar from '@/Components/SearchBar';
import { searchTracks } from '@/db/tracks';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Page = () => {
  const [query, setQuery] = useState<{ query: string; min: number; max: number }>({
    query: '',
    min: 0,
    max: 1500000,
  });
  const params = useSearchParams();
  const indexes = searchTracks({
    name: params.get('query') || '',
    min: Number(params.get('min')) || -5,
    max: Number(params.get('max')) || 50000000,
  });
  return (
    <section className="w-screen wazy">
      <section className="container  mt-[140px] mb-16 text-center mx-auto ">
        <Search query={query} setQuery={setQuery} />
        <h2 className="text-2xl text-white text-left">
          <span className="text-terenary">Search</span> Results for{' '}
          <span className="text-white opacity-50">{params.get('query') || 'all'}</span>
        </h2>
        <section className="mt-8 flex flex-wrap justify-center grid-fluid-fill-[290px] sm:grid-fluid-fill-[350px] gap-5">
          {indexes.map((s, index) => (
            <NFTCard index={s} key={index} />
          ))}
        </section>
        <TopAuthors />
      </section>
    </section>
  );
};

export default Page;
