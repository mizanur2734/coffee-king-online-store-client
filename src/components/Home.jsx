import React, { useState } from 'react';
import HeroBanner from './HeroBanner';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import RecentProducts from './RecentProducts';
import MarImage from './MarImage';
import Contact from './Contact';


const Home = () => {
    const data = useLoaderData()
    // console.log('my data', data)
    const [coffees, setCoffees] = useState(data?.data || [])
    console.log(coffees)
    return (
        <div>
            <HeroBanner></HeroBanner>
            
            <h2 className="md:text-4xl text-3xl text-center font-bold mb-5">Our Coffee</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 space-y-6 md:space-y-2  py-10 md:px-8 px-4 container mx-auto'>
                {
                    coffees.slice(0, 4).map(coffee => (
                        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
                    ))
                }
            </div>
            <MarImage></MarImage>
            <RecentProducts></RecentProducts>
            <Contact></Contact>
        </div>
    );
};

export default Home;