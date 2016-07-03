/**
 * Created by gaving on 2015/12/14.
 */
module.exports = {
    css: {
        src: [
                '<%= asset.css%>/frozen/basic.css',
                '<%= asset.css%>/frozen/frozen.css',
                '<%= dest.css%>/default.css'
        ],
        dest: '<%= dest.css%>/default.css'
    },
    lib_js: {
        src: [
                '<%= asset.script%>/lib/zepto.min.js',
                '<%= asset.script%>/lib/frozen.js',
                '<%= asset.script%>/lib/template.js',
                '<%= asset.script%>/util.js'
        ],
        dest: '<%= dest.script%>/lib.js'
    }
}