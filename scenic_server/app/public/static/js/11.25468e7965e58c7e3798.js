webpackJsonp([11],{MJLE:function(t,e,r){var i,o;o=function(){function t(t){this.mode=r.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,i=this.data.length;e<i;e++){var o=[],n=this.data.charCodeAt(e);n>65536?(o[0]=240|(1835008&n)>>>18,o[1]=128|(258048&n)>>>12,o[2]=128|(4032&n)>>>6,o[3]=128|63&n):n>2048?(o[0]=224|(61440&n)>>>12,o[1]=128|(4032&n)>>>6,o[2]=128|63&n):n>128?(o[0]=192|(1984&n)>>>6,o[1]=128|63&n):o[0]=n,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++){this.modules[i]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[i][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+r][e+i]=0<=r&&r<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=i&&i<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var i=d.getLostPoint(this);(0==r||t>i)&&(t=i,e=r)}return e},createMovieClip:function(t,e,r){var i=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var n=1*o,a=0;a<this.modules[o].length;a++){var s=1*a;this.modules[o][a]&&(i.beginFill(0,100),i.moveTo(s,n),i.lineTo(s+1,n),i.lineTo(s+1,n+1),i.lineTo(s,n+1),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var i=t[e],o=t[r];if(null==this.modules[i][o])for(var n=-2;n<=2;n++)for(var a=-2;a<=2;a++)this.modules[i+n][o+a]=-2==n||2==n||-2==a||2==a||0==n&&0==a}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var i=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(r=0;r<18;r++){i=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,i=d.getBCHTypeInfo(r),o=0;o<15;o++){var n=!t&&1==(i>>o&1);o<6?this.modules[o][8]=n:o<8?this.modules[o+1][8]=n:this.modules[this.moduleCount-15+o][8]=n}for(o=0;o<15;o++){n=!t&&1==(i>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=n:o<9?this.modules[8][15-o-1+1]=n:this.modules[8][15-o-1]=n}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,i=this.moduleCount-1,o=7,n=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[i][a-s]){var h=!1;n<t.length&&(h=1==(t[n]>>>o&1)),d.getMask(e,i,a-s)&&(h=!h),this.modules[i][a-s]=h,-1==--o&&(n++,o=7)}if((i+=r)<0||this.moduleCount<=i){i-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,i){for(var o=v.getRSBlocks(t,r),n=new m,a=0;a<i.length;a++){var s=i[a];n.put(s.mode,4),n.put(s.getLength(),d.getLengthInBits(s.mode,t)),s.write(n)}var h=0;for(a=0;a<o.length;a++)h+=o[a].dataCount;if(n.getLengthInBits()>8*h)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*h+")");for(n.getLengthInBits()+4<=8*h&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*h||(n.put(e.PAD0,8),n.getLengthInBits()>=8*h));)n.put(e.PAD1,8);return e.createBytes(n,o)},e.createBytes=function(t,e){for(var r=0,i=0,o=0,n=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,l=e[s].totalCount-h;i=Math.max(i,h),o=Math.max(o,l),n[s]=new Array(h);for(var u=0;u<n[s].length;u++)n[s][u]=255&t.buffer[u+r];r+=h;var c=d.getErrorCorrectPolynomial(l),f=new _(n[s],c.getLength()-1).mod(c);a[s]=new Array(c.getLength()-1);for(u=0;u<a[s].length;u++){var g=u+f.getLength()-a[s].length;a[s][u]=g>=0?f.get(g):0}}var p=0;for(u=0;u<e.length;u++)p+=e[u].totalCount;var v=new Array(p),m=0;for(u=0;u<i;u++)for(s=0;s<e.length;s++)u<n[s].length&&(v[m++]=n[s][u]);for(u=0;u<o;u++)for(s=0;s<e.length;s++)u<a[s].length&&(v[m++]=a[s][u]);return v};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},n=0,a=1,s=2,h=3,l=4,u=5,c=6,f=7,d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case n:return(e+r)%2==0;case a:return e%2==0;case s:return r%3==0;case h:return(e+r)%3==0;case l:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case u:return e*r%2+e*r%3==0;case c:return(e*r%2+e*r%3)%2==0;case f:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new _([1],0),r=0;r<t;r++)e=e.multiply(new _([1,g.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:case r.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,i=0;i<e;i++)for(var o=0;o<e;o++){for(var n=0,a=t.isDark(i,o),s=-1;s<=1;s++)if(!(i+s<0||e<=i+s))for(var h=-1;h<=1;h++)o+h<0||e<=o+h||0==s&&0==h||a==t.isDark(i+s,o+h)&&n++;n>5&&(r+=3+n-5)}for(i=0;i<e-1;i++)for(o=0;o<e-1;o++){var l=0;t.isDark(i,o)&&l++,t.isDark(i+1,o)&&l++,t.isDark(i,o+1)&&l++,t.isDark(i+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(i=0;i<e;i++)for(o=0;o<e-6;o++)t.isDark(i,o)&&!t.isDark(i,o+1)&&t.isDark(i,o+2)&&t.isDark(i,o+3)&&t.isDark(i,o+4)&&!t.isDark(i,o+5)&&t.isDark(i,o+6)&&(r+=40);for(o=0;o<e;o++)for(i=0;i<e-6;i++)t.isDark(i,o)&&!t.isDark(i+1,o)&&t.isDark(i+2,o)&&t.isDark(i+3,o)&&t.isDark(i+4,o)&&!t.isDark(i+5,o)&&t.isDark(i+6,o)&&(r+=40);var u=0;for(o=0;o<e;o++)for(i=0;i<e;i++)t.isDark(i,o)&&u++;return r+=10*(Math.abs(100*u/e/e-50)/5)}},g={glog:function(t){if(t<1)throw new Error("glog("+t+")");return g.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return g.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},p=0;p<8;p++)g.EXP_TABLE[p]=1<<p;for(p=8;p<256;p++)g.EXP_TABLE[p]=g.EXP_TABLE[p-4]^g.EXP_TABLE[p-5]^g.EXP_TABLE[p-6]^g.EXP_TABLE[p-8];for(p=0;p<255;p++)g.LOG_TABLE[g.EXP_TABLE[p]]=p;function _(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function v(t,e){this.totalCount=t,this.dataCount=e}function m(){this.buffer=[],this.length=0}_.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=g.gexp(g.glog(this.get(r))+g.glog(t.get(i)));return new _(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=g.glog(this.get(0))-g.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=g.gexp(g.glog(t.get(i))+e);return new _(r,0).mod(t)}},v.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],v.getRSBlocks=function(t,e){var r=v.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,o=[],n=0;n<i;n++)for(var a=r[3*n+0],s=r[3*n+1],h=r[3*n+2],l=0;l<a;l++)o.push(new v(s,h));return o},v.getRsBlockTable=function(t,e){switch(e){case o.L:return v.RS_BLOCK_TABLE[4*(t-1)+0];case o.M:return v.RS_BLOCK_TABLE[4*(t-1)+1];case o.Q:return v.RS_BLOCK_TABLE[4*(t-1)+2];case o.H:return v.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},m.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var C=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function w(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var D=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,r=this._el,i=t.getModuleCount();Math.floor(e.width/i),Math.floor(e.height/i);function o(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)e.hasOwnProperty(i)&&r.setAttribute(i,e[i]);return r}this.clear();var n=o("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:e.colorLight});n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(n),n.appendChild(o("rect",{fill:e.colorLight,width:"100%",height:"100%"})),n.appendChild(o("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<i;a++)for(var s=0;s<i;s++)if(t.isDark(a,s)){var h=o("use",{x:String(s),y:String(a)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),n.appendChild(h)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),A="svg"===document.documentElement.tagName.toLowerCase()?D:"undefined"==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,i=t.getModuleCount(),o=Math.floor(e.width/i),n=Math.floor(e.height/i),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<i;s++){a.push("<tr>");for(var h=0;h<i;h++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+"px;height:"+n+"px;background-color:"+(t.isDark(s,h)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var l=r.childNodes[0],u=(e.width-l.offsetWidth)/2,c=(e.height-l.offsetHeight)/2;u>0&&c>0&&(l.style.margin=c+"px "+u+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,i,o,n,a,s,h,l,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*e;else void 0===l&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}var i=function(t,e){this._bIsPainted=!1,this._android=w(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return i.prototype.draw=function(t){var e=this._elImage,r=this._oContext,i=this._htOption,o=t.getModuleCount(),n=i.width/o,a=i.height/o,s=Math.round(n),h=Math.round(a);e.style.display="none",this.clear();for(var l=0;l<o;l++)for(var u=0;u<o;u++){var c=t.isDark(l,u),f=u*n,d=l*a;r.strokeStyle=c?i.colorDark:i.colorLight,r.lineWidth=1,r.fillStyle=c?i.colorDark:i.colorLight,r.fillRect(f,d,n,a),r.strokeRect(Math.floor(f)+.5,Math.floor(d)+.5,s,h),r.strokeRect(Math.ceil(f)-.5,Math.ceil(d)-.5,s,h)}this._bIsPainted=!0},i.prototype.makeImage=function(){this._bIsPainted&&function(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var i=document.createElement("img"),o=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)};return i.onabort=o,i.onerror=o,i.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(i.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}.call(this,t)},i.prototype.isPainted=function(){return this._bIsPainted},i.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},i.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},i}();function L(t,e){for(var r=1,i=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),n=0,a=C.length;n<=a;n++){var s=0;switch(e){case o.L:s=C[n][0];break;case o.M:s=C[n][1];break;case o.Q:s=C[n][2];break;case o.H:s=C[n][3]}if(i<=s)break;r++}if(r>C.length)throw new Error("Too long data");return r}return(i=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:o.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(A=D),this._android=w(),this._el=t,this._oQRCode=null,this._oDrawing=new A(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new e(L(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},i.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},i.prototype.clear=function(){this._oDrawing.clear()},i.CorrectLevel=o,i},t.exports=o()},"Oz+C":function(t,e){},enaU:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});r("XmAh");var i=r("il3B"),o=r("fYsj"),n=r("MJLE"),a=r.n(n),s={name:"home",props:{},components:{Layout:o.a},data:function(){return{url:"https://www.baidu.com"}},computed:{},methods:{handleProcess:function(){this.$router.push("/main/schedule")},contact:function(){i.a.confirm({title:"联系客服",message:"是否拨打景点客服电话"}).then(function(){}).catch(function(){})},comment:function(){Object(i.a)({message:"门票使用后可评价"})},refund:function(){this.$router.push("/main/arefund")},qrcode:function(t){new a.a("qrcode",{width:110,height:110,text:t})}},created:function(){this.$nextTick(function(){this.qrcode(this.url)})},mounted:function(){}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"订单详情"}},[r("div",{staticClass:"wraper"},[r("div",{staticClass:"state"},[r("ul",[r("li",[t._v("已出票")]),t._v(" "),r("li",{on:{click:t.handleProcess}},[t._v("退款进度 支付宝正在退款")])])]),t._v(" "),r("div",{staticClass:"orderinformation"},[r("li",{staticClass:"tit"},[t._v("镇北堡西部成人门票")]),t._v(" "),r("li",{staticClass:"code"},[r("div",{staticClass:"home"},[r("div",{ref:"qrcode",attrs:{id:"qrcode"}})])]),t._v(" "),r("ul",[r("li",[t._v("使用时间2019-8-18 周四")]),t._v(" "),r("li",[t._v("入园方式：扫码入园")]),t._v(" "),r("li",[t._v("入院时间：当日16:00前")]),t._v(" "),r("li",[t._v("入园地址：光明大道北门")]),t._v(" "),r("li",[t._v("购买数量：2张")]),t._v(" "),r("li",[t._v("订单总价：￥120")]),t._v(" "),r("li",[r("span",[t._v("出行人：")]),t._v(" "),r("p",[r("span",[t._v("张明")]),t._v(" "),r("span",[t._v("身份证：123142514516318")])]),t._v(" "),r("p",[r("span",[t._v("王丽")]),t._v(" "),r("span",[t._v("身份证：63456789318")])])]),t._v(" "),r("li",{staticClass:"phone"},[t._v("联系手机：18360176433")])])]),t._v(" "),r("div",{staticClass:"title"},[r("p",[r("span",[t._v("镇北堡西部影城")]),t._v(" "),r("span",[t._v(">")])])]),t._v(" "),r("div",{staticClass:"ordertime"},[r("ul",[r("li",[t._v("订单编号：09876543234567898765")]),t._v(" "),r("li",[t._v("创建时间：2019-9-12 20:18:45")]),t._v(" "),r("li",[t._v("支付时间：2019-9-12 20:20:45")]),t._v(" "),r("li",[t._v("祝福方式：在线支付")])])]),t._v(" "),r("div",{staticClass:"footerbuttom"},[r("span",{on:{click:t.contact}},[t._v("联系客服")]),t._v(" "),r("span",{on:{click:t.comment}},[t._v("点评")]),t._v(" "),r("span",{on:{click:t.refund}},[t._v("申请退款")])])])])},staticRenderFns:[]};var l=r("VU/8")(s,h,!1,function(t){r("Oz+C")},"data-v-05d314d8",null);e.default=l.exports}});
//# sourceMappingURL=11.25468e7965e58c7e3798.js.map