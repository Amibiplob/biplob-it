import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({data}) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((singleData) => (
          <div
            key={singleData.id}
            className="card md:h-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="border rounded-2xl border-orange-500 p-1 w-full h-72 md:h-52 "
                src={singleData.picture}
                alt="Course"
              />
            </figure>
            <div className="card-body pt-3">
              <h2 className="card-title">
                {singleData.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="sm:hidden block">{singleData.about}</p>
              <p className="hidden sm:block">
                {singleData.about.slice(0, 100) + "....."}
              </p>
              <div className="card-actions justify-end">
                <Link to={`../details/${singleData.id}`} className="badge badge-outline">More...</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Main;