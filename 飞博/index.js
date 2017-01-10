$(function() {
	// 滚动条动画
	var flag = false
	$(window).scroll(function() {
		var dt = $(document).scrollTop()
		if ($(window).width() > 600) {
			if (dt > 20 && !flag) {
				$('header').animate({
					'height': '80px'
				}, 300)
				$('header .logo img').animate({
					'paddingTop': '16px',
					'paddingBottom': '16px'
				}, 300)
				$('body').animate({
					'paddingTop': '80px'
				}, 300)
				flag = true;
			}

			if (dt < 20 && flag) {
				$('header').animate({
					'height': '100px'
				}, 300)
				$('header .logo img').animate({
					'paddingTop': '26px',
					'paddingBottom': '26px'
				}, 300)
				$('body').animate({
					'paddingTop': '100px'
				}, 300)
				flag = false;
			}
		}

		if ($(window).width() <= 600) {
			if (dt > 20 && !flag) {
				$('header').animate({
					'height': '60px'
				}, 300)
				$('header .logo img').animate({
					'paddingTop': '10px',
					'paddingBottom': '10px'
				}, 300)
				$('body').animate({
					'paddingTop': '60px'
				}, 300)
				flag = true;
			}

			if (dt < 20 && flag) {
				$('header').animate({
					'height': '80px'
				}, 300)
				$('header .logo img').animate({
					'paddingTop': '20px',
					'paddingBottom': '20px'
				}, 300)
				$('body').animate({
					'paddingTop': '80px'
				}, 300)
				flag = false;
			}
		}
	})

	// col切换动画
	$('.col_li').click(function() {
		$('.col_li').removeClass('active')
		$(this).addClass('active')

		var id = $(this).attr('id')
		var klass = $('.col_son_' + id)
		$('.col_son').css({
			'display': 'none',
			'opacity': 0
		})
		klass.css({
			'display': 'block'
		})
		klass.animate({
			'opacity': 1
		}, 300)

		return false
	})
})