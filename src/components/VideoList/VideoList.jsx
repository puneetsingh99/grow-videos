import { VideoCard } from "../VideoCard/VideoCard";
import { useVideos } from "../../contexts";
import "./video-list-styles.css";

export const VideoList = () => {
  const { filteredVideos, allVideos, currPlaylist } = useVideos();
  const { status, error } = allVideos;
  let videos;

  if (status === "succeeded") {
    if (filteredVideos) {
      videos = filteredVideos.map((video) => (
        <li key={video._id} className={`video`}>
          <VideoCard video={video} />
        </li>
      ));
    }
  }

  return (
    <ul className={`video-list`}>
      {status === "loading" && <div>Loading...</div>}
      {status === "succeeded" && videos}
      {status === "error" && <div>{error}</div>}
    </ul>
  );
};
