import { NavBar } from "../../../components";
import { VideoList } from "../../../components/VideoList/VideoList";
import { SideBar } from "../../home/components/SideBar/SideBar";
import "../../home/home-page-styles.css";
import { useUser } from "../../../contexts";
import { IoTimeSharp } from "react-icons/io5";

export const WatchLater = () => {
  const { user } = useUser();

  const watchLater = user.playlists.find(
    (playlist) => playlist.playlistName === "liked videos"
  );

  return (
    <>
      <NavBar />
      <main className={`homepage-main`}>
        <SideBar />
        <div className={`video-container`}>
          <header className={`video-list-header__container`}>
            <p>
              <span>{<IoTimeSharp size={25} />}</span>
            </p>
            <h1 className={`video-list-header__title`}>{"Watch later"}</h1>
          </header>
          {watchLater && <VideoList filteredVideos={watchLater.videos} />}
        </div>
      </main>
    </>
  );
};
