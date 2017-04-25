/**
 * 文件上传示例
 */
module({
	
	name:'test',
	
	require:['jquery.form.js'],
	
	code:function()
	{
		/**
	     * 获取被选择的文件(列表)路径
	     */
	    $('#file').change(function(e)
	    {
	        if(system.getBrowserName() == 'ie' && system.getBrowserVision()<10)
	        {
	            //IE9单选
	            console.log($(this).val())
	        }
	        else
	        {
	            //IE10+多选
	            console.log(this.files)
	        }
	    })
	
	    /**
	     * 初始化上传
	     */
	    $('#upload').ajaxForm({
	
            type:'post',

            url:'server.php',

            uploadProgress:function(e,loaded,total,percent) 
            {
                console.log('上传进度'+percent)
                
                $('#submit').val('上传进度:'+percent+'%')
            },

            complete: function(e) 
            {
                console.log('上传完成:'+e.responseText)
            }
        })
	}
})