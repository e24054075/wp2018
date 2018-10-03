var w_width = window.innerWidth;
var w_height = window.innerHeight;
var ratio = w_width/w_height*30;
var now;
var t_data = [15,32,49,66,83];
var l_data = [6,47,6,47,6];
var bl_data = [15,56,15,56,15];
var pt_data=[20,37,54,71,88];
var pl_data=[29,70,29,70,29];

function set(){
	$(".p_back").css({"width":"30vw","height":ratio+"vh"});
};
function index_move(i){
	$("#c"+i).click(function(){
		now =i;
		$("#index").hide();
		$("#back").fadeIn();
		$("#topic").hide();
		$("#topic3").fadeIn();
		$("#count").css({"z-index":"2"});
		$("#p2"+i).css({"z-index":"2"});
		$("#i1"+i).css({"z-index":"2"});
		$("#i2"+i).css({"z-index":"2"});
		$("#p"+i).animate({
			fontSize:'4em',
			top:'25%',
			left:'7%',
			zIndex:'2'
		},50);
		$("#count").animate({
			top:'85%',
			opacity:'1.0'
		},300);
		$("#p2"+i).animate({
			top:'85%',
			opacity:'1.0'
		},300);
		$("#i1"+i).animate({
			opacity:'1.0'
		},800);
		$("#i2"+i).animate({
			opacity:'1.0'
		},800);
		$("#b"+i).animate({
			borderRadius:'0em',
			width : '100vw',
			height : '60vh',
			top:'50%',
			left:'0%',
			zIndex:'2'
		},300);
		$("#bo"+i).animate({
			width : '50vw',
			height : '80vh',
			top:'5%',
			left:'50%',
			zIndex:'2'
		},300);
		$("#upcover").animate({zIndex:'1'},0).fadeIn();
	});
};
function index_return(){
	$("#back").click(function(){
		$("#back").hide();
		$("#index").fadeIn();
		$("#topic3").hide();
		$("#topic").fadeIn();
		$("#count").animate({
			top:'95%',
			zIndex:'0',
			opacity:'0.0'
		},300);
		$("#p2"+now).animate({
			top:'95%',
			zIndex:'0',
			opacity:'0.0'
		},300);
		$("#b"+now).animate({
			borderRadius:'999em',
			width : '30vw',
			height : ratio+'vh',
			top:t_data[now-1]+'%',
			left:l_data[now-1]+'%',
			zIndex:'0'
		},300);
		$("#bo"+now).animate({
			width : '20vw',
			height : '20vh',
			top:t_data[now-1]+'%',
			left:bl_data[now-1]+'%',
			zIndex:'0'
		},300);
		$("#i1"+now).animate({
			opacity:'0.0',
			zIndex:'0'
		},100);
		$("#i2"+now).animate({
			opacity:'0.0',
			zIndex:'0'
		},100);
		$("#p"+now).animate({
			fontSize:'2em',
			top: pt_data[now-1]+'%',
			left: pl_data[now-1]+'%',
			zIndex:'0'
		},0);
		$("#upcover").animate({zIndex:'0'},0).hide();
	});
};


$(document).ready(function(){	
	set();
	for(var i = 1;i < 6;i++)
	{
		index_move(i);
	}
	index_return();
});