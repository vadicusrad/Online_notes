const _apiBase = 'https://jsonplaceholder.typicode.com/';

function getResource() {
  axios.get(`${_apiBase}posts`).then((res) => {});
}
