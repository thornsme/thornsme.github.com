var cz_load = {
    articles: "",
    init : function(){
        $.getJSON('post.json', function(data){
            cz_load.articles = data.articles;
        });
    },

    scroll : function()
    {
        $(window).scroll(function()
        {
            var $window=$(window);
            var $content = $('#content');
            var top = $content.offset().top;
            var offset=5;
            var cz_offset = $("#cz_offset");
            var origin = (cz_offset.val() == ''?0:cz_offset.val());
            origin=parseInt(origin);
            $extend=$( '<p class="post-nav"><span class="previous"><a href="javascript:void(0)">' +
                ' « 看看还有什么好玩意'+
                '</a>'+
                ' </span>'+
                '</p>');
            var ext='';
            $(cz_load.articles).each(function(i,e)
            {
                if(i >= origin)
                {
                    ext += '<article class="post">'+
                        '<h2 class="post-title">'+
                        '<a href='+e.url+'>'+e.title+'</a></h2><p class="post-date">' +
                        '<span class="year">'+ e.year+'</span>'+
                        '<span class="month">'+ e.month+'</span>'+
                        '<span class="day">'+ e.day+'</span>'+
                        '<span class="time">'+ e.time+'</span>'+
                        '<span class="postcomment">'+ e.comment+'</span>'+
                        '<span>'+ e.views+'</span>'+
                        '<section class="article-content"> '
                        + e.description + '</section></article>'
                }

              if(i>= origin+offset-1)
               {
                   return false;
               }

            });
            if ($window.scrollTop() + $window.height() - top - $content.outerHeight() > 10)
            {

                setTimeout(function() {
                    $(".post-nav").hide();
                    $("#cz_display").append(ext).slideDown(1000);
                    $("#cz_display").append($extend);
                    cz_offset.val(origin+offset);
                },1500)
            }



         });

    }

}

