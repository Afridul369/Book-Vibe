import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStore } from '../../Utilities/localStorageDB'

const BookDetails = () => {
    const {id} = useParams()
    const convertedToNumber = parseInt(id)
    const data = useLoaderData()
    const bookDetails = data.find(book=> book.bookId === convertedToNumber)
    const { bookId, author, bookName, category,publisher, image, rating, review,tags,totalPages,yearOfPublishing } = bookDetails
    const handleMarkRead = (id)=>{
        addToStore(id)
    }


  return (
    <div>
        <div className="flex gap-10 py-11">
            <div className="w-1/2">
                <div className="bg-[#f3f3f3] p-24 rounded-3xl">
                    <img className='rounded-2xl' width={600} src={image} alt=""  />
                </div>
            </div>
            <div className="w-1/2 p-6">
                <h1 className='text-4xl font-bold mb-5'>{bookName}</h1>
                <h2 className='text-xl font-medium'>By : {author}</h2>
                <div className="border-t border-dashed border-[#13131340] my-6"></div>
                <h2 className='text-xl font-medium'>{category}</h2>
                <div className="border-t border-dashed border-[#13131340] my-6"></div>
                <span className='font-bold'>Review : </span><p className='text[#13131340]'>{review}</p>
                <div className=" flex gap-5 mt-6">
                    <span className='font-bold'>Tag</span>
                    {
                        tags.map((tag, index) => <p key={index} className="badge font-semibold px-4 py-3 bg-[#f4fcf3] text-[#30c218] ">
                    # {tag}</p>)
                    }
                </div>
                <div className="border-t border-dashed border-[#13131340] my-6"></div>
                <div className="flex gap-16">
                    <div className="">
                        <div className="mb-3">Number Of Pages : </div>
                        <div className="mb-3">Publisher : </div>
                        <div className="mb-3">Year Of Publishing : </div>
                        <div className="mb-3">Rating : </div>
                    </div>
                    <div className="">
                        <div className="font-semibold mb-3">{totalPages}</div>
                        <div className="font-semibold mb-3">{publisher}</div>
                        <div className="font-semibold mb-3">{yearOfPublishing}</div>
                        <div className="font-semibold mb-3">{rating}</div>
                    </div>
                </div>
                <div className="flex gap-8 mt-10">
                    <button onClick={()=> handleMarkRead(convertedToNumber)} className="btn hover:btn-info px-7 py-5 hover:text-white font-bold text-black">Mark As Read</button>
                    <button className="btn hover:btn-info px-7 py-5 hover:text-white font-bold text-black">Add To Wishlist</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetails
