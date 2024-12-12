const url_base_path =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f0e4148f524405c9aebb149ee25bed2";
const main = document.querySelector("main");
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
      const { articles } = data;
      excraction(articles);
    })
    .catch((erro) => console.log(erro));
}
// Updates

getAllNewsArticles(url_base_path);

/**
 *
 * @param {*} listArticles
 * this function takes a list of articles and loop through
 * for each article it excracts the properties to be used for manipultation..
 * makes use of innerHtml to render the data
 */
function excraction(listArticles) {
  const heroArtilce = listArticles[0];
  const { source, author, title, description, url, urlToImage } = heroArtilce;

  main.innerHTML += /*html*/ `

   <div class="news">
        <h1>${title}</h1>
        <div class="news-content">
          <img
            style="width: 500px; height: 400px"
             src =${urlToImage}
            alt=""
          />
          <div class="describtion">
            <p>
               ${description}
            </p>
            <h3>Author: ${author}</h3>
            <p>
               Source:${source.name}
            </p>
          </div>
        </div>
      </div>


`;

  listArticles.forEach((articel) => {
    const { source, author, title, description, url, urlToImage } = articel;
    const { id, name } = source;
    main.innerHTML += /*html*/ `
    <div class="Headlines">
        <div class="Headline-card">
          <p>
            ${description}
          </p>
          <img
             src = ${urlToImage}
            alt=${description}
          />
        </div>

    </div>
    
    
    `;
  });
}
