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
}
const CustomButton = ({
  style,
  type,
  otherClasses,
  title,
  href,
  imgUrl,
  imgClasses,
}: Props) => {
  return (
    <>
      {href ? (
        <Link className={`btn  ${"btn-" + style} ${otherClasses}`} href={href}>
          {title}
        </Link>
      ) : (
        <button
          className={`btn  ${"btn-" + style} ${otherClasses} ${imgUrl ? "flex items-center gap-2" : ""}`}
          type={type}
        >
          {imgUrl && (
            <Image
              className={imgClasses}
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
