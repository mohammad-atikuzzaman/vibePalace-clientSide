import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextComponent";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { logInWithEmailPass, logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [toglePass, setTogglePass] = useState(true);
  const handleToggle = () => {
    setTogglePass(!toglePass);
  };

  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmailPass(email, password)
      .then(() => {
        setLoginError("");
        toast.success("Login Successful");
        navigate("/");
      })
      .catch(() => {
        setLoginError("Please Check your Email/password");
        toast.error("Please Check your Email/password");
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(() => {
        // setLoginError("");
        toast.success("Login Successful");
        navigate("/");
      })
      .catch(() => {
        setLoginError("Some thing wrong");
        toast.error("Some thing wrong");
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col max-w-md p-6 bg-blue-300  border-4 my-4 rounded-lg sm:p-10 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-blue-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-12">
          <div className="space-y-4">
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
                <FaEye
                  className="text-xl text-blue-600"
                  onClick={handleToggle}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                type="submit"
                value="Log In"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600"
              />
            </div>

            <p className="text-red-500">{loginError}</p>
            <p className="px-6 text-sm text-center text-blue-600">
              Don't have an account yet?
              <Link
                to="/register"
                className="hover:underline text-violet-600 font-bold">
                Sign up
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
    </div>
  );
};

export default Login;
