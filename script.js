const url_base_path =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f0e4148f524405c9aebb149ee25bed2";

/**
 *
 * @param {*} path
 * this function makes an http request for news data
 * @returns {object} data
 * so here we have a list of articles
 * each article is an object with source and other props
 */
async function getAllNewsArticles(path) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { articles } = data;
      excraction(articles);
    })
    .catch((erro) => console.log(erro));
}

getAllNewsArticles(url_base_path);

function excraction(listArticles) {
  listArticles.forEach((articel) => {
    const { source } = articel;
    console.log(source);
  });
}
