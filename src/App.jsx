import "./styles.css";
import { Home, VideoPlayerPage, Login, Signup } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" end element={<Home />} />
        {/* <PrivateRoute path="/play/:videoId" end element={<VideoPlayerPage />} /> */}
        <Route path="/login" end element={<Login />} />
        <Route path="/signup" end element={<Signup />} />
      </Routes>
    </div>
  );
}
