// burger click
$('.burger').on('click', function(){
    $('.all').hasClass('menu') ? $('.all').removeClass('menu') : $('.all').addClass('menu')
})

// scrolling to
$('nav a[href^="#"]').on('click', function(){
    var el = $(this).attr('href');
    $('html').animate({scrollTop: $(el).offset().top}, 2000);
    $('.burger').click()
    return false;
});

// orderCard click
$('.orderCard').on('click', function(){
    $('.all').removeClass('menu')
    $('.all .content').hide()
    $('.order-card-form').addClass('show')
    $('html, body').animate({scrollTop: 0}, 0)
})