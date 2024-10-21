import React from 'react'
import loge from '../assets/loge.png'

function Landing(){
  window.location.href="/";
}

const Logo = () => {
  return (
    <button onClick={Landing} className='flex place-items-start'>
        <img 
            className='h-10 w-auto'
            src={loge} 
            alt="" 
        />
        <p className="text-blue-800 font-mono text-xl ml-5 mt-2">ResumeCraft</p>
    </button>
  )
}

export default Logo