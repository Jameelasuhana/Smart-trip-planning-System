const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");
const { protect } = require("../middleware/authMiddleware");

// Create trip
router.post("/", protect, async (req, res) => {
  const {
    destination,
    startDate,
    endDate,
    travelType,
    travelRoute,
    travelTransport,
    destinationImage,
    hotels,
    notes,
  } = req.body;

  try {
    const trip = await Trip.create({
      user: req.user._id,
      destination,
      startDate,
      endDate,
      travelType,
      travelRoute,
      travelTransport,
      destinationImage,
      hotels,
      notes,
    });
    res.status(201).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all trips for logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.user._id });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Optional: Get single trip by ID (for modal with hotel + route info)
router.get("/:id", protect, async (req, res) => {
  try {
    const trip = await Trip.findOne({ _id: req.params.id, user: req.user._id });
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    res.json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

