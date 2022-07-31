import React from 'react';
import SuperHeroTextInfo from '../SuperHeroTextInfo';
import {SuperHeroInformationProps} from '../../model/model';
import ImagesContainer from '../ImagesContainer/ImagesContainer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import EditBtn from '../EditBtn';

const SuperHeroInformation: React.FC<SuperHeroInformationProps> = ({superHero, handleChangeEdit}) => {

  return (
    <div
      className='h-full w-full flex flex-col'>
      <div className='flex flex-col h-[50%] w-full'>
        <SuperHeroTextInfo data={superHero.nickname} label={'Nick Name'}/>
        <SuperHeroTextInfo data={superHero.real_name} label={'Real Name'}/>
        <SuperHeroTextInfo data={superHero.origin_description}
                           label={'Description'}/>
        <SuperHeroTextInfo data={superHero.superpowers} label={'Super powers'}/>
        <SuperHeroTextInfo data={superHero.catch_phrase} label={'Catch' +
          ' Phrase'}/>
      </div>
      <ImagesContainer>
        <Carousel showThumbs={false} showArrows={true}>
          {superHero.Images.map(image =>
            <div key={image._id} className='h-[200px]'>
              <img alt='' className='w-full h-full object-contain'
                   src={image.path || ''}/>
            </div>)}
        </Carousel>
      </ImagesContainer>
      <EditBtn handleChangeEdit={handleChangeEdit}/>
    </div>
  );
};

export default SuperHeroInformation;
