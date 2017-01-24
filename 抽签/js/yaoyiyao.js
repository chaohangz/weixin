$(document).ready(function() {
    if (window.DeviceMotionEvent) {
        var speed = 10;
        var x = y = z = lastX = lastY = lastZ = 0;
        window.addEventListener('devicemotion', function() {
            var acceleration = event.accelerationIncludingGravity;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;

            if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ) > speed) {
                var $yaoyiyao = $('.yaoyiyao')
                var $chouqian = $('.chouqian')
                var $chouqian_img = $('.chouqian_img')
                var $load = $('.load')
                var $result = $('.result')
                var $bg = $('.bg')
                $yaoyiyao.hide()
                $chouqian.show()
                $chouqian_img.show()
                setTimeout(function() {
                    $chouqian_img.hide()
                    $load.show()
                } , 1000)
                setTimeout(function() {
                    $chouqian.hide()
                    $load.hide()
                    $bg.addClass('bg_result')
                    $result.show()
                }, 2500)
            }
            lastX = x;
            lastY = y;
            lastZ = z;
        }, false);
    }
});

document.getElementById('ceshi').onclick = function ceshi() {
    var $yaoyiyao = $('.yaoyiyao')
    var $chouqian = $('.chouqian')
    var $chouqian_img = $('.chouqian_img')
    var $load = $('.load')
    var $result = $('.result')
    var $bg = $('.bg')
    $yaoyiyao.hide()
    $chouqian.show()
    $chouqian_img.show()
    setTimeout(function() {
        $chouqian_img.hide()
        $load.show()
    } , 1000)
    setTimeout(function() {
        $chouqian.hide()
        $load.hide()
        $bg.addClass('bg_result')
        $result.show()
    }, 2500)

}