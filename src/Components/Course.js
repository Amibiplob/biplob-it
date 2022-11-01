import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Main from './Main';
import SideBar from './SideBar';

const Course = () => {
  const data = useLoaderData([]);
  //  console.log(data)
  return (
    <>
      <div className='flex justify-center py-7 bg-slate-100'>
        <h1 className='text-5xl text-black'>Here are our popular courses.</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 w-11/12 mx-auto my-5">
        <div className="lg:col-span-2">
          <Main data={data}></Main>
        </div>
        <div>
          <SideBar data={data}></SideBar>
        </div>
      </div>
    </>
  );
};;

export default Course;