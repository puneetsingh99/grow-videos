import "./searchbar-styles.css";
import { SearchSvg } from "../../../assets";
import { useVideos } from "../../../contexts";

export const SearchBar = () => {
  const { searchKeyword, setSearchKeyword } = useVideos();
  return (
    <article className="searchbar">
      <span className="search-icon">
        <SearchSvg />
      </span>
      <input
        className="searchbar__input"
        type="text"
        value={searchKeyword}
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
        placeholder={`Search`}
      />
    </article>
  );
};
