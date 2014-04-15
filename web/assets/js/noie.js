$(function ()
{
    $.get("/isie?etag="+new Date()+"",function(msg)
    {
            if(msg=='true')
            {
                alert("消灭IE从我做起，请使用Chrome或Firefox浏览本站！\n【http://shaolong.me】");
                window.opener=null;
                window.open('','_self');
                window.close();
            }
    });

});
