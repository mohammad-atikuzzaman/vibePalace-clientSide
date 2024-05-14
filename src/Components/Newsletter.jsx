

const Newsletter = () => {
  return (
    <div className="my-6 bg-blue-200 p-4 rounded-xl">
      <h2
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="font-bold  text-4xl text-center text-blue-600">
        Subscribe our Newsletter
      </h2>
      <div className="flex items-center mt-6 flex-col md:flex-row">
        <div className="space-y-4 font-semibold p-4">
          <p
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-xl">
            🌟 Don't Miss Out! Subscribe for Updates, Deals & Exclusive Offers!
            🌟
          </p>
          <h3
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-2xl font-bold">
            Hey there, savvy traveler!
          </h3>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            Ready to unlock a world of savings and adventure? Subscribe to our
            newsletter now and be the first to:
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            📩 Receive exciting updates on the hottest destinations.
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            💰 Access exclusive deals and limited-time offers.
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            🎁 Get insider access to special promotions just for subscribers.
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            Simply click on Subscribe now and join our community of wanderers.
            Your next unforgettable journey awaits!
          </p>
          <button
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="btn btn-outline btn-info">
            Subscribe Now
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:w-[40%]">
          <img src="./newsletter.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;