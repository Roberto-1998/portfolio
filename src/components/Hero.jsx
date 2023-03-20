import { styles } from '../styles';
import { ReactCanvas } from './canvas';
import { HeroItem } from './shared';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#009FD2]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient ' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} machine-animation`}>
            Hi, I'm <span>Roberto</span>{' '}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Industrial Engineer and <br className='sm:hidden block ' /> Full Stack Junior Developer.
          </p>
        </div>
      </div>

      <ReactCanvas />

      <HeroItem />
    </section>
  );
};

export default Hero;
