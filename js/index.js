/* 轮播 */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 200,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
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
})


