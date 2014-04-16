$(function ()
{
    navbar();
   footer();
});

function navbar()
{
    $('<div class="navbar-inner"><div class="container"><a class="brand" href="./">短点</a></div></div>').appendTo($('#navbar'));
}

function footer()
{
    var $unstyledUl = $('<ul class="unstyled"></ul>');

    var $firstUlFooterLinks = $('<ul class="footer-links"></ul>');
    $firstUlFooterLinks
            .append($('<li>Powered by <a target="_blank" href="https://github.com/nutzam/nutz">Nutz</a></li>'))
            .append($('<li>Thanks <a target="_blank" href="http://twitter.github.com/bootstrap/index.html">Bootstrap</a></li>'));

    $unstyledUl
            .append($('<li></li>').append($firstUlFooterLinks))
//            .append($('<li class="footer-links" style="display: none" id="site-qrcode"><img src="https://chart.googleapis.com/chart?chs=72x72&amp;cht=qr&amp;choe=UTF-8&amp;chl=http%3A%2F%2Fshaolong.me%2F"></li>'))
            .append($('<li class="footer-links"><img src="/assets/img/zz.png" /></li>'))

    $('<div class="container"></div>').append($unstyledUl).appendTo($('.footer'));

}



