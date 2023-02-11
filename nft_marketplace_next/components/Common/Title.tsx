import React from "react";
import { titleProps } from "@/TypeProps";

function Title({ heading, paragrap }: titleProps) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-center md:text-left">{heading}</h1>
      <p className="mt-2 text-center md:text-left">{paragrap}</p>
    </div>
  );
}

export default Title;
