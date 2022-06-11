import Logo from '../logo';

// import backgroundImage
import backgroundImage from '../../assets/spellchecker.png';

const Header = () => {
  return (
    <header className='relative flex items-center bg-[#151519] h-40 md:h-60 px-[50px] lg:px-[100px] drop-shadow-2xl overflow-hidden'>
      <Logo />
      {window.innerWidth >= 768 && (
        <img
          src={backgroundImage}
          width={200}
          height={200}
          className='hidden md:block background-wiggle-image absolute -bottom-[30px] right-[5%]'
          alt='background'
          draggable={false}
          loading='lazy'
        />
      )}
    </header>
  );
};

export default Header;
