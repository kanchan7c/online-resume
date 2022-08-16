import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <section className='p-10 bg-[#101625] text-gray-50 pt-20'>
      {children}
    </section>
  );
};

export default Wrapper;
