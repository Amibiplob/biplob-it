import React from 'react';

const Main = ({data}) => {
    return (
      <div className="grid grid-cols-3 gap-6">
        {data.map((singleData) => (
          <div key={singleData.id} className="card h-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="border rounded-2xl border-orange-500 p-1 w-full h-52"
                src={singleData.picture}
                alt="Course"
              />
            </figure>
            <div className="card-body pt-3">
              <h2 className="card-title">
                {singleData.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{singleData.about}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">More...</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Main;