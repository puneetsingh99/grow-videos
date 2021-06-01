import "./video-player-page-styles.css";
import ReactPlayer from "react-player";
import { Navbar, VideoInfo } from "../../components";
import { useParams } from "react-router-dom";
import { useVideos } from "../../contexts";

export const VideoPlayerPage = () => {
  const { videoId } = useParams();
  const { allVideos } = useVideos();

  const video = allVideos.find((video) => video._id === videoId);

  return (
    <main className={`video-player-page`}>
      <Navbar />
      <section className={`video-player`}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </section>
      <div className="video-info-container">
        {allVideos ? (
          <VideoInfo videoId={videoId} video={video} />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </main>
  );
};
