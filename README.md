<img src="src/assets/images/libredirect.svg" width="150" align="right" />

# LibRedirect
A web extension that redirects YouTube, Twitter, Instagram... requests to alternative privacy friendly frontends and backends.

Youtube => [Piped](https://github.com/TeamPiped/Piped), [Invidious](https://github.com/iv-org/invidious), [FreeTube](https://github.com/FreeTubeApp/FreeTube)\
Twitter => [Nitter](https://github.com/zedeus/nitter)\
Instagram => [Bibliogram](https://sr.ht/~cadence/bibliogram/)\
TikTok => [ProxiTok](https://github.com/pablouser1/ProxiTok)\
Imgur => [Rimgo](https://codeberg.org/video-prize-ranch/rimgo)\
Reddit => [Libreddit](https://github.com/spikecodes/libreddit#instances), [Teddit](https://codeberg.org/teddit/teddit#instances), [Old Reddit](https://old.reddit.com), [Mobile Reddit](https://i.reddit.com)\
Search => [SearX](https://searx.github.io/searx/), [Whoogle](https://benbusby.com/projects/whoogle-search/)\
Translate => [SimplyTranslate](https://git.sr.ht/~metalune/simplytranslate_web), [LingvaTranslate](https://github.com/TheDavidDelta/lingva-translate)\
Maps => [OpenStreetMap](https://www.openstreetmap.org/)\
Wikipedia => [Wikiless](https://codeberg.org/orenom/wikiless)\
Medium => [Scribe](https://sr.ht/~edwardloveall/scribe/)

**Note**: It will default to using random instances if none are selected. You can also set custom instances.

[![Matrix Badge](https://badges.alefvanoon.xyz/matrix/libredirect:matrix.org?label=Matrix)](https://matrix.to/#/#libredirect:tokhmi.xyz)
[![PrivacyPolicy](https://badges.alefvanoon.xyz/badge/-PrivacyPolicy-orange)](Privacy-Policy.md)

## Get
[![Firefox Add-on](src/assets/images/badge-amo.png)](https://addons.mozilla.org/firefox/addon/libredirect/)

## Donate
**BTC:** `bc1qrhue0frps6p2vkg978u9ayethnwprtmfug827q`

## Development
### Install Dependencies
- [Node.js](https://nodejs.org/) latest LTS is recommended
- `npm update`
- `npm install`

### Build
- `npm run build`

### Test
- `npm run test`

### Test in Firefox
- `npm run-script start`

### Install temporarily
- open `about:addons`
- click on the settings button below the addon search bar and select `debug add-on`
- press `load temporarily addon`

### Install in Firefox ESR (Extended Support Release), Developer Edition and Nightly
- open `about:config`
- set `xpinstall.signatures.required` to `false`
- open `about:addons`
- click on the settings button below the addon search bar and select install add-on from file
- select libredirect-VERSION.zip from 'web-ext-artifacts' folder

### Install in Chromium, Brave and Chrome
- open `chrome://extensions`
- enable `dev mode`
- select `load unpacked extension`
- select `src` folder

## Credits
- [Privacy Redirect](https://github.com/SimonBrazell/privacy-redirect)
