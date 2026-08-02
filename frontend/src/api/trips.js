import axios from "axios";

const API = axios.create({
 baseURL: "https://smart-trip-backend-dopj.onrender.com/api/trips" 
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const createTrip = (data) => API.post("/", data);
export const getTrips = () => API.get("/");