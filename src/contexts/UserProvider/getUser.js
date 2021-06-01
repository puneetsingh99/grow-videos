import axios from "axios";

export const getUser = async (userDispatch) => {
  const userId = `60aa730b3a31080130758bfe`;
  const getAllVideosUri = `https://video-library-backend.puneetsingh2.repl.co/users/${userId}`;
  console.log("getUser has been called");
  try {
    const { data } = await axios.get(getAllVideosUri);
    console.log(data.user);
    userDispatch({ type: "SET_USER", payload: data.user });
  } catch (error) {
    console.log(error.message);
  }
};
