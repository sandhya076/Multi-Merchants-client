import * as api from "../api/Mc";

export const getMerchant = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMerchant();
    dispatch({ type: "FETCH_ALL_MERCHANT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMerchant = (merchant) => async (dispatch) => {
  try {
    const { data } = await api.createMerchant(merchant);
    dispatch({ type: "CREATE_MERCHANT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateMerchant = (id, merchant) => async (dispatch) => {
  try {
    const { data } = await api.updateMerchant(id, merchant);
    dispatch({ type: "UPDATES_MERCHANT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteMerchant = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteMerchant(id);
    dispatch({ type: "DELETE_MERCHANT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
