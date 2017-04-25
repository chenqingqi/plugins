/**
 * 提示框
 */
$.fn.simpletip = function(value) 
{
	this.show();
	
	this.find('.text').text(value);
		
	this.bind('click',function(e)
	{
		if($(e.target).text() == '确定')
		{
			$(this).trigger('change',1)
		}
		
		if($(e.target).text() == '取消')
		{
			$(this).trigger('change',0)
		}
		
		if(e.target.nodeName == 'I')
		{
			$(this).trigger('change',0)
		}
		
		$(this).unbind('click');
		
		$(this).hide();
	})
}

