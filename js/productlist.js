/* 商品列表 */
$(function () {
    $.ajax({
        type: "GET",
        url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=20&pagenum=4",
        success: function (res) {
            console.log(res);
            $('<div class="pro-main-r-one"><img src = "http://img1.aolaigo.com/group1/M00/53/71/CggUFl66EE-AcuZzAAB-IsjLdZY185=220x260.jpg"  alt = ""><div></div><p>¥328.00</p><span>${res.pname}</span></div >').appendTo(".pro-main-r-list");
        }
    });
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