import { memo, useState } from 'react';

// import images
import backgroundImage from '../../../assets/spellchecker.png';
import Button from '../../../components/button/Button';
import CheckBox from '../../../components/button/Checkbox';
import { OptionType } from './interfaces';
import optionImage from './assets/setting.png';

const ModalHr = () => {
  return (
    <hr className='border-dark mt-4 first-of-type:mt-5 border-2 first-of-type:mb-5' />
  );
};

const Inline = ({ children }: any) => {
  return (
    <div className='flex items-center gap-8 p-[8px_4px] md:p-[14px_6px]'>
      {children}
    </div>
  );
};

const Label = ({ children }: any) => {
  return (
    <label className='w-[37%] flex justify-end flex-wrap text-right'>
      {children}
    </label>
  );
};

const OptionModal = ({ onClose, optionChange }: PropsType) => {
  const [option, setOption] = useState<OptionType>({
    instant: false,
    matchtop: false,
    badge: false,
  });

  const optionUp = () => {
    optionChange(option);
    onClose();
  };

  const options = ['INSTANT FILTERING', 'match top', 'view details'];

  const optionHandlers = [
    (instant: boolean) => {
      setOption({ ...option, instant: instant });
    },
    (matchtop: boolean) => {
      setOption({ ...option, matchtop: matchtop });
    },
    (badge: boolean) => {
      setOption({ ...option, badge: badge });
    },
  ];

  return (
    <>
      <div
        onClick={onClose}
        className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40'
      />
      <div className='absolute bg-darker w-[300px] md:w-[400px] h-[420px] md:h-[485px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl uppercase'>
        <div className='relative w-full h-full p-[30px_20px] md:p-[50px_40px]'>
          <div className='text-2xl pl-2 flex gap-2'>
            <img
              src={optionImage}
              alt='option'
              width={30}
              height={30}
              loading='lazy'
            />
            OPTIONS
          </div>
          <ModalHr />
          {options.map((one, index) => (
            <Inline key={one}>
              <Label>{one}</Label>
              <CheckBox index={index} onToggle={optionHandlers[index]} />
            </Inline>
          ))}
          <ModalHr />
          <div className='flex justify-center mt-6'>
            <div className='w-[40%]' onClick={optionUp}>
              <Button type='success' adClass='w-full rounded-full'>
                SET
              </Button>
            </div>
          </div>
          {window.innerWidth >= 768 && (
            <img
              className='hidden md:block absolute bottom-0 right-1 opacity-20 -z-10'
              src={backgroundImage}
              alt='modal background'
              width={200}
              height={200}
              draggable={false}
            />
          )}
        </div>
      </div>
    </>
  );
};

interface PropsType {
  onClose: () => void;
  optionChange: (option: OptionType) => void;
}

export default memo(OptionModal);
