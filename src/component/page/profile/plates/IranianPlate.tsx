import React from "react";

const IranianPlate = ({ p1, letter, p2, p3 }: any) => (
  <div className="flex items-center justify-center border-2 border-gray-500 rounded-md w-48 h-10 text-xl font-bold bg-white">
    <div className="h-full flex items-center px-2 text-white bg-blue-600 rounded-r-sm gap-1">
      <span className="text-xs self-center  ">ایران</span>
      <span className="self-center ">{p3}</span>
    </div>
    <div className="flex-1 text-center tracking-wider">{p2}</div>
    <div className="flex-1 text-center">{letter}</div>
    <div className="flex-1 text-center tracking-wider">{p1}</div>
  </div>
);

export default IranianPlate;
