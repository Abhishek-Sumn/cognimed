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
    <div className="flex h-screen overflow-hidden bg-[#edf0f9] pr-[1.5%]">
      <div className="flex-1">
        <h1 className="m-[4%] -mb-[1.5%] text-black text-lg ">{name}</h1>
        <span className="flex items-center">
          <hr class="w-[40%] h-[1px] mx-auto my-4  border-0 rounded md:my-10 bg-gray-400" />
          <h1 className="text-gray-400">Today</h1>
          <hr class="w-[40%] h-[1px] mx-auto my-4  border-0 rounded md:my-10 bg-gray-400" />
        </span>
        <div className="h-screen overflow-y-auto p-4 pb-36">
          {message?.map((element, index) => (
            <div key={index}>
              <div className="flex justify-end mb-4 ">
                <div class="max-w-[40%]  w-auto flex flex-col leading-1.5 p-4 border-gray-200 rounded-l-2xl rounded-r-2xl rounded-br-none bg-[#33375a] justify-center">
                  <p class="text-[85%] font-normal text-white">
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
                  <div class="max-w-[40%]  w-auto flex flex-col leading-1.5 p-4 border-gray-200 rounded-l-xl rounded-r-xl rounded-bl-none bg-[#969cc7] justify-center ">
                    <p class="text-[85%] font-normal text-white">
                      {element.recieve}
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
      <footer class="p-4 absolute bottom-0 flex items-center justify-center w-[70%]">
        <div class="flex items-center justify-center bg-[#d8dbe4] w-full rounded-2xl border border-[#3a394b] m-[1%]">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type your message here..."
            value={input}
            class="w-full focus:outline-none focus:border-blue-500 text-black placeholder-black bg-[#d8dbe4] text-sm m-3"
            onKeyDown={handleKeyDown}
          />
          <SendHorizontal
            color="#9a9fb4"
            onClick={handleClick}
            className="mr-[2%] hover:cursor-pointer"
          />
        </div>
        <span className="bg-[#9a9fb4] h-12 w-12 rounded-full flex items-center justify-center">
          <Mic color="#FFFFFF" />
        </span>
      </footer>
    </div>
  );
};

export default Message;
