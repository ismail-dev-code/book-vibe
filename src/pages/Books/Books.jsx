import React, { Suspense, useEffect, useState } from "react";
import { data } from "react-router";
import Book from "../Book/Book";

const Books =  ({data}) => {
  //   const booksPromise = fetch("./booksData.json").then((res) => res.json());

  //   const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => setAllBooks(data));
  //   }, []);

  return (
    <div>
      <Suspense
        fallback={
          <div className="text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
          </div>
          
        }
      >
        <h3 className="text-center text-2xl font-bold mt-12 mb-4">Books</h3>
       <div className="w-10/12 mx-auto mb-12 grid gap-4 grid-cols-1 md:grid-cols-3">
       {
            data.map((singleData)=><Book key={singleData.bookId} singleData={singleData}></Book>)
        }
       </div>
        
      </Suspense>

      {/* {
        allBooks.map((book)=> <div className="grid grid-rows-3"> <h2>{book.bookName} <img className="w-[200px] h-[250px]" src={book.image} alt="" /></h2> </div>)
    } */}
    </div>
  );
};
export default Books;
