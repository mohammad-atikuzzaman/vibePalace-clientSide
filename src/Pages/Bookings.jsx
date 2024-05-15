import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BookedRoom from "../Components/BookedRoom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContextComponent";

import { Helmet } from "react-helmet";

const Bookings = () => {
  const { user, setLoading } = useContext(AuthContext);

  const [myBookedRooms, setMyBookedRooms] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayReview, setDisplayReview] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [reviewRoomId, setReviewRoomId] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [localDateTime, setLocalDateTime] = useState("");

  function stopLoading() {
    setLoading(false);
  }

  const handleDisplay = (roomsId, bookingDate) => {
    setDisplay(!display);
    setRoomId(roomsId);
    setBookingDate(bookingDate);
  };
  const handleDisplayReview = (roomsdId) => {
    setDisplayReview(!displayReview);
    setReviewRoomId(roomsdId);
    const d = new Date();
    const localTimeDate = d.toLocaleString();
    setLocalDateTime(localTimeDate);
  };

  useEffect(() => {
    axios
      .get(`https://vibepalace.vercel.app/myRooms/${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyBookedRooms(res.data);
      });
  }, [user?.email]);

  const handleReview = (e) => {
    e.preventDefault();
    const userName = user.displayName;

    const form = e.target;
    const rating = form.rating.value;
    const comment = form.comment.value;

    if (!comment) {
      return toast.warn("Please write your comment");
    }

    const myReview = {
      roomId: reviewRoomId,
      userName,
      rating,
      comment,
      time: localDateTime,
    };

    axios
      .post(`https://vibepalace.vercel.app/reviews`, myReview)
      .then((res) => {
        console.log(res.data);
        toast.success("Review send successful");
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(myReview);
  };

  const handleUpdateDate = (e) => {
    e.preventDefault();
    const Udate = e.target.date.value;
    if (!Udate) {
      return toast.warn("please pick a date");
    }

    axios
      .patch(`https://vibepalace.vercel.app/updateDate/${roomId}`, {
        date: Udate,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Date has updateed");
          setLoading(true);
          setTimeout(stopLoading, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(myBookedRooms)
  if (myBookedRooms.length === 0) {
    return (
      <div className="w-full h-[calc(100vh-8rem)] flex items-center justify-center">
        <Helmet>
          <title>Vibe Palace | Bookings</title>
        </Helmet>
        ;
        <h2 className="font-bold text-3xl text-center">
          You Dont have any Bookings
        </h2>
      </div>
    );
  }
  return (
    <div className="relative">
      <Helmet>
        <title>Vibe Palace | Bookings</title>
      </Helmet>
      <h2 className="font-black text-4xl text-blue-600 text-center py-6 border-b-2 border-dashed border-blue-300">
        My Bookings
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <tbody>
            {myBookedRooms.map((room) => (
              <BookedRoom
                key={room._id}
                room={room}
                handleDisplay={handleDisplay}
                handleDisplayReview={handleDisplayReview}></BookedRoom>
            ))}
          </tbody>
        </table>
      </div>

      <div className={display ? "block" : "hidden"}>
        <div className="w-full flex justify-center items-center h-screen absolute top-0 left-0">
          <div className="bg-blue-200 inline-block p-20 rounded-xl relative">
            <form
              onSubmit={handleUpdateDate}
              className=" space-y-2 flex flex-col items-center justify-center">
              <input
                type="date"
                name="date"
                defaultValue={bookingDate}
                className="p-4 rounded-md"
              />
              <br />
              <input
                type="submit"
                value="Confirm update"
                className="btn btn-outline btn-info"
              />
            </form>
            <button
              onClick={handleDisplay}
              className="w-8 h-8 bg-orange-200 border-4 text-blue-400 font-black border-blue-400 hover:scale-105 rounded-full absolute top-1 right-1">
              x
            </button>
          </div>
        </div>
      </div>

      <div className={displayReview ? "block" : "hidden"}>
        <div className="w-full flex justify-center items-center h-screen absolute top-0 left-0">
          <div className="bg-blue-200 inline-block p-20 rounded-xl relative">
            <form
              onSubmit={handleReview}
              className=" space-y-2 flex flex-col items-center justify-center">
              <label htmlFor="userName">
                <span className="font-bold text-xl text-blue-600">
                  User Name :{" "}
                </span>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  defaultValue={user?.displayName}
                  disabled
                  className="p-2 border-2 border-white rounded-lg"
                />
              </label>
              <label htmlFor="timeDate">
                <span className="font-bold text-xl text-blue-600">
                  {" "}
                  User Name :{" "}
                </span>
                <input
                  type="text"
                  name="timeDate"
                  id="timeDate"
                  defaultValue={localDateTime}
                  disabled
                  className="p-2 border-2 border-white rounded-lg"
                />
              </label>
              <br />
              <label htmlFor="rating">
                <span className="font-bold text-xl text-blue-600">
                  Give Rating :{" "}
                </span>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  defaultValue={1}
                  min={1}
                  max={5}
                  className="p-2 rounded-md border-2 border-blue-300"
                />
              </label>
              <textarea
                name="comment"
                id="comment"
                className="w-full p-1 rounded-lg"
                placeholder="Your  Comment here"></textarea>
              <br />
              <input
                type="submit"
                value="Send Feedback"
                className="btn btn-outline btn-info"
              />
            </form>
            <button
              onClick={handleDisplayReview}
              className="w-8 h-8 bg-orange-200 border-4 text-blue-400 font-black border-blue-400 hover:scale-105 rounded-full absolute top-1 right-1">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
