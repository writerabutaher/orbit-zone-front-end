import { useQuery } from 'react-query';
import Loading from '../../Component/Loading';

const Vehicles = () => {

    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch('https://orbit-zone.vercel.app/allproducts');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='py-20'>
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-10 gap-y-8">
                            {
                                products.map(e => {
                                    const { product_name, original_price, price, location, mobile, PurchaseYear, condition, image_url, _id } = e;
                                    return (

                                        <div key={_id}>
                                            <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
                                                <img src={image_url} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                                            </div>
                                            <div>
                                                <h1 className="text-gray-800 lg:text-3xl transition duration-100 mb-1">{product_name}</h1>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-gray-800 lg:text-lg font-bold">${price}</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center gap-8 justify-between text-sm">
                                                <div>
                                                    <p className="text-gray-500">Location</p>
                                                    <p className="font-medium">{location}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Condition</p>
                                                    <p className="font-medium">{condition}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">User Year</p>
                                                    <p className="font-medium">{PurchaseYear}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center gap-8 justify-between text-sm">
                                                <div>
                                                    <p className="text-gray-500">Original Price</p>
                                                    <p className="font-medium">{original_price}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Mobile</p>
                                                    <p className="font-medium">{mobile}</p>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Vehicles;