import React from 'react'

function EnrollModalBody() {
  return (
    <> <div> 
    <div className="px-6 ">
      <div>
      <p className="md:text-base text-sm py-5 ">
      Mentoring Application Form Which of the following development areas would you like to focus your mentoring support on? &nbsp; <span className='font-black'>Select all that apply. </span>
        </p>
      <div className="px-6">
        
        <div className="flex flex-col gap-y-3">
          <div className="inline-flex gap-2">
            <div className=" ">
              <input
                name="check1"
                className=" checkbox "
                type="checkbox"
               // onChange={() => checkHander1()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                Share functional knowledge and expertise
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                className="checkbox "
                name="check2"
               //onClick={() => checkHander2()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Build effective relationships or networks{" "}
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check3"
                className=" checkbox  "
               //onClick={() => checkHander3()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Provide career coaching{" "}
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Share broad business knowledge{" "}
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Provide objective performance feedback and coaching{" "}
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                Build leadership skills
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div >
      <p className="md:text-base text-sm py-5 ">
     In which Of the following areas do you have specific skill or competency expertise? &nbsp; <span className='font-black'> Please choose all that apply. </span>
        </p>
      <div className="px-8">
        
        <div className="flex flex-col gap-y-3">
          <div className="inline-flex gap-2">
            <div className=" ">
              <input
                name="check1"
                className=" checkbox "
                type="checkbox"
               // onChange={() => checkHander1()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Adaptability
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                className="checkbox "
                name="check2"
               //onClick={() => checkHander2()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Collaboration
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check3"
                className=" checkbox  "
               //onClick={() => checkHander3()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Communicating for Impact
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Decision-Making
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Driving for Results
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Talent Development
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div >
      <p className=" md:text-base text-sm py-5 ">
      In which of the following organizational business functions do you have expertise? &nbsp; <span className='font-black'> Choose all that apply. </span>
        </p>
      <div className="px-8">
        
        <div className="flex flex-col gap-y-3">
          <div className="inline-flex gap-2">
            <div className=" ">
              <input
                name="check1"
                className=" checkbox "
                type="checkbox"
               // onChange={() => checkHander1()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Administration  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                className="checkbox "
                name="check2"
               //onClick={() => checkHander2()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Information Technology
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check3"
                className=" checkbox  "
               //onClick={() => checkHander3()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Finance 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                 Marketing  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Product Design
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Sales)
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>



      <div >
      <p className="4 md:text-base text-sm py-5 ">
      Which of the following development areas would you like to focus your mentoring relationship on? </p>
      <div className="px-8">
        
        <div className="flex flex-col gap-y-3">
          <div className="inline-flex gap-2">
            <div className=" ">
              <input
                name="check1"
                className=" checkbox "
                type="checkbox"
               // onChange={() => checkHander1()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Gain functional knowledge and expertise 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                className="checkbox "
                name="check2"
               //onClick={() => checkHander2()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Bui d effective relationships or networks
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check3"
                className=" checkbox  "
               //onClick={() => checkHander3()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Receive career coaching  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Develop broad business knowledge
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Receive objective performance feedback and coaching 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                Build leadership skills
              </p>
            </div>
          </div>
        </div>
      </div>

      </div>
      <div >
      <p className=" md:text-base text-sm py-5 ">
      In which specific skill or competency would you like to gain development? &nbsp; <span className='font-black'>  Please choose up to 2. </span>
        </p>
      <div className="px-8">
        
        <div className="flex flex-col gap-y-3">
          <div className="inline-flex gap-2">
            <div className=" ">
              <input
                name="check1"
                className=" checkbox "
                type="checkbox"
               // onChange={() => checkHander1()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Adaptability  Collaboration
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                className="checkbox "
                name="check2"
               //onClick={() => checkHander2()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Collaboration
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check3"
                className=" checkbox  "
               //onClick={() => checkHander3()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Communicating for Impact  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Decision-Making 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Driving for Results  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Talent Development
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div >
      <p className="  md:text-base text-sm py-5 ">
      What is the business function in which you would you like to receive mentoring? &nbsp; <span className='font-black'>  Please only choose 2. </span>
        </p>
      <div className="px-8">
        
        <div className="flex flex-col gap-y-3">
          <div className="inline-flex gap-2">
            <div className=" ">
              <input
                name="check1"
                className=" checkbox "
                type="checkbox"
               // onChange={() => checkHander1()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Administration  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                className="checkbox "
                name="check2"
               //onClick={() => checkHander2()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Information Technology
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check3"
                className=" checkbox  "
               //onClick={() => checkHander3()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Finance  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Marketing 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Product Design
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
               Sales
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div >
      <p className=" 7 md:text-base text-sm py-5 ">
      Please select your present career level:
        </p>
      <div className="px-8">
        
        <div className="flex flex-col gap-y-3">
          <div className="inline-flex gap-2">
            <div className=" ">
              <input
                name="check1"
                className=" checkbox "
                type="checkbox"
               // onChange={() => checkHander1()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Individual Contributor 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                className="checkbox "
                name="check2"
               //onClick={() => checkHander2()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                New Manager / New Leader
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check3"
                className=" checkbox  "
               //onClick={() => checkHander3()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Experienced Manager / Experienced Leader 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                New Director  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Experienced Director  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Executive 
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div >
      <p className=" 7 md:text-base text-sm py-5 ">
      What is your next logical career level?  
        </p>
      <div className="px-8">
        
        <div className="flex flex-col gap-y-3">
          <div className="inline-flex gap-2">
            <div className=" ">
              <input
                name="check1"
                className=" checkbox "
                type="checkbox"
               // onChange={() => checkHander1()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Individual Contributor (does not ead others)
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                className="checkbox "
                name="check2"
               //onClick={() => checkHander2()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                New Manager / New Leader
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check3"
                className=" checkbox  "
               //onClick={() => checkHander3()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Experienced Manager / Experienced Leader 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                New Director  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
                {" "}
                Experienced Director  
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2">
            <div>
              <input
                type="checkbox"
                name="check4"
                className=" checkbox  "
               //onClick={() => checkHander4()}
              />
            </div>
            <div>
              <p className="md:text-[14px] text-[10px] text-black ">
              Executive 
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      

    </div>  </div>
</>
  )
}

export default EnrollModalBody