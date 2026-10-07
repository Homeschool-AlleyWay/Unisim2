"use strict";(()=>{var qo="186";var Yu=0,Vh=1,ju=2;var Kr=1,Xo=2,$s=3,Oi=0,hn=1,kn=2,oi=0,Ys=1,Gh=2,Wh=3,qh=4,Ju=5;var is=100,Zu=101,Ku=102,Qu=103,ed=104,td=200,nd=201,id=202,sd=203,Xh=204,$h=205,rd=206,ad=207,od=208,ld=209,hd=210,cd=211,ud=212,dd=213,fd=214,ho=0,co=1,uo=2,Fs=3,fo=4,po=5,mo=6,go=7,Yh=0,pd=1,md=2,Xn=0,jh=1,Jh=2,Zh=3,Kh=4,Qh=5,ec=6,tc=7;var nc=300,zi=301,ss=302,$o=303,Yo=304,Qr=306,Ns=1e3,ii=1001,yo=1002,Wt=1003,gd=1004;var ea=1005;var jt=1006,jo=1007;var Hi=1008;var mn=1009,ic=1010,sc=1011,js=1012,Jo=1013,$n=1014,In=1015,Yn=1016,Zo=1017,Ko=1018,Js=1020,rc=35902,ac=35899,oc=1021,lc=1022,Ln=1023,si=1026,Vi=1027,Qo=1028,el=1029,Gi=1030,tl=1031;var nl=1033,ta=33776,na=33777,ia=33778,sa=33779,il=35840,sl=35841,rl=35842,al=35843,ol=36196,ll=37492,hl=37496,cl=37488,ul=37489,ra=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,yl=37812,bl=37813,vl=37814,xl=37815,_l=37816,wl=37817,Sl=37818,Ml=37819,Tl=37820,El=37821,Al=36492,Cl=36494,Rl=36495,Pl=36283,kl=36284,aa=36285,Il=36286;var Cr=2300,bo=2301,ao=2302,Dh=2303,Fh=2400,Nh=2401,Uh=2402;var yd=3200;var Ll=0,bd=1,vi="",Ut="srgb",Rr="srgb-linear",Pr="linear",ut="srgb";var oo=7680;var vd=519,xd=512,_d=513,wd=514,Dl=515,Sd=516,Md=517,Fl=518,Td=519,hc=35044;var cc="300 es",Wn=2e3,Us=2001;function xp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _p(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function kr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ed(){let t=kr("canvas");return t.style.display="block",t}var yu={},Bs=null;function Ir(...t){let e="THREE."+t.shift();Bs?Bs("log",e,...t):console.log(e,...t)}function Ad(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=Ad(t);let e="THREE."+t.shift();if(Bs)Bs("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ze(...t){t=Ad(t);let e="THREE."+t.shift();if(Bs)Bs("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function es(...t){let e=t.join(" ");e in yu||(yu[e]=!0,Be(...t))}function Cd(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Rd={[ho]:co,[uo]:mo,[fo]:go,[Fs]:po,[co]:ho,[mo]:uo,[go]:fo,[po]:Fs},ri=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var lo=Math.PI/180,vo=180/Math.PI;function Pi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function wp(t,e){return(t%e+e)%e}function hh(t,e,n){return(1-n)*t+n*e}function ti(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var He=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,h){let l=i[s+0],o=i[s+1],d=i[s+2],u=i[s+3],c=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==c||o!==f||d!==g){let p=l*c+o*f+d*g+u*v;p<0&&(c=-c,f=-f,g=-g,v=-v,p=-p);let m=1-h;if(p<.9995){let _=Math.acos(p),R=Math.sin(_);m=Math.sin(m*_)/R,h=Math.sin(h*_)/R,l=l*m+c*h,o=o*m+f*h,d=d*m+g*h,u=u*m+v*h}else{l=l*m+c*h,o=o*m+f*h,d=d*m+g*h,u=u*m+v*h;let _=1/Math.sqrt(l*l+o*o+d*d+u*u);l*=_,o*=_,d*=_,u*=_}}e[n]=l,e[n+1]=o,e[n+2]=d,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,a){let h=i[s],l=i[s+1],o=i[s+2],d=i[s+3],u=r[a],c=r[a+1],f=r[a+2],g=r[a+3];return e[n]=h*g+d*u+l*f-o*c,e[n+1]=l*g+d*c+o*u-h*f,e[n+2]=o*g+d*f+h*c-l*u,e[n+3]=d*g-h*u-l*c-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,h=Math.cos,l=Math.sin,o=h(i/2),d=h(s/2),u=h(r/2),c=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=c*d*u+o*f*g,this._y=o*f*u-c*d*g,this._z=o*d*g+c*f*u,this._w=o*d*u-c*f*g;break;case"YXZ":this._x=c*d*u+o*f*g,this._y=o*f*u-c*d*g,this._z=o*d*g-c*f*u,this._w=o*d*u+c*f*g;break;case"ZXY":this._x=c*d*u-o*f*g,this._y=o*f*u+c*d*g,this._z=o*d*g+c*f*u,this._w=o*d*u-c*f*g;break;case"ZYX":this._x=c*d*u-o*f*g,this._y=o*f*u+c*d*g,this._z=o*d*g-c*f*u,this._w=o*d*u+c*f*g;break;case"YZX":this._x=c*d*u+o*f*g,this._y=o*f*u+c*d*g,this._z=o*d*g-c*f*u,this._w=o*d*u-c*f*g;break;case"XZY":this._x=c*d*u-o*f*g,this._y=o*f*u-c*d*g,this._z=o*d*g+c*f*u,this._w=o*d*u+c*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],h=n[5],l=n[9],o=n[2],d=n[6],u=n[10],c=i+h+u;if(c>0){let f=.5/Math.sqrt(c+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-o)*f,this._z=(a-s)*f}else if(i>h&&i>u){let f=2*Math.sqrt(1+i-h-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+o)/f}else if(h>u){let f=2*Math.sqrt(1+h-i-u);this._w=(r-o)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-i-h);this._w=(a-s)/f,this._x=(r+o)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,h=n._x,l=n._y,o=n._z,d=n._w;return this._x=i*d+a*h+s*o-r*l,this._y=s*d+a*l+r*h-i*o,this._z=r*d+a*o+i*l-s*h,this._w=a*d-i*h-s*l-r*o,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,h=this.dot(e);h<0&&(i=-i,s=-s,r=-r,a=-a,h=-h);let l=1-n;if(h<.9995){let o=Math.acos(h),d=Math.sin(o);l=Math.sin(l*o)/d,n=Math.sin(n*o)/d,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bu.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,h=e.z,l=e.w,o=2*(a*s-h*i),d=2*(h*n-r*s),u=2*(r*i-a*n);return this.x=n+l*o+a*u-h*d,this.y=i+l*d+h*o-r*u,this.z=s+l*u+r*d-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,h=n.y,l=n.z;return this.x=s*l-r*h,this.y=r*a-i*l,this.z=i*h-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ch.copy(this).projectOnVector(e),this.sub(ch)}reflect(e){return this.sub(ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ch=new I,bu=new xn,We=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,s,r,a,h,l,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,h,l,o)}set(e,n,i,s,r,a,h,l,o){let d=this.elements;return d[0]=e,d[1]=s,d[2]=h,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],h=i[3],l=i[6],o=i[1],d=i[4],u=i[7],c=i[2],f=i[5],g=i[8],v=s[0],p=s[3],m=s[6],_=s[1],R=s[4],x=s[7],M=s[2],T=s[5],C=s[8];return r[0]=a*v+h*_+l*M,r[3]=a*p+h*R+l*T,r[6]=a*m+h*x+l*C,r[1]=o*v+d*_+u*M,r[4]=o*p+d*R+u*T,r[7]=o*m+d*x+u*C,r[2]=c*v+f*_+g*M,r[5]=c*p+f*R+g*T,r[8]=c*m+f*x+g*C,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],d=e[8];return n*a*d-n*h*o-i*r*d+i*h*l+s*r*o-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],d=e[8],u=d*a-h*o,c=h*l-d*r,f=o*r-a*l,g=n*u+i*c+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*o-d*i)*v,e[2]=(h*i-s*a)*v,e[3]=c*v,e[4]=(d*n-s*l)*v,e[5]=(s*r-h*n)*v,e[6]=f*v,e[7]=(i*l-o*n)*v,e[8]=(a*n-i*r)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,h){let l=Math.cos(r),o=Math.sin(r);return this.set(i*l,i*o,-i*(l*a+o*h)+a+e,-s*o,s*l,-s*(-o*a+l*h)+h+n,0,0,1),this}scale(e,n){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uh.makeScale(e,n)),this}rotate(e){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uh.makeRotation(-e)),this}translate(e,n){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uh=new We,vu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sp(){let t={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Rr]:{primaries:e,whitePoint:i,transfer:Pr,toXYZ:vu,fromXYZ:xu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:vu,fromXYZ:xu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),t}var st=Sp();function yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ds(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var gs,xo=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=kr("canvas")),gs.width=e.width,gs.height=e.height;let s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=kr("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yi(n[i]/255)*255):n[i]=yi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mp=0,Os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,h=s.length;a<h;a++)s[a].isDataTexture?r.push(dh(s[a].image)):r.push(dh(s[a]))}else r=dh(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function dh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xo.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Tp=0,fh=new I,ln=class t extends ri{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=ii,s=ii,r=jt,a=Hi,h=Ln,l=mn,o=t.DEFAULT_ANISOTROPY,d=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Pi(),this.name="",this.source=new Os(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=h,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=nc;ln.DEFAULT_ANISOTROPY=1;var Ct=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,o=l[0],d=l[4],u=l[8],c=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(d-c)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+c)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(o+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let R=(o+1)/2,x=(f+1)/2,M=(m+1)/2,T=(d+c)/4,C=(u+v)/4,b=(g+p)/4;return R>x&&R>M?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=T/i,r=C/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=b/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=C/r,s=b/r),this.set(i,s,r,n),this}let _=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(c-d)*(c-d));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-v)/_,this.z=(c-d)/_,this.w=Math.acos((o+f+m-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_o=class extends ri{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];let s={width:e,height:n,depth:i.depth},r=new ln(s),a=i.count;for(let h=0;h<a;h++)this.textures[h]=r.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new Os(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends _o{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Lr=class extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lt=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,s,r,a,h,l,o,d,u,c,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,h,l,o,d,u,c,f,g,v,p)}set(e,n,i,s,r,a,h,l,o,d,u,c,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=h,m[13]=l,m[2]=o,m[6]=d,m[10]=u,m[14]=c,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),h=Math.sin(i),l=Math.cos(s),o=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let c=a*d,f=a*u,g=h*d,v=h*u;n[0]=l*d,n[4]=-l*u,n[8]=o,n[1]=f+g*o,n[5]=c-v*o,n[9]=-h*l,n[2]=v-c*o,n[6]=g+f*o,n[10]=a*l}else if(e.order==="YXZ"){let c=l*d,f=l*u,g=o*d,v=o*u;n[0]=c+v*h,n[4]=g*h-f,n[8]=a*o,n[1]=a*u,n[5]=a*d,n[9]=-h,n[2]=f*h-g,n[6]=v+c*h,n[10]=a*l}else if(e.order==="ZXY"){let c=l*d,f=l*u,g=o*d,v=o*u;n[0]=c-v*h,n[4]=-a*u,n[8]=g+f*h,n[1]=f+g*h,n[5]=a*d,n[9]=v-c*h,n[2]=-a*o,n[6]=h,n[10]=a*l}else if(e.order==="ZYX"){let c=a*d,f=a*u,g=h*d,v=h*u;n[0]=l*d,n[4]=g*o-f,n[8]=c*o+v,n[1]=l*u,n[5]=v*o+c,n[9]=f*o-g,n[2]=-o,n[6]=h*l,n[10]=a*l}else if(e.order==="YZX"){let c=a*l,f=a*o,g=h*l,v=h*o;n[0]=l*d,n[4]=v-c*u,n[8]=g*u+f,n[1]=u,n[5]=a*d,n[9]=-h*d,n[2]=-o*d,n[6]=f*u+g,n[10]=c-v*u}else if(e.order==="XZY"){let c=a*l,f=a*o,g=h*l,v=h*o;n[0]=l*d,n[4]=-u,n[8]=o*d,n[1]=c*u+v,n[5]=a*d,n[9]=f*u-g,n[2]=g*u-f,n[6]=h*d,n[10]=v*u+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ep,e,Ap)}lookAt(e,n,i){let s=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ti.crossVectors(i,yn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ti.crossVectors(i,yn)),Ti.normalize(),Ia.crossVectors(yn,Ti),s[0]=Ti.x,s[4]=Ia.x,s[8]=yn.x,s[1]=Ti.y,s[5]=Ia.y,s[9]=yn.y,s[2]=Ti.z,s[6]=Ia.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],h=i[4],l=i[8],o=i[12],d=i[1],u=i[5],c=i[9],f=i[13],g=i[2],v=i[6],p=i[10],m=i[14],_=i[3],R=i[7],x=i[11],M=i[15],T=s[0],C=s[4],b=s[8],E=s[12],A=s[1],w=s[5],k=s[9],z=s[13],L=s[2],V=s[6],Y=s[10],D=s[14],ie=s[3],q=s[7],K=s[11],N=s[15];return r[0]=a*T+h*A+l*L+o*ie,r[4]=a*C+h*w+l*V+o*q,r[8]=a*b+h*k+l*Y+o*K,r[12]=a*E+h*z+l*D+o*N,r[1]=d*T+u*A+c*L+f*ie,r[5]=d*C+u*w+c*V+f*q,r[9]=d*b+u*k+c*Y+f*K,r[13]=d*E+u*z+c*D+f*N,r[2]=g*T+v*A+p*L+m*ie,r[6]=g*C+v*w+p*V+m*q,r[10]=g*b+v*k+p*Y+m*K,r[14]=g*E+v*z+p*D+m*N,r[3]=_*T+R*A+x*L+M*ie,r[7]=_*C+R*w+x*V+M*q,r[11]=_*b+R*k+x*Y+M*K,r[15]=_*E+R*z+x*D+M*N,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],h=e[5],l=e[9],o=e[13],d=e[2],u=e[6],c=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15],_=l*f-o*c,R=h*f-o*u,x=h*c-l*u,M=a*f-o*d,T=a*c-l*d,C=a*u-h*d;return n*(v*_-p*R+m*x)-i*(g*_-p*M+m*T)+s*(g*R-v*M+m*C)-r*(g*x-v*T+p*C)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],h=e[9],l=e[2],o=e[6],d=e[10];return n*(a*d-h*o)-i*(r*d-h*l)+s*(r*o-a*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],d=e[8],u=e[9],c=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],_=n*h-i*a,R=n*l-s*a,x=n*o-r*a,M=i*l-s*h,T=i*o-r*h,C=s*o-r*l,b=d*v-u*g,E=d*p-c*g,A=d*m-f*g,w=u*p-c*v,k=u*m-f*v,z=c*m-f*p,L=_*z-R*k+x*w+M*A-T*E+C*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return e[0]=(h*z-l*k+o*w)*V,e[1]=(s*k-i*z-r*w)*V,e[2]=(v*C-p*T+m*M)*V,e[3]=(c*T-u*C-f*M)*V,e[4]=(l*A-a*z-o*E)*V,e[5]=(n*z-s*A+r*E)*V,e[6]=(p*x-g*C-m*R)*V,e[7]=(d*C-c*x+f*R)*V,e[8]=(a*k-h*A+o*b)*V,e[9]=(i*A-n*k-r*b)*V,e[10]=(g*T-v*x+m*_)*V,e[11]=(u*x-d*T-f*_)*V,e[12]=(h*E-a*w-l*b)*V,e[13]=(n*w-i*E+s*b)*V,e[14]=(v*R-g*M-p*_)*V,e[15]=(d*M-u*R+c*_)*V,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,h=e.y,l=e.z,o=r*a,d=r*h;return this.set(o*a+i,o*h-s*l,o*l+s*h,0,o*h+s*l,d*h+i,d*l-s*a,0,o*l-s*h,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,h=n._z,l=n._w,o=r+r,d=a+a,u=h+h,c=r*o,f=r*d,g=r*u,v=a*d,p=a*u,m=h*u,_=l*o,R=l*d,x=l*u,M=i.x,T=i.y,C=i.z;return s[0]=(1-(v+m))*M,s[1]=(f+x)*M,s[2]=(g-R)*M,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(c+m))*T,s[6]=(p+_)*T,s[7]=0,s[8]=(g+R)*C,s[9]=(p-_)*C,s[10]=(1-(c+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=ys.set(s[0],s[1],s[2]).length(),h=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);let o=1/a,d=1/h,u=1/l;return Hn.elements[0]*=o,Hn.elements[1]*=o,Hn.elements[2]*=o,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,n.setFromRotationMatrix(Hn),i.x=a,i.y=h,i.z=l,this}makePerspective(e,n,i,s,r,a,h=Wn,l=!1){let o=this.elements,d=2*r/(n-e),u=2*r/(i-s),c=(n+e)/(n-e),f=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(h===Wn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(h===Us)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return o[0]=d,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=v,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,n,i,s,r,a,h=Wn,l=!1){let o=this.elements,d=2/(n-e),u=2/(i-s),c=-(n+e)/(n-e),f=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(h===Wn)g=-2/(a-r),v=-(a+r)/(a-r);else if(h===Us)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return o[0]=d,o[4]=0,o[8]=0,o[12]=c,o[1]=0,o[5]=u,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=g,o[14]=v,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},ys=new I,Hn=new lt,Ep=new I(0,0,0),Ap=new I(1,1,1),Ti=new I,Ia=new I,yn=new I,_u=new lt,wu=new xn,qn=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],h=s[8],l=s[1],o=s[5],d=s[9],u=s[2],c=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,o),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(h,f),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,o),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(h,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,o),this._y=Math.atan2(h,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cp=0,Su=new I,bs=new xn,di=new lt,La=new I,br=new I,Rp=new I,Pp=new xn,Mu=new I(1,0,0),Tu=new I(0,1,0),Eu=new I(0,0,1),Au={type:"added"},kp={type:"removed"},vs={type:"childadded",child:null},ph={type:"childremoved",child:null},qt=class t extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new I,n=new qn,i=new xn,s=new I(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,n){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?La.copy(e):La.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(br,La,this.up):di.lookAt(La,br,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(di),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),vs.child=e,this.dispatchEvent(vs),vs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kp),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,h=r.length;a<h;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(h,l){return h[l.uuid]===void 0&&(h[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let l=h.shapes;if(Array.isArray(l))for(let o=0,d=l.length;o<d;o++){let u=l[o];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let l=0,o=this.material.length;l<o;l++)h.push(r(e.materials,this.material[l]));s.material=h}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){let l=this.animations[h];s.animations.push(r(e.animations,l))}}if(n){let h=a(e.geometries),l=a(e.materials),o=a(e.textures),d=a(e.images),u=a(e.shapes),c=a(e.skeletons),f=a(e.animations),g=a(e.nodes);h.length>0&&(i.geometries=h),l.length>0&&(i.materials=l),o.length>0&&(i.textures=o),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),c.length>0&&(i.skeletons=c),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(h){let l=[];for(let o in h){let d=h[o];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new I(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ip={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,h=this._targetRay,l=this._grip,o=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let v of e.hand.values()){let p=n.getJointPose(v,i),m=this._getHandJoint(o,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let d=o.joints["index-finger-tip"],u=o.joints["thumb-tip"],c=d.position.distanceTo(u.position),f=.02,g=.005;o.inputState.pinching&&c>f+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&c<=f-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return h!==null&&(h.visible=s!==null),l!==null&&(l.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Da={h:0,s:0,l:0};function mh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var $e=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=st.workingColorSpace){if(e=wp(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=mh(a,r,e+1/3),this.g=mh(a,r,e),this.b=mh(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,n=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],h=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){let i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return st.workingToColorSpace(en.copy(this),e),Math.round(rt(en.r*255,0,255))*65536+Math.round(rt(en.g*255,0,255))*256+Math.round(rt(en.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(en.copy(this),n);let i=en.r,s=en.g,r=en.b,a=Math.max(i,s,r),h=Math.min(i,s,r),l,o,d=(h+a)/2;if(h===a)l=0,o=0;else{let u=a-h;switch(o=d<=.5?u/(a+h):u/(2-a-h),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=o,e.l=d,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Ut){st.workingToColorSpace(en.copy(this),e);let n=en.r,i=en.g,s=en.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(Da);let i=hh(Ei.h,Da.h,n),s=hh(Ei.s,Da.s,n),r=hh(Ei.l,Da.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new $e;$e.NAMES=Pd;var Dr=class t{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=n,this.far=i}clone(){return new t(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fr=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Vn=new I,fi=new I,gh=new I,pi=new I,xs=new I,_s=new I,Cu=new I,yh=new I,bh=new I,vh=new I,xh=new Ct,_h=new Ct,wh=new Ct,ni=class t{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Vn.subVectors(e,n),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Vn.subVectors(s,n),fi.subVectors(i,n),gh.subVectors(e,n);let a=Vn.dot(Vn),h=Vn.dot(fi),l=Vn.dot(gh),o=fi.dot(fi),d=fi.dot(gh),u=a*o-h*h;if(u===0)return r.set(0,0,0),null;let c=1/u,f=(o*l-h*d)*c,g=(a*d-h*l)*c;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,s,r,a,h,l){return this.getBarycoord(e,n,i,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(h,pi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return xh.setScalar(0),_h.setScalar(0),wh.setScalar(0),xh.fromBufferAttribute(e,n),_h.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(xh,r.x),a.addScaledVector(_h,r.y),a.addScaledVector(wh,r.z),a}static isFrontFacing(e,n,i,s){return Vn.subVectors(i,n),fi.subVectors(e,n),Vn.cross(fi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Vn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,h;xs.subVectors(s,i),_s.subVectors(r,i),yh.subVectors(e,i);let l=xs.dot(yh),o=_s.dot(yh);if(l<=0&&o<=0)return n.copy(i);bh.subVectors(e,s);let d=xs.dot(bh),u=_s.dot(bh);if(d>=0&&u<=d)return n.copy(s);let c=l*u-d*o;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(xs,a);vh.subVectors(e,r);let f=xs.dot(vh),g=_s.dot(vh);if(g>=0&&f<=g)return n.copy(r);let v=f*o-l*g;if(v<=0&&o>=0&&g<=0)return h=o/(o-g),n.copy(i).addScaledVector(_s,h);let p=d*g-f*u;if(p<=0&&u-d>=0&&f-g>=0)return Cu.subVectors(r,s),h=(u-d)/(u-d+(f-g)),n.copy(s).addScaledVector(Cu,h);let m=1/(p+v+c);return a=v*m,h=c*m,n.copy(i).addScaledVector(xs,a).addScaledVector(_s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,h=r.count;a<h;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),Na.subVectors(this.max,vr),ws.subVectors(e.a,vr),Ss.subVectors(e.b,vr),Ms.subVectors(e.c,vr),Ai.subVectors(Ss,ws),Ci.subVectors(Ms,Ss),Ji.subVectors(ws,Ms);let n=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Ji.z,Ji.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Ji.z,0,-Ji.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Ji.y,Ji.x,0];return!Sh(n,ws,Ss,Ms,Na)||(n=[1,0,0,0,1,0,0,0,1],!Sh(n,ws,Ss,Ms,Na))?!1:(Ua.crossVectors(Ai,Ci),n=[Ua.x,Ua.y,Ua.z],Sh(n,ws,Ss,Ms,Na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,Fa=new Pn,ws=new I,Ss=new I,Ms=new I,Ai=new I,Ci=new I,Ji=new I,vr=new I,Na=new I,Ua=new I,Zi=new I;function Sh(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Zi.fromArray(t,r);let h=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),o=n.dot(Zi),d=i.dot(Zi);if(Math.max(-Math.max(l,o,d),Math.min(l,o,d))>h)return!1}return!0}var Ft=new I,Ba=new He,Lp=0,dn=class extends ri{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lp++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ba.fromBufferAttribute(this,n),Ba.applyMatrix3(e),this.setXY(n,Ba.x,Ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ti(n,this.array)),n}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ti(n,this.array)),n}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ti(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ti(n,this.array)),n}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Ur=class extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var dt=class extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}},Dp=new Pn,xr=new I,Mh=new I,bi=class{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Dp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let n=xr.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Mh)),this.expandByPoint(xr.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fp=0,Rn=new lt,Th=new qt,Ts=new I,bn=new Pn,_r=new Pn,Gt=new I,Bt=class t extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xp(e)?Ur:Nr)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let h=n[r];_r.setFromBufferAttribute(h),this.morphTargetsRelative?(Gt.addVectors(bn.min,_r.min),bn.expandByPoint(Gt),Gt.addVectors(bn.max,_r.max),bn.expandByPoint(Gt)):(bn.expandByPoint(_r.min),bn.expandByPoint(_r.max))}bn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(n)for(let r=0,a=n.length;r<a;r++){let h=n[r],l=this.morphTargetsRelative;for(let o=0,d=h.count;o<d;o++)Gt.fromBufferAttribute(h,o),l&&(Ts.fromBufferAttribute(e,o),Gt.add(Ts)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new dn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let h=[],l=[];for(let b=0;b<i.count;b++)h[b]=new I,l[b]=new I;let o=new I,d=new I,u=new I,c=new He,f=new He,g=new He,v=new I,p=new I;function m(b,E,A){o.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),c.fromBufferAttribute(r,b),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,A),d.sub(o),u.sub(o),f.sub(c),g.sub(c);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(w),h[b].add(v),h[E].add(v),h[A].add(v),l[b].add(p),l[E].add(p),l[A].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,E=_.length;b<E;++b){let A=_[b],w=A.start,k=A.count;for(let z=w,L=w+k;z<L;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let R=new I,x=new I,M=new I,T=new I;function C(b){M.fromBufferAttribute(s,b),T.copy(M);let E=h[b];R.copy(E),R.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(T,E);let w=x.dot(l[b])<0?-1:1;a.setXYZW(b,R.x,R.y,R.z,w)}for(let b=0,E=_.length;b<E;++b){let A=_[b],w=A.start,k=A.count;for(let z=w,L=w+k;z<L;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,f=i.count;c<f;c++)i.setXYZ(c,0,0,0);let s=new I,r=new I,a=new I,h=new I,l=new I,o=new I,d=new I,u=new I;if(e)for(let c=0,f=e.count;c<f;c+=3){let g=e.getX(c+0),v=e.getX(c+1),p=e.getX(c+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,p),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),h.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),o.fromBufferAttribute(i,p),h.add(d),l.add(d),o.add(d),i.setXYZ(g,h.x,h.y,h.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,o.x,o.y,o.z)}else for(let c=0,f=n.count;c<f;c+=3)s.fromBufferAttribute(n,c+0),r.fromBufferAttribute(n,c+1),a.fromBufferAttribute(n,c+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(c+0,d.x,d.y,d.z),i.setXYZ(c+1,d.x,d.y,d.z),i.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(h,l){let o=h.array,d=h.itemSize,u=h.normalized,c=new o.constructor(l.length*d),f=0,g=0;for(let v=0,p=l.length;v<p;v++){h.isInterleavedBufferAttribute?f=l[v]*h.data.stride+h.offset:f=l[v]*d;for(let m=0;m<d;m++)c[g++]=o[f++]}return new dn(c,d,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let h in s){let l=s[h],o=e(l,i);n.setAttribute(h,o)}let r=this.morphAttributes;for(let h in r){let l=[],o=r[h];for(let d=0,u=o.length;d<u;d++){let c=o[d],f=e(c,i);l.push(f)}n.morphAttributes[h]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let h=0,l=a.length;h<l;h++){let o=a[h];n.addGroup(o.start,o.count,o.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let o in l)l[o]!==void 0&&(e[o]=l[o]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let o=i[l];e.data.attributes[l]=o.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let o=this.morphAttributes[l],d=[];for(let u=0,c=o.length;u<c;u++){let f=o[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let o in s){let d=s[o];this.setAttribute(o,d.clone(n))}let r=e.morphAttributes;for(let o in r){let d=[],u=r[o];for(let c=0,f=u.length;c<f;c++)d.push(u[c].clone(n));this.morphAttributes[o]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,d=a.length;o<d;o++){let u=a[o];this.addGroup(u.start,u.count,u.materialIndex)}let h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},So=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}},on=new I,Br=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(e),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.transformDirection(e),this.setXYZ(n,on.x,on.y,on.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ti(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ti(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ti(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ti(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new dn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Eh=new I,Np=new I,Up=new We,vn=class{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Eh.subVectors(i,n).cross(Np.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(Eh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Up.getNormalMatrix(e),s=this.coplanarPoint(Eh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Bp=0,ai=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Ys,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=$h,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let h in r){let l=r[h];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new vn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vs=class extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Es,wr=new I,As=new I,Cs=new I,Rs=new He,Sr=new He,kd=new lt,Oa=new I,Mr=new I,za=new I,Ru=new He,Ah=new He,Pu=new He,Or=class extends qt{constructor(e=new Vs){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Bt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new So(n,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Br(i,3,0,!1)),Es.setAttribute("uv",new Br(i,2,3,!1))}this.geometry=Es,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),kd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Cs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ha(Oa.set(-.5,-.5,0),Cs,a,As,s,r),Ha(Mr.set(.5,-.5,0),Cs,a,As,s,r),Ha(za.set(.5,.5,0),Cs,a,As,s,r),Ru.set(0,0),Ah.set(1,0),Pu.set(1,1);let h=e.ray.intersectTriangle(Oa,Mr,za,!1,wr);if(h===null&&(Ha(Mr.set(-.5,.5,0),Cs,a,As,s,r),Ah.set(0,1),h=e.ray.intersectTriangle(Oa,za,Mr,!1,wr),h===null))return;let l=e.ray.origin.distanceTo(wr);l<e.near||l>e.far||n.push({distance:l,point:wr.clone(),uv:ni.getInterpolation(wr,Oa,Mr,za,Ru,Ah,Pu,new He),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ha(t,e,n,i,s,r){Rs.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(Sr.x=r*Rs.x-s*Rs.y,Sr.y=s*Rs.x+r*Rs.y):Sr.copy(Rs),t.copy(e),t.x+=Sr.x,t.y+=Sr.y,t.applyMatrix4(kd)}var gi=new I,Ch=new I,Va=new I,Ga=new I,ki=class{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ch.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Ga.copy(this.origin).sub(Ch);let r=e.distanceTo(n)*.5,a=-this.direction.dot(Va),h=Ga.dot(this.direction),l=-Ga.dot(Va),o=Ga.lengthSq(),d=Math.abs(1-a*a),u,c,f,g;if(d>0)if(u=a*l-h,c=a*h-l,g=r*d,u>=0)if(c>=-g)if(c<=g){let v=1/d;u*=v,c*=v,f=u*(u+a*c+2*h)+c*(a*u+c+2*l)+o}else c=r,u=Math.max(0,-(a*c+h)),f=-u*u+c*(c+2*l)+o;else c=-r,u=Math.max(0,-(a*c+h)),f=-u*u+c*(c+2*l)+o;else c<=-g?(u=Math.max(0,-(-a*r+h)),c=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+c*(c+2*l)+o):c<=g?(u=0,c=Math.min(Math.max(-r,-l),r),f=c*(c+2*l)+o):(u=Math.max(0,-(a*r+h)),c=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+c*(c+2*l)+o);else c=a>0?-r:r,u=Math.max(0,-(a*c+h)),f=-u*u+c*(c+2*l)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ch).addScaledVector(Va,c),f}intersectSphere(e,n){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),h=i-a,l=i+a;return l<0?null:h<0?this.at(l,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,h,l,o=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,c=this.origin;return o>=0?(i=(e.min.x-c.x)*o,s=(e.max.x-c.x)*o):(i=(e.max.x-c.x)*o,s=(e.min.x-c.x)*o),d>=0?(r=(e.min.y-c.y)*d,a=(e.max.y-c.y)*d):(r=(e.max.y-c.y)*d,a=(e.min.y-c.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(h=(e.min.z-c.z)*u,l=(e.max.z-c.z)*u):(h=(e.max.z-c.z)*u,l=(e.min.z-c.z)*u),i>l||h>s)||((h>i||i!==i)&&(i=h),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,s,r){let a=this.origin,h=this.direction,l=h.x,o=h.y,d=h.z,u=e.x-a.x,c=e.y-a.y,f=e.z-a.z,g=n.x-a.x,v=n.y-a.y,p=n.z-a.z,m=i.x-a.x,_=i.y-a.y,R=i.z-a.z,x=Math.abs(l),M=Math.abs(o),T=Math.abs(d),C,b,E,A,w,k,z,L,V,Y,D,ie;if(x>=M&&x>=T?(E=l,k=u,V=g,ie=m,l>=0?(C=o,b=d,A=c,w=f,z=v,L=p,Y=_,D=R):(C=d,b=o,A=f,w=c,z=p,L=v,Y=R,D=_)):M>=T?(E=o,k=c,V=v,ie=_,o>=0?(C=d,b=l,A=f,w=u,z=p,L=g,Y=R,D=m):(C=l,b=d,A=u,w=f,z=g,L=p,Y=m,D=R)):(E=d,k=f,V=p,ie=R,d>=0?(C=l,b=o,A=u,w=c,z=g,L=v,Y=m,D=_):(C=o,b=l,A=c,w=u,z=v,L=g,Y=_,D=m)),E===0)return null;let q=C/E,K=b/E,N=1/E,J=A-q*k,oe=w-K*k,Ve=z-q*V,Ie=L-K*V,Ge=Y-q*ie,O=D-K*ie,Z=Ge*Ie-O*Ve,he=J*O-oe*Ge,X=Ve*oe-Ie*J;if(s){if(Z<0||he<0||X<0)return null}else if((Z<0||he<0||X<0)&&(Z>0||he>0||X>0))return null;let ee=Z+he+X;if(ee===0)return null;let Te=N*(Z*k+he*V+X*ie);return(ee>0?Te<0:Te>0)?null:this.at(Te/ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ku=new lt,Ki=new ki,Wa=new bi,Iu=new I,qa=new I,Xa=new I,$a=new I,Rh=new I,Ya=new I,Lu=new I,ja=new I,Ne=class extends qt{constructor(e=new Bt,n=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let h=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let h=this.morphTargetInfluences;if(r&&h){Ya.set(0,0,0);for(let l=0,o=r.length;l<o;l++){let d=h[l],u=r[l];d!==0&&(Rh.fromBufferAttribute(u,e),a?Ya.addScaledVector(Rh,d):Ya.addScaledVector(Rh.sub(n),d))}n.add(Ya)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(Wa.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Wa,Iu)===null||Ki.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(ku.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(ku),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,h=r.index,l=r.attributes.position,o=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,c=r.groups,f=r.drawRange;if(h!==null)if(Array.isArray(a))for(let g=0,v=c.length;g<v;g++){let p=c[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),R=Math.min(h.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,M=R;x<M;x+=3){let T=h.getX(x),C=h.getX(x+1),b=h.getX(x+2);s=Ja(this,m,e,i,o,d,u,T,C,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(h.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let _=h.getX(p),R=h.getX(p+1),x=h.getX(p+2);s=Ja(this,a,e,i,o,d,u,_,R,x),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=c.length;g<v;g++){let p=c[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,M=R;x<M;x+=3){let T=x,C=x+1,b=x+2;s=Ja(this,m,e,i,o,d,u,T,C,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let _=p,R=p+1,x=p+2;s=Ja(this,a,e,i,o,d,u,_,R,x),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}};function Op(t,e,n,i,s,r,a,h){let l;if(e.side===hn?l=i.intersectTriangle(a,r,s,!0,h):l=i.intersectTriangle(s,r,a,e.side===Oi,h),l===null)return null;ja.copy(h),ja.applyMatrix4(t.matrixWorld);let o=n.ray.origin.distanceTo(ja);return o<n.near||o>n.far?null:{distance:o,point:ja.clone(),object:t}}function Ja(t,e,n,i,s,r,a,h,l,o){t.getVertexPosition(h,qa),t.getVertexPosition(l,Xa),t.getVertexPosition(o,$a);let d=Op(t,e,n,i,qa,Xa,$a,Lu);if(d){let u=new I;ni.getBarycoord(Lu,qa,Xa,$a,u),s&&(d.uv=ni.getInterpolatedAttribute(s,h,l,o,u,new He)),r&&(d.uv1=ni.getInterpolatedAttribute(r,h,l,o,u,new He)),a&&(d.normal=ni.getInterpolatedAttribute(a,h,l,o,u,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let c={a:h,b:l,c:o,normal:new I,materialIndex:0};ni.getNormal(qa,Xa,$a,c.normal),d.face=c,d.barycoord=u}return d}var zr=class extends ln{constructor(e=null,n=1,i=1,s,r,a,h,l,o=Wt,d=Wt,u,c){super(null,a,h,l,o,d,s,r,u,c),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hr=class extends dn{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new lt,Du=new lt,Za=[],Fu=new Pn,zp=new lt,Tr=new Ne,Er=new bi,Gs=class extends Ne{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zp)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ps),Fu.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Fu)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ps),Er.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Er)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let h=0;h<i.length;h++)i[h]=s[a+h]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),Du.multiplyMatrices(i,Ps),Tr.matrixWorld=Du,Tr.raycast(e,Za);for(let a=0,h=Za.length;a<h;a++){let l=Za[a];l.instanceId=r,l.object=this,n.push(l)}Za.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(s*this.count),s,this.count,Qo,In));let r=this.morphTexture.source.data.data,a=0;for(let o=0;o<i.length;o++)a+=i[o];let h=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=h,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qi=new bi,Hp=new He(.5,.5),Ka=new I,Ws=class{constructor(e=new vn,n=new vn,i=new vn,s=new vn,r=new vn,a=new vn){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(i),h[3].copy(s),h[4].copy(r),h[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Wn,i=!1){let s=this.planes,r=e.elements,a=r[0],h=r[1],l=r[2],o=r[3],d=r[4],u=r[5],c=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],_=r[12],R=r[13],x=r[14],M=r[15];if(s[0].setComponents(o-a,f-d,m-g,M-_).normalize(),s[1].setComponents(o+a,f+d,m+g,M+_).normalize(),s[2].setComponents(o+h,f+u,m+v,M+R).normalize(),s[3].setComponents(o-h,f-u,m-v,M-R).normalize(),i)s[4].setComponents(l,c,p,x).normalize(),s[5].setComponents(o-l,f-c,m-p,M-x).normalize();else if(s[4].setComponents(o-l,f-c,m-p,M-x).normalize(),n===Wn)s[5].setComponents(o+l,f+c,m+p,M+x).normalize();else if(n===Us)s[5].setComponents(l,c,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let n=Hp.distanceTo(e.center);return Qi.radius=.7071067811865476+n,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ka.x=s.normal.x>0?e.max.x:e.min.x,Ka.y=s.normal.y>0?e.max.y:e.min.y,Ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ii=class extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mo=new I,To=new I,Nu=new lt,Ar=new ki,Qa=new bi,Ph=new I,Uu=new I,Eo=class extends qt{constructor(e=new Bt,n=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Mo.fromBufferAttribute(n,s-1),To.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Mo.distanceTo(To);e.setAttribute("lineDistance",new dt(i,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Nu.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Nu);let h=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=h*h,o=this.isLineSegments?2:1,d=i.index,c=i.attributes.position;if(d!==null){let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=o){let m=d.getX(v),_=d.getX(v+1),R=eo(this,e,Ar,l,m,_,v);R&&n.push(R)}if(this.isLineLoop){let v=d.getX(g-1),p=d.getX(f),m=eo(this,e,Ar,l,v,p,g-1);m&&n.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=o){let m=eo(this,e,Ar,l,v,v+1,v);m&&n.push(m)}if(this.isLineLoop){let v=eo(this,e,Ar,l,g-1,f,g-1);v&&n.push(v)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let h=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=r}}}}};function eo(t,e,n,i,s,r,a){let h=t.geometry.attributes.position;if(Mo.fromBufferAttribute(h,s),To.fromBufferAttribute(h,r),n.distanceSqToSegment(Mo,To,Ph,Uu)>i)return;Ph.applyMatrix4(t.matrixWorld);let o=e.ray.origin.distanceTo(Ph);if(!(o<e.near||o>e.far))return{distance:o,point:Uu.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var Bu=new I,Ou=new I,ts=class extends Eo{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Bu.fromBufferAttribute(n,s),Ou.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Bu.distanceTo(Ou);e.setAttribute("lineDistance",new dt(i,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vr=class extends ln{constructor(e=[],n=zi,i,s,r,a,h,l,o,d){super(e,n,i,s,r,a,h,l,o,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Li=class extends ln{constructor(e,n,i,s,r,a,h,l,o){super(e,n,i,s,r,a,h,l,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends ln{constructor(e,n,i=$n,s,r,a,h=Wt,l=Wt,o,d=si,u=1){if(d!==si&&d!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:n,depth:u};super(c,s,r,a,h,l,d,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},Ao=class extends Di{constructor(e,n=$n,i=zi,s,r,a=Wt,h=Wt,l,o=si){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,n,i,s,r,a,h,l,o),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gr=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_n=class t extends Bt{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let h=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],o=[],d=[],u=[],c=0,f=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function g(v,p,m,_,R,x,M,T,C,b,E){let A=x/C,w=M/b,k=x/2,z=M/2,L=T/2,V=C+1,Y=b+1,D=0,ie=0,q=new I;for(let K=0;K<Y;K++){let N=K*w-z;for(let J=0;J<V;J++){let oe=J*A-k;q[v]=oe*_,q[p]=N*R,q[m]=L,o.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[m]=T>0?1:-1,d.push(q.x,q.y,q.z),u.push(J/C),u.push(1-K/b),D+=1}}for(let K=0;K<b;K++)for(let N=0;N<C;N++){let J=c+N+V*K,oe=c+N+V*(K+1),Ve=c+(N+1)+V*(K+1),Ie=c+(N+1)+V*K;l.push(J,oe,Ie),l.push(oe,Ve,Ie),ie+=6}h.addGroup(f,ie,E),f+=ie,c+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wr=class t extends Bt{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],a=[],h=[],l=[],o=new I,d=new He;a.push(0,0,0),h.push(0,0,1),l.push(.5,.5);for(let u=0,c=3;u<=n;u++,c+=3){let f=i+u/n*s;o.x=e*Math.cos(f),o.y=e*Math.sin(f),a.push(o.x,o.y,o.z),h.push(0,0,1),d.x=(a[c]/e+1)/2,d.y=(a[c+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=n;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xt=class t extends Bt{constructor(e=1,n=1,i=1,s=32,r=1,a=!1,h=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:h,thetaLength:l};let o=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],c=[],f=[],g=0,v=[],p=i/2,m=0;_(),a===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(f,2));function _(){let x=new I,M=new I,T=0,C=(n-e)/i;for(let b=0;b<=r;b++){let E=[],A=b/r,w=A*(n-e)+e;for(let k=0;k<=s;k++){let z=k/s,L=z*l+h,V=Math.sin(L),Y=Math.cos(L);M.x=w*V,M.y=-A*i+p,M.z=w*Y,u.push(M.x,M.y,M.z),x.set(V,C,Y).normalize(),c.push(x.x,x.y,x.z),f.push(z,1-A),E.push(g++)}v.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){let A=v[E][b],w=v[E+1][b],k=v[E+1][b+1],z=v[E][b+1];(e>0||E!==0)&&(d.push(A,w,z),T+=3),(n>0||E!==r-1)&&(d.push(w,k,z),T+=3)}o.addGroup(m,T,0),m+=T}function R(x){let M=g,T=new He,C=new I,b=0,E=x===!0?e:n,A=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*A,0),c.push(0,A,0),f.push(.5,.5),g++;let w=g;for(let k=0;k<=s;k++){let L=k/s*l+h,V=Math.cos(L),Y=Math.sin(L);C.x=E*Y,C.y=p*A,C.z=E*V,u.push(C.x,C.y,C.z),c.push(0,A,0),T.x=V*.5+.5,T.y=Y*.5*A+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){let z=M+k,L=w+k;x===!0?d.push(L,L+1,z):d.push(L+1,L,z),b+=3}o.addGroup(m,b,x===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fi=class t extends Xt{constructor(e=1,n=1,i=32,s=1,r=!1,a=0,h=Math.PI*2){super(0,e,n,i,s,r,a,h),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:h}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Co=class t extends Bt{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],a=[];h(s),o(i),d(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function h(_){let R=new I,x=new I,M=new I;for(let T=0;T<n.length;T+=3)f(n[T+0],R),f(n[T+1],x),f(n[T+2],M),l(R,x,M,_)}function l(_,R,x,M){let T=M+1,C=[];for(let b=0;b<=T;b++){C[b]=[];let E=_.clone().lerp(x,b/T),A=R.clone().lerp(x,b/T),w=T-b;for(let k=0;k<=w;k++)k===0&&b===T?C[b][k]=E:C[b][k]=E.clone().lerp(A,k/w)}for(let b=0;b<T;b++)for(let E=0;E<2*(T-b)-1;E++){let A=Math.floor(E/2);E%2===0?(c(C[b][A+1]),c(C[b+1][A]),c(C[b][A])):(c(C[b][A+1]),c(C[b+1][A+1]),c(C[b+1][A]))}}function o(_){let R=new I;for(let x=0;x<r.length;x+=3)R.x=r[x+0],R.y=r[x+1],R.z=r[x+2],R.normalize().multiplyScalar(_),r[x+0]=R.x,r[x+1]=R.y,r[x+2]=R.z}function d(){let _=new I;for(let R=0;R<r.length;R+=3){_.x=r[R+0],_.y=r[R+1],_.z=r[R+2];let x=p(_)/2/Math.PI+.5,M=m(_)/Math.PI+.5;a.push(x,1-M)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let R=a[_+0],x=a[_+2],M=a[_+4],T=Math.max(R,x,M),C=Math.min(R,x,M);T>.9&&C<.1&&(R<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),M<.2&&(a[_+4]+=1))}}function c(_){r.push(_.x,_.y,_.z)}function f(_,R){let x=_*3;R.x=e[x+0],R.y=e[x+1],R.z=e[x+2]}function g(){let _=new I,R=new I,x=new I,M=new I,T=new He,C=new He,b=new He;for(let E=0,A=0;E<r.length;E+=9,A+=6){_.set(r[E+0],r[E+1],r[E+2]),R.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(a[A+0],a[A+1]),C.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),M.copy(_).add(R).add(x).divideScalar(3);let w=p(M);v(T,A+0,_,w),v(C,A+2,R,w),v(b,A+4,x,w)}}function v(_,R,x,M){M<0&&_.x===1&&(a[R]=_.x-1),x.x===0&&x.z===0&&(a[R]=M/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var to=new I,no=new I,kh=new I,io=new ni,ns=class extends Bt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){let s=Math.pow(10,4),r=Math.cos(lo*n),a=e.getIndex(),h=e.getAttribute("position"),l=a?a.count:h.count,o=[0,0,0],d=["a","b","c"],u=new Array(3),c={},f=[];for(let g=0;g<l;g+=3){a?(o[0]=a.getX(g),o[1]=a.getX(g+1),o[2]=a.getX(g+2)):(o[0]=g,o[1]=g+1,o[2]=g+2);let{a:v,b:p,c:m}=io;if(v.fromBufferAttribute(h,o[0]),p.fromBufferAttribute(h,o[1]),m.fromBufferAttribute(h,o[2]),io.getNormal(kh),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let R=(_+1)%3,x=u[_],M=u[R],T=io[d[_]],C=io[d[R]],b=`${x}_${M}`,E=`${M}_${x}`;E in c&&c[E]?(kh.dot(c[E].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),c[E]=null):b in c||(c[b]={index0:o[_],index1:o[R],normal:kh.clone()})}}for(let g in c)if(c[g]){let{index0:v,index1:p}=c[g];to.fromBufferAttribute(h,v),no.fromBufferAttribute(h,p),f.push(to.x,to.y,to.z),f.push(no.x,no.y,no.z)}this.setAttribute("position",new dt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var qs=class t extends Co{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var $t=class t extends Bt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,h=Math.floor(i),l=Math.floor(s),o=h+1,d=l+1,u=e/h,c=n/l,f=[],g=[],v=[],p=[];for(let m=0;m<d;m++){let _=m*c-a;for(let R=0;R<o;R++){let x=R*u-r;g.push(x,-_,0),v.push(0,0,1),p.push(R/h),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<h;_++){let R=_+o*m,x=_+o*(m+1),M=_+1+o*(m+1),T=_+1+o*m;f.push(R,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var qr=class t extends Bt{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:h},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(a+h,Math.PI),o=0,d=[],u=new I,c=new I,f=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){let _=[],R=m/i,x=a+R*h,M=e*Math.cos(x),T=Math.sqrt(e*e-M*M),C=0;m===0&&a===0?C=.5/n:m===i&&l===Math.PI&&(C=-.5/n);for(let b=0;b<=n;b++){let E=b/n,A=s+E*r;u.x=-T*Math.cos(A),u.y=M,u.z=T*Math.sin(A),g.push(u.x,u.y,u.z),c.copy(u).normalize(),v.push(c.x,c.y,c.z),p.push(E+C,1-R),_.push(o++)}d.push(_)}for(let m=0;m<i;m++)for(let _=0;_<n;_++){let R=d[m][_+1],x=d[m][_],M=d[m+1][_],T=d[m+1][_+1];(m!==0||a>0)&&f.push(R,x,T),(m!==i-1||l<Math.PI)&&f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function rs(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(zu(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(zu(s[0])){let r=[];for(let a=0,h=s.length;a<h;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function sn(t){let e={};for(let n=0;n<t.length;n++){let i=rs(t[n]);for(let s in i)e[s]=i[s]}return e}function zu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Vp(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uc(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Id={clone:rs,merge:sn},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ro=class extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nn=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Po=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ks(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Ih(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Ni=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let h=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(r=s,s=n[++i],e<s)break e}a=n.length;break t}if(!(e>=r)){let h=n[1];e<h&&(i=2,r=h);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let h=i+a>>>1;e<n[h]?a=h:i=h+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Io=class extends Ni{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,h=s[r],l=s[a];if(h===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,h=2*n-i;break;case Uh:r=s.length-2,h=n+s[r]-s[r+1];break;default:r=e,h=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nh:a=e,l=2*i-n;break;case Uh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let o=(i-n)*.5,d=this.valueSize;this._weightPrev=o/(n-h),this._weightNext=o/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,d=this._offsetPrev,u=this._offsetNext,c=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),v=g*g,p=v*g,m=-c*p+2*c*v-c*g,_=(1+c)*p+(-1.5-2*c)*v+(-.5+c)*g+1,R=(-1-f)*p+(1.5+f)*v+.5*g,x=f*p-f*v;for(let M=0;M!==h;++M)r[M]=m*a[d+M]+_*a[o+M]+R*a[l+M]+x*a[u+M];return r}},Lo=class extends Ni{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,d=(i-n)/(s-n),u=1-d;for(let c=0;c!==h;++c)r[c]=a[o+c]*u+a[l+c]*d;return r}},Do=class extends Ni{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fo=class extends Ni{interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,d=this.inTangents,u=this.outTangents;if(!d||!u){let g=(i-n)/(s-n),v=1-g;for(let p=0;p!==h;++p)r[p]=a[o+p]*v+a[l+p]*g;return r}let c=h*2,f=e-1;for(let g=0;g!==h;++g){let v=a[o+g],p=a[l+g],m=f*c+g*2,_=u[m],R=u[m+1],x=e*c+g*2,M=d[x],T=d[x+1],C=Xp(i,n,_,M,s);r[g]=Ld(C,v,R,T,p)}return r}};function Ld(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function qp(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Xp(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let h=Ld(r,e,n,i,s)-t;if(Math.abs(h)<1e-10)break;let l=qp(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-h/l))}return r}var Sn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(n,this.TimeBufferType),this.values=ks(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ih(e.settings)&&(i.settings={inTangents:ks(e.settings.inTangents,Array),outTangents:ks(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Fo(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Cr:n=this.InterpolantFactoryMethodDiscrete;break;case bo:n=this.InterpolantFactoryMethodLinear;break;case ao:n=this.InterpolantFactoryMethodSmooth;break;case Dh:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;Ih(this.settings)&&(Hu(this.settings.inTangents,e),Hu(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let h=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*h,a*h)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let h=0;h!==r;h++){let l=i[h];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,h,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,h,l,a),e=!1;break}a=l}if(s!==void 0&&_p(s))for(let h=0,l=s.length;h!==l;++h){let o=s[h];if(isNaN(o)){ze("KeyframeTrack: Value is not a valid number.",this,h,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ao,r=e.length-1,a=1;for(let h=1;h<r;++h){let l=!1,o=e[h],d=e[h+1];if(o!==d&&(h!==1||o!==e[0]))if(s)l=!0;else{let u=h*i,c=u-i,f=u+i;for(let g=0;g!==i;++g){let v=n[u+g];if(v!==n[c+g]||v!==n[f+g]){l=!0;break}}}if(l){if(h!==a){e[a]=e[h];let u=h*i,c=a*i;for(let f=0;f!==i;++f)n[c+f]=n[u+f]}++a}}if(r>0){e[a]=e[r];for(let h=r*i,l=a*i,o=0;o!==i;++o)n[l+o]=n[h+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,Ih(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hu(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=bo;var Ui=class extends Sn{constructor(e,n,i){super(e,n,i)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Cr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Sn{constructor(e,n,i,s){super(e,n,i,s)}};No.prototype.ValueTypeName="color";var Uo=class extends Sn{constructor(e,n,i,s){super(e,n,i,s)}};Uo.prototype.ValueTypeName="number";var Bo=class extends Ni{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=(i-n)/(s-n),o=e*h;for(let d=o+h;o!==d;o+=4)xn.slerpFlat(r,0,a,o-h,a,o,l);return r}},Xr=class extends Sn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Sn{constructor(e,n,i){super(e,n,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Cr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Sn{constructor(e,n,i,s){super(e,n,i,s)}};Oo.prototype.ValueTypeName="vector";var zo=class{constructor(e,n,i){let s=this,r=!1,a=0,h=0,l,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){h++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,h),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,h),a===h&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return o.push(d,u),this},this.removeHandler=function(d){let u=o.indexOf(d);return u!==-1&&o.splice(u,2),this},this.getHandler=function(d){for(let u=0,c=o.length;u<c;u+=2){let f=o[u],g=o[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dd=new zo,Ho=class{constructor(e){this.manager=e!==void 0?e:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=class extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Yr=class extends $r{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},Lh=new lt,Vu=new I,Gu=new I,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera;Vu.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vu),Gu.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Gu),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,s){Lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,h=s?s.w/r.y:1,l=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===Us||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*h,0,.5*h+o,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*h,0,.5*h+o,0,0,.5,.5,0,0,0,1),n.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},so=new I,ro=new xn,ei=new I,jr=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(so,ro,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(so,ro,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new I,Wu=new He,qu=new He,tn=class extends jr{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,Wu,qu),n.subVectors(qu,Wu)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(lo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/o,s*=a.width/l,i*=a.height/o}let h=this.filmOffset;h!==0&&(r+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Xs=class extends jr{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,h=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,h-=d*this.view.offsetY,l=h-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,h,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Bh=class extends Vo{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jr=class extends $r{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Is=-90,Ls=1,Go=class extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Is,Ls,e,n);s.layers=this.layers,this.add(s);let r=new tn(Is,Ls,e,n);r.layers=this.layers,this.add(r);let a=new tn(Is,Ls,e,n);a.layers=this.layers,this.add(a);let h=new tn(Is,Ls,e,n);h.layers=this.layers,this.add(h);let l=new tn(Is,Ls,e,n);l.layers=this.layers,this.add(l);let o=new tn(Is,Ls,e,n);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,h,l]=n;for(let o of n)this.remove(o);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of n)this.add(o),o.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,h,l,o,d]=this.children,u=e.getRenderTarget(),c=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(u,c,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wo=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var dc="\\[\\]\\.:\\/",$p=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Yp="[^"+dc.replace("\\.","")+"]",jp=/((?:WC+[\/:])*)/.source.replace("WC",fc),Jp=/(WCOD+)?/.source.replace("WCOD",Yp),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),Qp=new RegExp("^"+jp+Jp+Zp+Kp+"$"),em=["material","materials","bones","map"],Oh=class{constructor(e,n,i){let s=i||Tt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Tt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($p,"")}static parseTrackName(e){let n=Qp.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);em.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let h=r[a];if(h.name===n||h.uuid===n)return h;let l=i(h.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=n.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===o){o=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(o!==void 0){if(e[o]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=n.nodeName;ze("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Oh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kv=new Float32Array(1);var Xu=new lt,Zr=class{constructor(e,n,i=0,s=1/0){this.ray=new ki(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ze("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(e,n=!0,i=[]){return zh(e,this,i,n),i.sort($u),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)zh(e[s],this,i,n);return i.sort($u),i}};function $u(t,e){return t.distance-e.distance}function zh(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){let r=t.children;for(let a=0,h=r.length;a<h;a++)zh(r[a],e,n,!0)}}var Hh=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};function pc(t,e,n,i){let s=tm(i);switch(n){case oc:return t*e;case Qo:return t*e/s.components*s.byteLength;case el:return t*e/s.components*s.byteLength;case Gi:return t*e*2/s.components*s.byteLength;case tl:return t*e*2/s.components*s.byteLength;case lc:return t*e*3/s.components*s.byteLength;case Ln:return t*e*4/s.components*s.byteLength;case nl:return t*e*4/s.components*s.byteLength;case ta:case na:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sl:case al:return Math.max(t,16)*Math.max(e,8)/4;case il:case rl:return Math.max(t,8)*Math.max(e,8)/2;case ol:case ll:case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hl:case ra:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Al:case Cl:case Rl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Pl:case kl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case aa:case Il:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tm(t){switch(t){case mn:case ic:return{byteLength:1,components:1};case js:case sc:case Yn:return{byteLength:2,components:1};case Zo:case Ko:return{byteLength:2,components:4};case $n:case Jo:case In:return{byteLength:4,components:1};case rc:case ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);function nf(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function nm(t){let e=new WeakMap;function n(h,l){let o=h.array,d=h.usage,u=o.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,o,d),h.onUploadCallback();let f;if(o instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=t.HALF_FLOAT;else if(o instanceof Uint16Array)h.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=t.SHORT;else if(o instanceof Uint32Array)f=t.UNSIGNED_INT;else if(o instanceof Int32Array)f=t.INT;else if(o instanceof Int8Array)f=t.BYTE;else if(o instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:c,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:h.version,size:u}}function i(h,l,o){let d=l.array,u=l.updateRanges;if(t.bindBuffer(o,h),u.length===0)t.bufferSubData(o,0,d);else{u.sort((f,g)=>f.start-g.start);let c=0;for(let f=1;f<u.length;f++){let g=u[c],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++c,u[c]=v)}u.length=c+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];t.bufferSubData(o,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);let l=e.get(h);l&&(t.deleteBuffer(l.buffer),e.delete(h))}function a(h,l){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let d=e.get(h);(!d||d.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let o=e.get(h);if(o===void 0)e.set(h,n(h,l));else if(o.version<h.version){if(o.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,h,l),o.version=h.version}}return{get:s,remove:r,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Em=`#define PI 3.141592653589793
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
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
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
#endif`,tg=`uniform sampler2D dfgLUT;
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
}`,ng=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,$g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,c0=`#if DEPTH_PACKING == 3200
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
}`,u0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,_0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,T0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,A0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,R0=`#define TOON
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
}`,P0=`#define TOON
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
}`,k0=`uniform float size;
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
}`,I0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,F0=`uniform float rotation;
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
}`,N0=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:hm,aomap_pars_fragment:cm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:ym,clipping_planes_fragment:bm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:xm,clipping_planes_vertex:_m,color_fragment:wm,color_pars_fragment:Sm,color_pars_vertex:Mm,color_vertex:Tm,common:Em,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Pm,emissivemap_fragment:km,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Fm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:jm,envmap_vertex:Om,fog_vertex:zm,fog_pars_vertex:Hm,fog_fragment:Vm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:qm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:$m,lights_pars_begin:Ym,lights_toon_fragment:Jm,lights_toon_pars_fragment:Zm,lights_phong_fragment:Km,lights_phong_pars_fragment:Qm,lights_physical_fragment:eg,lights_physical_pars_fragment:tg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,lightprobes_pars_fragment:rg,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:hg,map_fragment:cg,map_pars_fragment:ug,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:yg,morphnormal_vertex:bg,morphtarget_pars_vertex:vg,morphtarget_vertex:xg,normal_fragment_begin:_g,normal_fragment_maps:wg,normal_pars_fragment:Sg,normal_pars_vertex:Mg,normal_vertex:Tg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Pg,opaque_fragment:kg,packing:Ig,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Fg,dithering_pars_fragment:Ng,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:zg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Vg,skinbase_vertex:Gg,skinning_pars_vertex:Wg,skinning_vertex:qg,skinnormal_vertex:Xg,specularmap_fragment:$g,specularmap_pars_fragment:Yg,tonemapping_fragment:jg,tonemapping_pars_fragment:Jg,transmission_fragment:Zg,transmission_pars_fragment:Kg,uv_pars_fragment:Qg,uv_pars_vertex:e0,uv_vertex:t0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:a0,cube_vert:o0,cube_frag:l0,depth_vert:h0,depth_frag:c0,distance_vert:u0,distance_frag:d0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:y0,meshbasic_frag:b0,meshlambert_vert:v0,meshlambert_frag:x0,meshmatcap_vert:_0,meshmatcap_frag:w0,meshnormal_vert:S0,meshnormal_frag:M0,meshphong_vert:T0,meshphong_frag:E0,meshphysical_vert:A0,meshphysical_frag:C0,meshtoon_vert:R0,meshtoon_frag:P0,points_vert:k0,points_frag:I0,shadow_vert:L0,shadow_frag:D0,sprite_vert:F0,sprite_frag:N0},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},hi={basic:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:sn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:sn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:sn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:sn([ge.points,ge.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:sn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:sn([ge.common,ge.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:sn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:sn([ge.sprite,ge.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:sn([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:sn([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};hi.physical={uniforms:sn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Nl={r:0,b:0,g:0},U0=new lt,sf=new We;sf.set(-1,0,0,0,1,0,0,0,1);function B0(t,e,n,i,s,r){let a=new $e(0),h=s===!0?0:1,l,o,d=null,u=0,c=null;function f(_){let R=_.isScene===!0?_.background:null;if(R&&R.isTexture){let x=_.backgroundBlurriness>0;R=e.get(R,x)}return R}function g(_){let R=!1,x=f(_);x===null?p(a,h):x&&x.isColor&&(p(x,1),R=!0);let M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(_,R){let x=f(R);x&&(x.isCubeTexture||x.mapping===Qr)?(o===void 0&&(o=new Ne(new _n(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:rs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=x,o.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(R.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(sf),o.material.toneMapped=st.getTransfer(x.colorSpace)!==ut,(d!==x||u!==x.version||c!==t.toneMapping)&&(o.material.needsUpdate=!0,d=x,u=x.version,c=t.toneMapping),o.layers.enableAll(),_.unshift(o,o.geometry,o.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ne(new $t(2,2),new wn({name:"BackgroundMaterial",uniforms:rs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,c=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,R){_.getRGB(Nl,uc(t)),n.buffers.color.setClear(Nl.r,Nl.g,Nl.b,R,r)}function m(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,R=1){a.set(_),h=R,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,p(a,h)},render:g,addToRenderList:v,dispose:m}}function O0(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=c(null),r=s,a=!1;function h(w,k,z,L,V){let Y=!1,D=u(w,L,z,k);r!==D&&(r=D,o(r.object)),Y=f(w,L,z,V),Y&&g(w,L,z,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(w,k,z,L),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function o(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function u(w,k,z,L){let V=L.wireframe===!0,Y=i[k.id];Y===void 0&&(Y={},i[k.id]=Y);let D=w.isInstancedMesh===!0?w.id:0,ie=Y[D];ie===void 0&&(ie={},Y[D]=ie);let q=ie[z.id];q===void 0&&(q={},ie[z.id]=q);let K=q[V];return K===void 0&&(K=c(l()),q[V]=K),K}function c(w){let k=[],z=[],L=[];for(let V=0;V<n;V++)k[V]=0,z[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:L,object:w,attributes:{},index:null}}function f(w,k,z,L){let V=r.attributes,Y=k.attributes,D=0,ie=z.getAttributes();for(let q in ie)if(ie[q].location>=0){let N=V[q],J=Y[q];if(J===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;D++}return r.attributesNum!==D||r.index!==L}function g(w,k,z,L){let V={},Y=k.attributes,D=0,ie=z.getAttributes();for(let q in ie)if(ie[q].location>=0){let N=Y[q];N===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));let J={};J.attribute=N,N&&N.data&&(J.data=N.data),V[q]=J,D++}r.attributes=V,r.attributesNum=D,r.index=L}function v(){let w=r.newAttributes;for(let k=0,z=w.length;k<z;k++)w[k]=0}function p(w){m(w,0)}function m(w,k){let z=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;z[w]=1,L[w]===0&&(t.enableVertexAttribArray(w),L[w]=1),V[w]!==k&&(t.vertexAttribDivisor(w,k),V[w]=k)}function _(){let w=r.newAttributes,k=r.enabledAttributes;for(let z=0,L=k.length;z<L;z++)k[z]!==w[z]&&(t.disableVertexAttribArray(z),k[z]=0)}function R(w,k,z,L,V,Y,D){D===!0?t.vertexAttribIPointer(w,k,z,V,Y):t.vertexAttribPointer(w,k,z,L,V,Y)}function x(w,k,z,L){v();let V=L.attributes,Y=z.getAttributes(),D=k.defaultAttributeValues;for(let ie in Y){let q=Y[ie];if(q.location>=0){let K=V[ie];if(K===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),K!==void 0){let N=K.normalized,J=K.itemSize,oe=e.get(K);if(oe===void 0)continue;let Ve=oe.buffer,Ie=oe.type,Ge=oe.bytesPerElement,O=Ie===t.INT||Ie===t.UNSIGNED_INT||K.gpuType===Jo;if(K.isInterleavedBufferAttribute){let Z=K.data,he=Z.stride,X=K.offset;if(Z.isInstancedInterleavedBuffer){for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee,Z.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ee=0;ee<q.locationSize;ee++)p(q.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ee=0;ee<q.locationSize;ee++)R(q.location+ee,J/q.locationSize,Ie,N,he*Ge,(X+J/q.locationSize*ee)*Ge,O)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)m(q.location+Z,K.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<q.locationSize;Z++)p(q.location+Z);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Z=0;Z<q.locationSize;Z++)R(q.location+Z,J/q.locationSize,Ie,N,J*Ge,J/q.locationSize*Z*Ge,O)}}else if(D!==void 0){let N=D[ie];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(q.location,N);break;case 3:t.vertexAttrib3fv(q.location,N);break;case 4:t.vertexAttrib4fv(q.location,N);break;default:t.vertexAttrib1fv(q.location,N)}}}}_()}function M(){E();for(let w in i){let k=i[w];for(let z in k){let L=k[z];for(let V in L){let Y=L[V];for(let D in Y)d(Y[D].object),delete Y[D];delete L[V]}}delete i[w]}}function T(w){if(i[w.id]===void 0)return;let k=i[w.id];for(let z in k){let L=k[z];for(let V in L){let Y=L[V];for(let D in Y)d(Y[D].object),delete Y[D];delete L[V]}}delete i[w.id]}function C(w){for(let k in i){let z=i[k];for(let L in z){let V=z[L];if(V[w.id]===void 0)continue;let Y=V[w.id];for(let D in Y)d(Y[D].object),delete Y[D];delete V[w.id]}}}function b(w){for(let k in i){let z=i[k],L=w.isInstancedMesh===!0?w.id:0,V=z[L];if(V!==void 0){for(let Y in V){let D=V[Y];for(let ie in D)d(D[ie].object),delete D[ie];delete V[Y]}delete z[L],Object.keys(z).length===0&&delete i[k]}}}function E(){A(),a=!0,r!==s&&(r=s,o(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:E,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function z0(t,e,n){let i;function s(l){i=l}function r(l,o){t.drawArrays(i,l,o),n.update(o,i,1)}function a(l,o,d){d!==0&&(t.drawArraysInstanced(i,l,o,d),n.update(o,i,d))}function h(l,o,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,o,0,d);let c=0;for(let f=0;f<d;f++)c+=o[f];n.update(c,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=h}function H0(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ln&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(C){let b=C===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==mn&&C!==In&&!b&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=n.precision!==void 0?n.precision:"highp",d=l(o);d!==o&&(Be("WebGLRenderer:",o,"not supported, using",d,"instead."),o=d);let u=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:h,precision:o,logarithmicDepthBuffer:u,reversedDepthBuffer:c,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:R,maxFragmentUniforms:x,maxSamples:M,samples:T}}function V0(t){let e=this,n=null,i=0,s=!1,r=!1,a=new vn,h=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,c){let f=u.length!==0||c||i!==0||s;return s=c,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,c){n=d(u,c,0)},this.setState=function(u,c,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=t.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):o();else{let _=r?0:i,R=_*4,x=m.clippingState||null;l.value=x,x=d(g,c,R,f);for(let M=0;M!==R;++M)x[M]=n[M];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function o(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,c,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,_=c.matrixWorldInverse;h.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,x=f;R!==v;++R,x+=4)a.copy(u[R]).applyMatrix4(_,h),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var Ks=4,G0=6,W0=20,q0=256,oa=new Xs,Fd=new $e,mc=null,gc=0,yc=0,bc=!1,X0=new I,as=new I,Bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:h=X0}=r;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,h),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,yc),this._renderer.xr.enabled=bc,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zi||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Yn,format:Ln,colorSpace:Rr,depthBuffer:!1},s=Nd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$0(r)),this._blurMaterial=j0(r,e,n),this._ggxMaterial=Y0(r,e,n)}return s}_compileMaterial(e){let n=new Ne(new Bt,e);this._renderer.compile(n,oa)}_sceneToCubeUV(e,n,i,s,r){let l=new tn(90,1,n,i),o=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(Fd),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new _n,new pn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,m=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Fd),m=!0);for(let R=0;R<6;R++){let x=R%3;x===0?(l.up.set(0,o[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):x===1?(l.up.set(0,0,o[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,o[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));let M=this._cubeSize;Zs(s,x*M,R>2?M:0,M,M),u.setRenderTarget(s),m&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=c,e.background=_}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===zi||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let h=r.uniforms;h.envMap.value=e;let l=this._cubeSize;Zs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,oa)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,h=this._lodMeshes[i];h.material=a;let l=a.uniforms,o=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),u=Math.sqrt(o*o-d*d),c=o*1.25,f=u*c,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-Ks?i-g+Ks:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-n,Zs(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(h,oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Zs(e,p,m,3*v,2*v),s.setRenderTarget(e),s.render(h,oa)}_blur(e,n,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,n,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,n,i,s,r){let a=this._renderer,h=this._blurMaterial,l=this._lodMeshes[s];l.material=h;let o=h.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-Ks?s-this._lodMax+Ks:0),c=4*(this._cubeSize-d);Zs(n,u,c,3*d,2*d),a.setRenderTarget(n),a.render(l,oa)}};function $0(t){let e=[],n=[],i=t,s=t-Ks+1+G0;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let h=1/(a-2),l=-h,o=1+h,d=[l,l,o,l,o,o,l,l,o,o,l,o],u=6,c=6,f=3,g=new Float32Array(f*c*u),v=new Float32Array(f*c*u);for(let m=0;m<u;m++){let _=m%3*2/3-1,R=m>2?0:-1,x=[_,R,0,_+2/3,R,0,_+2/3,R+1,0,_,R,0,_+2/3,R+1,0,_,R+1,0];g.set(x,f*c*m);for(let M=0;M<c;M++){let T=d[M*2]*2-1,C=d[M*2+1]*2-1;m===0?as.set(1,C,T):m===1?as.set(-T,1,-C):m===2?as.set(-T,C,1):m===3?as.set(-1,C,-T):m===4?as.set(-T,-1,C):as.set(T,C,-1),as.toArray(v,(m*c+M)*f)}}let p=new Bt;p.setAttribute("position",new dn(g,f)),p.setAttribute("outputDirection",new dn(v,f)),n.push(new Ne(p,null)),i>Ks&&i--}return{lodMeshes:n,sizeLods:e}}function Nd(t,e,n){let i=new fn(t,e,n);return i.texture.mapping=Qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Y0(t,e,n){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function j0(t,e,n){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:W0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ud(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Bd(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ol=class extends fn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vr(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:oi});r.uniforms.tEquirect.value=n;let a=new Ne(s,r),h=n.minFilter;return n.minFilter===Hi&&(n.minFilter=jt),new Go(1,10,this).update(e,a),n.minFilter=h,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}};function J0(t){let e=new WeakMap,n=new WeakMap,i=null;function s(c,f=!1){return c==null?null:f?a(c):r(c)}function r(c){if(c&&c.isTexture){let f=c.mapping;if(f===$o||f===Yo)if(e.has(c)){let g=e.get(c).texture;return h(g,c.mapping)}else{let g=c.image;if(g&&g.height>0){let v=new Ol(g.height);return v.fromEquirectangularTexture(t,c),e.set(c,v),c.addEventListener("dispose",o),h(v.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){let f=c.mapping,g=f===$o||f===Yo,v=f===zi||f===ss;if(g||v){let p=n.get(c),m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return i===null&&(i=new Bl(t)),p=g?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,n.set(c,p),p.texture;if(p!==void 0)return p.texture;{let _=c.image;return g&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new Bl(t)),p=g?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,n.set(c,p),c.addEventListener("dispose",d),p.texture):null}}}return c}function h(c,f){return f===$o?c.mapping=zi:f===Yo&&(c.mapping=ss),c}function l(c){let f=0,g=6;for(let v=0;v<g;v++)c[v]!==void 0&&f++;return f===g}function o(c){let f=c.target;f.removeEventListener("dispose",o);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(c){let f=c.target;f.removeEventListener("dispose",d);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function u(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Z0(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&es("WebGLRenderer: "+i+" extension not supported."),s}}}function K0(t,e,n,i){let s={},r=new WeakMap;function a(u){let c=u.target;c.index!==null&&e.remove(c.index);for(let g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete s[c.id];let f=r.get(c);f&&(e.remove(f),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function h(u,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,n.memory.geometries++),c}function l(u){let c=u.attributes;for(let f in c)e.update(c[f],t.ARRAY_BUFFER)}function o(u){let c=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let R=0,x=_.length;R<x;R+=3){let M=_[R+0],T=_[R+1],C=_[R+2];c.push(M,T,T,C,C,M)}}else{let _=g.array;v=g.version;for(let R=0,x=_.length/3-1;R<x;R+=3){let M=R+0,T=R+1,C=R+2;c.push(M,T,T,C,C,M)}}let p=new(g.count>=65535?Ur:Nr)(c,1);p.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function d(u){let c=r.get(u);if(c){let f=u.index;f!==null&&c.version<f.version&&o(u)}else o(u);return r.get(u)}return{get:h,update:l,getWireframeAttribute:d}}function Q0(t,e,n){let i;function s(u){i=u}let r,a;function h(u){r=u.type,a=u.bytesPerElement}function l(u,c){t.drawElements(i,c,r,u*a),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawElementsInstanced(i,c,r,u*a,f),n.update(c,i,f))}function d(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=c[p];n.update(v,i,1)}this.setMode=s,this.setIndex=h,this.render=l,this.renderInstances=o,this.renderMultiDraw=d}function ey(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,h){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=h*(r/3);break;case t.LINES:n.lines+=h*(r/2);break;case t.LINE_STRIP:n.lines+=h*(r-1);break;case t.LINE_LOOP:n.lines+=h*r;break;case t.POINTS:n.points+=h*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ty(t,e,n){let i=new WeakMap,s=new Ct;function r(a,h,l){let o=a.morphTargetInfluences,d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,u=d!==void 0?d.length:0,c=i.get(h);if(c===void 0||c.count!==u){let E=function(){C.dispose(),i.delete(h),h.removeEventListener("dispose",E)};c!==void 0&&c.texture.dispose();let f=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,p=h.morphAttributes.position||[],m=h.morphAttributes.normal||[],_=h.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),v===!0&&(R=3);let x=h.attributes.position.count*R,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*M*4*u),C=new Lr(T,x,M,u);C.type=In,C.needsUpdate=!0;let b=R*4;for(let A=0;A<u;A++){let w=p[A],k=m[A],z=_[A],L=x*M*4*A;for(let V=0;V<w.count;V++){let Y=V*b;f===!0&&(s.fromBufferAttribute(w,V),T[L+Y+0]=s.x,T[L+Y+1]=s.y,T[L+Y+2]=s.z,T[L+Y+3]=0),g===!0&&(s.fromBufferAttribute(k,V),T[L+Y+4]=s.x,T[L+Y+5]=s.y,T[L+Y+6]=s.z,T[L+Y+7]=0),v===!0&&(s.fromBufferAttribute(z,V),T[L+Y+8]=s.x,T[L+Y+9]=s.y,T[L+Y+10]=s.z,T[L+Y+11]=z.itemSize===4?s.w:1)}}c={count:u,texture:C,size:new He(x,M)},i.set(h,c),h.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let v=0;v<o.length;v++)f+=o[v];let g=h.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",o)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:r}}function ny(t,e,n,i,s){let r=new WeakMap;function a(o){let d=s.render.frame,u=o.geometry,c=e.get(o,u);if(r.get(c)!==d&&(e.update(c),r.set(c,d)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),r.get(o)!==d&&(n.update(o.instanceMatrix,t.ARRAY_BUFFER),o.instanceColor!==null&&n.update(o.instanceColor,t.ARRAY_BUFFER),r.set(o,d))),o.isSkinnedMesh){let f=o.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return c}function h(){r=new WeakMap}function l(o){let d=o.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:h}}var iy={[jh]:"LINEAR_TONE_MAPPING",[Jh]:"REINHARD_TONE_MAPPING",[Zh]:"CINEON_TONE_MAPPING",[Kh]:"ACES_FILMIC_TONE_MAPPING",[ec]:"AGX_TONE_MAPPING",[tc]:"NEUTRAL_TONE_MAPPING",[Qh]:"CUSTOM_TONE_MAPPING"};function sy(t,e,n,i,s,r){let a=new fn(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,l=null,o=new Bt;o.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new dt([0,2,0,0,2,0],2));let d=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ne(o,d),c=new Xs(-1,1,1,-1,0,1),f=null,g=null,v=!1,p,m=null,_=[],R=!1;this.setSize=function(x,M){a.setSize(x,M),h!==null&&h.setSize(x,M),l!==null&&l.setSize(x,M);for(let T=0;T<_.length;T++){let C=_[T];C.setSize&&C.setSize(x,M)}},this.setEffects=function(x){_=x,R=_.length>0&&_[0].isRenderPass===!0;let M=a.width,T=a.height;_.length>0&&h===null&&(h=new fn(M,T,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(M,T,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let b=_[C];b.setSize&&b.setSize(M,T)}},this.begin=function(x,M){if(v||x.toneMapping===Xn&&_.length===0)return!1;if(m=M,M!==null){let T=M.width,C=M.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return R===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=Xn,!0},this.hasRenderPass=function(){return R},this.end=function(x,M){x.toneMapping=p,v=!0;let T=a,C=h;for(let b=0;b<_.length;b++){let E=_[b];E.enabled!==!1&&(E.render(x,C,T,M),E.needsSwap!==!1&&(T=C,C=C===h?l:h))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,d.defines={},st.getTransfer(f)===ut&&(d.defines.SRGB_TRANSFER="");let b=iy[g];b&&(d.defines[b]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(u,c),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),h!==null&&h.dispose(),l!==null&&l.dispose(),o.dispose(),d.dispose()}}var rf=new ln,_c=new Di(1,1),af=new Lr,of=new wo,lf=new Vr,Od=[],zd=[],Hd=new Float32Array(16),Vd=new Float32Array(9),Gd=new Float32Array(4);function er(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Od[s];if(r===void 0&&(r=new Float32Array(s),Od[s]=r),e!==0){i.toArray(r,0);for(let a=1,h=0;a!==e;++a)h+=n,t[a].toArray(r,h)}return r}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vl(t,e){let n=zd[e];n===void 0&&(n=new Int32Array(e),zd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ry(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ay(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function oy(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function ly(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function hy(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;Gd.set(i),t.uniformMatrix2fv(this.addr,!1,Gd),zt(n,i)}}function cy(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;Vd.set(i),t.uniformMatrix3fv(this.addr,!1,Vd),zt(n,i)}}function uy(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;Hd.set(i),t.uniformMatrix4fv(this.addr,!1,Hd),zt(n,i)}}function dy(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fy(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function py(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function my(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function gy(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yy(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function by(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function vy(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function xy(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(_c.compareFunction=n.isReversedDepthBuffer()?Fl:Dl,r=_c):r=rf,n.setTexture2D(e||r,s)}function _y(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||of,s)}function wy(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||lf,s)}function Sy(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||af,s)}function My(t){switch(t){case 5126:return ry;case 35664:return ay;case 35665:return oy;case 35666:return ly;case 35674:return hy;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return yy;case 36295:return by;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Sy}}function Ty(t,e){t.uniform1fv(this.addr,e)}function Ey(t,e){let n=er(e,this.size,2);t.uniform2fv(this.addr,n)}function Ay(t,e){let n=er(e,this.size,3);t.uniform3fv(this.addr,n)}function Cy(t,e){let n=er(e,this.size,4);t.uniform4fv(this.addr,n)}function Ry(t,e){let n=er(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Py(t,e){let n=er(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ky(t,e){let n=er(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Iy(t,e){t.uniform1iv(this.addr,e)}function Ly(t,e){t.uniform2iv(this.addr,e)}function Dy(t,e){t.uniform3iv(this.addr,e)}function Fy(t,e){t.uniform4iv(this.addr,e)}function Ny(t,e){t.uniform1uiv(this.addr,e)}function Uy(t,e){t.uniform2uiv(this.addr,e)}function By(t,e){t.uniform3uiv(this.addr,e)}function Oy(t,e){t.uniform4uiv(this.addr,e)}function zy(t,e,n){let i=this.cache,s=e.length,r=Vl(n,s);Ot(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=_c:a=rf;for(let h=0;h!==s;++h)n.setTexture2D(e[h]||a,r[h])}function Hy(t,e,n){let i=this.cache,s=e.length,r=Vl(n,s);Ot(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||of,r[a])}function Vy(t,e,n){let i=this.cache,s=e.length,r=Vl(n,s);Ot(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||lf,r[a])}function Gy(t,e,n){let i=this.cache,s=e.length,r=Vl(n,s);Ot(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||af,r[a])}function Wy(t){switch(t){case 5126:return Ty;case 35664:return Ey;case 35665:return Ay;case 35666:return Cy;case 35674:return Ry;case 35675:return Py;case 35676:return ky;case 5124:case 35670:return Iy;case 35667:case 35671:return Ly;case 35668:case 35672:return Dy;case 35669:case 35673:return Fy;case 5125:return Ny;case 36294:return Uy;case 36295:return By;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}var wc=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=My(n.type)}},Sc=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Wy(n.type)}},Mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let h=s[r];h.setValue(e,n[h.id],i)}}},vc=/(\w+)(\])?(\[|\.)?/g;function Wd(t,e){t.seq.push(e),t.map[e.id]=e}function qy(t,e,n){let i=t.name,s=i.length;for(vc.lastIndex=0;;){let r=vc.exec(i),a=vc.lastIndex,h=r[1],l=r[2]==="]",o=r[3];if(l&&(h=h|0),o===void 0||o==="["&&a+2===s){Wd(n,o===void 0?new wc(h,t,e):new Sc(h,t,e));break}else{let u=n.map[h];u===void 0&&(u=new Mc(h),Wd(n,u)),n=u}}}var Qs=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let h=e.getActiveUniform(n,a),l=e.getUniformLocation(n,h.name);qy(h,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let h=n[r],l=i[h.id];l.needsUpdate!==!1&&h.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function qd(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Xy=37297,$y=0;function Yy(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let h=a+1;i.push(`${h===e?">":" "} ${h}: ${n[a]}`)}return i.join(`
`)}var Xd=new We;function jy(t){st._getMatrix(Xd,st.workingColorSpace,t);let e=`mat3( ${Xd.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Pr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $d(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let h=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Yy(t.getShaderSource(e),h)}else return r}function Jy(t,e){let n=jy(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Zy={[jh]:"Linear",[Jh]:"Reinhard",[Zh]:"Cineon",[Kh]:"ACESFilmic",[ec]:"AgX",[tc]:"Neutral",[Qh]:"Custom"};function Ky(t,e){let n=Zy[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ul=new I;function Qy(){st.getLuminanceCoefficients(Ul);let t=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function tb(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nb(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,h=1;r.type===t.FLOAT_MAT2&&(h=2),r.type===t.FLOAT_MAT3&&(h=3),r.type===t.FLOAT_MAT4&&(h=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:h}}return n}function ha(t){return t!==""}function Yd(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(t){return t.replace(ib,rb)}var sb=new Map;function rb(t,e){let n=Ze[e];if(n===void 0){let i=sb.get(e);if(i!==void 0)n=Ze[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tc(n)}var ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(t){return t.replace(ab,ob)}function ob(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var lb={[Kr]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function hb(t){return lb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cb={[zi]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function ub(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":cb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var db={[ss]:"ENVMAP_MODE_REFRACTION"};function fb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":db[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pb={[Yh]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function mb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":pb[t.combine]||"ENVMAP_BLENDING_NONE"}function gb(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yb(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,h=n.fragmentShader,l=hb(n),o=ub(n),d=fb(n),u=mb(n),c=gb(n),f=eb(n),g=tb(r),v=s.createProgram(),p,m,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`)):(p=[Zd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),m=[Zd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+o:"",n.envMap?"#define "+d:"",n.envMap?"#define "+u:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xn?"#define TONE_MAPPING":"",n.toneMapping!==Xn?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Xn?Ky("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Jy("linearToOutputTexel",n.outputColorSpace),Qy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),a=Tc(a),a=Yd(a,n),a=jd(a,n),h=Tc(h),h=Yd(h,n),h=jd(h,n),a=Jd(a),h=Jd(h),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=_+p+a,x=_+m+h,M=qd(s,s.VERTEX_SHADER,R),T=qd(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,T),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(w){if(t.debug.checkShaderErrors){let k=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(T)||"",V=k.trim(),Y=z.trim(),D=L.trim(),ie=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,M,T);else{let K=$d(s,M,"vertex"),N=$d(s,T,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+K+`
`+N)}else V!==""?Be("WebGLProgram: Program Info Log:",V):(Y===""||D==="")&&(q=!1);q&&(w.diagnostics={runnable:ie,programLog:V,vertexShader:{log:Y,prefix:p},fragmentShader:{log:D,prefix:m}})}s.deleteShader(M),s.deleteShader(T),b=new Qs(s,v),E=nb(s,v)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,Xy)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=T,this}var bb=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Ac(e),n.set(e,i)),i}},Ac=class{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}};function vb(t){return t===Gi||t===ra||t===aa}function xb(t,e,n,i,s,r){let a=new zs,h=new Ec,l=new Set,o=[],d=new Map,u=i.logarithmicDepthBuffer,c=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function v(b,E,A,w,k,z){let L=w.fog,V=k.geometry,Y=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?w.environment:null,D=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ie=e.get(b.envMap||Y,D),q=ie&&ie.mapping===Qr?ie.image.height:null,K=f[b.type];b.precision!==null&&(c=i.getMaxPrecision(b.precision),c!==b.precision&&Be("WebGLProgram.getParameters:",b.precision,"not supported, using",c,"instead."));let N=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,J=N!==void 0?N.length:0,oe=0;V.morphAttributes.position!==void 0&&(oe=1),V.morphAttributes.normal!==void 0&&(oe=2),V.morphAttributes.color!==void 0&&(oe=3);let Ve,Ie,Ge,O;if(K){let _t=hi[K];Ve=_t.vertexShader,Ie=_t.fragmentShader}else{Ve=b.vertexShader,Ie=b.fragmentShader;let _t=h.getVertexShaderStage(b),ht=h.getFragmentShaderStage(b);h.update(b,_t,ht),Ge=_t.id,O=ht.id}let Z=t.getRenderTarget(),he=t.state.buffers.depth.getReversed(),X=k.isInstancedMesh===!0,ee=k.isBatchedMesh===!0,Te=!!b.map,Oe=!!b.matcap,Re=!!ie,Xe=!!b.aoMap,et=!!b.lightMap,it=!!b.bumpMap&&b.wireframe===!1,At=!!b.normalMap,Vt=!!b.displacementMap,un=!!b.emissiveMap,kt=!!b.metalnessMap,Lt=!!b.roughnessMap,B=b.anisotropy>0,Zt=b.clearcoat>0,pt=b.dispersion>0,P=b.retroreflectivity>0,y=b.iridescence>0,H=b.sheen>0,$=b.transmission>0,Q=B&&!!b.anisotropyMap,le=Zt&&!!b.clearcoatMap,ce=Zt&&!!b.clearcoatNormalMap,ne=Zt&&!!b.clearcoatRoughnessMap,re=y&&!!b.iridescenceMap,ue=y&&!!b.iridescenceThicknessMap,Le=H&&!!b.sheenColorMap,me=H&&!!b.sheenRoughnessMap,de=!!b.specularMap,De=!!b.specularColorMap,Ue=!!b.specularIntensityMap,je=$&&!!b.transmissionMap,U=$&&!!b.thicknessMap,fe=!!b.gradientMap,se=!!b.alphaMap,pe=b.alphaTest>0,xe=!!b.alphaHash,ae=!!b.extensions,Fe=Xn;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Fe=t.toneMapping);let Pe={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:Ie,defines:b.defines,customVertexShaderID:Ge,customFragmentShaderID:O,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:c,batching:ee,batchingColor:ee&&k._colorsTexture!==null,instancing:X,instancingColor:X&&k.instanceColor!==null,instancingMorph:X&&k.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Te,matcap:Oe,envMap:Re,envMapMode:Re&&ie.mapping,envMapCubeUVHeight:q,aoMap:Xe,lightMap:et,bumpMap:it,normalMap:At,displacementMap:Vt,emissiveMap:un,normalMapObjectSpace:At&&b.normalMapType===bd,normalMapTangentSpace:At&&b.normalMapType===Ll,packedNormalMap:At&&b.normalMapType===Ll&&vb(b.normalMap.format),metalnessMap:kt,roughnessMap:Lt,anisotropy:B,anisotropyMap:Q,clearcoat:Zt,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:ne,dispersion:pt,retroreflection:P,iridescence:y,iridescenceMap:re,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:Le,sheenRoughnessMap:me,specularMap:de,specularColorMap:De,specularIntensityMap:Ue,transmission:$,transmissionMap:je,thicknessMap:U,gradientMap:fe,opaque:b.transparent===!1&&b.blending===Ys&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:pe,alphaHash:xe,combine:b.combine,mapUv:Te&&g(b.map.channel),aoMapUv:Xe&&g(b.aoMap.channel),lightMapUv:et&&g(b.lightMap.channel),bumpMapUv:it&&g(b.bumpMap.channel),normalMapUv:At&&g(b.normalMap.channel),displacementMapUv:Vt&&g(b.displacementMap.channel),emissiveMapUv:un&&g(b.emissiveMap.channel),metalnessMapUv:kt&&g(b.metalnessMap.channel),roughnessMapUv:Lt&&g(b.roughnessMap.channel),anisotropyMapUv:Q&&g(b.anisotropyMap.channel),clearcoatMapUv:le&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(b.sheenRoughnessMap.channel),specularMapUv:de&&g(b.specularMap.channel),specularColorMapUv:De&&g(b.specularColorMap.channel),specularIntensityMapUv:Ue&&g(b.specularIntensityMap.channel),transmissionMapUv:je&&g(b.transmissionMap.channel),thicknessMapUv:U&&g(b.thicknessMap.channel),alphaMapUv:se&&g(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(At||B),vertexNormals:!!V.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Te||se),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||V.attributes.normal===void 0&&At===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:oe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Te&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:un&&b.emissiveMap.isVideoTexture===!0&&st.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===kn,flipSided:b.side===hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ae&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&b.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)E.push(A),E.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(m(E,b),_(E,b),E.push(t.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function m(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numSunLights),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numSunLightShadows),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function _(b,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function R(b){let E=f[b.type],A;if(E){let w=hi[E];A=Id.clone(w.uniforms)}else A=b.uniforms;return A}function x(b,E){let A=d.get(E);return A!==void 0?++A.usedTimes:(A=new yb(t,E,b,s),o.push(A),d.set(E,A)),A}function M(b){if(--b.usedTimes===0){let E=o.indexOf(b);o[E]=o[o.length-1],o.pop(),d.delete(b.cacheKey),b.destroy()}}function T(b){h.remove(b)}function C(){h.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:R,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:o,dispose:C}}function _b(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let h=t.get(a);return h===void 0&&(h={},t.set(a,h)),h}function i(a){t.delete(a)}function s(a,h,l){t.get(a)[h]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function wb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Kd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qd(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(c){let f=0;return c.isInstancedMesh&&(f+=2),c.isSkinnedMesh&&(f+=1),f}function h(c,f,g,v,p,m){let _=t[e];return _===void 0?(_={id:c.id,object:c,geometry:f,material:g,materialVariant:a(c),groupOrder:v,renderOrder:c.renderOrder,z:p,group:m},t[e]=_):(_.id=c.id,_.object=c,_.geometry=f,_.material=g,_.materialVariant=a(c),_.groupOrder=v,_.renderOrder=c.renderOrder,_.z=p,_.group=m),e++,_}function l(c,f,g,v,p,m,_){_.reversedDepth===!0&&(p=-p);let R=h(c,f,g,v,p,m);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):n.push(R)}function o(c,f,g,v,p,m){let _=h(c,f,g,v,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):n.unshift(_)}function d(c,f){n.length>1&&n.sort(c||wb),i.length>1&&i.sort(f||Kd),s.length>1&&s.sort(f||Kd)}function u(){for(let c=e,f=t.length;c<f;c++){let g=t[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:o,finish:u,sort:d}}function Sb(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new Qd,t.set(i,[a])):s>=r.length?(a=new Qd,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Mb(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new I,color:new $e};break;case"SpotLight":n={position:new I,direction:new I,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function Tb(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var Eb=0;function Ab(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Cb(t){let e=new Mb,n=Tb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new I);let s=new I,r=new lt,a=new lt;function h(o){let d=0,u=0,c=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,_=0,R=0,x=0,M=0,T=0,C=0,b=0,E=0,A=0;o.sort(Ab);for(let k=0,z=o.length;k<z;k++){let L=o[k],V=L.color,Y=L.intensity,D=L.distance,ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Gi?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=V.r*Y,u+=V.g*Y,c+=V.b*Y;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],Y);A++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,N=n.get(L);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[g]=N,i.sunShadowMap[g]=ie;let J=K.getViewportCount();for(let oe=0;oe<J;oe++)i.sunShadowMatrix[v+oe]=K.getMatrix(oe),i.sunShadowCascade[v+oe]=K._cascadeData[oe];v+=J,g++}i.sun[f]=q,f++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,N=n.get(L);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=L.shadow.matrix,M++}i.directional[p]=q,p++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(V).multiplyScalar(Y),q.distance=D,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[_]=q;let K=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,K.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[_]=K.matrix,L.castShadow){let N=n.get(L);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=ie,C++}_++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(V).multiplyScalar(Y),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[R]=q,R++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let K=L.shadow,N=n.get(L);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=L.shadow.matrix,T++}i.point[m]=q,m++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(Y),q.groundColor.copy(L.groundColor).multiplyScalar(Y),i.hemi[x]=q,x++}}R>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=c;let w=i.hash;(w.sunLength!==f||w.directionalLength!==p||w.pointLength!==m||w.spotLength!==_||w.rectAreaLength!==R||w.hemiLength!==x||w.numSunShadows!==g||w.numDirectionalShadows!==M||w.numPointShadows!==T||w.numSpotShadows!==C||w.numSpotMaps!==b||w.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=R,i.point.length=m,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,w.sunLength=f,w.directionalLength=p,w.pointLength=m,w.spotLength=_,w.rectAreaLength=R,w.hemiLength=x,w.numSunShadows=g,w.numDirectionalShadows=M,w.numPointShadows=T,w.numSpotShadows=C,w.numSpotMaps=b,w.numLightProbes=A,i.version=Eb++)}function l(o,d){let u=0,c=0,f=0,g=0,v=0,p=0,m=d.matrixWorldInverse;for(let _=0,R=o.length;_<R;_++){let x=o[_];if(x.isSunLight){let M=i.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),u++}else if(x.isDirectionalLight){let M=i.directional[c];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),c++}else if(x.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let M=i.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:h,setupView:l,state:i}}function ef(t){let e=new Cb(t),n=[],i=[],s=[];function r(c){u.camera=c,n.length=0,i.length=0,s.length=0}function a(c){n.push(c)}function h(c){i.push(c)}function l(c){s.push(c)}function o(){e.setup(n)}function d(c){e.setupView(n,c)}let u={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:d,pushLight:a,pushShadow:h,pushLightProbeGrid:l}}function Rb(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),h;return a===void 0?(h=new ef(t),e.set(s,[h])):r>=a.length?(h=new ef(t),a.push(h)):h=a[r],h}function i(){e=new WeakMap}return{get:n,dispose:i}}var Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kb=`uniform sampler2D shadow_pass;
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
}`,Ib=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Lb=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],tf=new lt,la=new I,xc=new I;function Db(t,e,n){let i=new Ws,s=new He,r=new He,a=new Ct,h=new Po,l=new ko,o={},d=n.maxTextureSize,u={[Oi]:hn,[hn]:Oi,[kn]:kn},c=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Pb,fragmentShader:kb}),f=c.clone();f.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ne(g,c),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let m=this.type;this.render=function(T,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Xo&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);let E=t.getRenderTarget(),A=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),k=t.state;k.setBlending(oi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=m!==this.type;z&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=T.length;L<V;L++){let Y=T[L],D=Y.shadow;if(D===void 0){Be("WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let ie=D.getFrameExtents();s.multiply(ie),r.copy(D.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,D.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,D.mapSize.y=r.y));let q=t.state.buffers.depth.getReversed();if(D.camera._reversedDepth=q,D.map===null||z===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===$s){if(Y.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new fn(s.x,s.y,{format:Gi,type:Yn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),D.map.texture.name=Y.name+".shadowMap",D.map.depthTexture=new Di(s.x,s.y,In),D.map.depthTexture.name=Y.name+".shadowMapDepth",D.map.depthTexture.format=si,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Wt,D.map.depthTexture.magFilter=Wt}else Y.isPointLight?(D.map=new Ol(s.x),D.map.depthTexture=new Ao(s.x,$n)):(D.map=new fn(s.x,s.y),D.map.depthTexture=new Di(s.x,s.y,$n)),D.map.depthTexture.name=Y.name+".shadowMap",D.map.depthTexture.format=si,this.type===Kr?(D.map.depthTexture.compareFunction=q?Fl:Dl,D.map.depthTexture.minFilter=jt,D.map.depthTexture.magFilter=jt):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Wt,D.map.depthTexture.magFilter=Wt);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);let K=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();Y.isPointLight!==!0&&D.updateMatrices(Y,b);for(let N=0;N<K;N++){let J=D.getCamera(N);if(Y.isPointLight){let oe=D.camera,Ve=D.matrix,Ie=Y.distance||oe.far;Ie!==oe.far&&(oe.far=Ie,oe.updateProjectionMatrix()),la.setFromMatrixPosition(Y.matrixWorld),oe.position.copy(la),xc.copy(oe.position),xc.add(Ib[N]),oe.up.copy(Lb[N]),oe.lookAt(xc),oe.updateMatrixWorld(),Ve.makeTranslation(-la.x,-la.y,-la.z),tf.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),D._frustum.setFromProjectionMatrix(tf,oe.coordinateSystem,oe.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)t.setRenderTarget(D.map,N),t.clear();else{N===0&&(t.setRenderTarget(D.map),t.clear());let oe=D.getViewport(N);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),k.viewport(a)}i=D.getFrustum(N),x(C,b,J,Y,this.type)}D.isPointLightShadow!==!0&&this.type===$s&&_(D,b),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(E,A,w)};function _(T,C){let b=e.update(v);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new fn(s.x,s.y,{format:Gi,type:Yn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value.set(T.map.width,T.map.height),c.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,b,c,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,b,f,v,null)}function R(T,C,b,E){let A=null,w=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)A=w;else if(A=b.isPointLight===!0?l:h,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let k=A.uuid,z=C.uuid,L=o[k];L===void 0&&(L={},o[k]=L);let V=L[z];V===void 0&&(V=A.clone(),L[z]=V,C.addEventListener("dispose",M)),A=V}if(A.visible=C.visible,A.wireframe=C.wireframe,E===$s?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:u[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let k=t.properties.get(A);k.light=b}return A}function x(T,C,b,E,A){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===$s)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let z=e.update(T),L=T.material;if(Array.isArray(L)){let V=z.groups;for(let Y=0,D=V.length;Y<D;Y++){let ie=V[Y],q=L[ie.materialIndex];if(q&&q.visible){let K=R(T,q,E,A);T.onBeforeShadow(t,T,C,b,z,K,ie),t.renderBufferDirect(b,null,z,K,T,ie),T.onAfterShadow(t,T,C,b,z,K,ie)}}}else if(L.visible){let V=R(T,L,E,A);T.onBeforeShadow(t,T,C,b,z,V,null),t.renderBufferDirect(b,null,z,V,T,null),T.onAfterShadow(t,T,C,b,z,V,null)}}let k=T.children;for(let z=0,L=k.length;z<L;z++)x(k[z],C,b,E,A)}function M(T){T.target.removeEventListener("dispose",M);for(let b in o){let E=o[b],A=T.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Fb(t,e){function n(){let U=!1,fe=new Ct,se=null,pe=new Ct(0,0,0,0);return{setMask:function(xe){se!==xe&&!U&&(t.colorMask(xe,xe,xe,xe),se=xe)},setLocked:function(xe){U=xe},setClear:function(xe,ae,Fe,Pe,_t){_t===!0&&(xe*=Pe,ae*=Pe,Fe*=Pe),fe.set(xe,ae,Fe,Pe),pe.equals(fe)===!1&&(t.clearColor(xe,ae,Fe,Pe),pe.copy(fe))},reset:function(){U=!1,se=null,pe.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,se=null,pe=null,xe=null;return{setReversed:function(ae){if(fe!==ae){let Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),fe=ae;let Pe=xe;xe=null,this.setClear(Pe)}},getReversed:function(){return fe},setTest:function(ae){ae?Z(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ae){se!==ae&&!U&&(t.depthMask(ae),se=ae)},setFunc:function(ae){if(fe&&(ae=Rd[ae]),pe!==ae){switch(ae){case ho:t.depthFunc(t.NEVER);break;case co:t.depthFunc(t.ALWAYS);break;case uo:t.depthFunc(t.LESS);break;case Fs:t.depthFunc(t.LEQUAL);break;case fo:t.depthFunc(t.EQUAL);break;case po:t.depthFunc(t.GEQUAL);break;case mo:t.depthFunc(t.GREATER);break;case go:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=ae}},setLocked:function(ae){U=ae},setClear:function(ae){xe!==ae&&(xe=ae,fe&&(ae=1-ae),t.clearDepth(ae))},reset:function(){U=!1,se=null,pe=null,xe=null,fe=!1}}}function s(){let U=!1,fe=null,se=null,pe=null,xe=null,ae=null,Fe=null,Pe=null,_t=null;return{setTest:function(ht){U||(ht?Z(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!U&&(t.stencilMask(ht),fe=ht)},setFunc:function(ht,zn,Kn){(se!==ht||pe!==zn||xe!==Kn)&&(t.stencilFunc(ht,zn,Kn),se=ht,pe=zn,xe=Kn)},setOp:function(ht,zn,Kn){(ae!==ht||Fe!==zn||Pe!==Kn)&&(t.stencilOp(ht,zn,Kn),ae=ht,Fe=zn,Pe=Kn)},setLocked:function(ht){U=ht},setClear:function(ht){_t!==ht&&(t.clearStencil(ht),_t=ht)},reset:function(){U=!1,fe=null,se=null,pe=null,xe=null,ae=null,Fe=null,Pe=null,_t=null}}}let r=new n,a=new i,h=new s,l=new WeakMap,o=new WeakMap,d={},u={},c={},f=new WeakMap,g=[],v=null,p=!1,m=null,_=null,R=null,x=null,M=null,T=null,C=null,b=new $e(0,0,0),E=0,A=!1,w=null,k=null,z=null,L=null,V=null,Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,ie=0,q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=ie>=2);let K=null,N={},J=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Ve=new Ct().fromArray(J),Ie=new Ct().fromArray(oe);function Ge(U,fe,se,pe){let xe=new Uint8Array(4),ae=t.createTexture();t.bindTexture(U,ae),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<se;Fe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(fe+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ae}let O={};O[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),h.setClear(0),Z(t.DEPTH_TEST),a.setFunc(Fs),it(!1),At(Vh),Z(t.CULL_FACE),Xe(oi);function Z(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function he(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function X(U,fe){return c[U]!==fe?(t.bindFramebuffer(U,fe),c[U]=fe,U===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function ee(U,fe){let se=g,pe=!1;if(U){se=f.get(fe),se===void 0&&(se=[],f.set(fe,se));let xe=U.textures;if(se.length!==xe.length||se[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Fe=xe.length;ae<Fe;ae++)se[ae]=t.COLOR_ATTACHMENT0+ae;se.length=xe.length,pe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,pe=!0);pe&&t.drawBuffers(se)}function Te(U){return v!==U?(t.useProgram(U),v=U,!0):!1}let Oe={[is]:t.FUNC_ADD,[Zu]:t.FUNC_SUBTRACT,[Ku]:t.FUNC_REVERSE_SUBTRACT};Oe[Qu]=t.MIN,Oe[ed]=t.MAX;let Re={[td]:t.ZERO,[nd]:t.ONE,[id]:t.SRC_COLOR,[Xh]:t.SRC_ALPHA,[hd]:t.SRC_ALPHA_SATURATE,[od]:t.DST_COLOR,[rd]:t.DST_ALPHA,[sd]:t.ONE_MINUS_SRC_COLOR,[$h]:t.ONE_MINUS_SRC_ALPHA,[ld]:t.ONE_MINUS_DST_COLOR,[ad]:t.ONE_MINUS_DST_ALPHA,[cd]:t.CONSTANT_COLOR,[ud]:t.ONE_MINUS_CONSTANT_COLOR,[dd]:t.CONSTANT_ALPHA,[fd]:t.ONE_MINUS_CONSTANT_ALPHA};function Xe(U,fe,se,pe,xe,ae,Fe,Pe,_t,ht){if(U===oi){p===!0&&(he(t.BLEND),p=!1);return}if(p===!1&&(Z(t.BLEND),p=!0),U!==Ju){if(U!==m||ht!==A){if((_!==is||M!==is)&&(t.blendEquation(t.FUNC_ADD),_=is,M=is),ht)switch(U){case Ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gh:t.blendFunc(t.ONE,t.ONE);break;case Wh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ze("WebGLState: Invalid blending: ",U);break}else switch(U){case Ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Wh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",U);break}R=null,x=null,T=null,C=null,b.set(0,0,0),E=0,m=U,A=ht}return}xe=xe||fe,ae=ae||se,Fe=Fe||pe,(fe!==_||xe!==M)&&(t.blendEquationSeparate(Oe[fe],Oe[xe]),_=fe,M=xe),(se!==R||pe!==x||ae!==T||Fe!==C)&&(t.blendFuncSeparate(Re[se],Re[pe],Re[ae],Re[Fe]),R=se,x=pe,T=ae,C=Fe),(Pe.equals(b)===!1||_t!==E)&&(t.blendColor(Pe.r,Pe.g,Pe.b,_t),b.copy(Pe),E=_t),m=U,A=!1}function et(U,fe){U.side===kn?he(t.CULL_FACE):Z(t.CULL_FACE);let se=U.side===hn;fe&&(se=!se),it(se),U.blending===Ys&&U.transparent===!1?Xe(oi):Xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let pe=U.stencilWrite;h.setTest(pe),pe&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),un(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function it(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function At(U){U!==Yu?(Z(t.CULL_FACE),U!==k&&(U===Vh?t.cullFace(t.BACK):U===ju?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),k=U}function Vt(U){U!==z&&(D&&t.lineWidth(U),z=U)}function un(U,fe,se){U?(Z(t.POLYGON_OFFSET_FILL),(L!==fe||V!==se)&&(L=fe,V=se,a.getReversed()&&(fe=-fe),t.polygonOffset(fe,se))):he(t.POLYGON_OFFSET_FILL)}function kt(U){U?Z(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function Lt(U){U===void 0&&(U=t.TEXTURE0+Y-1),K!==U&&(t.activeTexture(U),K=U)}function B(U,fe,se){se===void 0&&(K===null?se=t.TEXTURE0+Y-1:se=K);let pe=N[se];pe===void 0&&(pe={type:void 0,texture:void 0},N[se]=pe),(pe.type!==U||pe.texture!==fe)&&(K!==se&&(t.activeTexture(se),K=se),t.bindTexture(U,fe||O[U]),pe.type=U,pe.texture=fe)}function Zt(){let U=N[K];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pt(){try{t.compressedTexImage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function y(){try{t.texSubImage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function H(){try{t.texSubImage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function le(){try{t.texStorage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function ce(){try{t.texStorage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function ne(){try{t.texImage2D(...arguments)}catch(U){ze("WebGLState:",U)}}function re(){try{t.texImage3D(...arguments)}catch(U){ze("WebGLState:",U)}}function ue(U){return u[U]!==void 0?u[U]:t.getParameter(U)}function Le(U,fe){u[U]!==fe&&(t.pixelStorei(U,fe),u[U]=fe)}function me(U){Ve.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ve.copy(U))}function de(U){Ie.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function De(U,fe){let se=o.get(fe);se===void 0&&(se=new WeakMap,o.set(fe,se));let pe=se.get(U);pe===void 0&&(pe=t.getUniformBlockIndex(fe,U.name),se.set(U,pe))}function Ue(U,fe){let pe=o.get(fe).get(U);l.get(fe)!==pe&&(t.uniformBlockBinding(fe,pe,U.__bindingPointIndex),l.set(fe,pe))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},u={},K=null,N={},c={},f=new WeakMap,g=[],v=null,p=!1,m=null,_=null,R=null,x=null,M=null,T=null,C=null,b=new $e(0,0,0),E=0,A=!1,w=null,k=null,z=null,L=null,V=null,Ve.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),h.reset()}return{buffers:{color:r,depth:a,stencil:h},enable:Z,disable:he,bindFramebuffer:X,drawBuffers:ee,useProgram:Te,setBlending:Xe,setMaterial:et,setFlipSided:it,setCullFace:At,setLineWidth:Vt,setPolygonOffset:un,setScissorTest:kt,activeTexture:Lt,bindTexture:B,unbindTexture:Zt,compressedTexImage2D:pt,compressedTexImage3D:P,texImage2D:ne,texImage3D:re,pixelStorei:Le,getParameter:ue,updateUBOMapping:De,uniformBlockBinding:Ue,texStorage2D:le,texStorage3D:ce,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:me,viewport:de,reset:je}}function Nb(t,e,n,i,s,r,a){let h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new He,d=new WeakMap,u=new Set,c,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,y){return g?new OffscreenCanvas(P,y):kr("canvas")}function p(P,y,H){let $=1,Q=pt(P);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let le=Math.floor($*Q.width),ce=Math.floor($*Q.height);c===void 0&&(c=v(le,ce));let ne=y?v(le,ce):c;return ne.width=le,ne.height=ce,ne.getContext("2d").drawImage(P,0,0,le,ce),Be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+le+"x"+ce+")."),ne}else return"data"in P&&Be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function _(P){t.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(P,y,H,$,Q,le=!1){if(P!==null){if(t[P]!==void 0)return t[P];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce;$&&(ce=e.get("EXT_texture_norm16"),ce||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=y;if(y===t.RED&&(H===t.FLOAT&&(ne=t.R32F),H===t.HALF_FLOAT&&(ne=t.R16F),H===t.UNSIGNED_BYTE&&(ne=t.R8),H===t.UNSIGNED_SHORT&&ce&&(ne=ce.R16_EXT),H===t.SHORT&&ce&&(ne=ce.R16_SNORM_EXT)),y===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.R8UI),H===t.UNSIGNED_SHORT&&(ne=t.R16UI),H===t.UNSIGNED_INT&&(ne=t.R32UI),H===t.BYTE&&(ne=t.R8I),H===t.SHORT&&(ne=t.R16I),H===t.INT&&(ne=t.R32I)),y===t.RG&&(H===t.FLOAT&&(ne=t.RG32F),H===t.HALF_FLOAT&&(ne=t.RG16F),H===t.UNSIGNED_BYTE&&(ne=t.RG8),H===t.UNSIGNED_SHORT&&ce&&(ne=ce.RG16_EXT),H===t.SHORT&&ce&&(ne=ce.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RG8UI),H===t.UNSIGNED_SHORT&&(ne=t.RG16UI),H===t.UNSIGNED_INT&&(ne=t.RG32UI),H===t.BYTE&&(ne=t.RG8I),H===t.SHORT&&(ne=t.RG16I),H===t.INT&&(ne=t.RG32I)),y===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),H===t.UNSIGNED_INT&&(ne=t.RGB32UI),H===t.BYTE&&(ne=t.RGB8I),H===t.SHORT&&(ne=t.RGB16I),H===t.INT&&(ne=t.RGB32I)),y===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),H===t.UNSIGNED_INT&&(ne=t.RGBA32UI),H===t.BYTE&&(ne=t.RGBA8I),H===t.SHORT&&(ne=t.RGBA16I),H===t.INT&&(ne=t.RGBA32I)),y===t.RGB&&(H===t.UNSIGNED_SHORT&&ce&&(ne=ce.RGB16_EXT),H===t.SHORT&&ce&&(ne=ce.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ne=t.R11F_G11F_B10F)),y===t.RGBA){let re=le?Pr:st.getTransfer(Q);H===t.FLOAT&&(ne=t.RGBA32F),H===t.HALF_FLOAT&&(ne=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ne=re===ut?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&ce&&(ne=ce.RGBA16_EXT),H===t.SHORT&&ce&&(ne=ce.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(P,y){let H;return P?y===null||y===$n||y===Js?H=t.DEPTH24_STENCIL8:y===In?H=t.DEPTH32F_STENCIL8:y===js&&(H=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$n||y===Js?H=t.DEPTH_COMPONENT24:y===In?H=t.DEPTH_COMPONENT32F:y===js&&(H=t.DEPTH_COMPONENT16),H}function T(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function C(P){let y=P.target;y.removeEventListener("dispose",C),E(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&u.delete(y)}function b(P){let y=P.target;y.removeEventListener("dispose",b),w(y)}function E(P){let y=i.get(P);if(y.__webglInit===void 0)return;let H=P.source,$=f.get(H);if($){let Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(P),Object.keys($).length===0&&f.delete(H)}i.remove(P)}function A(P){let y=i.get(P);t.deleteTexture(y.__webglTexture);let H=P.source,$=f.get(H);delete $[y.__cacheKey],a.memory.textures--}function w(P){let y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else t.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)t.deleteFramebuffer(y.__webglFramebuffer[$]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=P.textures;for(let $=0,Q=H.length;$<Q;$++){let le=i.get(H[$]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(H[$])}i.remove(P)}let k=0;function z(){k=0}function L(){return k}function V(P){k=P}function Y(){let P=k;return P>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,P}function D(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function ie(P,y){let H=i.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let $=P.image;if($===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{he(H,P,y);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+y)}function q(P,y){let H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){he(H,P,y);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+y)}function K(P,y){let H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){he(H,P,y);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+y)}function N(P,y){let H=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){X(H,P,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+y)}let J={[Ns]:t.REPEAT,[ii]:t.CLAMP_TO_EDGE,[yo]:t.MIRRORED_REPEAT},oe={[Wt]:t.NEAREST,[gd]:t.NEAREST_MIPMAP_NEAREST,[ea]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[jo]:t.LINEAR_MIPMAP_NEAREST,[Hi]:t.LINEAR_MIPMAP_LINEAR},Ve={[xd]:t.NEVER,[Td]:t.ALWAYS,[_d]:t.LESS,[Dl]:t.LEQUAL,[wd]:t.EQUAL,[Fl]:t.GEQUAL,[Sd]:t.GREATER,[Md]:t.NOTEQUAL};function Ie(P,y){if(y.type===In&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jt||y.magFilter===jo||y.magFilter===ea||y.magFilter===Hi||y.minFilter===jt||y.minFilter===jo||y.minFilter===ea||y.minFilter===Hi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,J[y.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,J[y.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,J[y.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,oe[y.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==ea&&y.minFilter!==Hi||y.type===In&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ge(P,y){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",C));let $=y.source,Q=f.get($);Q===void 0&&(Q={},f.set($,Q));let le=D(y);if(le!==P.__cacheKey){Q[le]===void 0&&(Q[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[le].usedTimes++;let ce=Q[P.__cacheKey];ce!==void 0&&(Q[P.__cacheKey].usedTimes--,ce.usedTimes===0&&A(y)),P.__cacheKey=le,P.__webglTexture=Q[le].texture}return H}function O(P,y,H){return Math.floor(Math.floor(P/H)/y)}function Z(P,y,H,$){let le=P.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,H,$,y.data);else{le.sort((Le,me)=>Le.start-me.start);let ce=0;for(let Le=1;Le<le.length;Le++){let me=le[ce],de=le[Le],De=me.start+me.count,Ue=O(de.start,y.width,4),je=O(me.start,y.width,4);de.start<=De+1&&Ue===je&&O(de.start+de.count-1,y.width,4)===Ue?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,le[ce]=de)}le.length=ce+1;let ne=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Le=0,me=le.length;Le<me;Le++){let de=le[Le],De=Math.floor(de.start/4),Ue=Math.ceil(de.count/4),je=De%y.width,U=Math.floor(De/y.width),fe=Ue,se=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,je),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,je,U,fe,se,H,$,y.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ne),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function he(P,y,H){let $=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=t.TEXTURE_3D);let Q=Ge(P,y),le=y.source;n.bindTexture($,P.__webglTexture,t.TEXTURE0+H);let ce=i.get(le);if(le.version!==ce.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let se=st.getPrimaries(st.workingColorSpace),pe=y.colorSpace===vi?null:st.getPrimaries(y.colorSpace),xe=y.colorSpace===vi||se===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let re=p(y.image,!1,s.maxTextureSize);re=Zt(y,re);let ue=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),me=x(y.internalFormat,ue,Le,y.normalized,y.colorSpace,y.isVideoTexture);Ie($,y);let de,De=y.mipmaps,Ue=y.isVideoTexture!==!0,je=ce.__version===void 0||Q===!0,U=le.dataReady,fe=T(y,re);if(y.isDepthTexture)me=M(y.format===Vi,y.type),je&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,me,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,me,re.width,re.height,0,ue,Le,null));else if(y.isDataTexture)if(De.length>0){Ue&&je&&n.texStorage2D(t.TEXTURE_2D,fe,me,De[0].width,De[0].height);for(let se=0,pe=De.length;se<pe;se++)de=De[se],Ue?U&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,ue,Le,de.data):n.texImage2D(t.TEXTURE_2D,se,me,de.width,de.height,0,ue,Le,de.data);y.generateMipmaps=!1}else Ue?(je&&n.texStorage2D(t.TEXTURE_2D,fe,me,re.width,re.height),U&&Z(y,re,ue,Le)):n.texImage2D(t.TEXTURE_2D,0,me,re.width,re.height,0,ue,Le,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,me,De[0].width,De[0].height,re.depth);for(let se=0,pe=De.length;se<pe;se++)if(de=De[se],y.format!==Ln)if(ue!==null)if(Ue){if(U)if(y.layerUpdates.size>0){let xe=pc(de.width,de.height,y.format,y.type);for(let ae of y.layerUpdates){let Fe=de.data.subarray(ae*xe/de.data.BYTES_PER_ELEMENT,(ae+1)*xe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,ae,de.width,de.height,1,ue,Fe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,me,de.width,de.height,re.depth,0,de.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,ue,Le,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,me,de.width,de.height,re.depth,0,ue,Le,de.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ue&&je&&n.texStorage2D(t.TEXTURE_2D,fe,me,De[0].width,De[0].height);for(let se=0,pe=De.length;se<pe;se++)de=De[se],y.format!==Ln?ue!==null?Ue?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,se,me,de.width,de.height,0,de.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,ue,Le,de.data):n.texImage2D(t.TEXTURE_2D,se,me,de.width,de.height,0,ue,Le,de.data)}else if(y.isDataArrayTexture)if(Ue){if(je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,me,re.width,re.height,re.depth),U)if(y.layerUpdates.size>0){let se=pc(re.width,re.height,y.format,y.type);for(let pe of y.layerUpdates){let xe=re.data.subarray(pe*se/re.data.BYTES_PER_ELEMENT,(pe+1)*se/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,re.width,re.height,1,ue,Le,xe)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,Le,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,re.width,re.height,re.depth,0,ue,Le,re.data);else if(y.isData3DTexture)Ue?(je&&n.texStorage3D(t.TEXTURE_3D,fe,me,re.width,re.height,re.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,Le,re.data)):n.texImage3D(t.TEXTURE_3D,0,me,re.width,re.height,re.depth,0,ue,Le,re.data);else if(y.isFramebufferTexture){if(je)if(Ue)n.texStorage2D(t.TEXTURE_2D,fe,me,re.width,re.height);else{let se=re.width,pe=re.height;for(let xe=0;xe<fe;xe++)n.texImage2D(t.TEXTURE_2D,xe,me,se,pe,0,ue,Le,null),se>>=1,pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){let se=t.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),u.add(y),se.onpaint=pe=>{let xe=pe.changedElements;for(let ae of u)xe.includes(ae.image)&&(ae.needsUpdate=!0)},se.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{let xe=t.RGBA,ae=t.RGBA,Fe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ae,Fe,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ue&&je){let se=pt(De[0]);n.texStorage2D(t.TEXTURE_2D,fe,me,se.width,se.height)}for(let se=0,pe=De.length;se<pe;se++)de=De[se],Ue?U&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,ue,Le,de):n.texImage2D(t.TEXTURE_2D,se,me,ue,Le,de);y.generateMipmaps=!1}else if(Ue){if(je){let se=pt(re);n.texStorage2D(t.TEXTURE_2D,fe,me,se.width,se.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Le,re)}else n.texImage2D(t.TEXTURE_2D,0,me,ue,Le,re);m(y)&&_($),ce.__version=le.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function X(P,y,H){if(y.image.length!==6)return;let $=Ge(P,y),Q=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);let le=i.get(Q);if(Q.version!==le.__version||$===!0){n.activeTexture(t.TEXTURE0+H);let ce=st.getPrimaries(st.workingColorSpace),ne=y.colorSpace===vi?null:st.getPrimaries(y.colorSpace),re=y.colorSpace===vi||ce===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ue=y.isCompressedTexture||y.image[0].isCompressedTexture,Le=y.image[0]&&y.image[0].isDataTexture,me=[];for(let ae=0;ae<6;ae++)!ue&&!Le?me[ae]=p(y.image[ae],!0,s.maxCubemapSize):me[ae]=Le?y.image[ae].image:y.image[ae],me[ae]=Zt(y,me[ae]);let de=me[0],De=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type),je=x(y.internalFormat,De,Ue,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,fe=le.__version===void 0||$===!0,se=Q.dataReady,pe=T(y,de);Ie(t.TEXTURE_CUBE_MAP,y);let xe;if(ue){U&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,je,de.width,de.height);for(let ae=0;ae<6;ae++){xe=me[ae].mipmaps;for(let Fe=0;Fe<xe.length;Fe++){let Pe=xe[Fe];y.format!==Ln?De!==null?U?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Pe.width,Pe.height,De,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,je,Pe.width,Pe.height,0,Pe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Pe.width,Pe.height,De,Ue,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,je,Pe.width,Pe.height,0,De,Ue,Pe.data)}}}else{if(xe=y.mipmaps,U&&fe){xe.length>0&&pe++;let ae=pt(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Le){U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,me[ae].width,me[ae].height,De,Ue,me[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,me[ae].width,me[ae].height,0,De,Ue,me[ae].data);for(let Fe=0;Fe<xe.length;Fe++){let _t=xe[Fe].image[ae].image;U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,_t.width,_t.height,De,Ue,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,je,_t.width,_t.height,0,De,Ue,_t.data)}}else{U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Ue,me[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,De,Ue,me[ae]);for(let Fe=0;Fe<xe.length;Fe++){let Pe=xe[Fe];U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,De,Ue,Pe.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,je,De,Ue,Pe.image[ae])}}}m(y)&&_(t.TEXTURE_CUBE_MAP),le.__version=Q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ee(P,y,H,$,Q,le){let ce=r.convert(H.format,H.colorSpace),ne=r.convert(H.type),re=x(H.internalFormat,ce,ne,H.normalized,H.colorSpace),ue=i.get(y),Le=i.get(H);if(Le.__renderTarget=y,!ue.__hasExternalTextures){let me=Math.max(1,y.width>>le),de=Math.max(1,y.height>>le);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,le,re,me,de,y.depth,0,ce,ne,null):n.texImage2D(Q,le,re,me,de,0,ce,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Lt(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Q,Le.__webglTexture,0,kt(y)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Q,Le.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(P,y,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),y.depthBuffer){let $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,le=M(y.stencilBuffer,Q),ce=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Lt(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(y),le,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(y),le,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,le,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,P)}else{let $=y.textures;for(let Q=0;Q<$.length;Q++){let le=$[Q],ce=r.convert(le.format,le.colorSpace),ne=r.convert(le.type),re=x(le.internalFormat,ce,ne,le.normalized,le.colorSpace);Lt(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(y),re,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(y),re,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,re,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(P,y,H){let $=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,y.depthTexture);let ue=r.convert(y.depthTexture.format),Le=r.convert(y.depthTexture.type),me;y.depthTexture.format===si?me=t.DEPTH_COMPONENT24:y.depthTexture.format===Vi&&(me=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,y.width,y.height,0,ue,Le,null)}}else ie(y.depthTexture,0);let le=Q.__webglTexture,ce=kt(y),ne=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,re=y.depthTexture.format===Vi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===si)Lt(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,le,0);else if(y.depthTexture.format===Vi)Lt(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Re(P){let y=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Oe(y.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?Oe(y.__webglFramebuffer[0],P,0):Oe(y.__webglFramebuffer,P,0)}else if(H){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=t.createRenderbuffer(),Te(y.__webglDepthbuffer[$],P,!1);else{let Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}else{let $=P.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Te(y.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(P,y,H){let $=i.get(P);y!==void 0&&ee($.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Re(P)}function et(P){let y=P.texture,H=i.get(P),$=i.get(y);P.addEventListener("dispose",b);let Q=P.textures,le=P.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=y.version,a.memory.textures++),le){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let re=0;re<y.mipmaps.length;re++)H.__webglFramebuffer[ne][re]=t.createFramebuffer()}else H.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)H.__webglFramebuffer[ne]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ce)for(let ne=0,re=Q.length;ne<re;ne++){let ue=i.get(Q[ne]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Lt(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ne=0;ne<Q.length;ne++){let re=Q[ne];H.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ne]);let ue=r.convert(re.format,re.colorSpace),Le=r.convert(re.type),me=x(re.internalFormat,ue,Le,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),de=kt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,H.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)ee(H.__webglFramebuffer[ne][re],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else ee(H.__webglFramebuffer[ne],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(y)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let ne=0,re=Q.length;ne<re;ne++){let ue=Q[ne],Le=i.get(ue),me=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Le.__webglTexture),Ie(me,ue),ee(H.__webglFramebuffer,P,ue,t.COLOR_ATTACHMENT0+ne,me,0),m(ue)&&_(me)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,$.__webglTexture),Ie(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)ee(H.__webglFramebuffer[re],P,y,t.COLOR_ATTACHMENT0,ne,re);else ee(H.__webglFramebuffer,P,y,t.COLOR_ATTACHMENT0,ne,0);m(y)&&_(ne),n.unbindTexture()}P.depthBuffer&&Re(P)}function it(P){let y=P.textures;for(let H=0,$=y.length;H<$;H++){let Q=y[H];if(m(Q)){let le=R(P),ce=i.get(Q).__webglTexture;n.bindTexture(le,ce),_(le),n.unbindTexture()}}}let At=[],Vt=[];function un(P){if(P.samples>0){if(Lt(P)===!1){let y=P.textures,H=P.width,$=P.height,Q=t.COLOR_BUFFER_BIT,le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(P),ne=y.length>1;if(ne)for(let ue=0;ue<y.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let re=P.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Le=i.get(y[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,H,$,0,0,H,$,Q,t.NEAREST),l===!0&&(At.length=0,Vt.length=0,At.push(t.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(At.push(le),Vt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Vt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let ue=0;ue<y.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Le=i.get(y[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function kt(P){return Math.min(s.maxSamples,P.samples)}function Lt(P){let y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(P){let y=a.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function Zt(P,y){let H=P.colorSpace,$=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Rr&&H!==vi&&(st.getTransfer(H)===ut?($!==Ln||Q!==mn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",H)),y}function pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(o.width=P.naturalWidth||P.width,o.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(o.width=P.displayWidth,o.height=P.displayHeight):(o.width=P.width,o.height=P.height),o}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=N,this.rebindTextures=Xe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ub(t,e){function n(i,s=vi){let r,a=st.getTransfer(s);if(i===mn)return t.UNSIGNED_BYTE;if(i===Zo)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ko)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ac)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ic)return t.BYTE;if(i===sc)return t.SHORT;if(i===js)return t.UNSIGNED_SHORT;if(i===Jo)return t.INT;if(i===$n)return t.UNSIGNED_INT;if(i===In)return t.FLOAT;if(i===Yn)return t.HALF_FLOAT;if(i===oc)return t.ALPHA;if(i===lc)return t.RGB;if(i===Ln)return t.RGBA;if(i===si)return t.DEPTH_COMPONENT;if(i===Vi)return t.DEPTH_STENCIL;if(i===Qo)return t.RED;if(i===el)return t.RED_INTEGER;if(i===Gi)return t.RG;if(i===tl)return t.RG_INTEGER;if(i===nl)return t.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===sa)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===sl||i===rl||i===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ol||i===ll||i===hl||i===cl||i===ul||i===ra||i===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ol||i===ll)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cl)return r.COMPRESSED_R11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ra)return r.COMPRESSED_RG11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===yl||i===bl||i===vl||i===xl||i===_l||i===wl||i===Sl||i===Ml||i===Tl||i===El)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_l)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Cl||i===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Al)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pl||i===kl||i===aa||i===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
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

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Gr(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new wn({vertexShader:Bb,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ne(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends ri{constructor(e,n){super();let i=this,s=null,r=1,a=null,h="local-floor",l=1,o=null,d=null,u=null,c=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new Cc,m={},_=n.getContextAttributes(),R=null,x=null,M=[],T=[],C=new He,b=null,E=null,A=new tn;A.viewport=new Ct;let w=new tn;w.viewport=new Ct;let k=[A,w],z=new Wo,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Z=M[O];return Z===void 0&&(Z=new Hs,M[O]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(O){let Z=M[O];return Z===void 0&&(Z=new Hs,M[O]=Z),Z.getGripSpace()},this.getHand=function(O){let Z=M[O];return Z===void 0&&(Z=new Hs,M[O]=Z),Z.getHandSpace()};function Y(O){let Z=T.indexOf(O.inputSource);if(Z===-1)return;let he=M[Z];he!==void 0&&(he.update(O.inputSource,O.frame,o||a),he.dispatchEvent({type:O.type,data:O.inputSource}))}function D(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",ie);for(let O=0;O<M.length;O++){let Z=T[O];Z!==null&&(T[O]=null,M[O].disconnect(Z))}L=null,V=null,p.reset();for(let O in m)delete m[O];if(e.setRenderTarget(R),f=null,c=null,u=null,s=null,x=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),E!==null){let O=E.camera;O.fov=E.fov,O.zoom=E.zoom,O.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){h=O,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(O){o=O},this.getBaseLayer=function(){return c!==null?c:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,n)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",D),s.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,X=null,ee=null;_.depth&&(ee=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=_.stencil?Vi:si,X=_.stencil?Js:$n);let Te={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:r};u=this.getBinding(),c=u.createProjectionLayer(Te),s.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),x=new fn(c.textureWidth,c.textureHeight,{format:Ln,type:mn,depthTexture:new Di(c.textureWidth,c.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new fn(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),o=null,a=await s.requestReferenceSpace(h),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(O){for(let Z=0;Z<O.removed.length;Z++){let he=O.removed[Z],X=T.indexOf(he);X>=0&&(T[X]=null,M[X].disconnect(he))}for(let Z=0;Z<O.added.length;Z++){let he=O.added[Z],X=T.indexOf(he);if(X===-1){for(let Te=0;Te<M.length;Te++)if(Te>=T.length){T.push(he),X=Te;break}else if(T[Te]===null){T[Te]=he,X=Te;break}if(X===-1)break}let ee=M[X];ee&&ee.connect(he)}}let q=new I,K=new I;function N(O,Z,he){q.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);let X=q.distanceTo(K),ee=Z.projectionMatrix.elements,Te=he.projectionMatrix.elements,Oe=ee[14]/(ee[10]-1),Re=ee[14]/(ee[10]+1),Xe=(ee[9]+1)/ee[5],et=(ee[9]-1)/ee[5],it=(ee[8]-1)/ee[0],At=(Te[8]+1)/Te[0],Vt=Oe*it,un=Oe*At,kt=X/(-it+At),Lt=kt*-it;if(Z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Lt),O.translateZ(kt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),ee[10]===-1)O.projectionMatrix.copy(Z.projectionMatrix),O.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let B=Oe+kt,Zt=Re+kt,pt=Vt-Lt,P=un+(X-Lt),y=Xe*Re/Zt*B,H=et*Re/Zt*B;O.projectionMatrix.makePerspective(pt,P,y,H,B,Zt),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function J(O,Z){Z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let Z=O.near,he=O.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(he=p.depthFar)),z.near=w.near=A.near=Z,z.far=w.far=A.far=he,(L!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,V=z.far),z.layers.mask=O.layers.mask|6,A.layers.mask=z.layers.mask&-5,w.layers.mask=z.layers.mask&-3;let X=O.parent,ee=z.cameras;J(z,X);for(let Te=0;Te<ee.length;Te++)J(ee[Te],X);ee.length===2?N(z,A,w):z.projectionMatrix.copy(A.projectionMatrix),E===null&&O.isPerspectiveCamera&&(E={camera:O,fov:O.fov,zoom:O.zoom}),oe(O,z,X)};function oe(O,Z,he){he===null?O.matrix.copy(Z.matrixWorld):(O.matrix.copy(he.matrixWorld),O.matrix.invert(),O.matrix.multiply(Z.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Z.projectionMatrix),O.projectionMatrixInverse.copy(Z.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=vo*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(c===null&&f===null))return l},this.setFoveation=function(O){l=O,c!==null&&(c.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(O){return m[O]};let Ve=null;function Ie(O,Z){if(d=Z.getViewerPose(o||a),g=Z,d!==null){let he=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let X=!1;he.length!==z.cameras.length&&(z.cameras.length=0,X=!0);for(let Re=0;Re<he.length;Re++){let Xe=he[Re],et=null;if(f!==null)et=f.getViewport(Xe);else{let At=u.getViewSubImage(c,Xe);et=At.viewport,Re===0&&(e.setRenderTargetTextures(x,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(x))}let it=k[Re];it===void 0&&(it=new tn,it.layers.enable(Re),it.viewport=new Ct,k[Re]=it),it.matrix.fromArray(Xe.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Xe.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(et.x,et.y,et.width,et.height),Re===0&&(z.matrix.copy(it.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),X===!0&&z.cameras.push(it)}let ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Re=u.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&p.init(Re,s.renderState)}if(ee&&ee.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Re=0;Re<he.length;Re++){let Xe=he[Re].camera;if(Xe){let et=m[Xe];et||(et=new Gr,m[Xe]=et);let it=u.getCameraImage(Xe);et.sourceTexture=it}}}}for(let he=0;he<M.length;he++){let X=T[he],ee=M[he];X!==null&&ee!==void 0&&ee.update(X,Z,o||a)}Ve&&Ve(O,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let Ge=new nf;Ge.setAnimationLoop(Ie),this.setAnimationLoop=function(O){Ve=O},this.dispose=function(){}}},zb=new lt,hf=new We;hf.set(-1,0,0,0,1,0,0,0,1);function Hb(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,uc(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,R,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),d(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),c(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&h(p,m)):m.isPointsMaterial?l(p,m,_,R):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),R=_.envMap,x=_.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(zb.makeRotationFromEuler(x)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(hf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function h(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=R*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function c(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vb(t,e,n,i){let s={},r={},a=[],h=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let T=M.program;i.uniformBlockBinding(x,T)}function o(x,M){let T=s[x.id];T===void 0&&(p(x),T=d(x),s[x.id]=T,x.addEventListener("dispose",_));let C=M.program;i.updateUBOMapping(x,C);let b=e.render.frame;r[x.id]!==b&&(c(x),r[x.id]=b)}function d(x){let M=u();x.__bindingPointIndex=M;let T=t.createBuffer(),C=x.__size,b=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,T),T}function u(){for(let x=0;x<h;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){let M=s[x.id],T=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let b=0,E=T.length;b<E;b++){let A=T[b];if(Array.isArray(A))for(let w=0,k=A.length;w<k;w++)f(A[w],b,w,C);else f(A,b,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(x,M,T,C){if(v(x,M,T,C)===!0){let b=x.__offset,E=x.value;if(Array.isArray(E)){let A=0;for(let w=0;w<E.length;w++){let k=E[w],z=m(k);g(k,x.__data,A),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(A+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,b,x.__data)}}function g(x,M,T){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,T)}function v(x,M,T,C){let b=x.value,E=M+"_"+T;if(C[E]===void 0)return typeof b=="number"||typeof b=="boolean"?C[E]=b:ArrayBuffer.isView(b)?C[E]=b.slice():C[E]=b.clone(),!0;{let A=C[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return C[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function p(x){let M=x.uniforms,T=0,C=16;for(let E=0,A=M.length;E<A;E++){let w=Array.isArray(M[E])?M[E]:[M[E]];for(let k=0,z=w.length;k<z;k++){let L=w[k],V=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,D=V.length;Y<D;Y++){let ie=V[Y],q=m(ie),K=T%C,N=K%q.boundary,J=K+N;T+=N,J!==0&&C-J<q.storage&&(T+=C-J),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=q.storage}}}let b=T%C;return b>0&&(T+=C-b),x.__size=T,x.__cache={},this}function m(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",x),M}function _(x){let M=x.target;M.removeEventListener("dispose",_);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function R(){for(let x in s)t.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:o,dispose:R}}var Gb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function Wb(){return li===null&&(li=new zr(Gb,16,16,Gi,Yn),li.name="DFG_LUT",li.minFilter=jt,li.magFilter=jt,li.wrapS=ii,li.wrapT=ii,li.generateMipmaps=!1,li.needsUpdate=!0),li}var zl=class{constructor(e={}){let{canvas:n=Ed(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:h=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:o=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:c=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,p=new Set([nl,tl,el]),m=new Set([mn,$n,js,Js,Zo,Ko]),_=new Uint32Array(4),R=new Int32Array(4),x=new I,M=null,T=null,C=[],b=[],E=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,w=!1,k=null,z=null,L=null,V=null;this._outputColorSpace=Ut;let Y=0,D=0,ie=null,q=-1,K=null,N=new Ct,J=new Ct,oe=null,Ve=new $e(0),Ie=0,Ge=n.width,O=n.height,Z=1,he=null,X=null,ee=new Ct(0,0,Ge,O),Te=new Ct(0,0,Ge,O),Oe=!1,Re=new Ws,Xe=!1,et=!1,it=new lt,At=new I,Vt=new Ct,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Lt(){return ie===null?Z:1}let B=i;function Zt(S,F){return n.getContext(S,F)}let pt,P,y,H,$,Q,le,ce,ne,re,ue,Le,me,de,De,Ue,je,U,fe,se,pe,xe,ae;try{let S={alpha:!0,depth:s,stencil:r,antialias:h,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qo}`),n.addEventListener("webglcontextlost",_t,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",zn,!1),B===null){let F="webgl2";if(B=Zt(F,S),B===null)throw Zt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(S){throw n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",zn,!1),ze("WebGLRenderer: "+S.message),S}function Fe(){pt=new Z0(B),pt.init(),pe=new Ub(B,pt),P=new H0(B,pt,e,pe),y=new Fb(B,pt),P.reversedDepthBuffer&&c&&y.buffers.depth.setReversed(!0),z=B.createFramebuffer(),L=B.createFramebuffer(),V=B.createFramebuffer(),H=new ey(B),$=new _b,Q=new Nb(B,pt,y,$,P,pe,H),le=new J0(A),ce=new nm(B),xe=new O0(B,ce),ne=new K0(B,ce,H,xe),re=new ny(B,ne,ce,xe,H),U=new ty(B,P,Q),De=new V0($),ue=new xb(A,le,pt,P,xe,De),Le=new Hb(A,$),me=new Sb,de=new Rb(pt),je=new B0(A,le,y,re,g,l),Ue=new Db(A,re,P),ae=new Vb(B,H,P,y),fe=new z0(B,pt,H),se=new Q0(B,pt,H),H.programs=ue.programs,A.capabilities=P,A.extensions=pt,A.properties=$,A.renderLists=me,A.shadowMap=Ue,A.state=y,A.info=H}v!==mn&&(E=new sy(v,n.width,n.height,h,s,r));let Pe=new Rc(A,B);this.xr=Pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=pt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=pt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(Ge,O,!1))},this.getSize=function(S){return S.set(Ge,O)},this.setSize=function(S,F,j=!0){if(Pe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=S,O=F,n.width=Math.floor(S*Z),n.height=Math.floor(F*Z),j===!0&&(n.style.width=S+"px",n.style.height=F+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Ge*Z,O*Z).floor()},this.setDrawingBufferSize=function(S,F,j){Ge=S,O=F,Z=j,n.width=Math.floor(S*j),n.height=Math.floor(F*j),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(v===mn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,F,j,G){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,F,j,G),y.viewport(N.copy(ee).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(Te)},this.setScissor=function(S,F,j,G){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,F,j,G),y.scissor(J.copy(Te).multiplyScalar(Z).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(S){y.setScissorTest(Oe=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,j=!0){let G=0;if(S){let W=!1;if(ie!==null){let ve=ie.texture.format;W=p.has(ve)}if(W){let ve=ie.texture.type,we=m.has(ve),be=je.getClearColor(),Ee=je.getClearAlpha(),ke=be.r,Je=be.g,nt=be.b;we?(_[0]=ke,_[1]=Je,_[2]=nt,_[3]=Ee,B.clearBufferuiv(B.COLOR,0,_)):(R[0]=ke,R[1]=Je,R[2]=nt,R[3]=Ee,B.clearBufferiv(B.COLOR,0,R))}else G|=B.COLOR_BUFFER_BIT}F&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",zn,!1),je.dispose(),me.dispose(),de.dispose(),$.dispose(),le.dispose(),re.dispose(),xe.dispose(),ae.dispose(),ue.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",lu),Pe.removeEventListener("sessionend",hu),ji.stop()};function _t(S){S.preventDefault(),Ir("WebGLRenderer: Context Lost."),w=!0}function ht(){Ir("WebGLRenderer: Context Restored."),w=!1;let S=H.autoReset,F=Ue.enabled,j=Ue.autoUpdate,G=Ue.needsUpdate,W=Ue.type;Fe(),H.autoReset=S,Ue.enabled=F,Ue.autoUpdate=j,Ue.needsUpdate=G,Ue.type=W}function zn(S){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Kn(S){let F=S.target;F.removeEventListener("dispose",Kn),fp(F)}function fp(S){pp(S),$.remove(S)}function pp(S){let F=$.get(S).programs;F!==void 0&&(F.forEach(function(j){ue.releaseProgram(j)}),S.isShaderMaterial&&ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,j,G,W,ve){F===null&&(F=un);let we=W.isMesh&&W.matrixWorld.determinantAffine()<0,be=yp(S,F,j,G,W);y.setMaterial(G,we);let Ee=j.index,ke=1;if(G.wireframe===!0){if(Ee=ne.getWireframeAttribute(j),Ee===void 0)return;ke=2}let Je=j.drawRange,nt=j.attributes.position,Ae=Je.start*ke,ct=(Je.start+Je.count)*ke;ve!==null&&(Ae=Math.max(Ae,ve.start*ke),ct=Math.min(ct,(ve.start+ve.count)*ke)),Ee!==null?(Ae=Math.max(Ae,0),ct=Math.min(ct,Ee.count)):nt!=null&&(Ae=Math.max(Ae,0),ct=Math.min(ct,nt.count));let Dt=ct-Ae;if(Dt<0||Dt===1/0)return;xe.setup(W,G,be,j,Ee);let Mt,xt=fe;if(Ee!==null&&(Mt=ce.get(Ee),xt=se,xt.setIndex(Mt)),W.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*Lt()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(W.isLine){let Kt=G.linewidth;Kt===void 0&&(Kt=1),y.setLineWidth(Kt*Lt()),W.isLineSegments?xt.setMode(B.LINES):W.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else W.isPoints?xt.setMode(B.POINTS):W.isSprite&&xt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Kt=W._multiDrawStarts,_e=W._multiDrawCounts,an=W._multiDrawCount,at=Ee?ce.get(Ee).bytesPerElement:1,Cn=$.get(G).currentProgram.getUniforms();for(let Qn=0;Qn<an;Qn++)Cn.setValue(B,"_gl_DrawID",Qn),xt.render(Kt[Qn]/at,_e[Qn])}else if(W.isInstancedMesh)xt.renderInstances(Ae,Dt,W.count);else if(j.isInstancedBufferGeometry){let Kt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,_e=Math.min(j.instanceCount,Kt);xt.renderInstances(Ae,Dt,_e)}else xt.render(Ae,Dt)};function ou(S,F,j,G){k!==null&&S.isNodeMaterial&&k.setObject(G,S),Xe===!0&&De.setState(S,j,!1),S.transparent===!0&&S.side===kn&&S.forceSinglePass===!1?(S.side=hn,S.needsUpdate=!0,ka(S,F,G),S.side=Oi,S.needsUpdate=!0,ka(S,F,G),S.side=kn):ka(S,F,G)}this.compile=function(S,F,j=null){j===null&&(j=S),k!==null&&k.renderStart(S,F,j),T=de.get(j),T.init(F),b.push(T),j.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),S!==j&&S.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),et=this.localClippingEnabled,Xe=De.init(this.clippingPlanes,et),Xe===!0&&De.setGlobalState(this.clippingPlanes,F),k!==null&&Ue.render(T.state.shadowsArray,j,F);let G=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ve=W.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){let be=ve[we];ou(be,j,F,W),G.add(be)}else ou(ve,j,F,W),G.add(ve)}),T=b.pop(),k!==null&&k.renderEnd(),G},this.compileAsync=function(S,F,j=null){let G=this.compile(S,F,j);return new Promise(W=>{function ve(){if(G.forEach(function(we){let Ee=$.get(we).currentProgram;(Ee===void 0||Ee.isReady())&&G.delete(we)}),G.size===0){W(S);return}setTimeout(ve,10)}pt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let oh=null;function mp(S){oh&&oh(S)}function lu(){ji.stop()}function hu(){ji.start()}let ji=new nf;ji.setAnimationLoop(mp),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(S){oh=S,Pe.setAnimationLoop(S),S===null?ji.stop():ji.start()},Pe.addEventListener("sessionstart",lu),Pe.addEventListener("sessionend",hu),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;k!==null&&k.renderStart(S,F);let j=Pe.enabled===!0&&Pe.isPresenting===!0,G=E!==null&&(ie===null||j)&&E.begin(A,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(F),F=Pe.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,F,ie),T=de.get(S,b.length),T.init(F),T.state.textureUnits=Q.getTextureUnits(),b.push(T),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Re.setFromProjectionMatrix(it,Wn,F.reversedDepth),et=this.localClippingEnabled,Xe=De.init(this.clippingPlanes,et),M=me.get(S,C.length),M.init(),C.push(M),Pe.enabled===!0&&Pe.isPresenting===!0){let we=A.xr.getDepthSensingMesh();we!==null&&lh(we,F,-1/0,A.sortObjects)}lh(S,F,0,A.sortObjects),M.finish(),k!==null&&k.updateLights(T.state.lightsArray),A.sortObjects===!0&&M.sort(he,X),kt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,kt&&je.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&De.beginShadows();let W=T.state.shadowsArray;if(Ue.render(W,S,F),Xe===!0&&De.endShadows(),(G&&E.hasRenderPass())===!1){let we=M.opaque,be=M.transmissive;if(T.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(be.length>0)for(let ke=0,Je=Ee.length;ke<Je;ke++){let nt=Ee[ke];uu(we,be,S,nt)}kt&&je.render(S);for(let ke=0,Je=Ee.length;ke<Je;ke++){let nt=Ee[ke];cu(M,S,nt,nt.viewport)}}else be.length>0&&uu(we,be,S,F),kt&&je.render(S),cu(M,S,F)}ie!==null&&D===0&&(Q.updateMultisampleRenderTarget(ie),Q.updateRenderTargetMipmap(ie)),G&&E.end(A),S.isScene===!0&&S.onAfterRender(A,S,F),xe.resetDefaultState(),q=-1,K=null,b.pop(),b.length>0?(T=b[b.length-1],Q.setTextureUnits(T.state.textureUnits),Xe===!0&&De.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,k!==null&&k.renderEnd()};function lh(S,F,j,G){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Re)){G&&Vt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(it);let we=re.update(S),be=S.material;be.visible&&M.push(S,we,be,j,Vt.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Re))){let we=re.update(S),be=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Vt.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Vt.copy(we.boundingSphere.center)),Vt.applyMatrix4(S.matrixWorld).applyMatrix4(it)),Array.isArray(be)){let Ee=we.groups;for(let ke=0,Je=Ee.length;ke<Je;ke++){let nt=Ee[ke],Ae=be[nt.materialIndex];Ae&&Ae.visible&&M.push(S,we,Ae,j,Vt.z,nt,F)}}else be.visible&&M.push(S,we,be,j,Vt.z,null,F)}}let ve=S.children;for(let we=0,be=ve.length;we<be;we++)lh(ve[we],F,j,G)}function cu(S,F,j,G){let{opaque:W,transmissive:ve,transparent:we}=S;T.setupLightsView(j),Xe===!0&&De.setGlobalState(A.clippingPlanes,j),G&&y.viewport(N.copy(G)),W.length>0&&Pa(W,F,j),ve.length>0&&Pa(ve,F,j),we.length>0&&Pa(we,F,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function uu(S,F,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Ae=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new fn(1,1,{generateMipmaps:!0,type:Ae?Yn:mn,minFilter:Hi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let ve=T.state.transmissionRenderTarget[G.id],we=G.viewport||N;ve.setSize(we.z*A.transmissionResolutionScale,we.w*A.transmissionResolutionScale);let be=A.getRenderTarget(),Ee=A.getActiveCubeFace(),ke=A.getActiveMipmapLevel();A.setRenderTarget(ve),A.getClearColor(Ve),Ie=A.getClearAlpha(),Ie<1&&A.setClearColor(16777215,.5),A.clear(),kt&&je.render(j);let Je=A.toneMapping;A.toneMapping=Xn;let nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Xe===!0&&De.setGlobalState(A.clippingPlanes,G),Pa(S,j,G),Q.updateMultisampleRenderTarget(ve),Q.updateRenderTargetMipmap(ve),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ct=0,Dt=F.length;ct<Dt;ct++){let Mt=F[ct],{object:xt,geometry:Kt,material:_e,group:an}=Mt;if(_e.side===kn&&xt.layers.test(G.layers)){let at=_e.side;_e.side=hn,_e.needsUpdate=!0,du(xt,j,G,Kt,_e,an),_e.side=at,_e.needsUpdate=!0,Ae=!0}}Ae===!0&&(Q.updateMultisampleRenderTarget(ve),Q.updateRenderTargetMipmap(ve))}A.setRenderTarget(be,Ee,ke),A.setClearColor(Ve,Ie),nt!==void 0&&(G.viewport=nt),A.toneMapping=Je}function Pa(S,F,j){let G=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ve=S.length;W<ve;W++){let we=S[W],{object:be,geometry:Ee,group:ke}=we,Je=we.material;Je.allowOverride===!0&&G!==null&&(Je=G),be.layers.test(j.layers)&&du(be,F,j,Ee,Je,ke)}}function du(S,F,j,G,W,ve){k!==null&&W.isNodeMaterial&&k.setObject(S,W),S.onBeforeRender(A,F,j,G,W,ve),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(A,F,j,G,S,ve),W.transparent===!0&&W.side===kn&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,A.renderBufferDirect(j,F,G,W,S,ve),W.side=Oi,W.needsUpdate=!0,A.renderBufferDirect(j,F,G,W,S,ve),W.side=kn):A.renderBufferDirect(j,F,G,W,S,ve),S.onAfterRender(A,F,j,G,W,ve)}function ka(S,F,j){F.isScene!==!0&&(F=un);let G=$.get(S),W=T.state.lights,ve=T.state.shadowsArray,we=W.state.version,be=ue.getParameters(S,W.state,ve,F,j,T.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(be),ke=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Je=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=le.get(S.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",Kn),ke=new Map,G.programs=ke);let nt=ke.get(Ee);if(nt!==void 0){if(G.currentProgram===nt&&G.lightsStateVersion===we)return pu(S,be),nt}else be.uniforms=ue.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,j,be),S.onBeforeCompile(be,A),nt=ue.acquireProgram(be,Ee),ke.set(Ee,nt),G.uniforms=be.uniforms;let Ae=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=De.uniform),pu(S,be),G.needsLights=vp(S),G.lightsStateVersion=we,G.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=nt,G.uniformsList=null,nt}function fu(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Qs.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function pu(S,F){let j=$.get(S);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function gp(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let j=0,G=S.length;j<G;j++){let W=S[j];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function yp(S,F,j,G,W){F.isScene!==!0&&(F=un),Q.resetTextureUnits();let ve=F.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,be=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,ke=le.get(G.envMap||we,Ee),Je=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,nt=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!j.morphAttributes.position,ct=!!j.morphAttributes.normal,Dt=!!j.morphAttributes.color,Mt=Xn;G.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Mt=A.toneMapping);let xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Kt=xt!==void 0?xt.length:0,_e=$.get(G),an=T.state.lights;if(Xe===!0&&(et===!0||S!==K)){let wt=S===K&&G.id===q;De.setState(G,S,wt)}let at=!1;G.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==an.state.version||_e.outputColorSpace!==be||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==ke||G.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==De.numPlanes||_e.numIntersection!==De.numIntersection)||_e.vertexAlphas!==Je||_e.vertexTangents!==nt||_e.morphTargets!==Ae||_e.morphNormals!==ct||_e.morphColors!==Dt||_e.toneMapping!==Mt||_e.morphTargetsCount!==Kt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,_e.__version=G.version);let Cn=_e.currentProgram;at===!0&&(Cn=ka(G,F,W),k&&G.isNodeMaterial&&k.onUpdateProgram(G,Cn,_e));let Qn=!1,wi=!1,ps=!1,mt=Cn.getUniforms(),It=_e.uniforms;if(y.useProgram(Cn.program)&&(Qn=!0,wi=!0,ps=!0),G.id!==q&&(q=G.id,wi=!0),_e.needsLights){let wt=gp(T.state.lightProbeGridArray,W);_e.lightProbeGrid!==wt&&(_e.lightProbeGrid=wt,wi=!0)}if(Qn||K!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),mt.setValue(B,"projectionMatrix",S.projectionMatrix),mt.setValue(B,"viewMatrix",S.matrixWorldInverse);let Mi=mt.map.cameraPosition;Mi!==void 0&&Mi.setValue(B,At.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&mt.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,wi=!0,ps=!0)}if(_e.needsLights&&(an.state.sunShadowMap.length>0&&mt.setValue(B,"sunShadowMap",an.state.sunShadowMap,Q),an.state.directionalShadowMap.length>0&&mt.setValue(B,"directionalShadowMap",an.state.directionalShadowMap,Q),an.state.spotShadowMap.length>0&&mt.setValue(B,"spotShadowMap",an.state.spotShadowMap,Q),an.state.pointShadowMap.length>0&&mt.setValue(B,"pointShadowMap",an.state.pointShadowMap,Q)),W.isSkinnedMesh){mt.setOptional(B,W,"bindMatrix"),mt.setOptional(B,W,"bindMatrixInverse");let wt=W.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),mt.setValue(B,"boneTexture",wt.boneTexture,Q))}W.isBatchedMesh&&(mt.setOptional(B,W,"batchingTexture"),mt.setValue(B,"batchingTexture",W._matricesTexture,Q),mt.setOptional(B,W,"batchingIdTexture"),mt.setValue(B,"batchingIdTexture",W._indirectTexture,Q),mt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue(B,"batchingColorTexture",W._colorsTexture,Q));let Si=j.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&U.update(W,j,Cn),(wi||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,mt.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(It.envMapIntensity.value=F.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Wb()),wi){if(mt.setValue(B,"toneMappingExposure",A.toneMappingExposure),_e.needsLights&&bp(It,ps),ve&&G.fog===!0&&Le.refreshFogUniforms(It,ve),Le.refreshMaterialUniforms(It,G,Z,O,T.state.transmissionRenderTarget[S.id]),_e.needsLights&&_e.lightProbeGrid){let wt=_e.lightProbeGrid;It.probesSH.value=wt.texture,It.probesMin.value.copy(wt.boundingBox.min),It.probesMax.value.copy(wt.boundingBox.max),It.probesResolution.value.copy(wt.resolution)}Qs.upload(B,fu(_e),It,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qs.upload(B,fu(_e),It,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(B,"center",W.center),mt.setValue(B,"modelViewMatrix",W.modelViewMatrix),mt.setValue(B,"normalMatrix",W.normalMatrix),mt.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let wt=G.uniformsGroups;for(let Mi=0,ms=wt.length;Mi<ms;Mi++){let gu=wt[Mi];ae.update(gu,Cn),ae.bind(gu,Cn)}}return Cn}function bp(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function vp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,F,j){let G=$.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),$.get(S.texture).__webglTexture=F,$.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:j,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let j=$.get(S);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,j=0){ie=S,Y=F,D=j;let G=null,W=!1,ve=!1;if(S){let be=$.get(S);if(be.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),N.copy(S.viewport),J.copy(S.scissor),oe=S.scissorTest,y.viewport(N),y.scissor(J),y.setScissorTest(oe),q=-1;return}else if(be.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(be.__hasExternalTextures)Q.rebindTextures(S,$.get(S.texture).__webglTexture,$.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Je=S.depthTexture;if(be.__boundDepthTexture!==Je){if(Je!==null&&$.has(Je)&&(S.width!==Je.image.width||S.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}let Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);let ke=$.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?G=ke[F][j]:G=ke[F],W=!0):S.samples>0&&Q.useMultisampledRTT(S)===!1?G=$.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[j]:G=ke,N.copy(S.viewport),J.copy(S.scissor),oe=S.scissorTest}else N.copy(ee).multiplyScalar(Z).floor(),J.copy(Te).multiplyScalar(Z).floor(),oe=Oe;if(j!==0&&(G=z),y.bindFramebuffer(B.FRAMEBUFFER,G)&&y.drawBuffers(S,G),y.viewport(N),y.scissor(J),y.setScissorTest(oe),W){let be=$.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,j)}else if(ve){let be=F;for(let Ee=0;Ee<S.textures.length;Ee++){let ke=$.get(S.textures[Ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ee,ke.__webglTexture,j,be)}}else if(S!==null&&j!==0){let be=$.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,j)}q=-1};function mu(S){let F=$.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=P.textureFormatReadable(S.format),F.__typeReadable=P.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,j,G,W,ve,we,be=0){if(!(S&&S.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){y.bindFramebuffer(B.FRAMEBUFFER,Ee);try{let ke=S.textures[be],Je=ke.format,nt=ke.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Ae=mu(ke);if(Ae.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-G&&j>=0&&j<=S.height-W&&B.readPixels(F,j,G,W,pe.convert(Je),pe.convert(nt),ve)}finally{let ke=ie!==null?$.get(ie).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,F,j,G,W,ve,we,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee)if(F>=0&&F<=S.width-G&&j>=0&&j<=S.height-W){y.bindFramebuffer(B.FRAMEBUFFER,Ee);let ke=S.textures[be],Je=ke.format,nt=ke.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Ae=mu(ke);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),B.readPixels(F,j,G,W,pe.convert(Je),pe.convert(nt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Dt=ie!==null?$.get(ie).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Dt);let Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Cd(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ct),B.deleteSync(Mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,j=0){let G=Math.pow(2,-j),W=Math.floor(S.image.width*G),ve=Math.floor(S.image.height*G),we=F!==null?F.x:0,be=F!==null?F.y:0;Q.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,we,be,W,ve),y.unbindTexture()},this.copyTextureToTexture=function(S,F,j=null,G=null,W=0,ve=0){let we,be,Ee,ke,Je,nt,Ae,ct,Dt,Mt=S.isCompressedTexture?S.mipmaps[ve]:S.image;if(j!==null)we=j.max.x-j.min.x,be=j.max.y-j.min.y,Ee=j.isBox3?j.max.z-j.min.z:1,ke=j.min.x,Je=j.min.y,nt=j.isBox3?j.min.z:0;else{let It=Math.pow(2,-W);we=Math.floor(Mt.width*It),be=Math.floor(Mt.height*It),S.isDataArrayTexture?Ee=Mt.depth:S.isData3DTexture?Ee=Math.floor(Mt.depth*It):Ee=1,ke=0,Je=0,nt=0}G!==null?(Ae=G.x,ct=G.y,Dt=G.z):(Ae=0,ct=0,Dt=0);let xt=pe.convert(F.format),Kt=pe.convert(F.type),_e;F.isData3DTexture?(Q.setTexture3D(F,0),_e=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),_e=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),_e=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let an=y.getParameter(B.UNPACK_ROW_LENGTH),at=y.getParameter(B.UNPACK_IMAGE_HEIGHT),Cn=y.getParameter(B.UNPACK_SKIP_PIXELS),Qn=y.getParameter(B.UNPACK_SKIP_ROWS),wi=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Mt.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(B.UNPACK_SKIP_ROWS,Je),y.pixelStorei(B.UNPACK_SKIP_IMAGES,nt);let ps=S.isDataArrayTexture||S.isData3DTexture,mt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let It=$.get(S),Si=$.get(F),wt=$.get(It.__renderTarget),Mi=$.get(Si.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,wt.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ms=0;ms<Ee;ms++)ps&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(S).__webglTexture,W,nt+ms),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(F).__webglTexture,ve,Dt+ms)),B.blitFramebuffer(ke,Je,we,be,Ae,ct,we,be,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||$.has(S)){let It=$.get(S),Si=$.get(F);y.bindFramebuffer(B.READ_FRAMEBUFFER,L),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let wt=0;wt<Ee;wt++)ps?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,W,nt+wt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,W),mt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Si.__webglTexture,ve,Dt+wt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Si.__webglTexture,ve),W!==0?B.blitFramebuffer(ke,Je,we,be,Ae,ct,we,be,B.COLOR_BUFFER_BIT,B.NEAREST):mt?B.copyTexSubImage3D(_e,ve,Ae,ct,Dt+wt,ke,Je,we,be):B.copyTexSubImage2D(_e,ve,Ae,ct,ke,Je,we,be);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else mt?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(_e,ve,Ae,ct,Dt,we,be,Ee,xt,Kt,Mt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,ve,Ae,ct,Dt,we,be,Ee,xt,Mt.data):B.texSubImage3D(_e,ve,Ae,ct,Dt,we,be,Ee,xt,Kt,Mt):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ve,Ae,ct,we,be,xt,Kt,Mt.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ve,Ae,ct,Mt.width,Mt.height,xt,Mt.data):B.texSubImage2D(B.TEXTURE_2D,ve,Ae,ct,we,be,xt,Kt,Mt);y.pixelStorei(B.UNPACK_ROW_LENGTH,an),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Cn),y.pixelStorei(B.UNPACK_SKIP_ROWS,Qn),y.pixelStorei(B.UNPACK_SKIP_IMAGES,wi),ve===0&&F.generateMipmaps&&B.generateMipmap(_e),y.unbindTexture()},this.initRenderTarget=function(S){$.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){Y=0,D=0,ie=null,y.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}};var qb=[{name:"Morning Arrival",len:30,kind:"arrive",tint:[255,200,140,.16]},{name:"Period 1",len:60,kind:"class",swap:!1,tint:[255,255,255,0]},{name:"Lunch",len:30,kind:"lunch",tint:[255,236,170,.12]},{name:"Period 2",len:60,kind:"class",swap:!0,tint:[255,235,215,.07]},{name:"Dismissal",len:30,kind:"dismiss",tint:[255,130,80,.24]}],jn=(()=>{let t=0;return qb.map(e=>{let n={...e,start:t};return t+=e.len,n})})(),kc=jn.reduce((t,e)=>t+e.len,0),Ic=7*60+30,cf=t=>{for(let e=jn.length-1;e>=0;e--)if(t>=jn[e].start)return e;return 0},Gl=t=>{let e=Ic+Math.floor(t),n=Math.floor(e/60)%24,i=e%60;return`${(n+11)%12+1}:${String(i).padStart(2,"0")} ${n<12?"AM":"PM"}`},Wi=(t,e)=>t+Math.random()*(e-t),Lc=t=>{t=t.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};function tr(t,e,n,i,s){let r=t.length,a=t[0].length,h=(f,g)=>f>=0&&g>=0&&f<a&&g<r&&t[g][f]===".";if(e===i&&n===s||!h(i,s))return[];let l=(f,g)=>g*a+f,o=new Map([[l(e,n),0]]),d=new Map,u=[{x:e,y:n,f:0}],c=new Set;for(;u.length;){let f=0;for(let p=1;p<u.length;p++)u[p].f<u[f].f&&(f=p);let g=u.splice(f,1)[0],v=l(g.x,g.y);if(!c.has(v)){if(c.add(v),g.x===i&&g.y===s){let p=[],m=v;for(;m!==l(e,n);)p.push({x:m%a,y:Math.floor(m/a)}),m=d.get(m);return p.reverse()}for(let[p,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let _=g.x+p,R=g.y+m;if(!h(_,R))continue;let x=l(_,R),M=o.get(v)+1;o.has(x)&&o.get(x)<=M||(o.set(x,M),d.set(x,v),u.push({x:_,y:R,f:M+Math.abs(_-i)+Math.abs(R-s)}))}}}return[]}var ir="#6b4a4f";function yt(t,e,n,i,s,r){t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+i,n,e+i,n+s,r),t.arcTo(e+i,n+s,e,n+s,r),t.arcTo(e,n+s,e,n,r),t.arcTo(e,n,e+i,n,r),t.closePath()}function te(t,e,n=1.4){t.fillStyle=e,t.fill(),n&&(t.lineWidth=n,t.strokeStyle=ir,t.lineJoin="round",t.stroke())}function Dn(t,e,n,i,s,r,a){t.lineCap="round",t.beginPath(),t.moveTo(e,n),t.lineTo(i,s),t.strokeStyle=ir,t.lineWidth=r+2.2,t.stroke(),t.strokeStyle=a,t.lineWidth=r,t.stroke()}var Xb=["#5b6b8c","#7a6a58","#4f5d75","#8a5f6a","#5f7a68"];function Me(t,e){if(!t||t[0]!=="#"||t.length<7)return t;let n=parseInt(t.slice(1,7),16),i=e>0?0:255,s=Math.abs(e);return"#"+[n>>16&255,n>>8&255,n&255].map(r=>Math.round(r+(i-r)*s).toString(16).padStart(2,"0")).join("")}function $b(t,e,n,i,s){t.fillStyle=s,t.beginPath(),t.moveTo(e,n+i*.9),t.bezierCurveTo(e-i*1.6,n-i*.2,e-i*.7,n-i*1.2,e,n-i*.35),t.bezierCurveTo(e+i*.7,n-i*1.2,e+i*1.6,n-i*.2,e,n+i*.9),t.fill()}function Yb(t,e,n,i,s){t.fillStyle=s,t.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,h=r&1?i*.45:i;t.lineTo(e+Math.cos(a)*h,n+Math.sin(a)*h)}t.closePath(),t.fill()}function sr(t,e,n,i,s){if(i.age==="adult"&&!i.legacyAdult)return ev(t,e,n,i,s);t.save(),t.translate(Math.round(e*2)/2,Math.round(n*2)/2);let r=i.moving,a=r?Math.sin(i.walk):0,h=i.dir,l=h==="left"||h==="right",o=h==="left"?-1:1,d=h==="up",u=i.sitting,c=i.age==="adult",f=i.top,g=i.bottom||"pants",v=(i.headSize||1)*1,p=(i.build==="slim"?.9:i.build==="sturdy"?1.12:1)*(c?1.12:1),m=c?1.28:1;t.fillStyle="rgba(70,45,55,.24)",t.beginPath(),t.ellipse(0,1,10*p,3.6,0,0,7),t.fill(),u&&t.translate(0,8),t.translate(0,r?-Math.abs(Math.cos(i.walk))*1.8:Math.sin(s*2+i.id)*.35),c&&t.scale(1,m);let _=i.pants||Xb[i.id%5],R=i.pack||["#f28f7e","#4f91c7","#eab94e","#88b89a","#b8a8da"][i.id%5],x=i.shoes||"#fbf6ee",M=i.packStyle||"pack",T=f==="tank"?i.skin:i.shirt,C=i.shirt2||"#fff6ea";u||[-1,1].forEach(N=>{let J=r?Math.max(0,N*a)*2.6:0,oe=l?0:N*3.2*p,Ve=l?N*a*4.2:N*3.2*p;g==="shorts"?(Dn(t,oe,-9,Ve,-2-J,3.4,i.skin),Dn(t,oe,-9,oe+(Ve-oe)*.38,-6-J*.38,3.9,_)):g==="skirt"?Dn(t,oe,-9,Ve,-2-J,3.2,i.skin):Dn(t,oe,-9,Ve,-2-J,g==="joggers"?4.2:3.6,_);let Ie=Ve+(l?o*1.2:0),Ge=-.6-J;i.shoeStyle==="boot"?(yt(t,Ie-2.6,Ge-3.6,5.2,4.6,1.6),te(t,x,1.1),t.beginPath(),t.ellipse(Ie+(l?o*1.2:0),Ge+.6,3.6,1.7,0,0,7),te(t,Me(x,.25),1.1)):i.shoeStyle==="sandal"?(t.beginPath(),t.ellipse(Ie,Ge,3.4,1.7,0,0,7),te(t,i.skin,1.1),t.strokeStyle=x,t.lineWidth=1.2,t.beginPath(),t.moveTo(Ie-2.2,Ge-.3),t.lineTo(Ie+2.2,Ge-.3),t.stroke()):(t.beginPath(),t.ellipse(Ie,Ge,3.4,1.9,0,0,7),te(t,x,1.1),i.shoeStyle==="sneaker"&&(t.fillStyle="rgba(255,255,255,.55)",t.fillRect(Ie-3,Ge+.5,6,.7)))}),g==="skirt"&&!u&&(t.beginPath(),t.moveTo(-6.8*p,-12),t.lineTo(6.8*p,-12),t.lineTo(9.6*p,-5.6),t.lineTo(-9.6*p,-5.6),t.closePath(),te(t,_,1.3),t.fillStyle="rgba(255,255,255,.22)",t.fillRect(-8.2*p,-7.4,16.4*p,1));let b=(N,J)=>{let oe=l?N*a*3.5:N*8.2,Ve=-9.5-(r?-N*a*1.5:0),Ie=i.arms&&(N>0?i.arms.R:i.arms.L);Ie&&(oe=l?o*Math.abs(Ie[0])*.9:Ie[0],Ve=Ie[1]),Dn(t,l?0:N*6.6*p,-17,oe,Ve,3.2,T),t.beginPath(),t.arc(oe,Ve+.6,1.9,0,7),te(t,i.skin,1)};l&&b(-o*-1,!1),l&&M==="pack"?(yt(t,-o*9.5,-19,7,10,3),te(t,R,1.2)):l&&M==="mini"&&(yt(t,-o*8,-16,5,6.5,2.4),te(t,R,1.1)),f==="hoodie"&&(t.beginPath(),t.ellipse(0,-19.6,6.4*p,3.2,0,0,7),te(t,Me(i.shirt,.14),1.2));let E=()=>{f==="dress"?(t.beginPath(),t.moveTo(-6.4*p,-19.5),t.quadraticCurveTo(0,-21,6.4*p,-19.5),t.lineTo(7*p,-13),t.lineTo(9.6*p,-6),t.quadraticCurveTo(0,-4.4,-9.6*p,-6),t.lineTo(-7*p,-13),t.closePath()):f==="tank"?yt(t,-5.6*p,-19.5,11.2*p,11.5,4):yt(t,-6.6*p,-19.5,13.2*p,11.5,4.5)},A=f==="overalls"||f==="vest"?C:i.shirt;if(E(),te(t,A,1.4),i.pattern&&i.pattern!=="solid"&&f!=="overalls"&&f!=="vest"){let N=i.shirt2||Me(i.shirt,.3);if(t.save(),E(),t.clip(),i.pattern==="stripes")for(let J=-20;J<-4;J+=3.6)t.fillStyle=N,t.fillRect(-11,J,22,1.7);else if(i.pattern==="dots")for(let J=-19;J<-4;J+=3.2)for(let oe=-9+(J*3&1)*1.6;oe<10;oe+=3.2)t.fillStyle=N,t.beginPath(),t.arc(oe,J,.85,0,7),t.fill();else if(i.pattern==="plaid"){t.strokeStyle=N,t.globalAlpha=.75,t.lineWidth=1;for(let J=-19;J<-4;J+=3.6)t.beginPath(),t.moveTo(-11,J),t.lineTo(11,J),t.stroke();for(let J=-9;J<10;J+=3.6)t.beginPath(),t.moveTo(J,-21),t.lineTo(J,-4),t.stroke();t.globalAlpha=1}else if(i.pattern==="hearts")for(let J=-17;J<-5;J+=4.2)for(let oe=-7+(J*2&1)*2;oe<8;oe+=4.4)$b(t,oe,J,1.1,N);else if(i.pattern==="stars")for(let J=-17;J<-5;J+=4.2)for(let oe=-7+(J*2&1)*2;oe<8;oe+=4.4)Yb(t,oe,J,1.4,N);t.restore(),E(),t.lineWidth=1.4,t.strokeStyle=ir,t.stroke()}if(t.fillStyle="rgba(255,255,255,.3)",t.beginPath(),t.ellipse(-2.4,-16.5,2.4,3.4,0,0,7),t.fill(),f)d||(f==="hoodie"?(yt(t,-3.8,-14,7.6,3.6,1.6),t.lineWidth=1,t.strokeStyle=Me(i.shirt,.3),t.stroke(),Dn(t,-1.6,-18.6,-1.6,-14.8,.8,C),Dn(t,1.6,-18.6,1.6,-14.8,.8,C)):f==="sweater"?(t.fillStyle=Me(i.shirt,-.28),t.fillRect(-6.4*p,-10.6,12.8*p,2),t.beginPath(),t.ellipse(0,-19.3,3.6,1.5,0,0,7),te(t,Me(i.shirt,-.28),1)):f==="jersey"?(t.fillStyle=i.shirt2||"#fff",t.font="800 6.4px 'Trebuchet MS',sans-serif",t.textAlign="center",t.fillText(String(i.num??i.id%90+1),0,-11.8),t.fillRect(-6.4*p,-19.4,12.8*p,.9)):f==="blazer"?(t.beginPath(),t.moveTo(-3.4,-19.4),t.lineTo(0,-12.4),t.lineTo(3.4,-19.4),t.closePath(),te(t,C,.9),t.beginPath(),t.moveTo(-3.4,-19.4),t.lineTo(-.4,-11.8),t.lineTo(-5.6,-11),t.lineTo(-6.4,-17.6),t.closePath(),te(t,Me(i.shirt,.16),.9),t.beginPath(),t.moveTo(3.4,-19.4),t.lineTo(.4,-11.8),t.lineTo(5.6,-11),t.lineTo(6.4,-17.6),t.closePath(),te(t,Me(i.shirt,.16),.9),t.fillStyle="#EAB94E",t.beginPath(),t.arc(0,-10.4,.7,0,7),t.fill()):f==="overalls"?(yt(t,-4,-16.4,8,6.8,1.6),te(t,i.shirt,1.1),Dn(t,-3.4,-19.4,-3.2,-16.2,1.2,i.shirt),Dn(t,3.4,-19.4,3.2,-16.2,1.2,i.shirt),t.fillStyle="#EAB94E",[-3.2,3.2].forEach(N=>{t.beginPath(),t.arc(N,-16.2,.7,0,7),t.fill()}),yt(t,-2,-14.4,4,2.4,.8),t.lineWidth=.8,t.strokeStyle=Me(i.shirt,.3),t.stroke()):f==="vest"?(t.beginPath(),t.moveTo(-6.6*p,-19.4),t.lineTo(-1.2,-19.4),t.lineTo(-.6,-9.4),t.lineTo(-6.2*p,-9.4),t.closePath(),te(t,i.shirt,1),t.beginPath(),t.moveTo(6.6*p,-19.4),t.lineTo(1.2,-19.4),t.lineTo(.6,-9.4),t.lineTo(6.2*p,-9.4),t.closePath(),te(t,i.shirt,1)):f==="tee"?(t.beginPath(),t.ellipse(0,-19.3,3.2,1.3,0,0,7),te(t,Me(i.shirt,.12),.9)):f==="dress"&&(t.fillStyle=Me(i.shirt,-.35),t.fillRect(-6.4*p,-13.2,13.2*p,1.2)));else{let N=i.id%3;N===0?(t.fillStyle="rgba(255,255,255,.45)",t.fillRect(-6,-15.4,12,2.4)):N===2&&!d&&(t.fillStyle="#fff",t.beginPath(),t.moveTo(-3,-19.4),t.lineTo(0,-16),t.lineTo(3,-19.4),t.closePath(),te(t,"#fff",.9))}d?M!=="none"&&(yt(t,-6,-19,12,10.5,4),te(t,R,1.3),t.fillStyle="rgba(255,255,255,.3)",t.fillRect(-4,-17.5,8,2)):!l&&M==="pack"?(Dn(t,-3.6,-19.2,-3.6,-11,1.5,R),Dn(t,3.6,-19.2,3.6,-11,1.5,R)):!l&&M==="messenger"&&(Dn(t,-5.6,-19.2,5.2,-9.8,1.5,R),yt(t,3.2,-12.6,5.6,5,1.6),te(t,R,1.1)),i.scarf&&(t.beginPath(),t.ellipse(0,-19.4,6.6*p,2.4,0,0,7),te(t,i.scarf,1.2),!d&&!l&&(yt(t,1.6,-19,3.2,8,1.4),te(t,i.scarf,1.1),t.fillStyle="rgba(255,255,255,.4)",t.fillRect(1.9,-15.6,2.6,.9))),i.tag&&(t.beginPath(),t.moveTo(-6,-19.5),t.lineTo(-1,-8.5),t.lineTo(-6.6,-9),t.closePath(),t.fillStyle="#c4463c",t.fill(),t.beginPath(),t.moveTo(6,-19.5),t.lineTo(1,-8.5),t.lineTo(6.6,-9),t.closePath(),t.fill()),i.badge&&!d&&!l&&(t.beginPath(),t.arc(-3.8,-15.4,1.5,0,7),te(t,i.badge,.9)),l?b(o*1,!0):(b(-1),b(1)),c&&t.scale(1,1/m),t.save(),c&&(t.translate(0,-8.4+0),t.scale(.82,.82)),t.translate((i.turn||0)*1.7,0);let w=-28,k=i.hair,z=i.style,L=i.hair2||Me(k,-.28),V=(c?8.1:8.9)*v,Y=(c?9.2:8.3)*v;if((z==="long"||z==="bob")&&(yt(t,-9.8,w-6,19.6,z==="long"?20:14,7),te(t,k,1.3)),z==="wavy"&&(yt(t,-10.2,w-6,20.4,18,7),te(t,k,1.3),[-7,0,7].forEach(N=>{t.beginPath(),t.arc(N,w+12,3.6,0,7),te(t,k,1.1)})),z==="afro"&&(t.beginPath(),t.ellipse(l?-o*1.2:0,w-3,13.2,12.6,0,0,7),te(t,k,1.4)),z==="bun"&&(t.beginPath(),t.arc(l?-o*3:0,w-9.5,4.4,0,7),te(t,k,1.3)),z==="topknot"&&(t.beginPath(),t.arc(l?-o*2:0,w-12,3.4,0,7),te(t,k,1.3)),z==="twinbuns"&&(l?[-o*3]:[-7.6,7.6]).forEach(N=>{t.beginPath(),t.arc(N,w-10.4,3.9,0,7),te(t,k,1.3)}),z==="pony"&&(t.save(),t.translate(l?-o*9:d?0:9,l?w+2:d?w+8:w+1),t.rotate(l||d?0:-.5),t.beginPath(),t.ellipse(0,4,3.2,6.5,0,0,7),te(t,k,1.3),t.restore()),z==="pigtails"&&(l?[-o*10]:[-10.6,10.6]).forEach((N,J)=>{t.save(),t.translate(N,w+3),t.rotate(l?0:J?-.4:.4),t.beginPath(),t.ellipse(0,5,2.9,6.6,0,0,7),te(t,k,1.3),t.restore()}),z==="braids"&&(l?[-o*8.4]:[-9.4,9.4]).forEach(N=>{for(let J=0;J<4;J++)t.beginPath(),t.ellipse(N,w+4+J*3.7,2.2,2.1,0,0,7),te(t,J&1?L:k,1.1)}),z==="curly"&&[[-8,w-2],[8,w-2],[-6,w-8],[6,w-8],[0,w-10]].forEach(([N,J])=>{t.beginPath(),t.arc(N,J,4.6,0,7),te(t,k,1.2)}),l||[-1,1].forEach(N=>{t.beginPath(),t.arc(N*8.7,w+1,2,0,7),te(t,i.skin,1)}),t.beginPath(),t.ellipse(l?o*.6:0,w,V,Y,0,0,7),te(t,i.skin,1.5),t.fillStyle="rgba(120,70,60,.13)",t.beginPath(),t.ellipse(3,w+3,7.5,6,0,0,7),t.fill(),!d){let N=(s*.9+i.id*1.7)%4<.13,J=l?[o*4.4]:[-3.5,3.5],oe=i.eyeShape||"round",Ve=i.eyeColor,Ie=i.brow||"soft",Ge=i.browColor||i.hair;if(J.forEach((ee,Te)=>{if(N||oe==="happy")t.strokeStyle="#3a2a30",t.lineWidth=1.1,t.beginPath(),oe==="happy"&&!N?t.arc(ee,w+.6,1.7,Math.PI*1.1,Math.PI*1.9):(t.moveTo(ee-1.6,w),t.lineTo(ee+1.6,w)),t.stroke();else{let Oe=c?.74:1,Re=(oe==="wide"?2.1:oe==="oval"?1.4:1.7)*Oe,Xe=(oe==="wide"||oe==="oval"?2.7:2.3)*(c?.82:1);if(t.fillStyle=Ve||"#3a2a30",t.beginPath(),t.ellipse(ee,w,Re,Xe,0,0,7),t.fill(),Ve&&(t.fillStyle="#2a1d22",t.beginPath(),t.ellipse(ee,w+.2,Re*.5,Xe*.55,0,0,7),t.fill()),t.fillStyle="#fff",t.beginPath(),t.arc(ee-.5,w-.9,oe==="wide"?.9:.7,0,7),t.fill(),oe==="sleepy"&&(t.fillStyle=i.skin,t.beginPath(),t.ellipse(ee,w-1.1,Re+.5,Xe*.62,0,Math.PI,2*Math.PI),t.fill(),t.strokeStyle="#3a2a30",t.lineWidth=.9,t.beginPath(),t.moveTo(ee-Re-.4,w-.6),t.lineTo(ee+Re+.4,w-.6),t.stroke()),oe==="lash"){t.strokeStyle="#3a2a30",t.lineWidth=.8;let et=l?o:Te?1:-1;t.beginPath(),t.moveTo(ee+et*Re,w-1),t.lineTo(ee+et*(Re+1.4),w-2.2),t.moveTo(ee+et*Re,w-.1),t.lineTo(ee+et*(Re+1.6),w-.6),t.stroke()}}if(Ie!=="none"){if(t.strokeStyle=Ge,t.lineCap="round",t.lineWidth=(Ie==="thick"?1.6:Ie==="thin"?.6:.9)+(c?.45:0),t.beginPath(),Ie==="arch")t.moveTo(ee-2,w-3.2),t.quadraticCurveTo(ee,w-5.2,ee+2,w-3.6);else if(c){let Oe=l||Te?1:-1;t.moveTo(ee-2.2*Oe,w-3.5),t.lineTo(ee+2.2*Oe,w-4.3)}else t.moveTo(ee-2,w-3.6),t.lineTo(ee+2,w-3.9);t.stroke()}if(i.glasses){let Oe=i.glasses===!0?"round":i.glasses,Re=i.glassColor||"#5b4048";t.strokeStyle=Re,t.lineWidth=Oe==="sun"?1:.9,t.beginPath(),Oe==="square"?t.roundRect(ee-3.1,w-2.6,6.2,5.2,1.2):Oe==="cat"?(t.ellipse(ee,w,3.2,2.7,0,0,7),t.moveTo(ee+(l?o:Te?1:-1)*3,w-1.6),t.lineTo(ee+(l?o:Te?1:-1)*4.4,w-3.4)):Oe==="half"?t.arc(ee,w,3.2,Math.PI,0):t.arc(ee,w,3.2,0,7),Oe==="sun"&&(t.fillStyle="rgba(40,30,40,.82)",t.fill()),t.stroke()}}),i.glasses&&!l&&(t.strokeStyle=i.glassColor||"#5b4048",t.lineWidth=.9,t.beginPath(),t.moveTo(-.3,w-.5),t.lineTo(.3,w-.5),t.stroke()),(c?i.blush===!0:i.blush!==!1)&&(t.fillStyle=i.blushColor||(c?"rgba(255,110,125,.14)":"rgba(255,110,125,.38)"),(l?[o*6.4]:[-6,6]).forEach(ee=>{t.beginPath(),t.ellipse(ee,w+3.4,2.1,1.3,0,0,7),t.fill()})),i.freckles&&(t.fillStyle=Me(i.skin,.32),(l?[[o*5.6,w+2.2],[o*6.8,w+3.2],[o*5.2,w+3.8]]:[[-5.6,w+2.4],[-4.2,w+3.4],[-6.4,w+3.8],[5.6,w+2.4],[4.2,w+3.4],[6.4,w+3.8]]).forEach(([ee,Te])=>{t.beginPath(),t.arc(ee,Te,.5,0,7),t.fill()})),i.mole&&(t.fillStyle="#4a2f2a",t.beginPath(),t.arc(l?o*6:4.4,w+5.2,.65,0,7),t.fill()),i.nose||c){t.strokeStyle=Me(i.skin,.3),t.lineWidth=.8,t.beginPath();let ee=l?o*6.4:0;t.arc(ee,w+2.6,.9,.1*Math.PI,.9*Math.PI),t.stroke()}let O=l?o*3.6:0,Z=w+4.7,he=i.mouthStyle||"smile",X=i.lip||"#8a4650";i.mouth?(t.fillStyle="#7A3B3B",t.beginPath(),t.ellipse(O,w+4.8,1.7,.7+i.mouth*1.5,0,0,7),t.fill()):he==="grin"?(t.beginPath(),t.moveTo(O-2.4,Z-.9),t.quadraticCurveTo(O,Z+2.8,O+2.4,Z-.9),t.closePath(),t.fillStyle="#fff",t.fill(),t.strokeStyle=X,t.lineWidth=.9,t.stroke()):he==="smirk"?(t.strokeStyle=X,t.lineWidth=1,t.lineCap="round",t.beginPath(),t.moveTo(O-1.8,Z),t.quadraticCurveTo(O+.4,Z+1,O+2.2,Z-.8),t.stroke()):he==="flat"?(t.strokeStyle=X,t.lineWidth=1,t.lineCap="round",t.beginPath(),t.moveTo(O-1.5,Z),t.lineTo(O+1.5,Z),t.stroke()):he==="o"?(t.fillStyle="#7A3B3B",t.beginPath(),t.ellipse(O,Z+.2,1,1.2,0,0,7),t.fill()):he==="cat"?(t.strokeStyle=X,t.lineWidth=.9,t.lineCap="round",t.beginPath(),t.arc(O-1,Z-.4,1.1,.1*Math.PI,.9*Math.PI),t.arc(O+1,Z-.4,1.1,.1*Math.PI,.9*Math.PI),t.stroke()):(t.strokeStyle=X,t.lineWidth=1,t.lineCap="round",t.beginPath(),t.arc(O,w+(c?5.4:4.6),c?1.35:1.7,.15*Math.PI,.85*Math.PI),t.stroke())}let D=l?-o*1.6:0,ie=()=>{let N=l?o:1,J=l?-1.6:0;l&&(t.save(),t.scale(N,1)),t.beginPath(),l?(t.moveTo(-9.2+J,w+5.4),t.lineTo(-9.3+J,w+.5),t.bezierCurveTo(-11+J,w-14,11+J,w-14,9.3+J,w+.5),t.quadraticCurveTo(7+J,w-5.4,4+J,w-4.6),t.lineTo(-2.6+J,w-1.6),t.lineTo(-5.4+J,w+3.6)):(t.moveTo(-9.3,w+.5),t.bezierCurveTo(-11,w-14,11,w-14,9.3,w+.5),t.quadraticCurveTo(6,w-3.4,2,w-4.4),t.quadraticCurveTo(-3,w-6,-9.3,w+.5)),t.closePath(),l&&t.restore()};if(d)t.beginPath(),t.ellipse(0,w-.4,9.4,8.9,0,0,7),te(t,k,1.4),t.fillStyle="rgba(255,255,255,.2)",t.beginPath(),t.ellipse(-2.5,w-4,3.5,2,0,0,7),t.fill();else if(z==="buzz")t.beginPath(),t.moveTo(-8.8+D,w-1.2),t.bezierCurveTo(-10+D,w-11,10+D,w-11,8.8+D,w-1.2),t.quadraticCurveTo(0,w-4.6,-8.8+D,w-1.2),t.closePath(),te(t,k,1.3);else if(z==="undercut")ie(),te(t,Me(k,.12),1.3),t.beginPath(),t.moveTo(-7+D,w-4),t.bezierCurveTo(-8+D,w-17,9+D,w-16,7.4+D,w-4),t.quadraticCurveTo(0,w-6,-7+D,w-4),t.closePath(),te(t,k,1.3);else if(z==="spiky"||z==="messy"){ie(),te(t,k,1.4);let N=z==="spiky"?6:4;for(let J=0;J<N;J++){let oe=-Math.PI*(.12+.76*J/(N-1)),Ve=Math.cos(oe+Math.PI)*7.6+D,Ie=w-3+Math.sin(oe)*5.4,Ge=z==="spiky"?6.4:4.4+J%2*1.6;t.beginPath(),t.moveTo(Ve-2.1,Ie+1.4),t.lineTo(Ve+(J-N/2)*.8,Ie-Ge),t.lineTo(Ve+2.1,Ie+1.4),t.closePath(),te(t,k,1.2)}ie(),te(t,k,1.2)}else z==="sidebang"||z==="pixie"?(ie(),te(t,k,1.4),t.beginPath(),t.moveTo(-9+D,w-6),t.quadraticCurveTo(2+D,w-12,9.4+D,w-1.4),t.quadraticCurveTo(z==="pixie"?4+D:-1+D,w-3.6,-9+D,w-6),t.closePath(),te(t,k,1.2),z==="pixie"&&!l&&[-1,1].forEach(N=>{t.beginPath(),t.moveTo(N*9.2,w-1),t.lineTo(N*10.4,w+5),t.lineTo(N*7.6,w+1),t.closePath(),te(t,k,1)})):z==="curtains"?(ie(),te(t,k,1.4),l||(t.strokeStyle=Me(k,.35),t.lineWidth=1,t.beginPath(),t.moveTo(0,w-9.4),t.quadraticCurveTo(-1.2,w-6,-.2,w-3.6),t.stroke())):z==="afro"?(t.beginPath(),t.moveTo(-9+D,w-1),t.bezierCurveTo(-10+D,w-13,10+D,w-13,9+D,w-1),t.quadraticCurveTo(0+D,w-5.4,-9+D,w-1),t.closePath(),te(t,k,1.3)):(ie(),te(t,k,1.4));!d&&i.hair2&&(t.strokeStyle=i.hair2,t.lineWidth=1.3,t.lineCap="round",t.beginPath(),t.moveTo(-5+D,w-6.2),t.quadraticCurveTo(-3+D,w-8.6,0+D,w-9),t.moveTo(1+D,w-9),t.quadraticCurveTo(4+D,w-8,6+D,w-5.4),t.stroke()),d||(t.fillStyle="rgba(255,255,255,.22)",t.beginPath(),t.ellipse(-3+D,w-6.4,3.4,1.5,-.3,0,7),t.fill()),(z==="long"||z==="wavy")&&!d&&!l&&[-1,1].forEach(N=>{t.beginPath(),t.ellipse(N*9,w+6,2.3,7,0,0,7),te(t,k,1.1)}),l&&!d&&(t.beginPath(),t.ellipse(-o*1.2+o*.6,w+2.2,1.5,2.2,0,0,7),te(t,i.skin,1),t.fillStyle="rgba(160,90,80,.25)",t.beginPath(),t.ellipse(-o*1.2+o*.6,w+2.4,.6,1.1,0,0,7),t.fill(),i.glasses&&(t.strokeStyle=i.glassColor||"#5b4048",t.lineWidth=.9,t.beginPath(),t.moveTo(o*1.1,w-.6),t.lineTo(-o*.6,w+.9),t.stroke()));let q=i.hatColor||"#e07a66",K=i.hat;if(i.earrings&&!d&&(l?[-o*.6]:[-9,9]).forEach(N=>{t.beginPath(),t.arc(N,w+4.6,1.2,0,7),te(t,i.earrings,.8)}),K==="cap")t.beginPath(),t.moveTo(-9.4+D,w-2.8),t.bezierCurveTo(-9.8+D,w-15,9.8+D,w-15,9.4+D,w-2.8),t.closePath(),te(t,q,1.3),d||(t.beginPath(),l?t.ellipse(o*9.2+D,w-3,5.2,1.7,0,0,7):t.ellipse(0,w-2.6,7.4,2,0,0,7),te(t,Me(q,.18),1.1)),t.beginPath(),t.arc(0,w-12.2,1,0,7),te(t,Me(q,.2),.8);else if(K==="beanie")t.beginPath(),t.moveTo(-9.8+D,w-2.4),t.bezierCurveTo(-10.4+D,w-17,10.4+D,w-17,9.8+D,w-2.4),t.closePath(),te(t,q,1.3),yt(t,-10+D,w-4.6,20,3.8,1.6),te(t,Me(q,-.25),1.1),t.beginPath(),t.arc(D,w-14,2.3,0,7),te(t,Me(q,-.35),1);else if(K==="bucket")t.beginPath(),t.moveTo(-8+D,w-4),t.lineTo(-7+D,w-11.4),t.lineTo(7+D,w-11.4),t.lineTo(8+D,w-4),t.closePath(),te(t,q,1.3),t.beginPath(),t.ellipse(D,w-4.4,12.2,2.8,0,0,7),te(t,Me(q,.1),1.2);else if(K==="beret")t.beginPath(),t.ellipse(2+D,w-8.6,9,3.6,-.12,0,7),te(t,q,1.3),t.beginPath(),t.arc(3+D,w-12.2,1,0,7),te(t,Me(q,.25),.8);else if(K==="crown")t.beginPath(),t.moveTo(-6+D,w-8),t.lineTo(-6.6+D,w-14),t.lineTo(-3+D,w-11),t.lineTo(0+D,w-15.4),t.lineTo(3+D,w-11),t.lineTo(6.6+D,w-14),t.lineTo(6+D,w-8),t.closePath(),te(t,i.hatColor||"#EAB94E",1.2),[-3,0,3].forEach(N=>{t.beginPath(),t.arc(N+D,w-9.4,.7,0,7),t.fillStyle="#e07a66",t.fill()});else if(K==="catears")[-1,1].forEach(N=>{t.beginPath(),t.moveTo(N*2.6+D,w-8.4),t.lineTo(N*6.2+D,w-15.6),t.lineTo(N*9+D,w-6.2),t.closePath(),te(t,k,1.2),t.beginPath(),t.moveTo(N*4.2+D,w-8.8),t.lineTo(N*6.2+D,w-12.8),t.lineTo(N*7.6+D,w-7.6),t.closePath(),t.fillStyle="#f0a6b5",t.fill()});else if(K==="headphones")t.strokeStyle=ir,t.lineWidth=3.6,t.beginPath(),t.arc(D,w-.5,10.4,Math.PI*1.06,Math.PI*1.94),t.stroke(),t.strokeStyle=q,t.lineWidth=2,t.stroke(),d||(l?[o*9.2]:[-9.8,9.8]).forEach(N=>{yt(t,N-1.7,w-3,3.4,6.2,1.4),te(t,q,1.1)});else if(K==="headband"&&!d)t.strokeStyle=ir,t.lineWidth=3.4,t.beginPath(),t.moveTo(-9+D,w-1.2),t.quadraticCurveTo(D,w-12,9+D,w-1.2),t.stroke(),t.strokeStyle=q,t.lineWidth=2,t.stroke();else if(K==="headband")t.strokeStyle=q,t.lineWidth=2,t.beginPath(),t.moveTo(-9,w-1.2),t.quadraticCurveTo(0,w-12,9,w-1.2),t.stroke();else if(K==="bow"){let N=l?-o*1.5:6.6,J=w-9.6;[-1,1].forEach(oe=>{t.beginPath(),t.moveTo(N,J),t.lineTo(N+oe*5.4,J-2.8),t.lineTo(N+oe*5.4,J+2.8),t.closePath(),te(t,q,1.1)}),t.beginPath(),t.arc(N,J,1.5,0,7),te(t,Me(q,.2),1)}else if(K==="flower"){let N=l?-o*2:-6,J=w-8.4;for(let oe=0;oe<5;oe++){let Ve=oe*Math.PI*2/5;t.beginPath(),t.arc(N+Math.cos(Ve)*2.3,J+Math.sin(Ve)*2.3,1.8,0,7),te(t,q,.9)}t.beginPath(),t.arc(N,J,1.3,0,7),te(t,"#EAB94E",.8)}if(t.restore(),i.tag){let N=w-19+Math.sin(s*4)*1.5;t.beginPath(),t.moveTo(-5,N-5),t.lineTo(5,N-5),t.lineTo(0,N+1),t.closePath(),te(t,"#f28f7e",1.3)}t.restore()}var jb=-43.4;function qe(t,e,n){t.strokeStyle=e,t.lineWidth=n,t.lineCap="round",t.lineJoin="round",t.stroke()}function nr(t,e,n,i,s,r,a,h=1.7){t.lineCap="round",t.beginPath(),t.moveTo(e,n),t.lineTo(i,s),t.strokeStyle=ir,t.lineWidth=r+h,t.stroke(),t.strokeStyle=a,t.lineWidth=r,t.stroke()}function Jb(t,e,n,i){t.beginPath(),i==="side"?(t.moveTo(e-3.9,n+.6),t.bezierCurveTo(e-4.3,n-3.8,e-1.8,n-4.9,e+.4,n-4.9),t.bezierCurveTo(e+2.6,n-4.9,e+3.8,n-3.4,e+3.9,n-1),t.lineTo(e+4,n+.4),t.lineTo(e+5,n+2),t.lineTo(e+3.8,n+2.5),t.lineTo(e+3.9,n+3.3),t.quadraticCurveTo(e+3.5,n+4.1,e+2.8,n+4.5),t.quadraticCurveTo(e+1.2,n+5.2,e-.8,n+4.6),t.bezierCurveTo(e-2.6,n+4,e-3.9,n+2.6,e-3.9,n+.6)):(t.moveTo(e-4.2,n-.6),t.bezierCurveTo(e-4.3,n-3.9,e-2.4,n-4.9,e,n-4.9),t.bezierCurveTo(e+2.4,n-4.9,e+4.3,n-3.9,e+4.2,n-.6),t.bezierCurveTo(e+4.1,n+2.2,e+3,n+4,e+1.5,n+4.7),t.quadraticCurveTo(e,n+5.2,e-1.5,n+4.7),t.bezierCurveTo(e-3,n+4,e-4.1,n+2.2,e-4.2,n-.6)),t.closePath()}var df={smile:{brow:[-.25,.1],mouth:"smile2",eyes:"open",blush:.12},joy:{brow:[-.9,-.5],mouth:"grin",eyes:"happy",blush:.3},frown:{brow:[-.6,.5],mouth:"frown",eyes:"open",droop:.5},upset:{brow:[-1.1,.7],mouth:"wobble",eyes:"wet",tear:!0,droop:1.1},frustrated:{brow:[1,-.7],mouth:"grit",eyes:"narrow",flush:!0,sweat:!0,vein:!0},surprised:{brow:[-1.2,-1.2],mouth:"o",eyes:"wide"},thinking:{brow:[-.5,.2],mouth:"smirk",eyes:"up",oneBrow:!0},stern:{brow:[.45,-.15],mouth:"flat",eyes:"open"}};function Zb(t,e,n,i,s,r){let a=e.skin,h=Me(a,.3),l=e.mouth||0,o=df[e.emote]||null,d=(r*.9+e.id*1.7)%4<.13&&!(o&&(o.eyes==="happy"||o.eyes==="wide")),u=e.lip||Me(a,.38);if((s?[2.2]:[-1.9,1.9]).forEach((_,R)=>{let x=n+_,M=i+.3,T=o&&o.eyes==="happy"?"happy":e.eyeShape||"round",C=o?o.eyes:"open";if(d||T==="happy")t.beginPath(),T==="happy"&&!d?t.arc(x,M+.3,1,Math.PI*1.1,Math.PI*1.9):(t.moveTo(x-1,M),t.lineTo(x+1,M)),qe(t,"#3a2a30",.55);else{let E=C==="wide"?.95:C==="narrow"?.38:C==="wet"?.78:.66;if(t.fillStyle="#fffaf2",t.beginPath(),t.ellipse(x,M,s?.8:1,E,0,0,7),t.fill(),qe(t,Me(a,.45),.3),t.fillStyle=e.eyeColor||"#3a2a30",t.beginPath(),t.arc(x+(s?.25:0)+(C==="up"?.25:0),M+.02+(C==="up"?-.2:0)+(C==="narrow"?.12:0),C==="wide"?.42:.5,0,7),t.fill(),C==="wet"&&(t.fillStyle="rgba(190,225,255,.9)",t.beginPath(),t.ellipse(x+.1,M+.28,.55,.22,0,0,7),t.fill()),t.fillStyle="#fff",t.beginPath(),t.arc(x+(s?.05:-.15),M-.22,.17,0,7),t.fill(),T==="sleepy"&&(t.fillStyle=a,t.beginPath(),t.ellipse(x,M-.35,1.05,.42,0,Math.PI,2*Math.PI),t.fill()),t.beginPath(),t.moveTo(x-(s?.8:1.05),M-.35),t.quadraticCurveTo(x,M-.95,x+(s?.9:1.05),M-.35),qe(t,"#2a1d22",.45),T==="lash"){let A=s||R?1:-1;t.beginPath(),t.moveTo(x+A*.9,M-.4),t.lineTo(x+A*1.7,M-1),qe(t,"#2a1d22",.4)}}let b=e.brow||"soft";if(b!=="none"){let E=b==="thick"?.85:b==="thin"?.32:.55,A=s?1:_<0?-1:1,w=o?o.brow[0]:0,k=o?o.brow[1]:.25,z=o&&o.oneBrow&&R===1?-.9:0,L=M-1.9+z,V=s?x-1.2:x-A*1.2,Y=s?x+1.2:x+A*1.3;t.beginPath(),t.moveTo(V,L+w*.75+(o?0:.2)),t.quadraticCurveTo((V+Y)/2,L-.55+(w+k)*.3+(b==="arch"?-.3:0),Y,L+k*.75),qe(t,e.browColor||e.hair,E)}if(e.glasses&&e.glasses!=="none"){let E=e.glasses===!0?"round":e.glasses,A=e.glassColor||"#3b2f33";if(t.beginPath(),E==="square")t.roundRect(x-1.6,M-1.25,3.2,2.6,.6);else if(E==="cat"){t.ellipse(x,M+.05,1.6,1.3,0,0,7);let w=s?1:_<0?-1:1;t.moveTo(x+w*1.4,M-.7),t.lineTo(x+w*2.1,M-1.6)}else E==="half"?t.arc(x,M,1.6,Math.PI,0):t.arc(x,M+.05,1.5,0,7);E==="sun"&&(t.fillStyle="rgba(40,30,40,.82)",t.fill()),qe(t,A,.5)}}),e.glasses&&e.glasses!=="none"){let _=e.glassColor||"#3b2f33";t.beginPath(),s?(t.moveTo(n+.6,i+.1),t.lineTo(n-3.6,i+.7)):(t.moveTo(n-.5,i+.15),t.lineTo(n+.5,i+.15)),qe(t,_,.45)}s||(t.beginPath(),t.moveTo(n+.2,i+.9),t.lineTo(n+.5,i+2.2),t.arc(n,i+2.35,.65,.05*Math.PI,.85*Math.PI),qe(t,h,.38)),e.freckles&&(t.fillStyle=h,(s?[[3,1.6],[2.3,2.3]]:[[-2.6,1.7],[-1.9,2.4],[2.6,1.7],[1.9,2.4]]).forEach(([_,R])=>{t.beginPath(),t.arc(n+_,i+R,.22,0,7),t.fill()})),e.shadow&&(t.fillStyle=e.shadow,t.globalAlpha=.5,(s?[2.2]:[-1.9,1.9]).forEach(_=>{t.beginPath(),t.ellipse(n+_,i-.55,s?.95:1.3,.55,0,0,7),t.fill()}),t.globalAlpha=1),e.liner&&(t.beginPath(),(s?[[2.2,1]]:[[-1.9,-1],[1.9,1]]).forEach(([_,R])=>{t.moveTo(n+_+R*.85,i+.05),t.lineTo(n+_+R*1.9,i-.6)}),qe(t,"#1a1210",.4)),e.blush===!0&&(t.fillStyle=e.blushColor||"rgba(255,110,125,.16)",(s?[2.6]:[-2.8,2.8]).forEach(_=>{t.beginPath(),t.ellipse(n+_,i+2.1,1,.6,0,0,7),t.fill()}));let f=n+(s?2.6:0),g=i+3.4,v=e.mouthStyle||"smile",p=s?1.1:1.5,m=o?o.mouth:null;if(l&&m!=="grit")t.fillStyle="#7A3B3B",t.beginPath(),t.ellipse(f,g+.1,p*.62,.3+l*.9,0,0,7),t.fill(),t.beginPath(),t.ellipse(f,g+.1,p*.62,.3+l*.9,0,0,7),qe(t,u,.35);else if(m==="frown")t.beginPath(),t.moveTo(f-p,g+.65),t.quadraticCurveTo(f,g-.75,f+p,g+.65),qe(t,u,.55);else if(m==="wobble")t.beginPath(),t.moveTo(f-p,g+.7),t.quadraticCurveTo(f-p*.5,g-.3,f-.1,g+.45),t.quadraticCurveTo(f+p*.5,g-.5,f+p,g+.7),qe(t,u,.5);else if(m==="grit"){yt(t,f-p*.95,g-.35,p*1.9,1.15,.4),t.fillStyle="#fffaf2",t.fill(),qe(t,u,.45),t.beginPath();for(let _=-2;_<=2;_++)t.moveTo(f+_*p*.38,g-.3),t.lineTo(f+_*p*.38,g+.75);qe(t,Me(u,.2),.22)}else m==="o"?(t.fillStyle="#7A3B3B",t.beginPath(),t.ellipse(f,g+.35,.75,1,0,0,7),t.fill(),t.beginPath(),t.ellipse(f,g+.35,.75,1,0,0,7),qe(t,u,.4)):m==="smile2"?(t.beginPath(),t.moveTo(f-p*1.15,g-.25),t.quadraticCurveTo(f,g+1.4,f+p*1.15,g-.25),qe(t,u,.55),t.beginPath(),t.moveTo(f-p*1.15,g-.25),t.lineTo(f-p*1.3,g-.55),t.moveTo(f+p*1.15,g-.25),t.lineTo(f+p*1.3,g-.55),qe(t,Me(a,.2),.3)):v==="grin"||m==="grin"?(t.beginPath(),t.moveTo(f-p*(m?1.2:1),g-.2),t.quadraticCurveTo(f,g+2.1,f+p*(m?1.2:1),g-.2),t.closePath(),t.fillStyle="#fffaf2",t.fill(),qe(t,u,.45)):v==="flat"||m==="flat"?(t.beginPath(),t.moveTo(f-p*.8,g),t.lineTo(f+p*.8,g),qe(t,u,.5)):v==="smirk"||m==="smirk"?(t.beginPath(),t.moveTo(f-p*.8,g+.1),t.quadraticCurveTo(f+.2,g+.8,f+p,g-.5),qe(t,u,.5)):(t.beginPath(),t.moveTo(f-p,g-.1),t.quadraticCurveTo(f,g+1,f+p,g-.1),qe(t,u,.52),t.fillStyle=Me(u,-.25),t.globalAlpha=.55,t.beginPath(),t.ellipse(f,g+.6,p*.5,.26,0,0,7),t.fill(),t.globalAlpha=1);if(o&&o.flush&&(t.fillStyle="rgba(235,70,60,.34)",(s?[2.6]:[-2.8,2.8]).forEach(_=>{t.beginPath(),t.ellipse(n+_,i+2.1,1.2,.8,0,0,7),t.fill()}),t.fillStyle="rgba(235,70,60,.18)",t.beginPath(),t.ellipse(n,i-3.2,3.2,1.2,0,0,7),t.fill()),o&&o.tear){let _=n+(s?2.4:-2.4),R=i+1.6+r*1.3%1*1.6;t.fillStyle="rgba(150,205,255,.95)",t.beginPath(),t.ellipse(_,R,.38,.62,0,0,7),t.fill(),qe(t,"rgba(90,150,210,.8)",.2)}if(o&&o.sweat){let _=n+(s?3.4:3.7),R=i-3.4+Math.sin(r*5)*.15;t.fillStyle="rgba(160,210,255,.95)",t.beginPath(),t.moveTo(_,R-1),t.quadraticCurveTo(_+.8,R+.2,_,R+.8),t.quadraticCurveTo(_-.8,R+.2,_,R-1),t.fill(),qe(t,"rgba(90,150,210,.8)",.2)}if(o&&o.vein){let _=n+(s?-1.6:-3.4),R=i-3.7,x=1+Math.sin(r*9)*.12;t.strokeStyle="#d9302a",t.lineWidth=.38,t.lineCap="round";for(let[M,T]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.beginPath(),t.arc(_+M*.55*x,R+T*.55*x,.5*x,M<0?T<0?0:-Math.PI/2:T<0?Math.PI/2:Math.PI,M<0?T<0?Math.PI/2:0:T<0?Math.PI:Math.PI*1.5),t.stroke()}t.beginPath(),t.moveTo(n+(s?3.1:2.9),i+1.9),t.quadraticCurveTo(n+(s?3.3:3.1),i+2.8,n+(s?3.1:2.8),i+3.6),qe(t,Me(a,.13),.3)}function uf(t,e,n,i,s,r){if(e.style==="bald")return;let a=e.style||"crop",h=e.hair,l=Me(h,-.22),o=s==="side",d=s==="back",u=(p=h)=>te(t,p,1),c=a==="long"||a==="wavy"||a==="braids",f=a==="bob";if(r==="back"){if(a==="afro"&&(t.beginPath(),t.ellipse(n-(o?1.2:0),i-1.4,6.9,6.5,0,0,7),u()),a==="curly"&&[[-5,-1],[5,-1],[-4,-4.8],[4,-4.8],[0,-5.8],[-5.4,2],[5.4,2]].forEach(([p,m])=>{t.beginPath(),t.arc(n+(o?p*.8-1:p),i+m,2.2,0,7),u()}),c||f){let p=c?12:5.6;o?(t.beginPath(),t.moveTo(n-3,i-4),t.lineTo(n-4.6,i+p),t.lineTo(n+.8,i+p-.4),t.lineTo(n+1.4,i),t.closePath(),u()):(t.beginPath(),t.moveTo(n-5,i-3),t.lineTo(n-5.4,i+p),t.quadraticCurveTo(n,i+p+1,n+5.4,i+p),t.lineTo(n+5,i-3),t.closePath(),u())}(a==="pony"||a==="topknot")&&(o?(t.beginPath(),t.ellipse(n-5.2,i+3.4,1.9,4.6,.3,0,7),u()):d&&(t.beginPath(),t.ellipse(n,i+4.6,1.9,5,0,0,7),u()));return}if(d){t.beginPath(),t.ellipse(n,i-.2,4.7,5.2,0,0,7),u(),a==="bun"&&(t.beginPath(),t.arc(n,i-5.6,2.5,0,7),u()),t.fillStyle="rgba(255,255,255,.16)",t.beginPath(),t.ellipse(n-1.4,i-3,1.8,1,-.3,0,7),t.fill();return}let g=a==="buzz",v=g?4.2:5.5;t.beginPath(),o?(t.moveTo(n-4.2,i+2.2),t.bezierCurveTo(n-5.2,i-5.2,n+3.6,i-6.2,n+4,i-1.8),t.lineTo(n+3.7,i-2),t.quadraticCurveTo(n+1.6,i-3.5,n-.6,i-2.4),t.lineTo(n-2.2,i+.2),t.lineTo(n-2.6,i+2.4)):(t.moveTo(n-4.5,i+1.2),t.bezierCurveTo(n-5.3,i-v-.3,n+5.3,i-v-.3,n+4.5,i+1.2),t.lineTo(n+4,i-.9),t.quadraticCurveTo(n+1.6,i-(g?3.7:3.4),n-.8,i-(g?3.4:3)),t.quadraticCurveTo(n-3.3,i-2.6,n-4,i-.9)),t.closePath(),u(),g&&(t.globalAlpha=.35,t.fillStyle=Me(h,-.5),t.fill(),t.globalAlpha=1),a==="bun"&&(t.beginPath(),t.arc(n-(o?2.8:0),i-6.1,2.5,0,7),u(),t.beginPath(),t.arc(n-(o?2.8:0),i-6.1,1.2,0,7),qe(t,l,.35)),(a==="afro"||a==="curly")&&[[-3.8,-3.6],[-1.4,-4.8],[1.4,-4.8],[3.8,-3.6]].forEach(([p,m])=>{t.beginPath(),t.arc(n+(o?p*.7-1:p),i+m,1.9,0,7),u()}),!g&&a!=="afro"&&(t.beginPath(),t.moveTo(n+(o?1.2:-2.1),i-4.6),t.quadraticCurveTo(n+(o?2.4:0),i-5.4,n+(o?3.2:1.4),i-3.5),qe(t,Me(h,.34),.5)),t.fillStyle="rgba(255,255,255,.16)",t.beginPath(),t.ellipse(n-1.4+(o?1:0),i-4.1,1.8,.8,-.25,0,7),t.fill(),c&&!o&&[-1,1].forEach(p=>{t.beginPath(),t.moveTo(n+p*4.2,i-1),t.quadraticCurveTo(n+p*5.6,i+4,n+p*5.2,i+9),t.lineTo(n+p*3.6,i+7),t.quadraticCurveTo(n+p*4.4,i+3,n+p*3.6,i),t.closePath(),u()}),e.hair2&&(t.beginPath(),t.moveTo(n-3.4,i-3.8),t.quadraticCurveTo(n-1,i-5.6,n+1.8,i-4.4),qe(t,e.hair2,.9))}function Kb(t,e,n,i,s){let r=e.beardColor||e.hair;t.beginPath(),s?(t.moveTo(n-1.4,i+.4),t.bezierCurveTo(n-1.6,i+3.4,n-.2,i+6.2,n+2.4,i+6.1),t.bezierCurveTo(n+4.3,i+5.8,n+4.7,i+3.8,n+4.1,i+2.4),t.lineTo(n+3.4,i+2.7),t.quadraticCurveTo(n+1.8,i+3.5,n+.4,i+1.9),t.closePath()):(t.moveTo(n-4.2,i-.5),t.bezierCurveTo(n-4.7,i+3.4,n-3.2,i+6.4,n,i+6.8),t.bezierCurveTo(n+3.2,i+6.4,n+4.7,i+3.4,n+4.2,i-.5),t.lineTo(n+3.4,i+.9),t.quadraticCurveTo(n+3,i+2.6,n+1.8,i+2.9),t.quadraticCurveTo(n,i+2.4,n-1.8,i+2.9),t.quadraticCurveTo(n-3,i+2.6,n-3.4,i+.9),t.closePath()),te(t,r,.9),t.fillStyle="rgba(255,255,255,.1)",t.beginPath(),t.ellipse(n-1.4,i+5,1.8,.7,-.2,0,7),t.fill(),t.fillStyle=Me(e.skin,.08),t.beginPath(),t.ellipse(n+(s?2.7:0),i+3.5,s?1.1:1.9,.95,0,0,7),t.fill()}function Qb(t,e,n,i,s){let r=e.beardColor||e.hair,a=n+(s?2.7:0);t.beginPath(),s?(t.moveTo(a-.6,i+2.6),t.quadraticCurveTo(a+1.2,i+2.4,a+1.6,i+3.1),t.quadraticCurveTo(a+.2,i+3.1,a-.6,i+2.9)):(t.moveTo(n,i+2.7),t.quadraticCurveTo(n-1.4,i+2.2,n-2.6,i+3.2),t.quadraticCurveTo(n-1.4,i+3.2,n,i+2.95),t.quadraticCurveTo(n+1.4,i+3.2,n+2.6,i+3.2),t.quadraticCurveTo(n+1.4,i+2.2,n,i+2.7)),t.closePath(),te(t,r,.5)}function ev(t,e,n,i,s){t.save(),t.translate(Math.round(e*2)/2,Math.round(n*2)/2),t.scale(.93,.93);let r=i.moving,a=r?Math.sin(i.walk):0,h=i.dir,l=h==="left"||h==="right",o=h==="left"?-1:1,d=h==="up",u=i.top==="buttonup"?"shirt":i.top||"shirt",c=i.bottom||"pants",f=i.bodyW??(i.build==="slim"?.92:i.build==="sturdy"?1.1:1),g=i.skin,v=i.acc,p=i.accent||"#c4463c",m=i.shirt||"#8fc9e8",_=i.shirt2||"#fff6ea",R=i.pants||"#4a3b3f",x=i.shoes||"#3b2f33",M=u==="dress",T=c==="skirt"||M,C=jb,b=r?-Math.abs(Math.cos(i.walk))*1.1:Math.sin(s*2+i.id)*.3;t.fillStyle="rgba(70,45,55,.24)",t.beginPath(),t.ellipse(0,1,9.4*f,3,0,0,7),t.fill(),i.sitting&&t.translate(0,6),t.translate(0,b);let E=-22.5,A=-36.4,w=-25.2;[-1,1].forEach(X=>{let ee=r?Math.max(0,X*a)*2.2:0,Te=l?0:X*2.5*f,Oe=l?X*a*5:X*2.6*f+(r?X*0:0),Re=-2.4-ee;nr(t,Te,E+1,Oe,Re,T&&!i.tights?3.2:4.4*(c==="joggers"?1.05:1),T?i.tights||g:R,T?1.4:1.6),!T&&c!=="shorts"&&(t.beginPath(),t.moveTo(Te,E+4),t.lineTo(Oe*.98,Re-3),qe(t,Me(R,.22),.3)),c==="shorts"&&nr(t,Oe,Re-5,Oe,Re,3.2,g,1.4);let Xe=Oe+(l?o*1.5:0),et=Re+1.4-ee*0;i.shoeStyle==="boot"?(yt(t,Xe-2.5,et-4.4,5,5,1.4),te(t,x,1),t.beginPath(),t.ellipse(Xe+(l?o*1.3:0),et+.6,3.5,1.6,0,0,7),te(t,Me(x,.25),1)):(t.beginPath(),t.ellipse(Xe,et,l?3.7:3,1.8,0,0,7),te(t,x,1),t.fillStyle="rgba(255,255,255,.22)",t.beginPath(),t.ellipse(Xe-.6,et-.7,1.5,.5,0,0,7),t.fill())}),t.beginPath(),t.moveTo(-1.9,-39.8),t.lineTo(-1.9,A+.6),t.lineTo(1.9,A+.6),t.lineTo(1.9,-39.8),t.closePath(),te(t,g,1),t.fillStyle="rgba(110,60,50,.22)",t.beginPath(),t.ellipse(0,-38.4,2,1,0,0,7),t.fill();let k=u==="tank"||u==="dress"?g:m,z=u==="tee"||u==="tank"||M&&!i.sleeves,L=u==="blazer"?_:null,V=X=>{let ee=i.arms&&(X>0?i.arms.R:i.arms.L),Te,Oe;return ee?(Te=l?o*Math.abs(ee[0])*1:ee[0]*1.15,Oe=Math.max(-47,A+1+(ee[1]+17)*1.4)):l?(Te=X*a*4.2*-1+o*.6,Oe=-25.2+(r?-Math.abs(a)*.8:0)):(Te=X*(8.6*f+.3)+(r?-X*a*.6:0),Oe=-25.6+(r?-X*a*1.4:0)),[Te,Oe]},Y=X=>{let[ee,Te]=V(X),Oe=l?0:X*6.9*f,Re=A+1.6,Xe=Oe+(ee-Oe)*.52,et=Re+(Te-Re)*.52+D(ee,Oe);z?(nr(t,Oe,Re,Xe,et,3.9,k,1.5),nr(t,Xe,et,ee,Te,3,g,1.4)):(nr(t,Oe,Re,ee,Te,3.7,k,1.5),L&&nr(t,ee-(ee-Oe)*.1,Te-(Te-Re)*.1,ee,Te,3.8,L,1.3)),t.beginPath(),t.arc(ee,Te+.9,1.7,0,7),te(t,g,1)},D=(X,ee)=>0;l&&Y(-o);let ie=(l?4.5:7)*f,q=(l?4.3:6.2)*f,K=(l?3.9:M||T?4.8:5.4)*f,N=(l?4.4:6)*f,J=u==="blazer"||u==="cardigan"?-20.5:u==="labcoat"?-13.2:u==="track"?-21.6:u==="sweater"||u==="turtleneck"?-22.2:-22.6,oe=X=>{t.beginPath(),t.moveTo(-ie+1.6,A-.7),t.quadraticCurveTo(-ie,A-.7,-ie,A+1),t.lineTo(-q,-31),t.lineTo(-K,w),t.lineTo(-N-(u==="blazer"?.6:u==="labcoat"?1.6:0),X),t.lineTo(N+(u==="blazer"?.6:u==="labcoat"?1.6:0),X),t.lineTo(K,w),t.lineTo(q,-31),t.lineTo(ie,A+1),t.quadraticCurveTo(ie,A-.7,ie-1.6,A-.7),t.quadraticCurveTo(0,A-2.1,-ie+1.6,A-.7),t.closePath()};if(T&&!i.sitting){let X=M?-9.5:-12.5,ee=M?8.6:7.8;t.beginPath(),t.moveTo(-N,E-.8),t.lineTo(N,E-.8),t.lineTo(ee*f*(l?.6:1),X),t.quadraticCurveTo(0,X+1.3,-ee*f*(l?.6:1),X),t.closePath(),te(t,M?m:R,1),t.fillStyle="rgba(255,255,255,.14)",t.fillRect(-ee*f*.7,X-1.3,ee*1.4*f,.8)}let Ve=u==="vest"||u==="cardigan"?_:m;if(oe(M?E-1:J),te(t,Ve,1.1),!M&&!T&&!d&&u!=="blazer"&&u!=="sweater"&&!l&&(t.fillStyle=Me(R,.1),t.fillRect(-N+.3,-24.2,(N-.3)*2,1.6),t.fillStyle="#c9b28a",t.fillRect(-.8,-24.1,1.6,1.4)),l||(t.fillStyle="rgba(255,255,255,.2)",t.beginPath(),t.ellipse(-2.6,-33,2,3.2,0,0,7),t.fill()),!d&&!l){if(u==="blazer")t.beginPath(),t.moveTo(-2.4,A-.6),t.lineTo(0,-28.5),t.lineTo(2.4,A-.6),t.closePath(),te(t,_,.8),[-1,1].forEach(X=>{t.beginPath(),t.moveTo(X*2.5,A-.7),t.lineTo(X*.2,-27.8),t.lineTo(X*1.4,-24.6),t.lineTo(X*5.6,-25.6),t.lineTo(X*6.2,-32),t.lineTo(X*4.4,A),t.closePath(),te(t,Me(m,.12),.8)}),t.fillStyle="#c9b28a",[-24.6,-21.8].forEach(X=>{t.beginPath(),t.arc(0,X+2,.5,0,7),t.fill()}),yt(t,2.4,-31.8,2.8,.7,.3),t.fillStyle=_,t.fill();else if(u==="sweater"){t.fillStyle=Me(m,-.2),t.fillRect(-N,-24.2,N*2,2.4);for(let X=-N+1;X<N;X+=1.6)t.fillStyle="rgba(0,0,0,.08)",t.fillRect(X,-24.2,.35,2.4);t.beginPath(),t.moveTo(-3.2,A-.6),t.lineTo(0,-33.4),t.lineTo(3.2,A-.6),t.closePath(),te(t,_,.7),t.beginPath(),t.ellipse(0,A-.8,3.4,1.1,0,0,Math.PI),qe(t,Me(m,.3),.9)}else if(u==="vest")[-1,1].forEach(X=>{t.beginPath(),t.moveTo(X*2.3,A-.6),t.lineTo(X*.4,-22.4),t.lineTo(X*5.9,-22.4),t.lineTo(X*5.1,-30),t.lineTo(X*6.8,A+1),t.lineTo(X*4.8,A-.6),t.closePath(),te(t,m,.85)}),t.beginPath(),t.moveTo(-2.6,A-.6),t.lineTo(0,-35),t.lineTo(2.6,A-.6),t.lineTo(1.1,A+.6),t.lineTo(0,A+.2),t.lineTo(-1.1,A+.6),t.closePath(),te(t,"#fffaf2",.6),t.beginPath(),t.moveTo(0,-35.2),t.lineTo(.9,-32.4),t.lineTo(0,-27.6),t.lineTo(-.9,-32.4),t.closePath(),te(t,i.tie||"#a24a3c",.6);else if(u==="cardigan"){t.beginPath(),t.moveTo(-3.2,A-.6),t.lineTo(0,-31.5),t.lineTo(3.2,A-.6),t.closePath(),te(t,_,.6),[-1,1].forEach(X=>{t.beginPath(),t.moveTo(X*2.2,A-.6),t.lineTo(X*1,J),t.lineTo(X*(N+.3),J),t.lineTo(X*K,w),t.lineTo(X*q,-31),t.lineTo(X*ie,A+1),t.quadraticCurveTo(X*ie,A-.7,X*(ie-1.6),A-.7),t.closePath(),te(t,m,.9),t.fillStyle=Me(m,-.18),t.fillRect(X>0?1:-1.8,J-1.8,.8,1.8)});for(let X of[-32,-28,-24.6])t.beginPath(),t.arc(1.1,X,.45,0,7),te(t,Me(m,.3),.3)}else if(u==="labcoat"){t.beginPath(),t.moveTo(-2.6,A-.6),t.lineTo(0,-29),t.lineTo(2.6,A-.6),t.closePath(),te(t,_,.6),[-1,1].forEach(X=>{t.beginPath(),t.moveTo(X*2.6,A-.7),t.lineTo(X*.2,-27),t.lineTo(X*1.6,-24.4),t.lineTo(X*5.8,-26.6),t.lineTo(X*6.2,-33),t.lineTo(X*4.6,A),t.closePath(),te(t,Me(m,.02),.8),yt(t,X*3.4-1.9,-21.6,3.8,3.6,.6),qe(t,Me(m,.32),.55)}),t.beginPath(),t.moveTo(0,-27),t.lineTo(0,J),qe(t,Me(m,.28),.45);for(let X of[-25,-21.5,-18])t.beginPath(),t.arc(0,X,.5,0,7),te(t,Me(m,.28),.3);yt(t,-4.6,-30.6,1.6,3,.4),te(t,p||"#3b6ea8",.4)}else if(u==="turtleneck"){yt(t,-2.7,A-2.5,5.4,3.2,1.3),te(t,Me(m,.12),.8);for(let X=-1;X<=1;X+=1)t.beginPath(),t.moveTo(X*1.3,A-2.3),t.lineTo(X*1.3,A+.4),qe(t,Me(m,.3),.25)}else u==="track"?(t.beginPath(),t.moveTo(0,A-.8),t.lineTo(0,J),qe(t,Me(m,.35),.5),yt(t,-2.6,A-2.2,5.2,2.2,1),te(t,Me(m,.1),.7),[-1,1].forEach(X=>{t.beginPath(),t.moveTo(X*(ie-.4),A+1),t.lineTo(X*(K-.2),J),qe(t,p,.9)}),t.fillStyle=_,t.fillRect(-N,J-1.6,N*2,1.6),t.beginPath(),t.moveTo(-N,J-1.6),t.lineTo(N,J-1.6),qe(t,Me(m,.3),.4)):u==="tee"?(t.beginPath(),t.ellipse(0,A-.3,2.8,1.3,0,0,Math.PI),te(t,Me(m,.16),.6)):u==="tank"?(t.beginPath(),t.ellipse(0,A,3.4,1.7,0,0,Math.PI),te(t,g,.7)):u==="dress"?(t.beginPath(),t.ellipse(0,A-.2,3.2,1.4,0,0,Math.PI),te(t,g,.7),t.fillStyle=Me(m,.25),t.fillRect(-K,w-.6,K*2,1.2)):([-1,1].forEach(X=>{t.beginPath(),t.moveTo(X*.3,A-.6),t.lineTo(X*3.2,A-.4),t.lineTo(X*1.4,-34),t.closePath(),te(t,Me(m,-.15),.6)}),t.beginPath(),t.moveTo(0,-34.4),t.lineTo(0,-23),qe(t,Me(m,.25),.4),[-31,-28,-25].forEach(X=>{t.fillStyle=Me(m,.35),t.beginPath(),t.arc(0,X,.3,0,7),t.fill()}));if(v==="tie"&&(u==="blazer"||u==="shirt"||u==="cardigan"||u==="labcoat")&&(t.beginPath(),t.moveTo(-.9,A-.5),t.lineTo(.9,A-.5),t.lineTo(.7,A+1.3),t.lineTo(-.7,A+1.3),t.closePath(),te(t,p,.5),t.beginPath(),t.moveTo(-.7,A+1.2),t.lineTo(.7,A+1.2),t.lineTo(1.2,-27.8),t.lineTo(0,-26.6),t.lineTo(-1.2,-27.8),t.closePath(),te(t,p,.6)),v==="bowtie"&&([-1,1].forEach(X=>{t.beginPath(),t.moveTo(0,A+.2),t.lineTo(X*2.8,A-.7),t.lineTo(X*2.8,A+1.1),t.closePath(),te(t,p,.5)}),t.beginPath(),t.arc(0,A+.2,.6,0,7),te(t,Me(p,.2),.4)),v==="necklace"||v==="beads")if(t.beginPath(),t.moveTo(-3.4,A+.1),t.quadraticCurveTo(0,A+(v==="beads"?7:5),3.4,A+.1),qe(t,v==="beads"?Me(p,0):p,v==="beads"?1.1:.55),v==="beads")for(let X=0;X<=8;X++){let ee=X/8,Te=-3.4+6.8*ee,Oe=A+.1+2*3.5*ee*(1-ee)*2;t.beginPath(),t.arc(Te,Oe,.55,0,7),te(t,X%3===1?"#f2e8d8":i.beadColor||"#8a5cc0",.25)}else t.beginPath(),t.arc(0,A+2.7,.75,0,7),te(t,p,.4);v==="brooch"&&(t.beginPath(),t.arc(-3.6,-33,1,0,7),te(t,p,.5),t.beginPath(),t.arc(-3.6,-33,.35,0,7),t.fillStyle="#fff",t.fill()),v==="scarf"&&(t.beginPath(),t.ellipse(0,A-.2,4.4,1.9,0,0,7),te(t,p,.8),yt(t,1.2,A,3,7.5,1.2),te(t,p,.8),t.fillStyle="rgba(255,255,255,.3)",t.fillRect(1.6,A+4,2.2,.7)),(i.lanyard!==!1||v==="lanyard")&&!M&&(!v||v==="lanyard")&&(t.beginPath(),t.moveTo(-1.9,A),t.lineTo(0,-29.4),t.lineTo(1.9,A),qe(t,v==="lanyard"?p:i.lanyardColor||"#c4463c",.7),yt(t,-1.4,-29.6,2.8,3.4,.5),te(t,"#fffaf2",.55),t.fillStyle="#4F91C7",t.fillRect(-1,-29.2,2,.7)),i.scarf&&(t.beginPath(),t.ellipse(0,A-.2,4.2,1.7,0,0,7),te(t,i.scarf,.9)),i.badge&&(t.beginPath(),t.arc(-3.4,-32.4,1.1,0,7),te(t,i.badge,.6))}else d&&(t.beginPath(),t.moveTo(-3,A-.5),t.quadraticCurveTo(0,A+.7,3,A-.5),qe(t,Me(m,.3),.5),u==="blazer"&&(t.beginPath(),t.moveTo(0,A+.8),t.lineTo(0,J),qe(t,Me(m,.3),.45)));!d&&i.packStyle==="messenger"&&(t.beginPath(),t.moveTo(l?-2:-5.6,A),t.lineTo(l?2.5:5.4,-24.6),qe(t,i.pack||"#9a653d",1.3),yt(t,l?1.4:3.2,-27.2,5.2,4.4,1),te(t,i.pack||"#9a653d",.9)),d&&i.packStyle&&i.packStyle!=="none"&&(yt(t,-5,-34,10,9,2.2),te(t,i.pack||"#9a653d",1)),l?Y(o):(Y(-1),Y(1));let Ie=l&&o<0;t.save(),Ie&&t.scale(-1,1);{let X=df[i.emote];X&&X.droop&&t.translate(0,X.droop*.5+Math.sin(s*1.5)*.12),i.emote==="frustrated"&&t.translate(0,-.2+Math.sin(s*14)*.18),i.emote==="joy"&&t.translate(0,-Math.abs(Math.sin(s*6))*.5)}let Ge=d?"back":l?"side":"front",O=l?.4:0;if(uf(t,i,O,C,Ge,"back"),l?(t.beginPath(),t.ellipse(O-.8,C+.9,1,1.6,0,0,7),te(t,g,.8)):[-1,1].forEach(X=>{t.beginPath(),t.ellipse(X*4.2,C+.8,.9,1.5,0,0,7),te(t,g,.8)}),Jb(t,O,C,d?"front":Ge),te(t,g,1.15),d||(t.fillStyle="rgba(120,70,60,.13)",t.beginPath(),t.ellipse(O+(l?-1:2.2),C+2.4,2.8,2.6,0,0,7),t.fill(),i.beard==="full"&&Kb(t,i,O,C,l),Zb(t,i,O,C,l,s),(i.beard==="mustache"||i.beard==="full")&&Qb(t,i,O,C,l),i.lines&&(t.beginPath(),t.moveTo(O+(l?3:3.6),C+.3),t.lineTo(O+(l?3.4:4),C+.9),t.moveTo(O+(l?2.8:3.4),C+.8),t.lineTo(O+(l?3.3:3.9),C+1.5),l||(t.moveTo(O-3.6,C+.3),t.lineTo(O-4,C+.9),t.moveTo(O-3.4,C+.8),t.lineTo(O-3.9,C+1.5)),qe(t,Me(g,.22),.28))),uf(t,i,O,C,Ge,"front"),i.earrings&&!d){let X=l?[O-.8]:[4.2,-4.2];for(let ee of X)t.beginPath(),i.hoops?(t.arc(ee,C+4.1,1.7,0,7),qe(t,i.earrings,.55)):(t.arc(ee,C+2.7,.55,0,7),te(t,i.earrings,.4))}let Z=i.hat,he=i.hatColor||"#e07a66";if(Z&&Z!=="none"&&(Z==="cap"?(t.beginPath(),t.moveTo(O-4.6,C-1.6),t.bezierCurveTo(O-4.8,C-8.6,O+4.8,C-8.6,O+4.6,C-1.6),t.closePath(),te(t,he,1),d||(t.beginPath(),t.ellipse(O+(l?4.4:0),C-1.6,l?2.7:4,1,0,0,7),te(t,Me(he,.18),.8))):Z==="beanie"?(t.beginPath(),t.moveTo(O-4.8,C-1.4),t.bezierCurveTo(O-5,C-9.6,O+5,C-9.6,O+4.8,C-1.4),t.closePath(),te(t,he,1),yt(t,O-4.9,C-2.8,9.8,2,.8),te(t,Me(he,-.25),.8)):Z==="bucket"||Z==="fedora"?(t.beginPath(),t.moveTo(O-4,C-2.4),t.lineTo(O-3.6,C-6.6),t.lineTo(O+3.6,C-6.6),t.lineTo(O+4,C-2.4),t.closePath(),te(t,he,1),t.beginPath(),t.ellipse(O,C-2.5,6.4,1.5,0,0,7),te(t,Me(he,.1),.9)):Z==="headband"?(t.beginPath(),t.moveTo(O-4.3,C-1.8),t.quadraticCurveTo(O,C-7.4,O+4.3,C-1.8),qe(t,he,1.1)):Z==="headphones"?(t.beginPath(),t.arc(O,C-.4,5.2,Math.PI*1.06,Math.PI*1.94),qe(t,he,1.1),d||[-1,1].forEach(X=>{yt(t,O+X*5.1-1,C-1.2,2,3.4,.8),te(t,he,.7)})):Z==="crown"?(t.beginPath(),t.moveTo(O-3,C-5.4),t.lineTo(O-3.3,C-8.8),t.lineTo(O-1.4,C-6.8),t.lineTo(O,C-9.4),t.lineTo(O+1.4,C-6.8),t.lineTo(O+3.3,C-8.8),t.lineTo(O+3,C-5.4),t.closePath(),te(t,i.hatColor||"#EAB94E",.8)):Z==="beret"&&(t.beginPath(),t.ellipse(O+1,C-5,5,2,-.12,0,7),te(t,he,1))),t.restore(),i.tag){let X=C-12+Math.sin(s*4)*1.2;t.beginPath(),t.moveTo(-3.4,X-3.4),t.lineTo(3.4,X-3.4),t.lineTo(0,X+1),t.closePath(),te(t,"#f28f7e",1)}t.restore()}var ar={adult:1.4,hs:.9,g68:.78,g35:.66,k2:.54},Wl={adult:1.2,hs:1,g68:.86,g35:.74,k2:.6},ua=["down","up","left","right"],ca=160,rr=240,da=5,fa=4.6,Dc=12;function ff(t){let e=document.createElement("canvas");e.width=ca*da,e.height=rr*ua.length;let n=e.getContext("2d");return ua.forEach((i,s)=>{for(let r=0;r<da;r++)n.save(),n.translate(r*ca+ca/2,s*rr+rr-Dc),n.scale(fa,fa),n.shadowColor="rgba(52,34,46,.35)",n.shadowBlur=2.2,n.shadowOffsetX=.5,n.shadowOffsetY=1.2,sr(n,0,0,{...t,dir:i,moving:r>0,walk:r*Math.PI/2,sitting:!1},0),n.restore()}),e}var mf=["math","ela","science","history","careers","life"];var pa=[{subject:"math",rect:{x:5,y:5,w:16,h:12}},{subject:"ela",rect:{x:35,y:5,w:16,h:12}},{subject:"science",rect:{x:5,y:27,w:16,h:12}},{subject:"history",rect:{x:35,y:27,w:16,h:12}},{subject:"careers",rect:{x:22.5,y:6,w:5,h:7}},{subject:"life",rect:{x:28.5,y:6,w:5,h:7}}],ci=pa.map(t=>{let e=t.rect.y<20,n=t.rect.x+t.rect.w/2,i=e?t.rect.y+t.rect.h:t.rect.y;return{subject:t.subject,face:e?"S":"N",cx:n,cy:i,trigger:{x:n-1.2,y:e?i:i-.9,w:2.4,h:.9},approach:{x:n,y:e?i+1.6:i-1.6}}}),qi={cx:28,cy:0,trigger:{x:26.8,y:.45,w:2.4,h:.95},approach:{x:28,y:2.4}},Fc=[{rect:{x:6,y:0,w:19,h:.6},face:"S"},{rect:{x:31,y:0,w:19,h:.6},face:"S"},{rect:{x:6,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:32,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:0,y:6,w:.6,h:32},face:"E"},{rect:{x:56-.6,y:6,w:.6,h:32},face:"W"},{rect:{x:6,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:36,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:6,y:39,w:14,h:.6},face:"S"},{rect:{x:36,y:39,w:14,h:.6},face:"S"},{rect:{x:5-.6,y:6,w:.6,h:10},face:"W"},{rect:{x:5-.6,y:28,w:.6,h:10},face:"W"},{rect:{x:51,y:6,w:.6,h:10},face:"E"},{rect:{x:51,y:28,w:.6,h:10},face:"E"}],Fn={gap:{x0:24,x1:32},tile:{x:28,y:43}},pf=(t,e)=>t.flatMap(n=>e.map(i=>({kind:"table",x:n,y:i}))),Nc=[{kind:"fountain",x:28,y:22},{kind:"board",x:28,y:15.6},...[[23.5,36.5],[32.5,36.5],[7,19],[7,25],[49,19],[49,25],[23,14],[33,14],[23,30],[33,30]].map(([t,e])=>({kind:"tree",x:t,y:e})),...pf([10,14,18],[20,24]),...pf([38,42,46],[20,24]),...[[24.2,33],[31.8,33]].map(([t,e])=>({kind:"bench",x:t,y:e,rot:Math.PI/2})),{kind:"planter",x:25.2,y:18.2},{kind:"planter",x:30.8,y:18.2},{kind:"planter",x:25.2,y:25.8},{kind:"planter",x:30.8,y:25.8},...[[12,2.5],[20,2.5],[36,2.5],[44,2.5],[12,41.5],[44,41.5],[2.5,22],[53.5,22]].map(([t,e])=>({kind:"lamp",x:t,y:e}))],tv={tree:[1.2,1.2],bench:[.7,1.9],table:[1.9,1.9],fountain:[4.6,4.6],planter:[1.4,1.4],lamp:[.1,.1],board:[3.2,.5]};function nv(){let t=pa.map(e=>({...e.rect}));for(let e of Fc)t.push(e.rect);for(let e of Nc){let[n,i]=tv[e.kind];e.kind!=="lamp"&&t.push({x:e.x-n/2,y:e.y-i/2,w:n,h:i})}return t}var gf=nv(),os=(t,e,n,i=0)=>e>t.x-i&&e<t.x+t.w+i&&n>t.y-i&&n<t.y+t.h+i;function ql(t,e,n=.16){return t<.45||e<.45||t>56-.45?!0:e>44-.45?!(t>Fn.gap.x0&&t<Fn.gap.x1&&e<47):gf.some(i=>os(i,t,e,n))}var ui=Array.from({length:44},(t,e)=>Array.from({length:56},(n,i)=>gf.some(s=>os(s,i+.5,e+.5,.2))?"#":".").join("")),MS=ui.flatMap((t,e)=>t.split("").map((n,i)=>({c:n,x:i,y:e}))).filter(t=>t.c==="."&&t.x>=7&&t.x<=48&&t.y>=7&&t.y<=37&&!pa.some(e=>os(e.rect,t.x+.5,t.y+.5,0))),TS=ui.flatMap((t,e)=>t.split("").map((n,i)=>({c:n,x:i,y:e}))).filter(t=>t.c==="."&&(t.x<4||t.x>51||t.y<4||t.y>39));var ma="#6d5a5f";var Ht=(t,e,n,i=!1)=>{let s=document.createElement("canvas");s.width=t,s.height=e;let r=s.getContext("2d");n(r,t,e);let a=new Li(s);return a.colorSpace=Ut,a.anisotropy=8,i&&(a.wrapS=a.wrapT=Ns),a},bt=(t,e,n,i,s,r)=>{t.beginPath(),t.roundRect(e,n,i,s,r)},ga=(t,e=3,n=ma)=>{t.lineWidth=e,t.strokeStyle=n,t.lineJoin="round",t.stroke()},ot=(t,e,n=3)=>{t.fillStyle=e,t.fill(),n&&ga(t,n)},Mn=(t,e,n=0)=>{let i=Math.sin(t*127.1+e*311.7+n*74.7)*43758.5453;return i-Math.floor(i)},ya=(t,e,n,i,s,r=6)=>{t.save(),t.lineWidth=r,t.strokeStyle="rgba(255,255,255,.5)",t.beginPath(),t.moveTo(e+r,n+s-r),t.lineTo(e+r,n+r),t.lineTo(e+i-r,n+r),t.stroke(),t.strokeStyle="rgba(70,40,50,.22)",t.beginPath(),t.moveTo(e+i-r,n+r),t.lineTo(e+i-r,n+s-r),t.lineTo(e+r,n+s-r),t.stroke(),t.restore()},yf=()=>Ht(256,256,t=>{for(let e=0;e<2;e++)for(let n=0;n<2;n++){let i=n*128,s=e*128;t.fillStyle=n+e&1?"#d4ebf5":"#e3f3f9",t.fillRect(i,s,128,128);let r=t.createLinearGradient(i,s,i+128,s+128);r.addColorStop(0,"rgba(255,255,255,.28)"),r.addColorStop(1,"rgba(60,90,110,.10)"),t.fillStyle=r,t.fillRect(i,s,128,128);for(let a=0;a<26;a++)t.fillStyle=a&1?"rgba(255,255,255,.55)":"rgba(80,110,130,.18)",t.fillRect(i+Mn(n,e,a)*124,s+Mn(e,n,a+40)*124,2.4,2.4)}t.strokeStyle="rgba(90,120,140,.45)",t.lineWidth=3,t.strokeRect(1.5,1.5,253,253),t.beginPath(),t.moveTo(128,0),t.lineTo(128,256),t.moveTo(0,128),t.lineTo(256,128),t.stroke()},!0),bf=()=>Ht(256,256,t=>{t.fillStyle="#9fd0e8",t.fillRect(0,0,256,256);for(let e=0;e<220;e++)t.fillStyle=e&1?"rgba(255,255,255,.3)":"rgba(50,108,158,.14)",t.fillRect(Mn(e,1)*256,Mn(e,2)*256,3,3);for(let[e,n,i]of[[0,18,"#EAB94E"],[22,8,"#F28F7E"],[226,8,"#F28F7E"],[238,18,"#EAB94E"]])t.fillStyle=i,t.fillRect(e,0,n,256);t.fillStyle="rgba(255,255,255,.55)";for(let e=0;e<2;e++)t.beginPath(),t.moveTo(128,e*128+16),t.lineTo(160,e*128+64),t.lineTo(128,e*128+112),t.lineTo(96,e*128+64),t.closePath(),t.fill()},!0),ba=()=>Ht(512,540,(t,e,n)=>{t.fillStyle="#F4EBDB",t.fillRect(0,0,e,n);let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#FBF1DD"),i.addColorStop(1,"#EAF1E8"),t.fillStyle=i,t.fillRect(0,60,e,300);for(let r=0;r<e;r+=32)t.fillStyle="rgba(255,255,255,.55)",t.fillRect(r,60,14,300),t.fillStyle="rgba(110,120,110,.10)",t.fillRect(r+14,60,3,300);t.fillStyle="#FFF9F0",t.fillRect(0,0,e,40);let s=["#F28F7E","#EAB94E","#8FC9E8","#B8A8DA"];for(let r=0;r<8;r++)t.beginPath(),t.arc(32+r*64,42,30,0,Math.PI),ot(t,s[r%4],3);t.fillStyle="#EAB94E",t.fillRect(0,340,e,22),t.fillStyle="rgba(255,255,255,.45)",t.fillRect(0,340,e,5),t.fillStyle="#A9CDB8",t.fillRect(0,362,e,150);for(let r=0;r<2;r++)bt(t,24+r*256,384,208,104,8),ot(t,"#98C1A8",3),ya(t,24+r*256,384,208,104,5);t.fillStyle="#9A653D",t.fillRect(0,512,e,28),t.fillStyle="rgba(255,255,255,.3)",t.fillRect(0,512,e,4),t.strokeStyle=ma,t.lineWidth=3,t.beginPath(),t.moveTo(0,361),t.lineTo(e,361),t.moveTo(0,512),t.lineTo(e,512),t.stroke()},!0),iv=(t,e)=>Ht(264,640,(n,i,s)=>{let r=n.createLinearGradient(0,0,i,s);r.addColorStop(0,t),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=t,n.fillRect(0,0,i,s),n.fillStyle="rgba(255,255,255,.22)",n.fillRect(0,0,i,34),bt(n,16,44,i-32,s-70,10),ot(n,"rgba(0,0,0,.09)",3),ya(n,16,44,i-32,s-70,5);for(let a=0;a<5;a++)bt(n,46,66+a*17,i-92,7,3),n.fillStyle="rgba(60,40,50,.42)",n.fill();bt(n,78,252,108,42,6),ot(n,"#FFF9F0",2.5),n.fillStyle="#6d5a5f",n.font="700 26px 'Trebuchet MS',sans-serif",n.textAlign="center",n.fillText(String(100+e),132,282),bt(n,i-62,330,18,74,8),ot(n,"#EAB94E",2.5),e%2===0&&(n.beginPath(),n.arc(70,372,16,0,7),ot(n,["#F28F7E","#EAB94E","#B8A8DA"][e%3],2.5));for(let a=0;a<4;a++)bt(n,46,s-96+a*12,i-92,5,2),n.fillStyle="rgba(60,40,50,.3)",n.fill();n.strokeStyle=ma,n.lineWidth=6,n.strokeRect(0,0,i,s)}),Uc=t=>Ht(320,576,(e,n,i)=>{e.fillStyle=t,e.fillRect(0,0,n,i);for(let s of[10,168])bt(e,s+14,84,118,150,8),ot(e,"#A9DDF2",3),bt(e,s+24,96,30,120,6),e.fillStyle="rgba(255,255,255,.6)",e.fill(),bt(e,s+10,280,126,200,8),ot(e,"rgba(0,0,0,.12)",3),ya(e,s+10,280,126,200,5);e.fillStyle="rgba(0,0,0,.22)",e.fillRect(150,0,20,i),e.fillStyle="#EAB94E",e.fillRect(0,i-44,n,44),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(0,i-44,n,6);for(let s of[128,192])e.beginPath(),e.arc(s,330,9,0,7),ot(e,"#EAB94E",2.5);e.strokeStyle=ma,e.lineWidth=6,e.strokeRect(0,0,n,i),e.beginPath(),e.moveTo(160,0),e.lineTo(160,i),e.stroke()}),Bc=(t,e,n="#FFF9F0")=>Ht(512,128,(i,s,r)=>{bt(i,8,22,s-16,r-30,22),ot(i,e,5),bt(i,22,34,s-44,r-54,14),i.fillStyle="rgba(255,255,255,.28)",i.fill(),i.fillStyle=n,i.font="800 58px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,s/2,r/2+4),i.strokeStyle=ma,i.lineWidth=4;for(let a of[80,s-80])i.beginPath(),i.moveTo(a,0),i.lineTo(a,24),i.stroke()}),or=()=>Ht(320,400,(t,e,n)=>{bt(t,10,10,e-20,n-46,14),ot(t,"#FFF9F0",5);let i=t.createLinearGradient(0,40,0,250);i.addColorStop(0,"#A9DDF2"),i.addColorStop(1,"#E9F7FC"),bt(t,40,40,e-80,230,6),t.fillStyle=i,t.fill(),ga(t,3),t.beginPath(),t.arc(220,96,26,0,7),ot(t,"#F8D977",3),t.beginPath(),t.moveTo(44,260),t.lineTo(110,170),t.lineTo(170,260),t.closePath(),ot(t,"#88B89A",3),t.beginPath(),t.moveTo(120,260),t.lineTo(210,150),t.lineTo(276,260),t.closePath(),ot(t,"#5E9C72",3),t.strokeStyle="#FFF9F0",t.lineWidth=9,t.beginPath(),t.moveTo(e/2,40),t.lineTo(e/2,270),t.moveTo(40,155),t.lineTo(e-40,155),t.stroke(),bt(t,0,n-60,e,26,8),ot(t,"#F1C887",4);for(let s of[-1,1]){let r=s<0?16:e-16;t.beginPath(),t.moveTo(r,14),t.quadraticCurveTo(r+s*-50,90,r+s*-34,250),t.lineTo(r+s*-34,300),t.lineTo(r,300),t.closePath(),ot(t,"#F28F7E",3.5)}}),vf=()=>Ht(384,256,(t,e,n)=>{bt(t,4,4,e-8,n-8,14),ot(t,"#C98B4D",6),bt(t,20,20,e-40,n-40,6),t.fillStyle="#E8C39A",t.fill(),ga(t,3);let i=["#FFF9F0","#F8D977","#8FC9E8","#A9DCC0","#EAA5B2","#B8A8DA"];[[36,34],[148,30],[256,40],[40,138],[156,130],[262,140]].forEach(([s,r],a)=>{t.save(),t.translate(s+40,r+40),t.rotate((Mn(a,3)-.5)*.24),t.translate(-40,-40),t.shadowColor="rgba(50,30,40,.35)",t.shadowBlur=6,t.shadowOffsetY=4,bt(t,0,0,82,84,4),ot(t,i[a],3),t.shadowColor="transparent";for(let h=0;h<4;h++)t.fillStyle="rgba(60,50,60,.4)",t.fillRect(10,18+h*14,50+h%2*12,4);t.beginPath(),t.arc(41,6,6,0,7),ot(t,a&1?"#F28F7E":"#4F91C7",2),t.restore()})}),xf=()=>Ht(320,300,(t,e,n)=>{bt(t,4,4,e-8,n-8,14),ot(t,"#C98B4D",6),bt(t,22,22,e-44,n-44,8),t.fillStyle="#DDF0F6",t.fill(),ga(t,3);for(let i of[120,226])bt(t,26,i,e-52,14,4),ot(t,"#DDAA68",3);[[70,120,1],[160,120,1.25],[250,120,.9],[110,226,1.1],[220,226,1]].forEach(([i,s,r])=>{t.beginPath(),t.moveTo(i-26*r,s-74*r),t.lineTo(i+26*r,s-74*r),t.lineTo(i+14*r,s-30*r),t.lineTo(i-14*r,s-30*r),t.closePath(),ot(t,"#EAB94E",3),bt(t,i-6*r,s-30*r,12*r,18*r,3),ot(t,"#EAB94E",3),bt(t,i-22*r,s-12*r,44*r,12*r,3),ot(t,"#9A653D",3)}),t.strokeStyle="rgba(255,255,255,.7)",t.lineWidth=8,t.beginPath(),t.moveTo(44,40),t.lineTo(110,100),t.stroke()}),_f=()=>Ht(256,256,t=>{t.beginPath(),t.arc(128,128,120,0,7),ot(t,"#F28F7E",8),t.beginPath(),t.arc(128,128,96,0,7),ot(t,"#FFF9F0",4);for(let e=0;e<12;e++){let n=e*Math.PI/6;t.strokeStyle="#4a3b3f",t.lineWidth=6,t.beginPath(),t.moveTo(128+Math.sin(n)*76,128-Math.cos(n)*76),t.lineTo(128+Math.sin(n)*90,128-Math.cos(n)*90),t.stroke()}t.strokeStyle="#4a3b3f",t.lineCap="round",t.lineWidth=9,t.beginPath(),t.moveTo(128,128),t.lineTo(160,88),t.stroke(),t.lineWidth=6,t.beginPath(),t.moveTo(128,128),t.lineTo(118,52),t.stroke(),t.beginPath(),t.arc(128,128,9,0,7),ot(t,"#F28F7E",3)}),Oc=t=>Ht(256,320,(e,n,i)=>{if(bt(e,6,6,n-12,i-12,8),ot(e,["#FFFFFF","#FFF7D8","#E9F3FF"][t%3],5),t%3===0)e.fillStyle="#8FC9E8",e.fillRect(30,30,196,130),ga(e,3),e.beginPath(),e.ellipse(90,90,44,28,0,0,7),e.fillStyle="#88B89A",e.fill(),e.beginPath(),e.ellipse(170,108,32,20,0,0,7),e.fill(),e.fillStyle="#F28F7E",e.fillRect(30,190,120,20),e.fillStyle="#B8A8DA",e.fillRect(30,226,90,16);else if(t%3===1){e.beginPath();for(let s=0;s<10;s++){let r=s*Math.PI/5-Math.PI/2,a=s&1?34:88;e.lineTo(128+Math.cos(r)*a,130+Math.sin(r)*a)}e.closePath(),ot(e,"#EAB94E",4),e.fillStyle="#F28F7E",e.fillRect(40,250,176,22)}else e.fillStyle="#4F91C7",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillText("ABC",128,130),e.fillStyle="#F28F7E",e.fillRect(40,170,176,18),e.fillStyle="#88B89A",e.fillRect(40,208,120,16),e.fillStyle="#EAB94E",e.fillRect(40,246,150,16);e.beginPath(),e.arc(128,18,9,0,7),ot(e,"#F28F7E",3)});var wf=()=>Ht(128,128,(t,e,n)=>{let i=t.createRadialGradient(64,64,4,64,64,62);i.addColorStop(0,"rgba(52,34,46,.55)"),i.addColorStop(1,"rgba(52,34,46,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)}),zc=()=>Ht(64,64,(t,e,n)=>{t.filter="blur(5px)",t.fillStyle="rgba(50,30,40,.9)",t.fillRect(12,12,40,40)}),Sf=t=>Ht(256,256,(e,n,i)=>{e.fillStyle=t,e.fillRect(0,0,n,i);for(let s=0;s<=n;s+=32)e.strokeStyle="rgba(60,40,50,.28)",e.lineWidth=4,e.beginPath(),e.moveTo(s,0),e.lineTo(s,i),e.stroke(),e.fillStyle="rgba(255,255,255,.16)",e.fillRect(s+6,0,10,i)}),Mf=t=>Ht(264*t.length,640,e=>{t.forEach((n,i)=>e.drawImage(iv(n,i*3+1).image,i*264,0))},!0),Tf=()=>Ht(256,256,(t,e,n)=>{t.fillStyle="#B7D8A4",t.fillRect(0,0,e,n);for(let i=0;i<90;i++){let s=Mn(i,5)*e,r=Mn(i,9)*n,a=8+Mn(i,2)*22;t.fillStyle=i&1?"rgba(255,255,255,.16)":"rgba(70,120,80,.10)",t.beginPath(),t.ellipse(s,r,a,a*.6,Mn(i,4)*3,0,7),t.fill()}for(let i=0;i<140;i++){let s=Mn(i,11)*e,r=Mn(i,12)*n;t.strokeStyle=i&1?"rgba(255,255,255,.5)":"rgba(60,110,70,.35)",t.lineWidth=2,t.beginPath(),t.moveTo(s,r),t.lineTo(s+3,r-9),t.stroke()}},!0),va=()=>Ht(256,256,(t,e,n)=>{t.fillStyle="#EBD9B8",t.fillRect(0,0,e,n);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let r=s*64+(i&1?32:0)-32,a=i*64;for(let h of[0,e])bt(t,r+h+2,a+2,60,60,6),t.fillStyle=s+i&1?"#F2E3C6":"#E6D2AE",t.fill(),t.strokeStyle="rgba(150,115,80,.5)",t.lineWidth=3,t.stroke(),ya(t,r+h+2,a+2,60,60,4)}for(let i=0;i<60;i++)t.fillStyle="rgba(255,255,255,.35)",t.fillRect(Mn(i,3)*e,Mn(i,8)*n,2.4,2.4)},!0),Ef=(t,e,n="#FFF9F0")=>Ht(768,576,(i,s,r)=>{i.fillStyle="#F4EBDB",i.fillRect(0,0,s,r),bt(i,22,22,s-44,r-44,36),ot(i,e,8),bt(i,52,52,s-104,r-104,24),i.fillStyle="rgba(255,255,255,.22)",i.fill();for(let a=0;a<6;a++)i.fillStyle="rgba(255,255,255,.18)",i.fillRect(70+a*112,70,44,r-140);i.fillStyle=n,i.font="800 140px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.strokeStyle="rgba(70,50,60,.35)",i.lineWidth=12,i.strokeText(t,s/2,r/2+6),i.fillText(t,s/2,r/2+6),ya(i,22,22,s-44,r-44,7)}),Hc=t=>Ht(1024,160,(e,n,i)=>{bt(e,8,10,n-16,i-20,22),ot(e,"#F28F7E",6),bt(e,22,24,n-44,i-48,14),e.fillStyle="rgba(255,255,255,.2)",e.fill(),e.fillStyle="#FFF9F0",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(t,n/2,i/2+4);for(let s of[60,n-60]){e.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,h=r&1?9:22;e.lineTo(s+Math.cos(a)*h,i/2+Math.sin(a)*h)}e.closePath(),ot(e,"#EAB94E",3)}});var Vc=["#fde7d3","#fbdcc4","#f5cfa8","#f0c29b","#e3ad7f","#d9a074","#c58a5f","#a86f4f","#8d5a3e","#7a4a36","#5e3a2b","#4a2e24"],ls=["#2b2b33","#3a2a30","#5a3a35","#694a38","#9a653d","#b5563e","#c9773e","#e0b04e","#f1d98a","#d9d4cc","#8c8c96","#4F91C7","#b8a8da","#e8789a","#5e9c72","#e07a66"],Gc=["#3a2a30","#5a3a2a","#8a6a3a","#c98a3a","#4f8a5e","#4f91c7","#7a8794","#8173ae"],rn=["#4f91c7","#326c9e","#8fc9e8","#88b89a","#5e9c72","#a9dcc0","#eab94e","#f8d977","#f6b294","#f28f7e","#d9564a","#eaa5b2","#b8a8da","#8173ae","#c98569","#9a653d","#fff6ea","#9da7aa","#4a3b3f","#2b3a55"],Wc=["#fbf6ee","#313a3f","#d9564a","#4f91c7","#eab94e","#88b89a","#9a653d","#b8a8da"],Tn=(...t)=>t.map(([e,n])=>({id:e,label:n})),_a={hairStyle:Tn(["crop","Short crop"],["buzz","Buzz cut"],["undercut","Undercut"],["spiky","Spiky"],["messy","Messy"],["sidebang","Side bangs"],["curtains","Curtains"],["pixie","Pixie"],["bob","Bob"],["long","Long"],["wavy","Wavy long"],["curly","Curly puffs"],["afro","Afro"],["pony","Ponytail"],["pigtails","Pigtails"],["twinbuns","Twin buns"],["bun","Bun"],["topknot","Top knot"],["braids","Braids"]),eyeShape:Tn(["round","Round"],["oval","Oval"],["wide","Wide"],["sleepy","Sleepy"],["happy","Happy"],["lash","Lashes"]),brow:Tn(["soft","Soft"],["thick","Thick"],["thin","Thin"],["arch","Arched"],["none","None"]),mouthStyle:Tn(["smile","Smile"],["grin","Grin"],["smirk","Smirk"],["flat","Calm"],["o","Surprised"],["cat","Cat"]),glasses:Tn(["none","None"],["round","Round"],["square","Square"],["cat","Cat-eye"],["half","Half-rim"],["sun","Sunglasses"]),hat:Tn(["none","None"],["cap","Cap"],["beanie","Beanie"],["bucket","Bucket hat"],["beret","Beret"],["headband","Headband"],["bow","Bow"],["flower","Flower"],["crown","Crown"],["headphones","Headphones"],["catears","Cat ears"]),top:Tn(["tee","T-shirt"],["hoodie","Hoodie"],["sweater","Sweater"],["jersey","Jersey"],["blazer","Blazer"],["dress","Dress"],["overalls","Overalls"],["vest","Vest"],["tank","Tank top"]),pattern:Tn(["solid","Solid"],["stripes","Stripes"],["dots","Dots"],["plaid","Plaid"],["hearts","Hearts"],["stars","Stars"]),bottom:Tn(["pants","Pants"],["joggers","Joggers"],["shorts","Shorts"],["skirt","Skirt"]),shoeStyle:Tn(["sneaker","Sneakers"],["boot","Boots"],["sandal","Sandals"],["plain","Plain shoes"]),packStyle:Tn(["pack","Backpack"],["messenger","Messenger bag"],["mini","Mini pack"],["none","No bag"]),build:Tn(["slim","Slim"],["regular","Regular"],["sturdy","Sturdy"]),age:Tn(["k2","Grades K-2"],["g35","Grades 3-5"],["g68","Grades 6-8"],["hs","High school"])},Af=["she/her","he/him","they/them"],lr=()=>({name:"Student",pronouns:"they/them",age:"hs",skin:"#f0c29b",hairStyle:"bun",hair:"#5a3a35",hair2:null,eyeShape:"round",eyeColor:"#5a3a2a",brow:"soft",browColor:null,freckles:!1,mole:!1,nose:!1,blush:!0,mouthStyle:"smile",lip:"#8a4650",glasses:"round",glassColor:"#5b4048",hat:"none",hatColor:"#e07a66",earrings:null,scarf:null,badge:null,top:"hoodie",shirt:"#d9564a",shirt2:"#fff6ea",pattern:"solid",bottom:"pants",pants:"#4f5d75",shoeStyle:"sneaker",shoes:"#fbf6ee",packStyle:"pack",pack:"#8a5f6a",build:"regular",headSize:1});function Xi(t,e=11){return{id:e,age:t.age,skin:t.skin,hair:t.hair,hair2:t.hair2||void 0,style:t.hairStyle,shirt:t.shirt,shirt2:t.shirt2,top:t.top,pattern:t.pattern,bottom:t.bottom,pants:t.pants,eyeShape:t.eyeShape,eyeColor:t.eyeColor,brow:t.brow,browColor:t.browColor||void 0,freckles:t.freckles,mole:t.mole,nose:t.nose,blush:t.blush,mouthStyle:t.mouthStyle,lip:t.lip,glasses:t.glasses==="none"?!1:t.glasses,glassColor:t.glassColor,hat:t.hat==="none"?void 0:t.hat,hatColor:t.hatColor,earrings:t.earrings||void 0,scarf:t.scarf||void 0,badge:t.badge||void 0,shoeStyle:t.shoeStyle,shoes:t.shoes,packStyle:t.packStyle,pack:t.pack,build:t.build,headSize:t.headSize}}function xi(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var St=(t,e)=>e[Math.floor(t()*e.length)],Nn=t=>_a[t].map(e=>e.id);function wa(t,e="hs"){let n=St(t,Nn("top")),i=t()<.28?St(t,Nn("hat").filter(r=>r!=="none")):"none",s=t()<.3?St(t,Nn("glasses").filter(r=>r!=="none")):"none";return{...lr(),age:e,name:"",skin:St(t,Vc),hairStyle:St(t,Nn("hairStyle")),hair:St(t,ls),hair2:t()<.16?St(t,ls):null,eyeShape:St(t,Nn("eyeShape")),eyeColor:St(t,Gc),brow:St(t,Nn("brow").filter(r=>r!=="none")),freckles:t()<.22,mole:t()<.1,nose:t()<.3,blush:t()<.8,mouthStyle:St(t,Nn("mouthStyle")),glasses:s,glassColor:St(t,["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da"]),hat:i,hatColor:St(t,rn),earrings:t()<.12?St(t,["#eab94e","#fff6ea","#f28f7e"]):null,scarf:t()<.1?St(t,rn):null,badge:t()<.12?St(t,rn):null,top:n,shirt:St(t,rn),shirt2:St(t,rn),pattern:t()<.4?St(t,Nn("pattern")):"solid",bottom:n==="dress"?"pants":St(t,Nn("bottom")),pants:St(t,rn),shoeStyle:St(t,Nn("shoeStyle")),shoes:St(t,Wc),packStyle:St(t,Nn("packStyle")),pack:St(t,rn),build:St(t,Nn("build")),headSize:.94+t()*.12}}var qc=t=>[t.skin,t.hairStyle,t.hair,t.top,t.shirt,t.pattern,t.hat,t.glasses,t.bottom,t.pants].join("|"),rv=["black","dark brown","chestnut","brown","caramel","auburn","ginger","blond","platinum","silver","grey","blue","lavender","pink","green","coral"],av=["blue","navy","sky blue","sage green","green","mint","gold","yellow","peach","coral","red","pink","lilac","purple","terracotta","brown","cream","grey","charcoal","midnight blue"],ov=t=>rv[ls.indexOf(t)]??"colorful",xa=t=>av[rn.indexOf(t)]??"colorful";function Sa(t){let e=[],n=(i,s)=>_a[i].find(r=>r.id===s)?.label.toLowerCase()??s;return t.hat&&t.hat!=="none"&&e.push({key:"hat",phrase:`${xa(t.hatColor)} ${n("hat",t.hat)}`,noun:"hat"}),t.glasses&&t.glasses!=="none"&&e.push({key:"glasses",phrase:`${n("glasses",t.glasses)} glasses`,noun:"glasses"}),e.push({key:"hair",phrase:`${ov(t.hair)} ${n("hairStyle",t.hairStyle)} hair`,noun:"hair"}),e.push({key:"top",phrase:`${t.pattern!=="solid"?t.pattern+" ":""}${xa(t.shirt)} ${n("top",t.top)}`,noun:t.top}),t.packStyle!=="none"&&e.push({key:"pack",phrase:`${xa(t.pack)} ${n("packStyle",t.packStyle)}`,noun:"bag"}),t.freckles&&e.push({key:"freckles",phrase:"freckles",noun:"freckles"}),t.earrings&&e.push({key:"earrings",phrase:"earrings",noun:"earrings"}),t.scarf&&e.push({key:"scarf",phrase:"scarf",noun:"scarf"}),e.push({key:"shoes",phrase:`${xa(t.shoes)==="colorful"?"":xa(t.shoes)+" "}${n("shoeStyle",t.shoeStyle)}`.trim(),noun:"shoes"}),e}var Ke=(t,e,n,i,s,r,a,h,l,o)=>({name:t,top:e,top_c:n,inner_c:i,bottom:s,bottom_c:r,shoes_c:a,acc:h,accent_c:l,legs:o}),Qe=(t,e,n,i,s)=>({name:t,style:e,color:n,accent:i,v:s}),$c=[{id:"tanaka",idle:"nod",sig:"finger",num:110,name:"Mr. Hiroshi Tanaka",short:"Tanaka",subject:"Mathematics",room:"Room 112",age:52,gender:"M",skin:"#E2B98F",eye:"#2A1C12",brow:"#4A4541",build:{h:.97,w:.92},features:{glasses:"rect",glassesColor:"#3A3A3A",beard:"mustache",beardColor:"#5A5550",lines:!0},hair:[Qe("Classic side part","short","#5E5A57"),Qe("Slicked back","slick","#55514E"),Qe("Short crop","buzz","#6A6663"),Qe("Tousled weekend","pixie","#5E5A57"),Qe("Side part, silver streak","short","#8A8683")],outfits:[Ke("Grey vest & navy tie","vest","#6B6E73","#EEF2F5","pants","#2E3440","#2A1C14","tie","#1F3A68"),Ke("Navy blazer & striped shirt","blazer","#23304A","#DDE7F2","pants","#5B5F66","#2A1C14","tie","#8C2F39"),Ke("Oatmeal cardigan & bow tie","cardigan","#CDBB9A","#F6F3EC","pants","#4A4032","#3B2A1E","bowtie","#2E5E4E"),Ke("Pale blue button-up","buttonup","#BFD4EA","#BFD4EA","pants","#3C3F45","#1E1E1E","tie","#2D2D2D"),Ke("Pi-day sweater","sweater","#2F5D50","#2F5D50","pants","#34373D","#1E1E1E",null)],mannerisms:["Counts steps off on his fingers, always starting with the thumb","Small precise nods while a student talks","Straightens his tie before writing on the board","Pauses mid-sentence to let a pun land, then smiles at nobody"],tone:"Calm, slow and soft-spoken. Speaks in numbered steps. Fond of terrible math puns delivered with total seriousness.",voice:{pitch:.85,rate:.82},lines:{greet:"Good morning. Please be seated, and be rational.",teach:"Step one: isolate x. Step two: do not panic. Step three: check your work.",praise:"Excellent. That answer is... integral to the class.",warn:"I see a calculator under the desk. Its days are numbered.",bye:"Homework is problems one through twenty, odd only. Even you can do it."}},{id:"ayrissa",idle:"bounce",sig:"wave",num:111,name:"Ms. Ayrissa",short:"Ayrissa",subject:"English & Creative Writing",room:"Room 220",age:36,gender:"F",skin:"#734633",eye:"#2A160E",brow:"#18100B",build:{h:1,w:1.03},features:{freckles:!0,earrings:"#D9D9D9",hoops:!0},hair:[Qe("Honey-highlight boho curls","curly","#17110E","#D8AE72"),Qe("Curly puff & orange headband","afro","#1E1510","#F0651C","puff"),Qe("Jet-black boho curls, middle part","curly","#120E0C"),Qe("Curtain-bang curls with honey pieces","curly","#17110E","#D8AE72"),Qe("Shoulder-length honey twist-out","curly","#1C1410","#C99A5E")],outfits:[Ke("Red kaftan top with gold embroidery","sweater","#A51F2E","#A51F2E","pants","#2E3A55","#1A1A1A","beads","#D9B45A"),Ke("Navy & white floral wrap dress","dress","#1E2A4A","#1E2A4A","none",void 0,"#E8E0D0",null,"#DCE6F2"),Ke("Stone cardigan & khaki joggers","cardigan","#BDB5A8","#EDE8E0","pants","#C8B89A","#F2F2F2","lanyard","#F0651C"),Ke("Tropical print wrap top & light denim","sweater","#ECE4D8","#ECE4D8","pants","#8FA7C7","#EDEDED","beads","#D98FA8"),Ke("Burnt-orange blazer & black tee","blazer","#C8561E","#1C1C1C","pants","#232323","#1A1A1A","necklace","#D4AF37")],makeup:[{lip:"#7A3E34",shadow:"#3A2620",blush:"#8A4A38",liner:!0},{lip:"#8A4A3E",shadow:"#5A3A2C",blush:"#94503C",liner:!0},{lip:"#6E3A36",shadow:"#2A3350",blush:"#864A3A",liner:!0},{lip:"#9A6A5A",shadow:"#6A4A3A",blush:"#9A5A44",liner:!1},{lip:"#5E1E2E",shadow:"#4A2A3A",blush:"#8A3E40",liner:!0}],mannerisms:["Rests her chin on her fist when she's really listening","Her smile shows up before the answer does","Flips her curls over one shoulder before reading a poem out loud","Hypes up every raised hand: 'Yes! Say that!'"],tone:"High energy and warm. Talks fast, laughs easily and turns every answer into a celebration. Big on 'my brilliant people' and making sure every voice gets heard.",voice:{pitch:1.18,rate:1.14},lines:{greet:"Good morning, my brilliant people! Pens out, energy up, let's WRITE!",teach:"A metaphor isn't decoration, it's a door. Open it! What's behind yours?",praise:"YES! Say that again, louder, for the people in the back!",warn:"Uh-uh, phones down. Your story is way more interesting than that screen.",bye:"Journal tonight, even one line. Your voice matters. Love you, bye!"}},{id:"okafor",idle:"still",sig:"finger",num:112,name:"Ms. Adaeze Okafor",short:"Okafor",subject:"Chemistry",room:"Lab 204",age:38,gender:"F",skin:"#6B4226",eye:"#3B2314",brow:"#1A120D",build:{h:1.06,w:.98},features:{glasses:"cateye",glassesColor:"#7A1F2B",earrings:"#D4AF37"},hair:[Qe("Locs in a high bun","bun","#1B1411","#D4AF37"),Qe("Waist-length box braids","long","#1B1411","#D4AF37","braids"),Qe("Natural afro","afro","#221815"),Qe("Sleek low ponytail","pony","#1B1411"),Qe("Burgundy twist-out","curly","#4A1C24")],outfits:[Ke("Lab coat over teal turtleneck","labcoat","#F4F6F6","#1F6F6B","pants","#2B2D33","#1C1C1C",null,"#1F6F6B"),Ke("Mustard blazer & cream blouse","blazer","#C99A2E","#F2E8D5","pants","#3A2E28","#5A3A22","necklace","#D4AF37"),Ke("Kente-trim wrap dress","dress","#1E4E79","#1E4E79","none",void 0,"#E0A526","brooch","#E0A526"),Ke("Emerald sweater & pencil skirt","sweater","#1F6A4A","#1F6A4A","skirt","#2A2A2E","#1C1C1C","lanyard","#C0392B","#2A1A12"),Ke("Friday cardigan & periodic-table tee","cardigan","#6D2E46","#ECECEC","pants","#4C6A92","#F2F2F2",null)],makeup:[{lip:"#8C3B3B",shadow:"#8A5A3C",blush:"#B5543F",liner:!1},{lip:"#6E1E3A",shadow:"#5E3A4A",blush:"#A4454F",liner:!0},{lip:"#9A4E3A",shadow:"#C9A13B",blush:"#B8603E",liner:!0},{lip:"#A0624A",shadow:"#7A5238",blush:"#A5553E",liner:!1},{lip:"#9E1B22",shadow:"#6A3F2C",blush:"#B04A3A",liner:!0}],mannerisms:["Pushes her glasses up with one knuckle before making a point","Taps a marker twice against her palm when waiting for an answer","Raises one eyebrow instead of saying 'really?'","Stands perfectly still, then moves with purpose"],tone:"Precise and dry. Short sentences, exact numbers, a deadpan joke about once a lesson. Never raises her voice; lowers it instead.",voice:{pitch:.95,rate:.92},lines:{greet:"Goggles on, bags under the bench. Good morning.",teach:"Sodium plus water. Watch the reaction, not me. I already know what happens.",praise:"Correct, to three significant figures. I'm impressed.",warn:"That is not a beaker of juice. Put it down. Slowly.",bye:"Wash your hands. Twice. See you Thursday."}},{id:"obrien",idle:"sway",sig:"shrug",num:113,name:"Mr. Declan O'Brien",short:"O'Brien",subject:"History",room:"Room 301",age:45,gender:"M",skin:"#F0C8AE",eye:"#5A7A4A",brow:"#8A3C1E",build:{h:1,w:1.14},features:{beard:"full",beardColor:"#8A3C1E",freckles:!0},hair:[Qe("Tousled copper","pixie","#9A4520"),Qe("Swept side part","short","#8A3C1E"),Qe("Tied-back 'historian bun'","bun","#8A3C1E"),Qe("Shoulder-length waves","bob","#9A4520"),Qe("Slicked for the museum trip","slick","#7A3418")],outfits:[Ke("Tweed blazer with elbow patches","blazer","#7A6A52","#E8E2D4","pants","#4A4238","#3B2616","tie","#5A2A1E"),Ke("Forest cardigan & plaid shirt","cardigan","#2F4A34","#A6463A","pants","#6B5A44","#3B2616",null),Ke("Burgundy sweater vest","vest","#6B1F2A","#EDE8DC","pants","#3A3A3A","#2A1A10","bowtie","#1F3A2A"),Ke("Rolled-sleeve oxford","buttonup","#E9E4D8","#E9E4D8","pants","#556B45","#3B2616","tie","#244060"),Ke("Cable-knit fisherman sweater","turtleneck","#DCD2BC","#DCD2BC","pants","#3E3A33","#3B2616",null)],mannerisms:["Spreads both arms wide when setting a scene","Leans in and drops to a stage whisper before a twist","Strokes his beard while listening","Rocks back on his heels after a punchline"],tone:"Theatrical storyteller. Big pauses, dramatic whispers, then a booming reveal. Treats every lesson like a campfire tale.",voice:{pitch:.75,rate:.95},lines:{greet:"Gather round, gather round! Today... we march on Rome.",teach:"Picture it. 1066. Mud to your ankles. Arrows in the air. And then...",praise:"Ha! A scholar among us! Rome would have made you a senator.",warn:"Ah-ah. The only revolution in this room is on page forty.",bye:"History waits for no one. Except you, on Monday. Off with ye!"}},{id:"haddad",idle:"still",sig:"explain",num:114,name:"Mr. Karim Haddad",short:"Haddad",subject:"Geography & Careers",room:"CarryingCareers",age:41,gender:"M",skin:"#B98460",eye:"#3A2412",brow:"#16100C",build:{h:1.03,w:1.02},features:{beard:"full",beardColor:"#1A1410"},hair:[Qe("Neat short crop","short","#16100C"),Qe("Textured quiff","slick","#16100C"),Qe("Close buzz","buzz","#16100C"),Qe("Soft waves grown out","pixie","#1C1410"),Qe("Shaved clean","bald","#16100C")],outfits:[Ke("Olive field shirt","buttonup","#6A7048","#6A7048","pants","#C8B68E","#5A3A22",null),Ke("Navy sweater over collar","sweater","#23324E","#EAEAEA","pants","#6A6258","#3B2616",null),Ke("Charcoal suit & rust tie","blazer","#3A3C40","#F2F2F2","pants","#3A3C40","#1A1A1A","tie","#B0532E"),Ke("Camel cardigan","cardigan","#B8905A","#2E4A5A","pants","#2E2E30","#3B2616",null),Ke("Expedition vest","vest","#4A5A3A","#D8CFC0","pants","#5A4E3A","#5A3A22","scarf","#A83A2A")],mannerisms:["Strokes his beard slowly before answering","Points to places on an invisible map in the air","Waits a full three seconds of silence for you to think","Taps his compass watch when it's time to move on"],tone:"Patient, low and thoughtful. Asks more questions than he answers. Every sentence sounds like it has been considered twice.",voice:{pitch:.7,rate:.85},lines:{greet:"Welcome, travelers. Where in the world shall we begin today?",teach:"A path is not found. It is walked, one step at a time. Which step is yours?",praise:"Good. You didn't just answer. You thought. That is the difference.",warn:"The map will still be here if you stop throwing it.",bye:"Look at the sky on your walk home. Tell me which way the wind blew."}},{id:"park",idle:"bounce",sig:"wave",num:115,name:"Ms. Chloe Park",short:"Park",subject:"Computer Science",room:"Lab 110",age:27,gender:"F",skin:"#F1D1B5",eye:"#2A1A12",brow:"#1A1210",build:{h:.92,w:.94},features:{glasses:"round",glassesColor:"#1A1A1A",earrings:"#7FD4E0"},hair:[Qe("Blunt bob with bangs","bob","#141014"),Qe("Space buns","bun","#141014","#8E5CE0"),Qe("Lavender-streak ponytail","pony","#141014","#B58CF0"),Qe("Long straight","long","#141014"),Qe("Teal-tipped pixie","pixie","#1E2A30")],outfits:[Ke("Oversized hoodie-sweater","sweater","#7A6AC8","#7A6AC8","skirt","#2A2A34","#F2F2F2","lanyard","#34C3A0","#1E1E26"),Ke("Pastel cardigan & tee","cardigan","#F2B8C6","#FFFFFF","pants","#4A6A9A","#F2F2F2","necklace","#7FD4E0"),Ke("Pinafore dress","dress","#2E4A6A","#F2F2F2","none",void 0,"#1A1A1A",null,"#F2C84A","#E8C8B0"),Ke("Hackathon track jacket","track","#1A1A24","#34C3A0","pants","#1A1A24","#34C3A0","lanyard","#34C3A0"),Ke("Mint button-up & suspender skirt","buttonup","#BFE8D8","#BFE8D8","skirt","#3A3A4A","#6A3A5A","bowtie","#6A3A5A","#E8C8B0")],makeup:[{lip:"#D0506A",shadow:"#C8A0A0",blush:"#F0A0A8",liner:!1},{lip:"#C07080",shadow:"#B8A0E0",blush:"#F0A8B0",liner:!0},{lip:"#D09088",shadow:"#D8B8A8",blush:"#F0B0A8",liner:!1},{lip:"#B0606A",shadow:"#8AC8C8",blush:"#E8A0A0",liner:!0},{lip:"#B8283A",shadow:"#C09898",blush:"#F09098",liner:!1}],mannerisms:["Pushes her giant glasses up with the back of her wrist","Fidgets with a keycap keychain while thinking","Double thumbs-up when your code compiles","Talks faster and faster until she catches herself, laughs, and restarts"],tone:"Quick, bubbly and nerdy. Lots of tech slang and tangents. Gets so excited she speeds up, then resets with a laugh.",voice:{pitch:1.35,rate:1.18},lines:{greet:"Hi hi hi! Okay, log in, we're debugging today and it's gonna be SO fun.",teach:"So a loop is just the computer going 'again? again? again?' until you tell it to stop.",praise:"It compiled?! First try?! Double thumbs up, you legend.",warn:"Mm, that's an infinite loop. Your laptop is crying. Ctrl+C, please.",bye:"Commit your work! Push it! Don't be the person who loses it. Bye!"}},{id:"larsen",idle:"nod",sig:"finger",num:116,name:"Dr. Ingrid Larsen",short:"Larsen",subject:"Life Lessons",room:"Life Lessons",age:60,gender:"F",skin:"#F3D6C6",eye:"#4F86B8",brow:"#B8AE9E",build:{h:1.02,w:1},features:{glasses:"round",glassesColor:"#B08A4A",lines:!0,earrings:"#9FC9E0"},hair:[Qe("Silver chignon","bun","#D8D2C4"),Qe("Chin-length bob","bob","#E0DACE"),Qe("Crown braid updo","bun","#D8D2C4","#9FC9E0"),Qe("Soft pixie","pixie","#E4DFD4"),Qe("Loose silver waves","long","#D0C9BA")],outfits:[Ke("Lab coat over lavender blouse","labcoat","#F7F7F5","#B9A6D6","skirt","#4A4E5A","#3A2E28","lanyard","#2E7D5B","#D8B8A8"),Ke("Moss cardigan","cardigan","#6A7F4A","#F2EEE4","pants","#5A4E40","#3A2E28","brooch","#C9A13B"),Ke("Botanical print dress","dress","#2E5E6A","#2E5E6A","none",void 0,"#2A2A2A","necklace","#E7C66A","#D8B8A8"),Ke("Fair Isle sweater","sweater","#9C3B3B","#9C3B3B","pants","#2E3A4A","#3A2E28",null,"#F2EEE4"),Ke("Field-trip vest & flannel","vest","#8A7A5A","#3E6A8A","pants","#4A4A3A","#5A3A22","scarf","#C9763B")],makeup:[{lip:"#C07A7A",shadow:"#B8A2A0",blush:"#E89A9A",liner:!1},{lip:"#D0705A",shadow:"#B8A090",blush:"#E8A090",liner:!1},{lip:"#9A5A6A",shadow:"#9A8AA8",blush:"#D88A9A",liner:!0},{lip:"#C8908A",shadow:"#C8B8B0",blush:"#E8AAA0",liner:!1},{lip:"#B02A36",shadow:"#A08A80",blush:"#E08A8A",liner:!0}],mannerisms:["Peers over her glasses before asking a question she already knows the answer to","Holds up one finger: 'Ah, but...'","Cups her hands as if holding something alive when describing cells","Hums while she labels specimen jars"],tone:"Warm, grandmotherly and razor sharp. Unhurried and kind, with a Scandinavian bluntness that surprises people.",voice:{pitch:1.05,rate:.85},lines:{greet:"Good morning, my future grown-ups. Let us see what life has to teach today.",teach:"Ah, but... who pays for it? Everything in grown-up life is a bargain with yourself.",praise:"Very good. You think like a scientist now. Dangerous.",warn:"The frog has been through enough. Please stop waving it.",bye:"Try one thing for yourself this week. I will ask how it went."}},{id:"raman",idle:"tilt",sig:"explain",num:117,name:"Mrs. Priya Raman",short:"Raman",subject:"English Literature",room:"Room 215",age:44,gender:"F",skin:"#A8703F",eye:"#2A160C",brow:"#1C120C",build:{h:.95,w:.97},features:{glasses:"half",glassesColor:"#6A4A8A",earrings:"#E6C35C"},hair:[Qe("Long center-part","long","#16100C"),Qe("Low braided bun","bun","#16100C","#E6C35C"),Qe("Single long braid","pony","#1A120E","#B83A5A"),Qe("Soft shoulder waves","bob","#24160F"),Qe("Loose curls, henna tint","curly","#4A2418")],outfits:[Ke("Plum cardigan & floral blouse","cardigan","#5E2E5A","#F2D8C8","skirt","#2E2A40","#3A2418","scarf","#D9A441","#6B4428"),Ke("Saffron kurta dress","dress","#D98E2B","#D98E2B","none",void 0,"#8A1F3A","necklace","#8A1F3A"),Ke("Teal turtleneck & long skirt","turtleneck","#1E6A70","#1E6A70","skirt","#5A4632","#2A1A12","necklace","#E6C35C","#5A4632"),Ke("Rose blazer & ivory shell","blazer","#C77A8A","#F5EFE6","pants","#3B3346","#E6C35C","brooch","#E6C35C"),Ke("Book-club sweater","sweater","#8A9A5B","#8A9A5B","skirt","#4A3A2A","#2A1A12","scarf","#B83A5A","#3A2A20")],makeup:[{lip:"#9A4A5A",shadow:"#5A3A30",blush:"#B8645A",liner:!0},{lip:"#8A5060",shadow:"#7A5A6A",blush:"#B06A6A",liner:!1},{lip:"#8E2A3A",shadow:"#D4A24A",blush:"#C06A50",liner:!0},{lip:"#8A3A2A",shadow:"#6A4030",blush:"#A85A48",liner:!0},{lip:"#9A6458",shadow:"#8A6A58",blush:"#B07060",liner:!1}],mannerisms:["Hugs her book to her chest when a passage moves her","Tilts her head and smiles before gently disagreeing","Looks over her half-moon glasses at the whole room","Quotes a line of poetry to end almost any argument"],tone:"Gentle, lyrical and encouraging. Long, flowing sentences, lots of 'dear' and 'lovely'. Corrects you so kindly you thank her for it.",voice:{pitch:1.1,rate:.88},lines:{greet:"Good morning, my dears. Open your books to where the story left us.",teach:"Notice how the rain falls just as she says goodbye. Nothing in a novel is an accident.",praise:"Oh, that's lovely. Write that down before it flies away.",warn:"Darling, 'it was good' is not an essay. Tell me why it was good.",bye:"Read chapter nine tonight, and let it keep you up a little."}}],lv=t=>{let e=2166136261;for(let n of t)e^=n.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0},hv=t=>()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},cv=t=>{let e=new Date(t.getFullYear(),0,1),n=Math.floor((+t-+e)/864e5/7);return`${t.getFullYear()}-${n}`};function Xc(t,e,n=new Date){let i=hv(lv(t+e+cv(n))),s=[0,1,2,3,4];for(let h=4;h>0;h--){let l=Math.floor(i()*(h+1));[s[h],s[l]]=[s[l],s[h]]}let r=n.getDay(),a=r===6?0:r===0?1:r-1;return s[a]}var uv={short:"crop",slick:"crop",pixie:"crop",buzz:"buzz",bun:"bun",bob:"bob",long:"long",pony:"pony",afro:"afro",curly:"curly",bald:"bald"},dv={rect:"square",round:"round",cateye:"cat",half:"half"};function Cf(t,e=new Date){let n=t.hair[Xc(t.id,"hair",e)],i=t.outfits[Xc(t.id,"outfit",e)],s=t.features,r=t.makeup?.[Xc(t.id,"makeup",e)],a={id:t.num,age:"adult",skin:t.skin,hair:n.color,hair2:n.accent&&n.style!=="afro"?n.accent:void 0,style:uv[n.style]??"crop",shirt:i.top_c,shirt2:i.inner_c,top:i.top,bottom:i.bottom==="none"?"pants":i.bottom,pants:i.bottom_c??"#3a3a44",tights:i.legs,shoes:i.shoes_c,acc:i.acc??void 0,accent:i.accent_c,eyeColor:t.eye,browColor:t.brow,brow:t.gender==="M"?"thick":"soft",glasses:s.glasses?dv[s.glasses]??"round":!1,glassColor:s.glassesColor,earrings:s.earrings,hoops:s.hoops,beard:s.beard,beardColor:s.beardColor,freckles:s.freckles,lines:s.lines||t.age>50,bodyW:t.build.w,hScale:t.build.h,lip:r?.lip,shadow:r?.shadow,blushColor:r?r.blush+"55":void 0,blush:r?!0:void 0,liner:r?.liner,lanyard:i.acc==="lanyard",tag:!1};return n.style==="afro"&&n.accent&&(a.hat="headband",a.hatColor=n.accent),a}var CS=Object.fromEntries($c.map(t=>[t.id,t]));var fv=["cheerful","shy","sporty","nerdy","artsy","funny","curious","bossy","dreamy","kind"],Rf=["Maya","Marcus","Priya","Leo","Amara","Diego","Sofia","Kenji","Zara","Eli","Nadia","Tobias","Imani","Mateo","Hana","Omar","Lucia","Jonah","Anika","Caleb","Mei","Ravi","Talia","Felix","Yara","Ben","Chloe","Dev","Esme","Finn","Grace","Hugo","Isla","Jamal","Keira","Liam","Mira","Noah","Olive","Pablo","Quinn","Rosa","Sam","Tessa","Uma","Victor","Willa","Xavier","Yusuf","Zoe","Aiden","Bella","Cyrus","Daria","Emil","Farah","Gus","Harper"],Pf=["Chen","Reed","Patel","Okafor","Santos","Nguyen","Kim","Haddad","Rivera","Brooks","Ivanov","Tanaka","Mensah","Larsen","Cruz","Adeyemi","Fischer","Ibrahim","Kowalski","Lopez","Morales","Novak","Osei","Park","Quintero","Rossi","Singh","Torres","Underwood","Vega","Walker","Yamada","Zhang","Abbott","Bishop","Castillo","Dalton","Ellis","Foster","Grant"],kf={young:["dinosaurs","building with blocks","drawing animals","jumping rope","bugs and butterflies","playing tag","stickers","toy trains","singing songs","baking cookies"],mid:["soccer","robotics club","drawing comics","chess","baking","birdwatching","skateboarding","minecraft builds","magic tricks","swimming","reading mysteries","playing violin","origami","space and rockets"],teen:["basketball","coding","photography","theater","poetry","painting","piano","track and field","debate","gardening","making music","volleyball","film editing","cooking"]},pv=["tacos","mac and cheese","pizza","fried rice","mango slices","pancakes","dumplings","hummus and pita","grilled cheese","pasta","chicken nuggets","cheeseburgers","sushi rolls","samosas","peanut butter sandwiches"],mv=["a dog named Biscuit","a cat named Pickles","a hamster named Nugget","two goldfish","a rabbit named Clover","a parrot named Mango","a turtle named Speedy","a gecko named Ziggy",null,null,null],gv=["become an astronaut","open a bakery","play pro soccer","write a graphic novel","be a marine biologist","build robots","become a teacher","direct movies","be a vet","design video games","be a chef","become a pilot","run for mayor","be a musician"],If=["always hums while working","carries a tiny notebook everywhere","says 'for real though' a lot","collects interesting rocks","never leaves without a snack","talks to plants","draws doodles on everything","counts steps in the hallway","makes up nicknames","loves puns","gets the hiccups when nervous","is always five minutes early"],yv=["is secretly afraid of the dark","still sleeps with a stuffed bunny","writes songs nobody has heard","wants to try out for the school play but is nervous","can solve a Rubik's cube in under a minute","once got lost in the library for an hour","has a crush on someone in the art club","is saving up for a telescope","is learning a new language in secret","feels nervous about speaking in class"],Lf=["math","ela","science","history"],Df=["k2","g35","g68","hs","g35","g68","k2","hs","g68","g35"],bv=(t,e)=>t==="k2"?["K","1","2"][e%3]:t==="g35"?["3","4","5"][e%3]:t==="g68"?["6","7","8"][e%3]:t==="hs"?["9","10","11","12"][e%4]:"Staff",Un=(t,e)=>e[Math.floor(t()*e.length)];function vv(t=48,e=20260930){let n=xi(e),i=new Set,s=new Set,r=[],a="",h="";for(let l=0;l<t;l++){let o=Df[l%Df.length],d,u=0;do d=wa(n,o),u++;while((i.has(qc(d))||d.hairStyle===a||d.hair===h)&&u<60);i.add(qc(d)),a=d.hairStyle,h=d.hair,(o==="k2"||o==="g35")&&(d.glasses=n()<.12?d.glasses:"none",d.top==="blazer"&&(d.top="hoodie"));let c=Rf[l%Rf.length],f=Un(n,Pf),g=`${c} ${f}`;for(;s.has(g);)f=Un(n,Pf),g=`${c} ${f}`;s.add(g),d.name=c;let v=o==="k2"||o==="g35"?"young":o==="g68"?"mid":"teen",p=kf[v],m=[Un(n,p)];for(;m.length<3;){let C=Un(n,[...p,...kf.mid]);m.includes(C)||m.push(C)}let _=Un(n,Lf),R=Un(n,Lf.filter(C=>C!==_)),x=fv[(l*3+Math.floor(n()*10))%10],M=Math.floor(n()*4),T=bv(o,M);r.push({id:l,key:`n${l}`,name:g,first:c,role:"student",age:o,grade:T,spec:d,look:{...Xi(d,l),tag:!1},personality:x,interests:m,favSubject:_,hardSubject:R,food:Un(n,pv),pet:Un(n,mv),dream:Un(n,gv),quirk:Un(n,If),secret:Un(n,yv),bestFriend:(l+1+Math.floor(n()*5))%t,rival:n()<.3?(l+7+Math.floor(n()*9))%t:null,bio:`${c} is in grade ${T}, loves ${m[0]} and ${m[1]}, and ${Un(n,If)}.`})}for(let l of r)l.bestFriend===l.id&&(l.bestFriend=(l.id+1)%t);return r}var cr=vv(56),hs=t=>cr[t]??Jn.find(e=>e.id===t),xv=t=>({...wa(xi(t.name?.length??5),"adult"),...t});function Ff(t,e,n,i,s,r,a={}){let h=xv({name:e.split(" ").pop(),age:"adult",...s}),l=e.split(" ").pop();return{id:t,key:`s${t}`,name:e,first:l,role:"staff",title:n,age:"adult",grade:"Staff",spec:h,look:{...Xi(h,t),tag:!1},personality:r,interests:["helping students","coffee","crossword puzzles"],favSubject:i??"history",hardSubject:"math",food:"a good salad",pet:null,dream:"see every student find something they love",quirk:"keeps spare pencils in every pocket",secret:"still has their own first-grade report card",bestFriend:0,rival:null,bio:`${e} is ${n}.`,...a}}var _v={tanaka:"nerdy",ayrissa:"cheerful",okafor:"nerdy",obrien:"funny",haddad:"kind",park:"curious",larsen:"kind",raman:"dreamy"},wv={tanaka:"the math teacher",ayrissa:"the English teacher",okafor:"the chemistry and science teacher",obrien:"the history teacher",haddad:"the CarryingCareers teacher",park:"the computer science teacher",larsen:"the Life Lessons teacher",raman:"the English literature teacher"},Sv={tanaka:"math",ayrissa:"ela",okafor:"science",obrien:"history",haddad:"careers",park:"science",larsen:"life",raman:"ela"};function Mv(t){let e=t.short,n=Cf(t);return Ff(t.num,t.name,wv[t.id],Sv[t.id],{skin:t.skin,hair:n.hair},_v[t.id],{look:n,faculty:t.id,quirk:t.mannerisms[0].charAt(0).toLowerCase()+t.mannerisms[0].slice(1),bio:`${t.name} teaches ${t.subject} (${t.room}). ${t.tone}`,first:e,interests:[t.subject.toLowerCase(),"coffee","helping students"]})}var $i=t=>Mv($c.find(e=>e.id===t)),Jn=[Ff(100,"Mr. Bello","the hall monitor",null,{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"crop",top:"vest",shirt:"#c98569",shirt2:"#fff6ea",bottom:"pants",pants:"#2b3a55",hat:"none",glasses:"none",packStyle:"none",brow:"thick",mouthStyle:"smile"},"kind"),$i("raman"),$i("tanaka"),$i("ayrissa"),$i("okafor"),$i("obrien"),$i("haddad"),$i("park"),$i("larsen")],hr=t=>Jn.find(e=>e.faculty===t),Xl={math:hr("tanaka"),ela:hr("ayrissa"),science:hr("okafor"),history:hr("obrien"),careers:hr("haddad"),life:hr("larsen")},Nf=24;var Yc=["math","ela","science","history","careers","life"],Yi={math:"Math",ela:"ELA",science:"Science",history:"History",careers:"CarryingCareers",life:"Life Lessons"},$l=[{id:"morning",label:"Morning",min:9*60},{id:"noon",label:"Noon",min:12*60+30},{id:"evening",label:"Evening",min:17*60+30}],Bf="unify.progress.v1",Uf="unify.assess.on",Bn=()=>{try{let t=JSON.parse(localStorage.getItem(Bf)||"{}");return{idx:t.idx||{},done:t.done||{},level:t.level||{},extra:t.extra||{},assess:t.assess,days:t.days||{}}}catch{return{idx:{},done:{},level:{},extra:{},days:{}}}},ur=t=>{try{let e=Object.keys(t.days).sort().slice(-14);t.days=Object.fromEntries(e.map(n=>[n,t.days[n]])),localStorage.setItem(Bf,JSON.stringify(t)),window.dispatchEvent(new Event("unify:progress"))}catch{}},cs=(t=new Date)=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Tv=t=>{let e=2166136261;for(let n of t)e^=n.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0},Ev=t=>()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},us=t=>{let e=Math.floor(t/60),n=t%60;return`${(e+11)%12+1}:${String(n).padStart(2,"0")} ${e<12?"AM":"PM"}`};function jc(t,e=new Date){let n=Ev(Tv(cs(e)+t)),i=[],s=0;for(;i.length<5&&s++<400;){let r=480+Math.floor(n()*125)*5;r<=18*60+30&&i.every(a=>Math.abs(a-r)>=40)&&i.push(r)}return i.sort((r,a)=>r-a)}var Nt={get assessOn(){try{return localStorage.getItem(Uf)==="1"}catch{return!1}},set assessOn(t){try{localStorage.setItem(Uf,t?"1":"0")}catch{}},index(t,e){return(Bn().idx[t]??Math.floor(Date.now()/864e5))%Math.max(1,e)},assessment:()=>Bn().assess??null,saveAssessment(t){let e=Bn();e.assess=t,ur(e)},clearAssessment(){let t=Bn();delete t.assess,t.extra={},ur(t)},extraDone:t=>Bn().extra[t]??[],completeExtra(t,e){let n=Bn(),i=n.extra[t]??=[];i.includes(e)||i.push(e),ur(n)},complete(t,e,n){let i=Bn(),s=i.done[t]??=[];s.includes(e)||s.push(e);let r=i.idx[t]??Math.floor(Date.now()/864e5)%Math.max(1,n);return i.idx[t]=(r+1)%Math.max(1,n),ur(i),i.idx[t]},doneCount:t=>(Bn().done[t]??[]).length,pick(t,e,n,i=!1){let s=Bn(),r=cs();(s.days[r]??={})[t+(i?"-extra":"")]={min:e,kind:n,at:Date.now()},ur(s)},unpick(t,e=!1){let n=Bn(),i=cs();n.days[i]&&delete n.days[i][t+(e?"-extra":"")],ur(n)},today(){let t=Bn().days[cs()]??{};return Object.keys(t).map(e=>({subject:e.replace("-extra",""),min:t[e].min,extra:e.endsWith("-extra")})).sort((e,n)=>e.min-n.min)},pickedFor(t,e=!1){return Bn().days[cs()]?.[t+(e?"-extra":"")]?.min??null}};var Ye=t=>t,Yl={math:[Ye({id:"parabola",subject:"math",title:"Graphing a parabola",blurb:"Vertex, axis of symmetry and plotting.",pics:["parabola","orbit"],videos:["parabola"],points:["Parabola: the U-shaped curve of y = x\xB2","Vertex: the turning point (lowest or highest)","Axis of symmetry: the line that splits the curve in two matching halves","To graph: plot the vertex, find points, mirror them"],examples:["y = x\xB2: vertex (0, 0). x = 2 gives y = 4, and x = -2 gives y = 4 too.","y = (x - 3)\xB2: the curve slides 3 right, so the vertex is (3, 0).","A tossed ball follows a parabola. The top of its flight is the vertex."],lab:{id:"parabola",title:"Parabola Launcher",intro:"Shape the curve with the sliders so the ball lands on the targets. Watch the vertex and the axis of symmetry move."},intro:"Today we're graphing parabolas, the curve you see whenever something is thrown.",wrap:"Great work. Remember: find the vertex, use the axis of symmetry, then mirror your points.",homework:"Graph y = x\xB2 + 2 and label the vertex and axis of symmetry.",glossary:{vertex:"The vertex is the turning point of the parabola, its highest or lowest point.",parabola:"A parabola is the U-shaped curve you get from a squared term, like y = x squared.",axis:"The axis of symmetry is the vertical line through the vertex that splits the graph into matching halves.",symmetry:"Symmetry means one side is a mirror image of the other.",intercept:"An intercept is where the graph crosses an axis.",coordinate:"A coordinate is a pair like (3, 4): across, then up.",root:"A root, or zero, is an x value where the graph touches the x-axis."},whys:["It's symmetric because squaring makes a positive number and its negative give the same answer.","The vertex is the turning point because that's where the curve stops going down and starts going up.","Mirroring saves work: once you know one side, the other side is free."]}),Ye({id:"fractions",subject:"math",title:"Fractions",blurb:"Equal parts of a whole.",pics:["fractions","pizza-fraction"],videos:["fractions"],points:["A fraction names equal parts of a whole","Numerator: how many parts we have","Denominator: how many equal parts in all","Equivalent fractions name the same amount: 4/8 = 1/2"],examples:["A pizza cut in 8: 3 slices is 3/8.","2/4 and 1/2 are equivalent: half the circle either way.","1/3 is bigger than 1/4: fewer cuts means bigger pieces."],lab:{id:"pizza",title:"Pizza Party",intro:"Serve each classmate exactly the fraction they ask for. Click the slices to hand them out."},intro:"Today: fractions. Parts of a whole, shared fairly.",wrap:"Nice sharing. Equal parts are what make fractions work.",homework:"Draw 3 shapes and shade 1/2, 1/4 and 3/4 of each.",glossary:{numerator:"The numerator is the top number: how many parts you have.",denominator:"The denominator is the bottom number: how many equal parts make the whole.",equivalent:"Equivalent fractions look different but are the same amount, like 2/4 and 1/2.",fraction:"A fraction is a number that names part of a whole.",whole:"The whole is the entire thing before it is divided."},whys:["The parts must be equal, otherwise 1/4 wouldn't always mean the same amount.","More pieces means smaller pieces, which is why 1/8 is smaller than 1/4.","Equivalent fractions work because cutting each piece in half doubles both numbers."]})],ela:[Ye({id:"theme",subject:"ela",title:"Finding the theme",blurb:"Plot, change and evidence.",pics:["organizer"],videos:["theme"],points:["Ask: what happens? (the plot)","Ask: what changes? (the character or situation)","Back it up with evidence from the text","A theme is a message, written as a full sentence"],examples:["Theme: 'Slow and steady wins the race.'","Evidence: the hare quit trying, the tortoise never stopped.","Not a theme: 'friendship' (one word). A theme says something about it."],lab:{id:"cardsort",cfg:"tortoise",title:"Story Builder",intro:"Put the events of the story in order, then pick the theme the events prove."},intro:"Today we're finding themes: the big message hiding inside a story.",wrap:"Remember: plot, change, evidence, then state the theme in a sentence.",homework:"Write the theme of your favorite story in one sentence and add one piece of evidence.",glossary:{theme:"The theme is the big message or lesson of a story, written as a full sentence.",evidence:"Evidence is a detail or quote from the text that supports your idea.",plot:"The plot is the series of events in a story.",character:"A character is a person or creature in a story.",conflict:"Conflict is the problem or struggle that drives the story.",inference:"An inference is an idea you figure out from clues in the text."},whys:["We use evidence so the theme is something we can show, not just a guess.","Looking at what changes works because stories are about change, and the change points to the lesson.","A theme is a message the author wants us to take away."]}),Ye({id:"figurative",subject:"ela",title:"Simile and metaphor",blurb:"Creative comparisons.",pics:["simile"],videos:["figurative"],points:["Figurative language paints pictures with words","Simile: compares using LIKE or AS","Metaphor: says one thing IS another","Use them to make writing vivid"],examples:["Simile: 'as busy as a bee.'","Metaphor: 'time is a thief.'","Simile: 'She runs like the wind.'"],lab:{id:"cardsort",cfg:"figurative",title:"Sort the Sayings",intro:"Drag each saying under Simile or Metaphor."},intro:"Today: figurative language, words that paint pictures.",wrap:"Like or as means simile. Is or are means metaphor.",homework:"Write two similes and two metaphors about your morning.",glossary:{simile:"A simile compares two things using 'like' or 'as.'",metaphor:"A metaphor says one thing is another to show a feeling, like 'Time is a thief.'",figurative:"Figurative language uses comparisons and imagery instead of literal meaning.",literal:"Literal means exactly what the words say.",imagery:"Imagery is language that appeals to the senses."},whys:["Comparisons help readers picture and feel something new.","Similes use like or as, so the comparison is easy to spot.","Metaphors feel stronger because they say one thing actually is the other."]}),Ye({id:"orchestra",subject:"ela",title:"Music: the orchestra",blurb:"Instrument families.",pics:["staff"],videos:["orchestra"],points:["An orchestra has four instrument families","Strings: violin, cello (sound from a bow or plucking)","Woodwinds and brass: sound from blowing air","Percussion: struck or shaken. The conductor keeps everyone together"],examples:["Violin: strings. Flute: woodwind.","Trumpet: brass. Drum: percussion.","The conductor uses a baton to show the beat."],lab:{id:"cardsort",cfg:"orchestra",title:"Seat the Orchestra",intro:"Place each instrument in its family."},intro:"Welcome to music. Today we meet the orchestra.",wrap:"Four families, one conductor, one big sound.",homework:"Name two instruments from each family.",glossary:{conductor:"The conductor leads the orchestra and shows the tempo with a baton.",strings:"String instruments make sound from vibrating strings, like the violin.",woodwind:"Woodwinds make sound when air is blown across or through them, like the flute.",brass:"Brass instruments are blown through metal tubes, like the trumpet.",percussion:"Percussion instruments are struck or shaken, like drums.",orchestra:"An orchestra is a large group of musicians playing together."},whys:["Families group instruments by how they make sound.","A conductor keeps every player on the same beat.","Different sounds blend to make a fuller sound."]}),Ye({id:"rhythm",subject:"ela",title:"Music: beat and rhythm",blurb:"Counting in four.",pics:["staff"],videos:["rhythm"],points:["Beat: the steady pulse of the music","Rhythm: the pattern of long and short sounds","Count 1-2-3-4 and clap on each beat","A quarter note gets one beat"],examples:["Clap on every beat: 1, 2, 3, 4.","Two eighth notes fit in one beat.","A metronome ticks the beat."],lab:{id:"beats",title:"Beat Pads",intro:"Hit the pads when the notes reach the line. Your classmate keeps the drum beat."},intro:"Today in music: feel the beat.",wrap:"Keep the steady beat and the rhythm will follow.",homework:"Clap the rhythm of your name.",glossary:{beat:"The beat is the steady pulse you can tap your foot to.",rhythm:"Rhythm is the pattern of long and short sounds.",tempo:"Tempo is how fast or slow the music goes.",note:"A note shows a sound and how long it lasts.",metronome:"A metronome ticks a steady beat."},whys:["A steady beat lets everyone play together.","Different note lengths make the rhythm interesting.","Tempo changes the mood: fast feels excited, slow feels calm."]}),Ye({id:"colormix",subject:"ela",title:"Art: mixing colors",blurb:"Primary and secondary colors.",pics:["color-wheel"],videos:["colormix"],points:["Primary colors: red, yellow, blue","Mix two primaries for a secondary color","Red + yellow = orange. Yellow + blue = green. Blue + red = purple","Warm colors feel cozy, cool colors feel calm"],examples:["A sunset uses warm colors: red, orange, yellow.","The ocean uses cool colors: blue and green.","Adding white makes a color lighter."],lab:{id:"colormix",title:"Paint Mixer",intro:"Mix the paint to match each color swatch, then paint the cube."},intro:"Welcome to art. Today we mix colors.",wrap:"Three primaries can make a whole rainbow.",homework:"Paint a color wheel using only red, yellow and blue.",glossary:{primary:"Primary colors are red, yellow and blue. You cannot make them by mixing.",secondary:"Secondary colors are made by mixing two primaries: orange, green, purple.",warm:"Warm colors, like red and orange, feel cozy or energetic.",cool:"Cool colors, like blue and green, feel calm.",palette:"A palette is a board for mixing paint.",hue:"Hue is another word for color."},whys:["Primaries can't be made from other colors, so they're the starting point.","Mixing two primaries gives a secondary color halfway between them.","Artists use warm and cool colors to set the mood."]}),Ye({id:"perspective",subject:"ela",title:"Art: perspective",blurb:"Making flat drawings look deep.",pics:["color-wheel"],videos:["perspective"],points:["Perspective makes a flat drawing look 3D","Lines going away meet at the vanishing point","Far things look smaller, near things look bigger","Overlap shows what is in front"],examples:["Railroad tracks meet at the horizon.","Trees in the distance look tiny.","A hand drawn over a face is closer than the face."],lab:{id:"cardsort",cfg:"perspective",title:"Near and Far",intro:"Sort the objects into foreground, middle and background."},intro:"In art today: perspective, the trick that makes a page look deep.",wrap:"Vanishing point, size change, overlap. Three tools for depth.",homework:"Draw a road that disappears into the distance.",glossary:{perspective:"Perspective is a way to show depth on a flat surface.",horizon:"The horizon is the line where the ground meets the sky.",vanishing:"The vanishing point is where lines going away from you appear to meet.",foreground:"The foreground is the part of a picture closest to you.",background:"The background is the part farthest away."},whys:["Our eyes see far things smaller, so drawings copy that.","Converging lines tell the brain something goes far away.","Overlapping shapes show which object is in front."]})],science:[Ye({id:"cell",subject:"science",title:"Plant cells",blurb:"Wall, chloroplasts, vacuole.",pics:["plant-cell"],videos:["cell"],points:["Cells are the tiny building blocks of living things","Cell wall: stiff outer layer for shape and support","Chloroplasts: make food from sunlight","Vacuole: stores water and keeps the cell firm"],examples:["Crunchy celery has cells full of water in their vacuoles. Wilted celery has lost that water.","Leaves are green because cells hold many chloroplasts.","The cell wall is like a cardboard box around a water balloon."],lab:{id:"cell",title:"Cell Explorer",intro:"Rotate the plant cell, click the parts, then play the find-it challenge."},intro:"Let's shrink down and explore a plant cell.",wrap:"Wall, chloroplasts, vacuole: three parts, three jobs.",homework:"Draw a plant cell and label the wall, chloroplasts and vacuole.",glossary:{"cell wall":"The cell wall is the strong outer layer that supports and protects a plant cell.",chloroplast:"Chloroplasts are the green structures where photosynthesis happens.",vacuole:"The vacuole is a large storage sac that holds water and nutrients.",photosynthesis:"Photosynthesis is how plants turn sunlight, water and carbon dioxide into sugar and oxygen.",chlorophyll:"Chlorophyll is the green pigment that captures sunlight.",nucleus:"The nucleus is the control center that holds the cell's DNA.",cell:"A cell is the smallest living building block of an organism.",mitochondria:"Mitochondria release energy from food for the cell to use."},whys:["Plants need cell walls because they have no skeleton, so the walls hold them up.","Chloroplasts matter because they turn sunlight into sugar.","Vacuoles are big in plants because water pressure keeps stems standing."]}),Ye({id:"photosynthesis",subject:"science",title:"Photosynthesis",blurb:"How plants make food.",pics:["photosynthesis"],videos:["photosynthesis"],points:["Plants make their own food: photosynthesis","Inputs: sunlight, water, carbon dioxide","Outputs: sugar (food) and oxygen","Chlorophyll in the chloroplasts captures the light"],examples:["A plant on a sunny windowsill grows toward the light.","Water goes up the roots, carbon dioxide comes in through the leaves.","The oxygen we breathe is made by plants and algae."],lab:{id:"photosynth",title:"Grow the Plant",intro:"Give your plant sunlight, water and carbon dioxide in the right balance and grow it tall."},intro:"Today's question: how does a plant eat?",wrap:"Sunlight, water, air in. Sugar and oxygen out.",homework:"Observe a plant for a week and record how it changes.",glossary:{photosynthesis:"Photosynthesis is how plants turn sunlight, water and carbon dioxide into sugar and oxygen.",chlorophyll:"Chlorophyll is the green pigment that captures sunlight.",glucose:"Glucose is the sugar plants make for energy.",oxygen:"Oxygen is the gas plants release that we breathe.","carbon dioxide":"Carbon dioxide is the gas plants take in from the air."},whys:["Plants can't hunt or eat, so they make food from light.","Light is the energy that powers the reaction.","Oxygen is a leftover the plant releases."]}),Ye({id:"watercycle",subject:"science",title:"The water cycle",blurb:"Evaporation to rain.",pics:["water-cycle"],videos:["watercycle"],points:["Evaporation: the sun turns water into vapor","Condensation: vapor cools into clouds","Precipitation: rain, snow or hail falls","Collection: water gathers and the cycle repeats"],examples:["Puddles disappear on a sunny day: evaporation.","A cold glass 'sweats': condensation.","Rivers carry rain back to the sea."],lab:{id:"cardsort",cfg:"watercycle",title:"Order the Cycle",intro:"Put the stages of the water cycle in order."},intro:"Water is always moving. Let's follow it.",wrap:"Evaporate, condense, precipitate, collect, repeat.",homework:"Draw the water cycle and label four stages.",glossary:{evaporation:"Evaporation is when liquid water warms up and becomes a gas called vapor.",condensation:"Condensation is when vapor cools into tiny droplets, forming clouds.",precipitation:"Precipitation is water falling from clouds as rain, snow, sleet or hail.",vapor:"Vapor is water in gas form.",cycle:"A cycle is a series of steps that repeats."},whys:["The sun supplies the energy to lift water into the air.","Cold air at height cools the vapor, so it condenses.","Gravity pulls the heavy droplets down as rain."]}),Ye({id:"gravity",subject:"science",title:"Gravity",blurb:"Why things fall and orbit.",pics:["orbit"],videos:["gravity"],points:["Gravity is a force that pulls objects together","Earth pulls everything toward its center","More mass means a stronger pull","Gravity keeps the Moon in orbit around Earth"],examples:["An apple falls straight down.","You'd weigh less on the Moon because it has less mass.","Without gravity the Moon would fly off into space."],lab:{id:"gravity",title:"Drop Zone",intro:"Pick a planet and an object, predict which lands first, then drop them."},intro:"Why does everything fall down? Today we explore gravity.",wrap:"Gravity pulls everything with mass.",homework:"Drop three objects from the same height and record what happens.",glossary:{gravity:"Gravity is the force that pulls objects with mass toward each other.",mass:"Mass is how much matter is in an object.",orbit:"An orbit is the curved path one object takes around another.",weight:"Weight is how hard gravity pulls on an object.",force:"A force is a push or a pull."},whys:["Earth is so massive that its pull is strong enough to keep us on the ground.","Without a push sideways, objects fall straight down.","The Moon moves sideways fast enough that it keeps missing Earth, which is an orbit."]})],history:[Ye({id:"egypt",subject:"history",title:"Ancient Egypt: the pyramids",blurb:"Building a wonder.",pics:["pyramid","timeline"],videos:["egypt"],points:["Pyramids were royal tombs built about 4,500 years ago","Workers moved stone on sledges and boats along the Nile","Architects planned each layer carefully","The Great Pyramid took about 20 years"],examples:["Blocks floated down the Nile during the yearly flood.","Ramps helped workers raise blocks higher.","The Great Pyramid was the tallest structure for almost 4,000 years."],lab:{id:"pyramid",title:"Pyramid Builders",intro:"Click to place stone blocks layer by layer. Your classmates haul the blocks."},intro:"Today we travel to ancient Egypt to see how people built mountains of stone.",wrap:"Planning, teamwork and the Nile made it possible.",homework:"Draw a pyramid and label two ways workers moved the stone.",glossary:{pharaoh:"A pharaoh was the king or queen of ancient Egypt.",pyramid:"A pyramid is a huge stone tomb with triangular sides.",nile:"The Nile is the long river that gave Egypt water, food and a way to move stone.",sledge:"A sledge is a sled used to drag heavy loads.",architect:"An architect plans how a building will be built.",tomb:"A tomb is a place where a person is buried."},whys:["The Nile was the highway of Egypt, so building near it made moving stone easier.","Planning mattered because mistakes in huge blocks were costly.","Pyramids were built to protect the pharaoh in the afterlife."]}),Ye({id:"silkroad",subject:"history",title:"The Silk Road",blurb:"Trade and ideas.",pics:["silk-map","timeline"],videos:["silkroad"],points:["A network of trade routes linking Asia, the Middle East and Europe","Silk, spices and paper traveled west","Caravans of camels crossed deserts","Ideas, religions and inventions traveled too"],examples:["Silk was made only in China at first.","Paper-making spread west along the routes.","Oasis towns grew rich from trade."],lab:{id:"cardsort",cfg:"silkroad",title:"Trade Match",intro:"Send each good to the city where it was famous."},intro:"Today: the Silk Road, history's great trading highway.",wrap:"Trade moves goods and ideas.",homework:"List three things traded and where each came from.",glossary:{caravan:"A caravan is a group of traders traveling together, often with camels.",oasis:"An oasis is a place in the desert with water.",trade:"Trade is exchanging goods or services.",silk:"Silk is a smooth fabric made from silkworm threads.",route:"A route is a path from one place to another."},whys:["Silk was rare and valuable, so people traveled far to trade for it.","Camels can go long distances without water.","When people meet to trade, they also share ideas."]}),Ye({id:"printing",subject:"history",title:"The printing press",blurb:"Books for everyone.",pics:["press","timeline"],videos:["printing"],points:["Before 1440, books were copied by hand","Gutenberg built a press with movable metal letters","Letters could be rearranged and reused","Books got cheaper and more people learned to read"],examples:["A monk could spend months copying one Bible.","A press could print hundreds of pages a day.","News and new ideas spread across Europe faster."],lab:{id:"press",title:"Set the Type",intro:"Pick letters from the tray to spell each word, then pull the lever to print."},intro:"Today we meet the invention that changed how ideas travel.",wrap:"Movable type made knowledge cheaper and faster to share.",homework:"Explain in two sentences how the press changed reading.",glossary:{press:"A printing press stamps ink from letters onto paper.","movable type":"Movable type is letters that can be rearranged and reused.",gutenberg:"Johannes Gutenberg built the first European movable-type press around 1440.",scribe:"A scribe copied books by hand.",manuscript:"A manuscript is a handwritten book."},whys:["Reusing letters made printing far faster than hand copying.","Cheaper books meant more people could learn to read.","Faster printing helped ideas spread."]}),Ye({id:"teaparty",subject:"history",title:"The Boston Tea Party",blurb:"A protest about taxes.",pics:["timeline"],videos:["teaparty"],points:["1773: colonists were taxed without a vote","'No taxation without representation'","Colonists threw 342 chests of tea into Boston Harbor","It helped push the colonies toward revolution"],examples:["The tax stayed on tea even though the price was low.","The protest was at night so colonists could act quickly.","Britain answered with harsh laws, which angered more colonists."],lab:{id:"cardsort",cfg:"teaparty",title:"Build the Timeline",intro:"Put the events leading to the Revolution in order."},intro:"Today: a night in Boston harbor that changed history.",wrap:"A protest about fairness helped start a country.",homework:"Write two sentences: why were colonists angry?",glossary:{colonist:"A colonist is a person who lives in a colony.",tax:"A tax is money people must pay to the government.",representation:"Representation means having people who speak and vote for you in government.",protest:"A protest is a public way to show disagreement.",revolution:"A revolution is a big change in government, often by force."},whys:["Colonists felt it was unfair to be taxed with no say in the decision.","Dumping the tea made a loud statement against the tax.","Britain's response pushed more colonists to side with the protesters."]}),Ye({id:"bill",subject:"history",title:"Government: how a bill becomes a law",blurb:"From idea to law.",pics:["bill-flow"],videos:["bill"],points:["It starts with an idea from a citizen","A member of Congress introduces a bill","Committees study it, then the House and Senate vote","The President signs it into law or vetoes it"],examples:["A town wants a crosswalk. A representative writes a bill.","Both the House and Senate must pass the same bill.","If the President vetoes, Congress can override with a big vote."],lab:{id:"cardsort",cfg:"bill",title:"Bill to Law",intro:"Put the steps in order so the bill becomes a law."},intro:"Today: how an idea becomes a law.",wrap:"Idea, bill, committee, vote, signature.",homework:"Pick a rule you'd like in school and list the steps to make it a law.",glossary:{bill:"A bill is a proposed law.",congress:"Congress is the part of government that makes laws: the House and the Senate.",veto:"A veto is when the President refuses to sign a bill.",committee:"A committee is a small group that studies a bill.",law:"A law is a rule that everyone must follow.",amendment:"An amendment is a change or addition."},whys:["Many steps keep a law from passing without careful thought.","Two chambers means more voices check the idea.","The President's signature is the last check."]}),Ye({id:"branches",subject:"history",title:"Government: three branches",blurb:"Checks and balances.",pics:["branches"],videos:["branches"],points:["Legislative (Congress): makes laws","Executive (President): carries out laws","Judicial (courts): decide what laws mean","Checks and balances: each branch limits the others"],examples:["Congress writes a law. The President signs it. Courts can say if it follows the Constitution.","The President can veto. Congress can override.","The Senate approves judges the President picks."],lab:{id:"cardsort",cfg:"branches",title:"Branch Sort",intro:"Drag each job to the branch that does it."},intro:"Today: why no one person holds all the power.",wrap:"Three branches keep power balanced.",homework:"Match five jobs to the right branch.",glossary:{legislative:"The legislative branch, Congress, makes laws.",executive:"The executive branch, led by the President, carries out laws.",judicial:"The judicial branch, the courts, decides what laws mean.",constitution:"The Constitution is the set of rules for how the government works.","checks and balances":"Checks and balances let each branch limit the power of the others."},whys:["Splitting power prevents any one person from becoming too strong.","Each branch can check the others, so mistakes can be fixed.","The Constitution spells out each branch's job."]}),Ye({id:"election",subject:"history",title:"Government: election day",blurb:"How voting works.",pics:["bill-flow"],videos:["election"],points:["Citizens vote to choose leaders","A ballot is secret so people vote freely","Votes are counted by officials","The candidate with the most votes wins"],examples:["A class votes for a class pet.","A mayor wins by getting the most votes.","Every vote counts, even in close elections."],lab:{id:"vote",title:"Class Vote",intro:"Cast your vote for the class pet and see how your classmates vote."},intro:"Today: how a community makes a decision by voting.",wrap:"Voting gives everyone a say.",homework:"Ask three people what they'd vote for and tally the answers.",glossary:{ballot:"A ballot is the paper or screen where you mark your vote.",candidate:"A candidate is a person running for an office.",election:"An election is when people vote to choose leaders.",majority:"A majority is more than half of the votes.",poll:"A poll is where people vote, or a survey of opinions."},whys:["Secret ballots let people vote without pressure.","Counting every vote keeps the result fair.","Voting lets citizens help decide how they are governed."]})],careers:[Ye({id:"find",subject:"careers",title:"Finding your path",blurb:"Interests, skills and values.",pics:["career-path"],videos:[],points:["Interests: what you enjoy doing","Skills: what you can do well, and can learn","Values: what matters to you, like helping, creating or earning","The best fit sits where all three overlap"],examples:["Enjoys fixing bikes (interest), patient with details (skill), likes seeing things work (value): mechanic, engineer or technician.","Loves explaining things (interest), clear speaker (skill), wants to help others grow (value): teacher or trainer.","Likes animals, calm under pressure, wants to care for living things: veterinary technician."],lab:{id:"cardsort",cfg:"careers-find",title:"Interests, Skills, Values",intro:"Sort each statement into Interests, Skills or Values."},intro:"Today in CarryingCareers: finding the path that fits you. Every career, of every type, starts with knowing yourself.",wrap:"Interests, skills and values all point somewhere. Keep exploring.",homework:"Write one interest, one skill and one value you have.",glossary:{interest:"An interest is something you enjoy doing or learning about.",skill:"A skill is something you can do well. Skills can be learned and practiced.",value:"A value is something that matters to you, like helping others, creativity or security.",career:"A career is the work you do over many years, often growing from job to job.",strength:"A strength is something you are naturally good at."},whys:["Careers fit better when they match what you enjoy, what you are good at, and what you care about.","Skills can be learned, so you do not need to be great at everything today.","Values matter because a job that fits them feels meaningful, not only paid."]}),Ye({id:"build",subject:"careers",title:"Building and moving things",blurb:"Construction, manufacturing, transportation.",pics:["career-clusters"],videos:[],points:["Architecture and Construction: designing and building homes, roads and bridges","Manufacturing: making products in factories, from cars to cookies","Transportation, Distribution and Logistics: moving people and goods by road, rail, air and sea","Many of these careers use skilled trades, with paid training on the job"],examples:["Electrician, carpenter, plumber and architect all work on the buildings we use.","A welder or machinist helps make everything from bicycles to airplane parts.","Pilots, truck drivers, ship captains and warehouse coordinators keep goods moving."],lab:{id:"cardsort",cfg:"careers-build",title:"Match the job",intro:"Sort each job into its career cluster."},intro:"Today: careers that build things and move them from place to place.",wrap:"These clusters keep our world built and delivered.",homework:"Name one thing you used today and list who helped build or deliver it.",glossary:{trade:"A trade is a skilled job learned by training and practice, like plumbing or welding.",apprentice:"An apprentice learns a trade while working and earning pay.",logistics:"Logistics is planning how goods are stored and moved.",manufacturing:"Manufacturing means making products, often with machines.",architect:"An architect designs buildings."},whys:["Trades are in demand because buildings and machines always need people to make and fix them.","Logistics matters because nothing reaches a store or home without being moved.","Apprenticeships let people earn while they learn."]}),Ye({id:"care",subject:"careers",title:"Caring, teaching and helping",blurb:"Health, education and human services.",pics:["career-clusters"],videos:[],points:["Health Science: keeping people well, from nurses to lab technicians","Education and Training: teaching and coaching at every age","Human Services: counselors, social workers and child care workers who support families","These careers need people skills such as listening and patience"],examples:["Nurse, dentist, paramedic and physical therapist are Health Science careers.","Teacher, librarian, tutor and swim coach all work in Education and Training.","A school counselor or social worker helps people through hard times."],lab:{id:"cardsort",cfg:"careers-care",title:"Who helps whom",intro:"Sort each job into its career cluster."},intro:"Today: careers where the work is helping people learn, heal and grow.",wrap:"Helping careers grow because people always need care and learning.",homework:"Interview someone who helps others in their work and ask what they enjoy most.",glossary:{nurse:"A nurse cares for patients and works with doctors.",counselor:"A counselor listens and helps people make plans and solve problems.",therapist:"A therapist helps people recover or feel better, in body or mind.",education:"Education careers help people learn.",patience:"Patience is staying calm while something takes time."},whys:["People skills matter because these jobs are about people, not only tasks.","Training varies, from short certificates to many years of study.","These careers are steady because every community needs health and learning."]}),Ye({id:"public",subject:"careers",title:"Safety, law and government",blurb:"Public safety, law and public service.",pics:["career-clusters"],videos:[],points:["Law, Public Safety, Corrections and Security: protecting people and keeping rules fair","Government and Public Administration: running towns, states and the country","Careers include firefighter, police officer, paralegal, judge and city planner","Public service means working for the community"],examples:["Firefighters and emergency medical workers respond when someone needs help fast.","A paralegal helps lawyers research and prepare cases.","A city planner decides where roads, parks and homes can go."],lab:{id:"cardsort",cfg:"careers-public",title:"Public service sort",intro:"Sort each job into its cluster."},intro:"Today: careers that protect people and run our communities.",wrap:"Public careers keep communities safe and fair.",homework:"Find one public service in your town and write what it does.",glossary:{public:"Public means belonging to or serving everyone in a community.",paralegal:"A paralegal assists lawyers with research and paperwork.",planner:"A city planner decides how land and buildings are used.",security:"Security means keeping people and places safe.",law:"Law is the set of rules a community agrees to follow."},whys:["Public service careers keep communities safe and orderly.","Many need training, tests or a degree because the work carries big responsibility.","Planners and officials shape daily life, from roads to parks."]}),Ye({id:"tech",subject:"careers",title:"Technology, science and engineering",blurb:"IT and STEM careers.",pics:["career-clusters"],videos:[],points:["Information Technology: building software, networks and keeping data safe","Science, Technology, Engineering and Math (STEM): solving problems with research and design","Careers include web developer, network administrator, chemist, civil engineer and data analyst","Tools change fast, so these careers reward learning new skills"],examples:["A web developer builds the pages and apps people use every day.","A civil engineer designs bridges and water systems.","A data analyst finds patterns in numbers to help people decide."],lab:{id:"cardsort",cfg:"careers-tech",title:"Tech and STEM sort",intro:"Sort each job into IT or STEM."},intro:"Today: careers that build digital tools and solve science and engineering problems.",wrap:"Technology and science careers keep changing, so keep learning.",homework:"Pick one tech or science job and write a problem it solves.",glossary:{engineer:"An engineer designs and builds solutions to problems.",developer:"A developer writes software.",data:"Data is information, often numbers, that can be studied for patterns.",stem:"STEM stands for science, technology, engineering and math.",network:"A network connects computers so they can share information."},whys:["STEM careers solve real problems, like clean water and safe bridges.","Technology changes fast, so learning never stops.","Math and logic are useful in many different careers."]}),Ye({id:"business",subject:"careers",title:"Business, money and sales",blurb:"Business, finance and marketing.",pics:["career-clusters"],videos:[],points:["Business Management and Administration: organizing people, plans and offices","Finance: banking, accounting and investing","Marketing, Sales and Service: helping people learn about and buy products","Entrepreneurs start their own businesses"],examples:["An office manager keeps a team running smoothly.","An accountant tracks money and prepares taxes.","A sales representative explains products and helps customers choose."],lab:{id:"cardsort",cfg:"careers-biz",title:"Business sort",intro:"Sort each job into its cluster."},intro:"Today: careers in business, money and sales.",wrap:"Business careers need organizing, numbers and communication.",homework:"Sketch a small business idea and who your customers would be.",glossary:{entrepreneur:"An entrepreneur starts and runs a business.",accountant:"An accountant records and checks money.",marketing:"Marketing is how a business tells people about its products.",customer:"A customer is a person who buys a product or service.",profit:"Profit is the money left after costs are paid."},whys:["Businesses need people who can plan, count and communicate.","Entrepreneurs take risks to create something new.","Finance keeps money safe and growing."]}),Ye({id:"create",subject:"careers",title:"Arts, media and hospitality",blurb:"Creative careers, travel and food.",pics:["career-clusters"],videos:[],points:["Arts, A/V Technology and Communications: design, film, music, writing and broadcasting","Hospitality and Tourism: hotels, restaurants, events and travel","Careers include graphic designer, journalist, chef, hotel manager and event planner","Creative careers often start with a portfolio of your work"],examples:["A graphic designer makes logos, posters and websites.","A journalist researches and reports the news.","A chef or hotel manager makes guests feel welcome."],lab:{id:"cardsort",cfg:"careers-create",title:"Creative sort",intro:"Sort each job into its cluster."},intro:"Today: careers in creativity, communication and welcoming people.",wrap:"Creative and service careers share one thing: they make people's day better.",homework:"Start a portfolio page: write down three pieces of work you are proud of.",glossary:{portfolio:"A portfolio is a collection of your best work to show others.",designer:"A designer plans how something will look and work.",journalist:"A journalist gathers facts and reports them.",hospitality:"Hospitality means welcoming and caring for guests.",tourism:"Tourism is travel for fun or discovery."},whys:["A portfolio proves your skill better than words.","Creative jobs can be competitive, so practice and projects matter.","Hospitality teaches teamwork and calm under pressure."]}),Ye({id:"land",subject:"careers",title:"Food, farms and nature",blurb:"Agriculture, food and natural resources.",pics:["career-clusters"],videos:[],points:["Agriculture, Food and Natural Resources: growing food, caring for animals and protecting the land","Careers include farmer, veterinary technician, park ranger, forester and food scientist","Technology like drones and sensors is changing farming","These careers often mix outdoor work with science"],examples:["A farmer plans crops, soil and water through the seasons.","A park ranger protects wildlife and helps visitors.","A food scientist tests how to make food safe and tasty."],lab:{id:"cardsort",cfg:"careers-land",title:"Land and food sort",intro:"Sort each job into its group."},intro:"Today: careers that grow our food and protect our natural world.",wrap:"Everyone depends on food, water and land, so these careers matter.",homework:"Trace one meal back to the farm: list every job it passed through.",glossary:{agriculture:"Agriculture is farming: growing crops and raising animals.",forester:"A forester manages forests.",ranger:"A park ranger protects parks and wildlife.",sustainable:"Sustainable means meeting needs without using up resources for the future.",veterinary:"Veterinary means caring for animal health."},whys:["Food, water and land are needs for everyone, so the work is always needed.","Science helps farming use less water and protect soil.","Outdoor careers protect nature for the future."]}),Ye({id:"plan",subject:"careers",title:"Making a plan",blurb:"Skills, resume and interview.",pics:["career-path"],videos:[],points:["Explore first, then research what jobs need","Choose a training route: school, trade, certificate, apprenticeship, military or work","Build a resume: a one-page summary of your skills and experience","Practice interviews: greet, listen, answer clearly and ask a question"],examples:["Resume line: 'Organized a school fundraiser and raised 200 dollars.'","Interview tip: answer with a short story that shows a skill.","Follow-up: send a thank-you note within a day."],lab:{id:"cardsort",cfg:"careers-plan",title:"Steps in order",intro:"Put the steps of a career plan in order."},intro:"Today: turning an idea into a plan you can start now.",wrap:"A plan makes a big goal feel doable. Take the next step.",homework:"Draft a five-line resume with a skill, a project and a goal.",glossary:{resume:"A resume is a short page listing your skills, experience and goals.",interview:"An interview is a conversation where an employer learns about you.",certificate:"A certificate shows you finished training or passed a test.",internship:"An internship is short-term work to learn on the job.",network:"To network is to meet people who can share advice and opportunities."},whys:["A plan turns a big dream into small steps.","A resume helps an employer see your skills fast.","Practice makes interviews less scary."]}),Ye({id:"money",subject:"careers",title:"Pay, paths and choices",blurb:"Money basics and training routes.",pics:["pay-paths"],videos:[],points:["Gross pay is before taxes; net pay is what you take home","Training routes: certificate, trade school, apprenticeship, college, military or entering work directly","Compare careers by daily tasks, pay, training time and chance to grow","Budget: spend less than you earn, and save for goals"],examples:["An apprenticeship pays you while you learn, often for three to five years.","A certificate can take months, a bachelor's degree about four years.","Net pay is smaller than gross pay because of taxes and deductions."],lab:{id:"cardsort",cfg:"careers-money",title:"Money in, money out",intro:"Sort each item into Pay (money in) or Costs (money out)."},intro:"Today: understanding pay and choosing a route that works for you.",wrap:"There are many roads to a good career. Compare before you choose.",homework:"Compare two careers: tasks, training time and pay.",glossary:{gross:"Gross pay is what you earn before taxes.",net:"Net pay is what you take home after taxes and deductions.",budget:"A budget is a plan for spending and saving money.",apprenticeship:"An apprenticeship is paid on-the-job training combined with classes.",salary:"A salary is fixed pay for a year of work."},whys:["Comparing helps you choose with facts, not just guesses.","Net pay matters because it is the money you can actually spend.","Many routes lead to good careers, not just one."]})],life:[Ye({id:"money",subject:"life",title:"Earning, spending and saving",blurb:"Needs, wants and saving.",pics:["life-wheel"],videos:[],points:["Income is money you earn; expenses are money you spend","Needs come first (food, home, health), wants come next","Pay yourself first: set aside part of everything you get","Small amounts saved often grow into big ones"],examples:["Needs: groceries, rent, medicine. Wants: games, snacks, new shoes.","Save 10 out of every 100 you receive and after ten rounds you have 100 saved.","Before a big purchase, wait one day. If you still want it, then decide."],lab:{id:"cardsort",cfg:"life-money",title:"Needs, wants, savings",intro:"Sort each item into Needs, Wants or Savings."},intro:"Today in Life Lessons: the money basics every independent person uses.",wrap:"Needs first, then wants, and always a little for the future.",homework:"List three needs, three wants and one thing you could save for.",glossary:{income:"Income is money you receive, like pay or allowance.",expense:"An expense is money you spend.",need:"A need is something you must have to live and stay healthy.",want:"A want is something nice to have but not necessary.",savings:"Savings is money you set aside for later."},whys:["Needs come first because they keep you healthy and housed.","Paying yourself first makes saving automatic instead of leftover.","Waiting a day stops impulse buys."]}),Ye({id:"budget",subject:"life",title:"Budgets: where your money goes",blurb:"The 50/30/20 plan.",pics:["budget-split"],videos:[],points:["A budget is a plan for every dollar before you spend it","A simple guide: about 50% needs, 30% wants, 20% savings and debt","Track spending for a month to see where money really goes","Review and adjust: a budget is a living plan"],examples:["Earn 1000: about 500 for needs, 300 for wants, 200 for savings or paying debt.","Streaming, eating out and games are wants you can trim first.","If rent is more than half your income, look for ways to lower other costs or raise income."],lab:{id:"cardsort",cfg:"life-budget",title:"Budget sort",intro:"Sort each item into its part of the budget."},intro:"Today: building a budget you can actually follow.",wrap:"A budget is not a punishment. It is a plan that gives your money a job.",homework:"Track everything you spend for three days and sort it into needs, wants and savings.",glossary:{budget:"A budget is a plan for how you will spend and save money.",rent:"Rent is money paid regularly to live in a home you do not own.",debt:"Debt is money you owe.",emergency:"An emergency fund is savings kept for surprises like a repair or a medical bill.",track:"To track spending is to write down what you buy."},whys:["Planning first stops money from disappearing.","The 50/30/20 split is a guide, not a law: adjust it to your life.","Tracking shows habits you did not notice."]}),Ye({id:"credit",subject:"life",title:"Credit, debt and scams",blurb:"Borrowing wisely and spotting scams.",pics:["life-wheel"],videos:[],points:["Credit lets you borrow now and pay later, with interest","A credit score shows lenders how reliably you repay","Pay on time and keep balances low to build good credit","Scams rush you and ask for odd payments: slow down and verify"],examples:["Paying only the minimum on a card means interest keeps growing.","A text says you won a prize if you pay a fee: that is a scam.","Never share passwords, PINs or one-time codes with someone who contacts you first."],lab:{id:"cardsort",cfg:"life-credit",title:"Safe or scam",intro:"Sort each item into Safe habit or Warning sign."},intro:"Today: how borrowing works and how to spot a scam.",wrap:"Borrow carefully, pay on time and slow down when someone rushes you.",homework:"Write three warning signs of a scam and who you would tell.",glossary:{credit:"Credit is the ability to borrow money and pay it back later.",interest:"Interest is the extra money you pay for borrowing.",score:"A credit score is a number that shows how reliably you repay.",scam:"A scam is a trick to take your money or information.",phishing:"Phishing is a fake message pretending to be someone you trust."},whys:["Interest means borrowing costs more than the amount you borrowed.","A good score can lower the cost of borrowing later.","Scammers rely on speed and fear, so slowing down beats them."]}),Ye({id:"home",subject:"life",title:"Keeping a home",blurb:"Cleaning, laundry and basic care.",pics:["life-wheel"],videos:[],points:["Daily habits beat big clean-ups: dishes, trash, tidy","Sort laundry by color and fabric, and read the care label","Clean from top to bottom and from cleanest to dirtiest","Know where the water shut-off and fuse box are"],examples:["Wash dishes soon after eating so food does not harden.","A red sock in a white wash can turn everything pink.","If a pipe leaks, turn off the water at the shut-off, then call for help."],lab:{id:"cardsort",cfg:"life-home",title:"Laundry steps",intro:"Put the laundry steps in order."},intro:"Today: keeping a home running smoothly.",wrap:"A little each day keeps a home comfortable.",homework:"Do one household task fully this week and note how long it took.",glossary:{laundry:"Laundry is clothes and linens that need washing.",label:"A care label tells how to wash and dry an item.",shutoff:"A shut-off valve stops water flowing to a pipe or the whole home.",routine:"A routine is something you do regularly.",detergent:"Detergent is soap for washing clothes."},whys:["Daily habits are easier than rescuing a huge mess.","Care labels prevent shrunk or ruined clothes.","Knowing the shut-off limits damage in a leak."]}),Ye({id:"food",subject:"life",title:"Cooking and food safety",blurb:"Safe, simple meals.",pics:["life-wheel"],videos:[],points:["Wash hands for 20 seconds before cooking","Keep raw meat away from ready-to-eat food","Cook to a safe temperature and chill leftovers within two hours","A plate with vegetables, protein and grains keeps energy steady"],examples:["Use one cutting board for raw chicken and another for vegetables.","Soup left on the counter all night should be thrown away.","Eggs, rice and vegetables make a cheap, balanced meal."],lab:{id:"cardsort",cfg:"life-food",title:"Do and don't",intro:"Sort each habit into Do or Don't."},intro:"Today: cooking simple meals safely.",wrap:"Clean hands, clean boards and the right temperature keep meals safe.",homework:"Plan three simple meals and a shopping list for them.",glossary:{nutrition:"Nutrition is how food helps your body grow and work.",bacteria:"Bacteria are tiny living things; some can make you sick.",leftovers:"Leftovers are cooked food saved for another meal.",thermometer:"A food thermometer checks if food is cooked enough.",protein:"Protein helps build and repair the body."},whys:["Handwashing removes germs before they reach food.","Cold slows bacteria, so chilling leftovers matters.","A balanced plate gives steady energy."]}),Ye({id:"health",subject:"life",title:"Health, sleep and getting care",blurb:"Taking care of your body and the system around it.",pics:["life-wheel"],videos:[],points:["Sleep, movement and water are the basics of health","Know your own medicines and your family health history","Make appointments ahead and write down your questions","Insurance has a premium, a deductible and copays: read what yours covers"],examples:["Teens usually need about 8 to 10 hours of sleep.","Before a doctor visit write: what hurts, since when, what helps.","A copay is a set fee you pay at a visit; a deductible is what you pay before insurance helps more."],lab:{id:"cardsort",cfg:"life-health",title:"How urgent is it?",intro:"Sort each situation into the right level of care."},intro:"Today: looking after your health and finding care when you need it.",wrap:"Small habits keep you well, and knowing where to go keeps you safe.",homework:"Write your doctor's name, your emergency contact and one health habit to improve.",glossary:{insurance:"Health insurance helps pay for medical care.",deductible:"A deductible is what you pay before insurance pays more.",copay:"A copay is a fixed fee you pay for a visit or medicine.",pharmacy:"A pharmacy fills prescriptions and answers medicine questions.",symptom:"A symptom is a sign something may be wrong in your body."},whys:["Sleep helps your body repair and your mind learn.","Writing questions down means you remember them in the room.","Knowing your coverage prevents surprise bills."]}),Ye({id:"mind",subject:"life",title:"Feelings, stress and asking for help",blurb:"Looking after your mind.",pics:["life-wheel"],videos:[],points:["All feelings are information; none are bad","Stress is normal; breathing, movement and sleep help","Talking to someone you trust makes problems smaller","If you feel unsafe or hopeless, tell a trusted adult right away or call or text a crisis line such as 988 in the US"],examples:["Name the feeling: 'I feel nervous about the test.' Naming it makes it easier to handle.","Try breathing in for four counts and out for six.","Asking for help is a strength: coaches, counselors and friends are there for it."],lab:{id:"cardsort",cfg:"life-mind",title:"Helpful or unhelpful",intro:"Sort each response to stress."},intro:"Today: understanding feelings and when to ask for help.",wrap:"You do not have to carry hard things alone.",homework:"Write two things that help you calm down and one person you can talk to.",glossary:{stress:"Stress is the body's reaction to pressure or change.",anxiety:"Anxiety is strong worry or fear that is hard to switch off.",coping:"Coping is the way you handle hard feelings or situations.",boundary:"A boundary is a limit that protects your wellbeing.",counselor:"A counselor is a trained person who helps with feelings and problems."},whys:["Naming feelings reduces their power.","Breathing slowly calms the body's alarm.","Support makes hard things lighter."]}),Ye({id:"safety",subject:"life",title:"Staying safe: first aid and emergencies",blurb:"Know what to do.",pics:["first-aid"],videos:[],points:["In an emergency call 911 (or your local number) and stay calm","Know two exits from every place and a family meeting spot","For a small burn, cool it under cool running water for several minutes","Keep a first aid kit and know where it is"],examples:["Tell the operator where you are first, then what happened.","Pressure with a clean cloth helps slow bleeding from a cut while you get help.","Smoke alarms need new batteries and a test every month."],lab:{id:"cardsort",cfg:"life-safety",title:"Emergency steps",intro:"Put the emergency steps in order."},intro:"Today: staying calm and safe when something goes wrong.",wrap:"Practice makes calm. Plan now and you will think more clearly later.",homework:"Find your home's two exits and agree on a meeting spot.",glossary:{emergency:"An emergency is a sudden situation needing immediate help.",dispatcher:"A dispatcher answers emergency calls and sends help.",firstaid:"First aid is basic help given before professionals arrive.",evacuate:"To evacuate is to leave a dangerous place quickly and safely.",kit:"A first aid kit holds bandages and basic supplies."},whys:["Calm helps you give clear information.","Planning exits saves time when seconds matter.","Cooling a burn limits damage."]}),Ye({id:"digital",subject:"life",title:"Digital safety and privacy",blurb:"Staying safe online.",pics:["life-wheel"],videos:[],points:["Use long, different passwords or a password manager","Turn on two-step sign-in for important accounts","Think before you post: the internet remembers","Do not click unexpected links or share one-time codes"],examples:["A passphrase of four random words is long and easy to remember.","A friend's account suddenly asks for money: call them to check.","Private information includes your address, school and birthdate."],lab:{id:"cardsort",cfg:"life-digital",title:"Strong or risky",intro:"Sort each habit into Strong habit or Risky habit."},intro:"Today: protecting your accounts and your privacy.",wrap:"A few habits protect most of your digital life.",homework:"Turn on two-step sign-in for one account and change one weak password.",glossary:{password:"A password is a secret code that protects an account.",privacy:"Privacy is control over who knows things about you.",twostep:"Two-step sign-in asks for a second proof, like a code, after your password.",footprint:"A digital footprint is the trail of what you do and post online.",malware:"Malware is harmful software."},whys:["Unique passwords stop one leak from opening everything.","A second step blocks most account break-ins.","Posts can be copied, so think first."]}),Ye({id:"people",subject:"life",title:"Relationships, boundaries and consent",blurb:"Respect in every relationship.",pics:["life-wheel"],videos:[],points:["Healthy relationships feel respectful, safe and equal","Consent is a clear, freely given yes, and anyone can change their mind","You can say no kindly and firmly, and accept someone else's no","Trusted adults, friends and counselors can help when something feels wrong"],examples:["A good friend asks before borrowing and thanks you after.","If someone says no or seems unsure, stop and respect it.","If a relationship makes you afraid or controlled, tell a trusted adult."],lab:{id:"cardsort",cfg:"life-people",title:"Respectful or not",intro:"Sort each behavior."},intro:"Today: respect, boundaries and consent.",wrap:"Respect goes both ways.",homework:"Write one boundary you have and a kind way to say it.",glossary:{boundary:"A boundary is a limit you set for how you want to be treated.",consent:"Consent is freely given permission, and it can be taken back.",respect:"Respect means treating others as they deserve.",assertive:"Being assertive is saying what you need clearly and kindly.",trust:"Trust is believing someone will be honest and safe."},whys:["Respect keeps everyone safe and valued.","Consent can change at any time, so check in.","Asking for help is part of staying safe."]}),Ye({id:"time",subject:"life",title:"Time, goals and organization",blurb:"Planning your days.",pics:["life-wheel"],videos:[],points:["Write goals as small steps with dates","Sort tasks into urgent and important","Use one calendar and one to-do list","Rest is part of the plan: schedule breaks"],examples:["Goal: save 200. Steps: save 20 a week for ten weeks.","Homework due tomorrow is urgent and important; sorting your closet is neither.","A short break every hour keeps focus fresh."],lab:{id:"cardsort",cfg:"life-time",title:"Goal steps",intro:"Put the goal-setting steps in order."},intro:"Today: making a plan and sticking to it.",wrap:"Small steps on a calendar beat big plans in your head.",homework:"Write one goal, three steps and put the first step on your calendar.",glossary:{goal:"A goal is something you want to achieve.",priority:"A priority is something that matters most right now.",deadline:"A deadline is the date something must be done.",procrastinate:"To procrastinate is to put off something you need to do.",habit:"A habit is something you do automatically."},whys:["Small steps make big goals feel doable.","Sorting by urgent and important protects your time.","Breaks keep you from burning out."]}),Ye({id:"adult",subject:"life",title:"Adult paperwork",blurb:"IDs, taxes, renting and voting.",pics:["life-wheel"],videos:[],points:["Keep your birth certificate, Social Security card and passport locked at home","Taxes: employers withhold pay, and many people file a return each year","Renting: read the lease, the deposit and who fixes what","Citizens can register to vote: every election is a chance to have a say"],examples:["Carry a photo ID, not your Social Security card.","A security deposit is money held in case of damage and is usually returned.","Register to vote early and check the dates for your area."],lab:{id:"cardsort",cfg:"life-adult",title:"Lock up or carry",intro:"Sort each item into where it belongs."},intro:"Today: the paperwork of becoming an adult in the US.",wrap:"Know what you have, keep it safe and read before you sign.",homework:"List your important documents and where each is kept.",glossary:{lease:"A lease is a contract to rent a home.",deposit:"A deposit is money held until you leave a rental in good shape.",tax:"A tax is money paid to the government for public services.",register:"To register is to sign up, for example to vote.",contract:"A contract is a written agreement."},whys:["Important papers are hard to replace, so lock them up.","Reading the lease prevents surprises.","Voting is how citizens choose leaders."]}),Ye({id:"travel",subject:"life",title:"Getting around",blurb:"Maps, transit and car basics.",pics:["life-wheel"],videos:[],points:["Read a map or app: starting point, destination and time","Check the schedule and always have a backup plan","Share your plan with someone you trust","Cars need insurance, fuel and checks like tire pressure"],examples:["Leave ten minutes early so a late bus does not make you late.","Charge your phone and carry fare before a trip.","Check tire pressure and fuel before a long drive."],lab:{id:"cardsort",cfg:"life-travel",title:"Plan a trip",intro:"Put the trip planning steps in order."},intro:"Today: getting from place to place safely.",wrap:"Plan, tell someone and leave early.",homework:"Plan a trip across town: route, time, cost and backup.",glossary:{route:"A route is the path you take to get somewhere.",transit:"Transit is public transportation like buses and trains.",fare:"A fare is the price of a ride.",insurance:"Car insurance helps pay if there is an accident.",navigate:"To navigate is to find your way."},whys:["Backup plans help when things change.","Telling someone keeps you safe.","Basic checks prevent breakdowns."]}),Ye({id:"decide",subject:"life",title:"Solving problems and deciding",blurb:"A simple way to choose.",pics:["life-wheel"],videos:[],points:["Name the problem clearly","List your options and what each could cost or gain","Ask someone you trust and look up facts","Decide, act, then check how it went and learn"],examples:["Problem: I can't afford a phone. Options: save, buy used, wait.","Compare options on cost, time and risk.","If a choice did not work, you still learned something for next time."],lab:{id:"cardsort",cfg:"life-decide",title:"Decision steps",intro:"Put the decision steps in order."},intro:"Today: a repeatable way to solve problems.",wrap:"Good decisions are a skill you can practice.",homework:"Pick a real choice you face and write your options and what each costs.",glossary:{problem:"A problem is something that needs a solution.",option:"An option is a choice you could make.",tradeoff:"A tradeoff is giving up one thing to get another.",risk:"Risk is the chance something goes wrong.",reflect:"To reflect is to think about what happened and what you learned."},whys:["Naming the problem keeps you from solving the wrong one.","Comparing options shows tradeoffs.","Checking results turns mistakes into learning."]})]},FS=Object.values(Yl).flat();var zf=t=>t==="k2"||t==="g35"?"young":t==="g68"?"mid":"teen",Av=(t,e)=>{t=t.slice();for(let n=t.length-1;n>0;n--){let i=Math.floor(e()*(n+1));[t[n],t[i]]=[t[i],t[n]]}return t},Ma=(t,e,n,i,s,r,a)=>{let h=Av([n,...i.slice(0,2)],s);return{subject:t,q:e,options:h,answer:h.indexOf(n),why:r,hint:a}};function jl(t,e){let n=zf(t),i=(l,o)=>l+Math.floor(e()*(o-l+1)),s=l=>{let o=new Set;for(;o.size<2;){let d=l+i(-4,4);d!==l&&o.add(d)}return[...o].map(String)};if(t==="k2"){let l=i(1,9),o=i(1,9);return Ma("math",`What is ${l} + ${o}?`,String(l+o),s(l+o),e,`${l} plus ${o} is ${l+o}.`,"Count up from the bigger number.")}if(t==="g35"){let l=i(3,9),o=i(3,9);return Ma("math",`What is ${l} x ${o}?`,String(l*o),s(l*o),e,`${l} groups of ${o} is ${l*o}.`,"Try skip counting.")}if(n==="mid"){let l=i(2,12),o=i(2,9),d=i(1,9);return Ma("math",`What is ${l} x ${o} + ${d}?`,String(l*o+d),s(l*o+d),e,`Multiply first: ${l*o}, then add ${d}.`,"Order of operations: multiply before adding.")}let r=i(2,6),a=i(2,9),h=i(1,9);return Ma("math",`Solve for x: ${r}x + ${h} = ${r*a+h}`,String(a),s(a),e,`Subtract ${h}, then divide by ${r}: x = ${a}.`,"Undo the + first, then undo the multiplication.")}var Cv={young:[["Which word is a noun?","puppy",["quickly","jump"]],["What is the opposite of 'hot'?","cold",["warm","red"]],["Which word rhymes with 'cat'?","hat",["dog","cup"]],["What punctuation ends a question?","?",[".","!"]],["Which is a complete sentence?","The dog ran.",["The big dog.","Ran fast."]],["Which word starts with a capital letter?","Monday",["tuesday","apple"],"Days of the week are capitalized."]],mid:[["Which word is an adverb?","slowly",["quiet","table"]],["'Brave' is a synonym for...","courageous",["afraid","tired"]],["What is the plural of 'mouse'?","mice",["mouses","meese"]],["A word that sounds the same but means something else is a...","homophone",["synonym","antonym"]],["Which sentence uses a metaphor?","Time is a thief.",["He ran like the wind.","The bus is late."]],["What is the main idea?","The big point of a text",["A small detail","The title font"]]],teen:[["What is a theme?","The central message of a story",["The main character","The setting"]],["Which is a primary source?","A diary written at the time",["A textbook summary","A movie about it"]],["What does 'foreshadowing' do?","Hints at later events",["Describes the setting","Ends the story"]],["Which word is an antonym of 'verbose'?","concise",["wordy","loud"]],["Which device is 'The wind whispered'?","Personification",["Simile","Hyperbole"]],["A thesis statement...","states your main argument",["lists your sources","ends the paper"]]]},Rv={young:[["What do plants need to grow?","sunlight and water",["only candy","darkness"]],["Which is a solid?","ice",["steam","rain"]],["What is the big star in our sky by day?","the Sun",["the Moon","a planet"]],["Which animal is a mammal?","dolphin",["shark","trout"]],["What do we use our ears for?","hearing",["seeing","smelling"]],["How many legs does an insect have?","6",["8","4"]]],mid:[["What gas do plants take in?","carbon dioxide",["oxygen","helium"]],["What is the center of an atom called?","nucleus",["orbit","cell"]],["Which planet is closest to the Sun?","Mercury",["Venus","Mars"]],["Water boils at...","100 C",["50 C","0 C"]],["The powerhouse of the cell is the...","mitochondria",["nucleus","wall"]],["A hypothesis is...","a testable guess",["a final answer","a graph"]]],teen:[["What is the unit of force?","newton",["joule","watt"]],["DNA stands for...","deoxyribonucleic acid",["dynamic nuclear acid","double nitrogen atom"]],["Which is a chemical change?","rusting iron",["melting ice","tearing paper"]],["What does a catalyst do?","speeds up a reaction",["stops a reaction","adds mass"]],["Which wave needs a medium?","sound",["light","radio"]],["Natural selection favors...","traits that help survival",["the largest animals","the oldest animals"]]]},Pv={young:[["What do we call a map's key?","legend",["story","title"]],["Who was the first U.S. president?","George Washington",["Abraham Lincoln","Benjamin Franklin"]],["Which is a continent?","Africa",["Texas","Pacific"]],["Long ago, people wrote with...","quill pens",["keyboards","tablets"]],["A community helper who fights fires is a...","firefighter",["baker","pilot"]],["What is a holiday for remembering history called?","a memorial day",["a snow day","a field trip"]]],mid:[["Ancient Egyptians built...","pyramids",["castles","skyscrapers"]],["What was the Silk Road?","a trade route",["a fabric","a river"]],["The printing press helped spread...","ideas and books",["weather news","ocean maps"]],["Which river was central to Egypt?","the Nile",["the Amazon","the Thames"]],["The Renaissance began in...","Italy",["Brazil","Japan"]],["A government where people vote is a...","democracy",["monarchy","empire"]]],teen:[["What did the Industrial Revolution change?","how goods were made",["the alphabet","the calendar"]],["The Magna Carta limited the power of...","the king",["the church","merchants"]],["Which event began in 1914?","World War I",["World War II","the Civil War"]],["What is a primary cause of the Cold War?","a clash of ideologies",["a flood","a gold rush"]],["The Constitution begins with...","We the People",["I the President","In God We Trust"]],["Which ancient civilization created democracy?","Athens",["Rome","Persia"]]]},kv={young:[["Who helps sick people feel better?","a doctor",["a pilot","a baker"]],["Who builds houses?","a builder",["a singer","a dentist"]],["Who flies an airplane?","a pilot",["a farmer","a teacher"]],["Who grows food on a farm?","a farmer",["a firefighter","an artist"]],["Who puts out fires?","a firefighter",["a chef","an author"]],["Who teaches children at school?","a teacher",["a mechanic","a vet"]]],mid:[["The work someone does over many years is called a...","career",["hobby","recess"]],["A skill is...","something you can do well and improve with practice",["a kind of snack","a school building"]],["Which job mostly uses computers and code?","software developer",["plumber","chef"]],["A resume is...","a short page listing skills and experience",["a school report card","a type of tax"]],["What does an electrician do?","installs and repairs wiring",["grows crops","writes laws"]],["A good first step in choosing a career is to...","explore what you enjoy and are good at",["pick only the highest pay","wait until you are 40"]]],teen:[["Which cluster includes nurses and physical therapists?","Health Science",["Finance","Manufacturing"]],["An apprenticeship combines...","paid on-the-job training with classroom learning",["only reading about jobs","unpaid volunteering only"]],["A transferable skill is...","a skill useful in many jobs, like communication",["a skill only for one machine","a type of degree"]],["Gross pay minus taxes and deductions equals...","net pay",["interest","tuition"]],["Which question best compares two careers?","What does a normal day look like, and what does it pay?",["Which has the coolest name?","Which is closest to my house?"]],["A certification shows that you...","passed a test proving a specific skill",["finished high school","own a business"]]]},Iv={young:[["What do you need to stay healthy?","food, water and sleep",["only candy","only games"]],["Who can you tell if something feels unsafe?","a trusted grown-up",["nobody","a stranger"]],["What should you do before eating?","wash your hands",["run around","close your eyes"]],["If you save a little money each week, it will...","grow",["disappear","turn into toys"]],["What number do you call in an emergency in the US?","911",["123","000"]]],mid:[["A need is something you...","must have to live and stay healthy",["just want","saw on an ad"]],["What is a budget?","a plan for your money",["a type of bank","a tax"]],["How long should you wash your hands?","about 20 seconds",["2 seconds","10 minutes"]],["What makes a password strong?","long and different for each account",["your name","1234"]],["If a stranger online asks for your address you should...","not share it and tell an adult",["send it","ask for theirs"]],["What is consent?","a clear yes that can change",["staying quiet","a one-time yes forever"]]],teen:[["In the 50/30/20 guide, 20% is for...","savings and debt",["rent","entertainment only"]],["What is interest on a loan?","the extra cost of borrowing",["a bonus","a fee you never pay"]],["Which should you keep locked at home?","Social Security card",["transit pass","photo ID"]],["What is two-step sign-in?","a second proof after your password",["two passwords the same","signing in twice"]],["A copay is...","a set fee for a visit or medicine",["a type of tax","a doctor's name"]],["What is a good first step in a decision?","name the problem clearly",["pick fast","ask nobody"]],["A lease is...","a contract to rent a home",["a car loan","a savings plan"]]]},Of={ela:Cv,science:Rv,history:Pv,careers:kv,life:Iv};function Jc(t,e,n=Math.random){if(t==="math")return jl(e,n);let i=zf(e),s=Of[t][i][Math.floor(n()*Of[t][i].length)];return Ma(t,s[0],s[1],s[2],n,s[3])}var Zc="unify.social.v1",fr=()=>new Date().toISOString().slice(0,10),Lv=()=>({met:!1,fr:0,talks:0,lastDay:"",lastAt:0,topics:[],facts:{},log:[],quiz:{right:0,total:0},mood:0,helped:0,hurt:0,classNotes:[],overheard:[],seenInClass:0,called:0}),Jl=()=>({v:1,mem:{},profile:{name:"",avatar:lr(),facts:{},stats:{talks:0,quizRight:0,quizTotal:0,hands:0},created:Date.now(),hasAvatar:!1}}),En=Jl(),Hf=0,dr=new Set;function Vf(){try{let t=JSON.parse(localStorage.getItem(Zc)||"null");t&&t.v===1&&(En={...Jl(),...t,profile:{...Jl().profile,...t.profile}},En.profile.avatar={...lr(),...En.profile.avatar||{}})}catch{}}function Ta(){clearTimeout(Hf),Hf=setTimeout(()=>{try{localStorage.setItem(Zc,JSON.stringify(En))}catch{}},120)}Vf();try{addEventListener("storage",t=>{t.key===Zc&&(Vf(),dr.forEach(e=>e()))})}catch{}var Ce={get profile(){return En.profile},setProfile(t){En.profile={...En.profile,...t},Ta(),dr.forEach(e=>e())},learn(t,e){En.profile.facts[t]=e,Ta()},mem(t){let e=String(t);return En.mem[e]??(En.mem[e]=Lv())},peek(t){return En.mem[String(t)]},edit(t,e){e(Ce.mem(t)),Ta(),dr.forEach(n=>n())},friends(){return Object.entries(En.mem).filter(([,t])=>t.met).map(([t,e])=>({id:t,mem:e})).sort((t,e)=>e.mem.fr-t.mem.fr)},onChange(t){return dr.add(t),()=>dr.delete(t)},reset(){En=Jl(),Ta(),dr.forEach(t=>t())},save:Ta},ds=t=>t>=85?"best friend":t>=60?"close friend":t>=30?"friend":t>=10?"classmate":"new face",Kc=t=>Math.min(5,Math.ceil(t/20));function fs(t,e,n){Ce.edit(t,i=>{i.log.push({who:e,text:n.slice(0,220),t:Date.now()}),i.log.length>24&&i.log.splice(0,i.log.length-24)})}function Qc(t,e){Ce.edit(t,n=>{n.fr=Math.max(0,Math.min(100,n.fr+e)),e<0&&n.hurt++})}var Rt=(t,e)=>e[Math.floor(t()*e.length)],Jt=t=>t.charAt(0).toUpperCase()+t.slice(1),On={math:"math",ela:"reading and writing",science:"science",history:"history",careers:"careers",life:"life skills"},Dv=["soccer","drawing","video games","reading","baking","music","dancing","robots","swimming","chess","skateboarding","gardening","photography","basketball"],Fv=["pizza","tacos","pasta","sushi","pancakes","fried rice","burgers","dumplings"],Nv=[["Why did the student eat their homework?","Because the teacher said it was a piece of cake!"],["What do you call a sleeping bull?","A bulldozer!"],["Why was the math book sad?","It had too many problems."],["What did the ocean say to the beach?","Nothing, it just waved."],["Why can't you trust atoms?","They make up everything!"],["What has hands but can't clap?","A clock!"],["Why did the scarecrow win an award?","He was outstanding in his field."],["What kind of tree fits in your hand?","A palm tree!"],["Why do bees have sticky hair?","Because they use honeycombs."],["What do you call cheese that isn't yours?","Nacho cheese!"]],pr={cheerful:{yes:["Yay!","Oh, totally!","Ooh!"],hm:["Hmm, let's see!","Good question!"],wow:["No way, that's awesome!","I love that!"],bye:["See you soon!","Bye bye, have a sunny day!"]},shy:{yes:["Um, yeah.","...Okay."],hm:["Uh... I think...","Hmm, um..."],wow:["Oh! Really? That's... nice.","Wow. Um, cool."],bye:["Um, bye.","Okay... see you."]},sporty:{yes:["Yep!","Heck yeah!"],hm:["Okay, huddle up.","Let me think, coach mode."],wow:["Let's gooo!","That's a W!"],bye:["Catch you on the field!","Hustle, hustle!"]},nerdy:{yes:["Correct.","Indeed."],hm:["Technically speaking,","Fun fact:"],wow:["Fascinating!","That's statistically cool."],bye:["Until next time. Cite your sources.","Farewell!"]},artsy:{yes:["Mm, yes.","Beautiful."],hm:["Let me paint you a picture...","Hmm, imagine this:"],wow:["That's so inspiring!","Oh, the colors in that!"],bye:["Stay colorful!","Goodbye, friend, go make something."]},funny:{yes:["Ha! Yes.","You bet."],hm:["Okay, hear me out.","So, plot twist:"],wow:["Shut the front door!","Okay that's actually hilarious."],bye:["I'd say 'break a leg' but we have PE next.","Later, alligator!"]},curious:{yes:["Ooh, yes!","Wait, really?"],hm:["Hmm, why though?","I wonder..."],wow:["Tell me more!","That is so interesting!"],bye:["I have so many more questions! Bye!","See you! Don't forget to ask 'why'."]},bossy:{yes:["Obviously.","Correct."],hm:["Listen.","Here's the plan:"],wow:["Good. I approve.","Not bad. Not bad at all."],bye:["Don't be late.","Dismissed! ...kidding. Mostly."]},dreamy:{yes:["Mm, yes...","Oh, yes."],hm:["I was just wondering...","Hmm, imagine..."],wow:["Ooh, that's like a story.","That sounds magical."],bye:["Goodbye... see you in the clouds.","Bye. I'll daydream about it."]},kind:{yes:["Of course!","Happy to!"],hm:["Let me think about it.","Good thought."],wow:["That's wonderful!","I'm so glad."],bye:["Take care of yourself!","Bye! I'm rooting for you."]}},Gf=(t,e)=>{let n=Sa(t.spec).filter(i=>i.key!=="shoes");return Rt(e,n)},Uv={how:"how our day was going",class:"school subjects",hobby:"hobbies",you:"each other's stories",food:"food",gossip:"the latest hallway news",joke:"a joke",help:"studying",quiz:"a quiz question",compliment:"style",invite:"hanging out"},Ea=class{constructor(e,n){this.npc=e;this.ctx=n;this.used=new Set;this.turns=0;this.history=[];this.waiting=null;this.r=xi(e.id*977+Math.floor(Date.now()/6e4))}get feat(){return this._feat??(this._feat=Gf(this.npc,xi(this.npc.id*13+5)))}get mem(){return Ce.mem(this.npc.id)}get me(){return Ce.profile.name||"friend"}v(e,n={}){let i=this.npc,s=this.mem,r={me:this.me,first:i.first,grade:i.grade,hobby:s.facts.hobby??"",interest:i.interests[0],food:i.food,dream:i.dream,...n};return e.replace(/\{(\w+)\}/g,(a,h)=>r[h]??"")}pc(e){return this.v(e[this.npc.personality]??e.d)}flavor(e,n=.33){return this.r()<n?`${Rt(this.r,pr[this.npc.personality].yes)} ${e}`:e}reply(e,n={}){let i={text:e,options:n.options??this.menu(),mood:n.mood??"happy",delta:n.delta??0,end:n.end,quiz:n.quiz};return this.turns++,this.history.push({who:"npc",text:e}),fs(this.npc.id,"npc",e),i.delta&&Qc(this.npc.id,i.delta),i}note(e){this.used.add(e),Ce.edit(this.npc.id,n=>{n.topics.push(e),n.topics.length>24&&n.topics.shift(),n.lastDay=fr(),n.lastAt=Date.now()})}greet(){let e=this.npc,n=this.mem,i=!n.met,s=Date.now()-n.lastAt,r=n.lastDay&&n.lastDay!==fr()?Math.max(1,Math.round((Date.parse(fr())-Date.parse(n.lastDay))/864e5)):0,a=this.me,h,l="happy",o=0,d=Gf(e,this.r).phrase;if(i)h=this.pc({cheerful:`Hi hi! I'm ${e.first}! I'm in grade ${e.grade}. Are you new here? I love your ${Sa(Ce.profile.avatar).find(u=>u.key==="top")?.phrase??"style"}!`,shy:`Oh! Um... hi. I'm ${e.first}. ...Are you ${a}?`,sporty:`Hey! I'm ${e.first}. You look fast. You play anything?`,nerdy:`Hello. I'm ${e.first}, grade ${e.grade}. Did you know this hall has exactly 44 rows of tiles? ...Sorry. Hi.`,artsy:`Hi! I'm ${e.first}. I love the colors you're wearing. Is that on purpose?`,funny:`Hey, I'm ${e.first}. Don't worry, I'm funnier than I look.`,curious:`Hi! I'm ${e.first}! Wait, who are you? What do you like? Tell me everything!`,bossy:`Hi. I'm ${e.first}. I run the ${e.interests[0]} club. You should join.`,dreamy:`Oh... hi. I'm ${e.first}. I was just imagining we were all on a ship. Welcome aboard.`,kind:`Hi there! I'm ${e.first}. Welcome! Can I help you find anything?`,d:`Hi! I'm ${e.first}.`}),Ce.profile.name&&(h+=` Nice to meet you, ${a}!`),Ce.edit(e.id,u=>{u.met=!0,u.fr=Math.max(u.fr,2)}),Ce.profile.stats.talks++,o=1,l=e.personality==="shy"?"shy":"happy";else if(n.hurt>=2&&n.fr<12)h=this.pc({d:"Oh. Hi.",funny:"Oh. It's you. Hi, I guess.",kind:"Hi. I'm still a bit upset, but hi."}),l="annoyed";else{let u=ds(n.fr),c=u==="best friend"?`There you are, ${a}! My favorite person!`:u==="close friend"?`${a}! I was hoping I'd see you!`:u==="friend"?`Hey ${a}!`:`Hi again, ${a}.`,f="";s<8*6e4&&n.lastAt?f=Rt(this.r,["Back so soon?","Missed me already?","Did you forget something?"]):n.lunchBuddy&&this.ctx.kind==="lunch"?f="Still on for lunch together?":n.facts.hobby&&this.r()<.6?f=`How's ${n.facts.hobby} going?`:n.facts.mood&&["sad","tired","nervous","stressed","worried","lonely"].includes(n.facts.mood)&&this.r()<.8?f=`Are you feeling less ${n.facts.mood} than last time?`:n.quiz.total>0&&this.r()<.5?f=n.quiz.right>=n.quiz.total/2?"You were so good at that quiz stuff last time.":"Want another try at those quiz questions?":n.topics.length?f=`Last time we talked about ${Uv[n.topics[n.topics.length-1]]??"stuff"}. That was fun.`:f="";let g=this.ctx.place==="class"?Rt(this.r,["Shh! Whisper, the teacher is right there.","Psst, quietly!","Hi! Quick, before she looks over."]):r>=2?`It's been ${r} days!`:this.ctx.kind==="arrive"?Rt(this.r,["Morning already!","Ready for today?"]):this.ctx.kind==="lunch"?Rt(this.r,["I'm starving.","Lunch smells good today."]):this.ctx.kind==="dismiss"?"Almost time to go home!":this.ctx.kind==="class"?"Shouldn't we both be in class? ...I won't tell.":"";h=`${c} ${f||g}`.trim(),o=r?1:0,Ce.profile.stats.talks++}return Ce.edit(e.id,u=>{u.lastDay=fr(),u.lastAt=Date.now(),u.talks++}),this.reply(h,{mood:l,delta:o,options:this.menu()})}menu(){let e=this.npc,n=this.mem,i=[],s=(h,l)=>{i.length<5&&i.push({id:h,label:l})},a=[["how","How's your day going?",!0],["hobby","What do you do for fun?",!0],["class","What's your favorite subject?",!0],["you","Tell me about yourself",!0],["quiz","Quiz me!",e.personality==="nerdy"||e.personality==="curious"||n.fr>=10],["gossip","Heard anything interesting?",n.fr>=8],["compliment",`I like your ${this.feat.noun}`,!0],["food","What's your favorite food?",!0],["joke","Tell me a joke",e.personality==="funny"||n.fr>=6],["help","Can you help me study?",n.fr>=6],["invite","Want to eat lunch together?",n.fr>=12&&!n.lunchBuddy],["advice","I need some advice",n.fr>=15]].filter(([h,,l])=>l&&!this.used.has(h));return a.sort((h,l)=>(n.topics.lastIndexOf(h[0])+1||-1)-(n.topics.lastIndexOf(l[0])+1||-1)),a.slice(0,4).forEach(([h,l])=>s(h,l)),i.push({id:"bye",label:"See you later"}),i}back(e=[]){return[...e,...this.menu().filter(n=>!e.some(i=>i.id===n.id))].slice(0,5)}choose(e,n){let i=this.npc,s=this.mem,r=this.r,a=pr[i.personality],h=!this.used.has(e),l=o=>h?o:0;if(e.startsWith("ans"))return this.answer(Number(e.slice(3)));switch(this.history.push({who:"me",text:this.optLabel(e,n)}),fs(i.id,"me",this.optLabel(e,n)),e!=="hobby_pick"&&e!=="food_pick"&&e!=="fav_pick"&&e!=="feel"&&this.note(e),e){case"bye":return this.reply(this.v(`${Rt(r,a.bye)} ${s.fr>=30?"Come find me later, "+this.me+"!":""}`).trim(),{end:!0,options:[]});case"how":{let o=this.ctx.kind==="arrive"?this.pc({cheerful:"Great! The bus was only a little loud today.",shy:"Okay... a little nervous about class, honestly.",sporty:"Pumped! I jogged here.",nerdy:"Productive. I reviewed my notes on the bus.",artsy:"Inspired! The light in this hallway is gorgeous.",funny:"Surviving! Barely. Breakfast was just a banana peel and hope.",curious:"So good! I've already asked three questions today.",bossy:"Busy. I've got a schedule to keep.",dreamy:"Floaty. I woke up from a really good dream.",kind:"Good! How about you?",d:"Pretty good!"}):this.pc({cheerful:"Awesome! How are you?",shy:"Fine... thanks for asking.",sporty:"Great, I've got practice later!",nerdy:"Well, my pencil snapped, but otherwise fine.",artsy:"Creative. I sketched a bird during snack.",funny:"My day is like a sandwich: mostly bread.",curious:"Curious as ever. And you?",bossy:"Efficient. And you?",dreamy:"Drifty, but nice.",kind:"I'm good, thank you! How are you doing?",d:"Good! You?"});return this.reply(`${o}`,{delta:l(1),options:[{id:"feel",label:"I'm doing great",data:"great"},{id:"feel",label:"A little tired",data:"tired"},{id:"feel",label:"Kind of nervous",data:"nervous"},{id:"feel",label:"Sort of sad",data:"sad"}]})}case"feel":{let o=String(n);Ce.learn("mood",o),Ce.edit(i.id,u=>{u.facts.mood=o});let d=o==="great"?this.flavor(Rt(r,["That's awesome, it's contagious!","Love that energy!","Good! Keep it going!"])):o==="tired"?this.pc({cheerful:"Aw, me too sometimes. Have some water and a snack!",shy:"Me too... maybe we can both sit quietly for a second.",sporty:"Shake it out! A few jumping jacks and you'll be good.",nerdy:"Sleep is scientifically important. Try going to bed earlier.",d:"Hang in there. Maybe a snack at lunch will help?"}):o==="nervous"?this.pc({cheerful:"You've totally got this! I believe in you!",shy:"Oh. I get nervous too. We can be nervous together.",sporty:"Deep breath. Treat it like the big game, you've trained for this.",nerdy:"Statistically, most of the things we worry about don't happen.",d:"It's okay to feel that way. One step at a time."}):this.pc({kind:"I'm sorry. Do you want to sit together for a bit? I'll listen.",funny:"Aw. Okay, emergency compliment: your whole vibe is great.",d:"I'm sorry you're sad. I'm here if you want to talk."});return this.reply(d,{delta:l(2)+1,mood:o==="sad"?"sad":"happy",options:this.back()})}case"class":{let o=i.favSubject,d=i.hardSubject,u={math:"numbers always make sense",ela:"stories take me places",science:"I get to find out how things work",history:"the past is full of surprises",careers:"I like imagining jobs I could have",life:"I like learning how grown-up things work"}[o];return this.reply(this.v(`I love ${On[o]}. ${Jt(u)}. ${On[d]===On[o]?"":`${Jt(On[d])} is harder for me, though.`} What's yours?`),{delta:l(1),mood:"happy",options:["math","ela","science","history"].map(c=>({id:"fav_pick",label:Jt(On[c]),data:c})).concat([{id:"back",label:"Not sure yet",data:""}])})}case"fav_pick":{let o=n;Ce.learn("favSubject",o),Ce.edit(i.id,u=>{u.facts.favSubject=o});let d=o===i.favSubject;return this.reply(d?this.v(`No way, ${On[o]} is my favorite too! We should study together sometime.`):o===i.hardSubject?this.v(`Really? ${Jt(On[o])} is tough for me. Maybe you could help me!`):this.v(`${Jt(On[o])}, nice! I'd like to hear more about that.`),{delta:d?4:2,mood:d?"excited":"happy",options:this.back()})}case"back":return this.reply(this.flavor("Okay! What else?"),{options:this.menu()});case"hobby":{let o=i.interests[0],d={soccer:"I practice every day after school.",chess:"I'm working on a new opening.",baking:"Yesterday I made lemon cookies.","robotics club":"We're building a robot that picks up balls.",dinosaurs:"My favorite is the Triceratops!",drawing:"I fill a notebook every week."}[o]??`I could talk about ${o} all day.`;return this.waiting="hobby",this.reply(this.v(`I'm really into ${o}. ${d} I also like ${i.interests[1]}. What about you?`),{delta:l(1),options:[...[i.interests[0],...Dv.filter(u=>!i.interests.includes(u)).slice(0,3),"something else"].map(u=>({id:"hobby_pick",label:Jt(u),data:u}))]})}case"hobby_pick":{let o=String(n).toLowerCase();if(this.waiting=null,o==="something else")return this.reply(this.flavor("Ooh, tell me what it is! Just type it below."),{options:this.menu(),mood:"excited"});Ce.learn("hobby",o),Ce.edit(i.id,u=>{u.facts.hobby=o});let d=i.interests.some(u=>u.includes(o)||o.includes(u));return this.reply(d?this.v(`No way, we like the same thing! ${Rt(r,a.wow)} We should do ${o} together sometime.`):this.v(`${Jt(o)}? Cool! ${Rt(r,a.wow)} I've never really tried it. Maybe you can show me.`),{delta:d?5:2,mood:d?"excited":"happy",options:this.menu()})}case"you":{let o=ds(s.fr),d=s.talks,u=o==="new face"?i.bio:o==="classmate"?`I live with ${i.pet??"my family"}${i.pet?"":", it's pretty loud"}, and I could eat ${i.food} every day.`:o==="friend"?`Someday I want to ${i.dream}. I haven't told many people that.`:o==="close friend"?`Okay, a secret: I ${i.quirk}. Everyone's noticed, I think.`:`You're my best friend, so... I ${i.secret}. Please don't tell.`;return this.reply(this.v(u),{delta:l(o==="new face"?1:2)+(d%3===0,0),mood:o==="best friend"?"shy":"happy"})}case"food":return this.waiting="food",this.reply(this.v(`Easy: ${i.food}! What's yours?`),{delta:l(1),options:[...Fv.slice(0,4).map(o=>({id:"food_pick",label:Jt(o),data:o})),{id:"food_pick",label:Jt(i.food),data:i.food}].slice(0,5)});case"food_pick":{let o=String(n);return Ce.learn("food",o),Ce.edit(i.id,d=>{d.facts.food=o}),this.waiting=null,this.reply(o===i.food?this.v(`${Jt(o)}! We have the same taste. Today's lunch better be good.`):this.v(`${Jt(o)} is good too. I'd trade you some ${i.food} for it.`),{delta:o===i.food?4:1,mood:o===i.food?"excited":"happy",options:this.menu()})}case"gossip":return this.gossip(h);case"compliment":{let o=this.feat,d=this.pc({shy:`Oh! Um... thank you. I picked my ${o.phrase} myself.`,cheerful:`Aww, thanks! I love my ${o.phrase} too!`,artsy:`Thank you! My ${o.phrase} is part of my whole look.`,sporty:"Ha, thanks! Gotta look good when we win.",funny:`Thanks! My ${o.noun} has been told it's the best part of me.`,d:`Thanks! That's sweet. I like my ${o.phrase} too.`});return this.reply(d,{delta:l(3),mood:i.personality==="shy"?"shy":"happy"})}case"joke":{let[o,d]=Rt(r,Nv),u=i.personality==="funny"?"Oh, I have SO many. ":i.personality==="shy"?"Um, okay... ":"";return this.reply(`${u}${o} ... ${d}`,{delta:l(2),mood:"excited",options:[{id:"laugh",label:"Ha! Good one"},{id:"groan",label:"*groan*"},...this.back().slice(0,3)]})}case"laugh":return this.reply(this.flavor(Rt(r,["I'm here all week!","I knew you'd get it.","That one never fails."])),{delta:2,mood:"excited"});case"groan":return this.reply(this.pc({funny:"Groans are the sound of success.",d:"Hey, comedy is hard!"}),{delta:0});case"help":{if(i.hardSubject&&this.r()<.5&&i.personality!=="nerdy"&&s.fr<30){let o=hs(i.bestFriend);return this.reply(this.v(`I'm better at ${On[i.favSubject]}. If you need ${On[i.hardSubject]}, ask ${o?.first??"Ms. Brown"}. Want me to quiz you on ${On[i.favSubject]} instead?`),{delta:l(1),options:[{id:"quiz",label:"Sure, quiz me"},...this.back().slice(0,3)]})}return this.choose("quiz")}case"quiz":{let o=Ce.profile.avatar.age,d=r()<.7?i.favSubject:["math","ela","science","history"][Math.floor(r()*4)];return this.quiz=Jc(d,o,r),this.waiting="quiz",this.reply(this.v(`Okay, ${On[d]} time! ${this.quiz.q}`),{delta:0,mood:"excited",quiz:this.quiz,options:this.quiz.options.map((u,c)=>({id:`ans${c}`,label:u}))})}case"invite":{let o=i.personality==="shy"?25:12;return s.fr>=o?(Ce.edit(i.id,d=>{d.lunchBuddy=!0}),this.reply(this.pc({shy:"Really? Um... yes. I'd like that.",d:`Yes! I'll save you a seat at lunch. ${i.food[0].toUpperCase()+i.food.slice(1)} for both of us!`}),{delta:4,mood:"excited",options:this.back()})):this.reply(this.pc({shy:"Um... maybe after we know each other better? Sorry.",d:"Maybe soon! Let's hang out a bit more first."}),{delta:0,mood:"shy",options:this.back()})}case"advice":{let o=this.pc({cheerful:"Smile at three people today. It really works.",shy:"Taking a deep breath before talking helps me. And writing notes.",sporty:"Warm up before big things. Even a test.",nerdy:"Make a study schedule. Fifteen minutes a day beats a panic night before.",artsy:"Doodle when you feel stuck. Your brain loosens up.",funny:"If all else fails, laugh at it. Then try again.",curious:"Ask more questions. Nobody minds, honestly.",bossy:"Make a list. Do the hardest thing first.",dreamy:"Look out a window for a minute. Then you'll know what to do.",kind:"Be gentle with yourself. And ask for help, it's brave.",d:"Take it one step at a time."});return this.reply(o,{delta:l(2),options:this.back()})}case"chatter_pick":return this.reply("Okay!",{options:this.menu()});default:return this.reply(this.flavor("Hm, I'm not sure what to say to that."),{options:this.menu(),mood:"neutral"})}}optLabel(e,n){return typeof n=="string"&&n?Jt(n):this.menu().find(i=>i.id===e)?.label??e}answer(e){let n=this.quiz,i=this.npc;this.quiz=void 0,this.waiting=null;let s=e===n.answer;return Ce.edit(i.id,r=>{r.quiz.total++,s&&(r.quiz.right++,r.helped++)}),Ce.profile.stats.quizTotal++,s&&Ce.profile.stats.quizRight++,Ce.save(),this.history.push({who:"me",text:n.options[e]??"..."}),fs(i.id,"me",n.options[e]??"..."),s?this.reply(this.v(`${Rt(this.r,pr[i.personality].wow)} Yes, "${n.options[n.answer]}"! ${n.why??""}`),{delta:3,mood:"excited",options:[{id:"quiz",label:"Another one!"},...this.menu().slice(0,3)]}):this.reply(this.v(`Almost! The answer is "${n.options[n.answer]}". ${n.why??""} ${i.personality==="kind"?"That's a tricky one.":"Don't worry, you'll get the next one."}`),{delta:1,mood:"neutral",options:[{id:"quiz",label:"Try another"},...this.menu().slice(0,3)]})}gossip(e){let n=this.npc,i=this.r,s=hs(n.bestFriend),r=n.rival!=null?hs(n.rival):null,a=Rt(i,cr),h=[],l=cr.filter(u=>u.id!==n.id&&(Ce.peek(u.id)?.fr??0)>=30);l.length&&h.push("opinion"),s&&h.push("friend"),r&&h.push("rival"),h.push("quirk","new");let o=Rt(i,h),d="";if(o==="opinion"){let u=Rt(i,l);d=`${u.first} told me you're really nice. ${u.first} remembers that you ${Ce.peek(u.id).quiz.right>0?"helped with a quiz":"said hi"}.`}else if(o==="friend"&&s)d=`${s.first} and I are working on ${n.interests[0]} together. ${s.first} ${s.quirk}, which is funny.`;else if(o==="rival"&&r)d=`${r.first} and I are kind of competing this week. Please don't tell ${r.first}. ${r.first} ${r.quirk}.`;else if(o==="quirk")d=`${a.first} ${a.quirk}. Have you noticed?`;else{let u=Sa(a.spec).find(c=>c.key==="hat"||c.key==="glasses"||c.key==="hair");d=`${a.first} showed up with ${u.phrase} today. Everyone's talking about it.`}return this.reply(this.pc({shy:`Um... don't tell anyone, but ${d}`,funny:`Okay, hot gossip, ${this.me}: ${d}`,d}),{delta:e?1:0,mood:"happy"})}say(e){if(e=e.trim().slice(0,240),!e)return this.reply("...?",{mood:"neutral"});let n=this.npc,i=e.toLowerCase(),s=this.r;if(this.history.push({who:"me",text:e}),fs(n.id,"me",e),this.waiting==="quiz"&&this.quiz){let u=this.quiz.options.findIndex(c=>i.includes(c.toLowerCase()));if(u>=0)return this.answer(u)}let r=i.match(/(?:my name is|call me|i'?m called)\s+([a-z][a-z'-]{1,16})/);if(r){let u=Jt(r[1]);return Ce.setProfile({name:u}),this.reply(this.v(`Nice to meet you, ${u}! I'll remember that.`),{delta:2,mood:"excited"})}let a=i.match(/\bi(?:'m| am| feel| feeling)\s+(?:so |really |kind of |a little |very )?(sad|happy|tired|nervous|scared|excited|angry|bored|hungry|sick|lonely|stressed|worried|great|good|fine|okay|proud)\b/);if(a){let u=a[1];return this.choose("feel",["happy","excited","great","good","fine","okay","proud"].includes(u)?"great":["tired","bored","sick","hungry"].includes(u)?"tired":["nervous","scared","worried","stressed"].includes(u)?"nervous":"sad")}let h=i.match(/\bi (?:really |absolutely )?(?:like|love|enjoy|adore|play)\s+([a-z ]{2,28})/);if(h)return this.choose("hobby_pick",h[1].trim().replace(/\s+(a lot|so much|too|and.*)$/,""));let l=i.match(/\bmy favou?rite (subject|food|color|colour|animal|game|sport|class) is\s+([a-z ]{2,24})/);if(l){let u=l[1],c=l[2].trim();Ce.learn("fav_"+u,c),Ce.edit(n.id,g=>{g.facts["fav_"+u]=c});let f=u==="food"&&c.includes(n.food.split(" ")[0]);return this.reply(this.v(f?`${Jt(c)}! Mine too!`:`${Jt(c)}, huh? I'll remember that your favorite ${u} is ${c}.`),{delta:f?3:2,mood:f?"excited":"happy"})}let o=i.match(/\bi have (?:a|an|two|three) ([a-z]+)(?: named ([a-z]+))?/);if(o)return Ce.learn("pet",o[1]+(o[2]?" named "+Jt(o[2]):"")),this.reply(this.v(`A ${o[1]}${o[2]?" named "+Jt(o[2]):""}! I want to meet them${n.pet?`. I have ${n.pet}, you know.`:"."}`),{delta:3,mood:"excited"});if(/\b(stupid|dumb|ugly|hate you|shut up|loser|idiot)\b/.test(i))return this.reply(this.pc({shy:"...That hurts. I'm going to go now.",funny:"Ouch. That was not funny. Even I can tell.",kind:"That's not very kind. I'd like us to be nice to each other.",d:"That's rude. I don't like that."}),{delta:-8,mood:"annoyed",options:[{id:"sorry",label:"Sorry, I didn't mean it"},{id:"bye",label:"Okay, bye"}]});if(/\b(sorry|apologi[sz]e|my bad)\b/.test(i))return this.reply(this.pc({kind:"Thank you for saying that. It's okay.",d:"Okay. Thanks for saying sorry."}),{delta:3,mood:"neutral",options:this.menu()});if(/\b(thanks|thank you|thx)\b/.test(i))return this.reply(this.flavor(Rt(s,["Anytime!","Of course.","No problem!"])),{delta:1,options:this.menu()});if(/\b(you'?re|you are|love your|like your|nice|cool|awesome|amazing|great|pretty|cute)\b/.test(i)&&/\b(you|your)\b/.test(i))return this.choose("compliment");if(/\b(bye|goodbye|see you|gotta go|have to go|later)\b/.test(i))return this.choose("bye");if(/\b(joke|funny|laugh)\b/.test(i))return this.choose("joke");if(/\b(quiz|test me|question)\b/.test(i))return this.choose("quiz");if(/\b(help|study|homework)\b/.test(i))return this.choose("help");if(/\b(lunch|eat|food|hungry|pizza|snack)\b/.test(i))return this.choose("food");if(/\b(hobby|hobbies|fun|weekend|play)\b/.test(i))return this.choose("hobby");if(/\b(class|subject|math|science|history|reading|english|teacher)\b/.test(i))return this.choose("class");if(/\b(who are you|about you|your name|tell me about)\b/.test(i))return this.choose("you");if(/\b(rumou?r|gossip|news|heard)\b/.test(i))return this.choose("gossip");if(/\b(hi|hello|hey|yo|sup)\b/.test(i)&&i.split(/\s+/).length<=3)return this.reply(this.flavor("Hi! What's up?"),{mood:"happy"});if(/\b(how are you|how's it going|what's up)\b/.test(i))return this.choose("how");if(/\?\s*$/.test(i))return this.reply(this.pc({nerdy:"Hmm, interesting question. I'd have to look that up. Want a quiz question instead?",curious:"Ooh, good question! I don't know, but I want to find out with you.",d:`${Rt(s,pr[n.personality].hm)} I'm not sure. What do you think?`}),{delta:1,mood:"neutral"});let d=this.mem;return this.reply(this.v(d.facts.hobby?`${Rt(s,pr[n.personality].hm)} Is that like ${d.facts.hobby}? Tell me more.`:`${Rt(s,pr[n.personality].hm)} Tell me more about that.`),{delta:1,mood:"neutral"})}};function Wf(t,e,n){let i=xi((t.id*31+e.id)*1009+Math.floor(Date.now()/2e4)),s=Ce.profile,r=s.name||"the new kid",a=Ce.peek(t.id),h=(Ce.peek(e.id)?.fr??0)>=30||(a?.fr??0)>=30,l=Rt(i,Sa(e.spec).filter(d=>d.key!=="shoes")),o=[`${e.first}, did you finish the ${Rt(i,["math","reading","science","history"])} homework?`,`Are you going to ${t.interests[0]} after school?`,`I love your ${l.phrase}!`,`${e.first}, you ${e.quirk} again. It's cute.`,h?`${r} is really nice. Have you talked to ${r}?`:`Who's the new kid, ${e.first}?`,n.kind==="lunch"?`I'm trading ${t.food} for ${e.food}. Deal?`:n.kind==="arrive"?"The bus was SO loud this morning.":n.kind==="dismiss"?"Don't forget your backpack!":`Shh, ${e.first}, we're supposed to be in class.`,`${Rt(i,t.interests)} club is on Thursday, ${e.first}!`,`Did you know ${t.pet??"my family"} ${t.pet?"learned a new trick?":"makes the best snacks?"}`];return Rt(i,o)}function qf(t){let e=Ce.mem(t.id),n=Ce.profile.name||"you";return e.fr>=60?`${n}! Over here!`:e.facts.hobby?`Hey ${n}! How's ${e.facts.hobby}?`:`Hey ${n}!`}var eu=0;async function Xf(t,e){if(Date.now()<eu)return null;let n=t.npc,i=t.mem,s=new AbortController,r=setTimeout(()=>s.abort(),6500);try{let a={npc:{name:n.name,first:n.first,grade:n.grade,role:n.role,title:n.title,personality:n.personality,interests:n.interests,favSubject:n.favSubject,food:n.food,pet:n.pet,dream:n.dream,quirk:n.quirk,bio:n.bio},player:{name:Ce.profile.name,facts:Ce.profile.facts},memory:{friendship:i.fr,tier:ds(i.fr),talks:i.talks,topics:i.topics.slice(-6),facts:i.facts,recent:i.log.slice(-8)},ctx:t.ctx,history:t.history.slice(-8),input:e},h=await fetch("/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a),signal:s.signal});if(!h.ok)return eu=Date.now()+5*6e4,null;let l=await h.json();if(!l||typeof l.text!="string")return null;let o=Math.max(-6,Math.min(6,Number(l.delta)||0));if(t.history.push({who:"me",text:e}),fs(n.id,"me",e),l.learned&&typeof l.learned=="object")for(let[d,u]of Object.entries(l.learned))typeof u=="string"&&(Ce.learn(d,u.slice(0,40)),Ce.edit(n.id,c=>{c.facts[d]=String(u).slice(0,40)}));return t.history.push({who:"npc",text:l.text}),fs(n.id,"npc",l.text),o&&Qc(n.id,o),t.turns++,{text:String(l.text).slice(0,400),options:t.menu(),mood:l.mood||"happy",delta:o}}catch{return eu=Date.now()+6e4,null}finally{clearTimeout(r)}}async function $f(t,e){return await Xf(t,e)??t.say(e)}var Bv=`
.uchat{position:absolute;left:0;right:0;bottom:0;z-index:45;display:none;justify-content:center;padding:0 10px calc(10px + env(safe-area-inset-bottom,0px));pointer-events:none}
.uchat.show{display:flex}
.uchat.top{top:58px;bottom:auto;align-items:flex-start;padding:0 10px}
.uchat-card{pointer-events:auto;display:flex;gap:12px;max-width:860px;width:100%;background:var(--kraft,#F3E7CF);border:1px solid rgba(255,255,255,.75);border-radius:16px;padding:10px 12px;box-shadow:0 3px 0 var(--kraft-edge,#C9B28A),0 12px 26px rgba(80,50,40,.38);font-family:var(--ui,"Fredoka","Trebuchet MS",system-ui,sans-serif);color:var(--ink,#4A3B3F);touch-action:manipulation;user-select:text;-webkit-user-select:text}
.uchat-portrait{flex:0 0 auto;width:118px;height:150px;border-radius:12px;background:linear-gradient(#EAF1E8,#DDE9DE);border:2px solid var(--kraft-edge,#C9B28A);box-shadow:inset 0 -6px 0 rgba(0,0,0,.05)}
.uchat-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}
.uchat-head{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.uchat-head b{font-size:17px;font-weight:600}
.uchat-sub{font-size:12px;color:var(--soft,#8A7A70)}
.uchat-hearts{color:#E07A66;font-size:14px;letter-spacing:1px}
.uchat-x{margin-left:auto;font:inherit;border:1px solid rgba(255,255,255,.7);background:#FFF9F0;border-radius:10px;padding:2px 10px;cursor:pointer;color:inherit;box-shadow:0 2px 0 var(--kraft-edge,#C9B28A)}
.uchat-text{background:#FFF9F0;border-radius:12px;padding:8px 12px;font-size:15px;line-height:1.35;min-height:44px;max-height:30vh;overflow:auto;box-shadow:inset 0 0 0 1px rgba(201,178,138,.5)}
.uchat-text .you{color:var(--soft,#8A7A70);font-size:12px;display:block;margin-bottom:2px}
.uchat-opts{display:flex;flex-wrap:wrap;gap:6px}
.uchat-opts button{font:inherit;font-size:14px;color:var(--ink,#4A3B3F);background:#FFF9F0;border:1px solid rgba(255,255,255,.8);border-radius:10px;padding:6px 10px;cursor:pointer;box-shadow:0 2px 0 var(--kraft-edge,#C9B28A);min-height:34px;text-align:left}
.uchat-opts button:active{transform:translateY(2px);box-shadow:none}
.uchat-opts button:focus-visible,.uchat-in input:focus-visible,.uchat-x:focus-visible{outline:3px solid var(--blue,#4F91C7);outline-offset:2px}
.uchat-in{display:flex;gap:6px}
.uchat-in input{flex:1;min-width:0;font:inherit;font-size:15px;border:1px solid var(--kraft-edge,#C9B28A);border-radius:10px;padding:7px 10px;background:#fff;color:var(--ink,#4A3B3F)}
.uchat-in button{font:inherit;color:#fff;background:var(--acc,#E07A66);border:1px solid rgba(255,255,255,.7);border-radius:10px;padding:6px 14px;cursor:pointer;box-shadow:0 2px 0 #b95a48}
.uchat-bubble{position:absolute;z-index:35;transform:translate(-50%,-100%);max-width:200px;background:#FFF9F0;border:1.5px solid #6d5a5f;border-radius:12px;padding:5px 9px;font:500 12px/1.25 var(--ui,"Fredoka","Trebuchet MS",sans-serif);color:#4A3B3F;box-shadow:0 2px 0 var(--kraft-edge,#C9B28A),0 5px 9px rgba(80,50,40,.25);pointer-events:none;text-align:center}
.uchat-bubble:after{content:"";position:absolute;left:50%;bottom:-6px;width:8px;height:8px;background:#FFF9F0;border-right:1.5px solid #6d5a5f;border-bottom:1.5px solid #6d5a5f;transform:translateX(-50%) rotate(45deg)}
.uchat-tag{position:absolute;z-index:34;transform:translate(-50%,-100%);font:600 11px var(--ui,"Fredoka","Trebuchet MS",sans-serif);color:#4A3B3F;background:rgba(255,249,240,.92);border:1px solid #C9B28A;border-radius:8px;padding:1px 7px;white-space:nowrap;pointer-events:none}
.uchat-tag i{font-style:normal;color:#E07A66;margin-left:4px}
.ujournal{position:absolute;inset:0;z-index:50;display:none;align-items:center;justify-content:center;background:rgba(234,223,203,.8);padding:12px}
.ujournal.show{display:flex}
.ujournal-card{background:var(--kraft,#F3E7CF);border-radius:16px;border:1px solid rgba(255,255,255,.75);box-shadow:0 3px 0 var(--kraft-edge,#C9B28A),0 14px 30px rgba(80,50,40,.4);max-width:720px;width:100%;max-height:86vh;display:flex;flex-direction:column;font-family:var(--ui,"Fredoka","Trebuchet MS",sans-serif);color:var(--ink,#4A3B3F)}
.ujournal-card>header{display:flex;align-items:center;padding:12px 16px;gap:10px;font-weight:600;font-size:17px}
.ujournal-card>header button{margin-left:auto;font:inherit;color:inherit;border:1px solid rgba(255,255,255,.7);background:#FFF9F0;border-radius:10px;padding:3px 12px;cursor:pointer;box-shadow:0 2px 0 var(--kraft-edge,#C9B28A)}
.ujournal-list{overflow:auto;padding:0 14px 14px;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px}
.ujournal-item{display:flex;gap:10px;background:#FFF9F0;border-radius:12px;padding:8px;box-shadow:inset 0 0 0 1px rgba(201,178,138,.5);cursor:pointer;text-align:left;font:inherit;color:inherit;border:0}
.ujournal-item canvas{flex:0 0 auto;width:54px;height:70px;background:#EAF1E8;border-radius:8px}
.ujournal-item b{font-size:15px}.ujournal-item small{display:block;color:var(--soft,#8A7A70);font-size:12px;line-height:1.35}
.ujournal-empty{padding:18px;color:var(--soft,#8A7A70)}
@media(max-width:560px){.uchat-portrait{width:78px;height:100px}.uchat-text{font-size:14px}}
`,Yf=!1,jf=()=>{if(Yf)return;Yf=!0;let t=document.createElement("style");t.textContent=Bv,document.head.appendChild(t)},ft=(t,e="",n,i="")=>{let s=document.createElement(t);return e&&(s.className=e),i&&(s.textContent=i),n?.appendChild(s),s};function tu(t,e,n=0,i=0,s=3.7){let r=t.getContext("2d"),a=t.width,h=t.height;r.clearRect(0,0,a,h);let l=s*(e.age==="adult"?.74:Math.min(1,Wl[e.age??"hs"]??1))*(a/118);r.save(),r.translate(a/2,h-10*(h/150)),r.scale(l,l),r.shadowColor="rgba(52,34,46,.3)",r.shadowBlur=2,r.shadowOffsetY=1,sr(r,0,0,{...e,dir:"down",moving:!1,walk:0,mouth:i,tag:!1},n),r.restore()}var Ql=t=>"\u2665".repeat(Kc(t))+"\u2661".repeat(5-Kc(t)),Zl=class{constructor(e){this.typing=0;this.full="";this.raf=0;this.t0=0;this.busy=!1;this.opts=[];this.onClose=()=>{};this.onReply=()=>{};this.say=async e=>{if(!(!this.convo||this.busy)){this.busy=!0,this.showYou(e);try{this.deliver(await $f(this.convo,e))}finally{this.busy=!1}}};this.mood="happy";this.loop=()=>{if(!this.isOpen)return;let e=performance.now(),n=this.typing<this.full.length;n&&(this.typing+=1.1+this.full.length*.012,this.renderText()),this.npc&&tu(this.cv,this.npc.look,(e-this.t0)/1e3,n?.4+.6*Math.abs(Math.sin(e/70)):0),this.raf=requestAnimationFrame(this.loop)};jf(),this.root=ft("div","uchat",e),this.card=ft("div","uchat-card",this.root),this.cv=ft("canvas","uchat-portrait",this.card),this.cv.width=236,this.cv.height=300;let n=ft("div","uchat-main",this.card),i=ft("div","uchat-head",n);this.nameEl=ft("b","",i),this.subEl=ft("span","uchat-sub",i),this.heartEl=ft("span","uchat-hearts",i);let s=ft("button","uchat-x",i,"Bye");s.type="button",s.onclick=()=>this.close(),this.textEl=ft("div","uchat-text",n),this.textEl.setAttribute("aria-live","polite"),this.textEl.onclick=()=>this.finishTyping(),this.optsEl=ft("div","uchat-opts",n);let r=ft("form","uchat-in",n);this.input=ft("input","",r),this.input.placeholder="Or type something to say\u2026",this.input.maxLength=200,this.input.autocomplete="off";let a=ft("button","",r,"Say");a.type="submit",r.onsubmit=h=>{h.preventDefault();let l=this.input.value.trim();l&&(this.input.value="",this.say(l))},this.root.addEventListener("keydown",h=>{h.stopPropagation(),h.key==="Escape"?this.close():document.activeElement!==this.input&&/^[1-6]$/.test(h.key)&&this.opts[+h.key-1]&&this.pick(this.opts[+h.key-1])}),["pointerdown","wheel","touchstart"].forEach(h=>this.root.addEventListener(h,l=>l.stopPropagation(),{passive:!0}))}get isOpen(){return this.root.classList.contains("show")}open(e,n){this.npc=e,this.convo=new Ea(e,n),this.root.classList.add("show"),this.t0=performance.now(),this.busy=!1,this.nameEl.textContent=e.name,this.refreshHead(),this.deliver(this.convo.greet()),this.loop(),setTimeout(()=>this.root.querySelector(".uchat-opts button")?.focus({preventScroll:!0}),30)}async pick(e){!this.convo||this.busy||(this.showYou(this.labelOf(e)),this.deliver(this.convo.choose(e.id,e.data)))}labelOf(e){return e.label}showYou(e){this.textEl.innerHTML="";let n=ft("span","you",this.textEl,`${Ce.profile.name||"You"}: ${e}`)}refreshHead(){if(!this.npc)return;let e=Ce.mem(this.npc.id);this.subEl.textContent=`${this.npc.role==="staff"?this.npc.title:"Grade "+this.npc.grade} \xB7 ${ds(e.fr)}`,this.heartEl.textContent=Ql(e.fr)}deliver(e){this.refreshHead(),this.opts=e.options,this.optsEl.innerHTML="",e.options.forEach((i,s)=>{let r=ft("button","",this.optsEl,`${s+1}. ${i.label}`);r.type="button",r.onclick=()=>void this.pick(i)});let n=this.textEl.querySelector(".you");this.textEl.innerHTML="",n&&this.textEl.appendChild(n),this.full=e.text,this.typing=0,this.mood=e.mood,this.onReply(e,this.npc),e.end&&setTimeout(()=>this.close(),Math.min(2600,900+e.text.length*28))}finishTyping(){this.typing=this.full.length,this.renderText()}renderText(){let e=this.textEl.querySelector(".say");e||(e=ft("span","say",this.textEl)),e.textContent=this.full.slice(0,Math.floor(this.typing))}close(){this.isOpen&&(this.root.classList.remove("show"),cancelAnimationFrame(this.raf),this.input.blur(),this.onClose())}},Kl=class{constructor(e){this.onPick=()=>{};jf(),this.root=ft("div","ujournal",e);let n=ft("div","ujournal-card",this.root),i=ft("header","",n,"Friends and classmates"),s=ft("button","",i,"Close");s.type="button",s.onclick=()=>this.hide(),this.list=ft("div","ujournal-list",n),this.root.addEventListener("pointerdown",r=>r.stopPropagation()),this.root.addEventListener("keydown",r=>{r.stopPropagation(),r.key==="Escape"&&this.hide()})}show(){this.render(),this.root.classList.add("show")}hide(){this.root.classList.remove("show")}toggle(){this.root.classList.contains("show")?this.hide():this.show()}render(){this.list.innerHTML="";let e=Ce.friends();if(!e.length){ft("div","ujournal-empty",this.list,"You haven't met anyone yet. Walk up to a student and tap them, or press T when one is close.");return}for(let{id:n,mem:i}of e){let s=hs(Number(n));if(!s)continue;let r=ft("button","ujournal-item",this.list);r.type="button",r.onclick=()=>{this.hide(),this.onPick(s)};let a=ft("canvas","",r);a.width=108,a.height=140,tu(a,s.look,0,0,3.7);let h=ft("div","",r),l=Object.entries(i.facts).map(([o,d])=>`${o.replace("fav_","favorite ")}: ${d}`).join(", ");ft("b","",h,s.name),ft("small","",h,`${s.role==="staff"?s.title:"Grade "+s.grade} \xB7 ${ds(i.fr)} ${Ql(i.fr)}`),ft("small","",h,`Talked ${i.talks}x \xB7 quiz ${i.quiz.right}/${i.quiz.total}${i.lunchBuddy?" \xB7 lunch buddy":""}`),l&&ft("small","",h,`Remembers: ${l}`)}}};var Jf={tortoise:{kind:"order",prompt:"Put the story in order.",items:["The hare brags that he is the fastest.","The tortoise accepts the race.","The hare naps in the middle of the race.","The tortoise keeps walking, never stopping.","The tortoise crosses the finish line first."],q:{q:"Which theme do these events prove?",options:["Slow and steady wins the race.","Hares are fast.","Races are fun."],answer:0}},watercycle:{kind:"order",prompt:"Order the water cycle.",items:["Sun heats the ocean (evaporation)","Water vapor rises and cools","Vapor forms clouds (condensation)","Rain or snow falls (precipitation)","Water collects in rivers and returns to the sea"]},silkroad:{kind:"order",prompt:"Follow a silk caravan west.",items:["Xi'an, China: silk is made","Crossing the Taklamakan Desert","Samarkand: traders swap goods","Baghdad: markets and scholars","Rome: silk reaches buyers"]},teaparty:{kind:"order",prompt:"Order the road to the Boston Tea Party.",items:["Britain taxes tea with no colonial vote","Colonists protest: 'No taxation without representation'","Tea ships arrive in Boston harbor","Colonists dump 342 chests of tea in the water","Britain punishes Boston and tension grows"]},bill:{kind:"order",prompt:"How a bill becomes a law.",items:["A member of Congress introduces a bill","A committee studies and edits it","The House and Senate both vote to pass it","The President signs it","It becomes a law"]},orchestra:{kind:"sort",prompt:"Sort the instruments into their families.",groups:{Strings:["violin","cello","harp"],Woodwinds:["flute","clarinet","oboe"],Brass:["trumpet","trombone","tuba"],Percussion:["drum","xylophone","cymbals"]}},figurative:{kind:"sort",prompt:"Which kind of figurative language is it?",groups:{Simile:["Her smile was like sunshine","He ran like the wind"],Metaphor:["Time is a thief","The classroom was a zoo"],Personification:["The wind whispered through the trees","The sun smiled down on us"]}},perspective:{kind:"sort",prompt:"Where do these belong in a perspective drawing?",groups:{"Foreground (big, detailed)":["the girl on the path","the fence post nearby"],"Middle ground":["the red barn","the row of trees"],"Background (small, pale)":["the distant mountain","tiny far-off hills"]}},"careers-find":{kind:"sort",prompt:"Interests, Skills or Values?",groups:{"Interests (what I enjoy)":["Building with my hands","Drawing and designing"],"Skills (what I can do)":["Explaining ideas clearly","Fixing things step by step"],"Values (what matters)":["Helping other people","Having a steady job"]}},"careers-build":{kind:"sort",prompt:"Which cluster does each job belong to?",groups:{Construction:["Electrician","Carpenter"],Manufacturing:["Welder","Machinist"],"Transportation and Logistics":["Pilot","Warehouse coordinator"]}},"careers-care":{kind:"sort",prompt:"Which cluster does each job belong to?",groups:{"Health Science":["Nurse","Dental hygienist"],"Education and Training":["Teacher","Librarian"],"Human Services":["School counselor","Social worker"]}},"careers-public":{kind:"sort",prompt:"Which cluster does each job belong to?",groups:{"Law and Public Safety":["Firefighter","Paralegal"],Government:["City planner","Town clerk"]}},"careers-tech":{kind:"sort",prompt:"Information Technology or STEM?",groups:{"Information Technology":["Web developer","Network administrator"],STEM:["Civil engineer","Chemist"]}},"careers-biz":{kind:"sort",prompt:"Which cluster does each job belong to?",groups:{"Business Management":["Office manager","Entrepreneur"],Finance:["Accountant","Bank teller"],"Marketing and Sales":["Ad designer","Sales representative"]}},"careers-create":{kind:"sort",prompt:"Which cluster does each job belong to?",groups:{"Arts and Communications":["Graphic designer","Journalist"],"Hospitality and Tourism":["Chef","Hotel manager"]}},"careers-land":{kind:"sort",prompt:"Which group does each job belong to?",groups:{Agriculture:["Farmer","Veterinary technician"],"Natural Resources":["Park ranger","Forester"],Food:["Food scientist","Baker"]}},"careers-plan":{kind:"order",prompt:"Put the career plan in order.",items:["Explore your interests and strengths","Research jobs and what they need","Pick a training route","Build a resume and practice interviews","Apply, start, and keep growing"]},"careers-money":{kind:"sort",prompt:"Money in or money out?",groups:{"Pay (money in)":["Hourly wage","Bonus"],"Costs (money out)":["Rent","Taxes"]}},"life-money":{kind:"sort",prompt:"Needs, wants or savings?",groups:{Needs:["Groceries","Medicine"],Wants:["Video game","Designer sneakers"],Savings:["Emergency fund","Money set aside for a bike"]}},"life-budget":{kind:"sort",prompt:"Where does it belong in a 50/30/20 budget?",groups:{"Needs (about 50%)":["Rent","Groceries"],"Wants (about 30%)":["Streaming service","Eating out"],"Savings and debt (about 20%)":["Emergency fund","Paying off a loan"]}},"life-credit":{kind:"sort",prompt:"Safe habit or warning sign?",groups:{"Safe habit":["Pay the full balance each month","Check your credit report for free"],"Warning sign":["Pay with gift cards to claim a prize","Act now or lose the offer"]}},"life-home":{kind:"order",prompt:"Put the laundry steps in order.",items:["Sort clothes by color and care label","Load the machine and add detergent","Run the wash","Move wet clothes to the dryer or line","Fold or hang them right away"]},"life-food":{kind:"sort",prompt:"Do or don't?",groups:{Do:["Wash hands before cooking","Use a separate board for raw meat"],"Don't":["Leave leftovers out overnight","Rinse raw chicken in the sink"]}},"life-health":{kind:"sort",prompt:"How much care does it need?",groups:{"Rest and home care":["A mild cold","Tired after a long day"],"See a doctor soon":["A fever that lasts for days","A cut that looks infected"],"Emergency: call 911":["Trouble breathing","Heavy bleeding that will not stop"]}},"life-mind":{kind:"sort",prompt:"Helpful or unhelpful?",groups:{Helpful:["Take slow breaths","Talk to a trusted adult"],Unhelpful:["Bottle it all up","Stay up all night worrying"]}},"life-safety":{kind:"order",prompt:"Put the emergency steps in order.",items:["Make sure the area is safe","Call emergency services if it is serious","Give simple help you were taught","Stay with the person until help arrives"]},"life-digital":{kind:"sort",prompt:"Strong habit or risky habit?",groups:{"Strong habit":["A unique passphrase for each account","Two-step sign-in"],"Risky habit":["Same password everywhere","Clicking a link from an unknown sender"]}},"life-people":{kind:"sort",prompt:"Respectful or not?",groups:{Respectful:["Asking before borrowing","Listening without interrupting"],"Not respectful":["Reading someone's messages without asking","Pressuring someone after they said no"]}},"life-time":{kind:"order",prompt:"Put the goal-setting steps in order.",items:["Write the goal","Break it into small steps","Put the steps on a calendar","Do the next step today","Review and adjust each week"]},"life-adult":{kind:"sort",prompt:"Lock it up or carry it?",groups:{"Keep locked at home":["Birth certificate","Social Security card"],"Fine to carry":["Photo ID","Transit pass"]}},"life-travel":{kind:"order",prompt:"Plan a trip in order.",items:["Pick where and when you need to be","Check routes and travel time","Leave early with a charged phone and fare","Tell someone your plan","Arrive and confirm the way home"]},"life-decide":{kind:"order",prompt:"Put the decision steps in order.",items:["Name the problem","List your options","Weigh the good and bad of each","Choose one and try it","Check the result and learn"]},branches:{kind:"sort",prompt:"Which branch has this power?",groups:{"Legislative (makes laws)":["Writes new laws","Declares war"],"Executive (carries out laws)":["Signs bills into law","Commands the military"],"Judicial (explains laws)":["Decides if a law is fair","Hears court cases"]}}};var Aa=["K-2","grades 3-5","grades 6-8","high school"],Pt=(t,e,n,i,s,r,a,h,l)=>({id:n,subject:t,title:i,blurb:`Extra lesson \xB7 ${Aa[e]}`,band:e,extra:!0,points:s,examples:r,pics:[],videos:[],lab:{id:"cardsort",cfg:"x-"+n,title:"Try it",intro:l},intro:`Today is an extra lesson: ${i}. It builds the skills ${Aa[e]} learners use, so your regular classes feel easier.`,wrap:"Nice work. Every extra lesson brings you closer to your class, and your regular lessons are still waiting.",homework:h,glossary:a,whys:["It is a building block for harder work later.","Practice makes it feel easy, so a little each day is enough."]});Object.assign(Jf,{"x-m0a":{kind:"sort",prompt:"Adding or subtracting?",groups:{"Adding (put together)":["3 + 4","5 + 2"],"Subtracting (take away)":["9 - 4","7 - 3"]}},"x-m0b":{kind:"sort",prompt:"Which shape is it?",groups:{Circle:["a wheel","a coin"],Square:["a sticky note","a chessboard square"]}},"x-m1a":{kind:"sort",prompt:"Multiply or divide?",groups:{Multiplication:["4 x 3","6 x 2"],Division:["12 / 3","10 / 2"]}},"x-m1b":{kind:"sort",prompt:"Which place is the digit in?",groups:{"Tens place":["the 4 in 347","the 9 in 592"],"Hundreds place":["the 3 in 347","the 5 in 592"]}},"x-m2a":{kind:"sort",prompt:"Ratio or percent?",groups:{Ratio:["3 red : 2 blue","1 to 4"],Percent:["25%","60 out of 100"]}},"x-m2b":{kind:"sort",prompt:"Expression or equation?",groups:{Expression:["3x + 2","y - 7"],Equation:["3x + 2 = 11","y - 7 = 5"]}},"x-e0a":{kind:"sort",prompt:"Which word rhymes?",groups:{"Rhymes with cat":["hat","mat"],"Rhymes with dog":["log","frog"]}},"x-e0b":{kind:"sort",prompt:"Telling sentence or question?",groups:{"Telling sentence (.)":["The cat sleeps.","I like pizza."],"Question (?)":["Where is my hat?","Can I play?"]}},"x-e1a":{kind:"sort",prompt:"Noun, verb or adjective?",groups:{Noun:["dog","school"],Verb:["run","jump"],Adjective:["tall","shiny"]}},"x-e1b":{kind:"sort",prompt:"Main idea or detail?",groups:{"Main idea":["Dogs make good pets","Recycling helps the planet"],Detail:["Dogs can learn tricks","Recycling saves energy"]}},"x-e2a":{kind:"sort",prompt:"Prefix or suffix?",groups:{Prefix:["unhappy","rewrite"],Suffix:["quickly","helpful"]}},"x-e2b":{kind:"sort",prompt:"Fact or opinion?",groups:{Fact:["Water boils at 100 C at sea level","Mars is a planet"],Opinion:["Winter is the best season","Math is boring"]}},"x-s0a":{kind:"sort",prompt:"Living or non-living?",groups:{Living:["tree","bird"],"Non-living":["rock","chair"]}},"x-s0b":{kind:"sort",prompt:"Which season?",groups:{Winter:["snow","wearing a coat"],Summer:["swimming","hot sun"]}},"x-s1a":{kind:"sort",prompt:"Plant part or animal group?",groups:{"Plant parts":["roots","stem"],"Animal groups":["mammal","reptile"]}},"x-s1b":{kind:"sort",prompt:"Solid, liquid or gas?",groups:{Solid:["ice","rock"],Liquid:["milk","juice"],Gas:["steam","helium"]}},"x-s2a":{kind:"sort",prompt:"Balanced or unbalanced?",groups:{"Balanced forces":["a book resting on a table","a tug of war with no winner"],"Unbalanced forces":["a ball kicked across a field","a car speeding up"]}},"x-s2b":{kind:"order",prompt:"Put the scientific method in order.",items:["Ask a question","Make a hypothesis","Test with an experiment","Collect and study the data","Share your conclusion"]},"x-h0a":{kind:"sort",prompt:"How do they help?",groups:{"Keep us safe":["firefighter","police officer"],"Help us learn":["teacher","librarian"]}},"x-h0b":{kind:"sort",prompt:"Land or water?",groups:{Land:["mountain","desert"],Water:["ocean","river"]}},"x-h1a":{kind:"sort",prompt:"Continent or ocean?",groups:{Continents:["Africa","Asia"],Oceans:["Pacific","Atlantic"]}},"x-h1b":{kind:"sort",prompt:"Before or after 1600?",groups:{"Long before 1600":["Native nations lived across the land","Explorers crossed the ocean"],"After 1600":["Colonies were settled","Trade towns grew"]}},"x-h2a":{kind:"sort",prompt:"Egypt or Rome?",groups:{Egypt:["pyramids","the Nile river"],Rome:["the Senate","aqueducts"]}},"x-h2b":{kind:"order",prompt:"Order the road to the Constitution.",items:["Colonies protest taxes","The Declaration of Independence is signed","The colonies win the war","The Constitution is written","The Bill of Rights is added"]}});var Zf=[Pt("math",0,"m0a","Counting and adding to 20",["Counting tells how many things there are","Adding puts groups together: 3 + 4 = 7","Subtracting takes some away: 9 - 4 = 5"],["Put 3 blocks with 4 blocks and count: 7 blocks.","Start with 9 apples, eat 4, and 5 are left."],{add:"To add is to put numbers together.",subtract:"To subtract is to take some away.",equals:"Equals means the same amount."},"Count 10 things at home and write two adding sentences.","Adding or subtracting?"),Pt("math",0,"m0b","Shapes and measuring",["Shapes have sides and corners: a square has 4 sides","We measure how long, how heavy and how full","Compare with words: longer, shorter, heavier, lighter"],["A coin is a circle. A sticky note is a square.","A pencil is longer than an eraser."],{shape:"A shape is the outline of an object.",side:"A side is a straight edge of a shape.",measure:"To measure is to find how much of something there is."},"Find a circle, a square and a triangle around your home.","Which shape is it?"),Pt("math",1,"m1a","Multiplication and division facts",["Multiplying is adding equal groups: 4 x 3 = 12","Dividing shares equally: 12 / 3 = 4","Multiplication and division are opposites"],["3 bags with 4 apples each is 12 apples.","Share 10 cookies between 2 friends: 5 each."],{product:"The product is the answer to a multiplication.",divide:"To divide is to share into equal groups.",factor:"A factor is a number you multiply."},"Write the 3 times table up to 3 x 10.","Multiply or divide?"),Pt("math",1,"m1b","Place value and rounding",["Each digit has a place: ones, tens, hundreds","In 347 the 4 is in the tens place","Round to the nearest ten by looking at the ones digit"],["347 is 3 hundreds, 4 tens and 7 ones.","Round 47 to 50 because 7 is 5 or more."],{digit:"A digit is one of the numbers 0 to 9.","place value":"Place value is what a digit is worth by its place.",round:"To round is to change a number to a nearby simpler one."},"Write your age and a three-digit number in expanded form.","Which place is the digit in?"),Pt("math",2,"m2a","Ratios and percents",["A ratio compares two amounts: 3 red to 2 blue","A percent means out of 100","To find 25% of a number, divide by 4"],["25% of 80 is 20.","A recipe uses 2 cups of rice for 4 cups of water: ratio 1 to 2."],{ratio:"A ratio compares two quantities.",percent:"A percent is a part out of 100.",proportion:"A proportion says two ratios are equal."},"Find 10% and 50% of the price of something you like.","Ratio or percent?"),Pt("math",2,"m2b","Expressions and equations",["An expression has numbers and letters but no equals sign","An equation says two sides are equal","Solve by doing the same thing to both sides"],["3x + 2 is an expression.","3x + 2 = 11 gives x = 3."],{variable:"A variable is a letter that stands for a number.",expression:"An expression is a math phrase without an equals sign.",equation:"An equation states that two things are equal."},"Solve x + 7 = 15 and 2x = 18.","Expression or equation?"),Pt("ela",0,"e0a","Letters, sounds and rhymes",["Letters make sounds, and sounds make words","Rhyming words end with the same sound","Say each sound slowly, then blend it together"],["Cat, hat and mat rhyme.","Dog, log and frog rhyme."],{rhyme:"Words rhyme when they end with the same sound.",vowel:"Vowels are a, e, i, o and u.",syllable:"A syllable is a beat in a word."},"Think of three words that rhyme with sun.","Which word rhymes?"),Pt("ela",0,"e0b","Telling and asking sentences",["A sentence starts with a capital letter","A telling sentence ends with a period","A question ends with a question mark"],["The cat sleeps.","Where is my hat?"],{sentence:"A sentence is a complete thought.",capital:"A capital letter begins a sentence.",period:"A period ends a telling sentence."},"Write one telling sentence and one question about your day.","Telling sentence or question?"),Pt("ela",1,"e1a","Nouns, verbs and adjectives",["A noun names a person, place or thing","A verb is an action word","An adjective describes a noun"],["The tall girl runs: girl is the noun, runs is the verb, tall is the adjective.","Add an adjective: the shiny coin."],{noun:"A noun names a person, place or thing.",verb:"A verb tells what someone does.",adjective:"An adjective describes a noun."},"Write a sentence with a noun, a verb and two adjectives.","Noun, verb or adjective?"),Pt("ela",1,"e1b","Main idea and details",["The main idea is what a text is mostly about","Details give facts that support the main idea","Ask: what is the one big thing the writer wants me to know?"],["Main idea: dogs make good pets. Detail: dogs can learn tricks.","Main idea: recycling helps the planet. Detail: it saves energy."],{"main idea":"The main idea is the most important point.",detail:"A detail is a small fact that supports the main idea.",summary:"A summary is a short retelling."},"Read a short article and write its main idea in one sentence.","Main idea or detail?"),Pt("ela",2,"e2a","Word parts and vocabulary",["Prefixes come before a root and change the meaning","Suffixes come after a root","Use clues in the sentence to figure out new words"],["Un- means not: unhappy means not happy.","The suffix -ful means full of: helpful."],{prefix:"A prefix is added to the start of a word.",suffix:"A suffix is added to the end of a word.",root:"A root is the main part of a word."},"List five words with the prefix re- and what they mean.","Prefix or suffix?"),Pt("ela",2,"e2b","Fact and opinion",["A fact can be checked and proved","An opinion tells what someone thinks or feels","Words like best, worst and boring often signal opinions"],["Fact: Mars is a planet.","Opinion: math is boring."],{fact:"A fact is something that can be proven.",opinion:"An opinion is a belief or feeling.",evidence:"Evidence is proof that supports an idea."},"Write two facts and two opinions about your school.","Fact or opinion?"),Pt("science",0,"s0a","Living and non-living things",["Living things grow, need food and water and have babies","Non-living things do not grow on their own","Plants and animals are living things"],["A tree is living. A rock is not.","A bird eats, grows and has chicks."],{living:"Living things grow and change.",habitat:"A habitat is where an animal lives.",need:"A need is something living things must have."},"Find three living and three non-living things in your home.","Living or non-living?"),Pt("science",0,"s0b","Weather and seasons",["Weather is what the sky and air are doing today","There are four seasons: winter, spring, summer and fall","We dress for the weather"],["In winter it can snow, so we wear coats.","In summer it is hot, so we swim."],{weather:"Weather is the condition of the air outside.",season:"A season is a part of the year with its own weather.",temperature:"Temperature tells how hot or cold it is."},"Draw today's weather and what you wore.","Which season?"),Pt("science",1,"s1a","Plants and animals",["Plants have roots, stems and leaves","Animals are grouped by traits: mammals, reptiles, birds, fish and insects","Mammals have fur and feed milk to their babies"],["Roots take in water, leaves catch sunlight.","A dog is a mammal and a snake is a reptile."],{roots:"Roots take in water and hold a plant in the soil.",mammal:"A mammal has hair and feeds babies milk.",reptile:"A reptile has dry scales."},"Sort five animals you know into groups.","Plant part or animal group?"),Pt("science",1,"s1b","States of matter",["Matter is anything that takes up space","Solids keep their shape, liquids take the shape of their container, gases spread out","Heating or cooling can change the state"],["Ice melts into water when it warms up.","Steam is water as a gas."],{matter:"Matter is anything with mass that takes up space.",melt:"To melt is to change from solid to liquid.",evaporate:"To evaporate is to change from liquid to gas."},"List one solid, one liquid and one gas in your kitchen.","Solid, liquid or gas?"),Pt("science",2,"s2a","Forces and motion",["A force is a push or a pull","Balanced forces do not change motion; unbalanced forces do","Friction slows things down"],["A book on a table has balanced forces.","A kicked ball speeds up because of an unbalanced force."],{force:"A force is a push or pull.",friction:"Friction is a force that slows moving things.",gravity:"Gravity pulls objects toward each other."},"Push three objects and describe the force you used.","Balanced or unbalanced?"),Pt("science",2,"s2b","The scientific method",["Science starts with a question","A hypothesis is a testable prediction","Experiments change one thing at a time and collect data"],["Question: does light help plants grow?","Test two plants, one in light and one in dark, and measure each week."],{hypothesis:"A hypothesis is a testable prediction.",variable:"A variable is what you change or measure.",data:"Data is the information you collect."},"Design a simple test about plants and light.","Put the scientific method in order."),Pt("history",0,"h0a","Community helpers and rules",["Community helpers keep us safe and help us learn","Rules keep everyone fair and safe","We work together in a community"],["Firefighters and police officers help keep us safe.","Teachers and librarians help us learn."],{community:"A community is a group of people living or working together.",rule:"A rule says what we should or should not do.",helper:"A helper does a job that helps others."},"Thank one community helper this week.","How do they help?"),Pt("history",0,"h0b","Maps and places",["A map shows where places are","A map key explains the symbols","Land and water are shown in different colors"],["Blue on a map is usually water.","A compass rose shows north, south, east and west."],{map:"A map is a picture of a place from above.",key:"A map key explains the symbols.",compass:"A compass shows directions."},"Draw a map of your room with a key.","Land or water?"),Pt("history",1,"h1a","Continents and oceans",["There are seven continents","There are five oceans: Pacific, Atlantic, Indian, Southern and Arctic","The Pacific Ocean is the largest"],["Africa and Asia are continents.","The Atlantic lies between the Americas and Europe and Africa."],{continent:"A continent is a very large area of land.",ocean:"An ocean is a very large body of salt water.",equator:"The equator is the imaginary line around the middle of Earth."},"Name the seven continents from memory.","Continent or ocean?"),Pt("history",1,"h1b","Explorers and early America",["Native nations lived across North America long before Europeans arrived","Explorers crossed the ocean looking for new lands and trade","Colonies grew into towns, farms and trade networks"],["Jamestown was settled in 1607.","Native peoples taught many settlers how to farm local crops."],{explorer:"An explorer travels to learn about new places.",colony:"A colony is a settlement ruled by a faraway country.",trade:"Trade is the exchange of goods."},"Ask someone where your family came from.","Before or after 1600?"),Pt("history",2,"h2a","Ancient civilizations",["Early civilizations grew along rivers","Egypt had pharaohs, pyramids and the Nile","Rome began as a republic with a Senate"],["The Nile flooded each year and made farming possible.","Roman aqueducts carried water to cities."],{civilization:"A civilization is an organized society with cities and government.",pharaoh:"A pharaoh was a ruler of ancient Egypt.",republic:"A republic is led by elected leaders."},"Make a two-column chart comparing Egypt and Rome.","Egypt or Rome?"),Pt("history",2,"h2b","The American Revolution and the Constitution",["Colonists protested taxes without representation","The Declaration of Independence announced a new nation in 1776","The Constitution set up how the government works"],["The Boston Tea Party was a protest about taxes.","The Bill of Rights added protections like free speech."],{revolution:"A revolution is a big change, often of government.",constitution:"A constitution is the rules for a government.",amendment:"An amendment is a change added to the Constitution."},"Write why colonists said no taxation without representation.","Order the road to the Constitution.")];var eh=["math","ela","science","history"],Kf=t=>t<=7?0:t<=10?1:t<=13?2:3,Qf=["k2","g35","g68","hs"],Ov=t=>{t=t.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},zv=t=>{let e=Ov([t[1],...t[2]]);return{q:t[0],options:e,answer:e.indexOf(t[1])}},Hv={ela:[[["Which word rhymes with 'cat'?","hat",["dog","cup"]],["What letter does 'ball' start with?","b",["d","p"]],["Which is a complete sentence?","The dog ran.",["The big","Ran fast"]],["Which word is the opposite of 'up'?","down",["over","tall"]]],[["Which word is a verb?","jump",["happy","table"]],["What mark ends a question?","?",[".","!"]],["In 'The red ball rolled', which word is an adjective?","red",["ball","rolled"]],["The main idea of a paragraph is...","what it is mostly about",["its first word","its longest sentence"]]],[["A word that means the same as 'big' is a...","synonym",["antonym","homophone"]],["'Time is a thief' is a...","metaphor",["simile","rhyme"]],["The prefix 'un-' in 'unhappy' means...","not",["again","before"]],["Which sentence states a fact?","Water freezes at 0 C.",["Winter is the best season.","Ice is boring."]]],[["A theme is...","the central message of a work",["the main character","the setting"]],["Foreshadowing is...","hints about later events",["a flashback","a rhyme scheme"]],["Which is a primary source?","a diary written at the time",["a textbook","a movie about it"]],["An allusion is...","a reference to a well-known person, event or work",["a type of rhyme","a long speech"]]]],science:[[["Which is living?","a tree",["a rock","a chair"]],["What do plants need to grow?","sunlight and water",["candy","darkness"]],["Which season is usually coldest?","winter",["summer","spring"]],["Which animal can fly?","a bird",["a fish","a dog"]]],[["Ice is which state of matter?","solid",["liquid","gas"]],["Animals with fur that feed babies milk are...","mammals",["reptiles","insects"]],["What is at the center of our solar system?","the Sun",["the Moon","Earth"]],["Which plant part takes in water?","roots",["flowers","petals"]]],[["Which gas do plants take in for photosynthesis?","carbon dioxide",["oxygen","helium"]],["What is the unit of force?","newton",["joule","watt"]],["Which part of the cell makes most of its energy?","mitochondria",["cell wall","nucleus"]],["Which is a chemical change?","burning wood",["melting ice","cutting paper"]]],[["DNA stands for...","deoxyribonucleic acid",["dynamic nuclear acid","double nitrogen atom"]],["Which law says every action has an equal and opposite reaction?","Newton's third law",["the law of gravity","Ohm's law"]],["What is the pH of a neutral solution?","7",["0","14"]],["Which particle has a negative charge?","electron",["proton","neutron"]]]],history:[[["Who helps keep us safe in a fire?","a firefighter",["a baker","a painter"]],["A picture of a place from above is a...","map",["song","recipe"]],["Which is a good school rule?","raise your hand to speak",["run in the halls","shout in class"]],["A flag is a symbol of...","a country",["a snack","a game"]]],[["Who was the first U.S. president?","George Washington",["Abraham Lincoln","Thomas Edison"]],["How many continents are there?","7",["5","10"]],["People who travel to explore new lands are...","explorers",["teachers","farmers"]],["Which ocean is the largest?","Pacific",["Atlantic","Arctic"]]],[["The pyramids of Egypt were built as...","tombs for pharaohs",["markets","schools"]],["The Declaration of Independence was signed in...","1776",["1492","1865"]],["The Roman Republic was ruled by...","elected leaders and a Senate",["one pharaoh","the Vikings"]],["The Silk Road was a network for...","trade between Asia and Europe",["sailing to America","building pyramids"]]],[["How many branches does the U.S. government have?","3",["2","5"]],["The Industrial Revolution mainly changed...","how goods were made",["the calendar","the alphabet"]],["The Magna Carta limited...","the power of the king",["trade","farming"]],["'Checks and balances' means...","each branch limits the others",["one branch rules","voting every year"]]]]},Vv=(t,e,n)=>{if(t==="math"){for(let h=0;h<20;h++){let l=jl(Qf[e],Math.random);if(!n.has(l.q))return{q:l.q,options:l.options,answer:l.answer}}let a=jl(Qf[e],Math.random);return{q:a.q,options:a.options,answer:a.answer}}let i=Hv[t][e],s=i.filter(a=>!n.has(a[0])),r=s.length?s:i;return zv(r[Math.floor(Math.random()*r.length)])},nu={plan(t){let e=Nt.assessment();if(!e||e.levels[t]===void 0)return null;let n=e.levels[t],i=e.band,s=Nt.extraDone(t),r=[];for(let h=n;h<Math.min(i,3);h++)r.push(...Zf.filter(l=>l.subject===t&&l.band===h));let a=r.filter(h=>!s.includes(h.id));return{lessons:r,remaining:a,next:a[0]??null,level:n,expected:i}}},Gv=`.plWrap{position:fixed;inset:0;z-index:80;background:rgba(40,30,30,.6);display:flex;align-items:center;justify-content:center;padding:12px}
.plBox{background:#F3E7CF;border-radius:18px;max-width:620px;width:100%;max-height:92vh;overflow:auto;padding:18px 22px;font:16px/1.4 'Fredoka','Trebuchet MS',system-ui,sans-serif;color:#4A3B3F;box-shadow:0 3px 0 #C9B28A,0 14px 34px rgba(60,40,30,.5);border:1px solid rgba(255,255,255,.8)}
.plBox h2{font-size:22px;font-weight:600;margin-bottom:6px}.plBox p{margin:8px 0}.plBox small{color:#8A7A70}
.plBtn{font:inherit;font-size:16px;color:#4A3B3F;background:#FFF9F0;border:1px solid rgba(255,255,255,.8);border-radius:10px;padding:9px 14px;cursor:pointer;box-shadow:0 2px 0 #C9B28A;margin:4px 4px 4px 0;min-height:40px;text-align:left}
.plBtn:active{transform:translateY(2px);box-shadow:none}.plBtn.go{background:#E07A66;color:#fff}.plBtn.q{display:block;width:100%}.plBtn.dim{background:#EADFCB}.plAges{display:flex;flex-wrap:wrap}.plAges .plBtn{min-width:56px;text-align:center}
.plBar{height:8px;border-radius:5px;background:rgba(74,59,63,.15);overflow:hidden;margin:8px 0}.plBar i{display:block;height:100%;background:#E07A66}
.plTab{width:100%;border-collapse:collapse;margin:8px 0;font-size:15px}.plTab td,.plTab th{padding:6px 8px;border-top:1px solid #D9C9A8;text-align:left}.plTab th{font-size:12px;color:#8A7A70;text-transform:uppercase}.plChip{display:inline-block;border-radius:8px;padding:1px 8px;font-size:13px}`;function iu(){return new Promise(t=>{if(!document.getElementById("plCss")){let c=document.createElement("style");c.id="plCss",c.textContent=Gv,document.head.appendChild(c)}let e=document.createElement("div");e.className="plWrap";let n=document.createElement("div");n.className="plBox",e.appendChild(n),document.body.appendChild(e);let i=c=>{e.remove(),t(c)},s=(c,f,g="")=>{let v=document.createElement("button");return v.className="plBtn "+g,v.textContent=c,v.onclick=f,n.appendChild(v),v},r=c=>{n.innerHTML=`<h2>${c}</h2>`},a={},h=()=>{r("Welcome! Let's find your starting point"),n.insertAdjacentHTML("beforeend","<p>A few quick questions in math, reading, science and history show where you are. There are no grades and you will not lose anything.</p><p>Your regular classes always stay the same. If there is something to catch up on, you get <b>extra lessons</b> beside your classes.</p><small>About 10 minutes. You can skip any subject.</small><br><br>"),s("Start",l,"go"),s("Skip for now",()=>i(null),"dim")},l=()=>{r("How old are you?");let c=document.createElement("div");c.className="plAges",n.appendChild(c);let f=(g,v)=>{let p=document.createElement("button");p.className="plBtn",p.textContent=v,p.onclick=()=>{d(g,0)},c.appendChild(p)};for(let g=5;g<=18;g++)f(g,String(g));f(19,"19+"),n.insertAdjacentHTML("beforeend","<p><small>This sets the grade band your regular classes use: K-2, 3-5, 6-8 or high school.</small></p>")},o=(c,f,g,v,p)=>new Promise(m=>{let _=0,R=0,x=()=>{if(R>=3)return m(_>=2);let M=Vv(c,f,g);g.add(M.q),r(Yi[c]),n.insertAdjacentHTML("beforeend",`<div class="plBar"><i style="width:${Math.round((v+R/3)/p*100)}%"></i></div><p><small>Question ${R+1} of 3 in this step</small></p><p><b>${M.q}</b></p>`),M.options.forEach((T,C)=>s(T,()=>{C===M.answer&&_++,R++,x()},"q")),s("I don't know",()=>{R++,x()},"q dim"),s("Skip this subject",()=>m("stop"),"dim")};x()}),d=async(c,f)=>{if(f>=eh.length)return u(c);let g=eh[f],v=new Set,p=eh.length,m=Kf(c),_=-1,R=0,x=await o(g,m,v,f,p);if(x==="stop")return d(c,f+1);if(x)for(_=m;m<3&&R++<2;){let M=await o(g,m+1,v,f,p);if(M==="stop"||!M)break;m++,_=m}else{for(;m>0&&_<0&&R++<3;){m--;let M=await o(g,m,v,f,p);if(M==="stop")break;M&&(_=m)}_<0&&(_=0)}return a[g]=_,d(c,f+1)},u=c=>{let f={date:cs(),age:c,band:Kf(c),levels:a};Nt.saveAssessment(f),r("Your starting point"),n.insertAdjacentHTML("beforeend",`<p>Age ${c===19?"19+":c}: your regular classes use <b>${Aa[f.band]}</b> work.</p><table class="plTab"><tr><th>Subject</th><th>You are working at</th><th>Plan</th></tr>${eh.map(g=>{let v=a[g];if(v===void 0)return`<tr><td>${Yi[g]}</td><td>not tested</td><td>regular class only</td></tr>`;let p=nu.plan(g),m=f.band-v,_=m<=0?`<span class="plChip" style="background:#D6ECD6">${m<0?"ahead":"on level"}</span>`:`<span class="plChip" style="background:#FBE3B5">${p?.lessons.length??0} extra lessons</span>`;return`<tr><td>${Yi[g]}</td><td>${Aa[v]}</td><td>${_}</td></tr>`}).join("")}</table><p><small>Extra lessons are in each classroom's More menu and on the class times board. Regular classes keep going as usual.</small></p>`),s("Start my plan",()=>i(f),"go")};h()})}var th={math:"#4F91C7",ela:"#88B89A",science:"#5E9C72",history:"#C98569",careers:"#E8A33D",life:"#7CB6A0"},ep=t=>{let e=Yl[t],n=Nt.index(t,e.length);return{n:n+1,of:e.length,title:e[n].title}};function tp(t,e,n,i){t.fillStyle="#C9955E",t.fillRect(0,0,e,n);for(let o=0;o<e*n/220;o++)t.fillStyle=`rgba(${90+Math.random()*80},${50+Math.random()*50},20,.22)`,t.fillRect(Math.random()*e,Math.random()*n,2,2);t.strokeStyle="#7a4a2a",t.lineWidth=Math.round(n/28),t.strokeRect(0,0,e,n);let s=Math.round(n/22),r=(o,d,u,c,f,g=0)=>{t.save(),t.translate(o+u/2,d+c/2),t.rotate(g),t.fillStyle="rgba(60,40,30,.25)",t.fillRect(-u/2+4,-c/2+5,u,c),t.fillStyle=f,t.fillRect(-u/2,-c/2,u,c),t.fillStyle="#c4463c",t.beginPath(),t.arc(0,-c/2+9,6,0,7),t.fill(),t.restore()},a=(o,d=600)=>{t.font=`${d} ${o}px 'Trebuchet MS',sans-serif`},h=new Date().toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"});r(s*2,s*1.4,e-s*4,n*.2,"#FFF9F0",-.008),t.fillStyle="#E07A66",a(n*.105,800),t.textAlign="center",t.fillText(i?`${Yi[i].toUpperCase()}: TODAY'S TIMES`:"CLASS TIMES TODAY",e/2,s*1.4+n*.135),t.fillStyle="#6a5a50",a(n*.045,600),t.fillText(h,e/2,s*1.4+n*.185);let l=s*1.4+n*.23;if(i){let o=Nt.pickedFor(i),d=ep(i);r(s*2,l,e*.56,n*.5,"#FFF3C9",.006),t.textAlign="left",t.fillStyle="#4A3B3F",a(n*.05,700),t.fillText("5 session times today",s*3,l+n*.075),jc(i).forEach((g,v)=>{let p=o===g;t.fillStyle=p?th[i]:"#4A3B3F",a(n*.058,p?800:600),t.fillText(`${p?"\u2714 ":""}${us(g)}`,s*3,l+n*.15+v*n*.07)}),r(e*.62,l,e*.34,n*.23,"#DCEBFA",-.012),t.fillStyle="#4A3B3F",a(n*.04,700),t.fillText("Or pick a set time",e*.635,l+n*.06),$l.forEach((g,v)=>{a(n*.04,600),t.fillText(`${g.label}: ${us(g.min)}`,e*.635,l+n*.115+v*n*.042)}),r(e*.62,l+n*.26,e*.34,n*.24,"#E3F4E4",.01),t.fillStyle="#4A3B3F",a(n*.04,700),t.fillText(`Lesson ${d.n} of ${d.of}`,e*.635,l+n*.32),a(n*.036,500);let u=d.title.split(" "),c="",f=l+n*.37;for(let g of u)(c+g).length>20&&(t.fillText(c,e*.635,f),c="",f+=n*.04),c+=g+" ";t.fillText(c,e*.635,f),t.textAlign="center",t.fillStyle="#5a4a40",a(n*.036,600),t.fillText("Finish a lesson and the next one opens so you can get ahead.",e/2,n-s*1.1)}else{let o=Yc,d=(n-l-s*2.4)/o.length;o.forEach((u,c)=>{let f=l+c*d,g=Nt.pickedFor(u),v=ep(u);r(s*2,f,e-s*4,d-6,c%2?"#FFF9F0":"#FFF3C9",(c%2?1:-1)*.004),t.fillStyle=th[u],t.fillRect(s*2.6,f+8,10,d-22),t.textAlign="left",t.fillStyle="#4A3B3F",a(d*.42,800),t.fillText(Yi[u],s*2.6+22,f+d*.52),a(d*.3,500),t.fillStyle="#6a5a50",t.fillText(`Lesson ${v.n}/${v.of}`,s*2.6+22,f+d*.86),t.textAlign="right",a(d*.44,800),t.fillStyle=g!==null?th[u]:"#9a8a80",t.fillText(g!==null?us(g):"pick a time",e-s*2.8,f+d*.6)}),t.textAlign="center",t.fillStyle="#4A3B3F",a(n*.036,700),t.fillText("5 random times a day, or Morning, Noon or Evening",e/2,n-s*1.1)}}var Wv=`.tmWrap{position:fixed;inset:0;z-index:60;background:rgba(40,30,30,.5);display:none;align-items:center;justify-content:center;padding:12px}.tmWrap.show{display:flex}
.tmPanel{background:#F3E7CF;border-radius:18px;max-width:760px;width:100%;max-height:92vh;overflow:auto;padding:16px 18px;box-shadow:0 3px 0 #C9B28A,0 14px 34px rgba(60,40,30,.5);border:1px solid rgba(255,255,255,.8);font:15px/1.35 'Fredoka','Trebuchet MS',system-ui,sans-serif;color:#4A3B3F}
.tmHead{display:flex;justify-content:space-between;align-items:center;gap:10px}.tmHead h2{font-size:22px;font-weight:600}.tmHead small{color:#8A7A70;display:block;font-size:13px}
.tmRow{background:#FFF9F0;border-radius:12px;margin-top:10px;padding:10px 12px;border-left:8px solid var(--c);box-shadow:0 2px 0 #C9B28A}.tmRow.focus{outline:3px solid #E07A66}
.tmTop{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap}.tmTop b{font-size:17px}.tmTop span{font-size:13px;color:#8A7A70}
.tmChips{display:flex;flex-wrap:wrap;gap:6px;margin-top:7px;align-items:center}.tmChips em{font-style:normal;font-size:12px;color:#8A7A70;min-width:74px}
.tmChip,.tmBtn{font:inherit;font-size:14px;color:#4A3B3F;background:#F3E7CF;border:1px solid rgba(255,255,255,.8);border-radius:10px;padding:5px 10px;cursor:pointer;box-shadow:0 2px 0 #C9B28A;min-height:34px}
.tmChip.on{background:var(--c);color:#fff;border-color:var(--c)}.tmChip:active,.tmBtn:active{transform:translateY(2px);box-shadow:none}.tmBtn.go{background:#E07A66;color:#fff}.tmBtn.x{background:#FFF9F0}
.tmNext{display:inline-block;background:#D6ECD6;border-radius:8px;padding:2px 8px;font-size:12px;margin-left:6px}`,qv=(t,e)=>{let n=nu.plan(t);if(!n||!n.next)return"";let i=Nt.pickedFor(t,!0);return`<div class="tmChips"><em>Extra lesson</em><span style="font-size:13px">${n.next.title} (${n.remaining.length} left)</span></div><div class="tmChips"><em>Extra time</em>${$l.map(s=>`<button class="tmChip${i===s.min?" on":""}" style="--c:${e}" data-s="${t}" data-m="${s.min}" data-k="set" data-x="1">${s.label} ${us(s.min)}</button>`).join("")}</div>`},cn=null;function np(t={}){if(!cn){let i=document.createElement("style");i.textContent=Wv,document.head.appendChild(i),cn=document.createElement("div"),cn.className="tmWrap",document.body.appendChild(cn),cn.addEventListener("pointerdown",s=>{s.target===cn&&e()}),addEventListener("keydown",s=>{s.key==="Escape"&&cn?.classList.contains("show")&&e()}),addEventListener("unify:progress",()=>{cn?.classList.contains("show")&&n()})}let e=()=>{cn.classList.remove("show"),dispatchEvent(new Event("unify:times-closed"))},n=()=>{let i=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"});cn.innerHTML=`<div class="tmPanel"><div class="tmHead"><div><h2>Class times</h2><small>${i}. Pick a session time for each class: one of 5 random times, or Morning, Noon or Evening. It goes on today's schedule in your phone.</small></div><button class="tmBtn x" data-x>Close</button></div>${Yc.map(s=>{let r=Nt.pickedFor(s),a=Yl[s],h=Nt.index(s,a.length),l=th[s];return`<div class="tmRow${t.focus===s?" focus":""}" style="--c:${l}"><div class="tmTop"><b>${Yi[s]}</b><span>${Xl[s].name} \xB7 Lesson ${h+1} of ${a.length}: ${a[h].title}${Nt.doneCount(s)?`<i class="tmNext">${Nt.doneCount(s)} done, next lesson ready</i>`:""}</span></div>
      <div class="tmChips"><em>5 times today</em>${jc(s).map(o=>`<button class="tmChip${r===o?" on":""}" data-s="${s}" data-m="${o}" data-k="random">${us(o)}</button>`).join("")}</div>
      <div class="tmChips"><em>Set times</em>${$l.map(o=>`<button class="tmChip${r===o.min?" on":""}" data-s="${s}" data-m="${o.min}" data-k="set">${o.label} ${us(o.min)}</button>`).join("")}${r!==null?`<button class="tmBtn x" data-clear="${s}">Clear</button>`:""}${t.onGo?`<button class="tmBtn go" data-go="${s}">Go to class</button>`:""}</div>${qv(s,l)}</div>`}).join("")}</div>`,cn.querySelector("[data-x]").addEventListener("click",e),cn.querySelectorAll(".tmChip").forEach(s=>s.addEventListener("click",()=>{let r=s.dataset.s,a=+s.dataset.m,h=!!s.dataset.x;Nt.pickedFor(r,h)===a?Nt.unpick(r,h):Nt.pick(r,a,s.dataset.k,h),n()})),cn.querySelectorAll("[data-clear]").forEach(s=>s.addEventListener("click",()=>{Nt.unpick(s.dataset.clear),n()})),cn.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",()=>{e(),t.onGo?.(s.dataset.go)}))};n(),cn.classList.add("show")}var ip=1.75/45,gn=(t,e)=>new I(t-56/2,0,e-44/2);var Xv=["#7fb2d6","#f2a79b","#9fd0b0","#f4d488"],_i={math:"#4F91C7",ela:"#88B89A",science:"#8FC9E8",history:"#C98569",careers:"#E8A33D",life:"#7CB6A0"},nh={math:"MATH",ela:"ELA",science:"SCIENCE",history:"HISTORY",careers:"CAREERS",life:"LIFE"};var An=(t,e)=>{let n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},sp=[{key:"math",label:"Math",color:_i.math},{key:"ela",label:"ELA",color:_i.ela},{key:"science",label:"Science",color:_i.science},{key:"history",label:"History",color:_i.history},{key:"careers",label:"CarryingCareers",color:_i.careers},{key:"life",label:"Life Lessons",color:_i.life},{key:"news",label:"Newsroom",color:"#B8A8DA"},{key:"plaza",label:"Plaza fountain",color:"#EAB94E"},{key:"entrance",label:"Main entrance",color:"#F28F7E"}],ih=class{constructor(e){this.host=e;this.scene=new Fr;this.camera=new tn(48,1,.1,260);this.clock=0;this.idx=-1;this.speed=1;this.view="close";this.tint=[255,255,255,0];this.students=[];this.duty=[];this.inDoor=null;this.onToast=()=>{};this.keys={};this.input={x:0,y:0};this.rotate=0;this.inputLocked=!1;this.onTick=[];this.onTap=()=>{};this.yaw=0;this.pitch=.62;this.zoom=1;this.fpitch=0;this.navLabel="";this.nav=null;this.walkers=[];this.open=[];this.occl=[];this.shadowR=0;this.texCache=new Map;this.camPos=new I(0,6,8);this.camLook=new I(0,1,-4);this.last=performance.now();this.t=0;this.blobTex=wf();this.boardPos=gn(28,15.6);this.ray=new Zr;this.lastClockMsg=0;this.frame=e=>{let n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.t+=n;let i=n*this.speed;this.clock+=i,this.clock>=kc&&(this.clock-=kc),parent!==window&&e-this.lastClockMsg>1e3&&(this.lastClockMsg=e,parent.postMessage({type:"unify:clock",minutes:Ic+Math.floor(this.clock)},"*"));let s=cf(this.clock);s!==this.idx&&(this.idx=s,this.enterPeriod(s));let r=this.inputLocked?0:(this.keys.e?1:0)-(this.keys.q?1:0)+this.rotate;r&&(this.yaw+=r*1.9*n);let a=new I;this.camera.getWorldDirection(a),a.y=0,a.lengthSq()<1e-4&&a.set(0,0,-1),a.normalize();for(let o of this.students)if(o.pending&&(o.pending.delay-=i,o.pending.delay<=0&&this.begin(o)),!o.hidden){if(o.talking){o.moving=!1,o.frame=0;continue}if(o.fade<1&&(o.fade=Math.min(1,o.fade+i*3),o.mat.opacity=o.fade),o.path.length){let d=o.path[0],u=d.clone().sub(o.pos);u.y=0;let c=u.length(),f=o.speed*i;c<=f?(o.pos.copy(d),o.path.shift()):(u.normalize(),o.pos.addScaledVector(u,f),o.dir=this.dirFrom(u,a,o.dir)),o.moving=!0,o.frame=1+Math.floor(this.t*o.speed*3.4)%4,!o.path.length&&o.hideOnArrive&&(o.hidden=!0,o.sprite.visible=!1,o.blob.visible=!1,o.moving=!1)}else o.moving=!1,o.frame=0}this.patrol(i,a);for(let o of this.onTick)o(n,i);this.movePlayer(n,a),this.updateCamera(n),this.fadeOccluders(n),this.player.sprite.visible=this.view!=="first",this.player.blob.visible=this.view!=="first";for(let o of[...this.students,this.player,this.monitor,this.teacher,...this.duty])if(!o.hidden){if(o.sprite.position.copy(o.pos),this.view==="first"&&o!==this.player){let d=o.pos.distanceTo(this.camera.position)<1.1;o.sprite.visible=!d,o.blob.visible=!d}else o!==this.player&&(o.sprite.visible=!0,o.blob.visible=!0);o.blob.position.set(o.pos.x,.02,o.pos.z),this.setFrame(o,o.dir,o.frame)}let h=jn[this.idx].tint,l=Math.min(1,n*1.5);for(let o=0;o<4;o++)this.tint[o]+=(h[o]-this.tint[o])*l;this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.frame)};let n=this.renderer=new zl({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Xo,n.outputColorSpace=Ut,e.appendChild(n.domElement),this.scene.background=new $e("#EADFCB"),this.scene.fog=new Dr("#EADFCB",80,190),this.reachable(),this.buildLights(),this.buildCampus(),this.buildOutside(),this.buildPeople(),addEventListener("resize",()=>this.resize()),this.resize(),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&(this.keys[i.key.toLowerCase()]=!0,i.key.startsWith("Arrow")&&i.preventDefault())}),addEventListener("keyup",i=>{this.keys[i.key.toLowerCase()]=!1}),addEventListener("blur",()=>{this.keys={}}),addEventListener("message",i=>{let s=i.data;s&&s.type==="unify:exit"&&this.placeAtDoor(s.room)}),this.bindPointer(n.domElement),this.setView("close",!0),requestAnimationFrame(this.frame)}resize(){let e=this.host.clientWidth||innerWidth,n=this.host.clientHeight||innerHeight;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.fov=e/n<.8?62:48,this.camera.updateProjectionMatrix()}tex(e,n){let i=this.texCache.get(e);return i||(i=n(),this.texCache.set(e,i)),i}rep(e,n,i,s=1){let r=`${e}@${i.toFixed(2)}x${s.toFixed(2)}`,a=this.texCache.get(r);return a||(a=this.tex(e,n).clone(),a.repeat.set(i,s),a.needsUpdate=!0,this.texCache.set(r,a)),a}bindPointer(e){let n=!1,i=0,s=0,r=0,a=0,h=0;e.addEventListener("pointerdown",l=>{n=!0,i=r=l.clientX,s=a=l.clientY,h=performance.now(),e.setPointerCapture(l.pointerId)}),e.addEventListener("pointermove",l=>{if(!n)return;let o=l.clientX-i,d=l.clientY-s;i=l.clientX,s=l.clientY,this.yaw-=o*.0065,this.view==="first"?this.fpitch=Math.max(-.6,Math.min(.6,this.fpitch-d*.004)):this.pitch=Math.max(.2,Math.min(1.3,this.pitch+d*.004))}),e.addEventListener("pointerup",l=>{let o=n;n=!1,o&&Math.hypot(l.clientX-r,l.clientY-a)<7&&performance.now()-h<500&&this.handleTap(l.clientX,l.clientY)}),e.addEventListener("pointercancel",()=>{n=!1}),e.addEventListener("wheel",l=>{l.preventDefault(),this.zoom=Math.max(.45,Math.min(1.6,this.zoom*Math.exp(l.deltaY*.0012)))},{passive:!1})}buildLights(){this.scene.add(new Yr(16774888,14996404,2.1));let e=this.sun=new Jr(16773336,1.25);e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=70,e.shadow.bias=-4e-4,e.shadow.radius=5,this.scene.add(e,e.target)}std(e,n="#ffffff"){return new nn({map:e,color:n,roughness:.95,metalness:0})}plain(e){return new nn({color:e,roughness:1})}box(e,n,i,s,r,a,h,l={}){let{outline:o=!0,occlude:d=!1,shadow:u=!0}=l;d&&(s=(Array.isArray(s)?s:[s]).map(f=>f.clone()));let c=new Ne(new _n(e,n,i),s);return c.position.set(r,a,h),c.castShadow=u,c.receiveShadow=!0,this.scene.add(c),o&&c.add(new ts(new ns(c.geometry),new Ii({color:7166559,transparent:!0,opacity:.55}))),d&&this.occl.push({mats:Array.isArray(s)?s:[s],box:new Pn().setFromCenterAndSize(c.position,new I(e+.05,n,i+.05)),o:1}),c}card(e,n,i,s,r,a,h,l=!1){let o=new Yt,d=new Ne(new $t(n*1.12,i*1.12),new pn({map:this.tex("cardsh",()=>zc()),transparent:!0,opacity:.55,depthWrite:!1}));d.position.set(0,-.05,0);let u=new Ne(new $t(n,i),l?new pn({map:e,transparent:!0}):new nn({map:e,roughness:1,transparent:!0}));return u.position.z=.025,u.receiveShadow=!0,o.add(d,u),o.position.set(s,r,a),o.rotation.y=h,this.scene.add(o),u}flat(e,n,i,s,r,a=.012,h=0){let l=new $t(n,i);l.rotateX(-Math.PI/2),h&&l.rotateY(h);let o=new Ne(l,this.std(e));return o.position.set(s,a,r),o.receiveShadow=!0,this.scene.add(o),o}rotOf(e){return e==="S"?0:e==="N"?Math.PI:e==="E"?Math.PI/2:-Math.PI/2}onFace(e,n,i,s){return n==="S"?{x:e.x+e.w*i-56/2,z:e.y+e.h-44/2+s}:n==="N"?{x:e.x+e.w*i-56/2,z:e.y-44/2-s}:n==="E"?{x:e.x+e.w-56/2+s,z:e.y+e.h*i-44/2}:{x:e.x-56/2-s,z:e.y+e.h*i-44/2}}buildCampus(){let e=this.scene,n=this.plain("#F7ECD6"),i=this.plain("#D8C6A4"),s=new Ne(new $t(63,51),new pn({map:this.tex("dio",()=>zc()),transparent:!0,opacity:.7,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(.4,-.02,.4),e.add(s);let r=new Ne(new $t(56,44),this.std(this.rep("floor",()=>yf(),56/2,44/2)));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),this.flat(this.rep("stoneA",()=>va(),46/4,10/4),46,10,0,0,.012),this.flat(this.rep("stoneB",()=>va(),14/4,34/4),14,34,0,0,.012);let a=(u,c,f,g)=>this.flat(this.rep("rug",()=>bf(),1,u/4),2,u,c,f,.014,g?Math.PI/2:0);a(52,0,-44/2+2.5,!0),a(40,-56/2+2.5,0,!1),a(40,56/2-2.5,0,!1),a(48/2-1,-56/4-2.5,44/2-2.5,!0),a(48/2-1,56/4+2.5,44/2-2.5,!0);let h=(u,c,f,g,v)=>{let p=this.std(this.rep("wall",()=>ba(),u/4)),m=[i,i,n,i,i,i];m[v]=p,this.box(g?u:.3,4.2,g?.3:u,m,c,4.2/2,f,{outline:!1,occlude:!0})};h(56+.6,0,-44/2-.15,!0,4),h(44,-56/2-.15,0,!1,0),h(44,56/2+.15,0,!1,1);let l=Fn.gap.x0-56/2,o=Fn.gap.x1-56/2,d=44/2+.15;h(l+56/2+.3,(-56/2-.3+l)/2,d,!0,5),h(56/2+.3-o,(o+56/2+.3)/2,d,!0,5),this.box(o-l,.9,.3,[i,i,n,i,i,this.std(this.rep("wall",()=>ba(),2))],(l+o)/2,4.2-.45,d,{outline:!1}),this.card(this.tex("banner",()=>Hc("UNIFY ACADEMY")),7.6,1.2,(l+o)/2,3.2,44/2-.05,Math.PI,!0),this.card(this.tex("exit",()=>Hc("WELCOME")),5.2,.8,(l+o)/2,3.2,44/2+.35,0,!0),this.card(this.tex("clock",()=>_f()),1.1,1.1,-9,3.05,-44/2+.17,0);for(let u=4;u<53;u+=6)Math.abs(u-56/2)>1.5&&this.card(this.tex("win",()=>or()),1.5,1.9,u-56/2,3.05,-44/2+.17,0);for(let u=4;u<53;u+=6)(u<Fn.gap.x0-2||u>Fn.gap.x1+2)&&this.card(this.tex("win",()=>or()),1.5,1.9,u-56/2,3.05,44/2-.17,Math.PI);for(let u=5;u<41;u+=6)this.card(this.tex("win",()=>or()),1.5,1.9,-56/2+.17,3.05,u-44/2,Math.PI/2),this.card(this.tex("win",()=>or()),1.5,1.9,56/2-.17,3.05,u-44/2,-Math.PI/2);{let u=qi.cx-56/2,c=-44/2;this.box(2.3,3.5,.18,this.plain("#9A653D"),u,1.75,c+.09);let f=new Ne(new $t(1.95,3.15),new nn({map:this.tex("door-news",()=>Uc("#B8A8DA")),roughness:.95}));f.position.set(u,1.6,c+.19),f.receiveShadow=!0,e.add(f);let g=new Ne(new $t(1.9,.48),new pn({map:this.tex("sign-news",()=>Bc("NEWSROOM","#8173AE")),transparent:!0}));g.position.set(u,3.8,c+.2),e.add(g)}this.bunting([[-56/2+.06,-44/2+.06,56/2-.06,-44/2+.06],[-56/2+.06,-44/2+.06,-56/2+.06,44/2-.06],[56/2-.06,-44/2+.06,56/2-.06,44/2-.06]],3.95);for(let u of pa){let c=u.rect,f=u.subject,g=ci.find(Y=>Y.subject===f),v=this.std(this.rep("wall",()=>ba(),c.h/4)),p=this.std(this.rep("wall",()=>ba(),c.w/4)),m=this.std(this.tex(`roof-${f}`,()=>Ef(nh[f],_i[f],f==="science"?"#3b3340":"#FFF9F0")));this.box(c.w,4.2,c.h,[v,v,m,i,p,p],c.x+c.w/2-56/2,4.2/2,c.y+c.h/2-44/2,{occlude:!0});let _=["N","S","E","W"];for(let Y of _){let D=Y==="N"||Y==="S"?c.w:c.h,ie=Math.round(D/4.6);for(let q=0;q<ie;q++){let K=(q+.5)/ie,N=this.onFace(c,Y,K,.17),J=Y==="N"||Y==="S"?c.x+c.w*K:g.cx;Y===g.face&&Math.abs(J-g.cx)<2.6||this.card(this.tex("win",()=>or()),1.5,1.9,N.x,3.05,N.z,this.rotOf(Y))}}let R=g.face,x=(Y,D)=>({p:this.onFace(c,R,(g.cx+Y-c.x)/c.w,.17),i:D}),M=x(-5.2,0),T=x(5.2,1),C=x(-3.4,2),b=x(3.4,3);c.w>=8&&(this.card(this.tex(`po${M.i}`,()=>Oc(M.i+(f==="ela"?1:0))),1,1.25,M.p.x,1.45,M.p.z,this.rotOf(R)),this.card(this.tex(`po${T.i}`,()=>Oc(T.i+(f==="math"?1:0))),1,1.25,T.p.x,1.45,T.p.z,this.rotOf(R)),this.card(this.tex("board",()=>vf()),1.6,1.1,C.p.x,2.2,C.p.z,this.rotOf(R)),this.card(this.tex("trophy",()=>xf()),1.1,1,b.p.x,2.2,b.p.z,this.rotOf(R)));let A=R==="S"?1:-1,w=g.cy-44/2,k=g.cx-56/2,z=A>0?0:Math.PI;this.box(2.3,3.5,.18,this.plain("#9A653D"),k,1.75,w+A*.09,{occlude:!1});let L=new Ne(new $t(1.95,3.15),new nn({map:this.tex(`door-${f}`,()=>Uc(_i[f])),roughness:.95}));L.position.set(k,1.6,w+A*.19),L.rotation.y=z,L.receiveShadow=!0,e.add(L);let V=new Ne(new $t(1.9,.48),new pn({map:this.tex(`sign-${f}`,()=>Bc(f==="careers"?"CARRYING CAREERS":f==="life"?"LIFE LESSONS":nh[f],_i[f],f==="science"?"#3b3340":"#FFF9F0")),transparent:!0}));V.position.set(k,3.8,w+A*.2),V.rotation.y=z,e.add(V)}Fc.forEach((u,c)=>{let f=u.rect,g=u.face==="N"||u.face==="S"?f.w:f.h,v=this.std(this.rep("lockers",()=>Mf(Xv),g/4)),p=this.plain("#9db8c8"),m=this.plain("#FFF6E6"),_=[p,p,m,p,p,p];_[{E:0,W:1,S:4,N:5}[u.face]]=v,this.box(f.w,2.3,f.h,_,f.x+f.w/2-56/2,1.15,f.y+f.h/2-44/2,{occlude:!0})}),this.buildClassBoard();for(let u of Nc){let c=u.x-56/2,f=u.y-44/2;u.kind==="tree"?this.tree(c,f):u.kind==="fountain"?this.fountain(c,f):u.kind==="table"?this.table(c,f):u.kind==="bench"?this.bench(c,f,u.rot??0):u.kind==="planter"?this.plant(c,f):u.kind==="board"||this.lamp(c,f,Yv(u.x+u.y))}}tree(e,n){let i=new Yt,s=new Ne(new Xt(.62,.5,.5,10),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=new Ne(new Xt(.1,.16,1.6,6),this.plain("#9A653D"));r.position.y=1.2,r.castShadow=!0,i.add(r),[[0,2.5,0,1.05,"#5E9C72"],[.45,2,.2,.7,"#88B89A"],[-.4,2.15,-.25,.75,"#3F7655"]].forEach(([a,h,l,o,d])=>{let u=new Ne(new qs(o,0),new nn({color:d,roughness:1,flatShading:!0}));u.position.set(a,h,l),u.castShadow=!0,i.add(u)}),i.position.set(e,0,n),this.scene.add(i)}fountain(e,n){let i=new Yt,s=this.plain("#F7ECD6"),r=new Ne(new Xt(2.25,2.35,.6,28),s);r.position.y=.3,r.castShadow=r.receiveShadow=!0,i.add(r),r.add(new ts(new ns(r.geometry,40),new Ii({color:7166559,transparent:!0,opacity:.5})));let a=new Ne(new Xt(1.95,1.95,.05,28),new nn({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25,roughness:.4}));a.position.y=.6,i.add(a);let h=new Ne(new Xt(.3,.42,1.5,14),s);h.position.y=1.2,h.castShadow=!0,i.add(h);let l=new Ne(new Xt(.95,.5,.3,20),s);l.position.y=1.9,l.castShadow=!0,i.add(l);let o=new Ne(new Xt(.8,.8,.05,20),new nn({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25}));o.position.y=2.05,i.add(o);let d=new Ne(new Fi(.22,.9,10),new nn({color:"#DDF3FB",emissive:"#DDF3FB",emissiveIntensity:.4,transparent:!0,opacity:.85}));d.position.y=2.55,i.add(d),i.position.set(e,0,n),this.scene.add(i)}table(e,n){let i=new Yt,s=new Ne(new Xt(.8,.8,.08,20),this.plain("#F1C887"));s.position.y=.78,s.castShadow=s.receiveShadow=!0,i.add(s);let r=new Ne(new Xt(.09,.14,.78,8),this.plain("#9A653D"));r.position.y=.39,i.add(r),["#F28F7E","#8FC9E8","#A9DCC0","#B8A8DA"].forEach((a,h)=>{let l=h/4*Math.PI*2+.4,o=new Ne(new Xt(.22,.2,.46,10),this.plain(a));o.position.set(Math.cos(l)*1,.23,Math.sin(l)*1),o.castShadow=!0,i.add(o)}),i.position.set(e,0,n),this.scene.add(i)}bench(e,n,i){let s=new Yt;s.add(this.part(.62,.1,1.8,"#F1C887",0,.5,0)),s.add(this.part(.12,.45,1.7,"#9A653D",-.24,.25,0)),s.add(this.part(.1,.5,1.8,"#F28F7E",-.3,.8,0)),s.rotation.y=i,s.position.set(e,0,n),this.scene.add(s)}part(e,n,i,s,r,a,h){let l=new Ne(new _n(e,n,i),this.plain(s));return l.position.set(r,a,h),l.castShadow=!0,l.receiveShadow=!0,l}lamp(e,n,i){let s=new Yt,r=new Ne(new Xt(.05,.07,3,6),this.plain("#9A653D"));r.position.y=1.5,r.castShadow=!0,s.add(r);let a=new Ne(new qr(.34,18,12),new nn({map:this.tex(`lan-${i}`,()=>Sf(i)),emissive:i,emissiveIntensity:.3,roughness:1}));a.scale.y=1.2,a.position.y=3.2,a.castShadow=!0,s.add(a),s.position.set(e,0,n),this.scene.add(s)}plant(e,n){let i=new Yt,s=new Ne(new Xt(.5,.38,.5,14),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=["#5E9C72","#88B89A","#3F7655","#A9DCC0"];for(let a=0;a<12;a++){let h=a/12*Math.PI*2,l=new Ne(new Fi(.11,1+a%3*.25,4),this.plain(r[a%4]));l.position.set(Math.cos(h)*.26,.95,Math.sin(h)*.26),l.rotation.set(Math.sin(h)*.5,0,-Math.cos(h)*.5),l.castShadow=!0,i.add(l)}i.position.set(e,0,n),this.scene.add(i)}bunting(e,n){let i=[15896446,15382862,9423336,11132096,12101850,15377842].map(h=>new $e(h)),s=[],r=[];for(let[h,l,o,d]of e){let u=Math.hypot(o-h,d-l),c=Math.floor(u/.9),f=(o-h)/u,g=(d-l)/u;for(let v=0;v<c;v++){let p=.45+v*.9,m=h+f*p,_=l+g*p,R=i[v%6];s.push(m-f*.22,n,_-g*.22,m+f*.22,n,_+g*.22,m,n-.5,_);for(let x=0;x<3;x++)r.push(R.r,R.g,R.b)}}let a=new Bt;a.setAttribute("position",new dt(s,3)),a.setAttribute("color",new dt(r,3)),this.scene.add(new Ne(a,new pn({vertexColors:!0,side:kn})))}buildOutside(){let e=this.scene,n=this.rep("grass",()=>Tf(),60,60),i=new Ne(new $t(480,480),this.std(n));i.rotation.x=-Math.PI/2,i.position.y=-.04,i.receiveShadow=!0,e.add(i),this.flat(this.rep("stoneP",()=>va(),2,7),7.4,28,0,44/2+14,-.02);let s=new Ne(new Wr(9,40),this.std(this.rep("stoneD",()=>va(),5,5)));s.rotation.x=-Math.PI/2,s.position.set(0,-.015,44/2+30),s.receiveShadow=!0,e.add(s);let r=[];for(let c=0;c<900&&r.length<190;c++){let f=(An(c,1)-.5)*150,g=(An(c,2)-.5)*140+8;Math.abs(f)<56/2+5&&Math.abs(g)<44/2+5||Math.abs(f)<6&&g>0||Math.hypot(f,g-(44/2+30))<11||r.push({x:f,z:g,s:.8+An(c,3)*.9})}let a=new Gs(new qs(1.5,0),new nn({roughness:1,flatShading:!0}),r.length),h=new Gs(new Xt(.16,.24,1.8,6),this.plain("#9A653D"),r.length),l=new lt,o=["#5E9C72","#88B89A","#3F7655","#A9DCC0","#EAB94E","#F2A79B"];r.forEach((c,f)=>{l.compose(new I(c.x,2.7*c.s,c.z),new xn().setFromEuler(new qn(0,An(f,5)*6,0)),new I(c.s,c.s*1.15,c.s)),a.setMatrixAt(f,l),a.setColorAt(f,new $e(o[An(f,6)<.12?4+(f&1):Math.floor(An(f,7)*4)])),l.compose(new I(c.x,.9*c.s,c.z),new xn,new I(c.s,c.s,c.s)),h.setMatrixAt(f,l)}),a.castShadow=h.castShadow=!0,e.add(a,h);let d=["#F2A79B","#F4D488","#9FD0B0","#9CC3E0","#E8C39A","#C9B7E8"],u=["#C98569","#9A653D","#7C94B0","#B8604F"];for(let c=0;c<26;c++){let f=c/26*Math.PI*2+An(c,8)*.2,g=78+An(c,9)*18,v=Math.cos(f)*g*1.1,p=Math.sin(f)*g*.85+6;if(Math.abs(v)<8&&p>0)continue;let m=5+An(c,10)*4,_=3.5+An(c,11)*2.5,R=new Yt,x=new Ne(new _n(m,_,m*.9),this.plain(d[c%6]));x.position.y=_/2,x.castShadow=!0,R.add(x),x.add(new ts(new ns(x.geometry),new Ii({color:7166559,transparent:!0,opacity:.45})));let M=new Ne(new Fi(m*.82,_*.7,4),this.plain(u[c%4]));M.position.y=_+_*.35,M.rotation.y=Math.PI/4,M.castShadow=!0,R.add(M),R.position.set(v,0,p),R.rotation.y=An(c,12)*6,e.add(R)}for(let c=0;c<14;c++){let f=c/14*Math.PI*2+.2,g=118+An(c,13)*30,v=14+An(c,14)*14,p=new Ne(new Fi(v*1.5,v,6),new nn({color:["#A9CDB8","#B7D8A4","#9CC3A8"][c%3],roughness:1,flatShading:!0}));p.position.set(Math.cos(f)*g*1.15,v/2-.5,Math.sin(f)*g*.9+6),e.add(p)}}makePerson(e,n,i=ar[n.age??"hs"]*(n.hScale??1)){let s=new Li(ff(n));s.colorSpace=Ut,s.repeat.set(1/da,1/ua.length),s.anisotropy=4;let r=new Vs({map:s,transparent:!0}),a=new Or(r);a.center.set(.5,Dc/rr),a.scale.set(ca/fa*ip*i,rr/fa*ip*i,1),this.scene.add(a);let h=new Ne(new $t(1.1,.6),new pn({map:this.blobTex,transparent:!0,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.position.y=.02,this.scene.add(h),{id:e,look:n,sprite:a,mat:r,tex:s,blob:h,pos:new I,dir:0,frame:0,moving:!1}}reachable(){let e=new Set,n=[Fn.tile.y*56+Fn.tile.x];for(e.add(n[0]);n.length;){let i=n.pop(),s=i%56,r=Math.floor(i/56);for(let[a,h]of[[1,0],[-1,0],[0,1],[0,-1]]){let l=s+a,o=r+h,d=o*56+l;l<0||o<0||l>=56||o>=44||ui[o][l]!=="."||e.has(d)||(e.add(d),n.push(d))}}this.open=[...e].map(i=>({x:i%56,y:Math.floor(i/56)})).filter(i=>i.y<42)}buildPeople(){let e=gn(Fn.tile.x+.5,Fn.tile.y+.5);this.students=cr.slice(0,Nf).map((n,i)=>{let s=n.age,r=this.makePerson(n.id,n.look);r.pos.copy(e),r.sprite.visible=!1,r.blob.visible=!1,r.def=n;let a=ci[i%4];return Object.assign(r,{hidden:!0,path:[],speed:Wi(2.3,3.1)*(s==="k2"?.8:s==="g35"?.9:s==="g68"?.97:1),pending:null,lastDoor:{x:Math.floor(a.approach.x),y:Math.floor(a.approach.y)},hideOnArrive:!1,fade:1})}),this.player=this.makePerson(11,{...Xi(Ce.profile.avatar,11),tag:!0}),this.player.pos.copy(gn(28,35)),this.monitor=this.makePerson(Jn[0].id,Jn[0].look),this.monitor.def=Jn[0],this.monitor.pos.copy(gn(10.5,18.5)),this.teacher=this.makePerson(Jn[1].id,Jn[1].look),this.teacher.def=Jn[1],this.teacher.pos.copy(gn(46.5,26.5)),this.duty=Jn.filter(n=>n.faculty==="park").map((n,i)=>{let s=this.makePerson(n.id,n.look);return s.def=n,s.pos.copy(gn(i?30.5:22.5,i?36.5:8.5)),s}),this.walkers=[{p:this.duty[0],stops:[[22,8],[28,2],[53,10],[46,18],[28,22],[10,18],[2,10]],path:[],leg:0,speed:.95},{p:this.monitor,stops:[[10,18],[46,18],[53,22],[46,26],[10,26],[2,22],[28,2]],path:[],leg:0,speed:1.15},{p:this.teacher,stops:[[46,26],[28,18],[10,26],[28,41],[53,30],[28,2],[2,10]],path:[],leg:0,speed:1}]}refreshBoard(){let e=this.boardCv.getContext("2d");tp(e,this.boardCv.width,this.boardCv.height),this.boardTex.needsUpdate=!0}buildClassBoard(){let e=this.boardCv=document.createElement("canvas");e.width=1024,e.height=680,this.boardTex=new Li(e),this.boardTex.colorSpace=Ut,this.boardTex.anisotropy=4,this.refreshBoard();let n=new Yt,i=this.plain("#9A653D");for(let h of[-1.35,1.35]){let l=new Ne(new _n(.14,2.7,.14),i);l.position.set(h,1.35,0),l.castShadow=!0,n.add(l)}let s=new Ne(new _n(3,2,.1),i);s.position.set(0,1.75,0),s.castShadow=!0,n.add(s);let r=new Ne(new $t(2.86,1.9),new pn({map:this.boardTex,toneMapped:!1}));r.position.set(0,1.75,.06),n.add(r);let a=new Ne(new _n(3.3,.14,.4),this.plain("#E07A66"));a.position.set(0,2.82,.04),a.castShadow=!0,n.add(a),n.position.copy(this.boardPos),this.scene.add(n),addEventListener("unify:progress",()=>this.refreshBoard()),setInterval(()=>this.refreshBoard(),6e4)}patrol(e,n){for(let i of this.walkers){let s=i.p;if(s.talking){s.moving=!1,s.frame=0;continue}if(!i.path.length){let o=Math.floor(s.pos.x+56/2),d=Math.floor(s.pos.z+44/2),[u,c]=i.stops[i.leg];i.leg=(i.leg+1)%i.stops.length,i.path=tr(ui,Math.max(0,Math.min(55,o)),Math.max(0,Math.min(43,d)),u,c).map(f=>gn(f.x+.5,f.y+.5))}let r=i.path[0];if(!r){s.moving=!1,s.frame=0;continue}let a=r.clone().sub(s.pos);a.y=0;let h=a.length(),l=i.speed*e;h<=l?(s.pos.copy(r),i.path.shift()):(a.normalize(),s.pos.addScaledVector(a,l),s.dir=this.dirFrom(a,n,s.dir)),s.moving=!0,s.frame=1+Math.floor(this.t*5)%4}}setFrame(e,n,i){e.tex.offset.set(i/da,1-(n+1)/ua.length)}faceDir(e,n){let i=new I;return this.camera.getWorldDirection(i),i.y=0,i.lengthSq()<1e-4&&i.set(0,0,-1),this.dirFrom(e,i.normalize(),n)}dirFrom(e,n,i){let s=e.x*n.x+e.z*n.z,r=e.x*-n.z+e.z*n.x;return Math.hypot(s,r)<.001?i:Math.abs(s)>=Math.abs(r)?s>0?1:0:r>0?3:2}persons(){return[...this.students.filter(e=>!e.hidden),this.monitor,this.teacher,...this.duty]}handleTap(e,n){let i=this.renderer.domElement.getBoundingClientRect(),s=new He((e-i.left)/i.width*2-1,-((n-i.top)/i.height)*2+1);this.ray.setFromCamera(s,this.camera);let r=this.persons(),a=this.ray.intersectObjects(r.map(o=>o.sprite).filter(o=>o.visible),!1),h=a.length?r.find(o=>o.sprite===a[0].object)??null:null;if(!h){let o=.85;for(let d of r){let u=d.pos.clone().setY(.8*ar[d.look.age??"hs"]+.2),c=this.ray.ray.distanceToPoint(u);c<o&&(o=c,h=d)}}if(h){this.onTap(h);return}this.onTap(null);let l=new I;this.view!=="first"&&this.ray.ray.intersectPlane(new vn(new I(0,1,0),0),l)&&this.walkToPoint(l.x+56/2,l.z+44/2,"that spot")}walkToPoint(e,n,i="there"){if(this.inputLocked)return!1;let s=null,r=1e9,a=Math.floor(e),h=Math.floor(n);for(let l=-2;l<=2;l++)for(let o=-2;o<=2;o++){let d=a+o,u=h+l;if(d<0||u<0||d>=56||u>=44||ui[u][d]!==".")continue;let c=Math.hypot(d+.5-e,u+.5-n);c<r&&(r=c,s={x:d,y:u})}return!s||r>2.2?!1:this.planNav(s.x+.5,s.y+.5,i,null)}setAvatar(e){let n=this.player,i=n.pos.clone();this.scene.remove(n.sprite,n.blob),n.tex.dispose(),n.mat.dispose(),this.player=this.makePerson(11,{...Xi(e,11),tag:!0}),this.player.pos.copy(i),this.player.dir=n.dir,this.player.def=void 0}placeAtDoor(e){let n=e==="news"?{approach:qi.approach,subject:"news"}:ci.find(i=>i.subject===e)??ci[0];this.player.pos.copy(gn(n.approach.x,n.approach.y)),this.inDoor=n.subject,this.nav=null,this.navLabel="",this.onToast("")}clear(e,n){let i=Math.ceil(e.distanceTo(n)/.25);for(let s=1;s<i;s++){let r=e.clone().lerp(n,s/i);if(ql(r.x+56/2,r.z+44/2,.3))return!1}return!0}goTo(e){let n=ci.find(a=>a.subject===e),i=n?n.approach:e==="news"?qi.approach:e==="plaza"?{x:28,y:18.8}:{x:28,y:41.5},s=n?`${n.subject==="careers"?"CarryingCareers":n.subject==="life"?"Life Lessons":nh[n.subject]} classroom`:e==="news"?"the newsroom":e==="plaza"?"the plaza fountain":"the main entrance",r=n?gn(n.cx,n.cy+(n.face==="S"?.5:-.5)):e==="news"?gn(qi.cx,.95):null;this.planNav(i.x,i.y,s,r)&&this.inDoor===(n?.subject??(e==="news"?"news":null))&&(this.inDoor=null)}planNav(e,n,i,s){let r=this.player.pos,a=Math.max(0,Math.min(55,Math.floor(r.x+56/2))),h=Math.max(0,Math.min(43,Math.floor(r.z+44/2))),l=tr(ui,a,h,Math.floor(e),Math.floor(n));if(!l.length&&!(a===Math.floor(e)&&h===Math.floor(n)))return this.onToast("No path found from here"),!1;let o=[r.clone().setY(0),...l.slice(0,-1).map(u=>gn(u.x+.5,u.y+.5)),gn(e,n)],d=[];for(let u=0;u<o.length-1;){let c=o.length-1;for(;c>u+1&&!this.clear(o[u],o[c]);)c--;d.push(o[c]),u=c}return s&&d.push(s),this.nav={pts:d,label:i},this.navLabel=i,i!=="that spot"&&i!=="there"&&this.onToast(`Walking to ${i}\u2026 (move to cancel)`),!0}cancelNav(){this.nav&&(this.nav=null,this.navLabel="",this.onToast(""))}get walking(){return!!this.nav}enterDoor(e){this.inDoor=e,this.nav=null,this.navLabel="";let n=mf.indexOf(e),i=jn[Math.max(0,this.idx)].swap?1:0,s=e==="news"?[]:this.students.filter((r,a)=>(a+i)%4===n).map(r=>r.def.id);parent!==window?parent.postMessage({type:"unify:enter",subject:e,room:e,attendees:s},"*"):this.onToast(`${e==="news"?"Newsroom":(e==="careers"?"CarryingCareers":e==="life"?"Life Lessons":nh[e])+" auditorium"}: open index.html to go inside`)}enterPeriod(e){let n=jn[e],i=Lc(this.open),s=Fn.tile,r={x:Math.floor(this.player.pos.x+56/2),y:Math.floor(this.player.pos.z+44/2)},a=Lc(this.open.filter(l=>Math.hypot(l.x-r.x,l.y-r.y)<=3.6&&Math.hypot(l.x-r.x,l.y-r.y)>=1.2)),h=0;this.students.forEach((l,o)=>{if(n.kind==="class"){let d=ci[(o+(n.swap?1:0))%4],u={x:Math.floor(d.approach.x),y:Math.floor(d.approach.y)};l.lastDoor=u,l.pending={delay:Wi(0,8),dest:u,hide:!0}}else if(n.kind==="lunch"){let d=l.def&&Ce.peek(l.def.id)?.lunchBuddy&&a[h];l.pending={delay:Wi(0,10),dest:d?a[h++]:i[o],hide:!1,appear:l.hidden?l.lastDoor:void 0}}else n.kind==="arrive"?(l.hidden=!0,l.sprite.visible=!1,l.blob.visible=!1,l.path=[],l.pending={delay:Wi(0,20),dest:i[o],hide:!1,appear:s}):l.pending={delay:Wi(0,12),dest:s,hide:!0,appear:l.hidden?l.lastDoor:void 0}})}begin(e){let n=e.pending;e.pending=null,n.appear&&(e.pos.copy(gn(n.appear.x+.5,n.appear.y+.5)),e.hidden=!1,e.sprite.visible=!0,e.blob.visible=!0,e.fade=0,e.mat.opacity=0);let i=Math.min(55,Math.max(0,Math.floor(e.pos.x+56/2))),s=Math.min(43,Math.max(0,Math.floor(e.pos.z+44/2)));e.path=tr(ui,i,s,n.dest.x,n.dest.y).map(r=>gn(r.x+.5,r.y+.5)),e.hideOnArrive=n.hide,e.moving=e.path.length>0,!e.path.length&&n.hide&&(e.hidden=!0,e.sprite.visible=!1,e.blob.visible=!1)}movePlayer(e,n){let i=this.keys,s=(i.d||i.arrowright?1:0)-(i.a||i.arrowleft?1:0)+this.input.x,r=(i.s||i.arrowdown?1:0)-(i.w||i.arrowup?1:0)+this.input.y,a=this.player,h=Math.sin(this.yaw),l=Math.cos(this.yaw),o=!this.inputLocked&&Math.hypot(s,r)>.1;if(o&&this.nav&&this.cancelNav(),o){let f=new I(l*s+h*r,0,-h*s+l*r).normalize().multiplyScalar(4*e);a.moving=!0;let g=a.pos.x+56/2,v=a.pos.z+44/2;ql(g+f.x,v)||(a.pos.x+=f.x),ql(a.pos.x+56/2,v+f.z)||(a.pos.z+=f.z),a.dir=this.dirFrom(f,n,a.dir),a.frame=1+Math.floor(this.t*9)%4}else if(this.nav){let f=this.nav.pts[0],g=f.clone().sub(a.pos);g.y=0;let v=g.length(),p=4.6*e;if(a.moving=!0,v<=p){if(a.pos.copy(f),this.nav.pts.shift(),!this.nav.pts.length){let m=this.nav.label;this.nav=null,this.navLabel="",[...ci,qi].some(_=>os(_.trigger,a.pos.x+56/2,a.pos.z+44/2))||this.onToast(`Arrived at ${m}`)}}else g.normalize(),a.pos.addScaledVector(g,p),a.dir=this.dirFrom(g,n,a.dir);a.frame=1+Math.floor(this.t*9)%4}else a.moving=!1,a.frame=0;let d=a.pos.x+56/2,u=a.pos.z+44/2,c=ci.find(f=>os(f.trigger,d,u))??(os(qi.trigger,d,u)?{subject:"news"}:void 0);if(c&&this.inDoor!==c.subject)this.enterDoor(c.subject);else if(!c&&this.inDoor){let f=this.inDoor==="news"?qi.trigger:ci.find(v=>v.subject===this.inDoor).trigger;Math.hypot(Math.max(f.x-d,0,d-f.x-f.w),Math.max(f.y-u,0,u-f.y-f.h))>.35&&(this.inDoor=null)}}setView(e,n=!1){this.view=e,this.zoom=1,e==="overview"?this.pitch=1:e==="close"&&(this.pitch=.62),this.fpitch=0,n&&this.updateCamera(1,!0)}cycleView(){return this.setView(this.view==="close"?"overview":this.view==="overview"?"first":"close"),this.view}updateCamera(e,n=!1){let i=this.player.pos,s=Math.sin(this.yaw),r=Math.cos(this.yaw),a,h;if(this.view==="close"){let u=8.6*this.zoom,c=Math.cos(this.pitch);a=new I(i.x+s*c*u,1+Math.sin(this.pitch)*u,i.z+r*c*u),h=new I(i.x-s*1.8,1,i.z-r*1.8)}else if(this.view==="overview"){let u=52*this.zoom,c=Math.cos(this.pitch);a=new I(s*c*u,Math.sin(this.pitch)*u,r*c*u+3),h=new I(0,0,3)}else a=new I(i.x,1.55,i.z),h=new I(i.x-s*6,1.55+Math.tan(this.fpitch)*6,i.z-r*6);let l=n?1:Math.min(1,e*9);this.camPos.lerp(a,l),this.camLook.lerp(h,l),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);let o=this.view==="overview"?40:22,d=this.view==="overview"?new I(0,0,3):i;if(this.sun.target.position.copy(d),this.sun.position.set(d.x+7,15,d.z+9),o!==this.shadowR){this.shadowR=o;let u=this.sun.shadow.camera;u.left=-o,u.right=o,u.top=o,u.bottom=-o,u.updateProjectionMatrix()}}fadeOccluders(e){let n=this.camera.position,i=this.player.pos.clone().setY(1),s=i.clone().sub(n),r=s.length(),a=new ki(n,s.normalize()),h=new I;for(let l of this.occl){let o=this.view!=="first"&&!!a.intersectBox(l.box,h)&&h.distanceTo(n)<r-.2,d=o?.16:1;l.o+=(d-l.o)*Math.min(1,e*9);let u=l.o>.985;for(let c of l.mats)c.opacity=u?1:l.o,c.transparent=!u,c.depthWrite=u}}},$v=["#F8D977","#F28F7E","#8FC9E8","#A9DCC0"],Yv=t=>$v[Math.floor(t)%4];var rp=["Ha, totally!","Same!","Yeah!","No way!","Okay okay.","I know, right?","Shh!","Maybe!","Ooh!"],jv=(t,e)=>new I(t-56/2,0,e-44/2),sh=class{constructor(e,n=document.body){this.hall=e;this.nearby=null;this.talkingTo=null;this.onNearby=()=>{};this.bubbles=[];this.tags=new Map;this.chase=null;this.nextChatter=4;this.approachAt=new Map;this.approaching=null;this.acc=0;this.layer=document.createElement("div"),this.layer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:34",n.appendChild(this.layer),this.chat=new Zl(n),this.journal=new Kl(n),this.chat.onClose=()=>this.endTalk(),this.journal.onPick=i=>{let s=e.persons().find(r=>r.def?.id===i.id);s?this.talkTo(s):e.onToast(`${i.first} isn't in the hall right now.`)},e.onTap=i=>{i?.def&&this.talkTo(i)},e.onTick.push((i,s)=>this.tick(i,s)),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&((i.key==="t"||i.key==="T")&&!this.chat.isOpen?this.nearby&&this.talkTo(this.nearby):(i.key==="f"||i.key==="F")&&!this.chat.isOpen&&this.journal.toggle())})}ctx(){let e=jn[Math.max(0,this.hall.idx)];return{place:"hall",kind:e.kind,period:e.name,clock:Gl(this.hall.clock)}}dist(e){return Math.hypot(e.pos.x-this.hall.player.pos.x,e.pos.z-this.hall.player.pos.z)}talkTo(e){let n=e.def;if(!n||this.chat.isOpen)return;if(this.dist(e)>2.7){this.chase={p:e,replan:0},this.hall.walkToPoint(e.pos.x+56/2,e.pos.z+44/2,"there"),this.hall.onToast(`Walking over to ${n.first}\u2026`);return}this.chase=null,this.hall.cancelNav(),this.talkingTo=e,e.talking=!0,e.moving=!1;let i=new I().subVectors(this.hall.player.pos,e.pos);e.dir=this.hall.faceDir(i,e.dir);let s=this.hall.player;s.dir=this.hall.faceDir(i.clone().negate(),s.dir),this.hall.inputLocked=!0,this.journal.hide(),this.chat.open(n,this.ctx())}endTalk(){let e=this.talkingTo;if(this.talkingTo=null,this.hall.inputLocked=!1,e){e.talking=!1;let n=e;n.path&&!n.path.length&&n.hidden}}say(e,n,i=3400){this.bubbles.filter(r=>r.p===e).forEach(r=>{r.el.remove()}),this.bubbles=this.bubbles.filter(r=>r.p!==e);let s=document.createElement("div");s.className="uchat-bubble",s.textContent=n,this.layer.appendChild(s),this.bubbles.push({el:s,p:e,until:performance.now()+i,h:1.55*(ar[e.look.age??"hs"]??1)+.35})}project(e,n){let i=new I(e.pos.x,n,e.pos.z).project(this.hall.camera),s=this.hall.renderer.domElement.getBoundingClientRect();return{x:(i.x*.5+.5)*s.width,y:(-i.y*.5+.5)*s.height,ok:i.z<1&&i.z>-1}}tick(e,n){let i=this.hall,s=performance.now(),r=i.player,a=null,h=2.5;if(!this.chat.isOpen)for(let o of i.persons()){let d=this.dist(o);d<h&&!o.talking&&(h=d,a=o)}if(a!==this.nearby&&(this.nearby=a,this.onNearby(a)),this.chase){let o=this.chase;o.replan-=e,this.dist(o.p)<=2.4?this.talkTo(o.p):!i.walking&&o.replan<=0?(o.replan=.5,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there")||(this.chase=null)):o.replan<=0&&(o.replan=.7,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there"))}let l=i.persons().filter(o=>this.dist(o)<5.5&&o.def&&!i.inputLocked).sort((o,d)=>this.dist(o)-this.dist(d)).slice(0,5);for(let[o,d]of this.tags)l.includes(o)||(d.remove(),this.tags.delete(o));for(let o of l){let d=this.tags.get(o);d||(d=document.createElement("div"),d.className="uchat-tag",this.layer.appendChild(d),this.tags.set(o,d));let u=Ce.peek(o.def.id);d.innerHTML=`${o.def.first}${u?.met?`<i>${Ql(u.fr).replace(/♡/g,"")}</i>`:""}`;let c=this.project(o,1.55*(ar[o.look.age??"hs"]??1)+.1);d.style.display=c.ok?"block":"none",d.style.left=`${c.x}px`,d.style.top=`${c.y}px`}if(this.bubbles=this.bubbles.filter(o=>{if(s>o.until)return o.el.remove(),!1;let d=this.project(o.p,o.h);return o.el.style.display=d.ok?"block":"none",o.el.style.left=`${d.x}px`,o.el.style.top=`${d.y-16}px`,!0}),this.nextChatter-=e,this.nextChatter<=0&&!this.chat.isOpen){this.nextChatter=Wi(2.4,5);let o=i.persons().filter(u=>u.def&&!u.talking&&this.dist(u)<16),d=o[Math.floor(Math.random()*o.length)];if(d&&this.bubbles.length<4){let u=o.filter(c=>c!==d&&Math.hypot(c.pos.x-d.pos.x,c.pos.z-d.pos.z)<3.2)[0];if(u){let c=this.ctx();this.say(d,Wf(d.def,u.def,{kind:c.kind}),3600),setTimeout(()=>this.say(u,rp[Math.floor(Math.random()*rp.length)],1800),1900)}}}if(this.acc+=e,this.acc>1&&(this.acc=0,this.checkApproach(s)),this.approaching){let o=this.approaching;o.replan-=e,o.s.hidden?this.approaching=null:this.dist(o.s)<1.9?(o.s.path=[],o.s.moving=!1,this.say(o.s,qf(o.s.def),4200),i.onToast(`${o.s.def.first} wants to chat. Tap them or press T.`),this.approachAt.set(o.s.def.id,s),this.approaching=null,setTimeout(()=>{!o.s.talking&&o.s.path.length===0&&(o.s.pending={delay:0,dest:i.open[Math.floor(Math.random()*i.open.length)],hide:!1})},14e3)):(o.replan<=0||s-o.since>2e4)&&(o.replan=1,s-o.since>2e4?this.approaching=null:this.pathTo(o.s))}}pathTo(e){let n=this.hall,i=Math.max(0,Math.min(55,Math.floor(e.pos.x+56/2))),s=Math.max(0,Math.min(43,Math.floor(e.pos.z+44/2))),r=Math.max(0,Math.min(55,Math.floor(n.player.pos.x+56/2))),a=Math.max(0,Math.min(43,Math.floor(n.player.pos.z+44/2)));e.pending=null,e.hideOnArrive=!1,e.path=tr(ui,i,s,r,a).map(h=>jv(h.x+.5,h.y+.5)),e.path.pop(),e.moving=e.path.length>0}checkApproach(e){if(!(this.approaching||this.chat.isOpen||this.hall.walking||this.ctx().kind==="class"))for(let i of this.hall.students){if(i.hidden||i.talking||!i.def)continue;let s=Ce.peek(i.def.id);if(!s||s.fr<30)continue;let r=this.dist(i);if(!(r<3||r>11)&&!(e-(this.approachAt.get(i.def.id)??-1e9)<18e4)){this.approaching={s:i,replan:0,since:e},this.pathTo(i);return}}}visible(){return this.hall.persons().map(e=>e.def).filter(Boolean)}};var Jv=`
.uav{position:fixed;inset:0;z-index:70;display:none;background:var(--sheet,#EADFCB);color:var(--ink,#4A3B3F);font-family:var(--ui,"Fredoka","Trebuchet MS",system-ui,sans-serif);overflow:auto}
.uav.show{display:block}
.uav-wrap{max-width:1040px;margin:0 auto;padding:12px;display:grid;grid-template-columns:minmax(260px,340px) 1fr;gap:14px}
@media(max-width:760px){.uav-wrap{grid-template-columns:1fr}}
.uav-card{background:var(--kraft,#F3E7CF);border:1px solid rgba(255,255,255,.75);border-radius:16px;box-shadow:0 3px 0 var(--kraft-edge,#C9B28A),0 12px 24px rgba(80,50,40,.3);padding:12px}
.uav-prev{position:sticky;top:12px;align-self:start;display:flex;flex-direction:column;gap:8px;align-items:center}
.uav-prev canvas{width:100%;max-width:300px;aspect-ratio:3/4;background:linear-gradient(#EAF1E8,#DCE8DD 70%,#C9DCCB);border-radius:14px;border:2px solid var(--kraft-edge,#C9B28A)}
.uav h2{font-size:18px;font-weight:600;margin:0 0 6px}
.uav-row{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 10px}
.uav-lab{font-size:12px;color:var(--soft,#8A7A70);margin:8px 0 2px;text-transform:uppercase;letter-spacing:.4px;font-weight:600}
.uav button,.uav input[type=text]{font:inherit}
.uav-chip{font-size:13px;padding:5px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.8);background:#FFF9F0;color:inherit;cursor:pointer;box-shadow:0 2px 0 var(--kraft-edge,#C9B28A);min-height:32px}
.uav-chip.on{background:var(--acc,#E07A66);color:#fff;box-shadow:0 2px 0 #b95a48}
.uav-chip:active{transform:translateY(2px);box-shadow:none}
.uav-sw{width:28px;height:28px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1.5px #6d5a5f,0 2px 0 rgba(0,0,0,.15);cursor:pointer;padding:0}
.uav-sw.on{box-shadow:0 0 0 3px var(--acc,#E07A66),0 2px 0 rgba(0,0,0,.15)}
.uav-sw.none{background:repeating-linear-gradient(45deg,#fff,#fff 4px,#d9d0c0 4px,#d9d0c0 8px)}
.uav-custom{width:34px;height:30px;border:0;padding:0;background:none;cursor:pointer}
.uav-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
.uav-tabs .uav-chip{font-size:14px}
.uav-top{display:flex;align-items:center;gap:8px;padding:8px 12px;max-width:1040px;margin:0 auto}
.uav-top b{font-size:18px}
.uav-save{background:var(--sage,#4E8A64);color:#fff;border-color:rgba(255,255,255,.7);box-shadow:0 2px 0 #35674a}
.uav input[type=range]{width:200px}
.uav input[type=text]{border:1px solid var(--kraft-edge,#C9B28A);border-radius:10px;padding:7px 10px;font-size:15px;background:#fff;width:100%;max-width:260px}
.uav-switch{display:inline-flex;align-items:center;gap:6px;font-size:14px;margin-right:12px}
`,ap=!1,tt=(t,e="",n,i="")=>{let s=document.createElement(t);return e&&(s.className=e),i&&(s.textContent=i),n?.appendChild(s),s},op=["down","right","up","left"],rh=class{constructor(e=document.body){this.tab="Body";this.dir=0;this.walk=!1;this.t0=performance.now();this.raf=0;this.onSave=()=>{};this.onCancel=()=>{};this.loop=()=>{if(!this.root.classList.contains("show"))return;let e=(performance.now()-this.t0)/1e3,n=this.cv.getContext("2d");n.clearRect(0,0,this.cv.width,this.cv.height);let i=Xi(this.spec,11),s=8.6*(Wl[this.spec.age]??1)*.92;n.save(),n.translate(this.cv.width/2,this.cv.height-46),n.scale(s,s),n.fillStyle="rgba(60,40,50,.18)",n.beginPath(),n.ellipse(0,1,13,4,0,0,7),n.fill(),n.shadowColor="rgba(52,34,46,.3)",n.shadowBlur=3,n.shadowOffsetY=1.5,sr(n,0,0,{...i,dir:op[this.dir],moving:this.walk,walk:this.walk?e*8:0,tag:!1},e),n.restore(),this.raf=requestAnimationFrame(this.loop)};this.pending=0;if(!ap){ap=!0;let v=document.createElement("style");v.textContent=Jv,document.head.appendChild(v)}this.spec={...Ce.profile.avatar},this.root=tt("div","uav",e);let n=tt("div","uav-top",this.root);tt("b","",n,"Create your avatar");let i=tt("span","",n);i.style.flex="1";let s=tt("button","uav-chip",n,"Cancel");s.type="button",s.onclick=()=>{this.hide(),this.onCancel()};let r=tt("button","uav-chip uav-save",n,"Save and play");r.type="button",r.onclick=()=>this.save();let a=tt("div","uav-wrap",this.root),h=tt("div","uav-card uav-prev",a);this.cv=tt("canvas","",h),this.cv.width=300,this.cv.height=400;let l=tt("div","uav-row",h);l.style.justifyContent="center",op.forEach((v,p)=>{let m=tt("button","uav-chip",l,["Front","Right","Back","Left"][p]);m.type="button",m.onclick=()=>{this.dir=p,this.walk=!1}});let o=tt("button","uav-chip",l,"Walk");o.type="button",o.onclick=()=>{this.walk=!this.walk,o.classList.toggle("on",this.walk)};let d=tt("div","uav-row",h);d.style.justifyContent="center";let u=tt("button","uav-chip",d,"Surprise me");u.type="button",u.onclick=()=>{let v=this.spec.name,p=this.spec.age;this.spec={...wa(xi(Date.now()&16777215),p),name:v},this.render()};let c=tt("button","uav-chip",d,"Reset");c.type="button",c.onclick=()=>{let v=this.spec.name;this.spec={...lr(),name:v},this.render()};let f=tt("div","uav-card",a),g=tt("div","uav-tabs",f);for(let v of["Body","Face","Hair","Outfit","Extras","You"]){let p=tt("button","uav-chip",g,v);p.type="button",p.dataset.tab=v,p.onclick=()=>{this.tab=v,this.render()}}this.body=tt("div","",f),this.root.addEventListener("keydown",v=>v.stopPropagation()),this.root.addEventListener("pointerdown",v=>v.stopPropagation())}show(){this.spec={...Ce.profile.avatar,name:Ce.profile.name||Ce.profile.avatar.name},this.root.classList.add("show"),this.render(),this.loop()}hide(){this.root.classList.remove("show"),cancelAnimationFrame(this.raf)}save(){let e=(this.nameInput?.value??this.spec.name).trim().slice(0,14)||"Student";this.spec.name=e,Ce.setProfile({name:e,avatar:{...this.spec},hasAvatar:!0}),this.hide(),this.onSave(this.spec,e)}set(e,n){this.spec[e]=n,this.render(!1)}chips(e,n,i){tt("div","uav-lab",this.body,e);let s=tt("div","uav-row",this.body);for(let r of i){let a=tt("button","uav-chip"+(this.spec[n]===r.id?" on":""),s,r.label);a.type="button",a.onclick=()=>{this.set(n,r.id)}}}swatches(e,n,i,s){tt("div","uav-lab",this.body,e);let r=tt("div","uav-row",this.body);if(s){let h=tt("button","uav-sw none"+(this.spec[n]==null?" on":""),r);h.type="button",h.title=s,h.setAttribute("aria-label",s),h.onclick=()=>this.set(n,null)}for(let h of i){let l=tt("button","uav-sw"+(this.spec[n]===h?" on":""),r);l.type="button",l.style.background=h,l.setAttribute("aria-label",h),l.onclick=()=>this.set(n,h)}let a=tt("input","uav-custom",r);a.type="color",a.value=typeof this.spec[n]=="string"&&/^#[0-9a-f]{6}$/i.test(this.spec[n])?this.spec[n]:i[0],a.title="Custom colour",a.oninput=()=>{this.spec[n]=a.value,this.renderSoon()}}toggle(e,n){let i=tt("label","uav-switch",this.body),s=tt("input","",i);s.type="checkbox",s.checked=!!this.spec[n],s.onchange=()=>this.set(n,s.checked),i.appendChild(document.createTextNode(e))}slider(e,n,i,s,r){tt("div","uav-lab",this.body,e);let a=tt("input","",this.body);a.type="range",a.min=String(i),a.max=String(s),a.step=String(r),a.value=String(this.spec[n]),a.oninput=()=>{this.spec[n]=Number(a.value)}}renderSoon(){clearTimeout(this.pending),this.pending=window.setTimeout(()=>this.render(!1),250)}render(e=!0){this.root.querySelectorAll("[data-tab]").forEach(r=>r.classList.toggle("on",r.dataset.tab===this.tab));let n=this.root.scrollTop;this.body.innerHTML="";let i=_a,s=this.body;if(this.tab==="Body")this.chips("Grade band (sets your height)","age",i.age),this.chips("Build","build",i.build),this.slider("Head size","headSize",.9,1.12,.01),this.swatches("Skin tone","skin",Vc),this.chips("Pronouns","pronouns",Af.map(r=>({id:r,label:r})));else if(this.tab==="Face"){this.chips("Eyes","eyeShape",i.eyeShape),this.swatches("Eye colour","eyeColor",Gc),this.chips("Eyebrows","brow",i.brow),this.swatches("Eyebrow colour","browColor",ls,"Match hair"),this.chips("Mouth","mouthStyle",i.mouthStyle),this.swatches("Lip colour","lip",["#8a4650","#c4463c","#e8789a","#b5563e","#563428","#e07a66"]),tt("div","uav-lab",s,"Details");let r=tt("div","uav-row",s);this.toggle("Freckles","freckles"),this.toggle("Beauty mark","mole"),this.toggle("Little nose","nose"),this.toggle("Rosy cheeks","blush"),this.chips("Glasses","glasses",i.glasses),this.swatches("Glasses colour","glassColor",["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da","#eab94e"])}else if(this.tab==="Hair")this.chips("Style","hairStyle",i.hairStyle),this.swatches("Colour","hair",ls),this.swatches("Highlights","hair2",ls,"No highlights");else if(this.tab==="Outfit")this.chips("Top","top",i.top),this.swatches("Top colour","shirt",rn),this.chips("Pattern","pattern",i.pattern),this.swatches("Pattern / under-shirt colour","shirt2",rn),this.chips("Bottoms","bottom",i.bottom),this.swatches("Bottoms colour","pants",rn),this.chips("Shoes","shoeStyle",i.shoeStyle),this.swatches("Shoe colour","shoes",Wc);else if(this.tab==="Extras")this.chips("Hat","hat",i.hat),this.swatches("Hat colour","hatColor",rn),this.chips("Bag","packStyle",i.packStyle),this.swatches("Bag colour","pack",rn),this.swatches("Earrings","earrings",["#eab94e","#fff6ea","#f28f7e","#8fc9e8"],"None"),this.swatches("Scarf","scarf",rn,"None"),this.swatches("Badge","badge",rn,"None");else{tt("h2","",s,"About you"),tt("div","uav-lab",s,"Your name (classmates will remember it)");let r=tt("input","",s);r.type="text",r.maxLength=14,r.value=this.spec.name==="Student"?"":this.spec.name,r.placeholder="Type your name",this.nameInput=r,r.oninput=()=>{this.spec.name=r.value},tt("div","uav-lab",s,"Tip"),tt("div","",s,"Classmates notice what you wear. Try a hat or glasses and see who compliments it. Everything you tell them is remembered, so introduce yourself!")}this.root.scrollTop=n}};var Et=t=>document.getElementById(t),vt=new ih(Et("game"));window.__hall=vt;vt.onToast=t=>{let e=Et("toast");e.textContent=t,e.classList.toggle("show",!!t),clearTimeout(vt._tt),t&&(vt._tt=setTimeout(()=>e.classList.remove("show"),3500))};var gr=new sh(vt,document.body);window.__social=gr;var Ra=new rh(document.body);window.__creator=Ra;var Zn=t=>{vt.inputLocked=t},hp=()=>{Nt.assessOn&&!Nt.assessment()&&(Zn(!0),iu().then(()=>Zn(!1)))};Ra.onSave=t=>{vt.setAvatar(t),Zn(!1),vt.onToast(`Looking good, ${t.name}!`),setTimeout(hp,400)};Ra.onCancel=()=>Zn(!1);Et("bAvatar").onclick=()=>{Zn(!0),Ra.show()};Et("bFriends").onclick=()=>gr.journal.toggle();var su=Et("talkChip");gr.onNearby=t=>{su.classList.toggle("show",!!t),t&&(su.textContent=`Talk to ${t.def?.first} (T)`)};su.onclick=()=>{gr.nearby&&gr.talkTo(gr.nearby)};Ce.profile.hasAvatar?setTimeout(hp,900):setTimeout(()=>{Zn(!0),Ra.show()},600);Et("bTake").onclick=()=>{Zn(!0),iu().then(t=>{Zn(!1),t&&vt.onToast("Starting points saved. Extra lessons are in each classroom.")})};var mr={},lp=()=>{vt.input.x=(mr.r?1:0)-(mr.l?1:0),vt.input.y=(mr.d?1:0)-(mr.u?1:0)};document.querySelectorAll("[data-k]").forEach(t=>{let e=t.dataset.k;t.addEventListener("pointerdown",n=>{n.preventDefault(),mr[e]=!0,lp()}),["pointerup","pointerleave","pointercancel"].forEach(n=>t.addEventListener(n,()=>{mr[e]=!1,lp()}))});document.querySelectorAll("[data-rot]").forEach(t=>{let e=+t.dataset.rot;t.addEventListener("pointerdown",n=>{n.preventDefault(),vt.rotate=e}),["pointerup","pointerleave","pointercancel"].forEach(n=>t.addEventListener(n,()=>{vt.rotate=0}))});var yr=Et("goMenu"),cp=Et("viewMenu"),up=Et("meMenu"),ah=[yr,cp,up],ru=t=>{let e=!t.classList.contains("show");ah.forEach(n=>n.classList.remove("show")),t.classList.toggle("show",e)};Et("bViewM").onclick=()=>ru(cp);Et("bMe").onclick=()=>ru(up);var au=()=>{ah.forEach(t=>t.classList.remove("show")),Zn(!0),np({onGo:t=>{Zn(!1),vt.goTo(t)}})};Et("bTimes").onclick=au;document.addEventListener("pointerdown",t=>{t.target.closest(".menu, #goMenu, #bGo, #bViewM, #bMe")||ah.forEach(e=>e.classList.remove("show"))});ah.forEach(t=>t.addEventListener("click",e=>{e.target.closest("button")&&t!==yr&&setTimeout(()=>t.classList.remove("show"),0)}));addEventListener("unify:times-closed",()=>Zn(!1));var dp=Et("boardChip");dp.onclick=au;addEventListener("keydown",t=>{(t.key==="b"||t.key==="B")&&!t.target?.closest("input,textarea")&&au()});setInterval(()=>{let t=vt.player.pos,e=vt.boardPos;dp.classList.toggle("show",Math.hypot(t.x-e.x,t.z-e.z)<3.4&&t.z>e.z-.2)},250);sp.forEach(t=>{let e=document.createElement("button");e.innerHTML=`<i style="background:${t.color}"></i>${t.label}`,e.onclick=()=>{yr.classList.remove("show"),vt.goTo(t.key)},yr.appendChild(e)});Et("bGo").onclick=()=>ru(yr);Et("game").addEventListener("pointerdown",()=>yr.classList.remove("show"));Et("bSpd").onclick=()=>{vt.speed=vt.speed===1?4:vt.speed===4?16:1,Et("bSpd").textContent=`Speed x${vt.speed}`};var Zv={close:"Close-up",overview:"Overview",first:"First person"};Et("bView").onclick=()=>{let t=vt.cycleView();Et("bView").textContent=`View: ${Zv[t]}`};setInterval(()=>{let t=jn[Math.max(0,vt.idx)];Et("clk").textContent=Gl(vt.clock),Et("per").textContent=t.name,Et("fill").style.width=`${(vt.clock-t.start)/t.len*100}%`;let e=vt.students.filter(a=>!a.hidden).length;Et("cnt").textContent=`${e} in the hall, ${vt.students.length-e} in class or away`;let[n,i,s,r]=vt.tint;Et("tint").style.background=`rgba(${n|0},${i|0},${s|0},${r})`},200);(()=>{let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createImageData(256,256);for(let i=0;i<n.data.length;i+=4){let s=226+Math.random()*29;n.data[i]=s,n.data[i+1]=s*.965,n.data[i+2]=s*.9,n.data[i+3]=255}e.putImageData(n,0,0),e.lineCap="round";for(let i=0;i<260;i++){e.strokeStyle=`rgba(255,250,240,${.08+Math.random()*.16})`,e.lineWidth=.6+Math.random()*.5;let s=Math.random()*256,r=Math.random()*256,a=Math.random()*6.28,h=3+Math.random()*9;e.beginPath(),e.moveTo(s,r),e.lineTo(s+Math.cos(a)*h,r+Math.sin(a)*h),e.stroke()}Et("paper").style.backgroundImage=`url(${t.toDataURL()})`})();})();
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
