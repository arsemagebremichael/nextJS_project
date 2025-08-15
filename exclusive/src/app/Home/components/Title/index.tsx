interface TitleProps {
    title: string;
  }
  
  const Title = ({ title }: TitleProps) => {
    return <h2 className="text-3xl font-poppins">{title}</h2>;
  };
  
  export default Title;