import { NavBar, NavPillList, SideBar, VideoList } from "../../components";
import "./home-page-styles.css";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className={`homepage-main`}>
        <div className={`main`}>
          <div className={`navpill-container`}>{/* <NavPillList /> */}</div>
          <div className={`video-container`}>
            <VideoList />
          </div>
        </div>
      </main>
    </>
  );
};
