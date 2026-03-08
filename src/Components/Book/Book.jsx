import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ book }) => {
    const { bookId, author, bookName, category,publisher, image, rating, review,tags,totalPages } = book

  return (
    <Link to={`/bookdetails/${bookId}`} >
        <div className="card bg-base-100 w-96 shadow-xl py-5">
        <figure className="m-5 p-5 rounded-b-xl bg-[#f3f3f3]">
            <img
                width={150}
                src={image}
                alt="Shoes"
            />
        </figure>
        <div className="py-4 px-5 ">
            <div className="flex gap-5">
                {
                    tags.map((tag, index) => 
                    <div key={index} className="badge font-semibold px-4 py-3 bg-[#f4fcf3] text-[#30c218] ">
                    {tag}</div>)
                }
            </div>
            <h2 className="card-title text-2xl font-bold my-1">
            {bookName}
            </h2>
        </div>
            <p className="px-5 text-base text-gray-900 font-semibold">
                By : {author}
            </p>
            <div className="border-t border-dashed border-[#13131350] my-4"></div>
            <div className="card-actions justify-between px-5 ">
            <div className="badge ">{category}</div>
            <div className="badge text-xl ">{rating}  
                {rating > 4.5 ? 
                <FaStar className="ml-1 text-amber-400" size={20} /> 
                : <FaRegStarHalfStroke className="ml-1 text-amber-400" size={20}/>} </div>
            </div>
        </div>
    </Link>
  );
};

export default Book;
