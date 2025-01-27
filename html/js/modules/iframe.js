import 'youtube-background';
export const iframe = {
  iframes: document.querySelectorAll('.home-banner-iframe'),
  init() {
    const _ = this;
    _.iframes.forEach((iframe) => {
      if (!iframe) return;
      new VideoBackgrounds(iframe, {
        lazyloading: false,
      });
    });
  },
};
