$(document).ready(function() {
    $('.fullpage').fullpage({
      scrollOverflow: true,
      scrollOverflowOptions: {click: false},
      menu: '.menu',
      anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
      afterRender: function () {
        $('.projects__last').html($('.projects__slides').length);
      },
      afterSlideLoad: function (section, origin, destination) {
        $('.projects__first').html(++destination.index);
      }
    });

    $(document).on('click', '.scroll-down', function () {
      fullpage_api.moveSectionDown();
    });

    $(document).on('click', '.projects__mini a', changeImg);
    function changeImg(event) {
      event.preventDefault();
      $('.projects__big img').attr('src', $(this).attr('data-src'));
    }

    $(document).on('input', '.calc', changeInput);
    function changeInput(event) {
      event.preventDefault();
      $(this).find('.calc__range output').val($(this).find('.calc__range input').val());
    }
});