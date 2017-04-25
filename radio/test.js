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
		$($('input:radio[name="student"]')[1]).attr('checked','checked');
		
		
		/**
		 * 获取焦点
		 */
		console.log($('input:radio[name="student"]:checked').val())
	}
})