import $ from 'jquery';
import 'youtube-background';
export const iframe = {
  iframes: document.querySelectorAll('.home-banner-iframe'),
  init() {
    const _ = this;
    _.iframes.forEach((iframe) => {
      if (!iframe) return;
      const $iframe = jQuery(iframe);
      $iframe.youtube_background({
        lazyloading: false,
      });
    });
  },
};
