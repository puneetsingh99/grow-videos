const API_ROOT = `http://localhost:5000`;

export const API_ALL_VIDEOS = `${API_ROOT}/videos`;
export const getVideoAPI = (videoId) => `${API_ALL_VIDEOS}/${videoId}`;

export const API_LOGIN = `${API_ROOT}/login`;
export const API_SIGNUP = `${API_ROOT}/signup`;
