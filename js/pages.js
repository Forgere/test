(function(config,$){
  // 按钮事件
  if(config.weixin || navigator.userAgent.match(/(QQ\/)/i)){
    $('#btn-share').click(function(e){
      e.preventDefault();
      $('.overlay.guide').show();
    });
  }
  $('.overlay.guide').click(function(){
    $('.overlay.guide').hide();
  });

  $('#page1').on('page:entering',function(){
    //页面初始化
  });
  $('#page1').on('page:enter',function(){
    //页面出现后
  });
})(window.config,window.Zepto);
