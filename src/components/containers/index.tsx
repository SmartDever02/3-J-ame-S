const Container = (props: PropType) => {
  return (
    <div
      className={`flex flex-col lg:flex-row justify-around gap-10 max-w-screen pt-10 overflow-x-hidden sm:px-[5%] md:px-[5%] ${props?.addClass}`}
    >
      {props.children}
    </div>
  );
};

interface PropType {
  children: any;
  addClass?: string;
}

export default Container;
