import React from 'react';

import {SuperHeroTextInfoProps} from '../../model/model';

const SuperHeroTextInfo: React.FC<SuperHeroTextInfoProps> = ({data, label}) => {
  return (
    <div className='flex justify-center py-5'>
      <div><p className='text-2xl'>{label}: {data}</p></div>
    </div>
  );
};

export default SuperHeroTextInfo;
