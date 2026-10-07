"use strict";(()=>{var Ro="186";var yu=0,bh=1,xu=2;var Or=1,Po=2,Fs=3,Pi=0,sn=1,Tn=2,Qn=0,Us=1,Sh=2,Mh=3,Th=4,_u=5;var $i=100,vu=101,bu=102,Su=103,Mu=104,Tu=200,Eu=201,wu=202,Au=203,Eh=204,wh=205,Cu=206,Ru=207,Pu=208,Iu=209,Lu=210,Du=211,Nu=212,Fu=213,Uu=214,$a=0,Ya=1,Za=2,Ms=3,Ja=4,Ka=5,ja=6,Qa=7,Ah=0,Ou=1,ku=2,Bn=0,Ch=1,Rh=2,Ph=3,Ih=4,Lh=5,Dh=6,Nh=7;var Fh=300,Ii=301,Yi=302,Io=303,Lo=304,kr=306,Ts=1e3,Yn=1001,eo=1002,kt=1003,Bu=1004;var Br=1005;var Vt=1006,Do=1007;var Li=1008;var ln=1009,Uh=1010,Oh=1011,Os=1012,No=1013,zn=1014,En=1015,Hn=1016,Fo=1017,Uo=1018,ks=1020,kh=35902,Bh=35899,zh=1021,Hh=1022,wn=1023,Zn=1026,Di=1027,Oo=1028,ko=1029,Ni=1030,Bo=1031;var zo=1033,zr=33776,Hr=33777,Vr=33778,Gr=33779,Ho=35840,Vo=35841,Go=35842,Wo=35843,Xo=36196,qo=37492,$o=37496,Yo=37488,Zo=37489,Wr=37490,Jo=37491,Ko=37808,jo=37809,Qo=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,hl=37820,cl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,Xr=36285,gl=36286;var fr=2300,to=2301,Wa=2302,fh=2303,ph=2400,mh=2401,gh=2402;var zu=3200;var yl=0,Hu=1,di="",Ot="srgb",pr="srgb-linear",mr="linear",ot="srgb";var Xa=7680;var Vu=519,Gu=512,Wu=513,Xu=514,xl=515,qu=516,$u=517,_l=518,Yu=519,Vh=35044;var Gh="300 es",On=2e3,Es=2001;function Cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zu(){let n=gr("canvas");return n.style.display="block",n}var zc={},ws=null;function yr(...n){let e="THREE."+n.shift();ws?ws("log",e,...n):console.log(e,...n)}function Ju(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=Ju(n);let e="THREE."+n.shift();if(ws)ws("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Be(...n){n=Ju(n);let e="THREE."+n.shift();if(ws)ws("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Gi(...n){let e=n.join(" ");e in zc||(zc[e]=!0,Oe(...n))}function Ku(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ju={[$a]:Ya,[Za]:ja,[Ja]:Qa,[Ms]:Ka,[Ya]:$a,[ja]:Za,[Qa]:Ja,[Ka]:Ms},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qa=Math.PI/180,no=180/Math.PI;function Si(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Pf(n,e){return(n%e+e)%e}function Vl(n,e,t){return(1-t)*n+t*e}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ze=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,h){let l=i[s+0],o=i[s+1],u=i[s+2],d=i[s+3],c=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==c||o!==f||u!==g){let p=l*c+o*f+u*g+d*_;p<0&&(c=-c,f=-f,g=-g,_=-_,p=-p);let m=1-h;if(p<.9995){let T=Math.acos(p),A=Math.sin(T);m=Math.sin(m*T)/A,h=Math.sin(h*T)/A,l=l*m+c*h,o=o*m+f*h,u=u*m+g*h,d=d*m+_*h}else{l=l*m+c*h,o=o*m+f*h,u=u*m+g*h,d=d*m+_*h;let T=1/Math.sqrt(l*l+o*o+u*u+d*d);l*=T,o*=T,u*=T,d*=T}}e[t]=l,e[t+1]=o,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let h=i[s],l=i[s+1],o=i[s+2],u=i[s+3],d=r[a],c=r[a+1],f=r[a+2],g=r[a+3];return e[t]=h*g+u*d+l*f-o*c,e[t+1]=l*g+u*c+o*d-h*f,e[t+2]=o*g+u*f+h*c-l*d,e[t+3]=u*g-h*d-l*c-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,h=Math.cos,l=Math.sin,o=h(i/2),u=h(s/2),d=h(r/2),c=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=c*u*d+o*f*g,this._y=o*f*d-c*u*g,this._z=o*u*g+c*f*d,this._w=o*u*d-c*f*g;break;case"YXZ":this._x=c*u*d+o*f*g,this._y=o*f*d-c*u*g,this._z=o*u*g-c*f*d,this._w=o*u*d+c*f*g;break;case"ZXY":this._x=c*u*d-o*f*g,this._y=o*f*d+c*u*g,this._z=o*u*g+c*f*d,this._w=o*u*d-c*f*g;break;case"ZYX":this._x=c*u*d-o*f*g,this._y=o*f*d+c*u*g,this._z=o*u*g-c*f*d,this._w=o*u*d+c*f*g;break;case"YZX":this._x=c*u*d+o*f*g,this._y=o*f*d+c*u*g,this._z=o*u*g-c*f*d,this._w=o*u*d-c*f*g;break;case"XZY":this._x=c*u*d-o*f*g,this._y=o*f*d-c*u*g,this._z=o*u*g+c*f*d,this._w=o*u*d+c*f*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],h=t[5],l=t[9],o=t[2],u=t[6],d=t[10],c=i+h+d;if(c>0){let f=.5/Math.sqrt(c+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-o)*f,this._z=(a-s)*f}else if(i>h&&i>d){let f=2*Math.sqrt(1+i-h-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+o)/f}else if(h>d){let f=2*Math.sqrt(1+h-i-d);this._w=(r-o)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-h);this._w=(a-s)/f,this._x=(r+o)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,h=t._x,l=t._y,o=t._z,u=t._w;return this._x=i*u+a*h+s*o-r*l,this._y=s*u+a*l+r*h-i*o,this._z=r*u+a*o+i*l-s*h,this._w=a*u-i*h-s*l-r*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,h=this.dot(e);h<0&&(i=-i,s=-s,r=-r,a=-a,h=-h);let l=1-t;if(h<.9995){let o=Math.acos(h),u=Math.sin(o);l=Math.sin(l*o)/u,t=Math.sin(t*o)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,h=e.z,l=e.w,o=2*(a*s-h*i),u=2*(h*t-r*s),d=2*(r*i-a*t);return this.x=t+l*o+a*d-h*u,this.y=i+l*u+h*o-r*d,this.z=s+l*d+r*u-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,h=t.y,l=t.z;return this.x=s*l-r*h,this.y=r*a-i*l,this.z=i*h-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new L,Hc=new dn,Ge=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,h,l,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,h,l,o)}set(e,t,i,s,r,a,h,l,o){let u=this.elements;return u[0]=e,u[1]=s,u[2]=h,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],h=i[3],l=i[6],o=i[1],u=i[4],d=i[7],c=i[2],f=i[5],g=i[8],_=s[0],p=s[3],m=s[6],T=s[1],A=s[4],v=s[7],M=s[2],E=s[5],R=s[8];return r[0]=a*_+h*T+l*M,r[3]=a*p+h*A+l*E,r[6]=a*m+h*v+l*R,r[1]=o*_+u*T+d*M,r[4]=o*p+u*A+d*E,r[7]=o*m+u*v+d*R,r[2]=c*_+f*T+g*M,r[5]=c*p+f*A+g*E,r[8]=c*m+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],u=e[8];return t*a*u-t*h*o-i*r*u+i*h*l+s*r*o-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],u=e[8],d=u*a-h*o,c=h*l-u*r,f=o*r-a*l,g=t*d+i*c+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*o-u*i)*_,e[2]=(h*i-s*a)*_,e[3]=c*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-h*t)*_,e[6]=f*_,e[7]=(i*l-o*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,h){let l=Math.cos(r),o=Math.sin(r);return this.set(i*l,i*o,-i*(l*a+o*h)+a+e,-s*o,s*l,-s*(-o*a+l*h)+h+t,0,0,1),this}scale(e,t){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wl=new Ge,Vc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){let n={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pr]:{primaries:e,whitePoint:i,transfer:mr,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),n}var Qe=If();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ss,io=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=gr("canvas")),ss.width=e.width,ss.height=e.height;let s=ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lf=0,As=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,h=s.length;a<h;a++)s[a].isDataTexture?r.push(Xl(s[a].image)):r.push(Xl(s[a]))}else r=Xl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?io.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Df=0,ql=new L,nn=class n extends Jn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Yn,s=Yn,r=Vt,a=Li,h=wn,l=ln,o=n.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Si(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=h,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Fh;nn.DEFAULT_ANISOTROPY=1;var St=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,o=l[0],u=l[4],d=l[8],c=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-c)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+c)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(o+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(o+1)/2,v=(f+1)/2,M=(m+1)/2,E=(u+c)/4,R=(d+_)/4,y=(g+p)/4;return A>v&&A>M?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=E/i,r=R/i):v>M?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=y/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=R/r,s=y/r),this.set(i,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(c-u)*(c-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-_)/T,this.z=(c-u)/T,this.w=Math.acos((o+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},so=class extends Jn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new nn(s),a=i.count;for(let h=0;h<a;h++)this.textures[h]=r.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new As(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends so{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xr=class extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var st=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,h,l,o,u,d,c,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,h,l,o,u,d,c,f,g,_,p)}set(e,t,i,s,r,a,h,l,o,u,d,c,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=h,m[13]=l,m[2]=o,m[6]=u,m[10]=d,m[14]=c,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),h=Math.sin(i),l=Math.cos(s),o=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let c=a*u,f=a*d,g=h*u,_=h*d;t[0]=l*u,t[4]=-l*d,t[8]=o,t[1]=f+g*o,t[5]=c-_*o,t[9]=-h*l,t[2]=_-c*o,t[6]=g+f*o,t[10]=a*l}else if(e.order==="YXZ"){let c=l*u,f=l*d,g=o*u,_=o*d;t[0]=c+_*h,t[4]=g*h-f,t[8]=a*o,t[1]=a*d,t[5]=a*u,t[9]=-h,t[2]=f*h-g,t[6]=_+c*h,t[10]=a*l}else if(e.order==="ZXY"){let c=l*u,f=l*d,g=o*u,_=o*d;t[0]=c-_*h,t[4]=-a*d,t[8]=g+f*h,t[1]=f+g*h,t[5]=a*u,t[9]=_-c*h,t[2]=-a*o,t[6]=h,t[10]=a*l}else if(e.order==="ZYX"){let c=a*u,f=a*d,g=h*u,_=h*d;t[0]=l*u,t[4]=g*o-f,t[8]=c*o+_,t[1]=l*d,t[5]=_*o+c,t[9]=f*o-g,t[2]=-o,t[6]=h*l,t[10]=a*l}else if(e.order==="YZX"){let c=a*l,f=a*o,g=h*l,_=h*o;t[0]=l*u,t[4]=_-c*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-h*u,t[2]=-o*u,t[6]=f*d+g,t[10]=c-_*d}else if(e.order==="XZY"){let c=a*l,f=a*o,g=h*l,_=h*o;t[0]=l*u,t[4]=-d,t[8]=o*u,t[1]=c*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=h*u,t[10]=_*d+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nf,e,Ff)}lookAt(e,t,i){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),yi.crossVectors(i,hn),yi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),yi.crossVectors(i,hn)),yi.normalize(),ga.crossVectors(hn,yi),s[0]=yi.x,s[4]=ga.x,s[8]=hn.x,s[1]=yi.y,s[5]=ga.y,s[9]=hn.y,s[2]=yi.z,s[6]=ga.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],h=i[4],l=i[8],o=i[12],u=i[1],d=i[5],c=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],T=i[3],A=i[7],v=i[11],M=i[15],E=s[0],R=s[4],y=s[8],w=s[12],P=s[1],S=s[5],I=s[9],k=s[13],D=s[2],V=s[6],Z=s[10],N=s[14],ie=s[3],G=s[7],K=s[11],B=s[15];return r[0]=a*E+h*P+l*D+o*ie,r[4]=a*R+h*S+l*V+o*G,r[8]=a*y+h*I+l*Z+o*K,r[12]=a*w+h*k+l*N+o*B,r[1]=u*E+d*P+c*D+f*ie,r[5]=u*R+d*S+c*V+f*G,r[9]=u*y+d*I+c*Z+f*K,r[13]=u*w+d*k+c*N+f*B,r[2]=g*E+_*P+p*D+m*ie,r[6]=g*R+_*S+p*V+m*G,r[10]=g*y+_*I+p*Z+m*K,r[14]=g*w+_*k+p*N+m*B,r[3]=T*E+A*P+v*D+M*ie,r[7]=T*R+A*S+v*V+M*G,r[11]=T*y+A*I+v*Z+M*K,r[15]=T*w+A*k+v*N+M*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],h=e[5],l=e[9],o=e[13],u=e[2],d=e[6],c=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],T=l*f-o*c,A=h*f-o*d,v=h*c-l*d,M=a*f-o*u,E=a*c-l*u,R=a*d-h*u;return t*(_*T-p*A+m*v)-i*(g*T-p*M+m*E)+s*(g*A-_*M+m*R)-r*(g*v-_*E+p*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],h=e[9],l=e[2],o=e[6],u=e[10];return t*(a*u-h*o)-i*(r*u-h*l)+s*(r*o-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],h=e[5],l=e[6],o=e[7],u=e[8],d=e[9],c=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],T=t*h-i*a,A=t*l-s*a,v=t*o-r*a,M=i*l-s*h,E=i*o-r*h,R=s*o-r*l,y=u*_-d*g,w=u*p-c*g,P=u*m-f*g,S=d*p-c*_,I=d*m-f*_,k=c*m-f*p,D=T*k-A*I+v*S+M*P-E*w+R*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return e[0]=(h*k-l*I+o*S)*V,e[1]=(s*I-i*k-r*S)*V,e[2]=(_*R-p*E+m*M)*V,e[3]=(c*E-d*R-f*M)*V,e[4]=(l*P-a*k-o*w)*V,e[5]=(t*k-s*P+r*w)*V,e[6]=(p*v-g*R-m*A)*V,e[7]=(u*R-c*v+f*A)*V,e[8]=(a*I-h*P+o*y)*V,e[9]=(i*P-t*I-r*y)*V,e[10]=(g*E-_*v+m*T)*V,e[11]=(d*v-u*E-f*T)*V,e[12]=(h*w-a*S-l*y)*V,e[13]=(t*S-i*w+s*y)*V,e[14]=(_*A-g*M-p*T)*V,e[15]=(u*M-d*A+c*T)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,h=e.y,l=e.z,o=r*a,u=r*h;return this.set(o*a+i,o*h-s*l,o*l+s*h,0,o*h+s*l,u*h+i,u*l-s*a,0,o*l-s*h,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,h=t._z,l=t._w,o=r+r,u=a+a,d=h+h,c=r*o,f=r*u,g=r*d,_=a*u,p=a*d,m=h*d,T=l*o,A=l*u,v=l*d,M=i.x,E=i.y,R=i.z;return s[0]=(1-(_+m))*M,s[1]=(f+v)*M,s[2]=(g-A)*M,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(c+m))*E,s[6]=(p+T)*E,s[7]=0,s[8]=(g+A)*R,s[9]=(p-T)*R,s[10]=(1-(c+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=rs.set(s[0],s[1],s[2]).length(),h=rs.set(s[4],s[5],s[6]).length(),l=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let o=1/a,u=1/h,d=1/l;return Nn.elements[0]*=o,Nn.elements[1]*=o,Nn.elements[2]*=o,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,t.setFromRotationMatrix(Nn),i.x=a,i.y=h,i.z=l,this}makePerspective(e,t,i,s,r,a,h=On,l=!1){let o=this.elements,u=2*r/(t-e),d=2*r/(i-s),c=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(h===On)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(h===Es)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return o[0]=u,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=d,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,s,r,a,h=On,l=!1){let o=this.elements,u=2/(t-e),d=2/(i-s),c=-(t+e)/(t-e),f=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(h===On)g=-2/(a-r),_=-(a+r)/(a-r);else if(h===Es)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return o[0]=u,o[4]=0,o[8]=0,o[12]=c,o[1]=0,o[5]=d,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=g,o[14]=_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},rs=new L,Nn=new st,Nf=new L(0,0,0),Ff=new L(1,1,1),yi=new L,ga=new L,hn=new L,Wc=new st,Xc=new dn,kn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],h=s[8],l=s[1],o=s[5],u=s[9],d=s[2],c=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,o),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(h,f),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,o),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(h,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,o),this._y=Math.atan2(h,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Uf=0,qc=new L,as=new dn,ri=new st,ya=new L,ir=new L,Of=new L,kf=new dn,$c=new L(1,0,0),Yc=new L(0,1,0),Zc=new L(0,0,1),Jc={type:"added"},Bf={type:"removed"},os={type:"childadded",child:null},$l={type:"childremoved",child:null},Bt=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new kn,i=new dn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Ge}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ya.copy(e):ya.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ir,ya,this.up):ri.lookAt(ya,ir,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),as.setFromRotationMatrix(ri),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),os.child=e,this.dispatchEvent(os),os.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,h=r.length;a<h;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(h,l){return h[l.uuid]===void 0&&(h[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let l=h.shapes;if(Array.isArray(l))for(let o=0,u=l.length;o<u;o++){let d=l[o];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let l=0,o=this.material.length;l<o;l++)h.push(r(e.materials,this.material[l]));s.material=h}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){let l=this.animations[h];s.animations.push(r(e.animations,l))}}if(t){let h=a(e.geometries),l=a(e.materials),o=a(e.textures),u=a(e.images),d=a(e.shapes),c=a(e.skeletons),f=a(e.animations),g=a(e.nodes);h.length>0&&(i.geometries=h),l.length>0&&(i.materials=l),o.length>0&&(i.textures=o),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(h){let l=[];for(let o in h){let u=h[o];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new L(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zf={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,h=this._targetRay,l=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),m=this._getHandJoint(o,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=o.joints["index-finger-tip"],d=o.joints["thumb-tip"],c=u.position.distanceTo(d.position),f=.02,g=.005;o.inputState.pinching&&c>f+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&c<=f-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return h!==null&&(h.visible=s!==null),l!==null&&(l.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Yl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=Pf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Yl(a,r,e+1/3),this.g=Yl(a,r,e),this.b=Yl(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],h=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=Qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Qe.workingToColorSpace(Yt.copy(this),e),Math.round(et(Yt.r*255,0,255))*65536+Math.round(et(Yt.g*255,0,255))*256+Math.round(et(Yt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Yt.copy(this),t);let i=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(i,s,r),h=Math.min(i,s,r),l,o,u=(h+a)/2;if(h===a)l=0,o=0;else{let d=a-h;switch(o=u<=.5?d/(a+h):d/(2-a-h),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=o,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ot){Qe.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,s=Yt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(xa);let i=Vl(xi.h,xa.h,t),s=Vl(xi.s,xa.s,t),r=Vl(xi.l,xa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new We;We.NAMES=Qu;var _r=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vr=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new L,ai=new L,Zl=new L,oi=new L,ls=new L,hs=new L,Kc=new L,Jl=new L,Kl=new L,jl=new L,Ql=new St,eh=new St,th=new St,$n=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Fn.subVectors(s,t),ai.subVectors(i,t),Zl.subVectors(e,t);let a=Fn.dot(Fn),h=Fn.dot(ai),l=Fn.dot(Zl),o=ai.dot(ai),u=ai.dot(Zl),d=a*o-h*h;if(d===0)return r.set(0,0,0),null;let c=1/d,f=(o*l-h*u)*c,g=(a*u-h*l)*c;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,a,h,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(h,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ql.setScalar(0),eh.setScalar(0),th.setScalar(0),Ql.fromBufferAttribute(e,t),eh.fromBufferAttribute(e,i),th.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ql,r.x),a.addScaledVector(eh,r.y),a.addScaledVector(th,r.z),a}static isFrontFacing(e,t,i,s){return Fn.subVectors(i,t),ai.subVectors(e,t),Fn.cross(ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,h;ls.subVectors(s,i),hs.subVectors(r,i),Jl.subVectors(e,i);let l=ls.dot(Jl),o=hs.dot(Jl);if(l<=0&&o<=0)return t.copy(i);Kl.subVectors(e,s);let u=ls.dot(Kl),d=hs.dot(Kl);if(u>=0&&d<=u)return t.copy(s);let c=l*d-u*o;if(c<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ls,a);jl.subVectors(e,r);let f=ls.dot(jl),g=hs.dot(jl);if(g>=0&&f<=g)return t.copy(r);let _=f*o-l*g;if(_<=0&&o>=0&&g<=0)return h=o/(o-g),t.copy(i).addScaledVector(hs,h);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Kc.subVectors(r,s),h=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Kc,h);let m=1/(p+_+c);return a=_*m,h=c*m,t.copy(i).addScaledVector(ls,a).addScaledVector(hs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,h=r.count;a<h;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),va.subVectors(this.max,sr),cs.subVectors(e.a,sr),us.subVectors(e.b,sr),ds.subVectors(e.c,sr),_i.subVectors(us,cs),vi.subVectors(ds,us),Bi.subVectors(cs,ds);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Bi.y,Bi.x,0];return!nh(t,cs,us,ds,va)||(t=[1,0,0,0,1,0,0,0,1],!nh(t,cs,us,ds,va))?!1:(ba.crossVectors(_i,vi),t=[ba.x,ba.y,ba.z],nh(t,cs,us,ds,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new L,new L,new L,new L,new L,new L,new L,new L],Un=new L,_a=new Mn,cs=new L,us=new L,ds=new L,_i=new L,vi=new L,Bi=new L,sr=new L,va=new L,ba=new L,zi=new L;function nh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zi.fromArray(n,r);let h=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),o=t.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(l,o,u),Math.min(l,o,u))>h)return!1}return!0}var Pt=new L,Sa=new ze,Hf=0,an=class extends Jn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vh,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var br=class extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sr=class extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}},Vf=new Mn,rr=new L,ih=new L,ui=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(ih)),this.expandByPoint(rr.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gf=0,Sn=new st,sh=new Bt,fs=new L,cn=new Mn,ar=new Mn,Ut=new L,It=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cf(e)?Sr:br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let h=t[r];ar.setFromBufferAttribute(h),this.morphTargetsRelative?(Ut.addVectors(cn.min,ar.min),cn.expandByPoint(Ut),Ut.addVectors(cn.max,ar.max),cn.expandByPoint(Ut)):(cn.expandByPoint(ar.min),cn.expandByPoint(ar.max))}cn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let h=t[r],l=this.morphTargetsRelative;for(let o=0,u=h.count;o<u;o++)Ut.fromBufferAttribute(h,o),l&&(fs.fromBufferAttribute(e,o),Ut.add(fs)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new an(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let h=[],l=[];for(let y=0;y<i.count;y++)h[y]=new L,l[y]=new L;let o=new L,u=new L,d=new L,c=new ze,f=new ze,g=new ze,_=new L,p=new L;function m(y,w,P){o.fromBufferAttribute(i,y),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,P),c.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),u.sub(o),d.sub(o),f.sub(c),g.sub(c);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(S),h[y].add(_),h[w].add(_),h[P].add(_),l[y].add(p),l[w].add(p),l[P].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let y=0,w=T.length;y<w;++y){let P=T[y],S=P.start,I=P.count;for(let k=S,D=S+I;k<D;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let A=new L,v=new L,M=new L,E=new L;function R(y){M.fromBufferAttribute(s,y),E.copy(M);let w=h[y];A.copy(w),A.sub(M.multiplyScalar(M.dot(w))).normalize(),v.crossVectors(E,w);let S=v.dot(l[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,S)}for(let y=0,w=T.length;y<w;++y){let P=T[y],S=P.start,I=P.count;for(let k=S,D=S+I;k<D;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let c=0,f=i.count;c<f;c++)i.setXYZ(c,0,0,0);let s=new L,r=new L,a=new L,h=new L,l=new L,o=new L,u=new L,d=new L;if(e)for(let c=0,f=e.count;c<f;c+=3){let g=e.getX(c+0),_=e.getX(c+1),p=e.getX(c+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),h.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),o.fromBufferAttribute(i,p),h.add(u),l.add(u),o.add(u),i.setXYZ(g,h.x,h.y,h.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,o.x,o.y,o.z)}else for(let c=0,f=t.count;c<f;c+=3)s.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(c+0,u.x,u.y,u.z),i.setXYZ(c+1,u.x,u.y,u.z),i.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(h,l){let o=h.array,u=h.itemSize,d=h.normalized,c=new o.constructor(l.length*u),f=0,g=0;for(let _=0,p=l.length;_<p;_++){h.isInterleavedBufferAttribute?f=l[_]*h.data.stride+h.offset:f=l[_]*u;for(let m=0;m<u;m++)c[g++]=o[f++]}return new an(c,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let h in s){let l=s[h],o=e(l,i);t.setAttribute(h,o)}let r=this.morphAttributes;for(let h in r){let l=[],o=r[h];for(let u=0,d=o.length;u<d;u++){let c=o[u],f=e(c,i);l.push(f)}t.morphAttributes[h]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let h=0,l=a.length;h<l;h++){let o=a[h];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let o in l)l[o]!==void 0&&(e[o]=l[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let o=i[l];e.data.attributes[l]=o.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let o=this.morphAttributes[l],u=[];for(let d=0,c=o.length;d<c;d++){let f=o[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let o in s){let u=s[o];this.setAttribute(o,u.clone(t))}let r=e.morphAttributes;for(let o in r){let u=[],d=r[o];for(let c=0,f=d.length;c<f;c++)u.push(d[c].clone(t));this.morphAttributes[o]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,u=a.length;o<u;o++){let d=a[o];this.addGroup(d.start,d.count,d.materialIndex)}let h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},tn=new L,Mr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rh=new L,Wf=new L,Xf=new Ge,un=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=rh.subVectors(i,t).cross(Wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(rh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Xf.getNormalMatrix(e),s=this.coplanarPoint(rh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qf=0,Kn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Us,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=wh,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let h in r){let l=r[h];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new un().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ps=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ps,or=new L,ms=new L,gs=new L,ys=new ze,lr=new ze,ed=new st,Ma=new L,hr=new L,Ta=new L,jc=new ze,ah=new ze,Qc=new ze,Tr=class extends Bt{constructor(e=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ao(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Mr(i,3,0,!1)),ps.setAttribute("uv",new Mr(i,2,3,!1))}this.geometry=ps,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),ed.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ea(Ma.set(-.5,-.5,0),gs,a,ms,s,r),Ea(hr.set(.5,-.5,0),gs,a,ms,s,r),Ea(Ta.set(.5,.5,0),gs,a,ms,s,r),jc.set(0,0),ah.set(1,0),Qc.set(1,1);let h=e.ray.intersectTriangle(Ma,hr,Ta,!1,or);if(h===null&&(Ea(hr.set(-.5,.5,0),gs,a,ms,s,r),ah.set(0,1),h=e.ray.intersectTriangle(Ma,Ta,hr,!1,or),h===null))return;let l=e.ray.origin.distanceTo(or);l<e.near||l>e.far||t.push({distance:l,point:or.clone(),uv:$n.getInterpolation(or,Ma,hr,Ta,jc,ah,Qc,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ea(n,e,t,i,s,r){ys.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(lr.x=r*ys.x-s*ys.y,lr.y=s*ys.x+r*ys.y):lr.copy(ys),n.copy(e),n.x+=lr.x,n.y+=lr.y,n.applyMatrix4(ed)}var hi=new L,oh=new L,wa=new L,Aa=new L,Mi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){oh.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Aa.copy(this.origin).sub(oh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wa),h=Aa.dot(this.direction),l=-Aa.dot(wa),o=Aa.lengthSq(),u=Math.abs(1-a*a),d,c,f,g;if(u>0)if(d=a*l-h,c=a*h-l,g=r*u,d>=0)if(c>=-g)if(c<=g){let _=1/u;d*=_,c*=_,f=d*(d+a*c+2*h)+c*(a*d+c+2*l)+o}else c=r,d=Math.max(0,-(a*c+h)),f=-d*d+c*(c+2*l)+o;else c=-r,d=Math.max(0,-(a*c+h)),f=-d*d+c*(c+2*l)+o;else c<=-g?(d=Math.max(0,-(-a*r+h)),c=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+c*(c+2*l)+o):c<=g?(d=0,c=Math.min(Math.max(-r,-l),r),f=c*(c+2*l)+o):(d=Math.max(0,-(a*r+h)),c=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+c*(c+2*l)+o);else c=a>0?-r:r,d=Math.max(0,-(a*c+h)),f=-d*d+c*(c+2*l)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oh).addScaledVector(wa,c),f}intersectSphere(e,t){if(e.radius<0)return null;hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),h=i-a,l=i+a;return l<0?null:h<0?this.at(l,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,h,l,o=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,c=this.origin;return o>=0?(i=(e.min.x-c.x)*o,s=(e.max.x-c.x)*o):(i=(e.max.x-c.x)*o,s=(e.min.x-c.x)*o),u>=0?(r=(e.min.y-c.y)*u,a=(e.max.y-c.y)*u):(r=(e.max.y-c.y)*u,a=(e.min.y-c.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(h=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(h=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||h>s)||((h>i||i!==i)&&(i=h),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,h=this.direction,l=h.x,o=h.y,u=h.z,d=e.x-a.x,c=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=i.x-a.x,T=i.y-a.y,A=i.z-a.z,v=Math.abs(l),M=Math.abs(o),E=Math.abs(u),R,y,w,P,S,I,k,D,V,Z,N,ie;if(v>=M&&v>=E?(w=l,I=d,V=g,ie=m,l>=0?(R=o,y=u,P=c,S=f,k=_,D=p,Z=T,N=A):(R=u,y=o,P=f,S=c,k=p,D=_,Z=A,N=T)):M>=E?(w=o,I=c,V=_,ie=T,o>=0?(R=u,y=l,P=f,S=d,k=p,D=g,Z=A,N=m):(R=l,y=u,P=d,S=f,k=g,D=p,Z=m,N=A)):(w=u,I=f,V=p,ie=A,u>=0?(R=l,y=o,P=d,S=c,k=g,D=_,Z=m,N=T):(R=o,y=l,P=c,S=d,k=_,D=g,Z=T,N=m)),w===0)return null;let G=R/w,K=y/w,B=1/w,Q=P-G*I,ae=S-K*I,ke=k-G*V,le=D-K*V,Fe=Z-G*ie,q=N-K*ie,z=Fe*le-q*ke,oe=Q*q-ae*Fe,Se=ke*ae-le*Q;if(s){if(z<0||oe<0||Se<0)return null}else if((z<0||oe<0||Se<0)&&(z>0||oe>0||Se>0))return null;let te=z+oe+Se;if(te===0)return null;let Pe=B*(z*I+oe*V+Se*ie);return(te>0?Pe<0:Pe>0)?null:this.at(Pe/te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eu=new st,Hi=new Mi,Ca=new ui,tu=new L,Ra=new L,Pa=new L,Ia=new L,lh=new L,La=new L,nu=new L,Da=new L,He=class extends Bt{constructor(e=new It,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let h=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let h=this.morphTargetInfluences;if(r&&h){La.set(0,0,0);for(let l=0,o=r.length;l<o;l++){let u=h[l],d=r[l];u!==0&&(lh.fromBufferAttribute(d,e),a?La.addScaledVector(lh,u):La.addScaledVector(lh.sub(t),u))}t.add(La)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(Ca.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Ca,tu)===null||Hi.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(eu),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,h=r.index,l=r.attributes.position,o=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,c=r.groups,f=r.drawRange;if(h!==null)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){let p=c[g],m=a[p.materialIndex],T=Math.max(p.start,f.start),A=Math.min(h.count,Math.min(p.start+p.count,f.start+f.count));for(let v=T,M=A;v<M;v+=3){let E=h.getX(v),R=h.getX(v+1),y=h.getX(v+2);s=Na(this,m,e,i,o,u,d,E,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(h.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let T=h.getX(p),A=h.getX(p+1),v=h.getX(p+2);s=Na(this,a,e,i,o,u,d,T,A,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){let p=c[g],m=a[p.materialIndex],T=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=T,M=A;v<M;v+=3){let E=v,R=v+1,y=v+2;s=Na(this,m,e,i,o,u,d,E,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let T=p,A=p+1,v=p+2;s=Na(this,a,e,i,o,u,d,T,A,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function $f(n,e,t,i,s,r,a,h){let l;if(e.side===sn?l=i.intersectTriangle(a,r,s,!0,h):l=i.intersectTriangle(s,r,a,e.side===Pi,h),l===null)return null;Da.copy(h),Da.applyMatrix4(n.matrixWorld);let o=t.ray.origin.distanceTo(Da);return o<t.near||o>t.far?null:{distance:o,point:Da.clone(),object:n}}function Na(n,e,t,i,s,r,a,h,l,o){n.getVertexPosition(h,Ra),n.getVertexPosition(l,Pa),n.getVertexPosition(o,Ia);let u=$f(n,e,t,i,Ra,Pa,Ia,nu);if(u){let d=new L;$n.getBarycoord(nu,Ra,Pa,Ia,d),s&&(u.uv=$n.getInterpolatedAttribute(s,h,l,o,d,new ze)),r&&(u.uv1=$n.getInterpolatedAttribute(r,h,l,o,d,new ze)),a&&(u.normal=$n.getInterpolatedAttribute(a,h,l,o,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let c={a:h,b:l,c:o,normal:new L,materialIndex:0};$n.getNormal(Ra,Pa,Ia,c.normal),u.face=c,u.barycoord=d}return u}var Er=class extends nn{constructor(e=null,t=1,i=1,s,r,a,h,l,o=kt,u=kt,d,c){super(null,a,h,l,o,u,s,r,d,c),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wr=class extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new st,iu=new st,Fa=[],su=new Mn,Yf=new st,cr=new He,ur=new ui,Is=class extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Yf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),su.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(su)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),ur.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let h=0;h<i.length;h++)i[h]=s[a+h]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(i),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),iu.multiplyMatrices(i,xs),cr.matrixWorld=iu,cr.raycast(e,Fa);for(let a=0,h=Fa.length;a<h;a++){let l=Fa[a];l.instanceId=r,l.object=this,t.push(l)}Fa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Er(new Float32Array(s*this.count),s,this.count,Oo,En));let r=this.morphTexture.source.data.data,a=0;for(let o=0;o<i.length;o++)a+=i[o];let h=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=h,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new ui,Zf=new ze(.5,.5),Ua=new L,Ls=class{constructor(e=new un,t=new un,i=new un,s=new un,r=new un,a=new un){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(i),h[3].copy(s),h[4].copy(r),h[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){let s=this.planes,r=e.elements,a=r[0],h=r[1],l=r[2],o=r[3],u=r[4],d=r[5],c=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],T=r[12],A=r[13],v=r[14],M=r[15];if(s[0].setComponents(o-a,f-u,m-g,M-T).normalize(),s[1].setComponents(o+a,f+u,m+g,M+T).normalize(),s[2].setComponents(o+h,f+d,m+_,M+A).normalize(),s[3].setComponents(o-h,f-d,m-_,M-A).normalize(),i)s[4].setComponents(l,c,p,v).normalize(),s[5].setComponents(o-l,f-c,m-p,M-v).normalize();else if(s[4].setComponents(o-l,f-c,m-p,M-v).normalize(),t===On)s[5].setComponents(o+l,f+c,m+p,M+v).normalize();else if(t===Es)s[5].setComponents(l,c,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=Zf.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ti=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oo=new L,lo=new L,ru=new st,dr=new Mi,Oa=new ui,hh=new L,au=new L,ho=class extends Bt{constructor(e=new It,t=new Ti){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)oo.fromBufferAttribute(t,s-1),lo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=oo.distanceTo(lo);e.setAttribute("lineDistance",new lt(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;ru.copy(s).invert(),dr.copy(e.ray).applyMatrix4(ru);let h=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=h*h,o=this.isLineSegments?2:1,u=i.index,c=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=o){let m=u.getX(_),T=u.getX(_+1),A=ka(this,e,dr,l,m,T,_);A&&t.push(A)}if(this.isLineLoop){let _=u.getX(g-1),p=u.getX(f),m=ka(this,e,dr,l,_,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=o){let m=ka(this,e,dr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=ka(this,e,dr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let h=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=r}}}}};function ka(n,e,t,i,s,r,a){let h=n.geometry.attributes.position;if(oo.fromBufferAttribute(h,s),lo.fromBufferAttribute(h,r),t.distanceSqToSegment(oo,lo,hh,au)>i)return;hh.applyMatrix4(n.matrixWorld);let o=e.ray.origin.distanceTo(hh);if(!(o<e.near||o>e.far))return{distance:o,point:au.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var ou=new L,lu=new L,Wi=class extends ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ou.fromBufferAttribute(t,s),lu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ou.distanceTo(lu);e.setAttribute("lineDistance",new lt(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ar=class extends nn{constructor(e=[],t=Ii,i,s,r,a,h,l,o,u){super(e,t,i,s,r,a,h,l,o,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xi=class extends nn{constructor(e,t,i,s,r,a,h,l,o){super(e,t,i,s,r,a,h,l,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends nn{constructor(e,t,i=zn,s,r,a,h=kt,l=kt,o,u=Zn,d=1){if(u!==Zn&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:t,depth:d};super(c,s,r,a,h,l,u,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new As(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},co=class extends Ei{constructor(e,t=zn,i=Ii,s,r,a=kt,h=kt,l,o=Zn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,h,l,o),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Cr=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},jn=class n extends It{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let h=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],o=[],u=[],d=[],c=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(d,2));function g(_,p,m,T,A,v,M,E,R,y,w){let P=v/R,S=M/y,I=v/2,k=M/2,D=E/2,V=R+1,Z=y+1,N=0,ie=0,G=new L;for(let K=0;K<Z;K++){let B=K*S-k;for(let Q=0;Q<V;Q++){let ae=Q*P-I;G[_]=ae*T,G[p]=B*A,G[m]=D,o.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[m]=E>0?1:-1,u.push(G.x,G.y,G.z),d.push(Q/R),d.push(1-K/y),N+=1}}for(let K=0;K<y;K++)for(let B=0;B<R;B++){let Q=c+B+V*K,ae=c+B+V*(K+1),ke=c+(B+1)+V*(K+1),le=c+(B+1)+V*K;l.push(Q,ae,le),l.push(ae,ke,le),ie+=6}h.addGroup(f,ie,w),f+=ie,c+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Rr=class n extends It{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],h=[],l=[],o=new L,u=new ze;a.push(0,0,0),h.push(0,0,1),l.push(.5,.5);for(let d=0,c=3;d<=t;d++,c+=3){let f=i+d/t*s;o.x=e*Math.cos(f),o.y=e*Math.sin(f),a.push(o.x,o.y,o.z),h.push(0,0,1),u.x=(a[c]/e+1)/2,u.y=(a[c+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zt=class n extends It{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,h=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:h,thetaLength:l};let o=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],c=[],f=[],g=0,_=[],p=i/2,m=0;T(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(f,2));function T(){let v=new L,M=new L,E=0,R=(t-e)/i;for(let y=0;y<=r;y++){let w=[],P=y/r,S=P*(t-e)+e;for(let I=0;I<=s;I++){let k=I/s,D=k*l+h,V=Math.sin(D),Z=Math.cos(D);M.x=S*V,M.y=-P*i+p,M.z=S*Z,d.push(M.x,M.y,M.z),v.set(V,R,Z).normalize(),c.push(v.x,v.y,v.z),f.push(k,1-P),w.push(g++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let P=_[w][y],S=_[w+1][y],I=_[w+1][y+1],k=_[w][y+1];(e>0||w!==0)&&(u.push(P,S,k),E+=3),(t>0||w!==r-1)&&(u.push(S,I,k),E+=3)}o.addGroup(m,E,0),m+=E}function A(v){let M=g,E=new ze,R=new L,y=0,w=v===!0?e:t,P=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,p*P,0),c.push(0,P,0),f.push(.5,.5),g++;let S=g;for(let I=0;I<=s;I++){let D=I/s*l+h,V=Math.cos(D),Z=Math.sin(D);R.x=w*Z,R.y=p*P,R.z=w*V,d.push(R.x,R.y,R.z),c.push(0,P,0),E.x=V*.5+.5,E.y=Z*.5*P+.5,f.push(E.x,E.y),g++}for(let I=0;I<s;I++){let k=M+I,D=S+I;v===!0?u.push(D,D+1,k):u.push(D+1,D,k),y+=3}o.addGroup(m,y,v===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wi=class n extends zt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,h=Math.PI*2){super(0,e,t,i,s,r,a,h),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:h}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},uo=class n extends It{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];h(s),o(i),u(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function h(T){let A=new L,v=new L,M=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],A),f(t[E+1],v),f(t[E+2],M),l(A,v,M,T)}function l(T,A,v,M){let E=M+1,R=[];for(let y=0;y<=E;y++){R[y]=[];let w=T.clone().lerp(v,y/E),P=A.clone().lerp(v,y/E),S=E-y;for(let I=0;I<=S;I++)I===0&&y===E?R[y][I]=w:R[y][I]=w.clone().lerp(P,I/S)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){let P=Math.floor(w/2);w%2===0?(c(R[y][P+1]),c(R[y+1][P]),c(R[y][P])):(c(R[y][P+1]),c(R[y+1][P+1]),c(R[y+1][P]))}}function o(T){let A=new L;for(let v=0;v<r.length;v+=3)A.x=r[v+0],A.y=r[v+1],A.z=r[v+2],A.normalize().multiplyScalar(T),r[v+0]=A.x,r[v+1]=A.y,r[v+2]=A.z}function u(){let T=new L;for(let A=0;A<r.length;A+=3){T.x=r[A+0],T.y=r[A+1],T.z=r[A+2];let v=p(T)/2/Math.PI+.5,M=m(T)/Math.PI+.5;a.push(v,1-M)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){let A=a[T+0],v=a[T+2],M=a[T+4],E=Math.max(A,v,M),R=Math.min(A,v,M);E>.9&&R<.1&&(A<.2&&(a[T+0]+=1),v<.2&&(a[T+2]+=1),M<.2&&(a[T+4]+=1))}}function c(T){r.push(T.x,T.y,T.z)}function f(T,A){let v=T*3;A.x=e[v+0],A.y=e[v+1],A.z=e[v+2]}function g(){let T=new L,A=new L,v=new L,M=new L,E=new ze,R=new ze,y=new ze;for(let w=0,P=0;w<r.length;w+=9,P+=6){T.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),y.set(a[P+4],a[P+5]),M.copy(T).add(A).add(v).divideScalar(3);let S=p(M);_(E,P+0,T,S),_(R,P+2,A,S),_(y,P+4,v,S)}}function _(T,A,v,M){M<0&&T.x===1&&(a[A]=T.x-1),v.x===0&&v.z===0&&(a[A]=M/2/Math.PI+.5)}function p(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Ba=new L,za=new L,ch=new L,Ha=new $n,qi=class extends It{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(qa*t),a=e.getIndex(),h=e.getAttribute("position"),l=a?a.count:h.count,o=[0,0,0],u=["a","b","c"],d=new Array(3),c={},f=[];for(let g=0;g<l;g+=3){a?(o[0]=a.getX(g),o[1]=a.getX(g+1),o[2]=a.getX(g+2)):(o[0]=g,o[1]=g+1,o[2]=g+2);let{a:_,b:p,c:m}=Ha;if(_.fromBufferAttribute(h,o[0]),p.fromBufferAttribute(h,o[1]),m.fromBufferAttribute(h,o[2]),Ha.getNormal(ch),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let A=(T+1)%3,v=d[T],M=d[A],E=Ha[u[T]],R=Ha[u[A]],y=`${v}_${M}`,w=`${M}_${v}`;w in c&&c[w]?(ch.dot(c[w].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),c[w]=null):y in c||(c[y]={index0:o[T],index1:o[A],normal:ch.clone()})}}for(let g in c)if(c[g]){let{index0:_,index1:p}=c[g];Ba.fromBufferAttribute(h,_),za.fromBufferAttribute(h,p),f.push(Ba.x,Ba.y,Ba.z),f.push(za.x,za.y,za.z)}this.setAttribute("position",new lt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Ds=class n extends uo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Gt=class n extends It{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,h=Math.floor(i),l=Math.floor(s),o=h+1,u=l+1,d=e/h,c=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let T=m*c-a;for(let A=0;A<o;A++){let v=A*d-r;g.push(v,-T,0),_.push(0,0,1),p.push(A/h),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<h;T++){let A=T+o*m,v=T+o*(m+1),M=T+1+o*(m+1),E=T+1+o*m;f.push(A,v,E),f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Pr=class n extends It{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:h},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+h,Math.PI),o=0,u=[],d=new L,c=new L,f=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){let T=[],A=m/i,v=a+A*h,M=e*Math.cos(v),E=Math.sqrt(e*e-M*M),R=0;m===0&&a===0?R=.5/t:m===i&&l===Math.PI&&(R=-.5/t);for(let y=0;y<=t;y++){let w=y/t,P=s+w*r;d.x=-E*Math.cos(P),d.y=M,d.z=E*Math.sin(P),g.push(d.x,d.y,d.z),c.copy(d).normalize(),_.push(c.x,c.y,c.z),p.push(w+R,1-A),T.push(o++)}u.push(T)}for(let m=0;m<i;m++)for(let T=0;T<t;T++){let A=u[m][T+1],v=u[m][T],M=u[m+1][T],E=u[m+1][T+1];(m!==0||a>0)&&f.push(A,v,E),(m!==i-1||l<Math.PI)&&f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Zi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(hu(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(hu(s[0])){let r=[];for(let a=0,h=s.length;a<h;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function jt(n){let e={};for(let t=0;t<n.length;t++){let i=Zi(n[t]);for(let s in i)e[s]=i[s]}return e}function hu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Jf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var td={clone:Zi,merge:jt},Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=Jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(s.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new st().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fo=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kt=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var po=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mo=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ai=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let h=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let h=t[1];e<h&&(i=2,r=h);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let h=i+a>>>1;e<t[h]?a=h:i=h+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends Ai{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,h=s[r],l=s[a];if(h===void 0)switch(this.getSettings_().endingStart){case mh:r=e,h=2*t-i;break;case gh:r=s.length-2,h=t+s[r]-s[r+1];break;default:r=e,h=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mh:a=e,l=2*i-t;break;case gh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let o=(i-t)*.5,u=this.valueSize;this._weightPrev=o/(t-h),this._weightNext=o/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,u=this._offsetPrev,d=this._offsetNext,c=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,p=_*g,m=-c*p+2*c*_-c*g,T=(1+c)*p+(-1.5-2*c)*_+(-.5+c)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let M=0;M!==h;++M)r[M]=m*a[u+M]+T*a[o+M]+A*a[l+M]+v*a[d+M];return r}},yo=class extends Ai{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,u=(i-t)/(s-t),d=1-u;for(let c=0;c!==h;++c)r[c]=a[o+c]*d+a[l+c]*u;return r}},xo=class extends Ai{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_o=class extends Ai{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=e*h,o=l-h,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),_=1-g;for(let p=0;p!==h;++p)r[p]=a[o+p]*_+a[l+p]*g;return r}let c=h*2,f=e-1;for(let g=0;g!==h;++g){let _=a[o+g],p=a[l+g],m=f*c+g*2,T=d[m],A=d[m+1],v=e*c+g*2,M=u[v],E=u[v+1],R=ep(i,t,T,M,s);r[g]=nd(R,_,A,E,p)}return r}};function nd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Qf(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function ep(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let h=nd(r,e,t,i,s)-n;if(Math.abs(h)<1e-10)break;let l=Qf(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-h/l))}return r}var mn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),uh(e.settings)&&(i.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case to:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break;case fh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;uh(this.settings)&&(cu(this.settings.inTangents,e),cu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let h=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*h,a*h)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let h=0;h!==r;h++){let l=i[h];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,h,l),e=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,h,l,a),e=!1;break}a=l}if(s!==void 0&&Rf(s))for(let h=0,l=s.length;h!==l;++h){let o=s[h];if(isNaN(o)){Be("KeyframeTrack: Value is not a valid number.",this,h,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wa,r=e.length-1,a=1;for(let h=1;h<r;++h){let l=!1,o=e[h],u=e[h+1];if(o!==u&&(h!==1||o!==e[0]))if(s)l=!0;else{let d=h*i,c=d-i,f=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[c+g]||_!==t[f+g]){l=!0;break}}}if(l){if(h!==a){e[a]=e[h];let d=h*i,c=a*i;for(let f=0;f!==i;++f)t[c+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let h=r*i,l=a*i,o=0;o!==i;++o)t[l+o]=t[h+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,uh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=to;var Ci=class extends mn{constructor(e,t,i){super(e,t,i)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=fr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};vo.prototype.ValueTypeName="color";var bo=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};bo.prototype.ValueTypeName="number";var So=class extends Ai{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,h=this.valueSize,l=(i-t)/(s-t),o=e*h;for(let u=o+h;o!==u;o+=4)dn.slerpFlat(r,0,a,o-h,a,o,l);return r}},Ir=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends mn{constructor(e,t,i){super(e,t,i)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=fr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};Mo.prototype.ValueTypeName="vector";var To=class{constructor(e,t,i){let s=this,r=!1,a=0,h=0,l,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){h++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,h),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,h),a===h&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return o.push(u,d),this},this.removeHandler=function(u){let d=o.indexOf(u);return d!==-1&&o.splice(d,2),this},this.getHandler=function(u){for(let d=0,c=o.length;d<c;d+=2){let f=o[d],g=o[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new To,Eo=class{constructor(e){this.manager=e!==void 0?e:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Dr=class extends Lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},dh=new st,uu=new L,du=new L,wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){dh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(dh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,h=s?s.w/r.y:1,l=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===Es||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*h,0,.5*h+o,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*h,0,.5*h+o,0,0,.5,.5,0,0,0,1),t.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Va=new L,Ga=new dn,Xn=new L,Nr=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ga,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Va,Ga,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new L,fu=new ze,pu=new ze,Zt=class extends Nr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/o,s*=a.width/l,i*=a.height/o}let h=this.filmOffset;h!==0&&(r+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ns=class extends Nr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,h=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,h-=u*this.view.offsetY,l=h-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,h,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yh=class extends wo{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vs=-90,bs=1,Ao=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(vs,bs,e,t);s.layers=this.layers,this.add(s);let r=new Zt(vs,bs,e,t);r.layers=this.layers,this.add(r);let a=new Zt(vs,bs,e,t);a.layers=this.layers,this.add(a);let h=new Zt(vs,bs,e,t);h.layers=this.layers,this.add(h);let l=new Zt(vs,bs,e,t);l.layers=this.layers,this.add(l);let o=new Zt(vs,bs,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,h,l]=t;for(let o of t)this.remove(o);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,h,l,o,u]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,c,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Co=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xh="\\[\\]\\.:\\/",tp=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",np="[^"+Xh.replace("\\.","")+"]",ip=/((?:WC+[\/:])*)/.source.replace("WC",qh),sp=/(WCOD+)?/.source.replace("WCOD",np),rp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),op=new RegExp("^"+ip+sp+rp+ap+"$"),lp=["material","materials","bones","map"],xh=class{constructor(e,t,i){let s=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tp,"")}static parseTrackName(e){let t=op.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);lp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let h=r[a];if(h.name===t||h.uuid===t)return h;let l=i(h.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===o){o=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(o!==void 0){if(e[o]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=xh;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hx=new Float32Array(1);var mu=new st,Ur=class{constructor(e,t,i=0,s=1/0){this.ray=new Mi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(e,t=!0,i=[]){return _h(e,this,i,t),i.sort(gu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)_h(e[s],this,i,t);return i.sort(gu),i}};function gu(n,e){return n.distance-e.distance}function _h(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,h=r.length;a<h;a++)_h(r[a],e,t,!0)}}var vh=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function $h(n,e,t,i){let s=hp(i);switch(t){case zh:return n*e;case Oo:return n*e/s.components*s.byteLength;case ko:return n*e/s.components*s.byteLength;case Ni:return n*e*2/s.components*s.byteLength;case Bo:return n*e*2/s.components*s.byteLength;case Hh:return n*e*3/s.components*s.byteLength;case wn:return n*e*4/s.components*s.byteLength;case zo:return n*e*4/s.components*s.byteLength;case zr:case Hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:case Wo:return Math.max(n,16)*Math.max(e,8)/4;case Ho:case Go:return Math.max(n,8)*Math.max(e,8)/2;case Xo:case qo:case Yo:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:case Wr:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ul:case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xr:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hp(n){switch(n){case ln:case Uh:return{byteLength:1,components:1};case Os:case Oh:case Hn:return{byteLength:2,components:1};case Fo:case Uo:return{byteLength:2,components:4};case zn:case No:case En:return{byteLength:4,components:1};case kh:case Bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function Ed(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cp(n){let e=new WeakMap;function t(h,l){let o=h.array,u=h.usage,d=o.byteLength,c=n.createBuffer();n.bindBuffer(l,c),n.bufferData(l,o,u),h.onUploadCallback();let f;if(o instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=n.HALF_FLOAT;else if(o instanceof Uint16Array)h.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=n.SHORT;else if(o instanceof Uint32Array)f=n.UNSIGNED_INT;else if(o instanceof Int32Array)f=n.INT;else if(o instanceof Int8Array)f=n.BYTE;else if(o instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:c,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:h.version,size:d}}function i(h,l,o){let u=l.array,d=l.updateRanges;if(n.bindBuffer(o,h),d.length===0)n.bufferSubData(o,0,u);else{d.sort((f,g)=>f.start-g.start);let c=0;for(let f=1;f<d.length;f++){let g=d[c],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++c,d[c]=_)}d.length=c+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];n.bufferSubData(o,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);let l=e.get(h);l&&(n.deleteBuffer(l.buffer),e.delete(h))}function a(h,l){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let u=e.get(h);(!u||u.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let o=e.get(h);if(o===void 0)e.set(h,t(h,l));else if(o.version<h.version){if(o.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,h,l),o.version=h.version}}return{get:s,remove:r,update:a}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
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
#endif`,fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Np=`#define PI 3.141592653589793
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
} // validated`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lm=`PhysicalMaterial material;
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
#endif`,hm=`uniform sampler2D dfgLUT;
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
}`,cm=`
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
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
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,_g=`#define DISTANCE
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
}`,vg=`#define DISTANCE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Ig=`#define NORMAL
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,Ug=`#define STANDARD
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
}`,Og=`#define TOON
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
}`,kg=`#define TOON
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
}`,Bg=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:up,alphahash_pars_fragment:dp,alphamap_fragment:fp,alphamap_pars_fragment:pp,alphatest_fragment:mp,alphatest_pars_fragment:gp,aomap_fragment:yp,aomap_pars_fragment:xp,batching_pars_vertex:_p,batching_vertex:vp,begin_vertex:bp,beginnormal_vertex:Sp,bsdfs:Mp,iridescence_fragment:Tp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Rp,color_fragment:Pp,color_pars_fragment:Ip,color_pars_vertex:Lp,color_vertex:Dp,common:Np,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Op,displacementmap_vertex:kp,emissivemap_fragment:Bp,emissivemap_pars_fragment:zp,colorspace_fragment:Hp,colorspace_pars_fragment:Vp,envmap_fragment:Gp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:Xp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:im,envmap_vertex:$p,fog_vertex:Yp,fog_pars_vertex:Zp,fog_fragment:Jp,fog_pars_fragment:Kp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:Qp,lights_lambert_fragment:em,lights_lambert_pars_fragment:tm,lights_pars_begin:nm,lights_toon_fragment:sm,lights_toon_pars_fragment:rm,lights_phong_fragment:am,lights_phong_pars_fragment:om,lights_physical_fragment:lm,lights_physical_pars_fragment:hm,lights_fragment_begin:cm,lights_fragment_maps:um,lights_fragment_end:dm,lightprobes_pars_fragment:fm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:ym,map_fragment:xm,map_pars_fragment:_m,map_particle_fragment:vm,map_particle_pars_fragment:bm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:Mm,morphinstance_vertex:Tm,morphcolor_vertex:Em,morphnormal_vertex:wm,morphtarget_pars_vertex:Am,morphtarget_vertex:Cm,normal_fragment_begin:Rm,normal_fragment_maps:Pm,normal_pars_fragment:Im,normal_pars_vertex:Lm,normal_vertex:Dm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Om,iridescence_pars_fragment:km,opaque_fragment:Bm,packing:zm,premultiplied_alpha_fragment:Hm,project_vertex:Vm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Ym,shadowmap_vertex:Zm,shadowmask_pars_fragment:Jm,skinbase_vertex:Km,skinning_pars_vertex:jm,skinning_vertex:Qm,skinnormal_vertex:eg,specularmap_fragment:tg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:sg,transmission_fragment:rg,transmission_pars_fragment:ag,uv_pars_fragment:og,uv_pars_vertex:lg,uv_vertex:hg,worldpos_vertex:cg,background_vert:ug,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:yg,depth_frag:xg,distance_vert:_g,distance_frag:vg,equirect_vert:bg,equirect_frag:Sg,linedashed_vert:Mg,linedashed_frag:Tg,meshbasic_vert:Eg,meshbasic_frag:wg,meshlambert_vert:Ag,meshlambert_frag:Cg,meshmatcap_vert:Rg,meshmatcap_frag:Pg,meshnormal_vert:Ig,meshnormal_frag:Lg,meshphong_vert:Dg,meshphong_frag:Ng,meshphysical_vert:Fg,meshphysical_frag:Ug,meshtoon_vert:Og,meshtoon_frag:kg,points_vert:Bg,points_frag:zg,shadow_vert:Hg,shadow_frag:Vg,sprite_vert:Gg,sprite_frag:Wg},ge={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ti={basic:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:jt([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:jt([ge.lights,ge.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ti.physical={uniforms:jt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var vl={r:0,b:0,g:0},Xg=new st,wd=new Ge;wd.set(-1,0,0,0,1,0,0,0,1);function qg(n,e,t,i,s,r){let a=new We(0),h=s===!0?0:1,l,o,u=null,d=0,c=null;function f(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let v=T.backgroundBlurriness>0;A=e.get(A,v)}return A}function g(T){let A=!1,v=f(T);v===null?p(a,h):v&&v.isColor&&(p(v,1),A=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(T,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===kr)?(o===void 0&&(o=new He(new jn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Zi(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(M,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=v,o.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(wd),o.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ot,(u!==v||d!==v.version||c!==n.toneMapping)&&(o.material.needsUpdate=!0,u=v,d=v.version,c=n.toneMapping),o.layers.enableAll(),T.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new He(new Gt(2,2),new pn({name:"BackgroundMaterial",uniforms:Zi(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||c!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,c=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,A){T.getRGB(vl,Wh(n)),t.buffers.color.setClear(vl.r,vl.g,vl.b,A,r)}function m(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),h=A,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,p(a,h)},render:g,addToRenderList:_,dispose:m}}function $g(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=c(null),r=s,a=!1;function h(S,I,k,D,V){let Z=!1,N=d(S,D,k,I);r!==N&&(r=N,o(r.object)),Z=f(S,D,k,V),Z&&g(S,D,k,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(S,I,k,D),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function o(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,I,k,D){let V=D.wireframe===!0,Z=i[I.id];Z===void 0&&(Z={},i[I.id]=Z);let N=S.isInstancedMesh===!0?S.id:0,ie=Z[N];ie===void 0&&(ie={},Z[N]=ie);let G=ie[k.id];G===void 0&&(G={},ie[k.id]=G);let K=G[V];return K===void 0&&(K=c(l()),G[V]=K),K}function c(S){let I=[],k=[],D=[];for(let V=0;V<t;V++)I[V]=0,k[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:D,object:S,attributes:{},index:null}}function f(S,I,k,D){let V=r.attributes,Z=I.attributes,N=0,ie=k.getAttributes();for(let G in ie)if(ie[G].location>=0){let B=V[G],Q=Z[G];if(Q===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;N++}return r.attributesNum!==N||r.index!==D}function g(S,I,k,D){let V={},Z=I.attributes,N=0,ie=k.getAttributes();for(let G in ie)if(ie[G].location>=0){let B=Z[G];B===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(B=S.instanceColor));let Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),V[G]=Q,N++}r.attributes=V,r.attributesNum=N,r.index=D}function _(){let S=r.newAttributes;for(let I=0,k=S.length;I<k;I++)S[I]=0}function p(S){m(S,0)}function m(S,I){let k=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;k[S]=1,D[S]===0&&(n.enableVertexAttribArray(S),D[S]=1),V[S]!==I&&(n.vertexAttribDivisor(S,I),V[S]=I)}function T(){let S=r.newAttributes,I=r.enabledAttributes;for(let k=0,D=I.length;k<D;k++)I[k]!==S[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function A(S,I,k,D,V,Z,N){N===!0?n.vertexAttribIPointer(S,I,k,V,Z):n.vertexAttribPointer(S,I,k,D,V,Z)}function v(S,I,k,D){_();let V=D.attributes,Z=k.getAttributes(),N=I.defaultAttributeValues;for(let ie in Z){let G=Z[ie];if(G.location>=0){let K=V[ie];if(K===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){let B=K.normalized,Q=K.itemSize,ae=e.get(K);if(ae===void 0)continue;let ke=ae.buffer,le=ae.type,Fe=ae.bytesPerElement,q=le===n.INT||le===n.UNSIGNED_INT||K.gpuType===No;if(K.isInterleavedBufferAttribute){let z=K.data,oe=z.stride,Se=K.offset;if(z.isInstancedInterleavedBuffer){for(let te=0;te<G.locationSize;te++)m(G.location+te,z.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let te=0;te<G.locationSize;te++)p(G.location+te);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let te=0;te<G.locationSize;te++)A(G.location+te,Q/G.locationSize,le,B,oe*Fe,(Se+Q/G.locationSize*te)*Fe,q)}else{if(K.isInstancedBufferAttribute){for(let z=0;z<G.locationSize;z++)m(G.location+z,K.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let z=0;z<G.locationSize;z++)p(G.location+z);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let z=0;z<G.locationSize;z++)A(G.location+z,Q/G.locationSize,le,B,Q*Fe,Q/G.locationSize*z*Fe,q)}}else if(N!==void 0){let B=N[ie];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(G.location,B);break;case 3:n.vertexAttrib3fv(G.location,B);break;case 4:n.vertexAttrib4fv(G.location,B);break;default:n.vertexAttrib1fv(G.location,B)}}}}T()}function M(){w();for(let S in i){let I=i[S];for(let k in I){let D=I[k];for(let V in D){let Z=D[V];for(let N in Z)u(Z[N].object),delete Z[N];delete D[V]}}delete i[S]}}function E(S){if(i[S.id]===void 0)return;let I=i[S.id];for(let k in I){let D=I[k];for(let V in D){let Z=D[V];for(let N in Z)u(Z[N].object),delete Z[N];delete D[V]}}delete i[S.id]}function R(S){for(let I in i){let k=i[I];for(let D in k){let V=k[D];if(V[S.id]===void 0)continue;let Z=V[S.id];for(let N in Z)u(Z[N].object),delete Z[N];delete V[S.id]}}}function y(S){for(let I in i){let k=i[I],D=S.isInstancedMesh===!0?S.id:0,V=k[D];if(V!==void 0){for(let Z in V){let N=V[Z];for(let ie in N)u(N[ie].object),delete N[ie];delete V[Z]}delete k[D],Object.keys(k).length===0&&delete i[I]}}}function w(){P(),a=!0,r!==s&&(r=s,o(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:w,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function Yg(n,e,t){let i;function s(l){i=l}function r(l,o){n.drawArrays(i,l,o),t.update(o,i,1)}function a(l,o,u){u!==0&&(n.drawArraysInstanced(i,l,o,u),t.update(o,i,u))}function h(l,o,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,o,0,u);let c=0;for(let f=0;f<u;f++)c+=o[f];t.update(c,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=h}function Zg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(R){let y=R===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ln&&R!==En&&!y&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",u=l(o);u!==o&&(Oe("WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);let d=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&c===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:h,precision:o,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:v,maxSamples:M,samples:E}}function Jg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new un,h=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let f=d.length!==0||c||i!==0||s;return s=c,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,c){t=u(d,c,0)},this.setState=function(d,c,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):o();else{let T=r?0:i,A=T*4,v=m.clippingState||null;l.value=v,v=u(g,c,A,f);for(let M=0;M!==A;++M)v[M]=t[M];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function o(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,c,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,T=c.matrixWorldInverse;h.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,v=f;A!==_;++A,v+=4)a.copy(d[A]).applyMatrix4(T,h),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var zs=4,Kg=6,jg=20,Qg=256,qr=new Ns,sd=new We,Yh=null,Zh=0,Jh=0,Kh=!1,e0=new L,Ji=new L,Sl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:h=e0}=r;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,h),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,Zh,Jh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Hn,format:wn,colorSpace:pr,depthBuffer:!1},s=rd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=t0(r)),this._blurMaterial=i0(r,e,t),this._ggxMaterial=n0(r,e,t)}return s}_compileMaterial(e){let t=new He(new It,e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,i,s,r){let l=new Zt(90,1,t,i),o=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,f=d.toneMapping;d.getClearColor(sd),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new jn,new fn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,T=e.background;T?T.isColor&&(p.color.copy(T),e.background=null,m=!0):(p.color.copy(sd),m=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,o[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):v===1?(l.up.set(0,0,o[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,o[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let M=this._cubeSize;Bs(s,v*M,A>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=c,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ii||e.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let h=r.uniforms;h.envMap.value=e;let l=this._cubeSize;Bs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,qr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,h=this._lodMeshes[i];h.material=a;let l=a.uniforms,o=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(o*o-u*u),c=o*1.25,f=d*c,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-zs?i-g+zs:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Bs(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(h,qr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Bs(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(h,qr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,h=this._blurMaterial,l=this._lodMeshes[s];l.material=h;let o=h.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-zs?s-this._lodMax+zs:0),c=4*(this._cubeSize-u);Bs(t,d,c,3*u,2*u),a.setRenderTarget(t),a.render(l,qr)}};function t0(n){let e=[],t=[],i=n,s=n-zs+1+Kg;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let h=1/(a-2),l=-h,o=1+h,u=[l,l,o,l,o,o,l,l,o,o,l,o],d=6,c=6,f=3,g=new Float32Array(f*c*d),_=new Float32Array(f*c*d);for(let m=0;m<d;m++){let T=m%3*2/3-1,A=m>2?0:-1,v=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];g.set(v,f*c*m);for(let M=0;M<c;M++){let E=u[M*2]*2-1,R=u[M*2+1]*2-1;m===0?Ji.set(1,R,E):m===1?Ji.set(-E,1,-R):m===2?Ji.set(-E,R,1):m===3?Ji.set(-1,R,-E):m===4?Ji.set(-E,-1,R):Ji.set(E,R,-1),Ji.toArray(_,(m*c+M)*f)}}let p=new It;p.setAttribute("position",new an(g,f)),p.setAttribute("outputDirection",new an(_,f)),t.push(new He(p,null)),i>zs&&i--}return{lodMeshes:t,sizeLods:e}}function rd(n,e,t){let i=new on(n,e,t);return i.texture.mapping=kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function n0(n,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function i0(n,e,t){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ad(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function od(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ml=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ar(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Qn});r.uniforms.tEquirect.value=t;let a=new He(s,r),h=t.minFilter;return t.minFilter===Li&&(t.minFilter=Vt),new Ao(1,10,this).update(e,a),t.minFilter=h,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function s0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(c,f=!1){return c==null?null:f?a(c):r(c)}function r(c){if(c&&c.isTexture){let f=c.mapping;if(f===Io||f===Lo)if(e.has(c)){let g=e.get(c).texture;return h(g,c.mapping)}else{let g=c.image;if(g&&g.height>0){let _=new Ml(g.height);return _.fromEquirectangularTexture(n,c),e.set(c,_),c.addEventListener("dispose",o),h(_.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){let f=c.mapping,g=f===Io||f===Lo,_=f===Ii||f===Yi;if(g||_){let p=t.get(c),m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return i===null&&(i=new Sl(n)),p=g?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let T=c.image;return g&&T&&T.height>0||_&&T&&l(T)?(i===null&&(i=new Sl(n)),p=g?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",u),p.texture):null}}}return c}function h(c,f){return f===Io?c.mapping=Ii:f===Lo&&(c.mapping=Yi),c}function l(c){let f=0,g=6;for(let _=0;_<g;_++)c[_]!==void 0&&f++;return f===g}function o(c){let f=c.target;f.removeEventListener("dispose",o);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(c){let f=c.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function r0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Gi("WebGLRenderer: "+i+" extension not supported."),s}}}function a0(n,e,t,i){let s={},r=new WeakMap;function a(d){let c=d.target;c.index!==null&&e.remove(c.index);for(let g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete s[c.id];let f=r.get(c);f&&(e.remove(f),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function h(d,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,t.memory.geometries++),c}function l(d){let c=d.attributes;for(let f in c)e.update(c[f],n.ARRAY_BUFFER)}function o(d){let c=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let T=f.array;_=f.version;for(let A=0,v=T.length;A<v;A+=3){let M=T[A+0],E=T[A+1],R=T[A+2];c.push(M,E,E,R,R,M)}}else{let T=g.array;_=g.version;for(let A=0,v=T.length/3-1;A<v;A+=3){let M=A+0,E=A+1,R=A+2;c.push(M,E,E,R,R,M)}}let p=new(g.count>=65535?Sr:br)(c,1);p.version=_;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){let c=r.get(d);if(c){let f=d.index;f!==null&&c.version<f.version&&o(d)}else o(d);return r.get(d)}return{get:h,update:l,getWireframeAttribute:u}}function o0(n,e,t){let i;function s(d){i=d}let r,a;function h(d){r=d.type,a=d.bytesPerElement}function l(d,c){n.drawElements(i,c,r,d*a),t.update(c,i,1)}function o(d,c,f){f!==0&&(n.drawElementsInstanced(i,c,r,d*a,f),t.update(c,i,f))}function u(d,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=c[p];t.update(_,i,1)}this.setMode=s,this.setIndex=h,this.render=l,this.renderInstances=o,this.renderMultiDraw=u}function l0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,h){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=h*(r/3);break;case n.LINES:t.lines+=h*(r/2);break;case n.LINE_STRIP:t.lines+=h*(r-1);break;case n.LINE_LOOP:t.lines+=h*r;break;case n.POINTS:t.points+=h*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function h0(n,e,t){let i=new WeakMap,s=new St;function r(a,h,l){let o=a.morphTargetInfluences,u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=u!==void 0?u.length:0,c=i.get(h);if(c===void 0||c.count!==d){let w=function(){R.dispose(),i.delete(h),h.removeEventListener("dispose",w)};c!==void 0&&c.texture.dispose();let f=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,p=h.morphAttributes.position||[],m=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=h.attributes.position.count*A,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*M*4*d),R=new xr(E,v,M,d);R.type=En,R.needsUpdate=!0;let y=A*4;for(let P=0;P<d;P++){let S=p[P],I=m[P],k=T[P],D=v*M*4*P;for(let V=0;V<S.count;V++){let Z=V*y;f===!0&&(s.fromBufferAttribute(S,V),E[D+Z+0]=s.x,E[D+Z+1]=s.y,E[D+Z+2]=s.z,E[D+Z+3]=0),g===!0&&(s.fromBufferAttribute(I,V),E[D+Z+4]=s.x,E[D+Z+5]=s.y,E[D+Z+6]=s.z,E[D+Z+7]=0),_===!0&&(s.fromBufferAttribute(k,V),E[D+Z+8]=s.x,E[D+Z+9]=s.y,E[D+Z+10]=s.z,E[D+Z+11]=k.itemSize===4?s.w:1)}}c={count:d,texture:R,size:new ze(v,M)},i.set(h,c),h.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<o.length;_++)f+=o[_];let g=h.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",o)}l.getUniforms().setValue(n,"morphTargetsTexture",c.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",c.size)}return{update:r}}function c0(n,e,t,i,s){let r=new WeakMap;function a(o){let u=s.render.frame,d=o.geometry,c=e.get(o,d);if(r.get(c)!==u&&(e.update(c),r.set(c,u)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),r.get(o)!==u&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,u))),o.isSkinnedMesh){let f=o.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return c}function h(){r=new WeakMap}function l(o){let u=o.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:h}}var u0={[Ch]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ph]:"CINEON_TONE_MAPPING",[Ih]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function d0(n,e,t,i,s,r){let a=new on(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,l=null,o=new It;o.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new lt([0,2,0,0,2,0],2));let u=new fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new He(o,u),c=new Ns(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,T=[],A=!1;this.setSize=function(v,M){a.setSize(v,M),h!==null&&h.setSize(v,M),l!==null&&l.setSize(v,M);for(let E=0;E<T.length;E++){let R=T[E];R.setSize&&R.setSize(v,M)}},this.setEffects=function(v){T=v,A=T.length>0&&T[0].isRenderPass===!0;let M=a.width,E=a.height;T.length>0&&h===null&&(h=new on(M,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new on(M,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){let y=T[R];y.setSize&&y.setSize(M,E)}},this.begin=function(v,M){if(_||v.toneMapping===Bn&&T.length===0)return!1;if(m=M,M!==null){let E=M.width,R=M.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=Bn,!0},this.hasRenderPass=function(){return A},this.end=function(v,M){v.toneMapping=p,_=!0;let E=a,R=h;for(let y=0;y<T.length;y++){let w=T[y];w.enabled!==!1&&(w.render(v,R,E,M),w.needsSwap!==!1&&(E=R,R=R===h?l:h))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},Qe.getTransfer(f)===ot&&(u.defines.SRGB_TRANSFER="");let y=u0[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(m),v.render(d,c),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),h!==null&&h.dispose(),l!==null&&l.dispose(),o.dispose(),u.dispose()}}var Ad=new nn,ec=new Ei(1,1),Cd=new xr,Rd=new ro,Pd=new Ar,ld=[],hd=[],cd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function Vs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){i.toArray(r,0);for(let a=1,h=0;a!==e;++a)h+=t,n[a].toArray(r,h)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wl(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function f0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function m0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function g0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function y0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),Dt(t,i)}}function x0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;ud.set(i),n.uniformMatrix3fv(this.addr,!1,ud),Dt(t,i)}}function _0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),Dt(t,i)}}function v0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function b0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function S0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function M0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function T0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function w0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function A0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function C0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ec.compareFunction=t.isReversedDepthBuffer()?_l:xl,r=ec):r=Ad,t.setTexture2D(e||r,s)}function R0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Rd,s)}function P0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pd,s)}function I0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cd,s)}function L0(n){switch(n){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return y0;case 35675:return x0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return b0;case 35668:case 35672:return S0;case 35669:case 35673:return M0;case 5125:return T0;case 36294:return E0;case 36295:return w0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}function D0(n,e){n.uniform1fv(this.addr,e)}function N0(n,e){let t=Vs(e,this.size,2);n.uniform2fv(this.addr,t)}function F0(n,e){let t=Vs(e,this.size,3);n.uniform3fv(this.addr,t)}function U0(n,e){let t=Vs(e,this.size,4);n.uniform4fv(this.addr,t)}function O0(n,e){let t=Vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function k0(n,e){let t=Vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B0(n,e){let t=Vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function z0(n,e){n.uniform1iv(this.addr,e)}function H0(n,e){n.uniform2iv(this.addr,e)}function V0(n,e){n.uniform3iv(this.addr,e)}function G0(n,e){n.uniform4iv(this.addr,e)}function W0(n,e){n.uniform1uiv(this.addr,e)}function X0(n,e){n.uniform2uiv(this.addr,e)}function q0(n,e){n.uniform3uiv(this.addr,e)}function $0(n,e){n.uniform4uiv(this.addr,e)}function Y0(n,e,t){let i=this.cache,s=e.length,r=wl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ec:a=Ad;for(let h=0;h!==s;++h)t.setTexture2D(e[h]||a,r[h])}function Z0(n,e,t){let i=this.cache,s=e.length,r=wl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rd,r[a])}function J0(n,e,t){let i=this.cache,s=e.length,r=wl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pd,r[a])}function K0(n,e,t){let i=this.cache,s=e.length,r=wl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cd,r[a])}function j0(n){switch(n){case 5126:return D0;case 35664:return N0;case 35665:return F0;case 35666:return U0;case 35674:return O0;case 35675:return k0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return K0}}var tc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=L0(t.type)}},nc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j0(t.type)}},ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let h=s[r];h.setValue(e,t[h.id],i)}}},jh=/(\w+)(\])?(\[|\.)?/g;function fd(n,e){n.seq.push(e),n.map[e.id]=e}function Q0(n,e,t){let i=n.name,s=i.length;for(jh.lastIndex=0;;){let r=jh.exec(i),a=jh.lastIndex,h=r[1],l=r[2]==="]",o=r[3];if(l&&(h=h|0),o===void 0||o==="["&&a+2===s){fd(t,o===void 0?new tc(h,n,e):new nc(h,n,e));break}else{let d=t.map[h];d===void 0&&(d=new ic(h),fd(t,d)),t=d}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let h=e.getActiveUniform(t,a),l=e.getUniformLocation(t,h.name);Q0(h,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let h=t[r],l=i[h.id];l.needsUpdate!==!1&&h.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function pd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ey=37297,ty=0;function ny(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let h=a+1;i.push(`${h===e?">":" "} ${h}: ${t[a]}`)}return i.join(`
`)}var md=new Ge;function iy(n){Qe._getMatrix(md,Qe.workingColorSpace,n);let e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case mr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let h=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ny(n.getShaderSource(e),h)}else return r}function sy(n,e){let t=iy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ry={[Ch]:"Linear",[Rh]:"Reinhard",[Ph]:"Cineon",[Ih]:"ACESFilmic",[Dh]:"AgX",[Nh]:"Neutral",[Lh]:"Custom"};function ay(n,e){let t=ry[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bl=new L;function oy(){Qe.getLuminanceCoefficients(bl);let n=bl.x.toFixed(4),e=bl.y.toFixed(4),t=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function hy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,h=1;r.type===n.FLOAT_MAT2&&(h=2),r.type===n.FLOAT_MAT3&&(h=3),r.type===n.FLOAT_MAT4&&(h=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:h}}return t}function Yr(n){return n!==""}function yd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(n){return n.replace(uy,fy)}var dy=new Map;function fy(n,e){let t=$e[e];if(t===void 0){let i=dy.get(e);if(i!==void 0)t=$e[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sc(t)}var py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(py,my)}function my(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var gy={[Or]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function yy(n){return gy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xy={[Ii]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE_UV"};function _y(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":xy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var vy={[Yi]:"ENVMAP_MODE_REFRACTION"};function by(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sy={[Ah]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[ku]:"ENVMAP_BLENDING_ADD"};function My(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sy[n.combine]||"ENVMAP_BLENDING_NONE"}function Ty(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ey(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,h=t.fragmentShader,l=yy(t),o=_y(t),u=by(t),d=My(t),c=Ty(t),f=ly(t),g=hy(r),_=s.createProgram(),p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(p=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Bn?ay("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,sy("linearToOutputTexel",t.outputColorSpace),oy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=sc(a),a=yd(a,t),a=xd(a,t),h=sc(h),h=yd(h,t),h=xd(h,t),a=_d(a),h=_d(h),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=T+p+a,v=T+m+h,M=pd(s,s.VERTEX_SHADER,A),E=pd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,M),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(S){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(E)||"",V=I.trim(),Z=k.trim(),N=D.trim(),ie=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,M,E);else{let K=gd(s,M,"vertex"),B=gd(s,E,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+V+`
`+K+`
`+B)}else V!==""?Oe("WebGLProgram: Program Info Log:",V):(Z===""||N==="")&&(G=!1);G&&(S.diagnostics={runnable:ie,programLog:V,vertexShader:{log:Z,prefix:p},fragmentShader:{log:N,prefix:m}})}s.deleteShader(M),s.deleteShader(E),y=new Hs(s,_),w=cy(s,_)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,ey)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}var wy=0,rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ac(e),t.set(e,i)),i}},ac=class{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}};function Ay(n){return n===Ni||n===Wr||n===Xr}function Cy(n,e,t,i,s,r){let a=new Cs,h=new rc,l=new Set,o=[],u=new Map,d=i.logarithmicDepthBuffer,c=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,P,S,I,k){let D=S.fog,V=I.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?S.environment:null,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ie=e.get(y.envMap||Z,N),G=ie&&ie.mapping===kr?ie.image.height:null,K=f[y.type];y.precision!==null&&(c=i.getMaxPrecision(y.precision),c!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",c,"instead."));let B=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Q=B!==void 0?B.length:0,ae=0;V.morphAttributes.position!==void 0&&(ae=1),V.morphAttributes.normal!==void 0&&(ae=2),V.morphAttributes.color!==void 0&&(ae=3);let ke,le,Fe,q;if(K){let mt=ti[K];ke=mt.vertexShader,le=mt.fragmentShader}else{ke=y.vertexShader,le=y.fragmentShader;let mt=h.getVertexShaderStage(y),rt=h.getFragmentShaderStage(y);h.update(y,mt,rt),Fe=mt.id,q=rt.id}let z=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Se=I.isInstancedMesh===!0,te=I.isBatchedMesh===!0,Pe=!!y.map,Ye=!!y.matcap,Ie=!!ie,Ke=!!y.aoMap,it=!!y.lightMap,je=!!y.bumpMap&&y.wireframe===!1,bt=!!y.normalMap,Ft=!!y.displacementMap,rn=!!y.emissiveMap,Et=!!y.metalnessMap,Ct=!!y.roughnessMap,O=y.anisotropy>0,Xt=y.clearcoat>0,ct=y.dispersion>0,C=y.retroreflectivity>0,x=y.iridescence>0,H=y.sheen>0,$=y.transmission>0,J=O&&!!y.anisotropyMap,he=Xt&&!!y.clearcoatMap,ce=Xt&&!!y.clearcoatNormalMap,j=Xt&&!!y.clearcoatRoughnessMap,ne=x&&!!y.iridescenceMap,ue=x&&!!y.iridescenceThicknessMap,Le=H&&!!y.sheenColorMap,me=H&&!!y.sheenRoughnessMap,de=!!y.specularMap,De=!!y.specularColorMap,Ue=!!y.specularIntensityMap,Xe=$&&!!y.transmissionMap,U=$&&!!y.thicknessMap,fe=!!y.gradientMap,ee=!!y.alphaMap,pe=y.alphaTest>0,ve=!!y.alphaHash,re=!!y.extensions,Ne=Bn;y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ne=n.toneMapping);let Ae={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:ke,fragmentShader:le,defines:y.defines,customVertexShaderID:Fe,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:c,batching:te,batchingColor:te&&I._colorsTexture!==null,instancing:Se,instancingColor:Se&&I.instanceColor!==null,instancingMorph:Se&&I.morphTexture!==null,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Pe,matcap:Ye,envMap:Ie,envMapMode:Ie&&ie.mapping,envMapCubeUVHeight:G,aoMap:Ke,lightMap:it,bumpMap:je,normalMap:bt,displacementMap:Ft,emissiveMap:rn,normalMapObjectSpace:bt&&y.normalMapType===Hu,normalMapTangentSpace:bt&&y.normalMapType===yl,packedNormalMap:bt&&y.normalMapType===yl&&Ay(y.normalMap.format),metalnessMap:Et,roughnessMap:Ct,anisotropy:O,anisotropyMap:J,clearcoat:Xt,clearcoatMap:he,clearcoatNormalMap:ce,clearcoatRoughnessMap:j,dispersion:ct,retroreflection:C,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:Le,sheenRoughnessMap:me,specularMap:de,specularColorMap:De,specularIntensityMap:Ue,transmission:$,transmissionMap:Xe,thicknessMap:U,gradientMap:fe,opaque:y.transparent===!1&&y.blending===Us&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:ve,combine:y.combine,mapUv:Pe&&g(y.map.channel),aoMapUv:Ke&&g(y.aoMap.channel),lightMapUv:it&&g(y.lightMap.channel),bumpMapUv:je&&g(y.bumpMap.channel),normalMapUv:bt&&g(y.normalMap.channel),displacementMapUv:Ft&&g(y.displacementMap.channel),emissiveMapUv:rn&&g(y.emissiveMap.channel),metalnessMapUv:Et&&g(y.metalnessMap.channel),roughnessMapUv:Ct&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:he&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(y.sheenRoughnessMap.channel),specularMapUv:de&&g(y.specularMap.channel),specularColorMapUv:De&&g(y.specularColorMap.channel),specularIntensityMapUv:Ue&&g(y.specularIntensityMap.channel),transmissionMapUv:Xe&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:ee&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||O),vertexNormals:!!V.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(Pe||ee),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&bt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ae,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:rn&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)w.push(P),w.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(w,y),T(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function T(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let w=f[y.type],P;if(w){let S=ti[w];P=td.clone(S.uniforms)}else P=y.uniforms;return P}function v(y,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new Ey(n,w,y,s),o.push(P),u.set(w,P)),P}function M(y){if(--y.usedTimes===0){let w=o.indexOf(y);o[w]=o[o.length-1],o.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){h.remove(y)}function R(){h.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:o,dispose:R}}function Ry(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let h=n.get(a);return h===void 0&&(h={},n.set(a,h)),h}function i(a){n.delete(a)}function s(a,h,l){n.get(a)[h]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Py(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(c){let f=0;return c.isInstancedMesh&&(f+=2),c.isSkinnedMesh&&(f+=1),f}function h(c,f,g,_,p,m){let T=n[e];return T===void 0?(T={id:c.id,object:c,geometry:f,material:g,materialVariant:a(c),groupOrder:_,renderOrder:c.renderOrder,z:p,group:m},n[e]=T):(T.id=c.id,T.object=c,T.geometry=f,T.material=g,T.materialVariant=a(c),T.groupOrder=_,T.renderOrder=c.renderOrder,T.z=p,T.group=m),e++,T}function l(c,f,g,_,p,m,T){T.reversedDepth===!0&&(p=-p);let A=h(c,f,g,_,p,m);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):t.push(A)}function o(c,f,g,_,p,m){let T=h(c,f,g,_,p,m);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):t.unshift(T)}function u(c,f){t.length>1&&t.sort(c||Py),i.length>1&&i.sort(f||bd),s.length>1&&s.sort(f||bd)}function d(){for(let c=e,f=n.length;c<f;c++){let g=n[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:o,finish:d,sort:u}}function Iy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Sd,n.set(i,[a])):s>=r.length?(a=new Sd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ly(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new We};break;case"SpotLight":t={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Dy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Ny=0;function Fy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uy(n){let e=new Ly,t=Dy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new L);let s=new L,r=new st,a=new st;function h(o){let u=0,d=0,c=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,T=0,A=0,v=0,M=0,E=0,R=0,y=0,w=0,P=0;o.sort(Fy);for(let I=0,k=o.length;I<k;I++){let D=o[I],V=D.color,Z=D.intensity,N=D.distance,ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ni?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=V.r*Z,d+=V.g*Z,c+=V.b*Z;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],Z);P++}else if(D.isSunLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[g]=B,i.sunShadowMap[g]=ie;let Q=K.getViewportCount();for(let ae=0;ae<Q;ae++)i.sunShadowMatrix[_+ae]=K.getMatrix(ae),i.sunShadowCascade[_+ae]=K._cascadeData[ae];_+=Q,g++}i.sun[f]=G,f++}else if(D.isDirectionalLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=D.shadow.matrix,M++}i.directional[p]=G,p++}else if(D.isSpotLight){let G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(V).multiplyScalar(Z),G.distance=N,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[T]=G;let K=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,K.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[T]=K.matrix,D.castShadow){let B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.spotShadow[T]=B,i.spotShadowMap[T]=ie,R++}T++}else if(D.isRectAreaLight){let G=e.get(D);G.color.copy(V).multiplyScalar(Z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[A]=G,A++}else if(D.isPointLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,i.pointShadow[m]=B,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=D.shadow.matrix,E++}i.point[m]=G,m++}else if(D.isHemisphereLight){let G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(Z),G.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[v]=G,v++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=c;let S=i.hash;(S.sunLength!==f||S.directionalLength!==p||S.pointLength!==m||S.spotLength!==T||S.rectAreaLength!==A||S.hemiLength!==v||S.numSunShadows!==g||S.numDirectionalShadows!==M||S.numPointShadows!==E||S.numSpotShadows!==R||S.numSpotMaps!==y||S.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=p,i.spot.length=T,i.rectArea.length=A,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,S.sunLength=f,S.directionalLength=p,S.pointLength=m,S.spotLength=T,S.rectAreaLength=A,S.hemiLength=v,S.numSunShadows=g,S.numDirectionalShadows=M,S.numPointShadows=E,S.numSpotShadows=R,S.numSpotMaps=y,S.numLightProbes=P,i.version=Ny++)}function l(o,u){let d=0,c=0,f=0,g=0,_=0,p=0,m=u.matrixWorldInverse;for(let T=0,A=o.length;T<A;T++){let v=o[T];if(v.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let M=i.directional[c];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),c++}else if(v.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let M=i.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:h,setupView:l,state:i}}function Md(n){let e=new Uy(n),t=[],i=[],s=[];function r(c){d.camera=c,t.length=0,i.length=0,s.length=0}function a(c){t.push(c)}function h(c){i.push(c)}function l(c){s.push(c)}function o(){e.setup(t)}function u(c){e.setupView(t,c)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:o,setupLightsView:u,pushLight:a,pushShadow:h,pushLightProbeGrid:l}}function Oy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),h;return a===void 0?(h=new Md(n),e.set(s,[h])):r>=a.length?(h=new Md(n),a.push(h)):h=a[r],h}function i(){e=new WeakMap}return{get:t,dispose:i}}var ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
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
}`,zy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Hy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Td=new st,$r=new L,Qh=new L;function Vy(n,e,t){let i=new Ls,s=new ze,r=new ze,a=new St,h=new po,l=new mo,o={},u=t.maxTextureSize,d={[Pi]:sn,[sn]:Pi,[Tn]:Tn},c=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:ky,fragmentShader:By}),f=c.clone();f.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(g,c),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let m=this.type;this.render=function(E,R,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Po&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Or);let w=n.getRenderTarget(),P=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Qn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=m!==this.type;k&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=E.length;D<V;D++){let Z=E[D],N=Z.shadow;if(N===void 0){Oe("WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let ie=N.getFrameExtents();s.multiply(ie),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,N.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=G,N.map===null||k===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Fs){if(Z.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new on(s.x,s.y,{format:Ni,type:Hn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),N.map.texture.name=Z.name+".shadowMap",N.map.depthTexture=new Ei(s.x,s.y,En),N.map.depthTexture.name=Z.name+".shadowMapDepth",N.map.depthTexture.format=Zn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=kt,N.map.depthTexture.magFilter=kt}else Z.isPointLight?(N.map=new Ml(s.x),N.map.depthTexture=new co(s.x,zn)):(N.map=new on(s.x,s.y),N.map.depthTexture=new Ei(s.x,s.y,zn)),N.map.depthTexture.name=Z.name+".shadowMap",N.map.depthTexture.format=Zn,this.type===Or?(N.map.depthTexture.compareFunction=G?_l:xl,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=kt,N.map.depthTexture.magFilter=kt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let K=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();Z.isPointLight!==!0&&N.updateMatrices(Z,y);for(let B=0;B<K;B++){let Q=N.getCamera(B);if(Z.isPointLight){let ae=N.camera,ke=N.matrix,le=Z.distance||ae.far;le!==ae.far&&(ae.far=le,ae.updateProjectionMatrix()),$r.setFromMatrixPosition(Z.matrixWorld),ae.position.copy($r),Qh.copy(ae.position),Qh.add(zy[B]),ae.up.copy(Hy[B]),ae.lookAt(Qh),ae.updateMatrixWorld(),ke.makeTranslation(-$r.x,-$r.y,-$r.z),Td.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Td,ae.coordinateSystem,ae.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,B),n.clear();else{B===0&&(n.setRenderTarget(N.map),n.clear());let ae=N.getViewport(B);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),I.viewport(a)}i=N.getFrustum(B),v(R,y,Q,Z,this.type)}N.isPointLightShadow!==!0&&this.type===Fs&&T(N,y),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(w,P,S)};function T(E,R){let y=e.update(_);c.defines.VSM_SAMPLES!==E.blurSamples&&(c.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new on(s.x,s.y,{format:Ni,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),c.uniforms.shadow_pass.value=E.map.depthTexture,c.uniforms.resolution.value.set(E.map.width,E.map.height),c.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,y,c,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,y,f,_,null)}function A(E,R,y,w){let P=null,S=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)P=S;else if(P=y.isPointLight===!0?l:h,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let I=P.uuid,k=R.uuid,D=o[I];D===void 0&&(D={},o[I]=D);let V=D[k];V===void 0&&(V=P.clone(),D[k]=V,R.addEventListener("dispose",M)),P=V}if(P.visible=R.visible,P.wireframe=R.wireframe,w===Fs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let I=n.properties.get(P);I.light=y}return P}function v(E,R,y,w,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Fs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let k=e.update(E),D=E.material;if(Array.isArray(D)){let V=k.groups;for(let Z=0,N=V.length;Z<N;Z++){let ie=V[Z],G=D[ie.materialIndex];if(G&&G.visible){let K=A(E,G,w,P);E.onBeforeShadow(n,E,R,y,k,K,ie),n.renderBufferDirect(y,null,k,K,E,ie),E.onAfterShadow(n,E,R,y,k,K,ie)}}}else if(D.visible){let V=A(E,D,w,P);E.onBeforeShadow(n,E,R,y,k,V,null),n.renderBufferDirect(y,null,k,V,E,null),E.onAfterShadow(n,E,R,y,k,V,null)}}let I=E.children;for(let k=0,D=I.length;k<D;k++)v(I[k],R,y,w,P)}function M(E){E.target.removeEventListener("dispose",M);for(let y in o){let w=o[y],P=E.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function Gy(n,e){function t(){let U=!1,fe=new St,ee=null,pe=new St(0,0,0,0);return{setMask:function(ve){ee!==ve&&!U&&(n.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){U=ve},setClear:function(ve,re,Ne,Ae,mt){mt===!0&&(ve*=Ae,re*=Ae,Ne*=Ae),fe.set(ve,re,Ne,Ae),pe.equals(fe)===!1&&(n.clearColor(ve,re,Ne,Ae),pe.copy(fe))},reset:function(){U=!1,ee=null,pe.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,ee=null,pe=null,ve=null;return{setReversed:function(re){if(fe!==re){let Ne=e.get("EXT_clip_control");re?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),fe=re;let Ae=ve;ve=null,this.setClear(Ae)}},getReversed:function(){return fe},setTest:function(re){re?z(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(re){ee!==re&&!U&&(n.depthMask(re),ee=re)},setFunc:function(re){if(fe&&(re=ju[re]),pe!==re){switch(re){case $a:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=re}},setLocked:function(re){U=re},setClear:function(re){ve!==re&&(ve=re,fe&&(re=1-re),n.clearDepth(re))},reset:function(){U=!1,ee=null,pe=null,ve=null,fe=!1}}}function s(){let U=!1,fe=null,ee=null,pe=null,ve=null,re=null,Ne=null,Ae=null,mt=null;return{setTest:function(rt){U||(rt?z(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!U&&(n.stencilMask(rt),fe=rt)},setFunc:function(rt,Dn,Gn){(ee!==rt||pe!==Dn||ve!==Gn)&&(n.stencilFunc(rt,Dn,Gn),ee=rt,pe=Dn,ve=Gn)},setOp:function(rt,Dn,Gn){(re!==rt||Ne!==Dn||Ae!==Gn)&&(n.stencilOp(rt,Dn,Gn),re=rt,Ne=Dn,Ae=Gn)},setLocked:function(rt){U=rt},setClear:function(rt){mt!==rt&&(n.clearStencil(rt),mt=rt)},reset:function(){U=!1,fe=null,ee=null,pe=null,ve=null,re=null,Ne=null,Ae=null,mt=null}}}let r=new t,a=new i,h=new s,l=new WeakMap,o=new WeakMap,u={},d={},c={},f=new WeakMap,g=[],_=null,p=!1,m=null,T=null,A=null,v=null,M=null,E=null,R=null,y=new We(0,0,0),w=0,P=!1,S=null,I=null,k=null,D=null,V=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ie=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=ie>=2);let K=null,B={},Q=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),ke=new St().fromArray(Q),le=new St().fromArray(ae);function Fe(U,fe,ee,pe){let ve=new Uint8Array(4),re=n.createTexture();n.bindTexture(U,re),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ee;Ne++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(fe+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return re}let q={};q[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),h.setClear(0),z(n.DEPTH_TEST),a.setFunc(Ms),je(!1),bt(bh),z(n.CULL_FACE),Ke(Qn);function z(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function oe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Se(U,fe){return c[U]!==fe?(n.bindFramebuffer(U,fe),c[U]=fe,U===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=fe),U===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function te(U,fe){let ee=g,pe=!1;if(U){ee=f.get(fe),ee===void 0&&(ee=[],f.set(fe,ee));let ve=U.textures;if(ee.length!==ve.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ne=ve.length;re<Ne;re++)ee[re]=n.COLOR_ATTACHMENT0+re;ee.length=ve.length,pe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ee)}function Pe(U){return _!==U?(n.useProgram(U),_=U,!0):!1}let Ye={[$i]:n.FUNC_ADD,[vu]:n.FUNC_SUBTRACT,[bu]:n.FUNC_REVERSE_SUBTRACT};Ye[Su]=n.MIN,Ye[Mu]=n.MAX;let Ie={[Tu]:n.ZERO,[Eu]:n.ONE,[wu]:n.SRC_COLOR,[Eh]:n.SRC_ALPHA,[Lu]:n.SRC_ALPHA_SATURATE,[Pu]:n.DST_COLOR,[Cu]:n.DST_ALPHA,[Au]:n.ONE_MINUS_SRC_COLOR,[wh]:n.ONE_MINUS_SRC_ALPHA,[Iu]:n.ONE_MINUS_DST_COLOR,[Ru]:n.ONE_MINUS_DST_ALPHA,[Du]:n.CONSTANT_COLOR,[Nu]:n.ONE_MINUS_CONSTANT_COLOR,[Fu]:n.CONSTANT_ALPHA,[Uu]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(U,fe,ee,pe,ve,re,Ne,Ae,mt,rt){if(U===Qn){p===!0&&(oe(n.BLEND),p=!1);return}if(p===!1&&(z(n.BLEND),p=!0),U!==_u){if(U!==m||rt!==P){if((T!==$i||M!==$i)&&(n.blendEquation(n.FUNC_ADD),T=$i,M=$i),rt)switch(U){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.ONE,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Be("WebGLState: Invalid blending: ",U);break}else switch(U){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",U);break}A=null,v=null,E=null,R=null,y.set(0,0,0),w=0,m=U,P=rt}return}ve=ve||fe,re=re||ee,Ne=Ne||pe,(fe!==T||ve!==M)&&(n.blendEquationSeparate(Ye[fe],Ye[ve]),T=fe,M=ve),(ee!==A||pe!==v||re!==E||Ne!==R)&&(n.blendFuncSeparate(Ie[ee],Ie[pe],Ie[re],Ie[Ne]),A=ee,v=pe,E=re,R=Ne),(Ae.equals(y)===!1||mt!==w)&&(n.blendColor(Ae.r,Ae.g,Ae.b,mt),y.copy(Ae),w=mt),m=U,P=!1}function it(U,fe){U.side===Tn?oe(n.CULL_FACE):z(n.CULL_FACE);let ee=U.side===sn;fe&&(ee=!ee),je(ee),U.blending===Us&&U.transparent===!1?Ke(Qn):Ke(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let pe=U.stencilWrite;h.setTest(pe),pe&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),rn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function bt(U){U!==yu?(z(n.CULL_FACE),U!==I&&(U===bh?n.cullFace(n.BACK):U===xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),I=U}function Ft(U){U!==k&&(N&&n.lineWidth(U),k=U)}function rn(U,fe,ee){U?(z(n.POLYGON_OFFSET_FILL),(D!==fe||V!==ee)&&(D=fe,V=ee,a.getReversed()&&(fe=-fe),n.polygonOffset(fe,ee))):oe(n.POLYGON_OFFSET_FILL)}function Et(U){U?z(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function Ct(U){U===void 0&&(U=n.TEXTURE0+Z-1),K!==U&&(n.activeTexture(U),K=U)}function O(U,fe,ee){ee===void 0&&(K===null?ee=n.TEXTURE0+Z-1:ee=K);let pe=B[ee];pe===void 0&&(pe={type:void 0,texture:void 0},B[ee]=pe),(pe.type!==U||pe.texture!==fe)&&(K!==ee&&(n.activeTexture(ee),K=ee),n.bindTexture(U,fe||q[U]),pe.type=U,pe.texture=fe)}function Xt(){let U=B[K];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{n.compressedTexImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function x(){try{n.texSubImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function H(){try{n.texSubImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function he(){try{n.texStorage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function ce(){try{n.texStorage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function j(){try{n.texImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function ne(){try{n.texImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function ue(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Le(U,fe){d[U]!==fe&&(n.pixelStorei(U,fe),d[U]=fe)}function me(U){ke.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ke.copy(U))}function de(U){le.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function De(U,fe){let ee=o.get(fe);ee===void 0&&(ee=new WeakMap,o.set(fe,ee));let pe=ee.get(U);pe===void 0&&(pe=n.getUniformBlockIndex(fe,U.name),ee.set(U,pe))}function Ue(U,fe){let pe=o.get(fe).get(U);l.get(fe)!==pe&&(n.uniformBlockBinding(fe,pe,U.__bindingPointIndex),l.set(fe,pe))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},K=null,B={},c={},f=new WeakMap,g=[],_=null,p=!1,m=null,T=null,A=null,v=null,M=null,E=null,R=null,y=new We(0,0,0),w=0,P=!1,S=null,I=null,k=null,D=null,V=null,ke.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),h.reset()}return{buffers:{color:r,depth:a,stencil:h},enable:z,disable:oe,bindFramebuffer:Se,drawBuffers:te,useProgram:Pe,setBlending:Ke,setMaterial:it,setFlipSided:je,setCullFace:bt,setLineWidth:Ft,setPolygonOffset:rn,setScissorTest:Et,activeTexture:Ct,bindTexture:O,unbindTexture:Xt,compressedTexImage2D:ct,compressedTexImage3D:C,texImage2D:j,texImage3D:ne,pixelStorei:Le,getParameter:ue,updateUBOMapping:De,uniformBlockBinding:Ue,texStorage2D:he,texStorage3D:ce,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:me,viewport:de,reset:Xe}}function Wy(n,e,t,i,s,r,a){let h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new ze,u=new WeakMap,d=new Set,c,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return g?new OffscreenCanvas(C,x):gr("canvas")}function p(C,x,H){let $=1,J=ct(C);if((J.width>H||J.height>H)&&($=H/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let he=Math.floor($*J.width),ce=Math.floor($*J.height);c===void 0&&(c=_(he,ce));let j=x?_(he,ce):c;return j.width=he,j.height=ce,j.getContext("2d").drawImage(C,0,0,he,ce),Oe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+he+"x"+ce+")."),j}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function T(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,x,H,$,J,he=!1){if(C!==null){if(n[C]!==void 0)return n[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;$&&(ce=e.get("EXT_texture_norm16"),ce||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===n.RED&&(H===n.FLOAT&&(j=n.R32F),H===n.HALF_FLOAT&&(j=n.R16F),H===n.UNSIGNED_BYTE&&(j=n.R8),H===n.UNSIGNED_SHORT&&ce&&(j=ce.R16_EXT),H===n.SHORT&&ce&&(j=ce.R16_SNORM_EXT)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.R8UI),H===n.UNSIGNED_SHORT&&(j=n.R16UI),H===n.UNSIGNED_INT&&(j=n.R32UI),H===n.BYTE&&(j=n.R8I),H===n.SHORT&&(j=n.R16I),H===n.INT&&(j=n.R32I)),x===n.RG&&(H===n.FLOAT&&(j=n.RG32F),H===n.HALF_FLOAT&&(j=n.RG16F),H===n.UNSIGNED_BYTE&&(j=n.RG8),H===n.UNSIGNED_SHORT&&ce&&(j=ce.RG16_EXT),H===n.SHORT&&ce&&(j=ce.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RG8UI),H===n.UNSIGNED_SHORT&&(j=n.RG16UI),H===n.UNSIGNED_INT&&(j=n.RG32UI),H===n.BYTE&&(j=n.RG8I),H===n.SHORT&&(j=n.RG16I),H===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGB8UI),H===n.UNSIGNED_SHORT&&(j=n.RGB16UI),H===n.UNSIGNED_INT&&(j=n.RGB32UI),H===n.BYTE&&(j=n.RGB8I),H===n.SHORT&&(j=n.RGB16I),H===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),H===n.UNSIGNED_INT&&(j=n.RGBA32UI),H===n.BYTE&&(j=n.RGBA8I),H===n.SHORT&&(j=n.RGBA16I),H===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(H===n.UNSIGNED_SHORT&&ce&&(j=ce.RGB16_EXT),H===n.SHORT&&ce&&(j=ce.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){let ne=he?mr:Qe.getTransfer(J);H===n.FLOAT&&(j=n.RGBA32F),H===n.HALF_FLOAT&&(j=n.RGBA16F),H===n.UNSIGNED_BYTE&&(j=ne===ot?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&ce&&(j=ce.RGBA16_EXT),H===n.SHORT&&ce&&(j=ce.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(C,x){let H;return C?x===null||x===zn||x===ks?H=n.DEPTH24_STENCIL8:x===En?H=n.DEPTH32F_STENCIL8:x===Os&&(H=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===ks?H=n.DEPTH_COMPONENT24:x===En?H=n.DEPTH_COMPONENT32F:x===Os&&(H=n.DEPTH_COMPONENT16),H}function E(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){let x=C.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function y(C){let x=C.target;x.removeEventListener("dispose",y),S(x)}function w(C){let x=i.get(C);if(x.__webglInit===void 0)return;let H=C.source,$=f.get(H);if($){let J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(C),Object.keys($).length===0&&f.delete(H)}i.remove(C)}function P(C){let x=i.get(C);n.deleteTexture(x.__webglTexture);let H=C.source,$=f.get(H);delete $[x.__cacheKey],a.memory.textures--}function S(C){let x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[$][J]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=C.textures;for(let $=0,J=H.length;$<J;$++){let he=i.get(H[$]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(H[$])}i.remove(C)}let I=0;function k(){I=0}function D(){return I}function V(C){I=C}function Z(){let C=I;return C>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function N(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function ie(C,x){let H=i.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let $=C.image;if($===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,C,x);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function G(C,x){let H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){oe(H,C,x);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function K(C,x){let H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){oe(H,C,x);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function B(C,x){let H=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Se(H,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}let Q={[Ts]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},ae={[kt]:n.NEAREST,[Bu]:n.NEAREST_MIPMAP_NEAREST,[Br]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},ke={[Gu]:n.NEVER,[Yu]:n.ALWAYS,[Wu]:n.LESS,[xl]:n.LEQUAL,[Xu]:n.EQUAL,[_l]:n.GEQUAL,[qu]:n.GREATER,[$u]:n.NOTEQUAL};function le(C,x){if(x.type===En&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Vt||x.magFilter===Do||x.magFilter===Br||x.magFilter===Li||x.minFilter===Vt||x.minFilter===Do||x.minFilter===Br||x.minFilter===Li)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Q[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Q[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Q[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ae[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ke[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==Br&&x.minFilter!==Li||x.type===En&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Fe(C,x){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));let $=x.source,J=f.get($);J===void 0&&(J={},f.set($,J));let he=N(x);if(he!==C.__cacheKey){J[he]===void 0&&(J[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[he].usedTimes++;let ce=J[C.__cacheKey];ce!==void 0&&(J[C.__cacheKey].usedTimes--,ce.usedTimes===0&&P(x)),C.__cacheKey=he,C.__webglTexture=J[he].texture}return H}function q(C,x,H){return Math.floor(Math.floor(C/H)/x)}function z(C,x,H,$){let he=C.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,H,$,x.data);else{he.sort((Le,me)=>Le.start-me.start);let ce=0;for(let Le=1;Le<he.length;Le++){let me=he[ce],de=he[Le],De=me.start+me.count,Ue=q(de.start,x.width,4),Xe=q(me.start,x.width,4);de.start<=De+1&&Ue===Xe&&q(de.start+de.count-1,x.width,4)===Ue?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,he[ce]=de)}he.length=ce+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Le=0,me=he.length;Le<me;Le++){let de=he[Le],De=Math.floor(de.start/4),Ue=Math.ceil(de.count/4),Xe=De%x.width,U=Math.floor(De/x.width),fe=Ue,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Xe,U,fe,ee,H,$,x.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function oe(C,x,H){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);let J=Fe(C,x),he=x.source;t.bindTexture($,C.__webglTexture,n.TEXTURE0+H);let ce=i.get(he);if(he.version!==ce.__version||J===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ee=Qe.getPrimaries(Qe.workingColorSpace),pe=x.colorSpace===di?null:Qe.getPrimaries(x.colorSpace),ve=x.colorSpace===di||ee===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=p(x.image,!1,s.maxTextureSize);ne=Xt(x,ne);let ue=r.convert(x.format,x.colorSpace),Le=r.convert(x.type),me=v(x.internalFormat,ue,Le,x.normalized,x.colorSpace,x.isVideoTexture);le($,x);let de,De=x.mipmaps,Ue=x.isVideoTexture!==!0,Xe=ce.__version===void 0||J===!0,U=he.dataReady,fe=E(x,ne);if(x.isDepthTexture)me=M(x.format===Di,x.type),Xe&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,me,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,me,ne.width,ne.height,0,ue,Le,null));else if(x.isDataTexture)if(De.length>0){Ue&&Xe&&t.texStorage2D(n.TEXTURE_2D,fe,me,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)de=De[ee],Ue?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ue,Le,de.data):t.texImage2D(n.TEXTURE_2D,ee,me,de.width,de.height,0,ue,Le,de.data);x.generateMipmaps=!1}else Ue?(Xe&&t.texStorage2D(n.TEXTURE_2D,fe,me,ne.width,ne.height),U&&z(x,ne,ue,Le)):t.texImage2D(n.TEXTURE_2D,0,me,ne.width,ne.height,0,ue,Le,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,me,De[0].width,De[0].height,ne.depth);for(let ee=0,pe=De.length;ee<pe;ee++)if(de=De[ee],x.format!==wn)if(ue!==null)if(Ue){if(U)if(x.layerUpdates.size>0){let ve=$h(de.width,de.height,x.format,x.type);for(let re of x.layerUpdates){let Ne=de.data.subarray(re*ve/de.data.BYTES_PER_ELEMENT,(re+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,re,de.width,de.height,1,ue,Ne)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,ne.depth,ue,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,me,de.width,de.height,ne.depth,0,de.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,ne.depth,ue,Le,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,me,de.width,de.height,ne.depth,0,ue,Le,de.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ue&&Xe&&t.texStorage2D(n.TEXTURE_2D,fe,me,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)de=De[ee],x.format!==wn?ue!==null?Ue?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,me,de.width,de.height,0,de.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ue,Le,de.data):t.texImage2D(n.TEXTURE_2D,ee,me,de.width,de.height,0,ue,Le,de.data)}else if(x.isDataArrayTexture)if(Ue){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,me,ne.width,ne.height,ne.depth),U)if(x.layerUpdates.size>0){let ee=$h(ne.width,ne.height,x.format,x.type);for(let pe of x.layerUpdates){let ve=ne.data.subarray(pe*ee/ne.data.BYTES_PER_ELEMENT,(pe+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,ne.width,ne.height,1,ue,Le,ve)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Le,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,ue,Le,ne.data);else if(x.isData3DTexture)Ue?(Xe&&t.texStorage3D(n.TEXTURE_3D,fe,me,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Le,ne.data)):t.texImage3D(n.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,ue,Le,ne.data);else if(x.isFramebufferTexture){if(Xe)if(Ue)t.texStorage2D(n.TEXTURE_2D,fe,me,ne.width,ne.height);else{let ee=ne.width,pe=ne.height;for(let ve=0;ve<fe;ve++)t.texImage2D(n.TEXTURE_2D,ve,me,ee,pe,0,ue,Le,null),ee>>=1,pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),d.add(x),ee.onpaint=pe=>{let ve=pe.changedElements;for(let re of d)ve.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{let ve=n.RGBA,re=n.RGBA,Ne=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,re,Ne,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ue&&Xe){let ee=ct(De[0]);t.texStorage2D(n.TEXTURE_2D,fe,me,ee.width,ee.height)}for(let ee=0,pe=De.length;ee<pe;ee++)de=De[ee],Ue?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue,Le,de):t.texImage2D(n.TEXTURE_2D,ee,me,ue,Le,de);x.generateMipmaps=!1}else if(Ue){if(Xe){let ee=ct(ne);t.texStorage2D(n.TEXTURE_2D,fe,me,ee.width,ee.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Le,ne)}else t.texImage2D(n.TEXTURE_2D,0,me,ue,Le,ne);m(x)&&T($),ce.__version=he.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Se(C,x,H){if(x.image.length!==6)return;let $=Fe(C,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);let he=i.get(J);if(J.version!==he.__version||$===!0){t.activeTexture(n.TEXTURE0+H);let ce=Qe.getPrimaries(Qe.workingColorSpace),j=x.colorSpace===di?null:Qe.getPrimaries(x.colorSpace),ne=x.colorSpace===di||ce===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ue=x.isCompressedTexture||x.image[0].isCompressedTexture,Le=x.image[0]&&x.image[0].isDataTexture,me=[];for(let re=0;re<6;re++)!ue&&!Le?me[re]=p(x.image[re],!0,s.maxCubemapSize):me[re]=Le?x.image[re].image:x.image[re],me[re]=Xt(x,me[re]);let de=me[0],De=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type),Xe=v(x.internalFormat,De,Ue,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,fe=he.__version===void 0||$===!0,ee=J.dataReady,pe=E(x,de);le(n.TEXTURE_CUBE_MAP,x);let ve;if(ue){U&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,de.width,de.height);for(let re=0;re<6;re++){ve=me[re].mipmaps;for(let Ne=0;Ne<ve.length;Ne++){let Ae=ve[Ne];x.format!==wn?De!==null?U?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,Ae.width,Ae.height,De,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,Xe,Ae.width,Ae.height,0,Ae.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,Ae.width,Ae.height,De,Ue,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,Xe,Ae.width,Ae.height,0,De,Ue,Ae.data)}}}else{if(ve=x.mipmaps,U&&fe){ve.length>0&&pe++;let re=ct(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,re.width,re.height)}for(let re=0;re<6;re++)if(Le){U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me[re].width,me[re].height,De,Ue,me[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,me[re].width,me[re].height,0,De,Ue,me[re].data);for(let Ne=0;Ne<ve.length;Ne++){let mt=ve[Ne].image[re].image;U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,mt.width,mt.height,De,Ue,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,Xe,mt.width,mt.height,0,De,Ue,mt.data)}}else{U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Ue,me[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,De,Ue,me[re]);for(let Ne=0;Ne<ve.length;Ne++){let Ae=ve[Ne];U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,De,Ue,Ae.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,Xe,De,Ue,Ae.image[re])}}}m(x)&&T(n.TEXTURE_CUBE_MAP),he.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function te(C,x,H,$,J,he){let ce=r.convert(H.format,H.colorSpace),j=r.convert(H.type),ne=v(H.internalFormat,ce,j,H.normalized,H.colorSpace),ue=i.get(x),Le=i.get(H);if(Le.__renderTarget=x,!ue.__hasExternalTextures){let me=Math.max(1,x.width>>he),de=Math.max(1,x.height>>he);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,he,ne,me,de,x.depth,0,ce,j,null):t.texImage2D(J,he,ne,me,de,0,ce,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ct(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,Le.__webglTexture,0,Et(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,Le.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(C,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){let $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,he=M(x.stencilBuffer,J),ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ct(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(x),he,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(x),he,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,he,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,C)}else{let $=x.textures;for(let J=0;J<$.length;J++){let he=$[J],ce=r.convert(he.format,he.colorSpace),j=r.convert(he.type),ne=v(he.internalFormat,ce,j,he.normalized,he.colorSpace);Ct(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(x),ne,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(x),ne,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(C,x,H){let $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),le(n.TEXTURE_CUBE_MAP,x.depthTexture);let ue=r.convert(x.depthTexture.format),Le=r.convert(x.depthTexture.type),me;x.depthTexture.format===Zn?me=n.DEPTH_COMPONENT24:x.depthTexture.format===Di&&(me=n.DEPTH24_STENCIL8);for(let de=0;de<6;de++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,x.width,x.height,0,ue,Le,null)}}else ie(x.depthTexture,0);let he=J.__webglTexture,ce=Et(x),j=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ne=x.depthTexture.format===Di?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)Ct(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,j,he,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,ne,j,he,0);else if(x.depthTexture.format===Di)Ct(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,j,he,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,ne,j,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ie(C){let x=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Ye(x.__webglFramebuffer[$],C,$);else{let $=C.texture.mipmaps;$&&$.length>0?Ye(x.__webglFramebuffer[0],C,0):Ye(x.__webglFramebuffer,C,0)}else if(H){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),Pe(x.__webglDepthbuffer[$],C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,he)}}else{let $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Pe(x.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(C,x,H){let $=i.get(C);x!==void 0&&te($.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ie(C)}function it(C){let x=C.texture,H=i.get(C),$=i.get(x);C.addEventListener("dispose",y);let J=C.textures,he=C.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,a.memory.textures++),he){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let ne=0;ne<x.mipmaps.length;ne++)H.__webglFramebuffer[j][ne]=n.createFramebuffer()}else H.__webglFramebuffer[j]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)H.__webglFramebuffer[j]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ce)for(let j=0,ne=J.length;j<ne;j++){let ue=i.get(J[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ct(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let ne=J[j];H.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let ue=r.convert(ne.format,ne.colorSpace),Le=r.convert(ne.type),me=v(ne.internalFormat,ue,Le,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),de=Et(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,H.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),le(n.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)te(H.__webglFramebuffer[j][ne],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne);else te(H.__webglFramebuffer[j],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(x)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let j=0,ne=J.length;j<ne;j++){let ue=J[j],Le=i.get(ue),me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Le.__webglTexture),le(me,ue),te(H.__webglFramebuffer,C,ue,n.COLOR_ATTACHMENT0+j,me,0),m(ue)&&T(me)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,$.__webglTexture),le(j,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)te(H.__webglFramebuffer[ne],C,x,n.COLOR_ATTACHMENT0,j,ne);else te(H.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,j,0);m(x)&&T(j),t.unbindTexture()}C.depthBuffer&&Ie(C)}function je(C){let x=C.textures;for(let H=0,$=x.length;H<$;H++){let J=x[H];if(m(J)){let he=A(C),ce=i.get(J).__webglTexture;t.bindTexture(he,ce),T(he),t.unbindTexture()}}}let bt=[],Ft=[];function rn(C){if(C.samples>0){if(Ct(C)===!1){let x=C.textures,H=C.width,$=C.height,J=n.COLOR_BUFFER_BIT,he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(C),j=x.length>1;if(j)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ne=C.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Le=i.get(x[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,H,$,0,0,H,$,J,n.NEAREST),l===!0&&(bt.length=0,Ft.length=0,bt.push(n.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(bt.push(he),Ft.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Le=i.get(x[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Et(C){return Math.min(s.maxSamples,C.samples)}function Ct(C){let x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(C){let x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Xt(C,x){let H=C.colorSpace,$=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==pr&&H!==di&&(Qe.getTransfer(H)===ot?($!==wn||J!==ln)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",H)),x}function ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(o.width=C.naturalWidth||C.width,o.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(o.width=C.displayWidth,o.height=C.displayHeight):(o.width=C.width,o.height=C.height),o}this.allocateTextureUnit=Z,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=B,this.rebindTextures=Ke,this.setupRenderTarget=it,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xy(n,e){function t(i,s=di){let r,a=Qe.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===Fo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uh)return n.BYTE;if(i===Oh)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===No)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===zh)return n.ALPHA;if(i===Hh)return n.RGB;if(i===wn)return n.RGBA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===Di)return n.DEPTH_STENCIL;if(i===Oo)return n.RED;if(i===ko)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===Bo)return n.RG_INTEGER;if(i===zo)return n.RGBA_INTEGER;if(i===zr||i===Hr||i===Vr||i===Gr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ho||i===Vo||i===Go||i===Wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xo||i===qo||i===$o||i===Yo||i===Zo||i===Wr||i===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xo||i===qo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$o)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yo)return r.COMPRESSED_R11_EAC;if(i===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wr)return r.COMPRESSED_RG11_EAC;if(i===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===hl||i===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===dl||i===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ul)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pl||i===ml||i===Xr||i===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`,oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Cr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new pn({vertexShader:qy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Gt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends Jn{constructor(e,t){super();let i=this,s=null,r=1,a=null,h="local-floor",l=1,o=null,u=null,d=null,c=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new oc,m={},T=t.getContextAttributes(),A=null,v=null,M=[],E=[],R=new ze,y=null,w=null,P=new Zt;P.viewport=new St;let S=new Zt;S.viewport=new St;let I=[P,S],k=new Co,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let z=M[q];return z===void 0&&(z=new Rs,M[q]=z),z.getTargetRaySpace()},this.getControllerGrip=function(q){let z=M[q];return z===void 0&&(z=new Rs,M[q]=z),z.getGripSpace()},this.getHand=function(q){let z=M[q];return z===void 0&&(z=new Rs,M[q]=z),z.getHandSpace()};function Z(q){let z=E.indexOf(q.inputSource);if(z===-1)return;let oe=M[z];oe!==void 0&&(oe.update(q.inputSource,q.frame,o||a),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<M.length;q++){let z=E[q];z!==null&&(E[q]=null,M[q].disconnect(z))}D=null,V=null,p.reset();for(let q in m)delete m[q];if(e.setRenderTarget(A),f=null,c=null,d=null,s=null,v=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(q){o=q},this.getBaseLayer=function(){return c!==null?c:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",N),s.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Se=null,te=null;T.depth&&(te=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=T.stencil?Di:Zn,Se=T.stencil?ks:zn);let Pe={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};d=this.getBinding(),c=d.createProjectionLayer(Pe),s.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),v=new on(c.textureWidth,c.textureHeight,{format:wn,type:ln,depthTexture:new Ei(c.textureWidth,c.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let oe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new on(f.framebufferWidth,f.framebufferHeight,{format:wn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),o=null,a=await s.requestReferenceSpace(h),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(q){for(let z=0;z<q.removed.length;z++){let oe=q.removed[z],Se=E.indexOf(oe);Se>=0&&(E[Se]=null,M[Se].disconnect(oe))}for(let z=0;z<q.added.length;z++){let oe=q.added[z],Se=E.indexOf(oe);if(Se===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=E.length){E.push(oe),Se=Pe;break}else if(E[Pe]===null){E[Pe]=oe,Se=Pe;break}if(Se===-1)break}let te=M[Se];te&&te.connect(oe)}}let G=new L,K=new L;function B(q,z,oe){G.setFromMatrixPosition(z.matrixWorld),K.setFromMatrixPosition(oe.matrixWorld);let Se=G.distanceTo(K),te=z.projectionMatrix.elements,Pe=oe.projectionMatrix.elements,Ye=te[14]/(te[10]-1),Ie=te[14]/(te[10]+1),Ke=(te[9]+1)/te[5],it=(te[9]-1)/te[5],je=(te[8]-1)/te[0],bt=(Pe[8]+1)/Pe[0],Ft=Ye*je,rn=Ye*bt,Et=Se/(-je+bt),Ct=Et*-je;if(z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),te[10]===-1)q.projectionMatrix.copy(z.projectionMatrix),q.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let O=Ye+Et,Xt=Ie+Et,ct=Ft-Ct,C=rn+(Se-Ct),x=Ke*Ie/Xt*O,H=it*Ie/Xt*O;q.projectionMatrix.makePerspective(ct,C,x,H,O,Xt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,z){z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let z=q.near,oe=q.far;p.texture!==null&&(p.depthNear>0&&(z=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),k.near=S.near=P.near=z,k.far=S.far=P.far=oe,(D!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,V=k.far),k.layers.mask=q.layers.mask|6,P.layers.mask=k.layers.mask&-5,S.layers.mask=k.layers.mask&-3;let Se=q.parent,te=k.cameras;Q(k,Se);for(let Pe=0;Pe<te.length;Pe++)Q(te[Pe],Se);te.length===2?B(k,P,S):k.projectionMatrix.copy(P.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),ae(q,k,Se)};function ae(q,z,oe){oe===null?q.matrix.copy(z.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(z.projectionMatrix),q.projectionMatrixInverse.copy(z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=no*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(c===null&&f===null))return l},this.setFoveation=function(q){l=q,c!==null&&(c.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(q){return m[q]};let ke=null;function le(q,z){if(u=z.getViewerPose(o||a),g=z,u!==null){let oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Se=!1;oe.length!==k.cameras.length&&(k.cameras.length=0,Se=!0);for(let Ie=0;Ie<oe.length;Ie++){let Ke=oe[Ie],it=null;if(f!==null)it=f.getViewport(Ke);else{let bt=d.getViewSubImage(c,Ke);it=bt.viewport,Ie===0&&(e.setRenderTargetTextures(v,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(v))}let je=I[Ie];je===void 0&&(je=new Zt,je.layers.enable(Ie),je.viewport=new St,I[Ie]=je),je.matrix.fromArray(Ke.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ke.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(it.x,it.y,it.width,it.height),Ie===0&&(k.matrix.copy(je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Se===!0&&k.cameras.push(je)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Ie=d.getDepthInformation(oe[0]);Ie&&Ie.isValid&&Ie.texture&&p.init(Ie,s.renderState)}if(te&&te.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Ie=0;Ie<oe.length;Ie++){let Ke=oe[Ie].camera;if(Ke){let it=m[Ke];it||(it=new Cr,m[Ke]=it);let je=d.getCameraImage(Ke);it.sourceTexture=je}}}}for(let oe=0;oe<M.length;oe++){let Se=E[oe],te=M[oe];Se!==null&&te!==void 0&&te.update(Se,z,o||a)}ke&&ke(q,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),g=null}let Fe=new Ed;Fe.setAnimationLoop(le),this.setAnimationLoop=function(q){ke=q},this.dispose=function(){}}},Yy=new st,Id=new Ge;Id.set(-1,0,0,0,1,0,0,0,1);function Zy(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Wh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),c(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&h(p,m)):m.isPointsMaterial?l(p,m,T,A):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=e.get(m),A=T.envMap,v=T.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Id),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function h(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function c(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jy(n,e,t,i){let s={},r={},a=[],h=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let E=M.program;i.uniformBlockBinding(v,E)}function o(v,M){let E=s[v.id];E===void 0&&(p(v),E=u(v),s[v.id]=E,v.addEventListener("dispose",T));let R=M.program;i.updateUBOMapping(v,R);let y=e.render.frame;r[v.id]!==y&&(c(v),r[v.id]=y)}function u(v){let M=d();v.__bindingPointIndex=M;let E=n.createBuffer(),R=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let v=0;v<h;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){let M=s[v.id],E=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,w=E.length;y<w;y++){let P=E[y];if(Array.isArray(P))for(let S=0,I=P.length;S<I;S++)f(P[S],y,S,R);else f(P,y,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,M,E,R){if(_(v,M,E,R)===!0){let y=v.__offset,w=v.value;if(Array.isArray(w)){let P=0;for(let S=0;S<w.length;S++){let I=w[S],k=m(I);g(I,v.__data,P),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,v.__data)}}function g(v,M,E){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,E)}function _(v,M,E,R){let y=v.value,w=M+"_"+E;if(R[w]===void 0)return typeof y=="number"||typeof y=="boolean"?R[w]=y:ArrayBuffer.isView(y)?R[w]=y.slice():R[w]=y.clone(),!0;{let P=R[w];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function p(v){let M=v.uniforms,E=0,R=16;for(let w=0,P=M.length;w<P;w++){let S=Array.isArray(M[w])?M[w]:[M[w]];for(let I=0,k=S.length;I<k;I++){let D=S[I],V=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,N=V.length;Z<N;Z++){let ie=V[Z],G=m(ie),K=E%R,B=K%G.boundary,Q=K+B;E+=B,Q!==0&&R-Q<G.storage&&(E+=R-Q),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=G.storage}}}let y=E%R;return y>0&&(E+=R-y),v.__size=E,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",v),M}function T(v){let M=v.target;M.removeEventListener("dispose",T);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function A(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:o,dispose:A}}var Ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function jy(){return ei===null&&(ei=new Er(Ky,16,16,Ni,Hn),ei.name="DFG_LUT",ei.minFilter=Vt,ei.magFilter=Vt,ei.wrapS=Yn,ei.wrapT=Yn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Tl=class{constructor(e={}){let{canvas:t=Zu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:h=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:o=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:f=ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=f,p=new Set([zo,Bo,ko]),m=new Set([ln,zn,Os,ks,Fo,Uo]),T=new Uint32Array(4),A=new Int32Array(4),v=new L,M=null,E=null,R=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,S=!1,I=null,k=null,D=null,V=null;this._outputColorSpace=Ot;let Z=0,N=0,ie=null,G=-1,K=null,B=new St,Q=new St,ae=null,ke=new We(0),le=0,Fe=t.width,q=t.height,z=1,oe=null,Se=null,te=new St(0,0,Fe,q),Pe=new St(0,0,Fe,q),Ye=!1,Ie=new Ls,Ke=!1,it=!1,je=new st,bt=new L,Ft=new St,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Ct(){return ie===null?z:1}let O=i;function Xt(b,F){return t.getContext(b,F)}let ct,C,x,H,$,J,he,ce,j,ne,ue,Le,me,de,De,Ue,Xe,U,fe,ee,pe,ve,re;try{let b={alpha:!0,depth:s,stencil:r,antialias:h,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),O===null){let F="webgl2";if(O=Xt(F,b),O===null)throw Xt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(b){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),Be("WebGLRenderer: "+b.message),b}function Ne(){ct=new r0(O),ct.init(),pe=new Xy(O,ct),C=new Zg(O,ct,e,pe),x=new Gy(O,ct),C.reversedDepthBuffer&&c&&x.buffers.depth.setReversed(!0),k=O.createFramebuffer(),D=O.createFramebuffer(),V=O.createFramebuffer(),H=new l0(O),$=new Ry,J=new Wy(O,ct,x,$,C,pe,H),he=new s0(P),ce=new cp(O),ve=new $g(O,ce),j=new a0(O,ce,H,ve),ne=new c0(O,j,ce,ve,H),U=new h0(O,C,J),De=new Jg($),ue=new Cy(P,he,ct,C,ve,De),Le=new Zy(P,$),me=new Iy,de=new Oy(ct),Xe=new qg(P,he,x,ne,g,l),Ue=new Vy(P,ne,C),re=new Jy(O,H,C,x),fe=new Yg(O,ct,H),ee=new o0(O,ct,H),H.programs=ue.programs,P.capabilities=C,P.extensions=ct,P.properties=$,P.renderLists=me,P.shadowMap=Ue,P.state=x,P.info=H}_!==ln&&(w=new d0(_,t.width,t.height,h,s,r));let Ae=new lc(P,O);this.xr=Ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(Fe,q,!1))},this.getSize=function(b){return b.set(Fe,q)},this.setSize=function(b,F,Y=!0){if(Ae.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=b,q=F,t.width=Math.floor(b*z),t.height=Math.floor(F*z),Y===!0&&(t.style.width=b+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Fe*z,q*z).floor()},this.setDrawingBufferSize=function(b,F,Y){Fe=b,q=F,z=Y,t.width=Math.floor(b*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(_===ln){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,F,Y,W){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,F,Y,W),x.viewport(B.copy(te).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(Pe)},this.setScissor=function(b,F,Y,W){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,F,Y,W),x.scissor(Q.copy(Pe).multiplyScalar(z).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){x.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){oe=b},this.setTransparentSort=function(b){Se=b},this.getClearColor=function(b){return b.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,Y=!0){let W=0;if(b){let X=!1;if(ie!==null){let _e=ie.texture.format;X=p.has(_e)}if(X){let _e=ie.texture.type,Me=m.has(_e),xe=Xe.getClearColor(),Ee=Xe.getClearAlpha(),Re=xe.r,qe=xe.g,Je=xe.b;Me?(T[0]=Re,T[1]=qe,T[2]=Je,T[3]=Ee,O.clearBufferuiv(O.COLOR,0,T)):(A[0]=Re,A[1]=qe,A[2]=Je,A[3]=Ee,O.clearBufferiv(O.COLOR,0,A))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),Xe.dispose(),me.dispose(),de.dispose(),$.dispose(),he.dispose(),ne.dispose(),ve.dispose(),re.dispose(),ue.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Ic),Ae.removeEventListener("sessionend",Lc),ki.stop()};function mt(b){b.preventDefault(),yr("WebGLRenderer: Context Lost."),S=!0}function rt(){yr("WebGLRenderer: Context Restored."),S=!1;let b=H.autoReset,F=Ue.enabled,Y=Ue.autoUpdate,W=Ue.needsUpdate,X=Ue.type;Ne(),H.autoReset=b,Ue.enabled=F,Ue.autoUpdate=Y,Ue.needsUpdate=W,Ue.type=X}function Dn(b){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Gn(b){let F=b.target;F.removeEventListener("dispose",Gn),bf(F)}function bf(b){Sf(b),$.remove(b)}function Sf(b){let F=$.get(b).programs;F!==void 0&&(F.forEach(function(Y){ue.releaseProgram(Y)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,Y,W,X,_e){F===null&&(F=rn);let Me=X.isMesh&&X.matrixWorld.determinantAffine()<0,xe=Ef(b,F,Y,W,X);x.setMaterial(W,Me);let Ee=Y.index,Re=1;if(W.wireframe===!0){if(Ee=j.getWireframeAttribute(Y),Ee===void 0)return;Re=2}let qe=Y.drawRange,Je=Y.attributes.position,we=qe.start*Re,at=(qe.start+qe.count)*Re;_e!==null&&(we=Math.max(we,_e.start*Re),at=Math.min(at,(_e.start+_e.count)*Re)),Ee!==null?(we=Math.max(we,0),at=Math.min(at,Ee.count)):Je!=null&&(we=Math.max(we,0),at=Math.min(at,Je.count));let Rt=at-we;if(Rt<0||Rt===1/0)return;ve.setup(X,W,xe,Y,Ee);let _t,pt=fe;if(Ee!==null&&(_t=ce.get(Ee),pt=ee,pt.setIndex(_t)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*Ct()),pt.setMode(O.LINES)):pt.setMode(O.TRIANGLES);else if(X.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),x.setLineWidth(qt*Ct()),X.isLineSegments?pt.setMode(O.LINES):X.isLineLoop?pt.setMode(O.LINE_LOOP):pt.setMode(O.LINE_STRIP)}else X.isPoints?pt.setMode(O.POINTS):X.isSprite&&pt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qt=X._multiDrawStarts,be=X._multiDrawCounts,en=X._multiDrawCount,tt=Ee?ce.get(Ee).bytesPerElement:1,bn=$.get(W).currentProgram.getUniforms();for(let Wn=0;Wn<en;Wn++)bn.setValue(O,"_gl_DrawID",Wn),pt.render(qt[Wn]/tt,be[Wn])}else if(X.isInstancedMesh)pt.renderInstances(we,Rt,X.count);else if(Y.isInstancedBufferGeometry){let qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,be=Math.min(Y.instanceCount,qt);pt.renderInstances(we,Rt,be)}else pt.render(we,Rt)};function Pc(b,F,Y,W){I!==null&&b.isNodeMaterial&&I.setObject(W,b),Ke===!0&&De.setState(b,Y,!1),b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,ma(b,F,W),b.side=Pi,b.needsUpdate=!0,ma(b,F,W),b.side=Tn):ma(b,F,W)}this.compile=function(b,F,Y=null){Y===null&&(Y=b),I!==null&&I.renderStart(b,F,Y),E=de.get(Y),E.init(F),y.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),it=this.localClippingEnabled,Ke=De.init(this.clippingPlanes,it),Ke===!0&&De.setGlobalState(this.clippingPlanes,F),I!==null&&Ue.render(E.state.shadowsArray,Y,F);let W=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _e=X.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){let xe=_e[Me];Pc(xe,Y,F,X),W.add(xe)}else Pc(_e,Y,F,X),W.add(_e)}),E=y.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(b,F,Y=null){let W=this.compile(b,F,Y);return new Promise(X=>{function _e(){if(W.forEach(function(Me){let Ee=$.get(Me).currentProgram;(Ee===void 0||Ee.isReady())&&W.delete(Me)}),W.size===0){X(b);return}setTimeout(_e,10)}ct.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let zl=null;function Mf(b){zl&&zl(b)}function Ic(){ki.stop()}function Lc(){ki.start()}let ki=new Ed;ki.setAnimationLoop(Mf),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){zl=b,Ae.setAnimationLoop(b),b===null?ki.stop():ki.start()},Ae.addEventListener("sessionstart",Ic),Ae.addEventListener("sessionend",Lc),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;I!==null&&I.renderStart(b,F);let Y=Ae.enabled===!0&&Ae.isPresenting===!0,W=w!==null&&(ie===null||Y)&&w.begin(P,ie);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(F),F=Ae.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,F,ie),E=de.get(b,y.length),E.init(F),E.state.textureUnits=J.getTextureUnits(),y.push(E),je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(je,On,F.reversedDepth),it=this.localClippingEnabled,Ke=De.init(this.clippingPlanes,it),M=me.get(b,R.length),M.init(),R.push(M),Ae.enabled===!0&&Ae.isPresenting===!0){let Me=P.xr.getDepthSensingMesh();Me!==null&&Hl(Me,F,-1/0,P.sortObjects)}Hl(b,F,0,P.sortObjects),M.finish(),I!==null&&I.updateLights(E.state.lightsArray),P.sortObjects===!0&&M.sort(oe,Se),Et=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Et&&Xe.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&De.beginShadows();let X=E.state.shadowsArray;if(Ue.render(X,b,F),Ke===!0&&De.endShadows(),(W&&w.hasRenderPass())===!1){let Me=M.opaque,xe=M.transmissive;if(E.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(xe.length>0)for(let Re=0,qe=Ee.length;Re<qe;Re++){let Je=Ee[Re];Nc(Me,xe,b,Je)}Et&&Xe.render(b);for(let Re=0,qe=Ee.length;Re<qe;Re++){let Je=Ee[Re];Dc(M,b,Je,Je.viewport)}}else xe.length>0&&Nc(Me,xe,b,F),Et&&Xe.render(b),Dc(M,b,F)}ie!==null&&N===0&&(J.updateMultisampleRenderTarget(ie),J.updateRenderTargetMipmap(ie)),W&&w.end(P),b.isScene===!0&&b.onAfterRender(P,b,F),ve.resetDefaultState(),G=-1,K=null,y.pop(),y.length>0?(E=y[y.length-1],J.setTextureUnits(E.state.textureUnits),Ke===!0&&De.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,I!==null&&I.renderEnd()};function Hl(b,F,Y,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ie)){W&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(je);let Me=ne.update(b),xe=b.material;xe.visible&&M.push(b,Me,xe,Y,Ft.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ie))){let Me=ne.update(b),xe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ft.copy(Me.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(je)),Array.isArray(xe)){let Ee=Me.groups;for(let Re=0,qe=Ee.length;Re<qe;Re++){let Je=Ee[Re],we=xe[Je.materialIndex];we&&we.visible&&M.push(b,Me,we,Y,Ft.z,Je,F)}}else xe.visible&&M.push(b,Me,xe,Y,Ft.z,null,F)}}let _e=b.children;for(let Me=0,xe=_e.length;Me<xe;Me++)Hl(_e[Me],F,Y,W)}function Dc(b,F,Y,W){let{opaque:X,transmissive:_e,transparent:Me}=b;E.setupLightsView(Y),Ke===!0&&De.setGlobalState(P.clippingPlanes,Y),W&&x.viewport(B.copy(W)),X.length>0&&pa(X,F,Y),_e.length>0&&pa(_e,F,Y),Me.length>0&&pa(Me,F,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Nc(b,F,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let we=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new on(1,1,{generateMipmaps:!0,type:we?Hn:ln,minFilter:Li,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let _e=E.state.transmissionRenderTarget[W.id],Me=W.viewport||B;_e.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);let xe=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(ke),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),Et&&Xe.render(Y);let qe=P.toneMapping;P.toneMapping=Bn;let Je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Ke===!0&&De.setGlobalState(P.clippingPlanes,W),pa(b,Y,W),J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e),ct.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let at=0,Rt=F.length;at<Rt;at++){let _t=F[at],{object:pt,geometry:qt,material:be,group:en}=_t;if(be.side===Tn&&pt.layers.test(W.layers)){let tt=be.side;be.side=sn,be.needsUpdate=!0,Fc(pt,Y,W,qt,be,en),be.side=tt,be.needsUpdate=!0,we=!0}}we===!0&&(J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e))}P.setRenderTarget(xe,Ee,Re),P.setClearColor(ke,le),Je!==void 0&&(W.viewport=Je),P.toneMapping=qe}function pa(b,F,Y){let W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,_e=b.length;X<_e;X++){let Me=b[X],{object:xe,geometry:Ee,group:Re}=Me,qe=Me.material;qe.allowOverride===!0&&W!==null&&(qe=W),xe.layers.test(Y.layers)&&Fc(xe,F,Y,Ee,qe,Re)}}function Fc(b,F,Y,W,X,_e){I!==null&&X.isNodeMaterial&&I.setObject(b,X),b.onBeforeRender(P,F,Y,W,X,_e),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(P,F,Y,W,b,_e),X.transparent===!0&&X.side===Tn&&X.forceSinglePass===!1?(X.side=sn,X.needsUpdate=!0,P.renderBufferDirect(Y,F,W,X,b,_e),X.side=Pi,X.needsUpdate=!0,P.renderBufferDirect(Y,F,W,X,b,_e),X.side=Tn):P.renderBufferDirect(Y,F,W,X,b,_e),b.onAfterRender(P,F,Y,W,X,_e)}function ma(b,F,Y){F.isScene!==!0&&(F=rn);let W=$.get(b),X=E.state.lights,_e=E.state.shadowsArray,Me=X.state.version,xe=ue.getParameters(b,X.state,_e,F,Y,E.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(xe),Re=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=he.get(b.envMap||W.environment,qe),W.envMapRotation=W.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Gn),Re=new Map,W.programs=Re);let Je=Re.get(Ee);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===Me)return Oc(b,xe),Je}else xe.uniforms=ue.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,Y,xe),b.onBeforeCompile(xe,P),Je=ue.acquireProgram(xe,Ee),Re.set(Ee,Je),W.uniforms=xe.uniforms;let we=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=De.uniform),Oc(b,xe),W.needsLights=Af(b),W.lightsStateVersion=Me,W.needsLights&&(we.ambientLightColor.value=X.state.ambient,we.lightProbe.value=X.state.probe,we.sunLights.value=X.state.sun,we.sunLightShadows.value=X.state.sunShadow,we.directionalLights.value=X.state.directional,we.directionalLightShadows.value=X.state.directionalShadow,we.spotLights.value=X.state.spot,we.spotLightShadows.value=X.state.spotShadow,we.rectAreaLights.value=X.state.rectArea,we.ltc_1.value=X.state.rectAreaLTC1,we.ltc_2.value=X.state.rectAreaLTC2,we.pointLights.value=X.state.point,we.pointLightShadows.value=X.state.pointShadow,we.hemisphereLights.value=X.state.hemi,we.sunShadowMatrix.value=X.state.sunShadowMatrix,we.sunShadowCascade.value=X.state.sunShadowCascade,we.directionalShadowMatrix.value=X.state.directionalShadowMatrix,we.spotLightMatrix.value=X.state.spotLightMatrix,we.spotLightMap.value=X.state.spotLightMap,we.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=Je,W.uniformsList=null,Je}function Uc(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Hs.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Oc(b,F){let Y=$.get(b);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Tf(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let Y=0,W=b.length;Y<W;Y++){let X=b[Y];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function Ef(b,F,Y,W,X){F.isScene!==!0&&(F=rn),J.resetTextureUnits();let _e=F.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,xe=ie===null?P.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qe.workingColorSpace,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Re=he.get(W.envMap||Me,Ee),qe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,Rt=!!Y.morphAttributes.color,_t=Bn;W.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(_t=P.toneMapping);let pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,qt=pt!==void 0?pt.length:0,be=$.get(W),en=E.state.lights;if(Ke===!0&&(it===!0||b!==K)){let gt=b===K&&W.id===G;De.setState(W,b,gt)}let tt=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==en.state.version||be.outputColorSpace!==xe||X.isBatchedMesh&&be.batching===!1||!X.isBatchedMesh&&be.batching===!0||X.isBatchedMesh&&be.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&be.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&be.instancing===!1||!X.isInstancedMesh&&be.instancing===!0||X.isSkinnedMesh&&be.skinning===!1||!X.isSkinnedMesh&&be.skinning===!0||X.isInstancedMesh&&be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&be.instancingMorph===!1&&X.morphTexture!==null||be.envMap!==Re||W.fog===!0&&be.fog!==_e||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==De.numPlanes||be.numIntersection!==De.numIntersection)||be.vertexAlphas!==qe||be.vertexTangents!==Je||be.morphTargets!==we||be.morphNormals!==at||be.morphColors!==Rt||be.toneMapping!==_t||be.morphTargetsCount!==qt||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,be.__version=W.version);let bn=be.currentProgram;tt===!0&&(bn=ma(W,F,X),I&&W.isNodeMaterial&&I.onUpdateProgram(W,bn,be));let Wn=!1,pi=!1,ns=!1,ut=bn.getUniforms(),At=be.uniforms;if(x.useProgram(bn.program)&&(Wn=!0,pi=!0,ns=!0),W.id!==G&&(G=W.id,pi=!0),be.needsLights){let gt=Tf(E.state.lightProbeGridArray,X);be.lightProbeGrid!==gt&&(be.lightProbeGrid=gt,pi=!0)}if(Wn||K!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(O,"projectionMatrix",b.projectionMatrix),ut.setValue(O,"viewMatrix",b.matrixWorldInverse);let gi=ut.map.cameraPosition;gi!==void 0&&gi.setValue(O,bt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&ut.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,pi=!0,ns=!0)}if(be.needsLights&&(en.state.sunShadowMap.length>0&&ut.setValue(O,"sunShadowMap",en.state.sunShadowMap,J),en.state.directionalShadowMap.length>0&&ut.setValue(O,"directionalShadowMap",en.state.directionalShadowMap,J),en.state.spotShadowMap.length>0&&ut.setValue(O,"spotShadowMap",en.state.spotShadowMap,J),en.state.pointShadowMap.length>0&&ut.setValue(O,"pointShadowMap",en.state.pointShadowMap,J)),X.isSkinnedMesh){ut.setOptional(O,X,"bindMatrix"),ut.setOptional(O,X,"bindMatrixInverse");let gt=X.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ut.setValue(O,"boneTexture",gt.boneTexture,J))}X.isBatchedMesh&&(ut.setOptional(O,X,"batchingTexture"),ut.setValue(O,"batchingTexture",X._matricesTexture,J),ut.setOptional(O,X,"batchingIdTexture"),ut.setValue(O,"batchingIdTexture",X._indirectTexture,J),ut.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&ut.setValue(O,"batchingColorTexture",X._colorsTexture,J));let mi=Y.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&U.update(X,Y,bn),(pi||be.receiveShadow!==X.receiveShadow)&&(be.receiveShadow=X.receiveShadow,ut.setValue(O,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(At.envMapIntensity.value=F.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=jy()),pi){if(ut.setValue(O,"toneMappingExposure",P.toneMappingExposure),be.needsLights&&wf(At,ns),_e&&W.fog===!0&&Le.refreshFogUniforms(At,_e),Le.refreshMaterialUniforms(At,W,z,q,E.state.transmissionRenderTarget[b.id]),be.needsLights&&be.lightProbeGrid){let gt=be.lightProbeGrid;At.probesSH.value=gt.texture,At.probesMin.value.copy(gt.boundingBox.min),At.probesMax.value.copy(gt.boundingBox.max),At.probesResolution.value.copy(gt.resolution)}Hs.upload(O,Uc(be),At,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Hs.upload(O,Uc(be),At,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(O,"center",X.center),ut.setValue(O,"modelViewMatrix",X.modelViewMatrix),ut.setValue(O,"normalMatrix",X.normalMatrix),ut.setValue(O,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let gt=W.uniformsGroups;for(let gi=0,is=gt.length;gi<is;gi++){let Bc=gt[gi];re.update(Bc,bn),re.bind(Bc,bn)}}return bn}function wf(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Af(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(b,F,Y){let W=$.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=F,$.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let Y=$.get(b);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,Y=0){ie=b,Z=F,N=Y;let W=null,X=!1,_e=!1;if(b){let xe=$.get(b);if(xe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,xe.__webglFramebuffer),B.copy(b.viewport),Q.copy(b.scissor),ae=b.scissorTest,x.viewport(B),x.scissor(Q),x.setScissorTest(ae),G=-1;return}else if(xe.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(xe.__hasExternalTextures)J.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let qe=b.depthTexture;if(xe.__boundDepthTexture!==qe){if(qe!==null&&$.has(qe)&&(b.width!==qe.image.width||b.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);let Re=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?W=Re[F][Y]:W=Re[F],X=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?W=$.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[Y]:W=Re,B.copy(b.viewport),Q.copy(b.scissor),ae=b.scissorTest}else B.copy(te).multiplyScalar(z).floor(),Q.copy(Pe).multiplyScalar(z).floor(),ae=Ye;if(Y!==0&&(W=k),x.bindFramebuffer(O.FRAMEBUFFER,W)&&x.drawBuffers(b,W),x.viewport(B),x.scissor(Q),x.setScissorTest(ae),X){let xe=$.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,Y)}else if(_e){let xe=F;for(let Ee=0;Ee<b.textures.length;Ee++){let Re=$.get(b.textures[Ee]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,Y,xe)}}else if(b!==null&&Y!==0){let xe=$.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,Y)}G=-1};function kc(b){let F=$.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=C.textureFormatReadable(b.format),F.__typeReadable=C.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,Y,W,X,_e,Me,xe=0){if(!(b&&b.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){x.bindFramebuffer(O.FRAMEBUFFER,Ee);try{let Re=b.textures[xe],qe=Re.format,Je=Re.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let we=kc(Re);if(we.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&Y>=0&&Y<=b.height-X&&O.readPixels(F,Y,W,X,pe.convert(qe),pe.convert(Je),_e)}finally{let Re=ie!==null?$.get(ie).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,F,Y,W,X,_e,Me,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(F>=0&&F<=b.width-W&&Y>=0&&Y<=b.height-X){x.bindFramebuffer(O.FRAMEBUFFER,Ee);let Re=b.textures[xe],qe=Re.format,Je=Re.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let we=kc(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),O.readPixels(F,Y,W,X,pe.convert(qe),pe.convert(Je),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Rt=ie!==null?$.get(ie).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Rt);let _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ku(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(at),O.deleteSync(_t),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,Y=0){let W=Math.pow(2,-Y),X=Math.floor(b.image.width*W),_e=Math.floor(b.image.height*W),Me=F!==null?F.x:0,xe=F!==null?F.y:0;J.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Me,xe,X,_e),x.unbindTexture()},this.copyTextureToTexture=function(b,F,Y=null,W=null,X=0,_e=0){let Me,xe,Ee,Re,qe,Je,we,at,Rt,_t=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(Y!==null)Me=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,qe=Y.min.y,Je=Y.isBox3?Y.min.z:0;else{let At=Math.pow(2,-X);Me=Math.floor(_t.width*At),xe=Math.floor(_t.height*At),b.isDataArrayTexture?Ee=_t.depth:b.isData3DTexture?Ee=Math.floor(_t.depth*At):Ee=1,Re=0,qe=0,Je=0}W!==null?(we=W.x,at=W.y,Rt=W.z):(we=0,at=0,Rt=0);let pt=pe.convert(F.format),qt=pe.convert(F.type),be;F.isData3DTexture?(J.setTexture3D(F,0),be=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),be=O.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),be=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let en=x.getParameter(O.UNPACK_ROW_LENGTH),tt=x.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=x.getParameter(O.UNPACK_SKIP_PIXELS),Wn=x.getParameter(O.UNPACK_SKIP_ROWS),pi=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(O.UNPACK_SKIP_ROWS,qe),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Je);let ns=b.isDataArrayTexture||b.isData3DTexture,ut=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let At=$.get(b),mi=$.get(F),gt=$.get(At.__renderTarget),gi=$.get(mi.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,gt.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let is=0;is<Ee;is++)ns&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(b).__webglTexture,X,Je+is),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(F).__webglTexture,_e,Rt+is)),O.blitFramebuffer(Re,qe,Me,xe,we,at,Me,xe,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||$.has(b)){let At=$.get(b),mi=$.get(F);x.bindFramebuffer(O.READ_FRAMEBUFFER,D),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let gt=0;gt<Ee;gt++)ns?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,X,Je+gt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,X),ut?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mi.__webglTexture,_e,Rt+gt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mi.__webglTexture,_e),X!==0?O.blitFramebuffer(Re,qe,Me,xe,we,at,Me,xe,O.COLOR_BUFFER_BIT,O.NEAREST):ut?O.copyTexSubImage3D(be,_e,we,at,Rt+gt,Re,qe,Me,xe):O.copyTexSubImage2D(be,_e,we,at,Re,qe,Me,xe);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ut?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(be,_e,we,at,Rt,Me,xe,Ee,pt,qt,_t.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(be,_e,we,at,Rt,Me,xe,Ee,pt,_t.data):O.texSubImage3D(be,_e,we,at,Rt,Me,xe,Ee,pt,qt,_t):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,we,at,Me,xe,pt,qt,_t.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,we,at,_t.width,_t.height,pt,_t.data):O.texSubImage2D(O.TEXTURE_2D,_e,we,at,Me,xe,pt,qt,_t);x.pixelStorei(O.UNPACK_ROW_LENGTH,en),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),x.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),x.pixelStorei(O.UNPACK_SKIP_ROWS,Wn),x.pixelStorei(O.UNPACK_SKIP_IMAGES,pi),_e===0&&F.generateMipmaps&&O.generateMipmap(be),x.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){Z=0,N=0,ie=null,x.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var Qy=[{name:"Morning Arrival",len:30,kind:"arrive",tint:[255,200,140,.16]},{name:"Period 1",len:60,kind:"class",swap:!1,tint:[255,255,255,0]},{name:"Lunch",len:30,kind:"lunch",tint:[255,236,170,.12]},{name:"Period 2",len:60,kind:"class",swap:!0,tint:[255,235,215,.07]},{name:"Dismissal",len:30,kind:"dismiss",tint:[255,130,80,.24]}],Vn=(()=>{let n=0;return Qy.map(e=>{let t={...e,start:n};return n+=e.len,t})})(),cc=Vn.reduce((n,e)=>n+e.len,0),uc=7*60+30,Ld=n=>{for(let e=Vn.length-1;e>=0;e--)if(n>=Vn[e].start)return e;return 0},Al=n=>{let e=uc+Math.floor(n),t=Math.floor(e/60)%24,i=e%60;return`${(t+11)%12+1}:${String(i).padStart(2,"0")} ${t<12?"AM":"PM"}`},Fi=(n,e)=>n+Math.random()*(e-n),dc=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n};function Gs(n,e,t,i,s){let r=n.length,a=n[0].length,h=(f,g)=>f>=0&&g>=0&&f<a&&g<r&&n[g][f]===".";if(e===i&&t===s||!h(i,s))return[];let l=(f,g)=>g*a+f,o=new Map([[l(e,t),0]]),u=new Map,d=[{x:e,y:t,f:0}],c=new Set;for(;d.length;){let f=0;for(let p=1;p<d.length;p++)d[p].f<d[f].f&&(f=p);let g=d.splice(f,1)[0],_=l(g.x,g.y);if(!c.has(_)){if(c.add(_),g.x===i&&g.y===s){let p=[],m=_;for(;m!==l(e,t);)p.push({x:m%a,y:Math.floor(m/a)}),m=u.get(m);return p.reverse()}for(let[p,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let T=g.x+p,A=g.y+m;if(!h(T,A))continue;let v=l(T,A),M=o.get(_)+1;o.has(v)&&o.get(v)<=M||(o.set(v,M),u.set(v,_),d.push({x:T,y:A,f:M+Math.abs(T-i)+Math.abs(A-s)}))}}}return[]}var Xs="#6b4a4f";function wt(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function se(n,e,t=1.4){n.fillStyle=e,n.fill(),t&&(n.lineWidth=t,n.strokeStyle=Xs,n.lineJoin="round",n.stroke())}function An(n,e,t,i,s,r,a){n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.strokeStyle=Xs,n.lineWidth=r+2.2,n.stroke(),n.strokeStyle=a,n.lineWidth=r,n.stroke()}var ex=["#5b6b8c","#7a6a58","#4f5d75","#8a5f6a","#5f7a68"];function Ve(n,e){if(!n||n[0]!=="#"||n.length<7)return n;let t=parseInt(n.slice(1,7),16),i=e>0?0:255,s=Math.abs(e);return"#"+[t>>16&255,t>>8&255,t&255].map(r=>Math.round(r+(i-r)*s).toString(16).padStart(2,"0")).join("")}function tx(n,e,t,i,s){n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.7,t-i*1.2,e,t-i*.35),n.bezierCurveTo(e+i*.7,t-i*1.2,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()}function nx(n,e,t,i,s){n.fillStyle=s,n.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,h=r&1?i*.45:i;n.lineTo(e+Math.cos(a)*h,t+Math.sin(a)*h)}n.closePath(),n.fill()}function qs(n,e,t,i,s){if(i.age==="adult"&&!i.legacyAdult)return ax(n,e,t,i,s);n.save(),n.translate(Math.round(e*2)/2,Math.round(t*2)/2);let r=i.moving,a=r?Math.sin(i.walk):0,h=i.dir,l=h==="left"||h==="right",o=h==="left"?-1:1,u=h==="up",d=i.sitting,c=i.age==="adult",f=i.top,g=i.bottom||"pants",_=(i.headSize||1)*1,p=(i.build==="slim"?.9:i.build==="sturdy"?1.12:1)*(c?1.12:1),m=c?1.28:1;n.fillStyle="rgba(70,45,55,.24)",n.beginPath(),n.ellipse(0,1,10*p,3.6,0,0,7),n.fill(),d&&n.translate(0,8),n.translate(0,r?-Math.abs(Math.cos(i.walk))*1.8:Math.sin(s*2+i.id)*.35),c&&n.scale(1,m);let T=i.pants||ex[i.id%5],A=i.pack||["#f28f7e","#4f91c7","#eab94e","#88b89a","#b8a8da"][i.id%5],v=i.shoes||"#fbf6ee",M=i.packStyle||"pack",E=f==="tank"?i.skin:i.shirt,R=i.shirt2||"#fff6ea";d||[-1,1].forEach(B=>{let Q=r?Math.max(0,B*a)*2.6:0,ae=l?0:B*3.2*p,ke=l?B*a*4.2:B*3.2*p;g==="shorts"?(An(n,ae,-9,ke,-2-Q,3.4,i.skin),An(n,ae,-9,ae+(ke-ae)*.38,-6-Q*.38,3.9,T)):g==="skirt"?An(n,ae,-9,ke,-2-Q,3.2,i.skin):An(n,ae,-9,ke,-2-Q,g==="joggers"?4.2:3.6,T);let le=ke+(l?o*1.2:0),Fe=-.6-Q;i.shoeStyle==="boot"?(wt(n,le-2.6,Fe-3.6,5.2,4.6,1.6),se(n,v,1.1),n.beginPath(),n.ellipse(le+(l?o*1.2:0),Fe+.6,3.6,1.7,0,0,7),se(n,Ve(v,.25),1.1)):i.shoeStyle==="sandal"?(n.beginPath(),n.ellipse(le,Fe,3.4,1.7,0,0,7),se(n,i.skin,1.1),n.strokeStyle=v,n.lineWidth=1.2,n.beginPath(),n.moveTo(le-2.2,Fe-.3),n.lineTo(le+2.2,Fe-.3),n.stroke()):(n.beginPath(),n.ellipse(le,Fe,3.4,1.9,0,0,7),se(n,v,1.1),i.shoeStyle==="sneaker"&&(n.fillStyle="rgba(255,255,255,.55)",n.fillRect(le-3,Fe+.5,6,.7)))}),g==="skirt"&&!d&&(n.beginPath(),n.moveTo(-6.8*p,-12),n.lineTo(6.8*p,-12),n.lineTo(9.6*p,-5.6),n.lineTo(-9.6*p,-5.6),n.closePath(),se(n,T,1.3),n.fillStyle="rgba(255,255,255,.22)",n.fillRect(-8.2*p,-7.4,16.4*p,1));let y=(B,Q)=>{let ae=l?B*a*3.5:B*8.2,ke=-9.5-(r?-B*a*1.5:0),le=i.arms&&(B>0?i.arms.R:i.arms.L);le&&(ae=l?o*Math.abs(le[0])*.9:le[0],ke=le[1]),An(n,l?0:B*6.6*p,-17,ae,ke,3.2,E),n.beginPath(),n.arc(ae,ke+.6,1.9,0,7),se(n,i.skin,1)};l&&y(-o*-1,!1),l&&M==="pack"?(wt(n,-o*9.5,-19,7,10,3),se(n,A,1.2)):l&&M==="mini"&&(wt(n,-o*8,-16,5,6.5,2.4),se(n,A,1.1)),f==="hoodie"&&(n.beginPath(),n.ellipse(0,-19.6,6.4*p,3.2,0,0,7),se(n,Ve(i.shirt,.14),1.2));let w=()=>{f==="dress"?(n.beginPath(),n.moveTo(-6.4*p,-19.5),n.quadraticCurveTo(0,-21,6.4*p,-19.5),n.lineTo(7*p,-13),n.lineTo(9.6*p,-6),n.quadraticCurveTo(0,-4.4,-9.6*p,-6),n.lineTo(-7*p,-13),n.closePath()):f==="tank"?wt(n,-5.6*p,-19.5,11.2*p,11.5,4):wt(n,-6.6*p,-19.5,13.2*p,11.5,4.5)},P=f==="overalls"||f==="vest"?R:i.shirt;if(w(),se(n,P,1.4),i.pattern&&i.pattern!=="solid"&&f!=="overalls"&&f!=="vest"){let B=i.shirt2||Ve(i.shirt,.3);if(n.save(),w(),n.clip(),i.pattern==="stripes")for(let Q=-20;Q<-4;Q+=3.6)n.fillStyle=B,n.fillRect(-11,Q,22,1.7);else if(i.pattern==="dots")for(let Q=-19;Q<-4;Q+=3.2)for(let ae=-9+(Q*3&1)*1.6;ae<10;ae+=3.2)n.fillStyle=B,n.beginPath(),n.arc(ae,Q,.85,0,7),n.fill();else if(i.pattern==="plaid"){n.strokeStyle=B,n.globalAlpha=.75,n.lineWidth=1;for(let Q=-19;Q<-4;Q+=3.6)n.beginPath(),n.moveTo(-11,Q),n.lineTo(11,Q),n.stroke();for(let Q=-9;Q<10;Q+=3.6)n.beginPath(),n.moveTo(Q,-21),n.lineTo(Q,-4),n.stroke();n.globalAlpha=1}else if(i.pattern==="hearts")for(let Q=-17;Q<-5;Q+=4.2)for(let ae=-7+(Q*2&1)*2;ae<8;ae+=4.4)tx(n,ae,Q,1.1,B);else if(i.pattern==="stars")for(let Q=-17;Q<-5;Q+=4.2)for(let ae=-7+(Q*2&1)*2;ae<8;ae+=4.4)nx(n,ae,Q,1.4,B);n.restore(),w(),n.lineWidth=1.4,n.strokeStyle=Xs,n.stroke()}if(n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.ellipse(-2.4,-16.5,2.4,3.4,0,0,7),n.fill(),f)u||(f==="hoodie"?(wt(n,-3.8,-14,7.6,3.6,1.6),n.lineWidth=1,n.strokeStyle=Ve(i.shirt,.3),n.stroke(),An(n,-1.6,-18.6,-1.6,-14.8,.8,R),An(n,1.6,-18.6,1.6,-14.8,.8,R)):f==="sweater"?(n.fillStyle=Ve(i.shirt,-.28),n.fillRect(-6.4*p,-10.6,12.8*p,2),n.beginPath(),n.ellipse(0,-19.3,3.6,1.5,0,0,7),se(n,Ve(i.shirt,-.28),1)):f==="jersey"?(n.fillStyle=i.shirt2||"#fff",n.font="800 6.4px 'Trebuchet MS',sans-serif",n.textAlign="center",n.fillText(String(i.num??i.id%90+1),0,-11.8),n.fillRect(-6.4*p,-19.4,12.8*p,.9)):f==="blazer"?(n.beginPath(),n.moveTo(-3.4,-19.4),n.lineTo(0,-12.4),n.lineTo(3.4,-19.4),n.closePath(),se(n,R,.9),n.beginPath(),n.moveTo(-3.4,-19.4),n.lineTo(-.4,-11.8),n.lineTo(-5.6,-11),n.lineTo(-6.4,-17.6),n.closePath(),se(n,Ve(i.shirt,.16),.9),n.beginPath(),n.moveTo(3.4,-19.4),n.lineTo(.4,-11.8),n.lineTo(5.6,-11),n.lineTo(6.4,-17.6),n.closePath(),se(n,Ve(i.shirt,.16),.9),n.fillStyle="#EAB94E",n.beginPath(),n.arc(0,-10.4,.7,0,7),n.fill()):f==="overalls"?(wt(n,-4,-16.4,8,6.8,1.6),se(n,i.shirt,1.1),An(n,-3.4,-19.4,-3.2,-16.2,1.2,i.shirt),An(n,3.4,-19.4,3.2,-16.2,1.2,i.shirt),n.fillStyle="#EAB94E",[-3.2,3.2].forEach(B=>{n.beginPath(),n.arc(B,-16.2,.7,0,7),n.fill()}),wt(n,-2,-14.4,4,2.4,.8),n.lineWidth=.8,n.strokeStyle=Ve(i.shirt,.3),n.stroke()):f==="vest"?(n.beginPath(),n.moveTo(-6.6*p,-19.4),n.lineTo(-1.2,-19.4),n.lineTo(-.6,-9.4),n.lineTo(-6.2*p,-9.4),n.closePath(),se(n,i.shirt,1),n.beginPath(),n.moveTo(6.6*p,-19.4),n.lineTo(1.2,-19.4),n.lineTo(.6,-9.4),n.lineTo(6.2*p,-9.4),n.closePath(),se(n,i.shirt,1)):f==="tee"?(n.beginPath(),n.ellipse(0,-19.3,3.2,1.3,0,0,7),se(n,Ve(i.shirt,.12),.9)):f==="dress"&&(n.fillStyle=Ve(i.shirt,-.35),n.fillRect(-6.4*p,-13.2,13.2*p,1.2)));else{let B=i.id%3;B===0?(n.fillStyle="rgba(255,255,255,.45)",n.fillRect(-6,-15.4,12,2.4)):B===2&&!u&&(n.fillStyle="#fff",n.beginPath(),n.moveTo(-3,-19.4),n.lineTo(0,-16),n.lineTo(3,-19.4),n.closePath(),se(n,"#fff",.9))}u?M!=="none"&&(wt(n,-6,-19,12,10.5,4),se(n,A,1.3),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(-4,-17.5,8,2)):!l&&M==="pack"?(An(n,-3.6,-19.2,-3.6,-11,1.5,A),An(n,3.6,-19.2,3.6,-11,1.5,A)):!l&&M==="messenger"&&(An(n,-5.6,-19.2,5.2,-9.8,1.5,A),wt(n,3.2,-12.6,5.6,5,1.6),se(n,A,1.1)),i.scarf&&(n.beginPath(),n.ellipse(0,-19.4,6.6*p,2.4,0,0,7),se(n,i.scarf,1.2),!u&&!l&&(wt(n,1.6,-19,3.2,8,1.4),se(n,i.scarf,1.1),n.fillStyle="rgba(255,255,255,.4)",n.fillRect(1.9,-15.6,2.6,.9))),i.tag&&(n.beginPath(),n.moveTo(-6,-19.5),n.lineTo(-1,-8.5),n.lineTo(-6.6,-9),n.closePath(),n.fillStyle="#c4463c",n.fill(),n.beginPath(),n.moveTo(6,-19.5),n.lineTo(1,-8.5),n.lineTo(6.6,-9),n.closePath(),n.fill()),i.badge&&!u&&!l&&(n.beginPath(),n.arc(-3.8,-15.4,1.5,0,7),se(n,i.badge,.9)),l?y(o*1,!0):(y(-1),y(1)),c&&n.scale(1,1/m),n.save(),c&&(n.translate(0,-8.4+0),n.scale(.82,.82)),n.translate((i.turn||0)*1.7,0);let S=-28,I=i.hair,k=i.style,D=i.hair2||Ve(I,-.28),V=(c?8.1:8.9)*_,Z=(c?9.2:8.3)*_;if((k==="long"||k==="bob")&&(wt(n,-9.8,S-6,19.6,k==="long"?20:14,7),se(n,I,1.3)),k==="wavy"&&(wt(n,-10.2,S-6,20.4,18,7),se(n,I,1.3),[-7,0,7].forEach(B=>{n.beginPath(),n.arc(B,S+12,3.6,0,7),se(n,I,1.1)})),k==="afro"&&(n.beginPath(),n.ellipse(l?-o*1.2:0,S-3,13.2,12.6,0,0,7),se(n,I,1.4)),k==="bun"&&(n.beginPath(),n.arc(l?-o*3:0,S-9.5,4.4,0,7),se(n,I,1.3)),k==="topknot"&&(n.beginPath(),n.arc(l?-o*2:0,S-12,3.4,0,7),se(n,I,1.3)),k==="twinbuns"&&(l?[-o*3]:[-7.6,7.6]).forEach(B=>{n.beginPath(),n.arc(B,S-10.4,3.9,0,7),se(n,I,1.3)}),k==="pony"&&(n.save(),n.translate(l?-o*9:u?0:9,l?S+2:u?S+8:S+1),n.rotate(l||u?0:-.5),n.beginPath(),n.ellipse(0,4,3.2,6.5,0,0,7),se(n,I,1.3),n.restore()),k==="pigtails"&&(l?[-o*10]:[-10.6,10.6]).forEach((B,Q)=>{n.save(),n.translate(B,S+3),n.rotate(l?0:Q?-.4:.4),n.beginPath(),n.ellipse(0,5,2.9,6.6,0,0,7),se(n,I,1.3),n.restore()}),k==="braids"&&(l?[-o*8.4]:[-9.4,9.4]).forEach(B=>{for(let Q=0;Q<4;Q++)n.beginPath(),n.ellipse(B,S+4+Q*3.7,2.2,2.1,0,0,7),se(n,Q&1?D:I,1.1)}),k==="curly"&&[[-8,S-2],[8,S-2],[-6,S-8],[6,S-8],[0,S-10]].forEach(([B,Q])=>{n.beginPath(),n.arc(B,Q,4.6,0,7),se(n,I,1.2)}),l||[-1,1].forEach(B=>{n.beginPath(),n.arc(B*8.7,S+1,2,0,7),se(n,i.skin,1)}),n.beginPath(),n.ellipse(l?o*.6:0,S,V,Z,0,0,7),se(n,i.skin,1.5),n.fillStyle="rgba(120,70,60,.13)",n.beginPath(),n.ellipse(3,S+3,7.5,6,0,0,7),n.fill(),!u){let B=(s*.9+i.id*1.7)%4<.13,Q=l?[o*4.4]:[-3.5,3.5],ae=i.eyeShape||"round",ke=i.eyeColor,le=i.brow||"soft",Fe=i.browColor||i.hair;if(Q.forEach((te,Pe)=>{if(B||ae==="happy")n.strokeStyle="#3a2a30",n.lineWidth=1.1,n.beginPath(),ae==="happy"&&!B?n.arc(te,S+.6,1.7,Math.PI*1.1,Math.PI*1.9):(n.moveTo(te-1.6,S),n.lineTo(te+1.6,S)),n.stroke();else{let Ye=c?.74:1,Ie=(ae==="wide"?2.1:ae==="oval"?1.4:1.7)*Ye,Ke=(ae==="wide"||ae==="oval"?2.7:2.3)*(c?.82:1);if(n.fillStyle=ke||"#3a2a30",n.beginPath(),n.ellipse(te,S,Ie,Ke,0,0,7),n.fill(),ke&&(n.fillStyle="#2a1d22",n.beginPath(),n.ellipse(te,S+.2,Ie*.5,Ke*.55,0,0,7),n.fill()),n.fillStyle="#fff",n.beginPath(),n.arc(te-.5,S-.9,ae==="wide"?.9:.7,0,7),n.fill(),ae==="sleepy"&&(n.fillStyle=i.skin,n.beginPath(),n.ellipse(te,S-1.1,Ie+.5,Ke*.62,0,Math.PI,2*Math.PI),n.fill(),n.strokeStyle="#3a2a30",n.lineWidth=.9,n.beginPath(),n.moveTo(te-Ie-.4,S-.6),n.lineTo(te+Ie+.4,S-.6),n.stroke()),ae==="lash"){n.strokeStyle="#3a2a30",n.lineWidth=.8;let it=l?o:Pe?1:-1;n.beginPath(),n.moveTo(te+it*Ie,S-1),n.lineTo(te+it*(Ie+1.4),S-2.2),n.moveTo(te+it*Ie,S-.1),n.lineTo(te+it*(Ie+1.6),S-.6),n.stroke()}}if(le!=="none"){if(n.strokeStyle=Fe,n.lineCap="round",n.lineWidth=(le==="thick"?1.6:le==="thin"?.6:.9)+(c?.45:0),n.beginPath(),le==="arch")n.moveTo(te-2,S-3.2),n.quadraticCurveTo(te,S-5.2,te+2,S-3.6);else if(c){let Ye=l||Pe?1:-1;n.moveTo(te-2.2*Ye,S-3.5),n.lineTo(te+2.2*Ye,S-4.3)}else n.moveTo(te-2,S-3.6),n.lineTo(te+2,S-3.9);n.stroke()}if(i.glasses){let Ye=i.glasses===!0?"round":i.glasses,Ie=i.glassColor||"#5b4048";n.strokeStyle=Ie,n.lineWidth=Ye==="sun"?1:.9,n.beginPath(),Ye==="square"?n.roundRect(te-3.1,S-2.6,6.2,5.2,1.2):Ye==="cat"?(n.ellipse(te,S,3.2,2.7,0,0,7),n.moveTo(te+(l?o:Pe?1:-1)*3,S-1.6),n.lineTo(te+(l?o:Pe?1:-1)*4.4,S-3.4)):Ye==="half"?n.arc(te,S,3.2,Math.PI,0):n.arc(te,S,3.2,0,7),Ye==="sun"&&(n.fillStyle="rgba(40,30,40,.82)",n.fill()),n.stroke()}}),i.glasses&&!l&&(n.strokeStyle=i.glassColor||"#5b4048",n.lineWidth=.9,n.beginPath(),n.moveTo(-.3,S-.5),n.lineTo(.3,S-.5),n.stroke()),(c?i.blush===!0:i.blush!==!1)&&(n.fillStyle=i.blushColor||(c?"rgba(255,110,125,.14)":"rgba(255,110,125,.38)"),(l?[o*6.4]:[-6,6]).forEach(te=>{n.beginPath(),n.ellipse(te,S+3.4,2.1,1.3,0,0,7),n.fill()})),i.freckles&&(n.fillStyle=Ve(i.skin,.32),(l?[[o*5.6,S+2.2],[o*6.8,S+3.2],[o*5.2,S+3.8]]:[[-5.6,S+2.4],[-4.2,S+3.4],[-6.4,S+3.8],[5.6,S+2.4],[4.2,S+3.4],[6.4,S+3.8]]).forEach(([te,Pe])=>{n.beginPath(),n.arc(te,Pe,.5,0,7),n.fill()})),i.mole&&(n.fillStyle="#4a2f2a",n.beginPath(),n.arc(l?o*6:4.4,S+5.2,.65,0,7),n.fill()),i.nose||c){n.strokeStyle=Ve(i.skin,.3),n.lineWidth=.8,n.beginPath();let te=l?o*6.4:0;n.arc(te,S+2.6,.9,.1*Math.PI,.9*Math.PI),n.stroke()}let q=l?o*3.6:0,z=S+4.7,oe=i.mouthStyle||"smile",Se=i.lip||"#8a4650";i.mouth?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse(q,S+4.8,1.7,.7+i.mouth*1.5,0,0,7),n.fill()):oe==="grin"?(n.beginPath(),n.moveTo(q-2.4,z-.9),n.quadraticCurveTo(q,z+2.8,q+2.4,z-.9),n.closePath(),n.fillStyle="#fff",n.fill(),n.strokeStyle=Se,n.lineWidth=.9,n.stroke()):oe==="smirk"?(n.strokeStyle=Se,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo(q-1.8,z),n.quadraticCurveTo(q+.4,z+1,q+2.2,z-.8),n.stroke()):oe==="flat"?(n.strokeStyle=Se,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo(q-1.5,z),n.lineTo(q+1.5,z),n.stroke()):oe==="o"?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse(q,z+.2,1,1.2,0,0,7),n.fill()):oe==="cat"?(n.strokeStyle=Se,n.lineWidth=.9,n.lineCap="round",n.beginPath(),n.arc(q-1,z-.4,1.1,.1*Math.PI,.9*Math.PI),n.arc(q+1,z-.4,1.1,.1*Math.PI,.9*Math.PI),n.stroke()):(n.strokeStyle=Se,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.arc(q,S+(c?5.4:4.6),c?1.35:1.7,.15*Math.PI,.85*Math.PI),n.stroke())}let N=l?-o*1.6:0,ie=()=>{let B=l?o:1,Q=l?-1.6:0;l&&(n.save(),n.scale(B,1)),n.beginPath(),l?(n.moveTo(-9.2+Q,S+5.4),n.lineTo(-9.3+Q,S+.5),n.bezierCurveTo(-11+Q,S-14,11+Q,S-14,9.3+Q,S+.5),n.quadraticCurveTo(7+Q,S-5.4,4+Q,S-4.6),n.lineTo(-2.6+Q,S-1.6),n.lineTo(-5.4+Q,S+3.6)):(n.moveTo(-9.3,S+.5),n.bezierCurveTo(-11,S-14,11,S-14,9.3,S+.5),n.quadraticCurveTo(6,S-3.4,2,S-4.4),n.quadraticCurveTo(-3,S-6,-9.3,S+.5)),n.closePath(),l&&n.restore()};if(u)n.beginPath(),n.ellipse(0,S-.4,9.4,8.9,0,0,7),se(n,I,1.4),n.fillStyle="rgba(255,255,255,.2)",n.beginPath(),n.ellipse(-2.5,S-4,3.5,2,0,0,7),n.fill();else if(k==="buzz")n.beginPath(),n.moveTo(-8.8+N,S-1.2),n.bezierCurveTo(-10+N,S-11,10+N,S-11,8.8+N,S-1.2),n.quadraticCurveTo(0,S-4.6,-8.8+N,S-1.2),n.closePath(),se(n,I,1.3);else if(k==="undercut")ie(),se(n,Ve(I,.12),1.3),n.beginPath(),n.moveTo(-7+N,S-4),n.bezierCurveTo(-8+N,S-17,9+N,S-16,7.4+N,S-4),n.quadraticCurveTo(0,S-6,-7+N,S-4),n.closePath(),se(n,I,1.3);else if(k==="spiky"||k==="messy"){ie(),se(n,I,1.4);let B=k==="spiky"?6:4;for(let Q=0;Q<B;Q++){let ae=-Math.PI*(.12+.76*Q/(B-1)),ke=Math.cos(ae+Math.PI)*7.6+N,le=S-3+Math.sin(ae)*5.4,Fe=k==="spiky"?6.4:4.4+Q%2*1.6;n.beginPath(),n.moveTo(ke-2.1,le+1.4),n.lineTo(ke+(Q-B/2)*.8,le-Fe),n.lineTo(ke+2.1,le+1.4),n.closePath(),se(n,I,1.2)}ie(),se(n,I,1.2)}else k==="sidebang"||k==="pixie"?(ie(),se(n,I,1.4),n.beginPath(),n.moveTo(-9+N,S-6),n.quadraticCurveTo(2+N,S-12,9.4+N,S-1.4),n.quadraticCurveTo(k==="pixie"?4+N:-1+N,S-3.6,-9+N,S-6),n.closePath(),se(n,I,1.2),k==="pixie"&&!l&&[-1,1].forEach(B=>{n.beginPath(),n.moveTo(B*9.2,S-1),n.lineTo(B*10.4,S+5),n.lineTo(B*7.6,S+1),n.closePath(),se(n,I,1)})):k==="curtains"?(ie(),se(n,I,1.4),l||(n.strokeStyle=Ve(I,.35),n.lineWidth=1,n.beginPath(),n.moveTo(0,S-9.4),n.quadraticCurveTo(-1.2,S-6,-.2,S-3.6),n.stroke())):k==="afro"?(n.beginPath(),n.moveTo(-9+N,S-1),n.bezierCurveTo(-10+N,S-13,10+N,S-13,9+N,S-1),n.quadraticCurveTo(0+N,S-5.4,-9+N,S-1),n.closePath(),se(n,I,1.3)):(ie(),se(n,I,1.4));!u&&i.hair2&&(n.strokeStyle=i.hair2,n.lineWidth=1.3,n.lineCap="round",n.beginPath(),n.moveTo(-5+N,S-6.2),n.quadraticCurveTo(-3+N,S-8.6,0+N,S-9),n.moveTo(1+N,S-9),n.quadraticCurveTo(4+N,S-8,6+N,S-5.4),n.stroke()),u||(n.fillStyle="rgba(255,255,255,.22)",n.beginPath(),n.ellipse(-3+N,S-6.4,3.4,1.5,-.3,0,7),n.fill()),(k==="long"||k==="wavy")&&!u&&!l&&[-1,1].forEach(B=>{n.beginPath(),n.ellipse(B*9,S+6,2.3,7,0,0,7),se(n,I,1.1)}),l&&!u&&(n.beginPath(),n.ellipse(-o*1.2+o*.6,S+2.2,1.5,2.2,0,0,7),se(n,i.skin,1),n.fillStyle="rgba(160,90,80,.25)",n.beginPath(),n.ellipse(-o*1.2+o*.6,S+2.4,.6,1.1,0,0,7),n.fill(),i.glasses&&(n.strokeStyle=i.glassColor||"#5b4048",n.lineWidth=.9,n.beginPath(),n.moveTo(o*1.1,S-.6),n.lineTo(-o*.6,S+.9),n.stroke()));let G=i.hatColor||"#e07a66",K=i.hat;if(i.earrings&&!u&&(l?[-o*.6]:[-9,9]).forEach(B=>{n.beginPath(),n.arc(B,S+4.6,1.2,0,7),se(n,i.earrings,.8)}),K==="cap")n.beginPath(),n.moveTo(-9.4+N,S-2.8),n.bezierCurveTo(-9.8+N,S-15,9.8+N,S-15,9.4+N,S-2.8),n.closePath(),se(n,G,1.3),u||(n.beginPath(),l?n.ellipse(o*9.2+N,S-3,5.2,1.7,0,0,7):n.ellipse(0,S-2.6,7.4,2,0,0,7),se(n,Ve(G,.18),1.1)),n.beginPath(),n.arc(0,S-12.2,1,0,7),se(n,Ve(G,.2),.8);else if(K==="beanie")n.beginPath(),n.moveTo(-9.8+N,S-2.4),n.bezierCurveTo(-10.4+N,S-17,10.4+N,S-17,9.8+N,S-2.4),n.closePath(),se(n,G,1.3),wt(n,-10+N,S-4.6,20,3.8,1.6),se(n,Ve(G,-.25),1.1),n.beginPath(),n.arc(N,S-14,2.3,0,7),se(n,Ve(G,-.35),1);else if(K==="bucket")n.beginPath(),n.moveTo(-8+N,S-4),n.lineTo(-7+N,S-11.4),n.lineTo(7+N,S-11.4),n.lineTo(8+N,S-4),n.closePath(),se(n,G,1.3),n.beginPath(),n.ellipse(N,S-4.4,12.2,2.8,0,0,7),se(n,Ve(G,.1),1.2);else if(K==="beret")n.beginPath(),n.ellipse(2+N,S-8.6,9,3.6,-.12,0,7),se(n,G,1.3),n.beginPath(),n.arc(3+N,S-12.2,1,0,7),se(n,Ve(G,.25),.8);else if(K==="crown")n.beginPath(),n.moveTo(-6+N,S-8),n.lineTo(-6.6+N,S-14),n.lineTo(-3+N,S-11),n.lineTo(0+N,S-15.4),n.lineTo(3+N,S-11),n.lineTo(6.6+N,S-14),n.lineTo(6+N,S-8),n.closePath(),se(n,i.hatColor||"#EAB94E",1.2),[-3,0,3].forEach(B=>{n.beginPath(),n.arc(B+N,S-9.4,.7,0,7),n.fillStyle="#e07a66",n.fill()});else if(K==="catears")[-1,1].forEach(B=>{n.beginPath(),n.moveTo(B*2.6+N,S-8.4),n.lineTo(B*6.2+N,S-15.6),n.lineTo(B*9+N,S-6.2),n.closePath(),se(n,I,1.2),n.beginPath(),n.moveTo(B*4.2+N,S-8.8),n.lineTo(B*6.2+N,S-12.8),n.lineTo(B*7.6+N,S-7.6),n.closePath(),n.fillStyle="#f0a6b5",n.fill()});else if(K==="headphones")n.strokeStyle=Xs,n.lineWidth=3.6,n.beginPath(),n.arc(N,S-.5,10.4,Math.PI*1.06,Math.PI*1.94),n.stroke(),n.strokeStyle=G,n.lineWidth=2,n.stroke(),u||(l?[o*9.2]:[-9.8,9.8]).forEach(B=>{wt(n,B-1.7,S-3,3.4,6.2,1.4),se(n,G,1.1)});else if(K==="headband"&&!u)n.strokeStyle=Xs,n.lineWidth=3.4,n.beginPath(),n.moveTo(-9+N,S-1.2),n.quadraticCurveTo(N,S-12,9+N,S-1.2),n.stroke(),n.strokeStyle=G,n.lineWidth=2,n.stroke();else if(K==="headband")n.strokeStyle=G,n.lineWidth=2,n.beginPath(),n.moveTo(-9,S-1.2),n.quadraticCurveTo(0,S-12,9,S-1.2),n.stroke();else if(K==="bow"){let B=l?-o*1.5:6.6,Q=S-9.6;[-1,1].forEach(ae=>{n.beginPath(),n.moveTo(B,Q),n.lineTo(B+ae*5.4,Q-2.8),n.lineTo(B+ae*5.4,Q+2.8),n.closePath(),se(n,G,1.1)}),n.beginPath(),n.arc(B,Q,1.5,0,7),se(n,Ve(G,.2),1)}else if(K==="flower"){let B=l?-o*2:-6,Q=S-8.4;for(let ae=0;ae<5;ae++){let ke=ae*Math.PI*2/5;n.beginPath(),n.arc(B+Math.cos(ke)*2.3,Q+Math.sin(ke)*2.3,1.8,0,7),se(n,G,.9)}n.beginPath(),n.arc(B,Q,1.3,0,7),se(n,"#EAB94E",.8)}if(n.restore(),i.tag){let B=S-19+Math.sin(s*4)*1.5;n.beginPath(),n.moveTo(-5,B-5),n.lineTo(5,B-5),n.lineTo(0,B+1),n.closePath(),se(n,"#f28f7e",1.3)}n.restore()}var ix=-43.4;function yt(n,e,t){n.strokeStyle=e,n.lineWidth=t,n.lineCap="round",n.lineJoin="round",n.stroke()}function Ws(n,e,t,i,s,r,a,h=1.7){n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.strokeStyle=Xs,n.lineWidth=r+h,n.stroke(),n.strokeStyle=a,n.lineWidth=r,n.stroke()}function sx(n,e,t,i){n.beginPath(),i==="side"?(n.moveTo(e-3.9,t+.6),n.bezierCurveTo(e-4.3,t-3.8,e-1.8,t-4.9,e+.4,t-4.9),n.bezierCurveTo(e+2.6,t-4.9,e+3.8,t-3.4,e+3.9,t-1),n.lineTo(e+4,t+.4),n.lineTo(e+5,t+2),n.lineTo(e+3.8,t+2.5),n.lineTo(e+3.9,t+3.3),n.quadraticCurveTo(e+3.5,t+4.1,e+2.8,t+4.5),n.quadraticCurveTo(e+1.2,t+5.2,e-.8,t+4.6),n.bezierCurveTo(e-2.6,t+4,e-3.9,t+2.6,e-3.9,t+.6)):(n.moveTo(e-4.2,t-.6),n.bezierCurveTo(e-4.3,t-3.9,e-2.4,t-4.9,e,t-4.9),n.bezierCurveTo(e+2.4,t-4.9,e+4.3,t-3.9,e+4.2,t-.6),n.bezierCurveTo(e+4.1,t+2.2,e+3,t+4,e+1.5,t+4.7),n.quadraticCurveTo(e,t+5.2,e-1.5,t+4.7),n.bezierCurveTo(e-3,t+4,e-4.1,t+2.2,e-4.2,t-.6)),n.closePath()}function rx(n,e,t,i,s,r){let a=e.skin,h=Ve(a,.3),l=e.mouth||0,o=(r*.9+e.id*1.7)%4<.13,u=e.lip||Ve(a,.38);if((s?[2.2]:[-1.9,1.9]).forEach((p,m)=>{let T=t+p,A=i+.3,v=e.eyeShape||"round";if(o||v==="happy")n.beginPath(),v==="happy"&&!o?n.arc(T,A+.3,1,Math.PI*1.1,Math.PI*1.9):(n.moveTo(T-1,A),n.lineTo(T+1,A)),yt(n,"#3a2a30",.55);else if(n.fillStyle="#fffaf2",n.beginPath(),n.ellipse(T,A,s?.8:1,.66,0,0,7),n.fill(),yt(n,Ve(a,.45),.3),n.fillStyle=e.eyeColor||"#3a2a30",n.beginPath(),n.arc(T+(s?.25:0),A+.02,.5,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(T+(s?.05:-.15),A-.22,.17,0,7),n.fill(),v==="sleepy"&&(n.fillStyle=a,n.beginPath(),n.ellipse(T,A-.35,1.05,.42,0,Math.PI,2*Math.PI),n.fill()),n.beginPath(),n.moveTo(T-(s?.8:1.05),A-.35),n.quadraticCurveTo(T,A-.95,T+(s?.9:1.05),A-.35),yt(n,"#2a1d22",.45),v==="lash"){let E=s||m?1:-1;n.beginPath(),n.moveTo(T+E*.9,A-.4),n.lineTo(T+E*1.7,A-1),yt(n,"#2a1d22",.4)}let M=e.brow||"soft";if(M!=="none"){let E=M==="thick"?.85:M==="thin"?.32:.55,R=s?1:p<0?-1:1;n.beginPath(),n.moveTo(T-R*1.2*(s?0:1)-(s?1.2:0),A-1.7+(s?.2:0)),n.quadraticCurveTo(T,A-2.5,T+R*1.3+(s?.6:0),A-1.9+(M==="arch"?-.3:.1)),yt(n,e.browColor||e.hair,E)}if(e.glasses&&e.glasses!=="none"){let E=e.glasses===!0?"round":e.glasses,R=e.glassColor||"#3b2f33";if(n.beginPath(),E==="square")n.roundRect(T-1.6,A-1.25,3.2,2.6,.6);else if(E==="cat"){n.ellipse(T,A+.05,1.6,1.3,0,0,7);let y=s?1:p<0?-1:1;n.moveTo(T+y*1.4,A-.7),n.lineTo(T+y*2.1,A-1.6)}else E==="half"?n.arc(T,A,1.6,Math.PI,0):n.arc(T,A+.05,1.5,0,7);E==="sun"&&(n.fillStyle="rgba(40,30,40,.82)",n.fill()),yt(n,R,.5)}}),e.glasses&&e.glasses!=="none"){let p=e.glassColor||"#3b2f33";n.beginPath(),s?(n.moveTo(t+.6,i+.1),n.lineTo(t-3.6,i+.7)):(n.moveTo(t-.5,i+.15),n.lineTo(t+.5,i+.15)),yt(n,p,.45)}s||(n.beginPath(),n.moveTo(t+.2,i+.9),n.lineTo(t+.5,i+2.2),n.arc(t,i+2.35,.65,.05*Math.PI,.85*Math.PI),yt(n,h,.38)),e.freckles&&(n.fillStyle=h,(s?[[3,1.6],[2.3,2.3]]:[[-2.6,1.7],[-1.9,2.4],[2.6,1.7],[1.9,2.4]]).forEach(([p,m])=>{n.beginPath(),n.arc(t+p,i+m,.22,0,7),n.fill()})),e.blush===!0&&(n.fillStyle="rgba(255,110,125,.16)",(s?[2.6]:[-2.8,2.8]).forEach(p=>{n.beginPath(),n.ellipse(t+p,i+2.1,1,.6,0,0,7),n.fill()}));let c=t+(s?2.6:0),f=i+3.4,g=e.mouthStyle||"smile",_=s?1.1:1.5;l?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse(c,f+.1,_*.62,.3+l*.9,0,0,7),n.fill(),n.beginPath(),n.ellipse(c,f+.1,_*.62,.3+l*.9,0,0,7),yt(n,u,.35)):g==="grin"?(n.beginPath(),n.moveTo(c-_,f-.2),n.quadraticCurveTo(c,f+1.9,c+_,f-.2),n.closePath(),n.fillStyle="#fffaf2",n.fill(),yt(n,u,.45)):g==="flat"?(n.beginPath(),n.moveTo(c-_*.8,f),n.lineTo(c+_*.8,f),yt(n,u,.5)):g==="smirk"?(n.beginPath(),n.moveTo(c-_*.8,f+.1),n.quadraticCurveTo(c+.2,f+.8,c+_,f-.5),yt(n,u,.5)):(n.beginPath(),n.moveTo(c-_,f-.1),n.quadraticCurveTo(c,f+1,c+_,f-.1),yt(n,u,.52),n.fillStyle=Ve(u,-.25),n.globalAlpha=.55,n.beginPath(),n.ellipse(c,f+.6,_*.5,.26,0,0,7),n.fill(),n.globalAlpha=1),n.beginPath(),n.moveTo(t+(s?3.1:2.9),i+1.9),n.quadraticCurveTo(t+(s?3.3:3.1),i+2.8,t+(s?3.1:2.8),i+3.6),yt(n,Ve(a,.13),.3)}function Dd(n,e,t,i,s,r){let a=e.style||"crop",h=e.hair,l=Ve(h,-.22),o=s==="side",u=s==="back",d=(p=h)=>se(n,p,1),c=a==="long"||a==="wavy"||a==="braids",f=a==="bob";if(r==="back"){if(a==="afro"&&(n.beginPath(),n.ellipse(t-(o?1.2:0),i-1.4,6.9,6.5,0,0,7),d()),a==="curly"&&[[-5,-1],[5,-1],[-4,-4.8],[4,-4.8],[0,-5.8],[-5.4,2],[5.4,2]].forEach(([p,m])=>{n.beginPath(),n.arc(t+(o?p*.8-1:p),i+m,2.2,0,7),d()}),c||f){let p=c?12:5.6;o?(n.beginPath(),n.moveTo(t-3,i-4),n.lineTo(t-4.6,i+p),n.lineTo(t+.8,i+p-.4),n.lineTo(t+1.4,i),n.closePath(),d()):(n.beginPath(),n.moveTo(t-5,i-3),n.lineTo(t-5.4,i+p),n.quadraticCurveTo(t,i+p+1,t+5.4,i+p),n.lineTo(t+5,i-3),n.closePath(),d())}(a==="pony"||a==="topknot")&&(o?(n.beginPath(),n.ellipse(t-5.2,i+3.4,1.9,4.6,.3,0,7),d()):u&&(n.beginPath(),n.ellipse(t,i+4.6,1.9,5,0,0,7),d()));return}if(u){n.beginPath(),n.ellipse(t,i-.2,4.7,5.2,0,0,7),d(),a==="bun"&&(n.beginPath(),n.arc(t,i-5.6,2.5,0,7),d()),n.fillStyle="rgba(255,255,255,.16)",n.beginPath(),n.ellipse(t-1.4,i-3,1.8,1,-.3,0,7),n.fill();return}let g=a==="buzz",_=g?4.2:5.5;n.beginPath(),o?(n.moveTo(t-4.2,i+2.2),n.bezierCurveTo(t-5.2,i-5.2,t+3.6,i-6.2,t+4,i-1.8),n.lineTo(t+3.7,i-2),n.quadraticCurveTo(t+1.6,i-3.5,t-.6,i-2.4),n.lineTo(t-2.2,i+.2),n.lineTo(t-2.6,i+2.4)):(n.moveTo(t-4.5,i+1.2),n.bezierCurveTo(t-5.3,i-_-.3,t+5.3,i-_-.3,t+4.5,i+1.2),n.lineTo(t+4,i-.9),n.quadraticCurveTo(t+1.6,i-(g?3.7:3.4),t-.8,i-(g?3.4:3)),n.quadraticCurveTo(t-3.3,i-2.6,t-4,i-.9)),n.closePath(),d(),g&&(n.globalAlpha=.35,n.fillStyle=Ve(h,-.5),n.fill(),n.globalAlpha=1),a==="bun"&&(n.beginPath(),n.arc(t-(o?2.8:0),i-6.1,2.5,0,7),d(),n.beginPath(),n.arc(t-(o?2.8:0),i-6.1,1.2,0,7),yt(n,l,.35)),(a==="afro"||a==="curly")&&[[-3.8,-3.6],[-1.4,-4.8],[1.4,-4.8],[3.8,-3.6]].forEach(([p,m])=>{n.beginPath(),n.arc(t+(o?p*.7-1:p),i+m,1.9,0,7),d()}),!g&&a!=="afro"&&(n.beginPath(),n.moveTo(t+(o?1.2:-2.1),i-4.6),n.quadraticCurveTo(t+(o?2.4:0),i-5.4,t+(o?3.2:1.4),i-3.5),yt(n,Ve(h,.34),.5)),n.fillStyle="rgba(255,255,255,.16)",n.beginPath(),n.ellipse(t-1.4+(o?1:0),i-4.1,1.8,.8,-.25,0,7),n.fill(),c&&!o&&[-1,1].forEach(p=>{n.beginPath(),n.moveTo(t+p*4.2,i-1),n.quadraticCurveTo(t+p*5.6,i+4,t+p*5.2,i+9),n.lineTo(t+p*3.6,i+7),n.quadraticCurveTo(t+p*4.4,i+3,t+p*3.6,i),n.closePath(),d()}),e.hair2&&(n.beginPath(),n.moveTo(t-3.4,i-3.8),n.quadraticCurveTo(t-1,i-5.6,t+1.8,i-4.4),yt(n,e.hair2,.9))}function ax(n,e,t,i,s){n.save(),n.translate(Math.round(e*2)/2,Math.round(t*2)/2),n.scale(.93,.93);let r=i.moving,a=r?Math.sin(i.walk):0,h=i.dir,l=h==="left"||h==="right",o=h==="left"?-1:1,u=h==="up",d=i.top||"shirt",c=i.bottom||"pants",f=i.build==="slim"?.92:i.build==="sturdy"?1.1:1,g=i.skin,_=i.shirt||"#8fc9e8",p=i.shirt2||"#fff6ea",m=i.pants||"#4a3b3f",T=i.shoes||"#3b2f33",A=d==="dress",v=c==="skirt"||A,M=ix,E=r?-Math.abs(Math.cos(i.walk))*1.1:Math.sin(s*2+i.id)*.3;n.fillStyle="rgba(70,45,55,.24)",n.beginPath(),n.ellipse(0,1,9.4*f,3,0,0,7),n.fill(),i.sitting&&n.translate(0,6),n.translate(0,E);let R=-22.5,y=-36.4,w=-25.2;[-1,1].forEach(z=>{let oe=r?Math.max(0,z*a)*2.2:0,Se=l?0:z*2.5*f,te=l?z*a*5:z*2.6*f+(r?z*0:0),Pe=-2.4-oe;Ws(n,Se,R+1,te,Pe,v&&!i.tights?3.2:4.4*(c==="joggers"?1.05:1),v?i.tights||g:m,v?1.4:1.6),!v&&c!=="shorts"&&(n.beginPath(),n.moveTo(Se,R+4),n.lineTo(te*.98,Pe-3),yt(n,Ve(m,.22),.3)),c==="shorts"&&Ws(n,te,Pe-5,te,Pe,3.2,g,1.4);let Ye=te+(l?o*1.5:0),Ie=Pe+1.4-oe*0;i.shoeStyle==="boot"?(wt(n,Ye-2.5,Ie-4.4,5,5,1.4),se(n,T,1),n.beginPath(),n.ellipse(Ye+(l?o*1.3:0),Ie+.6,3.5,1.6,0,0,7),se(n,Ve(T,.25),1)):(n.beginPath(),n.ellipse(Ye,Ie,l?3.7:3,1.8,0,0,7),se(n,T,1),n.fillStyle="rgba(255,255,255,.22)",n.beginPath(),n.ellipse(Ye-.6,Ie-.7,1.5,.5,0,0,7),n.fill())}),n.beginPath(),n.moveTo(-1.9,-39.8),n.lineTo(-1.9,y+.6),n.lineTo(1.9,y+.6),n.lineTo(1.9,-39.8),n.closePath(),se(n,g,1),n.fillStyle="rgba(110,60,50,.22)",n.beginPath(),n.ellipse(0,-38.4,2,1,0,0,7),n.fill();let P=d==="tank"||d==="dress"?g:_,S=d==="tee"||d==="tank"||A&&!i.sleeves,I=d==="blazer"?p:null,k=z=>{let oe=i.arms&&(z>0?i.arms.R:i.arms.L),Se,te;return oe?(Se=l?o*Math.abs(oe[0])*1:oe[0]*1.15,te=Math.max(-47,y+1+(oe[1]+17)*1.4)):l?(Se=z*a*4.2*-1+o*.6,te=-25.2+(r?-Math.abs(a)*.8:0)):(Se=z*(8.6*f+.3)+(r?-z*a*.6:0),te=-25.6+(r?-z*a*1.4:0)),[Se,te]},D=z=>{let[oe,Se]=k(z),te=l?0:z*6.9*f,Pe=y+1.6,Ye=te+(oe-te)*.52,Ie=Pe+(Se-Pe)*.52+V(oe,te);S?(Ws(n,te,Pe,Ye,Ie,3.9,P,1.5),Ws(n,Ye,Ie,oe,Se,3,g,1.4)):(Ws(n,te,Pe,oe,Se,3.7,P,1.5),I&&Ws(n,oe-(oe-te)*.1,Se-(Se-Pe)*.1,oe,Se,3.8,I,1.3)),n.beginPath(),n.arc(oe,Se+.9,1.7,0,7),se(n,g,1)},V=(z,oe)=>0;l&&D(-o);let Z=(l?4.5:7)*f,N=(l?4.3:6.2)*f,ie=(l?3.9:A||v?4.8:5.4)*f,G=(l?4.4:6)*f,K=d==="blazer"?-20.5:d==="sweater"?-22.2:-22.6,B=z=>{n.beginPath(),n.moveTo(-Z+1.6,y-.7),n.quadraticCurveTo(-Z,y-.7,-Z,y+1),n.lineTo(-N,-31),n.lineTo(-ie,w),n.lineTo(-G-(d==="blazer"?.6:0),z),n.lineTo(G+(d==="blazer"?.6:0),z),n.lineTo(ie,w),n.lineTo(N,-31),n.lineTo(Z,y+1),n.quadraticCurveTo(Z,y-.7,Z-1.6,y-.7),n.quadraticCurveTo(0,y-2.1,-Z+1.6,y-.7),n.closePath()};if(v&&!i.sitting){let z=A?-9.5:-12.5,oe=A?8.6:7.8;n.beginPath(),n.moveTo(-G,R-.8),n.lineTo(G,R-.8),n.lineTo(oe*f*(l?.6:1),z),n.quadraticCurveTo(0,z+1.3,-oe*f*(l?.6:1),z),n.closePath(),se(n,A?_:m,1),n.fillStyle="rgba(255,255,255,.14)",n.fillRect(-oe*f*.7,z-1.3,oe*1.4*f,.8)}let Q=d==="vest"?p:_;if(B(A?R-1:K),se(n,Q,1.1),!A&&!v&&!u&&d!=="blazer"&&d!=="sweater"&&!l&&(n.fillStyle=Ve(m,.1),n.fillRect(-G+.3,-24.2,(G-.3)*2,1.6),n.fillStyle="#c9b28a",n.fillRect(-.8,-24.1,1.6,1.4)),l||(n.fillStyle="rgba(255,255,255,.2)",n.beginPath(),n.ellipse(-2.6,-33,2,3.2,0,0,7),n.fill()),!u&&!l){if(d==="blazer")n.beginPath(),n.moveTo(-2.4,y-.6),n.lineTo(0,-28.5),n.lineTo(2.4,y-.6),n.closePath(),se(n,p,.8),[-1,1].forEach(z=>{n.beginPath(),n.moveTo(z*2.5,y-.7),n.lineTo(z*.2,-27.8),n.lineTo(z*1.4,-24.6),n.lineTo(z*5.6,-25.6),n.lineTo(z*6.2,-32),n.lineTo(z*4.4,y),n.closePath(),se(n,Ve(_,.12),.8)}),n.fillStyle="#c9b28a",[-24.6,-21.8].forEach(z=>{n.beginPath(),n.arc(0,z+2,.5,0,7),n.fill()}),wt(n,2.4,-31.8,2.8,.7,.3),n.fillStyle=p,n.fill();else if(d==="sweater"){n.fillStyle=Ve(_,-.2),n.fillRect(-G,-24.2,G*2,2.4);for(let z=-G+1;z<G;z+=1.6)n.fillStyle="rgba(0,0,0,.08)",n.fillRect(z,-24.2,.35,2.4);n.beginPath(),n.moveTo(-3.2,y-.6),n.lineTo(0,-33.4),n.lineTo(3.2,y-.6),n.closePath(),se(n,p,.7),n.beginPath(),n.ellipse(0,y-.8,3.4,1.1,0,0,Math.PI),yt(n,Ve(_,.3),.9)}else d==="vest"?([-1,1].forEach(z=>{n.beginPath(),n.moveTo(z*2.3,y-.6),n.lineTo(z*.4,-22.4),n.lineTo(z*5.9,-22.4),n.lineTo(z*5.1,-30),n.lineTo(z*6.8,y+1),n.lineTo(z*4.8,y-.6),n.closePath(),se(n,_,.85)}),n.beginPath(),n.moveTo(-2.6,y-.6),n.lineTo(0,-35),n.lineTo(2.6,y-.6),n.lineTo(1.1,y+.6),n.lineTo(0,y+.2),n.lineTo(-1.1,y+.6),n.closePath(),se(n,"#fffaf2",.6),n.beginPath(),n.moveTo(0,-35.2),n.lineTo(.9,-32.4),n.lineTo(0,-27.6),n.lineTo(-.9,-32.4),n.closePath(),se(n,i.tie||"#a24a3c",.6)):d==="tee"?(n.beginPath(),n.ellipse(0,y-.3,2.8,1.3,0,0,Math.PI),se(n,Ve(_,.16),.6)):d==="tank"?(n.beginPath(),n.ellipse(0,y,3.4,1.7,0,0,Math.PI),se(n,g,.7)):d==="dress"?(n.beginPath(),n.ellipse(0,y-.2,3.2,1.4,0,0,Math.PI),se(n,g,.7),n.fillStyle=Ve(_,.25),n.fillRect(-ie,w-.6,ie*2,1.2)):([-1,1].forEach(z=>{n.beginPath(),n.moveTo(z*.3,y-.6),n.lineTo(z*3.2,y-.4),n.lineTo(z*1.4,-34),n.closePath(),se(n,Ve(_,-.15),.6)}),n.beginPath(),n.moveTo(0,-34.4),n.lineTo(0,-23),yt(n,Ve(_,.25),.4),[-31,-28,-25].forEach(z=>{n.fillStyle=Ve(_,.35),n.beginPath(),n.arc(0,z,.3,0,7),n.fill()}));i.lanyard!==!1&&!A&&(n.beginPath(),n.moveTo(-1.9,y),n.lineTo(0,-29.4),n.lineTo(1.9,y),yt(n,i.lanyardColor||"#c4463c",.7),wt(n,-1.4,-29.6,2.8,3.4,.5),se(n,"#fffaf2",.55),n.fillStyle="#4F91C7",n.fillRect(-1,-29.2,2,.7)),i.scarf&&(n.beginPath(),n.ellipse(0,y-.2,4.2,1.7,0,0,7),se(n,i.scarf,.9)),i.badge&&(n.beginPath(),n.arc(-3.4,-32.4,1.1,0,7),se(n,i.badge,.6))}else u&&(n.beginPath(),n.moveTo(-3,y-.5),n.quadraticCurveTo(0,y+.7,3,y-.5),yt(n,Ve(_,.3),.5),d==="blazer"&&(n.beginPath(),n.moveTo(0,y+.8),n.lineTo(0,K),yt(n,Ve(_,.3),.45)));!u&&i.packStyle==="messenger"&&(n.beginPath(),n.moveTo(l?-2:-5.6,y),n.lineTo(l?2.5:5.4,-24.6),yt(n,i.pack||"#9a653d",1.3),wt(n,l?1.4:3.2,-27.2,5.2,4.4,1),se(n,i.pack||"#9a653d",.9)),u&&i.packStyle&&i.packStyle!=="none"&&(wt(n,-5,-34,10,9,2.2),se(n,i.pack||"#9a653d",1)),l?D(o):(D(-1),D(1));let ae=l&&o<0;n.save(),ae&&n.scale(-1,1);let ke=u?"back":l?"side":"front",le=l?.4:0;Dd(n,i,le,M,ke,"back"),l?(n.beginPath(),n.ellipse(le-.8,M+.9,1,1.6,0,0,7),se(n,g,.8)):[-1,1].forEach(z=>{n.beginPath(),n.ellipse(z*4.2,M+.8,.9,1.5,0,0,7),se(n,g,.8)}),sx(n,le,M,u?"front":ke),se(n,g,1.15),u||(n.fillStyle="rgba(120,70,60,.13)",n.beginPath(),n.ellipse(le+(l?-1:2.2),M+2.4,2.8,2.6,0,0,7),n.fill(),rx(n,i,le,M,l,s)),Dd(n,i,le,M,ke,"front"),i.earrings&&!u&&(n.beginPath(),n.arc(l?le-.8:4.2,M+2.7,.55,0,7),se(n,i.earrings,.4),l||(n.beginPath(),n.arc(-4.2,M+2.7,.55,0,7),se(n,i.earrings,.4)));let Fe=i.hat,q=i.hatColor||"#e07a66";if(Fe&&Fe!=="none"&&(Fe==="cap"?(n.beginPath(),n.moveTo(le-4.6,M-1.6),n.bezierCurveTo(le-4.8,M-8.6,le+4.8,M-8.6,le+4.6,M-1.6),n.closePath(),se(n,q,1),u||(n.beginPath(),n.ellipse(le+(l?4.4:0),M-1.6,l?2.7:4,1,0,0,7),se(n,Ve(q,.18),.8))):Fe==="beanie"?(n.beginPath(),n.moveTo(le-4.8,M-1.4),n.bezierCurveTo(le-5,M-9.6,le+5,M-9.6,le+4.8,M-1.4),n.closePath(),se(n,q,1),wt(n,le-4.9,M-2.8,9.8,2,.8),se(n,Ve(q,-.25),.8)):Fe==="bucket"||Fe==="fedora"?(n.beginPath(),n.moveTo(le-4,M-2.4),n.lineTo(le-3.6,M-6.6),n.lineTo(le+3.6,M-6.6),n.lineTo(le+4,M-2.4),n.closePath(),se(n,q,1),n.beginPath(),n.ellipse(le,M-2.5,6.4,1.5,0,0,7),se(n,Ve(q,.1),.9)):Fe==="headband"?(n.beginPath(),n.moveTo(le-4.3,M-1.8),n.quadraticCurveTo(le,M-7.4,le+4.3,M-1.8),yt(n,q,1.1)):Fe==="headphones"?(n.beginPath(),n.arc(le,M-.4,5.2,Math.PI*1.06,Math.PI*1.94),yt(n,q,1.1),u||[-1,1].forEach(z=>{wt(n,le+z*5.1-1,M-1.2,2,3.4,.8),se(n,q,.7)})):Fe==="crown"?(n.beginPath(),n.moveTo(le-3,M-5.4),n.lineTo(le-3.3,M-8.8),n.lineTo(le-1.4,M-6.8),n.lineTo(le,M-9.4),n.lineTo(le+1.4,M-6.8),n.lineTo(le+3.3,M-8.8),n.lineTo(le+3,M-5.4),n.closePath(),se(n,i.hatColor||"#EAB94E",.8)):Fe==="beret"&&(n.beginPath(),n.ellipse(le+1,M-5,5,2,-.12,0,7),se(n,q,1))),n.restore(),i.tag){let z=M-12+Math.sin(s*4)*1.2;n.beginPath(),n.moveTo(-3.4,z-3.4),n.lineTo(3.4,z-3.4),n.lineTo(0,z+1),n.closePath(),se(n,"#f28f7e",1)}n.restore()}var ni={adult:1,hs:1,g68:.86,g35:.74,k2:.6},Jr=["down","up","left","right"],Zr=160,$s=240,Kr=5,jr=4.6,fc=12;function Nd(n){let e=document.createElement("canvas");e.width=Zr*Kr,e.height=$s*Jr.length;let t=e.getContext("2d");return Jr.forEach((i,s)=>{for(let r=0;r<Kr;r++)t.save(),t.translate(r*Zr+Zr/2,s*$s+$s-fc),t.scale(jr,jr),t.shadowColor="rgba(52,34,46,.35)",t.shadowBlur=2.2,t.shadowOffsetX=.5,t.shadowOffsetY=1.2,qs(t,0,0,{...n,dir:i,moving:r>0,walk:r*Math.PI/2,sitting:!1},0),t.restore()}),e}var Ud=["math","ela","science","history"];var Qr=[{subject:"math",rect:{x:5,y:5,w:16,h:12}},{subject:"ela",rect:{x:35,y:5,w:16,h:12}},{subject:"science",rect:{x:5,y:27,w:16,h:12}},{subject:"history",rect:{x:35,y:27,w:16,h:12}}],ii=Qr.map(n=>{let e=n.rect.y<20,t=n.rect.x+n.rect.w/2,i=e?n.rect.y+n.rect.h:n.rect.y;return{subject:n.subject,face:e?"S":"N",cx:t,cy:i,trigger:{x:t-1.2,y:e?i:i-.9,w:2.4,h:.9},approach:{x:t,y:e?i+1.6:i-1.6}}}),Ui={cx:28,cy:0,trigger:{x:26.8,y:.45,w:2.4,h:.95},approach:{x:28,y:2.4}},pc=[{rect:{x:6,y:0,w:19,h:.6},face:"S"},{rect:{x:31,y:0,w:19,h:.6},face:"S"},{rect:{x:6,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:32,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:0,y:6,w:.6,h:32},face:"E"},{rect:{x:56-.6,y:6,w:.6,h:32},face:"W"},{rect:{x:6,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:36,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:6,y:39,w:14,h:.6},face:"S"},{rect:{x:36,y:39,w:14,h:.6},face:"S"},{rect:{x:5-.6,y:6,w:.6,h:10},face:"W"},{rect:{x:5-.6,y:28,w:.6,h:10},face:"W"},{rect:{x:51,y:6,w:.6,h:10},face:"E"},{rect:{x:51,y:28,w:.6,h:10},face:"E"}],Cn={gap:{x0:24,x1:32},tile:{x:28,y:43}},Fd=(n,e)=>n.flatMap(t=>e.map(i=>({kind:"table",x:t,y:i}))),mc=[{kind:"fountain",x:28,y:22},...[[23.5,7.5],[32.5,7.5],[23.5,36.5],[32.5,36.5],[7,19],[7,25],[49,19],[49,25],[23,14],[33,14],[23,30],[33,30]].map(([n,e])=>({kind:"tree",x:n,y:e})),...Fd([10,14,18],[20,24]),...Fd([38,42,46],[20,24]),...[[24.2,11],[31.8,11],[24.2,33],[31.8,33]].map(([n,e])=>({kind:"bench",x:n,y:e,rot:Math.PI/2})),{kind:"planter",x:25.2,y:18.2},{kind:"planter",x:30.8,y:18.2},{kind:"planter",x:25.2,y:25.8},{kind:"planter",x:30.8,y:25.8},...[[12,2.5],[20,2.5],[36,2.5],[44,2.5],[12,41.5],[44,41.5],[2.5,22],[53.5,22]].map(([n,e])=>({kind:"lamp",x:n,y:e}))],ox={tree:[1.2,1.2],bench:[.7,1.9],table:[1.9,1.9],fountain:[4.6,4.6],planter:[1.4,1.4],lamp:[.1,.1]};function lx(){let n=Qr.map(e=>({...e.rect}));for(let e of pc)n.push(e.rect);for(let e of mc){let[t,i]=ox[e.kind];e.kind!=="lamp"&&n.push({x:e.x-t/2,y:e.y-i/2,w:t,h:i})}return n}var Od=lx(),Ki=(n,e,t,i=0)=>e>n.x-i&&e<n.x+n.w+i&&t>n.y-i&&t<n.y+n.h+i;function Cl(n,e,t=.16){return n<.45||e<.45||n>56-.45?!0:e>44-.45?!(n>Cn.gap.x0&&n<Cn.gap.x1&&e<47):Od.some(i=>Ki(i,n,e,t))}var si=Array.from({length:44},(n,e)=>Array.from({length:56},(t,i)=>Od.some(s=>Ki(s,i+.5,e+.5,.2))?"#":".").join("")),fS=si.flatMap((n,e)=>n.split("").map((t,i)=>({c:t,x:i,y:e}))).filter(n=>n.c==="."&&n.x>=7&&n.x<=48&&n.y>=7&&n.y<=37&&!Qr.some(e=>Ki(e.rect,n.x+.5,n.y+.5,0))),pS=si.flatMap((n,e)=>n.split("").map((t,i)=>({c:t,x:i,y:e}))).filter(n=>n.c==="."&&(n.x<4||n.x>51||n.y<4||n.y>39));var ea="#6d5a5f";var Nt=(n,e,t,i=!1)=>{let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");t(r,n,e);let a=new Xi(s);return a.colorSpace=Ot,a.anisotropy=8,i&&(a.wrapS=a.wrapT=Ts),a},ft=(n,e,t,i,s,r)=>{n.beginPath(),n.roundRect(e,t,i,s,r)},ta=(n,e=3,t=ea)=>{n.lineWidth=e,n.strokeStyle=t,n.lineJoin="round",n.stroke()},nt=(n,e,t=3)=>{n.fillStyle=e,n.fill(),t&&ta(n,t)},gn=(n,e,t=0)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)},na=(n,e,t,i,s,r=6)=>{n.save(),n.lineWidth=r,n.strokeStyle="rgba(255,255,255,.5)",n.beginPath(),n.moveTo(e+r,t+s-r),n.lineTo(e+r,t+r),n.lineTo(e+i-r,t+r),n.stroke(),n.strokeStyle="rgba(70,40,50,.22)",n.beginPath(),n.moveTo(e+i-r,t+r),n.lineTo(e+i-r,t+s-r),n.lineTo(e+r,t+s-r),n.stroke(),n.restore()},kd=()=>Nt(256,256,n=>{for(let e=0;e<2;e++)for(let t=0;t<2;t++){let i=t*128,s=e*128;n.fillStyle=t+e&1?"#d4ebf5":"#e3f3f9",n.fillRect(i,s,128,128);let r=n.createLinearGradient(i,s,i+128,s+128);r.addColorStop(0,"rgba(255,255,255,.28)"),r.addColorStop(1,"rgba(60,90,110,.10)"),n.fillStyle=r,n.fillRect(i,s,128,128);for(let a=0;a<26;a++)n.fillStyle=a&1?"rgba(255,255,255,.55)":"rgba(80,110,130,.18)",n.fillRect(i+gn(t,e,a)*124,s+gn(e,t,a+40)*124,2.4,2.4)}n.strokeStyle="rgba(90,120,140,.45)",n.lineWidth=3,n.strokeRect(1.5,1.5,253,253),n.beginPath(),n.moveTo(128,0),n.lineTo(128,256),n.moveTo(0,128),n.lineTo(256,128),n.stroke()},!0),Bd=()=>Nt(256,256,n=>{n.fillStyle="#9fd0e8",n.fillRect(0,0,256,256);for(let e=0;e<220;e++)n.fillStyle=e&1?"rgba(255,255,255,.3)":"rgba(50,108,158,.14)",n.fillRect(gn(e,1)*256,gn(e,2)*256,3,3);for(let[e,t,i]of[[0,18,"#EAB94E"],[22,8,"#F28F7E"],[226,8,"#F28F7E"],[238,18,"#EAB94E"]])n.fillStyle=i,n.fillRect(e,0,t,256);n.fillStyle="rgba(255,255,255,.55)";for(let e=0;e<2;e++)n.beginPath(),n.moveTo(128,e*128+16),n.lineTo(160,e*128+64),n.lineTo(128,e*128+112),n.lineTo(96,e*128+64),n.closePath(),n.fill()},!0),ia=()=>Nt(512,540,(n,e,t)=>{n.fillStyle="#F4EBDB",n.fillRect(0,0,e,t);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#FBF1DD"),i.addColorStop(1,"#EAF1E8"),n.fillStyle=i,n.fillRect(0,60,e,300);for(let r=0;r<e;r+=32)n.fillStyle="rgba(255,255,255,.55)",n.fillRect(r,60,14,300),n.fillStyle="rgba(110,120,110,.10)",n.fillRect(r+14,60,3,300);n.fillStyle="#FFF9F0",n.fillRect(0,0,e,40);let s=["#F28F7E","#EAB94E","#8FC9E8","#B8A8DA"];for(let r=0;r<8;r++)n.beginPath(),n.arc(32+r*64,42,30,0,Math.PI),nt(n,s[r%4],3);n.fillStyle="#EAB94E",n.fillRect(0,340,e,22),n.fillStyle="rgba(255,255,255,.45)",n.fillRect(0,340,e,5),n.fillStyle="#A9CDB8",n.fillRect(0,362,e,150);for(let r=0;r<2;r++)ft(n,24+r*256,384,208,104,8),nt(n,"#98C1A8",3),na(n,24+r*256,384,208,104,5);n.fillStyle="#9A653D",n.fillRect(0,512,e,28),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(0,512,e,4),n.strokeStyle=ea,n.lineWidth=3,n.beginPath(),n.moveTo(0,361),n.lineTo(e,361),n.moveTo(0,512),n.lineTo(e,512),n.stroke()},!0),hx=(n,e)=>Nt(264,640,(t,i,s)=>{let r=t.createLinearGradient(0,0,i,s);r.addColorStop(0,n),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,i,s),t.fillStyle="rgba(255,255,255,.22)",t.fillRect(0,0,i,34),ft(t,16,44,i-32,s-70,10),nt(t,"rgba(0,0,0,.09)",3),na(t,16,44,i-32,s-70,5);for(let a=0;a<5;a++)ft(t,46,66+a*17,i-92,7,3),t.fillStyle="rgba(60,40,50,.42)",t.fill();ft(t,78,252,108,42,6),nt(t,"#FFF9F0",2.5),t.fillStyle="#6d5a5f",t.font="700 26px 'Trebuchet MS',sans-serif",t.textAlign="center",t.fillText(String(100+e),132,282),ft(t,i-62,330,18,74,8),nt(t,"#EAB94E",2.5),e%2===0&&(t.beginPath(),t.arc(70,372,16,0,7),nt(t,["#F28F7E","#EAB94E","#B8A8DA"][e%3],2.5));for(let a=0;a<4;a++)ft(t,46,s-96+a*12,i-92,5,2),t.fillStyle="rgba(60,40,50,.3)",t.fill();t.strokeStyle=ea,t.lineWidth=6,t.strokeRect(0,0,i,s)}),gc=n=>Nt(320,576,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s of[10,168])ft(e,s+14,84,118,150,8),nt(e,"#A9DDF2",3),ft(e,s+24,96,30,120,6),e.fillStyle="rgba(255,255,255,.6)",e.fill(),ft(e,s+10,280,126,200,8),nt(e,"rgba(0,0,0,.12)",3),na(e,s+10,280,126,200,5);e.fillStyle="rgba(0,0,0,.22)",e.fillRect(150,0,20,i),e.fillStyle="#EAB94E",e.fillRect(0,i-44,t,44),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(0,i-44,t,6);for(let s of[128,192])e.beginPath(),e.arc(s,330,9,0,7),nt(e,"#EAB94E",2.5);e.strokeStyle=ea,e.lineWidth=6,e.strokeRect(0,0,t,i),e.beginPath(),e.moveTo(160,0),e.lineTo(160,i),e.stroke()}),yc=(n,e,t="#FFF9F0")=>Nt(512,128,(i,s,r)=>{ft(i,8,22,s-16,r-30,22),nt(i,e,5),ft(i,22,34,s-44,r-54,14),i.fillStyle="rgba(255,255,255,.28)",i.fill(),i.fillStyle=t,i.font="800 58px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,s/2,r/2+4),i.strokeStyle=ea,i.lineWidth=4;for(let a of[80,s-80])i.beginPath(),i.moveTo(a,0),i.lineTo(a,24),i.stroke()}),Ys=()=>Nt(320,400,(n,e,t)=>{ft(n,10,10,e-20,t-46,14),nt(n,"#FFF9F0",5);let i=n.createLinearGradient(0,40,0,250);i.addColorStop(0,"#A9DDF2"),i.addColorStop(1,"#E9F7FC"),ft(n,40,40,e-80,230,6),n.fillStyle=i,n.fill(),ta(n,3),n.beginPath(),n.arc(220,96,26,0,7),nt(n,"#F8D977",3),n.beginPath(),n.moveTo(44,260),n.lineTo(110,170),n.lineTo(170,260),n.closePath(),nt(n,"#88B89A",3),n.beginPath(),n.moveTo(120,260),n.lineTo(210,150),n.lineTo(276,260),n.closePath(),nt(n,"#5E9C72",3),n.strokeStyle="#FFF9F0",n.lineWidth=9,n.beginPath(),n.moveTo(e/2,40),n.lineTo(e/2,270),n.moveTo(40,155),n.lineTo(e-40,155),n.stroke(),ft(n,0,t-60,e,26,8),nt(n,"#F1C887",4);for(let s of[-1,1]){let r=s<0?16:e-16;n.beginPath(),n.moveTo(r,14),n.quadraticCurveTo(r+s*-50,90,r+s*-34,250),n.lineTo(r+s*-34,300),n.lineTo(r,300),n.closePath(),nt(n,"#F28F7E",3.5)}}),zd=()=>Nt(384,256,(n,e,t)=>{ft(n,4,4,e-8,t-8,14),nt(n,"#C98B4D",6),ft(n,20,20,e-40,t-40,6),n.fillStyle="#E8C39A",n.fill(),ta(n,3);let i=["#FFF9F0","#F8D977","#8FC9E8","#A9DCC0","#EAA5B2","#B8A8DA"];[[36,34],[148,30],[256,40],[40,138],[156,130],[262,140]].forEach(([s,r],a)=>{n.save(),n.translate(s+40,r+40),n.rotate((gn(a,3)-.5)*.24),n.translate(-40,-40),n.shadowColor="rgba(50,30,40,.35)",n.shadowBlur=6,n.shadowOffsetY=4,ft(n,0,0,82,84,4),nt(n,i[a],3),n.shadowColor="transparent";for(let h=0;h<4;h++)n.fillStyle="rgba(60,50,60,.4)",n.fillRect(10,18+h*14,50+h%2*12,4);n.beginPath(),n.arc(41,6,6,0,7),nt(n,a&1?"#F28F7E":"#4F91C7",2),n.restore()})}),Hd=()=>Nt(320,300,(n,e,t)=>{ft(n,4,4,e-8,t-8,14),nt(n,"#C98B4D",6),ft(n,22,22,e-44,t-44,8),n.fillStyle="#DDF0F6",n.fill(),ta(n,3);for(let i of[120,226])ft(n,26,i,e-52,14,4),nt(n,"#DDAA68",3);[[70,120,1],[160,120,1.25],[250,120,.9],[110,226,1.1],[220,226,1]].forEach(([i,s,r])=>{n.beginPath(),n.moveTo(i-26*r,s-74*r),n.lineTo(i+26*r,s-74*r),n.lineTo(i+14*r,s-30*r),n.lineTo(i-14*r,s-30*r),n.closePath(),nt(n,"#EAB94E",3),ft(n,i-6*r,s-30*r,12*r,18*r,3),nt(n,"#EAB94E",3),ft(n,i-22*r,s-12*r,44*r,12*r,3),nt(n,"#9A653D",3)}),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=8,n.beginPath(),n.moveTo(44,40),n.lineTo(110,100),n.stroke()}),Vd=()=>Nt(256,256,n=>{n.beginPath(),n.arc(128,128,120,0,7),nt(n,"#F28F7E",8),n.beginPath(),n.arc(128,128,96,0,7),nt(n,"#FFF9F0",4);for(let e=0;e<12;e++){let t=e*Math.PI/6;n.strokeStyle="#4a3b3f",n.lineWidth=6,n.beginPath(),n.moveTo(128+Math.sin(t)*76,128-Math.cos(t)*76),n.lineTo(128+Math.sin(t)*90,128-Math.cos(t)*90),n.stroke()}n.strokeStyle="#4a3b3f",n.lineCap="round",n.lineWidth=9,n.beginPath(),n.moveTo(128,128),n.lineTo(160,88),n.stroke(),n.lineWidth=6,n.beginPath(),n.moveTo(128,128),n.lineTo(118,52),n.stroke(),n.beginPath(),n.arc(128,128,9,0,7),nt(n,"#F28F7E",3)}),xc=n=>Nt(256,320,(e,t,i)=>{if(ft(e,6,6,t-12,i-12,8),nt(e,["#FFFFFF","#FFF7D8","#E9F3FF"][n%3],5),n%3===0)e.fillStyle="#8FC9E8",e.fillRect(30,30,196,130),ta(e,3),e.beginPath(),e.ellipse(90,90,44,28,0,0,7),e.fillStyle="#88B89A",e.fill(),e.beginPath(),e.ellipse(170,108,32,20,0,0,7),e.fill(),e.fillStyle="#F28F7E",e.fillRect(30,190,120,20),e.fillStyle="#B8A8DA",e.fillRect(30,226,90,16);else if(n%3===1){e.beginPath();for(let s=0;s<10;s++){let r=s*Math.PI/5-Math.PI/2,a=s&1?34:88;e.lineTo(128+Math.cos(r)*a,130+Math.sin(r)*a)}e.closePath(),nt(e,"#EAB94E",4),e.fillStyle="#F28F7E",e.fillRect(40,250,176,22)}else e.fillStyle="#4F91C7",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillText("ABC",128,130),e.fillStyle="#F28F7E",e.fillRect(40,170,176,18),e.fillStyle="#88B89A",e.fillRect(40,208,120,16),e.fillStyle="#EAB94E",e.fillRect(40,246,150,16);e.beginPath(),e.arc(128,18,9,0,7),nt(e,"#F28F7E",3)});var Gd=()=>Nt(128,128,(n,e,t)=>{let i=n.createRadialGradient(64,64,4,64,64,62);i.addColorStop(0,"rgba(52,34,46,.55)"),i.addColorStop(1,"rgba(52,34,46,0)"),n.fillStyle=i,n.fillRect(0,0,e,t)}),_c=()=>Nt(64,64,(n,e,t)=>{n.filter="blur(5px)",n.fillStyle="rgba(50,30,40,.9)",n.fillRect(12,12,40,40)}),Wd=n=>Nt(256,256,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s=0;s<=t;s+=32)e.strokeStyle="rgba(60,40,50,.28)",e.lineWidth=4,e.beginPath(),e.moveTo(s,0),e.lineTo(s,i),e.stroke(),e.fillStyle="rgba(255,255,255,.16)",e.fillRect(s+6,0,10,i)}),Xd=n=>Nt(264*n.length,640,e=>{n.forEach((t,i)=>e.drawImage(hx(t,i*3+1).image,i*264,0))},!0),qd=()=>Nt(256,256,(n,e,t)=>{n.fillStyle="#B7D8A4",n.fillRect(0,0,e,t);for(let i=0;i<90;i++){let s=gn(i,5)*e,r=gn(i,9)*t,a=8+gn(i,2)*22;n.fillStyle=i&1?"rgba(255,255,255,.16)":"rgba(70,120,80,.10)",n.beginPath(),n.ellipse(s,r,a,a*.6,gn(i,4)*3,0,7),n.fill()}for(let i=0;i<140;i++){let s=gn(i,11)*e,r=gn(i,12)*t;n.strokeStyle=i&1?"rgba(255,255,255,.5)":"rgba(60,110,70,.35)",n.lineWidth=2,n.beginPath(),n.moveTo(s,r),n.lineTo(s+3,r-9),n.stroke()}},!0),sa=()=>Nt(256,256,(n,e,t)=>{n.fillStyle="#EBD9B8",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let r=s*64+(i&1?32:0)-32,a=i*64;for(let h of[0,e])ft(n,r+h+2,a+2,60,60,6),n.fillStyle=s+i&1?"#F2E3C6":"#E6D2AE",n.fill(),n.strokeStyle="rgba(150,115,80,.5)",n.lineWidth=3,n.stroke(),na(n,r+h+2,a+2,60,60,4)}for(let i=0;i<60;i++)n.fillStyle="rgba(255,255,255,.35)",n.fillRect(gn(i,3)*e,gn(i,8)*t,2.4,2.4)},!0),$d=(n,e,t="#FFF9F0")=>Nt(768,576,(i,s,r)=>{i.fillStyle="#F4EBDB",i.fillRect(0,0,s,r),ft(i,22,22,s-44,r-44,36),nt(i,e,8),ft(i,52,52,s-104,r-104,24),i.fillStyle="rgba(255,255,255,.22)",i.fill();for(let a=0;a<6;a++)i.fillStyle="rgba(255,255,255,.18)",i.fillRect(70+a*112,70,44,r-140);i.fillStyle=t,i.font="800 140px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.strokeStyle="rgba(70,50,60,.35)",i.lineWidth=12,i.strokeText(n,s/2,r/2+6),i.fillText(n,s/2,r/2+6),na(i,22,22,s-44,r-44,7)}),vc=n=>Nt(1024,160,(e,t,i)=>{ft(e,8,10,t-16,i-20,22),nt(e,"#F28F7E",6),ft(e,22,24,t-44,i-48,14),e.fillStyle="rgba(255,255,255,.2)",e.fill(),e.fillStyle="#FFF9F0",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(n,t/2,i/2+4);for(let s of[60,t-60]){e.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,h=r&1?9:22;e.lineTo(s+Math.cos(a)*h,i/2+Math.sin(a)*h)}e.closePath(),nt(e,"#EAB94E",3)}});var bc=["#fde7d3","#fbdcc4","#f5cfa8","#f0c29b","#e3ad7f","#d9a074","#c58a5f","#a86f4f","#8d5a3e","#7a4a36","#5e3a2b","#4a2e24"],ji=["#2b2b33","#3a2a30","#5a3a35","#694a38","#9a653d","#b5563e","#c9773e","#e0b04e","#f1d98a","#d9d4cc","#8c8c96","#4F91C7","#b8a8da","#e8789a","#5e9c72","#e07a66"],Sc=["#3a2a30","#5a3a2a","#8a6a3a","#c98a3a","#4f8a5e","#4f91c7","#7a8794","#8173ae"],Qt=["#4f91c7","#326c9e","#8fc9e8","#88b89a","#5e9c72","#a9dcc0","#eab94e","#f8d977","#f6b294","#f28f7e","#d9564a","#eaa5b2","#b8a8da","#8173ae","#c98569","#9a653d","#fff6ea","#9da7aa","#4a3b3f","#2b3a55"],Mc=["#fbf6ee","#313a3f","#d9564a","#4f91c7","#eab94e","#88b89a","#9a653d","#b8a8da"],yn=(...n)=>n.map(([e,t])=>({id:e,label:t})),aa={hairStyle:yn(["crop","Short crop"],["buzz","Buzz cut"],["undercut","Undercut"],["spiky","Spiky"],["messy","Messy"],["sidebang","Side bangs"],["curtains","Curtains"],["pixie","Pixie"],["bob","Bob"],["long","Long"],["wavy","Wavy long"],["curly","Curly puffs"],["afro","Afro"],["pony","Ponytail"],["pigtails","Pigtails"],["twinbuns","Twin buns"],["bun","Bun"],["topknot","Top knot"],["braids","Braids"]),eyeShape:yn(["round","Round"],["oval","Oval"],["wide","Wide"],["sleepy","Sleepy"],["happy","Happy"],["lash","Lashes"]),brow:yn(["soft","Soft"],["thick","Thick"],["thin","Thin"],["arch","Arched"],["none","None"]),mouthStyle:yn(["smile","Smile"],["grin","Grin"],["smirk","Smirk"],["flat","Calm"],["o","Surprised"],["cat","Cat"]),glasses:yn(["none","None"],["round","Round"],["square","Square"],["cat","Cat-eye"],["half","Half-rim"],["sun","Sunglasses"]),hat:yn(["none","None"],["cap","Cap"],["beanie","Beanie"],["bucket","Bucket hat"],["beret","Beret"],["headband","Headband"],["bow","Bow"],["flower","Flower"],["crown","Crown"],["headphones","Headphones"],["catears","Cat ears"]),top:yn(["tee","T-shirt"],["hoodie","Hoodie"],["sweater","Sweater"],["jersey","Jersey"],["blazer","Blazer"],["dress","Dress"],["overalls","Overalls"],["vest","Vest"],["tank","Tank top"]),pattern:yn(["solid","Solid"],["stripes","Stripes"],["dots","Dots"],["plaid","Plaid"],["hearts","Hearts"],["stars","Stars"]),bottom:yn(["pants","Pants"],["joggers","Joggers"],["shorts","Shorts"],["skirt","Skirt"]),shoeStyle:yn(["sneaker","Sneakers"],["boot","Boots"],["sandal","Sandals"],["plain","Plain shoes"]),packStyle:yn(["pack","Backpack"],["messenger","Messenger bag"],["mini","Mini pack"],["none","No bag"]),build:yn(["slim","Slim"],["regular","Regular"],["sturdy","Sturdy"]),age:yn(["k2","Grades K-2"],["g35","Grades 3-5"],["g68","Grades 6-8"],["hs","High school"])},Yd=["she/her","he/him","they/them"],Zs=()=>({name:"Student",pronouns:"they/them",age:"hs",skin:"#f0c29b",hairStyle:"bun",hair:"#5a3a35",hair2:null,eyeShape:"round",eyeColor:"#5a3a2a",brow:"soft",browColor:null,freckles:!1,mole:!1,nose:!1,blush:!0,mouthStyle:"smile",lip:"#8a4650",glasses:"round",glassColor:"#5b4048",hat:"none",hatColor:"#e07a66",earrings:null,scarf:null,badge:null,top:"hoodie",shirt:"#d9564a",shirt2:"#fff6ea",pattern:"solid",bottom:"pants",pants:"#4f5d75",shoeStyle:"sneaker",shoes:"#fbf6ee",packStyle:"pack",pack:"#8a5f6a",build:"regular",headSize:1});function Oi(n,e=11){return{id:e,age:n.age,skin:n.skin,hair:n.hair,hair2:n.hair2||void 0,style:n.hairStyle,shirt:n.shirt,shirt2:n.shirt2,top:n.top,pattern:n.pattern,bottom:n.bottom,pants:n.pants,eyeShape:n.eyeShape,eyeColor:n.eyeColor,brow:n.brow,browColor:n.browColor||void 0,freckles:n.freckles,mole:n.mole,nose:n.nose,blush:n.blush,mouthStyle:n.mouthStyle,lip:n.lip,glasses:n.glasses==="none"?!1:n.glasses,glassColor:n.glassColor,hat:n.hat==="none"?void 0:n.hat,hatColor:n.hatColor,earrings:n.earrings||void 0,scarf:n.scarf||void 0,badge:n.badge||void 0,shoeStyle:n.shoeStyle,shoes:n.shoes,packStyle:n.packStyle,pack:n.pack,build:n.build,headSize:n.headSize}}function fi(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var xt=(n,e)=>e[Math.floor(n()*e.length)],Rn=n=>aa[n].map(e=>e.id);function oa(n,e="hs"){let t=xt(n,Rn("top")),i=n()<.28?xt(n,Rn("hat").filter(r=>r!=="none")):"none",s=n()<.3?xt(n,Rn("glasses").filter(r=>r!=="none")):"none";return{...Zs(),age:e,name:"",skin:xt(n,bc),hairStyle:xt(n,Rn("hairStyle")),hair:xt(n,ji),hair2:n()<.16?xt(n,ji):null,eyeShape:xt(n,Rn("eyeShape")),eyeColor:xt(n,Sc),brow:xt(n,Rn("brow").filter(r=>r!=="none")),freckles:n()<.22,mole:n()<.1,nose:n()<.3,blush:n()<.8,mouthStyle:xt(n,Rn("mouthStyle")),glasses:s,glassColor:xt(n,["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da"]),hat:i,hatColor:xt(n,Qt),earrings:n()<.12?xt(n,["#eab94e","#fff6ea","#f28f7e"]):null,scarf:n()<.1?xt(n,Qt):null,badge:n()<.12?xt(n,Qt):null,top:t,shirt:xt(n,Qt),shirt2:xt(n,Qt),pattern:n()<.4?xt(n,Rn("pattern")):"solid",bottom:t==="dress"?"pants":xt(n,Rn("bottom")),pants:xt(n,Qt),shoeStyle:xt(n,Rn("shoeStyle")),shoes:xt(n,Mc),packStyle:xt(n,Rn("packStyle")),pack:xt(n,Qt),build:xt(n,Rn("build")),headSize:.94+n()*.12}}var Tc=n=>[n.skin,n.hairStyle,n.hair,n.top,n.shirt,n.pattern,n.hat,n.glasses,n.bottom,n.pants].join("|"),ux=["black","dark brown","chestnut","brown","caramel","auburn","ginger","blond","platinum","silver","grey","blue","lavender","pink","green","coral"],dx=["blue","navy","sky blue","sage green","green","mint","gold","yellow","peach","coral","red","pink","lilac","purple","terracotta","brown","cream","grey","charcoal","midnight blue"],fx=n=>ux[ji.indexOf(n)]??"colorful",ra=n=>dx[Qt.indexOf(n)]??"colorful";function la(n){let e=[],t=(i,s)=>aa[i].find(r=>r.id===s)?.label.toLowerCase()??s;return n.hat&&n.hat!=="none"&&e.push({key:"hat",phrase:`${ra(n.hatColor)} ${t("hat",n.hat)}`,noun:"hat"}),n.glasses&&n.glasses!=="none"&&e.push({key:"glasses",phrase:`${t("glasses",n.glasses)} glasses`,noun:"glasses"}),e.push({key:"hair",phrase:`${fx(n.hair)} ${t("hairStyle",n.hairStyle)} hair`,noun:"hair"}),e.push({key:"top",phrase:`${n.pattern!=="solid"?n.pattern+" ":""}${ra(n.shirt)} ${t("top",n.top)}`,noun:n.top}),n.packStyle!=="none"&&e.push({key:"pack",phrase:`${ra(n.pack)} ${t("packStyle",n.packStyle)}`,noun:"bag"}),n.freckles&&e.push({key:"freckles",phrase:"freckles",noun:"freckles"}),n.earrings&&e.push({key:"earrings",phrase:"earrings",noun:"earrings"}),n.scarf&&e.push({key:"scarf",phrase:"scarf",noun:"scarf"}),e.push({key:"shoes",phrase:`${ra(n.shoes)==="colorful"?"":ra(n.shoes)+" "}${t("shoeStyle",n.shoeStyle)}`.trim(),noun:"shoes"}),e}var px=["cheerful","shy","sporty","nerdy","artsy","funny","curious","bossy","dreamy","kind"],Zd=["Maya","Marcus","Priya","Leo","Amara","Diego","Sofia","Kenji","Zara","Eli","Nadia","Tobias","Imani","Mateo","Hana","Omar","Lucia","Jonah","Anika","Caleb","Mei","Ravi","Talia","Felix","Yara","Ben","Chloe","Dev","Esme","Finn","Grace","Hugo","Isla","Jamal","Keira","Liam","Mira","Noah","Olive","Pablo","Quinn","Rosa","Sam","Tessa","Uma","Victor","Willa","Xavier","Yusuf","Zoe","Aiden","Bella","Cyrus","Daria","Emil","Farah","Gus","Harper"],Jd=["Chen","Reed","Patel","Okafor","Santos","Nguyen","Kim","Haddad","Rivera","Brooks","Ivanov","Tanaka","Mensah","Larsen","Cruz","Adeyemi","Fischer","Ibrahim","Kowalski","Lopez","Morales","Novak","Osei","Park","Quintero","Rossi","Singh","Torres","Underwood","Vega","Walker","Yamada","Zhang","Abbott","Bishop","Castillo","Dalton","Ellis","Foster","Grant"],Kd={young:["dinosaurs","building with blocks","drawing animals","jumping rope","bugs and butterflies","playing tag","stickers","toy trains","singing songs","baking cookies"],mid:["soccer","robotics club","drawing comics","chess","baking","birdwatching","skateboarding","minecraft builds","magic tricks","swimming","reading mysteries","playing violin","origami","space and rockets"],teen:["basketball","coding","photography","theater","poetry","painting","piano","track and field","debate","gardening","making music","volleyball","film editing","cooking"]},mx=["tacos","mac and cheese","pizza","fried rice","mango slices","pancakes","dumplings","hummus and pita","grilled cheese","pasta","chicken nuggets","cheeseburgers","sushi rolls","samosas","peanut butter sandwiches"],gx=["a dog named Biscuit","a cat named Pickles","a hamster named Nugget","two goldfish","a rabbit named Clover","a parrot named Mango","a turtle named Speedy","a gecko named Ziggy",null,null,null],yx=["become an astronaut","open a bakery","play pro soccer","write a graphic novel","be a marine biologist","build robots","become a teacher","direct movies","be a vet","design video games","be a chef","become a pilot","run for mayor","be a musician"],jd=["always hums while working","carries a tiny notebook everywhere","says 'for real though' a lot","collects interesting rocks","never leaves without a snack","talks to plants","draws doodles on everything","counts steps in the hallway","makes up nicknames","loves puns","gets the hiccups when nervous","is always five minutes early"],xx=["is secretly afraid of the dark","still sleeps with a stuffed bunny","writes songs nobody has heard","wants to try out for the school play but is nervous","can solve a Rubik's cube in under a minute","once got lost in the library for an hour","has a crush on someone in the art club","is saving up for a telescope","is learning a new language in secret","feels nervous about speaking in class"],Qd=["math","ela","science","history"],ef=["k2","g35","g68","hs","g35","g68","k2","hs","g68","g35"],_x=(n,e)=>n==="k2"?["K","1","2"][e%3]:n==="g35"?["3","4","5"][e%3]:n==="g68"?["6","7","8"][e%3]:n==="hs"?["9","10","11","12"][e%4]:"Staff",Pn=(n,e)=>e[Math.floor(n()*e.length)];function vx(n=48,e=20260930){let t=fi(e),i=new Set,s=new Set,r=[],a="",h="";for(let l=0;l<n;l++){let o=ef[l%ef.length],u,d=0;do u=oa(t,o),d++;while((i.has(Tc(u))||u.hairStyle===a||u.hair===h)&&d<60);i.add(Tc(u)),a=u.hairStyle,h=u.hair,(o==="k2"||o==="g35")&&(u.glasses=t()<.12?u.glasses:"none",u.top==="blazer"&&(u.top="hoodie"));let c=Zd[l%Zd.length],f=Pn(t,Jd),g=`${c} ${f}`;for(;s.has(g);)f=Pn(t,Jd),g=`${c} ${f}`;s.add(g),u.name=c;let _=o==="k2"||o==="g35"?"young":o==="g68"?"mid":"teen",p=Kd[_],m=[Pn(t,p)];for(;m.length<3;){let R=Pn(t,[...p,...Kd.mid]);m.includes(R)||m.push(R)}let T=Pn(t,Qd),A=Pn(t,Qd.filter(R=>R!==T)),v=px[(l*3+Math.floor(t()*10))%10],M=Math.floor(t()*4),E=_x(o,M);r.push({id:l,key:`n${l}`,name:g,first:c,role:"student",age:o,grade:E,spec:u,look:{...Oi(u,l),tag:!1},personality:v,interests:m,favSubject:T,hardSubject:A,food:Pn(t,mx),pet:Pn(t,gx),dream:Pn(t,yx),quirk:Pn(t,jd),secret:Pn(t,xx),bestFriend:(l+1+Math.floor(t()*5))%n,rival:t()<.3?(l+7+Math.floor(t()*9))%n:null,bio:`${c} is in grade ${E}, loves ${m[0]} and ${m[1]}, and ${Pn(t,jd)}.`})}for(let l of r)l.bestFriend===l.id&&(l.bestFriend=(l.id+1)%n);return r}var Ks=vx(56),js=n=>Ks[n]??xn.find(e=>e.id===n),bx=n=>({...oa(fi(n.name?.length??5),"adult"),...n});function Js(n,e,t,i,s,r,a={}){let h=bx({name:e.split(" ").pop(),age:"adult",...s}),l=e.split(" ").pop();return{id:n,key:`s${n}`,name:e,first:l,role:"staff",title:t,age:"adult",grade:"Staff",spec:h,look:{...Oi(h,n),tag:!1},personality:r,interests:["helping students","coffee","crossword puzzles"],favSubject:i??"history",hardSubject:"math",food:"a good salad",pet:null,dream:"see every student find something they love",quirk:"keeps spare pencils in every pocket",secret:"still has their own first-grade report card",bestFriend:0,rival:null,bio:`${e} is ${t}.`,...a}}var xn=[Js(100,"Mr. Okafor","the hall monitor",null,{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"crop",top:"vest",shirt:"#c98569",shirt2:"#fff6ea",bottom:"pants",pants:"#2b3a55",hat:"none",glasses:"none",packStyle:"none",brow:"thick",mouthStyle:"smile"},"kind"),Js(101,"Ms. Alvarez","a teacher on hall duty","ela",{skin:"#f0c29b",hair:"#b5563e",hairStyle:"bun",top:"sweater",shirt:"#8173ae",glasses:"cat",packStyle:"messenger",pack:"#9a653d",bottom:"skirt",pants:"#4a3b3f",earrings:"#eab94e"},"cheerful"),Js(110,"Ms. Keisha Brown","the math teacher","math",{skin:"#a86f4f",hair:"#2b2b33",hairStyle:"curly",top:"blazer",shirt:"#f6b294",shirt2:"#fff6ea",glasses:"none",packStyle:"none",bottom:"pants",pants:"#4a3b3f"},"nerdy"),Js(111,"Mr. James Lee","the English teacher","ela",{skin:"#d9a074",hair:"#694a38",hairStyle:"crop",top:"sweater",shirt:"#8fc9e8",glasses:"round",packStyle:"none",bottom:"pants",pants:"#5b6b8c"},"dreamy"),Js(112,"Mr. Jamal Carter","the science teacher","science",{skin:"#7a4a36",hair:"#3a2a30",hairStyle:"afro",top:"tee",shirt:"#a9dcc0",pattern:"solid",glasses:"none",packStyle:"none",bottom:"pants",pants:"#5f7a68"},"curious"),Js(113,"Mr. Marcus Reed","the history teacher","history",{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"buzz",top:"blazer",shirt:"#c98569",glasses:"square",packStyle:"none",bottom:"pants",pants:"#2b3a55",brow:"thick"},"funny")],Sx={math:xn[2],ela:xn[3],science:xn[4],history:xn[5]},tf=24;var Ec="unify.social.v1",ca=()=>new Date().toISOString().slice(0,10),Mx=()=>({met:!1,fr:0,talks:0,lastDay:"",lastAt:0,topics:[],facts:{},log:[],quiz:{right:0,total:0},mood:0,helped:0,hurt:0,classNotes:[],overheard:[],seenInClass:0,called:0}),Rl=()=>({v:1,mem:{},profile:{name:"",avatar:Zs(),facts:{},stats:{talks:0,quizRight:0,quizTotal:0,hands:0},created:Date.now(),hasAvatar:!1}}),_n=Rl(),nf=0,Qs=new Set;function sf(){try{let n=JSON.parse(localStorage.getItem(Ec)||"null");n&&n.v===1&&(_n={...Rl(),...n,profile:{...Rl().profile,...n.profile}},_n.profile.avatar={...Zs(),..._n.profile.avatar||{}})}catch{}}function ha(){clearTimeout(nf),nf=setTimeout(()=>{try{localStorage.setItem(Ec,JSON.stringify(_n))}catch{}},120)}sf();try{addEventListener("storage",n=>{n.key===Ec&&(sf(),Qs.forEach(e=>e()))})}catch{}var Ce={get profile(){return _n.profile},setProfile(n){_n.profile={..._n.profile,...n},ha(),Qs.forEach(e=>e())},learn(n,e){_n.profile.facts[n]=e,ha()},mem(n){let e=String(n);return _n.mem[e]??(_n.mem[e]=Mx())},peek(n){return _n.mem[String(n)]},edit(n,e){e(Ce.mem(n)),ha(),Qs.forEach(t=>t())},friends(){return Object.entries(_n.mem).filter(([,n])=>n.met).map(([n,e])=>({id:n,mem:e})).sort((n,e)=>e.mem.fr-n.mem.fr)},onChange(n){return Qs.add(n),()=>Qs.delete(n)},reset(){_n=Rl(),ha(),Qs.forEach(n=>n())},save:ha},Qi=n=>n>=85?"best friend":n>=60?"close friend":n>=30?"friend":n>=10?"classmate":"new face",wc=n=>Math.min(5,Math.ceil(n/20));function es(n,e,t){Ce.edit(n,i=>{i.log.push({who:e,text:t.slice(0,220),t:Date.now()}),i.log.length>24&&i.log.splice(0,i.log.length-24)})}function Ac(n,e){Ce.edit(n,t=>{t.fr=Math.max(0,Math.min(100,t.fr+e)),e<0&&t.hurt++})}var rf=1.75/45,In=(n,e)=>new L(n-56/2,0,e-44/2);var Tx=["#7fb2d6","#f2a79b","#9fd0b0","#f4d488"],ts={math:"#4F91C7",ela:"#88B89A",science:"#8FC9E8",history:"#C98569"},Pl={math:"MATH",ela:"ELA",science:"SCIENCE",history:"HISTORY"};var vn=(n,e)=>{let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},af=[{key:"math",label:"Math",color:ts.math},{key:"ela",label:"ELA",color:ts.ela},{key:"science",label:"Science",color:ts.science},{key:"history",label:"History",color:ts.history},{key:"news",label:"Newsroom",color:"#B8A8DA"},{key:"plaza",label:"Plaza fountain",color:"#EAB94E"},{key:"entrance",label:"Main entrance",color:"#F28F7E"}],Il=class{constructor(e){this.host=e;this.scene=new vr;this.camera=new Zt(48,1,.1,260);this.clock=0;this.idx=-1;this.speed=1;this.view="close";this.tint=[255,255,255,0];this.students=[];this.inDoor=null;this.onToast=()=>{};this.keys={};this.input={x:0,y:0};this.rotate=0;this.inputLocked=!1;this.onTick=[];this.onTap=()=>{};this.yaw=0;this.pitch=.62;this.zoom=1;this.fpitch=0;this.navLabel="";this.nav=null;this.walkers=[];this.open=[];this.occl=[];this.shadowR=0;this.texCache=new Map;this.camPos=new L(0,6,8);this.camLook=new L(0,1,-4);this.last=performance.now();this.t=0;this.blobTex=Gd();this.ray=new Ur;this.lastClockMsg=0;this.frame=e=>{let t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.t+=t;let i=t*this.speed;this.clock+=i,this.clock>=cc&&(this.clock-=cc),parent!==window&&e-this.lastClockMsg>1e3&&(this.lastClockMsg=e,parent.postMessage({type:"unify:clock",minutes:uc+Math.floor(this.clock)},"*"));let s=Ld(this.clock);s!==this.idx&&(this.idx=s,this.enterPeriod(s));let r=this.inputLocked?0:(this.keys.e?1:0)-(this.keys.q?1:0)+this.rotate;r&&(this.yaw+=r*1.9*t);let a=new L;this.camera.getWorldDirection(a),a.y=0,a.lengthSq()<1e-4&&a.set(0,0,-1),a.normalize();for(let o of this.students)if(o.pending&&(o.pending.delay-=i,o.pending.delay<=0&&this.begin(o)),!o.hidden){if(o.talking){o.moving=!1,o.frame=0;continue}if(o.fade<1&&(o.fade=Math.min(1,o.fade+i*3),o.mat.opacity=o.fade),o.path.length){let u=o.path[0],d=u.clone().sub(o.pos);d.y=0;let c=d.length(),f=o.speed*i;c<=f?(o.pos.copy(u),o.path.shift()):(d.normalize(),o.pos.addScaledVector(d,f),o.dir=this.dirFrom(d,a,o.dir)),o.moving=!0,o.frame=1+Math.floor(this.t*o.speed*3.4)%4,!o.path.length&&o.hideOnArrive&&(o.hidden=!0,o.sprite.visible=!1,o.blob.visible=!1,o.moving=!1)}else o.moving=!1,o.frame=0}this.patrol(i,a);for(let o of this.onTick)o(t,i);this.movePlayer(t,a),this.updateCamera(t),this.fadeOccluders(t),this.player.sprite.visible=this.view!=="first",this.player.blob.visible=this.view!=="first";for(let o of[...this.students,this.player,this.monitor,this.teacher])if(!o.hidden){if(o.sprite.position.copy(o.pos),this.view==="first"&&o!==this.player){let u=o.pos.distanceTo(this.camera.position)<1.1;o.sprite.visible=!u,o.blob.visible=!u}else o!==this.player&&(o.sprite.visible=!0,o.blob.visible=!0);o.blob.position.set(o.pos.x,.02,o.pos.z),this.setFrame(o,o.dir,o.frame)}let h=Vn[this.idx].tint,l=Math.min(1,t*1.5);for(let o=0;o<4;o++)this.tint[o]+=(h[o]-this.tint[o])*l;this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.frame)};let t=this.renderer=new Tl({antialias:!0,alpha:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Po,t.outputColorSpace=Ot,e.appendChild(t.domElement),this.scene.background=new We("#EADFCB"),this.scene.fog=new _r("#EADFCB",80,190),this.reachable(),this.buildLights(),this.buildCampus(),this.buildOutside(),this.buildPeople(),addEventListener("resize",()=>this.resize()),this.resize(),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&(this.keys[i.key.toLowerCase()]=!0,i.key.startsWith("Arrow")&&i.preventDefault())}),addEventListener("keyup",i=>{this.keys[i.key.toLowerCase()]=!1}),addEventListener("blur",()=>{this.keys={}}),addEventListener("message",i=>{let s=i.data;s&&s.type==="unify:exit"&&this.placeAtDoor(s.room)}),this.bindPointer(t.domElement),this.setView("close",!0),requestAnimationFrame(this.frame)}resize(){let e=this.host.clientWidth||innerWidth,t=this.host.clientHeight||innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.fov=e/t<.8?62:48,this.camera.updateProjectionMatrix()}tex(e,t){let i=this.texCache.get(e);return i||(i=t(),this.texCache.set(e,i)),i}rep(e,t,i,s=1){let r=`${e}@${i.toFixed(2)}x${s.toFixed(2)}`,a=this.texCache.get(r);return a||(a=this.tex(e,t).clone(),a.repeat.set(i,s),a.needsUpdate=!0,this.texCache.set(r,a)),a}bindPointer(e){let t=!1,i=0,s=0,r=0,a=0,h=0;e.addEventListener("pointerdown",l=>{t=!0,i=r=l.clientX,s=a=l.clientY,h=performance.now(),e.setPointerCapture(l.pointerId)}),e.addEventListener("pointermove",l=>{if(!t)return;let o=l.clientX-i,u=l.clientY-s;i=l.clientX,s=l.clientY,this.yaw-=o*.0065,this.view==="first"?this.fpitch=Math.max(-.6,Math.min(.6,this.fpitch-u*.004)):this.pitch=Math.max(.2,Math.min(1.3,this.pitch+u*.004))}),e.addEventListener("pointerup",l=>{let o=t;t=!1,o&&Math.hypot(l.clientX-r,l.clientY-a)<7&&performance.now()-h<500&&this.handleTap(l.clientX,l.clientY)}),e.addEventListener("pointercancel",()=>{t=!1}),e.addEventListener("wheel",l=>{l.preventDefault(),this.zoom=Math.max(.45,Math.min(1.6,this.zoom*Math.exp(l.deltaY*.0012)))},{passive:!1})}buildLights(){this.scene.add(new Dr(16774888,14996404,2.1));let e=this.sun=new Fr(16773336,1.25);e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=70,e.shadow.bias=-4e-4,e.shadow.radius=5,this.scene.add(e,e.target)}std(e,t="#ffffff"){return new Kt({map:e,color:t,roughness:.95,metalness:0})}plain(e){return new Kt({color:e,roughness:1})}box(e,t,i,s,r,a,h,l={}){let{outline:o=!0,occlude:u=!1,shadow:d=!0}=l;u&&(s=(Array.isArray(s)?s:[s]).map(f=>f.clone()));let c=new He(new jn(e,t,i),s);return c.position.set(r,a,h),c.castShadow=d,c.receiveShadow=!0,this.scene.add(c),o&&c.add(new Wi(new qi(c.geometry),new Ti({color:7166559,transparent:!0,opacity:.55}))),u&&this.occl.push({mats:Array.isArray(s)?s:[s],box:new Mn().setFromCenterAndSize(c.position,new L(e+.05,t,i+.05)),o:1}),c}card(e,t,i,s,r,a,h,l=!1){let o=new Jt,u=new He(new Gt(t*1.12,i*1.12),new fn({map:this.tex("cardsh",()=>_c()),transparent:!0,opacity:.55,depthWrite:!1}));u.position.set(0,-.05,0);let d=new He(new Gt(t,i),l?new fn({map:e,transparent:!0}):new Kt({map:e,roughness:1,transparent:!0}));return d.position.z=.025,d.receiveShadow=!0,o.add(u,d),o.position.set(s,r,a),o.rotation.y=h,this.scene.add(o),d}flat(e,t,i,s,r,a=.012,h=0){let l=new Gt(t,i);l.rotateX(-Math.PI/2),h&&l.rotateY(h);let o=new He(l,this.std(e));return o.position.set(s,a,r),o.receiveShadow=!0,this.scene.add(o),o}rotOf(e){return e==="S"?0:e==="N"?Math.PI:e==="E"?Math.PI/2:-Math.PI/2}onFace(e,t,i,s){return t==="S"?{x:e.x+e.w*i-56/2,z:e.y+e.h-44/2+s}:t==="N"?{x:e.x+e.w*i-56/2,z:e.y-44/2-s}:t==="E"?{x:e.x+e.w-56/2+s,z:e.y+e.h*i-44/2}:{x:e.x-56/2-s,z:e.y+e.h*i-44/2}}buildCampus(){let e=this.scene,t=this.plain("#F7ECD6"),i=this.plain("#D8C6A4"),s=new He(new Gt(63,51),new fn({map:this.tex("dio",()=>_c()),transparent:!0,opacity:.7,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(.4,-.02,.4),e.add(s);let r=new He(new Gt(56,44),this.std(this.rep("floor",()=>kd(),56/2,44/2)));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),this.flat(this.rep("stoneA",()=>sa(),46/4,10/4),46,10,0,0,.012),this.flat(this.rep("stoneB",()=>sa(),14/4,34/4),14,34,0,0,.012);let a=(d,c,f,g)=>this.flat(this.rep("rug",()=>Bd(),1,d/4),2,d,c,f,.014,g?Math.PI/2:0);a(52,0,-44/2+2.5,!0),a(40,-56/2+2.5,0,!1),a(40,56/2-2.5,0,!1),a(48/2-1,-56/4-2.5,44/2-2.5,!0),a(48/2-1,56/4+2.5,44/2-2.5,!0);let h=(d,c,f,g,_)=>{let p=this.std(this.rep("wall",()=>ia(),d/4)),m=[i,i,t,i,i,i];m[_]=p,this.box(g?d:.3,4.2,g?.3:d,m,c,4.2/2,f,{outline:!1,occlude:!0})};h(56+.6,0,-44/2-.15,!0,4),h(44,-56/2-.15,0,!1,0),h(44,56/2+.15,0,!1,1);let l=Cn.gap.x0-56/2,o=Cn.gap.x1-56/2,u=44/2+.15;h(l+56/2+.3,(-56/2-.3+l)/2,u,!0,5),h(56/2+.3-o,(o+56/2+.3)/2,u,!0,5),this.box(o-l,.9,.3,[i,i,t,i,i,this.std(this.rep("wall",()=>ia(),2))],(l+o)/2,4.2-.45,u,{outline:!1}),this.card(this.tex("banner",()=>vc("UNIFY ACADEMY")),7.6,1.2,(l+o)/2,3.2,44/2-.05,Math.PI,!0),this.card(this.tex("exit",()=>vc("WELCOME")),5.2,.8,(l+o)/2,3.2,44/2+.35,0,!0),this.card(this.tex("clock",()=>Vd()),1.1,1.1,-9,3.05,-44/2+.17,0);for(let d=4;d<53;d+=6)Math.abs(d-56/2)>1.5&&this.card(this.tex("win",()=>Ys()),1.5,1.9,d-56/2,3.05,-44/2+.17,0);for(let d=4;d<53;d+=6)(d<Cn.gap.x0-2||d>Cn.gap.x1+2)&&this.card(this.tex("win",()=>Ys()),1.5,1.9,d-56/2,3.05,44/2-.17,Math.PI);for(let d=5;d<41;d+=6)this.card(this.tex("win",()=>Ys()),1.5,1.9,-56/2+.17,3.05,d-44/2,Math.PI/2),this.card(this.tex("win",()=>Ys()),1.5,1.9,56/2-.17,3.05,d-44/2,-Math.PI/2);{let d=Ui.cx-56/2,c=-44/2;this.box(2.3,3.5,.18,this.plain("#9A653D"),d,1.75,c+.09);let f=new He(new Gt(1.95,3.15),new Kt({map:this.tex("door-news",()=>gc("#B8A8DA")),roughness:.95}));f.position.set(d,1.6,c+.19),f.receiveShadow=!0,e.add(f);let g=new He(new Gt(1.9,.48),new fn({map:this.tex("sign-news",()=>yc("NEWSROOM","#8173AE")),transparent:!0}));g.position.set(d,3.8,c+.2),e.add(g)}this.bunting([[-56/2+.06,-44/2+.06,56/2-.06,-44/2+.06],[-56/2+.06,-44/2+.06,-56/2+.06,44/2-.06],[56/2-.06,-44/2+.06,56/2-.06,44/2-.06]],3.95);for(let d of Qr){let c=d.rect,f=d.subject,g=ii.find(V=>V.subject===f),_=this.std(this.rep("wall",()=>ia(),c.h/4)),p=this.std(this.rep("wall",()=>ia(),c.w/4)),m=this.std(this.tex(`roof-${f}`,()=>$d(Pl[f],ts[f],f==="science"?"#3b3340":"#FFF9F0")));this.box(c.w,4.2,c.h,[_,_,m,i,p,p],c.x+c.w/2-56/2,4.2/2,c.y+c.h/2-44/2,{occlude:!0});let T=["N","S","E","W"];for(let V of T){let Z=V==="N"||V==="S"?c.w:c.h,N=Math.round(Z/4.6);for(let ie=0;ie<N;ie++){let G=(ie+.5)/N,K=this.onFace(c,V,G,.17),B=V==="N"||V==="S"?c.x+c.w*G:g.cx;V===g.face&&Math.abs(B-g.cx)<2.6||this.card(this.tex("win",()=>Ys()),1.5,1.9,K.x,3.05,K.z,this.rotOf(V))}}let A=g.face,v=(V,Z)=>({p:this.onFace(c,A,(g.cx+V-c.x)/c.w,.17),i:Z}),M=v(-5.2,0),E=v(5.2,1),R=v(-3.4,2),y=v(3.4,3);this.card(this.tex(`po${M.i}`,()=>xc(M.i+(f==="ela"?1:0))),1,1.25,M.p.x,1.45,M.p.z,this.rotOf(A)),this.card(this.tex(`po${E.i}`,()=>xc(E.i+(f==="math"?1:0))),1,1.25,E.p.x,1.45,E.p.z,this.rotOf(A)),this.card(this.tex("board",()=>zd()),1.6,1.1,R.p.x,2.2,R.p.z,this.rotOf(A)),this.card(this.tex("trophy",()=>Hd()),1.1,1,y.p.x,2.2,y.p.z,this.rotOf(A));let w=A==="S"?1:-1,P=g.cy-44/2,S=g.cx-56/2,I=w>0?0:Math.PI;this.box(2.3,3.5,.18,this.plain("#9A653D"),S,1.75,P+w*.09,{occlude:!1});let k=new He(new Gt(1.95,3.15),new Kt({map:this.tex(`door-${f}`,()=>gc(ts[f])),roughness:.95}));k.position.set(S,1.6,P+w*.19),k.rotation.y=I,k.receiveShadow=!0,e.add(k);let D=new He(new Gt(1.9,.48),new fn({map:this.tex(`sign-${f}`,()=>yc(Pl[f],ts[f],f==="science"?"#3b3340":"#FFF9F0")),transparent:!0}));D.position.set(S,3.8,P+w*.2),D.rotation.y=I,e.add(D)}pc.forEach((d,c)=>{let f=d.rect,g=d.face==="N"||d.face==="S"?f.w:f.h,_=this.std(this.rep("lockers",()=>Xd(Tx),g/4)),p=this.plain("#9db8c8"),m=this.plain("#FFF6E6"),T=[p,p,m,p,p,p];T[{E:0,W:1,S:4,N:5}[d.face]]=_,this.box(f.w,2.3,f.h,T,f.x+f.w/2-56/2,1.15,f.y+f.h/2-44/2,{occlude:!0})});for(let d of mc){let c=d.x-56/2,f=d.y-44/2;d.kind==="tree"?this.tree(c,f):d.kind==="fountain"?this.fountain(c,f):d.kind==="table"?this.table(c,f):d.kind==="bench"?this.bench(c,f,d.rot??0):d.kind==="planter"?this.plant(c,f):this.lamp(c,f,wx(d.x+d.y))}}tree(e,t){let i=new Jt,s=new He(new zt(.62,.5,.5,10),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=new He(new zt(.1,.16,1.6,6),this.plain("#9A653D"));r.position.y=1.2,r.castShadow=!0,i.add(r),[[0,2.5,0,1.05,"#5E9C72"],[.45,2,.2,.7,"#88B89A"],[-.4,2.15,-.25,.75,"#3F7655"]].forEach(([a,h,l,o,u])=>{let d=new He(new Ds(o,0),new Kt({color:u,roughness:1,flatShading:!0}));d.position.set(a,h,l),d.castShadow=!0,i.add(d)}),i.position.set(e,0,t),this.scene.add(i)}fountain(e,t){let i=new Jt,s=this.plain("#F7ECD6"),r=new He(new zt(2.25,2.35,.6,28),s);r.position.y=.3,r.castShadow=r.receiveShadow=!0,i.add(r),r.add(new Wi(new qi(r.geometry,40),new Ti({color:7166559,transparent:!0,opacity:.5})));let a=new He(new zt(1.95,1.95,.05,28),new Kt({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25,roughness:.4}));a.position.y=.6,i.add(a);let h=new He(new zt(.3,.42,1.5,14),s);h.position.y=1.2,h.castShadow=!0,i.add(h);let l=new He(new zt(.95,.5,.3,20),s);l.position.y=1.9,l.castShadow=!0,i.add(l);let o=new He(new zt(.8,.8,.05,20),new Kt({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25}));o.position.y=2.05,i.add(o);let u=new He(new wi(.22,.9,10),new Kt({color:"#DDF3FB",emissive:"#DDF3FB",emissiveIntensity:.4,transparent:!0,opacity:.85}));u.position.y=2.55,i.add(u),i.position.set(e,0,t),this.scene.add(i)}table(e,t){let i=new Jt,s=new He(new zt(.8,.8,.08,20),this.plain("#F1C887"));s.position.y=.78,s.castShadow=s.receiveShadow=!0,i.add(s);let r=new He(new zt(.09,.14,.78,8),this.plain("#9A653D"));r.position.y=.39,i.add(r),["#F28F7E","#8FC9E8","#A9DCC0","#B8A8DA"].forEach((a,h)=>{let l=h/4*Math.PI*2+.4,o=new He(new zt(.22,.2,.46,10),this.plain(a));o.position.set(Math.cos(l)*1,.23,Math.sin(l)*1),o.castShadow=!0,i.add(o)}),i.position.set(e,0,t),this.scene.add(i)}bench(e,t,i){let s=new Jt;s.add(this.part(.62,.1,1.8,"#F1C887",0,.5,0)),s.add(this.part(.12,.45,1.7,"#9A653D",-.24,.25,0)),s.add(this.part(.1,.5,1.8,"#F28F7E",-.3,.8,0)),s.rotation.y=i,s.position.set(e,0,t),this.scene.add(s)}part(e,t,i,s,r,a,h){let l=new He(new jn(e,t,i),this.plain(s));return l.position.set(r,a,h),l.castShadow=!0,l.receiveShadow=!0,l}lamp(e,t,i){let s=new Jt,r=new He(new zt(.05,.07,3,6),this.plain("#9A653D"));r.position.y=1.5,r.castShadow=!0,s.add(r);let a=new He(new Pr(.34,18,12),new Kt({map:this.tex(`lan-${i}`,()=>Wd(i)),emissive:i,emissiveIntensity:.3,roughness:1}));a.scale.y=1.2,a.position.y=3.2,a.castShadow=!0,s.add(a),s.position.set(e,0,t),this.scene.add(s)}plant(e,t){let i=new Jt,s=new He(new zt(.5,.38,.5,14),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=["#5E9C72","#88B89A","#3F7655","#A9DCC0"];for(let a=0;a<12;a++){let h=a/12*Math.PI*2,l=new He(new wi(.11,1+a%3*.25,4),this.plain(r[a%4]));l.position.set(Math.cos(h)*.26,.95,Math.sin(h)*.26),l.rotation.set(Math.sin(h)*.5,0,-Math.cos(h)*.5),l.castShadow=!0,i.add(l)}i.position.set(e,0,t),this.scene.add(i)}bunting(e,t){let i=[15896446,15382862,9423336,11132096,12101850,15377842].map(h=>new We(h)),s=[],r=[];for(let[h,l,o,u]of e){let d=Math.hypot(o-h,u-l),c=Math.floor(d/.9),f=(o-h)/d,g=(u-l)/d;for(let _=0;_<c;_++){let p=.45+_*.9,m=h+f*p,T=l+g*p,A=i[_%6];s.push(m-f*.22,t,T-g*.22,m+f*.22,t,T+g*.22,m,t-.5,T);for(let v=0;v<3;v++)r.push(A.r,A.g,A.b)}}let a=new It;a.setAttribute("position",new lt(s,3)),a.setAttribute("color",new lt(r,3)),this.scene.add(new He(a,new fn({vertexColors:!0,side:Tn})))}buildOutside(){let e=this.scene,t=this.rep("grass",()=>qd(),60,60),i=new He(new Gt(480,480),this.std(t));i.rotation.x=-Math.PI/2,i.position.y=-.04,i.receiveShadow=!0,e.add(i),this.flat(this.rep("stoneP",()=>sa(),2,7),7.4,28,0,44/2+14,-.02);let s=new He(new Rr(9,40),this.std(this.rep("stoneD",()=>sa(),5,5)));s.rotation.x=-Math.PI/2,s.position.set(0,-.015,44/2+30),s.receiveShadow=!0,e.add(s);let r=[];for(let c=0;c<900&&r.length<190;c++){let f=(vn(c,1)-.5)*150,g=(vn(c,2)-.5)*140+8;Math.abs(f)<56/2+5&&Math.abs(g)<44/2+5||Math.abs(f)<6&&g>0||Math.hypot(f,g-(44/2+30))<11||r.push({x:f,z:g,s:.8+vn(c,3)*.9})}let a=new Is(new Ds(1.5,0),new Kt({roughness:1,flatShading:!0}),r.length),h=new Is(new zt(.16,.24,1.8,6),this.plain("#9A653D"),r.length),l=new st,o=["#5E9C72","#88B89A","#3F7655","#A9DCC0","#EAB94E","#F2A79B"];r.forEach((c,f)=>{l.compose(new L(c.x,2.7*c.s,c.z),new dn().setFromEuler(new kn(0,vn(f,5)*6,0)),new L(c.s,c.s*1.15,c.s)),a.setMatrixAt(f,l),a.setColorAt(f,new We(o[vn(f,6)<.12?4+(f&1):Math.floor(vn(f,7)*4)])),l.compose(new L(c.x,.9*c.s,c.z),new dn,new L(c.s,c.s,c.s)),h.setMatrixAt(f,l)}),a.castShadow=h.castShadow=!0,e.add(a,h);let u=["#F2A79B","#F4D488","#9FD0B0","#9CC3E0","#E8C39A","#C9B7E8"],d=["#C98569","#9A653D","#7C94B0","#B8604F"];for(let c=0;c<26;c++){let f=c/26*Math.PI*2+vn(c,8)*.2,g=78+vn(c,9)*18,_=Math.cos(f)*g*1.1,p=Math.sin(f)*g*.85+6;if(Math.abs(_)<8&&p>0)continue;let m=5+vn(c,10)*4,T=3.5+vn(c,11)*2.5,A=new Jt,v=new He(new jn(m,T,m*.9),this.plain(u[c%6]));v.position.y=T/2,v.castShadow=!0,A.add(v),v.add(new Wi(new qi(v.geometry),new Ti({color:7166559,transparent:!0,opacity:.45})));let M=new He(new wi(m*.82,T*.7,4),this.plain(d[c%4]));M.position.y=T+T*.35,M.rotation.y=Math.PI/4,M.castShadow=!0,A.add(M),A.position.set(_,0,p),A.rotation.y=vn(c,12)*6,e.add(A)}for(let c=0;c<14;c++){let f=c/14*Math.PI*2+.2,g=118+vn(c,13)*30,_=14+vn(c,14)*14,p=new He(new wi(_*1.5,_,6),new Kt({color:["#A9CDB8","#B7D8A4","#9CC3A8"][c%3],roughness:1,flatShading:!0}));p.position.set(Math.cos(f)*g*1.15,_/2-.5,Math.sin(f)*g*.9+6),e.add(p)}}makePerson(e,t,i=ni[t.age??"hs"]){let s=new Xi(Nd(t));s.colorSpace=Ot,s.repeat.set(1/Kr,1/Jr.length),s.anisotropy=4;let r=new Ps({map:s,transparent:!0}),a=new Tr(r);a.center.set(.5,fc/$s),a.scale.set(Zr/jr*rf*i,$s/jr*rf*i,1),this.scene.add(a);let h=new He(new Gt(1.1,.6),new fn({map:this.blobTex,transparent:!0,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.position.y=.02,this.scene.add(h),{id:e,look:t,sprite:a,mat:r,tex:s,blob:h,pos:new L,dir:0,frame:0,moving:!1}}reachable(){let e=new Set,t=[Cn.tile.y*56+Cn.tile.x];for(e.add(t[0]);t.length;){let i=t.pop(),s=i%56,r=Math.floor(i/56);for(let[a,h]of[[1,0],[-1,0],[0,1],[0,-1]]){let l=s+a,o=r+h,u=o*56+l;l<0||o<0||l>=56||o>=44||si[o][l]!=="."||e.has(u)||(e.add(u),t.push(u))}}this.open=[...e].map(i=>({x:i%56,y:Math.floor(i/56)})).filter(i=>i.y<42)}buildPeople(){let e=In(Cn.tile.x+.5,Cn.tile.y+.5);this.students=Ks.slice(0,tf).map((t,i)=>{let s=t.age,r=this.makePerson(t.id,t.look);r.pos.copy(e),r.sprite.visible=!1,r.blob.visible=!1,r.def=t;let a=ii[i%4];return Object.assign(r,{hidden:!0,path:[],speed:Fi(2.3,3.1)*(s==="k2"?.8:s==="g35"?.9:s==="g68"?.97:1),pending:null,lastDoor:{x:Math.floor(a.approach.x),y:Math.floor(a.approach.y)},hideOnArrive:!1,fade:1})}),this.player=this.makePerson(11,{...Oi(Ce.profile.avatar,11),tag:!0}),this.player.pos.copy(In(28,35)),this.monitor=this.makePerson(xn[0].id,xn[0].look),this.monitor.def=xn[0],this.monitor.pos.copy(In(10.5,18.5)),this.teacher=this.makePerson(xn[1].id,xn[1].look),this.teacher.def=xn[1],this.teacher.pos.copy(In(46.5,26.5)),this.walkers=[{p:this.monitor,stops:[[10,18],[46,18],[53,22],[46,26],[10,26],[2,22],[28,2]],path:[],leg:0,speed:1.15},{p:this.teacher,stops:[[46,26],[28,18],[10,26],[28,41],[53,30],[28,2],[2,10]],path:[],leg:0,speed:1}]}patrol(e,t){for(let i of this.walkers){let s=i.p;if(s.talking){s.moving=!1,s.frame=0;continue}if(!i.path.length){let o=Math.floor(s.pos.x+56/2),u=Math.floor(s.pos.z+44/2),[d,c]=i.stops[i.leg];i.leg=(i.leg+1)%i.stops.length,i.path=Gs(si,Math.max(0,Math.min(55,o)),Math.max(0,Math.min(43,u)),d,c).map(f=>In(f.x+.5,f.y+.5))}let r=i.path[0];if(!r){s.moving=!1,s.frame=0;continue}let a=r.clone().sub(s.pos);a.y=0;let h=a.length(),l=i.speed*e;h<=l?(s.pos.copy(r),i.path.shift()):(a.normalize(),s.pos.addScaledVector(a,l),s.dir=this.dirFrom(a,t,s.dir)),s.moving=!0,s.frame=1+Math.floor(this.t*5)%4}}setFrame(e,t,i){e.tex.offset.set(i/Kr,1-(t+1)/Jr.length)}faceDir(e,t){let i=new L;return this.camera.getWorldDirection(i),i.y=0,i.lengthSq()<1e-4&&i.set(0,0,-1),this.dirFrom(e,i.normalize(),t)}dirFrom(e,t,i){let s=e.x*t.x+e.z*t.z,r=e.x*-t.z+e.z*t.x;return Math.hypot(s,r)<.001?i:Math.abs(s)>=Math.abs(r)?s>0?1:0:r>0?3:2}persons(){return[...this.students.filter(e=>!e.hidden),this.monitor,this.teacher]}handleTap(e,t){let i=this.renderer.domElement.getBoundingClientRect(),s=new ze((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.ray.setFromCamera(s,this.camera);let r=this.persons(),a=this.ray.intersectObjects(r.map(o=>o.sprite).filter(o=>o.visible),!1),h=a.length?r.find(o=>o.sprite===a[0].object)??null:null;if(!h){let o=.85;for(let u of r){let d=u.pos.clone().setY(.8*ni[u.look.age??"hs"]+.2),c=this.ray.ray.distanceToPoint(d);c<o&&(o=c,h=u)}}if(h){this.onTap(h);return}this.onTap(null);let l=new L;this.view!=="first"&&this.ray.ray.intersectPlane(new un(new L(0,1,0),0),l)&&this.walkToPoint(l.x+56/2,l.z+44/2,"that spot")}walkToPoint(e,t,i="there"){if(this.inputLocked)return!1;let s=null,r=1e9,a=Math.floor(e),h=Math.floor(t);for(let l=-2;l<=2;l++)for(let o=-2;o<=2;o++){let u=a+o,d=h+l;if(u<0||d<0||u>=56||d>=44||si[d][u]!==".")continue;let c=Math.hypot(u+.5-e,d+.5-t);c<r&&(r=c,s={x:u,y:d})}return!s||r>2.2?!1:this.planNav(s.x+.5,s.y+.5,i,null)}setAvatar(e){let t=this.player,i=t.pos.clone();this.scene.remove(t.sprite,t.blob),t.tex.dispose(),t.mat.dispose(),this.player=this.makePerson(11,{...Oi(e,11),tag:!0}),this.player.pos.copy(i),this.player.dir=t.dir,this.player.def=void 0}placeAtDoor(e){let t=e==="news"?{approach:Ui.approach,subject:"news"}:ii.find(i=>i.subject===e)??ii[0];this.player.pos.copy(In(t.approach.x,t.approach.y)),this.inDoor=t.subject,this.nav=null,this.navLabel="",this.onToast("")}clear(e,t){let i=Math.ceil(e.distanceTo(t)/.25);for(let s=1;s<i;s++){let r=e.clone().lerp(t,s/i);if(Cl(r.x+56/2,r.z+44/2,.3))return!1}return!0}goTo(e){let t=ii.find(a=>a.subject===e),i=t?t.approach:e==="news"?Ui.approach:e==="plaza"?{x:28,y:18.8}:{x:28,y:41.5},s=t?`${Pl[t.subject]} classroom`:e==="news"?"the newsroom":e==="plaza"?"the plaza fountain":"the main entrance",r=t?In(t.cx,t.cy+(t.face==="S"?.5:-.5)):e==="news"?In(Ui.cx,.95):null;this.planNav(i.x,i.y,s,r)&&this.inDoor===(t?.subject??(e==="news"?"news":null))&&(this.inDoor=null)}planNav(e,t,i,s){let r=this.player.pos,a=Math.max(0,Math.min(55,Math.floor(r.x+56/2))),h=Math.max(0,Math.min(43,Math.floor(r.z+44/2))),l=Gs(si,a,h,Math.floor(e),Math.floor(t));if(!l.length&&!(a===Math.floor(e)&&h===Math.floor(t)))return this.onToast("No path found from here"),!1;let o=[r.clone().setY(0),...l.slice(0,-1).map(d=>In(d.x+.5,d.y+.5)),In(e,t)],u=[];for(let d=0;d<o.length-1;){let c=o.length-1;for(;c>d+1&&!this.clear(o[d],o[c]);)c--;u.push(o[c]),d=c}return s&&u.push(s),this.nav={pts:u,label:i},this.navLabel=i,i!=="that spot"&&i!=="there"&&this.onToast(`Walking to ${i}\u2026 (move to cancel)`),!0}cancelNav(){this.nav&&(this.nav=null,this.navLabel="",this.onToast(""))}get walking(){return!!this.nav}enterDoor(e){this.inDoor=e,this.nav=null,this.navLabel="";let t=Ud.indexOf(e),i=Vn[Math.max(0,this.idx)].swap?1:0,s=e==="news"?[]:this.students.filter((r,a)=>(a+i)%4===t).map(r=>r.def.id);parent!==window?parent.postMessage({type:"unify:enter",subject:e,room:e,attendees:s},"*"):this.onToast(`${e==="news"?"Newsroom":Pl[e]+" auditorium"}: open index.html to go inside`)}enterPeriod(e){let t=Vn[e],i=dc(this.open),s=Cn.tile,r={x:Math.floor(this.player.pos.x+56/2),y:Math.floor(this.player.pos.z+44/2)},a=dc(this.open.filter(l=>Math.hypot(l.x-r.x,l.y-r.y)<=3.6&&Math.hypot(l.x-r.x,l.y-r.y)>=1.2)),h=0;this.students.forEach((l,o)=>{if(t.kind==="class"){let u=ii[(o+(t.swap?1:0))%4],d={x:Math.floor(u.approach.x),y:Math.floor(u.approach.y)};l.lastDoor=d,l.pending={delay:Fi(0,8),dest:d,hide:!0}}else if(t.kind==="lunch"){let u=l.def&&Ce.peek(l.def.id)?.lunchBuddy&&a[h];l.pending={delay:Fi(0,10),dest:u?a[h++]:i[o],hide:!1,appear:l.hidden?l.lastDoor:void 0}}else t.kind==="arrive"?(l.hidden=!0,l.sprite.visible=!1,l.blob.visible=!1,l.path=[],l.pending={delay:Fi(0,20),dest:i[o],hide:!1,appear:s}):l.pending={delay:Fi(0,12),dest:s,hide:!0,appear:l.hidden?l.lastDoor:void 0}})}begin(e){let t=e.pending;e.pending=null,t.appear&&(e.pos.copy(In(t.appear.x+.5,t.appear.y+.5)),e.hidden=!1,e.sprite.visible=!0,e.blob.visible=!0,e.fade=0,e.mat.opacity=0);let i=Math.min(55,Math.max(0,Math.floor(e.pos.x+56/2))),s=Math.min(43,Math.max(0,Math.floor(e.pos.z+44/2)));e.path=Gs(si,i,s,t.dest.x,t.dest.y).map(r=>In(r.x+.5,r.y+.5)),e.hideOnArrive=t.hide,e.moving=e.path.length>0,!e.path.length&&t.hide&&(e.hidden=!0,e.sprite.visible=!1,e.blob.visible=!1)}movePlayer(e,t){let i=this.keys,s=(i.d||i.arrowright?1:0)-(i.a||i.arrowleft?1:0)+this.input.x,r=(i.s||i.arrowdown?1:0)-(i.w||i.arrowup?1:0)+this.input.y,a=this.player,h=Math.sin(this.yaw),l=Math.cos(this.yaw),o=!this.inputLocked&&Math.hypot(s,r)>.1;if(o&&this.nav&&this.cancelNav(),o){let f=new L(l*s+h*r,0,-h*s+l*r).normalize().multiplyScalar(4*e);a.moving=!0;let g=a.pos.x+56/2,_=a.pos.z+44/2;Cl(g+f.x,_)||(a.pos.x+=f.x),Cl(a.pos.x+56/2,_+f.z)||(a.pos.z+=f.z),a.dir=this.dirFrom(f,t,a.dir),a.frame=1+Math.floor(this.t*9)%4}else if(this.nav){let f=this.nav.pts[0],g=f.clone().sub(a.pos);g.y=0;let _=g.length(),p=4.6*e;if(a.moving=!0,_<=p){if(a.pos.copy(f),this.nav.pts.shift(),!this.nav.pts.length){let m=this.nav.label;this.nav=null,this.navLabel="",[...ii,Ui].some(T=>Ki(T.trigger,a.pos.x+56/2,a.pos.z+44/2))||this.onToast(`Arrived at ${m}`)}}else g.normalize(),a.pos.addScaledVector(g,p),a.dir=this.dirFrom(g,t,a.dir);a.frame=1+Math.floor(this.t*9)%4}else a.moving=!1,a.frame=0;let u=a.pos.x+56/2,d=a.pos.z+44/2,c=ii.find(f=>Ki(f.trigger,u,d))??(Ki(Ui.trigger,u,d)?{subject:"news"}:void 0);if(c&&this.inDoor!==c.subject)this.enterDoor(c.subject);else if(!c&&this.inDoor){let f=this.inDoor==="news"?Ui.trigger:ii.find(_=>_.subject===this.inDoor).trigger;Math.hypot(Math.max(f.x-u,0,u-f.x-f.w),Math.max(f.y-d,0,d-f.y-f.h))>.35&&(this.inDoor=null)}}setView(e,t=!1){this.view=e,this.zoom=1,e==="overview"?this.pitch=1:e==="close"&&(this.pitch=.62),this.fpitch=0,t&&this.updateCamera(1,!0)}cycleView(){return this.setView(this.view==="close"?"overview":this.view==="overview"?"first":"close"),this.view}updateCamera(e,t=!1){let i=this.player.pos,s=Math.sin(this.yaw),r=Math.cos(this.yaw),a,h;if(this.view==="close"){let d=8.6*this.zoom,c=Math.cos(this.pitch);a=new L(i.x+s*c*d,1+Math.sin(this.pitch)*d,i.z+r*c*d),h=new L(i.x-s*1.8,1,i.z-r*1.8)}else if(this.view==="overview"){let d=52*this.zoom,c=Math.cos(this.pitch);a=new L(s*c*d,Math.sin(this.pitch)*d,r*c*d+3),h=new L(0,0,3)}else a=new L(i.x,1.55,i.z),h=new L(i.x-s*6,1.55+Math.tan(this.fpitch)*6,i.z-r*6);let l=t?1:Math.min(1,e*9);this.camPos.lerp(a,l),this.camLook.lerp(h,l),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);let o=this.view==="overview"?40:22,u=this.view==="overview"?new L(0,0,3):i;if(this.sun.target.position.copy(u),this.sun.position.set(u.x+7,15,u.z+9),o!==this.shadowR){this.shadowR=o;let d=this.sun.shadow.camera;d.left=-o,d.right=o,d.top=o,d.bottom=-o,d.updateProjectionMatrix()}}fadeOccluders(e){let t=this.camera.position,i=this.player.pos.clone().setY(1),s=i.clone().sub(t),r=s.length(),a=new Mi(t,s.normalize()),h=new L;for(let l of this.occl){let o=this.view!=="first"&&!!a.intersectBox(l.box,h)&&h.distanceTo(t)<r-.2,u=o?.16:1;l.o+=(u-l.o)*Math.min(1,e*9);let d=l.o>.985;for(let c of l.mats)c.opacity=d?1:l.o,c.transparent=!d,c.depthWrite=d}}},Ex=["#F8D977","#F28F7E","#8FC9E8","#A9DCC0"],wx=n=>Ex[Math.floor(n)%4];var lf=n=>n==="k2"||n==="g35"?"young":n==="g68"?"mid":"teen",Ax=(n,e)=>{n=n.slice();for(let t=n.length-1;t>0;t--){let i=Math.floor(e()*(t+1));[n[t],n[i]]=[n[i],n[t]]}return n},da=(n,e,t,i,s,r,a)=>{let h=Ax([t,...i.slice(0,2)],s);return{subject:n,q:e,options:h,answer:h.indexOf(t),why:r,hint:a}};function Cx(n,e){let t=lf(n),i=(l,o)=>l+Math.floor(e()*(o-l+1)),s=l=>{let o=new Set;for(;o.size<2;){let u=l+i(-4,4);u!==l&&o.add(u)}return[...o].map(String)};if(n==="k2"){let l=i(1,9),o=i(1,9);return da("math",`What is ${l} + ${o}?`,String(l+o),s(l+o),e,`${l} plus ${o} is ${l+o}.`,"Count up from the bigger number.")}if(n==="g35"){let l=i(3,9),o=i(3,9);return da("math",`What is ${l} x ${o}?`,String(l*o),s(l*o),e,`${l} groups of ${o} is ${l*o}.`,"Try skip counting.")}if(t==="mid"){let l=i(2,12),o=i(2,9),u=i(1,9);return da("math",`What is ${l} x ${o} + ${u}?`,String(l*o+u),s(l*o+u),e,`Multiply first: ${l*o}, then add ${u}.`,"Order of operations: multiply before adding.")}let r=i(2,6),a=i(2,9),h=i(1,9);return da("math",`Solve for x: ${r}x + ${h} = ${r*a+h}`,String(a),s(a),e,`Subtract ${h}, then divide by ${r}: x = ${a}.`,"Undo the + first, then undo the multiplication.")}var Rx={young:[["Which word is a noun?","puppy",["quickly","jump"]],["What is the opposite of 'hot'?","cold",["warm","red"]],["Which word rhymes with 'cat'?","hat",["dog","cup"]],["What punctuation ends a question?","?",[".","!"]],["Which is a complete sentence?","The dog ran.",["The big dog.","Ran fast."]],["Which word starts with a capital letter?","Monday",["tuesday","apple"],"Days of the week are capitalized."]],mid:[["Which word is an adverb?","slowly",["quiet","table"]],["'Brave' is a synonym for...","courageous",["afraid","tired"]],["What is the plural of 'mouse'?","mice",["mouses","meese"]],["A word that sounds the same but means something else is a...","homophone",["synonym","antonym"]],["Which sentence uses a metaphor?","Time is a thief.",["He ran like the wind.","The bus is late."]],["What is the main idea?","The big point of a text",["A small detail","The title font"]]],teen:[["What is a theme?","The central message of a story",["The main character","The setting"]],["Which is a primary source?","A diary written at the time",["A textbook summary","A movie about it"]],["What does 'foreshadowing' do?","Hints at later events",["Describes the setting","Ends the story"]],["Which word is an antonym of 'verbose'?","concise",["wordy","loud"]],["Which device is 'The wind whispered'?","Personification",["Simile","Hyperbole"]],["A thesis statement...","states your main argument",["lists your sources","ends the paper"]]]},Px={young:[["What do plants need to grow?","sunlight and water",["only candy","darkness"]],["Which is a solid?","ice",["steam","rain"]],["What is the big star in our sky by day?","the Sun",["the Moon","a planet"]],["Which animal is a mammal?","dolphin",["shark","trout"]],["What do we use our ears for?","hearing",["seeing","smelling"]],["How many legs does an insect have?","6",["8","4"]]],mid:[["What gas do plants take in?","carbon dioxide",["oxygen","helium"]],["What is the center of an atom called?","nucleus",["orbit","cell"]],["Which planet is closest to the Sun?","Mercury",["Venus","Mars"]],["Water boils at...","100 C",["50 C","0 C"]],["The powerhouse of the cell is the...","mitochondria",["nucleus","wall"]],["A hypothesis is...","a testable guess",["a final answer","a graph"]]],teen:[["What is the unit of force?","newton",["joule","watt"]],["DNA stands for...","deoxyribonucleic acid",["dynamic nuclear acid","double nitrogen atom"]],["Which is a chemical change?","rusting iron",["melting ice","tearing paper"]],["What does a catalyst do?","speeds up a reaction",["stops a reaction","adds mass"]],["Which wave needs a medium?","sound",["light","radio"]],["Natural selection favors...","traits that help survival",["the largest animals","the oldest animals"]]]},Ix={young:[["What do we call a map's key?","legend",["story","title"]],["Who was the first U.S. president?","George Washington",["Abraham Lincoln","Benjamin Franklin"]],["Which is a continent?","Africa",["Texas","Pacific"]],["Long ago, people wrote with...","quill pens",["keyboards","tablets"]],["A community helper who fights fires is a...","firefighter",["baker","pilot"]],["What is a holiday for remembering history called?","a memorial day",["a snow day","a field trip"]]],mid:[["Ancient Egyptians built...","pyramids",["castles","skyscrapers"]],["What was the Silk Road?","a trade route",["a fabric","a river"]],["The printing press helped spread...","ideas and books",["weather news","ocean maps"]],["Which river was central to Egypt?","the Nile",["the Amazon","the Thames"]],["The Renaissance began in...","Italy",["Brazil","Japan"]],["A government where people vote is a...","democracy",["monarchy","empire"]]],teen:[["What did the Industrial Revolution change?","how goods were made",["the alphabet","the calendar"]],["The Magna Carta limited the power of...","the king",["the church","merchants"]],["Which event began in 1914?","World War I",["World War II","the Civil War"]],["What is a primary cause of the Cold War?","a clash of ideologies",["a flood","a gold rush"]],["The Constitution begins with...","We the People",["I the President","In God We Trust"]],["Which ancient civilization created democracy?","Athens",["Rome","Persia"]]]},of={ela:Rx,science:Px,history:Ix};function hf(n,e,t=Math.random){if(n==="math")return Cx(e,t);let i=lf(e),s=of[n][i][Math.floor(t()*of[n][i].length)];return da(n,s[0],s[1],s[2],t,s[3])}var Mt=(n,e)=>e[Math.floor(n()*e.length)],Wt=n=>n.charAt(0).toUpperCase()+n.slice(1),Ln={math:"math",ela:"reading and writing",science:"science",history:"history"},Lx=["soccer","drawing","video games","reading","baking","music","dancing","robots","swimming","chess","skateboarding","gardening","photography","basketball"],Dx=["pizza","tacos","pasta","sushi","pancakes","fried rice","burgers","dumplings"],Nx=[["Why did the student eat their homework?","Because the teacher said it was a piece of cake!"],["What do you call a sleeping bull?","A bulldozer!"],["Why was the math book sad?","It had too many problems."],["What did the ocean say to the beach?","Nothing, it just waved."],["Why can't you trust atoms?","They make up everything!"],["What has hands but can't clap?","A clock!"],["Why did the scarecrow win an award?","He was outstanding in his field."],["What kind of tree fits in your hand?","A palm tree!"],["Why do bees have sticky hair?","Because they use honeycombs."],["What do you call cheese that isn't yours?","Nacho cheese!"]],er={cheerful:{yes:["Yay!","Oh, totally!","Ooh!"],hm:["Hmm, let's see!","Good question!"],wow:["No way, that's awesome!","I love that!"],bye:["See you soon!","Bye bye, have a sunny day!"]},shy:{yes:["Um, yeah.","...Okay."],hm:["Uh... I think...","Hmm, um..."],wow:["Oh! Really? That's... nice.","Wow. Um, cool."],bye:["Um, bye.","Okay... see you."]},sporty:{yes:["Yep!","Heck yeah!"],hm:["Okay, huddle up.","Let me think, coach mode."],wow:["Let's gooo!","That's a W!"],bye:["Catch you on the field!","Hustle, hustle!"]},nerdy:{yes:["Correct.","Indeed."],hm:["Technically speaking,","Fun fact:"],wow:["Fascinating!","That's statistically cool."],bye:["Until next time. Cite your sources.","Farewell!"]},artsy:{yes:["Mm, yes.","Beautiful."],hm:["Let me paint you a picture...","Hmm, imagine this:"],wow:["That's so inspiring!","Oh, the colors in that!"],bye:["Stay colorful!","Goodbye, friend, go make something."]},funny:{yes:["Ha! Yes.","You bet."],hm:["Okay, hear me out.","So, plot twist:"],wow:["Shut the front door!","Okay that's actually hilarious."],bye:["I'd say 'break a leg' but we have PE next.","Later, alligator!"]},curious:{yes:["Ooh, yes!","Wait, really?"],hm:["Hmm, why though?","I wonder..."],wow:["Tell me more!","That is so interesting!"],bye:["I have so many more questions! Bye!","See you! Don't forget to ask 'why'."]},bossy:{yes:["Obviously.","Correct."],hm:["Listen.","Here's the plan:"],wow:["Good. I approve.","Not bad. Not bad at all."],bye:["Don't be late.","Dismissed! ...kidding. Mostly."]},dreamy:{yes:["Mm, yes...","Oh, yes."],hm:["I was just wondering...","Hmm, imagine..."],wow:["Ooh, that's like a story.","That sounds magical."],bye:["Goodbye... see you in the clouds.","Bye. I'll daydream about it."]},kind:{yes:["Of course!","Happy to!"],hm:["Let me think about it.","Good thought."],wow:["That's wonderful!","I'm so glad."],bye:["Take care of yourself!","Bye! I'm rooting for you."]}},cf=(n,e)=>{let t=la(n.spec).filter(i=>i.key!=="shoes");return Mt(e,t)},Fx={how:"how our day was going",class:"school subjects",hobby:"hobbies",you:"each other's stories",food:"food",gossip:"the latest hallway news",joke:"a joke",help:"studying",quiz:"a quiz question",compliment:"style",invite:"hanging out"},Ll=class{constructor(e,t){this.npc=e;this.ctx=t;this.used=new Set;this.turns=0;this.history=[];this.waiting=null;this.r=fi(e.id*977+Math.floor(Date.now()/6e4))}get feat(){return this._feat??(this._feat=cf(this.npc,fi(this.npc.id*13+5)))}get mem(){return Ce.mem(this.npc.id)}get me(){return Ce.profile.name||"friend"}v(e,t={}){let i=this.npc,s=this.mem,r={me:this.me,first:i.first,grade:i.grade,hobby:s.facts.hobby??"",interest:i.interests[0],food:i.food,dream:i.dream,...t};return e.replace(/\{(\w+)\}/g,(a,h)=>r[h]??"")}pc(e){return this.v(e[this.npc.personality]??e.d)}flavor(e,t=.33){return this.r()<t?`${Mt(this.r,er[this.npc.personality].yes)} ${e}`:e}reply(e,t={}){let i={text:e,options:t.options??this.menu(),mood:t.mood??"happy",delta:t.delta??0,end:t.end,quiz:t.quiz};return this.turns++,this.history.push({who:"npc",text:e}),es(this.npc.id,"npc",e),i.delta&&Ac(this.npc.id,i.delta),i}note(e){this.used.add(e),Ce.edit(this.npc.id,t=>{t.topics.push(e),t.topics.length>24&&t.topics.shift(),t.lastDay=ca(),t.lastAt=Date.now()})}greet(){let e=this.npc,t=this.mem,i=!t.met,s=Date.now()-t.lastAt,r=t.lastDay&&t.lastDay!==ca()?Math.max(1,Math.round((Date.parse(ca())-Date.parse(t.lastDay))/864e5)):0,a=this.me,h,l="happy",o=0,u=cf(e,this.r).phrase;if(i)h=this.pc({cheerful:`Hi hi! I'm ${e.first}! I'm in grade ${e.grade}. Are you new here? I love your ${la(Ce.profile.avatar).find(d=>d.key==="top")?.phrase??"style"}!`,shy:`Oh! Um... hi. I'm ${e.first}. ...Are you ${a}?`,sporty:`Hey! I'm ${e.first}. You look fast. You play anything?`,nerdy:`Hello. I'm ${e.first}, grade ${e.grade}. Did you know this hall has exactly 44 rows of tiles? ...Sorry. Hi.`,artsy:`Hi! I'm ${e.first}. I love the colors you're wearing. Is that on purpose?`,funny:`Hey, I'm ${e.first}. Don't worry, I'm funnier than I look.`,curious:`Hi! I'm ${e.first}! Wait, who are you? What do you like? Tell me everything!`,bossy:`Hi. I'm ${e.first}. I run the ${e.interests[0]} club. You should join.`,dreamy:`Oh... hi. I'm ${e.first}. I was just imagining we were all on a ship. Welcome aboard.`,kind:`Hi there! I'm ${e.first}. Welcome! Can I help you find anything?`,d:`Hi! I'm ${e.first}.`}),Ce.profile.name&&(h+=` Nice to meet you, ${a}!`),Ce.edit(e.id,d=>{d.met=!0,d.fr=Math.max(d.fr,2)}),Ce.profile.stats.talks++,o=1,l=e.personality==="shy"?"shy":"happy";else if(t.hurt>=2&&t.fr<12)h=this.pc({d:"Oh. Hi.",funny:"Oh. It's you. Hi, I guess.",kind:"Hi. I'm still a bit upset, but hi."}),l="annoyed";else{let d=Qi(t.fr),c=d==="best friend"?`There you are, ${a}! My favorite person!`:d==="close friend"?`${a}! I was hoping I'd see you!`:d==="friend"?`Hey ${a}!`:`Hi again, ${a}.`,f="";s<8*6e4&&t.lastAt?f=Mt(this.r,["Back so soon?","Missed me already?","Did you forget something?"]):t.lunchBuddy&&this.ctx.kind==="lunch"?f="Still on for lunch together?":t.facts.hobby&&this.r()<.6?f=`How's ${t.facts.hobby} going?`:t.facts.mood&&["sad","tired","nervous","stressed","worried","lonely"].includes(t.facts.mood)&&this.r()<.8?f=`Are you feeling less ${t.facts.mood} than last time?`:t.quiz.total>0&&this.r()<.5?f=t.quiz.right>=t.quiz.total/2?"You were so good at that quiz stuff last time.":"Want another try at those quiz questions?":t.topics.length?f=`Last time we talked about ${Fx[t.topics[t.topics.length-1]]??"stuff"}. That was fun.`:f="";let g=this.ctx.place==="class"?Mt(this.r,["Shh! Whisper, the teacher is right there.","Psst, quietly!","Hi! Quick, before she looks over."]):r>=2?`It's been ${r} days!`:this.ctx.kind==="arrive"?Mt(this.r,["Morning already!","Ready for today?"]):this.ctx.kind==="lunch"?Mt(this.r,["I'm starving.","Lunch smells good today."]):this.ctx.kind==="dismiss"?"Almost time to go home!":this.ctx.kind==="class"?"Shouldn't we both be in class? ...I won't tell.":"";h=`${c} ${f||g}`.trim(),o=r?1:0,Ce.profile.stats.talks++}return Ce.edit(e.id,d=>{d.lastDay=ca(),d.lastAt=Date.now(),d.talks++}),this.reply(h,{mood:l,delta:o,options:this.menu()})}menu(){let e=this.npc,t=this.mem,i=[],s=(h,l)=>{i.length<5&&i.push({id:h,label:l})},a=[["how","How's your day going?",!0],["hobby","What do you do for fun?",!0],["class","What's your favorite subject?",!0],["you","Tell me about yourself",!0],["quiz","Quiz me!",e.personality==="nerdy"||e.personality==="curious"||t.fr>=10],["gossip","Heard anything interesting?",t.fr>=8],["compliment",`I like your ${this.feat.noun}`,!0],["food","What's your favorite food?",!0],["joke","Tell me a joke",e.personality==="funny"||t.fr>=6],["help","Can you help me study?",t.fr>=6],["invite","Want to eat lunch together?",t.fr>=12&&!t.lunchBuddy],["advice","I need some advice",t.fr>=15]].filter(([h,,l])=>l&&!this.used.has(h));return a.sort((h,l)=>(t.topics.lastIndexOf(h[0])+1||-1)-(t.topics.lastIndexOf(l[0])+1||-1)),a.slice(0,4).forEach(([h,l])=>s(h,l)),i.push({id:"bye",label:"See you later"}),i}back(e=[]){return[...e,...this.menu().filter(t=>!e.some(i=>i.id===t.id))].slice(0,5)}choose(e,t){let i=this.npc,s=this.mem,r=this.r,a=er[i.personality],h=!this.used.has(e),l=o=>h?o:0;if(e.startsWith("ans"))return this.answer(Number(e.slice(3)));switch(this.history.push({who:"me",text:this.optLabel(e,t)}),es(i.id,"me",this.optLabel(e,t)),e!=="hobby_pick"&&e!=="food_pick"&&e!=="fav_pick"&&e!=="feel"&&this.note(e),e){case"bye":return this.reply(this.v(`${Mt(r,a.bye)} ${s.fr>=30?"Come find me later, "+this.me+"!":""}`).trim(),{end:!0,options:[]});case"how":{let o=this.ctx.kind==="arrive"?this.pc({cheerful:"Great! The bus was only a little loud today.",shy:"Okay... a little nervous about class, honestly.",sporty:"Pumped! I jogged here.",nerdy:"Productive. I reviewed my notes on the bus.",artsy:"Inspired! The light in this hallway is gorgeous.",funny:"Surviving! Barely. Breakfast was just a banana peel and hope.",curious:"So good! I've already asked three questions today.",bossy:"Busy. I've got a schedule to keep.",dreamy:"Floaty. I woke up from a really good dream.",kind:"Good! How about you?",d:"Pretty good!"}):this.pc({cheerful:"Awesome! How are you?",shy:"Fine... thanks for asking.",sporty:"Great, I've got practice later!",nerdy:"Well, my pencil snapped, but otherwise fine.",artsy:"Creative. I sketched a bird during snack.",funny:"My day is like a sandwich: mostly bread.",curious:"Curious as ever. And you?",bossy:"Efficient. And you?",dreamy:"Drifty, but nice.",kind:"I'm good, thank you! How are you doing?",d:"Good! You?"});return this.reply(`${o}`,{delta:l(1),options:[{id:"feel",label:"I'm doing great",data:"great"},{id:"feel",label:"A little tired",data:"tired"},{id:"feel",label:"Kind of nervous",data:"nervous"},{id:"feel",label:"Sort of sad",data:"sad"}]})}case"feel":{let o=String(t);Ce.learn("mood",o),Ce.edit(i.id,d=>{d.facts.mood=o});let u=o==="great"?this.flavor(Mt(r,["That's awesome, it's contagious!","Love that energy!","Good! Keep it going!"])):o==="tired"?this.pc({cheerful:"Aw, me too sometimes. Have some water and a snack!",shy:"Me too... maybe we can both sit quietly for a second.",sporty:"Shake it out! A few jumping jacks and you'll be good.",nerdy:"Sleep is scientifically important. Try going to bed earlier.",d:"Hang in there. Maybe a snack at lunch will help?"}):o==="nervous"?this.pc({cheerful:"You've totally got this! I believe in you!",shy:"Oh. I get nervous too. We can be nervous together.",sporty:"Deep breath. Treat it like the big game, you've trained for this.",nerdy:"Statistically, most of the things we worry about don't happen.",d:"It's okay to feel that way. One step at a time."}):this.pc({kind:"I'm sorry. Do you want to sit together for a bit? I'll listen.",funny:"Aw. Okay, emergency compliment: your whole vibe is great.",d:"I'm sorry you're sad. I'm here if you want to talk."});return this.reply(u,{delta:l(2)+1,mood:o==="sad"?"sad":"happy",options:this.back()})}case"class":{let o=i.favSubject,u=i.hardSubject,d={math:"numbers always make sense",ela:"stories take me places",science:"I get to find out how things work",history:"the past is full of surprises"}[o];return this.reply(this.v(`I love ${Ln[o]}. ${Wt(d)}. ${Ln[u]===Ln[o]?"":`${Wt(Ln[u])} is harder for me, though.`} What's yours?`),{delta:l(1),mood:"happy",options:["math","ela","science","history"].map(c=>({id:"fav_pick",label:Wt(Ln[c]),data:c})).concat([{id:"back",label:"Not sure yet",data:""}])})}case"fav_pick":{let o=t;Ce.learn("favSubject",o),Ce.edit(i.id,d=>{d.facts.favSubject=o});let u=o===i.favSubject;return this.reply(u?this.v(`No way, ${Ln[o]} is my favorite too! We should study together sometime.`):o===i.hardSubject?this.v(`Really? ${Wt(Ln[o])} is tough for me. Maybe you could help me!`):this.v(`${Wt(Ln[o])}, nice! I'd like to hear more about that.`),{delta:u?4:2,mood:u?"excited":"happy",options:this.back()})}case"back":return this.reply(this.flavor("Okay! What else?"),{options:this.menu()});case"hobby":{let o=i.interests[0],u={soccer:"I practice every day after school.",chess:"I'm working on a new opening.",baking:"Yesterday I made lemon cookies.","robotics club":"We're building a robot that picks up balls.",dinosaurs:"My favorite is the Triceratops!",drawing:"I fill a notebook every week."}[o]??`I could talk about ${o} all day.`;return this.waiting="hobby",this.reply(this.v(`I'm really into ${o}. ${u} I also like ${i.interests[1]}. What about you?`),{delta:l(1),options:[...[i.interests[0],...Lx.filter(d=>!i.interests.includes(d)).slice(0,3),"something else"].map(d=>({id:"hobby_pick",label:Wt(d),data:d}))]})}case"hobby_pick":{let o=String(t).toLowerCase();if(this.waiting=null,o==="something else")return this.reply(this.flavor("Ooh, tell me what it is! Just type it below."),{options:this.menu(),mood:"excited"});Ce.learn("hobby",o),Ce.edit(i.id,d=>{d.facts.hobby=o});let u=i.interests.some(d=>d.includes(o)||o.includes(d));return this.reply(u?this.v(`No way, we like the same thing! ${Mt(r,a.wow)} We should do ${o} together sometime.`):this.v(`${Wt(o)}? Cool! ${Mt(r,a.wow)} I've never really tried it. Maybe you can show me.`),{delta:u?5:2,mood:u?"excited":"happy",options:this.menu()})}case"you":{let o=Qi(s.fr),u=s.talks,d=o==="new face"?i.bio:o==="classmate"?`I live with ${i.pet??"my family"}${i.pet?"":", it's pretty loud"}, and I could eat ${i.food} every day.`:o==="friend"?`Someday I want to ${i.dream}. I haven't told many people that.`:o==="close friend"?`Okay, a secret: I ${i.quirk}. Everyone's noticed, I think.`:`You're my best friend, so... I ${i.secret}. Please don't tell.`;return this.reply(this.v(d),{delta:l(o==="new face"?1:2)+(u%3===0,0),mood:o==="best friend"?"shy":"happy"})}case"food":return this.waiting="food",this.reply(this.v(`Easy: ${i.food}! What's yours?`),{delta:l(1),options:[...Dx.slice(0,4).map(o=>({id:"food_pick",label:Wt(o),data:o})),{id:"food_pick",label:Wt(i.food),data:i.food}].slice(0,5)});case"food_pick":{let o=String(t);return Ce.learn("food",o),Ce.edit(i.id,u=>{u.facts.food=o}),this.waiting=null,this.reply(o===i.food?this.v(`${Wt(o)}! We have the same taste. Today's lunch better be good.`):this.v(`${Wt(o)} is good too. I'd trade you some ${i.food} for it.`),{delta:o===i.food?4:1,mood:o===i.food?"excited":"happy",options:this.menu()})}case"gossip":return this.gossip(h);case"compliment":{let o=this.feat,u=this.pc({shy:`Oh! Um... thank you. I picked my ${o.phrase} myself.`,cheerful:`Aww, thanks! I love my ${o.phrase} too!`,artsy:`Thank you! My ${o.phrase} is part of my whole look.`,sporty:"Ha, thanks! Gotta look good when we win.",funny:`Thanks! My ${o.noun} has been told it's the best part of me.`,d:`Thanks! That's sweet. I like my ${o.phrase} too.`});return this.reply(u,{delta:l(3),mood:i.personality==="shy"?"shy":"happy"})}case"joke":{let[o,u]=Mt(r,Nx),d=i.personality==="funny"?"Oh, I have SO many. ":i.personality==="shy"?"Um, okay... ":"";return this.reply(`${d}${o} ... ${u}`,{delta:l(2),mood:"excited",options:[{id:"laugh",label:"Ha! Good one"},{id:"groan",label:"*groan*"},...this.back().slice(0,3)]})}case"laugh":return this.reply(this.flavor(Mt(r,["I'm here all week!","I knew you'd get it.","That one never fails."])),{delta:2,mood:"excited"});case"groan":return this.reply(this.pc({funny:"Groans are the sound of success.",d:"Hey, comedy is hard!"}),{delta:0});case"help":{if(i.hardSubject&&this.r()<.5&&i.personality!=="nerdy"&&s.fr<30){let o=js(i.bestFriend);return this.reply(this.v(`I'm better at ${Ln[i.favSubject]}. If you need ${Ln[i.hardSubject]}, ask ${o?.first??"Ms. Brown"}. Want me to quiz you on ${Ln[i.favSubject]} instead?`),{delta:l(1),options:[{id:"quiz",label:"Sure, quiz me"},...this.back().slice(0,3)]})}return this.choose("quiz")}case"quiz":{let o=Ce.profile.avatar.age,u=r()<.7?i.favSubject:["math","ela","science","history"][Math.floor(r()*4)];return this.quiz=hf(u,o,r),this.waiting="quiz",this.reply(this.v(`Okay, ${Ln[u]} time! ${this.quiz.q}`),{delta:0,mood:"excited",quiz:this.quiz,options:this.quiz.options.map((d,c)=>({id:`ans${c}`,label:d}))})}case"invite":{let o=i.personality==="shy"?25:12;return s.fr>=o?(Ce.edit(i.id,u=>{u.lunchBuddy=!0}),this.reply(this.pc({shy:"Really? Um... yes. I'd like that.",d:`Yes! I'll save you a seat at lunch. ${i.food[0].toUpperCase()+i.food.slice(1)} for both of us!`}),{delta:4,mood:"excited",options:this.back()})):this.reply(this.pc({shy:"Um... maybe after we know each other better? Sorry.",d:"Maybe soon! Let's hang out a bit more first."}),{delta:0,mood:"shy",options:this.back()})}case"advice":{let o=this.pc({cheerful:"Smile at three people today. It really works.",shy:"Taking a deep breath before talking helps me. And writing notes.",sporty:"Warm up before big things. Even a test.",nerdy:"Make a study schedule. Fifteen minutes a day beats a panic night before.",artsy:"Doodle when you feel stuck. Your brain loosens up.",funny:"If all else fails, laugh at it. Then try again.",curious:"Ask more questions. Nobody minds, honestly.",bossy:"Make a list. Do the hardest thing first.",dreamy:"Look out a window for a minute. Then you'll know what to do.",kind:"Be gentle with yourself. And ask for help, it's brave.",d:"Take it one step at a time."});return this.reply(o,{delta:l(2),options:this.back()})}case"chatter_pick":return this.reply("Okay!",{options:this.menu()});default:return this.reply(this.flavor("Hm, I'm not sure what to say to that."),{options:this.menu(),mood:"neutral"})}}optLabel(e,t){return typeof t=="string"&&t?Wt(t):this.menu().find(i=>i.id===e)?.label??e}answer(e){let t=this.quiz,i=this.npc;this.quiz=void 0,this.waiting=null;let s=e===t.answer;return Ce.edit(i.id,r=>{r.quiz.total++,s&&(r.quiz.right++,r.helped++)}),Ce.profile.stats.quizTotal++,s&&Ce.profile.stats.quizRight++,Ce.save(),this.history.push({who:"me",text:t.options[e]??"..."}),es(i.id,"me",t.options[e]??"..."),s?this.reply(this.v(`${Mt(this.r,er[i.personality].wow)} Yes, "${t.options[t.answer]}"! ${t.why??""}`),{delta:3,mood:"excited",options:[{id:"quiz",label:"Another one!"},...this.menu().slice(0,3)]}):this.reply(this.v(`Almost! The answer is "${t.options[t.answer]}". ${t.why??""} ${i.personality==="kind"?"That's a tricky one.":"Don't worry, you'll get the next one."}`),{delta:1,mood:"neutral",options:[{id:"quiz",label:"Try another"},...this.menu().slice(0,3)]})}gossip(e){let t=this.npc,i=this.r,s=js(t.bestFriend),r=t.rival!=null?js(t.rival):null,a=Mt(i,Ks),h=[],l=Ks.filter(d=>d.id!==t.id&&(Ce.peek(d.id)?.fr??0)>=30);l.length&&h.push("opinion"),s&&h.push("friend"),r&&h.push("rival"),h.push("quirk","new");let o=Mt(i,h),u="";if(o==="opinion"){let d=Mt(i,l);u=`${d.first} told me you're really nice. ${d.first} remembers that you ${Ce.peek(d.id).quiz.right>0?"helped with a quiz":"said hi"}.`}else if(o==="friend"&&s)u=`${s.first} and I are working on ${t.interests[0]} together. ${s.first} ${s.quirk}, which is funny.`;else if(o==="rival"&&r)u=`${r.first} and I are kind of competing this week. Please don't tell ${r.first}. ${r.first} ${r.quirk}.`;else if(o==="quirk")u=`${a.first} ${a.quirk}. Have you noticed?`;else{let d=la(a.spec).find(c=>c.key==="hat"||c.key==="glasses"||c.key==="hair");u=`${a.first} showed up with ${d.phrase} today. Everyone's talking about it.`}return this.reply(this.pc({shy:`Um... don't tell anyone, but ${u}`,funny:`Okay, hot gossip, ${this.me}: ${u}`,d:u}),{delta:e?1:0,mood:"happy"})}say(e){if(e=e.trim().slice(0,240),!e)return this.reply("...?",{mood:"neutral"});let t=this.npc,i=e.toLowerCase(),s=this.r;if(this.history.push({who:"me",text:e}),es(t.id,"me",e),this.waiting==="quiz"&&this.quiz){let d=this.quiz.options.findIndex(c=>i.includes(c.toLowerCase()));if(d>=0)return this.answer(d)}let r=i.match(/(?:my name is|call me|i'?m called)\s+([a-z][a-z'-]{1,16})/);if(r){let d=Wt(r[1]);return Ce.setProfile({name:d}),this.reply(this.v(`Nice to meet you, ${d}! I'll remember that.`),{delta:2,mood:"excited"})}let a=i.match(/\bi(?:'m| am| feel| feeling)\s+(?:so |really |kind of |a little |very )?(sad|happy|tired|nervous|scared|excited|angry|bored|hungry|sick|lonely|stressed|worried|great|good|fine|okay|proud)\b/);if(a){let d=a[1];return this.choose("feel",["happy","excited","great","good","fine","okay","proud"].includes(d)?"great":["tired","bored","sick","hungry"].includes(d)?"tired":["nervous","scared","worried","stressed"].includes(d)?"nervous":"sad")}let h=i.match(/\bi (?:really |absolutely )?(?:like|love|enjoy|adore|play)\s+([a-z ]{2,28})/);if(h)return this.choose("hobby_pick",h[1].trim().replace(/\s+(a lot|so much|too|and.*)$/,""));let l=i.match(/\bmy favou?rite (subject|food|color|colour|animal|game|sport|class) is\s+([a-z ]{2,24})/);if(l){let d=l[1],c=l[2].trim();Ce.learn("fav_"+d,c),Ce.edit(t.id,g=>{g.facts["fav_"+d]=c});let f=d==="food"&&c.includes(t.food.split(" ")[0]);return this.reply(this.v(f?`${Wt(c)}! Mine too!`:`${Wt(c)}, huh? I'll remember that your favorite ${d} is ${c}.`),{delta:f?3:2,mood:f?"excited":"happy"})}let o=i.match(/\bi have (?:a|an|two|three) ([a-z]+)(?: named ([a-z]+))?/);if(o)return Ce.learn("pet",o[1]+(o[2]?" named "+Wt(o[2]):"")),this.reply(this.v(`A ${o[1]}${o[2]?" named "+Wt(o[2]):""}! I want to meet them${t.pet?`. I have ${t.pet}, you know.`:"."}`),{delta:3,mood:"excited"});if(/\b(stupid|dumb|ugly|hate you|shut up|loser|idiot)\b/.test(i))return this.reply(this.pc({shy:"...That hurts. I'm going to go now.",funny:"Ouch. That was not funny. Even I can tell.",kind:"That's not very kind. I'd like us to be nice to each other.",d:"That's rude. I don't like that."}),{delta:-8,mood:"annoyed",options:[{id:"sorry",label:"Sorry, I didn't mean it"},{id:"bye",label:"Okay, bye"}]});if(/\b(sorry|apologi[sz]e|my bad)\b/.test(i))return this.reply(this.pc({kind:"Thank you for saying that. It's okay.",d:"Okay. Thanks for saying sorry."}),{delta:3,mood:"neutral",options:this.menu()});if(/\b(thanks|thank you|thx)\b/.test(i))return this.reply(this.flavor(Mt(s,["Anytime!","Of course.","No problem!"])),{delta:1,options:this.menu()});if(/\b(you'?re|you are|love your|like your|nice|cool|awesome|amazing|great|pretty|cute)\b/.test(i)&&/\b(you|your)\b/.test(i))return this.choose("compliment");if(/\b(bye|goodbye|see you|gotta go|have to go|later)\b/.test(i))return this.choose("bye");if(/\b(joke|funny|laugh)\b/.test(i))return this.choose("joke");if(/\b(quiz|test me|question)\b/.test(i))return this.choose("quiz");if(/\b(help|study|homework)\b/.test(i))return this.choose("help");if(/\b(lunch|eat|food|hungry|pizza|snack)\b/.test(i))return this.choose("food");if(/\b(hobby|hobbies|fun|weekend|play)\b/.test(i))return this.choose("hobby");if(/\b(class|subject|math|science|history|reading|english|teacher)\b/.test(i))return this.choose("class");if(/\b(who are you|about you|your name|tell me about)\b/.test(i))return this.choose("you");if(/\b(rumou?r|gossip|news|heard)\b/.test(i))return this.choose("gossip");if(/\b(hi|hello|hey|yo|sup)\b/.test(i)&&i.split(/\s+/).length<=3)return this.reply(this.flavor("Hi! What's up?"),{mood:"happy"});if(/\b(how are you|how's it going|what's up)\b/.test(i))return this.choose("how");if(/\?\s*$/.test(i))return this.reply(this.pc({nerdy:"Hmm, interesting question. I'd have to look that up. Want a quiz question instead?",curious:"Ooh, good question! I don't know, but I want to find out with you.",d:`${Mt(s,er[t.personality].hm)} I'm not sure. What do you think?`}),{delta:1,mood:"neutral"});let u=this.mem;return this.reply(this.v(u.facts.hobby?`${Mt(s,er[t.personality].hm)} Is that like ${u.facts.hobby}? Tell me more.`:`${Mt(s,er[t.personality].hm)} Tell me more about that.`),{delta:1,mood:"neutral"})}};function uf(n,e,t){let i=fi((n.id*31+e.id)*1009+Math.floor(Date.now()/2e4)),s=Ce.profile,r=s.name||"the new kid",a=Ce.peek(n.id),h=(Ce.peek(e.id)?.fr??0)>=30||(a?.fr??0)>=30,l=Mt(i,la(e.spec).filter(u=>u.key!=="shoes")),o=[`${e.first}, did you finish the ${Mt(i,["math","reading","science","history"])} homework?`,`Are you going to ${n.interests[0]} after school?`,`I love your ${l.phrase}!`,`${e.first}, you ${e.quirk} again. It's cute.`,h?`${r} is really nice. Have you talked to ${r}?`:`Who's the new kid, ${e.first}?`,t.kind==="lunch"?`I'm trading ${n.food} for ${e.food}. Deal?`:t.kind==="arrive"?"The bus was SO loud this morning.":t.kind==="dismiss"?"Don't forget your backpack!":`Shh, ${e.first}, we're supposed to be in class.`,`${Mt(i,n.interests)} club is on Thursday, ${e.first}!`,`Did you know ${n.pet??"my family"} ${n.pet?"learned a new trick?":"makes the best snacks?"}`];return Mt(i,o)}function df(n){let e=Ce.mem(n.id),t=Ce.profile.name||"you";return e.fr>=60?`${t}! Over here!`:e.facts.hobby?`Hey ${t}! How's ${e.facts.hobby}?`:`Hey ${t}!`}var Cc=0;async function Ux(n,e){if(Date.now()<Cc)return null;let t=n.npc,i=n.mem,s=new AbortController,r=setTimeout(()=>s.abort(),6500);try{let a={npc:{name:t.name,first:t.first,grade:t.grade,role:t.role,title:t.title,personality:t.personality,interests:t.interests,favSubject:t.favSubject,food:t.food,pet:t.pet,dream:t.dream,quirk:t.quirk,bio:t.bio},player:{name:Ce.profile.name,facts:Ce.profile.facts},memory:{friendship:i.fr,tier:Qi(i.fr),talks:i.talks,topics:i.topics.slice(-6),facts:i.facts,recent:i.log.slice(-8)},ctx:n.ctx,history:n.history.slice(-8),input:e},h=await fetch("/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a),signal:s.signal});if(!h.ok)return Cc=Date.now()+5*6e4,null;let l=await h.json();if(!l||typeof l.text!="string")return null;let o=Math.max(-6,Math.min(6,Number(l.delta)||0));if(n.history.push({who:"me",text:e}),es(t.id,"me",e),l.learned&&typeof l.learned=="object")for(let[u,d]of Object.entries(l.learned))typeof d=="string"&&(Ce.learn(u,d.slice(0,40)),Ce.edit(t.id,c=>{c.facts[u]=String(d).slice(0,40)}));return n.history.push({who:"npc",text:l.text}),es(t.id,"npc",l.text),o&&Ac(t.id,o),n.turns++,{text:String(l.text).slice(0,400),options:n.menu(),mood:l.mood||"happy",delta:o}}catch{return Cc=Date.now()+6e4,null}finally{clearTimeout(r)}}async function ff(n,e){return await Ux(n,e)??n.say(e)}var Ox=`
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
`,pf=!1,mf=()=>{if(pf)return;pf=!0;let n=document.createElement("style");n.textContent=Ox,document.head.appendChild(n)},ht=(n,e="",t,i="")=>{let s=document.createElement(n);return e&&(s.className=e),i&&(s.textContent=i),t?.appendChild(s),s};function gf(n,e,t=0,i=0,s=3.7){let r=n.getContext("2d"),a=n.width,h=n.height;r.clearRect(0,0,a,h);let l=s*Math.min(1,ni[e.age??"hs"]??1)*(a/118);r.save(),r.translate(a/2,h-10*(h/150)),r.scale(l,l),r.shadowColor="rgba(52,34,46,.3)",r.shadowBlur=2,r.shadowOffsetY=1,qs(r,0,0,{...e,dir:"down",moving:!1,walk:0,mouth:i,tag:!1},t),r.restore()}var Fl=n=>"\u2665".repeat(wc(n))+"\u2661".repeat(5-wc(n)),Dl=class{constructor(e){this.typing=0;this.full="";this.raf=0;this.t0=0;this.busy=!1;this.opts=[];this.onClose=()=>{};this.onReply=()=>{};this.say=async e=>{if(!(!this.convo||this.busy)){this.busy=!0,this.showYou(e);try{this.deliver(await ff(this.convo,e))}finally{this.busy=!1}}};this.mood="happy";this.loop=()=>{if(!this.isOpen)return;let e=performance.now(),t=this.typing<this.full.length;t&&(this.typing+=1.1+this.full.length*.012,this.renderText()),this.npc&&gf(this.cv,this.npc.look,(e-this.t0)/1e3,t?.4+.6*Math.abs(Math.sin(e/70)):0),this.raf=requestAnimationFrame(this.loop)};mf(),this.root=ht("div","uchat",e),this.card=ht("div","uchat-card",this.root),this.cv=ht("canvas","uchat-portrait",this.card),this.cv.width=236,this.cv.height=300;let t=ht("div","uchat-main",this.card),i=ht("div","uchat-head",t);this.nameEl=ht("b","",i),this.subEl=ht("span","uchat-sub",i),this.heartEl=ht("span","uchat-hearts",i);let s=ht("button","uchat-x",i,"Bye");s.type="button",s.onclick=()=>this.close(),this.textEl=ht("div","uchat-text",t),this.textEl.setAttribute("aria-live","polite"),this.textEl.onclick=()=>this.finishTyping(),this.optsEl=ht("div","uchat-opts",t);let r=ht("form","uchat-in",t);this.input=ht("input","",r),this.input.placeholder="Or type something to say\u2026",this.input.maxLength=200,this.input.autocomplete="off";let a=ht("button","",r,"Say");a.type="submit",r.onsubmit=h=>{h.preventDefault();let l=this.input.value.trim();l&&(this.input.value="",this.say(l))},this.root.addEventListener("keydown",h=>{h.stopPropagation(),h.key==="Escape"?this.close():document.activeElement!==this.input&&/^[1-6]$/.test(h.key)&&this.opts[+h.key-1]&&this.pick(this.opts[+h.key-1])}),["pointerdown","wheel","touchstart"].forEach(h=>this.root.addEventListener(h,l=>l.stopPropagation(),{passive:!0}))}get isOpen(){return this.root.classList.contains("show")}open(e,t){this.npc=e,this.convo=new Ll(e,t),this.root.classList.add("show"),this.t0=performance.now(),this.busy=!1,this.nameEl.textContent=e.name,this.refreshHead(),this.deliver(this.convo.greet()),this.loop(),setTimeout(()=>this.root.querySelector(".uchat-opts button")?.focus({preventScroll:!0}),30)}async pick(e){!this.convo||this.busy||(this.showYou(this.labelOf(e)),this.deliver(this.convo.choose(e.id,e.data)))}labelOf(e){return e.label}showYou(e){this.textEl.innerHTML="";let t=ht("span","you",this.textEl,`${Ce.profile.name||"You"}: ${e}`)}refreshHead(){if(!this.npc)return;let e=Ce.mem(this.npc.id);this.subEl.textContent=`${this.npc.role==="staff"?this.npc.title:"Grade "+this.npc.grade} \xB7 ${Qi(e.fr)}`,this.heartEl.textContent=Fl(e.fr)}deliver(e){this.refreshHead(),this.opts=e.options,this.optsEl.innerHTML="",e.options.forEach((i,s)=>{let r=ht("button","",this.optsEl,`${s+1}. ${i.label}`);r.type="button",r.onclick=()=>void this.pick(i)});let t=this.textEl.querySelector(".you");this.textEl.innerHTML="",t&&this.textEl.appendChild(t),this.full=e.text,this.typing=0,this.mood=e.mood,this.onReply(e,this.npc),e.end&&setTimeout(()=>this.close(),Math.min(2600,900+e.text.length*28))}finishTyping(){this.typing=this.full.length,this.renderText()}renderText(){let e=this.textEl.querySelector(".say");e||(e=ht("span","say",this.textEl)),e.textContent=this.full.slice(0,Math.floor(this.typing))}close(){this.isOpen&&(this.root.classList.remove("show"),cancelAnimationFrame(this.raf),this.input.blur(),this.onClose())}},Nl=class{constructor(e){this.onPick=()=>{};mf(),this.root=ht("div","ujournal",e);let t=ht("div","ujournal-card",this.root),i=ht("header","",t,"Friends and classmates"),s=ht("button","",i,"Close");s.type="button",s.onclick=()=>this.hide(),this.list=ht("div","ujournal-list",t),this.root.addEventListener("pointerdown",r=>r.stopPropagation()),this.root.addEventListener("keydown",r=>{r.stopPropagation(),r.key==="Escape"&&this.hide()})}show(){this.render(),this.root.classList.add("show")}hide(){this.root.classList.remove("show")}toggle(){this.root.classList.contains("show")?this.hide():this.show()}render(){this.list.innerHTML="";let e=Ce.friends();if(!e.length){ht("div","ujournal-empty",this.list,"You haven't met anyone yet. Walk up to a student and tap them, or press T when one is close.");return}for(let{id:t,mem:i}of e){let s=js(Number(t));if(!s)continue;let r=ht("button","ujournal-item",this.list);r.type="button",r.onclick=()=>{this.hide(),this.onPick(s)};let a=ht("canvas","",r);a.width=108,a.height=140,gf(a,s.look,0,0,3.7);let h=ht("div","",r),l=Object.entries(i.facts).map(([o,u])=>`${o.replace("fav_","favorite ")}: ${u}`).join(", ");ht("b","",h,s.name),ht("small","",h,`${s.role==="staff"?s.title:"Grade "+s.grade} \xB7 ${Qi(i.fr)} ${Fl(i.fr)}`),ht("small","",h,`Talked ${i.talks}x \xB7 quiz ${i.quiz.right}/${i.quiz.total}${i.lunchBuddy?" \xB7 lunch buddy":""}`),l&&ht("small","",h,`Remembers: ${l}`)}}};var yf=["Ha, totally!","Same!","Yeah!","No way!","Okay okay.","I know, right?","Shh!","Maybe!","Ooh!"],kx=(n,e)=>new L(n-56/2,0,e-44/2),Ul=class{constructor(e,t=document.body){this.hall=e;this.nearby=null;this.talkingTo=null;this.onNearby=()=>{};this.bubbles=[];this.tags=new Map;this.chase=null;this.nextChatter=4;this.approachAt=new Map;this.approaching=null;this.acc=0;this.layer=document.createElement("div"),this.layer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:34",t.appendChild(this.layer),this.chat=new Dl(t),this.journal=new Nl(t),this.chat.onClose=()=>this.endTalk(),this.journal.onPick=i=>{let s=e.persons().find(r=>r.def?.id===i.id);s?this.talkTo(s):e.onToast(`${i.first} isn't in the hall right now.`)},e.onTap=i=>{i?.def&&this.talkTo(i)},e.onTick.push((i,s)=>this.tick(i,s)),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&((i.key==="t"||i.key==="T")&&!this.chat.isOpen?this.nearby&&this.talkTo(this.nearby):(i.key==="f"||i.key==="F")&&!this.chat.isOpen&&this.journal.toggle())})}ctx(){let e=Vn[Math.max(0,this.hall.idx)];return{place:"hall",kind:e.kind,period:e.name,clock:Al(this.hall.clock)}}dist(e){return Math.hypot(e.pos.x-this.hall.player.pos.x,e.pos.z-this.hall.player.pos.z)}talkTo(e){let t=e.def;if(!t||this.chat.isOpen)return;if(this.dist(e)>2.7){this.chase={p:e,replan:0},this.hall.walkToPoint(e.pos.x+56/2,e.pos.z+44/2,"there"),this.hall.onToast(`Walking over to ${t.first}\u2026`);return}this.chase=null,this.hall.cancelNav(),this.talkingTo=e,e.talking=!0,e.moving=!1;let i=new L().subVectors(this.hall.player.pos,e.pos);e.dir=this.hall.faceDir(i,e.dir);let s=this.hall.player;s.dir=this.hall.faceDir(i.clone().negate(),s.dir),this.hall.inputLocked=!0,this.journal.hide(),this.chat.open(t,this.ctx())}endTalk(){let e=this.talkingTo;if(this.talkingTo=null,this.hall.inputLocked=!1,e){e.talking=!1;let t=e;t.path&&!t.path.length&&t.hidden}}say(e,t,i=3400){this.bubbles.filter(r=>r.p===e).forEach(r=>{r.el.remove()}),this.bubbles=this.bubbles.filter(r=>r.p!==e);let s=document.createElement("div");s.className="uchat-bubble",s.textContent=t,this.layer.appendChild(s),this.bubbles.push({el:s,p:e,until:performance.now()+i,h:1.55*(ni[e.look.age??"hs"]??1)+.35})}project(e,t){let i=new L(e.pos.x,t,e.pos.z).project(this.hall.camera),s=this.hall.renderer.domElement.getBoundingClientRect();return{x:(i.x*.5+.5)*s.width,y:(-i.y*.5+.5)*s.height,ok:i.z<1&&i.z>-1}}tick(e,t){let i=this.hall,s=performance.now(),r=i.player,a=null,h=2.5;if(!this.chat.isOpen)for(let o of i.persons()){let u=this.dist(o);u<h&&!o.talking&&(h=u,a=o)}if(a!==this.nearby&&(this.nearby=a,this.onNearby(a)),this.chase){let o=this.chase;o.replan-=e,this.dist(o.p)<=2.4?this.talkTo(o.p):!i.walking&&o.replan<=0?(o.replan=.5,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there")||(this.chase=null)):o.replan<=0&&(o.replan=.7,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there"))}let l=i.persons().filter(o=>this.dist(o)<5.5&&o.def&&!i.inputLocked).sort((o,u)=>this.dist(o)-this.dist(u)).slice(0,5);for(let[o,u]of this.tags)l.includes(o)||(u.remove(),this.tags.delete(o));for(let o of l){let u=this.tags.get(o);u||(u=document.createElement("div"),u.className="uchat-tag",this.layer.appendChild(u),this.tags.set(o,u));let d=Ce.peek(o.def.id);u.innerHTML=`${o.def.first}${d?.met?`<i>${Fl(d.fr).replace(/♡/g,"")}</i>`:""}`;let c=this.project(o,1.55*(ni[o.look.age??"hs"]??1)+.1);u.style.display=c.ok?"block":"none",u.style.left=`${c.x}px`,u.style.top=`${c.y}px`}if(this.bubbles=this.bubbles.filter(o=>{if(s>o.until)return o.el.remove(),!1;let u=this.project(o.p,o.h);return o.el.style.display=u.ok?"block":"none",o.el.style.left=`${u.x}px`,o.el.style.top=`${u.y-16}px`,!0}),this.nextChatter-=e,this.nextChatter<=0&&!this.chat.isOpen){this.nextChatter=Fi(2.4,5);let o=i.persons().filter(d=>d.def&&!d.talking&&this.dist(d)<16),u=o[Math.floor(Math.random()*o.length)];if(u&&this.bubbles.length<4){let d=o.filter(c=>c!==u&&Math.hypot(c.pos.x-u.pos.x,c.pos.z-u.pos.z)<3.2)[0];if(d){let c=this.ctx();this.say(u,uf(u.def,d.def,{kind:c.kind}),3600),setTimeout(()=>this.say(d,yf[Math.floor(Math.random()*yf.length)],1800),1900)}}}if(this.acc+=e,this.acc>1&&(this.acc=0,this.checkApproach(s)),this.approaching){let o=this.approaching;o.replan-=e,o.s.hidden?this.approaching=null:this.dist(o.s)<1.9?(o.s.path=[],o.s.moving=!1,this.say(o.s,df(o.s.def),4200),i.onToast(`${o.s.def.first} wants to chat. Tap them or press T.`),this.approachAt.set(o.s.def.id,s),this.approaching=null,setTimeout(()=>{!o.s.talking&&o.s.path.length===0&&(o.s.pending={delay:0,dest:i.open[Math.floor(Math.random()*i.open.length)],hide:!1})},14e3)):(o.replan<=0||s-o.since>2e4)&&(o.replan=1,s-o.since>2e4?this.approaching=null:this.pathTo(o.s))}}pathTo(e){let t=this.hall,i=Math.max(0,Math.min(55,Math.floor(e.pos.x+56/2))),s=Math.max(0,Math.min(43,Math.floor(e.pos.z+44/2))),r=Math.max(0,Math.min(55,Math.floor(t.player.pos.x+56/2))),a=Math.max(0,Math.min(43,Math.floor(t.player.pos.z+44/2)));e.pending=null,e.hideOnArrive=!1,e.path=Gs(si,i,s,r,a).map(h=>kx(h.x+.5,h.y+.5)),e.path.pop(),e.moving=e.path.length>0}checkApproach(e){if(!(this.approaching||this.chat.isOpen||this.hall.walking||this.ctx().kind==="class"))for(let i of this.hall.students){if(i.hidden||i.talking||!i.def)continue;let s=Ce.peek(i.def.id);if(!s||s.fr<30)continue;let r=this.dist(i);if(!(r<3||r>11)&&!(e-(this.approachAt.get(i.def.id)??-1e9)<18e4)){this.approaching={s:i,replan:0,since:e},this.pathTo(i);return}}}visible(){return this.hall.persons().map(e=>e.def).filter(Boolean)}};var Bx=`
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
`,xf=!1,Ze=(n,e="",t,i="")=>{let s=document.createElement(n);return e&&(s.className=e),i&&(s.textContent=i),t?.appendChild(s),s},_f=["down","right","up","left"],Ol=class{constructor(e=document.body){this.tab="Body";this.dir=0;this.walk=!1;this.t0=performance.now();this.raf=0;this.onSave=()=>{};this.onCancel=()=>{};this.loop=()=>{if(!this.root.classList.contains("show"))return;let e=(performance.now()-this.t0)/1e3,t=this.cv.getContext("2d");t.clearRect(0,0,this.cv.width,this.cv.height);let i=Oi(this.spec,11),s=8.6*(ni[this.spec.age]??1)*.92;t.save(),t.translate(this.cv.width/2,this.cv.height-46),t.scale(s,s),t.fillStyle="rgba(60,40,50,.18)",t.beginPath(),t.ellipse(0,1,13,4,0,0,7),t.fill(),t.shadowColor="rgba(52,34,46,.3)",t.shadowBlur=3,t.shadowOffsetY=1.5,qs(t,0,0,{...i,dir:_f[this.dir],moving:this.walk,walk:this.walk?e*8:0,tag:!1},e),t.restore(),this.raf=requestAnimationFrame(this.loop)};this.pending=0;if(!xf){xf=!0;let _=document.createElement("style");_.textContent=Bx,document.head.appendChild(_)}this.spec={...Ce.profile.avatar},this.root=Ze("div","uav",e);let t=Ze("div","uav-top",this.root);Ze("b","",t,"Create your avatar");let i=Ze("span","",t);i.style.flex="1";let s=Ze("button","uav-chip",t,"Cancel");s.type="button",s.onclick=()=>{this.hide(),this.onCancel()};let r=Ze("button","uav-chip uav-save",t,"Save and play");r.type="button",r.onclick=()=>this.save();let a=Ze("div","uav-wrap",this.root),h=Ze("div","uav-card uav-prev",a);this.cv=Ze("canvas","",h),this.cv.width=300,this.cv.height=400;let l=Ze("div","uav-row",h);l.style.justifyContent="center",_f.forEach((_,p)=>{let m=Ze("button","uav-chip",l,["Front","Right","Back","Left"][p]);m.type="button",m.onclick=()=>{this.dir=p,this.walk=!1}});let o=Ze("button","uav-chip",l,"Walk");o.type="button",o.onclick=()=>{this.walk=!this.walk,o.classList.toggle("on",this.walk)};let u=Ze("div","uav-row",h);u.style.justifyContent="center";let d=Ze("button","uav-chip",u,"Surprise me");d.type="button",d.onclick=()=>{let _=this.spec.name,p=this.spec.age;this.spec={...oa(fi(Date.now()&16777215),p),name:_},this.render()};let c=Ze("button","uav-chip",u,"Reset");c.type="button",c.onclick=()=>{let _=this.spec.name;this.spec={...Zs(),name:_},this.render()};let f=Ze("div","uav-card",a),g=Ze("div","uav-tabs",f);for(let _ of["Body","Face","Hair","Outfit","Extras","You"]){let p=Ze("button","uav-chip",g,_);p.type="button",p.dataset.tab=_,p.onclick=()=>{this.tab=_,this.render()}}this.body=Ze("div","",f),this.root.addEventListener("keydown",_=>_.stopPropagation()),this.root.addEventListener("pointerdown",_=>_.stopPropagation())}show(){this.spec={...Ce.profile.avatar,name:Ce.profile.name||Ce.profile.avatar.name},this.root.classList.add("show"),this.render(),this.loop()}hide(){this.root.classList.remove("show"),cancelAnimationFrame(this.raf)}save(){let e=(this.nameInput?.value??this.spec.name).trim().slice(0,14)||"Student";this.spec.name=e,Ce.setProfile({name:e,avatar:{...this.spec},hasAvatar:!0}),this.hide(),this.onSave(this.spec,e)}set(e,t){this.spec[e]=t,this.render(!1)}chips(e,t,i){Ze("div","uav-lab",this.body,e);let s=Ze("div","uav-row",this.body);for(let r of i){let a=Ze("button","uav-chip"+(this.spec[t]===r.id?" on":""),s,r.label);a.type="button",a.onclick=()=>{this.set(t,r.id)}}}swatches(e,t,i,s){Ze("div","uav-lab",this.body,e);let r=Ze("div","uav-row",this.body);if(s){let h=Ze("button","uav-sw none"+(this.spec[t]==null?" on":""),r);h.type="button",h.title=s,h.setAttribute("aria-label",s),h.onclick=()=>this.set(t,null)}for(let h of i){let l=Ze("button","uav-sw"+(this.spec[t]===h?" on":""),r);l.type="button",l.style.background=h,l.setAttribute("aria-label",h),l.onclick=()=>this.set(t,h)}let a=Ze("input","uav-custom",r);a.type="color",a.value=typeof this.spec[t]=="string"&&/^#[0-9a-f]{6}$/i.test(this.spec[t])?this.spec[t]:i[0],a.title="Custom colour",a.oninput=()=>{this.spec[t]=a.value,this.renderSoon()}}toggle(e,t){let i=Ze("label","uav-switch",this.body),s=Ze("input","",i);s.type="checkbox",s.checked=!!this.spec[t],s.onchange=()=>this.set(t,s.checked),i.appendChild(document.createTextNode(e))}slider(e,t,i,s,r){Ze("div","uav-lab",this.body,e);let a=Ze("input","",this.body);a.type="range",a.min=String(i),a.max=String(s),a.step=String(r),a.value=String(this.spec[t]),a.oninput=()=>{this.spec[t]=Number(a.value)}}renderSoon(){clearTimeout(this.pending),this.pending=window.setTimeout(()=>this.render(!1),250)}render(e=!0){this.root.querySelectorAll("[data-tab]").forEach(r=>r.classList.toggle("on",r.dataset.tab===this.tab));let t=this.root.scrollTop;this.body.innerHTML="";let i=aa,s=this.body;if(this.tab==="Body")this.chips("Grade band (sets your height)","age",i.age),this.chips("Build","build",i.build),this.slider("Head size","headSize",.9,1.12,.01),this.swatches("Skin tone","skin",bc),this.chips("Pronouns","pronouns",Yd.map(r=>({id:r,label:r})));else if(this.tab==="Face"){this.chips("Eyes","eyeShape",i.eyeShape),this.swatches("Eye colour","eyeColor",Sc),this.chips("Eyebrows","brow",i.brow),this.swatches("Eyebrow colour","browColor",ji,"Match hair"),this.chips("Mouth","mouthStyle",i.mouthStyle),this.swatches("Lip colour","lip",["#8a4650","#c4463c","#e8789a","#b5563e","#563428","#e07a66"]),Ze("div","uav-lab",s,"Details");let r=Ze("div","uav-row",s);this.toggle("Freckles","freckles"),this.toggle("Beauty mark","mole"),this.toggle("Little nose","nose"),this.toggle("Rosy cheeks","blush"),this.chips("Glasses","glasses",i.glasses),this.swatches("Glasses colour","glassColor",["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da","#eab94e"])}else if(this.tab==="Hair")this.chips("Style","hairStyle",i.hairStyle),this.swatches("Colour","hair",ji),this.swatches("Highlights","hair2",ji,"No highlights");else if(this.tab==="Outfit")this.chips("Top","top",i.top),this.swatches("Top colour","shirt",Qt),this.chips("Pattern","pattern",i.pattern),this.swatches("Pattern / under-shirt colour","shirt2",Qt),this.chips("Bottoms","bottom",i.bottom),this.swatches("Bottoms colour","pants",Qt),this.chips("Shoes","shoeStyle",i.shoeStyle),this.swatches("Shoe colour","shoes",Mc);else if(this.tab==="Extras")this.chips("Hat","hat",i.hat),this.swatches("Hat colour","hatColor",Qt),this.chips("Bag","packStyle",i.packStyle),this.swatches("Bag colour","pack",Qt),this.swatches("Earrings","earrings",["#eab94e","#fff6ea","#f28f7e","#8fc9e8"],"None"),this.swatches("Scarf","scarf",Qt,"None"),this.swatches("Badge","badge",Qt,"None");else{Ze("h2","",s,"About you"),Ze("div","uav-lab",s,"Your name (classmates will remember it)");let r=Ze("input","",s);r.type="text",r.maxLength=14,r.value=this.spec.name==="Student"?"":this.spec.name,r.placeholder="Type your name",this.nameInput=r,r.oninput=()=>{this.spec.name=r.value},Ze("div","uav-lab",s,"Tip"),Ze("div","",s,"Classmates notice what you wear. Try a hat or glasses and see who compliments it. Everything you tell them is remembered, so introduce yourself!")}this.root.scrollTop=t}};var Ht=n=>document.getElementById(n),Tt=new Il(Ht("game"));window.__hall=Tt;Tt.onToast=n=>{let e=Ht("toast");e.textContent=n,e.classList.toggle("show",!!n),clearTimeout(Tt._tt),n&&(Tt._tt=setTimeout(()=>e.classList.remove("show"),3500))};var nr=new Ul(Tt,document.body);window.__social=nr;var fa=new Ol(document.body);window.__creator=fa;var Bl=n=>{Tt.inputLocked=n};fa.onSave=n=>{Tt.setAvatar(n),Bl(!1),Tt.onToast(`Looking good, ${n.name}!`)};fa.onCancel=()=>Bl(!1);Ht("bAvatar").onclick=()=>{Bl(!0),fa.show()};Ht("bFriends").onclick=()=>nr.journal.toggle();var Rc=Ht("talkChip");nr.onNearby=n=>{Rc.classList.toggle("show",!!n),n&&(Rc.textContent=`Talk to ${n.def?.first} (T)`)};Rc.onclick=()=>{nr.nearby&&nr.talkTo(nr.nearby)};Ce.profile.hasAvatar||setTimeout(()=>{Bl(!0),fa.show()},600);var tr={},vf=()=>{Tt.input.x=(tr.r?1:0)-(tr.l?1:0),Tt.input.y=(tr.d?1:0)-(tr.u?1:0)};document.querySelectorAll("[data-k]").forEach(n=>{let e=n.dataset.k;n.addEventListener("pointerdown",t=>{t.preventDefault(),tr[e]=!0,vf()}),["pointerup","pointerleave","pointercancel"].forEach(t=>n.addEventListener(t,()=>{tr[e]=!1,vf()}))});document.querySelectorAll("[data-rot]").forEach(n=>{let e=+n.dataset.rot;n.addEventListener("pointerdown",t=>{t.preventDefault(),Tt.rotate=e}),["pointerup","pointerleave","pointercancel"].forEach(t=>n.addEventListener(t,()=>{Tt.rotate=0}))});var kl=Ht("goMenu");af.forEach(n=>{let e=document.createElement("button");e.innerHTML=`<i style="background:${n.color}"></i>${n.label}`,e.onclick=()=>{kl.classList.remove("show"),Tt.goTo(n.key)},kl.appendChild(e)});Ht("bGo").onclick=()=>kl.classList.toggle("show");Ht("game").addEventListener("pointerdown",()=>kl.classList.remove("show"));Ht("bSpd").onclick=()=>{Tt.speed=Tt.speed===1?4:Tt.speed===4?16:1,Ht("bSpd").textContent=`Speed x${Tt.speed}`};var zx={close:"Close-up",overview:"Overview",first:"First person"};Ht("bView").onclick=()=>{let n=Tt.cycleView();Ht("bView").textContent=`View: ${zx[n]}`};setInterval(()=>{let n=Vn[Math.max(0,Tt.idx)];Ht("clk").textContent=Al(Tt.clock),Ht("per").textContent=n.name,Ht("fill").style.width=`${(Tt.clock-n.start)/n.len*100}%`;let e=Tt.students.filter(a=>!a.hidden).length;Ht("cnt").textContent=`${e} in the hall, ${Tt.students.length-e} in class or away`;let[t,i,s,r]=Tt.tint;Ht("tint").style.background=`rgba(${t|0},${i|0},${s|0},${r})`},200);(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256);for(let i=0;i<t.data.length;i+=4){let s=226+Math.random()*29;t.data[i]=s,t.data[i+1]=s*.965,t.data[i+2]=s*.9,t.data[i+3]=255}e.putImageData(t,0,0),e.lineCap="round";for(let i=0;i<260;i++){e.strokeStyle=`rgba(255,250,240,${.08+Math.random()*.16})`,e.lineWidth=.6+Math.random()*.5;let s=Math.random()*256,r=Math.random()*256,a=Math.random()*6.28,h=3+Math.random()*9;e.beginPath(),e.moveTo(s,r),e.lineTo(s+Math.cos(a)*h,r+Math.sin(a)*h),e.stroke()}Ht("paper").style.backgroundImage=`url(${n.toDataURL()})`})();})();
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
