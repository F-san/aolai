"use strict";$(function(){for(var t=0;t<$("input").length;t++)!function(t){$("input").eq(t).focus(function(){switch(t){case 0:$(".ipt-check").eq(t).text("请输入注册的手机号"),$(this).blur(function(){$(".ipt-check").eq(t).text("")});break;case 1:$(".ipt-check").eq(t).text("请输入密码"),$(this).blur(function(){$(".ipt-check").eq(t).text("")})}})}(t);$("button").click(function(){$.ajax({type:"GET",url:"http://jx.xuzhixiang.top/ap/api/login.php",data:{username:$("input").eq(0).val(),password:$("input").eq(1).val()},success:function(t){alert(t.msg),console.log(t),1==t.code&&(location.href="index.html",localStorage.setItem("uid",t.data.id),localStorage.setItem("token",t.data.token))},error:function(t){console.log(t)}})})});