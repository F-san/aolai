/* 购物车列表 */
import { numMinus, numPlus, updata } from './detail.js';
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
                        <img src='${data[i].pimg}'
                            alt=''>
                        <p>${data[i].pname}</p>
                    </td>
                    <td width='120'>￥${data[i].pprice}</td>
                    <td width='120'>
                        <div class='cart-change-num'>
                            <span>-</span><input type='text' value='${data[i].pnum}'><span>+</span>
                        </div>
                    </td>
                    <td width='120'>优惠</td>
                    <td width='120' class='cart-sprice'>￥${data[i].pnum*data[i].pprice}</td>
                    <td width='120' class='cart-del'>删除</td>
                </tr>
                    `;
            })
            $(str).appendTo($(".cart-container-main table"));
        }
    })  
})