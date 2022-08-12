import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateMerchant } from "../../../actions/Merchants";
export default function UpdateForm({ uMerchant }) {
  const [Merchant, SetMerchant] = useState(uMerchant);
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    dispatch(updateMerchant(Merchant._id, Merchant));
    alert("Updated Successfully...!!!");
  };
  return (
    <>
    
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
                              SetMerchant({
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
                              SetMerchant({
                                ...Merchant,
                                Email: e.target.value,
                              })
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
                              SetMerchant({
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
                              SetMerchant({
                                ...Merchant,
                                State: e.target.value,
                              })
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
                              SetMerchant({ ...Merchant, Item: e.target.value })
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
                              SetMerchant({
                                ...Merchant,
                                Price: e.target.value,
                              })
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
                              SetMerchant({
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
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        
    </>
  );
}
