const Slider = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden my-8 relative">
      <video className="w-full" muted autoPlay loop>
        <source src="./hottlevid.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-full bg-[#3e5c8357] flex justify-center items-center absolute top-0 left-0">
        <div className="text-center space-y-6">
          <h2 className="font-black text-3xl text-blue-600 md:text-4xl lg:text-6xl">Stay & Play: Your Gateway to Premier Hotel Experiences</h2>
          <p className="font-bold leading-4 lg:leading-6 md:text-xl lg:text-2xl px-4 text-gray-400">
            Discover unparalleled comfort and luxury with our hotel booking
            platform. Explore a world of top-notch accommodations, seamless
            reservations, and exclusive deals, ensuring unforgettable stays
            tailored just for you..
          </p>
          <a href="#" className="btn btn-outline btn-primary font-bold">
            About us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
