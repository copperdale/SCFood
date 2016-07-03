/**
 * Created by gaving on 2015/12/14.
 */
module.exports = {
    icon: {
        src: '<%= asset.image%>/icon/*.png',
        dest: '<%= dest.image%>/icon.png',
        destCss: '<%= asset.css%>/_icon.scss',
        imgPath: '../images/icon.png',
        algorithm: 'binary-tree',
        padding: 4,
        cssFormat: 'scss',
        cssVarMap: function (sprite) {
            sprite.name = 'icon-' + sprite.name;
        }
    }
}