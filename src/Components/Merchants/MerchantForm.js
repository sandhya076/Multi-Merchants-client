import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { createMerchant } from "../../actions/Merchants";
import { Link } from "react-router-dom";
export default function MerchantForm() {
  const [Merchant, SetCustomer] = useState({
    FullName: "",
    Email: "",
    PhoneNo: "",
    State: "",
    Item: "",
    Price: "",
    Password: "",
  });
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();

    dispatch(createMerchant(Merchant))
      .then(() => {
        alert("Joined Successfully");
      })
      .catch((error) => {
        console.log(error.message);
      })
  };
  return (
    <>
      <center>
        <div className="row">
          <div className="col-md-6 mx-auto p-0">
            <div className="card">
              <div className="login-box">
                <div className="login-snip">
                  {" "}
                  <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    defaultChecked
                  />
                  
                  <label htmlFor="tab-1" className="tab">
                    Login
                  </label>{" "}
                  <input
                    id="tab-2"
                    type="radio"
                    name="tab"
                    className="sign-up"
                  />
                  <label htmlFor="tab-2" className="tab">
                    Sign Up
                  </label>
                  <div className="login-space">
                    <div className="login">
                      <div className="group">
                        {" "}
                        <label htmlFor="user" className="label">
                          Email
                        </label>{" "}
                        <input
                          id="user"
                          type="text"
                          className="input"
                          placeholder="Enter your username"
                          required
                          onChange={(e) =>
                            SetCustomer({ ...Merchant, Email: e.target.value })
                          }
                          value={Merchant.Email}
                        />{" "}
                      </div>
                      <div className="group">
                        {" "}
                        <label htmlFor="pass" className="label">
                          Password
                        </label>{" "}
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          placeholder="Enter your password"
                          required
                          onChange={(e) =>
                            SetCustomer({
                              ...Merchant,
                              Password: e.target.value,
                            })
                          }
                          value={Merchant.Password}
                        />{" "}
                      </div>

                      {/* <div className="group">
                        {" "}
                        <input
                          type="submit"
                          className="button"
                          defaultValue="Sign In"
                        />{" "}
                      </div> */}
                      <Link to = "/MerchantData"> <button type="button" className="btn btn-primary">
                        Submit
                      </button></Link>
                     
                      <div className="hr" />
                    </div>
                    <div className="sign-up-form">
                      <div className="group">
                        {" "}
                        <label htmlFor="FullName" className="label">
                          FullName
                        </label>{" "}
                        <input
                          id="FullName"
                          type="text"
                          className="input"
                          data-type="String"
                          placeholder="Write Your Full Name"
                          required
                          onChange={(e) =>
                            SetCustomer({
                              ...Merchant,
                              FullName: e.target.value,
                            })
                          }
                          value={Merchant.FullName}
                        />{" "}
                      </div>
                      <div className="group">
                        {" "}
                        <label htmlFor="pass" className="label">
                          Email
                        </label>{" "}
                        <input
                          id="pass"
                          type="text"
                          className="input"
                          data-type="String"
                          placeholder="Enter Your Email"
                          required
                          onChange={(e) =>
                            SetCustomer({ ...Merchant, Email: e.target.value })
                          }
                          value={Merchant.Email}
                        />{" "}
                      </div>
                      <div className="group">
                        {" "}
                        <label htmlFor="pass" className="label">
                          PhoneNo
                        </label>{" "}
                        <input
                          id="pass"
                          type="text"
                          className="input"
                          data-type="Number"
                          placeholder="Enter Your Phoneno"
                          required
                          onChange={(e) =>
                            SetCustomer({
                              ...Merchant,
                              PhoneNo: e.target.value,
                            })
                          }
                          value={Merchant.PhoneNo}
                        />{" "}
                      </div>
                      <div className="group">
                        {" "}
                        <label htmlFor="pass" className="label">
                          State
                        </label>{" "}
                        <input
                          id="pass"
                          type="text"
                          className="input"
                          placeholder="Enter your state"
                          required
                          onChange={(e) =>
                            SetCustomer({ ...Merchant, State: e.target.value })
                          }
                          value={Merchant.State}
                        />{" "}
                      </div>
                      <div className="group">
                        {" "}
                        <label htmlFor="pass" className="label">
                          Item
                        </label>{" "}
                        <input
                          id="pass"
                          type="text"
                          className="input"
                          placeholder="Enter your Item"
                          required
                          onChange={(e) =>
                            SetCustomer({ ...Merchant, Item: e.target.value })
                          }
                          value={Merchant.Item}
                        />{" "}
                      </div>
                      <div className="group">
                        {" "}
                        <label htmlFor="pass" className="label">
                          Price
                        </label>{" "}
                        <input
                          id="pass"
                          type="text"
                          className="input"
                          placeholder="Enter your Price"
                          required
                          onChange={(e) =>
                            SetCustomer({ ...Merchant, Price: e.target.value })
                          }
                          value={Merchant.Price}
                        />{" "}
                      </div>

                      <div className="group">
                        {" "}
                        <label htmlFor="pass" className="label">
                          Password
                        </label>{" "}
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          placeholder="Enter your password"
                          required
                          onChange={(e) =>
                            SetCustomer({
                              ...Merchant,
                              Password: e.target.value,
                            })
                          }
                          value={Merchant.Password}
                        />{" "}
                      </div>
                      
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e) => {
                          submithandler(e);
                        }}
                      >
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
