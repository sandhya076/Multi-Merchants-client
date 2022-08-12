import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer ,deleteCustomer} from "../../actions/Customer";
import { Link } from "react-router-dom";
export default function CustomerData() {
  const dispatch = useDispatch();
  dispatch(getCustomer());
  const Customer = useSelector((store) => store.SRCustomer);
  console.log(Customer);

  return (
    <>
      <div className="container mx-auto mt-4">
        <div className="row">
          {Customer.map((SRCustomer) => (
            <>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="https://storage.googleapis.com/fplsblog/Purchase%20Order/purchase-order.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{SRCustomer.FullName}</h5>
                    
                    <h6 className="card-subtitle mb-2 text-muted">
                    <i class="fas fa-phone"></i>  :  {SRCustomer.PhoneNo}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                    <i class="fas fa-city"></i> :  {SRCustomer.State}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                    <i class="fas fa-envelope-square"></i> :{SRCustomer.Email}
                    </h6>
                    <Link to = {{pathname :`/UpdateC?${SRCustomer._id}`}}>
                    
                    <button type="button" class="btn btn-primary">
                      Update
                    </button>
                    </Link>
                   &nbsp;

                    
                   <button
                          class="btn btn-danger"
                          onClick={() => dispatch(deleteCustomer(SRCustomer._id))}
                        >
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
