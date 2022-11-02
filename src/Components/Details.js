import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SideBar from "./SideBar";

const Details = () => {
  const details = useLoaderData([]);
  //  console.log(details)
  const { about, picture, name, id } = details;









  
  return (
    <div className="grid lg:grid-cols-3 gap-10 w-11/12 mx-auto my-10">
      <div className="lg:col-span-2 card lg:card-side w-3/4 mx-auto  bg-base-100 shadow-2xl border border-orange-400">
        <figure>
          <img
            className="xl:w-60 xl:p-1 rounded-lg "
            src={picture}
            alt="Course"
          />
        </figure>

        <div className="card-body p-2">
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>
          <div className="card-actions justify-end">
            <Link
              to={`../checkout/${id}`}
              details={details}
              className="btn btn-outline btn-sm"
            >
              Checkout
            </Link>

            <button className="btn btn-outline btn-sm">Download</button>
          </div>
        </div>
      </div>
      <SideBar></SideBar>




    </div>
  );
};

export default Details;
