import React from 'react';

const SectionTitle = ({ sectionName }) => {
  return (
    <h2 className='lg:text-4xl text-3xl text-center mb-6 w-[100%] border-2 rounded-lg py-5 border-cyan-200'>
      {sectionName}
    </h2>
  );
};

export default SectionTitle;
