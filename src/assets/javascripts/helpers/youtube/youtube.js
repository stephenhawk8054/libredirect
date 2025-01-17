"use strict";

import commonHelper from '../common.js'

window.browser = window.browser || window.chrome;

const targets = [
  /https?:\/\/(www\.|music\.|m\.|)youtube\.com(\/.*|$)/,

  /https?:\/\/img\.youtube\.com\/vi\/.*\/..*/, // https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
  /https?:\/\/(i|s)\.ytimg\.com\/vi\/.*\/..*/,

  /https?:\/\/(www\.|music\.|)youtube\.com\/watch\?v\=..*/,

  /https?:\/\/youtu\.be\/..*/,

  /https?:\/\/(www\.|)(youtube|youtube-nocookie)\.com\/embed\/..*/,
];
let redirects = {
  "invidious": {
    "normal": [
      "https://yewtu.be",
      "https://invidious.snopyta.org",
      "https://vid.puffyan.us",
      "https://invidious.kavin.rocks",
      "https://invidio.xamh.de",
      "https://inv.riverside.rocks",
      "https://invidious-us.kavin.rocks",
      "https://invidious.osi.kr",
      "https://inv.cthd.icu",
      "https://yt.artemislena.eu",
      "https://youtube.076.ne.jp",
      "https://invidious.namazso.eu"
    ],
    "onion": [
      "http://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion",
      "http://w6ijuptxiku4xpnnaetxvnkc5vqcdu7mgns2u77qefoixi63vbvnpnqd.onion",
      "http://kbjggqkzv65ivcqj6bumvp337z6264huv5kpkwuv6gu5yjiskvan7fad.onion",
      "http://grwp24hodrefzvjjuccrkw3mjq4tzhaaq32amf33dzpmuxe7ilepcmad.onion",
      "http://hpniueoejy4opn7bc4ftgazyqjoeqwlvh2uiku2xqku6zpoa4bf5ruid.onion",
      "http://osbivz6guyeahrwp2lnwyjk2xos342h4ocsxyqrlaopqjuhwn2djiiyd.onion",
      "http://u2cvlit75owumwpy4dj2hsmvkq7nvrclkpht7xgyye2pyoxhpmclkrad.onion"
    ]
  },
  "piped": {
    "normal": [
      "https://piped.kavin.rocks",
      "https://piped.silkky.cloud",
      "https://piped.tokhmi.xyz",
      "https://piped.mint.lgbt",
    ]
  }
};

const getRedirects = () => redirects;

const getCustomRedirects = function () {
  return {
    "invidious": {
      "normal": [...invidiousRedirectsChecks, ...invidiousCustomRedirects]
    },
    "piped": {
      "normal": [...pipedRedirectsChecks, ...pipedCustomRedirects]
    }
  };
};

function setInvidiousRedirects(val) {
  redirects.invidious = val;
  browser.storage.sync.set({ youtubeRedirects: redirects })
  console.log("invidiousRedirects: ", val)
}

let invidiousRedirectsChecks;
const getInvidiousRedirectsChecks = () => invidiousRedirectsChecks;
function setInvidiousRedirectsChecks(val) {
  invidiousRedirectsChecks = val;
  browser.storage.sync.set({ invidiousRedirectsChecks })
  console.log("invidiousRedirectsChecks: ", val)
}

let invidiousCustomRedirects = [];
const getInvidiousCustomRedirects = () => invidiousCustomRedirects;
function setInvidiousCustomRedirects(val) {
  invidiousCustomRedirects = val;
  browser.storage.sync.set({ invidiousCustomRedirects })
  console.log("invidiousCustomRedirects: ", val)
}

let pipedRedirectsChecks;
const getPipedRedirectsChecks = () => pipedRedirectsChecks;
function setPipedRedirectsChecks(val) {
  pipedRedirectsChecks = val;
  browser.storage.sync.set({ pipedRedirectsChecks })
  console.log("pipedRedirectsChecks: ", val)
}

let pipedCustomRedirects = [];
const getPipedCustomRedirects = () => pipedCustomRedirects;
function setPipedCustomRedirects(val) {
  pipedCustomRedirects = val;
  browser.storage.sync.set({ pipedCustomRedirects })
  console.log("pipedCustomRedirects: ", val)
}

function setPipedRedirects(val) {
  redirects.piped = val;
  browser.storage.sync.set({ youtubeRedirects: redirects })
  console.log("pipedRedirects: ", val)
}

let disable;
const getDisable = () => disable;
function setDisable(val) {
  disable = val;
  browser.storage.sync.set({ disableYoutube: disable })
  console.log("disableYoutube: ", disable)
}

let invidiousAlwaysProxy;
function setInvidiousAlwaysProxy(val) {
  invidiousAlwaysProxy = val;
  browser.storage.sync.set({ invidiousAlwaysProxy })
  console.log("invidiousAlwaysProxy: ", invidiousAlwaysProxy);
}
const getInvidiousAlwaysProxy = () => invidiousAlwaysProxy;

let OnlyEmbeddedVideo;
function setOnlyEmbeddedVideo(val) {
  OnlyEmbeddedVideo = val;
  browser.storage.sync.set({ OnlyEmbeddedVideo })
  console.log("OnlyEmbeddedVideo: ", OnlyEmbeddedVideo)
}
const getOnlyEmbeddedVideo = () => OnlyEmbeddedVideo;

let invidiousVideoQuality;
function setInvidiousVideoQuality(val) {
  invidiousVideoQuality = val;
  browser.storage.sync.set({ invidiousVideoQuality })
  console.log("invidiousVideoQuality: ", invidiousVideoQuality)
}
const getInvidiousVideoQuality = () => invidiousVideoQuality;

let theme;
const getTheme = () => theme;
function setTheme(val) {
  theme = val;
  browser.storage.sync.set({ youtubeTheme: theme })
  console.log("theme: ", theme)
}

let volume;
const getVolume = () => volume;
function setVolume(val) {
  volume = val;
  browser.storage.sync.set({ youtubeVolume: volume })
  console.log("youtubeVolume: ", volume)
}

let invidiousPlayerStyle;
const getInvidiousPlayerStyle = () => invidiousPlayerStyle;
function setInvidiousPlayerStyle(val) {
  invidiousPlayerStyle = val;
  browser.storage.sync.set({ invidiousPlayerStyle })
  console.log("invidiousPlayerStyle: ", invidiousPlayerStyle)
}

let invidiousSubtitles;
let getInvidiousSubtitles = () => invidiousSubtitles;
function setInvidiousSubtitles(val) {
  invidiousSubtitles = val;
  browser.storage.sync.set({ invidiousSubtitles })
  console.log("invidiousSubtitles: ", invidiousSubtitles)
}

let autoplay;
const getAutoplay = () => autoplay;
function setAutoplay(val) {
  autoplay = val;
  browser.storage.sync.set({ youtubeAutoplay: autoplay })
  console.log("autoplay: ", autoplay)
}

let frontend;
const getFrontend = () => frontend;
function setFrontend(val) {
  frontend = val;
  browser.storage.sync.set({ youtubeFrontend: val })
  console.log("youtubeFrontend: ", val)
}

let freetubeFrontend;
const getFreetubeFrontend = () => freetubeFrontend;
function setFreetubeFrontend(val) {
  freetubeFrontend = val;
  browser.storage.sync.set({ freetubeFrontend })
  console.log("freetubeFrontend: ", freetubeFrontend)
}

let persistInvidiousPrefs;
const getPersistInvidiousPrefs = () => persistInvidiousPrefs;
function setPersistInvidiousPrefs(val) {
  persistInvidiousPrefs = val;
  browser.storage.sync.set({ persistInvidiousPrefs })
  console.log("persistInvidiousPrefs: ", persistInvidiousPrefs)
}

let alwaysusePreferred;
const getAlwaysusePreferred = () => alwaysusePreferred;
function setAlwaysusePreferred(val) {
  alwaysusePreferred = val;
  browser.storage.sync.set({ alwaysusePreferred })
  console.log("alwaysusePreferred: ", alwaysusePreferred)
}

function isYoutube(url, initiator) {
  if (disable) return false;

  if (
    initiator && (
      [...redirects.invidious.normal, ...invidiousCustomRedirects].includes(initiator.origin) ||
      [...redirects.piped.normal, ...pipedCustomRedirects].includes(initiator.origin) ||
      targets.includes(initiator.host)
    )
  ) return false;

  let pipedInstancesList = [...pipedRedirectsChecks, ...pipedCustomRedirects];
  let invidiousInstancesList = [...invidiousRedirectsChecks, ...invidiousCustomRedirects];
  let isTargets = targets.some((rx) => rx.test(url.href));
  let protocolHost = `${url.protocol}//${url.host}`;

  let isInvidious = redirects.invidious.normal.includes(protocolHost);
  if (isInvidious) for (const iterator of invidiousInstancesList) if (iterator.indexOf(protocolHost) === 0) isInvidious = false;

  let isPiped = redirects.piped.normal.includes(protocolHost);
  if (isPiped) for (const iterator of pipedInstancesList) if (iterator.indexOf(protocolHost) === 0) isPiped = false;

  if (frontend == 'invidious') {
    if (alwaysusePreferred)
      return isTargets | isPiped | isInvidious;
    else
      return isTargets | isPiped;
  }
  if (frontend == 'piped') {
    if (alwaysusePreferred)
      return isTargets | isPiped | isInvidious;
    else
      return isTargets | isInvidious;
  }
  else
    return isTargets
}

function redirect(url, type) {
  if (url.pathname.match(/iframe_api/) || url.pathname.match(/www-widgetapi/)) return null; // Don't redirect YouTube Player API.

  if (frontend == 'freetube' && type === "main_frame")
    return `freetube://${url}`;

  else if (frontend == 'freetube' && type !== "main_frame" && freetubeFrontend == "youtube")
    return null;

  else if (frontend == 'invidious' || (frontend == 'freetube' && freetubeFrontend == 'invidious' && type == "sub_frame")) {

    if (OnlyEmbeddedVideo == 'onlyEmbedded' && type !== "sub_frame") return null;
    if (
      OnlyEmbeddedVideo == 'onlyNotEmbedded' && type !== "main_frame" &&
      !(frontend == 'freetube' && freetubeFrontend == 'invidious' && type === "sub_frame")
    ) return null;

    let instancesList = [...invidiousRedirectsChecks, ...invidiousCustomRedirects];
    if (instancesList.length === 0) return null;
    let randomInstance = commonHelper.getRandomInstance(instancesList);

    if (!url.searchParams.has("dark_mode")) if (theme != "DEFAULT") url.searchParams.append("dark_mode", theme);
    if (!url.searchParams.has("volume")) if (volume != "--") url.searchParams.append("volume", volume);
    if (!url.searchParams.has("autoplay")) if (autoplay != "DEFAULT") url.searchParams.append("autoplay", autoplay);

    if (!url.searchParams.has("local")) if (invidiousAlwaysProxy != "DEFAULT") url.searchParams.append("local", invidiousAlwaysProxy);
    if (!url.searchParams.has("quality")) if (invidiousVideoQuality != "DEFAULT") url.searchParams.append("quality", invidiousVideoQuality);
    if (!url.searchParams.has("player_style")) if (invidiousPlayerStyle != "DEFAULT") url.searchParams.append("player_style", invidiousPlayerStyle);
    if (!url.searchParams.has("subtitles")) if (invidiousSubtitles.trim() != '') url.searchParams.append("subtitles", invidiousSubtitles);

    return `${randomInstance}${url.pathname.replace("/shorts/", "/watch?v=")}${url.search}`;

  } else if (frontend == 'piped' || (frontend == 'freetube' && freetubeFrontend == 'piped' && type === "sub_frame")) {

    if (OnlyEmbeddedVideo == 'onlyEmbedded' && type !== "sub_frame") return null;
    if (
      OnlyEmbeddedVideo == 'onlyNotEmbedded' && type !== "main_frame" &&
      !(frontend == 'freetube' && freetubeFrontend == 'piped' && type == "sub_frame")
    ) return null;

    let instancesList = [...pipedRedirectsChecks, ...pipedCustomRedirects];
    if (instancesList.length === 0) return null;
    let randomInstance = commonHelper.getRandomInstance(instancesList);

    if (!url.searchParams.has("theme")) if (theme != "DEFAULT") url.searchParams.append("theme", theme);
    if (!url.searchParams.has("volume")) if (volume != "--") url.searchParams.append("volume", volume / 100);
    if (!url.searchParams.has("playerAutoPlay")) if (autoplay != "DEFAULT") url.searchParams.append("playerAutoPlay", autoplay);

    return `${randomInstance}${url.pathname.replace("/shorts/", "/watch?v=")}${url.search}`;
  }
  console.log(freetubeFrontend)
  console.log(type)
  return 'CANCEL';
}

function invidiousInitCookies(tabId) {
  browser.tabs.executeScript(
    tabId,
    {
      file: "/assets/javascripts/helpers/youtube/invidious-cookies.js",
      runAt: "document_start"
    }
  );
}

async function init() {
  return new Promise((resolve) => {
    browser.storage.sync.get(
      [
        "invidiousAlwaysProxy",
        "invidiousVideoQuality",
        "youtubeTheme",
        "persistInvidiousPrefs",
        "disableYoutube",
        "OnlyEmbeddedVideo",
        "youtubeVolume",
        "invidiousPlayerStyle",
        "invidiousSubtitles",
        "youtubeAutoplay",
        "youtubeRedirects",
        "youtubeFrontend",
        "invidiousRedirectsChecks",
        "invidiousCustomRedirects",
        "pipedRedirectsChecks",
        "pipedCustomRedirects",
        "alwaysusePreferred",
        "freetubeFrontend",
      ],
      (result) => {
        if (result.youtubeRedirects) redirects = result.youtubeRedirects;

        disable = result.disableYoutube ?? false;
        frontend = result.youtubeFrontend ?? 'piped';
        freetubeFrontend = result.freetubeFrontend ?? 'invidious';

        theme = result.youtubeTheme ?? 'DEFAULT';
        volume = result.youtubeVolume ?? '--';
        autoplay = result.youtubeAutoplay ?? 'DEFAULT';

        invidiousAlwaysProxy = result.invidiousAlwaysProxy ?? 'DEFAULT';
        OnlyEmbeddedVideo = result.OnlyEmbeddedVideo ?? 'both';
        invidiousVideoQuality = result.invidiousVideoQuality ?? 'DEFAULT';
        invidiousPlayerStyle = result.invidiousPlayerStyle ?? 'DEFAULT';
        invidiousSubtitles = result.invidiousSubtitles || '';

        invidiousRedirectsChecks = result.invidiousRedirectsChecks ?? [...redirects.invidious.normal];
        invidiousCustomRedirects = result.invidiousCustomRedirects ?? [];

        pipedRedirectsChecks = result.pipedRedirectsChecks ?? [...redirects.piped.normal];
        pipedCustomRedirects = result.pipedCustomRedirects ?? [];

        persistInvidiousPrefs = result.persistInvidiousPrefs ?? false;

        alwaysusePreferred = result.alwaysusePreferred ?? true;

        resolve();
      });

  })
}

export default {
  invidiousInitCookies,

  getFrontend,
  setFrontend,

  getFreetubeFrontend,
  setFreetubeFrontend,

  getRedirects,
  getCustomRedirects,
  setInvidiousRedirects,
  setPipedRedirects,

  redirect,
  isYoutube,

  getDisable,
  setDisable,

  setInvidiousAlwaysProxy,
  getInvidiousAlwaysProxy,

  setOnlyEmbeddedVideo,
  getOnlyEmbeddedVideo,

  setInvidiousVideoQuality,
  getInvidiousVideoQuality,

  setTheme,
  getTheme,

  setVolume,
  getVolume,

  setInvidiousPlayerStyle,
  getInvidiousPlayerStyle,

  setInvidiousSubtitles,
  getInvidiousSubtitles,

  setAutoplay,
  getAutoplay,

  getPersistInvidiousPrefs,
  setPersistInvidiousPrefs,

  getInvidiousRedirectsChecks,
  setInvidiousRedirectsChecks,

  getInvidiousCustomRedirects,
  setInvidiousCustomRedirects,

  getPipedRedirectsChecks,
  setPipedRedirectsChecks,

  getPipedCustomRedirects,
  setPipedCustomRedirects,

  getAlwaysusePreferred,
  setAlwaysusePreferred,

  init,
};
