interface LabelProps {
    label: string;
  }
  
  const Label = ({ label }: LabelProps) => {
    return (
      <div className="w-3/4 mx-auto flex items-center gap-4 mb-2">
        <div className="w-4 h-10 bg-pink-900 rounded-sm"></div>
        <span className="font-poppins text-pink-900 text-sm font-medium">{label}</span>
      </div>
    );
  };
  
  export default Label;