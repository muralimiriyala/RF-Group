jQuery(document).ready(function ($) {
  $('.filter-links a').on('click', function (e) {
    // e.preventDefault();

    $('.filter-links a').removeClass('active');
    $(this).addClass('active');

    const categorySlug = $(this).data('slug');

    $.ajax({
      url: ajax_object.ajax_url,
      type: 'POST',
      data: {
        action: 'filter_team_posts',
        category: categorySlug,
      },

      success: function (response) {
        $('.team-mem-row').html(response);
      },
      error: function (xhr, status, error) {
        console.error('AJAX Error:', status, error);
      },
    });
  });
});
