import React from 'react'
import Navbar from '../Navbar';
import Banner from '../Banner';
import FreeBooks from '../FreeBooks';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <FreeBooks></FreeBooks>
      <Footer></Footer>
    </>
  )
}
export default Home;