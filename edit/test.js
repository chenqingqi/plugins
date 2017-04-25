/**
 * 拖拽示例
 */
module({
	
	name:'test',
	
	require:['summernote.js'],
	
	code:function()
	{
		
		//完全版
		//$('.edit').summernote()
		
		
		//精简版
		$('.edit').summernote(
		{
	    	toolbar: 
	    	[
				["style", ['style']],
				["font", ["bold", "italic", "underline", "clear"]],
				["color", ["color"]],
				["para", ["ul", "ol", "paragraph"]],
				["height", ["height"]],
				["insert", ["link","picture"]]
			],
	        lang : 'zh-CN',
	        focus: true,
	        width:550,
	        height:200,
	        callbacks: 
	        {
            	onImageUpload: uploadfile
        	}
	    })
		
		
		
		//填充内容
		$('.edit').summernote('code','hello')
		
		
		
		//获取内容
		$(document).bind('keydown',function(e)
		{
			console.log($('.edit').summernote('code'))
		})
		
		
		//上传图片
		function uploadfile(files,editor,$editable)
		{
			var formdata = new FormData();  
			
	        formdata.append("file",files[0]);  
	        
	        $.ajax(
	        {
			    url	 : 'server.php',
			    type : 'post',
			    cache: false,
			    data : formdata,
			    processData:false,
			    contentType:false,
			    complete:function(e) 
			    {
			        console.log('上传完成:'+e.responseText)
			        
			        //写入图片
			        $('.edit').summernote('code',' <img src="'+JSON.parse(e.responseText).url+'"/>')
			 	}   
	        })
		}
	}
})