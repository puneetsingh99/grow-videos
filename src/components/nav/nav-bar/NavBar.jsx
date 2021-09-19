import "./navbar-styles.css";
import { SearchBar } from "../search-bar/SearchBar";
import { Logo } from "../../logo/Logo";
import { useVideos } from "../../../contexts";
import { useEffect, useState } from "react";
import { SearchResults } from "../search-bar/SearchResults";
import { toast } from "react-toastify";
import { toastConfig } from "../../../utils/toastConfig";
import axios from "axios";
import { API_SEARCH } from "../../../utils/api";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHamburger } from "./HamburgerContext";

async function searchVideos(searchKey) {
  try {
    const response = await axios.post(API_SEARCH, { searchKey });
    return response.data;
  } catch (error) {
    toast.error(error.message, toastConfig);
  }
}

const initialState = {
  status: "idle",
  results: null,
  error: null,
};

export const NavBar = () => {
  const { searchKeyword } = useVideos("");
  const [searchResults, setSearchResults] = useState(initialState);

  const { setShowHamburger } = useHamburger();

  useEffect(() => {
    let timer;

    if (searchKeyword) {
      setSearchResults((prevResults) => ({
        ...prevResults,
        status: "loading",
      }));

      timer = setTimeout(async () => {
        try {
          const data = await searchVideos(searchKeyword);

          if (data.matchingVideos) {
            setSearchResults((prevResults) => ({
              ...prevResults,
              status: "succeeded",
              results: data.matchingVideos,
            }));
          }
        } catch (error) {
          setSearchResults((prevResults) => ({
            ...prevResults,
            status: "error",
            error: error.message,
          }));
          toast.error(error.message, toastConfig);
        }
      }, 500);
    }
    return () => {
      setSearchResults((prevResults) => ({
        ...prevResults,
        status: "idle",
      }));
      clearTimeout(timer);
    };
  }, [searchKeyword]);

  return (
    <nav className="navbar">
      <section className="navbar-container">
        <div
          className={`hamburger-section`}
          onClick={() => setShowHamburger((currState) => !currState)}
        >
          <GiHamburgerMenu size={22} />
        </div>
        <div className={`logo flex-c`}>
          <Logo size={25} />
        </div>
        <div className={`searchbar-container flex-c`}>
          <SearchBar />
          {searchKeyword && <SearchResults searchResults={searchResults} />}
        </div>
      </section>
    </nav>
  );
};
