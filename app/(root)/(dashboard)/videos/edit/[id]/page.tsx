import { ParamsProps } from "@/types";
import React from "react";

const Page = ({ params }: ParamsProps) => {
  return <div>{params.id}</div>;
};

export default Page;
