/**
 * 单选示例
 */
module({
	
	name:'test',
	
	code:function()
	{
		
		/**
		 * 设置焦点
		 */
		$($('input:checkbox[name="student"]')[1]).attr('checked','checked');
		
		
		/**
		 * 获取选中值
		 */
		var checkboxs = $('input:checkbox[name="student"]:checked');
		
		for(var i=0;i<checkboxs.length;i++)
		{
			if($(checkboxs[i]).attr('checked'))
			{
				console.log($(checkboxs[i]).val())
			}
		}
	}
})