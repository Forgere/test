(function (config, $) {
  if (!config.initialPage.length) {
    config.initialPage = $('#page1');
  }
  $(window).resize(function () {
    // console.log('resize');
    var $w = $(window),
      ww = $w.width(),
      wh = $w.height(),
      transform,
      transformMax;
    config.width = ww;
    config.height = wh;
    var scale = Math.min(config.width / 320, config.height / 500),
      scaleMax = Math.max(config.width / 320, config.height / 500);
    transform = 'translate(-50%,-50%) scale(' + scale + ',' + scale + ')';
    transformMax = 'translate(-50%,-50%) scale(' + scaleMax + ',' + scaleMax + ')';
    $('.page .inner').css('-webkit-transform', transform)
      .css('transform', transform);
    $('.page .inner-fill').css('-webkit-transform', transformMax)
      .css('transform', transformMax);
  }).resize();

  $(document).on('swipeUp swipeDown', '.pages .page:not(.animated)', function (e, force) {
    var pagesCount = $('.pages .page').length,//页面数
      $currentPage = $(e.currentTarget),//操作的页面
      index = $currentPage.index(), 
      next = index + {
        swipeUp: 1,
        swipeLeft: 1,    //写法？
        swipeDown: -1,
        swipeRight: -1
      }[e.type],
      direction = e.type.replace(/swipe/, '');
    if (next < 0 || next >= pagesCount) {
      return;
    }
    if ($currentPage.is('.lock') && !force) {
      return;
    }
    if ($currentPage.is('.lock-down') && next < index && !force) {
      return;
    }
    if ($currentPage.is('.lock-up') && next > index && !force) {
      return;
    }
    var $nextPage = $($('.pages .page')[next]);
    $nextPage.trigger('page:entering', [$nextPage.attr('id'), direction]);
  });

  $('.page').on('page:entering', function (e, id, direction) {
    var currentPage = $('.page.current'),
      page = $(this);
    console.log(page,currentPage.length, page.attr('id'), currentPage.attr('id'));
    if(currentPage.length && page.attr('id') !== currentPage.attr('id')) {
      console.log('leave',currentPage);
      currentPage.trigger('page:leaving', [currentPage.attr('id'), direction]);
    }
    page.css('z-index', 1).addClass('animated');
    if (config.swipeEnteringPage) {
      page.addClass('slideIn' + direction);
    }
    page.show()
    window.setTimeout(function () {
      page.trigger('page:enter', page.attr('id'));
    }, config.swipeDuration);
  });

  $('.page').on('page:enter', function () {
    var page = $(this).addClass('current');
    page.show()
      .removeClass('animated slideInUp slideInDown slideInLeft slideInRight');
    if (config.dev) {
      location.hash = '#' + page.attr('id'); //开发环境下更改url为当前页面
    } else {
      location.hash = '';
    }
  });

  $('.page').on('page:leaving', function (e, id, direction) {
    var page = $(this);
    page.css('z-index', 1)
      .addClass('animated')
      .addClass('slideOut' + direction);
    window.setTimeout(function () {
      page.trigger('page:leave', page.attr('id'));
    }, config.swipeDuration);
  });

  $('.page').on('page:leave', function () {
    var page = $(this).removeClass('current');
    page.hide().removeClass('animated slideOutUp slideOutDown slideOutLeft slideOutRight');
  });

  $(document).on('click', '[data-next-page]', function () {
    $('.page.current').trigger('swipeUp', true);
  });
  $(document).on('click', '[data-prev-page]', function () {
    $('.page.current').trigger('swipeDown', true);
  });
  $(document).on('app:start', function () {
    config.initialPage.trigger('page:enter');
  });

})(window.config, window.Zepto);
