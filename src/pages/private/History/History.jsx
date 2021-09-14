import { NavBar } from "../../../components";
import { VideoList } from "../../../components/VideoList/VideoList";
import { VideoListHeader } from "../../../components/VideoList/VideoListHeader";
import { SideBar } from "../../home/components/SideBar/SideBar";
import "../../home/home-page-styles.css";
import { useAuth, useUser } from "../../../contexts";
import { AiOutlineHistory } from "react-icons/ai";

export const History = () => {
  const auth = useAuth();
  const { user } = useUser();
  const watchHistory = user.playlists.find(
    (playlist) => playlist.playlistName === "watch history"
  );

  return (
    <>
      <NavBar />
      <main className={`homepage-main`}>
        <SideBar />
        <div className={`video-container`}>
          <header className={`video-list-header__container`}>
            <p>
              <span>{<AiOutlineHistory size={25} />}</span>
            </p>
            <h1 className={`video-list-header__title`}>{"History"}</h1>
          </header>
          {watchHistory && <VideoList filteredVideos={watchHistory.videos} />}
        </div>
      </main>
    </>
  );
};
