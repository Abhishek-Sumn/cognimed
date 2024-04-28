"use client";
import { Plus, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import DocumentMessage from "../DocumentMessage/page"
const UserSection = () => {
  const [expand, setexpand] = useState(true);
  const [users, setUsers] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("/api/getdoc");
      const resdata = await res.json();
      setUsers(resdata);
      setSearchResults(resdata)
    };
    getUsers();
  }, []);

  const [selectedSection, setSelectedSection] = useState(0);

  const handleSectionClick = (section) => {
      setSelectedSection(section);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  return (
    <div className="flex bg-[#1b1c21] w-[100%]">
      <div
        className={`h-screen  pt-8   ${
          expand ? "w-[34%]" : "w-0 "
        } duration-300 relative`}
      >
        <ChevronLeft
          className={`absolute bg-[#31333f] rounded-full -right-3 top-[50vh] border cursor-pointer ${
            !expand && "rotate-180"
          }`}
          size="2.8vh"
          color="#FFFFFF"
          onClick={() => setexpand(!expand)}
        />
        <div className=" one-edge-shadow pb-1 ">
          <form
            class={`flex gap-2 items-center justify-center h-[6vh]  mt-[-2%] mb-4 ${
              !expand && "hidden"
            }`}
          >
            <div class="relative rounded-3xl ">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3  pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class=" border rounded-3xl md:w-[30vh] w-[10vh]  text-sm block ps-10 p-[0.7vh] bg-gray-700 border-gray-600 text-white"
                placeholder="Search ID"
                onChange={(e) => handleSearch(e)}
                required
              />
            </div>
            <div className="bg-white rounded-sm h-[65%] w-[9%]  flex items-center justify-center ">
              <Plus color="#506da1" className="p-[1px]" />
            </div>
          </form>
        </div>

        <div className={`w-[100%]  ${!expand && "hidden"}`}>
          {searchResults?.map((user, index) => (
              <section
              key={index}
              onClick={() => handleSectionClick(user?.id)}
              className={`h-[20%] mt-4 flex flex-col gap-2 p-2 pl-10 justify-center
              hover:cursor-pointer 
              ${selectedSection ==  user?.id  ? "bg-[#31333f]" : "bg-[#1b1c21] "}`}
              
              >
              <h1 className="text-md text-slate-100" >{user?.name}</h1>
            
              <h1 className="text-xs text-slate-400">{user.chats[0].send.substr(0,20)}</h1>
            </section>
          ))}
        </div>
      </div>
      <div className=" w-full">
        <DocumentMessage msgIndex = {selectedSection}/>
      </div>
    </div>
  );
};

export default UserSection;
