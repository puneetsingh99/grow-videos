import "./styles.css";
import { HomePage, VideoPlayerPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, Login, Signup, AddToPlaylist } from "./components";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <PrivateRoute path="/" end element={<HomePage />} />
        <PrivateRoute path="/play/:videoId" end element={<VideoPlayerPage />} />
        <Route path="/login" end element={<Login />} />
        <Route path="/signup" end element={<Signup />} />
      </Routes>
    </div>
  );
}
