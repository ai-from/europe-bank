// burger click
$('.burger').on('click', function(){
    $('.all').hasClass('menu') ? $('.all').removeClass('menu') : $('.all').addClass('menu')
})

// scrolling to
$('nav a[href^="#"]').on('click', function(){
    var el = $(this).attr('href');
    $('.burger').click()
    $('html').animate({scrollTop: $(el).offset().top}, 2000);
    return false;
});

// orderCard click
$('.orderCard').on('click', function(){
    $('.all').removeClass('menu')
    $('.all .content').hide()
    $('.order-card-form').addClass('show')
    $('html, body').animate({scrollTop: 0}, 0)
})

// remove class 'menu'
$(window).on('resize', function(){
    let width = screen.width
    if (width < 1300) {
        $('.all').removeClass('menu')
    }
})