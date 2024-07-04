import Image from "next/image";
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
  imgUrl?: string;
  imgClasses?: string;
  imgLoc?: "before" | "after";
  onClick?: () => void;
  otherProps?: any;
}
const CustomButton = ({
  style,
  type,
  otherClasses,
  title,
  href,
  imgUrl,
  imgClasses,
  imgLoc,
  otherProps,
  onClick,
}: Props) => {
  return (
    <>
      {href ? (
        <Link className={`btn  ${"btn-" + style} ${otherClasses}`} href={href}>
          {title}
        </Link>
      ) : (
        <button
          {...otherProps}
          className={`btn no-focus group  ${"btn-" + style} ${otherClasses} ${imgUrl ? "flex items-center gap-2" : ""} ${imgLoc === "after" ? "flex-row-reverse" : ""}`}
          onClick={onClick}
          type={type}
        >
          {imgUrl && (
            <Image
              className={`group-hover:invert ${imgClasses}`}
              src={imgUrl}
              alt="img"
              width={16}
              height={16}
            />
          )}
          {title}
        </button>
      )}
    </>
  );
};

export default CustomButton;
