/* 轮播 */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 200,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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

$(function () {
    let uid = localStorage.getItem("uid");
    /* 侧边栏 */
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
                "id": uid
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
})
/* 搜索框 */
let oInput = document.querySelector(".search-input");
let oUl = document.querySelector(".search-ul");
oInput.oninput = () => {
    let oScript = document.createElement("script");
    oScript.src =
        `https://suggest.taobao.com/sug?code=utf-8&q=${oInput.value}&extras=1&area=c2c&bucketid=atb_search&pid=mm_130402922_1108650181_109789550220&unid=&clk1=&_=1605832432438&callback=searchNav`;
    document.body.appendChild(oScript);
    document.body.removeChild(oScript);
    oUl.style.display = "block";
}
oInput.onblur = () => {
    oInput.value = "";
    oUl.style.display = "none";
}
function searchNav(data) {
    let result = data.result;
    let str = "";
    result.forEach(item => {
        str += `
        <li><a href="#">${item[0]}</a></li> 
        `;
    });
    oUl.innerHTML = str;
}

