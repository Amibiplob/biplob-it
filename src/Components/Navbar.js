import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
              <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li><Link>Item 1</Link></li>
                            <li><Link>Item 1</Link></li>
                            <li><Link>Item 1</Link></li>
                           
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
           
                <div className="navbar-end">
                    <div>
                        <ul className="flex gap-2">
                        <li className='hover:bg-slate-300 hover:rounded-lg'>
                            <NavLink to='/home' title='Home'>
                                {({ isActive }) => (<span className={isActive ? 'bg-blue-100 text-blue-600 round p-2 rounded-lg' : 'p-2'}>Home</span>)}
                            </NavLink> 
                            </li>
                        <li className='hover:bg-slate-300'>
                            <NavLink to='/' title='Home'>
                                {({ isActive }) => (<span className={isActive ? 'bg-blue-100 text-blue-600 round p-2 rounded-lg' : 'p-2'}>Home</span>)}
                            </NavLink> 
                            </li>
                        <li className='hover:bg-slate-300'>
                            <NavLink to='/' title='Home'>
                                {({ isActive }) => (<span className={isActive ? 'bg-blue-100 text-blue-600 round p-2 rounded-lg' : 'p-2'}>Home</span>)}
                            </NavLink> 
                            </li>
                       
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
     
    );
};

export default Navbar;