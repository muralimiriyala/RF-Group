export const navigator = {
  init() {
    const platform = window.navigator.userAgent;
    console.log(platform, 'plat21');
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      if (navigator.userAgent.indexOf('Win') !== -1) {
        console.log('The user is on a Windows operating system.');
      } else {
        console.log('The user is not on a Windows operating system.');
      }
    } else {
      console.log('navigator is not available in this environment.');
    }
  },
};
