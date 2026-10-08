"use strict";(()=>{var Ua="186";var mc=0,Pl=1,gc=2;var ur=1,_c=2,ys=3,_i=0,Kt=1,ln=2,Vn=0,xs=1,Rl=2,Il=3,Ll=4,vc=5;var Ii=100,yc=101,xc=102,bc=103,Sc=104,Mc=200,Tc=201,wc=202,Ec=203,Dl=204,Nl=205,Ac=206,Cc=207,Pc=208,Rc=209,Ic=210,Lc=211,Dc=212,Nc=213,Uc=214,aa=0,oa=1,la=2,as=3,ha=4,ca=5,ua=6,da=7,Ul=0,Fc=1,kc=2,wn=0,Fl=1,kl=2,Ol=3,Bl=4,zl=5,Hl=6,Vl=7;var Gl=300,vi=301,Li=302,Fa=303,ka=304,dr=306,os=1e3,Fn=1001,fa=1002,Bt=1003,Oc=1004;var fr=1005;var Vt=1006,Oa=1007;var yi=1008;var tn=1009,Wl=1010,Xl=1011,bs=1012,Ba=1013,En=1014,pn=1015,An=1016,za=1017,Ha=1018,Ss=1020,ql=35902,Yl=35899,Zl=1021,Jl=1022,mn=1023,On=1026,xi=1027,Va=1028,Ga=1029,bi=1030,Wa=1031;var Xa=1033,pr=33776,mr=33777,gr=33778,_r=33779,qa=35840,Ya=35841,Za=35842,Ja=35843,$a=36196,Ka=37492,ja=37496,Qa=37488,eo=37489,vr=37490,to=37491,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,ho=37815,co=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,_o=36492,vo=36494,yo=36495,xo=36283,bo=36284,yr=36285,So=36286;var Hs=2300,pa=2301,sa=2302,xl=2303,bl=2400,Sl=2401,Ml=2402;var Bc=3200;var Mo=0,zc=1,ti="",Lt="srgb",Vs="srgb-linear",Gs="linear",pt="srgb";var ra=7680;var Hc=519,Vc=512,Gc=513,Wc=514,To=515,Xc=516,qc=517,wo=518,Yc=519,$l=35044;var Kl="300 es",Mn=2e3,ls=2001;function Sd(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Md(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ws(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Zc(){let e=Ws("canvas");return e.style.display="block",e}var Vh={},hs=null;function Xs(...e){let t="THREE."+e.shift();hs?hs("log",t,...e):console.log(t,...e)}function Jc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ge(...e){e=Jc(e);let t="THREE."+e.shift();if(hs)hs("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ve(...e){e=Jc(e);let t="THREE."+e.shift();if(hs)hs("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ci(...e){let t=e.join(" ");t in Vh||(Vh[t]=!0,Ge(...e))}function $c(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Kc={[aa]:oa,[la]:ua,[ha]:da,[as]:ca,[oa]:aa,[ua]:la,[da]:ha,[ca]:as},Bn=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $o=Math.PI/180,qs=180/Math.PI;function ui(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[e&255]+Xt[e>>8&255]+Xt[e>>16&255]+Xt[e>>24&255]+"-"+Xt[t&255]+Xt[t>>8&255]+"-"+Xt[t>>16&15|64]+Xt[t>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function Td(e,t){return(e%t+t)%t}function Ko(e,t,n){return(1-n)*e+n*t}function Un(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qe=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ct(this.x,t.x,n.x),this.y=ct(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ct(this.x,t,n),this.y=ct(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ct(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,c){let l=i[s+0],h=i[s+1],d=i[s+2],p=i[s+3],f=r[a+0],g=r[a+1],_=r[a+2],x=r[a+3];if(p!==x||l!==f||h!==g||d!==_){let u=l*f+h*g+d*_+p*x;u<0&&(f=-f,g=-g,_=-_,x=-x,u=-u);let m=1-c;if(u<.9995){let E=Math.acos(u),N=Math.sin(E);m=Math.sin(m*E)/N,c=Math.sin(c*E)/N,l=l*m+f*c,h=h*m+g*c,d=d*m+_*c,p=p*m+x*c}else{l=l*m+f*c,h=h*m+g*c,d=d*m+_*c,p=p*m+x*c;let E=1/Math.sqrt(l*l+h*h+d*d+p*p);l*=E,h*=E,d*=E,p*=E}}t[n]=l,t[n+1]=h,t[n+2]=d,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,r,a){let c=i[s],l=i[s+1],h=i[s+2],d=i[s+3],p=r[a],f=r[a+1],g=r[a+2],_=r[a+3];return t[n]=c*_+d*p+l*g-h*f,t[n+1]=l*_+d*f+h*p-c*g,t[n+2]=h*_+d*g+c*f-l*p,t[n+3]=d*_-c*p-l*f-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,a=t._order,c=Math.cos,l=Math.sin,h=c(i/2),d=c(s/2),p=c(r/2),f=l(i/2),g=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*d*p+h*g*_,this._y=h*g*p-f*d*_,this._z=h*d*_+f*g*p,this._w=h*d*p-f*g*_;break;case"YXZ":this._x=f*d*p+h*g*_,this._y=h*g*p-f*d*_,this._z=h*d*_-f*g*p,this._w=h*d*p+f*g*_;break;case"ZXY":this._x=f*d*p-h*g*_,this._y=h*g*p+f*d*_,this._z=h*d*_+f*g*p,this._w=h*d*p-f*g*_;break;case"ZYX":this._x=f*d*p-h*g*_,this._y=h*g*p+f*d*_,this._z=h*d*_-f*g*p,this._w=h*d*p+f*g*_;break;case"YZX":this._x=f*d*p+h*g*_,this._y=h*g*p+f*d*_,this._z=h*d*_-f*g*p,this._w=h*d*p-f*g*_;break;case"XZY":this._x=f*d*p-h*g*_,this._y=h*g*p-f*d*_,this._z=h*d*_+f*g*p,this._w=h*d*p+f*g*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],c=n[5],l=n[9],h=n[2],d=n[6],p=n[10],f=i+c+p;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-h)*g,this._z=(a-s)*g}else if(i>c&&i>p){let g=2*Math.sqrt(1+i-c-p);this._w=(d-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+h)/g}else if(c>p){let g=2*Math.sqrt(1+c-i-p);this._w=(r-h)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+p-i-c);this._w=(a-s)/g,this._x=(r+h)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ct(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,c=n._x,l=n._y,h=n._z,d=n._w;return this._x=i*d+a*c+s*h-r*l,this._y=s*d+a*l+r*c-i*h,this._z=r*d+a*h+i*l-s*c,this._w=a*d-i*c-s*l-r*h,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,c=this.dot(t);c<0&&(i=-i,s=-s,r=-r,a=-a,c=-c);let l=1-n;if(c<.9995){let h=Math.acos(c),d=Math.sin(h);l=Math.sin(l*h)/d,n=Math.sin(n*h)/d,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Gh.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,c=t.z,l=t.w,h=2*(a*s-c*i),d=2*(c*n-r*s),p=2*(r*i-a*n);return this.x=n+l*h+a*p-c*d,this.y=i+l*d+c*h-r*p,this.z=s+l*p+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ct(this.x,t.x,n.x),this.y=ct(this.y,t.y,n.y),this.z=ct(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ct(this.x,t,n),this.y=ct(this.y,t,n),this.z=ct(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,a=n.x,c=n.y,l=n.z;return this.x=s*l-r*c,this.y=r*a-i*l,this.z=i*c-s*a,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jo.copy(this).projectOnVector(t),this.sub(jo)}reflect(t){return this.sub(jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ct(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jo=new W,Gh=new zn,Ye=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,r,a,c,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,c,l,h)}set(t,n,i,s,r,a,c,l,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=c,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],c=i[3],l=i[6],h=i[1],d=i[4],p=i[7],f=i[2],g=i[5],_=i[8],x=s[0],u=s[3],m=s[6],E=s[1],N=s[4],M=s[7],T=s[2],w=s[5],P=s[8];return r[0]=a*x+c*E+l*T,r[3]=a*u+c*N+l*w,r[6]=a*m+c*M+l*P,r[1]=h*x+d*E+p*T,r[4]=h*u+d*N+p*w,r[7]=h*m+d*M+p*P,r[2]=f*x+g*E+_*T,r[5]=f*u+g*N+_*w,r[8]=f*m+g*M+_*P,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],c=t[5],l=t[6],h=t[7],d=t[8];return n*a*d-n*c*h-i*r*d+i*c*l+s*r*h-s*a*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],c=t[5],l=t[6],h=t[7],d=t[8],p=d*a-c*h,f=c*l-d*r,g=h*r-a*l,_=n*p+i*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=p*x,t[1]=(s*h-d*i)*x,t[2]=(c*i-s*a)*x,t[3]=f*x,t[4]=(d*n-s*l)*x,t[5]=(s*r-c*n)*x,t[6]=g*x,t[7]=(i*l-h*n)*x,t[8]=(a*n-i*r)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,c){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*c)+a+t,-s*h,s*l,-s*(-h*a+l*c)+c+n,0,0,1),this}scale(t,n){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qo.makeScale(t,n)),this}rotate(t){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qo.makeRotation(-t)),this}translate(t,n){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qo.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qo=new Ye,Wh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wd(){let e={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Vs]:{primaries:t,whitePoint:i,transfer:Gs,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:t,whitePoint:i,transfer:pt,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),e}var ht=wd();function jn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function rs(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Hi,ma=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hi===void 0&&(Hi=Ws("canvas")),Hi.width=t.width,Hi.height=t.height;let s=Hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Hi}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ws("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(jn(n[i]/255)*255):n[i]=jn(n[i]);return{data:n,width:t.width,height:t.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ed=0,cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,c=s.length;a<c;a++)s[a].isDataTexture?r.push(el(s[a].image)):r.push(el(s[a]))}else r=el(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function el(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ma.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var Ad=0,tl=new W,$t=class e extends Bn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Fn,s=Fn,r=Vt,a=yi,c=mn,l=tn,h=e.DEFAULT_ANISOTROPY,d=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ui(),this.name="",this.source=new cs(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tl).x}get height(){return this.source.getSize(tl).y}get depth(){return this.source.getSize(tl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Gl;$t.DEFAULT_ANISOTROPY=1;var Et=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,h=l[0],d=l[4],p=l[8],f=l[1],g=l[5],_=l[9],x=l[2],u=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-x)<.01&&Math.abs(_-u)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+x)<.1&&Math.abs(_+u)<.1&&Math.abs(h+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let N=(h+1)/2,M=(g+1)/2,T=(m+1)/2,w=(d+f)/4,P=(p+x)/4,o=(_+u)/4;return N>M&&N>T?N<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(N),s=w/i,r=P/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=o/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=o/r),this.set(i,s,r,n),this}let E=Math.sqrt((u-_)*(u-_)+(p-x)*(p-x)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(u-_)/E,this.y=(p-x)/E,this.z=(f-d)/E,this.w=Math.acos((h+g+m-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ct(this.x,t.x,n.x),this.y=ct(this.y,t.y,n.y),this.z=ct(this.z,t.z,n.z),this.w=ct(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ct(this.x,t,n),this.y=ct(this.y,t,n),this.z=ct(this.z,t,n),this.w=ct(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ga=class extends Bn{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,t,n),this.scissorTest=!1,this.viewport=new Et(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},r=new $t(s),a=i.count;for(let c=0;c<a;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new cs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends ga{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ys=class extends $t{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends $t{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var mt=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,r,a,c,l,h,d,p,f,g,_,x,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,c,l,h,d,p,f,g,_,x,u)}set(t,n,i,s,r,a,c,l,h,d,p,f,g,_,x,u){let m=this.elements;return m[0]=t,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=c,m[13]=l,m[2]=h,m[6]=d,m[10]=p,m[14]=f,m[3]=g,m[7]=_,m[11]=x,m[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=a*d,g=a*p,_=c*d,x=c*p;n[0]=l*d,n[4]=-l*p,n[8]=h,n[1]=g+_*h,n[5]=f-x*h,n[9]=-c*l,n[2]=x-f*h,n[6]=_+g*h,n[10]=a*l}else if(t.order==="YXZ"){let f=l*d,g=l*p,_=h*d,x=h*p;n[0]=f+x*c,n[4]=_*c-g,n[8]=a*h,n[1]=a*p,n[5]=a*d,n[9]=-c,n[2]=g*c-_,n[6]=x+f*c,n[10]=a*l}else if(t.order==="ZXY"){let f=l*d,g=l*p,_=h*d,x=h*p;n[0]=f-x*c,n[4]=-a*p,n[8]=_+g*c,n[1]=g+_*c,n[5]=a*d,n[9]=x-f*c,n[2]=-a*h,n[6]=c,n[10]=a*l}else if(t.order==="ZYX"){let f=a*d,g=a*p,_=c*d,x=c*p;n[0]=l*d,n[4]=_*h-g,n[8]=f*h+x,n[1]=l*p,n[5]=x*h+f,n[9]=g*h-_,n[2]=-h,n[6]=c*l,n[10]=a*l}else if(t.order==="YZX"){let f=a*l,g=a*h,_=c*l,x=c*h;n[0]=l*d,n[4]=x-f*p,n[8]=_*p+g,n[1]=p,n[5]=a*d,n[9]=-c*d,n[2]=-h*d,n[6]=g*p+_,n[10]=f-x*p}else if(t.order==="XZY"){let f=a*l,g=a*h,_=c*l,x=c*h;n[0]=l*d,n[4]=-p,n[8]=h*d,n[1]=f*p+x,n[5]=a*d,n[9]=g*p-_,n[2]=_*p-g,n[6]=c*d,n[10]=x*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cd,t,Pd)}lookAt(t,n,i){let s=this.elements;return nn.subVectors(t,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ai.crossVectors(i,nn),ai.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ai.crossVectors(i,nn)),ai.normalize(),Ur.crossVectors(nn,ai),s[0]=ai.x,s[4]=Ur.x,s[8]=nn.x,s[1]=ai.y,s[5]=Ur.y,s[9]=nn.y,s[2]=ai.z,s[6]=Ur.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],c=i[4],l=i[8],h=i[12],d=i[1],p=i[5],f=i[9],g=i[13],_=i[2],x=i[6],u=i[10],m=i[14],E=i[3],N=i[7],M=i[11],T=i[15],w=s[0],P=s[4],o=s[8],A=s[12],b=s[1],k=s[5],V=s[9],$=s[13],F=s[2],q=s[6],te=s[10],X=s[14],ae=s[3],ie=s[7],ne=s[11],le=s[15];return r[0]=a*w+c*b+l*F+h*ae,r[4]=a*P+c*k+l*q+h*ie,r[8]=a*o+c*V+l*te+h*ne,r[12]=a*A+c*$+l*X+h*le,r[1]=d*w+p*b+f*F+g*ae,r[5]=d*P+p*k+f*q+g*ie,r[9]=d*o+p*V+f*te+g*ne,r[13]=d*A+p*$+f*X+g*le,r[2]=_*w+x*b+u*F+m*ae,r[6]=_*P+x*k+u*q+m*ie,r[10]=_*o+x*V+u*te+m*ne,r[14]=_*A+x*$+u*X+m*le,r[3]=E*w+N*b+M*F+T*ae,r[7]=E*P+N*k+M*q+T*ie,r[11]=E*o+N*V+M*te+T*ne,r[15]=E*A+N*$+M*X+T*le,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],c=t[5],l=t[9],h=t[13],d=t[2],p=t[6],f=t[10],g=t[14],_=t[3],x=t[7],u=t[11],m=t[15],E=l*g-h*f,N=c*g-h*p,M=c*f-l*p,T=a*g-h*d,w=a*f-l*d,P=a*p-c*d;return n*(x*E-u*N+m*M)-i*(_*E-u*T+m*w)+s*(_*N-x*T+m*P)-r*(_*M-x*w+u*P)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10];return n*(a*d-c*h)-i*(r*d-c*l)+s*(r*h-a*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],c=t[5],l=t[6],h=t[7],d=t[8],p=t[9],f=t[10],g=t[11],_=t[12],x=t[13],u=t[14],m=t[15],E=n*c-i*a,N=n*l-s*a,M=n*h-r*a,T=i*l-s*c,w=i*h-r*c,P=s*h-r*l,o=d*x-p*_,A=d*u-f*_,b=d*m-g*_,k=p*u-f*x,V=p*m-g*x,$=f*m-g*u,F=E*$-N*V+M*k+T*b-w*A+P*o;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/F;return t[0]=(c*$-l*V+h*k)*q,t[1]=(s*V-i*$-r*k)*q,t[2]=(x*P-u*w+m*T)*q,t[3]=(f*w-p*P-g*T)*q,t[4]=(l*b-a*$-h*A)*q,t[5]=(n*$-s*b+r*A)*q,t[6]=(u*M-_*P-m*N)*q,t[7]=(d*P-f*M+g*N)*q,t[8]=(a*V-c*b+h*o)*q,t[9]=(i*b-n*V-r*o)*q,t[10]=(_*w-x*M+m*E)*q,t[11]=(p*M-d*w-g*E)*q,t[12]=(c*A-a*k-l*o)*q,t[13]=(n*k-i*A+s*o)*q,t[14]=(x*N-_*T-u*E)*q,t[15]=(d*T-p*N+f*E)*q,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,c=t.y,l=t.z,h=r*a,d=r*c;return this.set(h*a+i,h*c-s*l,h*l+s*c,0,h*c+s*l,d*c+i,d*l-s*a,0,h*l-s*c,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,a=n._y,c=n._z,l=n._w,h=r+r,d=a+a,p=c+c,f=r*h,g=r*d,_=r*p,x=a*d,u=a*p,m=c*p,E=l*h,N=l*d,M=l*p,T=i.x,w=i.y,P=i.z;return s[0]=(1-(x+m))*T,s[1]=(g+M)*T,s[2]=(_-N)*T,s[3]=0,s[4]=(g-M)*w,s[5]=(1-(f+m))*w,s[6]=(u+E)*w,s[7]=0,s[8]=(_+N)*P,s[9]=(u-E)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=Vi.set(s[0],s[1],s[2]).length(),c=Vi.set(s[4],s[5],s[6]).length(),l=Vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);let h=1/a,d=1/c,p=1/l;return yn.elements[0]*=h,yn.elements[1]*=h,yn.elements[2]*=h,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=p,yn.elements[9]*=p,yn.elements[10]*=p,n.setFromRotationMatrix(yn),i.x=a,i.y=c,i.z=l,this}makePerspective(t,n,i,s,r,a,c=Mn,l=!1){let h=this.elements,d=2*r/(n-t),p=2*r/(i-s),f=(n+t)/(n-t),g=(i+s)/(i-s),_,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(c===Mn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(c===ls)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,i,s,r,a,c=Mn,l=!1){let h=this.elements,d=2/(n-t),p=2/(i-s),f=-(n+t)/(n-t),g=-(i+s)/(i-s),_,x;if(l)_=1/(a-r),x=a/(a-r);else if(c===Mn)_=-2/(a-r),x=-(a+r)/(a-r);else if(c===ls)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=p,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Vi=new W,yn=new mt,Cd=new W(0,0,0),Pd=new W(1,1,1),ai=new W,Ur=new W,nn=new W,qh=new mt,Yh=new zn,Tn=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],c=s[8],l=s[1],h=s[5],d=s[9],p=s[2],f=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rd=0,Zh=new W,Gi=new zn,qn=new mt,Fr=new W,Ls=new W,Id=new W,Ld=new zn,Jh=new W(1,0,0),$h=new W(0,1,0),Kh=new W(0,0,1),jh={type:"added"},Dd={type:"removed"},Wi={type:"childadded",child:null},nl={type:"childremoved",child:null},Nt=class e extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new Tn,i=new zn,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ye}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Gi.setFromAxisAngle(t,n),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,n){return Gi.setFromAxisAngle(t,n),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,n){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Fr.copy(t):Fr.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ls,Fr,this.up):qn.lookAt(Fr,Ls,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(qn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Dd),nl.child=t,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){let p=l[h];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(r(t.materials,this.material[l]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(r(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),p=a(t.shapes),f=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(c){let l=[];for(let h in c){let d=c[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new W(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nd={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null,c=this._targetRay,l=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let u=n.getJointPose(x,i),m=this._getHandJoint(h,x);u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=u.radius),m.visible=u!==null}let d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],f=d.position.distanceTo(p.position),g=.02,_=.005;h.inputState.pinching&&f>g+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=g-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new kn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},kr={h:0,s:0,l:0};function il(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Qe=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Lt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ht.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ht.workingColorSpace){return this.r=t,this.g=n,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ht.workingColorSpace){if(t=Td(t,1),n=ct(n,0,1),i=ct(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=il(a,r,t+1/3),this.g=il(a,r,t),this.b=il(a,r,t-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(t,n=Lt){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],c=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ge("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Ge("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Lt){let i=jc[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Lt){return ht.workingToColorSpace(qt.copy(this),t),Math.round(ct(qt.r*255,0,255))*65536+Math.round(ct(qt.g*255,0,255))*256+Math.round(ct(qt.b*255,0,255))}getHexString(t=Lt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ht.workingColorSpace){ht.workingToColorSpace(qt.copy(this),n);let i=qt.r,s=qt.g,r=qt.b,a=Math.max(i,s,r),c=Math.min(i,s,r),l,h,d=(c+a)/2;if(c===a)l=0,h=0;else{let p=a-c;switch(h=d<=.5?p/(a+c):p/(2-a-c),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,n=ht.workingColorSpace){return ht.workingToColorSpace(qt.copy(this),n),t.r=qt.r,t.g=qt.g,t.b=qt.b,t}getStyle(t=Lt){ht.workingToColorSpace(qt.copy(this),t);let n=qt.r,i=qt.g,s=qt.b;return t!==Lt?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+n,oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(oi),t.getHSL(kr);let i=Ko(oi.h,kr.h,n),s=Ko(oi.s,kr.s,n),r=Ko(oi.l,kr.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Qe;Qe.NAMES=jc;var Zs=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Js=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},xn=new W,Yn=new W,sl=new W,Zn=new W,Xi=new W,qi=new W,Qh=new W,rl=new W,al=new W,ol=new W,ll=new Et,hl=new Et,cl=new Et,Kn=class e{constructor(t=new W,n=new W,i=new W){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),xn.subVectors(t,n),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){xn.subVectors(s,n),Yn.subVectors(i,n),sl.subVectors(t,n);let a=xn.dot(xn),c=xn.dot(Yn),l=xn.dot(sl),h=Yn.dot(Yn),d=Yn.dot(sl),p=a*h-c*c;if(p===0)return r.set(0,0,0),null;let f=1/p,g=(h*l-c*d)*f,_=(a*d-c*l)*f;return r.set(1-g-_,_,g)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,n,i,s,r,a,c,l){return this.getBarycoord(t,n,i,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(c,Zn.z),l)}static getInterpolatedAttribute(t,n,i,s,r,a){return ll.setScalar(0),hl.setScalar(0),cl.setScalar(0),ll.fromBufferAttribute(t,n),hl.fromBufferAttribute(t,i),cl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ll,r.x),a.addScaledVector(hl,r.y),a.addScaledVector(cl,r.z),a}static isFrontFacing(t,n,i,s){return xn.subVectors(i,n),Yn.subVectors(t,n),xn.cross(Yn).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),xn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,a,c;Xi.subVectors(s,i),qi.subVectors(r,i),rl.subVectors(t,i);let l=Xi.dot(rl),h=qi.dot(rl);if(l<=0&&h<=0)return n.copy(i);al.subVectors(t,s);let d=Xi.dot(al),p=qi.dot(al);if(d>=0&&p<=d)return n.copy(s);let f=l*p-d*h;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Xi,a);ol.subVectors(t,r);let g=Xi.dot(ol),_=qi.dot(ol);if(_>=0&&g<=_)return n.copy(r);let x=g*h-l*_;if(x<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(i).addScaledVector(qi,c);let u=d*_-g*p;if(u<=0&&p-d>=0&&g-_>=0)return Qh.subVectors(r,s),c=(p-d)/(p-d+(g-_)),n.copy(s).addScaledVector(Qh,c);let m=1/(u+x+f);return a=x*m,c=f*m,n.copy(i).addScaledVector(Xi,a).addScaledVector(qi,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hn=class{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(bn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=bn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=r.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),Br.subVectors(this.max,Ds),Yi.subVectors(t.a,Ds),Zi.subVectors(t.b,Ds),Ji.subVectors(t.c,Ds),li.subVectors(Zi,Yi),hi.subVectors(Ji,Zi),Ti.subVectors(Yi,Ji);let n=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Ti.z,Ti.y,li.z,0,-li.x,hi.z,0,-hi.x,Ti.z,0,-Ti.x,-li.y,li.x,0,-hi.y,hi.x,0,-Ti.y,Ti.x,0];return!ul(n,Yi,Zi,Ji,Br)||(n=[1,0,0,0,1,0,0,0,1],!ul(n,Yi,Zi,Ji,Br))?!1:(zr.crossVectors(li,hi),n=[zr.x,zr.y,zr.z],ul(n,Yi,Zi,Ji,Br))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new W,new W,new W,new W,new W,new W,new W,new W],bn=new W,Or=new Hn,Yi=new W,Zi=new W,Ji=new W,li=new W,hi=new W,Ti=new W,Ds=new W,Br=new W,zr=new W,wi=new W;function ul(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){wi.fromArray(e,r);let c=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),h=n.dot(wi),d=i.dot(wi);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>c)return!1}return!0}var It=new W,Hr=new qe,Ud=0,Qt=class extends Bn{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=$l,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hr.fromBufferAttribute(this,n),Hr.applyMatrix3(t),this.setXY(n,Hr.x,Hr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(t),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(t),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(t),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(t),this.setXYZ(n,It.x,It.y,It.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Un(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=vt(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Un(n,this.array)),n}setX(t,n){return this.normalized&&(n=vt(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Un(n,this.array)),n}setY(t,n){return this.normalized&&(n=vt(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Un(n,this.array)),n}setZ(t,n){return this.normalized&&(n=vt(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Un(n,this.array)),n}setW(t,n){return this.normalized&&(n=vt(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var $s=class extends Qt{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Ks=class extends Qt{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ot=class extends Qt{constructor(t,n,i){super(new Float32Array(t),n,i)}},Fd=new Hn,Ns=new W,dl=new W,di=class{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Fd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let n=Ns.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(dl)),this.expandByPoint(Ns.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kd=0,dn=new mt,fl=new Nt,$i=new W,sn=new Hn,Us=new Hn,kt=new W,rn=class e extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?Ks:$s)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,n,i){return dn.makeTranslation(t,n,i),this.applyMatrix4(dn),this}scale(t,n,i){return dn.makeScale(t,n,i),this.applyMatrix4(dn),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){let c=n[r];Us.setFromBufferAttribute(c),this.morphTargetsRelative?(kt.addVectors(sn.min,Us.min),sn.expandByPoint(kt),kt.addVectors(sn.max,Us.max),sn.expandByPoint(kt)):(sn.expandByPoint(Us.min),sn.expandByPoint(Us.max))}sn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)kt.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(kt));if(n)for(let r=0,a=n.length;r<a;r++){let c=n[r],l=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)kt.fromBufferAttribute(c,h),l&&($i.fromBufferAttribute(t,h),kt.add($i)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let c=[],l=[];for(let o=0;o<i.count;o++)c[o]=new W,l[o]=new W;let h=new W,d=new W,p=new W,f=new qe,g=new qe,_=new qe,x=new W,u=new W;function m(o,A,b){h.fromBufferAttribute(i,o),d.fromBufferAttribute(i,A),p.fromBufferAttribute(i,b),f.fromBufferAttribute(r,o),g.fromBufferAttribute(r,A),_.fromBufferAttribute(r,b),d.sub(h),p.sub(h),g.sub(f),_.sub(f);let k=1/(g.x*_.y-_.x*g.y);isFinite(k)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(p,-g.y).multiplyScalar(k),u.copy(p).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(k),c[o].add(x),c[A].add(x),c[b].add(x),l[o].add(u),l[A].add(u),l[b].add(u))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let o=0,A=E.length;o<A;++o){let b=E[o],k=b.start,V=b.count;for(let $=k,F=k+V;$<F;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}let N=new W,M=new W,T=new W,w=new W;function P(o){T.fromBufferAttribute(s,o),w.copy(T);let A=c[o];N.copy(A),N.sub(T.multiplyScalar(T.dot(A))).normalize(),M.crossVectors(w,A);let k=M.dot(l[o])<0?-1:1;a.setXYZW(o,N.x,N.y,N.z,k)}for(let o=0,A=E.length;o<A;++o){let b=E[o],k=b.start,V=b.count;for(let $=k,F=k+V;$<F;$+=3)P(t.getX($+0)),P(t.getX($+1)),P(t.getX($+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Qt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);let s=new W,r=new W,a=new W,c=new W,l=new W,h=new W,d=new W,p=new W;if(t)for(let f=0,g=t.count;f<g;f+=3){let _=t.getX(f+0),x=t.getX(f+1),u=t.getX(f+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),a.fromBufferAttribute(n,u),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,u),c.add(d),l.add(d),h.add(d),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(u,h.x,h.y,h.z)}else for(let f=0,g=n.count;f<g;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)kt.fromBufferAttribute(t,n),kt.normalize(),t.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function t(c,l){let h=c.array,d=c.itemSize,p=c.normalized,f=new h.constructor(l.length*d),g=0,_=0;for(let x=0,u=l.length;x<u;x++){c.isInterleavedBufferAttribute?g=l[x]*c.data.stride+c.offset:g=l[x]*d;for(let m=0;m<d;m++)f[_++]=h[g++]}return new Qt(f,d,p)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let c in s){let l=s[c],h=t(l,i);n.setAttribute(c,h)}let r=this.morphAttributes;for(let c in r){let l=[],h=r[c];for(let d=0,p=h.length;d<p;d++){let f=h[d],g=t(f,i);l.push(g)}n.morphAttributes[c]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let c=0,l=a.length;c<l;c++){let h=a[c];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],d=[];for(let p=0,f=h.length;p<f;p++){let g=h[p];d.push(g.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(n))}let r=t.morphAttributes;for(let h in r){let d=[],p=r[h];for(let f=0,g=p.length;f<g;f++)d.push(p[f].clone(n));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},va=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=$l,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}},Jt=new W,js=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(t),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(t),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(t),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Un(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Un(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Un(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Un(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Un(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Xs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Qt(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Xs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pl=new W,Od=new W,Bd=new Ye,Sn=class{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=pl.subVectors(i,n).cross(Od.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(pl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||Bd.getNormalMatrix(t),s=this.coplanarPoint(pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zd=0,Qn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=xs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Nl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let c in r){let l=r[c];delete l.metadata,a.push(l)}return a}if(n){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Sn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pi=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ki,Fs=new W,ji=new W,Qi=new W,es=new qe,ks=new qe,Qc=new mt,Vr=new W,Os=new W,Gr=new W,ec=new qe,ml=new qe,tc=new qe,fs=class extends Nt{constructor(t=new Pi){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new rn;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new va(n,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new js(i,3,0,!1)),Ki.setAttribute("uv",new js(i,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new qe(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,n){t.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Qc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Qi.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Wr(Vr.set(-.5,-.5,0),Qi,a,ji,s,r),Wr(Os.set(.5,-.5,0),Qi,a,ji,s,r),Wr(Gr.set(.5,.5,0),Qi,a,ji,s,r),ec.set(0,0),ml.set(1,0),tc.set(1,1);let c=t.ray.intersectTriangle(Vr,Os,Gr,!1,Fs);if(c===null&&(Wr(Os.set(-.5,.5,0),Qi,a,ji,s,r),ml.set(0,1),c=t.ray.intersectTriangle(Vr,Gr,Os,!1,Fs),c===null))return;let l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||n.push({distance:l,point:Fs.clone(),uv:Kn.getInterpolation(Fs,Vr,Os,Gr,ec,ml,tc,new qe),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Wr(e,t,n,i,s,r){es.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(ks.x=r*es.x-s*es.y,ks.y=s*es.x+r*es.y):ks.copy(es),e.copy(t),e.x+=ks.x,e.y+=ks.y,e.applyMatrix4(Qc)}var $n=new W,gl=new W,Xr=new W,qr=new W,Qs=class{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=$n.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,n),$n.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){gl.copy(t).add(n).multiplyScalar(.5),Xr.copy(n).sub(t).normalize(),qr.copy(this.origin).sub(gl);let r=t.distanceTo(n)*.5,a=-this.direction.dot(Xr),c=qr.dot(this.direction),l=-qr.dot(Xr),h=qr.lengthSq(),d=Math.abs(1-a*a),p,f,g,_;if(d>0)if(p=a*l-c,f=a*c-l,_=r*d,p>=0)if(f>=-_)if(f<=_){let x=1/d;p*=x,f*=x,g=p*(p+a*f+2*c)+f*(a*p+f+2*l)+h}else f=r,p=Math.max(0,-(a*f+c)),g=-p*p+f*(f+2*l)+h;else f=-r,p=Math.max(0,-(a*f+c)),g=-p*p+f*(f+2*l)+h;else f<=-_?(p=Math.max(0,-(-a*r+c)),f=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+f*(f+2*l)+h):f<=_?(p=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+h):(p=Math.max(0,-(a*r+c)),f=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+f*(f+2*l)+h);else f=a>0?-r:r,p=Math.max(0,-(a*f+c)),g=-p*p+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(gl).addScaledVector(Xr,f),g}intersectSphere(t,n){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);let i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,n):this.at(c,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,c,l,h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(c=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(c=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||c>s)||((c>i||i!==i)&&(i=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,n,i,s,r){let a=this.origin,c=this.direction,l=c.x,h=c.y,d=c.z,p=t.x-a.x,f=t.y-a.y,g=t.z-a.z,_=n.x-a.x,x=n.y-a.y,u=n.z-a.z,m=i.x-a.x,E=i.y-a.y,N=i.z-a.z,M=Math.abs(l),T=Math.abs(h),w=Math.abs(d),P,o,A,b,k,V,$,F,q,te,X,ae;if(M>=T&&M>=w?(A=l,V=p,q=_,ae=m,l>=0?(P=h,o=d,b=f,k=g,$=x,F=u,te=E,X=N):(P=d,o=h,b=g,k=f,$=u,F=x,te=N,X=E)):T>=w?(A=h,V=f,q=x,ae=E,h>=0?(P=d,o=l,b=g,k=p,$=u,F=_,te=N,X=m):(P=l,o=d,b=p,k=g,$=_,F=u,te=m,X=N)):(A=d,V=g,q=u,ae=N,d>=0?(P=l,o=h,b=p,k=f,$=_,F=x,te=m,X=E):(P=h,o=l,b=f,k=p,$=x,F=_,te=E,X=m)),A===0)return null;let ie=P/A,ne=o/A,le=1/A,Ae=b-ie*V,_e=k-ne*V,$e=$-ie*q,st=F-ne*q,at=te-ie*ae,G=X-ne*ae,re=at*st-G*$e,ge=Ae*G-_e*at,J=$e*_e-st*Ae;if(s){if(re<0||ge<0||J<0)return null}else if((re<0||ge<0||J<0)&&(re>0||ge>0||J>0))return null;let ce=re+ge+J;if(ce===0)return null;let Me=le*(re*V+ge*q+J*ae);return(ce>0?Me<0:Me>0)?null:this.at(Me/ce,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nc=new mt,Ei=new Qs,Yr=new di,ic=new W,Zr=new W,Jr=new W,$r=new W,_l=new W,Kr=new W,sc=new W,jr=new W,Ze=class extends Nt{constructor(t=new rn,n=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){Kr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let d=c[l],p=r[l];d!==0&&(_l.fromBufferAttribute(p,t),a?Kr.addScaledVector(_l,d):Kr.addScaledVector(_l.sub(n),d))}n.add(Kr)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Yr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Yr,ic)===null||Ei.origin.distanceToSquared(ic)>(t.far-t.near)**2))&&(nc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(nc),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ei)))}_computeIntersections(t,n,i){let s,r=this.geometry,a=this.material,c=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,f=r.groups,g=r.drawRange;if(c!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let u=f[_],m=a[u.materialIndex],E=Math.max(u.start,g.start),N=Math.min(c.count,Math.min(u.start+u.count,g.start+g.count));for(let M=E,T=N;M<T;M+=3){let w=c.getX(M),P=c.getX(M+1),o=c.getX(M+2);s=Qr(this,m,t,i,h,d,p,w,P,o),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,n.push(s))}}else{let _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let u=_,m=x;u<m;u+=3){let E=c.getX(u),N=c.getX(u+1),M=c.getX(u+2);s=Qr(this,a,t,i,h,d,p,E,N,M),s&&(s.faceIndex=Math.floor(u/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let u=f[_],m=a[u.materialIndex],E=Math.max(u.start,g.start),N=Math.min(l.count,Math.min(u.start+u.count,g.start+g.count));for(let M=E,T=N;M<T;M+=3){let w=M,P=M+1,o=M+2;s=Qr(this,m,t,i,h,d,p,w,P,o),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,n.push(s))}}else{let _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let u=_,m=x;u<m;u+=3){let E=u,N=u+1,M=u+2;s=Qr(this,a,t,i,h,d,p,E,N,M),s&&(s.faceIndex=Math.floor(u/3),n.push(s))}}}};function Hd(e,t,n,i,s,r,a,c){let l;if(t.side===Kt?l=i.intersectTriangle(a,r,s,!0,c):l=i.intersectTriangle(s,r,a,t.side===_i,c),l===null)return null;jr.copy(c),jr.applyMatrix4(e.matrixWorld);let h=n.ray.origin.distanceTo(jr);return h<n.near||h>n.far?null:{distance:h,point:jr.clone(),object:e}}function Qr(e,t,n,i,s,r,a,c,l,h){e.getVertexPosition(c,Zr),e.getVertexPosition(l,Jr),e.getVertexPosition(h,$r);let d=Hd(e,t,n,i,Zr,Jr,$r,sc);if(d){let p=new W;Kn.getBarycoord(sc,Zr,Jr,$r,p),s&&(d.uv=Kn.getInterpolatedAttribute(s,c,l,h,p,new qe)),r&&(d.uv1=Kn.getInterpolatedAttribute(r,c,l,h,p,new qe)),a&&(d.normal=Kn.getInterpolatedAttribute(a,c,l,h,p,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a:c,b:l,c:h,normal:new W,materialIndex:0};Kn.getNormal(Zr,Jr,$r,f.normal),d.face=f,d.barycoord=p}return d}var er=class extends $t{constructor(t=null,n=1,i=1,s,r,a,c,l,h=Bt,d=Bt,p,f){super(null,a,c,l,h,d,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class extends Qt{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ts=new mt,rc=new mt,ea=[],ac=new Hn,Vd=new mt,Bs=new Ze,zs=new di,ps=class extends Ze{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vd)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ts),ac.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(ac)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ts),zs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(zs)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let c=0;c<i.length;c++)i[c]=s[a+c]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(i),t.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),rc.multiplyMatrices(i,ts),Bs.matrixWorld=rc,Bs.raycast(t,ea);for(let a=0,c=ea.length;a<c;a++){let l=ea[a];l.instanceId=r,l.object=this,n.push(l)}ea.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new er(new Float32Array(s*this.count),s,this.count,Va,pn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<i.length;h++)a+=i[h];let c=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=c,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ai=new di,Gd=new qe(.5,.5),ta=new W,ms=class{constructor(t=new Sn,n=new Sn,i=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){let c=this.planes;return c[0].copy(t),c[1].copy(n),c[2].copy(i),c[3].copy(s),c[4].copy(r),c[5].copy(a),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Mn,i=!1){let s=this.planes,r=t.elements,a=r[0],c=r[1],l=r[2],h=r[3],d=r[4],p=r[5],f=r[6],g=r[7],_=r[8],x=r[9],u=r[10],m=r[11],E=r[12],N=r[13],M=r[14],T=r[15];if(s[0].setComponents(h-a,g-d,m-_,T-E).normalize(),s[1].setComponents(h+a,g+d,m+_,T+E).normalize(),s[2].setComponents(h+c,g+p,m+x,T+N).normalize(),s[3].setComponents(h-c,g-p,m-x,T-N).normalize(),i)s[4].setComponents(l,f,u,M).normalize(),s[5].setComponents(h-l,g-f,m-u,T-M).normalize();else if(s[4].setComponents(h-l,g-f,m-u,T-M).normalize(),n===Mn)s[5].setComponents(h+l,g+f,m+u,T+M).normalize();else if(n===ls)s[5].setComponents(l,f,u,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);let n=Gd.distanceTo(t.center);return Ai.radius=.7071067811865476+n,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(ta.x=s.normal.x>0?t.max.x:t.min.x,ta.y=s.normal.y>0?t.max.y:t.min.y,ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends $t{constructor(t=[],n=vi,i,s,r,a,c,l,h,d){super(t,n,i,s,r,a,c,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ei=class extends $t{constructor(t,n,i,s,r,a,c,l,h){super(t,n,i,s,r,a,c,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends $t{constructor(t,n,i=En,s,r,a,c=Bt,l=Bt,h,d=On,p=1){if(d!==On&&d!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:p};super(f,s,r,a,c,l,d,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},ya=class extends fi{constructor(t,n=En,i=vi,s,r,a=Bt,c=Bt,l,h=On){let d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,n,i,s,r,a,c,l,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ir=class extends $t{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},At=class e extends rn{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let c=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],d=[],p=[],f=0,g=0;_("z","y","x",-1,-1,i,n,t,a,r,0),_("z","y","x",1,-1,i,n,-t,a,r,1),_("x","z","y",1,1,t,i,n,s,a,2),_("x","z","y",1,-1,t,i,-n,s,a,3),_("x","y","z",1,-1,t,n,i,s,r,4),_("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(p,2));function _(x,u,m,E,N,M,T,w,P,o,A){let b=M/P,k=T/o,V=M/2,$=T/2,F=w/2,q=P+1,te=o+1,X=0,ae=0,ie=new W;for(let ne=0;ne<te;ne++){let le=ne*k-$;for(let Ae=0;Ae<q;Ae++){let _e=Ae*b-V;ie[x]=_e*E,ie[u]=le*N,ie[m]=F,h.push(ie.x,ie.y,ie.z),ie[x]=0,ie[u]=0,ie[m]=w>0?1:-1,d.push(ie.x,ie.y,ie.z),p.push(Ae/P),p.push(1-ne/o),X+=1}}for(let ne=0;ne<o;ne++)for(let le=0;le<P;le++){let Ae=f+le+q*ne,_e=f+le+q*(ne+1),$e=f+(le+1)+q*(ne+1),st=f+(le+1)+q*ne;l.push(Ae,_e,st),l.push(_e,$e,st),ae+=6}c.addGroup(g,ae,A),g+=ae,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ri=class e extends rn{constructor(t=1,n=1,i=1,s=32,r=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:c,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],p=[],f=[],g=[],_=0,x=[],u=i/2,m=0;E(),a===!1&&(t>0&&N(!0),n>0&&N(!1)),this.setIndex(d),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(g,2));function E(){let M=new W,T=new W,w=0,P=(n-t)/i;for(let o=0;o<=r;o++){let A=[],b=o/r,k=b*(n-t)+t;for(let V=0;V<=s;V++){let $=V/s,F=$*l+c,q=Math.sin(F),te=Math.cos(F);T.x=k*q,T.y=-b*i+u,T.z=k*te,p.push(T.x,T.y,T.z),M.set(q,P,te).normalize(),f.push(M.x,M.y,M.z),g.push($,1-b),A.push(_++)}x.push(A)}for(let o=0;o<s;o++)for(let A=0;A<r;A++){let b=x[A][o],k=x[A+1][o],V=x[A+1][o+1],$=x[A][o+1];(t>0||A!==0)&&(d.push(b,k,$),w+=3),(n>0||A!==r-1)&&(d.push(k,V,$),w+=3)}h.addGroup(m,w,0),m+=w}function N(M){let T=_,w=new qe,P=new W,o=0,A=M===!0?t:n,b=M===!0?1:-1;for(let V=1;V<=s;V++)p.push(0,u*b,0),f.push(0,b,0),g.push(.5,.5),_++;let k=_;for(let V=0;V<=s;V++){let F=V/s*l+c,q=Math.cos(F),te=Math.sin(F);P.x=A*te,P.y=u*b,P.z=A*q,p.push(P.x,P.y,P.z),f.push(0,b,0),w.x=q*.5+.5,w.y=te*.5*b+.5,g.push(w.x,w.y),_++}for(let V=0;V<s;V++){let $=T+V,F=k+V;M===!0?d.push(F,F+1,$):d.push(F+1,F,$),o+=3}h.addGroup(m,o,M===!0?1:2),m+=o}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zt=class e extends rn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,a=n/2,c=Math.floor(i),l=Math.floor(s),h=c+1,d=l+1,p=t/c,f=n/l,g=[],_=[],x=[],u=[];for(let m=0;m<d;m++){let E=m*f-a;for(let N=0;N<h;N++){let M=N*p-r;_.push(M,-E,0),x.push(0,0,1),u.push(N/c),u.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<c;E++){let N=E+h*m,M=E+h*(m+1),T=E+1+h*(m+1),w=E+1+h*m;g.push(N,M,w),g.push(M,T,w)}this.setIndex(g),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var sr=class e extends rn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:c},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(a+c,Math.PI),h=0,d=[],p=new W,f=new W,g=[],_=[],x=[],u=[];for(let m=0;m<=i;m++){let E=[],N=m/i,M=a+N*c,T=t*Math.cos(M),w=Math.sqrt(t*t-T*T),P=0;m===0&&a===0?P=.5/n:m===i&&l===Math.PI&&(P=-.5/n);for(let o=0;o<=n;o++){let A=o/n,b=s+A*r;p.x=-w*Math.cos(b),p.y=T,p.z=w*Math.sin(b),_.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),u.push(A+P,1-N),E.push(h++)}d.push(E)}for(let m=0;m<i;m++)for(let E=0;E<n;E++){let N=d[m][E+1],M=d[m][E],T=d[m+1][E],w=d[m+1][E+1];(m!==0||a>0)&&g.push(N,M,w),(m!==i-1||l<Math.PI)&&g.push(M,T,w)}this.setIndex(g),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Di(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(oc(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(oc(s[0])){let r=[];for(let a=0,c=s.length;a<c;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Yt(e){let t={};for(let n=0;n<e.length;n++){let i=Di(e[n]);for(let s in i)t[s]=i[s]}return t}function oc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Wd(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function jl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ht.workingColorSpace}var eu={clone:Di,merge:Yt},Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xa=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gt=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ba=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ns(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function vl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var pi=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let a;t:{i:if(!(t<s)){for(let c=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(r=s,s=n[++i],t<s)break e}a=n.length;break t}if(!(t>=r)){let c=n[1];t<c&&(i=2,r=c);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let c=i+a>>>1;t<n[c]?a=c:i=c+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ma=class extends pi{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,a=t+1,c=s[r],l=s[a];if(c===void 0)switch(this.getSettings_().endingStart){case Sl:r=t,c=2*n-i;break;case Ml:r=s.length-2,c=n+s[r]-s[r+1];break;default:r=t,c=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sl:a=t,l=2*i-n;break;case Ml:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=n}let h=(i-n)*.5,d=this.valueSize;this._weightPrev=h/(n-c),this._weightNext=h/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,h=l-c,d=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(i-n)/(s-n),x=_*_,u=x*_,m=-f*u+2*f*x-f*_,E=(1+f)*u+(-1.5-2*f)*x+(-.5+f)*_+1,N=(-1-g)*u+(1.5+g)*x+.5*_,M=g*u-g*x;for(let T=0;T!==c;++T)r[T]=m*a[d+T]+E*a[h+T]+N*a[l+T]+M*a[p+T];return r}},Ta=class extends pi{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,h=l-c,d=(i-n)/(s-n),p=1-d;for(let f=0;f!==c;++f)r[f]=a[h+f]*p+a[l+f]*d;return r}},wa=class extends pi{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ea=class extends pi{interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,h=l-c,d=this.inTangents,p=this.outTangents;if(!d||!p){let _=(i-n)/(s-n),x=1-_;for(let u=0;u!==c;++u)r[u]=a[h+u]*x+a[l+u]*_;return r}let f=c*2,g=t-1;for(let _=0;_!==c;++_){let x=a[h+_],u=a[l+_],m=g*f+_*2,E=p[m],N=p[m+1],M=t*f+_*2,T=d[M],w=d[M+1],P=Zd(i,n,E,T,s);r[_]=tu(P,x,N,w,u)}return r}};function tu(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function Yd(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function Zd(e,t,n,i,s){let r=(e-t)/(s-t);for(let a=0;a<8;a++){let c=tu(r,t,n,i,s)-e;if(Math.abs(c)<1e-10)break;let l=Yd(r,t,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-c/l))}return r}var on=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ns(n,this.TimeBufferType),this.values=ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ns(t.times,Array),values:ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),vl(t.settings)&&(i.settings={inTangents:ns(t.settings.inTangents,Array),outTangents:ns(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Hs:n=this.InterpolantFactoryMethodDiscrete;break;case pa:n=this.InterpolantFactoryMethodLinear;break;case sa:n=this.InterpolantFactoryMethodSmooth;break;case xl:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return sa;case this.InterpolantFactoryMethodBezier:return xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;vl(this.settings)&&(lc(this.settings.inTangents,t),lc(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let c=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*c,a*c)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let c=0;c!==r;c++){let l=i[c];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,c,l),t=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,c,l,a),t=!1;break}a=l}if(s!==void 0&&Md(s))for(let c=0,l=s.length;c!==l;++c){let h=s[c];if(isNaN(h)){Ve("KeyframeTrack: Value is not a valid number.",this,c,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sa,r=t.length-1,a=1;for(let c=1;c<r;++c){let l=!1,h=t[c],d=t[c+1];if(h!==d&&(c!==1||h!==t[0]))if(s)l=!0;else{let p=c*i,f=p-i,g=p+i;for(let _=0;_!==i;++_){let x=n[p+_];if(x!==n[f+_]||x!==n[g+_]){l=!0;break}}}if(l){if(c!==a){t[a]=t[c];let p=c*i,f=a*i;for(let g=0;g!==i;++g)n[f+g]=n[p+g]}++a}}if(r>0){t[a]=t[r];for(let c=r*i,l=a*i,h=0;h!==i;++h)n[l+h]=n[c+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lc(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=pa;var mi=class extends on{constructor(t,n,i){super(t,n,i)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Hs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends on{constructor(t,n,i,s){super(t,n,i,s)}};Aa.prototype.ValueTypeName="color";var Ca=class extends on{constructor(t,n,i,s){super(t,n,i,s)}};Ca.prototype.ValueTypeName="number";var Pa=class extends pi{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=(i-n)/(s-n),h=t*c;for(let d=h+c;h!==d;h+=4)zn.slerpFlat(r,0,a,h-c,a,h,l);return r}},rr=class extends on{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends on{constructor(t,n,i){super(t,n,i)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Hs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends on{constructor(t,n,i,s){super(t,n,i,s)}};Ra.prototype.ValueTypeName="vector";var Ia=class{constructor(t,n,i){let s=this,r=!1,a=0,c=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){c++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,c),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,c),a===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){let p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,f=h.length;p<f;p+=2){let g=h[p],_=h[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nu=new Ia,La=class{constructor(t){this.manager=t!==void 0?t:nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};La.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends Nt{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},ar=class extends gs{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},yl=new mt,hc=new W,cc=new W,or=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;hc.setFromMatrixPosition(t.matrixWorld),n.position.copy(hc),cc.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(cc),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(yl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,c=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ls||t.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),n.multiply(yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},na=new W,ia=new zn,Nn=new W,lr=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(na,ia,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ia,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(na,ia,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ia,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new W,uc=new qe,dc=new qe,Ht=class extends lr{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,n){return this.getViewBounds(t,uc,dc),n.subVectors(dc,uc)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan($o*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Tl=class extends or{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let n=this.camera,i=qs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},_s=class extends gs{constructor(t,n,i=0,s=Math.PI/3,r=0,a=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}};var vs=class extends lr{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,c=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,c-=d*this.view.offsetY,l=c-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},wl=class extends or{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends gs{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new wl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var is=-90,ss=1,Da=class extends Nt{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(is,ss,t,n);s.layers=this.layers,this.add(s);let r=new Ht(is,ss,t,n);r.layers=this.layers,this.add(r);let a=new Ht(is,ss,t,n);a.layers=this.layers,this.add(a);let c=new Ht(is,ss,t,n);c.layers=this.layers,this.add(c);let l=new Ht(is,ss,t,n);l.layers=this.layers,this.add(l);let h=new Ht(is,ss,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,c,l]=n;for(let h of n)this.remove(h);if(t===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,c,l,h,d]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let u=!1;t.isWebGLRenderer===!0?u=t.state.buffers.depth.getReversed():u=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,2,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(i,3,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(p,f,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Na=class extends Ht{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ql="\\[\\]\\.:\\/",Jd=new RegExp("["+Ql+"]","g"),eh="[^"+Ql+"]",$d="[^"+Ql.replace("\\.","")+"]",Kd=/((?:WC+[\/:])*)/.source.replace("WC",eh),jd=/(WCOD+)?/.source.replace("WCOD",$d),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),ef=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),tf=new RegExp("^"+Kd+jd+Qd+ef+"$"),nf=["material","materials","bones","map"],El=class{constructor(t,n,i){let s=i||Tt.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Tt=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jd,"")}static parseTrackName(t){let n=tf.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);nf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let c=r[a];if(c.name===n||c.uuid===n)return c;let l=i(c.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;Ve("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=El;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F_=new Float32Array(1);var fc=new mt,cr=class{constructor(t,n,i=0,s=1/0){this.ray=new Qs(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ve("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(t,n=!0,i=[]){return Al(t,this,i,n),i.sort(pc),i}intersectObjects(t,n=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Al(t[s],this,i,n);return i.sort(pc),i}};function pc(e,t){return e.distance-t.distance}function Al(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let r=e.children;for(let a=0,c=r.length;a<c;a++)Al(r[a],t,n,!0)}}var Cl=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};function th(e,t,n,i){let s=sf(i);switch(n){case Zl:return e*t;case Va:return e*t/s.components*s.byteLength;case Ga:return e*t/s.components*s.byteLength;case bi:return e*t*2/s.components*s.byteLength;case Wa:return e*t*2/s.components*s.byteLength;case Jl:return e*t*3/s.components*s.byteLength;case mn:return e*t*4/s.components*s.byteLength;case Xa:return e*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gr:case _r:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Ja:return Math.max(e,16)*Math.max(t,8)/4;case qa:case Za:return Math.max(e,8)*Math.max(t,8)/2;case $a:case Ka:case Qa:case eo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ja:case vr:case to:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ho:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case co:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case _o:case vo:case yo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xo:case bo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case yr:case So:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sf(e){switch(e){case tn:case Wl:return{byteLength:1,components:1};case bs:case Xl:case An:return{byteLength:2,components:1};case za:case Ha:return{byteLength:2,components:4};case En:case Ba:case pn:return{byteLength:4,components:1};case ql:case Yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);function Tu(){let e=null,t=!1,n=null,i=null;function s(r,a){i=e.requestAnimationFrame(s),n(r,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function rf(e){let t=new WeakMap;function n(c,l){let h=c.array,d=c.usage,p=h.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=e.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=e.HALF_FLOAT:g=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=e.SHORT;else if(h instanceof Uint32Array)g=e.UNSIGNED_INT;else if(h instanceof Int32Array)g=e.INT;else if(h instanceof Int8Array)g=e.BYTE;else if(h instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function i(c,l,h){let d=l.array,p=l.updateRanges;if(e.bindBuffer(h,c),p.length===0)e.bufferSubData(h,0,d);else{p.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<p.length;g++){let _=p[f],x=p[g];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,p[f]=x)}p.length=f+1;for(let g=0,_=p.length;g<_;g++){let x=p[g];e.bufferSubData(h,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=t.get(c);l&&(e.deleteBuffer(l.buffer),t.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let d=t.get(c);(!d||d.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=t.get(c);if(h===void 0)t.set(c,n(c,l));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,l),h.version=c.version}}return{get:s,remove:r,update:a}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,If=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Am=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:hf,alphatest_fragment:cf,alphatest_pars_fragment:uf,aomap_fragment:df,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:vf,iridescence_fragment:yf,bumpmap_pars_fragment:xf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Sf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:Tf,color_fragment:wf,color_pars_fragment:Ef,color_pars_vertex:Af,color_vertex:Cf,common:Pf,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:If,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:Nf,emissivemap_pars_fragment:Uf,colorspace_fragment:Ff,colorspace_pars_fragment:kf,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:jf,envmap_vertex:Vf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Zf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:$f,lights_pars_begin:Kf,lights_toon_fragment:Qf,lights_toon_pars_fragment:ep,lights_phong_fragment:tp,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:ap,lights_fragment_end:op,lightprobes_pars_fragment:lp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:vp,morphinstance_vertex:yp,morphcolor_vertex:xp,morphnormal_vertex:bp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Mp,normal_fragment_begin:Tp,normal_fragment_maps:wp,normal_pars_fragment:Ep,normal_pars_vertex:Ap,normal_vertex:Cp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Dp,opaque_fragment:Np,packing:Up,premultiplied_alpha_fragment:Fp,project_vertex:kp,dithering_fragment:Op,dithering_pars_fragment:Bp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:Zp,skinnormal_vertex:Jp,specularmap_fragment:$p,specularmap_pars_fragment:Kp,tonemapping_fragment:jp,tonemapping_pars_fragment:Qp,transmission_fragment:em,transmission_pars_fragment:tm,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:sm,worldpos_vertex:rm,background_vert:am,background_frag:om,backgroundCube_vert:lm,backgroundCube_frag:hm,cube_vert:cm,cube_frag:um,depth_vert:dm,depth_frag:fm,distance_vert:pm,distance_frag:mm,equirect_vert:gm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:ym,meshbasic_vert:xm,meshbasic_frag:bm,meshlambert_vert:Sm,meshlambert_frag:Mm,meshmatcap_vert:Tm,meshmatcap_frag:wm,meshnormal_vert:Em,meshnormal_frag:Am,meshphong_vert:Cm,meshphong_frag:Pm,meshphysical_vert:Rm,meshphysical_frag:Im,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Nm,points_frag:Um,shadow_vert:Fm,shadow_frag:km,sprite_vert:Om,sprite_frag:Bm},Se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Wn={basic:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Yt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Yt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Yt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Yt([Se.points,Se.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Yt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Yt([Se.common,Se.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Yt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Yt([Se.sprite,Se.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Yt([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Yt([Se.lights,Se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Wn.physical={uniforms:Yt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Eo={r:0,b:0,g:0},zm=new mt,wu=new Ye;wu.set(-1,0,0,0,1,0,0,0,1);function Hm(e,t,n,i,s,r){let a=new Qe(0),c=s===!0?0:1,l,h,d=null,p=0,f=null;function g(E){let N=E.isScene===!0?E.background:null;if(N&&N.isTexture){let M=E.backgroundBlurriness>0;N=t.get(N,M)}return N}function _(E){let N=!1,M=g(E);M===null?u(a,c):M&&M.isColor&&(u(M,1),N=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(E,N){let M=g(N);M&&(M.isCubeTexture||M.mapping===dr)?(h===void 0&&(h=new Ze(new At(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Di(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(N.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(wu),h.material.toneMapped=ht.getTransfer(M.colorSpace)!==pt,(d!==M||p!==M.version||f!==e.toneMapping)&&(h.material.needsUpdate=!0,d=M,p=M.version,f=e.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ze(new zt(2,2),new an({name:"BackgroundMaterial",uniforms:Di(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=ht.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,f=e.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,N){E.getRGB(Eo,jl(e)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,N,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,N=1){a.set(E),c=N,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:_,addToRenderList:x,dispose:m}}function Vm(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function c(k,V,$,F,q){let te=!1,X=p(k,F,$,V);r!==X&&(r=X,h(r.object)),te=g(k,F,$,q),te&&_(k,F,$,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,M(k,V,$,F),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function h(k){return e.bindVertexArray(k)}function d(k){return e.deleteVertexArray(k)}function p(k,V,$,F){let q=F.wireframe===!0,te=i[V.id];te===void 0&&(te={},i[V.id]=te);let X=k.isInstancedMesh===!0?k.id:0,ae=te[X];ae===void 0&&(ae={},te[X]=ae);let ie=ae[$.id];ie===void 0&&(ie={},ae[$.id]=ie);let ne=ie[q];return ne===void 0&&(ne=f(l()),ie[q]=ne),ne}function f(k){let V=[],$=[],F=[];for(let q=0;q<n;q++)V[q]=0,$[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:F,object:k,attributes:{},index:null}}function g(k,V,$,F){let q=r.attributes,te=V.attributes,X=0,ae=$.getAttributes();for(let ie in ae)if(ae[ie].location>=0){let le=q[ie],Ae=te[ie];if(Ae===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(Ae=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(Ae=k.instanceColor)),le===void 0||le.attribute!==Ae||Ae&&le.data!==Ae.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function _(k,V,$,F){let q={},te=V.attributes,X=0,ae=$.getAttributes();for(let ie in ae)if(ae[ie].location>=0){let le=te[ie];le===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(le=k.instanceColor));let Ae={};Ae.attribute=le,le&&le.data&&(Ae.data=le.data),q[ie]=Ae,X++}r.attributes=q,r.attributesNum=X,r.index=F}function x(){let k=r.newAttributes;for(let V=0,$=k.length;V<$;V++)k[V]=0}function u(k){m(k,0)}function m(k,V){let $=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;$[k]=1,F[k]===0&&(e.enableVertexAttribArray(k),F[k]=1),q[k]!==V&&(e.vertexAttribDivisor(k,V),q[k]=V)}function E(){let k=r.newAttributes,V=r.enabledAttributes;for(let $=0,F=V.length;$<F;$++)V[$]!==k[$]&&(e.disableVertexAttribArray($),V[$]=0)}function N(k,V,$,F,q,te,X){X===!0?e.vertexAttribIPointer(k,V,$,q,te):e.vertexAttribPointer(k,V,$,F,q,te)}function M(k,V,$,F){x();let q=F.attributes,te=$.getAttributes(),X=V.defaultAttributeValues;for(let ae in te){let ie=te[ae];if(ie.location>=0){let ne=q[ae];if(ne===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor)),ne!==void 0){let le=ne.normalized,Ae=ne.itemSize,_e=t.get(ne);if(_e===void 0)continue;let $e=_e.buffer,st=_e.type,at=_e.bytesPerElement,G=st===e.INT||st===e.UNSIGNED_INT||ne.gpuType===Ba;if(ne.isInterleavedBufferAttribute){let re=ne.data,ge=re.stride,J=ne.offset;if(re.isInstancedInterleavedBuffer){for(let ce=0;ce<ie.locationSize;ce++)m(ie.location+ce,re.meshPerAttribute);k.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<ie.locationSize;ce++)u(ie.location+ce);e.bindBuffer(e.ARRAY_BUFFER,$e);for(let ce=0;ce<ie.locationSize;ce++)N(ie.location+ce,Ae/ie.locationSize,st,le,ge*at,(J+Ae/ie.locationSize*ce)*at,G)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<ie.locationSize;re++)m(ie.location+re,ne.meshPerAttribute);k.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<ie.locationSize;re++)u(ie.location+re);e.bindBuffer(e.ARRAY_BUFFER,$e);for(let re=0;re<ie.locationSize;re++)N(ie.location+re,Ae/ie.locationSize,st,le,Ae*at,Ae/ie.locationSize*re*at,G)}}else if(X!==void 0){let le=X[ae];if(le!==void 0)switch(le.length){case 2:e.vertexAttrib2fv(ie.location,le);break;case 3:e.vertexAttrib3fv(ie.location,le);break;case 4:e.vertexAttrib4fv(ie.location,le);break;default:e.vertexAttrib1fv(ie.location,le)}}}}E()}function T(){A();for(let k in i){let V=i[k];for(let $ in V){let F=V[$];for(let q in F){let te=F[q];for(let X in te)d(te[X].object),delete te[X];delete F[q]}}delete i[k]}}function w(k){if(i[k.id]===void 0)return;let V=i[k.id];for(let $ in V){let F=V[$];for(let q in F){let te=F[q];for(let X in te)d(te[X].object),delete te[X];delete F[q]}}delete i[k.id]}function P(k){for(let V in i){let $=i[V];for(let F in $){let q=$[F];if(q[k.id]===void 0)continue;let te=q[k.id];for(let X in te)d(te[X].object),delete te[X];delete q[k.id]}}}function o(k){for(let V in i){let $=i[V],F=k.isInstancedMesh===!0?k.id:0,q=$[F];if(q!==void 0){for(let te in q){let X=q[te];for(let ae in X)d(X[ae].object),delete X[ae];delete q[te]}delete $[F],Object.keys($).length===0&&delete i[V]}}}function A(){b(),a=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:o,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:u,disableUnusedAttributes:E}}function Gm(e,t,n){let i;function s(l){i=l}function r(l,h){e.drawArrays(i,l,h),n.update(h,i,1)}function a(l,h,d){d!==0&&(e.drawArraysInstanced(i,l,h,d),n.update(h,i,d))}function c(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];n.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=c}function Wm(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==mn&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(P){let o=P===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==tn&&P!==pn&&!o&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp",d=l(h);d!==h&&(Ge("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),u=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),N=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:u,maxAttributes:m,maxVertexUniforms:E,maxVaryings:N,maxFragmentUniforms:M,maxSamples:T,samples:w}}function Xm(e){let t=this,n=null,i=0,s=!1,r=!1,a=new Sn,c=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let g=p.length!==0||f||i!==0||s;return s=f,i=p.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,g){let _=p.clippingPlanes,x=p.clipIntersection,u=p.clipShadows,m=e.get(p);if(!s||_===null||_.length===0||r&&!u)r?d(null):h();else{let E=r?0:i,N=E*4,M=m.clippingState||null;l.value=M,M=d(_,f,N,g);for(let T=0;T!==N;++T)M[T]=n[T];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,f,g,_){let x=p!==null?p.length:0,u=null;if(x!==0){if(u=l.value,_!==!0||u===null){let m=g+x*4,E=f.matrixWorldInverse;c.getNormalMatrix(E),(u===null||u.length<m)&&(u=new Float32Array(m));for(let N=0,M=g;N!==x;++N,M+=4)a.copy(p[N]).applyMatrix4(E,c),a.normal.toArray(u,M),u[M+3]=a.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,u}}var Ts=4,qm=6,Ym=20,Zm=256,xr=new vs,iu=new Qe,nh=null,ih=0,sh=0,rh=!1,Jm=new W,Ni=new W,Co=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){let{size:a=256,position:c=Jm}=r;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,c),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=rh,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:An,format:mn,colorSpace:Vs,depthBuffer:!1},s=su(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$m(r)),this._blurMaterial=jm(r,t,n),this._ggxMaterial=Km(r,t,n)}return s}_compileMaterial(t){let n=new Ze(new rn,t);this._renderer.compile(n,xr)}_sceneToCubeUV(t,n,i,s,r){let l=new Ht(90,1,n,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,g=p.toneMapping;p.getClearColor(iu),p.toneMapping=wn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new At,new fn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,u=x.material,m=!1,E=t.background;E?E.isColor&&(u.color.copy(E),t.background=null,m=!0):(u.color.copy(iu),m=!0);for(let N=0;N<6;N++){let M=N%3;M===0?(l.up.set(0,h[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[N],r.y,r.z)):M===1?(l.up.set(0,0,h[N]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[N],r.z)):(l.up.set(0,h[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[N]));let T=this._cubeSize;Ms(s,M*T,N>2?T:0,T,T),p.setRenderTarget(s),m&&p.render(x,l),p.render(t,l)}p.toneMapping=g,p.autoClear=f,t.background=E}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===vi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let c=r.uniforms;c.envMap.value=t;let l=this._cubeSize;Ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,xr)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[i];c.material=a;let l=a.uniforms,h=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(h*h-d*d),f=h*1.25,g=p*f,{_lodMax:_}=this,x=this._sizeLods[i],u=3*x*(i>_-Ts?i-_+Ts:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-n,Ms(r,u,m,3*x,2*x),s.setRenderTarget(r),s.render(c,xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Ms(t,u,m,3*x,2*x),s.setRenderTarget(t),s.render(c,xr)}_blur(t,n,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,n,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,n,i,s,r){let a=this._renderer,c=this._blurMaterial,l=this._lodMeshes[s];l.material=c;let h=c.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],p=3*d*(s>this._lodMax-Ts?s-this._lodMax+Ts:0),f=4*(this._cubeSize-d);Ms(n,p,f,3*d,2*d),a.setRenderTarget(n),a.render(l,xr)}};function $m(e){let t=[],n=[],i=e,s=e-Ts+1+qm;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let c=1/(a-2),l=-c,h=1+c,d=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,f=6,g=3,_=new Float32Array(g*f*p),x=new Float32Array(g*f*p);for(let m=0;m<p;m++){let E=m%3*2/3-1,N=m>2?0:-1,M=[E,N,0,E+2/3,N,0,E+2/3,N+1,0,E,N,0,E+2/3,N+1,0,E,N+1,0];_.set(M,g*f*m);for(let T=0;T<f;T++){let w=d[T*2]*2-1,P=d[T*2+1]*2-1;m===0?Ni.set(1,P,w):m===1?Ni.set(-w,1,-P):m===2?Ni.set(-w,P,1):m===3?Ni.set(-1,P,-w):m===4?Ni.set(-w,-1,P):Ni.set(w,P,-1),Ni.toArray(x,(m*f+T)*g)}}let u=new rn;u.setAttribute("position",new Qt(_,g)),u.setAttribute("outputDirection",new Qt(x,g)),n.push(new Ze(u,null)),i>Ts&&i--}return{lodMeshes:n,sizeLods:t}}function su(e,t,n){let i=new en(e,t,n);return i.texture.mapping=dr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Km(e,t,n){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function jm(e,t,n){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:Ym,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ru(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function au(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Po=class extends en{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new nr(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new At(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Vn});r.uniforms.tEquirect.value=n;let a=new Ze(s,r),c=n.minFilter;return n.minFilter===yi&&(n.minFilter=Vt),new Da(1,10,this).update(t,a),n.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}};function Qm(e){let t=new WeakMap,n=new WeakMap,i=null;function s(f,g=!1){return f==null?null:g?a(f):r(f)}function r(f){if(f&&f.isTexture){let g=f.mapping;if(g===Fa||g===ka)if(t.has(f)){let _=t.get(f).texture;return c(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let x=new Po(_.height);return x.fromEquirectangularTexture(e,f),t.set(f,x),f.addEventListener("dispose",h),c(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let g=f.mapping,_=g===Fa||g===ka,x=g===vi||g===Li;if(_||x){let u=n.get(f),m=u!==void 0?u.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Co(e)),u=_?i.fromEquirectangular(f,u):i.fromCubemap(f,u),u.texture.pmremVersion=f.pmremVersion,n.set(f,u),u.texture;if(u!==void 0)return u.texture;{let E=f.image;return _&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new Co(e)),u=_?i.fromEquirectangular(f):i.fromCubemap(f),u.texture.pmremVersion=f.pmremVersion,n.set(f,u),f.addEventListener("dispose",d),u.texture):null}}}return f}function c(f,g){return g===Fa?f.mapping=vi:g===ka&&(f.mapping=Li),f}function l(f){let g=0,_=6;for(let x=0;x<_;x++)f[x]!==void 0&&g++;return g===_}function h(f){let g=f.target;g.removeEventListener("dispose",h);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function d(f){let g=f.target;g.removeEventListener("dispose",d);let _=n.get(g);_!==void 0&&(n.delete(g),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function eg(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ci("WebGLRenderer: "+i+" extension not supported."),s}}}function tg(e,t,n,i){let s={},r=new WeakMap;function a(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];let g=r.get(f);g&&(t.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function c(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function l(p){let f=p.attributes;for(let g in f)t.update(f[g],e.ARRAY_BUFFER)}function h(p){let f=[],g=p.index,_=p.attributes.position,x=0;if(_===void 0)return;if(g!==null){let E=g.array;x=g.version;for(let N=0,M=E.length;N<M;N+=3){let T=E[N+0],w=E[N+1],P=E[N+2];f.push(T,w,w,P,P,T)}}else{let E=_.array;x=_.version;for(let N=0,M=E.length/3-1;N<M;N+=3){let T=N+0,w=N+1,P=N+2;f.push(T,w,w,P,P,T)}}let u=new(_.count>=65535?Ks:$s)(f,1);u.version=x;let m=r.get(p);m&&t.remove(m),r.set(p,u)}function d(p){let f=r.get(p);if(f){let g=p.index;g!==null&&f.version<g.version&&h(p)}else h(p);return r.get(p)}return{get:c,update:l,getWireframeAttribute:d}}function ng(e,t,n){let i;function s(p){i=p}let r,a;function c(p){r=p.type,a=p.bytesPerElement}function l(p,f){e.drawElements(i,f,r,p*a),n.update(f,i,1)}function h(p,f,g){g!==0&&(e.drawElementsInstanced(i,f,r,p*a,g),n.update(f,i,g))}function d(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,g);let x=0;for(let u=0;u<g;u++)x+=f[u];n.update(x,i,1)}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=d}function ig(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,c){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=c*(r/3);break;case e.LINES:n.lines+=c*(r/2);break;case e.LINE_STRIP:n.lines+=c*(r-1);break;case e.LINE_LOOP:n.lines+=c*r;break;case e.POINTS:n.points+=c*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function sg(e,t,n){let i=new WeakMap,s=new Et;function r(a,c,l){let h=a.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,f=i.get(c);if(f===void 0||f.count!==p){let A=function(){P.dispose(),i.delete(c),c.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let g=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,u=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],E=c.morphAttributes.color||[],N=0;g===!0&&(N=1),_===!0&&(N=2),x===!0&&(N=3);let M=c.attributes.position.count*N,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*T*4*p),P=new Ys(w,M,T,p);P.type=pn,P.needsUpdate=!0;let o=N*4;for(let b=0;b<p;b++){let k=u[b],V=m[b],$=E[b],F=M*T*4*b;for(let q=0;q<k.count;q++){let te=q*o;g===!0&&(s.fromBufferAttribute(k,q),w[F+te+0]=s.x,w[F+te+1]=s.y,w[F+te+2]=s.z,w[F+te+3]=0),_===!0&&(s.fromBufferAttribute(V,q),w[F+te+4]=s.x,w[F+te+5]=s.y,w[F+te+6]=s.z,w[F+te+7]=0),x===!0&&(s.fromBufferAttribute($,q),w[F+te+8]=s.x,w[F+te+9]=s.y,w[F+te+10]=s.z,w[F+te+11]=$.itemSize===4?s.w:1)}}f={count:p,texture:P,size:new qe(M,T)},i.set(c,f),c.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let g=0;for(let x=0;x<h.length;x++)g+=h[x];let _=c.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function rg(e,t,n,i,s){let r=new WeakMap;function a(h){let d=s.render.frame,p=h.geometry,f=t.get(h,p);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(n.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,e.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let g=h.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return f}function c(){r=new WeakMap}function l(h){let d=h.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:c}}var ag={[Fl]:"LINEAR_TONE_MAPPING",[kl]:"REINHARD_TONE_MAPPING",[Ol]:"CINEON_TONE_MAPPING",[Bl]:"ACES_FILMIC_TONE_MAPPING",[Hl]:"AGX_TONE_MAPPING",[Vl]:"NEUTRAL_TONE_MAPPING",[zl]:"CUSTOM_TONE_MAPPING"};function og(e,t,n,i,s,r){let a=new en(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,h=new rn;h.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let d=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ze(h,d),f=new vs(-1,1,1,-1,0,1),g=null,_=null,x=!1,u,m=null,E=[],N=!1;this.setSize=function(M,T){a.setSize(M,T),c!==null&&c.setSize(M,T),l!==null&&l.setSize(M,T);for(let w=0;w<E.length;w++){let P=E[w];P.setSize&&P.setSize(M,T)}},this.setEffects=function(M){E=M,N=E.length>0&&E[0].isRenderPass===!0;let T=a.width,w=a.height;E.length>0&&c===null&&(c=new en(T,w,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new en(T,w,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<E.length;P++){let o=E[P];o.setSize&&o.setSize(T,w)}},this.begin=function(M,T){if(x||M.toneMapping===wn&&E.length===0)return!1;if(m=T,T!==null){let w=T.width,P=T.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return N===!1&&M.setRenderTarget(a),u=M.toneMapping,M.toneMapping=wn,!0},this.hasRenderPass=function(){return N},this.end=function(M,T){M.toneMapping=u,x=!0;let w=a,P=c;for(let o=0;o<E.length;o++){let A=E[o];A.enabled!==!1&&(A.render(M,P,w,T),A.needsSwap!==!1&&(w=P,P=P===c?l:c))}if(g!==M.outputColorSpace||_!==M.toneMapping){g=M.outputColorSpace,_=M.toneMapping,d.defines={},ht.getTransfer(g)===pt&&(d.defines.SRGB_TRANSFER="");let o=ag[_];o&&(d.defines[o]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(m),M.render(p,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Eu=new $t,lh=new fi(1,1),Au=new Ys,Cu=new _a,Pu=new nr,ou=[],lu=[],hu=new Float32Array(16),cu=new Float32Array(9),uu=new Float32Array(4);function Es(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=ou[s];if(r===void 0&&(r=new Float32Array(s),ou[s]=r),t!==0){i.toArray(r,0);for(let a=1,c=0;a!==t;++a)c+=n,e[a].toArray(r,c)}return r}function Ut(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ft(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Lo(e,t){let n=lu[t];n===void 0&&(n=new Int32Array(t),lu[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function lg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function hg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ut(n,t))return;e.uniform2fv(this.addr,t),Ft(n,t)}}function cg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ut(n,t))return;e.uniform3fv(this.addr,t),Ft(n,t)}}function ug(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ut(n,t))return;e.uniform4fv(this.addr,t),Ft(n,t)}}function dg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ut(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ft(n,t)}else{if(Ut(n,i))return;uu.set(i),e.uniformMatrix2fv(this.addr,!1,uu),Ft(n,i)}}function fg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ut(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ft(n,t)}else{if(Ut(n,i))return;cu.set(i),e.uniformMatrix3fv(this.addr,!1,cu),Ft(n,i)}}function pg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ut(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ft(n,t)}else{if(Ut(n,i))return;hu.set(i),e.uniformMatrix4fv(this.addr,!1,hu),Ft(n,i)}}function mg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ut(n,t))return;e.uniform2iv(this.addr,t),Ft(n,t)}}function _g(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ut(n,t))return;e.uniform3iv(this.addr,t),Ft(n,t)}}function vg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ut(n,t))return;e.uniform4iv(this.addr,t),Ft(n,t)}}function yg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function xg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ut(n,t))return;e.uniform2uiv(this.addr,t),Ft(n,t)}}function bg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ut(n,t))return;e.uniform3uiv(this.addr,t),Ft(n,t)}}function Sg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ut(n,t))return;e.uniform4uiv(this.addr,t),Ft(n,t)}}function Mg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(lh.compareFunction=n.isReversedDepthBuffer()?wo:To,r=lh):r=Eu,n.setTexture2D(t||r,s)}function Tg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Cu,s)}function wg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Pu,s)}function Eg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Au,s)}function Ag(e){switch(e){case 5126:return lg;case 35664:return hg;case 35665:return cg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return yg;case 36294:return xg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Cg(e,t){e.uniform1fv(this.addr,t)}function Pg(e,t){let n=Es(t,this.size,2);e.uniform2fv(this.addr,n)}function Rg(e,t){let n=Es(t,this.size,3);e.uniform3fv(this.addr,n)}function Ig(e,t){let n=Es(t,this.size,4);e.uniform4fv(this.addr,n)}function Lg(e,t){let n=Es(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Dg(e,t){let n=Es(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ng(e,t){let n=Es(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ug(e,t){e.uniform1iv(this.addr,t)}function Fg(e,t){e.uniform2iv(this.addr,t)}function kg(e,t){e.uniform3iv(this.addr,t)}function Og(e,t){e.uniform4iv(this.addr,t)}function Bg(e,t){e.uniform1uiv(this.addr,t)}function zg(e,t){e.uniform2uiv(this.addr,t)}function Hg(e,t){e.uniform3uiv(this.addr,t)}function Vg(e,t){e.uniform4uiv(this.addr,t)}function Gg(e,t,n){let i=this.cache,s=t.length,r=Lo(n,s);Ut(i,r)||(e.uniform1iv(this.addr,r),Ft(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=lh:a=Eu;for(let c=0;c!==s;++c)n.setTexture2D(t[c]||a,r[c])}function Wg(e,t,n){let i=this.cache,s=t.length,r=Lo(n,s);Ut(i,r)||(e.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||Cu,r[a])}function Xg(e,t,n){let i=this.cache,s=t.length,r=Lo(n,s);Ut(i,r)||(e.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||Pu,r[a])}function qg(e,t,n){let i=this.cache,s=t.length,r=Lo(n,s);Ut(i,r)||(e.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||Au,r[a])}function Yg(e){switch(e){case 5126:return Cg;case 35664:return Pg;case 35665:return Rg;case 35666:return Ig;case 35674:return Lg;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return kg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}var hh=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ag(n.type)}},ch=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Yg(n.type)}},uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let c=s[r];c.setValue(t,n[c.id],i)}}},ah=/(\w+)(\])?(\[|\.)?/g;function du(e,t){e.seq.push(t),e.map[t.id]=t}function Zg(e,t,n){let i=e.name,s=i.length;for(ah.lastIndex=0;;){let r=ah.exec(i),a=ah.lastIndex,c=r[1],l=r[2]==="]",h=r[3];if(l&&(c=c|0),h===void 0||h==="["&&a+2===s){du(n,h===void 0?new hh(c,e,t):new ch(c,e,t));break}else{let p=n.map[c];p===void 0&&(p=new uh(c),du(n,p)),n=p}}}var ws=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let c=t.getActiveUniform(n,a),l=t.getUniformLocation(n,c.name);Zg(c,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){let c=n[r],l=i[c.id];l.needsUpdate!==!1&&c.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in n&&i.push(a)}return i}};function fu(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Jg=37297,$g=0;function Kg(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let c=a+1;i.push(`${c===t?">":" "} ${c}: ${n[a]}`)}return i.join(`
`)}var pu=new Ye;function jg(e){ht._getMatrix(pu,ht.workingColorSpace,e);let t=`mat3( ${pu.elements.map(n=>n.toFixed(4))} )`;switch(ht.getTransfer(e)){case Gs:return[t,"LinearTransferOETF"];case pt:return[t,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function mu(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let c=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Kg(e.getShaderSource(t),c)}else return r}function Qg(e,t){let n=jg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var e0={[Fl]:"Linear",[kl]:"Reinhard",[Ol]:"Cineon",[Bl]:"ACESFilmic",[Hl]:"AgX",[Vl]:"Neutral",[zl]:"Custom"};function t0(e,t){let n=e0[t];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ao=new W;function n0(){ht.getLuminanceCoefficients(Ao);let e=Ao.x.toFixed(4),t=Ao.y.toFixed(4),n=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function s0(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function r0(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,c=1;r.type===e.FLOAT_MAT2&&(c=2),r.type===e.FLOAT_MAT3&&(c=3),r.type===e.FLOAT_MAT4&&(c=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:c}}return n}function Sr(e){return e!==""}function gu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _u(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(e){return e.replace(a0,l0)}var o0=new Map;function l0(e,t){let n=tt[t];if(n===void 0){let i=o0.get(t);if(i!==void 0)n=tt[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dh(n)}var h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(e){return e.replace(h0,c0)}function c0(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var u0={[ur]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function d0(e){return u0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var f0={[vi]:"ENVMAP_TYPE_CUBE",[Li]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE_UV"};function p0(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":f0[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var m0={[Li]:"ENVMAP_MODE_REFRACTION"};function g0(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":m0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _0={[Ul]:"ENVMAP_BLENDING_MULTIPLY",[Fc]:"ENVMAP_BLENDING_MIX",[kc]:"ENVMAP_BLENDING_ADD"};function v0(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":_0[e.combine]||"ENVMAP_BLENDING_NONE"}function y0(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function x0(e,t,n,i){let s=e.getContext(),r=n.defines,a=n.vertexShader,c=n.fragmentShader,l=d0(n),h=p0(n),d=g0(n),p=v0(n),f=y0(n),g=i0(n),_=s0(r),x=s.createProgram(),u,m,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Sr).join(`
`),u.length>0&&(u+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(u=[yu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[yu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wn?"#define TONE_MAPPING":"",n.toneMapping!==wn?tt.tonemapping_pars_fragment:"",n.toneMapping!==wn?t0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Qg("linearToOutputTexel",n.outputColorSpace),n0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sr).join(`
`)),a=dh(a),a=gu(a,n),a=_u(a,n),c=dh(c),c=gu(c,n),c=_u(c,n),a=vu(a),c=vu(c),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,u=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["#define varying in",n.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let N=E+u+a,M=E+m+c,T=fu(s,s.VERTEX_SHADER,N),w=fu(s,s.FRAGMENT_SHADER,M);s.attachShader(x,T),s.attachShader(x,w),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(k){if(e.debug.checkShaderErrors){let V=s.getProgramInfoLog(x)||"",$=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(w)||"",q=V.trim(),te=$.trim(),X=F.trim(),ae=!0,ie=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ae=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,T,w);else{let ne=mu(s,T,"vertex"),le=mu(s,w,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+ne+`
`+le)}else q!==""?Ge("WebGLProgram: Program Info Log:",q):(te===""||X==="")&&(ie=!1);ie&&(k.diagnostics={runnable:ae,programLog:q,vertexShader:{log:te,prefix:u},fragmentShader:{log:X,prefix:m}})}s.deleteShader(T),s.deleteShader(w),o=new ws(s,x),A=r0(s,x)}let o;this.getUniforms=function(){return o===void 0&&P(this),o};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Jg)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$g++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var b0=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new ph(t),n.set(t,i)),i}},ph=class{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}};function S0(e){return e===bi||e===vr||e===yr}function M0(e,t,n,i,s,r){let a=new us,c=new fh,l=new Set,h=[],d=new Map,p=i.logarithmicDepthBuffer,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(o){return l.add(o),o===0?"uv":`uv${o}`}function x(o,A,b,k,V,$){let F=k.fog,q=V.geometry,te=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?k.environment:null,X=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,ae=t.get(o.envMap||te,X),ie=ae&&ae.mapping===dr?ae.image.height:null,ne=g[o.type];o.precision!==null&&(f=i.getMaxPrecision(o.precision),f!==o.precision&&Ge("WebGLProgram.getParameters:",o.precision,"not supported, using",f,"instead."));let le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ae=le!==void 0?le.length:0,_e=0;q.morphAttributes.position!==void 0&&(_e=1),q.morphAttributes.normal!==void 0&&(_e=2),q.morphAttributes.color!==void 0&&(_e=3);let $e,st,at,G;if(ne){let bt=Wn[ne];$e=bt.vertexShader,st=bt.fragmentShader}else{$e=o.vertexShader,st=o.fragmentShader;let bt=c.getVertexShaderStage(o),dt=c.getFragmentShaderStage(o);c.update(o,bt,dt),at=bt.id,G=dt.id}let re=e.getRenderTarget(),ge=e.state.buffers.depth.getReversed(),J=V.isInstancedMesh===!0,ce=V.isBatchedMesh===!0,Me=!!o.map,Ke=!!o.matcap,D=!!ae,ke=!!o.aoMap,ot=!!o.lightMap,De=!!o.bumpMap&&o.wireframe===!1,rt=!!o.normalMap,y=!!o.displacementMap,R=!!o.emissiveMap,z=!!o.metalnessMap,se=!!o.roughnessMap,I=o.anisotropy>0,Ce=o.clearcoat>0,pe=o.dispersion>0,C=o.retroreflectivity>0,v=o.iridescence>0,H=o.sheen>0,U=o.transmission>0,K=I&&!!o.anisotropyMap,de=Ce&&!!o.clearcoatMap,fe=Ce&&!!o.clearcoatNormalMap,ee=Ce&&!!o.clearcoatRoughnessMap,oe=v&&!!o.iridescenceMap,me=v&&!!o.iridescenceThicknessMap,Ne=H&&!!o.sheenColorMap,ye=H&&!!o.sheenRoughnessMap,ve=!!o.specularMap,Oe=!!o.specularColorMap,He=!!o.specularIntensityMap,je=U&&!!o.transmissionMap,B=U&&!!o.thicknessMap,xe=!!o.gradientMap,he=!!o.alphaMap,be=o.alphaTest>0,Ee=!!o.alphaHash,ue=!!o.extensions,Be=wn;o.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Be=e.toneMapping);let Ue={shaderID:ne,shaderType:o.type,shaderName:o.name,vertexShader:$e,fragmentShader:st,defines:o.defines,customVertexShaderID:at,customFragmentShaderID:G,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:f,batching:ce,batchingColor:ce&&V._colorsTexture!==null,instancing:J,instancingColor:J&&V.instanceColor!==null,instancingMorph:J&&V.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:Me,matcap:Ke,envMap:D,envMapMode:D&&ae.mapping,envMapCubeUVHeight:ie,aoMap:ke,lightMap:ot,bumpMap:De,normalMap:rt,displacementMap:y,emissiveMap:R,normalMapObjectSpace:rt&&o.normalMapType===zc,normalMapTangentSpace:rt&&o.normalMapType===Mo,packedNormalMap:rt&&o.normalMapType===Mo&&S0(o.normalMap.format),metalnessMap:z,roughnessMap:se,anisotropy:I,anisotropyMap:K,clearcoat:Ce,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:pe,retroreflection:C,iridescence:v,iridescenceMap:oe,iridescenceThicknessMap:me,sheen:H,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:ve,specularColorMap:Oe,specularIntensityMap:He,transmission:U,transmissionMap:je,thicknessMap:B,gradientMap:xe,opaque:o.transparent===!1&&o.blending===xs&&o.alphaToCoverage===!1,alphaMap:he,alphaTest:be,alphaHash:Ee,combine:o.combine,mapUv:Me&&_(o.map.channel),aoMapUv:ke&&_(o.aoMap.channel),lightMapUv:ot&&_(o.lightMap.channel),bumpMapUv:De&&_(o.bumpMap.channel),normalMapUv:rt&&_(o.normalMap.channel),displacementMapUv:y&&_(o.displacementMap.channel),emissiveMapUv:R&&_(o.emissiveMap.channel),metalnessMapUv:z&&_(o.metalnessMap.channel),roughnessMapUv:se&&_(o.roughnessMap.channel),anisotropyMapUv:K&&_(o.anisotropyMap.channel),clearcoatMapUv:de&&_(o.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(o.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(o.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(o.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(o.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(o.sheenRoughnessMap.channel),specularMapUv:ve&&_(o.specularMap.channel),specularColorMapUv:Oe&&_(o.specularColorMap.channel),specularIntensityMapUv:He&&_(o.specularIntensityMap.channel),transmissionMapUv:je&&_(o.transmissionMap.channel),thicknessMapUv:B&&_(o.thicknessMap.channel),alphaMapUv:he&&_(o.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rt||I),vertexNormals:!!q.attributes.normal,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!q.attributes.uv&&(Me||he),fog:!!F,useFog:o.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||q.attributes.normal===void 0&&rt===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ge,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:_e,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&b.length>0,shadowMapType:e.shadowMap.type,toneMapping:Be,decodeVideoTexture:Me&&o.map.isVideoTexture===!0&&ht.getTransfer(o.map.colorSpace)===pt,decodeVideoTextureEmissive:R&&o.emissiveMap.isVideoTexture===!0&&ht.getTransfer(o.emissiveMap.colorSpace)===pt,premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===ln,flipSided:o.side===Kt,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:ue&&o.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&o.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function u(o){let A=[];if(o.shaderID?A.push(o.shaderID):(A.push(o.customVertexShaderID),A.push(o.customFragmentShaderID)),o.defines!==void 0)for(let b in o.defines)A.push(b),A.push(o.defines[b]);return o.isRawShaderMaterial===!1&&(m(A,o),E(A,o),A.push(e.outputColorSpace)),A.push(o.customProgramCacheKey),A.join()}function m(o,A){o.push(A.precision),o.push(A.outputColorSpace),o.push(A.envMapMode),o.push(A.envMapCubeUVHeight),o.push(A.mapUv),o.push(A.alphaMapUv),o.push(A.lightMapUv),o.push(A.aoMapUv),o.push(A.bumpMapUv),o.push(A.normalMapUv),o.push(A.displacementMapUv),o.push(A.emissiveMapUv),o.push(A.metalnessMapUv),o.push(A.roughnessMapUv),o.push(A.anisotropyMapUv),o.push(A.clearcoatMapUv),o.push(A.clearcoatNormalMapUv),o.push(A.clearcoatRoughnessMapUv),o.push(A.iridescenceMapUv),o.push(A.iridescenceThicknessMapUv),o.push(A.sheenColorMapUv),o.push(A.sheenRoughnessMapUv),o.push(A.specularMapUv),o.push(A.specularColorMapUv),o.push(A.specularIntensityMapUv),o.push(A.transmissionMapUv),o.push(A.thicknessMapUv),o.push(A.combine),o.push(A.fogExp2),o.push(A.sizeAttenuation),o.push(A.morphTargetsCount),o.push(A.morphAttributeCount),o.push(A.numSunLights),o.push(A.numDirLights),o.push(A.numPointLights),o.push(A.numSpotLights),o.push(A.numSpotLightMaps),o.push(A.numHemiLights),o.push(A.numRectAreaLights),o.push(A.numSunLightShadows),o.push(A.numDirLightShadows),o.push(A.numPointLightShadows),o.push(A.numSpotLightShadows),o.push(A.numSpotLightShadowsWithMaps),o.push(A.numLightProbes),o.push(A.shadowMapType),o.push(A.toneMapping),o.push(A.numClippingPlanes),o.push(A.numClipIntersection),o.push(A.depthPacking)}function E(o,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),o.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),o.push(a.mask)}function N(o){let A=g[o.type],b;if(A){let k=Wn[A];b=eu.clone(k.uniforms)}else b=o.uniforms;return b}function M(o,A){let b=d.get(A);return b!==void 0?++b.usedTimes:(b=new x0(e,A,o,s),h.push(b),d.set(A,b)),b}function T(o){if(--o.usedTimes===0){let A=h.indexOf(o);h[A]=h[h.length-1],h.pop(),d.delete(o.cacheKey),o.destroy()}}function w(o){c.remove(o)}function P(){c.dispose()}return{getParameters:x,getProgramCacheKey:u,getUniforms:N,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:P}}function T0(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let c=e.get(a);return c===void 0&&(c={},e.set(a,c)),c}function i(a){e.delete(a)}function s(a,c,l){e.get(a)[c]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function w0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function xu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function bu(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function c(f,g,_,x,u,m){let E=e[t];return E===void 0?(E={id:f.id,object:f,geometry:g,material:_,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:u,group:m},e[t]=E):(E.id=f.id,E.object=f,E.geometry=g,E.material=_,E.materialVariant=a(f),E.groupOrder=x,E.renderOrder=f.renderOrder,E.z=u,E.group=m),t++,E}function l(f,g,_,x,u,m,E){E.reversedDepth===!0&&(u=-u);let N=c(f,g,_,x,u,m);_.transmission>0?i.push(N):_.transparent===!0?s.push(N):n.push(N)}function h(f,g,_,x,u,m){let E=c(f,g,_,x,u,m);_.transmission>0?i.unshift(E):_.transparent===!0?s.unshift(E):n.unshift(E)}function d(f,g){n.length>1&&n.sort(f||w0),i.length>1&&i.sort(g||xu),s.length>1&&s.sort(g||xu)}function p(){for(let f=t,g=e.length;f<g;f++){let _=e[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:p,sort:d}}function E0(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;return r===void 0?(a=new bu,e.set(i,[a])):s>=r.length?(a=new bu,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function A0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new W,color:new Qe};break;case"SpotLight":n={position:new W,direction:new W,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new W,halfWidth:new W,halfHeight:new W};break}return e[t.id]=n,n}}}function C0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var P0=0;function R0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function I0(e){let t=new A0,n=C0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new W);let s=new W,r=new mt,a=new mt;function c(h){let d=0,p=0,f=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,_=0,x=0,u=0,m=0,E=0,N=0,M=0,T=0,w=0,P=0,o=0,A=0,b=0;h.sort(R0);for(let V=0,$=h.length;V<$;V++){let F=h[V],q=F.color,te=F.intensity,X=F.distance,ae=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===bi?ae=F.shadow.map.texture:ae=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=q.r*te,p+=q.g*te,f+=q.b*te;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(F.sh.coefficients[ie],te);b++}else if(F.isSunLight){let ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ne=F.shadow,le=n.get(F);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[_]=le,i.sunShadowMap[_]=ae;let Ae=ne.getViewportCount();for(let _e=0;_e<Ae;_e++)i.sunShadowMatrix[x+_e]=ne.getMatrix(_e),i.sunShadowCascade[x+_e]=ne._cascadeData[_e];x+=Ae,_++}i.sun[g]=ie,g++}else if(F.isDirectionalLight){let ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ne=F.shadow,le=n.get(F);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,i.directionalShadow[u]=le,i.directionalShadowMap[u]=ae,i.directionalShadowMatrix[u]=F.shadow.matrix,T++}i.directional[u]=ie,u++}else if(F.isSpotLight){let ie=t.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(q).multiplyScalar(te),ie.distance=X,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,i.spot[E]=ie;let ne=F.shadow;if(F.map&&(i.spotLightMap[o]=F.map,o++,ne.updateMatrices(F),F.castShadow&&A++),i.spotLightMatrix[E]=ne.matrix,F.castShadow){let le=n.get(F);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,i.spotShadow[E]=le,i.spotShadowMap[E]=ae,P++}E++}else if(F.isRectAreaLight){let ie=t.get(F);ie.color.copy(q).multiplyScalar(te),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),i.rectArea[N]=ie,N++}else if(F.isPointLight){let ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){let ne=F.shadow,le=n.get(F);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,le.shadowCameraNear=ne.camera.near,le.shadowCameraFar=ne.camera.far,i.pointShadow[m]=le,i.pointShadowMap[m]=ae,i.pointShadowMatrix[m]=F.shadow.matrix,w++}i.point[m]=ie,m++}else if(F.isHemisphereLight){let ie=t.get(F);ie.skyColor.copy(F.color).multiplyScalar(te),ie.groundColor.copy(F.groundColor).multiplyScalar(te),i.hemi[M]=ie,M++}}N>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;let k=i.hash;(k.sunLength!==g||k.directionalLength!==u||k.pointLength!==m||k.spotLength!==E||k.rectAreaLength!==N||k.hemiLength!==M||k.numSunShadows!==_||k.numDirectionalShadows!==T||k.numPointShadows!==w||k.numSpotShadows!==P||k.numSpotMaps!==o||k.numLightProbes!==b)&&(i.sun.length=g,i.directional.length=u,i.spot.length=E,i.rectArea.length=N,i.point.length=m,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+o-A,i.spotLightMap.length=o,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,k.sunLength=g,k.directionalLength=u,k.pointLength=m,k.spotLength=E,k.rectAreaLength=N,k.hemiLength=M,k.numSunShadows=_,k.numDirectionalShadows=T,k.numPointShadows=w,k.numSpotShadows=P,k.numSpotMaps=o,k.numLightProbes=b,i.version=P0++)}function l(h,d){let p=0,f=0,g=0,_=0,x=0,u=0,m=d.matrixWorldInverse;for(let E=0,N=h.length;E<N;E++){let M=h[E];if(M.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),p++}else if(M.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(M.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),_++}else if(M.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let T=i.point[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),g++}else if(M.isHemisphereLight){let T=i.hemi[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),u++}}}return{setup:c,setupView:l,state:i}}function Su(e){let t=new I0(e),n=[],i=[],s=[];function r(f){p.camera=f,n.length=0,i.length=0,s.length=0}function a(f){n.push(f)}function c(f){i.push(f)}function l(f){s.push(f)}function h(){t.setup(n)}function d(f){t.setupView(n,f)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:c,pushLightProbeGrid:l}}function L0(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),c;return a===void 0?(c=new Su(e),t.set(s,[c])):r>=a.length?(c=new Su(e),a.push(c)):c=a[r],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U0=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],F0=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Mu=new mt,br=new W,oh=new W;function k0(e,t,n){let i=new ms,s=new qe,r=new qe,a=new Et,c=new ba,l=new Sa,h={},d=n.maxTextureSize,p={[_i]:Kt,[Kt]:_i,[ln]:ln},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:D0,fragmentShader:N0}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let _=new rn;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ze(_,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let m=this.type;this.render=function(w,P,o){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||w.length===0)return;this.type===_c&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let A=e.getRenderTarget(),b=e.getActiveCubeFace(),k=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Vn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let $=m!==this.type;$&&P.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(q=>q.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,q=w.length;F<q;F++){let te=w[F],X=te.shadow;if(X===void 0){Ge("WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ae=X.getFrameExtents();s.multiply(ae),r.copy(X.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ae.x),s.x=r.x*ae.x,X.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ae.y),s.y=r.y*ae.y,X.mapSize.y=r.y));let ie=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ie,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ys){if(te.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new en(s.x,s.y,{format:bi,type:An,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),X.map.texture.name=te.name+".shadowMap",X.map.depthTexture=new fi(s.x,s.y,pn),X.map.depthTexture.name=te.name+".shadowMapDepth",X.map.depthTexture.format=On,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Bt,X.map.depthTexture.magFilter=Bt}else te.isPointLight?(X.map=new Po(s.x),X.map.depthTexture=new ya(s.x,En)):(X.map=new en(s.x,s.y),X.map.depthTexture=new fi(s.x,s.y,En)),X.map.depthTexture.name=te.name+".shadowMap",X.map.depthTexture.format=On,this.type===ur?(X.map.depthTexture.compareFunction=ie?wo:To,X.map.depthTexture.minFilter=Vt,X.map.depthTexture.magFilter=Vt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Bt,X.map.depthTexture.magFilter=Bt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ne=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();te.isPointLight!==!0&&X.updateMatrices(te,o);for(let le=0;le<ne;le++){let Ae=X.getCamera(le);if(te.isPointLight){let _e=X.camera,$e=X.matrix,st=te.distance||_e.far;st!==_e.far&&(_e.far=st,_e.updateProjectionMatrix()),br.setFromMatrixPosition(te.matrixWorld),_e.position.copy(br),oh.copy(_e.position),oh.add(U0[le]),_e.up.copy(F0[le]),_e.lookAt(oh),_e.updateMatrixWorld(),$e.makeTranslation(-br.x,-br.y,-br.z),Mu.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Mu,_e.coordinateSystem,_e.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,le),e.clear();else{le===0&&(e.setRenderTarget(X.map),e.clear());let _e=X.getViewport(le);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),V.viewport(a)}i=X.getFrustum(le),M(P,o,Ae,te,this.type)}X.isPointLightShadow!==!0&&this.type===ys&&E(X,o),X.needsUpdate=!1}m=this.type,u.needsUpdate=!1,e.setRenderTarget(A,b,k)};function E(w,P){let o=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null?w.mapPass=new en(s.x,s.y,{format:bi,type:An}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(P,null,o,f,x,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value.set(w.map.width,w.map.height),g.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(P,null,o,g,x,null)}function N(w,P,o,A){let b=null,k=o.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)b=k;else if(b=o.isPointLight===!0?l:c,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let V=b.uuid,$=P.uuid,F=h[V];F===void 0&&(F={},h[V]=F);let q=F[$];q===void 0&&(q=b.clone(),F[$]=q,P.addEventListener("dispose",T)),b=q}if(b.visible=P.visible,b.wireframe=P.wireframe,A===ys?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:p[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,o.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=e.properties.get(b);V.light=o}return b}function M(w,P,o,A,b){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ys)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,w.matrixWorld);let $=t.update(w),F=w.material;if(Array.isArray(F)){let q=$.groups;for(let te=0,X=q.length;te<X;te++){let ae=q[te],ie=F[ae.materialIndex];if(ie&&ie.visible){let ne=N(w,ie,A,b);w.onBeforeShadow(e,w,P,o,$,ne,ae),e.renderBufferDirect(o,null,$,ne,w,ae),w.onAfterShadow(e,w,P,o,$,ne,ae)}}}else if(F.visible){let q=N(w,F,A,b);w.onBeforeShadow(e,w,P,o,$,q,null),e.renderBufferDirect(o,null,$,q,w,null),w.onAfterShadow(e,w,P,o,$,q,null)}}let V=w.children;for(let $=0,F=V.length;$<F;$++)M(V[$],P,o,A,b)}function T(w){w.target.removeEventListener("dispose",T);for(let o in h){let A=h[o],b=w.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function O0(e,t){function n(){let B=!1,xe=new Et,he=null,be=new Et(0,0,0,0);return{setMask:function(Ee){he!==Ee&&!B&&(e.colorMask(Ee,Ee,Ee,Ee),he=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,ue,Be,Ue,bt){bt===!0&&(Ee*=Ue,ue*=Ue,Be*=Ue),xe.set(Ee,ue,Be,Ue),be.equals(xe)===!1&&(e.clearColor(Ee,ue,Be,Ue),be.copy(xe))},reset:function(){B=!1,he=null,be.set(-1,0,0,0)}}}function i(){let B=!1,xe=!1,he=null,be=null,Ee=null;return{setReversed:function(ue){if(xe!==ue){let Be=t.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;let Ue=Ee;Ee=null,this.setClear(Ue)}},getReversed:function(){return xe},setTest:function(ue){ue?re(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(ue){he!==ue&&!B&&(e.depthMask(ue),he=ue)},setFunc:function(ue){if(xe&&(ue=Kc[ue]),be!==ue){switch(ue){case aa:e.depthFunc(e.NEVER);break;case oa:e.depthFunc(e.ALWAYS);break;case la:e.depthFunc(e.LESS);break;case as:e.depthFunc(e.LEQUAL);break;case ha:e.depthFunc(e.EQUAL);break;case ca:e.depthFunc(e.GEQUAL);break;case ua:e.depthFunc(e.GREATER);break;case da:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}be=ue}},setLocked:function(ue){B=ue},setClear:function(ue){Ee!==ue&&(Ee=ue,xe&&(ue=1-ue),e.clearDepth(ue))},reset:function(){B=!1,he=null,be=null,Ee=null,xe=!1}}}function s(){let B=!1,xe=null,he=null,be=null,Ee=null,ue=null,Be=null,Ue=null,bt=null;return{setTest:function(dt){B||(dt?re(e.STENCIL_TEST):ge(e.STENCIL_TEST))},setMask:function(dt){xe!==dt&&!B&&(e.stencilMask(dt),xe=dt)},setFunc:function(dt,vn,Ln){(he!==dt||be!==vn||Ee!==Ln)&&(e.stencilFunc(dt,vn,Ln),he=dt,be=vn,Ee=Ln)},setOp:function(dt,vn,Ln){(ue!==dt||Be!==vn||Ue!==Ln)&&(e.stencilOp(dt,vn,Ln),ue=dt,Be=vn,Ue=Ln)},setLocked:function(dt){B=dt},setClear:function(dt){bt!==dt&&(e.clearStencil(dt),bt=dt)},reset:function(){B=!1,xe=null,he=null,be=null,Ee=null,ue=null,Be=null,Ue=null,bt=null}}}let r=new n,a=new i,c=new s,l=new WeakMap,h=new WeakMap,d={},p={},f={},g=new WeakMap,_=[],x=null,u=!1,m=null,E=null,N=null,M=null,T=null,w=null,P=null,o=new Qe(0,0,0),A=0,b=!1,k=null,V=null,$=null,F=null,q=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ae=0,ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ie)[1]),X=ae>=1):ie.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),X=ae>=2);let ne=null,le={},Ae=e.getParameter(e.SCISSOR_BOX),_e=e.getParameter(e.VIEWPORT),$e=new Et().fromArray(Ae),st=new Et().fromArray(_e);function at(B,xe,he,be){let Ee=new Uint8Array(4),ue=e.createTexture();e.bindTexture(B,ue),e.texParameteri(B,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(B,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Be=0;Be<he;Be++)B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?e.texImage3D(xe,0,e.RGBA,1,1,be,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D(xe+Be,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return ue}let G={};G[e.TEXTURE_2D]=at(e.TEXTURE_2D,e.TEXTURE_2D,1),G[e.TEXTURE_CUBE_MAP]=at(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[e.TEXTURE_2D_ARRAY]=at(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),G[e.TEXTURE_3D]=at(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),re(e.DEPTH_TEST),a.setFunc(as),De(!1),rt(Pl),re(e.CULL_FACE),ke(Vn);function re(B){d[B]!==!0&&(e.enable(B),d[B]=!0)}function ge(B){d[B]!==!1&&(e.disable(B),d[B]=!1)}function J(B,xe){return f[B]!==xe?(e.bindFramebuffer(B,xe),f[B]=xe,B===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=xe),B===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=xe),!0):!1}function ce(B,xe){let he=_,be=!1;if(B){he=g.get(xe),he===void 0&&(he=[],g.set(xe,he));let Ee=B.textures;if(he.length!==Ee.length||he[0]!==e.COLOR_ATTACHMENT0){for(let ue=0,Be=Ee.length;ue<Be;ue++)he[ue]=e.COLOR_ATTACHMENT0+ue;he.length=Ee.length,be=!0}}else he[0]!==e.BACK&&(he[0]=e.BACK,be=!0);be&&e.drawBuffers(he)}function Me(B){return x!==B?(e.useProgram(B),x=B,!0):!1}let Ke={[Ii]:e.FUNC_ADD,[yc]:e.FUNC_SUBTRACT,[xc]:e.FUNC_REVERSE_SUBTRACT};Ke[bc]=e.MIN,Ke[Sc]=e.MAX;let D={[Mc]:e.ZERO,[Tc]:e.ONE,[wc]:e.SRC_COLOR,[Dl]:e.SRC_ALPHA,[Ic]:e.SRC_ALPHA_SATURATE,[Pc]:e.DST_COLOR,[Ac]:e.DST_ALPHA,[Ec]:e.ONE_MINUS_SRC_COLOR,[Nl]:e.ONE_MINUS_SRC_ALPHA,[Rc]:e.ONE_MINUS_DST_COLOR,[Cc]:e.ONE_MINUS_DST_ALPHA,[Lc]:e.CONSTANT_COLOR,[Dc]:e.ONE_MINUS_CONSTANT_COLOR,[Nc]:e.CONSTANT_ALPHA,[Uc]:e.ONE_MINUS_CONSTANT_ALPHA};function ke(B,xe,he,be,Ee,ue,Be,Ue,bt,dt){if(B===Vn){u===!0&&(ge(e.BLEND),u=!1);return}if(u===!1&&(re(e.BLEND),u=!0),B!==vc){if(B!==m||dt!==b){if((E!==Ii||T!==Ii)&&(e.blendEquation(e.FUNC_ADD),E=Ii,T=Ii),dt)switch(B){case xs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rl:e.blendFunc(e.ONE,e.ONE);break;case Il:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ll:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ve("WebGLState: Invalid blending: ",B);break}else switch(B){case xs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Il:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ll:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",B);break}N=null,M=null,w=null,P=null,o.set(0,0,0),A=0,m=B,b=dt}return}Ee=Ee||xe,ue=ue||he,Be=Be||be,(xe!==E||Ee!==T)&&(e.blendEquationSeparate(Ke[xe],Ke[Ee]),E=xe,T=Ee),(he!==N||be!==M||ue!==w||Be!==P)&&(e.blendFuncSeparate(D[he],D[be],D[ue],D[Be]),N=he,M=be,w=ue,P=Be),(Ue.equals(o)===!1||bt!==A)&&(e.blendColor(Ue.r,Ue.g,Ue.b,bt),o.copy(Ue),A=bt),m=B,b=!1}function ot(B,xe){B.side===ln?ge(e.CULL_FACE):re(e.CULL_FACE);let he=B.side===Kt;xe&&(he=!he),De(he),B.blending===xs&&B.transparent===!1?ke(Vn):ke(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let be=B.stencilWrite;c.setTest(be),be&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),R(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function De(B){k!==B&&(B?e.frontFace(e.CW):e.frontFace(e.CCW),k=B)}function rt(B){B!==mc?(re(e.CULL_FACE),B!==V&&(B===Pl?e.cullFace(e.BACK):B===gc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ge(e.CULL_FACE),V=B}function y(B){B!==$&&(X&&e.lineWidth(B),$=B)}function R(B,xe,he){B?(re(e.POLYGON_OFFSET_FILL),(F!==xe||q!==he)&&(F=xe,q=he,a.getReversed()&&(xe=-xe),e.polygonOffset(xe,he))):ge(e.POLYGON_OFFSET_FILL)}function z(B){B?re(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function se(B){B===void 0&&(B=e.TEXTURE0+te-1),ne!==B&&(e.activeTexture(B),ne=B)}function I(B,xe,he){he===void 0&&(ne===null?he=e.TEXTURE0+te-1:he=ne);let be=le[he];be===void 0&&(be={type:void 0,texture:void 0},le[he]=be),(be.type!==B||be.texture!==xe)&&(ne!==he&&(e.activeTexture(he),ne=he),e.bindTexture(B,xe||G[B]),be.type=B,be.texture=xe)}function Ce(){let B=le[ne];B!==void 0&&B.type!==void 0&&(e.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function pe(){try{e.compressedTexImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function v(){try{e.texSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function H(){try{e.texSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function U(){try{e.compressedTexSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function K(){try{e.compressedTexSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function de(){try{e.texStorage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function fe(){try{e.texStorage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function ee(){try{e.texImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function oe(){try{e.texImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function me(B){return p[B]!==void 0?p[B]:e.getParameter(B)}function Ne(B,xe){p[B]!==xe&&(e.pixelStorei(B,xe),p[B]=xe)}function ye(B){$e.equals(B)===!1&&(e.scissor(B.x,B.y,B.z,B.w),$e.copy(B))}function ve(B){st.equals(B)===!1&&(e.viewport(B.x,B.y,B.z,B.w),st.copy(B))}function Oe(B,xe){let he=h.get(xe);he===void 0&&(he=new WeakMap,h.set(xe,he));let be=he.get(B);be===void 0&&(be=e.getUniformBlockIndex(xe,B.name),he.set(B,be))}function He(B,xe){let be=h.get(xe).get(B);l.get(xe)!==be&&(e.uniformBlockBinding(xe,be,B.__bindingPointIndex),l.set(xe,be))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},p={},ne=null,le={},f={},g=new WeakMap,_=[],x=null,u=!1,m=null,E=null,N=null,M=null,T=null,w=null,P=null,o=new Qe(0,0,0),A=0,b=!1,k=null,V=null,$=null,F=null,q=null,$e.set(0,0,e.canvas.width,e.canvas.height),st.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:re,disable:ge,bindFramebuffer:J,drawBuffers:ce,useProgram:Me,setBlending:ke,setMaterial:ot,setFlipSided:De,setCullFace:rt,setLineWidth:y,setPolygonOffset:R,setScissorTest:z,activeTexture:se,bindTexture:I,unbindTexture:Ce,compressedTexImage2D:pe,compressedTexImage3D:C,texImage2D:ee,texImage3D:oe,pixelStorei:Ne,getParameter:me,updateUBOMapping:Oe,uniformBlockBinding:He,texStorage2D:de,texStorage3D:fe,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:U,compressedTexSubImage3D:K,scissor:ye,viewport:ve,reset:je}}function B0(e,t,n,i,s,r,a){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,d=new WeakMap,p=new Set,f,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return _?new OffscreenCanvas(C,v):Ws("canvas")}function u(C,v,H){let U=1,K=pe(C);if((K.width>H||K.height>H)&&(U=H/Math.max(K.width,K.height)),U<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let de=Math.floor(U*K.width),fe=Math.floor(U*K.height);f===void 0&&(f=x(de,fe));let ee=v?x(de,fe):f;return ee.width=de,ee.height=fe,ee.getContext("2d").drawImage(C,0,0,de,fe),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+de+"x"+fe+")."),ee}else return"data"in C&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function E(C){e.generateMipmap(C)}function N(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(C,v,H,U,K,de=!1){if(C!==null){if(e[C]!==void 0)return e[C];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;U&&(fe=t.get("EXT_texture_norm16"),fe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=v;if(v===e.RED&&(H===e.FLOAT&&(ee=e.R32F),H===e.HALF_FLOAT&&(ee=e.R16F),H===e.UNSIGNED_BYTE&&(ee=e.R8),H===e.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),H===e.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),v===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(ee=e.R8UI),H===e.UNSIGNED_SHORT&&(ee=e.R16UI),H===e.UNSIGNED_INT&&(ee=e.R32UI),H===e.BYTE&&(ee=e.R8I),H===e.SHORT&&(ee=e.R16I),H===e.INT&&(ee=e.R32I)),v===e.RG&&(H===e.FLOAT&&(ee=e.RG32F),H===e.HALF_FLOAT&&(ee=e.RG16F),H===e.UNSIGNED_BYTE&&(ee=e.RG8),H===e.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),H===e.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(ee=e.RG8UI),H===e.UNSIGNED_SHORT&&(ee=e.RG16UI),H===e.UNSIGNED_INT&&(ee=e.RG32UI),H===e.BYTE&&(ee=e.RG8I),H===e.SHORT&&(ee=e.RG16I),H===e.INT&&(ee=e.RG32I)),v===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(ee=e.RGB8UI),H===e.UNSIGNED_SHORT&&(ee=e.RGB16UI),H===e.UNSIGNED_INT&&(ee=e.RGB32UI),H===e.BYTE&&(ee=e.RGB8I),H===e.SHORT&&(ee=e.RGB16I),H===e.INT&&(ee=e.RGB32I)),v===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(ee=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(ee=e.RGBA16UI),H===e.UNSIGNED_INT&&(ee=e.RGBA32UI),H===e.BYTE&&(ee=e.RGBA8I),H===e.SHORT&&(ee=e.RGBA16I),H===e.INT&&(ee=e.RGBA32I)),v===e.RGB&&(H===e.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),H===e.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),H===e.UNSIGNED_INT_5_9_9_9_REV&&(ee=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(ee=e.R11F_G11F_B10F)),v===e.RGBA){let oe=de?Gs:ht.getTransfer(K);H===e.FLOAT&&(ee=e.RGBA32F),H===e.HALF_FLOAT&&(ee=e.RGBA16F),H===e.UNSIGNED_BYTE&&(ee=oe===pt?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),H===e.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),H===e.UNSIGNED_SHORT_4_4_4_4&&(ee=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(ee=e.RGB5_A1)}return(ee===e.R16F||ee===e.R32F||ee===e.RG16F||ee===e.RG32F||ee===e.RGBA16F||ee===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ee}function T(C,v){let H;return C?v===null||v===En||v===Ss?H=e.DEPTH24_STENCIL8:v===pn?H=e.DEPTH32F_STENCIL8:v===bs&&(H=e.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===En||v===Ss?H=e.DEPTH_COMPONENT24:v===pn?H=e.DEPTH_COMPONENT32F:v===bs&&(H=e.DEPTH_COMPONENT16),H}function w(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function P(C){let v=C.target;v.removeEventListener("dispose",P),A(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&p.delete(v)}function o(C){let v=C.target;v.removeEventListener("dispose",o),k(v)}function A(C){let v=i.get(C);if(v.__webglInit===void 0)return;let H=C.source,U=g.get(H);if(U){let K=U[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(C),Object.keys(U).length===0&&g.delete(H)}i.remove(C)}function b(C){let v=i.get(C);e.deleteTexture(v.__webglTexture);let H=C.source,U=g.get(H);delete U[v.__cacheKey],a.memory.textures--}function k(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(v.__webglFramebuffer[U]))for(let K=0;K<v.__webglFramebuffer[U].length;K++)e.deleteFramebuffer(v.__webglFramebuffer[U][K]);else e.deleteFramebuffer(v.__webglFramebuffer[U]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[U])}else{if(Array.isArray(v.__webglFramebuffer))for(let U=0;U<v.__webglFramebuffer.length;U++)e.deleteFramebuffer(v.__webglFramebuffer[U]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let U=0;U<v.__webglColorRenderbuffer.length;U++)v.__webglColorRenderbuffer[U]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[U]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=C.textures;for(let U=0,K=H.length;U<K;U++){let de=i.get(H[U]);de.__webglTexture&&(e.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(H[U])}i.remove(C)}let V=0;function $(){V=0}function F(){return V}function q(C){V=C}function te(){let C=V;return C>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,C}function X(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function ae(C,v){let H=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let U=C.image;if(U===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,C,v);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+v)}function ie(C,v){let H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){ge(H,C,v);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+v)}function ne(C,v){let H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){ge(H,C,v);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+v)}function le(C,v){let H=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){J(H,C,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+v)}let Ae={[os]:e.REPEAT,[Fn]:e.CLAMP_TO_EDGE,[fa]:e.MIRRORED_REPEAT},_e={[Bt]:e.NEAREST,[Oc]:e.NEAREST_MIPMAP_NEAREST,[fr]:e.NEAREST_MIPMAP_LINEAR,[Vt]:e.LINEAR,[Oa]:e.LINEAR_MIPMAP_NEAREST,[yi]:e.LINEAR_MIPMAP_LINEAR},$e={[Vc]:e.NEVER,[Yc]:e.ALWAYS,[Gc]:e.LESS,[To]:e.LEQUAL,[Wc]:e.EQUAL,[wo]:e.GEQUAL,[Xc]:e.GREATER,[qc]:e.NOTEQUAL};function st(C,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Vt||v.magFilter===Oa||v.magFilter===fr||v.magFilter===yi||v.minFilter===Vt||v.minFilter===Oa||v.minFilter===fr||v.minFilter===yi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,Ae[v.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,Ae[v.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,Ae[v.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,_e[v.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,$e[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bt||v.minFilter!==fr&&v.minFilter!==yi||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function at(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",P));let U=v.source,K=g.get(U);K===void 0&&(K={},g.set(U,K));let de=X(v);if(de!==C.__cacheKey){K[de]===void 0&&(K[de]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[de].usedTimes++;let fe=K[C.__cacheKey];fe!==void 0&&(K[C.__cacheKey].usedTimes--,fe.usedTimes===0&&b(v)),C.__cacheKey=de,C.__webglTexture=K[de].texture}return H}function G(C,v,H){return Math.floor(Math.floor(C/H)/v)}function re(C,v,H,U){let de=C.updateRanges;if(de.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,H,U,v.data);else{de.sort((Ne,ye)=>Ne.start-ye.start);let fe=0;for(let Ne=1;Ne<de.length;Ne++){let ye=de[fe],ve=de[Ne],Oe=ye.start+ye.count,He=G(ve.start,v.width,4),je=G(ye.start,v.width,4);ve.start<=Oe+1&&He===je&&G(ve.start+ve.count-1,v.width,4)===He?ye.count=Math.max(ye.count,ve.start+ve.count-ye.start):(++fe,de[fe]=ve)}de.length=fe+1;let ee=n.getParameter(e.UNPACK_ROW_LENGTH),oe=n.getParameter(e.UNPACK_SKIP_PIXELS),me=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let Ne=0,ye=de.length;Ne<ye;Ne++){let ve=de[Ne],Oe=Math.floor(ve.start/4),He=Math.ceil(ve.count/4),je=Oe%v.width,B=Math.floor(Oe/v.width),xe=He,he=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,je),n.pixelStorei(e.UNPACK_SKIP_ROWS,B),n.texSubImage2D(e.TEXTURE_2D,0,je,B,xe,he,H,U,v.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,ee),n.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function ge(C,v,H){let U=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(U=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(U=e.TEXTURE_3D);let K=at(C,v),de=v.source;n.bindTexture(U,C.__webglTexture,e.TEXTURE0+H);let fe=i.get(de);if(de.version!==fe.__version||K===!0){if(n.activeTexture(e.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let he=ht.getPrimaries(ht.workingColorSpace),be=v.colorSpace===ti?null:ht.getPrimaries(v.colorSpace),Ee=v.colorSpace===ti||he===be?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let oe=u(v.image,!1,s.maxTextureSize);oe=Ce(v,oe);let me=r.convert(v.format,v.colorSpace),Ne=r.convert(v.type),ye=M(v.internalFormat,me,Ne,v.normalized,v.colorSpace,v.isVideoTexture);st(U,v);let ve,Oe=v.mipmaps,He=v.isVideoTexture!==!0,je=fe.__version===void 0||K===!0,B=de.dataReady,xe=w(v,oe);if(v.isDepthTexture)ye=T(v.format===xi,v.type),je&&(He?n.texStorage2D(e.TEXTURE_2D,1,ye,oe.width,oe.height):n.texImage2D(e.TEXTURE_2D,0,ye,oe.width,oe.height,0,me,Ne,null));else if(v.isDataTexture)if(Oe.length>0){He&&je&&n.texStorage2D(e.TEXTURE_2D,xe,ye,Oe[0].width,Oe[0].height);for(let he=0,be=Oe.length;he<be;he++)ve=Oe[he],He?B&&n.texSubImage2D(e.TEXTURE_2D,he,0,0,ve.width,ve.height,me,Ne,ve.data):n.texImage2D(e.TEXTURE_2D,he,ye,ve.width,ve.height,0,me,Ne,ve.data);v.generateMipmaps=!1}else He?(je&&n.texStorage2D(e.TEXTURE_2D,xe,ye,oe.width,oe.height),B&&re(v,oe,me,Ne)):n.texImage2D(e.TEXTURE_2D,0,ye,oe.width,oe.height,0,me,Ne,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&je&&n.texStorage3D(e.TEXTURE_2D_ARRAY,xe,ye,Oe[0].width,Oe[0].height,oe.depth);for(let he=0,be=Oe.length;he<be;he++)if(ve=Oe[he],v.format!==mn)if(me!==null)if(He){if(B)if(v.layerUpdates.size>0){let Ee=th(ve.width,ve.height,v.format,v.type);for(let ue of v.layerUpdates){let Be=ve.data.subarray(ue*Ee/ve.data.BYTES_PER_ELEMENT,(ue+1)*Ee/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,ue,ve.width,ve.height,1,me,Be)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,oe.depth,me,ve.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,he,ye,ve.width,ve.height,oe.depth,0,ve.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?B&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,oe.depth,me,Ne,ve.data):n.texImage3D(e.TEXTURE_2D_ARRAY,he,ye,ve.width,ve.height,oe.depth,0,me,Ne,ve.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{He&&je&&n.texStorage2D(e.TEXTURE_2D,xe,ye,Oe[0].width,Oe[0].height);for(let he=0,be=Oe.length;he<be;he++)ve=Oe[he],v.format!==mn?me!==null?He?B&&n.compressedTexSubImage2D(e.TEXTURE_2D,he,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(e.TEXTURE_2D,he,ye,ve.width,ve.height,0,ve.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?B&&n.texSubImage2D(e.TEXTURE_2D,he,0,0,ve.width,ve.height,me,Ne,ve.data):n.texImage2D(e.TEXTURE_2D,he,ye,ve.width,ve.height,0,me,Ne,ve.data)}else if(v.isDataArrayTexture)if(He){if(je&&n.texStorage3D(e.TEXTURE_2D_ARRAY,xe,ye,oe.width,oe.height,oe.depth),B)if(v.layerUpdates.size>0){let he=th(oe.width,oe.height,v.format,v.type);for(let be of v.layerUpdates){let Ee=oe.data.subarray(be*he/oe.data.BYTES_PER_ELEMENT,(be+1)*he/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,be,oe.width,oe.height,1,me,Ne,Ee)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Ne,oe.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,oe.width,oe.height,oe.depth,0,me,Ne,oe.data);else if(v.isData3DTexture)He?(je&&n.texStorage3D(e.TEXTURE_3D,xe,ye,oe.width,oe.height,oe.depth),B&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Ne,oe.data)):n.texImage3D(e.TEXTURE_3D,0,ye,oe.width,oe.height,oe.depth,0,me,Ne,oe.data);else if(v.isFramebufferTexture){if(je)if(He)n.texStorage2D(e.TEXTURE_2D,xe,ye,oe.width,oe.height);else{let he=oe.width,be=oe.height;for(let Ee=0;Ee<xe;Ee++)n.texImage2D(e.TEXTURE_2D,Ee,ye,he,be,0,me,Ne,null),he>>=1,be>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let he=e.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),oe.parentNode!==he){he.appendChild(oe),p.add(v),he.onpaint=be=>{let Ee=be.changedElements;for(let ue of p)Ee.includes(ue.image)&&(ue.needsUpdate=!0)},he.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,oe);else{let Ee=e.RGBA,ue=e.RGBA,Be=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ee,ue,Be,oe)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(He&&je){let he=pe(Oe[0]);n.texStorage2D(e.TEXTURE_2D,xe,ye,he.width,he.height)}for(let he=0,be=Oe.length;he<be;he++)ve=Oe[he],He?B&&n.texSubImage2D(e.TEXTURE_2D,he,0,0,me,Ne,ve):n.texImage2D(e.TEXTURE_2D,he,ye,me,Ne,ve);v.generateMipmaps=!1}else if(He){if(je){let he=pe(oe);n.texStorage2D(e.TEXTURE_2D,xe,ye,he.width,he.height)}B&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,me,Ne,oe)}else n.texImage2D(e.TEXTURE_2D,0,ye,me,Ne,oe);m(v)&&E(U),fe.__version=de.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function J(C,v,H){if(v.image.length!==6)return;let U=at(C,v),K=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+H);let de=i.get(K);if(K.version!==de.__version||U===!0){n.activeTexture(e.TEXTURE0+H);let fe=ht.getPrimaries(ht.workingColorSpace),ee=v.colorSpace===ti?null:ht.getPrimaries(v.colorSpace),oe=v.colorSpace===ti||fe===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let me=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let ue=0;ue<6;ue++)!me&&!Ne?ye[ue]=u(v.image[ue],!0,s.maxCubemapSize):ye[ue]=Ne?v.image[ue].image:v.image[ue],ye[ue]=Ce(v,ye[ue]);let ve=ye[0],Oe=r.convert(v.format,v.colorSpace),He=r.convert(v.type),je=M(v.internalFormat,Oe,He,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,xe=de.__version===void 0||U===!0,he=K.dataReady,be=w(v,ve);st(e.TEXTURE_CUBE_MAP,v);let Ee;if(me){B&&xe&&n.texStorage2D(e.TEXTURE_CUBE_MAP,be,je,ve.width,ve.height);for(let ue=0;ue<6;ue++){Ee=ye[ue].mipmaps;for(let Be=0;Be<Ee.length;Be++){let Ue=Ee[Be];v.format!==mn?Oe!==null?B?he&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,Ue.width,Ue.height,Oe,Ue.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,je,Ue.width,Ue.height,0,Ue.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,Ue.width,Ue.height,Oe,He,Ue.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,je,Ue.width,Ue.height,0,Oe,He,Ue.data)}}}else{if(Ee=v.mipmaps,B&&xe){Ee.length>0&&be++;let ue=pe(ye[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,be,je,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ne){B?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ye[ue].width,ye[ue].height,Oe,He,ye[ue].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,ye[ue].width,ye[ue].height,0,Oe,He,ye[ue].data);for(let Be=0;Be<Ee.length;Be++){let bt=Ee[Be].image[ue].image;B?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,bt.width,bt.height,Oe,He,bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,je,bt.width,bt.height,0,Oe,He,bt.data)}}else{B?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,He,ye[ue]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,Oe,He,ye[ue]);for(let Be=0;Be<Ee.length;Be++){let Ue=Ee[Be];B?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,Oe,He,Ue.image[ue]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,je,Oe,He,Ue.image[ue])}}}m(v)&&E(e.TEXTURE_CUBE_MAP),de.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ce(C,v,H,U,K,de){let fe=r.convert(H.format,H.colorSpace),ee=r.convert(H.type),oe=M(H.internalFormat,fe,ee,H.normalized,H.colorSpace),me=i.get(v),Ne=i.get(H);if(Ne.__renderTarget=v,!me.__hasExternalTextures){let ye=Math.max(1,v.width>>de),ve=Math.max(1,v.height>>de);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,de,oe,ye,ve,v.depth,0,fe,ee,null):n.texImage2D(K,de,oe,ye,ve,0,fe,ee,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),se(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,U,K,Ne.__webglTexture,0,z(v)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,U,K,Ne.__webglTexture,de),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(C,v,H){if(e.bindRenderbuffer(e.RENDERBUFFER,C),v.depthBuffer){let U=v.depthTexture,K=U&&U.isDepthTexture?U.type:null,de=T(v.stencilBuffer,K),fe=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;se(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z(v),de,v.width,v.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,z(v),de,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,de,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,fe,e.RENDERBUFFER,C)}else{let U=v.textures;for(let K=0;K<U.length;K++){let de=U[K],fe=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),oe=M(de.internalFormat,fe,ee,de.normalized,de.colorSpace);se(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z(v),oe,v.width,v.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,z(v),oe,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,oe,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ke(C,v,H){let U=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),U){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),st(e.TEXTURE_CUBE_MAP,v.depthTexture);let me=r.convert(v.depthTexture.format),Ne=r.convert(v.depthTexture.type),ye;v.depthTexture.format===On?ye=e.DEPTH_COMPONENT24:v.depthTexture.format===xi&&(ye=e.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ye,v.width,v.height,0,me,Ne,null)}}else ae(v.depthTexture,0);let de=K.__webglTexture,fe=z(v),ee=U?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,oe=v.depthTexture.format===xi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===On)se(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,ee,de,0,fe):e.framebufferTexture2D(e.FRAMEBUFFER,oe,ee,de,0);else if(v.depthTexture.format===xi)se(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,ee,de,0,fe):e.framebufferTexture2D(e.FRAMEBUFFER,oe,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function D(C){let v=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let U=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),U){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,U.removeEventListener("dispose",K)};U.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=U}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let U=0;U<6;U++)Ke(v.__webglFramebuffer[U],C,U);else{let U=C.texture.mipmaps;U&&U.length>0?Ke(v.__webglFramebuffer[0],C,0):Ke(v.__webglFramebuffer,C,0)}else if(H){v.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[U]),v.__webglDepthbuffer[U]===void 0)v.__webglDepthbuffer[U]=e.createRenderbuffer(),Me(v.__webglDepthbuffer[U],C,!1);else{let K=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[U];e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,de)}}else{let U=C.texture.mipmaps;if(U&&U.length>0?n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),Me(v.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,de)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(C,v,H){let U=i.get(C);v!==void 0&&ce(U.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&D(C)}function ot(C){let v=C.texture,H=i.get(C),U=i.get(v);C.addEventListener("dispose",o);let K=C.textures,de=C.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(U.__webglTexture===void 0&&(U.__webglTexture=e.createTexture()),U.__version=v.version,a.memory.textures++),de){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let oe=0;oe<v.mipmaps.length;oe++)H.__webglFramebuffer[ee][oe]=e.createFramebuffer()}else H.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<v.mipmaps.length;ee++)H.__webglFramebuffer[ee]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(fe)for(let ee=0,oe=K.length;ee<oe;ee++){let me=i.get(K[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),a.memory.textures++)}if(C.samples>0&&se(C)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){let oe=K[ee];H.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);let me=r.convert(oe.format,oe.colorSpace),Ne=r.convert(oe.type),ye=M(oe.internalFormat,me,Ne,oe.normalized,oe.colorSpace,C.isXRRenderTarget===!0),ve=z(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,ye,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(de){n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture),st(e.TEXTURE_CUBE_MAP,v);for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)ce(H.__webglFramebuffer[ee][oe],C,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,oe);else ce(H.__webglFramebuffer[ee],C,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(v)&&E(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,oe=K.length;ee<oe;ee++){let me=K[ee],Ne=i.get(me),ye=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ye,Ne.__webglTexture),st(ye,me),ce(H.__webglFramebuffer,C,me,e.COLOR_ATTACHMENT0+ee,ye,0),m(me)&&E(ye)}n.unbindTexture()}else{let ee=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ee,U.__webglTexture),st(ee,v),v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)ce(H.__webglFramebuffer[oe],C,v,e.COLOR_ATTACHMENT0,ee,oe);else ce(H.__webglFramebuffer,C,v,e.COLOR_ATTACHMENT0,ee,0);m(v)&&E(ee),n.unbindTexture()}C.depthBuffer&&D(C)}function De(C){let v=C.textures;for(let H=0,U=v.length;H<U;H++){let K=v[H];if(m(K)){let de=N(C),fe=i.get(K).__webglTexture;n.bindTexture(de,fe),E(de),n.unbindTexture()}}}let rt=[],y=[];function R(C){if(C.samples>0){if(se(C)===!1){let v=C.textures,H=C.width,U=C.height,K=e.COLOR_BUFFER_BIT,de=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=i.get(C),ee=v.length>1;if(ee)for(let me=0;me<v.length;me++)n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let oe=C.texture.mipmaps;oe&&oe.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<v.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ne=i.get(v[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ne,0)}e.blitFramebuffer(0,0,H,U,0,0,H,U,K,e.NEAREST),l===!0&&(rt.length=0,y.length=0,rt.push(e.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(rt.push(de),y.push(de),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,y)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<v.length;me++){n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ne=i.get(v[me]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,Ne,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function z(C){return Math.min(s.maxSamples,C.samples)}function se(C){let v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(C){let v=a.render.frame;d.get(C)!==v&&(d.set(C,v),C.update())}function Ce(C,v){let H=C.colorSpace,U=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Vs&&H!==ti&&(ht.getTransfer(H)===pt?(U!==mn||K!==tn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",H)),v}function pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=$,this.getTextureUnits=F,this.setTextureUnits=q,this.setTexture2D=ae,this.setTexture2DArray=ie,this.setTexture3D=ne,this.setTextureCube=le,this.rebindTextures=ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function z0(e,t){function n(i,s=ti){let r,a=ht.getTransfer(s);if(i===tn)return e.UNSIGNED_BYTE;if(i===za)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ha)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ql)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Yl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wl)return e.BYTE;if(i===Xl)return e.SHORT;if(i===bs)return e.UNSIGNED_SHORT;if(i===Ba)return e.INT;if(i===En)return e.UNSIGNED_INT;if(i===pn)return e.FLOAT;if(i===An)return e.HALF_FLOAT;if(i===Zl)return e.ALPHA;if(i===Jl)return e.RGB;if(i===mn)return e.RGBA;if(i===On)return e.DEPTH_COMPONENT;if(i===xi)return e.DEPTH_STENCIL;if(i===Va)return e.RED;if(i===Ga)return e.RED_INTEGER;if(i===bi)return e.RG;if(i===Wa)return e.RG_INTEGER;if(i===Xa)return e.RGBA_INTEGER;if(i===pr||i===mr||i===gr||i===_r)if(a===pt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qa||i===Ya||i===Za||i===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Ka||i===ja||i===Qa||i===eo||i===vr||i===to)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$a||i===Ka)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ja)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qa)return r.COMPRESSED_R11_EAC;if(i===eo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===vr)return r.COMPRESSED_RG11_EAC;if(i===to)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===ho||i===co||i===uo||i===fo||i===po||i===mo||i===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===no)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===io)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===so)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ro)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ao)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ho)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===co)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===po)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===go)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_o||i===vo||i===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_o)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xo||i===bo||i===yr||i===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new ir(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new an({vertexShader:H0,fragmentShader:V0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ze(new zt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Bn{constructor(t,n){super();let i=this,s=null,r=1,a=null,c="local-floor",l=1,h=null,d=null,p=null,f=null,g=null,_=null,x=typeof XRWebGLBinding<"u",u=new mh,m={},E=n.getContextAttributes(),N=null,M=null,T=[],w=[],P=new qe,o=null,A=null,b=new Ht;b.viewport=new Et;let k=new Ht;k.viewport=new Et;let V=[b,k],$=new Na,F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let re=T[G];return re===void 0&&(re=new ds,T[G]=re),re.getTargetRaySpace()},this.getControllerGrip=function(G){let re=T[G];return re===void 0&&(re=new ds,T[G]=re),re.getGripSpace()},this.getHand=function(G){let re=T[G];return re===void 0&&(re=new ds,T[G]=re),re.getHandSpace()};function te(G){let re=w.indexOf(G.inputSource);if(re===-1)return;let ge=T[re];ge!==void 0&&(ge.update(G.inputSource,G.frame,h||a),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ae);for(let G=0;G<T.length;G++){let re=w[G];re!==null&&(w[G]=null,T[G].disconnect(re))}F=null,q=null,u.reset();for(let G in m)delete m[G];if(t.setRenderTarget(N),g=null,f=null,p=null,s=null,M=null,at.stop(),i.isPresenting=!1,t.setPixelRatio(o),t.setSize(P.width,P.height,!1),A!==null){let G=A.camera;G.fov=A.fov,G.zoom=A.zoom,G.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){c=G,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(G){h=G},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(N=t.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ae),E.xrCompatible!==!0&&await n.makeXRCompatible(),o=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,J=null,ce=null;E.depth&&(ce=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=E.stencil?xi:On,J=E.stencil?Ss:En);let Me={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Me),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new en(f.textureWidth,f.textureHeight,{format:mn,type:tn,depthTexture:new fi(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,n,ge),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new en(g.framebufferWidth,g.framebufferHeight,{format:mn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(c),at.setContext(s),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function ae(G){for(let re=0;re<G.removed.length;re++){let ge=G.removed[re],J=w.indexOf(ge);J>=0&&(w[J]=null,T[J].disconnect(ge))}for(let re=0;re<G.added.length;re++){let ge=G.added[re],J=w.indexOf(ge);if(J===-1){for(let Me=0;Me<T.length;Me++)if(Me>=w.length){w.push(ge),J=Me;break}else if(w[Me]===null){w[Me]=ge,J=Me;break}if(J===-1)break}let ce=T[J];ce&&ce.connect(ge)}}let ie=new W,ne=new W;function le(G,re,ge){ie.setFromMatrixPosition(re.matrixWorld),ne.setFromMatrixPosition(ge.matrixWorld);let J=ie.distanceTo(ne),ce=re.projectionMatrix.elements,Me=ge.projectionMatrix.elements,Ke=ce[14]/(ce[10]-1),D=ce[14]/(ce[10]+1),ke=(ce[9]+1)/ce[5],ot=(ce[9]-1)/ce[5],De=(ce[8]-1)/ce[0],rt=(Me[8]+1)/Me[0],y=Ke*De,R=Ke*rt,z=J/(-De+rt),se=z*-De;if(re.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(se),G.translateZ(z),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ce[10]===-1)G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let I=Ke+z,Ce=D+z,pe=y-se,C=R+(J-se),v=ke*D/Ce*I,H=ot*D/Ce*I;G.projectionMatrix.makePerspective(pe,C,v,H,I,Ce),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Ae(G,re){re===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(re.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let re=G.near,ge=G.far;u.texture!==null&&(u.depthNear>0&&(re=u.depthNear),u.depthFar>0&&(ge=u.depthFar)),$.near=k.near=b.near=re,$.far=k.far=b.far=ge,(F!==$.near||q!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),F=$.near,q=$.far),$.layers.mask=G.layers.mask|6,b.layers.mask=$.layers.mask&-5,k.layers.mask=$.layers.mask&-3;let J=G.parent,ce=$.cameras;Ae($,J);for(let Me=0;Me<ce.length;Me++)Ae(ce[Me],J);ce.length===2?le($,b,k):$.projectionMatrix.copy(b.projectionMatrix),A===null&&G.isPerspectiveCamera&&(A={camera:G,fov:G.fov,zoom:G.zoom}),_e(G,$,J)};function _e(G,re,ge){ge===null?G.matrix.copy(re.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply(re.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=qs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh($)},this.getCameraTexture=function(G){return m[G]};let $e=null;function st(G,re){if(d=re.getViewerPose(h||a),_=re,d!==null){let ge=d.views;g!==null&&(t.setRenderTargetFramebuffer(M,g.framebuffer),t.setRenderTarget(M));let J=!1;ge.length!==$.cameras.length&&($.cameras.length=0,J=!0);for(let D=0;D<ge.length;D++){let ke=ge[D],ot=null;if(g!==null)ot=g.getViewport(ke);else{let rt=p.getViewSubImage(f,ke);ot=rt.viewport,D===0&&(t.setRenderTargetTextures(M,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(M))}let De=V[D];De===void 0&&(De=new Ht,De.layers.enable(D),De.viewport=new Et,V[D]=De),De.matrix.fromArray(ke.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ke.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ot.x,ot.y,ot.width,ot.height),D===0&&($.matrix.copy(De.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),J===!0&&$.cameras.push(De)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=i.getBinding();let D=p.getDepthInformation(ge[0]);D&&D.isValid&&D.texture&&u.init(D,s.renderState)}if(ce&&ce.includes("camera-access")&&x){t.state.unbindTexture(),p=i.getBinding();for(let D=0;D<ge.length;D++){let ke=ge[D].camera;if(ke){let ot=m[ke];ot||(ot=new ir,m[ke]=ot);let De=p.getCameraImage(ke);ot.sourceTexture=De}}}}for(let ge=0;ge<T.length;ge++){let J=w[ge],ce=T[ge];J!==null&&ce!==void 0&&ce.update(J,re,h||a)}$e&&$e(G,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}let at=new Tu;at.setAnimationLoop(st),this.setAnimationLoop=function(G){$e=G},this.dispose=function(){}}},G0=new mt,Ru=new Ye;Ru.set(-1,0,0,0,1,0,0,0,1);function W0(e,t){function n(u,m){u.matrixAutoUpdate===!0&&u.updateMatrix(),m.value.copy(u.matrix)}function i(u,m){m.color.getRGB(u.fogColor.value,jl(e)),m.isFog?(u.fogNear.value=m.near,u.fogFar.value=m.far):m.isFogExp2&&(u.fogDensity.value=m.density)}function s(u,m,E,N,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(u,m):m.isMeshLambertMaterial?(r(u,m),m.envMap&&(u.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(u,m),p(u,m)):m.isMeshPhongMaterial?(r(u,m),d(u,m),m.envMap&&(u.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(u,m),f(u,m),m.isMeshPhysicalMaterial&&g(u,m,M)):m.isMeshMatcapMaterial?(r(u,m),_(u,m)):m.isMeshDepthMaterial?r(u,m):m.isMeshDistanceMaterial?(r(u,m),x(u,m)):m.isMeshNormalMaterial?r(u,m):m.isLineBasicMaterial?(a(u,m),m.isLineDashedMaterial&&c(u,m)):m.isPointsMaterial?l(u,m,E,N):m.isSpriteMaterial?h(u,m):m.isShadowMaterial?(u.color.value.copy(m.color),u.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(u,m){u.opacity.value=m.opacity,m.color&&u.diffuse.value.copy(m.color),m.emissive&&u.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(u.map.value=m.map,n(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,n(m.alphaMap,u.alphaMapTransform)),m.bumpMap&&(u.bumpMap.value=m.bumpMap,n(m.bumpMap,u.bumpMapTransform),u.bumpScale.value=m.bumpScale,m.side===Kt&&(u.bumpScale.value*=-1)),m.normalMap&&(u.normalMap.value=m.normalMap,n(m.normalMap,u.normalMapTransform),u.normalScale.value.copy(m.normalScale),m.side===Kt&&u.normalScale.value.negate()),m.displacementMap&&(u.displacementMap.value=m.displacementMap,n(m.displacementMap,u.displacementMapTransform),u.displacementScale.value=m.displacementScale,u.displacementBias.value=m.displacementBias),m.emissiveMap&&(u.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,u.emissiveMapTransform)),m.specularMap&&(u.specularMap.value=m.specularMap,n(m.specularMap,u.specularMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest);let E=t.get(m),N=E.envMap,M=E.envMapRotation;N&&(u.envMap.value=N,u.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(M)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(Ru),u.reflectivity.value=m.reflectivity,u.ior.value=m.ior,u.refractionRatio.value=m.refractionRatio),m.lightMap&&(u.lightMap.value=m.lightMap,u.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,u.lightMapTransform)),m.aoMap&&(u.aoMap.value=m.aoMap,u.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,u.aoMapTransform))}function a(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,m.map&&(u.map.value=m.map,n(m.map,u.mapTransform))}function c(u,m){u.dashSize.value=m.dashSize,u.totalSize.value=m.dashSize+m.gapSize,u.scale.value=m.scale}function l(u,m,E,N){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.size.value=m.size*E,u.scale.value=N*.5,m.map&&(u.map.value=m.map,n(m.map,u.uvTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,n(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function h(u,m){u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.rotation.value=m.rotation,m.map&&(u.map.value=m.map,n(m.map,u.mapTransform)),m.alphaMap&&(u.alphaMap.value=m.alphaMap,n(m.alphaMap,u.alphaMapTransform)),m.alphaTest>0&&(u.alphaTest.value=m.alphaTest)}function d(u,m){u.specular.value.copy(m.specular),u.shininess.value=Math.max(m.shininess,1e-4)}function p(u,m){m.gradientMap&&(u.gradientMap.value=m.gradientMap)}function f(u,m){u.metalness.value=m.metalness,m.metalnessMap&&(u.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,u.metalnessMapTransform)),u.roughness.value=m.roughness,m.roughnessMap&&(u.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,u.roughnessMapTransform)),m.envMap&&(u.envMapIntensity.value=m.envMapIntensity)}function g(u,m,E){u.ior.value=m.ior,m.sheen>0&&(u.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),u.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(u.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,u.sheenColorMapTransform)),m.sheenRoughnessMap&&(u.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,u.sheenRoughnessMapTransform))),m.clearcoat>0&&(u.clearcoat.value=m.clearcoat,u.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(u.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,u.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(u.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&u.clearcoatNormalScale.value.negate())),m.dispersion>0&&(u.dispersion.value=m.dispersion),m.retroreflectivity>0&&(u.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(u.iridescence.value=m.iridescence,u.iridescenceIOR.value=m.iridescenceIOR,u.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(u.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,u.iridescenceMapTransform)),m.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),m.transmission>0&&(u.transmission.value=m.transmission,u.transmissionSamplerMap.value=E.texture,u.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(u.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,u.transmissionMapTransform)),u.thickness.value=m.thickness,m.thicknessMap&&(u.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=m.attenuationDistance,u.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(u.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(u.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=m.specularIntensity,u.specularColor.value.copy(m.specularColor),m.specularColorMap&&(u.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,u.specularColorMapTransform)),m.specularIntensityMap&&(u.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,u.specularIntensityMapTransform))}function _(u,m){m.matcap&&(u.matcap.value=m.matcap)}function x(u,m){let E=t.get(m).light;u.referencePosition.value.setFromMatrixPosition(E.matrixWorld),u.nearDistance.value=E.shadow.camera.near,u.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function X0(e,t,n,i){let s={},r={},a=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){let w=T.program;i.uniformBlockBinding(M,w)}function h(M,T){let w=s[M.id];w===void 0&&(u(M),w=d(M),s[M.id]=w,M.addEventListener("dispose",E));let P=T.program;i.updateUBOMapping(M,P);let o=t.render.frame;r[M.id]!==o&&(f(M),r[M.id]=o)}function d(M){let T=p();M.__bindingPointIndex=T;let w=e.createBuffer(),P=M.__size,o=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,P,o),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,w),w}function p(){for(let M=0;M<c;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let T=s[M.id],w=M.uniforms,P=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let o=0,A=w.length;o<A;o++){let b=w[o];if(Array.isArray(b))for(let k=0,V=b.length;k<V;k++)g(b[k],o,k,P);else g(b,o,0,P)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function g(M,T,w,P){if(x(M,T,w,P)===!0){let o=M.__offset,A=M.value;if(Array.isArray(A)){let b=0;for(let k=0;k<A.length;k++){let V=A[k],$=m(V);_(V,M.__data,b),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(b+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,M.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,o,M.__data)}}function _(M,T,w){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,w)}function x(M,T,w,P){let o=M.value,A=T+"_"+w;if(P[A]===void 0)return typeof o=="number"||typeof o=="boolean"?P[A]=o:ArrayBuffer.isView(o)?P[A]=o.slice():P[A]=o.clone(),!0;{let b=P[A];if(typeof o=="number"||typeof o=="boolean"){if(b!==o)return P[A]=o,!0}else{if(ArrayBuffer.isView(o))return!0;if(b.equals(o)===!1)return b.copy(o),!0}}return!1}function u(M){let T=M.uniforms,w=0,P=16;for(let A=0,b=T.length;A<b;A++){let k=Array.isArray(T[A])?T[A]:[T[A]];for(let V=0,$=k.length;V<$;V++){let F=k[V],q=Array.isArray(F.value)?F.value:[F.value];for(let te=0,X=q.length;te<X;te++){let ae=q[te],ie=m(ae),ne=w%P,le=ne%ie.boundary,Ae=ne+le;w+=le,Ae!==0&&P-Ae<ie.storage&&(w+=P-Ae),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=ie.storage}}}let o=w%P;return o>0&&(w+=P-o),M.__size=w,M.__cache={},this}function m(M){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",M),T}function E(M){let T=M.target;T.removeEventListener("dispose",E);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function N(){for(let M in s)e.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:h,dispose:N}}var q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function Y0(){return Gn===null&&(Gn=new er(q0,16,16,bi,An),Gn.name="DFG_LUT",Gn.minFilter=Vt,Gn.magFilter=Vt,Gn.wrapS=Fn,Gn.wrapT=Fn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var Ro=class{constructor(t={}){let{canvas:n=Zc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:g=tn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let x=g,u=new Set([Xa,Wa,Ga]),m=new Set([tn,En,bs,Ss,za,Ha]),E=new Uint32Array(4),N=new Int32Array(4),M=new W,T=null,w=null,P=[],o=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,k=!1,V=null,$=null,F=null,q=null;this._outputColorSpace=Lt;let te=0,X=0,ae=null,ie=-1,ne=null,le=new Et,Ae=new Et,_e=null,$e=new Qe(0),st=0,at=n.width,G=n.height,re=1,ge=null,J=null,ce=new Et(0,0,at,G),Me=new Et(0,0,at,G),Ke=!1,D=new ms,ke=!1,ot=!1,De=new mt,rt=new W,y=new Et,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function se(){return ae===null?re:1}let I=i;function Ce(S,O){return n.getContext(S,O)}let pe,C,v,H,U,K,de,fe,ee,oe,me,Ne,ye,ve,Oe,He,je,B,xe,he,be,Ee,ue;try{let S={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ua}`),n.addEventListener("webglcontextlost",bt,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",vn,!1),I===null){let O="webgl2";if(I=Ce(O,S),I===null)throw Ce(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(S){throw n.removeEventListener("webglcontextlost",bt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),Ve("WebGLRenderer: "+S.message),S}function Be(){pe=new eg(I),pe.init(),be=new z0(I,pe),C=new Wm(I,pe,t,be),v=new O0(I,pe),C.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),$=I.createFramebuffer(),F=I.createFramebuffer(),q=I.createFramebuffer(),H=new ig(I),U=new T0,K=new B0(I,pe,v,U,C,be,H),de=new Qm(b),fe=new rf(I),Ee=new Vm(I,fe),ee=new tg(I,fe,H,Ee),oe=new rg(I,ee,fe,Ee,H),B=new sg(I,C,K),Oe=new Xm(U),me=new M0(b,de,pe,C,Ee,Oe),Ne=new W0(b,U),ye=new E0,ve=new L0(pe),je=new Hm(b,de,v,oe,_,l),He=new k0(b,oe,C),ue=new X0(I,H,C,v),xe=new Gm(I,pe,H),he=new ng(I,pe,H),H.programs=me.programs,b.capabilities=C,b.extensions=pe,b.properties=U,b.renderLists=ye,b.shadowMap=He,b.state=v,b.info=H}x!==tn&&(A=new og(x,n.width,n.height,c,s,r));let Ue=new gh(b,I);this.xr=Ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=pe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=pe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(S){S!==void 0&&(re=S,this.setSize(at,G,!1))},this.getSize=function(S){return S.set(at,G)},this.setSize=function(S,O,Q=!0){if(Ue.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}at=S,G=O,n.width=Math.floor(S*re),n.height=Math.floor(O*re),Q===!0&&(n.style.width=S+"px",n.style.height=O+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(at*re,G*re).floor()},this.setDrawingBufferSize=function(S,O,Q){at=S,G=O,re=Q,n.width=Math.floor(S*Q),n.height=Math.floor(O*Q),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(x===tn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(le)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,O,Q,Y){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,O,Q,Y),v.viewport(le.copy(ce).multiplyScalar(re).round())},this.getScissor=function(S){return S.copy(Me)},this.setScissor=function(S,O,Q,Y){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,O,Q,Y),v.scissor(Ae.copy(Me).multiplyScalar(re).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){v.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){ge=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,Q=!0){let Y=0;if(S){let Z=!1;if(ae!==null){let we=ae.texture.format;Z=u.has(we)}if(Z){let we=ae.texture.type,Re=m.has(we),Te=je.getClearColor(),Ie=je.getClearAlpha(),Fe=Te.r,et=Te.g,lt=Te.b;Re?(E[0]=Fe,E[1]=et,E[2]=lt,E[3]=Ie,I.clearBufferuiv(I.COLOR,0,E)):(N[0]=Fe,N[1]=et,N[2]=lt,N[3]=Ie,I.clearBufferiv(I.COLOR,0,N))}else Y|=I.COLOR_BUFFER_BIT}O&&(Y|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),V=S},this.dispose=function(){n.removeEventListener("webglcontextlost",bt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),je.dispose(),ye.dispose(),ve.dispose(),U.dispose(),de.dispose(),oe.dispose(),Ee.dispose(),ue.dispose(),me.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Dh),Ue.removeEventListener("sessionend",Nh),Mi.stop()};function bt(S){S.preventDefault(),Xs("WebGLRenderer: Context Lost."),k=!0}function dt(){Xs("WebGLRenderer: Context Restored."),k=!1;let S=H.autoReset,O=He.enabled,Q=He.autoUpdate,Y=He.needsUpdate,Z=He.type;Be(),H.autoReset=S,He.enabled=O,He.autoUpdate=Q,He.needsUpdate=Y,He.type=Z}function vn(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ln(S){let O=S.target;O.removeEventListener("dispose",Ln),md(O)}function md(S){gd(S),U.remove(S)}function gd(S){let O=U.get(S).programs;O!==void 0&&(O.forEach(function(Q){me.releaseProgram(Q)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,Q,Y,Z,we){O===null&&(O=R);let Re=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Te=yd(S,O,Q,Y,Z);v.setMaterial(Y,Re);let Ie=Q.index,Fe=1;if(Y.wireframe===!0){if(Ie=ee.getWireframeAttribute(Q),Ie===void 0)return;Fe=2}let et=Q.drawRange,lt=Q.attributes.position,Le=et.start*Fe,ft=(et.start+et.count)*Fe;we!==null&&(Le=Math.max(Le,we.start*Fe),ft=Math.min(ft,(we.start+we.count)*Fe)),Ie!==null?(Le=Math.max(Le,0),ft=Math.min(ft,Ie.count)):lt!=null&&(Le=Math.max(Le,0),ft=Math.min(ft,lt.count));let Rt=ft-Le;if(Rt<0||Rt===1/0)return;Ee.setup(Z,Y,Te,Q,Ie);let Mt,xt=xe;if(Ie!==null&&(Mt=fe.get(Ie),xt=he,xt.setIndex(Mt)),Z.isMesh)Y.wireframe===!0?(v.setLineWidth(Y.wireframeLinewidth*se()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(Z.isLine){let Wt=Y.linewidth;Wt===void 0&&(Wt=1),v.setLineWidth(Wt*se()),Z.isLineSegments?xt.setMode(I.LINES):Z.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else Z.isPoints?xt.setMode(I.POINTS):Z.isSprite&&xt.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Wt=Z._multiDrawStarts,Pe=Z._multiDrawCounts,Zt=Z._multiDrawCount,ut=Ie?fe.get(Ie).bytesPerElement:1,un=U.get(Y).currentProgram.getUniforms();for(let Dn=0;Dn<Zt;Dn++)un.setValue(I,"_gl_DrawID",Dn),xt.render(Wt[Dn]/ut,Pe[Dn])}else if(Z.isInstancedMesh)xt.renderInstances(Le,Rt,Z.count);else if(Q.isInstancedBufferGeometry){let Wt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pe=Math.min(Q.instanceCount,Wt);xt.renderInstances(Le,Rt,Pe)}else xt.render(Le,Rt)};function Lh(S,O,Q,Y){V!==null&&S.isNodeMaterial&&V.setObject(Y,S),ke===!0&&Oe.setState(S,Q,!1),S.transparent===!0&&S.side===ln&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,Nr(S,O,Y),S.side=_i,S.needsUpdate=!0,Nr(S,O,Y),S.side=ln):Nr(S,O,Y)}this.compile=function(S,O,Q=null){Q===null&&(Q=S),V!==null&&V.renderStart(S,O,Q),w=ve.get(Q),w.init(O),o.push(w),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),S!==Q&&S.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),V!==null&&V.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,ke=Oe.init(this.clippingPlanes,ot),ke===!0&&Oe.setGlobalState(this.clippingPlanes,O),V!==null&&He.render(w.state.shadowsArray,Q,O);let Y=new Set;return S.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let we=Z.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){let Te=we[Re];Lh(Te,Q,O,Z),Y.add(Te)}else Lh(we,Q,O,Z),Y.add(we)}),w=o.pop(),V!==null&&V.renderEnd(),Y},this.compileAsync=function(S,O,Q=null){let Y=this.compile(S,O,Q);return new Promise(Z=>{function we(){if(Y.forEach(function(Re){let Ie=U.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&Y.delete(Re)}),Y.size===0){Z(S);return}setTimeout(we,10)}pe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Zo=null;function _d(S){Zo&&Zo(S)}function Dh(){Mi.stop()}function Nh(){Mi.start()}let Mi=new Tu;Mi.setAnimationLoop(_d),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(S){Zo=S,Ue.setAnimationLoop(S),S===null?Mi.stop():Mi.start()},Ue.addEventListener("sessionstart",Dh),Ue.addEventListener("sessionend",Nh),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;V!==null&&V.renderStart(S,O);let Q=Ue.enabled===!0&&Ue.isPresenting===!0,Y=A!==null&&(ae===null||Q)&&A.begin(b,ae);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(O),O=Ue.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,ae),w=ve.get(S,o.length),w.init(O),w.state.textureUnits=K.getTextureUnits(),o.push(w),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),D.setFromProjectionMatrix(De,Mn,O.reversedDepth),ot=this.localClippingEnabled,ke=Oe.init(this.clippingPlanes,ot),T=ye.get(S,P.length),T.init(),P.push(T),Ue.enabled===!0&&Ue.isPresenting===!0){let Re=b.xr.getDepthSensingMesh();Re!==null&&Jo(Re,O,-1/0,b.sortObjects)}Jo(S,O,0,b.sortObjects),T.finish(),V!==null&&V.updateLights(w.state.lightsArray),b.sortObjects===!0&&T.sort(ge,J),z=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,z&&je.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&Oe.beginShadows();let Z=w.state.shadowsArray;if(He.render(Z,S,O),ke===!0&&Oe.endShadows(),(Y&&A.hasRenderPass())===!1){let Re=T.opaque,Te=T.transmissive;if(w.setupLights(),O.isArrayCamera){let Ie=O.cameras;if(Te.length>0)for(let Fe=0,et=Ie.length;Fe<et;Fe++){let lt=Ie[Fe];Fh(Re,Te,S,lt)}z&&je.render(S);for(let Fe=0,et=Ie.length;Fe<et;Fe++){let lt=Ie[Fe];Uh(T,S,lt,lt.viewport)}}else Te.length>0&&Fh(Re,Te,S,O),z&&je.render(S),Uh(T,S,O)}ae!==null&&X===0&&(K.updateMultisampleRenderTarget(ae),K.updateRenderTargetMipmap(ae)),Y&&A.end(b),S.isScene===!0&&S.onAfterRender(b,S,O),Ee.resetDefaultState(),ie=-1,ne=null,o.pop(),o.length>0?(w=o[o.length-1],K.setTextureUnits(w.state.textureUnits),ke===!0&&Oe.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,V!==null&&V.renderEnd()};function Jo(S,O,Q,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)Q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(D)){Y&&y.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);let Re=oe.update(S),Te=S.material;Te.visible&&T.push(S,Re,Te,Q,y.z,null,O)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(D))){let Re=oe.update(S),Te=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),y.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),y.copy(Re.boundingSphere.center)),y.applyMatrix4(S.matrixWorld).applyMatrix4(De)),Array.isArray(Te)){let Ie=Re.groups;for(let Fe=0,et=Ie.length;Fe<et;Fe++){let lt=Ie[Fe],Le=Te[lt.materialIndex];Le&&Le.visible&&T.push(S,Re,Le,Q,y.z,lt,O)}}else Te.visible&&T.push(S,Re,Te,Q,y.z,null,O)}}let we=S.children;for(let Re=0,Te=we.length;Re<Te;Re++)Jo(we[Re],O,Q,Y)}function Uh(S,O,Q,Y){let{opaque:Z,transmissive:we,transparent:Re}=S;w.setupLightsView(Q),ke===!0&&Oe.setGlobalState(b.clippingPlanes,Q),Y&&v.viewport(le.copy(Y)),Z.length>0&&Dr(Z,O,Q),we.length>0&&Dr(we,O,Q),Re.length>0&&Dr(Re,O,Q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Fh(S,O,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Le=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new en(1,1,{generateMipmaps:!0,type:Le?An:tn,minFilter:yi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let we=w.state.transmissionRenderTarget[Y.id],Re=Y.viewport||le;we.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);let Te=b.getRenderTarget(),Ie=b.getActiveCubeFace(),Fe=b.getActiveMipmapLevel();b.setRenderTarget(we),b.getClearColor($e),st=b.getClearAlpha(),st<1&&b.setClearColor(16777215,.5),b.clear(),z&&je.render(Q);let et=b.toneMapping;b.toneMapping=wn;let lt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),ke===!0&&Oe.setGlobalState(b.clippingPlanes,Y),Dr(S,Q,Y),K.updateMultisampleRenderTarget(we),K.updateRenderTargetMipmap(we),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ft=0,Rt=O.length;ft<Rt;ft++){let Mt=O[ft],{object:xt,geometry:Wt,material:Pe,group:Zt}=Mt;if(Pe.side===ln&&xt.layers.test(Y.layers)){let ut=Pe.side;Pe.side=Kt,Pe.needsUpdate=!0,kh(xt,Q,Y,Wt,Pe,Zt),Pe.side=ut,Pe.needsUpdate=!0,Le=!0}}Le===!0&&(K.updateMultisampleRenderTarget(we),K.updateRenderTargetMipmap(we))}b.setRenderTarget(Te,Ie,Fe),b.setClearColor($e,st),lt!==void 0&&(Y.viewport=lt),b.toneMapping=et}function Dr(S,O,Q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,we=S.length;Z<we;Z++){let Re=S[Z],{object:Te,geometry:Ie,group:Fe}=Re,et=Re.material;et.allowOverride===!0&&Y!==null&&(et=Y),Te.layers.test(Q.layers)&&kh(Te,O,Q,Ie,et,Fe)}}function kh(S,O,Q,Y,Z,we){V!==null&&Z.isNodeMaterial&&V.setObject(S,Z),S.onBeforeRender(b,O,Q,Y,Z,we),S.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(b,O,Q,Y,S,we),Z.transparent===!0&&Z.side===ln&&Z.forceSinglePass===!1?(Z.side=Kt,Z.needsUpdate=!0,b.renderBufferDirect(Q,O,Y,Z,S,we),Z.side=_i,Z.needsUpdate=!0,b.renderBufferDirect(Q,O,Y,Z,S,we),Z.side=ln):b.renderBufferDirect(Q,O,Y,Z,S,we),S.onAfterRender(b,O,Q,Y,Z,we)}function Nr(S,O,Q){O.isScene!==!0&&(O=R);let Y=U.get(S),Z=w.state.lights,we=w.state.shadowsArray,Re=Z.state.version,Te=me.getParameters(S,Z.state,we,O,Q,w.state.lightProbeGridArray),Ie=me.getProgramCacheKey(Te),Fe=Y.programs;Y.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let et=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Y.envMap=de.get(S.envMap||Y.environment,et),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Ln),Fe=new Map,Y.programs=Fe);let lt=Fe.get(Ie);if(lt!==void 0){if(Y.currentProgram===lt&&Y.lightsStateVersion===Re)return Bh(S,Te),lt}else Te.uniforms=me.getUniforms(S),V!==null&&S.isNodeMaterial&&V.build(S,Q,Te),S.onBeforeCompile(Te,b),lt=me.acquireProgram(Te,Ie),Fe.set(Ie,lt),Y.uniforms=Te.uniforms;let Le=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),Bh(S,Te),Y.needsLights=bd(S),Y.lightsStateVersion=Re,Y.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.sunLights.value=Z.state.sun,Le.sunLightShadows.value=Z.state.sunShadow,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.sunShadowMatrix.value=Z.state.sunShadowMatrix,Le.sunShadowCascade.value=Z.state.sunShadowCascade,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=lt,Y.uniformsList=null,lt}function Oh(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=ws.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Bh(S,O){let Q=U.get(S);Q.outputColorSpace=O.outputColorSpace,Q.batching=O.batching,Q.batchingColor=O.batchingColor,Q.instancing=O.instancing,Q.instancingColor=O.instancingColor,Q.instancingMorph=O.instancingMorph,Q.skinning=O.skinning,Q.morphTargets=O.morphTargets,Q.morphNormals=O.morphNormals,Q.morphColors=O.morphColors,Q.morphTargetsCount=O.morphTargetsCount,Q.numClippingPlanes=O.numClippingPlanes,Q.numIntersection=O.numClipIntersection,Q.vertexAlphas=O.vertexAlphas,Q.vertexTangents=O.vertexTangents,Q.toneMapping=O.toneMapping}function vd(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let Q=0,Y=S.length;Q<Y;Q++){let Z=S[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(M))return Z}return null}function yd(S,O,Q,Y,Z){O.isScene!==!0&&(O=R),K.resetTextureUnits();let we=O.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,Te=ae===null?b.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ht.workingColorSpace,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Fe=de.get(Y.envMap||Re,Ie),et=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,lt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!Q.morphAttributes.position,ft=!!Q.morphAttributes.normal,Rt=!!Q.morphAttributes.color,Mt=wn;Y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Mt=b.toneMapping);let xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Wt=xt!==void 0?xt.length:0,Pe=U.get(Y),Zt=w.state.lights;if(ke===!0&&(ot===!0||S!==ne)){let St=S===ne&&Y.id===ie;Oe.setState(Y,S,St)}let ut=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Zt.state.version||Pe.outputColorSpace!==Te||Z.isBatchedMesh&&Pe.batching===!1||!Z.isBatchedMesh&&Pe.batching===!0||Z.isBatchedMesh&&Pe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Pe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Pe.instancing===!1||!Z.isInstancedMesh&&Pe.instancing===!0||Z.isSkinnedMesh&&Pe.skinning===!1||!Z.isSkinnedMesh&&Pe.skinning===!0||Z.isInstancedMesh&&Pe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Pe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Pe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Pe.instancingMorph===!1&&Z.morphTexture!==null||Pe.envMap!==Fe||Y.fog===!0&&Pe.fog!==we||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Oe.numPlanes||Pe.numIntersection!==Oe.numIntersection)||Pe.vertexAlphas!==et||Pe.vertexTangents!==lt||Pe.morphTargets!==Le||Pe.morphNormals!==ft||Pe.morphColors!==Rt||Pe.toneMapping!==Mt||Pe.morphTargetsCount!==Wt||!!Pe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Pe.__version=Y.version);let un=Pe.currentProgram;ut===!0&&(un=Nr(Y,O,Z),V&&Y.isNodeMaterial&&V.onUpdateProgram(Y,un,Pe));let Dn=!1,ii=!1,Bi=!1,_t=un.getUniforms(),Pt=Pe.uniforms;if(v.useProgram(un.program)&&(Dn=!0,ii=!0,Bi=!0),Y.id!==ie&&(ie=Y.id,ii=!0),Pe.needsLights){let St=vd(w.state.lightProbeGridArray,Z);Pe.lightProbeGrid!==St&&(Pe.lightProbeGrid=St,ii=!0)}if(Dn||ne!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_t.setValue(I,"projectionMatrix",S.projectionMatrix),_t.setValue(I,"viewMatrix",S.matrixWorldInverse);let ri=_t.map.cameraPosition;ri!==void 0&&ri.setValue(I,rt.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_t.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),ne!==S&&(ne=S,ii=!0,Bi=!0)}if(Pe.needsLights&&(Zt.state.sunShadowMap.length>0&&_t.setValue(I,"sunShadowMap",Zt.state.sunShadowMap,K),Zt.state.directionalShadowMap.length>0&&_t.setValue(I,"directionalShadowMap",Zt.state.directionalShadowMap,K),Zt.state.spotShadowMap.length>0&&_t.setValue(I,"spotShadowMap",Zt.state.spotShadowMap,K),Zt.state.pointShadowMap.length>0&&_t.setValue(I,"pointShadowMap",Zt.state.pointShadowMap,K)),Z.isSkinnedMesh){_t.setOptional(I,Z,"bindMatrix"),_t.setOptional(I,Z,"bindMatrixInverse");let St=Z.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),_t.setValue(I,"boneTexture",St.boneTexture,K))}Z.isBatchedMesh&&(_t.setOptional(I,Z,"batchingTexture"),_t.setValue(I,"batchingTexture",Z._matricesTexture,K),_t.setOptional(I,Z,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",Z._indirectTexture,K),_t.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",Z._colorsTexture,K));let si=Q.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&B.update(Z,Q,un),(ii||Pe.receiveShadow!==Z.receiveShadow)&&(Pe.receiveShadow=Z.receiveShadow,_t.setValue(I,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Pt.envMapIntensity.value=O.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Y0()),ii){if(_t.setValue(I,"toneMappingExposure",b.toneMappingExposure),Pe.needsLights&&xd(Pt,Bi),we&&Y.fog===!0&&Ne.refreshFogUniforms(Pt,we),Ne.refreshMaterialUniforms(Pt,Y,re,G,w.state.transmissionRenderTarget[S.id]),Pe.needsLights&&Pe.lightProbeGrid){let St=Pe.lightProbeGrid;Pt.probesSH.value=St.texture,Pt.probesMin.value.copy(St.boundingBox.min),Pt.probesMax.value.copy(St.boundingBox.max),Pt.probesResolution.value.copy(St.resolution)}ws.upload(I,Oh(Pe),Pt,K)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ws.upload(I,Oh(Pe),Pt,K),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_t.setValue(I,"center",Z.center),_t.setValue(I,"modelViewMatrix",Z.modelViewMatrix),_t.setValue(I,"normalMatrix",Z.normalMatrix),_t.setValue(I,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let St=Y.uniformsGroups;for(let ri=0,zi=St.length;ri<zi;ri++){let Hh=St[ri];ue.update(Hh,un),ue.bind(Hh,un)}}return un}function xd(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function bd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(S,O,Q){let Y=U.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),U.get(S.texture).__webglTexture=O,U.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let Q=U.get(S);Q.__webglFramebuffer=O,Q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,Q=0){ae=S,te=O,X=Q;let Y=null,Z=!1,we=!1;if(S){let Te=U.get(S);if(Te.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,Te.__webglFramebuffer),le.copy(S.viewport),Ae.copy(S.scissor),_e=S.scissorTest,v.viewport(le),v.scissor(Ae),v.setScissorTest(_e),ie=-1;return}else if(Te.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(Te.__hasExternalTextures)K.rebindTextures(S,U.get(S.texture).__webglTexture,U.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let et=S.depthTexture;if(Te.__boundDepthTexture!==et){if(et!==null&&U.has(et)&&(S.width!==et.image.width||S.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}let Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Fe=U.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?Y=Fe[O][Q]:Y=Fe[O],Z=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?Y=U.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?Y=Fe[Q]:Y=Fe,le.copy(S.viewport),Ae.copy(S.scissor),_e=S.scissorTest}else le.copy(ce).multiplyScalar(re).floor(),Ae.copy(Me).multiplyScalar(re).floor(),_e=Ke;if(Q!==0&&(Y=$),v.bindFramebuffer(I.FRAMEBUFFER,Y)&&v.drawBuffers(S,Y),v.viewport(le),v.scissor(Ae),v.setScissorTest(_e),Z){let Te=U.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,Q)}else if(we){let Te=O;for(let Ie=0;Ie<S.textures.length;Ie++){let Fe=U.get(S.textures[Ie]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,Q,Te)}}else if(S!==null&&Q!==0){let Te=U.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Te.__webglTexture,Q)}ie=-1};function zh(S){let O=U.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=C.textureFormatReadable(S.format),O.__typeReadable=C.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,Q,Y,Z,we,Re,Te=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){v.bindFramebuffer(I.FRAMEBUFFER,Ie);try{let Fe=S.textures[Te],et=Fe.format,lt=Fe.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te);let Le=zh(Fe);if(Le.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&Q>=0&&Q<=S.height-Z&&I.readPixels(O,Q,Y,Z,be.convert(et),be.convert(lt),we)}finally{let Fe=ae!==null?U.get(ae).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(S,O,Q,Y,Z,we,Re,Te=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(O>=0&&O<=S.width-Y&&Q>=0&&Q<=S.height-Z){v.bindFramebuffer(I.FRAMEBUFFER,Ie);let Fe=S.textures[Te],et=Fe.format,lt=Fe.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te);let Le=zh(Fe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ft),I.bufferData(I.PIXEL_PACK_BUFFER,we.byteLength,I.STREAM_READ),I.readPixels(O,Q,Y,Z,be.convert(et),be.convert(lt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Rt=ae!==null?U.get(ae).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Rt);let Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $c(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ft),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,we),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ft),I.deleteSync(Mt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(S.image.width*Y),we=Math.floor(S.image.height*Y),Re=O!==null?O.x:0,Te=O!==null?O.y:0;K.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,Re,Te,Z,we),v.unbindTexture()},this.copyTextureToTexture=function(S,O,Q=null,Y=null,Z=0,we=0){let Re,Te,Ie,Fe,et,lt,Le,ft,Rt,Mt=S.isCompressedTexture?S.mipmaps[we]:S.image;if(Q!==null)Re=Q.max.x-Q.min.x,Te=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,Fe=Q.min.x,et=Q.min.y,lt=Q.isBox3?Q.min.z:0;else{let Pt=Math.pow(2,-Z);Re=Math.floor(Mt.width*Pt),Te=Math.floor(Mt.height*Pt),S.isDataArrayTexture?Ie=Mt.depth:S.isData3DTexture?Ie=Math.floor(Mt.depth*Pt):Ie=1,Fe=0,et=0,lt=0}Y!==null?(Le=Y.x,ft=Y.y,Rt=Y.z):(Le=0,ft=0,Rt=0);let xt=be.convert(O.format),Wt=be.convert(O.type),Pe;O.isData3DTexture?(K.setTexture3D(O,0),Pe=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),Pe=I.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),Pe=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Zt=v.getParameter(I.UNPACK_ROW_LENGTH),ut=v.getParameter(I.UNPACK_IMAGE_HEIGHT),un=v.getParameter(I.UNPACK_SKIP_PIXELS),Dn=v.getParameter(I.UNPACK_SKIP_ROWS),ii=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),v.pixelStorei(I.UNPACK_SKIP_ROWS,et),v.pixelStorei(I.UNPACK_SKIP_IMAGES,lt);let Bi=S.isDataArrayTexture||S.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Pt=U.get(S),si=U.get(O),St=U.get(Pt.__renderTarget),ri=U.get(si.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,St.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let zi=0;zi<Ie;zi++)Bi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(S).__webglTexture,Z,lt+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,U.get(O).__webglTexture,we,Rt+zi)),I.blitFramebuffer(Fe,et,Re,Te,Le,ft,Re,Te,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||S.isRenderTargetTexture||U.has(S)){let Pt=U.get(S),si=U.get(O);v.bindFramebuffer(I.READ_FRAMEBUFFER,F),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,q);for(let St=0;St<Ie;St++)Bi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,Z,lt+St):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,Z),_t?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,si.__webglTexture,we,Rt+St):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,si.__webglTexture,we),Z!==0?I.blitFramebuffer(Fe,et,Re,Te,Le,ft,Re,Te,I.COLOR_BUFFER_BIT,I.NEAREST):_t?I.copyTexSubImage3D(Pe,we,Le,ft,Rt+St,Fe,et,Re,Te):I.copyTexSubImage2D(Pe,we,Le,ft,Fe,et,Re,Te);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _t?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Pe,we,Le,ft,Rt,Re,Te,Ie,xt,Wt,Mt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,we,Le,ft,Rt,Re,Te,Ie,xt,Mt.data):I.texSubImage3D(Pe,we,Le,ft,Rt,Re,Te,Ie,xt,Wt,Mt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,we,Le,ft,Re,Te,xt,Wt,Mt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,we,Le,ft,Mt.width,Mt.height,xt,Mt.data):I.texSubImage2D(I.TEXTURE_2D,we,Le,ft,Re,Te,xt,Wt,Mt);v.pixelStorei(I.UNPACK_ROW_LENGTH,Zt),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut),v.pixelStorei(I.UNPACK_SKIP_PIXELS,un),v.pixelStorei(I.UNPACK_SKIP_ROWS,Dn),v.pixelStorei(I.UNPACK_SKIP_IMAGES,ii),we===0&&O.generateMipmaps&&I.generateMipmap(Pe),v.unbindTexture()},this.initRenderTarget=function(S){U.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){te=0,X=0,ae=null,v.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(t),n.unpackColorSpace=ht._getUnpackColorSpace()}};var Ct="#6b4a4f",vh=e=>{Ct=e},Du=()=>Ct;function We(e,t,n,i,s,r){e.beginPath(),e.moveTo(t+r,n),e.arcTo(t+i,n,t+i,n+s,r),e.arcTo(t+i,n+s,t,n+s,r),e.arcTo(t,n+s,t,n,r),e.arcTo(t,n,t+i,n,r),e.closePath()}function L(e,t,n=1.4){e.fillStyle=t,e.fill(),n&&(e.lineWidth=n,e.strokeStyle=Ct,e.lineJoin="round",e.stroke())}function ze(e,t,n,i,s,r,a){e.lineCap="round",e.beginPath(),e.moveTo(t,n),e.lineTo(i,s),e.strokeStyle=Ct,e.lineWidth=r+2.2,e.stroke(),e.strokeStyle=a,e.lineWidth=r,e.stroke()}var J0=["#5b6b8c","#7a6a58","#4f5d75","#8a5f6a","#5f7a68"];function j(e,t){if(!e||e[0]!=="#"||e.length<7)return e;let n=parseInt(e.slice(1,7),16),i=t>0?0:255,s=Math.abs(t);return"#"+[n>>16&255,n>>8&255,n&255].map(r=>Math.round(r+(i-r)*s).toString(16).padStart(2,"0")).join("")}function _h(e,t,n,i,s){e.fillStyle=s,e.beginPath(),e.moveTo(t,n+i*.9),e.bezierCurveTo(t-i*1.6,n-i*.2,t-i*.7,n-i*1.2,t,n-i*.35),e.bezierCurveTo(t+i*.7,n-i*1.2,t+i*1.6,n-i*.2,t,n+i*.9),e.fill()}function As(e,t,n,i,s){e.fillStyle=s,e.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,c=r&1?i*.45:i;e.lineTo(t+Math.cos(a)*c,n+Math.sin(a)*c)}e.closePath(),e.fill()}function $0(e,t,n,i,s){let r=t.beard;if(!r||r==="none")return;let a=t.beardColor||j(t.hair,-.12),c=j(a,-.3),l=t.skin,h=i,d=(g,_=1)=>{e.beginPath(),g(),L(e,a,_)},p=()=>{e.fillStyle=l,e.beginPath(),e.ellipse(h?s*3.8:0,n+4.9,h?1.8:2.7,1.25,0,0,7),e.fill()},f=()=>{h?(e.moveTo(s*1.6,n+1.4),e.bezierCurveTo(s*3,n+3.6,s*5.6,n+3.4,s*7.4,n+3.6),e.quadraticCurveTo(s*8.6,n+6.4,s*6.4,n+9),e.quadraticCurveTo(s*3,n+10.6,s*-.2,n+7),e.lineTo(s*-.4,n+1.4)):(e.moveTo(-8.2,n+.2),e.lineTo(-7.2,n+3.2),e.quadraticCurveTo(-4.6,n+3.6,-2.6,n+3.1),e.quadraticCurveTo(0,n+3.9,2.6,n+3.1),e.quadraticCurveTo(4.6,n+3.6,7.2,n+3.2),e.lineTo(8.2,n+.2),e.bezierCurveTo(8.8,n+9,3.6,n+11.2,0,n+11.2),e.bezierCurveTo(-3.6,n+11.2,-8.8,n+9,-8.2,n+.2)),e.closePath()};if(r==="stubble"){e.save(),e.beginPath(),f(),e.clip(),e.fillStyle=a,e.globalAlpha=.16,e.fillRect(-10,n,20,12),e.globalAlpha=.75;for(let g=0;g<46;g++){let _=h?s*(.6+g*37%78/10):-7.2+g*37%144/10,x=n+3.2+g*53%66/10;e.beginPath(),e.arc(_,x,.26,0,7),e.fill()}e.restore();return}if(r==="full"||r==="muttonchops"){if(r==="full"){e.beginPath(),f(),L(e,a,1.1),p(),e.strokeStyle=c,e.lineWidth=.35;for(let g=-3;g<=3;g++)e.beginPath(),e.moveTo(h?s*(3.2+g):g*2,n+6.6),e.lineTo(h?s*(3.6+g*1.1):g*2.2,n+10),e.stroke()}else[-1,1].forEach(g=>{if(h&&g<0)return;let _=h?s:g;e.beginPath(),e.moveTo(_*8.4,n-1.4),e.lineTo(_*8.8,n+5.4),e.quadraticCurveTo(_*7.6,n+9.2,_*4.4,n+9.4),e.lineTo(_*5.4,n+5.6),e.lineTo(_*6.6,n-1),e.closePath(),L(e,a,1)});return}if(r==="sideburns"){[-1,1].forEach(g=>{if(h&&g<0)return;let _=h?s:g;e.beginPath(),e.moveTo(_*(h?1.6:8.6),n-2.6),e.lineTo(_*(h?2.6:8.8),n+3.8),e.lineTo(_*(h?.6:6.8),n+3),e.lineTo(_*(h?.4:7),n-2.4),e.closePath(),L(e,a,.9)});return}if(r==="chinstrap"){e.strokeStyle=Ct,e.lineWidth=2.6,e.lineCap="round",e.beginPath(),h?(e.moveTo(s*0,n+1),e.quadraticCurveTo(s*1.4,n+8.4,s*6.4,n+8.6)):(e.moveTo(-8.2,n+1),e.bezierCurveTo(-8.2,n+9.4,-3.6,n+10.6,0,n+10.6),e.bezierCurveTo(3.6,n+10.6,8.2,n+9.4,8.2,n+1)),e.stroke(),e.strokeStyle=a,e.lineWidth=1.3,e.stroke();return}if(r==="goatee"||r==="vandyke"||r==="circle"||r==="soulpatch"){if(r==="soulpatch"){d(()=>e.ellipse(h?s*4.2:0,n+6.7,h?1:1.1,1.2,0,0,7),.8);return}r==="goatee"&&d(()=>{h?e.ellipse(s*5.8,n+7.2,2.5,2.8,0,0,7):(e.moveTo(-3,n+5.8),e.quadraticCurveTo(-3.4,n+10.4,0,n+10.6),e.quadraticCurveTo(3.4,n+10.4,3,n+5.8),e.quadraticCurveTo(0,n+6.8,-3,n+5.8),e.closePath())},1),r==="vandyke"&&d(()=>{h?(e.moveTo(s*4.6,n+6),e.lineTo(s*5.4,n+11.8),e.lineTo(s*7.4,n+6.4),e.closePath()):(e.moveTo(-2.6,n+5.8),e.quadraticCurveTo(-1.6,n+9,0,n+12.2),e.quadraticCurveTo(1.6,n+9,2.6,n+5.8),e.quadraticCurveTo(0,n+6.8,-2.6,n+5.8),e.closePath())},1),r==="circle"&&(e.strokeStyle=Ct,e.lineWidth=3.4,e.lineCap="round",e.beginPath(),h?e.ellipse(s*4.8,n+5.6,2.8,3.6,0,-1.4,1.4):e.ellipse(0,n+5.8,4.1,3.6,0,0,7),e.stroke(),e.strokeStyle=a,e.lineWidth=2,e.stroke()),(r==="vandyke"||r==="circle")&&(e.strokeStyle=a,e.lineWidth=1.1,e.lineCap="round",e.beginPath(),h?(e.moveTo(s*4.2,n+3.6),e.lineTo(s*7.2,n+3.9)):(e.moveTo(-1,n+3.3),e.quadraticCurveTo(-3,n+3.4,-4.6,n+2.6),e.moveTo(1,n+3.3),e.quadraticCurveTo(3,n+3.4,4.6,n+2.6)),e.stroke());return}if(e.lineCap="round",r==="pencil"){e.strokeStyle=a,e.lineWidth=.9,e.beginPath(),h?(e.moveTo(s*4,n+3.6),e.lineTo(s*7,n+3.8)):(e.moveTo(-3.2,n+3.7),e.quadraticCurveTo(0,n+3,3.2,n+3.7)),e.stroke();return}if(r==="handlebar"){e.strokeStyle=Ct,e.lineWidth=2.6;let g=()=>{e.beginPath(),h?(e.moveTo(s*4,n+3.5),e.quadraticCurveTo(s*6.6,n+3.2,s*7.8,n+1.8)):(e.moveTo(0,n+3.4),e.quadraticCurveTo(-3.6,n+4.2,-5.8,n+2),e.moveTo(0,n+3.4),e.quadraticCurveTo(3.6,n+4.2,5.8,n+2)),e.stroke()};g(),e.strokeStyle=a,e.lineWidth=1.4,g();return}(r==="walrus"||r==="mustache")&&d(()=>{h?(e.moveTo(s*3.6,n+2.6),e.quadraticCurveTo(s*7.4,n+2.4,s*8,n+5.2),e.quadraticCurveTo(s*5.6,n+5.6,s*3.6,n+4.6),e.closePath()):(e.moveTo(0,n+3),e.quadraticCurveTo(-5,n+2.4,-6.4,n+5.8),e.quadraticCurveTo(-3.2,n+5.6,0,n+4.4),e.quadraticCurveTo(3.2,n+5.6,6.4,n+5.8),e.quadraticCurveTo(5,n+2.4,0,n+3),e.closePath())},.9)}var Iu=2.4,K0=["long","wavy","bob","braids","pigtails","pony"];function Ui(e,t,n,i,s){if(i.age==="hs"&&i.adultRig===void 0&&!i.legacyAdult&&(i={...i,adultRig:!0,teen:!0,packColor:i.pack}),(i.age==="adult"||i.adultRig)&&!i.legacyAdult)return i_(e,t,n,i,s);e.save(),e.translate(Math.round(t*2)/2,Math.round(n*2)/2);let r=i.moving,a=r?Math.sin(i.walk):0,c=i.dir,l=c==="left"||c==="right",h=c==="left"?-1:1,d=c==="up",p=i.sitting,f=i.age==="adult",g=i.top,_=i.bottom||"pants",x=(i.headSize||1)*1,u=(i.build==="slim"?.9:i.build==="sturdy"?1.12:1)*(f?1.12:1),m=f?1.28:1;e.fillStyle="rgba(70,45,55,.24)",e.beginPath(),e.ellipse(0,1,10*u,3.6,0,0,7),e.fill(),p&&e.translate(0,8),e.translate(0,r?-Math.abs(Math.cos(i.walk))*1.8:Math.sin(s*2+i.id)*.35),f&&e.scale(1,m);let E=i.pants||J0[i.id%5],N=i.pack||["#f28f7e","#4f91c7","#eab94e","#88b89a","#b8a8da"][i.id%5],M=i.shoes||"#fbf6ee",T=i.packStyle||"pack",w=i.shirt2||"#fff6ea",P=g==="tank"?i.skin:g==="varsity"?w:g==="sailor"?j(i.shirt,-.1):g==="apron"?w:g==="cableknit"||g==="chunky"?j(i.shirt,.06):i.shirt,o=-28,A=i.hair,b=i.style,k=i.hair2||j(A,-.28),V=i.hl||(i.hair2?"streak":"none"),$=b==="long"||b==="hime"?13.5:b==="wavy"||b==="halfup"?12.5:b==="mullet"?10:b==="bob"?9:b==="shag"?8:0,F=(y,R,z,se,I)=>{let Ce=e.createLinearGradient(y,R,z,se);return I.forEach(([pe,C])=>Ce.addColorStop(pe,C)),Ce},q=$?o+$:o+1.5,te=o-11,X=i.hair2?V==="ombre"?F(0,te,0,q,[[0,A],[.35,A],[1,k]]):V==="tips"?F(0,te,0,q,[[0,A],[.7,A],[.7,k],[1,k]]):V==="split"?F(-10,0,10,0,[[0,A],[.5,A],[.5,k],[1,k]]):V==="roots"?F(0,te,0,q,[[0,k],[.3,k],[.3,A],[1,A]]):V==="rainbow"?F(0,te,0,q,[[0,A],[.33,k],[.66,j(k,-.25)],[1,A]]):A:A,ae=i.hair2&&V==="underlayer"?k:X,ie=()=>{f&&(e.translate(0,-8.4),e.scale(.82,.82)),e.translate((i.turn||0)*1.7+(i.hx||0),-Iu+(i.hdy||0)),i.tilt&&(e.translate(0,9),e.rotate(i.tilt),e.translate(0,-9))},ne=i.htex||"straight",le=(ne==="curly"||ne==="coily"||ne==="fluffy")&&b!=="buzz"&&b!=="afro"&&b!=="bald",Ae=()=>{if(le){let y=ne==="coily"?3.3:ne==="curly"?2.8:2.3,R=ne==="fluffy"?11:9,z=l?h*.6:0;for(let se=0;se<R;se++){let I=Math.PI*(1.04+.92*se/(R-1));e.beginPath(),e.arc(z+Math.cos(I)*9.6,o+Math.sin(I)*8.9,y,0,7),L(e,ae,1.2)}}if(b==="long"||b==="bob"||b==="wavy"||b==="shag"||b==="halfup"||b==="hime"||b==="mullet"){let y=b==="bob"?9:b==="shag"?8:b==="mullet"?10:b==="long"||b==="hime"?13.5:12.5,R=l?-h:1,z=l?6.4:10.4,se=e;if(se.beginPath(),l?(se.moveTo(R*-1,o-7.5),se.bezierCurveTo(R*8,o-8,R*11.4,o+1,R*10.2,o+y*.62),se.quadraticCurveTo(R*9.6,o+y,R*6.4,o+y+.4),se.quadraticCurveTo(R*3.2,o+y-1.6,R*1.8,o+3),se.closePath()):(se.moveTo(-9.4,o-3),se.bezierCurveTo(-11.6,o+3,-z-.4,o+y*.5,-z+.6,o+y-2),se.quadraticCurveTo(-z+1.4,o+y+.6,-5.2,o+y),b==="wavy"?(se.quadraticCurveTo(-3.2,o+y+2.4,-1.4,o+y-.4),se.quadraticCurveTo(1.2,o+y+2.4,3.2,o+y)):se.quadraticCurveTo(0,o+y-1.6,5.2,o+y),se.quadraticCurveTo(z-1.4,o+y+.6,z-.6,o+y-2),se.bezierCurveTo(z+.4,o+y*.5,11.6,o+3,9.4,o-3),se.closePath()),L(e,ae,1.3),ne==="curly"||ne==="coily"){let I=ne==="coily"?2.6:2.2;for(let Ce=0;Ce<6;Ce++)e.beginPath(),e.arc(l?R*(1.8+Ce*1.4):-8+Ce*3.2,o+y-.4+Ce%2*.6,I,0,7),L(e,ae,1.1)}e.strokeStyle=j(A,-.32),e.lineWidth=.55,e.lineCap="round",(l?[2.4,4.6,6.8,8.6]:[-8,-5.6,5.6,8]).forEach((I,Ce)=>{e.beginPath();let pe=l?R*I:I;e.moveTo(pe,o+2),e.quadraticCurveTo(pe*1.06,o+y*.55,pe*1.02+(Ce%2?.6:-.6),o+y-2.4),e.stroke()})}b==="highpony"&&(e.save(),e.translate(l?-h*5:d?0:6,o-14),e.rotate(l?h*.5:d?0:-.45),e.beginPath(),e.ellipse(0,2,3,7.4,0,0,7),L(e,ae,1.3),e.restore()),b==="afro"&&(e.beginPath(),e.ellipse(l?-h*1.2:0,o-3,13.2,12.6,0,0,7),L(e,ae,1.4)),b==="locs"&&(l?[-h*8.2,-h*5.4]:[-9.6,-6.2,6.2,9.6]).forEach((y,R)=>{for(let z=0;z<4;z++)e.beginPath(),We(e,y-1.5+(z&1?.3:-.3),o+1+z*3.4+R%2*.8,3,3.6,1.5),L(e,z&1?k:ae,1)}),b==="halfup"&&(e.beginPath(),e.arc(l?-h*3:0,o-10.5,3.9,0,7),L(e,ae,1.3)),b==="bun"&&(e.beginPath(),e.arc(l?-h*3:0,o-9.5,4.4,0,7),L(e,ae,1.3)),b==="topknot"&&(e.beginPath(),e.arc(l?-h*2:0,o-12,3.4,0,7),L(e,ae,1.3)),b==="twinbuns"&&(l?[-h*3]:[-7.6,7.6]).forEach(y=>{e.beginPath(),e.arc(y,o-10.4,3.9,0,7),L(e,ae,1.3)}),b==="pony"&&(e.save(),e.translate(l?-h*9:d?0:9,l?o+2:d?o+8:o+1),e.rotate(l||d?0:-.5),e.beginPath(),e.ellipse(0,4,3.2,6.5,0,0,7),L(e,ae,1.3),e.restore()),b==="pigtails"&&(l?[-h*10]:[-10.6,10.6]).forEach((y,R)=>{e.save(),e.translate(y,o+3),e.rotate(l?0:R?-.4:.4),e.beginPath(),e.ellipse(0,5,2.9,6.6,0,0,7),L(e,ae,1.3),e.restore()}),b==="braids"&&(l?[-h*8.4]:[-9.4,9.4]).forEach(y=>{for(let R=0;R<4;R++)e.beginPath(),e.ellipse(y,o+4+R*3.7,2.2,2.1,0,0,7),L(e,R&1?k:A,1.1)}),b==="curly"&&[[-8,o-2],[8,o-2],[-6,o-8],[6,o-8],[0,o-10]].forEach(([y,R])=>{e.beginPath(),e.arc(y,R,4.6,0,7),L(e,ae,1.2)})};d||(e.save(),f&&e.scale(1,1/m),ie(),Ae(),e.restore());let _e=i.extra&&i.extra!=="none"?i.extra:"",$e=i.extraColor||"#eab94e",st=()=>{if(_e){if(_e==="angelwings")[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*3,-19),e.bezierCurveTo(y*12,-30,y*19,-22,y*15.4,-13),e.quadraticCurveTo(y*15,-10.6,y*12.6,-12),e.quadraticCurveTo(y*12.6,-8.8,y*9.6,-10.6),e.quadraticCurveTo(y*8,-9,y*6.4,-11.4),e.closePath(),L(e,"#fffaf2",1.2),ze(e,y*5,-17,y*12.4,-18.4,.5,"#d9d4cc"),ze(e,y*5.4,-14.6,y*12,-15,.5,"#d9d4cc")});else if(_e==="butterfly")[-1,1].forEach(y=>{e.beginPath(),e.ellipse(y*10.6,-21,6.2,4.2,y*-.5,0,7),L(e,$e,1.1),e.beginPath(),e.ellipse(y*9.4,-13.6,4.2,3,y*.5,0,7),L(e,j($e,.15),1.1),e.fillStyle="rgba(255,255,255,.8)",e.beginPath(),e.arc(y*11.6,-21.6,1.1,0,7),e.arc(y*9.6,-13.4,.8,0,7),e.fill()});else if(_e==="cape"){if(e.beginPath(),e.moveTo(-6.2,-19.4),e.lineTo(-10.6,-3.4),e.quadraticCurveTo(0,-.4,10.6,-3.4),e.lineTo(6.2,-19.4),e.closePath(),L(e,$e,1.3),d){e.strokeStyle=j($e,-.25),e.lineWidth=.6;for(let y of[-4,0,4])e.beginPath(),e.moveTo(y*.6,-18.6),e.lineTo(y*2.2,-3),e.stroke()}}else if(_e==="foxtail"){let y=l?-h*8:7.6;e.beginPath(),e.ellipse(y+(l?-h*3:3.4),-8.4,3.4,7.4,l?-h*-.9:-.9,0,7),L(e,$e,1.2),e.beginPath(),e.ellipse(y+(l?-h*5.6:6.2),-13.4,2.2,2.8,l?-h*-.9:-.9,0,7),L(e,"#fff6ea",1)}}},at=()=>{if(!(!_e||d)){if(_e==="sash"&&!l)e.beginPath(),e.moveTo(-6.4,-19.4),e.lineTo(-3.4,-19.4),e.lineTo(6.6,-9.6),e.lineTo(3.4,-8.8),e.closePath(),L(e,$e,1),As(e,0,-14,1.2,"#fff6ea");else if(_e==="medal"&&!l)e.beginPath(),e.moveTo(-1.8,-19.5),e.lineTo(0,-15.2),e.lineTo(1.8,-19.5),e.closePath(),L(e,"#c4463c",.7),e.beginPath(),e.arc(0,-14.2,1.7,0,7),L(e,"#eab94e",.9),As(e,0,-14.2,.9,"#fff6ea");else if(_e==="stethoscope")e.strokeStyle="#3a3a44",e.lineWidth=.9,e.beginPath(),e.moveTo(-3.6,-19.6),e.bezierCurveTo(-4.6,-11.6,4.6,-11.6,3.6,-19.6),e.stroke(),e.beginPath(),e.arc(.6,-11.2,1.4,0,7),L(e,"#c9ced4",.8);else if(_e==="toolbelt")e.fillStyle="#8a5f3a",e.fillRect(-6.8*u,-11,13.6*u,1.7),e.strokeStyle=Ct,e.lineWidth=.6,e.strokeRect(-6.8*u,-11,13.6*u,1.7),[-4.4,3.4].forEach(y=>{We(e,y,-10.2,2.6,3,.6),L(e,j("#8a5f3a",.2),.6)}),ze(e,.6,-9.2,.6,-6.2,1.1,"#9da7aa"),e.fillStyle="#c9ced4",e.fillRect(-.4,-6.6,2,1);else if(_e==="bird"){let y=l?.5:-6,R=-20.6;e.beginPath(),e.ellipse(y,R-1.4,2.4,2,0,0,7),L(e,$e,.9),e.beginPath(),e.arc(y+1.5,R-3.1,1.1,0,7),L(e,j($e,.1),.8),e.fillStyle="#eab94e",e.beginPath(),e.moveTo(y+2.5,R-3.2),e.lineTo(y+3.6,R-2.8),e.lineTo(y+2.5,R-2.5),e.closePath(),e.fill(),e.fillStyle="#2a1d22",e.beginPath(),e.arc(y+1.8,R-3.4,.25,0,7),e.fill()}}};if(d||st(),p||[-1,1].forEach(y=>{let R=r?Math.max(0,y*a)*2.6:0,z=l?0:y*3.2*u,se=l?y*a*4.2:y*3.2*u;if(_==="shorts"?(ze(e,z,-9,se,-2-R,3.4,i.skin),ze(e,z,-9,z+(se-z)*.38,-6-R*.38,3.9,E)):_==="skirt"||_==="pleated"||_==="tutu"||_==="kilt"?ze(e,z,-9,se,-2-R,3.2,i.skin):_==="jeans"?(ze(e,z,-9,se,-2-R,3.9,E),ze(e,z+(se-z)*.12,-8.4,se+(z-se)*.04,-3-R,.5,j(E,.35)),ze(e,z,-3.4-R*.9+(se-z)*0,se,-2.2-R,4.1,j(E,-.18))):_==="bike"?(ze(e,z,-9,se,-2-R,3.2,i.skin),ze(e,z,-9,z+(se-z)*.36,-6.2-R*.36,3.5,j(E,-.25))):_==="leggings"?ze(e,z,-9,se,-2-R,3,j(E,-.18)):_==="capri"?(ze(e,z,-9,se,-2-R,3.2,i.skin),ze(e,z,-9,z+(se-z)*.62,-5-R*.62,3.9,E)):_==="cargo"?(ze(e,z,-9,se,-2-R,4,E),ze(e,z+(se-z)*.14,-7.6,z+(se-z)*.3,-6,2.3,j(E,-.22))):ze(e,z,-9,se,-2-R,_==="joggers"?4.2:3.6,E),i.socks&&i.socks!=="none"){let pe=i.socks==="ankle"?.78:.5,C=i.sockColor||"#fff6ea",v=U=>z+(se-z)*U,H=U=>-9+(-2-R+9)*U;if(ze(e,v(pe),H(pe),se,-2-R,3.9,C),i.socks==="striped")for(let U of[.58,.7])ze(e,v(U)-1.7,H(U),v(U)+1.7,H(U),.9,j(C,-.4));else i.socks==="tall"&&ze(e,v(pe)-1.7,H(pe),v(pe)+1.7,H(pe),.8,j(C,-.25))}let I=se+(l?h*1.2:0),Ce=-.6-R;if(i.shoeStyle==="boot")We(e,I-2.6,Ce-3.6,5.2,4.6,1.6),L(e,M,1.1),e.beginPath(),e.ellipse(I+(l?h*1.2:0),Ce+.6,3.6,1.7,0,0,7),L(e,j(M,.25),1.1);else if(i.shoeStyle==="hightop"){We(e,I-2.7,Ce-4.4,5.4,5.4,1.5),L(e,M,1.1),e.fillStyle="#fff6ea",e.fillRect(I-2.7,Ce+.2,5.4,.9),e.beginPath(),e.ellipse(I+(l?h*1:0),Ce+.5,3.6,1.6,0,0,7),L(e,"#fff6ea",1);for(let pe=0;pe<3;pe++)e.fillStyle="#fff6ea",e.fillRect(I-.4,Ce-3.6+pe*1.2,.8,.5)}else if(i.shoeStyle==="loafer")e.beginPath(),e.ellipse(I,Ce,3.5,1.8,0,0,7),L(e,j(M,-.15),1.1),We(e,I-1.2,Ce-1.4,2.4,.9,.3),L(e,"#eab94e",.5);else if(i.shoeStyle==="rainboot")We(e,I-2.6,Ce-6.6,5.2,7.6,1.4),L(e,M,1.1),e.fillStyle=j(M,.3),e.fillRect(I-2.6,Ce-6.6,5.2,1.3),e.beginPath(),e.ellipse(I+(l?h*1.1:0),Ce+.7,3.7,1.7,0,0,7),L(e,j(M,-.25),1.1);else if(i.shoeStyle==="slipper"){e.beginPath(),e.ellipse(I,Ce,3.6,2,0,0,7),L(e,M,1.1);for(let pe=-2;pe<=2;pe++)e.beginPath(),e.arc(I+pe*1.4,Ce-1.6+Math.abs(pe)*.25,.9,0,7),L(e,j(M,.2),.7)}else i.shoeStyle==="skate"?(e.beginPath(),e.ellipse(I,Ce,3.5,1.9,0,0,7),L(e,M,1.1),e.fillStyle="#fff6ea",e.fillRect(I-3.4,Ce+.9,6.8,1),e.beginPath(),e.moveTo(I-2,Ce-1),e.lineTo(I+2,Ce-.2),e.strokeStyle="rgba(255,255,255,.6)",e.lineWidth=.6,e.stroke()):i.shoeStyle==="sandal"?(e.beginPath(),e.ellipse(I,Ce,3.4,1.7,0,0,7),L(e,i.skin,1.1),e.strokeStyle=M,e.lineWidth=1.2,e.beginPath(),e.moveTo(I-2.2,Ce-.3),e.lineTo(I+2.2,Ce-.3),e.stroke()):(e.beginPath(),e.ellipse(I,Ce,3.4,1.9,0,0,7),L(e,M,1.1),i.shoeStyle==="sneaker"&&(e.fillStyle="rgba(255,255,255,.55)",e.fillRect(I-3,Ce+.5,6,.7)))}),(_==="pleated"||_==="tutu"||_==="kilt")&&!p)if(_==="tutu"){for(let[y,R,z]of[[11.6,-6.4,.22],[10.4,-7.6,.1],[8.8,-9,0]]){e.beginPath(),e.moveTo(-y*u*.6,R-3.6),e.lineTo(y*u*.6,R-3.6);for(let se=0;se<=6;se++)e.quadraticCurveTo(y*u*(.6-(se+.5)/6*1.2)*-1*-1,R+1.4,y*u*(.6-(se+1)/6*1.2),R-.4);e.closePath(),L(e,j(E,z),1.1)}e.fillStyle=j(E,-.3),e.fillRect(-6.6*u,-12.2,13.2*u,1.4)}else{if(e.beginPath(),e.moveTo(-6.6*u,-12),e.lineTo(6.6*u,-12),e.lineTo(_==="kilt"?8.4*u:10.2*u,-5.4),e.lineTo(_==="kilt"?-8.4*u:-10.2*u,-5.4),e.closePath(),L(e,E,1.3),e.save(),e.clip(),_==="pleated"){e.strokeStyle=j(E,-.3),e.lineWidth=.5;for(let y=-9;y<=9;y+=1.8)e.beginPath(),e.moveTo(y*.64,-12),e.lineTo(y*1.1,-5.4),e.stroke()}else{e.strokeStyle=j(E,.35),e.lineWidth=.7;for(let y=-9;y<=9;y+=2.4)e.beginPath(),e.moveTo(y,-12.5),e.lineTo(y,-5),e.stroke();for(let y=-11.4;y<-5;y+=2)e.beginPath(),e.moveTo(-10,y),e.lineTo(10,y),e.stroke();e.strokeStyle="rgba(0,0,0,.2)",e.lineWidth=.4;for(let y=-8;y<=9;y+=4.8)e.beginPath(),e.moveTo(y,-12.5),e.lineTo(y,-5),e.stroke()}e.restore(),e.fillStyle=j(E,-.3),e.fillRect(-6.8*u,-12.4,13.6*u,1.2),_==="kilt"&&(e.beginPath(),e.arc(-4.4*u,-7.6,.9,0,7),L(e,"#d9d4cc",.5))}_==="skirt"&&!p&&(e.beginPath(),e.moveTo(-6.8*u,-12),e.lineTo(6.8*u,-12),e.lineTo(9.6*u,-5.6),e.lineTo(-9.6*u,-5.6),e.closePath(),L(e,E,1.3),e.fillStyle="rgba(255,255,255,.22)",e.fillRect(-8.2*u,-7.4,16.4*u,1));let G=(y,R)=>{let z=l?y*a*3.5:y*8.2,se=-9.5-(r?-y*a*1.5:0),I=i.arms&&(y>0?i.arms.R:i.arms.L);if(I&&(z=l?h*Math.abs(I[0])*.9:I[0],se=I[1]),ze(e,l?0:y*6.6*u,-17,z,se,3.2,P),i.wrist&&i.wrist!=="none"&&(y<0||l)){let Ce=l?0:y*6.6*u,pe=z+(Ce-z)*.2,C=se+(-17-se)*.2,v=i.wristColor||"#eab94e",H=i.wrist;if(H==="watch")e.beginPath(),e.arc(pe,C,1.9,0,7),e.strokeStyle=Ct,e.lineWidth=2.4,e.stroke(),e.strokeStyle="#313a3f",e.lineWidth=1.3,e.stroke(),We(e,pe-1.1,C-1.2,2.2,2.4,.5),L(e,"#fffaf2",.6);else if(H==="beads")for(let U=-1;U<=1;U++)e.beginPath(),e.arc(pe+U*1.3,C+Math.abs(U)*.5,.8,0,7),L(e,U?v:"#f2e8d8",.5);else H==="band"?ze(e,pe-1.8,C,pe+1.8,C,2,v):(e.beginPath(),e.arc(pe,C,1.8,0,7),e.strokeStyle=Ct,e.lineWidth=2.2,e.stroke(),e.strokeStyle=v,e.lineWidth=1,e.stroke())}e.beginPath(),e.arc(z,se+.6,1.9,0,7),L(e,i.skin,1),i.thumb&&y>0&&(e.beginPath(),e.ellipse(z+.2,se-1.4,.9,1.6,.12,0,7),L(e,i.skin,1))};l&&G(-h*-1,!1),l&&T==="pack"?(We(e,-h*9.5,-19,7,10,3),L(e,N,1.2)):l&&T==="mini"&&(We(e,-h*8,-16,5,6.5,2.4),L(e,N,1.1));let re=(y,R,z)=>{let se=(l?h*.4:0)+(i.turn||0)*1.7;We(e,se-2.7,y,5.4,R-y,1.6),L(e,i.skin,z?0:1.2),z&&(e.strokeStyle=Ct,e.lineWidth=1.2,e.beginPath(),e.moveTo(se-2.7,y),e.lineTo(se-2.7,R),e.moveTo(se+2.7,y),e.lineTo(se+2.7,R),e.stroke()),e.fillStyle="rgba(110,60,50,.2)",e.beginPath(),e.ellipse(se,y+3.4,2.7,1.2,0,0,7),e.fill()};re(-27,-18.4,!1),g==="hoodie"&&(e.beginPath(),e.ellipse(0,-19.6,6.4*u,3.2,0,0,7),L(e,j(i.shirt,.14),1.2));let ge=()=>{g==="dress"?(e.beginPath(),e.moveTo(-6.4*u,-19.5),e.quadraticCurveTo(0,-21,6.4*u,-19.5),e.lineTo(7*u,-13),e.lineTo(9.6*u,-6),e.quadraticCurveTo(0,-4.4,-9.6*u,-6),e.lineTo(-7*u,-13),e.closePath()):g==="tank"?We(e,-5.6*u,-19.5,11.2*u,11.5,4):We(e,-6.6*u,-19.5,13.2*u,11.5,4.5)},J=g==="overalls"||g==="vest"?w:i.shirt;if(ge(),L(e,J,1.4),i.pattern&&i.pattern!=="solid"&&g!=="overalls"&&g!=="vest"){let y=i.shirt2||j(i.shirt,.3);if(e.save(),ge(),e.clip(),i.pattern==="stripes")for(let R=-20;R<-4;R+=3.6)e.fillStyle=y,e.fillRect(-11,R,22,1.7);else if(i.pattern==="dots")for(let R=-19;R<-4;R+=3.2)for(let z=-9+(R*3&1)*1.6;z<10;z+=3.2)e.fillStyle=y,e.beginPath(),e.arc(z,R,.85,0,7),e.fill();else if(i.pattern==="plaid"){e.strokeStyle=y,e.globalAlpha=.75,e.lineWidth=1;for(let R=-19;R<-4;R+=3.6)e.beginPath(),e.moveTo(-11,R),e.lineTo(11,R),e.stroke();for(let R=-9;R<10;R+=3.6)e.beginPath(),e.moveTo(R,-21),e.lineTo(R,-4),e.stroke();e.globalAlpha=1}else if(i.pattern==="hearts")for(let R=-17;R<-5;R+=4.2)for(let z=-7+(R*2&1)*2;z<8;z+=4.4)_h(e,z,R,1.1,y);else if(i.pattern==="stars")for(let R=-17;R<-5;R+=4.2)for(let z=-7+(R*2&1)*2;z<8;z+=4.4)As(e,z,R,1.4,y);e.restore(),ge(),e.lineWidth=1.4,e.strokeStyle=Ct,e.stroke()}if(e.fillStyle="rgba(255,255,255,.3)",e.beginPath(),e.ellipse(-2.4,-16.5,2.4,3.4,0,0,7),e.fill(),i.emblem&&i.emblem!=="none"&&!d&&!l&&g!=="dress"&&g!=="overalls"){let y=i.shirt2&&i.shirt2!==i.shirt?i.shirt2:"#fff6ea",R=-13.4;i.emblem==="heart"?_h(e,0,R-.6,2.2,y):i.emblem==="star"?As(e,0,R,2.6,y):i.emblem==="bolt"?(e.beginPath(),e.moveTo(1,R-3.4),e.lineTo(-1.8,R+.4),e.lineTo(-.2,R+.4),e.lineTo(-1,R+3.4),e.lineTo(1.8,R-.6),e.lineTo(.2,R-.6),e.closePath(),L(e,y,.5)):i.emblem==="paw"?(e.fillStyle=y,e.beginPath(),e.ellipse(0,R+1,1.7,1.3,0,0,7),e.fill(),[[-2,R-1.2],[-.7,R-2.4],[.7,R-2.4],[2,R-1.2]].forEach(([z,se])=>{e.beginPath(),e.arc(z,se,.7,0,7),e.fill()})):i.emblem==="smile"&&(e.beginPath(),e.arc(0,R,2.6,0,7),L(e,y,.6),e.fillStyle="#4a3b3f",e.beginPath(),e.arc(-.9,R-.7,.35,0,7),e.arc(.9,R-.7,.35,0,7),e.fill(),e.strokeStyle="#4a3b3f",e.lineWidth=.5,e.beginPath(),e.arc(0,R+.2,1.2,.2*Math.PI,.8*Math.PI),e.stroke())}if(g){if(!d)if(g==="hoodie")We(e,-3.8,-14,7.6,3.6,1.6),e.lineWidth=1,e.strokeStyle=j(i.shirt,.3),e.stroke(),ze(e,-1.6,-18.6,-1.6,-14.8,.8,w),ze(e,1.6,-18.6,1.6,-14.8,.8,w);else if(g==="sweater")e.fillStyle=j(i.shirt,-.28),e.fillRect(-6.4*u,-10.6,12.8*u,2),e.beginPath(),e.ellipse(0,-19.3,3.6,1.5,0,0,7),L(e,j(i.shirt,-.28),1);else if(g==="jersey")e.fillStyle=i.shirt2||"#fff",e.font="800 6.4px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillText(String(i.num??i.id%90+1),0,-11.8),e.fillRect(-6.4*u,-19.4,12.8*u,.9);else if(g==="blazer")e.beginPath(),e.moveTo(-3.4,-19.4),e.lineTo(0,-12.4),e.lineTo(3.4,-19.4),e.closePath(),L(e,w,.9),e.beginPath(),e.moveTo(-3.4,-19.4),e.lineTo(-.4,-11.8),e.lineTo(-5.6,-11),e.lineTo(-6.4,-17.6),e.closePath(),L(e,j(i.shirt,.16),.9),e.beginPath(),e.moveTo(3.4,-19.4),e.lineTo(.4,-11.8),e.lineTo(5.6,-11),e.lineTo(6.4,-17.6),e.closePath(),L(e,j(i.shirt,.16),.9),e.fillStyle="#EAB94E",e.beginPath(),e.arc(0,-10.4,.7,0,7),e.fill();else if(g==="overalls")We(e,-4,-16.4,8,6.8,1.6),L(e,i.shirt,1.1),ze(e,-3.4,-19.4,-3.2,-16.2,1.2,i.shirt),ze(e,3.4,-19.4,3.2,-16.2,1.2,i.shirt),e.fillStyle="#EAB94E",[-3.2,3.2].forEach(y=>{e.beginPath(),e.arc(y,-16.2,.7,0,7),e.fill()}),We(e,-2,-14.4,4,2.4,.8),e.lineWidth=.8,e.strokeStyle=j(i.shirt,.3),e.stroke();else if(g==="vest")e.beginPath(),e.moveTo(-6.6*u,-19.4),e.lineTo(-1.2,-19.4),e.lineTo(-.6,-9.4),e.lineTo(-6.2*u,-9.4),e.closePath(),L(e,i.shirt,1),e.beginPath(),e.moveTo(6.6*u,-19.4),e.lineTo(1.2,-19.4),e.lineTo(.6,-9.4),e.lineTo(6.2*u,-9.4),e.closePath(),L(e,i.shirt,1);else if(g==="tee")e.beginPath(),e.ellipse(0,-19.3,3.2,1.3,0,0,7),L(e,j(i.shirt,.12),.9);else if(g==="henley")e.beginPath(),e.ellipse(0,-19.3,3.4,1.4,0,0,7),L(e,j(i.shirt,.12),.9),We(e,-1.1,-19.4,2.2,5.6,.6),L(e,j(i.shirt,.22),.7),[-18,-16.4,-14.8].forEach(y=>{e.fillStyle="#fff6ea",e.beginPath(),e.arc(0,y,.4,0,7),e.fill()});else if(g==="flannel"){e.save(),ge(),e.clip(),e.strokeStyle=j(i.shirt,-.32),e.globalAlpha=.55,e.lineWidth=1;for(let y=-19;y<-8;y+=2.7)e.beginPath(),e.moveTo(-8,y),e.lineTo(8,y),e.stroke();for(let y=-6;y<=6;y+=2.7)e.beginPath(),e.moveTo(y,-20),e.lineTo(y,-8),e.stroke();e.globalAlpha=1,e.restore(),We(e,-2.4,-19.4,4.8,10.8,.6),L(e,w,.8),[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*4,-19.6),e.lineTo(y*.6,-19.6),e.lineTo(y*1.2,-16.4),e.closePath(),L(e,j(i.shirt,.3),.8),ze(e,y*2.4,-16,y*2.4,-8.6,.8,j(i.shirt,-.4))}),[-14.4,-11.6].forEach(y=>{e.fillStyle="#fff6ea",e.beginPath(),e.arc(-1.2,y,.45,0,7),e.fill()})}else if(g==="sailor")e.beginPath(),e.moveTo(-6.4,-19.6),e.lineTo(-.9,-11.4),e.lineTo(.9,-11.4),e.lineTo(6.4,-19.6),e.lineTo(3.4,-19.6),e.lineTo(0,-15.2),e.lineTo(-3.4,-19.6),e.closePath(),L(e,j(i.shirt,-.3),1),ze(e,-5.2,-18.2,-.4,-12.6,.6,"#fff6ea"),ze(e,5.2,-18.2,.4,-12.6,.6,"#fff6ea"),ze(e,-4.4,-17.2,-.2,-12,.5,"#fff6ea"),ze(e,4.4,-17.2,.2,-12,.5,"#fff6ea"),e.beginPath(),e.moveTo(-1.4,-15.4),e.lineTo(1.4,-15.4),e.lineTo(0,-12.6),e.closePath(),L(e,"#c4463c",.7);else if(g==="vneck"||g==="argyle"||g==="fairisle"){if(g==="argyle"){e.save(),ge(),e.clip();for(let y=-18;y<-8;y+=3.6)for(let R=-7+(Math.round(y/3.6)&1?1.8:0);R<8;R+=3.6)e.beginPath(),e.moveTo(R,y-1.8),e.lineTo(R+1.8,y),e.lineTo(R,y+1.8),e.lineTo(R-1.8,y),e.closePath(),e.fillStyle=w,e.globalAlpha=.85,e.fill(),e.globalAlpha=1;e.strokeStyle=j(i.shirt,-.3),e.lineWidth=.35;for(let y=-16;y<24;y+=3.6)e.beginPath(),e.moveTo(y-12,-20),e.lineTo(y+8,-6),e.moveTo(y+8-12+24,-20),e.lineTo(y-12+12-12,-6),e.stroke();e.restore()}g==="fairisle"&&(e.save(),ge(),e.clip(),[-17.4,-12.4].forEach((y,R)=>{e.fillStyle=w,e.fillRect(-8,y-1.5,16,3);for(let z=-7;z<8;z+=2.2)e.fillStyle=R?j(i.shirt,-.3):"#c4463c",e.beginPath(),e.moveTo(z,y-1.5),e.lineTo(z+1.1,y+.1),e.lineTo(z+2.2,y-1.5),e.closePath(),e.fill(),e.beginPath(),e.moveTo(z,y+1.5),e.lineTo(z+1.1,y-.1),e.lineTo(z+2.2,y+1.5),e.closePath(),e.fill()}),e.restore()),e.beginPath(),e.moveTo(-3.6,-19.6),e.lineTo(0,-14.4),e.lineTo(3.6,-19.6),e.closePath(),L(e,i.skin,1),e.fillStyle=j(i.shirt,-.25),e.fillRect(-6.4*u,-10.2,12.8*u,2.2);for(let y=-6;y<6.4;y+=1.4)e.fillStyle="rgba(0,0,0,.12)",e.fillRect(y,-10.2,.3,2.2)}else if(g==="cableknit"){for(let y of[-3.8,0,3.8])for(let R=-18;R<-9.6;R+=2.1)e.beginPath(),e.ellipse(y+(Math.round(R/2.1)&1?.7:-.7),R,1.1,1.1,0,0,7),e.strokeStyle=j(i.shirt,-.3),e.lineWidth=.5,e.stroke();e.beginPath(),e.ellipse(0,-19.5,3.8,1.7,0,0,7),L(e,j(i.shirt,-.12),.9),e.fillStyle=j(i.shirt,-.25),e.fillRect(-6.4*u,-10.2,12.8*u,2.2)}else if(g==="cowl"){e.beginPath(),e.ellipse(0,-19.4,5.2,2.8,0,0,7),L(e,j(i.shirt,.08),1),e.beginPath(),e.ellipse(0,-20.4,4.4,2,0,0,7),L(e,j(i.shirt,.18),1),e.strokeStyle=j(i.shirt,-.2),e.lineWidth=.4;for(let y=-3;y<=3;y++)e.beginPath(),e.moveTo(y*1.2,-21.4),e.lineTo(y*1.5,-17.4),e.stroke();e.fillStyle=j(i.shirt,-.25),e.fillRect(-6.4*u,-10.2,12.8*u,2.2)}else if(g==="chunky"){e.strokeStyle=j(i.shirt,-.22),e.lineWidth=.5;for(let y=-17.6;y<-9.6;y+=1.9)e.beginPath(),e.moveTo(-6.2*u,y),e.quadraticCurveTo(0,y+.8,6.2*u,y),e.stroke();e.beginPath(),e.ellipse(0,-19.5,4.6,2.1,0,0,7),L(e,j(i.shirt,.14),1.1),e.fillStyle=j(i.shirt,-.3),e.fillRect(-7.2*u,-10.4,14.4*u,2.6),ze(e,-6.4*u,-18.6,-7.4*u,-12,.6,j(i.shirt,-.25)),ze(e,6.4*u,-18.6,7.4*u,-12,.6,j(i.shirt,-.25))}else if(g==="ziphoodie")e.beginPath(),e.ellipse(0,-19.6,6.4*u,3.2,0,0,7),L(e,j(i.shirt,.14),1.2),ze(e,0,-19.4,0,-8.6,.8,j(i.shirt,-.45)),e.fillStyle="#c9b28a",e.fillRect(-.5,-17,1,1.6),[-1,1].forEach(y=>{We(e,y*3.6-1.7,-13,3.4,3.4,1),e.lineWidth=.7,e.strokeStyle=j(i.shirt,-.3),e.stroke(),ze(e,y*1.5,-18.6,y*1.5,-15.4,.7,w)});else if(g==="varsity")ze(e,0,-19.4,0,-8.6,.6,j(i.shirt,-.4)),[-17,-14,-11].forEach(y=>{e.fillStyle="#c9b28a",e.beginPath(),e.arc(0,y,.55,0,7),e.fill()}),e.fillStyle=w,e.fillRect(-6.6*u,-9.8,13.2*u,1.6),e.fillRect(-3.4,-19.6,6.8,1.2),e.font="800 6px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillStyle=w,e.fillText(String.fromCharCode(65+i.id%26),-3.2,-13);else if(g==="denim"){e.save(),ge(),e.clip(),e.strokeStyle="rgba(255,255,255,.18)",e.lineWidth=.6;for(let y=-20;y<-8;y+=1.4)e.beginPath(),e.moveTo(-8,y),e.lineTo(8,y),e.stroke();e.restore(),[-1,1].forEach(y=>{We(e,y*3.5-1.8,-17,3.6,3.4,.6),e.lineWidth=.7,e.strokeStyle="#f0b25c",e.setLineDash([.9,.6]),e.stroke(),e.setLineDash([]),e.beginPath(),e.moveTo(y*.4,-19.6),e.lineTo(y*4.2,-19.6),e.lineTo(y*1.2,-16.6),e.closePath(),L(e,j(i.shirt,.12),.8)}),ze(e,0,-17,0,-8.6,.6,"#f0b25c"),[-14.4,-11.6].forEach(y=>{e.fillStyle="#c9b28a",e.beginPath(),e.arc(0,y,.5,0,7),e.fill()})}else if(g==="puffer")e.strokeStyle=j(i.shirt,-.35),e.lineWidth=.9,[-16.6,-13.6,-10.6].forEach(y=>{e.beginPath(),e.moveTo(-6.4*u,y),e.quadraticCurveTo(0,y+1.1,6.4*u,y),e.stroke()}),e.beginPath(),e.ellipse(0,-19.6,4.2,1.8,0,0,7),L(e,j(i.shirt,.15),1),ze(e,0,-19,0,-8.6,.7,j(i.shirt,-.45));else if(g==="raincoat")e.beginPath(),e.ellipse(0,-19.6,6.4*u,3.2,0,0,7),L(e,j(i.shirt,.12),1.2),[-17,-14.2,-11.4].forEach(y=>{e.fillStyle="#fff6ea",e.beginPath(),e.arc(0,y,.65,0,7),e.fill()}),[-1,1].forEach(y=>{We(e,y*3.6-1.8,-13,3.6,3,.8),e.lineWidth=.7,e.strokeStyle=j(i.shirt,-.3),e.stroke()}),ze(e,0,-19.4,0,-8.6,.5,j(i.shirt,-.35));else if(g==="labcoat")e.fillStyle="#fff",e.globalAlpha=.96,ge(),e.fill(),e.globalAlpha=1,We(e,-2.2,-19.4,4.4,10.8,.6),L(e,w,.7),[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*4.2,-19.6),e.lineTo(y*.5,-19.6),e.lineTo(y*1.4,-13.6),e.closePath(),L(e,"#f4f7fb",.8)}),We(e,-5.6,-14,3,3.2,.5),e.lineWidth=.6,e.strokeStyle="#9aa7b4",e.stroke(),ze(e,-4.6,-15.6,-4.6,-13.4,.7,"#3b6ea8"),ze(e,0,-13.6,0,-8.6,.5,"#9aa7b4");else if(g==="apron")We(e,-3.6,-17.8,7.2,9.8,1.4),L(e,w,1),ze(e,-3,-17.6,-4.6,-19.6,.9,w),ze(e,3,-17.6,4.6,-19.6,.9,w),We(e,-2,-13.4,4,3,.6),e.lineWidth=.6,e.strokeStyle=j(w,-.3),e.stroke(),ze(e,-3.6,-11,-6.8,-11.4,.8,w),ze(e,3.6,-11,6.8,-11.4,.8,w);else if(g==="polo")[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*4.2,-19.6),e.lineTo(y*.4,-19.6),e.lineTo(y*.3,-15.4),e.closePath(),L(e,j(i.shirt,.3),.8)}),ze(e,0,-17.6,0,-13.4,.5,j(i.shirt,-.3)),[-16.6,-14.6].forEach(y=>{e.fillStyle="#fff6ea",e.beginPath(),e.arc(0,y,.45,0,7),e.fill()});else if(g==="turtleneck"){e.beginPath(),e.ellipse(0,-19.7,4.4,2.6,0,0,7),L(e,j(i.shirt,.1),1);for(let y=-2;y<=2;y++)ze(e,y*1.3,-21.4,y*1.3,-18.2,.4,j(i.shirt,-.25))}else g==="cardigan"?(We(e,-2.3,-19.4,4.6,10.6,1),L(e,w,.9),[-1,1].forEach(y=>ze(e,y*2.3,-19.4,y*2.3,-9,.9,j(i.shirt,-.3))),[-17,-14,-11].forEach(y=>{e.fillStyle=j(i.shirt,.35),e.beginPath(),e.arc(1.2,y,.5,0,7),e.fill()})):g==="track"?(ze(e,0,-19.4,0,-9,.8,j(i.shirt,-.4)),[-1,1].forEach(y=>ze(e,y*6.1*u,-19.2,y*5.8*u,-9.6,1.1,w)),e.fillStyle=j(i.shirt,-.25),e.fillRect(-1.2,-19.6,2.4,1.4)):g==="dress"&&(e.fillStyle=j(i.shirt,-.35),e.fillRect(-6.4*u,-13.2,13.2*u,1.2))}else{let y=i.id%3;y===0?(e.fillStyle="rgba(255,255,255,.45)",e.fillRect(-6,-15.4,12,2.4)):y===2&&!d&&(e.fillStyle="#fff",e.beginPath(),e.moveTo(-3,-19.4),e.lineTo(0,-16),e.lineTo(3,-19.4),e.closePath(),L(e,"#fff",.9))}if(d&&st(),d?T!=="none"&&(We(e,-6,-19,12,10.5,4),L(e,N,1.3),e.fillStyle="rgba(255,255,255,.3)",e.fillRect(-4,-17.5,8,2)):!l&&T==="pack"?(ze(e,-3.6,-19.2,-3.6,-11,1.5,N),ze(e,3.6,-19.2,3.6,-11,1.5,N)):!l&&T==="messenger"&&(ze(e,-5.6,-19.2,5.2,-9.8,1.5,N),We(e,3.2,-12.6,5.6,5,1.6),L(e,N,1.1)),i.scarf&&(e.beginPath(),e.ellipse(0,-19.4,6.6*u,2.4,0,0,7),L(e,i.scarf,1.2),!d&&!l&&(We(e,1.6,-19,3.2,8,1.4),L(e,i.scarf,1.1),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(1.9,-15.6,2.6,.9))),i.neckwear&&i.neckwear!=="none"&&!d){let y=i.neckColor||"#c4463c",R=i.neckwear;R==="necklace"?(e.beginPath(),e.moveTo(-3.4,-19.6),e.quadraticCurveTo(0,l?-15.6:-14.4,3.4,-19.6),e.strokeStyle=y,e.lineWidth=.8,e.stroke(),e.beginPath(),e.arc(0,l?-16.2:-15.2,1,0,7),L(e,y,.5)):R==="bowtie"?([-1,1].forEach(z=>{e.beginPath(),e.moveTo(0,-19),e.lineTo(z*3.6,-20.6),e.lineTo(z*3.6,-17.4),e.closePath(),L(e,y,.8)}),e.beginPath(),e.arc(0,-19,.9,0,7),L(e,j(y,.2),.6)):R==="tie"&&!l?(e.beginPath(),e.moveTo(-1.1,-19.6),e.lineTo(1.1,-19.6),e.lineTo(.9,-17.8),e.lineTo(-.9,-17.8),e.closePath(),L(e,y,.7),e.beginPath(),e.moveTo(-.9,-17.8),e.lineTo(.9,-17.8),e.lineTo(1.6,-11.6),e.lineTo(0,-10.4),e.lineTo(-1.6,-11.6),e.closePath(),L(e,y,.8)):R==="bandana"?(e.beginPath(),e.moveTo(-4.6,-20.4),e.quadraticCurveTo(0,-19.4,4.6,-20.4),e.lineTo(0,-15),e.closePath(),L(e,y,1),e.fillStyle="rgba(255,255,255,.55)",[[-2,-19],[1.6,-18.6],[-.2,-16.8]].forEach(([z,se])=>{e.beginPath(),e.arc(z,se,.5,0,7),e.fill()})):R==="lanyard"&&!l&&(ze(e,-2.6,-19.6,-.6,-12.6,.6,y),ze(e,2.6,-19.6,.6,-12.6,.6,y),We(e,-1.8,-12.8,3.6,4.6,.8),L(e,"#fffaf2",.7),e.fillStyle="#4F91C7",e.fillRect(-1.2,-12.2,2.4,.9))}at(),i.tag&&(e.beginPath(),e.moveTo(-6,-19.5),e.lineTo(-1,-8.5),e.lineTo(-6.6,-9),e.closePath(),e.fillStyle="#c4463c",e.fill(),e.beginPath(),e.moveTo(6,-19.5),e.lineTo(1,-8.5),e.lineTo(6.6,-9),e.closePath(),e.fill()),i.badge&&!d&&!l&&(e.beginPath(),e.arc(-3.8,-15.4,1.5,0,7),L(e,i.badge,.9)),l?G(h*1,!0):(G(-1),G(1)),f&&e.scale(1,1/m),e.save(),ie();let ce=(f?8.1:8.9)*x,Me=(f?9.2:8.3)*x;d&&Ae(),l||[-1,1].forEach(y=>{let R=i.earShape||"round";R==="pointy"?(e.beginPath(),e.moveTo(y*8.2,o-2),e.lineTo(y*12.6,o-5.6),e.lineTo(y*9,o+3.4),e.closePath(),L(e,i.skin,1),e.strokeStyle="rgba(160,90,80,.4)",e.lineWidth=.5,e.beginPath(),e.moveTo(y*9,o-1.6),e.lineTo(y*11,o-3.6),e.stroke()):(e.beginPath(),e.arc(y*(R==="big"?9.2:8.7),o+1,R==="big"?2.9:R==="small"?1.3:2,0,7),L(e,i.skin,1))}),(!d||!K0.includes(b))&&re(o+Me-3.4,o+Me+2.5,!0);{let y=i.faceShape||"oval",R=l?h*.6:0;e.beginPath(),y==="round"?e.ellipse(R,o,ce*1.05,Me*.96,0,0,7):y==="long"?e.ellipse(R,o,ce*.94,Me*1.07,0,0,7):y==="square"?We(e,R-ce*.98,o-Me*.94,ce*1.96,Me*1.9,5.8):y==="heart"?(e.moveTo(R-ce,o-1),e.bezierCurveTo(R-ce,o-Me*1.3,R+ce,o-Me*1.3,R+ce,o-1),e.bezierCurveTo(R+ce,o+Me*.5,R+2.2,o+Me*1.06,R,o+Me*1.05),e.bezierCurveTo(R-2.2,o+Me*1.06,R-ce,o+Me*.5,R-ce,o-1),e.closePath()):e.ellipse(R,o,ce,Me,0,0,7),L(e,i.skin,1.5)}e.fillStyle="rgba(120,70,60,.13)",e.beginPath(),e.ellipse(3,o+3,7.5,6,0,0,7),e.fill();let Ke=[];if(!d){let y=(s*.9+i.id*1.7)%4<.13,R=l?[h*4.4]:[-3.5,3.5],z=i.eyeShape||"round",se=i.eyeColor,I=i.brow||"soft",Ce=i.browColor||i.hair;if(R.forEach((U,K)=>{let de=K===1&&i.eyeColor2?i.eyeColor2:se;if(y||z==="happy"||z==="wink"&&K===0&&!l)e.strokeStyle="#3a2a30",e.lineWidth=1.1,e.beginPath(),z==="happy"&&!y?e.arc(U,o+.6,1.7,Math.PI*1.1,Math.PI*1.9):(e.moveTo(U-1.6,o),e.lineTo(U+1.6,o)),e.stroke();else{let fe=f?.74:1,ee=(z==="wide"||z==="cute"?2.1:z==="oval"?1.4:1.7)*fe,oe=(z==="wide"||z==="oval"?2.7:z==="cute"?3.1:2.3)*(f?.82:1);if(e.fillStyle=de||"#3a2a30",e.beginPath(),e.ellipse(U,o,ee,oe,0,0,7),e.fill(),de&&(e.fillStyle="#2a1d22",e.beginPath(),e.ellipse(U,o+.2,ee*.5,oe*.55,0,0,7),e.fill()),e.fillStyle="#fff",e.beginPath(),e.arc(U-.5,o-.9,z==="wide"||z==="cute"?.95:.7,0,7),e.fill(),z==="cute"&&(e.beginPath(),e.arc(U+.7,o+1,.45,0,7),e.fill()),z==="tired"&&(e.strokeStyle=j(i.skin,.3),e.lineWidth=.7,e.beginPath(),e.moveTo(U-1.5,o+2.7),e.quadraticCurveTo(U,o+3.5,U+1.5,o+2.7),e.stroke()),(z==="sleepy"||z==="tired")&&(e.fillStyle=i.skin,e.beginPath(),e.ellipse(U,o-1.1,ee+.5,oe*.62,0,Math.PI,2*Math.PI),e.fill(),e.strokeStyle="#3a2a30",e.lineWidth=.9,e.beginPath(),e.moveTo(U-ee-.4,o-.6),e.lineTo(U+ee+.4,o-.6),e.stroke()),z==="lash"){e.strokeStyle="#3a2a30",e.lineWidth=.8;let me=l?h:K?1:-1;e.beginPath(),e.moveTo(U+me*ee,o-1),e.lineTo(U+me*(ee+1.4),o-2.2),e.moveTo(U+me*ee,o-.1),e.lineTo(U+me*(ee+1.6),o-.6),e.stroke()}}if(!y&&i.eyeShadow&&z!=="happy"&&(e.fillStyle=i.eyeShadow,e.globalAlpha=.55,e.beginPath(),e.ellipse(U,o-2.1,2.6,1.2,0,0,7),e.fill(),e.globalAlpha=1),!y&&i.liner&&z!=="happy"){e.strokeStyle="#2a1d22",e.lineWidth=.8,e.lineCap="round";let fe=l?h:K?1:-1;e.beginPath(),e.moveTo(U-2.2,o-1.7),e.quadraticCurveTo(U,o-3,U+2.2,o-1.7),e.lineTo(U+fe*3.6,o-2.7),e.stroke()}if(Ke.push(()=>{if(I!=="none"){let fe=(I==="thick"?1.6:I==="thin"?.6:.9)+(f?.45:0),ee=j(Ce,-.3);e.lineCap="round";let oe=()=>{e.strokeStyle="rgba(255,246,234,.38)",e.lineWidth=fe+1.1,e.stroke(),e.strokeStyle=ee,e.lineWidth=fe,e.stroke()};if(e.beginPath(),I==="worried"||I==="angled"){let me=I==="worried"?1:-1,Ne=l?0:K?1:0,ye=Ne?4.8:3.2,ve=Ne?3.2:4.8;e.moveTo(U-2,o-(me>0?ye:ve)),e.lineTo(U+2,o-(me>0?ve:ye))}else if(I==="arch")e.moveTo(U-2,o-3.2),e.quadraticCurveTo(U,o-5.2,U+2,o-3.6);else if(f){let me=l||K?1:-1;e.moveTo(U-2.2*me,o-3.5),e.lineTo(U+2.2*me,o-4.3)}else e.moveTo(U-2,o-3.6),e.lineTo(U+2,o-3.9);oe()}I==="unibrow"&&K===0&&!l&&(e.lineCap="round",e.beginPath(),e.moveTo(-3.8,o-3.7),e.lineTo(3.8,o-3.7),e.strokeStyle="rgba(255,246,234,.38)",e.lineWidth=2.7,e.stroke(),e.strokeStyle=j(Ce,-.3),e.lineWidth=1.2,e.stroke())}),i.glasses){let fe=i.glasses===!0?"round":i.glasses,ee=i.glassColor||"#5b4048";e.strokeStyle=ee,e.lineWidth=fe==="sun"?1:.9,e.beginPath(),fe==="square"?e.roundRect(U-3.1,o-2.6,6.2,5.2,1.2):fe==="cat"?(e.ellipse(U,o,3.2,2.7,0,0,7),e.moveTo(U+(l?h:K?1:-1)*3,o-1.6),e.lineTo(U+(l?h:K?1:-1)*4.4,o-3.4)):fe==="half"?e.arc(U,o,3.2,Math.PI,0):e.arc(U,o,3.2,0,7),fe==="sun"&&(e.fillStyle="rgba(40,30,40,.82)",e.fill()),e.stroke()}}),i.glasses&&!l&&(e.strokeStyle=i.glassColor||"#5b4048",e.lineWidth=.9,e.beginPath(),e.moveTo(-.3,o-.5),e.lineTo(.3,o-.5),e.stroke()),(f?i.blush===!0:i.blush!==!1)&&(e.fillStyle=i.blushColor||(f?"rgba(255,110,125,.14)":"rgba(255,110,125,.38)"),(l?[h*6.4]:[-6,6]).forEach(U=>{e.beginPath(),e.ellipse(U,o+3.4,2.1,1.3,0,0,7),e.fill()})),i.freckles&&(e.fillStyle=j(i.skin,.32),(l?[[h*5.6,o+2.2],[h*6.8,o+3.2],[h*5.2,o+3.8]]:[[-5.6,o+2.4],[-4.2,o+3.4],[-6.4,o+3.8],[5.6,o+2.4],[4.2,o+3.4],[6.4,o+3.8]]).forEach(([U,K])=>{e.beginPath(),e.arc(U,K,.5,0,7),e.fill()})),i.mole&&(e.fillStyle="#4a2f2a",e.beginPath(),e.arc(l?h*6:4.4,o+5.2,.65,0,7),e.fill()),i.mark&&i.mark!=="none"){let U=i.mark,K=l?h*5.4:4.8;U==="bandaid"?(e.save(),e.translate(K,o+3.4),e.rotate(-.5),We(e,-2.4,-.9,4.8,1.8,.6),L(e,"#f2c9a0",.7),e.fillStyle="#d9a070",e.fillRect(-.6,-.9,1.2,1.8),e.restore()):U==="dimples"?(e.strokeStyle=j(i.skin,.3),e.lineWidth=.6,e.lineCap="round",(l?[h*5.4]:[-4.6,4.6]).forEach(de=>{e.beginPath(),e.arc(de,o+4.4,.8,-.7,.8),e.stroke()})):U==="birthmark"?(e.fillStyle="rgba(120,70,50,.38)",e.beginPath(),e.ellipse(l?h*5.6:-5,o+2.8,1.5,1.1,.4,0,7),e.fill()):U==="braces"||(U==="star"?As(e,l?h*5.6:-5.2,o+3.2,1.6,"#EAB94E"):U==="paint"?(l?[h*5.6]:[-5.4,5.4]).forEach(de=>_h(e,de,o+3.2,1,"#e8789a")):U==="scar"?(e.strokeStyle=j(i.skin,.45),e.lineWidth=.7,e.beginPath(),e.moveTo(K-.6,o-5.2),e.lineTo(K+.8,o-2.2),e.stroke(),e.lineWidth=.4,e.beginPath(),e.moveTo(K-1,o-4.2),e.lineTo(K+.6,o-4.6),e.moveTo(K-.6,o-3),e.lineTo(K+1.1,o-3.4),e.stroke()):U==="glitter"&&(e.fillStyle="#fff6ea",[[-5.6,o+2.6],[-4.4,o+3.6],[-6.4,o+3.8],[5.6,o+2.6],[4.4,o+3.6],[6.4,o+3.8]].forEach(([de,fe],ee)=>{e.beginPath(),e.arc(l?h*(Math.abs(de)-.4):de,fe,.55,0,7),e.fillStyle=ee%2?"#f8d977":"#bfe6f5",e.fill()})))}if(i.nose||f||i.noseShape&&i.noseShape!=="button"){e.strokeStyle=j(i.skin,.3),e.lineWidth=.8,e.lineCap="round",e.beginPath();let U=l?h*6.4:0,K=i.noseShape||"button";K==="pointy"?(e.moveTo(U,o+.6),e.lineTo(U+(l?h*1.2:-.9),o+3.2),e.lineTo(U+(l?0:.9),o+3.2),e.stroke()):K==="wide"?(e.arc(U-(l?0:.8),o+2.8,.8,.1*Math.PI,.9*Math.PI),e.stroke(),e.beginPath(),e.arc(U+(l?h*.8:.8),o+2.8,.8,.1*Math.PI,.9*Math.PI),e.stroke()):K==="round"?(e.fillStyle=j(i.skin,.12),e.arc(U,o+2.4,1.2,0,7),e.fill(),e.stroke()):(e.arc(U,o+2.6,.9,.1*Math.PI,.9*Math.PI),e.stroke())}i.nosePin&&!d&&(e.beginPath(),e.arc(l?h*6.9:1.9,o+3.2,.65,0,7),L(e,i.nosePin,.4)),$0(e,i,o,l,h);let pe=l?h*3.6:0,C=o+4.7,v=i.mouthStyle||"smile",H=i.lip||"#8a4650";i.mouth?(e.fillStyle="#7A3B3B",e.beginPath(),e.ellipse(pe,o+4.8,1.7,.7+i.mouth*1.5,0,0,7),e.fill()):v==="grin"?(e.beginPath(),e.moveTo(pe-2.4,C-.9),e.quadraticCurveTo(pe,C+2.8,pe+2.4,C-.9),e.closePath(),e.fillStyle="#fff",e.fill(),e.strokeStyle=H,e.lineWidth=.9,e.stroke()):v==="smirk"?(e.strokeStyle=H,e.lineWidth=1,e.lineCap="round",e.beginPath(),e.moveTo(pe-1.8,C),e.quadraticCurveTo(pe+.4,C+1,pe+2.2,C-.8),e.stroke()):v==="flat"?(e.strokeStyle=H,e.lineWidth=1,e.lineCap="round",e.beginPath(),e.moveTo(pe-1.5,C),e.lineTo(pe+1.5,C),e.stroke()):v==="o"?(e.fillStyle="#7A3B3B",e.beginPath(),e.ellipse(pe,C+.2,1,1.2,0,0,7),e.fill()):v==="tongue"?(e.beginPath(),e.moveTo(pe-2.2,C-.8),e.quadraticCurveTo(pe,C+2.6,pe+2.2,C-.8),e.closePath(),e.fillStyle="#7A3B3B",e.fill(),e.beginPath(),e.ellipse(pe+.2,C+1.1,1.1,.9,0,0,7),e.fillStyle="#f08a9a",e.fill()):v==="teeth"?(e.beginPath(),e.moveTo(pe-2.5,C-.7),e.quadraticCurveTo(pe,C+3,pe+2.5,C-.7),e.closePath(),e.fillStyle="#fff",e.fill(),e.strokeStyle=H,e.lineWidth=.8,e.stroke(),e.beginPath(),e.moveTo(pe-2.2,C-.1),e.lineTo(pe+2.2,C-.1),e.strokeStyle="rgba(122,59,59,.45)",e.lineWidth=.4,e.stroke()):v==="pout"?(e.beginPath(),e.ellipse(pe,C+.3,1.3,.85,0,0,7),e.fillStyle=H,e.fill()):v==="gap"?(e.strokeStyle=H,e.lineWidth=1,e.lineCap="round",e.beginPath(),e.arc(pe,C-.6,2.1,.12*Math.PI,.88*Math.PI),e.stroke(),e.fillStyle="#fff",e.fillRect(pe-1.1,C+1.3,.9,1),e.fillRect(pe+.2,C+1.3,.9,1)):v==="cat"?(e.strokeStyle=H,e.lineWidth=.9,e.lineCap="round",e.beginPath(),e.arc(pe-1,C-.4,1.1,.1*Math.PI,.9*Math.PI),e.arc(pe+1,C-.4,1.1,.1*Math.PI,.9*Math.PI),e.stroke()):(e.strokeStyle=H,e.lineWidth=1,e.lineCap="round",e.beginPath(),e.arc(pe,o+(f?5.4:4.6),f?1.35:1.7,.15*Math.PI,.85*Math.PI),e.stroke())}if(!d&&i.mark==="braces"){let y=l?h*3.6:0;e.strokeStyle="#9da7aa",e.lineWidth=.7,e.beginPath(),e.moveTo(y-1.8,o+5.2),e.quadraticCurveTo(y,o+6,y+1.8,o+5.2),e.stroke(),e.fillStyle="#9da7aa";for(let R=-1;R<=1;R++)e.beginPath(),e.arc(y+R*1.1,o+5.6-Math.abs(R)*.15,.35,0,7),e.fill()}if(!d&&_e==="mask"){e.beginPath(),l?(e.moveTo(h*2,o+1.4),e.lineTo(h*8.4,o+2.4),e.lineTo(h*7.6,o+8.4),e.lineTo(h*2,o+8.6)):(e.moveTo(-7.4,o+1.8),e.lineTo(7.4,o+1.8),e.lineTo(6.8,o+8),e.quadraticCurveTo(0,o+10.6,-6.8,o+8)),e.closePath(),L(e,"#d9eef8",1),e.strokeStyle="rgba(60,110,150,.45)",e.lineWidth=.5;for(let y of[3.8,5.8,7.6])e.beginPath(),e.moveTo(l?h*2.4:-6.6,o+y),e.lineTo(l?h*7.6:6.6,o+y+.2),e.stroke();l||(e.strokeStyle=Ct,e.lineWidth=.7,e.beginPath(),e.moveTo(-7.4,o+2.6),e.lineTo(-9,o+1),e.moveTo(7.4,o+2.6),e.lineTo(9,o+1),e.stroke())}!d&&_e==="eyepatch"&&(e.beginPath(),e.ellipse(l?h*4.4:3.5,o,2.7,2.5,0,0,7),L(e,"#2a2a32",1),l||(e.strokeStyle="#2a2a32",e.lineWidth=.8,e.beginPath(),e.moveTo(.9,o-.6),e.lineTo(-8.8,o-2.4),e.moveTo(6,o-.8),e.lineTo(8.8,o-2.6),e.stroke()));let D=l?-h*1.6:0,ke=()=>{let y=l?h:1,R=l?-1.6:0;l&&(e.save(),e.scale(y,1)),e.beginPath(),l?(e.moveTo(-9.2+R,o+5.4),e.lineTo(-9.3+R,o+.5),e.bezierCurveTo(-11+R,o-14,11+R,o-14,9.3+R,o+.5),e.quadraticCurveTo(7+R,o-5.4,4+R,o-4.6),e.lineTo(-2.6+R,o-1.6),e.lineTo(-5.4+R,o+3.6)):(e.moveTo(-9.3,o+.5),e.bezierCurveTo(-11,o-14,11,o-14,9.3,o+.5),e.quadraticCurveTo(6,o-3.4,2,o-4.4),e.quadraticCurveTo(-3,o-6,-9.3,o+.5)),e.closePath(),l&&e.restore()};if(d&&b==="bald")e.beginPath(),e.ellipse(0,o-.4,9.4,8.9,0,0,7),L(e,i.skin,1.4),e.fillStyle="rgba(255,255,255,.25)",e.beginPath(),e.ellipse(-2.5,o-4,3.5,2,0,0,7),e.fill();else if(d&&(b==="balding"||b==="fade"||b==="undercut"||b==="mohawk"||b==="sidecut"))e.beginPath(),e.ellipse(0,o-.4,9.4,8.9,0,0,7),L(e,b==="balding"||b==="fade"?X:i.skin,1.4),b==="balding"?(e.beginPath(),e.ellipse(0,o-5,6,4.4,0,0,7),L(e,i.skin,1)):b==="fade"?(e.fillStyle=F(0,o-9,0,o+8,[[0,A],[.45,A],[.95,i.skin]]),e.beginPath(),e.ellipse(0,o-.4,9.2,8.7,0,0,7),e.fill()):(e.beginPath(),e.ellipse(0,o-6,b==="mohawk"?2.6:6.4,5,0,0,7),L(e,X,1.1));else if(d)e.beginPath(),e.ellipse(0,o-.4,9.4,8.9,0,0,7),L(e,X,1.4),e.fillStyle="rgba(255,255,255,.2)",e.beginPath(),e.ellipse(-2.5,o-4,3.5,2,0,0,7),e.fill();else if(b==="buzz")e.beginPath(),e.moveTo(-8.8+D,o-1.2),e.bezierCurveTo(-10+D,o-11,10+D,o-11,8.8+D,o-1.2),e.quadraticCurveTo(0,o-4.6,-8.8+D,o-1.2),e.closePath(),L(e,X,1.3);else if(b==="undercut")ke(),L(e,i.skin,1.3),e.fillStyle="rgba(90,60,60,.10)",e.fill(),e.beginPath(),e.moveTo(-7+D,o-4),e.bezierCurveTo(-8+D,o-17,9+D,o-16,7.4+D,o-4),e.quadraticCurveTo(0,o-6,-7+D,o-4),e.closePath(),L(e,X,1.3);else if(b==="spiky"||b==="messy"){ke(),L(e,X,1.4);let y=b==="spiky"?6:4;for(let R=0;R<y;R++){let z=-Math.PI*(.12+.76*R/(y-1)),se=Math.cos(z+Math.PI)*7.6+D,I=o-3+Math.sin(z)*5.4,Ce=b==="spiky"?6.4:4.4+R%2*1.6;e.beginPath(),e.moveTo(se-2.1,I+1.4),e.lineTo(se+(R-y/2)*.8,I-Ce),e.lineTo(se+2.1,I+1.4),e.closePath(),L(e,X,1.2)}ke(),L(e,X,1.2)}else if(b==="sidebang"||b==="pixie")ke(),L(e,X,1.4),e.beginPath(),e.moveTo(-9+D,o-6),e.quadraticCurveTo(2+D,o-12,9.4+D,o-1.4),e.quadraticCurveTo(b==="pixie"?4+D:-1+D,o-3.6,-9+D,o-6),e.closePath(),L(e,X,1.2),b==="pixie"&&!l&&[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*9.2,o-1),e.lineTo(y*10.4,o+5),e.lineTo(y*7.6,o+1),e.closePath(),L(e,X,1)});else if(b==="curtains")ke(),L(e,X,1.4),l||(e.strokeStyle=j(A,.35),e.lineWidth=1,e.beginPath(),e.moveTo(0,o-9.4),e.quadraticCurveTo(-1.2,o-6,-.2,o-3.6),e.stroke());else if(b==="bald")e.fillStyle="rgba(255,255,255,.28)",e.beginPath(),e.ellipse(-3+D,o-6.4,3,1.4,-.3,0,7),e.fill();else if(b==="fade")ke(),L(e,F(0,o-10,0,o+1,[[0,A],[.42,A],[.9,i.skin]]),1.3),e.fillStyle="rgba(90,60,60,.08)",e.fill(),e.beginPath(),e.moveTo(-6.4+D,o-5.2),e.bezierCurveTo(-7.4+D,o-16,8.4+D,o-15.4,6.6+D,o-5.2),e.quadraticCurveTo(D,o-7.6,-6.4+D,o-5.2),e.closePath(),L(e,X,1.2);else if(b==="sidecut")ke(),L(e,X,1.4),e.beginPath(),l?e.ellipse(-h*1.4,o-2.6,3,3.8,0,0,7):(e.moveTo(-9.2,o+.4),e.bezierCurveTo(-9.8,o-6.4,-6.6,o-8.4,-4.6,o-3.8),e.lineTo(-4.6,o+.2),e.quadraticCurveTo(-7,o+1.2,-9.2,o+.4),e.closePath()),L(e,i.skin,1),e.fillStyle="rgba(90,60,60,.09)",e.fill();else if(b==="balding")ke(),L(e,X,1.4),e.beginPath(),e.ellipse(l?-h*1.6:0,o-6.4,l?5.4:6.8,4.6,0,0,7),L(e,i.skin,1),e.fillStyle="rgba(255,255,255,.3)",e.beginPath(),e.ellipse(-2.2+D,o-8,2.4,1.1,-.3,0,7),e.fill();else if(b==="receding")ke(),L(e,X,1.4),l?(e.beginPath(),e.moveTo(h*6.4+D,o-6),e.quadraticCurveTo(h*8.8+D,o-3.6,h*9+D,o),e.quadraticCurveTo(h*5.6+D,o-2.4,h*6.4+D,o-6),e.closePath(),L(e,i.skin,1)):[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*9.2,o-1.2),e.quadraticCurveTo(y*6.8,o-8,y*2.4,o-4.8),e.quadraticCurveTo(y*5.6,o-3.8,y*6.4,o+.2),e.closePath(),L(e,i.skin,1)});else if(b==="flattop")e.beginPath(),e.moveTo(-8.8+D,o-1),e.lineTo(-8.5+D,o-12.6),e.quadraticCurveTo(D,o-13.8,8.5+D,o-12.6),e.lineTo(8.8+D,o-1),e.quadraticCurveTo(D,o-4.6,-8.8+D,o-1),e.closePath(),L(e,X,1.3),e.fillStyle="rgba(255,255,255,.18)",e.fillRect(-6+D,o-12.2,12,1.2);else if(b==="pompadour")ke(),L(e,X,1.4),e.beginPath(),e.moveTo(-8.4+D,o-4),e.bezierCurveTo(-12+D,o-19,10+D,o-21,9+D,o-4),e.quadraticCurveTo(D,o-9,-8.4+D,o-4),e.closePath(),L(e,X,1.3);else if(b==="quiff")ke(),L(e,X,1.4),e.beginPath(),e.moveTo(-3+D,o-7),e.bezierCurveTo(-5+D,o-16,9+D,o-17.5,8.4+D,o-5),e.quadraticCurveTo(3+D,o-8.4,-3+D,o-7),e.closePath(),L(e,X,1.3);else if(b==="bantuknots")ke(),L(e,X,1.4),[[-6.8,-6.6],[-3.4,-10],[0,-11.4],[3.4,-10],[6.8,-6.6]].forEach(([y,R])=>{e.beginPath(),e.arc(y+D,o+R,2.7,0,7),L(e,X,1.1),e.strokeStyle=j(A,-.3),e.lineWidth=.5,e.beginPath(),e.arc(y+D,o+R,1.2,0,5),e.stroke()});else if(b==="highpony")ke(),L(e,X,1.4),e.beginPath(),e.arc(D,o-10.4,2.4,0,7),L(e,j(A,-.15),1.1),e.beginPath(),e.arc(D,o-12.6,1.3,0,7),L(e,"#e07a66",.8);else if(b==="hime")ke(),L(e,X,1.4),l||[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*8.2,o-2),e.lineTo(y*9.6,o+9.4),e.lineTo(y*7.4,o+9.4),e.lineTo(y*7,o),e.closePath(),L(e,X,1)});else if(b==="mohawk"){e.beginPath(),e.moveTo(-8.8+D,o-1.4),e.bezierCurveTo(-10+D,o-10,10+D,o-10,8.8+D,o-1.4),e.quadraticCurveTo(D,o-4.4,-8.8+D,o-1.4),e.closePath(),L(e,i.skin,1.1),e.fillStyle="rgba(90,60,60,.10)",e.fill();let y=l?3:3.4;e.beginPath(),e.moveTo(-y+D,o-3.6);for(let R=0;R<5;R++){let z=-y+2*y*R/4;e.lineTo(z+D,o-11.4-(R===2?2.6:R%2?.6:0)),R<4&&e.lineTo(z+y/4+D,o-9.6)}e.lineTo(y+D,o-3.6),e.closePath(),L(e,X,1.2)}else b==="bowl"?(e.beginPath(),e.moveTo(-10+D,o+3.4),e.bezierCurveTo(-11.6+D,o-14,11.6+D,o-14,10+D,o+3.4),e.lineTo(8.6+D,o-1.4),e.quadraticCurveTo(D,o-4.4,-8.6+D,o-1.4),e.closePath(),L(e,X,1.3)):b==="slick"?(ke(),L(e,X,1.4),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=1.4,e.lineCap="round",e.beginPath(),e.moveTo(-6+D,o-7.4),e.quadraticCurveTo(D,o-11,6+D,o-6.6),e.stroke()):b==="cornrows"?(ke(),L(e,X,1.4),e.strokeStyle=j(A,.38),e.lineWidth=.8,e.lineCap="round",[-6,-3.6,-1.2,1.2,3.6,6].forEach(y=>{e.beginPath(),e.moveTo(y*1.15+D,o-3.6+Math.abs(y)*.22),e.quadraticCurveTo(y*.9+D,o-8,y*.35+D,o-11),e.stroke()})):b==="afro"?(e.beginPath(),e.moveTo(-9+D,o-1),e.bezierCurveTo(-10+D,o-13,10+D,o-13,9+D,o-1),e.quadraticCurveTo(0+D,o-5.4,-9+D,o-1),e.closePath(),L(e,X,1.3)):(ke(),L(e,X,1.4));if(b!=="buzz"){e.save(),e.strokeStyle=j(A,-.34),e.globalAlpha=.75,e.lineWidth=.6,e.lineCap="round";let y=z=>z<0?-1:1,R=(z,se)=>(z/9)**2+((se-(o-3))/8)**2<1&&se<o-1;if(ne==="curly"||ne==="coily"){let z=ne==="coily"?.85:1.35,se=ne==="coily"?2.3:3.1;for(let I=o-10;I<o-1.6;I+=se*.86)for(let Ce=-8+(Math.round(I)&1?se/2:0);Ce<8.4;Ce+=se)R(Ce,I)&&(e.beginPath(),e.arc(Ce+D,I,z,0,Math.PI*1.75),e.stroke())}else if(ne==="braided")for(let z=0;z<5;z++)e.beginPath(),e.moveTo(-4.6+D,o-10.4+z*1.9),e.lineTo(D,o-8.4+z*1.9),e.lineTo(4.6+D,o-10.4+z*1.9),e.stroke();else if(ne==="silky")e.globalAlpha=.9,e.strokeStyle="rgba(255,255,255,.62)",e.lineWidth=1.7,[[-6,-2.2],[1.2,3.6]].forEach(([z,se])=>{e.beginPath(),e.moveTo(z+D,o-6.6),e.quadraticCurveTo((z+se)/2+D,o-10,se+D,o-6.2),e.stroke()});else if(ne==="wavy"){let z=(se,I)=>{e.beginPath(),e.moveTo(se*.4+D,o-10+Math.abs(se)*.2),e.quadraticCurveTo(se*1.1+1.8*I+D,o-8,se*1.2+D,o-6),e.quadraticCurveTo(se*1.2-1.8*I+D,o-4,se*1.45+D,o-1.6),e.stroke()};(d?[-6,-3,0,3,6]:[-6,-3.4,3.4,6]).forEach((se,I)=>z(se,I&1?1:-1))}else d?[-6,-3.2,0,3.2,6].forEach(z=>{e.beginPath(),e.moveTo(z*.25,o-7.6),e.quadraticCurveTo(z*1,o-3,z*1.3,o+5.6),e.stroke()}):l?[0,1,2,3].forEach(z=>{e.beginPath(),e.moveTo(D+h*(2.8-z*1.8),o-9.6+z*.5),e.quadraticCurveTo(D-h*(1.2+z*1.6),o-6.2+z,D-h*(7.6+z*.2),o-.6+z*1.6),e.stroke()}):[-6,-3.4,3.4,6].forEach(z=>{e.beginPath(),e.moveTo(z*.4,o-10+Math.abs(z)*.2),e.quadraticCurveTo(z*1.15,o-7.2,z*1.4+y(z)*.9,o-1.6+Math.abs(z)*.15),e.stroke()});if(ne==="frizzy"){e.strokeStyle=j(A,-.15),e.lineWidth=.7;for(let z=0;z<12;z++){let se=Math.PI*(1.06+.88*z/11),I=9,Ce=10.6+z%3*.7,pe=l?h*.6:0;e.beginPath(),e.moveTo(pe+Math.cos(se)*I,o+Math.sin(se)*(I-.6)),e.quadraticCurveTo(pe+Math.cos(se+.1)*(Ce+.8),o+Math.sin(se+.1)*(Ce-.4),pe+Math.cos(se+.22*(z%2?1:-1))*Ce,o+Math.sin(se)*(Ce+.4)),e.stroke()}}e.restore()}!d&&i.hair2&&V==="stripes"&&(e.save(),e.strokeStyle=i.hair2,e.lineWidth=1.5,e.lineCap="round",[-5,-1.6,2,5.2].forEach(y=>{e.beginPath(),e.moveTo(y*.4+D,o-10.4),e.quadraticCurveTo(y*1.15+D,o-7.4,y*1.35+D,o-2.6),e.stroke()}),e.restore()),!d&&i.hair2&&V==="frontpiece"&&(e.beginPath(),e.moveTo(-1.5+D,o-10),e.quadraticCurveTo(-8+D,o-7,-9.2+D,o+3.4),e.quadraticCurveTo(-4.6+D,o-3,-1.5+D,o-10),e.closePath(),L(e,i.hair2,1)),d&&i.hair2&&(V==="underlayer"||V==="stripes"||V==="frontpiece")&&(e.save(),e.strokeStyle=i.hair2,e.lineWidth=1.4,e.lineCap="round",[-4,0,4].forEach(y=>{e.beginPath(),e.moveTo(y*.3,o-8),e.quadraticCurveTo(y*1.1,o-3,y*1.3,o+5),e.stroke()}),e.restore()),!d&&i.hair2&&V==="streak"&&(e.strokeStyle=i.hair2,e.lineWidth=1.3,e.lineCap="round",e.beginPath(),e.moveTo(-5+D,o-6.2),e.quadraticCurveTo(-3+D,o-8.6,0+D,o-9),e.moveTo(1+D,o-9),e.quadraticCurveTo(4+D,o-8,6+D,o-5.4),e.stroke()),d||(e.fillStyle="rgba(255,255,255,.22)",e.beginPath(),e.ellipse(-3+D,o-6.4,3.4,1.5,-.3,0,7),e.fill()),(b==="long"||b==="wavy"||b==="locs"||b==="halfup")&&!d&&!l&&[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*8.2,o-1),e.quadraticCurveTo(y*10.6,o+4,y*9.6,o+11),e.quadraticCurveTo(y*8.8,o+12,y*8.2,o+10.2),e.quadraticCurveTo(y*8.6,o+4,y*8.2,o-1),e.closePath(),L(e,X,1)}),l&&!d&&(e.beginPath(),e.ellipse(-h*1.2+h*.6,o+2.2,1.5,2.2,0,0,7),L(e,i.skin,1),e.fillStyle="rgba(160,90,80,.25)",e.beginPath(),e.ellipse(-h*1.2+h*.6,o+2.4,.6,1.1,0,0,7),e.fill(),i.glasses&&(e.strokeStyle=i.glassColor||"#5b4048",e.lineWidth=.9,e.beginPath(),e.moveTo(h*1.1,o-.6),e.lineTo(-h*.6,o+.9),e.stroke()));let ot=["buzz","bald","mohawk","afro","curly","balding","fade","bantuknots","flattop","pompadour","quiff","bowl","hime","undercut","sidecut","receding","bun","topknot","twinbuns"].includes(b);if(!d&&i.fringe&&i.fringe!=="none"&&!l&&!ot){let y=i.fringe;y==="straight"?(e.beginPath(),e.moveTo(-9+D,o-5.6),e.quadraticCurveTo(D,o-10.8,9+D,o-5.6),e.lineTo(8.6+D,o-1.6),e.quadraticCurveTo(D,o-3,-8.6+D,o-1.6),e.closePath(),L(e,X,1.1)):y==="side"?(e.beginPath(),e.moveTo(-9+D,o-6),e.quadraticCurveTo(2+D,o-12,9.4+D,o-1.4),e.quadraticCurveTo(-1+D,o-3.6,-9+D,o-6),e.closePath(),L(e,X,1.1)):y==="curtain"?[-1,1].forEach(R=>{e.beginPath(),e.moveTo(D,o-9.8),e.quadraticCurveTo(R*8+D,o-8.4,R*8.8+D,o-.6),e.quadraticCurveTo(R*4.6+D,o-3.4,D,o-9.8),e.closePath(),L(e,X,1)}):y==="wispy"&&[-6,-3.6,-1.2,1.2,3.6,6].forEach((R,z)=>{e.beginPath(),e.moveTo(R-1.2+D,o-5.4),e.lineTo(R+(z%2?.5:-.5)+D,o-.2+z%3*.5),e.lineTo(R+1.2+D,o-5.4),e.closePath(),L(e,X,.8)})}if(!d&&i.part&&i.part!=="none"&&!ot&&b!=="mohawk"){let y=i.part==="left"?-2.6:i.part==="right"?2.6:0;e.strokeStyle=j(A,.42),e.lineWidth=.6,e.lineCap="round",e.beginPath(),e.moveTo(y+D,o-9.8),e.quadraticCurveTo(y*1.3+D,o-6.8,y*1.6+D,o-3.8),e.stroke()}d||Ke.forEach(y=>y()),i.clip&&!d&&(e.save(),e.translate(l?-h*1.4+D:6.4,o-6.2),e.rotate(l?0:-.5),[0,1].forEach(y=>{We(e,-2+y*1.2,-.7+y*1.8,4.4,1.5,.7),L(e,i.clip,.8)}),e.restore());let De=i.hatColor||"#e07a66",rt=i.hat;if(i.earrings&&!d&&(l?[-h*.6]:[-9,9]).forEach(y=>{let R=i.earStyle||"stud";R==="hoop"?(e.beginPath(),e.arc(y,o+6.2,2.1,0,7),e.strokeStyle=Ct,e.lineWidth=2.2,e.stroke(),e.strokeStyle=i.earrings,e.lineWidth=1.1,e.stroke()):R==="dangle"?(ze(e,y,o+4.4,y,o+7.4,.7,i.earrings),e.beginPath(),e.arc(y,o+8.2,1.3,0,7),L(e,i.earrings,.8),e.beginPath(),e.arc(y,o+4.4,.7,0,7),L(e,i.earrings,.6)):R==="pearl"?(e.beginPath(),e.arc(y,o+4.8,1.5,0,7),L(e,"#fff6ea",.8),e.fillStyle="rgba(255,255,255,.8)",e.beginPath(),e.arc(y-.4,o+4.3,.4,0,7),e.fill()):R==="cuff"?(e.beginPath(),e.arc(y,o+2.2,1.1,0,7),L(e,i.earrings,.7),e.beginPath(),e.arc(y,o+4.6,1.2,0,7),L(e,i.earrings,.8)):(e.beginPath(),e.arc(y,o+4.6,1.2,0,7),L(e,i.earrings,.8))}),rt==="cap")e.beginPath(),e.moveTo(-9.4+D,o-2.8),e.bezierCurveTo(-9.8+D,o-15,9.8+D,o-15,9.4+D,o-2.8),e.closePath(),L(e,De,1.3),d||(e.beginPath(),l?e.ellipse(h*9.2+D,o-3,5.2,1.7,0,0,7):e.ellipse(0,o-2.6,7.4,2,0,0,7),L(e,j(De,.18),1.1)),e.beginPath(),e.arc(0,o-12.2,1,0,7),L(e,j(De,.2),.8);else if(rt==="beanie")e.beginPath(),e.moveTo(-9.8+D,o-2.4),e.bezierCurveTo(-10.4+D,o-17,10.4+D,o-17,9.8+D,o-2.4),e.closePath(),L(e,De,1.3),We(e,-10+D,o-4.6,20,3.8,1.6),L(e,j(De,-.25),1.1),e.beginPath(),e.arc(D,o-14,2.3,0,7),L(e,j(De,-.35),1);else if(rt==="bucket")e.beginPath(),e.moveTo(-8+D,o-4),e.lineTo(-7+D,o-11.4),e.lineTo(7+D,o-11.4),e.lineTo(8+D,o-4),e.closePath(),L(e,De,1.3),e.beginPath(),e.ellipse(D,o-4.4,12.2,2.8,0,0,7),L(e,j(De,.1),1.2);else if(rt==="beret")e.beginPath(),e.ellipse(2+D,o-8.6,9,3.6,-.12,0,7),L(e,De,1.3),e.beginPath(),e.arc(3+D,o-12.2,1,0,7),L(e,j(De,.25),.8);else if(rt==="crown")e.beginPath(),e.moveTo(-6+D,o-8),e.lineTo(-6.6+D,o-14),e.lineTo(-3+D,o-11),e.lineTo(0+D,o-15.4),e.lineTo(3+D,o-11),e.lineTo(6.6+D,o-14),e.lineTo(6+D,o-8),e.closePath(),L(e,i.hatColor||"#EAB94E",1.2),[-3,0,3].forEach(y=>{e.beginPath(),e.arc(y+D,o-9.4,.7,0,7),e.fillStyle="#e07a66",e.fill()});else if(rt==="catears")[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*2.6+D,o-8.4),e.lineTo(y*6.2+D,o-15.6),e.lineTo(y*9+D,o-6.2),e.closePath(),L(e,A,1.2),e.beginPath(),e.moveTo(y*4.2+D,o-8.8),e.lineTo(y*6.2+D,o-12.8),e.lineTo(y*7.6+D,o-7.6),e.closePath(),e.fillStyle="#f0a6b5",e.fill()});else if(rt==="headphones")e.strokeStyle=Ct,e.lineWidth=3.6,e.beginPath(),e.arc(D,o-.5,10.4,Math.PI*1.06,Math.PI*1.94),e.stroke(),e.strokeStyle=De,e.lineWidth=2,e.stroke(),d||(l?[h*9.2]:[-9.8,9.8]).forEach(y=>{We(e,y-1.7,o-3,3.4,6.2,1.4),L(e,De,1.1)});else if(rt==="bandana")e.beginPath(),e.moveTo(-9.4+D,o-1.2),e.bezierCurveTo(-10+D,o-14,10+D,o-14,9.4+D,o-1.2),e.quadraticCurveTo(D,o-5,-9.4+D,o-1.2),e.closePath(),L(e,De,1.2),e.fillStyle="rgba(255,255,255,.55)",[[-5,-6.6],[-1.6,-8.4],[2.4,-7.6],[5.6,-5.6],[0,-5.6]].forEach(([y,R])=>{e.beginPath(),e.arc(y+D,o+R,.55,0,7),e.fill()}),[-1,1].forEach(y=>{e.beginPath(),e.moveTo((l?-h*9.2:9.2)+D,o-1),e.lineTo((l?-h*9.2:9.2)+D+y*3*(l?-h:1),o+2.6+y),e.lineTo((l?-h*9.2:9.2)+D+y*.6,o+1.6),e.closePath(),L(e,De,.9)});else if(rt==="visor")e.strokeStyle=Ct,e.lineWidth=3.4,e.beginPath(),e.moveTo(-9.2+D,o-2.6),e.quadraticCurveTo(D,o-12.4,9.2+D,o-2.6),e.stroke(),e.strokeStyle=De,e.lineWidth=2,e.stroke(),d||(e.beginPath(),l?e.ellipse(h*9.2+D,o-3.2,5.4,1.7,0,0,7):e.ellipse(D,o-3,7.8,2,0,0,7),L(e,j(De,.18),1.1));else if(rt==="sunhat")e.beginPath(),e.ellipse(D,o-4.2,14,3.8,0,0,7),L(e,j(De,.12),1.3),e.beginPath(),e.moveTo(-7.6+D,o-4.6),e.bezierCurveTo(-7.8+D,o-15,7.8+D,o-15,7.6+D,o-4.6),e.closePath(),L(e,De,1.3),We(e,-7.6+D,o-8,15.2,2.2,1),L(e,j(De,-.3),.9);else if(rt==="headband"&&!d)e.strokeStyle=Ct,e.lineWidth=3.4,e.beginPath(),e.moveTo(-9+D,o-1.2),e.quadraticCurveTo(D,o-12,9+D,o-1.2),e.stroke(),e.strokeStyle=De,e.lineWidth=2,e.stroke();else if(rt==="headband")e.strokeStyle=De,e.lineWidth=2,e.beginPath(),e.moveTo(-9,o-1.2),e.quadraticCurveTo(0,o-12,9,o-1.2),e.stroke();else if(rt==="bow"){let y=l?-h*1.5:6.6,R=o-9.6;[-1,1].forEach(z=>{e.beginPath(),e.moveTo(y,R),e.lineTo(y+z*5.4,R-2.8),e.lineTo(y+z*5.4,R+2.8),e.closePath(),L(e,De,1.1)}),e.beginPath(),e.arc(y,R,1.5,0,7),L(e,j(De,.2),1)}else if(rt==="flower"){let y=l?-h*2:-6,R=o-8.4;for(let z=0;z<5;z++){let se=z*Math.PI*2/5;e.beginPath(),e.arc(y+Math.cos(se)*2.3,R+Math.sin(se)*2.3,1.8,0,7),L(e,De,.9)}e.beginPath(),e.arc(y,R,1.3,0,7),L(e,"#EAB94E",.8)}if(_e){let y=l?-h*1.6:0;if(_e==="halo")e.beginPath(),e.ellipse(y,o-13.4,6.4,2,0,0,7),e.strokeStyle=Ct,e.lineWidth=2.8,e.stroke(),e.strokeStyle=$e,e.lineWidth=1.5,e.stroke();else if(_e==="horns")[-1,1].forEach(R=>{e.beginPath(),e.moveTo(y+R*3.2,o-8.6),e.quadraticCurveTo(y+R*6.6,o-11.4,y+R*5.4,o-15.6),e.quadraticCurveTo(y+R*8.2,o-12.6,y+R*8.2,o-7.4),e.closePath(),L(e,$e,1.1)});else if(_e==="bunny")[-1,1].forEach(R=>{e.beginPath(),e.ellipse(y+R*4.4,o-16,2.1,6.2,R*.22,0,7),L(e,"#fffaf2",1.1),e.beginPath(),e.ellipse(y+R*4.5,o-15.6,1,4.4,R*.22,0,7),e.fillStyle="#f0a6b5",e.fill()});else if(_e==="antlers")[-1,1].forEach(R=>{e.strokeStyle=Ct,e.lineWidth=2.6,e.lineCap="round",e.beginPath(),e.moveTo(y+R*4,o-9),e.lineTo(y+R*6.6,o-15),e.moveTo(y+R*5.6,o-12.6),e.lineTo(y+R*8.6,o-13.6),e.moveTo(y+R*6.6,o-15),e.lineTo(y+R*5.6,o-18),e.stroke(),e.strokeStyle="#9a653d",e.lineWidth=1.2,e.stroke()});else if(_e==="unicorn"){e.beginPath(),e.moveTo(y-1.8,o-9.2),e.lineTo(y,o-18),e.lineTo(y+1.8,o-9.2),e.closePath(),L(e,$e,1),e.strokeStyle="rgba(255,255,255,.7)",e.lineWidth=.6;for(let R of[-11.4,-13.4,-15.4])e.beginPath(),e.moveTo(y-1.5+(R+11.4)*-.1,o+R),e.lineTo(y+1.5+(R+11.4)*.1,o+R-.8),e.stroke()}else if(_e==="antennae")[-1,1].forEach(R=>{e.strokeStyle=Ct,e.lineWidth=1.8,e.beginPath(),e.moveTo(y+R*2.6,o-9),e.quadraticCurveTo(y+R*5,o-14,y+R*6.6,o-15.4),e.stroke(),e.strokeStyle="#313a3f",e.lineWidth=.8,e.stroke(),e.beginPath(),e.arc(y+R*6.8,o-15.8,1.5,0,7),L(e,$e,.9)});else if(_e==="tiara")e.beginPath(),e.moveTo(y-6,o-6),e.lineTo(y-5.4,o-9.6),e.lineTo(y-2.6,o-8),e.lineTo(y,o-11.4),e.lineTo(y+2.6,o-8),e.lineTo(y+5.4,o-9.6),e.lineTo(y+6,o-6),e.quadraticCurveTo(y,o-8,y-6,o-6),e.closePath(),L(e,"#d9d4cc",1),[[0,-9.4],[-3.6,-7.6],[3.6,-7.6]].forEach(([R,z],se)=>{e.beginPath(),e.arc(y+R,o+z,.7,0,7),L(e,se?"#8fc9e8":$e,.4)});else if(_e==="flowercrown")for(let R=0;R<7;R++){let z=Math.PI*(1.12+.76*R/6),se=y+Math.cos(z)*8.2,I=o-1+Math.sin(z)*7.6;e.beginPath(),e.arc(se,I,1.8,0,7),L(e,R%3===0?$e:R%3===1?"#f28f7e":"#fff6ea",.8),e.beginPath(),e.arc(se,I,.6,0,7),e.fillStyle="#eab94e",e.fill()}else _e==="sparkles"&&[[-9,-8,1.8],[9.4,-5,1.4],[6,-13,1.2]].forEach(([R,z,se])=>As(e,y+R,o+z,se*1.5,$e))}if(e.restore(),i.tag){let y=o-19-Iu+Math.sin(s*4)*1.5;e.beginPath(),e.moveTo(-5,y-5),e.lineTo(5,y-5),e.lineTo(0,y+1),e.closePath(),L(e,"#f28f7e",1.3)}e.restore()}var j0=-43.4;function Xe(e,t,n){e.strokeStyle=t,e.lineWidth=n,e.lineCap="round",e.lineJoin="round",e.stroke()}function Cs(e,t,n,i,s,r,a,c=1.7){e.lineCap="round",e.beginPath(),e.moveTo(t,n),e.lineTo(i,s),e.strokeStyle=Ct,e.lineWidth=r+c,e.stroke(),e.strokeStyle=a,e.lineWidth=r,e.stroke()}function Q0(e,t,n,i){e.beginPath(),i==="side"?(e.moveTo(t-3.9,n+.6),e.bezierCurveTo(t-4.3,n-3.8,t-1.8,n-4.9,t+.4,n-4.9),e.bezierCurveTo(t+2.6,n-4.9,t+3.8,n-3.4,t+3.9,n-1),e.lineTo(t+4,n+.4),e.lineTo(t+5,n+2),e.lineTo(t+3.8,n+2.5),e.lineTo(t+3.9,n+3.3),e.quadraticCurveTo(t+3.5,n+4.1,t+2.8,n+4.5),e.quadraticCurveTo(t+1.2,n+5.2,t-.8,n+4.6),e.bezierCurveTo(t-2.6,n+4,t-3.9,n+2.6,t-3.9,n+.6)):(e.moveTo(t-4.2,n-.6),e.bezierCurveTo(t-4.3,n-3.9,t-2.4,n-4.9,t,n-4.9),e.bezierCurveTo(t+2.4,n-4.9,t+4.3,n-3.9,t+4.2,n-.6),e.bezierCurveTo(t+4.1,n+2.2,t+3,n+4,t+1.5,n+4.7),e.quadraticCurveTo(t,n+5.2,t-1.5,n+4.7),e.bezierCurveTo(t-3,n+4,t-4.1,n+2.2,t-4.2,n-.6)),e.closePath()}var Nu={smile:{brow:[-.25,.1],mouth:"smile2",eyes:"open",blush:.12},joy:{brow:[-.9,-.5],mouth:"grin",eyes:"happy",blush:.3},frown:{brow:[-.6,.5],mouth:"frown",eyes:"open",droop:.5},upset:{brow:[-1.1,.7],mouth:"wobble",eyes:"wet",tear:!0,droop:1.1},frustrated:{brow:[1,-.7],mouth:"grit",eyes:"narrow",flush:!0,sweat:!0,vein:!0},surprised:{brow:[-1.2,-1.2],mouth:"o",eyes:"wide"},thinking:{brow:[-.5,.2],mouth:"smirk",eyes:"up",oneBrow:!0},stern:{brow:[.45,-.15],mouth:"flat",eyes:"open"}};function e_(e,t,n,i,s,r){let a=t.skin,c=j(a,.3),l=t.mouth||0,h=Nu[t.emote]||null,d=(r*.9+t.id*1.7)%4<.13&&!(h&&(h.eyes==="happy"||h.eyes==="wide")),p=t.lip||j(a,.38);if((s?[2.2]:[-1.9,1.9]).forEach((E,N)=>{let M=n+E,T=i+.3,w=h&&h.eyes==="happy"?"happy":t.eyeShape||"round",P=h?h.eyes:"open";if(d||w==="happy")e.beginPath(),w==="happy"&&!d?e.arc(M,T+.3,1,Math.PI*1.1,Math.PI*1.9):(e.moveTo(M-1,T),e.lineTo(M+1,T)),Xe(e,"#3a2a30",.55);else{let A=P==="wide"?.95:P==="narrow"?.38:P==="wet"?.78:.66;if(e.fillStyle="#fffaf2",e.beginPath(),e.ellipse(M,T,s?.8:1,A,0,0,7),e.fill(),Xe(e,j(a,.45),.3),e.fillStyle=t.eyeColor||"#3a2a30",e.beginPath(),e.arc(M+(s?.25:0)+(P==="up"?.25:0)+(t.lookX||0),T+.02+(P==="up"?-.2:0)+(P==="narrow"?.12:0)+(t.lookY||0),P==="wide"?.42:.5,0,7),e.fill(),P==="wet"&&(e.fillStyle="rgba(190,225,255,.9)",e.beginPath(),e.ellipse(M+.1,T+.28,.55,.22,0,0,7),e.fill()),e.fillStyle="#fff",e.beginPath(),e.arc(M+(s?.05:-.15),T-.22,.17,0,7),e.fill(),w==="sleepy"&&(e.fillStyle=a,e.beginPath(),e.ellipse(M,T-.35,1.05,.42,0,Math.PI,2*Math.PI),e.fill()),e.beginPath(),e.moveTo(M-(s?.8:1.05),T-.35),e.quadraticCurveTo(M,T-.95,M+(s?.9:1.05),T-.35),Xe(e,"#2a1d22",.45),w==="lash"){let b=s||N?1:-1;e.beginPath(),e.moveTo(M+b*.9,T-.4),e.lineTo(M+b*1.7,T-1),Xe(e,"#2a1d22",.4)}}let o=t.brow||"soft";if(o!=="none"){let A=o==="thick"?.85:o==="thin"?.32:.55,b=s?1:E<0?-1:1,k=h?h.brow[0]:0,V=h?h.brow[1]:.25,$=h&&h.oneBrow&&N===1?-.9:0,F=T-1.9+$,q=s?M-1.2:M-b*1.2,te=s?M+1.2:M+b*1.3;e.beginPath(),e.moveTo(q,F+k*.75+(h?0:.2)),e.quadraticCurveTo((q+te)/2,F-.55+(k+V)*.3+(o==="arch"?-.3:0),te,F+V*.75),Xe(e,t.browColor||t.hair,A)}if(t.glasses&&t.glasses!=="none"){let A=t.glasses===!0?"round":t.glasses,b=t.glassColor||"#3b2f33";if(e.beginPath(),A==="square")e.roundRect(M-1.6,T-1.25,3.2,2.6,.6);else if(A==="cat"){e.ellipse(M,T+.05,1.6,1.3,0,0,7);let k=s?1:E<0?-1:1;e.moveTo(M+k*1.4,T-.7),e.lineTo(M+k*2.1,T-1.6)}else A==="half"?e.arc(M,T,1.6,Math.PI,0):e.arc(M,T+.05,1.5,0,7);A==="sun"&&(e.fillStyle="rgba(40,30,40,.82)",e.fill()),Xe(e,b,.5)}}),t.glasses&&t.glasses!=="none"){let E=t.glassColor||"#3b2f33";e.beginPath(),s?(e.moveTo(n+.6,i+.1),e.lineTo(n-3.6,i+.7)):(e.moveTo(n-.5,i+.15),e.lineTo(n+.5,i+.15)),Xe(e,E,.45)}s||(e.beginPath(),e.moveTo(n+.2,i+.9),e.lineTo(n+.5,i+2.2),e.arc(n,i+2.35,.65,.05*Math.PI,.85*Math.PI),Xe(e,c,.38)),t.freckles&&(e.fillStyle=c,(s?[[3,1.6],[2.3,2.3]]:[[-2.6,1.7],[-1.9,2.4],[2.6,1.7],[1.9,2.4]]).forEach(([E,N])=>{e.beginPath(),e.arc(n+E,i+N,.22,0,7),e.fill()})),t.shadow&&(e.fillStyle=t.shadow,e.globalAlpha=.5,(s?[2.2]:[-1.9,1.9]).forEach(E=>{e.beginPath(),e.ellipse(n+E,i-.55,s?.95:1.3,.55,0,0,7),e.fill()}),e.globalAlpha=1),t.liner&&(e.beginPath(),(s?[[2.2,1]]:[[-1.9,-1],[1.9,1]]).forEach(([E,N])=>{e.moveTo(n+E+N*.85,i+.05),e.lineTo(n+E+N*1.9,i-.6)}),Xe(e,"#1a1210",.4)),t.blush===!0&&(e.fillStyle=t.blushColor||"rgba(255,110,125,.16)",(s?[2.6]:[-2.8,2.8]).forEach(E=>{e.beginPath(),e.ellipse(n+E,i+2.1,1,.6,0,0,7),e.fill()}));let g=n+(s?2.6:0),_=i+3.4,x=t.mouthStyle||"smile",u=s?1.1:1.5,m=h?h.mouth:null;if(l&&m!=="grit")e.fillStyle="#7A3B3B",e.beginPath(),e.ellipse(g,_+.1,u*.62,.3+l*.9,0,0,7),e.fill(),e.beginPath(),e.ellipse(g,_+.1,u*.62,.3+l*.9,0,0,7),Xe(e,p,.35);else if(m==="frown")e.beginPath(),e.moveTo(g-u,_+.65),e.quadraticCurveTo(g,_-.75,g+u,_+.65),Xe(e,p,.55);else if(m==="wobble")e.beginPath(),e.moveTo(g-u,_+.7),e.quadraticCurveTo(g-u*.5,_-.3,g-.1,_+.45),e.quadraticCurveTo(g+u*.5,_-.5,g+u,_+.7),Xe(e,p,.5);else if(m==="grit"){We(e,g-u*.95,_-.35,u*1.9,1.15,.4),e.fillStyle="#fffaf2",e.fill(),Xe(e,p,.45),e.beginPath();for(let E=-2;E<=2;E++)e.moveTo(g+E*u*.38,_-.3),e.lineTo(g+E*u*.38,_+.75);Xe(e,j(p,.2),.22)}else m==="o"?(e.fillStyle="#7A3B3B",e.beginPath(),e.ellipse(g,_+.35,.75,1,0,0,7),e.fill(),e.beginPath(),e.ellipse(g,_+.35,.75,1,0,0,7),Xe(e,p,.4)):m==="smile2"?(e.beginPath(),e.moveTo(g-u*1.15,_-.25),e.quadraticCurveTo(g,_+1.4,g+u*1.15,_-.25),Xe(e,p,.55),e.beginPath(),e.moveTo(g-u*1.15,_-.25),e.lineTo(g-u*1.3,_-.55),e.moveTo(g+u*1.15,_-.25),e.lineTo(g+u*1.3,_-.55),Xe(e,j(a,.2),.3)):x==="grin"||m==="grin"?(e.beginPath(),e.moveTo(g-u*(m?1.2:1),_-.2),e.quadraticCurveTo(g,_+2.1,g+u*(m?1.2:1),_-.2),e.closePath(),e.fillStyle="#fffaf2",e.fill(),Xe(e,p,.45)):x==="flat"||m==="flat"?(e.beginPath(),e.moveTo(g-u*.8,_),e.lineTo(g+u*.8,_),Xe(e,p,.5)):x==="smirk"||m==="smirk"?(e.beginPath(),e.moveTo(g-u*.8,_+.1),e.quadraticCurveTo(g+.2,_+.8,g+u,_-.5),Xe(e,p,.5)):(e.beginPath(),e.moveTo(g-u,_-.1),e.quadraticCurveTo(g,_+1,g+u,_-.1),Xe(e,p,.52),e.fillStyle=j(p,-.25),e.globalAlpha=.55,e.beginPath(),e.ellipse(g,_+.6,u*.5,.26,0,0,7),e.fill(),e.globalAlpha=1);if(h&&h.flush&&(e.fillStyle="rgba(235,70,60,.34)",(s?[2.6]:[-2.8,2.8]).forEach(E=>{e.beginPath(),e.ellipse(n+E,i+2.1,1.2,.8,0,0,7),e.fill()}),e.fillStyle="rgba(235,70,60,.18)",e.beginPath(),e.ellipse(n,i-3.2,3.2,1.2,0,0,7),e.fill()),h&&h.tear){let E=n+(s?2.4:-2.4),N=i+1.6+r*1.3%1*1.6;e.fillStyle="rgba(150,205,255,.95)",e.beginPath(),e.ellipse(E,N,.38,.62,0,0,7),e.fill(),Xe(e,"rgba(90,150,210,.8)",.2)}if(h&&h.sweat){let E=n+(s?3.4:3.7),N=i-3.4+Math.sin(r*5)*.15;e.fillStyle="rgba(160,210,255,.95)",e.beginPath(),e.moveTo(E,N-1),e.quadraticCurveTo(E+.8,N+.2,E,N+.8),e.quadraticCurveTo(E-.8,N+.2,E,N-1),e.fill(),Xe(e,"rgba(90,150,210,.8)",.2)}if(h&&h.vein){let E=n+(s?-1.6:-3.4),N=i-3.7,M=1+Math.sin(r*9)*.12;e.strokeStyle="#d9302a",e.lineWidth=.38,e.lineCap="round";for(let[T,w]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.beginPath(),e.arc(E+T*.55*M,N+w*.55*M,.5*M,T<0?w<0?0:-Math.PI/2:w<0?Math.PI/2:Math.PI,T<0?w<0?Math.PI/2:0:w<0?Math.PI:Math.PI*1.5),e.stroke()}e.beginPath(),e.moveTo(n+(s?3.1:2.9),i+1.9),e.quadraticCurveTo(n+(s?3.3:3.1),i+2.8,n+(s?3.1:2.8),i+3.6),Xe(e,j(a,.13),.3)}function Lu(e,t,n,i,s,r){if(t.style==="bald")return;let a=t.style||"crop",c=t.hair,l=j(c,-.22),h=s==="side",d=s==="back",p=(u=c)=>L(e,u,1),f=a==="long"||a==="wavy"||a==="braids",g=a==="bob";if(r==="back"){if(a==="afro"&&(e.beginPath(),e.ellipse(n-(h?1.2:0),i-1.4,6.9,6.5,0,0,7),p()),a==="curly"&&[[-5,-1],[5,-1],[-4,-4.8],[4,-4.8],[0,-5.8],[-5.4,2],[5.4,2]].forEach(([u,m])=>{e.beginPath(),e.arc(n+(h?u*.8-1:u),i+m,2.2,0,7),p()}),f||g){let u=f?8.4:4.4;e.beginPath(),h?(e.moveTo(n-1.2,i-5),e.bezierCurveTo(n-5.4,i-5.6,n-6.6,i+1,n-5.6,i+u*.6),e.quadraticCurveTo(n-5.2,i+u+.4,n-2.6,i+u),e.quadraticCurveTo(n-.4,i+u-2.2,n+.6,i+2),e.closePath(),p(),[-4.8,-3.2,-1.6].forEach(m=>{e.beginPath(),e.moveTo(n+m,i),e.quadraticCurveTo(n+m-.4,i+u*.5,n+m-.2,i+u-1.4),Xe(e,l,.3)})):(e.beginPath(),e.moveTo(n-4.9,i-3),e.bezierCurveTo(n-6.2,i+1,n-6.4,i+u*.5,n-5.8,i+u-1.4),e.quadraticCurveTo(n-5.2,i+u+.8,n-3.2,i+u),e.quadraticCurveTo(n,i+u-1.2,n+3.2,i+u),e.quadraticCurveTo(n+5.2,i+u+.8,n+5.8,i+u-1.4),e.bezierCurveTo(n+6.4,i+u*.5,n+6.2,i+1,n+4.9,i-3),e.closePath(),p(),[-4.4,-2.6,2.6,4.4].forEach(m=>{e.beginPath(),e.moveTo(n+m,i),e.quadraticCurveTo(n+m*1.06,i+u*.5,n+m*1.04,i+u-1.4),Xe(e,l,.3)}))}(a==="pony"||a==="topknot")&&(h?(e.beginPath(),e.ellipse(n-5.2,i+3.4,1.9,4.6,.3,0,7),p()):d&&(e.beginPath(),e.ellipse(n,i+4.6,1.9,5,0,0,7),p()));return}if(d){e.beginPath(),e.ellipse(n,i-.2,4.7,5.2,0,0,7),p(),a==="bun"&&(e.beginPath(),e.arc(n,i-5.6,2.5,0,7),p()),e.fillStyle="rgba(255,255,255,.16)",e.beginPath(),e.ellipse(n-1.4,i-3,1.8,1,-.3,0,7),e.fill();return}let _=a==="buzz",x=_?4.2:5.5;e.beginPath(),h?(e.moveTo(n-4.2,i+2.2),e.bezierCurveTo(n-5.2,i-5.2,n+3.6,i-6.2,n+4,i-1.8),e.lineTo(n+3.7,i-2),e.quadraticCurveTo(n+1.6,i-3.5,n-.6,i-2.4),e.lineTo(n-2.2,i+.2),e.lineTo(n-2.6,i+2.4)):(e.moveTo(n-4.5,i+1.2),e.bezierCurveTo(n-5.3,i-x-.3,n+5.3,i-x-.3,n+4.5,i+1.2),e.lineTo(n+4,i-.9),e.quadraticCurveTo(n+1.6,i-(_?3.7:3.4),n-.8,i-(_?3.4:3)),e.quadraticCurveTo(n-3.3,i-2.6,n-4,i-.9)),e.closePath(),p(),_&&(e.globalAlpha=.35,e.fillStyle=j(c,-.5),e.fill(),e.globalAlpha=1),a==="bun"&&(e.beginPath(),e.arc(n-(h?2.8:0),i-6.1,2.5,0,7),p(),e.beginPath(),e.arc(n-(h?2.8:0),i-6.1,1.2,0,7),Xe(e,l,.35)),(a==="afro"||a==="curly")&&[[-3.8,-3.6],[-1.4,-4.8],[1.4,-4.8],[3.8,-3.6]].forEach(([u,m])=>{e.beginPath(),e.arc(n+(h?u*.7-1:u),i+m,1.9,0,7),p()}),!_&&a!=="afro"&&(e.beginPath(),e.moveTo(n+(h?1.2:-2.1),i-4.6),e.quadraticCurveTo(n+(h?2.4:0),i-5.4,n+(h?3.2:1.4),i-3.5),Xe(e,j(c,.34),.5)),e.fillStyle="rgba(255,255,255,.16)",e.beginPath(),e.ellipse(n-1.4+(h?1:0),i-4.1,1.8,.8,-.25,0,7),e.fill(),f&&!h&&[-1,1].forEach(u=>{e.beginPath(),e.moveTo(n+u*4.2,i-1),e.quadraticCurveTo(n+u*5.6,i+3.4,n+u*5.2,i+7.4),e.lineTo(n+u*3.8,i+6),e.quadraticCurveTo(n+u*4.4,i+2.6,n+u*3.6,i),e.closePath(),p()}),!_&&a!=="afro"&&a!=="curly"&&(e.save(),e.globalAlpha=.7,(h?[0,1,2]:[-3,-1.6,1.6,3]).forEach(m=>{e.beginPath(),h?(e.moveTo(n+2.2-m*1.5,i-5),e.quadraticCurveTo(n-1-m,i-3.6+m*.4,n-3.4-m*.3,i+.2+m*.6)):(e.moveTo(n+m*.5,i-5.2+Math.abs(m)*.2),e.quadraticCurveTo(n+m*1.2,i-3.8,n+m*1.45+(m<0?-.4:.4),i-.6)),Xe(e,l,.28)}),e.restore()),t.hair2&&(e.beginPath(),e.moveTo(n-3.4,i-3.8),e.quadraticCurveTo(n-1,i-5.6,n+1.8,i-4.4),Xe(e,t.hair2,.9))}function t_(e,t,n,i,s){let r=t.beardColor||t.hair;e.beginPath(),s?(e.moveTo(n-1.4,i+.4),e.bezierCurveTo(n-1.6,i+3.4,n-.2,i+6.2,n+2.4,i+6.1),e.bezierCurveTo(n+4.3,i+5.8,n+4.7,i+3.8,n+4.1,i+2.4),e.lineTo(n+3.4,i+2.7),e.quadraticCurveTo(n+1.8,i+3.5,n+.4,i+1.9),e.closePath()):(e.moveTo(n-4.2,i-.5),e.bezierCurveTo(n-4.7,i+3.4,n-3.2,i+6.4,n,i+6.8),e.bezierCurveTo(n+3.2,i+6.4,n+4.7,i+3.4,n+4.2,i-.5),e.lineTo(n+3.4,i+.9),e.quadraticCurveTo(n+3,i+2.6,n+1.8,i+2.9),e.quadraticCurveTo(n,i+2.4,n-1.8,i+2.9),e.quadraticCurveTo(n-3,i+2.6,n-3.4,i+.9),e.closePath()),L(e,r,.9),e.fillStyle="rgba(255,255,255,.1)",e.beginPath(),e.ellipse(n-1.4,i+5,1.8,.7,-.2,0,7),e.fill(),e.fillStyle=j(t.skin,.08),e.beginPath(),e.ellipse(n+(s?2.7:0),i+3.5,s?1.1:1.9,.95,0,0,7),e.fill()}function n_(e,t,n,i,s){let r=t.beardColor||t.hair,a=n+(s?2.7:0);e.beginPath(),s?(e.moveTo(a-.6,i+2.6),e.quadraticCurveTo(a+1.2,i+2.4,a+1.6,i+3.1),e.quadraticCurveTo(a+.2,i+3.1,a-.6,i+2.9)):(e.moveTo(n,i+2.7),e.quadraticCurveTo(n-1.4,i+2.2,n-2.6,i+3.2),e.quadraticCurveTo(n-1.4,i+3.2,n,i+2.95),e.quadraticCurveTo(n+1.4,i+3.2,n+2.6,i+3.2),e.quadraticCurveTo(n+1.4,i+2.2,n,i+2.7)),e.closePath(),L(e,r,.5)}function i_(e,t,n,i,s){e.save(),e.translate(Math.round(t*2)/2,Math.round(n*2)/2),e.scale(.93,.93);let r=i.moving,a=r?Math.sin(i.walk):0,c=i.dir,l=c==="left"||c==="right",h=c==="left"?-1:1,d=c==="up",p=i.top==="buttonup"?"shirt":i.top||"shirt",f=i.bottom||"pants",g=i.bodyW??(i.build==="slim"?.92:i.build==="sturdy"?1.1:1),_=i.skin,x=i.acc,u=i.accent||"#c4463c",m=i.shirt||"#8fc9e8",E=i.shirt2||"#fff6ea",N=i.pants||"#4a3b3f",M=i.shoes||"#3b2f33",T=p==="dress",w=f==="skirt"||T,P=j0,o=r?-Math.abs(Math.cos(i.walk))*1.1:Math.sin(s*2+i.id)*.3;e.fillStyle="rgba(70,45,55,.24)",e.beginPath(),e.ellipse(0,1,9.4*g,3,0,0,7),e.fill(),i.sitting&&e.translate(0,6),e.translate(0,o);let A=-22.5,b=-36.4,k=-25.2;[-1,1].forEach(J=>{let ce=r?Math.max(0,J*a)*2.2:0,Me=l?0:J*2.5*g,Ke=l?J*a*5:J*2.6*g+(r?J*0:0),D=-2.4-ce;Cs(e,Me,A+1,Ke,D,w&&!i.tights?3.2:4.4*(f==="joggers"?1.05:1),w?i.tights||_:N,w?1.4:1.6),!w&&f!=="shorts"&&(e.beginPath(),e.moveTo(Me,A+4),e.lineTo(Ke*.98,D-3),Xe(e,j(N,.22),.3)),f==="shorts"&&Cs(e,Ke,D-5,Ke,D,3.2,_,1.4);let ke=Ke+(l?h*1.5:0),ot=D+1.4-ce*0;i.shoeStyle==="boot"?(We(e,ke-2.5,ot-4.4,5,5,1.4),L(e,M,1),e.beginPath(),e.ellipse(ke+(l?h*1.3:0),ot+.6,3.5,1.6,0,0,7),L(e,j(M,.25),1)):(e.beginPath(),e.ellipse(ke,ot,l?3.7:3,1.8,0,0,7),L(e,M,1),e.fillStyle="rgba(255,255,255,.22)",e.beginPath(),e.ellipse(ke-.6,ot-.7,1.5,.5,0,0,7),e.fill())}),e.beginPath(),e.moveTo(-1.9,-39.8),e.lineTo(-1.9,b+.6),e.lineTo(1.9,b+.6),e.lineTo(1.9,-39.8),e.closePath(),L(e,_,1),e.fillStyle="rgba(110,60,50,.22)",e.beginPath(),e.ellipse(0,-38.4,2,1,0,0,7),e.fill();let V=p==="tank"||p==="dress"?_:m,$=p==="tee"||p==="tank"||T&&!i.sleeves,F=p==="blazer"?E:null,q=J=>{let ce=i.arms&&(J>0?i.arms.R:i.arms.L),Me,Ke;return ce?(Me=l?h*Math.abs(ce[0])*1:ce[0]*1.15,Ke=Math.max(-47,b+1+(ce[1]+17)*1.4)):l?(Me=J*a*4.2*-1+h*.6,Ke=-25.2+(r?-Math.abs(a)*.8:0)):(Me=J*(8.6*g+.3)+(r?-J*a*.6:0),Ke=-25.6+(r?-J*a*1.4:0)),[Me,Ke]},te=J=>{let[ce,Me]=q(J),Ke=l?0:J*6.9*g,D=b+1.6,ke=Ke+(ce-Ke)*.52,ot=D+(Me-D)*.52+X(ce,Ke);$?(Cs(e,Ke,D,ke,ot,3.9,V,1.5),Cs(e,ke,ot,ce,Me,3,_,1.4)):(Cs(e,Ke,D,ce,Me,3.7,V,1.5),F&&Cs(e,ce-(ce-Ke)*.1,Me-(Me-D)*.1,ce,Me,3.8,F,1.3)),e.beginPath(),e.arc(ce,Me+.9,1.7,0,7),L(e,_,1),i.thumb&&J>0&&(e.beginPath(),e.ellipse(ce+.2,Me-1.1,.9,1.7,.12,0,7),L(e,_,1))},X=(J,ce)=>0;l&&te(-h);let ae=(l?4.5:7)*g,ie=(l?4.3:6.2)*g,ne=(l?3.9:T||w?4.8:5.4)*g,le=(l?4.4:6)*g,Ae=p==="blazer"||p==="cardigan"?-20.5:p==="labcoat"?-13.2:p==="track"?-21.6:p==="sweater"||p==="turtleneck"?-22.2:-22.6,_e=J=>{e.beginPath(),e.moveTo(-ae+1.6,b-.7),e.quadraticCurveTo(-ae,b-.7,-ae,b+1),e.lineTo(-ie,-31),e.lineTo(-ne,k),e.lineTo(-le-(p==="blazer"?.6:p==="labcoat"?1.6:0),J),e.lineTo(le+(p==="blazer"?.6:p==="labcoat"?1.6:0),J),e.lineTo(ne,k),e.lineTo(ie,-31),e.lineTo(ae,b+1),e.quadraticCurveTo(ae,b-.7,ae-1.6,b-.7),e.quadraticCurveTo(0,b-2.1,-ae+1.6,b-.7),e.closePath()};if(w&&!i.sitting){let J=T?-9.5:-12.5,ce=T?8.6:7.8;e.beginPath(),e.moveTo(-le,A-.8),e.lineTo(le,A-.8),e.lineTo(ce*g*(l?.6:1),J),e.quadraticCurveTo(0,J+1.3,-ce*g*(l?.6:1),J),e.closePath(),L(e,T?m:N,1),e.fillStyle="rgba(255,255,255,.14)",e.fillRect(-ce*g*.7,J-1.3,ce*1.4*g,.8)}let $e=p==="vest"||p==="cardigan"?E:m;if(_e(T?A-1:Ae),L(e,$e,1.1),!T&&!w&&!d&&p!=="blazer"&&p!=="sweater"&&!l&&(e.fillStyle=j(N,.1),e.fillRect(-le+.3,-24.2,(le-.3)*2,1.6),e.fillStyle="#c9b28a",e.fillRect(-.8,-24.1,1.6,1.4)),l||(e.fillStyle="rgba(255,255,255,.2)",e.beginPath(),e.ellipse(-2.6,-33,2,3.2,0,0,7),e.fill()),!d&&!l){if(p==="blazer")e.beginPath(),e.moveTo(-2.4,b-.6),e.lineTo(0,-28.5),e.lineTo(2.4,b-.6),e.closePath(),L(e,E,.8),[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*2.5,b-.7),e.lineTo(J*.2,-27.8),e.lineTo(J*1.4,-24.6),e.lineTo(J*5.6,-25.6),e.lineTo(J*6.2,-32),e.lineTo(J*4.4,b),e.closePath(),L(e,j(m,.12),.8)}),e.fillStyle="#c9b28a",[-24.6,-21.8].forEach(J=>{e.beginPath(),e.arc(0,J+2,.5,0,7),e.fill()}),We(e,2.4,-31.8,2.8,.7,.3),e.fillStyle=E,e.fill();else if(p==="sweater"){e.fillStyle=j(m,-.2),e.fillRect(-le,-24.2,le*2,2.4);for(let J=-le+1;J<le;J+=1.6)e.fillStyle="rgba(0,0,0,.08)",e.fillRect(J,-24.2,.35,2.4);e.beginPath(),e.moveTo(-3.2,b-.6),e.lineTo(0,-33.4),e.lineTo(3.2,b-.6),e.closePath(),L(e,E,.7),e.beginPath(),e.ellipse(0,b-.8,3.4,1.1,0,0,Math.PI),Xe(e,j(m,.3),.9)}else if(p==="vest")[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*2.3,b-.6),e.lineTo(J*.4,-22.4),e.lineTo(J*5.9,-22.4),e.lineTo(J*5.1,-30),e.lineTo(J*6.8,b+1),e.lineTo(J*4.8,b-.6),e.closePath(),L(e,m,.85)}),e.beginPath(),e.moveTo(-2.6,b-.6),e.lineTo(0,-35),e.lineTo(2.6,b-.6),e.lineTo(1.1,b+.6),e.lineTo(0,b+.2),e.lineTo(-1.1,b+.6),e.closePath(),L(e,"#fffaf2",.6),e.beginPath(),e.moveTo(0,-35.2),e.lineTo(.9,-32.4),e.lineTo(0,-27.6),e.lineTo(-.9,-32.4),e.closePath(),L(e,i.tie||"#a24a3c",.6);else if(p==="cardigan"){e.beginPath(),e.moveTo(-3.2,b-.6),e.lineTo(0,-31.5),e.lineTo(3.2,b-.6),e.closePath(),L(e,E,.6),[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*2.2,b-.6),e.lineTo(J*1,Ae),e.lineTo(J*(le+.3),Ae),e.lineTo(J*ne,k),e.lineTo(J*ie,-31),e.lineTo(J*ae,b+1),e.quadraticCurveTo(J*ae,b-.7,J*(ae-1.6),b-.7),e.closePath(),L(e,m,.9),e.fillStyle=j(m,-.18),e.fillRect(J>0?1:-1.8,Ae-1.8,.8,1.8)});for(let J of[-32,-28,-24.6])e.beginPath(),e.arc(1.1,J,.45,0,7),L(e,j(m,.3),.3)}else if(p==="labcoat"){e.beginPath(),e.moveTo(-2.6,b-.6),e.lineTo(0,-29),e.lineTo(2.6,b-.6),e.closePath(),L(e,E,.6),[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*2.6,b-.7),e.lineTo(J*.2,-27),e.lineTo(J*1.6,-24.4),e.lineTo(J*5.8,-26.6),e.lineTo(J*6.2,-33),e.lineTo(J*4.6,b),e.closePath(),L(e,j(m,.02),.8),We(e,J*3.4-1.9,-21.6,3.8,3.6,.6),Xe(e,j(m,.32),.55)}),e.beginPath(),e.moveTo(0,-27),e.lineTo(0,Ae),Xe(e,j(m,.28),.45);for(let J of[-25,-21.5,-18])e.beginPath(),e.arc(0,J,.5,0,7),L(e,j(m,.28),.3);We(e,-4.6,-30.6,1.6,3,.4),L(e,u||"#3b6ea8",.4)}else if(p==="turtleneck"){We(e,-2.7,b-2.5,5.4,3.2,1.3),L(e,j(m,.12),.8);for(let J=-1;J<=1;J+=1)e.beginPath(),e.moveTo(J*1.3,b-2.3),e.lineTo(J*1.3,b+.4),Xe(e,j(m,.3),.25)}else p==="track"?(e.beginPath(),e.moveTo(0,b-.8),e.lineTo(0,Ae),Xe(e,j(m,.35),.5),We(e,-2.6,b-2.2,5.2,2.2,1),L(e,j(m,.1),.7),[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*(ae-.4),b+1),e.lineTo(J*(ne-.2),Ae),Xe(e,u,.9)}),e.fillStyle=E,e.fillRect(-le,Ae-1.6,le*2,1.6),e.beginPath(),e.moveTo(-le,Ae-1.6),e.lineTo(le,Ae-1.6),Xe(e,j(m,.3),.4)):p==="tee"?(e.beginPath(),e.ellipse(0,b-.3,2.8,1.3,0,0,Math.PI),L(e,j(m,.16),.6)):p==="tank"?(e.beginPath(),e.ellipse(0,b,3.4,1.7,0,0,Math.PI),L(e,_,.7)):p==="dress"?(e.beginPath(),e.ellipse(0,b-.2,3.2,1.4,0,0,Math.PI),L(e,_,.7),e.fillStyle=j(m,.25),e.fillRect(-ne,k-.6,ne*2,1.2)):([-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*.3,b-.6),e.lineTo(J*3.2,b-.4),e.lineTo(J*1.4,-34),e.closePath(),L(e,j(m,-.15),.6)}),e.beginPath(),e.moveTo(0,-34.4),e.lineTo(0,-23),Xe(e,j(m,.25),.4),[-31,-28,-25].forEach(J=>{e.fillStyle=j(m,.35),e.beginPath(),e.arc(0,J,.3,0,7),e.fill()}));if(x==="tie"&&(p==="blazer"||p==="shirt"||p==="cardigan"||p==="labcoat")&&(e.beginPath(),e.moveTo(-.9,b-.5),e.lineTo(.9,b-.5),e.lineTo(.7,b+1.3),e.lineTo(-.7,b+1.3),e.closePath(),L(e,u,.5),e.beginPath(),e.moveTo(-.7,b+1.2),e.lineTo(.7,b+1.2),e.lineTo(1.2,-27.8),e.lineTo(0,-26.6),e.lineTo(-1.2,-27.8),e.closePath(),L(e,u,.6)),x==="bowtie"&&([-1,1].forEach(J=>{e.beginPath(),e.moveTo(0,b+.2),e.lineTo(J*2.8,b-.7),e.lineTo(J*2.8,b+1.1),e.closePath(),L(e,u,.5)}),e.beginPath(),e.arc(0,b+.2,.6,0,7),L(e,j(u,.2),.4)),x==="necklace"||x==="beads")if(e.beginPath(),e.moveTo(-3.4,b+.1),e.quadraticCurveTo(0,b+(x==="beads"?7:5),3.4,b+.1),Xe(e,x==="beads"?j(u,0):u,x==="beads"?1.1:.55),x==="beads")for(let J=0;J<=8;J++){let ce=J/8,Me=-3.4+6.8*ce,Ke=b+.1+2*3.5*ce*(1-ce)*2;e.beginPath(),e.arc(Me,Ke,.55,0,7),L(e,J%3===1?"#f2e8d8":i.beadColor||"#8a5cc0",.25)}else e.beginPath(),e.arc(0,b+2.7,.75,0,7),L(e,u,.4);x==="brooch"&&(e.beginPath(),e.arc(-3.6,-33,1,0,7),L(e,u,.5),e.beginPath(),e.arc(-3.6,-33,.35,0,7),e.fillStyle="#fff",e.fill()),x==="scarf"&&(e.beginPath(),e.ellipse(0,b-.2,4.4,1.9,0,0,7),L(e,u,.8),We(e,1.2,b,3,7.5,1.2),L(e,u,.8),e.fillStyle="rgba(255,255,255,.3)",e.fillRect(1.6,b+4,2.2,.7)),(i.lanyard!==!1||x==="lanyard")&&!T&&(!x||x==="lanyard")&&(e.beginPath(),e.moveTo(-1.9,b),e.lineTo(0,-29.4),e.lineTo(1.9,b),Xe(e,x==="lanyard"?u:i.lanyardColor||"#c4463c",.7),We(e,-1.4,-29.6,2.8,3.4,.5),L(e,"#fffaf2",.55),e.fillStyle="#4F91C7",e.fillRect(-1,-29.2,2,.7)),i.scarf&&(e.beginPath(),e.ellipse(0,b-.2,4.2,1.7,0,0,7),L(e,i.scarf,.9)),i.badge&&(e.beginPath(),e.arc(-3.4,-32.4,1.1,0,7),L(e,i.badge,.6))}else d&&(e.beginPath(),e.moveTo(-3,b-.5),e.quadraticCurveTo(0,b+.7,3,b-.5),Xe(e,j(m,.3),.5),p==="blazer"&&(e.beginPath(),e.moveTo(0,b+.8),e.lineTo(0,Ae),Xe(e,j(m,.3),.45)));!d&&i.packStyle==="messenger"&&(e.beginPath(),e.moveTo(l?-2:-5.6,b),e.lineTo(l?2.5:5.4,-24.6),Xe(e,i.pack||"#9a653d",1.3),We(e,l?1.4:3.2,-27.2,5.2,4.4,1),L(e,i.pack||"#9a653d",.9)),d&&i.packStyle&&i.packStyle!=="none"&&(We(e,-5,-34,10,9,2.2),L(e,i.pack||"#9a653d",1)),l?te(h):(te(-1),te(1));let st=l&&h<0;e.save(),(i.hx||i.hdy)&&e.translate(i.hx||0,i.hdy||0),i.tilt&&(e.translate(0,b),e.rotate(i.tilt),e.translate(0,-b)),st&&e.scale(-1,1);{let J=Nu[i.emote];J&&J.droop&&e.translate(0,J.droop*.5+Math.sin(s*1.5)*.12),i.emote==="frustrated"&&e.translate(0,-.2+Math.sin(s*14)*.18),i.emote==="joy"&&e.translate(0,-Math.abs(Math.sin(s*6))*.5)}let at=d?"back":l?"side":"front",G=l?.4:0;if(Lu(e,i,G,P,at,"back"),!d){let J=b-(p==="turtleneck"||x==="scarf"||i.scarf?2.8:.8);e.beginPath(),e.moveTo(-1.9,P+2),e.lineTo(-1.9,J),e.lineTo(1.9,J),e.lineTo(1.9,P+2),e.closePath(),e.fillStyle=_,e.fill(),e.fillStyle="rgba(110,60,50,.22)",e.beginPath(),e.ellipse(0,P+5.6,2,1,0,0,7),e.fill(),e.strokeStyle=Ct,e.lineWidth=.9,e.beginPath(),e.moveTo(-1.9,P+4.6),e.lineTo(-1.9,J),e.moveTo(1.9,P+4.6),e.lineTo(1.9,J),e.stroke()}if(l?(e.beginPath(),e.ellipse(G-.8,P+.9,1,1.6,0,0,7),L(e,_,.8)):[-1,1].forEach(J=>{e.beginPath(),e.ellipse(J*4.2,P+.8,.9,1.5,0,0,7),L(e,_,.8)}),Q0(e,G,P,d?"front":at),L(e,_,1.15),d||(e.fillStyle="rgba(120,70,60,.13)",e.beginPath(),e.ellipse(G+(l?-1:2.2),P+2.4,2.8,2.6,0,0,7),e.fill(),i.beard==="full"&&t_(e,i,G,P,l),e_(e,i,G,P,l,s),(i.beard==="mustache"||i.beard==="full")&&n_(e,i,G,P,l),i.lines&&(e.beginPath(),e.moveTo(G+(l?3:3.6),P+.3),e.lineTo(G+(l?3.4:4),P+.9),e.moveTo(G+(l?2.8:3.4),P+.8),e.lineTo(G+(l?3.3:3.9),P+1.5),l||(e.moveTo(G-3.6,P+.3),e.lineTo(G-4,P+.9),e.moveTo(G-3.4,P+.8),e.lineTo(G-3.9,P+1.5)),Xe(e,j(_,.22),.28))),Lu(e,i,G,P,at,"front"),i.teen&&!d){e.fillStyle="rgba(168,92,64,.75)";let J=l?[[G-2.2,P+2.2],[G-1,P+3]]:[[-3,P+2.3],[-2.1,P+3.1],[-3.4,P+3.3],[3,P+2.3],[2.1,P+3.1],[3.4,P+3.3]];for(let[ce,Me]of J)e.beginPath(),e.arc(ce,Me,.32,0,7),e.fill();l||(e.beginPath(),e.moveTo(-1.6,P+5.5),e.lineTo(1.6,P+5.5),e.strokeStyle="rgba(210,215,225,.95)",e.lineWidth=.5,e.stroke())}if(i.earrings&&!d){let J=l?[G-.8]:[4.2,-4.2];for(let ce of J)e.beginPath(),i.hoops?(e.arc(ce,P+4.1,1.7,0,7),Xe(e,i.earrings,.55)):(e.arc(ce,P+2.7,.55,0,7),L(e,i.earrings,.4))}let re=i.hat,ge=i.hatColor||"#e07a66";if(re&&re!=="none"&&(re==="cap"?(e.beginPath(),e.moveTo(G-4.6,P-1.6),e.bezierCurveTo(G-4.8,P-8.6,G+4.8,P-8.6,G+4.6,P-1.6),e.closePath(),L(e,ge,1),d||(e.beginPath(),e.ellipse(G+(l?4.4:0),P-1.6,l?2.7:4,1,0,0,7),L(e,j(ge,.18),.8))):re==="beanie"?(e.beginPath(),e.moveTo(G-4.8,P-1.4),e.bezierCurveTo(G-5,P-9.6,G+5,P-9.6,G+4.8,P-1.4),e.closePath(),L(e,ge,1),We(e,G-4.9,P-2.8,9.8,2,.8),L(e,j(ge,-.25),.8)):re==="bucket"||re==="fedora"?(e.beginPath(),e.moveTo(G-4,P-2.4),e.lineTo(G-3.6,P-6.6),e.lineTo(G+3.6,P-6.6),e.lineTo(G+4,P-2.4),e.closePath(),L(e,ge,1),e.beginPath(),e.ellipse(G,P-2.5,6.4,1.5,0,0,7),L(e,j(ge,.1),.9)):re==="headband"?(e.beginPath(),e.moveTo(G-4.3,P-1.8),e.quadraticCurveTo(G,P-7.4,G+4.3,P-1.8),Xe(e,ge,1.1)):re==="headphones"?(e.beginPath(),e.arc(G,P-.4,5.2,Math.PI*1.06,Math.PI*1.94),Xe(e,ge,1.1),d||[-1,1].forEach(J=>{We(e,G+J*5.1-1,P-1.2,2,3.4,.8),L(e,ge,.7)})):re==="crown"?(e.beginPath(),e.moveTo(G-3,P-5.4),e.lineTo(G-3.3,P-8.8),e.lineTo(G-1.4,P-6.8),e.lineTo(G,P-9.4),e.lineTo(G+1.4,P-6.8),e.lineTo(G+3.3,P-8.8),e.lineTo(G+3,P-5.4),e.closePath(),L(e,i.hatColor||"#EAB94E",.8)):re==="beret"&&(e.beginPath(),e.ellipse(G+1,P-5,5,2,-.12,0,7),L(e,ge,1))),e.restore(),i.teen){let J=i.packColor||"#E8604C";if(d||l)We(e,l?-h*4.9-3:-5.2,-36.4,l?6:10.4,12.5,2.2),L(e,J,1),e.fillStyle="rgba(255,255,255,.28)",e.fillRect(l?-h*4.9-1.5:-3.4,-31,l?3:6.8,1.1);else for(let ce of[-1,1])e.beginPath(),e.moveTo(ce*3.8,b+.4),e.lineTo(ce*3.1,-24.8),e.strokeStyle=J,e.lineWidth=1.3,e.lineCap="round",e.stroke()}if(i.tag){let J=P-12+Math.sin(s*4)*1.2;e.beginPath(),e.moveTo(-3.4,J-3.4),e.lineTo(3.4,J-3.4),e.lineTo(0,J+1),e.closePath(),L(e,"#f28f7e",1)}e.restore()}var Do={adult:1.4,hs:.9,g68:.78,g35:.66,k2:.54};var Mr=["down","up","left","right"],Cn=160,Pn=240,Tr=5,ni=4.6,wr=12;function Uu(e){let t=document.createElement("canvas");t.width=Cn*Tr,t.height=Pn*Mr.length;let n=t.getContext("2d");return Mr.forEach((i,s)=>{for(let r=0;r<Tr;r++){n.save(),n.translate(r*Cn+Cn/2,s*Pn+Pn-wr),n.scale(ni,ni);let a=e.age==="adult",c=Du();a&&(vh("#3b2530"),n.shadowColor="rgba(255,244,205,.95)",n.shadowBlur=9,n.shadowOffsetX=0,n.shadowOffsetY=0,Ui(n,0,0,{...e,dir:i,moving:r>0,walk:r*Math.PI/2,sitting:!!e.sit},0)),n.shadowColor="rgba(52,34,46,.35)",n.shadowBlur=2.2,n.shadowOffsetX=.5,n.shadowOffsetY=1.2,Ui(n,0,0,{...e,dir:i,moving:r>0,walk:r*Math.PI/2,sitting:!!e.sit},0),a&&vh(c),n.restore()}}),t}var s_=["#fde7d3","#fbdcc4","#f5cfa8","#f0c29b","#e3ad7f","#d9a074","#c58a5f","#a86f4f","#8d5a3e","#7a4a36","#5e3a2b","#4a2e24"],Fu=["#d62f3a","#f08a24","#f5c542","#3fb8af","#7b4fbf","#ff5fa2","#ffffff","#2b2b33","#3a2a30","#5a3a35","#694a38","#9a653d","#b5563e","#c9773e","#e0b04e","#f1d98a","#d9d4cc","#8c8c96","#4F91C7","#b8a8da","#e8789a","#5e9c72","#e07a66"];var ku=["#3a2a30","#5a3a2a","#8a6a3a","#c98a3a","#4f8a5e","#4f91c7","#7a8794","#8173ae","#2f6d4f","#a8b8c8","#c62f3a","#b04aa0"],Rn=["#4f91c7","#326c9e","#8fc9e8","#88b89a","#5e9c72","#a9dcc0","#eab94e","#f8d977","#f6b294","#f28f7e","#d9564a","#eaa5b2","#b8a8da","#8173ae","#c98569","#9a653d","#fff6ea","#9da7aa","#4a3b3f","#2b3a55"],r_=["#EAB94E","#d9d4cc","#e8a58f","#2b2b33","#e8789a","#4F91C7","#5E9C72","#b8a8da","#d62f3a"],a_=["#fbf6ee","#313a3f","#d9564a","#4f91c7","#eab94e","#88b89a","#9a653d","#b8a8da"],yt=(...e)=>e.map(([t,n])=>({id:t,label:n})),Ou={hairStyle:yt(["fade","Skin fade"],["sidecut","Side shave"],["balding","Balding on top"],["receding","Receding"],["flattop","Flat top"],["pompadour","Pompadour"],["quiff","Quiff"],["hime","Hime cut"],["bantuknots","Bantu knots"],["highpony","High ponytail"],["mullet","Mullet"],["bald","Shaved bald"],["mohawk","Mohawk"],["bowl","Bowl cut"],["slick","Slicked back"],["cornrows","Cornrows"],["locs","Locs"],["shag","Shaggy"],["halfup","Half up"],["crop","Short crop"],["buzz","Buzz cut"],["undercut","Undercut"],["spiky","Spiky"],["messy","Messy"],["sidebang","Side bangs"],["curtains","Curtains"],["pixie","Pixie"],["bob","Bob"],["long","Long"],["wavy","Wavy long"],["curly","Curly puffs"],["afro","Afro"],["pony","Ponytail"],["pigtails","Pigtails"],["twinbuns","Twin buns"],["bun","Bun"],["topknot","Top knot"],["braids","Braids"]),eyeShape:yt(["wink","Wink"],["cute","Big sparkly"],["tired","Tired"],["round","Round"],["oval","Oval"],["wide","Wide"],["sleepy","Sleepy"],["happy","Happy"],["lash","Lashes"]),brow:yt(["worried","Worried"],["angled","Determined"],["unibrow","Unibrow"],["soft","Soft"],["thick","Thick"],["thin","Thin"],["arch","Arched"],["none","None"]),mouthStyle:yt(["tongue","Tongue out"],["teeth","Big smile"],["pout","Pout"],["gap","Gap tooth"],["smile","Smile"],["grin","Grin"],["smirk","Smirk"],["flat","Calm"],["o","Surprised"],["cat","Cat"]),glasses:yt(["none","None"],["round","Round"],["square","Square"],["cat","Cat-eye"],["half","Half-rim"],["sun","Sunglasses"]),hat:yt(["none","None"],["bandana","Bandana"],["visor","Visor"],["sunhat","Sun hat"],["cap","Cap"],["beanie","Beanie"],["bucket","Bucket hat"],["beret","Beret"],["headband","Headband"],["bow","Bow"],["flower","Flower"],["crown","Crown"],["headphones","Headphones"],["catears","Cat ears"]),top:yt(["henley","Henley"],["flannel","Flannel shirt"],["sailor","Sailor top"],["vneck","V-neck jumper"],["cableknit","Cable-knit jumper"],["argyle","Argyle jumper"],["fairisle","Fair Isle jumper"],["cowl","Cowl-neck jumper"],["chunky","Chunky jumper"],["ziphoodie","Zip hoodie"],["varsity","Varsity jacket"],["denim","Denim jacket"],["puffer","Puffer jacket"],["raincoat","Raincoat"],["labcoat","Lab coat"],["apron","Apron"],["polo","Polo"],["turtleneck","Turtleneck"],["cardigan","Cardigan"],["track","Track jacket"],["tee","T-shirt"],["hoodie","Hoodie"],["sweater","Sweater"],["jersey","Jersey"],["blazer","Blazer"],["dress","Dress"],["overalls","Overalls"],["vest","Vest"],["tank","Tank top"]),pattern:yt(["solid","Solid"],["stripes","Stripes"],["dots","Dots"],["plaid","Plaid"],["hearts","Hearts"],["stars","Stars"]),bottom:yt(["jeans","Jeans"],["pleated","Pleated skirt"],["tutu","Tutu"],["kilt","Kilt"],["bike","Bike shorts"],["leggings","Leggings"],["cargo","Cargo pants"],["capri","Capris"],["pants","Pants"],["joggers","Joggers"],["shorts","Shorts"],["skirt","Skirt"]),shoeStyle:yt(["hightop","High-tops"],["loafer","Loafers"],["rainboot","Rain boots"],["slipper","Slippers"],["skate","Skate shoes"],["sneaker","Sneakers"],["boot","Boots"],["sandal","Sandals"],["plain","Plain shoes"]),packStyle:yt(["pack","Backpack"],["messenger","Messenger bag"],["mini","Mini pack"],["none","No bag"]),part:yt(["none","No part"],["left","Left part"],["center","Center part"],["right","Right part"]),fringe:yt(["none","No fringe"],["straight","Straight bangs"],["side","Side-swept"],["curtain","Curtain bangs"],["wispy","Wispy bangs"]),faceShape:yt(["oval","Oval"],["round","Round"],["long","Long"],["square","Square"],["heart","Heart"]),noseShape:yt(["button","Button"],["pointy","Pointy"],["wide","Wide"],["round","Round"]),earShape:yt(["round","Round"],["small","Small"],["big","Big"],["pointy","Pointy"]),beard:yt(["none","None"],["stubble","Stubble"],["goatee","Goatee"],["vandyke","Van Dyke"],["full","Full beard"],["circle","Circle beard"],["pencil","Pencil mustache"],["handlebar","Handlebar mustache"],["walrus","Walrus mustache"],["soulpatch","Soul patch"],["chinstrap","Chin strap"],["sideburns","Sideburns"],["muttonchops","Mutton chops"]),socks:yt(["none","No socks"],["ankle","Ankle socks"],["tall","Tall socks"],["striped","Striped socks"]),extra:yt(["none","None"],["halo","Halo"],["horns","Devil horns"],["bunny","Bunny ears"],["antlers","Antlers"],["unicorn","Unicorn horn"],["antennae","Bee antennae"],["tiara","Tiara"],["flowercrown","Flower crown"],["sparkles","Sparkles"],["angelwings","Angel wings"],["butterfly","Butterfly wings"],["cape","Cape"],["foxtail","Fox tail"],["sash","Sash"],["medal","Medal"],["stethoscope","Stethoscope"],["toolbelt","Tool belt"],["mask","Face mask"],["eyepatch","Eye patch"],["bird","Shoulder bird"]),htex:yt(["straight","Straight"],["wavy","Wavy"],["curly","Curly"],["coily","Coily"],["braided","Braided"],["silky","Silky and shiny"],["frizzy","Frizzy"],["fluffy","Fluffy"]),earStyle:yt(["stud","Studs"],["hoop","Hoops"],["dangle","Dangles"],["pearl","Pearls"],["cuff","Double piercing"]),wrist:yt(["none","None"],["bracelet","Bracelet"],["watch","Watch"],["beads","Beaded bracelet"],["band","Wristband"]),hl:yt(["streak","Streak"],["stripes","Stripes"],["frontpiece","Front piece"],["tips","Dipped tips"],["ombre","Ombre"],["split","Half and half"],["roots","Colored roots"],["underlayer","Hidden layer"],["rainbow","Rainbow"]),mark:yt(["none","None"],["dimples","Dimples"],["birthmark","Birthmark"],["braces","Braces"],["bandaid","Band-aid"],["star","Star sticker"],["paint","Face paint hearts"],["scar","Scar"],["glitter","Glitter"]),neckwear:yt(["none","None"],["necklace","Necklace"],["bowtie","Bow tie"],["tie","Tie"],["bandana","Neck bandana"],["lanyard","Lanyard"]),emblem:yt(["none","None"],["heart","Heart"],["star","Star"],["bolt","Lightning"],["paw","Paw print"],["smile","Smiley"]),build:yt(["slim","Slim"],["regular","Regular"],["sturdy","Sturdy"]),age:yt(["k2","Grades K-2"],["g35","Grades 3-5"],["g68","Grades 6-8"],["hs","High school"])};var No=()=>({name:"Student",pronouns:"they/them",age:"hs",skin:"#f0c29b",hairStyle:"bun",hair:"#5a3a35",hair2:null,eyeShape:"round",eyeColor:"#5a3a2a",brow:"soft",browColor:null,freckles:!1,mole:!1,nose:!1,blush:!0,mouthStyle:"smile",lip:"#8a4650",glasses:"round",glassColor:"#5b4048",hat:"none",hatColor:"#e07a66",earrings:null,scarf:null,badge:null,top:"hoodie",shirt:"#d9564a",shirt2:"#fff6ea",pattern:"solid",bottom:"pants",pants:"#4f5d75",shoeStyle:"sneaker",shoes:"#fbf6ee",packStyle:"pack",pack:"#8a5f6a",build:"regular",headSize:1,part:"none",fringe:"none",faceShape:"oval",noseShape:"button",earShape:"round",beard:"none",beardColor:null,socks:"none",sockColor:"#fff6ea",extra:"none",extraColor:"#eab94e",eyeColor2:null,eyeShadow:null,liner:!1,height:1,closet:[null,null,null,null,null],earStyle:"stud",nosePin:null,wrist:"none",wristColor:"#eab94e",hl:"streak",htex:"straight",mark:"none",neckwear:"none",neckColor:"#c4463c",emblem:"none",clip:null});var o_=e=>e==="g68"||e==="hs";function Er(e,t=11){let n=o_(e.age);return{id:t,age:e.age,adultRig:e.age==="hs"?!0:void 0,teen:e.age==="hs"?!0:void 0,packColor:e.age==="hs"?e.pack:void 0,skin:e.skin,hair:e.hair,hair2:e.hair2||void 0,style:e.hairStyle,shirt:e.shirt,shirt2:e.shirt2,top:e.top,pattern:e.pattern,bottom:e.bottom,pants:e.pants,eyeShape:e.eyeShape,eyeColor:e.eyeColor,brow:e.brow,browColor:e.browColor||void 0,freckles:e.freckles,mole:e.mole,nose:e.nose,blush:e.blush,mouthStyle:e.mouthStyle,lip:e.lip,glasses:e.glasses==="none"?!1:e.glasses,glassColor:e.glassColor,hat:e.hat==="none"?void 0:e.hat,hatColor:e.hatColor,earrings:e.earrings||void 0,scarf:e.scarf||void 0,badge:e.badge||void 0,shoeStyle:e.shoeStyle,shoes:e.shoes,packStyle:e.packStyle,pack:e.pack,build:e.build,headSize:e.headSize,part:e.part==="none"?void 0:e.part,fringe:e.fringe==="none"?void 0:e.fringe,faceShape:e.faceShape,noseShape:e.noseShape,earShape:e.earShape,beard:e.age==="hs"||e.age==="adult"?e.beard==="none"?void 0:e.beard:void 0,beardColor:e.beardColor||void 0,socks:e.socks==="none"?void 0:e.socks,sockColor:e.sockColor,extra:e.extra==="none"?void 0:e.extra,extraColor:e.extraColor,eyeColor2:e.eyeColor2||void 0,eyeShadow:e.eyeShadow||void 0,liner:n&&e.liner?!0:void 0,hScale:e.height&&e.height!==1?e.height:void 0,earStyle:e.earStyle,nosePin:n&&e.nosePin||void 0,wrist:n&&e.wrist!=="none"?e.wrist:void 0,wristColor:e.wristColor,hl:e.hl,htex:e.htex==="straight"?void 0:e.htex,mark:e.mark==="none"?void 0:e.mark,neckwear:e.neckwear==="none"||e.neckwear==="necklace"&&!n?void 0:e.neckwear,neckColor:e.neckColor,emblem:e.emblem==="none"?void 0:e.emblem,clip:e.clip||void 0}}function yh(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var Je=(e,t)=>t[Math.floor(e()*t.length)],wt=e=>Ou[e].map(t=>t.id);function xh(e,t="hs"){let n=["crop","buzz","undercut","spiky","messy","sidebang","curtains","pixie","bob","long","wavy","curly","afro","pony","pigtails","twinbuns","bun","topknot","braids"],i=Je(e,wt("top")),s=e()<.28?Je(e,wt("hat").filter(a=>a!=="none")):"none",r=e()<.3?Je(e,wt("glasses").filter(a=>a!=="none")):"none";return{...No(),age:t,name:"",skin:Je(e,s_),hairStyle:Je(e,t==="adult"?n:wt("hairStyle")),hair:Je(e,Fu),hair2:e()<.16?Je(e,Fu):null,eyeShape:Je(e,wt("eyeShape")),eyeColor:Je(e,ku),brow:Je(e,wt("brow").filter(a=>a!=="none")),freckles:e()<.22,mole:e()<.1,nose:e()<.3,blush:e()<.8,mouthStyle:Je(e,wt("mouthStyle")),glasses:r,glassColor:Je(e,["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da"]),hat:s,hatColor:Je(e,Rn),earrings:e()<.12?Je(e,["#eab94e","#fff6ea","#f28f7e"]):null,scarf:e()<.1?Je(e,Rn):null,badge:e()<.12?Je(e,Rn):null,top:i,shirt:Je(e,Rn),shirt2:Je(e,Rn),pattern:e()<.4?Je(e,wt("pattern")):"solid",bottom:i==="dress"?"pants":Je(e,wt("bottom")),pants:Je(e,Rn),shoeStyle:Je(e,wt("shoeStyle")),shoes:Je(e,a_),packStyle:Je(e,wt("packStyle")),pack:Je(e,Rn),build:Je(e,wt("build")),headSize:.94+e()*.12,part:Je(e,wt("part")),fringe:e()<.35?Je(e,wt("fringe")):"none",faceShape:Je(e,wt("faceShape")),noseShape:Je(e,wt("noseShape")),earShape:e()<.8?"round":Je(e,wt("earShape").filter(a=>a!=="pointy")),beard:t==="hs"&&e()<.14?Je(e,wt("beard").filter(a=>a!=="none")):"none",beardColor:null,socks:e()<.3?Je(e,wt("socks")):"none",sockColor:Je(e,Rn),extra:e()<.07?Je(e,wt("extra").filter(a=>a!=="none")):"none",extraColor:Je(e,r_),eyeColor2:e()<.04?Je(e,ku):null,eyeShadow:e()<.06?Je(e,Rn):null,liner:e()<.06,height:.96+e()*.08,hl:Je(e,wt("hl")),htex:e()<.45?"straight":Je(e,wt("htex")),mark:e()<.12?Je(e,wt("mark").filter(a=>a!=="none")):"none",neckwear:e()<.12?Je(e,wt("neckwear").filter(a=>a!=="none")):"none",neckColor:Je(e,Rn),emblem:e()<.14?Je(e,wt("emblem").filter(a=>a!=="none")):"none",clip:e()<.1?Je(e,Rn):null}}var bh=e=>[e.skin,e.hairStyle,e.hair,e.top,e.shirt,e.pattern,e.hat,e.glasses,e.bottom,e.pants,e.beard,e.faceShape,e.eyeColor,e.hair2,e.htex,e.fringe,e.extra,e.shoes].join("|");var nt=(e,t,n,i,s,r,a,c,l,h)=>({name:e,top:t,top_c:n,inner_c:i,bottom:s,bottom_c:r,shoes_c:a,acc:c,accent_c:l,legs:h}),it=(e,t,n,i,s)=>({name:e,style:t,color:n,accent:i,v:s}),Mh=[{id:"tanaka",idle:"nod",sig:"finger",num:110,name:"Mr. Hiroshi Tanaka",short:"Tanaka",subject:"Mathematics",room:"Room 112",age:52,gender:"M",skin:"#E2B98F",eye:"#2A1C12",brow:"#4A4541",build:{h:.97,w:.92},features:{glasses:"rect",glassesColor:"#3A3A3A",beard:"mustache",beardColor:"#5A5550",lines:!0},hair:[it("Classic side part","short","#5E5A57"),it("Slicked back","slick","#55514E"),it("Short crop","buzz","#6A6663"),it("Tousled weekend","pixie","#5E5A57"),it("Side part, silver streak","short","#8A8683")],outfits:[nt("Grey vest & navy tie","vest","#6B6E73","#EEF2F5","pants","#2E3440","#2A1C14","tie","#1F3A68"),nt("Navy blazer & striped shirt","blazer","#23304A","#DDE7F2","pants","#5B5F66","#2A1C14","tie","#8C2F39"),nt("Oatmeal cardigan & bow tie","cardigan","#CDBB9A","#F6F3EC","pants","#4A4032","#3B2A1E","bowtie","#2E5E4E"),nt("Pale blue button-up","buttonup","#BFD4EA","#BFD4EA","pants","#3C3F45","#1E1E1E","tie","#2D2D2D"),nt("Pi-day sweater","sweater","#2F5D50","#2F5D50","pants","#34373D","#1E1E1E",null)],mannerisms:["Counts steps off on his fingers, always starting with the thumb","Small precise nods while a student talks","Straightens his tie before writing on the board","Pauses mid-sentence to let a pun land, then smiles at nobody"],tone:"Calm, slow and soft-spoken. Speaks in numbered steps. Fond of terrible math puns delivered with total seriousness.",voice:{pitch:.85,rate:.82},lines:{greet:"Good morning. Please be seated, and be rational.",teach:"Step one: isolate x. Step two: do not panic. Step three: check your work.",praise:"Excellent. That answer is... integral to the class.",warn:"I see a calculator under the desk. Its days are numbered.",bye:"Homework is problems one through twenty, odd only. Even you can do it."}},{id:"ayrissa",idle:"bounce",sig:"wave",num:111,name:"Ms. Ayrissa",short:"Ayrissa",subject:"English & Creative Writing",room:"Room 220",age:36,gender:"F",skin:"#734633",eye:"#2A160E",brow:"#18100B",build:{h:1,w:1.03},features:{freckles:!0,earrings:"#D9D9D9",hoops:!0},hair:[it("Honey-highlight boho curls","curly","#17110E","#D8AE72"),it("Curly puff & orange headband","afro","#1E1510","#F0651C","puff"),it("Jet-black boho curls, middle part","curly","#120E0C"),it("Curtain-bang curls with honey pieces","curly","#17110E","#D8AE72"),it("Shoulder-length honey twist-out","curly","#1C1410","#C99A5E")],outfits:[nt("Red kaftan top with gold embroidery","sweater","#A51F2E","#A51F2E","pants","#2E3A55","#1A1A1A","beads","#D9B45A"),nt("Navy & white floral wrap dress","dress","#1E2A4A","#1E2A4A","none",void 0,"#E8E0D0",null,"#DCE6F2"),nt("Stone cardigan & khaki joggers","cardigan","#BDB5A8","#EDE8E0","pants","#C8B89A","#F2F2F2","lanyard","#F0651C"),nt("Tropical print wrap top & light denim","sweater","#ECE4D8","#ECE4D8","pants","#8FA7C7","#EDEDED","beads","#D98FA8"),nt("Burnt-orange blazer & black tee","blazer","#C8561E","#1C1C1C","pants","#232323","#1A1A1A","necklace","#D4AF37")],makeup:[{lip:"#7A3E34",shadow:"#3A2620",blush:"#8A4A38",liner:!0},{lip:"#8A4A3E",shadow:"#5A3A2C",blush:"#94503C",liner:!0},{lip:"#6E3A36",shadow:"#2A3350",blush:"#864A3A",liner:!0},{lip:"#9A6A5A",shadow:"#6A4A3A",blush:"#9A5A44",liner:!1},{lip:"#5E1E2E",shadow:"#4A2A3A",blush:"#8A3E40",liner:!0}],mannerisms:["Rests her chin on her fist when she's really listening","Her smile shows up before the answer does","Flips her curls over one shoulder before reading a poem out loud","Hypes up every raised hand: 'Yes! Say that!'"],tone:"High energy and warm. Talks fast, laughs easily and turns every answer into a celebration. Big on 'my brilliant people' and making sure every voice gets heard.",voice:{pitch:1.18,rate:1.14},lines:{greet:"Good morning, my brilliant people! Pens out, energy up, let's WRITE!",teach:"A metaphor isn't decoration, it's a door. Open it! What's behind yours?",praise:"YES! Say that again, louder, for the people in the back!",warn:"Uh-uh, phones down. Your story is way more interesting than that screen.",bye:"Journal tonight, even one line. Your voice matters. Love you, bye!"}},{id:"okafor",idle:"still",sig:"finger",num:112,name:"Ms. Adaeze Okafor",short:"Okafor",subject:"Chemistry",room:"Lab 204",age:38,gender:"F",skin:"#6B4226",eye:"#3B2314",brow:"#1A120D",build:{h:1.06,w:.98},features:{glasses:"cateye",glassesColor:"#7A1F2B",earrings:"#D4AF37"},hair:[it("Locs in a high bun","bun","#1B1411","#D4AF37"),it("Waist-length box braids","long","#1B1411","#D4AF37","braids"),it("Natural afro","afro","#221815"),it("Sleek low ponytail","pony","#1B1411"),it("Burgundy twist-out","curly","#4A1C24")],outfits:[nt("Lab coat over teal turtleneck","labcoat","#F4F6F6","#1F6F6B","pants","#2B2D33","#1C1C1C",null,"#1F6F6B"),nt("Mustard blazer & cream blouse","blazer","#C99A2E","#F2E8D5","pants","#3A2E28","#5A3A22","necklace","#D4AF37"),nt("Kente-trim wrap dress","dress","#1E4E79","#1E4E79","none",void 0,"#E0A526","brooch","#E0A526"),nt("Emerald sweater & pencil skirt","sweater","#1F6A4A","#1F6A4A","skirt","#2A2A2E","#1C1C1C","lanyard","#C0392B","#2A1A12"),nt("Friday cardigan & periodic-table tee","cardigan","#6D2E46","#ECECEC","pants","#4C6A92","#F2F2F2",null)],makeup:[{lip:"#8C3B3B",shadow:"#8A5A3C",blush:"#B5543F",liner:!1},{lip:"#6E1E3A",shadow:"#5E3A4A",blush:"#A4454F",liner:!0},{lip:"#9A4E3A",shadow:"#C9A13B",blush:"#B8603E",liner:!0},{lip:"#A0624A",shadow:"#7A5238",blush:"#A5553E",liner:!1},{lip:"#9E1B22",shadow:"#6A3F2C",blush:"#B04A3A",liner:!0}],mannerisms:["Pushes her glasses up with one knuckle before making a point","Taps a marker twice against her palm when waiting for an answer","Raises one eyebrow instead of saying 'really?'","Stands perfectly still, then moves with purpose"],tone:"Precise and dry. Short sentences, exact numbers, a deadpan joke about once a lesson. Never raises her voice; lowers it instead.",voice:{pitch:.95,rate:.92},lines:{greet:"Goggles on, bags under the bench. Good morning.",teach:"Sodium plus water. Watch the reaction, not me. I already know what happens.",praise:"Correct, to three significant figures. I'm impressed.",warn:"That is not a beaker of juice. Put it down. Slowly.",bye:"Wash your hands. Twice. See you Thursday."}},{id:"obrien",idle:"sway",sig:"shrug",num:113,name:"Mr. Declan O'Brien",short:"O'Brien",subject:"History",room:"Room 301",age:45,gender:"M",skin:"#F0C8AE",eye:"#5A7A4A",brow:"#8A3C1E",build:{h:1,w:1.14},features:{beard:"full",beardColor:"#8A3C1E",freckles:!0},hair:[it("Tousled copper","pixie","#9A4520"),it("Swept side part","short","#8A3C1E"),it("Tied-back 'historian bun'","bun","#8A3C1E"),it("Shoulder-length waves","bob","#9A4520"),it("Slicked for the museum trip","slick","#7A3418")],outfits:[nt("Tweed blazer with elbow patches","blazer","#7A6A52","#E8E2D4","pants","#4A4238","#3B2616","tie","#5A2A1E"),nt("Forest cardigan & plaid shirt","cardigan","#2F4A34","#A6463A","pants","#6B5A44","#3B2616",null),nt("Burgundy sweater vest","vest","#6B1F2A","#EDE8DC","pants","#3A3A3A","#2A1A10","bowtie","#1F3A2A"),nt("Rolled-sleeve oxford","buttonup","#E9E4D8","#E9E4D8","pants","#556B45","#3B2616","tie","#244060"),nt("Cable-knit fisherman sweater","turtleneck","#DCD2BC","#DCD2BC","pants","#3E3A33","#3B2616",null)],mannerisms:["Spreads both arms wide when setting a scene","Leans in and drops to a stage whisper before a twist","Strokes his beard while listening","Rocks back on his heels after a punchline"],tone:"Theatrical storyteller. Big pauses, dramatic whispers, then a booming reveal. Treats every lesson like a campfire tale.",voice:{pitch:.75,rate:.95},lines:{greet:"Gather round, gather round! Today... we march on Rome.",teach:"Picture it. 1066. Mud to your ankles. Arrows in the air. And then...",praise:"Ha! A scholar among us! Rome would have made you a senator.",warn:"Ah-ah. The only revolution in this room is on page forty.",bye:"History waits for no one. Except you, on Monday. Off with ye!"}},{id:"haddad",idle:"still",sig:"explain",num:114,name:"Mr. Karim Haddad",short:"Haddad",subject:"Geography & Careers",room:"CarryingCareers",age:41,gender:"M",skin:"#B98460",eye:"#3A2412",brow:"#16100C",build:{h:1.03,w:1.02},features:{beard:"full",beardColor:"#1A1410"},hair:[it("Neat short crop","short","#16100C"),it("Textured quiff","slick","#16100C"),it("Close buzz","buzz","#16100C"),it("Soft waves grown out","pixie","#1C1410"),it("Shaved clean","bald","#16100C")],outfits:[nt("Olive field shirt","buttonup","#6A7048","#6A7048","pants","#C8B68E","#5A3A22",null),nt("Navy sweater over collar","sweater","#23324E","#EAEAEA","pants","#6A6258","#3B2616",null),nt("Charcoal suit & rust tie","blazer","#3A3C40","#F2F2F2","pants","#3A3C40","#1A1A1A","tie","#B0532E"),nt("Camel cardigan","cardigan","#B8905A","#2E4A5A","pants","#2E2E30","#3B2616",null),nt("Expedition vest","vest","#4A5A3A","#D8CFC0","pants","#5A4E3A","#5A3A22","scarf","#A83A2A")],mannerisms:["Strokes his beard slowly before answering","Points to places on an invisible map in the air","Waits a full three seconds of silence for you to think","Taps his compass watch when it's time to move on"],tone:"Patient, low and thoughtful. Asks more questions than he answers. Every sentence sounds like it has been considered twice.",voice:{pitch:.7,rate:.85},lines:{greet:"Welcome, travelers. Where in the world shall we begin today?",teach:"A path is not found. It is walked, one step at a time. Which step is yours?",praise:"Good. You didn't just answer. You thought. That is the difference.",warn:"The map will still be here if you stop throwing it.",bye:"Look at the sky on your walk home. Tell me which way the wind blew."}},{id:"park",idle:"bounce",sig:"wave",num:115,name:"Ms. Chloe Park",short:"Park",subject:"Computer Science",room:"Lab 110",age:27,gender:"F",skin:"#F1D1B5",eye:"#2A1A12",brow:"#1A1210",build:{h:.92,w:.94},features:{glasses:"round",glassesColor:"#1A1A1A",earrings:"#7FD4E0"},hair:[it("Blunt bob with bangs","bob","#141014"),it("Space buns","bun","#141014","#8E5CE0"),it("Lavender-streak ponytail","pony","#141014","#B58CF0"),it("Long straight","long","#141014"),it("Teal-tipped pixie","pixie","#1E2A30")],outfits:[nt("Oversized hoodie-sweater","sweater","#7A6AC8","#7A6AC8","skirt","#2A2A34","#F2F2F2","lanyard","#34C3A0","#1E1E26"),nt("Pastel cardigan & tee","cardigan","#F2B8C6","#FFFFFF","pants","#4A6A9A","#F2F2F2","necklace","#7FD4E0"),nt("Pinafore dress","dress","#2E4A6A","#F2F2F2","none",void 0,"#1A1A1A",null,"#F2C84A","#E8C8B0"),nt("Hackathon track jacket","track","#1A1A24","#34C3A0","pants","#1A1A24","#34C3A0","lanyard","#34C3A0"),nt("Mint button-up & suspender skirt","buttonup","#BFE8D8","#BFE8D8","skirt","#3A3A4A","#6A3A5A","bowtie","#6A3A5A","#E8C8B0")],makeup:[{lip:"#D0506A",shadow:"#C8A0A0",blush:"#F0A0A8",liner:!1},{lip:"#C07080",shadow:"#B8A0E0",blush:"#F0A8B0",liner:!0},{lip:"#D09088",shadow:"#D8B8A8",blush:"#F0B0A8",liner:!1},{lip:"#B0606A",shadow:"#8AC8C8",blush:"#E8A0A0",liner:!0},{lip:"#B8283A",shadow:"#C09898",blush:"#F09098",liner:!1}],mannerisms:["Pushes her giant glasses up with the back of her wrist","Fidgets with a keycap keychain while thinking","Double thumbs-up when your code compiles","Talks faster and faster until she catches herself, laughs, and restarts"],tone:"Quick, bubbly and nerdy. Lots of tech slang and tangents. Gets so excited she speeds up, then resets with a laugh.",voice:{pitch:1.35,rate:1.18},lines:{greet:"Hi hi hi! Okay, log in, we're debugging today and it's gonna be SO fun.",teach:"So a loop is just the computer going 'again? again? again?' until you tell it to stop.",praise:"It compiled?! First try?! Double thumbs up, you legend.",warn:"Mm, that's an infinite loop. Your laptop is crying. Ctrl+C, please.",bye:"Commit your work! Push it! Don't be the person who loses it. Bye!"}},{id:"larsen",idle:"nod",sig:"finger",num:116,name:"Dr. Ingrid Larsen",short:"Larsen",subject:"Life Lessons",room:"Life Lessons",age:60,gender:"F",skin:"#F3D6C6",eye:"#4F86B8",brow:"#B8AE9E",build:{h:1.02,w:1},features:{glasses:"round",glassesColor:"#B08A4A",lines:!0,earrings:"#9FC9E0"},hair:[it("Silver chignon","bun","#D8D2C4"),it("Chin-length bob","bob","#E0DACE"),it("Crown braid updo","bun","#D8D2C4","#9FC9E0"),it("Soft pixie","pixie","#E4DFD4"),it("Loose silver waves","long","#D0C9BA")],outfits:[nt("Lab coat over lavender blouse","labcoat","#F7F7F5","#B9A6D6","skirt","#4A4E5A","#3A2E28","lanyard","#2E7D5B","#D8B8A8"),nt("Moss cardigan","cardigan","#6A7F4A","#F2EEE4","pants","#5A4E40","#3A2E28","brooch","#C9A13B"),nt("Botanical print dress","dress","#2E5E6A","#2E5E6A","none",void 0,"#2A2A2A","necklace","#E7C66A","#D8B8A8"),nt("Fair Isle sweater","sweater","#9C3B3B","#9C3B3B","pants","#2E3A4A","#3A2E28",null,"#F2EEE4"),nt("Field-trip vest & flannel","vest","#8A7A5A","#3E6A8A","pants","#4A4A3A","#5A3A22","scarf","#C9763B")],makeup:[{lip:"#C07A7A",shadow:"#B8A2A0",blush:"#E89A9A",liner:!1},{lip:"#D0705A",shadow:"#B8A090",blush:"#E8A090",liner:!1},{lip:"#9A5A6A",shadow:"#9A8AA8",blush:"#D88A9A",liner:!0},{lip:"#C8908A",shadow:"#C8B8B0",blush:"#E8AAA0",liner:!1},{lip:"#B02A36",shadow:"#A08A80",blush:"#E08A8A",liner:!0}],mannerisms:["Peers over her glasses before asking a question she already knows the answer to","Holds up one finger: 'Ah, but...'","Cups her hands as if holding something alive when describing cells","Hums while she labels specimen jars"],tone:"Warm, grandmotherly and razor sharp. Unhurried and kind, with a Scandinavian bluntness that surprises people.",voice:{pitch:1.05,rate:.85},lines:{greet:"Good morning, my future grown-ups. Let us see what life has to teach today.",teach:"Ah, but... who pays for it? Everything in grown-up life is a bargain with yourself.",praise:"Very good. You think like a scientist now. Dangerous.",warn:"The frog has been through enough. Please stop waving it.",bye:"Try one thing for yourself this week. I will ask how it went."}},{id:"raman",idle:"tilt",sig:"explain",num:117,name:"Mrs. Priya Raman",short:"Raman",subject:"English Literature",room:"Room 215",age:44,gender:"F",skin:"#A8703F",eye:"#2A160C",brow:"#1C120C",build:{h:.95,w:.97},features:{glasses:"half",glassesColor:"#6A4A8A",earrings:"#E6C35C"},hair:[it("Long center-part","long","#16100C"),it("Low braided bun","bun","#16100C","#E6C35C"),it("Single long braid","pony","#1A120E","#B83A5A"),it("Soft shoulder waves","bob","#24160F"),it("Loose curls, henna tint","curly","#4A2418")],outfits:[nt("Plum cardigan & floral blouse","cardigan","#5E2E5A","#F2D8C8","skirt","#2E2A40","#3A2418","scarf","#D9A441","#6B4428"),nt("Saffron kurta dress","dress","#D98E2B","#D98E2B","none",void 0,"#8A1F3A","necklace","#8A1F3A"),nt("Teal turtleneck & long skirt","turtleneck","#1E6A70","#1E6A70","skirt","#5A4632","#2A1A12","necklace","#E6C35C","#5A4632"),nt("Rose blazer & ivory shell","blazer","#C77A8A","#F5EFE6","pants","#3B3346","#E6C35C","brooch","#E6C35C"),nt("Book-club sweater","sweater","#8A9A5B","#8A9A5B","skirt","#4A3A2A","#2A1A12","scarf","#B83A5A","#3A2A20")],makeup:[{lip:"#9A4A5A",shadow:"#5A3A30",blush:"#B8645A",liner:!0},{lip:"#8A5060",shadow:"#7A5A6A",blush:"#B06A6A",liner:!1},{lip:"#8E2A3A",shadow:"#D4A24A",blush:"#C06A50",liner:!0},{lip:"#8A3A2A",shadow:"#6A4030",blush:"#A85A48",liner:!0},{lip:"#9A6458",shadow:"#8A6A58",blush:"#B07060",liner:!1}],mannerisms:["Hugs her book to her chest when a passage moves her","Tilts her head and smiles before gently disagreeing","Looks over her half-moon glasses at the whole room","Quotes a line of poetry to end almost any argument"],tone:"Gentle, lyrical and encouraging. Long, flowing sentences, lots of 'dear' and 'lovely'. Corrects you so kindly you thank her for it.",voice:{pitch:1.1,rate:.88},lines:{greet:"Good morning, my dears. Open your books to where the story left us.",teach:"Notice how the rain falls just as she says goodbye. Nothing in a novel is an accident.",praise:"Oh, that's lovely. Write that down before it flies away.",warn:"Darling, 'it was good' is not an essay. Tell me why it was good.",bye:"Read chapter nine tonight, and let it keep you up a little."}}],l_=e=>{let t=2166136261;for(let n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0},h_=e=>()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296},c_=e=>{let t=new Date(e.getFullYear(),0,1),n=Math.floor((+e-+t)/864e5/7);return`${e.getFullYear()}-${n}`};function Sh(e,t,n=new Date){let i=h_(l_(e+t+c_(n))),s=[0,1,2,3,4];for(let c=4;c>0;c--){let l=Math.floor(i()*(c+1));[s[c],s[l]]=[s[l],s[c]]}let r=n.getDay(),a=r===6?0:r===0?1:r-1;return s[a]}var u_={short:"crop",slick:"crop",pixie:"crop",buzz:"buzz",bun:"bun",bob:"bob",long:"long",pony:"pony",afro:"afro",curly:"curly",bald:"bald"},d_={rect:"square",round:"round",cateye:"cat",half:"half"};function Uo(e,t=new Date){let n=e.hair[Sh(e.id,"hair",t)],i=e.outfits[Sh(e.id,"outfit",t)],s=e.features,r=e.makeup?.[Sh(e.id,"makeup",t)],a={id:e.num,age:"adult",skin:e.skin,hair:n.color,hair2:n.accent&&n.style!=="afro"?n.accent:void 0,style:u_[n.style]??"crop",shirt:i.top_c,shirt2:i.inner_c,top:i.top,bottom:i.bottom==="none"?"pants":i.bottom,pants:i.bottom_c??"#3a3a44",tights:i.legs,shoes:i.shoes_c,acc:i.acc??void 0,accent:i.accent_c,eyeColor:e.eye,browColor:e.brow,brow:e.gender==="M"?"thick":"soft",glasses:s.glasses?d_[s.glasses]??"round":!1,glassColor:s.glassesColor,earrings:s.earrings,hoops:s.hoops,beard:s.beard,beardColor:s.beardColor,freckles:s.freckles,lines:s.lines||e.age>50,bodyW:e.build.w,hScale:e.build.h,lip:r?.lip,shadow:r?.shadow,blushColor:r?r.blush+"55":void 0,blush:r?!0:void 0,liner:r?.liner,lanyard:i.acc==="lanyard",tag:!1};return n.style==="afro"&&n.accent&&(a.hat="headband",a.hatColor=n.accent),a}var Bu=Object.fromEntries(Mh.map(e=>[e.id,e]));var f_=["cheerful","shy","sporty","nerdy","artsy","funny","curious","bossy","dreamy","kind"],zu=["Maya","Marcus","Priya","Leo","Amara","Diego","Sofia","Kenji","Zara","Eli","Nadia","Tobias","Imani","Mateo","Hana","Omar","Lucia","Jonah","Anika","Caleb","Mei","Ravi","Talia","Felix","Yara","Ben","Chloe","Dev","Esme","Finn","Grace","Hugo","Isla","Jamal","Keira","Liam","Mira","Noah","Olive","Pablo","Quinn","Rosa","Sam","Tessa","Uma","Victor","Willa","Xavier","Yusuf","Zoe","Aiden","Bella","Cyrus","Daria","Emil","Farah","Gus","Harper"],Hu=["Chen","Reed","Patel","Okafor","Santos","Nguyen","Kim","Haddad","Rivera","Brooks","Ivanov","Tanaka","Mensah","Larsen","Cruz","Adeyemi","Fischer","Ibrahim","Kowalski","Lopez","Morales","Novak","Osei","Park","Quintero","Rossi","Singh","Torres","Underwood","Vega","Walker","Yamada","Zhang","Abbott","Bishop","Castillo","Dalton","Ellis","Foster","Grant"],Vu={young:["dinosaurs","building with blocks","drawing animals","jumping rope","bugs and butterflies","playing tag","stickers","toy trains","singing songs","baking cookies"],mid:["soccer","robotics club","drawing comics","chess","baking","birdwatching","skateboarding","minecraft builds","magic tricks","swimming","reading mysteries","playing violin","origami","space and rockets"],teen:["basketball","coding","photography","theater","poetry","painting","piano","track and field","debate","gardening","making music","volleyball","film editing","cooking"]},p_=["tacos","mac and cheese","pizza","fried rice","mango slices","pancakes","dumplings","hummus and pita","grilled cheese","pasta","chicken nuggets","cheeseburgers","sushi rolls","samosas","peanut butter sandwiches"],m_=["a dog named Biscuit","a cat named Pickles","a hamster named Nugget","two goldfish","a rabbit named Clover","a parrot named Mango","a turtle named Speedy","a gecko named Ziggy",null,null,null],g_=["become an astronaut","open a bakery","play pro soccer","write a graphic novel","be a marine biologist","build robots","become a teacher","direct movies","be a vet","design video games","be a chef","become a pilot","run for mayor","be a musician"],Gu=["always hums while working","carries a tiny notebook everywhere","says 'for real though' a lot","collects interesting rocks","never leaves without a snack","talks to plants","draws doodles on everything","counts steps in the hallway","makes up nicknames","loves puns","gets the hiccups when nervous","is always five minutes early"],__=["is secretly afraid of the dark","still sleeps with a stuffed bunny","writes songs nobody has heard","wants to try out for the school play but is nervous","can solve a Rubik's cube in under a minute","once got lost in the library for an hour","has a crush on someone in the art club","is saving up for a telescope","is learning a new language in secret","feels nervous about speaking in class"],Wu=["math","ela","science","history"],Xu=["k2","g35","g68","hs","g35","g68","k2","hs","g68","g35"],v_=(e,t)=>e==="k2"?["K","1","2"][t%3]:e==="g35"?["3","4","5"][t%3]:e==="g68"?["6","7","8"][t%3]:e==="hs"?["9","10","11","12"][t%4]:"Staff",gn=(e,t)=>t[Math.floor(e()*t.length)];function y_(e=48,t=20260930){let n=yh(t),i=new Set,s=new Set,r=[],a="",c="";for(let l=0;l<e;l++){let h=Xu[l%Xu.length],d,p=0;do d=xh(n,h),p++;while((i.has(bh(d))||d.hairStyle===a||d.hair===c)&&p<60);i.add(bh(d)),a=d.hairStyle,c=d.hair,(h==="k2"||h==="g35")&&(d.glasses=n()<.12?d.glasses:"none",d.top==="blazer"&&(d.top="hoodie"));let f=zu[l%zu.length],g=gn(n,Hu),_=`${f} ${g}`;for(;s.has(_);)g=gn(n,Hu),_=`${f} ${g}`;s.add(_),d.name=f;let x=h==="k2"||h==="g35"?"young":h==="g68"?"mid":"teen",u=Vu[x],m=[gn(n,u)];for(;m.length<3;){let P=gn(n,[...u,...Vu.mid]);m.includes(P)||m.push(P)}let E=gn(n,Wu),N=gn(n,Wu.filter(P=>P!==E)),M=f_[(l*3+Math.floor(n()*10))%10],T=Math.floor(n()*4),w=v_(h,T);r.push({id:l,key:`n${l}`,name:_,first:f,role:"student",age:h,grade:w,spec:d,look:{...Er(d,l),tag:!1},personality:M,interests:m,favSubject:E,hardSubject:N,food:gn(n,p_),pet:gn(n,m_),dream:gn(n,g_),quirk:gn(n,Gu),secret:gn(n,__),bestFriend:(l+1+Math.floor(n()*5))%e,rival:n()<.3?(l+7+Math.floor(n()*9))%e:null,bio:`${f} is in grade ${w}, loves ${m[0]} and ${m[1]}, and ${gn(n,Gu)}.`})}for(let l of r)l.bestFriend===l.id&&(l.bestFriend=(l.id+1)%e);return r}var qu=y_(56);var x_=e=>({...xh(yh(e.name?.length??5),"adult"),...e});function Yu(e,t,n,i,s,r,a={}){let c=x_({name:t.split(" ").pop(),age:"adult",...s}),l=t.split(" ").pop();return{id:e,key:`s${e}`,name:t,first:l,role:"staff",title:n,age:"adult",grade:"Staff",spec:c,look:{...Er(c,e),tag:!1},personality:r,interests:["helping students","coffee","crossword puzzles"],favSubject:i??"history",hardSubject:"math",food:"a good salad",pet:null,dream:"see every student find something they love",quirk:"keeps spare pencils in every pocket",secret:"still has their own first-grade report card",bestFriend:0,rival:null,bio:`${t} is ${n}.`,...a}}var b_={tanaka:"nerdy",ayrissa:"cheerful",okafor:"nerdy",obrien:"funny",haddad:"kind",park:"curious",larsen:"kind",raman:"dreamy"},S_={tanaka:"the math teacher",ayrissa:"the English teacher",okafor:"the chemistry and science teacher",obrien:"the history teacher",haddad:"the CarryingCareers teacher",park:"the computer science teacher",larsen:"the Life Lessons teacher",raman:"the English literature teacher"},M_={tanaka:"math",ayrissa:"ela",okafor:"science",obrien:"history",haddad:"careers",park:"science",larsen:"life",raman:"ela"};function T_(e){let t=e.short,n=Uo(e);return Yu(e.num,e.name,S_[e.id],M_[e.id],{skin:e.skin,hair:n.hair},b_[e.id],{look:n,faculty:e.id,quirk:e.mannerisms[0].charAt(0).toLowerCase()+e.mannerisms[0].slice(1),bio:`${e.name} teaches ${e.subject} (${e.room}). ${e.tone}`,first:t,interests:[e.subject.toLowerCase(),"coffee","helping students"]})}var Si=e=>T_(Mh.find(t=>t.id===e)),w_=[Yu(100,"Mr. Bello","the hall monitor",null,{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"crop",top:"vest",shirt:"#c98569",shirt2:"#fff6ea",bottom:"pants",pants:"#2b3a55",hat:"none",glasses:"none",packStyle:"none",brow:"thick",mouthStyle:"smile"},"kind"),Si("raman"),Si("tanaka"),Si("ayrissa"),Si("okafor"),Si("obrien"),Si("haddad"),Si("park"),Si("larsen")],Ps=e=>w_.find(t=>t.faculty===e),vb={math:Ps("tanaka"),ela:Ps("ayrissa"),science:Ps("okafor"),history:Ps("obrien"),careers:Ps("haddad"),life:Ps("larsen")};var Th="unify.social.v1";var E_=()=>({met:!1,fr:0,talks:0,lastDay:"",lastAt:0,topics:[],facts:{},log:[],quiz:{right:0,total:0},mood:0,helped:0,hurt:0,classNotes:[],overheard:[],seenInClass:0,called:0}),Fo=()=>({v:1,mem:{},profile:{name:"",avatar:No(),facts:{},stats:{talks:0,quizRight:0,quizTotal:0,hands:0},created:Date.now(),hasAvatar:!1}}),hn=Fo(),Zu=0,Rs=new Set;function Ju(){try{let e=JSON.parse(localStorage.getItem(Th)||"null");e&&e.v===1&&(hn={...Fo(),...e,profile:{...Fo().profile,...e.profile}},hn.profile.avatar={...No(),...hn.profile.avatar||{}})}catch{}}function Ar(){clearTimeout(Zu),Zu=setTimeout(()=>{try{localStorage.setItem(Th,JSON.stringify(hn))}catch{}},120)}Ju();try{addEventListener("storage",e=>{e.key===Th&&(Ju(),Rs.forEach(t=>t()))})}catch{}var ko={get profile(){return hn.profile},setProfile(e){hn.profile={...hn.profile,...e},Ar(),Rs.forEach(t=>t())},learn(e,t){hn.profile.facts[e]=t,Ar()},mem(e){let t=String(e);return hn.mem[t]??(hn.mem[t]=E_())},peek(e){return hn.mem[String(e)]},edit(e,t){t(ko.mem(e)),Ar(),Rs.forEach(n=>n())},friends(){return Object.entries(hn.mem).filter(([,e])=>e.met).map(([e,t])=>({id:e,mem:t})).sort((e,t)=>t.mem.fr-e.mem.fr)},onChange(e){return Rs.add(e),()=>Rs.delete(e)},reset(){hn=Fo(),Ar(),Rs.forEach(e=>e())},save:Ar};var $u=1.75/45,Oo=18,Bo=12,Cr=.95,Pr=1.55,wh=.2,Eh=-18,Ku=e=>{let t=e*2654435761>>>0;return t^=t>>>15,t%1e4/1e4},Ho={ayrissa:{key:"ayrissa",name:"Principal Ayrissa Canty",first:"Ayrissa",look:()=>{let e=Bu.ayrissa;return{...Uo(e),id:901,top:"blazer",shirt:"#3b2f6b",shirt2:"#f6f1e8",bottom:"pants",pants:"#2e2a3d",acc:"lanyard",lanyard:!0,shoes:"#2b2430"}}},marcus:{key:"marcus",name:"Principal Marcus Canty",first:"Marcus",look:()=>({id:902,age:"adult",skin:"#6b4430",hair:"#1c1512",style:"crop",shirt:"#2b3445",shirt2:"#f1f4f8",top:"blazer",bottom:"pants",pants:"#232a38",shoes:"#241c18",acc:"tie",accent:"#c8963e",eyeColor:"#2a1c12",browColor:"#17110e",brow:"thick",beard:"goatee",beardColor:"#1c1512",glasses:!1,bodyW:1.05,hScale:1.04,lanyard:!0,tag:!1})}},Fi=(e,t,n,i)=>{let s=document.createElement("canvas");s.width=e,s.height=t,n(s.getContext("2d"));let r=new ei(s);return r.colorSpace=Lt,r.anisotropy=4,i&&(r.wrapS=r.wrapT=os,r.repeat.set(...i)),r},zo=class{constructor(t){this.scene=new Js;this.camera=new Ht(52,1,.1,400);this.t=0;this.last=performance.now();this.stage=new Map;this.audience=[];this.mySeat=0;this.speaking=null;this.chatter=!1;this.cheer=!1;this.standing=!1;this.bowing=!1;this.held=new Set;this.screenCv=document.createElement("canvas");this.mode="bulletin";this.screenTitle="UNIFY ACADEMY";this.screenLines=[];this.newsCanvas=null;this.curtainOpen=1;this.curtainTarget=1;this.view="audience";this.yaw=0;this.pitch=0;this.zoom=1;this.camPos=new W(0,6,22);this.camLook=new W(0,5,-30);this.onSeatChosen=()=>{};this.ray=new cr;this.tween=null;this.hover=-1;this.frame=t=>{let n=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=n,this.curtainTarget=this.curtainTarget,this.curtainOpen+=(this.curtainTarget-this.curtainOpen)*Math.min(1,n*1.6);let i=1+(1-this.curtainOpen)*9;this.curtainL.scale.x=this.curtainR.scale.x=.35+(1-this.curtainOpen)*1.3,this.curtainL.position.x=-20+(1-this.curtainOpen)*10-(this.curtainL.scale.x-1)*10,this.curtainR.position.x=20-(1-this.curtainOpen)*10+(this.curtainR.scale.x-1)*10;for(let[l,h]of this.stage){let d=!1;if(h.target){let p=h.target.clone().sub(h.pos);p.y=0;let f=p.length();f<.08?(h.pos.copy(h.target),h.target=null):(p.normalize(),h.pos.addScaledVector(p,Math.min(f,5.2*n)),d=!0)}if(h.sprite.position.copy(h.pos),d){h.mat.map!==h.walkTex&&(h.mat.map=h.walkTex,h.mat.needsUpdate=!0);let p=1+Math.floor(this.t*8)%4;h.walkTex.offset.set(p/Tr,1-1/Mr.length),h.sprite.position.y+=Math.abs(Math.sin(this.t*9))*.06}else{h.mat.map!==h.tex&&(h.mat.map=h.tex,h.mat.needsUpdate=!0);let p=this.speaking===l||this.speaking==="both",f=0;p?f=[1,2,1,0,2,1][Math.floor(this.t*9)%6]:this.bowing?f=5:this.standing?f=4:this.gesture===l&&(f=this.gestureFrame),h.tex.offset.set(f/8,0)}}let s=this.camera.position.z,r=0;for(let l of[...this.audience,this.me]){let h=s<l.sprite.position.z-1?0:1,d=this.audFrame(),p=l,f=p.phase??(p.phase=Ku(r*7+3));if(r++,d===0&&!l.me&&(this.cheer?d=Math.sin(this.t*9+f*20)>-.2?3:0:this.chatter&&f<.4&&(d=(this.t*(.9+f)+f*9)%1<.55?3:0)),!l.me&&!this.tween){let g=p.by??(p.by=l.sprite.position.y);l.sprite.position.y=g+(this.cheer?Math.abs(Math.sin(this.t*7+f*12))*.35:0)}l.tex.offset.set(d/4,h===0?.5:0)}if(this.tween){let l=this.tween;l.t+=n/.7;let h=Math.min(1,l.t),d=h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;this.me.sprite.position.lerpVectors(l.from,l.to,d),this.me.sprite.position.y+=Math.sin(h*Math.PI)*.8,h>=1&&(this.tween=null)}let a=this.me.sprite.position;this.me.tagSprite.position.set(a.x,a.y+2.4,a.z),(this.mode==="news"||this.mode==="assembly")&&this.mode==="news"&&this.drawScreen(),this.updateCamera(n),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.frame)};this.gesture=null;this.gestureFrame=0;this.host=t;let n=this.renderer=new Ro({antialias:!0});n.setPixelRatio(Math.min(devicePixelRatio||1,2)),n.outputColorSpace=Lt,n.shadowMap.enabled=!1,t.appendChild(n.domElement),this.scene.background=new Qe("#171528"),this.scene.fog=new Zs("#171528",60,150),this.buildRoom(),this.buildStage(),this.buildSeats(),this.buildScreen(),this.buildPeople(),this.bind(),addEventListener("resize",()=>this.resize()),this.resize(),this.setView("audience",!0),requestAnimationFrame(this.frame)}resize(){let t=this.host.clientWidth||innerWidth,n=this.host.clientHeight||innerHeight;this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}buildRoom(){let t=this.scene,n=Fi(512,512,x=>{for(let u=0;u<16;u++){x.fillStyle=u%2?"#a8723f":"#b57c46",x.fillRect(0,u*32,512,32),x.fillStyle="rgba(60,30,10,.25)",x.fillRect(0,u*32,512,2);for(let m=0;m<14;m++)x.fillStyle=`rgba(70,40,15,${.04+Math.random()*.06})`,x.fillRect(Math.random()*512,u*32+4,40+Math.random()*120,2)}},[10,14]),i=new Ze(new zt(70,90),new gt({map:n,roughness:.8}));i.rotation.x=-Math.PI/2,i.position.set(0,0,-5),t.add(i);let s=Fi(256,256,x=>{x.fillStyle="#2d2a52",x.fillRect(0,0,256,256);for(let u=0;u<4;u++)x.fillStyle="#38346a",x.fillRect(u*64+6,8,52,240),x.strokeStyle="#c9a44e",x.lineWidth=2,x.strokeRect(u*64+6,8,52,240)},[14,1]),r=new gt({map:s,roughness:.95}),a=(x,u)=>{let m=new Ze(new zt(95,17),r);m.position.set(x,8.5,-5),m.rotation.y=u,t.add(m);let E=new Ze(new At(.4,3,95),new gt({color:"#6b4a2a"}));E.position.set(x-Math.sign(x)*.2,1.5,-5),t.add(E)};a(-35,Math.PI/2),a(35,-Math.PI/2);let c=new Ze(new zt(70,17),r);c.position.set(0,8.5,40),c.rotation.y=Math.PI,t.add(c);let l=new Ze(new zt(70,95),new gt({color:"#1d1a38",roughness:1}));l.rotation.x=Math.PI/2,l.position.set(0,17,-5),t.add(l);let h=new gt({color:"#5a3f27",roughness:.9});for(let x=-38;x<40;x+=8){let u=new Ze(new At(70,.7,.8),h);u.position.set(0,16.6,x),t.add(u)}let d=["#ffd98a","#ffb3a0","#a8d8ff","#cdb4ff"];for(let x=-30,u=0;x<36;x+=9,u++)for(let m of[-22,-8,8,22]){let E=new Ze(new sr(.55,10,8),new fn({color:d[(u+(m>0?1:0))%4]}));E.position.set(m,15.4,x),t.add(E)}t.add(new ar("#ffe9c9","#3a2b55",.85));let p=new hr("#fff1d6",.55);p.position.set(8,20,30),t.add(p),this.spotL=new _s("#fff0cf",90,70,.5,.5,1),this.spotL.position.set(-8,15,-10),this.spotL.target.position.set(-3,1.5,-33),t.add(this.spotL,this.spotL.target),this.spotR=new _s("#cfe4ff",90,70,.5,.5,1),this.spotR.position.set(8,15,-10),this.spotR.target.position.set(3,1.5,-33),t.add(this.spotR,this.spotR.target);let f=new gt({color:"#8e2f3a",roughness:1});for(let x of[0,-(Bo*Cr+3.2),Bo*Cr+3.2]){let u=new Ze(new zt(x===0?2.4:1.8,Oo*Pr+6),f);u.rotation.x=-Math.PI/2,u.position.set(x,.02+0,Eh+Oo*Pr/2-.5),t.add(u)}let g=new Ze(new At(4.2,5.4,.3),new gt({color:"#6b4a2a"}));g.position.set(-24,2.7,39.8),t.add(g);let _=new Ze(new zt(5,1),new fn({map:Fi(512,100,x=>{x.fillStyle="#e8433a",x.fillRect(0,0,512,100),x.fillStyle="#fff",x.font="700 54px sans-serif",x.textAlign="center",x.fillText("\u25B2 UP TO SCHOOL",256,70)})}));_.position.set(-24,6.2,39.6),_.rotation.y=Math.PI,t.add(_);for(let x=0;x<6;x++){let u=new Ze(new At(3.6,.28,1.1+x*0),new gt({color:"#c9a36b"}));u.position.set(-24,.14+x*.28,38.4-x*0)}}buildStage(){let t=this.scene,n=new Ze(new At(40,1.5,14),new gt({color:"#6b4426",roughness:.75}));n.position.set(0,.75,-34),t.add(n);let i=new Ze(new At(40.4,.25,.5),new gt({color:"#c9a44e",metalness:.4,roughness:.4}));i.position.set(0,1.45,-26.9),t.add(i);for(let x=0;x<3;x++){let u=new Ze(new At(5,.5,.9),new gt({color:"#c9a36b"}));u.position.set(0,.25+x*.5-0,-26.2+(1-x)*0+x*-.5),u.scale.y=1,t.add(u)}let s=new Ze(new At(40,2.2,1),new gt({color:"#7a1f2b",roughness:.8}));s.position.set(0,15.2,-27.3),t.add(s);let r=new Ze(new At(40.2,.3,1.1),new gt({color:"#d9b25a",metalness:.5,roughness:.35}));r.position.set(0,14,-27.3),t.add(r);for(let x of[-20.5,20.5]){let u=new Ze(new At(1.4,17,1.4),new gt({color:"#7a5230",roughness:.8}));u.position.set(x,8.5,-27.3),t.add(u)}let a=new Ze(new zt(42,17),new gt({color:"#2a2650"}));a.position.set(0,8.5,-40.9),t.add(a);let c=Fi(256,64,x=>{for(let u=0;u<16;u++){let m=x.createLinearGradient(u*16,0,u*16+16,0);m.addColorStop(0,"#5e1520"),m.addColorStop(.5,"#b32a3c"),m.addColorStop(1,"#5e1520"),x.fillStyle=m,x.fillRect(u*16,0,16,64)}},[1,1]),l=new gt({map:c,roughness:.9,side:ln});this.curtainL=new Ze(new zt(20,14),l),this.curtainR=new Ze(new zt(20,14),l),this.curtainL.position.set(-20,7.4,-26.9),this.curtainR.position.set(20,7.4,-26.9),t.add(this.curtainL,this.curtainR);let h=new kn,d=new Ze(new At(1.6,2.2,1),new gt({color:"#7a5230",roughness:.7}));d.position.y=1.1,h.add(d);let p=new Ze(new At(1.9,.12,1.2),new gt({color:"#9a6b3c"}));p.position.y=2.25,h.add(p);let f=new Ze(new Ri(.03,.03,.8,6),new gt({color:"#333"}));f.position.set(0,2.7,.15),f.rotation.x=.4,h.add(f);let g=new Ze(new zt(.9,.9),new fn({map:Fi(128,128,x=>{x.fillStyle="#3b2f6b",x.beginPath(),x.arc(64,64,60,0,7),x.fill(),x.fillStyle="#f6c85f",x.font="700 54px sans-serif",x.textAlign="center",x.fillText("U",64,84)}),transparent:!0}));g.position.set(0,1.2,.52),h.add(g),h.position.set(0,1.5,-32),t.add(h);let _=(x,u)=>{let m=new kn,E=new Ze(new Ri(.05,.05,6.6,6),new gt({color:"#d9b25a",metalness:.6}));E.position.y=3.3,m.add(E);let N=new Ze(new zt(3.2,2.1),new fn({side:ln,map:Fi(320,210,M=>{if(u){for(let T=0;T<13;T++)M.fillStyle=T%2?"#fff":"#b22234",M.fillRect(0,T*16.15,320,16.2);M.fillStyle="#3c3b6e",M.fillRect(0,0,140,113),M.fillStyle="#fff";for(let T=0;T<5;T++)for(let w=0;w<6;w++)M.fillRect(10+w*22,8+T*20,5,5)}else M.fillStyle="#3b2f6b",M.fillRect(0,0,320,210),M.fillStyle="#f6c85f",M.font="700 120px sans-serif",M.textAlign="center",M.fillText("U",160,140)})}));N.position.set(1.7,5.4,0),m.add(N),m.position.set(x,1.5,-36.5),t.add(m)};_(-6.5,!0),_(6.5,!1);for(let x of[-14,-7,0,7,14]){let u=new Ze(new Ri(.28,.4,.6,8),new fn({color:"#fff6dd"}));u.position.set(x,13.3,-30),t.add(u)}}buildSeats(){this.seats=[];let t=Bo*Cr;for(let c=0;c<Oo;c++)for(let l of[-1,1])for(let h=0;h<Bo;h++)this.seats.push({x:l*(1.9+h*Cr+Cr/2),y:c*wh,z:Eh+c*Pr,row:c,col:l*(h+1)});let n=this.seats.length;this.baseMesh=new ps(new At(.8,.28,.8),new gt({roughness:.8}),n),this.backMesh=new ps(new At(.8,.95,.16),new gt({roughness:.8}),n);let i=new mt,s=new Qe,r=["#8e1f33","#9c2438","#841c2f","#a02a40"];this.seats.forEach((c,l)=>{i.makeTranslation(c.x,c.y+.55,c.z),this.baseMesh.setMatrixAt(l,i),s.set(r[l*7%4]),this.baseMesh.setColorAt(l,s),i.makeTranslation(c.x,c.y+1.05,c.z+.38),this.backMesh.setMatrixAt(l,i),this.backMesh.setColorAt(l,s)}),this.scene.add(this.baseMesh,this.backMesh);let a=new gt({color:"#4a3320",roughness:.9});for(let c=0;c<Oo;c++){let l=new Ze(new At(2*t+5.4,c*wh+.05,Pr),a);l.position.set(0,c*wh/2,Eh+c*Pr),l.scale.y=1,this.scene.add(l),l.material=new gt({color:c%2?"#5a3f28":"#664630",roughness:.9})}}buildScreen(){let t=this.screenCv;t.width=1920,t.height=1e3,this.screenTex=new ei(t),this.screenTex.colorSpace=Lt,this.screenTex.anisotropy=4;let n=new Ze(new At(25.2,13.4,.5),new gt({color:"#14121f",roughness:.5}));n.position.set(0,9.2,-40.4),this.scene.add(n);let i=new Ze(new zt(24,12.5),new fn({map:this.screenTex,toneMapped:!1}));i.position.set(0,9.2,-40.1),this.scene.add(i),this.drawScreen()}setScreen(t,n,i){this.mode=t,n!=null&&(this.screenTitle=n),i&&(this.screenLines=i),this.drawScreen()}drawScreen(){let t=this.screenCv.getContext("2d"),n=1920,i=1e3;if(this.mode==="news"&&this.newsCanvas)try{t.drawImage(this.newsCanvas,0,0,n,i),this.screenTex.needsUpdate=!0;return}catch{}let s=t.createLinearGradient(0,0,n,i);s.addColorStop(0,"#1c1650"),s.addColorStop(.5,"#34246e"),s.addColorStop(1,"#7a2a6a"),t.fillStyle=s,t.fillRect(0,0,n,i);for(let h=0;h<60;h++)t.fillStyle=`hsla(${h*37%360},90%,70%,.12)`,t.beginPath(),t.arc(h*331%n,h*197%i,20+h%7*12,0,7),t.fill();t.textAlign="center",t.fillStyle="#f6c85f",t.font="700 72px 'Trebuchet MS',sans-serif",t.fillText("UNIFY ACADEMY",n/2,130),t.fillStyle="#fff",t.font="700 120px 'Trebuchet MS',sans-serif";let r=this.screenTitle.split(" "),a="",c=330;for(let h of r){let d=a?a+" "+h:h;t.measureText(d).width>n-240&&a?(t.fillText(a,n/2,c),a=h,c+=130):a=d}t.fillText(a,n/2,c),t.font="500 56px 'Trebuchet MS',sans-serif",t.fillStyle="#e9e2ff";let l=c+120;for(let h of this.screenLines.slice(0,7)){let d=h.length>70?h.slice(0,68)+"\u2026":h;t.fillText(d,n/2,l),l+=80}this.screenTex.needsUpdate=!0}sprite(t,n){let i=new Pi({map:t,transparent:!0}),s=new fs(i);return s.center.set(.5,wr/Pn),s.scale.set(Cn/ni*$u*n,Pn/ni*$u*n,1),this.scene.add(s),{sp:s,mat:i}}bakeAud(t){let n=[{sitting:!0,arms:{R:[2,-11],L:[-2,-11]}},{arms:{R:[3,-19.5],L:[-9,-11]}},{arms:{R:[2,-13.5],L:[-2,-13.5]},hdy:1.4,tilt:.1},{sitting:!0,mouth:.5,arms:{R:[2,-11],L:[-2,-11]}}],i=document.createElement("canvas");i.width=Cn*n.length,i.height=Pn*2;let s=i.getContext("2d");["down","up"].forEach((a,c)=>n.forEach((l,h)=>{s.save(),s.translate(h*Cn+Cn/2,c*Pn+Pn-wr),s.scale(ni,ni),s.shadowColor="rgba(52,34,46,.35)",s.shadowBlur=2.2,s.shadowOffsetY=1.2,Ui(s,0,0,{...t,dir:a,moving:!1,walk:0,turn:0,...l},0),s.restore()}));let r=new ei(i);return r.colorSpace=Lt,r.repeat.set(1/n.length,1/2),r.anisotropy=4,r}bakeStage(t){let n=[{},{mouth:.4},{mouth:.9},{arms:{R:[12,-31],L:[-9,-11]}},{arms:{R:[3,-19.5],L:[-9,-11]}},{arms:{R:[2,-13.5],L:[-2,-13.5]},hdy:1.6,tilt:.1},{mouth:.3,arms:{R:[13,-21],L:[-9,-11]}},{mouth:.5,arms:{R:[12,-22],L:[-12,-22]}}],i=document.createElement("canvas");i.width=Cn*n.length,i.height=Pn;let s=i.getContext("2d");n.forEach((a,c)=>{s.save(),s.translate(c*Cn+Cn/2,Pn-wr),s.scale(ni,ni),s.shadowColor="rgba(255,244,205,.9)",s.shadowBlur=9,Ui(s,0,0,{...t,dir:"down",moving:!1,walk:0,turn:0,...a},0),s.shadowColor="rgba(52,34,46,.35)",s.shadowBlur=2.2,s.shadowOffsetY=1.2,Ui(s,0,0,{...t,dir:"down",moving:!1,walk:0,turn:0,...a},0),s.restore()});let r=new ei(i);return r.colorSpace=Lt,r.repeat.set(1/n.length,1),r.anisotropy=4,r}buildPeople(){for(let p of["ayrissa","marcus"]){let f=Ho[p].look(),g=this.bakeStage(f),_=new ei(Uu(f));_.colorSpace=Lt,_.repeat.set(1/Tr,1/Mr.length);let{sp:x,mat:u}=this.sprite(g,Do.adult*(f.hScale??1)),m=new W(p==="ayrissa"?-2.6:2.6,1.5,-33.4);this.stage.set(p,{sprite:x,mat:u,tex:g,walkTex:_,pos:new W(p==="ayrissa"?-26:26,1.5,-33.4),target:m,frame:0,dir:0}),x.position.copy(this.stage.get(p).pos)}let t=qu.slice(0,36).map(p=>({look:p.look,name:p.first,h:Do[p.age]*(p.look.hScale??1)})),n=[];for(let p=0;p<17;p++)for(let f=0;f<this.seats.length;f++)this.seats[f].row===p&&Ku(f*13+p)<.7&&n.push(f);let i=this.seats.findIndex(p=>p.row===8&&p.col===-3);this.mySeat=i,n.filter(p=>p!==i).slice(0,150).forEach((p,f)=>{let g=t[f%t.length],_={...g.look,shirt:f>=t.length?["#e8789a","#4f91c7","#88b89a","#eab94e","#b8a8da"][f%5]:g.look.shirt},x=this.bakeAud(_),{sp:u,mat:m}=this.sprite(x,g.h),E=this.seats[p];u.position.set(E.x,E.y+.4,E.z+.1),this.audience.push({sprite:u,mat:m,tex:x,seat:p,scaleH:g.h})});let s={...Er(ko.profile.avatar,11)},r=this.bakeAud(s),{sp:a,mat:c}=this.sprite(r,Do[s.age??"hs"]*(s.hScale??1)),l=this.seats[i];a.position.set(l.x,l.y+.4,l.z+.1),this.me={sprite:a,mat:c,tex:r,seat:i,scaleH:1,me:!0,name:ko.profile.name||"You"};let h=Fi(256,64,p=>{p.fillStyle="#F3E7CF",p.beginPath(),p.roundRect(4,8,248,48,20),p.fill(),p.fillStyle="#4A3B3F",p.font="700 30px 'Trebuchet MS',sans-serif",p.textAlign="center",p.fillText((this.me.name||"You").slice(0,12),128,42)}),d=new fs(new Pi({map:h,transparent:!0,depthTest:!1}));d.scale.set(1.4,.35,1),d.position.set(l.x,l.y+2.6,l.z),this.scene.add(d),this.me.tagSprite=d}sitAt(t){let n=this.seats[t];if(!n||t===this.mySeat)return;let i=this.me.sprite.position.clone(),s=new W(n.x,n.y+.4,n.z+.1);this.tween={from:i,to:s,t:0},this.mySeat=t,this.onSeatChosen(t)}walkOn(){for(let[t,n]of this.stage)n.pos.set(t==="ayrissa"?-26:26,1.5,-33.4),n.target=new W(t==="ayrissa"?-2.6:2.6,1.5,-33.4)}audFrame(){return this.standing?this.bowing?2:1:0}setView(t,n=!1){this.view=t,this.yaw=0,this.pitch=0,this.zoom=1,n&&this.updateCamera(1,!0)}updateCamera(t,n=!1){let i,s,r=this.yaw,a=this.pitch;if(this.view==="audience"){let f=this.seats[this.mySeat];i=new W(f.x,f.y+2.9,f.z+3.2),s=new W(0,6.5,-34)}else this.view==="wide"?(i=new W(0,11,36),s=new W(0,5,-30)):this.view==="stage"?(i=new W(0,4.2,-17),s=new W(0,4.6,-36)):this.view==="balcony"?(i=new W(24,14,30),s=new W(0,3,-22)):(i=new W(0,3.2,-26),s=new W(0,2.5,10));let c=s.clone().sub(i),l=c.length(),h=c.normalize(),d=new Tn(a,r,0,"YXZ");h.applyEuler(d),s=i.clone().addScaledVector(h,l),this.zoom!==1&&i.lerp(s,1-this.zoom);let p=n?1:Math.min(1,t*4);this.camPos.lerp(i,p),this.camLook.lerp(s,p),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook)}bind(){let t=this.renderer.domElement,n=!1,i=0,s=0,r=0,a=0,c=new Map,l=0;t.addEventListener("pointerdown",d=>{if(t.setPointerCapture(d.pointerId),c.set(d.pointerId,{x:d.clientX,y:d.clientY}),n=!0,i=d.clientX,s=d.clientY,r=performance.now(),a=0,c.size===2){let[p,f]=[...c.values()];l=Math.hypot(p.x-f.x,p.y-f.y)}}),t.addEventListener("pointermove",d=>{if(c.has(d.pointerId)&&c.set(d.pointerId,{x:d.clientX,y:d.clientY}),c.size===2){let[p,f]=[...c.values()],g=Math.hypot(p.x-f.x,p.y-f.y);l&&(this.zoom=Math.max(.35,Math.min(1.6,this.zoom*(l/g)))),l=g;return}if(n){let p=d.clientX-i,f=d.clientY-s;a+=Math.abs(p)+Math.abs(f),this.yaw=Math.max(-1.1,Math.min(1.1,this.yaw+p*.004)),this.pitch=Math.max(-.5,Math.min(.5,this.pitch+f*.003)),i=d.clientX,s=d.clientY}else this.hoverAt(d.clientX,d.clientY)});let h=d=>{c.delete(d.pointerId),c.size||(l=0,n&&a<8&&performance.now()-r<500&&this.tap(d.clientX,d.clientY),n=!1)};t.addEventListener("pointerup",h),t.addEventListener("pointercancel",h),t.addEventListener("wheel",d=>{d.preventDefault(),this.zoom=Math.max(.35,Math.min(1.6,this.zoom*(1+d.deltaY*.001)))},{passive:!1})}pick(t,n){let i=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new qe((t-i.left)/i.width*2-1,-((n-i.top)/i.height)*2+1),this.camera);let s=this.ray.intersectObject(this.baseMesh,!1);return s.length?s[0].instanceId??-1:-1}hoverAt(t,n){let i=this.pick(t,n);this.renderer.domElement.style.cursor=i>=0?"pointer":"default",this.hover=i}tap(t,n){let i=this.pick(t,n);i>=0&&this.sitAt(i)}curtains(t){this.curtainTarget=t?1:0}};var Vo=["math","ela","science","history","careers","life"],Go={math:"Math",ela:"ELA",science:"Science",history:"History",careers:"CarryingCareers",life:"Life Lessons"},Pb=[{id:"morning",label:"Morning",min:9*60},{id:"noon",label:"Noon",min:12*60+30},{id:"evening",label:"Evening",min:17*60+30}],Qu="unify.progress.v1",ju="unify.assess.on",jt=()=>{try{let e=JSON.parse(localStorage.getItem(Qu)||"{}");return{idx:e.idx||{},done:e.done||{},level:e.level||{},extra:e.extra||{},assess:e.assess,scores:e.scores||{},days:e.days||{}}}catch{return{idx:{},done:{},level:{},extra:{},scores:{},days:{}}}},ki=e=>{try{let t=Object.keys(e.days).sort().slice(-14);e.days=Object.fromEntries(t.map(n=>[n,e.days[n]])),localStorage.setItem(Qu,JSON.stringify(e)),window.dispatchEvent(new Event("unify:progress"))}catch{}},Rr=(e=new Date)=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,A_=e=>{let t=2166136261;for(let n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0},C_=e=>()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296},Wo=e=>{let t=Math.floor(e/60),n=e%60;return`${(t+11)%12+1}:${String(n).padStart(2,"0")} ${t<12?"AM":"PM"}`};function ed(e,t=new Date){let n=C_(A_(Rr(t)+e)),i=[],s=0;for(;i.length<5&&s++<400;){let r=480+Math.floor(n()*125)*5;r<=18*60+30&&i.every(a=>Math.abs(a-r)>=40)&&i.push(r)}return i.sort((r,a)=>r-a)}var td={get assessOn(){try{return localStorage.getItem(ju)==="1"}catch{return!1}},set assessOn(e){try{localStorage.setItem(ju,e?"1":"0")}catch{}},index(e,t){return(jt().idx[e]??Math.floor(Date.now()/864e5))%Math.max(1,t)},assessment:()=>jt().assess??null,saveAssessment(e){let t=jt();t.assess=e,ki(t)},clearAssessment(){let e=jt();delete e.assess,e.extra={},ki(e)},extraDone:e=>jt().extra[e]??[],completeExtra(e,t){let n=jt(),i=n.extra[e]??=[];i.includes(t)||i.push(t),ki(n)},complete(e,t,n){let i=jt(),s=i.done[e]??=[];s.includes(t)||s.push(t);let r=i.idx[e]??Math.floor(Date.now()/864e5)%Math.max(1,n);return i.idx[e]=(r+1)%Math.max(1,n),ki(i),i.idx[e]},doneCount:e=>(jt().done[e]??[]).length,recordScore(e,t,n){let i=jt(),s=i.scores[e]??[0,0];i.scores[e]=[s[0]+t,s[1]+n],ki(i)},scores:e=>jt().scores[e]??[0,0],daysActive:()=>Object.keys(jt().days).length,pick(e,t,n,i=!1){let s=jt(),r=Rr();(s.days[r]??={})[e+(i?"-extra":"")]={min:t,kind:n,at:Date.now()},ki(s)},unpick(e,t=!1){let n=jt(),i=Rr();n.days[i]&&delete n.days[i][e+(t?"-extra":"")],ki(n)},today(){let e=jt().days[Rr()]??{};return Object.keys(e).map(t=>({subject:t.replace("-extra",""),min:e[t].min,extra:t.endsWith("-extra")})).sort((t,n)=>t.min-n.min)},pickedFor(e,t=!1){return jt().days[Rr()]?.[e+(t?"-extra":"")]?.min??null}};var nd=[];function P_(){let e=[{tag:"SCHOOL BULLETIN",title:"Welcome to UNIFY Academy",sub:"Check the class-times board on the plaza to book today's sessions."}];for(let t of Vo.slice(0,4))e.push({tag:"TODAY'S CLASSES",title:`${Go[t]} sessions`,sub:ed(t).map(Wo).join("  \xB7  ")});return e.push({tag:"REMINDER",title:"Visit your locker",sub:"Your grades and report card are inside. Press L at any locker."}),e}var id=()=>nd.length?nd:P_();var sd=/(female|zira|samantha|karen|victoria|susan|hazel|aria|jenny|linda|moira|tessa|fiona|allison|ava|serena|catherine|kate|emma|joanna|salli|kendra|kimberly|ivy|libby|sonia)/i,rd=/(\bmale\b|david|mark|daniel|alex|fred|george|guy|ryan|james|tom|oliver|arthur|aaron|matthew|joey|justin|brian|eric|gordon|thomas|rishi)/i,Xo=(()=>{try{return window.speechSynthesis??null}catch{return null}})(),R_=()=>{try{return(Xo?.getVoices()??[]).filter(e=>/^en/i.test(e.lang))}catch{return[]}},I_=e=>{let t=R_();if(!t.length)return null;let n=e==="ayrissa"?i=>sd.test(i.name)&&!rd.test(i.name):i=>rd.test(i.name)&&!sd.test(i.name);return t.find(n)??t[e==="ayrissa"?0:Math.min(1,t.length-1)]},qo=()=>{try{return localStorage.getItem("unify.assembly.prayer")!=="0"}catch{return!0}},ad=e=>{try{localStorage.setItem("unify.assembly.prayer",e?"1":"0")}catch{}},od=()=>{try{return localStorage.getItem("unify.assembly.day")}catch{return null}},Ah=()=>{try{localStorage.setItem("unify.assembly.day",new Date().toDateString())}catch{}},cn=(e,t,n,i={})=>new Promise(s=>{let r=e.A,a=i.speaker??(t==="both"?"ayrissa":t),c=i.name??(t==="both"?"Principals Ayrissa and Marcus Canty":Ho[t].name);r.speaking=t,r.gesture=null,i.gesture!=null&&(r.gesture=a,r.gestureFrame=i.gesture),e.caption(c,n);let l=Math.max(2e3,n.length*58),h=()=>{d||(d=!0,clearTimeout(p),r.speaking=null,r.gesture=null,setTimeout(s,280))},d=!1,p=setTimeout(h,l+4e3);if(e.soundOn()&&Xo)try{let f=new SpeechSynthesisUtterance(n),g=I_(a);g&&(f.voice=g),f.pitch=a==="ayrissa"?1.08:.82,f.rate=t==="both"?.88:.97,f.onend=f.onerror=h,Xo.speak(f);let _=setTimeout(()=>{Xo.speaking||setTimeout(h,l)},700);return}catch{}setTimeout(h,l)}),_n=e=>new Promise(t=>setTimeout(t,e));async function ld(e){let t=e.A,n=()=>!e.cancelled();if(t.setScreen("assembly","Good morning, UNIFY Academy",["Morning assembly"]),t.curtains(!0),t.walkOn(),await _n(4200),!n()||(await cn(e,"marcus","Good morning, UNIFY Academy! Welcome to morning assembly.",{gesture:3}),!n())||(await cn(e,"ayrissa","Thank you, everyone, for being here. Today we start the way we always do, together.",{gesture:7}),!n())||(t.setScreen("assembly","The Pledge of Allegiance",["Please rise and face the flag","Right hand over your heart"]),await cn(e,"ayrissa","Please rise, face the flag, and place your right hand over your heart.",{gesture:6}),!n()))return!1;t.standing=!0,await _n(900);let i=["I pledge allegiance to the Flag of the United States of America,","and to the Republic for which it stands,","one Nation under God, indivisible,","with liberty and justice for all."];for(let a of i)if(t.setScreen("assembly","The Pledge of Allegiance",[a]),await cn(e,"both",a),!n())return!1;if(t.standing=!1,await _n(600),qo()){if(t.setScreen("assembly","A moment of prayer",["Please bow your heads"]),await cn(e,"marcus","Please remain respectful, and bow your heads for a moment of prayer. Thank you for joining us.",{gesture:7}),!n())return!1;t.standing=!0,t.bowing=!0,await _n(700);let a=["Our Father, who art in heaven, hallowed be thy name;","thy kingdom come, thy will be done, on earth as it is in heaven.","Give us this day our daily bread,","and forgive us our trespasses, as we forgive those who trespass against us;","and lead us not into temptation, but deliver us from evil.","For thine is the kingdom, and the power, and the glory, forever. Amen."];for(let c of a)if(t.setScreen("assembly","The Lord's Prayer",[c]),await cn(e,"both",c),!n())return!1;t.bowing=!1,t.standing=!1,await _n(500)}let s=[];for(let a of Vo){let c=td.pickedFor(a,!1);c!==null&&s.push(`${Go[a]} at ${Wo(c)}`)}if(t.setScreen("assembly","Today at UNIFY",s.length?s:["Pick your class times on the bulletin board by the front door"]),await cn(e,"marcus",s.length?`Here is today's schedule for our scholars. ${s.join(". ")}.`:"Please remember to pick your class times on the bulletin board by the front door.",{gesture:6}),!n())return!1;{let a=[];try{let c=JSON.parse(localStorage.getItem("unify.opendoor.v1")||"null");Array.isArray(c)&&(a=c.slice(0,3))}catch{}if(a.length){let c=a.map(l=>l.title);if(t.setScreen("assembly","The Open Door",c),await cn(e,"ayrissa",`Down the west hall, The Open Door has classes taught by our families and guests today: ${c.join(", ")}. Stop by and learn something new.`,{gesture:6}),!n())return!1}}let r=id()[0];return r&&(t.setScreen("assembly","In the news today",[r.title.slice(0,90)]),await cn(e,"ayrissa",`In the news today: ${r.title}`,{gesture:6}),!n())||(t.setScreen("assembly","Have a wonderful day of learning!",["Walk to your first class"]),await cn(e,"ayrissa","We are so proud of you. Be kind, be curious, and have a wonderful day of learning.",{gesture:3}),!n())?!1:(await cn(e,"marcus","Assembly is dismissed. Off to class!",{gesture:3}),Ah(),!0)}var hd=[{id:"hare",title:"The Tortoise and the Hare",kind:"play",blurb:"A classic fable about slow and steady.",acts:[{title:"Act 1: The Bragging",set:["A sunny meadow","Morning"],cues:[{who:"marcus",role:"Narrator",text:"Once upon a time, in a sunny meadow, lived a very fast hare and a very slow tortoise.",gesture:7},{who:"ayrissa",role:"Hare",text:"I am the fastest creature alive! Nobody can catch me. Not even you, Tortoise!",gesture:3},{who:"marcus",role:"Tortoise",text:"Perhaps not. But I would happily race you, friend. Slow and steady is a fine way to travel.",gesture:6}]},{title:"Act 2: The Race",set:["The long winding road","Noon"],cues:[{who:"ayrissa",role:"Hare",text:"Ha! Look at him go. Which is to say, not at all. I will take a little nap under this tree.",gesture:3},{who:"marcus",role:"Narrator",text:"And so the hare dozed off, while the tortoise kept walking. One step, and another, and another.",gesture:7},{who:"marcus",role:"Tortoise",text:"Almost there. Do not stop. One more step.",gesture:6}]},{title:"Act 3: The Finish",set:["The finish line","Evening"],cues:[{who:"ayrissa",role:"Hare",text:"Oh no! I overslept! Wait for me!",gesture:3},{who:"marcus",role:"Narrator",text:"But it was too late. The tortoise crossed the finish line first, and the whole meadow cheered.",gesture:7},{who:"both",role:"The Cast",text:"The moral of the story: slow and steady wins the race."}]}]},{id:"signing",title:"Founders' Day: Signing the Constitution",kind:"reenactment",blurb:"A history reenactment of the summer of 1787.",acts:[{title:"Scene 1: Philadelphia, 1787",set:["Independence Hall","Summer, 1787"],cues:[{who:"marcus",role:"Narrator",text:"In the hot summer of 1787, delegates from the states gathered in Philadelphia. The old rules were not working, and they needed a stronger plan for the new country.",gesture:7},{who:"ayrissa",role:"Delegate",text:"We need a government that is strong enough to work, but fair enough to protect everyone's rights.",gesture:6}]},{title:"Scene 2: The Great Compromise",set:["Debate in the hall","Weeks of argument"],cues:[{who:"marcus",role:"Delegate",text:"Big states want more votes, small states want an equal voice. We are stuck.",gesture:6},{who:"ayrissa",role:"Delegate",text:"Then let us build two chambers. One by population, one equal for every state. Everyone gets heard.",gesture:3}]},{title:"Scene 3: We the People",set:["September 17, 1787","The signing"],cues:[{who:"marcus",role:"Narrator",text:"On September seventeenth, thirty-nine delegates signed the new Constitution.",gesture:7},{who:"both",role:"The Cast",text:"We the People of the United States, in order to form a more perfect Union."}]}]},{id:"garden",title:"The Little Seed (a musical)",kind:"musical",blurb:"A sing-along about growing, with the whole school.",acts:[{title:"Song 1: Dig, Dig, Dig",set:["La la la","Everybody clap along"],cues:[{who:"ayrissa",role:"Gardener",text:"Dig, dig, dig, a little hole. Plant a seed and watch it grow!",gesture:3},{who:"marcus",role:"Gardener",text:"Sun, sun, sun, and drops of rain. Be patient, little seed!",gesture:7}]},{title:"Song 2: Up, Up, Up",set:["Reach for the sky","Everybody stand and stretch"],cues:[{who:"both",role:"The Chorus",text:"Up, up, up, it reaches for the light. Roots go down and leaves go out. Now it's tall and bright!"},{who:"ayrissa",role:"Gardener",text:"And every one of you started out as a little seed too. Keep growing!",gesture:3}]}]},{id:"fair",title:"Science Fair Showcase",kind:"showcase",blurb:"Student discoveries, explained out loud.",acts:[{title:"Exhibit 1: Plants and Light",set:["How do plants eat?","Photosynthesis"],cues:[{who:"ayrissa",role:"Presenter",text:"Our experiment: do plants grow toward light? We put two beans in a box with a window cut in one side.",gesture:6},{who:"marcus",role:"Presenter",text:"After two weeks, the bean near the window bent toward the light. Plants reach for the sun to make their food.",gesture:3}]},{title:"Exhibit 2: The Bouncing Ball",set:["Energy in motion","Potential to kinetic"],cues:[{who:"marcus",role:"Presenter",text:"We dropped the ball from three different heights. The higher it starts, the more energy it has, and the higher it bounces back.",gesture:6},{who:"both",role:"The Cast",text:"Thank you for visiting our science fair. Keep asking questions!"}]}]}],cd=(e=new Date)=>hd[Math.floor(e.getTime()/864e5)%hd.length],Ch=(e=new Date)=>e.getDay()===5;async function ud(e,t){let n=e.A,i=()=>!e.cancelled();if(n.chatter=!1,n.cheer=!1,n.standing=!1,n.bowing=!1,n.curtains(!1),n.walkOn(),n.setScreen("event",t.title,["Tonight on stage",t.blurb]),e.caption("Showtime",`${t.title}. ${t.blurb}`),n.chatter=!0,await _n(3400),!i()||(n.chatter=!1,n.curtains(!0),await _n(2400),!i()))return!1;for(let s of t.acts){if(n.setScreen("event",s.title,s.set),e.caption("Stage",s.title),await _n(1500),!i())return!1;for(let r of s.cues)if(await cn(e,r.who,r.text,{gesture:r.gesture,name:r.role}),!i())return!1;await _n(500)}return n.setScreen("event","Thank you!",["Bow, everyone",t.title]),n.bowing=!1,n.cheer=!0,e.caption("The audience","Everybody cheers and claps!"),await _n(4500),n.cheer=!1,i()?(n.curtains(!1),await _n(1600),!0):!1}var Dt=e=>document.getElementById(e),Gt=new zo(Dt("game"));window.__aud=Gt;var Oi=!0,In=!1,Xn=!1,Ph=null,Lr=Dt("cap"),L_=Dt("capName"),D_=Dt("capText"),Ir=(e,t)=>{Lr.classList.add("show"),L_.textContent=e,D_.textContent=t},Yo=e=>{try{parent.postMessage(e,"*")}catch{}};document.querySelectorAll("[data-v]").forEach(e=>e.onclick=()=>{Gt.setView(e.dataset.v),document.querySelectorAll("[data-v]").forEach(t=>t.classList.toggle("on",t===e))});Dt("bSound").onclick=()=>{if(Oi=!Oi,Dt("bSound").textContent=Oi?"\u{1F50A} Sound on":"\u{1F507} Sound off",!Oi)try{speechSynthesis.cancel()}catch{}};var dd=Dt("bPrayer"),fd=()=>{dd.textContent=qo()?"Prayer: on":"Prayer: off"};fd();dd.onclick=()=>{ad(!qo()),fd()};Dt("bLeave").onclick=()=>{In=!0;try{speechSynthesis.cancel()}catch{}Yo({type:"unify:stage-exit"})};function N_(){if(Ph)return;let e=document.createElement("iframe");e.src="news.html?embed=1",e.allow="geolocation; autoplay",e.style.cssText="position:fixed;left:0;top:0;width:960px;height:540px;opacity:.01;pointer-events:none;z-index:-1;border:0",document.body.appendChild(e),Ph=e,e.addEventListener("load",()=>{let t=setInterval(()=>{try{let n=e.contentDocument,i=n.getElementById("cv"),s=n.getElementById(Oi?"goSound":"goSilent");i&&s&&(clearInterval(t),s.click(),Gt.newsCanvas=i)}catch{}},400)})}function Is(){In=!0;try{speechSynthesis.cancel()}catch{}Gt.speaking=null,Gt.standing=!1,Gt.bowing=!1,Lr.classList.remove("show"),N_(),Gt.setScreen("news"),Dt("ask").classList.add("show"),Dt("bAssembly").hidden=!1}Dt("bNews").onclick=Is;Dt("askForm").onsubmit=e=>{e.preventDefault();let t=Dt("askIn"),n=t.value.trim();n&&(Is(),setTimeout(()=>{try{Ph.contentWindow.__unify?.ask?.(n)}catch{}},400),Ir("You asked the anchors",n),setTimeout(()=>Lr.classList.remove("show"),5e3),t.value="")};async function Rh(){if(Xn)return;Xn=!0,In=!1,Gt.chatter=!0,setTimeout(()=>{Gt.chatter=!1},3800),Dt("bAssembly").hidden=!0,Dt("ask").classList.remove("show"),Gt.setScreen("assembly","Good morning, UNIFY Academy",[]);let e=await ld({A:Gt,caption:Ir,soundOn:()=>Oi,cancelled:()=>In});Xn=!1,e?(Ir("Assembly","Assembly is over. Heading to class."),setTimeout(()=>{Lr.classList.remove("show"),Yo({type:"unify:stage-exit"})},2800)):In||Is()}var pd=cd(),Ih=Dt("bShow");Ih.textContent=(Ch()?"\u{1F3AD} Showtime: ":"\u{1F3AD} Show: ")+pd.title;Ih.classList.toggle("on",Ch());async function U_(e){if(Xn)return;Xn=!0,In=!1,Dt("bAssembly").hidden=!0,Dt("ask").classList.remove("show");let t=await ud({A:Gt,caption:Ir,soundOn:()=>Oi,cancelled:()=>In},e);Xn=!1,Gt.chatter=!1,Gt.cheer=!1,t?(Ir("Showtime","That's the end of the show. Thank you for coming!"),setTimeout(()=>Lr.classList.remove("show"),3500)):In||Is()}Ih.onclick=()=>{In=!0;try{speechSynthesis.cancel()}catch{}setTimeout(()=>{Xn=!1,U_(pd)},350)};Dt("bSkip").onclick=()=>{In=!0,Ah();try{speechSynthesis.cancel()}catch{}Xn=!1,Is(),Yo({type:"unify:stage-exit"})};Dt("bAssembly").onclick=()=>void Rh();addEventListener("message",e=>{let t=e.data;if(t&&t.type==="unify:stage-show")Gt.resize(),!Xn&&od()!==new Date().toDateString()?Rh():Xn||Is();else if(t&&t.type==="unify:stage-hide"){In=!0,Gt.cheer=!1,Gt.chatter=!1;try{speechSynthesis.cancel()}catch{}}});Yo({type:"unify:stage-ready"});parent===window&&setTimeout(()=>void Rh(),800);})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
