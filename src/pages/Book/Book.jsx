import React, { use } from "react";

const Book = ({ singleData }) => {
  console.log(singleData);
  return (
    <div>

<div className="card bg-base-100 w-full shadow-sm">
  <figure className="bg-gray-100">
    <img className="w-[310px] h-[350px]"
      src={singleData.image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
  </div>
  )
};

export default Book;
