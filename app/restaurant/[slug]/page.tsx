import React from "react";
import Header from "./component/Header";
import RestaurantNavbar from "./component/RestaurantNavbar";
import RestaurantTitle from "./component/RestaurantTitle";
import Rating from "./component/Rating";
import Description from "./component/Description";
import Images from "./component/Images";
import Reviews from "./component/Reviews";
import RestaurantCard from "./component/RestaurantCard";

const RestaurantDetails = () => {
  return (
    <div>
      <Header />

      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavbar />
          <RestaurantTitle />
          <Rating />
          <Description />
          <Images />
          <Reviews />
        </div>
        <div className="w-[27%] relative text-reg">
          <RestaurantCard />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
