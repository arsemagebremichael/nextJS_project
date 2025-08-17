interface LabelProps {
    label: string;
  }
  
  const Label = ({ label }: LabelProps) => {
    return (
      <div className=" flex items-center gap-4 mb-2">
        <div className="w-5 h-10 bg-[var(--color-secondary)] rounded-xs"></div>
        <span className="font-poppins text-[var(--color-secondary)] font-semibold text-xl">{label}</span>
      </div>
    );
  };
  
  export default Label;