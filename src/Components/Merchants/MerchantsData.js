import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMerchant ,deleteMerchant} from "../../actions/Merchants";

export default function MerchantsData() {
  const dispatch = useDispatch();
  dispatch(getMerchant());
  const Merchant = useSelector((store) => store.SRMerchants);
  console.log(Merchant);

  return (
    <>
      <div className="container mx-auto mt-4">
        <div className="row">
          {Merchant.map((SRMerchants) => (
            <>
              <div className="col-md-4">
                <div className="card data" style={{ width: "18rem" }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8I-Z6XiYgNYoKAiHXnGq2V790Noag19PB4eGu-YzyQt9QY77UYS92U6WrQfs5o2CEEhU&usqp=CAU"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      Item : <b> {SRMerchants.Item}</b>
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Price : <i class="fas fa-rupee-sign"></i>{" "}
                      <b> {SRMerchants.Price}</b>
                    </h6>
                    <h6 className="card-title">
                    <i class="fas fa-user-circle"></i> : <b>{SRMerchants.FullName}</b>{" "}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <i class="fas fa-envelope-square"></i>:{" "}
                      <b>{SRMerchants.Email}</b>
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <i class="fas fa-phone"></i> :{" "}
                      <b>{SRMerchants.PhoneNo}</b>
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                    <i class="fas fa-city"></i> : <b>{SRMerchants.State}</b>
                    </h6>
                    <Link to = {{pathname :`/UpdateM?${SRMerchants._id}`}}>
                    
                    <button type="button" class="btn btn-primary">
                      Update
                    </button>
                    </Link>
                    
                    &nbsp; &nbsp;
                    <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteMerchant(SRMerchants._id))}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
