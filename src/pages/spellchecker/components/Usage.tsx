import { memo } from 'react';

const Usage = () => {
  const bunnyTexts = [
    '* Bunny Text About Usage...',
    '* Bunny Text About Usage...',
    '* Bunny Text About Usage...',
    '* Bunny Text About Usage...',
    '* Bunny Text About Usage...',
  ];
  return (
    <div className='w-full lg:w-[40%] min-h-[450px] md:min-h-[500px] bg-darker rounded-2xl p-[40px_30px] md:p-[50px_70px]'>
      <h1 className='pl-[20px] text-[30px]'>Usage</h1>
      <hr className='border-dark mt-4 border-2' />
      {bunnyTexts.map((one, index) => (
        <p
          key={'bunny' + index}
          className='first-of-type:mt-3 p-[12px_20px] text-[18px]'
        >
          {one}
        </p>
      ))}
      <p className='first-of-type:mt-3 p-[12px_20px] text-[18px]'>
        * Bunny Text About Usage...
      </p>
    </div>
  );
};

export default memo(Usage);
