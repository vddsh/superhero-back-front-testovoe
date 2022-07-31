import React from 'react';
import {SuperHeroInfoEditProps} from '../../model/model';
import ImagesContainer from '../ImagesContainer/ImagesContainer';
import {Carousel} from 'react-responsive-carousel';
import Button from '../Button';


const SuperHeroInfoEdit: React.FC<SuperHeroInfoEditProps> = ({
  superHero,
  handleSubmitUpdate,
  handleDeleteSuperHero,
  handleDeleteSuperHeroImage,
  handleChangeEdit
}) => {


  return (
    <>
      <form onSubmit={handleSubmitUpdate} encType='multipart/form-data' className='h-full w-full flex flex-col'>
        <div className='flex flex-col h-[50%] w-full'>
          <input className='text-left w-full text-1xl py-4' name='nickname' placeholder={superHero.nickname}/>
          <input className='text-left w-full text-1xl py-4' name='real_name' placeholder={superHero.real_name}/>
          <input className='text-left w-full text-1xl py-4' name='origin_description' placeholder={superHero.origin_description}/>
          <input className='text-left w-full text-1xl py-4' name='superpowers' placeholder={superHero.superpowers}/>
          <input className='text-left w-full text-1xl py-4' name='catch_phrase' placeholder={superHero.catch_phrase}/>
          <div className='flex justify-center mt-10'>
            <label className='block'>
              <span className='sr-only'>Choose Images</span>
              <input name='image' multiple={true} type='file'
                     className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'/>
            </label>
          </div>
        </div>
        <ImagesContainer>
          <Carousel showThumbs={false} showArrows={true}>
            {superHero.Images.map(image =>
              <div key={image._id} className='h-[200px]'>
                <div onClick={() => handleDeleteSuperHeroImage(superHero._id, image.filename)}
                     className='absolute top-[50%] left-[50%] p-2 text-white/50 border text-2xl transform translate-x-[-50%] translate-y-[-50%] cursor-pointer hover:bg-white/30'>Delete
                  Image
                </div>
                <img alt='' className='w-full h-full object-contain'
                     src={image.path || ''}/>
              </div>)}
          </Carousel>
        </ImagesContainer>
        <div className='flex w-full items-center justify-center'>
          <Button text={'Submit'} btnColour={'blue'} type={'submit'}/>
          <Button text={'Delete Hero'} btnColour={'blue'} type={'button'} onClick={() => handleDeleteSuperHero(superHero._id)}/>
          <Button text={'Cancel'} btnColour={'blue'} type={'button'} onClick={handleChangeEdit}/>
        </div>
      </form>
    </>
  );
};

export default SuperHeroInfoEdit;
