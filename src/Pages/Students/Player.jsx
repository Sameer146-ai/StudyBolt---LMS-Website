import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from 'humanize-duration'
import YouTube from "react-youtube";
import Footer from "../../components/Student/Footer";

function Player() {

    const {enrolledCourses , calculateChapterTime} = useContext(AppContext)
    const {courseId} = useParams()
    const [courseData , setCourseData] = useState(null)
    const[playerData ,setPlayerData] = useState(null)

    function getIndividualCourse(){
      enrolledCourses.map((course)=>{
        if(course._id === courseId){
          setCourseData(course)
        }
      })
    }

    useEffect(()=>{
      getIndividualCourse()
    },[enrolledCourses])

  return (
    <>
      <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
        {/* left coloumn */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Course Structure</h2>
          <div className="pt-5">
            {courseData && courseData.courseContent.map((chapter, idx) => {
              return (
                <div
                  key={idx}
                  className="border border-gray-300 bg-white mb-2 rounded"
                >
                  <div className=" flex items-center justify-between px-4 py-3 cursor-pointer select-none">
                    <div className="flex items-center gap-2">
                      <img src={assets.down_arrow_icon} alt="arrow" />
                      <p className="font-medium md:text-base text-sm">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p>
                      {chapter.chapterContent.length} lectures -{" "}
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>
                  <div className="overflow-hidden transition-all duration-300 max-h-96">
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, i) => {
                        return (
                          <li
                            key={i}
                            className=" flex items-start gap-2 py-1"
                          >
                            <img
                              src={ false ? assets.blue_tick_icon :assets.play_icon}
                              alt="play-icon"
                              className="w-4 h-4 mt-1"
                            />
                            <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                              <p>{lecture.lectureTitle}</p>
                              <div className="flex gap-2">
                                {lecture.lectureUrl && (
                                  <p
                                    className="text-blue-600 cursor-pointer"
                                    onClick={() =>
                                       setPlayerData({
                                       ...lecture , chapter: idx + 1 , lecture: i + 1 
                                      })
                                    }
                                  >
                                    Watch
                                  </p>
                                )}
                                <p>
                                  {humanizeDuration(
                                    lecture.lectureDuration * 60 * 1000,
                                    { units: ["h", "m"] }
                                  )}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* right coloumn */}
        <div className="md:mt-10">
            { playerData ? ( <div> <YouTube videoId={playerData.lectureUrl.split('/').pop()} iframeClassName="w-full aspect-video"/>
                 <div className="flex justify-between items-center mt-1">
                  <p>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}</p>
                  <button className="text-blue-600">{false ? 'completed' : 'Mark Complete'}</button>
                 </div>
             </div> )  :
            <img src={courseData ? courseData.courseThumbnail : '' } alt="course thumnail" />}
            
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Player;
