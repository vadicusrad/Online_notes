import axios from 'axios';

const baseURL = 'https://6230a297f113bfceed575b81.mockapi.io/database/posts/';

class api {
  // GET POSTS
  async getPosts() {
    return await axios
      .get(`${baseURL}`)
      .then((res) => {
        console.log('getPosts ===', res);
        return res.data;
      })
      .catch((error) => console.error(error));
  }

  // GET SINGLE POST
  async getSinglePost(id) {
    return await axios
      .get(`${baseURL}${id}`)
      .then((res) => {
        console.log('getSinglePost ===', res);
        return res.data;
      })
      .catch((error) => console.error(error));
  }

  // CREATE NEW POST
  async createNewPost(newPostObject) {
    return await axios
      .post(`${baseURL}`, newPostObject)
      .then((res) => {
        console.log('createNewPost ===', res);
        return res.data;
      })
      .catch((error) => console.error(error));
  }
  //  TOGGLE LIKE
  async toggleLike(id, toggleLikeObject) {
    return await axios
      .put(`${baseURL}${id}`, toggleLikeObject)
      .then((res) => {
        console.log('toggleLike ===', res);
        return res.data;
      })
      .catch((error) => console.error(error));
  }
  //  DELETE POST
  async deletePost(id) {
    return await axios
      .delete(`${baseURL}${id}`)
      .then((res) => {
        console.log('deletePost ===', res);
        return res.data.id;
      })
      .catch((error) => console.error(error));
  }

  async putPost(id, objectToPut) {
    return await axios
      .put(`${baseURL}${id}`, objectToPut)
      .then((res) => {
        console.log('changePost ===', res);
        return res;
      })
      .catch((error) => console.error(error));
  }
}
export default new api();
