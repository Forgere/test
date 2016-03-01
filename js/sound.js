(function(config,$,Audio5js){
  new Audio5js({
    codecs: ['vorbis', 'mp3'],
    ready: function (player) {
      var audioUrl;
      switch (player.codec) {
        case 'vorbis':
          audioUrl = 'img/bgm.ogg';
          break;
        case 'mp3':
          audioUrl = 'img/bgm.mp3';
          break;
      }
      this.load(audioUrl);
      if(!config.dev){
        this.play();
      }
      var self = this;
      if(!config.dev && (config.ios || config.mChrome)){
        $('body').one('touchstart',function(){
          self.play();
        });
      }
      this.on('ended', function() {
        this.play(); // loop
      }, this);

      this.on('play', function(){
        $('.btn-sound').addClass('off');
      });

      this.on('pause', function(){
        $('.btn-sound').removeClass('off');
      });

      $('.btn-sound').click(function(){
        self.playPause();
      });
    }
  });
})(window.config,window.Zepto,window.Audio5js);
