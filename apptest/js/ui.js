$(function(){

	function GetRTime(){
	    var EndTime= new Date('2016/09/12 07:05:00');
	    var NowTime = new Date();
	    var t =EndTime.getTime() - NowTime.getTime();
	    var d=0;
	    var h=0;
	    var m=0;
	    var s=0;
	    if(t>=0){
	      d=Math.floor(t/1000/60/60/24);
	      h=Math.floor(t/1000/60/60%24);
	      m=Math.floor(t/1000/60%60);
	      s=Math.floor(t/1000%60);
	    }
	    document.getElementById("t_d").innerHTML = d;
	    document.getElementById("t_h").innerHTML = h;
	    document.getElementById("t_m").innerHTML = m;
	    document.getElementById("t_s").innerHTML = s;
	}
	setInterval(GetRTime,0);

	var $sBar = $('.searchbar'),
		sDis = $sBar.offset().top;
	$(document).on('scroll',  function() {
		if (document.body.scrollTop >= sDis) {
			$sBar.addClass('fixed');
		}
		else if (document.body.scrollTop < sDis) {
			$sBar.removeClass('fixed');
		}
	});

});