import { VideoCard } from "../";
import { useVideos } from "../../contexts";
import "./video-list-styles.css";

export const VideoList = () => {
  const { filteredVideos } = useVideos();
  return (
    <ul className={`video-list`}>
      {filteredVideos ? (
        filteredVideos.map((video) => {
          return (
            <li key={video.id} className={`video`}>
              <VideoCard video={video} />
            </li>
          );
        })
      ) : (
        <h1> Loading...</h1>
      )}
    </ul>
  );
};
