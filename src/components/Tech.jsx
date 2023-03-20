import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { TopTextSection } from './shared';

const Tech = () => {
  return (
    <>
      <TopTextSection title={'Technology Stack.'} subtitle={'What technologies do I specialize in'} />
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((tech) => (
          <div className='w-28 h-28 cursor-pointer' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech);
