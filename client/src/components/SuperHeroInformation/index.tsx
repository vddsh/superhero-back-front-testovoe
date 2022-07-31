import React from 'react';
import SuperHeroTextInfo from '../SuperHeroTextInfo';
import {SuperHeroInformationProps} from '../../model/model';

const SuperHeroInformation: React.FC<SuperHeroInformationProps> = ({superHero}) => {

  return (
    <div
      className=''>
      <div className='p-10'>
        <SuperHeroTextInfo data={superHero.nickname} label={'Nick Name'}/>
        <SuperHeroTextInfo data={superHero.real_name} label={'Real Name'}/>
        <SuperHeroTextInfo data={superHero.origin_description}
          label={'Description'}/>
        <SuperHeroTextInfo data={superHero.superpowers} label={'Super powers'}/>
        <SuperHeroTextInfo data={superHero.catch_phrase} label={'Catch' +
          ' Phrase'}/>
      </div>
      <div className='flex px-10'>
        <div className='flex w-full h-[250px]'>
          {superHero.Images.map(image => <img className='mx-5 h-[200px] w-[300px]'
          key={image._id} alt=''
          src={image.path}/>)}
        </div>
      </div>
    </div>
  );
};

export default SuperHeroInformation;
