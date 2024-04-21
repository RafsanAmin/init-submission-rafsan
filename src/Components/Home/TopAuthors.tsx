import React from 'react';
import { BsPeople } from 'react-icons/bs';
import AuthorCard from '../AuthorCard';

const TopAuthors = () => {
  return (
    <section className="my-16 text-center container">
      {/* <div className="h-[0.125rem] mb-8 w-1/2 text-transparent mx-auto bg-primary_dark">s</div> */}
      <h2 className="text-4xl md:text-5xl text-white">
        <BsPeople className="text-primary inline mr-1" /> Top{' '}
        <span className="text-secondary">Authors</span>
      </h2>
      <section className="mt-8 flex flex-wrap justify-center grid-fluid-fit-[220px] gap-5">
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </section>
    </section>
  );
};

export default TopAuthors;
