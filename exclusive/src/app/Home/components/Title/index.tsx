interface TitleProps {
    title: string;
  }
  
  const Title = ({ title }: TitleProps) => {
    return <h2 className="text-3xl w-3/4 mx-auto font-semibold font-poppins mb-6">{title}</h2>;
  };
  
  export default Title;