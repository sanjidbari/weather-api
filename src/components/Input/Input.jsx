import React from 'react';
import { UilLocationPoint, UilSearch } from '@iconscout/react-unicons'

const Input = () => {
    return (
        <div className='flex flew-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input type="text" placeholder='search for city...' className='text-xl font-light p-2 w-full rounded-sm shadow-xl focus:outline-none capitalize'/>
                <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"></UilSearch>
                <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"></UilLocationPoint>
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-xl text-white font-light'>
                    °C
                </button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name='imperial' className='text-xl text-white font-light'>
                    °F
                </button>
            </div>
        </div>
    );
};

export default Input;