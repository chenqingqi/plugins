/**
 * 下拉列表示例
 */
module({
	
	name:'test',
	
	require:['jquery.selectlist.js'],
	
	code:function()
	{
		/**
		 * 初始化
		 */
		$('#select').selectlist(
		{
			zIndex: 10,
			width: 300,
			height: 40,
			focus:3
		});	
		
		
		/**
		 * 侦听选项更改
		 */
		$('#select').bind('change',function(evt,data) 
		{
			
			//事件类型
			console.log(evt.type)
    		
    		//事件数据
    		console.log(data)
    		
    		//获取表单
    		console.log($('#myform').serialize())
    		
		})
	}
})