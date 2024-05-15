import Swal from "sweetalert2";

const ContactUs = () => {
  return (
    <div id="contact" className="my-6">
      <h2 className="font-bold text-3xl text-center text-blue-600 my-6">Contact Us</h2>

      <div>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-blue-200">
          <div className="text-slate-500 space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-2xl">You can</p>
            <p className="">Send us message without register, what is in your mind ?</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 "
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message what is in your mind"
                className="w-full rounded-md focus:ring focus:ring-opacity-75focus:dark:ring-violet-600"></textarea>
            </div>
            <div className="col-span-full">
              <div className="flex items-center space-x-2">
                <button
                onClick={()=>{Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your message send success",
                  showConfirmButton: false,
                  timer: 1500,
                });}}
                  type="button"
                  className="px-4 py-2 border rounded-md dark:border-gray-800">
                  Send
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ContactUs;
