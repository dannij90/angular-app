/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Config Settings

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

var assets_base = 'src/assets';

module.exports = {
    server: {
        port: 1337
    },
    uglifyOptions: {
        mangle: true,
        compress: true
    },
    autoprefixerOptions: {
        browsers: ['Chrome 21'],
        cascade: true
    },
    exclude: '!',
    paths: {
        base: '/',
        app: 'src/app',
        dist: 'dist',
        test: 'test',
        bower: 'node_modules',
        npm: 'node_modules',
        assets: {
            base: assets_base,
            images: assets_base + '/images',
            sprites: assets_base + '/sprites',
            locales: assets_base + '/locales',
            env: assets_base + '/env',
            less: assets_base + '/less',
            fonts: assets_base + '/fonts',
            css: assets_base + '/css',
            js: assets_base + '/js'
        }
    }
};