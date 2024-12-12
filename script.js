const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url_base_path =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f0e4148f524405c9aebb149ee25bed2";
const main = document.querySelector("main");

/**
 * This function makes an HTTP request for news data
 * @param {*} path
 * @returns {object} data
 */
function getAllNewsArticles(path) {
  fetch(proxyUrl + path)
    .then((response) => {
      // Check if response is ok (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Check if articles exist in the data
      if (!data.articles) {
        throw new Error("No articles found in the response.");
      }
      const { articles } = data;
      extraction(articles);
    })
    .catch((error) => {
      // Log any errors that occur
      console.error("Error fetching news data:", error);
    });
}

getAllNewsArticles(url_base_path);

/**
 * This function takes a list of articles and loops through them
 * for each article, it extracts the properties to be used for manipulation
 * It uses innerHTML to render the data
 * @param {*} listArticles
 */
function extraction(listArticles) {
  const heroArticle = listArticles[0];
  const { source, author, title, description, url, urlToImage } = heroArticle;

  main.innerHTML += /*html*/ `
    <div class="news">
      <h1>${title}</h1>
      <div class="news-content">
        <img style="width: 500px; height: 400px" src="${urlToImage}" alt="" />
        <div class="description">
          <p>${description}</p>
          <h3>Author: ${author}</h3>
          <p>Source: ${source.name}</p>
        </div>
      </div>
    </div>
  `;

  listArticles.forEach((article) => {
    const { source, author, title, description, url, urlToImage } = article;

    main.innerHTML += /*html*/ `
      <div class="Headlines">
        <div class="Headline-card">
          <p>${description}</p>
          <img src="${urlToImage}" alt="${description}" />
        </div>
      </div>
    `;
  });
}
