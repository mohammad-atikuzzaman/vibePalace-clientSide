import axios from "axios";
import { useEffect, useState } from "react";
import RoomInRooms from "../Components/RoomInRooms";

const Rooms = () => {
  const [displayRooms, setDisplayRooms]= useState([])
  // console.log(displayRooms)
  useEffect(() => {
    axios.get("http://localhost:4000/rooms").then((res) => {
      setDisplayRooms(res.data)
    });
  }, []);

  const handleSort=()=>{
    axios.get("http://localhost:4000/roomsSort")
    .then(res =>{
      setDisplayRooms(res.data)
    })
  }

  return (
    <div className="my-6">
      <h2 className="font-bold text-4xl text-blue-600 my-6 text-center">Rooms</h2>
        <button onClick={handleSort} className="btn">btn</button>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          displayRooms.map(room => <RoomInRooms key={room._id} room={room}></RoomInRooms>)
        }
      </div>
    </div>
  );
};

export default Rooms;
