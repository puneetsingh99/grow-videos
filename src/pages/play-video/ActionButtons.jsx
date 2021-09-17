import { MdPlaylistAdd } from "react-icons/md";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { IoTimeOutline, IoTimeSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPlayVideoRoute,
  ROUTE_LOGIN,
  ROUTE_PLAY_VIDEO,
} from "../../utils/appRoutes";
import { useAuth } from "../../contexts";

export const ActionButtons = ({ setShowAddToPlaylistModal }) => {
  const { isUserLoggedIn } = useAuth();
  const { videoId } = useParams();
  const navigate = useNavigate();

  return (
    <article className={`action-buttons`}>
      <div
        title={`Add to a playlist`}
        className={`add-to-playlist`}
        onClick={() => {
          if (isUserLoggedIn) {
            return setShowAddToPlaylistModal(() => true);
          }

          return navigate(ROUTE_LOGIN, {
            state: { from: getPlayVideoRoute(videoId) },
          });
        }}
      >
        <MdPlaylistAdd size={30} />
      </div>
      <div
        title={"Like video"}
        className={`add-to-playlist`}
        onClick={() => {
          if (isUserLoggedIn) {
            return setShowAddToPlaylistModal(() => true);
          }

          return navigate(ROUTE_LOGIN, {
            state: { from: getPlayVideoRoute(videoId) },
          });
        }}
      >
        <AiOutlineLike size={30} />
      </div>

      <div
        title={"Watch later"}
        className={`add-to-playlist`}
        onClick={() => {
          if (isUserLoggedIn) {
            return setShowAddToPlaylistModal(() => true);
          }

          return navigate(ROUTE_LOGIN, {
            state: { from: getPlayVideoRoute(videoId) },
          });
        }}
      >
        <IoTimeOutline size={30} />
      </div>
    </article>
  );
};
