import React from "react";
interface Props {
  text: string;
  classNames: string;
}
export default function Button(props: Props) {
  return (
    <>
      <p
        className={
          "hover:-translate-y-2 transition-all ease-linear cursor-pointer duration-300 " +
          props.classNames
        }
      >
        {props.text}
      </p>
    </>
  );
}
