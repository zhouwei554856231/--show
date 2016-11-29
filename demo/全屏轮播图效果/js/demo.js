$(function(){
	
	setTimeout(function(){
				$(document).scrollTop(0);
			},50);

	var $navli = $('.nav li');
	var Heigh = $('body').height();
	var $part = $('.wrap .part');
	var Time = new Date();
	var index = 0;
	$('.part1').addClass('first');
	$('.part1').addClass('on');
	$(window).resize(function(){
		Heigh = $('body').height();
		$(document).scrollTop(Heigh*index);
	});
	
	
	$navli.click(function(){
	    index =$(this).index();
		$navli.eq(index).addClass('pic').siblings().removeClass('pic');
		$part.eq(index).siblings().removeClass('first');
		$part.eq(index).siblings().removeClass('on');
		$('html,body').stop().animate({
			'scrollTop':Heigh*index
		},800,function(){
			$part.eq(index).addClass('on');
			$part.eq(index).addClass('first');
		});
	});
	
	
	$(window).mousewheel(function(event,delta,deltaX,deltaY){
		/*
			* event : event事件
			* delta : 参数，获取滚轮向上滚动还是向下滚动 向下 负值 // 向上 正值
			* deltaX,deltaY : 滚动坐标
		*/
		if (new Date()-Time>800)
		{
			Time = new Date();
			delta==-1?index++:index--;
			if(index>6){index=6};
			if(index<0){index=0};
			$part.eq(index).siblings().removeClass('on');
			$part.eq(index).siblings().removeClass('first');
			$navli.eq(index).addClass('pic').siblings().removeClass('pic');
			$('body,html').stop().animate({
				'scrollTop':Heigh*index
			},800,function(){
				$part.eq(index).addClass('on');
				$part.eq(index).addClass('first');
			});
		}
		
	});
});
























