import "./styles.css";
import { HomePage, VideoPlayer, Login, Signup } from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./components";
import { History } from "./pages/private/History/History";
import { LikedVideos } from "./pages/private/LikedVideos/LikedVideos";
import { WatchLater } from "./pages/private/WatchLater/WatchLater";
import { Library } from "./pages/private/Library/Library";
import { useAuth } from "./contexts";
import {
  ROUTE_HISTORY,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_SIGN_UP,
  ROUTE_WATCH_LATER,
  ROUTE_LIBRARY,
  ROUTE_LIKED_VIDEOS,
  ROUTE_PLAY_VIDEO,
} from "./utils/appRoutes";
import { ToastContainer } from "react-toastify";

export default function App() {
  const { isUserLoggedIn } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path={ROUTE_HOME} end element={<HomePage />} />
        <Route path={ROUTE_PLAY_VIDEO} end element={<VideoPlayer />} />
        <Route
          path={ROUTE_LOGIN}
          end
          element={
            isUserLoggedIn ? (
              <Navigate state={{ from: location.pathname }} to={ROUTE_HOME} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path={ROUTE_SIGN_UP}
          end
          element={
            isUserLoggedIn ? (
              <Navigate state={{ from: location.pathname }} to={ROUTE_HOME} />
            ) : (
              <Signup />
            )
          }
        />
        <PrivateRoute path={ROUTE_HISTORY} end element={<History />} />
        <PrivateRoute path={ROUTE_LIKED_VIDEOS} end element={<LikedVideos />} />
        <PrivateRoute path={ROUTE_WATCH_LATER} end element={<WatchLater />} />
        <PrivateRoute path={ROUTE_LIBRARY} end element={<Library />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
