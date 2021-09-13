import { NavBar } from "../../components";
import { VideoList } from "../../components/VideoList/VideoList";
import { VideoListHeader } from "../../components/VideoList/VideoListHeader";
import { SideBar } from "./components/SideBar/SideBar";
import "./home-page-styles.css";
import { useAuth, useUser } from "../../contexts";

export const Home = () => {
  const auth = useAuth();
  const { user } = useUser();

  return (
    <>
      <NavBar />
      <main className={`homepage-main`}>
        <SideBar />
        <div className={`video-container`}>
          <VideoListHeader />
          <VideoList />
        </div>
      </main>
    </>
  );
};
