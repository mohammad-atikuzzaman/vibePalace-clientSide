import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import { toast } from "react-toastify";

const BookedRoom = ({ room, handleDisplay, handleDisplayReview }) => {
  // console.log(handleDisplay);
  // console.log(room.date);


  const handleCancel = () => {
      const date = moment(`${room.date}`, "YYYYMMDD").fromNow();
      const subDate = parseInt(date.split(" ")[1]);
      console.log(date,subDate)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if(subDate >= 1){
          axios
            .delete(`http://localhost:4000/deleteBookings/${room._id}`)
            .then((res) => {
              if (res.data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });

          axios
            .patch(`http://localhost:4000/bookRoom/${room._id}`, {
              availability: true,
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
        }else{
          toast.error("You can not cancel your booking")
        }
      }
    });
  };

  return (
    <tr>
      <td>
        <Link to={`/room/${room._id}`}>
          <img src={room.picture} alt="" className="w-44 rounded-lg" />
          <p className="font-semibold text-blue-600">
            Room Size : {room.room_size}
          </p>
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
        <button onClick={handleCancel} className="btn btn-error">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default BookedRoom;
