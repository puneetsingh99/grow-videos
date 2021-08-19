import "./styles.css";
import { Home, VideoPlayerPage, Login, Signup } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <PrivateRoute path="/" end element={<Home />} />
        <PrivateRoute path="/play/:videoId" end element={<VideoPlayerPage />} />
        <PrivateRoute path="/login" end element={<Login />} />
        <PrivateRoute path="/signup" end element={<Signup />} />
      </Routes>
    </div>
  );
}
