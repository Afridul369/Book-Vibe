import React from 'react'

import Book from '../Book/Book'

const Books = ({data}) => {

  return (
    <div className='py-24 text-center'>
        <h1 className='font-bold text-4xl mb-10'>Books</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1">
            {
                data.map(book=> <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    </div>
  )
}

export default Books
