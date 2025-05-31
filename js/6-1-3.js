// 画像の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0; 
// 現在のウィンドウ幅を取得

if (windowwidth > 768) { 
  // PC用の画像設定
  var responsiveImage = [
    // PC用の画像
    { src: './img/background/top-background-1.jpg' },
    { src: './img/background/top-background-2.jpg' },
    { src: './img/background/top-background-3.jpg' },
  ];
} else { 
  // タブレットサイズ（768px）以下用の画像設定
  var responsiveImage = [
    { src: './img/background/top-background-1.jpg' },
    { src: './img/background/top-background-2.jpg' },
    { src: './img/background/top-background-3.jpg' },
    // タブレットサイズ以下用の画像
  ];
}

// Vegas全体の設定
$('#slider').vegas({
  overlay: true, 
  // 画像の上に網線やドットのオーバーレイパターン画像を指定
  transition: 'blur', 
  // 切り替わりのアニメーション（例：blur）
  // http://vegas.jaysalvat.com/documentation/transitions/参照。fade, fade2, slideLeft, slideLeft2, slideRight, slideRight2, slideUp, slideUp2, slideDown, slideDown2, zoomIn, zoomIn2, zoomOut, zoomOut2, swirlLeft, swirlLeft2, swirlRight, swirlRight2, burn, burn2, blur, blur2, flash, flash2が設定可能
  transitionDuration: 2000, 
  // 切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000, 
  // スライド間の遅延をミリ秒単位で設定
  animationDuration: 20000, 
  // スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns', 
  // スライドアニメーションの種類（例：kenburns）
  // http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns, kenburnsUp, kenburnsDown, kenburnsRight, kenburnsLeft, kenburnsUpLeft, kenburnsUpRight, kenburnsDownLeft, kenburnsDownRight, randomが設定可能
  slides: responsiveImage 
  // 画像設定を読む
});
