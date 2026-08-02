import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Modal from "../components/Modal";
import travelImage from "../assets/homepage.jpg";

function Home() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div className="h-screen w-full relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${travelImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-center px-8 py-5 text-white">
        <h2 className="text-xl font-bold">Trip Planner</h2>

        <div className="flex gap-4">
          <button
            onClick={() => setLogin(true)}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
          >
            Login
          </button>

          <button
            onClick={() => setSignup(true)}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
          >
            Signup
          </button>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-[80vh] px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Smart Trip Planner 🌍
        </h1>

        <p className="text-xl mb-4 drop-shadow-md">
          Plan your perfect trip easily
        </p>

        <p className="text-sm mb-6 opacity-80">
          Discover destinations • Choose hotels • Save your trips
        </p>
      </div>

      {/* Login Modal */}
      {login && (
        <Modal close={() => setLogin(false)}>
          <Login />
          <p className="mt-2 text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setLogin(false);
                setSignup(true);
              }}
            >
              Signup
            </span>
          </p>
        </Modal>
      )}

      {/* Signup Modal */}
      {signup && (
        <Modal close={() => setSignup(false)}>
          <Signup />
          <p className="mt-2 text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setSignup(false);
                setLogin(true);
              }}
            >
              Login
            </span>
          </p>
        </Modal>
      )}
    </div>
  );
}

export default Home;