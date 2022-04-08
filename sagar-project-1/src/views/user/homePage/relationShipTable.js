import React, { useState } from "react";
import ProfileDetailModal from "./modalsection/profileDetailModal";

const people = [
  {
    name: "Jane Cooper",
    Designation: "Regional Paradigm Technician",
    country: "texas",
    role: "Mentor",
    startDate: "05/02/2021",
    endDate: "11/31/2021",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Robin Parkson",
    Designation: "Design Lead",
    country: "Singapore",
    role: "Mentor",
    startDate: "02/05/2021",
    endDate: "12/31/2021",
    avatar: "https://avatars.githubusercontent.com/u/1071625?v=4",
  },
  {
    name: "Anne Lawrence",
    Designation: "COO",
    country: "Canada",
    role: "Mentor",
    startDate: "08/18/2020",
    endDate: "06/31/2021",
    avatar:
      "https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg",
  },
];
function RelationShipTable() {
  const [table, setTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const tableHandler = (value) => {
    console.log("table", value)
    setTableData(value)
    setTable(true);
  };

  const closeProfileDetailModal = () => {
    setTable(false);
  };

  return (
    <>
      <ProfileDetailModal
        showmodal2={table}
        closeProfileDetailModal={closeProfileDetailModal}
        tableData={tableData}
      />

      <div className="mt-20 focus:outline-none">
        <h1 className="text-lg font-black my-6">Previous Relationship</h1>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto scrollNone lg:-mx-8">
            <div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
              <div className=" xl:overflow-hidden overflow-x-auto  sm:rounded-lg">
                <table className="w-full ">
                  <thead className=" font-black">
                    <tr>
                      <th scope="col" className="px-3 py-3 text-left ">
                        Full Name
                      </th>
                      <th scope="col" className="px-3 py-3 text-left ">
                        Role
                      </th>
                      <th scope="col" className="px-3 py-3 text-left ">
                        Designation, Country
                      </th>
                      <th scope="col" className="px-3 py-3 text-left ">
                        Start Date
                      </th>
                      <th scope="col" className="px-3 py-3 text-left ">
                        End Date
                      </th>
                      <th scope="col" className=" px-3 py-3 ">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white  ">
                    {people.map((person, index) => (
                      <tr
                        key={index}
                        className="ring-gray-200 ring-2 ring-offset-2 border-x-4 border-gray-200  "
                      >
                        <td className="px-3 py-2 whitespace-nowrap min-w-[180px]">
                          <div className="flex gap-3 items-center">
                            <div className="flex-shrink-0 ">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={person.avatar}
                                alt=""
                              />
                            </div>
                            <div className="">
                              <div className="text-sm font-medium text-gray-900 w-full">
                                {person.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                          {person.role}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                          {person.Designation}, {person.country}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm  text-gray-500">
                          {person.startDate}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                          {person.endDate}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="text-[#0F69AF] font-extrabold hover:text-[#0F69AF]"
                            onClick={(value) => tableHandler(person)}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelationShipTable;
