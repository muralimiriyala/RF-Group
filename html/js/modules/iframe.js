import $ from 'jquery';
import 'youtube-background';
export const iframe = {
  iframes: document.querySelectorAll('.home-banner-iframe'),
  postiframes: document.querySelectorAll('.post-banner-iframe'),
  init() {
    const _ = this;
    _.iframes.forEach((iframe) => {
      if (!iframe) return;
      const $iframe = jQuery(iframe);
      $iframe.youtube_background({
        lazyloading: false,
      });
    });
    _.postiframes.forEach((iframe) => {
      if (!iframe) return;
      const $iframe = jQuery(iframe);
      $iframe.youtube_background({
        lazyloading: false,
        // autoplay: false,
        'play-button': true,
      });
    });
  },
};
