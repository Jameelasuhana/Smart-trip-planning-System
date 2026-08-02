import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getTrips } from "../api/trips";
import Modal from "../components/Modal";

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    getTrips().then(res => setTrips(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <Navbar />

      <div className="p-8 max-w-6xl mx-auto">

        {/* Welcome */}
        <h2 className="text-3xl font-bold mb-8 text-blue-900">
          Welcome {localStorage.getItem("name") || "User"} 👋
        </h2>

        {/* Trips */}
        {trips.length === 0 ? (
          <div className="text-center text-blue-500 mt-20">
            <p className="text-lg">No trips saved yet 🚫</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map(t => (
              <div
                key={t._id}
                onClick={() => setSelectedTrip(t)}
                className="bg-blue-50 rounded-2xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={t.destinationImage}
                  alt={t.destination}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold text-xl text-blue-900 mb-1">
                    {t.destination}
                  </h3>

                  <p className="text-blue-700 text-sm mb-1">
                    📅 {t.startDate.slice(0,10)} → {t.endDate.slice(0,10)}
                  </p>

                  <p className="text-blue-700 text-sm">
                    ✈️ {t.travelType}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal */}
      {selectedTrip && (
        <Modal close={() => setSelectedTrip(null)}>
          <div className="space-y-4 text-blue-900">

            <img
              src={selectedTrip.destinationImage}
              alt={selectedTrip.destination}
              className="w-full h-56 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-bold">
              {selectedTrip.destination}
            </h2>

            <div className="space-y-1 text-blue-800">
              <p>
                <strong>Dates:</strong>{" "}
                {selectedTrip.startDate.slice(0,10)} →{" "}
                {selectedTrip.endDate.slice(0,10)}
              </p>

              <p><strong>Type:</strong> {selectedTrip.travelType}</p>
              <p><strong>Route:</strong> {selectedTrip.travelRoute}</p>
            </div>

            {selectedTrip.hotel && (
              <div className="bg-blue-100 p-4 rounded-xl mt-2">
                <h3 className="font-semibold text-lg mb-1">🏨 Hotel</h3>
                <p>{selectedTrip.hotel.name}</p>
                <p>💰 ₹{selectedTrip.hotel.price}</p>
                <p>📍 {selectedTrip.hotel.location}</p>
              </div>
            )}

            {selectedTrip.notes && (
              <p>
                <strong>Notes:</strong> {selectedTrip.notes}
              </p>
            )}

            <button
              onClick={() => setSelectedTrip(null)}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
            >
              Close
            </button>

          </div>
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;