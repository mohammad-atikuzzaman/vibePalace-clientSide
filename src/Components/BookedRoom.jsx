import { Link } from "react-router-dom";

const BookedRoom = ({ room, handleDisplay, handleDisplayReview }) => {
  // console.log(handleDisplay);
  // console.log(room);

  return (
    <tr>
      <td>
        <Link to={`/room/${room._id}`}>
          <img src={room.picture} alt="" className="w-44 rounded-lg" />
          <p className="font-semibold text-blue-600">Room Size : {room.room_size}</p>
          <p>Price Per Night : {room.price_per_night}</p>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDisplay(room._id, room.date)}
          className="btn btn-info">
          Update Date
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDisplayReview(room._id)}
          className="btn btn-outline btn-warning">
          Give Review
        </button>
      </td>
      <td>
        <button className="btn btn-error">Cancel</button>
      </td>
    </tr>
  );
};

export default BookedRoom;
