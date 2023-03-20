import React from 'react';
import { navLinks } from '../../constants';

const NavLinks = ({ active, handleActive, isSmart = false, handleToggle }) => {
  return (
    <ul
      className={
        isSmart ? 'list-none flex justify-end items-start flex-col gap-4 ' : 'list-none hidden sm:flex flex-row gap-10'
      }
    >
      {navLinks.map((link) => (
        <li
          onClick={() => {
            handleActive(link.title);
            handleToggle();
          }}
          key={link.id}
          className={`
           ${active === link.title ? 'text-[#009FD2]' : 'text-secondary'}
            ${
              isSmart
                ? 'font-poppins font-medium cursor-pointer text-[16px] '
                : 'hover:text-white text-[16px] font-medium cursor-pointer'
            }
        
        `}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
