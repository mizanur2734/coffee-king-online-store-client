import React, { useState } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import { useLoaderData } from 'react-router';

const MyAddedCoffees = () => {
    const data = useLoaderData()
    // console.log('my data', data)
    const [coffees, setCoffees] = useState(data?.data || [])
    console.log(coffees)
    return (
        <div>
            <h2 className='text-black  md:mt-34 mt-30 text-center text-2xl md:text-4xl font-bold'>My Added Coffees</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 space-y-6 md:space-y-2  py-10 md:px-8 px-4 container mx-auto'>
                {
                    coffees.map(coffee => (
                        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
                    ))
                }
            </div>
        </div>
    );
};

export default MyAddedCoffees;