import React, { useEffect, useState } from 'react';
import './ManageProducts.css';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
        const [orders, setCourse] = useState([]);
        
        useEffect(()=>{
            fetch('http://localhost:5000/manageProducts')
            .then(res => res.json())
            .then(data => setCourse(data))
          }, []);
    return (
        <div  className="main-table">
            <h3 className="text">Manage Products</h3>
            <div className="table-area">
                <table id="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order => <ManageProductsCard order={order} key={order._id}></ManageProductsCard> )
                    }
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;