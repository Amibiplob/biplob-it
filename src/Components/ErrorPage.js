import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-44 h-44 text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <h1 className='p-4 text-4xl font-semibold rounded-lg text-red-400'>Opps ! Error Page</h1>
            <h1 className='bg-slate-400 p-4 text-4xl font-semibold rounded-lg'><Link to='/'>Back To Home</Link></h1>
        </div>
    );
};

export default ErrorPage;