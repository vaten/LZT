/**
 * Created by FR on 2017/8/9.
 */
(function(w,d){
    function LZT(){
        this.name = "LZT.js";
        this.version = "v0.01";
    }


    //判断是否奇数
    LZT.prototype.isOdd = function(n){
        if(!n && n!=0){
            console.error("参数不能为空！");
        }else if(isNaN(n)){
            console.error("请检查参数是否为数字！");
        }else{
            return !!(n & 1);
        }
    };

    //倒计时
    LZT.prototype.countTime = function (timeStamp,func) {
        var _t = timeStamp;
        var timeOut,timeOutFunc;
        var timeDown = function () {
            if(_t <= 0){
                clearTimeout(timeOut);
            }else{
                _t--;
                var _d = parseInt(_t / (24 * 60 * 60));
                var _h = parseInt((_t - _d * 24 * 60 * 60) / 3600);
                var _m = parseInt((_t - _d * 24 * 60 * 60 - _h * 3600) / 60);
                var _s = parseInt((_t - _d * 24 * 60 * 60 - _h * 3600 - _m * 60));
                var time = {
                    d : _d.length < 2 ? "0" + d : _d,
                    h : _h.length < 2 ? "0" + h : _h,
                    m : _m.length < 2 ? "0" + m : _m,
                    s : _s.length < 2 ? "0" + s : _s
                };
                func(time);
                timeOutFunc();
            }
        };
        timeOutFunc = function () {
            timeOut =setTimeout(timeDown,1000)
        };
        timeOutFunc();
    };

    //日期格式化
    LZT.prototype.dateFormat = function(date, fmt) {
        var date = new Date(date);
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    //页面记录日志
    LZT.prototype.pageLog = function(msg) {
        if(!document.getElementById('log_block')) {
            var div = document.createElement("div");
            div.id="log_block";
            div.style.position = "fixed";
            div.style.top = "0px";
            div.style.width = "50%";
            div.style.height = "40%";
            div.style.fontSize = "24px";
            div.style.color = "rgb(255, 255, 255)";
            div.style.zIndex = "9999999";
            div.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            div.style.padding = "1% 2%";
            div.style.webkitOverflowScrolling = "touch";
            div.style.overflow = "auto";
            div.ontouchmove = function(e) { e.stopPropagation(); }
            document.body.appendChild(div);
        }
        var pt = document.createElement("p");
        pt.innerHTML = msg;
        var log_block = document.getElementById('log_block');
        log_block.appendChild(pt);
        log_block.scrollTop = log_block.lastElementChild.offsetTop;
    }


    //验证手机
    LZT.prototype.isPhoneNum = function (phone) {
        return !/^1[34578][0-9]{9}$/.test(phone);
    };

    w.lzt= new LZT();

})(window,document);