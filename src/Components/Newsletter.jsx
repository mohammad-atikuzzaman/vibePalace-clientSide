

const Newsletter = () => {
  return (
    <div className="my-6 bg-blue-200 p-4 rounded-xl">
      <h2 className="font-bold  text-4xl text-center text-blue-600">Subscribe our Newsletter</h2>
      <div className="flex items-center mt-6">
        <div  className="space-y-4 font-semibold p-4">
          <p className="text-xl">
            🌟 Don't Miss Out! Subscribe for Updates, Deals & Exclusive Offers!
            🌟
          </p>
          <h3 className="text-2xl font-bold">Hey there, savvy traveler!</h3>
          <p>
            Ready to unlock a world of savings and adventure? Subscribe to our
            newsletter now and be the first to:
          </p>
          <p>📩 Receive exciting updates on the hottest destinations.</p>
          <p>💰 Access exclusive deals and limited-time offers.</p>
          <p>
            🎁 Get insider access to special promotions just for subscribers.
          </p>
          <p>
            Simply click on Subscribe now and join our community of wanderers.
            Your next unforgettable journey awaits!
          </p>
          <button className="btn btn-outline btn-info">Subscribe Now</button>
        </div>
        <div className="lg:w-[40%]">
          <img src="./newsletter.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;