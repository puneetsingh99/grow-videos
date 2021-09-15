import { MdPlaylistAdd } from "react-icons/md";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { IoTimeOutline, IoTimeSharp } from "react-icons/io5";

export const ActionButtons = ({ setShowAddToPlaylistModal }) => {
  return (
    <article className={`action-buttons`}>
      <div
        title={`Add to a playlist`}
        className={`add-to-playlist`}
        onClick={() => setShowAddToPlaylistModal(() => true)}
      >
        <MdPlaylistAdd size={30} />
      </div>
      <div
        title={"Like video"}
        className={`add-to-playlist`}
        onClick={() => setShowAddToPlaylistModal(() => true)}
      >
        <AiOutlineLike size={30} />
      </div>

      <div
        title={"Watch later"}
        className={`add-to-playlist`}
        onClick={() => setShowAddToPlaylistModal(() => true)}
      >
        <IoTimeOutline size={30} />
      </div>
    </article>
  );
};
