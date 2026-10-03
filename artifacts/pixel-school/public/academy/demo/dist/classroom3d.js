"use strict";(()=>{var Rl="186";var Zd=0,zc=1,Jd=2;var Fa=1,Pl=2,Mr=3,cs=0,Pn=1,Un=2,Ci=0,Tr=1,Er=2,Hc=3,Gc=4,jd=5;var Rs=100,Kd=101,Qd=102,ef=103,tf=104,nf=200,sf=201,rf=202,af=203,Vc=204,Wc=205,of=206,lf=207,hf=208,cf=209,uf=210,df=211,ff=212,pf=213,mf=214,Vo=0,Wo=1,qo=2,ur=3,Xo=4,$o=5,Yo=6,Zo=7,qc=0,gf=1,yf=2,ui=0,Xc=1,$c=2,Yc=3,Zc=4,Jc=5,jc=6,Kc=7;var Qc=300,us=301,Ps=302,Il=303,kl=304,La=306,is=1e3,Si=1001,Jo=1002,cn=1003,bf=1004;var Na=1005;var Qt=1006,Dl=1007;var ds=1008;var On=1009,eu=1010,tu=1011,Ar=1012,Fl=1013,di=1014,Kn=1015,fi=1016,Ll=1017,Nl=1018,Cr=1020,nu=35902,iu=35899,su=1021,ru=1022,Qn=1023,wi=1026,fs=1027,Bl=1028,Ul=1029,ps=1030,Ol=1031;var zl=1033,Ba=33776,Ua=33777,Oa=33778,za=33779,Hl=35840,Gl=35841,Vl=35842,Wl=35843,ql=36196,Xl=37492,$l=37496,Yl=37488,Zl=37489,Ha=37490,Jl=37491,jl=37808,Kl=37809,Ql=37810,eh=37811,th=37812,nh=37813,ih=37814,sh=37815,rh=37816,ah=37817,oh=37818,lh=37819,hh=37820,ch=37821,uh=36492,dh=36494,fh=36495,ph=36283,mh=36284,Ga=36285,gh=36286;var aa=2300,jo=2301,zo=2302,Ic=2303,kc=2400,Dc=2401,Fc=2402;var vf=3200;var yh=0,xf=1,Gi="",wt="srgb",oa="srgb-linear",la="linear",gt="srgb";var Ho=7680;var _f=519,Sf=512,wf=513,Mf=514,bh=515,Tf=516,Ef=517,vh=518,Af=519,au=35044;var ou="300 es",ci=2e3,dr=2001;function Fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Lm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cf(){let n=ha("canvas");return n.style.display="block",n}var md={},fr=null;function ca(...n){let e="THREE."+n.shift();fr?fr("log",e,...n):console.log(e,...n)}function Rf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=Rf(n);let e="THREE."+n.shift();if(fr)fr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ve(...n){n=Rf(n);let e="THREE."+n.shift();if(fr)fr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ms(...n){let e=n.join(" ");e in md||(md[e]=!0,Oe(...n))}function Pf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var If={[Vo]:Wo,[qo]:Yo,[Xo]:Zo,[ur]:$o,[Wo]:Vo,[Yo]:qo,[Zo]:Xo,[$o]:ur},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Go=Math.PI/180,ua=180/Math.PI;function ns(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Nm(n,e){return(n%e+e)%e}function ic(n,e,t){return(1-t)*n+t*e}function xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Me=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ti=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],h=i[s+1],c=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||h!==f||c!==g){let p=l*u+h*f+c*g+d*y;p<0&&(u=-u,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),E=Math.sin(_);m=Math.sin(m*_)/E,o=Math.sin(o*_)/E,l=l*m+u*o,h=h*m+f*o,c=c*m+g*o,d=d*m+y*o}else{l=l*m+u*o,h=h*m+f*o,c=c*m+g*o,d=d*m+y*o;let _=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=_,h*=_,c*=_,d*=_}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+c*d+l*f-h*u,e[t+1]=l*g+c*u+h*d-o*f,e[t+2]=h*g+c*f+o*u-l*d,e[t+3]=c*g-o*d-l*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-s*o,this._w=a*c-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*i),c=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*h+a*d-o*c,this.y=i+l*c+o*h-r*d,this.z=s+l*d+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new I,gd=new Ti,Ye=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,h)}set(e,t,i,s,r,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],_=s[1],E=s[4],x=s[7],M=s[2],T=s[5],C=s[8];return r[0]=a*y+o*_+l*M,r[3]=a*p+o*E+l*T,r[6]=a*m+o*x+l*C,r[1]=h*y+c*_+d*M,r[4]=h*p+c*E+d*T,r[7]=h*m+c*x+d*C,r[2]=u*y+f*_+g*M,r[5]=u*p+f*E+g*T,r[8]=u*m+f*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+s*r*h-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*a-o*h,u=o*l-c*r,f=h*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*h-c*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(c*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-h*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rc=new Ye,yd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bm(){let n={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[oa]:{primaries:e,whitePoint:i,transfer:la,toXYZ:yd,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:yd,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),n}var lt=Bm();function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,Ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=ha("canvas")),Xs.width=e.width,Xs.height=e.height;let s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ha("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Um=0,pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ac(s[a].image)):r.push(ac(s[a]))}else r=ac(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Om=0,oc=new I,Rn=class n extends Mi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Si,s=Si,r=Qt,a=ds,o=Qn,l=On,h=n.DEFAULT_ANISOTROPY,c=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ns(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Qc;Rn.DEFAULT_ANISOTROPY=1;var Ft=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(h+1)/2,x=(f+1)/2,M=(m+1)/2,T=(c+u)/4,C=(d+y)/4,v=(g+p)/4;return E>x&&E>M?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=C/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=v/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=C/r,s=v/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-y)/_,this.z=(u-c)/_,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends Mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Rn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Qo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ut=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,h,c,d,u,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,h,c,d,u,f,g,y,p)}set(e,t,i,s,r,a,o,l,h,c,d,u,f,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),a=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*c,f=a*d,g=o*c,y=o*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=f+g*h,t[5]=u-y*h,t[9]=-o*l,t[2]=y-u*h,t[6]=g+f*h,t[10]=a*l}else if(e.order==="YXZ"){let u=l*c,f=l*d,g=h*c,y=h*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*h,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*c,f=l*d,g=h*c,y=h*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*c,t[9]=y-u*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*c,f=a*d,g=o*c,y=o*d;t[0]=l*c,t[4]=g*h-f,t[8]=u*h+y,t[1]=l*d,t[5]=y*h+u,t[9]=f*h-g,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*h,g=o*l,y=o*h;t[0]=l*c,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,f=a*h,g=o*l,y=o*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+y,t[5]=a*c,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*c,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zm,e,Hm)}lookAt(e,t,i){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ji.crossVectors(i,Hn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ji.crossVectors(i,Hn)),ji.normalize(),uo.crossVectors(Hn,ji),s[0]=ji.x,s[4]=uo.x,s[8]=Hn.x,s[1]=ji.y,s[5]=uo.y,s[9]=Hn.y,s[2]=ji.z,s[6]=uo.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],_=i[3],E=i[7],x=i[11],M=i[15],T=s[0],C=s[4],v=s[8],A=s[12],P=s[1],S=s[5],D=s[9],B=s[13],k=s[2],O=s[6],J=s[10],F=s[14],se=s[3],X=s[7],te=s[11],z=s[15];return r[0]=a*T+o*P+l*k+h*se,r[4]=a*C+o*S+l*O+h*X,r[8]=a*v+o*D+l*J+h*te,r[12]=a*A+o*B+l*F+h*z,r[1]=c*T+d*P+u*k+f*se,r[5]=c*C+d*S+u*O+f*X,r[9]=c*v+d*D+u*J+f*te,r[13]=c*A+d*B+u*F+f*z,r[2]=g*T+y*P+p*k+m*se,r[6]=g*C+y*S+p*O+m*X,r[10]=g*v+y*D+p*J+m*te,r[14]=g*A+y*B+p*F+m*z,r[3]=_*T+E*P+x*k+M*se,r[7]=_*C+E*S+x*O+M*X,r[11]=_*v+E*D+x*J+M*te,r[15]=_*A+E*B+x*F+M*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15],_=l*f-h*u,E=o*f-h*d,x=o*u-l*d,M=a*f-h*c,T=a*u-l*c,C=a*d-o*c;return t*(y*_-p*E+m*x)-i*(g*_-p*M+m*T)+s*(g*E-y*M+m*C)-r*(g*x-y*T+p*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10];return t*(a*c-o*h)-i*(r*c-o*l)+s*(r*h-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],_=t*o-i*a,E=t*l-s*a,x=t*h-r*a,M=i*l-s*o,T=i*h-r*o,C=s*h-r*l,v=c*y-d*g,A=c*p-u*g,P=c*m-f*g,S=d*p-u*y,D=d*m-f*y,B=u*m-f*p,k=_*B-E*D+x*S+M*P-T*A+C*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/k;return e[0]=(o*B-l*D+h*S)*O,e[1]=(s*D-i*B-r*S)*O,e[2]=(y*C-p*T+m*M)*O,e[3]=(u*T-d*C-f*M)*O,e[4]=(l*P-a*B-h*A)*O,e[5]=(t*B-s*P+r*A)*O,e[6]=(p*x-g*C-m*E)*O,e[7]=(c*C-u*x+f*E)*O,e[8]=(a*D-o*P+h*v)*O,e[9]=(i*P-t*D-r*v)*O,e[10]=(g*T-y*x+m*_)*O,e[11]=(d*x-c*T-f*_)*O,e[12]=(o*A-a*S-l*v)*O,e[13]=(t*S-i*A+s*v)*O,e[14]=(y*E-g*M-p*_)*O,e[15]=(c*M-d*E+u*_)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,d=o+o,u=r*h,f=r*c,g=r*d,y=a*c,p=a*d,m=o*d,_=l*h,E=l*c,x=l*d,M=i.x,T=i.y,C=i.z;return s[0]=(1-(y+m))*M,s[1]=(f+x)*M,s[2]=(g-E)*M,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(u+m))*T,s[6]=(p+_)*T,s[7]=0,s[8]=(g+E)*C,s[9]=(p-_)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),l=$s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ai.copy(this);let h=1/a,c=1/o,d=1/l;return ai.elements[0]*=h,ai.elements[1]*=h,ai.elements[2]*=h,ai.elements[4]*=c,ai.elements[5]*=c,ai.elements[6]*=c,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,t.setFromRotationMatrix(ai),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ci,l=!1){let h=this.elements,c=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===ci)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===dr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ci,l=!1){let h=this.elements,c=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===ci)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===dr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=g,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$s=new I,ai=new ut,zm=new I(0,0,0),Hm=new I(1,1,1),ji=new I,uo=new I,Hn=new I,vd=new ut,xd=new Ti,zi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gm=0,_d=new I,Ys=new Ti,Fi=new ut,fo=new I,Yr=new I,Vm=new I,Wm=new Ti,Sd=new I(1,0,0),wd=new I(0,1,0),Md=new I(0,0,1),Td={type:"added"},qm={type:"removed"},Zs={type:"childadded",child:null},lc={type:"childremoved",child:null},$t=class n extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new zi,i=new Ti,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ye}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fo.copy(e):fo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Yr,fo,this.up):Fi.lookAt(fo,Yr,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Td),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qm),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Td),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new I(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xm={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(h,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},po={h:0,s:0,l:0};function hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Nm(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=hc(a,r,e+1/3),this.g=hc(a,r,e),this.b=hc(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=wt){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let i=kf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return lt.workingToColorSpace(_n.copy(this),e),Math.round(rt(_n.r*255,0,255))*65536+Math.round(rt(_n.g*255,0,255))*256+Math.round(rt(_n.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(_n.copy(this),t);let i=_n.r,s=_n.g,r=_n.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=wt){lt.workingToColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,s=_n.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(po);let i=ic(Ki.h,po.h,t),s=ic(Ki.s,po.s,t),r=ic(Ki.l,po.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Xe;Xe.NAMES=kf;var Ts=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=new I,Li=new I,cc=new I,Ni=new I,Js=new I,js=new I,Ed=new I,uc=new I,dc=new I,fc=new I,pc=new Ft,mc=new Ft,gc=new Ft,_i=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Li.subVectors(i,t),cc.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(Li),l=oi.dot(cc),h=Li.dot(Li),c=Li.dot(cc),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,i),gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Li.subVectors(e,t),oi.cross(Li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),oi.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Js.subVectors(s,i),js.subVectors(r,i),uc.subVectors(e,i);let l=Js.dot(uc),h=js.dot(uc);if(l<=0&&h<=0)return t.copy(i);dc.subVectors(e,s);let c=Js.dot(dc),d=js.dot(dc);if(c>=0&&d<=c)return t.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Js,a);fc.subVectors(e,r);let f=Js.dot(fc),g=js.dot(fc);if(g>=0&&f<=g)return t.copy(r);let y=f*h-l*g;if(y<=0&&h>=0&&g<=0)return o=h/(h-g),t.copy(i).addScaledVector(js,o);let p=c*g-f*d;if(p<=0&&d-c>=0&&f-g>=0)return Ed.subVectors(r,s),o=(d-c)/(d-c+(f-g)),t.copy(s).addScaledVector(Ed,o);let m=1/(p+y+u);return a=y*m,o=u*m,t.copy(i).addScaledVector(Js,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ei=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(r,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),go.subVectors(this.max,Zr),Ks.subVectors(e.a,Zr),Qs.subVectors(e.b,Zr),er.subVectors(e.c,Zr),Qi.subVectors(Qs,Ks),es.subVectors(er,Qs),xs.subVectors(Ks,er);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-xs.z,xs.y,Qi.z,0,-Qi.x,es.z,0,-es.x,xs.z,0,-xs.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-xs.y,xs.x,0];return!yc(t,Ks,Qs,er,go)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,Ks,Qs,er,go))?!1:(yo.crossVectors(Qi,es),t=[yo.x,yo.y,yo.z],yc(t,Ks,Qs,er,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new I,new I,new I,new I,new I,new I,new I,new I],li=new I,mo=new Ei,Ks=new I,Qs=new I,er=new I,Qi=new I,es=new I,xs=new I,Zr=new I,go=new I,yo=new I,_s=new I;function yc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){_s.fromArray(n,r);let o=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),h=t.dot(_s),c=i.dot(_s);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Xt=new I,bo=new Me,$m=0,Nn=class extends Mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=au,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var pa=class extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ym=new Ei,Jr=new I,bc=new I,Hi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ym.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(bc)),this.expandByPoint(Jr.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zm=0,Jn=new ut,vc=new $t,tr=new I,Gn=new Ei,jr=new Ei,ln=new I,Ot=class n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fm(e)?pa:fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Gn.min,jr.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,jr.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(jr.min),Gn.expandByPoint(jr.max))}Gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)ln.fromBufferAttribute(o,h),l&&(tr.fromBufferAttribute(e,h),ln.add(tr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Nn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new I,l[v]=new I;let h=new I,c=new I,d=new I,u=new Me,f=new Me,g=new Me,y=new I,p=new I;function m(v,A,P){h.fromBufferAttribute(i,v),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),c.sub(h),d.sub(h),f.sub(u),g.sub(u);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(S),o[v].add(y),o[A].add(y),o[P].add(y),l[v].add(p),l[A].add(p),l[P].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,A=_.length;v<A;++v){let P=_[v],S=P.start,D=P.count;for(let B=S,k=S+D;B<k;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let E=new I,x=new I,M=new I,T=new I;function C(v){M.fromBufferAttribute(s,v),T.copy(M);let A=o[v];E.copy(A),E.sub(M.multiplyScalar(M.dot(A))).normalize(),x.crossVectors(T,A);let S=x.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,S)}for(let v=0,A=_.length;v<A;++v){let P=_[v],S=P.start,D=P.count;for(let B=S,k=S+D;B<k;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,h=new I,c=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,p),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*c;for(let m=0;m<c;m++)u[g++]=h[f++]}return new Nn(u,c,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=e(l,i);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=au,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Cn=new I,ma=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xc=new I,Jm=new I,jm=new Ye,hi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=xc.subVectors(i,t).cross(Jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||jm.getNormalMatrix(e),s=this.coplanarPoint(xc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Km=0,Ai=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Tr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Wc,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Me().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yr=class extends Ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nr,Kr=new I,ir=new I,sr=new I,rr=new Me,Qr=new Me,Df=new ut,vo=new I,ea=new I,xo=new I,Ad=new Me,_c=new Me,Cd=new Me,ga=class extends $t{constructor(e=new yr){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tl(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new ma(i,3,0,!1)),nr.setAttribute("uv",new ma(i,2,3,!1))}this.geometry=nr,this.material=e,this.center=new Me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;_o(vo.set(-.5,-.5,0),sr,a,ir,s,r),_o(ea.set(.5,-.5,0),sr,a,ir,s,r),_o(xo.set(.5,.5,0),sr,a,ir,s,r),Ad.set(0,0),_c.set(1,0),Cd.set(1,1);let o=e.ray.intersectTriangle(vo,ea,xo,!1,Kr);if(o===null&&(_o(ea.set(-.5,.5,0),sr,a,ir,s,r),_c.set(0,1),o=e.ray.intersectTriangle(vo,xo,ea,!1,Kr),o===null))return;let l=e.ray.origin.distanceTo(Kr);l<e.near||l>e.far||t.push({distance:l,point:Kr.clone(),uv:_i.getInterpolation(Kr,vo,ea,xo,Ad,_c,Cd,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _o(n,e,t,i,s,r){rr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Qr.x=r*rr.x-s*rr.y,Qr.y=s*rr.x+r*rr.y):Qr.copy(rr),n.copy(e),n.x+=Qr.x,n.y+=Qr.y,n.applyMatrix4(Df)}var Ui=new I,Sc=new I,So=new I,wo=new I,br=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Sc.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),wo.copy(this.origin).sub(Sc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(So),o=wo.dot(this.direction),l=-wo.dot(So),h=wo.lengthSq(),c=Math.abs(1-a*a),d,u,f,g;if(c>0)if(d=a*l-o,u=a*o-l,g=r*c,d>=0)if(u>=-g)if(u<=g){let y=1/c;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sc).addScaledVector(So,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,s=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,s=(e.min.x-u.x)*h),c>=0?(r=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,p=t.z-a.z,m=i.x-a.x,_=i.y-a.y,E=i.z-a.z,x=Math.abs(l),M=Math.abs(h),T=Math.abs(c),C,v,A,P,S,D,B,k,O,J,F,se;if(x>=M&&x>=T?(A=l,D=d,O=g,se=m,l>=0?(C=h,v=c,P=u,S=f,B=y,k=p,J=_,F=E):(C=c,v=h,P=f,S=u,B=p,k=y,J=E,F=_)):M>=T?(A=h,D=u,O=y,se=_,h>=0?(C=c,v=l,P=f,S=d,B=p,k=g,J=E,F=m):(C=l,v=c,P=d,S=f,B=g,k=p,J=m,F=E)):(A=c,D=f,O=p,se=E,c>=0?(C=l,v=h,P=d,S=u,B=g,k=y,J=m,F=_):(C=h,v=l,P=u,S=d,B=y,k=g,J=_,F=m)),A===0)return null;let X=C/A,te=v/A,z=1/A,Q=P-X*D,oe=S-te*D,qe=B-X*O,Le=k-te*O,Ze=J-X*se,Y=F-te*se,ee=Ze*Le-Y*qe,we=Q*Y-oe*Ze,Ge=qe*oe-Le*Q;if(s){if(ee<0||we<0||Ge<0)return null}else if((ee<0||we<0||Ge<0)&&(ee>0||we>0||Ge>0))return null;let le=ee+we+Ge;if(le===0)return null;let $e=z*(ee*D+we*O+Ge*se);return(le>0?$e<0:$e>0)?null:this.at($e/le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rd=new ut,Ss=new br,Mo=new Hi,Pd=new I,To=new I,Eo=new I,Ao=new I,wc=new I,Co=new I,Id=new I,Ro=new I,ze=class extends $t{constructor(e=new Ot,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Co.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],d=r[l];c!==0&&(wc.fromBufferAttribute(d,e),a?Co.addScaledVector(wc,c):Co.addScaledVector(wc.sub(t),c))}t.add(Co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Mo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Mo,Pd)===null||Ss.origin.distanceToSquared(Pd)>(e.far-e.near)**2))&&(Rd.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Rd),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,M=E;x<M;x+=3){let T=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);s=Po(this,m,e,i,h,c,d,T,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let _=o.getX(p),E=o.getX(p+1),x=o.getX(p+2);s=Po(this,a,e,i,h,c,d,_,E,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,M=E;x<M;x+=3){let T=x,C=x+1,v=x+2;s=Po(this,m,e,i,h,c,d,T,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let _=p,E=p+1,x=p+2;s=Po(this,a,e,i,h,c,d,_,E,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Qm(n,e,t,i,s,r,a,o){let l;if(e.side===Pn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===cs,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(Ro);return h<t.near||h>t.far?null:{distance:h,point:Ro.clone(),object:n}}function Po(n,e,t,i,s,r,a,o,l,h){n.getVertexPosition(o,To),n.getVertexPosition(l,Eo),n.getVertexPosition(h,Ao);let c=Qm(n,e,t,i,To,Eo,Ao,Id);if(c){let d=new I;_i.getBarycoord(Id,To,Eo,Ao,d),s&&(c.uv=_i.getInterpolatedAttribute(s,o,l,h,d,new Me)),r&&(c.uv1=_i.getInterpolatedAttribute(r,o,l,h,d,new Me)),a&&(c.normal=_i.getInterpolatedAttribute(a,o,l,h,d,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new I,materialIndex:0};_i.getNormal(To,Eo,Ao,u.normal),c.face=u,c.barycoord=d}return c}var ya=class extends Rn{constructor(e=null,t=1,i=1,s,r,a,o,l,h=cn,c=cn,d,u){super(null,a,o,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ba=class extends Nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new ut,kd=new ut,Io=[],Dd=new Ei,e0=new ut,ta=new ze,na=new Hi,ss=class extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ba(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,e0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),Dd.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(Dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),na.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),e.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),kd.multiplyMatrices(i,ar),ta.matrixWorld=kd,ta.raycast(e,Io);for(let a=0,o=Io.length;a<o;a++){let l=Io[a];l.instanceId=r,l.object=this,t.push(l)}Io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ba(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ya(new Float32Array(s*this.count),s,this.count,Bl,Kn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<i.length;h++)a+=i[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new Hi,t0=new Me(.5,.5),ko=new I,vr=class{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],_=r[12],E=r[13],x=r[14],M=r[15];if(s[0].setComponents(h-a,f-c,m-g,M-_).normalize(),s[1].setComponents(h+a,f+c,m+g,M+_).normalize(),s[2].setComponents(h+o,f+d,m+y,M+E).normalize(),s[3].setComponents(h-o,f-d,m-y,M-E).normalize(),i)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(h-l,f-u,m-p,M-x).normalize();else if(s[4].setComponents(h-l,f-u,m-p,M-x).normalize(),t===ci)s[5].setComponents(h+l,f+u,m+p,M+x).normalize();else if(t===dr)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=t0.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xr=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},nl=new I,il=new I,Fd=new ut,ia=new br,Do=new Hi,Mc=new I,Ld=new I,sl=class extends $t{constructor(e=new Ot,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)nl.fromBufferAttribute(t,s-1),il.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=nl.distanceTo(il);e.setAttribute("lineDistance",new tt(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;Fd.copy(s).invert(),ia.copy(e.ray).applyMatrix4(Fd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=h){let m=c.getX(y),_=c.getX(y+1),E=Fo(this,e,ia,l,m,_,y);E&&t.push(E)}if(this.isLineLoop){let y=c.getX(g-1),p=c.getX(f),m=Fo(this,e,ia,l,y,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=h){let m=Fo(this,e,ia,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=Fo(this,e,ia,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fo(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(nl.fromBufferAttribute(o,s),il.fromBufferAttribute(o,r),t.distanceSqToSegment(nl,il,Mc,Ld)>i)return;Mc.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Mc);if(!(h<e.near||h>e.far))return{distance:h,point:Ld.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Nd=new I,Bd=new I,va=class extends sl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Nd.fromBufferAttribute(t,s),Bd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nd.distanceTo(Bd);e.setAttribute("lineDistance",new tt(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xa=class extends Rn{constructor(e=[],t=us,i,s,r,a,o,l,h,c){super(e,t,i,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sn=class extends Rn{constructor(e,t,i,s,r,a,o,l,h){super(e,t,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var rs=class extends Rn{constructor(e,t,i=di,s,r,a,o=cn,l=cn,h,c=wi,d=1){if(c!==wi&&c!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},rl=class extends rs{constructor(e,t=di,i=us,s,r,a=cn,o=cn,l,h=wi){let c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,s,r,a,o,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_a=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mt=class n extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2));function g(y,p,m,_,E,x,M,T,C,v,A){let P=x/C,S=M/v,D=x/2,B=M/2,k=T/2,O=C+1,J=v+1,F=0,se=0,X=new I;for(let te=0;te<J;te++){let z=te*S-B;for(let Q=0;Q<O;Q++){let oe=Q*P-D;X[y]=oe*_,X[p]=z*E,X[m]=k,h.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[m]=T>0?1:-1,c.push(X.x,X.y,X.z),d.push(Q/C),d.push(1-te/v),F+=1}}for(let te=0;te<v;te++)for(let z=0;z<C;z++){let Q=u+z+O*te,oe=u+z+O*(te+1),qe=u+(z+1)+O*(te+1),Le=u+(z+1)+O*te;l.push(Q,oe,Le),l.push(oe,qe,Le),se+=6}o.addGroup(f,se,A),f+=se,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Sa=class n extends Ot{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],h=[],c=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=i*2+r,y=s+1,p=new I,m=new I;for(let _=0;_<=g;_++){let E=0,x=0,M=0,T=0;if(_<=i){let A=_/i,P=A*Math.PI/2;x=-c-e*Math.cos(P),M=e*Math.sin(P),T=-e*Math.cos(P),E=A*d}else if(_<=i+r){let A=(_-i)/r;x=-c+A*t,M=e,T=0,E=d+A*u}else{let A=(_-i-r)/i,P=A*Math.PI/2;x=c+e*Math.sin(P),M=e*Math.cos(P),T=e*Math.sin(P),E=d+u+A*d}let C=Math.max(0,Math.min(1,E/f)),v=0;_===0?v=.5/s:_===g&&(v=-.5/s);for(let A=0;A<=s;A++){let P=A/s,S=P*Math.PI*2,D=Math.sin(S),B=Math.cos(S);m.x=-M*B,m.y=x,m.z=M*D,o.push(m.x,m.y,m.z),p.set(-M*B,T,M*D),p.normalize(),l.push(p.x,p.y,p.z),h.push(P+v,C)}if(_>0){let A=(_-1)*y;for(let P=0;P<s;P++){let S=A+P,D=A+P+1,B=_*y+P,k=_*y+P+1;a.push(S,D,B),a.push(D,k,B)}}}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},wa=class n extends Ot{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],h=new I,c=new Me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;h.x=e*Math.cos(f),h.y=e*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/e+1)/2,c.y=(a[u+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wn=class n extends Ot{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],f=[],g=0,y=[],p=i/2,m=0;_(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(c),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function _(){let x=new I,M=new I,T=0,C=(t-e)/i;for(let v=0;v<=r;v++){let A=[],P=v/r,S=P*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,k=B*l+o,O=Math.sin(k),J=Math.cos(k);M.x=S*O,M.y=-P*i+p,M.z=S*J,d.push(M.x,M.y,M.z),x.set(O,C,J).normalize(),u.push(x.x,x.y,x.z),f.push(B,1-P),A.push(g++)}y.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let P=y[A][v],S=y[A+1][v],D=y[A+1][v+1],B=y[A][v+1];(e>0||A!==0)&&(c.push(P,S,B),T+=3),(t>0||A!==r-1)&&(c.push(S,D,B),T+=3)}h.addGroup(m,T,0),m+=T}function E(x){let M=g,T=new Me,C=new I,v=0,A=x===!0?e:t,P=x===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,p*P,0),u.push(0,P,0),f.push(.5,.5),g++;let S=g;for(let D=0;D<=s;D++){let k=D/s*l+o,O=Math.cos(k),J=Math.sin(k);C.x=A*J,C.y=p*P,C.z=A*O,d.push(C.x,C.y,C.z),u.push(0,P,0),T.x=O*.5+.5,T.y=J*.5*P+.5,f.push(T.x,T.y),g++}for(let D=0;D<s;D++){let B=M+D,k=S+D;x===!0?c.push(k,k+1,B):c.push(k+1,k,B),v+=3}h.addGroup(m,v,x===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},as=class n extends wn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},al=class n extends Ot{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),h(i),c(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let E=new I,x=new I,M=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],E),f(t[T+1],x),f(t[T+2],M),l(E,x,M,_)}function l(_,E,x,M){let T=M+1,C=[];for(let v=0;v<=T;v++){C[v]=[];let A=_.clone().lerp(x,v/T),P=E.clone().lerp(x,v/T),S=T-v;for(let D=0;D<=S;D++)D===0&&v===T?C[v][D]=A:C[v][D]=A.clone().lerp(P,D/S)}for(let v=0;v<T;v++)for(let A=0;A<2*(T-v)-1;A++){let P=Math.floor(A/2);A%2===0?(u(C[v][P+1]),u(C[v+1][P]),u(C[v][P])):(u(C[v][P+1]),u(C[v+1][P+1]),u(C[v+1][P]))}}function h(_){let E=new I;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(_),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function c(){let _=new I;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let x=p(_)/2/Math.PI+.5,M=m(_)/Math.PI+.5;a.push(x,1-M)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let E=a[_+0],x=a[_+2],M=a[_+4],T=Math.max(E,x,M),C=Math.min(E,x,M);T>.9&&C<.1&&(E<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),M<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,E){let x=_*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){let _=new I,E=new I,x=new I,M=new I,T=new Me,C=new Me,v=new Me;for(let A=0,P=0;A<r.length;A+=9,P+=6){_.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),T.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),M.copy(_).add(E).add(x).divideScalar(3);let S=p(M);y(T,P+0,_,S),y(C,P+2,E,S),y(v,P+4,x,S)}}function y(_,E,x,M){M<0&&_.x===1&&(a[E]=_.x-1),x.x===0&&x.z===0&&(a[E]=M/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Lo=new I,No=new I,Tc=new I,Bo=new _i,Ma=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Go*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){a?(h[0]=a.getX(g),h[1]=a.getX(g+1),h[2]=a.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);let{a:y,b:p,c:m}=Bo;if(y.fromBufferAttribute(o,h[0]),p.fromBufferAttribute(o,h[1]),m.fromBufferAttribute(o,h[2]),Bo.getNormal(Tc),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let E=(_+1)%3,x=d[_],M=d[E],T=Bo[c[_]],C=Bo[c[E]],v=`${x}_${M}`,A=`${M}_${x}`;A in u&&u[A]?(Tc.dot(u[A].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),u[A]=null):v in u||(u[v]={index0:h[_],index1:h[E],normal:Tc.clone()})}}for(let g in u)if(u[g]){let{index0:y,index1:p}=u[g];Lo.fromBufferAttribute(o,y),No.fromBufferAttribute(o,p),f.push(Lo.x,Lo.y,Lo.z),f.push(No.x,No.y,No.z)}this.setAttribute("position",new tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let c=i[s],u=i[s+1]-c,f=(a-c)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new ut;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ta=class extends jn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Me){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ol=class extends Ta{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,d){let u=(a-r)/h-(o-r)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,f*=c,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Ud=new I,Od=new I,Ec=new lu,Ac=new lu,Cc=new lu,_r=class extends jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=s[(o-1)%r]:(Od.subVectors(s[0],s[1]).add(s[0]),h=Od);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(Ud.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Ud),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(c),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Ec.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,g,y,p),Ac.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,g,y,p),Cc.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,g,y,p)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),Ac.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),Cc.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(Ec.calc(l),Ac.calc(l),Cc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function n0(n,e){let t=1-n;return t*t*e}function i0(n,e){return 2*(1-n)*n*e}function s0(n,e){return n*n*e}function sa(n,e,t,i){return n0(n,e)+i0(n,t)+s0(n,i)}function r0(n,e){let t=1-n;return t*t*t*e}function a0(n,e){let t=1-n;return 3*t*t*n*e}function o0(n,e){return 3*(1-n)*n*n*e}function l0(n,e){return n*n*n*e}function ra(n,e,t,i,s){return r0(n,e)+a0(n,t)+o0(n,i)+l0(n,s)}var ll=class extends jn{constructor(e=new Me,t=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,s.x,r.x,a.x,o.x),ra(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hl=class extends jn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,s.x,r.x,a.x,o.x),ra(e,s.y,r.y,a.y,o.y),ra(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cl=class extends jn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends jn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends jn{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(sa(e,s.x,r.x,a.x),sa(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends jn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(sa(e,s.x,r.x,a.x),sa(e,s.y,r.y,a.y),sa(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],c=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(zd(o,l.x,h.x,c.x,d.x),zd(o,l.y,h.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},h0=Object.freeze({__proto__:null,ArcCurve:ol,CatmullRomCurve3:_r,CubicBezierCurve:ll,CubicBezierCurve3:hl,EllipseCurve:Ta,LineCurve:cl,LineCurve3:ul,QuadraticBezierCurve:dl,QuadraticBezierCurve3:Ea,SplineCurve:fl});var Aa=class n extends al{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var en=class n extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,d=e/o,u=t/l,f=[],g=[],y=[],p=[];for(let m=0;m<c;m++){let _=m*u-a;for(let E=0;E<h;E++){let x=E*d-r;g.push(x,-_,0),y.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let E=_+h*m,x=_+h*(m+1),M=_+1+h*(m+1),T=_+1+h*m;f.push(E,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var It=class n extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],d=new I,u=new I,f=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let _=[],E=m/i,x=a+E*o,M=e*Math.cos(x),T=Math.sqrt(e*e-M*M),C=0;m===0&&a===0?C=.5/t:m===i&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){let A=v/t,P=s+A*r;d.x=-T*Math.cos(P),d.y=M,d.z=T*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(A+C,1-E),_.push(h++)}c.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let E=c[m][_+1],x=c[m][_],M=c[m+1][_],T=c[m+1][_+1];(m!==0||a>0)&&f.push(E,x,T),(m!==i-1||l<Math.PI)&&f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ca=class n extends Ot{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=new I,f=new I,g=new I;for(let y=0;y<=i;y++){let p=a+y/i*o;for(let m=0;m<=s;m++){let _=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),h.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),g.subVectors(f,u).normalize(),c.push(g.x,g.y,g.z),d.push(m/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,_=(s+1)*(y-1)+p-1,E=(s+1)*(y-1)+p,x=(s+1)*y+p;l.push(m,_,x),l.push(_,E,x)}this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ra=class n extends Ot{constructor(e=new Ea(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,h=new Me,c=new I,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function y(){for(let E=0;E<t;E++)p(E);p(r===!1?t:0),_(),m()}function p(E){c=e.getPointAt(E/t,c);let x=a.normals[E],M=a.binormals[E];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,v=Math.sin(C),A=-Math.cos(C);l.x=A*x.x+v*M.x,l.y=A*x.y+v*M.y,l.z=A*x.z+v*M.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){let M=(s+1)*(E-1)+(x-1),T=(s+1)*E+(x-1),C=(s+1)*E+x,v=(s+1)*(E-1)+x;g.push(M,T,v),g.push(T,C,v)}}function _(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)h.x=E/t,h.y=x/s,f.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new h0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Hd(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Hd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Tn(n){let e={};for(let t=0;t<n.length;t++){let i=Is(n[t]);for(let s in i)e[s]=i[s]}return e}function Hd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function c0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Ff={clone:Is,merge:Tn},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pl=class extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mn=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ml=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gl=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function or(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Rc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dc:r=e,o=2*t-i;break;case Fc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dc:a=e,l=2*i-t;break;case Fc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let h=(i-t)*.5,c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,_=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-f)*p+(1.5+f)*y+.5*g,x=f*p-f*y;for(let M=0;M!==o;++M)r[M]=m*a[c+M]+_*a[h+M]+E*a[l+M]+x*a[d+M];return r}},bl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(s-t),d=1-c;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[l+u]*c;return r}},vl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xl=class extends os{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this.inTangents,d=this.outTangents;if(!c||!d){let g=(i-t)/(s-t),y=1-g;for(let p=0;p!==o;++p)r[p]=a[h+p]*y+a[l+p]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[h+g],p=a[l+g],m=f*u+g*2,_=d[m],E=d[m+1],x=e*u+g*2,M=c[x],T=c[x+1],C=p0(i,t,_,M,s);r[g]=Lf(C,y,E,T,p)}return r}};function Lf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function f0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function p0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Lf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=f0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Rc(e.settings)&&(i.settings={inTangents:or(e.settings.inTangents,Array),outTangents:or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case aa:t=this.InterpolantFactoryMethodDiscrete;break;case jo:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break;case Ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return zo;case this.InterpolantFactoryMethodBezier:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Rc(this.settings)&&(Gd(this.settings.inTangents,e),Gd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Lm(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){Ve("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=e[o],c=e[o+1];if(h!==c&&(o!==1||h!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Rc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=jo;var ls=class extends Wn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=aa;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};_l.prototype.ValueTypeName="color";var Sl=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Sl.prototype.ValueTypeName="number";var wl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),h=e*o;for(let c=h+o;h!==c;h+=4)Ti.slerpFlat(r,0,a,h-o,a,h,l);return r}},Pa=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Wn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=aa;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Ml.prototype.ValueTypeName="vector";var Tl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],g=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nf=new Tl,El=class{constructor(e){this.manager=e!==void 0?e:Nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};El.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Es=class extends Sr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Pc=new ut,Vd=new I,Wd=new I,Ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Pc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uo=new I,Oo=new Ti,vi=new I,ka=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Oo,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Oo,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Uo,Oo,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Oo,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new I,qd=new Me,Xd=new Me,Kt=class extends ka{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,qd,Xd),t.subVectors(Xd,qd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lc=class extends Ia{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ua*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Da=class extends Sr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Lc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var wr=class extends ka{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nc=class extends Ia{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var lr=-90,hr=1,Al=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(lr,hr,e,t);s.layers=this.layers,this.add(s);let r=new Kt(lr,hr,e,t);r.layers=this.layers,this.add(r);let a=new Kt(lr,hr,e,t);a.layers=this.layers,this.add(a);let o=new Kt(lr,hr,e,t);o.layers=this.layers,this.add(o);let l=new Kt(lr,hr,e,t);l.layers=this.layers,this.add(l);let h=new Kt(lr,hr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let h of t)this.remove(h);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Cl=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var cu="\\[\\]\\.:\\/",m0=new RegExp("["+cu+"]","g"),uu="[^"+cu+"]",g0="[^"+cu.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",uu),b0=/(WCOD+)?/.source.replace("WCOD",g0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),x0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),_0=new RegExp("^"+y0+b0+v0+x0+"$"),S0=["material","materials","bones","map"],Bc=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(e){let t=_0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);S0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Bc;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cx=new Float32Array(1);var $d=new ut,Cs=class{constructor(e,t,i=0,s=1/0){this.ray=new br(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $d.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($d),this}intersectObject(e,t=!0,i=[]){return Uc(e,this,i,t),i.sort(Yd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Uc(e[s],this,i,t);return i.sort(Yd),i}};function Yd(n,e){return n.distance-e.distance}function Uc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Uc(r[a],e,t,!0)}}var Oc=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function du(n,e,t,i){let s=w0(i);switch(t){case su:return n*e;case Bl:return n*e/s.components*s.byteLength;case Ul:return n*e/s.components*s.byteLength;case ps:return n*e*2/s.components*s.byteLength;case Ol:return n*e*2/s.components*s.byteLength;case ru:return n*e*3/s.components*s.byteLength;case Qn:return n*e*4/s.components*s.byteLength;case zl:return n*e*4/s.components*s.byteLength;case Ba:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oa:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Wl:return Math.max(n,16)*Math.max(e,8)/4;case Hl:case Vl:return Math.max(n,8)*Math.max(e,8)/2;case ql:case Xl:case Yl:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $l:case Ha:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uh:case dh:case fh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ph:case mh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ga:case gh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(n){switch(n){case On:case eu:return{byteLength:1,components:1};case Ar:case tu:case fi:return{byteLength:2,components:1};case Ll:case Nl:return{byteLength:2,components:4};case di:case Fl:case Kn:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);function sp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function M0(n){let e=new WeakMap;function t(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,h){let c=l.array,d=l.updateRanges;if(n.bindBuffer(h,o),d.length===0)n.bufferSubData(h,0,c);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,O0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Y0=`#define PI 3.141592653589793
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yg=`#ifdef USE_ENVMAP
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
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
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
#endif`,wg=`uniform sampler2D dfgLUT;
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
}`,Mg=`
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lg=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
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
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cy=`float getShadowMask() {
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
}`,uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dy=`#ifdef USE_SKINNING
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
#endif`,fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
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
}`,ky=`#if DEPTH_PACKING == 3200
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
}`,Dy=`#define DISTANCE
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
}`,Fy=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,zy=`uniform vec3 diffuse;
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
}`,Hy=`#define LAMBERT
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
}`,Gy=`#define LAMBERT
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
}`,Vy=`#define MATCAP
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
}`,Wy=`#define MATCAP
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
}`,qy=`#define NORMAL
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
}`,Xy=`#define NORMAL
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
}`,$y=`#define PHONG
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
}`,Yy=`#define PHONG
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
}`,Zy=`#define STANDARD
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
}`,Jy=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,Ky=`#define TOON
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
}`,Qy=`uniform float size;
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
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
}`,nb=`uniform vec3 color;
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
}`,ib=`uniform float rotation;
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
}`,sb=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:T0,alphahash_pars_fragment:E0,alphamap_fragment:A0,alphamap_pars_fragment:C0,alphatest_fragment:R0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:k0,batching_pars_vertex:D0,batching_vertex:F0,begin_vertex:L0,beginnormal_vertex:N0,bsdfs:B0,iridescence_fragment:U0,bumpmap_pars_fragment:O0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:V0,color_fragment:W0,color_pars_fragment:q0,color_pars_vertex:X0,color_vertex:$0,common:Y0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:J0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:Q0,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:yg,envmap_vertex:og,fog_vertex:lg,fog_pars_vertex:hg,fog_fragment:cg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:bg,lights_toon_pars_fragment:vg,lights_phong_fragment:xg,lights_phong_pars_fragment:_g,lights_physical_fragment:Sg,lights_physical_pars_fragment:wg,lights_fragment_begin:Mg,lights_fragment_maps:Tg,lights_fragment_end:Eg,lightprobes_pars_fragment:Ag,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Ig,map_fragment:kg,map_pars_fragment:Dg,map_particle_fragment:Fg,map_particle_pars_fragment:Lg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Bg,morphinstance_vertex:Ug,morphcolor_vertex:Og,morphnormal_vertex:zg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Gg,normal_fragment_begin:Vg,normal_fragment_maps:Wg,normal_pars_fragment:qg,normal_pars_vertex:Xg,normal_vertex:$g,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:jg,iridescence_pars_fragment:Kg,opaque_fragment:Qg,packing:ey,premultiplied_alpha_fragment:ty,project_vertex:ny,dithering_fragment:iy,dithering_pars_fragment:sy,roughnessmap_fragment:ry,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ly,shadowmap_vertex:hy,shadowmask_pars_fragment:cy,skinbase_vertex:uy,skinning_pars_vertex:dy,skinning_vertex:fy,skinnormal_vertex:py,specularmap_fragment:my,specularmap_pars_fragment:gy,tonemapping_fragment:yy,tonemapping_pars_fragment:by,transmission_fragment:vy,transmission_pars_fragment:xy,uv_pars_fragment:_y,uv_pars_vertex:Sy,uv_vertex:wy,worldpos_vertex:My,background_vert:Ty,background_frag:Ey,backgroundCube_vert:Ay,backgroundCube_frag:Cy,cube_vert:Ry,cube_frag:Py,depth_vert:Iy,depth_frag:ky,distance_vert:Dy,distance_frag:Fy,equirect_vert:Ly,equirect_frag:Ny,linedashed_vert:By,linedashed_frag:Uy,meshbasic_vert:Oy,meshbasic_frag:zy,meshlambert_vert:Hy,meshlambert_frag:Gy,meshmatcap_vert:Vy,meshmatcap_frag:Wy,meshnormal_vert:qy,meshnormal_frag:Xy,meshphong_vert:$y,meshphong_frag:Yy,meshphysical_vert:Zy,meshphysical_frag:Jy,meshtoon_vert:jy,meshtoon_frag:Ky,points_vert:Qy,points_frag:eb,shadow_vert:tb,shadow_frag:nb,sprite_vert:ib,sprite_frag:sb},be={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Pi={basic:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Tn([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Tn([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Tn([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Tn([be.common,be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Tn([be.lights,be.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Pi.physical={uniforms:Tn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var xh={r:0,b:0,g:0},rb=new ut,rp=new Ye;rp.set(-1,0,0,0,1,0,0,0,1);function ab(n,e,t,i,s,r){let a=new Xe(0),o=s===!0?0:1,l,h,c=null,d=0,u=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let x=_.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(_){let E=!1,x=f(_);x===null?p(a,o):x&&x.isColor&&(p(x,1),E=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===La)?(h===void 0&&(h=new ze(new Mt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Is(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(rp),h.material.toneMapped=lt.getTransfer(x.colorSpace)!==gt,(c!==x||d!==x.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=x,d=x.version,u=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ze(new en(2,2),new Vn({name:"BackgroundMaterial",uniforms:Is(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=lt.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,c=x,d=x.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,E){_.getRGB(xh,hu(n)),t.buffers.color.setClear(xh.r,xh.g,xh.b,E,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:y,dispose:m}}function ob(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(S,D,B,k,O){let J=!1,F=d(S,k,B,D);r!==F&&(r=F,h(r.object)),J=f(S,k,B,O),J&&g(S,k,B,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(S,D,B,k),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function h(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function d(S,D,B,k){let O=k.wireframe===!0,J=i[D.id];J===void 0&&(J={},i[D.id]=J);let F=S.isInstancedMesh===!0?S.id:0,se=J[F];se===void 0&&(se={},J[F]=se);let X=se[B.id];X===void 0&&(X={},se[B.id]=X);let te=X[O];return te===void 0&&(te=u(l()),X[O]=te),te}function u(S){let D=[],B=[],k=[];for(let O=0;O<t;O++)D[O]=0,B[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,D,B,k){let O=r.attributes,J=D.attributes,F=0,se=B.getAttributes();for(let X in se)if(se[X].location>=0){let z=O[X],Q=J[X];if(Q===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),z===void 0||z.attribute!==Q||Q&&z.data!==Q.data)return!0;F++}return r.attributesNum!==F||r.index!==k}function g(S,D,B,k){let O={},J=D.attributes,F=0,se=B.getAttributes();for(let X in se)if(se[X].location>=0){let z=J[X];z===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(z=S.instanceColor));let Q={};Q.attribute=z,z&&z.data&&(Q.data=z.data),O[X]=Q,F++}r.attributes=O,r.attributesNum=F,r.index=k}function y(){let S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function p(S){m(S,0)}function m(S,D){let B=r.newAttributes,k=r.enabledAttributes,O=r.attributeDivisors;B[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),O[S]!==D&&(n.vertexAttribDivisor(S,D),O[S]=D)}function _(){let S=r.newAttributes,D=r.enabledAttributes;for(let B=0,k=D.length;B<k;B++)D[B]!==S[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function E(S,D,B,k,O,J,F){F===!0?n.vertexAttribIPointer(S,D,B,O,J):n.vertexAttribPointer(S,D,B,k,O,J)}function x(S,D,B,k){y();let O=k.attributes,J=B.getAttributes(),F=D.defaultAttributeValues;for(let se in J){let X=J[se];if(X.location>=0){let te=O[se];if(te===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){let z=te.normalized,Q=te.itemSize,oe=e.get(te);if(oe===void 0)continue;let qe=oe.buffer,Le=oe.type,Ze=oe.bytesPerElement,Y=Le===n.INT||Le===n.UNSIGNED_INT||te.gpuType===Fl;if(te.isInterleavedBufferAttribute){let ee=te.data,we=ee.stride,Ge=te.offset;if(ee.isInstancedInterleavedBuffer){for(let le=0;le<X.locationSize;le++)m(X.location+le,ee.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<X.locationSize;le++)p(X.location+le);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let le=0;le<X.locationSize;le++)E(X.location+le,Q/X.locationSize,Le,z,we*Ze,(Ge+Q/X.locationSize*le)*Ze,Y)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee,te.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<X.locationSize;ee++)p(X.location+ee);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ee=0;ee<X.locationSize;ee++)E(X.location+ee,Q/X.locationSize,Le,z,Q*Ze,Q/X.locationSize*ee*Ze,Y)}}else if(F!==void 0){let z=F[se];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(X.location,z);break;case 3:n.vertexAttrib3fv(X.location,z);break;case 4:n.vertexAttrib4fv(X.location,z);break;default:n.vertexAttrib1fv(X.location,z)}}}}_()}function M(){A();for(let S in i){let D=i[S];for(let B in D){let k=D[B];for(let O in k){let J=k[O];for(let F in J)c(J[F].object),delete J[F];delete k[O]}}delete i[S]}}function T(S){if(i[S.id]===void 0)return;let D=i[S.id];for(let B in D){let k=D[B];for(let O in k){let J=k[O];for(let F in J)c(J[F].object),delete J[F];delete k[O]}}delete i[S.id]}function C(S){for(let D in i){let B=i[D];for(let k in B){let O=B[k];if(O[S.id]===void 0)continue;let J=O[S.id];for(let F in J)c(J[F].object),delete J[F];delete O[S.id]}}}function v(S){for(let D in i){let B=i[D],k=S.isInstancedMesh===!0?S.id:0,O=B[k];if(O!==void 0){for(let J in O){let F=O[J];for(let se in F)c(F[se].object),delete F[se];delete O[J]}delete B[k],Object.keys(B).length===0&&delete i[D]}}}function A(){P(),a=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function lb(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),t.update(h,i,c))}function o(l,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Qn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==On&&C!==Kn&&!v&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",c=l(h);c!==h&&(Oe("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:x,maxSamples:M,samples:T}}function cb(n){let e=this,t=null,i=0,s=!1,r=!1,a=new hi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?c(null):h();else{let _=r?0:i,E=_*4,x=m.clippingState||null;l.value=x,x=c(g,u,E,f);for(let M=0;M!==E;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,u,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,x=f;E!==y;++E,x+=4)a.copy(d[E]).applyMatrix4(_,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Pr=4,ub=6,db=20,fb=256,Va=new wr,Bf=new Xe,fu=null,pu=0,mu=0,gu=!1,pb=new I,ks=new I,Sh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=pb}=r;fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,pu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:fi,format:Qn,colorSpace:oa,depthBuffer:!1},s=Uf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mb(r)),this._blurMaterial=yb(r,e,t),this._ggxMaterial=gb(r,e,t)}return s}_compileMaterial(e){let t=new ze(new Ot,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,i,s,r){let l=new Kt(90,1,t,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Bf),d.toneMapping=ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Mt,new un({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Bf),m=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,h[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[E],r.y,r.z)):x===1?(l.up.set(0,0,h[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[E],r.z)):(l.up.set(0,h[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[E]));let M=this._cubeSize;Rr(s,x*M,E>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===us||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Rr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Va)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,h=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(h*h-c*c),u=h*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-Pr?i-g+Pr:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Rr(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(o,Va),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Rr(e,p,m,3*y,2*y),s.setRenderTarget(e),s.render(o,Va)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let h=o.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let c=this._sizeLods[s],d=3*c*(s>this._lodMax-Pr?s-this._lodMax+Pr:0),u=4*(this._cubeSize-c);Rr(t,d,u,3*c,2*c),a.setRenderTarget(t),a.render(l,Va)}};function mb(n){let e=[],t=[],i=n,s=n-Pr+1+ub;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let m=0;m<d;m++){let _=m%3*2/3-1,E=m>2?0:-1,x=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];g.set(x,f*u*m);for(let M=0;M<u;M++){let T=c[M*2]*2-1,C=c[M*2+1]*2-1;m===0?ks.set(1,C,T):m===1?ks.set(-T,1,-C):m===2?ks.set(-T,C,1):m===3?ks.set(-1,C,-T):m===4?ks.set(-T,-1,C):ks.set(T,C,-1),ks.toArray(y,(m*u+M)*f)}}let p=new Ot;p.setAttribute("position",new Nn(g,f)),p.setAttribute("outputDirection",new Nn(y,f)),t.push(new ze(p,null)),i>Pr&&i--}return{lodMeshes:t,sizeLods:e}}function Uf(n,e,t){let i=new Bn(n,e,t);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function gb(n,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function yb(n,e,t){return new Vn({name:"SphericalGaussianBlur",defines:{SAMPLES:db,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Of(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function zf(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wh=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Ci});r.uniforms.tEquirect.value=t;let a=new ze(s,r),o=t.minFilter;return t.minFilter===ds&&(t.minFilter=Qt),new Al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function bb(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Il||f===kl)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new wh(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",h),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Il||f===kl,y=f===us||f===Ps;if(g||y){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Sh(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return g&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new Sh(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",c),p.texture):null}}}return u}function o(u,f){return f===Il?u.mapping=us:f===kl&&(u.mapping=Ps),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function vb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ms("WebGLRenderer: "+i+" extension not supported."),s}}}function xb(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function h(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let _=f.array;y=f.version;for(let E=0,x=_.length;E<x;E+=3){let M=_[E+0],T=_[E+1],C=_[E+2];u.push(M,T,T,C,C,M)}}else{let _=g.array;y=g.version;for(let E=0,x=_.length/3-1;E<x;E+=3){let M=E+0,T=E+1,C=E+2;u.push(M,T,T,C,C,M)}}let p=new(g.count>=65535?pa:fa)(u,1);p.version=y;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function c(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function _b(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function h(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),t.update(u,i,f))}function c(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let p=0;p<f;p++)y+=u[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Sb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wb(n,e,t){let i=new WeakMap,s=new Ft;function r(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=i.get(o);if(u===void 0||u.count!==d){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let x=o.attributes.position.count*E,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*M*4*d),C=new da(T,x,M,d);C.type=Kn,C.needsUpdate=!0;let v=E*4;for(let P=0;P<d;P++){let S=p[P],D=m[P],B=_[P],k=x*M*4*P;for(let O=0;O<S.count;O++){let J=O*v;f===!0&&(s.fromBufferAttribute(S,O),T[k+J+0]=s.x,T[k+J+1]=s.y,T[k+J+2]=s.z,T[k+J+3]=0),g===!0&&(s.fromBufferAttribute(D,O),T[k+J+4]=s.x,T[k+J+5]=s.y,T[k+J+6]=s.z,T[k+J+7]=0),y===!0&&(s.fromBufferAttribute(B,O),T[k+J+8]=s.x,T[k+J+9]=s.y,T[k+J+10]=s.z,T[k+J+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Me(x,M)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Mb(n,e,t,i,s){let r=new WeakMap;function a(h){let c=s.render.frame,d=h.geometry,u=e.get(h,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}var Tb={[Xc]:"LINEAR_TONE_MAPPING",[$c]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[Zc]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[Kc]:"NEUTRAL_TONE_MAPPING",[Jc]:"CUSTOM_TONE_MAPPING"};function Eb(n,e,t,i,s,r){let a=new Bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Ot;h.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tt([0,2,0,0,2,0],2));let c=new pl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ze(h,c),u=new wr(-1,1,1,-1,0,1),f=null,g=null,y=!1,p,m=null,_=[],E=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let T=0;T<_.length;T++){let C=_[T];C.setSize&&C.setSize(x,M)}},this.setEffects=function(x){_=x,E=_.length>0&&_[0].isRenderPass===!0;let M=a.width,T=a.height;_.length>0&&o===null&&(o=new Bn(M,T,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(M,T,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let v=_[C];v.setSize&&v.setSize(M,T)}},this.begin=function(x,M){if(y||x.toneMapping===ui&&_.length===0)return!1;if(m=M,M!==null){let T=M.width,C=M.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return E===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=ui,!0},this.hasRenderPass=function(){return E},this.end=function(x,M){x.toneMapping=p,y=!0;let T=a,C=o;for(let v=0;v<_.length;v++){let A=_[v];A.enabled!==!1&&(A.render(x,C,T,M),A.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,c.defines={},lt.getTransfer(f)===gt&&(c.defines.SRGB_TRANSFER="");let v=Tb[g];v&&(c.defines[v]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(d,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var ap=new Rn,vu=new rs(1,1),op=new da,lp=new el,hp=new xa,Hf=[],Gf=[],Vf=new Float32Array(16),Wf=new Float32Array(9),qf=new Float32Array(4);function Dr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Hf[s];if(r===void 0&&(r=new Float32Array(s),Hf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Th(n,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ab(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function Rb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function Pb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function Ib(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;qf.set(i),n.uniformMatrix2fv(this.addr,!1,qf),nn(t,i)}}function kb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Wf.set(i),n.uniformMatrix3fv(this.addr,!1,Wf),nn(t,i)}}function Db(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Vf.set(i),n.uniformMatrix4fv(this.addr,!1,Vf),nn(t,i)}}function Fb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function Nb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function Bb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function Ub(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ob(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function zb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function Hb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function Gb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vu.compareFunction=t.isReversedDepthBuffer()?vh:bh,r=vu):r=ap,t.setTexture2D(e||r,s)}function Vb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lp,s)}function Wb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hp,s)}function qb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||op,s)}function Xb(n){switch(n){case 5126:return Ab;case 35664:return Cb;case 35665:return Rb;case 35666:return Pb;case 35674:return Ib;case 35675:return kb;case 35676:return Db;case 5124:case 35670:return Fb;case 35667:case 35671:return Lb;case 35668:case 35672:return Nb;case 35669:case 35673:return Bb;case 5125:return Ub;case 36294:return Ob;case 36295:return zb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return qb}}function $b(n,e){n.uniform1fv(this.addr,e)}function Yb(n,e){let t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function Zb(n,e){let t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function Jb(n,e){let t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function jb(n,e){let t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kb(n,e){let t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qb(n,e){let t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e1(n,e){n.uniform1iv(this.addr,e)}function t1(n,e){n.uniform2iv(this.addr,e)}function n1(n,e){n.uniform3iv(this.addr,e)}function i1(n,e){n.uniform4iv(this.addr,e)}function s1(n,e){n.uniform1uiv(this.addr,e)}function r1(n,e){n.uniform2uiv(this.addr,e)}function a1(n,e){n.uniform3uiv(this.addr,e)}function o1(n,e){n.uniform4uiv(this.addr,e)}function l1(n,e,t){let i=this.cache,s=e.length,r=Th(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=vu:a=ap;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function h1(n,e,t){let i=this.cache,s=e.length,r=Th(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||lp,r[a])}function c1(n,e,t){let i=this.cache,s=e.length,r=Th(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hp,r[a])}function u1(n,e,t){let i=this.cache,s=e.length,r=Th(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||op,r[a])}function d1(n){switch(n){case 5126:return $b;case 35664:return Yb;case 35665:return Zb;case 35666:return Jb;case 35674:return jb;case 35675:return Kb;case 35676:return Qb;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return s1;case 36294:return r1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}var xu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xb(t.type)}},_u=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d1(t.type)}},Su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},yu=/(\w+)(\])?(\[|\.)?/g;function Xf(n,e){n.seq.push(e),n.map[e.id]=e}function f1(n,e,t){let i=n.name,s=i.length;for(yu.lastIndex=0;;){let r=yu.exec(i),a=yu.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Xf(t,h===void 0?new xu(o,n,e):new _u(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Su(o),Xf(t,d)),t=d}}}var Ir=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);f1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function $f(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var p1=37297,m1=0;function g1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Yf=new Ye;function y1(n){lt._getMatrix(Yf,lt.workingColorSpace,n);let e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+g1(n.getShaderSource(e),o)}else return r}function b1(n,e){let t=y1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var v1={[Xc]:"Linear",[$c]:"Reinhard",[Yc]:"Cineon",[Zc]:"ACESFilmic",[jc]:"AgX",[Kc]:"Neutral",[Jc]:"Custom"};function x1(n,e){let t=v1[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _h=new I;function _1(){lt.getLuminanceCoefficients(_h);let n=_h.x.toFixed(4),e=_h.y.toFixed(4),t=_h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function w1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qa(n){return n!==""}function Jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(T1,A1)}var E1=new Map;function A1(n,e){let t=et[e];if(t===void 0){let i=E1.get(e);if(i!==void 0)t=et[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wu(t)}var C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(n){return n.replace(C1,R1)}function R1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var P1={[Fa]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function I1(n){return P1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var k1={[us]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function D1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":k1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var F1={[Ps]:"ENVMAP_MODE_REFRACTION"};function L1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":F1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N1={[qc]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[yf]:"ENVMAP_BLENDING_ADD"};function B1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":N1[n.combine]||"ENVMAP_BLENDING_NONE"}function U1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function O1(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=I1(t),h=D1(t),c=L1(t),d=B1(t),u=U1(t),f=S1(t),g=w1(r),y=s.createProgram(),p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`)):(p=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),m=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?et.tonemapping_pars_fragment:"",t.toneMapping!==ui?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,b1("linearToOutputTexel",t.outputColorSpace),_1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=wu(a),a=Jf(a,t),a=jf(a,t),o=wu(o),o=Jf(o,t),o=jf(o,t),a=Kf(a),o=Kf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+p+a,x=_+m+o,M=$f(s,s.VERTEX_SHADER,E),T=$f(s,s.FRAGMENT_SHADER,x);s.attachShader(y,M),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(S){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(T)||"",O=D.trim(),J=B.trim(),F=k.trim(),se=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,M,T);else{let te=Zf(s,M,"vertex"),z=Zf(s,T,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+O+`
`+te+`
`+z)}else O!==""?Oe("WebGLProgram: Program Info Log:",O):(J===""||F==="")&&(X=!1);X&&(S.diagnostics={runnable:se,programLog:O,vertexShader:{log:J,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(M),s.deleteShader(T),v=new Ir(s,y),A=M1(s,y)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,p1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=T,this}var z1=0,Mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Tu(e),t.set(e,i)),i}},Tu=class{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}};function H1(n){return n===ps||n===Ha||n===Ga}function G1(n,e,t,i,s,r){let a=new mr,o=new Mu,l=new Set,h=[],c=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,A,P,S,D,B){let k=S.fog,O=D.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?S.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=e.get(v.envMap||J,F),X=se&&se.mapping===La?se.image.height:null,te=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=z!==void 0?z.length:0,oe=0;O.morphAttributes.position!==void 0&&(oe=1),O.morphAttributes.normal!==void 0&&(oe=2),O.morphAttributes.color!==void 0&&(oe=3);let qe,Le,Ze,Y;if(te){let Et=Pi[te];qe=Et.vertexShader,Le=Et.fragmentShader}else{qe=v.vertexShader,Le=v.fragmentShader;let Et=o.getVertexShaderStage(v),pt=o.getFragmentShaderStage(v);o.update(v,Et,pt),Ze=Et.id,Y=pt.id}let ee=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ge=D.isInstancedMesh===!0,le=D.isBatchedMesh===!0,$e=!!v.map,ft=!!v.matcap,We=!!se,at=!!v.aoMap,dt=!!v.lightMap,ot=!!v.bumpMap&&v.wireframe===!1,Dt=!!v.normalMap,on=!!v.displacementMap,Ln=!!v.emissiveMap,Lt=!!v.metalnessMap,Wt=!!v.roughnessMap,U=v.anisotropy>0,bn=v.clearcoat>0,bt=v.dispersion>0,R=v.retroreflectivity>0,b=v.iridescence>0,G=v.sheen>0,q=v.transmission>0,j=U&&!!v.anisotropyMap,ce=bn&&!!v.clearcoatMap,ue=bn&&!!v.clearcoatNormalMap,K=bn&&!!v.clearcoatRoughnessMap,ie=b&&!!v.iridescenceMap,de=b&&!!v.iridescenceThicknessMap,De=G&&!!v.sheenColorMap,ye=G&&!!v.sheenRoughnessMap,fe=!!v.specularMap,Fe=!!v.specularColorMap,He=!!v.specularIntensityMap,Je=q&&!!v.transmissionMap,N=q&&!!v.thicknessMap,pe=!!v.gradientMap,ne=!!v.alphaMap,me=v.alphaTest>0,_e=!!v.alphaHash,ae=!!v.extensions,Ne=ui;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=n.toneMapping);let Ie={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:Le,defines:v.defines,customVertexShaderID:Ze,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:le,batchingColor:le&&D._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&D.instanceColor!==null,instancingMorph:Ge&&D.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:ft,envMap:We,envMapMode:We&&se.mapping,envMapCubeUVHeight:X,aoMap:at,lightMap:dt,bumpMap:ot,normalMap:Dt,displacementMap:on,emissiveMap:Ln,normalMapObjectSpace:Dt&&v.normalMapType===xf,normalMapTangentSpace:Dt&&v.normalMapType===yh,packedNormalMap:Dt&&v.normalMapType===yh&&H1(v.normalMap.format),metalnessMap:Lt,roughnessMap:Wt,anisotropy:U,anisotropyMap:j,clearcoat:bn,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:K,dispersion:bt,retroreflection:R,iridescence:b,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:G,sheenColorMap:De,sheenRoughnessMap:ye,specularMap:fe,specularColorMap:Fe,specularIntensityMap:He,transmission:q,transmissionMap:Je,thicknessMap:N,gradientMap:pe,opaque:v.transparent===!1&&v.blending===Tr&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:me,alphaHash:_e,combine:v.combine,mapUv:$e&&g(v.map.channel),aoMapUv:at&&g(v.aoMap.channel),lightMapUv:dt&&g(v.lightMap.channel),bumpMapUv:ot&&g(v.bumpMap.channel),normalMapUv:Dt&&g(v.normalMap.channel),displacementMapUv:on&&g(v.displacementMap.channel),emissiveMapUv:Ln&&g(v.emissiveMap.channel),metalnessMapUv:Lt&&g(v.metalnessMap.channel),roughnessMapUv:Wt&&g(v.roughnessMap.channel),anisotropyMapUv:j&&g(v.anisotropyMap.channel),clearcoatMapUv:ce&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(v.sheenRoughnessMap.channel),specularMapUv:fe&&g(v.specularMap.channel),specularColorMapUv:Fe&&g(v.specularColorMap.channel),specularIntensityMapUv:He&&g(v.specularIntensityMap.channel),transmissionMapUv:Je&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:ne&&g(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Dt||U),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&($e||ne),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&Dt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:oe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:Ln&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===Pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function p(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)A.push(P),A.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(m(A,v),_(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function m(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function _(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let A=f[v.type],P;if(A){let S=Pi[A];P=Ff.clone(S.uniforms)}else P=v.uniforms;return P}function x(v,A){let P=c.get(A);return P!==void 0?++P.usedTimes:(P=new O1(n,A,v,s),h.push(P),c.set(A,P)),P}function M(v){if(--v.usedTimes===0){let A=h.indexOf(v);h[A]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:E,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:C}}function V1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function W1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,p,m){let _=n[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},n[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=a(u),_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=p,_.group=m),e++,_}function l(u,f,g,y,p,m,_){_.reversedDepth===!0&&(p=-p);let E=o(u,f,g,y,p,m);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function h(u,f,g,y,p,m){let _=o(u,f,g,y,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function c(u,f){t.length>1&&t.sort(u||W1),i.length>1&&i.sort(f||ep),s.length>1&&s.sort(f||ep)}function d(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:d,sort:c}}function q1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new tp,n.set(i,[a])):s>=r.length?(a=new tp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function X1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function $1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Y1=0;function Z1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function J1(n){let e=new X1,t=$1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);let s=new I,r=new ut,a=new ut;function o(h){let c=0,d=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,_=0,E=0,x=0,M=0,T=0,C=0,v=0,A=0,P=0;h.sort(Z1);for(let D=0,B=h.length;D<B;D++){let k=h[D],O=k.color,J=k.intensity,F=k.distance,se=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ps?se=k.shadow.map.texture:se=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)c+=O.r*J,d+=O.g*J,u+=O.b*J;else if(k.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(k.sh.coefficients[X],J);P++}else if(k.isSunLight){let X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let te=k.shadow,z=t.get(k);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[g]=z,i.sunShadowMap[g]=se;let Q=te.getViewportCount();for(let oe=0;oe<Q;oe++)i.sunShadowMatrix[y+oe]=te.getMatrix(oe),i.sunShadowCascade[y+oe]=te._cascadeData[oe];y+=Q,g++}i.sun[f]=X,f++}else if(k.isDirectionalLight){let X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let te=k.shadow,z=t.get(k);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=k.shadow.matrix,M++}i.directional[p]=X,p++}else if(k.isSpotLight){let X=e.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(O).multiplyScalar(J),X.distance=F,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,i.spot[_]=X;let te=k.shadow;if(k.map&&(i.spotLightMap[v]=k.map,v++,te.updateMatrices(k),k.castShadow&&A++),i.spotLightMatrix[_]=te.matrix,k.castShadow){let z=t.get(k);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=se,C++}_++}else if(k.isRectAreaLight){let X=e.get(k);X.color.copy(O).multiplyScalar(J),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),i.rectArea[E]=X,E++}else if(k.isPointLight){let X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),X.distance=k.distance,X.decay=k.decay,k.castShadow){let te=k.shadow,z=t.get(k);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,z.shadowCameraNear=te.camera.near,z.shadowCameraFar=te.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=se,i.pointShadowMatrix[m]=k.shadow.matrix,T++}i.point[m]=X,m++}else if(k.isHemisphereLight){let X=e.get(k);X.skyColor.copy(k.color).multiplyScalar(J),X.groundColor.copy(k.groundColor).multiplyScalar(J),i.hemi[x]=X,x++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;let S=i.hash;(S.sunLength!==f||S.directionalLength!==p||S.pointLength!==m||S.spotLength!==_||S.rectAreaLength!==E||S.hemiLength!==x||S.numSunShadows!==g||S.numDirectionalShadows!==M||S.numPointShadows!==T||S.numSpotShadows!==C||S.numSpotMaps!==v||S.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=E,i.point.length=m,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+v-A,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,S.sunLength=f,S.directionalLength=p,S.pointLength=m,S.spotLength=_,S.rectAreaLength=E,S.hemiLength=x,S.numSunShadows=g,S.numDirectionalShadows=M,S.numPointShadows=T,S.numSpotShadows=C,S.numSpotMaps=v,S.numLightProbes=P,i.version=Y1++)}function l(h,c){let d=0,u=0,f=0,g=0,y=0,p=0,m=c.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){let x=h[_];if(x.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),d++}else if(x.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(x.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let M=i.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let M=i.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function np(n){let e=new J1(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function h(){e.setup(t)}function c(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function j1(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new np(n),e.set(s,[o])):r>=a.length?(o=new np(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
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
}`,ev=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],tv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ip=new ut,Wa=new I,bu=new I;function nv(n,e,t){let i=new vr,s=new Me,r=new Me,a=new Ft,o=new ml,l=new gl,h={},c=t.maxTextureSize,d={[cs]:Pn,[Pn]:cs,[Un]:Un},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:K1,fragmentShader:Q1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ze(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let m=this.type;this.render=function(T,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Pl&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fa);let A=n.getRenderTarget(),P=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=m!==this.type;B&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(O=>O.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,O=T.length;k<O;k++){let J=T[k],F=J.shadow;if(F===void 0){Oe("WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let se=F.getFrameExtents();s.multiply(se),r.copy(F.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/se.x),s.x=r.x*se.x,F.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/se.y),s.y=r.y*se.y,F.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Mr){if(J.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Bn(s.x,s.y,{format:ps,type:fi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),F.map.texture.name=J.name+".shadowMap",F.map.depthTexture=new rs(s.x,s.y,Kn),F.map.depthTexture.name=J.name+".shadowMapDepth",F.map.depthTexture.format=wi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn}else J.isPointLight?(F.map=new wh(s.x),F.map.depthTexture=new rl(s.x,di)):(F.map=new Bn(s.x,s.y),F.map.depthTexture=new rs(s.x,s.y,di)),F.map.depthTexture.name=J.name+".shadowMap",F.map.depthTexture.format=wi,this.type===Fa?(F.map.depthTexture.compareFunction=X?vh:bh,F.map.depthTexture.minFilter=Qt,F.map.depthTexture.magFilter=Qt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let te=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();J.isPointLight!==!0&&F.updateMatrices(J,v);for(let z=0;z<te;z++){let Q=F.getCamera(z);if(J.isPointLight){let oe=F.camera,qe=F.matrix,Le=J.distance||oe.far;Le!==oe.far&&(oe.far=Le,oe.updateProjectionMatrix()),Wa.setFromMatrixPosition(J.matrixWorld),oe.position.copy(Wa),bu.copy(oe.position),bu.add(ev[z]),oe.up.copy(tv[z]),oe.lookAt(bu),oe.updateMatrixWorld(),qe.makeTranslation(-Wa.x,-Wa.y,-Wa.z),ip.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ip,oe.coordinateSystem,oe.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,z),n.clear();else{z===0&&(n.setRenderTarget(F.map),n.clear());let oe=F.getViewport(z);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),D.viewport(a)}i=F.getFrustum(z),x(C,v,Q,J,this.type)}F.isPointLightShadow!==!0&&this.type===Mr&&_(F,v),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(A,P,S)};function _(T,C){let v=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Bn(s.x,s.y,{format:ps,type:fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,v,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,v,f,y,null)}function E(T,C,v,A){let P=null,S=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)P=S;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=P.uuid,B=C.uuid,k=h[D];k===void 0&&(k={},h[D]=k);let O=k[B];O===void 0&&(O=P.clone(),k[B]=O,C.addEventListener("dispose",M)),P=O}if(P.visible=C.visible,P.wireframe=C.wireframe,A===Mr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=n.properties.get(P);D.light=v}return P}function x(T,C,v,A,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Mr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let B=e.update(T),k=T.material;if(Array.isArray(k)){let O=B.groups;for(let J=0,F=O.length;J<F;J++){let se=O[J],X=k[se.materialIndex];if(X&&X.visible){let te=E(T,X,A,P);T.onBeforeShadow(n,T,C,v,B,te,se),n.renderBufferDirect(v,null,B,te,T,se),T.onAfterShadow(n,T,C,v,B,te,se)}}}else if(k.visible){let O=E(T,k,A,P);T.onBeforeShadow(n,T,C,v,B,O,null),n.renderBufferDirect(v,null,B,O,T,null),T.onAfterShadow(n,T,C,v,B,O,null)}}let D=T.children;for(let B=0,k=D.length;B<k;B++)x(D[B],C,v,A,P)}function M(T){T.target.removeEventListener("dispose",M);for(let v in h){let A=h[v],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function iv(n,e){function t(){let N=!1,pe=new Ft,ne=null,me=new Ft(0,0,0,0);return{setMask:function(_e){ne!==_e&&!N&&(n.colorMask(_e,_e,_e,_e),ne=_e)},setLocked:function(_e){N=_e},setClear:function(_e,ae,Ne,Ie,Et){Et===!0&&(_e*=Ie,ae*=Ie,Ne*=Ie),pe.set(_e,ae,Ne,Ie),me.equals(pe)===!1&&(n.clearColor(_e,ae,Ne,Ie),me.copy(pe))},reset:function(){N=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let N=!1,pe=!1,ne=null,me=null,_e=null;return{setReversed:function(ae){if(pe!==ae){let Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),pe=ae;let Ie=_e;_e=null,this.setClear(Ie)}},getReversed:function(){return pe},setTest:function(ae){ae?ee(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!N&&(n.depthMask(ae),ne=ae)},setFunc:function(ae){if(pe&&(ae=If[ae]),me!==ae){switch(ae){case Vo:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case qo:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case $o:n.depthFunc(n.GEQUAL);break;case Yo:n.depthFunc(n.GREATER);break;case Zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=ae}},setLocked:function(ae){N=ae},setClear:function(ae){_e!==ae&&(_e=ae,pe&&(ae=1-ae),n.clearDepth(ae))},reset:function(){N=!1,ne=null,me=null,_e=null,pe=!1}}}function s(){let N=!1,pe=null,ne=null,me=null,_e=null,ae=null,Ne=null,Ie=null,Et=null;return{setTest:function(pt){N||(pt?ee(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(pt){pe!==pt&&!N&&(n.stencilMask(pt),pe=pt)},setFunc:function(pt,ri,yi){(ne!==pt||me!==ri||_e!==yi)&&(n.stencilFunc(pt,ri,yi),ne=pt,me=ri,_e=yi)},setOp:function(pt,ri,yi){(ae!==pt||Ne!==ri||Ie!==yi)&&(n.stencilOp(pt,ri,yi),ae=pt,Ne=ri,Ie=yi)},setLocked:function(pt){N=pt},setClear:function(pt){Et!==pt&&(n.clearStencil(pt),Et=pt)},reset:function(){N=!1,pe=null,ne=null,me=null,_e=null,ae=null,Ne=null,Ie=null,Et=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,h=new WeakMap,c={},d={},u={},f=new WeakMap,g=[],y=null,p=!1,m=null,_=null,E=null,x=null,M=null,T=null,C=null,v=new Xe(0,0,0),A=0,P=!1,S=null,D=null,B=null,k=null,O=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,se=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=se>=2);let te=null,z={},Q=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),qe=new Ft().fromArray(Q),Le=new Ft().fromArray(oe);function Ze(N,pe,ne,me){let _e=new Uint8Array(4),ae=n.createTexture();n.bindTexture(N,ae),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ne;Ne++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(pe+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ae}let Y={};Y[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(ur),ot(!1),Dt(zc),ee(n.CULL_FACE),at(Ci);function ee(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function we(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Ge(N,pe){return u[N]!==pe?(n.bindFramebuffer(N,pe),u[N]=pe,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function le(N,pe){let ne=g,me=!1;if(N){ne=f.get(pe),ne===void 0&&(ne=[],f.set(pe,ne));let _e=N.textures;if(ne.length!==_e.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ne=_e.length;ae<Ne;ae++)ne[ae]=n.COLOR_ATTACHMENT0+ae;ne.length=_e.length,me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,me=!0);me&&n.drawBuffers(ne)}function $e(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let ft={[Rs]:n.FUNC_ADD,[Kd]:n.FUNC_SUBTRACT,[Qd]:n.FUNC_REVERSE_SUBTRACT};ft[ef]=n.MIN,ft[tf]=n.MAX;let We={[nf]:n.ZERO,[sf]:n.ONE,[rf]:n.SRC_COLOR,[Vc]:n.SRC_ALPHA,[uf]:n.SRC_ALPHA_SATURATE,[hf]:n.DST_COLOR,[of]:n.DST_ALPHA,[af]:n.ONE_MINUS_SRC_COLOR,[Wc]:n.ONE_MINUS_SRC_ALPHA,[cf]:n.ONE_MINUS_DST_COLOR,[lf]:n.ONE_MINUS_DST_ALPHA,[df]:n.CONSTANT_COLOR,[ff]:n.ONE_MINUS_CONSTANT_COLOR,[pf]:n.CONSTANT_ALPHA,[mf]:n.ONE_MINUS_CONSTANT_ALPHA};function at(N,pe,ne,me,_e,ae,Ne,Ie,Et,pt){if(N===Ci){p===!0&&(we(n.BLEND),p=!1);return}if(p===!1&&(ee(n.BLEND),p=!0),N!==jd){if(N!==m||pt!==P){if((_!==Rs||M!==Rs)&&(n.blendEquation(n.FUNC_ADD),_=Rs,M=Rs),pt)switch(N){case Tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Er:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ve("WebGLState: Invalid blending: ",N);break}else switch(N){case Tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hc:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",N);break}E=null,x=null,T=null,C=null,v.set(0,0,0),A=0,m=N,P=pt}return}_e=_e||pe,ae=ae||ne,Ne=Ne||me,(pe!==_||_e!==M)&&(n.blendEquationSeparate(ft[pe],ft[_e]),_=pe,M=_e),(ne!==E||me!==x||ae!==T||Ne!==C)&&(n.blendFuncSeparate(We[ne],We[me],We[ae],We[Ne]),E=ne,x=me,T=ae,C=Ne),(Ie.equals(v)===!1||Et!==A)&&(n.blendColor(Ie.r,Ie.g,Ie.b,Et),v.copy(Ie),A=Et),m=N,P=!1}function dt(N,pe){N.side===Un?we(n.CULL_FACE):ee(n.CULL_FACE);let ne=N.side===Pn;pe&&(ne=!ne),ot(ne),N.blending===Tr&&N.transparent===!1?at(Ci):at(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let me=N.stencilWrite;o.setTest(me),me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ln(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function Dt(N){N!==Zd?(ee(n.CULL_FACE),N!==D&&(N===zc?n.cullFace(n.BACK):N===Jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),D=N}function on(N){N!==B&&(F&&n.lineWidth(N),B=N)}function Ln(N,pe,ne){N?(ee(n.POLYGON_OFFSET_FILL),(k!==pe||O!==ne)&&(k=pe,O=ne,a.getReversed()&&(pe=-pe),n.polygonOffset(pe,ne))):we(n.POLYGON_OFFSET_FILL)}function Lt(N){N?ee(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=n.TEXTURE0+J-1),te!==N&&(n.activeTexture(N),te=N)}function U(N,pe,ne){ne===void 0&&(te===null?ne=n.TEXTURE0+J-1:ne=te);let me=z[ne];me===void 0&&(me={type:void 0,texture:void 0},z[ne]=me),(me.type!==N||me.texture!==pe)&&(te!==ne&&(n.activeTexture(ne),te=ne),n.bindTexture(N,pe||Y[N]),me.type=N,me.texture=pe)}function bn(){let N=z[te];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function bt(){try{n.compressedTexImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function b(){try{n.texSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function G(){try{n.texSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ce(){try{n.texStorage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ue(){try{n.texStorage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ie(){try{n.texImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function de(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function De(N,pe){d[N]!==pe&&(n.pixelStorei(N,pe),d[N]=pe)}function ye(N){qe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function fe(N){Le.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Le.copy(N))}function Fe(N,pe){let ne=h.get(pe);ne===void 0&&(ne=new WeakMap,h.set(pe,ne));let me=ne.get(N);me===void 0&&(me=n.getUniformBlockIndex(pe,N.name),ne.set(N,me))}function He(N,pe){let me=h.get(pe).get(N);l.get(pe)!==me&&(n.uniformBlockBinding(pe,me,N.__bindingPointIndex),l.set(pe,me))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},te=null,z={},u={},f=new WeakMap,g=[],y=null,p=!1,m=null,_=null,E=null,x=null,M=null,T=null,C=null,v=new Xe(0,0,0),A=0,P=!1,S=null,D=null,B=null,k=null,O=null,qe.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:we,bindFramebuffer:Ge,drawBuffers:le,useProgram:$e,setBlending:at,setMaterial:dt,setFlipSided:ot,setCullFace:Dt,setLineWidth:on,setPolygonOffset:Ln,setScissorTest:Lt,activeTexture:Wt,bindTexture:U,unbindTexture:bn,compressedTexImage2D:bt,compressedTexImage3D:R,texImage2D:K,texImage3D:ie,pixelStorei:De,getParameter:de,updateUBOMapping:Fe,uniformBlockBinding:He,texStorage2D:ce,texStorage3D:ue,texSubImage2D:b,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:ye,viewport:fe,reset:Je}}function sv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Me,c=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,b){return g?new OffscreenCanvas(R,b):ha("canvas")}function p(R,b,G){let q=1,j=bt(R);if((j.width>G||j.height>G)&&(q=G/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ce=Math.floor(q*j.width),ue=Math.floor(q*j.height);u===void 0&&(u=y(ce,ue));let K=b?y(ce,ue):u;return K.width=ce,K.height=ue,K.getContext("2d").drawImage(R,0,0,ce,ue),Oe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ce+"x"+ue+")."),K}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,b,G,q,j,ce=!1){if(R!==null){if(n[R]!==void 0)return n[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;q&&(ue=e.get("EXT_texture_norm16"),ue||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8),G===n.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),G===n.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),b===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8),G===n.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),G===n.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),G===n.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){let ie=ce?la:lt.getTransfer(j);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=ie===gt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),G===n.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(R,b){let G;return R?b===null||b===di||b===Cr?G=n.DEPTH24_STENCIL8:b===Kn?G=n.DEPTH32F_STENCIL8:b===Ar&&(G=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===di||b===Cr?G=n.DEPTH_COMPONENT24:b===Kn?G=n.DEPTH_COMPONENT32F:b===Ar&&(G=n.DEPTH_COMPONENT16),G}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==Qt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=R.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&c.delete(b),b.isHTMLTexture&&d.delete(b)}function v(R){let b=R.target;b.removeEventListener("dispose",v),S(b)}function A(R){let b=i.get(R);if(b.__webglInit===void 0)return;let G=R.source,q=f.get(G);if(q){let j=q[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(R),Object.keys(q).length===0&&f.delete(G)}i.remove(R)}function P(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let G=R.source,q=f.get(G);delete q[b.__cacheKey],a.memory.textures--}function S(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let j=0;j<b.__webglFramebuffer[q].length;j++)n.deleteFramebuffer(b.__webglFramebuffer[q][j]);else n.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)n.deleteFramebuffer(b.__webglFramebuffer[q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=R.textures;for(let q=0,j=G.length;q<j;q++){let ce=i.get(G[q]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(G[q])}i.remove(R)}let D=0;function B(){D=0}function k(){return D}function O(R){D=R}function J(){let R=D;return R>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function F(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function se(R,b){let G=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let q=R.image;if(q===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{we(G,R,b);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function X(R,b){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){we(G,R,b);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function te(R,b){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){we(G,R,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function z(R,b){let G=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Ge(G,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}let Q={[is]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},oe={[cn]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[Na]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Dl]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},qe={[Sf]:n.NEVER,[Af]:n.ALWAYS,[wf]:n.LESS,[bh]:n.LEQUAL,[Mf]:n.EQUAL,[vh]:n.GEQUAL,[Tf]:n.GREATER,[Ef]:n.NOTEQUAL};function Le(R,b){if(b.type===Kn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Qt||b.magFilter===Dl||b.magFilter===Na||b.magFilter===ds||b.minFilter===Qt||b.minFilter===Dl||b.minFilter===Na||b.minFilter===ds)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Q[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Q[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Q[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,oe[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,qe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==Na&&b.minFilter!==ds||b.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ze(R,b){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));let q=b.source,j=f.get(q);j===void 0&&(j={},f.set(q,j));let ce=F(b);if(ce!==R.__cacheKey){j[ce]===void 0&&(j[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),j[ce].usedTimes++;let ue=j[R.__cacheKey];ue!==void 0&&(j[R.__cacheKey].usedTimes--,ue.usedTimes===0&&P(b)),R.__cacheKey=ce,R.__webglTexture=j[ce].texture}return G}function Y(R,b,G){return Math.floor(Math.floor(R/G)/b)}function ee(R,b,G,q){let ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,q,b.data);else{ce.sort((De,ye)=>De.start-ye.start);let ue=0;for(let De=1;De<ce.length;De++){let ye=ce[ue],fe=ce[De],Fe=ye.start+ye.count,He=Y(fe.start,b.width,4),Je=Y(ye.start,b.width,4);fe.start<=Fe+1&&He===Je&&Y(fe.start+fe.count-1,b.width,4)===He?ye.count=Math.max(ye.count,fe.start+fe.count-ye.start):(++ue,ce[ue]=fe)}ce.length=ue+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),ie=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let De=0,ye=ce.length;De<ye;De++){let fe=ce[De],Fe=Math.floor(fe.start/4),He=Math.ceil(fe.count/4),Je=Fe%b.width,N=Math.floor(Fe/b.width),pe=He,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Je,N,pe,ne,G,q,b.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function we(R,b,G){let q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=n.TEXTURE_3D);let j=Ze(R,b),ce=b.source;t.bindTexture(q,R.__webglTexture,n.TEXTURE0+G);let ue=i.get(ce);if(ce.version!==ue.__version||j===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ne=lt.getPrimaries(lt.workingColorSpace),me=b.colorSpace===Gi?null:lt.getPrimaries(b.colorSpace),_e=b.colorSpace===Gi||ne===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let ie=p(b.image,!1,s.maxTextureSize);ie=bn(b,ie);let de=r.convert(b.format,b.colorSpace),De=r.convert(b.type),ye=x(b.internalFormat,de,De,b.normalized,b.colorSpace,b.isVideoTexture);Le(q,b);let fe,Fe=b.mipmaps,He=b.isVideoTexture!==!0,Je=ue.__version===void 0||j===!0,N=ce.dataReady,pe=T(b,ie);if(b.isDepthTexture)ye=M(b.format===fs,b.type),Je&&(He?t.texStorage2D(n.TEXTURE_2D,1,ye,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ye,ie.width,ie.height,0,de,De,null));else if(b.isDataTexture)if(Fe.length>0){He&&Je&&t.texStorage2D(n.TEXTURE_2D,pe,ye,Fe[0].width,Fe[0].height);for(let ne=0,me=Fe.length;ne<me;ne++)fe=Fe[ne],He?N&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,de,De,fe.data):t.texImage2D(n.TEXTURE_2D,ne,ye,fe.width,fe.height,0,de,De,fe.data);b.generateMipmaps=!1}else He?(Je&&t.texStorage2D(n.TEXTURE_2D,pe,ye,ie.width,ie.height),N&&ee(b,ie,de,De)):t.texImage2D(n.TEXTURE_2D,0,ye,ie.width,ie.height,0,de,De,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){He&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ye,Fe[0].width,Fe[0].height,ie.depth);for(let ne=0,me=Fe.length;ne<me;ne++)if(fe=Fe[ne],b.format!==Qn)if(de!==null)if(He){if(N)if(b.layerUpdates.size>0){let _e=du(fe.width,fe.height,b.format,b.type);for(let ae of b.layerUpdates){let Ne=fe.data.subarray(ae*_e/fe.data.BYTES_PER_ELEMENT,(ae+1)*_e/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,ae,fe.width,fe.height,1,de,Ne)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ie.depth,de,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,ye,fe.width,fe.height,ie.depth,0,fe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ie.depth,de,De,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,ye,fe.width,fe.height,ie.depth,0,de,De,fe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{He&&Je&&t.texStorage2D(n.TEXTURE_2D,pe,ye,Fe[0].width,Fe[0].height);for(let ne=0,me=Fe.length;ne<me;ne++)fe=Fe[ne],b.format!==Qn?de!==null?He?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,ye,fe.width,fe.height,0,fe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,de,De,fe.data):t.texImage2D(n.TEXTURE_2D,ne,ye,fe.width,fe.height,0,de,De,fe.data)}else if(b.isDataArrayTexture)if(He){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ye,ie.width,ie.height,ie.depth),N)if(b.layerUpdates.size>0){let ne=du(ie.width,ie.height,b.format,b.type);for(let me of b.layerUpdates){let _e=ie.data.subarray(me*ne/ie.data.BYTES_PER_ELEMENT,(me+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,ie.width,ie.height,1,de,De,_e)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,De,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ie.width,ie.height,ie.depth,0,de,De,ie.data);else if(b.isData3DTexture)He?(Je&&t.texStorage3D(n.TEXTURE_3D,pe,ye,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,De,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ie.width,ie.height,ie.depth,0,de,De,ie.data);else if(b.isFramebufferTexture){if(Je)if(He)t.texStorage2D(n.TEXTURE_2D,pe,ye,ie.width,ie.height);else{let ne=ie.width,me=ie.height;for(let _e=0;_e<pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,ye,ne,me,0,de,De,null),ne>>=1,me>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),d.add(b),ne.onpaint=me=>{let _e=me.changedElements;for(let ae of d)_e.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ie);else{let _e=n.RGBA,ae=n.RGBA,Ne=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_e,ae,Ne,ie)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(He&&Je){let ne=bt(Fe[0]);t.texStorage2D(n.TEXTURE_2D,pe,ye,ne.width,ne.height)}for(let ne=0,me=Fe.length;ne<me;ne++)fe=Fe[ne],He?N&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de,De,fe):t.texImage2D(n.TEXTURE_2D,ne,ye,de,De,fe);b.generateMipmaps=!1}else if(He){if(Je){let ne=bt(ie);t.texStorage2D(n.TEXTURE_2D,pe,ye,ne.width,ne.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,De,ie)}else t.texImage2D(n.TEXTURE_2D,0,ye,de,De,ie);m(b)&&_(q),ue.__version=ce.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ge(R,b,G){if(b.image.length!==6)return;let q=Ze(R,b),j=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let ce=i.get(j);if(j.version!==ce.__version||q===!0){t.activeTexture(n.TEXTURE0+G);let ue=lt.getPrimaries(lt.workingColorSpace),K=b.colorSpace===Gi?null:lt.getPrimaries(b.colorSpace),ie=b.colorSpace===Gi||ue===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let de=b.isCompressedTexture||b.image[0].isCompressedTexture,De=b.image[0]&&b.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!de&&!De?ye[ae]=p(b.image[ae],!0,s.maxCubemapSize):ye[ae]=De?b.image[ae].image:b.image[ae],ye[ae]=bn(b,ye[ae]);let fe=ye[0],Fe=r.convert(b.format,b.colorSpace),He=r.convert(b.type),Je=x(b.internalFormat,Fe,He,b.normalized,b.colorSpace),N=b.isVideoTexture!==!0,pe=ce.__version===void 0||q===!0,ne=j.dataReady,me=T(b,fe);Le(n.TEXTURE_CUBE_MAP,b);let _e;if(de){N&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Je,fe.width,fe.height);for(let ae=0;ae<6;ae++){_e=ye[ae].mipmaps;for(let Ne=0;Ne<_e.length;Ne++){let Ie=_e[Ne];b.format!==Qn?Fe!==null?N?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Ie.width,Ie.height,Fe,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Je,Ie.width,Ie.height,0,Ie.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Ie.width,Ie.height,Fe,He,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Je,Ie.width,Ie.height,0,Fe,He,Ie.data)}}}else{if(_e=b.mipmaps,N&&pe){_e.length>0&&me++;let ae=bt(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(De){N?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,Fe,He,ye[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,ye[ae].width,ye[ae].height,0,Fe,He,ye[ae].data);for(let Ne=0;Ne<_e.length;Ne++){let Et=_e[Ne].image[ae].image;N?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,Et.width,Et.height,Fe,He,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Je,Et.width,Et.height,0,Fe,He,Et.data)}}else{N?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,He,ye[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Fe,He,ye[ae]);for(let Ne=0;Ne<_e.length;Ne++){let Ie=_e[Ne];N?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,Fe,He,Ie.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Je,Fe,He,Ie.image[ae])}}}m(b)&&_(n.TEXTURE_CUBE_MAP),ce.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function le(R,b,G,q,j,ce){let ue=r.convert(G.format,G.colorSpace),K=r.convert(G.type),ie=x(G.internalFormat,ue,K,G.normalized,G.colorSpace),de=i.get(b),De=i.get(G);if(De.__renderTarget=b,!de.__hasExternalTextures){let ye=Math.max(1,b.width>>ce),fe=Math.max(1,b.height>>ce);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ce,ie,ye,fe,b.depth,0,ue,K,null):t.texImage2D(j,ce,ie,ye,fe,0,ue,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Wt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,j,De.__webglTexture,0,Lt(b)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,j,De.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(R,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let q=b.depthTexture,j=q&&q.isDepthTexture?q.type:null,ce=M(b.stencilBuffer,j),ue=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Wt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(b),ce,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(b),ce,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ce,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,R)}else{let q=b.textures;for(let j=0;j<q.length;j++){let ce=q[j],ue=r.convert(ce.format,ce.colorSpace),K=r.convert(ce.type),ie=x(ce.internalFormat,ue,K,ce.normalized,ce.colorSpace);Wt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(b),ie,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(b),ie,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ie,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(R,b,G){let q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(b.depthTexture);if(j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Le(n.TEXTURE_CUBE_MAP,b.depthTexture);let de=r.convert(b.depthTexture.format),De=r.convert(b.depthTexture.type),ye;b.depthTexture.format===wi?ye=n.DEPTH_COMPONENT24:b.depthTexture.format===fs&&(ye=n.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ye,b.width,b.height,0,de,De,null)}}else se(b.depthTexture,0);let ce=j.__webglTexture,ue=Lt(b),K=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,ie=b.depthTexture.format===fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===wi)Wt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,K,ce,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,ie,K,ce,0);else if(b.depthTexture.format===fs)Wt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,K,ce,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,ie,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(R){let b=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)ft(b.__webglFramebuffer[q],R,q);else{let q=R.texture.mipmaps;q&&q.length>0?ft(b.__webglFramebuffer[0],R,0):ft(b.__webglFramebuffer,R,0)}else if(G){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=n.createRenderbuffer(),$e(b.__webglDepthbuffer[q],R,!1);else{let j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ce)}}else{let q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),$e(b.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(R,b,G){let q=i.get(R);b!==void 0&&le(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&We(R)}function dt(R){let b=R.texture,G=i.get(R),q=i.get(b);R.addEventListener("dispose",v);let j=R.textures,ce=R.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=b.version,a.memory.textures++),ce){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let ie=0;ie<b.mipmaps.length;ie++)G.__webglFramebuffer[K][ie]=n.createFramebuffer()}else G.__webglFramebuffer[K]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)G.__webglFramebuffer[K]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ue)for(let K=0,ie=j.length;K<ie;K++){let de=i.get(j[K]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Wt(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let ie=j[K];G.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let de=r.convert(ie.format,ie.colorSpace),De=r.convert(ie.type),ye=x(ie.internalFormat,de,De,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),fe=Lt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ye,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,G.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Le(n.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)le(G.__webglFramebuffer[K][ie],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie);else le(G.__webglFramebuffer[K],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(b)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let K=0,ie=j.length;K<ie;K++){let de=j[K],De=i.get(de),ye=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,De.__webglTexture),Le(ye,de),le(G.__webglFramebuffer,R,de,n.COLOR_ATTACHMENT0+K,ye,0),m(de)&&_(ye)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,q.__webglTexture),Le(K,b),b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)le(G.__webglFramebuffer[ie],R,b,n.COLOR_ATTACHMENT0,K,ie);else le(G.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,K,0);m(b)&&_(K),t.unbindTexture()}R.depthBuffer&&We(R)}function ot(R){let b=R.textures;for(let G=0,q=b.length;G<q;G++){let j=b[G];if(m(j)){let ce=E(R),ue=i.get(j).__webglTexture;t.bindTexture(ce,ue),_(ce),t.unbindTexture()}}}let Dt=[],on=[];function Ln(R){if(R.samples>0){if(Wt(R)===!1){let b=R.textures,G=R.width,q=R.height,j=n.COLOR_BUFFER_BIT,ce=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(R),K=b.length>1;if(K)for(let de=0;de<b.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let ie=R.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<b.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let De=i.get(b[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,G,q,0,0,G,q,j,n.NEAREST),l===!0&&(Dt.length=0,on.length=0,Dt.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Dt.push(ce),on.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,on)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<b.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let De=i.get(b[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Lt(R){return Math.min(s.maxSamples,R.samples)}function Wt(R){let b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function U(R){let b=a.render.frame;c.get(R)!==b&&(c.set(R,b),R.update())}function bn(R,b){let G=R.colorSpace,q=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==oa&&G!==Gi&&(lt.getTransfer(G)===gt?(q!==Qn||j!==On)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",G)),b}function bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=B,this.getTextureUnits=k,this.setTextureUnits=O,this.setTexture2D=se,this.setTexture2DArray=X,this.setTexture3D=te,this.setTextureCube=z,this.rebindTextures=at,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rv(n,e){function t(i,s=Gi){let r,a=lt.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===eu)return n.BYTE;if(i===tu)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===su)return n.ALPHA;if(i===ru)return n.RGB;if(i===Qn)return n.RGBA;if(i===wi)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===Bl)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===ps)return n.RG;if(i===Ol)return n.RG_INTEGER;if(i===zl)return n.RGBA_INTEGER;if(i===Ba||i===Ua||i===Oa||i===za)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===Gl||i===Vl||i===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ql||i===Xl||i===$l||i===Yl||i===Zl||i===Ha||i===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ql||i===Xl)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$l)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yl)return r.COMPRESSED_R11_EAC;if(i===Zl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ha)return r.COMPRESSED_RG11_EAC;if(i===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jl||i===Kl||i===Ql||i===eh||i===th||i===nh||i===ih||i===sh||i===rh||i===ah||i===oh||i===lh||i===hh||i===ch)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ql)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===th)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ih)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ah)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ch)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uh||i===dh||i===fh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===uh)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ph||i===mh||i===Ga||i===gh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ph)return r.COMPRESSED_RED_RGTC1_EXT;if(i===mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ov=`
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

}`,Eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Vn({vertexShader:av,fragmentShader:ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new en(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends Mi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new Eu,m={},_=t.getContextAttributes(),E=null,x=null,M=[],T=[],C=new Me,v=null,A=null,P=new Kt;P.viewport=new Ft;let S=new Kt;S.viewport=new Ft;let D=[P,S],B=new Cl,k=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=M[Y];return ee===void 0&&(ee=new gr,M[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=M[Y];return ee===void 0&&(ee=new gr,M[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=M[Y];return ee===void 0&&(ee=new gr,M[Y]=ee),ee.getHandSpace()};function J(Y){let ee=T.indexOf(Y.inputSource);if(ee===-1)return;let we=M[ee];we!==void 0&&(we.update(Y.inputSource,Y.frame,h||a),we.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",se);for(let Y=0;Y<M.length;Y++){let ee=T[Y];ee!==null&&(T[Y]=null,M[Y].disconnect(ee))}k=null,O=null,p.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(E),f=null,u=null,d=null,s=null,x=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),A!==null){let Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",F),s.addEventListener("inputsourceschange",se),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ge=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=_.stencil?fs:wi,Ge=_.stencil?Cr:di);let $e={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($e),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Bn(u.textureWidth,u.textureHeight,{format:Qn,type:On,depthTexture:new rs(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bn(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(Y){for(let ee=0;ee<Y.removed.length;ee++){let we=Y.removed[ee],Ge=T.indexOf(we);Ge>=0&&(T[Ge]=null,M[Ge].disconnect(we))}for(let ee=0;ee<Y.added.length;ee++){let we=Y.added[ee],Ge=T.indexOf(we);if(Ge===-1){for(let $e=0;$e<M.length;$e++)if($e>=T.length){T.push(we),Ge=$e;break}else if(T[$e]===null){T[$e]=we,Ge=$e;break}if(Ge===-1)break}let le=M[Ge];le&&le.connect(we)}}let X=new I,te=new I;function z(Y,ee,we){X.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(we.matrixWorld);let Ge=X.distanceTo(te),le=ee.projectionMatrix.elements,$e=we.projectionMatrix.elements,ft=le[14]/(le[10]-1),We=le[14]/(le[10]+1),at=(le[9]+1)/le[5],dt=(le[9]-1)/le[5],ot=(le[8]-1)/le[0],Dt=($e[8]+1)/$e[0],on=ft*ot,Ln=ft*Dt,Lt=Ge/(-ot+Dt),Wt=Lt*-ot;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Wt),Y.translateZ(Lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),le[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let U=ft+Lt,bn=We+Lt,bt=on-Wt,R=Ln+(Ge-Wt),b=at*We/bn*U,G=dt*We/bn*U;Y.projectionMatrix.makePerspective(bt,R,b,G,U,bn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Q(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ee=Y.near,we=Y.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(we=p.depthFar)),B.near=S.near=P.near=ee,B.far=S.far=P.far=we,(k!==B.near||O!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,O=B.far),B.layers.mask=Y.layers.mask|6,P.layers.mask=B.layers.mask&-5,S.layers.mask=B.layers.mask&-3;let Ge=Y.parent,le=B.cameras;Q(B,Ge);for(let $e=0;$e<le.length;$e++)Q(le[$e],Ge);le.length===2?z(B,P,S):B.projectionMatrix.copy(P.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),oe(Y,B,Ge)};function oe(Y,ee,we){we===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(we.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ua*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Y){return m[Y]};let qe=null;function Le(Y,ee){if(c=ee.getViewerPose(h||a),g=ee,c!==null){let we=c.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ge=!1;we.length!==B.cameras.length&&(B.cameras.length=0,Ge=!0);for(let We=0;We<we.length;We++){let at=we[We],dt=null;if(f!==null)dt=f.getViewport(at);else{let Dt=d.getViewSubImage(u,at);dt=Dt.viewport,We===0&&(e.setRenderTargetTextures(x,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(x))}let ot=D[We];ot===void 0&&(ot=new Kt,ot.layers.enable(We),ot.viewport=new Ft,D[We]=ot),ot.matrix.fromArray(at.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(at.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(dt.x,dt.y,dt.width,dt.height),We===0&&(B.matrix.copy(ot.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ge===!0&&B.cameras.push(ot)}let le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let We=d.getDepthInformation(we[0]);We&&We.isValid&&We.texture&&p.init(We,s.renderState)}if(le&&le.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<we.length;We++){let at=we[We].camera;if(at){let dt=m[at];dt||(dt=new _a,m[at]=dt);let ot=d.getCameraImage(at);dt.sourceTexture=ot}}}}for(let we=0;we<M.length;we++){let Ge=T[we],le=M[we];Ge!==null&&le!==void 0&&le.update(Ge,ee,h||a)}qe&&qe(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let Ze=new sp;Ze.setAnimationLoop(Le),this.setAnimationLoop=function(Y){qe=Y},this.dispose=function(){}}},lv=new ut,cp=new Ye;cp.set(-1,0,0,0,1,0,0,0,1);function hv(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,hu(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,E,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,E):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),E=_.envMap,x=_.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(lv.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(cp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let T=M.program;i.uniformBlockBinding(x,T)}function h(x,M){let T=s[x.id];T===void 0&&(p(x),T=c(x),s[x.id]=T,x.addEventListener("dispose",_));let C=M.program;i.updateUBOMapping(x,C);let v=e.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function c(x){let M=d();x.__bindingPointIndex=M;let T=n.createBuffer(),C=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=s[x.id],T=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let v=0,A=T.length;v<A;v++){let P=T[v];if(Array.isArray(P))for(let S=0,D=P.length;S<D;S++)f(P[S],v,S,C);else f(P,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,M,T,C){if(y(x,M,T,C)===!0){let v=x.__offset,A=x.value;if(Array.isArray(A)){let P=0;for(let S=0;S<A.length;S++){let D=A[S],B=m(D);g(D,x.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function g(x,M,T){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,T)}function y(x,M,T,C){let v=x.value,A=M+"_"+T;if(C[A]===void 0)return typeof v=="number"||typeof v=="boolean"?C[A]=v:ArrayBuffer.isView(v)?C[A]=v.slice():C[A]=v.clone(),!0;{let P=C[A];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function p(x){let M=x.uniforms,T=0,C=16;for(let A=0,P=M.length;A<P;A++){let S=Array.isArray(M[A])?M[A]:[M[A]];for(let D=0,B=S.length;D<B;D++){let k=S[D],O=Array.isArray(k.value)?k.value:[k.value];for(let J=0,F=O.length;J<F;J++){let se=O[J],X=m(se),te=T%C,z=te%X.boundary,Q=te+z;T+=z,Q!==0&&C-Q<X.storage&&(T+=C-Q),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=X.storage}}}let v=T%C;return v>0&&(T+=C-v),x.__size=T,x.__cache={},this}function m(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",x),M}function _(x){let M=x.target;M.removeEventListener("dispose",_);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function E(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:h,dispose:E}}var uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function dv(){return Ri===null&&(Ri=new ya(uv,16,16,ps,fi),Ri.name="DFG_LUT",Ri.minFilter=Qt,Ri.magFilter=Qt,Ri.wrapS=Si,Ri.wrapT=Si,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var kr=class{constructor(e={}){let{canvas:t=Cf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,p=new Set([zl,Ol,Ul]),m=new Set([On,di,Ar,Cr,Ll,Nl]),_=new Uint32Array(4),E=new Int32Array(4),x=new I,M=null,T=null,C=[],v=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,S=!1,D=null,B=null,k=null,O=null;this._outputColorSpace=wt;let J=0,F=0,se=null,X=-1,te=null,z=new Ft,Q=new Ft,oe=null,qe=new Xe(0),Le=0,Ze=t.width,Y=t.height,ee=1,we=null,Ge=null,le=new Ft(0,0,Ze,Y),$e=new Ft(0,0,Ze,Y),ft=!1,We=new vr,at=!1,dt=!1,ot=new ut,Dt=new I,on=new Ft,Ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Wt(){return se===null?ee:1}let U=i;function bn(w,L){return t.getContext(w,L)}let bt,R,b,G,q,j,ce,ue,K,ie,de,De,ye,fe,Fe,He,Je,N,pe,ne,me,_e,ae;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",ri,!1),U===null){let L="webgl2";if(U=bn(L,w),U===null)throw bn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(w){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",ri,!1),Ve("WebGLRenderer: "+w.message),w}function Ne(){bt=new vb(U),bt.init(),me=new rv(U,bt),R=new hb(U,bt,e,me),b=new iv(U,bt),R.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),B=U.createFramebuffer(),k=U.createFramebuffer(),O=U.createFramebuffer(),G=new Sb(U),q=new V1,j=new sv(U,bt,b,q,R,me,G),ce=new bb(P),ue=new M0(U),_e=new ob(U,ue),K=new xb(U,ue,G,_e),ie=new Mb(U,K,ue,_e,G),N=new wb(U,R,j),Fe=new cb(q),de=new G1(P,ce,bt,R,_e,Fe),De=new hv(P,q),ye=new q1,fe=new j1(bt),Je=new ab(P,ce,b,ie,g,l),He=new nv(P,ie,R),ae=new cv(U,G,R,b),pe=new lb(U,bt,G),ne=new _b(U,bt,G),G.programs=de.programs,P.capabilities=R,P.extensions=bt,P.properties=q,P.renderLists=ye,P.shadowMap=He,P.state=b,P.info=G}y!==On&&(A=new Eb(y,t.width,t.height,o,s,r));let Ie=new Au(P,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(Ze,Y,!1))},this.getSize=function(w){return w.set(Ze,Y)},this.setSize=function(w,L,$=!0){if(Ie.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=w,Y=L,t.width=Math.floor(w*ee),t.height=Math.floor(L*ee),$===!0&&(t.style.width=w+"px",t.style.height=L+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,L)},this.getDrawingBufferSize=function(w){return w.set(Ze*ee,Y*ee).floor()},this.setDrawingBufferSize=function(w,L,$){Ze=w,Y=L,ee=$,t.width=Math.floor(w*$),t.height=Math.floor(L*$),this.setViewport(0,0,w,L)},this.setEffects=function(w){if(y===On){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let L=0;L<w.length;L++)if(w[L].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,L,$,V){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,L,$,V),b.viewport(z.copy(le).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy($e)},this.setScissor=function(w,L,$,V){w.isVector4?$e.set(w.x,w.y,w.z,w.w):$e.set(w,L,$,V),b.scissor(Q.copy($e).multiplyScalar(ee).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){b.setScissorTest(ft=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(w=!0,L=!0,$=!0){let V=0;if(w){let W=!1;if(se!==null){let xe=se.texture.format;W=p.has(xe)}if(W){let xe=se.texture.type,Ae=m.has(xe),ve=Je.getClearColor(),Re=Je.getClearAlpha(),ke=ve.r,Qe=ve.g,st=ve.b;Ae?(_[0]=ke,_[1]=Qe,_[2]=st,_[3]=Re,U.clearBufferuiv(U.COLOR,0,_)):(E[0]=ke,E[1]=Qe,E[2]=st,E[3]=Re,U.clearBufferiv(U.COLOR,0,E))}else V|=U.COLOR_BUFFER_BIT}L&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",ri,!1),Je.dispose(),ye.dispose(),fe.dispose(),q.dispose(),ce.dispose(),ie.dispose(),_e.dispose(),ae.dispose(),de.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",ad),Ie.removeEventListener("sessionend",od),vs.stop()};function Et(w){w.preventDefault(),ca("WebGLRenderer: Context Lost."),S=!0}function pt(){ca("WebGLRenderer: Context Restored."),S=!1;let w=G.autoReset,L=He.enabled,$=He.autoUpdate,V=He.needsUpdate,W=He.type;Ne(),G.autoReset=w,He.enabled=L,He.autoUpdate=$,He.needsUpdate=V,He.type=W}function ri(w){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function yi(w){let L=w.target;L.removeEventListener("dispose",yi),Am(L)}function Am(w){Cm(w),q.remove(w)}function Cm(w){let L=q.get(w).programs;L!==void 0&&(L.forEach(function($){de.releaseProgram($)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,L,$,V,W,xe){L===null&&(L=Ln);let Ae=W.isMesh&&W.matrixWorld.determinantAffine()<0,ve=Im(w,L,$,V,W);b.setMaterial(V,Ae);let Re=$.index,ke=1;if(V.wireframe===!0){if(Re=K.getWireframeAttribute($),Re===void 0)return;ke=2}let Qe=$.drawRange,st=$.attributes.position,Pe=Qe.start*ke,mt=(Qe.start+Qe.count)*ke;xe!==null&&(Pe=Math.max(Pe,xe.start*ke),mt=Math.min(mt,(xe.start+xe.count)*ke)),Re!==null?(Pe=Math.max(Pe,0),mt=Math.min(mt,Re.count)):st!=null&&(Pe=Math.max(Pe,0),mt=Math.min(mt,st.count));let qt=mt-Pe;if(qt<0||qt===1/0)return;_e.setup(W,V,ve,$,Re);let Rt,St=pe;if(Re!==null&&(Rt=ue.get(Re),St=ne,St.setIndex(Rt)),W.isMesh)V.wireframe===!0?(b.setLineWidth(V.wireframeLinewidth*Wt()),St.setMode(U.LINES)):St.setMode(U.TRIANGLES);else if(W.isLine){let vn=V.linewidth;vn===void 0&&(vn=1),b.setLineWidth(vn*Wt()),W.isLineSegments?St.setMode(U.LINES):W.isLineLoop?St.setMode(U.LINE_LOOP):St.setMode(U.LINE_STRIP)}else W.isPoints?St.setMode(U.POINTS):W.isSprite&&St.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let vn=W._multiDrawStarts,Te=W._multiDrawCounts,An=W._multiDrawCount,ct=Re?ue.get(Re).bytesPerElement:1,Zn=q.get(V).currentProgram.getUniforms();for(let bi=0;bi<An;bi++)Zn.setValue(U,"_gl_DrawID",bi),St.render(vn[bi]/ct,Te[bi])}else if(W.isInstancedMesh)St.renderInstances(Pe,qt,W.count);else if($.isInstancedBufferGeometry){let vn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Te=Math.min($.instanceCount,vn);St.renderInstances(Pe,qt,Te)}else St.render(Pe,qt)};function rd(w,L,$,V){D!==null&&w.isNodeMaterial&&D.setObject(V,w),at===!0&&Fe.setState(w,$,!1),w.transparent===!0&&w.side===Un&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,co(w,L,V),w.side=cs,w.needsUpdate=!0,co(w,L,V),w.side=Un):co(w,L,V)}this.compile=function(w,L,$=null){$===null&&($=w),D!==null&&D.renderStart(w,L,$),T=fe.get($),T.init(L),v.push(T),$.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),w!==$&&w.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),dt=this.localClippingEnabled,at=Fe.init(this.clippingPlanes,dt),at===!0&&Fe.setGlobalState(this.clippingPlanes,L),D!==null&&He.render(T.state.shadowsArray,$,L);let V=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let xe=W.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){let ve=xe[Ae];rd(ve,$,L,W),V.add(ve)}else rd(xe,$,L,W),V.add(xe)}),T=v.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(w,L,$=null){let V=this.compile(w,L,$);return new Promise(W=>{function xe(){if(V.forEach(function(Ae){let Re=q.get(Ae).currentProgram;(Re===void 0||Re.isReady())&&V.delete(Ae)}),V.size===0){W(w);return}setTimeout(xe,10)}bt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let tc=null;function Rm(w){tc&&tc(w)}function ad(){vs.stop()}function od(){vs.start()}let vs=new sp;vs.setAnimationLoop(Rm),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(w){tc=w,Ie.setAnimationLoop(w),w===null?vs.stop():vs.start()},Ie.addEventListener("sessionstart",ad),Ie.addEventListener("sessionend",od),this.render=function(w,L){if(L!==void 0&&L.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;D!==null&&D.renderStart(w,L);let $=Ie.enabled===!0&&Ie.isPresenting===!0,V=A!==null&&(se===null||$)&&A.begin(P,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(L),L=Ie.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,L,se),T=fe.get(w,v.length),T.init(L),T.state.textureUnits=j.getTextureUnits(),v.push(T),ot.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),We.setFromProjectionMatrix(ot,ci,L.reversedDepth),dt=this.localClippingEnabled,at=Fe.init(this.clippingPlanes,dt),M=ye.get(w,C.length),M.init(),C.push(M),Ie.enabled===!0&&Ie.isPresenting===!0){let Ae=P.xr.getDepthSensingMesh();Ae!==null&&nc(Ae,L,-1/0,P.sortObjects)}nc(w,L,0,P.sortObjects),M.finish(),D!==null&&D.updateLights(T.state.lightsArray),P.sortObjects===!0&&M.sort(we,Ge),Lt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Lt&&Je.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Fe.beginShadows();let W=T.state.shadowsArray;if(He.render(W,w,L),at===!0&&Fe.endShadows(),(V&&A.hasRenderPass())===!1){let Ae=M.opaque,ve=M.transmissive;if(T.setupLights(),L.isArrayCamera){let Re=L.cameras;if(ve.length>0)for(let ke=0,Qe=Re.length;ke<Qe;ke++){let st=Re[ke];hd(Ae,ve,w,st)}Lt&&Je.render(w);for(let ke=0,Qe=Re.length;ke<Qe;ke++){let st=Re[ke];ld(M,w,st,st.viewport)}}else ve.length>0&&hd(Ae,ve,w,L),Lt&&Je.render(w),ld(M,w,L)}se!==null&&F===0&&(j.updateMultisampleRenderTarget(se),j.updateRenderTargetMipmap(se)),V&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,L),_e.resetDefaultState(),X=-1,te=null,v.pop(),v.length>0?(T=v[v.length-1],j.setTextureUnits(T.state.textureUnits),at===!0&&Fe.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,D!==null&&D.renderEnd()};function nc(w,L,$,V){if(w.visible===!1)return;if(w.layers.test(L.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(L);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(We)){V&&on.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);let Ae=ie.update(w),ve=w.material;ve.visible&&M.push(w,Ae,ve,$,on.z,null,L)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(We))){let Ae=ie.update(w),ve=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),on.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),on.copy(Ae.boundingSphere.center)),on.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(ve)){let Re=Ae.groups;for(let ke=0,Qe=Re.length;ke<Qe;ke++){let st=Re[ke],Pe=ve[st.materialIndex];Pe&&Pe.visible&&M.push(w,Ae,Pe,$,on.z,st,L)}}else ve.visible&&M.push(w,Ae,ve,$,on.z,null,L)}}let xe=w.children;for(let Ae=0,ve=xe.length;Ae<ve;Ae++)nc(xe[Ae],L,$,V)}function ld(w,L,$,V){let{opaque:W,transmissive:xe,transparent:Ae}=w;T.setupLightsView($),at===!0&&Fe.setGlobalState(P.clippingPlanes,$),V&&b.viewport(z.copy(V)),W.length>0&&ho(W,L,$),xe.length>0&&ho(xe,L,$),Ae.length>0&&ho(Ae,L,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function hd(w,L,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Pe=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Bn(1,1,{generateMipmaps:!0,type:Pe?fi:On,minFilter:ds,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let xe=T.state.transmissionRenderTarget[V.id],Ae=V.viewport||z;xe.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);let ve=P.getRenderTarget(),Re=P.getActiveCubeFace(),ke=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(qe),Le=P.getClearAlpha(),Le<1&&P.setClearColor(16777215,.5),P.clear(),Lt&&Je.render($);let Qe=P.toneMapping;P.toneMapping=ui;let st=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),at===!0&&Fe.setGlobalState(P.clippingPlanes,V),ho(w,$,V),j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let mt=0,qt=L.length;mt<qt;mt++){let Rt=L[mt],{object:St,geometry:vn,material:Te,group:An}=Rt;if(Te.side===Un&&St.layers.test(V.layers)){let ct=Te.side;Te.side=Pn,Te.needsUpdate=!0,cd(St,$,V,vn,Te,An),Te.side=ct,Te.needsUpdate=!0,Pe=!0}}Pe===!0&&(j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe))}P.setRenderTarget(ve,Re,ke),P.setClearColor(qe,Le),st!==void 0&&(V.viewport=st),P.toneMapping=Qe}function ho(w,L,$){let V=L.isScene===!0?L.overrideMaterial:null;for(let W=0,xe=w.length;W<xe;W++){let Ae=w[W],{object:ve,geometry:Re,group:ke}=Ae,Qe=Ae.material;Qe.allowOverride===!0&&V!==null&&(Qe=V),ve.layers.test($.layers)&&cd(ve,L,$,Re,Qe,ke)}}function cd(w,L,$,V,W,xe){D!==null&&W.isNodeMaterial&&D.setObject(w,W),w.onBeforeRender(P,L,$,V,W,xe),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(P,L,$,V,w,xe),W.transparent===!0&&W.side===Un&&W.forceSinglePass===!1?(W.side=Pn,W.needsUpdate=!0,P.renderBufferDirect($,L,V,W,w,xe),W.side=cs,W.needsUpdate=!0,P.renderBufferDirect($,L,V,W,w,xe),W.side=Un):P.renderBufferDirect($,L,V,W,w,xe),w.onAfterRender(P,L,$,V,W,xe)}function co(w,L,$){L.isScene!==!0&&(L=Ln);let V=q.get(w),W=T.state.lights,xe=T.state.shadowsArray,Ae=W.state.version,ve=de.getParameters(w,W.state,xe,L,$,T.state.lightProbeGridArray),Re=de.getProgramCacheKey(ve),ke=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?L.environment:null,V.fog=L.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=ce.get(w.envMap||V.environment,Qe),V.envMapRotation=V.environment!==null&&w.envMap===null?L.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",yi),ke=new Map,V.programs=ke);let st=ke.get(Re);if(st!==void 0){if(V.currentProgram===st&&V.lightsStateVersion===Ae)return dd(w,ve),st}else ve.uniforms=de.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,$,ve),w.onBeforeCompile(ve,P),st=de.acquireProgram(ve,Re),ke.set(Re,st),V.uniforms=ve.uniforms;let Pe=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=Fe.uniform),dd(w,ve),V.needsLights=Dm(w),V.lightsStateVersion=Ae,V.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=st,V.uniformsList=null,st}function ud(w){if(w.uniformsList===null){let L=w.currentProgram.getUniforms();w.uniformsList=Ir.seqWithValue(L.seq,w.uniforms)}return w.uniformsList}function dd(w,L){let $=q.get(w);$.outputColorSpace=L.outputColorSpace,$.batching=L.batching,$.batchingColor=L.batchingColor,$.instancing=L.instancing,$.instancingColor=L.instancingColor,$.instancingMorph=L.instancingMorph,$.skinning=L.skinning,$.morphTargets=L.morphTargets,$.morphNormals=L.morphNormals,$.morphColors=L.morphColors,$.morphTargetsCount=L.morphTargetsCount,$.numClippingPlanes=L.numClippingPlanes,$.numIntersection=L.numClipIntersection,$.vertexAlphas=L.vertexAlphas,$.vertexTangents=L.vertexTangents,$.toneMapping=L.toneMapping}function Pm(w,L){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(L.matrixWorld);for(let $=0,V=w.length;$<V;$++){let W=w[$];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function Im(w,L,$,V,W){L.isScene!==!0&&(L=Ln),j.resetTextureUnits();let xe=L.fog,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?L.environment:null,ve=se===null?P.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:lt.workingColorSpace,Re=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,ke=ce.get(V.envMap||Ae,Re),Qe=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,st=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,qt=!!$.morphAttributes.color,Rt=ui;V.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Rt=P.toneMapping);let St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vn=St!==void 0?St.length:0,Te=q.get(V),An=T.state.lights;if(at===!0&&(dt===!0||w!==te)){let At=w===te&&V.id===X;Fe.setState(V,w,At)}let ct=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==An.state.version||Te.outputColorSpace!==ve||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==ke||V.fog===!0&&Te.fog!==xe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Fe.numPlanes||Te.numIntersection!==Fe.numIntersection)||Te.vertexAlphas!==Qe||Te.vertexTangents!==st||Te.morphTargets!==Pe||Te.morphNormals!==mt||Te.morphColors!==qt||Te.toneMapping!==Rt||Te.morphTargetsCount!==vn||!!Te.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Te.__version=V.version);let Zn=Te.currentProgram;ct===!0&&(Zn=co(V,L,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Zn,Te));let bi=!1,Yi=!1,Ws=!1,xt=Zn.getUniforms(),Gt=Te.uniforms;if(b.useProgram(Zn.program)&&(bi=!0,Yi=!0,Ws=!0),V.id!==X&&(X=V.id,Yi=!0),Te.needsLights){let At=Pm(T.state.lightProbeGridArray,W);Te.lightProbeGrid!==At&&(Te.lightProbeGrid=At,Yi=!0)}if(bi||te!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xt.setValue(U,"projectionMatrix",w.projectionMatrix),xt.setValue(U,"viewMatrix",w.matrixWorldInverse);let Ji=xt.map.cameraPosition;Ji!==void 0&&Ji.setValue(U,Dt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),te!==w&&(te=w,Yi=!0,Ws=!0)}if(Te.needsLights&&(An.state.sunShadowMap.length>0&&xt.setValue(U,"sunShadowMap",An.state.sunShadowMap,j),An.state.directionalShadowMap.length>0&&xt.setValue(U,"directionalShadowMap",An.state.directionalShadowMap,j),An.state.spotShadowMap.length>0&&xt.setValue(U,"spotShadowMap",An.state.spotShadowMap,j),An.state.pointShadowMap.length>0&&xt.setValue(U,"pointShadowMap",An.state.pointShadowMap,j)),W.isSkinnedMesh){xt.setOptional(U,W,"bindMatrix"),xt.setOptional(U,W,"bindMatrixInverse");let At=W.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),xt.setValue(U,"boneTexture",At.boneTexture,j))}W.isBatchedMesh&&(xt.setOptional(U,W,"batchingTexture"),xt.setValue(U,"batchingTexture",W._matricesTexture,j),xt.setOptional(U,W,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",W._indirectTexture,j),xt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",W._colorsTexture,j));let Zi=$.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&N.update(W,$,Zn),(Yi||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,xt.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&L.environment!==null&&(Gt.envMapIntensity.value=L.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=dv()),Yi){if(xt.setValue(U,"toneMappingExposure",P.toneMappingExposure),Te.needsLights&&km(Gt,Ws),xe&&V.fog===!0&&De.refreshFogUniforms(Gt,xe),De.refreshMaterialUniforms(Gt,V,ee,Y,T.state.transmissionRenderTarget[w.id]),Te.needsLights&&Te.lightProbeGrid){let At=Te.lightProbeGrid;Gt.probesSH.value=At.texture,Gt.probesMin.value.copy(At.boundingBox.min),Gt.probesMax.value.copy(At.boundingBox.max),Gt.probesResolution.value.copy(At.resolution)}Ir.upload(U,ud(Te),Gt,j)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ir.upload(U,ud(Te),Gt,j),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue(U,"center",W.center),xt.setValue(U,"modelViewMatrix",W.modelViewMatrix),xt.setValue(U,"normalMatrix",W.normalMatrix),xt.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let At=V.uniformsGroups;for(let Ji=0,qs=At.length;Ji<qs;Ji++){let pd=At[Ji];ae.update(pd,Zn),ae.bind(pd,Zn)}}return Zn}function km(w,L){w.ambientLightColor.needsUpdate=L,w.lightProbe.needsUpdate=L,w.sunLights.needsUpdate=L,w.sunLightShadows.needsUpdate=L,w.directionalLights.needsUpdate=L,w.directionalLightShadows.needsUpdate=L,w.pointLights.needsUpdate=L,w.pointLightShadows.needsUpdate=L,w.spotLights.needsUpdate=L,w.spotLightShadows.needsUpdate=L,w.rectAreaLights.needsUpdate=L,w.hemisphereLights.needsUpdate=L}function Dm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,L,$){let V=q.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=L,q.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,L){let $=q.get(w);$.__webglFramebuffer=L,$.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(w,L=0,$=0){se=w,J=L,F=$;let V=null,W=!1,xe=!1;if(w){let ve=q.get(w);if(ve.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(U.FRAMEBUFFER,ve.__webglFramebuffer),z.copy(w.viewport),Q.copy(w.scissor),oe=w.scissorTest,b.viewport(z),b.scissor(Q),b.setScissorTest(oe),X=-1;return}else if(ve.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(ve.__hasExternalTextures)j.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qe=w.depthTexture;if(ve.__boundDepthTexture!==Qe){if(Qe!==null&&q.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}let Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);let ke=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[L])?V=ke[L][$]:V=ke[L],W=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?V=q.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[$]:V=ke,z.copy(w.viewport),Q.copy(w.scissor),oe=w.scissorTest}else z.copy(le).multiplyScalar(ee).floor(),Q.copy($e).multiplyScalar(ee).floor(),oe=ft;if($!==0&&(V=B),b.bindFramebuffer(U.FRAMEBUFFER,V)&&b.drawBuffers(w,V),b.viewport(z),b.scissor(Q),b.setScissorTest(oe),W){let ve=q.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve.__webglTexture,$)}else if(xe){let ve=L;for(let Re=0;Re<w.textures.length;Re++){let ke=q.get(w.textures[Re]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Re,ke.__webglTexture,$,ve)}}else if(w!==null&&$!==0){let ve=q.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,$)}X=-1};function fd(w){let L=q.get(w);return(L.__readFormat!==w.format||L.__readType!==w.type)&&(L.__readFormat=w.format,L.__readType=w.type,L.__formatReadable=R.textureFormatReadable(w.format),L.__typeReadable=R.textureTypeReadable(w.type)),L}this.readRenderTargetPixels=function(w,L,$,V,W,xe,Ae,ve=0){if(!(w&&w.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){b.bindFramebuffer(U.FRAMEBUFFER,Re);try{let ke=w.textures[ve],Qe=ke.format,st=ke.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve);let Pe=fd(ke);if(Pe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=w.width-V&&$>=0&&$<=w.height-W&&U.readPixels(L,$,V,W,me.convert(Qe),me.convert(st),xe)}finally{let ke=se!==null?q.get(se).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,L,$,V,W,xe,Ae,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(L>=0&&L<=w.width-V&&$>=0&&$<=w.height-W){b.bindFramebuffer(U.FRAMEBUFFER,Re);let ke=w.textures[ve],Qe=ke.format,st=ke.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve);let Pe=fd(ke);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.bufferData(U.PIXEL_PACK_BUFFER,xe.byteLength,U.STREAM_READ),U.readPixels(L,$,V,W,me.convert(Qe),me.convert(st),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let qt=se!==null?q.get(se).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,qt);let Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Pf(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(mt),U.deleteSync(Rt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,L=null,$=0){let V=Math.pow(2,-$),W=Math.floor(w.image.width*V),xe=Math.floor(w.image.height*V),Ae=L!==null?L.x:0,ve=L!==null?L.y:0;j.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Ae,ve,W,xe),b.unbindTexture()},this.copyTextureToTexture=function(w,L,$=null,V=null,W=0,xe=0){let Ae,ve,Re,ke,Qe,st,Pe,mt,qt,Rt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if($!==null)Ae=$.max.x-$.min.x,ve=$.max.y-$.min.y,Re=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,Qe=$.min.y,st=$.isBox3?$.min.z:0;else{let Gt=Math.pow(2,-W);Ae=Math.floor(Rt.width*Gt),ve=Math.floor(Rt.height*Gt),w.isDataArrayTexture?Re=Rt.depth:w.isData3DTexture?Re=Math.floor(Rt.depth*Gt):Re=1,ke=0,Qe=0,st=0}V!==null?(Pe=V.x,mt=V.y,qt=V.z):(Pe=0,mt=0,qt=0);let St=me.convert(L.format),vn=me.convert(L.type),Te;L.isData3DTexture?(j.setTexture3D(L,0),Te=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(j.setTexture2DArray(L,0),Te=U.TEXTURE_2D_ARRAY):(j.setTexture2D(L,0),Te=U.TEXTURE_2D),b.activeTexture(U.TEXTURE0),b.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let An=b.getParameter(U.UNPACK_ROW_LENGTH),ct=b.getParameter(U.UNPACK_IMAGE_HEIGHT),Zn=b.getParameter(U.UNPACK_SKIP_PIXELS),bi=b.getParameter(U.UNPACK_SKIP_ROWS),Yi=b.getParameter(U.UNPACK_SKIP_IMAGES);b.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),b.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),b.pixelStorei(U.UNPACK_SKIP_ROWS,Qe),b.pixelStorei(U.UNPACK_SKIP_IMAGES,st);let Ws=w.isDataArrayTexture||w.isData3DTexture,xt=L.isDataArrayTexture||L.isData3DTexture;if(w.isDepthTexture){let Gt=q.get(w),Zi=q.get(L),At=q.get(Gt.__renderTarget),Ji=q.get(Zi.__renderTarget);b.bindFramebuffer(U.READ_FRAMEBUFFER,At.__webglFramebuffer),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let qs=0;qs<Re;qs++)Ws&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(w).__webglTexture,W,st+qs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(L).__webglTexture,xe,qt+qs)),U.blitFramebuffer(ke,Qe,Ae,ve,Pe,mt,Ae,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||q.has(w)){let Gt=q.get(w),Zi=q.get(L);b.bindFramebuffer(U.READ_FRAMEBUFFER,k),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let At=0;At<Re;At++)Ws?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.__webglTexture,W,st+At):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gt.__webglTexture,W),xt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zi.__webglTexture,xe,qt+At):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zi.__webglTexture,xe),W!==0?U.blitFramebuffer(ke,Qe,Ae,ve,Pe,mt,Ae,ve,U.COLOR_BUFFER_BIT,U.NEAREST):xt?U.copyTexSubImage3D(Te,xe,Pe,mt,qt+At,ke,Qe,Ae,ve):U.copyTexSubImage2D(Te,xe,Pe,mt,ke,Qe,Ae,ve);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xt?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Te,xe,Pe,mt,qt,Ae,ve,Re,St,vn,Rt.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,xe,Pe,mt,qt,Ae,ve,Re,St,Rt.data):U.texSubImage3D(Te,xe,Pe,mt,qt,Ae,ve,Re,St,vn,Rt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xe,Pe,mt,Ae,ve,St,vn,Rt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xe,Pe,mt,Rt.width,Rt.height,St,Rt.data):U.texSubImage2D(U.TEXTURE_2D,xe,Pe,mt,Ae,ve,St,vn,Rt);b.pixelStorei(U.UNPACK_ROW_LENGTH,An),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct),b.pixelStorei(U.UNPACK_SKIP_PIXELS,Zn),b.pixelStorei(U.UNPACK_SKIP_ROWS,bi),b.pixelStorei(U.UNPACK_SKIP_IMAGES,Yi),xe===0&&L.generateMipmaps&&U.generateMipmap(Te),b.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){J=0,F=0,se=null,b.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var fv=[{name:"Morning Arrival",len:30,kind:"arrive",tint:[255,200,140,.16]},{name:"Period 1",len:60,kind:"class",swap:!1,tint:[255,255,255,0]},{name:"Lunch",len:30,kind:"lunch",tint:[255,236,170,.12]},{name:"Period 2",len:60,kind:"class",swap:!0,tint:[255,235,215,.07]},{name:"Dismissal",len:30,kind:"dismiss",tint:[255,130,80,.24]}],pv=(()=>{let n=0;return fv.map(e=>{let t={...e,start:n};return n+=e.len,t})})(),LS=pv.reduce((n,e)=>n+e.len,0),NS=7*60+30;function up(n,e,t,i,s){let r=n.length,a=n[0].length,o=(f,g)=>f>=0&&g>=0&&f<a&&g<r&&n[g][f]===".";if(e===i&&t===s||!o(i,s))return[];let l=(f,g)=>g*a+f,h=new Map([[l(e,t),0]]),c=new Map,d=[{x:e,y:t,f:0}],u=new Set;for(;d.length;){let f=0;for(let p=1;p<d.length;p++)d[p].f<d[f].f&&(f=p);let g=d.splice(f,1)[0],y=l(g.x,g.y);if(!u.has(y)){if(u.add(y),g.x===i&&g.y===s){let p=[],m=y;for(;m!==l(e,t);)p.push({x:m%a,y:Math.floor(m/a)}),m=c.get(m);return p.reverse()}for(let[p,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let _=g.x+p,E=g.y+m;if(!o(_,E))continue;let x=l(_,E),M=h.get(y)+1;h.has(x)&&h.get(x)<=M||(h.set(x,M),c.set(x,y),d.push({x:_,y:E,f:M+Math.abs(_-i)+Math.abs(E-s)}))}}}return[]}var Cu=["#fde7d3","#fbdcc4","#f5cfa8","#f0c29b","#e3ad7f","#d9a074","#c58a5f","#a86f4f","#8d5a3e","#7a4a36","#5e3a2b","#4a2e24"],Fs=["#2b2b33","#3a2a30","#5a3a35","#694a38","#9a653d","#b5563e","#c9773e","#e0b04e","#f1d98a","#d9d4cc","#8c8c96","#4F91C7","#b8a8da","#e8789a","#5e9c72","#e07a66"],Ru=["#3a2a30","#5a3a2a","#8a6a3a","#c98a3a","#4f8a5e","#4f91c7","#7a8794","#8173ae"],En=["#4f91c7","#326c9e","#8fc9e8","#88b89a","#5e9c72","#a9dcc0","#eab94e","#f8d977","#f6b294","#f28f7e","#d9564a","#eaa5b2","#b8a8da","#8173ae","#c98569","#9a653d","#fff6ea","#9da7aa","#4a3b3f","#2b3a55"],Pu=["#fbf6ee","#313a3f","#d9564a","#4f91c7","#eab94e","#88b89a","#9a653d","#b8a8da"],qn=(...n)=>n.map(([e,t])=>({id:e,label:t})),$a={hairStyle:qn(["crop","Short crop"],["buzz","Buzz cut"],["undercut","Undercut"],["spiky","Spiky"],["messy","Messy"],["sidebang","Side bangs"],["curtains","Curtains"],["pixie","Pixie"],["bob","Bob"],["long","Long"],["wavy","Wavy long"],["curly","Curly puffs"],["afro","Afro"],["pony","Ponytail"],["pigtails","Pigtails"],["twinbuns","Twin buns"],["bun","Bun"],["topknot","Top knot"],["braids","Braids"]),eyeShape:qn(["round","Round"],["oval","Oval"],["wide","Wide"],["sleepy","Sleepy"],["happy","Happy"],["lash","Lashes"]),brow:qn(["soft","Soft"],["thick","Thick"],["thin","Thin"],["arch","Arched"],["none","None"]),mouthStyle:qn(["smile","Smile"],["grin","Grin"],["smirk","Smirk"],["flat","Calm"],["o","Surprised"],["cat","Cat"]),glasses:qn(["none","None"],["round","Round"],["square","Square"],["cat","Cat-eye"],["half","Half-rim"],["sun","Sunglasses"]),hat:qn(["none","None"],["cap","Cap"],["beanie","Beanie"],["bucket","Bucket hat"],["beret","Beret"],["headband","Headband"],["bow","Bow"],["flower","Flower"],["crown","Crown"],["headphones","Headphones"],["catears","Cat ears"]),top:qn(["tee","T-shirt"],["hoodie","Hoodie"],["sweater","Sweater"],["jersey","Jersey"],["blazer","Blazer"],["dress","Dress"],["overalls","Overalls"],["vest","Vest"],["tank","Tank top"]),pattern:qn(["solid","Solid"],["stripes","Stripes"],["dots","Dots"],["plaid","Plaid"],["hearts","Hearts"],["stars","Stars"]),bottom:qn(["pants","Pants"],["joggers","Joggers"],["shorts","Shorts"],["skirt","Skirt"]),shoeStyle:qn(["sneaker","Sneakers"],["boot","Boots"],["sandal","Sandals"],["plain","Plain shoes"]),packStyle:qn(["pack","Backpack"],["messenger","Messenger bag"],["mini","Mini pack"],["none","No bag"]),build:qn(["slim","Slim"],["regular","Regular"],["sturdy","Sturdy"]),age:qn(["k2","Grades K-2"],["g35","Grades 3-5"],["g68","Grades 6-8"],["hs","High school"])},dp=["she/her","he/him","they/them"],Fr=()=>({name:"Student",pronouns:"they/them",age:"hs",skin:"#f0c29b",hairStyle:"bun",hair:"#5a3a35",hair2:null,eyeShape:"round",eyeColor:"#5a3a2a",brow:"soft",browColor:null,freckles:!1,mole:!1,nose:!1,blush:!0,mouthStyle:"smile",lip:"#8a4650",glasses:"round",glassColor:"#5b4048",hat:"none",hatColor:"#e07a66",earrings:null,scarf:null,badge:null,top:"hoodie",shirt:"#d9564a",shirt2:"#fff6ea",pattern:"solid",bottom:"pants",pants:"#4f5d75",shoeStyle:"sneaker",shoes:"#fbf6ee",packStyle:"pack",pack:"#8a5f6a",build:"regular",headSize:1});function pi(n,e=11){return{id:e,age:n.age,skin:n.skin,hair:n.hair,hair2:n.hair2||void 0,style:n.hairStyle,shirt:n.shirt,shirt2:n.shirt2,top:n.top,pattern:n.pattern,bottom:n.bottom,pants:n.pants,eyeShape:n.eyeShape,eyeColor:n.eyeColor,brow:n.brow,browColor:n.browColor||void 0,freckles:n.freckles,mole:n.mole,nose:n.nose,blush:n.blush,mouthStyle:n.mouthStyle,lip:n.lip,glasses:n.glasses==="none"?!1:n.glasses,glassColor:n.glassColor,hat:n.hat==="none"?void 0:n.hat,hatColor:n.hatColor,earrings:n.earrings||void 0,scarf:n.scarf||void 0,badge:n.badge||void 0,shoeStyle:n.shoeStyle,shoes:n.shoes,packStyle:n.packStyle,pack:n.pack,build:n.build,headSize:n.headSize}}function Vi(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ct=(n,e)=>e[Math.floor(n()*e.length)],ei=n=>$a[n].map(e=>e.id);function Lr(n,e="hs"){let t=Ct(n,ei("top")),i=n()<.28?Ct(n,ei("hat").filter(r=>r!=="none")):"none",s=n()<.3?Ct(n,ei("glasses").filter(r=>r!=="none")):"none";return{...Fr(),age:e,name:"",skin:Ct(n,Cu),hairStyle:Ct(n,ei("hairStyle")),hair:Ct(n,Fs),hair2:n()<.16?Ct(n,Fs):null,eyeShape:Ct(n,ei("eyeShape")),eyeColor:Ct(n,Ru),brow:Ct(n,ei("brow").filter(r=>r!=="none")),freckles:n()<.22,mole:n()<.1,nose:n()<.3,blush:n()<.8,mouthStyle:Ct(n,ei("mouthStyle")),glasses:s,glassColor:Ct(n,["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da"]),hat:i,hatColor:Ct(n,En),earrings:n()<.12?Ct(n,["#eab94e","#fff6ea","#f28f7e"]):null,scarf:n()<.1?Ct(n,En):null,badge:n()<.12?Ct(n,En):null,top:t,shirt:Ct(n,En),shirt2:Ct(n,En),pattern:n()<.4?Ct(n,ei("pattern")):"solid",bottom:t==="dress"?"pants":Ct(n,ei("bottom")),pants:Ct(n,En),shoeStyle:Ct(n,ei("shoeStyle")),shoes:Ct(n,Pu),packStyle:Ct(n,ei("packStyle")),pack:Ct(n,En),build:Ct(n,ei("build")),headSize:.94+n()*.12}}var Iu=n=>[n.skin,n.hairStyle,n.hair,n.top,n.shirt,n.pattern,n.hat,n.glasses,n.bottom,n.pants].join("|"),mv=["black","dark brown","chestnut","brown","caramel","auburn","ginger","blond","platinum","silver","grey","blue","lavender","pink","green","coral"],gv=["blue","navy","sky blue","sage green","green","mint","gold","yellow","peach","coral","red","pink","lilac","purple","terracotta","brown","cream","grey","charcoal","midnight blue"],yv=n=>mv[Fs.indexOf(n)]??"colorful",Xa=n=>gv[En.indexOf(n)]??"colorful";function Eh(n){let e=[],t=(i,s)=>$a[i].find(r=>r.id===s)?.label.toLowerCase()??s;return n.hat&&n.hat!=="none"&&e.push({key:"hat",phrase:`${Xa(n.hatColor)} ${t("hat",n.hat)}`,noun:"hat"}),n.glasses&&n.glasses!=="none"&&e.push({key:"glasses",phrase:`${t("glasses",n.glasses)} glasses`,noun:"glasses"}),e.push({key:"hair",phrase:`${yv(n.hair)} ${t("hairStyle",n.hairStyle)} hair`,noun:"hair"}),e.push({key:"top",phrase:`${n.pattern!=="solid"?n.pattern+" ":""}${Xa(n.shirt)} ${t("top",n.top)}`,noun:n.top}),n.packStyle!=="none"&&e.push({key:"pack",phrase:`${Xa(n.pack)} ${t("packStyle",n.packStyle)}`,noun:"bag"}),n.freckles&&e.push({key:"freckles",phrase:"freckles",noun:"freckles"}),n.earrings&&e.push({key:"earrings",phrase:"earrings",noun:"earrings"}),n.scarf&&e.push({key:"scarf",phrase:"scarf",noun:"scarf"}),e.push({key:"shoes",phrase:`${Xa(n.shoes)==="colorful"?"":Xa(n.shoes)+" "}${t("shoeStyle",n.shoeStyle)}`.trim(),noun:"shoes"}),e}var bv=["cheerful","shy","sporty","nerdy","artsy","funny","curious","bossy","dreamy","kind"],ku=["Maya","Marcus","Priya","Leo","Amara","Diego","Sofia","Kenji","Zara","Eli","Nadia","Tobias","Imani","Mateo","Hana","Omar","Lucia","Jonah","Anika","Caleb","Mei","Ravi","Talia","Felix","Yara","Ben","Chloe","Dev","Esme","Finn","Grace","Hugo","Isla","Jamal","Keira","Liam","Mira","Noah","Olive","Pablo","Quinn","Rosa","Sam","Tessa","Uma","Victor","Willa","Xavier","Yusuf","Zoe","Aiden","Bella","Cyrus","Daria","Emil","Farah","Gus","Harper"],Du=["Chen","Reed","Patel","Okafor","Santos","Nguyen","Kim","Haddad","Rivera","Brooks","Ivanov","Tanaka","Mensah","Larsen","Cruz","Adeyemi","Fischer","Ibrahim","Kowalski","Lopez","Morales","Novak","Osei","Park","Quintero","Rossi","Singh","Torres","Underwood","Vega","Walker","Yamada","Zhang","Abbott","Bishop","Castillo","Dalton","Ellis","Foster","Grant"],fp={young:["dinosaurs","building with blocks","drawing animals","jumping rope","bugs and butterflies","playing tag","stickers","toy trains","singing songs","baking cookies"],mid:["soccer","robotics club","drawing comics","chess","baking","birdwatching","skateboarding","minecraft builds","magic tricks","swimming","reading mysteries","playing violin","origami","space and rockets"],teen:["basketball","coding","photography","theater","poetry","painting","piano","track and field","debate","gardening","making music","volleyball","film editing","cooking"]},vv=["tacos","mac and cheese","pizza","fried rice","mango slices","pancakes","dumplings","hummus and pita","grilled cheese","pasta","chicken nuggets","cheeseburgers","sushi rolls","samosas","peanut butter sandwiches"],xv=["a dog named Biscuit","a cat named Pickles","a hamster named Nugget","two goldfish","a rabbit named Clover","a parrot named Mango","a turtle named Speedy","a gecko named Ziggy",null,null,null],_v=["become an astronaut","open a bakery","play pro soccer","write a graphic novel","be a marine biologist","build robots","become a teacher","direct movies","be a vet","design video games","be a chef","become a pilot","run for mayor","be a musician"],pp=["always hums while working","carries a tiny notebook everywhere","says 'for real though' a lot","collects interesting rocks","never leaves without a snack","talks to plants","draws doodles on everything","counts steps in the hallway","makes up nicknames","loves puns","gets the hiccups when nervous","is always five minutes early"],Sv=["is secretly afraid of the dark","still sleeps with a stuffed bunny","writes songs nobody has heard","wants to try out for the school play but is nervous","can solve a Rubik's cube in under a minute","once got lost in the library for an hour","has a crush on someone in the art club","is saving up for a telescope","is learning a new language in secret","feels nervous about speaking in class"],mp=["math","ela","science","history"],gp=["k2","g35","g68","hs","g35","g68","k2","hs","g68","g35"],wv=(n,e)=>n==="k2"?["K","1","2"][e%3]:n==="g35"?["3","4","5"][e%3]:n==="g68"?["6","7","8"][e%3]:n==="hs"?["9","10","11","12"][e%4]:"Staff",ti=(n,e)=>e[Math.floor(n()*e.length)];function Mv(n=48,e=20260930){let t=Vi(e),i=new Set,s=new Set,r=[],a="",o="";for(let l=0;l<n;l++){let h=gp[l%gp.length],c,d=0;do c=Lr(t,h),d++;while((i.has(Iu(c))||c.hairStyle===a||c.hair===o)&&d<60);i.add(Iu(c)),a=c.hairStyle,o=c.hair,(h==="k2"||h==="g35")&&(c.glasses=t()<.12?c.glasses:"none",c.top==="blazer"&&(c.top="hoodie"));let u=ku[l%ku.length],f=ti(t,Du),g=`${u} ${f}`;for(;s.has(g);)f=ti(t,Du),g=`${u} ${f}`;s.add(g),c.name=u;let y=h==="k2"||h==="g35"?"young":h==="g68"?"mid":"teen",p=fp[y],m=[ti(t,p)];for(;m.length<3;){let C=ti(t,[...p,...fp.mid]);m.includes(C)||m.push(C)}let _=ti(t,mp),E=ti(t,mp.filter(C=>C!==_)),x=bv[(l*3+Math.floor(t()*10))%10],M=Math.floor(t()*4),T=wv(h,M);r.push({id:l,key:`n${l}`,name:g,first:u,role:"student",age:h,grade:T,spec:c,look:{...pi(c,l),tag:!1},personality:x,interests:m,favSubject:_,hardSubject:E,food:ti(t,vv),pet:ti(t,xv),dream:ti(t,_v),quirk:ti(t,pp),secret:ti(t,Sv),bestFriend:(l+1+Math.floor(t()*5))%n,rival:t()<.3?(l+7+Math.floor(t()*9))%n:null,bio:`${u} is in grade ${T}, loves ${m[0]} and ${m[1]}, and ${ti(t,pp)}.`})}for(let l of r)l.bestFriend===l.id&&(l.bestFriend=(l.id+1)%n);return r}var Ls=Mv(56),ms=n=>Ls[n]??Br.find(e=>e.id===n),Tv=n=>({...Lr(Vi(n.name?.length??5),"adult"),...n});function Nr(n,e,t,i,s,r,a={}){let o=Tv({name:e.split(" ").pop(),age:"adult",...s}),l=e.split(" ").pop();return{id:n,key:`s${n}`,name:e,first:l,role:"staff",title:t,age:"adult",grade:"Staff",spec:o,look:{...pi(o,n),tag:!1},personality:r,interests:["helping students","coffee","crossword puzzles"],favSubject:i??"history",hardSubject:"math",food:"a good salad",pet:null,dream:"see every student find something they love",quirk:"keeps spare pencils in every pocket",secret:"still has their own first-grade report card",bestFriend:0,rival:null,bio:`${e} is ${t}.`,...a}}var Br=[Nr(100,"Mr. Okafor","the hall monitor",null,{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"crop",top:"vest",shirt:"#c98569",shirt2:"#fff6ea",bottom:"pants",pants:"#2b3a55",hat:"none",glasses:"none",packStyle:"none",brow:"thick",mouthStyle:"smile"},"kind"),Nr(101,"Ms. Alvarez","a teacher on hall duty","ela",{skin:"#f0c29b",hair:"#b5563e",hairStyle:"bun",top:"sweater",shirt:"#8173ae",glasses:"cat",packStyle:"messenger",pack:"#9a653d",bottom:"skirt",pants:"#4a3b3f",earrings:"#eab94e"},"cheerful"),Nr(110,"Ms. Keisha Brown","the math teacher","math",{skin:"#a86f4f",hair:"#2b2b33",hairStyle:"curly",top:"blazer",shirt:"#f6b294",shirt2:"#fff6ea",glasses:"none",packStyle:"none",bottom:"pants",pants:"#4a3b3f"},"nerdy"),Nr(111,"Mr. James Lee","the English teacher","ela",{skin:"#d9a074",hair:"#694a38",hairStyle:"crop",top:"sweater",shirt:"#8fc9e8",glasses:"round",packStyle:"none",bottom:"pants",pants:"#5b6b8c"},"dreamy"),Nr(112,"Mr. Jamal Carter","the science teacher","science",{skin:"#7a4a36",hair:"#3a2a30",hairStyle:"afro",top:"tee",shirt:"#a9dcc0",pattern:"solid",glasses:"none",packStyle:"none",bottom:"pants",pants:"#5f7a68"},"curious"),Nr(113,"Mr. Marcus Reed","the history teacher","history",{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"buzz",top:"blazer",shirt:"#c98569",glasses:"square",packStyle:"none",bottom:"pants",pants:"#2b3a55",brow:"thick"},"funny")],Wi={math:Br[2],ela:Br[3],science:Br[4],history:Br[5]};var Fu="unify.social.v1",gs=()=>new Date().toISOString().slice(0,10),Ev=()=>({met:!1,fr:0,talks:0,lastDay:"",lastAt:0,topics:[],facts:{},log:[],quiz:{right:0,total:0},mood:0,helped:0,hurt:0,classNotes:[],overheard:[],seenInClass:0,called:0}),Ah=()=>({v:1,mem:{},profile:{name:"",avatar:Fr(),facts:{},stats:{talks:0,quizRight:0,quizTotal:0,hands:0},created:Date.now(),hasAvatar:!1}}),Xn=Ah(),yp=0,Ur=new Set;function bp(){try{let n=JSON.parse(localStorage.getItem(Fu)||"null");n&&n.v===1&&(Xn={...Ah(),...n,profile:{...Ah().profile,...n.profile}},Xn.profile.avatar={...Fr(),...Xn.profile.avatar||{}})}catch{}}function Ya(){clearTimeout(yp),yp=setTimeout(()=>{try{localStorage.setItem(Fu,JSON.stringify(Xn))}catch{}},120)}bp();try{addEventListener("storage",n=>{n.key===Fu&&(bp(),Ur.forEach(e=>e()))})}catch{}var he={get profile(){return Xn.profile},setProfile(n){Xn.profile={...Xn.profile,...n},Ya(),Ur.forEach(e=>e())},learn(n,e){Xn.profile.facts[n]=e,Ya()},mem(n){let e=String(n);return Xn.mem[e]??(Xn.mem[e]=Ev())},peek(n){return Xn.mem[String(n)]},edit(n,e){e(he.mem(n)),Ya(),Ur.forEach(t=>t())},friends(){return Object.entries(Xn.mem).filter(([,n])=>n.met).map(([n,e])=>({id:n,mem:e})).sort((n,e)=>e.mem.fr-n.mem.fr)},onChange(n){return Ur.add(n),()=>Ur.delete(n)},reset(){Xn=Ah(),Ya(),Ur.forEach(n=>n())},save:Ya},Ns=n=>n>=85?"best friend":n>=60?"close friend":n>=30?"friend":n>=10?"classmate":"new face",Lu=n=>Math.min(5,Math.ceil(n/20));function Bs(n,e,t){he.edit(n,i=>{i.log.push({who:e,text:t.slice(0,220),t:Date.now()}),i.log.length>24&&i.log.splice(0,i.log.length-24)})}function Nu(n,e){he.edit(n,t=>{t.fr=Math.max(0,Math.min(100,t.fr+e)),e<0&&t.hurt++})}var Ch="#6d5a5f";var ys=(n,e,t,i=!1)=>{let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");t(r,n,e);let a=new Sn(s);return a.colorSpace=wt,a.anisotropy=8,i&&(a.wrapS=a.wrapT=is),a},qi=(n,e,t,i,s,r)=>{n.beginPath(),n.roundRect(e,t,i,s,r)},vp=(n,e=3,t=Ch)=>{n.lineWidth=e,n.strokeStyle=t,n.lineJoin="round",n.stroke()},In=(n,e,t=3)=>{n.fillStyle=e,n.fill(),t&&vp(n,t)};var xp=(n,e,t,i,s,r=6)=>{n.save(),n.lineWidth=r,n.strokeStyle="rgba(255,255,255,.5)",n.beginPath(),n.moveTo(e+r,t+s-r),n.lineTo(e+r,t+r),n.lineTo(e+i-r,t+r),n.stroke(),n.strokeStyle="rgba(70,40,50,.22)",n.beginPath(),n.moveTo(e+i-r,t+r),n.lineTo(e+i-r,t+s-r),n.lineTo(e+r,t+s-r),n.stroke(),n.restore()};var _p=()=>ys(512,540,(n,e,t)=>{n.fillStyle="#F4EBDB",n.fillRect(0,0,e,t);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#FBF1DD"),i.addColorStop(1,"#EAF1E8"),n.fillStyle=i,n.fillRect(0,60,e,300);for(let r=0;r<e;r+=32)n.fillStyle="rgba(255,255,255,.55)",n.fillRect(r,60,14,300),n.fillStyle="rgba(110,120,110,.10)",n.fillRect(r+14,60,3,300);n.fillStyle="#FFF9F0",n.fillRect(0,0,e,40);let s=["#F28F7E","#EAB94E","#8FC9E8","#B8A8DA"];for(let r=0;r<8;r++)n.beginPath(),n.arc(32+r*64,42,30,0,Math.PI),In(n,s[r%4],3);n.fillStyle="#EAB94E",n.fillRect(0,340,e,22),n.fillStyle="rgba(255,255,255,.45)",n.fillRect(0,340,e,5),n.fillStyle="#A9CDB8",n.fillRect(0,362,e,150);for(let r=0;r<2;r++)qi(n,24+r*256,384,208,104,8),In(n,"#98C1A8",3),xp(n,24+r*256,384,208,104,5);n.fillStyle="#9A653D",n.fillRect(0,512,e,28),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(0,512,e,4),n.strokeStyle=Ch,n.lineWidth=3,n.beginPath(),n.moveTo(0,361),n.lineTo(e,361),n.moveTo(0,512),n.lineTo(e,512),n.stroke()},!0);var Sp=n=>ys(320,576,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s of[10,168])qi(e,s+14,84,118,150,8),In(e,"#A9DDF2",3),qi(e,s+24,96,30,120,6),e.fillStyle="rgba(255,255,255,.6)",e.fill(),qi(e,s+10,280,126,200,8),In(e,"rgba(0,0,0,.12)",3),xp(e,s+10,280,126,200,5);e.fillStyle="rgba(0,0,0,.22)",e.fillRect(150,0,20,i),e.fillStyle="#EAB94E",e.fillRect(0,i-44,t,44),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(0,i-44,t,6);for(let s of[128,192])e.beginPath(),e.arc(s,330,9,0,7),In(e,"#EAB94E",2.5);e.strokeStyle=Ch,e.lineWidth=6,e.strokeRect(0,0,t,i),e.beginPath(),e.moveTo(160,0),e.lineTo(160,i),e.stroke()}),wp=(n,e,t="#FFF9F0")=>ys(512,128,(i,s,r)=>{qi(i,8,22,s-16,r-30,22),In(i,e,5),qi(i,22,34,s-44,r-54,14),i.fillStyle="rgba(255,255,255,.28)",i.fill(),i.fillStyle=t,i.font="800 58px 'Trebuchet MS',sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,s/2,r/2+4),i.strokeStyle=Ch,i.lineWidth=4;for(let a of[80,s-80])i.beginPath(),i.moveTo(a,0),i.lineTo(a,24),i.stroke()}),Mp=()=>ys(320,400,(n,e,t)=>{qi(n,10,10,e-20,t-46,14),In(n,"#FFF9F0",5);let i=n.createLinearGradient(0,40,0,250);i.addColorStop(0,"#A9DDF2"),i.addColorStop(1,"#E9F7FC"),qi(n,40,40,e-80,230,6),n.fillStyle=i,n.fill(),vp(n,3),n.beginPath(),n.arc(220,96,26,0,7),In(n,"#F8D977",3),n.beginPath(),n.moveTo(44,260),n.lineTo(110,170),n.lineTo(170,260),n.closePath(),In(n,"#88B89A",3),n.beginPath(),n.moveTo(120,260),n.lineTo(210,150),n.lineTo(276,260),n.closePath(),In(n,"#5E9C72",3),n.strokeStyle="#FFF9F0",n.lineWidth=9,n.beginPath(),n.moveTo(e/2,40),n.lineTo(e/2,270),n.moveTo(40,155),n.lineTo(e-40,155),n.stroke(),qi(n,0,t-60,e,26,8),In(n,"#F1C887",4);for(let s of[-1,1]){let r=s<0?16:e-16;n.beginPath(),n.moveTo(r,14),n.quadraticCurveTo(r+s*-50,90,r+s*-34,250),n.lineTo(r+s*-34,300),n.lineTo(r,300),n.closePath(),In(n,"#F28F7E",3.5)}});var Tp=()=>ys(256,256,n=>{n.beginPath(),n.arc(128,128,120,0,7),In(n,"#F28F7E",8),n.beginPath(),n.arc(128,128,96,0,7),In(n,"#FFF9F0",4);for(let e=0;e<12;e++){let t=e*Math.PI/6;n.strokeStyle="#4a3b3f",n.lineWidth=6,n.beginPath(),n.moveTo(128+Math.sin(t)*76,128-Math.cos(t)*76),n.lineTo(128+Math.sin(t)*90,128-Math.cos(t)*90),n.stroke()}n.strokeStyle="#4a3b3f",n.lineCap="round",n.lineWidth=9,n.beginPath(),n.moveTo(128,128),n.lineTo(160,88),n.stroke(),n.lineWidth=6,n.beginPath(),n.moveTo(128,128),n.lineTo(118,52),n.stroke(),n.beginPath(),n.arc(128,128,9,0,7),In(n,"#F28F7E",3)});var Ep=()=>ys(128,128,(n,e,t)=>{let i=n.createRadialGradient(64,64,4,64,64,62);i.addColorStop(0,"rgba(52,34,46,.55)"),i.addColorStop(1,"rgba(52,34,46,0)"),n.fillStyle=i,n.fillRect(0,0,e,t)}),Ap=()=>ys(64,64,(n,e,t)=>{n.filter="blur(5px)",n.fillStyle="rgba(50,30,40,.9)",n.fillRect(12,12,40,40)}),Cp=n=>ys(256,256,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s=0;s<=t;s+=32)e.strokeStyle="rgba(60,40,50,.28)",e.lineWidth=4,e.beginPath(),e.moveTo(s,0),e.lineTo(s,i),e.stroke(),e.fillStyle="rgba(255,255,255,.16)",e.fillRect(s+6,0,10,i)});var $n="#4A3B3F",Rp="#6d5a5f",Ht=(n,e,t)=>{let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Sn(i);return s.colorSpace=wt,s.anisotropy=8,s},Tt=(n,e,t,i,s,r)=>{n.beginPath(),n.roundRect(e,t,i,s,r)},Cv=(n,e=4)=>{n.lineWidth=e,n.strokeStyle=Rp,n.lineJoin="round",n.stroke()},Ke=(n,e,t=4)=>{n.fillStyle=e,n.fill(),t&&Cv(n,t)},zt=(n,e,t=800,i="'Trebuchet MS',system-ui,sans-serif")=>{n.font=`${t} ${e}px ${i}`},Za="'Segoe Print','Bradley Hand','Comic Sans MS','Chalkboard SE',cursive";function Bu(n,e,t){let i=[],s="";for(let r of e.split(/\s+/)){let a=s?s+" "+r:r;n.measureText(a).width>t&&s?(i.push(s),s=r):s=a}return s&&i.push(s),i}var Pp=()=>Ht(384,512,(n,e,t)=>{Tt(n,8,8,e-16,t-16,20),Ke(n,"#FFF9F0",6),zt(n,38,900),n.fillStyle="#E07A66",n.textAlign="center",n.fillText("CLASS RULES",e/2,70),["Be kind","Raise your hand","Listen and learn","Try your best","Help each other"].forEach((i,s)=>{n.beginPath(),n.arc(56,130+s*66,20,0,7),Ke(n,["#4F91C7","#F28F7E","#88B89A","#EAB94E","#B8A8DA"][s],4),zt(n,22,900),n.fillStyle="#fff",n.fillText(String(s+1),56,138+s*66),zt(n,30,700),n.fillStyle=$n,n.textAlign="left",n.fillText(i,92,140+s*66),n.textAlign="center"})}),Rh=()=>Ht(512,384,(n,e,t)=>{Tt(n,8,8,e-16,t-16,16),Ke(n,"#F8E9C8",6),zt(n,30,900),n.fillStyle=$n,n.textAlign="center",n.fillText("WORD WALL",e/2,52),["theme","vertex","cell","empire","rhythm","primary","evidence","law","orbit","simile","market","balance"].forEach((i,s)=>{let r=22+s%3*160,a=76+Math.floor(s/3)*74;Tt(n,r,a,148,58,10),Ke(n,["#A9DCC0","#8FC9E8","#F6B294","#EAA5B2"][(s+(s>>2))%4],3),zt(n,24,800,Za),n.fillStyle=$n,n.fillText(i,r+74,a+38)})}),Uu=()=>Ht(768,160,(n,e,t)=>{Tt(n,6,6,e-12,t-12,14),Ke(n,"#FFF9F0",5),n.strokeStyle=$n,n.lineWidth=5,n.beginPath(),n.moveTo(40,92),n.lineTo(e-40,92),n.stroke();for(let i=-5;i<=5;i++){let s=e/2+i*62;n.beginPath(),n.moveTo(s,78),n.lineTo(s,106),n.stroke(),zt(n,24,800),n.fillStyle=i<0?"#4F91C7":i>0?"#E07A66":$n,n.textAlign="center",n.fillText(String(i),s,136)}}),Ip=()=>Ht(1024,128,(n,e,t)=>{Tt(n,4,4,e-8,t-8,12),Ke(n,"#FFF9F0",4),"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((i,s)=>{let r=22+s*38;zt(n,40,900),n.fillStyle=["#E07A66","#4F91C7","#88B89A","#EAB94E","#B8A8DA"][s%5],n.textAlign="center",n.fillText(i,r+14,80)})}),kp=()=>Ht(640,384,(n,e,t)=>{Tt(n,8,8,e-16,t-16,14),Ke(n,"#8FC9E8",6),[[[60,120],[150,90],[250,110],[230,190],[150,230],[90,200]],[[210,230],[270,240],[260,330],[220,320]],[[330,100],[450,80],[560,110],[540,200],[450,210],[380,190]],[[360,230],[420,230],[430,320],[380,330]]].forEach((s,r)=>{n.beginPath(),s.forEach(([a,o],l)=>l?n.lineTo(a,o):n.moveTo(a,o)),n.closePath(),Ke(n,["#88B89A","#B7D8A4","#F6D78F","#A9DCC0"][r],4)}),zt(n,26,900),n.fillStyle="#fff",n.textAlign="center",n.fillText("OUR WORLD",e/2,46)}),Ou=()=>Ht(512,320,(n,e,t)=>{Tt(n,8,8,e-16,t-16,14),Ke(n,"#FFF9F0",6);let i=["#F28F7E","#F8D977","#8FC9E8","#A9DCC0","#B8A8DA","#F6B294"];for(let s=0;s<5;s++)for(let r=0;r<14;r++)s<2&&r>1&&r<12||s===0&&r>0&&r<13||(Tt(n,22+r*33,60+s*46,29,40,4),Ke(n,i[(r+s)%6],2));zt(n,26,900),n.fillStyle=$n,n.textAlign="center",n.fillText("ELEMENTS",e/2,44)}),Dp=()=>Ht(1024,160,(n,e,t)=>{Tt(n,6,6,e-12,t-12,14),Ke(n,"#F8E9C8",5),n.strokeStyle=$n,n.lineWidth=6,n.beginPath(),n.moveTo(40,84),n.lineTo(e-40,84),n.stroke(),[["2600 BCE","Pyramids"],["200 BCE","Silk Road"],["1440","Printing"],["1773","Tea Party"],["1789","Constitution"],["1969","Moon landing"]].forEach(([i,s],r)=>{let a=90+r*168;n.beginPath(),n.arc(a,84,12,0,7),Ke(n,["#E07A66","#4F91C7","#88B89A","#EAB94E","#B8A8DA","#F28F7E"][r],4),zt(n,22,900),n.fillStyle=$n,n.textAlign="center",n.fillText(i,a,54),zt(n,20,700),n.fillText(s,a,130)})}),Fp=()=>Ht(384,320,(n,e,t)=>{Tt(n,8,8,e-16,t-16,16),Ke(n,"#FFF9F0",6),n.strokeStyle=$n,n.lineWidth=3;for(let i=0;i<5;i++)n.beginPath(),n.moveTo(34,100+i*20),n.lineTo(e-34,100+i*20),n.stroke();[[90,140],[150,120],[210,160],[270,100]].forEach(([i,s],r)=>{n.beginPath(),n.ellipse(i,s,13,10,-.3,0,7),Ke(n,["#E07A66","#4F91C7","#88B89A","#EAB94E"][r],3),n.beginPath(),n.moveTo(i+11,s),n.lineTo(i+11,s-56),n.stroke()}),zt(n,34,900),n.fillStyle="#E07A66",n.textAlign="center",n.fillText("MUSIC ROOM",e/2,60)}),Lp=()=>Ht(384,384,(n,e,t)=>{Tt(n,8,8,e-16,t-16,16),Ke(n,"#FFF9F0",6),["#E9515D","#F28F7E","#F8D977","#88B89A","#4F91C7","#8173AE"].forEach((s,r)=>{let a=r*Math.PI/3-Math.PI/2;n.beginPath(),n.arc(e/2+Math.cos(a)*92,t/2+10+Math.sin(a)*92,50,0,7),Ke(n,s,4)}),zt(n,28,900),n.fillStyle=$n,n.textAlign="center",n.fillText("COLOR WHEEL",e/2,46)}),Np=()=>Ht(384,512,(n,e,t)=>{Tt(n,8,8,e-16,t-16,10),Ke(n,"#EFD9A8",6),zt(n,62,800,"'Georgia',serif"),n.fillStyle=$n,n.textAlign="center",n.fillText("We the",e/2,150),n.fillText("People",e/2,220),n.strokeStyle="rgba(74,59,63,.55)",n.lineWidth=3;for(let i=0;i<9;i++)n.beginPath(),n.moveTo(48,270+i*20),n.lineTo(e-48-i%3*30,270+i*20),n.stroke()}),Bp=()=>Ht(384,384,(n,e,t)=>{Tt(n,8,8,e-16,t-16,16),Ke(n,"#E9F7FC",6),Tt(n,40,70,304,250,36),Ke(n,"#A9DCC0",6),Tt(n,56,86,272,218,28),Ke(n,"#D9F0DF",3),n.beginPath(),n.ellipse(210,200,70,56,0,0,7),Ke(n,"#CFE8F8",4),[[110,130],[130,250],[290,140],[270,270]].forEach(([i,s])=>{n.beginPath(),n.ellipse(i,s,24,14,.4,0,7),Ke(n,"#5E9C72",3)}),n.beginPath(),n.arc(112,200,20,0,7),Ke(n,"#B8A8DA",3),zt(n,28,900),n.fillStyle=$n,n.textAlign="center",n.fillText("PLANT CELL",e/2,50)}),Ph=()=>Ht(384,384,(n,e,t)=>{Tt(n,8,8,e-16,t-16,16),Ke(n,"#FFF3E0",6),zt(n,28,900),n.fillStyle=$n,n.textAlign="center",n.fillText("3 BRANCHES",e/2,50),[["Congress","makes laws","#4F91C7"],["President","carries out","#E07A66"],["Courts","decide","#88B89A"]].forEach(([i,s,r],a)=>{Tt(n,30,76+a*94,e-60,80,14),Ke(n,r,4),zt(n,28,900),n.fillStyle="#fff",n.textAlign="left",n.fillText(i,48,118+a*94),zt(n,22,700),n.fillText(s,48,142+a*94)})}),Up=n=>Ht(768,192,(e,t,i)=>{Tt(e,6,6,t-12,i-12,18),Ke(e,"#E07A66",6),Tt(e,22,22,t-44,i-44,12),e.fillStyle="rgba(255,255,255,.2)",e.fill(),zt(e,40,900),e.fillStyle="#fff",e.textAlign="center";let s=Bu(e,n,t-90);s.slice(0,2).forEach((r,a)=>e.fillText(r,t/2,90+a*48-(s.length>1?14:0)))}),zu=n=>Ht(256,256,(e,t,i)=>{let s=["#9A653D","#EAB94E","#4F91C7","#F28F7E"];if(Tt(e,6,6,t-12,i-12,8),Ke(e,s[n%4],6),Tt(e,24,24,t-48,i-48,4),Ke(e,"#FFF9F0",3),n%4===0)e.beginPath(),e.arc(100,100,26,0,7),Ke(e,"#F8D977",3),e.beginPath(),e.moveTo(40,190),e.lineTo(100,120),e.lineTo(160,190),e.closePath(),Ke(e,"#88B89A",3);else if(n%4===1)for(let r=0;r<4;r++)e.beginPath(),e.arc(80+r*30,120+r%2*30,24,0,7),Ke(e,["#E9515D","#F8D977","#4F91C7","#88B89A"][r],3);else n%4===2?(Tt(e,60,90,130,90,6),Ke(e,"#F28F7E",3),e.beginPath(),e.moveTo(50,92),e.lineTo(125,50),e.lineTo(200,92),e.closePath(),Ke(e,"#C4463C",3),Tt(e,112,130,26,50,3),Ke(e,"#9A653D",2)):(e.beginPath(),e.ellipse(128,130,56,40,0,0,7),Ke(e,"#8FC9E8",3),e.beginPath(),e.arc(112,122,6,0,7),Ke(e,"#313A3F",1),e.beginPath(),e.moveTo(184,130),e.lineTo(214,106),e.lineTo(214,154),e.closePath(),Ke(e,"#8FC9E8",3))}),Op=()=>Ht(256,320,(n,e,t)=>{Tt(n,6,6,e-12,t-12,10),Ke(n,"#FFF9F0",5),Tt(n,6,6,e-12,56,10),Ke(n,"#E07A66",5),zt(n,30,900),n.fillStyle="#fff",n.textAlign="center",n.fillText("THIS MONTH",e/2,46);for(let i=0;i<5;i++)for(let s=0;s<7;s++)n.fillStyle=(i*7+s)%9===3?"#F8D977":"#E9E1D0",n.fillRect(18+s*31,82+i*46,26,38)}),Hu=()=>Ht(256,256,(n,e,t)=>{n.fillStyle="#9FD0E8",n.fillRect(0,0,e,t);for(let i=0;i<260;i++)n.fillStyle=i&1?"rgba(255,255,255,.3)":"rgba(50,108,158,.14)",n.fillRect(Math.abs(Math.sin(i*12.9))*e,Math.abs(Math.sin(i*78.2))*t,3,3);n.strokeStyle="#EAB94E",n.lineWidth=10,n.strokeRect(5,5,e-10,t-10),n.strokeStyle="#F28F7E",n.lineWidth=4,n.strokeRect(24,24,e-48,t-48)}),zp=()=>Ht(256,256,(n,e,t)=>{n.fillStyle="#F7EEDF",n.fillRect(0,0,e,t),n.strokeStyle="rgba(150,125,95,.5)",n.lineWidth=3,n.strokeRect(1.5,1.5,e-3,t-3),n.beginPath(),n.moveTo(e/2,0),n.lineTo(e/2,t),n.moveTo(0,t/2),n.lineTo(e,t/2),n.stroke()}),Gu=n=>Ht(128,64,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i),e.fillStyle="rgba(255,255,255,.3)",e.fillRect(0,0,t,6),e.strokeStyle="rgba(90,60,40,.18)";for(let s=0;s<6;s++)e.beginPath(),e.moveTo(0,10+s*9),e.lineTo(t,12+s*9),e.stroke();e.strokeStyle=Rp,e.lineWidth=3,e.strokeRect(1.5,1.5,t-3,i-3)}),Hp=(n,e,t="#fff")=>Ht(512,128,(i,s,r)=>{Tt(i,8,14,s-16,r-28,20),Ke(i,e,5),zt(i,54,900),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.fillText(n,s/2,r/2+3)}),Gp=()=>Ht(512,512,(n,e,t)=>{for(let i=0;i<8;i++){n.fillStyle=i%2?"#D9B48A":"#E2C29C",n.fillRect(0,i*64,e,64);for(let s=0;s<6;s++)n.fillStyle="rgba(120,80,40,.10)",n.fillRect((i*97+s*83)%480,i*64+6+s*9,60+s*37%140,2);n.fillStyle="rgba(255,255,255,.22)",n.fillRect(0,i*64,e,3),n.fillStyle="rgba(80,50,30,.35)",n.fillRect(0,i*64+61,e,3);for(let s=0;s<3;s++)n.fillStyle="rgba(80,50,30,.35)",n.fillRect((i*131+s*200)%500,i*64,3,64)}}),Vu=()=>Ht(128,128,(n,e,t)=>{n.fillStyle="#7FA6C9",n.fillRect(0,0,e,t);for(let i=0;i<120;i++)n.fillStyle=i&1?"rgba(255,255,255,.18)":"rgba(40,70,110,.12)",n.fillRect(Math.abs(Math.sin(i*12.9))*e,Math.abs(Math.sin(i*78.2))*t,3,3);n.fillStyle="#EAB94E",n.fillRect(0,0,e,6)});var Vp=(n,e="#4F91C7")=>Ht(1024,128,(t,i,s)=>{Tt(t,6,10,i-12,s-20,22),Ke(t,e,6),zt(t,62,900),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.fillText(n,i/2,s/2+3)});var Wp=["#2a5fa8","#c4463c","#2f7a52","#7a4fa8","#b46a1a"],Ja=class{constructor(e=""){this.label=e;this.cv=document.createElement("canvas");this.W=1024;this.H=640;this.title="";this.items=[];this.shown=0;this.target=0;this.speed=26;this.resolve=null;this.dirty=!0;this.tip={x:.1,y:.2};this.cv.width=this.W,this.cv.height=this.H,this.ctx=this.cv.getContext("2d"),this.tex=new Sn(this.cv),this.tex.colorSpace=wt,this.tex.anisotropy=8,this.redraw()}get total(){return this.title.length+this.items.reduce((e,t)=>e+t.text.length,0)}get done(){return this.shown>=this.total}clear(){this.title="",this.items=[],this.shown=0,this.target=0,this.dirty=!0,this.resolve?.(),this.resolve=null}set(e,t){this.clear(),this.title=e,this.items=t.map((i,s)=>({text:i.text,kind:i.kind??"bullet",color:Wp[s%Wp.length]})),this.dirty=!0}write(e=26){return this.speed=e,this.target=this.total,new Promise(t=>{this.resolve=t,this.done&&t()})}showAll(){this.shown=this.total,this.target=this.total,this.dirty=!0,this.resolve?.(),this.resolve=null}update(e){this.shown<this.target&&(this.shown=Math.min(this.target,this.shown+this.speed*e),this.dirty=!0,this.shown>=this.target&&(this.resolve?.(),this.resolve=null)),this.dirty&&(this.redraw(),this.dirty=!1)}redraw(){let e=this.ctx,t=this.W,i=this.H,s=e.createLinearGradient(0,0,0,i);s.addColorStop(0,"#FDFDFA"),s.addColorStop(1,"#EEF0EA"),e.fillStyle=s,e.fillRect(0,0,t,i),e.strokeStyle="rgba(120,130,125,.18)",e.lineWidth=2;for(let d=0;d<5;d++)e.beginPath(),e.moveTo(0,60+d*130),e.lineTo(t,62+d*130),e.stroke();e.fillStyle="rgba(255,255,255,.55)",e.fillRect(0,0,t,14);let r=Math.floor(this.shown),a=46,o=74;if(e.textBaseline="alphabetic",this.tip={x:.06,y:.1},this.title){e.font=`800 52px ${Za}`,e.fillStyle="#1d3f78";let d=this.title.slice(0,r);e.fillText(d,a,o);let u=e.measureText(this.title).width;e.strokeStyle="#EAB94E",e.lineWidth=6,e.lineCap="round",e.beginPath(),e.moveTo(a,o+12),e.lineTo(a+Math.min(u,e.measureText(d).width+8),o+12),e.stroke(),this.tip={x:(a+e.measureText(d).width)/t,y:(o-14)/i},r-=this.title.length,o+=66}let l=40,h=[],c=i-o-40;for(;l>=24&&(e.font=`700 ${l}px ${Za}`,h=this.items.map(u=>Bu(e,u.text,t-140)),!(h.reduce((u,f)=>u+f.length*(l*1.22)+l*.5,0)<=c));l-=2);e.font=`700 ${l}px ${Za}`,this.items.forEach((d,u)=>{if(r<=0)return;let f=h[u],g=Math.min(r,d.text.length);e.beginPath(),e.arc(a+12,o-l*.28,l*.2,0,7),e.fillStyle=d.kind==="example"?"#c4463c":d.color,e.fill();let y=0;f.forEach((p,m)=>{let _=p.slice(0,Math.max(0,g-y)),E=a+38,x=o+m*l*1.22;_&&(e.fillStyle=d.kind==="example"?"#a8332a":d.color,e.fillText(_,E,x),this.tip={x:(E+e.measureText(_).width)/t,y:(x-l*.3)/i}),y+=p.length+1}),o+=f.length*l*1.22+l*.5,r-=d.text.length}),e.fillStyle="#C9B28A",e.fillRect(0,i-22,t,22),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(0,i-22,t,4),e.strokeStyle="#9DA7AA",e.lineWidth=14,e.strokeRect(0,0,t,i),this.tex.needsUpdate=!0}};var ja="#6b4a4f";function kn(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Se(n,e,t=1.4){n.fillStyle=e,n.fill(),t&&(n.lineWidth=t,n.strokeStyle=ja,n.lineJoin="round",n.stroke())}function ni(n,e,t,i,s,r,a){n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.strokeStyle=ja,n.lineWidth=r+2.2,n.stroke(),n.strokeStyle=a,n.lineWidth=r,n.stroke()}var Pv=["#5b6b8c","#7a6a58","#4f5d75","#8a5f6a","#5f7a68"];function Nt(n,e){if(!n||n[0]!=="#"||n.length<7)return n;let t=parseInt(n.slice(1,7),16),i=e>0?0:255,s=Math.abs(e);return"#"+[t>>16&255,t>>8&255,t&255].map(r=>Math.round(r+(i-r)*s).toString(16).padStart(2,"0")).join("")}function Iv(n,e,t,i,s){n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.7,t-i*1.2,e,t-i*.35),n.bezierCurveTo(e+i*.7,t-i*1.2,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()}function kv(n,e,t,i,s){n.fillStyle=s,n.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,o=r&1?i*.45:i;n.lineTo(e+Math.cos(a)*o,t+Math.sin(a)*o)}n.closePath(),n.fill()}function Ii(n,e,t,i,s){n.save(),n.translate(Math.round(e*2)/2,Math.round(t*2)/2);let r=i.moving,a=r?Math.sin(i.walk):0,o=i.dir,l=o==="left"||o==="right",h=o==="left"?-1:1,c=o==="up",d=i.sitting,u=i.age==="adult",f=i.top,g=i.bottom||"pants",y=(i.headSize||1)*1,p=(i.build==="slim"?.9:i.build==="sturdy"?1.12:1)*(u?1.12:1),m=u?1.28:1;n.fillStyle="rgba(70,45,55,.24)",n.beginPath(),n.ellipse(0,1,10*p,3.6,0,0,7),n.fill(),d&&n.translate(0,8),n.translate(0,r?-Math.abs(Math.cos(i.walk))*1.8:Math.sin(s*2+i.id)*.35),u&&n.scale(1,m);let _=i.pants||Pv[i.id%5],E=i.pack||["#f28f7e","#4f91c7","#eab94e","#88b89a","#b8a8da"][i.id%5],x=i.shoes||"#fbf6ee",M=i.packStyle||"pack",T=f==="tank"?i.skin:i.shirt,C=i.shirt2||"#fff6ea";d||[-1,1].forEach(z=>{let Q=r?Math.max(0,z*a)*2.6:0,oe=l?0:z*3.2*p,qe=l?z*a*4.2:z*3.2*p;g==="shorts"?(ni(n,oe,-9,qe,-2-Q,3.4,i.skin),ni(n,oe,-9,oe+(qe-oe)*.38,-6-Q*.38,3.9,_)):g==="skirt"?ni(n,oe,-9,qe,-2-Q,3.2,i.skin):ni(n,oe,-9,qe,-2-Q,g==="joggers"?4.2:3.6,_);let Le=qe+(l?h*1.2:0),Ze=-.6-Q;i.shoeStyle==="boot"?(kn(n,Le-2.6,Ze-3.6,5.2,4.6,1.6),Se(n,x,1.1),n.beginPath(),n.ellipse(Le+(l?h*1.2:0),Ze+.6,3.6,1.7,0,0,7),Se(n,Nt(x,.25),1.1)):i.shoeStyle==="sandal"?(n.beginPath(),n.ellipse(Le,Ze,3.4,1.7,0,0,7),Se(n,i.skin,1.1),n.strokeStyle=x,n.lineWidth=1.2,n.beginPath(),n.moveTo(Le-2.2,Ze-.3),n.lineTo(Le+2.2,Ze-.3),n.stroke()):(n.beginPath(),n.ellipse(Le,Ze,3.4,1.9,0,0,7),Se(n,x,1.1),i.shoeStyle==="sneaker"&&(n.fillStyle="rgba(255,255,255,.55)",n.fillRect(Le-3,Ze+.5,6,.7)))}),g==="skirt"&&!d&&(n.beginPath(),n.moveTo(-6.8*p,-12),n.lineTo(6.8*p,-12),n.lineTo(9.6*p,-5.6),n.lineTo(-9.6*p,-5.6),n.closePath(),Se(n,_,1.3),n.fillStyle="rgba(255,255,255,.22)",n.fillRect(-8.2*p,-7.4,16.4*p,1));let v=(z,Q)=>{let oe=l?z*a*3.5:z*8.2,qe=-9.5-(r?-z*a*1.5:0),Le=i.arms&&(z>0?i.arms.R:i.arms.L);Le&&(oe=l?h*Math.abs(Le[0])*.9:Le[0],qe=Le[1]),ni(n,l?0:z*6.6*p,-17,oe,qe,3.2,T),n.beginPath(),n.arc(oe,qe+.6,1.9,0,7),Se(n,i.skin,1)};l&&v(-h*-1,!1),l&&M==="pack"?(kn(n,-h*9.5,-19,7,10,3),Se(n,E,1.2)):l&&M==="mini"&&(kn(n,-h*8,-16,5,6.5,2.4),Se(n,E,1.1)),f==="hoodie"&&(n.beginPath(),n.ellipse(0,-19.6,6.4*p,3.2,0,0,7),Se(n,Nt(i.shirt,.14),1.2));let A=()=>{f==="dress"?(n.beginPath(),n.moveTo(-6.4*p,-19.5),n.quadraticCurveTo(0,-21,6.4*p,-19.5),n.lineTo(7*p,-13),n.lineTo(9.6*p,-6),n.quadraticCurveTo(0,-4.4,-9.6*p,-6),n.lineTo(-7*p,-13),n.closePath()):f==="tank"?kn(n,-5.6*p,-19.5,11.2*p,11.5,4):kn(n,-6.6*p,-19.5,13.2*p,11.5,4.5)},P=f==="overalls"||f==="vest"?C:i.shirt;if(A(),Se(n,P,1.4),i.pattern&&i.pattern!=="solid"&&f!=="overalls"&&f!=="vest"){let z=i.shirt2||Nt(i.shirt,.3);if(n.save(),A(),n.clip(),i.pattern==="stripes")for(let Q=-20;Q<-4;Q+=3.6)n.fillStyle=z,n.fillRect(-11,Q,22,1.7);else if(i.pattern==="dots")for(let Q=-19;Q<-4;Q+=3.2)for(let oe=-9+(Q*3&1)*1.6;oe<10;oe+=3.2)n.fillStyle=z,n.beginPath(),n.arc(oe,Q,.85,0,7),n.fill();else if(i.pattern==="plaid"){n.strokeStyle=z,n.globalAlpha=.75,n.lineWidth=1;for(let Q=-19;Q<-4;Q+=3.6)n.beginPath(),n.moveTo(-11,Q),n.lineTo(11,Q),n.stroke();for(let Q=-9;Q<10;Q+=3.6)n.beginPath(),n.moveTo(Q,-21),n.lineTo(Q,-4),n.stroke();n.globalAlpha=1}else if(i.pattern==="hearts")for(let Q=-17;Q<-5;Q+=4.2)for(let oe=-7+(Q*2&1)*2;oe<8;oe+=4.4)Iv(n,oe,Q,1.1,z);else if(i.pattern==="stars")for(let Q=-17;Q<-5;Q+=4.2)for(let oe=-7+(Q*2&1)*2;oe<8;oe+=4.4)kv(n,oe,Q,1.4,z);n.restore(),A(),n.lineWidth=1.4,n.strokeStyle=ja,n.stroke()}if(n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.ellipse(-2.4,-16.5,2.4,3.4,0,0,7),n.fill(),f)c||(f==="hoodie"?(kn(n,-3.8,-14,7.6,3.6,1.6),n.lineWidth=1,n.strokeStyle=Nt(i.shirt,.3),n.stroke(),ni(n,-1.6,-18.6,-1.6,-14.8,.8,C),ni(n,1.6,-18.6,1.6,-14.8,.8,C)):f==="sweater"?(n.fillStyle=Nt(i.shirt,-.28),n.fillRect(-6.4*p,-10.6,12.8*p,2),n.beginPath(),n.ellipse(0,-19.3,3.6,1.5,0,0,7),Se(n,Nt(i.shirt,-.28),1)):f==="jersey"?(n.fillStyle=i.shirt2||"#fff",n.font="800 6.4px 'Trebuchet MS',sans-serif",n.textAlign="center",n.fillText(String(i.num??i.id%90+1),0,-11.8),n.fillRect(-6.4*p,-19.4,12.8*p,.9)):f==="blazer"?(n.beginPath(),n.moveTo(-3.4,-19.4),n.lineTo(0,-12.4),n.lineTo(3.4,-19.4),n.closePath(),Se(n,C,.9),n.beginPath(),n.moveTo(-3.4,-19.4),n.lineTo(-.4,-11.8),n.lineTo(-5.6,-11),n.lineTo(-6.4,-17.6),n.closePath(),Se(n,Nt(i.shirt,.16),.9),n.beginPath(),n.moveTo(3.4,-19.4),n.lineTo(.4,-11.8),n.lineTo(5.6,-11),n.lineTo(6.4,-17.6),n.closePath(),Se(n,Nt(i.shirt,.16),.9),n.fillStyle="#EAB94E",n.beginPath(),n.arc(0,-10.4,.7,0,7),n.fill()):f==="overalls"?(kn(n,-4,-16.4,8,6.8,1.6),Se(n,i.shirt,1.1),ni(n,-3.4,-19.4,-3.2,-16.2,1.2,i.shirt),ni(n,3.4,-19.4,3.2,-16.2,1.2,i.shirt),n.fillStyle="#EAB94E",[-3.2,3.2].forEach(z=>{n.beginPath(),n.arc(z,-16.2,.7,0,7),n.fill()}),kn(n,-2,-14.4,4,2.4,.8),n.lineWidth=.8,n.strokeStyle=Nt(i.shirt,.3),n.stroke()):f==="vest"?(n.beginPath(),n.moveTo(-6.6*p,-19.4),n.lineTo(-1.2,-19.4),n.lineTo(-.6,-9.4),n.lineTo(-6.2*p,-9.4),n.closePath(),Se(n,i.shirt,1),n.beginPath(),n.moveTo(6.6*p,-19.4),n.lineTo(1.2,-19.4),n.lineTo(.6,-9.4),n.lineTo(6.2*p,-9.4),n.closePath(),Se(n,i.shirt,1)):f==="tee"?(n.beginPath(),n.ellipse(0,-19.3,3.2,1.3,0,0,7),Se(n,Nt(i.shirt,.12),.9)):f==="dress"&&(n.fillStyle=Nt(i.shirt,-.35),n.fillRect(-6.4*p,-13.2,13.2*p,1.2)));else{let z=i.id%3;z===0?(n.fillStyle="rgba(255,255,255,.45)",n.fillRect(-6,-15.4,12,2.4)):z===2&&!c&&(n.fillStyle="#fff",n.beginPath(),n.moveTo(-3,-19.4),n.lineTo(0,-16),n.lineTo(3,-19.4),n.closePath(),Se(n,"#fff",.9))}c?M!=="none"&&(kn(n,-6,-19,12,10.5,4),Se(n,E,1.3),n.fillStyle="rgba(255,255,255,.3)",n.fillRect(-4,-17.5,8,2)):!l&&M==="pack"?(ni(n,-3.6,-19.2,-3.6,-11,1.5,E),ni(n,3.6,-19.2,3.6,-11,1.5,E)):!l&&M==="messenger"&&(ni(n,-5.6,-19.2,5.2,-9.8,1.5,E),kn(n,3.2,-12.6,5.6,5,1.6),Se(n,E,1.1)),i.scarf&&(n.beginPath(),n.ellipse(0,-19.4,6.6*p,2.4,0,0,7),Se(n,i.scarf,1.2),!c&&!l&&(kn(n,1.6,-19,3.2,8,1.4),Se(n,i.scarf,1.1),n.fillStyle="rgba(255,255,255,.4)",n.fillRect(1.9,-15.6,2.6,.9))),i.tag&&(n.beginPath(),n.moveTo(-6,-19.5),n.lineTo(-1,-8.5),n.lineTo(-6.6,-9),n.closePath(),n.fillStyle="#c4463c",n.fill(),n.beginPath(),n.moveTo(6,-19.5),n.lineTo(1,-8.5),n.lineTo(6.6,-9),n.closePath(),n.fill()),i.badge&&!c&&!l&&(n.beginPath(),n.arc(-3.8,-15.4,1.5,0,7),Se(n,i.badge,.9)),l?v(h*1,!0):(v(-1),v(1)),u&&n.scale(1,1/m),n.save(),u&&(n.translate(0,-8.4+0),n.scale(.82,.82)),n.translate((i.turn||0)*1.7,0);let S=-28,D=i.hair,B=i.style,k=i.hair2||Nt(D,-.28),O=(u?8.1:8.9)*y,J=(u?9.2:8.3)*y;if((B==="long"||B==="bob")&&(kn(n,-9.8,S-6,19.6,B==="long"?20:14,7),Se(n,D,1.3)),B==="wavy"&&(kn(n,-10.2,S-6,20.4,18,7),Se(n,D,1.3),[-7,0,7].forEach(z=>{n.beginPath(),n.arc(z,S+12,3.6,0,7),Se(n,D,1.1)})),B==="afro"&&(n.beginPath(),n.ellipse(l?-h*1.2:0,S-3,13.2,12.6,0,0,7),Se(n,D,1.4)),B==="bun"&&(n.beginPath(),n.arc(l?-h*3:0,S-9.5,4.4,0,7),Se(n,D,1.3)),B==="topknot"&&(n.beginPath(),n.arc(l?-h*2:0,S-12,3.4,0,7),Se(n,D,1.3)),B==="twinbuns"&&(l?[-h*3]:[-7.6,7.6]).forEach(z=>{n.beginPath(),n.arc(z,S-10.4,3.9,0,7),Se(n,D,1.3)}),B==="pony"&&(n.save(),n.translate(l?-h*9:c?0:9,l?S+2:c?S+8:S+1),n.rotate(l||c?0:-.5),n.beginPath(),n.ellipse(0,4,3.2,6.5,0,0,7),Se(n,D,1.3),n.restore()),B==="pigtails"&&(l?[-h*10]:[-10.6,10.6]).forEach((z,Q)=>{n.save(),n.translate(z,S+3),n.rotate(l?0:Q?-.4:.4),n.beginPath(),n.ellipse(0,5,2.9,6.6,0,0,7),Se(n,D,1.3),n.restore()}),B==="braids"&&(l?[-h*8.4]:[-9.4,9.4]).forEach(z=>{for(let Q=0;Q<4;Q++)n.beginPath(),n.ellipse(z,S+4+Q*3.7,2.2,2.1,0,0,7),Se(n,Q&1?k:D,1.1)}),B==="curly"&&[[-8,S-2],[8,S-2],[-6,S-8],[6,S-8],[0,S-10]].forEach(([z,Q])=>{n.beginPath(),n.arc(z,Q,4.6,0,7),Se(n,D,1.2)}),l||[-1,1].forEach(z=>{n.beginPath(),n.arc(z*8.7,S+1,2,0,7),Se(n,i.skin,1)}),n.beginPath(),n.ellipse(l?h*.6:0,S,O,J,0,0,7),Se(n,i.skin,1.5),n.fillStyle="rgba(120,70,60,.13)",n.beginPath(),n.ellipse(3,S+3,7.5,6,0,0,7),n.fill(),!c){let z=(s*.9+i.id*1.7)%4<.13,Q=l?[h*4.4]:[-3.5,3.5],oe=i.eyeShape||"round",qe=i.eyeColor,Le=i.brow||"soft",Ze=i.browColor||i.hair;if(Q.forEach((le,$e)=>{if(z||oe==="happy")n.strokeStyle="#3a2a30",n.lineWidth=1.1,n.beginPath(),oe==="happy"&&!z?n.arc(le,S+.6,1.7,Math.PI*1.1,Math.PI*1.9):(n.moveTo(le-1.6,S),n.lineTo(le+1.6,S)),n.stroke();else{let ft=u?.74:1,We=(oe==="wide"?2.1:oe==="oval"?1.4:1.7)*ft,at=(oe==="wide"||oe==="oval"?2.7:2.3)*(u?.82:1);if(n.fillStyle=qe||"#3a2a30",n.beginPath(),n.ellipse(le,S,We,at,0,0,7),n.fill(),qe&&(n.fillStyle="#2a1d22",n.beginPath(),n.ellipse(le,S+.2,We*.5,at*.55,0,0,7),n.fill()),n.fillStyle="#fff",n.beginPath(),n.arc(le-.5,S-.9,oe==="wide"?.9:.7,0,7),n.fill(),oe==="sleepy"&&(n.fillStyle=i.skin,n.beginPath(),n.ellipse(le,S-1.1,We+.5,at*.62,0,Math.PI,2*Math.PI),n.fill(),n.strokeStyle="#3a2a30",n.lineWidth=.9,n.beginPath(),n.moveTo(le-We-.4,S-.6),n.lineTo(le+We+.4,S-.6),n.stroke()),oe==="lash"){n.strokeStyle="#3a2a30",n.lineWidth=.8;let dt=l?h:$e?1:-1;n.beginPath(),n.moveTo(le+dt*We,S-1),n.lineTo(le+dt*(We+1.4),S-2.2),n.moveTo(le+dt*We,S-.1),n.lineTo(le+dt*(We+1.6),S-.6),n.stroke()}}if(Le!=="none"){if(n.strokeStyle=Ze,n.lineCap="round",n.lineWidth=(Le==="thick"?1.6:Le==="thin"?.6:.9)+(u?.45:0),n.beginPath(),Le==="arch")n.moveTo(le-2,S-3.2),n.quadraticCurveTo(le,S-5.2,le+2,S-3.6);else if(u){let ft=l||$e?1:-1;n.moveTo(le-2.2*ft,S-3.5),n.lineTo(le+2.2*ft,S-4.3)}else n.moveTo(le-2,S-3.6),n.lineTo(le+2,S-3.9);n.stroke()}if(i.glasses){let ft=i.glasses===!0?"round":i.glasses,We=i.glassColor||"#5b4048";n.strokeStyle=We,n.lineWidth=ft==="sun"?1:.9,n.beginPath(),ft==="square"?n.roundRect(le-3.1,S-2.6,6.2,5.2,1.2):ft==="cat"?(n.ellipse(le,S,3.2,2.7,0,0,7),n.moveTo(le+(l?h:$e?1:-1)*3,S-1.6),n.lineTo(le+(l?h:$e?1:-1)*4.4,S-3.4)):ft==="half"?n.arc(le,S,3.2,Math.PI,0):n.arc(le,S,3.2,0,7),ft==="sun"&&(n.fillStyle="rgba(40,30,40,.82)",n.fill()),n.stroke()}}),i.glasses&&!l&&(n.strokeStyle=i.glassColor||"#5b4048",n.lineWidth=.9,n.beginPath(),n.moveTo(-.3,S-.5),n.lineTo(.3,S-.5),n.stroke()),(u?i.blush===!0:i.blush!==!1)&&(n.fillStyle=i.blushColor||(u?"rgba(255,110,125,.14)":"rgba(255,110,125,.38)"),(l?[h*6.4]:[-6,6]).forEach(le=>{n.beginPath(),n.ellipse(le,S+3.4,2.1,1.3,0,0,7),n.fill()})),i.freckles&&(n.fillStyle=Nt(i.skin,.32),(l?[[h*5.6,S+2.2],[h*6.8,S+3.2],[h*5.2,S+3.8]]:[[-5.6,S+2.4],[-4.2,S+3.4],[-6.4,S+3.8],[5.6,S+2.4],[4.2,S+3.4],[6.4,S+3.8]]).forEach(([le,$e])=>{n.beginPath(),n.arc(le,$e,.5,0,7),n.fill()})),i.mole&&(n.fillStyle="#4a2f2a",n.beginPath(),n.arc(l?h*6:4.4,S+5.2,.65,0,7),n.fill()),i.nose||u){n.strokeStyle=Nt(i.skin,.3),n.lineWidth=.8,n.beginPath();let le=l?h*6.4:0;n.arc(le,S+2.6,.9,.1*Math.PI,.9*Math.PI),n.stroke()}let Y=l?h*3.6:0,ee=S+4.7,we=i.mouthStyle||"smile",Ge=i.lip||"#8a4650";i.mouth?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse(Y,S+4.8,1.7,.7+i.mouth*1.5,0,0,7),n.fill()):we==="grin"?(n.beginPath(),n.moveTo(Y-2.4,ee-.9),n.quadraticCurveTo(Y,ee+2.8,Y+2.4,ee-.9),n.closePath(),n.fillStyle="#fff",n.fill(),n.strokeStyle=Ge,n.lineWidth=.9,n.stroke()):we==="smirk"?(n.strokeStyle=Ge,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo(Y-1.8,ee),n.quadraticCurveTo(Y+.4,ee+1,Y+2.2,ee-.8),n.stroke()):we==="flat"?(n.strokeStyle=Ge,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo(Y-1.5,ee),n.lineTo(Y+1.5,ee),n.stroke()):we==="o"?(n.fillStyle="#7A3B3B",n.beginPath(),n.ellipse(Y,ee+.2,1,1.2,0,0,7),n.fill()):we==="cat"?(n.strokeStyle=Ge,n.lineWidth=.9,n.lineCap="round",n.beginPath(),n.arc(Y-1,ee-.4,1.1,.1*Math.PI,.9*Math.PI),n.arc(Y+1,ee-.4,1.1,.1*Math.PI,.9*Math.PI),n.stroke()):(n.strokeStyle=Ge,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.arc(Y,S+(u?5.4:4.6),u?1.35:1.7,.15*Math.PI,.85*Math.PI),n.stroke())}let F=l?-h*1.6:0,se=()=>{let z=l?h:1,Q=l?-1.6:0;l&&(n.save(),n.scale(z,1)),n.beginPath(),l?(n.moveTo(-9.2+Q,S+5.4),n.lineTo(-9.3+Q,S+.5),n.bezierCurveTo(-11+Q,S-14,11+Q,S-14,9.3+Q,S+.5),n.quadraticCurveTo(7+Q,S-5.4,4+Q,S-4.6),n.lineTo(-2.6+Q,S-1.6),n.lineTo(-5.4+Q,S+3.6)):(n.moveTo(-9.3,S+.5),n.bezierCurveTo(-11,S-14,11,S-14,9.3,S+.5),n.quadraticCurveTo(6,S-3.4,2,S-4.4),n.quadraticCurveTo(-3,S-6,-9.3,S+.5)),n.closePath(),l&&n.restore()};if(c)n.beginPath(),n.ellipse(0,S-.4,9.4,8.9,0,0,7),Se(n,D,1.4),n.fillStyle="rgba(255,255,255,.2)",n.beginPath(),n.ellipse(-2.5,S-4,3.5,2,0,0,7),n.fill();else if(B==="buzz")n.beginPath(),n.moveTo(-8.8+F,S-1.2),n.bezierCurveTo(-10+F,S-11,10+F,S-11,8.8+F,S-1.2),n.quadraticCurveTo(0,S-4.6,-8.8+F,S-1.2),n.closePath(),Se(n,D,1.3);else if(B==="undercut")se(),Se(n,Nt(D,.12),1.3),n.beginPath(),n.moveTo(-7+F,S-4),n.bezierCurveTo(-8+F,S-17,9+F,S-16,7.4+F,S-4),n.quadraticCurveTo(0,S-6,-7+F,S-4),n.closePath(),Se(n,D,1.3);else if(B==="spiky"||B==="messy"){se(),Se(n,D,1.4);let z=B==="spiky"?6:4;for(let Q=0;Q<z;Q++){let oe=-Math.PI*(.12+.76*Q/(z-1)),qe=Math.cos(oe+Math.PI)*7.6+F,Le=S-3+Math.sin(oe)*5.4,Ze=B==="spiky"?6.4:4.4+Q%2*1.6;n.beginPath(),n.moveTo(qe-2.1,Le+1.4),n.lineTo(qe+(Q-z/2)*.8,Le-Ze),n.lineTo(qe+2.1,Le+1.4),n.closePath(),Se(n,D,1.2)}se(),Se(n,D,1.2)}else B==="sidebang"||B==="pixie"?(se(),Se(n,D,1.4),n.beginPath(),n.moveTo(-9+F,S-6),n.quadraticCurveTo(2+F,S-12,9.4+F,S-1.4),n.quadraticCurveTo(B==="pixie"?4+F:-1+F,S-3.6,-9+F,S-6),n.closePath(),Se(n,D,1.2),B==="pixie"&&!l&&[-1,1].forEach(z=>{n.beginPath(),n.moveTo(z*9.2,S-1),n.lineTo(z*10.4,S+5),n.lineTo(z*7.6,S+1),n.closePath(),Se(n,D,1)})):B==="curtains"?(se(),Se(n,D,1.4),l||(n.strokeStyle=Nt(D,.35),n.lineWidth=1,n.beginPath(),n.moveTo(0,S-9.4),n.quadraticCurveTo(-1.2,S-6,-.2,S-3.6),n.stroke())):B==="afro"?(n.beginPath(),n.moveTo(-9+F,S-1),n.bezierCurveTo(-10+F,S-13,10+F,S-13,9+F,S-1),n.quadraticCurveTo(0+F,S-5.4,-9+F,S-1),n.closePath(),Se(n,D,1.3)):(se(),Se(n,D,1.4));!c&&i.hair2&&(n.strokeStyle=i.hair2,n.lineWidth=1.3,n.lineCap="round",n.beginPath(),n.moveTo(-5+F,S-6.2),n.quadraticCurveTo(-3+F,S-8.6,0+F,S-9),n.moveTo(1+F,S-9),n.quadraticCurveTo(4+F,S-8,6+F,S-5.4),n.stroke()),c||(n.fillStyle="rgba(255,255,255,.22)",n.beginPath(),n.ellipse(-3+F,S-6.4,3.4,1.5,-.3,0,7),n.fill()),(B==="long"||B==="wavy")&&!c&&!l&&[-1,1].forEach(z=>{n.beginPath(),n.ellipse(z*9,S+6,2.3,7,0,0,7),Se(n,D,1.1)}),l&&!c&&(n.beginPath(),n.ellipse(-h*1.2+h*.6,S+2.2,1.5,2.2,0,0,7),Se(n,i.skin,1),n.fillStyle="rgba(160,90,80,.25)",n.beginPath(),n.ellipse(-h*1.2+h*.6,S+2.4,.6,1.1,0,0,7),n.fill(),i.glasses&&(n.strokeStyle=i.glassColor||"#5b4048",n.lineWidth=.9,n.beginPath(),n.moveTo(h*1.1,S-.6),n.lineTo(-h*.6,S+.9),n.stroke()));let X=i.hatColor||"#e07a66",te=i.hat;if(i.earrings&&!c&&(l?[-h*.6]:[-9,9]).forEach(z=>{n.beginPath(),n.arc(z,S+4.6,1.2,0,7),Se(n,i.earrings,.8)}),te==="cap")n.beginPath(),n.moveTo(-9.4+F,S-2.8),n.bezierCurveTo(-9.8+F,S-15,9.8+F,S-15,9.4+F,S-2.8),n.closePath(),Se(n,X,1.3),c||(n.beginPath(),l?n.ellipse(h*9.2+F,S-3,5.2,1.7,0,0,7):n.ellipse(0,S-2.6,7.4,2,0,0,7),Se(n,Nt(X,.18),1.1)),n.beginPath(),n.arc(0,S-12.2,1,0,7),Se(n,Nt(X,.2),.8);else if(te==="beanie")n.beginPath(),n.moveTo(-9.8+F,S-2.4),n.bezierCurveTo(-10.4+F,S-17,10.4+F,S-17,9.8+F,S-2.4),n.closePath(),Se(n,X,1.3),kn(n,-10+F,S-4.6,20,3.8,1.6),Se(n,Nt(X,-.25),1.1),n.beginPath(),n.arc(F,S-14,2.3,0,7),Se(n,Nt(X,-.35),1);else if(te==="bucket")n.beginPath(),n.moveTo(-8+F,S-4),n.lineTo(-7+F,S-11.4),n.lineTo(7+F,S-11.4),n.lineTo(8+F,S-4),n.closePath(),Se(n,X,1.3),n.beginPath(),n.ellipse(F,S-4.4,12.2,2.8,0,0,7),Se(n,Nt(X,.1),1.2);else if(te==="beret")n.beginPath(),n.ellipse(2+F,S-8.6,9,3.6,-.12,0,7),Se(n,X,1.3),n.beginPath(),n.arc(3+F,S-12.2,1,0,7),Se(n,Nt(X,.25),.8);else if(te==="crown")n.beginPath(),n.moveTo(-6+F,S-8),n.lineTo(-6.6+F,S-14),n.lineTo(-3+F,S-11),n.lineTo(0+F,S-15.4),n.lineTo(3+F,S-11),n.lineTo(6.6+F,S-14),n.lineTo(6+F,S-8),n.closePath(),Se(n,i.hatColor||"#EAB94E",1.2),[-3,0,3].forEach(z=>{n.beginPath(),n.arc(z+F,S-9.4,.7,0,7),n.fillStyle="#e07a66",n.fill()});else if(te==="catears")[-1,1].forEach(z=>{n.beginPath(),n.moveTo(z*2.6+F,S-8.4),n.lineTo(z*6.2+F,S-15.6),n.lineTo(z*9+F,S-6.2),n.closePath(),Se(n,D,1.2),n.beginPath(),n.moveTo(z*4.2+F,S-8.8),n.lineTo(z*6.2+F,S-12.8),n.lineTo(z*7.6+F,S-7.6),n.closePath(),n.fillStyle="#f0a6b5",n.fill()});else if(te==="headphones")n.strokeStyle=ja,n.lineWidth=3.6,n.beginPath(),n.arc(F,S-.5,10.4,Math.PI*1.06,Math.PI*1.94),n.stroke(),n.strokeStyle=X,n.lineWidth=2,n.stroke(),c||(l?[h*9.2]:[-9.8,9.8]).forEach(z=>{kn(n,z-1.7,S-3,3.4,6.2,1.4),Se(n,X,1.1)});else if(te==="headband"&&!c)n.strokeStyle=ja,n.lineWidth=3.4,n.beginPath(),n.moveTo(-9+F,S-1.2),n.quadraticCurveTo(F,S-12,9+F,S-1.2),n.stroke(),n.strokeStyle=X,n.lineWidth=2,n.stroke();else if(te==="headband")n.strokeStyle=X,n.lineWidth=2,n.beginPath(),n.moveTo(-9,S-1.2),n.quadraticCurveTo(0,S-12,9,S-1.2),n.stroke();else if(te==="bow"){let z=l?-h*1.5:6.6,Q=S-9.6;[-1,1].forEach(oe=>{n.beginPath(),n.moveTo(z,Q),n.lineTo(z+oe*5.4,Q-2.8),n.lineTo(z+oe*5.4,Q+2.8),n.closePath(),Se(n,X,1.1)}),n.beginPath(),n.arc(z,Q,1.5,0,7),Se(n,Nt(X,.2),1)}else if(te==="flower"){let z=l?-h*2:-6,Q=S-8.4;for(let oe=0;oe<5;oe++){let qe=oe*Math.PI*2/5;n.beginPath(),n.arc(z+Math.cos(qe)*2.3,Q+Math.sin(qe)*2.3,1.8,0,7),Se(n,X,.9)}n.beginPath(),n.arc(z,Q,1.3,0,7),Se(n,"#EAB94E",.8)}if(n.restore(),i.tag){let z=S-19+Math.sin(s*4)*1.5;n.beginPath(),n.moveTo(-5,z-5),n.lineTo(5,z-5),n.lineTo(0,z+1),n.closePath(),Se(n,"#f28f7e",1.3)}n.restore()}var Dv="United States/U.S./America/American|39.8|-98.6;Canada/Canadian|56.1|-106.3;Mexico/Mexican|23.6|-102.5;Cuba/Cuban|21.5|-77.8;Haiti|18.9|-72.3;Jamaica|18.1|-77.3;Guatemala|15.8|-90.2;Honduras|15.2|-86.2;Panama|8.5|-80.8;Costa Rica|9.7|-83.8;Colombia/Colombian|4.6|-74.1;Venezuela/Venezuelan|6.4|-66.6;Ecuador|-1.8|-78.2;Peru/Peruvian|-9.2|-75.0;Bolivia|-16.3|-63.6;Brazil/Brazilian|-14.2|-51.9;Paraguay|-23.4|-58.4;Uruguay|-32.5|-55.8;Argentina/Argentine|-38.4|-63.6;Chile/Chilean|-35.7|-71.5;United Kingdom/Britain/British/U.K./England|52.4|-1.9;Scotland|56.5|-4.2;Wales|52.1|-3.8;Ireland/Irish|53.4|-8.2;France/French|46.2|2.2;Spain/Spanish|40.5|-3.7;Portugal|39.4|-8.2;Germany/German|51.2|10.5;Italy/Italian|41.9|12.6;Netherlands/Dutch|52.1|5.3;Belgium|50.5|4.5;Switzerland|46.8|8.2;Austria|47.5|14.5;Poland/Polish|51.9|19.1;Ukraine/Ukrainian|48.4|31.2;Russia/Russian|61.5|105.3;Sweden/Swedish|60.1|18.6;Norway/Norwegian|60.5|8.5;Finland|61.9|25.7;Denmark|56.3|9.5;Iceland|64.9|-19.0;Greece/Greek|39.1|21.8;Turkey/Turkish|38.9|35.2;Czech|49.8|15.5;Hungary|47.2|19.5;Romania|45.9|24.9;Serbia|44.0|21.0;Croatia|45.1|15.2;Egypt/Egyptian|26.8|30.8;Libya|26.3|17.2;Tunisia|33.9|9.5;Algeria|28.0|1.7;Morocco/Moroccan|31.8|-7.1;Nigeria/Nigerian|9.1|8.7;Ghana|7.9|-1.0;Senegal|14.5|-14.5;Ethiopia/Ethiopian|9.1|40.5;Kenya/Kenyan|-0.0|37.9;Uganda|1.4|32.3;Tanzania|-6.4|34.9;Sudan|12.9|30.2;Somalia|5.2|46.2;Congo|-4.0|21.8;Angola|-11.2|17.9;Zimbabwe|-19.0|29.2;South Africa|-30.6|22.9;Madagascar|-18.8|46.9;Israel|31.0|34.9;Palestinian|31.9|35.2;Lebanon|33.9|35.9;Syria|34.8|38.9;Jordan|30.6|36.2;Iraq|33.2|43.7;Iran/Iranian|32.4|53.7;Saudi Arabia|23.9|45.1;Yemen|15.6|48.5;Qatar|25.4|51.2;United Arab Emirates/UAE|23.4|53.8;Afghanistan|33.9|67.7;Pakistan/Pakistani|30.4|69.3;India/Indian|20.6|78.9;Nepal|28.4|84.1;Bangladesh|23.7|90.4;Sri Lanka|7.9|80.8;China/Chinese|35.9|104.2;Taiwan|23.7|121.0;Hong Kong|22.3|114.2;Japan/Japanese|36.2|138.3;South Korea/Korean|35.9|127.8;North Korea|40.3|127.5;Mongolia|46.9|103.8;Kazakhstan|48.0|66.9;Thailand|15.9|100.9;Vietnam|14.1|108.3;Cambodia|12.6|104.9;Myanmar|21.9|95.9;Malaysia|4.2|102.0;Singapore|1.35|103.8;Indonesia/Indonesian|-0.8|113.9;Philippines/Philippine|12.9|121.8;Australia/Australian|-25.3|133.8;New Zealand|-40.9|174.9;Papua New Guinea|-6.3|143.9;Fiji|-17.7|178.1",Fv="Atlanta|33.75|-84.39;New York|40.71|-74.0;Los Angeles|34.05|-118.24;Chicago|41.88|-87.63;Houston|29.76|-95.37;Phoenix|33.45|-112.07;Philadelphia|39.95|-75.17;San Antonio|29.42|-98.49;San Diego|32.72|-117.16;Dallas|32.78|-96.8;San Francisco|37.77|-122.42;Seattle|47.61|-122.33;Denver|39.74|-104.99;Boston|42.36|-71.06;Miami|25.76|-80.19;Detroit|42.33|-83.05;Minneapolis|44.98|-93.27;Portland|45.52|-122.68;Las Vegas|36.17|-115.14;Nashville|36.16|-86.78;Washington|38.9|-77.04;New Orleans|29.95|-90.07;Orlando|28.54|-81.38;Charlotte|35.23|-80.84;Austin|30.27|-97.74;Honolulu|21.31|-157.86;Anchorage|61.22|-149.9;Toronto|43.65|-79.38;Vancouver|49.28|-123.12;Montreal|45.5|-73.57;Mexico City|19.43|-99.13;Havana|23.11|-82.37;Bogota|4.71|-74.07;Lima|-12.05|-77.04;Santiago|-33.45|-70.67;Buenos Aires|-34.6|-58.38;Sao Paulo|-23.55|-46.63;Rio de Janeiro|-22.91|-43.17;London|51.51|-0.13;Paris|48.86|2.35;Berlin|52.52|13.4;Madrid|40.42|-3.7;Rome|41.9|12.5;Brussels|50.85|4.35;Amsterdam|52.37|4.9;Vienna|48.21|16.37;Geneva|46.2|6.14;Warsaw|52.23|21.01;Kyiv|50.45|30.52;Moscow|55.76|37.62;Stockholm|59.33|18.07;Oslo|59.91|10.75;Helsinki|60.17|24.94;Athens|37.98|23.73;Istanbul|41.01|28.98;Ankara|39.93|32.86;Cairo|30.04|31.24;Nairobi|-1.29|36.82;Lagos|6.52|3.38;Accra|5.6|-0.19;Johannesburg|-26.2|28.05;Cape Town|-33.92|18.42;Addis Ababa|9.03|38.74;Jerusalem|31.77|35.21;Tehran|35.69|51.39;Baghdad|33.31|44.36;Riyadh|24.71|46.68;Dubai|25.2|55.27;Doha|25.29|51.53;Kabul|34.53|69.17;Islamabad|33.68|73.05;Delhi|28.61|77.21;Mumbai|19.08|72.88;Kolkata|22.57|88.36;Dhaka|23.81|90.41;Beijing|39.9|116.4;Shanghai|31.23|121.47;Hong Kong|22.32|114.17;Tokyo|35.68|139.69;Osaka|34.69|135.5;Seoul|37.57|126.98;Bangkok|13.76|100.5;Hanoi|21.03|105.85;Jakarta|-6.21|106.85;Manila|14.6|120.98;Singapore|1.35|103.82;Sydney|-33.87|151.21;Melbourne|-37.81|144.96;Auckland|-36.85|174.76;Brussels|50.85|4.35;Lisbon|38.72|-9.14;Dublin|53.35|-6.26;Edinburgh|55.95|-3.19;Barcelona|41.39|2.17;Milan|45.46|9.19;Munich|48.14|11.58;Zurich|47.38|8.54",Lv="Alabama|32.8|-86.8;Alaska|64.2|-149.5;Arizona|34.2|-111.7;Arkansas|34.9|-92.4;California|36.8|-119.4;Colorado|39.0|-105.5;Connecticut|41.6|-72.7;Delaware|39.0|-75.5;Florida|27.8|-81.7;Georgia|32.7|-83.4;Hawaii|20.8|-156.3;Idaho|44.4|-114.6;Illinois|40.0|-89.2;Indiana|39.9|-86.3;Iowa|42.0|-93.5;Kansas|38.5|-98.4;Kentucky|37.5|-85.3;Louisiana|31.1|-92.0;Maine|45.3|-69.0;Maryland|39.0|-76.8;Massachusetts|42.3|-71.8;Michigan|44.3|-85.4;Minnesota|46.3|-94.3;Mississippi|32.7|-89.7;Missouri|38.4|-92.5;Montana|47.0|-109.6;Nebraska|41.5|-99.8;Nevada|39.3|-116.6;New Hampshire|43.7|-71.6;New Jersey|40.2|-74.7;New Mexico|34.4|-106.1;North Carolina|35.6|-79.4;North Dakota|47.5|-100.5;Ohio|40.3|-82.8;Oklahoma|35.6|-97.5;Oregon|44.0|-120.5;Pennsylvania|40.9|-77.8;Rhode Island|41.7|-71.5;South Carolina|33.9|-80.9;South Dakota|44.4|-100.2;Tennessee|35.9|-86.4;Texas|31.5|-99.3;Utah|39.3|-111.7;Vermont|44.1|-72.7;Virginia|37.5|-78.8;West Virginia|38.6|-80.6;Wisconsin|44.6|-89.9;Wyoming|43.0|-107.5",Nv="Middle East|29.0|41.0;Europe|50.0|15.0;European Union/EU|50.8|4.4;Africa|2.0|20.0;Asia|34.0|90.0;Latin America|-10.0|-60.0;South America|-15.0|-60.0;North America|45.0|-100.0;Caribbean|18.0|-72.0;Pacific|0.0|-160.0;Arctic|80.0|0.0;Antarctica|-80.0|0.0;Southeast Asia|10.0|105.0;Central America|14.0|-87.0;Balkans|43.0|21.0;Sahel|14.0|0.0;Gulf|27.0|51.0;Oceania|-20.0|150.0;Himalaya|28.0|85.0;Amazon|-4.0|-62.0;Sahara|23.0|12.0",Ih=(n,e)=>n.split(";").flatMap(t=>{let[i,s,r]=t.split("|");return i.split("/").map(a=>({name:a.trim(),lat:+s,lon:+r,kind:e}))}),Bv=[...Ih(Fv,"city"),...Ih(Lv,"state"),...Ih(Dv,"country"),...Ih(Nv,"region")],Uv=n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),ZS=Bv.filter(n=>n.name.length>2&&n.name!=="Georgia"&&n.name!=="Washington").sort((n,e)=>e.name.length-n.name.length).map(n=>({p:n,rx:new RegExp(`\\b${Uv(n.name)}\\b`,n.name.length<=4?"":"i")}));var Ov="#6d5a5f",zv="#4A3B3F";function nt(n,e,t,i=1.5,s=!0){n.save(),s&&(n.shadowColor="rgba(52,34,46,.30)",n.shadowBlur=3.5,n.shadowOffsetX=1.2,n.shadowOffsetY=2.6),e(n),n.fillStyle=t,n.fill(),n.shadowColor="transparent",i&&(n.lineWidth=i,n.strokeStyle=Ov,n.lineJoin="round",n.stroke()),n.restore()}var ii=(n,e,t,i,s,r)=>{n.beginPath(),n.roundRect(e,t,i,s,r)},Z=(n,e,t,i,s,r,a=3,o=!0)=>nt(n,l=>ii(l,e,t,i,s,a),r,1.4,o),Be=(n,e,t,i,s,r=!0)=>nt(n,a=>{a.beginPath(),a.arc(e,t,i,0,7)},s,1.3,r),Vt=(n,e,t,i=!0)=>nt(n,s=>{s.beginPath(),e.forEach(([r,a],o)=>o?s.lineTo(r,a):s.moveTo(r,a)),s.closePath()},t,1.4,i),Or=(n,e,t,i,s="#fff")=>nt(n,r=>{r.beginPath(),r.arc(e-9*i,t+2*i,7*i,0,7),r.arc(e,t-4*i,10*i,0,7),r.arc(e+11*i,t+1*i,8*i,0,7),r.rect(e-9*i,t+2*i,20*i,7*i)},s,1.2),Us=(n,e,t,i,s="#5E9C72",r=0)=>{Z(n,e-1.6*i,t-10*i,3.2*i,10*i,"#9A653D",1,!1),Be(n,e+r,t-17*i,9*i,s),Be(n,e-6*i+r,t-12*i,6*i,"#88B89A"),Be(n,e+6*i+r,t-12.5*i,6*i,"#3F7655")};var Ue=(n,e,t,i,s,r=zv,a="left",o=800)=>{n.font=`${o} ${s}px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif`,n.textAlign=a,n.fillStyle=r,n.fillText(e,t,i)};function Ka(n,e,t){let i=[],s="";for(let r of e.split(/\s+/)){let a=s?s+" "+r:r;n.measureText(a).width>t&&s?(i.push(s),s=r):s=a}return s&&i.push(s),i}function ki(n,e,t,i,s){n.fillStyle=s,n.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,o=r&1?i*.45:i;n.lineTo(e+Math.cos(a)*o,t+Math.sin(a)*o)}n.closePath(),n.fill()}var Ce=640,Bt=360,Qa=n=>n.shots.reduce((e,t)=>e+t.dur,0);function kh(n,e){let t=e;for(let i=0;i<n.shots.length;i++){if(t<n.shots[i].dur||i===n.shots.length-1)return{shot:n.shots[i],u:Math.min(t,n.shots[i].dur),i};t-=n.shots[i].dur}return{shot:n.shots[0],u:0,i:0}}var Xi=(n,e,t)=>Math.max(e,Math.min(t,n)),zs=(n,e,t)=>n+(e-n)*t,Zp=n=>n*n*(3-2*n),Os="#4A3B3F",Yt="#FFF9F0",Hv="#6d5a5f",Dn=(n,e,t)=>{let i=n.createLinearGradient(0,0,0,Bt);i.addColorStop(0,e),i.addColorStop(1,t),n.fillStyle=i,n.fillRect(-8,-8,Ce+16,Bt+16)},dn=(n,e,t,i,s)=>nt(n,r=>{r.beginPath(),r.moveTo(-8,Bt+8),r.lineTo(-8,e);for(let a=-8;a<=Ce+8;a+=8)r.lineTo(a,e+Math.sin(a*.012+s)*i+Math.sin(a*.005+s*2)*i*.6);r.lineTo(Ce+8,Bt+8),r.closePath()},t,1.4),ht=(n,e)=>({id:n,skin:"#f0c29b",hair:"#3a2a30",style:"crop",shirt:"#4f91c7",...e}),qp={teacher:ht(1,{age:"adult",skin:"#d9a074",hair:"#694a38",style:"crop",top:"blazer",shirt:"#8fc9e8",glasses:"round"}),pharaoh:ht(2,{age:"adult",skin:"#c58a5f",hair:"#2b2b33",style:"bob",top:"dress",shirt:"#F8D977",hat:"crown",hatColor:"#EAB94E",scarf:"#4F91C7"}),queen:ht(3,{age:"adult",skin:"#c58a5f",hair:"#2b2b33",style:"long",top:"dress",shirt:"#4F91C7",hat:"crown",hatColor:"#EAB94E",earrings:"#EAB94E"}),architect:ht(4,{age:"adult",skin:"#a86f4f",hair:"#2b2b33",style:"crop",top:"vest",shirt:"#EDE2CF",shirt2:"#fff6ea",hat:"headband",hatColor:"#F28F7E"}),worker:ht(5,{age:"adult",skin:"#a86f4f",hair:"#2b2b33",style:"buzz",top:"tank",shirt:"#E8C39A",bottom:"shorts",pants:"#EDE2CF",hat:"headband",hatColor:"#fff6ea"}),worker2:ht(6,{age:"adult",skin:"#8d5a3e",hair:"#2b2b33",style:"crop",top:"tank",shirt:"#E8C39A",bottom:"shorts",pants:"#EDE2CF"}),merchant:ht(7,{age:"adult",skin:"#c58a5f",hair:"#3a2a30",style:"crop",top:"dress",shirt:"#F28F7E",hat:"bucket",hatColor:"#F8D977",scarf:"#4F91C7"}),merchant2:ht(8,{age:"adult",skin:"#e3ad7f",hair:"#2b2b33",style:"bun",top:"dress",shirt:"#88B89A",hat:"bow",hatColor:"#E07A66",earrings:"#EAB94E"}),trader:ht(9,{age:"adult",skin:"#8d5a3e",hair:"#2b2b33",style:"afro",top:"vest",shirt:"#4F91C7",shirt2:"#fff6ea",hat:"beret",hatColor:"#E9515D"}),scribe:ht(10,{age:"adult",skin:"#f0c29b",hair:"#9a653d",style:"buzz",top:"dress",shirt:"#9A653D",scarf:"#EDE2CF"}),printer:ht(11,{age:"adult",skin:"#f5cfa8",hair:"#b5563e",style:"messy",top:"overalls",shirt:"#7C94B0",shirt2:"#fff6ea",hat:"cap",hatColor:"#EDE2CF"}),colonist:ht(12,{age:"adult",skin:"#f0c29b",hair:"#694a38",style:"pony",top:"blazer",shirt:"#3b4f77",hat:"bucket",hatColor:"#2b3a55"}),colonist2:ht(13,{age:"adult",skin:"#d9a074",hair:"#2b2b33",style:"crop",top:"vest",shirt:"#9A653D",shirt2:"#fff6ea",hat:"cap",hatColor:"#4a3b3f"}),colonist3:ht(14,{age:"adult",skin:"#fbdcc4",hair:"#e0b04e",style:"bun",top:"dress",shirt:"#B8A8DA",hat:"bow",hatColor:"#EDE2CF"}),citizen:ht(15,{age:"adult",skin:"#f0c29b",hair:"#5a3a35",style:"wavy",top:"sweater",shirt:"#E07A66"}),citizen2:ht(16,{age:"adult",skin:"#7a4a36",hair:"#2b2b33",style:"crop",top:"hoodie",shirt:"#4F91C7"}),citizen3:ht(17,{age:"adult",skin:"#e3ad7f",hair:"#8c8c96",style:"bob",top:"tee",shirt:"#88B89A",glasses:"round"}),senator:ht(18,{age:"adult",skin:"#d9a074",hair:"#8c8c96",style:"sidebang",top:"blazer",shirt:"#2b3a55",shirt2:"#fff6ea"}),senator2:ht(19,{age:"adult",skin:"#a86f4f",hair:"#2b2b33",style:"crop",top:"blazer",shirt:"#5b6b8c",glasses:"square"}),president:ht(20,{age:"adult",skin:"#f0c29b",hair:"#d9d4cc",style:"sidebang",top:"blazer",shirt:"#2b3a55",shirt2:"#fff6ea",badge:"#E9515D"}),judge:ht(21,{age:"adult",skin:"#8d5a3e",hair:"#d9d4cc",style:"curly",top:"dress",shirt:"#2b2b33",glasses:"half"}),scientist:ht(22,{age:"adult",skin:"#e3ad7f",hair:"#2b2b33",style:"bun",top:"blazer",shirt:"#fff6ea",shirt2:"#8fc9e8",glasses:"round"}),newton:ht(23,{age:"adult",skin:"#fbdcc4",hair:"#d9d4cc",style:"wavy",top:"blazer",shirt:"#7a3b3b",shirt2:"#fff6ea"}),conductor:ht(24,{age:"adult",skin:"#f0c29b",hair:"#d9d4cc",style:"afro",top:"blazer",shirt:"#313a3f",shirt2:"#fff6ea"}),violinist:ht(25,{age:"adult",skin:"#e3ad7f",hair:"#5a3a35",style:"long",top:"dress",shirt:"#8173AE"}),trumpeter:ht(26,{age:"adult",skin:"#8d5a3e",hair:"#2b2b33",style:"buzz",top:"vest",shirt:"#F8D977",shirt2:"#fff6ea"}),drummer:ht(27,{age:"g68",skin:"#c58a5f",hair:"#2b2b33",style:"spiky",top:"tee",shirt:"#E9515D",hat:"headphones",hatColor:"#313a3f"}),flautist:ht(28,{age:"g68",skin:"#fbdcc4",hair:"#e0b04e",style:"pigtails",top:"sweater",shirt:"#A9DCC0"}),painter:ht(29,{age:"adult",skin:"#f5cfa8",hair:"#3a2a30",style:"curtains",top:"overalls",shirt:"#8173AE",shirt2:"#fff6ea",hat:"beret",hatColor:"#E9515D"}),kid:ht(30,{age:"g68",skin:"#e3ad7f",hair:"#3a2a30",style:"crop",top:"hoodie",shirt:"#F28F7E"}),kid2:ht(31,{age:"g68",skin:"#8d5a3e",hair:"#2b2b33",style:"twinbuns",top:"tee",shirt:"#4F91C7",pattern:"stars",shirt2:"#F8D977"}),kid3:ht(32,{age:"g35",skin:"#fbdcc4",hair:"#b5563e",style:"pony",top:"overalls",shirt:"#88B89A",shirt2:"#fff6ea"}),kid4:ht(33,{age:"g35",skin:"#c58a5f",hair:"#2b2b33",style:"bob",top:"dress",shirt:"#B8A8DA"}),chef:ht(34,{age:"adult",skin:"#f0c29b",hair:"#3a2a30",style:"crop",top:"blazer",shirt:"#fff6ea",hat:"cap",hatColor:"#fff6ea"}),narrator:ht(35,{age:"adult",skin:"#d9a074",hair:"#2b2b33",style:"pixie",top:"sweater",shirt:"#E07A66",glasses:"cat"})},Xp={idle:{},talk:{arms:{R:[11,-17],L:[-8.2,-9.5]}},point:{arms:{R:[13.5,-22],L:[-8.2,-9.5]}},wave:{arms:{R:[12,-31],L:[-8.2,-9.5]}},cheer:{arms:{R:[9,-32],L:[-9,-32]}},carry:{arms:{R:[5,-13],L:[-5,-13]}},write:{arms:{R:[7,-20],L:[-8.2,-9.5]}},think:{arms:{R:[3,-24],L:[-8.2,-9.5]}},present:{arms:{R:[12,-16],L:[-12,-16]}},conduct:{arms:{R:[11,-26],L:[-8.2,-9.5]}},play:{arms:{R:[9,-16],L:[-4,-15]}},sit:{sitting:!0,arms:{R:[5,-10],L:[-5,-10]}}};function Jp(n,e){let t=n.keys,i=0;for(;i<t.length-1&&e>=t[i+1].t;)i++;let s=t[i],r=t[Math.min(i+1,t.length-1)],a=Math.max(1e-6,r.t-s.t),o=r===s?0:Zp(Xi((e-s.t)/a,0,1)),l=zs(s.x,r.x,o),h=zs(s.y,r.y,o),c=r!==s&&e>=s.t&&e<r.t&&Math.abs(r.x-s.x)+Math.abs(r.y-s.y)>4;return{x:l,y:h,moving:c,dx:r.x-s.x,pose:s.pose||"idle"}}function Gv(n,e,t){let i=Jp(e,t),s=qp[e.role]??qp.kid,r=Xi((i.y-200)/160,0,1),a=(e.s??1)*(2.45+r*1),o=(e.say??[]).some(([d,u])=>t>=d&&t<u),l=Xp[i.pose]??Xp.idle,h=e.back?"up":i.moving?i.dx>=0?"right":"left":"down";n.save(),n.translate(i.x,i.y),n.scale(a,a),n.shadowColor="rgba(52,34,46,.3)",n.shadowBlur=2,n.shadowOffsetY=1,Ii(n,0,0,{...s,dir:h,moving:i.moving,walk:t*9,...l,mouth:o?.35+.65*Math.abs(Math.sin(t*11)):0,turn:0},t),n.restore();let c=(e.say??[]).find(([d,u])=>t>=d&&t<u);c&&Vv(n,i.x,i.y-54*a*.55-10,c[2])}function Vv(n,e,t,i){n.save(),n.font="700 12px system-ui,sans-serif";let s=Ka(n,i,150),r=Math.min(170,Math.max(...s.map(h=>n.measureText(h).width))+16),a=s.length*15+10,o=Xi(e-r/2,4,Ce-r-4),l=t-a;nt(n,h=>{ii(h,o,l,r,a,9)},Yt,1.2),n.beginPath(),n.moveTo(e-5,l+a-1),n.lineTo(e,l+a+8),n.lineTo(e+5,l+a-1),n.fillStyle=Yt,n.fill(),n.fillStyle=Os,n.textAlign="left",s.forEach((h,c)=>n.fillText(h,o+8,l+17+c*15)),n.restore()}var Wv=(n,e,t,i,s=9)=>{n.fillStyle=i;for(let r=0;r<s;r++)n.fillRect(r*(Ce/s),e,Ce/s/2,t-e)},mi=(n,e,t,i=230)=>{n.fillStyle=e,n.fillRect(0,0,Ce,i),Wv(n,24,i,"rgba(255,255,255,.18)"),n.fillStyle=t,n.fillRect(0,i,Ce,Bt-i),n.fillStyle="rgba(0,0,0,.08)",n.fillRect(0,i,Ce,6),n.fillStyle="rgba(255,255,255,.12)";for(let s=0;s<8;s++)n.fillRect(0,i+10+s*18,Ce,2)},$p=(n,e,t,i,s,r=!0)=>{Z(n,e,t,i,s,r?"#CFEFFB":"#1b2a50",4),n.strokeStyle=Yt,n.lineWidth=3,n.beginPath(),n.moveTo(e+i/2,t),n.lineTo(e+i/2,t+s),n.moveTo(e,t+s/2),n.lineTo(e+i,t+s/2),n.stroke()},Yp=(n,e,t,i,s="#FFF9F0")=>{for(let r=0;r<e;r++){let a=40+r*((Ce-80)/Math.max(1,e-1));Z(n,a-14,t,28,i,s,3),Z(n,a-18,t-8,36,10,"#E4D6BC",2),Z(n,a-18,t+i-2,36,8,"#E4D6BC",2)}},zr={desert(n,e){Dn(n,"#f6c79a","#fbe7bf"),Be(n,520,70,34,"#F8D977"),dn(n,215,"#EBC987",12,.4),dn(n,250,"#E0B66F",10,2),dn(n,296,"#D8A85F",8,4)},nile(n,e){Dn(n,"#f6d9a6","#fdf0d0"),Be(n,110,66,28,"#F8D977"),dn(n,200,"#E0B66F",8,1),n.fillStyle="#6FB7D8",n.fillRect(0,232,Ce,128),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=2;for(let t=0;t<12;t++){n.beginPath();let i=246+t*9,s=(e*20+t*40)%80;for(let r=-80;r<Ce+80;r+=40)n.moveTo(r+s,i),n.quadraticCurveTo(r+s+10,i-4,r+s+20,i);n.stroke()}for(let t of[40,580]){Z(n,t,150,5,84,"#9A653D",1);for(let i=0;i<4;i++)Vt(n,[[t+2,152],[t-30+i*20,140+i*4],[t+2,160]],"#5E9C72")}},market(n,e){Dn(n,"#f6b294","#fff3e0");for(let t=0;t<4;t++){let i=20+t*155;nt(n,s=>{s.beginPath(),s.moveTo(i,120),s.lineTo(i+140,120),s.lineTo(i+150,156),s.lineTo(i-10,156),s.closePath()},t&1?"#4F91C7":"#D9564A",1.3);for(let s=0;s<5;s++)n.fillStyle="rgba(255,255,255,.55)",n.fillRect(i-8+s*31,120,15,36);Z(n,i+6,158,128,70,"#C98B4D",3);for(let s=0;s<6;s++)Be(n,i+22+s%3*38,180+Math.floor(s/3)*26,11,["#F28F7E","#EAB94E","#88B89A","#B8A8DA","#E9515D","#F8D977"][(s+t)%6])}n.fillStyle="#EAD9B0",n.fillRect(0,236,Ce,124)},parchment(n,e){n.fillStyle="#EFD9A8",n.fillRect(0,0,Ce,Bt),n.strokeStyle="rgba(120,90,50,.15)",n.lineWidth=2;for(let t=0;t<24;t++)n.beginPath(),n.moveTo(0,t*16),n.lineTo(Ce,t*16+t%3*4),n.stroke();nt(n,t=>{t.beginPath(),t.moveTo(20,20),t.lineTo(Ce-20,14),t.lineTo(Ce-10,Bt-16),t.lineTo(14,Bt-22),t.closePath()},"#F5E6BE",2)},harbor(n,e){Dn(n,"#8fb4d6","#dfeaf3"),dn(n,190,"#6e8aa6",10,1),n.fillStyle="#4F7FA8",n.fillRect(0,230,Ce,130),n.strokeStyle="rgba(255,255,255,.45)",n.lineWidth=2;for(let t=0;t<10;t++){n.beginPath();let i=242+t*11,s=(e*25+t*37)%80;for(let r=-80;r<Ce+80;r+=40)n.moveTo(r+s,i),n.quadraticCurveTo(r+s+10,i-5,r+s+20,i);n.stroke()}Z(n,0,296,Ce,64,"#9A653D",0,!1);for(let t=0;t<16;t++)n.fillStyle="rgba(0,0,0,.14)",n.fillRect(t*42,296,3,64)},night(n,e){Dn(n,"#1b2a50","#3d4f86");for(let t=0;t<40;t++)n.fillStyle=`rgba(255,249,240,${.4+.6*Math.abs(Math.sin(e*2+t))})`,n.fillRect(t*83%Ce,t*47%160,1.8,1.8);Be(n,540,64,24,"#F1E8C8"),dn(n,200,"#2a3a6b",8,1),n.fillStyle="#1f3566",n.fillRect(0,232,Ce,128),n.strokeStyle="rgba(180,200,255,.3)",n.lineWidth=2;for(let t=0;t<10;t++){n.beginPath();let i=244+t*11,s=(e*25+t*37)%80;for(let r=-80;r<Ce+80;r+=40)n.moveTo(r+s,i),n.quadraticCurveTo(r+s+10,i-5,r+s+20,i);n.stroke()}Z(n,0,300,Ce,60,"#5a4030",0,!1)},street(n,e){Dn(n,"#a9ddf2","#e9f7fc");for(let[t,i,s,r]of[[0,120,150,"#C98569"],[130,150,190,"#E8C39A"],[290,110,140,"#9CC3E0"],[410,160,180,"#F2A79B"],[580,90,150,"#B7D8A4"]]){Z(n,t,232-s,i,s,r,3);for(let a=0;a<Math.floor(i/34);a++)for(let o=0;o<Math.floor(s/48);o++)Z(n,t+10+a*34,232-s+14+o*48,18,26,"#DDF3FB",2,!1)}n.fillStyle="#c9b99a",n.fillRect(0,232,Ce,128),n.fillStyle="#b8a888";for(let t=0;t<10;t++)n.fillRect(0,240+t*13,Ce,2)},hall(n){mi(n,"#F2E2C2","#C9A27A");for(let e of[90,320,550])$p(n,e-30,46,60,100);Z(n,0,226,Ce,8,"#9A653D",0,!1)},capitol(n,e){Dn(n,"#a9ddf2","#e9f7fc"),dn(n,300,"#B7D8A4",6,1),Z(n,90,206,460,96,"#FFF9F0",4),Yp(n,8,214,80),Vt(n,[[80,208],[320,150],[560,208]],"#EDE2CF"),nt(n,t=>{t.beginPath(),t.ellipse(320,130,74,58,0,Math.PI,0),t.lineTo(394,150),t.lineTo(246,150),t.closePath()},"#FFF9F0",1.6),Z(n,316,62,8,28,"#9DA7AA",1),Be(n,320,58,5,"#EAB94E"),Z(n,60,302,520,12,"#E4D6BC",2),Z(n,40,314,560,12,"#DCCCAD",2),n.fillStyle="#c9c0a8",n.fillRect(0,326,Ce,34)},chamber(n,e){mi(n,"#E8D7B8","#8a5a3a",215);for(let t of[120,320,520])Z(n,t-34,50,68,110,"#F8EBD0",6),ki(n,t,100,20,"#C4463C");Z(n,200,180,240,40,"#6b3f28",4),Z(n,300,150,40,34,"#9A653D",3);for(let t=0;t<3;t++)for(let i=0;i<8;i++)Z(n,40+i*72-t*6,250+t*36,56,18,"#B07A4B",3)},office(n){mi(n,"#E9DCC0","#7a5a3c",230),Z(n,230,40,180,130,"#FFF9F0",6),n.fillStyle="#4F91C7",n.fillRect(244,54,152,100),ki(n,320,104,26,"#FFF9F0"),Z(n,50,120,90,100,"#9A653D",4);for(let e=0;e<4;e++)Z(n,58,128+e*24,74,18,["#E07A66","#4F91C7","#88B89A","#EAB94E"][e],2,!1);Z(n,160,250,320,50,"#6b3f28",5),Z(n,150,244,340,10,"#9A653D",3);for(let[e,t]of[[560,"#d9564a"],[60,"#4f91c7"]])Z(n,e-2,80,4,150,"#9DA7AA",1),Vt(n,[[e,84],[e+50,96],[e,120]],t)},court(n){mi(n,"#E8DCC4","#8a6a4a",230),Yp(n,5,40,150,"#F8F0DC"),Z(n,190,170,260,80,"#6b3f28",5),Z(n,250,140,140,40,"#9A653D",4),Z(n,300,100,40,44,"#EAB94E",3)},polling(n){mi(n,"#E4EEF4","#B9C6CC",220),Vt(n,[[160,60],[320,20],[480,60]],"#E9515D"),Z(n,160,60,320,40,Yt,4),Ue(n,"VOTE HERE",320,90,28,"#2b3a55","center",900);for(let e of[90,550])ki(n,e,140,20,"#4F91C7"),ki(n,e+30,170,14,"#E9515D")},garden(n,e){Dn(n,"#a9ddf2","#e9f7fc"),n.save(),n.translate(560,70),n.rotate(e*.25);for(let t=0;t<14;t++)n.rotate(Math.PI/7),Vt(n,[[-5,-48],[0,-72],[5,-48]],"#F8D977",!1);n.restore(),Be(n,560,70,34,"#EAB94E"),Or(n,e*10%760-60,70,1.8),Or(n,(e*7+300)%760-60,120,1.4),dn(n,250,"#88B89A",10,1),dn(n,290,"#5E9C72",8,3),n.fillStyle="#A9DCC0",n.fillRect(0,316,Ce,44)},landscape(n,e){Dn(n,"#a9ddf2","#f2f9fd"),Be(n,80,60,30,"#F8D977"),dn(n,180,"#A9DCC0",24,1),dn(n,210,"#88B89A",18,2.5),Vt(n,[[420,210],[500,100],[590,210]],"#B8B0A8"),Vt(n,[[500,100],[480,134],[520,134]],"#fff"),nt(n,t=>{t.beginPath(),t.moveTo(-5,266);for(let i=0;i<=Ce+5;i+=8)t.lineTo(i,266+Math.sin(i*.05+e*1.4)*4);t.lineTo(Ce+5,Bt),t.lineTo(-5,Bt),t.closePath()},"#6FB7D8",1.4)},orchard(n,e){Dn(n,"#cfeaf6","#f2f9fd"),dn(n,240,"#B7D8A4",10,1),dn(n,280,"#88B89A",8,3),Z(n,0,316,Ce,44,"#A9DCC0",0,!1),Us(n,150,300,4.2),Us(n,530,306,3.4,"#3F7655")},space(n,e){Dn(n,"#14194a","#3b3a85");for(let t=0;t<80;t++)n.fillStyle=`rgba(255,249,240,${.35+.65*Math.abs(Math.sin(e*2+t))})`,n.fillRect(t*83%Ce,t*47%Bt,1.8,1.8)},lab(n){mi(n,"#DDEFE4","#C4D6CC",220);for(let e of[90,550])Z(n,e-40,80,80,60,"#FFF9F0",4);Z(n,30,220,580,30,"#EDE2CF",4),Z(n,30,250,580,60,"#9A653D",4);for(let e=0;e<6;e++)nt(n,t=>{t.beginPath(),t.moveTo(60+e*90,220),t.lineTo(60+e*90,190),t.lineTo(50+e*90,170),t.lineTo(80+e*90,170),t.lineTo(70+e*90,190),t.lineTo(70+e*90,220),t.closePath()},"#EAF7FB",1.2)},concert(n,e){Dn(n,"#a9374a","#f28f7e");for(let t of[-1,1])nt(n,i=>{i.beginPath();let s=t<0?-4:Ce+4;i.moveTo(s,-4),i.quadraticCurveTo(s-t*120,120,s-t*130,250),i.lineTo(s,250),i.closePath()},"#C4463C",1.4);n.fillStyle="#C98B4D",n.fillRect(0,240,Ce,120),n.strokeStyle="rgba(0,0,0,.12)";for(let t=0;t<10;t++)n.beginPath(),n.moveTo(0,246+t*12),n.lineTo(Ce,246+t*12),n.stroke();nt(n,t=>{t.beginPath(),t.moveTo(240,0),t.lineTo(400,0),t.lineTo(520,250),t.lineTo(120,250),t.closePath()},`rgba(255,236,170,${.2+.05*Math.sin(e*3)})`,0,!1)},studio(n){mi(n,"#F7EBD2","#D2B48C",225);for(let e=0;e<4;e++)Z(n,40+e*150,60+e%2*20,100,80,["#E9515D","#4F91C7","#F8D977","#88B89A"][e],4);Z(n,0,225,Ce,8,"#9A653D",0,!1)},road(n,e){Dn(n,"#a9ddf2","#e9f7fc"),dn(n,170,"#B7D8A4",8,1),Vt(n,[[300,150],[340,150],[640,360],[0,360]],"#7a757d",!1),n.strokeStyle="#F8D977",n.lineWidth=4,n.setLineDash([16,14]),n.lineDashOffset=-e*30,n.beginPath(),n.moveTo(320,150),n.lineTo(320,360),n.stroke(),n.setLineDash([])},park(n,e){Dn(n,"#a9ddf2","#e9f7fc"),Be(n,540,60,28,"#F8D977"),Or(n,e*8%760-60,70,1.6),dn(n,215,"#A9DCC0",10,1),Z(n,0,250,Ce,110,"#88B89A",0,!1),Us(n,60,250,3.4),Us(n,590,256,3.8,"#3F7655")},pizzeria(n){mi(n,"#F6B294","#EAD9B0",215);for(let e=0;e<6;e++)n.fillStyle=e&1?"#fff":"#D9564A",n.fillRect(40+e*96,28,48,60);Z(n,220,120,200,60,"#2b3a55",6),Ue(n,"PIZZA",320,164,40,"#F8D977","center",900),Z(n,90,240,460,22,"#9A653D",4),Z(n,110,262,14,80,"#6b3f28",2),Z(n,516,262,14,80,"#6b3f28",2)},meadow(n,e){Dn(n,"#a9ddf2","#e9f7fc"),Or(n,e*9%760-60,70,1.8),dn(n,200,"#B7D8A4",14,1),dn(n,240,"#88B89A",10,3),Z(n,0,280,Ce,80,"#A9DCC0",0,!1),Vt(n,[[420,280],[560,280],[540,250],[440,250]],"#E07A66"),Z(n,430,240,120,12,Yt,3),Ue(n,"FINISH",490,250,10,Os,"center",900),Us(n,90,220,3,"#5E9C72")},classroom(n){mi(n,"#EAF1E8","#C9A27A",230),Z(n,60,40,240,130,"#FFF9F0",6),Z(n,340,40,240,130,"#FFF9F0",6),Z(n,0,226,Ce,8,"#9A653D",0,!1)},workshop(n){mi(n,"#E3D2B2","#8a6a4a",220);for(let e of[90,540])$p(n,e-30,50,60,90);Z(n,0,216,Ce,8,"#6b3f28",0,!1);for(let e=0;e<4;e++)Z(n,40+e*60,150,44,60,"#C98B4D",3)},scriptorium(n){mi(n,"#D9C7A0","#7a5a3c",220);for(let e of[80,320,560])Z(n,e-26,40,52,110,"#1b2a50",22),Z(n,e-20,46,40,98,"#8fc9e8",18);Z(n,0,216,Ce,8,"#5a3a28",0,!1)},town(n,e){zr.street(n,e)},office2(n){zr.office(n,0)}},qv={pyramid(n,e,t,i,s,r){let a=r?.n??5,o=r?.p??1;for(let l=0;l<a;l++){let h=a-l,c=h*26*i,d=Xi(o*a-l,0,1);if(!(d<=0))for(let u=0;u<h;u++)Z(n,e-c/2+u*26*i,t-(l+1)*18*i,26*i,18*i*d,"#E8C98A",2,!1)}o>=1&&Vt(n,[[e-14*i,t-a*18*i],[e,t-a*18*i-16*i],[e+14*i,t-a*18*i]],"#F8D977")},block(n,e,t,i){Z(n,e-16*i,t-18*i,32*i,18*i,"#E8C98A",3)},sledge(n,e,t,i){Z(n,e-26*i,t-24*i,52*i,20*i,"#E8C98A",3),Z(n,e-34*i,t-6*i,68*i,6*i,"#9A653D",2),n.strokeStyle="#9A653D",n.lineWidth=2,n.beginPath(),n.moveTo(e-34*i,t-4*i),n.lineTo(e-60*i,t-20*i),n.stroke()},boat(n,e,t,i,s){let r=Math.sin(s*2)*2;nt(n,a=>{a.beginPath(),a.moveTo(e-50*i,t+r-14*i),a.lineTo(e+50*i,t+r-14*i),a.lineTo(e+36*i,t+r+6*i),a.lineTo(e-36*i,t+r+6*i),a.closePath()},"#9A653D",1.4),Z(n,e-18*i,t+r-30*i,36*i,16*i,"#E8C98A",3),Z(n,e-1*i,t+r-56*i,3*i,26*i,"#6b3f28",1),Vt(n,[[e+2*i,t+r-56*i],[e+30*i,t+r-40*i],[e+2*i,t+r-30*i]],Yt)},scroll(n,e,t,i){Z(n,e-18*i,t-12*i,36*i,24*i,"#F5E6BE",4),n.strokeStyle="#9A653D",n.lineWidth=1.2;for(let s=0;s<3;s++)n.beginPath(),n.moveTo(e-12*i,t-6*i+s*6*i),n.lineTo(e+12*i,t-6*i+s*6*i),n.stroke()},camel(n,e,t,i,s){let r=Math.sin(s*6)*3;Z(n,e-34*i,t-40*i,66*i,28*i,"#D9A86B",12),Be(n,e-12*i,t-50*i,12*i,"#D9A86B"),Be(n,e+12*i,t-50*i,12*i,"#D9A86B"),Z(n,e+26*i,t-72*i,10*i,36*i,"#D9A86B",5),Be(n,e+38*i,t-74*i,9*i,"#D9A86B");for(let a of[-26,-12,12,26])Z(n,e+a*i-3*i,t-14*i+(a%2?r:-r)*.3,6*i,24*i,"#C89A5F",2,!1);Z(n,e-28*i,t-52*i,56*i,12*i,"#E07A66",4)},silk(n,e,t,i){for(let s=0;s<3;s++)Z(n,e-16*i+s*4*i,t-14*i-s*10*i,32*i,12*i,["#E9515D","#8173AE","#4F91C7"][s],5)},crate(n,e,t,i){Z(n,e-14*i,t-24*i,28*i,24*i,"#9A653D",2),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=1.2,n.beginPath(),n.moveTo(e-14*i,t-12*i),n.lineTo(e+14*i,t-12*i),n.moveTo(e,t-24*i),n.lineTo(e,t),n.stroke()},sack(n,e,t,i){nt(n,s=>{s.beginPath(),s.moveTo(e-14*i,t),s.quadraticCurveTo(e-20*i,t-24*i,e-6*i,t-32*i),s.lineTo(e+6*i,t-32*i),s.quadraticCurveTo(e+20*i,t-24*i,e+14*i,t),s.closePath()},"#E8C39A",1.3),Be(n,e,t-18*i,5*i,"#E9515D",!1)},book(n,e,t,i,s,r){Z(n,e-14*i,t-20*i,28*i,20*i,r?.col??"#8B5E3C",2),Z(n,e-12*i,t-18*i,6*i,16*i,"#EAB94E",1,!1)},paper(n,e,t,i){Z(n,e-14*i,t-18*i,28*i,22*i,Yt,2),n.strokeStyle="#8A7A70",n.lineWidth=1;for(let s=0;s<4;s++)n.beginPath(),n.moveTo(e-10*i,t-12*i+s*4*i),n.lineTo(e+10*i,t-12*i+s*4*i),n.stroke()},press(n,e,t,i,s,r){let a=r?.down??Math.max(0,Math.sin(s*2))*14;Z(n,e-40*i,t-20*i,80*i,20*i,"#6b3f28",3),Z(n,e-36*i,t-100*i,10*i,80*i,"#9A653D",2),Z(n,e+26*i,t-100*i,10*i,80*i,"#9A653D",2),Z(n,e-36*i,t-108*i,72*i,10*i,"#9A653D",2),Z(n,e-24*i,t-62*i+a*i,48*i,12*i,"#9DA7AA",2),Z(n,e-3*i,t-100*i,6*i,38*i+a*i,"#8A7A70",1,!1),Z(n,e+36*i,t-86*i,40*i,6*i,"#6b3f28",2)},quill(n,e,t,i){Vt(n,[[e,t],[e+22*i,t-40*i],[e+14*i,t-46*i]],"#FFF9F0")},ship(n,e,t,i,s){let r=Math.sin(s*1.4)*2;nt(n,a=>{a.beginPath(),a.moveTo(e-90*i,t+r-24*i),a.lineTo(e+90*i,t+r-24*i),a.lineTo(e+66*i,t+r+14*i),a.lineTo(e-66*i,t+r+14*i),a.closePath()},"#6b3f28",1.4);for(let a of[-40,10,54])Z(n,e+a*i,t+r-120*i,4*i,96*i,"#4a2f1f",1),Vt(n,[[e+a*i+4*i,t+r-116*i],[e+a*i+40*i,t+r-90*i],[e+a*i+4*i,t+r-54*i]],Yt)},bill(n,e,t,i,s,r){Z(n,e-16*i,t-22*i,32*i,26*i,Yt,2),n.strokeStyle="#8A7A70",n.lineWidth=1;for(let a=0;a<4;a++)n.beginPath(),n.moveTo(e-11*i,t-16*i+a*5*i),n.lineTo(e+11*i,t-16*i+a*5*i),n.stroke();r?.label&&Ue(n,r.label,e,t-28*i,9*i,"#C4463C","center",900)},gavel(n,e,t,i,s){let r=Math.sin(s*8)>.7?-.5:0;n.save(),n.translate(e,t),n.rotate(r),Z(n,-16*i,-22*i,32*i,14*i,"#9A653D",3),Z(n,-2*i,-10*i,4*i,28*i,"#6b3f28",1),n.restore(),Z(n,e-22*i,t+14*i,44*i,8*i,"#6b3f28",2)},flag(n,e,t,i,s){Z(n,e-1.5*i,t-100*i,3*i,100*i,"#9DA7AA",1,!1),nt(n,r=>{r.beginPath(),r.moveTo(e+1*i,t-98*i);for(let a=0;a<=50;a+=5)r.lineTo(e+(1+a)*i,t-98*i+Math.sin(s*4+a*.2)*3);for(let a=50;a>=0;a-=5)r.lineTo(e+(1+a)*i,t-66*i+Math.sin(s*4+a*.2)*3);r.closePath()},"#D9564A",1.2),Z(n,e+1*i,t-98*i,22*i,18*i,"#2b3a55",0,!1)},ballotbox(n,e,t,i){Z(n,e-24*i,t-40*i,48*i,40*i,"#4F91C7",4),Z(n,e-14*i,t-42*i,28*i,5*i,"#2b3a55",1,!1),ki(n,e,t-18*i,9*i,Yt)},ballot(n,e,t,i){Z(n,e-8*i,t-12*i,16*i,20*i,Yt,2),n.fillStyle="#4F91C7",n.fillRect(e-5*i,t-6*i,10*i,3*i),n.fillRect(e-5*i,t,7*i,3*i)},booth(n,e,t,i){Z(n,e-40*i,t-100*i,80*i,100*i,"#B9C6CC",4),Z(n,e-40*i,t-100*i,80*i,14*i,"#E9515D",3),Z(n,e-28*i,t-50*i,56*i,8*i,"#6b3f28",2)},tally(n,e,t,i,s,r){Z(n,e-90*i,t-100*i,180*i,100*i,"#2b3a55",8),(r?.v??[.6,.4,.8]).forEach((o,l)=>{let h=o*70*i*Xi(s/2,0,1);Z(n,e-70*i+l*52*i,t-14*i-h,36*i,h,["#4F91C7","#E07A66","#88B89A"][l],3,!1)})},scales(n,e,t,i,s){let r=Math.sin(s*1.5)*.12;Z(n,e-4*i,t-70*i,8*i,70*i,"#EAB94E",2),Z(n,e-24*i,t-6*i,48*i,8*i,"#EAB94E",2),n.save(),n.translate(e,t-68*i),n.rotate(r),Z(n,-44*i,-3*i,88*i,6*i,"#EAB94E",2);for(let a of[-1,1])n.strokeStyle="#9A653D",n.lineWidth=1.4,n.beginPath(),n.moveTo(a*40*i,0),n.lineTo(a*40*i-10*i,26*i),n.moveTo(a*40*i,0),n.lineTo(a*40*i+10*i,26*i),n.stroke(),Z(n,a*40*i-14*i,26*i,28*i,6*i,"#EAB94E",3);n.restore()},pillar(n,e,t,i,s,r){Z(n,e-40*i,t-130*i,80*i,14*i,r?.col??"#4F91C7",3),Z(n,e-28*i,t-116*i,56*i,104*i,Yt,4),Z(n,e-40*i,t-12*i,80*i,12*i,r?.col??"#4F91C7",3),r?.label&&Ue(n,r.label,e,t-66*i,11*i,Os,"center",900)},podium(n,e,t,i){Z(n,e-26*i,t-56*i,52*i,56*i,"#9A653D",4),Z(n,e-30*i,t-60*i,60*i,8*i,"#C98B4D",3)},stamp(n,e,t,i,s,r){let a=Math.max(0,Math.sin(s*3))*8*i;Z(n,e-12*i,t-40*i+a,24*i,16*i,"#9A653D",3),Z(n,e-5*i,t-24*i+a,10*i,22*i,"#6b3f28",2),Z(n,e-26*i,t-4*i,52*i,8*i,"#313A3F",2),r?.label&&Ue(n,r.label,e,t+24*i,16*i,"#C4463C","center",900)},bulb(n,e,t,i,s){let r=.5+.5*Math.sin(s*5);Be(n,e,t,22*i*(1+r*.1),"rgba(248,217,119,.45)",!1),Be(n,e,t,13*i,"#F8D977"),Z(n,e-6*i,t+12*i,12*i,8*i,"#9DA7AA",2,!1)},sun(n,e,t,i,s){n.save(),n.translate(e,t),n.rotate(s*.4);for(let r=0;r<12;r++)n.rotate(Math.PI/6),Vt(n,[[-5*i,-34*i],[0,-52*i],[5*i,-34*i]],"#F8D977",!1);n.restore(),Be(n,e,t,28*i,"#EAB94E")},drop(n,e,t,i){nt(n,s=>{s.beginPath(),s.moveTo(e,t-12*i),s.quadraticCurveTo(e+10*i,t+2*i,e,t+8*i),s.quadraticCurveTo(e-10*i,t+2*i,e,t-12*i)},"#8FC9E8",1.2,!1)},co2(n,e,t,i){Be(n,e,t,14*i,"rgba(157,167,170,.8)",!1),Ue(n,"CO2",e,t+4*i,9*i,Os,"center",900)},o2(n,e,t,i){Be(n,e,t,12*i,"rgba(169,221,242,.85)",!1),Ue(n,"O2",e,t+4*i,9*i,Os,"center",900)},leaf(n,e,t,i,s){nt(n,r=>{r.beginPath(),r.moveTo(e,t),r.quadraticCurveTo(e+60*i,t-20*i,e+90*i,t-70*i),r.quadraticCurveTo(e+20*i,t-70*i,e,t)},"#5E9C72",1.6),n.strokeStyle="#3F7655",n.lineWidth=2,n.beginPath(),n.moveTo(e,t),n.lineTo(e+70*i,t-55*i),n.stroke()},plant(n,e,t,i,s,r){let a=r?.g??1;Z(n,e-18*i,t-24*i,36*i,24*i,"#E07A66",3),Z(n,e-2*i,t-(24+60*a)*i,4*i,60*a*i,"#5E9C72",1,!1);for(let o=0;o<4;o++){let l=t-(34+o*14*a)*i;nt(n,h=>{h.beginPath(),h.ellipse(e+(o%2?14:-14)*i,l,14*i*a,6*i*a,o%2?-.4:.4,0,7)},"#5E9C72",1.2,!1)}},sugar(n,e,t,i,s){for(let r=0;r<4;r++)ki(n,e+Math.cos(s*2+r*1.6)*16*i,t+Math.sin(s*2+r*1.6)*10*i,5*i,"#F8D977")},apple(n,e,t,i){Be(n,e,t,12*i,"#E9515D"),Z(n,e-1*i,t-18*i,2*i,8*i,"#6b3f28",1,!1),Vt(n,[[e+2*i,t-14*i],[e+12*i,t-20*i],[e+8*i,t-10*i]],"#5E9C72",!1)},planet(n,e,t,i,s,r){Be(n,e,t,26*i,r?.col??"#F6B294"),r?.ring&&(n.strokeStyle="#F8D977",n.lineWidth=5*i,n.beginPath(),n.ellipse(e,t,44*i,10*i,-.3,0,7),n.stroke())},orbit(n,e,t,i,s,r){n.strokeStyle="rgba(255,255,255,.4)",n.lineWidth=1.5,n.setLineDash([4,5]),n.beginPath(),n.ellipse(e,t,90*i,40*i,0,0,7),n.stroke(),n.setLineDash([]);let a=s*(r?.sp??1.2);Be(n,e+Math.cos(a)*90*i,t+Math.sin(a)*40*i,9*i,r?.col??"#EDE2CF")},microscope(n,e,t,i){Z(n,e-30*i,t-10*i,60*i,10*i,"#313A3F",3),Z(n,e-4*i,t-80*i,8*i,70*i,"#9DA7AA",2),Z(n,e-20*i,t-100*i,18*i,50*i,"#313A3F",4),Z(n,e-18*i,t-36*i,36*i,6*i,"#9DA7AA",2)},cell(n,e,t,i,s){nt(n,r=>{ii(r,e-70*i,t-56*i,140*i,112*i,24*i)},"#A9DCC0",1.6),nt(n,r=>{ii(r,e-62*i,t-48*i,124*i,96*i,18*i)},"#D9F0DF",1.2,!1),Be(n,e+8*i,t+6*i,26*i,"#CFE8F8");for(let[r,a]of[[-40,-22],[-36,28],[44,-24],[40,30]])nt(n,o=>{o.beginPath(),o.ellipse(e+r*i,t+a*i+Math.sin(s*2+r)*2,14*i,8*i,.4,0,7)},"#5E9C72",1.2,!1);Be(n,e-38*i,t,11*i,"#B8A8DA",!1)},drum(n,e,t,i,s){let r=Math.max(0,Math.sin(s*8))*3;Z(n,e-26*i,t-36*i+r,52*i,36*i,"#E9515D",6),Z(n,e-26*i,t-40*i+r,52*i,10*i,Yt,5)},violin(n,e,t,i){nt(n,s=>{s.beginPath(),s.ellipse(e,t-14*i,14*i,22*i,.5,0,7)},"#B5563E",1.4,!1),Z(n,e+6*i,t-52*i,4*i,30*i,"#6b3f28",1,!1)},trumpet(n,e,t,i){Z(n,e-40*i,t-8*i,70*i,6*i,"#EAB94E",3),nt(n,s=>{s.beginPath(),s.moveTo(e+30*i,t-5*i),s.lineTo(e+50*i,t-20*i),s.lineTo(e+50*i,t+10*i),s.closePath()},"#EAB94E",1.4,!1)},flute(n,e,t,i){Z(n,e-40*i,t-6*i,80*i,5*i,"#9DA7AA",2)},piano(n,e,t,i){Z(n,e-60*i,t-20*i,120*i,22*i,Yt,3);for(let s=0;s<8;s++)n.strokeStyle=Hv,n.lineWidth=1,n.beginPath(),n.moveTo(e-60*i+s*15*i,t-20*i),n.lineTo(e-60*i+s*15*i,t+2*i),n.stroke(),s%4!==3&&Z(n,e-52*i+s*15*i,t-20*i,8*i,13*i,"#313A3F",1,!1)},notes(n,e,t,i,s){for(let r=0;r<4;r++){let a=(s*.6+r/4)%1;n.globalAlpha=1-a,Ue(n,["\u266A","\u266B","\u266A","\u266C"][r],e+r*22*i-30*i,t-a*70*i,22*i,"#FFF3C7","center",400)}n.globalAlpha=1},baton(n,e,t,i,s){n.save(),n.translate(e,t),n.rotate(Math.sin(s*5)*.5-.6),Z(n,-2*i,-34*i,3*i,34*i,Yt,1,!1),n.restore()},metronome(n,e,t,i,s){Vt(n,[[e-18*i,t],[e+18*i,t],[e+8*i,t-60*i],[e-8*i,t-60*i]],"#9A653D"),n.save(),n.translate(e,t-8*i),n.rotate(Math.sin(s*5)*.5),Z(n,-1.5*i,-50*i,3*i,50*i,"#313A3F",1,!1),Z(n,-6*i,-40*i,12*i,8*i,"#EAB94E",2,!1),n.restore()},easel(n,e,t,i,s,r){n.strokeStyle="#9A653D",n.lineWidth=4*i,n.beginPath(),n.moveTo(e-30*i,t),n.lineTo(e-6*i,t-100*i),n.moveTo(e+30*i,t),n.lineTo(e+6*i,t-100*i),n.stroke(),Z(n,e-40*i,t-100*i,80*i,64*i,Yt,3),r?.draw&&r.draw(n,e-40*i,t-100*i,80*i,64*i,s)},palette(n,e,t,i,s,r){nt(n,a=>{a.beginPath(),a.ellipse(e,t,34*i,22*i,.2,0,7)},"#E8C39A",1.4,!1),(r?.cols??["#E9515D","#F8D977","#4F91C7"]).forEach((a,o)=>Be(n,e-18*i+o*16*i,t-4*i+o%2*8*i,6*i,a,!1))},blob(n,e,t,i,s,r){Be(n,e,t,12*i*(r?.r??1),r?.col??"#E9515D",!1)},ball(n,e,t,i){Be(n,e,t,9*i,"#E9515D")},pizza(n,e,t,i,s,r){let a=r?.n??8,o=r?.ate??0;for(let l=0;l<a;l++){if(l<o)continue;let h=l/a*Math.PI*2,c=(l+1)/a*Math.PI*2;nt(n,d=>{d.beginPath(),d.moveTo(e,t),d.arc(e,t,40*i,h,c),d.closePath()},"#F6C45C",1.3,!1),Be(n,e+Math.cos((h+c)/2)*24*i,t+Math.sin((h+c)/2)*24*i,4*i,"#D9564A",!1)}},plate(n,e,t,i){Be(n,e,t,20*i,Yt,!1)},tortoise(n,e,t,i,s){let r=Math.sin(s*4)*1.5;nt(n,a=>{a.beginPath(),a.ellipse(e,t-14*i,24*i,16*i,0,Math.PI,0),a.closePath()},"#5E9C72",1.4,!1),Be(n,e+28*i,t-14*i+r,8*i,"#88B89A",!1);for(let a of[-16,10])Z(n,e+a*i,t-6*i,8*i,8*i,"#88B89A",2,!1)},hare(n,e,t,i,s){let r=Math.abs(Math.sin(s*9))*6;Be(n,e,t-20*i-r,18*i,"#C9B7A0",!1),Be(n,e+16*i,t-28*i-r,11*i,"#D8C8B4",!1),Z(n,e+12*i,t-52*i-r,5*i,22*i,"#D8C8B4",2,!1),Z(n,e+20*i,t-52*i-r,5*i,22*i,"#D8C8B4",2,!1)},bee(n,e,t,i,s){let r=Math.sin(s*30)*3;Be(n,e-6*i,t-10*i+r,7*i,"rgba(255,255,255,.7)",!1),Be(n,e,t,10*i,"#F8D977",!1),n.fillStyle="#313A3F",n.fillRect(e-4*i,t-8*i,3*i,16*i),n.fillRect(e+2*i,t-8*i,3*i,16*i)},bubble(n,e,t,i,s,r){n.save(),n.font=`800 ${14*i}px system-ui,sans-serif`;let a=n.measureText(r?.text??"").width+20;nt(n,o=>{ii(o,e-a/2,t-28*i,a,32*i,12)},Yt,1.4),Ue(n,r?.text??"",e,t-6*i,14*i,r?.col??Os,"center",800),n.restore()},label(n,e,t,i,s,r){Ue(n,r?.text??"",e,t,(r?.size??22)*i,r?.col??"#fff","center",900)},arrow(n,e,t,i,s,r){let a=(r?.dx??60)*i,o=(r?.dy??0)*i,l=(Math.sin(s*4)+1)/2;n.strokeStyle=r?.col??"#E9515D",n.lineWidth=5,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e+a,t+o),n.stroke();let h=Math.atan2(o,a);n.fillStyle=n.strokeStyle,n.beginPath(),n.moveTo(e+a,t+o),n.lineTo(e+a-Math.cos(h-.5)*14,t+o-Math.sin(h-.5)*14),n.lineTo(e+a-Math.cos(h+.5)*14,t+o-Math.sin(h+.5)*14),n.fill()},graph(n,e,t,i,s,r){let a=200*i,o=150*i;Z(n,e-a/2,t-o,a,o,Yt,6),n.strokeStyle="#8A7A70",n.lineWidth=1.5,n.beginPath(),n.moveTo(e-a/2+10,t-o/2),n.lineTo(e+a/2-10,t-o/2),n.moveTo(e,t-o+8),n.lineTo(e,t-8),n.stroke();let l=Xi(s/(r?.dur??3),0,1);n.strokeStyle="#E9515D",n.lineWidth=3,n.beginPath();for(let h=0;h<=40*l;h++){let c=(h/40-.5)*2,d=-(r?.k??.6)+c*c*(r?.k??.6)*1.6,u=e+c*(a/2-20),f=t-o/2+d*(o/2-16)*-1-0;h?n.lineTo(u,f):n.moveTo(u,f)}n.stroke(),l>.5&&Be(n,e,t-o/2+(r?.k??.6)*(o/2-16)*0+(o/2-16)*(r?.k??.6),6*i,"#F8D977")},trail(n,e,t,i,s,r){let a=Xi(s/(r?.dur??3),0,1);n.strokeStyle="rgba(233,81,93,.7)",n.lineWidth=3,n.setLineDash([6,6]),n.beginPath();for(let c=0;c<=40*a;c++){let d=c/40,u=e+d*(r?.w??260),f=t-Math.sin(d*Math.PI)*(r?.h??100);c?n.lineTo(u,f):n.moveTo(u,f)}n.stroke(),n.setLineDash([]);let o=a,l=e+o*(r?.w??260),h=t-Math.sin(o*Math.PI)*(r?.h??100);Be(n,l,h,9*i,"#E9515D"),a>.5&&r?.vertex&&(Be(n,e+.5*(r?.w??260),t-(r?.h??100),6*i,"#F8D977"),Ue(n,"vertex",e+.5*(r?.w??260),t-(r?.h??100)-14,13,"#fff","center",900),n.setLineDash([4,5]),n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=1.5,n.beginPath(),n.moveTo(e+.5*(r?.w??260),t-(r?.h??100)),n.lineTo(e+.5*(r?.w??260),t),n.stroke(),n.setLineDash([]))},stand(n,e,t,i){Z(n,e-30*i,t-70*i,60*i,70*i,"#6b3f28",4)},tree(n,e,t,i){Us(n,e,t,i*2.4)},cloud(n,e,t,i,s){Or(n,e+Math.sin(s*.8)*6,t,i*1.4)},rain(n,e,t,i,s){n.strokeStyle="rgba(111,183,216,.9)",n.lineWidth=2;for(let r=0;r<10;r++){let a=t+(s*120+r*24)%140*i,o=e+r*10*i-40*i;n.beginPath(),n.moveTo(o,a),n.lineTo(o-3,a+10),n.stroke()}},vapor(n,e,t,i,s){for(let r=0;r<4;r++){let a=(s*.5+r/4)%1;n.globalAlpha=1-a,Ue(n,"~",e+(r-1.5)*18*i,t-a*90*i,26*i,"#fff","center",400)}n.globalAlpha=1},star(n,e,t,i,s){ki(n,e,t,10*i*(1+Math.sin(s*5)*.15),"#F8D977")},heart(n,e,t,i){ki(n,e,t,10*i,"#E9515D")}};function jp(n,e,t,i,s){let r=e.t0??0,a=e.t1??s;if(i<r||i>a+1e-4)return;let o=e.x,l=e.y;if(e.to){let c=Zp(Xi((i-r)/Math.max(.001,a-r),0,1));o=zs(e.x,e.to[0],c),l=zs(e.y,e.to[1],c)-(e.a?.arc?Math.sin(c*Math.PI)*e.a.arc:0)}let h=qv[e.kind];h&&(n.save(),e.rot&&(n.translate(o,l),n.rotate(e.rot),n.translate(-o,-l)),h(n,o,l,e.s??1,i-r,e.a),n.restore())}function Kp(n,e,t,i,s,r={}){let{shot:a,u:o,i:l}=kh(i,s);n.save(),n.scale(e/Ce,t/Bt),n.beginPath(),n.rect(0,0,Ce,Bt),n.clip();let h=Xi(o/a.dur,0,1),c=a.zoom?zs(a.zoom[0],a.zoom[1],h):1,d=a.pan??[Ce/2,Bt/2,Ce/2,Bt/2],u=zs(d[0],d[2],h),f=zs(d[1],d[3],h);n.translate(Ce/2,Bt/2),n.scale(c,c),n.translate(-u,-f),(zr[a.bg]??zr.hall)(n,o);let g=[];if(a.props.forEach(y=>g.push({y:y.y+(y.kind==="label"||y.kind==="bubble"||y.kind==="arrow"||y.kind==="trail"||y.kind==="graph"||y.kind==="tally"?400:0),f:()=>jp(n,y,s,o,a.dur)})),a.actors.forEach(y=>g.push({y:Jp(y,o).y,f:()=>Gv(n,y,o)})),g.sort((y,p)=>y.y-p.y).forEach(y=>y.f()),n.restore(),r.captions!==!1){n.save(),n.scale(e/Ce,t/Bt),n.font="800 15px system-ui,sans-serif";let y=Ka(n,a.cap,Ce-80).slice(0,3),p=y.length*20+12,m=10;n.fillStyle="rgba(20,28,33,.72)",n.beginPath(),n.roundRect(30,m,Ce-60,p,10),n.fill(),n.fillStyle="#fff",n.textAlign="center",y.forEach((_,E)=>n.fillText(_,Ce/2,m+22+E*20)),n.restore()}}function Qp(n,e,t,i,s){n.save(),n.scale(e/Ce,t/Bt);let r=n.createLinearGradient(0,0,Ce,Bt);r.addColorStop(0,"#2b3a55"),r.addColorStop(1,"#4F91C7"),n.fillStyle=r,n.fillRect(0,0,Ce,Bt);for(let h=0;h<14;h++)n.fillStyle="rgba(255,255,255,.07)",n.beginPath(),n.arc((h*97+s*8)%(Ce+80)-40,h*53%Bt,24+h%4*14,0,7),n.fill();let a=i.shots[0];n.save(),n.translate(Ce/2,130),n.scale(.5,.5),n.translate(-Ce/2,-Bt/2+60),n.beginPath(),n.rect(0,0,Ce,Bt),n.clip(),(zr[a.bg]??zr.hall)(n,s),a.props.slice(0,4).forEach(h=>jp(n,h,1,1,99)),n.restore(),nt(n,h=>{ii(h,40,224,Ce-80,100,16)},Yt,2),Ue(n,i.tag.toUpperCase(),62,252,13,"#E07A66","left",900),n.font="900 28px system-ui,sans-serif",Ka(n,i.title,Ce-130).slice(0,2).forEach((h,c)=>Ue(n,h,62,286+c*32,28,Os,"left",900)),Ue(n,`${Math.round(Qa(i))} sec`,Ce-62,252,13,"#8A7A70","right",800);let l=1+Math.sin(s*4)*.06;n.save(),n.translate(Ce/2,98),n.scale(l,l),Be(n,0,0,26,"rgba(255,255,255,.95)"),Vt(n,[[-8,-12],[14,0],[-8,12]],"#E07A66",!1),n.restore(),n.restore()}var Dh=640,em=360,Ut="#4A3B3F",tm="#FFF9F0",fn=(n,e="#FFF9F0",t="#EAF1E8")=>{let i=n.createLinearGradient(0,0,0,em);i.addColorStop(0,e),i.addColorStop(1,t),n.fillStyle=i,n.fillRect(0,0,Dh,em)},pn=(n,e)=>{nt(n,t=>ii(t,20,14,Dh-40,44,12),"#4F91C7",1.6),Ue(n,e,Dh/2,44,24,"#fff","center",900)},mn=(n,e,t=.5)=>Math.max(0,Math.min(1,(n-e*t)/.6)),Hr=(n,e,t,i,s,r="#E07A66")=>{n.strokeStyle=r,n.lineWidth=4,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.stroke();let a=Math.atan2(s-t,i-e);n.fillStyle=r,n.beginPath(),n.moveTo(i,s),n.lineTo(i-Math.cos(a-.5)*12,s-Math.sin(a-.5)*12),n.lineTo(i-Math.cos(a+.5)*12,s-Math.sin(a+.5)*12),n.fill()},Wu=(n,e,t,i,s,r,a=1)=>{n.save(),n.globalAlpha=a,nt(n,o=>ii(o,t,i,s,40,10),r,1.6),Ue(n,e,t+s/2,i+26,e.length>12?12:e.length>8?14:16,"#fff","center",800),n.restore()},Xv=[{id:"parabola",title:"A parabola and its parts",draw(n,e){fn(n),pn(n,"y = x\xB2 : a parabola");let t=320,i=290,s=48,r=22;n.strokeStyle="#8A7A70",n.lineWidth=2,n.beginPath(),n.moveTo(60,i),n.lineTo(580,i),n.moveTo(t,80),n.lineTo(t,330),n.stroke(),n.strokeStyle="#E9515D",n.lineWidth=4,n.beginPath();let a=Math.floor(mn(e,0,2)*60);for(let o=0;o<=a;o++){let l=-3+6*o/60,h=l*l;o?n.lineTo(t+l*s,i-h*r*.9):n.moveTo(t+l*s,i-h*r*.9)}n.stroke(),e>2.4&&(Be(n,t,i,8,"#F8D977"),Ue(n,"vertex (0, 0)",t+18,i+22,16,Ut,"left",800),n.setLineDash([6,6]),n.strokeStyle="#4F91C7",n.lineWidth=2.5,n.beginPath(),n.moveTo(t,80),n.lineTo(t,330),n.stroke(),n.setLineDash([]),Ue(n,"axis of symmetry",t+12,108,15,"#4F91C7","left",800))}},{id:"plant-cell",title:"Parts of a plant cell",draw(n,e){fn(n,"#E9F7FC","#DDEFE4"),pn(n,"Plant cell"),nt(n,i=>ii(i,120,80,400,250,34),"#A9DCC0",2),nt(n,i=>ii(i,136,96,368,218,26),"#D9F0DF",1.2,!1),Be(n,350,215,62,"#CFE8F8");for(let[i,s]of[[190,140],[210,270],[470,150],[450,280]])nt(n,r=>{r.beginPath(),r.ellipse(i,s+Math.sin(e*2+i)*2,32,17,.4,0,7)},"#5E9C72",1.4,!1);Be(n,200,205,22,"#B8A8DA",!1),[["cell wall",70,190,130,200,"#2f7a52"],["chloroplast",560,120,480,150,"#3F7655"],["vacuole",570,235,410,220,"#4F91C7"],["nucleus",70,300,190,215,"#8173AE"]].forEach(([i,s,r,a,o,l],h)=>{let c=mn(e,h+1,.8);c<=0||(n.save(),n.globalAlpha=c,n.strokeStyle=l,n.lineWidth=2,n.beginPath(),n.moveTo(s,r),n.lineTo(a,o),n.stroke(),Ue(n,i,s,r-6,17,l,"center",900),n.restore())})}},{id:"silk-map",title:"The Silk Road",draw(n,e){fn(n,"#EFD9A8","#E7CD96"),pn(n,"The Silk Road");let t=[["Chang'an",90,200],["Dunhuang",200,160],["Samarkand",330,210],["Baghdad",440,250],["Constantinople",540,150]];n.strokeStyle="#E9515D",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),t.forEach(([,h,c],d)=>d?n.lineTo(h,c):n.moveTo(h,c)),n.stroke(),n.setLineDash([]),t.forEach(([h,c,d],u)=>{let f=mn(e,u,.7);n.save(),n.globalAlpha=f,Be(n,c,d,9,"#4F91C7"),Ue(n,h,c,d+26,15,Ut,"center",800),n.restore()});let i=e*.1%1,s=i*4,r=Math.min(3,Math.floor(s)),a=s-r,o=t[r][1]+(t[r+1][1]-t[r][1])*a,l=t[r][2]+(t[r+1][2]-t[r][2])*a;Z(n,o-14,l-24,28,16,"#D9A86B",6)}},{id:"timeline",title:"Timeline of big ideas",draw(n,e){fn(n,"#F8E9C8","#F1DDB0"),pn(n,"Timeline"),n.strokeStyle=Ut,n.lineWidth=6,n.beginPath(),n.moveTo(40,190),n.lineTo(40+560*mn(e,0,1.4),190),n.stroke(),[["2600 BCE","Pyramids"],["200 BCE","Silk Road"],["1440","Printing press"],["1773","Tea Party"],["1789","Constitution"]].forEach(([t,i],s)=>{let r=80+s*120,a=mn(e,s+1,.5);n.save(),n.globalAlpha=a,Be(n,r,190,13,["#E07A66","#4F91C7","#88B89A","#EAB94E","#B8A8DA"][s]),Ue(n,t,r,150-s%2*34,17,Ut,"center",900),Ue(n,i,r,240+s%2*34,16,"#8A7A70","center",800),n.restore()})}},{id:"branches",title:"Three branches",draw(n,e){fn(n,"#FFF3E0","#F6E4C5"),pn(n,"Checks and balances"),[["Legislative","Congress","makes laws","#4F91C7",120],["Executive","President","carries out laws","#E07A66",320],["Judicial","Courts","decide meaning","#88B89A",520]].forEach(([t,i,s,r,a],o)=>{let l=mn(e,o,.6);n.save(),n.globalAlpha=l,Z(n,a-80,90,160,44,r,8),Ue(n,t,a,120,20,"#fff","center",900),Z(n,a-56,140,112,150,tm,4),Ue(n,i,a,190,18,Ut,"center",900),Ue(n,s,a,220,14,"#8A7A70","center",700),n.restore()}),e>2.4&&(Hr(n,200,310,270,310,"#E9515D"),Hr(n,440,310,370,310,"#E9515D"),Hr(n,190,330,450,330,"#E9515D"))}},{id:"staff",title:"Music staff",draw(n,e){fn(n,"#FFF9F0","#F4EAD2"),pn(n,"Notes on the staff"),n.strokeStyle=Ut,n.lineWidth=2.5;for(let s=0;s<5;s++)n.beginPath(),n.moveTo(60,120+s*24),n.lineTo(580,120+s*24),n.stroke();Ue(n,"\u{1D11E}",84,200,90,Ut,"center",400),[[170,180],[250,156],[330,204],[410,132],[490,168]].forEach(([s,r],a)=>{let o=mn(e,a,.6);n.save(),n.globalAlpha=o,n.beginPath(),n.ellipse(s,r,13,10,-.3,0,7),n.fillStyle=["#E07A66","#4F91C7","#88B89A","#EAB94E","#B8A8DA"][a],n.fill(),n.strokeStyle=$v,n.lineWidth=2,n.stroke(),n.beginPath(),n.moveTo(s+11,r),n.lineTo(s+11,r-52),n.stroke(),n.restore()}),Ue(n,"higher notes sound higher",330,300,18,Ut,"center",800);let i=170+e*80%320;Be(n,i,262,6,"#E9515D",!1)}},{id:"color-wheel",title:"Color wheel",draw(n,e){fn(n,"#FFF9F0","#F4EAD2"),pn(n,"Primary and secondary colors");let t=["#E9515D","#F28F3E","#F8D977","#5FAE6A","#4F91C7","#8173AE"],i=["red","orange","yellow","green","blue","purple"];t.forEach((s,r)=>{let a=r*Math.PI/3-Math.PI/2,o=mn(e,r,.4);n.save(),n.globalAlpha=o,Be(n,320+Math.cos(a)*100,210+Math.sin(a)*100,r%2===0?46:36,s),Ue(n,i[r],320+Math.cos(a)*100,214+Math.sin(a)*100,14,r===2?Ut:"#fff","center",900),n.restore()}),Ue(n,"primary",120,200,18,Ut,"center",900),Ue(n,"secondary",520,200,18,Ut,"center",900)}},{id:"water-cycle",title:"The water cycle",draw(n,e){if(fn(n,"#CFEAF8","#EAF6FC"),pn(n,"The water cycle"),Be(n,80,100,26,"#F8D977"),Vt(n,[[430,290],[520,160],[610,290]],"#B8B0A8"),n.fillStyle="#6FB7D8",n.fillRect(0,270,Dh,90),[["evaporation",160,200,160,140],["condensation",330,120,330,120],["precipitation",430,130,410,220],["collection",300,300,300,300]].forEach(([t,i,s],r)=>{let a=mn(e,r,.9);n.save(),n.globalAlpha=a,Ue(n,t,i,s+(r===3?20:0),16,r===3?"#fff":Ut,"center",900),n.restore()}),Hr(n,150,260,150,170,"#E9515D"),e>1&&(Be(n,320,90,20,"#fff"),Be(n,350,84,24,"#fff"),Be(n,380,92,18,"#fff")),e>2){n.strokeStyle="#4F91C7",n.lineWidth=2;for(let t=0;t<6;t++){let i=130+(e*90+t*20)%120;n.beginPath(),n.moveTo(340+t*10,i),n.lineTo(337+t*10,i+10),n.stroke()}}Hr(n,560,280,380,295,"#fff")}},{id:"simile",title:"Simile vs metaphor",draw(n,e){fn(n,"#FFF9F0","#F4EAD2"),pn(n,"Figurative language"),[["Simile","uses LIKE or AS","as busy as a bee","#E07A66",170],["Metaphor","says one thing IS another","time is a thief","#8173AE",470]].forEach(([t,i,s,r,a],o)=>{let l=mn(e,o,.8);n.save(),n.globalAlpha=l,Z(n,a-130,90,260,220,tm,10),Z(n,a-130,90,260,54,r,10),Ue(n,t,a,128,26,"#fff","center",900),Ue(n,i,a,180,16,Ut,"center",800),Ue(n,`"${s}"`,a,240,20,r,"center",900),n.restore()})}},{id:"fractions",title:"Fraction circles",draw(n,e){fn(n,"#FFF3E0","#F6E4C5"),pn(n,"Equal parts make a fraction"),[[2,120],[4,270],[8,420],[3,560]].forEach(([t,i],s)=>{let r=mn(e,s,.5);for(let a=0;a<t;a++){let o=a/t*Math.PI*2-Math.PI/2,l=(a+1)/t*Math.PI*2-Math.PI/2;n.save(),n.globalAlpha=r,nt(n,h=>{h.beginPath(),h.moveTo(i,190),h.arc(i,190,48,o,l),h.closePath()},a===0?"#E9515D":"#F6C45C",1.6,!1),n.restore()}n.save(),n.globalAlpha=r,Ue(n,`1/${t}`,i,270,22,Ut,"center",900),n.restore()})}},{id:"pyramid",title:"Inside a pyramid",draw(n,e){fn(n,"#F6D9A6","#FDF0D0"),pn(n,"Egyptian pyramid"),Vt(n,[[170,310],[320,100],[470,310]],"#E8C98A");for(let i=0;i<6;i++){n.strokeStyle="rgba(120,90,50,.4)",n.lineWidth=1.5;let s=310-i*35,r=i*0+1;n.beginPath(),n.moveTo(170+(310-s)*.72,s),n.lineTo(470-(310-s)*.72,s),n.stroke()}Z(n,300,230,40,24,"#3b2b20",4);let t=mn(e,0,1.2);n.save(),n.globalAlpha=t,Ue(n,"burial chamber",470,242,16,Ut,"left",900),Ue(n,"stone blocks",100,290,16,Ut,"center",900),Ue(n,"~2.3 million blocks",320,340,18,"#9A653D","center",900),n.restore()}},{id:"press",title:"Movable type",draw(n,e){fn(n,"#F2E2C2","#E3D2B2"),pn(n,"Movable type"),"PRINT".split("").forEach((t,i)=>{let s=mn(e,i,.5),r=190-Math.sin(Math.min(1,s)*Math.PI)*24;n.save(),n.globalAlpha=s,Z(n,120+i*80,r,64,80,"#9DA7AA",6),Ue(n,t,152+i*80,r+58,48,"#313A3F","center",900),n.restore()}),Ue(n,"letters can be rearranged and reused",320,320,20,Ut,"center",800)}},{id:"photosynthesis",title:"Photosynthesis equation",draw(n,e){fn(n,"#E9F7FC","#DDEFE4"),pn(n,"Photosynthesis"),[["sunlight",60,"#F8D977",130],["water",250,"#8FC9E8",120],["carbon dioxide",420,"#9DA7AA",160]].forEach(([t,i,s,r],a)=>{Wu(n,t,i,110,r,s,mn(e,a,.4))}),Ue(n,"+",220,140,28,Ut,"center",900),Ue(n,"+",392,140,28,Ut,"center",900),e>1.6&&(Hr(n,320,160,320,210,"#5E9C72"),Z(n,150,220,340,70,"#A9DCC0",12),Ue(n,"sugar (food) + oxygen",320,264,24,"#2f5f3f","center",900))}},{id:"organizer",title:"Theme organizer",draw(n,e){fn(n,"#FFF9F0","#F4EAD2"),pn(n,"Finding the theme"),[["1. What happens?","#4F91C7"],["2. What changes?","#E07A66"],["3. Evidence","#88B89A"],["Theme","#8173AE"]].forEach(([t,i],s)=>{Wu(n,t,24+s*156,120,146,i,mn(e,s,.6))}),Ue(n,"Write the theme as a full sentence.",320,260,20,Ut,"center",800)}},{id:"bill-flow",title:"From bill to law",draw(n,e){fn(n,"#FFF3E0","#F6E4C5"),pn(n,"How a bill becomes a law"),["Idea","Bill","Committee","House","Senate","President","LAW"].forEach((t,i)=>{let s=20+i*88,r=mn(e,i,.45);Wu(n,t,s,150+i%2*50,84,i===6?"#E9515D":["#4F91C7","#88B89A"][i%2],r)}),Ue(n,"A veto can send the bill back to Congress",320,320,18,Ut,"center",800)}},{id:"orbit",title:"Gravity and orbits",draw(n,e){fn(n,"#14194a","#3b3a85"),pn(n,"Gravity keeps things in orbit"),Be(n,320,210,44,"#4F91C7"),n.strokeStyle="rgba(255,255,255,.4)",n.setLineDash([5,6]),n.beginPath(),n.ellipse(320,210,120,70,0,0,7),n.stroke(),n.setLineDash([]),Be(n,320+Math.cos(e)*120,210+Math.sin(e)*70,12,"#EDE2CF"),Ue(n,"Earth",320,215,16,"#fff","center",900),Ue(n,"Moon",320+Math.cos(e)*120,210+Math.sin(e)*70-20,14,"#fff","center",800)}},{id:"pizza-fraction",title:"Equivalent fractions",draw(n,e){fn(n,"#FFF3E0","#F6E4C5"),pn(n,"4/8 = 1/2"),[[8,4,190],[2,1,450]].forEach(([t,i,s],r)=>{let a=mn(e,r,.8);n.save(),n.globalAlpha=a;for(let o=0;o<t;o++){let l=o/t*Math.PI*2-Math.PI/2,h=(o+1)/t*Math.PI*2-Math.PI/2;nt(n,c=>{c.beginPath(),c.moveTo(s,200),c.arc(s,200,70,l,h),c.closePath()},o<i?"#E9515D":"#F6C45C",1.6,!1)}Ue(n,`${i}/${t}`,s,300,26,Ut,"center",900),n.restore()}),Ue(n,"=",320,215,44,Ut,"center",900)}}],$v="#6d5a5f",nm=Object.fromEntries(Xv.map(n=>[n.id,n]));var Fh=class{constructor(){this.cv=document.createElement("canvas");this.mode="idle";this.t=0;this.picId="";this.label={subject:"",lesson:""};this.onEnd=null;this.paused=!1;this.ended=!1;this.frame=0;this.cv.width=1280,this.cv.height=720,this.ctx=this.cv.getContext("2d"),this.tex=new Sn(this.cv),this.tex.colorSpace=wt,this.tex.anisotropy=8,this.tex.generateMipmaps=!1,this.tex.minFilter=Qt}idle(e=this.label.subject,t=this.label.lesson){this.label={subject:e,lesson:t},this.mode="idle",this.t=0,this.onEnd=null,this.video=void 0}title(e){this.mode="title",this.video=e,this.t=0,this.onEnd=null}pic(e){this.mode="pic",this.picId=e,this.t=0,this.onEnd=null}play(e,t){this.mode="video",this.video=e,this.t=0,this.ended=!1,this.onEnd=t??null}get length(){return this.video?Qa(this.video):0}get playing(){return this.mode==="video"&&!this.ended}update(e){this.paused||(this.t+=e);let t=this.ctx,i=1280,s=720;if(this.mode==="video"&&this.video){if(Kp(t,i,s,this.video,Math.min(this.t,this.length-.001)),!this.ended&&this.t>=this.length){this.ended=!0;let r=this.onEnd;this.onEnd=null,r?.()}}else if(this.mode==="title"&&this.video)Qp(t,i,s,this.video,this.t);else if(this.mode==="pic"){let r=nm[this.picId];t.save(),t.scale(2,2),r&&r.draw(t,this.t),t.restore()}else this.drawIdle(t,i,s);this.frame++,this.tex.needsUpdate=!0}drawIdle(e,t,i){let s=e.createLinearGradient(0,0,t,i);s.addColorStop(0,"#26406b"),s.addColorStop(1,"#4F91C7"),e.fillStyle=s,e.fillRect(0,0,t,i);for(let r=0;r<16;r++)e.fillStyle="rgba(255,255,255,.06)",e.beginPath(),e.arc((r*211+this.t*14)%(t+160)-80,r*97%i,40+r%5*22,0,7),e.fill();e.textAlign="center",e.fillStyle="#fff",e.font="900 84px system-ui,sans-serif",e.fillText("UNIFY ACADEMY",t/2,i/2-20),e.fillStyle="#F8D977",e.font="700 40px system-ui,sans-serif",e.fillText(this.label.lesson||"Class is about to begin",t/2,i/2+50),e.fillStyle="rgba(255,255,255,.7)",e.font="600 26px system-ui,sans-serif",e.fillText(this.label.subject.toUpperCase(),t/2,i/2+100)}};var Gr={adult:1.2,hs:1,g68:.86,g35:.74,k2:.6};var Bh=["down","up","left","right"],Nh=96,eo=156,Uh=3,sm=10,im=1.75/45,Lh={R:[8.2,-9.5],L:[-8.2,-9.5]},Vr={R:[5,-10],L:[-5,-10]},gi={stand:0,walk1:1,walk2:2,walk3:3,walk4:4,talkA:5,talkB:6,point:7,pointUp:8,write:9,present:10,hold:11},rm=[{},{moving:!0,walk:0},{moving:!0,walk:Math.PI/2},{moving:!0,walk:Math.PI},{moving:!0,walk:Math.PI*1.5},{mouth:.9,arms:{R:[11,-17],L:Lh.L}},{mouth:.3,arms:{R:[12,-22],L:[-10,-14]}},{arms:{R:[13.5,-20],L:Lh.L}},{arms:{R:[10,-30],L:Lh.L}},{arms:{R:[6,-29],L:Lh.L}},{mouth:.5,arms:{R:[12,-16],L:[-12,-16]}},{arms:{R:[8,-14],L:[-8,-14]}}],Hs={sit:0,writeA:1,writeB:2,raiseHalf:3,raiseFull:4,talk:5},qu=[{sitting:!0,arms:Vr},{sitting:!0,arms:{R:[4,-10],L:Vr.L}},{sitting:!0,arms:{R:[6.5,-9],L:Vr.L}},{sitting:!0,arms:{R:[8,-18],L:Vr.L}},{sitting:!0,arms:{R:[8,-33],L:Vr.L}},{sitting:!0,mouth:.7,arms:Vr}];function Yv(n,e){let t=document.createElement("canvas");t.width=Nh*e.length,t.height=eo*Bh.length;let i=t.getContext("2d");return Bh.forEach((s,r)=>e.forEach((a,o)=>{i.save(),i.translate(o*Nh+Nh/2,r*eo+eo-sm),i.scale(Uh,Uh),i.shadowColor="rgba(52,34,46,.35)",i.shadowBlur=2.2,i.shadowOffsetX=.5,i.shadowOffsetY=1.2,Ii(i,0,0,{...n,dir:s,moving:!1,walk:0,...a,turn:0},0),i.restore()})),t}function Oh(n,e,t,i){let s=new Sn(Yv(e,t));s.colorSpace=wt,s.repeat.set(1/t.length,1/Bh.length),s.anisotropy=4;let r=new yr({map:s,transparent:!0}),a=new ga(r),o=Gr[e.age??"hs"]??1;a.center.set(.5,sm/eo),a.scale.set(Nh/Uh*im*o,eo/Uh*im*o,1),n.add(a);let l=new ze(new en(1,.55),new un({map:i,transparent:!0,depthWrite:!1}));return l.rotation.x=-Math.PI/2,n.add(l),{sprite:a,mat:r,tex:s,poses:t.length,look:e,h:o,facing:new I(0,0,-1),pose:0,blob:l}}function Xu(n,e,t=0){let i=n.x*e.x+n.z*e.z,s=n.x*-e.z+n.z*e.x;return Math.hypot(i,s)<.001?t:Math.abs(i)>=Math.abs(s)?i>0?1:0:s>0?3:2}function $u(n,e,t){n.pose=e,n.tex.offset.set(e/n.poses,1-(t+1)/Bh.length)}var vt=-9,Zt=9,kt=-9.5,yt=9.5,zn=5.4,Yn=.3,Gh=-6.3,to=6,zh=8,no=1.95,om=-3.6,am=[-7.6,-5.7,-3.8,-1.9,1.9,3.8,5.7,7.6],Wr=n=>.14*n,Yu=n=>om+n*no,Zu=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Zv(n){let e=Yn*(1-Zu(Gh,Gh+.5,n)),t=om-no/2;for(let i=1;i<to;i++)e+=.14*Zu(t+i*no-.25,t+i*no+.25,n);return e}var Hh={podium:{x:-2.9,z:-5.5,face:[0,1]},center:{x:0,z:-5.2,face:[0,1]},screenL:{x:-4.7,z:-7.6,face:[1,-.1]},screenR:{x:4.1,z:-7.6,face:[-1,-.1]},boardL:{x:-6.2,z:-8.4,face:[0,-1]},boardR:{x:6.2,z:-8.4,face:[0,-1]},demo:{x:3.6,z:-5.2,face:[0,1]},aisleC:{x:0,z:-2.4,face:[0,1]},aisleL:{x:-8.35,z:.2},aisleR:{x:8.35,z:.2},mid:{x:0,z:1,face:[0,1]},midL:{x:-4.7,z:1.1},midR:{x:4.7,z:1.1},back:{x:0,z:7.8,face:[0,-1]}},Vh=class{constructor(e){this.host=e;this.scene=new Ts;this.camera=new Kt(58,1,.1,80);this.boardL=new Ja("left");this.boardR=new Ja("right");this.projector=new Fh;this.seats=[];this.subject="math";this.mode="wide";this.auto=!0;this.dim=0;this.dimT=0;this.yaw=0;this.pitch=0;this.free={yaw:0,pitch:.28,dist:14};this.screenK=0;this.screenRate=0;this.onTapStudent=()=>{};this.onTapTeacher=()=>{};this.onTapDemo=()=>{};this.onHover=()=>{};this.inputLocked=!1;this.keys={};this.blobTex=Ep();this.nav=[];this.cell=.25;this.nx=0;this.nz=0;this.camPos=new I(0,3.5,8.6);this.camLook=new I(0,2.5,-9);this.camFov=58;this.decor=new hn;this.demo=new hn;this.demoModel=null;this.demoMatClones=[];this.boardMats=[];this.t=0;this.last=performance.now();this.raycaster=new Cs;this.hoverT=0;this.tex=new Map;this.pointer={x:0,y:0,down:!1,sx:0,sy:0,st:0};this.frame=e=>{let t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.t+=t,this.boardL.update(t),this.boardR.update(t),this.projector.update(t),this.mode==="screen"&&(this.screenK=Math.min(1,this.screenK+t*this.screenRate)),this.dim+=(this.dimT-this.dim)*Math.min(1,t*1.6);let i=this.dim,s=this.lights;s.hemi.intensity=2-1.55*i,s.sun.intensity=1.1-.95*i,s.spot.intensity=70*i,s.beam.material.opacity=.075*i,s.glow.material.opacity=.1*i,s.ceil.color.setScalar(1-.78*i),this.scene.background.set("#EADFCB").multiplyScalar(1-.7*i);let r=1-.62*i;this.boardMats.forEach(h=>h.color.setScalar(1-.6*i)),this.updateTeacher(t);let a=new I;this.camera.getWorldDirection(a),a.y=0,a.lengthSq()<1e-4&&a.set(0,0,-1),a.normalize();for(let h of this.seats){let c=h.bb;if(!c.sprite)continue;c.sprite.visible=c.blob.visible=!0,c.mat.color.setScalar(r),h.handT+=t,h.actT-=t,h.actT<=0&&(h.actT=1.5+Math.random()*4,h.act=Math.random()<.28?1:0);let d=Hs.sit;h.hand===1?d=h.handT<.25?Hs.raiseHalf:Hs.raiseFull:h.act&&!h.player?d=Math.floor(this.t*2.2+h.c)%2?Hs.writeA:Hs.writeB:h.player&&(d=Hs.sit),$u(c,d,Xu(c.facing,a,1))}if(this.teacher.bb.mat.color.setScalar(1-.35*i),this.demoModel){this.demoModel.rotation.y+=t*.7;let h=this.demoModel.getObjectByName("moon");h&&h.position.set(Math.cos(this.t*1.3)*.6,0,Math.sin(this.t*1.3)*.6)}this.mode==="seat"||this.mode;let o=this.desired(),l=1-Math.exp(-t*(this.mode==="screen"?3.5:2.6));this.camPos.lerp(o.p,l),this.camLook.lerp(o.l,l),this.camFov+=(o.fov-this.camFov)*l,this.applyCam(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.frame)};let t=this.renderer=new kr({antialias:!0,alpha:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Pl,t.outputColorSpace=wt,e.appendChild(t.domElement),this.scene.background=new Xe("#EADFCB"),this.buildLights(),this.buildShell(),this.buildFront(),this.buildSeats(),this.buildStaticDecor(),this.scene.add(this.decor,this.demo),this.buildNav(),this.buildTeacher(Wi.math),this.bindInput(t.domElement),addEventListener("resize",()=>this.resize()),this.resize(),this.snapCamera(),requestAnimationFrame(this.frame)}T(e,t){let i=this.tex.get(e);return i||(i=t(),this.tex.set(e,i)),i}rep(e,t,i,s){let r=`${e}@${i}x${s}`,a=this.tex.get(r);return a||(a=this.T(e,t).clone(),a.wrapS=a.wrapT=is,a.repeat.set(i,s),a.needsUpdate=!0,this.tex.set(r,a)),a}resize(){let e=this.host.clientWidth||innerWidth,t=this.host.clientHeight||innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}std(e,t="#ffffff"){return new Mn({map:e,color:t,roughness:.95,metalness:0})}plain(e){return new Mn({color:e,roughness:1})}box(e,t,i,s,r,a,o,l={}){let h=new ze(new Mt(e,t,i),s);return h.position.set(r,a,o),h.castShadow=l.shadow??!0,h.receiveShadow=!0,(l.parent??this.scene).add(h),l.outline!==!1&&h.add(new va(new Ma(h.geometry),new xr({color:7166559,transparent:!0,opacity:.5}))),h}card(e,t,i,s,r,a,o,l=this.decor,h=!1){let c=new hn,d=new ze(new en(t*1.1,i*1.1),new un({map:this.T("cardsh",()=>Ap()),transparent:!0,opacity:.5,depthWrite:!1}));d.position.set(.03,-.05,0);let u=new ze(new en(t,i),h?new un({map:e,transparent:!0}):new Mn({map:e,roughness:1,transparent:!0}));return u.position.z=.02,u.receiveShadow=!0,c.add(d,u),c.position.set(s,r,a),c.rotation.y=o,l.add(c),u}buildLights(){let e=new Es(16774888,14996404,2),t=new As(16773336,1.1);t.position.set(-7,11,5),t.target.position.set(0,0,0),t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let i=t.shadow.camera;i.left=-13,i.right=13,i.top=14,i.bottom=-14,i.near=1,i.far=40,t.shadow.bias=-5e-4,t.shadow.radius=4;let s=new Da(16774102,0,30,Math.PI/5,.55,1.2);s.position.set(0,4.9,3.2),s.target.position.set(0,3,-9.4),this.scene.add(e,t,t.target,s,s.target);let r=new un({color:16777215}),a=new ze(new as(3.7,12.8,28,1,!0),new un({color:13625087,transparent:!0,opacity:0,depthWrite:!1,side:Un,blending:Er}));a.position.set(0,3.9,-3.2),a.rotation.x=-Math.PI/2+.07,a.scale.set(1,1,.6),this.scene.add(a);let o=new ze(new en(8,5),new un({color:10471423,transparent:!0,opacity:0,depthWrite:!1,blending:Er}));o.position.set(0,3.05,-9.3),this.scene.add(o),this.lights={hemi:e,sun:t,spot:s,ceil:r,beam:a,glow:o}}buildShell(){let e=this.scene,t=Zt-vt,i=yt-kt,s=this.plain("#F7ECD6"),r=this.plain("#D8C6A4"),a=new ze(new en(t,i),this.std(this.rep("wood",()=>Gp(),t/4,i/4)));a.rotation.x=-Math.PI/2,a.position.set(0,0,(kt+yt)/2),a.receiveShadow=!0,e.add(a);let o=new ze(new en(t,i),new Mn({map:this.rep("ceil",()=>zp(),t/3,i/3),roughness:1}));o.rotation.x=Math.PI/2,o.position.set(0,zn,(kt+yt)/2),e.add(o);let l=(d,u,f,g,y,p)=>{let m=this.std(this.rep(p,()=>_p(),d/4,1)),_=[r,r,s,r,r,r];_[y]=m,this.box(g?d:.3,zn,g?.3:d,_,u,zn/2,f,{outline:!1,shadow:!1})};l(t+.6,0,kt-.15,!0,4,"wallF"),l(t+.6,0,yt+.15,!0,5,"wallB"),l(i,vt-.15,(kt+yt)/2,!1,0,"wallL"),l(i,Zt+.15,(kt+yt)/2,!1,1,"wallR");let h=this.std(this.rep("stage",()=>Vu(),6,1));this.box(t,Yn,Gh-kt+0,[this.plain("#B98B5A"),this.plain("#B98B5A"),h,this.plain("#B98B5A"),this.plain("#9A653D"),this.plain("#9A653D")],0,Yn/2,(kt+Gh)/2);for(let d=1;d<to;d++){let u=Yu(d)-no/2,f=yt-u;this.box(t,Wr(d),f,[this.plain("#B8C9D6"),this.plain("#B8C9D6"),this.std(this.rep("rowc",()=>Vu(),6,1)),this.plain("#8aa1b3"),this.plain("#5E7F9D"),this.plain("#5E7F9D")],0,Wr(d)/2,u+f/2,{shadow:!1})}for(let d of[-1,1])this.box(.1,.22,i,this.plain("#9A653D"),d*(t/2-.05),.11,(kt+yt)/2,{outline:!1,shadow:!1});this.box(t,.22,.1,this.plain("#9A653D"),0,.11,kt+.05,{outline:!1,shadow:!1});let c=this.lights.ceil;for(let d=0;d<3;d++)for(let u=0;u<4;u++){let f=new ze(new en(2.4,1.1),c);f.rotation.x=Math.PI/2,f.position.set(-5.5+d*5.5,zn-.02,-6+u*4.6),e.add(f)}}buildFront(){let e=this.scene,t=kt+.06,i=h=>{let c=new un({map:h.tex,toneMapped:!1});return this.boardMats.push(c),c};for(let[h,c]of[[this.boardL,-6.2],[this.boardR,6.2]]){this.box(4,2.6,.12,this.plain("#9DA7AA"),c,2.9,t);let d=new ze(new en(3.7,2.31),i(h));d.position.set(c,2.9,t+.07),e.add(d),this.box(3.9,.12,.3,this.plain("#C9B28A"),c,1.56,t+.1,{outline:!1});for(let u=0;u<3;u++)this.box(.28,.06,.06,this.plain(["#2a5fa8","#c4463c","#2f7a52"][u]),c-1+u*.4,1.63,t+.16,{outline:!1,shadow:!1})}this.box(6.8,3.95,.16,this.plain("#313A3F"),0,3.05,t);let s=new ze(new en(6.4,3.6),new un({map:this.projector.tex,toneMapped:!1}));s.position.set(0,3.05,t+.09),e.add(s),this.screenMesh=s,this.box(7.2,.18,.28,this.plain("#9DA7AA"),0,5.1,t+.05);for(let h of[-1,1])this.box(.08,.8,.08,this.plain("#5b6a70"),h*3.1,4.7,t+.1,{outline:!1});this.box(.9,.34,.7,this.plain("#EDE2CF"),0,zn-.4,3.2);let r=new ze(new wn(.16,.16,.14,16),new un({color:13625087}));r.rotation.x=Math.PI/2,r.position.set(0,zn-.4,2.8),e.add(r),this.box(.06,.4,.06,this.plain("#9DA7AA"),0,zn-.2,3.2,{outline:!1}),this.box(1.9,.08,.85,this.std(Gu("#C98B4D")),-3,Yn+.78,-7.9);for(let[h,c]of[[-.85,-.35],[.85,-.35],[-.85,.35],[.85,.35]])this.box(.08,.76,.08,this.plain("#9A653D"),-3+h,Yn+.38,-7.9+c,{outline:!1});this.box(.5,.04,.34,this.plain("#9DA7AA"),-3.4,Yn+.84,-7.85),this.box(.5,.3,.04,this.plain("#313A3F"),-3.4,Yn+1.02,-8.03),this.box(.3,.34,.3,this.plain("#E07A66"),-2.4,Yn+.99,-7.9);let a=new hn;this.box(.06,3.2,.06,this.plain("#9DA7AA"),0,1.6,0,{parent:a,outline:!1});let o=new ze(new en(1.1,.7),new Mn({map:this.T("flag",()=>this.flagTex()),side:Un}));o.position.set(.58,2.8,0),a.add(o),a.position.set(8.2,Yn,-8.6),e.add(a),this.card(this.T("clock",()=>Tp()),.8,.8,0,5.1,kt+.2,0,e),this.card(this.T("bnr",()=>Vp("LEARN \u2022 ASK \u2022 DISCOVER","#E07A66")),4.6,.58,-6.2,4.52,kt+.12,0,e);let l=new ze(new en(7.6,2.8),this.std(this.rep("carpet",()=>Hu(),3,1)));l.rotation.x=-Math.PI/2,l.position.set(0,Yn+.012,-7),l.receiveShadow=!0,e.add(l)}flagTex(){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d");for(let s=0;s<7;s++)t.fillStyle=s%2?"#fff":"#D9564A",t.fillRect(0,s*23,256,23);t.fillStyle="#2b3a55",t.fillRect(0,0,110,92),t.fillStyle="#fff";for(let s=0;s<12;s++)t.beginPath(),t.arc(16+s%4*26,18+Math.floor(s/4)*26,5,0,7),t.fill();let i=new Sn(e);return i.colorSpace=wt,i}buildSeats(){let e=to*zh,t=new Mt(1.3,.07,.66),i=new Mt(1.2,.74,.06),s=new Mt(.62,.07,.55),r=new Mt(.62,.5,.06),a=this.desks=new ss(t,this.std(Gu("#D9A86B")),e),o=new ss(i,this.plain("#9A653D"),e),l=new ss(s,this.plain("#4F91C7"),e),h=new ss(r,this.plain("#4F91C7"),e),c=new ut,d=["#4F91C7","#E07A66","#88B89A","#EAB94E"],u=0;for(let f=0;f<to;f++)for(let g=0;g<zh;g++,u++){let y=am[g],p=Yu(f),m=Wr(f),_=new Xe(d[(f+g)%4]);c.makeTranslation(y,m+.77,p-.38),a.setMatrixAt(u,c),c.makeTranslation(y,m+.38,p-.62),o.setMatrixAt(u,c),c.makeTranslation(y,m+.42,p+.3),l.setMatrixAt(u,c),l.setColorAt(u,_),c.makeTranslation(y,m+.7,p+.58),h.setMatrixAt(u,c),h.setColorAt(u,_);let E=Oh(this.scene,{id:u,skin:"#f0c29b",hair:"#3a2a30",style:"crop",shirt:"#4f91c7"},qu,this.blobTex);E.sprite.visible=!1,E.blob.visible=!1,this.seats.push({r:f,c:g,x:y,z:p+.3,y:m+.44,bb:E,def:null,hand:0,handT:0,act:0,actT:Math.random()*4,player:!1})}for(let f of[a,o,l,h])f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f);this.playerSeat=this.seats[3*zh+3],this.playerSeat.player=!0}assign(e=[]){let t=[...e.map(s=>Ls[s]).filter(Boolean),...Ls.filter(s=>!e.includes(s.id))],i=0;for(let s of this.seats){if(this.disposeBB(s.bb),s.player)s.def=null,s.bb=this.mkSeatBB(s,{...pi(he.profile.avatar,11),tag:!1});else{let r=t[i++%t.length];s.def=r,s.bb=this.mkSeatBB(s,r.look)}s.hand=0,s.act=0}}mkSeatBB(e,t){let i=Oh(this.scene,t,qu,this.blobTex);return i.sprite.position.set(e.x,e.y,e.z),i.blob.position.set(e.x,e.y-.38,e.z+.05),i.blob.scale.set(.9,.9,1),i}disposeBB(e){this.scene.remove(e.sprite,e.blob),e.tex.dispose(),e.mat.dispose(),e.blob.material.dispose()}rebuildPlayer(){let e=this.playerSeat;this.disposeBB(e.bb),e.bb=this.mkSeatBB(e,{...pi(he.profile.avatar,11),tag:!1})}setHand(e,t){let i=this.seats.find(s=>s.def?.id===e);i&&(i.hand=t?1:0,i.handT=0)}setPlayerHand(e){this.playerSeat.hand=e?1:0,this.playerSeat.handT=0}seatedDefs(){return this.seats.filter(e=>e.def).map(e=>e.def)}seatOf(e){return this.seats.find(t=>t.def?.id===e)}buildStaticDecor(){let e=this.scene,t=this.decor,i=this.T("win",()=>Mp());for(let f of[-6.2,-2.6,1,4.6,7.8])this.card(i,1.9,2.4,vt+.17,2.95,f,Math.PI/2,e);[-6.4,-4.9,-3.4].forEach((f,g)=>this.card(this.T(`gal${g}`,()=>zu(g)),1.2,1.2,Zt-.17,2.7+g%2*.1,f,-Math.PI/2,e)),[[-1.9,2.3],[-.5,2],[1,2.5]].forEach(([f,g],y)=>this.card(this.T(`gal${y+3}`,()=>zu(y+3)),1.1,1.1,Zt-.17,g+.5,f,-Math.PI/2,e)),this.card(this.T("rules",()=>Pp()),1.5,2,Zt-.17,2.4,2,-Math.PI/2,e),this.card(this.T("cal",()=>Op()),1.1,1.4,Zt-.17,2.4,4,-Math.PI/2,e),this.card(this.T("quote",()=>Up("Every question is a good question.")),3.4,.85,0,3,yt-.2,Math.PI,e),this.card(this.T("abc",()=>Ip()),4.2,.55,vt+.17,4.25,1.4,Math.PI/2,e),this.card(this.T("nl",()=>Uu()),3.6,.75,Zt-.17,4.2,.8,-Math.PI/2,e);let r=(f,g,y,p,m)=>{let _=[15896446,15382862,9423336,11132096,12101850,15377842].map(P=>new Xe(P)),E=[],x=[],M=Math.hypot(y-f,p-g),T=Math.floor(M/.8),C=(y-f)/M,v=(p-g)/M;for(let P=0;P<T;P++){let S=.4+P*.8,D=f+C*S,B=g+v*S,k=_[P%6];E.push(D-C*.2,m,B-v*.2,D+C*.2,m,B+v*.2,D,m-.44,B);for(let O=0;O<3;O++)x.push(k.r,k.g,k.b)}let A=new Ot;A.setAttribute("position",new tt(E,3)),A.setAttribute("color",new tt(x,3)),e.add(new ze(A,new un({vertexColors:!0,side:Un})))};r(vt+.07,kt,vt+.07,yt,zn-.12),r(Zt-.07,kt,Zt-.07,yt,zn-.12),r(vt,yt-.07,Zt,yt-.07,zn-.12),[[-5,-5.5,"#F8D977"],[5,-5.5,"#F28F7E"],[-5,0,"#8FC9E8"],[5,0,"#A9DCC0"],[-5,5.5,"#B8A8DA"],[5,5.5,"#EAA5B2"]].forEach(([f,g,y])=>{let p=new ze(new It(.3,18,14),new Mn({map:Cp(y),emissive:new Xe(y),emissiveIntensity:.25,roughness:1}));p.scale.y=1.2,p.position.set(f,zn-1.1,g),p.castShadow=!0,e.add(p);let m=new ze(new wn(.008,.008,1,4),this.plain("#9A653D"));m.position.set(f,zn-.55,g),e.add(m)});let a=new hn;this.box(.5,1.6,3.6,this.plain("#C98B4D"),0,.8,0,{parent:a});for(let f=0;f<4;f++)this.box(.52,.05,3.6,this.plain("#9A653D"),0,.05+f*.45,0,{parent:a,outline:!1});let o=["#4F91C7","#E07A66","#88B89A","#EAB94E","#B8A8DA","#F28F7E","#8173AE"];for(let f=0;f<3;f++){let g=-1.6;for(let y=0;y<14;y++){let p=.16+y*37%5*.03;this.box(.34,.34-y%3*.04,p,this.plain(o[(y+f*2)%7]),0,.28+f*.45+.17-y%3*.02,g+p/2,{parent:a,outline:!1,shadow:!1}),g+=p+.01}}a.position.set(vt+.4,0,-6.2),e.add(a);let l=new ze(new It(.28,20,16),new Mn({map:this.globeTex(),roughness:.9}));l.position.set(vt+.46,1.78,-5.4),l.castShadow=!0,e.add(l),this.box(.06,.12,.06,this.plain("#9A653D"),vt+.46,1.54,-5.4,{outline:!1});let h=this.box(.5,.36,.4,new Mn({color:"#CFEFFB",transparent:!0,opacity:.55,roughness:.4}),vt+.46,1.56+.3,-7.2),c=new ze(new It(.09,12,10),this.plain("#E8C39A"));c.position.set(vt+.46,1.78,-7.2),e.add(c);for(let f=0;f<6;f++){let g=vt+1+f*1.2;this.box(1,1,.5,this.plain(["#F2A79B","#9CC3E0","#F4D488","#B7D8A4","#C9B7E8","#F6B294"][f]),g,.5,yt-.3),this.box(.8,.34,.04,this.plain("#fff6ea"),g,.78,yt-.07,{outline:!1,shadow:!1})}let d=this.card(this.T("door",()=>Sp("#8173AE")),1.5,2.6,Zt-1.6,1.3,yt-.12,Math.PI,e);this.card(this.T("exit",()=>wp("EXIT","#E07A66")),1,.25,Zt-1.6,2.8,yt-.12,Math.PI,e);let u=new ze(new wa(1.6,32),this.std(this.rep("rug2",()=>Hu(),2,2)));u.rotation.x=-Math.PI/2,u.position.set(vt+2,Wr(5)+.012,yt-1.4),e.add(u),[["#E07A66",-.5,.3],["#4F91C7",.5,-.3],["#88B89A",.2,.8]].forEach(([f,g,y])=>{let p=new ze(new It(.34,16,12),this.plain(f));p.scale.set(1,.6,1),p.position.set(vt+2+g,Wr(5)+.2,yt-1.4+y),p.castShadow=!0,e.add(p)});for(let[f,g]of[[vt+.8,kt+1],[Zt-.8,yt-.8],[vt+.8,yt-.8]])this.plant(f,Wr(g>4?5:0)+(g<-7?Yn:0),g)}plant(e,t,i){let s=new hn,r=new ze(new wn(.28,.2,.42,14),this.plain("#F28F7E"));r.position.y=.21,r.castShadow=!0,s.add(r);let a=["#5E9C72","#88B89A","#3F7655","#A9DCC0"];for(let o=0;o<9;o++){let l=o/9*Math.PI*2,h=new ze(new as(.09,.9+o%3*.2,4),this.plain(a[o%4]));h.position.set(Math.cos(l)*.16,.85,Math.sin(l)*.16),h.rotation.set(Math.sin(l)*.5,0,-Math.cos(l)*.5),h.castShadow=!0,s.add(h)}s.position.set(e,t,i),this.scene.add(s)}globeTex(){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d");t.fillStyle="#4F91C7",t.fillRect(0,0,256,128),t.fillStyle="#88B89A";for(let[s,r,a,o]of[[30,30,60,40],[100,24,70,36],[130,70,36,40],[190,36,50,34],[60,80,30,30]])t.beginPath(),t.ellipse(s+a/2,r+o/2,a/2,o/2,0,0,7),t.fill();let i=new Sn(e);return i.colorSpace=wt,i}setSubject(e,t){this.subject=e;for(let l of[...this.decor.children])this.decor.remove(l),l.traverse(h=>{h.geometry?.dispose?.()});let i=this.decor,s=this.T.bind(this),r=e==="math"?[["pn",Uu,3.6,.75,0],["bal",Ph,1.1,1.1,0]]:[],a=(l,h,c,d,u)=>this.card(l,h,c,vt+.17,u,d,Math.PI/2,i),o=(l,h,c,d,u)=>this.card(l,h,c,Zt-.17,u,d,-Math.PI/2,i);if(e==="math")a(s("wordw",()=>Rh()),1.7,1.28,-2.9,2.6),a(s("shapes",()=>Ph()),1.2,1.2,-.7,2.6),o(s("per",()=>Ou()),1.8,1.1,6,2.6);else if(e==="ela")a(s("wordw",()=>Rh()),1.7,1.28,-2.9,2.6),a(s("music",()=>Fp()),1.3,1.1,-.7,2.5),o(s("colors",()=>Lp()),1.3,1.3,6,2.6);else if(e==="science"){a(s("cellp",()=>Bp()),1.4,1.4,-2.9,2.6),a(s("per",()=>Ou()),1.8,1.1,-.7,2.6),o(s("wordw",()=>Rh()),1.7,1.28,6,2.6);for(let l=0;l<5;l++){let h=new ze(new It(.12+l%3*.06,14,10),this.plain(["#F6B294","#4F91C7","#E07A66","#EAB94E","#B8A8DA"][l]));h.position.set(-6+l*3,zn-.7-l%2*.5,-2.4),i.add(h);let c=new ze(new wn(.006,.006,.7,4),this.plain("#9DA7AA"));c.position.set(h.position.x,zn-.3-l%2*.1,-2.4),i.add(c)}}else a(s("tl",()=>Dp()),3.4,.55,-2.4,3.9),a(s("map",()=>kp()),1.9,1.15,-4.5,2.5),o(s("const",()=>Np()),1.1,1.45,6,2.6),a(s("br",()=>Ph()),1.2,1.2,0,2.5);this.buildDemo(t)}buildDemo(e){for(;this.demo.children.length;){let r=this.demo.children[0];this.demo.remove(r)}let t=new hn;this.box(.9,.9,.9,this.plain("#C98B4D"),0,.45,0,{parent:t}),this.box(1,.08,1,this.plain("#EDE2CF"),0,.94,0,{parent:t});let i=new ze(new en(.8,.2),new un({map:Hp("TRY IT","#E07A66"),transparent:!0}));i.position.set(0,.5,.46),t.add(i);let s=this.makeDemoModel(e);s.position.y=1.5,t.add(s),this.demoModel=s,t.position.set(3.6,Yn,-6.6),this.demo.add(t),t.isDemo=!0}makeDemoModel(e){let t=new hn,i=r=>new Mn({color:r,roughness:.9,flatShading:!0}),s=(r,a,o=0,l=0,h=0)=>{let c=new ze(r,i(a));return c.position.set(o,l,h),c.castShadow=!0,t.add(c),c};if(e==="parabola"){let r=[];for(let a=-10;a<=10;a++)r.push(new I(a*.05,a*a*.006,0));t.add(new ze(new Ra(new _r(r),32,.025,6),i("#E9515D"))),s(new It(.06,12,10),"#F8D977",0,0,0),t.position.y=-.1}else if(e==="fractions")for(let r=0;r<8;r++)s(new wn(.4,.4,.08,16,1,!1,r/8*Math.PI*2,Math.PI*2/8-.04),r<3?"#E9515D":"#F6C45C");else if(e==="egypt")for(let r=0;r<5;r++)s(new Mt(.9-r*.18,.16,.9-r*.18),"#E8C98A",0,r*.16-.3,0);else if(e==="cell"){s(new Mt(.8,.6,.8),"#A9DCC0").material=new Mn({color:"#A9DCC0",transparent:!0,opacity:.45}),s(new It(.2,12,10),"#CFE8F8",.05,0,0);for(let[r,a,o]of[[-.25,.15,.2],[.28,-.1,-.2],[.2,.2,.25]])s(new It(.08,10,8),"#5E9C72",r,a,o);s(new It(.07,10,8),"#B8A8DA",-.28,-.1,-.1)}else if(e==="photosynthesis"){s(new wn(.2,.15,.25,12),"#E07A66",0,-.35,0),s(new wn(.02,.02,.5,6),"#5E9C72",0,-.05,0);for(let r=0;r<4;r++){let a=s(new as(.1,.34,4),"#5E9C72",Math.cos(r*1.6)*.18,.1+r*.07,Math.sin(r*1.6)*.18);a.rotation.z=Math.cos(r*1.6)*.9,a.rotation.x=Math.sin(r*1.6)*.9}s(new It(.1,12,10),"#F8D977",.4,.4,0)}else if(e==="watercycle"){s(new It(.17,12,10),"#fff",-.12,.2,0),s(new It(.22,12,10),"#fff",.1,.24,0);for(let r=0;r<4;r++)s(new as(.04,.12,6),"#8FC9E8",-.2+r*.13,-.1-r%2*.12,0).rotation.z=Math.PI}else if(e==="gravity"){s(new It(.3,16,12),"#4F91C7");let r=s(new It(.1,12,10),"#EDE2CF",.6,0,0);r.name="moon"}else if(e==="printing"){s(new Mt(.7,.1,.5),"#6b3f28",0,-.35,0);for(let r of[-.28,.28])s(new Mt(.07,.6,.07),"#9A653D",r,-.05,0);s(new Mt(.7,.07,.1),"#9A653D",0,.27,0),s(new Mt(.4,.08,.3),"#9DA7AA",0,-.1,0)}else if(e==="bill"||e==="branches"||e==="election"){s(new Mt(.8,.3,.45),"#FFF9F0",0,-.25,0);for(let r=0;r<5;r++)s(new wn(.035,.035,.3,8),"#EDE2CF",-.28+r*.14,.05,.2);s(new It(.2,14,10,0,Math.PI*2,0,Math.PI/2),"#EDE2CF",0,.25,0)}else if(e==="silkroad")s(new It(.34,16,12),"#4F91C7"),s(new Ca(.4,.015,6,28),"#EAB94E").rotation.x=Math.PI/2,s(new Mt(.2,.12,.12),"#E9515D",.3,.1,.1);else if(e==="theme"||e==="figurative")s(new Mt(.4,.05,.55),"#E07A66",-.2,0,0).rotation.z=.25,s(new Mt(.4,.05,.55),"#4F91C7",.2,0,0).rotation.z=-.25;else if(e==="orchestra"||e==="rhythm"){s(new wn(.28,.28,.28,18),"#E9515D",0,-.2,0),s(new wn(.29,.29,.03,18),"#fff6ea",0,-.05,0);for(let r=0;r<3;r++)s(new It(.06,10,8),["#F8D977","#4F91C7","#88B89A"][r],-.25+r*.25,.25+r%2*.1,0)}else if(e==="colormix"||e==="perspective"){s(new wn(.4,.4,.05,24),"#E8C39A");for(let r=0;r<4;r++)s(new It(.08,10,8),["#E9515D","#F8D977","#4F91C7","#5FAE6A"][r],-.22+r*.15,.08,r%2*.1)}else s(new Aa(.3,0),"#B8A8DA");return t}buildNav(){let e=this.cell,t=this.nx=Math.ceil((Zt-vt)/e),i=this.nz=Math.ceil((yt-kt)/e),s=[],r=.12;for(let a=0;a<to;a++)for(let o=0;o<zh;o++){let l=am[o],h=Yu(a);s.push([l-.68-r,h-.76-r,l+.68+r,h+.62+r])}s.push([-4.1,-8.5,-1.9,-7.2],[3,-7.3,4.2,-6],[vt,-7.9,vt+1,-4.4],[7.7,-9.2,8.7,-8],[vt,8.1,vt+3.4,yt],[Zt-2.6,8.4,Zt,yt],[vt,8.5,Zt,yt-.2]),s[s.length-1]=[vt,9,Zt,yt],this.nav=Array.from({length:i},(a,o)=>Array.from({length:t},(l,h)=>{let c=vt+(h+.5)*e,d=kt+(o+.5)*e;return c<vt+.3||c>Zt-.3||d<kt+.4||d>yt-.3||s.some(u=>c>u[0]&&c<u[2]&&d>u[1]&&d<u[3])?"#":"."}).join(""))}tile(e,t){return{i:Math.max(0,Math.min(this.nx-1,Math.floor((e-vt)/this.cell))),j:Math.max(0,Math.min(this.nz-1,Math.floor((t-kt)/this.cell)))}}clear(e,t){let i=Math.ceil(Math.hypot(t.x-e.x,t.z-e.z)/.15);for(let s=1;s<i;s++){let r=e.x+(t.x-e.x)*s/i,a=e.z+(t.z-e.z)*s/i,o=this.tile(r,a);if(this.nav[o.j][o.i]==="#")return!1}return!0}buildTeacher(e){this.teacher&&this.disposeBB(this.teacher.bb);let t=Oh(this.scene,e.look,rm,this.blobTex),i=this.teacher?.pos??new I(Hh.center.x,Yn,Hh.center.z);this.teacher={bb:t,pos:i,path:[],face:new I(0,0,1),speed:0,talking:!1,mode:"idle",res:null,walkPh:0,faceTo:null,moving:!1}}setTeacher(e){this.buildTeacher(e)}walkTo(e,t){let i=this.teacher,s=typeof e=="string"?Hh[e]:e,r={x:s.x,z:s.z},a=t??(typeof e=="string"?Hh[e].face:void 0),o=this.tile(i.pos.x,i.pos.z),l=this.tile(r.x,r.z),h=up(this.nav,o.i,o.j,l.i,l.j),c=[{x:i.pos.x,z:i.pos.z},...h.map(u=>({x:vt+(u.x+.5)*this.cell,z:kt+(u.y+.5)*this.cell}))];if(h.length)c[c.length-1]=r;else if(o.i!==l.i||o.j!==l.j)return Promise.resolve();let d=[];for(let u=0;u<c.length-1;){let f=c.length-1;for(;f>u+1&&!this.clear(c[u],c[f]);)f--;d.push(c[f]),u=f}return i.path=d,i.faceTo=a?new I(a[0],0,a[1]).normalize():null,i.mode="idle",new Promise(u=>{i.res?.(),i.res=u,d.length||(i.res=null,u())})}setTeacherMode(e,t){let i=this.teacher;i.mode=e,t&&(i.faceTo=new I(t[0],0,t[1]).normalize())}setTalking(e){this.teacher.talking=e}get teacherMoving(){return this.teacher.path.length>0}updateTeacher(e){let t=this.teacher,i=!1;if(t.path.length){let l=t.path[0],h=l.x-t.pos.x,c=l.z-t.pos.z,d=Math.hypot(h,c),u=t.path.reduce((y,p,m)=>y+(m===0?d:Math.hypot(p.x-t.path[m-1].x,p.z-t.path[m-1].z)),0),f=Math.min(1.55,.35+u*.9);t.speed+=(f-t.speed)*Math.min(1,e*4);let g=Math.min(d,t.speed*e);if(d<.04||g>=d)t.pos.x=l.x,t.pos.z=l.z,t.path.shift();else{t.pos.x+=h/d*g,t.pos.z+=c/d*g;let y=new I(h/d,0,c/d);t.face.lerp(y,Math.min(1,e*8)).normalize()}if(i=!0,t.walkPh+=e*(3+t.speed*3.2),!t.path.length){t.speed=0;let y=t.res;t.res=null,y?.()}}else t.speed=0,t.faceTo&&t.face.lerp(t.faceTo,Math.min(1,e*6)).normalize();t.moving=i,t.pos.y=Zv(t.pos.z);let s=t.bb,r=new I;this.camera.getWorldDirection(r),r.y=0,r.lengthSq()<1e-4&&r.set(0,0,-1),r.normalize();let a=Xu(t.face,r,0),o=gi.stand;i?o=gi.walk1+Math.floor(t.walkPh)%4:t.mode==="write"?o=gi.write:t.mode==="point"?o=Math.abs(t.face.z)>.8?gi.pointUp:gi.point:t.mode==="present"?o=gi.present:t.mode==="hold"?o=gi.hold:t.talking&&(o=Math.floor(this.t*3.4)%2?gi.talkA:gi.talkB),i&&t.talking&&(o=gi.walk1+Math.floor(t.walkPh)%4),$u(s,o,a),s.sprite.position.copy(t.pos),s.blob.position.set(t.pos.x,t.pos.y+.02,t.pos.z)}setMode(e,t=!1){t&&(this.auto=!1),e==="screen"&&this.mode!=="screen"&&(this.screenK=0),this.mode=e}closeUpScreen(e){this.mode="screen",this.screenK=0,this.screenRate=1/Math.max(2,e)}setDim(e){this.dimT=e?1:0}desired(){let e=this.teacher.pos,t=new I,i=new I,s=56;switch(this.mode){case"wide":t.set(0,4.5,yt-.5),i.set(0,2.1,kt),s=64;break;case"follow":{let r=this.teacher.face,a=e.x*.55;t.set(a-r.x*1,e.y+2.5,Math.min(yt-1,e.z+6.2)),i.set(a,e.y+1.5,e.z-.3),s=56;break}case"board-left":t.set(-6,2.6,-3.8),i.set(-6.2,2.7,kt),s=44;break;case"board-right":t.set(6,2.6,-3.8),i.set(6.2,2.7,kt),s=44;break;case"screen":{let r=Zu(0,1,this.screenK);t.set(0,3.1-r*.15,2.8-r*4.8),i.set(0,3.05,kt),s=50-r*10;break}case"demo":t.set(3.6,2.25,-2.5),i.set(3.6,1.8,-6.6),s=46;break;case"seat":{let r=this.playerSeat;t.set(r.x,r.y+1.12,r.z+.06),i.set(r.x+Math.sin(this.yaw)*5,2.45+Math.tan(this.pitch)*6,r.z-Math.cos(this.yaw)*6),s=62;break}case"free":{let r=this.free;t.set(Math.sin(r.yaw)*Math.cos(r.pitch)*r.dist,2+Math.sin(r.pitch)*r.dist,-1.5+Math.cos(r.yaw)*Math.cos(r.pitch)*r.dist),t.z=Math.min(t.z,yt-.5),i.set(0,2.1,-1.5),s=56;break}}return{p:t,l:i,fov:s}}snapCamera(){let e=this.desired();this.camPos.copy(e.p),this.camLook.copy(e.l),this.camFov=e.fov,this.applyCam()}applyCam(){this.camera.position.copy(this.camPos),this.camera.fov=this.camFov,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.camLook)}bindInput(e){e.addEventListener("pointerdown",t=>{let i=this.pointer;i.down=!0,i.x=i.sx=t.clientX,i.y=i.sy=t.clientY,i.st=performance.now(),e.setPointerCapture(t.pointerId)}),e.addEventListener("pointermove",t=>{let i=this.pointer;if(i.down){let s=t.clientX-i.x,r=t.clientY-i.y;i.x=t.clientX,i.y=t.clientY,this.mode==="free"?(this.free.yaw-=s*.006,this.free.pitch=Math.max(.05,Math.min(1.1,this.free.pitch+r*.004))):this.mode==="seat"&&(this.yaw=Math.max(-.9,Math.min(.9,this.yaw-s*.004)),this.pitch=Math.max(-.3,Math.min(.35,this.pitch-r*.003)))}else if(performance.now()-this.hoverT>90){this.hoverT=performance.now();let s=this.pick(t.clientX,t.clientY);this.onHover(s?.label??null,t.clientX,t.clientY)}}),e.addEventListener("pointerup",t=>{let i=this.pointer,s=i.down;if(i.down=!1,s&&Math.hypot(t.clientX-i.sx,t.clientY-i.sy)<7&&performance.now()-i.st<500){let r=this.pick(t.clientX,t.clientY);r?.kind==="student"?this.onTapStudent(r.def):r?.kind==="teacher"?this.onTapTeacher():r?.kind==="demo"&&this.onTapDemo()}}),e.addEventListener("pointercancel",()=>{this.pointer.down=!1}),e.addEventListener("wheel",t=>{this.mode==="free"&&(t.preventDefault(),this.free.dist=Math.max(5,Math.min(18,this.free.dist*Math.exp(t.deltaY*.001))))},{passive:!1})}pick(e,t){let i=this.renderer.domElement.getBoundingClientRect(),s=new Me((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=[this.teacher.bb.sprite,...this.seats.filter(l=>!l.player).map(l=>l.bb.sprite)],a=this.raycaster.intersectObjects(r,!1);if(a.length){let l=a[0].object;if(l===this.teacher.bb.sprite)return{kind:"teacher",label:Wi[this.subject].name};let h=this.seats.find(c=>c.bb.sprite===l);if(h?.def)return{kind:"student",label:`${h.def.name} (grade ${h.def.grade})`,def:h.def}}return this.raycaster.intersectObjects(this.demo.children,!0).length?{kind:"demo",label:"Interactive 3D example: click to try"}:null}};var $i="#4A3B3F",Wh=(n,e,t,i)=>({t:n,x:e,y:t,pose:i}),re=(n,e,t,i="idle",s,r={})=>({role:n,keys:[Wh(0,e,t,i)],say:s,...r}),bs=(n,e,t,i,s,r,a,o="idle",l="idle",h)=>({role:n,keys:[Wh(0,e,t,o),Wh(r,e,t,o),Wh(a,i,s,l)],say:h}),H=(n,e,t,i=1,s={})=>({kind:n,x:e,y:t,s:i,...s}),ge=(n,e,t,i,s,r={})=>({dur:n,bg:e,cap:t,actors:i,props:s,...r}),sn=(n,e,t,i,s,r,a,o)=>({id:n,subject:e,lesson:t,tag:i,title:s,blurb:r,shots:a,discuss:o}),Jv=[sn("egypt","history","egypt","Ancient Egypt","Building the Great Pyramid","How thousands of workers raised a mountain of stone.",[ge(6.5,"desert","About 4,500 years ago, Egypt's pharaohs ordered giant stone tombs. Teams dragged huge blocks on wooden sledges.",[bs("worker",80,296,300,296,.4,5.5,"carry","carry"),bs("worker2",40,300,262,300,.4,5.5,"carry","carry"),re("architect",400,318,"point",[[1,4,"Pull together!"]])],[H("sledge",120,296,1.2,{to:[340,296],t0:.4,t1:5.5}),H("pyramid",500,300,1.2,{a:{p:.45}})],{zoom:[1,1.12]}),ge(6.5,"nile","Blocks were floated down the Nile when the river flooded, then hauled up ramps to the building site.",[re("architect",130,318,"point"),re("worker",540,322,"idle")],[H("boat",100,300,1.2,{to:[470,300],t0:.2,t1:6}),H("block",100,270,1.1,{to:[470,270],t0:.2,t1:6})]),ge(6.5,"desert","Architects planned every layer. Skilled workers were paid and fed, and they built the pyramid one level at a time.",[re("pharaoh",180,312,"talk",[[.5,5,"Make it reach the sky."]]),re("architect",260,318,"point"),bs("worker",560,300,400,300,.2,5,"carry","carry")],[H("scroll",220,330,1.2),H("pyramid",470,300,1.4,{a:{p:.85}}),H("block",560,300,1,{to:[420,300],t0:.2,t1:5})]),ge(7,"desert","The Great Pyramid took about 20 years to build and was the tallest structure on Earth for nearly 4,000 years.",[re("pharaoh",150,316,"cheer"),re("queen",230,320,"wave"),re("worker",90,326,"cheer"),re("architect",320,322,"point")],[H("pyramid",470,300,1.5,{a:{p:1}}),H("sun",560,60,.9)],{zoom:[1,1.15],pan:[320,180,400,160]})],["Look at the sledges and ramps. How would you move a block that heavy?","The Nile was like a highway for stone. Why build near a river?","Planning mattered. Notice the architect with the scroll.","Which jobs did you see? It took many different skills."]),sn("silkroad","history","silkroad","Trade routes","The Silk Road","Camels, caravans and the goods and ideas they carried.",[ge(6.5,"market","Silk was first made in China, and it was so valuable that traders carried it thousands of miles.",[re("merchant",200,300,"present",[[.6,5,"Finest silk in the land!"]]),re("trader",430,312,"idle")],[H("silk",120,292,1.4),H("silk",300,292,1.4),H("sack",540,300,1.2)]),ge(7,"desert","Caravans of camels crossed deserts and mountains, stopping at oases for water and rest.",[bs("trader",40,316,440,316,.2,6.6,"idle","idle"),bs("merchant",10,330,400,330,.5,6.6)],[H("camel",120,308,1.3,{to:[540,308],t0:.2,t1:6.6}),H("camel",30,330,1.1,{to:[440,330],t0:.8,t1:6.6})]),ge(7,"parchment","The Silk Road was a network of routes linking China, India, Persia, Arabia and Europe.",[re("narrator",90,328,"point")],[H("label",120,90,1.4,{a:{text:"CHANG'AN",col:"#9A653D",size:18}}),H("label",330,150,1.4,{a:{text:"SAMARKAND",col:"#9A653D",size:18}}),H("label",520,100,1.4,{a:{text:"BAGHDAD",col:"#9A653D",size:18}}),H("arrow",150,100,1,{a:{dx:140,dy:50,col:"#E9515D"}}),H("arrow",350,160,1,{a:{dx:140,dy:-50,col:"#E9515D"}}),H("label",330,300,1.2,{a:{text:"Goods, ideas and stories moved along the roads",col:$i,size:16}})]),ge(7,"market","Traders swapped silk, spices and paper, and ideas, inventions and religions traveled right along with them.",[re("trader",230,312,"talk",[[.5,3.5,"Spices for silk?"]]),re("merchant2",410,312,"talk",[[3.8,6.5,"Deal!"]])],[H("sack",160,300,1.2),H("silk",480,296,1.3),H("paper",320,330,1.2)])],["Why was silk so valuable? Think about how far it traveled.","Camels were perfect for deserts. What else made the trip hard?","Find the cities on the map. Which one is farthest east?","Trade moved more than goods. What else traveled?"]),sn("printing","history","printing","Inventions","The Printing Press","From hand-copied books to pages printed by the hundreds.",[ge(6.5,"scriptorium","Before 1440, every book was copied by hand. One book could take months.",[re("scribe",330,320,"write")],[H("book",330,300,1.4),H("quill",350,296,1.4),H("book",160,330,1),H("book",500,330,1)]),ge(6.5,"workshop","Around 1440, Johannes Gutenberg built a press with movable metal letters.",[re("printer",250,320,"present",[[.5,5,"Letters I can reuse!"]])],[H("press",420,320,1.4)]),ge(6.5,"workshop","Letters could be rearranged and reused, so a press could print hundreds of pages in a day.",[re("printer",270,322,"write")],[H("press",400,320,1.5),H("paper",560,320,1.3,{to:[560,320],t0:0,t1:2}),H("paper",520,330,1.3),H("paper",480,336,1.3)]),ge(7,"town","Books became cheaper, more people learned to read, and new ideas spread across Europe.",[re("citizen",160,306,"cheer"),re("citizen2",300,312,"talk",[[1,5,"I can read it myself!"]]),re("citizen3",450,308,"cheer")],[H("book",160,276,1.1),H("book",300,280,1.1),H("book",450,276,1.1)])],["Hand copying was slow. Why would books cost so much?","Movable letters can be rearranged. Why does that matter?","Count the pages piling up. What changed for readers?","More books meant more ideas. Can you think of a modern example?"]),sn("teaparty","history","teaparty","American colonies","The Boston Tea Party","A protest about taxes that helped start a revolution.",[ge(6.5,"street","In 1773, colonists in Boston were angry about taxes decided by a government where they had no vote.",[re("colonist",260,312,"talk",[[.5,5.5,"No taxation without representation!"]]),re("colonist2",400,318,"cheer"),re("colonist3",140,314,"cheer")],[]),ge(6.5,"harbor","Ships from Britain arrived carrying tea, and the tax on it stayed.",[re("colonist2",120,334,"point"),re("colonist",200,340,"idle")],[H("ship",430,296,1.1),H("crate",540,310,1.1),H("crate",500,310,1.1)]),ge(7,"night","On December 16, colonists boarded the ships and tossed 342 chests of tea into the harbor.",[re("colonist",230,330,"carry"),re("colonist2",310,334,"carry"),re("colonist3",150,336,"cheer")],[H("ship",480,300,1.1),H("crate",300,300,1.1,{to:[420,330],a:{arc:50},t0:.5,t1:2.5}),H("crate",240,300,1.1,{to:[380,334],a:{arc:60},t0:2,t1:4}),H("crate",330,300,1.1,{to:[450,336],a:{arc:50},t0:3.5,t1:5.5})]),ge(7,"street","The protest helped push the colonies toward the American Revolution.",[re("colonist",200,314,"point"),re("colonist3",330,318,"talk",[[1,5,"What will happen next?"]]),re("colonist2",450,314,"think")],[H("paper",330,282,1.4)])],["What did the colonists want? Listen to the words on the sign.","The tax stayed even though the tea was cheap. Why was that upsetting?","Protests can be peaceful or not. How would you describe this one?","How did one event change history?"]),sn("bill","history","bill","Government","How a Bill Becomes a Law","An idea travels through Congress to the President's desk.",[ge(6.5,"town","Every law starts with an idea. A citizen shares it with a representative.",[re("citizen",200,312,"talk",[[.5,5,"We need a crosswalk!"]]),re("senator",380,318,"idle")],[H("bulb",200,240,1.2)]),ge(6.5,"capitol","A member of Congress writes a bill and introduces it.",[re("senator",280,330,"present"),re("senator2",400,330,"idle")],[H("bill",330,296,1.6,{a:{label:"BILL"}}),H("podium",460,336,1.1)]),ge(7,"chamber","Committees study it. Then the House and the Senate debate and vote. Both must pass it.",[re("senator",160,300,"talk",[[.5,5,"Yea!"]]),re("senator2",330,304,"talk",[[2,6,"Yea!"]]),re("citizen3",500,300,"cheer")],[H("ballot",220,280,1.2,{to:[330,244],t0:.5,t1:3}),H("ballot",380,280,1.2,{to:[330,244],t0:2,t1:4.5}),H("gavel",330,250,1)]),ge(7,"office","The President signs it, and it becomes law. The President can also veto it.",[re("president",320,304,"write"),re("senator",180,322,"cheer")],[H("bill",330,280,1.4),H("stamp",440,310,1.3,{a:{label:"LAW"}})])],["Where did the idea come from? Ordinary citizens count.","What does a bill have to do before it becomes law?","Both chambers must pass it. Why two chambers?","The President can veto. What does veto mean?"]),sn("branches","history","branches","Government","Three Branches of Government","Who makes laws, who carries them out, and who decides what they mean.",[ge(6.5,"capitol","The Constitution divides power into three branches, so no one person has too much.",[re("narrator",110,330,"point")],[H("pillar",220,300,1.3,{a:{col:"#4F91C7",label:"LEGISLATIVE"}}),H("pillar",330,300,1.3,{a:{col:"#E07A66",label:"EXECUTIVE"}}),H("pillar",440,300,1.3,{a:{col:"#88B89A",label:"JUDICIAL"}})]),ge(6.5,"chamber","Legislative: Congress writes the laws.",[re("senator",220,306,"talk"),re("senator2",420,306,"talk")],[H("bill",320,280,1.5,{a:{label:"NEW LAW"}}),H("gavel",320,330,1.1)]),ge(6.5,"office","Executive: the President and agencies carry out the laws.",[re("president",300,306,"talk")],[H("flag",130,312,1.1),H("stamp",460,316,1.3,{a:{label:"SIGNED"}})]),ge(7.5,"court","Judicial: the courts decide what laws mean. Each branch checks the others.",[re("judge",320,292,"talk",[[.5,4,"Is it constitutional?"]])],[H("scales",170,326,1.1),H("gavel",470,326,1.1),H("arrow",240,120,1,{a:{dx:100,dy:0}}),H("arrow",420,150,1,{a:{dx:-100,dy:0}})])],["Why not give all the power to one person?","Congress writes the laws. How many chambers does it have?","The President carries out laws. Which job is the executive branch's?","Courts decide what laws mean. Can you explain checks and balances?"]),sn("election","history","election","Government","Election Day","How a community chooses its leaders.",[ge(6.5,"town","On Election Day, citizens walk to polling places in their communities.",[bs("citizen",20,312,360,312,.3,6,"idle","idle"),bs("citizen2",0,326,300,326,.8,6.2),bs("citizen3",40,336,420,336,1.2,6.4)],[]),ge(6.5,"polling","In a private booth, each voter marks a ballot. Your vote is secret.",[re("citizen",330,312,"write",[[.5,5,"I'm choosing carefully."]])],[H("booth",330,320,1.4),H("bill",400,300,1.2,{a:{label:"BALLOT"}})]),ge(6.5,"polling","Ballots go into a secure box or machine so every vote is counted once.",[re("citizen2",250,320,"carry"),re("citizen3",440,322,"cheer")],[H("ballotbox",340,330,1.6),H("ballot",260,280,1.4,{to:[340,282],a:{arc:24},t0:.4,t1:3})]),ge(7,"hall","Officials count every vote. The winner is the candidate with the most votes.",[re("narrator",120,330,"point"),re("senator",540,330,"cheer")],[H("tally",330,232,1.5,{a:{v:[.5,.9,.7]}})])],["Why do people walk to the polls together?","Why is the booth private? Think about fairness.","What happens to the ballots after they go in the box?","How is the winner decided?"]),sn("photosynthesis","science","photosynthesis","Plants","How Plants Make Food","Sunlight, water and air become sugar and oxygen.",[ge(6.5,"garden","Plants make their own food with a process called photosynthesis.",[re("scientist",160,322,"point")],[H("plant",400,330,1.7),H("sun",560,70,1)]),ge(6.5,"garden","They take in water through their roots and carbon dioxide through their leaves.",[re("scientist",130,326,"point")],[H("plant",400,330,1.7),H("drop",300,336,1.3,{to:[380,330],t0:0,t1:3}),H("drop",320,330,1.3,{to:[400,330],t0:2,t1:5}),H("co2",540,190,1.2,{to:[420,250],t0:.2,t1:3.5}),H("co2",560,150,1.2,{to:[430,240],t0:2,t1:5.5})]),ge(7,"garden","Chlorophyll inside the chloroplasts captures sunlight, and the energy turns water and carbon dioxide into sugar.",[re("scientist",140,326,"talk")],[H("plant",400,330,1.7),H("sun",540,80,1.1),H("arrow",500,120,1,{a:{dx:-70,dy:70,col:"#F8D977"}}),H("sugar",400,230,1.4)]),ge(7,"garden","The plant uses the sugar for energy, and releases oxygen that we breathe.",[re("scientist",150,326,"cheer")],[H("plant",400,330,1.9,{a:{g:1.2}}),H("o2",440,240,1.2,{to:[540,120],t0:0,t1:5}),H("o2",410,250,1.2,{to:[500,100],t0:1.5,t1:6}),H("sugar",400,250,1.4)])],["Plants make their own food. What do they need?","Where does the water come in? And the carbon dioxide?","Light is the energy source. Where is it captured?","What do we get from this? Breathe in..."]),sn("watercycle","science","watercycle","Earth science","The Water Cycle","Water travels from the sea to the sky and back again.",[ge(6.5,"landscape","The sun warms oceans and lakes, and water evaporates into vapor.",[re("scientist",110,322,"point")],[H("vapor",260,280,1.4),H("vapor",360,280,1.4),H("vapor",460,280,1.4),H("sun",90,70,.9)]),ge(6.5,"landscape","Rising vapor cools and condenses into tiny droplets that gather into clouds.",[re("scientist",110,322,"talk")],[H("cloud",330,90,1.8),H("cloud",450,110,1.5),H("vapor",280,250,1.3)]),ge(7,"landscape","When the droplets get heavy they fall as precipitation: rain, snow or hail.",[re("kid",200,322,"cheer")],[H("cloud",330,90,2),H("rain",290,120,1.2),H("rain",380,130,1.2)]),ge(7,"landscape","Water collects in rivers and oceans, and the cycle begins again.",[re("scientist",120,324,"present")],[H("arrow",150,270,1,{a:{dx:260,dy:20,col:"#fff"}}),H("arrow",520,250,1,{a:{dx:0,dy:-100,col:"#fff"}}),H("cloud",420,90,1.6)])],["What makes the water rise? Look at the sun.","Clouds are made of tiny droplets. How do they form?","Precipitation comes in different forms. Which have you seen?","Is water ever used up, or does it just move?"]),sn("gravity","science","gravity","Forces","Gravity: Why Things Fall","From a falling apple to the Moon's orbit.",[ge(6.5,"orchard","Scientists like Isaac Newton wondered why an apple always falls straight down.",[re("newton",200,316,"think",[[.6,4,"Why down, never up?"]])],[H("apple",150,150,1.1,{to:[190,296],t0:2.5,t1:4.2})]),ge(6.5,"orchard","Gravity is a force that pulls objects toward each other. Earth pulls everything toward its center.",[re("newton",240,316,"point"),re("kid",420,322,"cheer")],[H("ball",420,190,1.2,{to:[420,300],t0:.5,t1:2.5}),H("arrow",520,140,1,{a:{dx:0,dy:110,col:"#E9515D"}})]),ge(7,"space","Gravity also keeps the Moon orbiting Earth, and Earth orbiting the Sun.",[],[H("planet",320,190,2,{a:{col:"#4F91C7"}}),H("orbit",320,190,1.4,{a:{sp:1,col:"#EDE2CF"}}),H("planet",540,70,1,{a:{col:"#F8D977"}})]),ge(7,"park","The more mass an object has, the stronger its gravity. That's why the Moon's pull is weaker than Earth's.",[re("kid2",150,320,"cheer"),re("scientist",520,320,"point")],[H("trail",160,280,1,{a:{w:280,h:120,dur:4}})])],["Why do you think the apple fell downward?","What force pulls the ball down? Where does it point?","What keeps the Moon from drifting away?","Would you weigh less on the Moon? Why?"]),sn("cell","science","cell","Cells","Inside a Plant Cell","A tour of the tiny parts that keep a plant alive.",[ge(6.5,"lab","Plants are built from tiny building blocks called cells. We need a microscope to see them.",[re("scientist",200,316,"point")],[H("microscope",440,250,1.6),H("plant",100,250,.9)]),ge(6.5,"space","A cell wall gives the plant cell its shape and strength.",[],[H("cell",320,190,2.2),H("label",320,330,1.2,{a:{text:"CELL WALL",col:"#A9DCC0",size:26}})]),ge(7,"space","Chloroplasts are the green parts that capture light to make food.",[],[H("cell",320,190,2.2),H("label",320,330,1.2,{a:{text:"CHLOROPLASTS",col:"#8EE0A1",size:26}}),H("arrow",170,120,1,{a:{dx:60,dy:20,col:"#F8D977"}})]),ge(7,"space","The vacuole stores water and nutrients, keeping the cell firm.",[],[H("cell",320,190,2.2),H("label",320,330,1.2,{a:{text:"VACUOLE",col:"#CFE8F8",size:26}}),H("arrow",480,130,1,{a:{dx:-80,dy:40,col:"#F8D977"}})])],["Can we see cells without a microscope? Why not?","The wall is stiff. How does that help a plant stand up?","Where is the food factory in the cell?","What happens when the vacuole is full of water?"]),sn("orchestra","ela","orchestra","Music","Meet the Orchestra","Four families of instruments and the conductor who leads them.",[ge(6.5,"concert","An orchestra has four families of instruments. A conductor keeps everyone together.",[re("conductor",320,330,"conduct")],[H("baton",350,296,1.2),H("notes",320,240,1.2)]),ge(6.5,"concert","Strings, like the violin, make sound when a bow rubs across their strings.",[re("violinist",260,324,"play")],[H("violin",290,300,1.3),H("label",260,190,1.2,{a:{text:"STRINGS",col:"#fff",size:26}}),H("notes",260,260,1.2)]),ge(7,"concert","Woodwinds, like the flute, and brass, like the trumpet, are played by blowing air.",[re("flautist",200,326,"play"),re("trumpeter",440,326,"play")],[H("flute",230,300,1.2),H("trumpet",470,300,1.2),H("label",200,190,1,{a:{text:"WOODWINDS",col:"#fff",size:22}}),H("label",440,190,1,{a:{text:"BRASS",col:"#fff",size:22}})]),ge(7,"concert","Percussion, like drums, is struck or shaken. Together they blend into one big sound.",[re("drummer",330,326,"cheer"),re("conductor",160,330,"conduct"),re("violinist",500,330,"play")],[H("drum",380,320,1.3),H("label",330,190,1.2,{a:{text:"PERCUSSION",col:"#fff",size:24}}),H("notes",330,260,1.4)])],["Which family do you think is the loudest?","How do you make sound on a violin?","What do woodwinds and brass have in common?","Why does the orchestra need a conductor?"]),sn("rhythm","ela","rhythm","Music","Feel the Beat","Beat, rhythm and counting in four.",[ge(6.5,"studio","Rhythm is a pattern of long and short sounds. The beat is the steady pulse underneath.",[re("narrator",200,326,"point")],[H("metronome",380,326,1.5)]),ge(6.5,"studio","Count one, two, three, four, and clap on every beat.",[re("kid",180,320,"cheer",[[.5,1.5,"1"],[2,3,"2"],[3.5,4.5,"3"],[5,6,"4"]]),re("kid2",320,324,"cheer"),re("drummer",480,322,"play")],[H("drum",500,330,1.2),H("notes",330,250,1.2)]),ge(7,"studio","Notes tell us how long each sound lasts. A quarter note gets one beat.",[re("narrator",150,326,"talk")],[H("label",330,120,1.4,{a:{text:"\u2669 \u2669 \u2669 \u2669  = 4 beats",col:$i,size:30}}),H("label",330,180,1.1,{a:{text:"\u266B  two eighth notes = 1 beat",col:$i,size:22}})]),ge(7,"concert","When everyone keeps the same beat, the music comes together.",[re("drummer",220,326,"play"),re("flautist",340,324,"play"),re("violinist",460,326,"play")],[H("drum",250,320,1.1),H("notes",340,250,1.4)])],["What is the difference between beat and rhythm?","Can you clap along with the counting?","A quarter note gets one beat. How many are in this bar?","What happens if one player loses the beat?"]),sn("colormix","ela","colormix","Art","Mixing Colors","Primary colors make the rainbow.",[ge(6.5,"studio","Red, yellow and blue are the primary colors. You can't make them by mixing other colors.",[re("painter",200,326,"present")],[H("palette",400,290,1.5,{a:{cols:["#E9515D","#F8D977","#4F91C7"]}}),H("blob",300,330,1.6,{a:{col:"#E9515D"}}),H("blob",340,330,1.6,{a:{col:"#F8D977"}}),H("blob",380,330,1.6,{a:{col:"#4F91C7"}})]),ge(6.5,"studio","Mix two primaries and you get a secondary color. Red and yellow make orange.",[re("painter",160,326,"point")],[H("blob",260,300,2,{to:[340,300],a:{col:"#E9515D"},t0:.5,t1:3}),H("blob",420,300,2,{to:[340,300],a:{col:"#F8D977"},t0:.5,t1:3}),H("blob",340,300,2.4,{a:{col:"#F28F3E"},t0:3,t1:7})]),ge(7,"studio","Yellow and blue make green. Blue and red make purple.",[re("painter",160,326,"talk")],[H("blob",250,290,1.6,{a:{col:"#F8D977"}}),H("blob",300,290,1.6,{a:{col:"#4F91C7"}}),H("blob",275,330,2,{a:{col:"#5FAE6A"},t0:2.5,t1:7}),H("blob",410,290,1.6,{a:{col:"#4F91C7"}}),H("blob",460,290,1.6,{a:{col:"#E9515D"}}),H("blob",435,330,2,{a:{col:"#8173AE"},t0:4,t1:7})]),ge(7,"studio","Artists use color to show mood: warm colors feel cozy, cool colors feel calm.",[re("painter",200,326,"write")],[H("easel",360,330,1.8,{a:{draw:(n,e,t,i,s)=>{let r=n.createLinearGradient(0,t,0,t+s);r.addColorStop(0,"#F28F3E"),r.addColorStop(1,"#E9515D"),n.fillStyle=r,n.fillRect(e+2,t+2,i-4,s-4),n.fillStyle="#F8D977",n.beginPath(),n.arc(e+i/2,t+s*.55,12,0,7),n.fill()}}})])],["Which colors are primary? Can you mix them from others?","What did red plus yellow make?","Try predicting: what will blue plus red make?","Which colors feel warm here? Which feel cool?"]),sn("perspective","ela","perspective","Art","Drawing in Perspective","How artists make a flat page look deep.",[ge(6.5,"road","Perspective is a way to show depth, so a flat drawing looks three-dimensional.",[re("painter",200,320,"write")],[H("easel",360,332,1.6)]),ge(6.5,"road","Lines that go away from you meet at a point on the horizon called the vanishing point.",[re("narrator",120,330,"point")],[H("arrow",100,330,1,{a:{dx:190,dy:-170,col:"#fff"}}),H("arrow",560,330,1,{a:{dx:-190,dy:-170,col:"#fff"}}),H("label",320,130,1.1,{a:{text:"vanishing point",col:$i,size:22}})]),ge(7,"road","Objects that are farther away look smaller. Nearby objects look bigger.",[re("kid",120,340,"cheer",void 0,{s:1.2}),re("kid2",260,290,"cheer",void 0,{s:.85}),re("kid3",360,250,"cheer",void 0,{s:.6})],[]),ge(7,"street","Using perspective, the street seems to stretch far into the distance.",[re("painter",160,326,"present")],[H("easel",400,332,1.6)])],["What does perspective help an artist show?","Where do the lines meet?","Why does the child in the back look tiny?","Where do you see perspective in real life?"]),sn("parabola","math","parabola","Quadratics","A Ball Toss","The path of a tossed ball is a parabola.",[ge(6.5,"park","When you toss a ball, it flies along a curve called a parabola.",[re("kid",120,322,"cheer")],[H("trail",150,290,1,{a:{w:340,h:130,dur:4.5}})]),ge(6.5,"park","The highest point is the vertex. The axis of symmetry splits the path into two matching halves.",[re("teacher",90,326,"point")],[H("trail",150,290,1,{a:{w:340,h:130,dur:3,vertex:!0}})]),ge(7,"park","On a graph, an equation like y = -x\xB2 + 4 draws the very same curve.",[re("teacher",100,328,"talk")],[H("graph",400,260,1.8,{a:{k:.6,dur:4}})]),ge(7,"park","Change the numbers and the curve changes: wider, narrower, higher or lower.",[re("kid",110,322,"cheer"),re("kid2",540,326,"cheer")],[H("trail",130,290,1,{a:{w:380,h:70,dur:3}}),H("trail",130,290,1,{a:{w:280,h:160,dur:4}})])],["Where does the ball slow down and turn around?","Find the vertex and the axis of symmetry.","What do you notice about both sides of the curve?","What would a higher throw do to the parabola?"]),sn("fractions","math","fractions","Fractions","Sharing Pizza","Equal parts make fractions work.",[ge(6.5,"pizzeria","A fraction names equal parts of a whole. This pizza has 8 equal slices.",[re("kid",180,330,"point"),re("kid2",470,330,"cheer")],[H("pizza",330,270,1.4,{a:{n:8,ate:0}})]),ge(6.5,"pizzeria","One slice is one eighth of the pizza.",[re("kid",180,330,"cheer"),re("kid2",470,330,"talk",[[.5,5,"One eighth for me!"]])],[H("pizza",330,270,1.4,{a:{n:8,ate:1}}),H("label",330,340,1.2,{a:{text:"1/8",col:$i,size:40}})]),ge(7,"pizzeria","Four slices is four eighths, which equals one half.",[re("kid",180,330,"cheer"),re("kid2",470,330,"cheer")],[H("pizza",330,270,1.4,{a:{n:8,ate:4}}),H("label",330,340,1.2,{a:{text:"4/8 = 1/2",col:$i,size:34}})]),ge(7,"pizzeria","Fractions only work when the parts are equal, so cut carefully.",[re("chef",180,330,"point"),re("kid3",470,332,"think")],[H("pizza",330,270,1.4,{a:{n:6,ate:2}}),H("label",330,340,1.1,{a:{text:"2/6 = 1/3",col:$i,size:34}})])],["How many equal slices does the pizza have?","What fraction is one slice?","Why does 4/8 equal 1/2?","What goes wrong if the slices aren't equal?"]),sn("theme","ela","theme","Stories","The Tortoise and the Hare","Finding a story's theme with plot, change and evidence.",[ge(6.5,"meadow","First: what happens? A speedy hare challenges a slow tortoise to a race.",[re("narrator",90,336,"point")],[H("hare",190,312,1.4),H("tortoise",250,314,1.4)]),ge(6.5,"meadow","The hare races far ahead, then lies down for a nap.",[],[H("hare",200,312,1.4,{to:[440,306],t0:.3,t1:3}),H("tortoise",250,314,1.4,{to:[330,314],t0:.3,t1:6}),H("label",440,250,1,{a:{text:"zzz...",col:"#fff",size:26}})]),ge(7,"meadow","Next: what changes? The tortoise keeps going, and wins while the hare is still asleep.",[re("kid",520,330,"cheer")],[H("hare",440,306,1.4),H("tortoise",340,314,1.4,{to:[500,314],t0:.3,t1:5})]),ge(7,"meadow","Last: evidence. The hare quit trying but the tortoise never stopped, so the theme is: slow and steady wins.",[re("narrator",100,336,"talk")],[H("label",330,120,1.2,{a:{text:"THEME: slow and steady wins",col:$i,size:30}}),H("tortoise",480,314,1.4)])],["What is the problem at the start of the story?","What does the hare do wrong?","How does the ending differ from the beginning?","Which detail proves the theme?"]),sn("figurative","ela","figurative","Figurative language","Simile and Metaphor","Creative comparisons in two flavors.",[ge(6.5,"classroom","Figurative language compares things in creative ways to paint a picture with words.",[re("narrator",200,326,"present")],[H("label",330,90,1.3,{a:{text:"words that paint pictures",col:$i,size:26}})]),ge(6.5,"classroom","A simile compares using like or as. For example: busy as a bee.",[re("kid",200,326,"talk",[[.5,5,"I'm as busy as a bee!"]])],[H("bee",440,200,1.6),H("bee",500,230,1.2)]),ge(7,"classroom","A metaphor says one thing is another. For example: time is a thief.",[re("kid2",220,326,"talk",[[.5,5,"Time is a thief!"]]),re("kid3",420,332,"think")],[H("bubble",330,130,1.3,{a:{text:"Time IS a thief",col:"#8173AE"}})]),ge(7,"classroom","Remember: like or as means simile. is or are means metaphor.",[re("narrator",150,326,"point")],[H("label",330,110,1.2,{a:{text:"like / as  =  simile",col:"#E07A66",size:30}}),H("label",330,170,1.2,{a:{text:"is / are  =  metaphor",col:"#8173AE",size:30}})])],["What is being compared in 'busy as a bee'?","Which word tells you it is a simile?","A thief steals. What does that say about time?","Can you make up your own simile?"])],qh=Object.fromEntries(Jv.map(n=>[n.id,n]));var Ju=n=>new Promise(e=>setTimeout(e,n)),Xh=class{constructor(e,t){this.room=e;this.ui=t;this.tok=0;this.running=!1;this.skipReq=!1;this.stepNo=0}stop(){this.tok++,this.running=!1,this.room.setDim(!1),this.room.setTalking(!1),this.room.setTeacherMode("idle"),this.room.projector.idle(),this.ui.clearCaption()}skip(){this.skipReq=!0,this.room.projector.ended=!0;let e=this.room.projector.onEnd;this.room.projector.onEnd=null,e?.()}get T(){return Wi[this.lesson.subject]}ok(e){return e===this.tok}async say(e,t,i,s=0){if(!this.ok(e))return;i&&this.room.setMode(i);let r=Math.min(9e3,1700+t.length*48)+s;this.room.setTalking(!0),this.ui.caption(this.T.name,t,r),await this.wait(e,r),this.room.setTalking(!1)}async wait(e,t){let i=performance.now()+t;for(;this.ok(e)&&performance.now()<i&&!this.skipReq;)await Ju(60);this.skipReq=!1}async go(e,t,i){this.ok(e)&&await this.room.walkTo(t,i)}async strollSay(e,t,i,s){if(!this.ok(e))return;this.room.setMode("follow"),this.room.setTeacherMode("idle");let r=this.room.walkTo(t,s);await this.say(e,i),await Promise.race([r,Ju(5e3)])}async run(e){this.stop();let t=++this.tok;this.lesson=e,this.running=!0;let i=this.room,s=i.projector,r=5+e.videos.length+e.pics.length;this.stepNo=0;let a=d=>this.ui.step(d,++this.stepNo,r);i.setSubject(e.subject,e.lab.id),i.setTeacher(this.T),i.boardL.clear(),i.boardR.clear(),s.idle(e.subject,e.title),this.ui.setTitle(e.title),i.auto&&i.setMode("wide");let o=he.profile.name||"friend",l=he.peek(this.T.id),h=l?.met;if(a("Welcome"),await this.go(t,"center",[0,1]),i.setTeacherMode("idle",[0,1]),await this.say(t,`${h?"Welcome back":"Good morning"}, class. ${o}, ${h?"good to see you again.":"glad you're here."} ${e.intro}`,i.auto?"wide":void 0),a("Key points"),i.setMode(i.auto?"follow":i.mode),await this.go(t,"boardL",[0,-1]),!this.ok(t))return;i.setTeacherMode("write",[0,-1]),i.boardL.set(e.title,e.points.map(d=>({text:d}))),i.auto&&i.setMode("board-left");let c=i.boardL.write(24);if(this.ui.caption(this.T.name,"Let's write down what's important to know.",3e3),i.setTalking(!1),await Promise.race([c,this.wait(t,6e4)]),!!this.ok(t)&&(i.boardL.showAll(),i.setTeacherMode("point",[0,-1]),await this.say(t,"These are the points to remember. Copy them into your notes.",i.auto?"board-left":void 0,1200),a("Worked examples"),i.setTeacherMode("idle"),i.auto&&i.setMode("follow"),await this.go(t,"boardR",[0,-1]),!!this.ok(t)&&(i.setTeacherMode("write",[0,-1]),i.boardR.set("Examples",e.examples.map(d=>({text:d,kind:"example"}))),i.auto&&i.setMode("board-right"),this.ui.caption(this.T.name,"Now some examples so it sticks.",2600),await Promise.race([i.boardR.write(26),this.wait(t,7e4)]),!!this.ok(t)))){i.boardR.showAll(),i.setTeacherMode("point",[0,-1]),await this.say(t,e.examples[0],i.auto?"board-right":void 0,800),i.setTeacherMode("idle");for(let d of e.pics){if(!this.ok(t))return;a("Picture"),await this.go(t,"screenL",[1,-.1]),s.pic(d),i.setTeacherMode("point",[1,-.2]),i.auto&&i.setMode("follow"),await this.say(t,"Look at the screen. This picture shows it clearly.",void 0,2500),i.setTeacherMode("idle")}for(let d=0;d<e.videos.length;d++){if(!this.ok(t))return;let u=qh[e.videos[d]];if(!u)continue;if(a("Clip: "+u.title),await this.go(t,"screenL",[1,-.1]),!this.ok(t)||(s.title(u),i.setTeacherMode("point",[1,-.15]),i.auto&&i.setMode("follow"),await this.say(t,`We're going to watch a short clip: "${u.title}". ${u.blurb??""}`,void 0,2200),i.setTeacherMode("idle",[1,-.1]),await this.say(t,"Pay attention to the details. I'll talk through it as we go.",void 0,400),!this.ok(t)))return;i.setDim(!0),await this.wait(t,900);let f=Qa(u);i.auto&&i.closeUpScreen(f),s.play(u);let g=-1,y=new Promise(m=>{s.onEnd=m}),p=(async()=>{for(;this.ok(t)&&s.playing;){let m=kh(u,s.t).i;if(m!==g){g=m;let _=u.discuss?.[m];_&&(i.setTalking(!0),this.ui.caption(this.T.name,_,Math.min(8e3,kh(u,s.t).shot.dur*1e3)),setTimeout(()=>this.ok(t)&&i.setTalking(!1),3200))}await Ju(120)}})();if(await Promise.race([y,p]),await y,i.setTalking(!1),this.ui.clearCaption(),!this.ok(t))return;i.setDim(!1),i.setTeacherMode("idle"),s.idle(e.subject,e.title),i.auto&&i.setMode("follow"),await this.wait(t,1400),await this.strollSay(t,d%2?"midL":"midR",`So what did we see? ${u.discuss?.[u.discuss.length-1]??"Let's talk about it."}`)}a("Questions"),await this.strollSay(t,"aisleC","Let's check what you've got. Think about it, and raise your hand if you know."),this.ok(t)&&(i.auto&&i.setMode("follow"),await this.ui.ask("teacher"),this.ok(t)&&(await this.strollSay(t,"mid","Good. One more question from the class.",[0,1]),await this.ui.ask("npc"),this.ok(t)&&(a("Try it"),i.setTeacherMode("idle"),i.auto&&i.setMode("follow"),await this.go(t,"demo",[0,1]),i.setTeacherMode("point",[.8,.6]),this.ui.labReady(e.lab),await this.say(t,`${e.lab.title}: ${e.lab.intro} Click the 3D model or the Try it button.`,i.auto?"demo":void 0,2500),i.setTeacherMode("idle"),await this.go(t,"center",[0,1]),i.auto&&i.setMode("wide"),await this.say(t,`${e.wrap} Homework: ${e.homework}`,void 0,1500),he.edit(this.T.id,d=>{d.topics.push("lesson:"+e.id),d.topics.length>24&&d.topics.shift()}),this.running=!1,this.ui.step("Class dismissed. Ask questions or try the lab",r,r))))}}};var rn=n=>n,lm={math:[rn({id:"parabola",subject:"math",title:"Graphing a parabola",blurb:"Vertex, axis of symmetry and plotting.",pics:["parabola","orbit"],videos:["parabola"],points:["Parabola: the U-shaped curve of y = x\xB2","Vertex: the turning point (lowest or highest)","Axis of symmetry: the line that splits the curve in two matching halves","To graph: plot the vertex, find points, mirror them"],examples:["y = x\xB2: vertex (0, 0). x = 2 gives y = 4, and x = -2 gives y = 4 too.","y = (x - 3)\xB2: the curve slides 3 right, so the vertex is (3, 0).","A tossed ball follows a parabola. The top of its flight is the vertex."],lab:{id:"parabola",title:"Parabola Launcher",intro:"Shape the curve with the sliders so the ball lands on the targets. Watch the vertex and the axis of symmetry move."},intro:"Today we're graphing parabolas, the curve you see whenever something is thrown.",wrap:"Great work. Remember: find the vertex, use the axis of symmetry, then mirror your points.",homework:"Graph y = x\xB2 + 2 and label the vertex and axis of symmetry.",glossary:{vertex:"The vertex is the turning point of the parabola, its highest or lowest point.",parabola:"A parabola is the U-shaped curve you get from a squared term, like y = x squared.",axis:"The axis of symmetry is the vertical line through the vertex that splits the graph into matching halves.",symmetry:"Symmetry means one side is a mirror image of the other.",intercept:"An intercept is where the graph crosses an axis.",coordinate:"A coordinate is a pair like (3, 4): across, then up.",root:"A root, or zero, is an x value where the graph touches the x-axis."},whys:["It's symmetric because squaring makes a positive number and its negative give the same answer.","The vertex is the turning point because that's where the curve stops going down and starts going up.","Mirroring saves work: once you know one side, the other side is free."]}),rn({id:"fractions",subject:"math",title:"Fractions",blurb:"Equal parts of a whole.",pics:["fractions","pizza-fraction"],videos:["fractions"],points:["A fraction names equal parts of a whole","Numerator: how many parts we have","Denominator: how many equal parts in all","Equivalent fractions name the same amount: 4/8 = 1/2"],examples:["A pizza cut in 8: 3 slices is 3/8.","2/4 and 1/2 are equivalent: half the circle either way.","1/3 is bigger than 1/4: fewer cuts means bigger pieces."],lab:{id:"pizza",title:"Pizza Party",intro:"Serve each classmate exactly the fraction they ask for. Click the slices to hand them out."},intro:"Today: fractions. Parts of a whole, shared fairly.",wrap:"Nice sharing. Equal parts are what make fractions work.",homework:"Draw 3 shapes and shade 1/2, 1/4 and 3/4 of each.",glossary:{numerator:"The numerator is the top number: how many parts you have.",denominator:"The denominator is the bottom number: how many equal parts make the whole.",equivalent:"Equivalent fractions look different but are the same amount, like 2/4 and 1/2.",fraction:"A fraction is a number that names part of a whole.",whole:"The whole is the entire thing before it is divided."},whys:["The parts must be equal, otherwise 1/4 wouldn't always mean the same amount.","More pieces means smaller pieces, which is why 1/8 is smaller than 1/4.","Equivalent fractions work because cutting each piece in half doubles both numbers."]})],ela:[rn({id:"theme",subject:"ela",title:"Finding the theme",blurb:"Plot, change and evidence.",pics:["organizer"],videos:["theme"],points:["Ask: what happens? (the plot)","Ask: what changes? (the character or situation)","Back it up with evidence from the text","A theme is a message, written as a full sentence"],examples:["Theme: 'Slow and steady wins the race.'","Evidence: the hare quit trying, the tortoise never stopped.","Not a theme: 'friendship' (one word). A theme says something about it."],lab:{id:"cardsort",cfg:"tortoise",title:"Story Builder",intro:"Put the events of the story in order, then pick the theme the events prove."},intro:"Today we're finding themes: the big message hiding inside a story.",wrap:"Remember: plot, change, evidence, then state the theme in a sentence.",homework:"Write the theme of your favorite story in one sentence and add one piece of evidence.",glossary:{theme:"The theme is the big message or lesson of a story, written as a full sentence.",evidence:"Evidence is a detail or quote from the text that supports your idea.",plot:"The plot is the series of events in a story.",character:"A character is a person or creature in a story.",conflict:"Conflict is the problem or struggle that drives the story.",inference:"An inference is an idea you figure out from clues in the text."},whys:["We use evidence so the theme is something we can show, not just a guess.","Looking at what changes works because stories are about change, and the change points to the lesson.","A theme is a message the author wants us to take away."]}),rn({id:"figurative",subject:"ela",title:"Simile and metaphor",blurb:"Creative comparisons.",pics:["simile"],videos:["figurative"],points:["Figurative language paints pictures with words","Simile: compares using LIKE or AS","Metaphor: says one thing IS another","Use them to make writing vivid"],examples:["Simile: 'as busy as a bee.'","Metaphor: 'time is a thief.'","Simile: 'She runs like the wind.'"],lab:{id:"cardsort",cfg:"figurative",title:"Sort the Sayings",intro:"Drag each saying under Simile or Metaphor."},intro:"Today: figurative language, words that paint pictures.",wrap:"Like or as means simile. Is or are means metaphor.",homework:"Write two similes and two metaphors about your morning.",glossary:{simile:"A simile compares two things using 'like' or 'as.'",metaphor:"A metaphor says one thing is another to show a feeling, like 'Time is a thief.'",figurative:"Figurative language uses comparisons and imagery instead of literal meaning.",literal:"Literal means exactly what the words say.",imagery:"Imagery is language that appeals to the senses."},whys:["Comparisons help readers picture and feel something new.","Similes use like or as, so the comparison is easy to spot.","Metaphors feel stronger because they say one thing actually is the other."]}),rn({id:"orchestra",subject:"ela",title:"Music: the orchestra",blurb:"Instrument families.",pics:["staff"],videos:["orchestra"],points:["An orchestra has four instrument families","Strings: violin, cello (sound from a bow or plucking)","Woodwinds and brass: sound from blowing air","Percussion: struck or shaken. The conductor keeps everyone together"],examples:["Violin: strings. Flute: woodwind.","Trumpet: brass. Drum: percussion.","The conductor uses a baton to show the beat."],lab:{id:"cardsort",cfg:"orchestra",title:"Seat the Orchestra",intro:"Place each instrument in its family."},intro:"Welcome to music. Today we meet the orchestra.",wrap:"Four families, one conductor, one big sound.",homework:"Name two instruments from each family.",glossary:{conductor:"The conductor leads the orchestra and shows the tempo with a baton.",strings:"String instruments make sound from vibrating strings, like the violin.",woodwind:"Woodwinds make sound when air is blown across or through them, like the flute.",brass:"Brass instruments are blown through metal tubes, like the trumpet.",percussion:"Percussion instruments are struck or shaken, like drums.",orchestra:"An orchestra is a large group of musicians playing together."},whys:["Families group instruments by how they make sound.","A conductor keeps every player on the same beat.","Different sounds blend to make a fuller sound."]}),rn({id:"rhythm",subject:"ela",title:"Music: beat and rhythm",blurb:"Counting in four.",pics:["staff"],videos:["rhythm"],points:["Beat: the steady pulse of the music","Rhythm: the pattern of long and short sounds","Count 1-2-3-4 and clap on each beat","A quarter note gets one beat"],examples:["Clap on every beat: 1, 2, 3, 4.","Two eighth notes fit in one beat.","A metronome ticks the beat."],lab:{id:"beats",title:"Beat Pads",intro:"Hit the pads when the notes reach the line. Your classmate keeps the drum beat."},intro:"Today in music: feel the beat.",wrap:"Keep the steady beat and the rhythm will follow.",homework:"Clap the rhythm of your name.",glossary:{beat:"The beat is the steady pulse you can tap your foot to.",rhythm:"Rhythm is the pattern of long and short sounds.",tempo:"Tempo is how fast or slow the music goes.",note:"A note shows a sound and how long it lasts.",metronome:"A metronome ticks a steady beat."},whys:["A steady beat lets everyone play together.","Different note lengths make the rhythm interesting.","Tempo changes the mood: fast feels excited, slow feels calm."]}),rn({id:"colormix",subject:"ela",title:"Art: mixing colors",blurb:"Primary and secondary colors.",pics:["color-wheel"],videos:["colormix"],points:["Primary colors: red, yellow, blue","Mix two primaries for a secondary color","Red + yellow = orange. Yellow + blue = green. Blue + red = purple","Warm colors feel cozy, cool colors feel calm"],examples:["A sunset uses warm colors: red, orange, yellow.","The ocean uses cool colors: blue and green.","Adding white makes a color lighter."],lab:{id:"colormix",title:"Paint Mixer",intro:"Mix the paint to match each color swatch, then paint the cube."},intro:"Welcome to art. Today we mix colors.",wrap:"Three primaries can make a whole rainbow.",homework:"Paint a color wheel using only red, yellow and blue.",glossary:{primary:"Primary colors are red, yellow and blue. You cannot make them by mixing.",secondary:"Secondary colors are made by mixing two primaries: orange, green, purple.",warm:"Warm colors, like red and orange, feel cozy or energetic.",cool:"Cool colors, like blue and green, feel calm.",palette:"A palette is a board for mixing paint.",hue:"Hue is another word for color."},whys:["Primaries can't be made from other colors, so they're the starting point.","Mixing two primaries gives a secondary color halfway between them.","Artists use warm and cool colors to set the mood."]}),rn({id:"perspective",subject:"ela",title:"Art: perspective",blurb:"Making flat drawings look deep.",pics:["color-wheel"],videos:["perspective"],points:["Perspective makes a flat drawing look 3D","Lines going away meet at the vanishing point","Far things look smaller, near things look bigger","Overlap shows what is in front"],examples:["Railroad tracks meet at the horizon.","Trees in the distance look tiny.","A hand drawn over a face is closer than the face."],lab:{id:"cardsort",cfg:"perspective",title:"Near and Far",intro:"Sort the objects into foreground, middle and background."},intro:"In art today: perspective, the trick that makes a page look deep.",wrap:"Vanishing point, size change, overlap. Three tools for depth.",homework:"Draw a road that disappears into the distance.",glossary:{perspective:"Perspective is a way to show depth on a flat surface.",horizon:"The horizon is the line where the ground meets the sky.",vanishing:"The vanishing point is where lines going away from you appear to meet.",foreground:"The foreground is the part of a picture closest to you.",background:"The background is the part farthest away."},whys:["Our eyes see far things smaller, so drawings copy that.","Converging lines tell the brain something goes far away.","Overlapping shapes show which object is in front."]})],science:[rn({id:"cell",subject:"science",title:"Plant cells",blurb:"Wall, chloroplasts, vacuole.",pics:["plant-cell"],videos:["cell"],points:["Cells are the tiny building blocks of living things","Cell wall: stiff outer layer for shape and support","Chloroplasts: make food from sunlight","Vacuole: stores water and keeps the cell firm"],examples:["Crunchy celery has cells full of water in their vacuoles. Wilted celery has lost that water.","Leaves are green because cells hold many chloroplasts.","The cell wall is like a cardboard box around a water balloon."],lab:{id:"cell",title:"Cell Explorer",intro:"Rotate the plant cell, click the parts, then play the find-it challenge."},intro:"Let's shrink down and explore a plant cell.",wrap:"Wall, chloroplasts, vacuole: three parts, three jobs.",homework:"Draw a plant cell and label the wall, chloroplasts and vacuole.",glossary:{"cell wall":"The cell wall is the strong outer layer that supports and protects a plant cell.",chloroplast:"Chloroplasts are the green structures where photosynthesis happens.",vacuole:"The vacuole is a large storage sac that holds water and nutrients.",photosynthesis:"Photosynthesis is how plants turn sunlight, water and carbon dioxide into sugar and oxygen.",chlorophyll:"Chlorophyll is the green pigment that captures sunlight.",nucleus:"The nucleus is the control center that holds the cell's DNA.",cell:"A cell is the smallest living building block of an organism.",mitochondria:"Mitochondria release energy from food for the cell to use."},whys:["Plants need cell walls because they have no skeleton, so the walls hold them up.","Chloroplasts matter because they turn sunlight into sugar.","Vacuoles are big in plants because water pressure keeps stems standing."]}),rn({id:"photosynthesis",subject:"science",title:"Photosynthesis",blurb:"How plants make food.",pics:["photosynthesis"],videos:["photosynthesis"],points:["Plants make their own food: photosynthesis","Inputs: sunlight, water, carbon dioxide","Outputs: sugar (food) and oxygen","Chlorophyll in the chloroplasts captures the light"],examples:["A plant on a sunny windowsill grows toward the light.","Water goes up the roots, carbon dioxide comes in through the leaves.","The oxygen we breathe is made by plants and algae."],lab:{id:"photosynth",title:"Grow the Plant",intro:"Give your plant sunlight, water and carbon dioxide in the right balance and grow it tall."},intro:"Today's question: how does a plant eat?",wrap:"Sunlight, water, air in. Sugar and oxygen out.",homework:"Observe a plant for a week and record how it changes.",glossary:{photosynthesis:"Photosynthesis is how plants turn sunlight, water and carbon dioxide into sugar and oxygen.",chlorophyll:"Chlorophyll is the green pigment that captures sunlight.",glucose:"Glucose is the sugar plants make for energy.",oxygen:"Oxygen is the gas plants release that we breathe.","carbon dioxide":"Carbon dioxide is the gas plants take in from the air."},whys:["Plants can't hunt or eat, so they make food from light.","Light is the energy that powers the reaction.","Oxygen is a leftover the plant releases."]}),rn({id:"watercycle",subject:"science",title:"The water cycle",blurb:"Evaporation to rain.",pics:["water-cycle"],videos:["watercycle"],points:["Evaporation: the sun turns water into vapor","Condensation: vapor cools into clouds","Precipitation: rain, snow or hail falls","Collection: water gathers and the cycle repeats"],examples:["Puddles disappear on a sunny day: evaporation.","A cold glass 'sweats': condensation.","Rivers carry rain back to the sea."],lab:{id:"cardsort",cfg:"watercycle",title:"Order the Cycle",intro:"Put the stages of the water cycle in order."},intro:"Water is always moving. Let's follow it.",wrap:"Evaporate, condense, precipitate, collect, repeat.",homework:"Draw the water cycle and label four stages.",glossary:{evaporation:"Evaporation is when liquid water warms up and becomes a gas called vapor.",condensation:"Condensation is when vapor cools into tiny droplets, forming clouds.",precipitation:"Precipitation is water falling from clouds as rain, snow, sleet or hail.",vapor:"Vapor is water in gas form.",cycle:"A cycle is a series of steps that repeats."},whys:["The sun supplies the energy to lift water into the air.","Cold air at height cools the vapor, so it condenses.","Gravity pulls the heavy droplets down as rain."]}),rn({id:"gravity",subject:"science",title:"Gravity",blurb:"Why things fall and orbit.",pics:["orbit"],videos:["gravity"],points:["Gravity is a force that pulls objects together","Earth pulls everything toward its center","More mass means a stronger pull","Gravity keeps the Moon in orbit around Earth"],examples:["An apple falls straight down.","You'd weigh less on the Moon because it has less mass.","Without gravity the Moon would fly off into space."],lab:{id:"gravity",title:"Drop Zone",intro:"Pick a planet and an object, predict which lands first, then drop them."},intro:"Why does everything fall down? Today we explore gravity.",wrap:"Gravity pulls everything with mass.",homework:"Drop three objects from the same height and record what happens.",glossary:{gravity:"Gravity is the force that pulls objects with mass toward each other.",mass:"Mass is how much matter is in an object.",orbit:"An orbit is the curved path one object takes around another.",weight:"Weight is how hard gravity pulls on an object.",force:"A force is a push or a pull."},whys:["Earth is so massive that its pull is strong enough to keep us on the ground.","Without a push sideways, objects fall straight down.","The Moon moves sideways fast enough that it keeps missing Earth, which is an orbit."]})],history:[rn({id:"egypt",subject:"history",title:"Ancient Egypt: the pyramids",blurb:"Building a wonder.",pics:["pyramid","timeline"],videos:["egypt"],points:["Pyramids were royal tombs built about 4,500 years ago","Workers moved stone on sledges and boats along the Nile","Architects planned each layer carefully","The Great Pyramid took about 20 years"],examples:["Blocks floated down the Nile during the yearly flood.","Ramps helped workers raise blocks higher.","The Great Pyramid was the tallest structure for almost 4,000 years."],lab:{id:"pyramid",title:"Pyramid Builders",intro:"Click to place stone blocks layer by layer. Your classmates haul the blocks."},intro:"Today we travel to ancient Egypt to see how people built mountains of stone.",wrap:"Planning, teamwork and the Nile made it possible.",homework:"Draw a pyramid and label two ways workers moved the stone.",glossary:{pharaoh:"A pharaoh was the king or queen of ancient Egypt.",pyramid:"A pyramid is a huge stone tomb with triangular sides.",nile:"The Nile is the long river that gave Egypt water, food and a way to move stone.",sledge:"A sledge is a sled used to drag heavy loads.",architect:"An architect plans how a building will be built.",tomb:"A tomb is a place where a person is buried."},whys:["The Nile was the highway of Egypt, so building near it made moving stone easier.","Planning mattered because mistakes in huge blocks were costly.","Pyramids were built to protect the pharaoh in the afterlife."]}),rn({id:"silkroad",subject:"history",title:"The Silk Road",blurb:"Trade and ideas.",pics:["silk-map","timeline"],videos:["silkroad"],points:["A network of trade routes linking Asia, the Middle East and Europe","Silk, spices and paper traveled west","Caravans of camels crossed deserts","Ideas, religions and inventions traveled too"],examples:["Silk was made only in China at first.","Paper-making spread west along the routes.","Oasis towns grew rich from trade."],lab:{id:"cardsort",cfg:"silkroad",title:"Trade Match",intro:"Send each good to the city where it was famous."},intro:"Today: the Silk Road, history's great trading highway.",wrap:"Trade moves goods and ideas.",homework:"List three things traded and where each came from.",glossary:{caravan:"A caravan is a group of traders traveling together, often with camels.",oasis:"An oasis is a place in the desert with water.",trade:"Trade is exchanging goods or services.",silk:"Silk is a smooth fabric made from silkworm threads.",route:"A route is a path from one place to another."},whys:["Silk was rare and valuable, so people traveled far to trade for it.","Camels can go long distances without water.","When people meet to trade, they also share ideas."]}),rn({id:"printing",subject:"history",title:"The printing press",blurb:"Books for everyone.",pics:["press","timeline"],videos:["printing"],points:["Before 1440, books were copied by hand","Gutenberg built a press with movable metal letters","Letters could be rearranged and reused","Books got cheaper and more people learned to read"],examples:["A monk could spend months copying one Bible.","A press could print hundreds of pages a day.","News and new ideas spread across Europe faster."],lab:{id:"press",title:"Set the Type",intro:"Pick letters from the tray to spell each word, then pull the lever to print."},intro:"Today we meet the invention that changed how ideas travel.",wrap:"Movable type made knowledge cheaper and faster to share.",homework:"Explain in two sentences how the press changed reading.",glossary:{press:"A printing press stamps ink from letters onto paper.","movable type":"Movable type is letters that can be rearranged and reused.",gutenberg:"Johannes Gutenberg built the first European movable-type press around 1440.",scribe:"A scribe copied books by hand.",manuscript:"A manuscript is a handwritten book."},whys:["Reusing letters made printing far faster than hand copying.","Cheaper books meant more people could learn to read.","Faster printing helped ideas spread."]}),rn({id:"teaparty",subject:"history",title:"The Boston Tea Party",blurb:"A protest about taxes.",pics:["timeline"],videos:["teaparty"],points:["1773: colonists were taxed without a vote","'No taxation without representation'","Colonists threw 342 chests of tea into Boston Harbor","It helped push the colonies toward revolution"],examples:["The tax stayed on tea even though the price was low.","The protest was at night so colonists could act quickly.","Britain answered with harsh laws, which angered more colonists."],lab:{id:"cardsort",cfg:"teaparty",title:"Build the Timeline",intro:"Put the events leading to the Revolution in order."},intro:"Today: a night in Boston harbor that changed history.",wrap:"A protest about fairness helped start a country.",homework:"Write two sentences: why were colonists angry?",glossary:{colonist:"A colonist is a person who lives in a colony.",tax:"A tax is money people must pay to the government.",representation:"Representation means having people who speak and vote for you in government.",protest:"A protest is a public way to show disagreement.",revolution:"A revolution is a big change in government, often by force."},whys:["Colonists felt it was unfair to be taxed with no say in the decision.","Dumping the tea made a loud statement against the tax.","Britain's response pushed more colonists to side with the protesters."]}),rn({id:"bill",subject:"history",title:"Government: how a bill becomes a law",blurb:"From idea to law.",pics:["bill-flow"],videos:["bill"],points:["It starts with an idea from a citizen","A member of Congress introduces a bill","Committees study it, then the House and Senate vote","The President signs it into law or vetoes it"],examples:["A town wants a crosswalk. A representative writes a bill.","Both the House and Senate must pass the same bill.","If the President vetoes, Congress can override with a big vote."],lab:{id:"cardsort",cfg:"bill",title:"Bill to Law",intro:"Put the steps in order so the bill becomes a law."},intro:"Today: how an idea becomes a law.",wrap:"Idea, bill, committee, vote, signature.",homework:"Pick a rule you'd like in school and list the steps to make it a law.",glossary:{bill:"A bill is a proposed law.",congress:"Congress is the part of government that makes laws: the House and the Senate.",veto:"A veto is when the President refuses to sign a bill.",committee:"A committee is a small group that studies a bill.",law:"A law is a rule that everyone must follow.",amendment:"An amendment is a change or addition."},whys:["Many steps keep a law from passing without careful thought.","Two chambers means more voices check the idea.","The President's signature is the last check."]}),rn({id:"branches",subject:"history",title:"Government: three branches",blurb:"Checks and balances.",pics:["branches"],videos:["branches"],points:["Legislative (Congress): makes laws","Executive (President): carries out laws","Judicial (courts): decide what laws mean","Checks and balances: each branch limits the others"],examples:["Congress writes a law. The President signs it. Courts can say if it follows the Constitution.","The President can veto. Congress can override.","The Senate approves judges the President picks."],lab:{id:"cardsort",cfg:"branches",title:"Branch Sort",intro:"Drag each job to the branch that does it."},intro:"Today: why no one person holds all the power.",wrap:"Three branches keep power balanced.",homework:"Match five jobs to the right branch.",glossary:{legislative:"The legislative branch, Congress, makes laws.",executive:"The executive branch, led by the President, carries out laws.",judicial:"The judicial branch, the courts, decides what laws mean.",constitution:"The Constitution is the set of rules for how the government works.","checks and balances":"Checks and balances let each branch limit the power of the others."},whys:["Splitting power prevents any one person from becoming too strong.","Each branch can check the others, so mistakes can be fixed.","The Constitution spells out each branch's job."]}),rn({id:"election",subject:"history",title:"Government: election day",blurb:"How voting works.",pics:["bill-flow"],videos:["election"],points:["Citizens vote to choose leaders","A ballot is secret so people vote freely","Votes are counted by officials","The candidate with the most votes wins"],examples:["A class votes for a class pet.","A mayor wins by getting the most votes.","Every vote counts, even in close elections."],lab:{id:"vote",title:"Class Vote",intro:"Cast your vote for the class pet and see how your classmates vote."},intro:"Today: how a community makes a decision by voting.",wrap:"Voting gives everyone a say.",homework:"Ask three people what they'd vote for and tally the answers.",glossary:{ballot:"A ballot is the paper or screen where you mark your vote.",candidate:"A candidate is a person running for an office.",election:"An election is when people vote to choose leaders.",majority:"A majority is more than half of the votes.",poll:"A poll is where people vote, or a survey of opinions."},whys:["Secret ballots let people vote without pressure.","Counting every vote keeps the result fair.","Voting lets citizens help decide how they are governed."]})]},hm=Object.values(lm).flat();var ju=n=>{let e=lm[n],t=Math.floor(Date.now()/864e5);return e[t%e.length]};var um=n=>n==="k2"||n==="g35"?"young":n==="g68"?"mid":"teen",jv=(n,e)=>{n=n.slice();for(let t=n.length-1;t>0;t--){let i=Math.floor(e()*(t+1));[n[t],n[i]]=[n[i],n[t]]}return n},io=(n,e,t,i,s,r,a)=>{let o=jv([t,...i.slice(0,2)],s);return{subject:n,q:e,options:o,answer:o.indexOf(t),why:r,hint:a}};function Kv(n,e){let t=um(n),i=(l,h)=>l+Math.floor(e()*(h-l+1)),s=l=>{let h=new Set;for(;h.size<2;){let c=l+i(-4,4);c!==l&&h.add(c)}return[...h].map(String)};if(n==="k2"){let l=i(1,9),h=i(1,9);return io("math",`What is ${l} + ${h}?`,String(l+h),s(l+h),e,`${l} plus ${h} is ${l+h}.`,"Count up from the bigger number.")}if(n==="g35"){let l=i(3,9),h=i(3,9);return io("math",`What is ${l} x ${h}?`,String(l*h),s(l*h),e,`${l} groups of ${h} is ${l*h}.`,"Try skip counting.")}if(t==="mid"){let l=i(2,12),h=i(2,9),c=i(1,9);return io("math",`What is ${l} x ${h} + ${c}?`,String(l*h+c),s(l*h+c),e,`Multiply first: ${l*h}, then add ${c}.`,"Order of operations: multiply before adding.")}let r=i(2,6),a=i(2,9),o=i(1,9);return io("math",`Solve for x: ${r}x + ${o} = ${r*a+o}`,String(a),s(a),e,`Subtract ${o}, then divide by ${r}: x = ${a}.`,"Undo the + first, then undo the multiplication.")}var Qv={young:[["Which word is a noun?","puppy",["quickly","jump"]],["What is the opposite of 'hot'?","cold",["warm","red"]],["Which word rhymes with 'cat'?","hat",["dog","cup"]],["What punctuation ends a question?","?",[".","!"]],["Which is a complete sentence?","The dog ran.",["The big dog.","Ran fast."]],["Which word starts with a capital letter?","Monday",["tuesday","apple"],"Days of the week are capitalized."]],mid:[["Which word is an adverb?","slowly",["quiet","table"]],["'Brave' is a synonym for...","courageous",["afraid","tired"]],["What is the plural of 'mouse'?","mice",["mouses","meese"]],["A word that sounds the same but means something else is a...","homophone",["synonym","antonym"]],["Which sentence uses a metaphor?","Time is a thief.",["He ran like the wind.","The bus is late."]],["What is the main idea?","The big point of a text",["A small detail","The title font"]]],teen:[["What is a theme?","The central message of a story",["The main character","The setting"]],["Which is a primary source?","A diary written at the time",["A textbook summary","A movie about it"]],["What does 'foreshadowing' do?","Hints at later events",["Describes the setting","Ends the story"]],["Which word is an antonym of 'verbose'?","concise",["wordy","loud"]],["Which device is 'The wind whispered'?","Personification",["Simile","Hyperbole"]],["A thesis statement...","states your main argument",["lists your sources","ends the paper"]]]},ex={young:[["What do plants need to grow?","sunlight and water",["only candy","darkness"]],["Which is a solid?","ice",["steam","rain"]],["What is the big star in our sky by day?","the Sun",["the Moon","a planet"]],["Which animal is a mammal?","dolphin",["shark","trout"]],["What do we use our ears for?","hearing",["seeing","smelling"]],["How many legs does an insect have?","6",["8","4"]]],mid:[["What gas do plants take in?","carbon dioxide",["oxygen","helium"]],["What is the center of an atom called?","nucleus",["orbit","cell"]],["Which planet is closest to the Sun?","Mercury",["Venus","Mars"]],["Water boils at...","100 C",["50 C","0 C"]],["The powerhouse of the cell is the...","mitochondria",["nucleus","wall"]],["A hypothesis is...","a testable guess",["a final answer","a graph"]]],teen:[["What is the unit of force?","newton",["joule","watt"]],["DNA stands for...","deoxyribonucleic acid",["dynamic nuclear acid","double nitrogen atom"]],["Which is a chemical change?","rusting iron",["melting ice","tearing paper"]],["What does a catalyst do?","speeds up a reaction",["stops a reaction","adds mass"]],["Which wave needs a medium?","sound",["light","radio"]],["Natural selection favors...","traits that help survival",["the largest animals","the oldest animals"]]]},tx={young:[["What do we call a map's key?","legend",["story","title"]],["Who was the first U.S. president?","George Washington",["Abraham Lincoln","Benjamin Franklin"]],["Which is a continent?","Africa",["Texas","Pacific"]],["Long ago, people wrote with...","quill pens",["keyboards","tablets"]],["A community helper who fights fires is a...","firefighter",["baker","pilot"]],["What is a holiday for remembering history called?","a memorial day",["a snow day","a field trip"]]],mid:[["Ancient Egyptians built...","pyramids",["castles","skyscrapers"]],["What was the Silk Road?","a trade route",["a fabric","a river"]],["The printing press helped spread...","ideas and books",["weather news","ocean maps"]],["Which river was central to Egypt?","the Nile",["the Amazon","the Thames"]],["The Renaissance began in...","Italy",["Brazil","Japan"]],["A government where people vote is a...","democracy",["monarchy","empire"]]],teen:[["What did the Industrial Revolution change?","how goods were made",["the alphabet","the calendar"]],["The Magna Carta limited the power of...","the king",["the church","merchants"]],["Which event began in 1914?","World War I",["World War II","the Civil War"]],["What is a primary cause of the Cold War?","a clash of ideologies",["a flood","a gold rush"]],["The Constitution begins with...","We the People",["I the President","In God We Trust"]],["Which ancient civilization created democracy?","Athens",["Rome","Persia"]]]},cm={ela:Qv,science:ex,history:tx};function $h(n,e,t=Math.random){if(n==="math")return Kv(e,t);let i=um(e),s=cm[n][i][Math.floor(t()*cm[n][i].length)];return io(n,s[0],s[1],s[2],t,s[3])}var Jt=(n,e)=>e[Math.floor(n()*e.length)],gn=n=>n.charAt(0).toUpperCase()+n.slice(1),si={math:"math",ela:"reading and writing",science:"science",history:"history"},nx=["soccer","drawing","video games","reading","baking","music","dancing","robots","swimming","chess","skateboarding","gardening","photography","basketball"],ix=["pizza","tacos","pasta","sushi","pancakes","fried rice","burgers","dumplings"],sx=[["Why did the student eat their homework?","Because the teacher said it was a piece of cake!"],["What do you call a sleeping bull?","A bulldozer!"],["Why was the math book sad?","It had too many problems."],["What did the ocean say to the beach?","Nothing, it just waved."],["Why can't you trust atoms?","They make up everything!"],["What has hands but can't clap?","A clock!"],["Why did the scarecrow win an award?","He was outstanding in his field."],["What kind of tree fits in your hand?","A palm tree!"],["Why do bees have sticky hair?","Because they use honeycombs."],["What do you call cheese that isn't yours?","Nacho cheese!"]],qr={cheerful:{yes:["Yay!","Oh, totally!","Ooh!"],hm:["Hmm, let's see!","Good question!"],wow:["No way, that's awesome!","I love that!"],bye:["See you soon!","Bye bye, have a sunny day!"]},shy:{yes:["Um, yeah.","...Okay."],hm:["Uh... I think...","Hmm, um..."],wow:["Oh! Really? That's... nice.","Wow. Um, cool."],bye:["Um, bye.","Okay... see you."]},sporty:{yes:["Yep!","Heck yeah!"],hm:["Okay, huddle up.","Let me think, coach mode."],wow:["Let's gooo!","That's a W!"],bye:["Catch you on the field!","Hustle, hustle!"]},nerdy:{yes:["Correct.","Indeed."],hm:["Technically speaking,","Fun fact:"],wow:["Fascinating!","That's statistically cool."],bye:["Until next time. Cite your sources.","Farewell!"]},artsy:{yes:["Mm, yes.","Beautiful."],hm:["Let me paint you a picture...","Hmm, imagine this:"],wow:["That's so inspiring!","Oh, the colors in that!"],bye:["Stay colorful!","Goodbye, friend, go make something."]},funny:{yes:["Ha! Yes.","You bet."],hm:["Okay, hear me out.","So, plot twist:"],wow:["Shut the front door!","Okay that's actually hilarious."],bye:["I'd say 'break a leg' but we have PE next.","Later, alligator!"]},curious:{yes:["Ooh, yes!","Wait, really?"],hm:["Hmm, why though?","I wonder..."],wow:["Tell me more!","That is so interesting!"],bye:["I have so many more questions! Bye!","See you! Don't forget to ask 'why'."]},bossy:{yes:["Obviously.","Correct."],hm:["Listen.","Here's the plan:"],wow:["Good. I approve.","Not bad. Not bad at all."],bye:["Don't be late.","Dismissed! ...kidding. Mostly."]},dreamy:{yes:["Mm, yes...","Oh, yes."],hm:["I was just wondering...","Hmm, imagine..."],wow:["Ooh, that's like a story.","That sounds magical."],bye:["Goodbye... see you in the clouds.","Bye. I'll daydream about it."]},kind:{yes:["Of course!","Happy to!"],hm:["Let me think about it.","Good thought."],wow:["That's wonderful!","I'm so glad."],bye:["Take care of yourself!","Bye! I'm rooting for you."]}},dm=(n,e)=>{let t=Eh(n.spec).filter(i=>i.key!=="shoes");return Jt(e,t)},rx={how:"how our day was going",class:"school subjects",hobby:"hobbies",you:"each other's stories",food:"food",gossip:"the latest hallway news",joke:"a joke",help:"studying",quiz:"a quiz question",compliment:"style",invite:"hanging out"},Xr=class{constructor(e,t){this.npc=e;this.ctx=t;this.used=new Set;this.turns=0;this.history=[];this.waiting=null;this.r=Vi(e.id*977+Math.floor(Date.now()/6e4))}get feat(){return this._feat??(this._feat=dm(this.npc,Vi(this.npc.id*13+5)))}get mem(){return he.mem(this.npc.id)}get me(){return he.profile.name||"friend"}v(e,t={}){let i=this.npc,s=this.mem,r={me:this.me,first:i.first,grade:i.grade,hobby:s.facts.hobby??"",interest:i.interests[0],food:i.food,dream:i.dream,...t};return e.replace(/\{(\w+)\}/g,(a,o)=>r[o]??"")}pc(e){return this.v(e[this.npc.personality]??e.d)}flavor(e,t=.33){return this.r()<t?`${Jt(this.r,qr[this.npc.personality].yes)} ${e}`:e}reply(e,t={}){let i={text:e,options:t.options??this.menu(),mood:t.mood??"happy",delta:t.delta??0,end:t.end,quiz:t.quiz};return this.turns++,this.history.push({who:"npc",text:e}),Bs(this.npc.id,"npc",e),i.delta&&Nu(this.npc.id,i.delta),i}note(e){this.used.add(e),he.edit(this.npc.id,t=>{t.topics.push(e),t.topics.length>24&&t.topics.shift(),t.lastDay=gs(),t.lastAt=Date.now()})}greet(){let e=this.npc,t=this.mem,i=!t.met,s=Date.now()-t.lastAt,r=t.lastDay&&t.lastDay!==gs()?Math.max(1,Math.round((Date.parse(gs())-Date.parse(t.lastDay))/864e5)):0,a=this.me,o,l="happy",h=0,c=dm(e,this.r).phrase;if(i)o=this.pc({cheerful:`Hi hi! I'm ${e.first}! I'm in grade ${e.grade}. Are you new here? I love your ${Eh(he.profile.avatar).find(d=>d.key==="top")?.phrase??"style"}!`,shy:`Oh! Um... hi. I'm ${e.first}. ...Are you ${a}?`,sporty:`Hey! I'm ${e.first}. You look fast. You play anything?`,nerdy:`Hello. I'm ${e.first}, grade ${e.grade}. Did you know this hall has exactly 44 rows of tiles? ...Sorry. Hi.`,artsy:`Hi! I'm ${e.first}. I love the colors you're wearing. Is that on purpose?`,funny:`Hey, I'm ${e.first}. Don't worry, I'm funnier than I look.`,curious:`Hi! I'm ${e.first}! Wait, who are you? What do you like? Tell me everything!`,bossy:`Hi. I'm ${e.first}. I run the ${e.interests[0]} club. You should join.`,dreamy:`Oh... hi. I'm ${e.first}. I was just imagining we were all on a ship. Welcome aboard.`,kind:`Hi there! I'm ${e.first}. Welcome! Can I help you find anything?`,d:`Hi! I'm ${e.first}.`}),he.profile.name&&(o+=` Nice to meet you, ${a}!`),he.edit(e.id,d=>{d.met=!0,d.fr=Math.max(d.fr,2)}),he.profile.stats.talks++,h=1,l=e.personality==="shy"?"shy":"happy";else if(t.hurt>=2&&t.fr<12)o=this.pc({d:"Oh. Hi.",funny:"Oh. It's you. Hi, I guess.",kind:"Hi. I'm still a bit upset, but hi."}),l="annoyed";else{let d=Ns(t.fr),u=d==="best friend"?`There you are, ${a}! My favorite person!`:d==="close friend"?`${a}! I was hoping I'd see you!`:d==="friend"?`Hey ${a}!`:`Hi again, ${a}.`,f="";s<8*6e4&&t.lastAt?f=Jt(this.r,["Back so soon?","Missed me already?","Did you forget something?"]):t.lunchBuddy&&this.ctx.kind==="lunch"?f="Still on for lunch together?":t.facts.hobby&&this.r()<.6?f=`How's ${t.facts.hobby} going?`:t.facts.mood&&["sad","tired","nervous","stressed","worried","lonely"].includes(t.facts.mood)&&this.r()<.8?f=`Are you feeling less ${t.facts.mood} than last time?`:t.quiz.total>0&&this.r()<.5?f=t.quiz.right>=t.quiz.total/2?"You were so good at that quiz stuff last time.":"Want another try at those quiz questions?":t.topics.length?f=`Last time we talked about ${rx[t.topics[t.topics.length-1]]??"stuff"}. That was fun.`:f="";let g=this.ctx.place==="class"?Jt(this.r,["Shh! Whisper, the teacher is right there.","Psst, quietly!","Hi! Quick, before she looks over."]):r>=2?`It's been ${r} days!`:this.ctx.kind==="arrive"?Jt(this.r,["Morning already!","Ready for today?"]):this.ctx.kind==="lunch"?Jt(this.r,["I'm starving.","Lunch smells good today."]):this.ctx.kind==="dismiss"?"Almost time to go home!":this.ctx.kind==="class"?"Shouldn't we both be in class? ...I won't tell.":"";o=`${u} ${f||g}`.trim(),h=r?1:0,he.profile.stats.talks++}return he.edit(e.id,d=>{d.lastDay=gs(),d.lastAt=Date.now(),d.talks++}),this.reply(o,{mood:l,delta:h,options:this.menu()})}menu(){let e=this.npc,t=this.mem,i=[],s=(o,l)=>{i.length<5&&i.push({id:o,label:l})},a=[["how","How's your day going?",!0],["hobby","What do you do for fun?",!0],["class","What's your favorite subject?",!0],["you","Tell me about yourself",!0],["quiz","Quiz me!",e.personality==="nerdy"||e.personality==="curious"||t.fr>=10],["gossip","Heard anything interesting?",t.fr>=8],["compliment",`I like your ${this.feat.noun}`,!0],["food","What's your favorite food?",!0],["joke","Tell me a joke",e.personality==="funny"||t.fr>=6],["help","Can you help me study?",t.fr>=6],["invite","Want to eat lunch together?",t.fr>=12&&!t.lunchBuddy],["advice","I need some advice",t.fr>=15]].filter(([o,,l])=>l&&!this.used.has(o));return a.sort((o,l)=>(t.topics.lastIndexOf(o[0])+1||-1)-(t.topics.lastIndexOf(l[0])+1||-1)),a.slice(0,4).forEach(([o,l])=>s(o,l)),i.push({id:"bye",label:"See you later"}),i}back(e=[]){return[...e,...this.menu().filter(t=>!e.some(i=>i.id===t.id))].slice(0,5)}choose(e,t){let i=this.npc,s=this.mem,r=this.r,a=qr[i.personality],o=!this.used.has(e),l=h=>o?h:0;if(e.startsWith("ans"))return this.answer(Number(e.slice(3)));switch(this.history.push({who:"me",text:this.optLabel(e,t)}),Bs(i.id,"me",this.optLabel(e,t)),e!=="hobby_pick"&&e!=="food_pick"&&e!=="fav_pick"&&e!=="feel"&&this.note(e),e){case"bye":return this.reply(this.v(`${Jt(r,a.bye)} ${s.fr>=30?"Come find me later, "+this.me+"!":""}`).trim(),{end:!0,options:[]});case"how":{let h=this.ctx.kind==="arrive"?this.pc({cheerful:"Great! The bus was only a little loud today.",shy:"Okay... a little nervous about class, honestly.",sporty:"Pumped! I jogged here.",nerdy:"Productive. I reviewed my notes on the bus.",artsy:"Inspired! The light in this hallway is gorgeous.",funny:"Surviving! Barely. Breakfast was just a banana peel and hope.",curious:"So good! I've already asked three questions today.",bossy:"Busy. I've got a schedule to keep.",dreamy:"Floaty. I woke up from a really good dream.",kind:"Good! How about you?",d:"Pretty good!"}):this.pc({cheerful:"Awesome! How are you?",shy:"Fine... thanks for asking.",sporty:"Great, I've got practice later!",nerdy:"Well, my pencil snapped, but otherwise fine.",artsy:"Creative. I sketched a bird during snack.",funny:"My day is like a sandwich: mostly bread.",curious:"Curious as ever. And you?",bossy:"Efficient. And you?",dreamy:"Drifty, but nice.",kind:"I'm good, thank you! How are you doing?",d:"Good! You?"});return this.reply(`${h}`,{delta:l(1),options:[{id:"feel",label:"I'm doing great",data:"great"},{id:"feel",label:"A little tired",data:"tired"},{id:"feel",label:"Kind of nervous",data:"nervous"},{id:"feel",label:"Sort of sad",data:"sad"}]})}case"feel":{let h=String(t);he.learn("mood",h),he.edit(i.id,d=>{d.facts.mood=h});let c=h==="great"?this.flavor(Jt(r,["That's awesome, it's contagious!","Love that energy!","Good! Keep it going!"])):h==="tired"?this.pc({cheerful:"Aw, me too sometimes. Have some water and a snack!",shy:"Me too... maybe we can both sit quietly for a second.",sporty:"Shake it out! A few jumping jacks and you'll be good.",nerdy:"Sleep is scientifically important. Try going to bed earlier.",d:"Hang in there. Maybe a snack at lunch will help?"}):h==="nervous"?this.pc({cheerful:"You've totally got this! I believe in you!",shy:"Oh. I get nervous too. We can be nervous together.",sporty:"Deep breath. Treat it like the big game, you've trained for this.",nerdy:"Statistically, most of the things we worry about don't happen.",d:"It's okay to feel that way. One step at a time."}):this.pc({kind:"I'm sorry. Do you want to sit together for a bit? I'll listen.",funny:"Aw. Okay, emergency compliment: your whole vibe is great.",d:"I'm sorry you're sad. I'm here if you want to talk."});return this.reply(c,{delta:l(2)+1,mood:h==="sad"?"sad":"happy",options:this.back()})}case"class":{let h=i.favSubject,c=i.hardSubject,d={math:"numbers always make sense",ela:"stories take me places",science:"I get to find out how things work",history:"the past is full of surprises"}[h];return this.reply(this.v(`I love ${si[h]}. ${gn(d)}. ${si[c]===si[h]?"":`${gn(si[c])} is harder for me, though.`} What's yours?`),{delta:l(1),mood:"happy",options:["math","ela","science","history"].map(u=>({id:"fav_pick",label:gn(si[u]),data:u})).concat([{id:"back",label:"Not sure yet",data:""}])})}case"fav_pick":{let h=t;he.learn("favSubject",h),he.edit(i.id,d=>{d.facts.favSubject=h});let c=h===i.favSubject;return this.reply(c?this.v(`No way, ${si[h]} is my favorite too! We should study together sometime.`):h===i.hardSubject?this.v(`Really? ${gn(si[h])} is tough for me. Maybe you could help me!`):this.v(`${gn(si[h])}, nice! I'd like to hear more about that.`),{delta:c?4:2,mood:c?"excited":"happy",options:this.back()})}case"back":return this.reply(this.flavor("Okay! What else?"),{options:this.menu()});case"hobby":{let h=i.interests[0],c={soccer:"I practice every day after school.",chess:"I'm working on a new opening.",baking:"Yesterday I made lemon cookies.","robotics club":"We're building a robot that picks up balls.",dinosaurs:"My favorite is the Triceratops!",drawing:"I fill a notebook every week."}[h]??`I could talk about ${h} all day.`;return this.waiting="hobby",this.reply(this.v(`I'm really into ${h}. ${c} I also like ${i.interests[1]}. What about you?`),{delta:l(1),options:[...[i.interests[0],...nx.filter(d=>!i.interests.includes(d)).slice(0,3),"something else"].map(d=>({id:"hobby_pick",label:gn(d),data:d}))]})}case"hobby_pick":{let h=String(t).toLowerCase();if(this.waiting=null,h==="something else")return this.reply(this.flavor("Ooh, tell me what it is! Just type it below."),{options:this.menu(),mood:"excited"});he.learn("hobby",h),he.edit(i.id,d=>{d.facts.hobby=h});let c=i.interests.some(d=>d.includes(h)||h.includes(d));return this.reply(c?this.v(`No way, we like the same thing! ${Jt(r,a.wow)} We should do ${h} together sometime.`):this.v(`${gn(h)}? Cool! ${Jt(r,a.wow)} I've never really tried it. Maybe you can show me.`),{delta:c?5:2,mood:c?"excited":"happy",options:this.menu()})}case"you":{let h=Ns(s.fr),c=s.talks,d=h==="new face"?i.bio:h==="classmate"?`I live with ${i.pet??"my family"}${i.pet?"":", it's pretty loud"}, and I could eat ${i.food} every day.`:h==="friend"?`Someday I want to ${i.dream}. I haven't told many people that.`:h==="close friend"?`Okay, a secret: I ${i.quirk}. Everyone's noticed, I think.`:`You're my best friend, so... I ${i.secret}. Please don't tell.`;return this.reply(this.v(d),{delta:l(h==="new face"?1:2)+(c%3===0,0),mood:h==="best friend"?"shy":"happy"})}case"food":return this.waiting="food",this.reply(this.v(`Easy: ${i.food}! What's yours?`),{delta:l(1),options:[...ix.slice(0,4).map(h=>({id:"food_pick",label:gn(h),data:h})),{id:"food_pick",label:gn(i.food),data:i.food}].slice(0,5)});case"food_pick":{let h=String(t);return he.learn("food",h),he.edit(i.id,c=>{c.facts.food=h}),this.waiting=null,this.reply(h===i.food?this.v(`${gn(h)}! We have the same taste. Today's lunch better be good.`):this.v(`${gn(h)} is good too. I'd trade you some ${i.food} for it.`),{delta:h===i.food?4:1,mood:h===i.food?"excited":"happy",options:this.menu()})}case"gossip":return this.gossip(o);case"compliment":{let h=this.feat,c=this.pc({shy:`Oh! Um... thank you. I picked my ${h.phrase} myself.`,cheerful:`Aww, thanks! I love my ${h.phrase} too!`,artsy:`Thank you! My ${h.phrase} is part of my whole look.`,sporty:"Ha, thanks! Gotta look good when we win.",funny:`Thanks! My ${h.noun} has been told it's the best part of me.`,d:`Thanks! That's sweet. I like my ${h.phrase} too.`});return this.reply(c,{delta:l(3),mood:i.personality==="shy"?"shy":"happy"})}case"joke":{let[h,c]=Jt(r,sx),d=i.personality==="funny"?"Oh, I have SO many. ":i.personality==="shy"?"Um, okay... ":"";return this.reply(`${d}${h} ... ${c}`,{delta:l(2),mood:"excited",options:[{id:"laugh",label:"Ha! Good one"},{id:"groan",label:"*groan*"},...this.back().slice(0,3)]})}case"laugh":return this.reply(this.flavor(Jt(r,["I'm here all week!","I knew you'd get it.","That one never fails."])),{delta:2,mood:"excited"});case"groan":return this.reply(this.pc({funny:"Groans are the sound of success.",d:"Hey, comedy is hard!"}),{delta:0});case"help":{if(i.hardSubject&&this.r()<.5&&i.personality!=="nerdy"&&s.fr<30){let h=ms(i.bestFriend);return this.reply(this.v(`I'm better at ${si[i.favSubject]}. If you need ${si[i.hardSubject]}, ask ${h?.first??"Ms. Brown"}. Want me to quiz you on ${si[i.favSubject]} instead?`),{delta:l(1),options:[{id:"quiz",label:"Sure, quiz me"},...this.back().slice(0,3)]})}return this.choose("quiz")}case"quiz":{let h=he.profile.avatar.age,c=r()<.7?i.favSubject:["math","ela","science","history"][Math.floor(r()*4)];return this.quiz=$h(c,h,r),this.waiting="quiz",this.reply(this.v(`Okay, ${si[c]} time! ${this.quiz.q}`),{delta:0,mood:"excited",quiz:this.quiz,options:this.quiz.options.map((d,u)=>({id:`ans${u}`,label:d}))})}case"invite":{let h=i.personality==="shy"?25:12;return s.fr>=h?(he.edit(i.id,c=>{c.lunchBuddy=!0}),this.reply(this.pc({shy:"Really? Um... yes. I'd like that.",d:`Yes! I'll save you a seat at lunch. ${i.food[0].toUpperCase()+i.food.slice(1)} for both of us!`}),{delta:4,mood:"excited",options:this.back()})):this.reply(this.pc({shy:"Um... maybe after we know each other better? Sorry.",d:"Maybe soon! Let's hang out a bit more first."}),{delta:0,mood:"shy",options:this.back()})}case"advice":{let h=this.pc({cheerful:"Smile at three people today. It really works.",shy:"Taking a deep breath before talking helps me. And writing notes.",sporty:"Warm up before big things. Even a test.",nerdy:"Make a study schedule. Fifteen minutes a day beats a panic night before.",artsy:"Doodle when you feel stuck. Your brain loosens up.",funny:"If all else fails, laugh at it. Then try again.",curious:"Ask more questions. Nobody minds, honestly.",bossy:"Make a list. Do the hardest thing first.",dreamy:"Look out a window for a minute. Then you'll know what to do.",kind:"Be gentle with yourself. And ask for help, it's brave.",d:"Take it one step at a time."});return this.reply(h,{delta:l(2),options:this.back()})}case"chatter_pick":return this.reply("Okay!",{options:this.menu()});default:return this.reply(this.flavor("Hm, I'm not sure what to say to that."),{options:this.menu(),mood:"neutral"})}}optLabel(e,t){return typeof t=="string"&&t?gn(t):this.menu().find(i=>i.id===e)?.label??e}answer(e){let t=this.quiz,i=this.npc;this.quiz=void 0,this.waiting=null;let s=e===t.answer;return he.edit(i.id,r=>{r.quiz.total++,s&&(r.quiz.right++,r.helped++)}),he.profile.stats.quizTotal++,s&&he.profile.stats.quizRight++,he.save(),this.history.push({who:"me",text:t.options[e]??"..."}),Bs(i.id,"me",t.options[e]??"..."),s?this.reply(this.v(`${Jt(this.r,qr[i.personality].wow)} Yes, "${t.options[t.answer]}"! ${t.why??""}`),{delta:3,mood:"excited",options:[{id:"quiz",label:"Another one!"},...this.menu().slice(0,3)]}):this.reply(this.v(`Almost! The answer is "${t.options[t.answer]}". ${t.why??""} ${i.personality==="kind"?"That's a tricky one.":"Don't worry, you'll get the next one."}`),{delta:1,mood:"neutral",options:[{id:"quiz",label:"Try another"},...this.menu().slice(0,3)]})}gossip(e){let t=this.npc,i=this.r,s=ms(t.bestFriend),r=t.rival!=null?ms(t.rival):null,a=Jt(i,Ls),o=[],l=Ls.filter(d=>d.id!==t.id&&(he.peek(d.id)?.fr??0)>=30);l.length&&o.push("opinion"),s&&o.push("friend"),r&&o.push("rival"),o.push("quirk","new");let h=Jt(i,o),c="";if(h==="opinion"){let d=Jt(i,l);c=`${d.first} told me you're really nice. ${d.first} remembers that you ${he.peek(d.id).quiz.right>0?"helped with a quiz":"said hi"}.`}else if(h==="friend"&&s)c=`${s.first} and I are working on ${t.interests[0]} together. ${s.first} ${s.quirk}, which is funny.`;else if(h==="rival"&&r)c=`${r.first} and I are kind of competing this week. Please don't tell ${r.first}. ${r.first} ${r.quirk}.`;else if(h==="quirk")c=`${a.first} ${a.quirk}. Have you noticed?`;else{let d=Eh(a.spec).find(u=>u.key==="hat"||u.key==="glasses"||u.key==="hair");c=`${a.first} showed up with ${d.phrase} today. Everyone's talking about it.`}return this.reply(this.pc({shy:`Um... don't tell anyone, but ${c}`,funny:`Okay, hot gossip, ${this.me}: ${c}`,d:c}),{delta:e?1:0,mood:"happy"})}say(e){if(e=e.trim().slice(0,240),!e)return this.reply("...?",{mood:"neutral"});let t=this.npc,i=e.toLowerCase(),s=this.r;if(this.history.push({who:"me",text:e}),Bs(t.id,"me",e),this.waiting==="quiz"&&this.quiz){let d=this.quiz.options.findIndex(u=>i.includes(u.toLowerCase()));if(d>=0)return this.answer(d)}let r=i.match(/(?:my name is|call me|i'?m called)\s+([a-z][a-z'-]{1,16})/);if(r){let d=gn(r[1]);return he.setProfile({name:d}),this.reply(this.v(`Nice to meet you, ${d}! I'll remember that.`),{delta:2,mood:"excited"})}let a=i.match(/\bi(?:'m| am| feel| feeling)\s+(?:so |really |kind of |a little |very )?(sad|happy|tired|nervous|scared|excited|angry|bored|hungry|sick|lonely|stressed|worried|great|good|fine|okay|proud)\b/);if(a){let d=a[1];return this.choose("feel",["happy","excited","great","good","fine","okay","proud"].includes(d)?"great":["tired","bored","sick","hungry"].includes(d)?"tired":["nervous","scared","worried","stressed"].includes(d)?"nervous":"sad")}let o=i.match(/\bi (?:really |absolutely )?(?:like|love|enjoy|adore|play)\s+([a-z ]{2,28})/);if(o)return this.choose("hobby_pick",o[1].trim().replace(/\s+(a lot|so much|too|and.*)$/,""));let l=i.match(/\bmy favou?rite (subject|food|color|colour|animal|game|sport|class) is\s+([a-z ]{2,24})/);if(l){let d=l[1],u=l[2].trim();he.learn("fav_"+d,u),he.edit(t.id,g=>{g.facts["fav_"+d]=u});let f=d==="food"&&u.includes(t.food.split(" ")[0]);return this.reply(this.v(f?`${gn(u)}! Mine too!`:`${gn(u)}, huh? I'll remember that your favorite ${d} is ${u}.`),{delta:f?3:2,mood:f?"excited":"happy"})}let h=i.match(/\bi have (?:a|an|two|three) ([a-z]+)(?: named ([a-z]+))?/);if(h)return he.learn("pet",h[1]+(h[2]?" named "+gn(h[2]):"")),this.reply(this.v(`A ${h[1]}${h[2]?" named "+gn(h[2]):""}! I want to meet them${t.pet?`. I have ${t.pet}, you know.`:"."}`),{delta:3,mood:"excited"});if(/\b(stupid|dumb|ugly|hate you|shut up|loser|idiot)\b/.test(i))return this.reply(this.pc({shy:"...That hurts. I'm going to go now.",funny:"Ouch. That was not funny. Even I can tell.",kind:"That's not very kind. I'd like us to be nice to each other.",d:"That's rude. I don't like that."}),{delta:-8,mood:"annoyed",options:[{id:"sorry",label:"Sorry, I didn't mean it"},{id:"bye",label:"Okay, bye"}]});if(/\b(sorry|apologi[sz]e|my bad)\b/.test(i))return this.reply(this.pc({kind:"Thank you for saying that. It's okay.",d:"Okay. Thanks for saying sorry."}),{delta:3,mood:"neutral",options:this.menu()});if(/\b(thanks|thank you|thx)\b/.test(i))return this.reply(this.flavor(Jt(s,["Anytime!","Of course.","No problem!"])),{delta:1,options:this.menu()});if(/\b(you'?re|you are|love your|like your|nice|cool|awesome|amazing|great|pretty|cute)\b/.test(i)&&/\b(you|your)\b/.test(i))return this.choose("compliment");if(/\b(bye|goodbye|see you|gotta go|have to go|later)\b/.test(i))return this.choose("bye");if(/\b(joke|funny|laugh)\b/.test(i))return this.choose("joke");if(/\b(quiz|test me|question)\b/.test(i))return this.choose("quiz");if(/\b(help|study|homework)\b/.test(i))return this.choose("help");if(/\b(lunch|eat|food|hungry|pizza|snack)\b/.test(i))return this.choose("food");if(/\b(hobby|hobbies|fun|weekend|play)\b/.test(i))return this.choose("hobby");if(/\b(class|subject|math|science|history|reading|english|teacher)\b/.test(i))return this.choose("class");if(/\b(who are you|about you|your name|tell me about)\b/.test(i))return this.choose("you");if(/\b(rumou?r|gossip|news|heard)\b/.test(i))return this.choose("gossip");if(/\b(hi|hello|hey|yo|sup)\b/.test(i)&&i.split(/\s+/).length<=3)return this.reply(this.flavor("Hi! What's up?"),{mood:"happy"});if(/\b(how are you|how's it going|what's up)\b/.test(i))return this.choose("how");if(/\?\s*$/.test(i))return this.reply(this.pc({nerdy:"Hmm, interesting question. I'd have to look that up. Want a quiz question instead?",curious:"Ooh, good question! I don't know, but I want to find out with you.",d:`${Jt(s,qr[t.personality].hm)} I'm not sure. What do you think?`}),{delta:1,mood:"neutral"});let c=this.mem;return this.reply(this.v(c.facts.hobby?`${Jt(s,qr[t.personality].hm)} Is that like ${c.facts.hobby}? Tell me more.`:`${Jt(s,qr[t.personality].hm)} Tell me more about that.`),{delta:1,mood:"neutral"})}};var Ku=0;async function Qu(n,e){if(Date.now()<Ku)return null;let t=n.npc,i=n.mem,s=new AbortController,r=setTimeout(()=>s.abort(),6500);try{let a={npc:{name:t.name,first:t.first,grade:t.grade,role:t.role,title:t.title,personality:t.personality,interests:t.interests,favSubject:t.favSubject,food:t.food,pet:t.pet,dream:t.dream,quirk:t.quirk,bio:t.bio},player:{name:he.profile.name,facts:he.profile.facts},memory:{friendship:i.fr,tier:Ns(i.fr),talks:i.talks,topics:i.topics.slice(-6),facts:i.facts,recent:i.log.slice(-8)},ctx:n.ctx,history:n.history.slice(-8),input:e},o=await fetch("/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a),signal:s.signal});if(!o.ok)return Ku=Date.now()+5*6e4,null;let l=await o.json();if(!l||typeof l.text!="string")return null;let h=Math.max(-6,Math.min(6,Number(l.delta)||0));if(n.history.push({who:"me",text:e}),Bs(t.id,"me",e),l.learned&&typeof l.learned=="object")for(let[c,d]of Object.entries(l.learned))typeof d=="string"&&(he.learn(c,d.slice(0,40)),he.edit(t.id,u=>{u.facts[c]=String(d).slice(0,40)}));return n.history.push({who:"npc",text:l.text}),Bs(t.id,"npc",l.text),h&&Nu(t.id,h),n.turns++,{text:String(l.text).slice(0,400),options:n.menu(),mood:l.mood||"happy",delta:h}}catch{return Ku=Date.now()+6e4,null}finally{clearTimeout(r)}}async function fm(n,e){return await Qu(n,e)??n.say(e)}var ax=`
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
`,pm=!1,ed=()=>{if(pm)return;pm=!0;let n=document.createElement("style");n.textContent=ax,document.head.appendChild(n)},je=(n,e="",t,i="")=>{let s=document.createElement(n);return e&&(s.className=e),i&&(s.textContent=i),t?.appendChild(s),s};function so(n,e,t=0,i=0,s=3.7){let r=n.getContext("2d"),a=n.width,o=n.height;r.clearRect(0,0,a,o);let l=s*Math.min(1,Gr[e.age??"hs"]??1)*(a/118);r.save(),r.translate(a/2,o-10*(o/150)),r.scale(l,l),r.shadowColor="rgba(52,34,46,.3)",r.shadowBlur=2,r.shadowOffsetY=1,Ii(r,0,0,{...e,dir:"down",moving:!1,walk:0,mouth:i,tag:!1},t),r.restore()}var mm=n=>"\u2665".repeat(Lu(n))+"\u2661".repeat(5-Lu(n)),Yh=class{constructor(e){this.typing=0;this.full="";this.raf=0;this.t0=0;this.busy=!1;this.opts=[];this.onClose=()=>{};this.onReply=()=>{};this.say=async e=>{if(!(!this.convo||this.busy)){this.busy=!0,this.showYou(e);try{this.deliver(await fm(this.convo,e))}finally{this.busy=!1}}};this.mood="happy";this.loop=()=>{if(!this.isOpen)return;let e=performance.now(),t=this.typing<this.full.length;t&&(this.typing+=1.1+this.full.length*.012,this.renderText()),this.npc&&so(this.cv,this.npc.look,(e-this.t0)/1e3,t?.4+.6*Math.abs(Math.sin(e/70)):0),this.raf=requestAnimationFrame(this.loop)};ed(),this.root=je("div","uchat",e),this.card=je("div","uchat-card",this.root),this.cv=je("canvas","uchat-portrait",this.card),this.cv.width=236,this.cv.height=300;let t=je("div","uchat-main",this.card),i=je("div","uchat-head",t);this.nameEl=je("b","",i),this.subEl=je("span","uchat-sub",i),this.heartEl=je("span","uchat-hearts",i);let s=je("button","uchat-x",i,"Bye");s.type="button",s.onclick=()=>this.close(),this.textEl=je("div","uchat-text",t),this.textEl.setAttribute("aria-live","polite"),this.textEl.onclick=()=>this.finishTyping(),this.optsEl=je("div","uchat-opts",t);let r=je("form","uchat-in",t);this.input=je("input","",r),this.input.placeholder="Or type something to say\u2026",this.input.maxLength=200,this.input.autocomplete="off";let a=je("button","",r,"Say");a.type="submit",r.onsubmit=o=>{o.preventDefault();let l=this.input.value.trim();l&&(this.input.value="",this.say(l))},this.root.addEventListener("keydown",o=>{o.stopPropagation(),o.key==="Escape"?this.close():document.activeElement!==this.input&&/^[1-6]$/.test(o.key)&&this.opts[+o.key-1]&&this.pick(this.opts[+o.key-1])}),["pointerdown","wheel","touchstart"].forEach(o=>this.root.addEventListener(o,l=>l.stopPropagation(),{passive:!0}))}get isOpen(){return this.root.classList.contains("show")}open(e,t){this.npc=e,this.convo=new Xr(e,t),this.root.classList.add("show"),this.t0=performance.now(),this.busy=!1,this.nameEl.textContent=e.name,this.refreshHead(),this.deliver(this.convo.greet()),this.loop(),setTimeout(()=>this.root.querySelector(".uchat-opts button")?.focus({preventScroll:!0}),30)}async pick(e){!this.convo||this.busy||(this.showYou(this.labelOf(e)),this.deliver(this.convo.choose(e.id,e.data)))}labelOf(e){return e.label}showYou(e){this.textEl.innerHTML="";let t=je("span","you",this.textEl,`${he.profile.name||"You"}: ${e}`)}refreshHead(){if(!this.npc)return;let e=he.mem(this.npc.id);this.subEl.textContent=`${this.npc.role==="staff"?this.npc.title:"Grade "+this.npc.grade} \xB7 ${Ns(e.fr)}`,this.heartEl.textContent=mm(e.fr)}deliver(e){this.refreshHead(),this.opts=e.options,this.optsEl.innerHTML="",e.options.forEach((i,s)=>{let r=je("button","",this.optsEl,`${s+1}. ${i.label}`);r.type="button",r.onclick=()=>void this.pick(i)});let t=this.textEl.querySelector(".you");this.textEl.innerHTML="",t&&this.textEl.appendChild(t),this.full=e.text,this.typing=0,this.mood=e.mood,this.onReply(e,this.npc),e.end&&setTimeout(()=>this.close(),Math.min(2600,900+e.text.length*28))}finishTyping(){this.typing=this.full.length,this.renderText()}renderText(){let e=this.textEl.querySelector(".say");e||(e=je("span","say",this.textEl)),e.textContent=this.full.slice(0,Math.floor(this.typing))}close(){this.isOpen&&(this.root.classList.remove("show"),cancelAnimationFrame(this.raf),this.input.blur(),this.onClose())}},Zh=class{constructor(e){this.onPick=()=>{};ed(),this.root=je("div","ujournal",e);let t=je("div","ujournal-card",this.root),i=je("header","",t,"Friends and classmates"),s=je("button","",i,"Close");s.type="button",s.onclick=()=>this.hide(),this.list=je("div","ujournal-list",t),this.root.addEventListener("pointerdown",r=>r.stopPropagation()),this.root.addEventListener("keydown",r=>{r.stopPropagation(),r.key==="Escape"&&this.hide()})}show(){this.render(),this.root.classList.add("show")}hide(){this.root.classList.remove("show")}toggle(){this.root.classList.contains("show")?this.hide():this.show()}render(){this.list.innerHTML="";let e=he.friends();if(!e.length){je("div","ujournal-empty",this.list,"You haven't met anyone yet. Walk up to a student and tap them, or press T when one is close.");return}for(let{id:t,mem:i}of e){let s=ms(Number(t));if(!s)continue;let r=je("button","ujournal-item",this.list);r.type="button",r.onclick=()=>{this.hide(),this.onPick(s)};let a=je("canvas","",r);a.width=108,a.height=140,so(a,s.look,0,0,3.7);let o=je("div","",r),l=Object.entries(i.facts).map(([h,c])=>`${h.replace("fav_","favorite ")}: ${c}`).join(", ");je("b","",o,s.name),je("small","",o,`${s.role==="staff"?s.title:"Grade "+s.grade} \xB7 ${Ns(i.fr)} ${mm(i.fr)}`),je("small","",o,`Talked ${i.talks}x \xB7 quiz ${i.quiz.right}/${i.quiz.total}${i.lunchBuddy?" \xB7 lunch buddy":""}`),l&&je("small","",o,`Remembers: ${l}`)}}},Jh=class{constructor(e){this.raf=0;this.t0=0;this.talkUntil=0;this.hideT=0;this.onPick=()=>{};this.onText=()=>{};ed(),this.root=je("div","uchat top",e);let t=je("div","uchat-card",this.root);this.cv=je("canvas","uchat-portrait",t),this.cv.width=236,this.cv.height=300;let i=je("div","uchat-main",t),s=je("div","uchat-head",i);this.nameEl=je("b","",s),this.textEl=je("div","uchat-text",i),this.textEl.setAttribute("aria-live","polite"),this.optsEl=je("div","uchat-opts",i),this.form=je("form","uchat-in",i),this.input=je("input","",this.form),this.input.maxLength=200,this.input.autocomplete="off";let r=je("button","",this.form,"Ask");r.type="submit",this.form.onsubmit=a=>{a.preventDefault();let o=this.input.value.trim();o&&(this.input.value="",this.onText(o))},this.root.addEventListener("keydown",a=>a.stopPropagation()),["pointerdown","wheel","touchstart"].forEach(a=>this.root.addEventListener(a,o=>o.stopPropagation(),{passive:!0}))}get isOpen(){return this.root.classList.contains("show")}show(e,t,i={}){clearTimeout(this.hideT),this.root.classList.add("show"),this.npc={look:e.look},this.t0=performance.now(),this.talkUntil=this.t0+Math.min(4e3,300+t.length*32),this.nameEl.textContent=e.name+(e.sub?` \xB7 ${e.sub}`:""),this.textEl.textContent=t,this.optsEl.innerHTML="",(i.options??[]).forEach((r,a)=>{let o=je("button","",this.optsEl,`${a+1}. ${r.label}`);o.type="button",o.onclick=()=>this.onPick(r)}),this.form.style.display=i.input?"flex":"none",i.input&&(this.input.placeholder=i.input),i.autoHideMs&&(this.hideT=setTimeout(()=>this.hide(),i.autoHideMs)),cancelAnimationFrame(this.raf);let s=()=>{if(!this.isOpen)return;let r=performance.now();so(this.cv,this.npc.look,(r-this.t0)/1e3,r<this.talkUntil?.4+.6*Math.abs(Math.sin(r/70)):0),this.raf=requestAnimationFrame(s)};s()}hide(){clearTimeout(this.hideT),this.root.classList.remove("show"),cancelAnimationFrame(this.raf),this.input.blur()}};var ox={math:{title:"Graphing a parabola",points:["The vertex is the turning point of the curve: the very lowest or highest spot.","The axis of symmetry is the vertical line through the vertex. Both halves of the parabola match across it.","To graph one: plot the vertex, find a couple of points on one side, then mirror them across the axis."],examples:["Take y = x squared. The vertex is (0, 0). When x is 2, y is 4, and when x is -2, y is also 4. Those two points mirror each other.","Think of tossing a ball. It rises, turns at the vertex, then falls the same way it went up.","For y = (x - 3) squared, the whole curve slides 3 steps right, so the vertex moves to (3, 0)."],whys:["It's symmetric because squaring makes a positive number and its negative give the same answer.","The vertex is the turning point because that's where the curve stops going down and starts going up.","Mirroring saves work: once you know one side, the other side is free."],glossary:{vertex:"The vertex is the turning point of the parabola, its highest or lowest point.",parabola:"A parabola is the U-shaped curve you get from a squared term, like y = x squared.",axis:"The axis of symmetry is the vertical line through the vertex that splits the graph into two matching halves.",symmetry:"Symmetry means one side is a mirror image of the other.",intercept:"An intercept is where the graph crosses an axis. The x-intercepts are where y equals zero.",coordinate:"A coordinate is a pair like (3, 4): how far across, then how far up.",root:"A root, or zero, is an x value where the graph touches the x-axis."},homework:"Graph y = x squared + 2 and label the vertex and axis of symmetry."},ela:{title:"Finding the theme",points:["First ask what happens in the story: the main events.","Next ask what changes: how a character or situation is different at the end.","Then back it up with evidence: a quote or detail that proves your idea about the theme."],examples:["In a story where a shy kid joins a team and finds friends, the theme might be that courage helps you connect with others.","A theme isn't one word like 'friendship.' It's a sentence: 'True friends stand by you when things are hard.'","Evidence sounds like: 'When Mia saved her a seat, it showed she cared.'"],whys:["We use evidence so the theme is something we can show, not just a guess.","Looking at what changes works because stories are about change, and the change points to the lesson.","A theme is a message the author wants us to take away from the story."],glossary:{theme:"The theme is the big message or lesson of a story, written as a full sentence.",evidence:"Evidence is a detail or quote from the text that supports your idea.",plot:"The plot is the series of events in a story.",metaphor:"A metaphor says one thing is another to show a feeling, like 'Time is a thief.'",simile:"A simile compares two things using 'like' or 'as.'",character:"A character is a person or creature in a story.",conflict:"Conflict is the problem or struggle that drives the story.",inference:"An inference is an idea you figure out from clues in the text."},homework:"Write one sentence stating the theme of your favorite story and add one piece of evidence."},science:{title:"Plant cells",points:["The cell wall is the stiff outer layer that gives a plant cell its shape and support.","Chloroplasts are the little green parts that make food from sunlight, water and carbon dioxide.","The vacuole is the big storage sac that holds water and nutrients and keeps the cell firm."],examples:["A celery stalk is crunchy because its cells are full of water in their vacuoles. Wilted celery has lost that water.","Leaves are green because their cells hold lots of chloroplasts packed with chlorophyll.","Think of the cell wall like a cardboard box around a water balloon: it keeps the shape."],whys:["Plants need cell walls because they can't move or have a skeleton, so the walls hold them up.","Chloroplasts matter because they turn sunlight into sugar, the food the plant lives on.","Vacuoles are big in plants because water pressure inside them keeps stems and leaves standing."],glossary:{"cell wall":"The cell wall is the strong outer layer that supports and protects a plant cell.",chloroplast:"Chloroplasts are the green structures where photosynthesis happens.",vacuole:"The vacuole is a large storage sac that holds water and nutrients.",photosynthesis:"Photosynthesis is how plants turn sunlight, water and carbon dioxide into sugar and oxygen.",chlorophyll:"Chlorophyll is the green pigment in chloroplasts that captures sunlight.",nucleus:"The nucleus is the control center that holds the cell's DNA.",cell:"A cell is the smallest living building block of an organism.",mitochondria:"Mitochondria release energy from food for the cell to use."},homework:"Draw a plant cell and label the cell wall, chloroplasts and vacuole."},history:{title:"Where and when?",points:["First locate the event on the map: where did it happen and what was nearby?","Then put it on a timeline: what happened before it and what came after?","Finally ask who gained and who lost, because that shows why people made their choices."],examples:["Trade routes like the Silk Road ran across Asia. Seeing them on a map explains why cities along them grew rich.","On a timeline, the printing press (about 1440) comes before the Renaissance spread across Europe, so books helped spread ideas.","When a new border is drawn, ask who gained land, who lost it, and who had a voice in the decision."],whys:["Maps matter because geography shapes what people can grow, trade and defend.","Timelines matter because events cause each other, and order helps us see how.","Asking who gained helps us understand why people act the way they do."],glossary:{timeline:"A timeline puts events in order by date so you can see what came before and after.",map:"A map shows where things are, so we can understand how place shaped events.",primary:"A primary source is something made at the time of the event, like a diary or photo.",civilization:"A civilization is a large, organized society with cities, government and culture.",trade:"Trade is exchanging goods or services between people or places.",empire:"An empire is a large area ruled by one government or leader.",democracy:"A democracy is a government where people vote for their leaders or laws.",source:"A source is where information comes from, like a book, letter or object."},homework:"Pick one event from today and mark where it happened on a map and when on a timeline."}};function gm(n,e,t=0){let i=ox[n],s=e.toLowerCase();for(let[r,a]of Object.entries(i.glossary))if(s.includes(r))return a;return/\b(again|repeat|confus|lost|don'?t (get|understand)|slow)\b/.test(s)?`Let's go step by step. ${i.points[t%i.points.length]}`:/\b(example|show me|for instance)\b/.test(s)?i.examples[t%i.examples.length]:/\b(why|how come|reason)\b/.test(s)?i.whys[t%i.whys.length]:/\b(homework|assignment|due)\b/.test(s)?`For homework: ${i.homework}`:/\b(test|quiz|exam)\b/.test(s)?"There may be a quick quiz soon. Review the three points on the board and you'll be ready.":/\b(thanks|thank you)\b/.test(s)?"You're welcome! Great job asking.":null}var lx=(n,e,t)=>{let i=e.toLowerCase();for(let[s,r]of Object.entries(n.glossary))if(i.includes(s))return r;return/\b(again|repeat|confus|lost|don'?t (get|understand)|slow)\b/.test(i)?`Let's go step by step. ${n.points[t%n.points.length]}`:/\b(example|show me|for instance)\b/.test(i)?n.examples[t%n.examples.length]:/\b(why|how come|reason)\b/.test(i)?n.whys[t%n.whys.length]:/\b(homework|assignment|due)\b/.test(i)?`For homework: ${n.homework}`:null},$r=n=>new Promise(e=>setTimeout(e,n)),td=(n,e)=>n+Math.random()*(e-n),yn=n=>({name:n.name,look:n.look,sub:n.role==="staff"?n.title:`Grade ${n.grade}`}),hx={hs:.8,g68:.7,g35:.62,k2:.5,adult:1},jh=(n,e)=>Math.max(.2,Math.min(.95,hx[n.age]+(n.favSubject===e?.15:0)-(n.hardSubject===e?.2:0)+(n.personality==="nerdy"?.1:0)-(n.personality==="shy"?.05:0))),Kh=class{constructor(e,t){this.host=e;this.lesson=null;this.auto=!0;this.subject="math";this.handUp=!1;this.tok=0;this.busy=!1;this.rot=0;this.raiseWaiter=null;this.resolver=null;this.asked=0;this.onState=()=>{};this.byId=ms;this.panel=new Jh(t),this.panel.onPick=i=>this.resolver?.(i),this.panel.onText=i=>this.resolver?.(i),addEventListener("keydown",i=>{i.key==="Escape"&&this.resolver?this.resolver(null):i.target?.tagName!=="INPUT"&&(i.key==="h"||i.key==="H"?this.raiseHand():/^[1-5]$/.test(i.key)&&this.panel.isOpen&&this.panel.optsEl.children[+i.key-1]?.click())})}get L(){return this.lesson??this.L}get teacher(){return Wi[this.subject]}get me(){return{name:he.profile.name||"You",look:this.host.playerLook(),sub:"you"}}alive(e){return e===this.tok&&this.host.playerSeated()}emit(e=!1){this.onState({handUp:this.handUp,question:e})}ask(e,t,i,s){return new Promise(r=>{this.resolver=a=>{this.resolver=null,r(a)},this.panel.show(e,t,{options:i,input:s})})}say(e,t,i=0){return this.panel.show(e,t,{autoHideMs:i||Math.min(7e3,2200+t.length*45)}),$r(i||Math.min(6200,1800+t.length*40))}async start(e){this.stop();let t=++this.tok;this.subject=e;let i=this.teacher,s=he.mem(i.id),r=he.profile.name||"friend",a=!s.met,o=s.lastDay&&s.lastDay!==gs();if(he.edit(i.id,d=>{d.met=!0,d.talks++,d.lastDay=gs(),d.lastAt=Date.now(),d.fr=Math.min(100,d.fr+(a?2:1))}),!this.auto)return;let l=s.topics.filter(d=>d.startsWith("q:")).pop(),h=a?`Welcome, ${r}! I'm ${i.name}. Today's lesson: ${this.L.title}. Raise your hand any time with H or the button.`:`${o?"Welcome back":"Good to see you again"}, ${r}! ${l?`Last time you asked about ${l.slice(2)}. `:""}Today: ${this.L.title}.`;if(await $r(900),!this.alive(t)||(await this.say(yn(i),h,6500),!this.alive(t))||!this.auto)return;let c=0;for(;this.alive(t);)if(await $r(td(17e3,28e3)),!(!this.alive(t)||this.busy||this.handUp)){this.busy=!0;try{c++%3===2?await this.npcQuestion(t):await this.teacherAsk(t)}finally{this.busy=!1,this.host.seated().forEach(d=>this.host.setHand(d.id,!1)),this.emit(!1)}}}stop(){this.tok++,this.resolver?.(null),this.raiseWaiter=null,this.panel.hide(),this.handUp&&(this.handUp=!1,this.host.playerHand(!1)),this.busy=!1,this.host.seated().forEach(e=>this.host.setHand(e.id,!1)),this.emit(!1)}raiseHand(){if(this.host.playerSeated()){if(this.raiseWaiter){let e=this.raiseWaiter;this.raiseWaiter=null,e();return}this.busy||this.handUp||this.freeHand(this.tok)}}async freeHand(e){this.busy=!0,this.handUp=!0,this.host.playerHand(!0),this.emit(!1);let t=this.teacher,i=he.profile.name||"friend";he.profile.stats.hands++,he.save(),await $r(td(1100,2e3));let s=`Yes, ${i}? What's your question?`,r=0;for(;this.alive(e);){let a=await this.ask(yn(t),s,[{id:"again",label:"Explain that again"},{id:"example",label:"Give an example"},{id:"why",label:"Why does that work?"},{id:"done",label:"Never mind"}],"Or ask your own question\u2026");if(a===null||typeof a!="string"&&a.id==="done")break;let o=this.L,l,h=typeof a=="string"?a.slice(0,24):a.id;typeof a=="string"?l=(this.lesson?lx(this.lesson,a,this.rot):gm(this.subject,a,this.rot))??await this.modelOrGeneric(a):l=a.id==="again"?`Sure. ${o.points[this.rot%o.points.length]}`:a.id==="example"?o.examples[this.rot%o.examples.length]:o.whys[this.rot%o.whys.length],this.rot++,r++,he.edit(t.id,c=>{c.topics.push("q:"+h),c.topics.length>24&&c.topics.shift(),c.fr=Math.min(100,c.fr+1),c.called++}),s=`${l} Anything else?`}this.alive(e)&&await this.say(yn(t),r?`Great asking, ${i}. Questions make everyone smarter.`:"No problem. Ask any time.",2600),this.panel.hide(),this.handUp=!1,this.host.playerHand(!1),this.busy=!1,this.emit(!1)}async modelOrGeneric(e){let t=new Xr(this.teacher,{place:"class",kind:"class",period:this.L.title,clock:""});return(await Qu(t,e))?.text??`Good question, ${he.profile.name||"friend"}. Let's look at the board together. ${this.L.points[this.rot%3]}`}async teacherAsk(e){let t=this.teacher,i=this.subject,s=$h(i,he.profile.avatar.age),r=he.profile.name||"friend";this.asked++;let a=this.host.seated().filter(u=>Math.random()<.18+.4*jh(u,i)).slice(0,7);this.emit(!0),a.forEach(u=>setTimeout(()=>this.alive(e)&&this.host.setHand(u.id,!0),td(700,3800))),this.panel.show(yn(t),`Question: ${s.q}`,{options:[{id:"raise",label:"Raise my hand (H)"},{id:"listen",label:"Just listen"}]}),this.panel.onPick=u=>{u.id==="raise"?this.raiseHand():this.resolver?.(u)};let o=await new Promise(u=>{this.raiseWaiter=()=>u(!0),this.resolver=()=>u(!1),setTimeout(()=>u(!1),9e3)});if(this.raiseWaiter=null,this.resolver=null,this.panel.onPick=u=>this.resolver?.(u),!this.alive(e))return;if(o){this.handUp=!0,this.host.playerHand(!0),this.emit(!0),await this.playerAnswers(e,s),this.handUp=!1,this.host.playerHand(!1);return}let l=a.length?a[Math.floor(Math.random()*a.length)]:null;if(!l){await this.say(yn(t),`No hands? Let's work it out together. The answer is "${s.options[s.answer]}". ${s.why??""}`,6e3);return}let h=Math.random()<jh(l,i),c=h?s.answer:(s.answer+1+Math.floor(Math.random()*(s.options.length-1)))%s.options.length;if(await this.say(yn(t),`${l.first}, go ahead.`,1500),!this.alive(e)||(await this.say(yn(l),s.options[c]+(l.personality==="shy"?"... maybe?":"!"),2400),!this.alive(e)))return;if(he.edit(l.id,u=>{u.called++,h&&u.quiz.right++,u.quiz.total++}),h){await this.say(yn(t),`Yes, ${l.first}! ${s.why??""}`,3800);return}this.host.seated().forEach(u=>u.id!==l.id&&Math.random()<.5&&this.host.setHand(u.id,!0)),this.panel.show(yn(t),`Not quite, ${l.first}, thank you for trying. Can anyone help?`,{options:[{id:"raise",label:"Raise my hand (H)"},{id:"listen",label:"Let someone else"}]}),this.panel.onPick=u=>{u.id==="raise"?this.raiseHand():this.resolver?.(u)};let d=await new Promise(u=>{this.raiseWaiter=()=>u(!0),this.resolver=()=>u(!1),setTimeout(()=>u(!1),7500)});this.raiseWaiter=null,this.resolver=null,this.panel.onPick=u=>this.resolver?.(u),this.alive(e)&&(d?(this.handUp=!0,this.host.playerHand(!0),await this.playerAnswers(e,s,l),this.handUp=!1,this.host.playerHand(!1)):await this.say(yn(t),`The answer is "${s.options[s.answer]}". ${s.why??""} Don't worry, ${l.first}, that's how we learn.`,5200))}async playerAnswers(e,t,i){let s=this.teacher,r=he.profile.name||"friend",a=await this.ask(yn(s),`${r}? Go ahead. ${i?"":t.q}`,t.options.map((l,h)=>({id:"a"+h,label:l})));if(a===null||typeof a=="string"){await this.say(yn(s),"That's okay. We'll come back to it.",2200);return}let o=a.id==="a"+t.answer;he.profile.stats.quizTotal++,o&&he.profile.stats.quizRight++,he.save(),he.edit(s.id,l=>{l.quiz.total++,o&&l.quiz.right++,l.fr=Math.min(100,l.fr+(o?2:1)),l.called++}),o&&i&&he.edit(i.id,l=>{l.helped++,l.fr=Math.min(100,l.fr+3)}),this.host.seated().forEach(l=>{he.peek(l.id)?.met&&he.edit(l.id,c=>{c.seenInClass++})}),await this.say(yn(s),o?`Exactly right, ${r}! ${t.why??""}${i?` Thank you for helping ${i.first}.`:""}`:`Good try, ${r}. The answer is "${t.options[t.answer]}". ${t.why??""} Mistakes help us learn.`,5200)}async npcQuestion(e){let t=this.teacher,i=this.L,s=this.host.seated();if(!s.length)return;let r=s.find(c=>c.personality==="curious")??s[Math.floor(Math.random()*s.length)],a=this.rot%3;if(this.host.setHand(r.id,!0),await $r(1800),!this.alive(e))return;let o=[`Why does this matter? ${i.points[a].split(".")[0].toLowerCase()}...`,"Can you give another example?","Why does that work?"][this.rot%3];if(this.rot++,this.panel.show(yn(t),`${r.first}, you have a question?`,{autoHideMs:1800}),await $r(1700),!this.alive(e)||(await this.say(yn(r),o,3200),!this.alive(e)))return;let l=o.startsWith("Can you give")?i.examples[a]:o.startsWith("Why does that")?i.whys[a]:i.points[a],h=await this.ask(yn(t),l,[{id:"me2",label:"I wondered that too"},{id:"ok",label:"Got it"}]);h&&typeof h!="string"&&h.id==="me2"&&(he.edit(r.id,c=>{c.fr=Math.min(100,c.fr+2),c.met=!0}),await this.say(yn(r),`${he.profile.name||"You"} wondered too? Cool, thanks!`,2400)),this.panel.hide()}async askNow(e="teacher"){if(this.busy)return;let t=this.tok;this.busy=!0;try{e==="npc"?await this.npcQuestion(t):await this.teacherAsk(t)}finally{this.busy=!1,this.host.seated().forEach(i=>this.host.setHand(i.id,!1)),this.emit(!1)}}get questionOpen(){return!!this.raiseWaiter}};var cx=`
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
`,ym=!1,it=(n,e="",t,i="")=>{let s=document.createElement(n);return e&&(s.className=e),i&&(s.textContent=i),t?.appendChild(s),s},bm=["down","right","up","left"],Qh=class{constructor(e=document.body){this.tab="Body";this.dir=0;this.walk=!1;this.t0=performance.now();this.raf=0;this.onSave=()=>{};this.onCancel=()=>{};this.loop=()=>{if(!this.root.classList.contains("show"))return;let e=(performance.now()-this.t0)/1e3,t=this.cv.getContext("2d");t.clearRect(0,0,this.cv.width,this.cv.height);let i=pi(this.spec,11),s=8.6*(Gr[this.spec.age]??1)*.92;t.save(),t.translate(this.cv.width/2,this.cv.height-46),t.scale(s,s),t.fillStyle="rgba(60,40,50,.18)",t.beginPath(),t.ellipse(0,1,13,4,0,0,7),t.fill(),t.shadowColor="rgba(52,34,46,.3)",t.shadowBlur=3,t.shadowOffsetY=1.5,Ii(t,0,0,{...i,dir:bm[this.dir],moving:this.walk,walk:this.walk?e*8:0,tag:!1},e),t.restore(),this.raf=requestAnimationFrame(this.loop)};this.pending=0;if(!ym){ym=!0;let y=document.createElement("style");y.textContent=cx,document.head.appendChild(y)}this.spec={...he.profile.avatar},this.root=it("div","uav",e);let t=it("div","uav-top",this.root);it("b","",t,"Create your avatar");let i=it("span","",t);i.style.flex="1";let s=it("button","uav-chip",t,"Cancel");s.type="button",s.onclick=()=>{this.hide(),this.onCancel()};let r=it("button","uav-chip uav-save",t,"Save and play");r.type="button",r.onclick=()=>this.save();let a=it("div","uav-wrap",this.root),o=it("div","uav-card uav-prev",a);this.cv=it("canvas","",o),this.cv.width=300,this.cv.height=400;let l=it("div","uav-row",o);l.style.justifyContent="center",bm.forEach((y,p)=>{let m=it("button","uav-chip",l,["Front","Right","Back","Left"][p]);m.type="button",m.onclick=()=>{this.dir=p,this.walk=!1}});let h=it("button","uav-chip",l,"Walk");h.type="button",h.onclick=()=>{this.walk=!this.walk,h.classList.toggle("on",this.walk)};let c=it("div","uav-row",o);c.style.justifyContent="center";let d=it("button","uav-chip",c,"Surprise me");d.type="button",d.onclick=()=>{let y=this.spec.name,p=this.spec.age;this.spec={...Lr(Vi(Date.now()&16777215),p),name:y},this.render()};let u=it("button","uav-chip",c,"Reset");u.type="button",u.onclick=()=>{let y=this.spec.name;this.spec={...Fr(),name:y},this.render()};let f=it("div","uav-card",a),g=it("div","uav-tabs",f);for(let y of["Body","Face","Hair","Outfit","Extras","You"]){let p=it("button","uav-chip",g,y);p.type="button",p.dataset.tab=y,p.onclick=()=>{this.tab=y,this.render()}}this.body=it("div","",f),this.root.addEventListener("keydown",y=>y.stopPropagation()),this.root.addEventListener("pointerdown",y=>y.stopPropagation())}show(){this.spec={...he.profile.avatar,name:he.profile.name||he.profile.avatar.name},this.root.classList.add("show"),this.render(),this.loop()}hide(){this.root.classList.remove("show"),cancelAnimationFrame(this.raf)}save(){let e=(this.nameInput?.value??this.spec.name).trim().slice(0,14)||"Student";this.spec.name=e,he.setProfile({name:e,avatar:{...this.spec},hasAvatar:!0}),this.hide(),this.onSave(this.spec,e)}set(e,t){this.spec[e]=t,this.render(!1)}chips(e,t,i){it("div","uav-lab",this.body,e);let s=it("div","uav-row",this.body);for(let r of i){let a=it("button","uav-chip"+(this.spec[t]===r.id?" on":""),s,r.label);a.type="button",a.onclick=()=>{this.set(t,r.id)}}}swatches(e,t,i,s){it("div","uav-lab",this.body,e);let r=it("div","uav-row",this.body);if(s){let o=it("button","uav-sw none"+(this.spec[t]==null?" on":""),r);o.type="button",o.title=s,o.setAttribute("aria-label",s),o.onclick=()=>this.set(t,null)}for(let o of i){let l=it("button","uav-sw"+(this.spec[t]===o?" on":""),r);l.type="button",l.style.background=o,l.setAttribute("aria-label",o),l.onclick=()=>this.set(t,o)}let a=it("input","uav-custom",r);a.type="color",a.value=typeof this.spec[t]=="string"&&/^#[0-9a-f]{6}$/i.test(this.spec[t])?this.spec[t]:i[0],a.title="Custom colour",a.oninput=()=>{this.spec[t]=a.value,this.renderSoon()}}toggle(e,t){let i=it("label","uav-switch",this.body),s=it("input","",i);s.type="checkbox",s.checked=!!this.spec[t],s.onchange=()=>this.set(t,s.checked),i.appendChild(document.createTextNode(e))}slider(e,t,i,s,r){it("div","uav-lab",this.body,e);let a=it("input","",this.body);a.type="range",a.min=String(i),a.max=String(s),a.step=String(r),a.value=String(this.spec[t]),a.oninput=()=>{this.spec[t]=Number(a.value)}}renderSoon(){clearTimeout(this.pending),this.pending=window.setTimeout(()=>this.render(!1),250)}render(e=!0){this.root.querySelectorAll("[data-tab]").forEach(r=>r.classList.toggle("on",r.dataset.tab===this.tab));let t=this.root.scrollTop;this.body.innerHTML="";let i=$a,s=this.body;if(this.tab==="Body")this.chips("Grade band (sets your height)","age",i.age),this.chips("Build","build",i.build),this.slider("Head size","headSize",.9,1.12,.01),this.swatches("Skin tone","skin",Cu),this.chips("Pronouns","pronouns",dp.map(r=>({id:r,label:r})));else if(this.tab==="Face"){this.chips("Eyes","eyeShape",i.eyeShape),this.swatches("Eye colour","eyeColor",Ru),this.chips("Eyebrows","brow",i.brow),this.swatches("Eyebrow colour","browColor",Fs,"Match hair"),this.chips("Mouth","mouthStyle",i.mouthStyle),this.swatches("Lip colour","lip",["#8a4650","#c4463c","#e8789a","#b5563e","#563428","#e07a66"]),it("div","uav-lab",s,"Details");let r=it("div","uav-row",s);this.toggle("Freckles","freckles"),this.toggle("Beauty mark","mole"),this.toggle("Little nose","nose"),this.toggle("Rosy cheeks","blush"),this.chips("Glasses","glasses",i.glasses),this.swatches("Glasses colour","glassColor",["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da","#eab94e"])}else if(this.tab==="Hair")this.chips("Style","hairStyle",i.hairStyle),this.swatches("Colour","hair",Fs),this.swatches("Highlights","hair2",Fs,"No highlights");else if(this.tab==="Outfit")this.chips("Top","top",i.top),this.swatches("Top colour","shirt",En),this.chips("Pattern","pattern",i.pattern),this.swatches("Pattern / under-shirt colour","shirt2",En),this.chips("Bottoms","bottom",i.bottom),this.swatches("Bottoms colour","pants",En),this.chips("Shoes","shoeStyle",i.shoeStyle),this.swatches("Shoe colour","shoes",Pu);else if(this.tab==="Extras")this.chips("Hat","hat",i.hat),this.swatches("Hat colour","hatColor",En),this.chips("Bag","packStyle",i.packStyle),this.swatches("Bag colour","pack",En),this.swatches("Earrings","earrings",["#eab94e","#fff6ea","#f28f7e","#8fc9e8"],"None"),this.swatches("Scarf","scarf",En,"None"),this.swatches("Badge","badge",En,"None");else{it("h2","",s,"About you"),it("div","uav-lab",s,"Your name (classmates will remember it)");let r=it("input","",s);r.type="text",r.maxLength=14,r.value=this.spec.name==="Student"?"":this.spec.name,r.placeholder="Type your name",this.nameInput=r,r.oninput=()=>{this.spec.name=r.value},it("div","uav-lab",s,"Tip"),it("div","",s,"Classmates notice what you wear. Try a hat or glasses and see who compliments it. Everything you tell them is remembered, so introduce yourself!")}this.root.scrollTop=t}};function Ee(n,e,t,i){let s=document.createElement(n);return e&&(s.className=e),i!==void 0&&(s.textContent=i),t?.appendChild(s),s}var ux=(n,e)=>n+Math.random()*(e-n),ro=(n,e)=>Math.floor(ux(n,e+1)),Vs=n=>{n=[...n];for(let e=n.length-1;e>0;e--){let t=ro(0,e);[n[e],n[t]]=[n[t],n[e]]}return n},Fn=(n,e,t,i="lbtn")=>{let s=Ee("button",i,n,e);return s.type="button",s.onclick=t,s},dx={tortoise:{kind:"order",prompt:"Put the story in order.",items:["The hare brags that he is the fastest.","The tortoise accepts the race.","The hare naps in the middle of the race.","The tortoise keeps walking, never stopping.","The tortoise crosses the finish line first."],q:{q:"Which theme do these events prove?",options:["Slow and steady wins the race.","Hares are fast.","Races are fun."],answer:0}},watercycle:{kind:"order",prompt:"Order the water cycle.",items:["Sun heats the ocean (evaporation)","Water vapor rises and cools","Vapor forms clouds (condensation)","Rain or snow falls (precipitation)","Water collects in rivers and returns to the sea"]},silkroad:{kind:"order",prompt:"Follow a silk caravan west.",items:["Xi'an, China: silk is made","Crossing the Taklamakan Desert","Samarkand: traders swap goods","Baghdad: markets and scholars","Rome: silk reaches buyers"]},teaparty:{kind:"order",prompt:"Order the road to the Boston Tea Party.",items:["Britain taxes tea with no colonial vote","Colonists protest: 'No taxation without representation'","Tea ships arrive in Boston harbor","Colonists dump 342 chests of tea in the water","Britain punishes Boston and tension grows"]},bill:{kind:"order",prompt:"How a bill becomes a law.",items:["A member of Congress introduces a bill","A committee studies and edits it","The House and Senate both vote to pass it","The President signs it","It becomes a law"]},orchestra:{kind:"sort",prompt:"Sort the instruments into their families.",groups:{Strings:["violin","cello","harp"],Woodwinds:["flute","clarinet","oboe"],Brass:["trumpet","trombone","tuba"],Percussion:["drum","xylophone","cymbals"]}},figurative:{kind:"sort",prompt:"Which kind of figurative language is it?",groups:{Simile:["Her smile was like sunshine","He ran like the wind"],Metaphor:["Time is a thief","The classroom was a zoo"],Personification:["The wind whispered through the trees","The sun smiled down on us"]}},perspective:{kind:"sort",prompt:"Where do these belong in a perspective drawing?",groups:{"Foreground (big, detailed)":["the girl on the path","the fence post nearby"],"Middle ground":["the red barn","the row of trees"],"Background (small, pale)":["the distant mountain","tiny far-off hills"]}},branches:{kind:"sort",prompt:"Which branch has this power?",groups:{"Legislative (makes laws)":["Writes new laws","Declares war"],"Executive (carries out laws)":["Signs bills into law","Commands the military"],"Judicial (explains laws)":["Decides if a law is fair","Hears court cases"]}}},vm=n=>{let e=dx[n.cfg??"tortoise"],t=Ee("div","lcol",n.body);Ee("p","lprompt",t,e.prompt);let i=0,s=0;if(e.kind==="order"){let r=Ee("ol","lslots",t),a=Ee("div","lpool",t),o=0,l=[];e.items.forEach((c,d)=>{let u=Ee("li","lslot",r,`${d+1}.`);l.push(u)});let h=()=>{if(e.q){let c=Ee("div","lquiz",t);Ee("p","lprompt",c,e.q.q),Vs(e.q.options.map((d,u)=>({o:d,i:u}))).forEach(({o:d,i:u})=>Fn(c,d,()=>{s++,u===e.q.answer&&i++,n.hint(u===e.q.answer,"That theme is proven by the events in order."),n.finish(i,s)}))}else n.finish(i,s)};Vs(e.items.map((c,d)=>({t:c,i:d}))).forEach(({t:c,i:d})=>{let u=Fn(a,c,()=>{s++,d===o?(i++,l[o].textContent=`${o+1}. ${c}`,l[o].classList.add("ok"),u.remove(),o++,o===e.items.length?h():n.hint(!0,"Yes, that's next.")):(u.classList.add("bad"),setTimeout(()=>u.classList.remove("bad"),500),n.hint(!1,"Think about what has to happen first."))},"lcard")})}else{let r=Object.keys(e.groups),a=Ee("div","lbins",t),o=Vs(Object.entries(e.groups).flatMap(([d,u])=>u.map(f=>({t:f,g:d})))),l=0,h=Ee("div","lbig",t),c=()=>{h.textContent=o[l]?.t??""};c(),r.forEach(d=>{let u=Ee("div","lbin",a);Ee("b","",u,d),Fn(u,"Put here",()=>{s++,o[l].g===d?(i++,Ee("div","lfill",u,o[l].t),n.hint(!0,"That's it."),l++,l>=o.length?(h.textContent="All sorted!",n.finish(i,s)):c()):(u.classList.add("shake"),setTimeout(()=>u.classList.remove("shake"),400),n.hint(!1,"Look at the clue in the words."))})})}},fx=n=>{let e=[1,2,-1,.5][ro(0,3)],t=ro(-3,3),i=ro(-2,3),s=[t-2,t+1,t+3].map(x=>Math.max(-5,Math.min(5,x))),r=[...new Set(s)].map(x=>[x,e*(x-t)**2+i]),a=Ee("canvas","lcanvas",n.body);a.width=640,a.height=400;let o=a.getContext("2d"),l={a:1,h:0,k:0},h=0,c=!1,d=0,u=Ee("div","lctl",n.body),f=(x,M,T,C,v)=>{let A=Ee("label","",u,x+" "),P=Ee("output","",A),S=Ee("input","",A);S.type="range",S.min=String(T),S.max=String(C),S.step=String(v),S.value=String(l[M]);let D=()=>{l[M]=+S.value,P.textContent=String(l[M]),d=0};S.oninput=D,P.textContent=String(l[M])};f("a (width and flip)","a",-3,3,.5),f("h (slide left or right)","h",-5,5,1),f("k (slide up or down)","k",-4,6,1);let g=Ee("p","lmsg",n.body,"Make the curve y = a(x - h)\xB2 + k pass through every red target.");n.say(`Targets at ${r.map(x=>`(${x[0]}, ${x[1]})`).join(", ")}.`);let y=x=>320+x*52,p=x=>300-x*34,m=0,_=performance.now(),E=x=>{let M=(x-_)/1e3;_=x,d=Math.min(1,d+M*.5),o.fillStyle="#fdfaf1",o.fillRect(0,0,640,400),o.strokeStyle="rgba(0,0,0,.08)";for(let C=-6;C<=6;C++)o.beginPath(),o.moveTo(y(C),0),o.lineTo(y(C),400),o.stroke();for(let C=-6;C<=9;C++)o.beginPath(),o.moveTo(0,p(C)),o.lineTo(640,p(C)),o.stroke();o.strokeStyle="#4A3B3F",o.lineWidth=2,o.beginPath(),o.moveTo(0,p(0)),o.lineTo(640,p(0)),o.moveTo(y(0),0),o.lineTo(y(0),400),o.stroke(),o.setLineDash([6,5]),o.strokeStyle="#4F91C7",o.beginPath(),o.moveTo(y(l.h),0),o.lineTo(y(l.h),400),o.stroke(),o.setLineDash([]),o.strokeStyle="#E07A66",o.lineWidth=4,o.beginPath();let T=!1;for(let C=-6;C<=-6+12*d;C+=.05){let v=l.a*(C-l.h)**2+l.k;Math.abs(v)>12||(T?o.lineTo(y(C),p(v)):(o.moveTo(y(C),p(v)),T=!0))}o.stroke(),o.fillStyle="#4F91C7",o.beginPath(),o.arc(y(l.h),p(l.k),7,0,7),o.fill(),o.fillStyle="#4A3B3F",o.font="bold 14px sans-serif",o.fillText(`vertex (${l.h}, ${l.k})`,y(l.h)+10,p(l.k)-10),h=0;for(let[C,v]of r){let A=Math.abs(l.a*(C-l.h)**2+l.k-v)<.3;A&&h++,o.fillStyle=A?"#5FAE6A":"#D9564A",o.beginPath(),o.arc(y(C),p(v),9,0,7),o.fill()}h===r.length&&d>=1&&!c&&(c=!0,g.textContent=`Yes! y = ${e}(x - ${t})\xB2 + ${i}. Vertex (${t}, ${i}).`,n.finish(1,1)),m=requestAnimationFrame(E)};return m=requestAnimationFrame(E),()=>cancelAnimationFrame(m)},px=n=>{let t=[[1,2],[3,4],[1,4],[3,8],[5,8]].map(([g,y])=>({n:g*(8/y),t:`${g}/${y}`})),i=Vs(t).slice(0,4),s=0,r=0,a=new Set,o=Ee("p","lprompt",n.body),l=Ee("div","lpizza",n.body),h=Ee("div","lctl",n.body),c="http://www.w3.org/2000/svg",d=document.createElementNS(c,"svg");d.setAttribute("viewBox","-110 -110 220 220"),d.setAttribute("width","240"),d.setAttribute("height","240"),l.appendChild(d);let u=[];for(let g=0;g<8;g++){let y=g/8*Math.PI*2-Math.PI/2,p=(g+1)/8*Math.PI*2-Math.PI/2,m=document.createElementNS(c,"path");m.setAttribute("d",`M0 0 L${Math.cos(y)*100} ${Math.sin(y)*100} A100 100 0 0 1 ${Math.cos(p)*100} ${Math.sin(p)*100} Z`),m.setAttribute("class","lslice"),m.setAttribute("tabindex","0"),m.setAttribute("role","button"),m.setAttribute("aria-label",`slice ${g+1}`);let _=()=>{a.has(g)?a.delete(g):a.add(g),m.classList.toggle("on",a.has(g))};m.addEventListener("click",_),m.addEventListener("keydown",E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),_())}),d.appendChild(m),u.push(m)}let f=()=>{a.clear(),u.forEach(g=>g.classList.remove("on")),o.textContent=`Customer ${s+1}: "I'd like ${i[s].t} of the pizza, please."`};f(),Fn(h,"Serve",()=>{let g=a.size===i[s].n;g&&r++,n.hint(g,g?`${i[s].t} of 8 slices is ${i[s].n} slices.`:`The pizza has 8 slices, so ${i[s].t} is ${i[s].n} slice${i[s].n>1?"s":""}.`),s++,s>=i.length?n.finish(r,i.length):f()})},mx=n=>{let e=[{n:"orange",r:[1,1,0]},{n:"green",r:[0,1,1]},{n:"purple",r:[1,0,1]}],t={red:[217,64,64],yellow:[247,214,70],blue:[64,110,214]},i=0,s=0,r=Ee("p","lprompt",n.body),a=Ee("div","lsw",n.body),o=Ee("div","lswatch",a),l=Ee("div","lswatch",a),h=Ee("div","lctl",n.body),c={red:0,yellow:0,blue:0},d=g=>{let y=g.reduce((m,_)=>m+_,0)||1,p=[0,0,0];return["red","yellow","blue"].forEach((m,_)=>{for(let E=0;E<3;E++)p[E]+=t[m][E]*g[_]}),p.map(m=>Math.round(m/y))},u=()=>{let g=[c.red,c.yellow,c.blue];l.style.background=g.some(y=>y)?`rgb(${d(g).join(",")})`:"#fff"};["red","yellow","blue"].forEach(g=>{let y=Ee("label","",h,g+" "),p=Ee("input","",y);p.type="range",p.min="0",p.max="2",p.step="1",p.value="0",p.oninput=()=>{c[g]=+p.value,u()}});let f=()=>{r.textContent=`Mix paint to make ${e[i].n}. Primaries are red, yellow and blue.`,o.style.background=`rgb(${d(e[i].r).join(",")})`};f(),Fn(h,"Check mix",()=>{let g=e[i].r,y=[c.red,c.yellow,c.blue],p=y.filter(_=>_>0),m=y.every((_,E)=>_>0==g[E]>0)&&p.every(_=>_===p[0]);m&&s++,n.hint(m,m?`${e[i].n} is made from equal parts of two primaries.`:"Use equal parts of just the two primaries that make it."),i++,i>=e.length?n.finish(s,e.length):f()})},gx=n=>{let e=Ee("canvas","lcanvas",n.body);e.width=640,e.height=260;let t=e.getContext("2d"),i=90,s=60/i,r=12,a=performance.now()+2e3,o=0,l=0,h=new Set,c=0,d=!1,u=new Set;Ee("p","lmsg",n.body,"Tap the button or press Space when a note reaches the line. Keep the beat!");let f=()=>{let p=(performance.now()-a)/1e3,m=Math.round(p/s);if(m>=0&&m<r&&!h.has(m)&&Math.abs(p-m*s)<.17){h.add(m),o++,c=1;try{let _=new AudioContext,E=_.createOscillator(),x=_.createGain();E.frequency.value=440+m%4*110,x.gain.value=.08,E.connect(x),x.connect(_.destination),E.start(),E.stop(_.currentTime+.12)}catch{}}},g=p=>{p.code==="Space"&&(p.preventDefault(),p.stopPropagation(),f())};addEventListener("keydown",g,!0),Fn(n.body,"Tap the beat",f,"lbtn big");let y=()=>{let p=(performance.now()-a)/1e3;t.fillStyle="#2b3350",t.fillRect(0,0,640,260),t.fillStyle="#EAB94E",t.fillRect(120,20,6,220);for(let m=0;m<r;m++){let _=123+(m*s-p)*190;if(_<-20||_>660)continue;let E=h.has(m);t.fillStyle=E?"#5FAE6A":"#F28F7E",t.beginPath(),t.arc(_,130,22,0,7),t.fill()}c=Math.max(0,c-.05),t.fillStyle=`rgba(255,255,255,${c*.4})`,t.fillRect(0,0,640,260),t.fillStyle="#fff",t.font="bold 20px sans-serif",t.fillText(`Hits ${o} / ${r}`,460,40),!d&&p>r*s+.6&&(d=!0,n.finish(o,r)),l=requestAnimationFrame(y)};return l=requestAnimationFrame(y),()=>{cancelAnimationFrame(l),removeEventListener("keydown",g,!0)}},yx=n=>{let e=[{who:"a parent",q:"The playground is unsafe.",options:["Repair the playground","Build a parking lot"],answer:0},{who:"a student",q:"The library closes too early.",options:["Keep it open later","Close it earlier"],answer:0},{who:"a teacher",q:"Classrooms need new books.",options:["Fund new books","Cut the book budget"],answer:0}],t={Alex:0,Sam:0},i=0,s=0,r=Ee("p","lprompt",n.body,"You are a candidate. Voters ask for help. Their votes decide the election."),a=Ee("div","lbig",n.body),o=Ee("div","lpool",n.body),l=()=>{if(i>=e.length){let c=t.Alex>=2?"You win":"You lose by a vote";a.textContent=`Votes: you ${t.Alex}, opponent ${t.Sam}. ${c}. In a democracy, the majority decides.`,o.innerHTML="",n.finish(s,e.length);return}let h=e[i];a.textContent=`${h.who[0].toUpperCase()+h.who.slice(1)} says: "${h.q}"`,o.innerHTML="",h.options.forEach((c,d)=>Fn(o,c,()=>{let u=d===h.answer;u?(s++,t.Alex++):t.Sam++,n.hint(u,u?"Listening to voters earns votes.":"That voter will not be pleased."),i++,l()},"lcard"))};l()};function xm(n,e,t,i={}){let s=Ee("div","l3d",n.body),r=new kr({antialias:!0});r.setPixelRatio(Math.min(2,devicePixelRatio||1)),s.appendChild(r.domElement);let a=new Ts;a.background=new Xe("#EFE6D2");let o=new As(16777215,1.4);o.position.set(3,5,4),a.add(new Es(16777215,14272936,2.2),o);let l=new Kt(i.fov??45,1.6,.1,50),h=new hn;a.add(h);let c=[];e(h,(k,O,J)=>{O.userData.part=k,c.push({name:k,mesh:O,info:J}),h.add(O)});let d=Ee("p","lprompt",n.body),u=.5,f=.25,g=i.cam??5,y=!1,p=0,m=0,_=0,E=0,x=0,M=Ee("div","llabel",s),T=Vs(t.filter(k=>c.some(O=>O.name===k))),C=()=>{d.textContent=E<T.length?`Click the ${T[E]}.`:"Done."};C();let v=new Cs,A=()=>{let k=s.clientWidth||640,O=Math.round(k/1.7);r.setSize(k,O),l.aspect=k/O,l.updateProjectionMatrix()};A();let P=k=>{let O=r.domElement.getBoundingClientRect();v.setFromCamera(new Me((k.clientX-O.left)/O.width*2-1,-((k.clientY-O.top)/O.height)*2+1),l);let F=v.intersectObjects(c.map(se=>se.mesh),!0)[0]?.object??null;for(;F&&!F.userData.part;)F=F.parent;return F?c.find(se=>se.name===F.userData.part):null};r.domElement.addEventListener("pointerdown",k=>{y=!0,p=k.clientX,m=k.clientY,_=0,r.domElement.setPointerCapture(k.pointerId)}),r.domElement.addEventListener("pointermove",k=>{if(y)u-=(k.clientX-p)*.01,f=Math.max(-.2,Math.min(1.2,f+(k.clientY-m)*.008)),_+=Math.abs(k.clientX-p)+Math.abs(k.clientY-m),p=k.clientX,m=k.clientY;else{let O=P(k);M.textContent=O?O.name:""}}),r.domElement.addEventListener("pointerup",k=>{if(y=!1,_<6){let O=P(k);O&&(M.textContent=`${O.name}: ${O.info}`,E<T.length&&(O.name===T[E]?(x++,E++,n.hint(!0,O.info)):n.hint(!1,`That is the ${O.name}. ${O.info}`),E>=T.length?n.finish(x,T.length+(E-x)):C()))}}),r.domElement.addEventListener("wheel",k=>{k.preventDefault(),g=Math.max(2.5,Math.min(9,g*Math.exp(k.deltaY*.001)))},{passive:!1});let S=0,D=0,B=()=>{D+=.016,y||(u+=.003),l.position.set(Math.sin(u)*Math.cos(f)*g,Math.sin(f)*g+.4,Math.cos(u)*Math.cos(f)*g),l.lookAt(0,.2,0),r.render(a,l),S=requestAnimationFrame(B)};return S=requestAnimationFrame(B),addEventListener("resize",A),()=>{cancelAnimationFrame(S),r.dispose(),removeEventListener("resize",A)}}var Gs=(n,e={})=>new Mn({color:n,roughness:.8,flatShading:!0,...e}),bx=n=>xm(n,(e,t)=>{let i=new ze(new Mt(3.2,2.2,2.2),Gs("#8FC9A0",{transparent:!0,opacity:.35}));t("cell wall",i,"The stiff outer layer that supports the plant cell.");let s=new ze(new It(.75,20,14),Gs("#9ED0F0",{transparent:!0,opacity:.75}));s.position.set(.5,0,0),s.scale.set(1.2,1,1),t("vacuole",s,"Stores water. It keeps the cell firm.");let r=new ze(new It(.4,16,12),Gs("#B8A8DA"));r.position.set(-1,.35,.3),t("nucleus",r,"The control center. It holds the cell's instructions."),[[-.8,-.6,.5],[1,.6,.6],[.1,-.7,-.6]].forEach(([a,o,l],h)=>{let c=new ze(new Sa(.17,.28,4,10),Gs("#3FA05C"));c.position.set(a,o,l),c.rotation.z=.8+h,t(h?"chloroplast "+h:"chloroplast",c,"Makes food from sunlight, water and carbon dioxide.")})},["cell wall","vacuole","nucleus","chloroplast"],{cam:5.2}),vx=n=>xm(n,(e,t)=>{let i=Gs("#E8C98A");for(let a=0;a<6;a++){let o=3.4-a*.55,l=new ze(new Mt(o,.4,o),i);l.position.y=-1+a*.4,t(a===5?"capstone":a===0?"base":"stone layer "+a,l,a===5?"The pointed top, once covered with gold.":a===0?"A huge square base. Each side is almost equal.":"Blocks of limestone stacked in layers.")}let s=new ze(new Mt(.5,.4,.5),Gs("#6b4f3a"));s.position.set(0,-.7,0),t("burial chamber",s,"Where the pharaoh was laid to rest.");let r=new ze(new Mt(.5,.5,1.2),Gs("#D6B876"));r.position.set(0,-1,2.7),t("sphinx",r,"A guardian with a lion's body.")},["capstone","base","burial chamber","sphinx"],{cam:6.4}),xx=n=>{let e=Ee("canvas","lcanvas",n.body);e.width=640,e.height=360;let t=e.getContext("2d");Ee("p","lprompt",n.body,"Set the moon's distance, then press Launch. Closer orbits are faster. Land the moon in the green ring (speed matches).");let i=Ee("div","lctl",n.body),s=Ee("label","",i,"Distance "),r=Ee("input","",s);r.type="range",r.min="60",r.max="160",r.value="110";let a=0,o=0,l=[],h=ro(80,140),c=0,d=!1;Ee("p","lmsg",n.body,`Challenge: get the moon to orbit at a distance of about ${h} (green ring).`),Fn(i,"Check orbit",()=>{c++;let f=Math.abs(+r.value-h)<8;d=f,n.hint(f,f?"Gravity pulls the moon into a stable path.":+r.value<h?"Too close. Gravity is stronger here.":"Too far. The pull is weaker."),f&&n.finish(1,c)});let u=()=>{let f=+r.value,g=2400/Math.pow(f,1.5)*4;a+=g*.016*1,t.fillStyle="#0f1530",t.fillRect(0,0,640,360),t.strokeStyle="#5FAE6A",t.lineWidth=3,t.beginPath(),t.arc(320,180,h,0,7),t.stroke(),t.strokeStyle="rgba(255,255,255,.3)",t.beginPath(),t.arc(320,180,f,0,7),t.stroke(),t.fillStyle="#4F91C7",t.beginPath(),t.arc(320,180,24,0,7),t.fill(),t.fillStyle=d?"#5FAE6A":"#EDE2CF",t.beginPath(),t.arc(320+Math.cos(a)*f,180+Math.sin(a)*f*.9,9,0,7),t.fill(),o=requestAnimationFrame(u)};return o=requestAnimationFrame(u),()=>cancelAnimationFrame(o)},_x=n=>{let e=Ee("canvas","lcanvas",n.body);e.width=640,e.height=320;let t=e.getContext("2d"),i={Sunlight:1,Water:1,"Carbon dioxide":1},s=Ee("div","lctl",n.body);for(let f of Object.keys(i)){let g=Ee("label","",s,f+" "),y=Ee("input","",g);y.type="range",y.min="0",y.max="3",y.step="1",y.value="1",y.oninput=()=>{i[f]=+y.value}}let r=Ee("p","lmsg",n.body,"Plants need sunlight, water and carbon dioxide. Remove one and watch the sugar. Find which ingredient limits growth."),a=0,o=0,l=0,h=0,c=[["Which makes a plant stop making sugar entirely?",["Sunlight (or any one missing)","A slightly cooler room"],0]],d=Ee("div","lpool",n.body);c[0][1].forEach((f,g)=>Fn(d,f,()=>{l++;let y=g===c[0][2];y&&h++,n.hint(y,"Photosynthesis needs all three: light, water and carbon dioxide."),n.finish(h,1),d.remove()},"lcard"));let u=()=>{let f=Math.min(i.Sunlight,i.Water,i["Carbon dioxide"]);o=Math.min(100,o+f*.15),t.fillStyle="#E6F3FA",t.fillRect(0,0,640,320),t.fillStyle="#6b4f3a",t.fillRect(0,270,640,50),t.strokeStyle="#3FA05C",t.lineWidth=8,t.beginPath(),t.moveTo(320,270),t.lineTo(320,140),t.stroke();for(let g=0;g<6;g++)t.fillStyle="#4FAE6B",t.beginPath(),t.ellipse(320+(g%2?40:-40),140+g*18,34,12,g%2?.5:-.5,0,7),t.fill();t.fillStyle="#F8D977",t.beginPath(),t.arc(80,70,20+i.Sunlight*6,0,7),t.fill(),t.fillStyle="#4F91C7";for(let g=0;g<i.Water*4;g++)t.beginPath(),t.arc(300+g%3*14,300-g*4,4,0,7),t.fill();t.fillStyle="#555",t.font="bold 16px sans-serif",t.fillText(`CO2 x${i["Carbon dioxide"]}`,480,80),t.fillStyle="#E07A66",t.fillRect(500,280-o*1.6,90,o*1.6),t.fillStyle="#333",t.fillText(`Sugar ${o|0}`,506,300),a=requestAnimationFrame(u)};return a=requestAnimationFrame(u),()=>cancelAnimationFrame(a)},Sx=n=>{let e="READ",t=Ee("div","lcol",n.body),i=Ee("p","lprompt",t,"Copying by hand takes months. Set the type: click the letters to spell READ, then crank the press."),s=Ee("div","lpool",t),r=Ee("div","lbig",t,"_ _ _ _"),a=Ee("div","lmsg",t),o="",l=0,h=0,c=Fn(t,"Crank the press",()=>{h++,l=Math.floor(h/1),a.textContent=`Pages printed: ${l}. A scribe copies 1 page per day by hand.`,l>=20&&(n.hint(!0,"One press made hundreds of copies in a day."),n.finish(1,1),c.disabled=!0)},"lbtn big");c.disabled=!0,Vs(e.split("")).forEach(d=>{let u=Fn(s,d,()=>{e[o.length]===d?(o+=d,r.textContent=o.split("").join(" ")+" "+"_ ".repeat(4-o.length),u.disabled=!0,o===e&&(c.disabled=!1,i.textContent="Type is set. Crank the press to print copies!")):n.hint(!1,`Spell ${e} in order.`)},"lcard")})},wx={parabola:fx,pizza:px,cardsort:vm,cell:bx,photosynth:_x,gravity:xx,pyramid:vx,press:Sx,vote:yx,beats:gx,colormix:mx};function ec(n,e,t,i){n.innerHTML="",n.classList.add("show");let s=Ee("div","lpanel",n),r=Ee("div","lhead",s);Ee("h2","",r,e.lab.title);let a=Fn(r,"Close",()=>p(),"lbtn"),o=Ee("p","lintro",s,e.lab.intro),l=Ee("div","lpartner",s),h=Ee("div","lstage",s),c=Ee("div","lbubble",s),d=Ee("div","lresult",s),u=null,f,g=!1,y=!1,p=()=>{try{f?.()}catch{}n.classList.remove("show"),n.innerHTML="",i()},m=(E,x=!1)=>{c.textContent=(x?"You: ":u?u.first+": ":"")+E,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),4200)},_=()=>{if(g)return;g=!0,l.querySelectorAll("button").forEach(x=>x.disabled=!0);let E={body:h,cfg:e.lab.cfg,partner:u,say:m,hint:(x,M)=>{if(!u){m(M);return}let T=he.mem(u.id),C=Math.random()<jh(u,e.subject);m(x?C?`Nice one! ${M}`:"Hey, that worked!":C?`Hmm, try again. ${M}`:"Hmm, I'm not sure either, let's think.",!1)},finish:(x,M)=>{if(y)return;y=!0;let T=M?x/M:1;d.innerHTML="",Ee("b","",d,T>=.99?"Perfect!":T>=.6?"Nice work!":"Good try, give it another go."),Ee("span","",d,` ${x} of ${M}${u?` with ${u.first}`:""}.`),Fn(d,"Play again",()=>ec(n,e,t,i)),d.classList.add("show"),he.profile.stats.quizTotal+=M?1:0,T>=.6&&(he.profile.stats.quizRight+=1),he.save(),u&&he.edit(u.id,C=>{C.met=!0,C.fr=Math.min(100,C.fr+(T>=.6?4:2)),C.helped+=T>=.6?1:0,C.topics.push("lab:"+e.lab.id),C.topics.length>24&&C.topics.shift()})}};f=(wx[e.lab.id]??vm)(E)};Ee("b","",l,"Work with:"),Fn(l,"Alone",()=>{u=null,_()},"lbtn"),Vs(t).slice(0,3).forEach(E=>{let x=Fn(l,"",()=>{u=E,m("Let's do this together!"),_()},"lbtn partner"),M=Ee("canvas","",x);M.width=60,M.height=76,so(M,E.look,0,0),Ee("span","",x,`${E.first} (${E.role==="staff"?E.title:"Grade "+E.grade})`)}),addEventListener("keydown",function E(x){x.key==="Escape"&&(removeEventListener("keydown",E),n.classList.contains("show")&&p())})}var an=n=>document.getElementById(n),Mx=new URLSearchParams(location.search),Sm=["math","ela","science","history"],jt=new Vh(an("game"));window.__room=jt;var id=new Yh(document.body),Tx=new Zh(document.body),wm=new Qh(document.body),oo=ju("math"),Ex="math";(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256);for(let i=0;i<t.data.length;i+=4){let s=226+Math.random()*29;t.data[i]=s,t.data[i+1]=s*.965,t.data[i+2]=s*.9,t.data[i+3]=255}e.putImageData(t,0,0),an("paper").style.backgroundImage=`url(${n.toDataURL()})`})();var Di=new Kh({seated:()=>jt.seatedDefs(),setHand:(n,e)=>jt.setHand(n,e),playerHand:n=>jt.setPlayerHand(n),playerSeated:()=>!0,playerLook:()=>({...pi(he.profile.avatar,11),tag:!1})},document.body);Di.auto=!1;window.__life=Di;Di.onState=n=>{an("bHand").classList.toggle("on",n.handUp),an("bHand").textContent=n.handUp?"Hand up":"Raise hand (H)"};an("bHand").onclick=()=>Di.raiseHand();var nd=0,ao=an("cap"),Ax={caption(n,e,t){ao.innerHTML="";let i=document.createElement("b");i.textContent=n+":",ao.append(i,document.createTextNode(" "+e)),ao.classList.add("show"),clearTimeout(nd),nd=window.setTimeout(()=>ao.classList.remove("show"),t+400)},clearCaption(){clearTimeout(nd),ao.classList.remove("show")},step(n,e,t){an("steps").textContent=`Step ${e} of ${t}: ${n}`},labReady(n){an("bLab").classList.add("on")},async ask(n){await Di.askNow(n)},setTitle(n){an("ltitle").textContent=n}},lo=new Xh(jt,Ax);window.__dir=lo;function Mm(n,e=[]){Ex=n,oo=ju(n),an("subj").textContent=n==="ela"?"ELA":n[0].toUpperCase()+n.slice(1),jt.assign(e),Di.stop(),Di.lesson=oo,id.close(),an("bLab").classList.remove("on"),jt.auto=!0,Em("auto"),lo.run(oo),Di.start(n)}an("bSkip").onclick=()=>lo.skip();an("bFriends").onclick=()=>Tx.toggle();an("bAvatar").onclick=()=>wm.show();wm.onSave=()=>jt.rebuildPlayer();he.onChange(()=>{try{jt.rebuildPlayer()}catch{}});var Tm=Array.from(document.querySelectorAll("[data-cam]"));function Em(n){Tm.forEach(e=>e.classList.toggle("on",e.dataset.cam===n))}Tm.forEach(n=>n.addEventListener("click",()=>{let e=n.dataset.cam;e==="auto"?(jt.auto=!0,jt.setMode("follow")):jt.setMode(e,!0),Em(e)}));addEventListener("keydown",n=>{if(n.target?.tagName==="INPUT")return;n.key.toLowerCase()==="n"&&lo.skip()});jt.onTapStudent=n=>{id.isOpen||id.open(n,{place:"class",kind:"class",period:oo.title,clock:""})};jt.onTapTeacher=()=>{Di.raiseHand()};jt.onHover=(n,e,t)=>{let i=an("tip");if(!n){i.style.display="none";return}i.textContent=n,i.style.display="block",i.style.left=e+14+"px",i.style.top=t+14+"px"};var sd=()=>{an("labHost").classList.contains("show")||(jt.inputLocked=!0,ec(an("labHost"),oo,jt.seatedDefs(),()=>{jt.inputLocked=!1}))};window.__openLab=sd;jt.onTapDemo=sd;an("bLab").onclick=sd;var _m=Mx.get("subject");addEventListener("message",n=>{let e=n.data;e&&e.type==="unify:lesson"&&Sm.includes(e.subject)?Mm(e.subject,Array.isArray(e.attendees)?e.attendees.filter(t=>Number.isInteger(t)):[]):e&&e.type==="unify:exit"&&(lo.stop(),Di.stop())});Mm(Sm.includes(_m)?_m:"math");parent!==window&&parent.postMessage({type:"unify:auditorium-ready"},"*");window.__vids=qh;window.__labs={open:(n,e)=>{let t=hm.find(i=>i.lab.id===n&&(!e||i.lab.cfg===e));return ec(an("labHost"),t,jt.seatedDefs(),()=>{}),t.title}};})();
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
