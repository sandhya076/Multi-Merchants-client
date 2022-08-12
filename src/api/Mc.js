import axios from "axios";

const urlMerchant = "https://multi-server1.herokuapp.com/merchant";
export const fetchMerchant = () => axios.get(urlMerchant);
export const createMerchant = (newMerchant) =>
  axios.post(urlMerchant, newMerchant);
export const updateMerchant = (id, updateMerchant) =>
  axios.patch(`${urlMerchant}/${id}`, updateMerchant);
export const deleteMerchant = (id) => axios.delete(`${urlMerchant}/${id}`);

const urlCustomer = "https://multi-server1.herokuapp.com/customer";
export const fetchCustomer = () => axios.get(urlCustomer);
export const createCustomer = (newCustomer) =>
  axios.post(urlCustomer, newCustomer);
export const updateCustomer = (id, updateCustomer) =>
  axios.patch(`${urlCustomer}/${id}`, updateCustomer);
export const deleteCustomer = (id) => axios.delete(`${urlCustomer}/${id}`);
