import './lib/lib';
import $ from './lib/lib';

$('button').click(function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});
