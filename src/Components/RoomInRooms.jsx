import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RoomInRooms = ({room}) => {
  // console.log(room)
  return (
    <div className="card rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all">
      <Link to={`/room/${room._id}`}>
        <img src={room.picture} alt="Shoes" className="w-full h-full"/>
      </Link>
        {/* <p>{room.price_per_night}</p> */}
    </div>
  );
};
RoomInRooms.propTypes ={
  room: PropTypes.object,
}

export default RoomInRooms;