import './lib/lib';

$('#first').triggerOn('click', () => {
    $('div').eq(1).fadeOut(1000);
});

$('[data-count="second"]').triggerOn('click', () => {
    $('div').eq(2).fadeOut(1000);
});

$('button').eq(2).triggerOn('click', () => {
    $('.w-500').fadeOut(1000);
});
