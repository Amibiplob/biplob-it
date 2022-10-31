import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Main from './Main';
import SideBar from './SideBar';

const Home = () => {
    const data = useLoaderData([]);
  //  console.log(data)
    return (
      <div className="grid lg:grid-cols-3 gap-3 w-11/12 mx-auto my-5">
        <div className="lg:col-span-2">
          <Main data={data}></Main>
        </div>
        <div>
          <SideBar data={data}></SideBar>
        </div>
      </div>
    );
};

export default Home;