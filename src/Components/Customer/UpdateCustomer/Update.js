import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCustomer } from "../../../actions/Customer";

export default function UpdateForm({ uCustomer }) {
  const [Customer, SetCustomer] = useState(uCustomer);
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    dispatch(updateCustomer(Customer._id, Customer));
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
                              SetCustomer({
                                ...Customer,
                                FullName: e.target.value,
                              })
                            }
                            value={Customer.FullName}
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
                              SetCustomer({
                                ...Customer,
                                Email: e.target.value,
                              })
                            }
                            value={Customer.Email}
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
                                ...Customer,
                                PhoneNo: e.target.value,
                              })
                            }
                            value={Customer.PhoneNo}
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
                              SetCustomer({
                                ...Customer,
                                State: e.target.value,
                              })
                            }
                            value={Customer.State}
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
