import Image from "next/image";
import React from "react";

const Images = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5 text-black">
          5 photos
        </h1>
        <div className="flex flex-wrap">
          <Image
            className="w-56 h-44 mr-1 mb-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
            alt=""
          />
          <Image
            className="w-56 h-44 mr-1 mb-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
            alt=""
          />
          <Image
            className="w-56 h-44 mr-1 mb-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
            alt=""
          />
          <Image
            className="w-56 h-44 mr-1 mb-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
            alt=""
          />
          <Image
            className="w-56 h-44 mr-1 mb-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
