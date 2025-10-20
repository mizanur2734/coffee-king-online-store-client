import React from 'react';
import Marquee from 'react-fast-marquee';
import image1 from "../assets/coffee-img/bakery.png"
import image2 from "../assets/coffee-img/brandit.png"
import image3 from "../assets/coffee-img/coffe_logo2.png"
import image4 from "../assets/coffee-img/cupcake.png"
import image5 from "../assets/coffee-img/restaurants.png"
import image6 from "../assets/coffee-img/vintage.png"

const MarImage = () => {
    return (
        <div className='px-4 md:px-8 py-14 md:py-20'>
            <Marquee>
                <div className='flex items-center gap-8 md:gap-16'>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default MarImage;