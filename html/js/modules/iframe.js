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
        autoplay: false,
        autoplay: true,
        mute: true,
        loop: true,
        mobile: true,
        fitToBackground: true
      });
    });
    setTimeout(() => {
      jQuery('.post-banner-iframe').css({
        opacity: 1,
      });
      jQuery('.post-banner-iframe iframe').each(function () {
        let src = jQuery(this).attr('src');
        jQuery(this).parent().css({
          'pointer-events': 'inherit',
        });
        jQuery(this).css({
          opacity: 1,
        });
        if (src && src.includes('youtube-nocookie.com')) {
          let videoId = src.split('/embed/')[1]?.split('?')[0]; // Extract Video ID

          // Construct new clean URL
          let cleanSrc = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&controls=1`;

          jQuery(this).attr('src', cleanSrc); // Set cleaned URL
        }
      });
    }, 2000); // Delay to ensure iframe is generated
  },
};
