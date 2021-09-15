import { useState, useEffect } from "react";
import "./video-player-page-styles.css";
import ReactPlayer from "react-player";
import { NavBar, VideoInfo } from "../../components";
import { useParams } from "react-router-dom";
import { getVideo } from "../../contexts/video-context/utils/getVideo";
import { Loader } from "../../components/Loader";

const initialState = {
  status: "idle",
  video: null,
  error: null,
};

export const VideoPlayer = () => {
  const { videoId } = useParams();

  const [video, setVideo] = useState(initialState);

  useEffect(() => {
    (async function () {
      setVideo((currState) => ({ ...currState, status: "loading" }));
      const response = await getVideo(videoId);

      if (response.video) {
        const { video } = response;
        return setVideo({ status: "succeeded", video, error: null });
      }

      return setVideo((currState) => ({
        ...currState,
        status: "error",
        error: response?.message,
      }));
    })();
  }, []);

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <main className={`video-player-page`}>
      <NavBar />
      <section className={`video-player`}>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        <div className="video-info-container">
          {video.status === "succeeded" && (
            <VideoInfo videoId={videoId} video={video.video} />
          )}
        </div>
      </section>
    </main>
  );
};
