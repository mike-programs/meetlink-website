import React, { useState } from "react";
import Button from "./Button";
import navItems from "./Arrays";

export default function Nav() {
  const [toggle, setToggle] = useState("translate-y-[120%]");
  const [isOpen, setOpen] = useState(true);
  const customBtn = `flex items-center text-white rounded-lg h-[80%] justify-center p-3 bg-buttonColor/90 hover:bg-buttonColor `;

  function toggleNav() {
    setToggle(() => (isOpen ? "translate-y-[0%]" : "translate-y-[120%]"));
    setOpen(!isOpen);
  }

  return (
    <>
      {/* NAVIGATION BAR */}

      <div className="flex justify-between items-center p-2 bg-lightBlue md:px-20 sticky top-0 z-10 lg:static">
        <div className="w-[20%] md:w-[8%]">
          <img src="./images/logo.svg" alt="proxy click logo" className="" />
        </div>
        {/* DESKTOP NAV ITEMS */}

        <div className="flex space-x-10">
          <div className="hidden lg:flex md:items-center">
            <ul className="flex items-center font-bold">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="p-4 cursor-pointer text-text hover:text-primaryColor  transition-all ease-linear"
                >
                  {item.link}
                </li>
              ))}
            </ul>
          </div>
          {/* CTA BUTTONS */}

          <div className="flex  items-center ">
            <div className="hidden md:flex md:gap-3 ">
              <Button classNames={`${customBtn}`} text="Book a demo" />
              <Button classNames={`${customBtn}`} text="Login" />
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <div className="flex py-7 lg:hidden" onClick={toggleNav}>
              <div className="self-center">
                <img
                  width="32"
                  height="32"
                  src={
                    isOpen
                      ? "https://img.icons8.com/windows/32/grip-lines.png"
                      : "images/close.png"
                  }
                  alt="grip-lines"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}

      <div
        className={
          "fixed inset-x-4 inset-y-28 bg-white z-30 lg:hidden transition ease-in duration-300 " +
          toggle
        }
      >
        <div className="text-primaryColor text-lg font-bold">
          <p className="p-5">Why MeetLink</p>
          <hr />
          <p className="px-5 p-2">Product</p>
          <p className="px-5 p-2">Solution</p>
          <p className="px-5 p-2">Pricing</p>
        </div>
      </div>
    </>
  );
}
