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
      <ul className='hidden sm:block'>
        {navLinks.map((item) => (
          <Link href={item?.link} key={item?.name}>
            <a className='mr-2 md:mr-5  hover:text-teal-200 font-light md:text-lg'>
              {item?.name}
            </a>
          </Link>
        ))}
      </ul>
      <MenuIcon
        className={show ? 'hidden' : 'block sm:hidden'}
        onClick={showMenu}
      />
      <div className='flex flex-col justify-center'>
        <HighlightOffIcon
          className={show ? 'block sm:hidden mb-4 ' : 'hidden'}
          onClick={hideMenu}
        />
        <ul className={show ? 'block flex flex-col justify-between' : 'hidden'}>
          {navLinks.map((item) => (
            <Link href={item?.link} key={item?.name}>
              <a className='mb-4 md:mr-5  hover:text-teal-200 font-light md:text-lg'>
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
