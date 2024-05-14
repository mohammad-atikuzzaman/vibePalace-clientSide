import { Link } from "react-router-dom";

const RoomInRooms = ({room}) => {
  // console.log(room)
  return (
    <div className="card rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all">
      <Link to={`/room/${room._id}`}>
        <img src={room.picture} alt="Shoes" className="w-full h-full"/>
      </Link>
    </div>
  );
};

export default RoomInRooms;