/**
 * 单选示例
 */
module({
	
	name:'test',
	
	require:['unslider.min.js'],
	
	code:function()
	{
		
		var slider = $('.slider').unslider(
		{
		 	
		 	//显示圆点
		 	dots: true,
		 	
		 	//切换延迟
		 	delay:500,
		 	
		 	//过渡时间
		 	speed:1000
		});
		
		
		var control = slider.data('unslider');


		$('.arrow').click(function() 
		{
	
			if($(this).attr('class') == 'arrow prev')
			{
				control.prev()
			}
			
			if($(this).attr('class') == 'arrow next')
			{
				control.next()
			}
		});
	}
})