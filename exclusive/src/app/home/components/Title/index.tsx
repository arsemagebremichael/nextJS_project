"use client";

interface TitleProps {
  title: string;
  variant: string;
  
}

const Title = ({ title, variant}: TitleProps) => {
  const variantSwitch = (variant: string) => {
    switch (variant) {
      case "large":
        return "text-4xl  font-medium tracking-wider";
      case "default font-medium":
      default:
        return "text-3xl";
    }
  };

  const variantClass = variantSwitch(variant);
  

  return (
    <h2 className={`${variantClass}  font-poppins mb-6`}>
      {title}
    </h2>
  );
};

export default Title;
