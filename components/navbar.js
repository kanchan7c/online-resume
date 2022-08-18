import Link from 'next/link';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkIcon from '@mui/icons-material/Work';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContactsIcon from '@mui/icons-material/Contacts';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Navbar = () => {
  const [show, setShow] = useState(false);

  function showMenu() {
    setShow(true);
  }

  function hideMenu() {
    setShow(false);
  }

  const navLinks = [
    { name: 'Home', link: '/', icon: <HomeIcon /> },
    { name: 'About', link: '/about', icon: <InfoIcon /> },
    { name: 'Projects', link: '/projects', icon: <BusinessCenterIcon /> },
    { name: 'Skills', link: '/skills', icon: <ListAltIcon /> },
    { name: 'Experience', link: '/experience', icon: <WorkIcon /> },
    { name: 'Contact', link: '/contact', icon: <ContactsIcon /> },
  ];
  return (
    <nav>
      <ul className='hidden md:block'>
        {navLinks.map((item) => (
          <Link href={item?.link} key={item?.name} className='flex'>
            <a className='mr-2 lg:mr-5  hover:text-teal-200 font-light lg:text-lg transition-colors'>
              <span className='mr-1 text-xs align-middle text-gray-500'>
                {item?.icon}
              </span>
              <span className='align-middle'>{item?.name}</span>
            </a>
          </Link>
        ))}
      </ul>
      {show ? (
        <HighlightOffIcon className='md:hidden' onClick={hideMenu} />
      ) : (
        <MenuIcon className='md:hidden' onClick={showMenu} />
      )}

      <div className='flex flex-col justify-center'>
        <ul
          className={
            show ? 'md:hidden flex flex-col justify-between' : 'hidden'
          }
        >
          {navLinks.map((item) => (
            <Link href={item?.link} key={item?.name}>
              <a className='mb-4 md:mr-5  hover:text-teal-200  transition-colors font-light md:text-lg'>
                {item?.icon}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
