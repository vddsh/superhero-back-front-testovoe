import React from 'react';
import {superHeroProps} from '../../model/model';
import {Link} from 'react-router-dom';



const SuperHeroCard: React.FC<superHeroProps> = ({superHero}) => {
  const {nickname, Images, _id} = superHero;


  return (
    <Link to={`/superHero/${_id}`} className='flex justify-center m-5 cursor-pointer transition ease-in-out delay-250 hover:scale-110 hover:-translate-y-1'>
      <div className='rounded-lg shadow-lg bg-white max-w-sm'>
        <img className='rounded-t-lg h-96 w-96 object-cover'
             src={Images[0]?.path}
             alt=''/>
        <div className='p-6'>
          <h5 className='text-center text-gray-900 text-xl font-medium mb-2'>{nickname}</h5>
        </div>
      </div>
    </Link>
  );
};

export default SuperHeroCard;
