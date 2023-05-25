import React from "react";
import Button from "./Button";
import navItems from "./Arrays";
import Logo from "../assests/images/logo.png";
export default function Nav() {
  const customBtn = `flex items-center text-white rounded-lg h-[80%] justify-center  p-3 bg-buttonColor/90 hover:bg-buttonColor transition-all ease-linear cursor-pointer`;
  return (
 
       <div className='flex justify-between p-2 bg-lightBlue md:px-20'>
                <div className=' w-[8%]'>
                    <img src='./images/logo.svg' alt='proxy click logo' className=""/>
                </div>

                <div className='flex  space-x-10'>
                    <div className='hidden lg:flex md:items-center'>
                        <ul className='flex items-center font-bold'>
                           {navItems.map((item, index)=> (
                            <li key={index} className="p-4 cursor-pointer text-text hover:text-primaryColor  transition-all ease-linear">
                                {item.link}
                            </li>
                           ))}
                        </ul>
                    </div>
                    <div className='flex  items-center '>
                        <div className='hidden md:flex md:gap-3 '>
                            <Button classNames={`${customBtn}`} text='Book a demo' />
                            <Button classNames={`${customBtn}`} text='Login' />
                        </div>
                        <div className='flex py-7 lg:hidden'>
                            <div className='self-center'><img width="32" height="32" src="https://img.icons8.com/windows/32/grip-lines.png" alt="grip-lines" /></div>
                        </div>
                    </div>
                </div>
            </div> 
  );
}

// color: 13138A, highlighted-button: 1D1DCD, card: 0A0A47
