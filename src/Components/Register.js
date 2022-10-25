import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200">                     
            <div className="max-w-sm shadow-2xl bg-base-100 rounded-lg card-body">
                        <div className="form-control">
                    <h1 className="text-4xl font-bold text-center mb-3">Register Here!</h1>
                    <hr />
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                          
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center dark:text-gray-400">Already have an account?
                            <Link to="/login" className='underline px-2 dark:text-gray-100 tooltip tooltip-bottom' data-tip="Login">Log in</Link>
                        </p>
               
                </div>
        
        </div>
    );
};

export default Register;