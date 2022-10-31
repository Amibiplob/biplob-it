import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData([]);
  //  console.log(details)
  const { about, picture ,name } = details;
  return (
    <div className="card w-3/4 lg:w-2/5 mx-auto my-10 bg-base-100 shadow-2xl border border-orange-400">
      <figure>
        <img className="w-96" src={picture} alt="Course" />
      </figure>
      <hr/>
      <div className="card-body">
        <h2 className="card-title">
      {name}
   
        </h2>
        <p>{about}</p>
        
      </div>
    </div>
  );
};

export default Details;
