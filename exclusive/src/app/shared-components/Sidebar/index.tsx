import { HiOutlineChevronRight } from "react-icons/hi";

const SideBar = () => {
  return (
    <aside>
      <ul className="w-10/6 py-10 space-y-5 h-120 font-poppins cursor-pointer">
        <li className="flex justify-between items-center space-between  select-none">
          Woman&apos;s Fashion <HiOutlineChevronRight className="stroke-3 w-4 h-4" />
        </li>
        <li className="hover:gray-700 flex justify-between items-center cursor-pointer select-none">
          Men&apos;s Fashion <HiOutlineChevronRight className="stroke-3 w-4 h-4" />
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby&apos;s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </aside>
  );
};

export default SideBar;
