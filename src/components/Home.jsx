import React, { useState } from 'react';
import HeroBanner from './HeroBanner';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';


const Home = () => {
    const data = useLoaderData()
    // console.log('my data', data)
    const [coffees, setCoffees] = useState(data?.data || [])
    console.log(coffees)
    return (
        <div>
            <HeroBanner></HeroBanner>
            <h2 className="md:text-4xl text-3xl text-center font-bold mb-5">Our Coffee</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 py-10 px-6 container mx-auto'>
                {
                    coffees.map(coffee => (
                        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;