import React, { useState } from 'react'
import { BsArrowUpCircle, BsCardImage } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import Toggle from '../../../components/toggle';
import { setPreofileImage } from '../../../redux/actions';

function ProfileCard(props) {
  const { formik} = props;
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [size, setSize] = useState();
  const [showModal, setShowModal] = React.useState(false);


const dispatch = useDispatch()

  const profileHandleChange = (e) => {
    if (e.target.files[0].size >= 4e6) {
      setSize(
        "* This image is too big. Please choose a image smaller than 4mb"
      );
    } else {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0],
        });
      }
    }
  };
  dispatch(setPreofileImage(image.preview));
  return (
    <div> <div className=" md:flex flex-nowrap   justify-between">
    <div className="sm:inline-flex justify-between md:text-left text-center  ">
      <div className="relative  inline-block  rounded-full bg-[#E9E9ED] h-[100px] w-[100px]">
        {image.preview ? (
          <img
            className=" mx-auto rounded-full inline-block  h-[100px] w-[100px]"
            src={image.preview}
            alt="."
          />
        ) : (
          ""
        )}
        <span
          className="bgblue rounded-full absolute bottom-0 right-0 inline-block h-[30px] w-[30px]"
          onClick={() => setShowModal(true)}
        >
          <button className=" " type="button">
            <BsCardImage className=" m-auto md:ml-[7px] mt-[7px] text-white " />
          </button>
        </span>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 lg:w-[650px] h-[400px]  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" bg-[#F8F8FC] flex items-start justify-between py-2 px-5 rounded-t">
                  <h3 className=" font-semibold">
                    Change Your Profile Picture
                  </h3>
                  <button
                    className="  background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <IoMdClose className="textblue w-5 h-5" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto  text-center">
                  <label className="bgblue mt-[84px] text-white inline-flex cursor-pointer py-3 px-4  rounded-md ">
                    <BsArrowUpCircle  className="text-white h-5 w-5 mr-2 mt-0.5" />
                    Upload Picture
                    <input
                      type="file"
                      // accept="image/*"
                      className="hidden"
                      name="image"
                      // onChange={profileHandleChange}
                      {...formik.getFieldProps(
                        "personalInfoCountry"
                      )}
                      // required
                      onChange={(e) => {
                        profileHandleChange(e);

                        formik.setFieldValue(
                          "image",
                          e.target.value
                        );
                      }}
                    />
                  </label>
                  <p className="text-sm mt-3 textrequired ">
                    {size}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6  rounded-b">
                  <label className="   inline-block rounded-md bg-[#E9E9ED] h-[100px] md:m-0 m-auto w-[100px]  ">
                    {image.preview ? (
                      <img
                        className=" mx-auto rounded-md inline-block  h-[100px] w-[100px]"
                        src={image.preview}
                        alt="."
                      />
                    ) : (
                      ""
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="mx-8  ">
        <div className=" md:inline-flex text-sm gap-4 my-2 md:my-0  text-[#7D7D89]  ">
          <div className="my-2 md:my-0">
            <p>First Name</p>
            <input
              name="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
              onChange={formik.handleChange}
              className="bg-[#F8F8FC] xl:w-[136px] lg:w-[149px] md:w-[159px] sm:w-[264px] w-[184px] h-10 rounded-md focus:outline-none text-black"
            />
          </div>
          <div className="my-2 md:my-0">
            <p>Last Name</p>
            <input
              name="lastName"
              type="text"
              {...formik.getFieldProps("lastName")}
              onChange={formik.handleChange}
              className="bg-[#F8F8FC] xl:w-[136px] lg:w-[149px] md:w-[159px] sm:w-[264px] w-[184px] h-10 rounded-md focus:outline-none text-black"
            />
          </div>
        </div>
        <p className="font-normal text-base md:mb-0 mb-2 mt-[15px]">
          Sales Head,Victoria,Australia
        </p>
      </div>
    </div>

    <div className="flex justify-between text-[#7D7D89] mt-auto ">
      <label htmlFor="toggle2" className="text-xs px-4  ">
        Import from Linkedin
      </label>
     <Toggle {...formik.getFieldProps("toggle2")}
          onChange={formik.handleChange}/>
    </div>
  </div></div>
  )
}

export default ProfileCard