import { memo, useRef, useState } from 'react';
import Button from '../../../components/button/Button';

// import search Icon
import searchIcon from './assets/search.png';
import optionIcon from './assets/setting.png';
import sendIcon from './assets/send.png';

const SpellCheckForm = ({
  onChange,
  onSubmit,
  toggleModal,
  instantMode,
}: PropsType) => {
  const [word, setWord] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    word && onSubmit(word);
  };

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setWord(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  const keyHandler = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && instantMode) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <form
      ref={formRef}
      className='flex justify-between'
      onSubmit={submitHandler}
    >
      <div className='group relative w-full lg:w-[75%]'>
        <img
          src={searchIcon}
          alt='find'
          width={25}
          height={25}
          className='absolute top-1/2 left-4 -translate-y-1/2 w-[25px] h-[25px]'
          draggable={false}
          loading='lazy'
        />
        <input
          className='w-full lg:w-[90%] transition-all duration-200 p-[12px_64px_12px_55px] text-lg rounded-full bg-dark'
          value={word}
          placeholder='app, appl, bnc'
          onChange={changeHandler}
          onKeyDown={keyHandler}
        />
        <img
          src={optionIcon}
          alt='option'
          width={30}
          height={30}
          onClick={toggleModal}
          className='absolute cursor-pointer top-1/2 -translate-y-1/2 right-[65px] lg:right-[50px] transition-all duration-200 opacity-70 hover:opacity-90 hover:scale-[1.2]'
          draggable={false}
          loading='lazy'
        />
        <button className='lg:hidden'>
          <img
            className='absolute h-[30px] top-1/2 -translate-y-1/2 right-[20px] transition-all duration-200 hover:scale-[1.2]'
            src={sendIcon}
            alt='send'
            loading='lazy'
          />
        </button>
      </div>
      <Button
        submit
        adClass='rounded-[12px] lg:rounded-full p-[12px_0px] hidden lg:block lg:w-[30%]'
        type='success'
      >
        Submit
      </Button>
    </form>
  );
};

interface PropsType {
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
  toggleModal: () => void;
  instantMode: boolean;
}

export default memo(SpellCheckForm);
