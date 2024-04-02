import Link from "next/link";
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
    | "ft"
    | "link";
  otherClasses?: string;
  type?: "submit" | "reset" | "button" | undefined;
  title: string;
  href?: string;
}
const CustomButton = ({ style, type, otherClasses, title, href }: Props) => {
  return (
    <>
      {href ? (
        <Link className={`btn  ${"btn-" + style} ${otherClasses}`} href={href}>
          {title}
        </Link>
      ) : (
        <button
          className={`btn  ${"btn-" + style} ${otherClasses}`}
          type={type}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default CustomButton;
