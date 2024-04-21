import About from '@/Components/Home/About';
import Hero from '@/Components/Home/Hero';
import TopAuthors from '@/Components/Home/TopAuthors';
import TopPicks from '@/Components/Home/TopPicks';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex   flex-col items-center justify-between">
      <Hero />
      <TopPicks />
      <TopPicks latest />
      <TopAuthors />
      <About />
    </main>
  );
}
