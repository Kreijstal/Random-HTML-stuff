function getOffset(el){
    var _x = 0,_y = 0;
    while(el) {
        _x += el.offsetLeft- el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
};function getCoordinatesOfElement(Element,corner){var s=Element.getClientRects()[0],n=getOffset(Element);var sy=corner?s.top:(s.height+s.top)/2,sx=corner?s.left:(s.width+s.left)/2,cx=corner?n.left:(n.left+Element.offsetWidth)/2,cy=corner?n.top:(n.top+Element.offsetHeight)/2;return {screenX:sx,screenY:sy,clientX:cx,clientY:cy}}
function simulatedClick(target, options) {

            var event = target.ownerDocument.createEvent('MouseEvents'),c=getCoordinatesOfElement(target,true),
                options = options || {};

            //Set your default options to the right of ||
            var ar = [
                options.type         ||'click',
                options.canBubble    ||true,
                options.cancelable   ||true,
                options.view         ||target.ownerDocument.defaultView, 
                options.detail       ||1,
                options.screenX      ||c.screenX||0, //The coordinates within the entire page
                options.screenY      ||c.screenY||0,
                options.clientX      ||c.clientX||0, //The coordinates within the viewport
                options.clientY      ||c.clientY||0,
                options.ctrlKey      ||false,
                options.altKey       ||false,
                options.shiftKey     ||false,
                options.metaKey      ||false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
                options.button       ||0, //0 = left, 1 = middle, 2 = right
                options.relatedTarget||null
            ]

            //Pass in the options
            event.initMouseEvent.apply(event,ar);

            //Fire the event
            return target.dispatchEvent(event);
        }
simulatedClick(document.getElementsByClassName('kix-spelling-error')[0],{type:"contextmenu",button:2});stD=document.getElementsByClassName('goog-menuitem-content');stDL=stD.length;for(XXDs=0;XXDs<stDL;XXDs++){hue=stD[XXDs];if(/Always correct to/gi.test(hue.innerHTML)){console.log(hue);simulatedClick(hue,{type:"mousedown",button:0});simulatedClick(hue,{type:"mouseup",button:0});break;};}



function simulatedKeystroke(target, options) {

            var event = target.ownerDocument.createEvent('KeyboardEvents'),
                options = options || {};

            //Set your default options to the right of ||
            var ar = [
                options.type         ||'keyup',
                options.canBubble    ||true,
                options.cancelable   ||true,
                options.view         ||target.ownerDocument.defaultView, 
                options.ctrlKey      ||false,
                options.altKey       ||false,
                options.shiftKey     ||false,
                options.metaKey      ||false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
                options.keyCode      ||0x4C,
                options.charCode     ||0x4c
            ]

            //Pass in the options
            event.initKeyboardEvent.apply(event,ar);

            //Fire the event
            return target.dispatchEvent(event);
        };function NEW(){if(document.getElementsByClassName('hints-sentence popover-well')[0]!==undefined){a=document.getElementsByClassName('hints-sentence popover-well')[0].innerText,b=document.getElementById('text-input');if(a=="Desculpa a menina."){b.value="forgive þe girl";simulatedKeystroke(b);document.getElementById('submit_button').click();setTimeout(function(){document.getElementById('continue_button').click()},2000);}else if(a=="Desculpa o menino."){b.value="forgive þe boy";simulatedKeystroke(b);document.getElementById('submit_button').click();setTimeout(function(){document.getElementById('continue_button').click()},2000)}}
if(s=document.getElementsByClassName('item clearfix')[0]){;for(i in s){console.log(i);if(/Forgive the boy/.test(s[i].innerText)){s[i].getElementsByTagName('input')[0].click();break;}};setTimeout(function(){document.getElementById('submit_button').click()},70);setTimeout(function(){document.getElementById('continue_button').click()},70)}else if(t=document.getElementsByClassName("end-continue btn large primary")[0]){t.click()}else if(t=document.getElementsByClassName("btn primary practice-button")[0]){t.click()}else if(t=document.getElementsByClassName("btn large right")[0]){t.click()}}

//Check IPTorrents contantly
function lel(){xhr=new XMLHttpRequest();xhr.open('GET',"http://www.iptorrents.com/torrents/?free=on&q=&qf=");xhr.onreadystatechange=function(){if(xhr.DONE==xhr.readyState){j=document.createElement('div');j.innerHTML=xhr.response;t=j.getElementsByClassName('torrents')[0];try{t=t.getElementsByTagName('tr')[1];l='';for(i=0;i<t.children.length;i++){l+=t.children[i].innerText+'¦'};l=l.split('¦');if(/GB/.test(l[5])){ss=l[5].match(/[0-9.]*/)[0].replace(/\./g,"");if(ss<5)alert('hue?');console.log('BAAAAAAAD: ',l);setTimeout(lel,30000)}else{console.log(l);alert('DUDE!')}}catch(x){console.error(x);setTimeout(lel,40000)}}};xhr.send()}

function hue(p){for(i=5,f=7;i>2;i--){if(p.charCodeAt()<Math.pow(2,f)){return f}f=i;for(ii=(6-i);ii>0;ii--){f+=6}}};(new Function('x','return x.charCodeAt()'))

//ANIMOOTION
function moveWithAcceleration(element,x,y,speed,a){var s=getOffset(element),height=y-s.top,width=x-s.left,H=Math.sqrt((Math.pow(width,2)+Math.pow(height,2))),COS=height/H,SIN=width/H,ax=a*COS,ay=a*SIN,sx=speed*COS,sy=speed*SIN;console.log(s,height,width,H,COS,SIN,ax,ay,sx,sy)}

//URLEncode to Object
function gah(RR){var b={},a=RR.split('&');for(var i=0,l=a.length;i<l;i++){var c=a[i].split('='),d=unescape(c[1]);if(c.length<2){return RR};if(d!==c[1]&&(~d.indexOf('&'))&&~d.indexOf('=')&&!(d.indexOf("http")==0)){b[c[0]]=gah(d)}else{b[c[0]]=d}};return b}

//EF
UActual = (function (fagit) {
function HTTP(url,callback,method,post,headers){//headers is an object like this {Connection:"keep-alive"}
function looProp(object,callback){
var a;
for(a in object){
if(object.hasOwnProperty(a))callback.call(object,a,object[a]);
}
}
method=method||"GET";
var xhr=new XMLHttpRequest();
xhr.open(method,url,true);
looProp(headers,function(a,b){xhr.setRequestHeader(a,b)})
xhr.onloadend=function(){if(xhr.readyState==xhr.DONE){callback(xhr)}};
xhr.send(post);
console.log(xhr)
return xhr;
}
function callNuns(C){var i,d=document.getElementsByClassName('ets-ui-step-bd'),
    f=[];f.forEach.call(d,function(a){f.push(a.getAttribute('data-id'))});f=f.map(function(a){return "progress!3462096;step;"+a.split('!')[1]+".children"});//GET EVERYTHING
    HTTP('http://www.englishtown.com/services/shared/queryproxy?c=countrycode%3dde%7cculturecode%3des-CL%7cpartnercode%3dNone%7csiteversion%3d30-1',function(xhr){fg=xhr.response&&JSON.parse(xhr.response);console.log("EXECUTION",xhr.readyState,fg);C(y.nuns=fg.slice(f.length).map(function(a){return a.id.split(';')[2]}))},'POST','q='+escape(f.join('|')),{"Content-Type":"application/x-www-form-urlencoded"})}
    function G() {
        var d = y.open[1];
        y.open[1] = "http://www.englishtown.com/services/school/query";
        y.open.push(false);
        var a = x(true),
            e;
        y.open.pop();
        y.open[1] = d;
        a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        a.setRequestHeader("x-components", "ef/service/query@12:ef/service/context@14");
        a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        a.send("q=school_context!current");
        if (e = JSON.parse(a.response)) {
            x.con["studentCourse_id"] = e[0].currentEnrollment.id.match(/[0-9]+/)[0];
        }

    }
    var y = {
       // axad: document.getElementsByClassName('ets-ui-acc-act-nav')[0].getElementsByClassName('ets-ui-acc-act-nav-act'),
        open: ['post', "http://www.englishtown.com/services/school/2.1/action/progress/SubmitActivityScore?c=countrycode=co|culturecode=es-CL|partnercode=None|siteversion=24-1"],
        reqhead: [
            ['x-components', 'ajax'],
            ['X-Requested-With', 'XMLHttpRequest'],
            ["Content-Type", "application/json; charset=UTF-8"],
            ["x-request-id", (new Date).getTime()],
            ["X-Requested-With", "XMLHttpRequest"]
        ],
        actID: 0,
        setRequestHeader: function (xhr) {
            var i, l, n = xhr.setRequestHeader;
            for (i = 0, l = y.reqhead.length; i < l; i++) {
                n.apply(xhr, y.reqhead[i])
            }
        }
    };
    x = function a(heds) {
        xhr = new XMLHttpRequest;
        xhr.open.apply(xhr, y.open);
        if (!heds) {
            y.setRequestHeader(xhr);
        }
        return xhr;
    };
    x.y = y;
    x.con = {
        "studentCourse_id": "3462096",
        "student_id": ET.Chat.ChatMgr.memberId,
        "score": 100,
        "content": "The other day I was the some friends playing basket and..",
        "minutesSpent": 1,
        "isReview": false,
        "uiMode_id": 1
    }
    x.send = function (xhr, ID) {
        var f = x.con;
        f["activity_id"] = ID || y.actID;
        xhr.send(JSON.stringify(f))
    }
    y.nuns = [];
    callNuns(function(a){y.nuns=a;})
    
    G();
    fagit.LO = x
    return x;
})

EActual = (function (fagit) {
    function G() {
        var d = y.open[1];
        y.open[1] = "http://www.englishtown.com/services/school/query";
        y.open.push(false);
        var a = x(true),
            e;
        y.open.pop();
        y.open[1] = d;
        a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        a.setRequestHeader("x-components", "ef/service/query@12:ef/service/context@14");
        a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        a.send("q=school_context!current");
        if (e = JSON.parse(a.response)) {
            x.con["studentCourse_id"] = e[0].currentEnrollment.id.match(/[0-9]+/)[0];
        }

    }
    var y = {
        axad: document.getElementsByClassName('ets-ui-acc-act-nav')[0].getElementsByClassName('ets-ui-acc-act-nav-act'),
        open: ['post', "http://www.englishtown.com/services/school/2.1/action/progress/SubmitActivityScore?c=countrycode=co|culturecode=es-CL|partnercode=None|siteversion=24-1"],
        reqhead: [
            ['x-components', 'ajax'],
            ['X-Requested-With', 'XMLHttpRequest'],
            ["Content-Type", "application/json; charset=UTF-8"],
            ["x-request-id", (new Date).getTime()],
            ["X-Requested-With", "XMLHttpRequest"]
        ],
        actID: 0,
        setRequestHeader: function (xhr) {
            var i, l, n = xhr.setRequestHeader;
            for (i = 0, l = y.reqhead.length; i < l; i++) {
                n.apply(xhr, y.reqhead[i])
            }
        }
    };
    x = function a(heds) {
        xhr = new XMLHttpRequest;
        xhr.open.apply(xhr, y.open);
        if (!heds) {
            y.setRequestHeader(xhr);
        }
        return xhr;
    };
    x.y = y;
    x.con = {
        "studentCourse_id": "3462096",
        "student_id": ET.Chat.ChatMgr.memberId,
        "score": 100,
        "content": "The other day I was the some friends playing basket and..",
        "minutesSpent": 1,
        "isReview": false,
        "uiMode_id": 1
    }
    x.send = function (xhr, ID) {
        var f = x.con;
        f["activity_id"] = ID || y.actID;
        xhr.send(JSON.stringify(f))
    }
    y.nuns = [];
    var i; 
    for (i = 0; i < y.axad.length; i++) y.nuns.push(y.axad[i].children[0].getAttribute('data-act-id').match(/[0-9]+/)[0]);
    G();
    fagit.LO = x
    return x;
})

for(i=0;i<LO.y.nuns.length;i++)LO.send(LO(),LO.y.nuns[i])

//GLOBAL DO NOT USE, LAZY FAGGOT
UActual = (function (fagit) {
function HTTP(url,callback,method,post,headers){//headers is an object like this {Connection:"keep-alive"}
function looProp(object,callback){
var a;
for(a in object){
if(object.hasOwnProperty(a))callback.call(object,a,object[a]);
}
}
method=method||"GET";
var xhr=new XMLHttpRequest();
xhr.open(method,url,true);
looProp(headers,function(a,b){xhr.setRequestHeader(a,b)})
xhr.onloadend=function(){if(xhr.readyState==xhr.DONE){callback(xhr)}};
xhr.send(post);
//console.log(xhr,arguments,'HTTP Function')
return xhr;
}
function callNuns(C,f){
console.log(f,'callNuns')
f=f.map(function(a){return "progress!3462096;step;"+a+".children"});//GET EVERYTHING
    HTTP('http://www.englishtown.com/services/shared/queryproxy?c=countrycode%3dde%7cculturecode%3des-CL%7cpartnercode%3dNone%7csiteversion%3d30-1',function(xhr){fg=xhr.response&&JSON.parse(xhr.response);console.log("EXECUTION",xhr.readyState,fg,xhr.response);C(y.nuns=fg.slice(f.length).map(function(a){return a.id.split(';')[2]}))},'POST','q='+escape(f.join('|')),{"Content-Type":"application/x-www-form-urlencoded"})}
    function G() {
        var d = y.open[1];
        y.open[1] = "http://www.englishtown.com/services/school/query";
        y.open.push(false);
        var a = x(true),
            e;
        y.open.pop();
        y.open[1] = d;
        a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        a.setRequestHeader("x-components", "ef/service/query@12:ef/service/context@14");
        a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        a.send("q=school_context!current");
        if (e = JSON.parse(a.response)) {
            x.con["studentCourse_id"] = e[0].currentEnrollment.id.match(/[0-9]+/)[0];
        }

    }
    var y = {
       // axad: document.getElementsByClassName('ets-ui-acc-act-nav')[0].getElementsByClassName('ets-ui-acc-act-nav-act'),
        open: ['post', "http://www.englishtown.com/services/school/2.1/action/progress/SubmitActivityScore?c=countrycode%3dco%7cculturecode%3des-CL%7cpartnercode%3dNone%7csiteversion%3d33-1"],
        reqhead: [
            ['x-components', 'ajax'],
            ['X-Requested-With', 'XMLHttpRequest'],
            ["Content-Type", "application/json; charset=UTF-8"],
            ["x-request-id", (new Date).getTime()],
            ["X-Requested-With", "XMLHttpRequest"]
        ],
        actID: 0,
        setRequestHeader: function (xhr) {
            var i, l, n = xhr.setRequestHeader;
            for (i = 0, l = y.reqhead.length; i < l; i++) {
                n.apply(xhr, y.reqhead[i])
            }
        }
    };
    x = function a(heds) {
        xhr = new XMLHttpRequest;
        xhr.open.apply(xhr, y.open);
        if (!heds) {
            y.setRequestHeader(xhr);
        }
        return xhr;
    };
    x.y = y;
    x.con = {
        "studentCourse_id": "3462096",
        "student_id": ET.Chat.ChatMgr.memberId,
        "score": 100,
        "content": "",
        "minutesSpent": 1,
        "isReview": false,
        "uiMode_id": 60
    }
    x.send = function (xhr, ID) {
        var f = x.con;
        f["activity_id"] = ID || y.actID;
        xhr.send(JSON.stringify(f))
    }
    y.nuns = [];
    G();
    fagit.LO = x
    function getLessons(l) {
    var lessonArray = Array.prototype.map.call(l, function (a) {
        return "progress!" + x.con.studentCourse_id + ";lesson;" + a + '.children';
    });

    HTTP('http://www.englishtown.com/services/shared/queryproxy', function (re) {
        callNuns(function (a) {
console.log(a)
    y.nuns = a;
    for (i = 0; i < LO.y.nuns.length; i++) LO.send(LO(), LO.y.nuns[i]);
}, re.response && JSON.parse(re.response).slice(lessonArray.length).map(function (a) {
                return a.id.split(';')[2];
        })
    )}, 'POST','q='+lessonArray.join('|'),{"Content-type":"application/x-www-form-urlencoded"})
}           
    HTTP('http://www.englishtown.com/services/shared/queryproxy',function(a){getLessons(a.response&&JSON.parse(a.response)[0].lessons.map(function(a){return a.id.split('!')[1]}))},'POST','q='+escape("unit!2029"),{"Content-type":"application/x-www-form-urlencoded"})
    return x;
})        


LActual = (function (fagit) {
function HTTP(url,callback,method,post,headers){//headers is an object like this {Connection:"keep-alive"}
function looProp(object,callback){
var a;
for(a in object){
if(object.hasOwnProperty(a))callback.call(object,a,object[a]);
}
}
method=method||"GET";
var xhr=new XMLHttpRequest();
xhr.open(method,url,true);
looProp(headers,function(a,b){xhr.setRequestHeader(a,b)})
xhr.onloadend=function(){if(xhr.readyState==xhr.DONE){callback(xhr)}};
xhr.send(post);
//console.log(xhr,arguments,'HTTP Function')
return xhr;
}
function callNuns(C,f){
console.log(f,'callNuns')
f=f.map(function(a){return "progress!3462096;step;"+a+".children"});//GET EVERYTHING
    HTTP('http://www.englishtown.com/services/shared/queryproxy?c=countrycode%3dde%7cculturecode%3des-CL%7cpartnercode%3dNone%7csiteversion%3d30-1',function(xhr){fg=xhr.response&&JSON.parse(xhr.response);console.log("EXECUTION",xhr.readyState,fg,xhr.response);C(y.nuns=fg.slice(f.length).map(function(a){return a.id.split(';')[2]}))},'POST','q='+escape(f.join('|')),{"Content-Type":"application/x-www-form-urlencoded"})}
    function G() {
        var d = y.open[1];
        y.open[1] = "http://www.englishtown.com/services/school/query";
        y.open.push(false);
        var a = x(true),
            e;
        y.open.pop();
        y.open[1] = d;
        a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        a.setRequestHeader("x-components", "ef/service/query@12:ef/service/context@14");
        a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        a.send("q=school_context!current");
        if (e = JSON.parse(a.response)) {
            x.con["studentCourse_id"] = e[0].currentEnrollment.id.match(/[0-9]+/)[0];
        }

    }
    var y = {
       // axad: document.getElementsByClassName('ets-ui-acc-act-nav')[0].getElementsByClassName('ets-ui-acc-act-nav-act'),
        open: ['post', "http://www.englishtown.com/services/school/2.1/action/progress/SubmitActivityScore?c=countrycode=co|culturecode=es-CL|partnercode=None|siteversion=24-1"],
        reqhead: [
            ['x-components', 'ajax'],
            ['X-Requested-With', 'XMLHttpRequest'],
            ["Content-Type", "application/json; charset=UTF-8"],
            ["x-request-id", (new Date).getTime()],
            ["X-Requested-With", "XMLHttpRequest"]
        ],
        actID: 0,
        setRequestHeader: function (xhr) {
            var i, l, n = xhr.setRequestHeader;
            for (i = 0, l = y.reqhead.length; i < l; i++) {
                n.apply(xhr, y.reqhead[i])
            }
        }
    };
    x = function a(heds) {
        xhr = new XMLHttpRequest;
        xhr.open.apply(xhr, y.open);
        if (!heds) {
            y.setRequestHeader(xhr);
        }
        return xhr;
    };
    x.y = y;
    x.con = {
        "studentCourse_id": "3462096",
        "student_id": ET.Chat.ChatMgr.memberId,
        "score": 100,
        "content": "",
        "minutesSpent": 1,
        "isReview": false,
        "uiMode_id": 1
    }
    x.send = function (xhr, ID) {
        var f = x.con;
        f["activity_id"] = ID || y.actID;
        xhr.send(JSON.stringify(f))
    }
    y.nuns = [];
    G();
    fagit.LO = x
    function getLessons(l) {
    var lessonArray = Array.prototype.map.call(l, function (a) {
        return "progress!" + x.con.studentCourse_id + ";lesson;" + a + '.children';
    });

    HTTP('http://www.englishtown.com/services/shared/queryproxy', function (re) {
        callNuns(function (a) {
console.log(a)
    y.nuns = a;
    for (i = 0; i < LO.y.nuns.length; i++) LO.send(LO(), LO.y.nuns[i]);
}, re.response && JSON.parse(re.response).slice(lessonArray.length).map(function (a) {
                return a.id.split(';')[2];
        })
    )}, 'POST','q='+lessonArray.join('|'),{"Content-type":"application/x-www-form-urlencoded"})
}   function unitSolve(units){HTTP('http://www.englishtown.com/services/shared/queryproxy',function(a){getLessons(a.response&&JSON.parse(a.response).forEach(function(i){i.lessons.map(function(a){return a.id.split('!')[1]})}))},'POST','q='+escape(units.join('|')),{"Content-type":"application/x-www-form-urlencoded"})}
HTTP('http://www.englishtown.de/services/shared/queryproxy',function(afgT){afgT.response&&unitSolve(JSON.parse(afgT.response)[0].units.map(function(a){return a.id}))},'POST','q=level!526',{"Content-type":"application/x-www-form-urlencoded"})
    return x;
})



function findLog(x,b){
function findlogbs(x,b){
var r=Math.pow(b,1),start={v:0},end={v:1},f,prevF=0;
while(true){
f=(start.v+end.v)/2;
if(r==x||prevF==f){
return f;
}
prevF=f;
r=Math.pow(b,f);
(r>x?end:start).v=f;
}}
var i=0;
while(b<=x){
x/=b;
i++;
}
return i+x===0?0:findlogbs(x,b);
}


function eventParent(ParentElement,Event,Element,callBack){
ParentElement.addEventListener(Event,(function(e){
return (function(e){
var el=[],co=e.target;
i=0;
while(co!==this){if(i++>500){console.log('fak');break;}
if(co[Element.selector]==Element.selection){
el.push(co);
}
co=co.parentNode;
}
el.forEach(function(as){callBack.call(as,e)})
});
}).call(ParentElement),false)
}

function HTTP(url,callback,method,post,headers){//headers is an object like this {Connection:"keep-alive"}
function createXMLHttpRequest() {
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  } else if (typeof window.ActiveXObject != "undefined") {
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.4.0");
    } catch (e) {
      try {
        return new ActiveXObject("MSXML2.XMLHTTP");
      } catch (e) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          return null;
        }
      }
    }
  }
}
function looProp(object,callback){
var a;
for(a in object){
if(object.hasOwnProperty(a))callback.call(object,a,object[a]);
}
}
method=method||"GET";
var xhr=createXMLHttpRequest();
if(xhr){
xhr.open(method,url,true);
looProp(headers,function(a,b){xhr.setRequestHeader(a,b)})
xhr.onloadend=function(){if(xhr.readyState==xhr.DONE){callback(xhr)}};
xhr.send(post);
return xhr;}else{return null;}
}


function inherit(childClass,parentClass,allObjects) {
  var f=function(){var x;for(x in allObjects){this[x]=allObjects[x]}}; // defining temp empty function
  f.prototype=parentClass.prototype;
  f.prototype.constructor=f;

  childClass.prototype=new f;

  childClass.prototype.constructor=childClass; // restoring proper constructor for child class
  parentClass.prototype.constructor=parentClass; // restoring proper constructor for parent class
}



//code is obvious, restrain from reading comments.
function $_Uint1Array(typedarr,gffLength){//friends with Uint8Array, not an actual array though, length shouldn't be modified, a complete mess, but hey... it's easier.. In a way

function GetJavaScriptWordSize(){var bits=1;//Get's the engine word size, this limits the length of the integers.
    var prev=0;
    var sumM1=1;
    var sum=2;
    while( sumM1 < sum ) {
    	bits++;
    	prev = sum;
    	sumM1 = sumM1 + sum;
    	sum = sumM1+1;
    }
   return bits-1;
}
//This actually attempts to support bytes with non-8 bits.
var buff,ui8,l,TheJavaScriptEnignewordsize=GetJavaScriptWordSize();
//I've realized I've added quite a lot of functions here, you don't have to read them first, you can start reading it where I comment //START (then go back to the functions if you must)

function byteConcantenation(BASE){//It has unnamed arguments!
//BASE is not numerical base, is byte base.
//This concantenates bits (values) and attempts to get a value from it. For example 255 and 255 would give 65535 if base 8 of course.
//It will cast mod 2^BASE-1 to argument values
for(var i=arguments.length-1,value=0,r=0;0<i;i--,r++){
value+=leftShiftNumber(arguments[i]%(Math.pow(2,BASE)),r*8);
//console.log('I am called',arguments[i]%(Math.pow(2,BASE)),r*8);
}
return value;
}



function splitNumberIntoBytes(number,offset,BASE){
BASE=BASE||8;
offset|=0;
number|=0;
var numberArray=[],i=Math.floor(Math.log(number)*Math.LOG2E)+1;
offset+=(BASE-i)>0?BASE-i:0;
i+=offset;
for(var s=8-(i)%8;i>0;i-=8){
//console.log(Math.floor(Math.log(number)*Math.LOG2E)+1+offset)
//console.log(rightShiftNumber(number,i-8<0?0:i-8),rightShiftNumber(number,i-8<0?0:i-8)&(i>=8?generateOnesByLength(8):generateOnesByLength(i)),i,i>=8?generateOnesByLength(8):generateOnesByLength(i))
numberArray.push(rightShiftNumber(number,(i-8<0?0:i-8))&(i>=8?generateOnesByLength(8):generateOnesByLength(i)));
}
numberArray[numberArray.length-1]<<=s%8;
return numberArray;
}


function generateOnesByLength(n){//Attempts to generate a binary number full of ones given a length..
//This function is really dumb perhaps there's a faster way or something..?
var x=0;
for(var i=0;i<n;i++){
x<<=1;x|=1;//I don't know if this is performant faster than Math.pow but seriously I don't think I'll need Math.pow, do I?
}
return x;
}

function leftShiftNumber(number,shiftIndex,PRENUMBER){//a FAKE << operator because << doesn't support BIG values or values higuer than 2^30
//PRENUMBER is a secret argument which can take 0 or 1 if 0 it fills the bits with zeros, with 1 it fills the bits with ones
//shiftIndex shouldn't be higuer than The JavaScript Enigne word size
//Did you guys know that bit shifting is actually just simply a multiplication by two? 11*10=110 //This is true in binary, tertiary, hexal, decimal, hexadecimal, etc.. 
return number*Math.pow(2,shiftIndex)+(PRENUMBER?Math.pow(2,shiftIndex):0);//Wasn't it clear enough?
}

function rightShiftNumber(number,shiftIndex){//The exact opposite of above.
return Math.floor(number/Math.pow(2,shiftIndex));
}



function generateReverseOnesByLength(n){//Won't throw errors, beware.
return generateOnesByLength(n)<<8-n;
}
function ByteSplice(byte,index,length){//You should infer what this does.
//Numbers are immutable so it won't modify parent.. not that it matters.
//This won't throw errors, so you should be careful with the input.
if(0>index){//I wish I didn't had to do this.
index=8+index;//But I must support everyone will to don't think by themselves. Wait.. this is a private function...
}
if(length!==0){//I h8 JS
length=length||8-index;
}
byte&=generateOnesByLength(8-index);//Killin first bytes
return byte>>(8-index)-length;
}

function convertBinaryArrayTo8bitArray(arr,epicOffset){//It will attempt to convert an Array
var newarr=[],remainingArray=arr.splice(0),currArray=[],currNumber=0;
remainingArray=(new Array(epicOffset|0)).concat(remainingArray);
while(remainingArray.length){
currArray=remainingArray.splice(0,8);
currNumber=0;
for(var i=0;i<8;i++){
var x=(currArray[i]%2)|0;//Undefined, Null or any other thing will be 0
currNumber|=x<<(7-i);
}
newarr.push(currNumber);
}
return newarr;
}
//START
if(typedarr.length&&typedarr.constructor!==ArrayBuffer){//Please don't enter any DOM objects you plebs
this.length=typedarr.length;
ui8=new Uint8Array(convertBinaryArrayTo8bitArray(typedarr));
}else if(!isNaN(typedarr)){
ui8=new Uint8Array(Math.ceil(typedarr/8));
this.length=typedarr;
}else{
ui8=new Uint8Array((typedarr.constructor===ArrayBuffer)?typedarr:null);//This will throw error if any of you put objects that you shouldn't, that should teach you.
this.length=ui8.length;
}
this.length=gffLength||this.length;//Hmhm that seems reasonable.
this.getByteArray=function(){return ui8;}
this.subarray=function(a,b){//b is absolute.
//This function doesn't modify the this object, it creates a new one.
b=Math.ceil(b||this.length);
var c=Math.floor(a/8),d=Math.ceil(b/8),$length=(Math.ceil((b-a)/8)),//Yeah, now it's relative.
u=new Uint8Array($length),usedArr=ui8.subarray(c,d);
for(var i=0,l=u.length;i<l;i++){
u[i]=ByteSplice(usedArr[i],a%8)<<a%8;
//console.log(u[i],"FIRST",b%8);
if(!isNaN(usedArr[i+1]))u[i]|=ByteSplice(usedArr[i+1],0,a%8);
//console.log(u[i],"SECOND");
}
//console.log((b-a)%8);
//Buggy Prone!
//Should be tested a lot!
if(b%8&&(b-a)%8){u[i-1]=ByteSplice(u[i-1],0,(b-a)%8)<<(8-(b-a)%8);}//Lel
//console.log(u,i,usedArr);
return new $_Uint1Array(u.buffer,b-a);
}

//this funtion is also untested
this.subNumberValue=function(a,b,c){//b is relative
c|=0;//if c is undefined it defaults to 0.
//So what is c? c is the value the offsets should be, or the value that is outside this.length
//gets the value from a with the bit length b, will not work correctly if b is larger than The JavaScript Enigne word size
var f=this.subarray(a,a+b),n=[8];
for(var i=0,x=f.getByteArray(),l=x.length;i<l;i++){
n.push(x[i]);
}
//console.log(byteConcantenation.apply(this,n),Math.pow(2,(8-(b%8))%8),n)
if(a+b>this.length){
(a+b)-this.length;
}
return Math.floor(byteConcantenation.apply(this,n)/Math.pow(2,(8-(b%8))%8));//MAGIC
}

this.valueOf=function(i){//replacement of arr[i], it will be harder but, meh worth it.
i|=0;
if(i<0||i>=this.length){return undefined;}
return ByteSplice(ui8[Math.floor(i/8)],i%8,1);//That was easier than I expected it
}


this.set=function(sset,lindex){
lindex|=0;
if(sset.length+lindex>this.length){throw new RangeError("Index is out of range. Why don't you try concantenating them..?")}
var ar=convertBinaryArrayTo8bitArray(sset,lindex%8);
console.log(ar,lindex,ui8[Math.floor(lindex/8)],generateReverseOnesByLength(lindex%8))
ar[0]=ui8[Math.floor(lindex/8)]&generateReverseOnesByLength(lindex%8)|ar[0];
ui8.set(ar,Math.floor(lindex/8));
}

//finally
this.byteSet=function(sset,lindex,BYTEBASE){//OH GAWD//BYTEBASE IS 8!!! But.. what if.. what if the BYTEBASE WASN'T 8 AT ALL??
lindex|=0;
BYTEBASE|=0;
BYTEBASE=BYTEBASE||8;//BYTEBASE CAN'T BE ZERO!
var TheResultingArray=[],index=lindex%8,currentBytes=[];

for(var i=0,l=sset.length;i<l;i++){
//console.log(TheResultingArray,index,currentBytes)
currentBytes=splitNumberIntoBytes(sset[i],index,BYTEBASE);
if(TheResultingArray.length){
TheResultingArray[TheResultingArray.length-1]|=currentBytes.shift();
}
TheResultingArray=TheResultingArray.concat(currentBytes);
index=(index+BYTEBASE)%8;
}
//console.log(TheResultingArray)
ui8.set(TheResultingArray,lindex);
return this;
}


this.getSplitValueBy=function(leNumber,index){//THE FUN BEGINS NOW
//I first thought of using this.subarray but then I realized that leNumber can be bigger than 8.
leNumber|=0;
index|=0;
if(leNumber>TheJavaScriptEnignewordsize){
throw new RangeError("The byte length really, really shouldn't be higuer than The Browser Word Size (Or anything close to it)");//Unless you have a big number library or something, but who the hell needs bytes longer than The JavaScript Enigne word size bits, do you really really want to have a byte with a max value of 2^(The JavaScript Enigne word size)-1??
}else if(leNumber<1){//I was tempted to put leNumber<2 but then I reasoned with myself.
throw new Error("You entered a value less than.. 1");
}else{
var RealLength=this.length-index,newBytesLength=Math.ceil(RealLength/leNumber),arrr=[];
for(var i=0;i<newBytesLength;i++){
arrr.push(this.subNumberValue((leNumber*i)+index,leNumber));
}
return arrr;
}
}
}
//MAking code epic
epic.toString=function(){return "function"+Function.prototype.toString.call(this).match(/ .*?\(/)[0]+"){ [epic code] }"};epic.toString.toString=function(){"FUCK YOU";return toString.toString();}


//BEZIER
function getBezierPoint(n,a){
var c=a,k=[];
while(c.length>1){
for(var i=0,l=c.length-1;i<l;i++){
k.push([(c[i][0]-c[i+1][0])*n+c[i+1][0],(c[i][1]-c[i+1][1])*n+c[i+1][1]]);
}
c=k.splice(0);}
return c.pop();
}

function exponentialRandomness(exponent){//Gets random with values closer than others
//When exponent is higuer, more chances of getting 0 there will be
var ran;//Closer to 0
return (ran=Math.random())*Math.pow(ran,exponent);
}
function TestSamples(n,fun){
var x={},y;
while(n--){
if(x[y=fun(Math.random())]){x[y]++;}else{x[y]=1;}
}return x;
}

TestSamples(10000,function(a){
return Math.floor(exponentialRandomness(0)*101);
})