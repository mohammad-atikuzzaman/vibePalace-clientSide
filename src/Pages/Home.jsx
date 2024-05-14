import { useState } from "react";
import DisplayMap from "../Components/DisplayMap";
import FeatureRoom from "../Components/FeatureRoom";
import Newsletter from "../Components/Newsletter";
import Slider from "../Components/Slider";
import UserReviews from "../Components/UserReviews";
import { Helmet } from "react-helmet";

const Home = () => {
    const [display, setDisplay] = useState(true);
  return (
    <div>
      <Helmet>
        <title>Vibe Palace | Home</title>
      </Helmet>
      <Slider></Slider>
      <DisplayMap></DisplayMap>
      <Newsletter></Newsletter>
      <FeatureRoom></FeatureRoom>
      <UserReviews></UserReviews>
      <div className={display ? "block" : "hidden"}>
        <div className="w-full h-screen flex justify-center items-center bg-[#0a0a0a42] absolute top-0 left-0 z-10 ">
          <div className="w-[40%] bg-white relative rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="w-full h-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#1414147e] flex justify-center items-center">
              <div className="text-center  text-blue-400 space-y-6">
                <h2 className="font-black text-4xl  bg-[#4d424277] p-2 rounded-lg">
                  50% Discount
                </h2>
                <p className="font-bold text">
                  We are Giving 50% for first 50 customers
                </p>
                <button className="btn btn-outline btn-info">Book Now</button>
              </div>
            </div>
            <button
              onClick={() => setDisplay(!display)}
              className="bg-blue-200 border-4 border-white text-red-500 inline-block absolute top-2 right-2 w-10 h-10 rounded-full font-black hover:scale-105 hover:bg-blue-400 transition-all">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
