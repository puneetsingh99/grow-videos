import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  VideoProvider,
  PlaylistProvider,
  UserProvider,
  AuthProvider,
} from "./contexts";
import App from "./App";
import { HamburgerProvider } from "./components/nav/nav-bar/HamburgerContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <VideoProvider>
            <PlaylistProvider>
              <HamburgerProvider>
                <App />
              </HamburgerProvider>
            </PlaylistProvider>
          </VideoProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
