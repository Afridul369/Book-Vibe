import React from 'react'
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../Components/Footer/Footer'

const Root = () => {
  return (
    <div className='max-w-10/12 mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root
