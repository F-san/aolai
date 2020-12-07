/* 商品详情 */
$(function () {
    zoom();
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

    }

})