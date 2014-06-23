function objectToString(o,n,k){
    var parse = function(_o,n,k){
        console.log(_o,n,k)
    if (n<=k){return ["object"];}
    
        var a = [], t;

        for(var p in _o){
        
            if(_o.hasOwnProperty(p)){
            
           try{t = _o[p];}catch(e){}
                
                if(t && t!=_o &&typeof t == "object"){
                console.group()
                    a[a.length]= p + ":{ " + arguments.callee(t,n,++k).join(", ") + "}";
console.groupEnd()
                    k--;
                }
                else {
                    
                    if(typeof t == "string"){
                    
                        a[a.length] = [ p+ ": \"" + t + "\"" ];
                    }
                    else if(t == null){a[a.length] = [ p+ ": \"" + "null" + "\"" ];}else{
                        a[a.length] = [ p+ ": " + t.toString()];
                    }
                    
                }
            }
        }
        
        return a;
        
    }
    
    return "{" + parse(o,n,k).join(", ") + "}";
    
}
/***************View all elements********************/
/*master=this
asdfdggr=document.createElement('table');asdfdggr.border=1;asdfdggr.innerHTML="<!-- commented out cause I got lazy\n<tr>\n<td><input type=\"text\" name=\"v1\"></td>\n<td><input type=\"text\" name=\"v2\"></td>\n<td><input type=\"text\" name=\"v3\"></td>\n<td><input type=\"text\" name=\"v4\"></td>\n</tr>\n-->\n<tr>\n<td valign=\"top\" id=\"c1\"></td>\n<td valign=\"top\" id=\"c2\"></td>\n<td valign=\"top\" id=\"c3\"></td>\n<td valign=\"top\" id=\"c4\"></td>\n</tr>";document.body.insertBefore(asdfdggr,document.body.firstChild)
function introspect(id,obu) {
 nid = id+1;
 //alert("id:"+id+" obu:"+obu);
 ht = "";
if(typeof(obu)===typeof(String())){ht=obu}else{
 for (i in obu) {
try{
   if( master[i] == null ) {
    ht = ht + i + " : " + eval(master[i]) + "<br />";
   } else {
    ht = ht + '<a href="#" onClick="return introspect('+nid+',master[\''+i+'\']);">'+i+'</a>';
    ht = ht + " : ";
    ht = ht + master[i];
    ht = ht + '<br />';
   }}catch(c){}}
 }
 //alert(ht);
 objName = 'c'+id;
 obj = document.getElementById(objName)
 obj.innerHTML = ht;
 return true;
}                                 */
/*************************************************/

fag=["top","window","location","external","chrome","Intl","v8Intl","document","webkitAudioContext","webkitNotifications","WebSocket","webkitRTCPeerConnection","webkitMediaStream","WebKitSourceBufferList","WebKitSourceBuffer","WebKitMediaSource","SharedWorker","DeviceOrientationEvent","MediaController","HTMLSourceElement","TimeRanges","MediaError","HTMLVideoElement","HTMLMediaElement","HTMLAudioElement","Audio","TrackEvent","TextTrackList","TextTrackCueList","TextTrackCue","TextTrack","HTMLTrackElement","HTMLShadowElement","HTMLContentElement","WebKitShadowRoot","localStorage","sessionStorage","applicationCache","OfflineAudioCompletionEvent","AudioProcessingEvent","webkitAudioPannerNode","webkitIntent","WebKitIntent","Notification","SQLException","CloseEvent","MediaStreamEvent","RTCIceCandidate","RTCSessionDescription","webkitStorageInfo","IDBVersionChangeEvent","IDBTransaction","IDBRequest","IDBOpenDBRequest","IDBObjectStore","IDBKeyRange","IDBIndex","IDBFactory","IDBDatabaseException","IDBDatabase","IDBCursorWithValue","IDBCursor","indexedDB","webkitIDBTransaction","webkitIDBRequest","webkitIDBObjectStore","webkitIDBKeyRange","webkitIDBIndex","webkitIDBFactory","webkitIDBDatabaseException","webkitIDBDatabase","webkitIDBCursor","webkitIndexedDB","WebKitMutationObserver","webkitURL","URL","FileReader","FileError","FormData","SVGFilterElement","SVGFETurbulenceElement","SVGFETileElement","SVGFESpotLightElement","SVGFESpecularLightingElement","SVGFEPointLightElement","SVGFEOffsetElement","SVGFEMorphologyElement","SVGFEMergeNodeElement","SVGFEMergeElement","SVGFEImageElement","SVGFEGaussianBlurElement","SVGFEFuncRElement","SVGFEFuncGElement","SVGFEFuncBElement","SVGFEFuncAElement","SVGFEFloodElement","SVGFEDropShadowElement","SVGFEDistantLightElement","SVGFEDisplacementMapElement","SVGFEDiffuseLightingElement","SVGFEConvolveMatrixElement","SVGFECompositeElement","SVGFEComponentTransferElement","SVGFEColorMatrixElement","SVGFEBlendElement","SVGComponentTransferFunctionElement","SVGVKernElement","SVGMissingGlyphElement","SVGHKernElement","SVGGlyphRefElement","SVGGlyphElement","SVGFontFaceUriElement","SVGFontFaceSrcElement","SVGFontFaceNameElement","SVGFontFaceFormatElement","SVGFontFaceElement","SVGFontElement","SVGAltGlyphItemElement","SVGAltGlyphElement","SVGAltGlyphDefElement","SVGSetElement","SVGMPathElement","SVGAnimateTransformElement","SVGAnimateMotionElement","SVGAnimateElement","SVGAnimateColorElement","SVGZoomAndPan","SVGViewSpec","SVGViewElement","SVGUseElement","SVGUnitTypes","SVGTSpanElement","SVGTRefElement","SVGTransformList","SVGTransform","SVGTitleElement","SVGTextPositioningElement","SVGTextPathElement","SVGTextElement","SVGTextContentElement","SVGSymbolElement","SVGSwitchElement","SVGSVGElement","SVGStyleElement","SVGStringList","SVGStopElement","SVGScriptElement","SVGRenderingIntent","SVGRectElement","SVGRect","SVGRadialGradientElement","SVGPreserveAspectRatio","SVGPolylineElement","SVGPolygonElement","SVGPointList","SVGPoint","SVGPatternElement","SVGPathSegMovetoRel","SVGPathSegMovetoAbs","SVGPathSegList","SVGPathSegLinetoVerticalRel","SVGPathSegLinetoVerticalAbs","SVGPathSegLinetoRel","SVGPathSegLinetoHorizontalRel","SVGPathSegLinetoHorizontalAbs","SVGPathSegLinetoAbs","SVGPathSegCurvetoQuadraticSmoothRel","SVGPathSegCurvetoQuadraticSmoothAbs","SVGPathSegCurvetoQuadraticRel","SVGPathSegCurvetoQuadraticAbs","SVGPathSegCurvetoCubicSmoothRel","SVGPathSegCurvetoCubicSmoothAbs","SVGPathSegCurvetoCubicRel","SVGPathSegCurvetoCubicAbs","SVGPathSegClosePath","SVGPathSegArcRel","SVGPathSegArcAbs","SVGPathSeg","SVGPathElement","SVGPaint","SVGNumberList","SVGNumber","SVGMetadataElement","SVGMatrix","SVGMaskElement","SVGMarkerElement","SVGLineElement","SVGLinearGradientElement","SVGLengthList","SVGLength","SVGImageElement","SVGGradientElement","SVGGElement","SVGException","SVGForeignObjectElement","SVGEllipseElement","SVGElementInstanceList","SVGElementInstance","SVGElement","SVGDocument","SVGDescElement","SVGDefsElement","SVGCursorElement","SVGColor","SVGClipPathElement","SVGCircleElement","SVGAnimatedTransformList","SVGAnimatedString","SVGAnimatedRect","SVGAnimatedPreserveAspectRatio","SVGAnimatedNumberList","SVGAnimatedNumber","SVGAnimatedLengthList","SVGAnimatedLength","SVGAnimatedInteger","SVGAnimatedEnumeration","SVGAnimatedBoolean","SVGAnimatedAngle","SVGAngle","SVGAElement","SVGZoomEvent","XPathException","XPathResult","XPathEvaluator","Storage","ClientRectList","ClientRect","MimeTypeArray","MimeType","PluginArray","Plugin","MessageChannel","MessagePort","XSLTProcessor","XMLHttpRequestException","XMLHttpRequestUpload","XMLHttpRequest","XMLSerializer","DOMParser","XMLDocument","EventSource","RangeException","Range","NodeFilter","Blob","FileList","File","Worker","Clipboard","WebKitPoint","WebKitCSSMatrix","WebKitCSSRegionRule","WebKitCSSKeyframesRule","WebKitCSSKeyframeRule","EventException","WebGLContextEvent","SpeechInputEvent","StorageEvent","TouchEvent","XMLHttpRequestProgressEvent","WheelEvent","WebKitTransitionEvent","WebKitAnimationEvent","UIEvent","TextEvent","ProgressEvent","PageTransitionEvent","PopStateEvent","OverflowEvent","MutationEvent","MouseEvent","MessageEvent","KeyboardEvent","HashChangeEvent","ErrorEvent","CustomEvent","CompositionEvent","BeforeLoadEvent","Event","DataView","Float64Array","Float32Array","Uint32Array","Int32Array","Uint16Array","Int16Array","Uint8ClampedArray","Uint8Array","Int8Array","ArrayBuffer","DOMStringMap","WebGLUniformLocation","WebGLTexture","WebGLShaderPrecisionFormat","WebGLShader","WebGLRenderingContext","WebGLRenderbuffer","WebGLProgram","WebGLFramebuffer","WebGLBuffer","WebGLActiveInfo","TextMetrics","ImageData","CanvasRenderingContext2D","CanvasGradient","CanvasPattern","Option","Image","HTMLUnknownElement","HTMLAllCollection","HTMLCollection","HTMLUListElement","HTMLTitleElement","HTMLTextAreaElement","HTMLTableSectionElement","HTMLTableRowElement","HTMLTableElement","HTMLTableColElement","HTMLTableCellElement","HTMLTableCaptionElement","HTMLStyleElement","HTMLSpanElement","HTMLSelectElement","HTMLScriptElement","HTMLQuoteElement","HTMLProgressElement","HTMLPreElement","HTMLParamElement","HTMLParagraphElement","HTMLOutputElement","HTMLOptionElement","HTMLOptGroupElement","HTMLObjectElement","HTMLOListElement","HTMLModElement","HTMLMeterElement","HTMLMetaElement","HTMLMenuElement","HTMLMarqueeElement","HTMLMapElement","HTMLLinkElement","HTMLLegendElement","HTMLLabelElement","HTMLLIElement","HTMLKeygenElement","HTMLInputElement","HTMLImageElement","HTMLIFrameElement","HTMLHtmlElement","HTMLHeadingElement","HTMLHeadElement","HTMLHRElement","HTMLFrameSetElement","HTMLFrameElement","HTMLFormElement","HTMLFontElement","HTMLFieldSetElement","HTMLEmbedElement","HTMLDivElement","HTMLDirectoryElement","HTMLDataListElement","HTMLDListElement","HTMLCanvasElement","HTMLButtonElement","HTMLBodyElement","HTMLBaseFontElement","HTMLBaseElement","HTMLBRElement","HTMLAreaElement","HTMLAppletElement","HTMLAnchorElement","HTMLElement","HTMLDocument","Window","Selection","ProcessingInstruction","EntityReference","Entity","Notation","DocumentType","CDATASection","Comment","Text","Element","Attr","CharacterData","NamedNodeMap","NodeList","Node","Document","DocumentFragment","DOMTokenList","DOMSettableTokenList","DOMImplementation","DOMStringList","DOMException","StyleSheetList","RGBColor","Rect","CSSRuleList","Counter","MediaList","CSSStyleDeclaration","CSSStyleRule","CSSPageRule","CSSMediaRule","CSSImportRule","CSSFontFaceRule","CSSCharsetRule","CSSRule","WebKitCSSFilterValue","WebKitCSSTransformValue","CSSValueList","CSSPrimitiveValue","CSSValue","CSSStyleSheet","StyleSheet","performance","console","devicePixelRatio","styleMedia","parent","opener","frames","self","defaultstatus","defaultStatus","status","name","length","closed","pageYOffset","pageXOffset","scrollY","scrollX","screenTop","screenLeft","screenY","screenX","innerWidth","innerHeight","outerWidth","outerHeight","offscreenBuffering","frameElement","event","crypto","clientInformation","navigator","toolbar","statusbar","scrollbars","personalbar","menubar","locationbar","history","screen","postMessage","close","blur","focus","ondeviceorientation","onwebkittransitionend","onwebkitanimationstart","onwebkitanimationiteration","onwebkitanimationend","onsearch","onreset","onwaiting","onvolumechange","onunload","ontimeupdate","onsuspend","onsubmit","onstorage","onstalled","onselect","onseeking","onseeked","onscroll","onresize","onratechange","onprogress","onpopstate","onplaying","onplay","onpause","onpageshow","onpagehide","ononline","onoffline","onmousewheel","onmouseup","onmouseover","onmouseout","onmousemove","onmousedown","onmessage","onloadstart","onloadedmetadata","onloadeddata","onload","onkeyup","onkeypress","onkeydown","oninvalid","oninput","onhashchange","onfocus","onerror","onended","onemptied","ondurationchange","ondrop","ondragstart","ondragover","ondragleave","ondragenter","ondragend","ondrag","ondblclick","oncontextmenu","onclick","onchange","oncanplaythrough","oncanplay","onblur","onbeforeunload","onabort","getSelection","print","stop","open","showModalDialog","alert","confirm","prompt","find","scrollBy","scrollTo","scroll","moveBy","moveTo","resizeBy","resizeTo","matchMedia","setTimeout","clearTimeout","setInterval","clearInterval","requestAnimationFrame","cancelAnimationFrame","webkitRequestAnimationFrame","webkitCancelAnimationFrame","webkitCancelRequestAnimationFrame","atob","btoa","addEventListener","removeEventListener","captureEvents","releaseEvents","getComputedStyle","getMatchedCSSRules","webkitConvertPointFromPageToNode","webkitConvertPointFromNodeToPage","dispatchEvent","webkitRequestFileSystem","webkitResolveLocalFileSystemURL","openDatabase","TEMPORARY","PERSISTENT","NUUB"];
NUUB={};FUCKK:for(bss in window){console.log(bss);for(ii=0;ii<fag.length;ii++){if(fag[ii]===bss){continue FUCKK;}};NUUB[bss]=(window[bss])}
