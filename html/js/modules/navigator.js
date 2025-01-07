export const navigator = {
  init() {
    function getOS() {
      let userAgent = window.navigator.userAgent.toLowerCase(),
        macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
        windowsPlatforms = /(win32|win64|windows|wince)/i;
      if (macosPlatforms.test(userAgent)) {
        return 'mac-os';
      } else if (windowsPlatforms.test(userAgent)) {
        return 'windows';
      }
    }
    document.querySelector('body').classList.add(getOS());
  },
};
