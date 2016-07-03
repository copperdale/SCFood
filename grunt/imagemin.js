/**
 * Created by gaving on 2015/12/14.
 */
module.exports = {
    minify: {
        files: [{
            expand: true,
            cwd: '<%= dest.image%>/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '<%= dest.image%>/'
        }]
    }
}