import React from 'react';
import { motion } from 'framer-motion';

const HeroItem = () => {
  return (
    <div className='absolute xs:bottom-10 bottom-3.5  w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.dev
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className='w-3 h-3 rounded-full bg-[#009FD2] mb-1'
          ></motion.dev>
        </div>
      </a>
    </div>
  );
};

export default HeroItem;
