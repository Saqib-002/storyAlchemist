import React from "react";
interface Props {
  style:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "quinary"
    | "senary"
    | "septenary"
    | "ocotonary"
    | "nonary"
    | "fo"
    | "ft";
  otherClasses?: string;
  type?: "submit" | "reset" | "button" | undefined;
  title: string;
}
const Button = ({ style, type, otherClasses, title }: Props) => {
  return (
    <>
      <button className={`btn ${"btn-" + style} ${otherClasses}`} type={type}>
        {title}
      </button>
    </>
  );
};

export default Button;
