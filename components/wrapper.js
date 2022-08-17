import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <section className='p-10 bg-[#101625] text-gray-50 pt-20 min-h-[100vh] scroll-smooth snap-mandatory snap-y'>
      {children}
    </section>
  );
};

export default Wrapper;
