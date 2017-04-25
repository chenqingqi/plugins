/**
 * 视频播放(VR)
 */
module({
	
	name:'test',
	
	require:['http://api.map.baidu.com/api?v=2.0&ak=您的密钥'],
	
	code:function()
	{
		
		// 百度地图API功能
		var map = new BMap.Map("allmap");    
		
		// 创建Map实例
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
		
		var local = new BMap.LocalSearch(map, 
		{
  			renderOptions:{map: map, autoViewport:true}
		});
		
		local.searchNearby("小吃", "前门");
	}
})