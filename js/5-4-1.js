$(document).ready(function() {
	let isFirstLoad = true; // 初期ロードを検知するフラグ
  
	function GethashID(hashIDName) {
	  if (hashIDName) {
		$('.tab li').find('a').each(function() {
		  const idName = $(this).attr('href');
		  if (idName === hashIDName) {
			const parentElm = $(this).parent();
			$('.tab li').removeClass("active");
			$(parentElm).addClass("active");
			$(".area").removeClass("is-active");
			$(escapeHTML(hashIDName)).addClass("is-active");
			
			// 最初のロードでなければスクロールする
			if (!isFirstLoad) {
			  $('html, body').animate({
				scrollTop: $(hashIDName).offset().top - 80
			  }, 800);
			}
  
			let newHeight = $(hashIDName).outerHeight();
			$('.tab-content').height(newHeight);
		  }
		});
	  }
	}
  
	$('.tab a').on('click', function(event) {
	  event.preventDefault();
	  const idName = $(this).attr('href');
	  GethashID(idName);
	});
  
	$(window).on('load', function() {
	  const defaultTab = '#drink';
	  $('.tab li:first-of-type').addClass("active");
	  $(defaultTab).addClass("is-active");
	  const hashName = location.hash || defaultTab;
	  GethashID(hashName);
	  isFirstLoad = false; // 初期ロード完了後にフラグをリセット
	});
  
	function escapeHTML(string) {
	  return string.replace(/&/g, "&amp;")
				   .replace(/</g, "&lt;")
				   .replace(/>/g, "&gt;")
				   .replace(/"/g, "&quot;")
				   .replace(/'/g, "&#039;");
	}
  });
  