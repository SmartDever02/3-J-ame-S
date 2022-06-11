const Button = (props: PropsType) => {
  return (
    <button
      className={`hover:text-white text-lg font-bold p-[12px] transition-colors duration-200 ${
        props?.adClass
      } ${props.type === 'success' ? 'bg-[#70b944] hover:bg-[#7bb956]' : ''}`}
      type={props.submit ? 'submit' : 'button'}
    >
      {props.children || 'Bunny Button'}
    </button>
  );
};

interface PropsType {
  children?: any;
  adClass?: string;
  submit?: boolean;
  type?: string;
}

export default Button;
