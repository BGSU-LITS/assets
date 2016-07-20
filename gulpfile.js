var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.styles('../bower/bootstrap/dist/css/bootstrap.css');
    mix.styles('../bower/bootstrap/dist/css/bootstrap-theme.css');
    mix.styles('../bower/font-awesome/css/font-awesome.css');
    mix.styles('../bower/photoswipe/dist/photoswipe.css');

    mix.styles(
        '../bower/photoswipe/dist/default-skin/default-skin.css',
        'public/css/photoswipe/'
    );

    mix.scripts('../bower/jquery/dist/jquery.js');
    mix.scripts('../bower/bootstrap/dist/js/bootstrap.js');
    mix.scripts('../bower/jquery.floatThead/dist/jquery.floatThead.js');
    mix.scripts('../bower/masonry/dist/masonry.pkgd.js');
    mix.scripts('../bower/photoswipe/dist/photoswipe.js');
    mix.scripts('../bower/photoswipe/dist/photoswipe-ui-default.js');
    mix.scripts('../bower/typogr.js/typogr.js');

    mix.scripts(
        [
            '../bower/table.sort/src/tablesort.js',
            '../bower/table.sort/src/sorts/tablesort.number.js'
        ],
        'public/js/tablesort.js'
    );

    mix.copy(
        'resources/assets/bower/bootstrap/fonts',
        'public/fonts'
    );

    mix.copy(
        'resources/assets/bower/font-awesome/fonts',
        'public/fonts'
    );

    var path = 'resources/assets/bower/photoswipe/dist/default-skin/';

    mix.copy(path + 'default-skin.png', 'public/css/photoswipe/');
    mix.copy(path + 'default-skin.svg', 'public/css/photoswipe/');
    mix.copy(path + 'preloader.gif', 'public/css/photoswipe/');
});
