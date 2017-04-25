/**
 * 拾色器
 */
module({
	
	name:'test',
	
	require:['foundation-datepicker.js'],
	
	code:function()
	{
		
		/**
		 * 日期+时间
		 */
		$('#time').fdatepicker({
			format: 'yyyy-mm-dd hh:ii',
			pickTime: true
		});
		
		
		/**
		 * 日期
		 */
		$('#date').fdatepicker({
			
			format: 'yyyy-mm-dd'
		});
		
		
		/**
		 * 侦听日期修改
		 */
		var mydate = $('#mydate').fdatepicker(
		{
			format: 'yyyy-mm-dd'
		})
		
		mydate.bind('changeDate',function(e){
			
			console.log(e.date.format('yyyy-mm-dd'))
		})
	}
})