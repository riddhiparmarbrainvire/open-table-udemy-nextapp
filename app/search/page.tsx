import React from "react";
import Header from "./component/Header";
import SearchSideBar from "./component/SearchSideBar";
import SearchRestaurantCard from "./component/SearchRestaurantCard";

const Search = () => {
  return (
    <div>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <SearchRestaurantCard />
        </div>
      </div>
    </div>
  );
};

export default Search;
