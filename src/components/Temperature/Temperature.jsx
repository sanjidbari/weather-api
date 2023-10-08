import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from "@iconscout/react-unicons"

const Temperature = () => {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>Cloudy</p>
            </div>

            <div className='flex flex-row items-center justify-between text-white py-3 ml-3'>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' />
                <p className='text-5xl'> 34°</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center mr-1'>
                        <UilTemperature size={18} className='mr-1' />
                        Real feel:
                        <span className='font-medium ml-1'>32°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1'>32°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center ml-6'>
                        <UilWind size={18} className='mr-1' />
                        Wind Speed:
                        <span className='font-medium ml-1'>32°</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 text-sm text-white py-3'>
                <UilSun />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>06:45 pm</span>
                </p>
                <p className='font-light'>|</p>
                <UilSunset />
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>06:45 am</span>
                </p>
                <p className='font-light'>|</p>
                <UilSun />
                <p className='font-light'>
                    High: <span className='font-medium ml-1'>45°</span>
                </p>
                <p className='font-light'>|</p>
                <UilSun />
                <p className='font-light'>
                    Low: <span className='font-medium ml-1'>37°</span>
                </p>
            </div>
        </div>
    );
};

export default Temperature;