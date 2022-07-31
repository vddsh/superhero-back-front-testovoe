import React from 'react';

interface ContainerProp {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProp> = ({children}) => {
  return (
    <div className='my-2 h-[800px] w-[600px] flex flex-col items-center p-10 bg-white rounded-lg border shadow-md'>
      <div className='flex flex-col h-full w-full'>
          {children}
      </div>
    </div>
  );
};

export default Container;
