/* 注册 */
$(function () {
    for (let i = 0; i < $(".ipt-check").length; i++) {
        $("input").eq(i).focus(function () {
            switch (i) {
                case 0:
                    $(".ipt-check").eq(i).text("请输入注册的手机号");
                    $(this).blur(function () {
                        $(".ipt-check").eq(i).text("");
                    });
                    break;
                case 1:
                    $(".ipt-check").eq(i).text("6-20位字符，可使用字母，数字或字符组合");
                    $(this).blur(function () {
                        $(".ipt-check").eq(i).text("");
                    });
                    break;
                case 2:
                    $(".ipt-check").eq(i).text("请再次输入密码");
                    $(this).blur(function () {
                        if ((/^[a-z0-9_-]{6,20}$/).test($(this).val())
                        ) {
                            $(".ipt-check").eq(i).text("");
                        } else {
                            $(".ipt-check").eq(i).css("color", "red").text("请输入正确的密码！");
                        }
                    });
                    break;
                case 3:
                    $(".ipt-check").eq(i).text("输入验证码");
                    $(this).blur(function () {
                        $(".ipt-check").eq(i).text("");
                    });
                    break;
                case 4:
                    $(".ipt-check").eq(i).text("输入验证码号");
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
            url: "http://jx.xuzhixiang.top/ap/api/reg.php",
            data: {
                "username": $("input").eq(0).val(),
                "password": $("input").eq(1).val()
            },
            success: function (res) {
                alert(res.msg);
                if (res.code == 1) {
                    location.href = 'login.html'
                }
            },
            error: function (err) {
                console.log(err);
            }
        });

    })

})
