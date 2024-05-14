import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextComponent";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const {
    registerWithEmailPass,
    logInWithGoogle,
    updateUserProfile,
  } = useContext(AuthContext);

  const [toglePass, setTogglePass] = useState(true);
  const handleToggle = () => {
    setTogglePass(!toglePass);
  };

  function validatePassword(password) {
    return password.length >= 6;
  }

  const [registerError, setRegisterError] = useState("");

  const handleRegisterEmailPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    // console.log(email, password, name, photo);

    if (!validatePassword(password)) {
      setRegisterError("Please provide at least 6 digits password");
      toast.error("Please provide at least 6 digits password");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Please provide at least 1 uppercase latter");
      toast.error("Please provide at least 1 uppercase latter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setRegisterError("Please provide at least 1 lowercase latter");
      toast.error("Please provide at least 1 lowercase latter");
      return;
    }
    if (
      validatePassword(password) &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password)
    ) {
      setRegisterError("");
    }

    registerWithEmailPass(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            setRegisterError("");
            toast.success("Register Successful");
            navigate("/");
          })
          .catch((err) => {
            setRegisterError(err.message.split(":")[1]);
            toast.error(err.message.split(":")[1]);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.warn("Something wrong, Please try again");
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(() => {
        setRegisterError("");
        toast.success(`Registration successful`);
        navigate("/");
      })
      .catch((error) => {
        setRegisterError(error.message.split(":")[1]);
        toast.error(error.message.split(":")[1]);
      });
  };

  return (
    <div className="flex flex-col max-w-md p-6 rounded-xl sm:p-10 bg-blue-300 my-6 border-4 text-gray-100 mx-auto">
      <Helmet>
        <title>Vibe Palace | Register</title>
      </Helmet>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm text-blue-600">
          Register to join us and get experience
        </p>
      </div>
      <form onSubmit={handleRegisterEmailPass} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              User Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jhon Doe"
              className="w-full px-3 py-2 border rounded-md border-gray-700 text-blue-600"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-2 text-sm">
              Photo url
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Photo"
              className="w-full px-3 py-2 border rounded-md border-gray-700 text-blue-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user@email.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 text-blue-600"
            />
          </div>
          <div className="relative">
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type={`${toglePass ? "password" : "text"}`}
              name="password"
              id="password"
              placeholder={`${toglePass ? "*****" : "password"}`}
              className="w-full px-3 py-2 border rounded-md border-gray-700 text-blue-600"
            />
            <div className="absolute bottom-3 right-5">
              <FaEye className="text-xl text-blue-600" onClick={handleToggle} />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <input
              type="submit"
              value="Register"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600"
            />
          </div>
          <p className="text-red-500">{registerError}</p>
          <p className="px-6 text-sm text-center text-blue-600">
            Have an account?
            <Link
              to="/login"
              className="hover:underline font-bold text-violet-600">
              Log in
            </Link>
            .
          </p>
        </div>
      </form>
      <div className="flex  justify-center items-center my-4">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-info text-xl">
          <FcGoogle className="text-3xl" />
          Log In with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
