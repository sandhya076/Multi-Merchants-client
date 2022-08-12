function reducers(Merchants = [], action) {
  switch (action.type) {
    case "DELETE_MERCHANT":
      return Merchants.filter((merchant) => merchant._id !== action.payload);
    case "UPDATE_MERCHANT":
      return Merchants.map((merchant) =>
        merchant._id === action.payload ? action.payload : merchant
      );
    case "FETCH_ALL_MERCHANT":
      return action.payload;
    case "CREATE_MERCHANT":
      return [...Merchants, action.payload];
    default:
      return Merchants;
  }
}

export default reducers;
