/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+r),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+i), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+l)
 */
function getS(NUE){wosh=[];var l;Array.prototype.forEach.call((function(){var arr = [],nl=document.getElementsByClassName("botTitle");l=nl.length
for(var i = 0, n; n = nl[i]; ++i) arr.push(n);return arr.sort(function(a,b){return b.parentNode.parentNode.getElementsByClassName('botLVL')[0].childNodes[2].textContent-a.parentNode.parentNode.getElementsByClassName('botLVL')[0].childNodes[2].textContent})})(), function (a) {
        var b = a.getElementsByTagName('a')[0];
        HTTP(b.href, function (xhr) {
            var div = document.createElement('div'),
                s = "";
            div.innerHTML = xhr.responseText;
            Array.prototype.forEach.call(div.getElementsByClassName('col-xs-4'), function (a) {
                s += a.textContent.trim()+" "
            });
//console.log("https://battlebots.co/js/backend_op/battles/battle_create_preview_bot.php?id=7325"+b.href.match(/[0-9]+$/)[0]);
        HTTP("https://battlebots.co/js/backend_op/battles/battle_create_preview_bot.php?id="+NUE+"&id2="+b.href.match(/[0-9]+$/)[0], function (xhr) {
            var div2 = document.createElement('div');
            div2.innerHTML = xhr.responseText;
           if(wosh.push([div2.getElementsByTagName('script')[0].innerHTML.match(/>.*</)[0],b.href,b.textContent,s,div.getElementsByClassName('botLVL')[0].textContent])==l){
            wosh.sort(function(a,b){return b[b.length-1].match(/[0-9]+/)[0]-a[a.length-1].match(/[0-9]+/)[0]}).forEach(function(a){console.log(a)})
           }
           
        });
        })
});}
function HTTP(url, callback, method, post, headers) {
    //headers is an object like this {Connection:"keep-alive"}
    function createXMLHttpRequest() {
        if (typeof XMLHttpRequest != 'undefined') {
            return new XMLHttpRequest();
        } else if (typeof window.ActiveXObject != 'undefined') {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.4.0');
            } catch (e) {
                try {
                    return new ActiveXObject('MSXML2.XMLHTTP');
                } catch (e) {
                    try {
                        return new ActiveXObject('Microsoft.XMLHTTP');
                    } catch (e) {
                        return null;
                    }
                }
            }
        }
    }
    function looProp(object, callback) {
        var a;
        for (a in object) {
            if (object.hasOwnProperty(a)) callback.call(object, a, object[a]);
        }
    }
    method = method || 'GET';
    var xhr = createXMLHttpRequest();
    if (xhr) {
        xhr.open(method, url, true);
        looProp(headers, function (a, b) {
            xhr.setRequestHeader(a, b)
        })
        xhr.onloadend = function () {
            if (xhr.readyState == xhr.DONE) {
                callback(xhr)
            }
        };
        xhr.send(post);
        return xhr;
    } else {
        return null;
    }
}

function getBotStats(x,callbak){
HTTP("https://battlebots.co/bot?id="+x,function(e){
if(e.status===0){getBotStats(x,callbak)}else{
var k=document.createElement("div"),stuff={},h;
k.innerHTML=e.responseText;
stuff.id=x;
stuff.title=k.getElementsByClassName("botTitle")[0].textContent;
stuff.level=k.getElementsByClassName("botLVL")[0].childNodes[1].textContent.trim();
stuff.image=k.getElementsByClassName("botIMG")[0].children[0].src;
stuff.available=(h=k.getElementsByClassName('botData')[0].children[2])&&h.textContent
stuff.DMG=(h=k.getElementsByClassName("botDMG")[0])&&h.textContent.trim();
stuff.energy=(h=k.getElementsByClassName("botEnergy")[0])&&h.textContent.trim();
stuff.isBusy=(/charging|repairing/.test(k.getElementsByClassName('bot')[0].className))
stuff.countdown=(h=k.getElementsByClassName("countdowner")[0])&&h.getAttribute("data-time")
stuff.energyToBattle=+k.getElementsByClassName("botPageInfo")[0].getElementsByClassName("label")[0].childNodes[0].textContent
callbak(stuff)}
});
}

function doJob(attaker,defendants){//Battle attack with defendants as soon as possiblu, don't care about results, yet.
var isBusy=true,i=0;

function rechek(){getBotStats(attaker,checkIfAttackerIsReady);alertify.log("RECHECK "+i)}
function checkIfAttackerIsReady(a){if(isBusy=a.isBusy){alertify.log(a.title+" seems busy :"+(1000*(2+(+a.countdown))-Date.now())/1000+" seconds");setTimeout(rechek,1000*(2+(+a.countdown))-Date.now());return false}
if((a.DMG!="100"&&(a.DMG!="0"?!Math.floor(Math.random()*5):true))){fixBot(attaker,function(){alertify.log("DAMAGE:"+a.DMG+" ,attempt to fix bot "+attaker),isBusy=true,setTimeout(rechek,10000)});return false}
var y=a.energy.split('/')

if(y[0]!==y[1]&&(+y[0]+a.energyToBattle>=0?!Math.floor(Math.random()*10):true)){rechargeBot(attaker,function(){alertify.log("I MAY HAVE SPEND "+(y[1]-y[0])*5+" credits recharging bot!!"),isBusy=true;setTimeout(rechek,30000)})
return false}
getBotStats(defendants[i++],checkIfDefendantIsReady);i%=defendants.length;
}
function checkIfDefendantIsReady(defender){
if(isDefenderAvailable=/battle/i.test(defender.available)){
if(!isBusy){battle(attaker,defender.id,function(){alertify.log("HUEHUEHUEHUEHUEHUEHUEHUE")});isBusy=true}
}else{alertify.log(defender.title+" is not availabe for battle")}
setTimeout(rechek,1000)
}
function fixBot(id,c){
HTTP("//battlebots.co/js/backend_op/bots/bot_repair.php?id="+id,c);
}
function rechargeBot(id,c){HTTP("//battlebots.co/js/backend_op/bots/bot_charge.php?id="+id,c)};
function battle(id1,id2,c){HTTP("//battlebots.co/battle?offenderID="+id1+"&defenderID="+id2,c)
}
rechek()
}
7293,[728,944,2072,1123,5346,69,775,248,5205,3664,1884,5473,986,396]

7252,[944,2072,1123,69,775,248,5205,3664,591,2465,4152,4212,1075,6626,5780,2315,5400,946,2656,2358,63]

8081,[69,775,248,5205,3664,591,2465,4152,4212,1075,6626,5780,2315,5400,5780,2315,6626,4212,1075,5200]

7743,[2465,4152,4212,1075,6626,5780,2315,5400,5780,2315,6626,4212,1075,5200,4038,6331,6230,3041,2709,8082,2578,7701]

function UnstationStation(bots){
function getNext2Minutes(){
var date=new Date();
if(date.getMinutes()>2){
date.setHours(date.getHours()+1)
}
date.setMinutes(2);
date.setSeconds(50)
return date
}
function unstation(botID,nodeID){
HTTP("//battlebots.co/js/backend_op/nodes/node_unstationbot.php",Function(),"POST","botID="+botID+"&nodeID="+nodeID,{"Content-Type":"application/x-www-form-urlencoded"})}
function station(botID,nodeID){
HTTP("//battlebots.co/js/backend_op/nodes/node_stationbot.php",Function(),"POST","botID="+botID+"&nodeID="+nodeID,{"Content-Type":"application/x-www-form-urlencoded"})}
function unstationALL(){
bots.forEach(function(a){unstation(a[0],a[1])})
}
function stationAll(){
bots.forEach(function(a){station(a[0],a[1])})
}

function startCycle(){
if(getNext2Minutes()-Date.now()>0){
unstationALL();
}
setTimeout(function(){stationAll();setTimeout(startCycle,110000);},getNext2Minutes()-Date.now())
}
window.stationAll=stationAll
window.unstationALL=unstationALL
startCycle();
}

UnstationStation([["8157",207],["7258",56],["7642",1532],["8081",1024],["8141",3812],["8156",456],["7662",3048],["7293",2331],["8019",3068],["7252",3793],["7230",2890],["7257",3839],["7227",2974],["7661",3494],["7743",2515]])

l=[];Array.prototype.forEach.call(document.getElementsByClassName("botHeader"),function(a){getBotStats(a.getElementsByTagName('a')[0].href.split('=')[1],function(a){
//IMPORTANT
l.push([a.id,a.cityNode])
})})

7293,[728,944,2072,1123,5346,69,775,248,5205,3664,1884,5473,986,396]

7252,[944,2072,1123,69,775,248,5205,3664,591,2465,4152,4212,1075,6626,5780,2315,5400,946,2656,2358,63]

8081,[69,775,248,5205,3664,591,2465,4152,4212,1075,6626,5780,2315,5400,5780,2315,6626,4212,1075,5200]

7743,[2465,4152,4212,1075,6626,5780,2315,5400,5780,2315,6626,4212,1075,5200,4038,6331,6230,3041,2709,8082,2578,7701]

function UnstationStation(bots){
function getNext2Minutes(){
var date=new Date();
if(date.getMinutes()>2){
date.setHours(date.getHours()+1)
}
date.setMinutes(2);
date.setSeconds(50)
return date
}
function unstation(botID,nodeID){
HTTP("//battlebots.co/js/backend_op/nodes/node_unstationbot.php",Function(),"POST","botID="+botID+"&nodeID="+nodeID,{"Content-Type":"application/x-www-form-urlencoded"})}
function station(botID,nodeID){
HTTP("//battlebots.co/js/backend_op/nodes/node_stationbot.php",Function(),"POST","botID="+botID+"&nodeID="+nodeID,{"Content-Type":"application/x-www-form-urlencoded"})}
function unstationALL(){
bots.forEach(function(a){unstation(a[0],a[1])})
}
function stationAll(){
bots.forEach(function(a){station(a[0],a[1])})
}

function startCycle(){
if(getNext2Minutes()-Date.now()>0){
unstationALL();
}
setTimeout(function(){stationAll();setTimeout(startCycle,110000);},getNext2Minutes()-Date.now())
}
window.stationAll=stationAll
window.unstationALL=unstationALL
startCycle();
}

UnstationStation([["8157",207],["7258",56],["7642",1532],["8081",1024],["8141",3812],["8156",456],["7662",3048],["7293",2331],["8019",3068],["7252",3793],["7230",2890],["7257",3839],["7227",2974],["7661",3494],["7743",2515]])

l=[];Array.prototype.forEach.call(document.getElementsByClassName("botHeader"),function(a){getBotStats(a.getElementsByTagName('a')[0].href.split('=')[1],function(a){
//IMPORTANT
l.push([a.id,a.cityNode])
})})


doJob(8081,[2578,2315,4212,8082,5200,3041,4038,6626,6331,6230,4152,8067,7701,2557,380,7761,7977,7936,5871,7208,19])
728,944,2072,1123,69,775,248,5205,591,8081,3664,1075,508,5449,2547,740,290,7228

