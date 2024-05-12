import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-blue-300">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="#1D4ED8"
                viewBox="0 0 24 24"
                stroke="#1D4ED8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/bookings">My Bookings</Link>
              </li>
              <li>
                <Link to="/#">About Us</Link>
              </li>
              <li>
                <Link to="/#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-3xl font-bold text-blue-700 drop-shadow-md">
            <span className="text-indigo-600"> Vibe</span> Palece
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-blue-600 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/bookings">My Bookings</Link>
            </li>
            <li>
              <Link to="/#">About Us</Link>
            </li>
            <li>
              <Link to="/#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-outline btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
