import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredData } from '../../Utilities/localStorageDB';
import { useLoaderData } from 'react-router';
import Book from '../../Components/Book/Book';


const ReadList = () => {
    const data = useLoaderData()
    const [readList,setReadList] = useState([])
    
    useEffect(()=>{
        const storedReadList = getStoredData()
        const readListBooks = data.filter(book => storedReadList.includes(book.bookId))
        setReadList(readListBooks)
    },[])

  return (
    <div className='pb-28 pt-6'>
        <h1 className='text-4xl font-bold text-center mt-10'>Books</h1>
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
