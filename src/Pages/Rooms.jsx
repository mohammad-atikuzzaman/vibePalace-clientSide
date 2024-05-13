import axios from "axios";
import { useEffect, useState } from "react";
import RoomInRooms from "../Components/RoomInRooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/rooms").then((res) => {
      setRooms(res.data);
    });
  }, []);
  return (
    <div className="my-6">
      <h2 className="font-bold text-4xl text-blue-600 my-6 text-center">Rooms</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          rooms.map(room => <RoomInRooms key={room._id} room={room}></RoomInRooms>)
        }
      </div>
    </div>
  );
};

export default Rooms;
