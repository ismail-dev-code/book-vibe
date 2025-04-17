import { Signal } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../utility/addToDB';
import { ToastContainer } from 'react-toastify';
import '../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book=>book.bookId===bookId);
   const {bookName, yearOfPublishing, author, category, image, review, totalPages, rating, tags, publisher} = singleBook;

const handleMarkAsRead = (id) =>{
    addToStoredDB(id);
}

    return (
        <div className='w-10/12 mx-auto flex md:flex-row flex-col justify-between gap-8 my-12 items-center'>
        <div className="details-img flex-1 flex justify-center rounded-xl bg-gray-50">
            <img className='h-[440px] my-6 rounded-md' src={image} alt="book image" />
        </div>
        <div className="details-text flex-1">
            <h1 className='text-3xl font-medium'>{bookName}</h1>
            <h4 className='border-b-1 border-gray-300 pb-2'>By {author}</h4>
            <h4 className='border-b-1 border-gray-300 pb-2'>{category}</h4>
            <p><span className='font-bold'>Review: </span>{review}</p>
            
            <div className='flex gap-4 border-b-1 border-gray-300 py-4'>
              
                <h1 className='font-bold'>Tag:</h1>
                    <h1 className='text-green-400 cursor-pointer'>{tags[0]}</h1>
                    <h1 className='text-green-400 cursor-pointer'>{tags[1]}</h1>
              
                
            </div>
           <div className='space-y-2'>
           <p>Number of pages: <span className='font-bold mr-8'>{totalPages}</span></p>
            <p>Publisher: <span className='font-bold mr-8'>{publisher}</span></p>
            <p>Year Of Publishing: <span className='font-bold mr-8'>{yearOfPublishing
            }</span></p>
            <p>Rating: <span className='font-bold'>{rating}</span></p>
           </div>
           <div className='flex gap-5 mt-4'>
           <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-sm bg-green-500 text-white">
  <ToastContainer className='text-center'></ToastContainer> Mark As Read
</button>
           <button className="btn btn-sm bg-green-500 text-white">Add to WishList</button>
           </div>
        </div>
            
        </div>
    );
};

export default BookDetails;