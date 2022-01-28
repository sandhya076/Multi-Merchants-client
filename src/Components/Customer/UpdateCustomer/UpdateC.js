import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Update from "./Update";

export default function FindUpdateForm() {
  const location = useLocation();
  const Customer = useSelector((state) => state.SRCustomer);
  return (
    <>
      {Customer.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <Update
            uCustomer={Customer.filter((w) => w._id === location.search.slice(1))[0]}
          />
        </>
      )}
    </>
  );
}
