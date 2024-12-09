// import Link from "next/link"
// import { IoSearch } from "react-icons/io5"

// // Header
// export const Header1 = () => {
//     return (
//         <div className='flex flex-col md:flex-row w-full   md:w-[1170px] mt-[30px] px-4 md:px-16 items-center max-w-screen-xl mx-auto  '>
//             <h2 className='font-bold mr-16  font-inter text-[#000000] text-center md:text-left  text-3xl md:text-[24px]  md:w-auto'>
//                 Hekto
//             </h2>
            
//             <ul className='flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between gap-4 md:gap-[48px] text-[#000000]'>
//                 <Link href={"/"} className='font-poppins text-[16px] text-[#FB2E86] font-bold text-center md:text-left w-[48px] h-[24px] '>
//                 <select name='' id='' className='  text-center mr-10 '>
//                 <option value=""> Home</option>
//             </select>
//                 </Link>
//                 <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[66px] h-[24px] '>Pages</Link>
//                 <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[48px] h-[24px] '>Product</Link>
//                 <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Blog</Link>
//                 <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Shop</Link>
//                 <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Contact</Link>

//             </ul>

//             <div className='flex gap-3 mt-4 md:mt-0'>
//                 <button className='flex items-center w-full ml-14 mr-11 md:w-[180px] h-[38px] rounded-[4px] pl-[20px] pt-[7px] pb-[7px] pr-[12px] gap-[7px] bg-white'>
//                     <input 
//                         type='text' 
//                         className='font-poppins text-[13px] font-normal w-[130px] h-[18px] opacity-[50%] border-2 border-red-500 text-[#000000]' />
//                     <IoSearch className='w-[20px] h-[16px]' />
//                 </button>
                
               
//             </div>
//         </div>
//     )
// }











"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { useState } from 'react';

function Navbar1() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className='border-b-2 bg-neutral-100'>
      <div className='w-full flex items-center justify-center bg-white h-[70px]'>
        {/* all content */}
        <div className='sm:w-full md:w-[80%]  flex items-center justify-between h-[50px]'>

          <div>
            {/* logo */}
            <h2 className="title-font font-extrabold text-blue-950 tracking-widest text-xl mb-3">
        Hekto
        </h2>
          </div>

          {/* links - animated sliding nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className='flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black '>
              <li className='p-4 hover:underline hover:text-pink-600 underline-offset-2'>
                <Link href="/">Home</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/pages">Pages</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/products">Products</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/blog">Blog</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/shop">Shop</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/contact">Contact</Link>
              </li>

            </ul>
          </div>

          <div className='flex gap-x-4 items-center'>
            {/* Search bar - hidden on small screens */}
            <div className='hidden lg:flex w-full bg-gray-200 rounded-md items-center '>
              <input
                className='w-full p-1  rounded-md bg-gray-200 outline-none'
                type="search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl ml-3 bg-pink-600 px-1 py-1 text-white"
              />
            </div>

            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Navbar1;