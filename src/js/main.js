import './lib/lib';

$('#first').triggerOn('click', () => {
    $('div').eq(1).fadeToggle(1000);
});

$('[data-count="second"]').triggerOn('click', () => {
    $('div').eq(2).fadeToggle(1000);
});

$('button').eq(2).triggerOn('click', () => {
    $('.w-500').fadeToggle(1000);
});
