"use strict";(()=>{var zo="186";var Du=0,Uc=1,Nu=2;var $r=1,Ho=2,qs=3,Fi=0,rn=1,An=2,ti=0,$s=1,Oc=2,Bc=3,zc=4,Fu=5;var ts=100,ku=101,Uu=102,Ou=103,Bu=104,zu=200,Hu=201,Vu=202,Gu=203,Hc=204,Vc=205,Wu=206,Xu=207,qu=208,$u=209,Yu=210,Ju=211,Zu=212,Ku=213,ju=214,so=0,ro=1,ao=2,Ns=3,oo=4,lo=5,co=6,ho=7,Gc=0,Qu=1,ed=2,Hn=0,Wc=1,Xc=2,qc=3,$c=4,Yc=5,Jc=6,Zc=7;var Kc=300,ki=301,ns=302,Vo=303,Go=304,Yr=306,Fs=1e3,Zn=1001,uo=1002,Ht=1003,td=1004;var Jr=1005;var Wt=1006,Wo=1007;var Ui=1008;var un=1009,jc=1010,Qc=1011,Ys=1012,Xo=1013,Vn=1014,Cn=1015,Gn=1016,qo=1017,$o=1018,Js=1020,eh=35902,th=35899,nh=1021,ih=1022,Rn=1023,Kn=1026,Oi=1027,Yo=1028,Jo=1029,Bi=1030,Zo=1031;var Ko=1033,Zr=33776,Kr=33777,jr=33778,Qr=33779,jo=35840,Qo=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37488,al=37489,ea=37490,ol=37491,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,yl=37817,xl=37818,vl=37819,bl=37820,_l=37821,Sl=36492,Ml=36494,wl=36495,Tl=36283,El=36284,ta=36285,Al=36286;var Mr=2300,fo=2301,to=2302,Rc=2303,Pc=2400,Ic=2401,Lc=2402;var nd=3200;var Cl=0,id=1,mi="",zt="srgb",wr="srgb-linear",Tr="linear",lt="srgb";var no=7680;var sd=519,rd=512,ad=513,od=514,Rl=515,ld=516,cd=517,Pl=518,hd=519,sh=35044;var rh="300 es",Bn=2e3,ks=2001;function Jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ud(){let n=Er("canvas");return n.style.display="block",n}var nu={},Us=null;function Ar(...n){let e="THREE."+n.shift();Us?Us("log",e,...n):console.log(e,...n)}function dd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=dd(n);let e="THREE."+n.shift();if(Us)Us("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ue(...n){n=dd(n);let e="THREE."+n.shift();if(Us)Us("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ki(...n){let e=n.join(" ");e in nu||(nu[e]=!0,Ne(...n))}function fd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var pd={[so]:ro,[ao]:co,[oo]:ho,[Ns]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:Ns},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var io=Math.PI/180,po=180/Math.PI;function Ai(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Kf(n,e){return(n%e+e)%e}function sc(n,e,t){return(1-t)*n+t*e}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Be=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let c=i[s+0],o=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||c!==h||o!==f||u!==g){let m=c*h+o*f+u*g+d*S;m<0&&(h=-h,f=-f,g=-g,S=-S,m=-m);let p=1-l;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,l=Math.sin(l*M)/A,c=c*p+h*l,o=o*p+f*l,u=u*p+g*l,d=d*p+S*l}else{c=c*p+h*l,o=o*p+f*l,u=u*p+g*l,d=d*p+S*l;let M=1/Math.sqrt(c*c+o*o+u*u+d*d);c*=M,o*=M,u*=M,d*=M}}e[t]=c,e[t+1]=o,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let l=i[s],c=i[s+1],o=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=l*g+u*d+c*f-o*h,e[t+1]=c*g+u*h+o*d-l*f,e[t+2]=o*g+u*f+l*h-c*d,e[t+3]=u*g-l*d-c*h-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(i/2),u=l(s/2),d=l(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+o*f*g,this._y=o*f*d-h*u*g,this._z=o*u*g+h*f*d,this._w=o*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+o*f*g,this._y=o*f*d-h*u*g,this._z=o*u*g-h*f*d,this._w=o*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-o*f*g,this._y=o*f*d+h*u*g,this._z=o*u*g+h*f*d,this._w=o*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-o*f*g,this._y=o*f*d+h*u*g,this._z=o*u*g-h*f*d,this._w=o*u*d+h*f*g;break;case"YZX":this._x=h*u*d+o*f*g,this._y=o*f*d+h*u*g,this._z=o*u*g-h*f*d,this._w=o*u*d-h*f*g;break;case"XZY":this._x=h*u*d-o*f*g,this._y=o*f*d-h*u*g,this._z=o*u*g+h*f*d,this._w=o*u*d+h*f*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],c=t[9],o=t[2],u=t[6],d=t[10],h=i+l+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-o)*f,this._z=(a-s)*f}else if(i>l&&i>d){let f=2*Math.sqrt(1+i-l-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+o)/f}else if(l>d){let f=2*Math.sqrt(1+l-i-d);this._w=(r-o)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-l);this._w=(a-s)/f,this._x=(r+o)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,c=t._y,o=t._z,u=t._w;return this._x=i*u+a*l+s*o-r*c,this._y=s*u+a*c+r*l-i*o,this._z=r*u+a*o+i*c-s*l,this._w=a*u-i*l-s*c-r*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let c=1-t;if(l<.9995){let o=Math.acos(l),u=Math.sin(o);c=Math.sin(c*o)/u,t=Math.sin(t*o)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*s-l*i),u=2*(l*t-r*s),d=2*(r*i-a*t);return this.x=t+c*o+a*d-l*u,this.y=i+c*u+l*o-r*d,this.z=s+c*d+r*u-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*a-i*c,this.z=i*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rc.copy(this).projectOnVector(e),this.sub(rc)}reflect(e){return this.sub(rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rc=new L,iu=new mn,Ve=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,c,o)}set(e,t,i,s,r,a,l,c,o){let u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],S=s[0],m=s[3],p=s[6],M=s[1],A=s[4],v=s[7],w=s[2],T=s[5],R=s[8];return r[0]=a*S+l*M+c*w,r[3]=a*m+l*A+c*T,r[6]=a*p+l*v+c*R,r[1]=o*S+u*M+d*w,r[4]=o*m+u*A+d*T,r[7]=o*p+u*v+d*R,r[2]=h*S+f*M+g*w,r[5]=h*m+f*A+g*T,r[8]=h*p+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8];return t*a*u-t*l*o-i*r*u+i*l*c+s*r*o-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8],d=u*a-l*o,h=l*c-u*r,f=o*r-a*c,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*o-u*i)*S,e[2]=(l*i-s*a)*S,e[3]=h*S,e[4]=(u*t-s*c)*S,e[5]=(s*r-l*t)*S,e[6]=f*S,e[7]=(i*c-o*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){let c=Math.cos(r),o=Math.sin(r);return this.set(i*c,i*o,-i*(c*a+o*l)+a+e,-s*o,s*c,-s*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ac.makeScale(e,t)),this}rotate(e){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ac=new Ve,su=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jf(){let n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:Tr,toXYZ:su,fromXYZ:ru,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:su,fromXYZ:ru,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}var je=jf();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ms,mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=Er("canvas")),ms.width=e.width,ms.height=e.height;let s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qf=0,Os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(oc(s[a].image)):r.push(oc(s[a]))}else r=oc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var ep=0,lc=new L,sn=class n extends jn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=Wt,a=Ui,l=Rn,c=un,o=n.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ai(),this.name="",this.source=new Os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lc).x}get height(){return this.source.getSize(lc).y}get depth(){return this.source.getSize(lc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Kc;sn.DEFAULT_ANISOTROPY=1;var Mt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,o=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(o+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(o+1)/2,v=(f+1)/2,w=(p+1)/2,T=(u+h)/4,R=(d+S)/4,x=(g+m)/4;return A>v&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=T/i,r=R/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-S)/M,this.z=(h-u)/M,this.w=Math.acos((o+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},go=class extends jn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new sn(s),a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Os(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends go{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Cr=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yo=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var st=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,l,c,o,u,d,h,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,c,o,u,d,h,f,g,S,m)}set(e,t,i,s,r,a,l,c,o,u,d,h,f,g,S,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=o,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),o=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=l*u,S=l*d;t[0]=c*u,t[4]=-c*d,t[8]=o,t[1]=f+g*o,t[5]=h-S*o,t[9]=-l*c,t[2]=S-h*o,t[6]=g+f*o,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=o*u,S=o*d;t[0]=h+S*l,t[4]=g*l-f,t[8]=a*o,t[1]=a*d,t[5]=a*u,t[9]=-l,t[2]=f*l-g,t[6]=S+h*l,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=o*u,S=o*d;t[0]=h-S*l,t[4]=-a*d,t[8]=g+f*l,t[1]=f+g*l,t[5]=a*u,t[9]=S-h*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=l*u,S=l*d;t[0]=c*u,t[4]=g*o-f,t[8]=h*o+S,t[1]=c*d,t[5]=S*o+h,t[9]=f*o-g,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*o,g=l*c,S=l*o;t[0]=c*u,t[4]=S-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-l*u,t[2]=-o*u,t[6]=f*d+g,t[10]=h-S*d}else if(e.order==="XZY"){let h=a*c,f=a*o,g=l*c,S=l*o;t[0]=c*u,t[4]=-d,t[8]=o*u,t[1]=h*d+S,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=l*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,np)}lookAt(e,t,i){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Si.crossVectors(i,dn),Si.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Si.crossVectors(i,dn)),Si.normalize(),Aa.crossVectors(dn,Si),s[0]=Si.x,s[4]=Aa.x,s[8]=dn.x,s[1]=Si.y,s[5]=Aa.y,s[9]=dn.y,s[2]=Si.z,s[6]=Aa.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],S=i[6],m=i[10],p=i[14],M=i[3],A=i[7],v=i[11],w=i[15],T=s[0],R=s[4],x=s[8],E=s[12],P=s[1],_=s[5],I=s[9],U=s[13],D=s[2],H=s[6],Y=s[10],F=s[14],ne=s[3],X=s[7],K=s[11],B=s[15];return r[0]=a*T+l*P+c*D+o*ne,r[4]=a*R+l*_+c*H+o*X,r[8]=a*x+l*I+c*Y+o*K,r[12]=a*E+l*U+c*F+o*B,r[1]=u*T+d*P+h*D+f*ne,r[5]=u*R+d*_+h*H+f*X,r[9]=u*x+d*I+h*Y+f*K,r[13]=u*E+d*U+h*F+f*B,r[2]=g*T+S*P+m*D+p*ne,r[6]=g*R+S*_+m*H+p*X,r[10]=g*x+S*I+m*Y+p*K,r[14]=g*E+S*U+m*F+p*B,r[3]=M*T+A*P+v*D+w*ne,r[7]=M*R+A*_+v*H+w*X,r[11]=M*x+A*I+v*Y+w*K,r[15]=M*E+A*U+v*F+w*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],c=e[9],o=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],S=e[7],m=e[11],p=e[15],M=c*f-o*h,A=l*f-o*d,v=l*h-c*d,w=a*f-o*u,T=a*h-c*u,R=a*d-l*u;return t*(S*M-m*A+p*v)-i*(g*M-m*w+p*T)+s*(g*A-S*w+p*R)-r*(g*v-S*T+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],o=e[6],u=e[10];return t*(a*u-l*o)-i*(r*u-l*c)+s*(r*o-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],S=e[13],m=e[14],p=e[15],M=t*l-i*a,A=t*c-s*a,v=t*o-r*a,w=i*c-s*l,T=i*o-r*l,R=s*o-r*c,x=u*S-d*g,E=u*m-h*g,P=u*p-f*g,_=d*m-h*S,I=d*p-f*S,U=h*p-f*m,D=M*U-A*I+v*_+w*P-T*E+R*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return e[0]=(l*U-c*I+o*_)*H,e[1]=(s*I-i*U-r*_)*H,e[2]=(S*R-m*T+p*w)*H,e[3]=(h*T-d*R-f*w)*H,e[4]=(c*P-a*U-o*E)*H,e[5]=(t*U-s*P+r*E)*H,e[6]=(m*v-g*R-p*A)*H,e[7]=(u*R-h*v+f*A)*H,e[8]=(a*I-l*P+o*x)*H,e[9]=(i*P-t*I-r*x)*H,e[10]=(g*T-S*v+p*M)*H,e[11]=(d*v-u*T-f*M)*H,e[12]=(l*E-a*_-c*x)*H,e[13]=(t*_-i*E+s*x)*H,e[14]=(S*A-g*w-m*M)*H,e[15]=(u*w-d*A+h*M)*H,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,c=e.z,o=r*a,u=r*l;return this.set(o*a+i,o*l-s*c,o*c+s*l,0,o*l+s*c,u*l+i,u*c-s*a,0,o*c-s*l,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,o=r+r,u=a+a,d=l+l,h=r*o,f=r*u,g=r*d,S=a*u,m=a*d,p=l*d,M=c*o,A=c*u,v=c*d,w=i.x,T=i.y,R=i.z;return s[0]=(1-(S+p))*w,s[1]=(f+v)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(h+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+A)*R,s[9]=(m-M)*R,s[10]=(1-(h+S))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=gs.set(s[0],s[1],s[2]).length(),l=gs.set(s[4],s[5],s[6]).length(),c=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);let o=1/a,u=1/l,d=1/c;return kn.elements[0]*=o,kn.elements[1]*=o,kn.elements[2]*=o,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,t,i,s,r,a,l=Bn,c=!1){let o=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,S;if(c)g=r/(a-r),S=a*r/(a-r);else if(l===Bn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(l===ks)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=d,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=Bn,c=!1){let o=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,S;if(c)g=1/(a-r),S=a/(a-r);else if(l===Bn)g=-2/(a-r),S=-(a+r)/(a-r);else if(l===ks)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=0,o[12]=h,o[1]=0,o[5]=d,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=g,o[14]=S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},gs=new L,kn=new st,tp=new L(0,0,0),np=new L(1,1,1),Si=new L,Aa=new L,dn=new L,au=new st,ou=new mn,zn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,o),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ip=0,lu=new L,ys=new mn,li=new st,Ca=new L,fr=new L,sp=new L,rp=new mn,cu=new L(1,0,0),hu=new L(0,1,0),uu=new L(0,0,1),du={type:"added"},ap={type:"removed"},xs={type:"childadded",child:null},cc={type:"childremoved",child:null},Vt=class n extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new zn,i=new mn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Ve}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ca.copy(e):Ca.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(fr,Ca,this.up):li.lookAt(Ca,fr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(li),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),xs.child=e,this.dispatchEvent(xs),xs.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ap),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,u=c.length;o<u;o++){let d=c[o];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),o=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(l){let c=[];for(let o in l){let u=l[o];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new L(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},op={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,i),p=this._getHandJoint(o,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=o.joints["index-finger-tip"],d=o.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;o.inputState.pinching&&h>f+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&h<=f-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(op)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=Kf(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=hc(a,r,e+1/3),this.g=hc(a,r,e),this.b=hc(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=md[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return je.workingToColorSpace(Zt.copy(this),e),Math.round(Qe(Zt.r*255,0,255))*65536+Math.round(Qe(Zt.g*255,0,255))*256+Math.round(Qe(Zt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Zt.copy(this),t);let i=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(i,s,r),l=Math.min(i,s,r),c,o,u=(l+a)/2;if(l===a)c=0,o=0;else{let d=a-l;switch(o=u<=.5?d/(a+l):d/(2-a-l),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=o,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=zt){je.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,i=Zt.g,s=Zt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Ra);let i=sc(Mi.h,Ra.h,t),s=sc(Mi.s,Ra.s,t),r=sc(Mi.l,Ra.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Ge;Ge.NAMES=md;var Rr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pr=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new L,ci=new L,uc=new L,hi=new L,vs=new L,bs=new L,fu=new L,dc=new L,fc=new L,pc=new L,mc=new Mt,gc=new Mt,yc=new Mt,Jn=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Un.subVectors(s,t),ci.subVectors(i,t),uc.subVectors(e,t);let a=Un.dot(Un),l=Un.dot(ci),c=Un.dot(uc),o=ci.dot(ci),u=ci.dot(uc),d=a*o-l*l;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(o*c-l*u)*h,g=(a*u-l*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,s,r,a,l,c){return this.getBarycoord(e,t,i,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(a,hi.y),c.addScaledVector(l,hi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return mc.setScalar(0),gc.setScalar(0),yc.setScalar(0),mc.fromBufferAttribute(e,t),gc.fromBufferAttribute(e,i),yc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mc,r.x),a.addScaledVector(gc,r.y),a.addScaledVector(yc,r.z),a}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),ci.subVectors(e,t),Un.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Un.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,l;vs.subVectors(s,i),bs.subVectors(r,i),dc.subVectors(e,i);let c=vs.dot(dc),o=bs.dot(dc);if(c<=0&&o<=0)return t.copy(i);fc.subVectors(e,s);let u=vs.dot(fc),d=bs.dot(fc);if(u>=0&&d<=u)return t.copy(s);let h=c*d-u*o;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(vs,a);pc.subVectors(e,r);let f=vs.dot(pc),g=bs.dot(pc);if(g>=0&&f<=g)return t.copy(r);let S=f*o-c*g;if(S<=0&&o>=0&&g<=0)return l=o/(o-g),t.copy(i).addScaledVector(bs,l);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return fu.subVectors(r,s),l=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(fu,l);let p=1/(m+S+h);return a=S*p,l=h*p,t.copy(i).addScaledVector(vs,a).addScaledVector(bs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},En=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Ia.subVectors(this.max,pr),_s.subVectors(e.a,pr),Ss.subVectors(e.b,pr),Ms.subVectors(e.c,pr),wi.subVectors(Ss,_s),Ti.subVectors(Ms,Ss),$i.subVectors(_s,Ms);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-$i.z,$i.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,$i.z,0,-$i.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-$i.y,$i.x,0];return!xc(t,_s,Ss,Ms,Ia)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,_s,Ss,Ms,Ia))?!1:(La.crossVectors(wi,Ti),t=[La.x,La.y,La.z],xc(t,_s,Ss,Ms,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,Pa=new En,_s=new L,Ss=new L,Ms=new L,wi=new L,Ti=new L,$i=new L,pr=new L,Ia=new L,La=new L,Yi=new L;function xc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Yi.fromArray(n,r);let l=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),c=e.dot(Yi),o=t.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(c,o,u),Math.min(c,o,u))>l)return!1}return!0}var Pt=new L,Da=new Be,lp=0,ln=class extends jn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sh,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ir=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Lr=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ct=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},cp=new En,mr=new L,vc=new L,pi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(vc)),this.expandByPoint(mr.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hp=0,Tn=new st,bc=new Vt,ws=new L,fn=new En,gr=new En,Bt=new L,Lt=class n extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?Lr:Ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];gr.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(fn.min,gr.min),fn.expandByPoint(Bt),Bt.addVectors(fn.max,gr.max),fn.expandByPoint(Bt)):(fn.expandByPoint(gr.min),fn.expandByPoint(gr.max))}fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],c=this.morphTargetsRelative;for(let o=0,u=l.count;o<u;o++)Bt.fromBufferAttribute(l,o),c&&(ws.fromBufferAttribute(e,o),Bt.add(ws)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new L,c[x]=new L;let o=new L,u=new L,d=new L,h=new Be,f=new Be,g=new Be,S=new L,m=new L;function p(x,E,P){o.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,P),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,P),u.sub(o),d.sub(o),f.sub(h),g.sub(h);let _=1/(f.x*g.y-g.x*f.y);isFinite(_)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(_),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(_),l[x].add(S),l[E].add(S),l[P].add(S),c[x].add(m),c[E].add(m),c[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,E=M.length;x<E;++x){let P=M[x],_=P.start,I=P.count;for(let U=_,D=_+I;U<D;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let A=new L,v=new L,w=new L,T=new L;function R(x){w.fromBufferAttribute(s,x),T.copy(w);let E=l[x];A.copy(E),A.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(T,E);let _=v.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,_)}for(let x=0,E=M.length;x<E;++x){let P=M[x],_=P.start,I=P.count;for(let U=_,D=_+I;U<D;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,l=new L,c=new L,o=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,S),o.fromBufferAttribute(i,m),l.add(u),c.add(u),o.add(u),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,o.x,o.y,o.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(l,c){let o=l.array,u=l.itemSize,d=l.normalized,h=new o.constructor(c.length*u),f=0,g=0;for(let S=0,m=c.length;S<m;S++){l.isInterleavedBufferAttribute?f=c[S]*l.data.stride+l.offset:f=c[S]*u;for(let p=0;p<u;p++)h[g++]=o[f++]}return new ln(h,u,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],o=e(c,i);t.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let c=[],o=r[l];for(let u=0,d=o.length;u<d;u++){let h=o[u],f=e(h,i);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let o=i[c];e.data.attributes[c]=o.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],u=[];for(let d=0,h=o.length;d<h;d++){let f=o[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let o in s){let u=s[o];this.setAttribute(o,u.clone(t))}let r=e.morphAttributes;for(let o in r){let u=[],d=r[o];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[o]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,u=a.length;o<u;o++){let d=a[o];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},nn=new L,Dr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_c=new L,up=new L,dp=new Ve,pn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=_c.subVectors(i,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(_c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dp.getNormalMatrix(e),s=this.coplanarPoint(_c).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},fp=0,Qn=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=$s,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Vc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new pn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hs=class extends Qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ts,yr=new L,Es=new L,As=new L,Cs=new Be,xr=new Be,gd=new st,Na=new L,vr=new L,Fa=new L,pu=new Be,Sc=new Be,mu=new Be,Nr=class extends Vt{constructor(e=new Hs){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xo(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Dr(i,3,0,!1)),Ts.setAttribute("uv",new Dr(i,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-As.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ka(Na.set(-.5,-.5,0),As,a,Es,s,r),ka(vr.set(.5,-.5,0),As,a,Es,s,r),ka(Fa.set(.5,.5,0),As,a,Es,s,r),pu.set(0,0),Sc.set(1,0),mu.set(1,1);let l=e.ray.intersectTriangle(Na,vr,Fa,!1,yr);if(l===null&&(ka(vr.set(-.5,.5,0),As,a,Es,s,r),Sc.set(0,1),l=e.ray.intersectTriangle(Na,Fa,vr,!1,yr),l===null))return;let c=e.ray.origin.distanceTo(yr);c<e.near||c>e.far||t.push({distance:c,point:yr.clone(),uv:Jn.getInterpolation(yr,Na,vr,Fa,pu,Sc,mu,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ka(n,e,t,i,s,r){Cs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(xr.x=r*Cs.x-s*Cs.y,xr.y=s*Cs.x+r*Cs.y):xr.copy(Cs),n.copy(e),n.x+=xr.x,n.y+=xr.y,n.applyMatrix4(gd)}var di=new L,Mc=new L,Ua=new L,Oa=new L,Ci=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mc.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Oa.copy(this.origin).sub(Mc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ua),l=Oa.dot(this.direction),c=-Oa.dot(Ua),o=Oa.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-l,h=a*l-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let S=1/u;d*=S,h*=S,f=d*(d+a*h+2*l)+h*(a*d+h+2*c)+o}else h=r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+o;else h=-r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+o;else h<=-g?(d=Math.max(0,-(-a*r+l)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+o):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+o):(d=Math.max(0,-(a*r+l)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+o);else h=a>0?-r:r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mc).addScaledVector(Ua,h),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,c,o=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return o>=0?(i=(e.min.x-h.x)*o,s=(e.max.x-h.x)*o):(i=(e.max.x-h.x)*o,s=(e.min.x-h.x)*o),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(l=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(l=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,l=this.direction,c=l.x,o=l.y,u=l.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=i.x-a.x,M=i.y-a.y,A=i.z-a.z,v=Math.abs(c),w=Math.abs(o),T=Math.abs(u),R,x,E,P,_,I,U,D,H,Y,F,ne;if(v>=w&&v>=T?(E=c,I=d,H=g,ne=p,c>=0?(R=o,x=u,P=h,_=f,U=S,D=m,Y=M,F=A):(R=u,x=o,P=f,_=h,U=m,D=S,Y=A,F=M)):w>=T?(E=o,I=h,H=S,ne=M,o>=0?(R=u,x=c,P=f,_=d,U=m,D=g,Y=A,F=p):(R=c,x=u,P=d,_=f,U=g,D=m,Y=p,F=A)):(E=u,I=f,H=m,ne=A,u>=0?(R=c,x=o,P=d,_=h,U=g,D=S,Y=p,F=M):(R=o,x=c,P=h,_=d,U=S,D=g,Y=M,F=p)),E===0)return null;let X=R/E,K=x/E,B=1/E,j=P-X*I,se=_-K*I,ze=U-X*H,Ie=D-K*H,We=Y-X*ne,$=F-K*ne,Q=We*Ie-$*ze,ve=j*$-se*We,ke=ze*se-Ie*j;if(s){if(Q<0||ve<0||ke<0)return null}else if((Q<0||ve<0||ke<0)&&(Q>0||ve>0||ke>0))return null;let re=Q+ve+ke;if(re===0)return null;let He=B*(Q*I+ve*H+ke*ne);return(re>0?He<0:He>0)?null:this.at(He/re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gu=new st,Ji=new Ci,Ba=new pi,yu=new L,za=new L,Ha=new L,Va=new L,wc=new L,Ga=new L,xu=new L,Wa=new L,Fe=class extends Vt{constructor(e=new Lt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Ga.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let u=l[c],d=r[c];u!==0&&(wc.fromBufferAttribute(d,e),a?Ga.addScaledVector(wc,u):Ga.addScaledVector(wc.sub(t),u))}t.add(Ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(Ba.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ba,yu)===null||Ji.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(gu.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(gu),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,w=A;v<w;v+=3){let T=l.getX(v),R=l.getX(v+1),x=l.getX(v+2);s=Xa(this,p,e,i,o,u,d,T,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let M=l.getX(m),A=l.getX(m+1),v=l.getX(m+2);s=Xa(this,a,e,i,o,u,d,M,A,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,w=A;v<w;v+=3){let T=v,R=v+1,x=v+2;s=Xa(this,p,e,i,o,u,d,T,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let M=m,A=m+1,v=m+2;s=Xa(this,a,e,i,o,u,d,M,A,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pp(n,e,t,i,s,r,a,l){let c;if(e.side===rn?c=i.intersectTriangle(a,r,s,!0,l):c=i.intersectTriangle(s,r,a,e.side===Fi,l),c===null)return null;Wa.copy(l),Wa.applyMatrix4(n.matrixWorld);let o=t.ray.origin.distanceTo(Wa);return o<t.near||o>t.far?null:{distance:o,point:Wa.clone(),object:n}}function Xa(n,e,t,i,s,r,a,l,c,o){n.getVertexPosition(l,za),n.getVertexPosition(c,Ha),n.getVertexPosition(o,Va);let u=pp(n,e,t,i,za,Ha,Va,xu);if(u){let d=new L;Jn.getBarycoord(xu,za,Ha,Va,d),s&&(u.uv=Jn.getInterpolatedAttribute(s,l,c,o,d,new Be)),r&&(u.uv1=Jn.getInterpolatedAttribute(r,l,c,o,d,new Be)),a&&(u.normal=Jn.getInterpolatedAttribute(a,l,c,o,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:l,b:c,c:o,normal:new L,materialIndex:0};Jn.getNormal(za,Ha,Va,h.normal),u.face=h,u.barycoord=d}return u}var Fr=class extends sn{constructor(e=null,t=1,i=1,s,r,a,l,c,o=Ht,u=Ht,d,h){super(null,a,l,c,o,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class extends ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new st,vu=new st,qa=[],bu=new En,mp=new st,br=new Fe,_r=new pi,Vs=class extends Fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),bu.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),_r.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(i),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),vu.multiplyMatrices(i,Rs),br.matrixWorld=vu,br.raycast(e,qa);for(let a=0,l=qa.length;a<l;a++){let c=qa[a];c.instanceId=r,c.object=this,t.push(c)}qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(s*this.count),s,this.count,Yo,Cn));let r=this.morphTexture.source.data.data,a=0;for(let o=0;o<i.length;o++)a+=i[o];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=l,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zi=new pi,gp=new Be(.5,.5),$a=new L,Gs=class{constructor(e=new pn,t=new pn,i=new pn,s=new pn,r=new pn,a=new pn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn,i=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],o=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],M=r[12],A=r[13],v=r[14],w=r[15];if(s[0].setComponents(o-a,f-u,p-g,w-M).normalize(),s[1].setComponents(o+a,f+u,p+g,w+M).normalize(),s[2].setComponents(o+l,f+d,p+S,w+A).normalize(),s[3].setComponents(o-l,f-d,p-S,w-A).normalize(),i)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(o-c,f-h,p-m,w-v).normalize();else if(s[4].setComponents(o-c,f-h,p-m,w-v).normalize(),t===Bn)s[5].setComponents(o+c,f+h,p+m,w+v).normalize();else if(t===ks)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=gp.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ri=class extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vo=new L,bo=new L,_u=new st,Sr=new Ci,Ya=new pi,Tc=new L,Su=new L,_o=class extends Vt{constructor(e=new Lt,t=new Ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)vo.fromBufferAttribute(t,s-1),bo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=vo.distanceTo(bo);e.setAttribute("lineDistance",new ct(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;_u.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(_u);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=f,m=g-1;S<m;S+=o){let p=u.getX(S),M=u.getX(S+1),A=Ja(this,e,Sr,c,p,M,S);A&&t.push(A)}if(this.isLineLoop){let S=u.getX(g-1),m=u.getX(f),p=Ja(this,e,Sr,c,S,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=f,m=g-1;S<m;S+=o){let p=Ja(this,e,Sr,c,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){let S=Ja(this,e,Sr,c,g-1,f,g-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ja(n,e,t,i,s,r,a){let l=n.geometry.attributes.position;if(vo.fromBufferAttribute(l,s),bo.fromBufferAttribute(l,r),t.distanceSqToSegment(vo,bo,Tc,Su)>i)return;Tc.applyMatrix4(n.matrixWorld);let o=e.ray.origin.distanceTo(Tc);if(!(o<e.near||o>e.far))return{distance:o,point:Su.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Mu=new L,wu=new L,ji=class extends _o{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Mu.fromBufferAttribute(t,s),wu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mu.distanceTo(wu);e.setAttribute("lineDistance",new ct(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ur=class extends sn{constructor(e=[],t=ki,i,s,r,a,l,c,o,u){super(e,t,i,s,r,a,l,c,o,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qi=class extends sn{constructor(e,t,i,s,r,a,l,c,o){super(e,t,i,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends sn{constructor(e,t,i=Vn,s,r,a,l=Ht,c=Ht,o,u=Kn,d=1){if(u!==Kn&&u!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,l,c,u,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},So=class extends Pi{constructor(e,t=Vn,i=ki,s,r,a=Ht,l=Ht,c,o=Kn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,l,c,o),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Or=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ei=class n extends Lt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],o=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2));function g(S,m,p,M,A,v,w,T,R,x,E){let P=v/R,_=w/x,I=v/2,U=w/2,D=T/2,H=R+1,Y=x+1,F=0,ne=0,X=new L;for(let K=0;K<Y;K++){let B=K*_-U;for(let j=0;j<H;j++){let se=j*P-I;X[S]=se*M,X[m]=B*A,X[p]=D,o.push(X.x,X.y,X.z),X[S]=0,X[m]=0,X[p]=T>0?1:-1,u.push(X.x,X.y,X.z),d.push(j/R),d.push(1-K/x),F+=1}}for(let K=0;K<x;K++)for(let B=0;B<R;B++){let j=h+B+H*K,se=h+B+H*(K+1),ze=h+(B+1)+H*(K+1),Ie=h+(B+1)+H*K;c.push(j,se,Ie),c.push(se,ze,Ie),ne+=6}l.addGroup(f,ne,E),f+=ne,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Br=class n extends Lt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],c=[],o=new L,u=new Be;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;o.x=e*Math.cos(f),o.y=e*Math.sin(f),a.push(o.x,o.y,o.z),l.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class n extends Lt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let o=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,S=[],m=i/2,p=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function M(){let v=new L,w=new L,T=0,R=(t-e)/i;for(let x=0;x<=r;x++){let E=[],P=x/r,_=P*(t-e)+e;for(let I=0;I<=s;I++){let U=I/s,D=U*c+l,H=Math.sin(D),Y=Math.cos(D);w.x=_*H,w.y=-P*i+m,w.z=_*Y,d.push(w.x,w.y,w.z),v.set(H,R,Y).normalize(),h.push(v.x,v.y,v.z),f.push(U,1-P),E.push(g++)}S.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){let P=S[E][x],_=S[E+1][x],I=S[E+1][x+1],U=S[E][x+1];(e>0||E!==0)&&(u.push(P,_,U),T+=3),(t>0||E!==r-1)&&(u.push(_,I,U),T+=3)}o.addGroup(p,T,0),p+=T}function A(v){let w=g,T=new Be,R=new L,x=0,E=v===!0?e:t,P=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;let _=g;for(let I=0;I<=s;I++){let D=I/s*c+l,H=Math.cos(D),Y=Math.sin(D);R.x=E*Y,R.y=m*P,R.z=E*H,d.push(R.x,R.y,R.z),h.push(0,P,0),T.x=H*.5+.5,T.y=Y*.5*P+.5,f.push(T.x,T.y),g++}for(let I=0;I<s;I++){let U=w+I,D=_+I;v===!0?u.push(D,D+1,U):u.push(D+1,D,U),x+=3}o.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class n extends Gt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,e,t,i,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class n extends Lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];l(s),o(i),u(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(M){let A=new L,v=new L,w=new L;for(let T=0;T<t.length;T+=3)f(t[T+0],A),f(t[T+1],v),f(t[T+2],w),c(A,v,w,M)}function c(M,A,v,w){let T=w+1,R=[];for(let x=0;x<=T;x++){R[x]=[];let E=M.clone().lerp(v,x/T),P=A.clone().lerp(v,x/T),_=T-x;for(let I=0;I<=_;I++)I===0&&x===T?R[x][I]=E:R[x][I]=E.clone().lerp(P,I/_)}for(let x=0;x<T;x++)for(let E=0;E<2*(T-x)-1;E++){let P=Math.floor(E/2);E%2===0?(h(R[x][P+1]),h(R[x+1][P]),h(R[x][P])):(h(R[x][P+1]),h(R[x+1][P+1]),h(R[x+1][P]))}}function o(M){let A=new L;for(let v=0;v<r.length;v+=3)A.x=r[v+0],A.y=r[v+1],A.z=r[v+2],A.normalize().multiplyScalar(M),r[v+0]=A.x,r[v+1]=A.y,r[v+2]=A.z}function u(){let M=new L;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let v=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(v,1-w)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let A=a[M+0],v=a[M+2],w=a[M+4],T=Math.max(A,v,w),R=Math.min(A,v,w);T>.9&&R<.1&&(A<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,A){let v=M*3;A.x=e[v+0],A.y=e[v+1],A.z=e[v+2]}function g(){let M=new L,A=new L,v=new L,w=new L,T=new Be,R=new Be,x=new Be;for(let E=0,P=0;E<r.length;E+=9,P+=6){M.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),T.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),w.copy(M).add(A).add(v).divideScalar(3);let _=m(w);S(T,P+0,M,_),S(R,P+2,A,_),S(x,P+4,v,_)}}function S(M,A,v,w){w<0&&M.x===1&&(a[A]=M.x-1),v.x===0&&v.z===0&&(a[A]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Za=new L,Ka=new L,Ec=new L,ja=new Jn,es=class extends Lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(io*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,o=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){a?(o[0]=a.getX(g),o[1]=a.getX(g+1),o[2]=a.getX(g+2)):(o[0]=g,o[1]=g+1,o[2]=g+2);let{a:S,b:m,c:p}=ja;if(S.fromBufferAttribute(l,o[0]),m.fromBufferAttribute(l,o[1]),p.fromBufferAttribute(l,o[2]),ja.getNormal(Ec),d[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let A=(M+1)%3,v=d[M],w=d[A],T=ja[u[M]],R=ja[u[A]],x=`${v}_${w}`,E=`${w}_${v}`;E in h&&h[E]?(Ec.dot(h[E].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(R.x,R.y,R.z)),h[E]=null):x in h||(h[x]={index0:o[M],index1:o[A],normal:Ec.clone()})}}for(let g in h)if(h[g]){let{index0:S,index1:m}=h[g];Za.fromBufferAttribute(l,S),Ka.fromBufferAttribute(l,m),f.push(Za.x,Za.y,Za.z),f.push(Ka.x,Ka.y,Ka.z)}this.setAttribute("position",new ct(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Ws=class n extends Mo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Dt=class n extends Lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(i),c=Math.floor(s),o=l+1,u=c+1,d=e/l,h=t/c,f=[],g=[],S=[],m=[];for(let p=0;p<u;p++){let M=p*h-a;for(let A=0;A<o;A++){let v=A*d-r;g.push(v,-M,0),S.push(0,0,1),m.push(A/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<l;M++){let A=M+o*p,v=M+o*(p+1),w=M+1+o*(p+1),T=M+1+o*p;f.push(A,v,T),f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(S,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var zr=class n extends Lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,u=[],d=new L,h=new L,f=[],g=[],S=[],m=[];for(let p=0;p<=i;p++){let M=[],A=p/i,v=a+A*l,w=e*Math.cos(v),T=Math.sqrt(e*e-w*w),R=0;p===0&&a===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let E=x/t,P=s+E*r;d.x=-T*Math.cos(P),d.y=w,d.z=T*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(E+R,1-A),M.push(o++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let A=u[p][M+1],v=u[p][M],w=u[p+1][M],T=u[p+1][M+1];(p!==0||a>0)&&f.push(A,v,T),(p!==i-1||c<Math.PI)&&f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(S,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Tu(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Tu(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=is(n[t]);for(let s in i)e[s]=i[s]}return e}function Tu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function yp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ah(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var yd={clone:is,merge:Qt},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[i].value=new st().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wo=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var To=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eo=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ps(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ac(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Li=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let l=i+a>>>1;e<t[l]?a=l:i=l+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends Li{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ic:r=e,l=2*t-i;break;case Lc:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ic:a=e,c=2*i-t;break;case Lc:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let o=(i-t)*.5,u=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),S=g*g,m=S*g,p=-h*m+2*h*S-h*g,M=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*g+1,A=(-1-f)*m+(1.5+f)*S+.5*g,v=f*m-f*S;for(let w=0;w!==l;++w)r[w]=p*a[u+w]+M*a[o+w]+A*a[c+w]+v*a[d+w];return r}},Co=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==l;++h)r[h]=a[o+h]*d+a[c+h]*u;return r}},Ro=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Po=class extends Li{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),S=1-g;for(let m=0;m!==l;++m)r[m]=a[o+m]*S+a[c+m]*g;return r}let h=l*2,f=e-1;for(let g=0;g!==l;++g){let S=a[o+g],m=a[c+g],p=f*h+g*2,M=d[p],A=d[p+1],v=e*h+g*2,w=u[v],T=u[v+1],R=_p(i,t,M,w,s);r[g]=xd(R,S,A,T,m)}return r}};function xd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function bp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function _p(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let l=xd(r,e,t,i,s)-n;if(Math.abs(l)<1e-10)break;let c=bp(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ac(e.settings)&&(i.settings={inTangents:Ps(e.settings.inTangents,Array),outTangents:Ps(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Po(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case to:t=this.InterpolantFactoryMethodSmooth;break;case Rc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return to;case this.InterpolantFactoryMethodBezier:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ac(this.settings)&&(Eu(this.settings.inTangents,e),Eu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Ue("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Ue("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&Zf(s))for(let l=0,c=s.length;l!==c;++l){let o=s[l];if(isNaN(o)){Ue("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===to,r=e.length-1,a=1;for(let l=1;l<r;++l){let c=!1,o=e[l],u=e[l+1];if(o!==u&&(l!==1||o!==e[0]))if(s)c=!0;else{let d=l*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let S=t[d+g];if(S!==t[h+g]||S!==t[f+g]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let d=l*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let l=r*i,c=a*i,o=0;o!==i;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ac(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=fo;var Di=class extends yn{constructor(e,t,i){super(e,t,i)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Mr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Io.prototype.ValueTypeName="color";var Lo=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};Lo.prototype.ValueTypeName="number";var Do=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-t)/(s-t),o=e*l;for(let u=o+l;o!==u;o+=4)mn.slerpFlat(r,0,a,o-l,a,o,c);return r}},Hr=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends yn{constructor(e,t,i){super(e,t,i)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Mr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};No.prototype.ValueTypeName="vector";var Fo=class{constructor(e,t,i){let s=this,r=!1,a=0,l=0,c,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return o.push(u,d),this},this.removeHandler=function(u){let d=o.indexOf(u);return d!==-1&&o.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=o.length;d<h;d+=2){let f=o[d],g=o[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vd=new Fo,ko=class{constructor(e){this.manager=e!==void 0?e:vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gr=class extends Vr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cc=new st,Au=new L,Cu=new L,Uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),t.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qa=new L,eo=new mn,$n=new L,Wr=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,eo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,eo,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Qa,eo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,eo,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new L,Ru=new Be,Pu=new Be,Kt=class extends Wr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Pu),t.subVectors(Pu,Ru)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/o,s*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Xs=class extends Wr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dc=class extends Uo{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Dc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Is=-90,Ls=1,Oo=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Is,Ls,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Is,Ls,e,t);r.layers=this.layers,this.add(r);let a=new Kt(Is,Ls,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Is,Ls,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Is,Ls,e,t);c.layers=this.layers,this.add(c);let o=new Kt(Is,Ls,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,c]=t;for(let o of t)this.remove(o);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,o,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Bo=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var oh="\\[\\]\\.:\\/",Sp=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",Mp="[^"+oh.replace("\\.","")+"]",wp=/((?:WC+[\/:])*)/.source.replace("WC",lh),Tp=/(WCOD+)?/.source.replace("WCOD",Mp),Ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Cp=new RegExp("^"+wp+Tp+Ep+Ap+"$"),Rp=["material","materials","bones","map"],Nc=class{constructor(e,t,i){let s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sp,"")}static parseTrackName(e){let t=Cp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Rp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let c=i(l.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===o){o=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(o!==void 0){if(e[o]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Nc;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pv=new Float32Array(1);var Iu=new st,qr=class{constructor(e,t,i=0,s=1/0){this.ray=new Ci(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,i=[]){return Fc(e,this,i,t),i.sort(Lu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fc(e[s],this,i,t);return i.sort(Lu),i}};function Lu(n,e){return n.distance-e.distance}function Fc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,l=r.length;a<l;a++)Fc(r[a],e,t,!0)}}var kc=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function ch(n,e,t,i){let s=Pp(i);switch(t){case nh:return n*e;case Yo:return n*e/s.components*s.byteLength;case Jo:return n*e/s.components*s.byteLength;case Bi:return n*e*2/s.components*s.byteLength;case Zo:return n*e*2/s.components*s.byteLength;case ih:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case Ko:return n*e*4/s.components*s.byteLength;case Zr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qo:case tl:return Math.max(n,16)*Math.max(e,8)/4;case jo:case el:return Math.max(n,8)*Math.max(e,8)/2;case nl:case il:case rl:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:case ea:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Ml:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ta:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pp(n){switch(n){case un:case jc:return{byteLength:1,components:1};case Ys:case Qc:case Gn:return{byteLength:2,components:1};case qo:case $o:return{byteLength:2,components:4};case Vn:case Xo:case Cn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);function Hd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ip(n){let e=new WeakMap;function t(l,c){let o=l.array,u=l.usage,d=o.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,o,u),l.onUploadCallback();let f;if(o instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=n.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=n.SHORT;else if(o instanceof Uint32Array)f=n.UNSIGNED_INT;else if(o instanceof Int32Array)f=n.INT;else if(o instanceof Int8Array)f=n.BYTE;else if(o instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,c,o){let u=c.array,d=c.updateRanges;if(n.bindBuffer(o,l),d.length===0)n.bufferSubData(o,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let S=d[f];n.bufferSubData(o,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var Lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xp=`#ifdef USE_IRIDESCENCE
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
#endif`,qp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tm=`#define PI 3.141592653589793
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
} // validated`,nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,im=`vec3 transformedNormal = objectNormal;
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
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vm=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rm=`PhysicalMaterial material;
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
#endif`,Pm=`uniform sampler2D dfgLUT;
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
}`,Im=`
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
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
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yg=`float getShadowMask() {
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
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,$g=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,Jg=`#define LAMBERT
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
}`,Zg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,t0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Lp,alphahash_pars_fragment:Dp,alphamap_fragment:Np,alphamap_pars_fragment:Fp,alphatest_fragment:kp,alphatest_pars_fragment:Up,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:Hp,begin_vertex:Vp,beginnormal_vertex:Gp,bsdfs:Wp,iridescence_fragment:Xp,bumpmap_pars_fragment:qp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Zp,color_fragment:Kp,color_pars_fragment:jp,color_pars_vertex:Qp,color_vertex:em,common:tm,cube_uv_reflection_fragment:nm,defaultnormal_vertex:im,displacementmap_pars_vertex:sm,displacementmap_vertex:rm,emissivemap_fragment:am,emissivemap_pars_fragment:om,colorspace_fragment:lm,colorspace_pars_fragment:cm,envmap_fragment:hm,envmap_common_pars_fragment:um,envmap_pars_fragment:dm,envmap_pars_vertex:fm,envmap_physical_pars_fragment:wm,envmap_vertex:pm,fog_vertex:mm,fog_pars_vertex:gm,fog_fragment:ym,fog_pars_fragment:xm,gradientmap_pars_fragment:vm,lightmap_pars_fragment:bm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:Sm,lights_pars_begin:Mm,lights_toon_fragment:Tm,lights_toon_pars_fragment:Em,lights_phong_fragment:Am,lights_phong_pars_fragment:Cm,lights_physical_fragment:Rm,lights_physical_pars_fragment:Pm,lights_fragment_begin:Im,lights_fragment_maps:Lm,lights_fragment_end:Dm,lightprobes_pars_fragment:Nm,logdepthbuf_fragment:Fm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:Hm,map_particle_pars_fragment:Vm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:$m,morphtarget_pars_vertex:Ym,morphtarget_vertex:Jm,normal_fragment_begin:Zm,normal_fragment_maps:Km,normal_pars_fragment:jm,normal_pars_vertex:Qm,normal_vertex:eg,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:ag,packing:og,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:dg,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:yg,skinbase_vertex:xg,skinning_pars_vertex:vg,skinning_vertex:bg,skinnormal_vertex:_g,specularmap_fragment:Sg,specularmap_pars_fragment:Mg,tonemapping_fragment:wg,tonemapping_pars_fragment:Tg,transmission_fragment:Eg,transmission_pars_fragment:Ag,uv_pars_fragment:Cg,uv_pars_vertex:Rg,uv_vertex:Pg,worldpos_vertex:Ig,background_vert:Lg,background_frag:Dg,backgroundCube_vert:Ng,backgroundCube_frag:Fg,cube_vert:kg,cube_frag:Ug,depth_vert:Og,depth_frag:Bg,distance_vert:zg,distance_frag:Hg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:qg,meshbasic_frag:$g,meshlambert_vert:Yg,meshlambert_frag:Jg,meshmatcap_vert:Zg,meshmatcap_frag:Kg,meshnormal_vert:jg,meshnormal_frag:Qg,meshphong_vert:e0,meshphong_frag:t0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:a0,points_frag:o0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},pe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ii={basic:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Qt([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Qt([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Qt([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Qt([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Qt([pe.lights,pe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ii.physical={uniforms:Qt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Il={r:0,b:0,g:0},d0=new st,Vd=new Ve;Vd.set(-1,0,0,0,1,0,0,0,1);function f0(n,e,t,i,s,r){let a=new Ge(0),l=s===!0?0:1,c,o,u=null,d=0,h=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=e.get(A,v)}return A}function g(M){let A=!1,v=f(M);v===null?m(a,l):v&&v.isColor&&(m(v,1),A=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Yr)?(o===void 0&&(o=new Fe(new ei(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:is(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=v,o.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Vd),o.material.toneMapped=je.getTransfer(v.colorSpace)!==lt,(u!==v||d!==v.version||h!==n.toneMapping)&&(o.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),o.layers.enableAll(),M.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Fe(new Dt(2,2),new gn({name:"BackgroundMaterial",uniforms:is(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=je.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(Il,ah(n)),t.buffers.color.setClear(Il.r,Il.g,Il.b,A,r)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),l=A,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:S,dispose:p}}function p0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function l(_,I,U,D,H){let Y=!1,F=d(_,D,U,I);r!==F&&(r=F,o(r.object)),Y=f(_,D,U,H),Y&&g(_,D,U,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(_,I,U,D),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function o(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,I,U,D){let H=D.wireframe===!0,Y=i[I.id];Y===void 0&&(Y={},i[I.id]=Y);let F=_.isInstancedMesh===!0?_.id:0,ne=Y[F];ne===void 0&&(ne={},Y[F]=ne);let X=ne[U.id];X===void 0&&(X={},ne[U.id]=X);let K=X[H];return K===void 0&&(K=h(c()),X[H]=K),K}function h(_){let I=[],U=[],D=[];for(let H=0;H<t;H++)I[H]=0,U[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:D,object:_,attributes:{},index:null}}function f(_,I,U,D){let H=r.attributes,Y=I.attributes,F=0,ne=U.getAttributes();for(let X in ne)if(ne[X].location>=0){let B=H[X],j=Y[X];if(j===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;F++}return r.attributesNum!==F||r.index!==D}function g(_,I,U,D){let H={},Y=I.attributes,F=0,ne=U.getAttributes();for(let X in ne)if(ne[X].location>=0){let B=Y[X];B===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(B=_.instanceColor));let j={};j.attribute=B,B&&B.data&&(j.data=B.data),H[X]=j,F++}r.attributes=H,r.attributesNum=F,r.index=D}function S(){let _=r.newAttributes;for(let I=0,U=_.length;I<U;I++)_[I]=0}function m(_){p(_,0)}function p(_,I){let U=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;U[_]=1,D[_]===0&&(n.enableVertexAttribArray(_),D[_]=1),H[_]!==I&&(n.vertexAttribDivisor(_,I),H[_]=I)}function M(){let _=r.newAttributes,I=r.enabledAttributes;for(let U=0,D=I.length;U<D;U++)I[U]!==_[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function A(_,I,U,D,H,Y,F){F===!0?n.vertexAttribIPointer(_,I,U,H,Y):n.vertexAttribPointer(_,I,U,D,H,Y)}function v(_,I,U,D){S();let H=D.attributes,Y=U.getAttributes(),F=I.defaultAttributeValues;for(let ne in Y){let X=Y[ne];if(X.location>=0){let K=H[ne];if(K===void 0&&(ne==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),ne==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){let B=K.normalized,j=K.itemSize,se=e.get(K);if(se===void 0)continue;let ze=se.buffer,Ie=se.type,We=se.bytesPerElement,$=Ie===n.INT||Ie===n.UNSIGNED_INT||K.gpuType===Xo;if(K.isInterleavedBufferAttribute){let Q=K.data,ve=Q.stride,ke=K.offset;if(Q.isInstancedInterleavedBuffer){for(let re=0;re<X.locationSize;re++)p(X.location+re,Q.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let re=0;re<X.locationSize;re++)m(X.location+re);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let re=0;re<X.locationSize;re++)A(X.location+re,j/X.locationSize,Ie,B,ve*We,(ke+j/X.locationSize*re)*We,$)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,K.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Q=0;Q<X.locationSize;Q++)A(X.location+Q,j/X.locationSize,Ie,B,j*We,j/X.locationSize*Q*We,$)}}else if(F!==void 0){let B=F[ne];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(X.location,B);break;case 3:n.vertexAttrib3fv(X.location,B);break;case 4:n.vertexAttrib4fv(X.location,B);break;default:n.vertexAttrib1fv(X.location,B)}}}}M()}function w(){E();for(let _ in i){let I=i[_];for(let U in I){let D=I[U];for(let H in D){let Y=D[H];for(let F in Y)u(Y[F].object),delete Y[F];delete D[H]}}delete i[_]}}function T(_){if(i[_.id]===void 0)return;let I=i[_.id];for(let U in I){let D=I[U];for(let H in D){let Y=D[H];for(let F in Y)u(Y[F].object),delete Y[F];delete D[H]}}delete i[_.id]}function R(_){for(let I in i){let U=i[I];for(let D in U){let H=U[D];if(H[_.id]===void 0)continue;let Y=H[_.id];for(let F in Y)u(Y[F].object),delete Y[F];delete H[_.id]}}}function x(_){for(let I in i){let U=i[I],D=_.isInstancedMesh===!0?_.id:0,H=U[D];if(H!==void 0){for(let Y in H){let F=H[Y];for(let ne in F)u(F[ne].object),delete F[ne];delete H[Y]}delete U[D],Object.keys(U).length===0&&delete i[I]}}}function E(){P(),a=!0,r!==s&&(r=s,o(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function m0(n,e,t){let i;function s(c){i=c}function r(c,o){n.drawArrays(i,c,o),t.update(o,i,1)}function a(c,o,u){u!==0&&(n.drawArraysInstanced(i,c,o,u),t.update(o,i,u))}function l(c,o,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,u);let h=0;for(let f=0;f<u;f++)h+=o[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function g0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){let x=R===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==un&&R!==Cn&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",u=c(o);u!==o&&(Ne("WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:w,samples:T}}function y0(n){let e=this,t=null,i=0,s=!1,r=!1,a=new pn,l=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):o();else{let M=r?0:i,A=M*4,v=p.clippingState||null;c.value=v,v=u(g,h,A,f);for(let w=0;w!==A;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=c.value,g!==!0||m===null){let p=f+S*4,M=h.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=f;A!==S;++A,v+=4)a.copy(d[A]).applyMatrix4(M,l),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var Ks=4,x0=6,v0=20,b0=256,na=new Xs,bd=new Ge,hh=null,uh=0,dh=0,fh=!1,_0=new L,ss=new L,Dl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:l=_0}=r;hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,uh,dh),this._renderer.xr.enabled=fh,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Gn,format:Rn,colorSpace:wr,depthBuffer:!1},s=_d(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=S0(r)),this._blurMaterial=w0(r,e,t),this._ggxMaterial=M0(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new Lt,e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,s,r){let c=new Kt(90,1,t,i),o=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(bd),d.toneMapping=Hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new ei,new hn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(bd),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(c.up.set(0,o[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):v===1?(c.up.set(0,0,o[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,o[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let w=this._cubeSize;Zs(s,v*w,A>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(S,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ki||e.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;Zs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,na)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(o*o-u*u),h=o*1.25,f=d*h,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Ks?i-g+Ks:0),p=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Zs(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(l,na),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Zs(e,m,p,3*S,2*S),s.setRenderTarget(e),s.render(l,na)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let o=l.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ks?s-this._lodMax+Ks:0),h=4*(this._cubeSize-u);Zs(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(c,na)}};function S0(n){let e=[],t=[],i=n,s=n-Ks+1+x0;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let l=1/(a-2),c=-l,o=1+l,u=[c,c,o,c,o,o,c,c,o,o,c,o],d=6,h=6,f=3,g=new Float32Array(f*h*d),S=new Float32Array(f*h*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,A=p>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(v,f*h*p);for(let w=0;w<h;w++){let T=u[w*2]*2-1,R=u[w*2+1]*2-1;p===0?ss.set(1,R,T):p===1?ss.set(-T,1,-R):p===2?ss.set(-T,R,1):p===3?ss.set(-1,R,-T):p===4?ss.set(-T,-1,R):ss.set(T,R,-1),ss.toArray(S,(p*h+w)*f)}}let m=new Lt;m.setAttribute("position",new ln(g,f)),m.setAttribute("outputDirection",new ln(S,f)),t.push(new Fe(m,null)),i>Ks&&i--}return{lodMeshes:t,sizeLods:e}}function _d(n,e,t){let i=new cn(n,e,t);return i.texture.mapping=Yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function M0(n,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function w0(n,e,t){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:v0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Sd(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Md(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nl=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ti});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),l=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Wt),new Oo(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function T0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Vo||f===Go)if(e.has(h)){let g=e.get(h).texture;return l(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new Nl(g.height);return S.fromEquirectangularTexture(n,h),e.set(h,S),h.addEventListener("dispose",o),l(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Vo||f===Go,S=f===ki||f===ns;if(g||S){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Dl(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||S&&M&&c(M)?(i===null&&(i=new Dl(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function l(h,f){return f===Vo?h.mapping=ki:f===Go&&(h.mapping=ns),h}function c(h){let f=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function o(h){let f=h.target;f.removeEventListener("dispose",o);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function E0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ki("WebGLRenderer: "+i+" extension not supported."),s}}}function A0(n,e,t,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function o(d){let h=[],f=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(f!==null){let M=f.array;S=f.version;for(let A=0,v=M.length;A<v;A+=3){let w=M[A+0],T=M[A+1],R=M[A+2];h.push(w,T,T,R,R,w)}}else{let M=g.array;S=g.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let w=A+0,T=A+1,R=A+2;h.push(w,T,T,R,R,w)}}let m=new(g.count>=65535?Lr:Ir)(h,1);m.version=S;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&o(d)}else o(d);return r.get(d)}return{get:l,update:c,getWireframeAttribute:u}}function C0(n,e,t){let i;function s(d){i=d}let r,a;function l(d){r=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function o(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];t.update(S,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=u}function R0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function P0(n,e,t){let i=new WeakMap,s=new Mt;function r(a,l,c){let o=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(l);if(h===void 0||h.count!==d){let E=function(){R.dispose(),i.delete(l),l.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],M=l.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),S===!0&&(A=3);let v=l.attributes.position.count*A,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*w*4*d),R=new Cr(T,v,w,d);R.type=Cn,R.needsUpdate=!0;let x=A*4;for(let P=0;P<d;P++){let _=m[P],I=p[P],U=M[P],D=v*w*4*P;for(let H=0;H<_.count;H++){let Y=H*x;f===!0&&(s.fromBufferAttribute(_,H),T[D+Y+0]=s.x,T[D+Y+1]=s.y,T[D+Y+2]=s.z,T[D+Y+3]=0),g===!0&&(s.fromBufferAttribute(I,H),T[D+Y+4]=s.x,T[D+Y+5]=s.y,T[D+Y+6]=s.z,T[D+Y+7]=0),S===!0&&(s.fromBufferAttribute(U,H),T[D+Y+8]=s.x,T[D+Y+9]=s.y,T[D+Y+10]=s.z,T[D+Y+11]=U.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new Be(v,w)},i.set(l,h),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<o.length;S++)f+=o[S];let g=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",o)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function I0(n,e,t,i,s){let r=new WeakMap;function a(o){let u=s.render.frame,d=o.geometry,h=e.get(o,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==u&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,u))),o.isSkinnedMesh){let f=o.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function l(){r=new WeakMap}function c(o){let u=o.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}var L0={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[$c]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function D0(n,e,t,i,s,r){let a=new cn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,o=new Lt;o.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ct([0,2,0,0,2,0],2));let u=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Fe(o,u),h=new Xs(-1,1,1,-1,0,1),f=null,g=null,S=!1,m,p=null,M=[],A=!1;this.setSize=function(v,w){a.setSize(v,w),l!==null&&l.setSize(v,w),c!==null&&c.setSize(v,w);for(let T=0;T<M.length;T++){let R=M[T];R.setSize&&R.setSize(v,w)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let w=a.width,T=a.height;M.length>0&&l===null&&(l=new cn(w,T,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),c=new cn(w,T,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(w,T)}},this.begin=function(v,w){if(S||v.toneMapping===Hn&&M.length===0)return!1;if(p=w,w!==null){let T=w.width,R=w.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return A===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Hn,!0},this.hasRenderPass=function(){return A},this.end=function(v,w){v.toneMapping=m,S=!0;let T=a,R=l;for(let x=0;x<M.length;x++){let E=M[x];E.enabled!==!1&&(E.render(v,R,T,w),E.needsSwap!==!1&&(T=R,R=R===l?c:l))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},je.getTransfer(f)===lt&&(u.defines.SRGB_TRANSFER="");let x=L0[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(d,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),u.dispose()}}var Gd=new sn,gh=new Pi(1,1),Wd=new Cr,Xd=new yo,qd=new Ur,wd=[],Td=[],Ed=new Float32Array(16),Ad=new Float32Array(9),Cd=new Float32Array(4);function Qs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ul(n,e){let t=Td[e];t===void 0&&(t=new Int32Array(e),Td[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function N0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function F0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function k0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function U0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function O0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Cd.set(i),n.uniformMatrix2fv(this.addr,!1,Cd),Ft(t,i)}}function B0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Ad.set(i),n.uniformMatrix3fv(this.addr,!1,Ad),Ft(t,i)}}function z0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Ed.set(i),n.uniformMatrix4fv(this.addr,!1,Ed),Ft(t,i)}}function H0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function V0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function G0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function W0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function X0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function q0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function $0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function Y0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function J0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gh.compareFunction=t.isReversedDepthBuffer()?Pl:Rl,r=gh):r=Gd,t.setTexture2D(e||r,s)}function Z0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xd,s)}function K0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qd,s)}function j0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wd,s)}function Q0(n){switch(n){case 5126:return N0;case 35664:return F0;case 35665:return k0;case 35666:return U0;case 35674:return O0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return H0;case 35667:case 35671:return V0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return $0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return j0}}function ey(n,e){n.uniform1fv(this.addr,e)}function ty(n,e){let t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function ny(n,e){let t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function iy(n,e){let t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function sy(n,e){let t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ry(n,e){let t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ay(n,e){let t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oy(n,e){n.uniform1iv(this.addr,e)}function ly(n,e){n.uniform2iv(this.addr,e)}function cy(n,e){n.uniform3iv(this.addr,e)}function hy(n,e){n.uniform4iv(this.addr,e)}function uy(n,e){n.uniform1uiv(this.addr,e)}function dy(n,e){n.uniform2uiv(this.addr,e)}function fy(n,e){n.uniform3uiv(this.addr,e)}function py(n,e){n.uniform4uiv(this.addr,e)}function my(n,e,t){let i=this.cache,s=e.length,r=Ul(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=gh:a=Gd;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function gy(n,e,t){let i=this.cache,s=e.length,r=Ul(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xd,r[a])}function yy(n,e,t){let i=this.cache,s=e.length,r=Ul(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qd,r[a])}function xy(n,e,t){let i=this.cache,s=e.length,r=Ul(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wd,r[a])}function vy(n){switch(n){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return ay;case 5124:case 35670:return oy;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return xy}}var yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q0(t.type)}},xh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}},vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],i)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Rd(n,e){n.seq.push(e),n.map[e.id]=e}function by(n,e,t){let i=n.name,s=i.length;for(ph.lastIndex=0;;){let r=ph.exec(i),a=ph.lastIndex,l=r[1],c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){Rd(t,o===void 0?new yh(l,n,e):new xh(l,n,e));break}else{let d=t.map[l];d===void 0&&(d=new vh(l),Rd(t,d)),t=d}}}var js=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);by(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Pd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var _y=37297,Sy=0;function My(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}var Id=new Ve;function wy(n){je._getMatrix(Id,je.workingColorSpace,n);let e=`mat3( ${Id.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Tr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ld(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+My(n.getShaderSource(e),l)}else return r}function Ty(n,e){let t=wy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ey={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[$c]:"ACESFilmic",[Jc]:"AgX",[Zc]:"Neutral",[Yc]:"Custom"};function Ay(n,e){let t=Ey[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new L;function Cy(){je.getLuminanceCoefficients(Ll);let n=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function Py(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Iy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function sa(n){return n!==""}function Dd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(Ly,Ny)}var Dy=new Map;function Ny(n,e){let t=$e[e];if(t===void 0){let i=Dy.get(e);if(i!==void 0)t=$e[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bh(t)}var Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(n){return n.replace(Fy,ky)}function ky(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Uy={[$r]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function Oy(n){return Uy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var By={[ki]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE_UV"};function zy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":By[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Hy={[ns]:"ENVMAP_MODE_REFRACTION"};function Vy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Hy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gy={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function Wy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Gy[n.combine]||"ENVMAP_BLENDING_NONE"}function Xy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,c=Oy(t),o=zy(t),u=Vy(t),d=Wy(t),h=Xy(t),f=Ry(t),g=Py(r),S=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(m=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Ay("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Ty("linearToOutputTexel",t.outputColorSpace),Cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=bh(a),a=Dd(a,t),a=Nd(a,t),l=bh(l),l=Dd(l,t),l=Nd(l,t),a=Fd(a),l=Fd(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=M+m+a,v=M+p+l,w=Pd(s,s.VERTEX_SHADER,A),T=Pd(s,s.FRAGMENT_SHADER,v);s.attachShader(S,w),s.attachShader(S,T),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(_){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(S)||"",U=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(T)||"",H=I.trim(),Y=U.trim(),F=D.trim(),ne=!0,X=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,w,T);else{let K=Ld(s,w,"vertex"),B=Ld(s,T,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+H+`
`+K+`
`+B)}else H!==""?Ne("WebGLProgram: Program Info Log:",H):(Y===""||F==="")&&(X=!1);X&&(_.diagnostics={runnable:ne,programLog:H,vertexShader:{log:Y,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(w),s.deleteShader(T),x=new js(s,S),E=Iy(s,S)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,_y)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=T,this}var $y=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sh(e),t.set(e,i)),i}},Sh=class{constructor(e){this.id=$y++,this.code=e,this.usedTimes=0}};function Yy(n){return n===Bi||n===ea||n===ta}function Jy(n,e,t,i,s,r){let a=new Bs,l=new _h,c=new Set,o=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,E,P,_,I,U){let D=_.fog,H=I.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?_.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||Y,F),X=ne&&ne.mapping===Yr?ne.image.height:null,K=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let B=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,j=B!==void 0?B.length:0,se=0;H.morphAttributes.position!==void 0&&(se=1),H.morphAttributes.normal!==void 0&&(se=2),H.morphAttributes.color!==void 0&&(se=3);let ze,Ie,We,$;if(K){let gt=ii[K];ze=gt.vertexShader,Ie=gt.fragmentShader}else{ze=x.vertexShader,Ie=x.fragmentShader;let gt=l.getVertexShaderStage(x),at=l.getFragmentShaderStage(x);l.update(x,gt,at),We=gt.id,$=at.id}let Q=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,re=I.isBatchedMesh===!0,He=!!x.map,rt=!!x.matcap,Oe=!!ne,Ze=!!x.aoMap,it=!!x.lightMap,Ke=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,Ot=!!x.displacementMap,on=!!x.emissiveMap,Tt=!!x.metalnessMap,Ct=!!x.roughnessMap,O=x.anisotropy>0,$t=x.clearcoat>0,ut=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,z=x.sheen>0,W=x.transmission>0,J=O&&!!x.anisotropyMap,ae=$t&&!!x.clearcoatMap,oe=$t&&!!x.clearcoatNormalMap,Z=$t&&!!x.clearcoatRoughnessMap,te=y&&!!x.iridescenceMap,le=y&&!!x.iridescenceThicknessMap,Re=z&&!!x.sheenColorMap,fe=z&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Pe=!!x.specularColorMap,De=!!x.specularIntensityMap,Xe=W&&!!x.transmissionMap,k=W&&!!x.thicknessMap,he=!!x.gradientMap,ee=!!x.alphaMap,ue=x.alphaTest>0,ye=!!x.alphaHash,ie=!!x.extensions,Le=Hn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=n.toneMapping);let Ee={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:Ie,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:re,batchingColor:re&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:rt,envMap:Oe,envMapMode:Oe&&ne.mapping,envMapCubeUVHeight:X,aoMap:Ze,lightMap:it,bumpMap:Ke,normalMap:St,displacementMap:Ot,emissiveMap:on,normalMapObjectSpace:St&&x.normalMapType===id,normalMapTangentSpace:St&&x.normalMapType===Cl,packedNormalMap:St&&x.normalMapType===Cl&&Yy(x.normalMap.format),metalnessMap:Tt,roughnessMap:Ct,anisotropy:O,anisotropyMap:J,clearcoat:$t,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Z,dispersion:ut,retroreflection:C,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:le,sheen:z,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:ce,specularColorMap:Pe,specularIntensityMap:De,transmission:W,transmissionMap:Xe,thicknessMap:k,gradientMap:he,opaque:x.transparent===!1&&x.blending===$s&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:ye,combine:x.combine,mapUv:He&&g(x.map.channel),aoMapUv:Ze&&g(x.aoMap.channel),lightMapUv:it&&g(x.lightMap.channel),bumpMapUv:Ke&&g(x.bumpMap.channel),normalMapUv:St&&g(x.normalMap.channel),displacementMapUv:Ot&&g(x.displacementMap.channel),emissiveMapUv:on&&g(x.emissiveMap.channel),metalnessMapUv:Tt&&g(x.metalnessMap.channel),roughnessMapUv:Ct&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:ae&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(x.sheenRoughnessMap.channel),specularMapUv:ce&&g(x.specularMap.channel),specularColorMapUv:Pe&&g(x.specularColorMap.channel),specularIntensityMapUv:De&&g(x.specularIntensityMap.channel),transmissionMapUv:Xe&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(St||O),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(He||ee),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:se,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:on&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(E,x),M(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let E=f[x.type],P;if(E){let _=ii[E];P=yd.clone(_.uniforms)}else P=x.uniforms;return P}function v(x,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new qy(n,E,x,s),o.push(P),u.set(E,P)),P}function w(x){if(--x.usedTimes===0){let E=o.indexOf(x);o[E]=o[o.length-1],o.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){l.remove(x)}function R(){l.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:w,releaseShaderCache:T,programs:o,dispose:R}}function Zy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,c){n.get(a)[l]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ky(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ud(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Od(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function l(h,f,g,S,m,p){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},n[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=p),e++,M}function c(h,f,g,S,m,p,M){M.reversedDepth===!0&&(m=-m);let A=l(h,f,g,S,m,p);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):t.push(A)}function o(h,f,g,S,m,p){let M=l(h,f,g,S,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||Ky),i.length>1&&i.sort(f||Ud),s.length>1&&s.sort(f||Ud)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:o,finish:d,sort:u}}function jy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Od,n.set(i,[a])):s>=r.length?(a=new Od,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ge};break;case"SpotLight":t={position:new L,direction:new L,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function ex(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tx=0;function nx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ix(n){let e=new Qy,t=ex(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new L);let s=new L,r=new st,a=new st;function l(o){let u=0,d=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,M=0,A=0,v=0,w=0,T=0,R=0,x=0,E=0,P=0;o.sort(nx);for(let I=0,U=o.length;I<U;I++){let D=o[I],H=D.color,Y=D.intensity,F=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Bi?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=H.r*Y,d+=H.g*Y,h+=H.b*Y;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],Y);P++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[g]=B,i.sunShadowMap[g]=ne;let j=K.getViewportCount();for(let se=0;se<j;se++)i.sunShadowMatrix[S+se]=K.getMatrix(se),i.sunShadowCascade[S+se]=K._cascadeData[se];S+=j,g++}i.sun[f]=X,f++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=D.shadow.matrix,w++}i.directional[m]=X,m++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Y),X.distance=F,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[M]=X;let K=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,K.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[M]=K.matrix,D.castShadow){let B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=ne,R++}M++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(H).multiplyScalar(Y),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[A]=X,A++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=D.shadow.matrix,T++}i.point[p]=X,p++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(Y),X.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[v]=X,v++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let _=i.hash;(_.sunLength!==f||_.directionalLength!==m||_.pointLength!==p||_.spotLength!==M||_.rectAreaLength!==A||_.hemiLength!==v||_.numSunShadows!==g||_.numDirectionalShadows!==w||_.numPointShadows!==T||_.numSpotShadows!==R||_.numSpotMaps!==x||_.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=A,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,_.sunLength=f,_.directionalLength=m,_.pointLength=p,_.spotLength=M,_.rectAreaLength=A,_.hemiLength=v,_.numSunShadows=g,_.numDirectionalShadows=w,_.numPointShadows=T,_.numSpotShadows=R,_.numSpotMaps=x,_.numLightProbes=P,i.version=tx++)}function c(o,u){let d=0,h=0,f=0,g=0,S=0,m=0,p=u.matrixWorldInverse;for(let M=0,A=o.length;M<A;M++){let v=o[M];if(v.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(v.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let w=i.rectArea[S];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Bd(n){let e=new ix(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function l(h){i.push(h)}function c(h){s.push(h)}function o(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:o,setupLightsView:u,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function sx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new Bd(n),e.set(s,[l])):r>=a.length?(l=new Bd(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}var rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
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
}`,ox=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],lx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],zd=new st,ia=new L,mh=new L;function cx(n,e,t){let i=new Gs,s=new Be,r=new Be,a=new Mt,l=new To,c=new Eo,o={},u=t.maxTextureSize,d={[Fi]:rn,[rn]:Fi,[An]:An},h=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:rx,fragmentShader:ax}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Fe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let p=this.type;this.render=function(T,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ho&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let E=n.getRenderTarget(),P=n.getActiveCubeFace(),_=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=p!==this.type;U&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=T.length;D<H;D++){let Y=T[D],F=Y.shadow;if(F===void 0){Ne("WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let ne=F.getFrameExtents();s.multiply(ne),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,F.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qs){if(Y.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new cn(s.x,s.y,{format:Bi,type:Gn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),F.map.texture.name=Y.name+".shadowMap",F.map.depthTexture=new Pi(s.x,s.y,Cn),F.map.depthTexture.name=Y.name+".shadowMapDepth",F.map.depthTexture.format=Kn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ht,F.map.depthTexture.magFilter=Ht}else Y.isPointLight?(F.map=new Nl(s.x),F.map.depthTexture=new So(s.x,Vn)):(F.map=new cn(s.x,s.y),F.map.depthTexture=new Pi(s.x,s.y,Vn)),F.map.depthTexture.name=Y.name+".shadowMap",F.map.depthTexture.format=Kn,this.type===$r?(F.map.depthTexture.compareFunction=X?Pl:Rl,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ht,F.map.depthTexture.magFilter=Ht);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let K=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();Y.isPointLight!==!0&&F.updateMatrices(Y,x);for(let B=0;B<K;B++){let j=F.getCamera(B);if(Y.isPointLight){let se=F.camera,ze=F.matrix,Ie=Y.distance||se.far;Ie!==se.far&&(se.far=Ie,se.updateProjectionMatrix()),ia.setFromMatrixPosition(Y.matrixWorld),se.position.copy(ia),mh.copy(se.position),mh.add(ox[B]),se.up.copy(lx[B]),se.lookAt(mh),se.updateMatrixWorld(),ze.makeTranslation(-ia.x,-ia.y,-ia.z),zd.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F._frustum.setFromProjectionMatrix(zd,se.coordinateSystem,se.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,B),n.clear();else{B===0&&(n.setRenderTarget(F.map),n.clear());let se=F.getViewport(B);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),I.viewport(a)}i=F.getFrustum(B),v(R,x,j,Y,this.type)}F.isPointLightShadow!==!0&&this.type===qs&&M(F,x),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,P,_)};function M(T,R){let x=e.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new cn(s.x,s.y,{format:Bi,type:Gn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,x,h,S,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,x,f,S,null)}function A(T,R,x,E){let P=null,_=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(_!==void 0)P=_;else if(P=x.isPointLight===!0?c:l,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let I=P.uuid,U=R.uuid,D=o[I];D===void 0&&(D={},o[I]=D);let H=D[U];H===void 0&&(H=P.clone(),D[U]=H,R.addEventListener("dispose",w)),P=H}if(P.visible=R.visible,P.wireframe=R.wireframe,E===qs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let I=n.properties.get(P);I.light=x}return P}function v(T,R,x,E,P){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===qs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let U=e.update(T),D=T.material;if(Array.isArray(D)){let H=U.groups;for(let Y=0,F=H.length;Y<F;Y++){let ne=H[Y],X=D[ne.materialIndex];if(X&&X.visible){let K=A(T,X,E,P);T.onBeforeShadow(n,T,R,x,U,K,ne),n.renderBufferDirect(x,null,U,K,T,ne),T.onAfterShadow(n,T,R,x,U,K,ne)}}}else if(D.visible){let H=A(T,D,E,P);T.onBeforeShadow(n,T,R,x,U,H,null),n.renderBufferDirect(x,null,U,H,T,null),T.onAfterShadow(n,T,R,x,U,H,null)}}let I=T.children;for(let U=0,D=I.length;U<D;U++)v(I[U],R,x,E,P)}function w(T){T.target.removeEventListener("dispose",w);for(let x in o){let E=o[x],P=T.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function hx(n,e){function t(){let k=!1,he=new Mt,ee=null,ue=new Mt(0,0,0,0);return{setMask:function(ye){ee!==ye&&!k&&(n.colorMask(ye,ye,ye,ye),ee=ye)},setLocked:function(ye){k=ye},setClear:function(ye,ie,Le,Ee,gt){gt===!0&&(ye*=Ee,ie*=Ee,Le*=Ee),he.set(ye,ie,Le,Ee),ue.equals(he)===!1&&(n.clearColor(ye,ie,Le,Ee),ue.copy(he))},reset:function(){k=!1,ee=null,ue.set(-1,0,0,0)}}}function i(){let k=!1,he=!1,ee=null,ue=null,ye=null;return{setReversed:function(ie){if(he!==ie){let Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let Ee=ye;ye=null,this.setClear(Ee)}},getReversed:function(){return he},setTest:function(ie){ie?Q(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!k&&(n.depthMask(ie),ee=ie)},setFunc:function(ie){if(he&&(ie=pd[ie]),ue!==ie){switch(ie){case so:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case ao:n.depthFunc(n.LESS);break;case Ns:n.depthFunc(n.LEQUAL);break;case oo:n.depthFunc(n.EQUAL);break;case lo:n.depthFunc(n.GEQUAL);break;case co:n.depthFunc(n.GREATER);break;case ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ie}},setLocked:function(ie){k=ie},setClear:function(ie){ye!==ie&&(ye=ie,he&&(ie=1-ie),n.clearDepth(ie))},reset:function(){k=!1,ee=null,ue=null,ye=null,he=!1}}}function s(){let k=!1,he=null,ee=null,ue=null,ye=null,ie=null,Le=null,Ee=null,gt=null;return{setTest:function(at){k||(at?Q(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(at){he!==at&&!k&&(n.stencilMask(at),he=at)},setFunc:function(at,Fn,Xn){(ee!==at||ue!==Fn||ye!==Xn)&&(n.stencilFunc(at,Fn,Xn),ee=at,ue=Fn,ye=Xn)},setOp:function(at,Fn,Xn){(ie!==at||Le!==Fn||Ee!==Xn)&&(n.stencilOp(at,Fn,Xn),ie=at,Le=Fn,Ee=Xn)},setLocked:function(at){k=at},setClear:function(at){gt!==at&&(n.clearStencil(at),gt=at)},reset:function(){k=!1,he=null,ee=null,ue=null,ye=null,ie=null,Le=null,Ee=null,gt=null}}}let r=new t,a=new i,l=new s,c=new WeakMap,o=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,A=null,v=null,w=null,T=null,R=null,x=new Ge(0,0,0),E=0,P=!1,_=null,I=null,U=null,D=null,H=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,ne=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=ne>=2);let K=null,B={},j=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),ze=new Mt().fromArray(j),Ie=new Mt().fromArray(se);function We(k,he,ee,ue){let ye=new Uint8Array(4),ie=n.createTexture();n.bindTexture(k,ie),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<ee;Le++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(he+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ie}let $={};$[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Q(n.DEPTH_TEST),a.setFunc(Ns),Ke(!1),St(Uc),Q(n.CULL_FACE),Ze(ti);function Q(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function ve(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function ke(k,he){return h[k]!==he?(n.bindFramebuffer(k,he),h[k]=he,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function re(k,he){let ee=g,ue=!1;if(k){ee=f.get(he),ee===void 0&&(ee=[],f.set(he,ee));let ye=k.textures;if(ee.length!==ye.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Le=ye.length;ie<Le;ie++)ee[ie]=n.COLOR_ATTACHMENT0+ie;ee.length=ye.length,ue=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ee)}function He(k){return S!==k?(n.useProgram(k),S=k,!0):!1}let rt={[ts]:n.FUNC_ADD,[ku]:n.FUNC_SUBTRACT,[Uu]:n.FUNC_REVERSE_SUBTRACT};rt[Ou]=n.MIN,rt[Bu]=n.MAX;let Oe={[zu]:n.ZERO,[Hu]:n.ONE,[Vu]:n.SRC_COLOR,[Hc]:n.SRC_ALPHA,[Yu]:n.SRC_ALPHA_SATURATE,[qu]:n.DST_COLOR,[Wu]:n.DST_ALPHA,[Gu]:n.ONE_MINUS_SRC_COLOR,[Vc]:n.ONE_MINUS_SRC_ALPHA,[$u]:n.ONE_MINUS_DST_COLOR,[Xu]:n.ONE_MINUS_DST_ALPHA,[Ju]:n.CONSTANT_COLOR,[Zu]:n.ONE_MINUS_CONSTANT_COLOR,[Ku]:n.CONSTANT_ALPHA,[ju]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(k,he,ee,ue,ye,ie,Le,Ee,gt,at){if(k===ti){m===!0&&(ve(n.BLEND),m=!1);return}if(m===!1&&(Q(n.BLEND),m=!0),k!==Fu){if(k!==p||at!==P){if((M!==ts||w!==ts)&&(n.blendEquation(n.FUNC_ADD),M=ts,w=ts),at)switch(k){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oc:n.blendFunc(n.ONE,n.ONE);break;case Bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ue("WebGLState: Invalid blending: ",k);break}else switch(k){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bc:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",k);break}A=null,v=null,T=null,R=null,x.set(0,0,0),E=0,p=k,P=at}return}ye=ye||he,ie=ie||ee,Le=Le||ue,(he!==M||ye!==w)&&(n.blendEquationSeparate(rt[he],rt[ye]),M=he,w=ye),(ee!==A||ue!==v||ie!==T||Le!==R)&&(n.blendFuncSeparate(Oe[ee],Oe[ue],Oe[ie],Oe[Le]),A=ee,v=ue,T=ie,R=Le),(Ee.equals(x)===!1||gt!==E)&&(n.blendColor(Ee.r,Ee.g,Ee.b,gt),x.copy(Ee),E=gt),p=k,P=!1}function it(k,he){k.side===An?ve(n.CULL_FACE):Q(n.CULL_FACE);let ee=k.side===rn;he&&(ee=!ee),Ke(ee),k.blending===$s&&k.transparent===!1?Ze(ti):Ze(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ue=k.stencilWrite;l.setTest(ue),ue&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),on(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(k){_!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),_=k)}function St(k){k!==Du?(Q(n.CULL_FACE),k!==I&&(k===Uc?n.cullFace(n.BACK):k===Nu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),I=k}function Ot(k){k!==U&&(F&&n.lineWidth(k),U=k)}function on(k,he,ee){k?(Q(n.POLYGON_OFFSET_FILL),(D!==he||H!==ee)&&(D=he,H=ee,a.getReversed()&&(he=-he),n.polygonOffset(he,ee))):ve(n.POLYGON_OFFSET_FILL)}function Tt(k){k?Q(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Ct(k){k===void 0&&(k=n.TEXTURE0+Y-1),K!==k&&(n.activeTexture(k),K=k)}function O(k,he,ee){ee===void 0&&(K===null?ee=n.TEXTURE0+Y-1:ee=K);let ue=B[ee];ue===void 0&&(ue={type:void 0,texture:void 0},B[ee]=ue),(ue.type!==k||ue.texture!==he)&&(K!==ee&&(n.activeTexture(ee),K=ee),n.bindTexture(k,he||$[k]),ue.type=k,ue.texture=he)}function $t(){let k=B[K];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ut(){try{n.compressedTexImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function y(){try{n.texSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function z(){try{n.texSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ae(){try{n.texStorage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function oe(){try{n.texStorage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function Z(){try{n.texImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function te(){try{n.texImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function le(k){return d[k]!==void 0?d[k]:n.getParameter(k)}function Re(k,he){d[k]!==he&&(n.pixelStorei(k,he),d[k]=he)}function fe(k){ze.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ze.copy(k))}function ce(k){Ie.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ie.copy(k))}function Pe(k,he){let ee=o.get(he);ee===void 0&&(ee=new WeakMap,o.set(he,ee));let ue=ee.get(k);ue===void 0&&(ue=n.getUniformBlockIndex(he,k.name),ee.set(k,ue))}function De(k,he){let ue=o.get(he).get(k);c.get(he)!==ue&&(n.uniformBlockBinding(he,ue,k.__bindingPointIndex),c.set(he,ue))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},K=null,B={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,A=null,v=null,w=null,T=null,R=null,x=new Ge(0,0,0),E=0,P=!1,_=null,I=null,U=null,D=null,H=null,ze.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Q,disable:ve,bindFramebuffer:ke,drawBuffers:re,useProgram:He,setBlending:Ze,setMaterial:it,setFlipSided:Ke,setCullFace:St,setLineWidth:Ot,setPolygonOffset:on,setScissorTest:Tt,activeTexture:Ct,bindTexture:O,unbindTexture:$t,compressedTexImage2D:ut,compressedTexImage3D:C,texImage2D:Z,texImage3D:te,pixelStorei:Re,getParameter:le,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:ae,texStorage3D:oe,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:fe,viewport:ce,reset:Xe}}function ux(n,e,t,i,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Be,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,y){return g?new OffscreenCanvas(C,y):Er("canvas")}function m(C,y,z){let W=1,J=ut(C);if((J.width>z||J.height>z)&&(W=z/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ae=Math.floor(W*J.width),oe=Math.floor(W*J.height);h===void 0&&(h=S(ae,oe));let Z=y?S(ae,oe):h;return Z.width=ae,Z.height=oe,Z.getContext("2d").drawImage(C,0,0,ae,oe),Ne("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ae+"x"+oe+")."),Z}else return"data"in C&&Ne("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,y,z,W,J,ae=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;W&&(oe=e.get("EXT_texture_norm16"),oe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8),z===n.UNSIGNED_SHORT&&oe&&(Z=oe.R16_EXT),z===n.SHORT&&oe&&(Z=oe.R16_SNORM_EXT)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),y===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8),z===n.UNSIGNED_SHORT&&oe&&(Z=oe.RG16_EXT),z===n.SHORT&&oe&&(Z=oe.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),y===n.RGB&&(z===n.UNSIGNED_SHORT&&oe&&(Z=oe.RGB16_EXT),z===n.SHORT&&oe&&(Z=oe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),y===n.RGBA){let te=ae?Tr:je.getTransfer(J);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=te===lt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&oe&&(Z=oe.RGBA16_EXT),z===n.SHORT&&oe&&(Z=oe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(C,y){let z;return C?y===null||y===Vn||y===Js?z=n.DEPTH24_STENCIL8:y===Cn?z=n.DEPTH32F_STENCIL8:y===Ys&&(z=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vn||y===Js?z=n.DEPTH_COMPONENT24:y===Cn?z=n.DEPTH_COMPONENT32F:y===Ys&&(z=n.DEPTH_COMPONENT16),z}function T(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){let y=C.target;y.removeEventListener("dispose",R),E(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),_(y)}function E(C){let y=i.get(C);if(y.__webglInit===void 0)return;let z=C.source,W=f.get(z);if(W){let J=W[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(C),Object.keys(W).length===0&&f.delete(z)}i.remove(C)}function P(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let z=C.source,W=f.get(z);delete W[y.__cacheKey],a.memory.textures--}function _(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let J=0;J<y.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(y.__webglFramebuffer[W][J]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=C.textures;for(let W=0,J=z.length;W<J;W++){let ae=i.get(z[W]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(z[W])}i.remove(C)}let I=0;function U(){I=0}function D(){return I}function H(C){I=C}function Y(){let C=I;return C>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function F(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ne(C,y){let z=i.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let W=C.image;if(W===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function X(C,y){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ve(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function K(C,y){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ve(z,C,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function B(C,y){let z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){ke(z,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}let j={[Fs]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[uo]:n.MIRRORED_REPEAT},se={[Ht]:n.NEAREST,[td]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Wo]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},ze={[rd]:n.NEVER,[hd]:n.ALWAYS,[ad]:n.LESS,[Rl]:n.LEQUAL,[od]:n.EQUAL,[Pl]:n.GEQUAL,[ld]:n.GREATER,[cd]:n.NOTEQUAL};function Ie(C,y){if(y.type===Cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===Wo||y.magFilter===Jr||y.magFilter===Ui||y.minFilter===Wt||y.minFilter===Wo||y.minFilter===Jr||y.minFilter===Ui)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,j[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,j[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,j[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,se[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ze[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ht||y.minFilter!==Jr&&y.minFilter!==Ui||y.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function We(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));let W=y.source,J=f.get(W);J===void 0&&(J={},f.set(W,J));let ae=F(y);if(ae!==C.__cacheKey){J[ae]===void 0&&(J[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ae].usedTimes++;let oe=J[C.__cacheKey];oe!==void 0&&(J[C.__cacheKey].usedTimes--,oe.usedTimes===0&&P(y)),C.__cacheKey=ae,C.__webglTexture=J[ae].texture}return z}function $(C,y,z){return Math.floor(Math.floor(C/z)/y)}function Q(C,y,z,W){let ae=C.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{ae.sort((Re,fe)=>Re.start-fe.start);let oe=0;for(let Re=1;Re<ae.length;Re++){let fe=ae[oe],ce=ae[Re],Pe=fe.start+fe.count,De=$(ce.start,y.width,4),Xe=$(fe.start,y.width,4);ce.start<=Pe+1&&De===Xe&&$(ce.start+ce.count-1,y.width,4)===De?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++oe,ae[oe]=ce)}ae.length=oe+1;let Z=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Re=0,fe=ae.length;Re<fe;Re++){let ce=ae[Re],Pe=Math.floor(ce.start/4),De=Math.ceil(ce.count/4),Xe=Pe%y.width,k=Math.floor(Pe/y.width),he=De,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Xe,k,he,ee,z,W,y.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function ve(C,y,z){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);let J=We(C,y),ae=y.source;t.bindTexture(W,C.__webglTexture,n.TEXTURE0+z);let oe=i.get(ae);if(ae.version!==oe.__version||J===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ee=je.getPrimaries(je.workingColorSpace),ue=y.colorSpace===mi?null:je.getPrimaries(y.colorSpace),ye=y.colorSpace===mi||ee===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let te=m(y.image,!1,s.maxTextureSize);te=$t(y,te);let le=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),fe=v(y.internalFormat,le,Re,y.normalized,y.colorSpace,y.isVideoTexture);Ie(W,y);let ce,Pe=y.mipmaps,De=y.isVideoTexture!==!0,Xe=oe.__version===void 0||J===!0,k=ae.dataReady,he=T(y,te);if(y.isDepthTexture)fe=w(y.format===Oi,y.type),Xe&&(De?t.texStorage2D(n.TEXTURE_2D,1,fe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,fe,te.width,te.height,0,le,Re,null));else if(y.isDataTexture)if(Pe.length>0){De&&Xe&&t.texStorage2D(n.TEXTURE_2D,he,fe,Pe[0].width,Pe[0].height);for(let ee=0,ue=Pe.length;ee<ue;ee++)ce=Pe[ee],De?k&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Re,ce.data):t.texImage2D(n.TEXTURE_2D,ee,fe,ce.width,ce.height,0,le,Re,ce.data);y.generateMipmaps=!1}else De?(Xe&&t.texStorage2D(n.TEXTURE_2D,he,fe,te.width,te.height),k&&Q(y,te,le,Re)):t.texImage2D(n.TEXTURE_2D,0,fe,te.width,te.height,0,le,Re,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,fe,Pe[0].width,Pe[0].height,te.depth);for(let ee=0,ue=Pe.length;ee<ue;ee++)if(ce=Pe[ee],y.format!==Rn)if(le!==null)if(De){if(k)if(y.layerUpdates.size>0){let ye=ch(ce.width,ce.height,y.format,y.type);for(let ie of y.layerUpdates){let Le=ce.data.subarray(ie*ye/ce.data.BYTES_PER_ELEMENT,(ie+1)*ye/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ie,ce.width,ce.height,1,le,Le)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,fe,ce.width,ce.height,te.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,le,Re,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,fe,ce.width,ce.height,te.depth,0,le,Re,ce.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{De&&Xe&&t.texStorage2D(n.TEXTURE_2D,he,fe,Pe[0].width,Pe[0].height);for(let ee=0,ue=Pe.length;ee<ue;ee++)ce=Pe[ee],y.format!==Rn?le!==null?De?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,fe,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?k&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Re,ce.data):t.texImage2D(n.TEXTURE_2D,ee,fe,ce.width,ce.height,0,le,Re,ce.data)}else if(y.isDataArrayTexture)if(De){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,fe,te.width,te.height,te.depth),k)if(y.layerUpdates.size>0){let ee=ch(te.width,te.height,y.format,y.type);for(let ue of y.layerUpdates){let ye=te.data.subarray(ue*ee/te.data.BYTES_PER_ELEMENT,(ue+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,le,Re,ye)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,le,Re,te.data);else if(y.isData3DTexture)De?(Xe&&t.texStorage3D(n.TEXTURE_3D,he,fe,te.width,te.height,te.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,le,Re,te.data);else if(y.isFramebufferTexture){if(Xe)if(De)t.texStorage2D(n.TEXTURE_2D,he,fe,te.width,te.height);else{let ee=te.width,ue=te.height;for(let ye=0;ye<he;ye++)t.texImage2D(n.TEXTURE_2D,ye,fe,ee,ue,0,le,Re,null),ee>>=1,ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(y),ee.onpaint=ue=>{let ye=ue.changedElements;for(let ie of d)ye.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let ye=n.RGBA,ie=n.RGBA,Le=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ye,ie,Le,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&Xe){let ee=ut(Pe[0]);t.texStorage2D(n.TEXTURE_2D,he,fe,ee.width,ee.height)}for(let ee=0,ue=Pe.length;ee<ue;ee++)ce=Pe[ee],De?k&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,le,Re,ce):t.texImage2D(n.TEXTURE_2D,ee,fe,le,Re,ce);y.generateMipmaps=!1}else if(De){if(Xe){let ee=ut(te);t.texStorage2D(n.TEXTURE_2D,he,fe,ee.width,ee.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,fe,le,Re,te);p(y)&&M(W),oe.__version=ae.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ke(C,y,z){if(y.image.length!==6)return;let W=We(C,y),J=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let ae=i.get(J);if(J.version!==ae.__version||W===!0){t.activeTexture(n.TEXTURE0+z);let oe=je.getPrimaries(je.workingColorSpace),Z=y.colorSpace===mi?null:je.getPrimaries(y.colorSpace),te=y.colorSpace===mi||oe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let le=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!le&&!Re?fe[ie]=m(y.image[ie],!0,s.maxCubemapSize):fe[ie]=Re?y.image[ie].image:y.image[ie],fe[ie]=$t(y,fe[ie]);let ce=fe[0],Pe=r.convert(y.format,y.colorSpace),De=r.convert(y.type),Xe=v(y.internalFormat,Pe,De,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,he=ae.__version===void 0||W===!0,ee=J.dataReady,ue=T(y,ce);Ie(n.TEXTURE_CUBE_MAP,y);let ye;if(le){k&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Xe,ce.width,ce.height);for(let ie=0;ie<6;ie++){ye=fe[ie].mipmaps;for(let Le=0;Le<ye.length;Le++){let Ee=ye[Le];y.format!==Rn?Pe!==null?k?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ee.width,Ee.height,Pe,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Xe,Ee.width,Ee.height,0,Ee.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ee.width,Ee.height,Pe,De,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Xe,Ee.width,Ee.height,0,Pe,De,Ee.data)}}}else{if(ye=y.mipmaps,k&&he){ye.length>0&&ue++;let ie=ut(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Xe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){k?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Pe,De,fe[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Xe,fe[ie].width,fe[ie].height,0,Pe,De,fe[ie].data);for(let Le=0;Le<ye.length;Le++){let gt=ye[Le].image[ie].image;k?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,gt.width,gt.height,Pe,De,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Xe,gt.width,gt.height,0,Pe,De,gt.data)}}else{k?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,De,fe[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Xe,Pe,De,fe[ie]);for(let Le=0;Le<ye.length;Le++){let Ee=ye[Le];k?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Pe,De,Ee.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Xe,Pe,De,Ee.image[ie])}}}p(y)&&M(n.TEXTURE_CUBE_MAP),ae.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function re(C,y,z,W,J,ae){let oe=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),te=v(z.internalFormat,oe,Z,z.normalized,z.colorSpace),le=i.get(y),Re=i.get(z);if(Re.__renderTarget=y,!le.__hasExternalTextures){let fe=Math.max(1,y.width>>ae),ce=Math.max(1,y.height>>ae);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ae,te,fe,ce,y.depth,0,oe,Z,null):t.texImage2D(J,ae,te,fe,ce,0,oe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,Re.__webglTexture,0,Tt(y)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,Re.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let W=y.depthTexture,J=W&&W.isDepthTexture?W.type:null,ae=w(y.stencilBuffer,J),oe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ct(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt(y),ae,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt(y),ae,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ae,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,C)}else{let W=y.textures;for(let J=0;J<W.length;J++){let ae=W[J],oe=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),te=v(ae.internalFormat,oe,Z,ae.normalized,ae.colorSpace);Ct(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt(y),te,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt(y),te,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,te,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(C,y,z){let W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,y.depthTexture);let le=r.convert(y.depthTexture.format),Re=r.convert(y.depthTexture.type),fe;y.depthTexture.format===Kn?fe=n.DEPTH_COMPONENT24:y.depthTexture.format===Oi&&(fe=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,y.width,y.height,0,le,Re,null)}}else ne(y.depthTexture,0);let ae=J.__webglTexture,oe=Tt(y),Z=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,te=y.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Kn)Ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,ae,0);else if(y.depthTexture.format===Oi)Ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(C){let y=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=W}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)rt(y.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?rt(y.__webglFramebuffer[0],C,0):rt(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),He(y.__webglDepthbuffer[W],C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ae)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),He(y.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(C,y,z){let W=i.get(C);y!==void 0&&re(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Oe(C)}function it(C){let y=C.texture,z=i.get(C),W=i.get(y);C.addEventListener("dispose",x);let J=C.textures,ae=C.isWebGLCubeRenderTarget===!0,oe=J.length>1;if(oe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,a.memory.textures++),ae){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let te=0;te<y.mipmaps.length;te++)z.__webglFramebuffer[Z][te]=n.createFramebuffer()}else z.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)z.__webglFramebuffer[Z]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(oe)for(let Z=0,te=J.length;Z<te;Z++){let le=i.get(J[Z]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ct(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<J.length;Z++){let te=J[Z];z.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let le=r.convert(te.format,te.colorSpace),Re=r.convert(te.type),fe=v(te.internalFormat,le,Re,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),ce=Tt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,fe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),He(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)re(z.__webglFramebuffer[Z][te],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else re(z.__webglFramebuffer[Z],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Z=0,te=J.length;Z<te;Z++){let le=J[Z],Re=i.get(le),fe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Re.__webglTexture),Ie(fe,le),re(z.__webglFramebuffer,C,le,n.COLOR_ATTACHMENT0+Z,fe,0),p(le)&&M(fe)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),Ie(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)re(z.__webglFramebuffer[te],C,y,n.COLOR_ATTACHMENT0,Z,te);else re(z.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,Z,0);p(y)&&M(Z),t.unbindTexture()}C.depthBuffer&&Oe(C)}function Ke(C){let y=C.textures;for(let z=0,W=y.length;z<W;z++){let J=y[z];if(p(J)){let ae=A(C),oe=i.get(J).__webglTexture;t.bindTexture(ae,oe),M(ae),t.unbindTexture()}}}let St=[],Ot=[];function on(C){if(C.samples>0){if(Ct(C)===!1){let y=C.textures,z=C.width,W=C.height,J=n.COLOR_BUFFER_BIT,ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(C),Z=y.length>1;if(Z)for(let le=0;le<y.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<y.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Re=i.get(y[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,z,W,0,0,z,W,J,n.NEAREST),c===!0&&(St.length=0,Ot.length=0,St.push(n.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(St.push(ae),Ot.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let le=0;le<y.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Re=i.get(y[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Tt(C){return Math.min(s.maxSamples,C.samples)}function Ct(C){let y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(C){let y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function $t(C,y){let z=C.colorSpace,W=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==wr&&z!==mi&&(je.getTransfer(z)===lt?(W!==Rn||J!==un)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",z)),y}function ut(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(o.width=C.naturalWidth||C.width,o.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(o.width=C.displayWidth,o.height=C.displayHeight):(o.width=C.width,o.height=C.height),o}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dx(n,e){function t(i,s=mi){let r,a=je.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jc)return n.BYTE;if(i===Qc)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===Xo)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===nh)return n.ALPHA;if(i===ih)return n.RGB;if(i===Rn)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===Yo)return n.RED;if(i===Jo)return n.RED_INTEGER;if(i===Bi)return n.RG;if(i===Zo)return n.RG_INTEGER;if(i===Ko)return n.RGBA_INTEGER;if(i===Zr||i===Kr||i===jr||i===Qr)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===Qo||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===il||i===sl||i===rl||i===al||i===ea||i===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nl||i===il)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rl)return r.COMPRESSED_R11_EAC;if(i===al)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return r.COMPRESSED_RG11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===yl||i===xl||i===vl||i===bl||i===_l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ll)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_l)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===Ml||i===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sl)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tl||i===El||i===ta||i===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Or(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gn({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Dt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends jn{constructor(e,t){super();let i=this,s=null,r=1,a=null,l="local-floor",c=1,o=null,u=null,d=null,h=null,f=null,g=null,S=typeof XRWebGLBinding<"u",m=new Mh,p={},M=t.getContextAttributes(),A=null,v=null,w=[],T=[],R=new Be,x=null,E=null,P=new Kt;P.viewport=new Mt;let _=new Kt;_.viewport=new Mt;let I=[P,_],U=new Bo,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=w[$];return Q===void 0&&(Q=new zs,w[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=w[$];return Q===void 0&&(Q=new zs,w[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=w[$];return Q===void 0&&(Q=new zs,w[$]=Q),Q.getHandSpace()};function Y($){let Q=T.indexOf($.inputSource);if(Q===-1)return;let ve=w[Q];ve!==void 0&&(ve.update($.inputSource,$.frame,o||a),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",ne);for(let $=0;$<w.length;$++){let Q=T[$];Q!==null&&(T[$]=null,w[$].disconnect(Q))}D=null,H=null,m.reset();for(let $ in p)delete p[$];if(e.setRenderTarget(A),f=null,h=null,d=null,s=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function($){o=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",F),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ke=null,re=null;M.depth&&(re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?Oi:Kn,ke=M.stencil?Js:Vn);let He={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(He),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new cn(h.textureWidth,h.textureHeight,{format:Rn,type:un,depthTexture:new Pi(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new cn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne($){for(let Q=0;Q<$.removed.length;Q++){let ve=$.removed[Q],ke=T.indexOf(ve);ke>=0&&(T[ke]=null,w[ke].disconnect(ve))}for(let Q=0;Q<$.added.length;Q++){let ve=$.added[Q],ke=T.indexOf(ve);if(ke===-1){for(let He=0;He<w.length;He++)if(He>=T.length){T.push(ve),ke=He;break}else if(T[He]===null){T[He]=ve,ke=He;break}if(ke===-1)break}let re=w[ke];re&&re.connect(ve)}}let X=new L,K=new L;function B($,Q,ve){X.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);let ke=X.distanceTo(K),re=Q.projectionMatrix.elements,He=ve.projectionMatrix.elements,rt=re[14]/(re[10]-1),Oe=re[14]/(re[10]+1),Ze=(re[9]+1)/re[5],it=(re[9]-1)/re[5],Ke=(re[8]-1)/re[0],St=(He[8]+1)/He[0],Ot=rt*Ke,on=rt*St,Tt=ke/(-Ke+St),Ct=Tt*-Ke;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ct),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),re[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let O=rt+Tt,$t=Oe+Tt,ut=Ot-Ct,C=on+(ke-Ct),y=Ze*Oe/$t*O,z=it*Oe/$t*O;$.projectionMatrix.makePerspective(ut,C,y,z,O,$t),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function j($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,ve=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),U.near=_.near=P.near=Q,U.far=_.far=P.far=ve,(D!==U.near||H!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,H=U.far),U.layers.mask=$.layers.mask|6,P.layers.mask=U.layers.mask&-5,_.layers.mask=U.layers.mask&-3;let ke=$.parent,re=U.cameras;j(U,ke);for(let He=0;He<re.length;He++)j(re[He],ke);re.length===2?B(U,P,_):U.projectionMatrix.copy(P.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),se($,U,ke)};function se($,Q,ve){ve===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=po*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function($){return p[$]};let ze=null;function Ie($,Q){if(u=Q.getViewerPose(o||a),g=Q,u!==null){let ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ke=!1;ve.length!==U.cameras.length&&(U.cameras.length=0,ke=!0);for(let Oe=0;Oe<ve.length;Oe++){let Ze=ve[Oe],it=null;if(f!==null)it=f.getViewport(Ze);else{let St=d.getViewSubImage(h,Ze);it=St.viewport,Oe===0&&(e.setRenderTargetTextures(v,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(v))}let Ke=I[Oe];Ke===void 0&&(Ke=new Kt,Ke.layers.enable(Oe),Ke.viewport=new Mt,I[Oe]=Ke),Ke.matrix.fromArray(Ze.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ze.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(it.x,it.y,it.width,it.height),Oe===0&&(U.matrix.copy(Ke.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ke===!0&&U.cameras.push(Ke)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let Oe=d.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,s.renderState)}if(re&&re.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let Oe=0;Oe<ve.length;Oe++){let Ze=ve[Oe].camera;if(Ze){let it=p[Ze];it||(it=new Or,p[Ze]=it);let Ke=d.getCameraImage(Ze);it.sourceTexture=Ke}}}}for(let ve=0;ve<w.length;ve++){let ke=T[ve],re=w[ve];ke!==null&&re!==void 0&&re.update(ke,Q,o||a)}ze&&ze($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let We=new Hd;We.setAnimationLoop(Ie),this.setAnimationLoop=function($){ze=$},this.dispose=function(){}}},mx=new st,$d=new Ve;$d.set(-1,0,0,0,1,0,0,0,1);function gx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ah(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,M,A):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),A=M.envMap,v=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($d),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yx(n,e,t,i){let s={},r={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,w){let T=w.program;i.uniformBlockBinding(v,T)}function o(v,w){let T=s[v.id];T===void 0&&(m(v),T=u(v),s[v.id]=T,v.addEventListener("dispose",M));let R=w.program;i.updateUBOMapping(v,R);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let w=d();v.__bindingPointIndex=w;let T=n.createBuffer(),R=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function d(){for(let v=0;v<l;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let w=s[v.id],T=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,E=T.length;x<E;x++){let P=T[x];if(Array.isArray(P))for(let _=0,I=P.length;_<I;_++)f(P[_],x,_,R);else f(P,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,w,T,R){if(S(v,w,T,R)===!0){let x=v.__offset,E=v.value;if(Array.isArray(E)){let P=0;for(let _=0;_<E.length;_++){let I=E[_],U=p(I);g(I,v.__data,P),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function g(v,w,T){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,T)}function S(v,w,T,R){let x=v.value,E=w+"_"+T;if(R[E]===void 0)return typeof x=="number"||typeof x=="boolean"?R[E]=x:ArrayBuffer.isView(x)?R[E]=x.slice():R[E]=x.clone(),!0;{let P=R[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(v){let w=v.uniforms,T=0,R=16;for(let E=0,P=w.length;E<P;E++){let _=Array.isArray(w[E])?w[E]:[w[E]];for(let I=0,U=_.length;I<U;I++){let D=_[I],H=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,F=H.length;Y<F;Y++){let ne=H[Y],X=p(ne),K=T%R,B=K%X.boundary,j=K+B;T+=B,j!==0&&R-j<X.storage&&(T+=R-j),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=X.storage}}}let x=T%R;return x>0&&(T+=R-x),v.__size=T,v.__cache={},this}function p(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),w}function M(v){let w=v.target;w.removeEventListener("dispose",M);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:o,dispose:A}}var xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function vx(){return ni===null&&(ni=new Fr(xx,16,16,Bi,Gn),ni.name="DFG_LUT",ni.minFilter=Wt,ni.magFilter=Wt,ni.wrapS=Zn,ni.wrapT=Zn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Fl=class{constructor(e={}){let{canvas:t=ud(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let S=f,m=new Set([Ko,Zo,Jo]),p=new Set([un,Vn,Ys,Js,qo,$o]),M=new Uint32Array(4),A=new Int32Array(4),v=new L,w=null,T=null,R=[],x=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,_=!1,I=null,U=null,D=null,H=null;this._outputColorSpace=zt;let Y=0,F=0,ne=null,X=-1,K=null,B=new Mt,j=new Mt,se=null,ze=new Ge(0),Ie=0,We=t.width,$=t.height,Q=1,ve=null,ke=null,re=new Mt(0,0,We,$),He=new Mt(0,0,We,$),rt=!1,Oe=new Gs,Ze=!1,it=!1,Ke=new st,St=new L,Ot=new Mt,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Ct(){return ne===null?Q:1}let O=i;function $t(b,N){return t.getContext(b,N)}let ut,C,y,z,W,J,ae,oe,Z,te,le,Re,fe,ce,Pe,De,Xe,k,he,ee,ue,ye,ie;try{let b={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Fn,!1),O===null){let N="webgl2";if(O=$t(N,b),O===null)throw $t(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(b){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Fn,!1),Ue("WebGLRenderer: "+b.message),b}function Le(){ut=new E0(O),ut.init(),ue=new dx(O,ut),C=new g0(O,ut,e,ue),y=new hx(O,ut),C.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),U=O.createFramebuffer(),D=O.createFramebuffer(),H=O.createFramebuffer(),z=new R0(O),W=new Zy,J=new ux(O,ut,y,W,C,ue,z),ae=new T0(P),oe=new Ip(O),ye=new p0(O,oe),Z=new A0(O,oe,z,ye),te=new I0(O,Z,oe,ye,z),k=new P0(O,C,J),Pe=new y0(W),le=new Jy(P,ae,ut,C,ye,Pe),Re=new gx(P,W),fe=new jy,ce=new sx(ut),Xe=new f0(P,ae,y,te,g,c),De=new cx(P,te,C),ie=new yx(O,z,C,y),he=new m0(O,ut,z),ee=new C0(O,ut,z),z.programs=le.programs,P.capabilities=C,P.extensions=ut,P.properties=W,P.renderLists=fe,P.shadowMap=De,P.state=y,P.info=z}S!==un&&(E=new D0(S,t.width,t.height,l,s,r));let Ee=new wh(P,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=ut.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ut.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(We,$,!1))},this.getSize=function(b){return b.set(We,$)},this.setSize=function(b,N,q=!0){if(Ee.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}We=b,$=N,t.width=Math.floor(b*Q),t.height=Math.floor(N*Q),q===!0&&(t.style.width=b+"px",t.style.height=N+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(We*Q,$*Q).floor()},this.setDrawingBufferSize=function(b,N,q){We=b,$=N,Q=q,t.width=Math.floor(b*q),t.height=Math.floor(N*q),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(S===un){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,N,q,V){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,N,q,V),y.viewport(B.copy(re).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(He)},this.setScissor=function(b,N,q,V){b.isVector4?He.set(b.x,b.y,b.z,b.w):He.set(b,N,q,V),y.scissor(j.copy(He).multiplyScalar(Q).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(b){y.setScissorTest(rt=b)},this.setOpaqueSort=function(b){ve=b},this.setTransparentSort=function(b){ke=b},this.getClearColor=function(b){return b.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,q=!0){let V=0;if(b){let G=!1;if(ne!==null){let ge=ne.texture.format;G=m.has(ge)}if(G){let ge=ne.texture.type,Me=p.has(ge),me=Xe.getClearColor(),we=Xe.getClearAlpha(),Ce=me.r,qe=me.g,Je=me.b;Me?(M[0]=Ce,M[1]=qe,M[2]=Je,M[3]=we,O.clearBufferuiv(O.COLOR,0,M)):(A[0]=Ce,A[1]=qe,A[2]=Je,A[3]=we,O.clearBufferiv(O.COLOR,0,A))}else V|=O.COLOR_BUFFER_BIT}N&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Fn,!1),Xe.dispose(),fe.dispose(),ce.dispose(),W.dispose(),ae.dispose(),te.dispose(),ye.dispose(),ie.dispose(),le.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",$h),Ee.removeEventListener("sessionend",Yh),qi.stop()};function gt(b){b.preventDefault(),Ar("WebGLRenderer: Context Lost."),_=!0}function at(){Ar("WebGLRenderer: Context Restored."),_=!1;let b=z.autoReset,N=De.enabled,q=De.autoUpdate,V=De.needsUpdate,G=De.type;Le(),z.autoReset=b,De.enabled=N,De.autoUpdate=q,De.needsUpdate=V,De.type=G}function Fn(b){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xn(b){let N=b.target;N.removeEventListener("dispose",Xn),Vf(N)}function Vf(b){Gf(b),W.remove(b)}function Gf(b){let N=W.get(b).programs;N!==void 0&&(N.forEach(function(q){le.releaseProgram(q)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,q,V,G,ge){N===null&&(N=on);let Me=G.isMesh&&G.matrixWorld.determinantAffine()<0,me=qf(b,N,q,V,G);y.setMaterial(V,Me);let we=q.index,Ce=1;if(V.wireframe===!0){if(we=Z.getWireframeAttribute(q),we===void 0)return;Ce=2}let qe=q.drawRange,Je=q.attributes.position,Te=qe.start*Ce,ot=(qe.start+qe.count)*Ce;ge!==null&&(Te=Math.max(Te,ge.start*Ce),ot=Math.min(ot,(ge.start+ge.count)*Ce)),we!==null?(Te=Math.max(Te,0),ot=Math.min(ot,we.count)):Je!=null&&(Te=Math.max(Te,0),ot=Math.min(ot,Je.count));let Rt=ot-Te;if(Rt<0||Rt===1/0)return;ye.setup(G,V,me,q,we);let bt,mt=he;if(we!==null&&(bt=oe.get(we),mt=ee,mt.setIndex(bt)),G.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*Ct()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if(G.isLine){let Yt=V.linewidth;Yt===void 0&&(Yt=1),y.setLineWidth(Yt*Ct()),G.isLineSegments?mt.setMode(O.LINES):G.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else G.isPoints?mt.setMode(O.POINTS):G.isSprite&&mt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Yt=G._multiDrawStarts,Se=G._multiDrawCounts,tn=G._multiDrawCount,et=we?oe.get(we).bytesPerElement:1,wn=W.get(V).currentProgram.getUniforms();for(let qn=0;qn<tn;qn++)wn.setValue(O,"_gl_DrawID",qn),mt.render(Yt[qn]/et,Se[qn])}else if(G.isInstancedMesh)mt.renderInstances(Te,Rt,G.count);else if(q.isInstancedBufferGeometry){let Yt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Se=Math.min(q.instanceCount,Yt);mt.renderInstances(Te,Rt,Se)}else mt.render(Te,Rt)};function qh(b,N,q,V){I!==null&&b.isNodeMaterial&&I.setObject(V,b),Ze===!0&&Pe.setState(b,q,!1),b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,Ea(b,N,V),b.side=Fi,b.needsUpdate=!0,Ea(b,N,V),b.side=An):Ea(b,N,V)}this.compile=function(b,N,q=null){q===null&&(q=b),I!==null&&I.renderStart(b,N,q),T=ce.get(q),T.init(N),x.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),it=this.localClippingEnabled,Ze=Pe.init(this.clippingPlanes,it),Ze===!0&&Pe.setGlobalState(this.clippingPlanes,N),I!==null&&De.render(T.state.shadowsArray,q,N);let V=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let me=ge[Me];qh(me,q,N,G),V.add(me)}else qh(ge,q,N,G),V.add(ge)}),T=x.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(b,N,q=null){let V=this.compile(b,N,q);return new Promise(G=>{function ge(){if(V.forEach(function(Me){let we=W.get(Me).currentProgram;(we===void 0||we.isReady())&&V.delete(Me)}),V.size===0){G(b);return}setTimeout(ge,10)}ut.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let nc=null;function Wf(b){nc&&nc(b)}function $h(){qi.stop()}function Yh(){qi.start()}let qi=new Hd;qi.setAnimationLoop(Wf),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(b){nc=b,Ee.setAnimationLoop(b),b===null?qi.stop():qi.start()},Ee.addEventListener("sessionstart",$h),Ee.addEventListener("sessionend",Yh),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;I!==null&&I.renderStart(b,N);let q=Ee.enabled===!0&&Ee.isPresenting===!0,V=E!==null&&(ne===null||q)&&E.begin(P,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(N),N=Ee.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,N,ne),T=ce.get(b,x.length),T.init(N),T.state.textureUnits=J.getTextureUnits(),x.push(T),Ke.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Oe.setFromProjectionMatrix(Ke,Bn,N.reversedDepth),it=this.localClippingEnabled,Ze=Pe.init(this.clippingPlanes,it),w=fe.get(b,R.length),w.init(),R.push(w),Ee.enabled===!0&&Ee.isPresenting===!0){let Me=P.xr.getDepthSensingMesh();Me!==null&&ic(Me,N,-1/0,P.sortObjects)}ic(b,N,0,P.sortObjects),w.finish(),I!==null&&I.updateLights(T.state.lightsArray),P.sortObjects===!0&&w.sort(ve,ke),Tt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Tt&&Xe.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Pe.beginShadows();let G=T.state.shadowsArray;if(De.render(G,b,N),Ze===!0&&Pe.endShadows(),(V&&E.hasRenderPass())===!1){let Me=w.opaque,me=w.transmissive;if(T.setupLights(),N.isArrayCamera){let we=N.cameras;if(me.length>0)for(let Ce=0,qe=we.length;Ce<qe;Ce++){let Je=we[Ce];Zh(Me,me,b,Je)}Tt&&Xe.render(b);for(let Ce=0,qe=we.length;Ce<qe;Ce++){let Je=we[Ce];Jh(w,b,Je,Je.viewport)}}else me.length>0&&Zh(Me,me,b,N),Tt&&Xe.render(b),Jh(w,b,N)}ne!==null&&F===0&&(J.updateMultisampleRenderTarget(ne),J.updateRenderTargetMipmap(ne)),V&&E.end(P),b.isScene===!0&&b.onAfterRender(P,b,N),ye.resetDefaultState(),X=-1,K=null,x.pop(),x.length>0?(T=x[x.length-1],J.setTextureUnits(T.state.textureUnits),Ze===!0&&Pe.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,I!==null&&I.renderEnd()};function ic(b,N,q,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Oe)){V&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ke);let Me=te.update(b),me=b.material;me.visible&&w.push(b,Me,me,q,Ot.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Oe))){let Me=te.update(b),me=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ot.copy(Me.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(Ke)),Array.isArray(me)){let we=Me.groups;for(let Ce=0,qe=we.length;Ce<qe;Ce++){let Je=we[Ce],Te=me[Je.materialIndex];Te&&Te.visible&&w.push(b,Me,Te,q,Ot.z,Je,N)}}else me.visible&&w.push(b,Me,me,q,Ot.z,null,N)}}let ge=b.children;for(let Me=0,me=ge.length;Me<me;Me++)ic(ge[Me],N,q,V)}function Jh(b,N,q,V){let{opaque:G,transmissive:ge,transparent:Me}=b;T.setupLightsView(q),Ze===!0&&Pe.setGlobalState(P.clippingPlanes,q),V&&y.viewport(B.copy(V)),G.length>0&&Ta(G,N,q),ge.length>0&&Ta(ge,N,q),Me.length>0&&Ta(Me,N,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Zh(b,N,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Te=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new cn(1,1,{generateMipmaps:!0,type:Te?Gn:un,minFilter:Ui,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let ge=T.state.transmissionRenderTarget[V.id],Me=V.viewport||B;ge.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);let me=P.getRenderTarget(),we=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(ze),Ie=P.getClearAlpha(),Ie<1&&P.setClearColor(16777215,.5),P.clear(),Tt&&Xe.render(q);let qe=P.toneMapping;P.toneMapping=Hn;let Je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Ze===!0&&Pe.setGlobalState(P.clippingPlanes,V),Ta(b,q,V),J.updateMultisampleRenderTarget(ge),J.updateRenderTargetMipmap(ge),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ot=0,Rt=N.length;ot<Rt;ot++){let bt=N[ot],{object:mt,geometry:Yt,material:Se,group:tn}=bt;if(Se.side===An&&mt.layers.test(V.layers)){let et=Se.side;Se.side=rn,Se.needsUpdate=!0,Kh(mt,q,V,Yt,Se,tn),Se.side=et,Se.needsUpdate=!0,Te=!0}}Te===!0&&(J.updateMultisampleRenderTarget(ge),J.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,we,Ce),P.setClearColor(ze,Ie),Je!==void 0&&(V.viewport=Je),P.toneMapping=qe}function Ta(b,N,q){let V=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ge=b.length;G<ge;G++){let Me=b[G],{object:me,geometry:we,group:Ce}=Me,qe=Me.material;qe.allowOverride===!0&&V!==null&&(qe=V),me.layers.test(q.layers)&&Kh(me,N,q,we,qe,Ce)}}function Kh(b,N,q,V,G,ge){I!==null&&G.isNodeMaterial&&I.setObject(b,G),b.onBeforeRender(P,N,q,V,G,ge),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(P,N,q,V,b,ge),G.transparent===!0&&G.side===An&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,P.renderBufferDirect(q,N,V,G,b,ge),G.side=Fi,G.needsUpdate=!0,P.renderBufferDirect(q,N,V,G,b,ge),G.side=An):P.renderBufferDirect(q,N,V,G,b,ge),b.onAfterRender(P,N,q,V,G,ge)}function Ea(b,N,q){N.isScene!==!0&&(N=on);let V=W.get(b),G=T.state.lights,ge=T.state.shadowsArray,Me=G.state.version,me=le.getParameters(b,G.state,ge,N,q,T.state.lightProbeGridArray),we=le.getProgramCacheKey(me),Ce=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=ae.get(b.envMap||V.environment,qe),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",Xn),Ce=new Map,V.programs=Ce);let Je=Ce.get(we);if(Je!==void 0){if(V.currentProgram===Je&&V.lightsStateVersion===Me)return Qh(b,me),Je}else me.uniforms=le.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,q,me),b.onBeforeCompile(me,P),Je=le.acquireProgram(me,we),Ce.set(we,Je),V.uniforms=me.uniforms;let Te=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=Pe.uniform),Qh(b,me),V.needsLights=Yf(b),V.lightsStateVersion=Me,V.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=Je,V.uniformsList=null,Je}function jh(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=js.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Qh(b,N){let q=W.get(b);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function Xf(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let q=0,V=b.length;q<V;q++){let G=b[q];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function qf(b,N,q,V,G){N.isScene!==!0&&(N=on),J.resetTextureUnits();let ge=N.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,me=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:je.workingColorSpace,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ce=ae.get(V.envMap||Me,we),qe=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Je=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,Rt=!!q.morphAttributes.color,bt=Hn;V.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(bt=P.toneMapping);let mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Yt=mt!==void 0?mt.length:0,Se=W.get(V),tn=T.state.lights;if(Ze===!0&&(it===!0||b!==K)){let yt=b===K&&V.id===X;Pe.setState(V,b,yt)}let et=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==tn.state.version||Se.outputColorSpace!==me||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==Ce||V.fog===!0&&Se.fog!==ge||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Pe.numPlanes||Se.numIntersection!==Pe.numIntersection)||Se.vertexAlphas!==qe||Se.vertexTangents!==Je||Se.morphTargets!==Te||Se.morphNormals!==ot||Se.morphColors!==Rt||Se.toneMapping!==bt||Se.morphTargetsCount!==Yt||!!Se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Se.__version=V.version);let wn=Se.currentProgram;et===!0&&(wn=Ea(V,N,G),I&&V.isNodeMaterial&&I.onUpdateProgram(V,wn,Se));let qn=!1,vi=!1,fs=!1,dt=wn.getUniforms(),At=Se.uniforms;if(y.useProgram(wn.program)&&(qn=!0,vi=!0,fs=!0),V.id!==X&&(X=V.id,vi=!0),Se.needsLights){let yt=Xf(T.state.lightProbeGridArray,G);Se.lightProbeGrid!==yt&&(Se.lightProbeGrid=yt,vi=!0)}if(qn||K!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(O,"projectionMatrix",b.projectionMatrix),dt.setValue(O,"viewMatrix",b.matrixWorldInverse);let _i=dt.map.cameraPosition;_i!==void 0&&_i.setValue(O,St.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&dt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,vi=!0,fs=!0)}if(Se.needsLights&&(tn.state.sunShadowMap.length>0&&dt.setValue(O,"sunShadowMap",tn.state.sunShadowMap,J),tn.state.directionalShadowMap.length>0&&dt.setValue(O,"directionalShadowMap",tn.state.directionalShadowMap,J),tn.state.spotShadowMap.length>0&&dt.setValue(O,"spotShadowMap",tn.state.spotShadowMap,J),tn.state.pointShadowMap.length>0&&dt.setValue(O,"pointShadowMap",tn.state.pointShadowMap,J)),G.isSkinnedMesh){dt.setOptional(O,G,"bindMatrix"),dt.setOptional(O,G,"bindMatrixInverse");let yt=G.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),dt.setValue(O,"boneTexture",yt.boneTexture,J))}G.isBatchedMesh&&(dt.setOptional(O,G,"batchingTexture"),dt.setValue(O,"batchingTexture",G._matricesTexture,J),dt.setOptional(O,G,"batchingIdTexture"),dt.setValue(O,"batchingIdTexture",G._indirectTexture,J),dt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(O,"batchingColorTexture",G._colorsTexture,J));let bi=q.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&k.update(G,q,wn),(vi||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,dt.setValue(O,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(At.envMapIntensity.value=N.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=vx()),vi){if(dt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Se.needsLights&&$f(At,fs),ge&&V.fog===!0&&Re.refreshFogUniforms(At,ge),Re.refreshMaterialUniforms(At,V,Q,$,T.state.transmissionRenderTarget[b.id]),Se.needsLights&&Se.lightProbeGrid){let yt=Se.lightProbeGrid;At.probesSH.value=yt.texture,At.probesMin.value.copy(yt.boundingBox.min),At.probesMax.value.copy(yt.boundingBox.max),At.probesResolution.value.copy(yt.resolution)}js.upload(O,jh(Se),At,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(js.upload(O,jh(Se),At,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(O,"center",G.center),dt.setValue(O,"modelViewMatrix",G.modelViewMatrix),dt.setValue(O,"normalMatrix",G.normalMatrix),dt.setValue(O,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let yt=V.uniformsGroups;for(let _i=0,ps=yt.length;_i<ps;_i++){let tu=yt[_i];ie.update(tu,wn),ie.bind(tu,wn)}}return wn}function $f(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Yf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,N,q){let V=W.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=N,W.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let q=W.get(b);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,q=0){ne=b,Y=N,F=q;let V=null,G=!1,ge=!1;if(b){let me=W.get(b);if(me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),B.copy(b.viewport),j.copy(b.scissor),se=b.scissorTest,y.viewport(B),y.scissor(j),y.setScissorTest(se),X=-1;return}else if(me.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(me.__hasExternalTextures)J.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let qe=b.depthTexture;if(me.__boundDepthTexture!==qe){if(qe!==null&&W.has(qe)&&(b.width!==qe.image.width||b.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ge=!0);let Ce=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?V=Ce[N][q]:V=Ce[N],G=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?V=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?V=Ce[q]:V=Ce,B.copy(b.viewport),j.copy(b.scissor),se=b.scissorTest}else B.copy(re).multiplyScalar(Q).floor(),j.copy(He).multiplyScalar(Q).floor(),se=rt;if(q!==0&&(V=U),y.bindFramebuffer(O.FRAMEBUFFER,V)&&y.drawBuffers(b,V),y.viewport(B),y.scissor(j),y.setScissorTest(se),G){let me=W.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,q)}else if(ge){let me=N;for(let we=0;we<b.textures.length;we++){let Ce=W.get(b.textures[we]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+we,Ce.__webglTexture,q,me)}}else if(b!==null&&q!==0){let me=W.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,q)}X=-1};function eu(b){let N=W.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=C.textureFormatReadable(b.format),N.__typeReadable=C.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,q,V,G,ge,Me,me=0){if(!(b&&b.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){y.bindFramebuffer(O.FRAMEBUFFER,we);try{let Ce=b.textures[me],qe=Ce.format,Je=Ce.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Te=eu(Ce);if(Te.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&q>=0&&q<=b.height-G&&O.readPixels(N,q,V,G,ue.convert(qe),ue.convert(Je),ge)}finally{let Ce=ne!==null?W.get(ne).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,N,q,V,G,ge,Me,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(N>=0&&N<=b.width-V&&q>=0&&q<=b.height-G){y.bindFramebuffer(O.FRAMEBUFFER,we);let Ce=b.textures[me],qe=Ce.format,Je=Ce.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Te=eu(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(N,q,V,G,ue.convert(qe),ue.convert(Je),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Rt=ne!==null?W.get(ne).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Rt);let bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await fd(O,bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ot),O.deleteSync(bt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,q=0){let V=Math.pow(2,-q),G=Math.floor(b.image.width*V),ge=Math.floor(b.image.height*V),Me=N!==null?N.x:0,me=N!==null?N.y:0;J.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Me,me,G,ge),y.unbindTexture()},this.copyTextureToTexture=function(b,N,q=null,V=null,G=0,ge=0){let Me,me,we,Ce,qe,Je,Te,ot,Rt,bt=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(q!==null)Me=q.max.x-q.min.x,me=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,qe=q.min.y,Je=q.isBox3?q.min.z:0;else{let At=Math.pow(2,-G);Me=Math.floor(bt.width*At),me=Math.floor(bt.height*At),b.isDataArrayTexture?we=bt.depth:b.isData3DTexture?we=Math.floor(bt.depth*At):we=1,Ce=0,qe=0,Je=0}V!==null?(Te=V.x,ot=V.y,Rt=V.z):(Te=0,ot=0,Rt=0);let mt=ue.convert(N.format),Yt=ue.convert(N.type),Se;N.isData3DTexture?(J.setTexture3D(N,0),Se=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Se=O.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Se=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let tn=y.getParameter(O.UNPACK_ROW_LENGTH),et=y.getParameter(O.UNPACK_IMAGE_HEIGHT),wn=y.getParameter(O.UNPACK_SKIP_PIXELS),qn=y.getParameter(O.UNPACK_SKIP_ROWS),vi=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,bt.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),y.pixelStorei(O.UNPACK_SKIP_ROWS,qe),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Je);let fs=b.isDataArrayTexture||b.isData3DTexture,dt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let At=W.get(b),bi=W.get(N),yt=W.get(At.__renderTarget),_i=W.get(bi.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,yt.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let ps=0;ps<we;ps++)fs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(b).__webglTexture,G,Je+ps),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(N).__webglTexture,ge,Rt+ps)),O.blitFramebuffer(Ce,qe,Me,me,Te,ot,Me,me,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||W.has(b)){let At=W.get(b),bi=W.get(N);y.bindFramebuffer(O.READ_FRAMEBUFFER,D),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let yt=0;yt<we;yt++)fs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,G,Je+yt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,G),dt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bi.__webglTexture,ge,Rt+yt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bi.__webglTexture,ge),G!==0?O.blitFramebuffer(Ce,qe,Me,me,Te,ot,Me,me,O.COLOR_BUFFER_BIT,O.NEAREST):dt?O.copyTexSubImage3D(Se,ge,Te,ot,Rt+yt,Ce,qe,Me,me):O.copyTexSubImage2D(Se,ge,Te,ot,Ce,qe,Me,me);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Se,ge,Te,ot,Rt,Me,me,we,mt,Yt,bt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Se,ge,Te,ot,Rt,Me,me,we,mt,bt.data):O.texSubImage3D(Se,ge,Te,ot,Rt,Me,me,we,mt,Yt,bt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Te,ot,Me,me,mt,Yt,bt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Te,ot,bt.width,bt.height,mt,bt.data):O.texSubImage2D(O.TEXTURE_2D,ge,Te,ot,Me,me,mt,Yt,bt);y.pixelStorei(O.UNPACK_ROW_LENGTH,tn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),y.pixelStorei(O.UNPACK_SKIP_PIXELS,wn),y.pixelStorei(O.UNPACK_SKIP_ROWS,qn),y.pixelStorei(O.UNPACK_SKIP_IMAGES,vi),ge===0&&N.generateMipmaps&&O.generateMipmap(Se),y.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){Y=0,F=0,ne=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var bx=[{name:"Morning Arrival",len:30,kind:"arrive",tint:[255,200,140,.16]},{name:"Period 1",len:60,kind:"class",swap:!1,tint:[255,255,255,0]},{name:"Lunch",len:30,kind:"lunch",tint:[255,236,170,.12]},{name:"Period 2",len:60,kind:"class",swap:!0,tint:[255,235,215,.07]},{name:"Dismissal",len:30,kind:"dismiss",tint:[255,130,80,.24]}],Wn=(()=>{let n=0;return bx.map(e=>{let t={...e,start:n};return n+=e.len,t})})(),Eh=Wn.reduce((n,e)=>n+e.len,0),_x=7*60+30,Yd=n=>{for(let e=Wn.length-1;e>=0;e--)if(n>=Wn[e].start)return e;return 0},Ol=n=>{let e=_x+Math.floor(n),t=Math.floor(e/60)%24,i=e%60;return`${(t+11)%12+1}:${String(i).padStart(2,"0")} ${t<12?"AM":"PM"}`},zi=(n,e)=>n+Math.random()*(e-n),Ah=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n};function er(n,e,t,i,s){let r=n.length,a=n[0].length,l=(f,g)=>f>=0&&g>=0&&f<a&&g<r&&n[g][f]===".";if(e===i&&t===s||!l(i,s))return[];let c=(f,g)=>g*a+f,o=new Map([[c(e,t),0]]),u=new Map,d=[{x:e,y:t,f:0}],h=new Set;for(;d.length;){let f=0;for(let m=1;m<d.length;m++)d[m].f<d[f].f&&(f=m);let g=d.splice(f,1)[0],S=c(g.x,g.y);if(!h.has(S)){if(h.add(S),g.x===i&&g.y===s){let m=[],p=S;for(;p!==c(e,t);)m.push({x:p%a,y:Math.floor(p/a)}),p=u.get(p);return m.reverse()}for(let[m,p]of[[1,0],[-1,0],[0,1],[0,-1]]){let M=g.x+m,A=g.y+p;if(!l(M,A))continue;let v=c(M,A),w=o.get(S)+1;o.has(v)&&o.get(v)<=w||(o.set(v,w),u.set(v,S),d.push({x:M,y:A,f:w+Math.abs(M-i)+Math.abs(A-s)}))}}}return[]}var ra="#6b4a4f";function an(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function xe(n,e,t=1.4){n.fillStyle=e,n.fill(),t&&(n.lineWidth=t,n.strokeStyle=ra,n.lineJoin="round",n.stroke())}function Pn(n,e,t,i,s,r,a){n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.strokeStyle=ra,n.lineWidth=r+2.2,n.stroke(),n.strokeStyle=a,n.lineWidth=r,n.stroke()}var Sx=["#5b6b8c","#7a6a58","#4f5d75","#8a5f6a","#5f7a68"];function Et(n,e){if(!n||n[0]!=="#"||n.length<7)return n;let t=parseInt(n.slice(1,7),16),i=e>0?0:255,s=Math.abs(e);return"#"+[t>>16&255,t>>8&255,t&255].map(r=>Math.round(r+(i-r)*s).toString(16).padStart(2,"0")).join("")}function Mx(n,e,t,i,s){n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.7,t-i*1.2,e,t-i*.35),n.bezierCurveTo(e+i*.7,t-i*1.2,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()}function wx(n,e,t,i,s){n.fillStyle=s,n.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,l=r&1?i*.45:i;n.lineTo(e+Math.cos(a)*l,t+Math.sin(a)*l)}n.closePath(),n.fill()}function tr(n,e,t,i,s){n.save(),n.translate(Math.round(e*2)/2,Math.round(t*2)/2);let r=i.moving,a=r?Math.sin(i.walk):0,l=i.dir,c=l==="left"||l==="right",o=l==="left"?-1:1,u=l==="up",d=i.sitting,h=i.age==="adult",f=i.top,g=i.bottom||"pants",S=(i.headSize||1)*1,m=(i.build==="slim"?.9:i.build==="sturdy"?1.12:1)*(h?1.12:1),p=h?1.28:1;n.fillStyle="rgba(70,45,55,.24)",n.beginPath(),n.ellipse(0,1,10*m,3.6,0,0,7),n.fill(),d&&n.translate(0,8),n.translate(0,r?-Math.abs(Math.cos(i.walk))*1.8:Math.sin(s*2+i.id)*.35),h&&n.scale(1,p);let M=i.pants||Sx[i.id%5],A=i.pack||["#f28f7e","#4f91c7","#eab94e","#88b89a","#b8a8da"][i.id%5],v=i.shoes||"#fbf6ee",w=i.packStyle||"pack",T=f==="tank"?i.skin:i.shirt,R=i.shirt2||"#fff6ea";d||[-1,1].forEach(B=>{let j=r?Math.max(0,B*a)*2.6:0,se=c?0:B*3.2*m,ze=c?B*a*4.2:B*3.2*m;g==="shorts"?(Pn(n,se,-9,ze,-2-j,3.4,i.skin),Pn(n,se,-9,se+(ze-se)*.38,-6-j*.38,3.9,M)):g==="skirt"?Pn(n,se,-9,ze,-2-j,3.2,i.skin):Pn(n,se,-9,ze,-2-j,g==="joggers"?4.2:3.6,M);let Ie=ze+(c?o*1.2:0),We=-.6-j;i.shoeStyle==="boot"?(an(n,Ie-2.6,We-3.6,5.2,4.6,1.6),xe(n,v,1.1),n.beginPath(),n.ellipse(Ie+(c?o*1.2:0),We+.6,3.6,1.7,0,0,7),xe(n,Et(v,.25),1.1)):i.shoeStyle==="sandal"?(n.beginPath(),n.ellipse(Ie,We,3.4,1.7,0,0,7),xe(n,i.skin,1.1),n.strokeStyle=v,n.lineWidth=1.2,n.beginPath(),n.moveTo(Ie-2.2,We-.3),n.lineTo(Ie+2.2,We-.3),n.stroke()):(n.beginPath(),n.ellipse(Ie,We,3.4,1.9,0,0,7),xe(n,v,1.1),i.shoeStyle==="sneaker"&&(n.fillStyle="rgba(255,255,255,.55)",n.fillRect(Ie-3,We+.5,6,.7)))}),g==="skirt"&&!d&&(n.beginPath(),n.moveTo(-6.8*m,-12),n.lineTo(6.8*m,-12),n.lineTo(9.6*m,-5.6),n.lineTo(-9.6*m,-5.6),n.closePath(),xe(n,M,1.3),n.fillStyle="rgba(255,255,255,.22)",n.fillRect(-8.2*m,-7.4,16.4*m,1));let x=(B,j)=>{let se=c?B*a*3.5:B*8.2,ze=-9.5-(r?-B*a*1.5:0),Ie=i.arms&&(B>0?i.arms.R:i.arms.L);Ie&&(se=c?o*Math.abs(Ie[0])*.9:Ie[0],ze=Ie[1]),Pn(n,c?0:B*6.6*m,-17,se,ze,3.2,T),n.beginPath(),n.arc(se,ze+.6,1.9,0,7),xe(n,i.skin,1)};c&&x(-o*-1,!1),c&&w==="pack"?(an(n,-o*9.5,-19,7,10,3),xe(n,A,1.2)):c&&w==="mini"&&(an(n,-o*8,-16,5,6.5,2.4),xe(n,A,1.1)),f==="hoodie"&&(n.beginPath(),n.ellipse(0,-19.6,6.4*m,3.2,0,0,7),xe(n,Et(i.shirt,.14),1.2));let E=()=>{f==="dress"?(n.beginPath(),n.moveTo(-6.4*m,-19.5),n.quadraticCurveTo(0,-21,6.4*m,-19.5),n.lineTo(7*m,-13),n.lineTo(9.6*m,-6),n.quadraticCurveTo(0,-4.4,-9.6*m,-6),n.lineTo(-7*m,-13),n.closePath()):f==="tank"?an(n,-5.6*m,-19.5,11.2*m,11.5,4):an(n,-6.6*m,-19.5,13.2*m,11.5,4.5)},P=f==="overalls"||f==="vest"?R:i.shirt;if(E(),xe(n,P,1.4),i.pattern&&i.pattern!=="solid"&&f!=="overalls"&&f!=="vest"){let B=i.shirt2||Et(i.shirt,.3);if(n.save(),E(),n.clip(),i.pattern==="stripes")for(let j=-20;j<-4;j+=3.6)n.fillStyle=B,n.fillRect(-11,j,22,1.7);else if(i.pattern==="dots")for(let j=-19;j<-4;j+=3.2)for(let se=-9+(j*3&1)*1.6;se<10;se+=3.2)n.fillStyle=B,n.beginPath(),n.arc(se,j,.85,0,7),n.fill();else if(i.pattern==="plaid"){n.strokeStyle=B,n.globalAlpha=.75,n.lineWidth=1;for(let j=-19;j<-4;j+=3.6)n.beginPath(),n.moveTo(-11,j),n.lineTo(11,j),n.stroke();for(let j=-9;j<10;j+=3.6)n.beginPath(),n.moveTo(j,-21),n.lineTo(j,-4),n.stroke();n.globalAlpha=1}else if(i.pattern==="hearts")for(let j=-17;j<-5;j+=4.2)for(let se=-7+(j*2&1)*2;se<8;se+=4.4)Mx(n,se,j,1.1,B);else if(i.pattern==="stars")for(let j=-17;j<-5;j+=4.2)for(let se=-7+(j*2&1)*2;se<8;se+=4.4)wx(n,se,j,1.4,B);n.restore(),E(),n.lineWidth=1.4,n.strokeStyle=ra,n.stroke()}if(n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.ellipse(-2.4,-16.5,2.4,3.4,0,0,7),n.fill(),f)u||(f==="hoodie"?(an(n,-3.8,-14,7.6,3.6,1.6),n.lineWidth=1,n.strokeStyle=Et(i.shirt,.3),n.stroke(),Pn(n,-1.6,-18.6,-1.6,-14.8,.8,R),Pn(n,1.6,-18.6,1.6,-14.8,.8,R)):f==="sweater"?(n.fillStyle=Et(i.shirt,-.28),n.fillRect(-6.4*m,-10.6,12.8*m,2),n.beginPath(),n.ellipse(0,-19.3,3.6,1.5,0,0,7),xe(n,Et(i.shirt,-.28),1)):f==="jersey"?(n.fillStyle=i.shirt2||"#fff",n.font="800 6.4px 'Trebuchet MS',sans-serif",n.textAlign="center",n.fillText(String(i.num??i.id%90+1),0,-11.8),n.fillRect(-6.4*m,-19.4,12.8*m,.9)):f==="blazer"?(n.beginPath(),n.moveTo(-3.4,-19.4),n.lineTo(0,-12.4),n.lineTo(3.4,-19.4),n.closePath(),xe(n,R,.9),n.beginPath(),n.moveTo(-3.4,-19.4),n.lineTo(-.4,-11.8),n.lineTo(-5.6,-11),n.lineTo(-6.4,-17.6),n.closePath(),xe(n,Et(i.shirt,.16),.9),n.beginPath(),n.moveTo(3.4,-19.4),n.lineTo(.4,-11.8),n.lineTo(5.6,-11),n.lineTo(6.4,-17.6),n.closePath(),xe(n,Et(i.shirt,.16),.9),n.fillStyle="#EAB94E",n.beginPath(),n.arc(0,-10.4,.7,0,7),n.fill()):f==="overalls"?(an(n,-4,-16.4,8,6.8,1.6),xe(n,i.shirt,1.1),Pn(n,-3.4,-19.4,-3.2,-16.2,1.2,i.shirt),Pn(n,3.4,-19.4,3.2,-16.2,1.2,i.shirt),n.fillStyle="#EAB94E",[-3.2,3.2].forEach(B=>{n.beginPath(),n.arc(B,-16.2,.7,0,7),n.fill()}),an(n,-2,-14.4,4,2.4,.8),n.lineWidth=.8,n.strokeStyle=Et(i.shirt,.3),n.stroke()):f==="vest"?(n.beginPath(),n.moveTo(-6.6*m,-19.4),n.lineTo(-1.2,-19.4),n.lineTo(-.6,-9.4),n.lineTo(-6.2*m,-9.4),n.closePath(),xe(n,i.shirt,1),n.beginPath(),n.moveTo(6.6*m,-19.4),n.lineTo(1.2,-19.4),n.lineTo(.6,-9.4),n.lineTo(6.2*m,-9.4),n.closePath(),xe(n,i.shirt,1)):f==="tee"?(n.beginPath(),n.ellipse(0,-19.3,3.2,1.3,0,0,7),xe(n,Et(i.shirt,.12),.9)):f==="dress"&&(n.fillStyle=Et(i.shirt,-.35),n.fillRect(-6.4*m,-13.2,13.2*m,1.2)));else{let B=i.id%3;B===0?(n.fillStyle="rgba(255,255,255,.45)",n.fillRect(-6,-15.4,12,2.4)):B===2&&!u&&(n.fillStyle="#fff",n.beginPath(),n.moveTo(-3,-19.4),n.lineTo(0,-16),n.lineTo(3,-19.4),n.closePath(),xe(n,"#fff",.9))}u?w!=="none"&&(an(n,-6,-19,12,10.5,4),xe(n,A,1.3),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(-4,-17.5,8,2)):!c&&w==="pack"?(Pn(n,-3.6,-19.2,-3.6,-11,1.5,A),Pn(n,3.6,-19.2,3.6,-11,1.5,A)):!c&&w==="messenger"&&(Pn(n,-5.6,-19.2,5.2,-9.8,1.5,A),an(n,3.2,-12.6,5.6,5,1.6),xe(n,A,1.1)),i.scarf&&(n.beginPath(),n.ellipse(0,-19.4,6.6*m,2.4,0,0,7),xe(n,i.scarf,1.2),!u&&!c&&(an(n,1.6,-19,3.2,8,1.4),xe(n,i.scarf,1.1),n.fillStyle="rgba(255,255,255,.4)",n.fillRect(1.9,-15.6,2.6,.9))),i.tag&&(n.beginPath(),n.moveTo(-6,-19.5),n.lineTo(-1,-8.5),n.lineTo(-6.6,-9),n.closePath(),n.fillStyle="#c4463c",n.fill(),n.beginPath(),n.moveTo(6,-19.5),n.lineTo(1,-8.5),n.lineTo(6.6,-9),n.closePath(),n.fill()),i.badge&&!u&&!c&&(n.beginPath(),n.arc(-3.8,-15.4,1.5,0,7),xe(n,i.badge,.9)),c?x(o*1,!0):(x(-1),x(1)),h&&n.scale(1,1/p),n.save(),h&&(n.translate(0,-8.4+0),n.scale(.82,.82)),n.translate((i.turn||0)*1.7,0);let _=-28,I=i.hair,U=i.style,D=i.hair2||Et(I,-.28),H=(h?8.1:8.9)*S,Y=(h?9.2:8.3)*S;if((U==="long"||U==="bob")&&(an(n,-9.8,_-6,19.6,U==="long"?20:14,7),xe(n,I,1.3)),U==="wavy"&&(an(n,-10.2,_-6,20.4,18,7),xe(n,I,1.3),[-7,0,7].forEach(B=>{n.beginPath(),n.arc(B,_+12,3.6,0,7),xe(n,I,1.1)})),U==="afro"&&(n.beginPath(),n.ellipse(c?-o*1.2:0,_-3,13.2,12.6,0,0,7),xe(n,I,1.4)),U==="bun"&&(n.beginPath(),n.arc(c?-o*3:0,_-9.5,4.4,0,7),xe(n,I,1.3)),U==="topknot"&&(n.beginPath(),n.arc(c?-o*2:0,_-12,3.4,0,7),xe(n,I,1.3)),U==="twinbuns"&&(c?[-o*3]:[-7.6,7.6]).forEach(B=>{n.beginPath(),n.arc(B,_-10.4,3.9,0,7),xe(n,I,1.3)}),U==="pony"&&(n.save(),n.translate(c?-o*9:u?0:9,c?_+2:u?_+8:_+1),n.rotate(c||u?0:-.5),n.beginPath(),n.ellipse(0,4,3.2,6.5,0,0,7),xe(n,I,1.3),n.restore()),U==="pigtails"&&(c?[-o*10]:[-10.6,10.6]).forEach((B,j)=>{n.save(),n.translate(B,_+3),n.rotate(c?0:j?-.4:.4),n.beginPath(),n.ellipse(0,5,2.9,6.6,0,0,7),xe(n,I,1.3),n.restore()}),U==="braids"&&(c?[-o*8.4]:[-9.4,9.4]).forEach(B=>{for(let j=0;j<4;j++)n.beginPath(),n.ellipse(B,_+4+j*3.7,2.2,2.1,0,0,7),xe(n,j&1?D:I,1.1)}),U==="curly"&&[[-8,_-2],[8,_-2],[-6,_-8],[6,_-8],[0,_-10]].forEach(([B,j])=>{n.beginPath(),n.arc(B,j,4.6,0,7),xe(n,I,1.2)}),c||[-1,1].forEach(B=>{n.beginPath(),n.arc(B*8.7,_+1,2,0,7),xe(n,i.skin,1)}),n.beginPath(),n.ellipse(c?o*.6:0,_,H,Y,0,0,7),xe(n,i.skin,1.5),n.fillStyle="rgba(120,70,60,.13)",n.beginPath(),n.ellipse(3,_+3,7.5,6,0,0,7),n.fill(),!u){let B=(s*.9+i.id*1.7)%4<.13,j=c?[o*4.4]:[-3.5,3.5],se=i.eyeShape||"round",ze=i.eyeColor,Ie=i.brow||"soft",We=i.browColor||i.hair;if(j.forEach((re,He)=>{if(B||se==="happy")n.strokeStyle="#3a2a30",n.lineWidth=1.1,n.beginPath(),se==="happy"&&!B?n.arc(re,_+.6,1.7,Math.PI*1.1,Math.PI*1.9):(n.moveTo(re-1.6,_),n.lineTo(re+1.6,_)),n.stroke();else{let rt=h?.74:1,Oe=(se==="wide"?2.1:se==="oval"?1.4:1.7)*rt,Ze=(se==="wide"||se==="oval"?2.7:2.3)*(h?.82:1);if(n.fillStyle=ze||"#3a2a30",n.beginPath(),n.ellipse(re,_,Oe,Ze,0,0,7),n.fill(),ze&&(n.fillStyle="#2a1d22",n.beginPath(),n.ellipse(re,_+.2,Oe*.5,Ze*.55,0,0,7),n.fill()),n.fillStyle="#fff",n.beginPath(),n.arc(re-.5,_-.9,se==="wide"?.9:.7,0,7),n.fill(),se==="sleepy"&&(n.fillStyle=i.skin,n.beginPath(),n.ellipse(re,_-1.1,Oe+.5,Ze*.62,0,Math.PI,2*Math.PI),n.fill(),n.strokeStyle="#3a2a30",n.lineWidth=.9,n.beginPath(),n.moveTo(re-Oe-.4,_-.6),n.lineTo(re+Oe+.4,_-.6),n.stroke()),se==="lash"){n.strokeStyle="#3a2a30",n.lineWidth=.8;let it=c?o:He?1:-1;n.beginPath(),n.moveTo(re+it*Oe,_-1),n.lineTo(re+it*(Oe+1.4),_-2.2),n.moveTo(re+it*Oe,_-.1),n.lineTo(re+it*(Oe+1.6),_-.6),n.stroke()}}if(Ie!=="none"){if(n.strokeStyle=We,n.lineCap="round",n.lineWidth=(Ie==="thick"?1.6:Ie==="thin"?.6:.9)+(h?.45:0),n.beginPath(),Ie==="arch")n.moveTo(re-2,_-3.2),n.quadraticCurveTo(re,_-5.2,re+2,_-3.6);else if(h){let rt=c||He?1:-1;n.moveTo(re-2.2*rt,_-3.5),n.lineTo(re+2.2*rt,_-4.3)}else n.moveTo(re-2,_-3.6),n.lineTo(re+2,_-3.9);n.stroke()}if(i.glasses){let rt=i.glasses===!0?"round":i.glasses,Oe=i.glassColor||"#5b4048";n.strokeStyle=Oe,n.lineWidth=rt==="sun"?1:.9,n.beginPath(),rt==="square"?n.roundRect(re-3.1,_-2.6,6.2,5.2,1.2):rt==="cat"?(n.ellipse(re,_,3.2,2.7,0,0,7),n.moveTo(re+(c?o:He?1:-1)*3,_-1.6),n.lineTo(re+(c?o:He?1:-1)*4.4,_-3.4)):rt==="half"?n.arc(re,_,3.2,Math.PI,0):n.arc(re,_,3.2,0,7),rt==="sun"&&(n.fillStyle="rgba(40,30,40,.82)",n.fill()),n.stroke()}}),i.glasses&&!c&&(n.strokeStyle=i.glassColor||"#5b4048",n.lineWidth=.9,n.beginPath(),n.moveTo(-.3,_-.5),n.lineTo(.3,_-.5),n.stroke()),(h?i.blush===!0:i.blush!==!1)&&(n.fillStyle=i.blushColor||(h?"rgba(255,110,125,.14)":"rgba(255,110,125,.38)"),(c?[o*6.4]:[-6,6]).forEach(re=>{n.beginPath(),n.ellipse(re,_+3.4,2.1,1.3,0,0,7),n.fill()})),i.freckles&&(n.fillStyle=Et(i.skin,.32),(c?[[o*5.6,_+2.2],[o*6.8,_+3.2],[o*5.2,_+3.8]]:[[-5.6,_+2.4],[-4.2,_+3.4],[-6.4,_+3.8],[5.6,_+2.4],[4.2,_+3.4],[6.4,_+3.8]]).forEach(([re,He])=>{n.beginPath(),n.arc(re,He,.5,0,7),n.fill()})),i.mole&&(n.fillStyle="#4a2f2a",n.beginPath(),n.arc(c?o*6:4.4,_+5.2,.65,0,7),n.fill()),i.nose||h){n.strokeStyle=Et(i.skin,.3),n.lineWidth=.8,n.beginPath();let re=c?o*6.4:0;n.arc(re,_+2.6,.9,.1*Math.PI,.9*Math.PI),n.stroke()}let $=c?o*3.6:0,Q=_+4.7,ve=i.mouthStyle||"smile",ke=i.lip||"#8a4650";i.mouth?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse($,_+4.8,1.7,.7+i.mouth*1.5,0,0,7),n.fill()):ve==="grin"?(n.beginPath(),n.moveTo($-2.4,Q-.9),n.quadraticCurveTo($,Q+2.8,$+2.4,Q-.9),n.closePath(),n.fillStyle="#fff",n.fill(),n.strokeStyle=ke,n.lineWidth=.9,n.stroke()):ve==="smirk"?(n.strokeStyle=ke,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo($-1.8,Q),n.quadraticCurveTo($+.4,Q+1,$+2.2,Q-.8),n.stroke()):ve==="flat"?(n.strokeStyle=ke,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo($-1.5,Q),n.lineTo($+1.5,Q),n.stroke()):ve==="o"?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse($,Q+.2,1,1.2,0,0,7),n.fill()):ve==="cat"?(n.strokeStyle=ke,n.lineWidth=.9,n.lineCap="round",n.beginPath(),n.arc($-1,Q-.4,1.1,.1*Math.PI,.9*Math.PI),n.arc($+1,Q-.4,1.1,.1*Math.PI,.9*Math.PI),n.stroke()):(n.strokeStyle=ke,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.arc($,_+(h?5.4:4.6),h?1.35:1.7,.15*Math.PI,.85*Math.PI),n.stroke())}let F=c?-o*1.6:0,ne=()=>{let B=c?o:1,j=c?-1.6:0;c&&(n.save(),n.scale(B,1)),n.beginPath(),c?(n.moveTo(-9.2+j,_+5.4),n.lineTo(-9.3+j,_+.5),n.bezierCurveTo(-11+j,_-14,11+j,_-14,9.3+j,_+.5),n.quadraticCurveTo(7+j,_-5.4,4+j,_-4.6),n.lineTo(-2.6+j,_-1.6),n.lineTo(-5.4+j,_+3.6)):(n.moveTo(-9.3,_+.5),n.bezierCurveTo(-11,_-14,11,_-14,9.3,_+.5),n.quadraticCurveTo(6,_-3.4,2,_-4.4),n.quadraticCurveTo(-3,_-6,-9.3,_+.5)),n.closePath(),c&&n.restore()};if(u)n.beginPath(),n.ellipse(0,_-.4,9.4,8.9,0,0,7),xe(n,I,1.4),n.fillStyle="rgba(255,255,255,.2)",n.beginPath(),n.ellipse(-2.5,_-4,3.5,2,0,0,7),n.fill();else if(U==="buzz")n.beginPath(),n.moveTo(-8.8+F,_-1.2),n.bezierCurveTo(-10+F,_-11,10+F,_-11,8.8+F,_-1.2),n.quadraticCurveTo(0,_-4.6,-8.8+F,_-1.2),n.closePath(),xe(n,I,1.3);else if(U==="undercut")ne(),xe(n,Et(I,.12),1.3),n.beginPath(),n.moveTo(-7+F,_-4),n.bezierCurveTo(-8+F,_-17,9+F,_-16,7.4+F,_-4),n.quadraticCurveTo(0,_-6,-7+F,_-4),n.closePath(),xe(n,I,1.3);else if(U==="spiky"||U==="messy"){ne(),xe(n,I,1.4);let B=U==="spiky"?6:4;for(let j=0;j<B;j++){let se=-Math.PI*(.12+.76*j/(B-1)),ze=Math.cos(se+Math.PI)*7.6+F,Ie=_-3+Math.sin(se)*5.4,We=U==="spiky"?6.4:4.4+j%2*1.6;n.beginPath(),n.moveTo(ze-2.1,Ie+1.4),n.lineTo(ze+(j-B/2)*.8,Ie-We),n.lineTo(ze+2.1,Ie+1.4),n.closePath(),xe(n,I,1.2)}ne(),xe(n,I,1.2)}else U==="sidebang"||U==="pixie"?(ne(),xe(n,I,1.4),n.beginPath(),n.moveTo(-9+F,_-6),n.quadraticCurveTo(2+F,_-12,9.4+F,_-1.4),n.quadraticCurveTo(U==="pixie"?4+F:-1+F,_-3.6,-9+F,_-6),n.closePath(),xe(n,I,1.2),U==="pixie"&&!c&&[-1,1].forEach(B=>{n.beginPath(),n.moveTo(B*9.2,_-1),n.lineTo(B*10.4,_+5),n.lineTo(B*7.6,_+1),n.closePath(),xe(n,I,1)})):U==="curtains"?(ne(),xe(n,I,1.4),c||(n.strokeStyle=Et(I,.35),n.lineWidth=1,n.beginPath(),n.moveTo(0,_-9.4),n.quadraticCurveTo(-1.2,_-6,-.2,_-3.6),n.stroke())):U==="afro"?(n.beginPath(),n.moveTo(-9+F,_-1),n.bezierCurveTo(-10+F,_-13,10+F,_-13,9+F,_-1),n.quadraticCurveTo(0+F,_-5.4,-9+F,_-1),n.closePath(),xe(n,I,1.3)):(ne(),xe(n,I,1.4));!u&&i.hair2&&(n.strokeStyle=i.hair2,n.lineWidth=1.3,n.lineCap="round",n.beginPath(),n.moveTo(-5+F,_-6.2),n.quadraticCurveTo(-3+F,_-8.6,0+F,_-9),n.moveTo(1+F,_-9),n.quadraticCurveTo(4+F,_-8,6+F,_-5.4),n.stroke()),u||(n.fillStyle="rgba(255,255,255,.22)",n.beginPath(),n.ellipse(-3+F,_-6.4,3.4,1.5,-.3,0,7),n.fill()),(U==="long"||U==="wavy")&&!u&&!c&&[-1,1].forEach(B=>{n.beginPath(),n.ellipse(B*9,_+6,2.3,7,0,0,7),xe(n,I,1.1)}),c&&!u&&(n.beginPath(),n.ellipse(-o*1.2+o*.6,_+2.2,1.5,2.2,0,0,7),xe(n,i.skin,1),n.fillStyle="rgba(160,90,80,.25)",n.beginPath(),n.ellipse(-o*1.2+o*.6,_+2.4,.6,1.1,0,0,7),n.fill(),i.glasses&&(n.strokeStyle=i.glassColor||"#5b4048",n.lineWidth=.9,n.beginPath(),n.moveTo(o*1.1,_-.6),n.lineTo(-o*.6,_+.9),n.stroke()));let X=i.hatColor||"#e07a66",K=i.hat;if(i.earrings&&!u&&(c?[-o*.6]:[-9,9]).forEach(B=>{n.beginPath(),n.arc(B,_+4.6,1.2,0,7),xe(n,i.earrings,.8)}),K==="cap")n.beginPath(),n.moveTo(-9.4+F,_-2.8),n.bezierCurveTo(-9.8+F,_-15,9.8+F,_-15,9.4+F,_-2.8),n.closePath(),xe(n,X,1.3),u||(n.beginPath(),c?n.ellipse(o*9.2+F,_-3,5.2,1.7,0,0,7):n.ellipse(0,_-2.6,7.4,2,0,0,7),xe(n,Et(X,.18),1.1)),n.beginPath(),n.arc(0,_-12.2,1,0,7),xe(n,Et(X,.2),.8);else if(K==="beanie")n.beginPath(),n.moveTo(-9.8+F,_-2.4),n.bezierCurveTo(-10.4+F,_-17,10.4+F,_-17,9.8+F,_-2.4),n.closePath(),xe(n,X,1.3),an(n,-10+F,_-4.6,20,3.8,1.6),xe(n,Et(X,-.25),1.1),n.beginPath(),n.arc(F,_-14,2.3,0,7),xe(n,Et(X,-.35),1);else if(K==="bucket")n.beginPath(),n.moveTo(-8+F,_-4),n.lineTo(-7+F,_-11.4),n.lineTo(7+F,_-11.4),n.lineTo(8+F,_-4),n.closePath(),xe(n,X,1.3),n.beginPath(),n.ellipse(F,_-4.4,12.2,2.8,0,0,7),xe(n,Et(X,.1),1.2);else if(K==="beret")n.beginPath(),n.ellipse(2+F,_-8.6,9,3.6,-.12,0,7),xe(n,X,1.3),n.beginPath(),n.arc(3+F,_-12.2,1,0,7),xe(n,Et(X,.25),.8);else if(K==="crown")n.beginPath(),n.moveTo(-6+F,_-8),n.lineTo(-6.6+F,_-14),n.lineTo(-3+F,_-11),n.lineTo(0+F,_-15.4),n.lineTo(3+F,_-11),n.lineTo(6.6+F,_-14),n.lineTo(6+F,_-8),n.closePath(),xe(n,i.hatColor||"#EAB94E",1.2),[-3,0,3].forEach(B=>{n.beginPath(),n.arc(B+F,_-9.4,.7,0,7),n.fillStyle="#e07a66",n.fill()});else if(K==="catears")[-1,1].forEach(B=>{n.beginPath(),n.moveTo(B*2.6+F,_-8.4),n.lineTo(B*6.2+F,_-15.6),n.lineTo(B*9+F,_-6.2),n.closePath(),xe(n,I,1.2),n.beginPath(),n.moveTo(B*4.2+F,_-8.8),n.lineTo(B*6.2+F,_-12.8),n.lineTo(B*7.6+F,_-7.6),n.closePath(),n.fillStyle="#f0a6b5",n.fill()});else if(K==="headphones")n.strokeStyle=ra,n.lineWidth=3.6,n.beginPath(),n.arc(F,_-.5,10.4,Math.PI*1.06,Math.PI*1.94),n.stroke(),n.strokeStyle=X,n.lineWidth=2,n.stroke(),u||(c?[o*9.2]:[-9.8,9.8]).forEach(B=>{an(n,B-1.7,_-3,3.4,6.2,1.4),xe(n,X,1.1)});else if(K==="headband"&&!u)n.strokeStyle=ra,n.lineWidth=3.4,n.beginPath(),n.moveTo(-9+F,_-1.2),n.quadraticCurveTo(F,_-12,9+F,_-1.2),n.stroke(),n.strokeStyle=X,n.lineWidth=2,n.stroke();else if(K==="headband")n.strokeStyle=X,n.lineWidth=2,n.beginPath(),n.moveTo(-9,_-1.2),n.quadraticCurveTo(0,_-12,9,_-1.2),n.stroke();else if(K==="bow"){let B=c?-o*1.5:6.6,j=_-9.6;[-1,1].forEach(se=>{n.beginPath(),n.moveTo(B,j),n.lineTo(B+se*5.4,j-2.8),n.lineTo(B+se*5.4,j+2.8),n.closePath(),xe(n,X,1.1)}),n.beginPath(),n.arc(B,j,1.5,0,7),xe(n,Et(X,.2),1)}else if(K==="flower"){let B=c?-o*2:-6,j=_-8.4;for(let se=0;se<5;se++){let ze=se*Math.PI*2/5;n.beginPath(),n.arc(B+Math.cos(ze)*2.3,j+Math.sin(ze)*2.3,1.8,0,7),xe(n,X,.9)}n.beginPath(),n.arc(B,j,1.3,0,7),xe(n,"#EAB94E",.8)}if(n.restore(),i.tag){let B=_-19+Math.sin(s*4)*1.5;n.beginPath(),n.moveTo(-5,B-5),n.lineTo(5,B-5),n.lineTo(0,B+1),n.closePath(),xe(n,"#f28f7e",1.3)}n.restore()}var si={adult:1.2,hs:1,g68:.86,g35:.74,k2:.6},oa=["down","up","left","right"],aa=160,nr=240,la=5,ca=4.6,Ch=12;function Jd(n){let e=document.createElement("canvas");e.width=aa*la,e.height=nr*oa.length;let t=e.getContext("2d");return oa.forEach((i,s)=>{for(let r=0;r<la;r++)t.save(),t.translate(r*aa+aa/2,s*nr+nr-Ch),t.scale(ca,ca),t.shadowColor="rgba(52,34,46,.35)",t.shadowBlur=2.2,t.shadowOffsetX=.5,t.shadowOffsetY=1.2,tr(t,0,0,{...n,dir:i,moving:r>0,walk:r*Math.PI/2,sitting:!1},0),t.restore()}),e}var Kd=["math","ela","science","history"];var ha=[{subject:"math",rect:{x:5,y:5,w:16,h:12}},{subject:"ela",rect:{x:35,y:5,w:16,h:12}},{subject:"science",rect:{x:5,y:27,w:16,h:12}},{subject:"history",rect:{x:35,y:27,w:16,h:12}}],ri=ha.map(n=>{let e=n.rect.y<20,t=n.rect.x+n.rect.w/2,i=e?n.rect.y+n.rect.h:n.rect.y;return{subject:n.subject,face:e?"S":"N",cx:t,cy:i,trigger:{x:t-1.2,y:e?i:i-.9,w:2.4,h:.9},approach:{x:t,y:e?i+1.6:i-1.6}}}),Hi={cx:28,cy:0,trigger:{x:26.8,y:.45,w:2.4,h:.95},approach:{x:28,y:2.4}},Vi={cx:53,cy:44,trigger:{x:51.8,y:44-1.4,w:2.4,h:.95},approach:{x:53,y:44-2.6}},Rh=[{rect:{x:6,y:0,w:19,h:.6},face:"S"},{rect:{x:31,y:0,w:19,h:.6},face:"S"},{rect:{x:6,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:32,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:0,y:6,w:.6,h:32},face:"E"},{rect:{x:56-.6,y:6,w:.6,h:32},face:"W"},{rect:{x:6,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:36,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:6,y:39,w:14,h:.6},face:"S"},{rect:{x:36,y:39,w:14,h:.6},face:"S"},{rect:{x:5-.6,y:6,w:.6,h:10},face:"W"},{rect:{x:5-.6,y:28,w:.6,h:10},face:"W"},{rect:{x:51,y:6,w:.6,h:10},face:"E"},{rect:{x:51,y:28,w:.6,h:10},face:"E"}],In={gap:{x0:24,x1:32},tile:{x:28,y:43}},Zd=(n,e)=>n.flatMap(t=>e.map(i=>({kind:"table",x:t,y:i}))),Ph=[{kind:"fountain",x:28,y:22},...[[23.5,7.5],[32.5,7.5],[23.5,36.5],[32.5,36.5],[7,19],[7,25],[49,19],[49,25],[23,14],[33,14],[23,30],[33,30]].map(([n,e])=>({kind:"tree",x:n,y:e})),...Zd([10,14,18],[20,24]),...Zd([38,42,46],[20,24]),...[[24.2,11],[31.8,11],[24.2,33],[31.8,33]].map(([n,e])=>({kind:"bench",x:n,y:e,rot:Math.PI/2})),{kind:"planter",x:25.2,y:18.2},{kind:"planter",x:30.8,y:18.2},{kind:"planter",x:25.2,y:25.8},{kind:"planter",x:30.8,y:25.8},...[[12,2.5],[20,2.5],[36,2.5],[44,2.5],[12,41.5],[44,41.5],[2.5,22],[53.5,22]].map(([n,e])=>({kind:"lamp",x:n,y:e}))],Tx={tree:[1.2,1.2],bench:[.7,1.9],table:[1.9,1.9],fountain:[4.6,4.6],planter:[1.4,1.4],lamp:[.1,.1]};function Ex(){let n=ha.map(e=>({...e.rect}));for(let e of Rh)n.push(e.rect);for(let e of Ph){let[t,i]=Tx[e.kind];e.kind!=="lamp"&&n.push({x:e.x-t/2,y:e.y-i/2,w:t,h:i})}return n}var jd=Ex(),Gi=(n,e,t,i=0)=>e>n.x-i&&e<n.x+n.w+i&&t>n.y-i&&t<n.y+n.h+i;function Bl(n,e,t=.16){return n<.45||e<.45||n>56-.45?!0:e>44-.45?!(n>In.gap.x0&&n<In.gap.x1&&e<47):jd.some(i=>Gi(i,n,e,t))}var ai=Array.from({length:44},(n,e)=>Array.from({length:56},(t,i)=>jd.some(s=>Gi(s,i+.5,e+.5,.2))?"#":".").join("")),zS=ai.flatMap((n,e)=>n.split("").map((t,i)=>({c:t,x:i,y:e}))).filter(n=>n.c==="."&&n.x>=7&&n.x<=48&&n.y>=7&&n.y<=37&&!ha.some(e=>Gi(e.rect,n.x+.5,n.y+.5,0))),HS=ai.flatMap((n,e)=>n.split("").map((t,i)=>({c:t,x:i,y:e}))).filter(n=>n.c==="."&&(n.x<4||n.x>51||n.y<4||n.y>39));var ua="#6d5a5f";var kt=(n,e,t,i=!1)=>{let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");t(r,n,e);let a=new Qi(s);return a.colorSpace=zt,a.anisotropy=8,i&&(a.wrapS=a.wrapT=Fs),a},pt=(n,e,t,i,s,r)=>{n.beginPath(),n.roundRect(e,t,i,s,r)},da=(n,e=3,t=ua)=>{n.lineWidth=e,n.strokeStyle=t,n.lineJoin="round",n.stroke()},tt=(n,e,t=3)=>{n.fillStyle=e,n.fill(),t&&da(n,t)},xn=(n,e,t=0)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)},fa=(n,e,t,i,s,r=6)=>{n.save(),n.lineWidth=r,n.strokeStyle="rgba(255,255,255,.5)",n.beginPath(),n.moveTo(e+r,t+s-r),n.lineTo(e+r,t+r),n.lineTo(e+i-r,t+r),n.stroke(),n.strokeStyle="rgba(70,40,50,.22)",n.beginPath(),n.moveTo(e+i-r,t+r),n.lineTo(e+i-r,t+s-r),n.lineTo(e+r,t+s-r),n.stroke(),n.restore()},Qd=()=>kt(256,256,n=>{for(let e=0;e<2;e++)for(let t=0;t<2;t++){let i=t*128,s=e*128;n.fillStyle=t+e&1?"#d4ebf5":"#e3f3f9",n.fillRect(i,s,128,128);let r=n.createLinearGradient(i,s,i+128,s+128);r.addColorStop(0,"rgba(255,255,255,.28)"),r.addColorStop(1,"rgba(60,90,110,.10)"),n.fillStyle=r,n.fillRect(i,s,128,128);for(let a=0;a<26;a++)n.fillStyle=a&1?"rgba(255,255,255,.55)":"rgba(80,110,130,.18)",n.fillRect(i+xn(t,e,a)*124,s+xn(e,t,a+40)*124,2.4,2.4)}n.strokeStyle="rgba(90,120,140,.45)",n.lineWidth=3,n.strokeRect(1.5,1.5,253,253),n.beginPath(),n.moveTo(128,0),n.lineTo(128,256),n.moveTo(0,128),n.lineTo(256,128),n.stroke()},!0),ef=()=>kt(256,256,n=>{n.fillStyle="#9fd0e8",n.fillRect(0,0,256,256);for(let e=0;e<220;e++)n.fillStyle=e&1?"rgba(255,255,255,.3)":"rgba(50,108,158,.14)",n.fillRect(xn(e,1)*256,xn(e,2)*256,3,3);for(let[e,t,i]of[[0,18,"#EAB94E"],[22,8,"#F28F7E"],[226,8,"#F28F7E"],[238,18,"#EAB94E"]])n.fillStyle=i,n.fillRect(e,0,t,256);n.fillStyle="rgba(255,255,255,.55)";for(let e=0;e<2;e++)n.beginPath(),n.moveTo(128,e*128+16),n.lineTo(160,e*128+64),n.lineTo(128,e*128+112),n.lineTo(96,e*128+64),n.closePath(),n.fill()},!0),pa=()=>kt(512,540,(n,e,t)=>{n.fillStyle="#F4EBDB",n.fillRect(0,0,e,t);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#FBF1DD"),i.addColorStop(1,"#EAF1E8"),n.fillStyle=i,n.fillRect(0,60,e,300);for(let r=0;r<e;r+=32)n.fillStyle="rgba(255,255,255,.55)",n.fillRect(r,60,14,300),n.fillStyle="rgba(110,120,110,.10)",n.fillRect(r+14,60,3,300);n.fillStyle="#FFF9F0",n.fillRect(0,0,e,40);let s=["#F28F7E","#EAB94E","#8FC9E8","#B8A8DA"];for(let r=0;r<8;r++)n.beginPath(),n.arc(32+r*64,42,30,0,Math.PI),tt(n,s[r%4],3);n.fillStyle="#EAB94E",n.fillRect(0,340,e,22),n.fillStyle="rgba(255,255,255,.45)",n.fillRect(0,340,e,5),n.fillStyle="#A9CDB8",n.fillRect(0,362,e,150);for(let r=0;r<2;r++)pt(n,24+r*256,384,208,104,8),tt(n,"#98C1A8",3),fa(n,24+r*256,384,208,104,5);n.fillStyle="#9A653D",n.fillRect(0,512,e,28),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(0,512,e,4),n.strokeStyle=ua,n.lineWidth=3,n.beginPath(),n.moveTo(0,361),n.lineTo(e,361),n.moveTo(0,512),n.lineTo(e,512),n.stroke()},!0),Ax=(n,e)=>kt(264,640,(t,i,s)=>{let r=t.createLinearGradient(0,0,i,s);r.addColorStop(0,n),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,i,s),t.fillStyle="rgba(255,255,255,.22)",t.fillRect(0,0,i,34),pt(t,16,44,i-32,s-70,10),tt(t,"rgba(0,0,0,.09)",3),fa(t,16,44,i-32,s-70,5);for(let a=0;a<5;a++)pt(t,46,66+a*17,i-92,7,3),t.fillStyle="rgba(60,40,50,.42)",t.fill();pt(t,78,252,108,42,6),tt(t,"#FFF9F0",2.5),t.fillStyle="#6d5a5f",t.font="700 26px 'Trebuchet MS',sans-serif",t.textAlign="center",t.fillText(String(100+e),132,282),pt(t,i-62,330,18,74,8),tt(t,"#EAB94E",2.5),e%2===0&&(t.beginPath(),t.arc(70,372,16,0,7),tt(t,["#F28F7E","#EAB94E","#B8A8DA"][e%3],2.5));for(let a=0;a<4;a++)pt(t,46,s-96+a*12,i-92,5,2),t.fillStyle="rgba(60,40,50,.3)",t.fill();t.strokeStyle=ua,t.lineWidth=6,t.strokeRect(0,0,i,s)}),zl=n=>kt(320,576,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s of[10,168])pt(e,s+14,84,118,150,8),tt(e,"#A9DDF2",3),pt(e,s+24,96,30,120,6),e.fillStyle="rgba(255,255,255,.6)",e.fill(),pt(e,s+10,280,126,200,8),tt(e,"rgba(0,0,0,.12)",3),fa(e,s+10,280,126,200,5);e.fillStyle="rgba(0,0,0,.22)",e.fillRect(150,0,20,i),e.fillStyle="#EAB94E",e.fillRect(0,i-44,t,44),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(0,i-44,t,6);for(let s of[128,192])e.beginPath(),e.arc(s,330,9,0,7),tt(e,"#EAB94E",2.5);e.strokeStyle=ua,e.lineWidth=6,e.strokeRect(0,0,t,i),e.beginPath(),e.moveTo(160,0),e.lineTo(160,i),e.stroke()}),Hl=(n,e,t="#FFF9F0")=>kt(512,128,(i,s,r)=>{pt(i,8,22,s-16,r-30,22),tt(i,e,5),pt(i,22,34,s-44,r-54,14),i.fillStyle="rgba(255,255,255,.28)",i.fill(),i.fillStyle=t,i.font="800 58px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,s/2,r/2+4),i.strokeStyle=ua,i.lineWidth=4;for(let a of[80,s-80])i.beginPath(),i.moveTo(a,0),i.lineTo(a,24),i.stroke()}),ir=()=>kt(320,400,(n,e,t)=>{pt(n,10,10,e-20,t-46,14),tt(n,"#FFF9F0",5);let i=n.createLinearGradient(0,40,0,250);i.addColorStop(0,"#A9DDF2"),i.addColorStop(1,"#E9F7FC"),pt(n,40,40,e-80,230,6),n.fillStyle=i,n.fill(),da(n,3),n.beginPath(),n.arc(220,96,26,0,7),tt(n,"#F8D977",3),n.beginPath(),n.moveTo(44,260),n.lineTo(110,170),n.lineTo(170,260),n.closePath(),tt(n,"#88B89A",3),n.beginPath(),n.moveTo(120,260),n.lineTo(210,150),n.lineTo(276,260),n.closePath(),tt(n,"#5E9C72",3),n.strokeStyle="#FFF9F0",n.lineWidth=9,n.beginPath(),n.moveTo(e/2,40),n.lineTo(e/2,270),n.moveTo(40,155),n.lineTo(e-40,155),n.stroke(),pt(n,0,t-60,e,26,8),tt(n,"#F1C887",4);for(let s of[-1,1]){let r=s<0?16:e-16;n.beginPath(),n.moveTo(r,14),n.quadraticCurveTo(r+s*-50,90,r+s*-34,250),n.lineTo(r+s*-34,300),n.lineTo(r,300),n.closePath(),tt(n,"#F28F7E",3.5)}}),tf=()=>kt(384,256,(n,e,t)=>{pt(n,4,4,e-8,t-8,14),tt(n,"#C98B4D",6),pt(n,20,20,e-40,t-40,6),n.fillStyle="#E8C39A",n.fill(),da(n,3);let i=["#FFF9F0","#F8D977","#8FC9E8","#A9DCC0","#EAA5B2","#B8A8DA"];[[36,34],[148,30],[256,40],[40,138],[156,130],[262,140]].forEach(([s,r],a)=>{n.save(),n.translate(s+40,r+40),n.rotate((xn(a,3)-.5)*.24),n.translate(-40,-40),n.shadowColor="rgba(50,30,40,.35)",n.shadowBlur=6,n.shadowOffsetY=4,pt(n,0,0,82,84,4),tt(n,i[a],3),n.shadowColor="transparent";for(let l=0;l<4;l++)n.fillStyle="rgba(60,50,60,.4)",n.fillRect(10,18+l*14,50+l%2*12,4);n.beginPath(),n.arc(41,6,6,0,7),tt(n,a&1?"#F28F7E":"#4F91C7",2),n.restore()})}),nf=()=>kt(320,300,(n,e,t)=>{pt(n,4,4,e-8,t-8,14),tt(n,"#C98B4D",6),pt(n,22,22,e-44,t-44,8),n.fillStyle="#DDF0F6",n.fill(),da(n,3);for(let i of[120,226])pt(n,26,i,e-52,14,4),tt(n,"#DDAA68",3);[[70,120,1],[160,120,1.25],[250,120,.9],[110,226,1.1],[220,226,1]].forEach(([i,s,r])=>{n.beginPath(),n.moveTo(i-26*r,s-74*r),n.lineTo(i+26*r,s-74*r),n.lineTo(i+14*r,s-30*r),n.lineTo(i-14*r,s-30*r),n.closePath(),tt(n,"#EAB94E",3),pt(n,i-6*r,s-30*r,12*r,18*r,3),tt(n,"#EAB94E",3),pt(n,i-22*r,s-12*r,44*r,12*r,3),tt(n,"#9A653D",3)}),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=8,n.beginPath(),n.moveTo(44,40),n.lineTo(110,100),n.stroke()}),sf=()=>kt(256,256,n=>{n.beginPath(),n.arc(128,128,120,0,7),tt(n,"#F28F7E",8),n.beginPath(),n.arc(128,128,96,0,7),tt(n,"#FFF9F0",4);for(let e=0;e<12;e++){let t=e*Math.PI/6;n.strokeStyle="#4a3b3f",n.lineWidth=6,n.beginPath(),n.moveTo(128+Math.sin(t)*76,128-Math.cos(t)*76),n.lineTo(128+Math.sin(t)*90,128-Math.cos(t)*90),n.stroke()}n.strokeStyle="#4a3b3f",n.lineCap="round",n.lineWidth=9,n.beginPath(),n.moveTo(128,128),n.lineTo(160,88),n.stroke(),n.lineWidth=6,n.beginPath(),n.moveTo(128,128),n.lineTo(118,52),n.stroke(),n.beginPath(),n.arc(128,128,9,0,7),tt(n,"#F28F7E",3)}),Ih=n=>kt(256,320,(e,t,i)=>{if(pt(e,6,6,t-12,i-12,8),tt(e,["#FFFFFF","#FFF7D8","#E9F3FF"][n%3],5),n%3===0)e.fillStyle="#8FC9E8",e.fillRect(30,30,196,130),da(e,3),e.beginPath(),e.ellipse(90,90,44,28,0,0,7),e.fillStyle="#88B89A",e.fill(),e.beginPath(),e.ellipse(170,108,32,20,0,0,7),e.fill(),e.fillStyle="#F28F7E",e.fillRect(30,190,120,20),e.fillStyle="#B8A8DA",e.fillRect(30,226,90,16);else if(n%3===1){e.beginPath();for(let s=0;s<10;s++){let r=s*Math.PI/5-Math.PI/2,a=s&1?34:88;e.lineTo(128+Math.cos(r)*a,130+Math.sin(r)*a)}e.closePath(),tt(e,"#EAB94E",4),e.fillStyle="#F28F7E",e.fillRect(40,250,176,22)}else e.fillStyle="#4F91C7",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillText("ABC",128,130),e.fillStyle="#F28F7E",e.fillRect(40,170,176,18),e.fillStyle="#88B89A",e.fillRect(40,208,120,16),e.fillStyle="#EAB94E",e.fillRect(40,246,150,16);e.beginPath(),e.arc(128,18,9,0,7),tt(e,"#F28F7E",3)});var rf=()=>kt(128,128,(n,e,t)=>{let i=n.createRadialGradient(64,64,4,64,64,62);i.addColorStop(0,"rgba(52,34,46,.55)"),i.addColorStop(1,"rgba(52,34,46,0)"),n.fillStyle=i,n.fillRect(0,0,e,t)}),Lh=()=>kt(64,64,(n,e,t)=>{n.filter="blur(5px)",n.fillStyle="rgba(50,30,40,.9)",n.fillRect(12,12,40,40)}),af=n=>kt(256,256,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s=0;s<=t;s+=32)e.strokeStyle="rgba(60,40,50,.28)",e.lineWidth=4,e.beginPath(),e.moveTo(s,0),e.lineTo(s,i),e.stroke(),e.fillStyle="rgba(255,255,255,.16)",e.fillRect(s+6,0,10,i)}),of=n=>kt(264*n.length,640,e=>{n.forEach((t,i)=>e.drawImage(Ax(t,i*3+1).image,i*264,0))},!0),lf=()=>kt(256,256,(n,e,t)=>{n.fillStyle="#B7D8A4",n.fillRect(0,0,e,t);for(let i=0;i<90;i++){let s=xn(i,5)*e,r=xn(i,9)*t,a=8+xn(i,2)*22;n.fillStyle=i&1?"rgba(255,255,255,.16)":"rgba(70,120,80,.10)",n.beginPath(),n.ellipse(s,r,a,a*.6,xn(i,4)*3,0,7),n.fill()}for(let i=0;i<140;i++){let s=xn(i,11)*e,r=xn(i,12)*t;n.strokeStyle=i&1?"rgba(255,255,255,.5)":"rgba(60,110,70,.35)",n.lineWidth=2,n.beginPath(),n.moveTo(s,r),n.lineTo(s+3,r-9),n.stroke()}},!0),ma=()=>kt(256,256,(n,e,t)=>{n.fillStyle="#EBD9B8",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let r=s*64+(i&1?32:0)-32,a=i*64;for(let l of[0,e])pt(n,r+l+2,a+2,60,60,6),n.fillStyle=s+i&1?"#F2E3C6":"#E6D2AE",n.fill(),n.strokeStyle="rgba(150,115,80,.5)",n.lineWidth=3,n.stroke(),fa(n,r+l+2,a+2,60,60,4)}for(let i=0;i<60;i++)n.fillStyle="rgba(255,255,255,.35)",n.fillRect(xn(i,3)*e,xn(i,8)*t,2.4,2.4)},!0),cf=(n,e,t="#FFF9F0")=>kt(768,576,(i,s,r)=>{i.fillStyle="#F4EBDB",i.fillRect(0,0,s,r),pt(i,22,22,s-44,r-44,36),tt(i,e,8),pt(i,52,52,s-104,r-104,24),i.fillStyle="rgba(255,255,255,.22)",i.fill();for(let a=0;a<6;a++)i.fillStyle="rgba(255,255,255,.18)",i.fillRect(70+a*112,70,44,r-140);i.fillStyle=t,i.font="800 140px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.strokeStyle="rgba(70,50,60,.35)",i.lineWidth=12,i.strokeText(n,s/2,r/2+6),i.fillText(n,s/2,r/2+6),fa(i,22,22,s-44,r-44,7)}),Dh=n=>kt(1024,160,(e,t,i)=>{pt(e,8,10,t-16,i-20,22),tt(e,"#F28F7E",6),pt(e,22,24,t-44,i-48,14),e.fillStyle="rgba(255,255,255,.2)",e.fill(),e.fillStyle="#FFF9F0",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(n,t/2,i/2+4);for(let s of[60,t-60]){e.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,l=r&1?9:22;e.lineTo(s+Math.cos(a)*l,i/2+Math.sin(a)*l)}e.closePath(),tt(e,"#EAB94E",3)}});var Nh=["#fde7d3","#fbdcc4","#f5cfa8","#f0c29b","#e3ad7f","#d9a074","#c58a5f","#a86f4f","#8d5a3e","#7a4a36","#5e3a2b","#4a2e24"],rs=["#2b2b33","#3a2a30","#5a3a35","#694a38","#9a653d","#b5563e","#c9773e","#e0b04e","#f1d98a","#d9d4cc","#8c8c96","#4F91C7","#b8a8da","#e8789a","#5e9c72","#e07a66"],Fh=["#3a2a30","#5a3a2a","#8a6a3a","#c98a3a","#4f8a5e","#4f91c7","#7a8794","#8173ae"],en=["#4f91c7","#326c9e","#8fc9e8","#88b89a","#5e9c72","#a9dcc0","#eab94e","#f8d977","#f6b294","#f28f7e","#d9564a","#eaa5b2","#b8a8da","#8173ae","#c98569","#9a653d","#fff6ea","#9da7aa","#4a3b3f","#2b3a55"],kh=["#fbf6ee","#313a3f","#d9564a","#4f91c7","#eab94e","#88b89a","#9a653d","#b8a8da"],vn=(...n)=>n.map(([e,t])=>({id:e,label:t})),ya={hairStyle:vn(["crop","Short crop"],["buzz","Buzz cut"],["undercut","Undercut"],["spiky","Spiky"],["messy","Messy"],["sidebang","Side bangs"],["curtains","Curtains"],["pixie","Pixie"],["bob","Bob"],["long","Long"],["wavy","Wavy long"],["curly","Curly puffs"],["afro","Afro"],["pony","Ponytail"],["pigtails","Pigtails"],["twinbuns","Twin buns"],["bun","Bun"],["topknot","Top knot"],["braids","Braids"]),eyeShape:vn(["round","Round"],["oval","Oval"],["wide","Wide"],["sleepy","Sleepy"],["happy","Happy"],["lash","Lashes"]),brow:vn(["soft","Soft"],["thick","Thick"],["thin","Thin"],["arch","Arched"],["none","None"]),mouthStyle:vn(["smile","Smile"],["grin","Grin"],["smirk","Smirk"],["flat","Calm"],["o","Surprised"],["cat","Cat"]),glasses:vn(["none","None"],["round","Round"],["square","Square"],["cat","Cat-eye"],["half","Half-rim"],["sun","Sunglasses"]),hat:vn(["none","None"],["cap","Cap"],["beanie","Beanie"],["bucket","Bucket hat"],["beret","Beret"],["headband","Headband"],["bow","Bow"],["flower","Flower"],["crown","Crown"],["headphones","Headphones"],["catears","Cat ears"]),top:vn(["tee","T-shirt"],["hoodie","Hoodie"],["sweater","Sweater"],["jersey","Jersey"],["blazer","Blazer"],["dress","Dress"],["overalls","Overalls"],["vest","Vest"],["tank","Tank top"]),pattern:vn(["solid","Solid"],["stripes","Stripes"],["dots","Dots"],["plaid","Plaid"],["hearts","Hearts"],["stars","Stars"]),bottom:vn(["pants","Pants"],["joggers","Joggers"],["shorts","Shorts"],["skirt","Skirt"]),shoeStyle:vn(["sneaker","Sneakers"],["boot","Boots"],["sandal","Sandals"],["plain","Plain shoes"]),packStyle:vn(["pack","Backpack"],["messenger","Messenger bag"],["mini","Mini pack"],["none","No bag"]),build:vn(["slim","Slim"],["regular","Regular"],["sturdy","Sturdy"]),age:vn(["k2","Grades K-2"],["g35","Grades 3-5"],["g68","Grades 6-8"],["hs","High school"])},hf=["she/her","he/him","they/them"],sr=()=>({name:"Student",pronouns:"they/them",age:"hs",skin:"#f0c29b",hairStyle:"bun",hair:"#5a3a35",hair2:null,eyeShape:"round",eyeColor:"#5a3a2a",brow:"soft",browColor:null,freckles:!1,mole:!1,nose:!1,blush:!0,mouthStyle:"smile",lip:"#8a4650",glasses:"round",glassColor:"#5b4048",hat:"none",hatColor:"#e07a66",earrings:null,scarf:null,badge:null,top:"hoodie",shirt:"#d9564a",shirt2:"#fff6ea",pattern:"solid",bottom:"pants",pants:"#4f5d75",shoeStyle:"sneaker",shoes:"#fbf6ee",packStyle:"pack",pack:"#8a5f6a",build:"regular",headSize:1});function Wi(n,e=11){return{id:e,age:n.age,skin:n.skin,hair:n.hair,hair2:n.hair2||void 0,style:n.hairStyle,shirt:n.shirt,shirt2:n.shirt2,top:n.top,pattern:n.pattern,bottom:n.bottom,pants:n.pants,eyeShape:n.eyeShape,eyeColor:n.eyeColor,brow:n.brow,browColor:n.browColor||void 0,freckles:n.freckles,mole:n.mole,nose:n.nose,blush:n.blush,mouthStyle:n.mouthStyle,lip:n.lip,glasses:n.glasses==="none"?!1:n.glasses,glassColor:n.glassColor,hat:n.hat==="none"?void 0:n.hat,hatColor:n.hatColor,earrings:n.earrings||void 0,scarf:n.scarf||void 0,badge:n.badge||void 0,shoeStyle:n.shoeStyle,shoes:n.shoes,packStyle:n.packStyle,pack:n.pack,build:n.build,headSize:n.headSize}}function gi(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var xt=(n,e)=>e[Math.floor(n()*e.length)],Ln=n=>ya[n].map(e=>e.id);function xa(n,e="hs"){let t=xt(n,Ln("top")),i=n()<.28?xt(n,Ln("hat").filter(r=>r!=="none")):"none",s=n()<.3?xt(n,Ln("glasses").filter(r=>r!=="none")):"none";return{...sr(),age:e,name:"",skin:xt(n,Nh),hairStyle:xt(n,Ln("hairStyle")),hair:xt(n,rs),hair2:n()<.16?xt(n,rs):null,eyeShape:xt(n,Ln("eyeShape")),eyeColor:xt(n,Fh),brow:xt(n,Ln("brow").filter(r=>r!=="none")),freckles:n()<.22,mole:n()<.1,nose:n()<.3,blush:n()<.8,mouthStyle:xt(n,Ln("mouthStyle")),glasses:s,glassColor:xt(n,["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da"]),hat:i,hatColor:xt(n,en),earrings:n()<.12?xt(n,["#eab94e","#fff6ea","#f28f7e"]):null,scarf:n()<.1?xt(n,en):null,badge:n()<.12?xt(n,en):null,top:t,shirt:xt(n,en),shirt2:xt(n,en),pattern:n()<.4?xt(n,Ln("pattern")):"solid",bottom:t==="dress"?"pants":xt(n,Ln("bottom")),pants:xt(n,en),shoeStyle:xt(n,Ln("shoeStyle")),shoes:xt(n,kh),packStyle:xt(n,Ln("packStyle")),pack:xt(n,en),build:xt(n,Ln("build")),headSize:.94+n()*.12}}var Uh=n=>[n.skin,n.hairStyle,n.hair,n.top,n.shirt,n.pattern,n.hat,n.glasses,n.bottom,n.pants].join("|"),Rx=["black","dark brown","chestnut","brown","caramel","auburn","ginger","blond","platinum","silver","grey","blue","lavender","pink","green","coral"],Px=["blue","navy","sky blue","sage green","green","mint","gold","yellow","peach","coral","red","pink","lilac","purple","terracotta","brown","cream","grey","charcoal","midnight blue"],Ix=n=>Rx[rs.indexOf(n)]??"colorful",ga=n=>Px[en.indexOf(n)]??"colorful";function va(n){let e=[],t=(i,s)=>ya[i].find(r=>r.id===s)?.label.toLowerCase()??s;return n.hat&&n.hat!=="none"&&e.push({key:"hat",phrase:`${ga(n.hatColor)} ${t("hat",n.hat)}`,noun:"hat"}),n.glasses&&n.glasses!=="none"&&e.push({key:"glasses",phrase:`${t("glasses",n.glasses)} glasses`,noun:"glasses"}),e.push({key:"hair",phrase:`${Ix(n.hair)} ${t("hairStyle",n.hairStyle)} hair`,noun:"hair"}),e.push({key:"top",phrase:`${n.pattern!=="solid"?n.pattern+" ":""}${ga(n.shirt)} ${t("top",n.top)}`,noun:n.top}),n.packStyle!=="none"&&e.push({key:"pack",phrase:`${ga(n.pack)} ${t("packStyle",n.packStyle)}`,noun:"bag"}),n.freckles&&e.push({key:"freckles",phrase:"freckles",noun:"freckles"}),n.earrings&&e.push({key:"earrings",phrase:"earrings",noun:"earrings"}),n.scarf&&e.push({key:"scarf",phrase:"scarf",noun:"scarf"}),e.push({key:"shoes",phrase:`${ga(n.shoes)==="colorful"?"":ga(n.shoes)+" "}${t("shoeStyle",n.shoeStyle)}`.trim(),noun:"shoes"}),e}var Lx=["cheerful","shy","sporty","nerdy","artsy","funny","curious","bossy","dreamy","kind"],uf=["Maya","Marcus","Priya","Leo","Amara","Diego","Sofia","Kenji","Zara","Eli","Nadia","Tobias","Imani","Mateo","Hana","Omar","Lucia","Jonah","Anika","Caleb","Mei","Ravi","Talia","Felix","Yara","Ben","Chloe","Dev","Esme","Finn","Grace","Hugo","Isla","Jamal","Keira","Liam","Mira","Noah","Olive","Pablo","Quinn","Rosa","Sam","Tessa","Uma","Victor","Willa","Xavier","Yusuf","Zoe","Aiden","Bella","Cyrus","Daria","Emil","Farah","Gus","Harper"],df=["Chen","Reed","Patel","Okafor","Santos","Nguyen","Kim","Haddad","Rivera","Brooks","Ivanov","Tanaka","Mensah","Larsen","Cruz","Adeyemi","Fischer","Ibrahim","Kowalski","Lopez","Morales","Novak","Osei","Park","Quintero","Rossi","Singh","Torres","Underwood","Vega","Walker","Yamada","Zhang","Abbott","Bishop","Castillo","Dalton","Ellis","Foster","Grant"],ff={young:["dinosaurs","building with blocks","drawing animals","jumping rope","bugs and butterflies","playing tag","stickers","toy trains","singing songs","baking cookies"],mid:["soccer","robotics club","drawing comics","chess","baking","birdwatching","skateboarding","minecraft builds","magic tricks","swimming","reading mysteries","playing violin","origami","space and rockets"],teen:["basketball","coding","photography","theater","poetry","painting","piano","track and field","debate","gardening","making music","volleyball","film editing","cooking"]},Dx=["tacos","mac and cheese","pizza","fried rice","mango slices","pancakes","dumplings","hummus and pita","grilled cheese","pasta","chicken nuggets","cheeseburgers","sushi rolls","samosas","peanut butter sandwiches"],Nx=["a dog named Biscuit","a cat named Pickles","a hamster named Nugget","two goldfish","a rabbit named Clover","a parrot named Mango","a turtle named Speedy","a gecko named Ziggy",null,null,null],Fx=["become an astronaut","open a bakery","play pro soccer","write a graphic novel","be a marine biologist","build robots","become a teacher","direct movies","be a vet","design video games","be a chef","become a pilot","run for mayor","be a musician"],pf=["always hums while working","carries a tiny notebook everywhere","says 'for real though' a lot","collects interesting rocks","never leaves without a snack","talks to plants","draws doodles on everything","counts steps in the hallway","makes up nicknames","loves puns","gets the hiccups when nervous","is always five minutes early"],kx=["is secretly afraid of the dark","still sleeps with a stuffed bunny","writes songs nobody has heard","wants to try out for the school play but is nervous","can solve a Rubik's cube in under a minute","once got lost in the library for an hour","has a crush on someone in the art club","is saving up for a telescope","is learning a new language in secret","feels nervous about speaking in class"],mf=["math","ela","science","history"],gf=["k2","g35","g68","hs","g35","g68","k2","hs","g68","g35"],Ux=(n,e)=>n==="k2"?["K","1","2"][e%3]:n==="g35"?["3","4","5"][e%3]:n==="g68"?["6","7","8"][e%3]:n==="hs"?["9","10","11","12"][e%4]:"Staff",Dn=(n,e)=>e[Math.floor(n()*e.length)];function Ox(n=48,e=20260930){let t=gi(e),i=new Set,s=new Set,r=[],a="",l="";for(let c=0;c<n;c++){let o=gf[c%gf.length],u,d=0;do u=xa(t,o),d++;while((i.has(Uh(u))||u.hairStyle===a||u.hair===l)&&d<60);i.add(Uh(u)),a=u.hairStyle,l=u.hair,(o==="k2"||o==="g35")&&(u.glasses=t()<.12?u.glasses:"none",u.top==="blazer"&&(u.top="hoodie"));let h=uf[c%uf.length],f=Dn(t,df),g=`${h} ${f}`;for(;s.has(g);)f=Dn(t,df),g=`${h} ${f}`;s.add(g),u.name=h;let S=o==="k2"||o==="g35"?"young":o==="g68"?"mid":"teen",m=ff[S],p=[Dn(t,m)];for(;p.length<3;){let R=Dn(t,[...m,...ff.mid]);p.includes(R)||p.push(R)}let M=Dn(t,mf),A=Dn(t,mf.filter(R=>R!==M)),v=Lx[(c*3+Math.floor(t()*10))%10],w=Math.floor(t()*4),T=Ux(o,w);r.push({id:c,key:`n${c}`,name:g,first:h,role:"student",age:o,grade:T,spec:u,look:{...Wi(u,c),tag:!1},personality:v,interests:p,favSubject:M,hardSubject:A,food:Dn(t,Dx),pet:Dn(t,Nx),dream:Dn(t,Fx),quirk:Dn(t,pf),secret:Dn(t,kx),bestFriend:(c+1+Math.floor(t()*5))%n,rival:t()<.3?(c+7+Math.floor(t()*9))%n:null,bio:`${h} is in grade ${T}, loves ${p[0]} and ${p[1]}, and ${Dn(t,pf)}.`})}for(let c of r)c.bestFriend===c.id&&(c.bestFriend=(c.id+1)%n);return r}var ar=Ox(56),or=n=>ar[n]??bn.find(e=>e.id===n),Bx=n=>({...xa(gi(n.name?.length??5),"adult"),...n});function rr(n,e,t,i,s,r,a={}){let l=Bx({name:e.split(" ").pop(),age:"adult",...s}),c=e.split(" ").pop();return{id:n,key:`s${n}`,name:e,first:c,role:"staff",title:t,age:"adult",grade:"Staff",spec:l,look:{...Wi(l,n),tag:!1},personality:r,interests:["helping students","coffee","crossword puzzles"],favSubject:i??"history",hardSubject:"math",food:"a good salad",pet:null,dream:"see every student find something they love",quirk:"keeps spare pencils in every pocket",secret:"still has their own first-grade report card",bestFriend:0,rival:null,bio:`${e} is ${t}.`,...a}}var bn=[rr(100,"Mr. Okafor","the hall monitor",null,{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"crop",top:"vest",shirt:"#c98569",shirt2:"#fff6ea",bottom:"pants",pants:"#2b3a55",hat:"none",glasses:"none",packStyle:"none",brow:"thick",mouthStyle:"smile"},"kind"),rr(101,"Ms. Alvarez","a teacher on hall duty","ela",{skin:"#f0c29b",hair:"#b5563e",hairStyle:"bun",top:"sweater",shirt:"#8173ae",glasses:"cat",packStyle:"messenger",pack:"#9a653d",bottom:"skirt",pants:"#4a3b3f",earrings:"#eab94e"},"cheerful"),rr(110,"Ms. Keisha Brown","the math teacher","math",{skin:"#a86f4f",hair:"#2b2b33",hairStyle:"curly",top:"blazer",shirt:"#f6b294",shirt2:"#fff6ea",glasses:"none",packStyle:"none",bottom:"pants",pants:"#4a3b3f"},"nerdy"),rr(111,"Mr. James Lee","the English teacher","ela",{skin:"#d9a074",hair:"#694a38",hairStyle:"crop",top:"sweater",shirt:"#8fc9e8",glasses:"round",packStyle:"none",bottom:"pants",pants:"#5b6b8c"},"dreamy"),rr(112,"Mr. Jamal Carter","the science teacher","science",{skin:"#7a4a36",hair:"#3a2a30",hairStyle:"afro",top:"tee",shirt:"#a9dcc0",pattern:"solid",glasses:"none",packStyle:"none",bottom:"pants",pants:"#5f7a68"},"curious"),rr(113,"Mr. Marcus Reed","the history teacher","history",{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"buzz",top:"blazer",shirt:"#c98569",glasses:"square",packStyle:"none",bottom:"pants",pants:"#2b3a55",brow:"thick"},"funny")],zx={math:bn[2],ela:bn[3],science:bn[4],history:bn[5]},yf=24;var Oh="unify.social.v1",_a=()=>new Date().toISOString().slice(0,10),Hx=()=>({met:!1,fr:0,talks:0,lastDay:"",lastAt:0,topics:[],facts:{},log:[],quiz:{right:0,total:0},mood:0,helped:0,hurt:0,classNotes:[],overheard:[],seenInClass:0,called:0}),Vl=()=>({v:1,mem:{},profile:{name:"",avatar:sr(),facts:{},stats:{talks:0,quizRight:0,quizTotal:0,hands:0},created:Date.now(),hasAvatar:!1}}),_n=Vl(),xf=0,lr=new Set;function vf(){try{let n=JSON.parse(localStorage.getItem(Oh)||"null");n&&n.v===1&&(_n={...Vl(),...n,profile:{...Vl().profile,...n.profile}},_n.profile.avatar={...sr(),..._n.profile.avatar||{}})}catch{}}function ba(){clearTimeout(xf),xf=setTimeout(()=>{try{localStorage.setItem(Oh,JSON.stringify(_n))}catch{}},120)}vf();try{addEventListener("storage",n=>{n.key===Oh&&(vf(),lr.forEach(e=>e()))})}catch{}var Ae={get profile(){return _n.profile},setProfile(n){_n.profile={..._n.profile,...n},ba(),lr.forEach(e=>e())},learn(n,e){_n.profile.facts[n]=e,ba()},mem(n){let e=String(n);return _n.mem[e]??(_n.mem[e]=Hx())},peek(n){return _n.mem[String(n)]},edit(n,e){e(Ae.mem(n)),ba(),lr.forEach(t=>t())},friends(){return Object.entries(_n.mem).filter(([,n])=>n.met).map(([n,e])=>({id:n,mem:e})).sort((n,e)=>e.mem.fr-n.mem.fr)},onChange(n){return lr.add(n),()=>lr.delete(n)},reset(){_n=Vl(),ba(),lr.forEach(n=>n())},save:ba},as=n=>n>=85?"best friend":n>=60?"close friend":n>=30?"friend":n>=10?"classmate":"new face",Bh=n=>Math.min(5,Math.ceil(n/20));function os(n,e,t){Ae.edit(n,i=>{i.log.push({who:e,text:t.slice(0,220),t:Date.now()}),i.log.length>24&&i.log.splice(0,i.log.length-24)})}function zh(n,e){Ae.edit(n,t=>{t.fr=Math.max(0,Math.min(100,t.fr+e)),e<0&&t.hurt++})}var bf=1.75/45,Sn=(n,e)=>new L(n-56/2,0,e-44/2);var Vx=["#7fb2d6","#f2a79b","#9fd0b0","#f4d488"],ls={math:"#4F91C7",ela:"#88B89A",science:"#8FC9E8",history:"#C98569"},Gl={math:"MATH",ela:"ELA",science:"SCIENCE",history:"HISTORY"};var Mn=(n,e)=>{let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},_f=[{key:"math",label:"Math",color:ls.math},{key:"ela",label:"ELA",color:ls.ela},{key:"science",label:"Science",color:ls.science},{key:"history",label:"History",color:ls.history},{key:"news",label:"Newsroom",color:"#B8A8DA"},{key:"library",label:"Library",color:"#88B89A"},{key:"plaza",label:"Plaza fountain",color:"#EAB94E"},{key:"entrance",label:"Main entrance",color:"#F28F7E"}],Wl=class{constructor(e){this.host=e;this.scene=new Pr;this.camera=new Kt(48,1,.1,260);this.clock=0;this.idx=-1;this.speed=1;this.view="close";this.tint=[255,255,255,0];this.students=[];this.inDoor=null;this.onToast=()=>{};this.keys={};this.input={x:0,y:0};this.rotate=0;this.inputLocked=!1;this.onTick=[];this.onTap=()=>{};this.yaw=0;this.pitch=.62;this.zoom=1;this.fpitch=0;this.navLabel="";this.nav=null;this.walkers=[];this.open=[];this.occl=[];this.shadowR=0;this.texCache=new Map;this.camPos=new L(0,6,8);this.camLook=new L(0,1,-4);this.last=performance.now();this.t=0;this.blobTex=rf();this.ray=new qr;this.gate=()=>null;this.onGate=()=>{};this.frame=e=>{let t=Math.min(window.__maxDt??.05,(e-this.last)/1e3);this.last=e,this.t+=t;let i=t*this.speed;this.clock+=i,this.clock>=Eh&&(this.clock-=Eh);let s=Yd(this.clock);s!==this.idx&&(this.idx=s,this.enterPeriod(s));let r=this.inputLocked?0:(this.keys.e?1:0)-(this.keys.q?1:0)+this.rotate;r&&(this.yaw+=r*1.9*t);let a=new L;this.camera.getWorldDirection(a),a.y=0,a.lengthSq()<1e-4&&a.set(0,0,-1),a.normalize();for(let o of this.students)if(o.pending&&(o.pending.delay-=i,o.pending.delay<=0&&this.begin(o)),!o.hidden){if(o.talking){o.moving=!1,o.frame=0;continue}if(o.fade<1&&(o.fade=Math.min(1,o.fade+i*3),o.mat.opacity=o.fade),o.path.length){let u=o.path[0],d=u.clone().sub(o.pos);d.y=0;let h=d.length(),f=o.speed*i;h<=f?(o.pos.copy(u),o.path.shift()):(d.normalize(),o.pos.addScaledVector(d,f),o.dir=this.dirFrom(d,a,o.dir)),o.moving=!0,o.frame=1+Math.floor(this.t*o.speed*3.4)%4,!o.path.length&&o.hideOnArrive&&(o.hidden=!0,o.sprite.visible=!1,o.blob.visible=!1,o.moving=!1)}else o.moving=!1,o.frame=0}this.patrol(i,a);for(let o of this.onTick)o(t,i);this.movePlayer(t,a),this.updateCamera(t),this.fadeOccluders(t),this.player.sprite.visible=this.view!=="first",this.player.blob.visible=this.view!=="first";for(let o of[...this.students,this.player,this.monitor,this.teacher])if(!o.hidden){if(o.sprite.position.copy(o.pos),this.view==="first"&&o!==this.player){let u=o.pos.distanceTo(this.camera.position)<1.1;o.sprite.visible=!u,o.blob.visible=!u}else o!==this.player&&(o.sprite.visible=!0,o.blob.visible=!0);o.blob.position.set(o.pos.x,.02,o.pos.z),this.setFrame(o,o.dir,o.frame)}let l=Wn[this.idx].tint,c=Math.min(1,t*1.5);for(let o=0;o<4;o++)this.tint[o]+=(l[o]-this.tint[o])*c;this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.frame)};let t=this.renderer=new Fl({antialias:!0,alpha:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Ho,t.outputColorSpace=zt,e.appendChild(t.domElement),this.scene.background=new Ge("#EADFCB"),this.scene.fog=new Rr("#EADFCB",80,190),this.reachable(),this.buildLights(),this.buildCampus(),this.buildOutside(),this.buildPeople(),addEventListener("resize",()=>this.resize()),this.resize(),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&(this.keys[i.key.toLowerCase()]=!0,i.key.startsWith("Arrow")&&i.preventDefault())}),addEventListener("keyup",i=>{this.keys[i.key.toLowerCase()]=!1}),addEventListener("blur",()=>{this.keys={}}),addEventListener("message",i=>{let s=i.data;s&&s.type==="unify:exit"&&this.placeAtDoor(s.room)}),this.bindPointer(t.domElement),this.setView("close",!0),requestAnimationFrame(this.frame)}resize(){let e=this.host.clientWidth||innerWidth,t=this.host.clientHeight||innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.fov=e/t<.8?62:48,this.camera.updateProjectionMatrix()}tex(e,t){let i=this.texCache.get(e);return i||(i=t(),this.texCache.set(e,i)),i}rep(e,t,i,s=1){let r=`${e}@${i.toFixed(2)}x${s.toFixed(2)}`,a=this.texCache.get(r);return a||(a=this.tex(e,t).clone(),a.repeat.set(i,s),a.needsUpdate=!0,this.texCache.set(r,a)),a}bindPointer(e){let t=!1,i=0,s=0,r=0,a=0,l=0;e.addEventListener("pointerdown",c=>{t=!0,i=r=c.clientX,s=a=c.clientY,l=performance.now(),e.setPointerCapture(c.pointerId)}),e.addEventListener("pointermove",c=>{if(!t)return;let o=c.clientX-i,u=c.clientY-s;i=c.clientX,s=c.clientY,this.yaw-=o*.0065,this.view==="first"?this.fpitch=Math.max(-.6,Math.min(.6,this.fpitch-u*.004)):this.pitch=Math.max(.2,Math.min(1.3,this.pitch+u*.004))}),e.addEventListener("pointerup",c=>{let o=t;t=!1,o&&Math.hypot(c.clientX-r,c.clientY-a)<7&&performance.now()-l<500&&this.handleTap(c.clientX,c.clientY)}),e.addEventListener("pointercancel",()=>{t=!1}),e.addEventListener("wheel",c=>{c.preventDefault(),this.zoom=Math.max(.45,Math.min(1.6,this.zoom*Math.exp(c.deltaY*.0012)))},{passive:!1})}buildLights(){this.scene.add(new Gr(16774888,14996404,2.1));let e=this.sun=new Xr(16773336,1.25);e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=70,e.shadow.bias=-4e-4,e.shadow.radius=5,this.scene.add(e,e.target)}std(e,t="#ffffff"){return new Xt({map:e,color:t,roughness:.95,metalness:0})}plain(e){return new Xt({color:e,roughness:1})}box(e,t,i,s,r,a,l,c={}){let{outline:o=!0,occlude:u=!1,shadow:d=!0}=c;u&&(s=(Array.isArray(s)?s:[s]).map(f=>f.clone()));let h=new Fe(new ei(e,t,i),s);return h.position.set(r,a,l),h.castShadow=d,h.receiveShadow=!0,this.scene.add(h),o&&h.add(new ji(new es(h.geometry),new Ri({color:7166559,transparent:!0,opacity:.55}))),u&&this.occl.push({mats:Array.isArray(s)?s:[s],box:new En().setFromCenterAndSize(h.position,new L(e+.05,t,i+.05)),o:1}),h}card(e,t,i,s,r,a,l,c=!1){let o=new jt,u=new Fe(new Dt(t*1.12,i*1.12),new hn({map:this.tex("cardsh",()=>Lh()),transparent:!0,opacity:.55,depthWrite:!1}));u.position.set(0,-.05,0);let d=new Fe(new Dt(t,i),c?new hn({map:e,transparent:!0}):new Xt({map:e,roughness:1,transparent:!0}));return d.position.z=.025,d.receiveShadow=!0,o.add(u,d),o.position.set(s,r,a),o.rotation.y=l,this.scene.add(o),d}flat(e,t,i,s,r,a=.012,l=0){let c=new Dt(t,i);c.rotateX(-Math.PI/2),l&&c.rotateY(l);let o=new Fe(c,this.std(e));return o.position.set(s,a,r),o.receiveShadow=!0,this.scene.add(o),o}rotOf(e){return e==="S"?0:e==="N"?Math.PI:e==="E"?Math.PI/2:-Math.PI/2}onFace(e,t,i,s){return t==="S"?{x:e.x+e.w*i-56/2,z:e.y+e.h-44/2+s}:t==="N"?{x:e.x+e.w*i-56/2,z:e.y-44/2-s}:t==="E"?{x:e.x+e.w-56/2+s,z:e.y+e.h*i-44/2}:{x:e.x-56/2-s,z:e.y+e.h*i-44/2}}buildCampus(){let e=this.scene,t=this.plain("#F7ECD6"),i=this.plain("#D8C6A4"),s=new Fe(new Dt(63,51),new hn({map:this.tex("dio",()=>Lh()),transparent:!0,opacity:.7,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(.4,-.02,.4),e.add(s);let r=new Fe(new Dt(56,44),this.std(this.rep("floor",()=>Qd(),56/2,44/2)));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),this.flat(this.rep("stoneA",()=>ma(),46/4,10/4),46,10,0,0,.012),this.flat(this.rep("stoneB",()=>ma(),14/4,34/4),14,34,0,0,.012);let a=(d,h,f,g)=>this.flat(this.rep("rug",()=>ef(),1,d/4),2,d,h,f,.014,g?Math.PI/2:0);a(52,0,-44/2+2.5,!0),a(40,-56/2+2.5,0,!1),a(40,56/2-2.5,0,!1),a(48/2-1,-56/4-2.5,44/2-2.5,!0),a(48/2-1,56/4+2.5,44/2-2.5,!0);let l=(d,h,f,g,S)=>{let m=this.std(this.rep("wall",()=>pa(),d/4)),p=[i,i,t,i,i,i];p[S]=m,this.box(g?d:.3,4.2,g?.3:d,p,h,4.2/2,f,{outline:!1,occlude:!0})};l(56+.6,0,-44/2-.15,!0,4),l(44,-56/2-.15,0,!1,0),l(44,56/2+.15,0,!1,1);let c=In.gap.x0-56/2,o=In.gap.x1-56/2,u=44/2+.15;l(c+56/2+.3,(-56/2-.3+c)/2,u,!0,5),l(56/2+.3-o,(o+56/2+.3)/2,u,!0,5),this.box(o-c,.9,.3,[i,i,t,i,i,this.std(this.rep("wall",()=>pa(),2))],(c+o)/2,4.2-.45,u,{outline:!1}),this.card(this.tex("banner",()=>Dh("UNIFY ACADEMY")),7.6,1.2,(c+o)/2,3.2,44/2-.05,Math.PI,!0),this.card(this.tex("exit",()=>Dh("WELCOME")),5.2,.8,(c+o)/2,3.2,44/2+.35,0,!0),this.card(this.tex("clock",()=>sf()),1.1,1.1,-9,3.05,-44/2+.17,0);for(let d=4;d<53;d+=6)Math.abs(d-56/2)>1.5&&this.card(this.tex("win",()=>ir()),1.5,1.9,d-56/2,3.05,-44/2+.17,0);for(let d=4;d<53;d+=6)(d<In.gap.x0-2||d>In.gap.x1+2)&&this.card(this.tex("win",()=>ir()),1.5,1.9,d-56/2,3.05,44/2-.17,Math.PI);for(let d=5;d<41;d+=6)this.card(this.tex("win",()=>ir()),1.5,1.9,-56/2+.17,3.05,d-44/2,Math.PI/2),this.card(this.tex("win",()=>ir()),1.5,1.9,56/2-.17,3.05,d-44/2,-Math.PI/2);{let d=Hi.cx-56/2,h=-44/2;this.box(2.3,3.5,.18,this.plain("#9A653D"),d,1.75,h+.09);let f=new Fe(new Dt(1.95,3.15),new Xt({map:this.tex("door-news",()=>zl("#B8A8DA")),roughness:.95}));f.position.set(d,1.6,h+.19),f.receiveShadow=!0,e.add(f);let g=new Fe(new Dt(1.9,.48),new hn({map:this.tex("sign-news",()=>Hl("NEWSROOM","#8173AE")),transparent:!0}));g.position.set(d,3.8,h+.2),e.add(g)}{let d=Vi.cx-56/2,h=44/2;this.box(2.3,3.5,.18,this.plain("#9A653D"),d,1.75,h-.09);let f=new Fe(new Dt(1.95,3.15),new Xt({map:this.tex("door-lib",()=>zl("#88B89A")),roughness:.95}));f.position.set(d,1.6,h-.19),f.rotation.y=Math.PI,f.receiveShadow=!0,e.add(f);let g=new Fe(new Dt(1.9,.48),new hn({map:this.tex("sign-lib",()=>Hl("LIBRARY","#4E8A64")),transparent:!0}));g.position.set(d,3.8,h-.2),g.rotation.y=Math.PI,e.add(g)}this.bunting([[-56/2+.06,-44/2+.06,56/2-.06,-44/2+.06],[-56/2+.06,-44/2+.06,-56/2+.06,44/2-.06],[56/2-.06,-44/2+.06,56/2-.06,44/2-.06]],3.95);for(let d of ha){let h=d.rect,f=d.subject,g=ri.find(H=>H.subject===f),S=this.std(this.rep("wall",()=>pa(),h.h/4)),m=this.std(this.rep("wall",()=>pa(),h.w/4)),p=this.std(this.tex(`roof-${f}`,()=>cf(Gl[f],ls[f],f==="science"?"#3b3340":"#FFF9F0")));this.box(h.w,4.2,h.h,[S,S,p,i,m,m],h.x+h.w/2-56/2,4.2/2,h.y+h.h/2-44/2,{occlude:!0});let M=["N","S","E","W"];for(let H of M){let Y=H==="N"||H==="S"?h.w:h.h,F=Math.round(Y/4.6);for(let ne=0;ne<F;ne++){let X=(ne+.5)/F,K=this.onFace(h,H,X,.17),B=H==="N"||H==="S"?h.x+h.w*X:g.cx;H===g.face&&Math.abs(B-g.cx)<2.6||this.card(this.tex("win",()=>ir()),1.5,1.9,K.x,3.05,K.z,this.rotOf(H))}}let A=g.face,v=(H,Y)=>({p:this.onFace(h,A,(g.cx+H-h.x)/h.w,.17),i:Y}),w=v(-5.2,0),T=v(5.2,1),R=v(-3.4,2),x=v(3.4,3);this.card(this.tex(`po${w.i}`,()=>Ih(w.i+(f==="ela"?1:0))),1,1.25,w.p.x,1.45,w.p.z,this.rotOf(A)),this.card(this.tex(`po${T.i}`,()=>Ih(T.i+(f==="math"?1:0))),1,1.25,T.p.x,1.45,T.p.z,this.rotOf(A)),this.card(this.tex("board",()=>tf()),1.6,1.1,R.p.x,2.2,R.p.z,this.rotOf(A)),this.card(this.tex("trophy",()=>nf()),1.1,1,x.p.x,2.2,x.p.z,this.rotOf(A));let E=A==="S"?1:-1,P=g.cy-44/2,_=g.cx-56/2,I=E>0?0:Math.PI;this.box(2.3,3.5,.18,this.plain("#9A653D"),_,1.75,P+E*.09,{occlude:!1});let U=new Fe(new Dt(1.95,3.15),new Xt({map:this.tex(`door-${f}`,()=>zl(ls[f])),roughness:.95}));U.position.set(_,1.6,P+E*.19),U.rotation.y=I,U.receiveShadow=!0,e.add(U);let D=new Fe(new Dt(1.9,.48),new hn({map:this.tex(`sign-${f}`,()=>Hl(Gl[f],ls[f],f==="science"?"#3b3340":"#FFF9F0")),transparent:!0}));D.position.set(_,3.8,P+E*.2),D.rotation.y=I,e.add(D)}Rh.forEach((d,h)=>{let f=d.rect,g=d.face==="N"||d.face==="S"?f.w:f.h,S=this.std(this.rep("lockers",()=>of(Vx),g/4)),m=this.plain("#9db8c8"),p=this.plain("#FFF6E6"),M=[m,m,p,m,m,m];M[{E:0,W:1,S:4,N:5}[d.face]]=S,this.box(f.w,2.3,f.h,M,f.x+f.w/2-56/2,1.15,f.y+f.h/2-44/2,{occlude:!0})});for(let d of Ph){let h=d.x-56/2,f=d.y-44/2;d.kind==="tree"?this.tree(h,f):d.kind==="fountain"?this.fountain(h,f):d.kind==="table"?this.table(h,f):d.kind==="bench"?this.bench(h,f,d.rot??0):d.kind==="planter"?this.plant(h,f):this.lamp(h,f,Wx(d.x+d.y))}}tree(e,t){let i=new jt,s=new Fe(new Gt(.62,.5,.5,10),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=new Fe(new Gt(.1,.16,1.6,6),this.plain("#9A653D"));r.position.y=1.2,r.castShadow=!0,i.add(r),[[0,2.5,0,1.05,"#5E9C72"],[.45,2,.2,.7,"#88B89A"],[-.4,2.15,-.25,.75,"#3F7655"]].forEach(([a,l,c,o,u])=>{let d=new Fe(new Ws(o,0),new Xt({color:u,roughness:1,flatShading:!0}));d.position.set(a,l,c),d.castShadow=!0,i.add(d)}),i.position.set(e,0,t),this.scene.add(i)}fountain(e,t){let i=new jt,s=this.plain("#F7ECD6"),r=new Fe(new Gt(2.25,2.35,.6,28),s);r.position.y=.3,r.castShadow=r.receiveShadow=!0,i.add(r),r.add(new ji(new es(r.geometry,40),new Ri({color:7166559,transparent:!0,opacity:.5})));let a=new Fe(new Gt(1.95,1.95,.05,28),new Xt({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25,roughness:.4}));a.position.y=.6,i.add(a);let l=new Fe(new Gt(.3,.42,1.5,14),s);l.position.y=1.2,l.castShadow=!0,i.add(l);let c=new Fe(new Gt(.95,.5,.3,20),s);c.position.y=1.9,c.castShadow=!0,i.add(c);let o=new Fe(new Gt(.8,.8,.05,20),new Xt({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25}));o.position.y=2.05,i.add(o);let u=new Fe(new Ii(.22,.9,10),new Xt({color:"#DDF3FB",emissive:"#DDF3FB",emissiveIntensity:.4,transparent:!0,opacity:.85}));u.position.y=2.55,i.add(u),i.position.set(e,0,t),this.scene.add(i)}table(e,t){let i=new jt,s=new Fe(new Gt(.8,.8,.08,20),this.plain("#F1C887"));s.position.y=.78,s.castShadow=s.receiveShadow=!0,i.add(s);let r=new Fe(new Gt(.09,.14,.78,8),this.plain("#9A653D"));r.position.y=.39,i.add(r),["#F28F7E","#8FC9E8","#A9DCC0","#B8A8DA"].forEach((a,l)=>{let c=l/4*Math.PI*2+.4,o=new Fe(new Gt(.22,.2,.46,10),this.plain(a));o.position.set(Math.cos(c)*1,.23,Math.sin(c)*1),o.castShadow=!0,i.add(o)}),i.position.set(e,0,t),this.scene.add(i)}bench(e,t,i){let s=new jt;s.add(this.part(.62,.1,1.8,"#F1C887",0,.5,0)),s.add(this.part(.12,.45,1.7,"#9A653D",-.24,.25,0)),s.add(this.part(.1,.5,1.8,"#F28F7E",-.3,.8,0)),s.rotation.y=i,s.position.set(e,0,t),this.scene.add(s)}part(e,t,i,s,r,a,l){let c=new Fe(new ei(e,t,i),this.plain(s));return c.position.set(r,a,l),c.castShadow=!0,c.receiveShadow=!0,c}lamp(e,t,i){let s=new jt,r=new Fe(new Gt(.05,.07,3,6),this.plain("#9A653D"));r.position.y=1.5,r.castShadow=!0,s.add(r);let a=new Fe(new zr(.34,18,12),new Xt({map:this.tex(`lan-${i}`,()=>af(i)),emissive:i,emissiveIntensity:.3,roughness:1}));a.scale.y=1.2,a.position.y=3.2,a.castShadow=!0,s.add(a),s.position.set(e,0,t),this.scene.add(s)}plant(e,t){let i=new jt,s=new Fe(new Gt(.5,.38,.5,14),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=["#5E9C72","#88B89A","#3F7655","#A9DCC0"];for(let a=0;a<12;a++){let l=a/12*Math.PI*2,c=new Fe(new Ii(.11,1+a%3*.25,4),this.plain(r[a%4]));c.position.set(Math.cos(l)*.26,.95,Math.sin(l)*.26),c.rotation.set(Math.sin(l)*.5,0,-Math.cos(l)*.5),c.castShadow=!0,i.add(c)}i.position.set(e,0,t),this.scene.add(i)}bunting(e,t){let i=[15896446,15382862,9423336,11132096,12101850,15377842].map(l=>new Ge(l)),s=[],r=[];for(let[l,c,o,u]of e){let d=Math.hypot(o-l,u-c),h=Math.floor(d/.9),f=(o-l)/d,g=(u-c)/d;for(let S=0;S<h;S++){let m=.45+S*.9,p=l+f*m,M=c+g*m,A=i[S%6];s.push(p-f*.22,t,M-g*.22,p+f*.22,t,M+g*.22,p,t-.5,M);for(let v=0;v<3;v++)r.push(A.r,A.g,A.b)}}let a=new Lt;a.setAttribute("position",new ct(s,3)),a.setAttribute("color",new ct(r,3)),this.scene.add(new Fe(a,new hn({vertexColors:!0,side:An})))}buildOutside(){let e=this.scene,t=this.rep("grass",()=>lf(),60,60),i=new Fe(new Dt(480,480),this.std(t));i.rotation.x=-Math.PI/2,i.position.y=-.04,i.receiveShadow=!0,e.add(i),this.flat(this.rep("stoneP",()=>ma(),2,7),7.4,28,0,44/2+14,-.02);let s=new Fe(new Br(9,40),this.std(this.rep("stoneD",()=>ma(),5,5)));s.rotation.x=-Math.PI/2,s.position.set(0,-.015,44/2+30),s.receiveShadow=!0,e.add(s);let r=[];for(let h=0;h<900&&r.length<190;h++){let f=(Mn(h,1)-.5)*150,g=(Mn(h,2)-.5)*140+8;Math.abs(f)<56/2+5&&Math.abs(g)<44/2+5||Math.abs(f)<6&&g>0||Math.hypot(f,g-(44/2+30))<11||r.push({x:f,z:g,s:.8+Mn(h,3)*.9})}let a=new Vs(new Ws(1.5,0),new Xt({roughness:1,flatShading:!0}),r.length),l=new Vs(new Gt(.16,.24,1.8,6),this.plain("#9A653D"),r.length),c=new st,o=["#5E9C72","#88B89A","#3F7655","#A9DCC0","#EAB94E","#F2A79B"];r.forEach((h,f)=>{c.compose(new L(h.x,2.7*h.s,h.z),new mn().setFromEuler(new zn(0,Mn(f,5)*6,0)),new L(h.s,h.s*1.15,h.s)),a.setMatrixAt(f,c),a.setColorAt(f,new Ge(o[Mn(f,6)<.12?4+(f&1):Math.floor(Mn(f,7)*4)])),c.compose(new L(h.x,.9*h.s,h.z),new mn,new L(h.s,h.s,h.s)),l.setMatrixAt(f,c)}),a.castShadow=l.castShadow=!0,e.add(a,l);let u=["#F2A79B","#F4D488","#9FD0B0","#9CC3E0","#E8C39A","#C9B7E8"],d=["#C98569","#9A653D","#7C94B0","#B8604F"];for(let h=0;h<26;h++){let f=h/26*Math.PI*2+Mn(h,8)*.2,g=78+Mn(h,9)*18,S=Math.cos(f)*g*1.1,m=Math.sin(f)*g*.85+6;if(Math.abs(S)<8&&m>0)continue;let p=5+Mn(h,10)*4,M=3.5+Mn(h,11)*2.5,A=new jt,v=new Fe(new ei(p,M,p*.9),this.plain(u[h%6]));v.position.y=M/2,v.castShadow=!0,A.add(v),v.add(new ji(new es(v.geometry),new Ri({color:7166559,transparent:!0,opacity:.45})));let w=new Fe(new Ii(p*.82,M*.7,4),this.plain(d[h%4]));w.position.y=M+M*.35,w.rotation.y=Math.PI/4,w.castShadow=!0,A.add(w),A.position.set(S,0,m),A.rotation.y=Mn(h,12)*6,e.add(A)}for(let h=0;h<14;h++){let f=h/14*Math.PI*2+.2,g=118+Mn(h,13)*30,S=14+Mn(h,14)*14,m=new Fe(new Ii(S*1.5,S,6),new Xt({color:["#A9CDB8","#B7D8A4","#9CC3A8"][h%3],roughness:1,flatShading:!0}));m.position.set(Math.cos(f)*g*1.15,S/2-.5,Math.sin(f)*g*.9+6),e.add(m)}}makePerson(e,t,i=si[t.age??"hs"]){let s=new Qi(Jd(t));s.colorSpace=zt,s.repeat.set(1/la,1/oa.length),s.anisotropy=4;let r=new Hs({map:s,transparent:!0}),a=new Nr(r);a.center.set(.5,Ch/nr),a.scale.set(aa/ca*bf*i,nr/ca*bf*i,1),this.scene.add(a);let l=new Fe(new Dt(1.1,.6),new hn({map:this.blobTex,transparent:!0,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.y=.02,this.scene.add(l),{id:e,look:t,sprite:a,mat:r,tex:s,blob:l,pos:new L,dir:0,frame:0,moving:!1}}reachable(){let e=new Set,t=[In.tile.y*56+In.tile.x];for(e.add(t[0]);t.length;){let i=t.pop(),s=i%56,r=Math.floor(i/56);for(let[a,l]of[[1,0],[-1,0],[0,1],[0,-1]]){let c=s+a,o=r+l,u=o*56+c;c<0||o<0||c>=56||o>=44||ai[o][c]!=="."||e.has(u)||(e.add(u),t.push(u))}}this.open=[...e].map(i=>({x:i%56,y:Math.floor(i/56)})).filter(i=>i.y<42)}buildPeople(){let e=Sn(In.tile.x+.5,In.tile.y+.5);this.students=ar.slice(0,yf).map((t,i)=>{let s=t.age,r=this.makePerson(t.id,t.look);r.pos.copy(e),r.sprite.visible=!1,r.blob.visible=!1,r.def=t;let a=ri[i%4];return Object.assign(r,{hidden:!0,path:[],speed:zi(2.3,3.1)*(s==="k2"?.8:s==="g35"?.9:s==="g68"?.97:1),pending:null,lastDoor:{x:Math.floor(a.approach.x),y:Math.floor(a.approach.y)},hideOnArrive:!1,fade:1})}),this.player=this.makePerson(11,{...Wi(Ae.profile.avatar,11),tag:!0}),this.player.pos.copy(Sn(28,35)),this.monitor=this.makePerson(bn[0].id,bn[0].look),this.monitor.def=bn[0],this.monitor.pos.copy(Sn(10.5,18.5)),this.teacher=this.makePerson(bn[1].id,bn[1].look),this.teacher.def=bn[1],this.teacher.pos.copy(Sn(46.5,26.5)),this.walkers=[{p:this.monitor,stops:[[10,18],[46,18],[53,22],[46,26],[10,26],[2,22],[28,2]],path:[],leg:0,speed:1.15},{p:this.teacher,stops:[[46,26],[28,18],[10,26],[28,41],[53,30],[28,2],[2,10]],path:[],leg:0,speed:1}]}patrol(e,t){for(let i of this.walkers){let s=i.p;if(s.talking){s.moving=!1,s.frame=0;continue}if(!i.path.length){let o=Math.floor(s.pos.x+56/2),u=Math.floor(s.pos.z+44/2),[d,h]=i.stops[i.leg];i.leg=(i.leg+1)%i.stops.length,i.path=er(ai,Math.max(0,Math.min(55,o)),Math.max(0,Math.min(43,u)),d,h).map(f=>Sn(f.x+.5,f.y+.5))}let r=i.path[0];if(!r){s.moving=!1,s.frame=0;continue}let a=r.clone().sub(s.pos);a.y=0;let l=a.length(),c=i.speed*e;l<=c?(s.pos.copy(r),i.path.shift()):(a.normalize(),s.pos.addScaledVector(a,c),s.dir=this.dirFrom(a,t,s.dir)),s.moving=!0,s.frame=1+Math.floor(this.t*5)%4}}setFrame(e,t,i){e.tex.offset.set(i/la,1-(t+1)/oa.length)}faceDir(e,t){let i=new L;return this.camera.getWorldDirection(i),i.y=0,i.lengthSq()<1e-4&&i.set(0,0,-1),this.dirFrom(e,i.normalize(),t)}dirFrom(e,t,i){let s=e.x*t.x+e.z*t.z,r=e.x*-t.z+e.z*t.x;return Math.hypot(s,r)<.001?i:Math.abs(s)>=Math.abs(r)?s>0?1:0:r>0?3:2}persons(){return[...this.students.filter(e=>!e.hidden),this.monitor,this.teacher]}handleTap(e,t){let i=this.renderer.domElement.getBoundingClientRect(),s=new Be((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.ray.setFromCamera(s,this.camera);let r=this.persons(),a=this.ray.intersectObjects(r.map(o=>o.sprite).filter(o=>o.visible),!1),l=a.length?r.find(o=>o.sprite===a[0].object)??null:null;if(!l){let o=.85;for(let u of r){let d=u.pos.clone().setY(.8*si[u.look.age??"hs"]+.2),h=this.ray.ray.distanceToPoint(d);h<o&&(o=h,l=u)}}if(l){this.onTap(l);return}this.onTap(null);let c=new L;this.view!=="first"&&this.ray.ray.intersectPlane(new pn(new L(0,1,0),0),c)&&this.walkToPoint(c.x+56/2,c.z+44/2,"that spot")}walkToPoint(e,t,i="there"){if(this.inputLocked)return!1;let s=null,r=1e9,a=Math.floor(e),l=Math.floor(t);for(let c=-2;c<=2;c++)for(let o=-2;o<=2;o++){let u=a+o,d=l+c;if(u<0||d<0||u>=56||d>=44||ai[d][u]!==".")continue;let h=Math.hypot(u+.5-e,d+.5-t);h<r&&(r=h,s={x:u,y:d})}return!s||r>2.2?!1:this.planNav(s.x+.5,s.y+.5,i,null)}setAvatar(e){let t=this.player,i=t.pos.clone();this.scene.remove(t.sprite,t.blob),t.tex.dispose(),t.mat.dispose(),this.player=this.makePerson(11,{...Wi(e,11),tag:!0}),this.player.pos.copy(i),this.player.dir=t.dir,this.player.def=void 0}placeAtDoor(e){let t=e==="news"?{approach:Hi.approach,subject:"news"}:e==="library"?{approach:Vi.approach,subject:"library"}:ri.find(i=>i.subject===e)??ri[0];this.player.pos.copy(Sn(t.approach.x,t.approach.y)),this.inDoor=t.subject,this.nav=null,this.navLabel="",this.onToast("")}clear(e,t){let i=Math.ceil(e.distanceTo(t)/.25);for(let s=1;s<i;s++){let r=e.clone().lerp(t,s/i);if(Bl(r.x+56/2,r.z+44/2,.3))return!1}return!0}goTo(e){let t=ri.find(a=>a.subject===e),i=t?t.approach:e==="news"?Hi.approach:e==="library"?Vi.approach:e==="plaza"?{x:28,y:18.8}:{x:28,y:41.5},s=t?`${Gl[t.subject]} classroom`:e==="news"?"the newsroom":e==="library"?"the library":e==="plaza"?"the plaza fountain":"the main entrance",r=t?Sn(t.cx,t.cy+(t.face==="S"?.5:-.5)):e==="news"?Sn(Hi.cx,.95):e==="library"?Sn(Vi.cx,44-.95):null;this.planNav(i.x,i.y,s,r)&&this.inDoor===(t?.subject??(e==="news"||e==="library"?e:null))&&(this.inDoor=null)}planNav(e,t,i,s){let r=this.player.pos,a=Math.max(0,Math.min(55,Math.floor(r.x+56/2))),l=Math.max(0,Math.min(43,Math.floor(r.z+44/2))),c=er(ai,a,l,Math.floor(e),Math.floor(t));if(!c.length&&!(a===Math.floor(e)&&l===Math.floor(t)))return this.onToast("No path found from here"),!1;let o=[r.clone().setY(0),...c.slice(0,-1).map(d=>Sn(d.x+.5,d.y+.5)),Sn(e,t)],u=[];for(let d=0;d<o.length-1;){let h=o.length-1;for(;h>d+1&&!this.clear(o[d],o[h]);)h--;u.push(o[h]),d=h}return s&&u.push(s),this.nav={pts:u,label:i},this.navLabel=i,i!=="that spot"&&i!=="there"&&this.onToast(`Walking to ${i}\u2026 (move to cancel)`),!0}cancelNav(){this.nav&&(this.nav=null,this.navLabel="",this.onToast(""))}get walking(){return!!this.nav}enterDoor(e){this.inDoor=e,this.nav=null,this.navLabel="";let t=this.gate(e);if(t){this.onToast(t),this.onGate(e,t);return}let i=Kd.indexOf(e),s=Wn[Math.max(0,this.idx)].swap?1:0,r=e==="news"||e==="library"?[]:this.students.filter((a,l)=>(l+s)%4===i).map(a=>a.def.id);parent!==window?parent.postMessage({type:"unify:enter",subject:e,room:e,attendees:r},"*"):this.onToast(`${e==="news"?"Newsroom":e==="library"?"Library":Gl[e]+" classroom"}: open index.html to go inside`)}enterPeriod(e){let t=Wn[e],i=Ah(this.open),s=In.tile,r={x:Math.floor(this.player.pos.x+56/2),y:Math.floor(this.player.pos.z+44/2)},a=Ah(this.open.filter(c=>Math.hypot(c.x-r.x,c.y-r.y)<=3.6&&Math.hypot(c.x-r.x,c.y-r.y)>=1.2)),l=0;this.students.forEach((c,o)=>{if(t.kind==="class"){let u=ri[(o+(t.swap?1:0))%4],d={x:Math.floor(u.approach.x),y:Math.floor(u.approach.y)};c.lastDoor=d,c.pending={delay:zi(0,8),dest:d,hide:!0}}else if(t.kind==="lunch"){let u=c.def&&Ae.peek(c.def.id)?.lunchBuddy&&a[l];c.pending={delay:zi(0,10),dest:u?a[l++]:i[o],hide:!1,appear:c.hidden?c.lastDoor:void 0}}else t.kind==="arrive"?(c.hidden=!0,c.sprite.visible=!1,c.blob.visible=!1,c.path=[],c.pending={delay:zi(0,20),dest:i[o],hide:!1,appear:s}):c.pending={delay:zi(0,12),dest:s,hide:!0,appear:c.hidden?c.lastDoor:void 0}})}begin(e){let t=e.pending;e.pending=null,t.appear&&(e.pos.copy(Sn(t.appear.x+.5,t.appear.y+.5)),e.hidden=!1,e.sprite.visible=!0,e.blob.visible=!0,e.fade=0,e.mat.opacity=0);let i=Math.min(55,Math.max(0,Math.floor(e.pos.x+56/2))),s=Math.min(43,Math.max(0,Math.floor(e.pos.z+44/2)));e.path=er(ai,i,s,t.dest.x,t.dest.y).map(r=>Sn(r.x+.5,r.y+.5)),e.hideOnArrive=t.hide,e.moving=e.path.length>0,!e.path.length&&t.hide&&(e.hidden=!0,e.sprite.visible=!1,e.blob.visible=!1)}movePlayer(e,t){let i=this.keys,s=(i.d||i.arrowright?1:0)-(i.a||i.arrowleft?1:0)+this.input.x,r=(i.s||i.arrowdown?1:0)-(i.w||i.arrowup?1:0)+this.input.y,a=this.player,l=Math.sin(this.yaw),c=Math.cos(this.yaw),o=!this.inputLocked&&Math.hypot(s,r)>.1;if(o&&this.nav&&this.cancelNav(),o){let f=new L(c*s+l*r,0,-l*s+c*r).normalize().multiplyScalar(4*e);a.moving=!0;let g=a.pos.x+56/2,S=a.pos.z+44/2;Bl(g+f.x,S)||(a.pos.x+=f.x),Bl(a.pos.x+56/2,S+f.z)||(a.pos.z+=f.z),a.dir=this.dirFrom(f,t,a.dir),a.frame=1+Math.floor(this.t*9)%4}else if(this.nav){let f=this.nav.pts[0],g=f.clone().sub(a.pos);g.y=0;let S=g.length(),m=4.6*e;if(a.moving=!0,S<=m){if(a.pos.copy(f),this.nav.pts.shift(),!this.nav.pts.length){let p=this.nav.label;this.nav=null,this.navLabel="",[...ri,Hi,Vi].some(M=>Gi(M.trigger,a.pos.x+56/2,a.pos.z+44/2))||this.onToast(`Arrived at ${p}`)}}else g.normalize(),a.pos.addScaledVector(g,m),a.dir=this.dirFrom(g,t,a.dir);a.frame=1+Math.floor(this.t*9)%4}else a.moving=!1,a.frame=0;let u=a.pos.x+56/2,d=a.pos.z+44/2,h=ri.find(f=>Gi(f.trigger,u,d))??(Gi(Hi.trigger,u,d)?{subject:"news"}:Gi(Vi.trigger,u,d)?{subject:"library"}:void 0);if(h&&this.inDoor!==h.subject)this.enterDoor(h.subject);else if(!h&&this.inDoor){let f=this.inDoor==="news"?Hi.trigger:this.inDoor==="library"?Vi.trigger:ri.find(S=>S.subject===this.inDoor).trigger;Math.hypot(Math.max(f.x-u,0,u-f.x-f.w),Math.max(f.y-d,0,d-f.y-f.h))>.35&&(this.inDoor=null)}}setView(e,t=!1){this.view=e,this.zoom=1,e==="overview"?this.pitch=1:e==="close"&&(this.pitch=.62),this.fpitch=0,t&&this.updateCamera(1,!0)}cycleView(){return this.setView(this.view==="close"?"overview":this.view==="overview"?"first":"close"),this.view}updateCamera(e,t=!1){let i=this.player.pos,s=Math.sin(this.yaw),r=Math.cos(this.yaw),a,l;if(this.view==="close"){let d=8.6*this.zoom,h=Math.cos(this.pitch);a=new L(i.x+s*h*d,1+Math.sin(this.pitch)*d,i.z+r*h*d),l=new L(i.x-s*1.8,1,i.z-r*1.8)}else if(this.view==="overview"){let d=52*this.zoom,h=Math.cos(this.pitch);a=new L(s*h*d,Math.sin(this.pitch)*d,r*h*d+3),l=new L(0,0,3)}else a=new L(i.x,1.55,i.z),l=new L(i.x-s*6,1.55+Math.tan(this.fpitch)*6,i.z-r*6);let c=t?1:Math.min(1,e*9);this.camPos.lerp(a,c),this.camLook.lerp(l,c),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);let o=this.view==="overview"?40:22,u=this.view==="overview"?new L(0,0,3):i;if(this.sun.target.position.copy(u),this.sun.position.set(u.x+7,15,u.z+9),o!==this.shadowR){this.shadowR=o;let d=this.sun.shadow.camera;d.left=-o,d.right=o,d.top=o,d.bottom=-o,d.updateProjectionMatrix()}}fadeOccluders(e){let t=this.camera.position,i=this.player.pos.clone().setY(1),s=i.clone().sub(t),r=s.length(),a=new Ci(t,s.normalize()),l=new L;for(let c of this.occl){let o=this.view!=="first"&&!!a.intersectBox(c.box,l)&&l.distanceTo(t)<r-.2,u=o?.16:1;c.o+=(u-c.o)*Math.min(1,e*9);let d=c.o>.985;for(let h of c.mats)h.opacity=d?1:c.o,h.transparent=!d,h.depthWrite=d}}},Gx=["#F8D977","#F28F7E","#8FC9E8","#A9DCC0"],Wx=n=>Gx[Math.floor(n)%4];var Mf=n=>n==="k2"||n==="g35"?"young":n==="g68"?"mid":"teen",Xx=(n,e)=>{n=n.slice();for(let t=n.length-1;t>0;t--){let i=Math.floor(e()*(t+1));[n[t],n[i]]=[n[i],n[t]]}return n},Ma=(n,e,t,i,s,r,a)=>{let l=Xx([t,...i.slice(0,2)],s);return{subject:n,q:e,options:l,answer:l.indexOf(t),why:r,hint:a}};function qx(n,e){let t=Mf(n),i=(c,o)=>c+Math.floor(e()*(o-c+1)),s=c=>{let o=new Set;for(;o.size<2;){let u=c+i(-4,4);u!==c&&o.add(u)}return[...o].map(String)};if(n==="k2"){let c=i(1,9),o=i(1,9);return Ma("math",`What is ${c} + ${o}?`,String(c+o),s(c+o),e,`${c} plus ${o} is ${c+o}.`,"Count up from the bigger number.")}if(n==="g35"){let c=i(3,9),o=i(3,9);return Ma("math",`What is ${c} x ${o}?`,String(c*o),s(c*o),e,`${c} groups of ${o} is ${c*o}.`,"Try skip counting.")}if(t==="mid"){let c=i(2,12),o=i(2,9),u=i(1,9);return Ma("math",`What is ${c} x ${o} + ${u}?`,String(c*o+u),s(c*o+u),e,`Multiply first: ${c*o}, then add ${u}.`,"Order of operations: multiply before adding.")}let r=i(2,6),a=i(2,9),l=i(1,9);return Ma("math",`Solve for x: ${r}x + ${l} = ${r*a+l}`,String(a),s(a),e,`Subtract ${l}, then divide by ${r}: x = ${a}.`,"Undo the + first, then undo the multiplication.")}var $x={young:[["Which word is a noun?","puppy",["quickly","jump"]],["What is the opposite of 'hot'?","cold",["warm","red"]],["Which word rhymes with 'cat'?","hat",["dog","cup"]],["What punctuation ends a question?","?",[".","!"]],["Which is a complete sentence?","The dog ran.",["The big dog.","Ran fast."]],["Which word starts with a capital letter?","Monday",["tuesday","apple"],"Days of the week are capitalized."]],mid:[["Which word is an adverb?","slowly",["quiet","table"]],["'Brave' is a synonym for...","courageous",["afraid","tired"]],["What is the plural of 'mouse'?","mice",["mouses","meese"]],["A word that sounds the same but means something else is a...","homophone",["synonym","antonym"]],["Which sentence uses a metaphor?","Time is a thief.",["He ran like the wind.","The bus is late."]],["What is the main idea?","The big point of a text",["A small detail","The title font"]]],teen:[["What is a theme?","The central message of a story",["The main character","The setting"]],["Which is a primary source?","A diary written at the time",["A textbook summary","A movie about it"]],["What does 'foreshadowing' do?","Hints at later events",["Describes the setting","Ends the story"]],["Which word is an antonym of 'verbose'?","concise",["wordy","loud"]],["Which device is 'The wind whispered'?","Personification",["Simile","Hyperbole"]],["A thesis statement...","states your main argument",["lists your sources","ends the paper"]]]},Yx={young:[["What do plants need to grow?","sunlight and water",["only candy","darkness"]],["Which is a solid?","ice",["steam","rain"]],["What is the big star in our sky by day?","the Sun",["the Moon","a planet"]],["Which animal is a mammal?","dolphin",["shark","trout"]],["What do we use our ears for?","hearing",["seeing","smelling"]],["How many legs does an insect have?","6",["8","4"]]],mid:[["What gas do plants take in?","carbon dioxide",["oxygen","helium"]],["What is the center of an atom called?","nucleus",["orbit","cell"]],["Which planet is closest to the Sun?","Mercury",["Venus","Mars"]],["Water boils at...","100 C",["50 C","0 C"]],["The powerhouse of the cell is the...","mitochondria",["nucleus","wall"]],["A hypothesis is...","a testable guess",["a final answer","a graph"]]],teen:[["What is the unit of force?","newton",["joule","watt"]],["DNA stands for...","deoxyribonucleic acid",["dynamic nuclear acid","double nitrogen atom"]],["Which is a chemical change?","rusting iron",["melting ice","tearing paper"]],["What does a catalyst do?","speeds up a reaction",["stops a reaction","adds mass"]],["Which wave needs a medium?","sound",["light","radio"]],["Natural selection favors...","traits that help survival",["the largest animals","the oldest animals"]]]},Jx={young:[["What do we call a map's key?","legend",["story","title"]],["Who was the first U.S. president?","George Washington",["Abraham Lincoln","Benjamin Franklin"]],["Which is a continent?","Africa",["Texas","Pacific"]],["Long ago, people wrote with...","quill pens",["keyboards","tablets"]],["A community helper who fights fires is a...","firefighter",["baker","pilot"]],["What is a holiday for remembering history called?","a memorial day",["a snow day","a field trip"]]],mid:[["Ancient Egyptians built...","pyramids",["castles","skyscrapers"]],["What was the Silk Road?","a trade route",["a fabric","a river"]],["The printing press helped spread...","ideas and books",["weather news","ocean maps"]],["Which river was central to Egypt?","the Nile",["the Amazon","the Thames"]],["The Renaissance began in...","Italy",["Brazil","Japan"]],["A government where people vote is a...","democracy",["monarchy","empire"]]],teen:[["What did the Industrial Revolution change?","how goods were made",["the alphabet","the calendar"]],["The Magna Carta limited the power of...","the king",["the church","merchants"]],["Which event began in 1914?","World War I",["World War II","the Civil War"]],["What is a primary cause of the Cold War?","a clash of ideologies",["a flood","a gold rush"]],["The Constitution begins with...","We the People",["I the President","In God We Trust"]],["Which ancient civilization created democracy?","Athens",["Rome","Persia"]]]},Sf={ela:$x,science:Yx,history:Jx};function wf(n,e,t=Math.random){if(n==="math")return qx(e,t);let i=Mf(e),s=Sf[n][i][Math.floor(t()*Sf[n][i].length)];return Ma(n,s[0],s[1],s[2],t,s[3])}var wt=(n,e)=>e[Math.floor(n()*e.length)],qt=n=>n.charAt(0).toUpperCase()+n.slice(1),Nn={math:"math",ela:"reading and writing",science:"science",history:"history"},Zx=["soccer","drawing","video games","reading","baking","music","dancing","robots","swimming","chess","skateboarding","gardening","photography","basketball"],Kx=["pizza","tacos","pasta","sushi","pancakes","fried rice","burgers","dumplings"],jx=[["Why did the student eat their homework?","Because the teacher said it was a piece of cake!"],["What do you call a sleeping bull?","A bulldozer!"],["Why was the math book sad?","It had too many problems."],["What did the ocean say to the beach?","Nothing, it just waved."],["Why can't you trust atoms?","They make up everything!"],["What has hands but can't clap?","A clock!"],["Why did the scarecrow win an award?","He was outstanding in his field."],["What kind of tree fits in your hand?","A palm tree!"],["Why do bees have sticky hair?","Because they use honeycombs."],["What do you call cheese that isn't yours?","Nacho cheese!"]],cr={cheerful:{yes:["Yay!","Oh, totally!","Ooh!"],hm:["Hmm, let's see!","Good question!"],wow:["No way, that's awesome!","I love that!"],bye:["See you soon!","Bye bye, have a sunny day!"]},shy:{yes:["Um, yeah.","...Okay."],hm:["Uh... I think...","Hmm, um..."],wow:["Oh! Really? That's... nice.","Wow. Um, cool."],bye:["Um, bye.","Okay... see you."]},sporty:{yes:["Yep!","Heck yeah!"],hm:["Okay, huddle up.","Let me think, coach mode."],wow:["Let's gooo!","That's a W!"],bye:["Catch you on the field!","Hustle, hustle!"]},nerdy:{yes:["Correct.","Indeed."],hm:["Technically speaking,","Fun fact:"],wow:["Fascinating!","That's statistically cool."],bye:["Until next time. Cite your sources.","Farewell!"]},artsy:{yes:["Mm, yes.","Beautiful."],hm:["Let me paint you a picture...","Hmm, imagine this:"],wow:["That's so inspiring!","Oh, the colors in that!"],bye:["Stay colorful!","Goodbye, friend, go make something."]},funny:{yes:["Ha! Yes.","You bet."],hm:["Okay, hear me out.","So, plot twist:"],wow:["Shut the front door!","Okay that's actually hilarious."],bye:["I'd say 'break a leg' but we have PE next.","Later, alligator!"]},curious:{yes:["Ooh, yes!","Wait, really?"],hm:["Hmm, why though?","I wonder..."],wow:["Tell me more!","That is so interesting!"],bye:["I have so many more questions! Bye!","See you! Don't forget to ask 'why'."]},bossy:{yes:["Obviously.","Correct."],hm:["Listen.","Here's the plan:"],wow:["Good. I approve.","Not bad. Not bad at all."],bye:["Don't be late.","Dismissed! ...kidding. Mostly."]},dreamy:{yes:["Mm, yes...","Oh, yes."],hm:["I was just wondering...","Hmm, imagine..."],wow:["Ooh, that's like a story.","That sounds magical."],bye:["Goodbye... see you in the clouds.","Bye. I'll daydream about it."]},kind:{yes:["Of course!","Happy to!"],hm:["Let me think about it.","Good thought."],wow:["That's wonderful!","I'm so glad."],bye:["Take care of yourself!","Bye! I'm rooting for you."]}},Tf=(n,e)=>{let t=va(n.spec).filter(i=>i.key!=="shoes");return wt(e,t)},Qx={how:"how our day was going",class:"school subjects",hobby:"hobbies",you:"each other's stories",food:"food",gossip:"the latest hallway news",joke:"a joke",help:"studying",quiz:"a quiz question",compliment:"style",invite:"hanging out"},Xl=class{constructor(e,t){this.npc=e;this.ctx=t;this.used=new Set;this.turns=0;this.history=[];this.waiting=null;this.r=gi(e.id*977+Math.floor(Date.now()/6e4))}get feat(){return this._feat??(this._feat=Tf(this.npc,gi(this.npc.id*13+5)))}get mem(){return Ae.mem(this.npc.id)}get me(){return Ae.profile.name||"friend"}v(e,t={}){let i=this.npc,s=this.mem,r={me:this.me,first:i.first,grade:i.grade,hobby:s.facts.hobby??"",interest:i.interests[0],food:i.food,dream:i.dream,...t};return e.replace(/\{(\w+)\}/g,(a,l)=>r[l]??"")}pc(e){return this.v(e[this.npc.personality]??e.d)}flavor(e,t=.33){return this.r()<t?`${wt(this.r,cr[this.npc.personality].yes)} ${e}`:e}reply(e,t={}){let i={text:e,options:t.options??this.menu(),mood:t.mood??"happy",delta:t.delta??0,end:t.end,quiz:t.quiz};return this.turns++,this.history.push({who:"npc",text:e}),os(this.npc.id,"npc",e),i.delta&&zh(this.npc.id,i.delta),i}note(e){this.used.add(e),Ae.edit(this.npc.id,t=>{t.topics.push(e),t.topics.length>24&&t.topics.shift(),t.lastDay=_a(),t.lastAt=Date.now()})}greet(){let e=this.npc,t=this.mem,i=!t.met,s=Date.now()-t.lastAt,r=t.lastDay&&t.lastDay!==_a()?Math.max(1,Math.round((Date.parse(_a())-Date.parse(t.lastDay))/864e5)):0,a=this.me,l,c="happy",o=0,u=Tf(e,this.r).phrase;if(i)l=this.pc({cheerful:`Hi hi! I'm ${e.first}! I'm in grade ${e.grade}. Are you new here? I love your ${va(Ae.profile.avatar).find(d=>d.key==="top")?.phrase??"style"}!`,shy:`Oh! Um... hi. I'm ${e.first}. ...Are you ${a}?`,sporty:`Hey! I'm ${e.first}. You look fast. You play anything?`,nerdy:`Hello. I'm ${e.first}, grade ${e.grade}. Did you know this hall has exactly 44 rows of tiles? ...Sorry. Hi.`,artsy:`Hi! I'm ${e.first}. I love the colors you're wearing. Is that on purpose?`,funny:`Hey, I'm ${e.first}. Don't worry, I'm funnier than I look.`,curious:`Hi! I'm ${e.first}! Wait, who are you? What do you like? Tell me everything!`,bossy:`Hi. I'm ${e.first}. I run the ${e.interests[0]} club. You should join.`,dreamy:`Oh... hi. I'm ${e.first}. I was just imagining we were all on a ship. Welcome aboard.`,kind:`Hi there! I'm ${e.first}. Welcome! Can I help you find anything?`,d:`Hi! I'm ${e.first}.`}),Ae.profile.name&&(l+=` Nice to meet you, ${a}!`),Ae.edit(e.id,d=>{d.met=!0,d.fr=Math.max(d.fr,2)}),Ae.profile.stats.talks++,o=1,c=e.personality==="shy"?"shy":"happy";else if(t.hurt>=2&&t.fr<12)l=this.pc({d:"Oh. Hi.",funny:"Oh. It's you. Hi, I guess.",kind:"Hi. I'm still a bit upset, but hi."}),c="annoyed";else{let d=as(t.fr),h=d==="best friend"?`There you are, ${a}! My favorite person!`:d==="close friend"?`${a}! I was hoping I'd see you!`:d==="friend"?`Hey ${a}!`:`Hi again, ${a}.`,f="";s<8*6e4&&t.lastAt?f=wt(this.r,["Back so soon?","Missed me already?","Did you forget something?"]):t.lunchBuddy&&this.ctx.kind==="lunch"?f="Still on for lunch together?":t.facts.hobby&&this.r()<.6?f=`How's ${t.facts.hobby} going?`:t.facts.mood&&["sad","tired","nervous","stressed","worried","lonely"].includes(t.facts.mood)&&this.r()<.8?f=`Are you feeling less ${t.facts.mood} than last time?`:t.quiz.total>0&&this.r()<.5?f=t.quiz.right>=t.quiz.total/2?"You were so good at that quiz stuff last time.":"Want another try at those quiz questions?":t.topics.length?f=`Last time we talked about ${Qx[t.topics[t.topics.length-1]]??"stuff"}. That was fun.`:f="";let g=this.ctx.place==="class"?wt(this.r,["Shh! Whisper, the teacher is right there.","Psst, quietly!","Hi! Quick, before she looks over."]):r>=2?`It's been ${r} days!`:this.ctx.kind==="arrive"?wt(this.r,["Morning already!","Ready for today?"]):this.ctx.kind==="lunch"?wt(this.r,["I'm starving.","Lunch smells good today."]):this.ctx.kind==="dismiss"?"Almost time to go home!":this.ctx.kind==="class"?"Shouldn't we both be in class? ...I won't tell.":"";l=`${h} ${f||g}`.trim(),o=r?1:0,Ae.profile.stats.talks++}return Ae.edit(e.id,d=>{d.lastDay=_a(),d.lastAt=Date.now(),d.talks++}),this.reply(l,{mood:c,delta:o,options:this.menu()})}menu(){let e=this.npc,t=this.mem,i=[],s=(l,c)=>{i.length<5&&i.push({id:l,label:c})},a=[["how","How's your day going?",!0],["hobby","What do you do for fun?",!0],["class","What's your favorite subject?",!0],["you","Tell me about yourself",!0],["quiz","Quiz me!",e.personality==="nerdy"||e.personality==="curious"||t.fr>=10],["gossip","Heard anything interesting?",t.fr>=8],["compliment",`I like your ${this.feat.noun}`,!0],["food","What's your favorite food?",!0],["joke","Tell me a joke",e.personality==="funny"||t.fr>=6],["help","Can you help me study?",t.fr>=6],["invite","Want to eat lunch together?",t.fr>=12&&!t.lunchBuddy],["advice","I need some advice",t.fr>=15]].filter(([l,,c])=>c&&!this.used.has(l));return a.sort((l,c)=>(t.topics.lastIndexOf(l[0])+1||-1)-(t.topics.lastIndexOf(c[0])+1||-1)),a.slice(0,4).forEach(([l,c])=>s(l,c)),i.push({id:"bye",label:"See you later"}),i}back(e=[]){return[...e,...this.menu().filter(t=>!e.some(i=>i.id===t.id))].slice(0,5)}choose(e,t){let i=this.npc,s=this.mem,r=this.r,a=cr[i.personality],l=!this.used.has(e),c=o=>l?o:0;if(e.startsWith("ans"))return this.answer(Number(e.slice(3)));switch(this.history.push({who:"me",text:this.optLabel(e,t)}),os(i.id,"me",this.optLabel(e,t)),e!=="hobby_pick"&&e!=="food_pick"&&e!=="fav_pick"&&e!=="feel"&&this.note(e),e){case"bye":return this.reply(this.v(`${wt(r,a.bye)} ${s.fr>=30?"Come find me later, "+this.me+"!":""}`).trim(),{end:!0,options:[]});case"how":{let o=this.ctx.kind==="arrive"?this.pc({cheerful:"Great! The bus was only a little loud today.",shy:"Okay... a little nervous about class, honestly.",sporty:"Pumped! I jogged here.",nerdy:"Productive. I reviewed my notes on the bus.",artsy:"Inspired! The light in this hallway is gorgeous.",funny:"Surviving! Barely. Breakfast was just a banana peel and hope.",curious:"So good! I've already asked three questions today.",bossy:"Busy. I've got a schedule to keep.",dreamy:"Floaty. I woke up from a really good dream.",kind:"Good! How about you?",d:"Pretty good!"}):this.pc({cheerful:"Awesome! How are you?",shy:"Fine... thanks for asking.",sporty:"Great, I've got practice later!",nerdy:"Well, my pencil snapped, but otherwise fine.",artsy:"Creative. I sketched a bird during snack.",funny:"My day is like a sandwich: mostly bread.",curious:"Curious as ever. And you?",bossy:"Efficient. And you?",dreamy:"Drifty, but nice.",kind:"I'm good, thank you! How are you doing?",d:"Good! You?"});return this.reply(`${o}`,{delta:c(1),options:[{id:"feel",label:"I'm doing great",data:"great"},{id:"feel",label:"A little tired",data:"tired"},{id:"feel",label:"Kind of nervous",data:"nervous"},{id:"feel",label:"Sort of sad",data:"sad"}]})}case"feel":{let o=String(t);Ae.learn("mood",o),Ae.edit(i.id,d=>{d.facts.mood=o});let u=o==="great"?this.flavor(wt(r,["That's awesome, it's contagious!","Love that energy!","Good! Keep it going!"])):o==="tired"?this.pc({cheerful:"Aw, me too sometimes. Have some water and a snack!",shy:"Me too... maybe we can both sit quietly for a second.",sporty:"Shake it out! A few jumping jacks and you'll be good.",nerdy:"Sleep is scientifically important. Try going to bed earlier.",d:"Hang in there. Maybe a snack at lunch will help?"}):o==="nervous"?this.pc({cheerful:"You've totally got this! I believe in you!",shy:"Oh. I get nervous too. We can be nervous together.",sporty:"Deep breath. Treat it like the big game, you've trained for this.",nerdy:"Statistically, most of the things we worry about don't happen.",d:"It's okay to feel that way. One step at a time."}):this.pc({kind:"I'm sorry. Do you want to sit together for a bit? I'll listen.",funny:"Aw. Okay, emergency compliment: your whole vibe is great.",d:"I'm sorry you're sad. I'm here if you want to talk."});return this.reply(u,{delta:c(2)+1,mood:o==="sad"?"sad":"happy",options:this.back()})}case"class":{let o=i.favSubject,u=i.hardSubject,d={math:"numbers always make sense",ela:"stories take me places",science:"I get to find out how things work",history:"the past is full of surprises"}[o];return this.reply(this.v(`I love ${Nn[o]}. ${qt(d)}. ${Nn[u]===Nn[o]?"":`${qt(Nn[u])} is harder for me, though.`} What's yours?`),{delta:c(1),mood:"happy",options:["math","ela","science","history"].map(h=>({id:"fav_pick",label:qt(Nn[h]),data:h})).concat([{id:"back",label:"Not sure yet",data:""}])})}case"fav_pick":{let o=t;Ae.learn("favSubject",o),Ae.edit(i.id,d=>{d.facts.favSubject=o});let u=o===i.favSubject;return this.reply(u?this.v(`No way, ${Nn[o]} is my favorite too! We should study together sometime.`):o===i.hardSubject?this.v(`Really? ${qt(Nn[o])} is tough for me. Maybe you could help me!`):this.v(`${qt(Nn[o])}, nice! I'd like to hear more about that.`),{delta:u?4:2,mood:u?"excited":"happy",options:this.back()})}case"back":return this.reply(this.flavor("Okay! What else?"),{options:this.menu()});case"hobby":{let o=i.interests[0],u={soccer:"I practice every day after school.",chess:"I'm working on a new opening.",baking:"Yesterday I made lemon cookies.","robotics club":"We're building a robot that picks up balls.",dinosaurs:"My favorite is the Triceratops!",drawing:"I fill a notebook every week."}[o]??`I could talk about ${o} all day.`;return this.waiting="hobby",this.reply(this.v(`I'm really into ${o}. ${u} I also like ${i.interests[1]}. What about you?`),{delta:c(1),options:[...[i.interests[0],...Zx.filter(d=>!i.interests.includes(d)).slice(0,3),"something else"].map(d=>({id:"hobby_pick",label:qt(d),data:d}))]})}case"hobby_pick":{let o=String(t).toLowerCase();if(this.waiting=null,o==="something else")return this.reply(this.flavor("Ooh, tell me what it is! Just type it below."),{options:this.menu(),mood:"excited"});Ae.learn("hobby",o),Ae.edit(i.id,d=>{d.facts.hobby=o});let u=i.interests.some(d=>d.includes(o)||o.includes(d));return this.reply(u?this.v(`No way, we like the same thing! ${wt(r,a.wow)} We should do ${o} together sometime.`):this.v(`${qt(o)}? Cool! ${wt(r,a.wow)} I've never really tried it. Maybe you can show me.`),{delta:u?5:2,mood:u?"excited":"happy",options:this.menu()})}case"you":{let o=as(s.fr),u=s.talks,d=o==="new face"?i.bio:o==="classmate"?`I live with ${i.pet??"my family"}${i.pet?"":", it's pretty loud"}, and I could eat ${i.food} every day.`:o==="friend"?`Someday I want to ${i.dream}. I haven't told many people that.`:o==="close friend"?`Okay, a secret: I ${i.quirk}. Everyone's noticed, I think.`:`You're my best friend, so... I ${i.secret}. Please don't tell.`;return this.reply(this.v(d),{delta:c(o==="new face"?1:2)+(u%3===0,0),mood:o==="best friend"?"shy":"happy"})}case"food":return this.waiting="food",this.reply(this.v(`Easy: ${i.food}! What's yours?`),{delta:c(1),options:[...Kx.slice(0,4).map(o=>({id:"food_pick",label:qt(o),data:o})),{id:"food_pick",label:qt(i.food),data:i.food}].slice(0,5)});case"food_pick":{let o=String(t);return Ae.learn("food",o),Ae.edit(i.id,u=>{u.facts.food=o}),this.waiting=null,this.reply(o===i.food?this.v(`${qt(o)}! We have the same taste. Today's lunch better be good.`):this.v(`${qt(o)} is good too. I'd trade you some ${i.food} for it.`),{delta:o===i.food?4:1,mood:o===i.food?"excited":"happy",options:this.menu()})}case"gossip":return this.gossip(l);case"compliment":{let o=this.feat,u=this.pc({shy:`Oh! Um... thank you. I picked my ${o.phrase} myself.`,cheerful:`Aww, thanks! I love my ${o.phrase} too!`,artsy:`Thank you! My ${o.phrase} is part of my whole look.`,sporty:"Ha, thanks! Gotta look good when we win.",funny:`Thanks! My ${o.noun} has been told it's the best part of me.`,d:`Thanks! That's sweet. I like my ${o.phrase} too.`});return this.reply(u,{delta:c(3),mood:i.personality==="shy"?"shy":"happy"})}case"joke":{let[o,u]=wt(r,jx),d=i.personality==="funny"?"Oh, I have SO many. ":i.personality==="shy"?"Um, okay... ":"";return this.reply(`${d}${o} ... ${u}`,{delta:c(2),mood:"excited",options:[{id:"laugh",label:"Ha! Good one"},{id:"groan",label:"*groan*"},...this.back().slice(0,3)]})}case"laugh":return this.reply(this.flavor(wt(r,["I'm here all week!","I knew you'd get it.","That one never fails."])),{delta:2,mood:"excited"});case"groan":return this.reply(this.pc({funny:"Groans are the sound of success.",d:"Hey, comedy is hard!"}),{delta:0});case"help":{if(i.hardSubject&&this.r()<.5&&i.personality!=="nerdy"&&s.fr<30){let o=or(i.bestFriend);return this.reply(this.v(`I'm better at ${Nn[i.favSubject]}. If you need ${Nn[i.hardSubject]}, ask ${o?.first??"Ms. Brown"}. Want me to quiz you on ${Nn[i.favSubject]} instead?`),{delta:c(1),options:[{id:"quiz",label:"Sure, quiz me"},...this.back().slice(0,3)]})}return this.choose("quiz")}case"quiz":{let o=Ae.profile.avatar.age,u=r()<.7?i.favSubject:["math","ela","science","history"][Math.floor(r()*4)];return this.quiz=wf(u,o,r),this.waiting="quiz",this.reply(this.v(`Okay, ${Nn[u]} time! ${this.quiz.q}`),{delta:0,mood:"excited",quiz:this.quiz,options:this.quiz.options.map((d,h)=>({id:`ans${h}`,label:d}))})}case"invite":{let o=i.personality==="shy"?25:12;return s.fr>=o?(Ae.edit(i.id,u=>{u.lunchBuddy=!0}),this.reply(this.pc({shy:"Really? Um... yes. I'd like that.",d:`Yes! I'll save you a seat at lunch. ${i.food[0].toUpperCase()+i.food.slice(1)} for both of us!`}),{delta:4,mood:"excited",options:this.back()})):this.reply(this.pc({shy:"Um... maybe after we know each other better? Sorry.",d:"Maybe soon! Let's hang out a bit more first."}),{delta:0,mood:"shy",options:this.back()})}case"advice":{let o=this.pc({cheerful:"Smile at three people today. It really works.",shy:"Taking a deep breath before talking helps me. And writing notes.",sporty:"Warm up before big things. Even a test.",nerdy:"Make a study schedule. Fifteen minutes a day beats a panic night before.",artsy:"Doodle when you feel stuck. Your brain loosens up.",funny:"If all else fails, laugh at it. Then try again.",curious:"Ask more questions. Nobody minds, honestly.",bossy:"Make a list. Do the hardest thing first.",dreamy:"Look out a window for a minute. Then you'll know what to do.",kind:"Be gentle with yourself. And ask for help, it's brave.",d:"Take it one step at a time."});return this.reply(o,{delta:c(2),options:this.back()})}case"chatter_pick":return this.reply("Okay!",{options:this.menu()});default:return this.reply(this.flavor("Hm, I'm not sure what to say to that."),{options:this.menu(),mood:"neutral"})}}optLabel(e,t){return typeof t=="string"&&t?qt(t):this.menu().find(i=>i.id===e)?.label??e}answer(e){let t=this.quiz,i=this.npc;this.quiz=void 0,this.waiting=null;let s=e===t.answer;return Ae.edit(i.id,r=>{r.quiz.total++,s&&(r.quiz.right++,r.helped++)}),Ae.profile.stats.quizTotal++,s&&Ae.profile.stats.quizRight++,Ae.save(),this.history.push({who:"me",text:t.options[e]??"..."}),os(i.id,"me",t.options[e]??"..."),s?this.reply(this.v(`${wt(this.r,cr[i.personality].wow)} Yes, "${t.options[t.answer]}"! ${t.why??""}`),{delta:3,mood:"excited",options:[{id:"quiz",label:"Another one!"},...this.menu().slice(0,3)]}):this.reply(this.v(`Almost! The answer is "${t.options[t.answer]}". ${t.why??""} ${i.personality==="kind"?"That's a tricky one.":"Don't worry, you'll get the next one."}`),{delta:1,mood:"neutral",options:[{id:"quiz",label:"Try another"},...this.menu().slice(0,3)]})}gossip(e){let t=this.npc,i=this.r,s=or(t.bestFriend),r=t.rival!=null?or(t.rival):null,a=wt(i,ar),l=[],c=ar.filter(d=>d.id!==t.id&&(Ae.peek(d.id)?.fr??0)>=30);c.length&&l.push("opinion"),s&&l.push("friend"),r&&l.push("rival"),l.push("quirk","new");let o=wt(i,l),u="";if(o==="opinion"){let d=wt(i,c);u=`${d.first} told me you're really nice. ${d.first} remembers that you ${Ae.peek(d.id).quiz.right>0?"helped with a quiz":"said hi"}.`}else if(o==="friend"&&s)u=`${s.first} and I are working on ${t.interests[0]} together. ${s.first} ${s.quirk}, which is funny.`;else if(o==="rival"&&r)u=`${r.first} and I are kind of competing this week. Please don't tell ${r.first}. ${r.first} ${r.quirk}.`;else if(o==="quirk")u=`${a.first} ${a.quirk}. Have you noticed?`;else{let d=va(a.spec).find(h=>h.key==="hat"||h.key==="glasses"||h.key==="hair");u=`${a.first} showed up with ${d.phrase} today. Everyone's talking about it.`}return this.reply(this.pc({shy:`Um... don't tell anyone, but ${u}`,funny:`Okay, hot gossip, ${this.me}: ${u}`,d:u}),{delta:e?1:0,mood:"happy"})}say(e){if(e=e.trim().slice(0,240),!e)return this.reply("...?",{mood:"neutral"});let t=this.npc,i=e.toLowerCase(),s=this.r;if(this.history.push({who:"me",text:e}),os(t.id,"me",e),this.waiting==="quiz"&&this.quiz){let d=this.quiz.options.findIndex(h=>i.includes(h.toLowerCase()));if(d>=0)return this.answer(d)}let r=i.match(/(?:my name is|call me|i'?m called)\s+([a-z][a-z'-]{1,16})/);if(r){let d=qt(r[1]);return Ae.setProfile({name:d}),this.reply(this.v(`Nice to meet you, ${d}! I'll remember that.`),{delta:2,mood:"excited"})}let a=i.match(/\bi(?:'m| am| feel| feeling)\s+(?:so |really |kind of |a little |very )?(sad|happy|tired|nervous|scared|excited|angry|bored|hungry|sick|lonely|stressed|worried|great|good|fine|okay|proud)\b/);if(a){let d=a[1];return this.choose("feel",["happy","excited","great","good","fine","okay","proud"].includes(d)?"great":["tired","bored","sick","hungry"].includes(d)?"tired":["nervous","scared","worried","stressed"].includes(d)?"nervous":"sad")}let l=i.match(/\bi (?:really |absolutely )?(?:like|love|enjoy|adore|play)\s+([a-z ]{2,28})/);if(l)return this.choose("hobby_pick",l[1].trim().replace(/\s+(a lot|so much|too|and.*)$/,""));let c=i.match(/\bmy favou?rite (subject|food|color|colour|animal|game|sport|class) is\s+([a-z ]{2,24})/);if(c){let d=c[1],h=c[2].trim();Ae.learn("fav_"+d,h),Ae.edit(t.id,g=>{g.facts["fav_"+d]=h});let f=d==="food"&&h.includes(t.food.split(" ")[0]);return this.reply(this.v(f?`${qt(h)}! Mine too!`:`${qt(h)}, huh? I'll remember that your favorite ${d} is ${h}.`),{delta:f?3:2,mood:f?"excited":"happy"})}let o=i.match(/\bi have (?:a|an|two|three) ([a-z]+)(?: named ([a-z]+))?/);if(o)return Ae.learn("pet",o[1]+(o[2]?" named "+qt(o[2]):"")),this.reply(this.v(`A ${o[1]}${o[2]?" named "+qt(o[2]):""}! I want to meet them${t.pet?`. I have ${t.pet}, you know.`:"."}`),{delta:3,mood:"excited"});if(/\b(stupid|dumb|ugly|hate you|shut up|loser|idiot)\b/.test(i))return this.reply(this.pc({shy:"...That hurts. I'm going to go now.",funny:"Ouch. That was not funny. Even I can tell.",kind:"That's not very kind. I'd like us to be nice to each other.",d:"That's rude. I don't like that."}),{delta:-8,mood:"annoyed",options:[{id:"sorry",label:"Sorry, I didn't mean it"},{id:"bye",label:"Okay, bye"}]});if(/\b(sorry|apologi[sz]e|my bad)\b/.test(i))return this.reply(this.pc({kind:"Thank you for saying that. It's okay.",d:"Okay. Thanks for saying sorry."}),{delta:3,mood:"neutral",options:this.menu()});if(/\b(thanks|thank you|thx)\b/.test(i))return this.reply(this.flavor(wt(s,["Anytime!","Of course.","No problem!"])),{delta:1,options:this.menu()});if(/\b(you'?re|you are|love your|like your|nice|cool|awesome|amazing|great|pretty|cute)\b/.test(i)&&/\b(you|your)\b/.test(i))return this.choose("compliment");if(/\b(bye|goodbye|see you|gotta go|have to go|later)\b/.test(i))return this.choose("bye");if(/\b(joke|funny|laugh)\b/.test(i))return this.choose("joke");if(/\b(quiz|test me|question)\b/.test(i))return this.choose("quiz");if(/\b(help|study|homework)\b/.test(i))return this.choose("help");if(/\b(lunch|eat|food|hungry|pizza|snack)\b/.test(i))return this.choose("food");if(/\b(hobby|hobbies|fun|weekend|play)\b/.test(i))return this.choose("hobby");if(/\b(class|subject|math|science|history|reading|english|teacher)\b/.test(i))return this.choose("class");if(/\b(who are you|about you|your name|tell me about)\b/.test(i))return this.choose("you");if(/\b(rumou?r|gossip|news|heard)\b/.test(i))return this.choose("gossip");if(/\b(hi|hello|hey|yo|sup)\b/.test(i)&&i.split(/\s+/).length<=3)return this.reply(this.flavor("Hi! What's up?"),{mood:"happy"});if(/\b(how are you|how's it going|what's up)\b/.test(i))return this.choose("how");if(/\?\s*$/.test(i))return this.reply(this.pc({nerdy:"Hmm, interesting question. I'd have to look that up. Want a quiz question instead?",curious:"Ooh, good question! I don't know, but I want to find out with you.",d:`${wt(s,cr[t.personality].hm)} I'm not sure. What do you think?`}),{delta:1,mood:"neutral"});let u=this.mem;return this.reply(this.v(u.facts.hobby?`${wt(s,cr[t.personality].hm)} Is that like ${u.facts.hobby}? Tell me more.`:`${wt(s,cr[t.personality].hm)} Tell me more about that.`),{delta:1,mood:"neutral"})}};function Ef(n,e,t){let i=gi((n.id*31+e.id)*1009+Math.floor(Date.now()/2e4)),s=Ae.profile,r=s.name||"the new kid",a=Ae.peek(n.id),l=(Ae.peek(e.id)?.fr??0)>=30||(a?.fr??0)>=30,c=wt(i,va(e.spec).filter(u=>u.key!=="shoes")),o=[`${e.first}, did you finish the ${wt(i,["math","reading","science","history"])} homework?`,`Are you going to ${n.interests[0]} after school?`,`I love your ${c.phrase}!`,`${e.first}, you ${e.quirk} again. It's cute.`,l?`${r} is really nice. Have you talked to ${r}?`:`Who's the new kid, ${e.first}?`,t.kind==="lunch"?`I'm trading ${n.food} for ${e.food}. Deal?`:t.kind==="arrive"?"The bus was SO loud this morning.":t.kind==="dismiss"?"Don't forget your backpack!":`Shh, ${e.first}, we're supposed to be in class.`,`${wt(i,n.interests)} club is on Thursday, ${e.first}!`,`Did you know ${n.pet??"my family"} ${n.pet?"learned a new trick?":"makes the best snacks?"}`];return wt(i,o)}function Af(n){let e=Ae.mem(n.id),t=Ae.profile.name||"you";return e.fr>=60?`${t}! Over here!`:e.facts.hobby?`Hey ${t}! How's ${e.facts.hobby}?`:`Hey ${t}!`}var Hh=0;async function ev(n,e){if(Date.now()<Hh)return null;let t=n.npc,i=n.mem,s=new AbortController,r=setTimeout(()=>s.abort(),6500);try{let a={npc:{name:t.name,first:t.first,grade:t.grade,role:t.role,title:t.title,personality:t.personality,interests:t.interests,favSubject:t.favSubject,food:t.food,pet:t.pet,dream:t.dream,quirk:t.quirk,bio:t.bio},player:{name:Ae.profile.name,facts:Ae.profile.facts},memory:{friendship:i.fr,tier:as(i.fr),talks:i.talks,topics:i.topics.slice(-6),facts:i.facts,recent:i.log.slice(-8)},ctx:n.ctx,history:n.history.slice(-8),input:e},l=await fetch("/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a),signal:s.signal});if(!l.ok)return Hh=Date.now()+5*6e4,null;let c=await l.json();if(!c||typeof c.text!="string")return null;let o=Math.max(-6,Math.min(6,Number(c.delta)||0));if(n.history.push({who:"me",text:e}),os(t.id,"me",e),c.learned&&typeof c.learned=="object")for(let[u,d]of Object.entries(c.learned))typeof d=="string"&&(Ae.learn(u,d.slice(0,40)),Ae.edit(t.id,h=>{h.facts[u]=String(d).slice(0,40)}));return n.history.push({who:"npc",text:c.text}),os(t.id,"npc",c.text),o&&zh(t.id,o),n.turns++,{text:String(c.text).slice(0,400),options:n.menu(),mood:c.mood||"happy",delta:o}}catch{return Hh=Date.now()+6e4,null}finally{clearTimeout(r)}}async function Cf(n,e){return await ev(n,e)??n.say(e)}var tv=`
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
`,Rf=!1,Pf=()=>{if(Rf)return;Rf=!0;let n=document.createElement("style");n.textContent=tv,document.head.appendChild(n)},ht=(n,e="",t,i="")=>{let s=document.createElement(n);return e&&(s.className=e),i&&(s.textContent=i),t?.appendChild(s),s};function If(n,e,t=0,i=0,s=3.7){let r=n.getContext("2d"),a=n.width,l=n.height;r.clearRect(0,0,a,l);let c=s*Math.min(1,si[e.age??"hs"]??1)*(a/118);r.save(),r.translate(a/2,l-10*(l/150)),r.scale(c,c),r.shadowColor="rgba(52,34,46,.3)",r.shadowBlur=2,r.shadowOffsetY=1,tr(r,0,0,{...e,dir:"down",moving:!1,walk:0,mouth:i,tag:!1},t),r.restore()}var Yl=n=>"\u2665".repeat(Bh(n))+"\u2661".repeat(5-Bh(n)),ql=class{constructor(e){this.typing=0;this.full="";this.raf=0;this.t0=0;this.busy=!1;this.opts=[];this.onClose=()=>{};this.onReply=()=>{};this.say=async e=>{if(!(!this.convo||this.busy)){this.busy=!0,this.showYou(e);try{this.deliver(await Cf(this.convo,e))}finally{this.busy=!1}}};this.mood="happy";this.loop=()=>{if(!this.isOpen)return;let e=performance.now(),t=this.typing<this.full.length;t&&(this.typing+=1.1+this.full.length*.012,this.renderText()),this.npc&&If(this.cv,this.npc.look,(e-this.t0)/1e3,t?.4+.6*Math.abs(Math.sin(e/70)):0),this.raf=requestAnimationFrame(this.loop)};Pf(),this.root=ht("div","uchat",e),this.card=ht("div","uchat-card",this.root),this.cv=ht("canvas","uchat-portrait",this.card),this.cv.width=236,this.cv.height=300;let t=ht("div","uchat-main",this.card),i=ht("div","uchat-head",t);this.nameEl=ht("b","",i),this.subEl=ht("span","uchat-sub",i),this.heartEl=ht("span","uchat-hearts",i);let s=ht("button","uchat-x",i,"Bye");s.type="button",s.onclick=()=>this.close(),this.textEl=ht("div","uchat-text",t),this.textEl.setAttribute("aria-live","polite"),this.textEl.onclick=()=>this.finishTyping(),this.optsEl=ht("div","uchat-opts",t);let r=ht("form","uchat-in",t);this.input=ht("input","",r),this.input.placeholder="Or type something to say\u2026",this.input.maxLength=200,this.input.autocomplete="off";let a=ht("button","",r,"Say");a.type="submit",r.onsubmit=l=>{l.preventDefault();let c=this.input.value.trim();c&&(this.input.value="",this.say(c))},this.root.addEventListener("keydown",l=>{l.stopPropagation(),l.key==="Escape"?this.close():document.activeElement!==this.input&&/^[1-6]$/.test(l.key)&&this.opts[+l.key-1]&&this.pick(this.opts[+l.key-1])}),["pointerdown","wheel","touchstart"].forEach(l=>this.root.addEventListener(l,c=>c.stopPropagation(),{passive:!0}))}get isOpen(){return this.root.classList.contains("show")}open(e,t){this.npc=e,this.convo=new Xl(e,t),this.root.classList.add("show"),this.t0=performance.now(),this.busy=!1,this.nameEl.textContent=e.name,this.refreshHead(),this.deliver(this.convo.greet()),this.loop(),setTimeout(()=>this.root.querySelector(".uchat-opts button")?.focus({preventScroll:!0}),30)}async pick(e){!this.convo||this.busy||(this.showYou(this.labelOf(e)),this.deliver(this.convo.choose(e.id,e.data)))}labelOf(e){return e.label}showYou(e){this.textEl.innerHTML="";let t=ht("span","you",this.textEl,`${Ae.profile.name||"You"}: ${e}`)}refreshHead(){if(!this.npc)return;let e=Ae.mem(this.npc.id);this.subEl.textContent=`${this.npc.role==="staff"?this.npc.title:"Grade "+this.npc.grade} \xB7 ${as(e.fr)}`,this.heartEl.textContent=Yl(e.fr)}deliver(e){this.refreshHead(),this.opts=e.options,this.optsEl.innerHTML="",e.options.forEach((i,s)=>{let r=ht("button","",this.optsEl,`${s+1}. ${i.label}`);r.type="button",r.onclick=()=>void this.pick(i)});let t=this.textEl.querySelector(".you");this.textEl.innerHTML="",t&&this.textEl.appendChild(t),this.full=e.text,this.typing=0,this.mood=e.mood,this.onReply(e,this.npc),e.end&&setTimeout(()=>this.close(),Math.min(2600,900+e.text.length*28))}finishTyping(){this.typing=this.full.length,this.renderText()}renderText(){let e=this.textEl.querySelector(".say");e||(e=ht("span","say",this.textEl)),e.textContent=this.full.slice(0,Math.floor(this.typing))}close(){this.isOpen&&(this.root.classList.remove("show"),cancelAnimationFrame(this.raf),this.input.blur(),this.onClose())}},$l=class{constructor(e){this.onPick=()=>{};Pf(),this.root=ht("div","ujournal",e);let t=ht("div","ujournal-card",this.root),i=ht("header","",t,"Friends and classmates"),s=ht("button","",i,"Close");s.type="button",s.onclick=()=>this.hide(),this.list=ht("div","ujournal-list",t),this.root.addEventListener("pointerdown",r=>r.stopPropagation()),this.root.addEventListener("keydown",r=>{r.stopPropagation(),r.key==="Escape"&&this.hide()})}show(){this.render(),this.root.classList.add("show")}hide(){this.root.classList.remove("show")}toggle(){this.root.classList.contains("show")?this.hide():this.show()}render(){this.list.innerHTML="";let e=Ae.friends();if(!e.length){ht("div","ujournal-empty",this.list,"You haven't met anyone yet. Walk up to a student and tap them, or press T when one is close.");return}for(let{id:t,mem:i}of e){let s=or(Number(t));if(!s)continue;let r=ht("button","ujournal-item",this.list);r.type="button",r.onclick=()=>{this.hide(),this.onPick(s)};let a=ht("canvas","",r);a.width=108,a.height=140,If(a,s.look,0,0,3.7);let l=ht("div","",r),c=Object.entries(i.facts).map(([o,u])=>`${o.replace("fav_","favorite ")}: ${u}`).join(", ");ht("b","",l,s.name),ht("small","",l,`${s.role==="staff"?s.title:"Grade "+s.grade} \xB7 ${as(i.fr)} ${Yl(i.fr)}`),ht("small","",l,`Talked ${i.talks}x \xB7 quiz ${i.quiz.right}/${i.quiz.total}${i.lunchBuddy?" \xB7 lunch buddy":""}`),c&&ht("small","",l,`Remembers: ${c}`)}}};var Lf=["Ha, totally!","Same!","Yeah!","No way!","Okay okay.","I know, right?","Shh!","Maybe!","Ooh!"],nv=(n,e)=>new L(n-56/2,0,e-44/2),Jl=class{constructor(e,t=document.body){this.hall=e;this.nearby=null;this.talkingTo=null;this.onNearby=()=>{};this.bubbles=[];this.tags=new Map;this.chase=null;this.nextChatter=4;this.approachAt=new Map;this.approaching=null;this.acc=0;this.layer=document.createElement("div"),this.layer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:34",t.appendChild(this.layer),this.chat=new ql(t),this.journal=new $l(t),this.chat.onClose=()=>this.endTalk(),this.journal.onPick=i=>{let s=e.persons().find(r=>r.def?.id===i.id);s?this.talkTo(s):e.onToast(`${i.first} isn't in the hall right now.`)},e.onTap=i=>{i?.def&&this.talkTo(i)},e.onTick.push((i,s)=>this.tick(i,s)),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&((i.key==="t"||i.key==="T")&&!this.chat.isOpen?this.nearby&&this.talkTo(this.nearby):(i.key==="f"||i.key==="F")&&!this.chat.isOpen&&this.journal.toggle())})}ctx(){let e=Wn[Math.max(0,this.hall.idx)];return{place:"hall",kind:e.kind,period:e.name,clock:Ol(this.hall.clock)}}dist(e){return Math.hypot(e.pos.x-this.hall.player.pos.x,e.pos.z-this.hall.player.pos.z)}talkTo(e){let t=e.def;if(!t||this.chat.isOpen)return;if(this.dist(e)>2.7){this.chase={p:e,replan:0},this.hall.walkToPoint(e.pos.x+56/2,e.pos.z+44/2,"there"),this.hall.onToast(`Walking over to ${t.first}\u2026`);return}this.chase=null,this.hall.cancelNav(),this.talkingTo=e,e.talking=!0,e.moving=!1;let i=new L().subVectors(this.hall.player.pos,e.pos);e.dir=this.hall.faceDir(i,e.dir);let s=this.hall.player;s.dir=this.hall.faceDir(i.clone().negate(),s.dir),this.hall.inputLocked=!0,this.journal.hide(),this.chat.open(t,this.ctx())}endTalk(){let e=this.talkingTo;if(this.talkingTo=null,this.hall.inputLocked=!1,e){e.talking=!1;let t=e;t.path&&!t.path.length&&t.hidden}}say(e,t,i=3400){this.bubbles.filter(r=>r.p===e).forEach(r=>{r.el.remove()}),this.bubbles=this.bubbles.filter(r=>r.p!==e);let s=document.createElement("div");s.className="uchat-bubble",s.textContent=t,this.layer.appendChild(s),this.bubbles.push({el:s,p:e,until:performance.now()+i,h:1.55*(si[e.look.age??"hs"]??1)+.35})}project(e,t){let i=new L(e.pos.x,t,e.pos.z).project(this.hall.camera),s=this.hall.renderer.domElement.getBoundingClientRect();return{x:(i.x*.5+.5)*s.width,y:(-i.y*.5+.5)*s.height,ok:i.z<1&&i.z>-1}}tick(e,t){let i=this.hall,s=performance.now(),r=i.player,a=null,l=2.5;if(!this.chat.isOpen)for(let o of i.persons()){let u=this.dist(o);u<l&&!o.talking&&(l=u,a=o)}if(a!==this.nearby&&(this.nearby=a,this.onNearby(a)),this.chase){let o=this.chase;o.replan-=e,this.dist(o.p)<=2.4?this.talkTo(o.p):!i.walking&&o.replan<=0?(o.replan=.5,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there")||(this.chase=null)):o.replan<=0&&(o.replan=.7,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there"))}let c=i.persons().filter(o=>this.dist(o)<5.5&&o.def&&!i.inputLocked).sort((o,u)=>this.dist(o)-this.dist(u)).slice(0,5);for(let[o,u]of this.tags)c.includes(o)||(u.remove(),this.tags.delete(o));for(let o of c){let u=this.tags.get(o);u||(u=document.createElement("div"),u.className="uchat-tag",this.layer.appendChild(u),this.tags.set(o,u));let d=Ae.peek(o.def.id);u.innerHTML=`${o.def.first}${d?.met?`<i>${Yl(d.fr).replace(/♡/g,"")}</i>`:""}`;let h=this.project(o,1.55*(si[o.look.age??"hs"]??1)+.1);u.style.display=h.ok?"block":"none",u.style.left=`${h.x}px`,u.style.top=`${h.y}px`}if(this.bubbles=this.bubbles.filter(o=>{if(s>o.until)return o.el.remove(),!1;let u=this.project(o.p,o.h);return o.el.style.display=u.ok?"block":"none",o.el.style.left=`${u.x}px`,o.el.style.top=`${u.y-16}px`,!0}),this.nextChatter-=e,this.nextChatter<=0&&!this.chat.isOpen){this.nextChatter=zi(2.4,5);let o=i.persons().filter(d=>d.def&&!d.talking&&this.dist(d)<16),u=o[Math.floor(Math.random()*o.length)];if(u&&this.bubbles.length<4){let d=o.filter(h=>h!==u&&Math.hypot(h.pos.x-u.pos.x,h.pos.z-u.pos.z)<3.2)[0];if(d){let h=this.ctx();this.say(u,Ef(u.def,d.def,{kind:h.kind}),3600),setTimeout(()=>this.say(d,Lf[Math.floor(Math.random()*Lf.length)],1800),1900)}}}if(this.acc+=e,this.acc>1&&(this.acc=0,this.checkApproach(s)),this.approaching){let o=this.approaching;o.replan-=e,o.s.hidden?this.approaching=null:this.dist(o.s)<1.9?(o.s.path=[],o.s.moving=!1,this.say(o.s,Af(o.s.def),4200),i.onToast(`${o.s.def.first} wants to chat. Tap them or press T.`),this.approachAt.set(o.s.def.id,s),this.approaching=null,setTimeout(()=>{!o.s.talking&&o.s.path.length===0&&(o.s.pending={delay:0,dest:i.open[Math.floor(Math.random()*i.open.length)],hide:!1})},14e3)):(o.replan<=0||s-o.since>2e4)&&(o.replan=1,s-o.since>2e4?this.approaching=null:this.pathTo(o.s))}}pathTo(e){let t=this.hall,i=Math.max(0,Math.min(55,Math.floor(e.pos.x+56/2))),s=Math.max(0,Math.min(43,Math.floor(e.pos.z+44/2))),r=Math.max(0,Math.min(55,Math.floor(t.player.pos.x+56/2))),a=Math.max(0,Math.min(43,Math.floor(t.player.pos.z+44/2)));e.pending=null,e.hideOnArrive=!1,e.path=er(ai,i,s,r,a).map(l=>nv(l.x+.5,l.y+.5)),e.path.pop(),e.moving=e.path.length>0}checkApproach(e){if(!(this.approaching||this.chat.isOpen||this.hall.walking||this.ctx().kind==="class"))for(let i of this.hall.students){if(i.hidden||i.talking||!i.def)continue;let s=Ae.peek(i.def.id);if(!s||s.fr<30)continue;let r=this.dist(i);if(!(r<3||r>11)&&!(e-(this.approachAt.get(i.def.id)??-1e9)<18e4)){this.approaching={s:i,replan:0,since:e},this.pathTo(i);return}}}visible(){return this.hall.persons().map(e=>e.def).filter(Boolean)}};var iv=`
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
`,Df=!1,Ye=(n,e="",t,i="")=>{let s=document.createElement(n);return e&&(s.className=e),i&&(s.textContent=i),t?.appendChild(s),s},Nf=["down","right","up","left"],Zl=class{constructor(e=document.body){this.tab="Body";this.dir=0;this.walk=!1;this.t0=performance.now();this.raf=0;this.onSave=()=>{};this.onCancel=()=>{};this.loop=()=>{if(!this.root.classList.contains("show"))return;let e=(performance.now()-this.t0)/1e3,t=this.cv.getContext("2d");t.clearRect(0,0,this.cv.width,this.cv.height);let i=Wi(this.spec,11),s=8.6*(si[this.spec.age]??1)*.92;t.save(),t.translate(this.cv.width/2,this.cv.height-46),t.scale(s,s),t.fillStyle="rgba(60,40,50,.18)",t.beginPath(),t.ellipse(0,1,13,4,0,0,7),t.fill(),t.shadowColor="rgba(52,34,46,.3)",t.shadowBlur=3,t.shadowOffsetY=1.5,tr(t,0,0,{...i,dir:Nf[this.dir],moving:this.walk,walk:this.walk?e*8:0,tag:!1},e),t.restore(),this.raf=requestAnimationFrame(this.loop)};this.pending=0;if(!Df){Df=!0;let S=document.createElement("style");S.textContent=iv,document.head.appendChild(S)}this.spec={...Ae.profile.avatar},this.root=Ye("div","uav",e);let t=Ye("div","uav-top",this.root);Ye("b","",t,"Create your avatar");let i=Ye("span","",t);i.style.flex="1";let s=Ye("button","uav-chip",t,"Cancel");s.type="button",s.onclick=()=>{this.hide(),this.onCancel()};let r=Ye("button","uav-chip uav-save",t,"Save and play");r.type="button",r.onclick=()=>this.save();let a=Ye("div","uav-wrap",this.root),l=Ye("div","uav-card uav-prev",a);this.cv=Ye("canvas","",l),this.cv.width=300,this.cv.height=400;let c=Ye("div","uav-row",l);c.style.justifyContent="center",Nf.forEach((S,m)=>{let p=Ye("button","uav-chip",c,["Front","Right","Back","Left"][m]);p.type="button",p.onclick=()=>{this.dir=m,this.walk=!1}});let o=Ye("button","uav-chip",c,"Walk");o.type="button",o.onclick=()=>{this.walk=!this.walk,o.classList.toggle("on",this.walk)};let u=Ye("div","uav-row",l);u.style.justifyContent="center";let d=Ye("button","uav-chip",u,"Surprise me");d.type="button",d.onclick=()=>{let S=this.spec.name,m=this.spec.age;this.spec={...xa(gi(Date.now()&16777215),m),name:S},this.render()};let h=Ye("button","uav-chip",u,"Reset");h.type="button",h.onclick=()=>{let S=this.spec.name;this.spec={...sr(),name:S},this.render()};let f=Ye("div","uav-card",a),g=Ye("div","uav-tabs",f);for(let S of["Body","Face","Hair","Outfit","Extras","You"]){let m=Ye("button","uav-chip",g,S);m.type="button",m.dataset.tab=S,m.onclick=()=>{this.tab=S,this.render()}}this.body=Ye("div","",f),this.root.addEventListener("keydown",S=>S.stopPropagation()),this.root.addEventListener("pointerdown",S=>S.stopPropagation())}show(){this.spec={...Ae.profile.avatar,name:Ae.profile.name||Ae.profile.avatar.name},this.root.classList.add("show"),this.render(),this.loop()}hide(){this.root.classList.remove("show"),cancelAnimationFrame(this.raf)}save(){let e=(this.nameInput?.value??this.spec.name).trim().slice(0,14)||"Student";this.spec.name=e,Ae.setProfile({name:e,avatar:{...this.spec},hasAvatar:!0}),this.hide(),this.onSave(this.spec,e)}set(e,t){this.spec[e]=t,this.render(!1)}chips(e,t,i){Ye("div","uav-lab",this.body,e);let s=Ye("div","uav-row",this.body);for(let r of i){let a=Ye("button","uav-chip"+(this.spec[t]===r.id?" on":""),s,r.label);a.type="button",a.onclick=()=>{this.set(t,r.id)}}}swatches(e,t,i,s){Ye("div","uav-lab",this.body,e);let r=Ye("div","uav-row",this.body);if(s){let l=Ye("button","uav-sw none"+(this.spec[t]==null?" on":""),r);l.type="button",l.title=s,l.setAttribute("aria-label",s),l.onclick=()=>this.set(t,null)}for(let l of i){let c=Ye("button","uav-sw"+(this.spec[t]===l?" on":""),r);c.type="button",c.style.background=l,c.setAttribute("aria-label",l),c.onclick=()=>this.set(t,l)}let a=Ye("input","uav-custom",r);a.type="color",a.value=typeof this.spec[t]=="string"&&/^#[0-9a-f]{6}$/i.test(this.spec[t])?this.spec[t]:i[0],a.title="Custom colour",a.oninput=()=>{this.spec[t]=a.value,this.renderSoon()}}toggle(e,t){let i=Ye("label","uav-switch",this.body),s=Ye("input","",i);s.type="checkbox",s.checked=!!this.spec[t],s.onchange=()=>this.set(t,s.checked),i.appendChild(document.createTextNode(e))}slider(e,t,i,s,r){Ye("div","uav-lab",this.body,e);let a=Ye("input","",this.body);a.type="range",a.min=String(i),a.max=String(s),a.step=String(r),a.value=String(this.spec[t]),a.oninput=()=>{this.spec[t]=Number(a.value)}}renderSoon(){clearTimeout(this.pending),this.pending=window.setTimeout(()=>this.render(!1),250)}render(e=!0){this.root.querySelectorAll("[data-tab]").forEach(r=>r.classList.toggle("on",r.dataset.tab===this.tab));let t=this.root.scrollTop;this.body.innerHTML="";let i=ya,s=this.body;if(this.tab==="Body")this.chips("Grade band (sets your height)","age",i.age),this.chips("Build","build",i.build),this.slider("Head size","headSize",.9,1.12,.01),this.swatches("Skin tone","skin",Nh),this.chips("Pronouns","pronouns",hf.map(r=>({id:r,label:r})));else if(this.tab==="Face"){this.chips("Eyes","eyeShape",i.eyeShape),this.swatches("Eye colour","eyeColor",Fh),this.chips("Eyebrows","brow",i.brow),this.swatches("Eyebrow colour","browColor",rs,"Match hair"),this.chips("Mouth","mouthStyle",i.mouthStyle),this.swatches("Lip colour","lip",["#8a4650","#c4463c","#e8789a","#b5563e","#563428","#e07a66"]),Ye("div","uav-lab",s,"Details");let r=Ye("div","uav-row",s);this.toggle("Freckles","freckles"),this.toggle("Beauty mark","mole"),this.toggle("Little nose","nose"),this.toggle("Rosy cheeks","blush"),this.chips("Glasses","glasses",i.glasses),this.swatches("Glasses colour","glassColor",["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da","#eab94e"])}else if(this.tab==="Hair")this.chips("Style","hairStyle",i.hairStyle),this.swatches("Colour","hair",rs),this.swatches("Highlights","hair2",rs,"No highlights");else if(this.tab==="Outfit")this.chips("Top","top",i.top),this.swatches("Top colour","shirt",en),this.chips("Pattern","pattern",i.pattern),this.swatches("Pattern / under-shirt colour","shirt2",en),this.chips("Bottoms","bottom",i.bottom),this.swatches("Bottoms colour","pants",en),this.chips("Shoes","shoeStyle",i.shoeStyle),this.swatches("Shoe colour","shoes",kh);else if(this.tab==="Extras")this.chips("Hat","hat",i.hat),this.swatches("Hat colour","hatColor",en),this.chips("Bag","packStyle",i.packStyle),this.swatches("Bag colour","pack",en),this.swatches("Earrings","earrings",["#eab94e","#fff6ea","#f28f7e","#8fc9e8"],"None"),this.swatches("Scarf","scarf",en,"None"),this.swatches("Badge","badge",en,"None");else{Ye("h2","",s,"About you"),Ye("div","uav-lab",s,"Your name (classmates will remember it)");let r=Ye("input","",s);r.type="text",r.maxLength=14,r.value=this.spec.name==="Student"?"":this.spec.name,r.placeholder="Type your name",this.nameInput=r,r.oninput=()=>{this.spec.name=r.value},Ye("div","uav-lab",s,"Tip"),Ye("div","",s,"Classmates notice what you wear. Try a hat or glasses and see who compliments it. Everything you tell them is remembered, so introduce yourself!")}this.root.scrollTop=t}};var hs=["math","ela","science","history"],kf=new Set(hs),Xi={math:"Math",ela:"ELA",science:"Science",history:"History"},wa=3,Kl=2,Gh=50,Ff=7*60+30,sv=21*60,rv=8,Wh="unify.schedule.v1",Vh="unify.parentpin.v1",jl=()=>new Date().toISOString().slice(0,10),av=n=>{let e=2166136261;for(let t of n)e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0},ov=n=>()=>(n=Math.imul(n^n>>>15,2246822507)^Math.imul(n^n>>>13,3266489909),((n^=n>>>16)>>>0)/4294967296),lv=(n,e)=>n.start<e.start+e.len&&e.start<n.start+n.len,cs=n=>{let e=Math.floor(n/60)%24,t=Math.floor(n%60);return`${(e+11)%12+1}:${String(t).padStart(2,"0")} ${e<12?"AM":"PM"}`},cv=[{kind:"morning",start:8*60+30},{kind:"lunch",start:12*60},{kind:"evening",start:17*60+30}];function hv(n){let e={};for(let t of hs){let i=ov(av(n+t)),s=new Set;for(;s.size<5;)s.add(Math.round((9*60+i()*(19*60-9*60))/5)*5);let r=[...s].sort((l,c)=>l-c).map((l,c)=>({id:`${t}-r${c}`,subject:t,start:l,len:Gh,kind:"random"})),a=cv.map(l=>({id:`${t}-${l.kind}`,subject:t,start:l.start,len:Gh,kind:l.kind}));e[t]=[...r,...a].sort((l,c)=>l.start-c.start)}return e}var hr=()=>({day:jl(),seen:!1,clock0:Date.now(),skip:0,slots:hv(jl()),signups:[],breaks:[],permitted:!1}),yi=hr(),Ql=new Set;function Uf(){try{let n=JSON.parse(localStorage.getItem(Wh)||"null");yi=n&&n.day===jl()?{...hr(),...n}:hr()}catch{yi=hr()}}function oi(){try{localStorage.setItem(Wh,JSON.stringify(yi))}catch{}Ql.forEach(n=>n())}Uf();try{addEventListener("storage",n=>{n.key===Wh&&(Uf(),Ql.forEach(e=>e()))})}catch{}var be={get day(){return yi.day!==jl()&&(yi=hr(),oi()),yi},onChange(n){return Ql.add(n),()=>Ql.delete(n)},now(){return Math.min(sv,Ff+(Date.now()-be.day.clock0)/6e4*rv+yi.skip)},skipToNext(){let n=be.nextUp();return n&&(yi.skip+=Math.max(0,n.start-5-be.now()),oi()),n},markSeen(){be.day.seen=!0,oi()},get seen(){return be.day.seen},signupFor(n,e=!0){return be.day.signups.find(t=>t.subject===n&&(e||t.status!=="done"))},conflict(n){return be.day.signups.find(e=>e.subject!==n.subject&&lv(e,n))??null},choose(n,e=!1){let t=be.day,i=be.conflict(n);if(i)return{ok:!1,why:`That overlaps your ${Xi[i.subject]} class at ${cs(i.start)}.`};let s=t.signups.find(r=>r.subject===n.subject&&!r.extra);return s&&!e&&(t.signups=t.signups.filter(r=>r!==s)),t.signups.push({subject:n.subject,slotId:n.id,start:n.start,len:n.len,kind:n.kind,extra:e,status:"planned"}),t.signups.sort((r,a)=>r.start-a.start),oi(),{ok:!0}},unchoose(n){let e=be.day;e.signups=e.signups.filter(t=>!(t.subject===n&&t.status==="planned"&&!t.extra)),oi()},get required(){return be.day.signups.filter(n=>!n.extra)},get extras(){return be.day.signups.filter(n=>n.extra)},get minMet(){return be.required.length>=wa},canAddExtra(){let n=be.extras.length;return{ok:n<Kl||be.day.permitted,needsPermission:n>=Kl&&!be.day.permitted}},addExtra(n,e){if(!be.canAddExtra().ok)return{ok:!1,why:"Extra lessons beyond two need teacher and parent permission."};let i=be.now(),s=e??{id:`${n}-x${be.extras.length}`,subject:n,start:Math.max(Ff,Math.round(i/5)*5),len:Gh,kind:"random"};return be.conflict(s)?{ok:!1,why:"That overlaps another class."}:be.choose(s,!0)},parentPinSet(){try{return!!localStorage.getItem(Vh)}catch{return!1}},requestPermission(n,e){if(!/^\d{4}$/.test(n))return{ok:!1,why:"The parent PIN is four digits."};let t=(()=>{try{return localStorage.getItem(Vh)}catch{return null}})();if(t&&t!==n)return{ok:!1,why:"That is not the parent PIN."};if(e<.6)return{ok:!1,why:"Your teacher would like to see stronger quiz results from today's lessons first."};try{t||localStorage.setItem(Vh,n)}catch{}return be.day.permitted=!0,oi(),{ok:!0}},avgScore(){let n=be.day.signups.filter(e=>e.score!=null);return n.length?n.reduce((e,t)=>e+t.score,0)/n.length:1},canStart(n){if(!be.seen)return{ok:!1,why:"Check the bulletin board before your first class."};let e=be.signupFor(n,!1);return e?be.now()<e.start-10?{ok:!1,why:`${Xi[n]} starts at ${cs(e.start)}. It is ${cs(be.now())} now.`,signup:e}:{ok:!0,signup:e}:{ok:!1,why:`${Xi[n]} is not on your schedule today. Add it on the bulletin board.`}},begin(n){let e=be.signupFor(n,!1);return e&&(e.status="inprogress",oi()),e},complete(n,e=1){let t=be.day.signups.find(i=>i.subject===n&&i.status!=="done");t&&(t.status="done",t.score=e,oi())},nextUp(){return be.day.signups.find(n=>n.status==="planned")??null},breakKey(n){let e=be.signupFor(n,!1);return`${n}@${e?e.slotId:"free"}`},breakUsed(n){return be.day.breaks.includes(be.breakKey(n))},useBreak(n){let e=be.breakKey(n);be.day.breaks.includes(e)||(be.day.breaks.push(e),oi())},reset(){yi=hr(),oi()}};var Ut=n=>n,Of={math:[Ut({id:"parabola",subject:"math",title:"Graphing a parabola",blurb:"Vertex, axis of symmetry and plotting.",pics:["parabola","orbit"],videos:["parabola"],points:["Parabola: the U-shaped curve of y = x\xB2","Vertex: the turning point (lowest or highest)","Axis of symmetry: the line that splits the curve in two matching halves","To graph: plot the vertex, find points, mirror them"],examples:["y = x\xB2: vertex (0, 0). x = 2 gives y = 4, and x = -2 gives y = 4 too.","y = (x - 3)\xB2: the curve slides 3 right, so the vertex is (3, 0).","A tossed ball follows a parabola. The top of its flight is the vertex."],lab:{id:"parabola",title:"Parabola Launcher",intro:"Shape the curve with the sliders so the ball lands on the targets. Watch the vertex and the axis of symmetry move."},intro:"Today we're graphing parabolas, the curve you see whenever something is thrown.",wrap:"Great work. Remember: find the vertex, use the axis of symmetry, then mirror your points.",homework:"Graph y = x\xB2 + 2 and label the vertex and axis of symmetry.",glossary:{vertex:"The vertex is the turning point of the parabola, its highest or lowest point.",parabola:"A parabola is the U-shaped curve you get from a squared term, like y = x squared.",axis:"The axis of symmetry is the vertical line through the vertex that splits the graph into matching halves.",symmetry:"Symmetry means one side is a mirror image of the other.",intercept:"An intercept is where the graph crosses an axis.",coordinate:"A coordinate is a pair like (3, 4): across, then up.",root:"A root, or zero, is an x value where the graph touches the x-axis."},whys:["It's symmetric because squaring makes a positive number and its negative give the same answer.","The vertex is the turning point because that's where the curve stops going down and starts going up.","Mirroring saves work: once you know one side, the other side is free."]}),Ut({id:"fractions",subject:"math",title:"Fractions",blurb:"Equal parts of a whole.",pics:["fractions","pizza-fraction"],videos:["fractions"],points:["A fraction names equal parts of a whole","Numerator: how many parts we have","Denominator: how many equal parts in all","Equivalent fractions name the same amount: 4/8 = 1/2"],examples:["A pizza cut in 8: 3 slices is 3/8.","2/4 and 1/2 are equivalent: half the circle either way.","1/3 is bigger than 1/4: fewer cuts means bigger pieces."],lab:{id:"pizza",title:"Pizza Party",intro:"Serve each classmate exactly the fraction they ask for. Click the slices to hand them out."},intro:"Today: fractions. Parts of a whole, shared fairly.",wrap:"Nice sharing. Equal parts are what make fractions work.",homework:"Draw 3 shapes and shade 1/2, 1/4 and 3/4 of each.",glossary:{numerator:"The numerator is the top number: how many parts you have.",denominator:"The denominator is the bottom number: how many equal parts make the whole.",equivalent:"Equivalent fractions look different but are the same amount, like 2/4 and 1/2.",fraction:"A fraction is a number that names part of a whole.",whole:"The whole is the entire thing before it is divided."},whys:["The parts must be equal, otherwise 1/4 wouldn't always mean the same amount.","More pieces means smaller pieces, which is why 1/8 is smaller than 1/4.","Equivalent fractions work because cutting each piece in half doubles both numbers."]})],ela:[Ut({id:"theme",subject:"ela",title:"Finding the theme",blurb:"Plot, change and evidence.",pics:["organizer"],videos:["theme"],points:["Ask: what happens? (the plot)","Ask: what changes? (the character or situation)","Back it up with evidence from the text","A theme is a message, written as a full sentence"],examples:["Theme: 'Slow and steady wins the race.'","Evidence: the hare quit trying, the tortoise never stopped.","Not a theme: 'friendship' (one word). A theme says something about it."],lab:{id:"cardsort",cfg:"tortoise",title:"Story Builder",intro:"Put the events of the story in order, then pick the theme the events prove."},intro:"Today we're finding themes: the big message hiding inside a story.",wrap:"Remember: plot, change, evidence, then state the theme in a sentence.",homework:"Write the theme of your favorite story in one sentence and add one piece of evidence.",glossary:{theme:"The theme is the big message or lesson of a story, written as a full sentence.",evidence:"Evidence is a detail or quote from the text that supports your idea.",plot:"The plot is the series of events in a story.",character:"A character is a person or creature in a story.",conflict:"Conflict is the problem or struggle that drives the story.",inference:"An inference is an idea you figure out from clues in the text."},whys:["We use evidence so the theme is something we can show, not just a guess.","Looking at what changes works because stories are about change, and the change points to the lesson.","A theme is a message the author wants us to take away."]}),Ut({id:"figurative",subject:"ela",title:"Simile and metaphor",blurb:"Creative comparisons.",pics:["simile"],videos:["figurative"],points:["Figurative language paints pictures with words","Simile: compares using LIKE or AS","Metaphor: says one thing IS another","Use them to make writing vivid"],examples:["Simile: 'as busy as a bee.'","Metaphor: 'time is a thief.'","Simile: 'She runs like the wind.'"],lab:{id:"cardsort",cfg:"figurative",title:"Sort the Sayings",intro:"Drag each saying under Simile or Metaphor."},intro:"Today: figurative language, words that paint pictures.",wrap:"Like or as means simile. Is or are means metaphor.",homework:"Write two similes and two metaphors about your morning.",glossary:{simile:"A simile compares two things using 'like' or 'as.'",metaphor:"A metaphor says one thing is another to show a feeling, like 'Time is a thief.'",figurative:"Figurative language uses comparisons and imagery instead of literal meaning.",literal:"Literal means exactly what the words say.",imagery:"Imagery is language that appeals to the senses."},whys:["Comparisons help readers picture and feel something new.","Similes use like or as, so the comparison is easy to spot.","Metaphors feel stronger because they say one thing actually is the other."]}),Ut({id:"orchestra",subject:"ela",title:"Music: the orchestra",blurb:"Instrument families.",pics:["staff"],videos:["orchestra"],points:["An orchestra has four instrument families","Strings: violin, cello (sound from a bow or plucking)","Woodwinds and brass: sound from blowing air","Percussion: struck or shaken. The conductor keeps everyone together"],examples:["Violin: strings. Flute: woodwind.","Trumpet: brass. Drum: percussion.","The conductor uses a baton to show the beat."],lab:{id:"cardsort",cfg:"orchestra",title:"Seat the Orchestra",intro:"Place each instrument in its family."},intro:"Welcome to music. Today we meet the orchestra.",wrap:"Four families, one conductor, one big sound.",homework:"Name two instruments from each family.",glossary:{conductor:"The conductor leads the orchestra and shows the tempo with a baton.",strings:"String instruments make sound from vibrating strings, like the violin.",woodwind:"Woodwinds make sound when air is blown across or through them, like the flute.",brass:"Brass instruments are blown through metal tubes, like the trumpet.",percussion:"Percussion instruments are struck or shaken, like drums.",orchestra:"An orchestra is a large group of musicians playing together."},whys:["Families group instruments by how they make sound.","A conductor keeps every player on the same beat.","Different sounds blend to make a fuller sound."]}),Ut({id:"rhythm",subject:"ela",title:"Music: beat and rhythm",blurb:"Counting in four.",pics:["staff"],videos:["rhythm"],points:["Beat: the steady pulse of the music","Rhythm: the pattern of long and short sounds","Count 1-2-3-4 and clap on each beat","A quarter note gets one beat"],examples:["Clap on every beat: 1, 2, 3, 4.","Two eighth notes fit in one beat.","A metronome ticks the beat."],lab:{id:"beats",title:"Beat Pads",intro:"Hit the pads when the notes reach the line. Your classmate keeps the drum beat."},intro:"Today in music: feel the beat.",wrap:"Keep the steady beat and the rhythm will follow.",homework:"Clap the rhythm of your name.",glossary:{beat:"The beat is the steady pulse you can tap your foot to.",rhythm:"Rhythm is the pattern of long and short sounds.",tempo:"Tempo is how fast or slow the music goes.",note:"A note shows a sound and how long it lasts.",metronome:"A metronome ticks a steady beat."},whys:["A steady beat lets everyone play together.","Different note lengths make the rhythm interesting.","Tempo changes the mood: fast feels excited, slow feels calm."]}),Ut({id:"colormix",subject:"ela",title:"Art: mixing colors",blurb:"Primary and secondary colors.",pics:["color-wheel"],videos:["colormix"],points:["Primary colors: red, yellow, blue","Mix two primaries for a secondary color","Red + yellow = orange. Yellow + blue = green. Blue + red = purple","Warm colors feel cozy, cool colors feel calm"],examples:["A sunset uses warm colors: red, orange, yellow.","The ocean uses cool colors: blue and green.","Adding white makes a color lighter."],lab:{id:"colormix",title:"Paint Mixer",intro:"Mix the paint to match each color swatch, then paint the cube."},intro:"Welcome to art. Today we mix colors.",wrap:"Three primaries can make a whole rainbow.",homework:"Paint a color wheel using only red, yellow and blue.",glossary:{primary:"Primary colors are red, yellow and blue. You cannot make them by mixing.",secondary:"Secondary colors are made by mixing two primaries: orange, green, purple.",warm:"Warm colors, like red and orange, feel cozy or energetic.",cool:"Cool colors, like blue and green, feel calm.",palette:"A palette is a board for mixing paint.",hue:"Hue is another word for color."},whys:["Primaries can't be made from other colors, so they're the starting point.","Mixing two primaries gives a secondary color halfway between them.","Artists use warm and cool colors to set the mood."]}),Ut({id:"perspective",subject:"ela",title:"Art: perspective",blurb:"Making flat drawings look deep.",pics:["color-wheel"],videos:["perspective"],points:["Perspective makes a flat drawing look 3D","Lines going away meet at the vanishing point","Far things look smaller, near things look bigger","Overlap shows what is in front"],examples:["Railroad tracks meet at the horizon.","Trees in the distance look tiny.","A hand drawn over a face is closer than the face."],lab:{id:"cardsort",cfg:"perspective",title:"Near and Far",intro:"Sort the objects into foreground, middle and background."},intro:"In art today: perspective, the trick that makes a page look deep.",wrap:"Vanishing point, size change, overlap. Three tools for depth.",homework:"Draw a road that disappears into the distance.",glossary:{perspective:"Perspective is a way to show depth on a flat surface.",horizon:"The horizon is the line where the ground meets the sky.",vanishing:"The vanishing point is where lines going away from you appear to meet.",foreground:"The foreground is the part of a picture closest to you.",background:"The background is the part farthest away."},whys:["Our eyes see far things smaller, so drawings copy that.","Converging lines tell the brain something goes far away.","Overlapping shapes show which object is in front."]})],science:[Ut({id:"cell",subject:"science",title:"Plant cells",blurb:"Wall, chloroplasts, vacuole.",pics:["plant-cell"],videos:["cell"],points:["Cells are the tiny building blocks of living things","Cell wall: stiff outer layer for shape and support","Chloroplasts: make food from sunlight","Vacuole: stores water and keeps the cell firm"],examples:["Crunchy celery has cells full of water in their vacuoles. Wilted celery has lost that water.","Leaves are green because cells hold many chloroplasts.","The cell wall is like a cardboard box around a water balloon."],lab:{id:"cell",title:"Cell Explorer",intro:"Rotate the plant cell, click the parts, then play the find-it challenge."},intro:"Let's shrink down and explore a plant cell.",wrap:"Wall, chloroplasts, vacuole: three parts, three jobs.",homework:"Draw a plant cell and label the wall, chloroplasts and vacuole.",glossary:{"cell wall":"The cell wall is the strong outer layer that supports and protects a plant cell.",chloroplast:"Chloroplasts are the green structures where photosynthesis happens.",vacuole:"The vacuole is a large storage sac that holds water and nutrients.",photosynthesis:"Photosynthesis is how plants turn sunlight, water and carbon dioxide into sugar and oxygen.",chlorophyll:"Chlorophyll is the green pigment that captures sunlight.",nucleus:"The nucleus is the control center that holds the cell's DNA.",cell:"A cell is the smallest living building block of an organism.",mitochondria:"Mitochondria release energy from food for the cell to use."},whys:["Plants need cell walls because they have no skeleton, so the walls hold them up.","Chloroplasts matter because they turn sunlight into sugar.","Vacuoles are big in plants because water pressure keeps stems standing."]}),Ut({id:"photosynthesis",subject:"science",title:"Photosynthesis",blurb:"How plants make food.",pics:["photosynthesis"],videos:["photosynthesis"],points:["Plants make their own food: photosynthesis","Inputs: sunlight, water, carbon dioxide","Outputs: sugar (food) and oxygen","Chlorophyll in the chloroplasts captures the light"],examples:["A plant on a sunny windowsill grows toward the light.","Water goes up the roots, carbon dioxide comes in through the leaves.","The oxygen we breathe is made by plants and algae."],lab:{id:"photosynth",title:"Grow the Plant",intro:"Give your plant sunlight, water and carbon dioxide in the right balance and grow it tall."},intro:"Today's question: how does a plant eat?",wrap:"Sunlight, water, air in. Sugar and oxygen out.",homework:"Observe a plant for a week and record how it changes.",glossary:{photosynthesis:"Photosynthesis is how plants turn sunlight, water and carbon dioxide into sugar and oxygen.",chlorophyll:"Chlorophyll is the green pigment that captures sunlight.",glucose:"Glucose is the sugar plants make for energy.",oxygen:"Oxygen is the gas plants release that we breathe.","carbon dioxide":"Carbon dioxide is the gas plants take in from the air."},whys:["Plants can't hunt or eat, so they make food from light.","Light is the energy that powers the reaction.","Oxygen is a leftover the plant releases."]}),Ut({id:"watercycle",subject:"science",title:"The water cycle",blurb:"Evaporation to rain.",pics:["water-cycle"],videos:["watercycle"],points:["Evaporation: the sun turns water into vapor","Condensation: vapor cools into clouds","Precipitation: rain, snow or hail falls","Collection: water gathers and the cycle repeats"],examples:["Puddles disappear on a sunny day: evaporation.","A cold glass 'sweats': condensation.","Rivers carry rain back to the sea."],lab:{id:"cardsort",cfg:"watercycle",title:"Order the Cycle",intro:"Put the stages of the water cycle in order."},intro:"Water is always moving. Let's follow it.",wrap:"Evaporate, condense, precipitate, collect, repeat.",homework:"Draw the water cycle and label four stages.",glossary:{evaporation:"Evaporation is when liquid water warms up and becomes a gas called vapor.",condensation:"Condensation is when vapor cools into tiny droplets, forming clouds.",precipitation:"Precipitation is water falling from clouds as rain, snow, sleet or hail.",vapor:"Vapor is water in gas form.",cycle:"A cycle is a series of steps that repeats."},whys:["The sun supplies the energy to lift water into the air.","Cold air at height cools the vapor, so it condenses.","Gravity pulls the heavy droplets down as rain."]}),Ut({id:"gravity",subject:"science",title:"Gravity",blurb:"Why things fall and orbit.",pics:["orbit"],videos:["gravity"],points:["Gravity is a force that pulls objects together","Earth pulls everything toward its center","More mass means a stronger pull","Gravity keeps the Moon in orbit around Earth"],examples:["An apple falls straight down.","You'd weigh less on the Moon because it has less mass.","Without gravity the Moon would fly off into space."],lab:{id:"gravity",title:"Drop Zone",intro:"Pick a planet and an object, predict which lands first, then drop them."},intro:"Why does everything fall down? Today we explore gravity.",wrap:"Gravity pulls everything with mass.",homework:"Drop three objects from the same height and record what happens.",glossary:{gravity:"Gravity is the force that pulls objects with mass toward each other.",mass:"Mass is how much matter is in an object.",orbit:"An orbit is the curved path one object takes around another.",weight:"Weight is how hard gravity pulls on an object.",force:"A force is a push or a pull."},whys:["Earth is so massive that its pull is strong enough to keep us on the ground.","Without a push sideways, objects fall straight down.","The Moon moves sideways fast enough that it keeps missing Earth, which is an orbit."]})],history:[Ut({id:"egypt",subject:"history",title:"Ancient Egypt: the pyramids",blurb:"Building a wonder.",pics:["pyramid","timeline"],videos:["egypt"],points:["Pyramids were royal tombs built about 4,500 years ago","Workers moved stone on sledges and boats along the Nile","Architects planned each layer carefully","The Great Pyramid took about 20 years"],examples:["Blocks floated down the Nile during the yearly flood.","Ramps helped workers raise blocks higher.","The Great Pyramid was the tallest structure for almost 4,000 years."],lab:{id:"pyramid",title:"Pyramid Builders",intro:"Click to place stone blocks layer by layer. Your classmates haul the blocks."},intro:"Today we travel to ancient Egypt to see how people built mountains of stone.",wrap:"Planning, teamwork and the Nile made it possible.",homework:"Draw a pyramid and label two ways workers moved the stone.",glossary:{pharaoh:"A pharaoh was the king or queen of ancient Egypt.",pyramid:"A pyramid is a huge stone tomb with triangular sides.",nile:"The Nile is the long river that gave Egypt water, food and a way to move stone.",sledge:"A sledge is a sled used to drag heavy loads.",architect:"An architect plans how a building will be built.",tomb:"A tomb is a place where a person is buried."},whys:["The Nile was the highway of Egypt, so building near it made moving stone easier.","Planning mattered because mistakes in huge blocks were costly.","Pyramids were built to protect the pharaoh in the afterlife."]}),Ut({id:"silkroad",subject:"history",title:"The Silk Road",blurb:"Trade and ideas.",pics:["silk-map","timeline"],videos:["silkroad"],points:["A network of trade routes linking Asia, the Middle East and Europe","Silk, spices and paper traveled west","Caravans of camels crossed deserts","Ideas, religions and inventions traveled too"],examples:["Silk was made only in China at first.","Paper-making spread west along the routes.","Oasis towns grew rich from trade."],lab:{id:"cardsort",cfg:"silkroad",title:"Trade Match",intro:"Send each good to the city where it was famous."},intro:"Today: the Silk Road, history's great trading highway.",wrap:"Trade moves goods and ideas.",homework:"List three things traded and where each came from.",glossary:{caravan:"A caravan is a group of traders traveling together, often with camels.",oasis:"An oasis is a place in the desert with water.",trade:"Trade is exchanging goods or services.",silk:"Silk is a smooth fabric made from silkworm threads.",route:"A route is a path from one place to another."},whys:["Silk was rare and valuable, so people traveled far to trade for it.","Camels can go long distances without water.","When people meet to trade, they also share ideas."]}),Ut({id:"printing",subject:"history",title:"The printing press",blurb:"Books for everyone.",pics:["press","timeline"],videos:["printing"],points:["Before 1440, books were copied by hand","Gutenberg built a press with movable metal letters","Letters could be rearranged and reused","Books got cheaper and more people learned to read"],examples:["A monk could spend months copying one Bible.","A press could print hundreds of pages a day.","News and new ideas spread across Europe faster."],lab:{id:"press",title:"Set the Type",intro:"Pick letters from the tray to spell each word, then pull the lever to print."},intro:"Today we meet the invention that changed how ideas travel.",wrap:"Movable type made knowledge cheaper and faster to share.",homework:"Explain in two sentences how the press changed reading.",glossary:{press:"A printing press stamps ink from letters onto paper.","movable type":"Movable type is letters that can be rearranged and reused.",gutenberg:"Johannes Gutenberg built the first European movable-type press around 1440.",scribe:"A scribe copied books by hand.",manuscript:"A manuscript is a handwritten book."},whys:["Reusing letters made printing far faster than hand copying.","Cheaper books meant more people could learn to read.","Faster printing helped ideas spread."]}),Ut({id:"teaparty",subject:"history",title:"The Boston Tea Party",blurb:"A protest about taxes.",pics:["timeline"],videos:["teaparty"],points:["1773: colonists were taxed without a vote","'No taxation without representation'","Colonists threw 342 chests of tea into Boston Harbor","It helped push the colonies toward revolution"],examples:["The tax stayed on tea even though the price was low.","The protest was at night so colonists could act quickly.","Britain answered with harsh laws, which angered more colonists."],lab:{id:"cardsort",cfg:"teaparty",title:"Build the Timeline",intro:"Put the events leading to the Revolution in order."},intro:"Today: a night in Boston harbor that changed history.",wrap:"A protest about fairness helped start a country.",homework:"Write two sentences: why were colonists angry?",glossary:{colonist:"A colonist is a person who lives in a colony.",tax:"A tax is money people must pay to the government.",representation:"Representation means having people who speak and vote for you in government.",protest:"A protest is a public way to show disagreement.",revolution:"A revolution is a big change in government, often by force."},whys:["Colonists felt it was unfair to be taxed with no say in the decision.","Dumping the tea made a loud statement against the tax.","Britain's response pushed more colonists to side with the protesters."]}),Ut({id:"bill",subject:"history",title:"Government: how a bill becomes a law",blurb:"From idea to law.",pics:["bill-flow"],videos:["bill"],points:["It starts with an idea from a citizen","A member of Congress introduces a bill","Committees study it, then the House and Senate vote","The President signs it into law or vetoes it"],examples:["A town wants a crosswalk. A representative writes a bill.","Both the House and Senate must pass the same bill.","If the President vetoes, Congress can override with a big vote."],lab:{id:"cardsort",cfg:"bill",title:"Bill to Law",intro:"Put the steps in order so the bill becomes a law."},intro:"Today: how an idea becomes a law.",wrap:"Idea, bill, committee, vote, signature.",homework:"Pick a rule you'd like in school and list the steps to make it a law.",glossary:{bill:"A bill is a proposed law.",congress:"Congress is the part of government that makes laws: the House and the Senate.",veto:"A veto is when the President refuses to sign a bill.",committee:"A committee is a small group that studies a bill.",law:"A law is a rule that everyone must follow.",amendment:"An amendment is a change or addition."},whys:["Many steps keep a law from passing without careful thought.","Two chambers means more voices check the idea.","The President's signature is the last check."]}),Ut({id:"branches",subject:"history",title:"Government: three branches",blurb:"Checks and balances.",pics:["branches"],videos:["branches"],points:["Legislative (Congress): makes laws","Executive (President): carries out laws","Judicial (courts): decide what laws mean","Checks and balances: each branch limits the others"],examples:["Congress writes a law. The President signs it. Courts can say if it follows the Constitution.","The President can veto. Congress can override.","The Senate approves judges the President picks."],lab:{id:"cardsort",cfg:"branches",title:"Branch Sort",intro:"Drag each job to the branch that does it."},intro:"Today: why no one person holds all the power.",wrap:"Three branches keep power balanced.",homework:"Match five jobs to the right branch.",glossary:{legislative:"The legislative branch, Congress, makes laws.",executive:"The executive branch, led by the President, carries out laws.",judicial:"The judicial branch, the courts, decides what laws mean.",constitution:"The Constitution is the set of rules for how the government works.","checks and balances":"Checks and balances let each branch limit the power of the others."},whys:["Splitting power prevents any one person from becoming too strong.","Each branch can check the others, so mistakes can be fixed.","The Constitution spells out each branch's job."]}),Ut({id:"election",subject:"history",title:"Government: election day",blurb:"How voting works.",pics:["bill-flow"],videos:["election"],points:["Citizens vote to choose leaders","A ballot is secret so people vote freely","Votes are counted by officials","The candidate with the most votes wins"],examples:["A class votes for a class pet.","A mayor wins by getting the most votes.","Every vote counts, even in close elections."],lab:{id:"vote",title:"Class Vote",intro:"Cast your vote for the class pet and see how your classmates vote."},intro:"Today: how a community makes a decision by voting.",wrap:"Voting gives everyone a say.",homework:"Ask three people what they'd vote for and tally the answers.",glossary:{ballot:"A ballot is the paper or screen where you mark your vote.",candidate:"A candidate is a person running for an office.",election:"An election is when people vote to choose leaders.",majority:"A majority is more than half of the votes.",poll:"A poll is where people vote, or a survey of opinions."},whys:["Secret ballots let people vote without pressure.","Counting every vote keeps the result fair.","Voting lets citizens help decide how they are governed."]})]},LM=Object.values(Of).flat();var Bf=n=>{let e=Of[n],t=Math.floor(Date.now()/864e5);return e[t%e.length]};var uv=`.bb{position:fixed;inset:0;z-index:60;display:none;background:rgba(40,30,30,.5);align-items:center;justify-content:center;font-family:"Fredoka","Trebuchet MS",system-ui,sans-serif;color:#4A3B3F}.bb.show{display:flex}
.bb-card{width:min(980px,96vw);max-height:94vh;overflow:auto;background:#F3E7CF;border-radius:18px;padding:16px 20px;box-shadow:0 3px 0 #C9B28A,0 14px 34px rgba(60,40,30,.45);border:1px solid rgba(255,255,255,.8);display:flex;flex-direction:column;gap:12px}
.bb-head{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}.bb-head h2{font-size:22px;font-weight:600}.bb-head small{color:#8A7A70;font-size:13px;display:block}
.bb-notes{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px}.bb-note{background:#FFF9F0;border-radius:6px;padding:10px 12px;box-shadow:0 2px 0 #C9B28A;font-size:14px;line-height:1.35;position:relative}.bb-note:before{content:"";position:absolute;top:-6px;left:50%;width:10px;height:10px;border-radius:50%;background:#E07A66;transform:translateX(-50%);box-shadow:0 1px 0 #b95a48}.bb-note b{display:block;margin-bottom:2px}
.bb-rows{display:flex;flex-direction:column;gap:8px}.bb-row{display:grid;grid-template-columns:100px 1fr;gap:8px;align-items:center}.bb-row>b{font-size:16px}
.bb-slots{display:flex;flex-wrap:wrap;gap:6px}.bb-slot{font:inherit;font-size:13px;color:#4A3B3F;background:#fff;border:2px solid #C9B28A;border-radius:10px;padding:5px 10px;cursor:pointer;min-height:34px}
.bb-slot.named{background:#EEF4E4}.bb-slot.on{background:#E07A66;color:#fff;border-color:#b95a48}.bb-slot:disabled{opacity:.4;cursor:not-allowed}.bb-slot:focus-visible,.bb-btn:focus-visible{outline:3px solid #4F91C7;outline-offset:2px}
.bb-slot small{display:block;font-size:10px;opacity:.75}.bb-foot{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.bb-count{font-size:14px;font-weight:600}.bb-msg{font-size:13px;color:#b95a48;min-height:18px}
.bb-btn{font:inherit;font-size:15px;color:#4A3B3F;background:#FFF9F0;border:1px solid rgba(255,255,255,.8);border-radius:10px;padding:7px 14px;cursor:pointer;box-shadow:0 2px 0 #C9B28A;min-height:36px}.bb-btn.pri{background:#E07A66;color:#fff;box-shadow:0 2px 0 #b95a48}.bb-btn:disabled{opacity:.5;cursor:not-allowed}
.bb-perm{background:#FFF9F0;border-radius:10px;padding:10px 12px;display:none;gap:8px;flex-direction:column;font-size:14px}.bb-perm.show{display:flex}.bb-perm input{font:inherit;padding:6px 8px;border:2px solid #C9B28A;border-radius:8px;width:120px}`,zf=!1,dv=()=>{if(zf)return;zf=!0;let n=document.createElement("style");n.textContent=uv,document.head.appendChild(n)};function nt(n,e="",t,i){let s=document.createElement(n);return e&&(s.className=e),i!==void 0&&(s.textContent=i),t?.appendChild(s),s}var ec=class{constructor(e=document.body){this.onClose=()=>{};this.onChange=()=>{};this.extraMode=!1;dv(),this.root=nt("div","bb",e),this.root.setAttribute("role","dialog"),this.root.setAttribute("aria-label","Bulletin board"),this.card=nt("div","bb-card",this.root),addEventListener("keydown",t=>{t.key==="Escape"&&this.isOpen&&be.minMet&&this.close()}),be.onChange(()=>{this.isOpen&&this.render()})}get isOpen(){return this.root.classList.contains("show")}open(e=!1){this.extraMode=e,this.root.classList.add("show"),this.render(),this.root.querySelector("button")?.focus({preventScroll:!0})}close(){this.isOpen&&(be.markSeen(),this.root.classList.remove("show"),this.onClose())}render(){let e=this.card,t=be.day;e.innerHTML="";let i=nt("div","bb-head",e),s=nt("div","",i);nt("h2","",s,"Daily Bulletin Board"),nt("small","",s,`${new Date().toDateString()}  \xB7  academy time ${cs(be.now())}`);let r=nt("div","bb-foot",i),a=nt("button","bb-btn",r,"Skip ahead to next class");a.type="button",a.onclick=()=>{be.skipToNext(),this.onChange()};let l=nt("div","bb-notes",e),c=hs.map(v=>`${Xi[v]}: ${Bf(v).title}`),o=nt("div","bb-note",l);nt("b","",o,"Today's lessons"),c.forEach(v=>nt("div","",o,v));let u=nt("div","bb-note",l);nt("b","",u,"Plan your day"),nt("div","",u,`Pick at least ${wa} classes. Times cannot overlap. Finished early? Add up to ${Kl} extra lessons. More needs a teacher and a parent.`);let d=nt("div","bb-note",l);nt("b","",d,"Library and news"),nt("div","",d,"Check out a book for homework, join a study group, and watch the afternoon newsroom for field reports.");let h=nt("div","bb-rows",e);for(let v of hs){let w=nt("div","bb-row",h);nt("b","",w,Xi[v]);let T=nt("div","bb-slots",w),R=be.signupFor(v,!0);for(let x of t.slots[v]){let E=t.signups.some(D=>D.slotId===x.id),P=be.conflict(x),_=R?.status==="done"&&R.slotId===x.id,I=R&&R.status!=="planned"&&R.slotId!==x.id&&!R.extra||_,U=nt("button","bb-slot"+(x.kind!=="random"?" named":"")+(E?" on":""),T);U.type="button",U.disabled=!E&&(!!P||!!I)||!this.extraMode&&!!R&&R.status!=="planned"&&!E,U.textContent=cs(x.start),x.kind!=="random"&&nt("small","",U,x.kind[0].toUpperCase()+x.kind.slice(1)),U.title=P?`Overlaps ${Xi[P.subject]} at ${cs(P.start)}`:"",U.onclick=()=>{if(E)be.unchoose(v);else{let D=be.choose(x,!!(this.extraMode&&be.signupFor(v,!0)&&!R?.extra));D.ok||(S.textContent=D.why??"")}this.onChange()}}}let f=nt("div","bb-foot",e),g=nt("span","bb-count",f,`${be.required.length} classes chosen (at least ${wa}, extras allowed)${be.extras.length?`  \xB7  ${be.extras.length} extra`:""}`),S=nt("span","bb-msg",f),m=nt("button","bb-btn",f,"Add an extra lesson");m.type="button",m.disabled=!be.minMet,m.title="Finished early? Add another lesson.";let p=nt("div","bb-perm",e),M=()=>{p.classList.add("show"),p.innerHTML="",nt("div","",p,"You have used your two extra lessons. A teacher and a parent must approve more.");let v=nt("input","",p);v.type="password",v.inputMode="numeric",v.maxLength=4,v.placeholder=be.parentPinSet()?"Parent PIN":"Set a parent PIN (4 digits)",v.setAttribute("aria-label","Parent PIN");let w=nt("button","bb-btn pri",p,"Ask teacher and parent");w.type="button",w.onclick=()=>{let T=be.requestPermission(v.value,be.avgScore());T.ok?(p.classList.remove("show"),S.textContent="Teacher and parent approved.",this.render()):S.textContent=T.why??""}};m.onclick=()=>{if(be.canAddExtra().needsPermission){M();return}let w=hs.find(R=>!be.signupFor(R,!0)?.extra&&be.signupFor(R,!0)?.status==="done")??hs[0],T=be.addExtra(w);S.textContent=T.ok?`Extra ${Xi[w]} lesson added.`:T.why??"",this.onChange()};let A=nt("button","bb-btn pri",f,be.minMet?"Confirm my day":`Pick ${wa-be.required.length} more`);A.type="button",A.disabled=!be.minMet,A.onclick=()=>this.close()}};var It=n=>document.getElementById(n),vt=new Wl(It("game"));window.__hall=vt;vt.onToast=n=>{let e=It("toast");e.textContent=n,e.classList.toggle("show",!!n),clearTimeout(vt._tt),n&&(vt._tt=setTimeout(()=>e.classList.remove("show"),3500))};var dr=new Jl(vt,document.body);window.__social=dr;var us=new Zl(document.body);window.__creator=us;var xi=n=>{vt.inputLocked=n},ds=new ec(document.body);window.__bulletin=ds;ds.onClose=()=>xi(!1);ds.onChange=()=>{};vt.gate=n=>{if(!kf.has(n))return null;let e=be.canStart(n);return e.ok?null:e.why??"Not yet"};vt.onGate=(n,e)=>{(!be.seen||/bulletin|schedule/i.test(e))&&(xi(!0),ds.open())};It("bBoard").onclick=()=>{xi(!0),ds.open()};be.onChange(()=>{It("bBoard").textContent=be.minMet?`Today: ${be.required.length} classes`:"Bulletin board"});us.onSave=n=>{vt.setAvatar(n),xi(!1),vt.onToast(`Looking good, ${n.name}!`)};us.onCancel=()=>xi(!1);It("bAvatar").onclick=()=>{xi(!0),us.show()};It("bFriends").onclick=()=>dr.journal.toggle();var Xh=It("talkChip");dr.onNearby=n=>{Xh.classList.toggle("show",!!n),n&&(Xh.textContent=`Talk to ${n.def?.first} (T)`)};Xh.onclick=()=>{dr.nearby&&dr.talkTo(dr.nearby)};Ae.profile.hasAvatar?be.seen||setTimeout(()=>{xi(!0),ds.open()},900):setTimeout(()=>{xi(!0),us.show()},600);us.onSave=(n=>e=>{n?.(e),be.seen||setTimeout(()=>{xi(!0),ds.open()},500)})(us.onSave);var ur={},Hf=()=>{vt.input.x=(ur.r?1:0)-(ur.l?1:0),vt.input.y=(ur.d?1:0)-(ur.u?1:0)};document.querySelectorAll("[data-k]").forEach(n=>{let e=n.dataset.k;n.addEventListener("pointerdown",t=>{t.preventDefault(),ur[e]=!0,Hf()}),["pointerup","pointerleave","pointercancel"].forEach(t=>n.addEventListener(t,()=>{ur[e]=!1,Hf()}))});document.querySelectorAll("[data-rot]").forEach(n=>{let e=+n.dataset.rot;n.addEventListener("pointerdown",t=>{t.preventDefault(),vt.rotate=e}),["pointerup","pointerleave","pointercancel"].forEach(t=>n.addEventListener(t,()=>{vt.rotate=0}))});var tc=It("goMenu");_f.forEach(n=>{let e=document.createElement("button");e.innerHTML=`<i style="background:${n.color}"></i>${n.label}`,e.onclick=()=>{tc.classList.remove("show"),vt.goTo(n.key)},tc.appendChild(e)});It("bGo").onclick=()=>tc.classList.toggle("show");It("game").addEventListener("pointerdown",()=>tc.classList.remove("show"));It("bSpd").onclick=()=>{vt.speed=vt.speed===1?4:vt.speed===4?16:1,It("bSpd").textContent=`Speed x${vt.speed}`};var fv={close:"Close-up",overview:"Overview",first:"First person"};It("bView").onclick=()=>{let n=vt.cycleView();It("bView").textContent=`View: ${fv[n]}`};setInterval(()=>{let n=Wn[Math.max(0,vt.idx)];It("clk").textContent=Ol(vt.clock),It("per").textContent=n.name,It("fill").style.width=`${(vt.clock-n.start)/n.len*100}%`;let e=vt.students.filter(a=>!a.hidden).length;It("cnt").textContent=`${e} in the hall, ${vt.students.length-e} in class or away`;let[t,i,s,r]=vt.tint;It("tint").style.background=`rgba(${t|0},${i|0},${s|0},${r})`},200);(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256);for(let i=0;i<t.data.length;i+=4){let s=226+Math.random()*29;t.data[i]=s,t.data[i+1]=s*.965,t.data[i+2]=s*.9,t.data[i+3]=255}e.putImageData(t,0,0),e.lineCap="round";for(let i=0;i<260;i++){e.strokeStyle=`rgba(255,250,240,${.08+Math.random()*.16})`,e.lineWidth=.6+Math.random()*.5;let s=Math.random()*256,r=Math.random()*256,a=Math.random()*6.28,l=3+Math.random()*9;e.beginPath(),e.moveTo(s,r),e.lineTo(s+Math.cos(a)*l,r+Math.sin(a)*l),e.stroke()}It("paper").style.backgroundImage=`url(${n.toDataURL()})`})();})();
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
