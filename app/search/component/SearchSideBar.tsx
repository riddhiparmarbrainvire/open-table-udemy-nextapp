import React from "react";

const SearchSideBar = () => {
  return (
    <div>
      <div className="w-1/5">
        <div className="border-b pb-4">
          <h1 className="mb-2 text-black">Region</h1>
          <p className="font-light text-reg text-black">Toronto</p>
          <p className="font-light text-reg text-black">Ottawa</p>
          <p className="font-light text-reg text-black">Montreal</p>
          <p className="font-light text-reg text-black">Hamilton</p>
          <p className="font-light text-reg text-black">Kingston</p>
          <p className="font-light text-reg text-black">Niagara</p>
        </div>
        <div className="border-b pb-4 mt-3">
          <h1 className="mb-2 text-black">Cuisine</h1>
          <p className="font-light text-reg text-black">Mexican</p>
          <p className="font-light text-reg text-black">Italian</p>
          <p className="font-light text-reg text-black">Chinese</p>
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2 text-black">Price</h1>
          <div className="flex">
            <button className="border w-full text-reg font-light rounded-l p-2 text-black">
              $
            </button>
            <button className="border-r border-t border-b w-full text-reg font-light p-2 text-black">
              $$
            </button>
            <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r text-black">
              $$$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
