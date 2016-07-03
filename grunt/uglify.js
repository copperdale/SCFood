/**
 * Created by gaving on 2015/12/14.
 */
module.exports = {
    options: {
        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    js: {
        src: ['<%= dest.script%>/lib.js'],
        dest: '<%= dest.script%>/lib.js'
    }
}