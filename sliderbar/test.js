/**
 * 滑块
 */
module({
	
	name:'test',
	
	require:['/plugin/drag/jquery.ui.js'],
	
	code:function()
	{
		$( "#bar" ).draggable(
		{
			//拖动方向
			axis: "x",
			
			//限制范围
			containment: "parent",
			
			start:function() 
			{
				console.log('开始拖动')
      		},
      		
      		drag:function() 
      		{
      			console.log('拖动中')
      			console.log(percent())
      		},
      		
      		stop:function() 
      		{
      			console.log('停止拖动');
      		}
		})
		
		
		setPosition(0.5)
		
		
		/**
		 * 计算当前拖动百分比
		 */
		function percent()
		{
			return (parseInt($( "#bar" ).css('left'))/($('#slider').width() - $( "#bar" ).width())).toFixed(2)
		}
		
		
		/**
		 * 设置滑块位置(0-1之间的小数)
		 */
		function setPosition(value)
		{
			$( "#bar" ).css({'left':($('#slider').width() - $( "#bar" ).width())*value+'px'})
		}
	}
})