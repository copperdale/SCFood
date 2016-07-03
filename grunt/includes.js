/**
 * Created by gaving on 2016/3/24.
 */
module.exports = {
    options: {
        flatten: true,
        includePath: '<%= asset.site %>/inc/'
    },
    build: {
        cwd: '<%= asset.site %>/',
        src: ['*.html'],
        dest: '<%= dest.site %>/'
    }
};