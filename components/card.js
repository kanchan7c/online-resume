import Image from 'next/image';
import React from 'react';
import Button from './button';

const Card = ({
  cardNumber,
  code,
  demo,
  tech,
  snapshot,
  description,
  title,
}) => {
  return (
    <div className='flex justify-between p-2 md:p-5 mb-10 align-middle'>
      <div className='numbers w-[20%] text-2xl md:text-6xl lg:text-[10rem] '>
        {cardNumber}
      </div>
      <div className='w-[80%]'>
        <div className='overflow-scroll'>
          <Image
            src={snapshot}
            alt={title}
            height={'10vh'}
            width={'20vw'}
            layout='responsive'
            className='overflow-scroll'
          />
        </div>
        <div className='md:text-2xl mt-2'>{title}</div>

        <div className='mt-2 text-xs sm:text-sm'>{description}</div>
        <div className='flex gap-5 mt-5'>
          {tech.map((item) => (
            <Image
              key={item}
              src={item}
              alt={title}
              objectFit='contain'
              height={'30rem'}
              width={'30rem'}
              className='rounded-full'
            />
          ))}
        </div>
        <div className='flex gap-1 lg:gap-5 mt-5'>
          <Button url={demo} target='_blank'>
            View Demo
          </Button>
          <Button url={code} target='_blank'>
            Github Repo
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Card;