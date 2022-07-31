import React from 'react';

import {SuperHeroTextInfoProps} from '../../model/model';

const SuperHeroTextInfo: React.FC<SuperHeroTextInfoProps> = ({data, label}) => {
  return (
    <p className='text-left w-full text-1xl py-4'>
      <span
        className='font-bold'>{label}:
      </span> {data}</p>
  );
};

export default SuperHeroTextInfo;
