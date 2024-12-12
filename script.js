const url_base_path =
  "https://newsapi.org/v2/everything?q=Apple&from=2024-12-12&sortBy=popularity&apiKey=API_KEY";
/**
 *
 * @param {*} path
 * this function makes an http request for news data
 * @returns {object} data
 */
async function getAllNews(path) {
  const response = await fetch(path);
  const data = await response.json();
  console.log(data);
}

getAllNews(url_base_path);
