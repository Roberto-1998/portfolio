import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { menu, close } from '../assets';
import NavLinks from './shared/NavLinks';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleActive = (value) => {
    setActive(value);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to={'/'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          ROBECODE
        </Link>
        <NavLinks active={active} handleActive={handleActive} handleToggle={handleToggle} />

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[20px] h-[20px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <NavLinks active={active} handleActive={handleActive} isSmart handleToggle={handleToggle} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
