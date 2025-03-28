jQuery(document).ready(function () {
    jQuery(".tooltip-container").mouseenter(function () {
        let $tooltip = jQuery(this).find(".tooltip-txt");
        let rect = $tooltip[0].getBoundingClientRect();

        // Check if tooltip overflows to the right
        if (rect.right > jQuery(window).width()) {
            $tooltip.css({
                "left": "auto",
                "right": "0px",
                "transform": "none"
            });
        }
        // Check if tooltip overflows to the left
        else if (rect.left < 0) {
            $tooltip.css({
                "left": "0px",
                "right": "auto",
                "transform": "none"
            });
        }
        // Default centered positioning
        else {
            $tooltip.css({
                "left": "50%",
                "right": "auto",
                "transform": "translateX(-50%)"
            });
        }
    });
});
