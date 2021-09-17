import { NavBar } from "../../../components";
import { VideoList } from "../../../components/VideoList/VideoList";
import { SideBar } from "../../home/components/SideBar/SideBar";
import "../../home/home-page-styles.css";
import { useUser } from "../../../contexts";
import { AiTwotoneLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/Loader";

export const LikedVideos = () => {
  const { getPlaylists } = useUser();

  const [myPlaylists, setMyPlaylists] = useState({
    status: "idle",
    playlists: null,
    error: null,
  });

  useEffect(() => {
    (async function () {
      try {
        setMyPlaylists((currPlaylist) => ({
          ...currPlaylist,
          status: "loading",
        }));
        const response = await getPlaylists();
        if (response) {
          return setMyPlaylists((currPlaylist) => ({
            ...currPlaylist,
            status: "succeeded",
            playlists: response,
          }));
        }

        return setMyPlaylists((currPlaylist) => ({
          ...currPlaylist,
          status: "error",
          error: response,
        }));
      } catch (error) {
        console.log(error);
        toast.error("Could not retrieve playlists", toastConfig);
      }
    })();
  }, []);

  let playlists;

  if (myPlaylists.status === "succeeded") {
    playlists = myPlaylists.playlists.filter(
      (playlist) => playlist.playlistName === "liked videos"
    );
  }

  return (
    <>
      <NavBar />
      <main className={`homepage-main`}>
        <SideBar />
        <div className={`video-container`}>
          <header className={`video-list-header__container`}>
            <p>
              <span>{<AiTwotoneLike size={25} />}</span>
            </p>
            <h1 className={`video-list-header__title`}>{"Liked videos"}</h1>
          </header>
          {myPlaylists.status === "succeeded" && playlists.length === 0 && (
            <div className={`empty-video-list`}>
              <h1> No videos </h1>
            </div>
          )}
          {myPlaylists.status === "loading" && <Loader />}
          {playlists && <VideoList filteredVideos={playlists[0].videos} />}
        </div>
      </main>
    </>
  );
};
