import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex md:flex-row flex-col justify-around   items-center bg-gray-100 mt-12 w-10/12 mx-auto rounded-md'>
            <div className="banner-title">
                <h2 className='md:text-3xl text-base mb-3.5 font-bold w-8/12'>Books to freshen up your bookshelf</h2>
                <button className='btn text-white bg-[#23BE0A]'>View The List</button>
            </div>
            <div className="banner-img">
                <img className='w-[318px] h-[380px] my-3 rounded-lg' src= {bookImage} alt="book img" />
            </div>
        </div>
    );
};

export default Banner;