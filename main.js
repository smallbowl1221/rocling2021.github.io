const root = document.documentElement;

//視窗初始化
window.onload = function(){
	var htopdiv = $(topdiv).height();
	var hheader = $(navheader).height();
	var h = htopdiv;
	if(hheader != 0){
		h = hheader;
	}

	var b = $(ban).height();
	var windowhigh = window.innerHeight;
	var windowwidth = window.innerWidth;
	var important_flex = $(imd_flex).height();
	var news = windowhigh - b - h;

	root.style.setProperty('--topdistance', `${h}px`)

	// if(important_flex > news){
	// 	root.style.setProperty('--ann_height', `${important_flex}px`,)
	// }
	// else{
	// 	root.style.setProperty('--ann_height', `${news}px`,)
	// }


	var fuck = new Boolean(false);

	if(~fuck){
		fuck = Boolean(true)
		document.getElementById("test1").innerHTML = fuck;
	}

	// document.getElementById("test1").innerHTML = ;
}

//偵測視窗更動
window.onresize = function(){
	var htopdiv = $(topdiv).height();
	var hheader = $(navheader).height();
	var h = htopdiv;
	if(hheader != 0){
		h = hheader;
	}
	
	var b = $(ban).height();
	var windowhigh = window.innerHeight;
	var windowwidth = window.innerWidth;
	var important_flex = $(imd_flex).height();
	var news = windowhigh - b;

	root.style.setProperty('--topdistance', `${h}px`,)

	// if(important_flex > news){
	// 	root.style.setProperty('--ann_height', `${important_flex}px`,)
	// }
	// else{
	// 	root.style.setProperty('--ann_height', `${news}px`,)
	// }

}

// 設定滑動
$('.navItems').click(function() {

	var navto = $(this).attr("navTo");
	var htopdiv = $(topdiv).height();
	var hheader = $(navheader).height();
	var h = htopdiv;
	if(hheader != 0){
		h = hheader;
	}
	// 有標籤
	if(navto != "#") {
		// runing = 
		var $div = $(navto);
		var top = $div.offset().top || 0;
		$('html,body').animate({
			'scroll-top': top - h
			}, 1000);
	} 
	//回top
	else {

		$('html,body').animate({
			'scroll-top': 0
			}, 1000);
		}
	}

);


var nav_click = document.querySelector(".navbar-toggle");

$(".navbar-nav .single a").on("click",function () {
	var hheader = $(navheader).height();
	if(hheader!=0){
		nav_click.click();
	}
});

$(".navbar-nav li ul li a").on("click",function () {
	var hheader = $(navheader).height();
	if(hheader!=0){
	nav_click.click();
	}
});