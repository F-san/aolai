/* 登录 */
$(function () {
    for (let i = 0; i < $("input").length; i++) {
        $("input").eq(i).focus(function () {
            switch (i) {
                case 0:
                    $(".ipt-check").eq(i).text("请输入注册的手机号");
                    $(this).blur(function () {
                        $(".ipt-check").eq(i).text("");
                    });
                    break;
                case 1:
                    $(".ipt-check").eq(i).text("请输入密码");
                    $(this).blur(function () {
                        $(".ipt-check").eq(i).text("");
                    });
                    break;
            }
        })
    }
    $("button").click(function () {
        $.ajax({
            type: "GET",
            url: "http://jx.xuzhixiang.top/ap/api/login.php",
            data: {
                "username": $("input").eq(0).val(),
                "password": $("input").eq(1).val()
            },
            success: function (res) {
                alert(res.msg);
                /* appid: ""
                    id: "45112"
                    identity: "0"
                    is_delete: "0"
                    password: "123456"
                    status: "0"
                    token: "acda5088b43df0530b97895b0ab4e79e"
                    username: "111111" */
                if (res.code == 1) {
                    location.href = 'index.html'
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    })
})