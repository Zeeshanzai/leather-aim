import React from 'react';
import SearchBar from '../../components/SearchBar';

const backImage = "url('/src/assets/images/cover.jpg')";

const Hero = () => {
  return (
    <>
      <section className="bg-cover bg-center" style={{ backgroundImage: backImage }}>
        <div className="relative md:w-5/6 lg:w-2/3 max-w-7xl pt-8 md:pt-16 pb-8 px-8 mx-auto">
          <div className='flex flex-col-reverse gap-5 md:gap-0 md:flex-row justify-between items-end md:items-start md:pt-8'>
            <div className="md:w-2/3 md:max-w-3xl">
              <h1 className="text-5xl text-center md:text-left text-primary font-bold">PORTLAND-LEATHER</h1>
              <p className="text-xl font-semibold text-center md:text-left text-zinc-800 my-7">
                A high-quality genuine leather jacket is a must in everyone's wardrobe. You can find real leather jackets for men and women at PortLand at very affordable prices.

                Our collection of jackets for men consists of a variety of styles from sleek leather blazers, fringed cowboy jackets, motorcycle (biker jackets) to bomber jackets.
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center mt-10'>
            <SearchBar />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
