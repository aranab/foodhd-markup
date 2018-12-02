var path = require('path');

module.exports = function() {
    // Root Paths
    var appBasePath = path.resolve(__dirname, 'src') + '/',
        distBasePath = path.resolve(__dirname, 'dist') + '/',
        distBaseAssetsPath = path.resolve(__dirname, 'dist/assets') + '/',
        nodeModulesBasePath = path.resolve(__dirname, 'node_modules') + '/';

    // Config
    var buildConfig = {        
        'src': {
            'basePath': appBasePath,
            'fonts': {
                'cwd': appBasePath + 'fonts/',
                'files': [
                    '**.*'
                ]
            },
            'images': {
                'cwd': appBasePath + 'images/',
                'files': [
                    '**/*.{jpg,gif,png}'
                ]
            },
            'scss': {
                'cwd': appBasePath + 'scss/',
                'watch': '**/*.{sass,scss}',
                'files': appBasePath + 'scss/styles.scss'
            },
            'styles': {
                'cwd': appBasePath + 'css/',
                'watch': '**/*.css',
                'files': appBasePath + 'css/main.css'
            },
            'scripts': {
                'cwd': appBasePath + 'scripts/',
                'watch': '**/*.js',
                'files': [
                    appBasePath + 'scripts/**/*.js'
                ],
                'file': appBasePath + 'scripts/index.js'
            },           
            'html': {
                'cwd': appBasePath,
                'files': [
                    '**/*.{html,htm}'
                ],
                'file': appBasePath + 'index.html'
            }
        },
        dist: {
            'basePath': distBasePath,
            'distBaseAssetsPath': distBaseAssetsPath,
            'fonts': distBaseAssetsPath + 'fonts/',
            'images': distBaseAssetsPath + 'images/',
            'scss': appBasePath + 'css/main.css',
            'styles': distBaseAssetsPath + 'main.min.css',
            'scripts': 'bundle.min.js',           
            'html': distBasePath
        },
        'nodeModules': nodeModulesBasePath
    };

    return buildConfig;
};