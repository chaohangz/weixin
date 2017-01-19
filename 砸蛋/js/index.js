$(function() {

	var dansui = 1;
	var hammer = $('.hammer')
	var prize = $('.prize')
	var egg = $('.egg')
	var wd = $('.window')
	egg.click(function() {
		if (dansui === 0) {
			alert('蛋都碎了')
			return
		}
		hammer.removeClass('animate')
		setTimeout(function () {
			egg.addClass('egg_bg')
			hammer.hide()
		}, 500)
		dansui = 0
		setTimeout(function () {
			prize.show()
					.animate({top: '32px'}, 1200)
		}, 600)
		setTimeout(function () {
			wd.show(300)
		}, 2000)
	})

	$('.again').click(function() {
		$('.window').hide(300)
		$('.prize').hide()
							.css('top', '100px')
		egg.removeClass('egg_bg')
		$(hammer).css('display', 'block')
						.addClass('animate')
		dansui = 1
	});

	$('.rule').click(function() {
		$('.rule_box').slideToggle(300)
	});

	$('.close').click(function() {
		$('.rule_box').slideUp(300)
	});

})