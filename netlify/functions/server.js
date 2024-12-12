const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const url_base_path = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;

axios
  .get(url_base_path)
  .then((res) => {
    console.log("Full Response:", res);
    if (res.status < 200 || res.status >= 300) {
      throw new Error("HTTP error: " + res.status);
    }
    return res.data; // Return data if response is successful
  })
  .then((data) => {
    console.log("Fetched news data:", data);
  })
  .catch((error) => {
    console.log("Oops results ....", error.message);
  });
