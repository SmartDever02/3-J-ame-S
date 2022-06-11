import { memo, useState } from 'react';

import './CheckboxStyle.css';

const CheckBox = ({ index, onToggle }: PropsType) => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    onToggle(!toggle);
    setToggle(!toggle);
  };

  return (
    <span className='switcher switcher-1 block relative w-[160px] h-[50px] rounded-full margin-[20px_0px] uppercase text-white'>
      <input
        className='cursor-pointer appearance-none relative w-[140px] h-[50px] rounded-full bg-[#1e1e1e] outline-none'
        type='checkbox'
        id={'switcher-' + index}
        onClick={clickHandler}
      />
      <label
        htmlFor={'switcher-' + index}
        className='cursor-pointer h-[40px] top-[5px] w-[40%]'
      />
    </span>
  );
};

interface PropsType {
  index: number;
  onToggle: (param: any) => void;
}

export default memo(CheckBox);
