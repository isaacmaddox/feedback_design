$(document).on('mousemove', '.stars', function (e) {
    $(".stars img").each(function () {
        if (e.pageX > $(this).offset().left + $(this).width() / 2) {
            $(this).attr('src', 'assets/star_full.png');
        } else if (e.pageX > $(this).offset().left) {
            $(this).attr('src', 'assets/star_half.png');
        } else {
            $(this).attr('src', 'assets/star_empty.png');
        }
    });
}).on('mouseleave', '.stars', function () {
    $(this).children('img').attr('src', 'assets/star_empty.png');
})

$(document).ready(function () {
    $(".modal").css('padding-block', '48px').css('opacity', '1');

    changeScreen(1);
}).on('click', '.stars', function (e) {
    var star = 0;
    $(".stars img").each(function () {
        star++;
        if (e.pageX > $(this).offset().left + $(this).width() / 2) {
            $(".inline-stars img:nth-of-type(" + star + ")").attr('src', 'assets/star_full.png');
        } else if (e.pageX > $(this).offset().left) {
            $(".inline-stars img:nth-of-type(" + star + ")").attr('src', 'assets/star_half.png');
        } else {
            $(".inline-stars img:nth-of-type(" + star + ")").attr('src', 'assets/star_empty.png');
        }
    });

    changeScreen(2);
}).on('click', '#sub', function () {
    changeScreen(3);
}).on('click', '#close, #close-modal', function () {
    changeScreen(4);
    $(".modal").css('height', '0px').css('padding-block', '0px').css('opacity', '0');
});

function changeScreen(screen) {
    $(".modal").css('height', 'calc(' + $("#screen_" + screen).height() + 'px + 96px)');
    $("#screen_" + screen).addClass('show');
    screen--;
    $("#screen_" + screen).addClass('left');
}