"use strict";(()=>{var va="186";var kh=0,Qo=1,Bh=2;var er=1,Oh=2,us=3,fi=0,en=1,tn=2,kn=0,ds=1,el=2,tl=3,nl=4,zh=5;var Ci=100,Vh=101,Gh=102,Hh=103,Wh=104,Xh=200,qh=201,Yh=202,Zh=203,il=204,sl=205,Jh=206,$h=207,Kh=208,jh=209,Qh=210,ec=211,tc=212,nc=213,ic=214,Or=0,zr=1,Vr=2,Qi=3,Gr=4,Hr=5,Wr=6,Xr=7,rl=0,sc=1,rc=2,Sn=0,al=1,ol=2,ll=3,hl=4,cl=5,ul=6,dl=7;var fl=300,pi=301,Pi=302,ya=303,xa=304,tr=306,qr=1e3,In=1001,Yr=1002,Ot=1003,ac=1004;var nr=1005;var Vt=1006,ba=1007;var mi=1008;var rn=1009,pl=1010,ml=1011,fs=1012,Sa=1013,Mn=1014,Tn=1015,wn=1016,Ma=1017,Ta=1018,ps=1020,gl=35902,_l=35899,vl=1021,yl=1022,pn=1023,Ln=1026,gi=1027,xl=1028,wa=1029,_i=1030,Ea=1031;var Aa=1033,ir=33776,sr=33777,rr=33778,ar=33779,Ca=35840,Pa=35841,Ra=35842,Ia=35843,La=36196,Da=37492,Fa=37496,Na=37488,Ua=37489,or=37490,ka=37491,Ba=37808,Oa=37809,za=37810,Va=37811,Ga=37812,Ha=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Za=37818,Ja=37819,$a=37820,Ka=37821,ja=36492,Qa=36494,eo=36495,to=36283,no=36284,lr=36285,io=36286;var Is=2300,Zr=2301,Ur=2302,Xo=2303,qo=2400,Yo=2401,Zo=2402;var oc=3200;var so=0,lc=1,Kn="",ln="srgb",Ls="srgb-linear",Ds="linear",mt="srgb";var kr=7680;var hc=519,cc=512,uc=513,dc=514,ro=515,fc=516,pc=517,ao=518,mc=519,bl=35044;var Sl="300 es",bn=2e3,es=2001;function Nu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Uu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function gc(){let e=Fs("canvas");return e.style.display="block",e}var ch={},ts=null;function Ns(...e){let t="THREE."+e.shift();ts?ts("log",t,...e):console.log(t,...e)}function _c(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function He(...e){e=_c(e);let t="THREE."+e.shift();if(ts)ts("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ge(...e){e=_c(e);let t="THREE."+e.shift();if(ts)ts("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ei(...e){let t=e.join(" ");t in ch||(ch[t]=!0,He(...e))}function vc(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var yc={[Or]:zr,[Vr]:Wr,[Gr]:Xr,[Qi]:Hr,[zr]:Or,[Wr]:Vr,[Xr]:Gr,[Hr]:Qi},Dn=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Br=Math.PI/180,Jr=180/Math.PI;function ai(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[e&255]+Wt[e>>8&255]+Wt[e>>16&255]+Wt[e>>24&255]+"-"+Wt[t&255]+Wt[t>>8&255]+"-"+Wt[t>>16&15|64]+Wt[t>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function ku(e,t){return(e%t+t)%t}function So(e,t,n){return(1-n)*e+n*t}function Rn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var We=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ct(this.x,t.x,n.x),this.y=ct(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ct(this.x,t,n),this.y=ct(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ct(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,c){let l=i[s+0],h=i[s+1],u=i[s+2],g=i[s+3],p=r[a+0],f=r[a+1],_=r[a+2],M=r[a+3];if(g!==M||l!==p||h!==f||u!==_){let d=l*p+h*f+u*_+g*M;d<0&&(p=-p,f=-f,_=-_,M=-M,d=-d);let m=1-c;if(d<.9995){let w=Math.acos(d),F=Math.sin(w);m=Math.sin(m*w)/F,c=Math.sin(c*w)/F,l=l*m+p*c,h=h*m+f*c,u=u*m+_*c,g=g*m+M*c}else{l=l*m+p*c,h=h*m+f*c,u=u*m+_*c,g=g*m+M*c;let w=1/Math.sqrt(l*l+h*h+u*u+g*g);l*=w,h*=w,u*=w,g*=w}}t[n]=l,t[n+1]=h,t[n+2]=u,t[n+3]=g}static multiplyQuaternionsFlat(t,n,i,s,r,a){let c=i[s],l=i[s+1],h=i[s+2],u=i[s+3],g=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return t[n]=c*_+u*g+l*f-h*p,t[n+1]=l*_+u*p+h*g-c*f,t[n+2]=h*_+u*f+c*p-l*g,t[n+3]=u*_-c*g-l*p-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,a=t._order,c=Math.cos,l=Math.sin,h=c(i/2),u=c(s/2),g=c(r/2),p=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*u*g+h*f*_,this._y=h*f*g-p*u*_,this._z=h*u*_+p*f*g,this._w=h*u*g-p*f*_;break;case"YXZ":this._x=p*u*g+h*f*_,this._y=h*f*g-p*u*_,this._z=h*u*_-p*f*g,this._w=h*u*g+p*f*_;break;case"ZXY":this._x=p*u*g-h*f*_,this._y=h*f*g+p*u*_,this._z=h*u*_+p*f*g,this._w=h*u*g-p*f*_;break;case"ZYX":this._x=p*u*g-h*f*_,this._y=h*f*g+p*u*_,this._z=h*u*_-p*f*g,this._w=h*u*g+p*f*_;break;case"YZX":this._x=p*u*g+h*f*_,this._y=h*f*g+p*u*_,this._z=h*u*_-p*f*g,this._w=h*u*g-p*f*_;break;case"XZY":this._x=p*u*g-h*f*_,this._y=h*f*g-p*u*_,this._z=h*u*_+p*f*g,this._w=h*u*g+p*f*_;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],c=n[5],l=n[9],h=n[2],u=n[6],g=n[10],p=i+c+g;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(i>c&&i>g){let f=2*Math.sqrt(1+i-c-g);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(c>g){let f=2*Math.sqrt(1+c-i-g);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+g-i-c);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ct(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,c=n._x,l=n._y,h=n._z,u=n._w;return this._x=i*u+a*c+s*h-r*l,this._y=s*u+a*l+r*c-i*h,this._z=r*u+a*h+i*l-s*c,this._w=a*u-i*c-s*l-r*h,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,c=this.dot(t);c<0&&(i=-i,s=-s,r=-r,a=-a,c=-c);let l=1-n;if(c<.9995){let h=Math.acos(c),u=Math.sin(h);l=Math.sin(l*h)/u,n=Math.sin(n*h)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(uh.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,c=t.z,l=t.w,h=2*(a*s-c*i),u=2*(c*n-r*s),g=2*(r*i-a*n);return this.x=n+l*h+a*g-c*u,this.y=i+l*u+c*h-r*g,this.z=s+l*g+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ct(this.x,t.x,n.x),this.y=ct(this.y,t.y,n.y),this.z=ct(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ct(this.x,t,n),this.y=ct(this.y,t,n),this.z=ct(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,a=n.x,c=n.y,l=n.z;return this.x=s*l-r*c,this.y=r*a-i*l,this.z=i*c-s*a,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ct(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mo=new W,uh=new Fn,Ye=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,r,a,c,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,c,l,h)}set(t,n,i,s,r,a,c,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=c,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],c=i[3],l=i[6],h=i[1],u=i[4],g=i[7],p=i[2],f=i[5],_=i[8],M=s[0],d=s[3],m=s[6],w=s[1],F=s[4],S=s[7],E=s[2],T=s[5],P=s[8];return r[0]=a*M+c*w+l*E,r[3]=a*d+c*F+l*T,r[6]=a*m+c*S+l*P,r[1]=h*M+u*w+g*E,r[4]=h*d+u*F+g*T,r[7]=h*m+u*S+g*P,r[2]=p*M+f*w+_*E,r[5]=p*d+f*F+_*T,r[8]=p*m+f*S+_*P,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],c=t[5],l=t[6],h=t[7],u=t[8];return n*a*u-n*c*h-i*r*u+i*c*l+s*r*h-s*a*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],c=t[5],l=t[6],h=t[7],u=t[8],g=u*a-c*h,p=c*l-u*r,f=h*r-a*l,_=n*g+i*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=g*M,t[1]=(s*h-u*i)*M,t[2]=(c*i-s*a)*M,t[3]=p*M,t[4]=(u*n-s*l)*M,t[5]=(s*r-c*n)*M,t[6]=f*M,t[7]=(i*l-h*n)*M,t[8]=(a*n-i*r)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,c){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*c)+a+t,-s*h,s*l,-s*(-h*a+l*c)+c+n,0,0,1),this}scale(t,n){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(To.makeScale(t,n)),this}rotate(t){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(To.makeRotation(-t)),this}translate(t,n){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(To.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},To=new Ye,dh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){let e={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ls]:{primaries:t,whitePoint:i,transfer:Ds,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:i,transfer:mt,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),e}var ht=Bu();function Yn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ji(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ni,$r=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ni===void 0&&(Ni=Fs("canvas")),Ni.width=t.width,Ni.height=t.height;let s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ni}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Fs("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yn(n[i]/255)*255):n[i]=Yn(n[i]);return{data:n,width:t.width,height:t.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ou=0,ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,c=s.length;a<c;a++)s[a].isDataTexture?r.push(wo(s[a].image)):r.push(wo(s[a]))}else r=wo(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function wo(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?$r.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var zu=0,Eo=new W,jt=class e extends Dn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=In,s=In,r=Vt,a=mi,c=pn,l=rn,h=e.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=ai(),this.name="",this.source=new ns(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eo).x}get height(){return this.source.getSize(Eo).y}get depth(){return this.source.getSize(Eo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=fl;jt.DEFAULT_ANISOTROPY=1;var Rt=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,h=l[0],u=l[4],g=l[8],p=l[1],f=l[5],_=l[9],M=l[2],d=l[6],m=l[10];if(Math.abs(u-p)<.01&&Math.abs(g-M)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(g+M)<.1&&Math.abs(_+d)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let F=(h+1)/2,S=(f+1)/2,E=(m+1)/2,T=(u+p)/4,P=(g+M)/4,o=(_+d)/4;return F>S&&F>E?F<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(F),s=T/i,r=P/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=o/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=P/r,s=o/r),this.set(i,s,r,n),this}let w=Math.sqrt((d-_)*(d-_)+(g-M)*(g-M)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(d-_)/w,this.y=(g-M)/w,this.z=(p-u)/w,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ct(this.x,t.x,n.x),this.y=ct(this.y,t.y,n.y),this.z=ct(this.z,t.z,n.z),this.w=ct(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ct(this.x,t,n),this.y=ct(this.y,t,n),this.z=ct(this.z,t,n),this.w=ct(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kr=class extends Dn{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,t,n),this.scissorTest=!1,this.viewport=new Rt(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},r=new jt(s),a=i.count;for(let c=0;c<a;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Kr{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Us=class extends jt{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends jt{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var vt=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,r,a,c,l,h,u,g,p,f,_,M,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,c,l,h,u,g,p,f,_,M,d)}set(t,n,i,s,r,a,c,l,h,u,g,p,f,_,M,d){let m=this.elements;return m[0]=t,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=c,m[13]=l,m[2]=h,m[6]=u,m[10]=g,m[14]=p,m[3]=f,m[7]=_,m[11]=M,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let p=a*u,f=a*g,_=c*u,M=c*g;n[0]=l*u,n[4]=-l*g,n[8]=h,n[1]=f+_*h,n[5]=p-M*h,n[9]=-c*l,n[2]=M-p*h,n[6]=_+f*h,n[10]=a*l}else if(t.order==="YXZ"){let p=l*u,f=l*g,_=h*u,M=h*g;n[0]=p+M*c,n[4]=_*c-f,n[8]=a*h,n[1]=a*g,n[5]=a*u,n[9]=-c,n[2]=f*c-_,n[6]=M+p*c,n[10]=a*l}else if(t.order==="ZXY"){let p=l*u,f=l*g,_=h*u,M=h*g;n[0]=p-M*c,n[4]=-a*g,n[8]=_+f*c,n[1]=f+_*c,n[5]=a*u,n[9]=M-p*c,n[2]=-a*h,n[6]=c,n[10]=a*l}else if(t.order==="ZYX"){let p=a*u,f=a*g,_=c*u,M=c*g;n[0]=l*u,n[4]=_*h-f,n[8]=p*h+M,n[1]=l*g,n[5]=M*h+p,n[9]=f*h-_,n[2]=-h,n[6]=c*l,n[10]=a*l}else if(t.order==="YZX"){let p=a*l,f=a*h,_=c*l,M=c*h;n[0]=l*u,n[4]=M-p*g,n[8]=_*g+f,n[1]=g,n[5]=a*u,n[9]=-c*u,n[2]=-h*u,n[6]=f*g+_,n[10]=p-M*g}else if(t.order==="XZY"){let p=a*l,f=a*h,_=c*l,M=c*h;n[0]=l*u,n[4]=-g,n[8]=h*u,n[1]=p*g+M,n[5]=a*u,n[9]=f*g-_,n[2]=_*g-f,n[6]=c*u,n[10]=M*g+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vu,t,Gu)}lookAt(t,n,i){let s=this.elements;return an.subVectors(t,n),an.lengthSq()===0&&(an.z=1),an.normalize(),ti.crossVectors(i,an),ti.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ti.crossVectors(i,an)),ti.normalize(),pr.crossVectors(an,ti),s[0]=ti.x,s[4]=pr.x,s[8]=an.x,s[1]=ti.y,s[5]=pr.y,s[9]=an.y,s[2]=ti.z,s[6]=pr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],c=i[4],l=i[8],h=i[12],u=i[1],g=i[5],p=i[9],f=i[13],_=i[2],M=i[6],d=i[10],m=i[14],w=i[3],F=i[7],S=i[11],E=i[15],T=s[0],P=s[4],o=s[8],A=s[12],x=s[1],k=s[5],G=s[9],$=s[13],U=s[2],q=s[6],te=s[10],X=s[14],ae=s[3],ie=s[7],ne=s[11],le=s[15];return r[0]=a*T+c*x+l*U+h*ae,r[4]=a*P+c*k+l*q+h*ie,r[8]=a*o+c*G+l*te+h*ne,r[12]=a*A+c*$+l*X+h*le,r[1]=u*T+g*x+p*U+f*ae,r[5]=u*P+g*k+p*q+f*ie,r[9]=u*o+g*G+p*te+f*ne,r[13]=u*A+g*$+p*X+f*le,r[2]=_*T+M*x+d*U+m*ae,r[6]=_*P+M*k+d*q+m*ie,r[10]=_*o+M*G+d*te+m*ne,r[14]=_*A+M*$+d*X+m*le,r[3]=w*T+F*x+S*U+E*ae,r[7]=w*P+F*k+S*q+E*ie,r[11]=w*o+F*G+S*te+E*ne,r[15]=w*A+F*$+S*X+E*le,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],c=t[5],l=t[9],h=t[13],u=t[2],g=t[6],p=t[10],f=t[14],_=t[3],M=t[7],d=t[11],m=t[15],w=l*f-h*p,F=c*f-h*g,S=c*p-l*g,E=a*f-h*u,T=a*p-l*u,P=a*g-c*u;return n*(M*w-d*F+m*S)-i*(_*w-d*E+m*T)+s*(_*F-M*E+m*P)-r*(_*S-M*T+d*P)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10];return n*(a*u-c*h)-i*(r*u-c*l)+s*(r*h-a*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],c=t[5],l=t[6],h=t[7],u=t[8],g=t[9],p=t[10],f=t[11],_=t[12],M=t[13],d=t[14],m=t[15],w=n*c-i*a,F=n*l-s*a,S=n*h-r*a,E=i*l-s*c,T=i*h-r*c,P=s*h-r*l,o=u*M-g*_,A=u*d-p*_,x=u*m-f*_,k=g*d-p*M,G=g*m-f*M,$=p*m-f*d,U=w*$-F*G+S*k+E*x-T*A+P*o;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/U;return t[0]=(c*$-l*G+h*k)*q,t[1]=(s*G-i*$-r*k)*q,t[2]=(M*P-d*T+m*E)*q,t[3]=(p*T-g*P-f*E)*q,t[4]=(l*x-a*$-h*A)*q,t[5]=(n*$-s*x+r*A)*q,t[6]=(d*S-_*P-m*F)*q,t[7]=(u*P-p*S+f*F)*q,t[8]=(a*G-c*x+h*o)*q,t[9]=(i*x-n*G-r*o)*q,t[10]=(_*T-M*S+m*w)*q,t[11]=(g*S-u*T-f*w)*q,t[12]=(c*A-a*k-l*o)*q,t[13]=(n*k-i*A+s*o)*q,t[14]=(M*F-_*E-d*w)*q,t[15]=(u*E-g*F+p*w)*q,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,c=t.y,l=t.z,h=r*a,u=r*c;return this.set(h*a+i,h*c-s*l,h*l+s*c,0,h*c+s*l,u*c+i,u*l-s*a,0,h*l-s*c,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,a=n._y,c=n._z,l=n._w,h=r+r,u=a+a,g=c+c,p=r*h,f=r*u,_=r*g,M=a*u,d=a*g,m=c*g,w=l*h,F=l*u,S=l*g,E=i.x,T=i.y,P=i.z;return s[0]=(1-(M+m))*E,s[1]=(f+S)*E,s[2]=(_-F)*E,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(p+m))*T,s[6]=(d+w)*T,s[7]=0,s[8]=(_+F)*P,s[9]=(d-w)*P,s[10]=(1-(p+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length(),c=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let h=1/a,u=1/c,g=1/l;return _n.elements[0]*=h,_n.elements[1]*=h,_n.elements[2]*=h,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=g,_n.elements[9]*=g,_n.elements[10]*=g,n.setFromRotationMatrix(_n),i.x=a,i.y=c,i.z=l,this}makePerspective(t,n,i,s,r,a,c=bn,l=!1){let h=this.elements,u=2*r/(n-t),g=2*r/(i-s),p=(n+t)/(n-t),f=(i+s)/(i-s),_,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(c===bn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(c===es)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=u,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=g,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,i,s,r,a,c=bn,l=!1){let h=this.elements,u=2/(n-t),g=2/(i-s),p=-(n+t)/(n-t),f=-(i+s)/(i-s),_,M;if(l)_=1/(a-r),M=a/(a-r);else if(c===bn)_=-2/(a-r),M=-(a+r)/(a-r);else if(c===es)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=u,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=g,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=_,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Ui=new W,_n=new vt,Vu=new W(0,0,0),Gu=new W(1,1,1),ti=new W,pr=new W,an=new W,ph=new vt,mh=new Fn,Zn=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],g=s[2],p=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hu=0,gh=new W,ki=new Fn,Vn=new vt,mr=new W,Ts=new W,Wu=new W,Xu=new Fn,_h=new W(1,0,0),vh=new W(0,1,0),yh=new W(0,0,1),xh={type:"added"},qu={type:"removed"},Bi={type:"childadded",child:null},Ao={type:"childremoved",child:null},Gt=class e extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new Zn,i=new Fn,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ye}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ki.setFromAxisAngle(t,n),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,n){return ki.setFromAxisAngle(t,n),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,n){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?mr.copy(t):mr.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ts,mr,this.up):Vn.lookAt(mr,Ts,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Vn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(qu),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,Wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let g=l[h];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(r(t.materials,this.material[l]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(r(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),g=a(t.shapes),p=a(t.skeletons),f=a(t.animations),_=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),g.length>0&&(i.shapes=g),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(c){let l=[];for(let h in c){let u=c[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new W(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yu={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null,c=this._targetRay,l=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let M of t.hand.values()){let d=n.getJointPose(M,i),m=this._getHandJoint(h,M);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let u=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],p=u.position.distanceTo(g.position),f=.02,_=.005;h.inputState.pinching&&p>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Yu)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Co(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var rt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ht.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ht.workingColorSpace){return this.r=t,this.g=n,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ht.workingColorSpace){if(t=ku(t,1),n=ct(n,0,1),i=ct(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Co(a,r,t+1/3),this.g=Co(a,r,t),this.b=Co(a,r,t-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(t,n=ln){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],c=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:He("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);He("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ln){let i=xc[t.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ht.workingToColorSpace(Xt.copy(this),t),Math.round(ct(Xt.r*255,0,255))*65536+Math.round(ct(Xt.g*255,0,255))*256+Math.round(ct(Xt.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ht.workingColorSpace){ht.workingToColorSpace(Xt.copy(this),n);let i=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(i,s,r),c=Math.min(i,s,r),l,h,u=(c+a)/2;if(c===a)l=0,h=0;else{let g=a-c;switch(h=u<=.5?g/(a+c):g/(2-a-c),a){case i:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-i)/g+2;break;case r:l=(i-s)/g+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,n=ht.workingColorSpace){return ht.workingToColorSpace(Xt.copy(this),n),t.r=Xt.r,t.g=Xt.g,t.b=Xt.b,t}getStyle(t=ln){ht.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,i=Xt.g,s=Xt.b;return t!==ln?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+n,ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ni),t.getHSL(gr);let i=So(ni.h,gr.h,n),s=So(ni.s,gr.s,n),r=So(ni.l,gr.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new rt;rt.NAMES=xc;var ks=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new rt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bs=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},vn=new W,Gn=new W,Po=new W,Hn=new W,Oi=new W,zi=new W,bh=new W,Ro=new W,Io=new W,Lo=new W,Do=new Rt,Fo=new Rt,No=new Rt,qn=class e{constructor(t=new W,n=new W,i=new W){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),vn.subVectors(t,n),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){vn.subVectors(s,n),Gn.subVectors(i,n),Po.subVectors(t,n);let a=vn.dot(vn),c=vn.dot(Gn),l=vn.dot(Po),h=Gn.dot(Gn),u=Gn.dot(Po),g=a*h-c*c;if(g===0)return r.set(0,0,0),null;let p=1/g,f=(h*l-c*u)*p,_=(a*u-c*l)*p;return r.set(1-f-_,_,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,n,i,s,r,a,c,l){return this.getBarycoord(t,n,i,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(c,Hn.z),l)}static getInterpolatedAttribute(t,n,i,s,r,a){return Do.setScalar(0),Fo.setScalar(0),No.setScalar(0),Do.fromBufferAttribute(t,n),Fo.fromBufferAttribute(t,i),No.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Do,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(t,n,i,s){return vn.subVectors(i,n),Gn.subVectors(t,n),vn.cross(Gn).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,a,c;Oi.subVectors(s,i),zi.subVectors(r,i),Ro.subVectors(t,i);let l=Oi.dot(Ro),h=zi.dot(Ro);if(l<=0&&h<=0)return n.copy(i);Io.subVectors(t,s);let u=Oi.dot(Io),g=zi.dot(Io);if(u>=0&&g<=u)return n.copy(s);let p=l*g-u*h;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Oi,a);Lo.subVectors(t,r);let f=Oi.dot(Lo),_=zi.dot(Lo);if(_>=0&&f<=_)return n.copy(r);let M=f*h-l*_;if(M<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(i).addScaledVector(zi,c);let d=u*_-f*g;if(d<=0&&g-u>=0&&f-_>=0)return bh.subVectors(r,s),c=(g-u)/(g-u+(f-_)),n.copy(s).addScaledVector(bh,c);let m=1/(d+M+p);return a=M*m,c=p*m,n.copy(i).addScaledVector(Oi,a).addScaledVector(zi,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(yn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(yn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=yn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=r.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_r.copy(i.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),vr.subVectors(this.max,ws),Vi.subVectors(t.a,ws),Gi.subVectors(t.b,ws),Hi.subVectors(t.c,ws),ii.subVectors(Gi,Vi),si.subVectors(Hi,Gi),bi.subVectors(Vi,Hi);let n=[0,-ii.z,ii.y,0,-si.z,si.y,0,-bi.z,bi.y,ii.z,0,-ii.x,si.z,0,-si.x,bi.z,0,-bi.x,-ii.y,ii.x,0,-si.y,si.x,0,-bi.y,bi.x,0];return!Uo(n,Vi,Gi,Hi,vr)||(n=[1,0,0,0,1,0,0,0,1],!Uo(n,Vi,Gi,Hi,vr))?!1:(yr.crossVectors(ii,si),n=[yr.x,yr.y,yr.z],Uo(n,Vi,Gi,Hi,vr))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wn=[new W,new W,new W,new W,new W,new W,new W,new W],yn=new W,_r=new oi,Vi=new W,Gi=new W,Hi=new W,ii=new W,si=new W,bi=new W,ws=new W,vr=new W,yr=new W,Si=new W;function Uo(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Si.fromArray(e,r);let c=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),h=n.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>c)return!1}return!0}var Ft=new W,xr=new We,Zu=0,hn=class extends Dn{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zu++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=bl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xr.fromBufferAttribute(this,n),xr.applyMatrix3(t),this.setXY(n,xr.x,xr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(t),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(t),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(t),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(t),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=_t(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Rn(n,this.array)),n}setX(t,n){return this.normalized&&(n=_t(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Rn(n,this.array)),n}setY(t,n){return this.normalized&&(n=_t(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Rn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=_t(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Rn(n,this.array)),n}setW(t,n){return this.normalized&&(n=_t(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Os=class extends hn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var zs=class extends hn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var bt=class extends hn{constructor(t,n,i){super(new Float32Array(t),n,i)}},Ju=new oi,Es=new W,ko=new W,rs=class{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Ju.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);let n=Es.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Es,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(ko)),this.expandByPoint(Es.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$u=0,fn=new vt,Bo=new Gt,Wi=new W,on=new oi,As=new oi,kt=new W,qt=class e extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nu(t)?zs:Os)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,n,i){return fn.makeTranslation(t,n,i),this.applyMatrix4(fn),this}scale(t,n,i){return fn.makeScale(t,n,i),this.applyMatrix4(fn),this}lookAt(t){return Bo.lookAt(t),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){let c=n[r];As.setFromBufferAttribute(c),this.morphTargetsRelative?(kt.addVectors(on.min,As.min),on.expandByPoint(kt),kt.addVectors(on.max,As.max),on.expandByPoint(kt)):(on.expandByPoint(As.min),on.expandByPoint(As.max))}on.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)kt.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(kt));if(n)for(let r=0,a=n.length;r<a;r++){let c=n[r],l=this.morphTargetsRelative;for(let h=0,u=c.count;h<u;h++)kt.fromBufferAttribute(c,h),l&&(Wi.fromBufferAttribute(t,h),kt.add(Wi)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let c=[],l=[];for(let o=0;o<i.count;o++)c[o]=new W,l[o]=new W;let h=new W,u=new W,g=new W,p=new We,f=new We,_=new We,M=new W,d=new W;function m(o,A,x){h.fromBufferAttribute(i,o),u.fromBufferAttribute(i,A),g.fromBufferAttribute(i,x),p.fromBufferAttribute(r,o),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,x),u.sub(h),g.sub(h),f.sub(p),_.sub(p);let k=1/(f.x*_.y-_.x*f.y);isFinite(k)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(g,-f.y).multiplyScalar(k),d.copy(g).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(k),c[o].add(M),c[A].add(M),c[x].add(M),l[o].add(d),l[A].add(d),l[x].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let o=0,A=w.length;o<A;++o){let x=w[o],k=x.start,G=x.count;for(let $=k,U=k+G;$<U;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}let F=new W,S=new W,E=new W,T=new W;function P(o){E.fromBufferAttribute(s,o),T.copy(E);let A=c[o];F.copy(A),F.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(T,A);let k=S.dot(l[o])<0?-1:1;a.setXYZW(o,F.x,F.y,F.z,k)}for(let o=0,A=w.length;o<A;++o){let x=w[o],k=x.start,G=x.count;for(let $=k,U=k+G;$<U;$+=3)P(t.getX($+0)),P(t.getX($+1)),P(t.getX($+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);let s=new W,r=new W,a=new W,c=new W,l=new W,h=new W,u=new W,g=new W;if(t)for(let p=0,f=t.count;p<f;p+=3){let _=t.getX(p+0),M=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,M),a.fromBufferAttribute(n,d),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,d),c.add(u),l.add(u),h.add(u),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(d,h.x,h.y,h.z)}else for(let p=0,f=n.count;p<f;p+=3)s.fromBufferAttribute(n,p+0),r.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)kt.fromBufferAttribute(t,n),kt.normalize(),t.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function t(c,l){let h=c.array,u=c.itemSize,g=c.normalized,p=new h.constructor(l.length*u),f=0,_=0;for(let M=0,d=l.length;M<d;M++){c.isInterleavedBufferAttribute?f=l[M]*c.data.stride+c.offset:f=l[M]*u;for(let m=0;m<u;m++)p[_++]=h[f++]}return new hn(p,u,g)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let c in s){let l=s[c],h=t(l,i);n.setAttribute(c,h)}let r=this.morphAttributes;for(let c in r){let l=[],h=r[c];for(let u=0,g=h.length;u<g;u++){let p=h[u],f=t(p,i);l.push(f)}n.morphAttributes[c]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let c=0,l=a.length;c<l;c++){let h=a[c];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let g=0,p=h.length;g<p;g++){let f=h[g];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(n))}let r=t.morphAttributes;for(let h in r){let u=[],g=r[h];for(let p=0,f=g.length;p<f;p++)u.push(g[p].clone(n));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let g=a[h];this.addGroup(g.start,g.count,g.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qr=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}},Kt=new W,Vs=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(t),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(t),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(t),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Rn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Rn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Rn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Rn(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ns("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new hn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ns("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Oo=new W,Ku=new W,ju=new Ye,xn=class{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Oo.subVectors(i,n).cross(Ku.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||ju.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qu=0,Jn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=ds,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let c in r){let l=r[c];delete l.metadata,a.push(l)}return a}if(n){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},as=class extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xi,Cs=new W,qi=new W,Yi=new W,Zi=new We,Ps=new We,bc=new vt,br=new W,Rs=new W,Sr=new W,Sh=new We,zo=new We,Mh=new We,Gs=class extends Gt{constructor(t=new as){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new qt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qr(n,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new Vs(i,3,0,!1)),Xi.setAttribute("uv",new Vs(i,2,3,!1))}this.geometry=Xi,this.material=t,this.center=new We(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,n){t.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),bc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Yi.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Mr(br.set(-.5,-.5,0),Yi,a,qi,s,r),Mr(Rs.set(.5,-.5,0),Yi,a,qi,s,r),Mr(Sr.set(.5,.5,0),Yi,a,qi,s,r),Sh.set(0,0),zo.set(1,0),Mh.set(1,1);let c=t.ray.intersectTriangle(br,Rs,Sr,!1,Cs);if(c===null&&(Mr(Rs.set(-.5,.5,0),Yi,a,qi,s,r),zo.set(0,1),c=t.ray.intersectTriangle(br,Sr,Rs,!1,Cs),c===null))return;let l=t.ray.origin.distanceTo(Cs);l<t.near||l>t.far||n.push({distance:l,point:Cs.clone(),uv:qn.getInterpolation(Cs,br,Rs,Sr,Sh,zo,Mh,new We),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Mr(e,t,n,i,s,r){Zi.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Ps.x=r*Zi.x-s*Zi.y,Ps.y=s*Zi.x+r*Zi.y):Ps.copy(Zi),e.copy(t),e.x+=Ps.x,e.y+=Ps.y,e.applyMatrix4(bc)}var Xn=new W,Vo=new W,Tr=new W,wr=new W,Hs=class{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Xn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,n),Xn.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Vo.copy(t).add(n).multiplyScalar(.5),Tr.copy(n).sub(t).normalize(),wr.copy(this.origin).sub(Vo);let r=t.distanceTo(n)*.5,a=-this.direction.dot(Tr),c=wr.dot(this.direction),l=-wr.dot(Tr),h=wr.lengthSq(),u=Math.abs(1-a*a),g,p,f,_;if(u>0)if(g=a*l-c,p=a*c-l,_=r*u,g>=0)if(p>=-_)if(p<=_){let M=1/u;g*=M,p*=M,f=g*(g+a*p+2*c)+p*(a*g+p+2*l)+h}else p=r,g=Math.max(0,-(a*p+c)),f=-g*g+p*(p+2*l)+h;else p=-r,g=Math.max(0,-(a*p+c)),f=-g*g+p*(p+2*l)+h;else p<=-_?(g=Math.max(0,-(-a*r+c)),p=g>0?-r:Math.min(Math.max(-r,-l),r),f=-g*g+p*(p+2*l)+h):p<=_?(g=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+h):(g=Math.max(0,-(a*r+c)),p=g>0?r:Math.min(Math.max(-r,-l),r),f=-g*g+p*(p+2*l)+h);else p=a>0?-r:r,g=Math.max(0,-(a*p+c)),f=-g*g+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Vo).addScaledVector(Tr,p),f}intersectSphere(t,n){if(t.radius<0)return null;Xn.subVectors(t.center,this.origin);let i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,n):this.at(c,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,c,l,h=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,p=this.origin;return h>=0?(i=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(i=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),g>=0?(c=(t.min.z-p.z)*g,l=(t.max.z-p.z)*g):(c=(t.max.z-p.z)*g,l=(t.min.z-p.z)*g),i>l||c>s)||((c>i||i!==i)&&(i=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,n,i,s,r){let a=this.origin,c=this.direction,l=c.x,h=c.y,u=c.z,g=t.x-a.x,p=t.y-a.y,f=t.z-a.z,_=n.x-a.x,M=n.y-a.y,d=n.z-a.z,m=i.x-a.x,w=i.y-a.y,F=i.z-a.z,S=Math.abs(l),E=Math.abs(h),T=Math.abs(u),P,o,A,x,k,G,$,U,q,te,X,ae;if(S>=E&&S>=T?(A=l,G=g,q=_,ae=m,l>=0?(P=h,o=u,x=p,k=f,$=M,U=d,te=w,X=F):(P=u,o=h,x=f,k=p,$=d,U=M,te=F,X=w)):E>=T?(A=h,G=p,q=M,ae=w,h>=0?(P=u,o=l,x=f,k=g,$=d,U=_,te=F,X=m):(P=l,o=u,x=g,k=f,$=_,U=d,te=m,X=F)):(A=u,G=f,q=d,ae=F,u>=0?(P=l,o=h,x=g,k=p,$=_,U=M,te=m,X=w):(P=h,o=l,x=p,k=g,$=M,U=_,te=w,X=m)),A===0)return null;let ie=P/A,ne=o/A,le=1/A,Ae=x-ie*G,_e=k-ne*G,Je=$-ie*q,it=U-ne*q,at=te-ie*ae,H=X-ne*ae,re=at*it-H*Je,ge=Ae*H-_e*at,J=Je*_e-it*Ae;if(s){if(re<0||ge<0||J<0)return null}else if((re<0||ge<0||J<0)&&(re>0||ge>0||J>0))return null;let ce=re+ge+J;if(ce===0)return null;let Me=le*(re*G+ge*q+J*ae);return(ce>0?Me<0:Me>0)?null:this.at(Me/ce,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Th=new vt,Mi=new Hs,Er=new rs,wh=new W,Ar=new W,Cr=new W,Pr=new W,Go=new W,Rr=new W,Eh=new W,Ir=new W,sn=class extends Gt{constructor(t=new qt,n=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){Rr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=c[l],g=r[l];u!==0&&(Go.fromBufferAttribute(g,t),a?Rr.addScaledVector(Go,u):Rr.addScaledVector(Go.sub(n),u))}n.add(Rr)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Er.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Er,wh)===null||Mi.origin.distanceToSquared(wh)>(t.far-t.near)**2))&&(Th.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Th),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Mi)))}_computeIntersections(t,n,i){let s,r=this.geometry,a=this.material,c=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,p=r.groups,f=r.drawRange;if(c!==null)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){let d=p[_],m=a[d.materialIndex],w=Math.max(d.start,f.start),F=Math.min(c.count,Math.min(d.start+d.count,f.start+f.count));for(let S=w,E=F;S<E;S+=3){let T=c.getX(S),P=c.getX(S+1),o=c.getX(S+2);s=Lr(this,m,t,i,h,u,g,T,P,o),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,n.push(s))}}else{let _=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let d=_,m=M;d<m;d+=3){let w=c.getX(d),F=c.getX(d+1),S=c.getX(d+2);s=Lr(this,a,t,i,h,u,g,w,F,S),s&&(s.faceIndex=Math.floor(d/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){let d=p[_],m=a[d.materialIndex],w=Math.max(d.start,f.start),F=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let S=w,E=F;S<E;S+=3){let T=S,P=S+1,o=S+2;s=Lr(this,m,t,i,h,u,g,T,P,o),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,n.push(s))}}else{let _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let d=_,m=M;d<m;d+=3){let w=d,F=d+1,S=d+2;s=Lr(this,a,t,i,h,u,g,w,F,S),s&&(s.faceIndex=Math.floor(d/3),n.push(s))}}}};function ed(e,t,n,i,s,r,a,c){let l;if(t.side===en?l=i.intersectTriangle(a,r,s,!0,c):l=i.intersectTriangle(s,r,a,t.side===fi,c),l===null)return null;Ir.copy(c),Ir.applyMatrix4(e.matrixWorld);let h=n.ray.origin.distanceTo(Ir);return h<n.near||h>n.far?null:{distance:h,point:Ir.clone(),object:e}}function Lr(e,t,n,i,s,r,a,c,l,h){e.getVertexPosition(c,Ar),e.getVertexPosition(l,Cr),e.getVertexPosition(h,Pr);let u=ed(e,t,n,i,Ar,Cr,Pr,Eh);if(u){let g=new W;qn.getBarycoord(Eh,Ar,Cr,Pr,g),s&&(u.uv=qn.getInterpolatedAttribute(s,c,l,h,g,new We)),r&&(u.uv1=qn.getInterpolatedAttribute(r,c,l,h,g,new We)),a&&(u.normal=qn.getInterpolatedAttribute(a,c,l,h,g,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let p={a:c,b:l,c:h,normal:new W,materialIndex:0};qn.getNormal(Ar,Cr,Pr,p.normal),u.face=p,u.barycoord=g}return u}var ea=class extends jt{constructor(t=null,n=1,i=1,s,r,a,c,l,h=Ot,u=Ot,g,p){super(null,a,c,l,h,u,s,r,g,p),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=new rs,td=new We(.5,.5),Dr=new W,os=class{constructor(t=new xn,n=new xn,i=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){let c=this.planes;return c[0].copy(t),c[1].copy(n),c[2].copy(i),c[3].copy(s),c[4].copy(r),c[5].copy(a),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=bn,i=!1){let s=this.planes,r=t.elements,a=r[0],c=r[1],l=r[2],h=r[3],u=r[4],g=r[5],p=r[6],f=r[7],_=r[8],M=r[9],d=r[10],m=r[11],w=r[12],F=r[13],S=r[14],E=r[15];if(s[0].setComponents(h-a,f-u,m-_,E-w).normalize(),s[1].setComponents(h+a,f+u,m+_,E+w).normalize(),s[2].setComponents(h+c,f+g,m+M,E+F).normalize(),s[3].setComponents(h-c,f-g,m-M,E-F).normalize(),i)s[4].setComponents(l,p,d,S).normalize(),s[5].setComponents(h-l,f-p,m-d,E-S).normalize();else if(s[4].setComponents(h-l,f-p,m-d,E-S).normalize(),n===bn)s[5].setComponents(h+l,f+p,m+d,E+S).normalize();else if(n===es)s[5].setComponents(l,p,d,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ti.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let n=td.distanceTo(t.center);return Ti.radius=.7071067811865476+n,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Dr.x=s.normal.x>0?t.max.x:t.min.x,Dr.y=s.normal.y>0?t.max.y:t.min.y,Dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ws=class extends jt{constructor(t=[],n=pi,i,s,r,a,c,l,h,u){super(t,n,i,s,r,a,c,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ai=class extends jt{constructor(t,n,i,s,r,a,c,l,h){super(t,n,i,s,r,a,c,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends jt{constructor(t,n,i=Mn,s,r,a,c=Ot,l=Ot,h,u=Ln,g=1){if(u!==Ln&&u!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:n,depth:g};super(p,s,r,a,c,l,u,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},ta=class extends li{constructor(t,n=Mn,i=pi,s,r,a=Ot,c=Ot,l,h=Ln){let u={width:t,height:t,depth:1},g=[u,u,u,u,u,u];super(t,t,n,i,s,r,a,c,l,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends jt{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yt=class e extends qt{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let c=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],g=[],p=0,f=0;_("z","y","x",-1,-1,i,n,t,a,r,0),_("z","y","x",1,-1,i,n,-t,a,r,1),_("x","z","y",1,1,t,i,n,s,a,2),_("x","z","y",1,-1,t,i,-n,s,a,3),_("x","y","z",1,-1,t,n,i,s,r,4),_("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(g,2));function _(M,d,m,w,F,S,E,T,P,o,A){let x=S/P,k=E/o,G=S/2,$=E/2,U=T/2,q=P+1,te=o+1,X=0,ae=0,ie=new W;for(let ne=0;ne<te;ne++){let le=ne*k-$;for(let Ae=0;Ae<q;Ae++){let _e=Ae*x-G;ie[M]=_e*w,ie[d]=le*F,ie[m]=U,h.push(ie.x,ie.y,ie.z),ie[M]=0,ie[d]=0,ie[m]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),g.push(Ae/P),g.push(1-ne/o),X+=1}}for(let ne=0;ne<o;ne++)for(let le=0;le<P;le++){let Ae=p+le+q*ne,_e=p+le+q*(ne+1),Je=p+(le+1)+q*(ne+1),it=p+(le+1)+q*ne;l.push(Ae,_e,it),l.push(_e,Je,it),ae+=6}c.addGroup(f,ae,A),f+=ae,p+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hi=class e extends qt{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],a=[],c=[],l=[],h=new W,u=new We;a.push(0,0,0),c.push(0,0,1),l.push(.5,.5);for(let g=0,p=3;g<=n;g++,p+=3){let f=i+g/n*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),c.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,l.push(u.x,u.y)}for(let g=1;g<=n;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$n=class e extends qt{constructor(t=1,n=1,i=1,s=32,r=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:c,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],p=[],f=[],_=0,M=[],d=i/2,m=0;w(),a===!1&&(t>0&&F(!0),n>0&&F(!1)),this.setIndex(u),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(p,3)),this.setAttribute("uv",new bt(f,2));function w(){let S=new W,E=new W,T=0,P=(n-t)/i;for(let o=0;o<=r;o++){let A=[],x=o/r,k=x*(n-t)+t;for(let G=0;G<=s;G++){let $=G/s,U=$*l+c,q=Math.sin(U),te=Math.cos(U);E.x=k*q,E.y=-x*i+d,E.z=k*te,g.push(E.x,E.y,E.z),S.set(q,P,te).normalize(),p.push(S.x,S.y,S.z),f.push($,1-x),A.push(_++)}M.push(A)}for(let o=0;o<s;o++)for(let A=0;A<r;A++){let x=M[A][o],k=M[A+1][o],G=M[A+1][o+1],$=M[A][o+1];(t>0||A!==0)&&(u.push(x,k,$),T+=3),(n>0||A!==r-1)&&(u.push(k,G,$),T+=3)}h.addGroup(m,T,0),m+=T}function F(S){let E=_,T=new We,P=new W,o=0,A=S===!0?t:n,x=S===!0?1:-1;for(let G=1;G<=s;G++)g.push(0,d*x,0),p.push(0,x,0),f.push(.5,.5),_++;let k=_;for(let G=0;G<=s;G++){let U=G/s*l+c,q=Math.cos(U),te=Math.sin(U);P.x=A*te,P.y=d*x,P.z=A*q,g.push(P.x,P.y,P.z),p.push(0,x,0),T.x=q*.5+.5,T.y=te*.5*x+.5,f.push(T.x,T.y),_++}for(let G=0;G<s;G++){let $=E+G,U=k+G;S===!0?u.push(U,U+1,$):u.push(U+1,U,$),o+=3}h.addGroup(m,o,S===!0?1:2),m+=o}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nn=class e extends $n{constructor(t=1,n=1,i=32,s=1,r=!1,a=0,c=Math.PI*2){super(0,t,n,i,s,r,a,c),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Un=class e extends qt{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,a=n/2,c=Math.floor(i),l=Math.floor(s),h=c+1,u=l+1,g=t/c,p=n/l,f=[],_=[],M=[],d=[];for(let m=0;m<u;m++){let w=m*p-a;for(let F=0;F<h;F++){let S=F*g-r;_.push(S,-w,0),M.push(0,0,1),d.push(F/c),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<c;w++){let F=w+h*m,S=w+h*(m+1),E=w+1+h*(m+1),T=w+1+h*m;f.push(F,S,T),f.push(S,E,T)}this.setIndex(f),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(M,3)),this.setAttribute("uv",new bt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ls=class e extends qt{constructor(t=.5,n=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let c=[],l=[],h=[],u=[],g=t,p=(n-t)/s,f=new W,_=new We;for(let M=0;M<=s;M++){for(let d=0;d<=i;d++){let m=r+d/i*a;f.x=g*Math.cos(m),f.y=g*Math.sin(m),l.push(f.x,f.y,f.z),h.push(0,0,1),_.x=(f.x/n+1)/2,_.y=(f.y/n+1)/2,u.push(_.x,_.y)}g+=p}for(let M=0;M<s;M++){let d=M*(i+1);for(let m=0;m<i;m++){let w=m+d,F=w,S=w+i+1,E=w+i+2,T=w+1;c.push(F,S,T),c.push(S,E,T)}}this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zt=class e extends qt{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:c},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(a+c,Math.PI),h=0,u=[],g=new W,p=new W,f=[],_=[],M=[],d=[];for(let m=0;m<=i;m++){let w=[],F=m/i,S=a+F*c,E=t*Math.cos(S),T=Math.sqrt(t*t-E*E),P=0;m===0&&a===0?P=.5/n:m===i&&l===Math.PI&&(P=-.5/n);for(let o=0;o<=n;o++){let A=o/n,x=s+A*r;g.x=-T*Math.cos(x),g.y=E,g.z=T*Math.sin(x),_.push(g.x,g.y,g.z),p.copy(g).normalize(),M.push(p.x,p.y,p.z),d.push(A+P,1-F),w.push(h++)}u.push(w)}for(let m=0;m<i;m++)for(let w=0;w<n;w++){let F=u[m][w+1],S=u[m][w],E=u[m+1][w],T=u[m+1][w+1];(m!==0||a>0)&&f.push(F,S,T),(m!==i-1||l<Math.PI)&&f.push(S,E,T)}this.setIndex(f),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(M,3)),this.setAttribute("uv",new bt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qs=class e extends qt{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2,a=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:c},i=Math.floor(i),s=Math.floor(s);let l=[],h=[],u=[],g=[],p=new W,f=new W,_=new W;for(let M=0;M<=i;M++){let d=a+M/i*c;for(let m=0;m<=s;m++){let w=m/s*r;f.x=(t+n*Math.cos(d))*Math.cos(w),f.y=(t+n*Math.cos(d))*Math.sin(w),f.z=n*Math.sin(d),h.push(f.x,f.y,f.z),p.x=t*Math.cos(w),p.y=t*Math.sin(w),_.subVectors(f,p).normalize(),u.push(_.x,_.y,_.z),g.push(m/s),g.push(M/i)}}for(let M=1;M<=i;M++)for(let d=1;d<=s;d++){let m=(s+1)*M+d-1,w=(s+1)*(M-1)+d-1,F=(s+1)*(M-1)+d,S=(s+1)*M+d;l.push(m,w,S),l.push(w,F,S)}this.setIndex(l),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ri(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(Ah(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(Ah(s[0])){let r=[];for(let a=0,c=s.length;a<c;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Jt(e){let t={};for(let n=0;n<e.length;n++){let i=Ri(e[n]);for(let s in i)t[s]=i[s]}return t}function Ah(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function nd(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ml(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ht.workingColorSpace}var Sc={clone:Ri,merge:Jt},id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new rt().setHex(s.value);break;case"v2":this.uniforms[i].value=new We().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},na=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hs=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ia=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sa=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ji(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Ho(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ci=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let a;t:{i:if(!(t<s)){for(let c=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(r=s,s=n[++i],t<s)break e}a=n.length;break t}if(!(t>=r)){let c=n[1];t<c&&(i=2,r=c);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let c=i+a>>>1;t<n[c]?a=c:i=c+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ra=class extends ci{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qo,endingEnd:qo}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,a=t+1,c=s[r],l=s[a];if(c===void 0)switch(this.getSettings_().endingStart){case Yo:r=t,c=2*n-i;break;case Zo:r=s.length-2,c=n+s[r]-s[r+1];break;default:r=t,c=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yo:a=t,l=2*i-n;break;case Zo:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=n}let h=(i-n)*.5,u=this.valueSize;this._weightPrev=h/(n-c),this._weightNext=h/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,h=l-c,u=this._offsetPrev,g=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(i-n)/(s-n),M=_*_,d=M*_,m=-p*d+2*p*M-p*_,w=(1+p)*d+(-1.5-2*p)*M+(-.5+p)*_+1,F=(-1-f)*d+(1.5+f)*M+.5*_,S=f*d-f*M;for(let E=0;E!==c;++E)r[E]=m*a[u+E]+w*a[h+E]+F*a[l+E]+S*a[g+E];return r}},aa=class extends ci{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,h=l-c,u=(i-n)/(s-n),g=1-u;for(let p=0;p!==c;++p)r[p]=a[h+p]*g+a[l+p]*u;return r}},oa=class extends ci{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},la=class extends ci{interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,h=l-c,u=this.inTangents,g=this.outTangents;if(!u||!g){let _=(i-n)/(s-n),M=1-_;for(let d=0;d!==c;++d)r[d]=a[h+d]*M+a[l+d]*_;return r}let p=c*2,f=t-1;for(let _=0;_!==c;++_){let M=a[h+_],d=a[l+_],m=f*p+_*2,w=g[m],F=g[m+1],S=t*p+_*2,E=u[S],T=u[S+1],P=ad(i,n,w,E,s);r[_]=Mc(P,M,F,T,d)}return r}};function Mc(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function rd(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function ad(e,t,n,i,s){let r=(e-t)/(s-t);for(let a=0;a<8;a++){let c=Mc(r,t,n,i,s)-e;if(Math.abs(c)<1e-10)break;let l=rd(r,t,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-c/l))}return r}var un=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ji(n,this.TimeBufferType),this.values=Ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ji(t.times,Array),values:Ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ho(t.settings)&&(i.settings={inTangents:Ji(t.settings.inTangents,Array),outTangents:Ji(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new la(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Is:n=this.InterpolantFactoryMethodDiscrete;break;case Zr:n=this.InterpolantFactoryMethodLinear;break;case Ur:n=this.InterpolantFactoryMethodSmooth;break;case Xo:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Ur;case this.InterpolantFactoryMethodBezier:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Ho(this.settings)&&(Ch(this.settings.inTangents,t),Ch(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let c=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*c,a*c)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let c=0;c!==r;c++){let l=i[c];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,c,l),t=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,c,l,a),t=!1;break}a=l}if(s!==void 0&&Uu(s))for(let c=0,l=s.length;c!==l;++c){let h=s[c];if(isNaN(h)){Ge("KeyframeTrack: Value is not a valid number.",this,c,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ur,r=t.length-1,a=1;for(let c=1;c<r;++c){let l=!1,h=t[c],u=t[c+1];if(h!==u&&(c!==1||h!==t[0]))if(s)l=!0;else{let g=c*i,p=g-i,f=g+i;for(let _=0;_!==i;++_){let M=n[g+_];if(M!==n[p+_]||M!==n[f+_]){l=!0;break}}}if(l){if(c!==a){t[a]=t[c];let g=c*i,p=a*i;for(let f=0;f!==i;++f)n[p+f]=n[g+f]}++a}}if(r>0){t[a]=t[r];for(let c=r*i,l=a*i,h=0;h!==i;++h)n[l+h]=n[c+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Ho(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ch(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Zr;var ui=class extends un{constructor(t,n,i){super(t,n,i)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Is;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends un{constructor(t,n,i,s){super(t,n,i,s)}};ha.prototype.ValueTypeName="color";var ca=class extends un{constructor(t,n,i,s){super(t,n,i,s)}};ca.prototype.ValueTypeName="number";var ua=class extends ci{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=(i-n)/(s-n),h=t*c;for(let u=h+c;h!==u;h+=4)Fn.slerpFlat(r,0,a,h-c,a,h,l);return r}},Ys=class extends un{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends un{constructor(t,n,i){super(t,n,i)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Is;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends un{constructor(t,n,i,s){super(t,n,i,s)}};da.prototype.ValueTypeName="vector";var fa=class{constructor(t,n,i){let s=this,r=!1,a=0,c=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){c++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,c),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,c),a===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,g){return h.push(u,g),this},this.removeHandler=function(u){let g=h.indexOf(u);return g!==-1&&h.splice(g,2),this},this.getHandler=function(u){for(let g=0,p=h.length;g<p;g+=2){let f=h[g],_=h[g+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tc=new fa,pa=class{constructor(t){this.manager=t!==void 0?t:Tc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends Gt{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Js=class extends Zs{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},Wo=new vt,Ph=new W,Rh=new W,ma=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;Ph.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ph),Rh.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Rh),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Wo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,c=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===es||t.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fr=new W,Nr=new Fn,Pn=new W,$s=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fr,Nr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Nr,Pn.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Fr,Nr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Nr,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new W,Ih=new We,Lh=new We,Bt=class extends $s{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,n){return this.getViewBounds(t,Ih,Lh),n.subVectors(Lh,Ih)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Br*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var cs=class extends $s{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,c=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,c-=u*this.view.offsetY,l=c-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Jo=class extends ma{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends Zs{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Jo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Dh=new vt,Fh=new vt,wi=new vt,js=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Bt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Bt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let n=this._cache;if(n.focus!==t.focus||n.fov!==t.fov||n.aspect!==t.aspect*this.aspect||n.near!==t.near||n.far!==t.far||n.zoom!==t.zoom||n.eyeSep!==this.eyeSep){n.focus=t.focus,n.fov=t.fov,n.aspect=t.aspect*this.aspect,n.near=t.near,n.far=t.far,n.zoom=t.zoom,n.eyeSep=this.eyeSep,wi.copy(t.projectionMatrix);let s=n.eyeSep/2,r=s*n.near/n.focus,a=n.near*Math.tan(Br*n.fov*.5)/n.zoom,c,l;Fh.elements[12]=-s,Dh.elements[12]=s,c=-a*n.aspect+r,l=a*n.aspect+r,wi.elements[0]=2*n.near/(l-c),wi.elements[8]=(l+c)/(l-c),this.cameraL.projectionMatrix.copy(wi),c=-a*n.aspect-r,l=a*n.aspect-r,wi.elements[0]=2*n.near/(l-c),wi.elements[8]=(l+c)/(l-c),this.cameraR.projectionMatrix.copy(wi)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Fh),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(Dh),this.cameraR.matrixWorldNeedsUpdate=!0}},$i=-90,Ki=1,ga=class extends Gt{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt($i,Ki,t,n);s.layers=this.layers,this.add(s);let r=new Bt($i,Ki,t,n);r.layers=this.layers,this.add(r);let a=new Bt($i,Ki,t,n);a.layers=this.layers,this.add(a);let c=new Bt($i,Ki,t,n);c.layers=this.layers,this.add(c);let l=new Bt($i,Ki,t,n);l.layers=this.layers,this.add(l);let h=new Bt($i,Ki,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,c,l]=n;for(let h of n)this.remove(h);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===es)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,c,l,h,u]=this.children,g=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(i,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(g,p,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},_a=class extends Bt{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Tl="\\[\\]\\.:\\/",od=new RegExp("["+Tl+"]","g"),wl="[^"+Tl+"]",ld="[^"+Tl.replace("\\.","")+"]",hd=/((?:WC+[\/:])*)/.source.replace("WC",wl),cd=/(WCOD+)?/.source.replace("WCOD",ld),ud=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),fd=new RegExp("^"+hd+cd+ud+dd+"$"),pd=["material","materials","bones","map"],$o=class{constructor(t,n,i){let s=i||At.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},At=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(od,"")}static parseTrackName(t){let n=fd.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);pd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let c=r[a];if(c.name===n||c.uuid===n)return c;let l=i(c.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;Ge("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=$o;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q0=new Float32Array(1);var Nh=new vt,Qs=class{constructor(t,n,i=0,s=1/0){this.ray=new Hs(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ge("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Nh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nh),this}intersectObject(t,n=!0,i=[]){return Ko(t,this,i,n),i.sort(Uh),i}intersectObjects(t,n=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ko(t[s],this,i,n);return i.sort(Uh),i}};function Uh(e,t){return e.distance-t.distance}function Ko(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let r=e.children;for(let a=0,c=r.length;a<c;a++)Ko(r[a],t,n,!0)}}var jo=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};function El(e,t,n,i){let s=md(i);switch(n){case vl:return e*t;case xl:return e*t/s.components*s.byteLength;case wa:return e*t/s.components*s.byteLength;case _i:return e*t*2/s.components*s.byteLength;case Ea:return e*t*2/s.components*s.byteLength;case yl:return e*t*3/s.components*s.byteLength;case pn:return e*t*4/s.components*s.byteLength;case Aa:return e*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Ia:return Math.max(e,16)*Math.max(t,8)/4;case Ca:case Ra:return Math.max(e,8)*Math.max(t,8)/2;case La:case Da:case Na:case Ua:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fa:case or:case ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ja:case Qa:case eo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case to:case no:return Math.ceil(e/4)*Math.ceil(t/4)*8;case lr:case io:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function md(e){switch(e){case rn:case pl:return{byteLength:1,components:1};case fs:case ml:case wn:return{byteLength:2,components:1};case Ma:case Ta:return{byteLength:2,components:4};case Mn:case Sa:case Tn:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);function qc(){let e=null,t=!1,n=null,i=null;function s(r,a){i=e.requestAnimationFrame(s),n(r,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function gd(e){let t=new WeakMap;function n(c,l){let h=c.array,u=c.usage,g=h.byteLength,p=e.createBuffer();e.bindBuffer(l,p),e.bufferData(l,h,u),c.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=e.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,l,h){let u=l.array,g=l.updateRanges;if(e.bindBuffer(h,c),g.length===0)e.bufferSubData(h,0,u);else{g.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<g.length;f++){let _=g[p],M=g[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++p,g[p]=M)}g.length=p+1;for(let f=0,_=g.length;f<_;f++){let M=g[f];e.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=t.get(c);l&&(e.deleteBuffer(l.buffer),t.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let u=t.get(c);(!u||u.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=t.get(c);if(h===void 0)t.set(c,n(c,l));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,l),h.version=c.version}}return{get:s,remove:r,update:a}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Id=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cf=`#ifdef USE_ENVMAP
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
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
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
#endif`,gf=`uniform sampler2D dfgLUT;
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
}`,_f=`
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cf=`#if defined( USE_POINTS_UV )
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
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Fp=`#define LAMBERT
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
}`,Np=`#define LAMBERT
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
}`,Up=`#define MATCAP
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
}`,kp=`#define MATCAP
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
}`,Bp=`#define NORMAL
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
}`,Op=`#define NORMAL
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
}`,zp=`#define PHONG
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
}`,Vp=`#define PHONG
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
}`,Gp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,Wp=`#define TOON
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
}`,Xp=`#define TOON
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
}`,qp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 color;
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
}`,$p=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:_d,alphahash_pars_fragment:vd,alphamap_fragment:yd,alphamap_pars_fragment:xd,alphatest_fragment:bd,alphatest_pars_fragment:Sd,aomap_fragment:Md,aomap_pars_fragment:Td,batching_pars_vertex:wd,batching_vertex:Ed,begin_vertex:Ad,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Rd,bumpmap_pars_fragment:Id,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Nd,color_fragment:Ud,color_pars_fragment:kd,color_pars_vertex:Bd,color_vertex:Od,common:zd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:Zd,envmap_fragment:Jd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Kd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:cf,envmap_vertex:Qd,fog_vertex:ef,fog_pars_vertex:tf,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:af,lights_lambert_fragment:of,lights_lambert_pars_fragment:lf,lights_pars_begin:hf,lights_toon_fragment:uf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:_f,lights_fragment_maps:vf,lights_fragment_end:yf,lightprobes_pars_fragment:xf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:Sf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:Tf,map_fragment:wf,map_pars_fragment:Ef,map_particle_fragment:Af,map_particle_pars_fragment:Cf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:Rf,morphinstance_vertex:If,morphcolor_vertex:Lf,morphnormal_vertex:Df,morphtarget_pars_vertex:Ff,morphtarget_vertex:Nf,normal_fragment_begin:Uf,normal_fragment_maps:kf,normal_pars_fragment:Bf,normal_pars_vertex:Of,normal_vertex:zf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Xf,opaque_fragment:qf,packing:Yf,premultiplied_alpha_fragment:Zf,project_vertex:Jf,dithering_fragment:$f,dithering_pars_fragment:Kf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:tp,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:ap,skinnormal_vertex:op,specularmap_fragment:lp,specularmap_pars_fragment:hp,tonemapping_fragment:cp,tonemapping_pars_fragment:up,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:_p,background_vert:vp,background_frag:yp,backgroundCube_vert:xp,backgroundCube_frag:bp,cube_vert:Sp,cube_frag:Mp,depth_vert:Tp,depth_frag:wp,distance_vert:Ep,distance_frag:Ap,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Rp,linedashed_frag:Ip,meshbasic_vert:Lp,meshbasic_frag:Dp,meshlambert_vert:Fp,meshlambert_frag:Np,meshmatcap_vert:Up,meshmatcap_frag:kp,meshnormal_vert:Bp,meshnormal_frag:Op,meshphong_vert:zp,meshphong_frag:Vp,meshphysical_vert:Gp,meshphysical_frag:Hp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:Yp,shadow_vert:Zp,shadow_frag:Jp,sprite_vert:$p,sprite_frag:Kp},Se={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},On={basic:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Jt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Jt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new rt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Jt([Se.points,Se.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Jt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Jt([Se.common,Se.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Jt([Se.sprite,Se.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Jt([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Jt([Se.lights,Se.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};On.physical={uniforms:Jt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var oo={r:0,b:0,g:0},jp=new vt,Yc=new Ye;Yc.set(-1,0,0,0,1,0,0,0,1);function Qp(e,t,n,i,s,r){let a=new rt(0),c=s===!0?0:1,l,h,u=null,g=0,p=null;function f(w){let F=w.isScene===!0?w.background:null;if(F&&F.isTexture){let S=w.backgroundBlurriness>0;F=t.get(F,S)}return F}function _(w){let F=!1,S=f(w);S===null?d(a,c):S&&S.isColor&&(d(S,1),F=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(w,F){let S=f(F);S&&(S.isCubeTexture||S.mapping===tr)?(h===void 0&&(h=new sn(new Yt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ri(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(F.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Yc),h.material.toneMapped=ht.getTransfer(S.colorSpace)!==mt,(u!==S||g!==S.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=S,g=S.version,p=e.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new sn(new Un(2,2),new cn({name:"BackgroundMaterial",uniforms:Ri(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,l.material.toneMapped=ht.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||g!==S.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,u=S,g=S.version,p=e.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,F){w.getRGB(oo,Ml(e)),n.buffers.color.setClear(oo.r,oo.g,oo.b,F,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,F=1){a.set(w),c=F,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(a,c)},render:_,addToRenderList:M,dispose:m}}function em(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,a=!1;function c(k,G,$,U,q){let te=!1,X=g(k,U,$,G);r!==X&&(r=X,h(r.object)),te=f(k,U,$,q),te&&_(k,U,$,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,S(k,G,$,U),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function h(k){return e.bindVertexArray(k)}function u(k){return e.deleteVertexArray(k)}function g(k,G,$,U){let q=U.wireframe===!0,te=i[G.id];te===void 0&&(te={},i[G.id]=te);let X=k.isInstancedMesh===!0?k.id:0,ae=te[X];ae===void 0&&(ae={},te[X]=ae);let ie=ae[$.id];ie===void 0&&(ie={},ae[$.id]=ie);let ne=ie[q];return ne===void 0&&(ne=p(l()),ie[q]=ne),ne}function p(k){let G=[],$=[],U=[];for(let q=0;q<n;q++)G[q]=0,$[q]=0,U[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:U,object:k,attributes:{},index:null}}function f(k,G,$,U){let q=r.attributes,te=G.attributes,X=0,ae=$.getAttributes();for(let ie in ae)if(ae[ie].location>=0){let le=q[ie],Ae=te[ie];if(Ae===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(Ae=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(Ae=k.instanceColor)),le===void 0||le.attribute!==Ae||Ae&&le.data!==Ae.data)return!0;X++}return r.attributesNum!==X||r.index!==U}function _(k,G,$,U){let q={},te=G.attributes,X=0,ae=$.getAttributes();for(let ie in ae)if(ae[ie].location>=0){let le=te[ie];le===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(le=k.instanceColor));let Ae={};Ae.attribute=le,le&&le.data&&(Ae.data=le.data),q[ie]=Ae,X++}r.attributes=q,r.attributesNum=X,r.index=U}function M(){let k=r.newAttributes;for(let G=0,$=k.length;G<$;G++)k[G]=0}function d(k){m(k,0)}function m(k,G){let $=r.newAttributes,U=r.enabledAttributes,q=r.attributeDivisors;$[k]=1,U[k]===0&&(e.enableVertexAttribArray(k),U[k]=1),q[k]!==G&&(e.vertexAttribDivisor(k,G),q[k]=G)}function w(){let k=r.newAttributes,G=r.enabledAttributes;for(let $=0,U=G.length;$<U;$++)G[$]!==k[$]&&(e.disableVertexAttribArray($),G[$]=0)}function F(k,G,$,U,q,te,X){X===!0?e.vertexAttribIPointer(k,G,$,q,te):e.vertexAttribPointer(k,G,$,U,q,te)}function S(k,G,$,U){M();let q=U.attributes,te=$.getAttributes(),X=G.defaultAttributeValues;for(let ae in te){let ie=te[ae];if(ie.location>=0){let ne=q[ae];if(ne===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor)),ne!==void 0){let le=ne.normalized,Ae=ne.itemSize,_e=t.get(ne);if(_e===void 0)continue;let Je=_e.buffer,it=_e.type,at=_e.bytesPerElement,H=it===e.INT||it===e.UNSIGNED_INT||ne.gpuType===Sa;if(ne.isInterleavedBufferAttribute){let re=ne.data,ge=re.stride,J=ne.offset;if(re.isInstancedInterleavedBuffer){for(let ce=0;ce<ie.locationSize;ce++)m(ie.location+ce,re.meshPerAttribute);k.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<ie.locationSize;ce++)d(ie.location+ce);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let ce=0;ce<ie.locationSize;ce++)F(ie.location+ce,Ae/ie.locationSize,it,le,ge*at,(J+Ae/ie.locationSize*ce)*at,H)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<ie.locationSize;re++)m(ie.location+re,ne.meshPerAttribute);k.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<ie.locationSize;re++)d(ie.location+re);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let re=0;re<ie.locationSize;re++)F(ie.location+re,Ae/ie.locationSize,it,le,Ae*at,Ae/ie.locationSize*re*at,H)}}else if(X!==void 0){let le=X[ae];if(le!==void 0)switch(le.length){case 2:e.vertexAttrib2fv(ie.location,le);break;case 3:e.vertexAttrib3fv(ie.location,le);break;case 4:e.vertexAttrib4fv(ie.location,le);break;default:e.vertexAttrib1fv(ie.location,le)}}}}w()}function E(){A();for(let k in i){let G=i[k];for(let $ in G){let U=G[$];for(let q in U){let te=U[q];for(let X in te)u(te[X].object),delete te[X];delete U[q]}}delete i[k]}}function T(k){if(i[k.id]===void 0)return;let G=i[k.id];for(let $ in G){let U=G[$];for(let q in U){let te=U[q];for(let X in te)u(te[X].object),delete te[X];delete U[q]}}delete i[k.id]}function P(k){for(let G in i){let $=i[G];for(let U in $){let q=$[U];if(q[k.id]===void 0)continue;let te=q[k.id];for(let X in te)u(te[X].object),delete te[X];delete q[k.id]}}}function o(k){for(let G in i){let $=i[G],U=k.isInstancedMesh===!0?k.id:0,q=$[U];if(q!==void 0){for(let te in q){let X=q[te];for(let ae in X)u(X[ae].object),delete X[ae];delete q[te]}delete $[U],Object.keys($).length===0&&delete i[G]}}}function A(){x(),a=!0,r!==s&&(r=s,h(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:A,resetDefaultState:x,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:o,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:d,disableUnusedAttributes:w}}function tm(e,t,n){let i;function s(l){i=l}function r(l,h){e.drawArrays(i,l,h),n.update(h,i,1)}function a(l,h,u){u!==0&&(e.drawArraysInstanced(i,l,h,u),n.update(h,i,u))}function c(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let f=0;f<u;f++)p+=h[f];n.update(p,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=c}function nm(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==pn&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(P){let o=P===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==rn&&P!==Tn&&!o&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp",u=l(h);u!==h&&(He("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let g=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&p===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),F=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:w,maxVaryings:F,maxFragmentUniforms:S,maxSamples:E,samples:T}}function im(e){let t=this,n=null,i=0,s=!1,r=!1,a=new xn,c=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){let f=g.length!==0||p||i!==0||s;return s=p,i=g.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,p){n=u(g,p,0)},this.setState=function(g,p,f){let _=g.clippingPlanes,M=g.clipIntersection,d=g.clipShadows,m=e.get(g);if(!s||_===null||_.length===0||r&&!d)r?u(null):h();else{let w=r?0:i,F=w*4,S=m.clippingState||null;l.value=S,S=u(_,p,F,f);for(let E=0;E!==F;++E)S[E]=n[E];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(g,p,f,_){let M=g!==null?g.length:0,d=null;if(M!==0){if(d=l.value,_!==!0||d===null){let m=f+M*4,w=p.matrixWorldInverse;c.getNormalMatrix(w),(d===null||d.length<m)&&(d=new Float32Array(m));for(let F=0,S=f;F!==M;++F,S+=4)a.copy(g[F]).applyMatrix4(w,c),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,d}}var gs=4,sm=6,rm=20,am=256,hr=new cs,wc=new rt,Al=null,Cl=0,Pl=0,Rl=!1,om=new W,Ii=new W,ho=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){let{size:a=256,position:c=om}=r;Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,c),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Cl,Pl),this._renderer.xr.enabled=Rl,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===pi||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:wn,format:pn,colorSpace:Ls,depthBuffer:!1},s=Ec(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lm(r)),this._blurMaterial=cm(r,t,n),this._ggxMaterial=hm(r,t,n)}return s}_compileMaterial(t){let n=new sn(new qt,t);this._renderer.compile(n,hr)}_sceneToCubeUV(t,n,i,s,r){let l=new Bt(90,1,n,i),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,f=g.toneMapping;g.getClearColor(wc),g.toneMapping=Sn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sn(new Yt,new Qt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,d=M.material,m=!1,w=t.background;w?w.isColor&&(d.color.copy(w),t.background=null,m=!0):(d.color.copy(wc),m=!0);for(let F=0;F<6;F++){let S=F%3;S===0?(l.up.set(0,h[F],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[F],r.y,r.z)):S===1?(l.up.set(0,0,h[F]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[F],r.z)):(l.up.set(0,h[F],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[F]));let E=this._cubeSize;ms(s,S*E,F>2?E:0,E,E),g.setRenderTarget(s),m&&g.render(M,l),g.render(t,l)}g.toneMapping=f,g.autoClear=p,t.background=w}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===pi||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let c=r.uniforms;c.envMap.value=t;let l=this._cubeSize;ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,hr)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[i];c.material=a;let l=a.uniforms,h=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),g=Math.sqrt(h*h-u*u),p=h*1.25,f=g*p,{_lodMax:_}=this,M=this._sizeLods[i],d=3*M*(i>_-gs?i-_+gs:0),m=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-n,ms(r,d,m,3*M,2*M),s.setRenderTarget(r),s.render(c,hr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ms(t,d,m,3*M,2*M),s.setRenderTarget(t),s.render(c,hr)}_blur(t,n,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,n,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,n,i,s,r){let a=this._renderer,c=this._blurMaterial,l=this._lodMeshes[s];l.material=c;let h=c.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],g=3*u*(s>this._lodMax-gs?s-this._lodMax+gs:0),p=4*(this._cubeSize-u);ms(n,g,p,3*u,2*u),a.setRenderTarget(n),a.render(l,hr)}};function lm(e){let t=[],n=[],i=e,s=e-gs+1+sm;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let c=1/(a-2),l=-c,h=1+c,u=[l,l,h,l,h,h,l,l,h,h,l,h],g=6,p=6,f=3,_=new Float32Array(f*p*g),M=new Float32Array(f*p*g);for(let m=0;m<g;m++){let w=m%3*2/3-1,F=m>2?0:-1,S=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];_.set(S,f*p*m);for(let E=0;E<p;E++){let T=u[E*2]*2-1,P=u[E*2+1]*2-1;m===0?Ii.set(1,P,T):m===1?Ii.set(-T,1,-P):m===2?Ii.set(-T,P,1):m===3?Ii.set(-1,P,-T):m===4?Ii.set(-T,-1,P):Ii.set(T,P,-1),Ii.toArray(M,(m*p+E)*f)}}let d=new qt;d.setAttribute("position",new hn(_,f)),d.setAttribute("outputDirection",new hn(M,f)),n.push(new sn(d,null)),i>gs&&i--}return{lodMeshes:n,sizeLods:t}}function Ec(e,t,n){let i=new nn(e,t,n);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function hm(e,t,n){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function cm(e,t,n){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ac(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Cc(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var co=class extends nn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ws(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:kn});r.uniforms.tEquirect.value=n;let a=new sn(s,r),c=n.minFilter;return n.minFilter===mi&&(n.minFilter=Vt),new ga(1,10,this).update(t,a),n.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}};function um(e){let t=new WeakMap,n=new WeakMap,i=null;function s(p,f=!1){return p==null?null:f?a(p):r(p)}function r(p){if(p&&p.isTexture){let f=p.mapping;if(f===ya||f===xa)if(t.has(p)){let _=t.get(p).texture;return c(_,p.mapping)}else{let _=p.image;if(_&&_.height>0){let M=new co(_.height);return M.fromEquirectangularTexture(e,p),t.set(p,M),p.addEventListener("dispose",h),c(M.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){let f=p.mapping,_=f===ya||f===xa,M=f===pi||f===Pi;if(_||M){let d=n.get(p),m=d!==void 0?d.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return i===null&&(i=new ho(e)),d=_?i.fromEquirectangular(p,d):i.fromCubemap(p,d),d.texture.pmremVersion=p.pmremVersion,n.set(p,d),d.texture;if(d!==void 0)return d.texture;{let w=p.image;return _&&w&&w.height>0||M&&w&&l(w)?(i===null&&(i=new ho(e)),d=_?i.fromEquirectangular(p):i.fromCubemap(p),d.texture.pmremVersion=p.pmremVersion,n.set(p,d),p.addEventListener("dispose",u),d.texture):null}}}return p}function c(p,f){return f===ya?p.mapping=pi:f===xa&&(p.mapping=Pi),p}function l(p){let f=0,_=6;for(let M=0;M<_;M++)p[M]!==void 0&&f++;return f===_}function h(p){let f=p.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(p){let f=p.target;f.removeEventListener("dispose",u);let _=n.get(f);_!==void 0&&(n.delete(f),_.dispose())}function g(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function dm(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ei("WebGLRenderer: "+i+" extension not supported."),s}}}function fm(e,t,n,i){let s={},r=new WeakMap;function a(g){let p=g.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function c(g,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,n.memory.geometries++),p}function l(g){let p=g.attributes;for(let f in p)t.update(p[f],e.ARRAY_BUFFER)}function h(g){let p=[],f=g.index,_=g.attributes.position,M=0;if(_===void 0)return;if(f!==null){let w=f.array;M=f.version;for(let F=0,S=w.length;F<S;F+=3){let E=w[F+0],T=w[F+1],P=w[F+2];p.push(E,T,T,P,P,E)}}else{let w=_.array;M=_.version;for(let F=0,S=w.length/3-1;F<S;F+=3){let E=F+0,T=F+1,P=F+2;p.push(E,T,T,P,P,E)}}let d=new(_.count>=65535?zs:Os)(p,1);d.version=M;let m=r.get(g);m&&t.remove(m),r.set(g,d)}function u(g){let p=r.get(g);if(p){let f=g.index;f!==null&&p.version<f.version&&h(g)}else h(g);return r.get(g)}return{get:c,update:l,getWireframeAttribute:u}}function pm(e,t,n){let i;function s(g){i=g}let r,a;function c(g){r=g.type,a=g.bytesPerElement}function l(g,p){e.drawElements(i,p,r,g*a),n.update(p,i,1)}function h(g,p,f){f!==0&&(e.drawElementsInstanced(i,p,r,g*a,f),n.update(p,i,f))}function u(g,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,g,0,f);let M=0;for(let d=0;d<f;d++)M+=p[d];n.update(M,i,1)}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function mm(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,c){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=c*(r/3);break;case e.LINES:n.lines+=c*(r/2);break;case e.LINE_STRIP:n.lines+=c*(r-1);break;case e.LINE_LOOP:n.lines+=c*r;break;case e.POINTS:n.points+=c*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function gm(e,t,n){let i=new WeakMap,s=new Rt;function r(a,c,l){let h=a.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=u!==void 0?u.length:0,p=i.get(c);if(p===void 0||p.count!==g){let A=function(){P.dispose(),i.delete(c),c.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();let f=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,d=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],w=c.morphAttributes.color||[],F=0;f===!0&&(F=1),_===!0&&(F=2),M===!0&&(F=3);let S=c.attributes.position.count*F,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*E*4*g),P=new Us(T,S,E,g);P.type=Tn,P.needsUpdate=!0;let o=F*4;for(let x=0;x<g;x++){let k=d[x],G=m[x],$=w[x],U=S*E*4*x;for(let q=0;q<k.count;q++){let te=q*o;f===!0&&(s.fromBufferAttribute(k,q),T[U+te+0]=s.x,T[U+te+1]=s.y,T[U+te+2]=s.z,T[U+te+3]=0),_===!0&&(s.fromBufferAttribute(G,q),T[U+te+4]=s.x,T[U+te+5]=s.y,T[U+te+6]=s.z,T[U+te+7]=0),M===!0&&(s.fromBufferAttribute($,q),T[U+te+8]=s.x,T[U+te+9]=s.y,T[U+te+10]=s.z,T[U+te+11]=$.itemSize===4?s.w:1)}}p={count:g,texture:P,size:new We(S,E)},i.set(c,p),c.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let f=0;for(let M=0;M<h.length;M++)f+=h[M];let _=c.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:r}}function _m(e,t,n,i,s){let r=new WeakMap;function a(h){let u=s.render.frame,g=h.geometry,p=t.get(h,g);if(r.get(p)!==u&&(t.update(p),r.set(p,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==u&&(n.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,e.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function c(){r=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:c}}var vm={[al]:"LINEAR_TONE_MAPPING",[ol]:"REINHARD_TONE_MAPPING",[ll]:"CINEON_TONE_MAPPING",[hl]:"ACES_FILMIC_TONE_MAPPING",[ul]:"AGX_TONE_MAPPING",[dl]:"NEUTRAL_TONE_MAPPING",[cl]:"CUSTOM_TONE_MAPPING"};function ym(e,t,n,i,s,r){let a=new nn(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,h=new qt;h.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bt([0,2,0,0,2,0],2));let u=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new sn(h,u),p=new cs(-1,1,1,-1,0,1),f=null,_=null,M=!1,d,m=null,w=[],F=!1;this.setSize=function(S,E){a.setSize(S,E),c!==null&&c.setSize(S,E),l!==null&&l.setSize(S,E);for(let T=0;T<w.length;T++){let P=w[T];P.setSize&&P.setSize(S,E)}},this.setEffects=function(S){w=S,F=w.length>0&&w[0].isRenderPass===!0;let E=a.width,T=a.height;w.length>0&&c===null&&(c=new nn(E,T,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(E,T,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<w.length;P++){let o=w[P];o.setSize&&o.setSize(E,T)}},this.begin=function(S,E){if(M||S.toneMapping===Sn&&w.length===0)return!1;if(m=E,E!==null){let T=E.width,P=E.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return F===!1&&S.setRenderTarget(a),d=S.toneMapping,S.toneMapping=Sn,!0},this.hasRenderPass=function(){return F},this.end=function(S,E){S.toneMapping=d,M=!0;let T=a,P=c;for(let o=0;o<w.length;o++){let A=w[o];A.enabled!==!1&&(A.render(S,P,T,E),A.needsSwap!==!1&&(T=P,P=P===c?l:c))}if(f!==S.outputColorSpace||_!==S.toneMapping){f=S.outputColorSpace,_=S.toneMapping,u.defines={},ht.getTransfer(f)===mt&&(u.defines.SRGB_TRANSFER="");let o=vm[_];o&&(u.defines[o]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(g,p),m=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Zc=new jt,Dl=new li(1,1),Jc=new Us,$c=new jr,Kc=new Ws,Pc=[],Rc=[],Ic=new Float32Array(16),Lc=new Float32Array(9),Dc=new Float32Array(4);function vs(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Pc[s];if(r===void 0&&(r=new Float32Array(s),Pc[s]=r),t!==0){i.toArray(r,0);for(let a=1,c=0;a!==t;++a)c+=n,e[a].toArray(r,c)}return r}function Nt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ut(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function po(e,t){let n=Rc[t];n===void 0&&(n=new Int32Array(t),Rc[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function xm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function bm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2fv(this.addr,t),Ut(n,t)}}function Sm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Nt(n,t))return;e.uniform3fv(this.addr,t),Ut(n,t)}}function Mm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4fv(this.addr,t),Ut(n,t)}}function Tm(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Nt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ut(n,t)}else{if(Nt(n,i))return;Dc.set(i),e.uniformMatrix2fv(this.addr,!1,Dc),Ut(n,i)}}function wm(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Nt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ut(n,t)}else{if(Nt(n,i))return;Lc.set(i),e.uniformMatrix3fv(this.addr,!1,Lc),Ut(n,i)}}function Em(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Nt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ut(n,t)}else{if(Nt(n,i))return;Ic.set(i),e.uniformMatrix4fv(this.addr,!1,Ic),Ut(n,i)}}function Am(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Cm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2iv(this.addr,t),Ut(n,t)}}function Pm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nt(n,t))return;e.uniform3iv(this.addr,t),Ut(n,t)}}function Rm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4iv(this.addr,t),Ut(n,t)}}function Im(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Lm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2uiv(this.addr,t),Ut(n,t)}}function Dm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nt(n,t))return;e.uniform3uiv(this.addr,t),Ut(n,t)}}function Fm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4uiv(this.addr,t),Ut(n,t)}}function Nm(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Dl.compareFunction=n.isReversedDepthBuffer()?ao:ro,r=Dl):r=Zc,n.setTexture2D(t||r,s)}function Um(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||$c,s)}function km(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Kc,s)}function Bm(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Jc,s)}function Om(e){switch(e){case 5126:return xm;case 35664:return bm;case 35665:return Sm;case 35666:return Mm;case 35674:return Tm;case 35675:return wm;case 35676:return Em;case 5124:case 35670:return Am;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Rm;case 5125:return Im;case 36294:return Lm;case 36295:return Dm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Bm}}function zm(e,t){e.uniform1fv(this.addr,t)}function Vm(e,t){let n=vs(t,this.size,2);e.uniform2fv(this.addr,n)}function Gm(e,t){let n=vs(t,this.size,3);e.uniform3fv(this.addr,n)}function Hm(e,t){let n=vs(t,this.size,4);e.uniform4fv(this.addr,n)}function Wm(e,t){let n=vs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xm(e,t){let n=vs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function qm(e,t){let n=vs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ym(e,t){e.uniform1iv(this.addr,t)}function Zm(e,t){e.uniform2iv(this.addr,t)}function Jm(e,t){e.uniform3iv(this.addr,t)}function $m(e,t){e.uniform4iv(this.addr,t)}function Km(e,t){e.uniform1uiv(this.addr,t)}function jm(e,t){e.uniform2uiv(this.addr,t)}function Qm(e,t){e.uniform3uiv(this.addr,t)}function eg(e,t){e.uniform4uiv(this.addr,t)}function tg(e,t,n){let i=this.cache,s=t.length,r=po(n,s);Nt(i,r)||(e.uniform1iv(this.addr,r),Ut(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Dl:a=Zc;for(let c=0;c!==s;++c)n.setTexture2D(t[c]||a,r[c])}function ng(e,t,n){let i=this.cache,s=t.length,r=po(n,s);Nt(i,r)||(e.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||$c,r[a])}function ig(e,t,n){let i=this.cache,s=t.length,r=po(n,s);Nt(i,r)||(e.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||Kc,r[a])}function sg(e,t,n){let i=this.cache,s=t.length,r=po(n,s);Nt(i,r)||(e.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||Jc,r[a])}function rg(e){switch(e){case 5126:return zm;case 35664:return Vm;case 35665:return Gm;case 35666:return Hm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return jm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}var Fl=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Om(n.type)}},Nl=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rg(n.type)}},Ul=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let c=s[r];c.setValue(t,n[c.id],i)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Fc(e,t){e.seq.push(t),e.map[t.id]=t}function ag(e,t,n){let i=e.name,s=i.length;for(Il.lastIndex=0;;){let r=Il.exec(i),a=Il.lastIndex,c=r[1],l=r[2]==="]",h=r[3];if(l&&(c=c|0),h===void 0||h==="["&&a+2===s){Fc(n,h===void 0?new Fl(c,e,t):new Nl(c,e,t));break}else{let g=n.map[c];g===void 0&&(g=new Ul(c),Fc(n,g)),n=g}}}var _s=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let c=t.getActiveUniform(n,a),l=t.getUniformLocation(n,c.name);ag(c,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){let c=n[r],l=i[c.id];l.needsUpdate!==!1&&c.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in n&&i.push(a)}return i}};function Nc(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var og=37297,lg=0;function hg(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let c=a+1;i.push(`${c===t?">":" "} ${c}: ${n[a]}`)}return i.join(`
`)}var Uc=new Ye;function cg(e){ht._getMatrix(Uc,ht.workingColorSpace,e);let t=`mat3( ${Uc.elements.map(n=>n.toFixed(4))} )`;switch(ht.getTransfer(e)){case Ds:return[t,"LinearTransferOETF"];case mt:return[t,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function kc(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let c=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+hg(e.getShaderSource(t),c)}else return r}function ug(e,t){let n=cg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var dg={[al]:"Linear",[ol]:"Reinhard",[ll]:"Cineon",[hl]:"ACESFilmic",[ul]:"AgX",[dl]:"Neutral",[cl]:"Custom"};function fg(e,t){let n=dg[t];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var lo=new W;function pg(){ht.getLuminanceCoefficients(lo);let e=lo.x.toFixed(4),t=lo.y.toFixed(4),n=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function gg(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function _g(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,c=1;r.type===e.FLOAT_MAT2&&(c=2),r.type===e.FLOAT_MAT3&&(c=3),r.type===e.FLOAT_MAT4&&(c=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:c}}return n}function ur(e){return e!==""}function Bc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(e){return e.replace(vg,xg)}var yg=new Map;function xg(e,t){let n=et[t];if(n===void 0){let i=yg.get(t);if(i!==void 0)n=et[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return kl(n)}var bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(e){return e.replace(bg,Sg)}function Sg(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Mg={[er]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function Tg(e){return Mg[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wg={[pi]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE_UV"};function Eg(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":wg[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ag={[Pi]:"ENVMAP_MODE_REFRACTION"};function Cg(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Ag[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pg={[rl]:"ENVMAP_BLENDING_MULTIPLY",[sc]:"ENVMAP_BLENDING_MIX",[rc]:"ENVMAP_BLENDING_ADD"};function Rg(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Pg[e.combine]||"ENVMAP_BLENDING_NONE"}function Ig(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Lg(e,t,n,i){let s=e.getContext(),r=n.defines,a=n.vertexShader,c=n.fragmentShader,l=Tg(n),h=Eg(n),u=Cg(n),g=Rg(n),p=Ig(n),f=mg(n),_=gg(r),M=s.createProgram(),d,m,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ur).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`)):(d=[Vc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),m=[Vc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sn?"#define TONE_MAPPING":"",n.toneMapping!==Sn?et.tonemapping_pars_fragment:"",n.toneMapping!==Sn?fg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ug("linearToOutputTexel",n.outputColorSpace),pg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ur).join(`
`)),a=kl(a),a=Bc(a,n),a=Oc(a,n),c=kl(c),c=Bc(c,n),c=Oc(c,n),a=zc(a),c=zc(c),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",n.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let F=w+d+a,S=w+m+c,E=Nc(s,s.VERTEX_SHADER,F),T=Nc(s,s.FRAGMENT_SHADER,S);s.attachShader(M,E),s.attachShader(M,T),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(k){if(e.debug.checkShaderErrors){let G=s.getProgramInfoLog(M)||"",$=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(T)||"",q=G.trim(),te=$.trim(),X=U.trim(),ae=!0,ie=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ae=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,E,T);else{let ne=kc(s,E,"vertex"),le=kc(s,T,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+ne+`
`+le)}else q!==""?He("WebGLProgram: Program Info Log:",q):(te===""||X==="")&&(ie=!1);ie&&(k.diagnostics={runnable:ae,programLog:q,vertexShader:{log:te,prefix:d},fragmentShader:{log:X,prefix:m}})}s.deleteShader(E),s.deleteShader(T),o=new _s(s,M),A=_g(s,M)}let o;this.getUniforms=function(){return o===void 0&&P(this),o};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(M,og)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=T,this}var Dg=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Ol(t),n.set(t,i)),i}},Ol=class{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}};function Fg(e){return e===_i||e===or||e===lr}function Ng(e,t,n,i,s,r){let a=new is,c=new Bl,l=new Set,h=[],u=new Map,g=i.logarithmicDepthBuffer,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(o){return l.add(o),o===0?"uv":`uv${o}`}function M(o,A,x,k,G,$){let U=k.fog,q=G.geometry,te=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?k.environment:null,X=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,ae=t.get(o.envMap||te,X),ie=ae&&ae.mapping===tr?ae.image.height:null,ne=f[o.type];o.precision!==null&&(p=i.getMaxPrecision(o.precision),p!==o.precision&&He("WebGLProgram.getParameters:",o.precision,"not supported, using",p,"instead."));let le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ae=le!==void 0?le.length:0,_e=0;q.morphAttributes.position!==void 0&&(_e=1),q.morphAttributes.normal!==void 0&&(_e=2),q.morphAttributes.color!==void 0&&(_e=3);let Je,it,at,H;if(ne){let Mt=On[ne];Je=Mt.vertexShader,it=Mt.fragmentShader}else{Je=o.vertexShader,it=o.fragmentShader;let Mt=c.getVertexShaderStage(o),ft=c.getFragmentShaderStage(o);c.update(o,Mt,ft),at=Mt.id,H=ft.id}let re=e.getRenderTarget(),ge=e.state.buffers.depth.getReversed(),J=G.isInstancedMesh===!0,ce=G.isBatchedMesh===!0,Me=!!o.map,$e=!!o.matcap,D=!!ae,ke=!!o.aoMap,ot=!!o.lightMap,De=!!o.bumpMap&&o.wireframe===!1,st=!!o.normalMap,y=!!o.displacementMap,R=!!o.emissiveMap,z=!!o.metalnessMap,se=!!o.roughnessMap,I=o.anisotropy>0,Ce=o.clearcoat>0,pe=o.dispersion>0,C=o.retroreflectivity>0,v=o.iridescence>0,V=o.sheen>0,N=o.transmission>0,K=I&&!!o.anisotropyMap,de=Ce&&!!o.clearcoatMap,fe=Ce&&!!o.clearcoatNormalMap,ee=Ce&&!!o.clearcoatRoughnessMap,oe=v&&!!o.iridescenceMap,me=v&&!!o.iridescenceThicknessMap,Fe=V&&!!o.sheenColorMap,ye=V&&!!o.sheenRoughnessMap,ve=!!o.specularMap,Be=!!o.specularColorMap,Ve=!!o.specularIntensityMap,Ke=N&&!!o.transmissionMap,O=N&&!!o.thicknessMap,xe=!!o.gradientMap,he=!!o.alphaMap,be=o.alphaTest>0,Ee=!!o.alphaHash,ue=!!o.extensions,Oe=Sn;o.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let Ne={shaderID:ne,shaderType:o.type,shaderName:o.name,vertexShader:Je,fragmentShader:it,defines:o.defines,customVertexShaderID:at,customFragmentShaderID:H,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:p,batching:ce,batchingColor:ce&&G._colorsTexture!==null,instancing:J,instancingColor:J&&G.instanceColor!==null,instancingMorph:J&&G.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:Me,matcap:$e,envMap:D,envMapMode:D&&ae.mapping,envMapCubeUVHeight:ie,aoMap:ke,lightMap:ot,bumpMap:De,normalMap:st,displacementMap:y,emissiveMap:R,normalMapObjectSpace:st&&o.normalMapType===lc,normalMapTangentSpace:st&&o.normalMapType===so,packedNormalMap:st&&o.normalMapType===so&&Fg(o.normalMap.format),metalnessMap:z,roughnessMap:se,anisotropy:I,anisotropyMap:K,clearcoat:Ce,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:pe,retroreflection:C,iridescence:v,iridescenceMap:oe,iridescenceThicknessMap:me,sheen:V,sheenColorMap:Fe,sheenRoughnessMap:ye,specularMap:ve,specularColorMap:Be,specularIntensityMap:Ve,transmission:N,transmissionMap:Ke,thicknessMap:O,gradientMap:xe,opaque:o.transparent===!1&&o.blending===ds&&o.alphaToCoverage===!1,alphaMap:he,alphaTest:be,alphaHash:Ee,combine:o.combine,mapUv:Me&&_(o.map.channel),aoMapUv:ke&&_(o.aoMap.channel),lightMapUv:ot&&_(o.lightMap.channel),bumpMapUv:De&&_(o.bumpMap.channel),normalMapUv:st&&_(o.normalMap.channel),displacementMapUv:y&&_(o.displacementMap.channel),emissiveMapUv:R&&_(o.emissiveMap.channel),metalnessMapUv:z&&_(o.metalnessMap.channel),roughnessMapUv:se&&_(o.roughnessMap.channel),anisotropyMapUv:K&&_(o.anisotropyMap.channel),clearcoatMapUv:de&&_(o.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(o.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(o.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(o.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(o.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(o.sheenRoughnessMap.channel),specularMapUv:ve&&_(o.specularMap.channel),specularColorMapUv:Be&&_(o.specularColorMap.channel),specularIntensityMapUv:Ve&&_(o.specularIntensityMap.channel),transmissionMapUv:Ke&&_(o.transmissionMap.channel),thicknessMapUv:O&&_(o.thicknessMap.channel),alphaMapUv:he&&_(o.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(st||I),vertexNormals:!!q.attributes.normal,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(Me||he),fog:!!U,useFog:o.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||q.attributes.normal===void 0&&st===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ge,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:_e,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&x.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Me&&o.map.isVideoTexture===!0&&ht.getTransfer(o.map.colorSpace)===mt,decodeVideoTextureEmissive:R&&o.emissiveMap.isVideoTexture===!0&&ht.getTransfer(o.emissiveMap.colorSpace)===mt,premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===tn,flipSided:o.side===en,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:ue&&o.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&o.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function d(o){let A=[];if(o.shaderID?A.push(o.shaderID):(A.push(o.customVertexShaderID),A.push(o.customFragmentShaderID)),o.defines!==void 0)for(let x in o.defines)A.push(x),A.push(o.defines[x]);return o.isRawShaderMaterial===!1&&(m(A,o),w(A,o),A.push(e.outputColorSpace)),A.push(o.customProgramCacheKey),A.join()}function m(o,A){o.push(A.precision),o.push(A.outputColorSpace),o.push(A.envMapMode),o.push(A.envMapCubeUVHeight),o.push(A.mapUv),o.push(A.alphaMapUv),o.push(A.lightMapUv),o.push(A.aoMapUv),o.push(A.bumpMapUv),o.push(A.normalMapUv),o.push(A.displacementMapUv),o.push(A.emissiveMapUv),o.push(A.metalnessMapUv),o.push(A.roughnessMapUv),o.push(A.anisotropyMapUv),o.push(A.clearcoatMapUv),o.push(A.clearcoatNormalMapUv),o.push(A.clearcoatRoughnessMapUv),o.push(A.iridescenceMapUv),o.push(A.iridescenceThicknessMapUv),o.push(A.sheenColorMapUv),o.push(A.sheenRoughnessMapUv),o.push(A.specularMapUv),o.push(A.specularColorMapUv),o.push(A.specularIntensityMapUv),o.push(A.transmissionMapUv),o.push(A.thicknessMapUv),o.push(A.combine),o.push(A.fogExp2),o.push(A.sizeAttenuation),o.push(A.morphTargetsCount),o.push(A.morphAttributeCount),o.push(A.numSunLights),o.push(A.numDirLights),o.push(A.numPointLights),o.push(A.numSpotLights),o.push(A.numSpotLightMaps),o.push(A.numHemiLights),o.push(A.numRectAreaLights),o.push(A.numSunLightShadows),o.push(A.numDirLightShadows),o.push(A.numPointLightShadows),o.push(A.numSpotLightShadows),o.push(A.numSpotLightShadowsWithMaps),o.push(A.numLightProbes),o.push(A.shadowMapType),o.push(A.toneMapping),o.push(A.numClippingPlanes),o.push(A.numClipIntersection),o.push(A.depthPacking)}function w(o,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),o.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),o.push(a.mask)}function F(o){let A=f[o.type],x;if(A){let k=On[A];x=Sc.clone(k.uniforms)}else x=o.uniforms;return x}function S(o,A){let x=u.get(A);return x!==void 0?++x.usedTimes:(x=new Lg(e,A,o,s),h.push(x),u.set(A,x)),x}function E(o){if(--o.usedTimes===0){let A=h.indexOf(o);h[A]=h[h.length-1],h.pop(),u.delete(o.cacheKey),o.destroy()}}function T(o){c.remove(o)}function P(){c.dispose()}return{getParameters:M,getProgramCacheKey:d,getUniforms:F,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:P}}function Ug(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let c=e.get(a);return c===void 0&&(c={},e.set(a,c)),c}function i(a){e.delete(a)}function s(a,c,l){e.get(a)[c]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function kg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Gc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Hc(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(p){let f=0;return p.isInstancedMesh&&(f+=2),p.isSkinnedMesh&&(f+=1),f}function c(p,f,_,M,d,m){let w=e[t];return w===void 0?(w={id:p.id,object:p,geometry:f,material:_,materialVariant:a(p),groupOrder:M,renderOrder:p.renderOrder,z:d,group:m},e[t]=w):(w.id=p.id,w.object=p,w.geometry=f,w.material=_,w.materialVariant=a(p),w.groupOrder=M,w.renderOrder=p.renderOrder,w.z=d,w.group=m),t++,w}function l(p,f,_,M,d,m,w){w.reversedDepth===!0&&(d=-d);let F=c(p,f,_,M,d,m);_.transmission>0?i.push(F):_.transparent===!0?s.push(F):n.push(F)}function h(p,f,_,M,d,m){let w=c(p,f,_,M,d,m);_.transmission>0?i.unshift(w):_.transparent===!0?s.unshift(w):n.unshift(w)}function u(p,f){n.length>1&&n.sort(p||kg),i.length>1&&i.sort(f||Gc),s.length>1&&s.sort(f||Gc)}function g(){for(let p=t,f=e.length;p<f;p++){let _=e[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:g,sort:u}}function Bg(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;return r===void 0?(a=new Hc,e.set(i,[a])):s>=r.length?(a=new Hc,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Og(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new W,color:new rt};break;case"SpotLight":n={position:new W,direction:new W,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new W,halfWidth:new W,halfHeight:new W};break}return e[t.id]=n,n}}}function zg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Vg=0;function Gg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Hg(e){let t=new Og,n=zg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new W);let s=new W,r=new vt,a=new vt;function c(h){let u=0,g=0,p=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,_=0,M=0,d=0,m=0,w=0,F=0,S=0,E=0,T=0,P=0,o=0,A=0,x=0;h.sort(Gg);for(let G=0,$=h.length;G<$;G++){let U=h[G],q=U.color,te=U.intensity,X=U.distance,ae=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===_i?ae=U.shadow.map.texture:ae=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=q.r*te,g+=q.g*te,p+=q.b*te;else if(U.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(U.sh.coefficients[ie],te);x++}else if(U.isSunLight){let ie=t.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ne=U.shadow,le=n.get(U);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[_]=le,i.sunShadowMap[_]=ae;let Ae=ne.getViewportCount();for(let _e=0;_e<Ae;_e++)i.sunShadowMatrix[M+_e]=ne.getMatrix(_e),i.sunShadowCascade[M+_e]=ne._cascadeData[_e];M+=Ae,_++}i.sun[f]=ie,f++}else if(U.isDirectionalLight){let ie=t.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ne=U.shadow,le=n.get(U);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,i.directionalShadow[d]=le,i.directionalShadowMap[d]=ae,i.directionalShadowMatrix[d]=U.shadow.matrix,E++}i.directional[d]=ie,d++}else if(U.isSpotLight){let ie=t.get(U);ie.position.setFromMatrixPosition(U.matrixWorld),ie.color.copy(q).multiplyScalar(te),ie.distance=X,ie.coneCos=Math.cos(U.angle),ie.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ie.decay=U.decay,i.spot[w]=ie;let ne=U.shadow;if(U.map&&(i.spotLightMap[o]=U.map,o++,ne.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[w]=ne.matrix,U.castShadow){let le=n.get(U);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,i.spotShadow[w]=le,i.spotShadowMap[w]=ae,P++}w++}else if(U.isRectAreaLight){let ie=t.get(U);ie.color.copy(q).multiplyScalar(te),ie.halfWidth.set(U.width*.5,0,0),ie.halfHeight.set(0,U.height*.5,0),i.rectArea[F]=ie,F++}else if(U.isPointLight){let ie=t.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),ie.distance=U.distance,ie.decay=U.decay,U.castShadow){let ne=U.shadow,le=n.get(U);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,le.shadowCameraNear=ne.camera.near,le.shadowCameraFar=ne.camera.far,i.pointShadow[m]=le,i.pointShadowMap[m]=ae,i.pointShadowMatrix[m]=U.shadow.matrix,T++}i.point[m]=ie,m++}else if(U.isHemisphereLight){let ie=t.get(U);ie.skyColor.copy(U.color).multiplyScalar(te),ie.groundColor.copy(U.groundColor).multiplyScalar(te),i.hemi[S]=ie,S++}}F>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=p;let k=i.hash;(k.sunLength!==f||k.directionalLength!==d||k.pointLength!==m||k.spotLength!==w||k.rectAreaLength!==F||k.hemiLength!==S||k.numSunShadows!==_||k.numDirectionalShadows!==E||k.numPointShadows!==T||k.numSpotShadows!==P||k.numSpotMaps!==o||k.numLightProbes!==x)&&(i.sun.length=f,i.directional.length=d,i.spot.length=w,i.rectArea.length=F,i.point.length=m,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+o-A,i.spotLightMap.length=o,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=x,k.sunLength=f,k.directionalLength=d,k.pointLength=m,k.spotLength=w,k.rectAreaLength=F,k.hemiLength=S,k.numSunShadows=_,k.numDirectionalShadows=E,k.numPointShadows=T,k.numSpotShadows=P,k.numSpotMaps=o,k.numLightProbes=x,i.version=Vg++)}function l(h,u){let g=0,p=0,f=0,_=0,M=0,d=0,m=u.matrixWorldInverse;for(let w=0,F=h.length;w<F;w++){let S=h[w];if(S.isSunLight){let E=i.sun[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),g++}else if(S.isDirectionalLight){let E=i.directional[p];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(S.isSpotLight){let E=i.spot[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),_++}else if(S.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let E=i.hemi[d];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),d++}}}return{setup:c,setupView:l,state:i}}function Wc(e){let t=new Hg(e),n=[],i=[],s=[];function r(p){g.camera=p,n.length=0,i.length=0,s.length=0}function a(p){n.push(p)}function c(p){i.push(p)}function l(p){s.push(p)}function h(){t.setup(n)}function u(p){t.setupView(n,p)}let g={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:c,pushLightProbeGrid:l}}function Wg(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),c;return a===void 0?(c=new Wc(e),t.set(s,[c])):r>=a.length?(c=new Wc(e),a.push(c)):c=a[r],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`,Yg=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Zg=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Xc=new vt,cr=new W,Ll=new W;function Jg(e,t,n){let i=new os,s=new We,r=new We,a=new Rt,c=new ia,l=new sa,h={},u=n.maxTextureSize,g={[fi]:en,[en]:fi,[tn]:tn},p=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let _=new qt;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new sn(_,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let m=this.type;this.render=function(T,P,o){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;this.type===Oh&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);let A=e.getRenderTarget(),x=e.getActiveCubeFace(),k=e.getActiveMipmapLevel(),G=e.state;G.setBlending(kn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let $=m!==this.type;$&&P.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(q=>q.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,q=T.length;U<q;U++){let te=T[U],X=te.shadow;if(X===void 0){He("WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ae=X.getFrameExtents();s.multiply(ae),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,X.mapSize.y=r.y));let ie=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ie,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===us){if(te.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new nn(s.x,s.y,{format:_i,type:wn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),X.map.texture.name=te.name+".shadowMap",X.map.depthTexture=new li(s.x,s.y,Tn),X.map.depthTexture.name=te.name+".shadowMapDepth",X.map.depthTexture.format=Ln,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ot,X.map.depthTexture.magFilter=Ot}else te.isPointLight?(X.map=new co(s.x),X.map.depthTexture=new ta(s.x,Mn)):(X.map=new nn(s.x,s.y),X.map.depthTexture=new li(s.x,s.y,Mn)),X.map.depthTexture.name=te.name+".shadowMap",X.map.depthTexture.format=Ln,this.type===er?(X.map.depthTexture.compareFunction=ie?ao:ro,X.map.depthTexture.minFilter=Vt,X.map.depthTexture.magFilter=Vt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ot,X.map.depthTexture.magFilter=Ot);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ne=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();te.isPointLight!==!0&&X.updateMatrices(te,o);for(let le=0;le<ne;le++){let Ae=X.getCamera(le);if(te.isPointLight){let _e=X.camera,Je=X.matrix,it=te.distance||_e.far;it!==_e.far&&(_e.far=it,_e.updateProjectionMatrix()),cr.setFromMatrixPosition(te.matrixWorld),_e.position.copy(cr),Ll.copy(_e.position),Ll.add(Yg[le]),_e.up.copy(Zg[le]),_e.lookAt(Ll),_e.updateMatrixWorld(),Je.makeTranslation(-cr.x,-cr.y,-cr.z),Xc.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Xc,_e.coordinateSystem,_e.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,le),e.clear();else{le===0&&(e.setRenderTarget(X.map),e.clear());let _e=X.getViewport(le);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),G.viewport(a)}i=X.getFrustum(le),S(P,o,Ae,te,this.type)}X.isPointLightShadow!==!0&&this.type===us&&w(X,o),X.needsUpdate=!1}m=this.type,d.needsUpdate=!1,e.setRenderTarget(A,x,k)};function w(T,P){let o=t.update(M);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new nn(s.x,s.y,{format:_i,type:wn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),p.uniforms.shadow_pass.value=T.map.depthTexture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(P,null,o,p,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(P,null,o,f,M,null)}function F(T,P,o,A){let x=null,k=o.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)x=k;else if(x=o.isPointLight===!0?l:c,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let G=x.uuid,$=P.uuid,U=h[G];U===void 0&&(U={},h[G]=U);let q=U[$];q===void 0&&(q=x.clone(),U[$]=q,P.addEventListener("dispose",E)),x=q}if(x.visible=P.visible,x.wireframe=P.wireframe,A===us?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:g[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,o.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=e.properties.get(x);G.light=o}return x}function S(T,P,o,A,x){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===us)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,T.matrixWorld);let $=t.update(T),U=T.material;if(Array.isArray(U)){let q=$.groups;for(let te=0,X=q.length;te<X;te++){let ae=q[te],ie=U[ae.materialIndex];if(ie&&ie.visible){let ne=F(T,ie,A,x);T.onBeforeShadow(e,T,P,o,$,ne,ae),e.renderBufferDirect(o,null,$,ne,T,ae),T.onAfterShadow(e,T,P,o,$,ne,ae)}}}else if(U.visible){let q=F(T,U,A,x);T.onBeforeShadow(e,T,P,o,$,q,null),e.renderBufferDirect(o,null,$,q,T,null),T.onAfterShadow(e,T,P,o,$,q,null)}}let G=T.children;for(let $=0,U=G.length;$<U;$++)S(G[$],P,o,A,x)}function E(T){T.target.removeEventListener("dispose",E);for(let o in h){let A=h[o],x=T.target.uuid;x in A&&(A[x].dispose(),delete A[x])}}}function $g(e,t){function n(){let O=!1,xe=new Rt,he=null,be=new Rt(0,0,0,0);return{setMask:function(Ee){he!==Ee&&!O&&(e.colorMask(Ee,Ee,Ee,Ee),he=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,ue,Oe,Ne,Mt){Mt===!0&&(Ee*=Ne,ue*=Ne,Oe*=Ne),xe.set(Ee,ue,Oe,Ne),be.equals(xe)===!1&&(e.clearColor(Ee,ue,Oe,Ne),be.copy(xe))},reset:function(){O=!1,he=null,be.set(-1,0,0,0)}}}function i(){let O=!1,xe=!1,he=null,be=null,Ee=null;return{setReversed:function(ue){if(xe!==ue){let Oe=t.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;let Ne=Ee;Ee=null,this.setClear(Ne)}},getReversed:function(){return xe},setTest:function(ue){ue?re(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(ue){he!==ue&&!O&&(e.depthMask(ue),he=ue)},setFunc:function(ue){if(xe&&(ue=yc[ue]),be!==ue){switch(ue){case Or:e.depthFunc(e.NEVER);break;case zr:e.depthFunc(e.ALWAYS);break;case Vr:e.depthFunc(e.LESS);break;case Qi:e.depthFunc(e.LEQUAL);break;case Gr:e.depthFunc(e.EQUAL);break;case Hr:e.depthFunc(e.GEQUAL);break;case Wr:e.depthFunc(e.GREATER);break;case Xr:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}be=ue}},setLocked:function(ue){O=ue},setClear:function(ue){Ee!==ue&&(Ee=ue,xe&&(ue=1-ue),e.clearDepth(ue))},reset:function(){O=!1,he=null,be=null,Ee=null,xe=!1}}}function s(){let O=!1,xe=null,he=null,be=null,Ee=null,ue=null,Oe=null,Ne=null,Mt=null;return{setTest:function(ft){O||(ft?re(e.STENCIL_TEST):ge(e.STENCIL_TEST))},setMask:function(ft){xe!==ft&&!O&&(e.stencilMask(ft),xe=ft)},setFunc:function(ft,gn,An){(he!==ft||be!==gn||Ee!==An)&&(e.stencilFunc(ft,gn,An),he=ft,be=gn,Ee=An)},setOp:function(ft,gn,An){(ue!==ft||Oe!==gn||Ne!==An)&&(e.stencilOp(ft,gn,An),ue=ft,Oe=gn,Ne=An)},setLocked:function(ft){O=ft},setClear:function(ft){Mt!==ft&&(e.clearStencil(ft),Mt=ft)},reset:function(){O=!1,xe=null,he=null,be=null,Ee=null,ue=null,Oe=null,Ne=null,Mt=null}}}let r=new n,a=new i,c=new s,l=new WeakMap,h=new WeakMap,u={},g={},p={},f=new WeakMap,_=[],M=null,d=!1,m=null,w=null,F=null,S=null,E=null,T=null,P=null,o=new rt(0,0,0),A=0,x=!1,k=null,G=null,$=null,U=null,q=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ae=0,ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ie)[1]),X=ae>=1):ie.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),X=ae>=2);let ne=null,le={},Ae=e.getParameter(e.SCISSOR_BOX),_e=e.getParameter(e.VIEWPORT),Je=new Rt().fromArray(Ae),it=new Rt().fromArray(_e);function at(O,xe,he,be){let Ee=new Uint8Array(4),ue=e.createTexture();e.bindTexture(O,ue),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Oe=0;Oe<he;Oe++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(xe,0,e.RGBA,1,1,be,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D(xe+Oe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return ue}let H={};H[e.TEXTURE_2D]=at(e.TEXTURE_2D,e.TEXTURE_2D,1),H[e.TEXTURE_CUBE_MAP]=at(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[e.TEXTURE_2D_ARRAY]=at(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),H[e.TEXTURE_3D]=at(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),re(e.DEPTH_TEST),a.setFunc(Qi),De(!1),st(Qo),re(e.CULL_FACE),ke(kn);function re(O){u[O]!==!0&&(e.enable(O),u[O]=!0)}function ge(O){u[O]!==!1&&(e.disable(O),u[O]=!1)}function J(O,xe){return p[O]!==xe?(e.bindFramebuffer(O,xe),p[O]=xe,O===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=xe),O===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=xe),!0):!1}function ce(O,xe){let he=_,be=!1;if(O){he=f.get(xe),he===void 0&&(he=[],f.set(xe,he));let Ee=O.textures;if(he.length!==Ee.length||he[0]!==e.COLOR_ATTACHMENT0){for(let ue=0,Oe=Ee.length;ue<Oe;ue++)he[ue]=e.COLOR_ATTACHMENT0+ue;he.length=Ee.length,be=!0}}else he[0]!==e.BACK&&(he[0]=e.BACK,be=!0);be&&e.drawBuffers(he)}function Me(O){return M!==O?(e.useProgram(O),M=O,!0):!1}let $e={[Ci]:e.FUNC_ADD,[Vh]:e.FUNC_SUBTRACT,[Gh]:e.FUNC_REVERSE_SUBTRACT};$e[Hh]=e.MIN,$e[Wh]=e.MAX;let D={[Xh]:e.ZERO,[qh]:e.ONE,[Yh]:e.SRC_COLOR,[il]:e.SRC_ALPHA,[Qh]:e.SRC_ALPHA_SATURATE,[Kh]:e.DST_COLOR,[Jh]:e.DST_ALPHA,[Zh]:e.ONE_MINUS_SRC_COLOR,[sl]:e.ONE_MINUS_SRC_ALPHA,[jh]:e.ONE_MINUS_DST_COLOR,[$h]:e.ONE_MINUS_DST_ALPHA,[ec]:e.CONSTANT_COLOR,[tc]:e.ONE_MINUS_CONSTANT_COLOR,[nc]:e.CONSTANT_ALPHA,[ic]:e.ONE_MINUS_CONSTANT_ALPHA};function ke(O,xe,he,be,Ee,ue,Oe,Ne,Mt,ft){if(O===kn){d===!0&&(ge(e.BLEND),d=!1);return}if(d===!1&&(re(e.BLEND),d=!0),O!==zh){if(O!==m||ft!==x){if((w!==Ci||E!==Ci)&&(e.blendEquation(e.FUNC_ADD),w=Ci,E=Ci),ft)switch(O){case ds:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case el:e.blendFunc(e.ONE,e.ONE);break;case tl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case nl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ge("WebGLState: Invalid blending: ",O);break}else switch(O){case ds:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case el:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case tl:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",O);break}F=null,S=null,T=null,P=null,o.set(0,0,0),A=0,m=O,x=ft}return}Ee=Ee||xe,ue=ue||he,Oe=Oe||be,(xe!==w||Ee!==E)&&(e.blendEquationSeparate($e[xe],$e[Ee]),w=xe,E=Ee),(he!==F||be!==S||ue!==T||Oe!==P)&&(e.blendFuncSeparate(D[he],D[be],D[ue],D[Oe]),F=he,S=be,T=ue,P=Oe),(Ne.equals(o)===!1||Mt!==A)&&(e.blendColor(Ne.r,Ne.g,Ne.b,Mt),o.copy(Ne),A=Mt),m=O,x=!1}function ot(O,xe){O.side===tn?ge(e.CULL_FACE):re(e.CULL_FACE);let he=O.side===en;xe&&(he=!he),De(he),O.blending===ds&&O.transparent===!1?ke(kn):ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let be=O.stencilWrite;c.setTest(be),be&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),R(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function De(O){k!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),k=O)}function st(O){O!==kh?(re(e.CULL_FACE),O!==G&&(O===Qo?e.cullFace(e.BACK):O===Bh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ge(e.CULL_FACE),G=O}function y(O){O!==$&&(X&&e.lineWidth(O),$=O)}function R(O,xe,he){O?(re(e.POLYGON_OFFSET_FILL),(U!==xe||q!==he)&&(U=xe,q=he,a.getReversed()&&(xe=-xe),e.polygonOffset(xe,he))):ge(e.POLYGON_OFFSET_FILL)}function z(O){O?re(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function se(O){O===void 0&&(O=e.TEXTURE0+te-1),ne!==O&&(e.activeTexture(O),ne=O)}function I(O,xe,he){he===void 0&&(ne===null?he=e.TEXTURE0+te-1:he=ne);let be=le[he];be===void 0&&(be={type:void 0,texture:void 0},le[he]=be),(be.type!==O||be.texture!==xe)&&(ne!==he&&(e.activeTexture(he),ne=he),e.bindTexture(O,xe||H[O]),be.type=O,be.texture=xe)}function Ce(){let O=le[ne];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function pe(){try{e.compressedTexImage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function v(){try{e.texSubImage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function V(){try{e.texSubImage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function N(){try{e.compressedTexSubImage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function K(){try{e.compressedTexSubImage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function de(){try{e.texStorage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function fe(){try{e.texStorage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function ee(){try{e.texImage2D(...arguments)}catch(O){Ge("WebGLState:",O)}}function oe(){try{e.texImage3D(...arguments)}catch(O){Ge("WebGLState:",O)}}function me(O){return g[O]!==void 0?g[O]:e.getParameter(O)}function Fe(O,xe){g[O]!==xe&&(e.pixelStorei(O,xe),g[O]=xe)}function ye(O){Je.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),Je.copy(O))}function ve(O){it.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),it.copy(O))}function Be(O,xe){let he=h.get(xe);he===void 0&&(he=new WeakMap,h.set(xe,he));let be=he.get(O);be===void 0&&(be=e.getUniformBlockIndex(xe,O.name),he.set(O,be))}function Ve(O,xe){let be=h.get(xe).get(O);l.get(xe)!==be&&(e.uniformBlockBinding(xe,be,O.__bindingPointIndex),l.set(xe,be))}function Ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},g={},ne=null,le={},p={},f=new WeakMap,_=[],M=null,d=!1,m=null,w=null,F=null,S=null,E=null,T=null,P=null,o=new rt(0,0,0),A=0,x=!1,k=null,G=null,$=null,U=null,q=null,Je.set(0,0,e.canvas.width,e.canvas.height),it.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:re,disable:ge,bindFramebuffer:J,drawBuffers:ce,useProgram:Me,setBlending:ke,setMaterial:ot,setFlipSided:De,setCullFace:st,setLineWidth:y,setPolygonOffset:R,setScissorTest:z,activeTexture:se,bindTexture:I,unbindTexture:Ce,compressedTexImage2D:pe,compressedTexImage3D:C,texImage2D:ee,texImage3D:oe,pixelStorei:Fe,getParameter:me,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:de,texStorage3D:fe,texSubImage2D:v,texSubImage3D:V,compressedTexSubImage2D:N,compressedTexSubImage3D:K,scissor:ye,viewport:ve,reset:Ke}}function Kg(e,t,n,i,s,r,a){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new We,u=new WeakMap,g=new Set,p,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,v){return _?new OffscreenCanvas(C,v):Fs("canvas")}function d(C,v,V){let N=1,K=pe(C);if((K.width>V||K.height>V)&&(N=V/Math.max(K.width,K.height)),N<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let de=Math.floor(N*K.width),fe=Math.floor(N*K.height);p===void 0&&(p=M(de,fe));let ee=v?M(de,fe):p;return ee.width=de,ee.height=fe,ee.getContext("2d").drawImage(C,0,0,de,fe),He("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+de+"x"+fe+")."),ee}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function w(C){e.generateMipmap(C)}function F(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(C,v,V,N,K,de=!1){if(C!==null){if(e[C]!==void 0)return e[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;N&&(fe=t.get("EXT_texture_norm16"),fe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=v;if(v===e.RED&&(V===e.FLOAT&&(ee=e.R32F),V===e.HALF_FLOAT&&(ee=e.R16F),V===e.UNSIGNED_BYTE&&(ee=e.R8),V===e.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),V===e.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),v===e.RED_INTEGER&&(V===e.UNSIGNED_BYTE&&(ee=e.R8UI),V===e.UNSIGNED_SHORT&&(ee=e.R16UI),V===e.UNSIGNED_INT&&(ee=e.R32UI),V===e.BYTE&&(ee=e.R8I),V===e.SHORT&&(ee=e.R16I),V===e.INT&&(ee=e.R32I)),v===e.RG&&(V===e.FLOAT&&(ee=e.RG32F),V===e.HALF_FLOAT&&(ee=e.RG16F),V===e.UNSIGNED_BYTE&&(ee=e.RG8),V===e.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),V===e.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(V===e.UNSIGNED_BYTE&&(ee=e.RG8UI),V===e.UNSIGNED_SHORT&&(ee=e.RG16UI),V===e.UNSIGNED_INT&&(ee=e.RG32UI),V===e.BYTE&&(ee=e.RG8I),V===e.SHORT&&(ee=e.RG16I),V===e.INT&&(ee=e.RG32I)),v===e.RGB_INTEGER&&(V===e.UNSIGNED_BYTE&&(ee=e.RGB8UI),V===e.UNSIGNED_SHORT&&(ee=e.RGB16UI),V===e.UNSIGNED_INT&&(ee=e.RGB32UI),V===e.BYTE&&(ee=e.RGB8I),V===e.SHORT&&(ee=e.RGB16I),V===e.INT&&(ee=e.RGB32I)),v===e.RGBA_INTEGER&&(V===e.UNSIGNED_BYTE&&(ee=e.RGBA8UI),V===e.UNSIGNED_SHORT&&(ee=e.RGBA16UI),V===e.UNSIGNED_INT&&(ee=e.RGBA32UI),V===e.BYTE&&(ee=e.RGBA8I),V===e.SHORT&&(ee=e.RGBA16I),V===e.INT&&(ee=e.RGBA32I)),v===e.RGB&&(V===e.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),V===e.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),V===e.UNSIGNED_INT_5_9_9_9_REV&&(ee=e.RGB9_E5),V===e.UNSIGNED_INT_10F_11F_11F_REV&&(ee=e.R11F_G11F_B10F)),v===e.RGBA){let oe=de?Ds:ht.getTransfer(K);V===e.FLOAT&&(ee=e.RGBA32F),V===e.HALF_FLOAT&&(ee=e.RGBA16F),V===e.UNSIGNED_BYTE&&(ee=oe===mt?e.SRGB8_ALPHA8:e.RGBA8),V===e.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),V===e.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),V===e.UNSIGNED_SHORT_4_4_4_4&&(ee=e.RGBA4),V===e.UNSIGNED_SHORT_5_5_5_1&&(ee=e.RGB5_A1)}return(ee===e.R16F||ee===e.R32F||ee===e.RG16F||ee===e.RG32F||ee===e.RGBA16F||ee===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ee}function E(C,v){let V;return C?v===null||v===Mn||v===ps?V=e.DEPTH24_STENCIL8:v===Tn?V=e.DEPTH32F_STENCIL8:v===fs&&(V=e.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mn||v===ps?V=e.DEPTH_COMPONENT24:v===Tn?V=e.DEPTH_COMPONENT32F:v===fs&&(V=e.DEPTH_COMPONENT16),V}function T(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ot&&C.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function P(C){let v=C.target;v.removeEventListener("dispose",P),A(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&g.delete(v)}function o(C){let v=C.target;v.removeEventListener("dispose",o),k(v)}function A(C){let v=i.get(C);if(v.__webglInit===void 0)return;let V=C.source,N=f.get(V);if(N){let K=N[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(C),Object.keys(N).length===0&&f.delete(V)}i.remove(C)}function x(C){let v=i.get(C);e.deleteTexture(v.__webglTexture);let V=C.source,N=f.get(V);delete N[v.__cacheKey],a.memory.textures--}function k(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(v.__webglFramebuffer[N]))for(let K=0;K<v.__webglFramebuffer[N].length;K++)e.deleteFramebuffer(v.__webglFramebuffer[N][K]);else e.deleteFramebuffer(v.__webglFramebuffer[N]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[N])}else{if(Array.isArray(v.__webglFramebuffer))for(let N=0;N<v.__webglFramebuffer.length;N++)e.deleteFramebuffer(v.__webglFramebuffer[N]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let N=0;N<v.__webglColorRenderbuffer.length;N++)v.__webglColorRenderbuffer[N]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[N]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=C.textures;for(let N=0,K=V.length;N<K;N++){let de=i.get(V[N]);de.__webglTexture&&(e.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(V[N])}i.remove(C)}let G=0;function $(){G=0}function U(){return G}function q(C){G=C}function te(){let C=G;return C>=s.maxTextures&&He("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,C}function X(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function ae(C,v){let V=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let N=C.image;if(N===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(V,C,v);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+v)}function ie(C,v){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ge(V,C,v);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+v)}function ne(C,v){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ge(V,C,v);return}n.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+v)}function le(C,v){let V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){J(V,C,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+v)}let Ae={[qr]:e.REPEAT,[In]:e.CLAMP_TO_EDGE,[Yr]:e.MIRRORED_REPEAT},_e={[Ot]:e.NEAREST,[ac]:e.NEAREST_MIPMAP_NEAREST,[nr]:e.NEAREST_MIPMAP_LINEAR,[Vt]:e.LINEAR,[ba]:e.LINEAR_MIPMAP_NEAREST,[mi]:e.LINEAR_MIPMAP_LINEAR},Je={[cc]:e.NEVER,[mc]:e.ALWAYS,[uc]:e.LESS,[ro]:e.LEQUAL,[dc]:e.EQUAL,[ao]:e.GEQUAL,[fc]:e.GREATER,[pc]:e.NOTEQUAL};function it(C,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Vt||v.magFilter===ba||v.magFilter===nr||v.magFilter===mi||v.minFilter===Vt||v.minFilter===ba||v.minFilter===nr||v.minFilter===mi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,Ae[v.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,Ae[v.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,Ae[v.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,_e[v.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Je[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==nr&&v.minFilter!==mi||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function at(C,v){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",P));let N=v.source,K=f.get(N);K===void 0&&(K={},f.set(N,K));let de=X(v);if(de!==C.__cacheKey){K[de]===void 0&&(K[de]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,V=!0),K[de].usedTimes++;let fe=K[C.__cacheKey];fe!==void 0&&(K[C.__cacheKey].usedTimes--,fe.usedTimes===0&&x(v)),C.__cacheKey=de,C.__webglTexture=K[de].texture}return V}function H(C,v,V){return Math.floor(Math.floor(C/V)/v)}function re(C,v,V,N){let de=C.updateRanges;if(de.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,V,N,v.data);else{de.sort((Fe,ye)=>Fe.start-ye.start);let fe=0;for(let Fe=1;Fe<de.length;Fe++){let ye=de[fe],ve=de[Fe],Be=ye.start+ye.count,Ve=H(ve.start,v.width,4),Ke=H(ye.start,v.width,4);ve.start<=Be+1&&Ve===Ke&&H(ve.start+ve.count-1,v.width,4)===Ve?ye.count=Math.max(ye.count,ve.start+ve.count-ye.start):(++fe,de[fe]=ve)}de.length=fe+1;let ee=n.getParameter(e.UNPACK_ROW_LENGTH),oe=n.getParameter(e.UNPACK_SKIP_PIXELS),me=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let Fe=0,ye=de.length;Fe<ye;Fe++){let ve=de[Fe],Be=Math.floor(ve.start/4),Ve=Math.ceil(ve.count/4),Ke=Be%v.width,O=Math.floor(Be/v.width),xe=Ve,he=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,Ke,O,xe,he,V,N,v.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,ee),n.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function ge(C,v,V){let N=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(N=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(N=e.TEXTURE_3D);let K=at(C,v),de=v.source;n.bindTexture(N,C.__webglTexture,e.TEXTURE0+V);let fe=i.get(de);if(de.version!==fe.__version||K===!0){if(n.activeTexture(e.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let he=ht.getPrimaries(ht.workingColorSpace),be=v.colorSpace===Kn?null:ht.getPrimaries(v.colorSpace),Ee=v.colorSpace===Kn||he===be?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let oe=d(v.image,!1,s.maxTextureSize);oe=Ce(v,oe);let me=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),ye=S(v.internalFormat,me,Fe,v.normalized,v.colorSpace,v.isVideoTexture);it(N,v);let ve,Be=v.mipmaps,Ve=v.isVideoTexture!==!0,Ke=fe.__version===void 0||K===!0,O=de.dataReady,xe=T(v,oe);if(v.isDepthTexture)ye=E(v.format===gi,v.type),Ke&&(Ve?n.texStorage2D(e.TEXTURE_2D,1,ye,oe.width,oe.height):n.texImage2D(e.TEXTURE_2D,0,ye,oe.width,oe.height,0,me,Fe,null));else if(v.isDataTexture)if(Be.length>0){Ve&&Ke&&n.texStorage2D(e.TEXTURE_2D,xe,ye,Be[0].width,Be[0].height);for(let he=0,be=Be.length;he<be;he++)ve=Be[he],Ve?O&&n.texSubImage2D(e.TEXTURE_2D,he,0,0,ve.width,ve.height,me,Fe,ve.data):n.texImage2D(e.TEXTURE_2D,he,ye,ve.width,ve.height,0,me,Fe,ve.data);v.generateMipmaps=!1}else Ve?(Ke&&n.texStorage2D(e.TEXTURE_2D,xe,ye,oe.width,oe.height),O&&re(v,oe,me,Fe)):n.texImage2D(e.TEXTURE_2D,0,ye,oe.width,oe.height,0,me,Fe,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&Ke&&n.texStorage3D(e.TEXTURE_2D_ARRAY,xe,ye,Be[0].width,Be[0].height,oe.depth);for(let he=0,be=Be.length;he<be;he++)if(ve=Be[he],v.format!==pn)if(me!==null)if(Ve){if(O)if(v.layerUpdates.size>0){let Ee=El(ve.width,ve.height,v.format,v.type);for(let ue of v.layerUpdates){let Oe=ve.data.subarray(ue*Ee/ve.data.BYTES_PER_ELEMENT,(ue+1)*Ee/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,ue,ve.width,ve.height,1,me,Oe)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,oe.depth,me,ve.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,he,ye,ve.width,ve.height,oe.depth,0,ve.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,oe.depth,me,Fe,ve.data):n.texImage3D(e.TEXTURE_2D_ARRAY,he,ye,ve.width,ve.height,oe.depth,0,me,Fe,ve.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ve&&Ke&&n.texStorage2D(e.TEXTURE_2D,xe,ye,Be[0].width,Be[0].height);for(let he=0,be=Be.length;he<be;he++)ve=Be[he],v.format!==pn?me!==null?Ve?O&&n.compressedTexSubImage2D(e.TEXTURE_2D,he,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(e.TEXTURE_2D,he,ye,ve.width,ve.height,0,ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&n.texSubImage2D(e.TEXTURE_2D,he,0,0,ve.width,ve.height,me,Fe,ve.data):n.texImage2D(e.TEXTURE_2D,he,ye,ve.width,ve.height,0,me,Fe,ve.data)}else if(v.isDataArrayTexture)if(Ve){if(Ke&&n.texStorage3D(e.TEXTURE_2D_ARRAY,xe,ye,oe.width,oe.height,oe.depth),O)if(v.layerUpdates.size>0){let he=El(oe.width,oe.height,v.format,v.type);for(let be of v.layerUpdates){let Ee=oe.data.subarray(be*he/oe.data.BYTES_PER_ELEMENT,(be+1)*he/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,be,oe.width,oe.height,1,me,Fe,Ee)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Fe,oe.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,oe.width,oe.height,oe.depth,0,me,Fe,oe.data);else if(v.isData3DTexture)Ve?(Ke&&n.texStorage3D(e.TEXTURE_3D,xe,ye,oe.width,oe.height,oe.depth),O&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Fe,oe.data)):n.texImage3D(e.TEXTURE_3D,0,ye,oe.width,oe.height,oe.depth,0,me,Fe,oe.data);else if(v.isFramebufferTexture){if(Ke)if(Ve)n.texStorage2D(e.TEXTURE_2D,xe,ye,oe.width,oe.height);else{let he=oe.width,be=oe.height;for(let Ee=0;Ee<xe;Ee++)n.texImage2D(e.TEXTURE_2D,Ee,ye,he,be,0,me,Fe,null),he>>=1,be>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let he=e.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),oe.parentNode!==he){he.appendChild(oe),g.add(v),he.onpaint=be=>{let Ee=be.changedElements;for(let ue of g)Ee.includes(ue.image)&&(ue.needsUpdate=!0)},he.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,oe);else{let Ee=e.RGBA,ue=e.RGBA,Oe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ee,ue,Oe,oe)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ve&&Ke){let he=pe(Be[0]);n.texStorage2D(e.TEXTURE_2D,xe,ye,he.width,he.height)}for(let he=0,be=Be.length;he<be;he++)ve=Be[he],Ve?O&&n.texSubImage2D(e.TEXTURE_2D,he,0,0,me,Fe,ve):n.texImage2D(e.TEXTURE_2D,he,ye,me,Fe,ve);v.generateMipmaps=!1}else if(Ve){if(Ke){let he=pe(oe);n.texStorage2D(e.TEXTURE_2D,xe,ye,he.width,he.height)}O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,me,Fe,oe)}else n.texImage2D(e.TEXTURE_2D,0,ye,me,Fe,oe);m(v)&&w(N),fe.__version=de.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function J(C,v,V){if(v.image.length!==6)return;let N=at(C,v),K=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+V);let de=i.get(K);if(K.version!==de.__version||N===!0){n.activeTexture(e.TEXTURE0+V);let fe=ht.getPrimaries(ht.workingColorSpace),ee=v.colorSpace===Kn?null:ht.getPrimaries(v.colorSpace),oe=v.colorSpace===Kn||fe===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let me=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let ue=0;ue<6;ue++)!me&&!Fe?ye[ue]=d(v.image[ue],!0,s.maxCubemapSize):ye[ue]=Fe?v.image[ue].image:v.image[ue],ye[ue]=Ce(v,ye[ue]);let ve=ye[0],Be=r.convert(v.format,v.colorSpace),Ve=r.convert(v.type),Ke=S(v.internalFormat,Be,Ve,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,xe=de.__version===void 0||N===!0,he=K.dataReady,be=T(v,ve);it(e.TEXTURE_CUBE_MAP,v);let Ee;if(me){O&&xe&&n.texStorage2D(e.TEXTURE_CUBE_MAP,be,Ke,ve.width,ve.height);for(let ue=0;ue<6;ue++){Ee=ye[ue].mipmaps;for(let Oe=0;Oe<Ee.length;Oe++){let Ne=Ee[Oe];v.format!==pn?Be!==null?O?he&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,Ne.width,Ne.height,Be,Ne.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,Ke,Ne.width,Ne.height,0,Ne.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,Ne.width,Ne.height,Be,Ve,Ne.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,Ke,Ne.width,Ne.height,0,Be,Ve,Ne.data)}}}else{if(Ee=v.mipmaps,O&&xe){Ee.length>0&&be++;let ue=pe(ye[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,be,Ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Fe){O?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ye[ue].width,ye[ue].height,Be,Ve,ye[ue].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,ye[ue].width,ye[ue].height,0,Be,Ve,ye[ue].data);for(let Oe=0;Oe<Ee.length;Oe++){let Mt=Ee[Oe].image[ue].image;O?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Mt.width,Mt.height,Be,Ve,Mt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,Ke,Mt.width,Mt.height,0,Be,Ve,Mt.data)}}else{O?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Be,Ve,ye[ue]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Be,Ve,ye[ue]);for(let Oe=0;Oe<Ee.length;Oe++){let Ne=Ee[Oe];O?he&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Be,Ve,Ne.image[ue]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,Ke,Be,Ve,Ne.image[ue])}}}m(v)&&w(e.TEXTURE_CUBE_MAP),de.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ce(C,v,V,N,K,de){let fe=r.convert(V.format,V.colorSpace),ee=r.convert(V.type),oe=S(V.internalFormat,fe,ee,V.normalized,V.colorSpace),me=i.get(v),Fe=i.get(V);if(Fe.__renderTarget=v,!me.__hasExternalTextures){let ye=Math.max(1,v.width>>de),ve=Math.max(1,v.height>>de);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,de,oe,ye,ve,v.depth,0,fe,ee,null):n.texImage2D(K,de,oe,ye,ve,0,fe,ee,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),se(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,N,K,Fe.__webglTexture,0,z(v)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,N,K,Fe.__webglTexture,de),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(C,v,V){if(e.bindRenderbuffer(e.RENDERBUFFER,C),v.depthBuffer){let N=v.depthTexture,K=N&&N.isDepthTexture?N.type:null,de=E(v.stencilBuffer,K),fe=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;se(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z(v),de,v.width,v.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,z(v),de,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,de,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,fe,e.RENDERBUFFER,C)}else{let N=v.textures;for(let K=0;K<N.length;K++){let de=N[K],fe=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),oe=S(de.internalFormat,fe,ee,de.normalized,de.colorSpace);se(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z(v),oe,v.width,v.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,z(v),oe,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,oe,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function $e(C,v,V){let N=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),it(e.TEXTURE_CUBE_MAP,v.depthTexture);let me=r.convert(v.depthTexture.format),Fe=r.convert(v.depthTexture.type),ye;v.depthTexture.format===Ln?ye=e.DEPTH_COMPONENT24:v.depthTexture.format===gi&&(ye=e.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ye,v.width,v.height,0,me,Fe,null)}}else ae(v.depthTexture,0);let de=K.__webglTexture,fe=z(v),ee=N?e.TEXTURE_CUBE_MAP_POSITIVE_X+V:e.TEXTURE_2D,oe=v.depthTexture.format===gi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ln)se(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,ee,de,0,fe):e.framebufferTexture2D(e.FRAMEBUFFER,oe,ee,de,0);else if(v.depthTexture.format===gi)se(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,ee,de,0,fe):e.framebufferTexture2D(e.FRAMEBUFFER,oe,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function D(C){let v=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let N=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),N){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,N.removeEventListener("dispose",K)};N.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=N}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let N=0;N<6;N++)$e(v.__webglFramebuffer[N],C,N);else{let N=C.texture.mipmaps;N&&N.length>0?$e(v.__webglFramebuffer[0],C,0):$e(v.__webglFramebuffer,C,0)}else if(V){v.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[N]),v.__webglDepthbuffer[N]===void 0)v.__webglDepthbuffer[N]=e.createRenderbuffer(),Me(v.__webglDepthbuffer[N],C,!1);else{let K=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[N];e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,de)}}else{let N=C.texture.mipmaps;if(N&&N.length>0?n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),Me(v.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,de)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(C,v,V){let N=i.get(C);v!==void 0&&ce(N.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),V!==void 0&&D(C)}function ot(C){let v=C.texture,V=i.get(C),N=i.get(v);C.addEventListener("dispose",o);let K=C.textures,de=C.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(N.__webglTexture===void 0&&(N.__webglTexture=e.createTexture()),N.__version=v.version,a.memory.textures++),de){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let oe=0;oe<v.mipmaps.length;oe++)V.__webglFramebuffer[ee][oe]=e.createFramebuffer()}else V.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<v.mipmaps.length;ee++)V.__webglFramebuffer[ee]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(fe)for(let ee=0,oe=K.length;ee<oe;ee++){let me=i.get(K[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),a.memory.textures++)}if(C.samples>0&&se(C)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){let oe=K[ee];V.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);let me=r.convert(oe.format,oe.colorSpace),Fe=r.convert(oe.type),ye=S(oe.internalFormat,me,Fe,oe.normalized,oe.colorSpace,C.isXRRenderTarget===!0),ve=z(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,ye,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=e.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(de){n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture),it(e.TEXTURE_CUBE_MAP,v);for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)ce(V.__webglFramebuffer[ee][oe],C,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,oe);else ce(V.__webglFramebuffer[ee],C,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(v)&&w(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,oe=K.length;ee<oe;ee++){let me=K[ee],Fe=i.get(me),ye=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ye,Fe.__webglTexture),it(ye,me),ce(V.__webglFramebuffer,C,me,e.COLOR_ATTACHMENT0+ee,ye,0),m(me)&&w(ye)}n.unbindTexture()}else{let ee=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ee,N.__webglTexture),it(ee,v),v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)ce(V.__webglFramebuffer[oe],C,v,e.COLOR_ATTACHMENT0,ee,oe);else ce(V.__webglFramebuffer,C,v,e.COLOR_ATTACHMENT0,ee,0);m(v)&&w(ee),n.unbindTexture()}C.depthBuffer&&D(C)}function De(C){let v=C.textures;for(let V=0,N=v.length;V<N;V++){let K=v[V];if(m(K)){let de=F(C),fe=i.get(K).__webglTexture;n.bindTexture(de,fe),w(de),n.unbindTexture()}}}let st=[],y=[];function R(C){if(C.samples>0){if(se(C)===!1){let v=C.textures,V=C.width,N=C.height,K=e.COLOR_BUFFER_BIT,de=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=i.get(C),ee=v.length>1;if(ee)for(let me=0;me<v.length;me++)n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let oe=C.texture.mipmaps;oe&&oe.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<v.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Fe=i.get(v[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Fe,0)}e.blitFramebuffer(0,0,V,N,0,0,V,N,K,e.NEAREST),l===!0&&(st.length=0,y.length=0,st.push(e.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(st.push(de),y.push(de),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,y)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<v.length;me++){n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Fe=i.get(v[me]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,Fe,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function z(C){return Math.min(s.maxSamples,C.samples)}function se(C){let v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(C){let v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Ce(C,v){let V=C.colorSpace,N=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Ls&&V!==Kn&&(ht.getTransfer(V)===mt?(N!==pn||K!==rn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",V)),v}function pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=$,this.getTextureUnits=U,this.setTextureUnits=q,this.setTexture2D=ae,this.setTexture2DArray=ie,this.setTexture3D=ne,this.setTextureCube=le,this.rebindTextures=ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jg(e,t){function n(i,s=Kn){let r,a=ht.getTransfer(s);if(i===rn)return e.UNSIGNED_BYTE;if(i===Ma)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ta)return e.UNSIGNED_SHORT_5_5_5_1;if(i===gl)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===_l)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===pl)return e.BYTE;if(i===ml)return e.SHORT;if(i===fs)return e.UNSIGNED_SHORT;if(i===Sa)return e.INT;if(i===Mn)return e.UNSIGNED_INT;if(i===Tn)return e.FLOAT;if(i===wn)return e.HALF_FLOAT;if(i===vl)return e.ALPHA;if(i===yl)return e.RGB;if(i===pn)return e.RGBA;if(i===Ln)return e.DEPTH_COMPONENT;if(i===gi)return e.DEPTH_STENCIL;if(i===xl)return e.RED;if(i===wa)return e.RED_INTEGER;if(i===_i)return e.RG;if(i===Ea)return e.RG_INTEGER;if(i===Aa)return e.RGBA_INTEGER;if(i===ir||i===sr||i===rr||i===ar)if(a===mt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ca||i===Pa||i===Ra||i===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===La||i===Da||i===Fa||i===Na||i===Ua||i===or||i===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===La||i===Da)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Na)return r.COMPRESSED_R11_EAC;if(i===Ua)return r.COMPRESSED_SIGNED_R11_EAC;if(i===or)return r.COMPRESSED_RG11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ba||i===Oa||i===za||i===Va||i===Ga||i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===$a||i===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ba)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===za)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Va)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ga)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ya)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Za)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ja)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$a)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ka)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===Qa||i===eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ja)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===to||i===no||i===lr||i===io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===to)return r.COMPRESSED_RED_RGTC1_EXT;if(i===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Xs(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new cn({vertexShader:Qg,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sn(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends Dn{constructor(t,n){super();let i=this,s=null,r=1,a=null,c="local-floor",l=1,h=null,u=null,g=null,p=null,f=null,_=null,M=typeof XRWebGLBinding<"u",d=new zl,m={},w=n.getContextAttributes(),F=null,S=null,E=[],T=[],P=new We,o=null,A=null,x=new Bt;x.viewport=new Rt;let k=new Bt;k.viewport=new Rt;let G=[x,k],$=new _a,U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let re=E[H];return re===void 0&&(re=new ss,E[H]=re),re.getTargetRaySpace()},this.getControllerGrip=function(H){let re=E[H];return re===void 0&&(re=new ss,E[H]=re),re.getGripSpace()},this.getHand=function(H){let re=E[H];return re===void 0&&(re=new ss,E[H]=re),re.getHandSpace()};function te(H){let re=T.indexOf(H.inputSource);if(re===-1)return;let ge=E[re];ge!==void 0&&(ge.update(H.inputSource,H.frame,h||a),ge.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ae);for(let H=0;H<E.length;H++){let re=T[H];re!==null&&(T[H]=null,E[H].disconnect(re))}U=null,q=null,d.reset();for(let H in m)delete m[H];if(t.setRenderTarget(F),f=null,p=null,g=null,s=null,S=null,at.stop(),i.isPresenting=!1,t.setPixelRatio(o),t.setSize(P.width,P.height,!1),A!==null){let H=A.camera;H.fov=A.fov,H.zoom=A.zoom,H.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){c=H,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(H){h=H},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ae),w.xrCompatible!==!0&&await n.makeXRCompatible(),o=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,J=null,ce=null;w.depth&&(ce=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=w.stencil?gi:Ln,J=w.stencil?ps:Mn);let Me={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:r};g=this.getBinding(),p=g.createProjectionLayer(Me),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new nn(p.textureWidth,p.textureHeight,{format:pn,type:rn,depthTexture:new li(p.textureWidth,p.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let ge={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,ge),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new nn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(c),at.setContext(s),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ae(H){for(let re=0;re<H.removed.length;re++){let ge=H.removed[re],J=T.indexOf(ge);J>=0&&(T[J]=null,E[J].disconnect(ge))}for(let re=0;re<H.added.length;re++){let ge=H.added[re],J=T.indexOf(ge);if(J===-1){for(let Me=0;Me<E.length;Me++)if(Me>=T.length){T.push(ge),J=Me;break}else if(T[Me]===null){T[Me]=ge,J=Me;break}if(J===-1)break}let ce=E[J];ce&&ce.connect(ge)}}let ie=new W,ne=new W;function le(H,re,ge){ie.setFromMatrixPosition(re.matrixWorld),ne.setFromMatrixPosition(ge.matrixWorld);let J=ie.distanceTo(ne),ce=re.projectionMatrix.elements,Me=ge.projectionMatrix.elements,$e=ce[14]/(ce[10]-1),D=ce[14]/(ce[10]+1),ke=(ce[9]+1)/ce[5],ot=(ce[9]-1)/ce[5],De=(ce[8]-1)/ce[0],st=(Me[8]+1)/Me[0],y=$e*De,R=$e*st,z=J/(-De+st),se=z*-De;if(re.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(se),H.translateZ(z),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ce[10]===-1)H.projectionMatrix.copy(re.projectionMatrix),H.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let I=$e+z,Ce=D+z,pe=y-se,C=R+(J-se),v=ke*D/Ce*I,V=ot*D/Ce*I;H.projectionMatrix.makePerspective(pe,C,v,V,I,Ce),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Ae(H,re){re===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(re.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let re=H.near,ge=H.far;d.texture!==null&&(d.depthNear>0&&(re=d.depthNear),d.depthFar>0&&(ge=d.depthFar)),$.near=k.near=x.near=re,$.far=k.far=x.far=ge,(U!==$.near||q!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),U=$.near,q=$.far),$.layers.mask=H.layers.mask|6,x.layers.mask=$.layers.mask&-5,k.layers.mask=$.layers.mask&-3;let J=H.parent,ce=$.cameras;Ae($,J);for(let Me=0;Me<ce.length;Me++)Ae(ce[Me],J);ce.length===2?le($,x,k):$.projectionMatrix.copy(x.projectionMatrix),A===null&&H.isPerspectiveCamera&&(A={camera:H,fov:H.fov,zoom:H.zoom}),_e(H,$,J)};function _e(H,re,ge){ge===null?H.matrix.copy(re.matrixWorld):(H.matrix.copy(ge.matrixWorld),H.matrix.invert(),H.matrix.multiply(re.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(re.projectionMatrix),H.projectionMatrixInverse.copy(re.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Jr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(H){l=H,p!==null&&(p.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh($)},this.getCameraTexture=function(H){return m[H]};let Je=null;function it(H,re){if(u=re.getViewerPose(h||a),_=re,u!==null){let ge=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let J=!1;ge.length!==$.cameras.length&&($.cameras.length=0,J=!0);for(let D=0;D<ge.length;D++){let ke=ge[D],ot=null;if(f!==null)ot=f.getViewport(ke);else{let st=g.getViewSubImage(p,ke);ot=st.viewport,D===0&&(t.setRenderTargetTextures(S,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(S))}let De=G[D];De===void 0&&(De=new Bt,De.layers.enable(D),De.viewport=new Rt,G[D]=De),De.matrix.fromArray(ke.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ke.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ot.x,ot.y,ot.width,ot.height),D===0&&($.matrix.copy(De.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),J===!0&&$.cameras.push(De)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=i.getBinding();let D=g.getDepthInformation(ge[0]);D&&D.isValid&&D.texture&&d.init(D,s.renderState)}if(ce&&ce.includes("camera-access")&&M){t.state.unbindTexture(),g=i.getBinding();for(let D=0;D<ge.length;D++){let ke=ge[D].camera;if(ke){let ot=m[ke];ot||(ot=new Xs,m[ke]=ot);let De=g.getCameraImage(ke);ot.sourceTexture=De}}}}for(let ge=0;ge<E.length;ge++){let J=T[ge],ce=E[ge];J!==null&&ce!==void 0&&ce.update(J,re,h||a)}Je&&Je(H,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}let at=new qc;at.setAnimationLoop(it),this.setAnimationLoop=function(H){Je=H},this.dispose=function(){}}},t0=new vt,jc=new Ye;jc.set(-1,0,0,0,1,0,0,0,1);function n0(e,t){function n(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function i(d,m){m.color.getRGB(d.fogColor.value,Ml(e)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,w,F,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),g(d,m)):m.isMeshPhongMaterial?(r(d,m),u(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),p(d,m),m.isMeshPhysicalMaterial&&f(d,m,S)):m.isMeshMatcapMaterial?(r(d,m),_(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),M(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&c(d,m)):m.isPointsMaterial?l(d,m,w,F):m.isSpriteMaterial?h(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,n(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,n(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===en&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,n(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===en&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,n(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,n(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let w=t.get(m),F=w.envMap,S=w.envMapRotation;F&&(d.envMap.value=F,d.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(S)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(jc),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform))}function c(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,w,F){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*w,d.scale.value=F*.5,m.map&&(d.map.value=m.map,n(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,n(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,n(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function g(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function p(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,w){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.retroreflectivity>0&&(d.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function M(d,m){let w=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function i0(e,t,n,i){let s={},r={},a=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){let T=E.program;i.uniformBlockBinding(S,T)}function h(S,E){let T=s[S.id];T===void 0&&(d(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",w));let P=E.program;i.updateUBOMapping(S,P);let o=t.render.frame;r[S.id]!==o&&(p(S),r[S.id]=o)}function u(S){let E=g();S.__bindingPointIndex=E;let T=e.createBuffer(),P=S.__size,o=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,P,o),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,T),T}function g(){for(let S=0;S<c;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let E=s[S.id],T=S.uniforms,P=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let o=0,A=T.length;o<A;o++){let x=T[o];if(Array.isArray(x))for(let k=0,G=x.length;k<G;k++)f(x[k],o,k,P);else f(x,o,0,P)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(S,E,T,P){if(M(S,E,T,P)===!0){let o=S.__offset,A=S.value;if(Array.isArray(A)){let x=0;for(let k=0;k<A.length;k++){let G=A[k],$=m(G);_(G,S.__data,x),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(x+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,S.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,o,S.__data)}}function _(S,E,T){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,T)}function M(S,E,T,P){let o=S.value,A=E+"_"+T;if(P[A]===void 0)return typeof o=="number"||typeof o=="boolean"?P[A]=o:ArrayBuffer.isView(o)?P[A]=o.slice():P[A]=o.clone(),!0;{let x=P[A];if(typeof o=="number"||typeof o=="boolean"){if(x!==o)return P[A]=o,!0}else{if(ArrayBuffer.isView(o))return!0;if(x.equals(o)===!1)return x.copy(o),!0}}return!1}function d(S){let E=S.uniforms,T=0,P=16;for(let A=0,x=E.length;A<x;A++){let k=Array.isArray(E[A])?E[A]:[E[A]];for(let G=0,$=k.length;G<$;G++){let U=k[G],q=Array.isArray(U.value)?U.value:[U.value];for(let te=0,X=q.length;te<X;te++){let ae=q[te],ie=m(ae),ne=T%P,le=ne%ie.boundary,Ae=ne+le;T+=le,Ae!==0&&P-Ae<ie.storage&&(T+=P-Ae),U.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=ie.storage}}}let o=T%P;return o>0&&(T+=P-o),S.__size=T,S.__cache={},this}function m(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):He("WebGLRenderer: Unsupported uniform value type.",S),E}function w(S){let E=S.target;E.removeEventListener("dispose",w);let T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function F(){for(let S in s)e.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:h,dispose:F}}var s0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function r0(){return Bn===null&&(Bn=new ea(s0,16,16,_i,wn),Bn.name="DFG_LUT",Bn.minFilter=Vt,Bn.magFilter=Vt,Bn.wrapS=In,Bn.wrapT=In,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var uo=class{constructor(t={}){let{canvas:n=gc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:f=rn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let M=f,d=new Set([Aa,Ea,wa]),m=new Set([rn,Mn,fs,ps,Ma,Ta]),w=new Uint32Array(4),F=new Int32Array(4),S=new W,E=null,T=null,P=[],o=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,k=!1,G=null,$=null,U=null,q=null;this._outputColorSpace=ln;let te=0,X=0,ae=null,ie=-1,ne=null,le=new Rt,Ae=new Rt,_e=null,Je=new rt(0),it=0,at=n.width,H=n.height,re=1,ge=null,J=null,ce=new Rt(0,0,at,H),Me=new Rt(0,0,at,H),$e=!1,D=new os,ke=!1,ot=!1,De=new vt,st=new W,y=new Rt,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function se(){return ae===null?re:1}let I=i;function Ce(b,B){return n.getContext(b,B)}let pe,C,v,V,N,K,de,fe,ee,oe,me,Fe,ye,ve,Be,Ve,Ke,O,xe,he,be,Ee,ue;try{let b={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${va}`),n.addEventListener("webglcontextlost",Mt,!1),n.addEventListener("webglcontextrestored",ft,!1),n.addEventListener("webglcontextcreationerror",gn,!1),I===null){let B="webgl2";if(I=Ce(B,b),I===null)throw Ce(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(b){throw n.removeEventListener("webglcontextlost",Mt,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),Ge("WebGLRenderer: "+b.message),b}function Oe(){pe=new dm(I),pe.init(),be=new jg(I,pe),C=new nm(I,pe,t,be),v=new $g(I,pe),C.reversedDepthBuffer&&p&&v.buffers.depth.setReversed(!0),$=I.createFramebuffer(),U=I.createFramebuffer(),q=I.createFramebuffer(),V=new mm(I),N=new Ug,K=new Kg(I,pe,v,N,C,be,V),de=new um(x),fe=new gd(I),Ee=new em(I,fe),ee=new fm(I,fe,V,Ee),oe=new _m(I,ee,fe,Ee,V),O=new gm(I,C,K),Be=new im(N),me=new Ng(x,de,pe,C,Ee,Be),Fe=new n0(x,N),ye=new Bg,ve=new Wg(pe),Ke=new Qp(x,de,v,oe,_,l),Ve=new Jg(x,oe,C),ue=new i0(I,V,C,v),xe=new tm(I,pe,V),he=new pm(I,pe,V),V.programs=me.programs,x.capabilities=C,x.extensions=pe,x.properties=N,x.renderLists=ye,x.shadowMap=Ve,x.state=v,x.info=V}M!==rn&&(A=new ym(M,n.width,n.height,c,s,r));let Ne=new Vl(x,I);this.xr=Ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(b){b!==void 0&&(re=b,this.setSize(at,H,!1))},this.getSize=function(b){return b.set(at,H)},this.setSize=function(b,B,Q=!0){if(Ne.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}at=b,H=B,n.width=Math.floor(b*re),n.height=Math.floor(B*re),Q===!0&&(n.style.width=b+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(at*re,H*re).floor()},this.setDrawingBufferSize=function(b,B,Q){at=b,H=B,re=Q,n.width=Math.floor(b*Q),n.height=Math.floor(B*Q),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(M===rn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(le)},this.getViewport=function(b){return b.copy(ce)},this.setViewport=function(b,B,Q,Y){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,B,Q,Y),v.viewport(le.copy(ce).multiplyScalar(re).round())},this.getScissor=function(b){return b.copy(Me)},this.setScissor=function(b,B,Q,Y){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,B,Q,Y),v.scissor(Ae.copy(Me).multiplyScalar(re).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(b){v.setScissorTest($e=b)},this.setOpaqueSort=function(b){ge=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,Q=!0){let Y=0;if(b){let Z=!1;if(ae!==null){let we=ae.texture.format;Z=d.has(we)}if(Z){let we=ae.texture.type,Re=m.has(we),Te=Ke.getClearColor(),Ie=Ke.getClearAlpha(),Ue=Te.r,Qe=Te.g,lt=Te.b;Re?(w[0]=Ue,w[1]=Qe,w[2]=lt,w[3]=Ie,I.clearBufferuiv(I.COLOR,0,w)):(F[0]=Ue,F[1]=Qe,F[2]=lt,F[3]=Ie,I.clearBufferiv(I.COLOR,0,F))}else Y|=I.COLOR_BUFFER_BIT}B&&(Y|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),G=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Mt,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),Ke.dispose(),ye.dispose(),ve.dispose(),N.dispose(),de.dispose(),oe.dispose(),Ee.dispose(),ue.dispose(),me.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",th),Ne.removeEventListener("sessionend",nh),xi.stop()};function Mt(b){b.preventDefault(),Ns("WebGLRenderer: Context Lost."),k=!0}function ft(){Ns("WebGLRenderer: Context Restored."),k=!1;let b=V.autoReset,B=Ve.enabled,Q=Ve.autoUpdate,Y=Ve.needsUpdate,Z=Ve.type;Oe(),V.autoReset=b,Ve.enabled=B,Ve.autoUpdate=Q,Ve.needsUpdate=Y,Ve.type=Z}function gn(b){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function An(b){let B=b.target;B.removeEventListener("dispose",An),Cu(B)}function Cu(b){Pu(b),N.remove(b)}function Pu(b){let B=N.get(b).programs;B!==void 0&&(B.forEach(function(Q){me.releaseProgram(Q)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,Q,Y,Z,we){B===null&&(B=R);let Re=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Te=Lu(b,B,Q,Y,Z);v.setMaterial(Y,Re);let Ie=Q.index,Ue=1;if(Y.wireframe===!0){if(Ie=ee.getWireframeAttribute(Q),Ie===void 0)return;Ue=2}let Qe=Q.drawRange,lt=Q.attributes.position,Le=Qe.start*Ue,pt=(Qe.start+Qe.count)*Ue;we!==null&&(Le=Math.max(Le,we.start*Ue),pt=Math.min(pt,(we.start+we.count)*Ue)),Ie!==null?(Le=Math.max(Le,0),pt=Math.min(pt,Ie.count)):lt!=null&&(Le=Math.max(Le,0),pt=Math.min(pt,lt.count));let Dt=pt-Le;if(Dt<0||Dt===1/0)return;Ee.setup(Z,Y,Te,Q,Ie);let Et,xt=xe;if(Ie!==null&&(Et=fe.get(Ie),xt=he,xt.setIndex(Et)),Z.isMesh)Y.wireframe===!0?(v.setLineWidth(Y.wireframeLinewidth*se()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(Z.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),v.setLineWidth(Ht*se()),Z.isLineSegments?xt.setMode(I.LINES):Z.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else Z.isPoints?xt.setMode(I.POINTS):Z.isSprite&&xt.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ht=Z._multiDrawStarts,Pe=Z._multiDrawCounts,$t=Z._multiDrawCount,dt=Ie?fe.get(Ie).bytesPerElement:1,dn=N.get(Y).currentProgram.getUniforms();for(let Cn=0;Cn<$t;Cn++)dn.setValue(I,"_gl_DrawID",Cn),xt.render(Ht[Cn]/dt,Pe[Cn])}else if(Z.isInstancedMesh)xt.renderInstances(Le,Dt,Z.count);else if(Q.isInstancedBufferGeometry){let Ht=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pe=Math.min(Q.instanceCount,Ht);xt.renderInstances(Le,Dt,Pe)}else xt.render(Le,Dt)};function eh(b,B,Q,Y){G!==null&&b.isNodeMaterial&&G.setObject(Y,b),ke===!0&&Be.setState(b,Q,!1),b.transparent===!0&&b.side===tn&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,fr(b,B,Y),b.side=fi,b.needsUpdate=!0,fr(b,B,Y),b.side=tn):fr(b,B,Y)}this.compile=function(b,B,Q=null){Q===null&&(Q=b),G!==null&&G.renderStart(b,B,Q),T=ve.get(Q),T.init(B),o.push(T),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),b!==Q&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),ot=this.localClippingEnabled,ke=Be.init(this.clippingPlanes,ot),ke===!0&&Be.setGlobalState(this.clippingPlanes,B),G!==null&&Ve.render(T.state.shadowsArray,Q,B);let Y=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let we=Z.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){let Te=we[Re];eh(Te,Q,B,Z),Y.add(Te)}else eh(we,Q,B,Z),Y.add(we)}),T=o.pop(),G!==null&&G.renderEnd(),Y},this.compileAsync=function(b,B,Q=null){let Y=this.compile(b,B,Q);return new Promise(Z=>{function we(){if(Y.forEach(function(Re){let Ie=N.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&Y.delete(Re)}),Y.size===0){Z(b);return}setTimeout(we,10)}pe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let xo=null;function Ru(b){xo&&xo(b)}function th(){xi.stop()}function nh(){xi.start()}let xi=new qc;xi.setAnimationLoop(Ru),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(b){xo=b,Ne.setAnimationLoop(b),b===null?xi.stop():xi.start()},Ne.addEventListener("sessionstart",th),Ne.addEventListener("sessionend",nh),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;G!==null&&G.renderStart(b,B);let Q=Ne.enabled===!0&&Ne.isPresenting===!0,Y=A!==null&&(ae===null||Q)&&A.begin(x,ae);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(B),B=Ne.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,ae),T=ve.get(b,o.length),T.init(B),T.state.textureUnits=K.getTextureUnits(),o.push(T),De.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),D.setFromProjectionMatrix(De,bn,B.reversedDepth),ot=this.localClippingEnabled,ke=Be.init(this.clippingPlanes,ot),E=ye.get(b,P.length),E.init(),P.push(E),Ne.enabled===!0&&Ne.isPresenting===!0){let Re=x.xr.getDepthSensingMesh();Re!==null&&bo(Re,B,-1/0,x.sortObjects)}bo(b,B,0,x.sortObjects),E.finish(),G!==null&&G.updateLights(T.state.lightsArray),x.sortObjects===!0&&E.sort(ge,J),z=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,z&&Ke.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&Be.beginShadows();let Z=T.state.shadowsArray;if(Ve.render(Z,b,B),ke===!0&&Be.endShadows(),(Y&&A.hasRenderPass())===!1){let Re=E.opaque,Te=E.transmissive;if(T.setupLights(),B.isArrayCamera){let Ie=B.cameras;if(Te.length>0)for(let Ue=0,Qe=Ie.length;Ue<Qe;Ue++){let lt=Ie[Ue];sh(Re,Te,b,lt)}z&&Ke.render(b);for(let Ue=0,Qe=Ie.length;Ue<Qe;Ue++){let lt=Ie[Ue];ih(E,b,lt,lt.viewport)}}else Te.length>0&&sh(Re,Te,b,B),z&&Ke.render(b),ih(E,b,B)}ae!==null&&X===0&&(K.updateMultisampleRenderTarget(ae),K.updateRenderTargetMipmap(ae)),Y&&A.end(x),b.isScene===!0&&b.onAfterRender(x,b,B),Ee.resetDefaultState(),ie=-1,ne=null,o.pop(),o.length>0?(T=o[o.length-1],K.setTextureUnits(T.state.textureUnits),ke===!0&&Be.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,G!==null&&G.renderEnd()};function bo(b,B,Q,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(D)){Y&&y.setFromMatrixPosition(b.matrixWorld).applyMatrix4(De);let Re=oe.update(b),Te=b.material;Te.visible&&E.push(b,Re,Te,Q,y.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(D))){let Re=oe.update(b),Te=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),y.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),y.copy(Re.boundingSphere.center)),y.applyMatrix4(b.matrixWorld).applyMatrix4(De)),Array.isArray(Te)){let Ie=Re.groups;for(let Ue=0,Qe=Ie.length;Ue<Qe;Ue++){let lt=Ie[Ue],Le=Te[lt.materialIndex];Le&&Le.visible&&E.push(b,Re,Le,Q,y.z,lt,B)}}else Te.visible&&E.push(b,Re,Te,Q,y.z,null,B)}}let we=b.children;for(let Re=0,Te=we.length;Re<Te;Re++)bo(we[Re],B,Q,Y)}function ih(b,B,Q,Y){let{opaque:Z,transmissive:we,transparent:Re}=b;T.setupLightsView(Q),ke===!0&&Be.setGlobalState(x.clippingPlanes,Q),Y&&v.viewport(le.copy(Y)),Z.length>0&&dr(Z,B,Q),we.length>0&&dr(we,B,Q),Re.length>0&&dr(Re,B,Q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function sh(b,B,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let Le=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new nn(1,1,{generateMipmaps:!0,type:Le?wn:rn,minFilter:mi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let we=T.state.transmissionRenderTarget[Y.id],Re=Y.viewport||le;we.setSize(Re.z*x.transmissionResolutionScale,Re.w*x.transmissionResolutionScale);let Te=x.getRenderTarget(),Ie=x.getActiveCubeFace(),Ue=x.getActiveMipmapLevel();x.setRenderTarget(we),x.getClearColor(Je),it=x.getClearAlpha(),it<1&&x.setClearColor(16777215,.5),x.clear(),z&&Ke.render(Q);let Qe=x.toneMapping;x.toneMapping=Sn;let lt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),ke===!0&&Be.setGlobalState(x.clippingPlanes,Y),dr(b,Q,Y),K.updateMultisampleRenderTarget(we),K.updateRenderTargetMipmap(we),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let pt=0,Dt=B.length;pt<Dt;pt++){let Et=B[pt],{object:xt,geometry:Ht,material:Pe,group:$t}=Et;if(Pe.side===tn&&xt.layers.test(Y.layers)){let dt=Pe.side;Pe.side=en,Pe.needsUpdate=!0,rh(xt,Q,Y,Ht,Pe,$t),Pe.side=dt,Pe.needsUpdate=!0,Le=!0}}Le===!0&&(K.updateMultisampleRenderTarget(we),K.updateRenderTargetMipmap(we))}x.setRenderTarget(Te,Ie,Ue),x.setClearColor(Je,it),lt!==void 0&&(Y.viewport=lt),x.toneMapping=Qe}function dr(b,B,Q){let Y=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,we=b.length;Z<we;Z++){let Re=b[Z],{object:Te,geometry:Ie,group:Ue}=Re,Qe=Re.material;Qe.allowOverride===!0&&Y!==null&&(Qe=Y),Te.layers.test(Q.layers)&&rh(Te,B,Q,Ie,Qe,Ue)}}function rh(b,B,Q,Y,Z,we){G!==null&&Z.isNodeMaterial&&G.setObject(b,Z),b.onBeforeRender(x,B,Q,Y,Z,we),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(x,B,Q,Y,b,we),Z.transparent===!0&&Z.side===tn&&Z.forceSinglePass===!1?(Z.side=en,Z.needsUpdate=!0,x.renderBufferDirect(Q,B,Y,Z,b,we),Z.side=fi,Z.needsUpdate=!0,x.renderBufferDirect(Q,B,Y,Z,b,we),Z.side=tn):x.renderBufferDirect(Q,B,Y,Z,b,we),b.onAfterRender(x,B,Q,Y,Z,we)}function fr(b,B,Q){B.isScene!==!0&&(B=R);let Y=N.get(b),Z=T.state.lights,we=T.state.shadowsArray,Re=Z.state.version,Te=me.getParameters(b,Z.state,we,B,Q,T.state.lightProbeGridArray),Ie=me.getProgramCacheKey(Te),Ue=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let Qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=de.get(b.envMap||Y.environment,Qe),Y.envMapRotation=Y.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",An),Ue=new Map,Y.programs=Ue);let lt=Ue.get(Ie);if(lt!==void 0){if(Y.currentProgram===lt&&Y.lightsStateVersion===Re)return oh(b,Te),lt}else Te.uniforms=me.getUniforms(b),G!==null&&b.isNodeMaterial&&G.build(b,Q,Te),b.onBeforeCompile(Te,x),lt=me.acquireProgram(Te,Ie),Ue.set(Ie,lt),Y.uniforms=Te.uniforms;let Le=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=Be.uniform),oh(b,Te),Y.needsLights=Fu(b),Y.lightsStateVersion=Re,Y.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.sunLights.value=Z.state.sun,Le.sunLightShadows.value=Z.state.sunShadow,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.sunShadowMatrix.value=Z.state.sunShadowMatrix,Le.sunShadowCascade.value=Z.state.sunShadowCascade,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=lt,Y.uniformsList=null,lt}function ah(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=_s.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function oh(b,B){let Q=N.get(b);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function Iu(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let Q=0,Y=b.length;Q<Y;Q++){let Z=b[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(S))return Z}return null}function Lu(b,B,Q,Y,Z){B.isScene!==!0&&(B=R),K.resetTextureUnits();let we=B.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Te=ae===null?x.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ht.workingColorSpace,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ue=de.get(Y.envMap||Re,Ie),Qe=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,lt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,Dt=!!Q.morphAttributes.color,Et=Sn;Y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Et=x.toneMapping);let xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ht=xt!==void 0?xt.length:0,Pe=N.get(Y),$t=T.state.lights;if(ke===!0&&(ot===!0||b!==ne)){let Tt=b===ne&&Y.id===ie;Be.setState(Y,b,Tt)}let dt=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==$t.state.version||Pe.outputColorSpace!==Te||Z.isBatchedMesh&&Pe.batching===!1||!Z.isBatchedMesh&&Pe.batching===!0||Z.isBatchedMesh&&Pe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Pe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Pe.instancing===!1||!Z.isInstancedMesh&&Pe.instancing===!0||Z.isSkinnedMesh&&Pe.skinning===!1||!Z.isSkinnedMesh&&Pe.skinning===!0||Z.isInstancedMesh&&Pe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Pe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Pe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Pe.instancingMorph===!1&&Z.morphTexture!==null||Pe.envMap!==Ue||Y.fog===!0&&Pe.fog!==we||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Be.numPlanes||Pe.numIntersection!==Be.numIntersection)||Pe.vertexAlphas!==Qe||Pe.vertexTangents!==lt||Pe.morphTargets!==Le||Pe.morphNormals!==pt||Pe.morphColors!==Dt||Pe.toneMapping!==Et||Pe.morphTargetsCount!==Ht||!!Pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Pe.__version=Y.version);let dn=Pe.currentProgram;dt===!0&&(dn=fr(Y,B,Z),G&&Y.isNodeMaterial&&G.onUpdateProgram(Y,dn,Pe));let Cn=!1,jn=!1,Di=!1,gt=dn.getUniforms(),It=Pe.uniforms;if(v.useProgram(dn.program)&&(Cn=!0,jn=!0,Di=!0),Y.id!==ie&&(ie=Y.id,jn=!0),Pe.needsLights){let Tt=Iu(T.state.lightProbeGridArray,Z);Pe.lightProbeGrid!==Tt&&(Pe.lightProbeGrid=Tt,jn=!0)}if(Cn||ne!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),gt.setValue(I,"projectionMatrix",b.projectionMatrix),gt.setValue(I,"viewMatrix",b.matrixWorldInverse);let ei=gt.map.cameraPosition;ei!==void 0&&ei.setValue(I,st.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&gt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),ne!==b&&(ne=b,jn=!0,Di=!0)}if(Pe.needsLights&&($t.state.sunShadowMap.length>0&&gt.setValue(I,"sunShadowMap",$t.state.sunShadowMap,K),$t.state.directionalShadowMap.length>0&&gt.setValue(I,"directionalShadowMap",$t.state.directionalShadowMap,K),$t.state.spotShadowMap.length>0&&gt.setValue(I,"spotShadowMap",$t.state.spotShadowMap,K),$t.state.pointShadowMap.length>0&&gt.setValue(I,"pointShadowMap",$t.state.pointShadowMap,K)),Z.isSkinnedMesh){gt.setOptional(I,Z,"bindMatrix"),gt.setOptional(I,Z,"bindMatrixInverse");let Tt=Z.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),gt.setValue(I,"boneTexture",Tt.boneTexture,K))}Z.isBatchedMesh&&(gt.setOptional(I,Z,"batchingTexture"),gt.setValue(I,"batchingTexture",Z._matricesTexture,K),gt.setOptional(I,Z,"batchingIdTexture"),gt.setValue(I,"batchingIdTexture",Z._indirectTexture,K),gt.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&gt.setValue(I,"batchingColorTexture",Z._colorsTexture,K));let Qn=Q.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&O.update(Z,Q,dn),(jn||Pe.receiveShadow!==Z.receiveShadow)&&(Pe.receiveShadow=Z.receiveShadow,gt.setValue(I,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(It.envMapIntensity.value=B.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=r0()),jn){if(gt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Du(It,Di),we&&Y.fog===!0&&Fe.refreshFogUniforms(It,we),Fe.refreshMaterialUniforms(It,Y,re,H,T.state.transmissionRenderTarget[b.id]),Pe.needsLights&&Pe.lightProbeGrid){let Tt=Pe.lightProbeGrid;It.probesSH.value=Tt.texture,It.probesMin.value.copy(Tt.boundingBox.min),It.probesMax.value.copy(Tt.boundingBox.max),It.probesResolution.value.copy(Tt.resolution)}_s.upload(I,ah(Pe),It,K)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_s.upload(I,ah(Pe),It,K),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&gt.setValue(I,"center",Z.center),gt.setValue(I,"modelViewMatrix",Z.modelViewMatrix),gt.setValue(I,"normalMatrix",Z.normalMatrix),gt.setValue(I,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Tt=Y.uniformsGroups;for(let ei=0,Fi=Tt.length;ei<Fi;ei++){let hh=Tt[ei];ue.update(hh,dn),ue.bind(hh,dn)}}return dn}function Du(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Fu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(b,B,Q){let Y=N.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),N.get(b.texture).__webglTexture=B,N.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let Q=N.get(b);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,Q=0){ae=b,te=B,X=Q;let Y=null,Z=!1,we=!1;if(b){let Te=N.get(b);if(Te.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,Te.__webglFramebuffer),le.copy(b.viewport),Ae.copy(b.scissor),_e=b.scissorTest,v.viewport(le),v.scissor(Ae),v.setScissorTest(_e),ie=-1;return}else if(Te.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(Te.__hasExternalTextures)K.rebindTextures(b,N.get(b.texture).__webglTexture,N.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Qe=b.depthTexture;if(Te.__boundDepthTexture!==Qe){if(Qe!==null&&N.has(Qe)&&(b.width!==Qe.image.width||b.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let Ie=b.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Ue=N.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?Y=Ue[B][Q]:Y=Ue[B],Z=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?Y=N.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?Y=Ue[Q]:Y=Ue,le.copy(b.viewport),Ae.copy(b.scissor),_e=b.scissorTest}else le.copy(ce).multiplyScalar(re).floor(),Ae.copy(Me).multiplyScalar(re).floor(),_e=$e;if(Q!==0&&(Y=$),v.bindFramebuffer(I.FRAMEBUFFER,Y)&&v.drawBuffers(b,Y),v.viewport(le),v.scissor(Ae),v.setScissorTest(_e),Z){let Te=N.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,Q)}else if(we){let Te=B;for(let Ie=0;Ie<b.textures.length;Ie++){let Ue=N.get(b.textures[Ie]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,Q,Te)}}else if(b!==null&&Q!==0){let Te=N.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Te.__webglTexture,Q)}ie=-1};function lh(b){let B=N.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=C.textureFormatReadable(b.format),B.__typeReadable=C.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,Q,Y,Z,we,Re,Te=0){if(!(b&&b.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=N.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){v.bindFramebuffer(I.FRAMEBUFFER,Ie);try{let Ue=b.textures[Te],Qe=Ue.format,lt=Ue.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te);let Le=lh(Ue);if(Le.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&Q>=0&&Q<=b.height-Z&&I.readPixels(B,Q,Y,Z,be.convert(Qe),be.convert(lt),we)}finally{let Ue=ae!==null?N.get(ae).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,B,Q,Y,Z,we,Re,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=N.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(B>=0&&B<=b.width-Y&&Q>=0&&Q<=b.height-Z){v.bindFramebuffer(I.FRAMEBUFFER,Ie);let Ue=b.textures[Te],Qe=Ue.format,lt=Ue.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te);let Le=lh(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,pt),I.bufferData(I.PIXEL_PACK_BUFFER,we.byteLength,I.STREAM_READ),I.readPixels(B,Q,Y,Z,be.convert(Qe),be.convert(lt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Dt=ae!==null?N.get(ae).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Dt);let Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await vc(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,pt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,we),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(pt),I.deleteSync(Et),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(b.image.width*Y),we=Math.floor(b.image.height*Y),Re=B!==null?B.x:0,Te=B!==null?B.y:0;K.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,Re,Te,Z,we),v.unbindTexture()},this.copyTextureToTexture=function(b,B,Q=null,Y=null,Z=0,we=0){let Re,Te,Ie,Ue,Qe,lt,Le,pt,Dt,Et=b.isCompressedTexture?b.mipmaps[we]:b.image;if(Q!==null)Re=Q.max.x-Q.min.x,Te=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,Ue=Q.min.x,Qe=Q.min.y,lt=Q.isBox3?Q.min.z:0;else{let It=Math.pow(2,-Z);Re=Math.floor(Et.width*It),Te=Math.floor(Et.height*It),b.isDataArrayTexture?Ie=Et.depth:b.isData3DTexture?Ie=Math.floor(Et.depth*It):Ie=1,Ue=0,Qe=0,lt=0}Y!==null?(Le=Y.x,pt=Y.y,Dt=Y.z):(Le=0,pt=0,Dt=0);let xt=be.convert(B.format),Ht=be.convert(B.type),Pe;B.isData3DTexture?(K.setTexture3D(B,0),Pe=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Pe=I.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Pe=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let $t=v.getParameter(I.UNPACK_ROW_LENGTH),dt=v.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=v.getParameter(I.UNPACK_SKIP_PIXELS),Cn=v.getParameter(I.UNPACK_SKIP_ROWS),jn=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),v.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(I.UNPACK_SKIP_IMAGES,lt);let Di=b.isDataArrayTexture||b.isData3DTexture,gt=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let It=N.get(b),Qn=N.get(B),Tt=N.get(It.__renderTarget),ei=N.get(Qn.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,Tt.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Fi=0;Fi<Ie;Fi++)Di&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,N.get(b).__webglTexture,Z,lt+Fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,N.get(B).__webglTexture,we,Dt+Fi)),I.blitFramebuffer(Ue,Qe,Re,Te,Le,pt,Re,Te,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||N.has(b)){let It=N.get(b),Qn=N.get(B);v.bindFramebuffer(I.READ_FRAMEBUFFER,U),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,q);for(let Tt=0;Tt<Ie;Tt++)Di?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,It.__webglTexture,Z,lt+Tt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,It.__webglTexture,Z),gt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qn.__webglTexture,we,Dt+Tt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qn.__webglTexture,we),Z!==0?I.blitFramebuffer(Ue,Qe,Re,Te,Le,pt,Re,Te,I.COLOR_BUFFER_BIT,I.NEAREST):gt?I.copyTexSubImage3D(Pe,we,Le,pt,Dt+Tt,Ue,Qe,Re,Te):I.copyTexSubImage2D(Pe,we,Le,pt,Ue,Qe,Re,Te);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gt?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Pe,we,Le,pt,Dt,Re,Te,Ie,xt,Ht,Et.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,we,Le,pt,Dt,Re,Te,Ie,xt,Et.data):I.texSubImage3D(Pe,we,Le,pt,Dt,Re,Te,Ie,xt,Ht,Et):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,we,Le,pt,Re,Te,xt,Ht,Et.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,we,Le,pt,Et.width,Et.height,xt,Et.data):I.texSubImage2D(I.TEXTURE_2D,we,Le,pt,Re,Te,xt,Ht,Et);v.pixelStorei(I.UNPACK_ROW_LENGTH,$t),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),v.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),v.pixelStorei(I.UNPACK_SKIP_ROWS,Cn),v.pixelStorei(I.UNPACK_SKIP_IMAGES,jn),we===0&&B.generateMipmaps&&I.generateMipmap(Pe),v.unbindTexture()},this.initRenderTarget=function(b){N.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){te=0,X=0,ae=null,v.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(t),n.unpackColorSpace=ht._getUnpackColorSpace()}};var mo=class{constructor(t){let n=new js;n.aspect=.5;let i=new We;this.setEyeSeparation=function(s){n.eyeSep=s},this.setSize=function(s,r){t.setSize(s,r)},this.render=function(s,r){s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),r.parent===null&&r.matrixWorldAutoUpdate===!0&&r.updateMatrixWorld(),n.update(r);let a=t.autoClear;t.getSize(i),t.autoClear=!1,t.clear(),t.setScissorTest(!0),t.setScissor(0,0,i.width/2,i.height),t.setViewport(0,0,i.width/2,i.height),t.render(s,n.cameraL),t.setScissor(i.width/2,0,i.width/2,i.height),t.setViewport(i.width/2,0,i.width/2,i.height),t.render(s,n.cameraR),t.setScissorTest(!1),t.autoClear=a}}};var Lt="#6b4a4f";function Xe(e,t,n,i,s,r){e.beginPath(),e.moveTo(t+r,n),e.arcTo(t+i,n,t+i,n+s,r),e.arcTo(t+i,n+s,t,n+s,r),e.arcTo(t,n+s,t,n,r),e.arcTo(t,n,t+i,n,r),e.closePath()}var Qc=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;function o0(e){let t=Qc.exec(Lt),n=typeof e=="string"?Qc.exec(e):null;if(!t||!n)return Lt;let i=s=>Math.round(parseInt(t[s],16)*.55+parseInt(n[s],16)*.45);return`rgb(${i(1)},${i(2)},${i(3)})`}function L(e,t,n=1.4){e.fillStyle=t,e.fill(),n&&(e.lineWidth=n*.58,e.strokeStyle=o0(t),e.lineJoin="round",e.stroke())}function ze(e,t,n,i,s,r,a){e.lineCap="round",e.beginPath(),e.moveTo(t,n),e.lineTo(i,s),e.strokeStyle=Lt,e.lineWidth=r+2.2,e.stroke(),e.strokeStyle=a,e.lineWidth=r,e.stroke()}var l0=["#5b6b8c","#7a6a58","#4f5d75","#8a5f6a","#5f7a68"];function j(e,t){if(!e||e[0]!=="#"||e.length<7)return e;let n=parseInt(e.slice(1,7),16),i=t>0?0:255,s=Math.abs(t);return"#"+[n>>16&255,n>>8&255,n&255].map(r=>Math.round(r+(i-r)*s).toString(16).padStart(2,"0")).join("")}function Gl(e,t,n,i,s){e.fillStyle=s,e.beginPath(),e.moveTo(t,n+i*.9),e.bezierCurveTo(t-i*1.6,n-i*.2,t-i*.7,n-i*1.2,t,n-i*.35),e.bezierCurveTo(t+i*.7,n-i*1.2,t+i*1.6,n-i*.2,t,n+i*.9),e.fill()}function ys(e,t,n,i,s){e.fillStyle=s,e.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,c=r&1?i*.45:i;e.lineTo(t+Math.cos(a)*c,n+Math.sin(a)*c)}e.closePath(),e.fill()}function h0(e,t,n,i,s){let r=t.beard;if(!r||r==="none")return;let a=t.beardColor||j(t.hair,-.12),c=j(a,-.3),l=t.skin,h=i,u=(f,_=1)=>{e.beginPath(),f(),L(e,a,_)},g=()=>{e.fillStyle=l,e.beginPath(),e.ellipse(h?s*3.8:0,n+4.9,h?1.8:2.7,1.25,0,0,7),e.fill()},p=()=>{h?(e.moveTo(s*1.6,n+1.4),e.bezierCurveTo(s*3,n+3.6,s*5.6,n+3.4,s*7.4,n+3.6),e.quadraticCurveTo(s*8.6,n+6.4,s*6.4,n+9),e.quadraticCurveTo(s*3,n+10.6,s*-.2,n+7),e.lineTo(s*-.4,n+1.4)):(e.moveTo(-8.2,n+.2),e.lineTo(-7.2,n+3.2),e.quadraticCurveTo(-4.6,n+3.6,-2.6,n+3.1),e.quadraticCurveTo(0,n+3.9,2.6,n+3.1),e.quadraticCurveTo(4.6,n+3.6,7.2,n+3.2),e.lineTo(8.2,n+.2),e.bezierCurveTo(8.8,n+9,3.6,n+11.2,0,n+11.2),e.bezierCurveTo(-3.6,n+11.2,-8.8,n+9,-8.2,n+.2)),e.closePath()};if(r==="stubble"){e.save(),e.beginPath(),p(),e.clip(),e.fillStyle=a,e.globalAlpha=.16,e.fillRect(-10,n,20,12),e.globalAlpha=.75;for(let f=0;f<46;f++){let _=h?s*(.6+f*37%78/10):-7.2+f*37%144/10,M=n+3.2+f*53%66/10;e.beginPath(),e.arc(_,M,.26,0,7),e.fill()}e.restore();return}if(r==="full"||r==="muttonchops"){if(r==="full"){e.beginPath(),p(),L(e,a,1.1),g(),e.strokeStyle=c,e.lineWidth=.35;for(let f=-3;f<=3;f++)e.beginPath(),e.moveTo(h?s*(3.2+f):f*2,n+6.6),e.lineTo(h?s*(3.6+f*1.1):f*2.2,n+10),e.stroke()}else[-1,1].forEach(f=>{if(h&&f<0)return;let _=h?s:f;e.beginPath(),e.moveTo(_*8.4,n-1.4),e.lineTo(_*8.8,n+5.4),e.quadraticCurveTo(_*7.6,n+9.2,_*4.4,n+9.4),e.lineTo(_*5.4,n+5.6),e.lineTo(_*6.6,n-1),e.closePath(),L(e,a,1)});return}if(r==="sideburns"){[-1,1].forEach(f=>{if(h&&f<0)return;let _=h?s:f;e.beginPath(),e.moveTo(_*(h?1.6:8.6),n-2.6),e.lineTo(_*(h?2.6:8.8),n+3.8),e.lineTo(_*(h?.6:6.8),n+3),e.lineTo(_*(h?.4:7),n-2.4),e.closePath(),L(e,a,.9)});return}if(r==="chinstrap"){e.strokeStyle=Lt,e.lineWidth=2.6,e.lineCap="round",e.beginPath(),h?(e.moveTo(s*0,n+1),e.quadraticCurveTo(s*1.4,n+8.4,s*6.4,n+8.6)):(e.moveTo(-8.2,n+1),e.bezierCurveTo(-8.2,n+9.4,-3.6,n+10.6,0,n+10.6),e.bezierCurveTo(3.6,n+10.6,8.2,n+9.4,8.2,n+1)),e.stroke(),e.strokeStyle=a,e.lineWidth=1.3,e.stroke();return}if(r==="goatee"||r==="vandyke"||r==="circle"||r==="soulpatch"){if(r==="soulpatch"){u(()=>e.ellipse(h?s*4.2:0,n+6.7,h?1:1.1,1.2,0,0,7),.8);return}r==="goatee"&&u(()=>{h?e.ellipse(s*5.8,n+7.2,2.5,2.8,0,0,7):(e.moveTo(-3,n+5.8),e.quadraticCurveTo(-3.4,n+10.4,0,n+10.6),e.quadraticCurveTo(3.4,n+10.4,3,n+5.8),e.quadraticCurveTo(0,n+6.8,-3,n+5.8),e.closePath())},1),r==="vandyke"&&u(()=>{h?(e.moveTo(s*4.6,n+6),e.lineTo(s*5.4,n+11.8),e.lineTo(s*7.4,n+6.4),e.closePath()):(e.moveTo(-2.6,n+5.8),e.quadraticCurveTo(-1.6,n+9,0,n+12.2),e.quadraticCurveTo(1.6,n+9,2.6,n+5.8),e.quadraticCurveTo(0,n+6.8,-2.6,n+5.8),e.closePath())},1),r==="circle"&&(e.strokeStyle=Lt,e.lineWidth=3.4,e.lineCap="round",e.beginPath(),h?e.ellipse(s*4.8,n+5.6,2.8,3.6,0,-1.4,1.4):e.ellipse(0,n+5.8,4.1,3.6,0,0,7),e.stroke(),e.strokeStyle=a,e.lineWidth=2,e.stroke()),(r==="vandyke"||r==="circle")&&(e.strokeStyle=a,e.lineWidth=1.1,e.lineCap="round",e.beginPath(),h?(e.moveTo(s*4.2,n+3.6),e.lineTo(s*7.2,n+3.9)):(e.moveTo(-1,n+3.3),e.quadraticCurveTo(-3,n+3.4,-4.6,n+2.6),e.moveTo(1,n+3.3),e.quadraticCurveTo(3,n+3.4,4.6,n+2.6)),e.stroke());return}if(e.lineCap="round",r==="pencil"){e.strokeStyle=a,e.lineWidth=.9,e.beginPath(),h?(e.moveTo(s*4,n+3.6),e.lineTo(s*7,n+3.8)):(e.moveTo(-3.2,n+3.7),e.quadraticCurveTo(0,n+3,3.2,n+3.7)),e.stroke();return}if(r==="handlebar"){e.strokeStyle=Lt,e.lineWidth=2.6;let f=()=>{e.beginPath(),h?(e.moveTo(s*4,n+3.5),e.quadraticCurveTo(s*6.6,n+3.2,s*7.8,n+1.8)):(e.moveTo(0,n+3.4),e.quadraticCurveTo(-3.6,n+4.2,-5.8,n+2),e.moveTo(0,n+3.4),e.quadraticCurveTo(3.6,n+4.2,5.8,n+2)),e.stroke()};f(),e.strokeStyle=a,e.lineWidth=1.4,f();return}(r==="walrus"||r==="mustache")&&u(()=>{h?(e.moveTo(s*3.6,n+2.6),e.quadraticCurveTo(s*7.4,n+2.4,s*8,n+5.2),e.quadraticCurveTo(s*5.6,n+5.6,s*3.6,n+4.6),e.closePath()):(e.moveTo(0,n+3),e.quadraticCurveTo(-5,n+2.4,-6.4,n+5.8),e.quadraticCurveTo(-3.2,n+5.6,0,n+4.4),e.quadraticCurveTo(3.2,n+5.6,6.4,n+5.8),e.quadraticCurveTo(5,n+2.4,0,n+3),e.closePath())},.9)}var eu=2.4,c0=["long","wavy","bob","braids","pigtails","pony"];function nu(e,t,n,i,s){if(i.age==="hs"&&i.adultRig===void 0&&!i.legacyAdult&&(i={...i,adultRig:!0,teen:!0,packColor:i.pack}),(i.age==="adult"||i.adultRig)&&!i.legacyAdult)return g0(e,t,n,i,s);e.save(),e.translate(Math.round(t*2)/2,Math.round(n*2)/2);let r=i.moving,a=r?Math.sin(i.walk):0,c=i.dir,l=c==="left"||c==="right",h=c==="left"?-1:1,u=c==="up",g=i.sitting,p=i.age==="adult",f=i.top,_=i.bottom||"pants",M=(i.headSize||1)*1,d=(i.build==="slim"?.9:i.build==="sturdy"?1.12:1)*(p?1.12:1),m=p?1.28:1;e.fillStyle="rgba(70,45,55,.24)",e.beginPath(),e.ellipse(0,1,10*d,3.6,0,0,7),e.fill(),g&&e.translate(0,8),e.translate(0,r?-Math.abs(Math.cos(i.walk))*1.8:Math.sin(s*2+i.id)*.35),p&&e.scale(1,m);let w=i.pants||l0[i.id%5],F=i.pack||["#f28f7e","#4f91c7","#eab94e","#88b89a","#b8a8da"][i.id%5],S=i.shoes||"#fbf6ee",E=i.packStyle||"pack",T=i.shirt2||"#fff6ea",P=f==="tank"?i.skin:f==="varsity"?T:f==="sailor"?j(i.shirt,-.1):f==="apron"?T:f==="cableknit"||f==="chunky"?j(i.shirt,.06):i.shirt,o=-28,A=i.hair,x=i.style,k=i.hair2||j(A,-.28),G=i.hl||(i.hair2?"streak":"none"),$=x==="long"||x==="hime"?13.5:x==="wavy"||x==="halfup"?12.5:x==="mullet"?10:x==="bob"?9:x==="shag"?8:0,U=(y,R,z,se,I)=>{let Ce=e.createLinearGradient(y,R,z,se);return I.forEach(([pe,C])=>Ce.addColorStop(pe,C)),Ce},q=$?o+$:o+1.5,te=o-11,X=i.hair2?G==="ombre"?U(0,te,0,q,[[0,A],[.35,A],[1,k]]):G==="tips"?U(0,te,0,q,[[0,A],[.7,A],[.7,k],[1,k]]):G==="split"?U(-10,0,10,0,[[0,A],[.5,A],[.5,k],[1,k]]):G==="roots"?U(0,te,0,q,[[0,k],[.3,k],[.3,A],[1,A]]):G==="rainbow"?U(0,te,0,q,[[0,A],[.33,k],[.66,j(k,-.25)],[1,A]]):A:A,ae=i.hair2&&G==="underlayer"?k:X,ie=()=>{p&&(e.translate(0,-8.4),e.scale(.82,.82)),e.translate((i.turn||0)*1.7+(i.hx||0),-eu+(i.hdy||0)),i.tilt&&(e.translate(0,9),e.rotate(i.tilt),e.translate(0,-9))},ne=i.htex||"straight",le=(ne==="curly"||ne==="coily"||ne==="fluffy")&&x!=="buzz"&&x!=="afro"&&x!=="bald",Ae=()=>{if(le){let y=ne==="coily"?3.3:ne==="curly"?2.8:2.3,R=ne==="fluffy"?11:9,z=l?h*.6:0;for(let se=0;se<R;se++){let I=Math.PI*(1.04+.92*se/(R-1));e.beginPath(),e.arc(z+Math.cos(I)*9.6,o+Math.sin(I)*8.9,y,0,7),L(e,ae,1.2)}}if(x==="long"||x==="bob"||x==="wavy"||x==="shag"||x==="halfup"||x==="hime"||x==="mullet"){let y=x==="bob"?9:x==="shag"?8:x==="mullet"?10:x==="long"||x==="hime"?13.5:12.5,R=l?-h:1,z=l?6.4:10.4,se=e;if(se.beginPath(),l?(se.moveTo(R*-1,o-7.5),se.bezierCurveTo(R*8,o-8,R*11.4,o+1,R*10.2,o+y*.62),se.quadraticCurveTo(R*9.6,o+y,R*6.4,o+y+.4),se.quadraticCurveTo(R*3.2,o+y-1.6,R*1.8,o+3),se.closePath()):(se.moveTo(-9.4,o-3),se.bezierCurveTo(-11.6,o+3,-z-.4,o+y*.5,-z+.6,o+y-2),se.quadraticCurveTo(-z+1.4,o+y+.6,-5.2,o+y),x==="wavy"?(se.quadraticCurveTo(-3.2,o+y+2.4,-1.4,o+y-.4),se.quadraticCurveTo(1.2,o+y+2.4,3.2,o+y)):se.quadraticCurveTo(0,o+y-1.6,5.2,o+y),se.quadraticCurveTo(z-1.4,o+y+.6,z-.6,o+y-2),se.bezierCurveTo(z+.4,o+y*.5,11.6,o+3,9.4,o-3),se.closePath()),L(e,ae,1.3),ne==="curly"||ne==="coily"){let I=ne==="coily"?2.6:2.2;for(let Ce=0;Ce<6;Ce++)e.beginPath(),e.arc(l?R*(1.8+Ce*1.4):-8+Ce*3.2,o+y-.4+Ce%2*.6,I,0,7),L(e,ae,1.1)}e.strokeStyle=j(A,-.32),e.lineWidth=.55,e.lineCap="round",(l?[2.4,4.6,6.8,8.6]:[-8,-5.6,5.6,8]).forEach((I,Ce)=>{e.beginPath();let pe=l?R*I:I;e.moveTo(pe,o+2),e.quadraticCurveTo(pe*1.06,o+y*.55,pe*1.02+(Ce%2?.6:-.6),o+y-2.4),e.stroke()})}x==="highpony"&&(e.save(),e.translate(l?-h*5:u?0:6,o-14),e.rotate(l?h*.5:u?0:-.45),e.beginPath(),e.ellipse(0,2,3,7.4,0,0,7),L(e,ae,1.3),e.restore()),x==="afro"&&(e.beginPath(),e.ellipse(l?-h*1.2:0,o-3,13.2,12.6,0,0,7),L(e,ae,1.4)),x==="locs"&&(l?[-h*8.2,-h*5.4]:[-9.6,-6.2,6.2,9.6]).forEach((y,R)=>{for(let z=0;z<4;z++)e.beginPath(),Xe(e,y-1.5+(z&1?.3:-.3),o+1+z*3.4+R%2*.8,3,3.6,1.5),L(e,z&1?k:ae,1)}),x==="halfup"&&(e.beginPath(),e.arc(l?-h*3:0,o-10.5,3.9,0,7),L(e,ae,1.3)),x==="bun"&&(e.beginPath(),e.arc(l?-h*3:0,o-9.5,4.4,0,7),L(e,ae,1.3)),x==="topknot"&&(e.beginPath(),e.arc(l?-h*2:0,o-12,3.4,0,7),L(e,ae,1.3)),x==="twinbuns"&&(l?[-h*3]:[-7.6,7.6]).forEach(y=>{e.beginPath(),e.arc(y,o-10.4,3.9,0,7),L(e,ae,1.3)}),x==="pony"&&(e.save(),e.translate(l?-h*9:u?0:9,l?o+2:u?o+8:o+1),e.rotate(l||u?0:-.5),e.beginPath(),e.ellipse(0,4,3.2,6.5,0,0,7),L(e,ae,1.3),e.restore()),x==="pigtails"&&(l?[-h*10]:[-10.6,10.6]).forEach((y,R)=>{e.save(),e.translate(y,o+3),e.rotate(l?0:R?-.4:.4),e.beginPath(),e.ellipse(0,5,2.9,6.6,0,0,7),L(e,ae,1.3),e.restore()}),x==="braids"&&(l?[-h*8.4]:[-9.4,9.4]).forEach(y=>{for(let R=0;R<4;R++)e.beginPath(),e.ellipse(y,o+4+R*3.7,2.2,2.1,0,0,7),L(e,R&1?k:A,1.1)}),x==="curly"&&[[-8,o-2],[8,o-2],[-6,o-8],[6,o-8],[0,o-10]].forEach(([y,R])=>{e.beginPath(),e.arc(y,R,4.6,0,7),L(e,ae,1.2)})};u||(e.save(),p&&e.scale(1,1/m),ie(),Ae(),e.restore());let _e=i.extra&&i.extra!=="none"?i.extra:"",Je=i.extraColor||"#eab94e",it=()=>{if(_e){if(_e==="angelwings")[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*3,-19),e.bezierCurveTo(y*12,-30,y*19,-22,y*15.4,-13),e.quadraticCurveTo(y*15,-10.6,y*12.6,-12),e.quadraticCurveTo(y*12.6,-8.8,y*9.6,-10.6),e.quadraticCurveTo(y*8,-9,y*6.4,-11.4),e.closePath(),L(e,"#fffaf2",1.2),ze(e,y*5,-17,y*12.4,-18.4,.5,"#d9d4cc"),ze(e,y*5.4,-14.6,y*12,-15,.5,"#d9d4cc")});else if(_e==="butterfly")[-1,1].forEach(y=>{e.beginPath(),e.ellipse(y*10.6,-21,6.2,4.2,y*-.5,0,7),L(e,Je,1.1),e.beginPath(),e.ellipse(y*9.4,-13.6,4.2,3,y*.5,0,7),L(e,j(Je,.15),1.1),e.fillStyle="rgba(255,255,255,.8)",e.beginPath(),e.arc(y*11.6,-21.6,1.1,0,7),e.arc(y*9.6,-13.4,.8,0,7),e.fill()});else if(_e==="cape"){if(e.beginPath(),e.moveTo(-6.2,-19.4),e.lineTo(-10.6,-3.4),e.quadraticCurveTo(0,-.4,10.6,-3.4),e.lineTo(6.2,-19.4),e.closePath(),L(e,Je,1.3),u){e.strokeStyle=j(Je,-.25),e.lineWidth=.6;for(let y of[-4,0,4])e.beginPath(),e.moveTo(y*.6,-18.6),e.lineTo(y*2.2,-3),e.stroke()}}else if(_e==="foxtail"){let y=l?-h*8:7.6;e.beginPath(),e.ellipse(y+(l?-h*3:3.4),-8.4,3.4,7.4,l?-h*-.9:-.9,0,7),L(e,Je,1.2),e.beginPath(),e.ellipse(y+(l?-h*5.6:6.2),-13.4,2.2,2.8,l?-h*-.9:-.9,0,7),L(e,"#fff6ea",1)}}},at=()=>{if(!(!_e||u)){if(_e==="sash"&&!l)e.beginPath(),e.moveTo(-6.4,-19.4),e.lineTo(-3.4,-19.4),e.lineTo(6.6,-9.6),e.lineTo(3.4,-8.8),e.closePath(),L(e,Je,1),ys(e,0,-14,1.2,"#fff6ea");else if(_e==="medal"&&!l)e.beginPath(),e.moveTo(-1.8,-19.5),e.lineTo(0,-15.2),e.lineTo(1.8,-19.5),e.closePath(),L(e,"#c4463c",.7),e.beginPath(),e.arc(0,-14.2,1.7,0,7),L(e,"#eab94e",.9),ys(e,0,-14.2,.9,"#fff6ea");else if(_e==="stethoscope")e.strokeStyle="#3a3a44",e.lineWidth=.9,e.beginPath(),e.moveTo(-3.6,-19.6),e.bezierCurveTo(-4.6,-11.6,4.6,-11.6,3.6,-19.6),e.stroke(),e.beginPath(),e.arc(.6,-11.2,1.4,0,7),L(e,"#c9ced4",.8);else if(_e==="toolbelt")e.fillStyle="#8a5f3a",e.fillRect(-6.8*d,-11,13.6*d,1.7),e.strokeStyle=Lt,e.lineWidth=.6,e.strokeRect(-6.8*d,-11,13.6*d,1.7),[-4.4,3.4].forEach(y=>{Xe(e,y,-10.2,2.6,3,.6),L(e,j("#8a5f3a",.2),.6)}),ze(e,.6,-9.2,.6,-6.2,1.1,"#9da7aa"),e.fillStyle="#c9ced4",e.fillRect(-.4,-6.6,2,1);else if(_e==="bird"){let y=l?.5:-6,R=-20.6;e.beginPath(),e.ellipse(y,R-1.4,2.4,2,0,0,7),L(e,Je,.9),e.beginPath(),e.arc(y+1.5,R-3.1,1.1,0,7),L(e,j(Je,.1),.8),e.fillStyle="#eab94e",e.beginPath(),e.moveTo(y+2.5,R-3.2),e.lineTo(y+3.6,R-2.8),e.lineTo(y+2.5,R-2.5),e.closePath(),e.fill(),e.fillStyle="#2a1d22",e.beginPath(),e.arc(y+1.8,R-3.4,.25,0,7),e.fill()}}};if(u||it(),g||[-1,1].forEach(y=>{let R=r?Math.max(0,y*a)*2.6:0,z=l?0:y*3.2*d,se=l?y*a*4.2:y*3.2*d;if(_==="shorts"?(ze(e,z,-9,se,-2-R,3.4,i.skin),ze(e,z,-9,z+(se-z)*.38,-6-R*.38,3.9,w)):_==="skirt"||_==="pleated"||_==="tutu"||_==="kilt"?ze(e,z,-9,se,-2-R,3.2,i.skin):_==="jeans"?(ze(e,z,-9,se,-2-R,3.9,w),ze(e,z+(se-z)*.12,-8.4,se+(z-se)*.04,-3-R,.5,j(w,.35)),ze(e,z,-3.4-R*.9+(se-z)*0,se,-2.2-R,4.1,j(w,-.18))):_==="bike"?(ze(e,z,-9,se,-2-R,3.2,i.skin),ze(e,z,-9,z+(se-z)*.36,-6.2-R*.36,3.5,j(w,-.25))):_==="leggings"?ze(e,z,-9,se,-2-R,3,j(w,-.18)):_==="capri"?(ze(e,z,-9,se,-2-R,3.2,i.skin),ze(e,z,-9,z+(se-z)*.62,-5-R*.62,3.9,w)):_==="cargo"?(ze(e,z,-9,se,-2-R,4,w),ze(e,z+(se-z)*.14,-7.6,z+(se-z)*.3,-6,2.3,j(w,-.22))):ze(e,z,-9,se,-2-R,_==="joggers"?4.2:3.6,w),i.socks&&i.socks!=="none"){let pe=i.socks==="ankle"?.78:.5,C=i.sockColor||"#fff6ea",v=N=>z+(se-z)*N,V=N=>-9+(-2-R+9)*N;if(ze(e,v(pe),V(pe),se,-2-R,3.9,C),i.socks==="striped")for(let N of[.58,.7])ze(e,v(N)-1.7,V(N),v(N)+1.7,V(N),.9,j(C,-.4));else i.socks==="tall"&&ze(e,v(pe)-1.7,V(pe),v(pe)+1.7,V(pe),.8,j(C,-.25))}let I=se+(l?h*1.2:0),Ce=-.6-R;if(i.shoeStyle==="boot")Xe(e,I-2.6,Ce-3.6,5.2,4.6,1.6),L(e,S,1.1),e.beginPath(),e.ellipse(I+(l?h*1.2:0),Ce+.6,3.6,1.7,0,0,7),L(e,j(S,.25),1.1);else if(i.shoeStyle==="hightop"){Xe(e,I-2.7,Ce-4.4,5.4,5.4,1.5),L(e,S,1.1),e.fillStyle="#fff6ea",e.fillRect(I-2.7,Ce+.2,5.4,.9),e.beginPath(),e.ellipse(I+(l?h*1:0),Ce+.5,3.6,1.6,0,0,7),L(e,"#fff6ea",1);for(let pe=0;pe<3;pe++)e.fillStyle="#fff6ea",e.fillRect(I-.4,Ce-3.6+pe*1.2,.8,.5)}else if(i.shoeStyle==="loafer")e.beginPath(),e.ellipse(I,Ce,3.5,1.8,0,0,7),L(e,j(S,-.15),1.1),Xe(e,I-1.2,Ce-1.4,2.4,.9,.3),L(e,"#eab94e",.5);else if(i.shoeStyle==="rainboot")Xe(e,I-2.6,Ce-6.6,5.2,7.6,1.4),L(e,S,1.1),e.fillStyle=j(S,.3),e.fillRect(I-2.6,Ce-6.6,5.2,1.3),e.beginPath(),e.ellipse(I+(l?h*1.1:0),Ce+.7,3.7,1.7,0,0,7),L(e,j(S,-.25),1.1);else if(i.shoeStyle==="slipper"){e.beginPath(),e.ellipse(I,Ce,3.6,2,0,0,7),L(e,S,1.1);for(let pe=-2;pe<=2;pe++)e.beginPath(),e.arc(I+pe*1.4,Ce-1.6+Math.abs(pe)*.25,.9,0,7),L(e,j(S,.2),.7)}else i.shoeStyle==="skate"?(e.beginPath(),e.ellipse(I,Ce,3.5,1.9,0,0,7),L(e,S,1.1),e.fillStyle="#fff6ea",e.fillRect(I-3.4,Ce+.9,6.8,1),e.beginPath(),e.moveTo(I-2,Ce-1),e.lineTo(I+2,Ce-.2),e.strokeStyle="rgba(255,255,255,.6)",e.lineWidth=.6,e.stroke()):i.shoeStyle==="sandal"?(e.beginPath(),e.ellipse(I,Ce,3.4,1.7,0,0,7),L(e,i.skin,1.1),e.strokeStyle=S,e.lineWidth=1.2,e.beginPath(),e.moveTo(I-2.2,Ce-.3),e.lineTo(I+2.2,Ce-.3),e.stroke()):(e.beginPath(),e.ellipse(I,Ce,3.4,1.9,0,0,7),L(e,S,1.1),i.shoeStyle==="sneaker"&&(e.fillStyle="rgba(255,255,255,.55)",e.fillRect(I-3,Ce+.5,6,.7)))}),(_==="pleated"||_==="tutu"||_==="kilt")&&!g)if(_==="tutu"){for(let[y,R,z]of[[11.6,-6.4,.22],[10.4,-7.6,.1],[8.8,-9,0]]){e.beginPath(),e.moveTo(-y*d*.6,R-3.6),e.lineTo(y*d*.6,R-3.6);for(let se=0;se<=6;se++)e.quadraticCurveTo(y*d*(.6-(se+.5)/6*1.2)*-1*-1,R+1.4,y*d*(.6-(se+1)/6*1.2),R-.4);e.closePath(),L(e,j(w,z),1.1)}e.fillStyle=j(w,-.3),e.fillRect(-6.6*d,-12.2,13.2*d,1.4)}else{if(e.beginPath(),e.moveTo(-6.6*d,-12),e.lineTo(6.6*d,-12),e.lineTo(_==="kilt"?8.4*d:10.2*d,-5.4),e.lineTo(_==="kilt"?-8.4*d:-10.2*d,-5.4),e.closePath(),L(e,w,1.3),e.save(),e.clip(),_==="pleated"){e.strokeStyle=j(w,-.3),e.lineWidth=.5;for(let y=-9;y<=9;y+=1.8)e.beginPath(),e.moveTo(y*.64,-12),e.lineTo(y*1.1,-5.4),e.stroke()}else{e.strokeStyle=j(w,.35),e.lineWidth=.7;for(let y=-9;y<=9;y+=2.4)e.beginPath(),e.moveTo(y,-12.5),e.lineTo(y,-5),e.stroke();for(let y=-11.4;y<-5;y+=2)e.beginPath(),e.moveTo(-10,y),e.lineTo(10,y),e.stroke();e.strokeStyle="rgba(0,0,0,.2)",e.lineWidth=.4;for(let y=-8;y<=9;y+=4.8)e.beginPath(),e.moveTo(y,-12.5),e.lineTo(y,-5),e.stroke()}e.restore(),e.fillStyle=j(w,-.3),e.fillRect(-6.8*d,-12.4,13.6*d,1.2),_==="kilt"&&(e.beginPath(),e.arc(-4.4*d,-7.6,.9,0,7),L(e,"#d9d4cc",.5))}_==="skirt"&&!g&&(e.beginPath(),e.moveTo(-6.8*d,-12),e.lineTo(6.8*d,-12),e.lineTo(9.6*d,-5.6),e.lineTo(-9.6*d,-5.6),e.closePath(),L(e,w,1.3),e.fillStyle="rgba(255,255,255,.22)",e.fillRect(-8.2*d,-7.4,16.4*d,1));let H=(y,R)=>{let z=l?y*a*3.5:y*8.2,se=-9.5-(r?-y*a*1.5:0),I=i.arms&&(y>0?i.arms.R:i.arms.L);if(I&&(z=l?h*Math.abs(I[0])*.9:I[0],se=I[1]),ze(e,l?0:y*6.6*d,-17,z,se,3.2,P),i.wrist&&i.wrist!=="none"&&(y<0||l)){let Ce=l?0:y*6.6*d,pe=z+(Ce-z)*.2,C=se+(-17-se)*.2,v=i.wristColor||"#eab94e",V=i.wrist;if(V==="watch")e.beginPath(),e.arc(pe,C,1.9,0,7),e.strokeStyle=Lt,e.lineWidth=2.4,e.stroke(),e.strokeStyle="#313a3f",e.lineWidth=1.3,e.stroke(),Xe(e,pe-1.1,C-1.2,2.2,2.4,.5),L(e,"#fffaf2",.6);else if(V==="beads")for(let N=-1;N<=1;N++)e.beginPath(),e.arc(pe+N*1.3,C+Math.abs(N)*.5,.8,0,7),L(e,N?v:"#f2e8d8",.5);else V==="band"?ze(e,pe-1.8,C,pe+1.8,C,2,v):(e.beginPath(),e.arc(pe,C,1.8,0,7),e.strokeStyle=Lt,e.lineWidth=2.2,e.stroke(),e.strokeStyle=v,e.lineWidth=1,e.stroke())}e.beginPath(),e.arc(z,se+.6,1.9,0,7),L(e,i.skin,1),i.thumb&&y>0&&(e.beginPath(),e.ellipse(z+.2,se-1.4,.9,1.6,.12,0,7),L(e,i.skin,1))};l&&H(-h*-1,!1),l&&E==="pack"?(Xe(e,-h*9.5,-19,7,10,3),L(e,F,1.2)):l&&E==="mini"&&(Xe(e,-h*8,-16,5,6.5,2.4),L(e,F,1.1));let re=(y,R,z)=>{let se=(l?h*.4:0)+(i.turn||0)*1.7;Xe(e,se-2.7,y,5.4,R-y,1.6),L(e,i.skin,z?0:1.2),z&&(e.strokeStyle=Lt,e.lineWidth=1.2,e.beginPath(),e.moveTo(se-2.7,y),e.lineTo(se-2.7,R),e.moveTo(se+2.7,y),e.lineTo(se+2.7,R),e.stroke()),e.fillStyle="rgba(110,60,50,.2)",e.beginPath(),e.ellipse(se,y+3.4,2.7,1.2,0,0,7),e.fill()};re(-27,-18.4,!1),f==="hoodie"&&(e.beginPath(),e.ellipse(0,-19.6,6.4*d,3.2,0,0,7),L(e,j(i.shirt,.14),1.2));let ge=()=>{f==="dress"?(e.beginPath(),e.moveTo(-6.4*d,-19.5),e.quadraticCurveTo(0,-21,6.4*d,-19.5),e.lineTo(7*d,-13),e.lineTo(9.6*d,-6),e.quadraticCurveTo(0,-4.4,-9.6*d,-6),e.lineTo(-7*d,-13),e.closePath()):f==="tank"?Xe(e,-5.6*d,-19.5,11.2*d,11.5,4):Xe(e,-6.6*d,-19.5,13.2*d,11.5,4.5)},J=f==="overalls"||f==="vest"?T:i.shirt;if(ge(),L(e,J,1.4),i.pattern&&i.pattern!=="solid"&&f!=="overalls"&&f!=="vest"){let y=i.shirt2||j(i.shirt,.3);if(e.save(),ge(),e.clip(),i.pattern==="stripes")for(let R=-20;R<-4;R+=3.6)e.fillStyle=y,e.fillRect(-11,R,22,1.7);else if(i.pattern==="dots")for(let R=-19;R<-4;R+=3.2)for(let z=-9+(R*3&1)*1.6;z<10;z+=3.2)e.fillStyle=y,e.beginPath(),e.arc(z,R,.85,0,7),e.fill();else if(i.pattern==="plaid"){e.strokeStyle=y,e.globalAlpha=.75,e.lineWidth=1;for(let R=-19;R<-4;R+=3.6)e.beginPath(),e.moveTo(-11,R),e.lineTo(11,R),e.stroke();for(let R=-9;R<10;R+=3.6)e.beginPath(),e.moveTo(R,-21),e.lineTo(R,-4),e.stroke();e.globalAlpha=1}else if(i.pattern==="hearts")for(let R=-17;R<-5;R+=4.2)for(let z=-7+(R*2&1)*2;z<8;z+=4.4)Gl(e,z,R,1.1,y);else if(i.pattern==="stars")for(let R=-17;R<-5;R+=4.2)for(let z=-7+(R*2&1)*2;z<8;z+=4.4)ys(e,z,R,1.4,y);e.restore(),ge(),e.lineWidth=1.4,e.strokeStyle=Lt,e.stroke()}if(e.fillStyle="rgba(255,255,255,.3)",e.beginPath(),e.ellipse(-2.4,-16.5,2.4,3.4,0,0,7),e.fill(),i.emblem&&i.emblem!=="none"&&!u&&!l&&f!=="dress"&&f!=="overalls"){let y=i.shirt2&&i.shirt2!==i.shirt?i.shirt2:"#fff6ea",R=-13.4;i.emblem==="heart"?Gl(e,0,R-.6,2.2,y):i.emblem==="star"?ys(e,0,R,2.6,y):i.emblem==="bolt"?(e.beginPath(),e.moveTo(1,R-3.4),e.lineTo(-1.8,R+.4),e.lineTo(-.2,R+.4),e.lineTo(-1,R+3.4),e.lineTo(1.8,R-.6),e.lineTo(.2,R-.6),e.closePath(),L(e,y,.5)):i.emblem==="paw"?(e.fillStyle=y,e.beginPath(),e.ellipse(0,R+1,1.7,1.3,0,0,7),e.fill(),[[-2,R-1.2],[-.7,R-2.4],[.7,R-2.4],[2,R-1.2]].forEach(([z,se])=>{e.beginPath(),e.arc(z,se,.7,0,7),e.fill()})):i.emblem==="smile"&&(e.beginPath(),e.arc(0,R,2.6,0,7),L(e,y,.6),e.fillStyle="#4a3b3f",e.beginPath(),e.arc(-.9,R-.7,.35,0,7),e.arc(.9,R-.7,.35,0,7),e.fill(),e.strokeStyle="#4a3b3f",e.lineWidth=.5,e.beginPath(),e.arc(0,R+.2,1.2,.2*Math.PI,.8*Math.PI),e.stroke())}if(f){if(!u)if(f==="hoodie")Xe(e,-3.8,-14,7.6,3.6,1.6),e.lineWidth=1,e.strokeStyle=j(i.shirt,.3),e.stroke(),ze(e,-1.6,-18.6,-1.6,-14.8,.8,T),ze(e,1.6,-18.6,1.6,-14.8,.8,T);else if(f==="sweater")e.fillStyle=j(i.shirt,-.28),e.fillRect(-6.4*d,-10.6,12.8*d,2),e.beginPath(),e.ellipse(0,-19.3,3.6,1.5,0,0,7),L(e,j(i.shirt,-.28),1);else if(f==="jersey")e.fillStyle=i.shirt2||"#fff",e.font="800 6.4px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillText(String(i.num??i.id%90+1),0,-11.8),e.fillRect(-6.4*d,-19.4,12.8*d,.9);else if(f==="blazer")e.beginPath(),e.moveTo(-3.4,-19.4),e.lineTo(0,-12.4),e.lineTo(3.4,-19.4),e.closePath(),L(e,T,.9),e.beginPath(),e.moveTo(-3.4,-19.4),e.lineTo(-.4,-11.8),e.lineTo(-5.6,-11),e.lineTo(-6.4,-17.6),e.closePath(),L(e,j(i.shirt,.16),.9),e.beginPath(),e.moveTo(3.4,-19.4),e.lineTo(.4,-11.8),e.lineTo(5.6,-11),e.lineTo(6.4,-17.6),e.closePath(),L(e,j(i.shirt,.16),.9),e.fillStyle="#EAB94E",e.beginPath(),e.arc(0,-10.4,.7,0,7),e.fill();else if(f==="overalls")Xe(e,-4,-16.4,8,6.8,1.6),L(e,i.shirt,1.1),ze(e,-3.4,-19.4,-3.2,-16.2,1.2,i.shirt),ze(e,3.4,-19.4,3.2,-16.2,1.2,i.shirt),e.fillStyle="#EAB94E",[-3.2,3.2].forEach(y=>{e.beginPath(),e.arc(y,-16.2,.7,0,7),e.fill()}),Xe(e,-2,-14.4,4,2.4,.8),e.lineWidth=.8,e.strokeStyle=j(i.shirt,.3),e.stroke();else if(f==="vest")e.beginPath(),e.moveTo(-6.6*d,-19.4),e.lineTo(-1.2,-19.4),e.lineTo(-.6,-9.4),e.lineTo(-6.2*d,-9.4),e.closePath(),L(e,i.shirt,1),e.beginPath(),e.moveTo(6.6*d,-19.4),e.lineTo(1.2,-19.4),e.lineTo(.6,-9.4),e.lineTo(6.2*d,-9.4),e.closePath(),L(e,i.shirt,1);else if(f==="tee")e.beginPath(),e.ellipse(0,-19.3,3.2,1.3,0,0,7),L(e,j(i.shirt,.12),.9);else if(f==="henley")e.beginPath(),e.ellipse(0,-19.3,3.4,1.4,0,0,7),L(e,j(i.shirt,.12),.9),Xe(e,-1.1,-19.4,2.2,5.6,.6),L(e,j(i.shirt,.22),.7),[-18,-16.4,-14.8].forEach(y=>{e.fillStyle="#fff6ea",e.beginPath(),e.arc(0,y,.4,0,7),e.fill()});else if(f==="flannel"){e.save(),ge(),e.clip(),e.strokeStyle=j(i.shirt,-.32),e.globalAlpha=.55,e.lineWidth=1;for(let y=-19;y<-8;y+=2.7)e.beginPath(),e.moveTo(-8,y),e.lineTo(8,y),e.stroke();for(let y=-6;y<=6;y+=2.7)e.beginPath(),e.moveTo(y,-20),e.lineTo(y,-8),e.stroke();e.globalAlpha=1,e.restore(),Xe(e,-2.4,-19.4,4.8,10.8,.6),L(e,T,.8),[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*4,-19.6),e.lineTo(y*.6,-19.6),e.lineTo(y*1.2,-16.4),e.closePath(),L(e,j(i.shirt,.3),.8),ze(e,y*2.4,-16,y*2.4,-8.6,.8,j(i.shirt,-.4))}),[-14.4,-11.6].forEach(y=>{e.fillStyle="#fff6ea",e.beginPath(),e.arc(-1.2,y,.45,0,7),e.fill()})}else if(f==="sailor")e.beginPath(),e.moveTo(-6.4,-19.6),e.lineTo(-.9,-11.4),e.lineTo(.9,-11.4),e.lineTo(6.4,-19.6),e.lineTo(3.4,-19.6),e.lineTo(0,-15.2),e.lineTo(-3.4,-19.6),e.closePath(),L(e,j(i.shirt,-.3),1),ze(e,-5.2,-18.2,-.4,-12.6,.6,"#fff6ea"),ze(e,5.2,-18.2,.4,-12.6,.6,"#fff6ea"),ze(e,-4.4,-17.2,-.2,-12,.5,"#fff6ea"),ze(e,4.4,-17.2,.2,-12,.5,"#fff6ea"),e.beginPath(),e.moveTo(-1.4,-15.4),e.lineTo(1.4,-15.4),e.lineTo(0,-12.6),e.closePath(),L(e,"#c4463c",.7);else if(f==="vneck"||f==="argyle"||f==="fairisle"){if(f==="argyle"){e.save(),ge(),e.clip();for(let y=-18;y<-8;y+=3.6)for(let R=-7+(Math.round(y/3.6)&1?1.8:0);R<8;R+=3.6)e.beginPath(),e.moveTo(R,y-1.8),e.lineTo(R+1.8,y),e.lineTo(R,y+1.8),e.lineTo(R-1.8,y),e.closePath(),e.fillStyle=T,e.globalAlpha=.85,e.fill(),e.globalAlpha=1;e.strokeStyle=j(i.shirt,-.3),e.lineWidth=.35;for(let y=-16;y<24;y+=3.6)e.beginPath(),e.moveTo(y-12,-20),e.lineTo(y+8,-6),e.moveTo(y+8-12+24,-20),e.lineTo(y-12+12-12,-6),e.stroke();e.restore()}f==="fairisle"&&(e.save(),ge(),e.clip(),[-17.4,-12.4].forEach((y,R)=>{e.fillStyle=T,e.fillRect(-8,y-1.5,16,3);for(let z=-7;z<8;z+=2.2)e.fillStyle=R?j(i.shirt,-.3):"#c4463c",e.beginPath(),e.moveTo(z,y-1.5),e.lineTo(z+1.1,y+.1),e.lineTo(z+2.2,y-1.5),e.closePath(),e.fill(),e.beginPath(),e.moveTo(z,y+1.5),e.lineTo(z+1.1,y-.1),e.lineTo(z+2.2,y+1.5),e.closePath(),e.fill()}),e.restore()),e.beginPath(),e.moveTo(-3.6,-19.6),e.lineTo(0,-14.4),e.lineTo(3.6,-19.6),e.closePath(),L(e,i.skin,1),e.fillStyle=j(i.shirt,-.25),e.fillRect(-6.4*d,-10.2,12.8*d,2.2);for(let y=-6;y<6.4;y+=1.4)e.fillStyle="rgba(0,0,0,.12)",e.fillRect(y,-10.2,.3,2.2)}else if(f==="cableknit"){for(let y of[-3.8,0,3.8])for(let R=-18;R<-9.6;R+=2.1)e.beginPath(),e.ellipse(y+(Math.round(R/2.1)&1?.7:-.7),R,1.1,1.1,0,0,7),e.strokeStyle=j(i.shirt,-.3),e.lineWidth=.5,e.stroke();e.beginPath(),e.ellipse(0,-19.5,3.8,1.7,0,0,7),L(e,j(i.shirt,-.12),.9),e.fillStyle=j(i.shirt,-.25),e.fillRect(-6.4*d,-10.2,12.8*d,2.2)}else if(f==="cowl"){e.beginPath(),e.ellipse(0,-19.4,5.2,2.8,0,0,7),L(e,j(i.shirt,.08),1),e.beginPath(),e.ellipse(0,-20.4,4.4,2,0,0,7),L(e,j(i.shirt,.18),1),e.strokeStyle=j(i.shirt,-.2),e.lineWidth=.4;for(let y=-3;y<=3;y++)e.beginPath(),e.moveTo(y*1.2,-21.4),e.lineTo(y*1.5,-17.4),e.stroke();e.fillStyle=j(i.shirt,-.25),e.fillRect(-6.4*d,-10.2,12.8*d,2.2)}else if(f==="chunky"){e.strokeStyle=j(i.shirt,-.22),e.lineWidth=.5;for(let y=-17.6;y<-9.6;y+=1.9)e.beginPath(),e.moveTo(-6.2*d,y),e.quadraticCurveTo(0,y+.8,6.2*d,y),e.stroke();e.beginPath(),e.ellipse(0,-19.5,4.6,2.1,0,0,7),L(e,j(i.shirt,.14),1.1),e.fillStyle=j(i.shirt,-.3),e.fillRect(-7.2*d,-10.4,14.4*d,2.6),ze(e,-6.4*d,-18.6,-7.4*d,-12,.6,j(i.shirt,-.25)),ze(e,6.4*d,-18.6,7.4*d,-12,.6,j(i.shirt,-.25))}else if(f==="ziphoodie")e.beginPath(),e.ellipse(0,-19.6,6.4*d,3.2,0,0,7),L(e,j(i.shirt,.14),1.2),ze(e,0,-19.4,0,-8.6,.8,j(i.shirt,-.45)),e.fillStyle="#c9b28a",e.fillRect(-.5,-17,1,1.6),[-1,1].forEach(y=>{Xe(e,y*3.6-1.7,-13,3.4,3.4,1),e.lineWidth=.7,e.strokeStyle=j(i.shirt,-.3),e.stroke(),ze(e,y*1.5,-18.6,y*1.5,-15.4,.7,T)});else if(f==="varsity")ze(e,0,-19.4,0,-8.6,.6,j(i.shirt,-.4)),[-17,-14,-11].forEach(y=>{e.fillStyle="#c9b28a",e.beginPath(),e.arc(0,y,.55,0,7),e.fill()}),e.fillStyle=T,e.fillRect(-6.6*d,-9.8,13.2*d,1.6),e.fillRect(-3.4,-19.6,6.8,1.2),e.font="800 6px 'Trebuchet MS',sans-serif",e.textAlign="center",e.fillStyle=T,e.fillText(String.fromCharCode(65+i.id%26),-3.2,-13);else if(f==="denim"){e.save(),ge(),e.clip(),e.strokeStyle="rgba(255,255,255,.18)",e.lineWidth=.6;for(let y=-20;y<-8;y+=1.4)e.beginPath(),e.moveTo(-8,y),e.lineTo(8,y),e.stroke();e.restore(),[-1,1].forEach(y=>{Xe(e,y*3.5-1.8,-17,3.6,3.4,.6),e.lineWidth=.7,e.strokeStyle="#f0b25c",e.setLineDash([.9,.6]),e.stroke(),e.setLineDash([]),e.beginPath(),e.moveTo(y*.4,-19.6),e.lineTo(y*4.2,-19.6),e.lineTo(y*1.2,-16.6),e.closePath(),L(e,j(i.shirt,.12),.8)}),ze(e,0,-17,0,-8.6,.6,"#f0b25c"),[-14.4,-11.6].forEach(y=>{e.fillStyle="#c9b28a",e.beginPath(),e.arc(0,y,.5,0,7),e.fill()})}else if(f==="puffer")e.strokeStyle=j(i.shirt,-.35),e.lineWidth=.9,[-16.6,-13.6,-10.6].forEach(y=>{e.beginPath(),e.moveTo(-6.4*d,y),e.quadraticCurveTo(0,y+1.1,6.4*d,y),e.stroke()}),e.beginPath(),e.ellipse(0,-19.6,4.2,1.8,0,0,7),L(e,j(i.shirt,.15),1),ze(e,0,-19,0,-8.6,.7,j(i.shirt,-.45));else if(f==="raincoat")e.beginPath(),e.ellipse(0,-19.6,6.4*d,3.2,0,0,7),L(e,j(i.shirt,.12),1.2),[-17,-14.2,-11.4].forEach(y=>{e.fillStyle="#fff6ea",e.beginPath(),e.arc(0,y,.65,0,7),e.fill()}),[-1,1].forEach(y=>{Xe(e,y*3.6-1.8,-13,3.6,3,.8),e.lineWidth=.7,e.strokeStyle=j(i.shirt,-.3),e.stroke()}),ze(e,0,-19.4,0,-8.6,.5,j(i.shirt,-.35));else if(f==="labcoat")e.fillStyle="#fff",e.globalAlpha=.96,ge(),e.fill(),e.globalAlpha=1,Xe(e,-2.2,-19.4,4.4,10.8,.6),L(e,T,.7),[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*4.2,-19.6),e.lineTo(y*.5,-19.6),e.lineTo(y*1.4,-13.6),e.closePath(),L(e,"#f4f7fb",.8)}),Xe(e,-5.6,-14,3,3.2,.5),e.lineWidth=.6,e.strokeStyle="#9aa7b4",e.stroke(),ze(e,-4.6,-15.6,-4.6,-13.4,.7,"#3b6ea8"),ze(e,0,-13.6,0,-8.6,.5,"#9aa7b4");else if(f==="apron")Xe(e,-3.6,-17.8,7.2,9.8,1.4),L(e,T,1),ze(e,-3,-17.6,-4.6,-19.6,.9,T),ze(e,3,-17.6,4.6,-19.6,.9,T),Xe(e,-2,-13.4,4,3,.6),e.lineWidth=.6,e.strokeStyle=j(T,-.3),e.stroke(),ze(e,-3.6,-11,-6.8,-11.4,.8,T),ze(e,3.6,-11,6.8,-11.4,.8,T);else if(f==="polo")[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*4.2,-19.6),e.lineTo(y*.4,-19.6),e.lineTo(y*.3,-15.4),e.closePath(),L(e,j(i.shirt,.3),.8)}),ze(e,0,-17.6,0,-13.4,.5,j(i.shirt,-.3)),[-16.6,-14.6].forEach(y=>{e.fillStyle="#fff6ea",e.beginPath(),e.arc(0,y,.45,0,7),e.fill()});else if(f==="turtleneck"){e.beginPath(),e.ellipse(0,-19.7,4.4,2.6,0,0,7),L(e,j(i.shirt,.1),1);for(let y=-2;y<=2;y++)ze(e,y*1.3,-21.4,y*1.3,-18.2,.4,j(i.shirt,-.25))}else f==="cardigan"?(Xe(e,-2.3,-19.4,4.6,10.6,1),L(e,T,.9),[-1,1].forEach(y=>ze(e,y*2.3,-19.4,y*2.3,-9,.9,j(i.shirt,-.3))),[-17,-14,-11].forEach(y=>{e.fillStyle=j(i.shirt,.35),e.beginPath(),e.arc(1.2,y,.5,0,7),e.fill()})):f==="track"?(ze(e,0,-19.4,0,-9,.8,j(i.shirt,-.4)),[-1,1].forEach(y=>ze(e,y*6.1*d,-19.2,y*5.8*d,-9.6,1.1,T)),e.fillStyle=j(i.shirt,-.25),e.fillRect(-1.2,-19.6,2.4,1.4)):f==="dress"&&(e.fillStyle=j(i.shirt,-.35),e.fillRect(-6.4*d,-13.2,13.2*d,1.2))}else{let y=i.id%3;y===0?(e.fillStyle="rgba(255,255,255,.45)",e.fillRect(-6,-15.4,12,2.4)):y===2&&!u&&(e.fillStyle="#fff",e.beginPath(),e.moveTo(-3,-19.4),e.lineTo(0,-16),e.lineTo(3,-19.4),e.closePath(),L(e,"#fff",.9))}if(u&&it(),u?E!=="none"&&(Xe(e,-6,-19,12,10.5,4),L(e,F,1.3),e.fillStyle="rgba(255,255,255,.3)",e.fillRect(-4,-17.5,8,2)):!l&&E==="pack"?(ze(e,-3.6,-19.2,-3.6,-11,1.5,F),ze(e,3.6,-19.2,3.6,-11,1.5,F)):!l&&E==="messenger"&&(ze(e,-5.6,-19.2,5.2,-9.8,1.5,F),Xe(e,3.2,-12.6,5.6,5,1.6),L(e,F,1.1)),i.scarf&&(e.beginPath(),e.ellipse(0,-19.4,6.6*d,2.4,0,0,7),L(e,i.scarf,1.2),!u&&!l&&(Xe(e,1.6,-19,3.2,8,1.4),L(e,i.scarf,1.1),e.fillStyle="rgba(255,255,255,.4)",e.fillRect(1.9,-15.6,2.6,.9))),i.neckwear&&i.neckwear!=="none"&&!u){let y=i.neckColor||"#c4463c",R=i.neckwear;R==="necklace"?(e.beginPath(),e.moveTo(-3.4,-19.6),e.quadraticCurveTo(0,l?-15.6:-14.4,3.4,-19.6),e.strokeStyle=y,e.lineWidth=.8,e.stroke(),e.beginPath(),e.arc(0,l?-16.2:-15.2,1,0,7),L(e,y,.5)):R==="bowtie"?([-1,1].forEach(z=>{e.beginPath(),e.moveTo(0,-19),e.lineTo(z*3.6,-20.6),e.lineTo(z*3.6,-17.4),e.closePath(),L(e,y,.8)}),e.beginPath(),e.arc(0,-19,.9,0,7),L(e,j(y,.2),.6)):R==="tie"&&!l?(e.beginPath(),e.moveTo(-1.1,-19.6),e.lineTo(1.1,-19.6),e.lineTo(.9,-17.8),e.lineTo(-.9,-17.8),e.closePath(),L(e,y,.7),e.beginPath(),e.moveTo(-.9,-17.8),e.lineTo(.9,-17.8),e.lineTo(1.6,-11.6),e.lineTo(0,-10.4),e.lineTo(-1.6,-11.6),e.closePath(),L(e,y,.8)):R==="bandana"?(e.beginPath(),e.moveTo(-4.6,-20.4),e.quadraticCurveTo(0,-19.4,4.6,-20.4),e.lineTo(0,-15),e.closePath(),L(e,y,1),e.fillStyle="rgba(255,255,255,.55)",[[-2,-19],[1.6,-18.6],[-.2,-16.8]].forEach(([z,se])=>{e.beginPath(),e.arc(z,se,.5,0,7),e.fill()})):R==="lanyard"&&!l&&(ze(e,-2.6,-19.6,-.6,-12.6,.6,y),ze(e,2.6,-19.6,.6,-12.6,.6,y),Xe(e,-1.8,-12.8,3.6,4.6,.8),L(e,"#fffaf2",.7),e.fillStyle="#4F91C7",e.fillRect(-1.2,-12.2,2.4,.9))}at(),i.tag&&(e.beginPath(),e.moveTo(-6,-19.5),e.lineTo(-1,-8.5),e.lineTo(-6.6,-9),e.closePath(),e.fillStyle="#c4463c",e.fill(),e.beginPath(),e.moveTo(6,-19.5),e.lineTo(1,-8.5),e.lineTo(6.6,-9),e.closePath(),e.fill()),i.badge&&!u&&!l&&(e.beginPath(),e.arc(-3.8,-15.4,1.5,0,7),L(e,i.badge,.9)),l?H(h*1,!0):(H(-1),H(1)),p&&e.scale(1,1/m),e.save(),ie();let ce=(p?8.1:8.9)*M,Me=(p?9.2:8.3)*M;u&&Ae(),l||[-1,1].forEach(y=>{let R=i.earShape||"round";R==="pointy"?(e.beginPath(),e.moveTo(y*8.2,o-2),e.lineTo(y*12.6,o-5.6),e.lineTo(y*9,o+3.4),e.closePath(),L(e,i.skin,1),e.strokeStyle="rgba(160,90,80,.4)",e.lineWidth=.5,e.beginPath(),e.moveTo(y*9,o-1.6),e.lineTo(y*11,o-3.6),e.stroke()):(e.beginPath(),e.arc(y*(R==="big"?9.2:8.7),o+1,R==="big"?2.9:R==="small"?1.3:2,0,7),L(e,i.skin,1))}),(!u||!c0.includes(x))&&re(o+Me-3.4,o+Me+2.5,!0);{let y=i.faceShape||"oval",R=l?h*.6:0;e.beginPath(),y==="round"?e.ellipse(R,o,ce*1.05,Me*.96,0,0,7):y==="long"?e.ellipse(R,o,ce*.94,Me*1.07,0,0,7):y==="square"?Xe(e,R-ce*.98,o-Me*.94,ce*1.96,Me*1.9,5.8):y==="heart"?(e.moveTo(R-ce,o-1),e.bezierCurveTo(R-ce,o-Me*1.3,R+ce,o-Me*1.3,R+ce,o-1),e.bezierCurveTo(R+ce,o+Me*.5,R+2.2,o+Me*1.06,R,o+Me*1.05),e.bezierCurveTo(R-2.2,o+Me*1.06,R-ce,o+Me*.5,R-ce,o-1),e.closePath()):e.ellipse(R,o,ce,Me,0,0,7),L(e,i.skin,1.5)}e.fillStyle="rgba(120,70,60,.13)",e.beginPath(),e.ellipse(3,o+3,7.5,6,0,0,7),e.fill();let $e=[];if(!u){let y=(s*.9+i.id*1.7)%4<.13,R=l?[h*4.4]:[-3.5,3.5],z=i.eyeShape||"round",se=i.eyeColor,I=i.brow||"soft",Ce=i.browColor||i.hair;if(R.forEach((N,K)=>{let de=K===1&&i.eyeColor2?i.eyeColor2:se;if(y||z==="happy"||z==="wink"&&K===0&&!l)e.strokeStyle="#3a2a30",e.lineWidth=1.1,e.beginPath(),z==="happy"&&!y?e.arc(N,o+.6,1.7,Math.PI*1.1,Math.PI*1.9):(e.moveTo(N-1.6,o),e.lineTo(N+1.6,o)),e.stroke();else{let fe=p?.74:1,ee=(z==="wide"||z==="cute"?2.1:z==="oval"?1.4:1.7)*fe,oe=(z==="wide"||z==="oval"?2.7:z==="cute"?3.1:2.3)*(p?.82:1);if(e.fillStyle=de||"#3a2a30",e.beginPath(),e.ellipse(N,o,ee,oe,0,0,7),e.fill(),de&&(e.fillStyle="#2a1d22",e.beginPath(),e.ellipse(N,o+.2,ee*.5,oe*.55,0,0,7),e.fill()),e.fillStyle="#fff",e.beginPath(),e.arc(N-.5,o-.9,z==="wide"||z==="cute"?.95:.7,0,7),e.fill(),z==="cute"&&(e.beginPath(),e.arc(N+.7,o+1,.45,0,7),e.fill()),z==="tired"&&(e.strokeStyle=j(i.skin,.3),e.lineWidth=.7,e.beginPath(),e.moveTo(N-1.5,o+2.7),e.quadraticCurveTo(N,o+3.5,N+1.5,o+2.7),e.stroke()),(z==="sleepy"||z==="tired")&&(e.fillStyle=i.skin,e.beginPath(),e.ellipse(N,o-1.1,ee+.5,oe*.62,0,Math.PI,2*Math.PI),e.fill(),e.strokeStyle="#3a2a30",e.lineWidth=.9,e.beginPath(),e.moveTo(N-ee-.4,o-.6),e.lineTo(N+ee+.4,o-.6),e.stroke()),z==="lash"){e.strokeStyle="#3a2a30",e.lineWidth=.8;let me=l?h:K?1:-1;e.beginPath(),e.moveTo(N+me*ee,o-1),e.lineTo(N+me*(ee+1.4),o-2.2),e.moveTo(N+me*ee,o-.1),e.lineTo(N+me*(ee+1.6),o-.6),e.stroke()}}if(!y&&i.eyeShadow&&z!=="happy"&&(e.fillStyle=i.eyeShadow,e.globalAlpha=.55,e.beginPath(),e.ellipse(N,o-2.1,2.6,1.2,0,0,7),e.fill(),e.globalAlpha=1),!y&&i.liner&&z!=="happy"){e.strokeStyle="#2a1d22",e.lineWidth=.8,e.lineCap="round";let fe=l?h:K?1:-1;e.beginPath(),e.moveTo(N-2.2,o-1.7),e.quadraticCurveTo(N,o-3,N+2.2,o-1.7),e.lineTo(N+fe*3.6,o-2.7),e.stroke()}if($e.push(()=>{if(I!=="none"){let fe=(I==="thick"?1.6:I==="thin"?.6:.9)+(p?.45:0),ee=j(Ce,-.3);e.lineCap="round";let oe=()=>{e.strokeStyle="rgba(255,246,234,.38)",e.lineWidth=fe+1.1,e.stroke(),e.strokeStyle=ee,e.lineWidth=fe,e.stroke()};if(e.beginPath(),I==="worried"||I==="angled"){let me=I==="worried"?1:-1,Fe=l?0:K?1:0,ye=Fe?4.8:3.2,ve=Fe?3.2:4.8;e.moveTo(N-2,o-(me>0?ye:ve)),e.lineTo(N+2,o-(me>0?ve:ye))}else if(I==="arch")e.moveTo(N-2,o-3.2),e.quadraticCurveTo(N,o-5.2,N+2,o-3.6);else if(p){let me=l||K?1:-1;e.moveTo(N-2.2*me,o-3.5),e.lineTo(N+2.2*me,o-4.3)}else e.moveTo(N-2,o-3.6),e.lineTo(N+2,o-3.9);oe()}I==="unibrow"&&K===0&&!l&&(e.lineCap="round",e.beginPath(),e.moveTo(-3.8,o-3.7),e.lineTo(3.8,o-3.7),e.strokeStyle="rgba(255,246,234,.38)",e.lineWidth=2.7,e.stroke(),e.strokeStyle=j(Ce,-.3),e.lineWidth=1.2,e.stroke())}),i.glasses){let fe=i.glasses===!0?"round":i.glasses,ee=i.glassColor||"#5b4048";e.strokeStyle=ee,e.lineWidth=fe==="sun"?1:.9,e.beginPath(),fe==="square"?e.roundRect(N-3.1,o-2.6,6.2,5.2,1.2):fe==="cat"?(e.ellipse(N,o,3.2,2.7,0,0,7),e.moveTo(N+(l?h:K?1:-1)*3,o-1.6),e.lineTo(N+(l?h:K?1:-1)*4.4,o-3.4)):fe==="half"?e.arc(N,o,3.2,Math.PI,0):e.arc(N,o,3.2,0,7),fe==="sun"&&(e.fillStyle="rgba(40,30,40,.82)",e.fill()),e.stroke()}}),i.glasses&&!l&&(e.strokeStyle=i.glassColor||"#5b4048",e.lineWidth=.9,e.beginPath(),e.moveTo(-.3,o-.5),e.lineTo(.3,o-.5),e.stroke()),(p?i.blush===!0:i.blush!==!1)&&(e.fillStyle=i.blushColor||(p?"rgba(255,110,125,.14)":"rgba(255,110,125,.38)"),(l?[h*6.4]:[-6,6]).forEach(N=>{e.beginPath(),e.ellipse(N,o+3.4,2.1,1.3,0,0,7),e.fill()})),i.freckles&&(e.fillStyle=j(i.skin,.32),(l?[[h*5.6,o+2.2],[h*6.8,o+3.2],[h*5.2,o+3.8]]:[[-5.6,o+2.4],[-4.2,o+3.4],[-6.4,o+3.8],[5.6,o+2.4],[4.2,o+3.4],[6.4,o+3.8]]).forEach(([N,K])=>{e.beginPath(),e.arc(N,K,.5,0,7),e.fill()})),i.mole&&(e.fillStyle="#4a2f2a",e.beginPath(),e.arc(l?h*6:4.4,o+5.2,.65,0,7),e.fill()),i.mark&&i.mark!=="none"){let N=i.mark,K=l?h*5.4:4.8;N==="bandaid"?(e.save(),e.translate(K,o+3.4),e.rotate(-.5),Xe(e,-2.4,-.9,4.8,1.8,.6),L(e,"#f2c9a0",.7),e.fillStyle="#d9a070",e.fillRect(-.6,-.9,1.2,1.8),e.restore()):N==="dimples"?(e.strokeStyle=j(i.skin,.3),e.lineWidth=.6,e.lineCap="round",(l?[h*5.4]:[-4.6,4.6]).forEach(de=>{e.beginPath(),e.arc(de,o+4.4,.8,-.7,.8),e.stroke()})):N==="birthmark"?(e.fillStyle="rgba(120,70,50,.38)",e.beginPath(),e.ellipse(l?h*5.6:-5,o+2.8,1.5,1.1,.4,0,7),e.fill()):N==="braces"||(N==="star"?ys(e,l?h*5.6:-5.2,o+3.2,1.6,"#EAB94E"):N==="paint"?(l?[h*5.6]:[-5.4,5.4]).forEach(de=>Gl(e,de,o+3.2,1,"#e8789a")):N==="scar"?(e.strokeStyle=j(i.skin,.45),e.lineWidth=.7,e.beginPath(),e.moveTo(K-.6,o-5.2),e.lineTo(K+.8,o-2.2),e.stroke(),e.lineWidth=.4,e.beginPath(),e.moveTo(K-1,o-4.2),e.lineTo(K+.6,o-4.6),e.moveTo(K-.6,o-3),e.lineTo(K+1.1,o-3.4),e.stroke()):N==="glitter"&&(e.fillStyle="#fff6ea",[[-5.6,o+2.6],[-4.4,o+3.6],[-6.4,o+3.8],[5.6,o+2.6],[4.4,o+3.6],[6.4,o+3.8]].forEach(([de,fe],ee)=>{e.beginPath(),e.arc(l?h*(Math.abs(de)-.4):de,fe,.55,0,7),e.fillStyle=ee%2?"#f8d977":"#bfe6f5",e.fill()})))}if(i.nose||p||i.noseShape&&i.noseShape!=="button"){e.strokeStyle=j(i.skin,.3),e.lineWidth=.8,e.lineCap="round",e.beginPath();let N=l?h*6.4:0,K=i.noseShape||"button";K==="pointy"?(e.moveTo(N,o+.6),e.lineTo(N+(l?h*1.2:-.9),o+3.2),e.lineTo(N+(l?0:.9),o+3.2),e.stroke()):K==="wide"?(e.arc(N-(l?0:.8),o+2.8,.8,.1*Math.PI,.9*Math.PI),e.stroke(),e.beginPath(),e.arc(N+(l?h*.8:.8),o+2.8,.8,.1*Math.PI,.9*Math.PI),e.stroke()):K==="round"?(e.fillStyle=j(i.skin,.12),e.arc(N,o+2.4,1.2,0,7),e.fill(),e.stroke()):(e.arc(N,o+2.6,.9,.1*Math.PI,.9*Math.PI),e.stroke())}i.nosePin&&!u&&(e.beginPath(),e.arc(l?h*6.9:1.9,o+3.2,.65,0,7),L(e,i.nosePin,.4)),h0(e,i,o,l,h);let pe=l?h*3.6:0,C=o+4.7,v=i.mouthStyle||"smile",V=i.lip||"#8a4650";i.mouth?(e.fillStyle="#7A3B3B",e.beginPath(),e.ellipse(pe,o+4.8,1.7,.7+i.mouth*1.5,0,0,7),e.fill()):v==="grin"?(e.beginPath(),e.moveTo(pe-2.4,C-.9),e.quadraticCurveTo(pe,C+2.8,pe+2.4,C-.9),e.closePath(),e.fillStyle="#fff",e.fill(),e.strokeStyle=V,e.lineWidth=.9,e.stroke()):v==="smirk"?(e.strokeStyle=V,e.lineWidth=1,e.lineCap="round",e.beginPath(),e.moveTo(pe-1.8,C),e.quadraticCurveTo(pe+.4,C+1,pe+2.2,C-.8),e.stroke()):v==="flat"?(e.strokeStyle=V,e.lineWidth=1,e.lineCap="round",e.beginPath(),e.moveTo(pe-1.5,C),e.lineTo(pe+1.5,C),e.stroke()):v==="o"?(e.fillStyle="#7A3B3B",e.beginPath(),e.ellipse(pe,C+.2,1,1.2,0,0,7),e.fill()):v==="tongue"?(e.beginPath(),e.moveTo(pe-2.2,C-.8),e.quadraticCurveTo(pe,C+2.6,pe+2.2,C-.8),e.closePath(),e.fillStyle="#7A3B3B",e.fill(),e.beginPath(),e.ellipse(pe+.2,C+1.1,1.1,.9,0,0,7),e.fillStyle="#f08a9a",e.fill()):v==="teeth"?(e.beginPath(),e.moveTo(pe-2.5,C-.7),e.quadraticCurveTo(pe,C+3,pe+2.5,C-.7),e.closePath(),e.fillStyle="#fff",e.fill(),e.strokeStyle=V,e.lineWidth=.8,e.stroke(),e.beginPath(),e.moveTo(pe-2.2,C-.1),e.lineTo(pe+2.2,C-.1),e.strokeStyle="rgba(122,59,59,.45)",e.lineWidth=.4,e.stroke()):v==="pout"?(e.beginPath(),e.ellipse(pe,C+.3,1.3,.85,0,0,7),e.fillStyle=V,e.fill()):v==="gap"?(e.strokeStyle=V,e.lineWidth=1,e.lineCap="round",e.beginPath(),e.arc(pe,C-.6,2.1,.12*Math.PI,.88*Math.PI),e.stroke(),e.fillStyle="#fff",e.fillRect(pe-1.1,C+1.3,.9,1),e.fillRect(pe+.2,C+1.3,.9,1)):v==="cat"?(e.strokeStyle=V,e.lineWidth=.9,e.lineCap="round",e.beginPath(),e.arc(pe-1,C-.4,1.1,.1*Math.PI,.9*Math.PI),e.arc(pe+1,C-.4,1.1,.1*Math.PI,.9*Math.PI),e.stroke()):(e.strokeStyle=V,e.lineWidth=1,e.lineCap="round",e.beginPath(),e.arc(pe,o+(p?5.4:4.6),p?1.35:1.7,.15*Math.PI,.85*Math.PI),e.stroke())}if(!u&&i.mark==="braces"){let y=l?h*3.6:0;e.strokeStyle="#9da7aa",e.lineWidth=.7,e.beginPath(),e.moveTo(y-1.8,o+5.2),e.quadraticCurveTo(y,o+6,y+1.8,o+5.2),e.stroke(),e.fillStyle="#9da7aa";for(let R=-1;R<=1;R++)e.beginPath(),e.arc(y+R*1.1,o+5.6-Math.abs(R)*.15,.35,0,7),e.fill()}if(!u&&_e==="mask"){e.beginPath(),l?(e.moveTo(h*2,o+1.4),e.lineTo(h*8.4,o+2.4),e.lineTo(h*7.6,o+8.4),e.lineTo(h*2,o+8.6)):(e.moveTo(-7.4,o+1.8),e.lineTo(7.4,o+1.8),e.lineTo(6.8,o+8),e.quadraticCurveTo(0,o+10.6,-6.8,o+8)),e.closePath(),L(e,"#d9eef8",1),e.strokeStyle="rgba(60,110,150,.45)",e.lineWidth=.5;for(let y of[3.8,5.8,7.6])e.beginPath(),e.moveTo(l?h*2.4:-6.6,o+y),e.lineTo(l?h*7.6:6.6,o+y+.2),e.stroke();l||(e.strokeStyle=Lt,e.lineWidth=.7,e.beginPath(),e.moveTo(-7.4,o+2.6),e.lineTo(-9,o+1),e.moveTo(7.4,o+2.6),e.lineTo(9,o+1),e.stroke())}!u&&_e==="eyepatch"&&(e.beginPath(),e.ellipse(l?h*4.4:3.5,o,2.7,2.5,0,0,7),L(e,"#2a2a32",1),l||(e.strokeStyle="#2a2a32",e.lineWidth=.8,e.beginPath(),e.moveTo(.9,o-.6),e.lineTo(-8.8,o-2.4),e.moveTo(6,o-.8),e.lineTo(8.8,o-2.6),e.stroke()));let D=l?-h*1.6:0,ke=()=>{let y=l?h:1,R=l?-1.6:0;l&&(e.save(),e.scale(y,1)),e.beginPath(),l?(e.moveTo(-9.2+R,o+5.4),e.lineTo(-9.3+R,o+.5),e.bezierCurveTo(-11+R,o-14,11+R,o-14,9.3+R,o+.5),e.quadraticCurveTo(7+R,o-5.4,4+R,o-4.6),e.lineTo(-2.6+R,o-1.6),e.lineTo(-5.4+R,o+3.6)):(e.moveTo(-9.3,o+.5),e.bezierCurveTo(-11,o-14,11,o-14,9.3,o+.5),e.quadraticCurveTo(6,o-3.4,2,o-4.4),e.quadraticCurveTo(-3,o-6,-9.3,o+.5)),e.closePath(),l&&e.restore()};if(u&&x==="bald")e.beginPath(),e.ellipse(0,o-.4,9.4,8.9,0,0,7),L(e,i.skin,1.4),e.fillStyle="rgba(255,255,255,.25)",e.beginPath(),e.ellipse(-2.5,o-4,3.5,2,0,0,7),e.fill();else if(u&&(x==="balding"||x==="fade"||x==="undercut"||x==="mohawk"||x==="sidecut"))e.beginPath(),e.ellipse(0,o-.4,9.4,8.9,0,0,7),L(e,x==="balding"||x==="fade"?X:i.skin,1.4),x==="balding"?(e.beginPath(),e.ellipse(0,o-5,6,4.4,0,0,7),L(e,i.skin,1)):x==="fade"?(e.fillStyle=U(0,o-9,0,o+8,[[0,A],[.45,A],[.95,i.skin]]),e.beginPath(),e.ellipse(0,o-.4,9.2,8.7,0,0,7),e.fill()):(e.beginPath(),e.ellipse(0,o-6,x==="mohawk"?2.6:6.4,5,0,0,7),L(e,X,1.1));else if(u)e.beginPath(),e.ellipse(0,o-.4,9.4,8.9,0,0,7),L(e,X,1.4),e.fillStyle="rgba(255,255,255,.2)",e.beginPath(),e.ellipse(-2.5,o-4,3.5,2,0,0,7),e.fill();else if(x==="buzz")e.beginPath(),e.moveTo(-8.8+D,o-1.2),e.bezierCurveTo(-10+D,o-11,10+D,o-11,8.8+D,o-1.2),e.quadraticCurveTo(0,o-4.6,-8.8+D,o-1.2),e.closePath(),L(e,X,1.3);else if(x==="undercut")ke(),L(e,i.skin,1.3),e.fillStyle="rgba(90,60,60,.10)",e.fill(),e.beginPath(),e.moveTo(-7+D,o-4),e.bezierCurveTo(-8+D,o-17,9+D,o-16,7.4+D,o-4),e.quadraticCurveTo(0,o-6,-7+D,o-4),e.closePath(),L(e,X,1.3);else if(x==="spiky"||x==="messy"){ke(),L(e,X,1.4);let y=x==="spiky"?6:4;for(let R=0;R<y;R++){let z=-Math.PI*(.12+.76*R/(y-1)),se=Math.cos(z+Math.PI)*7.6+D,I=o-3+Math.sin(z)*5.4,Ce=x==="spiky"?6.4:4.4+R%2*1.6;e.beginPath(),e.moveTo(se-2.1,I+1.4),e.lineTo(se+(R-y/2)*.8,I-Ce),e.lineTo(se+2.1,I+1.4),e.closePath(),L(e,X,1.2)}ke(),L(e,X,1.2)}else if(x==="sidebang"||x==="pixie")ke(),L(e,X,1.4),e.beginPath(),e.moveTo(-9+D,o-6),e.quadraticCurveTo(2+D,o-12,9.4+D,o-1.4),e.quadraticCurveTo(x==="pixie"?4+D:-1+D,o-3.6,-9+D,o-6),e.closePath(),L(e,X,1.2),x==="pixie"&&!l&&[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*9.2,o-1),e.lineTo(y*10.4,o+5),e.lineTo(y*7.6,o+1),e.closePath(),L(e,X,1)});else if(x==="curtains")ke(),L(e,X,1.4),l||(e.strokeStyle=j(A,.35),e.lineWidth=1,e.beginPath(),e.moveTo(0,o-9.4),e.quadraticCurveTo(-1.2,o-6,-.2,o-3.6),e.stroke());else if(x==="bald")e.fillStyle="rgba(255,255,255,.28)",e.beginPath(),e.ellipse(-3+D,o-6.4,3,1.4,-.3,0,7),e.fill();else if(x==="fade")ke(),L(e,U(0,o-10,0,o+1,[[0,A],[.42,A],[.9,i.skin]]),1.3),e.fillStyle="rgba(90,60,60,.08)",e.fill(),e.beginPath(),e.moveTo(-6.4+D,o-5.2),e.bezierCurveTo(-7.4+D,o-16,8.4+D,o-15.4,6.6+D,o-5.2),e.quadraticCurveTo(D,o-7.6,-6.4+D,o-5.2),e.closePath(),L(e,X,1.2);else if(x==="sidecut")ke(),L(e,X,1.4),e.beginPath(),l?e.ellipse(-h*1.4,o-2.6,3,3.8,0,0,7):(e.moveTo(-9.2,o+.4),e.bezierCurveTo(-9.8,o-6.4,-6.6,o-8.4,-4.6,o-3.8),e.lineTo(-4.6,o+.2),e.quadraticCurveTo(-7,o+1.2,-9.2,o+.4),e.closePath()),L(e,i.skin,1),e.fillStyle="rgba(90,60,60,.09)",e.fill();else if(x==="balding")ke(),L(e,X,1.4),e.beginPath(),e.ellipse(l?-h*1.6:0,o-6.4,l?5.4:6.8,4.6,0,0,7),L(e,i.skin,1),e.fillStyle="rgba(255,255,255,.3)",e.beginPath(),e.ellipse(-2.2+D,o-8,2.4,1.1,-.3,0,7),e.fill();else if(x==="receding")ke(),L(e,X,1.4),l?(e.beginPath(),e.moveTo(h*6.4+D,o-6),e.quadraticCurveTo(h*8.8+D,o-3.6,h*9+D,o),e.quadraticCurveTo(h*5.6+D,o-2.4,h*6.4+D,o-6),e.closePath(),L(e,i.skin,1)):[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*9.2,o-1.2),e.quadraticCurveTo(y*6.8,o-8,y*2.4,o-4.8),e.quadraticCurveTo(y*5.6,o-3.8,y*6.4,o+.2),e.closePath(),L(e,i.skin,1)});else if(x==="flattop")e.beginPath(),e.moveTo(-8.8+D,o-1),e.lineTo(-8.5+D,o-12.6),e.quadraticCurveTo(D,o-13.8,8.5+D,o-12.6),e.lineTo(8.8+D,o-1),e.quadraticCurveTo(D,o-4.6,-8.8+D,o-1),e.closePath(),L(e,X,1.3),e.fillStyle="rgba(255,255,255,.18)",e.fillRect(-6+D,o-12.2,12,1.2);else if(x==="pompadour")ke(),L(e,X,1.4),e.beginPath(),e.moveTo(-8.4+D,o-4),e.bezierCurveTo(-12+D,o-19,10+D,o-21,9+D,o-4),e.quadraticCurveTo(D,o-9,-8.4+D,o-4),e.closePath(),L(e,X,1.3);else if(x==="quiff")ke(),L(e,X,1.4),e.beginPath(),e.moveTo(-3+D,o-7),e.bezierCurveTo(-5+D,o-16,9+D,o-17.5,8.4+D,o-5),e.quadraticCurveTo(3+D,o-8.4,-3+D,o-7),e.closePath(),L(e,X,1.3);else if(x==="bantuknots")ke(),L(e,X,1.4),[[-6.8,-6.6],[-3.4,-10],[0,-11.4],[3.4,-10],[6.8,-6.6]].forEach(([y,R])=>{e.beginPath(),e.arc(y+D,o+R,2.7,0,7),L(e,X,1.1),e.strokeStyle=j(A,-.3),e.lineWidth=.5,e.beginPath(),e.arc(y+D,o+R,1.2,0,5),e.stroke()});else if(x==="highpony")ke(),L(e,X,1.4),e.beginPath(),e.arc(D,o-10.4,2.4,0,7),L(e,j(A,-.15),1.1),e.beginPath(),e.arc(D,o-12.6,1.3,0,7),L(e,"#e07a66",.8);else if(x==="hime")ke(),L(e,X,1.4),l||[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*8.2,o-2),e.lineTo(y*9.6,o+9.4),e.lineTo(y*7.4,o+9.4),e.lineTo(y*7,o),e.closePath(),L(e,X,1)});else if(x==="mohawk"){e.beginPath(),e.moveTo(-8.8+D,o-1.4),e.bezierCurveTo(-10+D,o-10,10+D,o-10,8.8+D,o-1.4),e.quadraticCurveTo(D,o-4.4,-8.8+D,o-1.4),e.closePath(),L(e,i.skin,1.1),e.fillStyle="rgba(90,60,60,.10)",e.fill();let y=l?3:3.4;e.beginPath(),e.moveTo(-y+D,o-3.6);for(let R=0;R<5;R++){let z=-y+2*y*R/4;e.lineTo(z+D,o-11.4-(R===2?2.6:R%2?.6:0)),R<4&&e.lineTo(z+y/4+D,o-9.6)}e.lineTo(y+D,o-3.6),e.closePath(),L(e,X,1.2)}else x==="bowl"?(e.beginPath(),e.moveTo(-10+D,o+3.4),e.bezierCurveTo(-11.6+D,o-14,11.6+D,o-14,10+D,o+3.4),e.lineTo(8.6+D,o-1.4),e.quadraticCurveTo(D,o-4.4,-8.6+D,o-1.4),e.closePath(),L(e,X,1.3)):x==="slick"?(ke(),L(e,X,1.4),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=1.4,e.lineCap="round",e.beginPath(),e.moveTo(-6+D,o-7.4),e.quadraticCurveTo(D,o-11,6+D,o-6.6),e.stroke()):x==="cornrows"?(ke(),L(e,X,1.4),e.strokeStyle=j(A,.38),e.lineWidth=.8,e.lineCap="round",[-6,-3.6,-1.2,1.2,3.6,6].forEach(y=>{e.beginPath(),e.moveTo(y*1.15+D,o-3.6+Math.abs(y)*.22),e.quadraticCurveTo(y*.9+D,o-8,y*.35+D,o-11),e.stroke()})):x==="afro"?(e.beginPath(),e.moveTo(-9+D,o-1),e.bezierCurveTo(-10+D,o-13,10+D,o-13,9+D,o-1),e.quadraticCurveTo(0+D,o-5.4,-9+D,o-1),e.closePath(),L(e,X,1.3)):(ke(),L(e,X,1.4));if(x!=="buzz"){e.save(),e.strokeStyle=j(A,-.34),e.globalAlpha=.75,e.lineWidth=.6,e.lineCap="round";let y=z=>z<0?-1:1,R=(z,se)=>(z/9)**2+((se-(o-3))/8)**2<1&&se<o-1;if(ne==="curly"||ne==="coily"){let z=ne==="coily"?.85:1.35,se=ne==="coily"?2.3:3.1;for(let I=o-10;I<o-1.6;I+=se*.86)for(let Ce=-8+(Math.round(I)&1?se/2:0);Ce<8.4;Ce+=se)R(Ce,I)&&(e.beginPath(),e.arc(Ce+D,I,z,0,Math.PI*1.75),e.stroke())}else if(ne==="braided")for(let z=0;z<5;z++)e.beginPath(),e.moveTo(-4.6+D,o-10.4+z*1.9),e.lineTo(D,o-8.4+z*1.9),e.lineTo(4.6+D,o-10.4+z*1.9),e.stroke();else if(ne==="silky")e.globalAlpha=.9,e.strokeStyle="rgba(255,255,255,.62)",e.lineWidth=1.7,[[-6,-2.2],[1.2,3.6]].forEach(([z,se])=>{e.beginPath(),e.moveTo(z+D,o-6.6),e.quadraticCurveTo((z+se)/2+D,o-10,se+D,o-6.2),e.stroke()});else if(ne==="wavy"){let z=(se,I)=>{e.beginPath(),e.moveTo(se*.4+D,o-10+Math.abs(se)*.2),e.quadraticCurveTo(se*1.1+1.8*I+D,o-8,se*1.2+D,o-6),e.quadraticCurveTo(se*1.2-1.8*I+D,o-4,se*1.45+D,o-1.6),e.stroke()};(u?[-6,-3,0,3,6]:[-6,-3.4,3.4,6]).forEach((se,I)=>z(se,I&1?1:-1))}else u?[-6,-3.2,0,3.2,6].forEach(z=>{e.beginPath(),e.moveTo(z*.25,o-7.6),e.quadraticCurveTo(z*1,o-3,z*1.3,o+5.6),e.stroke()}):l?[0,1,2,3].forEach(z=>{e.beginPath(),e.moveTo(D+h*(2.8-z*1.8),o-9.6+z*.5),e.quadraticCurveTo(D-h*(1.2+z*1.6),o-6.2+z,D-h*(7.6+z*.2),o-.6+z*1.6),e.stroke()}):[-6,-3.4,3.4,6].forEach(z=>{e.beginPath(),e.moveTo(z*.4,o-10+Math.abs(z)*.2),e.quadraticCurveTo(z*1.15,o-7.2,z*1.4+y(z)*.9,o-1.6+Math.abs(z)*.15),e.stroke()});if(ne==="frizzy"){e.strokeStyle=j(A,-.15),e.lineWidth=.7;for(let z=0;z<12;z++){let se=Math.PI*(1.06+.88*z/11),I=9,Ce=10.6+z%3*.7,pe=l?h*.6:0;e.beginPath(),e.moveTo(pe+Math.cos(se)*I,o+Math.sin(se)*(I-.6)),e.quadraticCurveTo(pe+Math.cos(se+.1)*(Ce+.8),o+Math.sin(se+.1)*(Ce-.4),pe+Math.cos(se+.22*(z%2?1:-1))*Ce,o+Math.sin(se)*(Ce+.4)),e.stroke()}}e.restore()}!u&&i.hair2&&G==="stripes"&&(e.save(),e.strokeStyle=i.hair2,e.lineWidth=1.5,e.lineCap="round",[-5,-1.6,2,5.2].forEach(y=>{e.beginPath(),e.moveTo(y*.4+D,o-10.4),e.quadraticCurveTo(y*1.15+D,o-7.4,y*1.35+D,o-2.6),e.stroke()}),e.restore()),!u&&i.hair2&&G==="frontpiece"&&(e.beginPath(),e.moveTo(-1.5+D,o-10),e.quadraticCurveTo(-8+D,o-7,-9.2+D,o+3.4),e.quadraticCurveTo(-4.6+D,o-3,-1.5+D,o-10),e.closePath(),L(e,i.hair2,1)),u&&i.hair2&&(G==="underlayer"||G==="stripes"||G==="frontpiece")&&(e.save(),e.strokeStyle=i.hair2,e.lineWidth=1.4,e.lineCap="round",[-4,0,4].forEach(y=>{e.beginPath(),e.moveTo(y*.3,o-8),e.quadraticCurveTo(y*1.1,o-3,y*1.3,o+5),e.stroke()}),e.restore()),!u&&i.hair2&&G==="streak"&&(e.strokeStyle=i.hair2,e.lineWidth=1.3,e.lineCap="round",e.beginPath(),e.moveTo(-5+D,o-6.2),e.quadraticCurveTo(-3+D,o-8.6,0+D,o-9),e.moveTo(1+D,o-9),e.quadraticCurveTo(4+D,o-8,6+D,o-5.4),e.stroke()),u||(e.fillStyle="rgba(255,255,255,.22)",e.beginPath(),e.ellipse(-3+D,o-6.4,3.4,1.5,-.3,0,7),e.fill()),(x==="long"||x==="wavy"||x==="locs"||x==="halfup")&&!u&&!l&&[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*8.2,o-1),e.quadraticCurveTo(y*10.6,o+4,y*9.6,o+11),e.quadraticCurveTo(y*8.8,o+12,y*8.2,o+10.2),e.quadraticCurveTo(y*8.6,o+4,y*8.2,o-1),e.closePath(),L(e,X,1)}),l&&!u&&(e.beginPath(),e.ellipse(-h*1.2+h*.6,o+2.2,1.5,2.2,0,0,7),L(e,i.skin,1),e.fillStyle="rgba(160,90,80,.25)",e.beginPath(),e.ellipse(-h*1.2+h*.6,o+2.4,.6,1.1,0,0,7),e.fill(),i.glasses&&(e.strokeStyle=i.glassColor||"#5b4048",e.lineWidth=.9,e.beginPath(),e.moveTo(h*1.1,o-.6),e.lineTo(-h*.6,o+.9),e.stroke()));let ot=["buzz","bald","mohawk","afro","curly","balding","fade","bantuknots","flattop","pompadour","quiff","bowl","hime","undercut","sidecut","receding","bun","topknot","twinbuns"].includes(x);if(!u&&i.fringe&&i.fringe!=="none"&&!l&&!ot){let y=i.fringe;y==="straight"?(e.beginPath(),e.moveTo(-9+D,o-5.6),e.quadraticCurveTo(D,o-10.8,9+D,o-5.6),e.lineTo(8.6+D,o-1.6),e.quadraticCurveTo(D,o-3,-8.6+D,o-1.6),e.closePath(),L(e,X,1.1)):y==="side"?(e.beginPath(),e.moveTo(-9+D,o-6),e.quadraticCurveTo(2+D,o-12,9.4+D,o-1.4),e.quadraticCurveTo(-1+D,o-3.6,-9+D,o-6),e.closePath(),L(e,X,1.1)):y==="curtain"?[-1,1].forEach(R=>{e.beginPath(),e.moveTo(D,o-9.8),e.quadraticCurveTo(R*8+D,o-8.4,R*8.8+D,o-.6),e.quadraticCurveTo(R*4.6+D,o-3.4,D,o-9.8),e.closePath(),L(e,X,1)}):y==="wispy"&&[-6,-3.6,-1.2,1.2,3.6,6].forEach((R,z)=>{e.beginPath(),e.moveTo(R-1.2+D,o-5.4),e.lineTo(R+(z%2?.5:-.5)+D,o-.2+z%3*.5),e.lineTo(R+1.2+D,o-5.4),e.closePath(),L(e,X,.8)})}if(!u&&i.part&&i.part!=="none"&&!ot&&x!=="mohawk"){let y=i.part==="left"?-2.6:i.part==="right"?2.6:0;e.strokeStyle=j(A,.42),e.lineWidth=.6,e.lineCap="round",e.beginPath(),e.moveTo(y+D,o-9.8),e.quadraticCurveTo(y*1.3+D,o-6.8,y*1.6+D,o-3.8),e.stroke()}u||$e.forEach(y=>y()),i.clip&&!u&&(e.save(),e.translate(l?-h*1.4+D:6.4,o-6.2),e.rotate(l?0:-.5),[0,1].forEach(y=>{Xe(e,-2+y*1.2,-.7+y*1.8,4.4,1.5,.7),L(e,i.clip,.8)}),e.restore());let De=i.hatColor||"#e07a66",st=i.hat;if(i.earrings&&!u&&(l?[-h*.6]:[-9,9]).forEach(y=>{let R=i.earStyle||"stud";R==="hoop"?(e.beginPath(),e.arc(y,o+6.2,2.1,0,7),e.strokeStyle=Lt,e.lineWidth=2.2,e.stroke(),e.strokeStyle=i.earrings,e.lineWidth=1.1,e.stroke()):R==="dangle"?(ze(e,y,o+4.4,y,o+7.4,.7,i.earrings),e.beginPath(),e.arc(y,o+8.2,1.3,0,7),L(e,i.earrings,.8),e.beginPath(),e.arc(y,o+4.4,.7,0,7),L(e,i.earrings,.6)):R==="pearl"?(e.beginPath(),e.arc(y,o+4.8,1.5,0,7),L(e,"#fff6ea",.8),e.fillStyle="rgba(255,255,255,.8)",e.beginPath(),e.arc(y-.4,o+4.3,.4,0,7),e.fill()):R==="cuff"?(e.beginPath(),e.arc(y,o+2.2,1.1,0,7),L(e,i.earrings,.7),e.beginPath(),e.arc(y,o+4.6,1.2,0,7),L(e,i.earrings,.8)):(e.beginPath(),e.arc(y,o+4.6,1.2,0,7),L(e,i.earrings,.8))}),st==="cap")e.beginPath(),e.moveTo(-9.4+D,o-2.8),e.bezierCurveTo(-9.8+D,o-15,9.8+D,o-15,9.4+D,o-2.8),e.closePath(),L(e,De,1.3),u||(e.beginPath(),l?e.ellipse(h*9.2+D,o-3,5.2,1.7,0,0,7):e.ellipse(0,o-2.6,7.4,2,0,0,7),L(e,j(De,.18),1.1)),e.beginPath(),e.arc(0,o-12.2,1,0,7),L(e,j(De,.2),.8);else if(st==="beanie")e.beginPath(),e.moveTo(-9.8+D,o-2.4),e.bezierCurveTo(-10.4+D,o-17,10.4+D,o-17,9.8+D,o-2.4),e.closePath(),L(e,De,1.3),Xe(e,-10+D,o-4.6,20,3.8,1.6),L(e,j(De,-.25),1.1),e.beginPath(),e.arc(D,o-14,2.3,0,7),L(e,j(De,-.35),1);else if(st==="bucket")e.beginPath(),e.moveTo(-8+D,o-4),e.lineTo(-7+D,o-11.4),e.lineTo(7+D,o-11.4),e.lineTo(8+D,o-4),e.closePath(),L(e,De,1.3),e.beginPath(),e.ellipse(D,o-4.4,12.2,2.8,0,0,7),L(e,j(De,.1),1.2);else if(st==="beret")e.beginPath(),e.ellipse(2+D,o-8.6,9,3.6,-.12,0,7),L(e,De,1.3),e.beginPath(),e.arc(3+D,o-12.2,1,0,7),L(e,j(De,.25),.8);else if(st==="crown")e.beginPath(),e.moveTo(-6+D,o-8),e.lineTo(-6.6+D,o-14),e.lineTo(-3+D,o-11),e.lineTo(0+D,o-15.4),e.lineTo(3+D,o-11),e.lineTo(6.6+D,o-14),e.lineTo(6+D,o-8),e.closePath(),L(e,i.hatColor||"#EAB94E",1.2),[-3,0,3].forEach(y=>{e.beginPath(),e.arc(y+D,o-9.4,.7,0,7),e.fillStyle="#e07a66",e.fill()});else if(st==="catears")[-1,1].forEach(y=>{e.beginPath(),e.moveTo(y*2.6+D,o-8.4),e.lineTo(y*6.2+D,o-15.6),e.lineTo(y*9+D,o-6.2),e.closePath(),L(e,A,1.2),e.beginPath(),e.moveTo(y*4.2+D,o-8.8),e.lineTo(y*6.2+D,o-12.8),e.lineTo(y*7.6+D,o-7.6),e.closePath(),e.fillStyle="#f0a6b5",e.fill()});else if(st==="headphones")e.strokeStyle=Lt,e.lineWidth=3.6,e.beginPath(),e.arc(D,o-.5,10.4,Math.PI*1.06,Math.PI*1.94),e.stroke(),e.strokeStyle=De,e.lineWidth=2,e.stroke(),u||(l?[h*9.2]:[-9.8,9.8]).forEach(y=>{Xe(e,y-1.7,o-3,3.4,6.2,1.4),L(e,De,1.1)});else if(st==="bandana")e.beginPath(),e.moveTo(-9.4+D,o-1.2),e.bezierCurveTo(-10+D,o-14,10+D,o-14,9.4+D,o-1.2),e.quadraticCurveTo(D,o-5,-9.4+D,o-1.2),e.closePath(),L(e,De,1.2),e.fillStyle="rgba(255,255,255,.55)",[[-5,-6.6],[-1.6,-8.4],[2.4,-7.6],[5.6,-5.6],[0,-5.6]].forEach(([y,R])=>{e.beginPath(),e.arc(y+D,o+R,.55,0,7),e.fill()}),[-1,1].forEach(y=>{e.beginPath(),e.moveTo((l?-h*9.2:9.2)+D,o-1),e.lineTo((l?-h*9.2:9.2)+D+y*3*(l?-h:1),o+2.6+y),e.lineTo((l?-h*9.2:9.2)+D+y*.6,o+1.6),e.closePath(),L(e,De,.9)});else if(st==="visor")e.strokeStyle=Lt,e.lineWidth=3.4,e.beginPath(),e.moveTo(-9.2+D,o-2.6),e.quadraticCurveTo(D,o-12.4,9.2+D,o-2.6),e.stroke(),e.strokeStyle=De,e.lineWidth=2,e.stroke(),u||(e.beginPath(),l?e.ellipse(h*9.2+D,o-3.2,5.4,1.7,0,0,7):e.ellipse(D,o-3,7.8,2,0,0,7),L(e,j(De,.18),1.1));else if(st==="sunhat")e.beginPath(),e.ellipse(D,o-4.2,14,3.8,0,0,7),L(e,j(De,.12),1.3),e.beginPath(),e.moveTo(-7.6+D,o-4.6),e.bezierCurveTo(-7.8+D,o-15,7.8+D,o-15,7.6+D,o-4.6),e.closePath(),L(e,De,1.3),Xe(e,-7.6+D,o-8,15.2,2.2,1),L(e,j(De,-.3),.9);else if(st==="headband"&&!u)e.strokeStyle=Lt,e.lineWidth=3.4,e.beginPath(),e.moveTo(-9+D,o-1.2),e.quadraticCurveTo(D,o-12,9+D,o-1.2),e.stroke(),e.strokeStyle=De,e.lineWidth=2,e.stroke();else if(st==="headband")e.strokeStyle=De,e.lineWidth=2,e.beginPath(),e.moveTo(-9,o-1.2),e.quadraticCurveTo(0,o-12,9,o-1.2),e.stroke();else if(st==="bow"){let y=l?-h*1.5:6.6,R=o-9.6;[-1,1].forEach(z=>{e.beginPath(),e.moveTo(y,R),e.lineTo(y+z*5.4,R-2.8),e.lineTo(y+z*5.4,R+2.8),e.closePath(),L(e,De,1.1)}),e.beginPath(),e.arc(y,R,1.5,0,7),L(e,j(De,.2),1)}else if(st==="flower"){let y=l?-h*2:-6,R=o-8.4;for(let z=0;z<5;z++){let se=z*Math.PI*2/5;e.beginPath(),e.arc(y+Math.cos(se)*2.3,R+Math.sin(se)*2.3,1.8,0,7),L(e,De,.9)}e.beginPath(),e.arc(y,R,1.3,0,7),L(e,"#EAB94E",.8)}if(_e){let y=l?-h*1.6:0;if(_e==="halo")e.beginPath(),e.ellipse(y,o-13.4,6.4,2,0,0,7),e.strokeStyle=Lt,e.lineWidth=2.8,e.stroke(),e.strokeStyle=Je,e.lineWidth=1.5,e.stroke();else if(_e==="horns")[-1,1].forEach(R=>{e.beginPath(),e.moveTo(y+R*3.2,o-8.6),e.quadraticCurveTo(y+R*6.6,o-11.4,y+R*5.4,o-15.6),e.quadraticCurveTo(y+R*8.2,o-12.6,y+R*8.2,o-7.4),e.closePath(),L(e,Je,1.1)});else if(_e==="bunny")[-1,1].forEach(R=>{e.beginPath(),e.ellipse(y+R*4.4,o-16,2.1,6.2,R*.22,0,7),L(e,"#fffaf2",1.1),e.beginPath(),e.ellipse(y+R*4.5,o-15.6,1,4.4,R*.22,0,7),e.fillStyle="#f0a6b5",e.fill()});else if(_e==="antlers")[-1,1].forEach(R=>{e.strokeStyle=Lt,e.lineWidth=2.6,e.lineCap="round",e.beginPath(),e.moveTo(y+R*4,o-9),e.lineTo(y+R*6.6,o-15),e.moveTo(y+R*5.6,o-12.6),e.lineTo(y+R*8.6,o-13.6),e.moveTo(y+R*6.6,o-15),e.lineTo(y+R*5.6,o-18),e.stroke(),e.strokeStyle="#9a653d",e.lineWidth=1.2,e.stroke()});else if(_e==="unicorn"){e.beginPath(),e.moveTo(y-1.8,o-9.2),e.lineTo(y,o-18),e.lineTo(y+1.8,o-9.2),e.closePath(),L(e,Je,1),e.strokeStyle="rgba(255,255,255,.7)",e.lineWidth=.6;for(let R of[-11.4,-13.4,-15.4])e.beginPath(),e.moveTo(y-1.5+(R+11.4)*-.1,o+R),e.lineTo(y+1.5+(R+11.4)*.1,o+R-.8),e.stroke()}else if(_e==="antennae")[-1,1].forEach(R=>{e.strokeStyle=Lt,e.lineWidth=1.8,e.beginPath(),e.moveTo(y+R*2.6,o-9),e.quadraticCurveTo(y+R*5,o-14,y+R*6.6,o-15.4),e.stroke(),e.strokeStyle="#313a3f",e.lineWidth=.8,e.stroke(),e.beginPath(),e.arc(y+R*6.8,o-15.8,1.5,0,7),L(e,Je,.9)});else if(_e==="tiara")e.beginPath(),e.moveTo(y-6,o-6),e.lineTo(y-5.4,o-9.6),e.lineTo(y-2.6,o-8),e.lineTo(y,o-11.4),e.lineTo(y+2.6,o-8),e.lineTo(y+5.4,o-9.6),e.lineTo(y+6,o-6),e.quadraticCurveTo(y,o-8,y-6,o-6),e.closePath(),L(e,"#d9d4cc",1),[[0,-9.4],[-3.6,-7.6],[3.6,-7.6]].forEach(([R,z],se)=>{e.beginPath(),e.arc(y+R,o+z,.7,0,7),L(e,se?"#8fc9e8":Je,.4)});else if(_e==="flowercrown")for(let R=0;R<7;R++){let z=Math.PI*(1.12+.76*R/6),se=y+Math.cos(z)*8.2,I=o-1+Math.sin(z)*7.6;e.beginPath(),e.arc(se,I,1.8,0,7),L(e,R%3===0?Je:R%3===1?"#f28f7e":"#fff6ea",.8),e.beginPath(),e.arc(se,I,.6,0,7),e.fillStyle="#eab94e",e.fill()}else _e==="sparkles"&&[[-9,-8,1.8],[9.4,-5,1.4],[6,-13,1.2]].forEach(([R,z,se])=>ys(e,y+R,o+z,se*1.5,Je))}if(e.restore(),i.tag){let y=o-19-eu+Math.sin(s*4)*1.5;e.beginPath(),e.moveTo(-5,y-5),e.lineTo(5,y-5),e.lineTo(0,y+1),e.closePath(),L(e,"#f28f7e",1.3)}e.restore()}var u0=-43.4;function qe(e,t,n){e.strokeStyle=t,e.lineWidth=n,e.lineCap="round",e.lineJoin="round",e.stroke()}function xs(e,t,n,i,s,r,a,c=1.7){e.lineCap="round",e.beginPath(),e.moveTo(t,n),e.lineTo(i,s),e.strokeStyle=Lt,e.lineWidth=r+c,e.stroke(),e.strokeStyle=a,e.lineWidth=r,e.stroke()}function d0(e,t,n,i){e.beginPath(),i==="side"?(e.moveTo(t-3.9,n+.6),e.bezierCurveTo(t-4.3,n-3.8,t-1.8,n-4.9,t+.4,n-4.9),e.bezierCurveTo(t+2.6,n-4.9,t+3.8,n-3.4,t+3.9,n-1),e.lineTo(t+4,n+.4),e.lineTo(t+5,n+2),e.lineTo(t+3.8,n+2.5),e.lineTo(t+3.9,n+3.3),e.quadraticCurveTo(t+3.5,n+4.1,t+2.8,n+4.5),e.quadraticCurveTo(t+1.2,n+5.2,t-.8,n+4.6),e.bezierCurveTo(t-2.6,n+4,t-3.9,n+2.6,t-3.9,n+.6)):(e.moveTo(t-4.2,n-.6),e.bezierCurveTo(t-4.3,n-3.9,t-2.4,n-4.9,t,n-4.9),e.bezierCurveTo(t+2.4,n-4.9,t+4.3,n-3.9,t+4.2,n-.6),e.bezierCurveTo(t+4.1,n+2.2,t+3,n+4,t+1.5,n+4.7),e.quadraticCurveTo(t,n+5.2,t-1.5,n+4.7),e.bezierCurveTo(t-3,n+4,t-4.1,n+2.2,t-4.2,n-.6)),e.closePath()}var iu={smile:{brow:[-.25,.1],mouth:"smile2",eyes:"open",blush:.12},joy:{brow:[-.9,-.5],mouth:"grin",eyes:"happy",blush:.3},frown:{brow:[-.6,.5],mouth:"frown",eyes:"open",droop:.5},upset:{brow:[-1.1,.7],mouth:"wobble",eyes:"wet",tear:!0,droop:1.1},frustrated:{brow:[1,-.7],mouth:"grit",eyes:"narrow",flush:!0,sweat:!0,vein:!0},surprised:{brow:[-1.2,-1.2],mouth:"o",eyes:"wide"},thinking:{brow:[-.5,.2],mouth:"smirk",eyes:"up",oneBrow:!0},stern:{brow:[.45,-.15],mouth:"flat",eyes:"open"}};function f0(e,t,n,i,s,r){let a=t.skin,c=j(a,.3),l=t.mouth||0,h=iu[t.emote]||null,u=(r*.9+t.id*1.7)%4<.13&&!(h&&(h.eyes==="happy"||h.eyes==="wide")),g=t.lip||j(a,.38);if((s?[2.2]:[-1.9,1.9]).forEach((w,F)=>{let S=n+w,E=i+.3,T=h&&h.eyes==="happy"?"happy":t.eyeShape||"round",P=h?h.eyes:"open";if(u||T==="happy")e.beginPath(),T==="happy"&&!u?e.arc(S,E+.3,1,Math.PI*1.1,Math.PI*1.9):(e.moveTo(S-1,E),e.lineTo(S+1,E)),qe(e,"#3a2a30",.55);else{let A=P==="wide"?.95:P==="narrow"?.38:P==="wet"?.78:.66;if(e.fillStyle="#fffaf2",e.beginPath(),e.ellipse(S,E,s?.8:1,A,0,0,7),e.fill(),qe(e,j(a,.45),.3),e.fillStyle=t.eyeColor||"#3a2a30",e.beginPath(),e.arc(S+(s?.25:0)+(P==="up"?.25:0)+(t.lookX||0),E+.02+(P==="up"?-.2:0)+(P==="narrow"?.12:0)+(t.lookY||0),P==="wide"?.42:.5,0,7),e.fill(),P==="wet"&&(e.fillStyle="rgba(190,225,255,.9)",e.beginPath(),e.ellipse(S+.1,E+.28,.55,.22,0,0,7),e.fill()),e.fillStyle="#fff",e.beginPath(),e.arc(S+(s?.05:-.15),E-.22,.17,0,7),e.fill(),T==="sleepy"&&(e.fillStyle=a,e.beginPath(),e.ellipse(S,E-.35,1.05,.42,0,Math.PI,2*Math.PI),e.fill()),e.beginPath(),e.moveTo(S-(s?.8:1.05),E-.35),e.quadraticCurveTo(S,E-.95,S+(s?.9:1.05),E-.35),qe(e,"#2a1d22",.45),T==="lash"){let x=s||F?1:-1;e.beginPath(),e.moveTo(S+x*.9,E-.4),e.lineTo(S+x*1.7,E-1),qe(e,"#2a1d22",.4)}}let o=t.brow||"soft";if(o!=="none"){let A=o==="thick"?.85:o==="thin"?.32:.55,x=s?1:w<0?-1:1,k=h?h.brow[0]:0,G=h?h.brow[1]:.25,$=h&&h.oneBrow&&F===1?-.9:0,U=E-1.9+$,q=s?S-1.2:S-x*1.2,te=s?S+1.2:S+x*1.3;e.beginPath(),e.moveTo(q,U+k*.75+(h?0:.2)),e.quadraticCurveTo((q+te)/2,U-.55+(k+G)*.3+(o==="arch"?-.3:0),te,U+G*.75),qe(e,t.browColor||t.hair,A)}if(t.glasses&&t.glasses!=="none"){let A=t.glasses===!0?"round":t.glasses,x=t.glassColor||"#3b2f33";if(e.beginPath(),A==="square")e.roundRect(S-1.6,E-1.25,3.2,2.6,.6);else if(A==="cat"){e.ellipse(S,E+.05,1.6,1.3,0,0,7);let k=s?1:w<0?-1:1;e.moveTo(S+k*1.4,E-.7),e.lineTo(S+k*2.1,E-1.6)}else A==="half"?e.arc(S,E,1.6,Math.PI,0):e.arc(S,E+.05,1.5,0,7);A==="sun"&&(e.fillStyle="rgba(40,30,40,.82)",e.fill()),qe(e,x,.5)}}),t.glasses&&t.glasses!=="none"){let w=t.glassColor||"#3b2f33";e.beginPath(),s?(e.moveTo(n+.6,i+.1),e.lineTo(n-3.6,i+.7)):(e.moveTo(n-.5,i+.15),e.lineTo(n+.5,i+.15)),qe(e,w,.45)}s||(e.beginPath(),e.moveTo(n+.2,i+.9),e.lineTo(n+.5,i+2.2),e.arc(n,i+2.35,.65,.05*Math.PI,.85*Math.PI),qe(e,c,.38)),t.freckles&&(e.fillStyle=c,(s?[[3,1.6],[2.3,2.3]]:[[-2.6,1.7],[-1.9,2.4],[2.6,1.7],[1.9,2.4]]).forEach(([w,F])=>{e.beginPath(),e.arc(n+w,i+F,.22,0,7),e.fill()})),t.shadow&&(e.fillStyle=t.shadow,e.globalAlpha=.5,(s?[2.2]:[-1.9,1.9]).forEach(w=>{e.beginPath(),e.ellipse(n+w,i-.55,s?.95:1.3,.55,0,0,7),e.fill()}),e.globalAlpha=1),t.liner&&(e.beginPath(),(s?[[2.2,1]]:[[-1.9,-1],[1.9,1]]).forEach(([w,F])=>{e.moveTo(n+w+F*.85,i+.05),e.lineTo(n+w+F*1.9,i-.6)}),qe(e,"#1a1210",.4)),t.blush===!0&&(e.fillStyle=t.blushColor||"rgba(255,110,125,.16)",(s?[2.6]:[-2.8,2.8]).forEach(w=>{e.beginPath(),e.ellipse(n+w,i+2.1,1,.6,0,0,7),e.fill()}));let f=n+(s?2.6:0),_=i+3.4,M=t.mouthStyle||"smile",d=s?1.1:1.5,m=h?h.mouth:null;if(l&&m!=="grit")e.fillStyle="#7A3B3B",e.beginPath(),e.ellipse(f,_+.1,d*.62,.3+l*.9,0,0,7),e.fill(),e.beginPath(),e.ellipse(f,_+.1,d*.62,.3+l*.9,0,0,7),qe(e,g,.35);else if(m==="frown")e.beginPath(),e.moveTo(f-d,_+.65),e.quadraticCurveTo(f,_-.75,f+d,_+.65),qe(e,g,.55);else if(m==="wobble")e.beginPath(),e.moveTo(f-d,_+.7),e.quadraticCurveTo(f-d*.5,_-.3,f-.1,_+.45),e.quadraticCurveTo(f+d*.5,_-.5,f+d,_+.7),qe(e,g,.5);else if(m==="grit"){Xe(e,f-d*.95,_-.35,d*1.9,1.15,.4),e.fillStyle="#fffaf2",e.fill(),qe(e,g,.45),e.beginPath();for(let w=-2;w<=2;w++)e.moveTo(f+w*d*.38,_-.3),e.lineTo(f+w*d*.38,_+.75);qe(e,j(g,.2),.22)}else m==="o"?(e.fillStyle="#7A3B3B",e.beginPath(),e.ellipse(f,_+.35,.75,1,0,0,7),e.fill(),e.beginPath(),e.ellipse(f,_+.35,.75,1,0,0,7),qe(e,g,.4)):m==="smile2"?(e.beginPath(),e.moveTo(f-d*1.15,_-.25),e.quadraticCurveTo(f,_+1.4,f+d*1.15,_-.25),qe(e,g,.55),e.beginPath(),e.moveTo(f-d*1.15,_-.25),e.lineTo(f-d*1.3,_-.55),e.moveTo(f+d*1.15,_-.25),e.lineTo(f+d*1.3,_-.55),qe(e,j(a,.2),.3)):M==="grin"||m==="grin"?(e.beginPath(),e.moveTo(f-d*(m?1.2:1),_-.2),e.quadraticCurveTo(f,_+2.1,f+d*(m?1.2:1),_-.2),e.closePath(),e.fillStyle="#fffaf2",e.fill(),qe(e,g,.45)):M==="flat"||m==="flat"?(e.beginPath(),e.moveTo(f-d*.8,_),e.lineTo(f+d*.8,_),qe(e,g,.5)):M==="smirk"||m==="smirk"?(e.beginPath(),e.moveTo(f-d*.8,_+.1),e.quadraticCurveTo(f+.2,_+.8,f+d,_-.5),qe(e,g,.5)):(e.beginPath(),e.moveTo(f-d,_-.1),e.quadraticCurveTo(f,_+1,f+d,_-.1),qe(e,g,.52),e.fillStyle=j(g,-.25),e.globalAlpha=.55,e.beginPath(),e.ellipse(f,_+.6,d*.5,.26,0,0,7),e.fill(),e.globalAlpha=1);if(h&&h.flush&&(e.fillStyle="rgba(235,70,60,.34)",(s?[2.6]:[-2.8,2.8]).forEach(w=>{e.beginPath(),e.ellipse(n+w,i+2.1,1.2,.8,0,0,7),e.fill()}),e.fillStyle="rgba(235,70,60,.18)",e.beginPath(),e.ellipse(n,i-3.2,3.2,1.2,0,0,7),e.fill()),h&&h.tear){let w=n+(s?2.4:-2.4),F=i+1.6+r*1.3%1*1.6;e.fillStyle="rgba(150,205,255,.95)",e.beginPath(),e.ellipse(w,F,.38,.62,0,0,7),e.fill(),qe(e,"rgba(90,150,210,.8)",.2)}if(h&&h.sweat){let w=n+(s?3.4:3.7),F=i-3.4+Math.sin(r*5)*.15;e.fillStyle="rgba(160,210,255,.95)",e.beginPath(),e.moveTo(w,F-1),e.quadraticCurveTo(w+.8,F+.2,w,F+.8),e.quadraticCurveTo(w-.8,F+.2,w,F-1),e.fill(),qe(e,"rgba(90,150,210,.8)",.2)}if(h&&h.vein){let w=n+(s?-1.6:-3.4),F=i-3.7,S=1+Math.sin(r*9)*.12;e.strokeStyle="#d9302a",e.lineWidth=.38,e.lineCap="round";for(let[E,T]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.beginPath(),e.arc(w+E*.55*S,F+T*.55*S,.5*S,E<0?T<0?0:-Math.PI/2:T<0?Math.PI/2:Math.PI,E<0?T<0?Math.PI/2:0:T<0?Math.PI:Math.PI*1.5),e.stroke()}e.beginPath(),e.moveTo(n+(s?3.1:2.9),i+1.9),e.quadraticCurveTo(n+(s?3.3:3.1),i+2.8,n+(s?3.1:2.8),i+3.6),qe(e,j(a,.13),.3)}function tu(e,t,n,i,s,r){if(t.style==="bald")return;let a=t.style||"crop",c=t.hair,l=j(c,-.22),h=s==="side",u=s==="back",g=(d=c)=>L(e,d,1),p=a==="long"||a==="wavy"||a==="braids",f=a==="bob";if(r==="back"){if(a==="afro"&&(e.beginPath(),e.ellipse(n-(h?1.2:0),i-1.4,6.9,6.5,0,0,7),g()),a==="curly"&&[[-5,-1],[5,-1],[-4,-4.8],[4,-4.8],[0,-5.8],[-5.4,2],[5.4,2]].forEach(([d,m])=>{e.beginPath(),e.arc(n+(h?d*.8-1:d),i+m,2.2,0,7),g()}),p||f){let d=p?8.4:4.4;e.beginPath(),h?(e.moveTo(n-1.2,i-5),e.bezierCurveTo(n-5.4,i-5.6,n-6.6,i+1,n-5.6,i+d*.6),e.quadraticCurveTo(n-5.2,i+d+.4,n-2.6,i+d),e.quadraticCurveTo(n-.4,i+d-2.2,n+.6,i+2),e.closePath(),g(),[-4.8,-3.2,-1.6].forEach(m=>{e.beginPath(),e.moveTo(n+m,i),e.quadraticCurveTo(n+m-.4,i+d*.5,n+m-.2,i+d-1.4),qe(e,l,.3)})):(e.beginPath(),e.moveTo(n-4.9,i-3),e.bezierCurveTo(n-6.2,i+1,n-6.4,i+d*.5,n-5.8,i+d-1.4),e.quadraticCurveTo(n-5.2,i+d+.8,n-3.2,i+d),e.quadraticCurveTo(n,i+d-1.2,n+3.2,i+d),e.quadraticCurveTo(n+5.2,i+d+.8,n+5.8,i+d-1.4),e.bezierCurveTo(n+6.4,i+d*.5,n+6.2,i+1,n+4.9,i-3),e.closePath(),g(),[-4.4,-2.6,2.6,4.4].forEach(m=>{e.beginPath(),e.moveTo(n+m,i),e.quadraticCurveTo(n+m*1.06,i+d*.5,n+m*1.04,i+d-1.4),qe(e,l,.3)}))}(a==="pony"||a==="topknot")&&(h?(e.beginPath(),e.ellipse(n-5.2,i+3.4,1.9,4.6,.3,0,7),g()):u&&(e.beginPath(),e.ellipse(n,i+4.6,1.9,5,0,0,7),g()));return}if(u){e.beginPath(),e.ellipse(n,i-.2,4.7,5.2,0,0,7),g(),a==="bun"&&(e.beginPath(),e.arc(n,i-5.6,2.5,0,7),g()),e.fillStyle="rgba(255,255,255,.16)",e.beginPath(),e.ellipse(n-1.4,i-3,1.8,1,-.3,0,7),e.fill();return}let _=a==="buzz",M=_?4.2:5.5;e.beginPath(),h?(e.moveTo(n-4.2,i+2.2),e.bezierCurveTo(n-5.2,i-5.2,n+3.6,i-6.2,n+4,i-1.8),e.lineTo(n+3.7,i-2),e.quadraticCurveTo(n+1.6,i-3.5,n-.6,i-2.4),e.lineTo(n-2.2,i+.2),e.lineTo(n-2.6,i+2.4)):(e.moveTo(n-4.5,i+1.2),e.bezierCurveTo(n-5.3,i-M-.3,n+5.3,i-M-.3,n+4.5,i+1.2),e.lineTo(n+4,i-.9),e.quadraticCurveTo(n+1.6,i-(_?3.7:3.4),n-.8,i-(_?3.4:3)),e.quadraticCurveTo(n-3.3,i-2.6,n-4,i-.9)),e.closePath(),g(),_&&(e.globalAlpha=.35,e.fillStyle=j(c,-.5),e.fill(),e.globalAlpha=1),a==="bun"&&(e.beginPath(),e.arc(n-(h?2.8:0),i-6.1,2.5,0,7),g(),e.beginPath(),e.arc(n-(h?2.8:0),i-6.1,1.2,0,7),qe(e,l,.35)),(a==="afro"||a==="curly")&&[[-3.8,-3.6],[-1.4,-4.8],[1.4,-4.8],[3.8,-3.6]].forEach(([d,m])=>{e.beginPath(),e.arc(n+(h?d*.7-1:d),i+m,1.9,0,7),g()}),!_&&a!=="afro"&&(e.beginPath(),e.moveTo(n+(h?1.2:-2.1),i-4.6),e.quadraticCurveTo(n+(h?2.4:0),i-5.4,n+(h?3.2:1.4),i-3.5),qe(e,j(c,.34),.5)),e.fillStyle="rgba(255,255,255,.16)",e.beginPath(),e.ellipse(n-1.4+(h?1:0),i-4.1,1.8,.8,-.25,0,7),e.fill(),p&&!h&&[-1,1].forEach(d=>{e.beginPath(),e.moveTo(n+d*4.2,i-1),e.quadraticCurveTo(n+d*5.6,i+3.4,n+d*5.2,i+7.4),e.lineTo(n+d*3.8,i+6),e.quadraticCurveTo(n+d*4.4,i+2.6,n+d*3.6,i),e.closePath(),g()}),!_&&a!=="afro"&&a!=="curly"&&(e.save(),e.globalAlpha=.7,(h?[0,1,2]:[-3,-1.6,1.6,3]).forEach(m=>{e.beginPath(),h?(e.moveTo(n+2.2-m*1.5,i-5),e.quadraticCurveTo(n-1-m,i-3.6+m*.4,n-3.4-m*.3,i+.2+m*.6)):(e.moveTo(n+m*.5,i-5.2+Math.abs(m)*.2),e.quadraticCurveTo(n+m*1.2,i-3.8,n+m*1.45+(m<0?-.4:.4),i-.6)),qe(e,l,.28)}),e.restore()),t.hair2&&(e.beginPath(),e.moveTo(n-3.4,i-3.8),e.quadraticCurveTo(n-1,i-5.6,n+1.8,i-4.4),qe(e,t.hair2,.9))}function p0(e,t,n,i,s){let r=t.beardColor||t.hair;e.beginPath(),s?(e.moveTo(n-1.4,i+.4),e.bezierCurveTo(n-1.6,i+3.4,n-.2,i+6.2,n+2.4,i+6.1),e.bezierCurveTo(n+4.3,i+5.8,n+4.7,i+3.8,n+4.1,i+2.4),e.lineTo(n+3.4,i+2.7),e.quadraticCurveTo(n+1.8,i+3.5,n+.4,i+1.9),e.closePath()):(e.moveTo(n-4.2,i-.5),e.bezierCurveTo(n-4.7,i+3.4,n-3.2,i+6.4,n,i+6.8),e.bezierCurveTo(n+3.2,i+6.4,n+4.7,i+3.4,n+4.2,i-.5),e.lineTo(n+3.4,i+.9),e.quadraticCurveTo(n+3,i+2.6,n+1.8,i+2.9),e.quadraticCurveTo(n,i+2.4,n-1.8,i+2.9),e.quadraticCurveTo(n-3,i+2.6,n-3.4,i+.9),e.closePath()),L(e,r,.9),e.fillStyle="rgba(255,255,255,.1)",e.beginPath(),e.ellipse(n-1.4,i+5,1.8,.7,-.2,0,7),e.fill(),e.fillStyle=j(t.skin,.08),e.beginPath(),e.ellipse(n+(s?2.7:0),i+3.5,s?1.1:1.9,.95,0,0,7),e.fill()}function m0(e,t,n,i,s){let r=t.beardColor||t.hair,a=n+(s?2.7:0);e.beginPath(),s?(e.moveTo(a-.6,i+2.6),e.quadraticCurveTo(a+1.2,i+2.4,a+1.6,i+3.1),e.quadraticCurveTo(a+.2,i+3.1,a-.6,i+2.9)):(e.moveTo(n,i+2.7),e.quadraticCurveTo(n-1.4,i+2.2,n-2.6,i+3.2),e.quadraticCurveTo(n-1.4,i+3.2,n,i+2.95),e.quadraticCurveTo(n+1.4,i+3.2,n+2.6,i+3.2),e.quadraticCurveTo(n+1.4,i+2.2,n,i+2.7)),e.closePath(),L(e,r,.5)}function g0(e,t,n,i,s){e.save(),e.translate(Math.round(t*2)/2,Math.round(n*2)/2),e.scale(.93,.93);let r=i.moving,a=r?Math.sin(i.walk):0,c=i.dir,l=c==="left"||c==="right",h=c==="left"?-1:1,u=c==="up",g=i.top==="buttonup"?"shirt":i.top||"shirt",p=i.bottom||"pants",f=i.bodyW??(i.build==="slim"?.92:i.build==="sturdy"?1.1:1),_=i.skin,M=i.acc,d=i.accent||"#c4463c",m=i.shirt||"#8fc9e8",w=i.shirt2||"#fff6ea",F=i.pants||"#4a3b3f",S=i.shoes||"#3b2f33",E=g==="dress",T=p==="skirt"||E,P=u0,o=r?-Math.abs(Math.cos(i.walk))*1.1:Math.sin(s*2+i.id)*.3;e.fillStyle="rgba(70,45,55,.24)",e.beginPath(),e.ellipse(0,1,9.4*f,3,0,0,7),e.fill(),i.sitting&&e.translate(0,6),e.translate(0,o);let A=-22.5,x=-36.4,k=-25.2;[-1,1].forEach(J=>{let ce=r?Math.max(0,J*a)*2.2:0,Me=l?0:J*2.5*f,$e=l?J*a*5:J*2.6*f+(r?J*0:0),D=-2.4-ce;xs(e,Me,A+1,$e,D,T&&!i.tights?3.2:4.4*(p==="joggers"?1.05:1),T?i.tights||_:F,T?1.4:1.6),!T&&p!=="shorts"&&(e.beginPath(),e.moveTo(Me,A+4),e.lineTo($e*.98,D-3),qe(e,j(F,.22),.3)),p==="shorts"&&xs(e,$e,D-5,$e,D,3.2,_,1.4);let ke=$e+(l?h*1.5:0),ot=D+1.4-ce*0;i.shoeStyle==="boot"?(Xe(e,ke-2.5,ot-4.4,5,5,1.4),L(e,S,1),e.beginPath(),e.ellipse(ke+(l?h*1.3:0),ot+.6,3.5,1.6,0,0,7),L(e,j(S,.25),1)):(e.beginPath(),e.ellipse(ke,ot,l?3.7:3,1.8,0,0,7),L(e,S,1),e.fillStyle="rgba(255,255,255,.22)",e.beginPath(),e.ellipse(ke-.6,ot-.7,1.5,.5,0,0,7),e.fill())}),e.beginPath(),e.moveTo(-1.9,-39.8),e.lineTo(-1.9,x+.6),e.lineTo(1.9,x+.6),e.lineTo(1.9,-39.8),e.closePath(),L(e,_,1),e.fillStyle="rgba(110,60,50,.22)",e.beginPath(),e.ellipse(0,-38.4,2,1,0,0,7),e.fill();let G=g==="tank"||g==="dress"?_:m,$=g==="tee"||g==="tank"||E&&!i.sleeves,U=g==="blazer"?w:null,q=J=>{let ce=i.arms&&(J>0?i.arms.R:i.arms.L),Me,$e;return ce?(Me=l?h*Math.abs(ce[0])*1:ce[0]*1.15,$e=Math.max(-47,x+1+(ce[1]+17)*1.4)):l?(Me=J*a*4.2*-1+h*.6,$e=-25.2+(r?-Math.abs(a)*.8:0)):(Me=J*(8.6*f+.3)+(r?-J*a*.6:0),$e=-25.6+(r?-J*a*1.4:0)),[Me,$e]},te=J=>{let[ce,Me]=q(J),$e=l?0:J*6.9*f,D=x+1.6,ke=$e+(ce-$e)*.52,ot=D+(Me-D)*.52+X(ce,$e);$?(xs(e,$e,D,ke,ot,3.9,G,1.5),xs(e,ke,ot,ce,Me,3,_,1.4)):(xs(e,$e,D,ce,Me,3.7,G,1.5),U&&xs(e,ce-(ce-$e)*.1,Me-(Me-D)*.1,ce,Me,3.8,U,1.3)),e.beginPath(),e.arc(ce,Me+.9,1.7,0,7),L(e,_,1),i.thumb&&J>0&&(e.beginPath(),e.ellipse(ce+.2,Me-1.1,.9,1.7,.12,0,7),L(e,_,1))},X=(J,ce)=>0;l&&te(-h);let ae=(l?4.5:7)*f,ie=(l?4.3:6.2)*f,ne=(l?3.9:E||T?4.8:5.4)*f,le=(l?4.4:6)*f,Ae=g==="blazer"||g==="cardigan"?-20.5:g==="labcoat"?-13.2:g==="track"?-21.6:g==="sweater"||g==="turtleneck"?-22.2:-22.6,_e=J=>{e.beginPath(),e.moveTo(-ae+1.6,x-.7),e.quadraticCurveTo(-ae,x-.7,-ae,x+1),e.lineTo(-ie,-31),e.lineTo(-ne,k),e.lineTo(-le-(g==="blazer"?.6:g==="labcoat"?1.6:0),J),e.lineTo(le+(g==="blazer"?.6:g==="labcoat"?1.6:0),J),e.lineTo(ne,k),e.lineTo(ie,-31),e.lineTo(ae,x+1),e.quadraticCurveTo(ae,x-.7,ae-1.6,x-.7),e.quadraticCurveTo(0,x-2.1,-ae+1.6,x-.7),e.closePath()};if(T&&!i.sitting){let J=E?-9.5:-12.5,ce=E?8.6:7.8;e.beginPath(),e.moveTo(-le,A-.8),e.lineTo(le,A-.8),e.lineTo(ce*f*(l?.6:1),J),e.quadraticCurveTo(0,J+1.3,-ce*f*(l?.6:1),J),e.closePath(),L(e,E?m:F,1),e.fillStyle="rgba(255,255,255,.14)",e.fillRect(-ce*f*.7,J-1.3,ce*1.4*f,.8)}let Je=g==="vest"||g==="cardigan"?w:m;if(_e(E?A-1:Ae),L(e,Je,1.1),!E&&!T&&!u&&g!=="blazer"&&g!=="sweater"&&!l&&(e.fillStyle=j(F,.1),e.fillRect(-le+.3,-24.2,(le-.3)*2,1.6),e.fillStyle="#c9b28a",e.fillRect(-.8,-24.1,1.6,1.4)),l||(e.fillStyle="rgba(255,255,255,.2)",e.beginPath(),e.ellipse(-2.6,-33,2,3.2,0,0,7),e.fill()),!u&&!l){if(g==="blazer")e.beginPath(),e.moveTo(-2.4,x-.6),e.lineTo(0,-28.5),e.lineTo(2.4,x-.6),e.closePath(),L(e,w,.8),[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*2.5,x-.7),e.lineTo(J*.2,-27.8),e.lineTo(J*1.4,-24.6),e.lineTo(J*5.6,-25.6),e.lineTo(J*6.2,-32),e.lineTo(J*4.4,x),e.closePath(),L(e,j(m,.12),.8)}),e.fillStyle="#c9b28a",[-24.6,-21.8].forEach(J=>{e.beginPath(),e.arc(0,J+2,.5,0,7),e.fill()}),Xe(e,2.4,-31.8,2.8,.7,.3),e.fillStyle=w,e.fill();else if(g==="sweater"){e.fillStyle=j(m,-.2),e.fillRect(-le,-24.2,le*2,2.4);for(let J=-le+1;J<le;J+=1.6)e.fillStyle="rgba(0,0,0,.08)",e.fillRect(J,-24.2,.35,2.4);e.beginPath(),e.moveTo(-3.2,x-.6),e.lineTo(0,-33.4),e.lineTo(3.2,x-.6),e.closePath(),L(e,w,.7),e.beginPath(),e.ellipse(0,x-.8,3.4,1.1,0,0,Math.PI),qe(e,j(m,.3),.9)}else if(g==="vest")[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*2.3,x-.6),e.lineTo(J*.4,-22.4),e.lineTo(J*5.9,-22.4),e.lineTo(J*5.1,-30),e.lineTo(J*6.8,x+1),e.lineTo(J*4.8,x-.6),e.closePath(),L(e,m,.85)}),e.beginPath(),e.moveTo(-2.6,x-.6),e.lineTo(0,-35),e.lineTo(2.6,x-.6),e.lineTo(1.1,x+.6),e.lineTo(0,x+.2),e.lineTo(-1.1,x+.6),e.closePath(),L(e,"#fffaf2",.6),e.beginPath(),e.moveTo(0,-35.2),e.lineTo(.9,-32.4),e.lineTo(0,-27.6),e.lineTo(-.9,-32.4),e.closePath(),L(e,i.tie||"#a24a3c",.6);else if(g==="cardigan"){e.beginPath(),e.moveTo(-3.2,x-.6),e.lineTo(0,-31.5),e.lineTo(3.2,x-.6),e.closePath(),L(e,w,.6),[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*2.2,x-.6),e.lineTo(J*1,Ae),e.lineTo(J*(le+.3),Ae),e.lineTo(J*ne,k),e.lineTo(J*ie,-31),e.lineTo(J*ae,x+1),e.quadraticCurveTo(J*ae,x-.7,J*(ae-1.6),x-.7),e.closePath(),L(e,m,.9),e.fillStyle=j(m,-.18),e.fillRect(J>0?1:-1.8,Ae-1.8,.8,1.8)});for(let J of[-32,-28,-24.6])e.beginPath(),e.arc(1.1,J,.45,0,7),L(e,j(m,.3),.3)}else if(g==="labcoat"){e.beginPath(),e.moveTo(-2.6,x-.6),e.lineTo(0,-29),e.lineTo(2.6,x-.6),e.closePath(),L(e,w,.6),[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*2.6,x-.7),e.lineTo(J*.2,-27),e.lineTo(J*1.6,-24.4),e.lineTo(J*5.8,-26.6),e.lineTo(J*6.2,-33),e.lineTo(J*4.6,x),e.closePath(),L(e,j(m,.02),.8),Xe(e,J*3.4-1.9,-21.6,3.8,3.6,.6),qe(e,j(m,.32),.55)}),e.beginPath(),e.moveTo(0,-27),e.lineTo(0,Ae),qe(e,j(m,.28),.45);for(let J of[-25,-21.5,-18])e.beginPath(),e.arc(0,J,.5,0,7),L(e,j(m,.28),.3);Xe(e,-4.6,-30.6,1.6,3,.4),L(e,d||"#3b6ea8",.4)}else if(g==="turtleneck"){Xe(e,-2.7,x-2.5,5.4,3.2,1.3),L(e,j(m,.12),.8);for(let J=-1;J<=1;J+=1)e.beginPath(),e.moveTo(J*1.3,x-2.3),e.lineTo(J*1.3,x+.4),qe(e,j(m,.3),.25)}else g==="track"?(e.beginPath(),e.moveTo(0,x-.8),e.lineTo(0,Ae),qe(e,j(m,.35),.5),Xe(e,-2.6,x-2.2,5.2,2.2,1),L(e,j(m,.1),.7),[-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*(ae-.4),x+1),e.lineTo(J*(ne-.2),Ae),qe(e,d,.9)}),e.fillStyle=w,e.fillRect(-le,Ae-1.6,le*2,1.6),e.beginPath(),e.moveTo(-le,Ae-1.6),e.lineTo(le,Ae-1.6),qe(e,j(m,.3),.4)):g==="tee"?(e.beginPath(),e.ellipse(0,x-.3,2.8,1.3,0,0,Math.PI),L(e,j(m,.16),.6)):g==="tank"?(e.beginPath(),e.ellipse(0,x,3.4,1.7,0,0,Math.PI),L(e,_,.7)):g==="dress"?(e.beginPath(),e.ellipse(0,x-.2,3.2,1.4,0,0,Math.PI),L(e,_,.7),e.fillStyle=j(m,.25),e.fillRect(-ne,k-.6,ne*2,1.2)):([-1,1].forEach(J=>{e.beginPath(),e.moveTo(J*.3,x-.6),e.lineTo(J*3.2,x-.4),e.lineTo(J*1.4,-34),e.closePath(),L(e,j(m,-.15),.6)}),e.beginPath(),e.moveTo(0,-34.4),e.lineTo(0,-23),qe(e,j(m,.25),.4),[-31,-28,-25].forEach(J=>{e.fillStyle=j(m,.35),e.beginPath(),e.arc(0,J,.3,0,7),e.fill()}));if(M==="tie"&&(g==="blazer"||g==="shirt"||g==="cardigan"||g==="labcoat")&&(e.beginPath(),e.moveTo(-.9,x-.5),e.lineTo(.9,x-.5),e.lineTo(.7,x+1.3),e.lineTo(-.7,x+1.3),e.closePath(),L(e,d,.5),e.beginPath(),e.moveTo(-.7,x+1.2),e.lineTo(.7,x+1.2),e.lineTo(1.2,-27.8),e.lineTo(0,-26.6),e.lineTo(-1.2,-27.8),e.closePath(),L(e,d,.6)),M==="bowtie"&&([-1,1].forEach(J=>{e.beginPath(),e.moveTo(0,x+.2),e.lineTo(J*2.8,x-.7),e.lineTo(J*2.8,x+1.1),e.closePath(),L(e,d,.5)}),e.beginPath(),e.arc(0,x+.2,.6,0,7),L(e,j(d,.2),.4)),M==="necklace"||M==="beads")if(e.beginPath(),e.moveTo(-3.4,x+.1),e.quadraticCurveTo(0,x+(M==="beads"?7:5),3.4,x+.1),qe(e,M==="beads"?j(d,0):d,M==="beads"?1.1:.55),M==="beads")for(let J=0;J<=8;J++){let ce=J/8,Me=-3.4+6.8*ce,$e=x+.1+2*3.5*ce*(1-ce)*2;e.beginPath(),e.arc(Me,$e,.55,0,7),L(e,J%3===1?"#f2e8d8":i.beadColor||"#8a5cc0",.25)}else e.beginPath(),e.arc(0,x+2.7,.75,0,7),L(e,d,.4);M==="brooch"&&(e.beginPath(),e.arc(-3.6,-33,1,0,7),L(e,d,.5),e.beginPath(),e.arc(-3.6,-33,.35,0,7),e.fillStyle="#fff",e.fill()),M==="scarf"&&(e.beginPath(),e.ellipse(0,x-.2,4.4,1.9,0,0,7),L(e,d,.8),Xe(e,1.2,x,3,7.5,1.2),L(e,d,.8),e.fillStyle="rgba(255,255,255,.3)",e.fillRect(1.6,x+4,2.2,.7)),(i.lanyard!==!1||M==="lanyard")&&!E&&(!M||M==="lanyard")&&(e.beginPath(),e.moveTo(-1.9,x),e.lineTo(0,-29.4),e.lineTo(1.9,x),qe(e,M==="lanyard"?d:i.lanyardColor||"#c4463c",.7),Xe(e,-1.4,-29.6,2.8,3.4,.5),L(e,"#fffaf2",.55),e.fillStyle="#4F91C7",e.fillRect(-1,-29.2,2,.7)),i.scarf&&(e.beginPath(),e.ellipse(0,x-.2,4.2,1.7,0,0,7),L(e,i.scarf,.9)),i.badge&&(e.beginPath(),e.arc(-3.4,-32.4,1.1,0,7),L(e,i.badge,.6))}else u&&(e.beginPath(),e.moveTo(-3,x-.5),e.quadraticCurveTo(0,x+.7,3,x-.5),qe(e,j(m,.3),.5),g==="blazer"&&(e.beginPath(),e.moveTo(0,x+.8),e.lineTo(0,Ae),qe(e,j(m,.3),.45)));!u&&i.packStyle==="messenger"&&(e.beginPath(),e.moveTo(l?-2:-5.6,x),e.lineTo(l?2.5:5.4,-24.6),qe(e,i.pack||"#9a653d",1.3),Xe(e,l?1.4:3.2,-27.2,5.2,4.4,1),L(e,i.pack||"#9a653d",.9)),u&&i.packStyle&&i.packStyle!=="none"&&(Xe(e,-5,-34,10,9,2.2),L(e,i.pack||"#9a653d",1)),l?te(h):(te(-1),te(1));let it=l&&h<0;e.save(),(i.hx||i.hdy)&&e.translate(i.hx||0,i.hdy||0),i.tilt&&(e.translate(0,x),e.rotate(i.tilt),e.translate(0,-x)),it&&e.scale(-1,1);{let J=iu[i.emote];J&&J.droop&&e.translate(0,J.droop*.5+Math.sin(s*1.5)*.12),i.emote==="frustrated"&&e.translate(0,-.2+Math.sin(s*14)*.18),i.emote==="joy"&&e.translate(0,-Math.abs(Math.sin(s*6))*.5)}let at=u?"back":l?"side":"front",H=l?.4:0;if(tu(e,i,H,P,at,"back"),!u){let J=x-(g==="turtleneck"||M==="scarf"||i.scarf?2.8:.8);e.beginPath(),e.moveTo(-1.9,P+2),e.lineTo(-1.9,J),e.lineTo(1.9,J),e.lineTo(1.9,P+2),e.closePath(),e.fillStyle=_,e.fill(),e.fillStyle="rgba(110,60,50,.22)",e.beginPath(),e.ellipse(0,P+5.6,2,1,0,0,7),e.fill(),e.strokeStyle=Lt,e.lineWidth=.9,e.beginPath(),e.moveTo(-1.9,P+4.6),e.lineTo(-1.9,J),e.moveTo(1.9,P+4.6),e.lineTo(1.9,J),e.stroke()}if(l?(e.beginPath(),e.ellipse(H-.8,P+.9,1,1.6,0,0,7),L(e,_,.8)):[-1,1].forEach(J=>{e.beginPath(),e.ellipse(J*4.2,P+.8,.9,1.5,0,0,7),L(e,_,.8)}),d0(e,H,P,u?"front":at),L(e,_,1.15),u||(e.fillStyle="rgba(120,70,60,.13)",e.beginPath(),e.ellipse(H+(l?-1:2.2),P+2.4,2.8,2.6,0,0,7),e.fill(),i.beard==="full"&&p0(e,i,H,P,l),f0(e,i,H,P,l,s),(i.beard==="mustache"||i.beard==="full")&&m0(e,i,H,P,l),i.lines&&(e.beginPath(),e.moveTo(H+(l?3:3.6),P+.3),e.lineTo(H+(l?3.4:4),P+.9),e.moveTo(H+(l?2.8:3.4),P+.8),e.lineTo(H+(l?3.3:3.9),P+1.5),l||(e.moveTo(H-3.6,P+.3),e.lineTo(H-4,P+.9),e.moveTo(H-3.4,P+.8),e.lineTo(H-3.9,P+1.5)),qe(e,j(_,.22),.28))),tu(e,i,H,P,at,"front"),i.teen&&!u){e.fillStyle="rgba(168,92,64,.75)";let J=l?[[H-2.2,P+2.2],[H-1,P+3]]:[[-3,P+2.3],[-2.1,P+3.1],[-3.4,P+3.3],[3,P+2.3],[2.1,P+3.1],[3.4,P+3.3]];for(let[ce,Me]of J)e.beginPath(),e.arc(ce,Me,.32,0,7),e.fill();l||(e.beginPath(),e.moveTo(-1.6,P+5.5),e.lineTo(1.6,P+5.5),e.strokeStyle="rgba(210,215,225,.95)",e.lineWidth=.5,e.stroke())}if(i.earrings&&!u){let J=l?[H-.8]:[4.2,-4.2];for(let ce of J)e.beginPath(),i.hoops?(e.arc(ce,P+4.1,1.7,0,7),qe(e,i.earrings,.55)):(e.arc(ce,P+2.7,.55,0,7),L(e,i.earrings,.4))}let re=i.hat,ge=i.hatColor||"#e07a66";if(re&&re!=="none"&&(re==="cap"?(e.beginPath(),e.moveTo(H-4.6,P-1.6),e.bezierCurveTo(H-4.8,P-8.6,H+4.8,P-8.6,H+4.6,P-1.6),e.closePath(),L(e,ge,1),u||(e.beginPath(),e.ellipse(H+(l?4.4:0),P-1.6,l?2.7:4,1,0,0,7),L(e,j(ge,.18),.8))):re==="beanie"?(e.beginPath(),e.moveTo(H-4.8,P-1.4),e.bezierCurveTo(H-5,P-9.6,H+5,P-9.6,H+4.8,P-1.4),e.closePath(),L(e,ge,1),Xe(e,H-4.9,P-2.8,9.8,2,.8),L(e,j(ge,-.25),.8)):re==="bucket"||re==="fedora"?(e.beginPath(),e.moveTo(H-4,P-2.4),e.lineTo(H-3.6,P-6.6),e.lineTo(H+3.6,P-6.6),e.lineTo(H+4,P-2.4),e.closePath(),L(e,ge,1),e.beginPath(),e.ellipse(H,P-2.5,6.4,1.5,0,0,7),L(e,j(ge,.1),.9)):re==="headband"?(e.beginPath(),e.moveTo(H-4.3,P-1.8),e.quadraticCurveTo(H,P-7.4,H+4.3,P-1.8),qe(e,ge,1.1)):re==="headphones"?(e.beginPath(),e.arc(H,P-.4,5.2,Math.PI*1.06,Math.PI*1.94),qe(e,ge,1.1),u||[-1,1].forEach(J=>{Xe(e,H+J*5.1-1,P-1.2,2,3.4,.8),L(e,ge,.7)})):re==="crown"?(e.beginPath(),e.moveTo(H-3,P-5.4),e.lineTo(H-3.3,P-8.8),e.lineTo(H-1.4,P-6.8),e.lineTo(H,P-9.4),e.lineTo(H+1.4,P-6.8),e.lineTo(H+3.3,P-8.8),e.lineTo(H+3,P-5.4),e.closePath(),L(e,i.hatColor||"#EAB94E",.8)):re==="beret"&&(e.beginPath(),e.ellipse(H+1,P-5,5,2,-.12,0,7),L(e,ge,1))),e.restore(),i.teen){let J=i.packColor||"#E8604C";if(u||l)Xe(e,l?-h*4.9-3:-5.2,-36.4,l?6:10.4,12.5,2.2),L(e,J,1),e.fillStyle="rgba(255,255,255,.28)",e.fillRect(l?-h*4.9-1.5:-3.4,-31,l?3:6.8,1.1);else for(let ce of[-1,1])e.beginPath(),e.moveTo(ce*3.8,x+.4),e.lineTo(ce*3.1,-24.8),e.strokeStyle=J,e.lineWidth=1.3,e.lineCap="round",e.stroke()}if(i.tag){let J=P-12+Math.sin(s*4)*1.2;e.beginPath(),e.moveTo(-3.4,J-3.4),e.lineTo(3.4,J-3.4),e.lineTo(0,J+1),e.closePath(),L(e,"#f28f7e",1)}e.restore()}var _0=["#fde7d3","#fbdcc4","#f5cfa8","#f0c29b","#e3ad7f","#d9a074","#c58a5f","#a86f4f","#8d5a3e","#7a4a36","#5e3a2b","#4a2e24"],su=["#d62f3a","#f08a24","#f5c542","#3fb8af","#7b4fbf","#ff5fa2","#ffffff","#2b2b33","#3a2a30","#5a3a35","#694a38","#9a653d","#b5563e","#c9773e","#e0b04e","#f1d98a","#d9d4cc","#8c8c96","#4F91C7","#b8a8da","#e8789a","#5e9c72","#e07a66"];var ru=["#3a2a30","#5a3a2a","#8a6a3a","#c98a3a","#4f8a5e","#4f91c7","#7a8794","#8173ae","#2f6d4f","#a8b8c8","#c62f3a","#b04aa0"],En=["#4f91c7","#326c9e","#8fc9e8","#88b89a","#5e9c72","#a9dcc0","#eab94e","#f8d977","#f6b294","#f28f7e","#d9564a","#eaa5b2","#b8a8da","#8173ae","#c98569","#9a653d","#fff6ea","#9da7aa","#4a3b3f","#2b3a55"],v0=["#EAB94E","#d9d4cc","#e8a58f","#2b2b33","#e8789a","#4F91C7","#5E9C72","#b8a8da","#d62f3a"],y0=["#fbf6ee","#313a3f","#d9564a","#4f91c7","#eab94e","#88b89a","#9a653d","#b8a8da"],yt=(...e)=>e.map(([t,n])=>({id:t,label:n})),au={hairStyle:yt(["fade","Skin fade"],["sidecut","Side shave"],["balding","Balding on top"],["receding","Receding"],["flattop","Flat top"],["pompadour","Pompadour"],["quiff","Quiff"],["hime","Hime cut"],["bantuknots","Bantu knots"],["highpony","High ponytail"],["mullet","Mullet"],["bald","Shaved bald"],["mohawk","Mohawk"],["bowl","Bowl cut"],["slick","Slicked back"],["cornrows","Cornrows"],["locs","Locs"],["shag","Shaggy"],["halfup","Half up"],["crop","Short crop"],["buzz","Buzz cut"],["undercut","Undercut"],["spiky","Spiky"],["messy","Messy"],["sidebang","Side bangs"],["curtains","Curtains"],["pixie","Pixie"],["bob","Bob"],["long","Long"],["wavy","Wavy long"],["curly","Curly puffs"],["afro","Afro"],["pony","Ponytail"],["pigtails","Pigtails"],["twinbuns","Twin buns"],["bun","Bun"],["topknot","Top knot"],["braids","Braids"]),eyeShape:yt(["wink","Wink"],["cute","Big sparkly"],["tired","Tired"],["round","Round"],["oval","Oval"],["wide","Wide"],["sleepy","Sleepy"],["happy","Happy"],["lash","Lashes"]),brow:yt(["worried","Worried"],["angled","Determined"],["unibrow","Unibrow"],["soft","Soft"],["thick","Thick"],["thin","Thin"],["arch","Arched"],["none","None"]),mouthStyle:yt(["tongue","Tongue out"],["teeth","Big smile"],["pout","Pout"],["gap","Gap tooth"],["smile","Smile"],["grin","Grin"],["smirk","Smirk"],["flat","Calm"],["o","Surprised"],["cat","Cat"]),glasses:yt(["none","None"],["round","Round"],["square","Square"],["cat","Cat-eye"],["half","Half-rim"],["sun","Sunglasses"]),hat:yt(["none","None"],["bandana","Bandana"],["visor","Visor"],["sunhat","Sun hat"],["cap","Cap"],["beanie","Beanie"],["bucket","Bucket hat"],["beret","Beret"],["headband","Headband"],["bow","Bow"],["flower","Flower"],["crown","Crown"],["headphones","Headphones"],["catears","Cat ears"]),top:yt(["henley","Henley"],["flannel","Flannel shirt"],["sailor","Sailor top"],["vneck","V-neck jumper"],["cableknit","Cable-knit jumper"],["argyle","Argyle jumper"],["fairisle","Fair Isle jumper"],["cowl","Cowl-neck jumper"],["chunky","Chunky jumper"],["ziphoodie","Zip hoodie"],["varsity","Varsity jacket"],["denim","Denim jacket"],["puffer","Puffer jacket"],["raincoat","Raincoat"],["labcoat","Lab coat"],["apron","Apron"],["polo","Polo"],["turtleneck","Turtleneck"],["cardigan","Cardigan"],["track","Track jacket"],["tee","T-shirt"],["hoodie","Hoodie"],["sweater","Sweater"],["jersey","Jersey"],["blazer","Blazer"],["dress","Dress"],["overalls","Overalls"],["vest","Vest"],["tank","Tank top"]),pattern:yt(["solid","Solid"],["stripes","Stripes"],["dots","Dots"],["plaid","Plaid"],["hearts","Hearts"],["stars","Stars"]),bottom:yt(["jeans","Jeans"],["pleated","Pleated skirt"],["tutu","Tutu"],["kilt","Kilt"],["bike","Bike shorts"],["leggings","Leggings"],["cargo","Cargo pants"],["capri","Capris"],["pants","Pants"],["joggers","Joggers"],["shorts","Shorts"],["skirt","Skirt"]),shoeStyle:yt(["hightop","High-tops"],["loafer","Loafers"],["rainboot","Rain boots"],["slipper","Slippers"],["skate","Skate shoes"],["sneaker","Sneakers"],["boot","Boots"],["sandal","Sandals"],["plain","Plain shoes"]),packStyle:yt(["pack","Backpack"],["messenger","Messenger bag"],["mini","Mini pack"],["none","No bag"]),part:yt(["none","No part"],["left","Left part"],["center","Center part"],["right","Right part"]),fringe:yt(["none","No fringe"],["straight","Straight bangs"],["side","Side-swept"],["curtain","Curtain bangs"],["wispy","Wispy bangs"]),faceShape:yt(["oval","Oval"],["round","Round"],["long","Long"],["square","Square"],["heart","Heart"]),noseShape:yt(["button","Button"],["pointy","Pointy"],["wide","Wide"],["round","Round"]),earShape:yt(["round","Round"],["small","Small"],["big","Big"],["pointy","Pointy"]),beard:yt(["none","None"],["stubble","Stubble"],["goatee","Goatee"],["vandyke","Van Dyke"],["full","Full beard"],["circle","Circle beard"],["pencil","Pencil mustache"],["handlebar","Handlebar mustache"],["walrus","Walrus mustache"],["soulpatch","Soul patch"],["chinstrap","Chin strap"],["sideburns","Sideburns"],["muttonchops","Mutton chops"]),socks:yt(["none","No socks"],["ankle","Ankle socks"],["tall","Tall socks"],["striped","Striped socks"]),extra:yt(["none","None"],["halo","Halo"],["horns","Devil horns"],["bunny","Bunny ears"],["antlers","Antlers"],["unicorn","Unicorn horn"],["antennae","Bee antennae"],["tiara","Tiara"],["flowercrown","Flower crown"],["sparkles","Sparkles"],["angelwings","Angel wings"],["butterfly","Butterfly wings"],["cape","Cape"],["foxtail","Fox tail"],["sash","Sash"],["medal","Medal"],["stethoscope","Stethoscope"],["toolbelt","Tool belt"],["mask","Face mask"],["eyepatch","Eye patch"],["bird","Shoulder bird"]),htex:yt(["straight","Straight"],["wavy","Wavy"],["curly","Curly"],["coily","Coily"],["braided","Braided"],["silky","Silky and shiny"],["frizzy","Frizzy"],["fluffy","Fluffy"]),earStyle:yt(["stud","Studs"],["hoop","Hoops"],["dangle","Dangles"],["pearl","Pearls"],["cuff","Double piercing"]),wrist:yt(["none","None"],["bracelet","Bracelet"],["watch","Watch"],["beads","Beaded bracelet"],["band","Wristband"]),hl:yt(["streak","Streak"],["stripes","Stripes"],["frontpiece","Front piece"],["tips","Dipped tips"],["ombre","Ombre"],["split","Half and half"],["roots","Colored roots"],["underlayer","Hidden layer"],["rainbow","Rainbow"]),mark:yt(["none","None"],["dimples","Dimples"],["birthmark","Birthmark"],["braces","Braces"],["bandaid","Band-aid"],["star","Star sticker"],["paint","Face paint hearts"],["scar","Scar"],["glitter","Glitter"]),neckwear:yt(["none","None"],["necklace","Necklace"],["bowtie","Bow tie"],["tie","Tie"],["bandana","Neck bandana"],["lanyard","Lanyard"]),emblem:yt(["none","None"],["heart","Heart"],["star","Star"],["bolt","Lightning"],["paw","Paw print"],["smile","Smiley"]),build:yt(["slim","Slim"],["regular","Regular"],["sturdy","Sturdy"]),age:yt(["k2","Grades K-2"],["g35","Grades 3-5"],["g68","Grades 6-8"],["hs","High school"])};var x0=()=>({name:"Student",pronouns:"they/them",age:"hs",skin:"#f0c29b",hairStyle:"bun",hair:"#5a3a35",hair2:null,eyeShape:"round",eyeColor:"#5a3a2a",brow:"soft",browColor:null,freckles:!1,mole:!1,nose:!1,blush:!0,mouthStyle:"smile",lip:"#8a4650",glasses:"round",glassColor:"#5b4048",hat:"none",hatColor:"#e07a66",earrings:null,scarf:null,badge:null,top:"hoodie",shirt:"#d9564a",shirt2:"#fff6ea",pattern:"solid",bottom:"pants",pants:"#4f5d75",shoeStyle:"sneaker",shoes:"#fbf6ee",packStyle:"pack",pack:"#8a5f6a",build:"regular",headSize:1,part:"none",fringe:"none",faceShape:"oval",noseShape:"button",earShape:"round",beard:"none",beardColor:null,socks:"none",sockColor:"#fff6ea",extra:"none",extraColor:"#eab94e",eyeColor2:null,eyeShadow:null,liner:!1,height:1,closet:[null,null,null,null,null],earStyle:"stud",nosePin:null,wrist:"none",wristColor:"#eab94e",hl:"streak",htex:"straight",mark:"none",neckwear:"none",neckColor:"#c4463c",emblem:"none",clip:null});var b0=e=>e==="g68"||e==="hs";function Hl(e,t=11){let n=b0(e.age);return{id:t,age:e.age,adultRig:e.age==="hs"?!0:void 0,teen:e.age==="hs"?!0:void 0,packColor:e.age==="hs"?e.pack:void 0,skin:e.skin,hair:e.hair,hair2:e.hair2||void 0,style:e.hairStyle,shirt:e.shirt,shirt2:e.shirt2,top:e.top,pattern:e.pattern,bottom:e.bottom,pants:e.pants,eyeShape:e.eyeShape,eyeColor:e.eyeColor,brow:e.brow,browColor:e.browColor||void 0,freckles:e.freckles,mole:e.mole,nose:e.nose,blush:e.blush,mouthStyle:e.mouthStyle,lip:e.lip,glasses:e.glasses==="none"?!1:e.glasses,glassColor:e.glassColor,hat:e.hat==="none"?void 0:e.hat,hatColor:e.hatColor,earrings:e.earrings||void 0,scarf:e.scarf||void 0,badge:e.badge||void 0,shoeStyle:e.shoeStyle,shoes:e.shoes,packStyle:e.packStyle,pack:e.pack,build:e.build,headSize:e.headSize,part:e.part==="none"?void 0:e.part,fringe:e.fringe==="none"?void 0:e.fringe,faceShape:e.faceShape,noseShape:e.noseShape,earShape:e.earShape,beard:e.age==="hs"||e.age==="adult"?e.beard==="none"?void 0:e.beard:void 0,beardColor:e.beardColor||void 0,socks:e.socks==="none"?void 0:e.socks,sockColor:e.sockColor,extra:e.extra==="none"?void 0:e.extra,extraColor:e.extraColor,eyeColor2:e.eyeColor2||void 0,eyeShadow:e.eyeShadow||void 0,liner:n&&e.liner?!0:void 0,hScale:e.height&&e.height!==1?e.height:void 0,earStyle:e.earStyle,nosePin:n&&e.nosePin||void 0,wrist:n&&e.wrist!=="none"?e.wrist:void 0,wristColor:e.wristColor,hl:e.hl,htex:e.htex==="straight"?void 0:e.htex,mark:e.mark==="none"?void 0:e.mark,neckwear:e.neckwear==="none"||e.neckwear==="necklace"&&!n?void 0:e.neckwear,neckColor:e.neckColor,emblem:e.emblem==="none"?void 0:e.emblem,clip:e.clip||void 0}}function Wl(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var Ze=(e,t)=>t[Math.floor(e()*t.length)],Ct=e=>au[e].map(t=>t.id);function Xl(e,t="hs"){let n=["crop","buzz","undercut","spiky","messy","sidebang","curtains","pixie","bob","long","wavy","curly","afro","pony","pigtails","twinbuns","bun","topknot","braids"],i=Ze(e,Ct("top")),s=e()<.28?Ze(e,Ct("hat").filter(a=>a!=="none")):"none",r=e()<.3?Ze(e,Ct("glasses").filter(a=>a!=="none")):"none";return{...x0(),age:t,name:"",skin:Ze(e,_0),hairStyle:Ze(e,t==="adult"?n:Ct("hairStyle")),hair:Ze(e,su),hair2:e()<.16?Ze(e,su):null,eyeShape:Ze(e,Ct("eyeShape")),eyeColor:Ze(e,ru),brow:Ze(e,Ct("brow").filter(a=>a!=="none")),freckles:e()<.22,mole:e()<.1,nose:e()<.3,blush:e()<.8,mouthStyle:Ze(e,Ct("mouthStyle")),glasses:r,glassColor:Ze(e,["#5b4048","#313a3f","#d9564a","#4f91c7","#b8a8da"]),hat:s,hatColor:Ze(e,En),earrings:e()<.12?Ze(e,["#eab94e","#fff6ea","#f28f7e"]):null,scarf:e()<.1?Ze(e,En):null,badge:e()<.12?Ze(e,En):null,top:i,shirt:Ze(e,En),shirt2:Ze(e,En),pattern:e()<.4?Ze(e,Ct("pattern")):"solid",bottom:i==="dress"?"pants":Ze(e,Ct("bottom")),pants:Ze(e,En),shoeStyle:Ze(e,Ct("shoeStyle")),shoes:Ze(e,y0),packStyle:Ze(e,Ct("packStyle")),pack:Ze(e,En),build:Ze(e,Ct("build")),headSize:.94+e()*.12,part:Ze(e,Ct("part")),fringe:e()<.35?Ze(e,Ct("fringe")):"none",faceShape:Ze(e,Ct("faceShape")),noseShape:Ze(e,Ct("noseShape")),earShape:e()<.8?"round":Ze(e,Ct("earShape").filter(a=>a!=="pointy")),beard:t==="hs"&&e()<.14?Ze(e,Ct("beard").filter(a=>a!=="none")):"none",beardColor:null,socks:e()<.3?Ze(e,Ct("socks")):"none",sockColor:Ze(e,En),extra:e()<.07?Ze(e,Ct("extra").filter(a=>a!=="none")):"none",extraColor:Ze(e,v0),eyeColor2:e()<.04?Ze(e,ru):null,eyeShadow:e()<.06?Ze(e,En):null,liner:e()<.06,height:.96+e()*.08,hl:Ze(e,Ct("hl")),htex:e()<.45?"straight":Ze(e,Ct("htex")),mark:e()<.12?Ze(e,Ct("mark").filter(a=>a!=="none")):"none",neckwear:e()<.12?Ze(e,Ct("neckwear").filter(a=>a!=="none")):"none",neckColor:Ze(e,En),emblem:e()<.14?Ze(e,Ct("emblem").filter(a=>a!=="none")):"none",clip:e()<.1?Ze(e,En):null}}var ql=e=>[e.skin,e.hairStyle,e.hair,e.top,e.shirt,e.pattern,e.hat,e.glasses,e.bottom,e.pants,e.beard,e.faceShape,e.eyeColor,e.hair2,e.htex,e.fringe,e.extra,e.shoes].join("|");var tt=(e,t,n,i,s,r,a,c,l,h)=>({name:e,top:t,top_c:n,inner_c:i,bottom:s,bottom_c:r,shoes_c:a,acc:c,accent_c:l,legs:h}),nt=(e,t,n,i,s)=>({name:e,style:t,color:n,accent:i,v:s}),Zl=[{id:"tanaka",idle:"nod",sig:"finger",num:110,name:"Mr. Hiroshi Tanaka",short:"Tanaka",subject:"Mathematics",room:"Room 112",age:52,gender:"M",skin:"#E2B98F",eye:"#2A1C12",brow:"#4A4541",build:{h:.97,w:.92},features:{glasses:"rect",glassesColor:"#3A3A3A",beard:"mustache",beardColor:"#5A5550",lines:!0},hair:[nt("Classic side part","short","#5E5A57"),nt("Slicked back","slick","#55514E"),nt("Short crop","buzz","#6A6663"),nt("Tousled weekend","pixie","#5E5A57"),nt("Side part, silver streak","short","#8A8683")],outfits:[tt("Grey vest & navy tie","vest","#6B6E73","#EEF2F5","pants","#2E3440","#2A1C14","tie","#1F3A68"),tt("Navy blazer & striped shirt","blazer","#23304A","#DDE7F2","pants","#5B5F66","#2A1C14","tie","#8C2F39"),tt("Oatmeal cardigan & bow tie","cardigan","#CDBB9A","#F6F3EC","pants","#4A4032","#3B2A1E","bowtie","#2E5E4E"),tt("Pale blue button-up","buttonup","#BFD4EA","#BFD4EA","pants","#3C3F45","#1E1E1E","tie","#2D2D2D"),tt("Pi-day sweater","sweater","#2F5D50","#2F5D50","pants","#34373D","#1E1E1E",null)],mannerisms:["Counts steps off on his fingers, always starting with the thumb","Small precise nods while a student talks","Straightens his tie before writing on the board","Pauses mid-sentence to let a pun land, then smiles at nobody"],tone:"Calm, slow and soft-spoken. Speaks in numbered steps. Fond of terrible math puns delivered with total seriousness.",voice:{pitch:.85,rate:.82},lines:{greet:"Good morning. Please be seated, and be rational.",teach:"Step one: isolate x. Step two: do not panic. Step three: check your work.",praise:"Excellent. That answer is... integral to the class.",warn:"I see a calculator under the desk. Its days are numbered.",bye:"Homework is problems one through twenty, odd only. Even you can do it."}},{id:"ayrissa",idle:"bounce",sig:"wave",num:111,name:"Ms. Ayrissa",short:"Ayrissa",subject:"English & Creative Writing",room:"Room 220",age:36,gender:"F",skin:"#734633",eye:"#2A160E",brow:"#18100B",build:{h:1,w:1.03},features:{freckles:!0,earrings:"#D9D9D9",hoops:!0},hair:[nt("Honey-highlight boho curls","curly","#17110E","#D8AE72"),nt("Curly puff & orange headband","afro","#1E1510","#F0651C","puff"),nt("Jet-black boho curls, middle part","curly","#120E0C"),nt("Curtain-bang curls with honey pieces","curly","#17110E","#D8AE72"),nt("Shoulder-length honey twist-out","curly","#1C1410","#C99A5E")],outfits:[tt("Red kaftan top with gold embroidery","sweater","#A51F2E","#A51F2E","pants","#2E3A55","#1A1A1A","beads","#D9B45A"),tt("Navy & white floral wrap dress","dress","#1E2A4A","#1E2A4A","none",void 0,"#E8E0D0",null,"#DCE6F2"),tt("Stone cardigan & khaki joggers","cardigan","#BDB5A8","#EDE8E0","pants","#C8B89A","#F2F2F2","lanyard","#F0651C"),tt("Tropical print wrap top & light denim","sweater","#ECE4D8","#ECE4D8","pants","#8FA7C7","#EDEDED","beads","#D98FA8"),tt("Burnt-orange blazer & black tee","blazer","#C8561E","#1C1C1C","pants","#232323","#1A1A1A","necklace","#D4AF37")],makeup:[{lip:"#7A3E34",shadow:"#3A2620",blush:"#8A4A38",liner:!0},{lip:"#8A4A3E",shadow:"#5A3A2C",blush:"#94503C",liner:!0},{lip:"#6E3A36",shadow:"#2A3350",blush:"#864A3A",liner:!0},{lip:"#9A6A5A",shadow:"#6A4A3A",blush:"#9A5A44",liner:!1},{lip:"#5E1E2E",shadow:"#4A2A3A",blush:"#8A3E40",liner:!0}],mannerisms:["Rests her chin on her fist when she's really listening","Her smile shows up before the answer does","Flips her curls over one shoulder before reading a poem out loud","Hypes up every raised hand: 'Yes! Say that!'"],tone:"High energy and warm. Talks fast, laughs easily and turns every answer into a celebration. Big on 'my brilliant people' and making sure every voice gets heard.",voice:{pitch:1.18,rate:1.14},lines:{greet:"Good morning, my brilliant people! Pens out, energy up, let's WRITE!",teach:"A metaphor isn't decoration, it's a door. Open it! What's behind yours?",praise:"YES! Say that again, louder, for the people in the back!",warn:"Uh-uh, phones down. Your story is way more interesting than that screen.",bye:"Journal tonight, even one line. Your voice matters. Love you, bye!"}},{id:"okafor",idle:"still",sig:"finger",num:112,name:"Ms. Adaeze Okafor",short:"Okafor",subject:"Chemistry",room:"Lab 204",age:38,gender:"F",skin:"#6B4226",eye:"#3B2314",brow:"#1A120D",build:{h:1.06,w:.98},features:{glasses:"cateye",glassesColor:"#7A1F2B",earrings:"#D4AF37"},hair:[nt("Locs in a high bun","bun","#1B1411","#D4AF37"),nt("Waist-length box braids","long","#1B1411","#D4AF37","braids"),nt("Natural afro","afro","#221815"),nt("Sleek low ponytail","pony","#1B1411"),nt("Burgundy twist-out","curly","#4A1C24")],outfits:[tt("Lab coat over teal turtleneck","labcoat","#F4F6F6","#1F6F6B","pants","#2B2D33","#1C1C1C",null,"#1F6F6B"),tt("Mustard blazer & cream blouse","blazer","#C99A2E","#F2E8D5","pants","#3A2E28","#5A3A22","necklace","#D4AF37"),tt("Kente-trim wrap dress","dress","#1E4E79","#1E4E79","none",void 0,"#E0A526","brooch","#E0A526"),tt("Emerald sweater & pencil skirt","sweater","#1F6A4A","#1F6A4A","skirt","#2A2A2E","#1C1C1C","lanyard","#C0392B","#2A1A12"),tt("Friday cardigan & periodic-table tee","cardigan","#6D2E46","#ECECEC","pants","#4C6A92","#F2F2F2",null)],makeup:[{lip:"#8C3B3B",shadow:"#8A5A3C",blush:"#B5543F",liner:!1},{lip:"#6E1E3A",shadow:"#5E3A4A",blush:"#A4454F",liner:!0},{lip:"#9A4E3A",shadow:"#C9A13B",blush:"#B8603E",liner:!0},{lip:"#A0624A",shadow:"#7A5238",blush:"#A5553E",liner:!1},{lip:"#9E1B22",shadow:"#6A3F2C",blush:"#B04A3A",liner:!0}],mannerisms:["Pushes her glasses up with one knuckle before making a point","Taps a marker twice against her palm when waiting for an answer","Raises one eyebrow instead of saying 'really?'","Stands perfectly still, then moves with purpose"],tone:"Precise and dry. Short sentences, exact numbers, a deadpan joke about once a lesson. Never raises her voice; lowers it instead.",voice:{pitch:.95,rate:.92},lines:{greet:"Goggles on, bags under the bench. Good morning.",teach:"Sodium plus water. Watch the reaction, not me. I already know what happens.",praise:"Correct, to three significant figures. I'm impressed.",warn:"That is not a beaker of juice. Put it down. Slowly.",bye:"Wash your hands. Twice. See you Thursday."}},{id:"obrien",idle:"sway",sig:"shrug",num:113,name:"Mr. Declan O'Brien",short:"O'Brien",subject:"History",room:"Room 301",age:45,gender:"M",skin:"#F0C8AE",eye:"#5A7A4A",brow:"#8A3C1E",build:{h:1,w:1.14},features:{beard:"full",beardColor:"#8A3C1E",freckles:!0},hair:[nt("Tousled copper","pixie","#9A4520"),nt("Swept side part","short","#8A3C1E"),nt("Tied-back 'historian bun'","bun","#8A3C1E"),nt("Shoulder-length waves","bob","#9A4520"),nt("Slicked for the museum trip","slick","#7A3418")],outfits:[tt("Tweed blazer with elbow patches","blazer","#7A6A52","#E8E2D4","pants","#4A4238","#3B2616","tie","#5A2A1E"),tt("Forest cardigan & plaid shirt","cardigan","#2F4A34","#A6463A","pants","#6B5A44","#3B2616",null),tt("Burgundy sweater vest","vest","#6B1F2A","#EDE8DC","pants","#3A3A3A","#2A1A10","bowtie","#1F3A2A"),tt("Rolled-sleeve oxford","buttonup","#E9E4D8","#E9E4D8","pants","#556B45","#3B2616","tie","#244060"),tt("Cable-knit fisherman sweater","turtleneck","#DCD2BC","#DCD2BC","pants","#3E3A33","#3B2616",null)],mannerisms:["Spreads both arms wide when setting a scene","Leans in and drops to a stage whisper before a twist","Strokes his beard while listening","Rocks back on his heels after a punchline"],tone:"Theatrical storyteller. Big pauses, dramatic whispers, then a booming reveal. Treats every lesson like a campfire tale.",voice:{pitch:.75,rate:.95},lines:{greet:"Gather round, gather round! Today... we march on Rome.",teach:"Picture it. 1066. Mud to your ankles. Arrows in the air. And then...",praise:"Ha! A scholar among us! Rome would have made you a senator.",warn:"Ah-ah. The only revolution in this room is on page forty.",bye:"History waits for no one. Except you, on Monday. Off with ye!"}},{id:"haddad",idle:"still",sig:"explain",num:114,name:"Mr. Karim Haddad",short:"Haddad",subject:"Geography & Careers",room:"CarryingCareers",age:41,gender:"M",skin:"#B98460",eye:"#3A2412",brow:"#16100C",build:{h:1.03,w:1.02},features:{beard:"full",beardColor:"#1A1410"},hair:[nt("Neat short crop","short","#16100C"),nt("Textured quiff","slick","#16100C"),nt("Close buzz","buzz","#16100C"),nt("Soft waves grown out","pixie","#1C1410"),nt("Shaved clean","bald","#16100C")],outfits:[tt("Olive field shirt","buttonup","#6A7048","#6A7048","pants","#C8B68E","#5A3A22",null),tt("Navy sweater over collar","sweater","#23324E","#EAEAEA","pants","#6A6258","#3B2616",null),tt("Charcoal suit & rust tie","blazer","#3A3C40","#F2F2F2","pants","#3A3C40","#1A1A1A","tie","#B0532E"),tt("Camel cardigan","cardigan","#B8905A","#2E4A5A","pants","#2E2E30","#3B2616",null),tt("Expedition vest","vest","#4A5A3A","#D8CFC0","pants","#5A4E3A","#5A3A22","scarf","#A83A2A")],mannerisms:["Strokes his beard slowly before answering","Points to places on an invisible map in the air","Waits a full three seconds of silence for you to think","Taps his compass watch when it's time to move on"],tone:"Patient, low and thoughtful. Asks more questions than he answers. Every sentence sounds like it has been considered twice.",voice:{pitch:.7,rate:.85},lines:{greet:"Welcome, travelers. Where in the world shall we begin today?",teach:"A path is not found. It is walked, one step at a time. Which step is yours?",praise:"Good. You didn't just answer. You thought. That is the difference.",warn:"The map will still be here if you stop throwing it.",bye:"Look at the sky on your walk home. Tell me which way the wind blew."}},{id:"park",idle:"bounce",sig:"wave",num:115,name:"Ms. Chloe Park",short:"Park",subject:"Computer Science",room:"Lab 110",age:27,gender:"F",skin:"#F1D1B5",eye:"#2A1A12",brow:"#1A1210",build:{h:.92,w:.94},features:{glasses:"round",glassesColor:"#1A1A1A",earrings:"#7FD4E0"},hair:[nt("Blunt bob with bangs","bob","#141014"),nt("Space buns","bun","#141014","#8E5CE0"),nt("Lavender-streak ponytail","pony","#141014","#B58CF0"),nt("Long straight","long","#141014"),nt("Teal-tipped pixie","pixie","#1E2A30")],outfits:[tt("Oversized hoodie-sweater","sweater","#7A6AC8","#7A6AC8","skirt","#2A2A34","#F2F2F2","lanyard","#34C3A0","#1E1E26"),tt("Pastel cardigan & tee","cardigan","#F2B8C6","#FFFFFF","pants","#4A6A9A","#F2F2F2","necklace","#7FD4E0"),tt("Pinafore dress","dress","#2E4A6A","#F2F2F2","none",void 0,"#1A1A1A",null,"#F2C84A","#E8C8B0"),tt("Hackathon track jacket","track","#1A1A24","#34C3A0","pants","#1A1A24","#34C3A0","lanyard","#34C3A0"),tt("Mint button-up & suspender skirt","buttonup","#BFE8D8","#BFE8D8","skirt","#3A3A4A","#6A3A5A","bowtie","#6A3A5A","#E8C8B0")],makeup:[{lip:"#D0506A",shadow:"#C8A0A0",blush:"#F0A0A8",liner:!1},{lip:"#C07080",shadow:"#B8A0E0",blush:"#F0A8B0",liner:!0},{lip:"#D09088",shadow:"#D8B8A8",blush:"#F0B0A8",liner:!1},{lip:"#B0606A",shadow:"#8AC8C8",blush:"#E8A0A0",liner:!0},{lip:"#B8283A",shadow:"#C09898",blush:"#F09098",liner:!1}],mannerisms:["Pushes her giant glasses up with the back of her wrist","Fidgets with a keycap keychain while thinking","Double thumbs-up when your code compiles","Talks faster and faster until she catches herself, laughs, and restarts"],tone:"Quick, bubbly and nerdy. Lots of tech slang and tangents. Gets so excited she speeds up, then resets with a laugh.",voice:{pitch:1.35,rate:1.18},lines:{greet:"Hi hi hi! Okay, log in, we're debugging today and it's gonna be SO fun.",teach:"So a loop is just the computer going 'again? again? again?' until you tell it to stop.",praise:"It compiled?! First try?! Double thumbs up, you legend.",warn:"Mm, that's an infinite loop. Your laptop is crying. Ctrl+C, please.",bye:"Commit your work! Push it! Don't be the person who loses it. Bye!"}},{id:"larsen",idle:"nod",sig:"finger",num:116,name:"Dr. Ingrid Larsen",short:"Larsen",subject:"Life Lessons",room:"Life Lessons",age:60,gender:"F",skin:"#F3D6C6",eye:"#4F86B8",brow:"#B8AE9E",build:{h:1.02,w:1},features:{glasses:"round",glassesColor:"#B08A4A",lines:!0,earrings:"#9FC9E0"},hair:[nt("Silver chignon","bun","#D8D2C4"),nt("Chin-length bob","bob","#E0DACE"),nt("Crown braid updo","bun","#D8D2C4","#9FC9E0"),nt("Soft pixie","pixie","#E4DFD4"),nt("Loose silver waves","long","#D0C9BA")],outfits:[tt("Lab coat over lavender blouse","labcoat","#F7F7F5","#B9A6D6","skirt","#4A4E5A","#3A2E28","lanyard","#2E7D5B","#D8B8A8"),tt("Moss cardigan","cardigan","#6A7F4A","#F2EEE4","pants","#5A4E40","#3A2E28","brooch","#C9A13B"),tt("Botanical print dress","dress","#2E5E6A","#2E5E6A","none",void 0,"#2A2A2A","necklace","#E7C66A","#D8B8A8"),tt("Fair Isle sweater","sweater","#9C3B3B","#9C3B3B","pants","#2E3A4A","#3A2E28",null,"#F2EEE4"),tt("Field-trip vest & flannel","vest","#8A7A5A","#3E6A8A","pants","#4A4A3A","#5A3A22","scarf","#C9763B")],makeup:[{lip:"#C07A7A",shadow:"#B8A2A0",blush:"#E89A9A",liner:!1},{lip:"#D0705A",shadow:"#B8A090",blush:"#E8A090",liner:!1},{lip:"#9A5A6A",shadow:"#9A8AA8",blush:"#D88A9A",liner:!0},{lip:"#C8908A",shadow:"#C8B8B0",blush:"#E8AAA0",liner:!1},{lip:"#B02A36",shadow:"#A08A80",blush:"#E08A8A",liner:!0}],mannerisms:["Peers over her glasses before asking a question she already knows the answer to","Holds up one finger: 'Ah, but...'","Cups her hands as if holding something alive when describing cells","Hums while she labels specimen jars"],tone:"Warm, grandmotherly and razor sharp. Unhurried and kind, with a Scandinavian bluntness that surprises people.",voice:{pitch:1.05,rate:.85},lines:{greet:"Good morning, my future grown-ups. Let us see what life has to teach today.",teach:"Ah, but... who pays for it? Everything in grown-up life is a bargain with yourself.",praise:"Very good. You think like a scientist now. Dangerous.",warn:"The frog has been through enough. Please stop waving it.",bye:"Try one thing for yourself this week. I will ask how it went."}},{id:"raman",idle:"tilt",sig:"explain",num:117,name:"Mrs. Priya Raman",short:"Raman",subject:"English Literature",room:"Room 215",age:44,gender:"F",skin:"#A8703F",eye:"#2A160C",brow:"#1C120C",build:{h:.95,w:.97},features:{glasses:"half",glassesColor:"#6A4A8A",earrings:"#E6C35C"},hair:[nt("Long center-part","long","#16100C"),nt("Low braided bun","bun","#16100C","#E6C35C"),nt("Single long braid","pony","#1A120E","#B83A5A"),nt("Soft shoulder waves","bob","#24160F"),nt("Loose curls, henna tint","curly","#4A2418")],outfits:[tt("Plum cardigan & floral blouse","cardigan","#5E2E5A","#F2D8C8","skirt","#2E2A40","#3A2418","scarf","#D9A441","#6B4428"),tt("Saffron kurta dress","dress","#D98E2B","#D98E2B","none",void 0,"#8A1F3A","necklace","#8A1F3A"),tt("Teal turtleneck & long skirt","turtleneck","#1E6A70","#1E6A70","skirt","#5A4632","#2A1A12","necklace","#E6C35C","#5A4632"),tt("Rose blazer & ivory shell","blazer","#C77A8A","#F5EFE6","pants","#3B3346","#E6C35C","brooch","#E6C35C"),tt("Book-club sweater","sweater","#8A9A5B","#8A9A5B","skirt","#4A3A2A","#2A1A12","scarf","#B83A5A","#3A2A20")],makeup:[{lip:"#9A4A5A",shadow:"#5A3A30",blush:"#B8645A",liner:!0},{lip:"#8A5060",shadow:"#7A5A6A",blush:"#B06A6A",liner:!1},{lip:"#8E2A3A",shadow:"#D4A24A",blush:"#C06A50",liner:!0},{lip:"#8A3A2A",shadow:"#6A4030",blush:"#A85A48",liner:!0},{lip:"#9A6458",shadow:"#8A6A58",blush:"#B07060",liner:!1}],mannerisms:["Hugs her book to her chest when a passage moves her","Tilts her head and smiles before gently disagreeing","Looks over her half-moon glasses at the whole room","Quotes a line of poetry to end almost any argument"],tone:"Gentle, lyrical and encouraging. Long, flowing sentences, lots of 'dear' and 'lovely'. Corrects you so kindly you thank her for it.",voice:{pitch:1.1,rate:.88},lines:{greet:"Good morning, my dears. Open your books to where the story left us.",teach:"Notice how the rain falls just as she says goodbye. Nothing in a novel is an accident.",praise:"Oh, that's lovely. Write that down before it flies away.",warn:"Darling, 'it was good' is not an essay. Tell me why it was good.",bye:"Read chapter nine tonight, and let it keep you up a little."}}],S0=e=>{let t=2166136261;for(let n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0},M0=e=>()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296},T0=e=>{let t=new Date(e.getFullYear(),0,1),n=Math.floor((+e-+t)/864e5/7);return`${e.getFullYear()}-${n}`};function Yl(e,t,n=new Date){let i=M0(S0(e+t+T0(n))),s=[0,1,2,3,4];for(let c=4;c>0;c--){let l=Math.floor(i()*(c+1));[s[c],s[l]]=[s[l],s[c]]}let r=n.getDay(),a=r===6?0:r===0?1:r-1;return s[a]}var w0={short:"crop",slick:"crop",pixie:"crop",buzz:"buzz",bun:"bun",bob:"bob",long:"long",pony:"pony",afro:"afro",curly:"curly",bald:"bald"},E0={rect:"square",round:"round",cateye:"cat",half:"half"};function ou(e,t=new Date){let n=e.hair[Yl(e.id,"hair",t)],i=e.outfits[Yl(e.id,"outfit",t)],s=e.features,r=e.makeup?.[Yl(e.id,"makeup",t)],a={id:e.num,age:"adult",skin:e.skin,hair:n.color,hair2:n.accent&&n.style!=="afro"?n.accent:void 0,style:w0[n.style]??"crop",shirt:i.top_c,shirt2:i.inner_c,top:i.top,bottom:i.bottom==="none"?"pants":i.bottom,pants:i.bottom_c??"#3a3a44",tights:i.legs,shoes:i.shoes_c,acc:i.acc??void 0,accent:i.accent_c,eyeColor:e.eye,browColor:e.brow,brow:e.gender==="M"?"thick":"soft",glasses:s.glasses?E0[s.glasses]??"round":!1,glassColor:s.glassesColor,earrings:s.earrings,hoops:s.hoops,beard:s.beard,beardColor:s.beardColor,freckles:s.freckles,lines:s.lines||e.age>50,bodyW:e.build.w,hScale:e.build.h,lip:r?.lip,shadow:r?.shadow,blushColor:r?r.blush+"55":void 0,blush:r?!0:void 0,liner:r?.liner,lanyard:i.acc==="lanyard",tag:!1};return n.style==="afro"&&n.accent&&(a.hat="headband",a.hatColor=n.accent),a}var Sx=Object.fromEntries(Zl.map(e=>[e.id,e]));var A0=["cheerful","shy","sporty","nerdy","artsy","funny","curious","bossy","dreamy","kind"],lu=["Maya","Marcus","Priya","Leo","Amara","Diego","Sofia","Kenji","Zara","Eli","Nadia","Tobias","Imani","Mateo","Hana","Omar","Lucia","Jonah","Anika","Caleb","Mei","Ravi","Talia","Felix","Yara","Ben","Chloe","Dev","Esme","Finn","Grace","Hugo","Isla","Jamal","Keira","Liam","Mira","Noah","Olive","Pablo","Quinn","Rosa","Sam","Tessa","Uma","Victor","Willa","Xavier","Yusuf","Zoe","Aiden","Bella","Cyrus","Daria","Emil","Farah","Gus","Harper"],hu=["Chen","Reed","Patel","Okafor","Santos","Nguyen","Kim","Haddad","Rivera","Brooks","Ivanov","Tanaka","Mensah","Larsen","Cruz","Adeyemi","Fischer","Ibrahim","Kowalski","Lopez","Morales","Novak","Osei","Park","Quintero","Rossi","Singh","Torres","Underwood","Vega","Walker","Yamada","Zhang","Abbott","Bishop","Castillo","Dalton","Ellis","Foster","Grant"],cu={young:["dinosaurs","building with blocks","drawing animals","jumping rope","bugs and butterflies","playing tag","stickers","toy trains","singing songs","baking cookies"],mid:["soccer","robotics club","drawing comics","chess","baking","birdwatching","skateboarding","minecraft builds","magic tricks","swimming","reading mysteries","playing violin","origami","space and rockets"],teen:["basketball","coding","photography","theater","poetry","painting","piano","track and field","debate","gardening","making music","volleyball","film editing","cooking"]},C0=["tacos","mac and cheese","pizza","fried rice","mango slices","pancakes","dumplings","hummus and pita","grilled cheese","pasta","chicken nuggets","cheeseburgers","sushi rolls","samosas","peanut butter sandwiches"],P0=["a dog named Biscuit","a cat named Pickles","a hamster named Nugget","two goldfish","a rabbit named Clover","a parrot named Mango","a turtle named Speedy","a gecko named Ziggy",null,null,null],R0=["become an astronaut","open a bakery","play pro soccer","write a graphic novel","be a marine biologist","build robots","become a teacher","direct movies","be a vet","design video games","be a chef","become a pilot","run for mayor","be a musician"],uu=["always hums while working","carries a tiny notebook everywhere","says 'for real though' a lot","collects interesting rocks","never leaves without a snack","talks to plants","draws doodles on everything","counts steps in the hallway","makes up nicknames","loves puns","gets the hiccups when nervous","is always five minutes early"],I0=["is secretly afraid of the dark","still sleeps with a stuffed bunny","writes songs nobody has heard","wants to try out for the school play but is nervous","can solve a Rubik's cube in under a minute","once got lost in the library for an hour","has a crush on someone in the art club","is saving up for a telescope","is learning a new language in secret","feels nervous about speaking in class"],du=["math","ela","science","history"],fu=["k2","g35","g68","hs","g35","g68","k2","hs","g68","g35"],L0=(e,t)=>e==="k2"?["K","1","2"][t%3]:e==="g35"?["3","4","5"][t%3]:e==="g68"?["6","7","8"][t%3]:e==="hs"?["9","10","11","12"][t%4]:"Staff",mn=(e,t)=>t[Math.floor(e()*t.length)];function D0(e=48,t=20260930){let n=Wl(t),i=new Set,s=new Set,r=[],a="",c="";for(let l=0;l<e;l++){let h=fu[l%fu.length],u,g=0;do u=Xl(n,h),g++;while((i.has(ql(u))||u.hairStyle===a||u.hair===c)&&g<60);i.add(ql(u)),a=u.hairStyle,c=u.hair,(h==="k2"||h==="g35")&&(u.glasses=n()<.12?u.glasses:"none",u.top==="blazer"&&(u.top="hoodie"));let p=lu[l%lu.length],f=mn(n,hu),_=`${p} ${f}`;for(;s.has(_);)f=mn(n,hu),_=`${p} ${f}`;s.add(_),u.name=p;let M=h==="k2"||h==="g35"?"young":h==="g68"?"mid":"teen",d=cu[M],m=[mn(n,d)];for(;m.length<3;){let P=mn(n,[...d,...cu.mid]);m.includes(P)||m.push(P)}let w=mn(n,du),F=mn(n,du.filter(P=>P!==w)),S=A0[(l*3+Math.floor(n()*10))%10],E=Math.floor(n()*4),T=L0(h,E);r.push({id:l,key:`n${l}`,name:_,first:p,role:"student",age:h,grade:T,spec:u,look:{...Hl(u,l),tag:!1},personality:S,interests:m,favSubject:w,hardSubject:F,food:mn(n,C0),pet:mn(n,P0),dream:mn(n,R0),quirk:mn(n,uu),secret:mn(n,I0),bestFriend:(l+1+Math.floor(n()*5))%e,rival:n()<.3?(l+7+Math.floor(n()*9))%e:null,bio:`${p} is in grade ${T}, loves ${m[0]} and ${m[1]}, and ${mn(n,uu)}.`})}for(let l of r)l.bestFriend===l.id&&(l.bestFriend=(l.id+1)%e);return r}var Ax=D0(56);var F0=e=>({...Xl(Wl(e.name?.length??5),"adult"),...e});function pu(e,t,n,i,s,r,a={}){let c=F0({name:t.split(" ").pop(),age:"adult",...s}),l=t.split(" ").pop();return{id:e,key:`s${e}`,name:t,first:l,role:"staff",title:n,age:"adult",grade:"Staff",spec:c,look:{...Hl(c,e),tag:!1},personality:r,interests:["helping students","coffee","crossword puzzles"],favSubject:i??"history",hardSubject:"math",food:"a good salad",pet:null,dream:"see every student find something they love",quirk:"keeps spare pencils in every pocket",secret:"still has their own first-grade report card",bestFriend:0,rival:null,bio:`${t} is ${n}.`,...a}}var N0={tanaka:"nerdy",ayrissa:"cheerful",okafor:"nerdy",obrien:"funny",haddad:"kind",park:"curious",larsen:"kind",raman:"dreamy"},U0={tanaka:"the math teacher",ayrissa:"the English teacher",okafor:"the chemistry and science teacher",obrien:"the history teacher",haddad:"the CarryingCareers teacher",park:"the computer science teacher",larsen:"the Life Lessons teacher",raman:"the English literature teacher"},k0={tanaka:"math",ayrissa:"ela",okafor:"science",obrien:"history",haddad:"careers",park:"science",larsen:"life",raman:"ela"};function B0(e){let t=e.short,n=ou(e);return pu(e.num,e.name,U0[e.id],k0[e.id],{skin:e.skin,hair:n.hair},N0[e.id],{look:n,faculty:e.id,quirk:e.mannerisms[0].charAt(0).toLowerCase()+e.mannerisms[0].slice(1),bio:`${e.name} teaches ${e.subject} (${e.room}). ${e.tone}`,first:t,interests:[e.subject.toLowerCase(),"coffee","helping students"]})}var vi=e=>B0(Zl.find(t=>t.id===e)),O0=[pu(100,"Mr. Bello","the hall monitor",null,{skin:"#7a4a36",hair:"#2b2b33",hairStyle:"crop",top:"vest",shirt:"#c98569",shirt2:"#fff6ea",bottom:"pants",pants:"#2b3a55",hat:"none",glasses:"none",packStyle:"none",brow:"thick",mouthStyle:"smile"},"kind"),vi("raman"),vi("tanaka"),vi("ayrissa"),vi("okafor"),vi("obrien"),vi("haddad"),vi("park"),vi("larsen")],bs=e=>O0.find(t=>t.faculty===e),mu={math:bs("tanaka"),ela:bs("ayrissa"),science:bs("okafor"),history:bs("obrien"),careers:bs("haddad"),life:bs("larsen")};var wt=(e,t={})=>new hs({color:e,roughness:.85,...t}),je=(e,t,n=0,i=0,s=0)=>{let r=new sn(e,t);return r.position.set(n,i,s),r},ut=(e,t)=>e+Math.random()*(t-e),Jl=(e,t,n)=>{for(let i=0;i<e;i++)n(i/e*Math.PI*2,i)},$l=[{id:"reef",name:"Coral Reef",icon:"\u{1F420}",subject:"science",blurb:"Dive into warm, shallow water full of life.",sky:["#BFEFFF","#0E5C9C"],fog:"#2A8FC0",build:(e,t)=>{e.add(je(new hi(60,40).rotateX(-Math.PI/2),wt("#E8D7A8"),0,-2.2,0)),Jl(26,12,(s,r)=>{let a=ut(6,20),c=["#F26B5B","#F2A03D","#E070A8","#8E7CC3","#FFD23F"][r%5],l=new Pt;for(let h=0;h<4;h++)l.add(je(new Nn(ut(.2,.5),ut(1,2.4),8),wt(c),ut(-.5,.5),ut(-1.8,-1),ut(-.5,.5)));l.position.set(Math.cos(s)*a,0,Math.sin(s)*a),e.add(l)});for(let s=0;s<4;s++){let r=[];for(let h=0;h<9;h++){let u=new Pt;u.add(je(new Zt(.22,8,6).scale(1.6,1,.6),wt(["#FF8A3D","#FFD23F","#7BD3F2","#F26B8D"][s]))),u.add(je(new Nn(.16,.3,4).rotateZ(Math.PI/2),wt(["#FF8A3D","#FFD23F","#7BD3F2","#F26B8D"][s]),-.36,0,0)),e.add(u),r.push(u)}let a=5+s*2.2,c=-.4+s*.5,l=.35+s*.08;t.push(h=>r.forEach((u,g)=>{let p=h*l+g*.35+s;u.position.set(Math.cos(p)*a,c+Math.sin(h+g)*.2,Math.sin(p)*a),u.rotation.y=-p}))}let n=new Pt;n.add(je(new Zt(.7,12,8).scale(1.3,.55,1),wt("#6B9B4C"))),n.add(je(new Zt(.22,8,6),wt("#8BBF6A"),.95,.05,0)),e.add(n),t.push(s=>{let r=s*.12;n.position.set(Math.cos(r)*9,1.4+Math.sin(s*.5)*.3,Math.sin(r)*9),n.rotation.y=-r+Math.PI});let i=[];for(let s=0;s<40;s++){let r=je(new Zt(.06,6,4),new Qt({color:"#fff",transparent:!0,opacity:.6}),ut(-9,9),ut(-2,6),ut(-9,9));e.add(r),i.push(r)}t.push((s,r)=>i.forEach(a=>{a.position.y+=r*.6,a.position.y>7&&(a.position.y=-2)}))},spots:[{at:[-5,1.2,-6],title:"Coral is an animal",fact:"Coral looks like a plant or a rock, but it is made of tiny animals called polyps. Thousands live together, and reefs cover less than one percent of the ocean floor yet shelter about a quarter of sea life."},{at:[6,2,-3],title:"Schooling fish",fact:"Fish swim in schools to stay safe. With so many eyes, it is hard for a hungry predator to sneak up. Every fish copies its neighbours, so the whole group turns together like one big animal."},{at:[0,3,9],title:"Sea turtle",fact:"Sea turtles can hold their breath for hours while resting. They return to the same beach where they were born to lay their own eggs, sometimes after travelling thousands of kilometres."}]},{id:"forest",name:"Rainforest",icon:"\u{1F334}",subject:"science",blurb:"Tall trees, butterflies and a river below the canopy.",sky:["#E6FFD0","#2E7D4F"],fog:"#3B8F5E",build:(e,t)=>{e.add(je(new hi(60,40).rotateX(-Math.PI/2),wt("#5B4A2B"),0,-1.6,0));let n=je(new Un(4,60).rotateX(-Math.PI/2),wt("#4FA3C0",{roughness:.2}),6,-1.55,0);e.add(n);for(let i=0;i<46;i++){let s=ut(0,6.28),r=ut(5,28),a=ut(10,20),c=new Pt;c.add(je(new $n(.35,.55,a,8),wt("#6B4A2B"),0,a/2-1.6,0)),c.add(je(new Zt(ut(2.5,4.5),8,6).scale(1,.5,1),wt(["#2F9E5B","#3FB06B","#1F7A44"][i%3]),0,a-1.4,0)),c.position.set(Math.cos(s)*r,0,Math.sin(s)*r),e.add(c)}for(let i=0;i<14;i++){let s=new Pt,r=["#FFB347","#6AA9F0","#F26B8D"][i%3];s.add(je(new Un(.35,.28),new Qt({color:r,side:tn}),-.18,0,0)),s.add(je(new Un(.35,.28),new Qt({color:r,side:tn}),.18,0,0)),e.add(s);let a=ut(3,10),c=ut(0,6);t.push(l=>{let h=l*.3+c;s.position.set(Math.cos(h)*a,1+Math.sin(l*1.3+c)*.8,Math.sin(h)*a),s.children.forEach((u,g)=>u.rotation.y=Math.sin(l*14+c)*(g?-.8:.8))})}},spots:[{at:[-4,3,-7],title:"The canopy",fact:"The top layer of the rainforest is called the canopy. The leaves are so thick that very little sunlight reaches the ground, and many animals spend their whole lives up there without ever touching the forest floor."},{at:[5,1.4,4],title:"Rainforest river",fact:"Rainforests make their own rain. Trees release water vapour from their leaves, which rises, cools into clouds and falls again. Rivers carry that water back through the forest."},{at:[0,4,-12],title:"Butterflies",fact:"Butterflies taste with their feet and drink nectar through a long straw called a proboscis. Bright wing colours can warn birds that a butterfly tastes bad."}]},{id:"rome",name:"Ancient Rome",icon:"\u{1F3DB}\uFE0F",subject:"history",blurb:"Walk through the Roman Forum, 2,000 years ago.",sky:["#FFE9C2","#7FB4E8"],fog:"#EBD9B5",build:(e,t)=>{e.add(je(new hi(60,40).rotateX(-Math.PI/2),wt("#E9DEC4"),0,-1.6,0)),e.add(je(new ls(4,5,48).rotateX(-Math.PI/2),wt("#B04A3C"),0,-1.58,0)),Jl(14,11,i=>{let s=new Pt;s.add(je(new $n(.55,.65,7,14),wt("#F4EFE6"),0,1.9,0)),s.add(je(new Yt(1.7,.4,1.7),wt("#E3DCCB"),0,5.5,0)),s.add(je(new Yt(1.7,.35,1.7),wt("#E3DCCB"),0,-1.45,0)),s.position.set(Math.cos(i)*11,0,Math.sin(i)*11),e.add(s)});let n=new Pt;n.add(je(new Yt(2,9,2),wt("#E8DCC0"),-4,2.9,0)),n.add(je(new Yt(2,9,2),wt("#E8DCC0"),4,2.9,0)),n.add(je(new Yt(10,2,2),wt("#E8DCC0"),0,7.5,0)),n.position.set(0,0,-20),e.add(n),Jl(8,14,(i,s)=>{let r=je(new Un(1.2,3),new Qt({color:s%2?"#B04A3C":"#C79B2E",side:tn}),Math.cos(i)*9,4,Math.sin(i)*9);r.lookAt(0,4,0),e.add(r),t.push(a=>{r.rotation.z=Math.sin(a*1.5+s)*.08})})},spots:[{at:[-8,3,6],title:"Roman columns",fact:"Roman builders copied Greek columns and added arches and concrete. A Roman arch spreads weight to the sides so buildings could be taller and last longer. Many Roman buildings still stand today."},{at:[0,6,-18],title:"The triumphal arch",fact:"Arches like this celebrated victories and important leaders. Generals paraded beneath them while crowds cheered. The carvings told the story of the event for everyone to read."},{at:[8,2.5,5],title:"The Forum",fact:"The Forum was the busy centre of Rome. People met friends, shopped, listened to speeches and watched trials. It was part town square, part courthouse and part marketplace."}]},{id:"space",name:"Space Station",icon:"\u{1F6F0}\uFE0F",subject:"science",blurb:"Float above the Earth as it spins below.",sky:["#02030A","#0A0D26"],fog:"#02030A",build:(e,t)=>{let n=new Pt;for(let h=0;h<700;h++){let u=je(new Zt(.06,4,3),new Qt({color:"#fff"})),g=ut(0,6.28),p=ut(-1.4,1.4),f=80;u.position.set(Math.cos(g)*Math.cos(p)*f,Math.sin(p)*f,Math.sin(g)*Math.cos(p)*f),n.add(u)}e.add(n);let i=document.createElement("canvas");i.width=512,i.height=256;let s=i.getContext("2d");s.fillStyle="#1E5FA8",s.fillRect(0,0,512,256),s.fillStyle="#4C9F5E";for(let h=0;h<40;h++)s.beginPath(),s.ellipse(ut(0,512),ut(20,236),ut(14,50),ut(8,28),ut(0,3),0,6.28),s.fill();s.fillStyle="rgba(255,255,255,.55)";for(let h=0;h<30;h++)s.beginPath(),s.ellipse(ut(0,512),ut(0,256),ut(20,60),ut(4,10),0,0,6.28),s.fill();let r=je(new Zt(22,48,32),new hs({map:new Ai(i),roughness:.9}),0,-30,-10);e.add(r),t.push(h=>{r.rotation.y=h*.03});let a=new Pt,c=wt("#D8DCE6",{metalness:.5,roughness:.4});a.add(je(new qs(7,.45,8,40),c));for(let h=0;h<4;h++){let u=h/4*6.28;a.add(je(new Yt(.2,7,.2),c,Math.cos(u)*3.5,Math.sin(u)*3.5,0))}a.position.set(0,3,-12),a.rotation.x=1.2,e.add(a),t.push(h=>{a.rotation.z=h*.15});let l=new Pt;l.add(je(new Yt(.4,.4,3),c));for(let h of[-1,1])l.add(je(new Yt(4,.05,1.6),wt("#27408B",{metalness:.3}),h*2.4,0,0));l.position.set(6,1,2),e.add(l),t.push(h=>{l.rotation.y=h*.2,l.position.y=1+Math.sin(h*.6)*.3})},spots:[{at:[0,0,-30],title:"Planet Earth",fact:"From orbit, Earth looks like a glowing blue marble. You can see weather systems, oceans and city lights at night. Astronauts say it changes how they think about home."},{at:[0,3,-12],title:"The space station",fact:"The International Space Station travels at about 28,000 kilometres an hour and circles the Earth every 90 minutes. Astronauts see 16 sunrises and sunsets every day."},{at:[6,1,2],title:"Solar panels",fact:"Big solar panels turn sunlight into electricity for the station. In space there is no air to block the sun, so the panels make plenty of power for lights, computers and experiments."}]},{id:"dino",name:"Dino Valley",icon:"\u{1F995}",subject:"science",blurb:"A valley from 150 million years ago.",sky:["#FFE6B0","#E8845A"],fog:"#F0B98A",build:(e,t)=>{e.add(je(new hi(70,40).rotateX(-Math.PI/2),wt("#7A8F4A"),0,-1.6,0));let n=je(new Nn(14,22,20),wt("#5A4636"),-22,9,-34);e.add(n),e.add(je(new Zt(2.4,12,8),new Qt({color:"#FF6A2B"}),-22,20,-34));let i=[];for(let c=0;c<30;c++){let l=je(new Zt(.25,6,4),new Qt({color:"#FF9A3D"}),-22,20,-34);l.v=[ut(-3,3),ut(3,8),ut(-3,3)],e.add(l),i.push(l)}t.push((c,l)=>i.forEach(h=>{let u=h.v;h.position.x+=u[0]*l,h.position.y+=u[1]*l-l*3*((h.position.y-20)*.1+1)*.2,h.position.z+=u[2]*l,(h.position.y>34||h.position.y<5)&&h.position.set(-22,20,-34)}));for(let c=0;c<30;c++){let l=new Pt;for(let g=0;g<5;g++)l.add(je(new Nn(.12,2,4).rotateZ(ut(-.7,.7)),wt("#3E9B4F"),ut(-.4,.4),0,ut(-.4,.4)));let h=ut(0,6.28),u=ut(5,26);l.position.set(Math.cos(h)*u,-.6,Math.sin(h)*u),e.add(l)}let s=new Pt,r=wt("#8B9A6B");s.add(je(new Zt(2.2,14,10).scale(1.6,1,1),r,0,3.2,0)),s.add(je(new $n(.5,.9,5,10),r,3.2,5.4,0).rotateZ(-.5)),s.add(je(new Zt(.7,10,8),r,5.1,7.9,0));for(let[c,l]of[[-1.6,-1],[-1.6,1],[1.6,-1],[1.6,1]])s.add(je(new $n(.5,.45,3.4,8),r,c,1.1,l));s.add(je(new Nn(.8,5,8).rotateZ(Math.PI/2),r,-5.2,3.2,0)),s.position.set(10,-1.6,-8),s.rotation.y=.5,e.add(s),t.push(c=>{s.position.y=-1.6+Math.abs(Math.sin(c*.8))*.08});let a=[];for(let c=0;c<3;c++){let l=new Pt;l.add(je(new Nn(.4,1.8,4).rotateZ(Math.PI/2),wt("#C06A4A"),0,0,0)),l.add(je(new Yt(.1,.02,3.2),wt("#C98B6A"),0,0,0)),e.add(l),a.push(l)}t.push(c=>a.forEach((l,h)=>{let u=c*.25+h*2.1;l.position.set(Math.cos(u)*12,9+h*1.5+Math.sin(c+h)*.6,Math.sin(u)*12),l.rotation.y=-u,l.children[1].rotation.z=Math.sin(c*3+h)*.3}))},spots:[{at:[10,4,-8],title:"A long-necked giant",fact:"Giants like Brachiosaurus ate plants all day, up to hundreds of kilograms. Their long necks let them reach leaves high in the trees that shorter dinosaurs could not."},{at:[-22,22,-34],title:"The volcano",fact:"Volcanoes are openings where melted rock from deep inside the Earth escapes. Ash from big eruptions can block sunlight, and scientists study old ash layers to learn about the past."},{at:[8,11,8],title:"Flying reptiles",fact:"Pterosaurs were flying reptiles, not dinosaurs. Their wings were skin stretched along one very long finger. Some were as small as a bird and some as wide as a small plane."}]}];var go=class{constructor(t){this.host=t;this.scene=new Bs;this.cam=new Bt(70,1,.1,400);this.stereo=null;this.vr=!1;this.world=new Pt;this.ticks=[];this.yaw=0;this.pitch=0;this.gyro=!1;this.ray=new Qs;this.hot=[];this.dwell=0;this.hover=null;this.t=0;this.last=performance.now();this.guideCv=document.createElement("canvas");this.guideTex=new Ai(this.guideCv);this.mouth=0;this.speaking=!1;this.onFact=()=>{};this.onHover=()=>{};this.frame=t=>{let n=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=n;for(let s of this.ticks)s(this.t,n);this.cam.rotation.set(this.pitch,-this.yaw,0,"YXZ");let i=this.aim();if(i?(this.hover=i.s,this.dwell+=n,this.dwell>1.8&&this.fire(i)):(this.hover=null,this.dwell=0),this.onHover(this.hover,Math.min(1,this.dwell/1.8)),this.speaking){let s=Math.floor(this.t*7)%3;s!==this.mouth&&(this.mouth=s,this.drawGuide(this.npc,[.1,.7,.4][s]))}this.guide&&this.guide.position.copy(this.cam.position).add(new W(Math.sin(this.yaw+.2)*2.8,-.7+this.pitch*-.5,-Math.cos(this.yaw+.2)*2.8)),this.vr&&this.stereo?this.stereo.render(this.scene,this.cam):this.renderer.render(this.scene,this.cam),requestAnimationFrame(this.frame)};this.renderer=new uo({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),t.appendChild(this.renderer.domElement),this.scene.add(this.world,new Js(16777215,8947865,1.9));let n=new Ks(16777215,1.4);n.position.set(5,12,4),this.scene.add(n),this.cam.position.set(0,1.6,0),this.bind(),addEventListener("resize",()=>this.resize()),this.resize(),requestAnimationFrame(this.frame)}resize(){let t=this.host.clientWidth||innerWidth,n=this.host.clientHeight||innerHeight;this.renderer.setSize(t,n),this.stereo?.setSize(t,n),this.cam.aspect=t/n,this.cam.updateProjectionMatrix()}load(t){this.trip=t,this.scene.remove(this.world),this.world=new Pt,this.scene.add(this.world),this.ticks=[],this.hot=[];let n=document.createElement("canvas");n.width=4,n.height=256;let i=n.getContext("2d"),s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,t.sky[1]),s.addColorStop(1,t.sky[0]),i.fillStyle=s,i.fillRect(0,0,4,256),this.scene.background=new Ai(n),this.scene.fog=t.id==="space"?null:new ks(t.fog,18,80),t.build(this.world,this.ticks);for(let r of t.spots){let a=new Pt,c=je(new Zt(.42,16,12),new Qt({color:"#FFE27A",transparent:!0,opacity:.85})),l=je(new ls(.6,.72,32),new Qt({color:"#FFE27A",transparent:!0,opacity:.8,side:tn}));a.add(c,l),a.position.set(...r.at),this.world.add(a),this.hot.push({m:c,s:r,seen:!1}),this.ticks.push(h=>{c.scale.setScalar(1+Math.sin(h*3+r.at[0])*.12),l.lookAt(this.cam.position)})}this.makeGuide(t),this.yaw=0,this.pitch=0}makeGuide(t){let n=mu[t.subject==="history"?"history":"science"];this.guideCv.width=160,this.guideCv.height=240,this.drawGuide(n,0),this.guide&&this.scene.remove(this.guide),this.guideTex.needsUpdate=!0,this.guide=new Gs(new as({map:this.guideTex,transparent:!0,depthTest:!1})),this.guide.scale.set(1.5,2.25,1),this.guide.position.set(1.8,1,-2.2),this.guide.renderOrder=10,this.scene.add(this.guide),this.npc=n}drawGuide(t,n){let i=this.guideCv.getContext("2d");i.clearRect(0,0,160,240),i.save(),i.translate(80,228),i.scale(4.2,4.2),nu(i,0,0,{...t.look,dir:"down",moving:!1,walk:0,mouth:n,tag:!1},0),i.restore(),this.guideTex.needsUpdate=!0}get guideName(){return this.npc?.name??"Your guide"}talking(t){this.speaking=t,t||this.drawGuide(this.npc,0)}bind(){let t=this.renderer.domElement,n=!1,i=0,s=0,r=0,a=0;t.addEventListener("pointerdown",c=>{n=!0,i=c.clientX,s=c.clientY,r=performance.now(),a=0,t.setPointerCapture(c.pointerId)}),t.addEventListener("pointermove",c=>{if(!n)return;let l=c.clientX-i,h=c.clientY-s;a+=Math.abs(l)+Math.abs(h),this.yaw+=l*.005,this.pitch=Math.max(-1.3,Math.min(1.3,this.pitch+h*.004)),i=c.clientX,s=c.clientY}),t.addEventListener("pointerup",()=>{n&&a<8&&performance.now()-r<500&&this.activate(),n=!1}),addEventListener("keydown",c=>{let l=c.key;l==="ArrowLeft"||l==="a"?this.yaw-=.1:l==="ArrowRight"||l==="d"?this.yaw+=.1:l==="ArrowUp"||l==="w"?this.pitch=Math.min(1.3,this.pitch+.08):l==="ArrowDown"||l==="s"?this.pitch=Math.max(-1.3,this.pitch-.08):(l===" "||l==="Enter")&&this.activate()})}async enableGyro(){try{let t=window.DeviceOrientationEvent;if(t?.requestPermission&&await t.requestPermission()!=="granted")return!1;let n=null;return addEventListener("deviceorientation",i=>{if(!this.gyro||i.alpha==null||i.beta==null)return;n??=i.alpha;let s=(screen.orientation?.angle??0)*Math.PI/180;this.yaw=-((i.alpha-n)*Math.PI)/180+0,this.pitch=Math.max(-1.3,Math.min(1.3,(i.beta-90)*Math.PI/180*-1))}),this.gyro=!0,!0}catch{return!1}}setVR(t){this.vr=t,t&&!this.stereo&&(this.stereo=new mo(this.renderer),this.stereo.setSize(this.host.clientWidth,this.host.clientHeight)),this.resize()}aim(){this.ray.setFromCamera(new We(0,0),this.cam);let t=this.ray.intersectObjects(this.hot.map(n=>n.m),!1);return t.length?this.hot.find(n=>n.m===t[0].object):null}activate(){let t=this.aim();t&&this.fire(t)}fire(t){t.seen=!0,this.dwell=0,this.onFact(t.s,this.hot.every(n=>n.seen))}};var vo=[{id:"w-stars",slot:"wall",name:"Starry night wallpaper",art:"\u2728",color:"linear-gradient(#2b2b6b,#5b3c8c)",free:!0,tier:1},{id:"w-sunset",slot:"wall",name:"Sunset stripes",art:"\u{1F307}",color:"linear-gradient(#ff9a5b,#f2548d)",tier:1},{id:"w-ocean",slot:"wall",name:"Ocean waves",art:"\u{1F30A}",color:"linear-gradient(#3bb6d8,#2459b8)",tier:1},{id:"w-forest",slot:"wall",name:"Forest green",art:"\u{1F332}",color:"linear-gradient(#4c9f70,#1f6b46)",tier:2},{id:"w-candy",slot:"wall",name:"Candy swirl",art:"\u{1F36D}",color:"linear-gradient(135deg,#ff8fb1,#ffd23f,#7bd389)",tier:2},{id:"w-galaxy",slot:"wall",name:"Galaxy",art:"\u{1FA90}",color:"linear-gradient(135deg,#0d0d2b,#6b3fa0,#e8604c)",tier:3},{id:"l-warm",slot:"light",name:"Warm string lights",art:"\u{1F4A1}",color:"#ffd98a",free:!0,tier:1},{id:"l-rainbow",slot:"light",name:"Rainbow lights",art:"\u{1F308}",color:"rainbow",tier:2},{id:"l-neon",slot:"light",name:"Neon glow",art:"\u{1F7E3}",color:"#d36bff",tier:2},{id:"l-fire",slot:"light",name:"Firefly lights",art:"\u2728",color:"#d6ff6b",tier:3},{id:"m-heart",slot:"magnet",name:"Heart magnet",art:"\u{1F496}",tier:1},{id:"m-soccer",slot:"magnet",name:"Soccer ball",art:"\u26BD",tier:1},{id:"m-guitar",slot:"magnet",name:"Guitar",art:"\u{1F3B8}",tier:1},{id:"m-paint",slot:"magnet",name:"Paint palette",art:"\u{1F3A8}",tier:2},{id:"m-rocket",slot:"magnet",name:"Rocket",art:"\u{1F680}",tier:2},{id:"m-dino",slot:"magnet",name:"Dinosaur",art:"\u{1F996}",tier:2},{id:"m-crown",slot:"magnet",name:"Golden crown",art:"\u{1F451}",tier:3},{id:"m-rainbow",slot:"magnet",name:"Rainbow",art:"\u{1F308}",tier:3},{id:"p-name",slot:"plate",name:"Bold name plate",art:"\u{1F3F7}\uFE0F",color:"#E8604C",free:!0,tier:1},{id:"p-gold",slot:"plate",name:"Gold plate",art:"\u{1F947}",color:"#EAB94E",tier:2},{id:"p-neon",slot:"plate",name:"Neon plate",art:"\u{1F7E2}",color:"#3BCEAC",tier:3},{id:"c-checks",slot:"cloth",name:"Picnic checks",art:"\u{1F9FA}",color:"#E8604C",free:!0,tier:1},{id:"c-ocean",slot:"cloth",name:"Ocean blue",art:"\u{1F30A}",color:"#4F91C7",tier:1},{id:"c-mint",slot:"cloth",name:"Mint fresh",art:"\u{1F343}",color:"#5FB37A",tier:1},{id:"c-grape",slot:"cloth",name:"Grape",art:"\u{1F347}",color:"#8E7CC3",tier:2},{id:"c-sun",slot:"cloth",name:"Sunshine",art:"\u{1F31E}",color:"#F2B632",tier:2},{id:"c-gold",slot:"cloth",name:"Royal gold",art:"\u{1F451}",color:"#D9A441",tier:3},{id:"f-star",slot:"flag",name:"Star flag",art:"\u2B50",free:!0,tier:1},{id:"f-paw",slot:"flag",name:"Paw print",art:"\u{1F43E}",tier:1},{id:"f-bolt",slot:"flag",name:"Lightning",art:"\u26A1",tier:2},{id:"f-moon",slot:"flag",name:"Moon",art:"\u{1F319}",tier:2},{id:"f-dragon",slot:"flag",name:"Dragon",art:"\u{1F409}",tier:3},{id:"n-crew",slot:"crew",name:"The Crew",art:"\u{1F91D}",free:!0,tier:1},{id:"n-snack",slot:"crew",name:"Snack Squad",art:"\u{1F37F}",tier:1},{id:"n-brain",slot:"crew",name:"Brain Trust",art:"\u{1F9E0}",tier:2},{id:"n-wave",slot:"crew",name:"Wave Riders",art:"\u{1F3C4}",tier:2},{id:"n-spark",slot:"crew",name:"Spark Club",art:"\u26A1",tier:3}],gu="unify.cosmetics.v1",zn=()=>{try{let e=JSON.parse(localStorage.getItem(gu)||"null");if(e)return{own:[],eq:{},...e}}catch{}return{own:vo.filter(e=>e.free).map(e=>e.id),eq:{wall:"w-stars",light:"l-warm",plate:"p-name",cloth:"c-checks",flag:"f-star",crew:"n-crew",magnets:[]}}},Kl=e=>{try{localStorage.setItem(gu,JSON.stringify(e))}catch{}try{dispatchEvent(new CustomEvent("unify:cosmetics"))}catch{}},_o=e=>vo.find(t=>t.id===e),yo={items:vo,state:zn,owned(e){return zn().own.includes(e)},grant(e){let t=zn();return t.own.includes(e)||!_o(e)?!1:(t.own.push(e),Kl(t),!0)},reward(e=2){let t=zn(),n=vo.filter(s=>!t.own.includes(s.id)&&s.tier<=e);if(!n.length)return null;let i=n[Math.floor(Math.random()*n.length)];return yo.grant(i.id),i},equip(e){let t=_o(e);if(!t||!zn().own.includes(e))return;let n=zn();if(t.slot==="magnet"){let i=n.eq.magnets??[],s=i.indexOf(e);s>=0?i.splice(s,1):i.length<6&&i.push(e),n.eq.magnets=i}else n.eq[t.slot]=e;Kl(n)},eq(e){let t=zn().eq[e];return t?_o(t):void 0},magnets(){return(zn().eq.magnets??[]).map(e=>_o(e)).filter(Boolean)},crewName(){return zn().crewName||yo.eq("crew")?.name||"The Crew"},setCrewName(e){let t=zn();t.crewName=e.trim().slice(0,18),Kl(t)}};var z0="unify.world.v1",_u={decor:"auto",local:!1,lat:null,lon:null,sound:!0,music:!0,quiet:!1,weatherFx:!0},V0={..._u};try{V0={..._u,...JSON.parse(localStorage.getItem(z0)||"null")||{}}}catch{}var vu=[{id:"spirit",name:"Spirit Week",icon:"\u{1F389}",blurb:"Wear your team colour and cheer on everyone. Pick the colours and style that feel like you.",color:"#E8604C",quest:"cheer",teams:[{id:"red",label:"Red Rockets",color:"#E8604C"},{id:"blue",label:"Blue Comets",color:"#4F91C7"},{id:"green",label:"Green Giants",color:"#5FB37A"},{id:"gold",label:"Golden Stars",color:"#EAB94E"}],accessories:[{id:"headband",label:"Headband",emoji:"\u{1F3BD}"},{id:"cap",label:"Team cap",emoji:"\u{1F9E2}"},{id:"none",label:"Just the colour"}],roles:[{id:"cheer",label:"Cheerleader"},{id:"player",label:"Team player"},{id:"fan",label:"Quiet fan"}]},{id:"trivia",name:"Trivia Showdown",icon:"\u{1F9E0}",blurb:"Class vs class quiz in the auditorium. Play as captain, answerer or cheerer, whichever you enjoy.",color:"#6AA9F0",quest:"trivia",teams:[{id:"owls",label:"Owls",color:"#8E7CC3"},{id:"foxes",label:"Foxes",color:"#E8833A"}],roles:[{id:"captain",label:"Captain"},{id:"answer",label:"Answerer"},{id:"cheer",label:"Cheerer"}]},{id:"fair",name:"Science & Maker Fair",icon:"\u{1F52C}",blurb:"Show off something you made or learned. Pick a booth theme and tell your story your way.",color:"#5FB37A",quest:"show",accessories:[{id:"goggles",label:"Safety goggles",emoji:"\u{1F97D}"},{id:"labcoat",label:"Lab coat feel"},{id:"none",label:"Casual"}],roles:[{id:"present",label:"Present a project"},{id:"visit",label:"Visit booths"}]},{id:"festival",name:"Seasonal Festival",icon:"\u{1F388}",blurb:"The decorations of the season come alive with games and treats. Join the games you like.",color:"#F2A03D",quest:"festival",accessories:[{id:"crown",label:"Festival crown",emoji:"\u{1F451}"},{id:"scarf",label:"Cosy scarf",emoji:"\u{1F9E3}"},{id:"none",label:"Just the fun"}],roles:[{id:"games",label:"Play games"},{id:"snacks",label:"Snack helper"},{id:"art",label:"Decorate"}]},{id:"trip",name:"VR Field Trip Day",icon:"\u{1F97D}",blurb:"Travel the world, the ocean or space together without leaving school. Look around by dragging or tilting your phone.",color:"#3BCEAC",quest:"trip",roles:[{id:"explorer",label:"Explorer"},{id:"scribe",label:"Note taker"},{id:"photo",label:"Photographer"}]},{id:"book",name:"Book & Story Day",icon:"\u{1F4DA}",blurb:"Dress as a favourite character (or just bring a favourite story) and swap recommendations.",color:"#B8A8DA",quest:"story",accessories:[{id:"glasses",label:"Reading glasses",emoji:"\u{1F453}"},{id:"hat",label:"Storyteller hat",emoji:"\u{1F3A9}"},{id:"none",label:"Just the book"}],roles:[{id:"reader",label:"Reader"},{id:"writer",label:"Writer"}]},{id:"picture",name:"Picture Day",icon:"\u{1F4F8}",blurb:"Smile! Pick your pose and background colour for the school picture.",color:"#EAA5B2",quest:"pose",teams:[{id:"sky",label:"Sky blue",color:"#8FC9E8"},{id:"rose",label:"Rose",color:"#EAA5B2"},{id:"mint",label:"Mint",color:"#A9DCC0"},{id:"sun",label:"Sunny",color:"#FBE08A"}],roles:[{id:"smile",label:"Big smile"},{id:"cool",label:"Cool pose"},{id:"silly",label:"Silly face"}]}];var G0=e=>Math.floor((e.getTime()/864e5+3)/7);function yu(e=new Date){let t=vu[G0(e)%vu.length],n=e.getDay();return{def:t,live:n>=3&&n<=5,startsIn:n<3?3-n:0}}var xu=[{id:"talk3",ev:"talk",n:3,text:"Chat with 3 different people",icon:"\u{1F4AC}"},{id:"talk1",ev:"talk",n:1,text:"Say hello to someone new",icon:"\u{1F44B}"},{id:"emote2",ev:"emote",n:2,text:"Use 2 emotes (high five, dance, thumbs up\u2026)",icon:"\u{1F64C}"},{id:"lesson1",ev:"lesson",n:1,text:"Finish a lesson step in any class",icon:"\u{1F4D8}"},{id:"chow",ev:"chow",n:1,text:"Sit at Chat Chow and join the table talk",icon:"\u{1F37D}\uFE0F"},{id:"locker",ev:"locker",n:1,text:"Decorate or visit a locker",icon:"\u{1F512}"},{id:"assembly",ev:"assembly",n:1,text:"Go to morning assembly",icon:"\u{1F3A4}"},{id:"opendoor",ev:"opendoor",n:1,text:"Peek into The Open Door classroom",icon:"\u{1F6AA}"},{id:"game",ev:"game",n:1,text:"Play a practice mini-game",icon:"\u{1F3AE}"},{id:"trip",ev:"trip",n:1,text:"Take a VR field trip",icon:"\u{1F97D}"},{id:"kind",ev:"kind",n:1,text:"Do something kind (cheer someone up, say thanks)",icon:"\u{1F496}"},{id:"event",ev:"event",n:1,text:"Join this week's event",icon:"\u{1F389}"},{id:"club",ev:"club",n:1,text:"Go to a club meeting",icon:"\u{1F392}"}],Su="unify.quests.v1",yi=(e=new Date)=>e.toISOString().slice(0,10),jl=(e=new Date)=>String(Math.floor((e.getTime()/864e5+3)/7)),H0=()=>({day:yi(),prog:{},done:[],streak:0,lastDone:"",spirit:{week:jl(),pts:0},talked:[],earned:[]}),Ss=()=>{let e=H0();try{e={...e,...JSON.parse(localStorage.getItem(Su)||"null")||{}}}catch{}return e.day!==yi()&&(e.day=yi(),e.prog={},e.done=[],e.talked=[]),e.spirit.week!==jl()&&(e.spirit={week:jl(),pts:0}),e},W0=e=>{try{localStorage.setItem(Su,JSON.stringify(e))}catch{}},bu=60;function X0(){let e=Math.floor(Date.now()/864e5),t=xu.filter(a=>a.id!=="event"&&a.id!=="trip"),n=yu(),i=n.live?xu.find(a=>a.id==="event"):null,s=[],r=e*7%t.length;for(;s.length<(i?2:3);){let a=t[r%t.length];s.some(c=>c.ev===a.ev)||s.push(a),r+=5}return i&&s.push(i),s}var Mu={state:Ss,streak(){let e=Ss(),t=yi(new Date(Date.now()-864e5));return e.lastDone===yi()||e.lastDone===t?e.streak:0},progress(e){return Math.min(e.n,Ss().prog[e.id]??0)},isDone(e){return Ss().done.includes(e.id)},track(e,t){let n=Ss(),i=[];if(e==="talk"&&t){if(n.talked.includes(t))return[];n.talked.push(t)}for(let s of X0())if(!(s.ev!==e||n.done.includes(s.id))&&(n.prog[s.id]=(n.prog[s.id]??0)+1,n.prog[s.id]>=s.n)){n.done.push(s.id);let r=yi(new Date(Date.now()-864e5));n.lastDone!==yi()&&(n.streak=n.lastDone===r?n.streak+1:1,n.lastDone=yi());let a=10+Math.min(10,n.streak*2);n.spirit.pts+=a;let c=yo.reward(n.streak>=5?3:n.streak>=2?2:1);c&&n.earned.push(c.id),i.push({quest:s,item:c,spirit:a,streak:n.streak})}W0(n);for(let s of i)try{dispatchEvent(new CustomEvent("unify:quest-done",{detail:s}))}catch{}return i},spirit(){let e=Ss();return{pts:e.spirit.pts,goal:bu,full:e.spirit.pts>=bu}}};var St=e=>document.getElementById(e),zt=new go(St("game")),Ms=!0,Li=null,Tu={},wu=e=>{try{if(speechSynthesis.cancel(),!Ms){zt.talking(!0),setTimeout(()=>zt.talking(!1),Math.min(9e3,e.length*55));return}let t=new SpeechSynthesisUtterance(e);t.rate=.95,t.onstart=()=>zt.talking(!0),t.onend=()=>zt.talking(!1),t.onerror=()=>zt.talking(!1),zt.talking(!0),speechSynthesis.speak(t)}catch{zt.talking(!0),setTimeout(()=>zt.talking(!1),4e3)}},Ql=(e,t)=>{St("capName").textContent=e,St("capText").textContent=t,St("cap").classList.add("show")},Eu=()=>{let e=Li?Tu[Li.id]??[]:[];St("nl").innerHTML=e.length?e.map(t=>`<div>\u2022 ${t}</div>`).join(""):"Find the glowing orbs to collect facts."};zt.onHover=(e,t)=>{St("ret").style.transform=`rotate(${t*360}deg)`,St("ret").style.borderTopColor=e?"#FFE27A":"transparent"};zt.onFact=(e,t)=>{if(!Li)return;Ql(zt.guideName,`${e.title}. ${e.fact}`),wu(`${e.title}. ${e.fact}`);let n=Tu[Li.id]??=[],i=`${e.title}: ${e.fact.split(". ")[0]}.`;if(n.includes(i)||n.push(i),Eu(),t){try{localStorage.setItem("unify.trip.visit",String(Date.now()))}catch{}Mu.track("trip",Li.id),setTimeout(()=>Ql(zt.guideName,"You found every spot on this trip. Great exploring! Pick another trip or head back to school."),9e3)}};function Au(e){Li=e,St("picker").style.display="none",zt.load(e),Eu(),Ql(zt.guideName,`Welcome to ${e.name}! ${e.blurb} Look for the glowing orbs.`),wu(`Welcome to ${e.name}. ${e.blurb}`)}for(let e of $l){let t=document.createElement("button");t.className="card",t.innerHTML=`<b>${e.icon}</b>${e.name}<span>${e.blurb}</span>`,t.onclick=()=>Au(e),St("cards").appendChild(t)}St("bTrips").onclick=()=>{try{speechSynthesis.cancel()}catch{}St("cap").classList.remove("show"),St("picker").style.display="flex"};St("bBack").onclick=()=>{try{speechSynthesis.cancel()}catch{}parent!==window?parent.postMessage({type:"unify:stage-exit"},"*"):history.back()};St("bVR").onclick=()=>{let e=!zt.vr;zt.setVR(e),document.body.classList.toggle("vr",e),St("bVR").classList.toggle("on",e),St("bVR").textContent=e?"\u{1F576} Exit VR":"\u{1F576} Cardboard VR",e&&matchMedia("(pointer:coarse)").matches&&(St("bGyro").hidden=!1)};St("bGyro").onclick=async()=>{let e=await zt.enableGyro();St("bGyro").textContent=e?"\u{1F4F1} Tilt on":"\u{1F4F1} Tilt unavailable",St("bGyro").classList.toggle("on",e)};St("bNotes").onclick=()=>St("notes").classList.toggle("show");St("bVoice").onclick=()=>{if(Ms=!Ms,St("bVoice").classList.toggle("on",Ms),St("bVoice").textContent=Ms?"\u{1F50A} Guide voice":"\u{1F507} Voice off",!Ms)try{speechSynthesis.cancel()}catch{}};matchMedia("(pointer:coarse)").matches&&(St("bGyro").hidden=!1);addEventListener("message",e=>{e.data?.type==="unify:trip-show"&&(St("picker").style.display=Li?"none":"flex")});window.__trip=zt;window.__start=e=>Au($l[e]);})();
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
