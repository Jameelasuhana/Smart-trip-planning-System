import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between p-4 bg-white shadow">
        <h2 className="font-bold text-blue-600"> Smart Trip Planner </h2>

        <div className="flex gap-6 items-center">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/create-trip">Create Trip</Link>
          <Link to="/recommendations">Recommendations</Link>

          <div
            onClick={() => setOpen(true)}
            className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full cursor-pointer"
          >
            U
          </div>
        </div>
      </div>

      {open && <Sidebar close={() => setOpen(false)} />}
    </>
  );
}

export default Navbar;