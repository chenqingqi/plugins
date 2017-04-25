/**
 * 视频播放(VR)
 */
module({
	
	name:'test',
	
	require:['player/jwplayer.js'],
	
	code:function()
	{
		
		jwplayer.key="bAoNHra71KE/mHvb0sirT4HeWLTAkpiYa1mVsA==";
		
		var player = jwplayer("video");
		
		player.setup({
    		
	        file: "video.mp4",
	        image: "",
	        width: 640,
	        height: 360,
	        title: 'HTML5-VR测试',
	        description: '支持m3u8流和mp4流VR效果，支持flv的普通播放',
	        plugins: 
	        {
				'player/vr.js': 'VR插件'
			}
	    })
	}
})