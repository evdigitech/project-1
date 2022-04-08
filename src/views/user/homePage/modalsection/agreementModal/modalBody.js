import React, { useEffect, useState } from "react";
import { SiAdobeacrobatreader } from "react-icons/si";

const data = [
  {
    mentee: "Mac Paulson",
    mentor: "Jennifer Armstrong",
    meetingFrequencyAndPrefrence: "Monthly",
    menteeLearningStyle: "Personality assesment",
    menteeStrengths: "Public speking, samll group communication",
    termsCondition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis dolore natus nobis nemo suscipit, numquam, mollitia molestias nulla autem eaque, dicta omnis aliquam! Labore asperiores pariatur ipsam fuga error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis dolore natus nobis nemo suscipit, numquam, mollitia molestias nulla autem eaque, dicta omnis aliquam! Labore asperiores pariatur ipsam fuga error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis dolore natus nobis nemo suscipit, numquam, mollitia molestias nulla autem eaque, dicta omnis aliquam! Labore asperiores pariatur ipsam fuga error.",
  },
  {
    mentee: "Julia Campbell",
    mentor: "Jennifer Armstrong",
    meetingFrequencyAndPrefrence: "Monthly",
    menteeLearningStyle: "Personality assesment",
    menteeStrengths: "Public speking, samll group communication",
    termsCondition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis dolore natus nobis nemo suscipit, numquam, mollitia molestias nulla autem eaque, dicta omnis aliquam! Labore asperiores pariatur ipsam fuga error.",
  },
  {
    mentee: "Robin Parksonll",
    mentor: "Jennifer Armstrong",
    meetingFrequencyAndPrefrence: "Monthly",
    menteeLearningStyle: "Personality assesment",
    menteeStrengths: "Public speking, samll group communication",
    termsCondition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis dolore natus nobis nemo suscipit, numquam, mollitia molestias nulla autem eaque, dicta omnis aliquam! Labore asperiores pariatur ipsam fuga error.",
  },
  {
    mentee: "Anne Lawrence",
    mentor: "Jennifer Armstrong",
    meetingFrequencyAndPrefrence: "Monthly",
    menteeLearningStyle: "Personality assesment",
    menteeStrengths: "Public speking, samll group communication",
    termsCondition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis dolore natus nobis nemo suscipit, numquam, mollitia molestias nulla autem eaque, dicta omnis aliquam! Labore asperiores pariatur ipsam fuga error.",
  },
];

function ModalBody({ cardData }) {
  const [dataValue, setDataValue] = useState([]);
  const [flag, setFlag] = useState([]);
  console.log("cardData", cardData.name)
  useEffect(() => {
    setDataValue(cardData);
    const filterState = data.filter((item) => item.mentee === cardData.name);
    setFlag(filterState);
  }, []);
  return (
    <>
      {flag.map((person, index) => (
        <>
          <div className=" px-10 py-5 ">
            <div key={index} className="grid grid-cols-2 gap-y-10 relative">
              <div>
                <h3 className="text-[#7D7D89] ">Mentee</h3>
                <p>{person.mentee}</p>
              </div>
              <div>
                <h3 className="text-[#7D7D89] ">Mentor</h3>
                <p>{person.mentor}</p>
              </div>
              <div>
                <h3 className="text-[#7D7D89] ">
                  Meeting frequency and prefrence
                </h3>
                <p>{person.meetingFrequencyAndPrefrence}</p>
              </div>
              <div>
                <h3 className="text-[#7D7D89] ">
                  Mentee's learning style (ie. hand on, visual, virtual)
                </h3>
                <p>{person.menteeLearningStyle}</p>
              </div>
              <div className="col-span-2">
                <h3 className="text-[#7D7D89] ">Mentee's strengths</h3>
                <p>{person.menteeStrengths}</p>
              </div>
              <div className="col-span-2">
                <h3 className="font-black ">Terms & Conditions</h3>
                <p>{person.termsCondition}</p>
              </div>
              <button
                className="text-blue-400 bg-[#F8F8FC] h-10 w-auto absolute top-0 -right-[7px] inline-block "
                type="button"
              >
                <SiAdobeacrobatreader className="h-5 w-10" />
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default ModalBody;
