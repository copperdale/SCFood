/**
 * Created by gaving on 2015/12/14.
 */
module.exports = {
    image: {
        files: [
            {
                expand: true,
                cwd: '<%= asset.image%>/',
                src: ['**/*'],
                flatten: false,
                dest: '<%= dest.image%>/',
                filter: function(filePath) {
                    /*exclude icons*/
                    return filePath.indexOf('icon') == -1;
                }
            }
        ]
    },
    js: {
        files: [
            {
                expand: true,
                cwd: '<%= asset.script%>/',
                src: 'command.js',
                flatten: true,
                dest: '<%= dest.script%>/'
            }
        ]
    },
    font: {
        files: [
            {
                expand: true,
                cwd: '<%= asset.font%>/',
                src: ['**/*'],
                flatten: true,
                dest: '<%= dest.font%>/'
            }
        ]
    },
    icon: {
        files: [
            {
                expand: true,
                cwd: '<%= asset.icon%>/',
                src: ['**/*'],
                flatten: true,
                dest: '<%= dest.icon%>/'
            }
        ]
    }
};