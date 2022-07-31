import React from 'react';

interface  ContainerProp {
  children: React.ReactNode
}

const Container: React.FC<ContainerProp> = ({children}) => {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center w-[70%] h-[70%] bg-gray-100 rounded-xl shadow-xl'>
      {children}
    </div>
  );
};

export default Container;
