import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Component/Loading';
import { useQuery } from 'react-query';

const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("https://orbit-zone.vercel.app/categories");
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-32'>
            <h1 className='text-4xl font-bold text-center py-8'>See Our Some Categories</h1>
            <div className='flex flex-col md:flex-row justify-center gap-8 mx-10'>
                {
                    categories.map(category => {
                        const { name, img, _id, category_id } = category
                        return (
                            <Link to={`/categories/${category_id}`} key={_id} className="group relative flex md:w-1/3 h-96 items-end bg-black">
                                <img
                                    alt="image"
                                    src={img}
                                    className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                                />

                                <div
                                    className="relative w-full bg-red-700 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                                >
                                    <h3 className="text-lg uppercase">{name}</h3>

                                    <p className="mt-1 text-xs font-medium uppercase">See More</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Categories;