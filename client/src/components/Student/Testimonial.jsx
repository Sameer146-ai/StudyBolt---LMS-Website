import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

function Testimonial() {
  return (
    <div className='flex flex-col items-center justify-center pb-14 px-4 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='text-center text-sm md:text-base text-gray-500 mt-3 max-w-2xl'>
        Hear from our learners as they share their journey of transformation, success, and how our
        platform has made a difference in their lives.
      </p>

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14 w-full max-w-7xl px-20'>
        {dummyTestimonial.map((testimonial, idx) => (
          <div
            key={idx}
            className='text-sm text-left border border-gray-500/30 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/25'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-12 h-12 rounded-full object-cover'
              />
              <div>
                <h1 className='text-base font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-600 text-sm'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, starIdx) => (
                  <img
                    key={starIdx}
                    src={
                      starIdx < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt='Star'
                    className='w-4 h-4'
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href='#' className='text-blue-500 underline px-4 pb-4 block'>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
