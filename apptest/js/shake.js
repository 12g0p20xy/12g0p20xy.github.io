var Shake = (function() {

	var SHAKE_THRESHOLD = 800,
		last_update = 0,
		x = y = z = last_x = last_y = last_z = 0;

	if (window.DeviceMotionEvent) {
		window.addEventListener('devicemotion', deviceMotionHandler, false);
	}
	else {
		alert('本设备不支持devicemotion事件');
	}

	function deviceMotionHandler(eventData) {
		var acceleration = eventData.accelerationIncludingGravity,
			curTime = new Date().getTime(),
			speed = 0;

		if ((curTime - last_update) > 100) {
			var diffTime = curTime - last_update;
			last_update = curTime;
			x = acceleration.x;
			y = acceleration.y;
			z = acceleration.z;
			speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

			var count = 0;
			if (speed > SHAKE_THRESHOLD) {
				count++;
				doResult(count);
			}
			last_x = x;
			last_y = y;
			last_z = z;
		}
	}

	var oCount = document.getElementById('#count');

	function doResult(count) {
		oCount.innerHTML = count + '次';
	}

})();