import React from "react";
import Header from "../component/Header";
import RestaurantNavbar from "../component/RestaurantNavbar";
import Menu from "../component/Menu";

const RestaurantMenu = () => {
  return (
    <div>
      <Header />

      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavbar />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
