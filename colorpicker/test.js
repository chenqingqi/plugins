/**
 * 拾色器
 */
module({
	
	name:'test',
	
	require:['jquery.colorpicker.js'],
	
	code:function()
	{
		$("#color").colorpicker(
		{
			
			fillcolor:true,
		    event:'click',
		    success:function(target,color)
		    {
		        target.css("backgroundColor",color);
		    }
		});
	}
})