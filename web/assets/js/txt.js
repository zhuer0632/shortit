$(function() {
    var path = location.pathname.split('/');
    var url_v = 'api/read/' + path[path.length - 1];


    $.ajax({
        url:url_v,
        type:'POST',
        cache:false,
        contentType:'text/plain; charset=utf-8;', //统一前后端编码为utf-8防止ie下返回undefined
        success:function (result) {
            $('#content').text(result);
            prettyPrint();
        }
    });

});
