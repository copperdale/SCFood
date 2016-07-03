/**
 * Created by gaving on 2015/7/1.
 */

var data = {
    asset: {
        svg: 'asset/svg',
        css: 'asset/css',
        site: 'asset/site',
        image: 'asset/image',
        script: 'asset/script',
        font: 'asset/font',
        icon: 'asset/image/icon'
    },
    dest: {
        site: 'src',
        css: 'src/resources/css',
        image: 'src/resources/images',
        script: 'src/resources/script',
        font: 'src/resources/font',
        icon: 'src/resources/icon'
    }
};

module.exports = function (grunt) {

    /*load all task configs*/
    require('load-grunt-config')(grunt, {

        // data passed into config.  Can use with <%= test %>
        data: data
    });

};