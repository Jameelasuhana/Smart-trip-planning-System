import { useState } from "react";
import Navbar from "../components/Navbar";
import { createTrip } from "../api/trips";

/* Background */
import recback from "../assets/recback.jpg";

/* Place images */
import goaImg from "../assets/goa.jpg";
import pondicherryImg from "../assets/pondicherry.jpg";
import vizagImg from "../assets/vizag.jpg";
import kovalamImg from "../assets/kovalam.jpg";

import hampiImg from "../assets/hampi.jpg";
import jaipurImg from "../assets/jaipur.jpg";
import agraImg from "../assets/agra.jpg";
import varanasiImg from "../assets/varanasi.jpg";

import ootyImg from "../assets/ooty.jpg";
import manaliImg from "../assets/manali.jpg";
import tirupatiImg from "../assets/tirupati.jpg";

import ladakhImg from "../assets/ladakh.jpg";
import rishikeshImg from "../assets/rishikesh.jpg";

/* Hotel images */
import goa1 from "../assets/goa1.jpg";
import goa2 from "../assets/goa2.jpg";
import goa3 from "../assets/goa3.jpg";

import hampi1 from "../assets/hampi1.jpg";
import hampi2 from "../assets/hampi2.jpg";
import hampi3 from "../assets/hampi3.jpg";

import common1 from "../assets/common1.jpg";
import common2 from "../assets/common2.jpg";
import common3 from "../assets/common3.jpg";

import adv1 from "../assets/adv1.jpg";
import adv2 from "../assets/adv2.jpg";
import adv3 from "../assets/adv3.jpg";

const getRating = () => (Math.random() * 2 + 3).toFixed(1);

const placeDesc = (name) => [
  `${name} is one of the most popular travel destinations in India.`,
  `It offers a unique experience for all travelers.`,
  `The place is known for its beauty and attractions.`,
  `You can explore culture and traditions here.`,
  `Food and local cuisine are worth trying.`,
  `Perfect place for photography and relaxation.`,
  `Suitable for friends, couples, and families.`,
  `Overall, ${name} is a must-visit destination.`
];

const hotelSummary = [
  "This hotel offers a comfortable and relaxing stay.",
  "Rooms are clean and well-maintained.",
  "Location is convenient for tourists.",
  "Staff provides friendly service.",
  "Affordable and value for money.",
  "Safe and suitable for families.",
  "Basic amenities are available.",
  "Overall a good accommodation choice."
];

const data = [
  { name: "Goa", category: "Coastal", image: goaImg, hotels: [
    { name: "Goa Beach Resort", price: 3500, location: "Baga", image: goa1, amenities: ["WiFi","AC","Pool"] },
    { name: "Sunset Villa", price: 2800, location: "Calangute", image: goa2, amenities: ["WiFi"] },
    { name: "Budget Stay", price: 1500, location: "Anjuna", image: goa3, amenities: ["WiFi"] }
  ]},
  { name: "Vizag", category: "Coastal", image: vizagImg, hotels: [
    { name: "Vizag Resort", price: 3000, location: "Beach", image: goa1, amenities: ["WiFi"] },
    { name: "Sea View", price: 2500, location: "Rushikonda", image: goa2, amenities: ["WiFi"] },
    { name: "Budget Lodge", price: 1200, location: "City", image: goa3, amenities: ["WiFi"] }
  ]},
  { name: "Pondicherry", category: "Coastal", image: pondicherryImg, hotels: [
    { name: "Sea Breeze", price: 3000, location: "Beach", image: goa1, amenities: ["WiFi"] },
    { name: "French Stay", price: 2500, location: "Town", image: goa2, amenities: ["WiFi"] },
    { name: "Budget Inn", price: 1400, location: "Market", image: goa3, amenities: ["WiFi"] }
  ]},
  { name: "Kovalam", category: "Coastal", image: kovalamImg, hotels: [
    { name: "Kovalam Resort", price: 4000, location: "Beach", image: goa1, amenities: ["WiFi"] },
    { name: "Palm Stay", price: 3000, location: "Sea", image: goa2, amenities: ["WiFi"] },
    { name: "Budget Kerala", price: 1800, location: "Town", image: goa3, amenities: ["WiFi"] }
  ]},
  { name: "Hampi", category: "Historic", image: hampiImg, hotels: [
    { name: "Hampi Stay", price: 2500, location: "Temple", image: hampi1, amenities: ["WiFi"] },
    { name: "Stone Hotel", price: 2000, location: "River", image: hampi2, amenities: ["WiFi"] },
    { name: "Budget Inn", price: 1200, location: "Market", image: hampi3, amenities: ["WiFi"] }
  ]},
  { name: "Jaipur", category: "Historic", image: jaipurImg, hotels: [
    { name: "Royal Palace", price: 3500, location: "Center", image: hampi1, amenities: ["WiFi"] },
    { name: "Heritage Stay", price: 2800, location: "Old", image: hampi2, amenities: ["WiFi"] },
    { name: "Budget Jaipur", price: 1500, location: "Bus", image: hampi3, amenities: ["WiFi"] }
  ]},
  { name: "Agra", category: "Historic", image: agraImg, hotels: [
    { name: "Taj View", price: 3200, location: "Taj", image: hampi1, amenities: ["WiFi"] },
    { name: "Heritage Agra", price: 2500, location: "City", image: hampi2, amenities: ["WiFi"] },
    { name: "Budget Inn", price: 1400, location: "Station", image: hampi3, amenities: ["WiFi"] }
  ]},
  { name: "Varanasi", category: "Spiritual", image: varanasiImg, hotels: [
    { name: "Ganga View", price: 3000, location: "Ghats", image: hampi1, amenities: ["WiFi"] },
    { name: "Spiritual Stay", price: 2200, location: "Temple", image: hampi2, amenities: ["WiFi"] },
    { name: "Budget Lodge", price: 1200, location: "Market", image: hampi3, amenities: ["WiFi"] }
  ]},
  { name: "Ooty", category: "Hill Stations", image: ootyImg, hotels: [
    { name: "Ooty Resort", price: 3000, location: "Hill", image: common1, amenities: ["WiFi"] },
    { name: "Green Valley", price: 2500, location: "Nature", image: common2, amenities: ["WiFi"] },
    { name: "Budget Ooty", price: 1500, location: "Town", image: common3, amenities: ["WiFi"] }
  ]},
  { name: "Manali", category: "Hill Stations", image: manaliImg, hotels: [
    { name: "Snow Resort", price: 3500, location: "Hill", image: common1, amenities: ["WiFi"] },
    { name: "Mountain Stay", price: 2800, location: "Valley", image: common2, amenities: ["WiFi"] },
    { name: "Budget Manali", price: 1600, location: "Town", image: common3, amenities: ["WiFi"] }
  ]},
  { name: "Tirupati", category: "Spiritual", image: tirupatiImg, hotels: [
    { name: "Temple Stay", price: 2000, location: "Temple", image: common1, amenities: ["WiFi"] },
    { name: "Spiritual Inn", price: 1800, location: "Town", image: common2, amenities: ["WiFi"] },
    { name: "Budget Stay", price: 1200, location: "Market", image: common3, amenities: ["WiFi"] }
  ]},
  { name: "Ladakh", category: "Adventure", image: ladakhImg, hotels: [
    { name: "Mountain Camp", price: 4000, location: "Leh", image: adv1, amenities: ["WiFi"] },
    { name: "Snow Stay", price: 3500, location: "Hill", image: adv2, amenities: ["WiFi"] },
    { name: "Budget Camp", price: 2000, location: "Valley", image: adv3, amenities: ["WiFi"] }
  ]},
  { name: "Rishikesh", category: "Adventure", image: rishikeshImg, hotels: [
    { name: "River Resort", price: 3000, location: "River", image: adv1, amenities: ["WiFi"] },
    { name: "Adventure Camp", price: 2500, location: "Camp", image: adv2, amenities: ["WiFi"] },
    { name: "Budget Stay", price: 1500, location: "Town", image: adv3, amenities: ["WiFi"] }
  ]}
];

function Recommendations() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredData = data.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleSave = async () => {
    if (!selectedHotel) return alert("Select hotel ⚠️");

    await createTrip({
      destination: selectedPlace.name,
      destinationImage: selectedPlace.image,
      travelRoute: "Recommended",
      travelType: "Recommended",
      startDate: new Date(),
      endDate: new Date(),
      hotel: selectedHotel
    });

    alert("Saved ✅");
  };

  return (
    <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${recback})` }}>
      <div className="bg-black/60 min-h-screen">
        <Navbar />

        <div className="p-6 text-white">
          <h1 className="text-3xl text-center mb-6">Explore 🌍</h1>

          {/* SEARCH */}
          <div className="flex justify-center mb-6">
            <div className="relative w-[320px] md:w-[400px]">
              <input
                type="text"
                placeholder="🔍 Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-white/20 backdrop-blur-md text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg"
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {["All", "Coastal", "Historic", "Hill Stations", "Adventure", "Spiritual"].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md
                  ${
                    category === c
                      ? "bg-gradient-to-r from-green-400 to-emerald-600 text-white scale-105"
                      : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-2 md:px-10">
            {filteredData.map((p) => (
              <div
                key={p.name}
                onClick={() => { setSelectedPlace(p); setSelectedHotel(null); }}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg relative"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-48 w-full object-cover transform group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p className="text-xs opacity-80">{p.category}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <p className="text-center mt-4">No places found 😢</p>
          )}
        </div>

        {/* POPUP */}
        {selectedPlace && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div className="bg-white text-black w-[90%] md:w-[700px] max-h-[90vh] overflow-y-auto p-6 rounded-2xl">

              <button onClick={() => setSelectedPlace(null)} className="float-right">✖</button>

              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
              />

              <h2 className="text-2xl font-bold">{selectedPlace.name}</h2>

              {placeDesc(selectedPlace.name).map((line, i) => (
                <p key={i} className="text-sm mt-1">{line}</p>
              ))}

              <h3 className="mt-4 text-lg font-semibold">Select Hotel</h3>

              <div className="grid grid-cols-2 gap-3">
                {selectedPlace.hotels.map((h) => (
                  <div
                    key={h.name}
                    onClick={() => setSelectedHotel(h)}
                    className={`p-3 rounded-xl cursor-pointer transition-all duration-300 shadow-md
                      ${
                        selectedHotel?.name === h.name
                          ? "bg-green-100 border-2 border-green-500 scale-105"
                          : "bg-gray-100 hover:shadow-lg"
                      }`}
                  >
                    <img src={h.image} alt={h.name} className="h-24 w-full rounded-lg object-cover mb-2" />
                    <p className="font-semibold">{h.name}</p>
                    <p className="text-sm text-gray-600">₹{h.price}</p>
                  </div>
                ))}
              </div>

              {selectedHotel && (
                <div className="mt-4 border p-3 rounded">
                  <h3>{selectedHotel.name}</h3>
                  <p>₹{selectedHotel.price}</p>
                  <p>{selectedHotel.location}</p>
                  <p>⭐ {getRating()}</p>
                  <p>{selectedHotel.amenities.join(", ")}</p>

                  {hotelSummary.map((line, i) => (
                    <p key={i} className="text-sm">{line}</p>
                  ))}

                  <button
                    onClick={handleSave}
                    className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Save Trip ✅
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommendations;