import React from 'react';
import SearchBar from '../SearchBar';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';

const Search = ({
  query,
  setQuery,
}: {
  query: { query: string; min: number; max: number };
  setQuery: React.SetStateAction<any>;
}) => {
  return (
    <section className="flex flex-col gap-5 mb-8">
      {' '}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-white">
          Search <span className="text-secondary">Music</span>{' '}
          <span className="text-primary">NFTs</span>
        </h1>
      </div>
      <div className="flex gap-4 justify-center items-stretch w-full flex-col md:flex-row mx-auto">
        <input
          value={query.query}
          onChange={(e) => setQuery((s: any) => ({ ...s, query: e.target.value }))}
          type="test"
          className=" bg-primary_dark px-5  py-4 text-secondary flex-1 shrink min-w-0  placeholder:text-primary"
          placeholder="Search by Name or Author"
        />
        <div className="flex gap-4 grow-0 md:max-w-[280px] xl:max-w-[350px] md:basis-[250px]">
          <input
            value={query.min}
            onChange={(e) => setQuery((s: any) => ({ ...s, min: e.target.value }))}
            type="number"
            className=" bg-primary_dark px-5 py-4 text-secondary flex-1 shrink min-w-0  placeholder:text-primary"
            placeholder="Min"
          />
          <input
            value={query.max}
            onChange={(e) => setQuery((s: any) => ({ ...s, max: e.target.value }))}
            type="number"
            className=" bg-primary_dark px-5 py-4 text-secondary flex-1 shrink min-w-0  placeholder:text-primary"
            placeholder="Max"
          />
        </div>
        <Link
          href={{ pathname: '/marketplace', query }}
          className={
            'btn-prim w-full h-12 md:w-14 md:h-14 grid place-items-center basis-[3.5rem] shrink-0'
          }
        >
          <BiSearch className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
};

export default Search;
