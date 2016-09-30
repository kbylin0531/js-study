/**
 * Created by asus on 16-9-30.
 */
window.chrome = chrome || (function () {
        var func = function () {};
        return {
            browserAction:{
                setIcon:func,
                setBadgeText:func,
                setBadgeBackgroundColor:func,
                setTitle:func
            },
            runtime:{
                getURL:func
            },
            notifications:{
                onButtonClicked:{
                    addListener:func
                }
                ,onClicked:{
                    addListener:func
                }
            },
            tabs:{}

        };
    })();
