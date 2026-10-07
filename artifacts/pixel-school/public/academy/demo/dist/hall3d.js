"use strict";(()=>{var Lo="186";var Mu=0,wh=1,Tu=2;var Br=1,Do=2,ks=3,Ii=0,an=1,En=2,ti=0,Os=1,Eh=2,Ah=3,Ch=4,wu=5;var Ji=100,Eu=101,Au=102,Cu=103,Ru=104,Pu=200,Iu=201,Lu=202,Du=203,Rh=204,Ph=205,Fu=206,Nu=207,Uu=208,ku=209,Ou=210,Bu=211,zu=212,Hu=213,Vu=214,Ja=0,Ka=1,ja=2,ws=3,Qa=4,eo=5,to=6,no=7,Ih=0,Gu=1,Wu=2,zn=0,Lh=1,Dh=2,Fh=3,Nh=4,Uh=5,kh=6,Oh=7;var Bh=300,Li=301,Ki=302,Fo=303,No=304,zr=306,Es=1e3,Jn=1001,io=1002,zt=1003,Xu=1004;var Hr=1005;var Wt=1006,Uo=1007;var Di=1008;var cn=1009,zh=1010,Hh=1011,Bs=1012,ko=1013,Hn=1014,An=1015,Vn=1016,Oo=1017,Bo=1018,zs=1020,Vh=35902,Gh=35899,Wh=1021,Xh=1022,Cn=1023,Kn=1026,Fi=1027,zo=1028,Ho=1029,Ni=1030,Vo=1031;var Go=1033,Vr=33776,Gr=33777,Wr=33778,Xr=33779,Wo=35840,Xo=35841,qo=35842,$o=35843,Yo=36196,Zo=37492,Jo=37496,Ko=37488,jo=37489,qr=37490,Qo=37491,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,al=37814,ol=37815,ll=37816,hl=37817,cl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,yl=36283,xl=36284,$r=36285,vl=36286;var mr=2300,so=2301,$a=2302,yh=2303,xh=2400,vh=2401,_h=2402;var qu=3200;var _l=0,$u=1,fi="",Bt="srgb",gr="srgb-linear",yr="linear",ct="srgb";var Ya=7680;var Yu=519,Zu=512,Ju=513,Ku=514,bl=515,ju=516,Qu=517,Sl=518,ed=519,qh=35044;var $h="300 es",On=2e3,As=2001;function kf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Of(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function xr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function td(){let t=xr("canvas");return t.style.display="block",t}var qc={},Cs=null;function vr(...t){let e="THREE."+t.shift();Cs?Cs("log",e,...t):console.log(e,...t)}function nd(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=nd(t);let e="THREE."+t.shift();if(Cs)Cs("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Be(...t){t=nd(t);let e="THREE."+t.shift();if(Cs)Cs("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function qi(...t){let e=t.join(" ");e in qc||(qc[e]=!0,ke(...t))}function id(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var sd={[Ja]:Ka,[ja]:to,[Qa]:no,[ws]:eo,[Ka]:Ja,[to]:ja,[no]:Qa,[eo]:ws},jn=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Za=Math.PI/180,ro=180/Math.PI;function Mi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function st(t,e,n){return Math.max(e,Math.min(n,t))}function Bf(t,e){return(t%e+e)%e}function ql(t,e,n){return(1-n)*t+n*e}function Yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ze=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,h){let l=i[s+0],o=i[s+1],d=i[s+2],c=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(c!==_||l!==u||o!==f||d!==g){let p=l*u+o*f+d*g+c*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-h;if(p<.9995){let M=Math.acos(p),R=Math.sin(M);m=Math.sin(m*M)/R,h=Math.sin(h*M)/R,l=l*m+u*h,o=o*m+f*h,d=d*m+g*h,c=c*m+_*h}else{l=l*m+u*h,o=o*m+f*h,d=d*m+g*h,c=c*m+_*h;let M=1/Math.sqrt(l*l+o*o+d*d+c*c);l*=M,o*=M,d*=M,c*=M}}e[n]=l,e[n+1]=o,e[n+2]=d,e[n+3]=c}static multiplyQuaternionsFlat(e,n,i,s,r,a){let h=i[s],l=i[s+1],o=i[s+2],d=i[s+3],c=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[n]=h*g+d*c+l*f-o*u,e[n+1]=l*g+d*u+o*c-h*f,e[n+2]=o*g+d*f+h*u-l*c,e[n+3]=d*g-h*c-l*u-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,h=Math.cos,l=Math.sin,o=h(i/2),d=h(s/2),c=h(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*c+o*f*g,this._y=o*f*c-u*d*g,this._z=o*d*g+u*f*c,this._w=o*d*c-u*f*g;break;case"YXZ":this._x=u*d*c+o*f*g,this._y=o*f*c-u*d*g,this._z=o*d*g-u*f*c,this._w=o*d*c+u*f*g;break;case"ZXY":this._x=u*d*c-o*f*g,this._y=o*f*c+u*d*g,this._z=o*d*g+u*f*c,this._w=o*d*c-u*f*g;break;case"ZYX":this._x=u*d*c-o*f*g,this._y=o*f*c+u*d*g,this._z=o*d*g-u*f*c,this._w=o*d*c+u*f*g;break;case"YZX":this._x=u*d*c+o*f*g,this._y=o*f*c+u*d*g,this._z=o*d*g-u*f*c,this._w=o*d*c-u*f*g;break;case"XZY":this._x=u*d*c-o*f*g,this._y=o*f*c-u*d*g,this._z=o*d*g+u*f*c,this._w=o*d*c+u*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],h=n[5],l=n[9],o=n[2],d=n[6],c=n[10],u=i+h+c;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-o)*f,this._z=(a-s)*f}else if(i>h&&i>c){let f=2*Math.sqrt(1+i-h-c);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+o)/f}else if(h>c){let f=2*Math.sqrt(1+h-i-c);this._w=(r-o)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+c-i-h);this._w=(a-s)/f,this._x=(r+o)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,h=n._x,l=n._y,o=n._z,d=n._w;return this._x=i*d+a*h+s*o-r*l,this._y=s*d+a*l+r*h-i*o,this._z=r*d+a*o+i*l-s*h,this._w=a*d-i*h-s*l-r*o,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,h=this.dot(e);h<0&&(i=-i,s=-s,r=-r,a=-a,h=-h);let l=1-n;if(h<.9995){let o=Math.acos(h),d=Math.sin(o);l=Math.sin(l*o)/d,n=Math.sin(n*o)/d,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($c.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,h=e.z,l=e.w,o=2*(a*s-h*i),d=2*(h*n-r*s),c=2*(r*i-a*n);return this.x=n+l*o+a*c-h*d,this.y=i+l*d+h*o-r*c,this.z=s+l*c+r*d-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,h=n.y,l=n.z;return this.x=s*l-r*h,this.y=r*a-i*l,this.z=i*h-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$l=new L,$c=new pn,We=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,s,r,a,h,l,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,h,l,o)}set(e,n,i,s,r,a,h,l,o){let d=this.elements;return d[0]=e,d[1]=s,d[2]=h,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],h=i[3],l=i[6],o=i[1],d=i[4],c=i[7],u=i[2],f=i[5],g=i[8],_=s[0],p=s[3],m=s[6],M=s[1],R=s[4],v=s[7],T=s[2],w=s[5],C=s[8];return r[0]=a*_+h*M+l*T,r[3]=a*p+h*R+l*w,r[6]=a*m+h*v+l*C,r[1]=o*_+d*M+c*T,r[4]=o*p+d*R+c*w,r[7]=o*m+d*v+c*C,r[2]=u*_+f*M+g*T,r[5]=u*p+f*R+g*w,r[8]=u*m+f*v+g*C,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],d=e[8];return n*a*d-n*h*o-i*r*d+i*h*l+s*r*o-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],d=e[8],c=d*a-h*o,u=h*l-d*r,f=o*r-a*l,g=n*c+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=c*_,e[1]=(s*o-d*i)*_,e[2]=(h*i-s*a)*_,e[3]=u*_,e[4]=(d*n-s*l)*_,e[5]=(s*r-h*n)*_,e[6]=f*_,e[7]=(i*l-o*n)*_,e[8]=(a*n-i*r)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,h){let l=Math.cos(r),o=Math.sin(r);return this.set(i*l,i*o,-i*(l*a+o*h)+a+e,-s*o,s*l,-s*(-o*a+l*h)+h+n,0,0,1),this}scale(e,n){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yl.makeScale(e,n)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yl.makeRotation(-e)),this}translate(e,n){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new We,Yc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let t={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gr]:{primaries:e,whitePoint:i,transfer:yr,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),t}var it=zf();function ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ts(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var as,ao=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=xr("canvas")),as.width=e.width,as.height=e.height;let s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=xr("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ui(n[i]/255)*255):n[i]=ui(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hf=0,Rs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,h=s.length;a<h;a++)s[a].isDataTexture?r.push(Zl(s[a].image)):r.push(Zl(s[a]))}else r=Zl(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function Zl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ao.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Vf=0,Jl=new L,rn=class t extends jn{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Jn,s=Jn,r=Wt,a=Di,h=Cn,l=cn,o=t.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Mi(),this.name="",this.source=new Rs(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=h,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Bh;rn.DEFAULT_ANISOTROPY=1;var wt=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,o=l[0],d=l[4],c=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(c-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(c+_)<.1&&Math.abs(g+p)<.1&&Math.abs(o+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let R=(o+1)/2,v=(f+1)/2,T=(m+1)/2,w=(d+u)/4,C=(c+_)/4,x=(g+p)/4;return R>v&&R>T?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=w/i,r=C/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=x/r),this.set(i,s,r,n),this}let M=Math.sqrt((p-g)*(p-g)+(c-_)*(c-_)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(c-_)/M,this.z=(u-d)/M,this.w=Math.acos((o+f+m-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this.w=st(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this.w=st(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends jn{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];let s={width:e,height:n,depth:i.depth},r=new rn(s),a=i.count;for(let h=0;h<a;h++)this.textures[h]=r.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new Rs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends oo{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},_r=class extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ot=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,s,r,a,h,l,o,d,c,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,h,l,o,d,c,u,f,g,_,p)}set(e,n,i,s,r,a,h,l,o,d,c,u,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=h,m[13]=l,m[2]=o,m[6]=d,m[10]=c,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),h=Math.sin(i),l=Math.cos(s),o=Math.sin(s),d=Math.cos(r),c=Math.sin(r);if(e.order==="XYZ"){let u=a*d,f=a*c,g=h*d,_=h*c;n[0]=l*d,n[4]=-l*c,n[8]=o,n[1]=f+g*o,n[5]=u-_*o,n[9]=-h*l,n[2]=_-u*o,n[6]=g+f*o,n[10]=a*l}else if(e.order==="YXZ"){let u=l*d,f=l*c,g=o*d,_=o*c;n[0]=u+_*h,n[4]=g*h-f,n[8]=a*o,n[1]=a*c,n[5]=a*d,n[9]=-h,n[2]=f*h-g,n[6]=_+u*h,n[10]=a*l}else if(e.order==="ZXY"){let u=l*d,f=l*c,g=o*d,_=o*c;n[0]=u-_*h,n[4]=-a*c,n[8]=g+f*h,n[1]=f+g*h,n[5]=a*d,n[9]=_-u*h,n[2]=-a*o,n[6]=h,n[10]=a*l}else if(e.order==="ZYX"){let u=a*d,f=a*c,g=h*d,_=h*c;n[0]=l*d,n[4]=g*o-f,n[8]=u*o+_,n[1]=l*c,n[5]=_*o+u,n[9]=f*o-g,n[2]=-o,n[6]=h*l,n[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*o,g=h*l,_=h*o;n[0]=l*d,n[4]=_-u*c,n[8]=g*c+f,n[1]=c,n[5]=a*d,n[9]=-h*d,n[2]=-o*d,n[6]=f*c+g,n[10]=u-_*c}else if(e.order==="XZY"){let u=a*l,f=a*o,g=h*l,_=h*o;n[0]=l*d,n[4]=-c,n[8]=o*d,n[1]=u*c+_,n[5]=a*d,n[9]=f*c-g,n[2]=g*c-f,n[6]=h*d,n[10]=_*c+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gf,e,Wf)}lookAt(e,n,i){let s=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),xi.crossVectors(i,un),xi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),xi.crossVectors(i,un)),xi.normalize(),va.crossVectors(un,xi),s[0]=xi.x,s[4]=va.x,s[8]=un.x,s[1]=xi.y,s[5]=va.y,s[9]=un.y,s[2]=xi.z,s[6]=va.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],h=i[4],l=i[8],o=i[12],d=i[1],c=i[5],u=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],M=i[3],R=i[7],v=i[11],T=i[15],w=s[0],C=s[4],x=s[8],E=s[12],A=s[1],b=s[5],I=s[9],B=s[13],D=s[2],V=s[6],Z=s[10],F=s[14],ie=s[3],X=s[7],j=s[11],U=s[15];return r[0]=a*w+h*A+l*D+o*ie,r[4]=a*C+h*b+l*V+o*X,r[8]=a*x+h*I+l*Z+o*j,r[12]=a*E+h*B+l*F+o*U,r[1]=d*w+c*A+u*D+f*ie,r[5]=d*C+c*b+u*V+f*X,r[9]=d*x+c*I+u*Z+f*j,r[13]=d*E+c*B+u*F+f*U,r[2]=g*w+_*A+p*D+m*ie,r[6]=g*C+_*b+p*V+m*X,r[10]=g*x+_*I+p*Z+m*j,r[14]=g*E+_*B+p*F+m*U,r[3]=M*w+R*A+v*D+T*ie,r[7]=M*C+R*b+v*V+T*X,r[11]=M*x+R*I+v*Z+T*j,r[15]=M*E+R*B+v*F+T*U,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],h=e[5],l=e[9],o=e[13],d=e[2],c=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],M=l*f-o*u,R=h*f-o*c,v=h*u-l*c,T=a*f-o*d,w=a*u-l*d,C=a*c-h*d;return n*(_*M-p*R+m*v)-i*(g*M-p*T+m*w)+s*(g*R-_*T+m*C)-r*(g*v-_*w+p*C)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],h=e[9],l=e[2],o=e[6],d=e[10];return n*(a*d-h*o)-i*(r*d-h*l)+s*(r*o-a*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],d=e[8],c=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=n*h-i*a,R=n*l-s*a,v=n*o-r*a,T=i*l-s*h,w=i*o-r*h,C=s*o-r*l,x=d*_-c*g,E=d*p-u*g,A=d*m-f*g,b=c*p-u*_,I=c*m-f*_,B=u*m-f*p,D=M*B-R*I+v*b+T*A-w*E+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return e[0]=(h*B-l*I+o*b)*V,e[1]=(s*I-i*B-r*b)*V,e[2]=(_*C-p*w+m*T)*V,e[3]=(u*w-c*C-f*T)*V,e[4]=(l*A-a*B-o*E)*V,e[5]=(n*B-s*A+r*E)*V,e[6]=(p*v-g*C-m*R)*V,e[7]=(d*C-u*v+f*R)*V,e[8]=(a*I-h*A+o*x)*V,e[9]=(i*A-n*I-r*x)*V,e[10]=(g*w-_*v+m*M)*V,e[11]=(c*v-d*w-f*M)*V,e[12]=(h*E-a*b-l*x)*V,e[13]=(n*b-i*E+s*x)*V,e[14]=(_*R-g*T-p*M)*V,e[15]=(d*T-c*R+u*M)*V,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,h=e.y,l=e.z,o=r*a,d=r*h;return this.set(o*a+i,o*h-s*l,o*l+s*h,0,o*h+s*l,d*h+i,d*l-s*a,0,o*l-s*h,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,h=n._z,l=n._w,o=r+r,d=a+a,c=h+h,u=r*o,f=r*d,g=r*c,_=a*d,p=a*c,m=h*c,M=l*o,R=l*d,v=l*c,T=i.x,w=i.y,C=i.z;return s[0]=(1-(_+m))*T,s[1]=(f+v)*T,s[2]=(g-R)*T,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+m))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(g+R)*C,s[9]=(p-M)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=os.set(s[0],s[1],s[2]).length(),h=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let o=1/a,d=1/h,c=1/l;return Nn.elements[0]*=o,Nn.elements[1]*=o,Nn.elements[2]*=o,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=c,Nn.elements[9]*=c,Nn.elements[10]*=c,n.setFromRotationMatrix(Nn),i.x=a,i.y=h,i.z=l,this}makePerspective(e,n,i,s,r,a,h=On,l=!1){let o=this.elements,d=2*r/(n-e),c=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(h===On)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(h===As)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return o[0]=d,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,n,i,s,r,a,h=On,l=!1){let o=this.elements,d=2/(n-e),c=2/(i-s),u=-(n+e)/(n-e),f=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(h===On)g=-2/(a-r),_=-(a+r)/(a-r);else if(h===As)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return o[0]=d,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=c,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=g,o[14]=_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},os=new L,Nn=new ot,Gf=new L(0,0,0),Wf=new L(1,1,1),xi=new L,va=new L,un=new L,Jc=new ot,Kc=new pn,Bn=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],h=s[8],l=s[1],o=s[5],d=s[9],c=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(h,f),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,o),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(h,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(h,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xf=0,jc=new L,ls=new pn,ai=new ot,_a=new L,rr=new L,qf=new L,$f=new pn,Qc=new L(1,0,0),eu=new L(0,1,0),tu=new L(0,0,1),nu={type:"added"},Yf={type:"removed"},hs={type:"childadded",child:null},Kl={type:"childremoved",child:null},Ht=class t extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new L,n=new Bn,i=new pn,s=new L(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new We}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Qc,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,n){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qc,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_a.copy(e):_a.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(rr,_a,this.up):ai.lookAt(_a,rr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ai),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nu),hs.child=e,this.dispatchEvent(hs),hs.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yf),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nu),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,$f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,h=r.length;a<h;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(h,l){return h[l.uuid]===void 0&&(h[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let l=h.shapes;if(Array.isArray(l))for(let o=0,d=l.length;o<d;o++){let c=l[o];r(e.shapes,c)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let l=0,o=this.material.length;l<o;l++)h.push(r(e.materials,this.material[l]));s.material=h}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){let l=this.animations[h];s.animations.push(r(e.animations,l))}}if(n){let h=a(e.geometries),l=a(e.materials),o=a(e.textures),d=a(e.images),c=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);h.length>0&&(i.geometries=h),l.length>0&&(i.materials=l),o.length>0&&(i.textures=o),d.length>0&&(i.images=d),c.length>0&&(i.shapes=c),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(h){let l=[];for(let o in h){let d=h[o];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new L(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zf={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,h=this._targetRay,l=this._grip,o=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let _ of e.hand.values()){let p=n.getJointPose(_,i),m=this._getHandJoint(o,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let d=o.joints["index-finger-tip"],c=o.joints["thumb-tip"],u=d.position.distanceTo(c.position),f=.02,g=.005;o.inputState.pinching&&u>f+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&u<=f-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Zf)))}return h!==null&&(h.visible=s!==null),l!==null&&(l.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function jl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var qe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=it.workingColorSpace){if(e=Bf(e,1),n=st(n,0,1),i=st(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=jl(a,r,e+1/3),this.g=jl(a,r,e),this.b=jl(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,n=Bt){function i(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],h=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bt){let i=rd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return it.workingToColorSpace(Jt.copy(this),e),Math.round(st(Jt.r*255,0,255))*65536+Math.round(st(Jt.g*255,0,255))*256+Math.round(st(Jt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Jt.copy(this),n);let i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),h=Math.min(i,s,r),l,o,d=(h+a)/2;if(h===a)l=0,o=0;else{let c=a-h;switch(o=d<=.5?c/(a+h):c/(2-a-h),a){case i:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-i)/c+2;break;case r:l=(i-s)/c+4;break}l/=6}return e.h=l,e.s=o,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Bt){it.workingToColorSpace(Jt.copy(this),e);let n=Jt.r,i=Jt.g,s=Jt.b;return e!==Bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+n,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vi),e.getHSL(ba);let i=ql(vi.h,ba.h,n),s=ql(vi.s,ba.s,n),r=ql(vi.l,ba.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new qe;qe.NAMES=rd;var br=class t{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=n,this.far=i}clone(){return new t(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Un=new L,oi=new L,Ql=new L,li=new L,cs=new L,us=new L,iu=new L,eh=new L,th=new L,nh=new L,ih=new wt,sh=new wt,rh=new wt,Zn=class t{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Un.subVectors(e,n),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Un.subVectors(s,n),oi.subVectors(i,n),Ql.subVectors(e,n);let a=Un.dot(Un),h=Un.dot(oi),l=Un.dot(Ql),o=oi.dot(oi),d=oi.dot(Ql),c=a*o-h*h;if(c===0)return r.set(0,0,0),null;let u=1/c,f=(o*l-h*d)*u,g=(a*d-h*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,s,r,a,h,l){return this.getBarycoord(e,n,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(h,li.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,n),sh.fromBufferAttribute(e,i),rh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ih,r.x),a.addScaledVector(sh,r.y),a.addScaledVector(rh,r.z),a}static isFrontFacing(e,n,i,s){return Un.subVectors(i,n),oi.subVectors(e,n),Un.cross(oi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Un.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,h;cs.subVectors(s,i),us.subVectors(r,i),eh.subVectors(e,i);let l=cs.dot(eh),o=us.dot(eh);if(l<=0&&o<=0)return n.copy(i);th.subVectors(e,s);let d=cs.dot(th),c=us.dot(th);if(d>=0&&c<=d)return n.copy(s);let u=l*c-d*o;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(cs,a);nh.subVectors(e,r);let f=cs.dot(nh),g=us.dot(nh);if(g>=0&&f<=g)return n.copy(r);let _=f*o-l*g;if(_<=0&&o>=0&&g<=0)return h=o/(o-g),n.copy(i).addScaledVector(us,h);let p=d*g-f*c;if(p<=0&&c-d>=0&&f-g>=0)return iu.subVectors(r,s),h=(c-d)/(c-d+(f-g)),n.copy(s).addScaledVector(iu,h);let m=1/(p+_+u);return a=_*m,h=u*m,n.copy(i).addScaledVector(cs,a).addScaledVector(us,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wn=class{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,h=r.count;a<h;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Ma.subVectors(this.max,ar),ds.subVectors(e.a,ar),fs.subVectors(e.b,ar),ps.subVectors(e.c,ar),_i.subVectors(fs,ds),bi.subVectors(ps,fs),Vi.subVectors(ds,ps);let n=[0,-_i.z,_i.y,0,-bi.z,bi.y,0,-Vi.z,Vi.y,_i.z,0,-_i.x,bi.z,0,-bi.x,Vi.z,0,-Vi.x,-_i.y,_i.x,0,-bi.y,bi.x,0,-Vi.y,Vi.x,0];return!ah(n,ds,fs,ps,Ma)||(n=[1,0,0,0,1,0,0,0,1],!ah(n,ds,fs,ps,Ma))?!1:(Ta.crossVectors(_i,bi),n=[Ta.x,Ta.y,Ta.z],ah(n,ds,fs,ps,Ma))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,Sa=new wn,ds=new L,fs=new L,ps=new L,_i=new L,bi=new L,Vi=new L,ar=new L,Ma=new L,Ta=new L,Gi=new L;function ah(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Gi.fromArray(t,r);let h=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),o=n.dot(Gi),d=i.dot(Gi);if(Math.max(-Math.max(l,o,d),Math.min(l,o,d))>h)return!1}return!0}var Lt=new L,wa=new ze,Jf=0,ln=class extends jn{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yn(n,this.array)),n}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yn(n,this.array)),n}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yn(n,this.array)),n}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Mr=class extends ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Tr=class extends ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var ut=class extends ln{constructor(e,n,i){super(new Float32Array(e),n,i)}},Kf=new wn,or=new L,oh=new L,di=class{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Kf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let n=or.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(oh)),this.expandByPoint(or.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jf=0,Tn=new ot,lh=new Ht,ms=new L,dn=new wn,lr=new wn,Ot=new L,Dt=class t extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?Tr:Mr)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let h=n[r];lr.setFromBufferAttribute(h),this.morphTargetsRelative?(Ot.addVectors(dn.min,lr.min),dn.expandByPoint(Ot),Ot.addVectors(dn.max,lr.max),dn.expandByPoint(Ot)):(dn.expandByPoint(lr.min),dn.expandByPoint(lr.max))}dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(n)for(let r=0,a=n.length;r<a;r++){let h=n[r],l=this.morphTargetsRelative;for(let o=0,d=h.count;o<d;o++)Ot.fromBufferAttribute(h,o),l&&(ms.fromBufferAttribute(e,o),Ot.add(ms)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let h=[],l=[];for(let x=0;x<i.count;x++)h[x]=new L,l[x]=new L;let o=new L,d=new L,c=new L,u=new ze,f=new ze,g=new ze,_=new L,p=new L;function m(x,E,A){o.fromBufferAttribute(i,x),d.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,A),d.sub(o),c.sub(o),f.sub(u),g.sub(u);let b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(c,-f.y).multiplyScalar(b),p.copy(c).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(b),h[x].add(_),h[E].add(_),h[A].add(_),l[x].add(p),l[E].add(p),l[A].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,E=M.length;x<E;++x){let A=M[x],b=A.start,I=A.count;for(let B=b,D=b+I;B<D;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let R=new L,v=new L,T=new L,w=new L;function C(x){T.fromBufferAttribute(s,x),w.copy(T);let E=h[x];R.copy(E),R.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(w,E);let b=v.dot(l[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,b)}for(let x=0,E=M.length;x<E;++x){let A=M[x],b=A.start,I=A.count;for(let B=b,D=b+I;B<D;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,h=new L,l=new L,o=new L,d=new L,c=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),d.subVectors(a,r),c.subVectors(s,r),d.cross(c),h.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),o.fromBufferAttribute(i,p),h.add(d),l.add(d),o.add(d),i.setXYZ(g,h.x,h.y,h.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,o.x,o.y,o.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),d.subVectors(a,r),c.subVectors(s,r),d.cross(c),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(h,l){let o=h.array,d=h.itemSize,c=h.normalized,u=new o.constructor(l.length*d),f=0,g=0;for(let _=0,p=l.length;_<p;_++){h.isInterleavedBufferAttribute?f=l[_]*h.data.stride+h.offset:f=l[_]*d;for(let m=0;m<d;m++)u[g++]=o[f++]}return new ln(u,d,c)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let h in s){let l=s[h],o=e(l,i);n.setAttribute(h,o)}let r=this.morphAttributes;for(let h in r){let l=[],o=r[h];for(let d=0,c=o.length;d<c;d++){let u=o[d],f=e(u,i);l.push(f)}n.morphAttributes[h]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let h=0,l=a.length;h<l;h++){let o=a[h];n.addGroup(o.start,o.count,o.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let o in l)l[o]!==void 0&&(e[o]=l[o]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let o=i[l];e.data.attributes[l]=o.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let o=this.morphAttributes[l],d=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let o in s){let d=s[o];this.setAttribute(o,d.clone(n))}let r=e.morphAttributes;for(let o in r){let d=[],c=r[o];for(let u=0,f=c.length;u<f;u++)d.push(c[u].clone(n));this.morphAttributes[o]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,d=a.length;o<d;o++){let c=a[o];this.addGroup(c.start,c.count,c.materialIndex)}let h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ho=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}},sn=new L,wr=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Yn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Yn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Yn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Yn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new ln(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hh=new L,Qf=new L,ep=new We,fn=class{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=hh.subVectors(i,n).cross(Qf.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||ep.getNormalMatrix(e),s=this.coplanarPoint(hh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},tp=0,Qn=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Os,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ph,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let h in r){let l=r[h];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new fn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ls=class extends Qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gs,hr=new L,ys=new L,xs=new L,vs=new ze,cr=new ze,ad=new ot,Ea=new L,ur=new L,Aa=new L,su=new ze,ch=new ze,ru=new ze,Er=class extends Ht{constructor(e=new Ls){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Dt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ho(n,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new wr(i,3,0,!1)),gs.setAttribute("uv",new wr(i,2,3,!1))}this.geometry=gs,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-xs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ca(Ea.set(-.5,-.5,0),xs,a,ys,s,r),Ca(ur.set(.5,-.5,0),xs,a,ys,s,r),Ca(Aa.set(.5,.5,0),xs,a,ys,s,r),su.set(0,0),ch.set(1,0),ru.set(1,1);let h=e.ray.intersectTriangle(Ea,ur,Aa,!1,hr);if(h===null&&(Ca(ur.set(-.5,.5,0),xs,a,ys,s,r),ch.set(0,1),h=e.ray.intersectTriangle(Ea,Aa,ur,!1,hr),h===null))return;let l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||n.push({distance:l,point:hr.clone(),uv:Zn.getInterpolation(hr,Ea,ur,Aa,su,ch,ru,new ze),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ca(t,e,n,i,s,r){vs.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(cr.x=r*vs.x-s*vs.y,cr.y=s*vs.x+r*vs.y):cr.copy(vs),t.copy(e),t.x+=cr.x,t.y+=cr.y,t.applyMatrix4(ad)}var ci=new L,uh=new L,Ra=new L,Pa=new L,Ti=class{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){uh.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Pa.copy(this.origin).sub(uh);let r=e.distanceTo(n)*.5,a=-this.direction.dot(Ra),h=Pa.dot(this.direction),l=-Pa.dot(Ra),o=Pa.lengthSq(),d=Math.abs(1-a*a),c,u,f,g;if(d>0)if(c=a*l-h,u=a*h-l,g=r*d,c>=0)if(u>=-g)if(u<=g){let _=1/d;c*=_,u*=_,f=c*(c+a*u+2*h)+u*(a*c+u+2*l)+o}else u=r,c=Math.max(0,-(a*u+h)),f=-c*c+u*(u+2*l)+o;else u=-r,c=Math.max(0,-(a*u+h)),f=-c*c+u*(u+2*l)+o;else u<=-g?(c=Math.max(0,-(-a*r+h)),u=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+u*(u+2*l)+o):u<=g?(c=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+o):(c=Math.max(0,-(a*r+h)),u=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+u*(u+2*l)+o);else u=a>0?-r:r,c=Math.max(0,-(a*u+h)),f=-c*c+u*(u+2*l)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(uh).addScaledVector(Ra,u),f}intersectSphere(e,n){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),h=i-a,l=i+a;return l<0?null:h<0?this.at(l,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,h,l,o=1/this.direction.x,d=1/this.direction.y,c=1/this.direction.z,u=this.origin;return o>=0?(i=(e.min.x-u.x)*o,s=(e.max.x-u.x)*o):(i=(e.max.x-u.x)*o,s=(e.min.x-u.x)*o),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),c>=0?(h=(e.min.z-u.z)*c,l=(e.max.z-u.z)*c):(h=(e.max.z-u.z)*c,l=(e.min.z-u.z)*c),i>l||h>s)||((h>i||i!==i)&&(i=h),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,s,r){let a=this.origin,h=this.direction,l=h.x,o=h.y,d=h.z,c=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=n.x-a.x,_=n.y-a.y,p=n.z-a.z,m=i.x-a.x,M=i.y-a.y,R=i.z-a.z,v=Math.abs(l),T=Math.abs(o),w=Math.abs(d),C,x,E,A,b,I,B,D,V,Z,F,ie;if(v>=T&&v>=w?(E=l,I=c,V=g,ie=m,l>=0?(C=o,x=d,A=u,b=f,B=_,D=p,Z=M,F=R):(C=d,x=o,A=f,b=u,B=p,D=_,Z=R,F=M)):T>=w?(E=o,I=u,V=_,ie=M,o>=0?(C=d,x=l,A=f,b=c,B=p,D=g,Z=R,F=m):(C=l,x=d,A=c,b=f,B=g,D=p,Z=m,F=R)):(E=d,I=f,V=p,ie=R,d>=0?(C=l,x=o,A=c,b=u,B=g,D=_,Z=m,F=M):(C=o,x=l,A=u,b=c,B=_,D=g,Z=M,F=m)),E===0)return null;let X=C/E,j=x/E,U=1/E,J=A-X*I,oe=b-j*I,Ve=B-X*V,Le=D-j*V,Ge=Z-X*ie,z=F-j*ie,K=Ge*Le-z*Ve,he=J*z-oe*Ge,q=Ve*oe-Le*J;if(s){if(K<0||he<0||q<0)return null}else if((K<0||he<0||q<0)&&(K>0||he>0||q>0))return null;let ee=K+he+q;if(ee===0)return null;let we=U*(K*I+he*V+q*ie);return(ee>0?we<0:we>0)?null:this.at(we/ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},au=new ot,Wi=new Ti,Ia=new di,ou=new L,La=new L,Da=new L,Fa=new L,dh=new L,Na=new L,lu=new L,Ua=new L,He=class extends Ht{constructor(e=new Dt,n=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let h=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let h=this.morphTargetInfluences;if(r&&h){Na.set(0,0,0);for(let l=0,o=r.length;l<o;l++){let d=h[l],c=r[l];d!==0&&(dh.fromBufferAttribute(c,e),a?Na.addScaledVector(dh,d):Na.addScaledVector(dh.sub(n),d))}n.add(Na)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Ia.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ia,ou)===null||Wi.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(au.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(au),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wi)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,h=r.index,l=r.attributes.position,o=r.attributes.uv,d=r.attributes.uv1,c=r.attributes.normal,u=r.groups,f=r.drawRange;if(h!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),R=Math.min(h.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,T=R;v<T;v+=3){let w=h.getX(v),C=h.getX(v+1),x=h.getX(v+2);s=ka(this,m,e,i,o,d,c,w,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(h.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=h.getX(p),R=h.getX(p+1),v=h.getX(p+2);s=ka(this,a,e,i,o,d,c,M,R,v),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,T=R;v<T;v+=3){let w=v,C=v+1,x=v+2;s=ka(this,m,e,i,o,d,c,w,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,R=p+1,v=p+2;s=ka(this,a,e,i,o,d,c,M,R,v),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}};function np(t,e,n,i,s,r,a,h){let l;if(e.side===an?l=i.intersectTriangle(a,r,s,!0,h):l=i.intersectTriangle(s,r,a,e.side===Ii,h),l===null)return null;Ua.copy(h),Ua.applyMatrix4(t.matrixWorld);let o=n.ray.origin.distanceTo(Ua);return o<n.near||o>n.far?null:{distance:o,point:Ua.clone(),object:t}}function ka(t,e,n,i,s,r,a,h,l,o){t.getVertexPosition(h,La),t.getVertexPosition(l,Da),t.getVertexPosition(o,Fa);let d=np(t,e,n,i,La,Da,Fa,lu);if(d){let c=new L;Zn.getBarycoord(lu,La,Da,Fa,c),s&&(d.uv=Zn.getInterpolatedAttribute(s,h,l,o,c,new ze)),r&&(d.uv1=Zn.getInterpolatedAttribute(r,h,l,o,c,new ze)),a&&(d.normal=Zn.getInterpolatedAttribute(a,h,l,o,c,new L),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:h,b:l,c:o,normal:new L,materialIndex:0};Zn.getNormal(La,Da,Fa,u.normal),d.face=u,d.barycoord=c}return d}var Ar=class extends rn{constructor(e=null,n=1,i=1,s,r,a,h,l,o=zt,d=zt,c,u){super(null,a,h,l,o,d,s,r,c,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cr=class extends ln{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_s=new ot,hu=new ot,Oa=[],cu=new wn,ip=new ot,dr=new He,fr=new di,Ds=class extends He{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ip)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_s),cu.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(cu)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_s),fr.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(fr)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let h=0;h<i.length;h++)i[h]=s[a+h]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(i),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),hu.multiplyMatrices(i,_s),dr.matrixWorld=hu,dr.raycast(e,Oa);for(let a=0,h=Oa.length;a<h;a++){let l=Oa[a];l.instanceId=r,l.object=this,n.push(l)}Oa.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(s*this.count),s,this.count,zo,An));let r=this.morphTexture.source.data.data,a=0;for(let o=0;o<i.length;o++)a+=i[o];let h=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=h,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new di,sp=new ze(.5,.5),Ba=new L,Fs=class{constructor(e=new fn,n=new fn,i=new fn,s=new fn,r=new fn,a=new fn){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(i),h[3].copy(s),h[4].copy(r),h[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=On,i=!1){let s=this.planes,r=e.elements,a=r[0],h=r[1],l=r[2],o=r[3],d=r[4],c=r[5],u=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],M=r[12],R=r[13],v=r[14],T=r[15];if(s[0].setComponents(o-a,f-d,m-g,T-M).normalize(),s[1].setComponents(o+a,f+d,m+g,T+M).normalize(),s[2].setComponents(o+h,f+c,m+_,T+R).normalize(),s[3].setComponents(o-h,f-c,m-_,T-R).normalize(),i)s[4].setComponents(l,u,p,v).normalize(),s[5].setComponents(o-l,f-u,m-p,T-v).normalize();else if(s[4].setComponents(o-l,f-u,m-p,T-v).normalize(),n===On)s[5].setComponents(o+l,f+u,m+p,T+v).normalize();else if(n===As)s[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);let n=sp.distanceTo(e.center);return Xi.radius=.7071067811865476+n,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ba.x=s.normal.x>0?e.max.x:e.min.x,Ba.y=s.normal.y>0?e.max.y:e.min.y,Ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wi=class extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},co=new L,uo=new L,uu=new ot,pr=new Ti,za=new di,fh=new L,du=new L,fo=class extends Ht{constructor(e=new Dt,n=new wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)co.fromBufferAttribute(n,s-1),uo.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=co.distanceTo(uo);e.setAttribute("lineDistance",new ut(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;uu.copy(s).invert(),pr.copy(e.ray).applyMatrix4(uu);let h=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=h*h,o=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=o){let m=d.getX(_),M=d.getX(_+1),R=Ha(this,e,pr,l,m,M,_);R&&n.push(R)}if(this.isLineLoop){let _=d.getX(g-1),p=d.getX(f),m=Ha(this,e,pr,l,_,p,g-1);m&&n.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=o){let m=Ha(this,e,pr,l,_,_+1,_);m&&n.push(m)}if(this.isLineLoop){let _=Ha(this,e,pr,l,g-1,f,g-1);_&&n.push(_)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let h=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=r}}}}};function Ha(t,e,n,i,s,r,a){let h=t.geometry.attributes.position;if(co.fromBufferAttribute(h,s),uo.fromBufferAttribute(h,r),n.distanceSqToSegment(co,uo,fh,du)>i)return;fh.applyMatrix4(t.matrixWorld);let o=e.ray.origin.distanceTo(fh);if(!(o<e.near||o>e.far))return{distance:o,point:du.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var fu=new L,pu=new L,$i=class extends fo{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)fu.fromBufferAttribute(n,s),pu.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fu.distanceTo(pu);e.setAttribute("lineDistance",new ut(i,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rr=class extends rn{constructor(e=[],n=Li,i,s,r,a,h,l,o,d){super(e,n,i,s,r,a,h,l,o,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yi=class extends rn{constructor(e,n,i,s,r,a,h,l,o){super(e,n,i,s,r,a,h,l,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends rn{constructor(e,n,i=Hn,s,r,a,h=zt,l=zt,o,d=Kn,c=1){if(d!==Kn&&d!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:c};super(u,s,r,a,h,l,d,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},po=class extends Ei{constructor(e,n=Hn,i=Li,s,r,a=zt,h=zt,l,o=Kn){let d={width:e,height:e,depth:1},c=[d,d,d,d,d,d];super(e,e,n,i,s,r,a,h,l,o),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pr=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ei=class t extends Dt{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let h=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],o=[],d=[],c=[],u=0,f=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(c,2));function g(_,p,m,M,R,v,T,w,C,x,E){let A=v/C,b=T/x,I=v/2,B=T/2,D=w/2,V=C+1,Z=x+1,F=0,ie=0,X=new L;for(let j=0;j<Z;j++){let U=j*b-B;for(let J=0;J<V;J++){let oe=J*A-I;X[_]=oe*M,X[p]=U*R,X[m]=D,o.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[m]=w>0?1:-1,d.push(X.x,X.y,X.z),c.push(J/C),c.push(1-j/x),F+=1}}for(let j=0;j<x;j++)for(let U=0;U<C;U++){let J=u+U+V*j,oe=u+U+V*(j+1),Ve=u+(U+1)+V*(j+1),Le=u+(U+1)+V*j;l.push(J,oe,Le),l.push(oe,Ve,Le),ie+=6}h.addGroup(f,ie,E),f+=ie,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ir=class t extends Dt{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],a=[],h=[],l=[],o=new L,d=new ze;a.push(0,0,0),h.push(0,0,1),l.push(.5,.5);for(let c=0,u=3;c<=n;c++,u+=3){let f=i+c/n*s;o.x=e*Math.cos(f),o.y=e*Math.sin(f),a.push(o.x,o.y,o.z),h.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let c=1;c<=n;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vt=class t extends Dt{constructor(e=1,n=1,i=1,s=32,r=1,a=!1,h=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:h,thetaLength:l};let o=this;s=Math.floor(s),r=Math.floor(r);let d=[],c=[],u=[],f=[],g=0,_=[],p=i/2,m=0;M(),a===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function M(){let v=new L,T=new L,w=0,C=(n-e)/i;for(let x=0;x<=r;x++){let E=[],A=x/r,b=A*(n-e)+e;for(let I=0;I<=s;I++){let B=I/s,D=B*l+h,V=Math.sin(D),Z=Math.cos(D);T.x=b*V,T.y=-A*i+p,T.z=b*Z,c.push(T.x,T.y,T.z),v.set(V,C,Z).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-A),E.push(g++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){let A=_[E][x],b=_[E+1][x],I=_[E+1][x+1],B=_[E][x+1];(e>0||E!==0)&&(d.push(A,b,B),w+=3),(n>0||E!==r-1)&&(d.push(b,I,B),w+=3)}o.addGroup(m,w,0),m+=w}function R(v){let T=g,w=new ze,C=new L,x=0,E=v===!0?e:n,A=v===!0?1:-1;for(let I=1;I<=s;I++)c.push(0,p*A,0),u.push(0,A,0),f.push(.5,.5),g++;let b=g;for(let I=0;I<=s;I++){let D=I/s*l+h,V=Math.cos(D),Z=Math.sin(D);C.x=E*Z,C.y=p*A,C.z=E*V,c.push(C.x,C.y,C.z),u.push(0,A,0),w.x=V*.5+.5,w.y=Z*.5*A+.5,f.push(w.x,w.y),g++}for(let I=0;I<s;I++){let B=T+I,D=b+I;v===!0?d.push(D,D+1,B):d.push(D+1,D,B),x+=3}o.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ai=class t extends Vt{constructor(e=1,n=1,i=32,s=1,r=!1,a=0,h=Math.PI*2){super(0,e,n,i,s,r,a,h),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:h}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mo=class t extends Dt{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],a=[];h(s),o(i),d(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function h(M){let R=new L,v=new L,T=new L;for(let w=0;w<n.length;w+=3)f(n[w+0],R),f(n[w+1],v),f(n[w+2],T),l(R,v,T,M)}function l(M,R,v,T){let w=T+1,C=[];for(let x=0;x<=w;x++){C[x]=[];let E=M.clone().lerp(v,x/w),A=R.clone().lerp(v,x/w),b=w-x;for(let I=0;I<=b;I++)I===0&&x===w?C[x][I]=E:C[x][I]=E.clone().lerp(A,I/b)}for(let x=0;x<w;x++)for(let E=0;E<2*(w-x)-1;E++){let A=Math.floor(E/2);E%2===0?(u(C[x][A+1]),u(C[x+1][A]),u(C[x][A])):(u(C[x][A+1]),u(C[x+1][A+1]),u(C[x+1][A]))}}function o(M){let R=new L;for(let v=0;v<r.length;v+=3)R.x=r[v+0],R.y=r[v+1],R.z=r[v+2],R.normalize().multiplyScalar(M),r[v+0]=R.x,r[v+1]=R.y,r[v+2]=R.z}function d(){let M=new L;for(let R=0;R<r.length;R+=3){M.x=r[R+0],M.y=r[R+1],M.z=r[R+2];let v=p(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;a.push(v,1-T)}g(),c()}function c(){for(let M=0;M<a.length;M+=6){let R=a[M+0],v=a[M+2],T=a[M+4],w=Math.max(R,v,T),C=Math.min(R,v,T);w>.9&&C<.1&&(R<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,R){let v=M*3;R.x=e[v+0],R.y=e[v+1],R.z=e[v+2]}function g(){let M=new L,R=new L,v=new L,T=new L,w=new ze,C=new ze,x=new ze;for(let E=0,A=0;E<r.length;E+=9,A+=6){M.set(r[E+0],r[E+1],r[E+2]),R.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(a[A+0],a[A+1]),C.set(a[A+2],a[A+3]),x.set(a[A+4],a[A+5]),T.copy(M).add(R).add(v).divideScalar(3);let b=p(T);_(w,A+0,M,b),_(C,A+2,R,b),_(x,A+4,v,b)}}function _(M,R,v,T){T<0&&M.x===1&&(a[R]=M.x-1),v.x===0&&v.z===0&&(a[R]=T/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var Va=new L,Ga=new L,ph=new L,Wa=new Zn,Zi=class extends Dt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){let s=Math.pow(10,4),r=Math.cos(Za*n),a=e.getIndex(),h=e.getAttribute("position"),l=a?a.count:h.count,o=[0,0,0],d=["a","b","c"],c=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){a?(o[0]=a.getX(g),o[1]=a.getX(g+1),o[2]=a.getX(g+2)):(o[0]=g,o[1]=g+1,o[2]=g+2);let{a:_,b:p,c:m}=Wa;if(_.fromBufferAttribute(h,o[0]),p.fromBufferAttribute(h,o[1]),m.fromBufferAttribute(h,o[2]),Wa.getNormal(ph),c[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,c[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,c[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let M=0;M<3;M++){let R=(M+1)%3,v=c[M],T=c[R],w=Wa[d[M]],C=Wa[d[R]],x=`${v}_${T}`,E=`${T}_${v}`;E in u&&u[E]?(ph.dot(u[E].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(C.x,C.y,C.z)),u[E]=null):x in u||(u[x]={index0:o[M],index1:o[R],normal:ph.clone()})}}for(let g in u)if(u[g]){let{index0:_,index1:p}=u[g];Va.fromBufferAttribute(h,_),Ga.fromBufferAttribute(h,p),f.push(Va.x,Va.y,Va.z),f.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new ut(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Ns=class t extends mo{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var Xt=class t extends Dt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,h=Math.floor(i),l=Math.floor(s),o=h+1,d=l+1,c=e/h,u=n/l,f=[],g=[],_=[],p=[];for(let m=0;m<d;m++){let M=m*u-a;for(let R=0;R<o;R++){let v=R*c-r;g.push(v,-M,0),_.push(0,0,1),p.push(R/h),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<h;M++){let R=M+o*m,v=M+o*(m+1),T=M+1+o*(m+1),w=M+1+o*m;f.push(R,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Lr=class t extends Dt{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:h},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(a+h,Math.PI),o=0,d=[],c=new L,u=new L,f=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){let M=[],R=m/i,v=a+R*h,T=e*Math.cos(v),w=Math.sqrt(e*e-T*T),C=0;m===0&&a===0?C=.5/n:m===i&&l===Math.PI&&(C=-.5/n);for(let x=0;x<=n;x++){let E=x/n,A=s+E*r;c.x=-w*Math.cos(A),c.y=T,c.z=w*Math.sin(A),g.push(c.x,c.y,c.z),u.copy(c).normalize(),_.push(u.x,u.y,u.z),p.push(E+C,1-R),M.push(o++)}d.push(M)}for(let m=0;m<i;m++)for(let M=0;M<n;M++){let R=d[m][M+1],v=d[m][M],T=d[m+1][M],w=d[m+1][M+1];(m!==0||a>0)&&f.push(R,v,w),(m!==i-1||l<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ji(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(mu(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(mu(s[0])){let r=[];for(let a=0,h=s.length;a<h;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function en(t){let e={};for(let n=0;n<t.length;n++){let i=ji(t[n]);for(let s in i)e[s]=i[s]}return e}function mu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function rp(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yh(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var od={clone:ji,merge:en},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},go=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qt=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var yo=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bs(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function mh(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Ci=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let h=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(r=s,s=n[++i],e<s)break e}a=n.length;break t}if(!(e>=r)){let h=n[1];e<h&&(i=2,r=h);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let h=i+a>>>1;e<n[h]?a=h:i=h+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vo=class extends Ci{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,h=s[r],l=s[a];if(h===void 0)switch(this.getSettings_().endingStart){case vh:r=e,h=2*n-i;break;case _h:r=s.length-2,h=n+s[r]-s[r+1];break;default:r=e,h=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:a=e,l=2*i-n;break;case _h:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let o=(i-n)*.5,d=this.valueSize;this._weightPrev=o/(n-h),this._weightNext=o/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,d=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,M=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,R=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let T=0;T!==h;++T)r[T]=m*a[d+T]+M*a[o+T]+R*a[l+T]+v*a[c+T];return r}},_o=class extends Ci{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,d=(i-n)/(s-n),c=1-d;for(let u=0;u!==h;++u)r[u]=a[o+u]*c+a[l+u]*d;return r}},bo=class extends Ci{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},So=class extends Ci{interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,d=this.inTangents,c=this.outTangents;if(!d||!c){let g=(i-n)/(s-n),_=1-g;for(let p=0;p!==h;++p)r[p]=a[o+p]*_+a[l+p]*g;return r}let u=h*2,f=e-1;for(let g=0;g!==h;++g){let _=a[o+g],p=a[l+g],m=f*u+g*2,M=c[m],R=c[m+1],v=e*u+g*2,T=d[v],w=d[v+1],C=hp(i,n,M,T,s);r[g]=ld(C,_,R,w,p)}return r}};function ld(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function lp(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function hp(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let h=ld(r,e,n,i,s)-t;if(Math.abs(h)<1e-10)break;let l=lp(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-h/l))}return r}var yn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(n,this.TimeBufferType),this.values=bs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),mh(e.settings)&&(i.settings={inTangents:bs(e.settings.inTangents,Array),outTangents:bs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new So(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case mr:n=this.InterpolantFactoryMethodDiscrete;break;case so:n=this.InterpolantFactoryMethodLinear;break;case $a:n=this.InterpolantFactoryMethodSmooth;break;case yh:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;mh(this.settings)&&(gu(this.settings.inTangents,e),gu(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let h=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*h,a*h)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let h=0;h!==r;h++){let l=i[h];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,h,l),e=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,h,l,a),e=!1;break}a=l}if(s!==void 0&&Of(s))for(let h=0,l=s.length;h!==l;++h){let o=s[h];if(isNaN(o)){Be("KeyframeTrack: Value is not a valid number.",this,h,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$a,r=e.length-1,a=1;for(let h=1;h<r;++h){let l=!1,o=e[h],d=e[h+1];if(o!==d&&(h!==1||o!==e[0]))if(s)l=!0;else{let c=h*i,u=c-i,f=c+i;for(let g=0;g!==i;++g){let _=n[c+g];if(_!==n[u+g]||_!==n[f+g]){l=!0;break}}}if(l){if(h!==a){e[a]=e[h];let c=h*i,u=a*i;for(let f=0;f!==i;++f)n[u+f]=n[c+f]}++a}}if(r>0){e[a]=e[r];for(let h=r*i,l=a*i,o=0;o!==i;++o)n[l+o]=n[h+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,mh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gu(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=so;var Ri=class extends yn{constructor(e,n,i){super(e,n,i)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=mr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends yn{constructor(e,n,i,s){super(e,n,i,s)}};Mo.prototype.ValueTypeName="color";var To=class extends yn{constructor(e,n,i,s){super(e,n,i,s)}};To.prototype.ValueTypeName="number";var wo=class extends Ci{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=(i-n)/(s-n),o=e*h;for(let d=o+h;o!==d;o+=4)pn.slerpFlat(r,0,a,o-h,a,o,l);return r}},Dr=class extends yn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends yn{constructor(e,n,i){super(e,n,i)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=mr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends yn{constructor(e,n,i,s){super(e,n,i,s)}};Eo.prototype.ValueTypeName="vector";var Ao=class{constructor(e,n,i){let s=this,r=!1,a=0,h=0,l,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){h++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,h),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,h),a===h&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,c){return o.push(d,c),this},this.removeHandler=function(d){let c=o.indexOf(d);return c!==-1&&o.splice(c,2),this},this.getHandler=function(d){for(let c=0,u=o.length;c<u;c+=2){let f=o[c],g=o[c+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hd=new Ao,Co=class{constructor(e){this.manager=e!==void 0?e:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=class extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Nr=class extends Fr{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},gh=new ot,yu=new L,xu=new L,Ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera;yu.setFromMatrixPosition(e.matrixWorld),n.position.copy(yu),xu.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xu),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,s){gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,h=s?s.w/r.y:1,l=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===As||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*h,0,.5*h+o,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*h,0,.5*h+o,0,0,.5,.5,0,0,0,1),n.multiply(gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new L,qa=new pn,$n=new L,Ur=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,$n.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Xa,qa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new L,vu=new ze,_u=new ze,Kt=class extends Ur{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,n){return this.getViewBounds(e,vu,_u),n.subVectors(_u,vu)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Za*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/o,s*=a.width/l,i*=a.height/o}let h=this.filmOffset;h!==0&&(r+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Us=class extends Ur{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,h=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,h-=d*this.view.offsetY,l=h-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,h,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},bh=class extends Ro{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Fr{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Ss=-90,Ms=1,Po=class extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Ss,Ms,e,n);s.layers=this.layers,this.add(s);let r=new Kt(Ss,Ms,e,n);r.layers=this.layers,this.add(r);let a=new Kt(Ss,Ms,e,n);a.layers=this.layers,this.add(a);let h=new Kt(Ss,Ms,e,n);h.layers=this.layers,this.add(h);let l=new Kt(Ss,Ms,e,n);l.layers=this.layers,this.add(l);let o=new Kt(Ss,Ms,e,n);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,h,l]=n;for(let o of n)this.remove(o);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===As)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of n)this.add(o),o.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,h,l,o,d]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(c,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Io=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Zh="\\[\\]\\.:\\/",cp=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",up="[^"+Zh.replace("\\.","")+"]",dp=/((?:WC+[\/:])*)/.source.replace("WC",Jh),fp=/(WCOD+)?/.source.replace("WCOD",up),pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),gp=new RegExp("^"+dp+fp+pp+mp+"$"),yp=["material","materials","bones","map"],Sh=class{constructor(e,n,i){let s=i||Mt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Mt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cp,"")}static parseTrackName(e){let n=gp.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);yp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let h=r[a];if(h.name===n||h.uuid===n)return h;let l=i(h.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=n.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===o){o=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(o!==void 0){if(e[o]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=n.nodeName;Be("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Sh;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lv=new Float32Array(1);var bu=new ot,Or=class{constructor(e,n,i=0,s=1/0){this.ray=new Ti(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Be("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return bu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bu),this}intersectObject(e,n=!0,i=[]){return Mh(e,this,i,n),i.sort(Su),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mh(e[s],this,i,n);return i.sort(Su),i}};function Su(t,e){return t.distance-e.distance}function Mh(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){let r=t.children;for(let a=0,h=r.length;a<h;a++)Mh(r[a],e,n,!0)}}var Th=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};function Kh(t,e,n,i){let s=xp(i);switch(n){case Wh:return t*e;case zo:return t*e/s.components*s.byteLength;case Ho:return t*e/s.components*s.byteLength;case Ni:return t*e*2/s.components*s.byteLength;case Vo:return t*e*2/s.components*s.byteLength;case Xh:return t*e*3/s.components*s.byteLength;case Cn:return t*e*4/s.components*s.byteLength;case Go:return t*e*4/s.components*s.byteLength;case Vr:case Gr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xo:case $o:return Math.max(t,16)*Math.max(e,8)/4;case Wo:case qo:return Math.max(t,8)*Math.max(e,8)/2;case Yo:case Zo:case Ko:case jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jo:case qr:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ol:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yl:case xl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case $r:case vl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xp(t){switch(t){case cn:case zh:return{byteLength:1,components:1};case Bs:case Hh:case Vn:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case Hn:case ko:case An:return{byteLength:4,components:1};case Vh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);function Id(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function vp(t){let e=new WeakMap;function n(h,l){let o=h.array,d=h.usage,c=o.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,o,d),h.onUploadCallback();let f;if(o instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=t.HALF_FLOAT;else if(o instanceof Uint16Array)h.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=t.SHORT;else if(o instanceof Uint32Array)f=t.UNSIGNED_INT;else if(o instanceof Int32Array)f=t.INT;else if(o instanceof Int8Array)f=t.BYTE;else if(o instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:h.version,size:c}}function i(h,l,o){let d=l.array,c=l.updateRanges;if(t.bindBuffer(o,h),c.length===0)t.bufferSubData(o,0,d);else{c.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<c.length;f++){let g=c[u],_=c[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,c[u]=_)}c.length=u+1;for(let f=0,g=c.length;f<g;f++){let _=c[f];t.bufferSubData(o,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);let l=e.get(h);l&&(t.deleteBuffer(l.buffer),e.delete(h))}function a(h,l){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let d=e.get(h);(!d||d.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let o=e.get(h);if(o===void 0)e.set(h,n(h,l));else if(o.version<h.version){if(o.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,h,l),o.version=h.version}}return{get:s,remove:r,update:a}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,xm=`uniform sampler2D dfgLUT;
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
}`,vm=`
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define TOON
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
}`,$g=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:_p,alphahash_pars_fragment:bp,alphamap_fragment:Sp,alphamap_pars_fragment:Mp,alphatest_fragment:Tp,alphatest_pars_fragment:wp,aomap_fragment:Ep,aomap_pars_fragment:Ap,batching_pars_vertex:Cp,batching_vertex:Rp,begin_vertex:Pp,beginnormal_vertex:Ip,bsdfs:Lp,iridescence_fragment:Dp,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Op,color_fragment:Bp,color_pars_fragment:zp,color_pars_vertex:Hp,color_vertex:Vp,common:Gp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:qp,displacementmap_vertex:$p,emissivemap_fragment:Yp,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Kp,envmap_fragment:jp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:em,envmap_pars_vertex:tm,envmap_physical_pars_fragment:dm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:am,gradientmap_pars_fragment:om,lightmap_pars_fragment:lm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:cm,lights_pars_begin:um,lights_toon_fragment:fm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:ym,lights_physical_pars_fragment:xm,lights_fragment_begin:vm,lights_fragment_maps:_m,lights_fragment_end:bm,lightprobes_pars_fragment:Sm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Em,map_fragment:Am,map_pars_fragment:Cm,map_particle_fragment:Rm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Dm,morphcolor_vertex:Fm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:km,normal_fragment_begin:Om,normal_fragment_maps:Bm,normal_pars_fragment:zm,normal_pars_vertex:Hm,normal_vertex:Vm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:qm,iridescence_pars_fragment:$m,opaque_fragment:Ym,packing:Zm,premultiplied_alpha_fragment:Jm,project_vertex:Km,dithering_fragment:jm,dithering_pars_fragment:Qm,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:ag,skinning_pars_vertex:og,skinning_vertex:lg,skinnormal_vertex:hg,specularmap_fragment:cg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:yg,uv_vertex:xg,worldpos_vertex:vg,background_vert:_g,background_frag:bg,backgroundCube_vert:Sg,backgroundCube_frag:Mg,cube_vert:Tg,cube_frag:wg,depth_vert:Eg,depth_frag:Ag,distance_vert:Cg,distance_frag:Rg,equirect_vert:Pg,equirect_frag:Ig,linedashed_vert:Lg,linedashed_frag:Dg,meshbasic_vert:Fg,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:kg,meshmatcap_vert:Og,meshmatcap_frag:Bg,meshnormal_vert:zg,meshnormal_frag:Hg,meshphong_vert:Vg,meshphong_frag:Gg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:qg,meshtoon_frag:$g,points_vert:Yg,points_frag:Zg,shadow_vert:Jg,shadow_frag:Kg,sprite_vert:jg,sprite_frag:Qg},ge={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ii={basic:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:en([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:en([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:en([ge.points,ge.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:en([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:en([ge.common,ge.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:en([ge.sprite,ge.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:en([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:en([ge.lights,ge.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ii.physical={uniforms:en([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Ml={r:0,b:0,g:0},e0=new ot,Ld=new We;Ld.set(-1,0,0,0,1,0,0,0,1);function t0(t,e,n,i,s,r){let a=new qe(0),h=s===!0?0:1,l,o,d=null,c=0,u=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let v=M.backgroundBlurriness>0;R=e.get(R,v)}return R}function g(M){let R=!1,v=f(M);v===null?p(a,h):v&&v.isColor&&(p(v,1),R=!0);let T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(M,R){let v=f(R);v&&(v.isCubeTexture||v.mapping===zr)?(o===void 0&&(o=new He(new ei(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ji(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=v,o.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Ld),o.material.toneMapped=it.getTransfer(v.colorSpace)!==ct,(d!==v||c!==v.version||u!==t.toneMapping)&&(o.material.needsUpdate=!0,d=v,c=v.version,u=t.toneMapping),o.layers.enableAll(),M.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new He(new Xt(2,2),new gn({name:"BackgroundMaterial",uniforms:ji(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=it.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||c!==v.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=v,c=v.version,u=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,R){M.getRGB(Ml,Yh(t)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,R,r)}function m(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),h=R,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(M){h=M,p(a,h)},render:g,addToRenderList:_,dispose:m}}function n0(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function h(b,I,B,D,V){let Z=!1,F=c(b,D,B,I);r!==F&&(r=F,o(r.object)),Z=f(b,D,B,V),Z&&g(b,D,B,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(b,I,B,D),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function o(b){return t.bindVertexArray(b)}function d(b){return t.deleteVertexArray(b)}function c(b,I,B,D){let V=D.wireframe===!0,Z=i[I.id];Z===void 0&&(Z={},i[I.id]=Z);let F=b.isInstancedMesh===!0?b.id:0,ie=Z[F];ie===void 0&&(ie={},Z[F]=ie);let X=ie[B.id];X===void 0&&(X={},ie[B.id]=X);let j=X[V];return j===void 0&&(j=u(l()),X[V]=j),j}function u(b){let I=[],B=[],D=[];for(let V=0;V<n;V++)I[V]=0,B[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:D,object:b,attributes:{},index:null}}function f(b,I,B,D){let V=r.attributes,Z=I.attributes,F=0,ie=B.getAttributes();for(let X in ie)if(ie[X].location>=0){let U=V[X],J=Z[X];if(J===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;F++}return r.attributesNum!==F||r.index!==D}function g(b,I,B,D){let V={},Z=I.attributes,F=0,ie=B.getAttributes();for(let X in ie)if(ie[X].location>=0){let U=Z[X];U===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(U=b.instanceColor));let J={};J.attribute=U,U&&U.data&&(J.data=U.data),V[X]=J,F++}r.attributes=V,r.attributesNum=F,r.index=D}function _(){let b=r.newAttributes;for(let I=0,B=b.length;I<B;I++)b[I]=0}function p(b){m(b,0)}function m(b,I){let B=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;B[b]=1,D[b]===0&&(t.enableVertexAttribArray(b),D[b]=1),V[b]!==I&&(t.vertexAttribDivisor(b,I),V[b]=I)}function M(){let b=r.newAttributes,I=r.enabledAttributes;for(let B=0,D=I.length;B<D;B++)I[B]!==b[B]&&(t.disableVertexAttribArray(B),I[B]=0)}function R(b,I,B,D,V,Z,F){F===!0?t.vertexAttribIPointer(b,I,B,V,Z):t.vertexAttribPointer(b,I,B,D,V,Z)}function v(b,I,B,D){_();let V=D.attributes,Z=B.getAttributes(),F=I.defaultAttributeValues;for(let ie in Z){let X=Z[ie];if(X.location>=0){let j=V[ie];if(j===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){let U=j.normalized,J=j.itemSize,oe=e.get(j);if(oe===void 0)continue;let Ve=oe.buffer,Le=oe.type,Ge=oe.bytesPerElement,z=Le===t.INT||Le===t.UNSIGNED_INT||j.gpuType===ko;if(j.isInterleavedBufferAttribute){let K=j.data,he=K.stride,q=j.offset;if(K.isInstancedInterleavedBuffer){for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee,K.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ee=0;ee<X.locationSize;ee++)p(X.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ee=0;ee<X.locationSize;ee++)R(X.location+ee,J/X.locationSize,Le,U,he*Ge,(q+J/X.locationSize*ee)*Ge,z)}else{if(j.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)m(X.location+K,j.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let K=0;K<X.locationSize;K++)p(X.location+K);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let K=0;K<X.locationSize;K++)R(X.location+K,J/X.locationSize,Le,U,J*Ge,J/X.locationSize*K*Ge,z)}}else if(F!==void 0){let U=F[ie];if(U!==void 0)switch(U.length){case 2:t.vertexAttrib2fv(X.location,U);break;case 3:t.vertexAttrib3fv(X.location,U);break;case 4:t.vertexAttrib4fv(X.location,U);break;default:t.vertexAttrib1fv(X.location,U)}}}}M()}function T(){E();for(let b in i){let I=i[b];for(let B in I){let D=I[B];for(let V in D){let Z=D[V];for(let F in Z)d(Z[F].object),delete Z[F];delete D[V]}}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let I=i[b.id];for(let B in I){let D=I[B];for(let V in D){let Z=D[V];for(let F in Z)d(Z[F].object),delete Z[F];delete D[V]}}delete i[b.id]}function C(b){for(let I in i){let B=i[I];for(let D in B){let V=B[D];if(V[b.id]===void 0)continue;let Z=V[b.id];for(let F in Z)d(Z[F].object),delete Z[F];delete V[b.id]}}}function x(b){for(let I in i){let B=i[I],D=b.isInstancedMesh===!0?b.id:0,V=B[D];if(V!==void 0){for(let Z in V){let F=V[Z];for(let ie in F)d(F[ie].object),delete F[ie];delete V[Z]}delete B[D],Object.keys(B).length===0&&delete i[I]}}}function E(){A(),a=!0,r!==s&&(r=s,o(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:E,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function i0(t,e,n){let i;function s(l){i=l}function r(l,o){t.drawArrays(i,l,o),n.update(o,i,1)}function a(l,o,d){d!==0&&(t.drawArraysInstanced(i,l,o,d),n.update(o,i,d))}function h(l,o,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,o,0,d);let u=0;for(let f=0;f<d;f++)u+=o[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=h}function s0(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Cn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(C){let x=C===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==cn&&C!==An&&!x&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=n.precision!==void 0?n.precision:"highp",d=l(o);d!==o&&(ke("WebGLRenderer:",o,"not supported, using",d,"instead."),o=d);let c=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:h,precision:o,logarithmicDepthBuffer:c,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:v,maxSamples:T,samples:w}}function r0(t){let e=this,n=null,i=0,s=!1,r=!1,a=new fn,h=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){let f=c.length!==0||u||i!==0||s;return s=u,i=c.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,u){n=d(c,u,0)},this.setState=function(c,u,f){let g=c.clippingPlanes,_=c.clipIntersection,p=c.clipShadows,m=t.get(c);if(!s||g===null||g.length===0||r&&!p)r?d(null):o();else{let M=r?0:i,R=M*4,v=m.clippingState||null;l.value=v,v=d(g,u,R,f);for(let T=0;T!==R;++T)v[T]=n[T];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function o(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(c,u,f,g){let _=c!==null?c.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,M=u.matrixWorldInverse;h.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,v=f;R!==_;++R,v+=4)a.copy(c[R]).applyMatrix4(M,h),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Vs=4,a0=6,o0=20,l0=256,Yr=new Us,cd=new qe,jh=null,Qh=0,ec=0,tc=!1,h0=new L,Qi=new L,wl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:h=h0}=r;jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,h),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Qh,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Li||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Vn,format:Cn,colorSpace:gr,depthBuffer:!1},s=ud(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=c0(r)),this._blurMaterial=d0(r,e,n),this._ggxMaterial=u0(r,e,n)}return s}_compileMaterial(e){let n=new He(new Dt,e);this._renderer.compile(n,Yr)}_sceneToCubeUV(e,n,i,s,r){let l=new Kt(90,1,n,i),o=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(cd),c.toneMapping=zn,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(s),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new ei,new mn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(cd),m=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(l.up.set(0,o[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):v===1?(l.up.set(0,0,o[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,o[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));let T=this._cubeSize;Hs(s,v*T,R>2?T:0,T,T),c.setRenderTarget(s),m&&c.render(_,l),c.render(e,l)}c.toneMapping=f,c.autoClear=u,e.background=M}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Li||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let h=r.uniforms;h.envMap.value=e;let l=this._cubeSize;Hs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Yr)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,h=this._lodMeshes[i];h.material=a;let l=a.uniforms,o=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),c=Math.sqrt(o*o-d*d),u=o*1.25,f=c*u,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-Vs?i-g+Vs:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-n,Hs(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(h,Yr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Hs(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(h,Yr)}_blur(e,n,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,n,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,n,i,s,r){let a=this._renderer,h=this._blurMaterial,l=this._lodMeshes[s];l.material=h;let o=h.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],c=3*d*(s>this._lodMax-Vs?s-this._lodMax+Vs:0),u=4*(this._cubeSize-d);Hs(n,c,u,3*d,2*d),a.setRenderTarget(n),a.render(l,Yr)}};function c0(t){let e=[],n=[],i=t,s=t-Vs+1+a0;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let h=1/(a-2),l=-h,o=1+h,d=[l,l,o,l,o,o,l,l,o,o,l,o],c=6,u=6,f=3,g=new Float32Array(f*u*c),_=new Float32Array(f*u*c);for(let m=0;m<c;m++){let M=m%3*2/3-1,R=m>2?0:-1,v=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(v,f*u*m);for(let T=0;T<u;T++){let w=d[T*2]*2-1,C=d[T*2+1]*2-1;m===0?Qi.set(1,C,w):m===1?Qi.set(-w,1,-C):m===2?Qi.set(-w,C,1):m===3?Qi.set(-1,C,-w):m===4?Qi.set(-w,-1,C):Qi.set(w,C,-1),Qi.toArray(_,(m*u+T)*f)}}let p=new Dt;p.setAttribute("position",new ln(g,f)),p.setAttribute("outputDirection",new ln(_,f)),n.push(new He(p,null)),i>Vs&&i--}return{lodMeshes:n,sizeLods:e}}function ud(t,e,n){let i=new hn(t,e,n);return i.texture.mapping=zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function u0(t,e,n){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function d0(t,e,n){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:o0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function dd(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function fd(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var El=class extends hn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Rr(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ti});r.uniforms.tEquirect.value=n;let a=new He(s,r),h=n.minFilter;return n.minFilter===Di&&(n.minFilter=Wt),new Po(1,10,this).update(e,a),n.minFilter=h,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}};function f0(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Fo||f===No)if(e.has(u)){let g=e.get(u).texture;return h(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new El(g.height);return _.fromEquirectangularTexture(t,u),e.set(u,_),u.addEventListener("dispose",o),h(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Fo||f===No,_=f===Li||f===Ki;if(g||_){let p=n.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new wl(t)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new wl(t)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function h(u,f){return f===Fo?u.mapping=Li:f===No&&(u.mapping=Ki),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function o(u){let f=u.target;f.removeEventListener("dispose",o);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function c(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:c}}function p0(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&qi("WebGLRenderer: "+i+" extension not supported."),s}}}function m0(t,e,n,i){let s={},r=new WeakMap;function a(c){let u=c.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function h(c,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++),u}function l(c){let u=c.attributes;for(let f in u)e.update(u[f],t.ARRAY_BUFFER)}function o(c){let u=[],f=c.index,g=c.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let R=0,v=M.length;R<v;R+=3){let T=M[R+0],w=M[R+1],C=M[R+2];u.push(T,w,w,C,C,T)}}else{let M=g.array;_=g.version;for(let R=0,v=M.length/3-1;R<v;R+=3){let T=R+0,w=R+1,C=R+2;u.push(T,w,w,C,C,T)}}let p=new(g.count>=65535?Tr:Mr)(u,1);p.version=_;let m=r.get(c);m&&e.remove(m),r.set(c,p)}function d(c){let u=r.get(c);if(u){let f=c.index;f!==null&&u.version<f.version&&o(c)}else o(c);return r.get(c)}return{get:h,update:l,getWireframeAttribute:d}}function g0(t,e,n){let i;function s(c){i=c}let r,a;function h(c){r=c.type,a=c.bytesPerElement}function l(c,u){t.drawElements(i,u,r,c*a),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawElementsInstanced(i,u,r,c*a,f),n.update(u,i,f))}function d(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,c,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];n.update(_,i,1)}this.setMode=s,this.setIndex=h,this.render=l,this.renderInstances=o,this.renderMultiDraw=d}function y0(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,h){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=h*(r/3);break;case t.LINES:n.lines+=h*(r/2);break;case t.LINE_STRIP:n.lines+=h*(r-1);break;case t.LINE_LOOP:n.lines+=h*r;break;case t.POINTS:n.points+=h*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function x0(t,e,n){let i=new WeakMap,s=new wt;function r(a,h,l){let o=a.morphTargetInfluences,d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,c=d!==void 0?d.length:0,u=i.get(h);if(u===void 0||u.count!==c){let E=function(){C.dispose(),i.delete(h),h.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,p=h.morphAttributes.position||[],m=h.morphAttributes.normal||[],M=h.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let v=h.attributes.position.count*R,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*T*4*c),C=new _r(w,v,T,c);C.type=An,C.needsUpdate=!0;let x=R*4;for(let A=0;A<c;A++){let b=p[A],I=m[A],B=M[A],D=v*T*4*A;for(let V=0;V<b.count;V++){let Z=V*x;f===!0&&(s.fromBufferAttribute(b,V),w[D+Z+0]=s.x,w[D+Z+1]=s.y,w[D+Z+2]=s.z,w[D+Z+3]=0),g===!0&&(s.fromBufferAttribute(I,V),w[D+Z+4]=s.x,w[D+Z+5]=s.y,w[D+Z+6]=s.z,w[D+Z+7]=0),_===!0&&(s.fromBufferAttribute(B,V),w[D+Z+8]=s.x,w[D+Z+9]=s.y,w[D+Z+10]=s.z,w[D+Z+11]=B.itemSize===4?s.w:1)}}u={count:c,texture:C,size:new ze(v,T)},i.set(h,u),h.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let _=0;_<o.length;_++)f+=o[_];let g=h.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",o)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function v0(t,e,n,i,s){let r=new WeakMap;function a(o){let d=s.render.frame,c=o.geometry,u=e.get(o,c);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),r.get(o)!==d&&(n.update(o.instanceMatrix,t.ARRAY_BUFFER),o.instanceColor!==null&&n.update(o.instanceColor,t.ARRAY_BUFFER),r.set(o,d))),o.isSkinnedMesh){let f=o.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function h(){r=new WeakMap}function l(o){let d=o.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:h}}var _0={[Lh]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Nh]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Uh]:"CUSTOM_TONE_MAPPING"};function b0(t,e,n,i,s,r){let a=new hn(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,l=null,o=new Dt;o.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ut([0,2,0,0,2,0],2));let d=new go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new He(o,d),u=new Us(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,M=[],R=!1;this.setSize=function(v,T){a.setSize(v,T),h!==null&&h.setSize(v,T),l!==null&&l.setSize(v,T);for(let w=0;w<M.length;w++){let C=M[w];C.setSize&&C.setSize(v,T)}},this.setEffects=function(v){M=v,R=M.length>0&&M[0].isRenderPass===!0;let T=a.width,w=a.height;M.length>0&&h===null&&(h=new hn(T,w,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new hn(T,w,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let x=M[C];x.setSize&&x.setSize(T,w)}},this.begin=function(v,T){if(_||v.toneMapping===zn&&M.length===0)return!1;if(m=T,T!==null){let w=T.width,C=T.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return R===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=zn,!0},this.hasRenderPass=function(){return R},this.end=function(v,T){v.toneMapping=p,_=!0;let w=a,C=h;for(let x=0;x<M.length;x++){let E=M[x];E.enabled!==!1&&(E.render(v,C,w,T),E.needsSwap!==!1&&(w=C,C=C===h?l:h))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,d.defines={},it.getTransfer(f)===ct&&(d.defines.SRGB_TRANSFER="");let x=_0[g];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(c,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),h!==null&&h.dispose(),l!==null&&l.dispose(),o.dispose(),d.dispose()}}var Dd=new rn,sc=new Ei(1,1),Fd=new _r,Nd=new lo,Ud=new Rr,pd=[],md=[],gd=new Float32Array(16),yd=new Float32Array(9),xd=new Float32Array(4);function Ws(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){i.toArray(r,0);for(let a=1,h=0;a!==e;++a)h+=n,t[a].toArray(r,h)}return r}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=md[e];n===void 0&&(n=new Int32Array(e),md[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function S0(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function M0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function T0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function w0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function E0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Ft(n,i))return;xd.set(i),t.uniformMatrix2fv(this.addr,!1,xd),Nt(n,i)}}function A0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Ft(n,i))return;yd.set(i),t.uniformMatrix3fv(this.addr,!1,yd),Nt(n,i)}}function C0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Ft(n,i))return;gd.set(i),t.uniformMatrix4fv(this.addr,!1,gd),Nt(n,i)}}function R0(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function P0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function I0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function L0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function D0(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function F0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function N0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function U0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function k0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(sc.compareFunction=n.isReversedDepthBuffer()?Sl:bl,r=sc):r=Dd,n.setTexture2D(e||r,s)}function O0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Nd,s)}function B0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Ud,s)}function z0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Fd,s)}function H0(t){switch(t){case 5126:return S0;case 35664:return M0;case 35665:return T0;case 35666:return w0;case 35674:return E0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return I0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return F0;case 36295:return N0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function V0(t,e){t.uniform1fv(this.addr,e)}function G0(t,e){let n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function W0(t,e){let n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function X0(t,e){let n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function q0(t,e){let n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $0(t,e){let n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Y0(t,e){let n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Z0(t,e){t.uniform1iv(this.addr,e)}function J0(t,e){t.uniform2iv(this.addr,e)}function K0(t,e){t.uniform3iv(this.addr,e)}function j0(t,e){t.uniform4iv(this.addr,e)}function Q0(t,e){t.uniform1uiv(this.addr,e)}function ey(t,e){t.uniform2uiv(this.addr,e)}function ty(t,e){t.uniform3uiv(this.addr,e)}function ny(t,e){t.uniform4uiv(this.addr,e)}function iy(t,e,n){let i=this.cache,s=e.length,r=Rl(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=sc:a=Dd;for(let h=0;h!==s;++h)n.setTexture2D(e[h]||a,r[h])}function sy(t,e,n){let i=this.cache,s=e.length,r=Rl(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Nd,r[a])}function ry(t,e,n){let i=this.cache,s=e.length,r=Rl(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Ud,r[a])}function ay(t,e,n){let i=this.cache,s=e.length,r=Rl(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Fd,r[a])}function oy(t){switch(t){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return $0;case 35676:return Y0;case 5124:case 35670:return Z0;case 35667:case 35671:return J0;case 35668:case 35672:return K0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}var rc=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=H0(n.type)}},ac=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oy(n.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let h=s[r];h.setValue(e,n[h.id],i)}}},nc=/(\w+)(\])?(\[|\.)?/g;function vd(t,e){t.seq.push(e),t.map[e.id]=e}function ly(t,e,n){let i=t.name,s=i.length;for(nc.lastIndex=0;;){let r=nc.exec(i),a=nc.lastIndex,h=r[1],l=r[2]==="]",o=r[3];if(l&&(h=h|0),o===void 0||o==="["&&a+2===s){vd(n,o===void 0?new rc(h,t,e):new ac(h,t,e));break}else{let c=n.map[h];c===void 0&&(c=new oc(h),vd(n,c)),n=c}}}var Gs=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let h=e.getActiveUniform(n,a),l=e.getUniformLocation(n,h.name);ly(h,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let h=n[r],l=i[h.id];l.needsUpdate!==!1&&h.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function _d(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var hy=37297,cy=0;function uy(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let h=a+1;i.push(`${h===e?">":" "} ${h}: ${n[a]}`)}return i.join(`
`)}var bd=new We;function dy(t){it._getMatrix(bd,it.workingColorSpace,t);let e=`mat3( ${bd.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case yr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sd(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let h=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+uy(t.getShaderSource(e),h)}else return r}function fy(t,e){let n=dy(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var py={[Lh]:"Linear",[Dh]:"Reinhard",[Fh]:"Cineon",[Nh]:"ACESFilmic",[kh]:"AgX",[Oh]:"Neutral",[Uh]:"Custom"};function my(t,e){let n=py[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Tl=new L;function gy(){it.getLuminanceCoefficients(Tl);let t=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yy(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function xy(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vy(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,h=1;r.type===t.FLOAT_MAT2&&(h=2),r.type===t.FLOAT_MAT3&&(h=3),r.type===t.FLOAT_MAT4&&(h=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:h}}return n}function Jr(t){return t!==""}function Md(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(t){return t.replace(_y,Sy)}var by=new Map;function Sy(t,e){let n=Je[e];if(n===void 0){let i=by.get(e);if(i!==void 0)n=Je[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lc(n)}var My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(t){return t.replace(My,Ty)}function Ty(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ed(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var wy={[Br]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function Ey(t){return wy[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ay={[Li]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function Cy(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Ay[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ry={[Ki]:"ENVMAP_MODE_REFRACTION"};function Py(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Iy={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[Gu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function Ly(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Iy[t.combine]||"ENVMAP_BLENDING_NONE"}function Dy(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Fy(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,h=n.fragmentShader,l=Ey(n),o=Cy(n),d=Py(n),c=Ly(n),u=Dy(n),f=yy(n),g=xy(r),_=s.createProgram(),p,m,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`)):(p=[Ed(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),m=[Ed(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+o:"",n.envMap?"#define "+d:"",n.envMap?"#define "+c:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zn?"#define TONE_MAPPING":"",n.toneMapping!==zn?Je.tonemapping_pars_fragment:"",n.toneMapping!==zn?my("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,fy("linearToOutputTexel",n.outputColorSpace),gy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jr).join(`
`)),a=lc(a),a=Md(a,n),a=Td(a,n),h=lc(h),h=Md(h,n),h=Td(h,n),a=wd(a),h=wd(h),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=M+p+a,v=M+m+h,T=_d(s,s.VERTEX_SHADER,R),w=_d(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(b){if(t.debug.checkShaderErrors){let I=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(w)||"",V=I.trim(),Z=B.trim(),F=D.trim(),ie=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,T,w);else{let j=Sd(s,T,"vertex"),U=Sd(s,w,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+V+`
`+j+`
`+U)}else V!==""?ke("WebGLProgram: Program Info Log:",V):(Z===""||F==="")&&(X=!1);X&&(b.diagnostics={runnable:ie,programLog:V,vertexShader:{log:Z,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(T),s.deleteShader(w),x=new Gs(s,_),E=vy(s,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,hy)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}var Ny=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new cc(e),n.set(e,i)),i}},cc=class{constructor(e){this.id=Ny++,this.code=e,this.usedTimes=0}};function Uy(t){return t===Ni||t===qr||t===$r}function ky(t,e,n,i,s,r){let a=new Ps,h=new hc,l=new Set,o=[],d=new Map,c=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,A,b,I,B){let D=b.fog,V=I.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||Z,F),X=ie&&ie.mapping===zr?ie.image.height:null,j=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let U=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,J=U!==void 0?U.length:0,oe=0;V.morphAttributes.position!==void 0&&(oe=1),V.morphAttributes.normal!==void 0&&(oe=2),V.morphAttributes.color!==void 0&&(oe=3);let Ve,Le,Ge,z;if(j){let vt=ii[j];Ve=vt.vertexShader,Le=vt.fragmentShader}else{Ve=x.vertexShader,Le=x.fragmentShader;let vt=h.getVertexShaderStage(x),lt=h.getFragmentShaderStage(x);h.update(x,vt,lt),Ge=vt.id,z=lt.id}let K=t.getRenderTarget(),he=t.state.buffers.depth.getReversed(),q=I.isInstancedMesh===!0,ee=I.isBatchedMesh===!0,we=!!x.map,Oe=!!x.matcap,Ce=!!ie,Xe=!!x.aoMap,Qe=!!x.lightMap,nt=!!x.bumpMap&&x.wireframe===!1,Tt=!!x.normalMap,kt=!!x.displacementMap,on=!!x.emissiveMap,Ct=!!x.metalnessMap,Pt=!!x.roughnessMap,O=x.anisotropy>0,$t=x.clearcoat>0,ft=x.dispersion>0,P=x.retroreflectivity>0,y=x.iridescence>0,H=x.sheen>0,$=x.transmission>0,Q=O&&!!x.anisotropyMap,le=$t&&!!x.clearcoatMap,ce=$t&&!!x.clearcoatNormalMap,ne=$t&&!!x.clearcoatRoughnessMap,re=y&&!!x.iridescenceMap,ue=y&&!!x.iridescenceThicknessMap,De=H&&!!x.sheenColorMap,me=H&&!!x.sheenRoughnessMap,de=!!x.specularMap,Fe=!!x.specularColorMap,Ue=!!x.specularIntensityMap,Ye=$&&!!x.transmissionMap,k=$&&!!x.thicknessMap,fe=!!x.gradientMap,se=!!x.alphaMap,pe=x.alphaTest>0,_e=!!x.alphaHash,ae=!!x.extensions,Ne=zn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ne=t.toneMapping);let Re={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:Le,defines:x.defines,customVertexShaderID:Ge,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ee,batchingColor:ee&&I._colorsTexture!==null,instancing:q,instancingColor:q&&I.instanceColor!==null,instancingMorph:q&&I.morphTexture!==null,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:Oe,envMap:Ce,envMapMode:Ce&&ie.mapping,envMapCubeUVHeight:X,aoMap:Xe,lightMap:Qe,bumpMap:nt,normalMap:Tt,displacementMap:kt,emissiveMap:on,normalMapObjectSpace:Tt&&x.normalMapType===$u,normalMapTangentSpace:Tt&&x.normalMapType===_l,packedNormalMap:Tt&&x.normalMapType===_l&&Uy(x.normalMap.format),metalnessMap:Ct,roughnessMap:Pt,anisotropy:O,anisotropyMap:Q,clearcoat:$t,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:ne,dispersion:ft,retroreflection:P,iridescence:y,iridescenceMap:re,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:De,sheenRoughnessMap:me,specularMap:de,specularColorMap:Fe,specularIntensityMap:Ue,transmission:$,transmissionMap:Ye,thicknessMap:k,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:pe,alphaHash:_e,combine:x.combine,mapUv:we&&g(x.map.channel),aoMapUv:Xe&&g(x.aoMap.channel),lightMapUv:Qe&&g(x.lightMap.channel),bumpMapUv:nt&&g(x.bumpMap.channel),normalMapUv:Tt&&g(x.normalMap.channel),displacementMapUv:kt&&g(x.displacementMap.channel),emissiveMapUv:on&&g(x.emissiveMap.channel),metalnessMapUv:Ct&&g(x.metalnessMap.channel),roughnessMapUv:Pt&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:le&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(x.sheenRoughnessMap.channel),specularMapUv:de&&g(x.specularMap.channel),specularColorMapUv:Fe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ue&&g(x.specularIntensityMap.channel),transmissionMapUv:Ye&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:se&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Tt||O),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(we||se),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&Tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:he,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:oe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ne,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:on&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===En,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function p(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)E.push(A),E.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(m(E,x),M(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){let E=f[x.type],A;if(E){let b=ii[E];A=od.clone(b.uniforms)}else A=x.uniforms;return A}function v(x,E){let A=d.get(E);return A!==void 0?++A.usedTimes:(A=new Fy(t,E,x,s),o.push(A),d.set(E,A)),A}function T(x){if(--x.usedTimes===0){let E=o.indexOf(x);o[E]=o[o.length-1],o.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){h.remove(x)}function C(){h.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:R,acquireProgram:v,releaseProgram:T,releaseShaderCache:w,programs:o,dispose:C}}function Oy(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let h=t.get(a);return h===void 0&&(h={},t.set(a,h)),h}function i(a){t.delete(a)}function s(a,h,l){t.get(a)[h]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function By(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ad(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cd(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function h(u,f,g,_,p,m){let M=t[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},t[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=p,M.group=m),e++,M}function l(u,f,g,_,p,m,M){M.reversedDepth===!0&&(p=-p);let R=h(u,f,g,_,p,m);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):n.push(R)}function o(u,f,g,_,p,m){let M=h(u,f,g,_,p,m);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function d(u,f){n.length>1&&n.sort(u||By),i.length>1&&i.sort(f||Ad),s.length>1&&s.sort(f||Ad)}function c(){for(let u=e,f=t.length;u<f;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:o,finish:c,sort:d}}function zy(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new Cd,t.set(i,[a])):s>=r.length?(a=new Cd,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Hy(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new L,color:new qe};break;case"SpotLight":n={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function Vy(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var Gy=0;function Wy(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xy(t){let e=new Hy,n=Vy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new L);let s=new L,r=new ot,a=new ot;function h(o){let d=0,c=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,R=0,v=0,T=0,w=0,C=0,x=0,E=0,A=0;o.sort(Wy);for(let I=0,B=o.length;I<B;I++){let D=o[I],V=D.color,Z=D.intensity,F=D.distance,ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ni?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=V.r*Z,c+=V.g*Z,u+=V.b*Z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],Z);A++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,U=n.get(D);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=U,i.sunShadowMap[g]=ie;let J=j.getViewportCount();for(let oe=0;oe<J;oe++)i.sunShadowMatrix[_+oe]=j.getMatrix(oe),i.sunShadowCascade[_+oe]=j._cascadeData[oe];_+=J,g++}i.sun[f]=X,f++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,U=n.get(D);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=D.shadow.matrix,T++}i.directional[p]=X,p++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(V).multiplyScalar(Z),X.distance=F,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[M]=X;let j=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,j.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[M]=j.matrix,D.castShadow){let U=n.get(D);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[M]=U,i.spotShadowMap[M]=ie,C++}M++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(V).multiplyScalar(Z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[R]=X,R++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let j=D.shadow,U=n.get(D);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=D.shadow.matrix,w++}i.point[m]=X,m++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(Z),X.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[v]=X,v++}}R>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=c,i.ambient[2]=u;let b=i.hash;(b.sunLength!==f||b.directionalLength!==p||b.pointLength!==m||b.spotLength!==M||b.rectAreaLength!==R||b.hemiLength!==v||b.numSunShadows!==g||b.numDirectionalShadows!==T||b.numPointShadows!==w||b.numSpotShadows!==C||b.numSpotMaps!==x||b.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=p,i.spot.length=M,i.rectArea.length=R,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,b.sunLength=f,b.directionalLength=p,b.pointLength=m,b.spotLength=M,b.rectAreaLength=R,b.hemiLength=v,b.numSunShadows=g,b.numDirectionalShadows=T,b.numPointShadows=w,b.numSpotShadows=C,b.numSpotMaps=x,b.numLightProbes=A,i.version=Gy++)}function l(o,d){let c=0,u=0,f=0,g=0,_=0,p=0,m=d.matrixWorldInverse;for(let M=0,R=o.length;M<R;M++){let v=o[M];if(v.isSunLight){let T=i.sun[c];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),c++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(v.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let T=i.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:h,setupView:l,state:i}}function Rd(t){let e=new Xy(t),n=[],i=[],s=[];function r(u){c.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function h(u){i.push(u)}function l(u){s.push(u)}function o(){e.setup(n)}function d(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:o,setupLightsView:d,pushLight:a,pushShadow:h,pushLightProbeGrid:l}}function qy(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),h;return a===void 0?(h=new Rd(t),e.set(s,[h])):r>=a.length?(h=new Rd(t),a.push(h)):h=a[r],h}function i(){e=new WeakMap}return{get:n,dispose:i}}var $y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,Zy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Jy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Pd=new ot,Zr=new L,ic=new L;function Ky(t,e,n){let i=new Fs,s=new ze,r=new ze,a=new wt,h=new yo,l=new xo,o={},d=n.maxTextureSize,c={[Ii]:an,[an]:Ii,[En]:En},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:$y,fragmentShader:Yy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Br;let m=this.type;this.render=function(w,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Do&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Br);let E=t.getRenderTarget(),A=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),I=t.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=m!==this.type;B&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=w.length;D<V;D++){let Z=w[D],F=Z.shadow;if(F===void 0){ke("WebGLShadowMap:",Z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let ie=F.getFrameExtents();s.multiply(ie),r.copy(F.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,F.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,F.mapSize.y=r.y));let X=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ks){if(Z.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new hn(s.x,s.y,{format:Ni,type:Vn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),F.map.texture.name=Z.name+".shadowMap",F.map.depthTexture=new Ei(s.x,s.y,An),F.map.depthTexture.name=Z.name+".shadowMapDepth",F.map.depthTexture.format=Kn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=zt,F.map.depthTexture.magFilter=zt}else Z.isPointLight?(F.map=new El(s.x),F.map.depthTexture=new po(s.x,Hn)):(F.map=new hn(s.x,s.y),F.map.depthTexture=new Ei(s.x,s.y,Hn)),F.map.depthTexture.name=Z.name+".shadowMap",F.map.depthTexture.format=Kn,this.type===Br?(F.map.depthTexture.compareFunction=X?Sl:bl,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=zt,F.map.depthTexture.magFilter=zt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let j=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();Z.isPointLight!==!0&&F.updateMatrices(Z,x);for(let U=0;U<j;U++){let J=F.getCamera(U);if(Z.isPointLight){let oe=F.camera,Ve=F.matrix,Le=Z.distance||oe.far;Le!==oe.far&&(oe.far=Le,oe.updateProjectionMatrix()),Zr.setFromMatrixPosition(Z.matrixWorld),oe.position.copy(Zr),ic.copy(oe.position),ic.add(Zy[U]),oe.up.copy(Jy[U]),oe.lookAt(ic),oe.updateMatrixWorld(),Ve.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Pd.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Pd,oe.coordinateSystem,oe.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,U),t.clear();else{U===0&&(t.setRenderTarget(F.map),t.clear());let oe=F.getViewport(U);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),I.viewport(a)}i=F.getFrustum(U),v(C,x,J,Z,this.type)}F.isPointLightShadow!==!0&&this.type===ks&&M(F,x),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(E,A,b)};function M(w,C){let x=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new hn(s.x,s.y,{format:Ni,type:Vn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,x,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,x,f,_,null)}function R(w,C,x,E){let A=null,b=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)A=b;else if(A=x.isPointLight===!0?l:h,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let I=A.uuid,B=C.uuid,D=o[I];D===void 0&&(D={},o[I]=D);let V=D[B];V===void 0&&(V=A.clone(),D[B]=V,C.addEventListener("dispose",T)),A=V}if(A.visible=C.visible,A.wireframe=C.wireframe,E===ks?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:c[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=t.properties.get(A);I.light=x}return A}function v(w,C,x,E,A){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===ks)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let B=e.update(w),D=w.material;if(Array.isArray(D)){let V=B.groups;for(let Z=0,F=V.length;Z<F;Z++){let ie=V[Z],X=D[ie.materialIndex];if(X&&X.visible){let j=R(w,X,E,A);w.onBeforeShadow(t,w,C,x,B,j,ie),t.renderBufferDirect(x,null,B,j,w,ie),w.onAfterShadow(t,w,C,x,B,j,ie)}}}else if(D.visible){let V=R(w,D,E,A);w.onBeforeShadow(t,w,C,x,B,V,null),t.renderBufferDirect(x,null,B,V,w,null),w.onAfterShadow(t,w,C,x,B,V,null)}}let I=w.children;for(let B=0,D=I.length;B<D;B++)v(I[B],C,x,E,A)}function T(w){w.target.removeEventListener("dispose",T);for(let x in o){let E=o[x],A=w.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function jy(t,e){function n(){let k=!1,fe=new wt,se=null,pe=new wt(0,0,0,0);return{setMask:function(_e){se!==_e&&!k&&(t.colorMask(_e,_e,_e,_e),se=_e)},setLocked:function(_e){k=_e},setClear:function(_e,ae,Ne,Re,vt){vt===!0&&(_e*=Re,ae*=Re,Ne*=Re),fe.set(_e,ae,Ne,Re),pe.equals(fe)===!1&&(t.clearColor(_e,ae,Ne,Re),pe.copy(fe))},reset:function(){k=!1,se=null,pe.set(-1,0,0,0)}}}function i(){let k=!1,fe=!1,se=null,pe=null,_e=null;return{setReversed:function(ae){if(fe!==ae){let Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),fe=ae;let Re=_e;_e=null,this.setClear(Re)}},getReversed:function(){return fe},setTest:function(ae){ae?K(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ae){se!==ae&&!k&&(t.depthMask(ae),se=ae)},setFunc:function(ae){if(fe&&(ae=sd[ae]),pe!==ae){switch(ae){case Ja:t.depthFunc(t.NEVER);break;case Ka:t.depthFunc(t.ALWAYS);break;case ja:t.depthFunc(t.LESS);break;case ws:t.depthFunc(t.LEQUAL);break;case Qa:t.depthFunc(t.EQUAL);break;case eo:t.depthFunc(t.GEQUAL);break;case to:t.depthFunc(t.GREATER);break;case no:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=ae}},setLocked:function(ae){k=ae},setClear:function(ae){_e!==ae&&(_e=ae,fe&&(ae=1-ae),t.clearDepth(ae))},reset:function(){k=!1,se=null,pe=null,_e=null,fe=!1}}}function s(){let k=!1,fe=null,se=null,pe=null,_e=null,ae=null,Ne=null,Re=null,vt=null;return{setTest:function(lt){k||(lt?K(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!k&&(t.stencilMask(lt),fe=lt)},setFunc:function(lt,Fn,Xn){(se!==lt||pe!==Fn||_e!==Xn)&&(t.stencilFunc(lt,Fn,Xn),se=lt,pe=Fn,_e=Xn)},setOp:function(lt,Fn,Xn){(ae!==lt||Ne!==Fn||Re!==Xn)&&(t.stencilOp(lt,Fn,Xn),ae=lt,Ne=Fn,Re=Xn)},setLocked:function(lt){k=lt},setClear:function(lt){vt!==lt&&(t.clearStencil(lt),vt=lt)},reset:function(){k=!1,fe=null,se=null,pe=null,_e=null,ae=null,Ne=null,Re=null,vt=null}}}let r=new n,a=new i,h=new s,l=new WeakMap,o=new WeakMap,d={},c={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,R=null,v=null,T=null,w=null,C=null,x=new qe(0,0,0),E=0,A=!1,b=null,I=null,B=null,D=null,V=null,Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,ie=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=ie>=2);let j=null,U={},J=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Ve=new wt().fromArray(J),Le=new wt().fromArray(oe);function Ge(k,fe,se,pe){let _e=new Uint8Array(4),ae=t.createTexture();t.bindTexture(k,ae),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<se;Ne++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(fe+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ae}let z={};z[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),z[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),z[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),h.setClear(0),K(t.DEPTH_TEST),a.setFunc(ws),nt(!1),Tt(wh),K(t.CULL_FACE),Xe(ti);function K(k){d[k]!==!0&&(t.enable(k),d[k]=!0)}function he(k){d[k]!==!1&&(t.disable(k),d[k]=!1)}function q(k,fe){return u[k]!==fe?(t.bindFramebuffer(k,fe),u[k]=fe,k===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),k===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function ee(k,fe){let se=g,pe=!1;if(k){se=f.get(fe),se===void 0&&(se=[],f.set(fe,se));let _e=k.textures;if(se.length!==_e.length||se[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Ne=_e.length;ae<Ne;ae++)se[ae]=t.COLOR_ATTACHMENT0+ae;se.length=_e.length,pe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,pe=!0);pe&&t.drawBuffers(se)}function we(k){return _!==k?(t.useProgram(k),_=k,!0):!1}let Oe={[Ji]:t.FUNC_ADD,[Eu]:t.FUNC_SUBTRACT,[Au]:t.FUNC_REVERSE_SUBTRACT};Oe[Cu]=t.MIN,Oe[Ru]=t.MAX;let Ce={[Pu]:t.ZERO,[Iu]:t.ONE,[Lu]:t.SRC_COLOR,[Rh]:t.SRC_ALPHA,[Ou]:t.SRC_ALPHA_SATURATE,[Uu]:t.DST_COLOR,[Fu]:t.DST_ALPHA,[Du]:t.ONE_MINUS_SRC_COLOR,[Ph]:t.ONE_MINUS_SRC_ALPHA,[ku]:t.ONE_MINUS_DST_COLOR,[Nu]:t.ONE_MINUS_DST_ALPHA,[Bu]:t.CONSTANT_COLOR,[zu]:t.ONE_MINUS_CONSTANT_COLOR,[Hu]:t.CONSTANT_ALPHA,[Vu]:t.ONE_MINUS_CONSTANT_ALPHA};function Xe(k,fe,se,pe,_e,ae,Ne,Re,vt,lt){if(k===ti){p===!0&&(he(t.BLEND),p=!1);return}if(p===!1&&(K(t.BLEND),p=!0),k!==wu){if(k!==m||lt!==A){if((M!==Ji||T!==Ji)&&(t.blendEquation(t.FUNC_ADD),M=Ji,T=Ji),lt)switch(k){case Os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Eh:t.blendFunc(t.ONE,t.ONE);break;case Ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ch:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Be("WebGLState: Invalid blending: ",k);break}else switch(k){case Os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Eh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ah:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",k);break}R=null,v=null,w=null,C=null,x.set(0,0,0),E=0,m=k,A=lt}return}_e=_e||fe,ae=ae||se,Ne=Ne||pe,(fe!==M||_e!==T)&&(t.blendEquationSeparate(Oe[fe],Oe[_e]),M=fe,T=_e),(se!==R||pe!==v||ae!==w||Ne!==C)&&(t.blendFuncSeparate(Ce[se],Ce[pe],Ce[ae],Ce[Ne]),R=se,v=pe,w=ae,C=Ne),(Re.equals(x)===!1||vt!==E)&&(t.blendColor(Re.r,Re.g,Re.b,vt),x.copy(Re),E=vt),m=k,A=!1}function Qe(k,fe){k.side===En?he(t.CULL_FACE):K(t.CULL_FACE);let se=k.side===an;fe&&(se=!se),nt(se),k.blending===Os&&k.transparent===!1?Xe(ti):Xe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let pe=k.stencilWrite;h.setTest(pe),pe&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),on(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function nt(k){b!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),b=k)}function Tt(k){k!==Mu?(K(t.CULL_FACE),k!==I&&(k===wh?t.cullFace(t.BACK):k===Tu?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),I=k}function kt(k){k!==B&&(F&&t.lineWidth(k),B=k)}function on(k,fe,se){k?(K(t.POLYGON_OFFSET_FILL),(D!==fe||V!==se)&&(D=fe,V=se,a.getReversed()&&(fe=-fe),t.polygonOffset(fe,se))):he(t.POLYGON_OFFSET_FILL)}function Ct(k){k?K(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function Pt(k){k===void 0&&(k=t.TEXTURE0+Z-1),j!==k&&(t.activeTexture(k),j=k)}function O(k,fe,se){se===void 0&&(j===null?se=t.TEXTURE0+Z-1:se=j);let pe=U[se];pe===void 0&&(pe={type:void 0,texture:void 0},U[se]=pe),(pe.type!==k||pe.texture!==fe)&&(j!==se&&(t.activeTexture(se),j=se),t.bindTexture(k,fe||z[k]),pe.type=k,pe.texture=fe)}function $t(){let k=U[j];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ft(){try{t.compressedTexImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function y(){try{t.texSubImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function H(){try{t.texSubImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function le(){try{t.texStorage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function ce(){try{t.texStorage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function ne(){try{t.texImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function re(){try{t.texImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function ue(k){return c[k]!==void 0?c[k]:t.getParameter(k)}function De(k,fe){c[k]!==fe&&(t.pixelStorei(k,fe),c[k]=fe)}function me(k){Ve.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Ve.copy(k))}function de(k){Le.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Le.copy(k))}function Fe(k,fe){let se=o.get(fe);se===void 0&&(se=new WeakMap,o.set(fe,se));let pe=se.get(k);pe===void 0&&(pe=t.getUniformBlockIndex(fe,k.name),se.set(k,pe))}function Ue(k,fe){let pe=o.get(fe).get(k);l.get(fe)!==pe&&(t.uniformBlockBinding(fe,pe,k.__bindingPointIndex),l.set(fe,pe))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},c={},j=null,U={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,R=null,v=null,T=null,w=null,C=null,x=new qe(0,0,0),E=0,A=!1,b=null,I=null,B=null,D=null,V=null,Ve.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),h.reset()}return{buffers:{color:r,depth:a,stencil:h},enable:K,disable:he,bindFramebuffer:q,drawBuffers:ee,useProgram:we,setBlending:Xe,setMaterial:Qe,setFlipSided:nt,setCullFace:Tt,setLineWidth:kt,setPolygonOffset:on,setScissorTest:Ct,activeTexture:Pt,bindTexture:O,unbindTexture:$t,compressedTexImage2D:ft,compressedTexImage3D:P,texImage2D:ne,texImage3D:re,pixelStorei:De,getParameter:ue,updateUBOMapping:Fe,uniformBlockBinding:Ue,texStorage2D:le,texStorage3D:ce,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:me,viewport:de,reset:Ye}}function Qy(t,e,n,i,s,r,a){let h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new ze,d=new WeakMap,c=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return g?new OffscreenCanvas(P,y):xr("canvas")}function p(P,y,H){let $=1,Q=ft(P);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let le=Math.floor($*Q.width),ce=Math.floor($*Q.height);u===void 0&&(u=_(le,ce));let ne=y?_(le,ce):u;return ne.width=le,ne.height=ce,ne.getContext("2d").drawImage(P,0,0,le,ce),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+le+"x"+ce+")."),ne}else return"data"in P&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function M(P){t.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(P,y,H,$,Q,le=!1){if(P!==null){if(t[P]!==void 0)return t[P];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce;$&&(ce=e.get("EXT_texture_norm16"),ce||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=y;if(y===t.RED&&(H===t.FLOAT&&(ne=t.R32F),H===t.HALF_FLOAT&&(ne=t.R16F),H===t.UNSIGNED_BYTE&&(ne=t.R8),H===t.UNSIGNED_SHORT&&ce&&(ne=ce.R16_EXT),H===t.SHORT&&ce&&(ne=ce.R16_SNORM_EXT)),y===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.R8UI),H===t.UNSIGNED_SHORT&&(ne=t.R16UI),H===t.UNSIGNED_INT&&(ne=t.R32UI),H===t.BYTE&&(ne=t.R8I),H===t.SHORT&&(ne=t.R16I),H===t.INT&&(ne=t.R32I)),y===t.RG&&(H===t.FLOAT&&(ne=t.RG32F),H===t.HALF_FLOAT&&(ne=t.RG16F),H===t.UNSIGNED_BYTE&&(ne=t.RG8),H===t.UNSIGNED_SHORT&&ce&&(ne=ce.RG16_EXT),H===t.SHORT&&ce&&(ne=ce.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RG8UI),H===t.UNSIGNED_SHORT&&(ne=t.RG16UI),H===t.UNSIGNED_INT&&(ne=t.RG32UI),H===t.BYTE&&(ne=t.RG8I),H===t.SHORT&&(ne=t.RG16I),H===t.INT&&(ne=t.RG32I)),y===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),H===t.UNSIGNED_INT&&(ne=t.RGB32UI),H===t.BYTE&&(ne=t.RGB8I),H===t.SHORT&&(ne=t.RGB16I),H===t.INT&&(ne=t.RGB32I)),y===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),H===t.UNSIGNED_INT&&(ne=t.RGBA32UI),H===t.BYTE&&(ne=t.RGBA8I),H===t.SHORT&&(ne=t.RGBA16I),H===t.INT&&(ne=t.RGBA32I)),y===t.RGB&&(H===t.UNSIGNED_SHORT&&ce&&(ne=ce.RGB16_EXT),H===t.SHORT&&ce&&(ne=ce.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ne=t.R11F_G11F_B10F)),y===t.RGBA){let re=le?yr:it.getTransfer(Q);H===t.FLOAT&&(ne=t.RGBA32F),H===t.HALF_FLOAT&&(ne=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ne=re===ct?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&ce&&(ne=ce.RGBA16_EXT),H===t.SHORT&&ce&&(ne=ce.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(P,y){let H;return P?y===null||y===Hn||y===zs?H=t.DEPTH24_STENCIL8:y===An?H=t.DEPTH32F_STENCIL8:y===Bs&&(H=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hn||y===zs?H=t.DEPTH_COMPONENT24:y===An?H=t.DEPTH_COMPONENT32F:y===Bs&&(H=t.DEPTH_COMPONENT16),H}function w(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function C(P){let y=P.target;y.removeEventListener("dispose",C),E(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&c.delete(y)}function x(P){let y=P.target;y.removeEventListener("dispose",x),b(y)}function E(P){let y=i.get(P);if(y.__webglInit===void 0)return;let H=P.source,$=f.get(H);if($){let Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(P),Object.keys($).length===0&&f.delete(H)}i.remove(P)}function A(P){let y=i.get(P);t.deleteTexture(y.__webglTexture);let H=P.source,$=f.get(H);delete $[y.__cacheKey],a.memory.textures--}function b(P){let y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else t.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)t.deleteFramebuffer(y.__webglFramebuffer[$]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=P.textures;for(let $=0,Q=H.length;$<Q;$++){let le=i.get(H[$]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(H[$])}i.remove(P)}let I=0;function B(){I=0}function D(){return I}function V(P){I=P}function Z(){let P=I;return P>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function F(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function ie(P,y){let H=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let $=P.image;if($===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{he(H,P,y);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+y)}function X(P,y){let H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){he(H,P,y);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+y)}function j(P,y){let H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){he(H,P,y);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+y)}function U(P,y){let H=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){q(H,P,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+y)}let J={[Es]:t.REPEAT,[Jn]:t.CLAMP_TO_EDGE,[io]:t.MIRRORED_REPEAT},oe={[zt]:t.NEAREST,[Xu]:t.NEAREST_MIPMAP_NEAREST,[Hr]:t.NEAREST_MIPMAP_LINEAR,[Wt]:t.LINEAR,[Uo]:t.LINEAR_MIPMAP_NEAREST,[Di]:t.LINEAR_MIPMAP_LINEAR},Ve={[Zu]:t.NEVER,[ed]:t.ALWAYS,[Ju]:t.LESS,[bl]:t.LEQUAL,[Ku]:t.EQUAL,[Sl]:t.GEQUAL,[ju]:t.GREATER,[Qu]:t.NOTEQUAL};function Le(P,y){if(y.type===An&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===Uo||y.magFilter===Hr||y.magFilter===Di||y.minFilter===Wt||y.minFilter===Uo||y.minFilter===Hr||y.minFilter===Di)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,J[y.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,J[y.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,J[y.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,oe[y.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==Hr&&y.minFilter!==Di||y.type===An&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ge(P,y){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",C));let $=y.source,Q=f.get($);Q===void 0&&(Q={},f.set($,Q));let le=F(y);if(le!==P.__cacheKey){Q[le]===void 0&&(Q[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[le].usedTimes++;let ce=Q[P.__cacheKey];ce!==void 0&&(Q[P.__cacheKey].usedTimes--,ce.usedTimes===0&&A(y)),P.__cacheKey=le,P.__webglTexture=Q[le].texture}return H}function z(P,y,H){return Math.floor(Math.floor(P/H)/y)}function K(P,y,H,$){let le=P.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,H,$,y.data);else{le.sort((De,me)=>De.start-me.start);let ce=0;for(let De=1;De<le.length;De++){let me=le[ce],de=le[De],Fe=me.start+me.count,Ue=z(de.start,y.width,4),Ye=z(me.start,y.width,4);de.start<=Fe+1&&Ue===Ye&&z(de.start+de.count-1,y.width,4)===Ue?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,le[ce]=de)}le.length=ce+1;let ne=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let De=0,me=le.length;De<me;De++){let de=le[De],Fe=Math.floor(de.start/4),Ue=Math.ceil(de.count/4),Ye=Fe%y.width,k=Math.floor(Fe/y.width),fe=Ue,se=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Ye,k,fe,se,H,$,y.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ne),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function he(P,y,H){let $=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=t.TEXTURE_3D);let Q=Ge(P,y),le=y.source;n.bindTexture($,P.__webglTexture,t.TEXTURE0+H);let ce=i.get(le);if(le.version!==ce.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let se=it.getPrimaries(it.workingColorSpace),pe=y.colorSpace===fi?null:it.getPrimaries(y.colorSpace),_e=y.colorSpace===fi||se===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let re=p(y.image,!1,s.maxTextureSize);re=$t(y,re);let ue=r.convert(y.format,y.colorSpace),De=r.convert(y.type),me=v(y.internalFormat,ue,De,y.normalized,y.colorSpace,y.isVideoTexture);Le($,y);let de,Fe=y.mipmaps,Ue=y.isVideoTexture!==!0,Ye=ce.__version===void 0||Q===!0,k=le.dataReady,fe=w(y,re);if(y.isDepthTexture)me=T(y.format===Fi,y.type),Ye&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,me,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,me,re.width,re.height,0,ue,De,null));else if(y.isDataTexture)if(Fe.length>0){Ue&&Ye&&n.texStorage2D(t.TEXTURE_2D,fe,me,Fe[0].width,Fe[0].height);for(let se=0,pe=Fe.length;se<pe;se++)de=Fe[se],Ue?k&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,ue,De,de.data):n.texImage2D(t.TEXTURE_2D,se,me,de.width,de.height,0,ue,De,de.data);y.generateMipmaps=!1}else Ue?(Ye&&n.texStorage2D(t.TEXTURE_2D,fe,me,re.width,re.height),k&&K(y,re,ue,De)):n.texImage2D(t.TEXTURE_2D,0,me,re.width,re.height,0,ue,De,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,me,Fe[0].width,Fe[0].height,re.depth);for(let se=0,pe=Fe.length;se<pe;se++)if(de=Fe[se],y.format!==Cn)if(ue!==null)if(Ue){if(k)if(y.layerUpdates.size>0){let _e=Kh(de.width,de.height,y.format,y.type);for(let ae of y.layerUpdates){let Ne=de.data.subarray(ae*_e/de.data.BYTES_PER_ELEMENT,(ae+1)*_e/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,ae,de.width,de.height,1,ue,Ne)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,me,de.width,de.height,re.depth,0,de.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,ue,De,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,me,de.width,de.height,re.depth,0,ue,De,de.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ue&&Ye&&n.texStorage2D(t.TEXTURE_2D,fe,me,Fe[0].width,Fe[0].height);for(let se=0,pe=Fe.length;se<pe;se++)de=Fe[se],y.format!==Cn?ue!==null?Ue?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,se,me,de.width,de.height,0,de.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?k&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,ue,De,de.data):n.texImage2D(t.TEXTURE_2D,se,me,de.width,de.height,0,ue,De,de.data)}else if(y.isDataArrayTexture)if(Ue){if(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,me,re.width,re.height,re.depth),k)if(y.layerUpdates.size>0){let se=Kh(re.width,re.height,y.format,y.type);for(let pe of y.layerUpdates){let _e=re.data.subarray(pe*se/re.data.BYTES_PER_ELEMENT,(pe+1)*se/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,re.width,re.height,1,ue,De,_e)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,De,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,re.width,re.height,re.depth,0,ue,De,re.data);else if(y.isData3DTexture)Ue?(Ye&&n.texStorage3D(t.TEXTURE_3D,fe,me,re.width,re.height,re.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,De,re.data)):n.texImage3D(t.TEXTURE_3D,0,me,re.width,re.height,re.depth,0,ue,De,re.data);else if(y.isFramebufferTexture){if(Ye)if(Ue)n.texStorage2D(t.TEXTURE_2D,fe,me,re.width,re.height);else{let se=re.width,pe=re.height;for(let _e=0;_e<fe;_e++)n.texImage2D(t.TEXTURE_2D,_e,me,se,pe,0,ue,De,null),se>>=1,pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){let se=t.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),c.add(y),se.onpaint=pe=>{let _e=pe.changedElements;for(let ae of c)_e.includes(ae.image)&&(ae.needsUpdate=!0)},se.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{let _e=t.RGBA,ae=t.RGBA,Ne=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ae,Ne,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ue&&Ye){let se=ft(Fe[0]);n.texStorage2D(t.TEXTURE_2D,fe,me,se.width,se.height)}for(let se=0,pe=Fe.length;se<pe;se++)de=Fe[se],Ue?k&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,ue,De,de):n.texImage2D(t.TEXTURE_2D,se,me,ue,De,de);y.generateMipmaps=!1}else if(Ue){if(Ye){let se=ft(re);n.texStorage2D(t.TEXTURE_2D,fe,me,se.width,se.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,De,re)}else n.texImage2D(t.TEXTURE_2D,0,me,ue,De,re);m(y)&&M($),ce.__version=le.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function q(P,y,H){if(y.image.length!==6)return;let $=Ge(P,y),Q=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);let le=i.get(Q);if(Q.version!==le.__version||$===!0){n.activeTexture(t.TEXTURE0+H);let ce=it.getPrimaries(it.workingColorSpace),ne=y.colorSpace===fi?null:it.getPrimaries(y.colorSpace),re=y.colorSpace===fi||ce===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ue=y.isCompressedTexture||y.image[0].isCompressedTexture,De=y.image[0]&&y.image[0].isDataTexture,me=[];for(let ae=0;ae<6;ae++)!ue&&!De?me[ae]=p(y.image[ae],!0,s.maxCubemapSize):me[ae]=De?y.image[ae].image:y.image[ae],me[ae]=$t(y,me[ae]);let de=me[0],Fe=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type),Ye=v(y.internalFormat,Fe,Ue,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,fe=le.__version===void 0||$===!0,se=Q.dataReady,pe=w(y,de);Le(t.TEXTURE_CUBE_MAP,y);let _e;if(ue){k&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ye,de.width,de.height);for(let ae=0;ae<6;ae++){_e=me[ae].mipmaps;for(let Ne=0;Ne<_e.length;Ne++){let Re=_e[Ne];y.format!==Cn?Fe!==null?k?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Re.width,Re.height,Fe,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Ye,Re.width,Re.height,0,Re.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Re.width,Re.height,Fe,Ue,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Ye,Re.width,Re.height,0,Fe,Ue,Re.data)}}}else{if(_e=y.mipmaps,k&&fe){_e.length>0&&pe++;let ae=ft(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ye,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(De){k?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,me[ae].width,me[ae].height,Fe,Ue,me[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,me[ae].width,me[ae].height,0,Fe,Ue,me[ae].data);for(let Ne=0;Ne<_e.length;Ne++){let vt=_e[Ne].image[ae].image;k?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,vt.width,vt.height,Fe,Ue,vt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Ye,vt.width,vt.height,0,Fe,Ue,vt.data)}}else{k?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,Ue,me[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,Fe,Ue,me[ae]);for(let Ne=0;Ne<_e.length;Ne++){let Re=_e[Ne];k?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,Fe,Ue,Re.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Ye,Fe,Ue,Re.image[ae])}}}m(y)&&M(t.TEXTURE_CUBE_MAP),le.__version=Q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ee(P,y,H,$,Q,le){let ce=r.convert(H.format,H.colorSpace),ne=r.convert(H.type),re=v(H.internalFormat,ce,ne,H.normalized,H.colorSpace),ue=i.get(y),De=i.get(H);if(De.__renderTarget=y,!ue.__hasExternalTextures){let me=Math.max(1,y.width>>le),de=Math.max(1,y.height>>le);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,le,re,me,de,y.depth,0,ce,ne,null):n.texImage2D(Q,le,re,me,de,0,ce,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Pt(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Q,De.__webglTexture,0,Ct(y)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Q,De.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(P,y,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),y.depthBuffer){let $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,le=T(y.stencilBuffer,Q),ce=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Pt(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(y),le,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(y),le,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,le,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,P)}else{let $=y.textures;for(let Q=0;Q<$.length;Q++){let le=$[Q],ce=r.convert(le.format,le.colorSpace),ne=r.convert(le.type),re=v(le.internalFormat,ce,ne,le.normalized,le.colorSpace);Pt(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(y),re,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(y),re,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,re,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(P,y,H){let $=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(t.TEXTURE_CUBE_MAP,y.depthTexture);let ue=r.convert(y.depthTexture.format),De=r.convert(y.depthTexture.type),me;y.depthTexture.format===Kn?me=t.DEPTH_COMPONENT24:y.depthTexture.format===Fi&&(me=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,y.width,y.height,0,ue,De,null)}}else ie(y.depthTexture,0);let le=Q.__webglTexture,ce=Ct(y),ne=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,re=y.depthTexture.format===Fi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Kn)Pt(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,le,0);else if(y.depthTexture.format===Fi)Pt(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ce(P){let y=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Oe(y.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?Oe(y.__webglFramebuffer[0],P,0):Oe(y.__webglFramebuffer,P,0)}else if(H){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=t.createRenderbuffer(),we(y.__webglDepthbuffer[$],P,!1);else{let Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}else{let $=P.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),we(y.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(P,y,H){let $=i.get(P);y!==void 0&&ee($.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ce(P)}function Qe(P){let y=P.texture,H=i.get(P),$=i.get(y);P.addEventListener("dispose",x);let Q=P.textures,le=P.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=y.version,a.memory.textures++),le){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let re=0;re<y.mipmaps.length;re++)H.__webglFramebuffer[ne][re]=t.createFramebuffer()}else H.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)H.__webglFramebuffer[ne]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ce)for(let ne=0,re=Q.length;ne<re;ne++){let ue=i.get(Q[ne]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Pt(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ne=0;ne<Q.length;ne++){let re=Q[ne];H.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ne]);let ue=r.convert(re.format,re.colorSpace),De=r.convert(re.type),me=v(re.internalFormat,ue,De,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),de=Ct(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,H.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),we(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Le(t.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)ee(H.__webglFramebuffer[ne][re],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else ee(H.__webglFramebuffer[ne],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(y)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let ne=0,re=Q.length;ne<re;ne++){let ue=Q[ne],De=i.get(ue),me=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,De.__webglTexture),Le(me,ue),ee(H.__webglFramebuffer,P,ue,t.COLOR_ATTACHMENT0+ne,me,0),m(ue)&&M(me)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,$.__webglTexture),Le(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)ee(H.__webglFramebuffer[re],P,y,t.COLOR_ATTACHMENT0,ne,re);else ee(H.__webglFramebuffer,P,y,t.COLOR_ATTACHMENT0,ne,0);m(y)&&M(ne),n.unbindTexture()}P.depthBuffer&&Ce(P)}function nt(P){let y=P.textures;for(let H=0,$=y.length;H<$;H++){let Q=y[H];if(m(Q)){let le=R(P),ce=i.get(Q).__webglTexture;n.bindTexture(le,ce),M(le),n.unbindTexture()}}}let Tt=[],kt=[];function on(P){if(P.samples>0){if(Pt(P)===!1){let y=P.textures,H=P.width,$=P.height,Q=t.COLOR_BUFFER_BIT,le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(P),ne=y.length>1;if(ne)for(let ue=0;ue<y.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let re=P.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let De=i.get(y[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,H,$,0,0,H,$,Q,t.NEAREST),l===!0&&(Tt.length=0,kt.length=0,Tt.push(t.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Tt.push(le),kt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let ue=0;ue<y.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let De=i.get(y[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Ct(P){return Math.min(s.maxSamples,P.samples)}function Pt(P){let y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(P){let y=a.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function $t(P,y){let H=P.colorSpace,$=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==gr&&H!==fi&&(it.getTransfer(H)===ct?($!==Cn||Q!==cn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",H)),y}function ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(o.width=P.naturalWidth||P.width,o.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(o.width=P.displayWidth,o.height=P.displayHeight):(o.width=P.width,o.height=P.height),o}this.allocateTextureUnit=Z,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=Xe,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ex(t,e){function n(i,s=fi){let r,a=it.getTransfer(s);if(i===cn)return t.UNSIGNED_BYTE;if(i===Oo)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bo)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zh)return t.BYTE;if(i===Hh)return t.SHORT;if(i===Bs)return t.UNSIGNED_SHORT;if(i===ko)return t.INT;if(i===Hn)return t.UNSIGNED_INT;if(i===An)return t.FLOAT;if(i===Vn)return t.HALF_FLOAT;if(i===Wh)return t.ALPHA;if(i===Xh)return t.RGB;if(i===Cn)return t.RGBA;if(i===Kn)return t.DEPTH_COMPONENT;if(i===Fi)return t.DEPTH_STENCIL;if(i===zo)return t.RED;if(i===Ho)return t.RED_INTEGER;if(i===Ni)return t.RG;if(i===Vo)return t.RG_INTEGER;if(i===Go)return t.RGBA_INTEGER;if(i===Vr||i===Gr||i===Wr||i===Xr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wo||i===Xo||i===qo||i===$o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yo||i===Zo||i===Jo||i===Ko||i===jo||i===qr||i===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yo||i===Zo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ko)return r.COMPRESSED_R11_EAC;if(i===jo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qr)return r.COMPRESSED_RG11_EAC;if(i===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===hl||i===cl||i===ul||i===dl||i===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===el)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ol)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===ml||i===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pl)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yl||i===xl||i===$r||i===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
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

}`,uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Pr(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new gn({vertexShader:tx,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new He(new Xt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dc=class extends jn{constructor(e,n){super();let i=this,s=null,r=1,a=null,h="local-floor",l=1,o=null,d=null,c=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new uc,m={},M=n.getContextAttributes(),R=null,v=null,T=[],w=[],C=new ze,x=null,E=null,A=new Kt;A.viewport=new wt;let b=new Kt;b.viewport=new wt;let I=[A,b],B=new Io,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=T[z];return K===void 0&&(K=new Is,T[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=T[z];return K===void 0&&(K=new Is,T[z]=K),K.getGripSpace()},this.getHand=function(z){let K=T[z];return K===void 0&&(K=new Is,T[z]=K),K.getHandSpace()};function Z(z){let K=w.indexOf(z.inputSource);if(K===-1)return;let he=T[K];he!==void 0&&(he.update(z.inputSource,z.frame,o||a),he.dispatchEvent({type:z.type,data:z.inputSource}))}function F(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",ie);for(let z=0;z<T.length;z++){let K=w[z];K!==null&&(w[z]=null,T[z].disconnect(K))}D=null,V=null,p.reset();for(let z in m)delete m[z];if(e.setRenderTarget(R),f=null,u=null,c=null,s=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),E!==null){let z=E.camera;z.fov=E.fov,z.zoom=E.zoom,z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){h=z,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(z){o=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(s,n)),c},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,q=null,ee=null;M.depth&&(ee=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=M.stencil?Fi:Kn,q=M.stencil?zs:Hn);let we={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:r};c=this.getBinding(),u=c.createProjectionLayer(we),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new hn(u.textureWidth,u.textureHeight,{format:Cn,type:cn,depthTexture:new Ei(u.textureWidth,u.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let he={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new hn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),o=null,a=await s.requestReferenceSpace(h),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(z){for(let K=0;K<z.removed.length;K++){let he=z.removed[K],q=w.indexOf(he);q>=0&&(w[q]=null,T[q].disconnect(he))}for(let K=0;K<z.added.length;K++){let he=z.added[K],q=w.indexOf(he);if(q===-1){for(let we=0;we<T.length;we++)if(we>=w.length){w.push(he),q=we;break}else if(w[we]===null){w[we]=he,q=we;break}if(q===-1)break}let ee=T[q];ee&&ee.connect(he)}}let X=new L,j=new L;function U(z,K,he){X.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(he.matrixWorld);let q=X.distanceTo(j),ee=K.projectionMatrix.elements,we=he.projectionMatrix.elements,Oe=ee[14]/(ee[10]-1),Ce=ee[14]/(ee[10]+1),Xe=(ee[9]+1)/ee[5],Qe=(ee[9]-1)/ee[5],nt=(ee[8]-1)/ee[0],Tt=(we[8]+1)/we[0],kt=Oe*nt,on=Oe*Tt,Ct=q/(-nt+Tt),Pt=Ct*-nt;if(K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Pt),z.translateZ(Ct),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ee[10]===-1)z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let O=Oe+Ct,$t=Ce+Ct,ft=kt-Pt,P=on+(q-Pt),y=Xe*Ce/$t*O,H=Qe*Ce/$t*O;z.projectionMatrix.makePerspective(ft,P,y,H,O,$t),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function J(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let K=z.near,he=z.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(he=p.depthFar)),B.near=b.near=A.near=K,B.far=b.far=A.far=he,(D!==B.near||V!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,V=B.far),B.layers.mask=z.layers.mask|6,A.layers.mask=B.layers.mask&-5,b.layers.mask=B.layers.mask&-3;let q=z.parent,ee=B.cameras;J(B,q);for(let we=0;we<ee.length;we++)J(ee[we],q);ee.length===2?U(B,A,b):B.projectionMatrix.copy(A.projectionMatrix),E===null&&z.isPerspectiveCamera&&(E={camera:z,fov:z.fov,zoom:z.zoom}),oe(z,B,q)};function oe(z,K,he){he===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ro*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(z){return m[z]};let Ve=null;function Le(z,K){if(d=K.getViewerPose(o||a),g=K,d!==null){let he=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let q=!1;he.length!==B.cameras.length&&(B.cameras.length=0,q=!0);for(let Ce=0;Ce<he.length;Ce++){let Xe=he[Ce],Qe=null;if(f!==null)Qe=f.getViewport(Xe);else{let Tt=c.getViewSubImage(u,Xe);Qe=Tt.viewport,Ce===0&&(e.setRenderTargetTextures(v,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(v))}let nt=I[Ce];nt===void 0&&(nt=new Kt,nt.layers.enable(Ce),nt.viewport=new wt,I[Ce]=nt),nt.matrix.fromArray(Xe.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Xe.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ce===0&&(B.matrix.copy(nt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),q===!0&&B.cameras.push(nt)}let ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){c=i.getBinding();let Ce=c.getDepthInformation(he[0]);Ce&&Ce.isValid&&Ce.texture&&p.init(Ce,s.renderState)}if(ee&&ee.includes("camera-access")&&_){e.state.unbindTexture(),c=i.getBinding();for(let Ce=0;Ce<he.length;Ce++){let Xe=he[Ce].camera;if(Xe){let Qe=m[Xe];Qe||(Qe=new Pr,m[Xe]=Qe);let nt=c.getCameraImage(Xe);Qe.sourceTexture=nt}}}}for(let he=0;he<T.length;he++){let q=w[he],ee=T[he];q!==null&&ee!==void 0&&ee.update(q,K,o||a)}Ve&&Ve(z,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let Ge=new Id;Ge.setAnimationLoop(Le),this.setAnimationLoop=function(z){Ve=z},this.dispose=function(){}}},ix=new ot,kd=new We;kd.set(-1,0,0,0,1,0,0,0,1);function sx(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Yh(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,R,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),c(p,m)):m.isMeshPhongMaterial?(r(p,m),d(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&h(p,m)):m.isPointsMaterial?l(p,m,M,R):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===an&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===an&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),R=M.envMap,v=M.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(kd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function h(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=R*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function c(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rx(t,e,n,i){let s={},r={},a=[],h=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let w=T.program;i.uniformBlockBinding(v,w)}function o(v,T){let w=s[v.id];w===void 0&&(p(v),w=d(v),s[v.id]=w,v.addEventListener("dispose",M));let C=T.program;i.updateUBOMapping(v,C);let x=e.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function d(v){let T=c();v.__bindingPointIndex=T;let w=t.createBuffer(),C=v.__size,x=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function c(){for(let v=0;v<h;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],w=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let x=0,E=w.length;x<E;x++){let A=w[x];if(Array.isArray(A))for(let b=0,I=A.length;b<I;b++)f(A[b],x,b,C);else f(A,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(v,T,w,C){if(_(v,T,w,C)===!0){let x=v.__offset,E=v.value;if(Array.isArray(E)){let A=0;for(let b=0;b<E.length;b++){let I=E[b],B=m(I);g(I,v.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,v.__data)}}function g(v,T,w){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,w)}function _(v,T,w,C){let x=v.value,E=T+"_"+w;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let A=C[E];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function p(v){let T=v.uniforms,w=0,C=16;for(let E=0,A=T.length;E<A;E++){let b=Array.isArray(T[E])?T[E]:[T[E]];for(let I=0,B=b.length;I<B;I++){let D=b[I],V=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,F=V.length;Z<F;Z++){let ie=V[Z],X=m(ie),j=w%C,U=j%X.boundary,J=j+U;w+=U,J!==0&&C-J<X.storage&&(w+=C-J),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=X.storage}}}let x=w%C;return x>0&&(w+=C-x),v.__size=w,v.__cache={},this}function m(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),T}function M(v){let T=v.target;T.removeEventListener("dispose",M);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function R(){for(let v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:o,dispose:R}}var ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function ox(){return ni===null&&(ni=new Ar(ax,16,16,Ni,Vn),ni.name="DFG_LUT",ni.minFilter=Wt,ni.magFilter=Wt,ni.wrapS=Jn,ni.wrapT=Jn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Al=class{constructor(e={}){let{canvas:n=td(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:h=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:o=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:u=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=f,p=new Set([Go,Vo,Ho]),m=new Set([cn,Hn,Bs,zs,Oo,Bo]),M=new Uint32Array(4),R=new Int32Array(4),v=new L,T=null,w=null,C=[],x=[],E=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,b=!1,I=null,B=null,D=null,V=null;this._outputColorSpace=Bt;let Z=0,F=0,ie=null,X=-1,j=null,U=new wt,J=new wt,oe=null,Ve=new qe(0),Le=0,Ge=n.width,z=n.height,K=1,he=null,q=null,ee=new wt(0,0,Ge,z),we=new wt(0,0,Ge,z),Oe=!1,Ce=new Fs,Xe=!1,Qe=!1,nt=new ot,Tt=new L,kt=new wt,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Pt(){return ie===null?K:1}let O=i;function $t(S,N){return n.getContext(S,N)}let ft,P,y,H,$,Q,le,ce,ne,re,ue,De,me,de,Fe,Ue,Ye,k,fe,se,pe,_e,ae;try{let S={alpha:!0,depth:s,stencil:r,antialias:h,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:d,failIfMajorPerformanceCaveat:c};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lo}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",Fn,!1),O===null){let N="webgl2";if(O=$t(N,S),O===null)throw $t(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(S){throw n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",Fn,!1),Be("WebGLRenderer: "+S.message),S}function Ne(){ft=new p0(O),ft.init(),pe=new ex(O,ft),P=new s0(O,ft,e,pe),y=new jy(O,ft),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=O.createFramebuffer(),D=O.createFramebuffer(),V=O.createFramebuffer(),H=new y0(O),$=new Oy,Q=new Qy(O,ft,y,$,P,pe,H),le=new f0(A),ce=new vp(O),_e=new n0(O,ce),ne=new m0(O,ce,H,_e),re=new v0(O,ne,ce,_e,H),k=new x0(O,P,Q),Fe=new r0($),ue=new ky(A,le,ft,P,_e,Fe),De=new sx(A,$),me=new zy,de=new qy(ft),Ye=new t0(A,le,y,re,g,l),Ue=new Ky(A,re,P),ae=new rx(O,H,P,y),fe=new i0(O,ft,H),se=new g0(O,ft,H),H.programs=ue.programs,A.capabilities=P,A.extensions=ft,A.properties=$,A.renderLists=me,A.shadowMap=Ue,A.state=y,A.info=H}_!==cn&&(E=new b0(_,n.width,n.height,h,s,r));let Re=new dc(A,O);this.xr=Re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=ft.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ft.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(Ge,z,!1))},this.getSize=function(S){return S.set(Ge,z)},this.setSize=function(S,N,Y=!0){if(Re.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=S,z=N,n.width=Math.floor(S*K),n.height=Math.floor(N*K),Y===!0&&(n.style.width=S+"px",n.style.height=N+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Ge*K,z*K).floor()},this.setDrawingBufferSize=function(S,N,Y){Ge=S,z=N,K=Y,n.width=Math.floor(S*Y),n.height=Math.floor(N*Y),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===cn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(U)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,N,Y,G){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,N,Y,G),y.viewport(U.copy(ee).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(we)},this.setScissor=function(S,N,Y,G){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,N,Y,G),y.scissor(J.copy(we).multiplyScalar(K).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(S){y.setScissorTest(Oe=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){q=S},this.getClearColor=function(S){return S.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,Y=!0){let G=0;if(S){let W=!1;if(ie!==null){let ve=ie.texture.format;W=p.has(ve)}if(W){let ve=ie.texture.type,Se=m.has(ve),xe=Ye.getClearColor(),Ee=Ye.getClearAlpha(),Ie=xe.r,Ze=xe.g,tt=xe.b;Se?(M[0]=Ie,M[1]=Ze,M[2]=tt,M[3]=Ee,O.clearBufferuiv(O.COLOR,0,M)):(R[0]=Ie,R[1]=Ze,R[2]=tt,R[3]=Ee,O.clearBufferiv(O.COLOR,0,R))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",Fn,!1),Ye.dispose(),me.dispose(),de.dispose(),$.dispose(),le.dispose(),re.dispose(),_e.dispose(),ae.dispose(),ue.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",kc),Re.removeEventListener("sessionend",Oc),Hi.stop()};function vt(S){S.preventDefault(),vr("WebGLRenderer: Context Lost."),b=!0}function lt(){vr("WebGLRenderer: Context Restored."),b=!1;let S=H.autoReset,N=Ue.enabled,Y=Ue.autoUpdate,G=Ue.needsUpdate,W=Ue.type;Ne(),H.autoReset=S,Ue.enabled=N,Ue.autoUpdate=Y,Ue.needsUpdate=G,Ue.type=W}function Fn(S){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xn(S){let N=S.target;N.removeEventListener("dispose",Xn),Pf(N)}function Pf(S){If(S),$.remove(S)}function If(S){let N=$.get(S).programs;N!==void 0&&(N.forEach(function(Y){ue.releaseProgram(Y)}),S.isShaderMaterial&&ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,Y,G,W,ve){N===null&&(N=on);let Se=W.isMesh&&W.matrixWorld.determinantAffine()<0,xe=Ff(S,N,Y,G,W);y.setMaterial(G,Se);let Ee=Y.index,Ie=1;if(G.wireframe===!0){if(Ee=ne.getWireframeAttribute(Y),Ee===void 0)return;Ie=2}let Ze=Y.drawRange,tt=Y.attributes.position,Ae=Ze.start*Ie,ht=(Ze.start+Ze.count)*Ie;ve!==null&&(Ae=Math.max(Ae,ve.start*Ie),ht=Math.min(ht,(ve.start+ve.count)*Ie)),Ee!==null?(Ae=Math.max(Ae,0),ht=Math.min(ht,Ee.count)):tt!=null&&(Ae=Math.max(Ae,0),ht=Math.min(ht,tt.count));let It=ht-Ae;if(It<0||It===1/0)return;_e.setup(W,G,xe,Y,Ee);let St,xt=fe;if(Ee!==null&&(St=ce.get(Ee),xt=se,xt.setIndex(St)),W.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*Pt()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(W.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),y.setLineWidth(Yt*Pt()),W.isLineSegments?xt.setMode(O.LINES):W.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else W.isPoints?xt.setMode(O.POINTS):W.isSprite&&xt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Yt=W._multiDrawStarts,be=W._multiDrawCounts,nn=W._multiDrawCount,rt=Ee?ce.get(Ee).bytesPerElement:1,Mn=$.get(G).currentProgram.getUniforms();for(let qn=0;qn<nn;qn++)Mn.setValue(O,"_gl_DrawID",qn),xt.render(Yt[qn]/rt,be[qn])}else if(W.isInstancedMesh)xt.renderInstances(Ae,It,W.count);else if(Y.isInstancedBufferGeometry){let Yt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,be=Math.min(Y.instanceCount,Yt);xt.renderInstances(Ae,It,be)}else xt.render(Ae,It)};function Uc(S,N,Y,G){I!==null&&S.isNodeMaterial&&I.setObject(G,S),Xe===!0&&Fe.setState(S,Y,!1),S.transparent===!0&&S.side===En&&S.forceSinglePass===!1?(S.side=an,S.needsUpdate=!0,xa(S,N,G),S.side=Ii,S.needsUpdate=!0,xa(S,N,G),S.side=En):xa(S,N,G)}this.compile=function(S,N,Y=null){Y===null&&(Y=S),I!==null&&I.renderStart(S,N,Y),w=de.get(Y),w.init(N),x.push(w),Y.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),S!==Y&&S.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),Qe=this.localClippingEnabled,Xe=Fe.init(this.clippingPlanes,Qe),Xe===!0&&Fe.setGlobalState(this.clippingPlanes,N),I!==null&&Ue.render(w.state.shadowsArray,Y,N);let G=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ve=W.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){let xe=ve[Se];Uc(xe,Y,N,W),G.add(xe)}else Uc(ve,Y,N,W),G.add(ve)}),w=x.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(S,N,Y=null){let G=this.compile(S,N,Y);return new Promise(W=>{function ve(){if(G.forEach(function(Se){let Ee=$.get(Se).currentProgram;(Ee===void 0||Ee.isReady())&&G.delete(Se)}),G.size===0){W(S);return}setTimeout(ve,10)}ft.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Wl=null;function Lf(S){Wl&&Wl(S)}function kc(){Hi.stop()}function Oc(){Hi.start()}let Hi=new Id;Hi.setAnimationLoop(Lf),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(S){Wl=S,Re.setAnimationLoop(S),S===null?Hi.stop():Hi.start()},Re.addEventListener("sessionstart",kc),Re.addEventListener("sessionend",Oc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;I!==null&&I.renderStart(S,N);let Y=Re.enabled===!0&&Re.isPresenting===!0,G=E!==null&&(ie===null||Y)&&E.begin(A,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(N),N=Re.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,N,ie),w=de.get(S,x.length),w.init(N),w.state.textureUnits=Q.getTextureUnits(),x.push(w),nt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ce.setFromProjectionMatrix(nt,On,N.reversedDepth),Qe=this.localClippingEnabled,Xe=Fe.init(this.clippingPlanes,Qe),T=me.get(S,C.length),T.init(),C.push(T),Re.enabled===!0&&Re.isPresenting===!0){let Se=A.xr.getDepthSensingMesh();Se!==null&&Xl(Se,N,-1/0,A.sortObjects)}Xl(S,N,0,A.sortObjects),T.finish(),I!==null&&I.updateLights(w.state.lightsArray),A.sortObjects===!0&&T.sort(he,q),Ct=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ct&&Ye.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Fe.beginShadows();let W=w.state.shadowsArray;if(Ue.render(W,S,N),Xe===!0&&Fe.endShadows(),(G&&E.hasRenderPass())===!1){let Se=T.opaque,xe=T.transmissive;if(w.setupLights(),N.isArrayCamera){let Ee=N.cameras;if(xe.length>0)for(let Ie=0,Ze=Ee.length;Ie<Ze;Ie++){let tt=Ee[Ie];zc(Se,xe,S,tt)}Ct&&Ye.render(S);for(let Ie=0,Ze=Ee.length;Ie<Ze;Ie++){let tt=Ee[Ie];Bc(T,S,tt,tt.viewport)}}else xe.length>0&&zc(Se,xe,S,N),Ct&&Ye.render(S),Bc(T,S,N)}ie!==null&&F===0&&(Q.updateMultisampleRenderTarget(ie),Q.updateRenderTargetMipmap(ie)),G&&E.end(A),S.isScene===!0&&S.onAfterRender(A,S,N),_e.resetDefaultState(),X=-1,j=null,x.pop(),x.length>0?(w=x[x.length-1],Q.setTextureUnits(w.state.textureUnits),Xe===!0&&Fe.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,I!==null&&I.renderEnd()};function Xl(S,N,Y,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ce)){G&&kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(nt);let Se=re.update(S),xe=S.material;xe.visible&&T.push(S,Se,xe,Y,kt.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ce))){let Se=re.update(S),xe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),kt.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),kt.copy(Se.boundingSphere.center)),kt.applyMatrix4(S.matrixWorld).applyMatrix4(nt)),Array.isArray(xe)){let Ee=Se.groups;for(let Ie=0,Ze=Ee.length;Ie<Ze;Ie++){let tt=Ee[Ie],Ae=xe[tt.materialIndex];Ae&&Ae.visible&&T.push(S,Se,Ae,Y,kt.z,tt,N)}}else xe.visible&&T.push(S,Se,xe,Y,kt.z,null,N)}}let ve=S.children;for(let Se=0,xe=ve.length;Se<xe;Se++)Xl(ve[Se],N,Y,G)}function Bc(S,N,Y,G){let{opaque:W,transmissive:ve,transparent:Se}=S;w.setupLightsView(Y),Xe===!0&&Fe.setGlobalState(A.clippingPlanes,Y),G&&y.viewport(U.copy(G)),W.length>0&&ya(W,N,Y),ve.length>0&&ya(ve,N,Y),Se.length>0&&ya(Se,N,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function zc(S,N,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Ae=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new hn(1,1,{generateMipmaps:!0,type:Ae?Vn:cn,minFilter:Di,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let ve=w.state.transmissionRenderTarget[G.id],Se=G.viewport||U;ve.setSize(Se.z*A.transmissionResolutionScale,Se.w*A.transmissionResolutionScale);let xe=A.getRenderTarget(),Ee=A.getActiveCubeFace(),Ie=A.getActiveMipmapLevel();A.setRenderTarget(ve),A.getClearColor(Ve),Le=A.getClearAlpha(),Le<1&&A.setClearColor(16777215,.5),A.clear(),Ct&&Ye.render(Y);let Ze=A.toneMapping;A.toneMapping=zn;let tt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Xe===!0&&Fe.setGlobalState(A.clippingPlanes,G),ya(S,Y,G),Q.updateMultisampleRenderTarget(ve),Q.updateRenderTargetMipmap(ve),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ht=0,It=N.length;ht<It;ht++){let St=N[ht],{object:xt,geometry:Yt,material:be,group:nn}=St;if(be.side===En&&xt.layers.test(G.layers)){let rt=be.side;be.side=an,be.needsUpdate=!0,Hc(xt,Y,G,Yt,be,nn),be.side=rt,be.needsUpdate=!0,Ae=!0}}Ae===!0&&(Q.updateMultisampleRenderTarget(ve),Q.updateRenderTargetMipmap(ve))}A.setRenderTarget(xe,Ee,Ie),A.setClearColor(Ve,Le),tt!==void 0&&(G.viewport=tt),A.toneMapping=Ze}function ya(S,N,Y){let G=N.isScene===!0?N.overrideMaterial:null;for(let W=0,ve=S.length;W<ve;W++){let Se=S[W],{object:xe,geometry:Ee,group:Ie}=Se,Ze=Se.material;Ze.allowOverride===!0&&G!==null&&(Ze=G),xe.layers.test(Y.layers)&&Hc(xe,N,Y,Ee,Ze,Ie)}}function Hc(S,N,Y,G,W,ve){I!==null&&W.isNodeMaterial&&I.setObject(S,W),S.onBeforeRender(A,N,Y,G,W,ve),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(A,N,Y,G,S,ve),W.transparent===!0&&W.side===En&&W.forceSinglePass===!1?(W.side=an,W.needsUpdate=!0,A.renderBufferDirect(Y,N,G,W,S,ve),W.side=Ii,W.needsUpdate=!0,A.renderBufferDirect(Y,N,G,W,S,ve),W.side=En):A.renderBufferDirect(Y,N,G,W,S,ve),S.onAfterRender(A,N,Y,G,W,ve)}function xa(S,N,Y){N.isScene!==!0&&(N=on);let G=$.get(S),W=w.state.lights,ve=w.state.shadowsArray,Se=W.state.version,xe=ue.getParameters(S,W.state,ve,N,Y,w.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(xe),Ie=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;let Ze=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=le.get(S.envMap||G.environment,Ze),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",Xn),Ie=new Map,G.programs=Ie);let tt=Ie.get(Ee);if(tt!==void 0){if(G.currentProgram===tt&&G.lightsStateVersion===Se)return Gc(S,xe),tt}else xe.uniforms=ue.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,Y,xe),S.onBeforeCompile(xe,A),tt=ue.acquireProgram(xe,Ee),Ie.set(Ee,tt),G.uniforms=xe.uniforms;let Ae=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=Fe.uniform),Gc(S,xe),G.needsLights=Uf(S),G.lightsStateVersion=Se,G.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=tt,G.uniformsList=null,tt}function Vc(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Gs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Gc(S,N){let Y=$.get(S);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function Df(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let Y=0,G=S.length;Y<G;Y++){let W=S[Y];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Ff(S,N,Y,G,W){N.isScene!==!0&&(N=on),Q.resetTextureUnits();let ve=N.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,xe=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:it.workingColorSpace,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=le.get(G.envMap||Se,Ee),Ze=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,tt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!Y.morphAttributes.position,ht=!!Y.morphAttributes.normal,It=!!Y.morphAttributes.color,St=zn;G.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(St=A.toneMapping);let xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Yt=xt!==void 0?xt.length:0,be=$.get(G),nn=w.state.lights;if(Xe===!0&&(Qe===!0||S!==j)){let _t=S===j&&G.id===X;Fe.setState(G,S,_t)}let rt=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==nn.state.version||be.outputColorSpace!==xe||W.isBatchedMesh&&be.batching===!1||!W.isBatchedMesh&&be.batching===!0||W.isBatchedMesh&&be.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&be.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&be.instancing===!1||!W.isInstancedMesh&&be.instancing===!0||W.isSkinnedMesh&&be.skinning===!1||!W.isSkinnedMesh&&be.skinning===!0||W.isInstancedMesh&&be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&be.instancingMorph===!1&&W.morphTexture!==null||be.envMap!==Ie||G.fog===!0&&be.fog!==ve||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Fe.numPlanes||be.numIntersection!==Fe.numIntersection)||be.vertexAlphas!==Ze||be.vertexTangents!==tt||be.morphTargets!==Ae||be.morphNormals!==ht||be.morphColors!==It||be.toneMapping!==St||be.morphTargetsCount!==Yt||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,be.__version=G.version);let Mn=be.currentProgram;rt===!0&&(Mn=xa(G,N,W),I&&G.isNodeMaterial&&I.onUpdateProgram(G,Mn,be));let qn=!1,mi=!1,ss=!1,pt=Mn.getUniforms(),Rt=be.uniforms;if(y.useProgram(Mn.program)&&(qn=!0,mi=!0,ss=!0),G.id!==X&&(X=G.id,mi=!0),be.needsLights){let _t=Df(w.state.lightProbeGridArray,W);be.lightProbeGrid!==_t&&(be.lightProbeGrid=_t,mi=!0)}if(qn||j!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(O,"projectionMatrix",S.projectionMatrix),pt.setValue(O,"viewMatrix",S.matrixWorldInverse);let yi=pt.map.cameraPosition;yi!==void 0&&yi.setValue(O,Tt.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&pt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,mi=!0,ss=!0)}if(be.needsLights&&(nn.state.sunShadowMap.length>0&&pt.setValue(O,"sunShadowMap",nn.state.sunShadowMap,Q),nn.state.directionalShadowMap.length>0&&pt.setValue(O,"directionalShadowMap",nn.state.directionalShadowMap,Q),nn.state.spotShadowMap.length>0&&pt.setValue(O,"spotShadowMap",nn.state.spotShadowMap,Q),nn.state.pointShadowMap.length>0&&pt.setValue(O,"pointShadowMap",nn.state.pointShadowMap,Q)),W.isSkinnedMesh){pt.setOptional(O,W,"bindMatrix"),pt.setOptional(O,W,"bindMatrixInverse");let _t=W.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(O,"boneTexture",_t.boneTexture,Q))}W.isBatchedMesh&&(pt.setOptional(O,W,"batchingTexture"),pt.setValue(O,"batchingTexture",W._matricesTexture,Q),pt.setOptional(O,W,"batchingIdTexture"),pt.setValue(O,"batchingIdTexture",W._indirectTexture,Q),pt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&pt.setValue(O,"batchingColorTexture",W._colorsTexture,Q));let gi=Y.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&k.update(W,Y,Mn),(mi||be.receiveShadow!==W.receiveShadow)&&(be.receiveShadow=W.receiveShadow,pt.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Rt.envMapIntensity.value=N.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=ox()),mi){if(pt.setValue(O,"toneMappingExposure",A.toneMappingExposure),be.needsLights&&Nf(Rt,ss),ve&&G.fog===!0&&De.refreshFogUniforms(Rt,ve),De.refreshMaterialUniforms(Rt,G,K,z,w.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){let _t=be.lightProbeGrid;Rt.probesSH.value=_t.texture,Rt.probesMin.value.copy(_t.boundingBox.min),Rt.probesMax.value.copy(_t.boundingBox.max),Rt.probesResolution.value.copy(_t.resolution)}Gs.upload(O,Vc(be),Rt,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Gs.upload(O,Vc(be),Rt,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(O,"center",W.center),pt.setValue(O,"modelViewMatrix",W.modelViewMatrix),pt.setValue(O,"normalMatrix",W.normalMatrix),pt.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let _t=G.uniformsGroups;for(let yi=0,rs=_t.length;yi<rs;yi++){let Xc=_t[yi];ae.update(Xc,Mn),ae.bind(Xc,Mn)}}return Mn}function Nf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Uf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,N,Y){let G=$.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),$.get(S.texture).__webglTexture=N,$.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let Y=$.get(S);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,Y=0){ie=S,Z=N,F=Y;let G=null,W=!1,ve=!1;if(S){let xe=$.get(S);if(xe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,xe.__webglFramebuffer),U.copy(S.viewport),J.copy(S.scissor),oe=S.scissorTest,y.viewport(U),y.scissor(J),y.setScissorTest(oe),X=-1;return}else if(xe.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(xe.__hasExternalTextures)Q.rebindTextures(S,$.get(S.texture).__webglTexture,$.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ze=S.depthTexture;if(xe.__boundDepthTexture!==Ze){if(Ze!==null&&$.has(Ze)&&(S.width!==Ze.image.width||S.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}let Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);let Ie=$.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?G=Ie[N][Y]:G=Ie[N],W=!0):S.samples>0&&Q.useMultisampledRTT(S)===!1?G=$.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[Y]:G=Ie,U.copy(S.viewport),J.copy(S.scissor),oe=S.scissorTest}else U.copy(ee).multiplyScalar(K).floor(),J.copy(we).multiplyScalar(K).floor(),oe=Oe;if(Y!==0&&(G=B),y.bindFramebuffer(O.FRAMEBUFFER,G)&&y.drawBuffers(S,G),y.viewport(U),y.scissor(J),y.setScissorTest(oe),W){let xe=$.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,Y)}else if(ve){let xe=N;for(let Ee=0;Ee<S.textures.length;Ee++){let Ie=$.get(S.textures[Ee]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ee,Ie.__webglTexture,Y,xe)}}else if(S!==null&&Y!==0){let xe=$.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,Y)}X=-1};function Wc(S){let N=$.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=P.textureFormatReadable(S.format),N.__typeReadable=P.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,Y,G,W,ve,Se,xe=0){if(!(S&&S.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){y.bindFramebuffer(O.FRAMEBUFFER,Ee);try{let Ie=S.textures[xe],Ze=Ie.format,tt=Ie.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let Ae=Wc(Ie);if(Ae.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&Y>=0&&Y<=S.height-W&&O.readPixels(N,Y,G,W,pe.convert(Ze),pe.convert(tt),ve)}finally{let Ie=ie!==null?$.get(ie).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,N,Y,G,W,ve,Se,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(N>=0&&N<=S.width-G&&Y>=0&&Y<=S.height-W){y.bindFramebuffer(O.FRAMEBUFFER,Ee);let Ie=S.textures[xe],Ze=Ie.format,tt=Ie.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let Ae=Wc(Ie);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),O.readPixels(N,Y,G,W,pe.convert(Ze),pe.convert(tt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let It=ie!==null?$.get(ie).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,It);let St=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await id(O,St,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ht),O.deleteSync(St),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(S.image.width*G),ve=Math.floor(S.image.height*G),Se=N!==null?N.x:0,xe=N!==null?N.y:0;Q.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Se,xe,W,ve),y.unbindTexture()},this.copyTextureToTexture=function(S,N,Y=null,G=null,W=0,ve=0){let Se,xe,Ee,Ie,Ze,tt,Ae,ht,It,St=S.isCompressedTexture?S.mipmaps[ve]:S.image;if(Y!==null)Se=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,Ze=Y.min.y,tt=Y.isBox3?Y.min.z:0;else{let Rt=Math.pow(2,-W);Se=Math.floor(St.width*Rt),xe=Math.floor(St.height*Rt),S.isDataArrayTexture?Ee=St.depth:S.isData3DTexture?Ee=Math.floor(St.depth*Rt):Ee=1,Ie=0,Ze=0,tt=0}G!==null?(Ae=G.x,ht=G.y,It=G.z):(Ae=0,ht=0,It=0);let xt=pe.convert(N.format),Yt=pe.convert(N.type),be;N.isData3DTexture?(Q.setTexture3D(N,0),be=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Q.setTexture2DArray(N,0),be=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(N,0),be=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let nn=y.getParameter(O.UNPACK_ROW_LENGTH),rt=y.getParameter(O.UNPACK_IMAGE_HEIGHT),Mn=y.getParameter(O.UNPACK_SKIP_PIXELS),qn=y.getParameter(O.UNPACK_SKIP_ROWS),mi=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,St.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ie),y.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),y.pixelStorei(O.UNPACK_SKIP_IMAGES,tt);let ss=S.isDataArrayTexture||S.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Rt=$.get(S),gi=$.get(N),_t=$.get(Rt.__renderTarget),yi=$.get(gi.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,_t.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let rs=0;rs<Ee;rs++)ss&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(S).__webglTexture,W,tt+rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(N).__webglTexture,ve,It+rs)),O.blitFramebuffer(Ie,Ze,Se,xe,Ae,ht,Se,xe,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||$.has(S)){let Rt=$.get(S),gi=$.get(N);y.bindFramebuffer(O.READ_FRAMEBUFFER,D),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let _t=0;_t<Ee;_t++)ss?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,W,tt+_t):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,W),pt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gi.__webglTexture,ve,It+_t):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gi.__webglTexture,ve),W!==0?O.blitFramebuffer(Ie,Ze,Se,xe,Ae,ht,Se,xe,O.COLOR_BUFFER_BIT,O.NEAREST):pt?O.copyTexSubImage3D(be,ve,Ae,ht,It+_t,Ie,Ze,Se,xe):O.copyTexSubImage2D(be,ve,Ae,ht,Ie,Ze,Se,xe);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(be,ve,Ae,ht,It,Se,xe,Ee,xt,Yt,St.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(be,ve,Ae,ht,It,Se,xe,Ee,xt,St.data):O.texSubImage3D(be,ve,Ae,ht,It,Se,xe,Ee,xt,Yt,St):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ve,Ae,ht,Se,xe,xt,Yt,St.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ve,Ae,ht,St.width,St.height,xt,St.data):O.texSubImage2D(O.TEXTURE_2D,ve,Ae,ht,Se,xe,xt,Yt,St);y.pixelStorei(O.UNPACK_ROW_LENGTH,nn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Mn),y.pixelStorei(O.UNPACK_SKIP_ROWS,qn),y.pixelStorei(O.UNPACK_SKIP_IMAGES,mi),ve===0&&N.generateMipmaps&&O.generateMipmap(be),y.unbindTexture()},this.initRenderTarget=function(S){$.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){Z=0,F=0,ie=null,y.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}};var lx=[{name:"Morning Arrival",len:30,kind:"arrive",tint:[255,200,140,.16]},{name:"Period 1",len:60,kind:"class",swap:!1,tint:[255,255,255,0]},{name:"Lunch",len:30,kind:"lunch",tint:[255,236,170,.12]},{name:"Period 2",len:60,kind:"class",swap:!0,tint:[255,235,215,.07]},{name:"Dismissal",len:30,kind:"dismiss",tint:[255,130,80,.24]}],Gn=(()=>{let t=0;return lx.map(e=>{let n={...e,start:t};return t+=e.len,n})})(),pc=Gn.reduce((t,e)=>t+e.len,0),mc=7*60+30,Od=t=>{for(let e=Gn.length-1;e>=0;e--)if(t>=Gn[e].start)return e;return 0},Pl=t=>{let e=mc+Math.floor(t),n=Math.floor(e/60)%24,i=e%60;return`${(n+11)%12+1}:${String(i).padStart(2,"0")} ${n<12?"AM":"PM"}`},Ui=(t,e)=>t+Math.random()*(e-t),gc=t=>{t=t.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};function Xs(t,e,n,i,s){let r=t.length,a=t[0].length,h=(f,g)=>f>=0&&g>=0&&f<a&&g<r&&t[g][f]===".";if(e===i&&n===s||!h(i,s))return[];let l=(f,g)=>g*a+f,o=new Map([[l(e,n),0]]),d=new Map,c=[{x:e,y:n,f:0}],u=new Set;for(;c.length;){let f=0;for(let p=1;p<c.length;p++)c[p].f<c[f].f&&(f=p);let g=c.splice(f,1)[0],_=l(g.x,g.y);if(!u.has(_)){if(u.add(_),g.x===i&&g.y===s){let p=[],m=_;for(;m!==l(e,n);)p.push({x:m%a,y:Math.floor(m/a)}),m=d.get(m);return p.reverse()}for(let[p,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let M=g.x+p,R=g.y+m;if(!h(M,R))continue;let v=l(M,R),T=o.get(_)+1;o.has(v)&&o.get(v)<=T||(o.set(v,T),d.set(v,_),c.push({x:M,y:R,f:T+Math.abs(M-i)+Math.abs(R-s)}))}}}return[]}var $s="#6b4a4f";function gt(t,e,n,i,s,r){t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+i,n,e+i,n+s,r),t.arcTo(e+i,n+s,e,n+s,r),t.arcTo(e,n+s,e,n,r),t.arcTo(e,n,e+i,n,r),t.closePath()}function te(t,e,n=1.4){t.fillStyle=e,t.fill(),n&&(t.lineWidth=n,t.strokeStyle=$s,t.lineJoin="round",t.stroke())}function Rn(t,e,n,i,s,r,a){t.lineCap="round",t.beginPath(),t.moveTo(e,n),t.lineTo(i,s),t.strokeStyle=$s,t.lineWidth=r+2.2,t.stroke(),t.strokeStyle=a,t.lineWidth=r,t.stroke()}var hx=["#5b6b8c","#7a6a58","#4f5d75","#8a5f6a","#5f7a68"];function Te(t,e){if(!t||t[0]!=="#"||t.length<7)return t;let n=parseInt(t.slice(1,7),16),i=e>0?0:255,s=Math.abs(e);return"#"+[n>>16&255,n>>8&255,n&255].map(r=>Math.round(r+(i-r)*s).toString(16).padStart(2,"0")).join("")}function cx(t,e,n,i,s){t.fillStyle=s,t.beginPath(),t.moveTo(e,n+i*.9),t.bezierCurveTo(e-i*1.6,n-i*.2,e-i*.7,n-i*1.2,e,n-i*.35),t.bezierCurveTo(e+i*.7,n-i*1.2,e+i*1.6,n-i*.2,e,n+i*.9),t.fill()}function ux(t,e,n,i,s){t.fillStyle=s,t.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,h=r&1?i*.45:i;t.lineTo(e+Math.cos(a)*h,n+Math.sin(a)*h)}t.closePath(),t.fill()}function Ys(t,e,n,i,s){if(i.age==="adult"&&!i.legacyAdult)return yx(t,e,n,i,s);t.save(),t.translate(Math.round(e*2)/2,Math.round(n*2)/2);let r=i.moving,a=r?Math.sin(i.walk):0,h=i.dir,l=h==="left"||h==="right",o=h==="left"?-1:1,d=h==="up",c=i.sitting,u=i.age==="adult",f=i.top,g=i.bottom||"pants",_=(i.headSize||1)*1,p=(i.build==="slim"?.9:i.build==="sturdy"?1.12:1)*(u?1.12:1),m=u?1.28:1;t.fillStyle="rgba(70,45,55,.24)",t.beginPath(),t.ellipse(0,1,10*p,3.6,0,0,7),t.fill(),c&&t.translate(0,8),t.translate(0,r?-Math.abs(Math.cos(i.walk))*1.8:Math.sin(s*2+i.id)*.35),u&&t.scale(1,m);let M=i.pants||hx[i.id%5],R=i.pack||["#f28f7e","#4f91c7","#eab94e","#88b89a","#b8a8da"][i.id%5],v=i.shoes||"#fbf6ee",T=i.packStyle||"pack",w=f==="tank"?i.skin:i.shirt,C=i.shirt2||"#fff6ea";c||[-1,1].forEach(U=>{let J=r?Math.max(0,U*a)*2.6:0,oe=l?0:U*3.2*p,Ve=l?U*a*4.2:U*3.2*p;g==="shorts"?(Rn(t,oe,-9,Ve,-2-J,3.4,i.skin),Rn(t,oe,-9,oe+(Ve-oe)*.38,-6-J*.38,3.9,M)):g==="skirt"?Rn(t,oe,-9,Ve,-2-J,3.2,i.skin):Rn(t,oe,-9,Ve,-2-J,g==="joggers"?4.2:3.6,M);let Le=Ve+(l?o*1.2:0),Ge=-.6-J;i.shoeStyle==="boot"?(gt(t,Le-2.6,Ge-3.6,5.2,4.6,1.6),te(t,v,1.1),t.beginPath(),t.ellipse(Le+(l?o*1.2:0),Ge+.6,3.6,1.7,0,0,7),te(t,Te(v,.25),1.1)):i.shoeStyle==="sandal"?(t.beginPath(),t.ellipse(Le,Ge,3.4,1.7,0,0,7),te(t,i.skin,1.1),t.strokeStyle=v,t.lineWidth=1.2,t.beginPath(),t.moveTo(Le-2.2,Ge-.3),t.lineTo(Le+2.2,Ge-.3),t.stroke()):(t.beginPath(),t.ellipse(Le,Ge,3.4,1.9,0,0,7),te(t,v,1.1),i.shoeStyle==="sneaker"&&(t.fillStyle="rgba(255,255,255,.55)",t.fillRect(Le-3,Ge+.5,6,.7)))}),g==="skirt"&&!c&&(t.beginPath(),t.moveTo(-6.8*p,-12),t.lineTo(6.8*p,-12),t.lineTo(9.6*p,-5.6),t.lineTo(-9.6*p,-5.6),t.closePath(),te(t,M,1.3),t.fillStyle="rgba(255,255,255,.22)",t.fillRect(-8.2*p,-7.4,16.4*p,1));let x=(U,J)=>{let oe=l?U*a*3.5:U*8.2,Ve=-9.5-(r?-U*a*1.5:0),Le=i.arms&&(U>0?i.arms.R:i.arms.L);Le&&(oe=l?o*Math.abs(Le[0])*.9:Le[0],Ve=Le[1]),Rn(t,l?0:U*6.6*p,-17,oe,Ve,3.2,w),t.beginPath(),t.arc(oe,Ve+.6,1.9,0,7),te(t,i.skin,1)};l&&x(-o*-1,!1),l&&T==="pack"?(gt(t,-o*9.5,-19,7,10,3),te(t,R,1.2)):l&&T==="mini"&&(gt(t,-o*8,-16,5,6.5,2.4),te(t,R,1.1)),f==="hoodie"&&(t.beginPath(),t.ellipse(0,-19.6,6.4*p,3.2,0,0,7),te(t,Te(i.shirt,.14),1.2));let E=()=>{f==="dress"?(t.beginPath(),t.moveTo(-6.4*p,-19.5),t.quadraticCurveTo(0,-21,6.4*p,-19.5),t.lineTo(7*p,-13),t.lineTo(9.6*p,-6),t.quadraticCurveTo(0,-4.4,-9.6*p,-6),t.lineTo(-7*p,-13),t.closePath()):f==="tank"?gt(t,-5.6*p,-19.5,11.2*p,11.5,4):gt(t,-6.6*p,-19.5,13.2*p,11.5,4.5)},A=f==="overalls"||f==="vest"?C:i.shirt;if(E(),te(t,A,1.4),i.pattern&&i.pattern!=="solid"&&f!=="overalls"&&f!=="vest"){let U=i.shirt2||Te(i.shirt,.3);if(t.save(),E(),t.clip(),i.pattern==="stripes")for(let J=-20;J<-4;J+=3.6)t.fillStyle=U,t.fillRect(-11,J,22,1.7);else if(i.pattern==="dots")for(let J=-19;J<-4;J+=3.2)for(let oe=-9+(J*3&1)*1.6;oe<10;oe+=3.2)t.fillStyle=U,t.beginPath(),t.arc(oe,J,.85,0,7),t.fill();else if(i.pattern==="plaid"){t.strokeStyle=U,t.globalAlpha=.75,t.lineWidth=1;for(let J=-19;J<-4;J+=3.6)t.beginPath(),t.moveTo(-11,J),t.lineTo(11,J),t.stroke();for(let J=-9;J<10;J+=3.6)t.beginPath(),t.moveTo(J,-21),t.lineTo(J,-4),t.stroke();t.globalAlpha=1}else if(i.pattern==="hearts")for(let J=-17;J<-5;J+=4.2)for(let oe=-7+(J*2&1)*2;oe<8;oe+=4.4)cx(t,oe,J,1.1,U);else if(i.pattern==="stars")for(let J=-17;J<-5;J+=4.2)for(let oe=-7+(J*2&1)*2;oe<8;oe+=4.4)ux(t,oe,J,1.4,U);t.restore(),E(),t.lineWidth=1.4,t.strokeStyle=$s,t.stroke()}if(t.fillStyle="rgba(255,255,255,.3)",t.beginPath(),t.ellipse(-2.4,-16.5,2.4,3.4,0,0,7),t.fill(),f)d||(f==="hoodie"?(gt(t,-3.8,-14,7.6,3.6,1.6),t.lineWidth=1,t.strokeStyle=Te(i.shirt,.3),t.stroke(),Rn(t,-1.6,-18.6,-1.6,-14.8,.8,C),Rn(t,1.6,-18.6,1.6,-14.8,.8,C)):f==="sweater"?(t.fillStyle=Te(i.shirt,-.28),t.fillRect(-6.4*p,-10.6,12.8*p,2),t.beginPath(),t.ellipse(0,-19.3,3.6,1.5,0,0,7),te(t,Te(i.shirt,-.28),1)):f==="jersey"?(t.fillStyle=i.shirt2||"#fff",t.font="800 6.4px 'Trebuchet MS',sans-serif",t.textAlign="center",t.fillText(String(i.num??i.id%90+1),0,-11.8),t.fillRect(-6.4*p,-19.4,12.8*p,.9)):f==="blazer"?(t.beginPath(),t.moveTo(-3.4,-19.4),t.lineTo(0,-12.4),t.lineTo(3.4,-19.4),t.closePath(),te(t,C,.9),t.beginPath(),t.moveTo(-3.4,-19.4),t.lineTo(-.4,-11.8),t.lineTo(-5.6,-11),t.lineTo(-6.4,-17.6),t.closePath(),te(t,Te(i.shirt,.16),.9),t.beginPath(),t.moveTo(3.4,-19.4),t.lineTo(.4,-11.8),t.lineTo(5.6,-11),t.lineTo(6.4,-17.6),t.closePath(),te(t,Te(i.shirt,.16),.9),t.fillStyle="#EAB94E",t.beginPath(),t.arc(0,-10.4,.7,0,7),t.fill()):f==="overalls"?(gt(t,-4,-16.4,8,6.8,1.6),te(t,i.shirt,1.1),Rn(t,-3.4,-19.4,-3.2,-16.2,1.2,i.shirt),Rn(t,3.4,-19.4,3.2,-16.2,1.2,i.shirt),t.fillStyle="#EAB94E",[-3.2,3.2].forEach(U=>{t.beginPath(),t.arc(U,-16.2,.7,0,7),t.fill()}),gt(t,-2,-14.4,4,2.4,.8),t.lineWidth=.8,t.strokeStyle=Te(i.shirt,.3),t.stroke()):f==="vest"?(t.beginPath(),t.moveTo(-6.6*p,-19.4),t.lineTo(-1.2,-19.4),t.lineTo(-.6,-9.4),t.lineTo(-6.2*p,-9.4),t.closePath(),te(t,i.shirt,1),t.beginPath(),t.moveTo(6.6*p,-19.4),t.lineTo(1.2,-19.4),t.lineTo(.6,-9.4),t.lineTo(6.2*p,-9.4),t.closePath(),te(t,i.shirt,1)):f==="tee"?(t.beginPath(),t.ellipse(0,-19.3,3.2,1.3,0,0,7),te(t,Te(i.shirt,.12),.9)):f==="dress"&&(t.fillStyle=Te(i.shirt,-.35),t.fillRect(-6.4*p,-13.2,13.2*p,1.2)));else{let U=i.id%3;U===0?(t.fillStyle="rgba(255,255,255,.45)",t.fillRect(-6,-15.4,12,2.4)):U===2&&!d&&(t.fillStyle="#fff",t.beginPath(),t.moveTo(-3,-19.4),t.lineTo(0,-16),t.lineTo(3,-19.4),t.closePath(),te(t,"#fff",.9))}d?T!=="none"&&(gt(t,-6,-19,12,10.5,4),te(t,R,1.3),t.fillStyle="rgba(255,255,255,.3)",t.fillRect(-4,-17.5,8,2)):!l&&T==="pack"?(Rn(t,-3.6,-19.2,-3.6,-11,1.5,R),Rn(t,3.6,-19.2,3.6,-11,1.5,R)):!l&&T==="messenger"&&(Rn(t,-5.6,-19.2,5.2,-9.8,1.5,R),gt(t,3.2,-12.6,5.6,5,1.6),te(t,R,1.1)),i.scarf&&(t.beginPath(),t.ellipse(0,-19.4,6.6*p,2.4,0,0,7),te(t,i.scarf,1.2),!d&&!l&&(gt(t,1.6,-19,3.2,8,1.4),te(t,i.scarf,1.1),t.fillStyle="rgba(255,255,255,.4)",t.fillRect(1.9,-15.6,2.6,.9))),i.tag&&(t.beginPath(),t.moveTo(-6,-19.5),t.lineTo(-1,-8.5),t.lineTo(-6.6,-9),t.closePath(),t.fillStyle="#c4463c",t.fill(),t.beginPath(),t.moveTo(6,-19.5),t.lineTo(1,-8.5),t.lineTo(6.6,-9),t.closePath(),t.fill()),i.badge&&!d&&!l&&(t.beginPath(),t.arc(-3.8,-15.4,1.5,0,7),te(t,i.badge,.9)),l?x(o*1,!0):(x(-1),x(1)),u&&t.scale(1,1/m),t.save(),u&&(t.translate(0,-8.4+0),t.scale(.82,.82)),t.translate((i.turn||0)*1.7,0);let b=-28,I=i.hair,B=i.style,D=i.hair2||Te(I,-.28),V=(u?8.1:8.9)*_,Z=(u?9.2:8.3)*_;if((B==="long"||B==="bob")&&(gt(t,-9.8,b-6,19.6,B==="long"?20:14,7),te(t,I,1.3)),B==="wavy"&&(gt(t,-10.2,b-6,20.4,18,7),te(t,I,1.3),[-7,0,7].forEach(U=>{t.beginPath(),t.arc(U,b+12,3.6,0,7),te(t,I,1.1)})),B==="afro"&&(t.beginPath(),t.ellipse(l?-o*1.2:0,b-3,13.2,12.6,0,0,7),te(t,I,1.4)),B==="bun"&&(t.beginPath(),t.arc(l?-o*3:0,b-9.5,4.4,0,7),te(t,I,1.3)),B==="topknot"&&(t.beginPath(),t.arc(l?-o*2:0,b-12,3.4,0,7),te(t,I,1.3)),B==="twinbuns"&&(l?[-o*3]:[-7.6,7.6]).forEach(U=>{t.beginPath(),t.arc(U,b-10.4,3.9,0,7),te(t,I,1.3)}),B==="pony"&&(t.save(),t.translate(l?-o*9:d?0:9,l?b+2:d?b+8:b+1),t.rotate(l||d?0:-.5),t.beginPath(),t.ellipse(0,4,3.2,6.5,0,0,7),te(t,I,1.3),t.restore()),B==="pigtails"&&(l?[-o*10]:[-10.6,10.6]).forEach((U,J)=>{t.save(),t.translate(U,b+3),t.rotate(l?0:J?-.4:.4),t.beginPath(),t.ellipse(0,5,2.9,6.6,0,0,7),te(t,I,1.3),t.restore()}),B==="braids"&&(l?[-o*8.4]:[-9.4,9.4]).forEach(U=>{for(let J=0;J<4;J++)t.beginPath(),t.ellipse(U,b+4+J*3.7,2.2,2.1,0,0,7),te(t,J&1?D:I,1.1)}),B==="curly"&&[[-8,b-2],[8,b-2],[-6,b-8],[6,b-8],[0,b-10]].forEach(([U,J])=>{t.beginPath(),t.arc(U,J,4.6,0,7),te(t,I,1.2)}),l||[-1,1].forEach(U=>{t.beginPath(),t.arc(U*8.7,b+1,2,0,7),te(t,i.skin,1)}),t.beginPath(),t.ellipse(l?o*.6:0,b,V,Z,0,0,7),te(t,i.skin,1.5),t.fillStyle="rgba(120,70,60,.13)",t.beginPath(),t.ellipse(3,b+3,7.5,6,0,0,7),t.fill(),!d){let U=(s*.9+i.id*1.7)%4<.13,J=l?[o*4.4]:[-3.5,3.5],oe=i.eyeShape||"round",Ve=i.eyeColor,Le=i.brow||"soft",Ge=i.browColor||i.hair;if(J.forEach((ee,we)=>{if(U||oe==="happy")t.strokeStyle="#3a2a30",t.lineWidth=1.1,t.beginPath(),oe==="happy"&&!U?t.arc(ee,b+.6,1.7,Math.PI*1.1,Math.PI*1.9):(t.moveTo(ee-1.6,b),t.lineTo(ee+1.6,b)),t.stroke();else{let Oe=u?.74:1,Ce=(oe==="wide"?2.1:oe==="oval"?1.4:1.7)*Oe,Xe=(oe==="wide"||oe==="oval"?2.7:2.3)*(u?.82:1);if(t.fillStyle=Ve||"#3a2a30",t.beginPath(),t.ellipse(ee,b,Ce,Xe,0,0,7),t.fill(),Ve&&(t.fillStyle="#2a1d22",t.beginPath(),t.ellipse(ee,b+.2,Ce*.5,Xe*.55,0,0,7),t.fill()),t.fillStyle="#fff",t.beginPath(),t.arc(ee-.5,b-.9,oe==="wide"?.9:.7,0,7),t.fill(),oe==="sleepy"&&(t.fillStyle=i.skin,t.beginPath(),t.ellipse(ee,b-1.1,Ce+.5,Xe*.62,0,Math.PI,2*Math.PI),t.fill(),t.strokeStyle="#3a2a30",t.lineWidth=.9,t.beginPath(),t.moveTo(ee-Ce-.4,b-.6),t.lineTo(ee+Ce+.4,b-.6),t.stroke()),oe==="lash"){t.strokeStyle="#3a2a30",t.lineWidth=.8;let Qe=l?o:we?1:-1;t.beginPath(),t.moveTo(ee+Qe*Ce,b-1),t.lineTo(ee+Qe*(Ce+1.4),b-2.2),t.moveTo(ee+Qe*Ce,b-.1),t.lineTo(ee+Qe*(Ce+1.6),b-.6),t.stroke()}}if(Le!=="none"){if(t.strokeStyle=Ge,t.lineCap="round",t.lineWidth=(Le==="thick"?1.6:Le==="thin"?.6:.9)+(u?.45:0),t.beginPath(),Le==="arch")t.moveTo(ee-2,b-3.2),t.quadraticCurveTo(ee,b-5.2,ee+2,b-3.6);else if(u){let Oe=l||we?1:-1;t.moveTo(ee-2.2*Oe,b-3.5),t.lineTo(ee+2.2*Oe,b-4.3)}else t.moveTo(ee-2,b-3.6),t.lineTo(ee+2,b-3.9);t.stroke()}if(i.glasses){let Oe=i.glasses===!0?"round":i.glasses,Ce=i.glassColor||"#5b4048";t.strokeStyle=Ce,t.lineWidth=Oe==="sun"?1:.9,t.beginPath(),Oe==="square"?t.roundRect(ee-3.1,b-2.6,6.2,5.2,1.2):Oe==="cat"?(t.ellipse(ee,b,3.2,2.7,0,0,7),t.moveTo(ee+(l?o:we?1:-1)*3,b-1.6),t.lineTo(ee+(l?o:we?1:-1)*4.4,b-3.4)):Oe==="half"?t.arc(ee,b,3.2,Math.PI,0):t.arc(ee,b,3.2,0,7),Oe==="sun"&&(t.fillStyle="rgba(40,30,40,.82)",t.fill()),t.stroke()}}),i.glasses&&!l&&(t.strokeStyle=i.glassColor||"#5b4048",t.lineWidth=.9,t.beginPath(),t.moveTo(-.3,b-.5),t.lineTo(.3,b-.5),t.stroke()),(u?i.blush===!0:i.blush!==!1)&&(t.fillStyle=i.blushColor||(u?"rgba(255,110,125,.14)":"rgba(255,110,125,.38)"),(l?[o*6.4]:[-6,6]).forEach(ee=>{t.beginPath(),t.ellipse(ee,b+3.4,2.1,1.3,0,0,7),t.fill()})),i.freckles&&(t.fillStyle=Te(i.skin,.32),(l?[[o*5.6,b+2.2],[o*6.8,b+3.2],[o*5.2,b+3.8]]:[[-5.6,b+2.4],[-4.2,b+3.4],[-6.4,b+3.8],[5.6,b+2.4],[4.2,b+3.4],[6.4,b+3.8]]).forEach(([ee,we])=>{t.beginPath(),t.arc(ee,we,.5,0,7),t.fill()})),i.mole&&(t.fillStyle="#4a2f2a",t.beginPath(),t.arc(l?o*6:4.4,b+5.2,.65,0,7),t.fill()),i.nose||u){t.strokeStyle=Te(i.skin,.3),t.lineWidth=.8,t.beginPath();let ee=l?o*6.4:0;t.arc(ee,b+2.6,.9,.1*Math.PI,.9*Math.PI),t.stroke()}let z=l?o*3.6:0,K=b+4.7,he=i.mouthStyle||"smile",q=i.lip||"#8a4650";i.mouth?(t.fillStyle="#7A3B3B",t.beginPath(),t.ellipse(z,b+4.8,1.7,.7+i.mouth*1.5,0,0,7),t.fill()):he==="grin"?(t.beginPath(),t.moveTo(z-2.4,K-.9),t.quadraticCurveTo(z,K+2.8,z+2.4,K-.9),t.closePath(),t.fillStyle="#fff",t.fill(),t.strokeStyle=q,t.lineWidth=.9,t.stroke()):he==="smirk"?(t.strokeStyle=q,t.lineWidth=1,t.lineCap="round",t.beginPath(),t.moveTo(z-1.8,K),t.quadraticCurveTo(z+.4,K+1,z+2.2,K-.8),t.stroke()):he==="flat"?(t.strokeStyle=q,t.lineWidth=1,t.lineCap="round",t.beginPath(),t.moveTo(z-1.5,K),t.lineTo(z+1.5,K),t.stroke()):he==="o"?(t.fillStyle="#7A3B3B",t.beginPath(),t.ellipse(z,K+.2,1,1.2,0,0,7),t.fill()):he==="cat"?(t.strokeStyle=q,t.lineWidth=.9,t.lineCap="round",t.beginPath(),t.arc(z-1,K-.4,1.1,.1*Math.PI,.9*Math.PI),t.arc(z+1,K-.4,1.1,.1*Math.PI,.9*Math.PI),t.stroke()):(t.strokeStyle=q,t.lineWidth=1,t.lineCap="round",t.beginPath(),t.arc(z,b+(u?5.4:4.6),u?1.35:1.7,.15*Math.PI,.85*Math.PI),t.stroke())}let F=l?-o*1.6:0,ie=()=>{let U=l?o:1,J=l?-1.6:0;l&&(t.save(),t.scale(U,1)),t.beginPath(),l?(t.moveTo(-9.2+J,b+5.4),t.lineTo(-9.3+J,b+.5),t.bezierCurveTo(-11+J,b-14,11+J,b-14,9.3+J,b+.5),t.quadraticCurveTo(7+J,b-5.4,4+J,b-4.6),t.lineTo(-2.6+J,b-1.6),t.lineTo(-5.4+J,b+3.6)):(t.moveTo(-9.3,b+.5),t.bezierCurveTo(-11,b-14,11,b-14,9.3,b+.5),t.quadraticCurveTo(6,b-3.4,2,b-4.4),t.quadraticCurveTo(-3,b-6,-9.3,b+.5)),t.closePath(),l&&t.restore()};if(d)t.beginPath(),t.ellipse(0,b-.4,9.4,8.9,0,0,7),te(t,I,1.4),t.fillStyle="rgba(255,255,255,.2)",t.beginPath(),t.ellipse(-2.5,b-4,3.5,2,0,0,7),t.fill();else if(B==="buzz")t.beginPath(),t.moveTo(-8.8+F,b-1.2),t.bezierCurveTo(-10+F,b-11,10+F,b-11,8.8+F,b-1.2),t.quadraticCurveTo(0,b-4.6,-8.8+F,b-1.2),t.closePath(),te(t,I,1.3);else if(B==="undercut")ie(),te(t,Te(I,.12),1.3),t.beginPath(),t.moveTo(-7+F,b-4),t.bezierCurveTo(-8+F,b-17,9+F,b-16,7.4+F,b-4),t.quadraticCurveTo(0,b-6,-7+F,b-4),t.closePath(),te(t,I,1.3);else if(B==="spiky"||B==="messy"){ie(),te(t,I,1.4);let U=B==="spiky"?6:4;for(let J=0;J<U;J++){let oe=-Math.PI*(.12+.76*J/(U-1)),Ve=Math.cos(oe+Math.PI)*7.6+F,Le=b-3+Math.sin(oe)*5.4,Ge=B==="spiky"?6.4:4.4+J%2*1.6;t.beginPath(),t.moveTo(Ve-2.1,Le+1.4),t.lineTo(Ve+(J-U/2)*.8,Le-Ge),t.lineTo(Ve+2.1,Le+1.4),t.closePath(),te(t,I,1.2)}ie(),te(t,I,1.2)}else B==="sidebang"||B==="pixie"?(ie(),te(t,I,1.4),t.beginPath(),t.moveTo(-9+F,b-6),t.quadraticCurveTo(2+F,b-12,9.4+F,b-1.4),t.quadraticCurveTo(B==="pixie"?4+F:-1+F,b-3.6,-9+F,b-6),t.closePath(),te(t,I,1.2),B==="pixie"&&!l&&[-1,1].forEach(U=>{t.beginPath(),t.moveTo(U*9.2,b-1),t.lineTo(U*10.4,b+5),t.lineTo(U*7.6,b+1),t.closePath(),te(t,I,1)})):B==="curtains"?(ie(),te(t,I,1.4),l||(t.strokeStyle=Te(I,.35),t.lineWidth=1,t.beginPath(),t.moveTo(0,b-9.4),t.quadraticCurveTo(-1.2,b-6,-.2,b-3.6),t.stroke())):B==="afro"?(t.beginPath(),t.moveTo(-9+F,b-1),t.bezierCurveTo(-10+F,b-13,10+F,b-13,9+F,b-1),t.quadraticCurveTo(0+F,b-5.4,-9+F,b-1),t.closePath(),te(t,I,1.3)):(ie(),te(t,I,1.4));!d&&i.hair2&&(t.strokeStyle=i.hair2,t.lineWidth=1.3,t.lineCap="round",t.beginPath(),t.moveTo(-5+F,b-6.2),t.quadraticCurveTo(-3+F,b-8.6,0+F,b-9),t.moveTo(1+F,b-9),t.quadraticCurveTo(4+F,b-8,6+F,b-5.4),t.stroke()),d||(t.fillStyle="rgba(255,255,255,.22)",t.beginPath(),t.ellipse(-3+F,b-6.4,3.4,1.5,-.3,0,7),t.fill()),(B==="long"||B==="wavy")&&!d&&!l&&[-1,1].forEach(U=>{t.beginPath(),t.ellipse(U*9,b+6,2.3,7,0,0,7),te(t,I,1.1)}),l&&!d&&(t.beginPath(),t.ellipse(-o*1.2+o*.6,b+2.2,1.5,2.2,0,0,7),te(t,i.skin,1),t.fillStyle="rgba(160,90,80,.25)",t.beginPath(),t.ellipse(-o*1.2+o*.6,b+2.4,.6,1.1,0,0,7),t.fill(),i.glasses&&(t.strokeStyle=i.glassColor||"#5b4048",t.lineWidth=.9,t.beginPath(),t.moveTo(o*1.1,b-.6),t.lineTo(-o*.6,b+.9),t.stroke()));let X=i.hatColor||"#e07a66",j=i.hat;if(i.earrings&&!d&&(l?[-o*.6]:[-9,9]).forEach(U=>{t.beginPath(),t.arc(U,b+4.6,1.2,0,7),te(t,i.earrings,.8)}),j==="cap")t.beginPath(),t.moveTo(-9.4+F,b-2.8),t.bezierCurveTo(-9.8+F,b-15,9.8+F,b-15,9.4+F,b-2.8),t.closePath(),te(t,X,1.3),d||(t.beginPath(),l?t.ellipse(o*9.2+F,b-3,5.2,1.7,0,0,7):t.ellipse(0,b-2.6,7.4,2,0,0,7),te(t,Te(X,.18),1.1)),t.beginPath(),t.arc(0,b-12.2,1,0,7),te(t,Te(X,.2),.8);else if(j==="beanie")t.beginPath(),t.moveTo(-9.8+F,b-2.4),t.bezierCurveTo(-10.4+F,b-17,10.4+F,b-17,9.8+F,b-2.4),t.closePath(),te(t,X,1.3),gt(t,-10+F,b-4.6,20,3.8,1.6),te(t,Te(X,-.25),1.1),t.beginPath(),t.arc(F,b-14,2.3,0,7),te(t,Te(X,-.35),1);else if(j==="bucket")t.beginPath(),t.moveTo(-8+F,b-4),t.lineTo(-7+F,b-11.4),t.lineTo(7+F,b-11.4),t.lineTo(8+F,b-4),t.closePath(),te(t,X,1.3),t.beginPath(),t.ellipse(F,b-4.4,12.2,2.8,0,0,7),te(t,Te(X,.1),1.2);else if(j==="beret")t.beginPath(),t.ellipse(2+F,b-8.6,9,3.6,-.12,0,7),te(t,X,1.3),t.beginPath(),t.arc(3+F,b-12.2,1,0,7),te(t,Te(X,.25),.8);else if(j==="crown")t.beginPath(),t.moveTo(-6+F,b-8),t.lineTo(-6.6+F,b-14),t.lineTo(-3+F,b-11),t.lineTo(0+F,b-15.4),t.lineTo(3+F,b-11),t.lineTo(6.6+F,b-14),t.lineTo(6+F,b-8),t.closePath(),te(t,i.hatColor||"#EAB94E",1.2),[-3,0,3].forEach(U=>{t.beginPath(),t.arc(U+F,b-9.4,.7,0,7),t.fillStyle="#e07a66",t.fill()});else if(j==="catears")[-1,1].forEach(U=>{t.beginPath(),t.moveTo(U*2.6+F,b-8.4),t.lineTo(U*6.2+F,b-15.6),t.lineTo(U*9+F,b-6.2),t.closePath(),te(t,I,1.2),t.beginPath(),t.moveTo(U*4.2+F,b-8.8),t.lineTo(U*6.2+F,b-12.8),t.lineTo(U*7.6+F,b-7.6),t.closePath(),t.fillStyle="#f0a6b5",t.fill()});else if(j==="headphones")t.strokeStyle=$s,t.lineWidth=3.6,t.beginPath(),t.arc(F,b-.5,10.4,Math.PI*1.06,Math.PI*1.94),t.stroke(),t.strokeStyle=X,t.lineWidth=2,t.stroke(),d||(l?[o*9.2]:[-9.8,9.8]).forEach(U=>{gt(t,U-1.7,b-3,3.4,6.2,1.4),te(t,X,1.1)});else if(j==="headband"&&!d)t.strokeStyle=$s,t.lineWidth=3.4,t.beginPath(),t.moveTo(-9+F,b-1.2),t.quadraticCurveTo(F,b-12,9+F,b-1.2),t.stroke(),t.strokeStyle=X,t.lineWidth=2,t.stroke();else if(j==="headband")t.strokeStyle=X,t.lineWidth=2,t.beginPath(),t.moveTo(-9,b-1.2),t.quadraticCurveTo(0,b-12,9,b-1.2),t.stroke();else if(j==="bow"){let U=l?-o*1.5:6.6,J=b-9.6;[-1,1].forEach(oe=>{t.beginPath(),t.moveTo(U,J),t.lineTo(U+oe*5.4,J-2.8),t.lineTo(U+oe*5.4,J+2.8),t.closePath(),te(t,X,1.1)}),t.beginPath(),t.arc(U,J,1.5,0,7),te(t,Te(X,.2),1)}else if(j==="flower"){let U=l?-o*2:-6,J=b-8.4;for(let oe=0;oe<5;oe++){let Ve=oe*Math.PI*2/5;t.beginPath(),t.arc(U+Math.cos(Ve)*2.3,J+Math.sin(Ve)*2.3,1.8,0,7),te(t,X,.9)}t.beginPath(),t.arc(U,J,1.3,0,7),te(t,"#EAB94E",.8)}if(t.restore(),i.tag){let U=b-19+Math.sin(s*4)*1.5;t.beginPath(),t.moveTo(-5,U-5),t.lineTo(5,U-5),t.lineTo(0,U+1),t.closePath(),te(t,"#f28f7e",1.3)}t.restore()}var dx=-43.4;function $e(t,e,n){t.strokeStyle=e,t.lineWidth=n,t.lineCap="round",t.lineJoin="round",t.stroke()}function qs(t,e,n,i,s,r,a,h=1.7){t.lineCap="round",t.beginPath(),t.moveTo(e,n),t.lineTo(i,s),t.strokeStyle=$s,t.lineWidth=r+h,t.stroke(),t.strokeStyle=a,t.lineWidth=r,t.stroke()}function fx(t,e,n,i){t.beginPath(),i==="side"?(t.moveTo(e-3.9,n+.6),t.bezierCurveTo(e-4.3,n-3.8,e-1.8,n-4.9,e+.4,n-4.9),t.bezierCurveTo(e+2.6,n-4.9,e+3.8,n-3.4,e+3.9,n-1),t.lineTo(e+4,n+.4),t.lineTo(e+5,n+2),t.lineTo(e+3.8,n+2.5),t.lineTo(e+3.9,n+3.3),t.quadraticCurveTo(e+3.5,n+4.1,e+2.8,n+4.5),t.quadraticCurveTo(e+1.2,n+5.2,e-.8,n+4.6),t.bezierCurveTo(e-2.6,n+4,e-3.9,n+2.6,e-3.9,n+.6)):(t.moveTo(e-4.2,n-.6),t.bezierCurveTo(e-4.3,n-3.9,e-2.4,n-4.9,e,n-4.9),t.bezierCurveTo(e+2.4,n-4.9,e+4.3,n-3.9,e+4.2,n-.6),t.bezierCurveTo(e+4.1,n+2.2,e+3,n+4,e+1.5,n+4.7),t.quadraticCurveTo(e,n+5.2,e-1.5,n+4.7),t.bezierCurveTo(e-3,n+4,e-4.1,n+2.2,e-4.2,n-.6)),t.closePath()}var zd={smile:{brow:[-.25,.1],mouth:"smile2",eyes:"open",blush:.12},joy:{brow:[-.9,-.5],mouth:"grin",eyes:"happy",blush:.3},frown:{brow:[-.6,.5],mouth:"frown",eyes:"open",droop:.5},upset:{brow:[-1.1,.7],mouth:"wobble",eyes:"wet",tear:!0,droop:1.1},frustrated:{brow:[1,-.7],mouth:"grit",eyes:"narrow",flush:!0,sweat:!0,vein:!0},surprised:{brow:[-1.2,-1.2],mouth:"o",eyes:"wide"},thinking:{brow:[-.5,.2],mouth:"smirk",eyes:"up",oneBrow:!0},stern:{brow:[.45,-.15],mouth:"flat",eyes:"open"}};function px(t,e,n,i,s,r){let a=e.skin,h=Te(a,.3),l=e.mouth||0,o=zd[e.emote]||null,d=(r*.9+e.id*1.7)%4<.13&&!(o&&(o.eyes==="happy"||o.eyes==="wide")),c=e.lip||Te(a,.38);if((s?[2.2]:[-1.9,1.9]).forEach((M,R)=>{let v=n+M,T=i+.3,w=o&&o.eyes==="happy"?"happy":e.eyeShape||"round",C=o?o.eyes:"open";if(d||w==="happy")t.beginPath(),w==="happy"&&!d?t.arc(v,T+.3,1,Math.PI*1.1,Math.PI*1.9):(t.moveTo(v-1,T),t.lineTo(v+1,T)),$e(t,"#3a2a30",.55);else{let E=C==="wide"?.95:C==="narrow"?.38:C==="wet"?.78:.66;if(t.fillStyle="#fffaf2",t.beginPath(),t.ellipse(v,T,s?.8:1,E,0,0,7),t.fill(),$e(t,Te(a,.45),.3),t.fillStyle=e.eyeColor||"#3a2a30",t.beginPath(),t.arc(v+(s?.25:0)+(C==="up"?.25:0),T+.02+(C==="up"?-.2:0)+(C==="narrow"?.12:0),C==="wide"?.42:.5,0,7),t.fill(),C==="wet"&&(t.fillStyle="rgba(190,225,255,.9)",t.beginPath(),t.ellipse(v+.1,T+.28,.55,.22,0,0,7),t.fill()),t.fillStyle="#fff",t.beginPath(),t.arc(v+(s?.05:-.15),T-.22,.17,0,7),t.fill(),w==="sleepy"&&(t.fillStyle=a,t.beginPath(),t.ellipse(v,T-.35,1.05,.42,0,Math.PI,2*Math.PI),t.fill()),t.beginPath(),t.moveTo(v-(s?.8:1.05),T-.35),t.quadraticCurveTo(v,T-.95,v+(s?.9:1.05),T-.35),$e(t,"#2a1d22",.45),w==="lash"){let A=s||R?1:-1;t.beginPath(),t.moveTo(v+A*.9,T-.4),t.lineTo(v+A*1.7,T-1),$e(t,"#2a1d22",.4)}}let x=e.brow||"soft";if(x!=="none"){let E=x==="thick"?.85:x==="thin"?.32:.55,A=s?1:M<0?-1:1,b=o?o.brow[0]:0,I=o?o.brow[1]:.25,B=o&&o.oneBrow&&R===1?-.9:0,D=T-1.9+B,V=s?v-1.2:v-A*1.2,Z=s?v+1.2:v+A*1.3;t.beginPath(),t.moveTo(V,D+b*.75+(o?0:.2)),t.quadraticCurveTo((V+Z)/2,D-.55+(b+I)*.3+(x==="arch"?-.3:0),Z,D+I*.75),$e(t,e.browColor||e.hair,E)}if(e.glasses&&e.glasses!=="none"){let E=e.glasses===!0?"round":e.glasses,A=e.glassColor||"#3b2f33";if(t.beginPath(),E==="square")t.roundRect(v-1.6,T-1.25,3.2,2.6,.6);else if(E==="cat"){t.ellipse(v,T+.05,1.6,1.3,0,0,7);let b=s?1:M<0?-1:1;t.moveTo(v+b*1.4,T-.7),t.lineTo(v+b*2.1,T-1.6)}else E==="half"?t.arc(v,T,1.6,Math.PI,0):t.arc(v,T+.05,1.5,0,7);E==="sun"&&(t.fillStyle="rgba(40,30,40,.82)",t.fill()),$e(t,A,.5)}}),e.glasses&&e.glasses!=="none"){let M=e.glassColor||"#3b2f33";t.beginPath(),s?(t.moveTo(n+.6,i+.1),t.lineTo(n-3.6,i+.7)):(t.moveTo(n-.5,i+.15),t.lineTo(n+.5,i+.15)),$e(t,M,.45)}s||(t.beginPath(),t.moveTo(n+.2,i+.9),t.lineTo(n+.5,i+2.2),t.arc(n,i+2.35,.65,.05*Math.PI,.85*Math.PI),$e(t,h,.38)),e.freckles&&(t.fillStyle=h,(s?[[3,1.6],[2.3,2.3]]:[[-2.6,1.7],[-1.9,2.4],[2.6,1.7],[1.9,2.4]]).forEach(([M,R])=>{t.beginPath(),t.arc(n+M,i+R,.22,0,7),t.fill()})),e.blush===!0&&(t.fillStyle="rgba(255,110,125,.16)",(s?[2.6]:[-2.8,2.8]).forEach(M=>{t.beginPath(),t.ellipse(n+M,i+2.1,1,.6,0,0,7),t.fill()}));let f=n+(s?2.6:0),g=i+3.4,_=e.mouthStyle||"smile",p=s?1.1:1.5,m=o?o.mouth:null;if(l&&m!=="grit")t.fillStyle="#7A3B3B",t.beginPath(),t.ellipse(f,g+.1,p*.62,.3+l*.9,0,0,7),t.fill(),t.beginPath(),t.ellipse(f,g+.1,p*.62,.3+l*.9,0,0,7),$e(t,c,.35);else if(m==="frown")t.beginPath(),t.moveTo(f-p,g+.65),t.quadraticCurveTo(f,g-.75,f+p,g+.65),$e(t,c,.55);else if(m==="wobble")t.beginPath(),t.moveTo(f-p,g+.7),t.quadraticCurveTo(f-p*.5,g-.3,f-.1,g+.45),t.quadraticCurveTo(f+p*.5,g-.5,f+p,g+.7),$e(t,c,.5);else if(m==="grit"){gt(t,f-p*.95,g-.35,p*1.9,1.15,.4),t.fillStyle="#fffaf2",t.fill(),$e(t,c,.45),t.beginPath();for(let M=-2;M<=2;M++)t.moveTo(f+M*p*.38,g-.3),t.lineTo(f+M*p*.38,g+.75);$e(t,Te(c,.2),.22)}else m==="o"?(t.fillStyle="#7A3B3B",t.beginPath(),t.ellipse(f,g+.35,.75,1,0,0,7),t.fill(),t.beginPath(),t.ellipse(f,g+.35,.75,1,0,0,7),$e(t,c,.4)):m==="smile2"?(t.beginPath(),t.moveTo(f-p*1.15,g-.25),t.quadraticCurveTo(f,g+1.4,f+p*1.15,g-.25),$e(t,c,.55),t.beginPath(),t.moveTo(f-p*1.15,g-.25),t.lineTo(f-p*1.3,g-.55),t.moveTo(f+p*1.15,g-.25),t.lineTo(f+p*1.3,g-.55),$e(t,Te(a,.2),.3)):_==="grin"||m==="grin"?(t.beginPath(),t.moveTo(f-p*(m?1.2:1),g-.2),t.quadraticCurveTo(f,g+2.1,f+p*(m?1.2:1),g-.2),t.closePath(),t.fillStyle="#fffaf2",t.fill(),$e(t,c,.45)):_==="flat"||m==="flat"?(t.beginPath(),t.moveTo(f-p*.8,g),t.lineTo(f+p*.8,g),$e(t,c,.5)):_==="smirk"||m==="smirk"?(t.beginPath(),t.moveTo(f-p*.8,g+.1),t.quadraticCurveTo(f+.2,g+.8,f+p,g-.5),$e(t,c,.5)):(t.beginPath(),t.moveTo(f-p,g-.1),t.quadraticCurveTo(f,g+1,f+p,g-.1),$e(t,c,.52),t.fillStyle=Te(c,-.25),t.globalAlpha=.55,t.beginPath(),t.ellipse(f,g+.6,p*.5,.26,0,0,7),t.fill(),t.globalAlpha=1);if(o&&o.flush&&(t.fillStyle="rgba(235,70,60,.34)",(s?[2.6]:[-2.8,2.8]).forEach(M=>{t.beginPath(),t.ellipse(n+M,i+2.1,1.2,.8,0,0,7),t.fill()}),t.fillStyle="rgba(235,70,60,.18)",t.beginPath(),t.ellipse(n,i-3.2,3.2,1.2,0,0,7),t.fill()),o&&o.tear){let M=n+(s?2.4:-2.4),R=i+1.6+r*1.3%1*1.6;t.fillStyle="rgba(150,205,255,.95)",t.beginPath(),t.ellipse(M,R,.38,.62,0,0,7),t.fill(),$e(t,"rgba(90,150,210,.8)",.2)}if(o&&o.sweat){let M=n+(s?3.4:3.7),R=i-3.4+Math.sin(r*5)*.15;t.fillStyle="rgba(160,210,255,.95)",t.beginPath(),t.moveTo(M,R-1),t.quadraticCurveTo(M+.8,R+.2,M,R+.8),t.quadraticCurveTo(M-.8,R+.2,M,R-1),t.fill(),$e(t,"rgba(90,150,210,.8)",.2)}if(o&&o.vein){let M=n+(s?-1.6:-3.4),R=i-3.7,v=1+Math.sin(r*9)*.12;t.strokeStyle="#d9302a",t.lineWidth=.38,t.lineCap="round";for(let[T,w]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.beginPath(),t.arc(M+T*.55*v,R+w*.55*v,.5*v,T<0?w<0?0:-Math.PI/2:w<0?Math.PI/2:Math.PI,T<0?w<0?Math.PI/2:0:w<0?Math.PI:Math.PI*1.5),t.stroke()}t.beginPath(),t.moveTo(n+(s?3.1:2.9),i+1.9),t.quadraticCurveTo(n+(s?3.3:3.1),i+2.8,n+(s?3.1:2.8),i+3.6),$e(t,Te(a,.13),.3)}function Bd(t,e,n,i,s,r){if(e.style==="bald")return;let a=e.style||"crop",h=e.hair,l=Te(h,-.22),o=s==="side",d=s==="back",c=(p=h)=>te(t,p,1),u=a==="long"||a==="wavy"||a==="braids",f=a==="bob";if(r==="back"){if(a==="afro"&&(t.beginPath(),t.ellipse(n-(o?1.2:0),i-1.4,6.9,6.5,0,0,7),c()),a==="curly"&&[[-5,-1],[5,-1],[-4,-4.8],[4,-4.8],[0,-5.8],[-5.4,2],[5.4,2]].forEach(([p,m])=>{t.beginPath(),t.arc(n+(o?p*.8-1:p),i+m,2.2,0,7),c()}),u||f){let p=u?12:5.6;o?(t.beginPath(),t.moveTo(n-3,i-4),t.lineTo(n-4.6,i+p),t.lineTo(n+.8,i+p-.4),t.lineTo(n+1.4,i),t.closePath(),c()):(t.beginPath(),t.moveTo(n-5,i-3),t.lineTo(n-5.4,i+p),t.quadraticCurveTo(n,i+p+1,n+5.4,i+p),t.lineTo(n+5,i-3),t.closePath(),c())}(a==="pony"||a==="topknot")&&(o?(t.beginPath(),t.ellipse(n-5.2,i+3.4,1.9,4.6,.3,0,7),c()):d&&(t.beginPath(),t.ellipse(n,i+4.6,1.9,5,0,0,7),c()));return}if(d){t.beginPath(),t.ellipse(n,i-.2,4.7,5.2,0,0,7),c(),a==="bun"&&(t.beginPath(),t.arc(n,i-5.6,2.5,0,7),c()),t.fillStyle="rgba(255,255,255,.16)",t.beginPath(),t.ellipse(n-1.4,i-3,1.8,1,-.3,0,7),t.fill();return}let g=a==="buzz",_=g?4.2:5.5;t.beginPath(),o?(t.moveTo(n-4.2,i+2.2),t.bezierCurveTo(n-5.2,i-5.2,n+3.6,i-6.2,n+4,i-1.8),t.lineTo(n+3.7,i-2),t.quadraticCurveTo(n+1.6,i-3.5,n-.6,i-2.4),t.lineTo(n-2.2,i+.2),t.lineTo(n-2.6,i+2.4)):(t.moveTo(n-4.5,i+1.2),t.bezierCurveTo(n-5.3,i-_-.3,n+5.3,i-_-.3,n+4.5,i+1.2),t.lineTo(n+4,i-.9),t.quadraticCurveTo(n+1.6,i-(g?3.7:3.4),n-.8,i-(g?3.4:3)),t.quadraticCurveTo(n-3.3,i-2.6,n-4,i-.9)),t.closePath(),c(),g&&(t.globalAlpha=.35,t.fillStyle=Te(h,-.5),t.fill(),t.globalAlpha=1),a==="bun"&&(t.beginPath(),t.arc(n-(o?2.8:0),i-6.1,2.5,0,7),c(),t.beginPath(),t.arc(n-(o?2.8:0),i-6.1,1.2,0,7),$e(t,l,.35)),(a==="afro"||a==="curly")&&[[-3.8,-3.6],[-1.4,-4.8],[1.4,-4.8],[3.8,-3.6]].forEach(([p,m])=>{t.beginPath(),t.arc(n+(o?p*.7-1:p),i+m,1.9,0,7),c()}),!g&&a!=="afro"&&(t.beginPath(),t.moveTo(n+(o?1.2:-2.1),i-4.6),t.quadraticCurveTo(n+(o?2.4:0),i-5.4,n+(o?3.2:1.4),i-3.5),$e(t,Te(h,.34),.5)),t.fillStyle="rgba(255,255,255,.16)",t.beginPath(),t.ellipse(n-1.4+(o?1:0),i-4.1,1.8,.8,-.25,0,7),t.fill(),u&&!o&&[-1,1].forEach(p=>{t.beginPath(),t.moveTo(n+p*4.2,i-1),t.quadraticCurveTo(n+p*5.6,i+4,n+p*5.2,i+9),t.lineTo(n+p*3.6,i+7),t.quadraticCurveTo(n+p*4.4,i+3,n+p*3.6,i),t.closePath(),c()}),e.hair2&&(t.beginPath(),t.moveTo(n-3.4,i-3.8),t.quadraticCurveTo(n-1,i-5.6,n+1.8,i-4.4),$e(t,e.hair2,.9))}function mx(t,e,n,i,s){let r=e.beardColor||e.hair;t.beginPath(),s?(t.moveTo(n-1.4,i+.4),t.bezierCurveTo(n-1.6,i+3.4,n-.2,i+6.2,n+2.4,i+6.1),t.bezierCurveTo(n+4.3,i+5.8,n+4.7,i+3.8,n+4.1,i+2.4),t.lineTo(n+3.4,i+2.7),t.quadraticCurveTo(n+1.8,i+3.5,n+.4,i+1.9),t.closePath()):(t.moveTo(n-4.2,i-.5),t.bezierCurveTo(n-4.7,i+3.4,n-3.2,i+6.4,n,i+6.8),t.bezierCurveTo(n+3.2,i+6.4,n+4.7,i+3.4,n+4.2,i-.5),t.lineTo(n+3.4,i+.9),t.quadraticCurveTo(n+3,i+2.6,n+1.8,i+2.9),t.quadraticCurveTo(n,i+2.4,n-1.8,i+2.9),t.quadraticCurveTo(n-3,i+2.6,n-3.4,i+.9),t.closePath()),te(t,r,.9),t.fillStyle="rgba(255,255,255,.1)",t.beginPath(),t.ellipse(n-1.4,i+5,1.8,.7,-.2,0,7),t.fill(),t.fillStyle=Te(e.skin,.08),t.beginPath(),t.ellipse(n+(s?2.7:0),i+3.5,s?1.1:1.9,.95,0,0,7),t.fill()}function gx(t,e,n,i,s){let r=e.beardColor||e.hair,a=n+(s?2.7:0);t.beginPath(),s?(t.moveTo(a-.6,i+2.6),t.quadraticCurveTo(a+1.2,i+2.4,a+1.6,i+3.1),t.quadraticCurveTo(a+.2,i+3.1,a-.6,i+2.9)):(t.moveTo(n,i+2.7),t.quadraticCurveTo(n-1.4,i+2.2,n-2.6,i+3.2),t.quadraticCurveTo(n-1.4,i+3.2,n,i+2.95),t.quadraticCurveTo(n+1.4,i+3.2,n+2.6,i+3.2),t.quadraticCurveTo(n+1.4,i+2.2,n,i+2.7)),t.closePath(),te(t,r,.5)}function yx(t,e,n,i,s){t.save(),t.translate(Math.round(e*2)/2,Math.round(n*2)/2),t.scale(.93,.93);let r=i.moving,a=r?Math.sin(i.walk):0,h=i.dir,l=h==="left"||h==="right",o=h==="left"?-1:1,d=h==="up",c=i.top==="buttonup"?"shirt":i.top||"shirt",u=i.bottom||"pants",f=i.bodyW??(i.build==="slim"?.92:i.build==="sturdy"?1.1:1),g=i.skin,_=i.acc,p=i.accent||"#c4463c",m=i.shirt||"#8fc9e8",M=i.shirt2||"#fff6ea",R=i.pants||"#4a3b3f",v=i.shoes||"#3b2f33",T=c==="dress",w=u==="skirt"||T,C=dx,x=r?-Math.abs(Math.cos(i.walk))*1.1:Math.sin(s*2+i.id)*.3;t.fillStyle="rgba(70,45,55,.24)",t.beginPath(),t.ellipse(0,1,9.4*f,3,0,0,7),t.fill(),i.sitting&&t.translate(0,6),t.translate(0,x);let E=-22.5,A=-36.4,b=-25.2;[-1,1].forEach(q=>{let ee=r?Math.max(0,q*a)*2.2:0,we=l?0:q*2.5*f,Oe=l?q*a*5:q*2.6*f+(r?q*0:0),Ce=-2.4-ee;qs(t,we,E+1,Oe,Ce,w&&!i.tights?3.2:4.4*(u==="joggers"?1.05:1),w?i.tights||g:R,w?1.4:1.6),!w&&u!=="shorts"&&(t.beginPath(),t.moveTo(we,E+4),t.lineTo(Oe*.98,Ce-3),$e(t,Te(R,.22),.3)),u==="shorts"&&qs(t,Oe,Ce-5,Oe,Ce,3.2,g,1.4);let Xe=Oe+(l?o*1.5:0),Qe=Ce+1.4-ee*0;i.shoeStyle==="boot"?(gt(t,Xe-2.5,Qe-4.4,5,5,1.4),te(t,v,1),t.beginPath(),t.ellipse(Xe+(l?o*1.3:0),Qe+.6,3.5,1.6,0,0,7),te(t,Te(v,.25),1)):(t.beginPath(),t.ellipse(Xe,Qe,l?3.7:3,1.8,0,0,7),te(t,v,1),t.fillStyle="rgba(255,255,255,.22)",t.beginPath(),t.ellipse(Xe-.6,Qe-.7,1.5,.5,0,0,7),t.fill())}),t.beginPath(),t.moveTo(-1.9,-39.8),t.lineTo(-1.9,A+.6),t.lineTo(1.9,A+.6),t.lineTo(1.9,-39.8),t.closePath(),te(t,g,1),t.fillStyle="rgba(110,60,50,.22)",t.beginPath(),t.ellipse(0,-38.4,2,1,0,0,7),t.fill();let I=c==="tank"||c==="dress"?g:m,B=c==="tee"||c==="tank"||T&&!i.sleeves,D=c==="blazer"?M:null,V=q=>{let ee=i.arms&&(q>0?i.arms.R:i.arms.L),we,Oe;return ee?(we=l?o*Math.abs(ee[0])*1:ee[0]*1.15,Oe=Math.max(-47,A+1+(ee[1]+17)*1.4)):l?(we=q*a*4.2*-1+o*.6,Oe=-25.2+(r?-Math.abs(a)*.8:0)):(we=q*(8.6*f+.3)+(r?-q*a*.6:0),Oe=-25.6+(r?-q*a*1.4:0)),[we,Oe]},Z=q=>{let[ee,we]=V(q),Oe=l?0:q*6.9*f,Ce=A+1.6,Xe=Oe+(ee-Oe)*.52,Qe=Ce+(we-Ce)*.52+F(ee,Oe);B?(qs(t,Oe,Ce,Xe,Qe,3.9,I,1.5),qs(t,Xe,Qe,ee,we,3,g,1.4)):(qs(t,Oe,Ce,ee,we,3.7,I,1.5),D&&qs(t,ee-(ee-Oe)*.1,we-(we-Ce)*.1,ee,we,3.8,D,1.3)),t.beginPath(),t.arc(ee,we+.9,1.7,0,7),te(t,g,1)},F=(q,ee)=>0;l&&Z(-o);let ie=(l?4.5:7)*f,X=(l?4.3:6.2)*f,j=(l?3.9:T||w?4.8:5.4)*f,U=(l?4.4:6)*f,J=c==="blazer"||c==="cardigan"?-20.5:c==="labcoat"?-13.2:c==="track"?-21.6:c==="sweater"||c==="turtleneck"?-22.2:-22.6,oe=q=>{t.beginPath(),t.moveTo(-ie+1.6,A-.7),t.quadraticCurveTo(-ie,A-.7,-ie,A+1),t.lineTo(-X,-31),t.lineTo(-j,b),t.lineTo(-U-(c==="blazer"?.6:c==="labcoat"?1.6:0),q),t.lineTo(U+(c==="blazer"?.6:c==="labcoat"?1.6:0),q),t.lineTo(j,b),t.lineTo(X,-31),t.lineTo(ie,A+1),t.quadraticCurveTo(ie,A-.7,ie-1.6,A-.7),t.quadraticCurveTo(0,A-2.1,-ie+1.6,A-.7),t.closePath()};if(w&&!i.sitting){let q=T?-9.5:-12.5,ee=T?8.6:7.8;t.beginPath(),t.moveTo(-U,E-.8),t.lineTo(U,E-.8),t.lineTo(ee*f*(l?.6:1),q),t.quadraticCurveTo(0,q+1.3,-ee*f*(l?.6:1),q),t.closePath(),te(t,T?m:R,1),t.fillStyle="rgba(255,255,255,.14)",t.fillRect(-ee*f*.7,q-1.3,ee*1.4*f,.8)}let Ve=c==="vest"||c==="cardigan"?M:m;if(oe(T?E-1:J),te(t,Ve,1.1),!T&&!w&&!d&&c!=="blazer"&&c!=="sweater"&&!l&&(t.fillStyle=Te(R,.1),t.fillRect(-U+.3,-24.2,(U-.3)*2,1.6),t.fillStyle="#c9b28a",t.fillRect(-.8,-24.1,1.6,1.4)),l||(t.fillStyle="rgba(255,255,255,.2)",t.beginPath(),t.ellipse(-2.6,-33,2,3.2,0,0,7),t.fill()),!d&&!l){if(c==="blazer")t.beginPath(),t.moveTo(-2.4,A-.6),t.lineTo(0,-28.5),t.lineTo(2.4,A-.6),t.closePath(),te(t,M,.8),[-1,1].forEach(q=>{t.beginPath(),t.moveTo(q*2.5,A-.7),t.lineTo(q*.2,-27.8),t.lineTo(q*1.4,-24.6),t.lineTo(q*5.6,-25.6),t.lineTo(q*6.2,-32),t.lineTo(q*4.4,A),t.closePath(),te(t,Te(m,.12),.8)}),t.fillStyle="#c9b28a",[-24.6,-21.8].forEach(q=>{t.beginPath(),t.arc(0,q+2,.5,0,7),t.fill()}),gt(t,2.4,-31.8,2.8,.7,.3),t.fillStyle=M,t.fill();else if(c==="sweater"){t.fillStyle=Te(m,-.2),t.fillRect(-U,-24.2,U*2,2.4);for(let q=-U+1;q<U;q+=1.6)t.fillStyle="rgba(0,0,0,.08)",t.fillRect(q,-24.2,.35,2.4);t.beginPath(),t.moveTo(-3.2,A-.6),t.lineTo(0,-33.4),t.lineTo(3.2,A-.6),t.closePath(),te(t,M,.7),t.beginPath(),t.ellipse(0,A-.8,3.4,1.1,0,0,Math.PI),$e(t,Te(m,.3),.9)}else if(c==="vest")[-1,1].forEach(q=>{t.beginPath(),t.moveTo(q*2.3,A-.6),t.lineTo(q*.4,-22.4),t.lineTo(q*5.9,-22.4),t.lineTo(q*5.1,-30),t.lineTo(q*6.8,A+1),t.lineTo(q*4.8,A-.6),t.closePath(),te(t,m,.85)}),t.beginPath(),t.moveTo(-2.6,A-.6),t.lineTo(0,-35),t.lineTo(2.6,A-.6),t.lineTo(1.1,A+.6),t.lineTo(0,A+.2),t.lineTo(-1.1,A+.6),t.closePath(),te(t,"#fffaf2",.6),t.beginPath(),t.moveTo(0,-35.2),t.lineTo(.9,-32.4),t.lineTo(0,-27.6),t.lineTo(-.9,-32.4),t.closePath(),te(t,i.tie||"#a24a3c",.6);else if(c==="cardigan"){t.beginPath(),t.moveTo(-3.2,A-.6),t.lineTo(0,-31.5),t.lineTo(3.2,A-.6),t.closePath(),te(t,M,.6),[-1,1].forEach(q=>{t.beginPath(),t.moveTo(q*2.2,A-.6),t.lineTo(q*1,J),t.lineTo(q*(U+.3),J),t.lineTo(q*j,b),t.lineTo(q*X,-31),t.lineTo(q*ie,A+1),t.quadraticCurveTo(q*ie,A-.7,q*(ie-1.6),A-.7),t.closePath(),te(t,m,.9),t.fillStyle=Te(m,-.18),t.fillRect(q>0?1:-1.8,J-1.8,.8,1.8)});for(let q of[-32,-28,-24.6])t.beginPath(),t.arc(1.1,q,.45,0,7),te(t,Te(m,.3),.3)}else if(c==="labcoat"){t.beginPath(),t.moveTo(-2.6,A-.6),t.lineTo(0,-29),t.lineTo(2.6,A-.6),t.closePath(),te(t,M,.6),[-1,1].forEach(q=>{t.beginPath(),t.moveTo(q*2.6,A-.7),t.lineTo(q*.2,-27),t.lineTo(q*1.6,-24.4),t.lineTo(q*5.8,-26.6),t.lineTo(q*6.2,-33),t.lineTo(q*4.6,A),t.closePath(),te(t,Te(m,.02),.8),gt(t,q*3.4-1.9,-21.6,3.8,3.6,.6),$e(t,Te(m,.32),.55)}),t.beginPath(),t.moveTo(0,-27),t.lineTo(0,J),$e(t,Te(m,.28),.45);for(let q of[-25,-21.5,-18])t.beginPath(),t.arc(0,q,.5,0,7),te(t,Te(m,.28),.3);gt(t,-4.6,-30.6,1.6,3,.4),te(t,p||"#3b6ea8",.4)}else if(c==="turtleneck"){gt(t,-2.7,A-2.5,5.4,3.2,1.3),te(t,Te(m,.12),.8);for(let q=-1;q<=1;q+=1)t.beginPath(),t.moveTo(q*1.3,A-2.3),t.lineTo(q*1.3,A+.4),$e(t,Te(m,.3),.25)}else c==="track"?(t.beginPath(),t.moveTo(0,A-.8),t.lineTo(0,J),$e(t,Te(m,.35),.5),gt(t,-2.6,A-2.2,5.2,2.2,1),te(t,Te(m,.1),.7),[-1,1].forEach(q=>{t.beginPath(),t.moveTo(q*(ie-.4),A+1),t.lineTo(q*(j-.2),J),$e(t,p,.9)}),t.fillStyle=M,t.fillRect(-U,J-1.6,U*2,1.6),t.beginPath(),t.moveTo(-U,J-1.6),t.lineTo(U,J-1.6),$e(t,Te(m,.3),.4)):c==="tee"?(t.beginPath(),t.ellipse(0,A-.3,2.8,1.3,0,0,Math.PI),te(t,Te(m,.16),.6)):c==="tank"?(t.beginPath(),t.ellipse(0,A,3.4,1.7,0,0,Math.PI),te(t,g,.7)):c==="dress"?(t.beginPath(),t.ellipse(0,A-.2,3.2,1.4,0,0,Math.PI),te(t,g,.7),t.fillStyle=Te(m,.25),t.fillRect(-j,b-.6,j*2,1.2)):([-1,1].forEach(q=>{t.beginPath(),t.moveTo(q*.3,A-.6),t.lineTo(q*3.2,A-.4),t.lineTo(q*1.4,-34),t.closePath(),te(t,Te(m,-.15),.6)}),t.beginPath(),t.moveTo(0,-34.4),t.lineTo(0,-23),$e(t,Te(m,.25),.4),[-31,-28,-25].forEach(q=>{t.fillStyle=Te(m,.35),t.beginPath(),t.arc(0,q,.3,0,7),t.fill()}));if(_==="tie"&&(c==="blazer"||c==="shirt"||c==="cardigan"||c==="labcoat")&&(t.beginPath(),t.moveTo(-.9,A-.5),t.lineTo(.9,A-.5),t.lineTo(.7,A+1.3),t.lineTo(-.7,A+1.3),t.closePath(),te(t,p,.5),t.beginPath(),t.moveTo(-.7,A+1.2),t.lineTo(.7,A+1.2),t.lineTo(1.2,-27.8),t.lineTo(0,-26.6),t.lineTo(-1.2,-27.8),t.closePath(),te(t,p,.6)),_==="bowtie"&&([-1,1].forEach(q=>{t.beginPath(),t.moveTo(0,A+.2),t.lineTo(q*2.8,A-.7),t.lineTo(q*2.8,A+1.1),t.closePath(),te(t,p,.5)}),t.beginPath(),t.arc(0,A+.2,.6,0,7),te(t,Te(p,.2),.4)),_==="necklace"||_==="beads")if(t.beginPath(),t.moveTo(-3.4,A+.1),t.quadraticCurveTo(0,A+(_==="beads"?7:5),3.4,A+.1),$e(t,_==="beads"?Te(p,0):p,_==="beads"?1.1:.55),_==="beads")for(let q=0;q<=8;q++){let ee=q/8,we=-3.4+6.8*ee,Oe=A+.1+2*3.5*ee*(1-ee)*2;t.beginPath(),t.arc(we,Oe,.55,0,7),te(t,q%3===1?"#f2e8d8":i.beadColor||"#8a5cc0",.25)}else t.beginPath(),t.arc(0,A+2.7,.75,0,7),te(t,p,.4);_==="brooch"&&(t.beginPath(),t.arc(-3.6,-33,1,0,7),te(t,p,.5),t.beginPath(),t.arc(-3.6,-33,.35,0,7),t.fillStyle="#fff",t.fill()),_==="scarf"&&(t.beginPath(),t.ellipse(0,A-.2,4.4,1.9,0,0,7),te(t,p,.8),gt(t,1.2,A,3,7.5,1.2),te(t,p,.8),t.fillStyle="rgba(255,255,255,.3)",t.fillRect(1.6,A+4,2.2,.7)),(i.lanyard!==!1||_==="lanyard")&&!T&&(!_||_==="lanyard")&&(t.beginPath(),t.moveTo(-1.9,A),t.lineTo(0,-29.4),t.lineTo(1.9,A),$e(t,_==="lanyard"?p:i.lanyardColor||"#c4463c",.7),gt(t,-1.4,-29.6,2.8,3.4,.5),te(t,"#fffaf2",.55),t.fillStyle="#4F91C7",t.fillRect(-1,-29.2,2,.7)),i.scarf&&(t.beginPath(),t.ellipse(0,A-.2,4.2,1.7,0,0,7),te(t,i.scarf,.9)),i.badge&&(t.beginPath(),t.arc(-3.4,-32.4,1.1,0,7),te(t,i.badge,.6))}else d&&(t.beginPath(),t.moveTo(-3,A-.5),t.quadraticCurveTo(0,A+.7,3,A-.5),$e(t,Te(m,.3),.5),c==="blazer"&&(t.beginPath(),t.moveTo(0,A+.8),t.lineTo(0,J),$e(t,Te(m,.3),.45)));!d&&i.packStyle==="messenger"&&(t.beginPath(),t.moveTo(l?-2:-5.6,A),t.lineTo(l?2.5:5.4,-24.6),$e(t,i.pack||"#9a653d",1.3),gt(t,l?1.4:3.2,-27.2,5.2,4.4,1),te(t,i.pack||"#9a653d",.9)),d&&i.packStyle&&i.packStyle!=="none"&&(gt(t,-5,-34,10,9,2.2),te(t,i.pack||"#9a653d",1)),l?Z(o):(Z(-1),Z(1));let Le=l&&o<0;t.save(),Le&&t.scale(-1,1);{let q=zd[i.emote];q&&q.droop&&t.translate(0,q.droop*.5+Math.sin(s*1.5)*.12),i.emote==="frustrated"&&t.translate(0,-.2+Math.sin(s*14)*.18),i.emote==="joy"&&t.translate(0,-Math.abs(Math.sin(s*6))*.5)}let Ge=d?"back":l?"side":"front",z=l?.4:0;if(Bd(t,i,z,C,Ge,"back"),l?(t.beginPath(),t.ellipse(z-.8,C+.9,1,1.6,0,0,7),te(t,g,.8)):[-1,1].forEach(q=>{t.beginPath(),t.ellipse(q*4.2,C+.8,.9,1.5,0,0,7),te(t,g,.8)}),fx(t,z,C,d?"front":Ge),te(t,g,1.15),d||(t.fillStyle="rgba(120,70,60,.13)",t.beginPath(),t.ellipse(z+(l?-1:2.2),C+2.4,2.8,2.6,0,0,7),t.fill(),i.beard==="full"&&mx(t,i,z,C,l),px(t,i,z,C,l,s),(i.beard==="mustache"||i.beard==="full")&&gx(t,i,z,C,l),i.lines&&(t.beginPath(),t.moveTo(z+(l?3:3.6),C+.3),t.lineTo(z+(l?3.4:4),C+.9),t.moveTo(z+(l?2.8:3.4),C+.8),t.lineTo(z+(l?3.3:3.9),C+1.5),l||(t.moveTo(z-3.6,C+.3),t.lineTo(z-4,C+.9),t.moveTo(z-3.4,C+.8),t.lineTo(z-3.9,C+1.5)),$e(t,Te(g,.22),.28))),Bd(t,i,z,C,Ge,"front"),i.earrings&&!d){let q=l?[z-.8]:[4.2,-4.2];for(let ee of q)t.beginPath(),i.hoops?(t.arc(ee,C+4.1,1.7,0,7),$e(t,i.earrings,.55)):(t.arc(ee,C+2.7,.55,0,7),te(t,i.earrings,.4))}let K=i.hat,he=i.hatColor||"#e07a66";if(K&&K!=="none"&&(K==="cap"?(t.beginPath(),t.moveTo(z-4.6,C-1.6),t.bezierCurveTo(z-4.8,C-8.6,z+4.8,C-8.6,z+4.6,C-1.6),t.closePath(),te(t,he,1),d||(t.beginPath(),t.ellipse(z+(l?4.4:0),C-1.6,l?2.7:4,1,0,0,7),te(t,Te(he,.18),.8))):K==="beanie"?(t.beginPath(),t.moveTo(z-4.8,C-1.4),t.bezierCurveTo(z-5,C-9.6,z+5,C-9.6,z+4.8,C-1.4),t.closePath(),te(t,he,1),gt(t,z-4.9,C-2.8,9.8,2,.8),te(t,Te(he,-.25),.8)):K==="bucket"||K==="fedora"?(t.beginPath(),t.moveTo(z-4,C-2.4),t.lineTo(z-3.6,C-6.6),t.lineTo(z+3.6,C-6.6),t.lineTo(z+4,C-2.4),t.closePath(),te(t,he,1),t.beginPath(),t.ellipse(z,C-2.5,6.4,1.5,0,0,7),te(t,Te(he,.1),.9)):K==="headband"?(t.beginPath(),t.moveTo(z-4.3,C-1.8),t.quadraticCurveTo(z,C-7.4,z+4.3,C-1.8),$e(t,he,1.1)):K==="headphones"?(t.beginPath(),t.arc(z,C-.4,5.2,Math.PI*1.06,Math.PI*1.94),$e(t,he,1.1),d||[-1,1].forEach(q=>{gt(t,z+q*5.1-1,C-1.2,2,3.4,.8),te(t,he,.7)})):K==="crown"?(t.beginPath(),t.moveTo(z-3,C-5.4),t.lineTo(z-3.3,C-8.8),t.lineTo(z-1.4,C-6.8),t.lineTo(z,C-9.4),t.lineTo(z+1.4,C-6.8),t.lineTo(z+3.3,C-8.8),t.lineTo(z+3,C-5.4),t.closePath(),te(t,i.hatColor||"#EAB94E",.8)):K==="beret"&&(t.beginPath(),t.ellipse(z+1,C-5,5,2,-.12,0,7),te(t,he,1))),t.restore(),i.tag){let q=C-12+Math.sin(s*4)*1.2;t.beginPath(),t.moveTo(-3.4,q-3.4),t.lineTo(3.4,q-3.4),t.lineTo(0,q+1),t.closePath(),te(t,"#f28f7e",1)}t.restore()}var Js={adult:1.4,hs:.9,g68:.78,g35:.66,k2:.54},Il={adult:1.2,hs:1,g68:.86,g35:.74,k2:.6},jr=["down","up","left","right"],Kr=160,Zs=240,Qr=5,ea=4.6,yc=12;function Hd(t){let e=document.createElement("canvas");e.width=Kr*Qr,e.height=Zs*jr.length;let n=e.getContext("2d");return jr.forEach((i,s)=>{for(let r=0;r<Qr;r++)n.save(),n.translate(r*Kr+Kr/2,s*Zs+Zs-yc),n.scale(ea,ea),n.shadowColor="rgba(52,34,46,.35)",n.shadowBlur=2.2,n.shadowOffsetX=.5,n.shadowOffsetY=1.2,Ys(n,0,0,{...t,dir:i,moving:r>0,walk:r*Math.PI/2,sitting:!1},0),n.restore()}),e}var Gd=["math","ela","science","history","careers"];var ta=[{subject:"math",rect:{x:5,y:5,w:16,h:12}},{subject:"ela",rect:{x:35,y:5,w:16,h:12}},{subject:"science",rect:{x:5,y:27,w:16,h:12}},{subject:"history",rect:{x:35,y:27,w:16,h:12}},{subject:"careers",rect:{x:25,y:6,w:6,h:7}}],si=ta.map(t=>{let e=t.rect.y<20,n=t.rect.x+t.rect.w/2,i=e?t.rect.y+t.rect.h:t.rect.y;return{subject:t.subject,face:e?"S":"N",cx:n,cy:i,trigger:{x:n-1.2,y:e?i:i-.9,w:2.4,h:.9},approach:{x:n,y:e?i+1.6:i-1.6}}}),ki={cx:28,cy:0,trigger:{x:26.8,y:.45,w:2.4,h:.95},approach:{x:28,y:2.4}},xc=[{rect:{x:6,y:0,w:19,h:.6},face:"S"},{rect:{x:31,y:0,w:19,h:.6},face:"S"},{rect:{x:6,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:32,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:0,y:6,w:.6,h:32},face:"E"},{rect:{x:56-.6,y:6,w:.6,h:32},face:"W"},{rect:{x:6,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:36,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:6,y:39,w:14,h:.6},face:"S"},{rect:{x:36,y:39,w:14,h:.6},face:"S"},{rect:{x:5-.6,y:6,w:.6,h:10},face:"W"},{rect:{x:5-.6,y:28,w:.6,h:10},face:"W"},{rect:{x:51,y:6,w:.6,h:10},face:"E"},{rect:{x:51,y:28,w:.6,h:10},face:"E"}],Pn={gap:{x0:24,x1:32},tile:{x:28,y:43}},Vd=(t,e)=>t.flatMap(n=>e.map(i=>({kind:"table",x:n,y:i}))),vc=[{kind:"fountain",x:28,y:22},...[[23.5,7.5],[32.5,7.5],[23.5,36.5],[32.5,36.5],[7,19],[7,25],[49,19],[49,25],[23,14],[33,14],[23,30],[33,30]].map(([t,e])=>({kind:"tree",x:t,y:e})),...Vd([10,14,18],[20,24]),...Vd([38,42,46],[20,24]),...[[24.2,11],[31.8,11],[24.2,33],[31.8,33]].map(([t,e])=>({kind:"bench",x:t,y:e,rot:Math.PI/2})),{kind:"planter",x:25.2,y:18.2},{kind:"planter",x:30.8,y:18.2},{kind:"planter",x:25.2,y:25.8},{kind:"planter",x:30.8,y:25.8},...[[12,2.5],[20,2.5],[36,2.5],[44,2.5],[12,41.5],[44,41.5],[2.5,22],[53.5,22]].map(([t,e])=>({kind:"lamp",x:t,y:e}))],xx={tree:[1.2,1.2],bench:[.7,1.9],table:[1.9,1.9],fountain:[4.6,4.6],planter:[1.4,1.4],lamp:[.1,.1]};function vx(){let t=ta.map(e=>({...e.rect}));for(let e of xc)t.push(e.rect);for(let e of vc){let[n,i]=xx[e.kind];e.kind!=="lamp"&&t.push({x:e.x-n/2,y:e.y-i/2,w:n,h:i})}return t}var Wd=vx(),es=(t,e,n,i=0)=>e>t.x-i&&e<t.x+t.w+i&&n>t.y-i&&n<t.y+t.h+i;function Ll(t,e,n=.16){return t<.45||e<.45||t>56-.45?!0:e>44-.45?!(t>Pn.gap.x0&&t<Pn.gap.x1&&e<47):Wd.some(i=>es(i,t,e,n))}var ri=Array.from({length:44},(t,e)=>Array.from({length:56},(n,i)=>Wd.some(s=>es(s,i+.5,e+.5,.2))?"#":".").join("")),FS=ri.flatMap((t,e)=>t.split("").map((n,i)=>({c:n,x:i,y:e}))).filter(t=>t.c==="."&&t.x>=7&&t.x<=48&&t.y>=7&&t.y<=37&&!ta.some(e=>es(e.rect,t.x+.5,t.y+.5,0))),NS=ri.flatMap((t,e)=>t.split("").map((n,i)=>({c:n,x:i,y:e}))).filter(t=>t.c==="."&&(t.x<4||t.x>51||t.y<4||t.y>39));var na="#6d5a5f";var Ut=(t,e,n,i=!1)=>{let s=document.createElement("canvas");s.width=t,s.height=e;let r=s.getContext("2d");n(r,t,e);let a=new Yi(s);return a.colorSpace=Bt,a.anisotropy=8,i&&(a.wrapS=a.wrapT=Es),a},yt=(t,e,n,i,s,r)=>{t.beginPath(),t.roundRect(e,n,i,s,r)},ia=(t,e=3,n=na)=>{t.lineWidth=e,t.strokeStyle=n,t.lineJoin="round",t.stroke()},at=(t,e,n=3)=>{t.fillStyle=e,t.fill(),n&&ia(t,n)},xn=(t,e,n=0)=>{let i=Math.sin(t*127.1+e*311.7+n*74.7)*43758.5453;return i-Math.floor(i)},sa=(t,e,n,i,s,r=6)=>{t.save(),t.lineWidth=r,t.strokeStyle="rgba(255,255,255,.5)",t.beginPath(),t.moveTo(e+r,n+s-r),t.lineTo(e+r,n+r),t.lineTo(e+i-r,n+r),t.stroke(),t.strokeStyle="rgba(70,40,50,.22)",t.beginPath(),t.moveTo(e+i-r,n+r),t.lineTo(e+i-r,n+s-r),t.lineTo(e+r,n+s-r),t.stroke(),t.restore()},Xd=()=>Ut(256,256,t=>{for(let e=0;e<2;e++)for(let n=0;n<2;n++){let i=n*128,s=e*128;t.fillStyle=n+e&1?"#d4ebf5":"#e3f3f9",t.fillRect(i,s,128,128);let r=t.createLinearGradient(i,s,i+128,s+128);r.addColorStop(0,"rgba(255,255,255,.28)"),r.addColorStop(1,"rgba(60,90,110,.10)"),t.fillStyle=r,t.fillRect(i,s,128,128);for(let a=0;a<26;a++)t.fillStyle=a&1?"rgba(255,255,255,.55)":"rgba(80,110,130,.18)",t.fillRect(i+xn(n,e,a)*124,s+xn(e,n,a+40)*124,2.4,2.4)}t.strokeStyle="rgba(90,120,140,.45)",t.lineWidth=3,t.strokeRect(1.5,1.5,253,253),t.beginPath(),t.moveTo(128,0),t.lineTo(128,256),t.moveTo(0,128),t.lineTo(256,128),t.stroke()},!0),qd=()=>Ut(256,256,t=>{t.fillStyle="#9fd0e8",t.fillRect(0,0,256,256);for(let e=0;e<220;e++)t.fillStyle=e&1?"rgba(255,255,255,.3)":"rgba(50,108,158,.14)",t.fillRect(xn(e,1)*256,xn(e,2)*256,3,3);for(let[e,n,i]of[[0,18,"#EAB94E"],[22,8,"#F28F7E"],[226,8,"#F28F7E"],[238,18,"#EAB94E"]])t.fillStyle=i,t.fillRect(e,0,n,256);t.fillStyle="rgba(255,255,255,.55)";for(let e=0;e<2;e++)t.beginPath(),t.moveTo(128,e*128+16),t.lineTo(160,e*128+64),t.lineTo(128,e*128+112),t.lineTo(96,e*128+64),t.closePath(),t.fill()},!0),ra=()=>Ut(512,540,(t,e,n)=>{t.fillStyle="#F4EBDB",t.fillRect(0,0,e,n);let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#FBF1DD"),i.addColorStop(1,"#EAF1E8"),t.fillStyle=i,t.fillRect(0,60,e,300);for(let r=0;r<e;r+=32)t.fillStyle="rgba(255,255,255,.55)",t.fillRect(r,60,14,300),t.fillStyle="rgba(110,120,110,.10)",t.fillRect(r+14,60,3,300);t.fillStyle="#FFF9F0",t.fillRect(0,0,e,40);let s=["#F28F7E","#EAB94E","#8FC9E8","#B8A8DA"];for(let r=0;r<8;r++)t.beginPath(),t.arc(32+r*64,42,30,0,Math.PI),at(t,s[r%4],3);t.fillStyle="#EAB94E",t.fillRect(0,340,e,22),t.fillStyle="rgba(255,255,255,.45)",t.fillRect(0,340,e,5),t.fillStyle="#A9CDB8",t.fillRect(0,362,e,150);for(let r=0;r<2;r++)yt(t,24+r*256,384,208,104,8),at(t,"#98C1A8",3),sa(t,24+r*256,384,208,104,5);t.fillStyle="#9A653D",t.fillRect(0,512,e,28),t.fillStyle="rgba(255,255,255,.3)",t.fillRect(0,512,e,4),t.strokeStyle=na,t.lineWidth=3,t.beginPath(),t.moveTo(0,361),t.lineTo(e,361),t.moveTo(0,512),t.lineTo(e,512),t.stroke()},!0),_x=(t,e)=>Ut(264,640,(n,i,s)=>{let r=n.createLinearGradient(0,0,i,s);r.addColorStop(0,t),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=t,n.fillRect(0,0,i,s),n.fillStyle="rgba(255,255,255,.22)",n.fillRect(0,0,i,34),yt(n,16,44,i-32,s-70,10),at(n,"rgba(0,0,0,.09)",3),sa(n,16,44,i-32,s-70,5);for(let a=0;a<5;a++)yt(n,46,66+a*17,i-92,7,3),n.fillStyle="rgba(60,40,50,.42)",n.fill();yt(n,78,252,108,42,6),at(n,"#FFF9F0",2.5),n.fillStyle="#6d5a5f",n.font="700 26px 'Trebuchet MS',sans-serif",n.textAlign="center",n.fillText(String(100+e),132,282),yt(n,i-62,330,18,74,8),at(n,"#EAB94E",2.5),e%2===0&&(n.beginPath(),n.arc(70,372,16,0,7),at(n,["#F28F7E","#EAB94E","#B8A8DA"][e%3],2.5));for(let a=0;a<4;a++)yt(n,46,s-96+a*12,i-92,5,2),n.fillStyle="rgba(60,40,50,.3)",n.fill();n.strokeStyle=na,n.lineWidth=6,n.strokeRect(0,0,i,s)}),_c=t=>Ut(320,576,(e,n,i)=>{e.fillStyle=t,e.fillRect(0,0,n,i);for(let s of[10,168])yt(e,s+14,84,118,150,8),at(e,"#A9DDF2",3),yt(e,s+24,96,30,120,6),e.fillStyle="rgba(255,255,255,.6)",e.fill(),yt(e,s+10,280,126,200,8),at(e,"rgba(0,0,0,.12)",3),sa(e,s+10,280,126,200,5);e.fillStyle="rgba(0,0,0,.22)",e.fillRect(150,0,20,i),e.fillStyle="#EAB94E",e.fillRect(0,i-44,n,44),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(0,i-44,n,6);for(let s of[128,192])e.beginPath(),e.arc(s,330,9,0,7),at(e,"#EAB94E",2.5);e.strokeStyle=na,e.lineWidth=6,e.strokeRect(0,0,n,i),e.beginPath(),e.moveTo(160,0),e.lineTo(160,i),e.stroke()}),bc=(t,e,n="#FFF9F0")=>Ut(512,128,(i,s,r)=>{yt(i,8,22,s-16,r-30,22),at(i,e,5),yt(i,22,34,s-44,r-54,14),i.fillStyle="rgba(255,255,255,.28)",i.fill(),i.fillStyle=n,i.font="800 58px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,s/2,r/2+4),i.strokeStyle=na,i.lineWidth=4;for(let a of[80,s-80])i.beginPath(),i.moveTo(a,0),i.lineTo(a,24),i.stroke()}),Ks=()=>Ut(320,400,(t,e,n)=>{yt(t,10,10,e-20,n-46,14),at(t,"#FFF9F0",5);let i=t.createLinearGradient(0,40,0,250);i.addColorStop(0,"#A9DDF2"),i.addColorStop(1,"#E9F7FC"),yt(t,40,40,e-80,230,6),t.fillStyle=i,t.fill(),ia(t,3),t.beginPath(),t.arc(220,96,26,0,7),at(t,"#F8D977",3),t.beginPath(),t.moveTo(44,260),t.lineTo(110,170),t.lineTo(170,260),t.closePath(),at(t,"#88B89A",3),t.beginPath(),t.moveTo(120,260),t.lineTo(210,150),t.lineTo(276,260),t.closePath(),at(t,"#5E9C72",3),t.strokeStyle="#FFF9F0",t.lineWidth=9,t.beginPath(),t.moveTo(e/2,40),t.lineTo(e/2,270),t.moveTo(40,155),t.lineTo(e-40,155),t.stroke(),yt(t,0,n-60,e,26,8),at(t,"#F1C887",4);for(let s of[-1,1]){let r=s<0?16:e-16;t.beginPath(),t.moveTo(r,14),t.quadraticCurveTo(r+s*-50,90,r+s*-34,250),t.lineTo(r+s*-34,300),t.lineTo(r,300),t.closePath(),at(t,"#F28F7E",3.5)}}),$d=()=>Ut(384,256,(t,e,n)=>{yt(t,4,4,e-8,n-8,14),at(t,"#C98B4D",6),yt(t,20,20,e-40,n-40,6),t.fillStyle="#E8C39A",t.fill(),ia(t,3);let i=["#FFF9F0","#F8D977","#8FC9E8","#A9DCC0","#EAA5B2","#B8A8DA"];[[36,34],[148,30],[256,40],[40,138],[156,130],[262,140]].forEach(([s,r],a)=>{t.save(),t.translate(s+40,r+40),t.rotate((xn(a,3)-.5)*.24),t.translate(-40,-40),t.shadowColor="rgba(50,30,40,.35)",t.shadowBlur=6,t.shadowOffsetY=4,yt(t,0,0,82,84,4),at(t,i[a],3),t.shadowColor="transparent";for(let h=0;h<4;h++)t.fillStyle="rgba(60,50,60,.4)",t.fillRect(10,18+h*14,50+h%2*12,4);t.beginPath(),t.arc(41,6,6,0,7),at(t,a&1?"#F28F7E":"#4F91C7",2),t.restore()})}),Yd=()=>Ut(320,300,(t,e,n)=>{yt(t,4,4,e-8,n-8,14),at(t,"#C98B4D",6),yt(t,22,22,e-44,n-44,8),t.fillStyle="#DDF0F6",t.fill(),ia(t,3);for(let i of[120,226])yt(t,26,i,e-52,14,4),at(t,"#DDAA68",3);[[70,120,1],[160,120,1.25],[250,120,.9],[110,226,1.1],[220,226,1]].forEach(([i,s,r])=>{t.beginPath(),t.moveTo(i-26*r,s-74*r),t.lineTo(i+26*r,s-74*r),t.lineTo(i+14*r,s-30*r),t.lineTo(i-14*r,s-30*r),t.closePath(),at(t,"#EAB94E",3),yt(t,i-6*r,s-30*r,12*r,18*r,3),at(t,"#EAB94E",3),yt(t,i-22*r,s-12*r,44*r,12*r,3),at(t,"#9A653D",3)}),t.strokeStyle="rgba(255,255,255,.7)",t.lineWidth=8,t.beginPath(),t.moveTo(44,40),t.lineTo(110,100),t.stroke()}),Zd=()=>Ut(256,256,t=>{t.beginPath(),t.arc(128,128,120,0,7),at(t,"#F28F7E",8),t.beginPath(),t.arc(128,128,96,0,7),at(t,"#FFF9F0",4);for(let e=0;e<12;e++){let n=e*Math.PI/6;t.strokeStyle="#4a3b3f",t.lineWidth=6,t.beginPath(),t.moveTo(128+Math.sin(n)*76,128-Math.cos(n)*76),t.lineTo(128+Math.sin(n)*90,128-Math.cos(n)*90),t.stroke()}t.strokeStyle="#4a3b3f",t.lineCap="round",t.lineWidth=9,t.beginPath(),t.moveTo(128,128),t.lineTo(160,88),t.stroke(),t.lineWidth=6,t.beginPath(),t.moveTo(128,128),t.lineTo(118,52),t.stroke(),t.beginPath(),t.arc(128,128,9,0,7),at(t,"#F28F7E",3)}),Sc=t=>Ut(256,320,(e,n,i)=>{if(yt(e,6,6,n-12,i-12,8),at(e,["#FFFFFF","#FFF7D8","#E9F3FF"][t%3],5),t%3===0)e.fillStyle="#8FC9E8",e.fillRect(30,30,196,130),ia(e,3),e.beginPath(),e.ellipse(90,90,44,28,0,0,7),e.fillStyle="#88B89A",e.fill(),e.beginPath(),e.ellipse(170,108,32,20,0,0,7),e.fill(),e.fillStyle="#F28F7E",e.fillRect(30,190,120,20),e.fillStyle="#B8A8DA",e.fillRect(30,226,90,16);else if(t%3===1){e.beginPath();for(let s=0;s<10;s++){let r=s*Math.PI/5-Math.PI/2,a=s&1?34:88;e.lineTo(128+Math.cos(r)*a,130+Math.sin(r)*a)}e.closePath(),at(e,"#EAB94E",4),e.fillStyle="#F28F7E",e.fillRect(40,250,176,22)}else e.fillStyle="#4F91C7",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillText("ABC",128,130),e.fillStyle="#F28F7E",e.fillRect(40,170,176,18),e.fillStyle="#88B89A",e.fillRect(40,208,120,16),e.fillStyle="#EAB94E",e.fillRect(40,246,150,16);e.beginPath(),e.arc(128,18,9,0,7),at(e,"#F28F7E",3)});var Jd=()=>Ut(128,128,(t,e,n)=>{let i=t.createRadialGradient(64,64,4,64,64,62);i.addColorStop(0,"rgba(52,34,46,.55)"),i.addColorStop(1,"rgba(52,34,46,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)}),Mc=()=>Ut(64,64,(t,e,n)=>{t.filter="blur(5px)",t.fillStyle="rgba(50,30,40,.9)",t.fillRect(12,12,40,40)}),Kd=t=>Ut(256,256,(e,n,i)=>{e.fillStyle=t,e.fillRect(0,0,n,i);for(let s=0;s<=n;s+=32)e.strokeStyle="rgba(60,40,50,.28)",e.lineWidth=4,e.beginPath(),e.moveTo(s,0),e.lineTo(s,i),e.stroke(),e.fillStyle="rgba(255,255,255,.16)",e.fillRect(s+6,0,10,i)}),jd=t=>Ut(264*t.length,640,e=>{t.forEach((n,i)=>e.drawImage(_x(n,i*3+1).image,i*264,0))},!0),Qd=()=>Ut(256,256,(t,e,n)=>{t.fillStyle="#B7D8A4",t.fillRect(0,0,e,n);for(let i=0;i<90;i++){let s=xn(i,5)*e,r=xn(i,9)*n,a=8+xn(i,2)*22;t.fillStyle=i&1?"rgba(255,255,255,.16)":"rgba(70,120,80,.10)",t.beginPath(),t.ellipse(s,r,a,a*.6,xn(i,4)*3,0,7),t.fill()}for(let i=0;i<140;i++){let s=xn(i,11)*e,r=xn(i,12)*n;t.strokeStyle=i&1?"rgba(255,255,255,.5)":"rgba(60,110,70,.35)",t.lineWidth=2,t.beginPath(),t.moveTo(s,r),t.lineTo(s+3,r-9),t.stroke()}},!0),aa=()=>Ut(256,256,(t,e,n)=>{t.fillStyle="#EBD9B8",t.fillRect(0,0,e,n);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let r=s*64+(i&1?32:0)-32,a=i*64;for(let h of[0,e])yt(t,r+h+2,a+2,60,60,6),t.fillStyle=s+i&1?"#F2E3C6":"#E6D2AE",t.fill(),t.strokeStyle="rgba(150,115,80,.5)",t.lineWidth=3,t.stroke(),sa(t,r+h+2,a+2,60,60,4)}for(let i=0;i<60;i++)t.fillStyle="rgba(255,255,255,.35)",t.fillRect(xn(i,3)*e,xn(i,8)*n,2.4,2.4)},!0),ef=(t,e,n="#FFF9F0")=>Ut(768,576,(i,s,r)=>{i.fillStyle="#F4EBDB",i.fillRect(0,0,s,r),yt(i,22,22,s-44,r-44,36),at(i,e,8),yt(i,52,52,s-104,r-104,24),i.fillStyle="rgba(255,255,255,.22)",i.fill();for(let a=0;a<6;a++)i.fillStyle="rgba(255,255,255,.18)",i.fillRect(70+a*112,70,44,r-140);i.fillStyle=n,i.font="800 140px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.strokeStyle="rgba(70,50,60,.35)",i.lineWidth=12,i.strokeText(t,s/2,r/2+6),i.fillText(t,s/2,r/2+6),sa(i,22,22,s-44,r-44,7)}),Tc=t=>Ut(1024,160,(e,n,i)=>{yt(e,8,10,n-16,i-20,22),at(e,"#F28F7E",6),yt(e,22,24,n-44,i-48,14),e.fillStyle="rgba(255,255,255,.2)",e.fill(),e.fillStyle="#FFF9F0",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(t,n/2,i/2+4);for(let s of[60,n-60]){e.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,h=r&1?9:22;e.lineTo(s+Math.cos(a)*h,i/2+Math.sin(a)*h)}e.closePath(),at(e,"#EAB94E",3)}});var wc=["#fde7d3","#fbdcc4","#f5cfa8","#f0c29b","#e3ad7f","#d9a074","#c58a5f","#a86f4f","#8d5a3e","#7a4a36","#5e3a2b","#4a2e24"],ts=["#2b2b33","#3a2a30","#5a3a35","#694a38","#9a653d","#b5563e","#c9773e","#e0b04e","#f1d98a","#d9d4cc","#8c8c96","#4F91C7","#b8a8da","#e8789a","#5e9c72","#e07a66"],Ec=["#3a2a30","#5a3a2a","#8a6a3a","#c98a3a","#4f8a5e","#4f91c7","#7a8794","#8173ae"],tn=["#4f91c7","#326c9e","#8fc9e8","#88b89a","#5e9c72","#a9dcc0","#eab94e","#f8d977","#f6b294","#f28f7e","#d9564a","#eaa5b2","#b8a8da","#8173ae","#c98569","#9a653d","#fff6ea","#9da7aa","#4a3b3f","#2b3a55"],Ac=["#fbf6ee","#313a3f","#d9564a","#4f91c7","#eab94e","#88b89a","#9a653d","#b8a8da"],vn=(...t)=>t.map(([e,n])=>({id:e,label:n})),la={hairStyle:vn(["crop","Short crop"],["buzz","Buzz cut"],["undercut","Undercut"],["spiky","Spiky"],["messy","Messy"],["sidebang","Side bangs"],["curtains","Curtains"],["pixie","Pixie"],["bob","Bob"],["long","Long"],["wavy","Wavy long"],["curly","Curly puffs"],["afro","Afro"],["pony","Ponytail"],["pigtails","Pigtails"],["twinbuns","Twin buns"],["bun","Bun"],["topknot","Top knot"],["braids","Braids"]),eyeShape:vn(["round","Round"],["oval","Oval"],["wide","Wide"],["sleepy","Sleepy"],["happy","Happy"],["lash","Lashes"]),brow:vn(["soft","Soft"],["thick","Thick"],["thin","Thin"],["arch","Arched"],["none","None"]),mouthStyle:vn(["smile","Smile"],["grin","Grin"],["smirk","Smirk"],["flat","Calm"],["o","Surprised"],["cat","Cat"]),glasses:vn(["none","None"],["round","Round"],["square","Square"],["cat","Cat-eye"],["half","Half-rim"],["sun","Sunglasses"]),hat:vn(["none","None"],["cap","Cap"],["beanie","Beanie"],["bucket","Bucket hat"],["beret","Beret"],["headband","Headband"],["bow","Bow"],["flower","Flower"],["crown","Crown"],["headphones","Headphones"],["catears","Cat ears"]),top:vn(["tee","T-shirt"],["hoodie","Hoodie"],["sweater","Sweater"],["jersey","Jersey"],["blazer","Blazer"],["dress","Dress"],["overalls","Overalls"],["vest","Vest"],["tank","Tank top"]),pattern:vn(["solid","Solid"],["stripes","Stripes"],["dots","Dots"],["plaid","Plaid"],["hearts","Hearts"],["stars","Stars"]),bottom:vn(["pants","Pants"],["joggers","Joggers"],["shorts","Shorts"],["skirt","Skirt"]),shoeStyle:vn(["sneaker","Sneakers"],["boot","Boots"],["sandal","Sandals"],["plain","Plain shoes"]),packStyle:vn(["pack","Backpack"],["messenger","Messenger bag"],["mini","Mini pack"],["none","No bag"]),build:vn(["slim","Slim"],["regular","Regular"],["sturdy","Sturdy"]),age:vn(["k2","Grades K-2"],["g35","Grades 3-5"],["g68","Grades 6-8"],["hs","High school"])},tf=["she/her","he/him","they/them"],js=()=>({name:"Student",pronouns:"they/them",age:"hs",skin:"#f0c29b",hairStyle:"bun",hair:"#5a3a35",hair2:null,eyeShape:"round",eyeColor:"#5a3a2a",brow:"soft",browColor:null,freckles:!1,mole:!1,nose:!1,blush:!0,mouthStyle:"smile",lip:"#8a4650",glasses:"round",glassColor:"#5b4048",hat:"none",hatColor:"#e07a66",earrings:null,scarf:null,badge:null,top:"hoodie",shirt:"#d9564a",shirt2:"#fff6ea",pattern:"solid",bottom:"pants",pants:"#4f5d75",shoeStyle:"sneaker",shoes:"#fbf6ee",packStyle:"pack",pack:"#8a5f6a",build:"regular",headSize:1});function Oi(t,e=11){return{id:e,age:t.age,skin:t.skin,hair:t.hair,hair2:t.hair2||void 0,style:t.hairStyle,shirt:t.shirt,shirt2:t.shirt2,top:t.top,pattern:t.pattern,bottom:t.bottom,pants:t.pants,eyeShape:t.eyeShape,eyeColor:t.eyeColor,brow:t.brow,browColor:t.browColor||void 0,freckles:t.freckles,mole:t.mole,nose:t.nose,blush:t.blush,mouthStyle:t.mouthStyle,lip:t.lip,glasses:t.glasses==="none"?!1:t.glasses,glassColor:t.glassColor,hat:t.hat==="none"?void 0:t.hat,hatColor:t.hatColor,earrings:t.earrings||void 0,scarf:t.scarf||void 0,badge:t.badge||void 0,shoeStyle:t.shoeStyle,shoes:t.shoes,packStyle:t.packStyle,pack:t.pack,build:t.build,headSize:t.headSize}}function pi(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var bt=(t,e)=>e[Math.floor(t()*e.length)],In=t=>la[t].map(e=>e.id);function ha(t,e="hs"){let n=bt(t,In("top")),i=t()<.28?bt(t,In("hat").filter(r=>r!=="none")):"none",s=t()<.3?bt(t,In("glasses").filter(r=>r!=="none")):"none";return{...js(),age:e,name:"",skin:bt(t,wc),hairStyle:bt(t,In("hairStyle")),hair:bt(t,ts),hair2:t()<.16?bt(t,ts):null,eyeShape:bt(t,In("eyeShape")),eyeColor:bt(t,Ec),brow:bt(t,In("brow").filter(r=>r!=="none")),freckles:t()<.22,mole:t()<.1,nose:t()<.3,blush:t()<.8,mouthStyle:bt(t,In("mouthStyle")),glasses:s,glassColor:bt(t,["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da"]),hat:i,hatColor:bt(t,tn),earrings:t()<.12?bt(t,["#eab94e","#fff6ea","#f28f7e"]):null,scarf:t()<.1?bt(t,tn):null,badge:t()<.12?bt(t,tn):null,top:n,shirt:bt(t,tn),shirt2:bt(t,tn),pattern:t()<.4?bt(t,In("pattern")):"solid",bottom:n==="dress"?"pants":bt(t,In("bottom")),pants:bt(t,tn),shoeStyle:bt(t,In("shoeStyle")),shoes:bt(t,Ac),packStyle:bt(t,In("packStyle")),pack:bt(t,tn),build:bt(t,In("build")),headSize:.94+t()*.12}}var Cc=t=>[t.skin,t.hairStyle,t.hair,t.top,t.shirt,t.pattern,t.hat,t.glasses,t.bottom,t.pants].join("|"),Sx=["black","dark brown","chestnut","brown","caramel","auburn","ginger","blond","platinum","silver","grey","blue","lavender","pink","green","coral"],Mx=["blue","navy","sky blue","sage green","green","mint","gold","yellow","peach","coral","red","pink","lilac","purple","terracotta","brown","cream","grey","charcoal","midnight blue"],Tx=t=>Sx[ts.indexOf(t)]??"colorful",oa=t=>Mx[tn.indexOf(t)]??"colorful";function ca(t){let e=[],n=(i,s)=>la[i].find(r=>r.id===s)?.label.toLowerCase()??s;return t.hat&&t.hat!=="none"&&e.push({key:"hat",phrase:`${oa(t.hatColor)} ${n("hat",t.hat)}`,noun:"hat"}),t.glasses&&t.glasses!=="none"&&e.push({key:"glasses",phrase:`${n("glasses",t.glasses)} glasses`,noun:"glasses"}),e.push({key:"hair",phrase:`${Tx(t.hair)} ${n("hairStyle",t.hairStyle)} hair`,noun:"hair"}),e.push({key:"top",phrase:`${t.pattern!=="solid"?t.pattern+" ":""}${oa(t.shirt)} ${n("top",t.top)}`,noun:t.top}),t.packStyle!=="none"&&e.push({key:"pack",phrase:`${oa(t.pack)} ${n("packStyle",t.packStyle)}`,noun:"bag"}),t.freckles&&e.push({key:"freckles",phrase:"freckles",noun:"freckles"}),t.earrings&&e.push({key:"earrings",phrase:"earrings",noun:"earrings"}),t.scarf&&e.push({key:"scarf",phrase:"scarf",noun:"scarf"}),e.push({key:"shoes",phrase:`${oa(t.shoes)==="colorful"?"":oa(t.shoes)+" "}${n("shoeStyle",t.shoeStyle)}`.trim(),noun:"shoes"}),e}var Ke=(t,e,n,i,s,r,a,h,l,o)=>({name:t,top:e,top_c:n,inner_c:i,bottom:s,bottom_c:r,shoes_c:a,acc:h,accent_c:l,legs:o}),je=(t,e,n,i,s)=>({name:t,style:e,color:n,accent:i,v:s}),Pc=[{id:"tanaka",num:110,name:"Mr. Hiroshi Tanaka",short:"Tanaka",subject:"Mathematics",room:"Room 112",age:52,gender:"M",skin:"#E2B98F",eye:"#2A1C12",brow:"#4A4541",build:{h:.97,w:.92},features:{glasses:"rect",glassesColor:"#3A3A3A",beard:"mustache",beardColor:"#5A5550",lines:!0},hair:[je("Classic side part","short","#5E5A57"),je("Slicked back","slick","#55514E"),je("Short crop","buzz","#6A6663"),je("Tousled weekend","pixie","#5E5A57"),je("Side part, silver streak","short","#8A8683")],outfits:[Ke("Grey vest & navy tie","vest","#6B6E73","#EEF2F5","pants","#2E3440","#2A1C14","tie","#1F3A68"),Ke("Navy blazer & striped shirt","blazer","#23304A","#DDE7F2","pants","#5B5F66","#2A1C14","tie","#8C2F39"),Ke("Oatmeal cardigan & bow tie","cardigan","#CDBB9A","#F6F3EC","pants","#4A4032","#3B2A1E","bowtie","#2E5E4E"),Ke("Pale blue button-up","buttonup","#BFD4EA","#BFD4EA","pants","#3C3F45","#1E1E1E","tie","#2D2D2D"),Ke("Pi-day sweater","sweater","#2F5D50","#2F5D50","pants","#34373D","#1E1E1E",null)],mannerisms:["Counts steps off on his fingers, always starting with the thumb","Small precise nods while a student talks","Straightens his tie before writing on the board","Pauses mid-sentence to let a pun land, then smiles at nobody"],tone:"Calm, slow and soft-spoken. Speaks in numbered steps. Fond of terrible math puns delivered with total seriousness.",voice:{pitch:.85,rate:.82},lines:{greet:"Good morning. Please be seated, and be rational.",teach:"Step one: isolate x. Step two: do not panic. Step three: check your work.",praise:"Excellent. That answer is... integral to the class.",warn:"I see a calculator under the desk. Its days are numbered.",bye:"Homework is problems one through twenty, odd only. Even you can do it."}},{id:"ayrissa",num:111,name:"Ms. Ayrissa",short:"Ayrissa",subject:"English & Creative Writing",room:"Room 220",age:36,gender:"F",skin:"#734633",eye:"#2A160E",brow:"#18100B",build:{h:1,w:1.03},features:{freckles:!0,earrings:"#D9D9D9",hoops:!0},hair:[je("Honey-highlight boho curls","curly","#17110E","#D8AE72"),je("Curly puff & orange headband","afro","#1E1510","#F0651C","puff"),je("Jet-black boho curls, middle part","curly","#120E0C"),je("Curtain-bang curls with honey pieces","curly","#17110E","#D8AE72"),je("Shoulder-length honey twist-out","curly","#1C1410","#C99A5E")],outfits:[Ke("Red kaftan top with gold embroidery","sweater","#A51F2E","#A51F2E","pants","#2E3A55","#1A1A1A","beads","#D9B45A"),Ke("Navy & white floral wrap dress","dress","#1E2A4A","#1E2A4A","none",void 0,"#E8E0D0",null,"#DCE6F2"),Ke("Stone cardigan & khaki joggers","cardigan","#BDB5A8","#EDE8E0","pants","#C8B89A","#F2F2F2","lanyard","#F0651C"),Ke("Tropical print wrap top & light denim","sweater","#ECE4D8","#ECE4D8","pants","#8FA7C7","#EDEDED","beads","#D98FA8"),Ke("Burnt-orange blazer & black tee","blazer","#C8561E","#1C1C1C","pants","#232323","#1A1A1A","necklace","#D4AF37")],makeup:[{lip:"#7A3E34"},{lip:"#8A4A3E"},{lip:"#6E3A36"},{lip:"#9A6A5A"},{lip:"#5E1E2E"}],mannerisms:["Rests her chin on her fist when she's really listening","Her smile shows up before the answer does","Flips her curls over one shoulder before reading a poem out loud","Hypes up every raised hand: 'Yes! Say that!'"],tone:"High energy and warm. Talks fast, laughs easily and turns every answer into a celebration. Big on 'my brilliant people' and making sure every voice gets heard.",voice:{pitch:1.18,rate:1.14},lines:{greet:"Good morning, my brilliant people! Pens out, energy up, let's WRITE!",teach:"A metaphor isn't decoration, it's a door. Open it! What's behind yours?",praise:"YES! Say that again, louder, for the people in the back!",warn:"Uh-uh, phones down. Your story is way more interesting than that screen.",bye:"Journal tonight, even one line. Your voice matters. Love you, bye!"}},{id:"okafor",num:112,name:"Ms. Adaeze Okafor",short:"Okafor",subject:"Chemistry",room:"Lab 204",age:38,gender:"F",skin:"#6B4226",eye:"#3B2314",brow:"#1A120D",build:{h:1.06,w:.98},features:{glasses:"cateye",glassesColor:"#7A1F2B",earrings:"#D4AF37"},hair:[je("Locs in a high bun","bun","#1B1411","#D4AF37"),je("Waist-length box braids","long","#1B1411","#D4AF37","braids"),je("Natural afro","afro","#221815"),je("Sleek low ponytail","pony","#1B1411"),je("Burgundy twist-out","curly","#4A1C24")],outfits:[Ke("Lab coat over teal turtleneck","labcoat","#F4F6F6","#1F6F6B","pants","#2B2D33","#1C1C1C",null,"#1F6F6B"),Ke("Mustard blazer & cream blouse","blazer","#C99A2E","#F2E8D5","pants","#3A2E28","#5A3A22","necklace","#D4AF37"),Ke("Kente-trim wrap dress","dress","#1E4E79","#1E4E79","none",void 0,"#E0A526","brooch","#E0A526"),Ke("Emerald sweater & pencil skirt","sweater","#1F6A4A","#1F6A4A","skirt","#2A2A2E","#1C1C1C","lanyard","#C0392B","#2A1A12"),Ke("Friday cardigan & periodic-table tee","cardigan","#6D2E46","#ECECEC","pants","#4C6A92","#F2F2F2",null)],makeup:[{lip:"#8C3B3B"},{lip:"#6E1E3A"},{lip:"#9A4E3A"},{lip:"#A0624A"},{lip:"#9E1B22"}],mannerisms:["Pushes her glasses up with one knuckle before making a point","Taps a marker twice against her palm when waiting for an answer","Raises one eyebrow instead of saying 'really?'","Stands perfectly still, then moves with purpose"],tone:"Precise and dry. Short sentences, exact numbers, a deadpan joke about once a lesson. Never raises her voice; lowers it instead.",voice:{pitch:.95,rate:.92},lines:{greet:"Goggles on, bags under the bench. Good morning.",teach:"Sodium plus water. Watch the reaction, not me. I already know what happens.",praise:"Correct, to three significant figures. I'm impressed.",warn:"That is not a beaker of juice. Put it down. Slowly.",bye:"Wash your hands. Twice. See you Thursday."}},{id:"obrien",num:113,name:"Mr. Declan O'Brien",short:"O'Brien",subject:"History",room:"Room 301",age:45,gender:"M",skin:"#F0C8AE",eye:"#5A7A4A",brow:"#8A3C1E",build:{h:1,w:1.14},features:{beard:"full",beardColor:"#8A3C1E",freckles:!0},hair:[je("Tousled copper","pixie","#9A4520"),je("Swept side part","short","#8A3C1E"),je("Tied-back 'historian bun'","bun","#8A3C1E"),je("Shoulder-length waves","bob","#9A4520"),je("Slicked for the museum trip","slick","#7A3418")],outfits:[Ke("Tweed blazer with elbow patches","blazer","#7A6A52","#E8E2D4","pants","#4A4238","#3B2616","tie","#5A2A1E"),Ke("Forest cardigan & plaid shirt","cardigan","#2F4A34","#A6463A","pants","#6B5A44","#3B2616",null),Ke("Burgundy sweater vest","vest","#6B1F2A","#EDE8DC","pants","#3A3A3A","#2A1A10","bowtie","#1F3A2A"),Ke("Rolled-sleeve oxford","buttonup","#E9E4D8","#E9E4D8","pants","#556B45","#3B2616","tie","#244060"),Ke("Cable-knit fisherman sweater","turtleneck","#DCD2BC","#DCD2BC","pants","#3E3A33","#3B2616",null)],mannerisms:["Spreads both arms wide when setting a scene","Leans in and drops to a stage whisper before a twist","Strokes his beard while listening","Rocks back on his heels after a punchline"],tone:"Theatrical storyteller. Big pauses, dramatic whispers, then a booming reveal. Treats every lesson like a campfire tale.",voice:{pitch:.75,rate:.95},lines:{greet:"Gather round, gather round! Today... we march on Rome.",teach:"Picture it. 1066. Mud to your ankles. Arrows in the air. And then...",praise:"Ha! A scholar among us! Rome would have made you a senator.",warn:"Ah-ah. The only revolution in this room is on page forty.",bye:"History waits for no one. Except you, on Monday. Off with ye!"}},{id:"haddad",num:114,name:"Mr. Karim Haddad",short:"Haddad",subject:"Geography & Careers",room:"CarryingCareers",age:41,gender:"M",skin:"#B98460",eye:"#3A2412",brow:"#16100C",build:{h:1.03,w:1.02},features:{beard:"full",beardColor:"#1A1410"},hair:[je("Neat short crop","short","#16100C"),je("Textured quiff","slick","#16100C"),je("Close buzz","buzz","#16100C"),je("Soft waves grown out","pixie","#1C1410"),je("Shaved clean","bald","#16100C")],outfits:[Ke("Olive field shirt","buttonup","#6A7048","#6A7048","pants","#C8B68E","#5A3A22",null),Ke("Navy sweater over collar","sweater","#23324E","#EAEAEA","pants","#6A6258","#3B2616",null),Ke("Charcoal suit & rust tie","blazer","#3A3C40","#F2F2F2","pants","#3A3C40","#1A1A1A","tie","#B0532E"),Ke("Camel cardigan","cardigan","#B8905A","#2E4A5A","pants","#2E2E30","#3B2616",null),Ke("Expedition vest","vest","#4A5A3A","#D8CFC0","pants","#5A4E3A","#5A3A22","scarf","#A83A2A")],mannerisms:["Strokes his beard slowly before answering","Points to places on an invisible map in the air","Waits a full three seconds of silence for you to think","Taps his compass watch when it's time to move on"],tone:"Patient, low and thoughtful. Asks more questions than he answers. Every sentence sounds like it has been considered twice.",voice:{pitch:.7,rate:.85},lines:{greet:"Welcome, travelers. Where in the world shall we begin today?",teach:"A river does not choose the easy path. It chooses the downhill one. Why?",praise:"Good. You didn't just answer. You thought. That is the difference.",warn:"The map will still be here if you stop throwing it.",bye:"Look at the sky on your walk home. Tell me which way the wind blew."}},{id:"park",num:115,name:"Ms. Chloe Park",short:"Park",subject:"Computer Science",room:"Lab 110",age:27,gender:"F",skin:"#F1D1B5",eye:"#2A1A12",brow:"#1A1210",build:{h:.92,w:.94},features:{glasses:"round",glassesColor:"#1A1A1A",earrings:"#7FD4E0"},hair:[je("Blunt bob with bangs","bob","#141014"),je("Space buns","bun","#141014","#8E5CE0"),je("Lavender-streak ponytail","pony","#141014","#B58CF0"),je("Long straight","long","#141014"),je("Teal-tipped pixie","pixie","#1E2A30")],outfits:[Ke("Oversized hoodie-sweater","sweater","#7A6AC8","#7A6AC8","skirt","#2A2A34","#F2F2F2","lanyard","#34C3A0","#1E1E26"),Ke("Pastel cardigan & tee","cardigan","#F2B8C6","#FFFFFF","pants","#4A6A9A","#F2F2F2","necklace","#7FD4E0"),Ke("Pinafore dress","dress","#2E4A6A","#F2F2F2","none",void 0,"#1A1A1A",null,"#F2C84A","#E8C8B0"),Ke("Hackathon track jacket","track","#1A1A24","#34C3A0","pants","#1A1A24","#34C3A0","lanyard","#34C3A0"),Ke("Mint button-up & suspender skirt","buttonup","#BFE8D8","#BFE8D8","skirt","#3A3A4A","#6A3A5A","bowtie","#6A3A5A","#E8C8B0")],makeup:[{lip:"#D0506A"},{lip:"#C07080"},{lip:"#D09088"},{lip:"#B0606A"},{lip:"#B8283A"}],mannerisms:["Pushes her giant glasses up with the back of her wrist","Fidgets with a keycap keychain while thinking","Double thumbs-up when your code compiles","Talks faster and faster until she catches herself, laughs, and restarts"],tone:"Quick, bubbly and nerdy. Lots of tech slang and tangents. Gets so excited she speeds up, then resets with a laugh.",voice:{pitch:1.35,rate:1.18},lines:{greet:"Hi hi hi! Okay, log in, we're debugging today and it's gonna be SO fun.",teach:"So a loop is just the computer going 'again? again? again?' until you tell it to stop.",praise:"It compiled?! First try?! Double thumbs up, you legend.",warn:"Mm, that's an infinite loop. Your laptop is crying. Ctrl+C, please.",bye:"Commit your work! Push it! Don't be the person who loses it. Bye!"}},{id:"larsen",num:116,name:"Dr. Ingrid Larsen",short:"Larsen",subject:"Biology",room:"Lab 206",age:60,gender:"F",skin:"#F3D6C6",eye:"#4F86B8",brow:"#B8AE9E",build:{h:1.02,w:1},features:{glasses:"round",glassesColor:"#B08A4A",lines:!0,earrings:"#9FC9E0"},hair:[je("Silver chignon","bun","#D8D2C4"),je("Chin-length bob","bob","#E0DACE"),je("Crown braid updo","bun","#D8D2C4","#9FC9E0"),je("Soft pixie","pixie","#E4DFD4"),je("Loose silver waves","long","#D0C9BA")],outfits:[Ke("Lab coat over lavender blouse","labcoat","#F7F7F5","#B9A6D6","skirt","#4A4E5A","#3A2E28","lanyard","#2E7D5B","#D8B8A8"),Ke("Moss cardigan","cardigan","#6A7F4A","#F2EEE4","pants","#5A4E40","#3A2E28","brooch","#C9A13B"),Ke("Botanical print dress","dress","#2E5E6A","#2E5E6A","none",void 0,"#2A2A2A","necklace","#E7C66A","#D8B8A8"),Ke("Fair Isle sweater","sweater","#9C3B3B","#9C3B3B","pants","#2E3A4A","#3A2E28",null,"#F2EEE4"),Ke("Field-trip vest & flannel","vest","#8A7A5A","#3E6A8A","pants","#4A4A3A","#5A3A22","scarf","#C9763B")],makeup:[{lip:"#C07A7A"},{lip:"#D0705A"},{lip:"#9A5A6A"},{lip:"#C8908A"},{lip:"#B02A36"}],mannerisms:["Peers over her glasses before asking a question she already knows the answer to","Holds up one finger: 'Ah, but...'","Cups her hands as if holding something alive when describing cells","Hums while she labels specimen jars"],tone:"Warm, grandmotherly and razor sharp. Unhurried and kind, with a Scandinavian bluntness that surprises people.",voice:{pitch:1.05,rate:.85},lines:{greet:"Good morning, little organisms. Let us see what's alive today.",teach:"Ah, but... why does the cell bother? Everything in nature is a bargain.",praise:"Very good. You think like a scientist now. Dangerous.",warn:"The frog has been through enough. Please stop waving it.",bye:"Go outside. Look at a leaf. That is your homework, and I will check."}},{id:"raman",num:117,name:"Mrs. Priya Raman",short:"Raman",subject:"English Literature",room:"Room 215",age:44,gender:"F",skin:"#A8703F",eye:"#2A160C",brow:"#1C120C",build:{h:.95,w:.97},features:{glasses:"half",glassesColor:"#6A4A8A",earrings:"#E6C35C"},hair:[je("Long center-part","long","#16100C"),je("Low braided bun","bun","#16100C","#E6C35C"),je("Single long braid","pony","#1A120E","#B83A5A"),je("Soft shoulder waves","bob","#24160F"),je("Loose curls, henna tint","curly","#4A2418")],outfits:[Ke("Plum cardigan & floral blouse","cardigan","#5E2E5A","#F2D8C8","skirt","#2E2A40","#3A2418","scarf","#D9A441","#6B4428"),Ke("Saffron kurta dress","dress","#D98E2B","#D98E2B","none",void 0,"#8A1F3A","necklace","#8A1F3A"),Ke("Teal turtleneck & long skirt","turtleneck","#1E6A70","#1E6A70","skirt","#5A4632","#2A1A12","necklace","#E6C35C","#5A4632"),Ke("Rose blazer & ivory shell","blazer","#C77A8A","#F5EFE6","pants","#3B3346","#E6C35C","brooch","#E6C35C"),Ke("Book-club sweater","sweater","#8A9A5B","#8A9A5B","skirt","#4A3A2A","#2A1A12","scarf","#B83A5A","#3A2A20")],makeup:[{lip:"#9A4A5A"},{lip:"#8A5060"},{lip:"#8E2A3A"},{lip:"#8A3A2A"},{lip:"#9A6458"}],mannerisms:["Hugs her book to her chest when a passage moves her","Tilts her head and smiles before gently disagreeing","Looks over her half-moon glasses at the whole room","Quotes a line of poetry to end almost any argument"],tone:"Gentle, lyrical and encouraging. Long, flowing sentences, lots of 'dear' and 'lovely'. Corrects you so kindly you thank her for it.",voice:{pitch:1.1,rate:.88},lines:{greet:"Good morning, my dears. Open your books to where the story left us.",teach:"Notice how the rain falls just as she says goodbye. Nothing in a novel is an accident.",praise:"Oh, that's lovely. Write that down before it flies away.",warn:"Darling, 'it was good' is not an essay. Tell me why it was good.",bye:"Read chapter nine tonight, and let it keep you up a little."}}],wx=t=>{let e=2166136261;for(let n of t)e^=n.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0},Ex=t=>()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},Ax=t=>{let e=new Date(t.getFullYear(),0,1),n=Math.floor((+t-+e)/864e5/7);return`${t.getFullYear()}-${n}`};function Rc(t,e,n=new Date){let i=Ex(wx(t+e+Ax(n))),s=[0,1,2,3,4];for(let h=4;h>0;h--){let l=Math.floor(i()*(h+1));[s[h],s[l]]=[s[l],s[h]]}let r=n.getDay(),a=r===6?0:r===0?1:r-1;return s[a]}var Cx={short:"crop",slick:"crop",pixie:"crop",buzz:"buzz",bun:"bun",bob:"bob",long:"long",pony:"pony",afro:"afro",curly:"curly",bald:"bald"},Rx={rect:"square",round:"round",cateye:"cat",half:"half"};function nf(t,e=new Date){let n=t.hair[Rc(t.id,"hair",e)],i=t.outfits[Rc(t.id,"outfit",e)],s=t.features,r=t.makeup?.[Rc(t.id,"makeup",e)],a={id:t.num,age:"adult",skin:t.skin,hair:n.color,hair2:n.accent&&n.style!=="afro"?n.accent:void 0,style:Cx[n.style]??"crop",shirt:i.top_c,shirt2:i.inner_c,top:i.top,bottom:i.bottom==="none"?"pants":i.bottom,pants:i.bottom_c??"#3a3a44",tights:i.legs,shoes:i.shoes_c,acc:i.acc??void 0,accent:i.accent_c,eyeColor:t.eye,browColor:t.brow,brow:t.gender==="M"?"thick":"soft",glasses:s.glasses?Rx[s.glasses]??"round":!1,glassColor:s.glassesColor,earrings:s.earrings,hoops:s.hoops,beard:s.beard,beardColor:s.beardColor,freckles:s.freckles,lines:s.lines||t.age>50,bodyW:t.build.w,hScale:t.build.h,lip:r?.lip,lanyard:i.acc==="lanyard",tag:!1};return n.style==="afro"&&n.accent&&(a.hat="headband",a.hatColor=n.accent),a}var OS=Object.fromEntries(Pc.map(t=>[t.id,t]));var Px=["cheerful","shy","sporty","nerdy","artsy","funny","curious","bossy","dreamy","kind"],sf=["Maya","Marcus","Priya","Leo","Amara","Diego","Sofia","Kenji","Zara","Eli","Nadia","Tobias","Imani","Mateo","Hana","Omar","Lucia","Jonah","Anika","Caleb","Mei","Ravi","Talia","Felix","Yara","Ben","Chloe","Dev","Esme","Finn","Grace","Hugo","Isla","Jamal","Keira","Liam","Mira","Noah","Olive","Pablo","Quinn","Rosa","Sam","Tessa","Uma","Victor","Willa","Xavier","Yusuf","Zoe","Aiden","Bella","Cyrus","Daria","Emil","Farah","Gus","Harper"],rf=["Chen","Reed","Patel","Okafor","Santos","Nguyen","Kim","Haddad","Rivera","Brooks","Ivanov","Tanaka","Mensah","Larsen","Cruz","Adeyemi","Fischer","Ibrahim","Kowalski","Lopez","Morales","Novak","Osei","Park","Quintero","Rossi","Singh","Torres","Underwood","Vega","Walker","Yamada","Zhang","Abbott","Bishop","Castillo","Dalton","Ellis","Foster","Grant"],af={young:["dinosaurs","building with blocks","drawing animals","jumping rope","bugs and butterflies","playing tag","stickers","toy trains","singing songs","baking cookies"],mid:["soccer","robotics club","drawing comics","chess","baking","birdwatching","skateboarding","minecraft builds","magic tricks","swimming","reading mysteries","playing violin","origami","space and rockets"],teen:["basketball","coding","photography","theater","poetry","painting","piano","track and field","debate","gardening","making music","volleyball","film editing","cooking"]},Ix=["tacos","mac and cheese","pizza","fried rice","mango slices","pancakes","dumplings","hummus and pita","grilled cheese","pasta","chicken nuggets","cheeseburgers","sushi rolls","samosas","peanut butter sandwiches"],Lx=["a dog named Biscuit","a cat named Pickles","a hamster named Nugget","two goldfish","a rabbit named Clover","a parrot named Mango","a turtle named Speedy","a gecko named Ziggy",null,null,null],Dx=["become an astronaut","open a bakery","play pro soccer","write a graphic novel","be a marine biologist","build robots","become a teacher","direct movies","be a vet","design video games","be a chef","become a pilot","run for mayor","be a musician"],of=["always hums while working","carries a tiny notebook everywhere","says 'for real though' a lot","collects interesting rocks","never leaves without a snack","talks to plants","draws doodles on everything","counts steps in the hallway","makes up nicknames","loves puns","gets the hiccups when nervous","is always five minutes early"],Fx=["is secretly afraid of the dark","still sleeps with a stuffed bunny","writes songs nobody has heard","wants to try out for the school play but is nervous","can solve a Rubik's cube in under a minute","once got lost in the library for an hour","has a crush on someone in the art club","is saving up for a telescope","is learning a new language in secret","feels nervous about speaking in class"],lf=["math","ela","science","history"],hf=["k2","g35","g68","hs","g35","g68","k2","hs","g68","g35"],Nx=(t,e)=>t==="k2"?["K","1","2"][e%3]:t==="g35"?["3","4","5"][e%3]:t==="g68"?["6","7","8"][e%3]:t==="hs"?["9","10","11","12"][e%4]:"Staff",Ln=(t,e)=>e[Math.floor(t()*e.length)];function Ux(t=48,e=20260930){let n=pi(e),i=new Set,s=new Set,r=[],a="",h="";for(let l=0;l<t;l++){let o=hf[l%hf.length],d,c=0;do d=ha(n,o),c++;while((i.has(Cc(d))||d.hairStyle===a||d.hair===h)&&c<60);i.add(Cc(d)),a=d.hairStyle,h=d.hair,(o==="k2"||o==="g35")&&(d.glasses=n()<.12?d.glasses:"none",d.top==="blazer"&&(d.top="hoodie"));let u=sf[l%sf.length],f=Ln(n,rf),g=`${u} ${f}`;for(;s.has(g);)f=Ln(n,rf),g=`${u} ${f}`;s.add(g),d.name=u;let _=o==="k2"||o==="g35"?"young":o==="g68"?"mid":"teen",p=af[_],m=[Ln(n,p)];for(;m.length<3;){let C=Ln(n,[...p,...af.mid]);m.includes(C)||m.push(C)}let M=Ln(n,lf),R=Ln(n,lf.filter(C=>C!==M)),v=Px[(l*3+Math.floor(n()*10))%10],T=Math.floor(n()*4),w=Nx(o,T);r.push({id:l,key:`n${l}`,name:g,first:u,role:"student",age:o,grade:w,spec:d,look:{...Oi(d,l),tag:!1},personality:v,interests:m,favSubject:M,hardSubject:R,food:Ln(n,Ix),pet:Ln(n,Lx),dream:Ln(n,Dx),quirk:Ln(n,of),secret:Ln(n,Fx),bestFriend:(l+1+Math.floor(n()*5))%t,rival:n()<.3?(l+7+Math.floor(n()*9))%t:null,bio:`${u} is in grade ${w}, loves ${m[0]} and ${m[1]}, and ${Ln(n,of)}.`})}for(let l of r)l.bestFriend===l.id&&(l.bestFriend=(l.id+1)%t);return r}var Qs=Ux(56),er=t=>Qs[t]??Wn.find(e=>e.id===t),kx=t=>({...ha(pi(t.name?.length??5),"adult"),...t});function cf(t,e,n,i,s,r,a={}){let h=kx({name:e.split(" ").pop(),age:"adult",...s}),l=e.split(" ").pop();return{id:t,key:`s${t}`,name:e,first:l,role:"staff",title:n,age:"adult",grade:"Staff",spec:h,look:{...Oi(h,t),tag:!1},personality:r,interests:["helping students","coffee","crossword puzzles"],favSubject:i??"history",hardSubject:"math",food:"a good salad",pet:null,dream:"see every student find something they love",quirk:"keeps spare pencils in every pocket",secret:"still has their own first-grade report card",bestFriend:0,rival:null,bio:`${e} is ${n}.`,...a}}var Ox={tanaka:"nerdy",ayrissa:"cheerful",okafor:"nerdy",obrien:"funny",haddad:"kind",park:"curious",larsen:"kind",raman:"dreamy"},Bx={tanaka:"the math teacher",ayrissa:"the English teacher",okafor:"the chemistry and science teacher",obrien:"the history teacher",haddad:"the CarryingCareers teacher",park:"the computer science teacher",larsen:"the biology teacher",raman:"the English literature teacher"},zx={tanaka:"math",ayrissa:"ela",okafor:"science",obrien:"history",haddad:"careers",park:"science",larsen:"science",raman:"ela"};function Hx(t){let e=t.short,n=nf(t);return cf(t.num,t.name,Bx[t.id],zx[t.id],{skin:t.skin,hair:n.hair},Ox[t.id],{look:n,faculty:t.id,quirk:t.mannerisms[0].charAt(0).toLowerCase()+t.mannerisms[0].slice(1),bio:`${t.name} teaches ${t.subject} (${t.room}). ${t.tone}`,first:e,interests:[t.subject.toLowerCase(),"coffee","helping students"]})}var Bi=t=>Hx(Pc.find(e=>e.id===t)),Wn=[cf(100,"Mr. Bello","the hall monitor",null,{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"crop",top:"vest",shirt:"#c98569",shirt2:"#fff6ea",bottom:"pants",pants:"#2b3a55",hat:"none",glasses:"none",packStyle:"none",brow:"thick",mouthStyle:"smile"},"kind"),Bi("raman"),Bi("tanaka"),Bi("ayrissa"),Bi("okafor"),Bi("obrien"),Bi("haddad"),Bi("park"),Bi("larsen")],ua=t=>Wn.find(e=>e.faculty===t),Vx={math:ua("tanaka"),ela:ua("ayrissa"),science:ua("okafor"),history:ua("obrien"),careers:ua("haddad")},uf=24;var Ic="unify.social.v1",fa=()=>new Date().toISOString().slice(0,10),Gx=()=>({met:!1,fr:0,talks:0,lastDay:"",lastAt:0,topics:[],facts:{},log:[],quiz:{right:0,total:0},mood:0,helped:0,hurt:0,classNotes:[],overheard:[],seenInClass:0,called:0}),Dl=()=>({v:1,mem:{},profile:{name:"",avatar:js(),facts:{},stats:{talks:0,quizRight:0,quizTotal:0,hands:0},created:Date.now(),hasAvatar:!1}}),_n=Dl(),df=0,tr=new Set;function ff(){try{let t=JSON.parse(localStorage.getItem(Ic)||"null");t&&t.v===1&&(_n={...Dl(),...t,profile:{...Dl().profile,...t.profile}},_n.profile.avatar={...js(),..._n.profile.avatar||{}})}catch{}}function da(){clearTimeout(df),df=setTimeout(()=>{try{localStorage.setItem(Ic,JSON.stringify(_n))}catch{}},120)}ff();try{addEventListener("storage",t=>{t.key===Ic&&(ff(),tr.forEach(e=>e()))})}catch{}var Pe={get profile(){return _n.profile},setProfile(t){_n.profile={..._n.profile,...t},da(),tr.forEach(e=>e())},learn(t,e){_n.profile.facts[t]=e,da()},mem(t){let e=String(t);return _n.mem[e]??(_n.mem[e]=Gx())},peek(t){return _n.mem[String(t)]},edit(t,e){e(Pe.mem(t)),da(),tr.forEach(n=>n())},friends(){return Object.entries(_n.mem).filter(([,t])=>t.met).map(([t,e])=>({id:t,mem:e})).sort((t,e)=>e.mem.fr-t.mem.fr)},onChange(t){return tr.add(t),()=>tr.delete(t)},reset(){_n=Dl(),da(),tr.forEach(t=>t())},save:da},ns=t=>t>=85?"best friend":t>=60?"close friend":t>=30?"friend":t>=10?"classmate":"new face",Lc=t=>Math.min(5,Math.ceil(t/20));function is(t,e,n){Pe.edit(t,i=>{i.log.push({who:e,text:n.slice(0,220),t:Date.now()}),i.log.length>24&&i.log.splice(0,i.log.length-24)})}function Dc(t,e){Pe.edit(t,n=>{n.fr=Math.max(0,Math.min(100,n.fr+e)),e<0&&n.hurt++})}var pf=1.75/45,bn=(t,e)=>new L(t-56/2,0,e-44/2);var Wx=["#7fb2d6","#f2a79b","#9fd0b0","#f4d488"],zi={math:"#4F91C7",ela:"#88B89A",science:"#8FC9E8",history:"#C98569",careers:"#E8A33D"},Fl={math:"MATH",ela:"ELA",science:"SCIENCE",history:"HISTORY",careers:"CAREERS"};var Sn=(t,e)=>{let n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)},mf=[{key:"math",label:"Math",color:zi.math},{key:"ela",label:"ELA",color:zi.ela},{key:"science",label:"Science",color:zi.science},{key:"history",label:"History",color:zi.history},{key:"careers",label:"CarryingCareers",color:zi.careers},{key:"news",label:"Newsroom",color:"#B8A8DA"},{key:"plaza",label:"Plaza fountain",color:"#EAB94E"},{key:"entrance",label:"Main entrance",color:"#F28F7E"}],Nl=class{constructor(e){this.host=e;this.scene=new Sr;this.camera=new Kt(48,1,.1,260);this.clock=0;this.idx=-1;this.speed=1;this.view="close";this.tint=[255,255,255,0];this.students=[];this.duty=[];this.inDoor=null;this.onToast=()=>{};this.keys={};this.input={x:0,y:0};this.rotate=0;this.inputLocked=!1;this.onTick=[];this.onTap=()=>{};this.yaw=0;this.pitch=.62;this.zoom=1;this.fpitch=0;this.navLabel="";this.nav=null;this.walkers=[];this.open=[];this.occl=[];this.shadowR=0;this.texCache=new Map;this.camPos=new L(0,6,8);this.camLook=new L(0,1,-4);this.last=performance.now();this.t=0;this.blobTex=Jd();this.ray=new Or;this.lastClockMsg=0;this.frame=e=>{let n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.t+=n;let i=n*this.speed;this.clock+=i,this.clock>=pc&&(this.clock-=pc),parent!==window&&e-this.lastClockMsg>1e3&&(this.lastClockMsg=e,parent.postMessage({type:"unify:clock",minutes:mc+Math.floor(this.clock)},"*"));let s=Od(this.clock);s!==this.idx&&(this.idx=s,this.enterPeriod(s));let r=this.inputLocked?0:(this.keys.e?1:0)-(this.keys.q?1:0)+this.rotate;r&&(this.yaw+=r*1.9*n);let a=new L;this.camera.getWorldDirection(a),a.y=0,a.lengthSq()<1e-4&&a.set(0,0,-1),a.normalize();for(let o of this.students)if(o.pending&&(o.pending.delay-=i,o.pending.delay<=0&&this.begin(o)),!o.hidden){if(o.talking){o.moving=!1,o.frame=0;continue}if(o.fade<1&&(o.fade=Math.min(1,o.fade+i*3),o.mat.opacity=o.fade),o.path.length){let d=o.path[0],c=d.clone().sub(o.pos);c.y=0;let u=c.length(),f=o.speed*i;u<=f?(o.pos.copy(d),o.path.shift()):(c.normalize(),o.pos.addScaledVector(c,f),o.dir=this.dirFrom(c,a,o.dir)),o.moving=!0,o.frame=1+Math.floor(this.t*o.speed*3.4)%4,!o.path.length&&o.hideOnArrive&&(o.hidden=!0,o.sprite.visible=!1,o.blob.visible=!1,o.moving=!1)}else o.moving=!1,o.frame=0}this.patrol(i,a);for(let o of this.onTick)o(n,i);this.movePlayer(n,a),this.updateCamera(n),this.fadeOccluders(n),this.player.sprite.visible=this.view!=="first",this.player.blob.visible=this.view!=="first";for(let o of[...this.students,this.player,this.monitor,this.teacher,...this.duty])if(!o.hidden){if(o.sprite.position.copy(o.pos),this.view==="first"&&o!==this.player){let d=o.pos.distanceTo(this.camera.position)<1.1;o.sprite.visible=!d,o.blob.visible=!d}else o!==this.player&&(o.sprite.visible=!0,o.blob.visible=!0);o.blob.position.set(o.pos.x,.02,o.pos.z),this.setFrame(o,o.dir,o.frame)}let h=Gn[this.idx].tint,l=Math.min(1,n*1.5);for(let o=0;o<4;o++)this.tint[o]+=(h[o]-this.tint[o])*l;this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.frame)};let n=this.renderer=new Al({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Do,n.outputColorSpace=Bt,e.appendChild(n.domElement),this.scene.background=new qe("#EADFCB"),this.scene.fog=new br("#EADFCB",80,190),this.reachable(),this.buildLights(),this.buildCampus(),this.buildOutside(),this.buildPeople(),addEventListener("resize",()=>this.resize()),this.resize(),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&(this.keys[i.key.toLowerCase()]=!0,i.key.startsWith("Arrow")&&i.preventDefault())}),addEventListener("keyup",i=>{this.keys[i.key.toLowerCase()]=!1}),addEventListener("blur",()=>{this.keys={}}),addEventListener("message",i=>{let s=i.data;s&&s.type==="unify:exit"&&this.placeAtDoor(s.room)}),this.bindPointer(n.domElement),this.setView("close",!0),requestAnimationFrame(this.frame)}resize(){let e=this.host.clientWidth||innerWidth,n=this.host.clientHeight||innerHeight;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.fov=e/n<.8?62:48,this.camera.updateProjectionMatrix()}tex(e,n){let i=this.texCache.get(e);return i||(i=n(),this.texCache.set(e,i)),i}rep(e,n,i,s=1){let r=`${e}@${i.toFixed(2)}x${s.toFixed(2)}`,a=this.texCache.get(r);return a||(a=this.tex(e,n).clone(),a.repeat.set(i,s),a.needsUpdate=!0,this.texCache.set(r,a)),a}bindPointer(e){let n=!1,i=0,s=0,r=0,a=0,h=0;e.addEventListener("pointerdown",l=>{n=!0,i=r=l.clientX,s=a=l.clientY,h=performance.now(),e.setPointerCapture(l.pointerId)}),e.addEventListener("pointermove",l=>{if(!n)return;let o=l.clientX-i,d=l.clientY-s;i=l.clientX,s=l.clientY,this.yaw-=o*.0065,this.view==="first"?this.fpitch=Math.max(-.6,Math.min(.6,this.fpitch-d*.004)):this.pitch=Math.max(.2,Math.min(1.3,this.pitch+d*.004))}),e.addEventListener("pointerup",l=>{let o=n;n=!1,o&&Math.hypot(l.clientX-r,l.clientY-a)<7&&performance.now()-h<500&&this.handleTap(l.clientX,l.clientY)}),e.addEventListener("pointercancel",()=>{n=!1}),e.addEventListener("wheel",l=>{l.preventDefault(),this.zoom=Math.max(.45,Math.min(1.6,this.zoom*Math.exp(l.deltaY*.0012)))},{passive:!1})}buildLights(){this.scene.add(new Nr(16774888,14996404,2.1));let e=this.sun=new kr(16773336,1.25);e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=70,e.shadow.bias=-4e-4,e.shadow.radius=5,this.scene.add(e,e.target)}std(e,n="#ffffff"){return new Qt({map:e,color:n,roughness:.95,metalness:0})}plain(e){return new Qt({color:e,roughness:1})}box(e,n,i,s,r,a,h,l={}){let{outline:o=!0,occlude:d=!1,shadow:c=!0}=l;d&&(s=(Array.isArray(s)?s:[s]).map(f=>f.clone()));let u=new He(new ei(e,n,i),s);return u.position.set(r,a,h),u.castShadow=c,u.receiveShadow=!0,this.scene.add(u),o&&u.add(new $i(new Zi(u.geometry),new wi({color:7166559,transparent:!0,opacity:.55}))),d&&this.occl.push({mats:Array.isArray(s)?s:[s],box:new wn().setFromCenterAndSize(u.position,new L(e+.05,n,i+.05)),o:1}),u}card(e,n,i,s,r,a,h,l=!1){let o=new jt,d=new He(new Xt(n*1.12,i*1.12),new mn({map:this.tex("cardsh",()=>Mc()),transparent:!0,opacity:.55,depthWrite:!1}));d.position.set(0,-.05,0);let c=new He(new Xt(n,i),l?new mn({map:e,transparent:!0}):new Qt({map:e,roughness:1,transparent:!0}));return c.position.z=.025,c.receiveShadow=!0,o.add(d,c),o.position.set(s,r,a),o.rotation.y=h,this.scene.add(o),c}flat(e,n,i,s,r,a=.012,h=0){let l=new Xt(n,i);l.rotateX(-Math.PI/2),h&&l.rotateY(h);let o=new He(l,this.std(e));return o.position.set(s,a,r),o.receiveShadow=!0,this.scene.add(o),o}rotOf(e){return e==="S"?0:e==="N"?Math.PI:e==="E"?Math.PI/2:-Math.PI/2}onFace(e,n,i,s){return n==="S"?{x:e.x+e.w*i-56/2,z:e.y+e.h-44/2+s}:n==="N"?{x:e.x+e.w*i-56/2,z:e.y-44/2-s}:n==="E"?{x:e.x+e.w-56/2+s,z:e.y+e.h*i-44/2}:{x:e.x-56/2-s,z:e.y+e.h*i-44/2}}buildCampus(){let e=this.scene,n=this.plain("#F7ECD6"),i=this.plain("#D8C6A4"),s=new He(new Xt(63,51),new mn({map:this.tex("dio",()=>Mc()),transparent:!0,opacity:.7,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(.4,-.02,.4),e.add(s);let r=new He(new Xt(56,44),this.std(this.rep("floor",()=>Xd(),56/2,44/2)));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),this.flat(this.rep("stoneA",()=>aa(),46/4,10/4),46,10,0,0,.012),this.flat(this.rep("stoneB",()=>aa(),14/4,34/4),14,34,0,0,.012);let a=(c,u,f,g)=>this.flat(this.rep("rug",()=>qd(),1,c/4),2,c,u,f,.014,g?Math.PI/2:0);a(52,0,-44/2+2.5,!0),a(40,-56/2+2.5,0,!1),a(40,56/2-2.5,0,!1),a(48/2-1,-56/4-2.5,44/2-2.5,!0),a(48/2-1,56/4+2.5,44/2-2.5,!0);let h=(c,u,f,g,_)=>{let p=this.std(this.rep("wall",()=>ra(),c/4)),m=[i,i,n,i,i,i];m[_]=p,this.box(g?c:.3,4.2,g?.3:c,m,u,4.2/2,f,{outline:!1,occlude:!0})};h(56+.6,0,-44/2-.15,!0,4),h(44,-56/2-.15,0,!1,0),h(44,56/2+.15,0,!1,1);let l=Pn.gap.x0-56/2,o=Pn.gap.x1-56/2,d=44/2+.15;h(l+56/2+.3,(-56/2-.3+l)/2,d,!0,5),h(56/2+.3-o,(o+56/2+.3)/2,d,!0,5),this.box(o-l,.9,.3,[i,i,n,i,i,this.std(this.rep("wall",()=>ra(),2))],(l+o)/2,4.2-.45,d,{outline:!1}),this.card(this.tex("banner",()=>Tc("UNIFY ACADEMY")),7.6,1.2,(l+o)/2,3.2,44/2-.05,Math.PI,!0),this.card(this.tex("exit",()=>Tc("WELCOME")),5.2,.8,(l+o)/2,3.2,44/2+.35,0,!0),this.card(this.tex("clock",()=>Zd()),1.1,1.1,-9,3.05,-44/2+.17,0);for(let c=4;c<53;c+=6)Math.abs(c-56/2)>1.5&&this.card(this.tex("win",()=>Ks()),1.5,1.9,c-56/2,3.05,-44/2+.17,0);for(let c=4;c<53;c+=6)(c<Pn.gap.x0-2||c>Pn.gap.x1+2)&&this.card(this.tex("win",()=>Ks()),1.5,1.9,c-56/2,3.05,44/2-.17,Math.PI);for(let c=5;c<41;c+=6)this.card(this.tex("win",()=>Ks()),1.5,1.9,-56/2+.17,3.05,c-44/2,Math.PI/2),this.card(this.tex("win",()=>Ks()),1.5,1.9,56/2-.17,3.05,c-44/2,-Math.PI/2);{let c=ki.cx-56/2,u=-44/2;this.box(2.3,3.5,.18,this.plain("#9A653D"),c,1.75,u+.09);let f=new He(new Xt(1.95,3.15),new Qt({map:this.tex("door-news",()=>_c("#B8A8DA")),roughness:.95}));f.position.set(c,1.6,u+.19),f.receiveShadow=!0,e.add(f);let g=new He(new Xt(1.9,.48),new mn({map:this.tex("sign-news",()=>bc("NEWSROOM","#8173AE")),transparent:!0}));g.position.set(c,3.8,u+.2),e.add(g)}this.bunting([[-56/2+.06,-44/2+.06,56/2-.06,-44/2+.06],[-56/2+.06,-44/2+.06,-56/2+.06,44/2-.06],[56/2-.06,-44/2+.06,56/2-.06,44/2-.06]],3.95);for(let c of ta){let u=c.rect,f=c.subject,g=si.find(V=>V.subject===f),_=this.std(this.rep("wall",()=>ra(),u.h/4)),p=this.std(this.rep("wall",()=>ra(),u.w/4)),m=this.std(this.tex(`roof-${f}`,()=>ef(Fl[f],zi[f],f==="science"?"#3b3340":"#FFF9F0")));this.box(u.w,4.2,u.h,[_,_,m,i,p,p],u.x+u.w/2-56/2,4.2/2,u.y+u.h/2-44/2,{occlude:!0});let M=["N","S","E","W"];for(let V of M){let Z=V==="N"||V==="S"?u.w:u.h,F=Math.round(Z/4.6);for(let ie=0;ie<F;ie++){let X=(ie+.5)/F,j=this.onFace(u,V,X,.17),U=V==="N"||V==="S"?u.x+u.w*X:g.cx;V===g.face&&Math.abs(U-g.cx)<2.6||this.card(this.tex("win",()=>Ks()),1.5,1.9,j.x,3.05,j.z,this.rotOf(V))}}let R=g.face,v=(V,Z)=>({p:this.onFace(u,R,(g.cx+V-u.x)/u.w,.17),i:Z}),T=v(-5.2,0),w=v(5.2,1),C=v(-3.4,2),x=v(3.4,3);this.card(this.tex(`po${T.i}`,()=>Sc(T.i+(f==="ela"?1:0))),1,1.25,T.p.x,1.45,T.p.z,this.rotOf(R)),this.card(this.tex(`po${w.i}`,()=>Sc(w.i+(f==="math"?1:0))),1,1.25,w.p.x,1.45,w.p.z,this.rotOf(R)),this.card(this.tex("board",()=>$d()),1.6,1.1,C.p.x,2.2,C.p.z,this.rotOf(R)),this.card(this.tex("trophy",()=>Yd()),1.1,1,x.p.x,2.2,x.p.z,this.rotOf(R));let E=R==="S"?1:-1,A=g.cy-44/2,b=g.cx-56/2,I=E>0?0:Math.PI;this.box(2.3,3.5,.18,this.plain("#9A653D"),b,1.75,A+E*.09,{occlude:!1});let B=new He(new Xt(1.95,3.15),new Qt({map:this.tex(`door-${f}`,()=>_c(zi[f])),roughness:.95}));B.position.set(b,1.6,A+E*.19),B.rotation.y=I,B.receiveShadow=!0,e.add(B);let D=new He(new Xt(1.9,.48),new mn({map:this.tex(`sign-${f}`,()=>bc(f==="careers"?"CARRYING CAREERS":Fl[f],zi[f],f==="science"?"#3b3340":"#FFF9F0")),transparent:!0}));D.position.set(b,3.8,A+E*.2),D.rotation.y=I,e.add(D)}xc.forEach((c,u)=>{let f=c.rect,g=c.face==="N"||c.face==="S"?f.w:f.h,_=this.std(this.rep("lockers",()=>jd(Wx),g/4)),p=this.plain("#9db8c8"),m=this.plain("#FFF6E6"),M=[p,p,m,p,p,p];M[{E:0,W:1,S:4,N:5}[c.face]]=_,this.box(f.w,2.3,f.h,M,f.x+f.w/2-56/2,1.15,f.y+f.h/2-44/2,{occlude:!0})});for(let c of vc){let u=c.x-56/2,f=c.y-44/2;c.kind==="tree"?this.tree(u,f):c.kind==="fountain"?this.fountain(u,f):c.kind==="table"?this.table(u,f):c.kind==="bench"?this.bench(u,f,c.rot??0):c.kind==="planter"?this.plant(u,f):this.lamp(u,f,qx(c.x+c.y))}}tree(e,n){let i=new jt,s=new He(new Vt(.62,.5,.5,10),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=new He(new Vt(.1,.16,1.6,6),this.plain("#9A653D"));r.position.y=1.2,r.castShadow=!0,i.add(r),[[0,2.5,0,1.05,"#5E9C72"],[.45,2,.2,.7,"#88B89A"],[-.4,2.15,-.25,.75,"#3F7655"]].forEach(([a,h,l,o,d])=>{let c=new He(new Ns(o,0),new Qt({color:d,roughness:1,flatShading:!0}));c.position.set(a,h,l),c.castShadow=!0,i.add(c)}),i.position.set(e,0,n),this.scene.add(i)}fountain(e,n){let i=new jt,s=this.plain("#F7ECD6"),r=new He(new Vt(2.25,2.35,.6,28),s);r.position.y=.3,r.castShadow=r.receiveShadow=!0,i.add(r),r.add(new $i(new Zi(r.geometry,40),new wi({color:7166559,transparent:!0,opacity:.5})));let a=new He(new Vt(1.95,1.95,.05,28),new Qt({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25,roughness:.4}));a.position.y=.6,i.add(a);let h=new He(new Vt(.3,.42,1.5,14),s);h.position.y=1.2,h.castShadow=!0,i.add(h);let l=new He(new Vt(.95,.5,.3,20),s);l.position.y=1.9,l.castShadow=!0,i.add(l);let o=new He(new Vt(.8,.8,.05,20),new Qt({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25}));o.position.y=2.05,i.add(o);let d=new He(new Ai(.22,.9,10),new Qt({color:"#DDF3FB",emissive:"#DDF3FB",emissiveIntensity:.4,transparent:!0,opacity:.85}));d.position.y=2.55,i.add(d),i.position.set(e,0,n),this.scene.add(i)}table(e,n){let i=new jt,s=new He(new Vt(.8,.8,.08,20),this.plain("#F1C887"));s.position.y=.78,s.castShadow=s.receiveShadow=!0,i.add(s);let r=new He(new Vt(.09,.14,.78,8),this.plain("#9A653D"));r.position.y=.39,i.add(r),["#F28F7E","#8FC9E8","#A9DCC0","#B8A8DA"].forEach((a,h)=>{let l=h/4*Math.PI*2+.4,o=new He(new Vt(.22,.2,.46,10),this.plain(a));o.position.set(Math.cos(l)*1,.23,Math.sin(l)*1),o.castShadow=!0,i.add(o)}),i.position.set(e,0,n),this.scene.add(i)}bench(e,n,i){let s=new jt;s.add(this.part(.62,.1,1.8,"#F1C887",0,.5,0)),s.add(this.part(.12,.45,1.7,"#9A653D",-.24,.25,0)),s.add(this.part(.1,.5,1.8,"#F28F7E",-.3,.8,0)),s.rotation.y=i,s.position.set(e,0,n),this.scene.add(s)}part(e,n,i,s,r,a,h){let l=new He(new ei(e,n,i),this.plain(s));return l.position.set(r,a,h),l.castShadow=!0,l.receiveShadow=!0,l}lamp(e,n,i){let s=new jt,r=new He(new Vt(.05,.07,3,6),this.plain("#9A653D"));r.position.y=1.5,r.castShadow=!0,s.add(r);let a=new He(new Lr(.34,18,12),new Qt({map:this.tex(`lan-${i}`,()=>Kd(i)),emissive:i,emissiveIntensity:.3,roughness:1}));a.scale.y=1.2,a.position.y=3.2,a.castShadow=!0,s.add(a),s.position.set(e,0,n),this.scene.add(s)}plant(e,n){let i=new jt,s=new He(new Vt(.5,.38,.5,14),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=["#5E9C72","#88B89A","#3F7655","#A9DCC0"];for(let a=0;a<12;a++){let h=a/12*Math.PI*2,l=new He(new Ai(.11,1+a%3*.25,4),this.plain(r[a%4]));l.position.set(Math.cos(h)*.26,.95,Math.sin(h)*.26),l.rotation.set(Math.sin(h)*.5,0,-Math.cos(h)*.5),l.castShadow=!0,i.add(l)}i.position.set(e,0,n),this.scene.add(i)}bunting(e,n){let i=[15896446,15382862,9423336,11132096,12101850,15377842].map(h=>new qe(h)),s=[],r=[];for(let[h,l,o,d]of e){let c=Math.hypot(o-h,d-l),u=Math.floor(c/.9),f=(o-h)/c,g=(d-l)/c;for(let _=0;_<u;_++){let p=.45+_*.9,m=h+f*p,M=l+g*p,R=i[_%6];s.push(m-f*.22,n,M-g*.22,m+f*.22,n,M+g*.22,m,n-.5,M);for(let v=0;v<3;v++)r.push(R.r,R.g,R.b)}}let a=new Dt;a.setAttribute("position",new ut(s,3)),a.setAttribute("color",new ut(r,3)),this.scene.add(new He(a,new mn({vertexColors:!0,side:En})))}buildOutside(){let e=this.scene,n=this.rep("grass",()=>Qd(),60,60),i=new He(new Xt(480,480),this.std(n));i.rotation.x=-Math.PI/2,i.position.y=-.04,i.receiveShadow=!0,e.add(i),this.flat(this.rep("stoneP",()=>aa(),2,7),7.4,28,0,44/2+14,-.02);let s=new He(new Ir(9,40),this.std(this.rep("stoneD",()=>aa(),5,5)));s.rotation.x=-Math.PI/2,s.position.set(0,-.015,44/2+30),s.receiveShadow=!0,e.add(s);let r=[];for(let u=0;u<900&&r.length<190;u++){let f=(Sn(u,1)-.5)*150,g=(Sn(u,2)-.5)*140+8;Math.abs(f)<56/2+5&&Math.abs(g)<44/2+5||Math.abs(f)<6&&g>0||Math.hypot(f,g-(44/2+30))<11||r.push({x:f,z:g,s:.8+Sn(u,3)*.9})}let a=new Ds(new Ns(1.5,0),new Qt({roughness:1,flatShading:!0}),r.length),h=new Ds(new Vt(.16,.24,1.8,6),this.plain("#9A653D"),r.length),l=new ot,o=["#5E9C72","#88B89A","#3F7655","#A9DCC0","#EAB94E","#F2A79B"];r.forEach((u,f)=>{l.compose(new L(u.x,2.7*u.s,u.z),new pn().setFromEuler(new Bn(0,Sn(f,5)*6,0)),new L(u.s,u.s*1.15,u.s)),a.setMatrixAt(f,l),a.setColorAt(f,new qe(o[Sn(f,6)<.12?4+(f&1):Math.floor(Sn(f,7)*4)])),l.compose(new L(u.x,.9*u.s,u.z),new pn,new L(u.s,u.s,u.s)),h.setMatrixAt(f,l)}),a.castShadow=h.castShadow=!0,e.add(a,h);let d=["#F2A79B","#F4D488","#9FD0B0","#9CC3E0","#E8C39A","#C9B7E8"],c=["#C98569","#9A653D","#7C94B0","#B8604F"];for(let u=0;u<26;u++){let f=u/26*Math.PI*2+Sn(u,8)*.2,g=78+Sn(u,9)*18,_=Math.cos(f)*g*1.1,p=Math.sin(f)*g*.85+6;if(Math.abs(_)<8&&p>0)continue;let m=5+Sn(u,10)*4,M=3.5+Sn(u,11)*2.5,R=new jt,v=new He(new ei(m,M,m*.9),this.plain(d[u%6]));v.position.y=M/2,v.castShadow=!0,R.add(v),v.add(new $i(new Zi(v.geometry),new wi({color:7166559,transparent:!0,opacity:.45})));let T=new He(new Ai(m*.82,M*.7,4),this.plain(c[u%4]));T.position.y=M+M*.35,T.rotation.y=Math.PI/4,T.castShadow=!0,R.add(T),R.position.set(_,0,p),R.rotation.y=Sn(u,12)*6,e.add(R)}for(let u=0;u<14;u++){let f=u/14*Math.PI*2+.2,g=118+Sn(u,13)*30,_=14+Sn(u,14)*14,p=new He(new Ai(_*1.5,_,6),new Qt({color:["#A9CDB8","#B7D8A4","#9CC3A8"][u%3],roughness:1,flatShading:!0}));p.position.set(Math.cos(f)*g*1.15,_/2-.5,Math.sin(f)*g*.9+6),e.add(p)}}makePerson(e,n,i=Js[n.age??"hs"]*(n.hScale??1)){let s=new Yi(Hd(n));s.colorSpace=Bt,s.repeat.set(1/Qr,1/jr.length),s.anisotropy=4;let r=new Ls({map:s,transparent:!0}),a=new Er(r);a.center.set(.5,yc/Zs),a.scale.set(Kr/ea*pf*i,Zs/ea*pf*i,1),this.scene.add(a);let h=new He(new Xt(1.1,.6),new mn({map:this.blobTex,transparent:!0,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.position.y=.02,this.scene.add(h),{id:e,look:n,sprite:a,mat:r,tex:s,blob:h,pos:new L,dir:0,frame:0,moving:!1}}reachable(){let e=new Set,n=[Pn.tile.y*56+Pn.tile.x];for(e.add(n[0]);n.length;){let i=n.pop(),s=i%56,r=Math.floor(i/56);for(let[a,h]of[[1,0],[-1,0],[0,1],[0,-1]]){let l=s+a,o=r+h,d=o*56+l;l<0||o<0||l>=56||o>=44||ri[o][l]!=="."||e.has(d)||(e.add(d),n.push(d))}}this.open=[...e].map(i=>({x:i%56,y:Math.floor(i/56)})).filter(i=>i.y<42)}buildPeople(){let e=bn(Pn.tile.x+.5,Pn.tile.y+.5);this.students=Qs.slice(0,uf).map((n,i)=>{let s=n.age,r=this.makePerson(n.id,n.look);r.pos.copy(e),r.sprite.visible=!1,r.blob.visible=!1,r.def=n;let a=si[i%4];return Object.assign(r,{hidden:!0,path:[],speed:Ui(2.3,3.1)*(s==="k2"?.8:s==="g35"?.9:s==="g68"?.97:1),pending:null,lastDoor:{x:Math.floor(a.approach.x),y:Math.floor(a.approach.y)},hideOnArrive:!1,fade:1})}),this.player=this.makePerson(11,{...Oi(Pe.profile.avatar,11),tag:!0}),this.player.pos.copy(bn(28,35)),this.monitor=this.makePerson(Wn[0].id,Wn[0].look),this.monitor.def=Wn[0],this.monitor.pos.copy(bn(10.5,18.5)),this.teacher=this.makePerson(Wn[1].id,Wn[1].look),this.teacher.def=Wn[1],this.teacher.pos.copy(bn(46.5,26.5)),this.duty=Wn.filter(n=>n.faculty==="park"||n.faculty==="larsen").map((n,i)=>{let s=this.makePerson(n.id,n.look);return s.def=n,s.pos.copy(bn(i?30.5:22.5,i?36.5:8.5)),s}),this.walkers=[{p:this.duty[0],stops:[[22,8],[28,2],[53,10],[46,18],[28,22],[10,18],[2,10]],path:[],leg:0,speed:.95},{p:this.duty[1],stops:[[30,36],[10,41],[2,30],[10,26],[28,22],[46,30],[53,38]],path:[],leg:0,speed:.85},{p:this.monitor,stops:[[10,18],[46,18],[53,22],[46,26],[10,26],[2,22],[28,2]],path:[],leg:0,speed:1.15},{p:this.teacher,stops:[[46,26],[28,18],[10,26],[28,41],[53,30],[28,2],[2,10]],path:[],leg:0,speed:1}]}patrol(e,n){for(let i of this.walkers){let s=i.p;if(s.talking){s.moving=!1,s.frame=0;continue}if(!i.path.length){let o=Math.floor(s.pos.x+56/2),d=Math.floor(s.pos.z+44/2),[c,u]=i.stops[i.leg];i.leg=(i.leg+1)%i.stops.length,i.path=Xs(ri,Math.max(0,Math.min(55,o)),Math.max(0,Math.min(43,d)),c,u).map(f=>bn(f.x+.5,f.y+.5))}let r=i.path[0];if(!r){s.moving=!1,s.frame=0;continue}let a=r.clone().sub(s.pos);a.y=0;let h=a.length(),l=i.speed*e;h<=l?(s.pos.copy(r),i.path.shift()):(a.normalize(),s.pos.addScaledVector(a,l),s.dir=this.dirFrom(a,n,s.dir)),s.moving=!0,s.frame=1+Math.floor(this.t*5)%4}}setFrame(e,n,i){e.tex.offset.set(i/Qr,1-(n+1)/jr.length)}faceDir(e,n){let i=new L;return this.camera.getWorldDirection(i),i.y=0,i.lengthSq()<1e-4&&i.set(0,0,-1),this.dirFrom(e,i.normalize(),n)}dirFrom(e,n,i){let s=e.x*n.x+e.z*n.z,r=e.x*-n.z+e.z*n.x;return Math.hypot(s,r)<.001?i:Math.abs(s)>=Math.abs(r)?s>0?1:0:r>0?3:2}persons(){return[...this.students.filter(e=>!e.hidden),this.monitor,this.teacher,...this.duty]}handleTap(e,n){let i=this.renderer.domElement.getBoundingClientRect(),s=new ze((e-i.left)/i.width*2-1,-((n-i.top)/i.height)*2+1);this.ray.setFromCamera(s,this.camera);let r=this.persons(),a=this.ray.intersectObjects(r.map(o=>o.sprite).filter(o=>o.visible),!1),h=a.length?r.find(o=>o.sprite===a[0].object)??null:null;if(!h){let o=.85;for(let d of r){let c=d.pos.clone().setY(.8*Js[d.look.age??"hs"]+.2),u=this.ray.ray.distanceToPoint(c);u<o&&(o=u,h=d)}}if(h){this.onTap(h);return}this.onTap(null);let l=new L;this.view!=="first"&&this.ray.ray.intersectPlane(new fn(new L(0,1,0),0),l)&&this.walkToPoint(l.x+56/2,l.z+44/2,"that spot")}walkToPoint(e,n,i="there"){if(this.inputLocked)return!1;let s=null,r=1e9,a=Math.floor(e),h=Math.floor(n);for(let l=-2;l<=2;l++)for(let o=-2;o<=2;o++){let d=a+o,c=h+l;if(d<0||c<0||d>=56||c>=44||ri[c][d]!==".")continue;let u=Math.hypot(d+.5-e,c+.5-n);u<r&&(r=u,s={x:d,y:c})}return!s||r>2.2?!1:this.planNav(s.x+.5,s.y+.5,i,null)}setAvatar(e){let n=this.player,i=n.pos.clone();this.scene.remove(n.sprite,n.blob),n.tex.dispose(),n.mat.dispose(),this.player=this.makePerson(11,{...Oi(e,11),tag:!0}),this.player.pos.copy(i),this.player.dir=n.dir,this.player.def=void 0}placeAtDoor(e){let n=e==="news"?{approach:ki.approach,subject:"news"}:si.find(i=>i.subject===e)??si[0];this.player.pos.copy(bn(n.approach.x,n.approach.y)),this.inDoor=n.subject,this.nav=null,this.navLabel="",this.onToast("")}clear(e,n){let i=Math.ceil(e.distanceTo(n)/.25);for(let s=1;s<i;s++){let r=e.clone().lerp(n,s/i);if(Ll(r.x+56/2,r.z+44/2,.3))return!1}return!0}goTo(e){let n=si.find(a=>a.subject===e),i=n?n.approach:e==="news"?ki.approach:e==="plaza"?{x:28,y:18.8}:{x:28,y:41.5},s=n?`${n.subject==="careers"?"CarryingCareers":Fl[n.subject]} classroom`:e==="news"?"the newsroom":e==="plaza"?"the plaza fountain":"the main entrance",r=n?bn(n.cx,n.cy+(n.face==="S"?.5:-.5)):e==="news"?bn(ki.cx,.95):null;this.planNav(i.x,i.y,s,r)&&this.inDoor===(n?.subject??(e==="news"?"news":null))&&(this.inDoor=null)}planNav(e,n,i,s){let r=this.player.pos,a=Math.max(0,Math.min(55,Math.floor(r.x+56/2))),h=Math.max(0,Math.min(43,Math.floor(r.z+44/2))),l=Xs(ri,a,h,Math.floor(e),Math.floor(n));if(!l.length&&!(a===Math.floor(e)&&h===Math.floor(n)))return this.onToast("No path found from here"),!1;let o=[r.clone().setY(0),...l.slice(0,-1).map(c=>bn(c.x+.5,c.y+.5)),bn(e,n)],d=[];for(let c=0;c<o.length-1;){let u=o.length-1;for(;u>c+1&&!this.clear(o[c],o[u]);)u--;d.push(o[u]),c=u}return s&&d.push(s),this.nav={pts:d,label:i},this.navLabel=i,i!=="that spot"&&i!=="there"&&this.onToast(`Walking to ${i}\u2026 (move to cancel)`),!0}cancelNav(){this.nav&&(this.nav=null,this.navLabel="",this.onToast(""))}get walking(){return!!this.nav}enterDoor(e){this.inDoor=e,this.nav=null,this.navLabel="";let n=Gd.indexOf(e),i=Gn[Math.max(0,this.idx)].swap?1:0,s=e==="news"?[]:this.students.filter((r,a)=>(a+i)%4===n).map(r=>r.def.id);parent!==window?parent.postMessage({type:"unify:enter",subject:e,room:e,attendees:s},"*"):this.onToast(`${e==="news"?"Newsroom":(e==="careers"?"CarryingCareers":Fl[e])+" auditorium"}: open index.html to go inside`)}enterPeriod(e){let n=Gn[e],i=gc(this.open),s=Pn.tile,r={x:Math.floor(this.player.pos.x+56/2),y:Math.floor(this.player.pos.z+44/2)},a=gc(this.open.filter(l=>Math.hypot(l.x-r.x,l.y-r.y)<=3.6&&Math.hypot(l.x-r.x,l.y-r.y)>=1.2)),h=0;this.students.forEach((l,o)=>{if(n.kind==="class"){let d=si[(o+(n.swap?1:0))%4],c={x:Math.floor(d.approach.x),y:Math.floor(d.approach.y)};l.lastDoor=c,l.pending={delay:Ui(0,8),dest:c,hide:!0}}else if(n.kind==="lunch"){let d=l.def&&Pe.peek(l.def.id)?.lunchBuddy&&a[h];l.pending={delay:Ui(0,10),dest:d?a[h++]:i[o],hide:!1,appear:l.hidden?l.lastDoor:void 0}}else n.kind==="arrive"?(l.hidden=!0,l.sprite.visible=!1,l.blob.visible=!1,l.path=[],l.pending={delay:Ui(0,20),dest:i[o],hide:!1,appear:s}):l.pending={delay:Ui(0,12),dest:s,hide:!0,appear:l.hidden?l.lastDoor:void 0}})}begin(e){let n=e.pending;e.pending=null,n.appear&&(e.pos.copy(bn(n.appear.x+.5,n.appear.y+.5)),e.hidden=!1,e.sprite.visible=!0,e.blob.visible=!0,e.fade=0,e.mat.opacity=0);let i=Math.min(55,Math.max(0,Math.floor(e.pos.x+56/2))),s=Math.min(43,Math.max(0,Math.floor(e.pos.z+44/2)));e.path=Xs(ri,i,s,n.dest.x,n.dest.y).map(r=>bn(r.x+.5,r.y+.5)),e.hideOnArrive=n.hide,e.moving=e.path.length>0,!e.path.length&&n.hide&&(e.hidden=!0,e.sprite.visible=!1,e.blob.visible=!1)}movePlayer(e,n){let i=this.keys,s=(i.d||i.arrowright?1:0)-(i.a||i.arrowleft?1:0)+this.input.x,r=(i.s||i.arrowdown?1:0)-(i.w||i.arrowup?1:0)+this.input.y,a=this.player,h=Math.sin(this.yaw),l=Math.cos(this.yaw),o=!this.inputLocked&&Math.hypot(s,r)>.1;if(o&&this.nav&&this.cancelNav(),o){let f=new L(l*s+h*r,0,-h*s+l*r).normalize().multiplyScalar(4*e);a.moving=!0;let g=a.pos.x+56/2,_=a.pos.z+44/2;Ll(g+f.x,_)||(a.pos.x+=f.x),Ll(a.pos.x+56/2,_+f.z)||(a.pos.z+=f.z),a.dir=this.dirFrom(f,n,a.dir),a.frame=1+Math.floor(this.t*9)%4}else if(this.nav){let f=this.nav.pts[0],g=f.clone().sub(a.pos);g.y=0;let _=g.length(),p=4.6*e;if(a.moving=!0,_<=p){if(a.pos.copy(f),this.nav.pts.shift(),!this.nav.pts.length){let m=this.nav.label;this.nav=null,this.navLabel="",[...si,ki].some(M=>es(M.trigger,a.pos.x+56/2,a.pos.z+44/2))||this.onToast(`Arrived at ${m}`)}}else g.normalize(),a.pos.addScaledVector(g,p),a.dir=this.dirFrom(g,n,a.dir);a.frame=1+Math.floor(this.t*9)%4}else a.moving=!1,a.frame=0;let d=a.pos.x+56/2,c=a.pos.z+44/2,u=si.find(f=>es(f.trigger,d,c))??(es(ki.trigger,d,c)?{subject:"news"}:void 0);if(u&&this.inDoor!==u.subject)this.enterDoor(u.subject);else if(!u&&this.inDoor){let f=this.inDoor==="news"?ki.trigger:si.find(_=>_.subject===this.inDoor).trigger;Math.hypot(Math.max(f.x-d,0,d-f.x-f.w),Math.max(f.y-c,0,c-f.y-f.h))>.35&&(this.inDoor=null)}}setView(e,n=!1){this.view=e,this.zoom=1,e==="overview"?this.pitch=1:e==="close"&&(this.pitch=.62),this.fpitch=0,n&&this.updateCamera(1,!0)}cycleView(){return this.setView(this.view==="close"?"overview":this.view==="overview"?"first":"close"),this.view}updateCamera(e,n=!1){let i=this.player.pos,s=Math.sin(this.yaw),r=Math.cos(this.yaw),a,h;if(this.view==="close"){let c=8.6*this.zoom,u=Math.cos(this.pitch);a=new L(i.x+s*u*c,1+Math.sin(this.pitch)*c,i.z+r*u*c),h=new L(i.x-s*1.8,1,i.z-r*1.8)}else if(this.view==="overview"){let c=52*this.zoom,u=Math.cos(this.pitch);a=new L(s*u*c,Math.sin(this.pitch)*c,r*u*c+3),h=new L(0,0,3)}else a=new L(i.x,1.55,i.z),h=new L(i.x-s*6,1.55+Math.tan(this.fpitch)*6,i.z-r*6);let l=n?1:Math.min(1,e*9);this.camPos.lerp(a,l),this.camLook.lerp(h,l),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);let o=this.view==="overview"?40:22,d=this.view==="overview"?new L(0,0,3):i;if(this.sun.target.position.copy(d),this.sun.position.set(d.x+7,15,d.z+9),o!==this.shadowR){this.shadowR=o;let c=this.sun.shadow.camera;c.left=-o,c.right=o,c.top=o,c.bottom=-o,c.updateProjectionMatrix()}}fadeOccluders(e){let n=this.camera.position,i=this.player.pos.clone().setY(1),s=i.clone().sub(n),r=s.length(),a=new Ti(n,s.normalize()),h=new L;for(let l of this.occl){let o=this.view!=="first"&&!!a.intersectBox(l.box,h)&&h.distanceTo(n)<r-.2,d=o?.16:1;l.o+=(d-l.o)*Math.min(1,e*9);let c=l.o>.985;for(let u of l.mats)u.opacity=c?1:l.o,u.transparent=!c,u.depthWrite=c}}},Xx=["#F8D977","#F28F7E","#8FC9E8","#A9DCC0"],qx=t=>Xx[Math.floor(t)%4];var yf=t=>t==="k2"||t==="g35"?"young":t==="g68"?"mid":"teen",$x=(t,e)=>{t=t.slice();for(let n=t.length-1;n>0;n--){let i=Math.floor(e()*(n+1));[t[n],t[i]]=[t[i],t[n]]}return t},ma=(t,e,n,i,s,r,a)=>{let h=$x([n,...i.slice(0,2)],s);return{subject:t,q:e,options:h,answer:h.indexOf(n),why:r,hint:a}};function Yx(t,e){let n=yf(t),i=(l,o)=>l+Math.floor(e()*(o-l+1)),s=l=>{let o=new Set;for(;o.size<2;){let d=l+i(-4,4);d!==l&&o.add(d)}return[...o].map(String)};if(t==="k2"){let l=i(1,9),o=i(1,9);return ma("math",`What is ${l} + ${o}?`,String(l+o),s(l+o),e,`${l} plus ${o} is ${l+o}.`,"Count up from the bigger number.")}if(t==="g35"){let l=i(3,9),o=i(3,9);return ma("math",`What is ${l} x ${o}?`,String(l*o),s(l*o),e,`${l} groups of ${o} is ${l*o}.`,"Try skip counting.")}if(n==="mid"){let l=i(2,12),o=i(2,9),d=i(1,9);return ma("math",`What is ${l} x ${o} + ${d}?`,String(l*o+d),s(l*o+d),e,`Multiply first: ${l*o}, then add ${d}.`,"Order of operations: multiply before adding.")}let r=i(2,6),a=i(2,9),h=i(1,9);return ma("math",`Solve for x: ${r}x + ${h} = ${r*a+h}`,String(a),s(a),e,`Subtract ${h}, then divide by ${r}: x = ${a}.`,"Undo the + first, then undo the multiplication.")}var Zx={young:[["Which word is a noun?","puppy",["quickly","jump"]],["What is the opposite of 'hot'?","cold",["warm","red"]],["Which word rhymes with 'cat'?","hat",["dog","cup"]],["What punctuation ends a question?","?",[".","!"]],["Which is a complete sentence?","The dog ran.",["The big dog.","Ran fast."]],["Which word starts with a capital letter?","Monday",["tuesday","apple"],"Days of the week are capitalized."]],mid:[["Which word is an adverb?","slowly",["quiet","table"]],["'Brave' is a synonym for...","courageous",["afraid","tired"]],["What is the plural of 'mouse'?","mice",["mouses","meese"]],["A word that sounds the same but means something else is a...","homophone",["synonym","antonym"]],["Which sentence uses a metaphor?","Time is a thief.",["He ran like the wind.","The bus is late."]],["What is the main idea?","The big point of a text",["A small detail","The title font"]]],teen:[["What is a theme?","The central message of a story",["The main character","The setting"]],["Which is a primary source?","A diary written at the time",["A textbook summary","A movie about it"]],["What does 'foreshadowing' do?","Hints at later events",["Describes the setting","Ends the story"]],["Which word is an antonym of 'verbose'?","concise",["wordy","loud"]],["Which device is 'The wind whispered'?","Personification",["Simile","Hyperbole"]],["A thesis statement...","states your main argument",["lists your sources","ends the paper"]]]},Jx={young:[["What do plants need to grow?","sunlight and water",["only candy","darkness"]],["Which is a solid?","ice",["steam","rain"]],["What is the big star in our sky by day?","the Sun",["the Moon","a planet"]],["Which animal is a mammal?","dolphin",["shark","trout"]],["What do we use our ears for?","hearing",["seeing","smelling"]],["How many legs does an insect have?","6",["8","4"]]],mid:[["What gas do plants take in?","carbon dioxide",["oxygen","helium"]],["What is the center of an atom called?","nucleus",["orbit","cell"]],["Which planet is closest to the Sun?","Mercury",["Venus","Mars"]],["Water boils at...","100 C",["50 C","0 C"]],["The powerhouse of the cell is the...","mitochondria",["nucleus","wall"]],["A hypothesis is...","a testable guess",["a final answer","a graph"]]],teen:[["What is the unit of force?","newton",["joule","watt"]],["DNA stands for...","deoxyribonucleic acid",["dynamic nuclear acid","double nitrogen atom"]],["Which is a chemical change?","rusting iron",["melting ice","tearing paper"]],["What does a catalyst do?","speeds up a reaction",["stops a reaction","adds mass"]],["Which wave needs a medium?","sound",["light","radio"]],["Natural selection favors...","traits that help survival",["the largest animals","the oldest animals"]]]},Kx={young:[["What do we call a map's key?","legend",["story","title"]],["Who was the first U.S. president?","George Washington",["Abraham Lincoln","Benjamin Franklin"]],["Which is a continent?","Africa",["Texas","Pacific"]],["Long ago, people wrote with...","quill pens",["keyboards","tablets"]],["A community helper who fights fires is a...","firefighter",["baker","pilot"]],["What is a holiday for remembering history called?","a memorial day",["a snow day","a field trip"]]],mid:[["Ancient Egyptians built...","pyramids",["castles","skyscrapers"]],["What was the Silk Road?","a trade route",["a fabric","a river"]],["The printing press helped spread...","ideas and books",["weather news","ocean maps"]],["Which river was central to Egypt?","the Nile",["the Amazon","the Thames"]],["The Renaissance began in...","Italy",["Brazil","Japan"]],["A government where people vote is a...","democracy",["monarchy","empire"]]],teen:[["What did the Industrial Revolution change?","how goods were made",["the alphabet","the calendar"]],["The Magna Carta limited the power of...","the king",["the church","merchants"]],["Which event began in 1914?","World War I",["World War II","the Civil War"]],["What is a primary cause of the Cold War?","a clash of ideologies",["a flood","a gold rush"]],["The Constitution begins with...","We the People",["I the President","In God We Trust"]],["Which ancient civilization created democracy?","Athens",["Rome","Persia"]]]},jx={young:[["Who helps sick people feel better?","a doctor",["a pilot","a baker"]],["Who builds houses?","a builder",["a singer","a dentist"]],["Who flies an airplane?","a pilot",["a farmer","a teacher"]],["Who grows food on a farm?","a farmer",["a firefighter","an artist"]],["Who puts out fires?","a firefighter",["a chef","an author"]],["Who teaches children at school?","a teacher",["a mechanic","a vet"]]],mid:[["The work someone does over many years is called a...","career",["hobby","recess"]],["A skill is...","something you can do well and improve with practice",["a kind of snack","a school building"]],["Which job mostly uses computers and code?","software developer",["plumber","chef"]],["A resume is...","a short page listing skills and experience",["a school report card","a type of tax"]],["What does an electrician do?","installs and repairs wiring",["grows crops","writes laws"]],["A good first step in choosing a career is to...","explore what you enjoy and are good at",["pick only the highest pay","wait until you are 40"]]],teen:[["Which cluster includes nurses and physical therapists?","Health Science",["Finance","Manufacturing"]],["An apprenticeship combines...","paid on-the-job training with classroom learning",["only reading about jobs","unpaid volunteering only"]],["A transferable skill is...","a skill useful in many jobs, like communication",["a skill only for one machine","a type of degree"]],["Gross pay minus taxes and deductions equals...","net pay",["interest","tuition"]],["Which question best compares two careers?","What does a normal day look like, and what does it pay?",["Which has the coolest name?","Which is closest to my house?"]],["A certification shows that you...","passed a test proving a specific skill",["finished high school","own a business"]]]},gf={ela:Zx,science:Jx,history:Kx,careers:jx};function xf(t,e,n=Math.random){if(t==="math")return Yx(e,n);let i=yf(e),s=gf[t][i][Math.floor(n()*gf[t][i].length)];return ma(t,s[0],s[1],s[2],n,s[3])}var Et=(t,e)=>e[Math.floor(t()*e.length)],qt=t=>t.charAt(0).toUpperCase()+t.slice(1),Dn={math:"math",ela:"reading and writing",science:"science",history:"history",careers:"careers"},Qx=["soccer","drawing","video games","reading","baking","music","dancing","robots","swimming","chess","skateboarding","gardening","photography","basketball"],ev=["pizza","tacos","pasta","sushi","pancakes","fried rice","burgers","dumplings"],tv=[["Why did the student eat their homework?","Because the teacher said it was a piece of cake!"],["What do you call a sleeping bull?","A bulldozer!"],["Why was the math book sad?","It had too many problems."],["What did the ocean say to the beach?","Nothing, it just waved."],["Why can't you trust atoms?","They make up everything!"],["What has hands but can't clap?","A clock!"],["Why did the scarecrow win an award?","He was outstanding in his field."],["What kind of tree fits in your hand?","A palm tree!"],["Why do bees have sticky hair?","Because they use honeycombs."],["What do you call cheese that isn't yours?","Nacho cheese!"]],nr={cheerful:{yes:["Yay!","Oh, totally!","Ooh!"],hm:["Hmm, let's see!","Good question!"],wow:["No way, that's awesome!","I love that!"],bye:["See you soon!","Bye bye, have a sunny day!"]},shy:{yes:["Um, yeah.","...Okay."],hm:["Uh... I think...","Hmm, um..."],wow:["Oh! Really? That's... nice.","Wow. Um, cool."],bye:["Um, bye.","Okay... see you."]},sporty:{yes:["Yep!","Heck yeah!"],hm:["Okay, huddle up.","Let me think, coach mode."],wow:["Let's gooo!","That's a W!"],bye:["Catch you on the field!","Hustle, hustle!"]},nerdy:{yes:["Correct.","Indeed."],hm:["Technically speaking,","Fun fact:"],wow:["Fascinating!","That's statistically cool."],bye:["Until next time. Cite your sources.","Farewell!"]},artsy:{yes:["Mm, yes.","Beautiful."],hm:["Let me paint you a picture...","Hmm, imagine this:"],wow:["That's so inspiring!","Oh, the colors in that!"],bye:["Stay colorful!","Goodbye, friend, go make something."]},funny:{yes:["Ha! Yes.","You bet."],hm:["Okay, hear me out.","So, plot twist:"],wow:["Shut the front door!","Okay that's actually hilarious."],bye:["I'd say 'break a leg' but we have PE next.","Later, alligator!"]},curious:{yes:["Ooh, yes!","Wait, really?"],hm:["Hmm, why though?","I wonder..."],wow:["Tell me more!","That is so interesting!"],bye:["I have so many more questions! Bye!","See you! Don't forget to ask 'why'."]},bossy:{yes:["Obviously.","Correct."],hm:["Listen.","Here's the plan:"],wow:["Good. I approve.","Not bad. Not bad at all."],bye:["Don't be late.","Dismissed! ...kidding. Mostly."]},dreamy:{yes:["Mm, yes...","Oh, yes."],hm:["I was just wondering...","Hmm, imagine..."],wow:["Ooh, that's like a story.","That sounds magical."],bye:["Goodbye... see you in the clouds.","Bye. I'll daydream about it."]},kind:{yes:["Of course!","Happy to!"],hm:["Let me think about it.","Good thought."],wow:["That's wonderful!","I'm so glad."],bye:["Take care of yourself!","Bye! I'm rooting for you."]}},vf=(t,e)=>{let n=ca(t.spec).filter(i=>i.key!=="shoes");return Et(e,n)},nv={how:"how our day was going",class:"school subjects",hobby:"hobbies",you:"each other's stories",food:"food",gossip:"the latest hallway news",joke:"a joke",help:"studying",quiz:"a quiz question",compliment:"style",invite:"hanging out"},Ul=class{constructor(e,n){this.npc=e;this.ctx=n;this.used=new Set;this.turns=0;this.history=[];this.waiting=null;this.r=pi(e.id*977+Math.floor(Date.now()/6e4))}get feat(){return this._feat??(this._feat=vf(this.npc,pi(this.npc.id*13+5)))}get mem(){return Pe.mem(this.npc.id)}get me(){return Pe.profile.name||"friend"}v(e,n={}){let i=this.npc,s=this.mem,r={me:this.me,first:i.first,grade:i.grade,hobby:s.facts.hobby??"",interest:i.interests[0],food:i.food,dream:i.dream,...n};return e.replace(/\{(\w+)\}/g,(a,h)=>r[h]??"")}pc(e){return this.v(e[this.npc.personality]??e.d)}flavor(e,n=.33){return this.r()<n?`${Et(this.r,nr[this.npc.personality].yes)} ${e}`:e}reply(e,n={}){let i={text:e,options:n.options??this.menu(),mood:n.mood??"happy",delta:n.delta??0,end:n.end,quiz:n.quiz};return this.turns++,this.history.push({who:"npc",text:e}),is(this.npc.id,"npc",e),i.delta&&Dc(this.npc.id,i.delta),i}note(e){this.used.add(e),Pe.edit(this.npc.id,n=>{n.topics.push(e),n.topics.length>24&&n.topics.shift(),n.lastDay=fa(),n.lastAt=Date.now()})}greet(){let e=this.npc,n=this.mem,i=!n.met,s=Date.now()-n.lastAt,r=n.lastDay&&n.lastDay!==fa()?Math.max(1,Math.round((Date.parse(fa())-Date.parse(n.lastDay))/864e5)):0,a=this.me,h,l="happy",o=0,d=vf(e,this.r).phrase;if(i)h=this.pc({cheerful:`Hi hi! I'm ${e.first}! I'm in grade ${e.grade}. Are you new here? I love your ${ca(Pe.profile.avatar).find(c=>c.key==="top")?.phrase??"style"}!`,shy:`Oh! Um... hi. I'm ${e.first}. ...Are you ${a}?`,sporty:`Hey! I'm ${e.first}. You look fast. You play anything?`,nerdy:`Hello. I'm ${e.first}, grade ${e.grade}. Did you know this hall has exactly 44 rows of tiles? ...Sorry. Hi.`,artsy:`Hi! I'm ${e.first}. I love the colors you're wearing. Is that on purpose?`,funny:`Hey, I'm ${e.first}. Don't worry, I'm funnier than I look.`,curious:`Hi! I'm ${e.first}! Wait, who are you? What do you like? Tell me everything!`,bossy:`Hi. I'm ${e.first}. I run the ${e.interests[0]} club. You should join.`,dreamy:`Oh... hi. I'm ${e.first}. I was just imagining we were all on a ship. Welcome aboard.`,kind:`Hi there! I'm ${e.first}. Welcome! Can I help you find anything?`,d:`Hi! I'm ${e.first}.`}),Pe.profile.name&&(h+=` Nice to meet you, ${a}!`),Pe.edit(e.id,c=>{c.met=!0,c.fr=Math.max(c.fr,2)}),Pe.profile.stats.talks++,o=1,l=e.personality==="shy"?"shy":"happy";else if(n.hurt>=2&&n.fr<12)h=this.pc({d:"Oh. Hi.",funny:"Oh. It's you. Hi, I guess.",kind:"Hi. I'm still a bit upset, but hi."}),l="annoyed";else{let c=ns(n.fr),u=c==="best friend"?`There you are, ${a}! My favorite person!`:c==="close friend"?`${a}! I was hoping I'd see you!`:c==="friend"?`Hey ${a}!`:`Hi again, ${a}.`,f="";s<8*6e4&&n.lastAt?f=Et(this.r,["Back so soon?","Missed me already?","Did you forget something?"]):n.lunchBuddy&&this.ctx.kind==="lunch"?f="Still on for lunch together?":n.facts.hobby&&this.r()<.6?f=`How's ${n.facts.hobby} going?`:n.facts.mood&&["sad","tired","nervous","stressed","worried","lonely"].includes(n.facts.mood)&&this.r()<.8?f=`Are you feeling less ${n.facts.mood} than last time?`:n.quiz.total>0&&this.r()<.5?f=n.quiz.right>=n.quiz.total/2?"You were so good at that quiz stuff last time.":"Want another try at those quiz questions?":n.topics.length?f=`Last time we talked about ${nv[n.topics[n.topics.length-1]]??"stuff"}. That was fun.`:f="";let g=this.ctx.place==="class"?Et(this.r,["Shh! Whisper, the teacher is right there.","Psst, quietly!","Hi! Quick, before she looks over."]):r>=2?`It's been ${r} days!`:this.ctx.kind==="arrive"?Et(this.r,["Morning already!","Ready for today?"]):this.ctx.kind==="lunch"?Et(this.r,["I'm starving.","Lunch smells good today."]):this.ctx.kind==="dismiss"?"Almost time to go home!":this.ctx.kind==="class"?"Shouldn't we both be in class? ...I won't tell.":"";h=`${u} ${f||g}`.trim(),o=r?1:0,Pe.profile.stats.talks++}return Pe.edit(e.id,c=>{c.lastDay=fa(),c.lastAt=Date.now(),c.talks++}),this.reply(h,{mood:l,delta:o,options:this.menu()})}menu(){let e=this.npc,n=this.mem,i=[],s=(h,l)=>{i.length<5&&i.push({id:h,label:l})},a=[["how","How's your day going?",!0],["hobby","What do you do for fun?",!0],["class","What's your favorite subject?",!0],["you","Tell me about yourself",!0],["quiz","Quiz me!",e.personality==="nerdy"||e.personality==="curious"||n.fr>=10],["gossip","Heard anything interesting?",n.fr>=8],["compliment",`I like your ${this.feat.noun}`,!0],["food","What's your favorite food?",!0],["joke","Tell me a joke",e.personality==="funny"||n.fr>=6],["help","Can you help me study?",n.fr>=6],["invite","Want to eat lunch together?",n.fr>=12&&!n.lunchBuddy],["advice","I need some advice",n.fr>=15]].filter(([h,,l])=>l&&!this.used.has(h));return a.sort((h,l)=>(n.topics.lastIndexOf(h[0])+1||-1)-(n.topics.lastIndexOf(l[0])+1||-1)),a.slice(0,4).forEach(([h,l])=>s(h,l)),i.push({id:"bye",label:"See you later"}),i}back(e=[]){return[...e,...this.menu().filter(n=>!e.some(i=>i.id===n.id))].slice(0,5)}choose(e,n){let i=this.npc,s=this.mem,r=this.r,a=nr[i.personality],h=!this.used.has(e),l=o=>h?o:0;if(e.startsWith("ans"))return this.answer(Number(e.slice(3)));switch(this.history.push({who:"me",text:this.optLabel(e,n)}),is(i.id,"me",this.optLabel(e,n)),e!=="hobby_pick"&&e!=="food_pick"&&e!=="fav_pick"&&e!=="feel"&&this.note(e),e){case"bye":return this.reply(this.v(`${Et(r,a.bye)} ${s.fr>=30?"Come find me later, "+this.me+"!":""}`).trim(),{end:!0,options:[]});case"how":{let o=this.ctx.kind==="arrive"?this.pc({cheerful:"Great! The bus was only a little loud today.",shy:"Okay... a little nervous about class, honestly.",sporty:"Pumped! I jogged here.",nerdy:"Productive. I reviewed my notes on the bus.",artsy:"Inspired! The light in this hallway is gorgeous.",funny:"Surviving! Barely. Breakfast was just a banana peel and hope.",curious:"So good! I've already asked three questions today.",bossy:"Busy. I've got a schedule to keep.",dreamy:"Floaty. I woke up from a really good dream.",kind:"Good! How about you?",d:"Pretty good!"}):this.pc({cheerful:"Awesome! How are you?",shy:"Fine... thanks for asking.",sporty:"Great, I've got practice later!",nerdy:"Well, my pencil snapped, but otherwise fine.",artsy:"Creative. I sketched a bird during snack.",funny:"My day is like a sandwich: mostly bread.",curious:"Curious as ever. And you?",bossy:"Efficient. And you?",dreamy:"Drifty, but nice.",kind:"I'm good, thank you! How are you doing?",d:"Good! You?"});return this.reply(`${o}`,{delta:l(1),options:[{id:"feel",label:"I'm doing great",data:"great"},{id:"feel",label:"A little tired",data:"tired"},{id:"feel",label:"Kind of nervous",data:"nervous"},{id:"feel",label:"Sort of sad",data:"sad"}]})}case"feel":{let o=String(n);Pe.learn("mood",o),Pe.edit(i.id,c=>{c.facts.mood=o});let d=o==="great"?this.flavor(Et(r,["That's awesome, it's contagious!","Love that energy!","Good! Keep it going!"])):o==="tired"?this.pc({cheerful:"Aw, me too sometimes. Have some water and a snack!",shy:"Me too... maybe we can both sit quietly for a second.",sporty:"Shake it out! A few jumping jacks and you'll be good.",nerdy:"Sleep is scientifically important. Try going to bed earlier.",d:"Hang in there. Maybe a snack at lunch will help?"}):o==="nervous"?this.pc({cheerful:"You've totally got this! I believe in you!",shy:"Oh. I get nervous too. We can be nervous together.",sporty:"Deep breath. Treat it like the big game, you've trained for this.",nerdy:"Statistically, most of the things we worry about don't happen.",d:"It's okay to feel that way. One step at a time."}):this.pc({kind:"I'm sorry. Do you want to sit together for a bit? I'll listen.",funny:"Aw. Okay, emergency compliment: your whole vibe is great.",d:"I'm sorry you're sad. I'm here if you want to talk."});return this.reply(d,{delta:l(2)+1,mood:o==="sad"?"sad":"happy",options:this.back()})}case"class":{let o=i.favSubject,d=i.hardSubject,c={math:"numbers always make sense",ela:"stories take me places",science:"I get to find out how things work",history:"the past is full of surprises"}[o];return this.reply(this.v(`I love ${Dn[o]}. ${qt(c)}. ${Dn[d]===Dn[o]?"":`${qt(Dn[d])} is harder for me, though.`} What's yours?`),{delta:l(1),mood:"happy",options:["math","ela","science","history"].map(u=>({id:"fav_pick",label:qt(Dn[u]),data:u})).concat([{id:"back",label:"Not sure yet",data:""}])})}case"fav_pick":{let o=n;Pe.learn("favSubject",o),Pe.edit(i.id,c=>{c.facts.favSubject=o});let d=o===i.favSubject;return this.reply(d?this.v(`No way, ${Dn[o]} is my favorite too! We should study together sometime.`):o===i.hardSubject?this.v(`Really? ${qt(Dn[o])} is tough for me. Maybe you could help me!`):this.v(`${qt(Dn[o])}, nice! I'd like to hear more about that.`),{delta:d?4:2,mood:d?"excited":"happy",options:this.back()})}case"back":return this.reply(this.flavor("Okay! What else?"),{options:this.menu()});case"hobby":{let o=i.interests[0],d={soccer:"I practice every day after school.",chess:"I'm working on a new opening.",baking:"Yesterday I made lemon cookies.","robotics club":"We're building a robot that picks up balls.",dinosaurs:"My favorite is the Triceratops!",drawing:"I fill a notebook every week."}[o]??`I could talk about ${o} all day.`;return this.waiting="hobby",this.reply(this.v(`I'm really into ${o}. ${d} I also like ${i.interests[1]}. What about you?`),{delta:l(1),options:[...[i.interests[0],...Qx.filter(c=>!i.interests.includes(c)).slice(0,3),"something else"].map(c=>({id:"hobby_pick",label:qt(c),data:c}))]})}case"hobby_pick":{let o=String(n).toLowerCase();if(this.waiting=null,o==="something else")return this.reply(this.flavor("Ooh, tell me what it is! Just type it below."),{options:this.menu(),mood:"excited"});Pe.learn("hobby",o),Pe.edit(i.id,c=>{c.facts.hobby=o});let d=i.interests.some(c=>c.includes(o)||o.includes(c));return this.reply(d?this.v(`No way, we like the same thing! ${Et(r,a.wow)} We should do ${o} together sometime.`):this.v(`${qt(o)}? Cool! ${Et(r,a.wow)} I've never really tried it. Maybe you can show me.`),{delta:d?5:2,mood:d?"excited":"happy",options:this.menu()})}case"you":{let o=ns(s.fr),d=s.talks,c=o==="new face"?i.bio:o==="classmate"?`I live with ${i.pet??"my family"}${i.pet?"":", it's pretty loud"}, and I could eat ${i.food} every day.`:o==="friend"?`Someday I want to ${i.dream}. I haven't told many people that.`:o==="close friend"?`Okay, a secret: I ${i.quirk}. Everyone's noticed, I think.`:`You're my best friend, so... I ${i.secret}. Please don't tell.`;return this.reply(this.v(c),{delta:l(o==="new face"?1:2)+(d%3===0,0),mood:o==="best friend"?"shy":"happy"})}case"food":return this.waiting="food",this.reply(this.v(`Easy: ${i.food}! What's yours?`),{delta:l(1),options:[...ev.slice(0,4).map(o=>({id:"food_pick",label:qt(o),data:o})),{id:"food_pick",label:qt(i.food),data:i.food}].slice(0,5)});case"food_pick":{let o=String(n);return Pe.learn("food",o),Pe.edit(i.id,d=>{d.facts.food=o}),this.waiting=null,this.reply(o===i.food?this.v(`${qt(o)}! We have the same taste. Today's lunch better be good.`):this.v(`${qt(o)} is good too. I'd trade you some ${i.food} for it.`),{delta:o===i.food?4:1,mood:o===i.food?"excited":"happy",options:this.menu()})}case"gossip":return this.gossip(h);case"compliment":{let o=this.feat,d=this.pc({shy:`Oh! Um... thank you. I picked my ${o.phrase} myself.`,cheerful:`Aww, thanks! I love my ${o.phrase} too!`,artsy:`Thank you! My ${o.phrase} is part of my whole look.`,sporty:"Ha, thanks! Gotta look good when we win.",funny:`Thanks! My ${o.noun} has been told it's the best part of me.`,d:`Thanks! That's sweet. I like my ${o.phrase} too.`});return this.reply(d,{delta:l(3),mood:i.personality==="shy"?"shy":"happy"})}case"joke":{let[o,d]=Et(r,tv),c=i.personality==="funny"?"Oh, I have SO many. ":i.personality==="shy"?"Um, okay... ":"";return this.reply(`${c}${o} ... ${d}`,{delta:l(2),mood:"excited",options:[{id:"laugh",label:"Ha! Good one"},{id:"groan",label:"*groan*"},...this.back().slice(0,3)]})}case"laugh":return this.reply(this.flavor(Et(r,["I'm here all week!","I knew you'd get it.","That one never fails."])),{delta:2,mood:"excited"});case"groan":return this.reply(this.pc({funny:"Groans are the sound of success.",d:"Hey, comedy is hard!"}),{delta:0});case"help":{if(i.hardSubject&&this.r()<.5&&i.personality!=="nerdy"&&s.fr<30){let o=er(i.bestFriend);return this.reply(this.v(`I'm better at ${Dn[i.favSubject]}. If you need ${Dn[i.hardSubject]}, ask ${o?.first??"Ms. Brown"}. Want me to quiz you on ${Dn[i.favSubject]} instead?`),{delta:l(1),options:[{id:"quiz",label:"Sure, quiz me"},...this.back().slice(0,3)]})}return this.choose("quiz")}case"quiz":{let o=Pe.profile.avatar.age,d=r()<.7?i.favSubject:["math","ela","science","history"][Math.floor(r()*4)];return this.quiz=xf(d,o,r),this.waiting="quiz",this.reply(this.v(`Okay, ${Dn[d]} time! ${this.quiz.q}`),{delta:0,mood:"excited",quiz:this.quiz,options:this.quiz.options.map((c,u)=>({id:`ans${u}`,label:c}))})}case"invite":{let o=i.personality==="shy"?25:12;return s.fr>=o?(Pe.edit(i.id,d=>{d.lunchBuddy=!0}),this.reply(this.pc({shy:"Really? Um... yes. I'd like that.",d:`Yes! I'll save you a seat at lunch. ${i.food[0].toUpperCase()+i.food.slice(1)} for both of us!`}),{delta:4,mood:"excited",options:this.back()})):this.reply(this.pc({shy:"Um... maybe after we know each other better? Sorry.",d:"Maybe soon! Let's hang out a bit more first."}),{delta:0,mood:"shy",options:this.back()})}case"advice":{let o=this.pc({cheerful:"Smile at three people today. It really works.",shy:"Taking a deep breath before talking helps me. And writing notes.",sporty:"Warm up before big things. Even a test.",nerdy:"Make a study schedule. Fifteen minutes a day beats a panic night before.",artsy:"Doodle when you feel stuck. Your brain loosens up.",funny:"If all else fails, laugh at it. Then try again.",curious:"Ask more questions. Nobody minds, honestly.",bossy:"Make a list. Do the hardest thing first.",dreamy:"Look out a window for a minute. Then you'll know what to do.",kind:"Be gentle with yourself. And ask for help, it's brave.",d:"Take it one step at a time."});return this.reply(o,{delta:l(2),options:this.back()})}case"chatter_pick":return this.reply("Okay!",{options:this.menu()});default:return this.reply(this.flavor("Hm, I'm not sure what to say to that."),{options:this.menu(),mood:"neutral"})}}optLabel(e,n){return typeof n=="string"&&n?qt(n):this.menu().find(i=>i.id===e)?.label??e}answer(e){let n=this.quiz,i=this.npc;this.quiz=void 0,this.waiting=null;let s=e===n.answer;return Pe.edit(i.id,r=>{r.quiz.total++,s&&(r.quiz.right++,r.helped++)}),Pe.profile.stats.quizTotal++,s&&Pe.profile.stats.quizRight++,Pe.save(),this.history.push({who:"me",text:n.options[e]??"..."}),is(i.id,"me",n.options[e]??"..."),s?this.reply(this.v(`${Et(this.r,nr[i.personality].wow)} Yes, "${n.options[n.answer]}"! ${n.why??""}`),{delta:3,mood:"excited",options:[{id:"quiz",label:"Another one!"},...this.menu().slice(0,3)]}):this.reply(this.v(`Almost! The answer is "${n.options[n.answer]}". ${n.why??""} ${i.personality==="kind"?"That's a tricky one.":"Don't worry, you'll get the next one."}`),{delta:1,mood:"neutral",options:[{id:"quiz",label:"Try another"},...this.menu().slice(0,3)]})}gossip(e){let n=this.npc,i=this.r,s=er(n.bestFriend),r=n.rival!=null?er(n.rival):null,a=Et(i,Qs),h=[],l=Qs.filter(c=>c.id!==n.id&&(Pe.peek(c.id)?.fr??0)>=30);l.length&&h.push("opinion"),s&&h.push("friend"),r&&h.push("rival"),h.push("quirk","new");let o=Et(i,h),d="";if(o==="opinion"){let c=Et(i,l);d=`${c.first} told me you're really nice. ${c.first} remembers that you ${Pe.peek(c.id).quiz.right>0?"helped with a quiz":"said hi"}.`}else if(o==="friend"&&s)d=`${s.first} and I are working on ${n.interests[0]} together. ${s.first} ${s.quirk}, which is funny.`;else if(o==="rival"&&r)d=`${r.first} and I are kind of competing this week. Please don't tell ${r.first}. ${r.first} ${r.quirk}.`;else if(o==="quirk")d=`${a.first} ${a.quirk}. Have you noticed?`;else{let c=ca(a.spec).find(u=>u.key==="hat"||u.key==="glasses"||u.key==="hair");d=`${a.first} showed up with ${c.phrase} today. Everyone's talking about it.`}return this.reply(this.pc({shy:`Um... don't tell anyone, but ${d}`,funny:`Okay, hot gossip, ${this.me}: ${d}`,d}),{delta:e?1:0,mood:"happy"})}say(e){if(e=e.trim().slice(0,240),!e)return this.reply("...?",{mood:"neutral"});let n=this.npc,i=e.toLowerCase(),s=this.r;if(this.history.push({who:"me",text:e}),is(n.id,"me",e),this.waiting==="quiz"&&this.quiz){let c=this.quiz.options.findIndex(u=>i.includes(u.toLowerCase()));if(c>=0)return this.answer(c)}let r=i.match(/(?:my name is|call me|i'?m called)\s+([a-z][a-z'-]{1,16})/);if(r){let c=qt(r[1]);return Pe.setProfile({name:c}),this.reply(this.v(`Nice to meet you, ${c}! I'll remember that.`),{delta:2,mood:"excited"})}let a=i.match(/\bi(?:'m| am| feel| feeling)\s+(?:so |really |kind of |a little |very )?(sad|happy|tired|nervous|scared|excited|angry|bored|hungry|sick|lonely|stressed|worried|great|good|fine|okay|proud)\b/);if(a){let c=a[1];return this.choose("feel",["happy","excited","great","good","fine","okay","proud"].includes(c)?"great":["tired","bored","sick","hungry"].includes(c)?"tired":["nervous","scared","worried","stressed"].includes(c)?"nervous":"sad")}let h=i.match(/\bi (?:really |absolutely )?(?:like|love|enjoy|adore|play)\s+([a-z ]{2,28})/);if(h)return this.choose("hobby_pick",h[1].trim().replace(/\s+(a lot|so much|too|and.*)$/,""));let l=i.match(/\bmy favou?rite (subject|food|color|colour|animal|game|sport|class) is\s+([a-z ]{2,24})/);if(l){let c=l[1],u=l[2].trim();Pe.learn("fav_"+c,u),Pe.edit(n.id,g=>{g.facts["fav_"+c]=u});let f=c==="food"&&u.includes(n.food.split(" ")[0]);return this.reply(this.v(f?`${qt(u)}! Mine too!`:`${qt(u)}, huh? I'll remember that your favorite ${c} is ${u}.`),{delta:f?3:2,mood:f?"excited":"happy"})}let o=i.match(/\bi have (?:a|an|two|three) ([a-z]+)(?: named ([a-z]+))?/);if(o)return Pe.learn("pet",o[1]+(o[2]?" named "+qt(o[2]):"")),this.reply(this.v(`A ${o[1]}${o[2]?" named "+qt(o[2]):""}! I want to meet them${n.pet?`. I have ${n.pet}, you know.`:"."}`),{delta:3,mood:"excited"});if(/\b(stupid|dumb|ugly|hate you|shut up|loser|idiot)\b/.test(i))return this.reply(this.pc({shy:"...That hurts. I'm going to go now.",funny:"Ouch. That was not funny. Even I can tell.",kind:"That's not very kind. I'd like us to be nice to each other.",d:"That's rude. I don't like that."}),{delta:-8,mood:"annoyed",options:[{id:"sorry",label:"Sorry, I didn't mean it"},{id:"bye",label:"Okay, bye"}]});if(/\b(sorry|apologi[sz]e|my bad)\b/.test(i))return this.reply(this.pc({kind:"Thank you for saying that. It's okay.",d:"Okay. Thanks for saying sorry."}),{delta:3,mood:"neutral",options:this.menu()});if(/\b(thanks|thank you|thx)\b/.test(i))return this.reply(this.flavor(Et(s,["Anytime!","Of course.","No problem!"])),{delta:1,options:this.menu()});if(/\b(you'?re|you are|love your|like your|nice|cool|awesome|amazing|great|pretty|cute)\b/.test(i)&&/\b(you|your)\b/.test(i))return this.choose("compliment");if(/\b(bye|goodbye|see you|gotta go|have to go|later)\b/.test(i))return this.choose("bye");if(/\b(joke|funny|laugh)\b/.test(i))return this.choose("joke");if(/\b(quiz|test me|question)\b/.test(i))return this.choose("quiz");if(/\b(help|study|homework)\b/.test(i))return this.choose("help");if(/\b(lunch|eat|food|hungry|pizza|snack)\b/.test(i))return this.choose("food");if(/\b(hobby|hobbies|fun|weekend|play)\b/.test(i))return this.choose("hobby");if(/\b(class|subject|math|science|history|reading|english|teacher)\b/.test(i))return this.choose("class");if(/\b(who are you|about you|your name|tell me about)\b/.test(i))return this.choose("you");if(/\b(rumou?r|gossip|news|heard)\b/.test(i))return this.choose("gossip");if(/\b(hi|hello|hey|yo|sup)\b/.test(i)&&i.split(/\s+/).length<=3)return this.reply(this.flavor("Hi! What's up?"),{mood:"happy"});if(/\b(how are you|how's it going|what's up)\b/.test(i))return this.choose("how");if(/\?\s*$/.test(i))return this.reply(this.pc({nerdy:"Hmm, interesting question. I'd have to look that up. Want a quiz question instead?",curious:"Ooh, good question! I don't know, but I want to find out with you.",d:`${Et(s,nr[n.personality].hm)} I'm not sure. What do you think?`}),{delta:1,mood:"neutral"});let d=this.mem;return this.reply(this.v(d.facts.hobby?`${Et(s,nr[n.personality].hm)} Is that like ${d.facts.hobby}? Tell me more.`:`${Et(s,nr[n.personality].hm)} Tell me more about that.`),{delta:1,mood:"neutral"})}};function _f(t,e,n){let i=pi((t.id*31+e.id)*1009+Math.floor(Date.now()/2e4)),s=Pe.profile,r=s.name||"the new kid",a=Pe.peek(t.id),h=(Pe.peek(e.id)?.fr??0)>=30||(a?.fr??0)>=30,l=Et(i,ca(e.spec).filter(d=>d.key!=="shoes")),o=[`${e.first}, did you finish the ${Et(i,["math","reading","science","history"])} homework?`,`Are you going to ${t.interests[0]} after school?`,`I love your ${l.phrase}!`,`${e.first}, you ${e.quirk} again. It's cute.`,h?`${r} is really nice. Have you talked to ${r}?`:`Who's the new kid, ${e.first}?`,n.kind==="lunch"?`I'm trading ${t.food} for ${e.food}. Deal?`:n.kind==="arrive"?"The bus was SO loud this morning.":n.kind==="dismiss"?"Don't forget your backpack!":`Shh, ${e.first}, we're supposed to be in class.`,`${Et(i,t.interests)} club is on Thursday, ${e.first}!`,`Did you know ${t.pet??"my family"} ${t.pet?"learned a new trick?":"makes the best snacks?"}`];return Et(i,o)}function bf(t){let e=Pe.mem(t.id),n=Pe.profile.name||"you";return e.fr>=60?`${n}! Over here!`:e.facts.hobby?`Hey ${n}! How's ${e.facts.hobby}?`:`Hey ${n}!`}var Fc=0;async function iv(t,e){if(Date.now()<Fc)return null;let n=t.npc,i=t.mem,s=new AbortController,r=setTimeout(()=>s.abort(),6500);try{let a={npc:{name:n.name,first:n.first,grade:n.grade,role:n.role,title:n.title,personality:n.personality,interests:n.interests,favSubject:n.favSubject,food:n.food,pet:n.pet,dream:n.dream,quirk:n.quirk,bio:n.bio},player:{name:Pe.profile.name,facts:Pe.profile.facts},memory:{friendship:i.fr,tier:ns(i.fr),talks:i.talks,topics:i.topics.slice(-6),facts:i.facts,recent:i.log.slice(-8)},ctx:t.ctx,history:t.history.slice(-8),input:e},h=await fetch("/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a),signal:s.signal});if(!h.ok)return Fc=Date.now()+5*6e4,null;let l=await h.json();if(!l||typeof l.text!="string")return null;let o=Math.max(-6,Math.min(6,Number(l.delta)||0));if(t.history.push({who:"me",text:e}),is(n.id,"me",e),l.learned&&typeof l.learned=="object")for(let[d,c]of Object.entries(l.learned))typeof c=="string"&&(Pe.learn(d,c.slice(0,40)),Pe.edit(n.id,u=>{u.facts[d]=String(c).slice(0,40)}));return t.history.push({who:"npc",text:l.text}),is(n.id,"npc",l.text),o&&Dc(n.id,o),t.turns++,{text:String(l.text).slice(0,400),options:t.menu(),mood:l.mood||"happy",delta:o}}catch{return Fc=Date.now()+6e4,null}finally{clearTimeout(r)}}async function Sf(t,e){return await iv(t,e)??t.say(e)}var sv=`
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
`,Mf=!1,Tf=()=>{if(Mf)return;Mf=!0;let t=document.createElement("style");t.textContent=sv,document.head.appendChild(t)},dt=(t,e="",n,i="")=>{let s=document.createElement(t);return e&&(s.className=e),i&&(s.textContent=i),n?.appendChild(s),s};function wf(t,e,n=0,i=0,s=3.7){let r=t.getContext("2d"),a=t.width,h=t.height;r.clearRect(0,0,a,h);let l=s*(e.age==="adult"?.74:Math.min(1,Il[e.age??"hs"]??1))*(a/118);r.save(),r.translate(a/2,h-10*(h/150)),r.scale(l,l),r.shadowColor="rgba(52,34,46,.3)",r.shadowBlur=2,r.shadowOffsetY=1,Ys(r,0,0,{...e,dir:"down",moving:!1,walk:0,mouth:i,tag:!1},n),r.restore()}var Bl=t=>"\u2665".repeat(Lc(t))+"\u2661".repeat(5-Lc(t)),kl=class{constructor(e){this.typing=0;this.full="";this.raf=0;this.t0=0;this.busy=!1;this.opts=[];this.onClose=()=>{};this.onReply=()=>{};this.say=async e=>{if(!(!this.convo||this.busy)){this.busy=!0,this.showYou(e);try{this.deliver(await Sf(this.convo,e))}finally{this.busy=!1}}};this.mood="happy";this.loop=()=>{if(!this.isOpen)return;let e=performance.now(),n=this.typing<this.full.length;n&&(this.typing+=1.1+this.full.length*.012,this.renderText()),this.npc&&wf(this.cv,this.npc.look,(e-this.t0)/1e3,n?.4+.6*Math.abs(Math.sin(e/70)):0),this.raf=requestAnimationFrame(this.loop)};Tf(),this.root=dt("div","uchat",e),this.card=dt("div","uchat-card",this.root),this.cv=dt("canvas","uchat-portrait",this.card),this.cv.width=236,this.cv.height=300;let n=dt("div","uchat-main",this.card),i=dt("div","uchat-head",n);this.nameEl=dt("b","",i),this.subEl=dt("span","uchat-sub",i),this.heartEl=dt("span","uchat-hearts",i);let s=dt("button","uchat-x",i,"Bye");s.type="button",s.onclick=()=>this.close(),this.textEl=dt("div","uchat-text",n),this.textEl.setAttribute("aria-live","polite"),this.textEl.onclick=()=>this.finishTyping(),this.optsEl=dt("div","uchat-opts",n);let r=dt("form","uchat-in",n);this.input=dt("input","",r),this.input.placeholder="Or type something to say\u2026",this.input.maxLength=200,this.input.autocomplete="off";let a=dt("button","",r,"Say");a.type="submit",r.onsubmit=h=>{h.preventDefault();let l=this.input.value.trim();l&&(this.input.value="",this.say(l))},this.root.addEventListener("keydown",h=>{h.stopPropagation(),h.key==="Escape"?this.close():document.activeElement!==this.input&&/^[1-6]$/.test(h.key)&&this.opts[+h.key-1]&&this.pick(this.opts[+h.key-1])}),["pointerdown","wheel","touchstart"].forEach(h=>this.root.addEventListener(h,l=>l.stopPropagation(),{passive:!0}))}get isOpen(){return this.root.classList.contains("show")}open(e,n){this.npc=e,this.convo=new Ul(e,n),this.root.classList.add("show"),this.t0=performance.now(),this.busy=!1,this.nameEl.textContent=e.name,this.refreshHead(),this.deliver(this.convo.greet()),this.loop(),setTimeout(()=>this.root.querySelector(".uchat-opts button")?.focus({preventScroll:!0}),30)}async pick(e){!this.convo||this.busy||(this.showYou(this.labelOf(e)),this.deliver(this.convo.choose(e.id,e.data)))}labelOf(e){return e.label}showYou(e){this.textEl.innerHTML="";let n=dt("span","you",this.textEl,`${Pe.profile.name||"You"}: ${e}`)}refreshHead(){if(!this.npc)return;let e=Pe.mem(this.npc.id);this.subEl.textContent=`${this.npc.role==="staff"?this.npc.title:"Grade "+this.npc.grade} \xB7 ${ns(e.fr)}`,this.heartEl.textContent=Bl(e.fr)}deliver(e){this.refreshHead(),this.opts=e.options,this.optsEl.innerHTML="",e.options.forEach((i,s)=>{let r=dt("button","",this.optsEl,`${s+1}. ${i.label}`);r.type="button",r.onclick=()=>void this.pick(i)});let n=this.textEl.querySelector(".you");this.textEl.innerHTML="",n&&this.textEl.appendChild(n),this.full=e.text,this.typing=0,this.mood=e.mood,this.onReply(e,this.npc),e.end&&setTimeout(()=>this.close(),Math.min(2600,900+e.text.length*28))}finishTyping(){this.typing=this.full.length,this.renderText()}renderText(){let e=this.textEl.querySelector(".say");e||(e=dt("span","say",this.textEl)),e.textContent=this.full.slice(0,Math.floor(this.typing))}close(){this.isOpen&&(this.root.classList.remove("show"),cancelAnimationFrame(this.raf),this.input.blur(),this.onClose())}},Ol=class{constructor(e){this.onPick=()=>{};Tf(),this.root=dt("div","ujournal",e);let n=dt("div","ujournal-card",this.root),i=dt("header","",n,"Friends and classmates"),s=dt("button","",i,"Close");s.type="button",s.onclick=()=>this.hide(),this.list=dt("div","ujournal-list",n),this.root.addEventListener("pointerdown",r=>r.stopPropagation()),this.root.addEventListener("keydown",r=>{r.stopPropagation(),r.key==="Escape"&&this.hide()})}show(){this.render(),this.root.classList.add("show")}hide(){this.root.classList.remove("show")}toggle(){this.root.classList.contains("show")?this.hide():this.show()}render(){this.list.innerHTML="";let e=Pe.friends();if(!e.length){dt("div","ujournal-empty",this.list,"You haven't met anyone yet. Walk up to a student and tap them, or press T when one is close.");return}for(let{id:n,mem:i}of e){let s=er(Number(n));if(!s)continue;let r=dt("button","ujournal-item",this.list);r.type="button",r.onclick=()=>{this.hide(),this.onPick(s)};let a=dt("canvas","",r);a.width=108,a.height=140,wf(a,s.look,0,0,3.7);let h=dt("div","",r),l=Object.entries(i.facts).map(([o,d])=>`${o.replace("fav_","favorite ")}: ${d}`).join(", ");dt("b","",h,s.name),dt("small","",h,`${s.role==="staff"?s.title:"Grade "+s.grade} \xB7 ${ns(i.fr)} ${Bl(i.fr)}`),dt("small","",h,`Talked ${i.talks}x \xB7 quiz ${i.quiz.right}/${i.quiz.total}${i.lunchBuddy?" \xB7 lunch buddy":""}`),l&&dt("small","",h,`Remembers: ${l}`)}}};var Ef=["Ha, totally!","Same!","Yeah!","No way!","Okay okay.","I know, right?","Shh!","Maybe!","Ooh!"],rv=(t,e)=>new L(t-56/2,0,e-44/2),zl=class{constructor(e,n=document.body){this.hall=e;this.nearby=null;this.talkingTo=null;this.onNearby=()=>{};this.bubbles=[];this.tags=new Map;this.chase=null;this.nextChatter=4;this.approachAt=new Map;this.approaching=null;this.acc=0;this.layer=document.createElement("div"),this.layer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:34",n.appendChild(this.layer),this.chat=new kl(n),this.journal=new Ol(n),this.chat.onClose=()=>this.endTalk(),this.journal.onPick=i=>{let s=e.persons().find(r=>r.def?.id===i.id);s?this.talkTo(s):e.onToast(`${i.first} isn't in the hall right now.`)},e.onTap=i=>{i?.def&&this.talkTo(i)},e.onTick.push((i,s)=>this.tick(i,s)),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&((i.key==="t"||i.key==="T")&&!this.chat.isOpen?this.nearby&&this.talkTo(this.nearby):(i.key==="f"||i.key==="F")&&!this.chat.isOpen&&this.journal.toggle())})}ctx(){let e=Gn[Math.max(0,this.hall.idx)];return{place:"hall",kind:e.kind,period:e.name,clock:Pl(this.hall.clock)}}dist(e){return Math.hypot(e.pos.x-this.hall.player.pos.x,e.pos.z-this.hall.player.pos.z)}talkTo(e){let n=e.def;if(!n||this.chat.isOpen)return;if(this.dist(e)>2.7){this.chase={p:e,replan:0},this.hall.walkToPoint(e.pos.x+56/2,e.pos.z+44/2,"there"),this.hall.onToast(`Walking over to ${n.first}\u2026`);return}this.chase=null,this.hall.cancelNav(),this.talkingTo=e,e.talking=!0,e.moving=!1;let i=new L().subVectors(this.hall.player.pos,e.pos);e.dir=this.hall.faceDir(i,e.dir);let s=this.hall.player;s.dir=this.hall.faceDir(i.clone().negate(),s.dir),this.hall.inputLocked=!0,this.journal.hide(),this.chat.open(n,this.ctx())}endTalk(){let e=this.talkingTo;if(this.talkingTo=null,this.hall.inputLocked=!1,e){e.talking=!1;let n=e;n.path&&!n.path.length&&n.hidden}}say(e,n,i=3400){this.bubbles.filter(r=>r.p===e).forEach(r=>{r.el.remove()}),this.bubbles=this.bubbles.filter(r=>r.p!==e);let s=document.createElement("div");s.className="uchat-bubble",s.textContent=n,this.layer.appendChild(s),this.bubbles.push({el:s,p:e,until:performance.now()+i,h:1.55*(Js[e.look.age??"hs"]??1)+.35})}project(e,n){let i=new L(e.pos.x,n,e.pos.z).project(this.hall.camera),s=this.hall.renderer.domElement.getBoundingClientRect();return{x:(i.x*.5+.5)*s.width,y:(-i.y*.5+.5)*s.height,ok:i.z<1&&i.z>-1}}tick(e,n){let i=this.hall,s=performance.now(),r=i.player,a=null,h=2.5;if(!this.chat.isOpen)for(let o of i.persons()){let d=this.dist(o);d<h&&!o.talking&&(h=d,a=o)}if(a!==this.nearby&&(this.nearby=a,this.onNearby(a)),this.chase){let o=this.chase;o.replan-=e,this.dist(o.p)<=2.4?this.talkTo(o.p):!i.walking&&o.replan<=0?(o.replan=.5,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there")||(this.chase=null)):o.replan<=0&&(o.replan=.7,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there"))}let l=i.persons().filter(o=>this.dist(o)<5.5&&o.def&&!i.inputLocked).sort((o,d)=>this.dist(o)-this.dist(d)).slice(0,5);for(let[o,d]of this.tags)l.includes(o)||(d.remove(),this.tags.delete(o));for(let o of l){let d=this.tags.get(o);d||(d=document.createElement("div"),d.className="uchat-tag",this.layer.appendChild(d),this.tags.set(o,d));let c=Pe.peek(o.def.id);d.innerHTML=`${o.def.first}${c?.met?`<i>${Bl(c.fr).replace(/♡/g,"")}</i>`:""}`;let u=this.project(o,1.55*(Js[o.look.age??"hs"]??1)+.1);d.style.display=u.ok?"block":"none",d.style.left=`${u.x}px`,d.style.top=`${u.y}px`}if(this.bubbles=this.bubbles.filter(o=>{if(s>o.until)return o.el.remove(),!1;let d=this.project(o.p,o.h);return o.el.style.display=d.ok?"block":"none",o.el.style.left=`${d.x}px`,o.el.style.top=`${d.y-16}px`,!0}),this.nextChatter-=e,this.nextChatter<=0&&!this.chat.isOpen){this.nextChatter=Ui(2.4,5);let o=i.persons().filter(c=>c.def&&!c.talking&&this.dist(c)<16),d=o[Math.floor(Math.random()*o.length)];if(d&&this.bubbles.length<4){let c=o.filter(u=>u!==d&&Math.hypot(u.pos.x-d.pos.x,u.pos.z-d.pos.z)<3.2)[0];if(c){let u=this.ctx();this.say(d,_f(d.def,c.def,{kind:u.kind}),3600),setTimeout(()=>this.say(c,Ef[Math.floor(Math.random()*Ef.length)],1800),1900)}}}if(this.acc+=e,this.acc>1&&(this.acc=0,this.checkApproach(s)),this.approaching){let o=this.approaching;o.replan-=e,o.s.hidden?this.approaching=null:this.dist(o.s)<1.9?(o.s.path=[],o.s.moving=!1,this.say(o.s,bf(o.s.def),4200),i.onToast(`${o.s.def.first} wants to chat. Tap them or press T.`),this.approachAt.set(o.s.def.id,s),this.approaching=null,setTimeout(()=>{!o.s.talking&&o.s.path.length===0&&(o.s.pending={delay:0,dest:i.open[Math.floor(Math.random()*i.open.length)],hide:!1})},14e3)):(o.replan<=0||s-o.since>2e4)&&(o.replan=1,s-o.since>2e4?this.approaching=null:this.pathTo(o.s))}}pathTo(e){let n=this.hall,i=Math.max(0,Math.min(55,Math.floor(e.pos.x+56/2))),s=Math.max(0,Math.min(43,Math.floor(e.pos.z+44/2))),r=Math.max(0,Math.min(55,Math.floor(n.player.pos.x+56/2))),a=Math.max(0,Math.min(43,Math.floor(n.player.pos.z+44/2)));e.pending=null,e.hideOnArrive=!1,e.path=Xs(ri,i,s,r,a).map(h=>rv(h.x+.5,h.y+.5)),e.path.pop(),e.moving=e.path.length>0}checkApproach(e){if(!(this.approaching||this.chat.isOpen||this.hall.walking||this.ctx().kind==="class"))for(let i of this.hall.students){if(i.hidden||i.talking||!i.def)continue;let s=Pe.peek(i.def.id);if(!s||s.fr<30)continue;let r=this.dist(i);if(!(r<3||r>11)&&!(e-(this.approachAt.get(i.def.id)??-1e9)<18e4)){this.approaching={s:i,replan:0,since:e},this.pathTo(i);return}}}visible(){return this.hall.persons().map(e=>e.def).filter(Boolean)}};var av=`
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
`,Af=!1,et=(t,e="",n,i="")=>{let s=document.createElement(t);return e&&(s.className=e),i&&(s.textContent=i),n?.appendChild(s),s},Cf=["down","right","up","left"],Hl=class{constructor(e=document.body){this.tab="Body";this.dir=0;this.walk=!1;this.t0=performance.now();this.raf=0;this.onSave=()=>{};this.onCancel=()=>{};this.loop=()=>{if(!this.root.classList.contains("show"))return;let e=(performance.now()-this.t0)/1e3,n=this.cv.getContext("2d");n.clearRect(0,0,this.cv.width,this.cv.height);let i=Oi(this.spec,11),s=8.6*(Il[this.spec.age]??1)*.92;n.save(),n.translate(this.cv.width/2,this.cv.height-46),n.scale(s,s),n.fillStyle="rgba(60,40,50,.18)",n.beginPath(),n.ellipse(0,1,13,4,0,0,7),n.fill(),n.shadowColor="rgba(52,34,46,.3)",n.shadowBlur=3,n.shadowOffsetY=1.5,Ys(n,0,0,{...i,dir:Cf[this.dir],moving:this.walk,walk:this.walk?e*8:0,tag:!1},e),n.restore(),this.raf=requestAnimationFrame(this.loop)};this.pending=0;if(!Af){Af=!0;let _=document.createElement("style");_.textContent=av,document.head.appendChild(_)}this.spec={...Pe.profile.avatar},this.root=et("div","uav",e);let n=et("div","uav-top",this.root);et("b","",n,"Create your avatar");let i=et("span","",n);i.style.flex="1";let s=et("button","uav-chip",n,"Cancel");s.type="button",s.onclick=()=>{this.hide(),this.onCancel()};let r=et("button","uav-chip uav-save",n,"Save and play");r.type="button",r.onclick=()=>this.save();let a=et("div","uav-wrap",this.root),h=et("div","uav-card uav-prev",a);this.cv=et("canvas","",h),this.cv.width=300,this.cv.height=400;let l=et("div","uav-row",h);l.style.justifyContent="center",Cf.forEach((_,p)=>{let m=et("button","uav-chip",l,["Front","Right","Back","Left"][p]);m.type="button",m.onclick=()=>{this.dir=p,this.walk=!1}});let o=et("button","uav-chip",l,"Walk");o.type="button",o.onclick=()=>{this.walk=!this.walk,o.classList.toggle("on",this.walk)};let d=et("div","uav-row",h);d.style.justifyContent="center";let c=et("button","uav-chip",d,"Surprise me");c.type="button",c.onclick=()=>{let _=this.spec.name,p=this.spec.age;this.spec={...ha(pi(Date.now()&16777215),p),name:_},this.render()};let u=et("button","uav-chip",d,"Reset");u.type="button",u.onclick=()=>{let _=this.spec.name;this.spec={...js(),name:_},this.render()};let f=et("div","uav-card",a),g=et("div","uav-tabs",f);for(let _ of["Body","Face","Hair","Outfit","Extras","You"]){let p=et("button","uav-chip",g,_);p.type="button",p.dataset.tab=_,p.onclick=()=>{this.tab=_,this.render()}}this.body=et("div","",f),this.root.addEventListener("keydown",_=>_.stopPropagation()),this.root.addEventListener("pointerdown",_=>_.stopPropagation())}show(){this.spec={...Pe.profile.avatar,name:Pe.profile.name||Pe.profile.avatar.name},this.root.classList.add("show"),this.render(),this.loop()}hide(){this.root.classList.remove("show"),cancelAnimationFrame(this.raf)}save(){let e=(this.nameInput?.value??this.spec.name).trim().slice(0,14)||"Student";this.spec.name=e,Pe.setProfile({name:e,avatar:{...this.spec},hasAvatar:!0}),this.hide(),this.onSave(this.spec,e)}set(e,n){this.spec[e]=n,this.render(!1)}chips(e,n,i){et("div","uav-lab",this.body,e);let s=et("div","uav-row",this.body);for(let r of i){let a=et("button","uav-chip"+(this.spec[n]===r.id?" on":""),s,r.label);a.type="button",a.onclick=()=>{this.set(n,r.id)}}}swatches(e,n,i,s){et("div","uav-lab",this.body,e);let r=et("div","uav-row",this.body);if(s){let h=et("button","uav-sw none"+(this.spec[n]==null?" on":""),r);h.type="button",h.title=s,h.setAttribute("aria-label",s),h.onclick=()=>this.set(n,null)}for(let h of i){let l=et("button","uav-sw"+(this.spec[n]===h?" on":""),r);l.type="button",l.style.background=h,l.setAttribute("aria-label",h),l.onclick=()=>this.set(n,h)}let a=et("input","uav-custom",r);a.type="color",a.value=typeof this.spec[n]=="string"&&/^#[0-9a-f]{6}$/i.test(this.spec[n])?this.spec[n]:i[0],a.title="Custom colour",a.oninput=()=>{this.spec[n]=a.value,this.renderSoon()}}toggle(e,n){let i=et("label","uav-switch",this.body),s=et("input","",i);s.type="checkbox",s.checked=!!this.spec[n],s.onchange=()=>this.set(n,s.checked),i.appendChild(document.createTextNode(e))}slider(e,n,i,s,r){et("div","uav-lab",this.body,e);let a=et("input","",this.body);a.type="range",a.min=String(i),a.max=String(s),a.step=String(r),a.value=String(this.spec[n]),a.oninput=()=>{this.spec[n]=Number(a.value)}}renderSoon(){clearTimeout(this.pending),this.pending=window.setTimeout(()=>this.render(!1),250)}render(e=!0){this.root.querySelectorAll("[data-tab]").forEach(r=>r.classList.toggle("on",r.dataset.tab===this.tab));let n=this.root.scrollTop;this.body.innerHTML="";let i=la,s=this.body;if(this.tab==="Body")this.chips("Grade band (sets your height)","age",i.age),this.chips("Build","build",i.build),this.slider("Head size","headSize",.9,1.12,.01),this.swatches("Skin tone","skin",wc),this.chips("Pronouns","pronouns",tf.map(r=>({id:r,label:r})));else if(this.tab==="Face"){this.chips("Eyes","eyeShape",i.eyeShape),this.swatches("Eye colour","eyeColor",Ec),this.chips("Eyebrows","brow",i.brow),this.swatches("Eyebrow colour","browColor",ts,"Match hair"),this.chips("Mouth","mouthStyle",i.mouthStyle),this.swatches("Lip colour","lip",["#8a4650","#c4463c","#e8789a","#b5563e","#563428","#e07a66"]),et("div","uav-lab",s,"Details");let r=et("div","uav-row",s);this.toggle("Freckles","freckles"),this.toggle("Beauty mark","mole"),this.toggle("Little nose","nose"),this.toggle("Rosy cheeks","blush"),this.chips("Glasses","glasses",i.glasses),this.swatches("Glasses colour","glassColor",["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da","#eab94e"])}else if(this.tab==="Hair")this.chips("Style","hairStyle",i.hairStyle),this.swatches("Colour","hair",ts),this.swatches("Highlights","hair2",ts,"No highlights");else if(this.tab==="Outfit")this.chips("Top","top",i.top),this.swatches("Top colour","shirt",tn),this.chips("Pattern","pattern",i.pattern),this.swatches("Pattern / under-shirt colour","shirt2",tn),this.chips("Bottoms","bottom",i.bottom),this.swatches("Bottoms colour","pants",tn),this.chips("Shoes","shoeStyle",i.shoeStyle),this.swatches("Shoe colour","shoes",Ac);else if(this.tab==="Extras")this.chips("Hat","hat",i.hat),this.swatches("Hat colour","hatColor",tn),this.chips("Bag","packStyle",i.packStyle),this.swatches("Bag colour","pack",tn),this.swatches("Earrings","earrings",["#eab94e","#fff6ea","#f28f7e","#8fc9e8"],"None"),this.swatches("Scarf","scarf",tn,"None"),this.swatches("Badge","badge",tn,"None");else{et("h2","",s,"About you"),et("div","uav-lab",s,"Your name (classmates will remember it)");let r=et("input","",s);r.type="text",r.maxLength=14,r.value=this.spec.name==="Student"?"":this.spec.name,r.placeholder="Type your name",this.nameInput=r,r.oninput=()=>{this.spec.name=r.value},et("div","uav-lab",s,"Tip"),et("div","",s,"Classmates notice what you wear. Try a hat or glasses and see who compliments it. Everything you tell them is remembered, so introduce yourself!")}this.root.scrollTop=n}};var Gt=t=>document.getElementById(t),At=new Nl(Gt("game"));window.__hall=At;At.onToast=t=>{let e=Gt("toast");e.textContent=t,e.classList.toggle("show",!!t),clearTimeout(At._tt),t&&(At._tt=setTimeout(()=>e.classList.remove("show"),3500))};var sr=new zl(At,document.body);window.__social=sr;var ga=new Hl(document.body);window.__creator=ga;var Gl=t=>{At.inputLocked=t};ga.onSave=t=>{At.setAvatar(t),Gl(!1),At.onToast(`Looking good, ${t.name}!`)};ga.onCancel=()=>Gl(!1);Gt("bAvatar").onclick=()=>{Gl(!0),ga.show()};Gt("bFriends").onclick=()=>sr.journal.toggle();var Nc=Gt("talkChip");sr.onNearby=t=>{Nc.classList.toggle("show",!!t),t&&(Nc.textContent=`Talk to ${t.def?.first} (T)`)};Nc.onclick=()=>{sr.nearby&&sr.talkTo(sr.nearby)};Pe.profile.hasAvatar||setTimeout(()=>{Gl(!0),ga.show()},600);var ir={},Rf=()=>{At.input.x=(ir.r?1:0)-(ir.l?1:0),At.input.y=(ir.d?1:0)-(ir.u?1:0)};document.querySelectorAll("[data-k]").forEach(t=>{let e=t.dataset.k;t.addEventListener("pointerdown",n=>{n.preventDefault(),ir[e]=!0,Rf()}),["pointerup","pointerleave","pointercancel"].forEach(n=>t.addEventListener(n,()=>{ir[e]=!1,Rf()}))});document.querySelectorAll("[data-rot]").forEach(t=>{let e=+t.dataset.rot;t.addEventListener("pointerdown",n=>{n.preventDefault(),At.rotate=e}),["pointerup","pointerleave","pointercancel"].forEach(n=>t.addEventListener(n,()=>{At.rotate=0}))});var Vl=Gt("goMenu");mf.forEach(t=>{let e=document.createElement("button");e.innerHTML=`<i style="background:${t.color}"></i>${t.label}`,e.onclick=()=>{Vl.classList.remove("show"),At.goTo(t.key)},Vl.appendChild(e)});Gt("bGo").onclick=()=>Vl.classList.toggle("show");Gt("game").addEventListener("pointerdown",()=>Vl.classList.remove("show"));Gt("bSpd").onclick=()=>{At.speed=At.speed===1?4:At.speed===4?16:1,Gt("bSpd").textContent=`Speed x${At.speed}`};var ov={close:"Close-up",overview:"Overview",first:"First person"};Gt("bView").onclick=()=>{let t=At.cycleView();Gt("bView").textContent=`View: ${ov[t]}`};setInterval(()=>{let t=Gn[Math.max(0,At.idx)];Gt("clk").textContent=Pl(At.clock),Gt("per").textContent=t.name,Gt("fill").style.width=`${(At.clock-t.start)/t.len*100}%`;let e=At.students.filter(a=>!a.hidden).length;Gt("cnt").textContent=`${e} in the hall, ${At.students.length-e} in class or away`;let[n,i,s,r]=At.tint;Gt("tint").style.background=`rgba(${n|0},${i|0},${s|0},${r})`},200);(()=>{let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createImageData(256,256);for(let i=0;i<n.data.length;i+=4){let s=226+Math.random()*29;n.data[i]=s,n.data[i+1]=s*.965,n.data[i+2]=s*.9,n.data[i+3]=255}e.putImageData(n,0,0),e.lineCap="round";for(let i=0;i<260;i++){e.strokeStyle=`rgba(255,250,240,${.08+Math.random()*.16})`,e.lineWidth=.6+Math.random()*.5;let s=Math.random()*256,r=Math.random()*256,a=Math.random()*6.28,h=3+Math.random()*9;e.beginPath(),e.moveTo(s,r),e.lineTo(s+Math.cos(a)*h,r+Math.sin(a)*h),e.stroke()}Gt("paper").style.backgroundImage=`url(${t.toDataURL()})`})();})();
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
