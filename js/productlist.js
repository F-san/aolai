/* 商品列表 */

// 添加商品
/* $(".addpro input").eq(4).click(function () {
    $.ajax({
        type: "GET",
        url: 'http://jx.xuzhixiang.top/ap/api/goods/goods-add.php',
        data: {
            pname: $(".addpro input").eq(0).val(),
            pimg: $(".addpro input").eq(1).val(),
            pprice: $(".addpro input").eq(2).val(),
            pid: $(".addpro input").eq(3).val(),
            uid: 45112
        },
        success: function (res) {
            console.log(res);
        }
    })
}) */
$(function () {
    $.ajax({
        type: "GET",
        url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php",
        data: {
            uid: 45112
        },
        success: function (res) {
            let arr = res.data;
            let str1 = "";
            let str2 = "";
            let str3 = "";
            $(arr).each(function (i) {
                str1 += `
                     <div class="pro-main-r-one">
                     <a href='detail.html?id=${arr[i].pid}'>
                        <img src="${arr[i].pimg}"
                            alt="">
                        <div><img src='${arr[i].pimg}'alt=''></div>
                        <p>¥${arr[i].pprice}</p>
                        <span>${arr[i].pname}</span>
                    </a>
                    </div>
                `;
            })
            for (let i = 0; i < 4; i++) {
                str2 += `
                    <li>
                        <div class="pro-hot-img fl">
                            <img src="${arr[i].pimg}"
                                alt="">
                        </div>
                        <div class="pro-hot-msg fl">
                            <p>${arr[i].pname}</p>
                            <p>￥${arr[i].pprice}</p>
                            <div>立即抢购</div>
                        </div>
                    </li>
                `;
                str3 += `
                <li><img src="${arr[i].pimg}"
                            alt="">
                        <p>${arr[i].pname}</p>
                        <p>¥${arr[i].pprice}</p>
                </li>
                `;
            }
            $(str1).appendTo(".pro-main-r-list");
            $(str2).appendTo(".pro-hot-r>ul");
            $(str3).appendTo(".pro-main-l-ul");
        }
    });
    updata();
    // 购物车数据更新
    function updata() {
        $.ajax({
            type: "GET",
            url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
            data: {
                "id": 45112
            },
            success: function (res) {
                let data = res.data;
                navNemb(data);
            }
        })
    }
    // 导航数字
    function navNemb(data) {
        let num = 0;
        $(data).each(function (i) {
            num += parseInt(data[i].pnum);
        })
        $(".cart-number").html(num);
    }
    $(".pro-sort div").click(function () {
        let str = "";
        for (let i = 0; i < 4; i++) {
            str += `
                <li>
                    <p>品牌：</p>
                    <dl>
                        <dd> <a href="#">穆克</a> </dd>
                        <dd> <a href="#">繁华造物</a> </dd>
                        <dd> <a href="#">克莱</a></dd>
                        <dd> <a href="#">朵颐</a></dd>
                    </dl>
                </li>
            `;
        }
        $(str).appendTo($(".pro-sort ul"));
    })
})

/* 侧边栏 */
$(function () {
    $(".sider-left").children("li").bind({
        mouseover: function () {
            $(this).children(".sider-i-text").stop().animate({
                left: -50
            })
            $(this).css({
                'border-top-left-radius': 0,
                'border-bottom-left-radius': 0,
                "border-left": "none"
            });
        },
        mouseout: function () {
            $(this).children(".sider-i-text").stop().animate({
                left: 0
            })
            $(this).css({
                'border-top-left-radius': 10,
                'border-bottom-left-radius': 10,
                "border-left": "1px solid #f0f0f0"
            });
        },
        click: function () {
            $(".sider").stop().animate({
                right: -5
            })
        }
    })
    $(".sider-del").click(function () {
        $(".sider").stop().animate({
            right: -340
        })
    })
    $(".backtop").off("click");
    $(".backtop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        })
    })
})