import Image from 'next/image';
import React from 'react';
import { BiMusic } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CiBitcoin } from 'react-icons/ci';
import { LuMusic2 } from 'react-icons/lu';
import { TbCurrencyBitcoin } from 'react-icons/tb';

const About = () => {
  return (
    <>
      <section id="about" className="w-screen  bg-primary_dark py-16">
        <section className="flex ">
          <section className="container  flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="flex-1">
              <h1 className="text-white text-3xl md:text-4xl font-bold flex gap-3 ">
                About{' '}
                <Image className="w-[150px]" width={150} height={70} src="/logo.svg" alt="logo" />
              </h1>
              <p className="text-justify pt-4 text-[#ffffffc0] leading-7">
                Imagine a place where music is not just heard but seen and owned in a form as unique
                as a fingerprint. MelodyChain is that place—a digital gallery where musicians and
                fans converge to create, trade, and collect exclusive Music NFTs. <br></br> As you
                navigate through our sleek, user-friendly website, you&apos;ll encounter a diverse
                collection of Music NFTs, each with its own story and soul. From the pulsating beats
                of electronic dance music to the soothing strums of acoustic guitars, our catalog is
                a testament to the boundless creativity of artists worldwide.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-4  TEXT-CENTER">
              <div className="flex gap-4 flex-1  h-32">
                <div className="md:h-auto h-32 bg-secondary flex-1 flex flex-col justify-center items-center text-primary">
                  <span className="text-4xl">20k+</span>
                  <span>
                    <BiMusic className="inline" /> Music NFTs
                  </span>
                </div>
                <div className="md:h-auto h-32 bg-primary flex-1 flex flex-col justify-center items-center text-secondary">
                  <span className="text-4xl">150+</span>
                  <span>
                    <BsPeople className="inline mr-1" />
                    Authors
                  </span>
                </div>
              </div>
              <div className="md:h-auto h-32 text-terenary md:flex-1 flex flex-col justify-center items-center bg-secondary_light">
                <span className="text-4xl">250k+</span>
                <span>
                  <TbCurrencyBitcoin className="inline mr-1" />
                  Transactions
                </span>
              </div>
            </div>
          </section>
        </section>
        <div className="text-transparent h-[1px] w-3/4 bg-white opacity-30 mx-auto my-12">d</div>
        <section className="container text-left">
          <h2 className="text-3xl md:text-4xl text-white">
            <LuMusic2 className="text-primary inline mr-1" /> Music{' '}
            <span className="text-terenary">&</span> <span className="text-secondary">NFT</span>
          </h2>
          <p className="text-justify pt-4 text-[#ffffffc0] leading-7">
            Imagine owning a one-of-a-kind digital record of your favorite song, not just a copy on
            your phone. That&apos;s the idea behind NFTs, or non-fungible tokens, and they&apos;re
            shaking things up in the music world.{' '}
            <span className="text-white" title="What is NFT">
              <span className="text-secondary">NFTs</span> are basically certificates of ownership
              for digital items, stored securely using blockchain technology. This means musicians
              can sell unique digital copies of their music, album art, or even concert tickets as
              NFTs.
            </span>{' '}
            For fans, this can be more than just owning a song. NFT ownership can come with special
            perks, like exclusive content or access to online communities. It&apos;s a new way to
            directly support artists and even potentially own a piece of something valuable.
            Musicians benefit too. NFTs allow them to connect with fans more directly, cut out
            middlemen like record labels, and potentially earn more money. They can also create new
            revenue streams by offering limited edition digital extras or VIP experiences as NFTs.
            It&apos;s not all sunshine and rainbows though. The NFT market can be confusing,
            especially for those not familiar with cryptocurrency. There are also concerns about the
            environmental impact of the technology behind NFTs. However, NFTs offer a glimpse into a
            future where artists have more control over their work and fans have a deeper connection
            with the music they love. It will be interesting to see how this technology continues to
            develop and change the way we experience music.
          </p>
        </section>
      </section>
      <section className="w-screen bg-primary_darkest circuit">
        <section className="py-16 flex flex-col gap-8 md:flex-row mx-auto  md:justify-between container items-center">
          <h2 className="text-3xl text-center md:text-left md:text-4xl text-white">
            {/* <LuMusic2 className="text-primary inline mr-1" /> Music{' '} */}
            Supported <br></br>
            <span className="text-secondary">Cryptos</span>
          </h2>
          <section className="flex gap-4 sm:gap-12    text-[#ffffffcb] sm:text-xl font-Lexend">
            <div className="flex flex-col items-center gap-2">
              <img className="w-24" src="/cryptos/bitcoin.png" alt="" />
              <p>Bitcoin</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img className="w-24" src="/cryptos/ethereum.png" alt="" />
              <p>Etherium</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img className="w-24" src="/cryptos/dogecoin.png" alt="" />
              <p>Doge Coin</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
