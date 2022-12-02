const x=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}};x();const a=1e3,y=1e3,h=.01,m=1;class r{constructor(t,e){this.x=t,this.y=e}static add(t,e){return new r(t.x+e.x,t.y+e.y)}static minus(t,e){return new r(t.x-e.x,t.y-e.y)}static addScalar(t){return new r(this.x+t,this.y+t)}static mult(t,e){return new r(t.x*e.x,t.y*e.y)}static length(t){return Math.sqrt(t.x*t.x+t.y*t.y)}}class g{constructor(t,e,s="#000000"){this.coord=t,this.massa=e,this.velocity=new r(0,0),this.color=s,this.family=0}setCoord2(t){t.x>y?this.velocity.x=-this.velocity.x*.9:t.x<0&&(this.velocity.x=-this.velocity.x*.9),this.coord.x=t.x,t.y>a?this.velocity.y=-this.velocity.y*.9:t.y<0&&(this.velocity.y=-this.velocity.y*.9),this.coord.y=t.y}setCoord(t){t.x>MAX_DOT_X?this.coord.x=t.x-MAX_DOT_X:t.x<0?this.coord.x=MAX_DOT_X-t.x:this.coord.x=t.x,t.y>MAX_DOT_Y?this.coord.y=t.y-MAX_DOT_Y:t.y<0?this.coord.y=MAX_DOT_Y-t.y:this.coord.y=t.y}setCoord3(t){this.coord.x=t.x,this.coord.y=t.y}static draw(t,e,s){t.beginPath(),t.strokeStyle=e.color,t.moveTo(e.coord.x,this.y),t.arc(e.coord.x-s.x,e.coord.y-s.y,3,0,Math.PI*2,!1),t.closePath(),t.stroke()}}class d{constructor(t){this.bodyList=t.generate(),this.centerMassVector=new r(0,0)}getCenterMassVector(){const t=new r(0,0);for(let e=0;e<this.bodyList.length;e++)t.x+=this.bodyList[e].coord.x,t.y+=this.bodyList[e].coord.y;return t.x=t.x/this.bodyList.length-y/2,t.y=t.y/this.bodyList.length-a/2,t}calc(t){for(let e=0;e<t;e++)for(let s=0;s<this.bodyList.length;s++)this.calcBody(this.bodyList[s],s);this.centerMassVector=this.getCenterMassVector()}static draw(t,e,s){for(let o=0;o<s.length;o++)g.draw(t,s[o],e)}calcBody(t,e){for(let s=0;s<this.bodyList.length;s++)if(s!=e){const o=this.bodyList[s],i=d.getF(t,o);t.velocity=r.add(t.velocity,i)}for(let s=0;s<this.bodyList.length;s++)t.setCoord3(r.add(t.velocity,t.coord))}static getF(t,e){const s=new r(0,0),o=()=>t.family==e.family?m:1,i=r.minus(e.coord,t.coord),n=r.length(i);return s.x=h*o()*i.x/(n*n),s.y=h*o()*i.y/(n*n),s}}const f=new Worker("/dist/worker.f545df5a.js",{type:"module"}),l=document.getElementById("canvas").getContext("2d");function w(){window.requestAnimationFrame(u)}function u(){f.postMessage("next")}f.onmessage=c=>{l.globalCompositeOperation="destination-over",l.clearRect(0,0,y,a),l.restore(),d.draw(l,c.data.centerMassVector,c.data.data),window.requestAnimationFrame(u)};w();
//# sourceMappingURL=index-afab5f36.js.map
