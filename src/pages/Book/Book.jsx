import { Star } from "lucide-react";
import React, { use } from "react";

const Book = ({ singleData }) => {
  console.log(singleData);
  return (
    <div>
      <div className="card bg-base-100 w-full h-fit shadow-sm">
        <figure className="bg-gray-100 w-2/3 mx-auto rounded-md p-3">
          <img className="md:w-[240px] w-full h-full md:h-[266px] rounded-md" src={singleData.image} />
        </figure>
        <div className="card-body">
          <div>
            <button className="btn mr-4 text-[#23BE0A]">Young Adult</button>
            <button className="btn text-[#23BE0A]">Identity</button>
          </div>
          <h1 className="card-title md:text-nowrap">{singleData.bookName}</h1>
          <p>By {singleData.author}
          </p>
          <div className="card-actions justify-between flex-1">
            <p>{singleData.category}</p>
            <p className="flex gap-2">{singleData.rating}<Star /><Star /></p>
            <p>{singleData.tags[1]}</p>
            
          </div>
         <div className="flex justify-around text-nowrap">
         <h4>{singleData.publisher}</h4>
          <h4>{singleData.totalPages}</h4>
          <h4>{singleData.yearOfPublishing}</h4>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
