(function () {
    //绑定dom 定义变量
    var _$objs = {
        $submitbtn:$('#submit_btn'),
        $user:$('#usr'),
        $pwd:$('#pwd'),
        $cpwd:$('#confirm-pwd'),
        
    }
    //后端地址
    var _urls = {
        //listUrl: 'https://www.bthome.com/os-service/content/stylist/queryList.do',
    }
    //绑定事件
    var _event = {
        submit: function () {
            _$objs.$submitbtn.on('submit', _handle.submitFrom)
        },
    }
    //操作事件
    var _handle = {
        submitFrom: function (e) {
            e.preventDefault();
            console.log('999');

            const params = {
               userName:_$objs.$user.val(),
               password:_$objs.$pwd.val(),
               repeatpass:_$objs.$cpwd.val()
            }
            console.log(params);
            $('#myToast').toast('show')
            _util.ajaxFun('/api/v1/user/signup','post',params,function(data){
                console.log(data,'data==============');
                if (data.code == 0) {
                    window.location.href='/login'
                } else {
                    $('#myToast').toast('show');
                    $('#myToast .toast-body').text(data.msg)
                }
               
            })
            // return false
         
        }
    }
    //ajax 请求
    var _service = {
        // getListData: function () {
        //     //ajax
        // }
    }
    //公共函数
    var _util = {
        ajaxFun: function (url, type, params, callBack) {
            $.ajax({
                method: type || 'get',
                url: url,
                data: params,
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (data) {
                    callBack(data);
                },
            });
        }
    }
    //插件
    var _plugs = {
        // swiper: swiper
    }
    //初始化
    var init = function () {
        console.log('start', '============');
        _event.submit();
        //_plugs.swiper = new Swiper("swiperContainer", {})
    }
    $(function () {
        init();
    })
})();