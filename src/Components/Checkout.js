import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from './Context/UserContext';
import SideBar from './SideBar';

const Checkout = () => {
  const details = useLoaderData([]);

  const {  name } = details;
  
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const tost =()=>{
      toast.success('Your Order place', { autoClose: 5000 });
  }
  return (
    <div className="grid lg:grid-cols-2 gap-5 w-11/12 mx-auto my-10">
      <div className="card w-96 bg-base-100 shadow-xl border border-blue-300">
        <h1 className="text-3xl text-center">Checkout Page</h1>
        <hr />
        <div className="card-body">
          <h2 className="card-title">Your Name : {displayName}</h2>
          <p>Your Email : {email}</p>
          <p>Your Product : {name}</p>
          <p>Total : 00 $</p>
          <div className="card-actions justify-end">
            <Link to='/' onClick={tost} className="btn bg-blue-500 text-white btn-sm">
              Confirm Order
            </Link>
          </div>
        </div>
      </div>

      <SideBar></SideBar>
    </div>
  );
};;

export default Checkout;