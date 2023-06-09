import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { services } from '../constants';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { TopTextSection } from './shared';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full  p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='blue-gradient-card  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <TopTextSection title={'Overview.'} subtitle={'Introduction'} />

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Graduated with honors of Industrial Engineering and with more than 2 years of experience in the continuous
        learning of web development. Enthusiastic and passionate about innovation and creativity. I specialize mainly in
        Frontend development with technologies such as: React and Angular, although I also have knowledge of Backend
        with Node.js, Express and MongoDB.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
