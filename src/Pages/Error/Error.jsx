import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="bg-white py-40">
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
                            <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">Error 404</p>
                            <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">Page not found</h1>

                            <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">The page you’re looking for doesn’t exist.</p>

                            <Link to='/home' className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Go home</Link>
                        </div>

                        <div className="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg relative">
                            <img src="https://images.unsplash.com/photo-1611260507265-97f990094080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" loading="lazy" alt="Photo by @heydevn" className="w-full h-full object-cover object-center absolute inset-0" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;