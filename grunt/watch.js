/**
 * Created by gaving on 2015/12/14.
 */
module.exports = {
    sprite: {
        files: '*.png',
        tasks: [
            'sprite',
            'compass',
            'concat:css'
        ],
        options: {
            spawn: false,
            cwd: '<%= asset.image%>/icon/'
        }
    },
    webfont: {
        files: '*.svg',
        tasks: [
            'webfont',
            'compass',
            'concat:css'
        ],
        options: {
            spawn: false,
            cwd: '<%= asset.svg%>/'
        }
    },
    image: {
        files: [
            '*.png',
            '*.gif',
            '*.jpg',
            '*.jpeg',
            '*.svg'
        ],
        tasks: 'copy:image',
        options: {
            spawn: false,
            cwd: '<%= asset.image%>/'
        }
    },
    compass: {
        files: '**/*.scss',
        tasks: [
            'compass',
            'concat:css'
        ],
        options: {
            spawn: false,
            cwd: '<%= asset.css%>/'
        }
    },
    js_lib: {
        files: '**/*.js',
        tasks: [
            'concat:lib_js'
        ],
        options: {
            spawn: false,
            cwd: '<%= asset.script%>/lib/'
        }
    },
    css: {
        files: '**/*.css',
        tasks: [
            "copy:css"
        ],
        options: {
            spawn: false,
            cwd: '<%= asset.css%>'
        }
    },
    js_base: {
        files: '**/*.js',
        tasks: [
            'concat:base_js'
        ],
        options: {
            spawn: false,
            cwd: '<%= asset.script%>/frame/'
        }
    },
    js: {
        files: '*.js',
        tasks: [
            'copy:js'
        ],
        options: {
            spawn: false,
            cwd: '<%= asset.script%>/'
        }
    },
    site: {
        files: '**/*.html',
        tasks: [
            'includes'
        ],
        options: {
            spawn: false,
            cwd: '<%= asset.site%>/'
        }
    }
};