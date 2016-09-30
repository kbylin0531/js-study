var BGPage = chrome.extension.getBackgroundPage();

var data = BGPage.popupView;
console.log(data.status);
switch (data.status){
    case 'off':
        document.getElementById('offStatus').style.display = 'block';
        document.getElementById("tips").innerHTML=data.warming;
        break;
    case 'on':
        document.getElementById('onStatus').style.display = 'block';
        break;
    default :
        console.error('这错误不可能');
}

document.getElementById('versionNumber').innerText = chrome.runtime.getManifest().version;
document.getElementById('openMainWebsite').innerHTML = data.tips;
document.getElementById('settings').addEventListener('click', function(event){
    chrome.tabs.create({url:'/options.html'});
})