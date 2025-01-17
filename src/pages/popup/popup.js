"use strict";
window.browser = window.browser || window.chrome;

import commonHelper from "../../assets/javascripts/helpers/common.js";
import youtubeHelper from "../../assets/javascripts/helpers/youtube/youtube.js";
import twitterHelper from "../../assets/javascripts/helpers/twitter.js";
import instagramHelper from "../../assets/javascripts/helpers/instagram.js";
import mapsHelper from "../../assets/javascripts/helpers/maps.js";
import redditHelper from "../../assets/javascripts/helpers/reddit.js";
import searchHelper from "../../assets/javascripts/helpers/search.js";
import translateHelper from "../../assets/javascripts/helpers/translate.js";
import wikipediaHelper from "../../assets/javascripts/helpers/wikipedia.js";
import mediumHelper from "../../assets/javascripts/helpers/medium.js";
import imgurHelper from "../../assets/javascripts/helpers/imgur.js";
import tiktokHelper from "../../assets/javascripts/helpers/tiktok.js";

let disableTwitterElement = document.querySelector("#disable-nitter");
let disableYoutubeElement = document.querySelector("#disable-invidious");
let disableInstagramElement = document.querySelector("#disable-bibliogram");
let disableMapsElement = document.querySelector("#disable-osm");
let disableRedditElement = document.querySelector("#disable-reddit");
let disableSearchElement = document.querySelector("#disable-search");
let disableElement = document.querySelector("#disable-simplyTranslate");
let disableWikipediaElement = document.querySelector("#disable-wikipedia");
let disableMediumElement = document.querySelector("#disable-medium");
let disableImgurElement = document.querySelector("#disable-imgur");
let disableTiktokElement = document.querySelector("#disable-tiktok");

async function wholeInit() {
  await youtubeHelper.init();
  await twitterHelper.init();
  await instagramHelper.init();
  await mapsHelper.init();
  await redditHelper.init();
  await searchHelper.init();
  await translateHelper.init();
  await wikipediaHelper.init();
  await imgurHelper.init();
  await tiktokHelper.init();
  await mediumHelper.init();
};

wholeInit().then(() => {
  disableTwitterElement.checked = !twitterHelper.getDisable();
  disableYoutubeElement.checked = !youtubeHelper.getDisable();
  disableInstagramElement.checked = !instagramHelper.getDisable();
  disableMapsElement.checked = !mapsHelper.getDisable();
  disableRedditElement.checked = !redditHelper.getDisableReddit();
  disableSearchElement.checked = !searchHelper.getDisable();
  disableElement.checked = !translateHelper.getDisable();
  disableWikipediaElement.checked = !wikipediaHelper.getDisable();
  disableImgurElement.checked = !imgurHelper.getDisable();
  disableTiktokElement.checked = !tiktokHelper.getDisable();
  disableMediumElement.checked = !mediumHelper.getDisable();
})

disableTwitterElement.addEventListener("change",
  (event) => twitterHelper.setDisable(!event.target.checked)
);

disableYoutubeElement.addEventListener("change",
  (event) => youtubeHelper.setDisable(!event.target.checked)
);

disableInstagramElement.addEventListener("change",
  (event) => instagramHelper.setDisable(!event.target.checked)
);

disableMapsElement.addEventListener("change",
  (event) => mapsHelper.setDisable(!event.target.checked)
);

disableRedditElement.addEventListener("change",
  (event) => redditHelper.setDisableReddit(!event.target.checked)
);

disableSearchElement.addEventListener("change",
  (event) => searchHelper.setDisable(!event.target.checked)
);

disableElement.addEventListener("change",
  (event) => translateHelper.setDisable(!event.target.checked)
);

disableWikipediaElement.addEventListener("change",
  (event) => wikipediaHelper.setDisable(!event.target.checked)
);

disableImgurElement.addEventListener("change",
  (event) => imgurHelper.setDisable(!event.target.checked)
);

disableTiktokElement.addEventListener("change",
  (event) => tiktokHelper.setDisable(!event.target.checked)
);

disableMediumElement.addEventListener("change",
  (event) => mediumHelper.setDisable(!event.target.checked)
);

document.querySelector("#more-options").addEventListener("click", () => {
  browser.runtime.openOptionsPage();
});
