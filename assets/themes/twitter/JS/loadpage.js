/**
 * Created with JetBrains WebStorm.
 * User: 郑谨
 * Date: 12-11-27
 * Time: 下午3:52
 * To change this template use File | Settings | File Templates.
 */

$(function() {
    var $window = $(window);
    var $content = $('#content');
    var top = $content.offset().top;
    var $loading = $('<div/>');
    var loading = false;
    var $next_url = $('#content>.post-nav>.previous>a');
    var next_url = '';
    var $no_more = $('<span class="no-more"><a href="javascript:;">停止自动加载</a></span>');
    //alert($loading);
    //alert($no_more);
    //alert("nihaoma");
    $no_more.find('a').click(function() {
        $window.unbind('scroll', load_more);
        $no_more.remove();
    });

    function set_next_url() {
        //alert($next_url.length);
        if ($next_url.length) {
            next_url = $next_url.attr('href');
            //alert(next_url);
        } else {
            //alert("xiaobowenshizhu");
            $window.unbind('scroll', load_more);
            next_url = '';
        }
    }

    function load()
    {
        $loading.load (next_url + ' #content', function() {
            //alert("进来吧");
            $next_url = $loading.find('.post-nav>.previous>a');
            set_next_url();
           // alert(next_url);
            $next_url.parent().after($no_more);
            $('#content>.post-nav').detach();//移除所有的 $('#content>.post-nav')元素
           // alert("能到这里来吗？");
            $loading.children().detach().children().hide().appendTo($content).slideDown(1000);
            //$loading.children().detach().children().hide().appendTo($content).slideDown(1000);
           loading = false;
        });
        _gaq.push(['_trackEvent', 'Page', 'Load', next_url]);
       // alert(next_url);
    }

    function load_more() {
       // alert(($window.scrollTop() + $window.height() - top - $content.outerHeight())>80);
        if (!loading && ($window.scrollTop() + $window.height() - top - $content.outerHeight() > 40)) {
            loading = true;
            load();
        }
    }

    $window.bind('scroll', load_more);
    set_next_url();
});