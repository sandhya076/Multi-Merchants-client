import Home from "./Components/Home/Home";
import MerchantForm from "./Components/Merchants/MerchantForm";
import CustomerForm from "./Components/Customer/CustomerForm";
import MerchantsData from "./Components/Merchants/MerchantsData";
import CustomerData from "./Components/Customer/CustomerData";
import UpdateM from "./Components/Merchants/UpdateMerchant/UpdateM"
import UpdateC from "./Components/Customer/UpdateCustomer/UpdateC"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/MerchantForm" exact element={<MerchantForm />} />
            <Route path="/CustomerForm" exact element={<CustomerForm />} />
            <Route path="/MerchantData" exact element = {<MerchantsData/>}/>
            <Route path="/CustomerData" exact element= {<CustomerData/>}/>
            <Route path ="/UpdateM" exact element = {<UpdateM/>}/>
            <Route path = "/UpdateC" exact element = {<UpdateC/>}/>
          </Routes>
        </div>
      </Router>
  
   
   </>
  );
}

export default App;
