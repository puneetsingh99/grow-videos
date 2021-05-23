import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  VideoProvider,
  PlaylistProvider,
  UserProvider,
  AuthProvider
} from "./contexts";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <VideoProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </VideoProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
