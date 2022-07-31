import React from 'react';
import {HandleChangeEditProps} from '../../model/model';

const EditBtn: React.FC<HandleChangeEditProps> = ({handleChangeEdit}) => {
  return (
    <div className='w-full flex justify-center'>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded' onClick={handleChangeEdit}>Edit</button>
    </div>
  );
};

export default EditBtn;
