(function(config,wxConfig,$){
  $(document).on('weixin:init',function(){
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: config.shareText, // 分享标题
        link: config.url, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        success: function () {
          $('.overlay.guide').hide();
          $(document).trigger('weixin:shareTimeline');
        }
      });
      wx.onMenuShareAppMessage({
        title: config.shareTitle, // 分享标题
        desc: config.shareText, // 分享标题
        link: config.url, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        success: function () {
          $('.overlay.guide').hide();
          $(document).trigger('weixin:shareAppMessage');
        }
      });
      wx.onMenuShareWeibo({
        title: config.shareTitle, // 分享标题
        desc: config.shareText, // 分享标题
        link: config.url, // 分享链接
        imgUrl: config.shareImg // 分享图标
      });
    });
  });

  // 加载微信 jsapi 配置
  if(config.weixin && wxConfig){
    wx.config(wxConfig);
    $(document).trigger('weixin:init');
  }
})(window.config,window.wxConfig,window.Zepto);
