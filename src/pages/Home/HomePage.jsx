import { NavBar } from "../../components";
import { VideoList } from "../../components/VideoList/VideoList";
import { VideoListHeader } from "../../components/VideoList/VideoListHeader";
import { SideBar } from "./components/SideBar/SideBar";
import "./home-page-styles.css";
import { useVideos } from "../../contexts";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toastConfig";
import { Loader } from "../../components/Loader";

export const HomePage = () => {
  const { filteredVideos, allVideos } = useVideos();
  const { status, error } = allVideos;

  return (
    <>
      <NavBar />
      <main className={`homepage-main`}>
        <SideBar />
        <div className={`video-container`}>
          <VideoListHeader />
          {status === "loading" && <Loader />}
          {status === "succeeded" && (
            <VideoList filteredVideos={filteredVideos} />
          )}
          {status === "error" && toast.error(error, toastConfig)}
        </div>
      </main>
    </>
  );
};
