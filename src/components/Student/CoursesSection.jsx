import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

function CoursesSection() {
  const { allCourses } = useContext(AppContext);
  // console.log("Courses in UI:", allCourses);

  return (
    <div className='flex flex-col items-center justify-center py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn From the best</h2>
      <p className='text-center text-sm md:text-base text-gray-500'>
        Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>

      {/* Responsive Flex Container */}
      <div className='flex flex-wrap gap-4 px-5 my-10 md:px-0 md:my-16'>
        {allCourses.slice(0, 4).map((course, idx) => (
          <div key={idx} className='w-full sm:w-[48%] md:w-[48%] lg:w-[23.5%]'>
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      <Link
        to={'/course-list'}
        onClick={() => scroll(0, 0)}
        className='text-gray-500 border px-10 py-3 rounded border-gray-500/30'
      >
        Show all courses
      </Link>
    </div>
  );
}

export default CoursesSection;
