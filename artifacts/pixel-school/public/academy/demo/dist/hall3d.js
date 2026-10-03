"use strict";(()=>{var Ao="186";var pu=0,_c=1,mu=2;var Nr=1,Co=2,Ns=3,Ri=0,tn=1,Mn=2,jn=0,Fs=1,vc=2,bc=3,Sc=4,gu=5;var qi=100,yu=101,xu=102,_u=103,vu=104,bu=200,Su=201,Mu=202,Tu=203,Mc=204,Tc=205,Eu=206,wu=207,Au=208,Cu=209,Ru=210,Pu=211,Iu=212,Lu=213,Du=214,Xa=0,qa=1,$a=2,Ss=3,Ya=4,Za=5,Ja=6,Ka=7,Ec=0,Nu=1,Fu=2,kn=0,wc=1,Ac=2,Cc=3,Rc=4,Pc=5,Ic=6,Lc=7;var Dc=300,Pi=301,$i=302,Ro=303,Po=304,Fr=306,Ms=1e3,$n=1001,ja=1002,Ut=1003,Uu=1004;var Ur=1005;var zt=1006,Io=1007;var Ii=1008;var on=1009,Nc=1010,Fc=1011,Us=1012,Lo=1013,Bn=1014,Tn=1015,zn=1016,Do=1017,No=1018,Os=1020,Uc=35902,Oc=35899,kc=1021,Bc=1022,En=1023,Yn=1026,Li=1027,Fo=1028,Uo=1029,Di=1030,Oo=1031;var ko=1033,Or=33776,kr=33777,Br=33778,zr=33779,Bo=35840,zo=35841,Ho=35842,Vo=35843,Go=36196,Wo=37492,Xo=37496,qo=37488,$o=37489,Hr=37490,Yo=37491,Zo=37808,Jo=37809,Ko=37810,jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,cl=36492,hl=36494,ul=36495,dl=36283,fl=36284,Vr=36285,pl=36286;var hr=2300,Qa=2301,Va=2302,uc=2303,dc=2400,fc=2401,pc=2402;var Ou=3200;var ml=0,ku=1,ui="",Ft="srgb",ur="srgb-linear",dr="linear",at="srgb";var Ga=7680;var Bu=519,zu=512,Hu=513,Vu=514,gl=515,Gu=516,Wu=517,yl=518,Xu=519,zc=35044;var Hc="300 es",Un=2e3,Ts=2001;function Tf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ef(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qu(){let n=fr("canvas");return n.style.display="block",n}var Oh={},Es=null;function pr(...n){let e="THREE."+n.shift();Es?Es("log",e,...n):console.log(e,...n)}function $u(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=$u(n);let e="THREE."+n.shift();if(Es)Es("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Fe(...n){n=$u(n);let e="THREE."+n.shift();if(Es)Es("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vi(...n){let e=n.join(" ");e in Oh||(Oh[e]=!0,De(...n))}function Yu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Zu={[Xa]:qa,[$a]:Ja,[Ya]:Ka,[Ss]:Za,[qa]:Xa,[Ja]:$a,[Ka]:Ya,[Za]:Ss},Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wa=Math.PI/180,eo=180/Math.PI;function bi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function wf(n,e){return(n%e+e)%e}function zl(n,e,t){return(1-t)*n+t*e}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Oe=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let c=i[s+0],o=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||c!==h||o!==f||u!==g){let m=c*h+o*f+u*g+d*S;m<0&&(h=-h,f=-f,g=-g,S=-S,m=-m);let p=1-l;if(m<.9995){let M=Math.acos(m),C=Math.sin(M);p=Math.sin(p*M)/C,l=Math.sin(l*M)/C,c=c*p+h*l,o=o*p+f*l,u=u*p+g*l,d=d*p+S*l}else{c=c*p+h*l,o=o*p+f*l,u=u*p+g*l,d=d*p+S*l;let M=1/Math.sqrt(c*c+o*o+u*u+d*d);c*=M,o*=M,u*=M,d*=M}}e[t]=c,e[t+1]=o,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let l=i[s],c=i[s+1],o=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=l*g+u*d+c*f-o*h,e[t+1]=c*g+u*h+o*d-l*f,e[t+2]=o*g+u*f+l*h-c*d,e[t+3]=u*g-l*d-c*h-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(i/2),u=l(s/2),d=l(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+o*f*g,this._y=o*f*d-h*u*g,this._z=o*u*g+h*f*d,this._w=o*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+o*f*g,this._y=o*f*d-h*u*g,this._z=o*u*g-h*f*d,this._w=o*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-o*f*g,this._y=o*f*d+h*u*g,this._z=o*u*g+h*f*d,this._w=o*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-o*f*g,this._y=o*f*d+h*u*g,this._z=o*u*g-h*f*d,this._w=o*u*d+h*f*g;break;case"YZX":this._x=h*u*d+o*f*g,this._y=o*f*d+h*u*g,this._z=o*u*g-h*f*d,this._w=o*u*d-h*f*g;break;case"XZY":this._x=h*u*d-o*f*g,this._y=o*f*d-h*u*g,this._z=o*u*g+h*f*d,this._w=o*u*d+h*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],c=t[9],o=t[2],u=t[6],d=t[10],h=i+l+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-o)*f,this._z=(a-s)*f}else if(i>l&&i>d){let f=2*Math.sqrt(1+i-l-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+o)/f}else if(l>d){let f=2*Math.sqrt(1+l-i-d);this._w=(r-o)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-l);this._w=(a-s)/f,this._x=(r+o)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,c=t._y,o=t._z,u=t._w;return this._x=i*u+a*l+s*o-r*c,this._y=s*u+a*c+r*l-i*o,this._z=r*u+a*o+i*c-s*l,this._w=a*u-i*l-s*c-r*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let c=1-t;if(l<.9995){let o=Math.acos(l),u=Math.sin(o);c=Math.sin(c*o)/u,t=Math.sin(t*o)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*s-l*i),u=2*(l*t-r*s),d=2*(r*i-a*t);return this.x=t+c*o+a*d-l*u,this.y=i+c*u+l*o-r*d,this.z=s+c*d+r*u-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*a-i*c,this.z=i*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hl=new I,kh=new un,He=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,c,o)}set(e,t,i,s,r,a,l,c,o){let u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],S=s[0],m=s[3],p=s[6],M=s[1],C=s[4],v=s[7],T=s[2],E=s[5],R=s[8];return r[0]=a*S+l*M+c*T,r[3]=a*m+l*C+c*E,r[6]=a*p+l*v+c*R,r[1]=o*S+u*M+d*T,r[4]=o*m+u*C+d*E,r[7]=o*p+u*v+d*R,r[2]=h*S+f*M+g*T,r[5]=h*m+f*C+g*E,r[8]=h*p+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8];return t*a*u-t*l*o-i*r*u+i*l*c+s*r*o-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8],d=u*a-l*o,h=l*c-u*r,f=o*r-a*c,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*o-u*i)*S,e[2]=(l*i-s*a)*S,e[3]=h*S,e[4]=(u*t-s*c)*S,e[5]=(s*r-l*t)*S,e[6]=f*S,e[7]=(i*c-o*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){let c=Math.cos(r),o=Math.sin(r);return this.set(i*c,i*o,-i*(c*a+o*l)+a+e,-s*o,s*c,-s*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(e,t)),this}rotate(e){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-e)),this}translate(e,t){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new He,Bh=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){let n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ur]:{primaries:e,whitePoint:i,transfer:dr,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}var Ke=Af();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var is,to=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=fr("canvas")),is.width=e.width,is.height=e.height;let s=is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cf=0,ws=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Gl(s[a].image)):r.push(Gl(s[a]))}else r=Gl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?to.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Rf=0,Wl=new I,en=class n extends Zn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=$n,s=$n,r=zt,a=Ii,l=En,c=on,o=n.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=bi(),this.name="",this.source=new ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Dc;en.DEFAULT_ANISOTROPY=1;var vt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,o=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(o+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(o+1)/2,v=(f+1)/2,T=(p+1)/2,E=(u+h)/4,R=(d+S)/4,x=(g+m)/4;return C>v&&C>T?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=E/i,r=R/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-S)/M,this.z=(h-u)/M,this.w=Math.acos((o+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},no=class extends Zn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new en(s),a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ws(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends no{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},mr=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var io=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var nt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,l,c,o,u,d,h,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,c,o,u,d,h,f,g,S,m)}set(e,t,i,s,r,a,l,c,o,u,d,h,f,g,S,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=o,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),o=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=l*u,S=l*d;t[0]=c*u,t[4]=-c*d,t[8]=o,t[1]=f+g*o,t[5]=h-S*o,t[9]=-l*c,t[2]=S-h*o,t[6]=g+f*o,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=o*u,S=o*d;t[0]=h+S*l,t[4]=g*l-f,t[8]=a*o,t[1]=a*d,t[5]=a*u,t[9]=-l,t[2]=f*l-g,t[6]=S+h*l,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=o*u,S=o*d;t[0]=h-S*l,t[4]=-a*d,t[8]=g+f*l,t[1]=f+g*l,t[5]=a*u,t[9]=S-h*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=l*u,S=l*d;t[0]=c*u,t[4]=g*o-f,t[8]=h*o+S,t[1]=c*d,t[5]=S*o+h,t[9]=f*o-g,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*o,g=l*c,S=l*o;t[0]=c*u,t[4]=S-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-l*u,t[2]=-o*u,t[6]=f*d+g,t[10]=h-S*d}else if(e.order==="XZY"){let h=a*c,f=a*o,g=l*c,S=l*o;t[0]=c*u,t[4]=-d,t[8]=o*u,t[1]=h*d+S,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=l*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,If)}lookAt(e,t,i){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),gi.crossVectors(i,ln),gi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),gi.crossVectors(i,ln)),gi.normalize(),pa.crossVectors(ln,gi),s[0]=gi.x,s[4]=pa.x,s[8]=ln.x,s[1]=gi.y,s[5]=pa.y,s[9]=ln.y,s[2]=gi.z,s[6]=pa.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],S=i[6],m=i[10],p=i[14],M=i[3],C=i[7],v=i[11],T=i[15],E=s[0],R=s[4],x=s[8],w=s[12],P=s[1],b=s[5],L=s[9],k=s[13],D=s[2],H=s[6],Y=s[10],F=s[14],ne=s[3],X=s[7],K=s[11],B=s[15];return r[0]=a*E+l*P+c*D+o*ne,r[4]=a*R+l*b+c*H+o*X,r[8]=a*x+l*L+c*Y+o*K,r[12]=a*w+l*k+c*F+o*B,r[1]=u*E+d*P+h*D+f*ne,r[5]=u*R+d*b+h*H+f*X,r[9]=u*x+d*L+h*Y+f*K,r[13]=u*w+d*k+h*F+f*B,r[2]=g*E+S*P+m*D+p*ne,r[6]=g*R+S*b+m*H+p*X,r[10]=g*x+S*L+m*Y+p*K,r[14]=g*w+S*k+m*F+p*B,r[3]=M*E+C*P+v*D+T*ne,r[7]=M*R+C*b+v*H+T*X,r[11]=M*x+C*L+v*Y+T*K,r[15]=M*w+C*k+v*F+T*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],c=e[9],o=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],S=e[7],m=e[11],p=e[15],M=c*f-o*h,C=l*f-o*d,v=l*h-c*d,T=a*f-o*u,E=a*h-c*u,R=a*d-l*u;return t*(S*M-m*C+p*v)-i*(g*M-m*T+p*E)+s*(g*C-S*T+p*R)-r*(g*v-S*E+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],o=e[6],u=e[10];return t*(a*u-l*o)-i*(r*u-l*c)+s*(r*o-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],S=e[13],m=e[14],p=e[15],M=t*l-i*a,C=t*c-s*a,v=t*o-r*a,T=i*c-s*l,E=i*o-r*l,R=s*o-r*c,x=u*S-d*g,w=u*m-h*g,P=u*p-f*g,b=d*m-h*S,L=d*p-f*S,k=h*p-f*m,D=M*k-C*L+v*b+T*P-E*w+R*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return e[0]=(l*k-c*L+o*b)*H,e[1]=(s*L-i*k-r*b)*H,e[2]=(S*R-m*E+p*T)*H,e[3]=(h*E-d*R-f*T)*H,e[4]=(c*P-a*k-o*w)*H,e[5]=(t*k-s*P+r*w)*H,e[6]=(m*v-g*R-p*C)*H,e[7]=(u*R-h*v+f*C)*H,e[8]=(a*L-l*P+o*x)*H,e[9]=(i*P-t*L-r*x)*H,e[10]=(g*E-S*v+p*M)*H,e[11]=(d*v-u*E-f*M)*H,e[12]=(l*w-a*b-c*x)*H,e[13]=(t*b-i*w+s*x)*H,e[14]=(S*C-g*T-m*M)*H,e[15]=(u*T-d*C+h*M)*H,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,c=e.z,o=r*a,u=r*l;return this.set(o*a+i,o*l-s*c,o*c+s*l,0,o*l+s*c,u*l+i,u*c-s*a,0,o*c-s*l,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,o=r+r,u=a+a,d=l+l,h=r*o,f=r*u,g=r*d,S=a*u,m=a*d,p=l*d,M=c*o,C=c*u,v=c*d,T=i.x,E=i.y,R=i.z;return s[0]=(1-(S+p))*T,s[1]=(f+v)*T,s[2]=(g-C)*T,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(h+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+C)*R,s[9]=(m-M)*R,s[10]=(1-(h+S))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ss.set(s[0],s[1],s[2]).length(),l=ss.set(s[4],s[5],s[6]).length(),c=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let o=1/a,u=1/l,d=1/c;return Dn.elements[0]*=o,Dn.elements[1]*=o,Dn.elements[2]*=o,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,t,i,s,r,a,l=Un,c=!1){let o=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,S;if(c)g=r/(a-r),S=a*r/(a-r);else if(l===Un)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(l===Ts)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=d,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=Un,c=!1){let o=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,S;if(c)g=1/(a-r),S=a/(a-r);else if(l===Un)g=-2/(a-r),S=-(a+r)/(a-r);else if(l===Ts)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=0,o[12]=h,o[1]=0,o[5]=d,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=g,o[14]=S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ss=new I,Dn=new nt,Pf=new I(0,0,0),If=new I(1,1,1),gi=new I,pa=new I,ln=new I,Hh=new nt,Vh=new un,On=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,o),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lf=0,Gh=new I,rs=new un,si=new nt,ma=new I,er=new I,Df=new I,Nf=new un,Wh=new I(1,0,0),Xh=new I(0,1,0),qh=new I(0,0,1),$h={type:"added"},Ff={type:"removed"},as={type:"childadded",child:null},Xl={type:"childremoved",child:null},Ot=class n extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new On,i=new un,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new He}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ma.copy(e):ma.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(er,ma,this.up):si.lookAt(ma,er,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(si),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),as.child=e,this.dispatchEvent(as),as.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,u=c.length;o<u;o++){let d=c[o];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),o=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(l){let c=[];for(let o in l){let u=l[o];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uf={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,i),p=this._getHandJoint(o,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=o.joints["index-finger-tip"],d=o.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;o.inputState.pinching&&h>f+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&h<=f-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=wf(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ql(a,r,e+1/3),this.g=ql(a,r,e),this.b=ql(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=Ju[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ke.workingToColorSpace(qt.copy(this),e),Math.round(je(qt.r*255,0,255))*65536+Math.round(je(qt.g*255,0,255))*256+Math.round(je(qt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(qt.copy(this),t);let i=qt.r,s=qt.g,r=qt.b,a=Math.max(i,s,r),l=Math.min(i,s,r),c,o,u=(l+a)/2;if(l===a)c=0,o=0;else{let d=a-l;switch(o=u<=.5?d/(a+l):d/(2-a-l),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=o,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ft){Ke.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,s=qt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(ga);let i=zl(yi.h,ga.h,t),s=zl(yi.s,ga.s,t),r=zl(yi.l,ga.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Ve;Ve.NAMES=Ju;var gr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yr=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new I,ri=new I,$l=new I,ai=new I,os=new I,ls=new I,Yh=new I,Yl=new I,Zl=new I,Jl=new I,Kl=new vt,jl=new vt,Ql=new vt,qn=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),ri.subVectors(i,t),$l.subVectors(e,t);let a=Nn.dot(Nn),l=Nn.dot(ri),c=Nn.dot($l),o=ri.dot(ri),u=ri.dot($l),d=a*o-l*l;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(o*c-l*u)*h,g=(a*u-l*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,a,l,c){return this.getBarycoord(e,t,i,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(a,ai.y),c.addScaledVector(l,ai.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Kl.setScalar(0),jl.setScalar(0),Ql.setScalar(0),Kl.fromBufferAttribute(e,t),jl.fromBufferAttribute(e,i),Ql.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kl,r.x),a.addScaledVector(jl,r.y),a.addScaledVector(Ql,r.z),a}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),ri.subVectors(e,t),Nn.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,l;os.subVectors(s,i),ls.subVectors(r,i),Yl.subVectors(e,i);let c=os.dot(Yl),o=ls.dot(Yl);if(c<=0&&o<=0)return t.copy(i);Zl.subVectors(e,s);let u=os.dot(Zl),d=ls.dot(Zl);if(u>=0&&d<=u)return t.copy(s);let h=c*d-u*o;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(os,a);Jl.subVectors(e,r);let f=os.dot(Jl),g=ls.dot(Jl);if(g>=0&&f<=g)return t.copy(r);let S=f*o-c*g;if(S<=0&&o>=0&&g<=0)return l=o/(o-g),t.copy(i).addScaledVector(ls,l);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Yh.subVectors(r,s),l=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Yh,l);let p=1/(m+S+h);return a=S*p,l=h*p,t.copy(i).addScaledVector(os,a).addScaledVector(ls,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),xa.subVectors(this.max,tr),cs.subVectors(e.a,tr),hs.subVectors(e.b,tr),us.subVectors(e.c,tr),xi.subVectors(hs,cs),_i.subVectors(us,hs),ki.subVectors(cs,us);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-ki.z,ki.y,xi.z,0,-xi.x,_i.z,0,-_i.x,ki.z,0,-ki.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-ki.y,ki.x,0];return!ec(t,cs,hs,us,xa)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,cs,hs,us,xa))?!1:(_a.crossVectors(xi,_i),t=[_a.x,_a.y,_a.z],ec(t,cs,hs,us,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,ya=new Sn,cs=new I,hs=new I,us=new I,xi=new I,_i=new I,ki=new I,tr=new I,xa=new I,_a=new I,Bi=new I;function ec(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Bi.fromArray(n,r);let l=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),c=e.dot(Bi),o=t.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(c,o,u),Math.min(c,o,u))>l)return!1}return!0}var Ct=new I,va=new Oe,Of=0,rn=class extends Zn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xr=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _r=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ot=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},kf=new Sn,nr=new I,tc=new I,hi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):kf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(tc)),this.expandByPoint(nr.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bf=0,bn=new nt,nc=new Ot,ds=new I,cn=new Sn,ir=new Sn,Nt=new I,Rt=class n extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tf(e)?_r:xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];ir.setFromBufferAttribute(l),this.morphTargetsRelative?(Nt.addVectors(cn.min,ir.min),cn.expandByPoint(Nt),Nt.addVectors(cn.max,ir.max),cn.expandByPoint(Nt)):(cn.expandByPoint(ir.min),cn.expandByPoint(ir.max))}cn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],c=this.morphTargetsRelative;for(let o=0,u=l.count;o<u;o++)Nt.fromBufferAttribute(l,o),c&&(ds.fromBufferAttribute(e,o),Nt.add(ds)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new I,c[x]=new I;let o=new I,u=new I,d=new I,h=new Oe,f=new Oe,g=new Oe,S=new I,m=new I;function p(x,w,P){o.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,P),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),u.sub(o),d.sub(o),f.sub(h),g.sub(h);let b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(b),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(b),l[x].add(S),l[w].add(S),l[P].add(S),c[x].add(m),c[w].add(m),c[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,w=M.length;x<w;++x){let P=M[x],b=P.start,L=P.count;for(let k=b,D=b+L;k<D;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let C=new I,v=new I,T=new I,E=new I;function R(x){T.fromBufferAttribute(s,x),E.copy(T);let w=l[x];C.copy(w),C.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(E,w);let b=v.dot(c[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,b)}for(let x=0,w=M.length;x<w;++x){let P=M[x],b=P.start,L=P.count;for(let k=b,D=b+L;k<D;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,l=new I,c=new I,o=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,S),o.fromBufferAttribute(i,m),l.add(u),c.add(u),o.add(u),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,o.x,o.y,o.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(l,c){let o=l.array,u=l.itemSize,d=l.normalized,h=new o.constructor(c.length*u),f=0,g=0;for(let S=0,m=c.length;S<m;S++){l.isInterleavedBufferAttribute?f=c[S]*l.data.stride+l.offset:f=c[S]*u;for(let p=0;p<u;p++)h[g++]=o[f++]}return new rn(h,u,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],o=e(c,i);t.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let c=[],o=r[l];for(let u=0,d=o.length;u<d;u++){let h=o[u],f=e(h,i);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let o=i[c];e.data.attributes[c]=o.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],u=[];for(let d=0,h=o.length;d<h;d++){let f=o[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let o in s){let u=s[o];this.setAttribute(o,u.clone(t))}let r=e.morphAttributes;for(let o in r){let u=[],d=r[o];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[o]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,u=a.length;o<u;o++){let d=a[o];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},so=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Qt=new I,vr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ic=new I,zf=new I,Hf=new He,hn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ic.subVectors(i,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Hf.getNormalMatrix(e),s=this.coplanarPoint(ic).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vf=0,Jn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Fs,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Tc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new hn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rs=class extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fs,sr=new I,ps=new I,ms=new I,gs=new Oe,rr=new Oe,Ku=new nt,ba=new I,ar=new I,Sa=new I,Zh=new Oe,sc=new Oe,Jh=new Oe,br=class extends Ot{constructor(e=new Rs){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new so(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new vr(i,3,0,!1)),fs.setAttribute("uv",new vr(i,2,3,!1))}this.geometry=fs,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Ku.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ma(ba.set(-.5,-.5,0),ms,a,ps,s,r),Ma(ar.set(.5,-.5,0),ms,a,ps,s,r),Ma(Sa.set(.5,.5,0),ms,a,ps,s,r),Zh.set(0,0),sc.set(1,0),Jh.set(1,1);let l=e.ray.intersectTriangle(ba,ar,Sa,!1,sr);if(l===null&&(Ma(ar.set(-.5,.5,0),ms,a,ps,s,r),sc.set(0,1),l=e.ray.intersectTriangle(ba,Sa,ar,!1,sr),l===null))return;let c=e.ray.origin.distanceTo(sr);c<e.near||c>e.far||t.push({distance:c,point:sr.clone(),uv:qn.getInterpolation(sr,ba,ar,Sa,Zh,sc,Jh,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ma(n,e,t,i,s,r){gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(rr.x=r*gs.x-s*gs.y,rr.y=s*gs.x+r*gs.y):rr.copy(gs),n.copy(e),n.x+=rr.x,n.y+=rr.y,n.applyMatrix4(Ku)}var li=new I,rc=new I,Ta=new I,Ea=new I,Si=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){rc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Ea.copy(this.origin).sub(rc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),l=Ea.dot(this.direction),c=-Ea.dot(Ta),o=Ea.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-l,h=a*l-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let S=1/u;d*=S,h*=S,f=d*(d+a*h+2*l)+h*(a*d+h+2*c)+o}else h=r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+o;else h=-r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+o;else h<=-g?(d=Math.max(0,-(-a*r+l)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+o):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+o):(d=Math.max(0,-(a*r+l)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+o);else h=a>0?-r:r,d=Math.max(0,-(a*h+l)),f=-d*d+h*(h+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rc).addScaledVector(Ta,h),f}intersectSphere(e,t){if(e.radius<0)return null;li.subVectors(e.center,this.origin);let i=li.dot(this.direction),s=li.dot(li)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,c,o=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return o>=0?(i=(e.min.x-h.x)*o,s=(e.max.x-h.x)*o):(i=(e.max.x-h.x)*o,s=(e.min.x-h.x)*o),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(l=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(l=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,l=this.direction,c=l.x,o=l.y,u=l.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=i.x-a.x,M=i.y-a.y,C=i.z-a.z,v=Math.abs(c),T=Math.abs(o),E=Math.abs(u),R,x,w,P,b,L,k,D,H,Y,F,ne;if(v>=T&&v>=E?(w=c,L=d,H=g,ne=p,c>=0?(R=o,x=u,P=h,b=f,k=S,D=m,Y=M,F=C):(R=u,x=o,P=f,b=h,k=m,D=S,Y=C,F=M)):T>=E?(w=o,L=h,H=S,ne=M,o>=0?(R=u,x=c,P=f,b=d,k=m,D=g,Y=C,F=p):(R=c,x=u,P=d,b=f,k=g,D=m,Y=p,F=C)):(w=u,L=f,H=m,ne=C,u>=0?(R=c,x=o,P=d,b=h,k=g,D=S,Y=p,F=M):(R=o,x=c,P=h,b=d,k=S,D=g,Y=M,F=p)),w===0)return null;let X=R/w,K=x/w,B=1/w,j=P-X*L,se=b-K*L,Be=k-X*H,Pe=D-K*H,Ge=Y-X*ne,$=F-K*ne,Q=Ge*Pe-$*Be,_e=j*$-se*Ge,Ne=Be*se-Pe*j;if(s){if(Q<0||_e<0||Ne<0)return null}else if((Q<0||_e<0||Ne<0)&&(Q>0||_e>0||Ne>0))return null;let re=Q+_e+Ne;if(re===0)return null;let ze=B*(Q*L+_e*H+Ne*ne);return(re>0?ze<0:ze>0)?null:this.at(ze/re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kh=new nt,zi=new Si,wa=new hi,jh=new I,Aa=new I,Ca=new I,Ra=new I,ac=new I,Pa=new I,Qh=new I,Ia=new I,ke=class extends Ot{constructor(e=new Rt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Pa.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let u=l[c],d=r[c];u!==0&&(ac.fromBufferAttribute(d,e),a?Pa.addScaledVector(ac,u):Pa.addScaledVector(ac.sub(t),u))}t.add(Pa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(wa.containsPoint(zi.origin)===!1&&(zi.intersectSphere(wa,jh)===null||zi.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),zi.copy(e.ray).applyMatrix4(Kh),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=C;v<T;v+=3){let E=l.getX(v),R=l.getX(v+1),x=l.getX(v+2);s=La(this,p,e,i,o,u,d,E,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let M=l.getX(m),C=l.getX(m+1),v=l.getX(m+2);s=La(this,a,e,i,o,u,d,M,C,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),C=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=C;v<T;v+=3){let E=v,R=v+1,x=v+2;s=La(this,p,e,i,o,u,d,E,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let M=m,C=m+1,v=m+2;s=La(this,a,e,i,o,u,d,M,C,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gf(n,e,t,i,s,r,a,l){let c;if(e.side===tn?c=i.intersectTriangle(a,r,s,!0,l):c=i.intersectTriangle(s,r,a,e.side===Ri,l),c===null)return null;Ia.copy(l),Ia.applyMatrix4(n.matrixWorld);let o=t.ray.origin.distanceTo(Ia);return o<t.near||o>t.far?null:{distance:o,point:Ia.clone(),object:n}}function La(n,e,t,i,s,r,a,l,c,o){n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ca),n.getVertexPosition(o,Ra);let u=Gf(n,e,t,i,Aa,Ca,Ra,Qh);if(u){let d=new I;qn.getBarycoord(Qh,Aa,Ca,Ra,d),s&&(u.uv=qn.getInterpolatedAttribute(s,l,c,o,d,new Oe)),r&&(u.uv1=qn.getInterpolatedAttribute(r,l,c,o,d,new Oe)),a&&(u.normal=qn.getInterpolatedAttribute(a,l,c,o,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:l,b:c,c:o,normal:new I,materialIndex:0};qn.getNormal(Aa,Ca,Ra,h.normal),u.face=h,u.barycoord=d}return u}var Sr=class extends en{constructor(e=null,t=1,i=1,s,r,a,l,c,o=Ut,u=Ut,d,h){super(null,a,l,c,o,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ys=new nt,eu=new nt,Da=[],tu=new Sn,Wf=new nt,or=new ke,lr=new hi,Ps=class extends ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Wf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),tu.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),lr.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(i),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),eu.multiplyMatrices(i,ys),or.matrixWorld=eu,or.raycast(e,Da);for(let a=0,l=Da.length;a<l;a++){let c=Da[a];c.instanceId=r,c.object=this,t.push(c)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(s*this.count),s,this.count,Fo,Tn));let r=this.morphTexture.source.data.data,a=0;for(let o=0;o<i.length;o++)a+=i[o];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=l,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new hi,Xf=new Oe(.5,.5),Na=new I,Is=class{constructor(e=new hn,t=new hn,i=new hn,s=new hn,r=new hn,a=new hn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],o=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],M=r[12],C=r[13],v=r[14],T=r[15];if(s[0].setComponents(o-a,f-u,p-g,T-M).normalize(),s[1].setComponents(o+a,f+u,p+g,T+M).normalize(),s[2].setComponents(o+l,f+d,p+S,T+C).normalize(),s[3].setComponents(o-l,f-d,p-S,T-C).normalize(),i)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(o-c,f-h,p-m,T-v).normalize();else if(s[4].setComponents(o-c,f-h,p-m,T-v).normalize(),t===Un)s[5].setComponents(o+c,f+h,p+m,T+v).normalize();else if(t===Ts)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);let t=Xf.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mi=class extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ro=new I,ao=new I,nu=new nt,cr=new Si,Fa=new hi,oc=new I,iu=new I,oo=class extends Ot{constructor(e=new Rt,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ro.fromBufferAttribute(t,s-1),ao.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ro.distanceTo(ao);e.setAttribute("lineDistance",new ot(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;nu.copy(s).invert(),cr.copy(e.ray).applyMatrix4(nu);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=f,m=g-1;S<m;S+=o){let p=u.getX(S),M=u.getX(S+1),C=Ua(this,e,cr,c,p,M,S);C&&t.push(C)}if(this.isLineLoop){let S=u.getX(g-1),m=u.getX(f),p=Ua(this,e,cr,c,S,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=f,m=g-1;S<m;S+=o){let p=Ua(this,e,cr,c,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){let S=Ua(this,e,cr,c,g-1,f,g-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ua(n,e,t,i,s,r,a){let l=n.geometry.attributes.position;if(ro.fromBufferAttribute(l,s),ao.fromBufferAttribute(l,r),t.distanceSqToSegment(ro,ao,oc,iu)>i)return;oc.applyMatrix4(n.matrixWorld);let o=e.ray.origin.distanceTo(oc);if(!(o<e.near||o>e.far))return{distance:o,point:iu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var su=new I,ru=new I,Gi=class extends oo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)su.fromBufferAttribute(t,s),ru.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+su.distanceTo(ru);e.setAttribute("lineDistance",new ot(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Tr=class extends en{constructor(e=[],t=Pi,i,s,r,a,l,c,o,u){super(e,t,i,s,r,a,l,c,o,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wi=class extends en{constructor(e,t,i,s,r,a,l,c,o){super(e,t,i,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends en{constructor(e,t,i=Bn,s,r,a,l=Ut,c=Ut,o,u=Yn,d=1){if(u!==Yn&&u!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,l,c,u,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},lo=class extends Ti{constructor(e,t=Bn,i=Pi,s,r,a=Ut,l=Ut,c,o=Yn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,l,c,o),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Er=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kn=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],o=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(d,2));function g(S,m,p,M,C,v,T,E,R,x,w){let P=v/R,b=T/x,L=v/2,k=T/2,D=E/2,H=R+1,Y=x+1,F=0,ne=0,X=new I;for(let K=0;K<Y;K++){let B=K*b-k;for(let j=0;j<H;j++){let se=j*P-L;X[S]=se*M,X[m]=B*C,X[p]=D,o.push(X.x,X.y,X.z),X[S]=0,X[m]=0,X[p]=E>0?1:-1,u.push(X.x,X.y,X.z),d.push(j/R),d.push(1-K/x),F+=1}}for(let K=0;K<x;K++)for(let B=0;B<R;B++){let j=h+B+H*K,se=h+B+H*(K+1),Be=h+(B+1)+H*(K+1),Pe=h+(B+1)+H*K;c.push(j,se,Pe),c.push(se,Be,Pe),ne+=6}l.addGroup(f,ne,w),f+=ne,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wr=class n extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],c=[],o=new I,u=new Oe;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;o.x=e*Math.cos(f),o.y=e*Math.sin(f),a.push(o.x,o.y,o.z),l.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},kt=class n extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let o=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,S=[],m=i/2,p=0;M(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2));function M(){let v=new I,T=new I,E=0,R=(t-e)/i;for(let x=0;x<=r;x++){let w=[],P=x/r,b=P*(t-e)+e;for(let L=0;L<=s;L++){let k=L/s,D=k*c+l,H=Math.sin(D),Y=Math.cos(D);T.x=b*H,T.y=-P*i+m,T.z=b*Y,d.push(T.x,T.y,T.z),v.set(H,R,Y).normalize(),h.push(v.x,v.y,v.z),f.push(k,1-P),w.push(g++)}S.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let P=S[w][x],b=S[w+1][x],L=S[w+1][x+1],k=S[w][x+1];(e>0||w!==0)&&(u.push(P,b,k),E+=3),(t>0||w!==r-1)&&(u.push(b,L,k),E+=3)}o.addGroup(p,E,0),p+=E}function C(v){let T=g,E=new Oe,R=new I,x=0,w=v===!0?e:t,P=v===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;let b=g;for(let L=0;L<=s;L++){let D=L/s*c+l,H=Math.cos(D),Y=Math.sin(D);R.x=w*Y,R.y=m*P,R.z=w*H,d.push(R.x,R.y,R.z),h.push(0,P,0),E.x=H*.5+.5,E.y=Y*.5*P+.5,f.push(E.x,E.y),g++}for(let L=0;L<s;L++){let k=T+L,D=b+L;v===!0?u.push(D,D+1,k):u.push(D+1,D,k),x+=3}o.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ei=class n extends kt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,e,t,i,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},co=class n extends Rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];l(s),o(i),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(M){let C=new I,v=new I,T=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],C),f(t[E+1],v),f(t[E+2],T),c(C,v,T,M)}function c(M,C,v,T){let E=T+1,R=[];for(let x=0;x<=E;x++){R[x]=[];let w=M.clone().lerp(v,x/E),P=C.clone().lerp(v,x/E),b=E-x;for(let L=0;L<=b;L++)L===0&&x===E?R[x][L]=w:R[x][L]=w.clone().lerp(P,L/b)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){let P=Math.floor(w/2);w%2===0?(h(R[x][P+1]),h(R[x+1][P]),h(R[x][P])):(h(R[x][P+1]),h(R[x+1][P+1]),h(R[x+1][P]))}}function o(M){let C=new I;for(let v=0;v<r.length;v+=3)C.x=r[v+0],C.y=r[v+1],C.z=r[v+2],C.normalize().multiplyScalar(M),r[v+0]=C.x,r[v+1]=C.y,r[v+2]=C.z}function u(){let M=new I;for(let C=0;C<r.length;C+=3){M.x=r[C+0],M.y=r[C+1],M.z=r[C+2];let v=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;a.push(v,1-T)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let C=a[M+0],v=a[M+2],T=a[M+4],E=Math.max(C,v,T),R=Math.min(C,v,T);E>.9&&R<.1&&(C<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,C){let v=M*3;C.x=e[v+0],C.y=e[v+1],C.z=e[v+2]}function g(){let M=new I,C=new I,v=new I,T=new I,E=new Oe,R=new Oe,x=new Oe;for(let w=0,P=0;w<r.length;w+=9,P+=6){M.set(r[w+0],r[w+1],r[w+2]),C.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),T.copy(M).add(C).add(v).divideScalar(3);let b=m(T);S(E,P+0,M,b),S(R,P+2,C,b),S(x,P+4,v,b)}}function S(M,C,v,T){T<0&&M.x===1&&(a[C]=M.x-1),v.x===0&&v.z===0&&(a[C]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Oa=new I,ka=new I,lc=new I,Ba=new qn,Xi=class extends Rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Wa*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,o=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){a?(o[0]=a.getX(g),o[1]=a.getX(g+1),o[2]=a.getX(g+2)):(o[0]=g,o[1]=g+1,o[2]=g+2);let{a:S,b:m,c:p}=Ba;if(S.fromBufferAttribute(l,o[0]),m.fromBufferAttribute(l,o[1]),p.fromBufferAttribute(l,o[2]),Ba.getNormal(lc),d[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let C=(M+1)%3,v=d[M],T=d[C],E=Ba[u[M]],R=Ba[u[C]],x=`${v}_${T}`,w=`${T}_${v}`;w in h&&h[w]?(lc.dot(h[w].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),h[w]=null):x in h||(h[x]={index0:o[M],index1:o[C],normal:lc.clone()})}}for(let g in h)if(h[g]){let{index0:S,index1:m}=h[g];Oa.fromBufferAttribute(l,S),ka.fromBufferAttribute(l,m),f.push(Oa.x,Oa.y,Oa.z),f.push(ka.x,ka.y,ka.z)}this.setAttribute("position",new ot(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Ls=class n extends co{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ht=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(i),c=Math.floor(s),o=l+1,u=c+1,d=e/l,h=t/c,f=[],g=[],S=[],m=[];for(let p=0;p<u;p++){let M=p*h-a;for(let C=0;C<o;C++){let v=C*d-r;g.push(v,-M,0),S.push(0,0,1),m.push(C/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<l;M++){let C=M+o*p,v=M+o*(p+1),T=M+1+o*(p+1),E=M+1+o*p;f.push(C,v,E),f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(S,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ar=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,u=[],d=new I,h=new I,f=[],g=[],S=[],m=[];for(let p=0;p<=i;p++){let M=[],C=p/i,v=a+C*l,T=e*Math.cos(v),E=Math.sqrt(e*e-T*T),R=0;p===0&&a===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let w=x/t,P=s+w*r;d.x=-E*Math.cos(P),d.y=T,d.z=E*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(w+R,1-C),M.push(o++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let C=u[p][M+1],v=u[p][M],T=u[p+1][M],E=u[p+1][M+1];(p!==0||a>0)&&f.push(C,v,E),(p!==i-1||c<Math.PI)&&f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(S,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Yi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(au(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(au(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Jt(n){let e={};for(let t=0;t<n.length;t++){let i=Yi(n[t]);for(let s in i)e[s]=i[s]}return e}function au(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var ju={clone:Yi,merge:Jt},$f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new He().fromArray(s.value);break;case"m4":this.uniforms[i].value=new nt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ho=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zt=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var uo=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fo=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var wi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let l=i+a>>>1;e<t[l]?a=l:i=l+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},po=class extends wi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case fc:r=e,l=2*t-i;break;case pc:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fc:a=e,c=2*i-t;break;case pc:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let o=(i-t)*.5,u=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),S=g*g,m=S*g,p=-h*m+2*h*S-h*g,M=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*g+1,C=(-1-f)*m+(1.5+f)*S+.5*g,v=f*m-f*S;for(let T=0;T!==l;++T)r[T]=p*a[u+T]+M*a[o+T]+C*a[c+T]+v*a[d+T];return r}},mo=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==l;++h)r[h]=a[o+h]*d+a[c+h]*u;return r}},go=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yo=class extends wi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),S=1-g;for(let m=0;m!==l;++m)r[m]=a[o+m]*S+a[c+m]*g;return r}let h=l*2,f=e-1;for(let g=0;g!==l;++g){let S=a[o+g],m=a[c+g],p=f*h+g*2,M=d[p],C=d[p+1],v=e*h+g*2,T=u[v],E=u[v+1],R=Jf(i,t,M,T,s);r[g]=Qu(R,S,C,E,m)}return r}};function Qu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Zf(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Jf(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let l=Qu(r,e,t,i,s)-n;if(Math.abs(l)<1e-10)break;let c=Zf(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),cc(e.settings)&&(i.settings={inTangents:xs(e.settings.inTangents,Array),outTangents:xs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case Qa:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case uc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return De("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;cc(this.settings)&&(ou(this.settings.inTangents,e),ou(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Fe("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Fe("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&Ef(s))for(let l=0,c=s.length;l!==c;++l){let o=s[l];if(isNaN(o)){Fe("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,a=1;for(let l=1;l<r;++l){let c=!1,o=e[l],u=e[l+1];if(o!==u&&(l!==1||o!==e[0]))if(s)c=!0;else{let d=l*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let S=t[d+g];if(S!==t[h+g]||S!==t[f+g]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let d=l*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let l=r*i,c=a*i,o=0;o!==i;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,cc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ou(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Qa;var Ai=class extends pn{constructor(e,t,i){super(e,t,i)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=hr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};xo.prototype.ValueTypeName="color";var _o=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};_o.prototype.ValueTypeName="number";var vo=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-t)/(s-t),o=e*l;for(let u=o+l;o!==u;o+=4)un.slerpFlat(r,0,a,o-l,a,o,c);return r}},Cr=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends pn{constructor(e,t,i){super(e,t,i)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=hr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};bo.prototype.ValueTypeName="vector";var So=class{constructor(e,t,i){let s=this,r=!1,a=0,l=0,c,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return o.push(u,d),this},this.removeHandler=function(u){let d=o.indexOf(u);return d!==-1&&o.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=o.length;d<h;d+=2){let f=o[d],g=o[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new So,Mo=class{constructor(e){this.manager=e!==void 0?e:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pr=class extends Rr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hc=new nt,lu=new I,cu=new I,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===Ts||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),t.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},za=new I,Ha=new un,Wn=new I,Ir=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(za,Ha,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Ha,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(za,Ha,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Ha,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new I,hu=new Oe,uu=new Oe,$t=class extends Ir{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,hu,uu),t.subVectors(uu,hu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/o,s*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ds=class extends Ir{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mc=class extends To{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new mc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var _s=-90,vs=1,Eo=class extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(_s,vs,e,t);s.layers=this.layers,this.add(s);let r=new $t(_s,vs,e,t);r.layers=this.layers,this.add(r);let a=new $t(_s,vs,e,t);a.layers=this.layers,this.add(a);let l=new $t(_s,vs,e,t);l.layers=this.layers,this.add(l);let c=new $t(_s,vs,e,t);c.layers=this.layers,this.add(c);let o=new $t(_s,vs,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,c]=t;for(let o of t)this.remove(o);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,o,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},wo=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Gc="\\[\\]\\.:\\/",Kf=new RegExp("["+Gc+"]","g"),Wc="[^"+Gc+"]",jf="[^"+Gc.replace("\\.","")+"]",Qf=/((?:WC+[\/:])*)/.source.replace("WC",Wc),ep=/(WCOD+)?/.source.replace("WCOD",jf),tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),ip=new RegExp("^"+Qf+ep+tp+np+"$"),sp=["material","materials","bones","map"],gc=class{constructor(e,t,i){let s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kf,"")}static parseTrackName(e){let t=ip.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);sp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let c=i(l.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===o){o=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(o!==void 0){if(e[o]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=gc;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var du=new nt,Dr=class{constructor(e,t,i=0,s=1/0){this.ray=new Si(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(e,t=!0,i=[]){return yc(e,this,i,t),i.sort(fu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)yc(e[s],this,i,t);return i.sort(fu),i}};function fu(n,e){return n.distance-e.distance}function yc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,l=r.length;a<l;a++)yc(r[a],e,t,!0)}}var xc=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Xc(n,e,t,i){let s=rp(i);switch(t){case kc:return n*e;case Fo:return n*e/s.components*s.byteLength;case Uo:return n*e/s.components*s.byteLength;case Di:return n*e*2/s.components*s.byteLength;case Oo:return n*e*2/s.components*s.byteLength;case Bc:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case ko:return n*e*4/s.components*s.byteLength;case Or:case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zo:case Vo:return Math.max(n,16)*Math.max(e,8)/4;case Bo:case Ho:return Math.max(n,8)*Math.max(e,8)/2;case Go:case Wo:case qo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case Hr:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vr:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rp(n){switch(n){case on:case Nc:return{byteLength:1,components:1};case Us:case Fc:case zn:return{byteLength:2,components:1};case Do:case No:return{byteLength:2,components:4};case Bn:case Lo:case Tn:return{byteLength:4,components:1};case Uc:case Oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);function Sd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ap(n){let e=new WeakMap;function t(l,c){let o=l.array,u=l.usage,d=o.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,o,u),l.onUploadCallback();let f;if(o instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=n.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=n.SHORT;else if(o instanceof Uint32Array)f=n.UNSIGNED_INT;else if(o instanceof Int32Array)f=n.INT;else if(o instanceof Int8Array)f=n.BYTE;else if(o instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,c,o){let u=c.array,d=c.updateRanges;if(n.bindBuffer(o,l),d.length===0)n.bufferSubData(o,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let S=d[f];n.bufferSubData(o,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
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
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,bp=`#ifdef USE_BUMPMAP
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
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
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qp=`#ifdef USE_ENVMAP
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
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,rm=`uniform sampler2D dfgLUT;
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
}`,am=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ym=`#if defined( USE_POINTS_UV )
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
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qm=`float getShadowMask() {
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
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
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
}`,pg=`#if DEPTH_PACKING == 3200
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
}`,mg=`#define DISTANCE
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
}`,gg=`#define DISTANCE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,Tg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,wg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Ig=`#define STANDARD
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Ng=`#define TOON
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
}`,Fg=`uniform float size;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,kg=`uniform vec3 color;
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
}`,Bg=`uniform float rotation;
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
}`,zg=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:op,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:yp,beginnormal_vertex:xp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:bp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ep,color_fragment:wp,color_pars_fragment:Ap,color_pars_vertex:Cp,color_vertex:Rp,common:Pp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Up,colorspace_fragment:Op,colorspace_pars_fragment:kp,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:Hp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:Qp,envmap_vertex:Gp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:$p,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Kp,lights_pars_begin:jp,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,lightprobes_pars_fragment:cm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:ym,metalnessmap_fragment:xm,metalnessmap_pars_fragment:_m,morphinstance_vertex:vm,morphcolor_vertex:bm,morphnormal_vertex:Sm,morphtarget_pars_vertex:Mm,morphtarget_vertex:Tm,normal_fragment_begin:Em,normal_fragment_maps:wm,normal_pars_fragment:Am,normal_pars_vertex:Cm,normal_vertex:Rm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:Um,premultiplied_alpha_fragment:Om,project_vertex:km,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:$m,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:eg,transmission_fragment:tg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:ag,background_vert:og,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:hg,cube_vert:ug,cube_frag:dg,depth_vert:fg,depth_frag:pg,distance_vert:mg,distance_frag:gg,equirect_vert:yg,equirect_frag:xg,linedashed_vert:_g,linedashed_frag:vg,meshbasic_vert:bg,meshbasic_frag:Sg,meshlambert_vert:Mg,meshlambert_frag:Tg,meshmatcap_vert:Eg,meshmatcap_frag:wg,meshnormal_vert:Ag,meshnormal_frag:Cg,meshphong_vert:Rg,meshphong_frag:Pg,meshphysical_vert:Ig,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ng,points_vert:Fg,points_frag:Ug,shadow_vert:Og,shadow_frag:kg,sprite_vert:Bg,sprite_frag:zg},fe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ei={basic:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Jt([fe.points,fe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Jt([fe.common,fe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Jt([fe.sprite,fe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Jt([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Jt([fe.lights,fe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ei.physical={uniforms:Jt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var xl={r:0,b:0,g:0},Hg=new nt,Md=new He;Md.set(-1,0,0,0,1,0,0,0,1);function Vg(n,e,t,i,s,r){let a=new Ve(0),l=s===!0?0:1,c,o,u=null,d=0,h=null;function f(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let v=M.backgroundBlurriness>0;C=e.get(C,v)}return C}function g(M){let C=!1,v=f(M);v===null?m(a,l):v&&v.isColor&&(m(v,1),C=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,C){let v=f(C);v&&(v.isCubeTexture||v.mapping===Fr)?(o===void 0&&(o=new ke(new Kn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Yi(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=v,o.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(C.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Md),o.material.toneMapped=Ke.getTransfer(v.colorSpace)!==at,(u!==v||d!==v.version||h!==n.toneMapping)&&(o.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),o.layers.enableAll(),M.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ke(new Ht(2,2),new fn({name:"BackgroundMaterial",uniforms:Yi(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,C){M.getRGB(xl,Vc(n)),t.buffers.color.setClear(xl.r,xl.g,xl.b,C,r)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),l=C,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:S,dispose:p}}function Gg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function l(b,L,k,D,H){let Y=!1,F=d(b,D,k,L);r!==F&&(r=F,o(r.object)),Y=f(b,D,k,H),Y&&g(b,D,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(b,L,k,D),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function o(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,L,k,D){let H=D.wireframe===!0,Y=i[L.id];Y===void 0&&(Y={},i[L.id]=Y);let F=b.isInstancedMesh===!0?b.id:0,ne=Y[F];ne===void 0&&(ne={},Y[F]=ne);let X=ne[k.id];X===void 0&&(X={},ne[k.id]=X);let K=X[H];return K===void 0&&(K=h(c()),X[H]=K),K}function h(b){let L=[],k=[],D=[];for(let H=0;H<t;H++)L[H]=0,k[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:D,object:b,attributes:{},index:null}}function f(b,L,k,D){let H=r.attributes,Y=L.attributes,F=0,ne=k.getAttributes();for(let X in ne)if(ne[X].location>=0){let B=H[X],j=Y[X];if(j===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;F++}return r.attributesNum!==F||r.index!==D}function g(b,L,k,D){let H={},Y=L.attributes,F=0,ne=k.getAttributes();for(let X in ne)if(ne[X].location>=0){let B=Y[X];B===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(B=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(B=b.instanceColor));let j={};j.attribute=B,B&&B.data&&(j.data=B.data),H[X]=j,F++}r.attributes=H,r.attributesNum=F,r.index=D}function S(){let b=r.newAttributes;for(let L=0,k=b.length;L<k;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){let k=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;k[b]=1,D[b]===0&&(n.enableVertexAttribArray(b),D[b]=1),H[b]!==L&&(n.vertexAttribDivisor(b,L),H[b]=L)}function M(){let b=r.newAttributes,L=r.enabledAttributes;for(let k=0,D=L.length;k<D;k++)L[k]!==b[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function C(b,L,k,D,H,Y,F){F===!0?n.vertexAttribIPointer(b,L,k,H,Y):n.vertexAttribPointer(b,L,k,D,H,Y)}function v(b,L,k,D){S();let H=D.attributes,Y=k.getAttributes(),F=L.defaultAttributeValues;for(let ne in Y){let X=Y[ne];if(X.location>=0){let K=H[ne];if(K===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){let B=K.normalized,j=K.itemSize,se=e.get(K);if(se===void 0)continue;let Be=se.buffer,Pe=se.type,Ge=se.bytesPerElement,$=Pe===n.INT||Pe===n.UNSIGNED_INT||K.gpuType===Lo;if(K.isInterleavedBufferAttribute){let Q=K.data,_e=Q.stride,Ne=K.offset;if(Q.isInstancedInterleavedBuffer){for(let re=0;re<X.locationSize;re++)p(X.location+re,Q.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let re=0;re<X.locationSize;re++)m(X.location+re);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let re=0;re<X.locationSize;re++)C(X.location+re,j/X.locationSize,Pe,B,_e*Ge,(Ne+j/X.locationSize*re)*Ge,$)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,K.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Q=0;Q<X.locationSize;Q++)C(X.location+Q,j/X.locationSize,Pe,B,j*Ge,j/X.locationSize*Q*Ge,$)}}else if(F!==void 0){let B=F[ne];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(X.location,B);break;case 3:n.vertexAttrib3fv(X.location,B);break;case 4:n.vertexAttrib4fv(X.location,B);break;default:n.vertexAttrib1fv(X.location,B)}}}}M()}function T(){w();for(let b in i){let L=i[b];for(let k in L){let D=L[k];for(let H in D){let Y=D[H];for(let F in Y)u(Y[F].object),delete Y[F];delete D[H]}}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let k in L){let D=L[k];for(let H in D){let Y=D[H];for(let F in Y)u(Y[F].object),delete Y[F];delete D[H]}}delete i[b.id]}function R(b){for(let L in i){let k=i[L];for(let D in k){let H=k[D];if(H[b.id]===void 0)continue;let Y=H[b.id];for(let F in Y)u(Y[F].object),delete Y[F];delete H[b.id]}}}function x(b){for(let L in i){let k=i[L],D=b.isInstancedMesh===!0?b.id:0,H=k[D];if(H!==void 0){for(let Y in H){let F=H[Y];for(let ne in F)u(F[ne].object),delete F[ne];delete H[Y]}delete k[D],Object.keys(k).length===0&&delete i[L]}}}function w(){P(),a=!0,r!==s&&(r=s,o(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:w,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function Wg(n,e,t){let i;function s(c){i=c}function r(c,o){n.drawArrays(i,c,o),t.update(o,i,1)}function a(c,o,u){u!==0&&(n.drawArraysInstanced(i,c,o,u),t.update(o,i,u))}function l(c,o,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,u);let h=0;for(let f=0;f<u;f++)h+=o[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Xg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==En&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){let x=R===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==on&&R!==Tn&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",u=c(o);u!==o&&(De("WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:v,maxSamples:T,samples:E}}function qg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new hn,l=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):o();else{let M=r?0:i,C=M*4,v=p.clippingState||null;c.value=v,v=u(g,h,C,f);for(let T=0;T!==C;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=c.value,g!==!0||m===null){let p=f+S*4,M=h.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,v=f;C!==S;++C,v+=4)a.copy(d[C]).applyMatrix4(M,l),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var Bs=4,$g=6,Yg=20,Zg=256,Gr=new Ds,td=new Ve,qc=null,$c=0,Yc=0,Zc=!1,Jg=new I,Zi=new I,vl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:l=Jg}=r;qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,$c,Yc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:zn,format:En,colorSpace:ur,depthBuffer:!1},s=nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kg(r)),this._blurMaterial=Qg(r,e,t),this._ggxMaterial=jg(r,e,t)}return s}_compileMaterial(e){let t=new ke(new Rt,e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,i,s,r){let c=new $t(90,1,t,i),o=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(td),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new Kn,new dn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(td),p=!0);for(let C=0;C<6;C++){let v=C%3;v===0?(c.up.set(0,o[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[C],r.y,r.z)):v===1?(c.up.set(0,0,o[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[C],r.z)):(c.up.set(0,o[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[C]));let T=this._cubeSize;ks(s,v*T,C>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(S,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Pi||e.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;ks(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Gr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(o*o-u*u),h=o*1.25,f=d*h,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Bs?i-g+Bs:0),p=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ks(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(l,Gr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,ks(e,m,p,3*S,2*S),s.setRenderTarget(e),s.render(l,Gr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let o=l.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Bs?s-this._lodMax+Bs:0),h=4*(this._cubeSize-u);ks(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(c,Gr)}};function Kg(n){let e=[],t=[],i=n,s=n-Bs+1+$g;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let l=1/(a-2),c=-l,o=1+l,u=[c,c,o,c,o,o,c,c,o,o,c,o],d=6,h=6,f=3,g=new Float32Array(f*h*d),S=new Float32Array(f*h*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,C=p>2?0:-1,v=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];g.set(v,f*h*p);for(let T=0;T<h;T++){let E=u[T*2]*2-1,R=u[T*2+1]*2-1;p===0?Zi.set(1,R,E):p===1?Zi.set(-E,1,-R):p===2?Zi.set(-E,R,1):p===3?Zi.set(-1,R,-E):p===4?Zi.set(-E,-1,R):Zi.set(E,R,-1),Zi.toArray(S,(p*h+T)*f)}}let m=new Rt;m.setAttribute("position",new rn(g,f)),m.setAttribute("outputDirection",new rn(S,f)),t.push(new ke(m,null)),i>Bs&&i--}return{lodMeshes:t,sizeLods:e}}function nd(n,e,t){let i=new an(n,e,t);return i.texture.mapping=Fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function jg(n,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Qg(n,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Yg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function id(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function sd(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bl=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Tr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:jn});r.uniforms.tEquirect.value=t;let a=new ke(s,r),l=t.minFilter;return t.minFilter===Ii&&(t.minFilter=zt),new Eo(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function e0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ro||f===Po)if(e.has(h)){let g=e.get(h).texture;return l(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new bl(g.height);return S.fromEquirectangularTexture(n,h),e.set(h,S),h.addEventListener("dispose",o),l(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Ro||f===Po,S=f===Pi||f===$i;if(g||S){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new vl(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||S&&M&&c(M)?(i===null&&(i=new vl(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function l(h,f){return f===Ro?h.mapping=Pi:f===Po&&(h.mapping=$i),h}function c(h){let f=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function o(h){let f=h.target;f.removeEventListener("dispose",o);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function t0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Vi("WebGLRenderer: "+i+" extension not supported."),s}}}function n0(n,e,t,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function o(d){let h=[],f=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(f!==null){let M=f.array;S=f.version;for(let C=0,v=M.length;C<v;C+=3){let T=M[C+0],E=M[C+1],R=M[C+2];h.push(T,E,E,R,R,T)}}else{let M=g.array;S=g.version;for(let C=0,v=M.length/3-1;C<v;C+=3){let T=C+0,E=C+1,R=C+2;h.push(T,E,E,R,R,T)}}let m=new(g.count>=65535?_r:xr)(h,1);m.version=S;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&o(d)}else o(d);return r.get(d)}return{get:l,update:c,getWireframeAttribute:u}}function i0(n,e,t){let i;function s(d){i=d}let r,a;function l(d){r=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function o(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];t.update(S,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=u}function s0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r0(n,e,t){let i=new WeakMap,s=new vt;function r(a,l,c){let o=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(l);if(h===void 0||h.count!==d){let w=function(){R.dispose(),i.delete(l),l.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],M=l.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),S===!0&&(C=3);let v=l.attributes.position.count*C,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*T*4*d),R=new mr(E,v,T,d);R.type=Tn,R.needsUpdate=!0;let x=C*4;for(let P=0;P<d;P++){let b=m[P],L=p[P],k=M[P],D=v*T*4*P;for(let H=0;H<b.count;H++){let Y=H*x;f===!0&&(s.fromBufferAttribute(b,H),E[D+Y+0]=s.x,E[D+Y+1]=s.y,E[D+Y+2]=s.z,E[D+Y+3]=0),g===!0&&(s.fromBufferAttribute(L,H),E[D+Y+4]=s.x,E[D+Y+5]=s.y,E[D+Y+6]=s.z,E[D+Y+7]=0),S===!0&&(s.fromBufferAttribute(k,H),E[D+Y+8]=s.x,E[D+Y+9]=s.y,E[D+Y+10]=s.z,E[D+Y+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new Oe(v,T)},i.set(l,h),l.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<o.length;S++)f+=o[S];let g=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",o)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function a0(n,e,t,i,s){let r=new WeakMap;function a(o){let u=s.render.frame,d=o.geometry,h=e.get(o,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==u&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,u))),o.isSkinnedMesh){let f=o.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function l(){r=new WeakMap}function c(o){let u=o.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}var o0={[wc]:"LINEAR_TONE_MAPPING",[Ac]:"REINHARD_TONE_MAPPING",[Cc]:"CINEON_TONE_MAPPING",[Rc]:"ACES_FILMIC_TONE_MAPPING",[Ic]:"AGX_TONE_MAPPING",[Lc]:"NEUTRAL_TONE_MAPPING",[Pc]:"CUSTOM_TONE_MAPPING"};function l0(n,e,t,i,s,r){let a=new an(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,o=new Rt;o.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ot([0,2,0,0,2,0],2));let u=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ke(o,u),h=new Ds(-1,1,1,-1,0,1),f=null,g=null,S=!1,m,p=null,M=[],C=!1;this.setSize=function(v,T){a.setSize(v,T),l!==null&&l.setSize(v,T),c!==null&&c.setSize(v,T);for(let E=0;E<M.length;E++){let R=M[E];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){M=v,C=M.length>0&&M[0].isRenderPass===!0;let T=a.width,E=a.height;M.length>0&&l===null&&(l=new an(T,E,{type:zn,depthBuffer:!1,stencilBuffer:!1}),c=new an(T,E,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(T,E)}},this.begin=function(v,T){if(S||v.toneMapping===kn&&M.length===0)return!1;if(p=T,T!==null){let E=T.width,R=T.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return C===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=kn,!0},this.hasRenderPass=function(){return C},this.end=function(v,T){v.toneMapping=m,S=!0;let E=a,R=l;for(let x=0;x<M.length;x++){let w=M[x];w.enabled!==!1&&(w.render(v,R,E,T),w.needsSwap!==!1&&(E=R,R=R===l?c:l))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},Ke.getTransfer(f)===at&&(u.defines.SRGB_TRANSFER="");let x=o0[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(d,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),u.dispose()}}var Td=new en,jc=new Ti(1,1),Ed=new mr,wd=new io,Ad=new Tr,rd=[],ad=[],od=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function Hs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tl(n,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function u0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function d0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function f0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;cd.set(i),n.uniformMatrix2fv(this.addr,!1,cd),It(t,i)}}function p0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;ld.set(i),n.uniformMatrix3fv(this.addr,!1,ld),It(t,i)}}function m0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;od.set(i),n.uniformMatrix4fv(this.addr,!1,od),It(t,i)}}function g0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function y0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function x0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function _0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function v0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function S0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function M0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function T0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=t.isReversedDepthBuffer()?yl:gl,r=jc):r=Td,t.setTexture2D(e||r,s)}function E0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wd,s)}function w0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ad,s)}function A0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ed,s)}function C0(n){switch(n){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return y0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return b0;case 36295:return S0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return A0}}function R0(n,e){n.uniform1fv(this.addr,e)}function P0(n,e){let t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function I0(n,e){let t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function L0(n,e){let t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function D0(n,e){let t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function N0(n,e){let t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F0(n,e){let t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U0(n,e){n.uniform1iv(this.addr,e)}function O0(n,e){n.uniform2iv(this.addr,e)}function k0(n,e){n.uniform3iv(this.addr,e)}function B0(n,e){n.uniform4iv(this.addr,e)}function z0(n,e){n.uniform1uiv(this.addr,e)}function H0(n,e){n.uniform2uiv(this.addr,e)}function V0(n,e){n.uniform3uiv(this.addr,e)}function G0(n,e){n.uniform4uiv(this.addr,e)}function W0(n,e,t){let i=this.cache,s=e.length,r=Tl(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=jc:a=Td;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function X0(n,e,t){let i=this.cache,s=e.length,r=Tl(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wd,r[a])}function q0(n,e,t){let i=this.cache,s=e.length,r=Tl(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ad,r[a])}function $0(n,e,t){let i=this.cache,s=e.length,r=Tl(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ed,r[a])}function Y0(n){switch(n){case 5126:return R0;case 35664:return P0;case 35665:return I0;case 35666:return L0;case 35674:return D0;case 35675:return N0;case 35676:return F0;case 5124:case 35670:return U0;case 35667:case 35671:return O0;case 35668:case 35672:return k0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return $0}}var Qc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C0(t.type)}},eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y0(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],i)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function hd(n,e){n.seq.push(e),n.map[e.id]=e}function Z0(n,e,t){let i=n.name,s=i.length;for(Jc.lastIndex=0;;){let r=Jc.exec(i),a=Jc.lastIndex,l=r[1],c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){hd(t,o===void 0?new Qc(l,n,e):new eh(l,n,e));break}else{let d=t.map[l];d===void 0&&(d=new th(l),hd(t,d)),t=d}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Z0(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function ud(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var J0=37297,K0=0;function j0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}var dd=new He;function Q0(n){Ke._getMatrix(dd,Ke.workingColorSpace,n);let e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case dr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+j0(n.getShaderSource(e),l)}else return r}function ey(n,e){let t=Q0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ty={[wc]:"Linear",[Ac]:"Reinhard",[Cc]:"Cineon",[Rc]:"ACESFilmic",[Ic]:"AgX",[Lc]:"Neutral",[Pc]:"Custom"};function ny(n,e){let t=ty[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _l=new I;function iy(){Ke.getLuminanceCoefficients(_l);let n=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function ry(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ay(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function Xr(n){return n!==""}function pd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function md(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(n){return n.replace(oy,cy)}var ly=new Map;function cy(n,e){let t=qe[e];if(t===void 0){let i=ly.get(e);if(i!==void 0)t=qe[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nh(t)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(n){return n.replace(hy,uy)}function uy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var dy={[Nr]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function fy(n){return dy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var py={[Pi]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function my(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":py[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var gy={[$i]:"ENVMAP_MODE_REFRACTION"};function yy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xy={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[Nu]:"ENVMAP_BLENDING_MIX",[Fu]:"ENVMAP_BLENDING_ADD"};function _y(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xy[n.combine]||"ENVMAP_BLENDING_NONE"}function vy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function by(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,c=fy(t),o=my(t),u=yy(t),d=_y(t),h=vy(t),f=sy(t),g=ry(r),S=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),p.length>0&&(p+=`
`)):(m=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),p=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?qe.tonemapping_pars_fragment:"",t.toneMapping!==kn?ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ey("linearToOutputTexel",t.outputColorSpace),iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=nh(a),a=pd(a,t),a=md(a,t),l=nh(l),l=pd(l,t),l=md(l,t),a=gd(a),l=gd(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=M+m+a,v=M+p+l,T=ud(s,s.VERTEX_SHADER,C),E=ud(s,s.FRAGMENT_SHADER,v);s.attachShader(S,T),s.attachShader(S,E),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(b){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(S)||"",k=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(E)||"",H=L.trim(),Y=k.trim(),F=D.trim(),ne=!0,X=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,T,E);else{let K=fd(s,T,"vertex"),B=fd(s,E,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+K+`
`+B)}else H!==""?De("WebGLProgram: Program Info Log:",H):(Y===""||F==="")&&(X=!1);X&&(b.diagnostics={runnable:ne,programLog:H,vertexShader:{log:Y,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(T),s.deleteShader(E),x=new zs(s,S),w=ay(s,S)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,J0)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=E,this}var Sy=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sh(e),t.set(e,i)),i}},sh=class{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}};function My(n){return n===Di||n===Hr||n===Vr}function Ty(n,e,t,i,s,r){let a=new As,l=new ih,c=new Set,o=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,w,P,b,L,k){let D=b.fog,H=L.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||Y,F),X=ne&&ne.mapping===Fr?ne.image.height:null,K=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let B=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,j=B!==void 0?B.length:0,se=0;H.morphAttributes.position!==void 0&&(se=1),H.morphAttributes.normal!==void 0&&(se=2),H.morphAttributes.color!==void 0&&(se=3);let Be,Pe,Ge,$;if(K){let pt=ei[K];Be=pt.vertexShader,Pe=pt.fragmentShader}else{Be=x.vertexShader,Pe=x.fragmentShader;let pt=l.getVertexShaderStage(x),st=l.getFragmentShaderStage(x);l.update(x,pt,st),Ge=pt.id,$=st.id}let Q=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,re=L.isBatchedMesh===!0,ze=!!x.map,it=!!x.matcap,Ue=!!ne,Ze=!!x.aoMap,tt=!!x.lightMap,Je=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Dt=!!x.displacementMap,sn=!!x.emissiveMap,Mt=!!x.metalnessMap,wt=!!x.roughnessMap,O=x.anisotropy>0,Gt=x.clearcoat>0,ct=x.dispersion>0,A=x.retroreflectivity>0,y=x.iridescence>0,z=x.sheen>0,W=x.transmission>0,Z=O&&!!x.anisotropyMap,ae=Gt&&!!x.clearcoatMap,oe=Gt&&!!x.clearcoatNormalMap,J=Gt&&!!x.clearcoatRoughnessMap,te=y&&!!x.iridescenceMap,le=y&&!!x.iridescenceThicknessMap,Ce=z&&!!x.sheenColorMap,de=z&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Re=!!x.specularColorMap,Le=!!x.specularIntensityMap,We=W&&!!x.transmissionMap,U=W&&!!x.thicknessMap,he=!!x.gradientMap,ee=!!x.alphaMap,ue=x.alphaTest>0,ye=!!x.alphaHash,ie=!!x.extensions,Ie=kn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ie=n.toneMapping);let Ee={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:Pe,defines:x.defines,customVertexShaderID:Ge,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:re,batchingColor:re&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:it,envMap:Ue,envMapMode:Ue&&ne.mapping,envMapCubeUVHeight:X,aoMap:Ze,lightMap:tt,bumpMap:Je,normalMap:_t,displacementMap:Dt,emissiveMap:sn,normalMapObjectSpace:_t&&x.normalMapType===ku,normalMapTangentSpace:_t&&x.normalMapType===ml,packedNormalMap:_t&&x.normalMapType===ml&&My(x.normalMap.format),metalnessMap:Mt,roughnessMap:wt,anisotropy:O,anisotropyMap:Z,clearcoat:Gt,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:J,dispersion:ct,retroreflection:A,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:le,sheen:z,sheenColorMap:Ce,sheenRoughnessMap:de,specularMap:ce,specularColorMap:Re,specularIntensityMap:Le,transmission:W,transmissionMap:We,thicknessMap:U,gradientMap:he,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:ye,combine:x.combine,mapUv:ze&&g(x.map.channel),aoMapUv:Ze&&g(x.aoMap.channel),lightMapUv:tt&&g(x.lightMap.channel),bumpMapUv:Je&&g(x.bumpMap.channel),normalMapUv:_t&&g(x.normalMap.channel),displacementMapUv:Dt&&g(x.displacementMap.channel),emissiveMapUv:sn&&g(x.emissiveMap.channel),metalnessMapUv:Mt&&g(x.metalnessMap.channel),roughnessMapUv:wt&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:ae&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(x.sheenRoughnessMap.channel),specularMapUv:ce&&g(x.specularMap.channel),specularColorMapUv:Re&&g(x.specularColorMap.channel),specularIntensityMapUv:Le&&g(x.specularIntensityMap.channel),transmissionMapUv:We&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_t||O),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(ze||ee),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:se,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:sn&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(w,x),M(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let w=f[x.type],P;if(w){let b=ei[w];P=ju.clone(b.uniforms)}else P=x.uniforms;return P}function v(x,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new by(n,w,x,s),o.push(P),u.set(w,P)),P}function T(x){if(--x.usedTimes===0){let w=o.indexOf(x);o[w]=o[o.length-1],o.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){l.remove(x)}function R(){l.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:C,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:o,dispose:R}}function Ey(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,c){n.get(a)[l]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function xd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _d(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function l(h,f,g,S,m,p){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},n[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=p),e++,M}function c(h,f,g,S,m,p,M){M.reversedDepth===!0&&(m=-m);let C=l(h,f,g,S,m,p);g.transmission>0?i.push(C):g.transparent===!0?s.push(C):t.push(C)}function o(h,f,g,S,m,p){let M=l(h,f,g,S,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||wy),i.length>1&&i.sort(f||xd),s.length>1&&s.sort(f||xd)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:o,finish:d,sort:u}}function Ay(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new _d,n.set(i,[a])):s>=r.length?(a=new _d,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Ry(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Py=0;function Iy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ly(n){let e=new Cy,t=Ry(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new I);let s=new I,r=new nt,a=new nt;function l(o){let u=0,d=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,M=0,C=0,v=0,T=0,E=0,R=0,x=0,w=0,P=0;o.sort(Iy);for(let L=0,k=o.length;L<k;L++){let D=o[L],H=D.color,Y=D.intensity,F=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Di?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=H.r*Y,d+=H.g*Y,h+=H.b*Y;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],Y);P++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[g]=B,i.sunShadowMap[g]=ne;let j=K.getViewportCount();for(let se=0;se<j;se++)i.sunShadowMatrix[S+se]=K.getMatrix(se),i.sunShadowCascade[S+se]=K._cascadeData[se];S+=j,g++}i.sun[f]=X,f++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=D.shadow.matrix,T++}i.directional[m]=X,m++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Y),X.distance=F,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[M]=X;let K=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,K.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[M]=K.matrix,D.castShadow){let B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=ne,R++}M++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(H).multiplyScalar(Y),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[C]=X,C++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let K=D.shadow,B=t.get(D);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=D.shadow.matrix,E++}i.point[p]=X,p++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(Y),X.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[v]=X,v++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let b=i.hash;(b.sunLength!==f||b.directionalLength!==m||b.pointLength!==p||b.spotLength!==M||b.rectAreaLength!==C||b.hemiLength!==v||b.numSunShadows!==g||b.numDirectionalShadows!==T||b.numPointShadows!==E||b.numSpotShadows!==R||b.numSpotMaps!==x||b.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=C,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,b.sunLength=f,b.directionalLength=m,b.pointLength=p,b.spotLength=M,b.rectAreaLength=C,b.hemiLength=v,b.numSunShadows=g,b.numDirectionalShadows=T,b.numPointShadows=E,b.numSpotShadows=R,b.numSpotMaps=x,b.numLightProbes=P,i.version=Py++)}function c(o,u){let d=0,h=0,f=0,g=0,S=0,m=0,p=u.matrixWorldInverse;for(let M=0,C=o.length;M<C;M++){let v=o[M];if(v.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let T=i.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(v.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=i.rectArea[S];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function vd(n){let e=new Ly(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function l(h){i.push(h)}function c(h){s.push(h)}function o(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:o,setupLightsView:u,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function Dy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new vd(n),e.set(s,[l])):r>=a.length?(l=new vd(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`,Uy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Oy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],bd=new nt,Wr=new I,Kc=new I;function ky(n,e,t){let i=new Is,s=new Oe,r=new Oe,a=new vt,l=new uo,c=new fo,o={},u=t.maxTextureSize,d={[Ri]:tn,[tn]:Ri,[Mn]:Mn},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Ny,fragmentShader:Fy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ke(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let p=this.type;this.render=function(E,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Co&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nr);let w=n.getRenderTarget(),P=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),L=n.state;L.setBlending(jn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=p!==this.type;k&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=E.length;D<H;D++){let Y=E[D],F=Y.shadow;if(F===void 0){De("WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let ne=F.getFrameExtents();s.multiply(ne),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,F.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ns){if(Y.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new an(s.x,s.y,{format:Di,type:zn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),F.map.texture.name=Y.name+".shadowMap",F.map.depthTexture=new Ti(s.x,s.y,Tn),F.map.depthTexture.name=Y.name+".shadowMapDepth",F.map.depthTexture.format=Yn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ut,F.map.depthTexture.magFilter=Ut}else Y.isPointLight?(F.map=new bl(s.x),F.map.depthTexture=new lo(s.x,Bn)):(F.map=new an(s.x,s.y),F.map.depthTexture=new Ti(s.x,s.y,Bn)),F.map.depthTexture.name=Y.name+".shadowMap",F.map.depthTexture.format=Yn,this.type===Nr?(F.map.depthTexture.compareFunction=X?yl:gl,F.map.depthTexture.minFilter=zt,F.map.depthTexture.magFilter=zt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ut,F.map.depthTexture.magFilter=Ut);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let K=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();Y.isPointLight!==!0&&F.updateMatrices(Y,x);for(let B=0;B<K;B++){let j=F.getCamera(B);if(Y.isPointLight){let se=F.camera,Be=F.matrix,Pe=Y.distance||se.far;Pe!==se.far&&(se.far=Pe,se.updateProjectionMatrix()),Wr.setFromMatrixPosition(Y.matrixWorld),se.position.copy(Wr),Kc.copy(se.position),Kc.add(Uy[B]),se.up.copy(Oy[B]),se.lookAt(Kc),se.updateMatrixWorld(),Be.makeTranslation(-Wr.x,-Wr.y,-Wr.z),bd.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F._frustum.setFromProjectionMatrix(bd,se.coordinateSystem,se.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,B),n.clear();else{B===0&&(n.setRenderTarget(F.map),n.clear());let se=F.getViewport(B);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),L.viewport(a)}i=F.getFrustum(B),v(R,x,j,Y,this.type)}F.isPointLightShadow!==!0&&this.type===Ns&&M(F,x),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,P,b)};function M(E,R){let x=e.update(S);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new an(s.x,s.y,{format:Di,type:zn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,x,h,S,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,x,f,S,null)}function C(E,R,x,w){let P=null,b=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)P=b;else if(P=x.isPointLight===!0?c:l,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=P.uuid,k=R.uuid,D=o[L];D===void 0&&(D={},o[L]=D);let H=D[k];H===void 0&&(H=P.clone(),D[k]=H,R.addEventListener("dispose",T)),P=H}if(P.visible=R.visible,P.wireframe=R.wireframe,w===Ns?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=n.properties.get(P);L.light=x}return P}function v(E,R,x,w,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Ns)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let k=e.update(E),D=E.material;if(Array.isArray(D)){let H=k.groups;for(let Y=0,F=H.length;Y<F;Y++){let ne=H[Y],X=D[ne.materialIndex];if(X&&X.visible){let K=C(E,X,w,P);E.onBeforeShadow(n,E,R,x,k,K,ne),n.renderBufferDirect(x,null,k,K,E,ne),E.onAfterShadow(n,E,R,x,k,K,ne)}}}else if(D.visible){let H=C(E,D,w,P);E.onBeforeShadow(n,E,R,x,k,H,null),n.renderBufferDirect(x,null,k,H,E,null),E.onAfterShadow(n,E,R,x,k,H,null)}}let L=E.children;for(let k=0,D=L.length;k<D;k++)v(L[k],R,x,w,P)}function T(E){E.target.removeEventListener("dispose",T);for(let x in o){let w=o[x],P=E.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function By(n,e){function t(){let U=!1,he=new vt,ee=null,ue=new vt(0,0,0,0);return{setMask:function(ye){ee!==ye&&!U&&(n.colorMask(ye,ye,ye,ye),ee=ye)},setLocked:function(ye){U=ye},setClear:function(ye,ie,Ie,Ee,pt){pt===!0&&(ye*=Ee,ie*=Ee,Ie*=Ee),he.set(ye,ie,Ie,Ee),ue.equals(he)===!1&&(n.clearColor(ye,ie,Ie,Ee),ue.copy(he))},reset:function(){U=!1,ee=null,ue.set(-1,0,0,0)}}}function i(){let U=!1,he=!1,ee=null,ue=null,ye=null;return{setReversed:function(ie){if(he!==ie){let Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let Ee=ye;ye=null,this.setClear(Ee)}},getReversed:function(){return he},setTest:function(ie){ie?Q(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!U&&(n.depthMask(ie),ee=ie)},setFunc:function(ie){if(he&&(ie=Zu[ie]),ue!==ie){switch(ie){case Xa:n.depthFunc(n.NEVER);break;case qa:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ja:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ye!==ie&&(ye=ie,he&&(ie=1-ie),n.clearDepth(ie))},reset:function(){U=!1,ee=null,ue=null,ye=null,he=!1}}}function s(){let U=!1,he=null,ee=null,ue=null,ye=null,ie=null,Ie=null,Ee=null,pt=null;return{setTest:function(st){U||(st?Q(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(st){he!==st&&!U&&(n.stencilMask(st),he=st)},setFunc:function(st,Ln,Vn){(ee!==st||ue!==Ln||ye!==Vn)&&(n.stencilFunc(st,Ln,Vn),ee=st,ue=Ln,ye=Vn)},setOp:function(st,Ln,Vn){(ie!==st||Ie!==Ln||Ee!==Vn)&&(n.stencilOp(st,Ln,Vn),ie=st,Ie=Ln,Ee=Vn)},setLocked:function(st){U=st},setClear:function(st){pt!==st&&(n.clearStencil(st),pt=st)},reset:function(){U=!1,he=null,ee=null,ue=null,ye=null,ie=null,Ie=null,Ee=null,pt=null}}}let r=new t,a=new i,l=new s,c=new WeakMap,o=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,C=null,v=null,T=null,E=null,R=null,x=new Ve(0,0,0),w=0,P=!1,b=null,L=null,k=null,D=null,H=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,ne=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=ne>=2);let K=null,B={},j=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Be=new vt().fromArray(j),Pe=new vt().fromArray(se);function Ge(U,he,ee,ue){let ye=new Uint8Array(4),ie=n.createTexture();n.bindTexture(U,ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<ee;Ie++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(he+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ie}let $={};$[n.TEXTURE_2D]=Ge(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Q(n.DEPTH_TEST),a.setFunc(Ss),Je(!1),_t(_c),Q(n.CULL_FACE),Ze(jn);function Q(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ne(U,he){return h[U]!==he?(n.bindFramebuffer(U,he),h[U]=he,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function re(U,he){let ee=g,ue=!1;if(U){ee=f.get(he),ee===void 0&&(ee=[],f.set(he,ee));let ye=U.textures;if(ee.length!==ye.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ie=ye.length;ie<Ie;ie++)ee[ie]=n.COLOR_ATTACHMENT0+ie;ee.length=ye.length,ue=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ee)}function ze(U){return S!==U?(n.useProgram(U),S=U,!0):!1}let it={[qi]:n.FUNC_ADD,[yu]:n.FUNC_SUBTRACT,[xu]:n.FUNC_REVERSE_SUBTRACT};it[_u]=n.MIN,it[vu]=n.MAX;let Ue={[bu]:n.ZERO,[Su]:n.ONE,[Mu]:n.SRC_COLOR,[Mc]:n.SRC_ALPHA,[Ru]:n.SRC_ALPHA_SATURATE,[Au]:n.DST_COLOR,[Eu]:n.DST_ALPHA,[Tu]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[Cu]:n.ONE_MINUS_DST_COLOR,[wu]:n.ONE_MINUS_DST_ALPHA,[Pu]:n.CONSTANT_COLOR,[Iu]:n.ONE_MINUS_CONSTANT_COLOR,[Lu]:n.CONSTANT_ALPHA,[Du]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(U,he,ee,ue,ye,ie,Ie,Ee,pt,st){if(U===jn){m===!0&&(_e(n.BLEND),m=!1);return}if(m===!1&&(Q(n.BLEND),m=!0),U!==gu){if(U!==p||st!==P){if((M!==qi||T!==qi)&&(n.blendEquation(n.FUNC_ADD),M=qi,T=qi),st)switch(U){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.ONE,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Fe("WebGLState: Invalid blending: ",U);break}else switch(U){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bc:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sc:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",U);break}C=null,v=null,E=null,R=null,x.set(0,0,0),w=0,p=U,P=st}return}ye=ye||he,ie=ie||ee,Ie=Ie||ue,(he!==M||ye!==T)&&(n.blendEquationSeparate(it[he],it[ye]),M=he,T=ye),(ee!==C||ue!==v||ie!==E||Ie!==R)&&(n.blendFuncSeparate(Ue[ee],Ue[ue],Ue[ie],Ue[Ie]),C=ee,v=ue,E=ie,R=Ie),(Ee.equals(x)===!1||pt!==w)&&(n.blendColor(Ee.r,Ee.g,Ee.b,pt),x.copy(Ee),w=pt),p=U,P=!1}function tt(U,he){U.side===Mn?_e(n.CULL_FACE):Q(n.CULL_FACE);let ee=U.side===tn;he&&(ee=!ee),Je(ee),U.blending===Fs&&U.transparent===!1?Ze(jn):Ze(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ue=U.stencilWrite;l.setTest(ue),ue&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),sn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function _t(U){U!==pu?(Q(n.CULL_FACE),U!==L&&(U===_c?n.cullFace(n.BACK):U===mu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),L=U}function Dt(U){U!==k&&(F&&n.lineWidth(U),k=U)}function sn(U,he,ee){U?(Q(n.POLYGON_OFFSET_FILL),(D!==he||H!==ee)&&(D=he,H=ee,a.getReversed()&&(he=-he),n.polygonOffset(he,ee))):_e(n.POLYGON_OFFSET_FILL)}function Mt(U){U?Q(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function wt(U){U===void 0&&(U=n.TEXTURE0+Y-1),K!==U&&(n.activeTexture(U),K=U)}function O(U,he,ee){ee===void 0&&(K===null?ee=n.TEXTURE0+Y-1:ee=K);let ue=B[ee];ue===void 0&&(ue={type:void 0,texture:void 0},B[ee]=ue),(ue.type!==U||ue.texture!==he)&&(K!==ee&&(n.activeTexture(ee),K=ee),n.bindTexture(U,he||$[U]),ue.type=U,ue.texture=he)}function Gt(){let U=B[K];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{n.compressedTexImage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function y(){try{n.texSubImage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function z(){try{n.texSubImage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function ae(){try{n.texStorage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function oe(){try{n.texStorage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function J(){try{n.texImage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function te(){try{n.texImage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function le(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Ce(U,he){d[U]!==he&&(n.pixelStorei(U,he),d[U]=he)}function de(U){Be.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Be.copy(U))}function ce(U){Pe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function Re(U,he){let ee=o.get(he);ee===void 0&&(ee=new WeakMap,o.set(he,ee));let ue=ee.get(U);ue===void 0&&(ue=n.getUniformBlockIndex(he,U.name),ee.set(U,ue))}function Le(U,he){let ue=o.get(he).get(U);c.get(he)!==ue&&(n.uniformBlockBinding(he,ue,U.__bindingPointIndex),c.set(he,ue))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},K=null,B={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,C=null,v=null,T=null,E=null,R=null,x=new Ve(0,0,0),w=0,P=!1,b=null,L=null,k=null,D=null,H=null,Be.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Q,disable:_e,bindFramebuffer:Ne,drawBuffers:re,useProgram:ze,setBlending:Ze,setMaterial:tt,setFlipSided:Je,setCullFace:_t,setLineWidth:Dt,setPolygonOffset:sn,setScissorTest:Mt,activeTexture:wt,bindTexture:O,unbindTexture:Gt,compressedTexImage2D:ct,compressedTexImage3D:A,texImage2D:J,texImage3D:te,pixelStorei:Ce,getParameter:le,updateUBOMapping:Re,uniformBlockBinding:Le,texStorage2D:ae,texStorage3D:oe,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:de,viewport:ce,reset:We}}function zy(n,e,t,i,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Oe,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,y){return g?new OffscreenCanvas(A,y):fr("canvas")}function m(A,y,z){let W=1,Z=ct(A);if((Z.width>z||Z.height>z)&&(W=z/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ae=Math.floor(W*Z.width),oe=Math.floor(W*Z.height);h===void 0&&(h=S(ae,oe));let J=y?S(ae,oe):h;return J.width=ae,J.height=oe,J.getContext("2d").drawImage(A,0,0,ae,oe),De("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ae+"x"+oe+")."),J}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,y,z,W,Z,ae=!1){if(A!==null){if(n[A]!==void 0)return n[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;W&&(oe=e.get("EXT_texture_norm16"),oe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8),z===n.UNSIGNED_SHORT&&oe&&(J=oe.R16_EXT),z===n.SHORT&&oe&&(J=oe.R16_SNORM_EXT)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),y===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8),z===n.UNSIGNED_SHORT&&oe&&(J=oe.RG16_EXT),z===n.SHORT&&oe&&(J=oe.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(z===n.UNSIGNED_SHORT&&oe&&(J=oe.RGB16_EXT),z===n.SHORT&&oe&&(J=oe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){let te=ae?dr:Ke.getTransfer(Z);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=te===at?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&oe&&(J=oe.RGBA16_EXT),z===n.SHORT&&oe&&(J=oe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(A,y){let z;return A?y===null||y===Bn||y===Os?z=n.DEPTH24_STENCIL8:y===Tn?z=n.DEPTH32F_STENCIL8:y===Us&&(z=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bn||y===Os?z=n.DEPTH_COMPONENT24:y===Tn?z=n.DEPTH_COMPONENT32F:y===Us&&(z=n.DEPTH_COMPONENT16),z}function E(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){let y=A.target;y.removeEventListener("dispose",R),w(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function x(A){let y=A.target;y.removeEventListener("dispose",x),b(y)}function w(A){let y=i.get(A);if(y.__webglInit===void 0)return;let z=A.source,W=f.get(z);if(W){let Z=W[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(A),Object.keys(W).length===0&&f.delete(z)}i.remove(A)}function P(A){let y=i.get(A);n.deleteTexture(y.__webglTexture);let z=A.source,W=f.get(z);delete W[y.__cacheKey],a.memory.textures--}function b(A){let y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let Z=0;Z<y.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=A.textures;for(let W=0,Z=z.length;W<Z;W++){let ae=i.get(z[W]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(z[W])}i.remove(A)}let L=0;function k(){L=0}function D(){return L}function H(A){L=A}function Y(){let A=L;return A>=s.maxTextures&&De("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function F(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ne(A,y){let z=i.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let W=A.image;if(W===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(z,A,y);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function X(A,y){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){_e(z,A,y);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function K(A,y){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){_e(z,A,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function B(A,y){let z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Ne(z,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}let j={[Ms]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},se={[Ut]:n.NEAREST,[Uu]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[Io]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Be={[zu]:n.NEVER,[Xu]:n.ALWAYS,[Hu]:n.LESS,[gl]:n.LEQUAL,[Vu]:n.EQUAL,[yl]:n.GEQUAL,[Gu]:n.GREATER,[Wu]:n.NOTEQUAL};function Pe(A,y){if(y.type===Tn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zt||y.magFilter===Io||y.magFilter===Ur||y.magFilter===Ii||y.minFilter===zt||y.minFilter===Io||y.minFilter===Ur||y.minFilter===Ii)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,j[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,j[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,j[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,se[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==Ur&&y.minFilter!==Ii||y.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ge(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));let W=y.source,Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));let ae=F(y);if(ae!==A.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[ae].usedTimes++;let oe=Z[A.__cacheKey];oe!==void 0&&(Z[A.__cacheKey].usedTimes--,oe.usedTimes===0&&P(y)),A.__cacheKey=ae,A.__webglTexture=Z[ae].texture}return z}function $(A,y,z){return Math.floor(Math.floor(A/z)/y)}function Q(A,y,z,W){let ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{ae.sort((Ce,de)=>Ce.start-de.start);let oe=0;for(let Ce=1;Ce<ae.length;Ce++){let de=ae[oe],ce=ae[Ce],Re=de.start+de.count,Le=$(ce.start,y.width,4),We=$(de.start,y.width,4);ce.start<=Re+1&&Le===We&&$(ce.start+ce.count-1,y.width,4)===Le?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,ae[oe]=ce)}ae.length=oe+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ce=0,de=ae.length;Ce<de;Ce++){let ce=ae[Ce],Re=Math.floor(ce.start/4),Le=Math.ceil(ce.count/4),We=Re%y.width,U=Math.floor(Re/y.width),he=Le,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,We,U,he,ee,z,W,y.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function _e(A,y,z){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);let Z=Ge(A,y),ae=y.source;t.bindTexture(W,A.__webglTexture,n.TEXTURE0+z);let oe=i.get(ae);if(ae.version!==oe.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ee=Ke.getPrimaries(Ke.workingColorSpace),ue=y.colorSpace===ui?null:Ke.getPrimaries(y.colorSpace),ye=y.colorSpace===ui||ee===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let te=m(y.image,!1,s.maxTextureSize);te=Gt(y,te);let le=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),de=v(y.internalFormat,le,Ce,y.normalized,y.colorSpace,y.isVideoTexture);Pe(W,y);let ce,Re=y.mipmaps,Le=y.isVideoTexture!==!0,We=oe.__version===void 0||Z===!0,U=ae.dataReady,he=E(y,te);if(y.isDepthTexture)de=T(y.format===Li,y.type),We&&(Le?t.texStorage2D(n.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,de,te.width,te.height,0,le,Ce,null));else if(y.isDataTexture)if(Re.length>0){Le&&We&&t.texStorage2D(n.TEXTURE_2D,he,de,Re[0].width,Re[0].height);for(let ee=0,ue=Re.length;ee<ue;ee++)ce=Re[ee],Le?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Ce,ce.data):t.texImage2D(n.TEXTURE_2D,ee,de,ce.width,ce.height,0,le,Ce,ce.data);y.generateMipmaps=!1}else Le?(We&&t.texStorage2D(n.TEXTURE_2D,he,de,te.width,te.height),U&&Q(y,te,le,Ce)):t.texImage2D(n.TEXTURE_2D,0,de,te.width,te.height,0,le,Ce,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,Re[0].width,Re[0].height,te.depth);for(let ee=0,ue=Re.length;ee<ue;ee++)if(ce=Re[ee],y.format!==En)if(le!==null)if(Le){if(U)if(y.layerUpdates.size>0){let ye=Xc(ce.width,ce.height,y.format,y.type);for(let ie of y.layerUpdates){let Ie=ce.data.subarray(ie*ye/ce.data.BYTES_PER_ELEMENT,(ie+1)*ye/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ie,ce.width,ce.height,1,le,Ie)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,de,ce.width,ce.height,te.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,le,Ce,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,de,ce.width,ce.height,te.depth,0,le,Ce,ce.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Le&&We&&t.texStorage2D(n.TEXTURE_2D,he,de,Re[0].width,Re[0].height);for(let ee=0,ue=Re.length;ee<ue;ee++)ce=Re[ee],y.format!==En?le!==null?Le?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,de,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Ce,ce.data):t.texImage2D(n.TEXTURE_2D,ee,de,ce.width,ce.height,0,le,Ce,ce.data)}else if(y.isDataArrayTexture)if(Le){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,te.width,te.height,te.depth),U)if(y.layerUpdates.size>0){let ee=Xc(te.width,te.height,y.format,y.type);for(let ue of y.layerUpdates){let ye=te.data.subarray(ue*ee/te.data.BYTES_PER_ELEMENT,(ue+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,le,Ce,ye)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Ce,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,le,Ce,te.data);else if(y.isData3DTexture)Le?(We&&t.texStorage3D(n.TEXTURE_3D,he,de,te.width,te.height,te.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Ce,te.data)):t.texImage3D(n.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,le,Ce,te.data);else if(y.isFramebufferTexture){if(We)if(Le)t.texStorage2D(n.TEXTURE_2D,he,de,te.width,te.height);else{let ee=te.width,ue=te.height;for(let ye=0;ye<he;ye++)t.texImage2D(n.TEXTURE_2D,ye,de,ee,ue,0,le,Ce,null),ee>>=1,ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(y),ee.onpaint=ue=>{let ye=ue.changedElements;for(let ie of d)ye.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let ye=n.RGBA,ie=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ye,ie,Ie,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Le&&We){let ee=ct(Re[0]);t.texStorage2D(n.TEXTURE_2D,he,de,ee.width,ee.height)}for(let ee=0,ue=Re.length;ee<ue;ee++)ce=Re[ee],Le?U&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,le,Ce,ce):t.texImage2D(n.TEXTURE_2D,ee,de,le,Ce,ce);y.generateMipmaps=!1}else if(Le){if(We){let ee=ct(te);t.texStorage2D(n.TEXTURE_2D,he,de,ee.width,ee.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ce,te)}else t.texImage2D(n.TEXTURE_2D,0,de,le,Ce,te);p(y)&&M(W),oe.__version=ae.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Ne(A,y,z){if(y.image.length!==6)return;let W=Ge(A,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let ae=i.get(Z);if(Z.version!==ae.__version||W===!0){t.activeTexture(n.TEXTURE0+z);let oe=Ke.getPrimaries(Ke.workingColorSpace),J=y.colorSpace===ui?null:Ke.getPrimaries(y.colorSpace),te=y.colorSpace===ui||oe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let le=y.isCompressedTexture||y.image[0].isCompressedTexture,Ce=y.image[0]&&y.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!le&&!Ce?de[ie]=m(y.image[ie],!0,s.maxCubemapSize):de[ie]=Ce?y.image[ie].image:y.image[ie],de[ie]=Gt(y,de[ie]);let ce=de[0],Re=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),We=v(y.internalFormat,Re,Le,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,he=ae.__version===void 0||W===!0,ee=Z.dataReady,ue=E(y,ce);Pe(n.TEXTURE_CUBE_MAP,y);let ye;if(le){U&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,We,ce.width,ce.height);for(let ie=0;ie<6;ie++){ye=de[ie].mipmaps;for(let Ie=0;Ie<ye.length;Ie++){let Ee=ye[Ie];y.format!==En?Re!==null?U?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,Ee.width,Ee.height,Re,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,We,Ee.width,Ee.height,0,Ee.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,Ee.width,Ee.height,Re,Le,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,We,Ee.width,Ee.height,0,Re,Le,Ee.data)}}}else{if(ye=y.mipmaps,U&&he){ye.length>0&&ue++;let ie=ct(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,We,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Re,Le,de[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,de[ie].width,de[ie].height,0,Re,Le,de[ie].data);for(let Ie=0;Ie<ye.length;Ie++){let pt=ye[Ie].image[ie].image;U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,pt.width,pt.height,Re,Le,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,We,pt.width,pt.height,0,Re,Le,pt.data)}}else{U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Le,de[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,Re,Le,de[ie]);for(let Ie=0;Ie<ye.length;Ie++){let Ee=ye[Ie];U?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,Re,Le,Ee.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,We,Re,Le,Ee.image[ie])}}}p(y)&&M(n.TEXTURE_CUBE_MAP),ae.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function re(A,y,z,W,Z,ae){let oe=r.convert(z.format,z.colorSpace),J=r.convert(z.type),te=v(z.internalFormat,oe,J,z.normalized,z.colorSpace),le=i.get(y),Ce=i.get(z);if(Ce.__renderTarget=y,!le.__hasExternalTextures){let de=Math.max(1,y.width>>ae),ce=Math.max(1,y.height>>ae);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,ae,te,de,ce,y.depth,0,oe,J,null):t.texImage2D(Z,ae,te,de,ce,0,oe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),wt(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,Ce.__webglTexture,0,Mt(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,Ce.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){let W=y.depthTexture,Z=W&&W.isDepthTexture?W.type:null,ae=T(y.stencilBuffer,Z),oe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;wt(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(y),ae,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(y),ae,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ae,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,A)}else{let W=y.textures;for(let Z=0;Z<W.length;Z++){let ae=W[Z],oe=r.convert(ae.format,ae.colorSpace),J=r.convert(ae.type),te=v(ae.internalFormat,oe,J,ae.normalized,ae.colorSpace);wt(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(y),te,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(y),te,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,te,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(A,y,z){let W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,y.depthTexture);let le=r.convert(y.depthTexture.format),Ce=r.convert(y.depthTexture.type),de;y.depthTexture.format===Yn?de=n.DEPTH_COMPONENT24:y.depthTexture.format===Li&&(de=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,y.width,y.height,0,le,Ce,null)}}else ne(y.depthTexture,0);let ae=Z.__webglTexture,oe=Mt(y),J=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,te=y.depthTexture.format===Li?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Yn)wt(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,ae,0);else if(y.depthTexture.format===Li)wt(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(A){let y=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=W}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)it(y.__webglFramebuffer[W],A,W);else{let W=A.texture.mipmaps;W&&W.length>0?it(y.__webglFramebuffer[0],A,0):it(y.__webglFramebuffer,A,0)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),ze(y.__webglDepthbuffer[W],A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ae)}}else{let W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ze(y.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(A,y,z){let W=i.get(A);y!==void 0&&re(W.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ue(A)}function tt(A){let y=A.texture,z=i.get(A),W=i.get(y);A.addEventListener("dispose",x);let Z=A.textures,ae=A.isWebGLCubeRenderTarget===!0,oe=Z.length>1;if(oe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,a.memory.textures++),ae){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let te=0;te<y.mipmaps.length;te++)z.__webglFramebuffer[J][te]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(oe)for(let J=0,te=Z.length;J<te;J++){let le=i.get(Z[J]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&wt(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let te=Z[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let le=r.convert(te.format,te.colorSpace),Ce=r.convert(te.type),de=v(te.internalFormat,le,Ce,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),ce=Mt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,de,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)re(z.__webglFramebuffer[J][te],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else re(z.__webglFramebuffer[J],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let J=0,te=Z.length;J<te;J++){let le=Z[J],Ce=i.get(le),de=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Ce.__webglTexture),Pe(de,le),re(z.__webglFramebuffer,A,le,n.COLOR_ATTACHMENT0+J,de,0),p(le)&&M(de)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),Pe(J,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)re(z.__webglFramebuffer[te],A,y,n.COLOR_ATTACHMENT0,J,te);else re(z.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,J,0);p(y)&&M(J),t.unbindTexture()}A.depthBuffer&&Ue(A)}function Je(A){let y=A.textures;for(let z=0,W=y.length;z<W;z++){let Z=y[z];if(p(Z)){let ae=C(A),oe=i.get(Z).__webglTexture;t.bindTexture(ae,oe),M(ae),t.unbindTexture()}}}let _t=[],Dt=[];function sn(A){if(A.samples>0){if(wt(A)===!1){let y=A.textures,z=A.width,W=A.height,Z=n.COLOR_BUFFER_BIT,ae=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(A),J=y.length>1;if(J)for(let le=0;le<y.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let te=A.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<y.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ce=i.get(y[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ce,0)}n.blitFramebuffer(0,0,z,W,0,0,z,W,Z,n.NEAREST),c===!0&&(_t.length=0,Dt.length=0,_t.push(n.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(_t.push(ae),Dt.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<y.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ce=i.get(y[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Mt(A){return Math.min(s.maxSamples,A.samples)}function wt(A){let y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(A){let y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Gt(A,y){let z=A.colorSpace,W=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ur&&z!==ui&&(Ke.getTransfer(z)===at?(W!==En||Z!==on)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",z)),y}function ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(o.width=A.naturalWidth||A.width,o.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(o.width=A.displayWidth,o.height=A.displayHeight):(o.width=A.width,o.height=A.height),o}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=re,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Hy(n,e){function t(i,s=ui){let r,a=Ke.getTransfer(s);if(i===on)return n.UNSIGNED_BYTE;if(i===Do)return n.UNSIGNED_SHORT_4_4_4_4;if(i===No)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Oc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nc)return n.BYTE;if(i===Fc)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===Lo)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===zn)return n.HALF_FLOAT;if(i===kc)return n.ALPHA;if(i===Bc)return n.RGB;if(i===En)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===Fo)return n.RED;if(i===Uo)return n.RED_INTEGER;if(i===Di)return n.RG;if(i===Oo)return n.RG_INTEGER;if(i===ko)return n.RGBA_INTEGER;if(i===Or||i===kr||i===Br||i===zr)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bo||i===zo||i===Ho||i===Vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go||i===Wo||i===Xo||i===qo||i===$o||i===Hr||i===Yo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Go||i===Wo)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qo)return r.COMPRESSED_R11_EAC;if(i===$o)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Hr)return r.COMPRESSED_RG11_EAC;if(i===Yo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zo||i===Jo||i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===hl||i===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cl)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===fl||i===Vr||i===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Er(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new fn({vertexShader:Vy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Zn{constructor(e,t){super();let i=this,s=null,r=1,a=null,l="local-floor",c=1,o=null,u=null,d=null,h=null,f=null,g=null,S=typeof XRWebGLBinding<"u",m=new rh,p={},M=t.getContextAttributes(),C=null,v=null,T=[],E=[],R=new Oe,x=null,w=null,P=new $t;P.viewport=new vt;let b=new $t;b.viewport=new vt;let L=[P,b],k=new wo,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=T[$];return Q===void 0&&(Q=new Cs,T[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=T[$];return Q===void 0&&(Q=new Cs,T[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=T[$];return Q===void 0&&(Q=new Cs,T[$]=Q),Q.getHandSpace()};function Y($){let Q=E.indexOf($.inputSource);if(Q===-1)return;let _e=T[Q];_e!==void 0&&(_e.update($.inputSource,$.frame,o||a),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",ne);for(let $=0;$<T.length;$++){let Q=E[$];Q!==null&&(E[$]=null,T[$].disconnect(Q))}D=null,H=null,m.reset();for(let $ in p)delete p[$];if(e.setRenderTarget(C),f=null,h=null,d=null,s=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function($){o=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",F),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ne=null,re=null;M.depth&&(re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?Li:Yn,Ne=M.stencil?Os:Bn);let ze={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new an(h.textureWidth,h.textureHeight,{format:En,type:on,depthTexture:new Ti(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new an(f.framebufferWidth,f.framebufferHeight,{format:En,type:on,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne($){for(let Q=0;Q<$.removed.length;Q++){let _e=$.removed[Q],Ne=E.indexOf(_e);Ne>=0&&(E[Ne]=null,T[Ne].disconnect(_e))}for(let Q=0;Q<$.added.length;Q++){let _e=$.added[Q],Ne=E.indexOf(_e);if(Ne===-1){for(let ze=0;ze<T.length;ze++)if(ze>=E.length){E.push(_e),Ne=ze;break}else if(E[ze]===null){E[ze]=_e,Ne=ze;break}if(Ne===-1)break}let re=T[Ne];re&&re.connect(_e)}}let X=new I,K=new I;function B($,Q,_e){X.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);let Ne=X.distanceTo(K),re=Q.projectionMatrix.elements,ze=_e.projectionMatrix.elements,it=re[14]/(re[10]-1),Ue=re[14]/(re[10]+1),Ze=(re[9]+1)/re[5],tt=(re[9]-1)/re[5],Je=(re[8]-1)/re[0],_t=(ze[8]+1)/ze[0],Dt=it*Je,sn=it*_t,Mt=Ne/(-Je+_t),wt=Mt*-Je;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(wt),$.translateZ(Mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),re[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let O=it+Mt,Gt=Ue+Mt,ct=Dt-wt,A=sn+(Ne-wt),y=Ze*Ue/Gt*O,z=tt*Ue/Gt*O;$.projectionMatrix.makePerspective(ct,A,y,z,O,Gt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function j($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,_e=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=b.near=P.near=Q,k.far=b.far=P.far=_e,(D!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,H=k.far),k.layers.mask=$.layers.mask|6,P.layers.mask=k.layers.mask&-5,b.layers.mask=k.layers.mask&-3;let Ne=$.parent,re=k.cameras;j(k,Ne);for(let ze=0;ze<re.length;ze++)j(re[ze],Ne);re.length===2?B(k,P,b):k.projectionMatrix.copy(P.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),se($,k,Ne)};function se($,Q,_e){_e===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=eo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return p[$]};let Be=null;function Pe($,Q){if(u=Q.getViewerPose(o||a),g=Q,u!==null){let _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ne=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let Ue=0;Ue<_e.length;Ue++){let Ze=_e[Ue],tt=null;if(f!==null)tt=f.getViewport(Ze);else{let _t=d.getViewSubImage(h,Ze);tt=_t.viewport,Ue===0&&(e.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(v))}let Je=L[Ue];Je===void 0&&(Je=new $t,Je.layers.enable(Ue),Je.viewport=new vt,L[Ue]=Je),Je.matrix.fromArray(Ze.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ze.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(tt.x,tt.y,tt.width,tt.height),Ue===0&&(k.matrix.copy(Je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(Je)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let Ue=d.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,s.renderState)}if(re&&re.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let Ue=0;Ue<_e.length;Ue++){let Ze=_e[Ue].camera;if(Ze){let tt=p[Ze];tt||(tt=new Er,p[Ze]=tt);let Je=d.getCameraImage(Ze);tt.sourceTexture=Je}}}}for(let _e=0;_e<T.length;_e++){let Ne=E[_e],re=T[_e];Ne!==null&&re!==void 0&&re.update(Ne,Q,o||a)}Be&&Be($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Ge=new Sd;Ge.setAnimationLoop(Pe),this.setAnimationLoop=function($){Be=$},this.dispose=function(){}}},Wy=new nt,Cd=new He;Cd.set(-1,0,0,0,1,0,0,0,1);function Xy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,C,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,M,C):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),C=M.envMap,v=M.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(v)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qy(n,e,t,i){let s={},r={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){let E=T.program;i.uniformBlockBinding(v,E)}function o(v,T){let E=s[v.id];E===void 0&&(m(v),E=u(v),s[v.id]=E,v.addEventListener("dispose",M));let R=T.program;i.updateUBOMapping(v,R);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let T=d();v.__bindingPointIndex=T;let E=n.createBuffer(),R=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function d(){for(let v=0;v<l;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let T=s[v.id],E=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){let P=E[x];if(Array.isArray(P))for(let b=0,L=P.length;b<L;b++)f(P[b],x,b,R);else f(P,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,T,E,R){if(S(v,T,E,R)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let P=0;for(let b=0;b<w.length;b++){let L=w[b],k=p(L);g(L,v.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function g(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function S(v,T,E,R){let x=v.value,w=T+"_"+E;if(R[w]===void 0)return typeof x=="number"||typeof x=="boolean"?R[w]=x:ArrayBuffer.isView(x)?R[w]=x.slice():R[w]=x.clone(),!0;{let P=R[w];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(v){let T=v.uniforms,E=0,R=16;for(let w=0,P=T.length;w<P;w++){let b=Array.isArray(T[w])?T[w]:[T[w]];for(let L=0,k=b.length;L<k;L++){let D=b[L],H=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,F=H.length;Y<F;Y++){let ne=H[Y],X=p(ne),K=E%R,B=K%X.boundary,j=K+B;E+=B,j!==0&&R-j<X.storage&&(E+=R-j),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=X.storage}}}let x=E%R;return x>0&&(E+=R-x),v.__size=E,v.__cache={},this}function p(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),T}function M(v){let T=v.target;T.removeEventListener("dispose",M);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function C(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:o,dispose:C}}var $y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function Yy(){return Qn===null&&(Qn=new Sr($y,16,16,Di,zn),Qn.name="DFG_LUT",Qn.minFilter=zt,Qn.magFilter=zt,Qn.wrapS=$n,Qn.wrapT=$n,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var Sl=class{constructor(e={}){let{canvas:t=qu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=on}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let S=f,m=new Set([ko,Oo,Uo]),p=new Set([on,Bn,Us,Os,Do,No]),M=new Uint32Array(4),C=new Int32Array(4),v=new I,T=null,E=null,R=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,b=!1,L=null,k=null,D=null,H=null;this._outputColorSpace=Ft;let Y=0,F=0,ne=null,X=-1,K=null,B=new vt,j=new vt,se=null,Be=new Ve(0),Pe=0,Ge=t.width,$=t.height,Q=1,_e=null,Ne=null,re=new vt(0,0,Ge,$),ze=new vt(0,0,Ge,$),it=!1,Ue=new Is,Ze=!1,tt=!1,Je=new nt,_t=new I,Dt=new vt,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function wt(){return ne===null?Q:1}let O=i;function Gt(_,N){return t.getContext(_,N)}let ct,A,y,z,W,Z,ae,oe,J,te,le,Ce,de,ce,Re,Le,We,U,he,ee,ue,ye,ie;try{let _={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Ln,!1),O===null){let N="webgl2";if(O=Gt(N,_),O===null)throw Gt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(_){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),Fe("WebGLRenderer: "+_.message),_}function Ie(){ct=new t0(O),ct.init(),ue=new Hy(O,ct),A=new Xg(O,ct,e,ue),y=new By(O,ct),A.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),k=O.createFramebuffer(),D=O.createFramebuffer(),H=O.createFramebuffer(),z=new s0(O),W=new Ey,Z=new zy(O,ct,y,W,A,ue,z),ae=new e0(P),oe=new ap(O),ye=new Gg(O,oe),J=new n0(O,oe,z,ye),te=new a0(O,J,oe,ye,z),U=new r0(O,A,Z),Re=new qg(W),le=new Ty(P,ae,ct,A,ye,Re),Ce=new Xy(P,W),de=new Ay,ce=new Dy(ct),We=new Vg(P,ae,y,te,g,c),Le=new ky(P,te,A),ie=new qy(O,z,A,y),he=new Wg(O,ct,z),ee=new i0(O,ct,z),z.programs=le.programs,P.capabilities=A,P.extensions=ct,P.properties=W,P.renderLists=de,P.shadowMap=Le,P.state=y,P.info=z}S!==on&&(w=new l0(S,t.width,t.height,l,s,r));let Ee=new ah(P,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let _=ct.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ct.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(_){_!==void 0&&(Q=_,this.setSize(Ge,$,!1))},this.getSize=function(_){return _.set(Ge,$)},this.setSize=function(_,N,q=!0){if(Ee.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=_,$=N,t.width=Math.floor(_*Q),t.height=Math.floor(N*Q),q===!0&&(t.style.width=_+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(Ge*Q,$*Q).floor()},this.setDrawingBufferSize=function(_,N,q){Ge=_,$=N,Q=q,t.width=Math.floor(_*q),t.height=Math.floor(N*q),this.setViewport(0,0,_,N)},this.setEffects=function(_){if(S===on){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let N=0;N<_.length;N++)if(_[N].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(B)},this.getViewport=function(_){return _.copy(re)},this.setViewport=function(_,N,q,V){_.isVector4?re.set(_.x,_.y,_.z,_.w):re.set(_,N,q,V),y.viewport(B.copy(re).multiplyScalar(Q).round())},this.getScissor=function(_){return _.copy(ze)},this.setScissor=function(_,N,q,V){_.isVector4?ze.set(_.x,_.y,_.z,_.w):ze.set(_,N,q,V),y.scissor(j.copy(ze).multiplyScalar(Q).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(_){y.setScissorTest(it=_)},this.setOpaqueSort=function(_){_e=_},this.setTransparentSort=function(_){Ne=_},this.getClearColor=function(_){return _.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,q=!0){let V=0;if(_){let G=!1;if(ne!==null){let ge=ne.texture.format;G=m.has(ge)}if(G){let ge=ne.texture.type,be=p.has(ge),me=We.getClearColor(),Me=We.getClearAlpha(),Ae=me.r,Xe=me.g,Ye=me.b;be?(M[0]=Ae,M[1]=Xe,M[2]=Ye,M[3]=Me,O.clearBufferuiv(O.COLOR,0,M)):(C[0]=Ae,C[1]=Xe,C[2]=Ye,C[3]=Me,O.clearBufferiv(O.COLOR,0,C))}else V|=O.COLOR_BUFFER_BIT}N&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),L=_},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),We.dispose(),de.dispose(),ce.dispose(),W.dispose(),ae.dispose(),te.dispose(),ye.dispose(),ie.dispose(),le.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ch),Ee.removeEventListener("sessionend",Rh),Oi.stop()};function pt(_){_.preventDefault(),pr("WebGLRenderer: Context Lost."),b=!0}function st(){pr("WebGLRenderer: Context Restored."),b=!1;let _=z.autoReset,N=Le.enabled,q=Le.autoUpdate,V=Le.needsUpdate,G=Le.type;Ie(),z.autoReset=_,Le.enabled=N,Le.autoUpdate=q,Le.needsUpdate=V,Le.type=G}function Ln(_){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Vn(_){let N=_.target;N.removeEventListener("dispose",Vn),yf(N)}function yf(_){xf(_),W.remove(_)}function xf(_){let N=W.get(_).programs;N!==void 0&&(N.forEach(function(q){le.releaseProgram(q)}),_.isShaderMaterial&&le.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,q,V,G,ge){N===null&&(N=sn);let be=G.isMesh&&G.matrixWorld.determinantAffine()<0,me=bf(_,N,q,V,G);y.setMaterial(V,be);let Me=q.index,Ae=1;if(V.wireframe===!0){if(Me=J.getWireframeAttribute(q),Me===void 0)return;Ae=2}let Xe=q.drawRange,Ye=q.attributes.position,Te=Xe.start*Ae,rt=(Xe.start+Xe.count)*Ae;ge!==null&&(Te=Math.max(Te,ge.start*Ae),rt=Math.min(rt,(ge.start+ge.count)*Ae)),Me!==null?(Te=Math.max(Te,0),rt=Math.min(rt,Me.count)):Ye!=null&&(Te=Math.max(Te,0),rt=Math.min(rt,Ye.count));let At=rt-Te;if(At<0||At===1/0)return;ye.setup(G,V,me,q,Me);let yt,ft=he;if(Me!==null&&(yt=oe.get(Me),ft=ee,ft.setIndex(yt)),G.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*wt()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(G.isLine){let Wt=V.linewidth;Wt===void 0&&(Wt=1),y.setLineWidth(Wt*wt()),G.isLineSegments?ft.setMode(O.LINES):G.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else G.isPoints?ft.setMode(O.POINTS):G.isSprite&&ft.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Wt=G._multiDrawStarts,ve=G._multiDrawCounts,jt=G._multiDrawCount,Qe=Me?oe.get(Me).bytesPerElement:1,vn=W.get(V).currentProgram.getUniforms();for(let Gn=0;Gn<jt;Gn++)vn.setValue(O,"_gl_DrawID",Gn),ft.render(Wt[Gn]/Qe,ve[Gn])}else if(G.isInstancedMesh)ft.renderInstances(Te,At,G.count);else if(q.isInstancedBufferGeometry){let Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,Wt);ft.renderInstances(Te,At,ve)}else ft.render(Te,At)};function Ah(_,N,q,V){L!==null&&_.isNodeMaterial&&L.setObject(V,_),Ze===!0&&Re.setState(_,q,!1),_.transparent===!0&&_.side===Mn&&_.forceSinglePass===!1?(_.side=tn,_.needsUpdate=!0,fa(_,N,V),_.side=Ri,_.needsUpdate=!0,fa(_,N,V),_.side=Mn):fa(_,N,V)}this.compile=function(_,N,q=null){q===null&&(q=_),L!==null&&L.renderStart(_,N,q),E=ce.get(q),E.init(N),x.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),_!==q&&_.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),tt=this.localClippingEnabled,Ze=Re.init(this.clippingPlanes,tt),Ze===!0&&Re.setGlobalState(this.clippingPlanes,N),L!==null&&Le.render(E.state.shadowsArray,q,N);let V=new Set;return _.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let me=ge[be];Ah(me,q,N,G),V.add(me)}else Ah(ge,q,N,G),V.add(ge)}),E=x.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(_,N,q=null){let V=this.compile(_,N,q);return new Promise(G=>{function ge(){if(V.forEach(function(be){let Me=W.get(be).currentProgram;(Me===void 0||Me.isReady())&&V.delete(be)}),V.size===0){G(_);return}setTimeout(ge,10)}ct.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let kl=null;function _f(_){kl&&kl(_)}function Ch(){Oi.stop()}function Rh(){Oi.start()}let Oi=new Sd;Oi.setAnimationLoop(_f),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(_){kl=_,Ee.setAnimationLoop(_),_===null?Oi.stop():Oi.start()},Ee.addEventListener("sessionstart",Ch),Ee.addEventListener("sessionend",Rh),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L!==null&&L.renderStart(_,N);let q=Ee.enabled===!0&&Ee.isPresenting===!0,V=w!==null&&(ne===null||q)&&w.begin(P,ne);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(N),N=Ee.getCamera()),_.isScene===!0&&_.onBeforeRender(P,_,N,ne),E=ce.get(_,x.length),E.init(N),E.state.textureUnits=Z.getTextureUnits(),x.push(E),Je.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(Je,Un,N.reversedDepth),tt=this.localClippingEnabled,Ze=Re.init(this.clippingPlanes,tt),T=de.get(_,R.length),T.init(),R.push(T),Ee.enabled===!0&&Ee.isPresenting===!0){let be=P.xr.getDepthSensingMesh();be!==null&&Bl(be,N,-1/0,P.sortObjects)}Bl(_,N,0,P.sortObjects),T.finish(),L!==null&&L.updateLights(E.state.lightsArray),P.sortObjects===!0&&T.sort(_e,Ne),Mt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Mt&&We.addToRenderList(T,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Re.beginShadows();let G=E.state.shadowsArray;if(Le.render(G,_,N),Ze===!0&&Re.endShadows(),(V&&w.hasRenderPass())===!1){let be=T.opaque,me=T.transmissive;if(E.setupLights(),N.isArrayCamera){let Me=N.cameras;if(me.length>0)for(let Ae=0,Xe=Me.length;Ae<Xe;Ae++){let Ye=Me[Ae];Ih(be,me,_,Ye)}Mt&&We.render(_);for(let Ae=0,Xe=Me.length;Ae<Xe;Ae++){let Ye=Me[Ae];Ph(T,_,Ye,Ye.viewport)}}else me.length>0&&Ih(be,me,_,N),Mt&&We.render(_),Ph(T,_,N)}ne!==null&&F===0&&(Z.updateMultisampleRenderTarget(ne),Z.updateRenderTargetMipmap(ne)),V&&w.end(P),_.isScene===!0&&_.onAfterRender(P,_,N),ye.resetDefaultState(),X=-1,K=null,x.pop(),x.length>0?(E=x[x.length-1],Z.setTextureUnits(E.state.textureUnits),Ze===!0&&Re.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,L!==null&&L.renderEnd()};function Bl(_,N,q,V){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)q=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLightProbeGrid)E.pushLightProbeGrid(_);else if(_.isLight)E.pushLight(_),_.castShadow&&E.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(Ue)){V&&Dt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Je);let be=te.update(_),me=_.material;me.visible&&T.push(_,be,me,q,Dt.z,null,N)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(Ue))){let be=te.update(_),me=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Dt.copy(_.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Dt.copy(be.boundingSphere.center)),Dt.applyMatrix4(_.matrixWorld).applyMatrix4(Je)),Array.isArray(me)){let Me=be.groups;for(let Ae=0,Xe=Me.length;Ae<Xe;Ae++){let Ye=Me[Ae],Te=me[Ye.materialIndex];Te&&Te.visible&&T.push(_,be,Te,q,Dt.z,Ye,N)}}else me.visible&&T.push(_,be,me,q,Dt.z,null,N)}}let ge=_.children;for(let be=0,me=ge.length;be<me;be++)Bl(ge[be],N,q,V)}function Ph(_,N,q,V){let{opaque:G,transmissive:ge,transparent:be}=_;E.setupLightsView(q),Ze===!0&&Re.setGlobalState(P.clippingPlanes,q),V&&y.viewport(B.copy(V)),G.length>0&&da(G,N,q),ge.length>0&&da(ge,N,q),be.length>0&&da(be,N,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ih(_,N,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Te=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new an(1,1,{generateMipmaps:!0,type:Te?zn:on,minFilter:Ii,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let ge=E.state.transmissionRenderTarget[V.id],be=V.viewport||B;ge.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);let me=P.getRenderTarget(),Me=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(Be),Pe=P.getClearAlpha(),Pe<1&&P.setClearColor(16777215,.5),P.clear(),Mt&&We.render(q);let Xe=P.toneMapping;P.toneMapping=kn;let Ye=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Ze===!0&&Re.setGlobalState(P.clippingPlanes,V),da(_,q,V),Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let rt=0,At=N.length;rt<At;rt++){let yt=N[rt],{object:ft,geometry:Wt,material:ve,group:jt}=yt;if(ve.side===Mn&&ft.layers.test(V.layers)){let Qe=ve.side;ve.side=tn,ve.needsUpdate=!0,Lh(ft,q,V,Wt,ve,jt),ve.side=Qe,ve.needsUpdate=!0,Te=!0}}Te===!0&&(Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,Me,Ae),P.setClearColor(Be,Pe),Ye!==void 0&&(V.viewport=Ye),P.toneMapping=Xe}function da(_,N,q){let V=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ge=_.length;G<ge;G++){let be=_[G],{object:me,geometry:Me,group:Ae}=be,Xe=be.material;Xe.allowOverride===!0&&V!==null&&(Xe=V),me.layers.test(q.layers)&&Lh(me,N,q,Me,Xe,Ae)}}function Lh(_,N,q,V,G,ge){L!==null&&G.isNodeMaterial&&L.setObject(_,G),_.onBeforeRender(P,N,q,V,G,ge),_.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),G.onBeforeRender(P,N,q,V,_,ge),G.transparent===!0&&G.side===Mn&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,P.renderBufferDirect(q,N,V,G,_,ge),G.side=Ri,G.needsUpdate=!0,P.renderBufferDirect(q,N,V,G,_,ge),G.side=Mn):P.renderBufferDirect(q,N,V,G,_,ge),_.onAfterRender(P,N,q,V,G,ge)}function fa(_,N,q){N.isScene!==!0&&(N=sn);let V=W.get(_),G=E.state.lights,ge=E.state.shadowsArray,be=G.state.version,me=le.getParameters(_,G.state,ge,N,q,E.state.lightProbeGridArray),Me=le.getProgramCacheKey(me),Ae=V.programs;V.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let Xe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;V.envMap=ae.get(_.envMap||V.environment,Xe),V.envMapRotation=V.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Ae===void 0&&(_.addEventListener("dispose",Vn),Ae=new Map,V.programs=Ae);let Ye=Ae.get(Me);if(Ye!==void 0){if(V.currentProgram===Ye&&V.lightsStateVersion===be)return Nh(_,me),Ye}else me.uniforms=le.getUniforms(_),L!==null&&_.isNodeMaterial&&L.build(_,q,me),_.onBeforeCompile(me,P),Ye=le.acquireProgram(me,Me),Ae.set(Me,Ye),V.uniforms=me.uniforms;let Te=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Te.clippingPlanes=Re.uniform),Nh(_,me),V.needsLights=Mf(_),V.lightsStateVersion=be,V.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Ye,V.uniformsList=null,Ye}function Dh(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=zs.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function Nh(_,N){let q=W.get(_);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function vf(_,N){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let q=0,V=_.length;q<V;q++){let G=_[q];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function bf(_,N,q,V,G){N.isScene!==!0&&(N=sn),Z.resetTextureUnits();let ge=N.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,me=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ke.workingColorSpace,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=ae.get(V.envMap||be,Me),Xe=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,yt=kn;V.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(yt=P.toneMapping);let ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=ft!==void 0?ft.length:0,ve=W.get(V),jt=E.state.lights;if(Ze===!0&&(tt===!0||_!==K)){let mt=_===K&&V.id===X;Re.setState(V,_,mt)}let Qe=!1;V.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==jt.state.version||ve.outputColorSpace!==me||G.isBatchedMesh&&ve.batching===!1||!G.isBatchedMesh&&ve.batching===!0||G.isBatchedMesh&&ve.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ve.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ve.instancing===!1||!G.isInstancedMesh&&ve.instancing===!0||G.isSkinnedMesh&&ve.skinning===!1||!G.isSkinnedMesh&&ve.skinning===!0||G.isInstancedMesh&&ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ve.instancingMorph===!1&&G.morphTexture!==null||ve.envMap!==Ae||V.fog===!0&&ve.fog!==ge||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Re.numPlanes||ve.numIntersection!==Re.numIntersection)||ve.vertexAlphas!==Xe||ve.vertexTangents!==Ye||ve.morphTargets!==Te||ve.morphNormals!==rt||ve.morphColors!==At||ve.toneMapping!==yt||ve.morphTargetsCount!==Wt||!!ve.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ve.__version=V.version);let vn=ve.currentProgram;Qe===!0&&(vn=fa(V,N,G),L&&V.isNodeMaterial&&L.onUpdateProgram(V,vn,ve));let Gn=!1,fi=!1,ts=!1,ht=vn.getUniforms(),Et=ve.uniforms;if(y.useProgram(vn.program)&&(Gn=!0,fi=!0,ts=!0),V.id!==X&&(X=V.id,fi=!0),ve.needsLights){let mt=vf(E.state.lightProbeGridArray,G);ve.lightProbeGrid!==mt&&(ve.lightProbeGrid=mt,fi=!0)}if(Gn||K!==_){y.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ht.setValue(O,"projectionMatrix",_.projectionMatrix),ht.setValue(O,"viewMatrix",_.matrixWorldInverse);let mi=ht.map.cameraPosition;mi!==void 0&&mi.setValue(O,_t.setFromMatrixPosition(_.matrixWorld)),A.logarithmicDepthBuffer&&ht.setValue(O,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(O,"isOrthographic",_.isOrthographicCamera===!0),K!==_&&(K=_,fi=!0,ts=!0)}if(ve.needsLights&&(jt.state.sunShadowMap.length>0&&ht.setValue(O,"sunShadowMap",jt.state.sunShadowMap,Z),jt.state.directionalShadowMap.length>0&&ht.setValue(O,"directionalShadowMap",jt.state.directionalShadowMap,Z),jt.state.spotShadowMap.length>0&&ht.setValue(O,"spotShadowMap",jt.state.spotShadowMap,Z),jt.state.pointShadowMap.length>0&&ht.setValue(O,"pointShadowMap",jt.state.pointShadowMap,Z)),G.isSkinnedMesh){ht.setOptional(O,G,"bindMatrix"),ht.setOptional(O,G,"bindMatrixInverse");let mt=G.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(O,"boneTexture",mt.boneTexture,Z))}G.isBatchedMesh&&(ht.setOptional(O,G,"batchingTexture"),ht.setValue(O,"batchingTexture",G._matricesTexture,Z),ht.setOptional(O,G,"batchingIdTexture"),ht.setValue(O,"batchingIdTexture",G._indirectTexture,Z),ht.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(O,"batchingColorTexture",G._colorsTexture,Z));let pi=q.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&U.update(G,q,vn),(fi||ve.receiveShadow!==G.receiveShadow)&&(ve.receiveShadow=G.receiveShadow,ht.setValue(O,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Et.envMapIntensity.value=N.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Yy()),fi){if(ht.setValue(O,"toneMappingExposure",P.toneMappingExposure),ve.needsLights&&Sf(Et,ts),ge&&V.fog===!0&&Ce.refreshFogUniforms(Et,ge),Ce.refreshMaterialUniforms(Et,V,Q,$,E.state.transmissionRenderTarget[_.id]),ve.needsLights&&ve.lightProbeGrid){let mt=ve.lightProbeGrid;Et.probesSH.value=mt.texture,Et.probesMin.value.copy(mt.boundingBox.min),Et.probesMax.value.copy(mt.boundingBox.max),Et.probesResolution.value.copy(mt.resolution)}zs.upload(O,Dh(ve),Et,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zs.upload(O,Dh(ve),Et,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(O,"center",G.center),ht.setValue(O,"modelViewMatrix",G.modelViewMatrix),ht.setValue(O,"normalMatrix",G.normalMatrix),ht.setValue(O,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let mt=V.uniformsGroups;for(let mi=0,ns=mt.length;mi<ns;mi++){let Uh=mt[mi];ie.update(Uh,vn),ie.bind(Uh,vn)}}return vn}function Sf(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.sunLights.needsUpdate=N,_.sunLightShadows.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function Mf(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(_,N,q){let V=W.get(_);V.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(_.texture).__webglTexture=N,W.get(_.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let q=W.get(_);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(_,N=0,q=0){ne=_,Y=N,F=q;let V=null,G=!1,ge=!1;if(_){let me=W.get(_);if(me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),B.copy(_.viewport),j.copy(_.scissor),se=_.scissorTest,y.viewport(B),y.scissor(j),y.setScissorTest(se),X=-1;return}else if(me.__webglFramebuffer===void 0)Z.setupRenderTarget(_);else if(me.__hasExternalTextures)Z.rebindTextures(_,W.get(_.texture).__webglTexture,W.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Xe=_.depthTexture;if(me.__boundDepthTexture!==Xe){if(Xe!==null&&W.has(Xe)&&(_.width!==Xe.image.width||_.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(_)}}let Me=_.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ge=!0);let Ae=W.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?V=Ae[N][q]:V=Ae[N],G=!0):_.samples>0&&Z.useMultisampledRTT(_)===!1?V=W.get(_).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[q]:V=Ae,B.copy(_.viewport),j.copy(_.scissor),se=_.scissorTest}else B.copy(re).multiplyScalar(Q).floor(),j.copy(ze).multiplyScalar(Q).floor(),se=it;if(q!==0&&(V=k),y.bindFramebuffer(O.FRAMEBUFFER,V)&&y.drawBuffers(_,V),y.viewport(B),y.scissor(j),y.setScissorTest(se),G){let me=W.get(_.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,q)}else if(ge){let me=N;for(let Me=0;Me<_.textures.length;Me++){let Ae=W.get(_.textures[Me]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,q,me)}}else if(_!==null&&q!==0){let me=W.get(_.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,q)}X=-1};function Fh(_){let N=W.get(_);return(N.__readFormat!==_.format||N.__readType!==_.type)&&(N.__readFormat=_.format,N.__readType=_.type,N.__formatReadable=A.textureFormatReadable(_.format),N.__typeReadable=A.textureTypeReadable(_.type)),N}this.readRenderTargetPixels=function(_,N,q,V,G,ge,be,me=0){if(!(_&&_.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=W.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&be!==void 0&&(Me=Me[be]),Me){y.bindFramebuffer(O.FRAMEBUFFER,Me);try{let Ae=_.textures[me],Xe=Ae.format,Ye=Ae.type;_.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Te=Fh(Ae);if(Te.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-V&&q>=0&&q<=_.height-G&&O.readPixels(N,q,V,G,ue.convert(Xe),ue.convert(Ye),ge)}finally{let Ae=ne!==null?W.get(ne).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(_,N,q,V,G,ge,be,me=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=W.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&be!==void 0&&(Me=Me[be]),Me)if(N>=0&&N<=_.width-V&&q>=0&&q<=_.height-G){y.bindFramebuffer(O.FRAMEBUFFER,Me);let Ae=_.textures[me],Xe=Ae.format,Ye=Ae.type;_.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Te=Fh(Ae);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(N,q,V,G,ue.convert(Xe),ue.convert(Ye),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let At=ne!==null?W.get(ne).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,At);let yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Yu(O,yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(rt),O.deleteSync(yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,N=null,q=0){let V=Math.pow(2,-q),G=Math.floor(_.image.width*V),ge=Math.floor(_.image.height*V),be=N!==null?N.x:0,me=N!==null?N.y:0;Z.setTexture2D(_,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,be,me,G,ge),y.unbindTexture()},this.copyTextureToTexture=function(_,N,q=null,V=null,G=0,ge=0){let be,me,Me,Ae,Xe,Ye,Te,rt,At,yt=_.isCompressedTexture?_.mipmaps[ge]:_.image;if(q!==null)be=q.max.x-q.min.x,me=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Ae=q.min.x,Xe=q.min.y,Ye=q.isBox3?q.min.z:0;else{let Et=Math.pow(2,-G);be=Math.floor(yt.width*Et),me=Math.floor(yt.height*Et),_.isDataArrayTexture?Me=yt.depth:_.isData3DTexture?Me=Math.floor(yt.depth*Et):Me=1,Ae=0,Xe=0,Ye=0}V!==null?(Te=V.x,rt=V.y,At=V.z):(Te=0,rt=0,At=0);let ft=ue.convert(N.format),Wt=ue.convert(N.type),ve;N.isData3DTexture?(Z.setTexture3D(N,0),ve=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),ve=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),ve=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let jt=y.getParameter(O.UNPACK_ROW_LENGTH),Qe=y.getParameter(O.UNPACK_IMAGE_HEIGHT),vn=y.getParameter(O.UNPACK_SKIP_PIXELS),Gn=y.getParameter(O.UNPACK_SKIP_ROWS),fi=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),y.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);let ts=_.isDataArrayTexture||_.isData3DTexture,ht=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let Et=W.get(_),pi=W.get(N),mt=W.get(Et.__renderTarget),mi=W.get(pi.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,mt.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let ns=0;ns<Me;ns++)ts&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(_).__webglTexture,G,Ye+ns),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(N).__webglTexture,ge,At+ns)),O.blitFramebuffer(Ae,Xe,be,me,Te,rt,be,me,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||_.isRenderTargetTexture||W.has(_)){let Et=W.get(_),pi=W.get(N);y.bindFramebuffer(O.READ_FRAMEBUFFER,D),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let mt=0;mt<Me;mt++)ts?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.__webglTexture,G,Ye+mt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Et.__webglTexture,G),ht?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pi.__webglTexture,ge,At+mt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pi.__webglTexture,ge),G!==0?O.blitFramebuffer(Ae,Xe,be,me,Te,rt,be,me,O.COLOR_BUFFER_BIT,O.NEAREST):ht?O.copyTexSubImage3D(ve,ge,Te,rt,At+mt,Ae,Xe,be,me):O.copyTexSubImage2D(ve,ge,Te,rt,Ae,Xe,be,me);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ht?_.isDataTexture||_.isData3DTexture?O.texSubImage3D(ve,ge,Te,rt,At,be,me,Me,ft,Wt,yt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(ve,ge,Te,rt,At,be,me,Me,ft,yt.data):O.texSubImage3D(ve,ge,Te,rt,At,be,me,Me,ft,Wt,yt):_.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Te,rt,be,me,ft,Wt,yt.data):_.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Te,rt,yt.width,yt.height,ft,yt.data):O.texSubImage2D(O.TEXTURE_2D,ge,Te,rt,be,me,ft,Wt,yt);y.pixelStorei(O.UNPACK_ROW_LENGTH,jt),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qe),y.pixelStorei(O.UNPACK_SKIP_PIXELS,vn),y.pixelStorei(O.UNPACK_SKIP_ROWS,Gn),y.pixelStorei(O.UNPACK_SKIP_IMAGES,fi),ge===0&&N.generateMipmaps&&O.generateMipmap(ve),y.unbindTexture()},this.initRenderTarget=function(_){W.get(_).__webglFramebuffer===void 0&&Z.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Z.setTextureCube(_,0):_.isData3DTexture?Z.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Z.setTexture2DArray(_,0):Z.setTexture2D(_,0),y.unbindTexture()},this.resetState=function(){Y=0,F=0,ne=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Zy=[{name:"Morning Arrival",len:30,kind:"arrive",tint:[255,200,140,.16]},{name:"Period 1",len:60,kind:"class",swap:!1,tint:[255,255,255,0]},{name:"Lunch",len:30,kind:"lunch",tint:[255,236,170,.12]},{name:"Period 2",len:60,kind:"class",swap:!0,tint:[255,235,215,.07]},{name:"Dismissal",len:30,kind:"dismiss",tint:[255,130,80,.24]}],Hn=(()=>{let n=0;return Zy.map(e=>{let t={...e,start:n};return n+=e.len,t})})(),lh=Hn.reduce((n,e)=>n+e.len,0),Jy=7*60+30,Rd=n=>{for(let e=Hn.length-1;e>=0;e--)if(n>=Hn[e].start)return e;return 0},El=n=>{let e=Jy+Math.floor(n),t=Math.floor(e/60)%24,i=e%60;return`${(t+11)%12+1}:${String(i).padStart(2,"0")} ${t<12?"AM":"PM"}`},Ni=(n,e)=>n+Math.random()*(e-n),ch=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n};function Vs(n,e,t,i,s){let r=n.length,a=n[0].length,l=(f,g)=>f>=0&&g>=0&&f<a&&g<r&&n[g][f]===".";if(e===i&&t===s||!l(i,s))return[];let c=(f,g)=>g*a+f,o=new Map([[c(e,t),0]]),u=new Map,d=[{x:e,y:t,f:0}],h=new Set;for(;d.length;){let f=0;for(let m=1;m<d.length;m++)d[m].f<d[f].f&&(f=m);let g=d.splice(f,1)[0],S=c(g.x,g.y);if(!h.has(S)){if(h.add(S),g.x===i&&g.y===s){let m=[],p=S;for(;p!==c(e,t);)m.push({x:p%a,y:Math.floor(p/a)}),p=u.get(p);return m.reverse()}for(let[m,p]of[[1,0],[-1,0],[0,1],[0,-1]]){let M=g.x+m,C=g.y+p;if(!l(M,C))continue;let v=c(M,C),T=o.get(S)+1;o.has(v)&&o.get(v)<=T||(o.set(v,T),u.set(v,S),d.push({x:M,y:C,f:T+Math.abs(M-i)+Math.abs(C-s)}))}}}return[]}var qr="#6b4a4f";function nn(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function xe(n,e,t=1.4){n.fillStyle=e,n.fill(),t&&(n.lineWidth=t,n.strokeStyle=qr,n.lineJoin="round",n.stroke())}function wn(n,e,t,i,s,r,a){n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.strokeStyle=qr,n.lineWidth=r+2.2,n.stroke(),n.strokeStyle=a,n.lineWidth=r,n.stroke()}var Ky=["#5b6b8c","#7a6a58","#4f5d75","#8a5f6a","#5f7a68"];function Tt(n,e){if(!n||n[0]!=="#"||n.length<7)return n;let t=parseInt(n.slice(1,7),16),i=e>0?0:255,s=Math.abs(e);return"#"+[t>>16&255,t>>8&255,t&255].map(r=>Math.round(r+(i-r)*s).toString(16).padStart(2,"0")).join("")}function jy(n,e,t,i,s){n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.7,t-i*1.2,e,t-i*.35),n.bezierCurveTo(e+i*.7,t-i*1.2,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()}function Qy(n,e,t,i,s){n.fillStyle=s,n.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,l=r&1?i*.45:i;n.lineTo(e+Math.cos(a)*l,t+Math.sin(a)*l)}n.closePath(),n.fill()}function Gs(n,e,t,i,s){n.save(),n.translate(Math.round(e*2)/2,Math.round(t*2)/2);let r=i.moving,a=r?Math.sin(i.walk):0,l=i.dir,c=l==="left"||l==="right",o=l==="left"?-1:1,u=l==="up",d=i.sitting,h=i.age==="adult",f=i.top,g=i.bottom||"pants",S=(i.headSize||1)*1,m=(i.build==="slim"?.9:i.build==="sturdy"?1.12:1)*(h?1.12:1),p=h?1.28:1;n.fillStyle="rgba(70,45,55,.24)",n.beginPath(),n.ellipse(0,1,10*m,3.6,0,0,7),n.fill(),d&&n.translate(0,8),n.translate(0,r?-Math.abs(Math.cos(i.walk))*1.8:Math.sin(s*2+i.id)*.35),h&&n.scale(1,p);let M=i.pants||Ky[i.id%5],C=i.pack||["#f28f7e","#4f91c7","#eab94e","#88b89a","#b8a8da"][i.id%5],v=i.shoes||"#fbf6ee",T=i.packStyle||"pack",E=f==="tank"?i.skin:i.shirt,R=i.shirt2||"#fff6ea";d||[-1,1].forEach(B=>{let j=r?Math.max(0,B*a)*2.6:0,se=c?0:B*3.2*m,Be=c?B*a*4.2:B*3.2*m;g==="shorts"?(wn(n,se,-9,Be,-2-j,3.4,i.skin),wn(n,se,-9,se+(Be-se)*.38,-6-j*.38,3.9,M)):g==="skirt"?wn(n,se,-9,Be,-2-j,3.2,i.skin):wn(n,se,-9,Be,-2-j,g==="joggers"?4.2:3.6,M);let Pe=Be+(c?o*1.2:0),Ge=-.6-j;i.shoeStyle==="boot"?(nn(n,Pe-2.6,Ge-3.6,5.2,4.6,1.6),xe(n,v,1.1),n.beginPath(),n.ellipse(Pe+(c?o*1.2:0),Ge+.6,3.6,1.7,0,0,7),xe(n,Tt(v,.25),1.1)):i.shoeStyle==="sandal"?(n.beginPath(),n.ellipse(Pe,Ge,3.4,1.7,0,0,7),xe(n,i.skin,1.1),n.strokeStyle=v,n.lineWidth=1.2,n.beginPath(),n.moveTo(Pe-2.2,Ge-.3),n.lineTo(Pe+2.2,Ge-.3),n.stroke()):(n.beginPath(),n.ellipse(Pe,Ge,3.4,1.9,0,0,7),xe(n,v,1.1),i.shoeStyle==="sneaker"&&(n.fillStyle="rgba(255,255,255,.55)",n.fillRect(Pe-3,Ge+.5,6,.7)))}),g==="skirt"&&!d&&(n.beginPath(),n.moveTo(-6.8*m,-12),n.lineTo(6.8*m,-12),n.lineTo(9.6*m,-5.6),n.lineTo(-9.6*m,-5.6),n.closePath(),xe(n,M,1.3),n.fillStyle="rgba(255,255,255,.22)",n.fillRect(-8.2*m,-7.4,16.4*m,1));let x=(B,j)=>{let se=c?B*a*3.5:B*8.2,Be=-9.5-(r?-B*a*1.5:0),Pe=i.arms&&(B>0?i.arms.R:i.arms.L);Pe&&(se=c?o*Math.abs(Pe[0])*.9:Pe[0],Be=Pe[1]),wn(n,c?0:B*6.6*m,-17,se,Be,3.2,E),n.beginPath(),n.arc(se,Be+.6,1.9,0,7),xe(n,i.skin,1)};c&&x(-o*-1,!1),c&&T==="pack"?(nn(n,-o*9.5,-19,7,10,3),xe(n,C,1.2)):c&&T==="mini"&&(nn(n,-o*8,-16,5,6.5,2.4),xe(n,C,1.1)),f==="hoodie"&&(n.beginPath(),n.ellipse(0,-19.6,6.4*m,3.2,0,0,7),xe(n,Tt(i.shirt,.14),1.2));let w=()=>{f==="dress"?(n.beginPath(),n.moveTo(-6.4*m,-19.5),n.quadraticCurveTo(0,-21,6.4*m,-19.5),n.lineTo(7*m,-13),n.lineTo(9.6*m,-6),n.quadraticCurveTo(0,-4.4,-9.6*m,-6),n.lineTo(-7*m,-13),n.closePath()):f==="tank"?nn(n,-5.6*m,-19.5,11.2*m,11.5,4):nn(n,-6.6*m,-19.5,13.2*m,11.5,4.5)},P=f==="overalls"||f==="vest"?R:i.shirt;if(w(),xe(n,P,1.4),i.pattern&&i.pattern!=="solid"&&f!=="overalls"&&f!=="vest"){let B=i.shirt2||Tt(i.shirt,.3);if(n.save(),w(),n.clip(),i.pattern==="stripes")for(let j=-20;j<-4;j+=3.6)n.fillStyle=B,n.fillRect(-11,j,22,1.7);else if(i.pattern==="dots")for(let j=-19;j<-4;j+=3.2)for(let se=-9+(j*3&1)*1.6;se<10;se+=3.2)n.fillStyle=B,n.beginPath(),n.arc(se,j,.85,0,7),n.fill();else if(i.pattern==="plaid"){n.strokeStyle=B,n.globalAlpha=.75,n.lineWidth=1;for(let j=-19;j<-4;j+=3.6)n.beginPath(),n.moveTo(-11,j),n.lineTo(11,j),n.stroke();for(let j=-9;j<10;j+=3.6)n.beginPath(),n.moveTo(j,-21),n.lineTo(j,-4),n.stroke();n.globalAlpha=1}else if(i.pattern==="hearts")for(let j=-17;j<-5;j+=4.2)for(let se=-7+(j*2&1)*2;se<8;se+=4.4)jy(n,se,j,1.1,B);else if(i.pattern==="stars")for(let j=-17;j<-5;j+=4.2)for(let se=-7+(j*2&1)*2;se<8;se+=4.4)Qy(n,se,j,1.4,B);n.restore(),w(),n.lineWidth=1.4,n.strokeStyle=qr,n.stroke()}if(n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.ellipse(-2.4,-16.5,2.4,3.4,0,0,7),n.fill(),f)u||(f==="hoodie"?(nn(n,-3.8,-14,7.6,3.6,1.6),n.lineWidth=1,n.strokeStyle=Tt(i.shirt,.3),n.stroke(),wn(n,-1.6,-18.6,-1.6,-14.8,.8,R),wn(n,1.6,-18.6,1.6,-14.8,.8,R)):f==="sweater"?(n.fillStyle=Tt(i.shirt,-.28),n.fillRect(-6.4*m,-10.6,12.8*m,2),n.beginPath(),n.ellipse(0,-19.3,3.6,1.5,0,0,7),xe(n,Tt(i.shirt,-.28),1)):f==="jersey"?(n.fillStyle=i.shirt2||"#fff",n.font="800 6.4px 'Trebuchet MS',sans-serif",n.textAlign="center",n.fillText(String(i.num??i.id%90+1),0,-11.8),n.fillRect(-6.4*m,-19.4,12.8*m,.9)):f==="blazer"?(n.beginPath(),n.moveTo(-3.4,-19.4),n.lineTo(0,-12.4),n.lineTo(3.4,-19.4),n.closePath(),xe(n,R,.9),n.beginPath(),n.moveTo(-3.4,-19.4),n.lineTo(-.4,-11.8),n.lineTo(-5.6,-11),n.lineTo(-6.4,-17.6),n.closePath(),xe(n,Tt(i.shirt,.16),.9),n.beginPath(),n.moveTo(3.4,-19.4),n.lineTo(.4,-11.8),n.lineTo(5.6,-11),n.lineTo(6.4,-17.6),n.closePath(),xe(n,Tt(i.shirt,.16),.9),n.fillStyle="#EAB94E",n.beginPath(),n.arc(0,-10.4,.7,0,7),n.fill()):f==="overalls"?(nn(n,-4,-16.4,8,6.8,1.6),xe(n,i.shirt,1.1),wn(n,-3.4,-19.4,-3.2,-16.2,1.2,i.shirt),wn(n,3.4,-19.4,3.2,-16.2,1.2,i.shirt),n.fillStyle="#EAB94E",[-3.2,3.2].forEach(B=>{n.beginPath(),n.arc(B,-16.2,.7,0,7),n.fill()}),nn(n,-2,-14.4,4,2.4,.8),n.lineWidth=.8,n.strokeStyle=Tt(i.shirt,.3),n.stroke()):f==="vest"?(n.beginPath(),n.moveTo(-6.6*m,-19.4),n.lineTo(-1.2,-19.4),n.lineTo(-.6,-9.4),n.lineTo(-6.2*m,-9.4),n.closePath(),xe(n,i.shirt,1),n.beginPath(),n.moveTo(6.6*m,-19.4),n.lineTo(1.2,-19.4),n.lineTo(.6,-9.4),n.lineTo(6.2*m,-9.4),n.closePath(),xe(n,i.shirt,1)):f==="tee"?(n.beginPath(),n.ellipse(0,-19.3,3.2,1.3,0,0,7),xe(n,Tt(i.shirt,.12),.9)):f==="dress"&&(n.fillStyle=Tt(i.shirt,-.35),n.fillRect(-6.4*m,-13.2,13.2*m,1.2)));else{let B=i.id%3;B===0?(n.fillStyle="rgba(255,255,255,.45)",n.fillRect(-6,-15.4,12,2.4)):B===2&&!u&&(n.fillStyle="#fff",n.beginPath(),n.moveTo(-3,-19.4),n.lineTo(0,-16),n.lineTo(3,-19.4),n.closePath(),xe(n,"#fff",.9))}u?T!=="none"&&(nn(n,-6,-19,12,10.5,4),xe(n,C,1.3),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(-4,-17.5,8,2)):!c&&T==="pack"?(wn(n,-3.6,-19.2,-3.6,-11,1.5,C),wn(n,3.6,-19.2,3.6,-11,1.5,C)):!c&&T==="messenger"&&(wn(n,-5.6,-19.2,5.2,-9.8,1.5,C),nn(n,3.2,-12.6,5.6,5,1.6),xe(n,C,1.1)),i.scarf&&(n.beginPath(),n.ellipse(0,-19.4,6.6*m,2.4,0,0,7),xe(n,i.scarf,1.2),!u&&!c&&(nn(n,1.6,-19,3.2,8,1.4),xe(n,i.scarf,1.1),n.fillStyle="rgba(255,255,255,.4)",n.fillRect(1.9,-15.6,2.6,.9))),i.tag&&(n.beginPath(),n.moveTo(-6,-19.5),n.lineTo(-1,-8.5),n.lineTo(-6.6,-9),n.closePath(),n.fillStyle="#c4463c",n.fill(),n.beginPath(),n.moveTo(6,-19.5),n.lineTo(1,-8.5),n.lineTo(6.6,-9),n.closePath(),n.fill()),i.badge&&!u&&!c&&(n.beginPath(),n.arc(-3.8,-15.4,1.5,0,7),xe(n,i.badge,.9)),c?x(o*1,!0):(x(-1),x(1)),h&&n.scale(1,1/p),n.save(),h&&(n.translate(0,-8.4+0),n.scale(.82,.82)),n.translate((i.turn||0)*1.7,0);let b=-28,L=i.hair,k=i.style,D=i.hair2||Tt(L,-.28),H=(h?8.1:8.9)*S,Y=(h?9.2:8.3)*S;if((k==="long"||k==="bob")&&(nn(n,-9.8,b-6,19.6,k==="long"?20:14,7),xe(n,L,1.3)),k==="wavy"&&(nn(n,-10.2,b-6,20.4,18,7),xe(n,L,1.3),[-7,0,7].forEach(B=>{n.beginPath(),n.arc(B,b+12,3.6,0,7),xe(n,L,1.1)})),k==="afro"&&(n.beginPath(),n.ellipse(c?-o*1.2:0,b-3,13.2,12.6,0,0,7),xe(n,L,1.4)),k==="bun"&&(n.beginPath(),n.arc(c?-o*3:0,b-9.5,4.4,0,7),xe(n,L,1.3)),k==="topknot"&&(n.beginPath(),n.arc(c?-o*2:0,b-12,3.4,0,7),xe(n,L,1.3)),k==="twinbuns"&&(c?[-o*3]:[-7.6,7.6]).forEach(B=>{n.beginPath(),n.arc(B,b-10.4,3.9,0,7),xe(n,L,1.3)}),k==="pony"&&(n.save(),n.translate(c?-o*9:u?0:9,c?b+2:u?b+8:b+1),n.rotate(c||u?0:-.5),n.beginPath(),n.ellipse(0,4,3.2,6.5,0,0,7),xe(n,L,1.3),n.restore()),k==="pigtails"&&(c?[-o*10]:[-10.6,10.6]).forEach((B,j)=>{n.save(),n.translate(B,b+3),n.rotate(c?0:j?-.4:.4),n.beginPath(),n.ellipse(0,5,2.9,6.6,0,0,7),xe(n,L,1.3),n.restore()}),k==="braids"&&(c?[-o*8.4]:[-9.4,9.4]).forEach(B=>{for(let j=0;j<4;j++)n.beginPath(),n.ellipse(B,b+4+j*3.7,2.2,2.1,0,0,7),xe(n,j&1?D:L,1.1)}),k==="curly"&&[[-8,b-2],[8,b-2],[-6,b-8],[6,b-8],[0,b-10]].forEach(([B,j])=>{n.beginPath(),n.arc(B,j,4.6,0,7),xe(n,L,1.2)}),c||[-1,1].forEach(B=>{n.beginPath(),n.arc(B*8.7,b+1,2,0,7),xe(n,i.skin,1)}),n.beginPath(),n.ellipse(c?o*.6:0,b,H,Y,0,0,7),xe(n,i.skin,1.5),n.fillStyle="rgba(120,70,60,.13)",n.beginPath(),n.ellipse(3,b+3,7.5,6,0,0,7),n.fill(),!u){let B=(s*.9+i.id*1.7)%4<.13,j=c?[o*4.4]:[-3.5,3.5],se=i.eyeShape||"round",Be=i.eyeColor,Pe=i.brow||"soft",Ge=i.browColor||i.hair;if(j.forEach((re,ze)=>{if(B||se==="happy")n.strokeStyle="#3a2a30",n.lineWidth=1.1,n.beginPath(),se==="happy"&&!B?n.arc(re,b+.6,1.7,Math.PI*1.1,Math.PI*1.9):(n.moveTo(re-1.6,b),n.lineTo(re+1.6,b)),n.stroke();else{let it=h?.74:1,Ue=(se==="wide"?2.1:se==="oval"?1.4:1.7)*it,Ze=(se==="wide"||se==="oval"?2.7:2.3)*(h?.82:1);if(n.fillStyle=Be||"#3a2a30",n.beginPath(),n.ellipse(re,b,Ue,Ze,0,0,7),n.fill(),Be&&(n.fillStyle="#2a1d22",n.beginPath(),n.ellipse(re,b+.2,Ue*.5,Ze*.55,0,0,7),n.fill()),n.fillStyle="#fff",n.beginPath(),n.arc(re-.5,b-.9,se==="wide"?.9:.7,0,7),n.fill(),se==="sleepy"&&(n.fillStyle=i.skin,n.beginPath(),n.ellipse(re,b-1.1,Ue+.5,Ze*.62,0,Math.PI,2*Math.PI),n.fill(),n.strokeStyle="#3a2a30",n.lineWidth=.9,n.beginPath(),n.moveTo(re-Ue-.4,b-.6),n.lineTo(re+Ue+.4,b-.6),n.stroke()),se==="lash"){n.strokeStyle="#3a2a30",n.lineWidth=.8;let tt=c?o:ze?1:-1;n.beginPath(),n.moveTo(re+tt*Ue,b-1),n.lineTo(re+tt*(Ue+1.4),b-2.2),n.moveTo(re+tt*Ue,b-.1),n.lineTo(re+tt*(Ue+1.6),b-.6),n.stroke()}}if(Pe!=="none"){if(n.strokeStyle=Ge,n.lineCap="round",n.lineWidth=(Pe==="thick"?1.6:Pe==="thin"?.6:.9)+(h?.45:0),n.beginPath(),Pe==="arch")n.moveTo(re-2,b-3.2),n.quadraticCurveTo(re,b-5.2,re+2,b-3.6);else if(h){let it=c||ze?1:-1;n.moveTo(re-2.2*it,b-3.5),n.lineTo(re+2.2*it,b-4.3)}else n.moveTo(re-2,b-3.6),n.lineTo(re+2,b-3.9);n.stroke()}if(i.glasses){let it=i.glasses===!0?"round":i.glasses,Ue=i.glassColor||"#5b4048";n.strokeStyle=Ue,n.lineWidth=it==="sun"?1:.9,n.beginPath(),it==="square"?n.roundRect(re-3.1,b-2.6,6.2,5.2,1.2):it==="cat"?(n.ellipse(re,b,3.2,2.7,0,0,7),n.moveTo(re+(c?o:ze?1:-1)*3,b-1.6),n.lineTo(re+(c?o:ze?1:-1)*4.4,b-3.4)):it==="half"?n.arc(re,b,3.2,Math.PI,0):n.arc(re,b,3.2,0,7),it==="sun"&&(n.fillStyle="rgba(40,30,40,.82)",n.fill()),n.stroke()}}),i.glasses&&!c&&(n.strokeStyle=i.glassColor||"#5b4048",n.lineWidth=.9,n.beginPath(),n.moveTo(-.3,b-.5),n.lineTo(.3,b-.5),n.stroke()),(h?i.blush===!0:i.blush!==!1)&&(n.fillStyle=i.blushColor||(h?"rgba(255,110,125,.14)":"rgba(255,110,125,.38)"),(c?[o*6.4]:[-6,6]).forEach(re=>{n.beginPath(),n.ellipse(re,b+3.4,2.1,1.3,0,0,7),n.fill()})),i.freckles&&(n.fillStyle=Tt(i.skin,.32),(c?[[o*5.6,b+2.2],[o*6.8,b+3.2],[o*5.2,b+3.8]]:[[-5.6,b+2.4],[-4.2,b+3.4],[-6.4,b+3.8],[5.6,b+2.4],[4.2,b+3.4],[6.4,b+3.8]]).forEach(([re,ze])=>{n.beginPath(),n.arc(re,ze,.5,0,7),n.fill()})),i.mole&&(n.fillStyle="#4a2f2a",n.beginPath(),n.arc(c?o*6:4.4,b+5.2,.65,0,7),n.fill()),i.nose||h){n.strokeStyle=Tt(i.skin,.3),n.lineWidth=.8,n.beginPath();let re=c?o*6.4:0;n.arc(re,b+2.6,.9,.1*Math.PI,.9*Math.PI),n.stroke()}let $=c?o*3.6:0,Q=b+4.7,_e=i.mouthStyle||"smile",Ne=i.lip||"#8a4650";i.mouth?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse($,b+4.8,1.7,.7+i.mouth*1.5,0,0,7),n.fill()):_e==="grin"?(n.beginPath(),n.moveTo($-2.4,Q-.9),n.quadraticCurveTo($,Q+2.8,$+2.4,Q-.9),n.closePath(),n.fillStyle="#fff",n.fill(),n.strokeStyle=Ne,n.lineWidth=.9,n.stroke()):_e==="smirk"?(n.strokeStyle=Ne,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo($-1.8,Q),n.quadraticCurveTo($+.4,Q+1,$+2.2,Q-.8),n.stroke()):_e==="flat"?(n.strokeStyle=Ne,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo($-1.5,Q),n.lineTo($+1.5,Q),n.stroke()):_e==="o"?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse($,Q+.2,1,1.2,0,0,7),n.fill()):_e==="cat"?(n.strokeStyle=Ne,n.lineWidth=.9,n.lineCap="round",n.beginPath(),n.arc($-1,Q-.4,1.1,.1*Math.PI,.9*Math.PI),n.arc($+1,Q-.4,1.1,.1*Math.PI,.9*Math.PI),n.stroke()):(n.strokeStyle=Ne,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.arc($,b+(h?5.4:4.6),h?1.35:1.7,.15*Math.PI,.85*Math.PI),n.stroke())}let F=c?-o*1.6:0,ne=()=>{let B=c?o:1,j=c?-1.6:0;c&&(n.save(),n.scale(B,1)),n.beginPath(),c?(n.moveTo(-9.2+j,b+5.4),n.lineTo(-9.3+j,b+.5),n.bezierCurveTo(-11+j,b-14,11+j,b-14,9.3+j,b+.5),n.quadraticCurveTo(7+j,b-5.4,4+j,b-4.6),n.lineTo(-2.6+j,b-1.6),n.lineTo(-5.4+j,b+3.6)):(n.moveTo(-9.3,b+.5),n.bezierCurveTo(-11,b-14,11,b-14,9.3,b+.5),n.quadraticCurveTo(6,b-3.4,2,b-4.4),n.quadraticCurveTo(-3,b-6,-9.3,b+.5)),n.closePath(),c&&n.restore()};if(u)n.beginPath(),n.ellipse(0,b-.4,9.4,8.9,0,0,7),xe(n,L,1.4),n.fillStyle="rgba(255,255,255,.2)",n.beginPath(),n.ellipse(-2.5,b-4,3.5,2,0,0,7),n.fill();else if(k==="buzz")n.beginPath(),n.moveTo(-8.8+F,b-1.2),n.bezierCurveTo(-10+F,b-11,10+F,b-11,8.8+F,b-1.2),n.quadraticCurveTo(0,b-4.6,-8.8+F,b-1.2),n.closePath(),xe(n,L,1.3);else if(k==="undercut")ne(),xe(n,Tt(L,.12),1.3),n.beginPath(),n.moveTo(-7+F,b-4),n.bezierCurveTo(-8+F,b-17,9+F,b-16,7.4+F,b-4),n.quadraticCurveTo(0,b-6,-7+F,b-4),n.closePath(),xe(n,L,1.3);else if(k==="spiky"||k==="messy"){ne(),xe(n,L,1.4);let B=k==="spiky"?6:4;for(let j=0;j<B;j++){let se=-Math.PI*(.12+.76*j/(B-1)),Be=Math.cos(se+Math.PI)*7.6+F,Pe=b-3+Math.sin(se)*5.4,Ge=k==="spiky"?6.4:4.4+j%2*1.6;n.beginPath(),n.moveTo(Be-2.1,Pe+1.4),n.lineTo(Be+(j-B/2)*.8,Pe-Ge),n.lineTo(Be+2.1,Pe+1.4),n.closePath(),xe(n,L,1.2)}ne(),xe(n,L,1.2)}else k==="sidebang"||k==="pixie"?(ne(),xe(n,L,1.4),n.beginPath(),n.moveTo(-9+F,b-6),n.quadraticCurveTo(2+F,b-12,9.4+F,b-1.4),n.quadraticCurveTo(k==="pixie"?4+F:-1+F,b-3.6,-9+F,b-6),n.closePath(),xe(n,L,1.2),k==="pixie"&&!c&&[-1,1].forEach(B=>{n.beginPath(),n.moveTo(B*9.2,b-1),n.lineTo(B*10.4,b+5),n.lineTo(B*7.6,b+1),n.closePath(),xe(n,L,1)})):k==="curtains"?(ne(),xe(n,L,1.4),c||(n.strokeStyle=Tt(L,.35),n.lineWidth=1,n.beginPath(),n.moveTo(0,b-9.4),n.quadraticCurveTo(-1.2,b-6,-.2,b-3.6),n.stroke())):k==="afro"?(n.beginPath(),n.moveTo(-9+F,b-1),n.bezierCurveTo(-10+F,b-13,10+F,b-13,9+F,b-1),n.quadraticCurveTo(0+F,b-5.4,-9+F,b-1),n.closePath(),xe(n,L,1.3)):(ne(),xe(n,L,1.4));!u&&i.hair2&&(n.strokeStyle=i.hair2,n.lineWidth=1.3,n.lineCap="round",n.beginPath(),n.moveTo(-5+F,b-6.2),n.quadraticCurveTo(-3+F,b-8.6,0+F,b-9),n.moveTo(1+F,b-9),n.quadraticCurveTo(4+F,b-8,6+F,b-5.4),n.stroke()),u||(n.fillStyle="rgba(255,255,255,.22)",n.beginPath(),n.ellipse(-3+F,b-6.4,3.4,1.5,-.3,0,7),n.fill()),(k==="long"||k==="wavy")&&!u&&!c&&[-1,1].forEach(B=>{n.beginPath(),n.ellipse(B*9,b+6,2.3,7,0,0,7),xe(n,L,1.1)}),c&&!u&&(n.beginPath(),n.ellipse(-o*1.2+o*.6,b+2.2,1.5,2.2,0,0,7),xe(n,i.skin,1),n.fillStyle="rgba(160,90,80,.25)",n.beginPath(),n.ellipse(-o*1.2+o*.6,b+2.4,.6,1.1,0,0,7),n.fill(),i.glasses&&(n.strokeStyle=i.glassColor||"#5b4048",n.lineWidth=.9,n.beginPath(),n.moveTo(o*1.1,b-.6),n.lineTo(-o*.6,b+.9),n.stroke()));let X=i.hatColor||"#e07a66",K=i.hat;if(i.earrings&&!u&&(c?[-o*.6]:[-9,9]).forEach(B=>{n.beginPath(),n.arc(B,b+4.6,1.2,0,7),xe(n,i.earrings,.8)}),K==="cap")n.beginPath(),n.moveTo(-9.4+F,b-2.8),n.bezierCurveTo(-9.8+F,b-15,9.8+F,b-15,9.4+F,b-2.8),n.closePath(),xe(n,X,1.3),u||(n.beginPath(),c?n.ellipse(o*9.2+F,b-3,5.2,1.7,0,0,7):n.ellipse(0,b-2.6,7.4,2,0,0,7),xe(n,Tt(X,.18),1.1)),n.beginPath(),n.arc(0,b-12.2,1,0,7),xe(n,Tt(X,.2),.8);else if(K==="beanie")n.beginPath(),n.moveTo(-9.8+F,b-2.4),n.bezierCurveTo(-10.4+F,b-17,10.4+F,b-17,9.8+F,b-2.4),n.closePath(),xe(n,X,1.3),nn(n,-10+F,b-4.6,20,3.8,1.6),xe(n,Tt(X,-.25),1.1),n.beginPath(),n.arc(F,b-14,2.3,0,7),xe(n,Tt(X,-.35),1);else if(K==="bucket")n.beginPath(),n.moveTo(-8+F,b-4),n.lineTo(-7+F,b-11.4),n.lineTo(7+F,b-11.4),n.lineTo(8+F,b-4),n.closePath(),xe(n,X,1.3),n.beginPath(),n.ellipse(F,b-4.4,12.2,2.8,0,0,7),xe(n,Tt(X,.1),1.2);else if(K==="beret")n.beginPath(),n.ellipse(2+F,b-8.6,9,3.6,-.12,0,7),xe(n,X,1.3),n.beginPath(),n.arc(3+F,b-12.2,1,0,7),xe(n,Tt(X,.25),.8);else if(K==="crown")n.beginPath(),n.moveTo(-6+F,b-8),n.lineTo(-6.6+F,b-14),n.lineTo(-3+F,b-11),n.lineTo(0+F,b-15.4),n.lineTo(3+F,b-11),n.lineTo(6.6+F,b-14),n.lineTo(6+F,b-8),n.closePath(),xe(n,i.hatColor||"#EAB94E",1.2),[-3,0,3].forEach(B=>{n.beginPath(),n.arc(B+F,b-9.4,.7,0,7),n.fillStyle="#e07a66",n.fill()});else if(K==="catears")[-1,1].forEach(B=>{n.beginPath(),n.moveTo(B*2.6+F,b-8.4),n.lineTo(B*6.2+F,b-15.6),n.lineTo(B*9+F,b-6.2),n.closePath(),xe(n,L,1.2),n.beginPath(),n.moveTo(B*4.2+F,b-8.8),n.lineTo(B*6.2+F,b-12.8),n.lineTo(B*7.6+F,b-7.6),n.closePath(),n.fillStyle="#f0a6b5",n.fill()});else if(K==="headphones")n.strokeStyle=qr,n.lineWidth=3.6,n.beginPath(),n.arc(F,b-.5,10.4,Math.PI*1.06,Math.PI*1.94),n.stroke(),n.strokeStyle=X,n.lineWidth=2,n.stroke(),u||(c?[o*9.2]:[-9.8,9.8]).forEach(B=>{nn(n,B-1.7,b-3,3.4,6.2,1.4),xe(n,X,1.1)});else if(K==="headband"&&!u)n.strokeStyle=qr,n.lineWidth=3.4,n.beginPath(),n.moveTo(-9+F,b-1.2),n.quadraticCurveTo(F,b-12,9+F,b-1.2),n.stroke(),n.strokeStyle=X,n.lineWidth=2,n.stroke();else if(K==="headband")n.strokeStyle=X,n.lineWidth=2,n.beginPath(),n.moveTo(-9,b-1.2),n.quadraticCurveTo(0,b-12,9,b-1.2),n.stroke();else if(K==="bow"){let B=c?-o*1.5:6.6,j=b-9.6;[-1,1].forEach(se=>{n.beginPath(),n.moveTo(B,j),n.lineTo(B+se*5.4,j-2.8),n.lineTo(B+se*5.4,j+2.8),n.closePath(),xe(n,X,1.1)}),n.beginPath(),n.arc(B,j,1.5,0,7),xe(n,Tt(X,.2),1)}else if(K==="flower"){let B=c?-o*2:-6,j=b-8.4;for(let se=0;se<5;se++){let Be=se*Math.PI*2/5;n.beginPath(),n.arc(B+Math.cos(Be)*2.3,j+Math.sin(Be)*2.3,1.8,0,7),xe(n,X,.9)}n.beginPath(),n.arc(B,j,1.3,0,7),xe(n,"#EAB94E",.8)}if(n.restore(),i.tag){let B=b-19+Math.sin(s*4)*1.5;n.beginPath(),n.moveTo(-5,B-5),n.lineTo(5,B-5),n.lineTo(0,B+1),n.closePath(),xe(n,"#f28f7e",1.3)}n.restore()}var ti={adult:1.2,hs:1,g68:.86,g35:.74,k2:.6},Yr=["down","up","left","right"],$r=160,Ws=240,Zr=5,Jr=4.6,hh=12;function Pd(n){let e=document.createElement("canvas");e.width=$r*Zr,e.height=Ws*Yr.length;let t=e.getContext("2d");return Yr.forEach((i,s)=>{for(let r=0;r<Zr;r++)t.save(),t.translate(r*$r+$r/2,s*Ws+Ws-hh),t.scale(Jr,Jr),t.shadowColor="rgba(52,34,46,.35)",t.shadowBlur=2.2,t.shadowOffsetX=.5,t.shadowOffsetY=1.2,Gs(t,0,0,{...n,dir:i,moving:r>0,walk:r*Math.PI/2,sitting:!1},0),t.restore()}),e}var Ld=["math","ela","science","history"];var Kr=[{subject:"math",rect:{x:5,y:5,w:16,h:12}},{subject:"ela",rect:{x:35,y:5,w:16,h:12}},{subject:"science",rect:{x:5,y:27,w:16,h:12}},{subject:"history",rect:{x:35,y:27,w:16,h:12}}],ni=Kr.map(n=>{let e=n.rect.y<20,t=n.rect.x+n.rect.w/2,i=e?n.rect.y+n.rect.h:n.rect.y;return{subject:n.subject,face:e?"S":"N",cx:t,cy:i,trigger:{x:t-1.2,y:e?i:i-.9,w:2.4,h:.9},approach:{x:t,y:e?i+1.6:i-1.6}}}),Fi={cx:28,cy:0,trigger:{x:26.8,y:.45,w:2.4,h:.95},approach:{x:28,y:2.4}},uh=[{rect:{x:6,y:0,w:19,h:.6},face:"S"},{rect:{x:31,y:0,w:19,h:.6},face:"S"},{rect:{x:6,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:32,y:44-.6,w:18,h:.6},face:"N"},{rect:{x:0,y:6,w:.6,h:32},face:"E"},{rect:{x:56-.6,y:6,w:.6,h:32},face:"W"},{rect:{x:6,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:36,y:5-.6,w:14,h:.6},face:"N"},{rect:{x:6,y:39,w:14,h:.6},face:"S"},{rect:{x:36,y:39,w:14,h:.6},face:"S"},{rect:{x:5-.6,y:6,w:.6,h:10},face:"W"},{rect:{x:5-.6,y:28,w:.6,h:10},face:"W"},{rect:{x:51,y:6,w:.6,h:10},face:"E"},{rect:{x:51,y:28,w:.6,h:10},face:"E"}],An={gap:{x0:24,x1:32},tile:{x:28,y:43}},Id=(n,e)=>n.flatMap(t=>e.map(i=>({kind:"table",x:t,y:i}))),dh=[{kind:"fountain",x:28,y:22},...[[23.5,7.5],[32.5,7.5],[23.5,36.5],[32.5,36.5],[7,19],[7,25],[49,19],[49,25],[23,14],[33,14],[23,30],[33,30]].map(([n,e])=>({kind:"tree",x:n,y:e})),...Id([10,14,18],[20,24]),...Id([38,42,46],[20,24]),...[[24.2,11],[31.8,11],[24.2,33],[31.8,33]].map(([n,e])=>({kind:"bench",x:n,y:e,rot:Math.PI/2})),{kind:"planter",x:25.2,y:18.2},{kind:"planter",x:30.8,y:18.2},{kind:"planter",x:25.2,y:25.8},{kind:"planter",x:30.8,y:25.8},...[[12,2.5],[20,2.5],[36,2.5],[44,2.5],[12,41.5],[44,41.5],[2.5,22],[53.5,22]].map(([n,e])=>({kind:"lamp",x:n,y:e}))],ex={tree:[1.2,1.2],bench:[.7,1.9],table:[1.9,1.9],fountain:[4.6,4.6],planter:[1.4,1.4],lamp:[.1,.1]};function tx(){let n=Kr.map(e=>({...e.rect}));for(let e of uh)n.push(e.rect);for(let e of dh){let[t,i]=ex[e.kind];e.kind!=="lamp"&&n.push({x:e.x-t/2,y:e.y-i/2,w:t,h:i})}return n}var Dd=tx(),Ji=(n,e,t,i=0)=>e>n.x-i&&e<n.x+n.w+i&&t>n.y-i&&t<n.y+n.h+i;function wl(n,e,t=.16){return n<.45||e<.45||n>56-.45?!0:e>44-.45?!(n>An.gap.x0&&n<An.gap.x1&&e<47):Dd.some(i=>Ji(i,n,e,t))}var ii=Array.from({length:44},(n,e)=>Array.from({length:56},(t,i)=>Dd.some(s=>Ji(s,i+.5,e+.5,.2))?"#":".").join("")),aS=ii.flatMap((n,e)=>n.split("").map((t,i)=>({c:t,x:i,y:e}))).filter(n=>n.c==="."&&n.x>=7&&n.x<=48&&n.y>=7&&n.y<=37&&!Kr.some(e=>Ji(e.rect,n.x+.5,n.y+.5,0))),oS=ii.flatMap((n,e)=>n.split("").map((t,i)=>({c:t,x:i,y:e}))).filter(n=>n.c==="."&&(n.x<4||n.x>51||n.y<4||n.y>39));var jr="#6d5a5f";var Lt=(n,e,t,i=!1)=>{let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");t(r,n,e);let a=new Wi(s);return a.colorSpace=Ft,a.anisotropy=8,i&&(a.wrapS=a.wrapT=Ms),a},dt=(n,e,t,i,s,r)=>{n.beginPath(),n.roundRect(e,t,i,s,r)},Qr=(n,e=3,t=jr)=>{n.lineWidth=e,n.strokeStyle=t,n.lineJoin="round",n.stroke()},et=(n,e,t=3)=>{n.fillStyle=e,n.fill(),t&&Qr(n,t)},mn=(n,e,t=0)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)},ea=(n,e,t,i,s,r=6)=>{n.save(),n.lineWidth=r,n.strokeStyle="rgba(255,255,255,.5)",n.beginPath(),n.moveTo(e+r,t+s-r),n.lineTo(e+r,t+r),n.lineTo(e+i-r,t+r),n.stroke(),n.strokeStyle="rgba(70,40,50,.22)",n.beginPath(),n.moveTo(e+i-r,t+r),n.lineTo(e+i-r,t+s-r),n.lineTo(e+r,t+s-r),n.stroke(),n.restore()},Nd=()=>Lt(256,256,n=>{for(let e=0;e<2;e++)for(let t=0;t<2;t++){let i=t*128,s=e*128;n.fillStyle=t+e&1?"#d4ebf5":"#e3f3f9",n.fillRect(i,s,128,128);let r=n.createLinearGradient(i,s,i+128,s+128);r.addColorStop(0,"rgba(255,255,255,.28)"),r.addColorStop(1,"rgba(60,90,110,.10)"),n.fillStyle=r,n.fillRect(i,s,128,128);for(let a=0;a<26;a++)n.fillStyle=a&1?"rgba(255,255,255,.55)":"rgba(80,110,130,.18)",n.fillRect(i+mn(t,e,a)*124,s+mn(e,t,a+40)*124,2.4,2.4)}n.strokeStyle="rgba(90,120,140,.45)",n.lineWidth=3,n.strokeRect(1.5,1.5,253,253),n.beginPath(),n.moveTo(128,0),n.lineTo(128,256),n.moveTo(0,128),n.lineTo(256,128),n.stroke()},!0),Fd=()=>Lt(256,256,n=>{n.fillStyle="#9fd0e8",n.fillRect(0,0,256,256);for(let e=0;e<220;e++)n.fillStyle=e&1?"rgba(255,255,255,.3)":"rgba(50,108,158,.14)",n.fillRect(mn(e,1)*256,mn(e,2)*256,3,3);for(let[e,t,i]of[[0,18,"#EAB94E"],[22,8,"#F28F7E"],[226,8,"#F28F7E"],[238,18,"#EAB94E"]])n.fillStyle=i,n.fillRect(e,0,t,256);n.fillStyle="rgba(255,255,255,.55)";for(let e=0;e<2;e++)n.beginPath(),n.moveTo(128,e*128+16),n.lineTo(160,e*128+64),n.lineTo(128,e*128+112),n.lineTo(96,e*128+64),n.closePath(),n.fill()},!0),ta=()=>Lt(512,540,(n,e,t)=>{n.fillStyle="#F4EBDB",n.fillRect(0,0,e,t);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#FBF1DD"),i.addColorStop(1,"#EAF1E8"),n.fillStyle=i,n.fillRect(0,60,e,300);for(let r=0;r<e;r+=32)n.fillStyle="rgba(255,255,255,.55)",n.fillRect(r,60,14,300),n.fillStyle="rgba(110,120,110,.10)",n.fillRect(r+14,60,3,300);n.fillStyle="#FFF9F0",n.fillRect(0,0,e,40);let s=["#F28F7E","#EAB94E","#8FC9E8","#B8A8DA"];for(let r=0;r<8;r++)n.beginPath(),n.arc(32+r*64,42,30,0,Math.PI),et(n,s[r%4],3);n.fillStyle="#EAB94E",n.fillRect(0,340,e,22),n.fillStyle="rgba(255,255,255,.45)",n.fillRect(0,340,e,5),n.fillStyle="#A9CDB8",n.fillRect(0,362,e,150);for(let r=0;r<2;r++)dt(n,24+r*256,384,208,104,8),et(n,"#98C1A8",3),ea(n,24+r*256,384,208,104,5);n.fillStyle="#9A653D",n.fillRect(0,512,e,28),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(0,512,e,4),n.strokeStyle=jr,n.lineWidth=3,n.beginPath(),n.moveTo(0,361),n.lineTo(e,361),n.moveTo(0,512),n.lineTo(e,512),n.stroke()},!0),nx=(n,e)=>Lt(264,640,(t,i,s)=>{let r=t.createLinearGradient(0,0,i,s);r.addColorStop(0,n),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,i,s),t.fillStyle="rgba(255,255,255,.22)",t.fillRect(0,0,i,34),dt(t,16,44,i-32,s-70,10),et(t,"rgba(0,0,0,.09)",3),ea(t,16,44,i-32,s-70,5);for(let a=0;a<5;a++)dt(t,46,66+a*17,i-92,7,3),t.fillStyle="rgba(60,40,50,.42)",t.fill();dt(t,78,252,108,42,6),et(t,"#FFF9F0",2.5),t.fillStyle="#6d5a5f",t.font="700 26px 'Trebuchet MS',sans-serif",t.textAlign="center",t.fillText(String(100+e),132,282),dt(t,i-62,330,18,74,8),et(t,"#EAB94E",2.5),e%2===0&&(t.beginPath(),t.arc(70,372,16,0,7),et(t,["#F28F7E","#EAB94E","#B8A8DA"][e%3],2.5));for(let a=0;a<4;a++)dt(t,46,s-96+a*12,i-92,5,2),t.fillStyle="rgba(60,40,50,.3)",t.fill();t.strokeStyle=jr,t.lineWidth=6,t.strokeRect(0,0,i,s)}),fh=n=>Lt(320,576,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s of[10,168])dt(e,s+14,84,118,150,8),et(e,"#A9DDF2",3),dt(e,s+24,96,30,120,6),e.fillStyle="rgba(255,255,255,.6)",e.fill(),dt(e,s+10,280,126,200,8),et(e,"rgba(0,0,0,.12)",3),ea(e,s+10,280,126,200,5);e.fillStyle="rgba(0,0,0,.22)",e.fillRect(150,0,20,i),e.fillStyle="#EAB94E",e.fillRect(0,i-44,t,44),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(0,i-44,t,6);for(let s of[128,192])e.beginPath(),e.arc(s,330,9,0,7),et(e,"#EAB94E",2.5);e.strokeStyle=jr,e.lineWidth=6,e.strokeRect(0,0,t,i),e.beginPath(),e.moveTo(160,0),e.lineTo(160,i),e.stroke()}),ph=(n,e,t="#FFF9F0")=>Lt(512,128,(i,s,r)=>{dt(i,8,22,s-16,r-30,22),et(i,e,5),dt(i,22,34,s-44,r-54,14),i.fillStyle="rgba(255,255,255,.28)",i.fill(),i.fillStyle=t,i.font="800 58px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,s/2,r/2+4),i.strokeStyle=jr,i.lineWidth=4;for(let a of[80,s-80])i.beginPath(),i.moveTo(a,0),i.lineTo(a,24),i.stroke()}),Xs=()=>Lt(320,400,(n,e,t)=>{dt(n,10,10,e-20,t-46,14),et(n,"#FFF9F0",5);let i=n.createLinearGradient(0,40,0,250);i.addColorStop(0,"#A9DDF2"),i.addColorStop(1,"#E9F7FC"),dt(n,40,40,e-80,230,6),n.fillStyle=i,n.fill(),Qr(n,3),n.beginPath(),n.arc(220,96,26,0,7),et(n,"#F8D977",3),n.beginPath(),n.moveTo(44,260),n.lineTo(110,170),n.lineTo(170,260),n.closePath(),et(n,"#88B89A",3),n.beginPath(),n.moveTo(120,260),n.lineTo(210,150),n.lineTo(276,260),n.closePath(),et(n,"#5E9C72",3),n.strokeStyle="#FFF9F0",n.lineWidth=9,n.beginPath(),n.moveTo(e/2,40),n.lineTo(e/2,270),n.moveTo(40,155),n.lineTo(e-40,155),n.stroke(),dt(n,0,t-60,e,26,8),et(n,"#F1C887",4);for(let s of[-1,1]){let r=s<0?16:e-16;n.beginPath(),n.moveTo(r,14),n.quadraticCurveTo(r+s*-50,90,r+s*-34,250),n.lineTo(r+s*-34,300),n.lineTo(r,300),n.closePath(),et(n,"#F28F7E",3.5)}}),Ud=()=>Lt(384,256,(n,e,t)=>{dt(n,4,4,e-8,t-8,14),et(n,"#C98B4D",6),dt(n,20,20,e-40,t-40,6),n.fillStyle="#E8C39A",n.fill(),Qr(n,3);let i=["#FFF9F0","#F8D977","#8FC9E8","#A9DCC0","#EAA5B2","#B8A8DA"];[[36,34],[148,30],[256,40],[40,138],[156,130],[262,140]].forEach(([s,r],a)=>{n.save(),n.translate(s+40,r+40),n.rotate((mn(a,3)-.5)*.24),n.translate(-40,-40),n.shadowColor="rgba(50,30,40,.35)",n.shadowBlur=6,n.shadowOffsetY=4,dt(n,0,0,82,84,4),et(n,i[a],3),n.shadowColor="transparent";for(let l=0;l<4;l++)n.fillStyle="rgba(60,50,60,.4)",n.fillRect(10,18+l*14,50+l%2*12,4);n.beginPath(),n.arc(41,6,6,0,7),et(n,a&1?"#F28F7E":"#4F91C7",2),n.restore()})}),Od=()=>Lt(320,300,(n,e,t)=>{dt(n,4,4,e-8,t-8,14),et(n,"#C98B4D",6),dt(n,22,22,e-44,t-44,8),n.fillStyle="#DDF0F6",n.fill(),Qr(n,3);for(let i of[120,226])dt(n,26,i,e-52,14,4),et(n,"#DDAA68",3);[[70,120,1],[160,120,1.25],[250,120,.9],[110,226,1.1],[220,226,1]].forEach(([i,s,r])=>{n.beginPath(),n.moveTo(i-26*r,s-74*r),n.lineTo(i+26*r,s-74*r),n.lineTo(i+14*r,s-30*r),n.lineTo(i-14*r,s-30*r),n.closePath(),et(n,"#EAB94E",3),dt(n,i-6*r,s-30*r,12*r,18*r,3),et(n,"#EAB94E",3),dt(n,i-22*r,s-12*r,44*r,12*r,3),et(n,"#9A653D",3)}),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=8,n.beginPath(),n.moveTo(44,40),n.lineTo(110,100),n.stroke()}),kd=()=>Lt(256,256,n=>{n.beginPath(),n.arc(128,128,120,0,7),et(n,"#F28F7E",8),n.beginPath(),n.arc(128,128,96,0,7),et(n,"#FFF9F0",4);for(let e=0;e<12;e++){let t=e*Math.PI/6;n.strokeStyle="#4a3b3f",n.lineWidth=6,n.beginPath(),n.moveTo(128+Math.sin(t)*76,128-Math.cos(t)*76),n.lineTo(128+Math.sin(t)*90,128-Math.cos(t)*90),n.stroke()}n.strokeStyle="#4a3b3f",n.lineCap="round",n.lineWidth=9,n.beginPath(),n.moveTo(128,128),n.lineTo(160,88),n.stroke(),n.lineWidth=6,n.beginPath(),n.moveTo(128,128),n.lineTo(118,52),n.stroke(),n.beginPath(),n.arc(128,128,9,0,7),et(n,"#F28F7E",3)}),mh=n=>Lt(256,320,(e,t,i)=>{if(dt(e,6,6,t-12,i-12,8),et(e,["#FFFFFF","#FFF7D8","#E9F3FF"][n%3],5),n%3===0)e.fillStyle="#8FC9E8",e.fillRect(30,30,196,130),Qr(e,3),e.beginPath(),e.ellipse(90,90,44,28,0,0,7),e.fillStyle="#88B89A",e.fill(),e.beginPath(),e.ellipse(170,108,32,20,0,0,7),e.fill(),e.fillStyle="#F28F7E",e.fillRect(30,190,120,20),e.fillStyle="#B8A8DA",e.fillRect(30,226,90,16);else if(n%3===1){e.beginPath();for(let s=0;s<10;s++){let r=s*Math.PI/5-Math.PI/2,a=s&1?34:88;e.lineTo(128+Math.cos(r)*a,130+Math.sin(r)*a)}e.closePath(),et(e,"#EAB94E",4),e.fillStyle="#F28F7E",e.fillRect(40,250,176,22)}else e.fillStyle="#4F91C7",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillText("ABC",128,130),e.fillStyle="#F28F7E",e.fillRect(40,170,176,18),e.fillStyle="#88B89A",e.fillRect(40,208,120,16),e.fillStyle="#EAB94E",e.fillRect(40,246,150,16);e.beginPath(),e.arc(128,18,9,0,7),et(e,"#F28F7E",3)});var Bd=()=>Lt(128,128,(n,e,t)=>{let i=n.createRadialGradient(64,64,4,64,64,62);i.addColorStop(0,"rgba(52,34,46,.55)"),i.addColorStop(1,"rgba(52,34,46,0)"),n.fillStyle=i,n.fillRect(0,0,e,t)}),gh=()=>Lt(64,64,(n,e,t)=>{n.filter="blur(5px)",n.fillStyle="rgba(50,30,40,.9)",n.fillRect(12,12,40,40)}),zd=n=>Lt(256,256,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s=0;s<=t;s+=32)e.strokeStyle="rgba(60,40,50,.28)",e.lineWidth=4,e.beginPath(),e.moveTo(s,0),e.lineTo(s,i),e.stroke(),e.fillStyle="rgba(255,255,255,.16)",e.fillRect(s+6,0,10,i)}),Hd=n=>Lt(264*n.length,640,e=>{n.forEach((t,i)=>e.drawImage(nx(t,i*3+1).image,i*264,0))},!0),Vd=()=>Lt(256,256,(n,e,t)=>{n.fillStyle="#B7D8A4",n.fillRect(0,0,e,t);for(let i=0;i<90;i++){let s=mn(i,5)*e,r=mn(i,9)*t,a=8+mn(i,2)*22;n.fillStyle=i&1?"rgba(255,255,255,.16)":"rgba(70,120,80,.10)",n.beginPath(),n.ellipse(s,r,a,a*.6,mn(i,4)*3,0,7),n.fill()}for(let i=0;i<140;i++){let s=mn(i,11)*e,r=mn(i,12)*t;n.strokeStyle=i&1?"rgba(255,255,255,.5)":"rgba(60,110,70,.35)",n.lineWidth=2,n.beginPath(),n.moveTo(s,r),n.lineTo(s+3,r-9),n.stroke()}},!0),na=()=>Lt(256,256,(n,e,t)=>{n.fillStyle="#EBD9B8",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let r=s*64+(i&1?32:0)-32,a=i*64;for(let l of[0,e])dt(n,r+l+2,a+2,60,60,6),n.fillStyle=s+i&1?"#F2E3C6":"#E6D2AE",n.fill(),n.strokeStyle="rgba(150,115,80,.5)",n.lineWidth=3,n.stroke(),ea(n,r+l+2,a+2,60,60,4)}for(let i=0;i<60;i++)n.fillStyle="rgba(255,255,255,.35)",n.fillRect(mn(i,3)*e,mn(i,8)*t,2.4,2.4)},!0),Gd=(n,e,t="#FFF9F0")=>Lt(768,576,(i,s,r)=>{i.fillStyle="#F4EBDB",i.fillRect(0,0,s,r),dt(i,22,22,s-44,r-44,36),et(i,e,8),dt(i,52,52,s-104,r-104,24),i.fillStyle="rgba(255,255,255,.22)",i.fill();for(let a=0;a<6;a++)i.fillStyle="rgba(255,255,255,.18)",i.fillRect(70+a*112,70,44,r-140);i.fillStyle=t,i.font="800 140px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.strokeStyle="rgba(70,50,60,.35)",i.lineWidth=12,i.strokeText(n,s/2,r/2+6),i.fillText(n,s/2,r/2+6),ea(i,22,22,s-44,r-44,7)}),yh=n=>Lt(1024,160,(e,t,i)=>{dt(e,8,10,t-16,i-20,22),et(e,"#F28F7E",6),dt(e,22,24,t-44,i-48,14),e.fillStyle="rgba(255,255,255,.2)",e.fill(),e.fillStyle="#FFF9F0",e.font="800 78px 'Trebuchet MS',sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(n,t/2,i/2+4);for(let s of[60,t-60]){e.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,l=r&1?9:22;e.lineTo(s+Math.cos(a)*l,i/2+Math.sin(a)*l)}e.closePath(),et(e,"#EAB94E",3)}});var xh=["#fde7d3","#fbdcc4","#f5cfa8","#f0c29b","#e3ad7f","#d9a074","#c58a5f","#a86f4f","#8d5a3e","#7a4a36","#5e3a2b","#4a2e24"],Ki=["#2b2b33","#3a2a30","#5a3a35","#694a38","#9a653d","#b5563e","#c9773e","#e0b04e","#f1d98a","#d9d4cc","#8c8c96","#4F91C7","#b8a8da","#e8789a","#5e9c72","#e07a66"],_h=["#3a2a30","#5a3a2a","#8a6a3a","#c98a3a","#4f8a5e","#4f91c7","#7a8794","#8173ae"],Kt=["#4f91c7","#326c9e","#8fc9e8","#88b89a","#5e9c72","#a9dcc0","#eab94e","#f8d977","#f6b294","#f28f7e","#d9564a","#eaa5b2","#b8a8da","#8173ae","#c98569","#9a653d","#fff6ea","#9da7aa","#4a3b3f","#2b3a55"],vh=["#fbf6ee","#313a3f","#d9564a","#4f91c7","#eab94e","#88b89a","#9a653d","#b8a8da"],gn=(...n)=>n.map(([e,t])=>({id:e,label:t})),sa={hairStyle:gn(["crop","Short crop"],["buzz","Buzz cut"],["undercut","Undercut"],["spiky","Spiky"],["messy","Messy"],["sidebang","Side bangs"],["curtains","Curtains"],["pixie","Pixie"],["bob","Bob"],["long","Long"],["wavy","Wavy long"],["curly","Curly puffs"],["afro","Afro"],["pony","Ponytail"],["pigtails","Pigtails"],["twinbuns","Twin buns"],["bun","Bun"],["topknot","Top knot"],["braids","Braids"]),eyeShape:gn(["round","Round"],["oval","Oval"],["wide","Wide"],["sleepy","Sleepy"],["happy","Happy"],["lash","Lashes"]),brow:gn(["soft","Soft"],["thick","Thick"],["thin","Thin"],["arch","Arched"],["none","None"]),mouthStyle:gn(["smile","Smile"],["grin","Grin"],["smirk","Smirk"],["flat","Calm"],["o","Surprised"],["cat","Cat"]),glasses:gn(["none","None"],["round","Round"],["square","Square"],["cat","Cat-eye"],["half","Half-rim"],["sun","Sunglasses"]),hat:gn(["none","None"],["cap","Cap"],["beanie","Beanie"],["bucket","Bucket hat"],["beret","Beret"],["headband","Headband"],["bow","Bow"],["flower","Flower"],["crown","Crown"],["headphones","Headphones"],["catears","Cat ears"]),top:gn(["tee","T-shirt"],["hoodie","Hoodie"],["sweater","Sweater"],["jersey","Jersey"],["blazer","Blazer"],["dress","Dress"],["overalls","Overalls"],["vest","Vest"],["tank","Tank top"]),pattern:gn(["solid","Solid"],["stripes","Stripes"],["dots","Dots"],["plaid","Plaid"],["hearts","Hearts"],["stars","Stars"]),bottom:gn(["pants","Pants"],["joggers","Joggers"],["shorts","Shorts"],["skirt","Skirt"]),shoeStyle:gn(["sneaker","Sneakers"],["boot","Boots"],["sandal","Sandals"],["plain","Plain shoes"]),packStyle:gn(["pack","Backpack"],["messenger","Messenger bag"],["mini","Mini pack"],["none","No bag"]),build:gn(["slim","Slim"],["regular","Regular"],["sturdy","Sturdy"]),age:gn(["k2","Grades K-2"],["g35","Grades 3-5"],["g68","Grades 6-8"],["hs","High school"])},Wd=["she/her","he/him","they/them"],qs=()=>({name:"Student",pronouns:"they/them",age:"hs",skin:"#f0c29b",hairStyle:"bun",hair:"#5a3a35",hair2:null,eyeShape:"round",eyeColor:"#5a3a2a",brow:"soft",browColor:null,freckles:!1,mole:!1,nose:!1,blush:!0,mouthStyle:"smile",lip:"#8a4650",glasses:"round",glassColor:"#5b4048",hat:"none",hatColor:"#e07a66",earrings:null,scarf:null,badge:null,top:"hoodie",shirt:"#d9564a",shirt2:"#fff6ea",pattern:"solid",bottom:"pants",pants:"#4f5d75",shoeStyle:"sneaker",shoes:"#fbf6ee",packStyle:"pack",pack:"#8a5f6a",build:"regular",headSize:1});function Ui(n,e=11){return{id:e,age:n.age,skin:n.skin,hair:n.hair,hair2:n.hair2||void 0,style:n.hairStyle,shirt:n.shirt,shirt2:n.shirt2,top:n.top,pattern:n.pattern,bottom:n.bottom,pants:n.pants,eyeShape:n.eyeShape,eyeColor:n.eyeColor,brow:n.brow,browColor:n.browColor||void 0,freckles:n.freckles,mole:n.mole,nose:n.nose,blush:n.blush,mouthStyle:n.mouthStyle,lip:n.lip,glasses:n.glasses==="none"?!1:n.glasses,glassColor:n.glassColor,hat:n.hat==="none"?void 0:n.hat,hatColor:n.hatColor,earrings:n.earrings||void 0,scarf:n.scarf||void 0,badge:n.badge||void 0,shoeStyle:n.shoeStyle,shoes:n.shoes,packStyle:n.packStyle,pack:n.pack,build:n.build,headSize:n.headSize}}function di(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var gt=(n,e)=>e[Math.floor(n()*e.length)],Cn=n=>sa[n].map(e=>e.id);function ra(n,e="hs"){let t=gt(n,Cn("top")),i=n()<.28?gt(n,Cn("hat").filter(r=>r!=="none")):"none",s=n()<.3?gt(n,Cn("glasses").filter(r=>r!=="none")):"none";return{...qs(),age:e,name:"",skin:gt(n,xh),hairStyle:gt(n,Cn("hairStyle")),hair:gt(n,Ki),hair2:n()<.16?gt(n,Ki):null,eyeShape:gt(n,Cn("eyeShape")),eyeColor:gt(n,_h),brow:gt(n,Cn("brow").filter(r=>r!=="none")),freckles:n()<.22,mole:n()<.1,nose:n()<.3,blush:n()<.8,mouthStyle:gt(n,Cn("mouthStyle")),glasses:s,glassColor:gt(n,["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da"]),hat:i,hatColor:gt(n,Kt),earrings:n()<.12?gt(n,["#eab94e","#fff6ea","#f28f7e"]):null,scarf:n()<.1?gt(n,Kt):null,badge:n()<.12?gt(n,Kt):null,top:t,shirt:gt(n,Kt),shirt2:gt(n,Kt),pattern:n()<.4?gt(n,Cn("pattern")):"solid",bottom:t==="dress"?"pants":gt(n,Cn("bottom")),pants:gt(n,Kt),shoeStyle:gt(n,Cn("shoeStyle")),shoes:gt(n,vh),packStyle:gt(n,Cn("packStyle")),pack:gt(n,Kt),build:gt(n,Cn("build")),headSize:.94+n()*.12}}var bh=n=>[n.skin,n.hairStyle,n.hair,n.top,n.shirt,n.pattern,n.hat,n.glasses,n.bottom,n.pants].join("|"),sx=["black","dark brown","chestnut","brown","caramel","auburn","ginger","blond","platinum","silver","grey","blue","lavender","pink","green","coral"],rx=["blue","navy","sky blue","sage green","green","mint","gold","yellow","peach","coral","red","pink","lilac","purple","terracotta","brown","cream","grey","charcoal","midnight blue"],ax=n=>sx[Ki.indexOf(n)]??"colorful",ia=n=>rx[Kt.indexOf(n)]??"colorful";function aa(n){let e=[],t=(i,s)=>sa[i].find(r=>r.id===s)?.label.toLowerCase()??s;return n.hat&&n.hat!=="none"&&e.push({key:"hat",phrase:`${ia(n.hatColor)} ${t("hat",n.hat)}`,noun:"hat"}),n.glasses&&n.glasses!=="none"&&e.push({key:"glasses",phrase:`${t("glasses",n.glasses)} glasses`,noun:"glasses"}),e.push({key:"hair",phrase:`${ax(n.hair)} ${t("hairStyle",n.hairStyle)} hair`,noun:"hair"}),e.push({key:"top",phrase:`${n.pattern!=="solid"?n.pattern+" ":""}${ia(n.shirt)} ${t("top",n.top)}`,noun:n.top}),n.packStyle!=="none"&&e.push({key:"pack",phrase:`${ia(n.pack)} ${t("packStyle",n.packStyle)}`,noun:"bag"}),n.freckles&&e.push({key:"freckles",phrase:"freckles",noun:"freckles"}),n.earrings&&e.push({key:"earrings",phrase:"earrings",noun:"earrings"}),n.scarf&&e.push({key:"scarf",phrase:"scarf",noun:"scarf"}),e.push({key:"shoes",phrase:`${ia(n.shoes)==="colorful"?"":ia(n.shoes)+" "}${t("shoeStyle",n.shoeStyle)}`.trim(),noun:"shoes"}),e}var ox=["cheerful","shy","sporty","nerdy","artsy","funny","curious","bossy","dreamy","kind"],Xd=["Maya","Marcus","Priya","Leo","Amara","Diego","Sofia","Kenji","Zara","Eli","Nadia","Tobias","Imani","Mateo","Hana","Omar","Lucia","Jonah","Anika","Caleb","Mei","Ravi","Talia","Felix","Yara","Ben","Chloe","Dev","Esme","Finn","Grace","Hugo","Isla","Jamal","Keira","Liam","Mira","Noah","Olive","Pablo","Quinn","Rosa","Sam","Tessa","Uma","Victor","Willa","Xavier","Yusuf","Zoe","Aiden","Bella","Cyrus","Daria","Emil","Farah","Gus","Harper"],qd=["Chen","Reed","Patel","Okafor","Santos","Nguyen","Kim","Haddad","Rivera","Brooks","Ivanov","Tanaka","Mensah","Larsen","Cruz","Adeyemi","Fischer","Ibrahim","Kowalski","Lopez","Morales","Novak","Osei","Park","Quintero","Rossi","Singh","Torres","Underwood","Vega","Walker","Yamada","Zhang","Abbott","Bishop","Castillo","Dalton","Ellis","Foster","Grant"],$d={young:["dinosaurs","building with blocks","drawing animals","jumping rope","bugs and butterflies","playing tag","stickers","toy trains","singing songs","baking cookies"],mid:["soccer","robotics club","drawing comics","chess","baking","birdwatching","skateboarding","minecraft builds","magic tricks","swimming","reading mysteries","playing violin","origami","space and rockets"],teen:["basketball","coding","photography","theater","poetry","painting","piano","track and field","debate","gardening","making music","volleyball","film editing","cooking"]},lx=["tacos","mac and cheese","pizza","fried rice","mango slices","pancakes","dumplings","hummus and pita","grilled cheese","pasta","chicken nuggets","cheeseburgers","sushi rolls","samosas","peanut butter sandwiches"],cx=["a dog named Biscuit","a cat named Pickles","a hamster named Nugget","two goldfish","a rabbit named Clover","a parrot named Mango","a turtle named Speedy","a gecko named Ziggy",null,null,null],hx=["become an astronaut","open a bakery","play pro soccer","write a graphic novel","be a marine biologist","build robots","become a teacher","direct movies","be a vet","design video games","be a chef","become a pilot","run for mayor","be a musician"],Yd=["always hums while working","carries a tiny notebook everywhere","says 'for real though' a lot","collects interesting rocks","never leaves without a snack","talks to plants","draws doodles on everything","counts steps in the hallway","makes up nicknames","loves puns","gets the hiccups when nervous","is always five minutes early"],ux=["is secretly afraid of the dark","still sleeps with a stuffed bunny","writes songs nobody has heard","wants to try out for the school play but is nervous","can solve a Rubik's cube in under a minute","once got lost in the library for an hour","has a crush on someone in the art club","is saving up for a telescope","is learning a new language in secret","feels nervous about speaking in class"],Zd=["math","ela","science","history"],Jd=["k2","g35","g68","hs","g35","g68","k2","hs","g68","g35"],dx=(n,e)=>n==="k2"?["K","1","2"][e%3]:n==="g35"?["3","4","5"][e%3]:n==="g68"?["6","7","8"][e%3]:n==="hs"?["9","10","11","12"][e%4]:"Staff",Rn=(n,e)=>e[Math.floor(n()*e.length)];function fx(n=48,e=20260930){let t=di(e),i=new Set,s=new Set,r=[],a="",l="";for(let c=0;c<n;c++){let o=Jd[c%Jd.length],u,d=0;do u=ra(t,o),d++;while((i.has(bh(u))||u.hairStyle===a||u.hair===l)&&d<60);i.add(bh(u)),a=u.hairStyle,l=u.hair,(o==="k2"||o==="g35")&&(u.glasses=t()<.12?u.glasses:"none",u.top==="blazer"&&(u.top="hoodie"));let h=Xd[c%Xd.length],f=Rn(t,qd),g=`${h} ${f}`;for(;s.has(g);)f=Rn(t,qd),g=`${h} ${f}`;s.add(g),u.name=h;let S=o==="k2"||o==="g35"?"young":o==="g68"?"mid":"teen",m=$d[S],p=[Rn(t,m)];for(;p.length<3;){let R=Rn(t,[...m,...$d.mid]);p.includes(R)||p.push(R)}let M=Rn(t,Zd),C=Rn(t,Zd.filter(R=>R!==M)),v=ox[(c*3+Math.floor(t()*10))%10],T=Math.floor(t()*4),E=dx(o,T);r.push({id:c,key:`n${c}`,name:g,first:h,role:"student",age:o,grade:E,spec:u,look:{...Ui(u,c),tag:!1},personality:v,interests:p,favSubject:M,hardSubject:C,food:Rn(t,lx),pet:Rn(t,cx),dream:Rn(t,hx),quirk:Rn(t,Yd),secret:Rn(t,ux),bestFriend:(c+1+Math.floor(t()*5))%n,rival:t()<.3?(c+7+Math.floor(t()*9))%n:null,bio:`${h} is in grade ${E}, loves ${p[0]} and ${p[1]}, and ${Rn(t,Yd)}.`})}for(let c of r)c.bestFriend===c.id&&(c.bestFriend=(c.id+1)%n);return r}var Ys=fx(56),Zs=n=>Ys[n]??yn.find(e=>e.id===n),px=n=>({...ra(di(n.name?.length??5),"adult"),...n});function $s(n,e,t,i,s,r,a={}){let l=px({name:e.split(" ").pop(),age:"adult",...s}),c=e.split(" ").pop();return{id:n,key:`s${n}`,name:e,first:c,role:"staff",title:t,age:"adult",grade:"Staff",spec:l,look:{...Ui(l,n),tag:!1},personality:r,interests:["helping students","coffee","crossword puzzles"],favSubject:i??"history",hardSubject:"math",food:"a good salad",pet:null,dream:"see every student find something they love",quirk:"keeps spare pencils in every pocket",secret:"still has their own first-grade report card",bestFriend:0,rival:null,bio:`${e} is ${t}.`,...a}}var yn=[$s(100,"Mr. Okafor","the hall monitor",null,{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"crop",top:"vest",shirt:"#c98569",shirt2:"#fff6ea",bottom:"pants",pants:"#2b3a55",hat:"none",glasses:"none",packStyle:"none",brow:"thick",mouthStyle:"smile"},"kind"),$s(101,"Ms. Alvarez","a teacher on hall duty","ela",{skin:"#f0c29b",hair:"#b5563e",hairStyle:"bun",top:"sweater",shirt:"#8173ae",glasses:"cat",packStyle:"messenger",pack:"#9a653d",bottom:"skirt",pants:"#4a3b3f",earrings:"#eab94e"},"cheerful"),$s(110,"Ms. Keisha Brown","the math teacher","math",{skin:"#a86f4f",hair:"#2b2b33",hairStyle:"curly",top:"blazer",shirt:"#f6b294",shirt2:"#fff6ea",glasses:"none",packStyle:"none",bottom:"pants",pants:"#4a3b3f"},"nerdy"),$s(111,"Mr. James Lee","the English teacher","ela",{skin:"#d9a074",hair:"#694a38",hairStyle:"crop",top:"sweater",shirt:"#8fc9e8",glasses:"round",packStyle:"none",bottom:"pants",pants:"#5b6b8c"},"dreamy"),$s(112,"Mr. Jamal Carter","the science teacher","science",{skin:"#7a4a36",hair:"#3a2a30",hairStyle:"afro",top:"tee",shirt:"#a9dcc0",pattern:"solid",glasses:"none",packStyle:"none",bottom:"pants",pants:"#5f7a68"},"curious"),$s(113,"Mr. Marcus Reed","the history teacher","history",{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"buzz",top:"blazer",shirt:"#c98569",glasses:"square",packStyle:"none",bottom:"pants",pants:"#2b3a55",brow:"thick"},"funny")],mx={math:yn[2],ela:yn[3],science:yn[4],history:yn[5]},Kd=24;var Sh="unify.social.v1",la=()=>new Date().toISOString().slice(0,10),gx=()=>({met:!1,fr:0,talks:0,lastDay:"",lastAt:0,topics:[],facts:{},log:[],quiz:{right:0,total:0},mood:0,helped:0,hurt:0,classNotes:[],overheard:[],seenInClass:0,called:0}),Al=()=>({v:1,mem:{},profile:{name:"",avatar:qs(),facts:{},stats:{talks:0,quizRight:0,quizTotal:0,hands:0},created:Date.now(),hasAvatar:!1}}),xn=Al(),jd=0,Js=new Set;function Qd(){try{let n=JSON.parse(localStorage.getItem(Sh)||"null");n&&n.v===1&&(xn={...Al(),...n,profile:{...Al().profile,...n.profile}},xn.profile.avatar={...qs(),...xn.profile.avatar||{}})}catch{}}function oa(){clearTimeout(jd),jd=setTimeout(()=>{try{localStorage.setItem(Sh,JSON.stringify(xn))}catch{}},120)}Qd();try{addEventListener("storage",n=>{n.key===Sh&&(Qd(),Js.forEach(e=>e()))})}catch{}var we={get profile(){return xn.profile},setProfile(n){xn.profile={...xn.profile,...n},oa(),Js.forEach(e=>e())},learn(n,e){xn.profile.facts[n]=e,oa()},mem(n){let e=String(n);return xn.mem[e]??(xn.mem[e]=gx())},peek(n){return xn.mem[String(n)]},edit(n,e){e(we.mem(n)),oa(),Js.forEach(t=>t())},friends(){return Object.entries(xn.mem).filter(([,n])=>n.met).map(([n,e])=>({id:n,mem:e})).sort((n,e)=>e.mem.fr-n.mem.fr)},onChange(n){return Js.add(n),()=>Js.delete(n)},reset(){xn=Al(),oa(),Js.forEach(n=>n())},save:oa},ji=n=>n>=85?"best friend":n>=60?"close friend":n>=30?"friend":n>=10?"classmate":"new face",Mh=n=>Math.min(5,Math.ceil(n/20));function Qi(n,e,t){we.edit(n,i=>{i.log.push({who:e,text:t.slice(0,220),t:Date.now()}),i.log.length>24&&i.log.splice(0,i.log.length-24)})}function Th(n,e){we.edit(n,t=>{t.fr=Math.max(0,Math.min(100,t.fr+e)),e<0&&t.hurt++})}var ef=1.75/45,Pn=(n,e)=>new I(n-56/2,0,e-44/2);var yx=["#7fb2d6","#f2a79b","#9fd0b0","#f4d488"],es={math:"#4F91C7",ela:"#88B89A",science:"#8FC9E8",history:"#C98569"},Cl={math:"MATH",ela:"ELA",science:"SCIENCE",history:"HISTORY"};var _n=(n,e)=>{let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},tf=[{key:"math",label:"Math",color:es.math},{key:"ela",label:"ELA",color:es.ela},{key:"science",label:"Science",color:es.science},{key:"history",label:"History",color:es.history},{key:"news",label:"Newsroom",color:"#B8A8DA"},{key:"plaza",label:"Plaza fountain",color:"#EAB94E"},{key:"entrance",label:"Main entrance",color:"#F28F7E"}],Rl=class{constructor(e){this.host=e;this.scene=new yr;this.camera=new $t(48,1,.1,260);this.clock=0;this.idx=-1;this.speed=1;this.view="close";this.tint=[255,255,255,0];this.students=[];this.inDoor=null;this.onToast=()=>{};this.keys={};this.input={x:0,y:0};this.rotate=0;this.inputLocked=!1;this.onTick=[];this.onTap=()=>{};this.yaw=0;this.pitch=.62;this.zoom=1;this.fpitch=0;this.navLabel="";this.nav=null;this.walkers=[];this.open=[];this.occl=[];this.shadowR=0;this.texCache=new Map;this.camPos=new I(0,6,8);this.camLook=new I(0,1,-4);this.last=performance.now();this.t=0;this.blobTex=Bd();this.ray=new Dr;this.frame=e=>{let t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.t+=t;let i=t*this.speed;this.clock+=i,this.clock>=lh&&(this.clock-=lh);let s=Rd(this.clock);s!==this.idx&&(this.idx=s,this.enterPeriod(s));let r=this.inputLocked?0:(this.keys.e?1:0)-(this.keys.q?1:0)+this.rotate;r&&(this.yaw+=r*1.9*t);let a=new I;this.camera.getWorldDirection(a),a.y=0,a.lengthSq()<1e-4&&a.set(0,0,-1),a.normalize();for(let o of this.students)if(o.pending&&(o.pending.delay-=i,o.pending.delay<=0&&this.begin(o)),!o.hidden){if(o.talking){o.moving=!1,o.frame=0;continue}if(o.fade<1&&(o.fade=Math.min(1,o.fade+i*3),o.mat.opacity=o.fade),o.path.length){let u=o.path[0],d=u.clone().sub(o.pos);d.y=0;let h=d.length(),f=o.speed*i;h<=f?(o.pos.copy(u),o.path.shift()):(d.normalize(),o.pos.addScaledVector(d,f),o.dir=this.dirFrom(d,a,o.dir)),o.moving=!0,o.frame=1+Math.floor(this.t*o.speed*3.4)%4,!o.path.length&&o.hideOnArrive&&(o.hidden=!0,o.sprite.visible=!1,o.blob.visible=!1,o.moving=!1)}else o.moving=!1,o.frame=0}this.patrol(i,a);for(let o of this.onTick)o(t,i);this.movePlayer(t,a),this.updateCamera(t),this.fadeOccluders(t),this.player.sprite.visible=this.view!=="first",this.player.blob.visible=this.view!=="first";for(let o of[...this.students,this.player,this.monitor,this.teacher])if(!o.hidden){if(o.sprite.position.copy(o.pos),this.view==="first"&&o!==this.player){let u=o.pos.distanceTo(this.camera.position)<1.1;o.sprite.visible=!u,o.blob.visible=!u}else o!==this.player&&(o.sprite.visible=!0,o.blob.visible=!0);o.blob.position.set(o.pos.x,.02,o.pos.z),this.setFrame(o,o.dir,o.frame)}let l=Hn[this.idx].tint,c=Math.min(1,t*1.5);for(let o=0;o<4;o++)this.tint[o]+=(l[o]-this.tint[o])*c;this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.frame)};let t=this.renderer=new Sl({antialias:!0,alpha:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Co,t.outputColorSpace=Ft,e.appendChild(t.domElement),this.scene.background=new Ve("#EADFCB"),this.scene.fog=new gr("#EADFCB",80,190),this.reachable(),this.buildLights(),this.buildCampus(),this.buildOutside(),this.buildPeople(),addEventListener("resize",()=>this.resize()),this.resize(),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&(this.keys[i.key.toLowerCase()]=!0,i.key.startsWith("Arrow")&&i.preventDefault())}),addEventListener("keyup",i=>{this.keys[i.key.toLowerCase()]=!1}),addEventListener("blur",()=>{this.keys={}}),addEventListener("message",i=>{let s=i.data;s&&s.type==="unify:exit"&&this.placeAtDoor(s.room)}),this.bindPointer(t.domElement),this.setView("close",!0),requestAnimationFrame(this.frame)}resize(){let e=this.host.clientWidth||innerWidth,t=this.host.clientHeight||innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.fov=e/t<.8?62:48,this.camera.updateProjectionMatrix()}tex(e,t){let i=this.texCache.get(e);return i||(i=t(),this.texCache.set(e,i)),i}rep(e,t,i,s=1){let r=`${e}@${i.toFixed(2)}x${s.toFixed(2)}`,a=this.texCache.get(r);return a||(a=this.tex(e,t).clone(),a.repeat.set(i,s),a.needsUpdate=!0,this.texCache.set(r,a)),a}bindPointer(e){let t=!1,i=0,s=0,r=0,a=0,l=0;e.addEventListener("pointerdown",c=>{t=!0,i=r=c.clientX,s=a=c.clientY,l=performance.now(),e.setPointerCapture(c.pointerId)}),e.addEventListener("pointermove",c=>{if(!t)return;let o=c.clientX-i,u=c.clientY-s;i=c.clientX,s=c.clientY,this.yaw-=o*.0065,this.view==="first"?this.fpitch=Math.max(-.6,Math.min(.6,this.fpitch-u*.004)):this.pitch=Math.max(.2,Math.min(1.3,this.pitch+u*.004))}),e.addEventListener("pointerup",c=>{let o=t;t=!1,o&&Math.hypot(c.clientX-r,c.clientY-a)<7&&performance.now()-l<500&&this.handleTap(c.clientX,c.clientY)}),e.addEventListener("pointercancel",()=>{t=!1}),e.addEventListener("wheel",c=>{c.preventDefault(),this.zoom=Math.max(.45,Math.min(1.6,this.zoom*Math.exp(c.deltaY*.0012)))},{passive:!1})}buildLights(){this.scene.add(new Pr(16774888,14996404,2.1));let e=this.sun=new Lr(16773336,1.25);e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=70,e.shadow.bias=-4e-4,e.shadow.radius=5,this.scene.add(e,e.target)}std(e,t="#ffffff"){return new Zt({map:e,color:t,roughness:.95,metalness:0})}plain(e){return new Zt({color:e,roughness:1})}box(e,t,i,s,r,a,l,c={}){let{outline:o=!0,occlude:u=!1,shadow:d=!0}=c;u&&(s=(Array.isArray(s)?s:[s]).map(f=>f.clone()));let h=new ke(new Kn(e,t,i),s);return h.position.set(r,a,l),h.castShadow=d,h.receiveShadow=!0,this.scene.add(h),o&&h.add(new Gi(new Xi(h.geometry),new Mi({color:7166559,transparent:!0,opacity:.55}))),u&&this.occl.push({mats:Array.isArray(s)?s:[s],box:new Sn().setFromCenterAndSize(h.position,new I(e+.05,t,i+.05)),o:1}),h}card(e,t,i,s,r,a,l,c=!1){let o=new Yt,u=new ke(new Ht(t*1.12,i*1.12),new dn({map:this.tex("cardsh",()=>gh()),transparent:!0,opacity:.55,depthWrite:!1}));u.position.set(0,-.05,0);let d=new ke(new Ht(t,i),c?new dn({map:e,transparent:!0}):new Zt({map:e,roughness:1,transparent:!0}));return d.position.z=.025,d.receiveShadow=!0,o.add(u,d),o.position.set(s,r,a),o.rotation.y=l,this.scene.add(o),d}flat(e,t,i,s,r,a=.012,l=0){let c=new Ht(t,i);c.rotateX(-Math.PI/2),l&&c.rotateY(l);let o=new ke(c,this.std(e));return o.position.set(s,a,r),o.receiveShadow=!0,this.scene.add(o),o}rotOf(e){return e==="S"?0:e==="N"?Math.PI:e==="E"?Math.PI/2:-Math.PI/2}onFace(e,t,i,s){return t==="S"?{x:e.x+e.w*i-56/2,z:e.y+e.h-44/2+s}:t==="N"?{x:e.x+e.w*i-56/2,z:e.y-44/2-s}:t==="E"?{x:e.x+e.w-56/2+s,z:e.y+e.h*i-44/2}:{x:e.x-56/2-s,z:e.y+e.h*i-44/2}}buildCampus(){let e=this.scene,t=this.plain("#F7ECD6"),i=this.plain("#D8C6A4"),s=new ke(new Ht(63,51),new dn({map:this.tex("dio",()=>gh()),transparent:!0,opacity:.7,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(.4,-.02,.4),e.add(s);let r=new ke(new Ht(56,44),this.std(this.rep("floor",()=>Nd(),56/2,44/2)));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),this.flat(this.rep("stoneA",()=>na(),46/4,10/4),46,10,0,0,.012),this.flat(this.rep("stoneB",()=>na(),14/4,34/4),14,34,0,0,.012);let a=(d,h,f,g)=>this.flat(this.rep("rug",()=>Fd(),1,d/4),2,d,h,f,.014,g?Math.PI/2:0);a(52,0,-44/2+2.5,!0),a(40,-56/2+2.5,0,!1),a(40,56/2-2.5,0,!1),a(48/2-1,-56/4-2.5,44/2-2.5,!0),a(48/2-1,56/4+2.5,44/2-2.5,!0);let l=(d,h,f,g,S)=>{let m=this.std(this.rep("wall",()=>ta(),d/4)),p=[i,i,t,i,i,i];p[S]=m,this.box(g?d:.3,4.2,g?.3:d,p,h,4.2/2,f,{outline:!1,occlude:!0})};l(56+.6,0,-44/2-.15,!0,4),l(44,-56/2-.15,0,!1,0),l(44,56/2+.15,0,!1,1);let c=An.gap.x0-56/2,o=An.gap.x1-56/2,u=44/2+.15;l(c+56/2+.3,(-56/2-.3+c)/2,u,!0,5),l(56/2+.3-o,(o+56/2+.3)/2,u,!0,5),this.box(o-c,.9,.3,[i,i,t,i,i,this.std(this.rep("wall",()=>ta(),2))],(c+o)/2,4.2-.45,u,{outline:!1}),this.card(this.tex("banner",()=>yh("UNIFY ACADEMY")),7.6,1.2,(c+o)/2,3.2,44/2-.05,Math.PI,!0),this.card(this.tex("exit",()=>yh("WELCOME")),5.2,.8,(c+o)/2,3.2,44/2+.35,0,!0),this.card(this.tex("clock",()=>kd()),1.1,1.1,-9,3.05,-44/2+.17,0);for(let d=4;d<53;d+=6)Math.abs(d-56/2)>1.5&&this.card(this.tex("win",()=>Xs()),1.5,1.9,d-56/2,3.05,-44/2+.17,0);for(let d=4;d<53;d+=6)(d<An.gap.x0-2||d>An.gap.x1+2)&&this.card(this.tex("win",()=>Xs()),1.5,1.9,d-56/2,3.05,44/2-.17,Math.PI);for(let d=5;d<41;d+=6)this.card(this.tex("win",()=>Xs()),1.5,1.9,-56/2+.17,3.05,d-44/2,Math.PI/2),this.card(this.tex("win",()=>Xs()),1.5,1.9,56/2-.17,3.05,d-44/2,-Math.PI/2);{let d=Fi.cx-56/2,h=-44/2;this.box(2.3,3.5,.18,this.plain("#9A653D"),d,1.75,h+.09);let f=new ke(new Ht(1.95,3.15),new Zt({map:this.tex("door-news",()=>fh("#B8A8DA")),roughness:.95}));f.position.set(d,1.6,h+.19),f.receiveShadow=!0,e.add(f);let g=new ke(new Ht(1.9,.48),new dn({map:this.tex("sign-news",()=>ph("NEWSROOM","#8173AE")),transparent:!0}));g.position.set(d,3.8,h+.2),e.add(g)}this.bunting([[-56/2+.06,-44/2+.06,56/2-.06,-44/2+.06],[-56/2+.06,-44/2+.06,-56/2+.06,44/2-.06],[56/2-.06,-44/2+.06,56/2-.06,44/2-.06]],3.95);for(let d of Kr){let h=d.rect,f=d.subject,g=ni.find(H=>H.subject===f),S=this.std(this.rep("wall",()=>ta(),h.h/4)),m=this.std(this.rep("wall",()=>ta(),h.w/4)),p=this.std(this.tex(`roof-${f}`,()=>Gd(Cl[f],es[f],f==="science"?"#3b3340":"#FFF9F0")));this.box(h.w,4.2,h.h,[S,S,p,i,m,m],h.x+h.w/2-56/2,4.2/2,h.y+h.h/2-44/2,{occlude:!0});let M=["N","S","E","W"];for(let H of M){let Y=H==="N"||H==="S"?h.w:h.h,F=Math.round(Y/4.6);for(let ne=0;ne<F;ne++){let X=(ne+.5)/F,K=this.onFace(h,H,X,.17),B=H==="N"||H==="S"?h.x+h.w*X:g.cx;H===g.face&&Math.abs(B-g.cx)<2.6||this.card(this.tex("win",()=>Xs()),1.5,1.9,K.x,3.05,K.z,this.rotOf(H))}}let C=g.face,v=(H,Y)=>({p:this.onFace(h,C,(g.cx+H-h.x)/h.w,.17),i:Y}),T=v(-5.2,0),E=v(5.2,1),R=v(-3.4,2),x=v(3.4,3);this.card(this.tex(`po${T.i}`,()=>mh(T.i+(f==="ela"?1:0))),1,1.25,T.p.x,1.45,T.p.z,this.rotOf(C)),this.card(this.tex(`po${E.i}`,()=>mh(E.i+(f==="math"?1:0))),1,1.25,E.p.x,1.45,E.p.z,this.rotOf(C)),this.card(this.tex("board",()=>Ud()),1.6,1.1,R.p.x,2.2,R.p.z,this.rotOf(C)),this.card(this.tex("trophy",()=>Od()),1.1,1,x.p.x,2.2,x.p.z,this.rotOf(C));let w=C==="S"?1:-1,P=g.cy-44/2,b=g.cx-56/2,L=w>0?0:Math.PI;this.box(2.3,3.5,.18,this.plain("#9A653D"),b,1.75,P+w*.09,{occlude:!1});let k=new ke(new Ht(1.95,3.15),new Zt({map:this.tex(`door-${f}`,()=>fh(es[f])),roughness:.95}));k.position.set(b,1.6,P+w*.19),k.rotation.y=L,k.receiveShadow=!0,e.add(k);let D=new ke(new Ht(1.9,.48),new dn({map:this.tex(`sign-${f}`,()=>ph(Cl[f],es[f],f==="science"?"#3b3340":"#FFF9F0")),transparent:!0}));D.position.set(b,3.8,P+w*.2),D.rotation.y=L,e.add(D)}uh.forEach((d,h)=>{let f=d.rect,g=d.face==="N"||d.face==="S"?f.w:f.h,S=this.std(this.rep("lockers",()=>Hd(yx),g/4)),m=this.plain("#9db8c8"),p=this.plain("#FFF6E6"),M=[m,m,p,m,m,m];M[{E:0,W:1,S:4,N:5}[d.face]]=S,this.box(f.w,2.3,f.h,M,f.x+f.w/2-56/2,1.15,f.y+f.h/2-44/2,{occlude:!0})});for(let d of dh){let h=d.x-56/2,f=d.y-44/2;d.kind==="tree"?this.tree(h,f):d.kind==="fountain"?this.fountain(h,f):d.kind==="table"?this.table(h,f):d.kind==="bench"?this.bench(h,f,d.rot??0):d.kind==="planter"?this.plant(h,f):this.lamp(h,f,_x(d.x+d.y))}}tree(e,t){let i=new Yt,s=new ke(new kt(.62,.5,.5,10),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=new ke(new kt(.1,.16,1.6,6),this.plain("#9A653D"));r.position.y=1.2,r.castShadow=!0,i.add(r),[[0,2.5,0,1.05,"#5E9C72"],[.45,2,.2,.7,"#88B89A"],[-.4,2.15,-.25,.75,"#3F7655"]].forEach(([a,l,c,o,u])=>{let d=new ke(new Ls(o,0),new Zt({color:u,roughness:1,flatShading:!0}));d.position.set(a,l,c),d.castShadow=!0,i.add(d)}),i.position.set(e,0,t),this.scene.add(i)}fountain(e,t){let i=new Yt,s=this.plain("#F7ECD6"),r=new ke(new kt(2.25,2.35,.6,28),s);r.position.y=.3,r.castShadow=r.receiveShadow=!0,i.add(r),r.add(new Gi(new Xi(r.geometry,40),new Mi({color:7166559,transparent:!0,opacity:.5})));let a=new ke(new kt(1.95,1.95,.05,28),new Zt({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25,roughness:.4}));a.position.y=.6,i.add(a);let l=new ke(new kt(.3,.42,1.5,14),s);l.position.y=1.2,l.castShadow=!0,i.add(l);let c=new ke(new kt(.95,.5,.3,20),s);c.position.y=1.9,c.castShadow=!0,i.add(c);let o=new ke(new kt(.8,.8,.05,20),new Zt({color:"#8FC9E8",emissive:"#8FC9E8",emissiveIntensity:.25}));o.position.y=2.05,i.add(o);let u=new ke(new Ei(.22,.9,10),new Zt({color:"#DDF3FB",emissive:"#DDF3FB",emissiveIntensity:.4,transparent:!0,opacity:.85}));u.position.y=2.55,i.add(u),i.position.set(e,0,t),this.scene.add(i)}table(e,t){let i=new Yt,s=new ke(new kt(.8,.8,.08,20),this.plain("#F1C887"));s.position.y=.78,s.castShadow=s.receiveShadow=!0,i.add(s);let r=new ke(new kt(.09,.14,.78,8),this.plain("#9A653D"));r.position.y=.39,i.add(r),["#F28F7E","#8FC9E8","#A9DCC0","#B8A8DA"].forEach((a,l)=>{let c=l/4*Math.PI*2+.4,o=new ke(new kt(.22,.2,.46,10),this.plain(a));o.position.set(Math.cos(c)*1,.23,Math.sin(c)*1),o.castShadow=!0,i.add(o)}),i.position.set(e,0,t),this.scene.add(i)}bench(e,t,i){let s=new Yt;s.add(this.part(.62,.1,1.8,"#F1C887",0,.5,0)),s.add(this.part(.12,.45,1.7,"#9A653D",-.24,.25,0)),s.add(this.part(.1,.5,1.8,"#F28F7E",-.3,.8,0)),s.rotation.y=i,s.position.set(e,0,t),this.scene.add(s)}part(e,t,i,s,r,a,l){let c=new ke(new Kn(e,t,i),this.plain(s));return c.position.set(r,a,l),c.castShadow=!0,c.receiveShadow=!0,c}lamp(e,t,i){let s=new Yt,r=new ke(new kt(.05,.07,3,6),this.plain("#9A653D"));r.position.y=1.5,r.castShadow=!0,s.add(r);let a=new ke(new Ar(.34,18,12),new Zt({map:this.tex(`lan-${i}`,()=>zd(i)),emissive:i,emissiveIntensity:.3,roughness:1}));a.scale.y=1.2,a.position.y=3.2,a.castShadow=!0,s.add(a),s.position.set(e,0,t),this.scene.add(s)}plant(e,t){let i=new Yt,s=new ke(new kt(.5,.38,.5,14),this.plain("#F28F7E"));s.position.y=.25,s.castShadow=!0,i.add(s);let r=["#5E9C72","#88B89A","#3F7655","#A9DCC0"];for(let a=0;a<12;a++){let l=a/12*Math.PI*2,c=new ke(new Ei(.11,1+a%3*.25,4),this.plain(r[a%4]));c.position.set(Math.cos(l)*.26,.95,Math.sin(l)*.26),c.rotation.set(Math.sin(l)*.5,0,-Math.cos(l)*.5),c.castShadow=!0,i.add(c)}i.position.set(e,0,t),this.scene.add(i)}bunting(e,t){let i=[15896446,15382862,9423336,11132096,12101850,15377842].map(l=>new Ve(l)),s=[],r=[];for(let[l,c,o,u]of e){let d=Math.hypot(o-l,u-c),h=Math.floor(d/.9),f=(o-l)/d,g=(u-c)/d;for(let S=0;S<h;S++){let m=.45+S*.9,p=l+f*m,M=c+g*m,C=i[S%6];s.push(p-f*.22,t,M-g*.22,p+f*.22,t,M+g*.22,p,t-.5,M);for(let v=0;v<3;v++)r.push(C.r,C.g,C.b)}}let a=new Rt;a.setAttribute("position",new ot(s,3)),a.setAttribute("color",new ot(r,3)),this.scene.add(new ke(a,new dn({vertexColors:!0,side:Mn})))}buildOutside(){let e=this.scene,t=this.rep("grass",()=>Vd(),60,60),i=new ke(new Ht(480,480),this.std(t));i.rotation.x=-Math.PI/2,i.position.y=-.04,i.receiveShadow=!0,e.add(i),this.flat(this.rep("stoneP",()=>na(),2,7),7.4,28,0,44/2+14,-.02);let s=new ke(new wr(9,40),this.std(this.rep("stoneD",()=>na(),5,5)));s.rotation.x=-Math.PI/2,s.position.set(0,-.015,44/2+30),s.receiveShadow=!0,e.add(s);let r=[];for(let h=0;h<900&&r.length<190;h++){let f=(_n(h,1)-.5)*150,g=(_n(h,2)-.5)*140+8;Math.abs(f)<56/2+5&&Math.abs(g)<44/2+5||Math.abs(f)<6&&g>0||Math.hypot(f,g-(44/2+30))<11||r.push({x:f,z:g,s:.8+_n(h,3)*.9})}let a=new Ps(new Ls(1.5,0),new Zt({roughness:1,flatShading:!0}),r.length),l=new Ps(new kt(.16,.24,1.8,6),this.plain("#9A653D"),r.length),c=new nt,o=["#5E9C72","#88B89A","#3F7655","#A9DCC0","#EAB94E","#F2A79B"];r.forEach((h,f)=>{c.compose(new I(h.x,2.7*h.s,h.z),new un().setFromEuler(new On(0,_n(f,5)*6,0)),new I(h.s,h.s*1.15,h.s)),a.setMatrixAt(f,c),a.setColorAt(f,new Ve(o[_n(f,6)<.12?4+(f&1):Math.floor(_n(f,7)*4)])),c.compose(new I(h.x,.9*h.s,h.z),new un,new I(h.s,h.s,h.s)),l.setMatrixAt(f,c)}),a.castShadow=l.castShadow=!0,e.add(a,l);let u=["#F2A79B","#F4D488","#9FD0B0","#9CC3E0","#E8C39A","#C9B7E8"],d=["#C98569","#9A653D","#7C94B0","#B8604F"];for(let h=0;h<26;h++){let f=h/26*Math.PI*2+_n(h,8)*.2,g=78+_n(h,9)*18,S=Math.cos(f)*g*1.1,m=Math.sin(f)*g*.85+6;if(Math.abs(S)<8&&m>0)continue;let p=5+_n(h,10)*4,M=3.5+_n(h,11)*2.5,C=new Yt,v=new ke(new Kn(p,M,p*.9),this.plain(u[h%6]));v.position.y=M/2,v.castShadow=!0,C.add(v),v.add(new Gi(new Xi(v.geometry),new Mi({color:7166559,transparent:!0,opacity:.45})));let T=new ke(new Ei(p*.82,M*.7,4),this.plain(d[h%4]));T.position.y=M+M*.35,T.rotation.y=Math.PI/4,T.castShadow=!0,C.add(T),C.position.set(S,0,m),C.rotation.y=_n(h,12)*6,e.add(C)}for(let h=0;h<14;h++){let f=h/14*Math.PI*2+.2,g=118+_n(h,13)*30,S=14+_n(h,14)*14,m=new ke(new Ei(S*1.5,S,6),new Zt({color:["#A9CDB8","#B7D8A4","#9CC3A8"][h%3],roughness:1,flatShading:!0}));m.position.set(Math.cos(f)*g*1.15,S/2-.5,Math.sin(f)*g*.9+6),e.add(m)}}makePerson(e,t,i=ti[t.age??"hs"]){let s=new Wi(Pd(t));s.colorSpace=Ft,s.repeat.set(1/Zr,1/Yr.length),s.anisotropy=4;let r=new Rs({map:s,transparent:!0}),a=new br(r);a.center.set(.5,hh/Ws),a.scale.set($r/Jr*ef*i,Ws/Jr*ef*i,1),this.scene.add(a);let l=new ke(new Ht(1.1,.6),new dn({map:this.blobTex,transparent:!0,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.y=.02,this.scene.add(l),{id:e,look:t,sprite:a,mat:r,tex:s,blob:l,pos:new I,dir:0,frame:0,moving:!1}}reachable(){let e=new Set,t=[An.tile.y*56+An.tile.x];for(e.add(t[0]);t.length;){let i=t.pop(),s=i%56,r=Math.floor(i/56);for(let[a,l]of[[1,0],[-1,0],[0,1],[0,-1]]){let c=s+a,o=r+l,u=o*56+c;c<0||o<0||c>=56||o>=44||ii[o][c]!=="."||e.has(u)||(e.add(u),t.push(u))}}this.open=[...e].map(i=>({x:i%56,y:Math.floor(i/56)})).filter(i=>i.y<42)}buildPeople(){let e=Pn(An.tile.x+.5,An.tile.y+.5);this.students=Ys.slice(0,Kd).map((t,i)=>{let s=t.age,r=this.makePerson(t.id,t.look);r.pos.copy(e),r.sprite.visible=!1,r.blob.visible=!1,r.def=t;let a=ni[i%4];return Object.assign(r,{hidden:!0,path:[],speed:Ni(2.3,3.1)*(s==="k2"?.8:s==="g35"?.9:s==="g68"?.97:1),pending:null,lastDoor:{x:Math.floor(a.approach.x),y:Math.floor(a.approach.y)},hideOnArrive:!1,fade:1})}),this.player=this.makePerson(11,{...Ui(we.profile.avatar,11),tag:!0}),this.player.pos.copy(Pn(28,35)),this.monitor=this.makePerson(yn[0].id,yn[0].look),this.monitor.def=yn[0],this.monitor.pos.copy(Pn(10.5,18.5)),this.teacher=this.makePerson(yn[1].id,yn[1].look),this.teacher.def=yn[1],this.teacher.pos.copy(Pn(46.5,26.5)),this.walkers=[{p:this.monitor,stops:[[10,18],[46,18],[53,22],[46,26],[10,26],[2,22],[28,2]],path:[],leg:0,speed:1.15},{p:this.teacher,stops:[[46,26],[28,18],[10,26],[28,41],[53,30],[28,2],[2,10]],path:[],leg:0,speed:1}]}patrol(e,t){for(let i of this.walkers){let s=i.p;if(s.talking){s.moving=!1,s.frame=0;continue}if(!i.path.length){let o=Math.floor(s.pos.x+56/2),u=Math.floor(s.pos.z+44/2),[d,h]=i.stops[i.leg];i.leg=(i.leg+1)%i.stops.length,i.path=Vs(ii,Math.max(0,Math.min(55,o)),Math.max(0,Math.min(43,u)),d,h).map(f=>Pn(f.x+.5,f.y+.5))}let r=i.path[0];if(!r){s.moving=!1,s.frame=0;continue}let a=r.clone().sub(s.pos);a.y=0;let l=a.length(),c=i.speed*e;l<=c?(s.pos.copy(r),i.path.shift()):(a.normalize(),s.pos.addScaledVector(a,c),s.dir=this.dirFrom(a,t,s.dir)),s.moving=!0,s.frame=1+Math.floor(this.t*5)%4}}setFrame(e,t,i){e.tex.offset.set(i/Zr,1-(t+1)/Yr.length)}faceDir(e,t){let i=new I;return this.camera.getWorldDirection(i),i.y=0,i.lengthSq()<1e-4&&i.set(0,0,-1),this.dirFrom(e,i.normalize(),t)}dirFrom(e,t,i){let s=e.x*t.x+e.z*t.z,r=e.x*-t.z+e.z*t.x;return Math.hypot(s,r)<.001?i:Math.abs(s)>=Math.abs(r)?s>0?1:0:r>0?3:2}persons(){return[...this.students.filter(e=>!e.hidden),this.monitor,this.teacher]}handleTap(e,t){let i=this.renderer.domElement.getBoundingClientRect(),s=new Oe((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.ray.setFromCamera(s,this.camera);let r=this.persons(),a=this.ray.intersectObjects(r.map(o=>o.sprite).filter(o=>o.visible),!1),l=a.length?r.find(o=>o.sprite===a[0].object)??null:null;if(!l){let o=.85;for(let u of r){let d=u.pos.clone().setY(.8*ti[u.look.age??"hs"]+.2),h=this.ray.ray.distanceToPoint(d);h<o&&(o=h,l=u)}}if(l){this.onTap(l);return}this.onTap(null);let c=new I;this.view!=="first"&&this.ray.ray.intersectPlane(new hn(new I(0,1,0),0),c)&&this.walkToPoint(c.x+56/2,c.z+44/2,"that spot")}walkToPoint(e,t,i="there"){if(this.inputLocked)return!1;let s=null,r=1e9,a=Math.floor(e),l=Math.floor(t);for(let c=-2;c<=2;c++)for(let o=-2;o<=2;o++){let u=a+o,d=l+c;if(u<0||d<0||u>=56||d>=44||ii[d][u]!==".")continue;let h=Math.hypot(u+.5-e,d+.5-t);h<r&&(r=h,s={x:u,y:d})}return!s||r>2.2?!1:this.planNav(s.x+.5,s.y+.5,i,null)}setAvatar(e){let t=this.player,i=t.pos.clone();this.scene.remove(t.sprite,t.blob),t.tex.dispose(),t.mat.dispose(),this.player=this.makePerson(11,{...Ui(e,11),tag:!0}),this.player.pos.copy(i),this.player.dir=t.dir,this.player.def=void 0}placeAtDoor(e){let t=e==="news"?{approach:Fi.approach,subject:"news"}:ni.find(i=>i.subject===e)??ni[0];this.player.pos.copy(Pn(t.approach.x,t.approach.y)),this.inDoor=t.subject,this.nav=null,this.navLabel="",this.onToast("")}clear(e,t){let i=Math.ceil(e.distanceTo(t)/.25);for(let s=1;s<i;s++){let r=e.clone().lerp(t,s/i);if(wl(r.x+56/2,r.z+44/2,.3))return!1}return!0}goTo(e){let t=ni.find(a=>a.subject===e),i=t?t.approach:e==="news"?Fi.approach:e==="plaza"?{x:28,y:18.8}:{x:28,y:41.5},s=t?`${Cl[t.subject]} classroom`:e==="news"?"the newsroom":e==="plaza"?"the plaza fountain":"the main entrance",r=t?Pn(t.cx,t.cy+(t.face==="S"?.5:-.5)):e==="news"?Pn(Fi.cx,.95):null;this.planNav(i.x,i.y,s,r)&&this.inDoor===(t?.subject??(e==="news"?"news":null))&&(this.inDoor=null)}planNav(e,t,i,s){let r=this.player.pos,a=Math.max(0,Math.min(55,Math.floor(r.x+56/2))),l=Math.max(0,Math.min(43,Math.floor(r.z+44/2))),c=Vs(ii,a,l,Math.floor(e),Math.floor(t));if(!c.length&&!(a===Math.floor(e)&&l===Math.floor(t)))return this.onToast("No path found from here"),!1;let o=[r.clone().setY(0),...c.slice(0,-1).map(d=>Pn(d.x+.5,d.y+.5)),Pn(e,t)],u=[];for(let d=0;d<o.length-1;){let h=o.length-1;for(;h>d+1&&!this.clear(o[d],o[h]);)h--;u.push(o[h]),d=h}return s&&u.push(s),this.nav={pts:u,label:i},this.navLabel=i,i!=="that spot"&&i!=="there"&&this.onToast(`Walking to ${i}\u2026 (move to cancel)`),!0}cancelNav(){this.nav&&(this.nav=null,this.navLabel="",this.onToast(""))}get walking(){return!!this.nav}enterDoor(e){this.inDoor=e,this.nav=null,this.navLabel="";let t=Ld.indexOf(e),i=Hn[Math.max(0,this.idx)].swap?1:0,s=e==="news"?[]:this.students.filter((r,a)=>(a+i)%4===t).map(r=>r.def.id);parent!==window?parent.postMessage({type:"unify:enter",subject:e,room:e,attendees:s},"*"):this.onToast(`${e==="news"?"Newsroom":Cl[e]+" auditorium"}: open index.html to go inside`)}enterPeriod(e){let t=Hn[e],i=ch(this.open),s=An.tile,r={x:Math.floor(this.player.pos.x+56/2),y:Math.floor(this.player.pos.z+44/2)},a=ch(this.open.filter(c=>Math.hypot(c.x-r.x,c.y-r.y)<=3.6&&Math.hypot(c.x-r.x,c.y-r.y)>=1.2)),l=0;this.students.forEach((c,o)=>{if(t.kind==="class"){let u=ni[(o+(t.swap?1:0))%4],d={x:Math.floor(u.approach.x),y:Math.floor(u.approach.y)};c.lastDoor=d,c.pending={delay:Ni(0,8),dest:d,hide:!0}}else if(t.kind==="lunch"){let u=c.def&&we.peek(c.def.id)?.lunchBuddy&&a[l];c.pending={delay:Ni(0,10),dest:u?a[l++]:i[o],hide:!1,appear:c.hidden?c.lastDoor:void 0}}else t.kind==="arrive"?(c.hidden=!0,c.sprite.visible=!1,c.blob.visible=!1,c.path=[],c.pending={delay:Ni(0,20),dest:i[o],hide:!1,appear:s}):c.pending={delay:Ni(0,12),dest:s,hide:!0,appear:c.hidden?c.lastDoor:void 0}})}begin(e){let t=e.pending;e.pending=null,t.appear&&(e.pos.copy(Pn(t.appear.x+.5,t.appear.y+.5)),e.hidden=!1,e.sprite.visible=!0,e.blob.visible=!0,e.fade=0,e.mat.opacity=0);let i=Math.min(55,Math.max(0,Math.floor(e.pos.x+56/2))),s=Math.min(43,Math.max(0,Math.floor(e.pos.z+44/2)));e.path=Vs(ii,i,s,t.dest.x,t.dest.y).map(r=>Pn(r.x+.5,r.y+.5)),e.hideOnArrive=t.hide,e.moving=e.path.length>0,!e.path.length&&t.hide&&(e.hidden=!0,e.sprite.visible=!1,e.blob.visible=!1)}movePlayer(e,t){let i=this.keys,s=(i.d||i.arrowright?1:0)-(i.a||i.arrowleft?1:0)+this.input.x,r=(i.s||i.arrowdown?1:0)-(i.w||i.arrowup?1:0)+this.input.y,a=this.player,l=Math.sin(this.yaw),c=Math.cos(this.yaw),o=!this.inputLocked&&Math.hypot(s,r)>.1;if(o&&this.nav&&this.cancelNav(),o){let f=new I(c*s+l*r,0,-l*s+c*r).normalize().multiplyScalar(4*e);a.moving=!0;let g=a.pos.x+56/2,S=a.pos.z+44/2;wl(g+f.x,S)||(a.pos.x+=f.x),wl(a.pos.x+56/2,S+f.z)||(a.pos.z+=f.z),a.dir=this.dirFrom(f,t,a.dir),a.frame=1+Math.floor(this.t*9)%4}else if(this.nav){let f=this.nav.pts[0],g=f.clone().sub(a.pos);g.y=0;let S=g.length(),m=4.6*e;if(a.moving=!0,S<=m){if(a.pos.copy(f),this.nav.pts.shift(),!this.nav.pts.length){let p=this.nav.label;this.nav=null,this.navLabel="",[...ni,Fi].some(M=>Ji(M.trigger,a.pos.x+56/2,a.pos.z+44/2))||this.onToast(`Arrived at ${p}`)}}else g.normalize(),a.pos.addScaledVector(g,m),a.dir=this.dirFrom(g,t,a.dir);a.frame=1+Math.floor(this.t*9)%4}else a.moving=!1,a.frame=0;let u=a.pos.x+56/2,d=a.pos.z+44/2,h=ni.find(f=>Ji(f.trigger,u,d))??(Ji(Fi.trigger,u,d)?{subject:"news"}:void 0);if(h&&this.inDoor!==h.subject)this.enterDoor(h.subject);else if(!h&&this.inDoor){let f=this.inDoor==="news"?Fi.trigger:ni.find(S=>S.subject===this.inDoor).trigger;Math.hypot(Math.max(f.x-u,0,u-f.x-f.w),Math.max(f.y-d,0,d-f.y-f.h))>.35&&(this.inDoor=null)}}setView(e,t=!1){this.view=e,this.zoom=1,e==="overview"?this.pitch=1:e==="close"&&(this.pitch=.62),this.fpitch=0,t&&this.updateCamera(1,!0)}cycleView(){return this.setView(this.view==="close"?"overview":this.view==="overview"?"first":"close"),this.view}updateCamera(e,t=!1){let i=this.player.pos,s=Math.sin(this.yaw),r=Math.cos(this.yaw),a,l;if(this.view==="close"){let d=8.6*this.zoom,h=Math.cos(this.pitch);a=new I(i.x+s*h*d,1+Math.sin(this.pitch)*d,i.z+r*h*d),l=new I(i.x-s*1.8,1,i.z-r*1.8)}else if(this.view==="overview"){let d=52*this.zoom,h=Math.cos(this.pitch);a=new I(s*h*d,Math.sin(this.pitch)*d,r*h*d+3),l=new I(0,0,3)}else a=new I(i.x,1.55,i.z),l=new I(i.x-s*6,1.55+Math.tan(this.fpitch)*6,i.z-r*6);let c=t?1:Math.min(1,e*9);this.camPos.lerp(a,c),this.camLook.lerp(l,c),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);let o=this.view==="overview"?40:22,u=this.view==="overview"?new I(0,0,3):i;if(this.sun.target.position.copy(u),this.sun.position.set(u.x+7,15,u.z+9),o!==this.shadowR){this.shadowR=o;let d=this.sun.shadow.camera;d.left=-o,d.right=o,d.top=o,d.bottom=-o,d.updateProjectionMatrix()}}fadeOccluders(e){let t=this.camera.position,i=this.player.pos.clone().setY(1),s=i.clone().sub(t),r=s.length(),a=new Si(t,s.normalize()),l=new I;for(let c of this.occl){let o=this.view!=="first"&&!!a.intersectBox(c.box,l)&&l.distanceTo(t)<r-.2,u=o?.16:1;c.o+=(u-c.o)*Math.min(1,e*9);let d=c.o>.985;for(let h of c.mats)h.opacity=d?1:c.o,h.transparent=!d,h.depthWrite=d}}},xx=["#F8D977","#F28F7E","#8FC9E8","#A9DCC0"],_x=n=>xx[Math.floor(n)%4];var sf=n=>n==="k2"||n==="g35"?"young":n==="g68"?"mid":"teen",vx=(n,e)=>{n=n.slice();for(let t=n.length-1;t>0;t--){let i=Math.floor(e()*(t+1));[n[t],n[i]]=[n[i],n[t]]}return n},ha=(n,e,t,i,s,r,a)=>{let l=vx([t,...i.slice(0,2)],s);return{subject:n,q:e,options:l,answer:l.indexOf(t),why:r,hint:a}};function bx(n,e){let t=sf(n),i=(c,o)=>c+Math.floor(e()*(o-c+1)),s=c=>{let o=new Set;for(;o.size<2;){let u=c+i(-4,4);u!==c&&o.add(u)}return[...o].map(String)};if(n==="k2"){let c=i(1,9),o=i(1,9);return ha("math",`What is ${c} + ${o}?`,String(c+o),s(c+o),e,`${c} plus ${o} is ${c+o}.`,"Count up from the bigger number.")}if(n==="g35"){let c=i(3,9),o=i(3,9);return ha("math",`What is ${c} x ${o}?`,String(c*o),s(c*o),e,`${c} groups of ${o} is ${c*o}.`,"Try skip counting.")}if(t==="mid"){let c=i(2,12),o=i(2,9),u=i(1,9);return ha("math",`What is ${c} x ${o} + ${u}?`,String(c*o+u),s(c*o+u),e,`Multiply first: ${c*o}, then add ${u}.`,"Order of operations: multiply before adding.")}let r=i(2,6),a=i(2,9),l=i(1,9);return ha("math",`Solve for x: ${r}x + ${l} = ${r*a+l}`,String(a),s(a),e,`Subtract ${l}, then divide by ${r}: x = ${a}.`,"Undo the + first, then undo the multiplication.")}var Sx={young:[["Which word is a noun?","puppy",["quickly","jump"]],["What is the opposite of 'hot'?","cold",["warm","red"]],["Which word rhymes with 'cat'?","hat",["dog","cup"]],["What punctuation ends a question?","?",[".","!"]],["Which is a complete sentence?","The dog ran.",["The big dog.","Ran fast."]],["Which word starts with a capital letter?","Monday",["tuesday","apple"],"Days of the week are capitalized."]],mid:[["Which word is an adverb?","slowly",["quiet","table"]],["'Brave' is a synonym for...","courageous",["afraid","tired"]],["What is the plural of 'mouse'?","mice",["mouses","meese"]],["A word that sounds the same but means something else is a...","homophone",["synonym","antonym"]],["Which sentence uses a metaphor?","Time is a thief.",["He ran like the wind.","The bus is late."]],["What is the main idea?","The big point of a text",["A small detail","The title font"]]],teen:[["What is a theme?","The central message of a story",["The main character","The setting"]],["Which is a primary source?","A diary written at the time",["A textbook summary","A movie about it"]],["What does 'foreshadowing' do?","Hints at later events",["Describes the setting","Ends the story"]],["Which word is an antonym of 'verbose'?","concise",["wordy","loud"]],["Which device is 'The wind whispered'?","Personification",["Simile","Hyperbole"]],["A thesis statement...","states your main argument",["lists your sources","ends the paper"]]]},Mx={young:[["What do plants need to grow?","sunlight and water",["only candy","darkness"]],["Which is a solid?","ice",["steam","rain"]],["What is the big star in our sky by day?","the Sun",["the Moon","a planet"]],["Which animal is a mammal?","dolphin",["shark","trout"]],["What do we use our ears for?","hearing",["seeing","smelling"]],["How many legs does an insect have?","6",["8","4"]]],mid:[["What gas do plants take in?","carbon dioxide",["oxygen","helium"]],["What is the center of an atom called?","nucleus",["orbit","cell"]],["Which planet is closest to the Sun?","Mercury",["Venus","Mars"]],["Water boils at...","100 C",["50 C","0 C"]],["The powerhouse of the cell is the...","mitochondria",["nucleus","wall"]],["A hypothesis is...","a testable guess",["a final answer","a graph"]]],teen:[["What is the unit of force?","newton",["joule","watt"]],["DNA stands for...","deoxyribonucleic acid",["dynamic nuclear acid","double nitrogen atom"]],["Which is a chemical change?","rusting iron",["melting ice","tearing paper"]],["What does a catalyst do?","speeds up a reaction",["stops a reaction","adds mass"]],["Which wave needs a medium?","sound",["light","radio"]],["Natural selection favors...","traits that help survival",["the largest animals","the oldest animals"]]]},Tx={young:[["What do we call a map's key?","legend",["story","title"]],["Who was the first U.S. president?","George Washington",["Abraham Lincoln","Benjamin Franklin"]],["Which is a continent?","Africa",["Texas","Pacific"]],["Long ago, people wrote with...","quill pens",["keyboards","tablets"]],["A community helper who fights fires is a...","firefighter",["baker","pilot"]],["What is a holiday for remembering history called?","a memorial day",["a snow day","a field trip"]]],mid:[["Ancient Egyptians built...","pyramids",["castles","skyscrapers"]],["What was the Silk Road?","a trade route",["a fabric","a river"]],["The printing press helped spread...","ideas and books",["weather news","ocean maps"]],["Which river was central to Egypt?","the Nile",["the Amazon","the Thames"]],["The Renaissance began in...","Italy",["Brazil","Japan"]],["A government where people vote is a...","democracy",["monarchy","empire"]]],teen:[["What did the Industrial Revolution change?","how goods were made",["the alphabet","the calendar"]],["The Magna Carta limited the power of...","the king",["the church","merchants"]],["Which event began in 1914?","World War I",["World War II","the Civil War"]],["What is a primary cause of the Cold War?","a clash of ideologies",["a flood","a gold rush"]],["The Constitution begins with...","We the People",["I the President","In God We Trust"]],["Which ancient civilization created democracy?","Athens",["Rome","Persia"]]]},nf={ela:Sx,science:Mx,history:Tx};function rf(n,e,t=Math.random){if(n==="math")return bx(e,t);let i=sf(e),s=nf[n][i][Math.floor(t()*nf[n][i].length)];return ha(n,s[0],s[1],s[2],t,s[3])}var bt=(n,e)=>e[Math.floor(n()*e.length)],Vt=n=>n.charAt(0).toUpperCase()+n.slice(1),In={math:"math",ela:"reading and writing",science:"science",history:"history"},Ex=["soccer","drawing","video games","reading","baking","music","dancing","robots","swimming","chess","skateboarding","gardening","photography","basketball"],wx=["pizza","tacos","pasta","sushi","pancakes","fried rice","burgers","dumplings"],Ax=[["Why did the student eat their homework?","Because the teacher said it was a piece of cake!"],["What do you call a sleeping bull?","A bulldozer!"],["Why was the math book sad?","It had too many problems."],["What did the ocean say to the beach?","Nothing, it just waved."],["Why can't you trust atoms?","They make up everything!"],["What has hands but can't clap?","A clock!"],["Why did the scarecrow win an award?","He was outstanding in his field."],["What kind of tree fits in your hand?","A palm tree!"],["Why do bees have sticky hair?","Because they use honeycombs."],["What do you call cheese that isn't yours?","Nacho cheese!"]],Ks={cheerful:{yes:["Yay!","Oh, totally!","Ooh!"],hm:["Hmm, let's see!","Good question!"],wow:["No way, that's awesome!","I love that!"],bye:["See you soon!","Bye bye, have a sunny day!"]},shy:{yes:["Um, yeah.","...Okay."],hm:["Uh... I think...","Hmm, um..."],wow:["Oh! Really? That's... nice.","Wow. Um, cool."],bye:["Um, bye.","Okay... see you."]},sporty:{yes:["Yep!","Heck yeah!"],hm:["Okay, huddle up.","Let me think, coach mode."],wow:["Let's gooo!","That's a W!"],bye:["Catch you on the field!","Hustle, hustle!"]},nerdy:{yes:["Correct.","Indeed."],hm:["Technically speaking,","Fun fact:"],wow:["Fascinating!","That's statistically cool."],bye:["Until next time. Cite your sources.","Farewell!"]},artsy:{yes:["Mm, yes.","Beautiful."],hm:["Let me paint you a picture...","Hmm, imagine this:"],wow:["That's so inspiring!","Oh, the colors in that!"],bye:["Stay colorful!","Goodbye, friend, go make something."]},funny:{yes:["Ha! Yes.","You bet."],hm:["Okay, hear me out.","So, plot twist:"],wow:["Shut the front door!","Okay that's actually hilarious."],bye:["I'd say 'break a leg' but we have PE next.","Later, alligator!"]},curious:{yes:["Ooh, yes!","Wait, really?"],hm:["Hmm, why though?","I wonder..."],wow:["Tell me more!","That is so interesting!"],bye:["I have so many more questions! Bye!","See you! Don't forget to ask 'why'."]},bossy:{yes:["Obviously.","Correct."],hm:["Listen.","Here's the plan:"],wow:["Good. I approve.","Not bad. Not bad at all."],bye:["Don't be late.","Dismissed! ...kidding. Mostly."]},dreamy:{yes:["Mm, yes...","Oh, yes."],hm:["I was just wondering...","Hmm, imagine..."],wow:["Ooh, that's like a story.","That sounds magical."],bye:["Goodbye... see you in the clouds.","Bye. I'll daydream about it."]},kind:{yes:["Of course!","Happy to!"],hm:["Let me think about it.","Good thought."],wow:["That's wonderful!","I'm so glad."],bye:["Take care of yourself!","Bye! I'm rooting for you."]}},af=(n,e)=>{let t=aa(n.spec).filter(i=>i.key!=="shoes");return bt(e,t)},Cx={how:"how our day was going",class:"school subjects",hobby:"hobbies",you:"each other's stories",food:"food",gossip:"the latest hallway news",joke:"a joke",help:"studying",quiz:"a quiz question",compliment:"style",invite:"hanging out"},Pl=class{constructor(e,t){this.npc=e;this.ctx=t;this.used=new Set;this.turns=0;this.history=[];this.waiting=null;this.r=di(e.id*977+Math.floor(Date.now()/6e4))}get feat(){return this._feat??(this._feat=af(this.npc,di(this.npc.id*13+5)))}get mem(){return we.mem(this.npc.id)}get me(){return we.profile.name||"friend"}v(e,t={}){let i=this.npc,s=this.mem,r={me:this.me,first:i.first,grade:i.grade,hobby:s.facts.hobby??"",interest:i.interests[0],food:i.food,dream:i.dream,...t};return e.replace(/\{(\w+)\}/g,(a,l)=>r[l]??"")}pc(e){return this.v(e[this.npc.personality]??e.d)}flavor(e,t=.33){return this.r()<t?`${bt(this.r,Ks[this.npc.personality].yes)} ${e}`:e}reply(e,t={}){let i={text:e,options:t.options??this.menu(),mood:t.mood??"happy",delta:t.delta??0,end:t.end,quiz:t.quiz};return this.turns++,this.history.push({who:"npc",text:e}),Qi(this.npc.id,"npc",e),i.delta&&Th(this.npc.id,i.delta),i}note(e){this.used.add(e),we.edit(this.npc.id,t=>{t.topics.push(e),t.topics.length>24&&t.topics.shift(),t.lastDay=la(),t.lastAt=Date.now()})}greet(){let e=this.npc,t=this.mem,i=!t.met,s=Date.now()-t.lastAt,r=t.lastDay&&t.lastDay!==la()?Math.max(1,Math.round((Date.parse(la())-Date.parse(t.lastDay))/864e5)):0,a=this.me,l,c="happy",o=0,u=af(e,this.r).phrase;if(i)l=this.pc({cheerful:`Hi hi! I'm ${e.first}! I'm in grade ${e.grade}. Are you new here? I love your ${aa(we.profile.avatar).find(d=>d.key==="top")?.phrase??"style"}!`,shy:`Oh! Um... hi. I'm ${e.first}. ...Are you ${a}?`,sporty:`Hey! I'm ${e.first}. You look fast. You play anything?`,nerdy:`Hello. I'm ${e.first}, grade ${e.grade}. Did you know this hall has exactly 44 rows of tiles? ...Sorry. Hi.`,artsy:`Hi! I'm ${e.first}. I love the colors you're wearing. Is that on purpose?`,funny:`Hey, I'm ${e.first}. Don't worry, I'm funnier than I look.`,curious:`Hi! I'm ${e.first}! Wait, who are you? What do you like? Tell me everything!`,bossy:`Hi. I'm ${e.first}. I run the ${e.interests[0]} club. You should join.`,dreamy:`Oh... hi. I'm ${e.first}. I was just imagining we were all on a ship. Welcome aboard.`,kind:`Hi there! I'm ${e.first}. Welcome! Can I help you find anything?`,d:`Hi! I'm ${e.first}.`}),we.profile.name&&(l+=` Nice to meet you, ${a}!`),we.edit(e.id,d=>{d.met=!0,d.fr=Math.max(d.fr,2)}),we.profile.stats.talks++,o=1,c=e.personality==="shy"?"shy":"happy";else if(t.hurt>=2&&t.fr<12)l=this.pc({d:"Oh. Hi.",funny:"Oh. It's you. Hi, I guess.",kind:"Hi. I'm still a bit upset, but hi."}),c="annoyed";else{let d=ji(t.fr),h=d==="best friend"?`There you are, ${a}! My favorite person!`:d==="close friend"?`${a}! I was hoping I'd see you!`:d==="friend"?`Hey ${a}!`:`Hi again, ${a}.`,f="";s<8*6e4&&t.lastAt?f=bt(this.r,["Back so soon?","Missed me already?","Did you forget something?"]):t.lunchBuddy&&this.ctx.kind==="lunch"?f="Still on for lunch together?":t.facts.hobby&&this.r()<.6?f=`How's ${t.facts.hobby} going?`:t.facts.mood&&["sad","tired","nervous","stressed","worried","lonely"].includes(t.facts.mood)&&this.r()<.8?f=`Are you feeling less ${t.facts.mood} than last time?`:t.quiz.total>0&&this.r()<.5?f=t.quiz.right>=t.quiz.total/2?"You were so good at that quiz stuff last time.":"Want another try at those quiz questions?":t.topics.length?f=`Last time we talked about ${Cx[t.topics[t.topics.length-1]]??"stuff"}. That was fun.`:f="";let g=this.ctx.place==="class"?bt(this.r,["Shh! Whisper, the teacher is right there.","Psst, quietly!","Hi! Quick, before she looks over."]):r>=2?`It's been ${r} days!`:this.ctx.kind==="arrive"?bt(this.r,["Morning already!","Ready for today?"]):this.ctx.kind==="lunch"?bt(this.r,["I'm starving.","Lunch smells good today."]):this.ctx.kind==="dismiss"?"Almost time to go home!":this.ctx.kind==="class"?"Shouldn't we both be in class? ...I won't tell.":"";l=`${h} ${f||g}`.trim(),o=r?1:0,we.profile.stats.talks++}return we.edit(e.id,d=>{d.lastDay=la(),d.lastAt=Date.now(),d.talks++}),this.reply(l,{mood:c,delta:o,options:this.menu()})}menu(){let e=this.npc,t=this.mem,i=[],s=(l,c)=>{i.length<5&&i.push({id:l,label:c})},a=[["how","How's your day going?",!0],["hobby","What do you do for fun?",!0],["class","What's your favorite subject?",!0],["you","Tell me about yourself",!0],["quiz","Quiz me!",e.personality==="nerdy"||e.personality==="curious"||t.fr>=10],["gossip","Heard anything interesting?",t.fr>=8],["compliment",`I like your ${this.feat.noun}`,!0],["food","What's your favorite food?",!0],["joke","Tell me a joke",e.personality==="funny"||t.fr>=6],["help","Can you help me study?",t.fr>=6],["invite","Want to eat lunch together?",t.fr>=12&&!t.lunchBuddy],["advice","I need some advice",t.fr>=15]].filter(([l,,c])=>c&&!this.used.has(l));return a.sort((l,c)=>(t.topics.lastIndexOf(l[0])+1||-1)-(t.topics.lastIndexOf(c[0])+1||-1)),a.slice(0,4).forEach(([l,c])=>s(l,c)),i.push({id:"bye",label:"See you later"}),i}back(e=[]){return[...e,...this.menu().filter(t=>!e.some(i=>i.id===t.id))].slice(0,5)}choose(e,t){let i=this.npc,s=this.mem,r=this.r,a=Ks[i.personality],l=!this.used.has(e),c=o=>l?o:0;if(e.startsWith("ans"))return this.answer(Number(e.slice(3)));switch(this.history.push({who:"me",text:this.optLabel(e,t)}),Qi(i.id,"me",this.optLabel(e,t)),e!=="hobby_pick"&&e!=="food_pick"&&e!=="fav_pick"&&e!=="feel"&&this.note(e),e){case"bye":return this.reply(this.v(`${bt(r,a.bye)} ${s.fr>=30?"Come find me later, "+this.me+"!":""}`).trim(),{end:!0,options:[]});case"how":{let o=this.ctx.kind==="arrive"?this.pc({cheerful:"Great! The bus was only a little loud today.",shy:"Okay... a little nervous about class, honestly.",sporty:"Pumped! I jogged here.",nerdy:"Productive. I reviewed my notes on the bus.",artsy:"Inspired! The light in this hallway is gorgeous.",funny:"Surviving! Barely. Breakfast was just a banana peel and hope.",curious:"So good! I've already asked three questions today.",bossy:"Busy. I've got a schedule to keep.",dreamy:"Floaty. I woke up from a really good dream.",kind:"Good! How about you?",d:"Pretty good!"}):this.pc({cheerful:"Awesome! How are you?",shy:"Fine... thanks for asking.",sporty:"Great, I've got practice later!",nerdy:"Well, my pencil snapped, but otherwise fine.",artsy:"Creative. I sketched a bird during snack.",funny:"My day is like a sandwich: mostly bread.",curious:"Curious as ever. And you?",bossy:"Efficient. And you?",dreamy:"Drifty, but nice.",kind:"I'm good, thank you! How are you doing?",d:"Good! You?"});return this.reply(`${o}`,{delta:c(1),options:[{id:"feel",label:"I'm doing great",data:"great"},{id:"feel",label:"A little tired",data:"tired"},{id:"feel",label:"Kind of nervous",data:"nervous"},{id:"feel",label:"Sort of sad",data:"sad"}]})}case"feel":{let o=String(t);we.learn("mood",o),we.edit(i.id,d=>{d.facts.mood=o});let u=o==="great"?this.flavor(bt(r,["That's awesome, it's contagious!","Love that energy!","Good! Keep it going!"])):o==="tired"?this.pc({cheerful:"Aw, me too sometimes. Have some water and a snack!",shy:"Me too... maybe we can both sit quietly for a second.",sporty:"Shake it out! A few jumping jacks and you'll be good.",nerdy:"Sleep is scientifically important. Try going to bed earlier.",d:"Hang in there. Maybe a snack at lunch will help?"}):o==="nervous"?this.pc({cheerful:"You've totally got this! I believe in you!",shy:"Oh. I get nervous too. We can be nervous together.",sporty:"Deep breath. Treat it like the big game, you've trained for this.",nerdy:"Statistically, most of the things we worry about don't happen.",d:"It's okay to feel that way. One step at a time."}):this.pc({kind:"I'm sorry. Do you want to sit together for a bit? I'll listen.",funny:"Aw. Okay, emergency compliment: your whole vibe is great.",d:"I'm sorry you're sad. I'm here if you want to talk."});return this.reply(u,{delta:c(2)+1,mood:o==="sad"?"sad":"happy",options:this.back()})}case"class":{let o=i.favSubject,u=i.hardSubject,d={math:"numbers always make sense",ela:"stories take me places",science:"I get to find out how things work",history:"the past is full of surprises"}[o];return this.reply(this.v(`I love ${In[o]}. ${Vt(d)}. ${In[u]===In[o]?"":`${Vt(In[u])} is harder for me, though.`} What's yours?`),{delta:c(1),mood:"happy",options:["math","ela","science","history"].map(h=>({id:"fav_pick",label:Vt(In[h]),data:h})).concat([{id:"back",label:"Not sure yet",data:""}])})}case"fav_pick":{let o=t;we.learn("favSubject",o),we.edit(i.id,d=>{d.facts.favSubject=o});let u=o===i.favSubject;return this.reply(u?this.v(`No way, ${In[o]} is my favorite too! We should study together sometime.`):o===i.hardSubject?this.v(`Really? ${Vt(In[o])} is tough for me. Maybe you could help me!`):this.v(`${Vt(In[o])}, nice! I'd like to hear more about that.`),{delta:u?4:2,mood:u?"excited":"happy",options:this.back()})}case"back":return this.reply(this.flavor("Okay! What else?"),{options:this.menu()});case"hobby":{let o=i.interests[0],u={soccer:"I practice every day after school.",chess:"I'm working on a new opening.",baking:"Yesterday I made lemon cookies.","robotics club":"We're building a robot that picks up balls.",dinosaurs:"My favorite is the Triceratops!",drawing:"I fill a notebook every week."}[o]??`I could talk about ${o} all day.`;return this.waiting="hobby",this.reply(this.v(`I'm really into ${o}. ${u} I also like ${i.interests[1]}. What about you?`),{delta:c(1),options:[...[i.interests[0],...Ex.filter(d=>!i.interests.includes(d)).slice(0,3),"something else"].map(d=>({id:"hobby_pick",label:Vt(d),data:d}))]})}case"hobby_pick":{let o=String(t).toLowerCase();if(this.waiting=null,o==="something else")return this.reply(this.flavor("Ooh, tell me what it is! Just type it below."),{options:this.menu(),mood:"excited"});we.learn("hobby",o),we.edit(i.id,d=>{d.facts.hobby=o});let u=i.interests.some(d=>d.includes(o)||o.includes(d));return this.reply(u?this.v(`No way, we like the same thing! ${bt(r,a.wow)} We should do ${o} together sometime.`):this.v(`${Vt(o)}? Cool! ${bt(r,a.wow)} I've never really tried it. Maybe you can show me.`),{delta:u?5:2,mood:u?"excited":"happy",options:this.menu()})}case"you":{let o=ji(s.fr),u=s.talks,d=o==="new face"?i.bio:o==="classmate"?`I live with ${i.pet??"my family"}${i.pet?"":", it's pretty loud"}, and I could eat ${i.food} every day.`:o==="friend"?`Someday I want to ${i.dream}. I haven't told many people that.`:o==="close friend"?`Okay, a secret: I ${i.quirk}. Everyone's noticed, I think.`:`You're my best friend, so... I ${i.secret}. Please don't tell.`;return this.reply(this.v(d),{delta:c(o==="new face"?1:2)+(u%3===0,0),mood:o==="best friend"?"shy":"happy"})}case"food":return this.waiting="food",this.reply(this.v(`Easy: ${i.food}! What's yours?`),{delta:c(1),options:[...wx.slice(0,4).map(o=>({id:"food_pick",label:Vt(o),data:o})),{id:"food_pick",label:Vt(i.food),data:i.food}].slice(0,5)});case"food_pick":{let o=String(t);return we.learn("food",o),we.edit(i.id,u=>{u.facts.food=o}),this.waiting=null,this.reply(o===i.food?this.v(`${Vt(o)}! We have the same taste. Today's lunch better be good.`):this.v(`${Vt(o)} is good too. I'd trade you some ${i.food} for it.`),{delta:o===i.food?4:1,mood:o===i.food?"excited":"happy",options:this.menu()})}case"gossip":return this.gossip(l);case"compliment":{let o=this.feat,u=this.pc({shy:`Oh! Um... thank you. I picked my ${o.phrase} myself.`,cheerful:`Aww, thanks! I love my ${o.phrase} too!`,artsy:`Thank you! My ${o.phrase} is part of my whole look.`,sporty:"Ha, thanks! Gotta look good when we win.",funny:`Thanks! My ${o.noun} has been told it's the best part of me.`,d:`Thanks! That's sweet. I like my ${o.phrase} too.`});return this.reply(u,{delta:c(3),mood:i.personality==="shy"?"shy":"happy"})}case"joke":{let[o,u]=bt(r,Ax),d=i.personality==="funny"?"Oh, I have SO many. ":i.personality==="shy"?"Um, okay... ":"";return this.reply(`${d}${o} ... ${u}`,{delta:c(2),mood:"excited",options:[{id:"laugh",label:"Ha! Good one"},{id:"groan",label:"*groan*"},...this.back().slice(0,3)]})}case"laugh":return this.reply(this.flavor(bt(r,["I'm here all week!","I knew you'd get it.","That one never fails."])),{delta:2,mood:"excited"});case"groan":return this.reply(this.pc({funny:"Groans are the sound of success.",d:"Hey, comedy is hard!"}),{delta:0});case"help":{if(i.hardSubject&&this.r()<.5&&i.personality!=="nerdy"&&s.fr<30){let o=Zs(i.bestFriend);return this.reply(this.v(`I'm better at ${In[i.favSubject]}. If you need ${In[i.hardSubject]}, ask ${o?.first??"Ms. Brown"}. Want me to quiz you on ${In[i.favSubject]} instead?`),{delta:c(1),options:[{id:"quiz",label:"Sure, quiz me"},...this.back().slice(0,3)]})}return this.choose("quiz")}case"quiz":{let o=we.profile.avatar.age,u=r()<.7?i.favSubject:["math","ela","science","history"][Math.floor(r()*4)];return this.quiz=rf(u,o,r),this.waiting="quiz",this.reply(this.v(`Okay, ${In[u]} time! ${this.quiz.q}`),{delta:0,mood:"excited",quiz:this.quiz,options:this.quiz.options.map((d,h)=>({id:`ans${h}`,label:d}))})}case"invite":{let o=i.personality==="shy"?25:12;return s.fr>=o?(we.edit(i.id,u=>{u.lunchBuddy=!0}),this.reply(this.pc({shy:"Really? Um... yes. I'd like that.",d:`Yes! I'll save you a seat at lunch. ${i.food[0].toUpperCase()+i.food.slice(1)} for both of us!`}),{delta:4,mood:"excited",options:this.back()})):this.reply(this.pc({shy:"Um... maybe after we know each other better? Sorry.",d:"Maybe soon! Let's hang out a bit more first."}),{delta:0,mood:"shy",options:this.back()})}case"advice":{let o=this.pc({cheerful:"Smile at three people today. It really works.",shy:"Taking a deep breath before talking helps me. And writing notes.",sporty:"Warm up before big things. Even a test.",nerdy:"Make a study schedule. Fifteen minutes a day beats a panic night before.",artsy:"Doodle when you feel stuck. Your brain loosens up.",funny:"If all else fails, laugh at it. Then try again.",curious:"Ask more questions. Nobody minds, honestly.",bossy:"Make a list. Do the hardest thing first.",dreamy:"Look out a window for a minute. Then you'll know what to do.",kind:"Be gentle with yourself. And ask for help, it's brave.",d:"Take it one step at a time."});return this.reply(o,{delta:c(2),options:this.back()})}case"chatter_pick":return this.reply("Okay!",{options:this.menu()});default:return this.reply(this.flavor("Hm, I'm not sure what to say to that."),{options:this.menu(),mood:"neutral"})}}optLabel(e,t){return typeof t=="string"&&t?Vt(t):this.menu().find(i=>i.id===e)?.label??e}answer(e){let t=this.quiz,i=this.npc;this.quiz=void 0,this.waiting=null;let s=e===t.answer;return we.edit(i.id,r=>{r.quiz.total++,s&&(r.quiz.right++,r.helped++)}),we.profile.stats.quizTotal++,s&&we.profile.stats.quizRight++,we.save(),this.history.push({who:"me",text:t.options[e]??"..."}),Qi(i.id,"me",t.options[e]??"..."),s?this.reply(this.v(`${bt(this.r,Ks[i.personality].wow)} Yes, "${t.options[t.answer]}"! ${t.why??""}`),{delta:3,mood:"excited",options:[{id:"quiz",label:"Another one!"},...this.menu().slice(0,3)]}):this.reply(this.v(`Almost! The answer is "${t.options[t.answer]}". ${t.why??""} ${i.personality==="kind"?"That's a tricky one.":"Don't worry, you'll get the next one."}`),{delta:1,mood:"neutral",options:[{id:"quiz",label:"Try another"},...this.menu().slice(0,3)]})}gossip(e){let t=this.npc,i=this.r,s=Zs(t.bestFriend),r=t.rival!=null?Zs(t.rival):null,a=bt(i,Ys),l=[],c=Ys.filter(d=>d.id!==t.id&&(we.peek(d.id)?.fr??0)>=30);c.length&&l.push("opinion"),s&&l.push("friend"),r&&l.push("rival"),l.push("quirk","new");let o=bt(i,l),u="";if(o==="opinion"){let d=bt(i,c);u=`${d.first} told me you're really nice. ${d.first} remembers that you ${we.peek(d.id).quiz.right>0?"helped with a quiz":"said hi"}.`}else if(o==="friend"&&s)u=`${s.first} and I are working on ${t.interests[0]} together. ${s.first} ${s.quirk}, which is funny.`;else if(o==="rival"&&r)u=`${r.first} and I are kind of competing this week. Please don't tell ${r.first}. ${r.first} ${r.quirk}.`;else if(o==="quirk")u=`${a.first} ${a.quirk}. Have you noticed?`;else{let d=aa(a.spec).find(h=>h.key==="hat"||h.key==="glasses"||h.key==="hair");u=`${a.first} showed up with ${d.phrase} today. Everyone's talking about it.`}return this.reply(this.pc({shy:`Um... don't tell anyone, but ${u}`,funny:`Okay, hot gossip, ${this.me}: ${u}`,d:u}),{delta:e?1:0,mood:"happy"})}say(e){if(e=e.trim().slice(0,240),!e)return this.reply("...?",{mood:"neutral"});let t=this.npc,i=e.toLowerCase(),s=this.r;if(this.history.push({who:"me",text:e}),Qi(t.id,"me",e),this.waiting==="quiz"&&this.quiz){let d=this.quiz.options.findIndex(h=>i.includes(h.toLowerCase()));if(d>=0)return this.answer(d)}let r=i.match(/(?:my name is|call me|i'?m called)\s+([a-z][a-z'-]{1,16})/);if(r){let d=Vt(r[1]);return we.setProfile({name:d}),this.reply(this.v(`Nice to meet you, ${d}! I'll remember that.`),{delta:2,mood:"excited"})}let a=i.match(/\bi(?:'m| am| feel| feeling)\s+(?:so |really |kind of |a little |very )?(sad|happy|tired|nervous|scared|excited|angry|bored|hungry|sick|lonely|stressed|worried|great|good|fine|okay|proud)\b/);if(a){let d=a[1];return this.choose("feel",["happy","excited","great","good","fine","okay","proud"].includes(d)?"great":["tired","bored","sick","hungry"].includes(d)?"tired":["nervous","scared","worried","stressed"].includes(d)?"nervous":"sad")}let l=i.match(/\bi (?:really |absolutely )?(?:like|love|enjoy|adore|play)\s+([a-z ]{2,28})/);if(l)return this.choose("hobby_pick",l[1].trim().replace(/\s+(a lot|so much|too|and.*)$/,""));let c=i.match(/\bmy favou?rite (subject|food|color|colour|animal|game|sport|class) is\s+([a-z ]{2,24})/);if(c){let d=c[1],h=c[2].trim();we.learn("fav_"+d,h),we.edit(t.id,g=>{g.facts["fav_"+d]=h});let f=d==="food"&&h.includes(t.food.split(" ")[0]);return this.reply(this.v(f?`${Vt(h)}! Mine too!`:`${Vt(h)}, huh? I'll remember that your favorite ${d} is ${h}.`),{delta:f?3:2,mood:f?"excited":"happy"})}let o=i.match(/\bi have (?:a|an|two|three) ([a-z]+)(?: named ([a-z]+))?/);if(o)return we.learn("pet",o[1]+(o[2]?" named "+Vt(o[2]):"")),this.reply(this.v(`A ${o[1]}${o[2]?" named "+Vt(o[2]):""}! I want to meet them${t.pet?`. I have ${t.pet}, you know.`:"."}`),{delta:3,mood:"excited"});if(/\b(stupid|dumb|ugly|hate you|shut up|loser|idiot)\b/.test(i))return this.reply(this.pc({shy:"...That hurts. I'm going to go now.",funny:"Ouch. That was not funny. Even I can tell.",kind:"That's not very kind. I'd like us to be nice to each other.",d:"That's rude. I don't like that."}),{delta:-8,mood:"annoyed",options:[{id:"sorry",label:"Sorry, I didn't mean it"},{id:"bye",label:"Okay, bye"}]});if(/\b(sorry|apologi[sz]e|my bad)\b/.test(i))return this.reply(this.pc({kind:"Thank you for saying that. It's okay.",d:"Okay. Thanks for saying sorry."}),{delta:3,mood:"neutral",options:this.menu()});if(/\b(thanks|thank you|thx)\b/.test(i))return this.reply(this.flavor(bt(s,["Anytime!","Of course.","No problem!"])),{delta:1,options:this.menu()});if(/\b(you'?re|you are|love your|like your|nice|cool|awesome|amazing|great|pretty|cute)\b/.test(i)&&/\b(you|your)\b/.test(i))return this.choose("compliment");if(/\b(bye|goodbye|see you|gotta go|have to go|later)\b/.test(i))return this.choose("bye");if(/\b(joke|funny|laugh)\b/.test(i))return this.choose("joke");if(/\b(quiz|test me|question)\b/.test(i))return this.choose("quiz");if(/\b(help|study|homework)\b/.test(i))return this.choose("help");if(/\b(lunch|eat|food|hungry|pizza|snack)\b/.test(i))return this.choose("food");if(/\b(hobby|hobbies|fun|weekend|play)\b/.test(i))return this.choose("hobby");if(/\b(class|subject|math|science|history|reading|english|teacher)\b/.test(i))return this.choose("class");if(/\b(who are you|about you|your name|tell me about)\b/.test(i))return this.choose("you");if(/\b(rumou?r|gossip|news|heard)\b/.test(i))return this.choose("gossip");if(/\b(hi|hello|hey|yo|sup)\b/.test(i)&&i.split(/\s+/).length<=3)return this.reply(this.flavor("Hi! What's up?"),{mood:"happy"});if(/\b(how are you|how's it going|what's up)\b/.test(i))return this.choose("how");if(/\?\s*$/.test(i))return this.reply(this.pc({nerdy:"Hmm, interesting question. I'd have to look that up. Want a quiz question instead?",curious:"Ooh, good question! I don't know, but I want to find out with you.",d:`${bt(s,Ks[t.personality].hm)} I'm not sure. What do you think?`}),{delta:1,mood:"neutral"});let u=this.mem;return this.reply(this.v(u.facts.hobby?`${bt(s,Ks[t.personality].hm)} Is that like ${u.facts.hobby}? Tell me more.`:`${bt(s,Ks[t.personality].hm)} Tell me more about that.`),{delta:1,mood:"neutral"})}};function of(n,e,t){let i=di((n.id*31+e.id)*1009+Math.floor(Date.now()/2e4)),s=we.profile,r=s.name||"the new kid",a=we.peek(n.id),l=(we.peek(e.id)?.fr??0)>=30||(a?.fr??0)>=30,c=bt(i,aa(e.spec).filter(u=>u.key!=="shoes")),o=[`${e.first}, did you finish the ${bt(i,["math","reading","science","history"])} homework?`,`Are you going to ${n.interests[0]} after school?`,`I love your ${c.phrase}!`,`${e.first}, you ${e.quirk} again. It's cute.`,l?`${r} is really nice. Have you talked to ${r}?`:`Who's the new kid, ${e.first}?`,t.kind==="lunch"?`I'm trading ${n.food} for ${e.food}. Deal?`:t.kind==="arrive"?"The bus was SO loud this morning.":t.kind==="dismiss"?"Don't forget your backpack!":`Shh, ${e.first}, we're supposed to be in class.`,`${bt(i,n.interests)} club is on Thursday, ${e.first}!`,`Did you know ${n.pet??"my family"} ${n.pet?"learned a new trick?":"makes the best snacks?"}`];return bt(i,o)}function lf(n){let e=we.mem(n.id),t=we.profile.name||"you";return e.fr>=60?`${t}! Over here!`:e.facts.hobby?`Hey ${t}! How's ${e.facts.hobby}?`:`Hey ${t}!`}var Eh=0;async function Rx(n,e){if(Date.now()<Eh)return null;let t=n.npc,i=n.mem,s=new AbortController,r=setTimeout(()=>s.abort(),6500);try{let a={npc:{name:t.name,first:t.first,grade:t.grade,role:t.role,title:t.title,personality:t.personality,interests:t.interests,favSubject:t.favSubject,food:t.food,pet:t.pet,dream:t.dream,quirk:t.quirk,bio:t.bio},player:{name:we.profile.name,facts:we.profile.facts},memory:{friendship:i.fr,tier:ji(i.fr),talks:i.talks,topics:i.topics.slice(-6),facts:i.facts,recent:i.log.slice(-8)},ctx:n.ctx,history:n.history.slice(-8),input:e},l=await fetch("/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a),signal:s.signal});if(!l.ok)return Eh=Date.now()+5*6e4,null;let c=await l.json();if(!c||typeof c.text!="string")return null;let o=Math.max(-6,Math.min(6,Number(c.delta)||0));if(n.history.push({who:"me",text:e}),Qi(t.id,"me",e),c.learned&&typeof c.learned=="object")for(let[u,d]of Object.entries(c.learned))typeof d=="string"&&(we.learn(u,d.slice(0,40)),we.edit(t.id,h=>{h.facts[u]=String(d).slice(0,40)}));return n.history.push({who:"npc",text:c.text}),Qi(t.id,"npc",c.text),o&&Th(t.id,o),n.turns++,{text:String(c.text).slice(0,400),options:n.menu(),mood:c.mood||"happy",delta:o}}catch{return Eh=Date.now()+6e4,null}finally{clearTimeout(r)}}async function cf(n,e){return await Rx(n,e)??n.say(e)}var Px=`
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
`,hf=!1,uf=()=>{if(hf)return;hf=!0;let n=document.createElement("style");n.textContent=Px,document.head.appendChild(n)},lt=(n,e="",t,i="")=>{let s=document.createElement(n);return e&&(s.className=e),i&&(s.textContent=i),t?.appendChild(s),s};function df(n,e,t=0,i=0,s=3.7){let r=n.getContext("2d"),a=n.width,l=n.height;r.clearRect(0,0,a,l);let c=s*Math.min(1,ti[e.age??"hs"]??1)*(a/118);r.save(),r.translate(a/2,l-10*(l/150)),r.scale(c,c),r.shadowColor="rgba(52,34,46,.3)",r.shadowBlur=2,r.shadowOffsetY=1,Gs(r,0,0,{...e,dir:"down",moving:!1,walk:0,mouth:i,tag:!1},t),r.restore()}var Dl=n=>"\u2665".repeat(Mh(n))+"\u2661".repeat(5-Mh(n)),Il=class{constructor(e){this.typing=0;this.full="";this.raf=0;this.t0=0;this.busy=!1;this.opts=[];this.onClose=()=>{};this.onReply=()=>{};this.say=async e=>{if(!(!this.convo||this.busy)){this.busy=!0,this.showYou(e);try{this.deliver(await cf(this.convo,e))}finally{this.busy=!1}}};this.mood="happy";this.loop=()=>{if(!this.isOpen)return;let e=performance.now(),t=this.typing<this.full.length;t&&(this.typing+=1.1+this.full.length*.012,this.renderText()),this.npc&&df(this.cv,this.npc.look,(e-this.t0)/1e3,t?.4+.6*Math.abs(Math.sin(e/70)):0),this.raf=requestAnimationFrame(this.loop)};uf(),this.root=lt("div","uchat",e),this.card=lt("div","uchat-card",this.root),this.cv=lt("canvas","uchat-portrait",this.card),this.cv.width=236,this.cv.height=300;let t=lt("div","uchat-main",this.card),i=lt("div","uchat-head",t);this.nameEl=lt("b","",i),this.subEl=lt("span","uchat-sub",i),this.heartEl=lt("span","uchat-hearts",i);let s=lt("button","uchat-x",i,"Bye");s.type="button",s.onclick=()=>this.close(),this.textEl=lt("div","uchat-text",t),this.textEl.setAttribute("aria-live","polite"),this.textEl.onclick=()=>this.finishTyping(),this.optsEl=lt("div","uchat-opts",t);let r=lt("form","uchat-in",t);this.input=lt("input","",r),this.input.placeholder="Or type something to say\u2026",this.input.maxLength=200,this.input.autocomplete="off";let a=lt("button","",r,"Say");a.type="submit",r.onsubmit=l=>{l.preventDefault();let c=this.input.value.trim();c&&(this.input.value="",this.say(c))},this.root.addEventListener("keydown",l=>{l.stopPropagation(),l.key==="Escape"?this.close():document.activeElement!==this.input&&/^[1-6]$/.test(l.key)&&this.opts[+l.key-1]&&this.pick(this.opts[+l.key-1])}),["pointerdown","wheel","touchstart"].forEach(l=>this.root.addEventListener(l,c=>c.stopPropagation(),{passive:!0}))}get isOpen(){return this.root.classList.contains("show")}open(e,t){this.npc=e,this.convo=new Pl(e,t),this.root.classList.add("show"),this.t0=performance.now(),this.busy=!1,this.nameEl.textContent=e.name,this.refreshHead(),this.deliver(this.convo.greet()),this.loop(),setTimeout(()=>this.root.querySelector(".uchat-opts button")?.focus({preventScroll:!0}),30)}async pick(e){!this.convo||this.busy||(this.showYou(this.labelOf(e)),this.deliver(this.convo.choose(e.id,e.data)))}labelOf(e){return e.label}showYou(e){this.textEl.innerHTML="";let t=lt("span","you",this.textEl,`${we.profile.name||"You"}: ${e}`)}refreshHead(){if(!this.npc)return;let e=we.mem(this.npc.id);this.subEl.textContent=`${this.npc.role==="staff"?this.npc.title:"Grade "+this.npc.grade} \xB7 ${ji(e.fr)}`,this.heartEl.textContent=Dl(e.fr)}deliver(e){this.refreshHead(),this.opts=e.options,this.optsEl.innerHTML="",e.options.forEach((i,s)=>{let r=lt("button","",this.optsEl,`${s+1}. ${i.label}`);r.type="button",r.onclick=()=>void this.pick(i)});let t=this.textEl.querySelector(".you");this.textEl.innerHTML="",t&&this.textEl.appendChild(t),this.full=e.text,this.typing=0,this.mood=e.mood,this.onReply(e,this.npc),e.end&&setTimeout(()=>this.close(),Math.min(2600,900+e.text.length*28))}finishTyping(){this.typing=this.full.length,this.renderText()}renderText(){let e=this.textEl.querySelector(".say");e||(e=lt("span","say",this.textEl)),e.textContent=this.full.slice(0,Math.floor(this.typing))}close(){this.isOpen&&(this.root.classList.remove("show"),cancelAnimationFrame(this.raf),this.input.blur(),this.onClose())}},Ll=class{constructor(e){this.onPick=()=>{};uf(),this.root=lt("div","ujournal",e);let t=lt("div","ujournal-card",this.root),i=lt("header","",t,"Friends and classmates"),s=lt("button","",i,"Close");s.type="button",s.onclick=()=>this.hide(),this.list=lt("div","ujournal-list",t),this.root.addEventListener("pointerdown",r=>r.stopPropagation()),this.root.addEventListener("keydown",r=>{r.stopPropagation(),r.key==="Escape"&&this.hide()})}show(){this.render(),this.root.classList.add("show")}hide(){this.root.classList.remove("show")}toggle(){this.root.classList.contains("show")?this.hide():this.show()}render(){this.list.innerHTML="";let e=we.friends();if(!e.length){lt("div","ujournal-empty",this.list,"You haven't met anyone yet. Walk up to a student and tap them, or press T when one is close.");return}for(let{id:t,mem:i}of e){let s=Zs(Number(t));if(!s)continue;let r=lt("button","ujournal-item",this.list);r.type="button",r.onclick=()=>{this.hide(),this.onPick(s)};let a=lt("canvas","",r);a.width=108,a.height=140,df(a,s.look,0,0,3.7);let l=lt("div","",r),c=Object.entries(i.facts).map(([o,u])=>`${o.replace("fav_","favorite ")}: ${u}`).join(", ");lt("b","",l,s.name),lt("small","",l,`${s.role==="staff"?s.title:"Grade "+s.grade} \xB7 ${ji(i.fr)} ${Dl(i.fr)}`),lt("small","",l,`Talked ${i.talks}x \xB7 quiz ${i.quiz.right}/${i.quiz.total}${i.lunchBuddy?" \xB7 lunch buddy":""}`),c&&lt("small","",l,`Remembers: ${c}`)}}};var ff=["Ha, totally!","Same!","Yeah!","No way!","Okay okay.","I know, right?","Shh!","Maybe!","Ooh!"],Ix=(n,e)=>new I(n-56/2,0,e-44/2),Nl=class{constructor(e,t=document.body){this.hall=e;this.nearby=null;this.talkingTo=null;this.onNearby=()=>{};this.bubbles=[];this.tags=new Map;this.chase=null;this.nextChatter=4;this.approachAt=new Map;this.approaching=null;this.acc=0;this.layer=document.createElement("div"),this.layer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:34",t.appendChild(this.layer),this.chat=new Il(t),this.journal=new Ll(t),this.chat.onClose=()=>this.endTalk(),this.journal.onPick=i=>{let s=e.persons().find(r=>r.def?.id===i.id);s?this.talkTo(s):e.onToast(`${i.first} isn't in the hall right now.`)},e.onTap=i=>{i?.def&&this.talkTo(i)},e.onTick.push((i,s)=>this.tick(i,s)),addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&((i.key==="t"||i.key==="T")&&!this.chat.isOpen?this.nearby&&this.talkTo(this.nearby):(i.key==="f"||i.key==="F")&&!this.chat.isOpen&&this.journal.toggle())})}ctx(){let e=Hn[Math.max(0,this.hall.idx)];return{place:"hall",kind:e.kind,period:e.name,clock:El(this.hall.clock)}}dist(e){return Math.hypot(e.pos.x-this.hall.player.pos.x,e.pos.z-this.hall.player.pos.z)}talkTo(e){let t=e.def;if(!t||this.chat.isOpen)return;if(this.dist(e)>2.7){this.chase={p:e,replan:0},this.hall.walkToPoint(e.pos.x+56/2,e.pos.z+44/2,"there"),this.hall.onToast(`Walking over to ${t.first}\u2026`);return}this.chase=null,this.hall.cancelNav(),this.talkingTo=e,e.talking=!0,e.moving=!1;let i=new I().subVectors(this.hall.player.pos,e.pos);e.dir=this.hall.faceDir(i,e.dir);let s=this.hall.player;s.dir=this.hall.faceDir(i.clone().negate(),s.dir),this.hall.inputLocked=!0,this.journal.hide(),this.chat.open(t,this.ctx())}endTalk(){let e=this.talkingTo;if(this.talkingTo=null,this.hall.inputLocked=!1,e){e.talking=!1;let t=e;t.path&&!t.path.length&&t.hidden}}say(e,t,i=3400){this.bubbles.filter(r=>r.p===e).forEach(r=>{r.el.remove()}),this.bubbles=this.bubbles.filter(r=>r.p!==e);let s=document.createElement("div");s.className="uchat-bubble",s.textContent=t,this.layer.appendChild(s),this.bubbles.push({el:s,p:e,until:performance.now()+i,h:1.55*(ti[e.look.age??"hs"]??1)+.35})}project(e,t){let i=new I(e.pos.x,t,e.pos.z).project(this.hall.camera),s=this.hall.renderer.domElement.getBoundingClientRect();return{x:(i.x*.5+.5)*s.width,y:(-i.y*.5+.5)*s.height,ok:i.z<1&&i.z>-1}}tick(e,t){let i=this.hall,s=performance.now(),r=i.player,a=null,l=2.5;if(!this.chat.isOpen)for(let o of i.persons()){let u=this.dist(o);u<l&&!o.talking&&(l=u,a=o)}if(a!==this.nearby&&(this.nearby=a,this.onNearby(a)),this.chase){let o=this.chase;o.replan-=e,this.dist(o.p)<=2.4?this.talkTo(o.p):!i.walking&&o.replan<=0?(o.replan=.5,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there")||(this.chase=null)):o.replan<=0&&(o.replan=.7,i.walkToPoint(o.p.pos.x+56/2,o.p.pos.z+44/2,"there"))}let c=i.persons().filter(o=>this.dist(o)<5.5&&o.def&&!i.inputLocked).sort((o,u)=>this.dist(o)-this.dist(u)).slice(0,5);for(let[o,u]of this.tags)c.includes(o)||(u.remove(),this.tags.delete(o));for(let o of c){let u=this.tags.get(o);u||(u=document.createElement("div"),u.className="uchat-tag",this.layer.appendChild(u),this.tags.set(o,u));let d=we.peek(o.def.id);u.innerHTML=`${o.def.first}${d?.met?`<i>${Dl(d.fr).replace(/♡/g,"")}</i>`:""}`;let h=this.project(o,1.55*(ti[o.look.age??"hs"]??1)+.1);u.style.display=h.ok?"block":"none",u.style.left=`${h.x}px`,u.style.top=`${h.y}px`}if(this.bubbles=this.bubbles.filter(o=>{if(s>o.until)return o.el.remove(),!1;let u=this.project(o.p,o.h);return o.el.style.display=u.ok?"block":"none",o.el.style.left=`${u.x}px`,o.el.style.top=`${u.y-16}px`,!0}),this.nextChatter-=e,this.nextChatter<=0&&!this.chat.isOpen){this.nextChatter=Ni(2.4,5);let o=i.persons().filter(d=>d.def&&!d.talking&&this.dist(d)<16),u=o[Math.floor(Math.random()*o.length)];if(u&&this.bubbles.length<4){let d=o.filter(h=>h!==u&&Math.hypot(h.pos.x-u.pos.x,h.pos.z-u.pos.z)<3.2)[0];if(d){let h=this.ctx();this.say(u,of(u.def,d.def,{kind:h.kind}),3600),setTimeout(()=>this.say(d,ff[Math.floor(Math.random()*ff.length)],1800),1900)}}}if(this.acc+=e,this.acc>1&&(this.acc=0,this.checkApproach(s)),this.approaching){let o=this.approaching;o.replan-=e,o.s.hidden?this.approaching=null:this.dist(o.s)<1.9?(o.s.path=[],o.s.moving=!1,this.say(o.s,lf(o.s.def),4200),i.onToast(`${o.s.def.first} wants to chat. Tap them or press T.`),this.approachAt.set(o.s.def.id,s),this.approaching=null,setTimeout(()=>{!o.s.talking&&o.s.path.length===0&&(o.s.pending={delay:0,dest:i.open[Math.floor(Math.random()*i.open.length)],hide:!1})},14e3)):(o.replan<=0||s-o.since>2e4)&&(o.replan=1,s-o.since>2e4?this.approaching=null:this.pathTo(o.s))}}pathTo(e){let t=this.hall,i=Math.max(0,Math.min(55,Math.floor(e.pos.x+56/2))),s=Math.max(0,Math.min(43,Math.floor(e.pos.z+44/2))),r=Math.max(0,Math.min(55,Math.floor(t.player.pos.x+56/2))),a=Math.max(0,Math.min(43,Math.floor(t.player.pos.z+44/2)));e.pending=null,e.hideOnArrive=!1,e.path=Vs(ii,i,s,r,a).map(l=>Ix(l.x+.5,l.y+.5)),e.path.pop(),e.moving=e.path.length>0}checkApproach(e){if(!(this.approaching||this.chat.isOpen||this.hall.walking||this.ctx().kind==="class"))for(let i of this.hall.students){if(i.hidden||i.talking||!i.def)continue;let s=we.peek(i.def.id);if(!s||s.fr<30)continue;let r=this.dist(i);if(!(r<3||r>11)&&!(e-(this.approachAt.get(i.def.id)??-1e9)<18e4)){this.approaching={s:i,replan:0,since:e},this.pathTo(i);return}}}visible(){return this.hall.persons().map(e=>e.def).filter(Boolean)}};var Lx=`
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
`,pf=!1,$e=(n,e="",t,i="")=>{let s=document.createElement(n);return e&&(s.className=e),i&&(s.textContent=i),t?.appendChild(s),s},mf=["down","right","up","left"],Fl=class{constructor(e=document.body){this.tab="Body";this.dir=0;this.walk=!1;this.t0=performance.now();this.raf=0;this.onSave=()=>{};this.onCancel=()=>{};this.loop=()=>{if(!this.root.classList.contains("show"))return;let e=(performance.now()-this.t0)/1e3,t=this.cv.getContext("2d");t.clearRect(0,0,this.cv.width,this.cv.height);let i=Ui(this.spec,11),s=8.6*(ti[this.spec.age]??1)*.92;t.save(),t.translate(this.cv.width/2,this.cv.height-46),t.scale(s,s),t.fillStyle="rgba(60,40,50,.18)",t.beginPath(),t.ellipse(0,1,13,4,0,0,7),t.fill(),t.shadowColor="rgba(52,34,46,.3)",t.shadowBlur=3,t.shadowOffsetY=1.5,Gs(t,0,0,{...i,dir:mf[this.dir],moving:this.walk,walk:this.walk?e*8:0,tag:!1},e),t.restore(),this.raf=requestAnimationFrame(this.loop)};this.pending=0;if(!pf){pf=!0;let S=document.createElement("style");S.textContent=Lx,document.head.appendChild(S)}this.spec={...we.profile.avatar},this.root=$e("div","uav",e);let t=$e("div","uav-top",this.root);$e("b","",t,"Create your avatar");let i=$e("span","",t);i.style.flex="1";let s=$e("button","uav-chip",t,"Cancel");s.type="button",s.onclick=()=>{this.hide(),this.onCancel()};let r=$e("button","uav-chip uav-save",t,"Save and play");r.type="button",r.onclick=()=>this.save();let a=$e("div","uav-wrap",this.root),l=$e("div","uav-card uav-prev",a);this.cv=$e("canvas","",l),this.cv.width=300,this.cv.height=400;let c=$e("div","uav-row",l);c.style.justifyContent="center",mf.forEach((S,m)=>{let p=$e("button","uav-chip",c,["Front","Right","Back","Left"][m]);p.type="button",p.onclick=()=>{this.dir=m,this.walk=!1}});let o=$e("button","uav-chip",c,"Walk");o.type="button",o.onclick=()=>{this.walk=!this.walk,o.classList.toggle("on",this.walk)};let u=$e("div","uav-row",l);u.style.justifyContent="center";let d=$e("button","uav-chip",u,"Surprise me");d.type="button",d.onclick=()=>{let S=this.spec.name,m=this.spec.age;this.spec={...ra(di(Date.now()&16777215),m),name:S},this.render()};let h=$e("button","uav-chip",u,"Reset");h.type="button",h.onclick=()=>{let S=this.spec.name;this.spec={...qs(),name:S},this.render()};let f=$e("div","uav-card",a),g=$e("div","uav-tabs",f);for(let S of["Body","Face","Hair","Outfit","Extras","You"]){let m=$e("button","uav-chip",g,S);m.type="button",m.dataset.tab=S,m.onclick=()=>{this.tab=S,this.render()}}this.body=$e("div","",f),this.root.addEventListener("keydown",S=>S.stopPropagation()),this.root.addEventListener("pointerdown",S=>S.stopPropagation())}show(){this.spec={...we.profile.avatar,name:we.profile.name||we.profile.avatar.name},this.root.classList.add("show"),this.render(),this.loop()}hide(){this.root.classList.remove("show"),cancelAnimationFrame(this.raf)}save(){let e=(this.nameInput?.value??this.spec.name).trim().slice(0,14)||"Student";this.spec.name=e,we.setProfile({name:e,avatar:{...this.spec},hasAvatar:!0}),this.hide(),this.onSave(this.spec,e)}set(e,t){this.spec[e]=t,this.render(!1)}chips(e,t,i){$e("div","uav-lab",this.body,e);let s=$e("div","uav-row",this.body);for(let r of i){let a=$e("button","uav-chip"+(this.spec[t]===r.id?" on":""),s,r.label);a.type="button",a.onclick=()=>{this.set(t,r.id)}}}swatches(e,t,i,s){$e("div","uav-lab",this.body,e);let r=$e("div","uav-row",this.body);if(s){let l=$e("button","uav-sw none"+(this.spec[t]==null?" on":""),r);l.type="button",l.title=s,l.setAttribute("aria-label",s),l.onclick=()=>this.set(t,null)}for(let l of i){let c=$e("button","uav-sw"+(this.spec[t]===l?" on":""),r);c.type="button",c.style.background=l,c.setAttribute("aria-label",l),c.onclick=()=>this.set(t,l)}let a=$e("input","uav-custom",r);a.type="color",a.value=typeof this.spec[t]=="string"&&/^#[0-9a-f]{6}$/i.test(this.spec[t])?this.spec[t]:i[0],a.title="Custom colour",a.oninput=()=>{this.spec[t]=a.value,this.renderSoon()}}toggle(e,t){let i=$e("label","uav-switch",this.body),s=$e("input","",i);s.type="checkbox",s.checked=!!this.spec[t],s.onchange=()=>this.set(t,s.checked),i.appendChild(document.createTextNode(e))}slider(e,t,i,s,r){$e("div","uav-lab",this.body,e);let a=$e("input","",this.body);a.type="range",a.min=String(i),a.max=String(s),a.step=String(r),a.value=String(this.spec[t]),a.oninput=()=>{this.spec[t]=Number(a.value)}}renderSoon(){clearTimeout(this.pending),this.pending=window.setTimeout(()=>this.render(!1),250)}render(e=!0){this.root.querySelectorAll("[data-tab]").forEach(r=>r.classList.toggle("on",r.dataset.tab===this.tab));let t=this.root.scrollTop;this.body.innerHTML="";let i=sa,s=this.body;if(this.tab==="Body")this.chips("Grade band (sets your height)","age",i.age),this.chips("Build","build",i.build),this.slider("Head size","headSize",.9,1.12,.01),this.swatches("Skin tone","skin",xh),this.chips("Pronouns","pronouns",Wd.map(r=>({id:r,label:r})));else if(this.tab==="Face"){this.chips("Eyes","eyeShape",i.eyeShape),this.swatches("Eye colour","eyeColor",_h),this.chips("Eyebrows","brow",i.brow),this.swatches("Eyebrow colour","browColor",Ki,"Match hair"),this.chips("Mouth","mouthStyle",i.mouthStyle),this.swatches("Lip colour","lip",["#8a4650","#c4463c","#e8789a","#b5563e","#563428","#e07a66"]),$e("div","uav-lab",s,"Details");let r=$e("div","uav-row",s);this.toggle("Freckles","freckles"),this.toggle("Beauty mark","mole"),this.toggle("Little nose","nose"),this.toggle("Rosy cheeks","blush"),this.chips("Glasses","glasses",i.glasses),this.swatches("Glasses colour","glassColor",["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da","#eab94e"])}else if(this.tab==="Hair")this.chips("Style","hairStyle",i.hairStyle),this.swatches("Colour","hair",Ki),this.swatches("Highlights","hair2",Ki,"No highlights");else if(this.tab==="Outfit")this.chips("Top","top",i.top),this.swatches("Top colour","shirt",Kt),this.chips("Pattern","pattern",i.pattern),this.swatches("Pattern / under-shirt colour","shirt2",Kt),this.chips("Bottoms","bottom",i.bottom),this.swatches("Bottoms colour","pants",Kt),this.chips("Shoes","shoeStyle",i.shoeStyle),this.swatches("Shoe colour","shoes",vh);else if(this.tab==="Extras")this.chips("Hat","hat",i.hat),this.swatches("Hat colour","hatColor",Kt),this.chips("Bag","packStyle",i.packStyle),this.swatches("Bag colour","pack",Kt),this.swatches("Earrings","earrings",["#eab94e","#fff6ea","#f28f7e","#8fc9e8"],"None"),this.swatches("Scarf","scarf",Kt,"None"),this.swatches("Badge","badge",Kt,"None");else{$e("h2","",s,"About you"),$e("div","uav-lab",s,"Your name (classmates will remember it)");let r=$e("input","",s);r.type="text",r.maxLength=14,r.value=this.spec.name==="Student"?"":this.spec.name,r.placeholder="Type your name",this.nameInput=r,r.oninput=()=>{this.spec.name=r.value},$e("div","uav-lab",s,"Tip"),$e("div","",s,"Classmates notice what you wear. Try a hat or glasses and see who compliments it. Everything you tell them is remembered, so introduce yourself!")}this.root.scrollTop=t}};var Bt=n=>document.getElementById(n),St=new Rl(Bt("game"));window.__hall=St;St.onToast=n=>{let e=Bt("toast");e.textContent=n,e.classList.toggle("show",!!n),clearTimeout(St._tt),n&&(St._tt=setTimeout(()=>e.classList.remove("show"),3500))};var Qs=new Nl(St,document.body);window.__social=Qs;var ua=new Fl(document.body);window.__creator=ua;var Ol=n=>{St.inputLocked=n};ua.onSave=n=>{St.setAvatar(n),Ol(!1),St.onToast(`Looking good, ${n.name}!`)};ua.onCancel=()=>Ol(!1);Bt("bAvatar").onclick=()=>{Ol(!0),ua.show()};Bt("bFriends").onclick=()=>Qs.journal.toggle();var wh=Bt("talkChip");Qs.onNearby=n=>{wh.classList.toggle("show",!!n),n&&(wh.textContent=`Talk to ${n.def?.first} (T)`)};wh.onclick=()=>{Qs.nearby&&Qs.talkTo(Qs.nearby)};we.profile.hasAvatar||setTimeout(()=>{Ol(!0),ua.show()},600);var js={},gf=()=>{St.input.x=(js.r?1:0)-(js.l?1:0),St.input.y=(js.d?1:0)-(js.u?1:0)};document.querySelectorAll("[data-k]").forEach(n=>{let e=n.dataset.k;n.addEventListener("pointerdown",t=>{t.preventDefault(),js[e]=!0,gf()}),["pointerup","pointerleave","pointercancel"].forEach(t=>n.addEventListener(t,()=>{js[e]=!1,gf()}))});document.querySelectorAll("[data-rot]").forEach(n=>{let e=+n.dataset.rot;n.addEventListener("pointerdown",t=>{t.preventDefault(),St.rotate=e}),["pointerup","pointerleave","pointercancel"].forEach(t=>n.addEventListener(t,()=>{St.rotate=0}))});var Ul=Bt("goMenu");tf.forEach(n=>{let e=document.createElement("button");e.innerHTML=`<i style="background:${n.color}"></i>${n.label}`,e.onclick=()=>{Ul.classList.remove("show"),St.goTo(n.key)},Ul.appendChild(e)});Bt("bGo").onclick=()=>Ul.classList.toggle("show");Bt("game").addEventListener("pointerdown",()=>Ul.classList.remove("show"));Bt("bSpd").onclick=()=>{St.speed=St.speed===1?4:St.speed===4?16:1,Bt("bSpd").textContent=`Speed x${St.speed}`};var Dx={close:"Close-up",overview:"Overview",first:"First person"};Bt("bView").onclick=()=>{let n=St.cycleView();Bt("bView").textContent=`View: ${Dx[n]}`};setInterval(()=>{let n=Hn[Math.max(0,St.idx)];Bt("clk").textContent=El(St.clock),Bt("per").textContent=n.name,Bt("fill").style.width=`${(St.clock-n.start)/n.len*100}%`;let e=St.students.filter(a=>!a.hidden).length;Bt("cnt").textContent=`${e} in the hall, ${St.students.length-e} in class or away`;let[t,i,s,r]=St.tint;Bt("tint").style.background=`rgba(${t|0},${i|0},${s|0},${r})`},200);(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256);for(let i=0;i<t.data.length;i+=4){let s=226+Math.random()*29;t.data[i]=s,t.data[i+1]=s*.965,t.data[i+2]=s*.9,t.data[i+3]=255}e.putImageData(t,0,0),e.lineCap="round";for(let i=0;i<260;i++){e.strokeStyle=`rgba(255,250,240,${.08+Math.random()*.16})`,e.lineWidth=.6+Math.random()*.5;let s=Math.random()*256,r=Math.random()*256,a=Math.random()*6.28,l=3+Math.random()*9;e.beginPath(),e.moveTo(s,r),e.lineTo(s+Math.cos(a)*l,r+Math.sin(a)*l),e.stroke()}Bt("paper").style.backgroundImage=`url(${n.toDataURL()})`})();})();
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
