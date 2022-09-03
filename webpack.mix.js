let mix = require('laravel-mix');

mix.js('src/js/app.js', 'web/assets/js')
    .sass('src/scss/app.scss', 'web/assets/css')
    .sourceMaps();