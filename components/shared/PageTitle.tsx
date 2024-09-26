import React from "react";
import { Interface } from "readline";

interface titleprops {
  title: string;
  description: string;
}

const PageTitle = ({title, description}: titleprops) => {
  return (
    <div className="">
      <h1 className="font-bold text-xl">{title}</h1>
      <h2 className="text-base">{description}</h2>
    </div>
  );
};

export default PageTitle;
