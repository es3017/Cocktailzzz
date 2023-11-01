$(document).ready(function () {
    $('.cocktail-card .recipe, .cocktail-card .calories').hide();
    $('.cocktail-card .cocktail-info').show();

    $('.cocktail-card').on('mouseenter', function () {
        $(this).find('.recipe').show();
        $(this).find('.calories').hide();
    });

    $('.cocktail-card').on('click', function () {
        if ($(this).hasClass('clicked')) {
            $(this).find('.recipe').show();
            $(this).find('.calories').hide();
        } else {
            $(this).find('.calories').show();
            $(this).find('.recipe').hide();
        }
        $(this).addClass('clicked');
    });

    $('.cocktail-card').on('mouseleave', function () {
        $(this).find('.recipe').hide();
        $(this).find('.calories').hide();
        $(this).removeClass('clicked');
    });
});
