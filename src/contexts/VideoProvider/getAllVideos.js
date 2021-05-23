import axios from "axios";

export const getAllVideos = async (setAllVideos) => {
  const getAllVideosUri = `https://video-library-backend.puneetsingh2.repl.co/videos`;
  console.log("getAllVideos has been called");
  try {
    const { data } = await axios.get(getAllVideosUri);
    console.log(data.videoList);
    setAllVideos(data);
  } catch (error) {
    console.log(error.message);
  }
};
