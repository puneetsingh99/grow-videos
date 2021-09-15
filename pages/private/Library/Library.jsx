import { NavBar } from "../../../components";
import { VideoList } from "../../../components/VideoList/VideoList";
import { SideBar } from "../../home/components/SideBar/SideBar";
import "../../home/home-page-styles.css";
import { useUser } from "../../../contexts";
import { BsCollectionPlayFill } from "react-icons/bs";
import React from "react";

const defaultPlaylists = ["liked videos", "watch history", "watch later"];

export const Library = () => {
  const { user } = useUser();

  const playlists = user.playlists.filter(
    (playlist) => !defaultPlaylists.includes(playlist.playlistName)
  );

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
          {playlists &&
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
    </>
  );
};
