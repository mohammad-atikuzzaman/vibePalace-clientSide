import axios from "axios";
import { useEffect, useState } from "react";
import Review from "./Review";

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("https://vibepalace.vercel.app/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div>
      <h2 className="font-bold text-4xl text-center text-blue-600 py-4 border-b-2 border-dashed border-blue-300">
        Users Reviews
      </h2>

      <div>
        {reviews.length === 0 ? (
          <div className="w-full py-10 flex justify-center items-center bg-blue-200 my-4">
            <h2 className="text-3xl font-bold text-center">
              There are no Review available
            </h2>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
