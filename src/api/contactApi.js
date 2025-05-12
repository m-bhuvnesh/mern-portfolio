import axios from "axios";

const Api_Url = "https://mern-portfolio-backend-production-73bf.up.railway.app";

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${Api_Url}/api/contact`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Unknown error occurred." };
  }
};
