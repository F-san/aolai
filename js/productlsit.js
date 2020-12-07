/* 商品列表 */
$(function () {
    $.ajax({
        type:"GET",
        url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=20&pagenum=4",
        success: function (res) {
            console.log(res);
            $('<div class="pro-main-r-one"><img src = "http://img1.aolaigo.com/group1/M00/53/71/CggUFl66EE-AcuZzAAB-IsjLdZY185=220x260.jpg"  alt = ""><div></div><p>¥328.00</p><span>${res.pname}</span></div >').appendTo(".pro-main-r-list");
        }
    });
})