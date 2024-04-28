"use client";
import React, { useState, useEffect } from "react";

const Message = (msgIndex) => {
  const [message, setMessage] = useState();
  /*  [
    { send: "lorem send", recieve: "lorem recieve" },
    { send: "lorem2 send", recieve: "lorem 2 recieve" },
  ] */
  const [input, setInput] = useState("");
  const [ren, setRen] = useState(false);

  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getchats");
      const data = await res.json();
      setUsers(data);
      if (data.length > 0) {
        setMessage(data[0]?.chats);
      }
    };
    fetchData();
  }, []);
  
useEffect(() => {
    if (msgIndex !== undefined && users?.length > 0) {
      setMessage(users[msgIndex.msgIndex]?.chats);
    }
  }, [msgIndex, users]); 
  

  const handleClick = () => {
    if (input.length > 0) {
      setMessage([...message, { send: input, recieve: "" }]);
      setInput("");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#212445]">
      <div className="flex-1">
        <div className="h-screen overflow-y-auto p-4 pb-36">
          {message?.map((element, index) => (
            <>
              <div className="flex justify-end mb-4 ">
                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                  <p>{element.send}</p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                  <img
                    src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="My Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
              {element.recieve.length > 0 ? (
                <div className="flex mb-4 cursor-pointer">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                    <img
                      src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                    <p className="text-gray-700">{element.recieve}</p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
      <footer class="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-auto flex items-center justify-center ">
        <div class="flex items-center">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message..."
            value={input}
            class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 text-black"
          />
          <button
            class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
            onClick={handleClick}
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Message;
