"use client";

interface TitleProps {
  title: string;
  variant: string;
  
}

const Title = ({ title, variant}: TitleProps) => {
  const variantSwitch = (variant: string) => {
    switch (variant) {
      case "large":
        return "text-5xl  font-medium tracking-wider";

      default:
        return "text-4xl font-medium";
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
