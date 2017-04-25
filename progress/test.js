/**
 * 进度条
 */
module({
	
	name:'test',
	
	code:function()
	{
		
		percent(0.5)
		
		/**
		 * 设置百分比
		 */
		function percent(value)
		{
			$('#bar').css({'width':$('#progress').width()*value+'px'})
		}
	}
})