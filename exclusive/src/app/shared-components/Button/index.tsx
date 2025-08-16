"use client";

interface ButtonProps{
    butttonText: string, 
    variant: string,
    onClickHandler: () => void;
}


const Button = ({butttonText, variant, onClickHandler}: ButtonProps) =>{
    const variantSwitch = (variant: string)=>{
        switch(variant){
            case "primary":
                return "bg-red-500 text-white px-6 py-2 rounded-lg mb-8 hover:bg-red-600 transition"
            case "secondary":
                return "mt-4 px-8 py-3 bg-green-500 hover:bg-green-600 rounded-md font-semibold transition-colors duration-300 w-max" 
            
            default:
                return "bg-red-500 text-white px-6 py-2 rounded-lg mb-8 hover:bg-red-600 transition"
            }
    }
    const variantClass = variantSwitch(variant);
    return(
        
        <button className={`${variantClass} cursor-pointer`}>
            {butttonText}
        </button>
    )
}

export default Button;