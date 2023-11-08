import React from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <div>
      <main className="bg-white mt-5">
        <div>
          <div className="mt-4 pb-1 mb-1">
            <h1 className="font-bold text-4xl text-black">Menu</h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <MenuCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
