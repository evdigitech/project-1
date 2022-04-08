import { React, useState } from "react";
import DeleteItem from "./deleteItem";

import InboxBody from "./inboxBody";
import NavBar from "./navBar";
import SendItem from "./sendItem";

function MailPage() {
  const [flag, setFlag] = useState();
  const activeHandler = (values) => {
    setFlag(values);
  };

  return (
    <>
      <div>
        <NavBar />
        <div className="grid grid-cols-12 md:px-[50px] sm:p-6 p-3 py-9 gap-6">

        <div className="  lg:col-span-4 col-span-12">
          <div className=" flex md:flex-col flex-row justify-between gap-3 text-[#0F69AF]">
            <div
              className={
                flag === "Inbox"
                  ? "  bg-[#F8F8FC]  font-black px-5 py-3 border-b-2 border-[#E9E9ED]"
                  : flag === "SendItem"
                  ? "px-5 py-3 md:border-b-2 border-[#E9E9ED]"
                  : flag === "DeleteItem"
                  ? "px-5 py-3 md:border-b-2 border-[#E9E9ED]"
                  : "  bg-[#F8F8FC] md:border-b-2 border-[#E9E9ED]  font-black px-5 py-3"
              }
            >
              <div className="">
                <p
                  className=" cursor-pointer  "
                  value="Inbox"
                  onClick={() => activeHandler("Inbox")}
                >
                  Inbox
                </p>
              </div>
            </div>
            {/* <hr /> */}
            <div
              className={
                flag === "SendItem"
                  ? "  bg-[#F8F8FC]  font-black px-5 py-3 border-b-2 border-[#E9E9ED]"
                  : flag === "Inbox"
                  ? "px-5 py-3 md:border-b-2 border-[#E9E9ED]"
                  : flag === "DeleteItem"
                  ? "px-5 py-3 md:border-b-2 border-[#E9E9ED]"
                  : "  px-5 py-3 md:border-b-2 border-[#E9E9ED]"
              }
            >
              <div className="">
                <p
                  className=" cursor-pointer "
                  value="SendItem"
                  onClick={() => activeHandler("SendItem")}
                >
                  Send Item
                </p>
              </div>
            </div>{" "}
            {/* <hr /> */}
            <div
              className={
                flag === "DeleteItem"
                  ? "  bg-[#F8F8FC] font-black px-5 py-3 border-b-2 border-[#E9E9ED]"
                  : flag === "SendItem"
                  ? "px-5 py-3 md:border-b-2 border-[#E9E9ED]"
                  : flag === "Inbox"
                  ? "px-5 py-3 md:border-b-2 border-[#E9E9ED]"
                  : " px-5 py-3 md:border-b-2 border-[#E9E9ED]"
              }
            >
              <div className="">
                <p
                  className=" cursor-pointer "
                  value="DeleteItem"
                  onClick={() => activeHandler("DeleteItem")}
                >
                  Delete Item
                </p>
              </div>
            </div>
          </div>{" "}
          {/* <hr /> */}
        </div>

              
          <div className="lg:col-span-8 col-span-12  ">
            {flag === "Inbox" ? (
              <InboxBody />
            ) : flag === "SendItem" ? (
              <SendItem />
            ) : flag === "DeleteItem" ? (
              <DeleteItem />
            ) : (
              <InboxBody />
            )}
          </div>
        </div>

      </div>
    </>
  );
}

export default MailPage;
