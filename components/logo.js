import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='lg:text-5xl text-2xl bg-gradient-to-r from-cyan-500 to-gray-50 text-transparent bg-clip-text'>
      <Link href='/'>PortFolio</Link>
    </div>
  );
};

export default Logo;
