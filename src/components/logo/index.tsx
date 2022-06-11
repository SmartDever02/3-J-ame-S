// import logo
import spellCheckLogo from '../../assets/spellchecker.webp';

const Logo = () => {
  return (
    <div className='flex gap-[10px] md:gap-[20px] items-center text-[35px] md:text-[40px] font-bold uppercase text-white'>
      <img
        src={spellCheckLogo}
        alt='logo'
        width={120}
        height={120}
        draggable={false}
        className='w-[80px] h-[80px] md:w-[120px] md:h-[120px]'
      />
      <h1>Spell Checker</h1>
    </div>
  );
};

export default Logo;
