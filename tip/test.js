/**
 * 提示框示例
 */
module({
	
	name:'test',
	
	require:['jquery.tip.js'],
	
	code:function()
	{
		$('.tip').simpletip('你确定删除此选项下的所有内容？')
		
		$('.tip').bind('change',function(e,data)
		{
			console.log(data)  //1=确定，0=取消
		})
	}
})