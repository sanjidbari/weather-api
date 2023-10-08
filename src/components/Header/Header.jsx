import React from 'react';

const Header = () => {
    const cities = [
        {
            id: 1,
            title: "Toronto"
        },
        {
            id: 2,
            title: "Mexico City"
        },
        {
            id: 3,
            title: "Seoul"
        },
        {
            id: 4,
            title: "Dhaka"
        },
        {
            id: 5,
            title: "New York"
        },
    ]

    return (

        <div className='flex items-center justify-around'>
            {cities.map((city) => (
                <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
            ))}
        </div>
    )
};

export default Header;