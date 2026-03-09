import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredData } from '../../Utilities/localStorageDB';
import { useAsyncError, useLoaderData } from 'react-router';
import Book from '../../Components/Book/Book';


const ReadList = () => {
    const data = useLoaderData()
    const [readList,setReadList] = useState([])
    const [sort,setSort] = useState('')
    
    useEffect(()=>{
        const storedReadList = getStoredData()
        const readListBooks = data.filter(book => storedReadList.includes(book.bookId))
        setReadList(readListBooks)
    },[])

    const handleSort=(types)=>{
        setSort(types)
        if (types === 'Pages') {
            const sorted = [...readList].sort((a,b)=> a.totalPages-b.totalPages)
            setReadList(sorted)
        }
        if (types === 'Ratings') {
            const sorted = [...readList].sort((a,b)=> a.rating-b.rating)
            setReadList(sorted)
        }
    }

  return (
    <div className='pb-28 pt-6'>
        <h1 className='text-4xl font-bold text-center mt-10'>Books</h1>
        <div className="dropdown mx-auto flex justify-center my-6">
            <div tabIndex={0} role="button" className="btn m-1">Sort By : {sort?sort:''}</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 mt-14 w-52 p-2 shadow-sm">
                <button onClick={()=> handleSort('Pages')} className='btn btn-outline'>Pages</button>
                <button onClick={()=> handleSort('Ratings')} className='btn btn-outline'>Ratings</button>
            </ul>
        </div>
        <Tabs>
            <TabList>
            <Tab>My Read List</Tab>
            <Tab>My Wish List</Tab>
            </TabList>
            <TabPanel>
            <h2>Book I Read : {readList.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                readList.map(book=> <Book key={book.bookId} book={book}></Book>)
            }
            </div>
            </TabPanel>
            <TabPanel>
            <h2>WishList Books :</h2>
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default ReadList
