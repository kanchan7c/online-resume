import React from 'react';
import Logo from './logo';
import Navbar from './navbar';

const Header = () => {
  return (
    <div className='p-3 flex justify-between align-middle'>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
