const API_ROOT = `http://localhost:5000`;
// const API_ROOT = `https://salty-savannah-53232.herokuapp.com`;

export const API_ALL_VIDEOS = `${API_ROOT}/videos`;
export const apiGetVideo = (videoId) => `${API_ALL_VIDEOS}/${videoId}`;

export const API_LOGIN = `${API_ROOT}/login`;
export const API_SIGNUP = `${API_ROOT}/user`;
export const apiGetUser = (userId) => `${API_ROOT}/user/${userId}`;

//addToPlaylist, removeFromPlaylist
// {
//     "videoId": "",
//     playlistName: ""
// }

//createPlaylist, removePlaylist
// {
//     playlistName: ""
// }

// 6116d3624bbdb52668515dba
// 6116d39d4bbdb52668515dbd
// 6116d3ab4bbdb52668515dbf
// 6116d3b64bbdb52668515dc1
// 6116d3c24bbdb52668515dc3
// 6116d3cd4bbdb52668515dc5
// 611c203f6ea28120d05a2ad2
// 611c21c86ea28120d05a2ad8
