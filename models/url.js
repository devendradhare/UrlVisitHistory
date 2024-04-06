const mongoose = require("mongoose");
// const deviceInfoSchema = new mongoose.Schema({
//   isYaBrowser: Boolean,
//   isAuthoritative: Boolean,
//   isMobile: Boolean,
//   isMobileNative: Boolean,
//   isTablet: Boolean,
//   isiPad: Boolean,
//   isiPod: Boolean,
//   isiPhone: Boolean,
//   isiPhoneNative: Boolean,
//   isAndroid: Boolean,
//   isAndroidNative: Boolean,
//   isBlackberry: Boolean,
//   isOpera: Boolean,
//   isIE: Boolean,
//   isEdge: Boolean,
//   isIECompatibilityMode: Boolean,
//   isSafari: Boolean,
//   isFirefox: Boolean,
//   isWebkit: Boolean,
//   isChrome: Boolean,
//   isKonqueror: Boolean,
//   isOmniWeb: Boolean,
//   isSeaMonkey: Boolean,
//   isFlock: Boolean,
//   isAmaya: Boolean,
//   isPhantomJS: Boolean,
//   isEpiphany: Boolean,
//   isDesktop: Boolean,
//   isWindows: Boolean,
//   isLinux: Boolean,
//   isLinux64: Boolean,
//   isMac: Boolean,
//   isChromeOS: Boolean,
//   isBada: Boolean,
//   isSamsung: Boolean,
//   isRaspberry: Boolean,
//   isBot: Boolean,
//   isCurl: Boolean,
//   isAndroidTablet: Boolean,
//   isWinJs: Boolean,
//   isKindleFire: Boolean,
//   isSilk: Boolean,
//   isCaptive: Boolean,
//   isSmartTV: Boolean,
//   isUC: Boolean,
//   isFacebook: Boolean,
//   isAlamoFire: Boolean,
//   isElectron: Boolean,
//   silkAccelerated: Boolean,
//   browser: String,
//   version: String,
//   os: String,
//   platform: String,
//   geoIp: {},
//   source: String,
//   isWechat: Boolean,
//   ip: String,
// });
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: { type: Date },
        deviceInfo: {
          isYaBrowser: Boolean,
          isAuthoritative: Boolean,
          isMobile: Boolean,
          isMobileNative: Boolean,
          isTablet: Boolean,
          isiPad: Boolean,
          isiPod: Boolean,
          isiPhone: Boolean,
          isiPhoneNative: Boolean,
          isAndroid: Boolean,
          isAndroidNative: Boolean,
          isBlackberry: Boolean,
          isOpera: Boolean,
          isIE: Boolean,
          isEdge: Boolean,
          isIECompatibilityMode: Boolean,
          isSafari: Boolean,
          isFirefox: Boolean,
          isWebkit: Boolean,
          isChrome: Boolean,
          isKonqueror: Boolean,
          isOmniWeb: Boolean,
          isSeaMonkey: Boolean,
          isFlock: Boolean,
          isAmaya: Boolean,
          isPhantomJS: Boolean,
          isEpiphany: Boolean,
          isDesktop: Boolean,
          isWindows: Boolean,
          isLinux: Boolean,
          isLinux64: Boolean,
          isMac: Boolean,
          isChromeOS: Boolean,
          isBada: Boolean,
          isSamsung: Boolean,
          isRaspberry: Boolean,
          isBot: Boolean,
          isCurl: Boolean,
          isAndroidTablet: Boolean,
          isWinJs: Boolean,
          isKindleFire: Boolean,
          isSilk: Boolean,
          isCaptive: Boolean,
          isSmartTV: Boolean,
          isUC: Boolean,
          isFacebook: Boolean,
          isAlamoFire: Boolean,
          isElectron: Boolean,
          silkAccelerated: Boolean,
          browser: String,
          version: String,
          os: String,
          platform: String,
          geoIp: {},
          source: String,
          isWechat: Boolean,
          ip: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
