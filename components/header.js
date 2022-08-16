import React from 'react';
import Logo from './logo';
import Navbar from './navbar';

const Header = () => {
  return (
    <div className='p-3 flex justify-between align-middle bg-[#101625] text-gray-100 fixed top-0 left-0 right-0 z-50 opacity-90'>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
