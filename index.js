jQuery.fn.file = function(fn) {
	return this.each(function() {
		var el = $(this);
		var holder = $('<div></div>').appendTo(el).css({
			position:'absolute',
			overflow:'hidden',
			'-moz-opacity':'0',
			filter:'alpha(opacity: 0)',
			opacity:'0',
			zoom:'1',
			width:el.outerWidth()+'px',
			height:el.outerHeight()+'px',
			'z-index':1
		});	

		var wid = 0;
		var inp;

		var addInput = function() {
			var current = inp = holder.html('<input '+(window.FormData ? 'multiple ' : '')+'type="file" style="border:none; position:absolute">').find('input');

			wid = wid || current.width();

			current.change(function() {
				current.unbind('change');

				addInput();
				fn(current[0]);
			});
		};
		var position = function(e) {
			holder.offset(el.offset());					

			if (e) {
				inp.offset({left:e.pageX-wid+25, top:e.pageY-10});						
			}
		};

		addInput();

		el.mouseover(position);
		el.mousemove(position);
		position();		
	});
};
