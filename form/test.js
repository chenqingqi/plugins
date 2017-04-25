/**
 * 异步表单示例
 */
module({
	
	name:'test',
	
	require:['jquery.form.js'],
	
	code:function()
	{
		$('#signin').click(function(e)
	    {
	        $.ajax(
	        {
	            url: 'server.php',
	            type: 'post',
	            dataType: 'json',
	            data: $("#myform").serialize(),
	            success: function (data) 
	            {
	                console.log(data)
	            }
	        })
	    })
	}
})