import Sidebar from "@/components/Sidebar/page";
import Message from "../components/Message/page"
import Usersection from "../components/UserSection/page"
export default function Home() {
  return (
    <div className="flex">
      {/*  <Message /> */}
      <Sidebar />
      <Usersection />

    </div>
  );
}
