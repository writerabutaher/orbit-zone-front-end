import React from 'react'

const Pricing = () => {
    return (

        <div class="xl:container m-auto px-6 my-32 md:px-12 lg:px-20">
            <div class="m-auto text-center lg:w-7/12">
                <h2 class="text-2xl font-bold text-gray-800 md:text-4xl">
                    Choose Your Subscription Plan
                </h2>
            </div>
            <div class="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
                <div class="group relative md:col-span-1 lg:w-[32%]">
                    <div
                        aria-hidden="true"
                        class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                    ></div>
                    <div class="relative space-y-8 p-8">
                        <h3 class="text-center text-3xl font-semibold text-gray-700">Monthly</h3>
                        <div class="relative flex justify-around">
                            <div class="flex">
                                <span class="-ml-6 mt-2 text-3xl font-bold">$</span>
                                <span class="leading-0 text-8xl font-bold text-gray-800">19</span>
                            </div>
                            <span class="absolute right-9 bottom-2 text-xl font-bold"
                            >/ Month</span
                            >
                        </div>
                        <ul role="list" class="m-auto w-max space-y-4 pb-6 text-gray-600">
                            <li class="space-x-2">
                                <span>First premium advantage</span>
                            </li>
                            <li class="space-x-2">
                                <span>Second premium advantage</span>
                            </li>
                            <li class="space-x-2">
                                <span>Third advantage</span>
                            </li>
                        </ul>
                        <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-sky-600">Start Plan</span>
                        </button>
                    </div>
                </div>

                <div class="group relative row-start-1 md:col-span-2 lg:w-[36%]">
                    <div
                        aria-hidden="true"
                        class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                    ></div>
                    <div class="relative space-y-8 p-8">
                        <h3 class="text-center text-3xl font-semibold text-gray-700">Annual</h3>
                        <div class="overflow-hidden">
                            <div class="-mr-20 flex items-end justify-center">
                                <div class="flex">
                                    <span class="-ml-6 mt-2 text-3xl font-bold">$</span>
                                    <span class="leading-0 text-8xl font-bold text-gray-800">15</span>
                                </div>
                                <div class="mb-2">
                                    <span class="block text-xl font-bold text-gray-500">.56</span>
                                    <span class="block text-xl font-bold">/ Month</span>
                                </div>
                            </div>
                            <div class="text-center text-2xl font-medium">
                                <span class="text-gray-400 line-through">$234</span>
                                <span class="font-semibold text-gray-700">$190</span>
                            </div>
                            <span class="block text-center text-xs uppercase">BILLED YEARLY</span>
                            <span
                                class="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-yellow-900"
                            >1 Discount applied</span
                            >
                        </div>
                        <ul role="list" class="m-auto w-max space-y-4 pb-6 text-gray-600">
                            <li class="space-x-2">
                                <span>First premium advantage</span>
                            </li>
                            <li class="space-x-2">
                                <span>Second premium advantage</span>
                            </li>
                            <li class="space-x-2">
                                <span>Third advantage</span>
                            </li>
                            <li class="space-x-2">
                                <span>Fourth organizations advantage</span>
                            </li>
                        </ul>
                        <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-sky-600">Start Plan</span>
                        </button>
                    </div>
                </div>

                <div class="group relative md:col-span-1 lg:w-[32%]">
                    <div
                        aria-hidden="true"
                        class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                    ></div>
                    <div class="relative space-y-8 p-8">
                        <h3 class="text-center text-3xl font-semibold text-gray-700">Free</h3>
                        <div class="relative flex justify-around">
                            <div class="flex">
                                <span class="-ml-2 mt-2 text-3xl font-bold">$</span>
                                <span class="leading-0 text-8xl font-bold text-gray-800">0</span>
                            </div>
                        </div>
                        <ul role="list" class="m-auto w-max space-y-4 pb-6 text-gray-600">
                            <li class="space-x-2">
                                <span>First premium advantage</span>
                            </li>
                            <li class="space-x-2">
                                <span>Second premium advantage</span>
                            </li>
                            <li class="space-x-2">
                                <span>Third advantage</span>
                            </li>
                        </ul>
                        <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-sky-600">Get Started</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pricing