function init_slider(){
    var $tpl = $('#slider-tpl'),
	tpl = $tpl.text(),
	template = Handlebars.compile(tpl),
	data = {
            slider: {
		"theme": "a2",
		//"sliderConfig": "{\"directionNav\":false}",
		"content": [
		    {
			"img": "wallpaper/1.jpg"
		    },
		    {
			"img": "wallpaper/2.jpg"
		    },
		    {
			"img": "wallpaper/3.jpg"
		    },
		    {
			"img": "wallpaper/4.jpg"
		    },
		    {
			"img": "wallpaper/5.jpg"
		    },
		    {
			"img": "wallpaper/6.jpg"
		    }
		]
            }

	},
	html = template(data);

    $tpl.before(html);
    seajs.use(['slider'], function(s, m, g, f, n) {
	var args = Array.prototype.slice.apply(arguments);
	$.each(args, function(i, m) {
            m.init && m.init();
	});
    });

}
