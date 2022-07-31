import React from 'react';
import {ImagesContainerProps} from '../../model/model';

const ImagesContainer: React.FC<ImagesContainerProps> = ({children}) => {
  return (
    <div className='flex flex-col h-[50%] w-full py-14'>
      <div className='h-[200px] w-full'>
        {children}
      </div>
    </div>
  );
};

export default ImagesContainer;
