/**
 * Created by gaving on 2015/12/14.
 */
module.exports = {
    options: {
        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    minify: {
        expand: true,
        cwd: '<%= dest.css%>/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= dest.css%>/',
        ext: '.css'
    }
}