import React from 'react';
import Main from './Main';
import SideBar from './SideBar';

const Home = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-3 w-11/12 mx-auto my-3'>
            <div className='lg:col-span-2'><Main></Main></div>
            <div><SideBar></SideBar></div>
        </div>
    );
};

export default Home;