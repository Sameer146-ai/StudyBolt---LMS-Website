import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {Line} from 'rc-progress'
import Footer from '../../components/Student/Footer'

function MyEnrollment() {

  const {enrolledCourses,calculateCourseDuration,navigate} = useContext(AppContext)

  //dummy courses
  const [progressArray , setProgressArray] = useState([
    {lectureCompleted : 4, totelLectures: 4},
    {lectureCompleted : 1, totelLectures: 5},
    {lectureCompleted : 3, totelLectures: 7},
    {lectureCompleted : 0, totelLectures: 8},
    {lectureCompleted : 6, totelLectures: 6},
    {lectureCompleted : 6, totelLectures: 9},
    {lectureCompleted : 4, totelLectures: 7},
    {lectureCompleted : 3, totelLectures: 5},
    {lectureCompleted : 0, totelLectures: 6},
    {lectureCompleted : 5, totelLectures: 5},
    {lectureCompleted : 4, totelLectures: 9},
    {lectureCompleted : 7, totelLectures: 12},
    {lectureCompleted : 8, totelLectures: 15},
    {lectureCompleted : 5, totelLectures: 6}
  ])


  return (
    <>
    <div className='md:px-36 px-8 pt-10'>
     <h1 className='text-2xl font-semibold'>My Enrollments</h1> 
     <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
      <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
        <tr>
          <th className='px-4 py-3 font-semibold truncate'>Course</th>
          <th className='px-4 py-3 font-semibold truncate'>Duration</th>
          <th className='px-4 py-3 font-semibold truncate'>Completed</th>
          <th className='px-4 py-3 font-semibold truncate'>Status</th>
        </tr>
      </thead>
      <tbody className='text-gray-700'>
        {enrolledCourses.map((course,idx)=>{
          return <tr key={idx} className='border-b border-gray-500/20'>
            <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
              <img src={course.courseThumbnail} alt="couse thumbnail" className='w-14 sm:w-24 md:w-28'/>
              <div className='flex-1'>
                <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                <Line strokeWidth={2} percent={progressArray[idx] ? (progressArray[idx].lectureCompleted * 100) / progressArray[idx].totelLectures : 0} className='bg-gray-300 rounded-full'/>
              </div>
            </td >
            <td className ='px-4 py-3 max-sm:hidden'>{calculateCourseDuration(course)}</td>
            <td className='px-4 py-3 max-sm:hidden'>
             {progressArray[idx] && `${progressArray[idx].lectureCompleted} / ${progressArray[idx].totelLectures} `} <span>lectures</span>
            </td>
            <td className='px-4 py-3 max-sm:text-right'><button onClick={()=>navigate('/player/' + course._id)} className='px-3 sm:px-5 py-1.5 bg-blue-600 text-white max-sm:text-xs'>{progressArray[idx] && progressArray[idx].lectureCompleted / progressArray[idx].totelLectures === 1 ? 'completed' : 'Ongoing'}</button></td>
          </tr>
        })}
      </tbody>
     </table>                                                          
    </div>
    <Footer/>
    </>
  )
}

export default MyEnrollment