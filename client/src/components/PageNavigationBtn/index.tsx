import React from 'react';

interface PageNavigationProps {
  nextPage:(e: React.MouseEvent<HTMLElement>) => void
  prevPage:(e: React.MouseEvent<HTMLElement>) => void
}

const PageNavigationBtn: React.FC<PageNavigationProps> = ({nextPage, prevPage}) => {
  return (
    <div className='flex justify-center items-center py-5'>
      <button
        onClick={nextPage}
        type='button'
              className='mx-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800'>
        <svg aria-hidden='true' className='w-5 h-5 rotate-180'
             fill='currentColor'
             viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'></path>
        </svg>
        <span className='sr-only'>Icon description</span>
      </button>
      <button
        onClick={prevPage}
        type='button'
              className='mx-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800'>
        <svg aria-hidden='true' className='w-5 h-5' fill='currentColor'
             viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'></path>
        </svg>
        <span className='sr-only'>Icon description</span>
      </button>
    </div>
  );
};

export default PageNavigationBtn;
