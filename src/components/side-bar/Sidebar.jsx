import "./sidebar-styles.css";

export const Sidebar = () => {
  return (
    <div className={`sidebar`}>
      <ul className={`sidebar-menu-list`}>
        <li className={`sidebar-menu-item highlighted`}>Home</li>
        <li className={`sidebar-menu-item`}>History</li>
        <li className={`sidebar-menu-item`}>My Playlists</li>
      </ul>
    </div>
  );
};
