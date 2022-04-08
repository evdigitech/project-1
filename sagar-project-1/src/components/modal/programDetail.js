import React from "react";
import { IoMdClose } from "react-icons/io";
import Footer from "../../../components/modal/footer";
import ModalComponent from "../../../components/modal/modal";

function ProgramDetail() {
  return (
    <>
      <div className="justify-center   items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 my-auto bg-[#F8F8FC]  rounded-t">
              <h3 className="md:text-base text-sm my-auto ">Program details</h3>
              <button className="  ml-auto">
                <IoMdClose className="text-[#0F69AF] w-5 h-5 font-black" />
              </button>
            </div>

            <div className="md:p-20 px-2 py-6 ">
              <p className="md:text-base text-sm pt-3 font-black">
                Are you sure you want to leave this program?
              </p>
            </div>

            <div>
              <div>Diversity, Equity & Inclusion</div>
              <div className="flex">
                <div>
                  <div>Mentees enrolled</div>
                  <div>54</div>
                </div>
                <div>
                  <div>Mentors enrolled</div>
                  <div>12</div>
                </div>
              </div>
              <div>
                <p>Description</p>
                <div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </div>
                  <div>Neque diam risus tellus malesuada sed sagittis. </div>
                  <div>
                    Enim, dolor tortor massa vestibulum libero vitae massa.{" "}
                  </div>
                  <div>Etiam purus consectetur ultrices in sagittis. </div>
                </div>
              </div>
            </div>

            <div>
              <div className=" flex justify-between float-right  py-[15px] px-4 rounded-md">
                <div className=" gap-3 inline-flex">
                  <button
                    className="h-[40px] w-[100px] bg-[#E9E9ED] text-[#0F69AF] font-black  text-center rounded-md "
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="h-[40px]  w-[100px] bg-[#0F69AF] text-white font-black text-center rounded-md"
                  >
                    Leave Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default ProgramDetail;
