import axios from "axios";

// Remove trailing slash to avoid accidental "//" in URL
const Api_Url = "https://mern-portfolio-backend-production.up.railway.app";

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${Api_Url}/api/contact`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Unknown error occurred." };
  }
};
