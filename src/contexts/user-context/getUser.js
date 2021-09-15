import axios from "axios";
import { apiGetUser } from "../../utils/api";

export const getUser = async (userId) => {
  try {
    const response = await axios.get(apiGetUser(userId));
    return response.data;
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
