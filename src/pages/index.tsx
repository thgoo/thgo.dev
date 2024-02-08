import Image from 'next/image';
import AnimatedBackground from '@/components/AnimatedBackground/AnimatedBackground';
import glitchImage from '@/assets/images/eu-glitch.png';

const IndexPage = () => (
  <>
    <div className="relative flex min-h-dvh">
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-1 items-center justify-center text-pink-700">
        <AnimatedBackground />
      </div>
      <div className="relative z-20 flex min-h-dvh w-full flex-col lg:flex-row">
        <div className="flex items-center justify-center px-5 pb-2 pt-20">
          <Image
            src={glitchImage}
            alt="thiago pavan glitch"
            className="max-w-xs md:max-w-lg lg:max-w-md xl:max-w-xl 2xl:max-w-2xl"
          />
        </div>
        <div className="flex flex-col justify-center px-10 pt-12 md:px-16">
          <p className="text-center text-2xl font-semibold md:text-4xl md:leading-snug lg:text-5xl lg:leading-tight 2xl:text-7xl">
            Hi, I'm Thiago Pavan. <br />A Software Engineer <br />
            <span className="dark:text-pink-600">based in Brazil.</span>
          </p>
          <p className="mt-5 text-center text-xs md:text-base lg:text-left">
            From crafting algorithms to perfecting user experiences, writing
            code with creativity and commitment. If you need a software
            engineer, look no further —I'm your guy.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
