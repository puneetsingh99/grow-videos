import axios from "axios";
import { API_ALL_VIDEOS } from "../../../api";

export const getAllVideos = async (setAllVideos) => {
  try {
    const response = await axios.get(API_ALL_VIDEOS);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
