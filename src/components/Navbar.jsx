import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { menu, close } from '../assets';
import NavLinks from './shared/NavLinks';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const [isBackgroundSet, setBackground] = useState(false);

  const handleActive = (value) => {
    setActive(value);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 80) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all ease-linear ${
        isBackgroundSet ? 'bg-primary' : ''
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to={'/'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' width={'25px'} />
          <h1>
            MASTER <span className='text-[#009FD2]'>CODE&#60;&#47;&#62;</span>
          </h1>
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
