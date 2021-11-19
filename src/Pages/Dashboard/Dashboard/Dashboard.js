import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminRoute from '../../AdminRoute/AdminRoute';
import useAuth from '../../hooks/useAuth';
import MyOrders from '../../MyOrders/MyOrders/MyOrders';
import Review from '../../Review/Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Payment from '../Payment/Payment';
import AddAProduct from './AddAProduct/AddAProduct';
import './Dashboard.css';

const Dashboard = () => {
    const {admin} = useAuth();
    const [control, setControl] = useState("addServices");
    const {user, emailLogOut} = useAuth(); 
    console.log(control);
    return (
        <div className="dashboard-section">
            <div>
                <div class="row">
                    <nav class="navbar navbar-expand-lg bg-secondary navbar-light col-12 col-md-2 my-5">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                                <h2 className="dash-logo">Dashboard</h2>
                            </a>
                            <button class="navbar-toggler navbar-light bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentx" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContentx">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        
                                    </li>                    
                                </ul>
                                <form class="d-flex navbar-nav me-auto mb-2 mb-lg-0">
                                    <div className="nav-item navigation-links dash-nav">
                                        <h2 className="text-white dash-second-logo">Dashboard</h2>
                                        <Link to='/'> 
                                            <h6 className="btn btn-primary my-2 px-4">Home</h6>
                                        </Link> <br/>
                                        
                                        
                                        {
                                            !admin && <div>
                                                <h6 onClick={()=>setControl("test")} className="btn btn-primary my-2">My Orders</h6> <br/>
                                            </div>
                                        }
                                        {
                                            !admin && <div>
                                                <h6 onClick={()=>setControl("review")} className="btn btn-primary my-2">Add Review</h6> <br/>
                                            </div>
                                        }
                                        {
                                            !admin && <div>
                                                <h6 onClick={()=>setControl("payment")} className="btn btn-primary my-2 px-4">Payment</h6> <br/>
                                            </div>
                                        }
                                        {
                                            admin && <div>
                                            <h6 onClick={()=>setControl("makeAdmin")} className="btn btn-primary my-2 px-4">Make Admin</h6> <br/>
                                            </div>
                                        }
                                        {
                                            admin && <div>
                                            <h6 onClick={()=>setControl("manageAllOrders")} className="btn btn-primary my-2 px-4">Manage All Orders</h6> <br/>
                                            </div>
                                        }
                                        {
                                            admin && <div>
                                            <h6 onClick={()=>setControl("manageProducts")} className="btn btn-primary my-2 px-4">Manage Products</h6> <br/>
                                            </div>
                                        }
                                        {
                                            admin && <div>
                                            <h6 onClick={()=>setControl("addaproduct")} className="btn btn-primary my-2 px-4">Add a Product</h6> <br/>
                                            </div>
                                        }
                                        <h6 onClick={emailLogOut} className="btn btn-primary my-2 px-4">log Out</h6>                                         
                                    </div>
                                </form>
                            </div>
                        </div>
                    </nav>
                    

                    <div  class="col-12 col-md-10 my-5">
                        {control==="test" && <MyOrders></MyOrders>}
                        {control==="review" && <Review></Review>}
                        {control==="payment" && <Payment></Payment>}
                        {control==="manageAllOrders" && <ManageAllOrders></ManageAllOrders>}
                        {control==="manageProducts" && <ManageProducts></ManageProducts>}
                        {control==="addaproduct" && <AddAProduct></AddAProduct>}
                        {control==="makeAdmin" && <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute> }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;



/* <div class="dashboard-area col-4 col-md-2 bg-secondary">
                        <div className="dashboard-link-area my-3">
                            <h2 className="text-white">Dashboard</h2>
                            <Link to='/'> 
                                <h6 className="btn btn-primary my-2 px-4">Home</h6>
                            </Link> <br/>
                            <h6 onClick={()=>setControl("test")} className="btn btn-primary my-2">My Orders</h6> <br/>
                            <h6 onClick={()=>setControl("review")} className="btn btn-primary my-2">Add Review</h6> <br/>
                            <h6 onClick={()=>setControl("payment")} className="btn btn-primary my-2 px-4">Payment</h6> <br/>
                            <h6 onClick={emailLogOut} className="btn btn-primary my-2 px-4">log Out</h6> 

                        </div>                        
                    </div> */

