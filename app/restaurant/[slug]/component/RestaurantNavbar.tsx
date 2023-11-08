import Link from "next/link";
import React from "react";

const RestaurantNavbar = () => {
  return (
    <div>
      <nav className="flex text-reg border-b pb-2 text-black">
        <Link href="/restaurant/milestones-grill" className="mr-7">
          Overview
        </Link>
        <Link
          href="/restaurant/milestones-grill/menu"
          className="mr-7 text-black"
        >
          Menu
        </Link>
      </nav>
    </div>
  );
};

export default RestaurantNavbar;
