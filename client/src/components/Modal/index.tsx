import React from 'react';
import {ModalProps} from '../../model/model';

const Modal: React.FC<ModalProps> = ({modal, setModal, handleSubmitModalPost}) => {

  return (
    <div
      onClick={() => setModal(!modal)}
      className='w-full h-full fixed bg-gray-800/50 flex justify-center items-center'
    >
      <div className='p-4 rounded-md bg-white'
           onClick={(e) => e.stopPropagation()}>
        <form encType='multipart/form-data'
              className='flex flex-col w-[600px] h-[600px]'
              onSubmit={handleSubmitModalPost}>
          <input name='nickname'
                 className='rounded-md py-2 px-4 border my-4 mx-4'
                 placeholder='Nickname'/>
          <input name='real_name'
                 className='rounded-md py-2 px-4 border my-4 mx-4'
                 placeholder='Real Name'/>
          <input name='origin_description'
                 className='rounded-md py-2 px-4 border my-4 mx-4'
                 placeholder='Origin Description'/>
          <input name='superpowers'
                 className='rounded-md py-2 px-4 border my-4 mx-4'
                 placeholder='SuperPowers'/>
          <input name='catch_phrase'
                 className='rounded-md py-2 px-4 border my-4 mx-4'
                 placeholder='Catch Phrase'/>
          <input name='image'
                 multiple={true}
                 className='rounded-md py-2 px-4 border my-4 mx-4 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
                 type='file'/>
          <button type='submit'
                  className='py-2 px-4 border my-4 mx-4 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent rounded'>Create
            Hero
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;