import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './Pages/Students/Home'
import CoursesList from './Pages/Students/CoursesList'
import CouseDetails from './Pages/Students/CouseDetails'
import MyEnrollment from './Pages/Students/MyEnrollment'
import Player from './Pages/Students/Player'
import Loading from './components/Student/Loading'
import Educator from './Pages/Educators/Educator'
import Dashboard from './Pages/Educators/Dashboard'
import AddCourse from './Pages/Educators/AddCourse'
import MyCourses from './Pages/Educators/MyCourses'
import StudentsEnrolled from './Pages/Educators/StudentsEnrolled'
import Navbar from './components/Student/Navbar'
function App() {

  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default bg-white min-h-screen'>
      {!isEducatorRoute &&  <Navbar/>}
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/course-list' element = {<CoursesList/>}/>
        <Route path='/course-list/:input' element = {<CoursesList/>}/>
        <Route path='/course/:id' element = {<CouseDetails/>}/>
        <Route path='/my-enrollments' element = {<MyEnrollment/>}/>
        <Route path='/player/:courseId' element = {<Player/>}/>
        <Route path='/loading/:path' element = {<Loading/>}/>
        <Route path='/educator' element={<Educator/>}>
           <Route path='/educator' element={<Dashboard/>}/>
           <Route path='add-course' element={<AddCourse/>}/>
           <Route path='my-courses' element={<MyCourses/>}/>
           <Route path='students-enrolled' element={<StudentsEnrolled/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App