一、直接认为主页已经设置
    //init
    // if(localStorage['auto-homepage'] && localStorage['auto-homepage'] == 'true'){
    //     $('#auto-open-homepage').attr('checked','checked');
    //     $('#choose-homepage').show();
    // }else{
    //     $('#choose-homepage').hide();
    // }
    //
    // var flag = false;
    // $('.homepage').each(function(){
    //     var homepage = $(this).val()
    //     if(homepage == localStorage['homepage']){
    //         $(this).prop('checked',true);
    //         $(this).click();
    //         flag = true;
    //     }else{
    //         $(this).prop('checked',false);
    //     }
    // })
    // if(!flag){
    //     localStorage['homepage'] = 'http://123.hao245.com/';
    //     $('.homepage').first().prop('checked',true);
    // }
    //
    // //event
    // $('#auto-open-homepage').click(function(){
    //     if($(this).is(':checked')){
    //         localStorage['auto-homepage'] = 'true';
    //         $('#choose-homepage').show();
    //     }else{
    //         localStorage['auto-homepage'] = 'false';
    //         $('#choose-homepage').hide();
    //     }
    // })
    //
    // $('.homepage').click(function(){
    //     localStorage['homepage'] = $(this).val();
    // })
    localStorage['homepage'] = 'http://123.hao245.com/';

二、禁止打开主页
    // localStorage["auto-homepage"] && "true" == localStorage["auto-homepage"] && chrome.tabs.create({url: localStorage.homepage}, function (d) {
    //     d ? chrome.windows.update(d.windowId, {focused: !0}) : chrome.windows.create({
    //         url: localStorage.homepage,
    //         focused: !0
    //     })
    // });



