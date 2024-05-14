import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="relative">
      <NavBar></NavBar>
      <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />


    </div>
  );
}

export default App;
