import { useEffect, useState } from "react";
import { NavBar } from "../../../components";
import { VideoList } from "../../../components/VideoList/VideoList";
import { SideBar } from "../../home/components/SideBar/SideBar";
import "../../home/home-page-styles.css";
import { useUser } from "../../../contexts";
import { BsCollectionPlayFill } from "react-icons/bs";
import React from "react";
import { toast } from "react-toastify";
import { toastConfig } from "../../../utils/toastConfig";
import { Loader } from "../../../components/Loader";
import { NavBarMobile } from "../../../components/nav/nav-bar/NavBarMobile";
import { HamburgerMenu } from "../../../components/nav/nav-bar/HamburgerMenu";

const defaultPlaylists = ["liked videos", "watch history", "watch later"];

export const Library = () => {
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
      (playlist) => !defaultPlaylists.includes(playlist.playlistName)
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
              <span>{<BsCollectionPlayFill size={25} />}</span>
            </p>
            <h1 className={`video-list-header__title`}>{"Library"}</h1>
          </header>
          {myPlaylists.status === "succeeded" && playlists.length === 0 && (
            <div className={`empty-video-list`}>
              <h1> No videos </h1>
            </div>
          )}
          {myPlaylists.status === "loading" && <Loader />}

          {myPlaylists.status === "succeeded" &&
            playlists.length > 0 &&
            playlists.map(
              (playlist) =>
                playlist.videos.length > 0 && (
                  <div key={playlist._id}>
                    <header className={`video-list-header__container`}>
                      <h1
                        className={`video-list-header__title video-list-playlist__title`}
                      >
                        {playlist.playlistName}
                      </h1>
                    </header>
                    <VideoList filteredVideos={playlist.videos} />
                  </div>
                )
            )}
        </div>
      </main>
      <NavBarMobile />
      <HamburgerMenu />
    </>
  );
};
