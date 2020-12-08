/* 购物车列表 */
$(function () {
    $.ajax({
        type: "GET",
        url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
        data: {
            "id": 45112
        },
        success: function (res) {
            let data = res.data;
            console.log(data);
            let str = "";
            $(data).each(function (i) {
                console.log(data[i]);
                str += `
                    <tr>
                    <td width='60'><input type='checkbox'></td>
                    <td width='540'>
                        <img src=''
                            alt=''>
                        <p>商品名称</p>
                    </td>
                    <td width='120'>单价</td>
                    <td width='120'>
                        <div class='cart-change-num'>
                            <span>-</span><input type='text' value='1'><span>+</span>
                        </div>
                    </td>
                    <td width='120'>优惠</td>
                    <td width='120' class='cart-sprice'>小计</td>
                    <td width='120' class='cart-del'>删除</td>
                </tr>
                    `;
                $(str).appendTo($(".cart-container-main table"));
            })

            /*                 $($.parseHTML("<tr><td td width = '60' ><input type='checkbox'></td><td width='540'><img src='" + data[i].pimg + " ' alt=''> <p>" + data[i].pname + "</p></td><td width='120'>" + data[i].pprice + "</td><td width='120'>< div class= 'cart - change - num' ><span>-</span><input type='text' value='1'><span>+</span></></td ><td width='120'>优惠</td><td width='120' class='cart - sprice'>小计</td><td width='120' class='cart - del'>删除</td></tr> ")).appendTo($(".cart - container - main table ")); */


        }
    })
})