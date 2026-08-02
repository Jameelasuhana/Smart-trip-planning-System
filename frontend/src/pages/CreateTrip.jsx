import Navbar from "../components/Navbar";
import { useState } from "react";
import { createTrip } from "../api/trips";
import tripBg from "../assets/recback.jpg";

/* ✅ IMPORT LOCAL IMAGES */
import parisImg from "../assets/paris.jpg";
import tokyoImg from "../assets/tokyo.jpg";

/* Dropdown Options */
const travelTypes = ["Family", "Solo", "Couple", "Friends"];
const travelRoutes = ["Direct", "Via City", "Multi-city"];
const travelTransports = ["Airways", "Railways", "Car", "Bus", "Bike"];

/* ✅ DESTINATIONS WITH LOCAL IMAGES */
const destinations = [
  {
    name: "Paris",
    image: parisImg,
    hotels: [
      { name: "Hotel Luxe", price: 150 },
      { name: "Budget Inn", price: 80 },
    ],
  },
  {
    name: "Tokyo",
    image: tokyoImg,
    hotels: [
      { name: "Shinjuku Stay", price: 120 },
      { name: "Capsule Inn", price: 50 },
    ],
  },
];

function CreateTrip() {
  const [trip, setTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelType: "",
    travelRoute: "",
    travelTransport: "",
    hotels: [],
    notes: "",
    destinationImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!trip.destination) {
      return alert("Please enter destination ⚠️");
    }

    await createTrip(trip);
    alert("Trip created!");
  };

  const selectDestination = (dest) => {
    setTrip({
      ...trip,
      destination: dest.name,
      destinationImage: dest.image,
      hotels: [],
    });
  };

  const toggleHotel = (hotel) => {
    const exists = trip.hotels.find(h => h.name === hotel.name);
    if (exists) {
      setTrip({
        ...trip,
        hotels: trip.hotels.filter(h => h.name !== hotel.name),
      });
    } else {
      setTrip({
        ...trip,
        hotels: [...trip.hotels, hotel],
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${tripBg})` }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">

        <Navbar />

        <div className="flex justify-center items-center p-4">
          <div className="bg-white bg-opacity-95 p-6 rounded-lg w-full max-w-3xl shadow-lg">

            <h2 className="text-xl font-bold mb-4 text-center">
              Create Trip
            </h2>

            <input
              type="text"
              placeholder="Enter Destination (or select below)"
              className="border w-full p-2 mb-4"
              value={trip.destination}
              onChange={(e) =>
                setTrip({
                  ...trip,
                  destination: e.target.value,
                })
              }
            />

            {/* DESTINATION CARDS */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {destinations.map((d) => (
                <div
                  key={d.name}
                  className={`cursor-pointer border p-2 ${
                    trip.destination === d.name ? "border-blue-500" : ""
                  }`}
                  onClick={() => selectDestination(d)}
                >
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <p className="text-center">{d.name}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="date"
                className="border w-full p-2"
                onChange={(e) =>
                  setTrip({ ...trip, startDate: e.target.value })
                }
                required
              />

              <input
                type="date"
                className="border w-full p-2"
                onChange={(e) =>
                  setTrip({ ...trip, endDate: e.target.value })
                }
                required
              />

              <input
                list="travelTypeOptions"
                placeholder="Travel Type"
                className="border w-full p-2"
                onChange={(e) =>
                  setTrip({ ...trip, travelType: e.target.value })
                }
              />
              <datalist id="travelTypeOptions">
                {travelTypes.map((t, i) => (
                  <option key={i} value={t} />
                ))}
              </datalist>

              <input
                list="travelRouteOptions"
                placeholder="Travel Route"
                className="border w-full p-2"
                onChange={(e) =>
                  setTrip({ ...trip, travelRoute: e.target.value })
                }
              />
              <datalist id="travelRouteOptions">
                {travelRoutes.map((t, i) => (
                  <option key={i} value={t} />
                ))}
              </datalist>

              <input
                list="travelTransportOptions"
                placeholder="Travel Transport"
                className="border w-full p-2"
                onChange={(e) =>
                  setTrip({ ...trip, travelTransport: e.target.value })
                }
              />
              <datalist id="travelTransportOptions">
                {travelTransports.map((t, i) => (
                  <option key={i} value={t} />
                ))}
              </datalist>

              <textarea
                placeholder="Notes"
                className="border w-full p-2"
                onChange={(e) =>
                  setTrip({ ...trip, notes: e.target.value })
                }
              ></textarea>

              {/* HOTELS */}
              {destinations.find((d) => d.name === trip.destination) && (
                <div>
                  <h3 className="font-bold mb-2">Select Hotels:</h3>
                  <div className="flex gap-4">
                    {destinations
                      .find((d) => d.name === trip.destination)
                      .hotels.map((h) => (
                        <div
                          key={h.name}
                          className={`border p-2 cursor-pointer ${
                            trip.hotels.find(
                              (th) => th.name === h.name
                            )
                              ? "border-blue-500"
                              : ""
                          }`}
                          onClick={() => toggleHotel(h)}
                        >
                          <p>{h.name}</p>
                          <p>${h.price}</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded">
                Save Trip
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateTrip;