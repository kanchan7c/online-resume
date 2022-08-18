import React from 'react';

const Button = ({ children, url, target }) => {
  return (
    <a
      href={url ? url : ''}
      target={target ? target : ''}
      className='w-fit bg-gradient-to-tr from-cyan-500 to-cyan-200 md:font-normal text-sm md:text-lg text-gray-900 rounded-md px-3 py-1 flex align-middle hover:scale-95 transition-transform border-2 border-gray-900'
    >
      {children}
    </a>
  );
};

export default Button;
