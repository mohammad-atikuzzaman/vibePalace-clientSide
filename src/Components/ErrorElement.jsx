import { Link } from "react-router-dom";
// import errorGif from "../../public/giphy (1).gif";

const ErrorElement = () => {
  return (
    <section className="flex items-center bg-blue-300 h-screen sm:p-16 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnMxN3RqOTVmbjg4azFvdnBsa3I5YTZvbzd5cXhheGw2aXh2cHliMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn8cc5IQjkWpJhm/giphy.gif"
          className="rounded-full p-4 border-4 w-[70%]"
        />
        <p className="text-3xl">Sorry, we couldn't find this page.</p>
        <p className="mt-4 mb-8 ">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-blue-400 text-white">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorElement;
