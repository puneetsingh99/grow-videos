import { useState, useEffect } from "react";
import "./video-player-page-styles.css";
import ReactPlayer from "react-player";
import { NavBar, VideoInfo } from "../../components";
import { useParams } from "react-router-dom";
import { getVideo } from "../../contexts/video-context/utils/getVideo";
import { Loader } from "../../components/Loader";
import { useUser } from "../../contexts";
import { NavBarMobile } from "../../components/nav/nav-bar/NavBarMobile";
import { HamburgerMenu } from "../../components/nav/nav-bar/HamburgerMenu";

const initialState = {
  status: "idle",
  video: null,
  error: null,
};

export const VideoPlayer = () => {
  const { videoId } = useParams();

  const { addToPlaylist } = useUser();

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
      {video.status === "loading" && <Loader />}
      <section className={`video-player`}>
        <div className="react-player">
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            onStart={() => addToPlaylist("watch history", videoId)}
          />
        </div>
        <div className="video-info-container">
          {video.status === "succeeded" && (
            <VideoInfo videoId={videoId} video={video.video} />
          )}
        </div>
      </section>
      <NavBarMobile />
      <HamburgerMenu />
    </main>
  );
};
