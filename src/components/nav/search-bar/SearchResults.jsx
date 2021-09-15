import { Loader } from "../../Loader";
import { Link } from "react-router-dom";
import { getPlayVideoRoute } from "../../../utils/appRoutes";

export const SearchResults = ({ searchResults }) => {
  const { status, results, error } = searchResults;
  return (
    <article className={`searchbar__results`}>
      {status === "loading" && <Loader />}
      {status === "succeeded" && results.length === 0 && (
        <div className={`flex-c search-result__message`}>
          <h3>No videos found</h3>
        </div>
      )}
      {status === "succeeded" && results.length > 0 && (
        <ul>
          {results.map((video) => (
            <Link className={`text-link`} to={getPlayVideoRoute(video._id)}>
              <li key={video._id} className={`search__result`}>
                {video.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
      {status === "error" && <p>{error.message}</p>}
    </article>
  );
};
