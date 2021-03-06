/* 商品详情 */
$(function () {

    // 商品信息
    let str = location.search;
    //获取商品id
    let id = str.replace(/[^0-9]/ig, "");
    let uid = localStorage.getItem("uid");
    $.ajax({
        type: "GET",
        url: "http://jx.xuzhixiang.top/ap/api/detail.php",
        data: {
            "id": id
        },
        success: function (res) {
            let arr = res.data;
            let str = "";
            $(arr).each(function () {
                str += `
                <p>${arr.pname}</p>
                <div class="detail-prcie"><span>奥莱价：</span><span>￥${arr.pprice}</span></div>
                `;
            })
            for (let i = 0; i < 5; i++) {
                $("<li><img src='" + arr.pimg + "' alt = ''></li >").appendTo(".detail-main-l-list>ul");
            }
            $(".detail-main-m").prepend(str);
            zoom();
            updata();
        }
    })

    // 加入购物车
    $(".detail-num-addcart").click(function () {
        let pnum = $(".num-change").val();
        $.ajax({
            type: "GET",
            url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
            data: {
                "uid": uid,
                "pid": id,
                "pnum": pnum
            },
            success: function () {
                updata();
            }
        })

    })
    //+1
    $(".num-change-plus").click(function () {
        let pnum = parseInt($(".num-change").val()) + 1;
        $(".num-change").val(pnum);
    })
    // -1
    $(".num-change-minus").click(function () {
        let pnum = parseInt($(".num-change").val()) - 1;
        // Cannot read property '0' of undefined 错误，加判断不为空解决
        if (pnum <= 1) {
            pnum = 1;
        }
        $(".num-change").val(pnum);
    })
    // 购物车数据更新
    function updata() {
        $.ajax({
            type: "GET",
            url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
            data: {
                "id": uid
            },
            success: function (res) {
                console.log(res.data);
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
    // 放大镜
    function zoom() {
        $(".detail-main-l-spic").mouseover(function () {
            $(".detail-main-l-zoom").css("display", "block");
            $(".detail-main-l-bpic").css("display", "block");
        });
        $(".detail-main-l-spic").mouseout(function () {
            $(".detail-main-l-zoom").css("display", "none");
            $(".detail-main-l-bpic").css("display", "none");
        });
        $(".detail-main-l-spic").mousemove(function (e) {
            //  1.放大镜跟随鼠标移动
            $(".detail-main-l-zoom").css({
                left: function (x) {
                    x = e.pageX - $(".detail-main-l-spic").offset().left - $(".detail-main-l-zoom").outerWidth() / 2;
                    if (x <= 0) {
                        x = 0
                    } else if (x >= $(".detail-main-l-spic").outerWidth() - $(".detail-main-l-zoom").outerWidth()) {
                        x = $(".detail-main-l-spic").outerWidth() - $(".detail-main-l-zoom").outerWidth()
                    }
                    return x;
                },

                top: function (y) {
                    y = e.pageY - $(".detail-main-l-spic").offset().top - $(".detail-main-l-zoom").outerHeight() / 2;;
                    if (y <= 0) {
                        y = 0
                    } else if (y >= $(".detail-main-l-spic").outerHeight() - $(".detail-main-l-zoom").outerHeight()) {
                        y = $(".detail-main-l-spic").outerHeight() - $(".detail-main-l-zoom").outerHeight()
                    }
                    return y;
                }
            });
            // 2. 图片移动实现放大
            $(".detail-main-l-bpic").children("img").css({
                left: - $(".detail-main-l-zoom").position().left * ($(".detail-main-l-bpic").children("img").outerWidth() / $(".detail-main-l-spic").outerWidth()),
                top: -$(".detail-main-l-zoom").position().top * ($(".detail-main-l-bpic").children("img").outerHeight() / $(".detail-main-l-spic").outerHeight())
            })
        })
        //3.图片相同
        $(".detail-main-l-spic img").attr("src", $(".detail-main-l-list ul li img").attr("src"));
        $(".detail-main-l-bpic img").attr("src", $(".detail-main-l-spic img").attr("src"));
        $(".detail-main-l-list ul li img").mouseover(function () {
            $(".detail-main-l-spic img").attr("src", $(this).attr("src"));
            $(".detail-main-l-bpic img").attr("src", $(".detail-main-l-spic img").attr("src"));
        })
    }
    
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