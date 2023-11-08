import React from "react";
import Form from "./component/Form";
import Header from "./component/Header";

const ReservationPage = () => {
  return (
    <div>
      <Header />
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
