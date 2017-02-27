$(function () {
  // 分享按钮
  $('.share_bt').click(function () {
    $('.share').show()
  })

  $('.share').click(function () {
    $(this).hide()
  })

  // 规则按钮
  $('.rule').click(function () {
    $('.rule_text').show()
    $('.cha').show()
  })

  $('.cha').click(function () {
    $(this).hide()
    $('.rule_text').hide()
  })

  // 浇水动画
  var flag = 0
  $('.kettle').click(function () {
    if (flag) alert('已经浇过了')
    $(this).addClass('animate')
    flag = 1
  })
})