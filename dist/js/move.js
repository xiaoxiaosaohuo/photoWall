function getStyle(t,e){return t.currentStyle?t.currentStyle[e]:getComputedStyle(t,!1)[e]}function startMove(t,e,r){clearInterval(t.timer),t.timer=setInterval(function(){var a=!0;for(var l in e){var n=0;n="opacity"==l?parseInt(100*parseFloat(getStyle(t,l))):parseInt(getStyle(t,l));var i=(e[l]-n)/8;i=i>0?Math.ceil(i):Math.floor(i),n!=e[l]&&(a=!1),"opacity"==l?(t.style.filter="alpha(opacity:"+(n+i)+")",t.style.opacity=(n+i)/100):t.style[l]=n+i+"px"}a&&(clearInterval(t.timer),r&&r())},30)}