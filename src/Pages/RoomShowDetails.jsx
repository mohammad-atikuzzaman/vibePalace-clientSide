import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextComponent";
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'

const RoomShowDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [displayAviliblity, setDisplayAvilibility] = useState("")
  const [roomInfo, setRoomInfo] = useState("");
  const {
    picture,
    description,
    price_per_night,
    room_size,
    special_offers,
  } = roomInfo;

  useEffect(() => {
    axios.get(`http://localhost:4000/room/${id}`).then((res) => {
      setRoomInfo(res.data);
      setDisplayAvilibility(res.data.availability)
    });
  }, []);

  const setBookingData = {
    email: user?.email,
    name: user?.displayName,
    picture,
    description,
    price_per_night,
    room_size,
    special_offers,
  };

  // console.log(setBookingData);
  // console.log(roomInfo);

  const handleBooking = () => {
    if (user) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Book it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post("http://localhost:4000/bookings", setBookingData)
            .then((res) => {
              console.log(res.data);
              Swal.fire({
                title: "Booked!",
                text: "The room has been booked.",
                icon: "success",
              });
            })
            .catch((err) => console.log(err));

          axios
            .patch(`http://localhost:4000/bookRoom/${id}`, {
              availability: false,
            })
            .then((res) => {
              setDisplayAvilibility(false)
              console.log(res)
            })
            .catch((err) => console.log(err));
        }
      });
    } else {
      navigate("/login");
    }
  };


  return (
    <div>
      <div className="p-6 hover:scale-95 transition-all">
        <img src={picture} alt="" className=" rounded-xl" />
      </div>

      <p className="font-semibold text-lg text-blue-600">{description}</p>
      <p className="font-bold text-xl"> Per night: $ {price_per_night} USD</p>
      <div className="font-bold text-xl">
        Availability:{" "}
        {displayAviliblity ? (
          <p className="text-green-500 bg-blue-200 inline-block rounded-lg p-[2px]">
            Available
          </p>
        ) : (
          <p className="text-red-500 bg-blue-200 inline-block rounded-lg p-[2px]">
            Unavailable
          </p>
        )}
      </div>
      <p className="font-bold text-xl text-blue-600">Room size: {room_size}</p>
      <div className="font-semibold ">
        {special_offers ? (
          <div>
            <span className="font-bold"> Special offers: </span>{" "}
            {special_offers}
          </div>
        ) : (
          ""
        )}
      </div>

      <div>
        <button
          onClick={handleBooking}
          className="btn w-full bg-blue-500 font-bold text-white my-6"
          disabled={!displayAviliblity}>
          Book Now
        </button>
      </div>
      <hr />
      <div>
        <h2>Reviews: </h2>
      </div>
    </div>
  );
};

export default RoomShowDetails;
