/**
 * Created by gaving on 2015/12/14.
 */
module.exports = {
    default: ['copy', 'concat:lib_js', 'includes'],
    build: ['imagemin', 'cssmin', 'uglify']
};