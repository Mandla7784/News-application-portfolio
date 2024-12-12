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
      console.log(data);
      const { articles } = data;
      excraction(articles);
    })
    .catch((erro) => console.log(erro));
}

getAllNewsArticles(url_base_path);

function excraction(listArticles) {
  main.innerHTML += /*html*/ `

   <div class="news">
        <h1>Watch over 1000 of these news</h1>
        <div class="news-content">
          <img
            style="width: 500px; height: 400px"
            src="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="
            alt=""
          />
          <div class="describtion">
            <p>
              According to an update from MEC for Finance and Economic
              Development Lebogang Maile on Wednesday, over 1 000 applications
              for spaza shop registration in Gauteng have been put on hold due
              to incomplete or missing critical supporting documents.
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
