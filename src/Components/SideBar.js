import React from 'react';

const SideBar = ({data}) => {
    return (
      <div className="flex flex-col gap-y-2">
        {data.map((singleData) => (
          <button key={singleData.id} className="btn btn-outline">{singleData.name}</button>
        ))}
      </div>
    );
};

export default SideBar;