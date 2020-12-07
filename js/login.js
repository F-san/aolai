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
                // console.log(res);
                alert(res.msg);
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