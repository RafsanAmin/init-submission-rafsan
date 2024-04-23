import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      className=" bg-primary_dark px-5 text-secondary basis-[450px] shrink min-w-0  placeholder:text-primary"
      placeholder="Find your desired Music NFTs"
    />
  );
};

export default SearchBar;
