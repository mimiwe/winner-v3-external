import React from 'react';
import JackpotImage from '../../images/jackpot.png';

export default function Jackpot() {
  return (
    <div
      style={{
        width: '313px',
        height: '133px',
      }}
      className='mb-5px relative'
    >
      <img
        style={{ minWidth: '349px', height: '202px' }}
        src={JackpotImage}
        alt='jackpot'
        className='absolute -top-40px -left-18px'
      />
      <div
        style={{ width: '239px', height: '44px' }}
        className='absolute top-54px left-37px flex items-center justify-center rounded-10px'
      >
        <p
          style={{ lineHeight: '18px', color: '#fff568' }}
          className='text-2xl font-spoqaBold tracking-normal'
        >
          1,234,567,890
        </p>
      </div>
      {/* // TODO: add the number inside the image */}
    </div>
  );
}
