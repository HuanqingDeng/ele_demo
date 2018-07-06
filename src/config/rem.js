(function(doc,win){
    var docEl=doc.documentElement,
    resizeEvt='orientationchange' in window ? 'orientationchange':'resize',
    recalc=function(){
        var clientWidth=docEl.clientWidth;
        if(!clientWidth) return 
        console.log(clientWidth);
        
        docEl.style.fontSize=20*(clientWidth/320)+'px';
        //先给予html元素一个font-size，然后我们所有的rem就根据这个font-size来计算/20px=1rem
    };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    win.addEventListener('DOMContentLoaded',recalc,false);
})(document,window)
