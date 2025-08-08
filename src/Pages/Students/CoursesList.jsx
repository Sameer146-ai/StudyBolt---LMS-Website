import React, { useContext, useEffect, useState } from 'react'
import SearchBox from '../../components/Student/SearchBox'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/Student/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/Student/Footer'

function CoursesList() {
  const {navigate , allCourses} = useContext(AppContext)
  const {input} = useParams()

  const [filteredCourse , setFilteredCourse] = useState([]);

  useEffect(()=>{
   if(allCourses && allCourses.length>0){
    const tempCourses = allCourses.slice();
    console.log(tempCourses)
   input ?
    setFilteredCourse(
       tempCourses.filter((item)=>{
       return item.courseTitle.toLowerCase().includes(input.toLowerCase())
   })
    )
   :setFilteredCourse(tempCourses)
  }
},[allCourses,input])

  return (
    <>
    <div className='relative md:px-36 px-8 pt-20 text-left'>
    <div className='flex justify-between md:flex-row flex-col gap-6 items-start w-full '>
      <div className=''>
      <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
      <p className='text-gray-500'>
        <span onClick={()=>{navigate('/')}} className='text-blue-600 cursor-pointer'>Home</span>/
        <span>Course List</span>
      </p>
      </div>
      <SearchBox data={input}/>
    </div>
    {input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
      <p>{input}</p>
      <img src={assets.cross_icon} alt="cross-icon" className='cursor-pointer' onClick={()=>navigate('/course-list')} />
    </div>
    }
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 my-16 gap-3 px-2 md:p-0'>

        {filteredCourse.map((course , idx)=> <CourseCard key={idx} course={course}/>)}

    </div>
    </div>
    <Footer/>
    </>
  )
}

export default CoursesList