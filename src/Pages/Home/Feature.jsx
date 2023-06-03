import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <>

            <div className='my-32'>
                <div className="xl:container m-auto px-6 text-gray-600 md:px-12">
                    <div className='text-center'>
                        <h1 className="text-4xl font-bold text-center my-8 text-black">
                            What Our Serve For You
                        </h1>
                    </div>
                    <div
                        className="mt-8 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border-2 border-gray-100 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3 shadow-xl"
                    >
                        <div className="group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <img
                                    src="https://img.icons8.com/bubbles/512/buy.png"
                                    className="w-20"
                                    alt=""
                                />

                                <div className="space-y-2">
                                    <h5
                                        className="text-xl font-medium text-gray-700 transition group-hover:text-primary"
                                    >
                                        Top Buy & Sell Car
                                    </h5>
                                    <p className="text-sm text-gray-600 ">
                                        Buy and sell the best and most trusted cars, we provides the best platform for you and easy to use
                                    </p>
                                </div>
                                <Link to='/about' className="flex items-center justify-between group-hover:text-primary">
                                    <span className="text-sm">Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <img
                                    src="https://img.icons8.com/bubbles/512/card-in-use.png"
                                    className="w-20"
                                    alt=""
                                />

                                <div className="space-y-2">
                                    <h5
                                        className="text-xl font-medium text-gray-700 transition group-hover:text-primary"
                                    >
                                        Easy Payment
                                    </h5>
                                    <p className="text-sm text-gray-600 ">
                                        Transitions are very easy and safe, you can pay using anything and the money will be received by us first
                                    </p>
                                </div>
                                <Link to='/about' className="flex items-center justify-between group-hover:text-primary">
                                    <span className="text-sm">Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <img
                                    src="https://img.icons8.com/bubbles/512/easy.png"
                                    className="w-20"
                                    alt=""
                                />

                                <div className="space-y-2">
                                    <h5
                                        className="text-xl font-medium text-gray-700 transition group-hover:text-primary"
                                    >
                                        Easy To Use
                                    </h5>
                                    <p className="text-sm text-gray-600 ">
                                        We will make it easier for you to use our platform and be able to sell or buy the car of your dreams
                                    </p>
                                </div>
                                <Link to='/about' className="flex items-center justify-between group-hover:text-primary">
                                    <span className="text-sm">Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Feature;