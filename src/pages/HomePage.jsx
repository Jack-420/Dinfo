import React from 'react'
import { useState } from 'react';

const HomePage = () => {
    return (
        <div className="pt-8 flex items-center justify-center flex-col" >
          <div className='flex items-center justify-center flex-col'>
            <div className="mt-10 mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-800 rounded-full uppercase">
              No 1 Resume Generator
            </div>
            <h1 className="text-3xl md:text-6xl text-center text-gray-600 mb-6">
              Helps build a perfect resume
            </h1>
            <div className=" font-mono text-3xl pl-10 pr-10 md:text-6xl bg-gradient-to-r from-indigo-700 to-pink-700 text-white px-4 p-2 rounded-md pb-4 w-fit">
              ResumeCraft 
            </div>
          </div>
          <div className=
            "text-sm md:text-xl text-neutral-400 mt-8  max-w-xs md:max-w-2xl text-center mx-auto">
            Intuitive resume generator that helps you create professional, eye-catching resumes effortlessly. Choose from customizable templates, input your details, and get instant, optimized suggestions. Ideal for job seekers at any career stage, ResumeCraft ensures your resume stands out to potential employers, boosting your chances of landing your dream job.
          </div>
        </div>
      );
}

export default HomePage