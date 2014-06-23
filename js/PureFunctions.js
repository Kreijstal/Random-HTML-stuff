 //Welcome!
//Here you can find pure functions, where functions don't interact with the world. But they may change the argument. Or use other functions, however I'm sure these functions will not use the DOM
//Beware, the comments are longer than the code.
//>inb4 reinventing the wheel
//Oh also...
//I lost this file and got it back corrupt, I had to re edit, copy paste, delete entire blocks of code that came out of nowhere, it seems it's working fine, but it may be very bug prone
//blame c9.io at least there is a revision history, god dammit

function UnicodeToUTF8Array(UnicodeValue) {//Only 1 unicode value!!!!!! //Char Number Range as called from the RFC
    //Converts Unicode number or character.toCharCodeAt() to an "UTF8 array"
    //After this has been done, converting to UTF-8 is just trivial, just call UTF8ArrayToUTF8
    //JavaScript cannot "convert" strings to UTF-8 so we're just using byte arrays to save the information in case we need to save it to a file
    /*Q:So why converting from Unicode to UTF-8 takes two functions? How is that a good Idea?
      A:Well, I just thought that it could be really nice for debugging purposes, also knowing what the hell the String is converted to before being converted to*/
    var thearr = [];
    if (UnicodeValue > 0x7FFFFFFF) {
        throw new Error("Value cannot be greater than " + 0x7FFFFFFF);
        /*You should remove this, if you don't like errors much, it will be annoying to enclose everything
  with try{}, make something like:*/
        //return [];//then you check if the array is empty, yeah, that will be faster..
        //Or you can simply.. don't change this function but check whatever parameter you're going to call this function with
        //Stop reading comments, The code is obvious
    }
    if ((UnicodeValue >>> 7) > 0) { //For some reason after 0x7FFFFFFF if you used the '>>' operator it would convert it to a negative number but with '>>>' operator it doesn't work that way
        while (UnicodeValue) { //I also made my own '>>>' operator which is "parseInt(Unicode.toString(2).substring(7),2)" which works after 0xFFFFFFFF but stops working around 0xFFFFFFFFFFFFF and is more likely hell slowler
            thearr.push(UnicodeValue & 63); //Gotta love parseInt(int,2) helped me making this function. Aside UTF-8 wikipedia article
            UnicodeValue = UnicodeValue >>> 6; //And (int).toString(2) too
        }
    } else {
        thearr.push(UnicodeValue)
    }
    return thearr;//This is the char number range NOT the UTF-8 use UTF8ArrayToUTF8 to get the UTF8 byte array..
}


//Changes Argument

function UTF8ArrayToUTF8(UTF8Array) { //Only 1 character
    //Alright, so basically we convert the array from the previous function to UTF8 byte array
    //Obvious code is obvious, even this uglified&minified should be easy to understand
    var leng = UTF8Array.length, //Pros:more performance; Cons:more memory usage. Not that anyone cares or something. Or, the fact that I need the original length (Char Number Range)
        z,a,
        utf8bytearray = []; //all the bytes will be here
    if (leng && leng < 2) { //basically leng===1
        if ((-1 < UTF8Array[0]) && (UTF8Array[0] < 126)) { //Too paranoic?
            return UTF8Array; //Do nothing, only happens with ASCII values

        } else { //Too restrictive?
            throw new Error("Incorrect value, the array provided doesn't have a correct UTF8 value");
        }
    } else if (leng < 6) { //On another imaginary format it can be longer than 6, but this is UTF-8 (At least the old version which accepted 6 bytes..)
        a = (252 << 6 - leng) & 255; //I don't even remember what I'm doing here, and I just wrote it
        utf8bytearray.push(a | UTF8Array.pop());
        while ((z = UTF8Array.pop()) !== undefined) {
            if (z > 63) { //obvious code is... not so obvious.. try anyway
                throw new Error("Incorrect value, the array provided doesn't have a correct UTF8 value");
            }
            utf8bytearray.push(128 | z);
        }
        return utf8bytearray; //Done!
    } else {
        throw new Error("UTF-8 Array cannot have more than 6 values");
    }
}

function stringToUint8utf8array(string){//Fuck old browsers
function c(x){var i,a=[];for(i=0;i<x.length;i++)a=a.concat(UTF8ArrayToUTF8(UnicodeToUTF8Array(x.charCodeAt(i))));return a};
var a=c(string),ui8arr=new Uint8Array(a.length);
for(var i=0,l=a.length;i<l;i++){
ui8arr[i]=a[i];
}
return ui8arr;
}

function addOffsetToEachIndexOfNumericArray(arr,numberToAdd){//Brilliant name
for(var i=0,l=arr.length;i<l;i++){
arr[i]+=numberToAdd;
}
return arr;
}
function addArrayKeyToEachIndexOfNumericArray(arr,arrayToAdd){//Brilliant name
for(var i=0,j=0,l=arr.length;i<l;i++,j++){
if(j==arrayToAdd.length){j=0;}
arr[i]+=arrayToAdd[j];
}
return arr;
}

function xorArraysKeyToEachIndexOfNumericArray(arr/*, more than 1 array*/){//Brilliant name

for(var i=0,l=arr.length;i<l;i++){
for(var x=1,ll=arguments.length;x<ll;x++){
arr[i]^=arguments[x][i%arguments[x].length];
}
}
return arr;
}
//uzeful function stringToArrayUnicode(str){for(var i=0,l=str.length,n=[];i<l;i++)n.push(str.charCodeAt(i));return n;}
//useful String.fromCharCode.apply(null,addOffsetToEachIndexOfNumericArray(stringToArrayUnicode("we"),n));
//it never ends, never

function UTF8toUnicode(ByTeS) { //Single Character Version
    //UTF8 byte array to Unicode, uhh character.
    //This doesn't check if the UTF-8 is correct or valid so you can't directly put UTF-8 strings here (unless the UTF-8 is perfect which is unlikely) if you do there will be some unexpected behaviour
    var aUnicode = [],
        UnIcOdE = function (x, leng) { //I don't even remember what I'm doing here, but looks important.. It's probably the most important function on this function.
            var i, n = 0;
            x[0] = x[0] << (6 * (leng - 1));
            for (i = 1; i < leng; i++) {
                x[i] = x[i] << (6 * (leng - (i + 1)));
                for (i = 0; i < leng; i++) {
                    n += x[i];
                }
            }
            return n;

        }, a, i, leng = ByTeS.length; //Im So CrAzY
    if (leng === 1) {
        if (0 > ByTeS[0] || ByTeS[0] > 127) {
            return null;
            //throw new Error("Those bytes aren't valid");//damn I'm sleepy
            //Can't throw error, it may be very possible
        } else {
            return ByTeS[0]; //Probably an ASCII value, the most common type
        }
    } else if (leng <= 6) {
        a = (252 << 6 - leng) & 255;
        aUnicode.push(a ^ ByTeS[0]);
        for (i = 1; i < leng; i++) {
            aUnicode.push(128 ^ ByTeS[i]);
        }
        return UnIcOdE(aUnicode, leng);
    } else {
        throw new Error("not longer than 6 or shorter than 1");
    }
}

//now this is one of the hardest functions (to write, understand, etc)
//POSSIBLY NOT PURE, it calls a pure function but does that makes it inpure?
//Requires:UTF8toUnicode()

function BinaryUTF8toUnicode(bytesArray) {
    //To UCS
    //splits characters so UTF8toUnicode can convert them without trouble, however it also takes into account if UTF-8 is valid and stuff
    //needs an option to disallow overlong encodings
    var leng = bytesArray.length,
        i, a = [], //I don't even have relevant or interesting variable names for these..
        e, c, x = function (x) {
            //Gives the exponent.. in base 2, by repeatedly diving in 2 
            //Precision problems when using Math.log
            var b = ~~x, //It's kinda funny '~~' acts as Math.floor()
                i;
            for (i = -1; b; i++) {
                b /= 2;
                b = ~~b;
            }
            return i;
        }, k, previousErrors = false, //Finally! a descriptive variable!
        g, errorArrayBytes = [],
        s; //Another! Amazing!
    First: for (i = 0; i < leng; i++) { //OOOOHH I had to use labels for reasons...
        if ((e = bytesArray[i]) > 127) {
            c = []; //small variables take less time typing
            for (k = 6; k > 1; k--) { //is this even lazy? Also, you shouldn't edit it to (k=1; k < 7; k++) since it needs to end with k being one.
                if (((252 << 6 - k) & 255) <= e) { //yay, overlong encodings rulez
                    if (previousErrors) {
                        i--;
                        console.warn("Unknown character bytes " + errorArrayBytes);
                        errorArrayBytes[-1] = "Error"; //EasterEgg shh
                        a.push(errorArrayBytes); //BUT WHY?!!?!
                        previousErrors = false; //obvious code is obvious
                        errorArrayBytes = [];
                        continue First; //LABELS! DO YOU EVEN KNOW THEM?
                    }
                    c.push(e);
                    break;
                }
            }
            if (k === 1) {
                if (((252 << 6 - k) & 255) <= e) { //WUT!!                                 
                    //throw new Error("OH SHIT ERROR");//Too descriptive
                    previousErrors = true; //is this variable even necessary? I could check if there's something on errorArrayBytes
                    errorArrayBytes.push(e); //gotta chek it first
                }
            } else { //oh god it's happening
                g = i;


                for (s = k - 1; s > 0; s--) {

                    if ((e = bytesArray[++i]) > 127 && 192 > e) { //accpeting overlong encodings.. again
                        c.push(e);
                    } else {
                        i = g;
                        continue First; //gotta love them labels
                    }
                }


                console.log(g, k, e);
                a.push(UTF8toUnicode(c)); //doesn't sounds reasonable?
            }
        } else {
            a.push(UTF8toUnicode([e]));
        }
    }
    if (previousErrors) { //Yes, I copypasted, should I convert this to a function instead?
        console.warn("Unknown character bytes " + errorArrayBytes);
        errorArrayBytes[-1] = ("Error"); //Okay, not easter Egg this tells if there was an error, and you don't have to check if you don't want to, it's quite clever, gotta love JavaScript
        a.push(errorArrayBytes); //BUT WHY?!!?!
        previousErrors = false; //obvious code is obvious
        errorArrayBytes = []; //what a strange -1 property for an array?
    }
    return a;
}

//Uzeful: function c(x){var i,a=[];for(i=0;i<x.length;i++)a=a.concat(UTF8ArrayToUTF8(UnicodeToUTF8Array(x.charCodeAt(i))));return a}

function giveFirstZeroIndex(y) {
    //This... gives the index of the first zero.. in binary.
    //I planed to use this function on BinaryUTF8toUnicode() but seems using < and > operators was a better idea, I'm still putting this function if ever turns out useful someday.

    var x = function (x) {
        //Gives the exponent.. in base 2, by repeatedly diving in 2 
        //Precision problems when using Math.log
        var b = ~~x, //It's kinda funny '~~' acts as Math.floor()
            i;
        for (i = -1; b; i++) {
            b /= 2;
            b = ~~b;
        }
        return i;
    }, l = x(y),
        z = l;
    while (l + 1) {
        z = y >> l--; //no idea what I'm doing here
        if (!(z & 1)) { //checks if the byte is 1
            return ++l; //You could say it checks if z is odd or even
        } else if (!(~l)) {
            return (l = -1); //this is probably pointless
        }
    }
}


function FindDistanceBetween2Points(x1,y1,x2,y2){//yay math!
    var x=x1-x2,y=y1-y2,h2=(x*x)+(y*y);//am I reivnenting the wheel, or there is a function that already does it?
    return Math.sqrt(h2);
}

function getAngleFromP1ToP2(x1,y1,x2,y2){//google doesn't even give me the functions!
//The angle from the "origin"
    var x=x2-x1,y=y2-y1;//reinventing the wheel is mandatory
    return Math.atan2(y,x);
}


function PolarCoordinatesToCartesian(Angle, Distance) {
    var y = Math.sin(Angle) * Distance,
        x = Math.cos(Angle) * Distance;
    return {
        x: x,
        y: y
    };
}

function addTrailingZeros(int, length) { //int should be a string
    var i;
    int = String(int);
    for (i = int.length; i < length; i++) {
        int = "0" + int;
    }
    return int;
}

/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */

function str2rstr_utf8(input) { //this function isn't actually mine, however it seems to convert a string to UTF-8 to a string... so the bytes are there, but you can't read it..
    var output = "";
    var i = -1;
    var x, y;

    while (++i < input.length) {
        /* Decode utf-16 surrogate pairs */
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++;
        }

        /* Encode output as utf-8 */
        if (x <= 0x7F)
            output += String.fromCharCode(x);
        else if (x <= 0x7FF)
            output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F),
                0x80 | (x & 0x3F));
        else if (x <= 0xFFFF)
            output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                0x80 | ((x >>> 6) & 0x3F),
                0x80 | (x & 0x3F));
        else if (x <= 0x1FFFFF)
            output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                0x80 | ((x >>> 12) & 0x3F),
                0x80 | ((x >>> 6) & 0x3F),
                0x80 | (x & 0x3F));
    }
    return output;
}


function stringcharcodetoarray(x) {
    var a = [],
        l;
    for (i = 0, l = x.length; i < l; i++) {
        a.push(strrr.charCodeAt(i))
    };
    return a
} //guess what it does!
//the opposite can be done with String.fromCharCode.apply(String,array);


  
function hsvToRgb(h, s, v) {
    //A better, neater hsvToRgb.
    var r, g, b,f;
    var i = Math.floor((f=h * 6));
    f -= i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
    case 0:
        r = v, g = t, b = p;
        break;
    case 1:
        r = q, g = v, b = p;
        break;
    case 2:
        r = p, g = v, b = t;
        break;
    case 3:
        r = p, g = q, b = v;
        break;
    case 4:
        r = t, g = p, b = v;
        break;
    case 5:
        r = v, g = p, b = q;
        break;
    }

    return [r * 255, g * 255, b * 255];
}

function permutate(array, callback) {
    // Do the actual permuation work on array[], starting at index
    function p(array, index, callback) {
        // Swap elements i1 and i2 in array a[]
        function swap(a, i1, i2) {
            var t = a[i1];
            a[i1] = a[i2];
            a[i2] = t;
        }

        if (index == array.length - 1) {
            callback(array);
            return 1;
        } else {
            var count = p(array, index + 1, callback);
            for (var i = index + 1; i < array.length; i++) {
                swap(array, i, index);
                count += p(array, index + 1, callback);
                swap(array, i, index);
            }
            return count;
        }
    }
    if (!array || array.length === 0) {
        return 0;
    }
    return p(array, 0, callback);
}
//STUPID BULLSHIT
/*function ipermutate(a,c){//The old permutation function was recursive, and NOT made by me, because at the time I was stupid and dumb, so I copy pasted from somewhere else, however, seeing how it takes a REALLY long time permutating an array with 10 items, I decided I would make my own, at first it was hard, also the algorithm is completely different, but it's faster, iterative, one downside would be, that the permutations are.. disorganized, somehow, but the good thing is.. that is fast
var x,y,d;
y=a.length-1;
while(y--){
d=a[y];
a[y]=a[y+1];
a[y+1]=d;
x=a.length;
while(x--){
a.unshift(a.pop());
c(a);
}
}
}*/
function ipermutations(a,c){//now this is real
var n=a.length;
var stack=[],prestack=[];//iterative ftw
for(var i=0,ii;i<n;i++){
stack.push(n);
}
c(a)
for(i=0;i<stack.length;i++){
ii=stack[i];
a.splice(n-ii,0,a.pop());
//TOO SLOW
/*
if(ii==stack[i+1]){
//c(a);
}
if(ii==2){continue;}
prestack=[i+1,0];
while(--ii){
prestack.push(stack[i]-1)
}
Array.prototype.splice.apply(stack,prestack)*/
if(ii==stack[i+1]){
c(a);
prestack=[i+1,0];
if(ii==2){continue;}
while(--ii){
prestack.push(stack[i]-1);
}
Array.prototype.splice.apply(stack,prestack);
}
}
return stack.length;
}

//Pick functicon, it picks
//the callback gives indexes of the arrays so you can do whatever you want with them.
function CombinationPick(NumbOfSelects,Items,callbak,singlePick){
var combs=[];
if(singlePick&&NumbOfSelects>Items){NumbOfSelects=Items}
for(var i=0;i<NumbOfSelects;i++){
combs[i]=singlePick?NumbOfSelects-i-1:0;
}
var r=0,c,t=combs.length-1;
callbak(combs.slice());
do{
//NEXT NUMB PROCEDURE
//Big endian
c=++combs[r];
if(c&&(c%Items===0)||(singlePick&&(c+r)%Items===0)){
r++;
continue;
}
if(r){
while(r){r--;combs[r]=singlePick?++c:c}
}
callbak(combs.slice())
}while((combs[t]+1)%Items&&(!(singlePick&&(!((combs[t]+NumbOfSelects)%Items)))));
return combs;
}

//let your nightmare begin here
function getHTMLTag(a) {
    if (a === '') {
        return null;
    }
    var stringRemaining = a,
        b, n, d, f, k, g, tag, j = -1,
        v = [],
        A, ii = 0,
        use;
    while (~(b = stringRemaining.indexOf('<'))) {
//console.log(ii)

        if (ii++ > 90) {
            return 'u gay';
        } //remove or change this limit LOL
        d = [];
        d.push(stringRemaining.substr(b, b + 1));
        f = stringRemaining.substr(b + 1);
        v.push(k = []);
        j++;
        use = '';
        if (use += stringRemaining.substr(0, b)) {
            k.push('#text', use, null);
            stringRemaining = stringRemaining.substr(b);
            continue;
        }
        g = getStringIndexOfIgnoringQuoteMarks(f, '>');
        if (~g) {
            d.push(y = f.substr(0, g + 1));
            k.push((p = getETN(d[1])) ? p : '#text');
console.log(k[0]);
            if (k[0] === "#text") {
                stringRemaining = f.substr(g + 1);
                k.push(d.join(''), null);
                continue;
            } else if (k[0] === "!--") {
                stringRemaining = f.substr(f.indexOf('-->') + 3);
                k.push(d.join(''), null);
                continue;
            }
            stringRemaining = f.substr(g + 1);
            if (f.charAt(g - 1) === '/') { //oh noes
                k.push(null, d[1].match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g));
                stringRemaining = f.substr(g + 1);
                continue;
            } else {
                A = getLastTag(stringRemaining, k[0]);
//console.log(A)
                A.start = A.start === -1 ? Infinity : A.start;
                //k.push(getHTMLTag(stringRemaining.substr(0, A.start)));
k.push(stringRemaining.substr(0, A.start));
            }
if(k[0]==='div'){console.log(k,v,getLastTag(stringRemaining, k[0]),JSON.stringify(stringRemaining))}
            k.push(d[1].match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g)) //are u even implying this regex doesn't work
            A.end = A.end === -1 ? Infinity : A.end;
            stringRemaining = stringRemaining.substr(A.end);
        } else {
            k[j] += f;
            break;
        }
    }
//console.log("b",b)
    if (stringRemaining) {
        v.push(['#text', stringRemaining, null])
    }
    return v;
}


function getNearestIndex(str) {
    var a=Array.prototype.slice.call(arguments,1),b=[],d={},c;
    a.forEach(function(a){var e=str.indexOf(a);~e&&b.push(e)&&(d[e]=a)})     //replace str.indexOf by getStringIndexOfIgnoringQuoteMarks
    c=Math.min.apply(void 0,b);
    return c!==Infinity?{i:c,t:d[c]}:{i:-1};
}

function getLastTag(string, tag) {
  var s = string,
    a, i = 0,
    ini = '<' + tag,
    fi = '</' + tag,
    il, inl = ini.length,
    con = 0,
    p, TAGC = 0;
  while (true) {
//console.log(con,TAGC);
    a = getNearestIndex(s, ini, fi);
    if (~a.i) {
      if (a.t.substr(0, 2) === "</") {
        con += (p = s.indexOf(fi) + fi.length + 1);
//console.log(con,a,s)
        s = s.substr(p-1);
        if (--TAGC === -1) {
          return {
            start: con - fi.length-1,
            end: getStringIndexOfIgnoringQuoteMarks(s, '>') + con
          };
        }
      } else {
        il = inl + a.i;
        s = s.substr(con+=(getStringIndexOfIgnoringQuoteMarks(s.substr(il), '>'))+ il + 1);
        TAGC++;
//console.log(con,s)
//        con += il;
      }
    } else {
      return {
        start: -1,
        end: -1
      };
    }
  }
}

function getETN(a){//Element Tag Name
//Element must not have initial '<'
  function getNI(str) {
    var a=Array.prototype.slice.call(arguments,1),b=[],d={},c;
    a.forEach(function(a){var e=getStringIndexOfIgnoringQuoteMarks(str,a);~e&&b.push(e)&&(d[e]=a)})     //replace str.indexOf by getStringIndexOfIgnoringQuoteMarks
    c=Math.min.apply(void 0,b);
    return c!==Infinity?{i:c,t:d[c]}:{i:-1};
}
var b=getNI(a,' ','>');
return a.substr(0,b.i);
}

function getStringIndexOfIgnoringQuoteMarks(string, indexof) { //best function in the universe, ever
    //eureka motherfuckers
    //Well. is not really the function it is what the function does.
    //What this functions does? Gets the index of something... that isn't enclosed with quotation marks
    var a, b = [],
        s = string,
        h = 0,
        f = 0,
        x; //need to edit shit
    while (true) {
        a = [s.indexOf('"'), s.indexOf(indexof), s.indexOf('\'')]; //All the indexes are stored in a array

        a.forEach(function (a) {
            if (~a) {
                b.push(a)
            }
        }); //Push the values in another array except if the value is -1 the values in another array except if b);//Get the nearest the values in another array except if the value is -1 
        x = Math.min.apply(Math, b); //Get the nearest character to the start either ',"" or indexof
//console.log(s,x,f,h,string.substr(h+x,indexof.length))
        b = [];
        if (x === Infinity) { //Math.min returns infinite when there are no parameters at all, meaning it didn't found what it was looking for..
            return -1;
        }
        h += f;
        if (s === "") {
            return -1;
        }
        if (string.substr(h+x,indexof.length) === indexof) {
            return h + x;
        } else {
            s = s.substring(f = s.substring(x + 1).indexOf(s.charAt(x)) + 1 + (x + 1));
        }
    }
}


function ASCIIToEncodedBatch(str){
return str.replace(/%/g,'%%').replace(/\^/g,'^^').replace(/[&|<>"'`=\\\/,;\(!\)0-9]/g,function(a){return '^'+a;})
}

function makeElem(elemName,attribs){//atribs must be an Object
var e=document.createElement(elemName);
for(var a in attribs){
if(attribs.hasOwnProperty(a)){
e.setAttribute(a,attribs[a]);
}
}
return e;
}

function GreatestDivisor(n){
if(!(n%2)){return n/2;}else{var p=1;
while((p+=2)<n/2){
if(!(n%p)){return n/p}
}
return n;
}
}

function getDivisors(n){
var lel=[];
if(!(n%2)){lel.push(n/2,2);}
var p=1;
lel.push(p);
while((p+=2)<n/2){
if(!(n%p)){lel.push(p,n/p);}
}
lel.push(n);
lel.sort(function(a,b){return a===b?0:a>b?1:-1;})
return lel;
}

function HTTP(url,callback,method,post,headers){ //headers is an object like this {Connection:"keep-alive"}
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


function inherit(childClass,parentClass,allObjects) {
  var f=function(){var x;for(x in allObjects){this[x]=allObjects[x]}}; // defining temp empty function
  f.prototype=parentClass.prototype;
  f.prototype.constructor=f;

  childClass.prototype=new f;

  childClass.prototype.constructor=childClass; // restoring proper constructor for child class
  parentClass.prototype.constructor=parentClass; // restoring proper constructor for parent class
}

//I knew you were going to love this
//This function is what gave me the idea of the bitset function
function toBase64(uint8array){//of bits, each value may not have more than 255 bits... //a normal "array" should work fine too..
//From 0x29 to 0x5a plus from 0x61 to 0x7A AND from 0x30 to 0x39
//Will not report errors if an array index has a value bigger than 255.. it will likely fail.
var a=[],i,output=[];
for(i=0x41;i<=0x5a;i++){//A-Z
a.push(String.fromCharCode(i));
}
for(i=0x61;i<=0x7A;i++){//a-z
a.push(String.fromCharCode(i));
}
for(i=0x30;i<=0x39;i++){//0-9
a.push(String.fromCharCode(i));
}
a.push('+','/');

//function inside functions are dumb so why don't put the both functions inside an anonymous function..?
function generateOnesByLength(n){//Attempts to generate a binary number full of ones given a length..
//This function original was inside the paf function, nested functions are retarded so I put that function inside the parent function now they don't redefine each other that much.
//They are still on a parent function so it's not so.. efficient as you would expect
var x=0;
for(var i=0;i<n;i++){
x<<=1;x|=1;//I don't know if this is performant faster than Math.pow but seriously I don't think I'll need Math.pow, do I?
}
return x;
}
function paf(_offset,_offsetlength,_number){//I don't have any name for this function at ALL, but I will explain what it doess, it takes an offset, a number and returns the base64 number and the offset of the next number.
//the next function will be used to extract the offset of the number..
var a=6-_offsetlength,b=8-a;//Oh god, 8 is HARDCODED! Because 8 is the number of bits in a byte!!!
//And 6 is the mini-byte used by wikipedia base64 article... at least on 2013.
//I imagine this code being read in 2432 or something, that probably won't happen..
return [_number&generateOnesByLength(b),b,(_offset<<a)|(_number>>b)];//offset & offsetlength & number 
}
var offset=0,offsetLength=0,x;
for(var i=0,l=uint8array.length;i<l;i++){
if(offsetLength==6){//if offsetlength is 6 that means that a whole offset is occupying the space of a byte, can you believe it.
offsetLength=0;
output.push(a[offset]);
offset=0;
i--;
continue;
}
x=paf(offset,offsetLength,uint8array[i]);
offset=x[0];
offsetLength=x[1];
output.push(a[x[2]]);
}
if(offsetLength){
if(offsetLength==6){
output.push(a[offset]);
}else{
var y=(6-offsetLength)/2;
x=paf(offset,offsetLength,0);
offset=x[0];
output.push(a[x[2]]);
switch (y){
case 2:output.push('=');//This thingy right here, you know.. the offsets also, no break statement;
case 1:output.push('=');break;
}
}}
return output.join('');//You can change it so the result is an array instead!!!!
}


function numberToLatinPeriodicElementName(n){
var pSymbols=['n',"u",'b','t','q','p','h','s','o','e'],
names=["nil","un","bi","tri","quad","pent","hex","sept",'oct','enn'],v=[],x=n,y=[];
while(x){
v.push(x%10);
x=Math.floor(x/10);
}
var first=v.shift(),f;
f=names[first]+"ium";
if(first==2||first==3){//Not hardcoding would waste valuable resources
f=names[first]+"um";
}
return {str:v.map(function(a){y.push(pSymbols[a]);
return names[a];
}).reverse().join('')+f,symbol:y.reverse().join('')+pSymbols[first]};
}

//OMFG the previous HTML parser was fucking horrible!
//With the help of IRC pony friends I managed to make it.. better,
function TokenizeHTML(string){
var state=0,firststatechars=['<!','</','<'],endingTag=false,returnObject=[],ret='',c='',d,ii,ll,tagname='';
//sorry for uncommented shit, I don't even know what Im'd doing
//state 0 is outside tag, 1 is inside a normal tag
//ret,c,d,ii,ll have various uses dependent on the state and loop, so I can't really know what each one does, they're like counters and state keepers
//ret usually works as adding the text outside the tags
function ifret(){
if(ret){
returnObject.push({Type:"text",Content:ret});
ret='';
}
}
//this is a lot faster than creating a character array;
function isUpperCharacterSet(c){return c.charCodeAt()>=0x41&&c.charCodeAt()<=0x5a;}
function isLowerCharacterSet(c){return c.charCodeAt()>=0x61&&c.charCodeAt()<=0x7a;}
var whitespaceCodePoints=[0,0x20,0xA0,0x2f/*FOR SCIENCE*/];//the / character as a whitespace maay be helpful in occasions, whatever
function isWhitespace(c){
var carh=c.charCodeAt();
for(var i=0,l=whitespaceCodePoints.length;i<l;i++){

if(whitespaceCodePoints[i]==carh){return true;}
}
return carh>=0x9&&carh<=0xd;
}
function submittag(content,state){
if(state==1){
returnObject.push({Type:"WhiteSpace",Content:content});
}else if(state==2){returnObject.push({Type:"attributeName",Content:content});}}
MAINLOOP:for(var i=0,l=string.length;i<l;i++){
if(state==0){
c=string.substr(i,2);
for(ii=0,ll=firststatechars.length;ii<ll;ii++){
//console.log(string[i],c,ret);
if(c.indexOf(firststatechars[ii])==0){
if(ii==0){
if(string.substr(i+2,2)=="--"){
d=string.substr(i+2).indexOf('-->');
c=d!=-1?string.substr(i,d+5):string.substr(i);
ifret();
returnObject.push({Type:"comment",Content:c});
//console.log("Comment",c,state);
i=i+c.length-1;
c='';
continue MAINLOOP;
}else{
state=3;
i++;
c='';
ifret();
returnObject.push({Type:"startTag",Content:"<!"});
}
} else if(ii==2||ii==1){
if(ii==1){i++;endingTag=true;};
if(isUpperCharacterSet(string.charAt(i+1))||isLowerCharacterSet(string.charAt(i+1))){
ifret();
state=1;
c='';
if(ii==1){returnObject.push({Type:"startTag",Content:"</"});continue MAINLOOP;}
returnObject.push({Type:"startTag",Content:"<"});
continue MAINLOOP;
}else{
 
ret+=string.charAt(i);
//console.log("RET1",ret)
continue MAINLOOP;
}
};
 
break;
}
}
 
ret+=string.charAt(i);
//console.log("RET2",ret)
}else if(state==1){
//console.log("RET",ret);
d=string.charAt(i);
//console.log(d);
if(!tagname){
//console.log(c.charCodeAt())
if(isWhitespace(d)||d=='>'){
returnObject.push({Type:"tagName",Content:c});
tagname=c;i--;
c='';ii=0;ll=0;
}else{c+=d;}
}else{
if(d=='/'&&string.charAt(i+1)=='>'){
if(ii==1||ii==2){
submittag(c,ii);c='';
}
endingTag=true;
ii=3;
continue;
}
if(isWhitespace(d)){
if(ii==2){
submittag(c,ii);c='';
}
c+=d;
ii=1;
continue;
}
if(ii==1){
submittag(c,ii);c='';
}
 
if(d=='>'){
//console.log
if(ii==2){
submittag(c,ii);c='';
}
state=0;
c='';
returnObject.push({Type:"endTag",Content:ii==3?"/>":">"});
//console.log("TAGNAME",tagname,endingTag,ii)
if((tagname=='script'||tagname=='style')&&!endingTag){
i++;
returnObject.push({Type:"verbatimText",Content:string.substr(i,state=string.substr(i).indexOf("</"+tagname))});//saving mem
i+=state-1;
state=0;
}
endingTag=false;
tagname='';
continue;
}
 
if(d=="="){
if(ii==2){
submittag(c,ii);c='';
}
state=2;
ii=0;
returnObject.push({Type:"setter",Content:"="});
continue;
}
ii=2;
c+=d;
}
}else if(state==2){
d=string.charAt(i);
if((isWhitespace(d)||d=='>')&&d!=='/'){
//console.log(ii)
if(ii==2){
ii=0;//console.log("HO GOD")
i--;state=1;
returnObject.push({Type:"attributeValue",Content:c});
c='';continue;
}
if(d=='>'){ii=0;state=0;
if(ii==1){
submittag(c,ii);c='';
}
c='';
returnObject.push({Type:"endTag",Content:">"});
continue;
}
c+=d;
ii=1;
continue;
}
if(ii==1){
submittag(c,ii);c='';
}
if(d=="'"||d=='"'){if(ii==2){
submittag(c,ii);c='';
};
ii=string.substring(i+1).indexOf(d)+1;
//console.log(string.substr(i,ii));
returnObject.push({Type:"attributeValue",Content:string.substr(i,ii+1)});
i+=ii;
ii=0;state=1;continue;}
ii=2;
c+=d;
}
 
}
ifret();
return returnObject;
}


var maht = (function () {//WRAPS ALL FUNCTIONS IN AN OBJECT, VERIFIES, AND CHECKS IF ITS ENDIANNESS 
  var mat = (function () {//WRAPS ALL FUNCTIONS IN AN OBJECT, STILL DOESN'T VERIFY
    var math;//SUPER BASIC WRAPPER, CONTAINS ALL MAIN FUNCTIONS DOESN'T VERIFY

    function IntToBase(integer, base) { //doesn't support base 1
      var digits = [],
        i = integer;
      do {
        digits.push(i % base);
        i /= base;
      } while (i |= 0);
      return digits; //Little Endian!
    }

    function checkIfarraysareEqual(a, b) {
      var x;
      if ((x = a.length) === b.length) {
        for (var i = 0, l = a.length; i < l; i++) {
          if (a[i] !== b[i]) return false;
        }
      } else return false;
      return true;
    }

    function Division(array1, array2, b) { //We just combined the small division with this method and it should be fastest as ever for long numbers with huge bases!
      if (isGreaterThan(array2, array1)) return [[], array1.slice(0)];
      var power = [],
        dividend = array1,
        i = array1.length - 1;
      while (i--) {
        power.push(0);
      }
      //console.log("ARRAYS",array1,array2);
      power.push(1);
      var quotient = [],
        z, f;
      while (power.length) {
        //if(i++>30)return"faggot";
        if (isGreaterThan(dividend, z = multiplication(power, array2, b)) || checkIfarraysareEqual(z, dividend)) { //THIS CAN BE OPTMIZED EVEN FURTHER
          //console.log(dividend,z,array2,power);
          f = smalldivision(dividend, z, b);
          //console.log(dividend,z,f)
          dividend = substraction(dividend, multiplication(z, f, b), b);
          quotient = addition(quotient, multiplication(power, f, b), b);

        }
        //console.log("AFTER QUOTIENT",quotient)
        power.shift();
        //console.log("AFTER QUOTIENT2",quotient)
      }
      //console.log(quotient,dividend)
      return [quotient, dividend];
    }

    function smalldivision(array1, array2, b) { //little endian I guess
    //when functions are so complicated, I kinda stop explaining what they do, how counterproductive.
    //because in first place, it's really hard to explain it.
      if (checkIfarraysareEqual(array1, array2)) return [1];
      if (!array2.length) throw new Error("Division by zero error");
      var arrayIterate = array2.slice(0),
        arrayKeep = [],
        d = [],
        arrayCounter = [1],
        arrBacktrack1 = [],
        arrBacktrack2 = [],
        arrNet = [],
        asdf/*, i = 0*/;
      while (checkIfarraysareEqual(asdf = multiplication(addition(arrayCounter, arrNet, b), array2, b), array1) || isGreaterThan(array1, asdf)) {
        //    if (i++ > 40) return "fag";
        //console.log(asdf)
        d = arrayIterate.slice(0);
        arrBacktrack1 = arrayCounter.slice(0);
        arrBacktrack2 = arrNet.slice(0);

        arrayCounter = multiplication(arrayCounter, IntToBase(2, b), b);
        arrayIterate = multiplication(arrayIterate, IntToBase(2, b), b);

        if (isGreaterThan(addition(arrayIterate, multiplication(arrayKeep, array2, b), b), array1)) {
          arrayKeep = addition(arrayKeep, d, b);
          arrayIterate = array2.slice(0);
          arrNet = addition(arrNet, arrBacktrack1, b);
          arrayCounter = [1];
        }
      }

      return arrNet /*,substraction(array1,arrayKeep,b)*/ ; //I.i didn't know it was arrNet
    }

    function isGreaterThan(array1, array2) { //we don't need to know base, but base should be equal on both arrays
      //little endian I guess we should know faster that way.. right?
      var i = Math.max(array1.length, array2.length);
      while (i--) {
        if ((array1[i] | 0) > (array2[i] | 0)) return true;
        if ((array1[i] | 0) < (array2[i] | 0)) return false;
      }
      return false; //equality is false
    }

    function addition(array1, array2, base) {
      //I'll use a dumb algorithm, the one I was taught on schools, because is there any other algorithm that does it?
      if (array1.length == 0) return array2.slice(0); //is this optimizing?
      if (array2.length == 0) return array1.slice(0);
      var result = [],
        offset = 0; //Addition with bases, always has an offset
      //FOR SIMPLICITY PURPOSES WE WILL USE LITTLE ENDIANESS
      for (var i = 0, l1 = array1.length, l2 = array2.length; i < l2 || i < l1; i++) { //did you notice this part 'i++' I wonder how to make a counter if you can't even add, hah!
        //    array1[i] |= 0; //This is pretty fucking nasty,I wonder what should I do instead. (you know converting undefineds to 0's)
        //    array2[i] |= 0;
        result.push((offset = (array1[i] | 0) + (array2[i] | 0) + offset) % base); //pretty straightforward I would think?
        //There's a catch here... we're using additions to make an addition, that's retarded somehow, also there's other thing..
        //wait how computers add an offset if they don't know how to add yet
        //this will not support a spectrum of unreasonable bases :/
        offset = (offset / base) | 0; //after thinking it for a while, fuck unreasonable bases. this is why I used |0 instead of Math.floor
        //Wait a second here, am I.. dividing without.. even knowing how to ADD?! There's some flawed logic here!
      }
      if (offset) { //if offset, add the offset.
        result.push(offset);
      }
      return result;
    }

    //SUBSTRACTION JS CODE
    function substraction(array1, array2, base) {
      //array1 must be larger than array2 oh gosh, I'll have to create a greater than algorithm don't I?
      //I'll use an amazing.. algorithm, yes the one I learned at school, if this is the wrong way can someone pleease point a reasonable one?
      var result = [],
        offset = 0; //this offset is quite different from a normal offset isn't it, huh.
      for (var i = 0, l = array1.length; i < l; i++) {
        //    array1[i] |= 0;//nasty sanitizing
        //    array2[i] |= 0;
        if ((array1[i] | 0) >= ((array2[i] | 0) + offset)) { //this is probably the worse way to do it. I don't want to ever save negative values, yes, JS have those natively but I don't really want to touch them, just imagine this isn't a real array it's a Uint8Array
          result.push((array1[i] | 0) - ((array2[i] | 0) + offset));
          offset = 0;
        } else {
          result.push(base - (((array2[i] | 0) + offset) - (array1[i] | 0))); //How computers know how to substract, if they don't know how to substract yet, huh?
          offset = 1; //that's right, offset is boolean.
        }
      }
      return result;
    }

    //yeah this gets boring with some time.
    //I really don't think the "school" way is seriously the best way.
    //Therfore I'll use a wikipedia to give me some insight in what multiplication algorithm will be best?
    //apparently school way is best way, what a load of bs, well, let's do it.., sigh
    //MULTIPLICATION JS CODE
    function multiplication(array1, array2, base) {
      var result = [],
        res, ep;
      for (var i = 0, l1 = array1.length, l2 = array2.length; i < l1; i++) { //did you notice this part 'i++' I wonder how to make a counter if you can't even add, hah!    
        for (var ii = 0; ii < l2; ii++) {
          //console.log("i+ii",i+ii,i,ii)
          result[i + ii] |= 0;
          res = result[i + ii] + array1[i] * array2[ii];
          //console.log("values",res)
          result[i + ii] = res % base;
          //console.log(base,res)
          if (ep = (res / base) | 0) result[i + ii + 1] = (result[i + ii + 1] | 0) + ep;
        }
      }
      //console.log("off",offset)
      //if (offset) result.push(offset);
      return result;
    }
    math = {
      add: addition,
      sub: substraction,
      mul: multiplication,
      div: Division,
      isGr: isGreaterThan,
      isLs: function (a, b) {
        isGreaterThan(b, a);
      },
      isEq: checkIfarraysareEqual,
      i2b: IntToBase,
      rem0: function removeZeroes(l) { //dillema, modify argument or not to.
        //i'll modify argument
        while ((!l[l.length - 1]) && l.length) l.pop();
        return l;
      }
    };

    function BinaryExponentiation(array1, array2, b) { //array1^array2 //you are a phucker if you choose an inmensely big exponent
      if (!array2.length) return [1];
      var values = [],
        two = mat.i2b(2, b);//
      for (var i = [], j = [1]; mat.isGr(array2, i); j = mat.mul(j, two, b)) {
        //console.log(j,mat.add(mat.mul(j,two,b),i,b),array2,mat.isGr(mat.add(mat.mul(j,two,b),i,b),array2))
        if (!j.length) j = [1];
        if (mat.isGr(mat.add(mat.mul(j, two, b), i, b), array2)) {
          i = mat.add(i, j, b);
          values.push(j);
          j = [];
          continue;
        }
      }
      //console.log("SECOND LOOP")
      //values.forEach(console.log.bind(console));
      var nvalues = [],
        n = array1.slice(0),
        x = values[0];
      for (i = [1]; mat.isGr(x, i) || mat.isEq(x, i); i = mat.mul(i, two, b), n = mat.mul(n, n, b)) {
        if (mat.isEq(i, values[values.length - 1])) {
          values.pop();
          nvalues.push(n);
        }
      }
      //console.log(nvalues);
      for (i = 0, x = [1]; i < nvalues.length; i++) {
        x = mat.mul(nvalues[i], x, b);
      }
      return x;
    }
    math.exp = BinaryExponentiation;

    function arrToNumber(aray, baseFrom) {//Array to number, this is where I use exponentiation, oh boy..
      var n = 0;
      for (var i = 0, l = aray.length; i < l; i++) {
        if (aray[i]) n += Math.pow(baseFrom, i) * aray[i];
      }
      return n;
    }

    function CHANGEBASE(array1, FROMBASE, TOBASE) { //CHANGES ARRAYS TO ANOTHER BASE
      var diguts = [],
        arru = array1.slice(0),
        div,/* i = 0,*/
        tobase = mat.i2b(TOBASE, FROMBASE)/*,
        fromb = mat.i2b(FROMBASE, TOBASE)*/;

      do {
        //if(i++>90)return"over 90";
        div = mat.div(arru, tobase, FROMBASE);
        //console.log(div[0],div[1],array1,tobase)
        diguts.push(div[1]);
        arru = div[0];
      } while (arru.length);
      return diguts.map(function (a) {
        return arrToNumber(a, FROMBASE);
      });
    }
    math.changeBase = CHANGEBASE;
    return math;
  })();
  var math = {
    internals: mat,
    endianess: "little",
    add: function (a, b, c) {//addition
      var d = a || [],
        e = b || [];
      if (c < 2) throw new Error("Invalid Base parameter");
      if (math.endianess == "big") d.reverse(),e.reverse();
      var add = mat.add(d, e, c);
      return math.endianess == "big" ? add.reverse() : add;
    },
    sub: function (a, b, c) {//subastraction
      var d = a || [],
        e = b || [];
      if (c < 2) throw new Error("Invalid Base parameter");
      if (math.endianess == "big") d.reverse(),e.reverse();
      if (mat.isGr(e, d)) {
        throw new Error("Substrahend can't be smaller than minuend!");
      }
      var sub = mat.sub(d, e, c);
      return math.endianess == "big" ? sub.reverse() : sub;
    },mul:function (a, b, c) {//multiplication
      var d = a || [],
        e = b || [];
      if (c < 2) throw new Error("Invalid Base parameter");
      if (math.endianess == "big") d.reverse(),e.reverse();
      var mul = mat.mul(d, e, c);
      return math.endianess == "big" ? mul.reverse() : mul;
    },
    isEq: mat.isEq //Is equal than; seriously, this one is perfect 
    ,
    isGt: function (a, b) {//Is greater than
      var e = a || [],
        d = b || [];
      if (math.endianess == "big") d.reverse(),e.reverse();
      return mat.isGr(e, d);
    },
    isLt: function (a, b) {//Is less than
      var e = a || [],
        d = b || [];
      if (math.endianess == "big") d.reverse(),e.reverse();
      return mat.isLs(e, d);
    },
    isGe: function (a, b) {//Is greater or equal than
      var e = a || [],
        d = b || [];
      if (math.endianess == "big") d.reverse(),e.reverse();
      return mat.isGr(e, d) || mat.isEq(e, d);
    },
    isLe: function (a, b) {//Is less or equal than
      var e = a || [],
        d = b || [];
      if (math.endianess == "big") d.reverse(),e.reverse();
      return mat.isLs(e, d) || mat.isEq(e, d);
    },
    changeBase: function (a, b, c) {
      var e = a;
      if (!b || !c || !a) throw new Error("invalid values");
      if (math.endianess == "big") e.reverse();
      var ch = mat.changeBase(a, b, c);
      return math.endianess == "big" ? ch.reverse() : ch;
    }
  };
  return math;
})();

function findAverageOfArray(ns){
for(var i=0,l=ns.length,k=0;i<l;i++){
k+=ns[i];
}
return k/l;
}

function findMedianOfArray(ns){
ns=ns.sort(function(a,b){return a-b})
if(ns.length&1){
return ns[(ns.length-1)>>1];
}else{return (ns[ns.length>>1]+ns[(ns.length>>1)-1])/2;}
}

function findVarienzeOfArray(k){
var mean=findAverageOfArray(k),o=0;
for(var i=0,l=k.length;i<l;i++)o+=Math.pow(k[i]-mean,2)
return o/(l-1)
}

function StatTruncate(ar,p){
var l=ar.length,x=p*l,b=ar.slice(0),mx=Math.floor(x),z=x-mx;
b.splice(0,mx);
b.splice(b.length-mx,mx);
if(z){
b[0]*=1-z
b[b.length-1]*=1-z
}return b
}


function TokenizeSelector(a){//tokenizes CSS selectors. 2014
    //WAA I have to tokenize again
    /*I kinda learned from my mistakes from the last time, most of my previous code is fuking unreadable, okay,
    this code may not be designed to be /that/ readable but, at least it's intended to be reusable, yay tokenizers.
    As you can see most of the information is in that big ass tokens variable, it contains the tokens to be tokenized instead of them being embedded
    on the code, so it's probably easier to tweak for other purposes, or.. that's what I hope.
    
    A String means a literal match
    An Array means an optional match between the tokens of the array, so if there are 2 strings in the array, if it matches either of those it will match the token. (like | in regex)
    For other complex methods there are objects, I defined different kinds of functionalities depending on the "type" property of the object, reminds you of.. regex?
    Repeats means the token repeats until it matches something the token doesn't match. (like + in regex)
    Type concantenation is like.. the concantenation of 2 tokens (so it tokenizes like 1 token)
    
    Uhm, I know the names aren't very good, because I didn't really plan how this was going to work, I need to work on that.
    >implying anyone will use this, ever, even me.
    
    ALSO.. it supports different states!, so if you want to parse something in a certain context it can do it too, as you can see the big token 
    is a big array, each index is like a state, so state 0 is all the objects in the index 0 of the tokens array.
    
    Hope that is clear enough.
    
    Goddamit, I still talk like a kid.
    actually, if you ask me, this code should be easy to read...
*/
var state=0,l=a.length,p=0,c,stateh=[],tokenized=[],tokens	=	[
	[
{
	token:	"[",
	name:	"AttributeSelectorOpeningBracket",
	state:	1},
		{
	token:	"#",
	name:	"IDSelector"},
		{
	token:	".",
	name:	"ClassNameSelector"},
		{
	token:	":",
	name:	"PseudoClassSelector"},
		{
	token:	[{type:"range",from:"\x09",to:"\x0d"},"\0","\x20","\x85","\xA0"],//\s/
	name:	"whitespace",
	continuous:true},
		{
	token:	{type:"concantenated",tokens:[[{type:"range",from:"a",to:"z"},{type:"range",from:"A",to:"Z"}],{type:"repeats",optional:true,token:[{type:"range",from:"a",to:"z"},{type:"range",from:"A",to:"Z"},{type:"range",from:"0",to:"9"}]}]},//[[A-z0-9][A-z0-9]*]
	name:	"Selector"},
		{
	token:	"(",
	name:	"OpeningBracket"},
		{
	token:	")",
	name:	"ClosingBracket"}],
	[
{
	token:	"]",
	name:	"AttributeSelectorClosingBracket",
	state:	-1},
		{
	token:	[{type:"range",from:"\x09",to:"\x0d"},"\0","\x20","\xA0"],//\s/
	name:	"whitespace",
	continuous:true},
		{
	token:	"~=",
	name:	"MatchWholeWordDelimetedByWhitespace"},
		{
	token:	"|=",
	name:	"MatchWholeWordDelimetedByHyphen"},
		{
	token:	"^=",
	name:	"MatchPrefixWord"},
		{
	token:	"$=",
	name:	"MatchSuffixWord"},
		{
	token:	"*=",
	name:	"MatchWord"},
		{
	token:	"=",
	name:	"Matches"}
	,{
	token:	['"',	"'"],
	name:	"QuotedWord",
	delimeted:true,
	delimeter:-1	/*-1 means the delimeter is the	token*/,
	escapeCharacter:"/"},
{token:	{type:"concantenated",tokens:[[{type:"range",from:"a",to:"z"},{type:"range",from:"A",to:"Z"}],{type:"repeats",token:[{type:"range",from:"a",to:"z"},{type:"range",from:"A",to:"Z"},{type:"range",from:"0",to:"9"}]}]},
	name:	"Attribute"}
		]
	];
 function getNextToken() {
        var t = tokens[state], _l = t.length;
        for (var _i = 0, r, s; _i < _l; _i++) { //this basically loops all the tokenObjects of the state to see if they match
            if ((r = getTokenMatches(t[_i].token, p)) !== false) {//does token match?
                if (t[_i].delimeted) {
                    s = t[_i].delimeter === -1 ? a.substring(p, r) : t[_i].delimeter;
                    //selfparsing
                    while (a[r++] !== s) {
                        if (t[_i].escapeCharacter) { /*NOT DONE*/
                        }
                    }
                }
                if (!isNaN(s = t[_i].state)) {
                    if (s === -1) {
                        state = stateh.pop()
                    } else {
                        stateh.push(state);
                        state = s
                    }
                }
                if (t[_i].continuous) {
                    c || (c = [t[_i], p])
                } else {
                    if (Array.isArray(c)) {
                        tokenized.push({text: a.substring(c[1], p),name: c[0].name});
                        c = null
                    }
                    tokenized.push({text: a.substring(p, r),name: t[_i].name})
                }
                if (!t[_i].unflush) {
                    p = r - 1;//moves the p index
                }
                break;
            }
        
        }
        p++;
    }
//This little function, tells me if the token (named "token") matches at z, and it returns me the index of the last matched character if it matches, false if it doesn't
function getTokenMatches(token,z){
var n,i,l=token.length,t,y;
if(typeof token==="string"){
for(i=0;i<l;i++){
if(token[i]!==a[z++])return false;
}
return z;
}else if(Array.isArray(token)){
for(i=0,y;i<l;i++){
if((y=getTokenMatches(token[i],z))!==false)return y;
}
return false;
}else{//IT BEGINS
switch(token.type){
case "range":return (a[z] >= token.from && a[z] <= token.to)?++z:false;
case "concantenated":for(t=token.tokens,i=0,l=t.length;i<l;i++){if(y=getTokenMatches(t[i],z)){z=y}else if(!t[i].optional){return false}};return z;
case "repeats":n=z;while(y=getTokenMatches(token.token,z)){z=y}if(n===z){return false}else{return z}break;
}
}
}
//Here, I loop all the characters, it gets me the tokens.
do{getNextToken()}while(l>p)
return tokenized;
}


function FrequencyTable(sorted,diff){
var min=sorted[0],l=sorted.length,sum=diff||Math.sqrt(l),range=(sorted[l-1]-min)/sum,arr=[],k,n,obj={total:0,length:l,data:arr,min:min,max:sorted[l-1],range:sorted[l-1]-min,intervalSize:range,numberofintervals:sum};
for(var i=0;i<sum;i++){arr[i]={interval:i*range+min,intervalEnd:(i+1)*range+min,data:[]}}
for(i=0;i<l;i++){obj.total+=sorted[i];n=arr[(k=Math.floor((sorted[i]-min)/range))===diff?k-1:k];n.data.push(sorted[i])}
return obj;
}
function FrMakeHTMLTable(a){
function ArrsToTable(arr){
for(var i=0,l=arr.length,str="";i<l;i++){
str+="<tr><td>"+arr[i].join("</td><td>")+"</td></tr>";
}
return str;
}
var h=a.numberofintervals,r=[];
for(var i=0,lz=0;i<h;i++){r[i]=[((a.data[i].interval*100)|0)/100+"\u2264<br>"+(a.data[i].intervalEnd*100|0)/100+">",a.data[i].data.join(),(lz+=a.data[i].data.length,a.data[i].data.length),a.data[i].data.length+"/"+a.length,a.data[i].data.length/a.length*100,lz,lz+"/"+a.length,lz/a.length*100,(((a.data[i].interval+a.data[i].intervalEnd)/2)*100|0)/100]}
r.push(["Total",,a.total,1,100]);
str="<table border=\"1\"><thead>"+ArrsToTable([["Interval","data","f","f<sub>r</sub>","%","F","F<sub>r</sub>","%","M<sub>i</sub>"]])+"</thead><tbody>"+ArrsToTable(r)+"</tbody></table>";
return str;
}

//Hooray, the tokenizer is done, now we should do the parser.
/*But first, I shall explain how it should be done.
We'll make matchrules, it matches an element and it has a list of attributes, so for example
{tagname:"div",attributes:[{operator:"~=",key:"class",value:"someclass"}]}
will match a div that has a class "someclass".
Pseudoclasses will probably be added to this object too, if no attributes or tagname specified it will be set to null or undefined
So * would be like {}, since it matches everything

To match elements that can be alternated like
Element,Element
in which it can match either one or another, an array might be suitable
Now that I think of it CSS selectors are like HTML regex

Now, to search for children as in.
Element > Element,
there are 2 issues, what should be the first element the innermost element or the parentelement?
it's probably easier to implement the parent element first.. 
It's really hard to decide, I decided I will put the one to select first, and the parents inside the children..
Hm so an object like this:
{node:{tagname:"div"},relation:">"}
will select all the direct children of all the div tags.
It's easier to get the div tags first then the children than all the elements to see if their parent is a div, so that should be taken into account
*/
//with all that defined, I can start now!
function parseSelector(selector){
//Last time, I was very successful with custsomizing the tokenizer with the token object, I wonder if I can do that for the second pass
    var _selector=TokenizeSelector(selector),operator,currentSelector={};selectorArray=[],tokens=[{token:"whitespace",do:function(){}},{token:"selector"}]/*As I said an array means the rules matched can alternate between the itmes in the array*/;
    for(var _i=0,_l=_selector.length;_i<_l;_i++){
console.log(_selector[_i])
 switch(_selector[_i].name){
//case:
}
}
    return selectorArray;
}

//Hack to self recursive JSON
function getJSONObjectProperty(parent,object,property){//object should be descendant of parent
var o,r,d,i=0;
if(!((o=object[property])&&r=o.__reference))return o;else{
r=r.split('.');
if(r[0]=='_p')i++,(d=parent);else d=o;
for(var l=r.length;i<l;i++){
if(d)d=d[r[i]];else break;
} 
object[property]=d;
return d;
}
}

function rng(a, b, c) {//makes range regex for (a-b) as in [a-b] in a characther class
//c argument just aids for repetition
    if(b>35||a>35){return "";}//like, we don't support 35+ base, or should we
	if (c === 0) return "";
	var d = '';
	if (c) d = rpt(c);
	if ((!b) || b === a) {
		if (a > 9) return "[" + String.fromCharCode(a + 55) + String.fromCharCode(a + 87) + "]" + d;
		return a + d;
	}
	if (b - a === 1) {
		if (a === 9) {
			return "[9Aa]" + d
		}
		if (a > 9) {
			return "[" + String.fromCharCode(a + 55) + String.fromCharCode(a + 87) + String.fromCharCode(b + 55) + String.fromCharCode(b + 87) + "]" + d
		}
		return "[" + a + b + "]" + d;
	}
	if (a === 0 && b >= 9) {
		if (b > 9) {
			return "[\\d" + (b === 10 ? String.fromCharCode(b + 55) + String.fromCharCode(b + 87) : "A-" + String.fromCharCode(b + 55) + "a-" + String.fromCharCode(b + 87)) + "]" + d;
		} else
			return "\\d" + d;
	}
	if (a > 9) {
		return "[" + String.fromCharCode(a + 55) + '-' + String.fromCharCode(b + 55) + String.fromCharCode(a + 87) + "-" + String.fromCharCode(b + 87) + "]" + d
	}
	if (b > 9) {
		return "[" + a + "-9A-" + String.fromCharCode(b + 55) + "a-" + String.fromCharCode(b + 87) + "]" + d;
	}

	return "[" + a + "-" + b + "]" + d;
}

function rpt(a, b) {//it simply adds a repetition thingy, as in {a,b}
	if ((!b) || b === a) {
		if (a === 1) return "";
		return "{" + a + "}"
	}
	return "{" + a + "," + b + "}"
}

function lst(isLast, i) {
	if (isLast && i > 1) {
		return rng(1, 9) + rng(0, 9) + rpt(0, i - 1);
	} else {
		return rng(0, 9, i);
	}
}

function numberSplit(n, b) { //n is number and b is base, it splits number by the base and returns an array
	var a = [],
		c;
	while (n) a.push(c = n % b), (n = (n - c) / b);
	return a;
}

function getRegexForMinimum(as) { //gets (as-99) if 123 it gets it to 999 if 6442 gets it until to 9999
	//this is the opposite of the rest of the code WTF, right
	var x, d, n;
	for (var i = 0, l = as.length; i < l; i++) {
		if (as[i] !== 0) break;
	}
	n = as[i];
	d = rng(n, 9);
	d += rng(0, 9, i)
	i++;
	for (var n; i < l; i++) {
		x = '', n = as[i];;

		if (n === 9) {
			d = n + d;
			continue;
		}
		x = rng(n + 1, 9);

		x += rng(0, 9, i);;
		d = "(?:" + n + d + "|" + x + ")";
	}
	return d;
}

function RegExpNumberBetween(x, y, zeroes) { //x is min, y is max, x doesn't work yet thoug
	if (x > y) return null;
	///zeroes was a flag so it supported 000-999 but it was  stupid idea
	//currently what this does, is creates a regex that matches a number btween x and y, cool huh?
	var s = '',
		k = '',
		c, isLast,
		splits = numberSplit(y, 10),
		xplits = numberSplit(x, 10),
		ld, I, p, N, l; //length difference
	ld = (l = splits.length) - xplits.length;
	if (!ld) {
		var I = l;
		while (I--) {
			if (xplits[I] !== splits[I]) break;
		}

	}
	for (var i = 0; i < l; i++) { //check how many first 9s there are
		if (xplits[i] !== 0 && p !== undefined) {
			p = i
		}
		if (splits[i] !== 9 || i === I) break;
	}
	n = splits[i];
	isLast = i === l - 1;
	if (i === I) s = rng(xplits[i] + (i ? 1 : 0), n);
	else
		s = rng(0, n); //this should make sense, right?, come on
	//this is fucking unreadable, regex making algorithms don't make sense
	s += lst(isLast, i);
	if (i === I) {
		//console.log(s, i, xplits, splits)
		if (i === 0) {
			s = splits.slice(i + 1).reverse().join('') + s
		} else
			s = splits.slice(i + 1).reverse().join('') + "(?:" + s + "|" + xplits[i] + getRegexForMinimum(xplits.slice(0, i)) + ")";
	} else {
		i++;
		for (var n; i < l; i++) {
			isLast = i === l - 1;
			k = '', c = (i === l - 1) && ld && x, n = splits[i];
			if (I === i) {
				//console.log(I, i, n, s, k, splits, xplits)
				s = splits.slice(i + 1).reverse().join('') + "(?:" + n + s + "|" + (N = xplits[i]) + getRegexForMinimum(xplits.slice(0, i)) + (n - N >= 2 ? "|" + rng(N + 1, n - 1) + rng(0, 9, i) : "") + ")";
				break;
			} else {

				if (n === 0) {
					s = n + s;
					continue;
				}
				if (isLast && n !== 1) {
					k = rng(1, n - 1)
				} else
					k = rng(0, n - 1);
				if (!(c && (l - ld) > i - 1))
					k += (isLast ? rng(0, 9, i) + "|" : "") + (isLast ? (rng(1, 9) + rng(0, 9) + rpt(l - ld, i - 1)) : rng(0, 9, i));
				else if (isLast && k) k += rng(0, 9, i);

				if (c) {
					//console.log(n,s,k,!!k)
					if (!k) {
						s = "(?:" + n + s + "|" + getRegexForMinimum(xplits) + ")";
					} else
						s = "(?:" + n + s + "|" + k + "|" + getRegexForMinimum(xplits) + ")";
				} else
					s = "(?:" + n + s + "|" + k + ")";
			}
		}
	}
	return s;
}
for (var i = 0, a, b, c, d, e, isin; i < 1000; i++) {
	a = Math.round(Math.random() * 10000000), b = Math.round(Math.random() * 10000000);
	if (a > b) {
		c = b;
		b = a;
		a = c;
	}
	c = Math.round(Math.random() * 10000000);
	isin = a <= c && b >= c;
	d = c.toString().match(new RegExp('\\b' + (e = RegExpNumberBetween(a, b)) + '\\b'));
	if (Boolean(d) ^ isin) {
		console.log('eeehhh?', a, b, c, d, e)
	}
}
var CssSelectorParser = (function () {
	var source, index;
	var treeRewrite={unknown:function(a){return this[a.name](a)},selectorArray:function(a){var b={name:"selector group",list:[]};for(var i=0,l=a.content.length;i<l;i++)b.list.push(this.unknown(a.content[i]))},selector:function(a){return this.unknown(a.content)},"simple selector":function(a){var b={};for(var i=0,l=a.content.length,d;i<l;i++){d=a.content[i];switch(d.name){case "type selector":break;case "class selector":break;case "ID selector":break;case "attribute selector":break;case "pseudo-class":break;}}},operator:function(a){},unescape:function(string,possiblequotes){

}},unescape=[{search:/\\([0-7]{1,3})/,replace:{f:"octal",for:1}}]
	//Apparently, you don't tokenize and then parse, you do it on the go, but with more specific techniques which people call grammars, oh well, how was I suppesd to know that anyway.
	//reference {type:"type",is:"type"} "hue"
	//repetition {type:"repeat",optional:false,from:1,to:Infinity,contains:{},delimiting:null,multipleDelimeters:null} optional to and from are defaulted, delimiters can be used for lists like a,b,c and stuff
	//array {type:"tyArray",contains:[]}
	//alternate  {type:"alternate",contains:[]}
	//Expression {type:"expression",contains:{},operators:[{precedence:1,rightAssociative:false,tokens:[]}}],delimeters=[["(",")"]],whiteSpaceIgnore:null}
	var tys = { //tys, meaning types
		"type selector": /\*|(?:[\w_]|\\x?[a-f0-9]{2,6}\s?|\\[\S\s])(?:[^\\\s#.>&+~:,="'[\]]|\\x?[a-f0-9]{2,6}\s?|\\[\S\s])*/i, //regex for tagname
		attributeValue: { //the vaue of an attibute, it can be 
			type: "alternate",
			contains: [/"(?:[^"\\]|\\[\s\S])*"|'(?:[^'\\]|\\[\s\S])*'/i, {
				type: "type",
				is: "name"
			}]
		},
		"pseudo-class": /::?(?:[\w_]|\\x?[a-f0-9]{2,6}\s?|\\[\S\s])(?:[^\\\s#.>&+~:,(]|\\x?[a-f0-9]{2,6}\s?|\\[\S\s])*(?:\((?:[^)\\]|\\[\S\s])*\))?/, //is for this I was thinking of implementing my own regex, this is beyond ridiculous
		operator: /\s*(?:\$=|\^=|~=|\|=|\*=|=)\s*/, //you know the thing at [attr=value]
		"attribute selector": {
			type: "tyArray",
			contains: ['[', {
				type: "tyArray",
				contains: [{
					type: "type",
					is: "name"
				}, {
					type: "type",
					is: "operator"
				}, {
					type: "type",
					is: "attributeValue"
				}],
				optional: [1, 2]
			}, ']']
		},
		"ID selector": {
			type: "tyArray",
			contains: ['#', { //an id starts with an #
				type: "type",
				is: "name"
			}]
		},
		"class selector": { //a classname starts with a dot
			type: "tyArray",
			contains: ['.', {
				type: "type",
				is: "name"
			}]
		},
		"simple selector": { //a element selector is composed from tagname, clasname,attributesm, and pseudoclasses
			//this is a sequence of simple selectors
			type: "repeat",
			contains: {
				type: "alternate",
				contains: [{
					type: "type",
					is: "type selector"
				}, {
					type: "type",
					is: "class selector"
				}, {
					type: "type",
					is: "ID selector"
				}, {
					type: "type",
					is: "attribute selector"
				}, {
					type: "type",
					is: "pseudo-class"
				}]
			}
		},
		selector:
		/* {OLD LOL
			type: "repeat",
			delimiting: {
				type: "type",
				is: "relationship"
			},
			contains: {
				type: "type",
				is: "element"
			}*/
		{
			type: "expression",
			contains: {
				type: "type",
				is: "simple selector"
			},
			whiteSpaceIgnore: true,
			rightAssociative: true,
			operators: [{
				precedence: 1,
				tokens: ['>', '&', '+', '~', /\s/] //these are not actually operators this are combinators
			}]
		},
		selectorArray: { //this is a selector group
			type: "repeat",
			delimiting: /\s*,\s*/, //it is separated by a comma, and optionally whitespace
			contains: {
				type: "type",
				is: "selector"
			}
		}
	}
	var mains = { //START PARSE
			type: "type",
			is: "selectorArray"
		}
		//yay extendibility
	var funcs = { //funcions/types used, hue
		expression: function (o) { //parse it like an expression
			//this is probably a little bit hard to understand
			var r = {
					type: "alternate",
					contains: [o.contains]
				}, //is it a token, an operator, or a parenthesis?
				opers = {
					type: "alternate",
					contains: []
				},
				delims = {
					type: "alternate",
					contains: []
				},
				i, I, l, L, props, t, n, ret = {},
				_ind = index,
				EXPRS = [],
				OPERATORS = [],
				O, precedence, rightAssociative, arg1, arg2, k; //I use and reuse most variables I can, damn
			if (O = o.operators) {
				for (i = 0, l = O.length; i < l; i++) {
					for (I = 0, L = O[i].tokens.length; I < L; I++) {
						t = O[i].tokens[I];
						if (o.whiteSpaceIgnore) {
							if (typeof t === "string") {
								opers.contains.push(new RegExp("\\s*(?:" + t.replace(/([-+\\?.!$^&*(){}[\]])/g, "\\$1") + ")\\s*"));
							} else if (t instanceof RegExp) {
								opers.contains.push(new RegExp("\\s*(?:" + t.source + ")\\s*", (t.multiline ? "m" : "") + (t.ignoreCase ? "i" : "")))
							} else {
								opers.contains.push({
									type: "tyArray",
									contains: [/\s*/, t, /\s*/]
								}); /*Ahh I HATE THIS! D:*/
							}
						} else {
							opers.contains.push(t);
						}
					}
				}
				r.contains[1] = opers; //ADD THEM TO THE LIST
			}
			if (O = o.delimeters) { //this is like a carbon copy of the previous if, should I try to make it a function? Don't repeat yourself
				for (i = 0, l = O.length; i < l; i++) {
					for (I = 0, L = O[i].length; I < L; I++) {
						t = O[i][I];
						if (o.whiteSpaceIgnore) {
							if (typeof t === "string") {
								delims.contains.push(new RegExp("\s*(?:" + t + ")\s*"));
							} else if (t instanceof RegExp) {
								delims.contains.push(new RegExp("\s*(?:" + t.source + ")\s*", (t.multiline ? "m" : "") + (t.ignoreCase ? "i" : "")))
							} else {
								delims.contains.push({
									type: "tyArray",
									contains: [/\s*/, t, /\s*/]
								}); /*Ahh I HATE THIS! D:*/
							}
						} else {
							delims.contains.push(t);
						}
					}
				}
				r.contains[2] = delims;
			}
			/*Shunting Yard Algorithm*/
			while (n = isIndexItem(r, props = {})) { //While there are tokens to be read
				//read a token
				if (props._matched === r.contains[0]) { //If the token is a number, then add it to the output queue.
					EXPRS.push(n);
				} else
				if (props._matched === opers) { //If the token is an operator, o1, then
					if ((I = opers.contains.indexOf(props.props._matched)) !== -1) {
						for (i = 0, l = (O = o.operators).length, k = 0; i < l; i++) { //
							if ((k += O[i].tokens.length) > I) {
								precedence = O[i].precedence;
								rightAssociative = O[i].rightAssociative;
								break;
							}
						}
					} else {
						throw new Error("props.props._matched not found at oper.contains, This is impossible.. or is it?");
					}
					while ((L = OPERATORS.length) && (((!rightAssociative) && precedence === OPERATORS[L - 1][1]) || precedence < OPERATORS[L - 1][1])) { //while there is an operator token, o2, at the top of the stack, and
						//either o1 is left-associative and its precedence is equal to that of o2,
						//or o1 has precedence less than that of o2,
						/*POPPINGG!!*/
						//pop o2 off the stack, onto the output queue;
						//This popping is also a bit of PRN execution, basically it is shunting yard and prn, or something weird
						arg2 = EXPRS.pop();
						arg1 = EXPRS.pop();
						if (!(EXPRS.length || arg1)) {
							console.warn("NOT ENOUGH TERMS");
						}
						t = OPERATORS.pop();
						for (i = 0, l = (O = o.operators).length, k = 0; i < l; i++) {
							if ((k += O[i].tokens.length) > t[2]) {
								EXPRS.push({
									operation: O[i].tokens[t[2] - (k - O[i].tokens.length)],
									op: t[0],
									arguments: [arg1, arg2],
									name: "operator"
								});
								break;
							}
						}
					}
					OPERATORS.push([n, precedence, I]);
				} else
				if (props._match === delims) {} else {
					throw Error("This is impossible! It has matched an unknown value..???");
				}
			}
			//When there are no more tokens to read
			while (L = OPERATORS.length) { //While there are still operator tokens in the stack
				//Pop the operator onto the output queue.
				arg2 = EXPRS.pop();
				arg1 = EXPRS.pop();
				if (!(EXPRS.length || arg1)) {
					console.warn("NOT ENOUGH TERMS");
				}
				t = OPERATORS.pop();
				for (i = 0, l = (O = o.operators).length, k = 0; i < l; i++) {
					if ((k += O[i].tokens.length) > t[2]) {
						EXPRS.push({
							operation: O[i].tokens[t[2] - (k - O[i].tokens.length)],
							op: t[0],
							arguments: [arg1, arg2],
							name: "operator"
						});
						break;
					}
				}
			}
			if (EXPRS.length < 1) {
				return null;
			}
			if (EXPRS.length !== 1) {
				throw new Error("Operators and expressions mismatch!!");
			}
			return EXPRS[0];
		},
		type: function (o) { //get type and parse it
			var props = {},
				a = isIndexItem(tys[o.is], props),
				t, ret; //this is where props originally started, in short words, it is used to pass properties from other functions to here 
			if (a === null) return null;
			//console.log()
			ret = {
				type: (t = tys[o.is]) && (t.delimiting ? "list" : t.type || ((typeof t === "string" || t instanceof RegExp) ? "String" : undefined)),
				name: o.is,
				content: a
			}
			for (var k in props) {
				if (props.hasOwnProperty(k) && (!ret[k])) {
					ret[k] = props[k];
				}
			}
			return ret;
		},
		repeat: function (o, props) { //repeat
			var reto = [],
				e, d, _ind = index,
				l, p, D = o.delimiting,
				i = 0,
				p = D && o.multipleDelimeters, //say, if the delimeter is just once, there is no point in putting it each time it appears.. right? so an CSV like "abc,dfe,ege" will appear as ["abc","dfe","ege"] instead of ["abc",',',"dfe",',',"ege"]
				props2;
			d = o.contains;
			props.props = [];
			do {
				e = isIndexItem(D ? i & 1 ? D : d : d, props2 = {});
				if ((!p) && D && i & 1) {
					i++;
					if (e !== null) {
						continue;
					} else {
						break;
					}
				}
				i++;
				if (e !== null) {
					reto.push(e)
					props.props.push(props2)
				}
			} while (e !== null && i !== o.to);
			l = reto.length;
			if (((!o.optional) && l == 0) || ((!isNaN(p = o.from)) && l < p)) {
				index = _ind;
				return null;
			}
			if (D && !p) {
				props.delimeter = D
			}
			return reto;
		},
		tyArray: function (o, props) { //tokens are in some order
			var reto = [],
				e, _ind = index,
				opt = o.optional || [],
				props2;
			props.props = [];
			for (var i = 0, l = o.contains.length, d; i < l; i++) {
				d = o.contains[i];
				e = isIndexItem(d, props2 = {});
				if (e === null && (opt.indexOf(i) < 0)) {
					index = _ind;
					return null;
				}
				if (e !== null)
					props.props.push(props2);
				reto.push(e);
			}
			return reto;
		},
		alternate: function (o, props) { //It alternates 
			var reto = null,
				e, props2 = {};
			for (var i = 0, l = o.contains.length, d; i < l; i++) {
				d = o.contains[i];
				e = isIndexItem(d, props2);
				if (e !== null) {
					reto = e;
					props.props = props2;
					props._matched = d;
					break;
				}
			}
			return reto;
		}
	}

	function isIndexItem(item, props) { //recursive
		//returns item or null
		var s, t, r = new RegExp,
			f;
		if (!item) {
			return null
		} else
		if (item instanceof RegExp) {
			r.compile("^(?:" + item.source + ")", (item.multiline ? "m" : "") + (item.eturnignoreCase ? "i" : ""))
			//r.lastIndex = index;
			s = r.exec(source.substr(index)); //RAAAWR damn it
			t = s && s[0];
			if (t === null) return null;
			index += t.length;
			return t;
		} else if (typeof item == "string") { //literal match
			//console.log("DOES "+item+" and"+source.substr(index,item.length)+" MATCHES??");
			if (item === source.substr(index, item.length))
				return (index += item.length), item;
			return null;
		} else {
			t = item.type;
			f = funcs[t];
			s = f(item, props);
			if (f) return s;
			else return null;
		}
	}

	function selectorParser(arg) {
		source = arg,
		index = 0; //index is 0!!!
		return isIndexItem(mains); //wasn't that just pretty understandable?
	}
	return selectorParser;
})()
