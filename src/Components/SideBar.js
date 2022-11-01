import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({data}) => {
    return (
      <div className="flex flex-col gap-y-2">
        {data.map((singleData) => (
          <Link key={singleData.id} to={`../details/${singleData.id}`} className="btn btn-outline">{singleData.name}</Link>
        ))}
      </div>
    );
};

export default SideBar;