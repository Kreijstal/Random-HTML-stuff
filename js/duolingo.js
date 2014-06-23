//https://www.facebook.com/valeria.bravo.1806;https://www.facebook.com/AndreithaMamasotha;https://www.facebook.com/linda.m.ortega.75;https://www.facebook.com/yessenya.cortez;https://www.facebook.com/pamela.garcia.338863;https://www.facebook.com/12juan34
//https://www.facebook.com/ChuckyD999?ref=stream
q=30;function rateotheropen(){rateothers=document.getElementsByClassName('rate-others');for(l in rateothers){if(rateothers[l].click)rateothers[l].click()};setTimeout(function(){showall=document.getElementsByClassName('show-all-candidates btn left');for(lz in rateothers){if(showall[lz].click)showall[lz].click();setTimeout(function(){if(showall[lz].click)showall[lz].click()},5000)}},3000)};
function clickface(){if(corr[0]){corr[0].click();setTimeout(clickface,800)}else{q++;document.getElementById('translations-nav').getElementsByTagName('a')[0].click();setTimeout(verifyStart,6000)}}
function gotothere(){document.getElementsByClassName('article-data')[q].getElementsByTagName('a')[0].click();setTimeout(startRating,10000)}
function startRating(){rateotheropen();corr=document.getElementsByClassName('rate-option rate-correct unselected has-twipsy');setTimeout(clickface,5000)}
function verifyStart(){if(!document.getElementsByClassName('article-data')[q]){scrollgiTo(0,900000);setTimeout(verifyStart,5000)}else{gotothere()}}
verifyStart();