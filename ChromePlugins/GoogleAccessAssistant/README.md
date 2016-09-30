修改：
option.js
    $('.homepage').each(function(){
        $(this).prop('checked',true);
        $(this).click();
        flag = true;
        // var homepage = $(this).val()
        // if(homepage == localStorage['homepage']){
        //     $(this).prop('checked',true);
        //     $(this).click();
        //     flag = true;
        // }else{
        //     $(this).prop('checked',false);
        // }
    });
bg.js
    不要统计
    // setTimeout(function () {
    //     var d = d || [];
    //     d.push(["_setAccount", "UA-48334954-3"]);
    //     d.push(["_trackPageview"]);
    //     d = document.createElement("script");
    //     d.type = "text/javascript";
    //     d.async = !0;
    //     d.src = "https://ssl.google-analytics.com/ga.js";
    //     var t = document.getElementsByTagName("script")[0];
    //     t.parentNode.insertBefore(d, t)
    // }, 1E4);