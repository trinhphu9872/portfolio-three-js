import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import CVTrinhNgocPhuPDF from '../../public/CV-TrinhNgocPhu.pdf'; // Import file PDF tại đây

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = (link) => {
    setActive(link.title);
    window.scrollTo(0, 0);
    if (link.id === 'download') handleDownloadClick();
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = CVTrinhNgocPhuPDF;
    link.setAttribute('download', 'CV-TrinhNgocPhu.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderNavLinks = () => {
    return navLinks.map((link) => (
      <li
        key={link.id}
        className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[15px] font-medium cursor-pointer`}
      >
        <a href={`#${link.id}`} onClick={() => handleNavLinkClick(link)}>
          {link.title}
        </a>
      </li>
    ));
  };

  const renderMobileMenu = () => {
    return (
      <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex sm:flex justify-end items-start flex-col gap-4'>
          {renderNavLinks()}
        </ul>
      </div>
    );
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => handleNavLinkClick({ title: '' })}>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Shin.<span className='sm:block hidden text-[#4070f4]'>Software Developer</span> </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {renderNavLinks()}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          {renderMobileMenu()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
