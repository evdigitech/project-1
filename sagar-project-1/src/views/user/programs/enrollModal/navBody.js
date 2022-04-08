import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

function NavBody({progress}) {
  return (
    <>
              <div className="inline-flex gap-2 ">
                <div className="inline-flex gap-2">
                  <FaCheckCircle
                    className=" text-[#E9E9ED]  h-5 w-5 "
                    style={
                      progress === 100
                      ? { color: "#149B5F" }
                      : { color: "#E9E9ED" }
                    }
                  />
                  <p className="md:text-base text-sm"> Mentee </p>
                </div>
                <div className="inline-flex gap-2">
                  <FaCheckCircle
                    className=" text-[#E9E9ED]  h-5 w-5 "
                    style={
                      progress === 100
                      ? { color: "#149B5F" }
                      : { color: "#E9E9ED" }
                    }
                  />

                  <p className="md:text-base font-bold text-sm text-[#0F69AF]"> Mentor </p>
                </div>
              </div>
              <div className="inline-flex gap-4">
                <div className="w-[150px] bg-gray-200 my-auto rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full "
                    style={{
                        width:
                          progress === 100
                            ? "100%"
                            : progress === 50
                            ? "50%"
                            : "0%",
                      }}
                      ></div>
                </div>
                <div className="float-right text-[#7D7D89] text-xs my-auto">
                  {progress === 100
                    ? "100%"
                    : progress === 50
                    ? "50%"
                  : progress}
                </div>
              </div>
            </>
  )
}

export default NavBody