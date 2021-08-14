export const filterBySearchKeywords = (videoList, searchKeyword) => {
  if (searchKeyword === "") {
    return videoList;
  }
  return videoList.filter(
    (video) =>
      video.title
        .toLowerCase()
        .search(searchKeyword.toLocaleLowerCase().trim()) !== -1
  );
};
