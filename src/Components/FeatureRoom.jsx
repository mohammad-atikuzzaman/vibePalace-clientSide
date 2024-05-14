import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeatureRoom = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/rooms").then((res) => {
      setRooms(res.data);
    });
  }, []);
  return (
    <div>
      <h2 className=" font-black text-4xl text-blue-600 text-center p-4 border-b-2 border-dashed border-blue-200  ">
        Featured Rooms
      </h2>
      <div className="my-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms.slice(0, 3).map((room) => (
          <div key={room._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-105 transition-all">
              <figure>
                <img
                  src={room.picture}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body bg-blue-200 rounded-b-xl">
                <h2 className="card-title">Room Size : {room.room_size}</h2>
                <p>{room.description}</p>
                <div className="card-actions">
                  <Link to={`/room/${room._id}`} className="btn btn-primary w-full">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureRoom;
