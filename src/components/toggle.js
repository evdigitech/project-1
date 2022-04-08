import React from 'react'
import '../assets/css/toggle.css'
function Toggle() {
  return (
    <>

<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle2"
          id="toggle2"
          className="toggle-checkbox1 absolute block w-5 h-5 mt-[0.135rem] mr-0.5 ml-0.5 rounded-full bg-white  appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle2"
          className="toggle-label1 block overflow-hidden w-[48px] h-6 rounded-full bg-[#F8F8FC] cursor-pointer"
        ></label>
      </div>
    </>
  )
}

export default Toggle