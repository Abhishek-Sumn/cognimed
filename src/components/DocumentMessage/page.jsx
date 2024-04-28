"use client";
import React, { useState, useEffect } from "react";
import { SendHorizontal, Mic } from "lucide-react";

const Message = (msgIndex) => {
  const [message, setMessage] = useState();
 
  const [input, setInput] = useState("");
  const [name, setName] = useState();

  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getdoc");
      const data = await res.json();
      setUsers(data);
      if (data.length > 0) {
        setMessage(data[0]?.chats);
        setName(data[0]?.name);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (msgIndex !== undefined && users?.length > 0) {
      setMessage(users[msgIndex.msgIndex]?.chats);
      setName(users[msgIndex.msgIndex]?.name);
    }
  }, [msgIndex, users]);

  const handleClick = () => {
    if (input.length > 0) {
      setMessage([...message, { send: input, recieve: "" }]);
      setInput("");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setMessage([...message, { send: input, recieve: "" }]);
      setInput("");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-transition pr-[1.5%]">
      <div className="flex-1">
        <h1 className="m-[4%] -mb-[1.5%]">{name}</h1>
        <span className="flex items-center">
          <hr class="w-[40%] h-[1px] mx-auto my-4  border-0 rounded md:my-10 bg-gray-400" />
          <h1 className="text-gray-400">Today</h1>
          <hr class="w-[40%] h-[1px] mx-auto my-4  border-0 rounded md:my-10 bg-gray-400" />
        </span>
        <div className="h-screen overflow-y-auto p-4 pb-36">
          {message?.map((element, index) => (
            <>
              <div className="flex justify-end mb-4 ">
                <div class="max-w-[40%]  w-auto flex flex-col leading-1.5 p-4 border-gray-200 rounded-l-2xl rounded-r-2xl rounded-br-none bg-[#2a2e3c] justify-center">
                  <p class="text-[85%] font-normal text-[#9da9d7]">
                    {element.send}
                  </p>
                </div>
                <div className=" flex  ml-2 items-end">
                  <span className="bg-[#363a46] h-12 w-12 rounded-full mt-2 mb-4"></span>
                </div>
              </div>

              {element.recieve.length > 0 ? (
                <div className="flex mb-4 ">
                  <div className=" flex mr-2 justify-end items-end">
                    <span className=" h-16 w-16  mt-2 ">
                      <img src="logo.png" alt="" />
                    </span>
                  </div>
                  <div class="max-w-[40%]  w-auto flex flex-col leading-1.5 p-4 border-gray-200 rounded-l-xl rounded-r-xl rounded-bl-none bg-[#323659] justify-center ">
                    <p class="text-[85%] font-normal text-white">
                      {element.recieve}
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
      <footer class="p-4 absolute bottom-0 flex items-center justify-center w-[70%]">
        <div class="flex items-center justify-center bg-[#3a394b] w-full rounded-2xl border border-[#3a394b] m-[1%]">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type your message here..."
            value={input}
            class="w-full focus:outline-none focus:border-blue-500 text-white bg-[#3a394b] text-sm m-3"
            onKeyDown={handleKeyDown}
          />
          <SendHorizontal
            onClick={handleClick}
            className="mr-[2%] hover:cursor-pointer"
          />
        </div>
        <span className="bg-[#2f3451] h-12 w-12 rounded-full flex items-center justify-center">
          <Mic />
        </span>

        {/*   <div>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div> */}
        {/*    <span className="bg-[#363a46] h-12 w-12 rounded-full mt-2 mb-4"></span> */}
      </footer>
    </div>
  );
};

export default Message;
