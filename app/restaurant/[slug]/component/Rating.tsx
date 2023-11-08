import React from "react";

const Rating = () => {
  return (
    <div>
      <div className="flex items-end">
        <div className="ratings mt-2 flex items-center text-black">
          <p>*****</p>
          <p className="text-reg ml-3 text-black">4.9</p>
        </div>
        <div>
          <p className="text-reg ml-4 text-black">600 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
