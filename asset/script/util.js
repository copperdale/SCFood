Util = {};

Util.render = function(templ, data, dist){
	var tpl = $('#'+templ).html();
    var str = template(tpl, data);
    if(dist){
    	$('#'+dist).html(str)
    }else{
    	return str;
    }
}