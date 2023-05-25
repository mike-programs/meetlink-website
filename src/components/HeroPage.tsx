import React from "react";
import Button from "./Button";
import { images } from "./Arrays";

export default function HeroPage() {
  return (
    <>
      {/* use clip art for the background wave*/}
      <div className="bg-lightBlue">
        <div className="flex justify-between gap-10 flex-col-reverse md:flex-row mx-5 md:mx-20 pt-10 ">
          <div className="md:w-[80%] w-[100%] md:mt-24">
            <h1 className="text-primaryColor font-bold text-[1.5rem] md:text-[3rem] pt-6 ">
              MeetLink
            </h1>
            <p className="md:text-[20px] text-[16px] mb-10 text-primaryColor/80 ">Seamless Scheduling, Secure Entry</p>
            <p className="text-text text-2xl">
            You have hit the jackpot! Create an exceptional workplace experience that prioritizes the security, and compliance objectives of your company, while still warmly welcoming visitors.
            </p>
            <Button
              classNames="inline-block text-md text-white bg-buttonColor/90 hover:bg-buttonColor transition-all ease-linear cursor-pointer w-38 px-3 py-3 rounded-full my-6"
              text="Demo MeetLink"
            />
          </div>
          <div className="md:w-2/3">
            <img src="images/hero.png" alt="hero" className="w-[100%] mb-0 md:mb-60" />
          </div>
        </div>
      </div>
    </>
  );
}
