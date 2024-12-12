const url_base_path =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f0e4148f524405c9aebb149ee25bed2";

/**
 *
 * @param {*} path
 * this function makes an http request for news data
 * @returns {object} data
 */
async function getAllNewsArticles(path) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { articles } = data;
      console.log(articles);
    })
    .catch((erro) => console.log(erro));
}

getAllNews(url_base_path);
