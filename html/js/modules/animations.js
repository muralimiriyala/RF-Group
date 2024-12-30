import imagesLoaded from 'imagesloaded';
import 'is-in-viewport';
import 'jquery.appear';

imagesLoaded.makeJQueryPlugin($);
const $body = $('body');

export const animations = {
  init() {
    const _ = this;
    const dy = -$(window).height() / 4;

    // Iterate through all elements with data-animation attributes
    $('[data-animation]:not(img)').each(function () {
      const $self = $(this);
      const animation = $self.data('animation');
      const animateType = $self.data('animate');
      const delay = Number($self.data('animation-delay') || 0);

      // If element is already in the viewport on page load
      if ($self.is(':in-viewport')) {
        setTimeout(() => {
          if (animateType) {
            _.animateRun($self, animateType);
          } else {
            $self.addClass('visible ' + (animation ? animation : ''));
          }
        }, delay);
      } else {
      }
    });

    // Handle animations when images are loaded
    $body.imagesLoaded().progress(function (instance, image) {
      const $img = $(image.img);
      if ($img.data('animation')) {
        $img.appear(
          function () {
            const delay = $img.data('animation-delay');
            setTimeout(function () {
              $img.addClass($img.data('animation')).addClass('visible');
            }, delay);
          },
          { accY: dy }
        );
      }
    });
  },

  animateRun($el, type) {
    $el.addClass('visible');

    if (type === 'counter') {
      const $counter = $el[0];
      if ($counter.counter && $counter.counter.paused) {
        $counter.counter.start();
      }
    }
  },

  animateReset($el, type) {
    $el.removeClass('visible');
  },

  // Handle scroll events to trigger animations
  handle(scrolled, direction) {
    const _ = this;
    console.log(scrolled, 'teetet');

    $('[data-animation]:not(img)').each(function () {
      const $self = $(this);
      const selfOffset = $self.offset().top;
      const animation = $self.data('animation');
      const animateType = $self.data('animate');
      const delay = Number($self.data('animation-delay') || 0);
      const offset = $(window).height() * 0.95; // Adjust threshold to control animation start point

      if (
        direction === 'DOWN' &&
        scrolled >= selfOffset - offset &&
        !$self.hasClass('visible')
      ) {
        // Animate element when scrolling down into viewport
        setTimeout(() => {
          if (animateType) {
            _.animateRun($self, animateType);
          } else {
            $self.addClass('visible ' + (animation ? animation : ''));
          }
        }, delay);
      } else if (
        direction === 'UP' &&
        $self.is(`:in-viewport(${-offset})`) &&
        !$self.hasClass('visible')
      ) {
        // Animate element when scrolling up into viewport
        setTimeout(() => {
          if (animateType) {
            _.animateRun($self, animateType);
          } else {
            $self.addClass('visible ' + (animation ? animation : ''));
          }
        }, delay);
      } else if (
        direction === 'UP' &&
        !$self.is(':in-viewport') &&
        $self.offset().top > scrolled &&
        $self.hasClass('visible')
      ) {
        // Reset animation when element leaves the viewport
        if (animateType) {
          _.animateReset($self, animateType);
        } else {
          $self.removeClass('visible ' + (animation ? animation : ''));
        }
      }
    });
  },
};
