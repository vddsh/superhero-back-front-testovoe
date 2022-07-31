import React from 'react';
import {SuperHeroInfoEditProps} from '../../model/model';


const SuperHeroInfoEdit: React.FC<SuperHeroInfoEditProps> = ({
  superHero,
  handleSubmitUpdate,
  handleDeleteSuperHero,
  handleDeleteSuperHeroImage
}) => {


  return (
    <div
      className='w-full p-16 flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmitUpdate} encType='multipart/form-data' className='p-10 flex flex-col w-[500px]'>
        <input className='text-2xl bg-gray-100 border my-2' name='nickname' placeholder={superHero.nickname}/>
        <input className='text-2xl bg-gray-100 border my-2' name='real_name' placeholder={superHero.real_name}/>
        <input className='text-2xl bg-gray-100 border my-2' name='origin_description' placeholder={superHero.origin_description}/>
        <input className='text-2xl bg-gray-100 border my-2' name='superpowers' placeholder={superHero.superpowers}/>
        <input className='text-2xl bg-gray-100 border my-2' name='catch_phrase' placeholder={superHero.catch_phrase}/>
        <input name='image' type='file' multiple={true} className=''/>
        <div className='flex'>
          <button type='submit'>Submit</button>
          <button type='button' onClick={() => handleDeleteSuperHero(superHero._id)}>DELETE</button>
        </div>
      </form>
      <div className='flex mt-20'>
        <div className='flex w-full h-[250px]'>{superHero.Images.map(image =>
          <img onClick={() => handleDeleteSuperHeroImage(superHero._id, image.filename)} className='mx-5 h-[200px] w-[300px]'
               key={image._id} alt=''
               src={image.path}/>)}</div>
      </div>
    </div>
  );
};

export default SuperHeroInfoEdit;
