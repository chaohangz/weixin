$(function() {

    var dansui = 1;
    var hammer = $('.hammer')
    var prize = $('.prize')
    var egg = $('.egg')
    egg.click(function() {
        if (dansui === 0) {
            alert('蛋都碎了')
            return
        }
        hammer.removeClass('animate')
        setTimeout(function() {
            egg.addClass('egg_bg')
            hammer.hide()
        }, 500)
        dansui = 0
    })

    $('.rule').click(function() {
        $('.rule_box').slideToggle(300)
    });

    $('.close').click(function() {
        $('.rule_box').slideUp(300)
    });

})
