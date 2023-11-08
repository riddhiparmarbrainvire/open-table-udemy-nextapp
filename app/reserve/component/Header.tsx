import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <h3 className="font-bold text-black">Youre almost done!</h3>
        <div className="mt-5 flex">
          <img
            src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
            alt=""
            className="w-32 h-18 rounded"
          />
          <div className="ml-4">
            <h1 className="text-3xl font-bold text-black">
              Aiāna Restaurant Collective
            </h1>
            <div className="flex mt-3 text-black">
              <p className="mr-6 text-black">Tues, 22, 2023</p>
              <p className="mr-6 text-black">7:30 PM</p>
              <p className="mr-6 text-black">3 people</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
