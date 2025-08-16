import {ChevronRightIcon} from "../Icons/index"

const SideBar = () =>{
    return (
        <aside>
            <ul className="w-7/4 py-10 space-y-5 h-120">
                <li className="flex justify-between items-center space-between cursor-pointer select-none" >Woman's Fashion <ChevronRightIcon className="stroke-3 w-4 h-4 "/></li>
                <li className="flex  justify-between items-center cursor-pointer select-none">Men's Fashion <ChevronRightIcon className="stroke-3 w-4 h-4"/></li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
            
        </aside>
    )
}

export default SideBar;