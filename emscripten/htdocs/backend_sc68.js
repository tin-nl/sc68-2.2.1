// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_SC68= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_SC68["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_SC68);

var backend_SC68 = (function(Module) {
var a;a||(a=typeof Module !== 'undefined' ? Module : {});var m={},q;for(q in a)a.hasOwnProperty(q)&&(m[q]=a[q]);var r=!1,w=!1,x=!1,y=!1;r="object"===typeof window;w="function"===typeof importScripts;x="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;y=!r&&!x&&!w;var z="",B,C,D,E;
if(x)z=w?require("path").dirname(z)+"/":__dirname+"/",B=function(b,c){D||(D=require("fs"));E||(E=require("path"));b=E.normalize(b);return D.readFileSync(b,c?null:"utf8")},C=function(b){b=B(b,!0);b.buffer||(b=new Uint8Array(b));assert(b.buffer);return b},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),"undefined"!==typeof module&&(module.exports=a),process.on("uncaughtException",function(b){throw b;}),process.on("unhandledRejection",F),a.inspect=function(){return"[Emscripten Module object]"};
else if(y)"undefined"!=typeof read&&(B=function(b){return read(b)}),C=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");assert("object"===typeof b);return b},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(r||w)w?z=self.location.href:document.currentScript&&(z=document.currentScript.src),z=0!==z.indexOf("blob:")?z.substr(0,z.lastIndexOf("/")+
1):"",B=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},w&&(C=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)});var G=a.print||console.log.bind(console),H=a.printErr||console.warn.bind(console);for(q in m)m.hasOwnProperty(q)&&(a[q]=m[q]);m=null;var I;a.wasmBinary&&(I=a.wasmBinary);var noExitRuntime;a.noExitRuntime&&(noExitRuntime=a.noExitRuntime);
"object"!==typeof WebAssembly&&H("no native wasm support detected");var J,aa=new WebAssembly.Table({initial:1243,maximum:1243,element:"anyfunc"}),K=!1;function assert(b,c){b||F("Assertion failed: "+c)}function ba(b){var c=a["_"+b];assert(c,"Cannot call unknown function "+b+", make sure it is exported");return c}var ca="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function da(b,c,e){var f=c+e;for(e=c;b[e]&&!(e>=f);)++e;if(16<e-c&&b.subarray&&ca)return ca.decode(b.subarray(c,e));for(f="";c<e;){var d=b[c++];if(d&128){var h=b[c++]&63;if(192==(d&224))f+=String.fromCharCode((d&31)<<6|h);else{var t=b[c++]&63;d=224==(d&240)?(d&15)<<12|h<<6|t:(d&7)<<18|h<<12|t<<6|b[c++]&63;65536>d?f+=String.fromCharCode(d):(d-=65536,f+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else f+=String.fromCharCode(d)}return f}function ea(b,c){return b?da(L,b,c):""}
"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var M,fa,L,O,P=a.INITIAL_MEMORY||16777216;a.wasmMemory?J=a.wasmMemory:J=new WebAssembly.Memory({initial:P/65536,maximum:P/65536});J&&(M=J.buffer);P=M.byteLength;var Q=M;M=Q;a.HEAP8=fa=new Int8Array(Q);a.HEAP16=new Int16Array(Q);a.HEAP32=O=new Int32Array(Q);a.HEAPU8=L=new Uint8Array(Q);a.HEAPU16=new Uint16Array(Q);a.HEAPU32=new Uint32Array(Q);a.HEAPF32=new Float32Array(Q);a.HEAPF64=new Float64Array(Q);O[50820]=5446320;
function R(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var e=c.I;"number"===typeof e?void 0===c.H?a.dynCall_v(e):a.dynCall_vi(e,c.H):e(void 0===c.H?null:c.H)}}}var ha=[],ia=[],ja=[],ka=[];function la(){var b=a.preRun.shift();ha.unshift(b)}var S=0,T=null,U=null;a.preloadedImages={};a.preloadedAudios={};function F(b){if(a.onAbort)a.onAbort(b);G(b);H(b);K=!0;throw new WebAssembly.RuntimeError("abort("+b+"). Build with -s ASSERTIONS=1 for more info.");}
function V(b){var c=W;return String.prototype.startsWith?c.startsWith(b):0===c.indexOf(b)}function ma(){return V("data:application/octet-stream;base64,")}var W="sc68.wasm";if(!ma()){var na=W;W=a.locateFile?a.locateFile(na,z):z+na}function oa(){try{if(I)return new Uint8Array(I);if(C)return C(W);throw"both async and sync fetching of the wasm failed";}catch(b){F(b)}}
function pa(){return I||!r&&!w||"function"!==typeof fetch||V("file://")?new Promise(function(b){b(oa())}):fetch(W,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+W+"'";return b.arrayBuffer()}).catch(function(){return oa()})}ia.push({I:function(){qa()}});
var ra=[null,[],[]],sa={f:function(b){window.fileRequestCallback(b)},c:function(b,c,e){L.copyWithin(b,c,c+e)},d:function(){F("OOM")},e:function(){return 0},b:function(){},a:function(b,c,e,f){for(var d=0,h=0;h<e;h++){for(var t=O[c+8*h>>2],n=O[c+(8*h+4)>>2],A=0;A<n;A++){var g=L[t+A],p=ra[b];0===g||10===g?((1===b?G:H)(da(p,0)),p.length=0):p.push(g)}d+=n}O[f>>2]=d;return 0},memory:J,table:aa},ta=function(){function b(d){a.asm=d.exports;S--;a.monitorRunDependencies&&a.monitorRunDependencies(S);0==S&&(null!==
T&&(clearInterval(T),T=null),U&&(d=U,U=null,d()))}function c(d){b(d.instance)}function e(d){return pa().then(function(h){return WebAssembly.instantiate(h,f)}).then(d,function(h){H("failed to asynchronously prepare wasm: "+h);F(h)})}var f={a:sa};S++;a.monitorRunDependencies&&a.monitorRunDependencies(S);if(a.instantiateWasm)try{return a.instantiateWasm(f,b)}catch(d){return H("Module.instantiateWasm callback failed with error: "+d),!1}(function(){if(I||"function"!==typeof WebAssembly.instantiateStreaming||
ma()||V("file://")||"function"!==typeof fetch)return e(c);fetch(W,{credentials:"same-origin"}).then(function(d){return WebAssembly.instantiateStreaming(d,f).then(c,function(h){H("wasm streaming compile failed: "+h);H("falling back to ArrayBuffer instantiation");e(c)})})})();return{}}();a.asm=ta;var qa=a.___wasm_call_ctors=function(){return(qa=a.___wasm_call_ctors=a.asm.g).apply(null,arguments)};a._free=function(){return(a._free=a.asm.h).apply(null,arguments)};
a._malloc=function(){return(a._malloc=a.asm.i).apply(null,arguments)};a._emu_init=function(){return(a._emu_init=a.asm.j).apply(null,arguments)};a._emu_get_sample_rate=function(){return(a._emu_get_sample_rate=a.asm.k).apply(null,arguments)};a._emu_set_binary_data=function(){return(a._emu_set_binary_data=a.asm.l).apply(null,arguments)};a._emu_get_track_info=function(){return(a._emu_get_track_info=a.asm.m).apply(null,arguments)};
a._emu_change_subsong=function(){return(a._emu_change_subsong=a.asm.n).apply(null,arguments)};a._emu_get_audio_buffer_length=function(){return(a._emu_get_audio_buffer_length=a.asm.o).apply(null,arguments)};a._emu_get_audio_buffer=function(){return(a._emu_get_audio_buffer=a.asm.p).apply(null,arguments)};a._emu_compute_audio_samples=function(){return(a._emu_compute_audio_samples=a.asm.q).apply(null,arguments)};a._emu_is_error=function(){return(a._emu_is_error=a.asm.r).apply(null,arguments)};
a._emu_is_waiting=function(){return(a._emu_is_waiting=a.asm.s).apply(null,arguments)};a._emu_is_track_change=function(){return(a._emu_is_track_change=a.asm.t).apply(null,arguments)};a._emu_is_end=function(){return(a._emu_is_end=a.asm.u).apply(null,arguments)};a._emu_is_loop=function(){return(a._emu_is_loop=a.asm.v).apply(null,arguments)};a._emu_get_current_position=function(){return(a._emu_get_current_position=a.asm.w).apply(null,arguments)};
a._emu_seek_position=function(){return(a._emu_seek_position=a.asm.x).apply(null,arguments)};a._emu_get_max_position=function(){return(a._emu_get_max_position=a.asm.y).apply(null,arguments)};a._emu_getVolVoice1=function(){return(a._emu_getVolVoice1=a.asm.z).apply(null,arguments)};a._emu_getVolVoice2=function(){return(a._emu_getVolVoice2=a.asm.A).apply(null,arguments)};a._emu_getVolVoice3=function(){return(a._emu_getVolVoice3=a.asm.B).apply(null,arguments)};
var ua=a.stackSave=function(){return(ua=a.stackSave=a.asm.C).apply(null,arguments)},X=a.stackAlloc=function(){return(X=a.stackAlloc=a.asm.D).apply(null,arguments)},va=a.stackRestore=function(){return(va=a.stackRestore=a.asm.E).apply(null,arguments)};a.dynCall_vi=function(){return(a.dynCall_vi=a.asm.F).apply(null,arguments)};a.dynCall_v=function(){return(a.dynCall_v=a.asm.G).apply(null,arguments)};a.asm=ta;
a.ccall=function(b,c,e,f){var d={string:function(g){var p=0;if(null!==g&&void 0!==g&&0!==g){var u=(g.length<<2)+1;p=X(u);var l=p,v=L;if(0<u){u=l+u-1;for(var N=0;N<g.length;++N){var k=g.charCodeAt(N);if(55296<=k&&57343>=k){var wa=g.charCodeAt(++N);k=65536+((k&1023)<<10)|wa&1023}if(127>=k){if(l>=u)break;v[l++]=k}else{if(2047>=k){if(l+1>=u)break;v[l++]=192|k>>6}else{if(65535>=k){if(l+2>=u)break;v[l++]=224|k>>12}else{if(l+3>=u)break;v[l++]=240|k>>18;v[l++]=128|k>>12&63}v[l++]=128|k>>6&63}v[l++]=128|k&
63}}v[l]=0}}return p},array:function(g){var p=X(g.length);fa.set(g,p);return p}},h=ba(b),t=[];b=0;if(f)for(var n=0;n<f.length;n++){var A=d[e[n]];A?(0===b&&(b=ua()),t[n]=A(f[n])):t[n]=f[n]}e=h.apply(null,t);e=function(g){return"string"===c?ea(g):"boolean"===c?!!g:g}(e);0!==b&&va(b);return e};a.UTF8ToString=ea;var Y;U=function xa(){Y||Z();Y||(U=xa)};
function Z(){function b(){if(!Y&&(Y=!0,a.calledRun=!0,!K)){R(ia);R(ja);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();ka.unshift(c)}R(ka)}}if(!(0<S)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)la();R(ha);0<S||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}a.run=Z;
if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();noExitRuntime=!0;Z();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_SC68);
/*
 sc68_adapter.js: Adapts SC68 backend to generic WebAudio/ScriptProcessor player.
 
 version 1.0
 
 	Copyright (C) 2015 Juergen Wothke

 LICENSE
 
 This library is free software; you can redistribute it and/or modify it
 under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2.1 of the License, or (at
 your option) any later version. This library is distributed in the hope
 that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public
 License along with this library; if not, write to the Free Software
 Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301 USA
*/

var sc68BackendInitOnce= false;	// must be global (otherwise reinit of backend may fail)

SC68BackendAdapter = (function(){ var $this = function () { 
		$this.base.call(this, backend_SC68.Module, 2);
		this._currentTrack;
		this._replayCache= new Array();
	}; 
	// SC68's sample buffer contains 2-byte integer sample data (i.e. must be rescaled) 
	// of 2 interleaved channels
	extend(EmsHEAP16BackendAdapter, $this, {  
		getAudioBuffer: function() {
			var ptr=  this.Module.ccall('emu_get_audio_buffer', 'number');			
			// make it a this.Module.HEAP16 pointer
			return ptr >> 1;	// 2 x 16 bit samples			
		},
		getAudioBufferLength: function() {
			var len= this.Module.ccall('emu_get_audio_buffer_length', 'number');
			return len;
		},
		computeAudioSamples: function() {		
			var status = this.Module.ccall('emu_compute_audio_samples', 'number');
			
			var isError= this.Module.ccall('emu_is_error', 'number', ['number'], [status]);
			if (isError) {
				return -1;
			} else {
				var isWaiting= this.Module.ccall('emu_is_waiting', 'number', ['number'], [status]);
												
				if (isWaiting) {
					// eventually the "replay" will be loaded and normal 
					// processing will resume					
					ScriptNodePlayer.getInstance().setWait(true);
					return -1;
				} else {
					//this.Module.ccall('emu_is_track_change', 'number', ['number'], [status]) 
					if (this.Module.ccall('emu_is_loop', 'number', ['number'], [status]) || 
						this.Module.ccall('emu_is_end', 'number', ['number'], [status])) {
						return 1;	// do not distinguish the above cases.. just end current song
					}
					return 0;
				}
			}
		},
		getMaxPlaybackPosition: function() { 
			return this.Module.ccall('emu_get_max_position', 'number');
		},
		getPlaybackPosition: function() {
			return this.Module.ccall('emu_get_current_position', 'number');
		},
		seekPlaybackPosition: function(pos) {
			return this.Module.ccall('emu_seek_position', 'number', ['number'], [pos]);
		},
		getPathAndFilename: function(filename) {
			return ['/', filename];
		},
		registerFileData: function(pathFilenameArray, data) {
			return 0;
		},
		loadMusicData: function(sampleRate, path, filename, data, options) {
			// load the song's binary data
			var buf = this.Module._malloc(data.length);
			this.Module.HEAPU8.set(data, buf);

			var timeout= -1;	// means: keep built-in timeout
			if ((typeof options != 'undefined') && typeof options.timeout != 'undefined') { 
				timeout= options.timeout*1000;
			}
			var ret = this.Module.ccall('emu_init', 'number', 
							['number', 'number', 'number', 'number', 'number'], 
							[sc68BackendInitOnce, sampleRate, timeout, buf, data.length]);

			sc68BackendInitOnce= true;
			this.Module._free(buf);

			if (ret == 0) {
				var inputSampleRate = this.Module.ccall('emu_get_sample_rate', 'number');
				this.resetSampleRate(sampleRate, inputSampleRate); 
			}
						
			return ret;			
		},
		evalTrackOptions: function(options) {
			if (typeof options.timeout != 'undefined') {
				// FIXME quite redundant - since sc68 also has a timeout.. (see above)
				ScriptNodePlayer.getInstance().setPlaybackTimeout(options.timeout*1000);
			}
			var track = options.track ?  options.track : 0;	// frontend counts from 0
			this._currentTrack= track +1;					// sc68 starts counting at 1
			
			// for sc68 "0" means "all".. 		
			var ret= this.Module.ccall('emu_change_subsong', 'number', ['number'], [this._currentTrack]);
			
			// it seems that the above doesn't work and that manual seeking has to be used instead..		
			if (this._currentTrack > 1) {
				var o= new Object();
				var seek=0;
				var i;
				for (i= 1; i<this._currentTrack; i++) {
					seek+=this.getSongLength(i);
				}			
				// hack; seeking doesnt seem to work before emu_compute_audio_samples is called
				this.Module.ccall('emu_compute_audio_samples', 'number');	
				this.seekPlaybackPosition(seek);
			}			
			
			return ret;
		},				
		teardown: function() {
		},
		getSongInfoMeta: function() {
			return {title: String,
					author: String,
					composer: String,
					replay: String,
					hwname: String,
					songInMillis: Number,
					numberOfTracks: Number
					};
		},
		getSongLength: function(track) {
			var numAttr= 7;
			ret = this.Module.ccall('emu_get_track_info', 'number', ['number'], [track]);			
			var array = this.Module.HEAP32.subarray(ret>>2, (ret>>2)+numAttr);
			return parseInt(this.Module.UTF8ToString(array[5]));
		},
		updateSongInfo: function(filename, result) {
			var numAttr= 7;
			ret = this.Module.ccall('emu_get_track_info', 'number', ['number'], [this._currentTrack]);
			
			var array = this.Module.HEAP32.subarray(ret>>2, (ret>>2)+numAttr);
			result.title= this.Module.UTF8ToString(array[0]);
			result.author= this.Module.UTF8ToString(array[1]);
			result.composer= this.Module.UTF8ToString(array[2]);
			result.replay= this.Module.UTF8ToString(array[3]);
			result.hwname= this.Module.UTF8ToString(array[4]);
			result.songInMillis= parseInt(this.Module.UTF8ToString(array[5]));
			result.numberOfTracks= parseInt(this.Module.UTF8ToString(array[6]));
		},
		
		// --------------------------- async file loading stuff -------------------------

		mapBackendFilename: function (name) {
			var input= this.Module.UTF8ToString(name);
			
			if (input && (input in this._replayCache)) {
				this.setCachedReplay(input);
			}
			
			return "replay/"+input+".bin";	// only sc68 replays are loaded here
		},
		cacheReplay: function(name, data) {
			ScriptNodePlayer.getInstance().trace("cache replay: ["+name+"] length: "+data.length);
			this._replayCache[name]= data;
		},
		registerFileData: function(pathFilenameArray, byteArray) {
			ScriptNodePlayer.getInstance().trace("loaded: ["+pathFilenameArray[1]+"] length: "+byteArray.length);
			
			var name= pathFilenameArray[1];
			var replay= "replay/";

			if (name.substring(0, replay.length) == replay) {
				// only 'replay' filed need to be handled here
				name= name.substring(replay.length);
				name= name.substring(0, name.length-4);	// also crop ".bin" (that we added above)
				
				this.cacheReplay(name, byteArray);				
			}			
			return 1;	// anything but undefined
		},	
		setCachedReplay: function(name) {
			if (name) {
				var replay= this._replayCache[name];
			
				if (replay) {
					ScriptNodePlayer.getInstance().trace(
						"set cached replay: ["+name+"] length: "+replay.length);
					
					var bytes = new Uint8Array(name.length+1);	// we dont have any unicode here
					var i;
					for (i = 0; i < name.length; i++){ 
						var c= name.charCodeAt(i);
						bytes[i]= c & 0xff;
					}
					bytes[i]= 0;
					var keybuf = this.Module._malloc(bytes.length);
					this.Module.HEAPU8.set(bytes, keybuf);
					var buf = this.Module._malloc(replay.length);
					this.Module.HEAPU8.set(replay, buf);
					var ret = this.Module.ccall('emu_set_binary_data', 'number', ['number', 'number', 'number', 'number'], [keybuf, bytes.length, buf, replay.length]);
					this.Module._free(keybuf);
					this.Module._free(buf);				
				}
			}
		}

	});	return $this; })();
	