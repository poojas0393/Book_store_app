import React from 'react'
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footer from '../components/Footer';
//import list from "../../public/list.json ";

function Courses () {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen'>
        <Course></Course>
      </div>
      <Footer></Footer>
    </>
  )
}
export default  Courses;