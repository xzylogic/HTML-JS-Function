$(document).ready(function(){
    var title,content,ImgUrl,prev,next;
    var sideBar=$(".do_sideBar li a");
    for(var i=0;i<sideBar.length;i++){
        (function(m){
            sideBar[m].onclick=function(){
                sideBar.css('color','#4c4c4c');
                sideBar[m].style.color='mediumpurple';
                if(m===sideBar.length-1){
                    $(".do_prev a:last-child").css('display','none');
                }else{
                    $(".do_prev a:last-child").css('display','block');
                }
                gain(m);
            };
        })(i);
    }
    nextPage(0);
    function nextPage(m) {
        $(".do_prev a:last-child")[0].onclick=function () {
            m>=sideBar.length ? m=sideBar.length : m++;
            if(m===sideBar.length-1){
                $(this).css('display','none');
                gain(m);
            }else{
                $(this).css('display','block');
                gain(m);
            }
        };
    }
    function gain(m) {
        $(document).scrollTop(0);    //滚动条至顶端
        $(".do_prev a:first-child")[0].onclick=function () {
            m<=0 ? m=-1 : m--;
            if(m<0){
                $(this).attr('href','index.html');
            }else{
                $(this).attr('href','javascript:void(0)');
                $(".do_prev a:last-child").css('display','block');
                gain(m);
            }
        };
        nextPage(m);
        $.getJSON('js/document.json',function (data) {
            $.each(data, function (i, index){
                title  =index["title"];
                content=index["content"];
                ImgUrl =index["imgUrl"];
                prev   =index["prev"];
                next   =index["next"];
                $(".do_menuContent_article h2").html(title[m]);
                $(".do_menuContent_article p").html(content[m]);
                $(".do_menuContent_pic img").attr('src',ImgUrl[m]);
                if((m-1)<=-1){
                    $(".do_prev a:first-child").html('上一页： << 首页 ');
                }else{
                    $(".do_prev a:first-child").html('上一页： '+prev[m-1]);
                }
                $(".do_prev a:last-child").html('下一页： '+next[m+1]);
            });
        });
    }
});