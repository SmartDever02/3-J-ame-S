const FormContainer = ({ children }: any) => {
  return (
    <div className='p-4 bg-darker w-full lg:w-[35%] md:min-w-[300px] rounded-3xl'>
      {children}
    </div>
  );
};

export default FormContainer;
