import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeatureRoom = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("https://vibepalace.vercel.app/rooms").then((res) => {
      setRooms(res.data);
    });
  }, []);
  return (
    <div>
      <h2
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className=" font-black text-4xl text-blue-600 text-center p-4 border-b-2 border-dashed border-blue-200  ">
        Featured Rooms
      </h2>
      <div className="my-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms.slice(0, 3).map((room) => (
          <div key={room._id}>
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-all">
              <figure>
                <img
                  data-aos="flip-up"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1600"
                  data-aos-easing="ease-in-out"
                  src={room.picture}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body bg-blue-200 rounded-b-xl hover:bg-blue-300">
                <h2
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  className="card-title">
                  Room Size : {room.room_size}
                </h2>
                <p
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                  {room.description}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  className="card-actions">
                  <Link
                    to={`/room/${room._id}`}
                    className="btn btn-primary w-full">
                    Book Now
                  </Link>
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
