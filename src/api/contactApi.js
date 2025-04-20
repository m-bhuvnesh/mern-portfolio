import axios from "axios";

const Api_Url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${Api_Url}/api/contact`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Unknown error" };
  }
};
