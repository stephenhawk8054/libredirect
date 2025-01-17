window.browser = window.browser || window.chrome;
import commonHelper from './common.js'

const targets = [
  "instagram.com",
  "www.instagram.com",
  "help.instagram.com",
  "about.instagram.com",
];
let redirects = {
  "bibliogram": {
    "normal": [
      "https://bibliogram.art",
      "https://bibliogram.snopyta.org",
      "https://bibliogram.pussthecat.org",
      "https://bibliogram.1d4.us",
      "https://insta.trom.tf",
      "https://bib.riverside.rocks",
      "https://bibliogram.esmailelbob.xyz",
      "https://bib.actionsack.com",
      "https://biblio.alefvanoon.xyz"
    ]
  }
};
const getRedirects = () => redirects;
const getCustomRedirects = function () {
  return {
    "bibliogram": {
      "normal": [...bibliogramRedirectsChecks, ...bibliogramCustomRedirects]
    },
  };
};
function setRedirects(val) {
  redirects.bibliogram = val;
  browser.storage.sync.set({ instagramRedirects: redirects })
  console.log("instagramRedirects: ", val)
  for (const item of bibliogramRedirectsChecks)
    if (!redirects.bibliogram.normal.includes(item)) {
      var index = bibliogramRedirectsChecks.indexOf(item);
      if (index !== -1) bibliogramRedirectsChecks.splice(index, 1);
    }
  setBibliogramRedirectsChecks(bibliogramRedirectsChecks);
}

let bibliogramRedirectsChecks;
const getBibliogramRedirectsChecks = () => bibliogramRedirectsChecks;
function setBibliogramRedirectsChecks(val) {
  bibliogramRedirectsChecks = val;
  browser.storage.sync.set({ bibliogramRedirectsChecks })
  console.log("bibliogramRedirectsChecks: ", val)
}

let bibliogramCustomRedirects = [];
const getBibliogramCustomRedirects = () => bibliogramCustomRedirects;
function setBibliogramCustomRedirects(val) {
  bibliogramCustomRedirects = val;
  browser.storage.sync.set({ bibliogramCustomRedirects })
  console.log("bibliogramCustomRedirects: ", val)
}

const reservedPaths = [
  "about",
  "explore",
  "support",
  "press",
  "api",
  "privacy",
  "safety",
  "admin",
  "graphql",
  "accounts",
  "help",
  "terms",
  "contact",
  "blog",
  "igtv",
  "u",
  "p",
  "fragment",
  "imageproxy",
  "videoproxy",
  ".well-known",
  "tv",
  "reel",
];

const bypassPaths = /\/(accounts\/|embeds?.js)/;

let disable;
const getDisable = () => disable;
function setDisable(val) {
  disable = val;
  browser.storage.sync.set({ disableInstagram: disable })
}

function isInstagram(url, initiator) {
  if (disable) return false;
  if (
    initiator &&
    ([...redirects.bibliogram.normal, ...bibliogramCustomRedirects].includes(initiator.origin) || targets.includes(initiator.host))
  )
    return false; // Do not redirect Bibliogram view on Instagram links
  return targets.includes(url.host)
}

function redirect(url, type) {
  if (type !== "main_frame" || url.pathname.match(bypassPaths))
    return 'CANCEL'; // Do not redirect /accounts, /embeds.js, or anything other than main_frame

  let instancesList = [...bibliogramRedirectsChecks, ...bibliogramCustomRedirects];
  if (instancesList.length === 0) return null;
  let randomInstance = commonHelper.getRandomInstance(instancesList)

  if (url.pathname === "/" || reservedPaths.includes(url.pathname.split("/")[1]))
    return `${randomInstance}${url.pathname}${url.search}`;
  else
    return `${randomInstance}/u${url.pathname}${url.search}`; // Likely a user profile, redirect to '/u/...'
}


async function init() {
  return new Promise((resolve) => {
    browser.storage.sync.get(
      [
        "disableInstagram",
        "instagramRedirects",
        "bibliogramRedirectsChecks",
        "bibliogramCustomRedirects",
      ],
      (result) => {
        disable = result.disableInstagram ?? false;

        if (result.instagramRedirects) redirects = result.instagramRedirects

        bibliogramRedirectsChecks = result.bibliogramRedirectsChecks ?? [...redirects.bibliogram.normal];
        bibliogramCustomRedirects = result.bibliogramCustomRedirects ?? [];

        resolve();
      }
    )
  })
}

export default {
  getRedirects,
  getCustomRedirects,
  setRedirects,

  getDisable,
  setDisable,

  getBibliogramRedirectsChecks,
  setBibliogramRedirectsChecks,

  getBibliogramCustomRedirects,
  setBibliogramCustomRedirects,

  isInstagram,

  redirect,
  init,
};
