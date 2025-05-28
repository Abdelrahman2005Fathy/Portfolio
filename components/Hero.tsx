import Image from 'next/image';

import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className=" pt-[200px] ">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex flex-col justify-center relative my-20 z-10  sm:flex-col md:flex-col lg:flex-row sm:ml-[500px] sm:mt-[100] lg:ml-0">
          <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <section className=''>
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-100 ml-[-600px] mt-[-0px] mb-[20px]">
                Crafting Interactive Web Magic with Modern Frontend Tools
              </p>
              <TextGenerateEffect
                words="Transforming Designs into Dynamic Web Experiences"
                className="text-center text-[40px] sm:text-4xl md:text-5xl lg:text-6xl"
              />

              <p className="text-start ml-[-550px] md:tracking-wider mb-4 text-sm sm:text-base md:text-lg lg:text-2xl">
                Hi! I&apos;m <span className="text-violet-500">Ahmed Fathi</span>,
                <br /> A Passionate Frontend Web Developer .
              </p>
              <div className="flex gap-4 ml-[-835px]">
                {/* <a href="/abdelrahmanFathiResume.png" target="_blank">
                  <MagicButton
                    title="Download CV"
                    icon={<FaArrowDown />}
                    position="right"
                  />
                </a> */}
              </div>
           </section>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 mr-[400px]">
        <Image
          src="/personal_image.svg"
          alt="Personal Image"
          width={480}
          height={480}
          className="border-4 object-cover border-violet-700 rounded-[50%] absolute z-10 lg:mt-[-350px] lg:ml-[800px] sm:ml-[10px] sm:mt-[-930px] sm:w-[200px] lg:w-[350px] h-[350px]"
        />
      </div>
    </div>
  );
};

export default Hero;
