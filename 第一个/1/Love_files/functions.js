/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}

function calculateDiffTime (date){
	let startTime = Date.parse(date);

//	let startTime = '1629107469000'  //2021-08-16 17:51

	let end = new Date();

	let endTime = Date.parse(end);

	//let endTime = '1976262719000'  //2032-08-16 17:51

	let runTime = parseInt((endTime - startTime) / 1000);

	var year = Math.floor(runTime / 86400 / 365);

	runTime = runTime % (86400 * 365);

	var month = Math.floor(runTime / 86400 / 30);

	runTime = runTime % (86400 * 30);

	var day = Math.floor(runTime / 86400);

	runTime = runTime % 86400;

	var hour = Math.floor(runTime / 3600);

	runTime = runTime % 3600;

	var minute = Math.floor(runTime / 60);

	runTime = runTime % 60;

	var second = runTime;

	console.log(`相差${year}年${month}月${day}天${hour}小时${minute}分${second}秒`);

	//return year+','+month+','+day+','+hour+','+minute+','+second;

	var result = "第 <span class=\"digit\">" + day + "</span> 天 <span class=\"digit\">" + hour + "</span> 小时 <span class=\"digit\">" + minute + "</span> 分钟 <span class=\"digit\">" + second + "</span> 秒";
	$("#clock").html(result);

}



/**
 * //获取两个日期的相差日期数
 * @param {any} firstDate 开启时间 2022-03-23 00:03:00
 * @param {any} secondDate 结束时间 2023-03-23 00:04:00
 * @param {any} differ(differ 1.相差天数; 2.相差小时数; 3.相差分钟数; 4.相差秒数)
 */
function date_getdiffer_date(firstDate, differ) {
	//1)将两个日期字符串转化为日期对象
	var startDate = new Date(this.date_ios_format(firstDate));
	var endDate = new Date();
	//2)计算两个日期相差的毫秒数
	var msecNum = endDate.getTime() - startDate.getTime();
	//3)计算两个日期相差的天数
	var dayNum = Math.floor(msecNum / this.date_getdiffer_scale(differ));
	//console.log(firstDate + "," + secondDate + "," + differ + "," + dayNum)
	//return dayNum;
	var result = "第 <span class=\"digit\">" + dayNum + "</span> 天";
	$("#clock").html(result);
}

/**
 * @function
 * @name date_ios_format
 * @desc 解决日期字符串在IOS中显示为NaN的问题
 */
function date_ios_format(datestr) {
	return datestr.replace(/\-/g, "/");
}

/**
 * //获取与毫秒数的转化比例
 * @param {any} value（1.相差天数; 2.相差小时数; 3.相差分钟数; 4.相差秒数）
 */
function date_getdiffer_scale(value) {
	var format;
	//获取转化比（天数跟毫秒数的比例）
	if (value == 1) {
		format = parseFloat(24 * 60 * 60 * 1000);
	}
	//获取转化比（小时数跟毫秒数的比例）
	else if (value == 2) {
		format = parseFloat(60 * 60 * 1000);
	}
	//获取转化比（分钟数跟毫秒数的比例）
	else if (value == 3) {
		format = parseFloat(60 * 1000);
	}
	//获取转化比（秒数跟毫秒数的比例）
	else if (value == 4) {
		format = parseFloat(1000);
	}
	return format;
}


