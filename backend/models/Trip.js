const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    travelType: { type: String },           // e.g., Leisure, Business
    travelRoute: { type: String },          // e.g., City A → City B
    travelTransport: { type: String },      // Car, Train, Flight
    destinationImage: { type: String },     // predefined image URL for the destination
    hotels: [
      {
        name: String,
        price: Number,
        stayDuration: Number,               // nights
      },
    ],
    notes: { type: String },                // optional
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);