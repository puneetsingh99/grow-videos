// const API_ROOT = `http://localhost:5000`;
const API_ROOT = `https://salty-savannah-53232.herokuapp.com`;

export const API_ALL_VIDEOS = `${API_ROOT}/videos`;
export const apiGetVideo = (videoId) => `${API_ALL_VIDEOS}/${videoId}`;

export const API_LOGIN = `${API_ROOT}/login`;
export const API_SIGNUP = `${API_ROOT}/user`;
export const API_SEARCH = `${API_ROOT}/videos/search`;
export const apiGetUser = (userId) => `${API_ROOT}/user/${userId}`;
