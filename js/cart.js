/* 购物车列表 */
$(function () {
    let uid = localStorage.getItem("uid");
    $.ajax({
        type: "GET",
        url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
        data: {
            "id": uid
        },
        success: function (res) {
            let data = res.data;
            let str = "";
            $(data).each(function (i) {
                str += `
                    <tr class='proID' data-id='${data[i].pid}'>
                    <td width='60'><input class='checkone' type='checkbox' data-id='${data[i].pid}'></td>
                    <td width='540'>
                        <img src='${data[i].pimg}'
                            alt=''>
                        <a href='detail.html?id=${data[i].pid}'><p>${data[i].pname}</p></a>
                    </td>
                    <td width='120'>￥${data[i].pprice}</td>
                    <td width='120'>
                        <div class='cart-change-num' data-i = '${i}'>
                            <span>-</span><input class='num-change' type='text' value='${data[i].pnum}'><span>+</span>
                        </div>
                    </td>
                    <td width='120'>优惠</td>
                    <td width='120' class='cart-sprice' data-id=${data[i].pid}>￥${data[i].pnum * data[i].pprice}</td>
                    <td width='120' class='cart-del' data-id='${data[i].pid}'>删除</td>
                </tr>
                    `;
            })
            $(str).appendTo($(".cart-container-main table"));
            navNemb();
            // -
            $(".cart-change-num>span:first-child").click(function () {
                let i = $(this).parent().attr("data-i");
                let id = $(this).parent().parent().parent().attr("data-id");
                let pnum = parseInt($(this).next().val()) - 1;
                if (pnum < 1) {
                    pnum = 1;
                }
                numMinus(id, pnum);
                $(this).next().val(pnum);
                $(this).parent().parent().next().next().html("￥" + data[i].pprice * pnum);
                navNemb();
            })
            // +
            $(".cart-change-num>span:last-child").click(function () {
                let i = $(this).parent().attr("data-i");
                let id = $(this).parent().parent().parent().attr("data-id");
                let pnum = parseInt($(this).prev().val()) + 1;
                numPlus(id, pnum);
                $(this).prev().val(pnum);
                $(this).parent().parent().next().next().html("￥" + data[i].pprice * pnum);
                navNemb();
            })

            // 全选框
            //点击全选框->全部单选框是checked状态，即和全选框保持一致
            $(".checkAll").click(function () {
                $(".checkone").each(function (i) {
                    $(this).prop("checked", function () {
                        return $(".checkAll").prop("checked");
                    });
                    numPriceAll();
                })
            })
            // 单选框
            // 单选框的checked状态数量等于单选框的总量则全选框checked
            $(".checkone").each(function () {
                $(this).click(() => {
                    let count = 0;
                    $(".checkone").each(function () {
                        // 计数
                        if ($(this).prop("checked")) {
                            count++;
                        }
                    })
                    if (count == $(".checkone").length) {
                        $(".checkAll").prop("checked", true);
                    } else {
                        $(".checkAll").prop("checked", false);
                    }
                    numPriceAll();
                })
            })
            // 单个删除
            $(".cart-del").each(function () {
                $(this).click(() => {
                    let pid = $(this).attr("data-id");
                    cartDel(pid);
                    $(this).parent().remove();
                    navNemb();
                })
            })
            // 批量删除
            $(".checkone").each(function () {
                $(".cart-delAll").click(() => {
                    if ($(this).prop("checked")) {
                        let pid = $(this).attr("data-id");
                        cartDel(pid);
                        $(this).parent().parent().remove();
                        $(".numPrice").html(0);
                    }
                    navNemb();
                })
            })
            // 计算总价
            function numPriceAll() {
                let numPrice = 0;
                $(".checkone").each(function (i) {
                    if ($(this).prop("checked")) {
                        numPrice += +$(".num-change").eq(i).val() * data[i].pprice;
                    }
                })
                $(".numPrice").html("￥" + numPrice);
            }
            // 删除
            function cartDel(pid) {
                $.ajax({
                    type: "GET",
                    url: "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
                    data: {
                        "uid": uid,
                        "pid": pid
                    },
                })
            }
        }
    })
    // 导航数字
    function navNemb() {
        let num = 0;
        $(".num-change").each(function () {
            num += parseInt($(this).val());
        })
        $(".cart-number").html(num);
    }
    //+1
    function numPlus(id, pnum) {
        $.ajax({
            type: "GET",
            url: "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
            data: {
                "uid": uid,
                "pid": id,
                "pnum": pnum
            }
        })
    }
    // -1
    function numMinus(id, pnum) {
        // Cannot read property '0' of undefined 错误，加判断不为空解决
        $.ajax({
            type: "GET",
            url: "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
            data: {
                "uid": uid,
                "pid": id,
                "pnum": pnum
            }
        })
    }
})
