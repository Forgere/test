(function(config,$){
  $(document).on('app:start',function(){
    if(!window.ga){
      return;
    }
    $('.page').on('page:enter',function(e,id){
      // switch(id){
      //   case 'page1':
      //     ga('send', 'event', 'PRSRJUN', 'PRSRJUN/page1', 'click');
      //     ga('send', 'event', 'PRSRJUN', 'PRSRJUN/slide1', 'click');
      //     break;
      //   case 'page2':
      //     ga('send', 'event', 'PRSRJUN', 'PRSRJUN/page2', 'click');
      //     ga('send', 'event', 'PRSRJUN', 'PRSRJUN/slide2', 'click');
      //     break;
      // }
    });

    // 微信分享事件
    // $(document).on('weixin:shareTimeline',function(){
    //   ga('send', 'event', 'PRSRJUN', 'PRSRJUN/share_moment', 'click');
    // });

    // $(document).on('weixin:shareTimeline',function(){
    //   ga('send', 'event', 'PRSRJUN', 'PRSRJUN/share_moment', 'click');
    // });

    // 按钮点击事件
    // $('#btn-upload').click(function(){
    //   ga('send', 'event', 'PRSRJUN', 'PRSRJUN/upload_photo', 'click');
    // });
  });
})(window.config,window.Zepto);
