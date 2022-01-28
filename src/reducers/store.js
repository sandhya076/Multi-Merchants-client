import {combineReducers} from "redux";
import customer from "./Customer";
import merchants from "./Merchants";

export default combineReducers ({
   SRMerchants : merchants,
   SRCustomer  :  customer
})