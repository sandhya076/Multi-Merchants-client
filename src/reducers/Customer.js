function reducers(Customers = [], action) {
  switch (action.type) {
    case "DELETE_CUSTOMER":
      return Customers.filter((Customer) => Customer._id !== action.payload);
    case "UPDATE_CUSTOMER":
      return Customers.map((Customer) =>
        Customer._id === action.payload ? action.payload : Customer
      );
    case "FETCH_ALL_CUSTOMER":
      return action.payload;
    case "CREATE_CUSTOMER":
      return [...Customers, action.payload];
    default:
      return Customers;
  }
}

export default reducers;
