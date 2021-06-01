import { v4 as uuidv4 } from "uuid";

export const user = {
  name: "Puneet Singh",
  playlists: [
    {
      id: uuidv4(),
      name: "Favourites"
    },
    {
      id: uuidv4(),
      name: "Best Investing videos"
    }
  ]
};
