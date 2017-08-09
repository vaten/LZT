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


    //验证手机
    LZT.prototype.isPhoneNum = function (phone) {
        return !/^1[34578][0-9]{9}$/.test(phone);
    };

    w.lzt= new LZT();

})(window,document);