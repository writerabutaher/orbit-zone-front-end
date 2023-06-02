import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react';
import Loading from '../../Component/Loading';
import { useQuery } from 'react-query';

const Addverstainment = () => {

    const { data: adverstainment = [], isLoading } = useQuery({
        queryKey: ['adverstainment'],
        queryFn: async () => {
            const res = await fetch('https://orbit-zone.vercel.app/adverstainment');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            {
                adverstainment.length > 0 &&
                <div className='my-28 px-12'>
                    <h1 className='text-4xl font-bold text-center my-8'>Our Some Adverstainment Vehicles</h1>
                    <Splide options={{
                        perPage: 3,
                        arrows: true,
                        gap: 40,
                        pagination: true,
                        drag: "free",
                    }}>
                        {
                            adverstainment.map(e => {
                                return (
                                    <SplideSlide key={e._id}>
                                        <div>
                                            <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
                                                <img src={e.image_url} loading="lazy" alt="Photo by Rachit Tank" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                                            </div>
                                            <div>
                                                <h1 className="text-gray-500 hover:gray-800 text-3xl transition duration-100 mb-1">{e.product_name}</h1>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-gray-800 lg:text-lg font-bold">${e.original_price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                    </Splide>
                </div>
            }
        </>
    );
};

export default Addverstainment;