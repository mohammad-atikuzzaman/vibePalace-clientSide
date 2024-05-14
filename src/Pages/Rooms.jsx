import axios from "axios";
import { useEffect, useState } from "react";
import RoomInRooms from "../Components/RoomInRooms";
import { Helmet } from "react-helmet";

const Rooms = () => {
  const [displayRooms, setDisplayRooms] = useState([]);
  // console.log(displayRooms)
  useEffect(() => {
    axios.get("http://localhost:4000/rooms").then((res) => {
      setDisplayRooms(res.data);
    });
  }, []);

  const handleSort = () => {
    axios.get("http://localhost:4000/roomsSort").then((res) => {
      setDisplayRooms(res.data);
    });
  };

  return (
    <div className="my-6">
      <Helmet>
        <title>Vibe Palace | Rooms</title>
      </Helmet>
      <h2 className="font-bold text-4xl text-blue-600 my-6 text-center">
        Rooms
      </h2>
      {/* <button onClick={handleSort} className="btn">btn</button> */}
      <div className="flex justify-end">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1 bg-blue-400">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border-2">
            <li>
              <a className="bg-slate-500 text-white">
                <button onClick={handleSort}>Price -low to high</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayRooms.map((room) => (
          <RoomInRooms key={room._id} room={room}></RoomInRooms>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
