import axios from "axios";
import { apiGetVideo } from "../../../utils/api";

export const getVideo = async (videoId) => {
  try {
    const response = await axios.get(apiGetVideo(videoId));
    return response.data;
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
