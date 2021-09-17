import { useState, useEffect } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { IoTimeOutline, IoTimeSharp } from "react-icons/io5";
import { useAuth, useUser } from "../../contexts";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPlayVideoRoute,
  ROUTE_LOGIN,
  ROUTE_PLAY_VIDEO,
} from "../../utils/appRoutes";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toastConfig";

const defaultPlaylists = ["liked videos", "watch history", "watch later"];

export const ActionButtonsLoggedIn = ({ setShowAddToPlaylistModal }) => {
  const { isUserLoggedIn, userId } = useAuth();
  const { videoId } = useParams();
  const navigate = useNavigate();

  const { getPlaylists, addToPlaylist, removeFromPlaylist } = useUser();

  const [myPlaylists, setMyPlaylists] = useState({
    status: "idle",
    playlists: null,
    error: null,
  });

  const [liked, setLiked] = useState(false);
  const [watchLater, setWatchLater] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setMyPlaylists((currPlaylist) => ({
          ...currPlaylist,
          status: "loading",
        }));
        const response = await getPlaylists();

        if (response) {
          const videoAlreadyExists = (playlistName, videoId) => {
            if (!response) {
              return;
            }

            const targetPlaylist = response.find(
              (playlist) =>
                playlist.playlistName.trim().toLowerCase() ===
                playlistName.trim().toLowerCase()
            );

            if (targetPlaylist) {
              return targetPlaylist.videos.find(
                (video) => video.videoId === videoId
              );
            }
          };

          setLiked(() => videoAlreadyExists("liked videos", videoId));
          setWatchLater(() => videoAlreadyExists("watch later", videoId));

          return setMyPlaylists((currPlaylist) => ({
            ...currPlaylist,
            status: "succeeded",
            playlists: response,
          }));
        }

        return setMyPlaylists((currPlaylist) => ({
          ...currPlaylist,
          status: "error",
          error: response,
        }));
      } catch (error) {
        console.log(error);
        toast.error("Could not retrieve playlists", toastConfig);
      }
    })();
  }, []);

  let playlists;

  if (myPlaylists.status === "succeeded") {
    playlists = myPlaylists.playlists;
  }

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
        title={liked ? "Unlike video" : "Like video"}
        className={`add-to-playlist`}
        onClick={() => {
          if (myPlaylists.status === "succeeded") {
            if (liked) {
              removeFromPlaylist("liked videos", videoId);
            } else {
              addToPlaylist("liked videos", videoId);
            }
            setLiked((currStatus) => !currStatus);
          }
        }}
      >
        {liked ? <AiTwotoneLike size={30} /> : <AiOutlineLike size={30} />}
      </div>

      <div
        title={watchLater ? "Remove from watch later" : "Add to watch later"}
        className={`add-to-playlist`}
        onClick={() => {
          if (myPlaylists.status === "succeeded") {
            if (watchLater) {
              removeFromPlaylist("watch later", videoId);
            } else {
              addToPlaylist("watch later", videoId);
            }
            setWatchLater((currStatus) => !currStatus);
          }
        }}
      >
        {watchLater ? <IoTimeSharp size={30} /> : <IoTimeOutline size={30} />}
      </div>
    </article>
  );
};
