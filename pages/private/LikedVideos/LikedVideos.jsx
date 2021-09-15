import { NavBar } from "../../../components";
import { VideoList } from "../../../components/VideoList/VideoList";
import { SideBar } from "../../home/components/SideBar/SideBar";
import "../../home/home-page-styles.css";
import { useUser } from "../../../contexts";
import { AiTwotoneLike } from "react-icons/ai";

export const LikedVideos = () => {
  const { user } = useUser();

  const likedVideos = user.playlists.find(
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
              <span>{<AiTwotoneLike size={25} />}</span>
            </p>
            <h1 className={`video-list-header__title`}>{"Liked videos"}</h1>
          </header>
          {likedVideos && <VideoList filteredVideos={likedVideos.videos} />}
        </div>
      </main>
    </>
  );
};
