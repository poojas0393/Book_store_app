import React from "react"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
export default function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path="/course" element ={<Courses></Courses>}></Route>
        <Route path="/signup" element ={<Signup></Signup>}></Route>
      </Routes>
    </div>
    </>
  )
}