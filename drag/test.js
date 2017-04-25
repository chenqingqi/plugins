/**
 * 拖拽示例
 */
module({
	
	name:'test',
	
	require:['/plugin/drag/jquery.ui.js'],
	
	code:function()
	{
		$("#a").sortable(
        {
            //放下时特效
            revert: false,

            //拖动方向
            axis: "y",

            //只允许在指定元素或区域的范围内移动
            containment: "#a",

            //移动时的鼠标样式
            cursor: "pointer",

            //当鼠标点下后，延迟指定时间后才开始激活拖拽动作（单位：毫秒）。此选项可以用来防止不想要的拖累元素时的误点击
            delay: 50,

            //拖动完成后
            out:function()
            {
                console.log('拖动完成')
            }
        })
	}
})