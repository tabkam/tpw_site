(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"loops_atlas_1", frames: [[234,0,97,187],[0,189,106,187],[108,189,106,187],[126,0,106,187],[216,189,106,187],[0,0,124,187]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["loops_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["loops_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["loops_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["loops_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["loops_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["loops_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.thomas_txt = new cjs.Text("Thomas", "bold 80px 'Arial'", "#0099FF");
	this.thomas_txt.name = "thomas_txt";
	this.thomas_txt.lineHeight = 89;
	this.thomas_txt.parent = this;
	this.thomas_txt.setTransform(-153.35,-44.65);

	this.timeline.addTween(cjs.Tween.get(this.thomas_txt).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.3,-46.6,310.70000000000005,93.30000000000001);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.thomas_txt = new cjs.Text("Thomas", "bold 80px 'Arial'", "#0099FF");
	this.thomas_txt.name = "thomas_txt";
	this.thomas_txt.lineHeight = 89;
	this.thomas_txt.parent = this;
	this.thomas_txt.setTransform(-153.35,-44.65);

	this.timeline.addTween(cjs.Tween.get(this.thomas_txt).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.3,-46.6,310.70000000000005,93.30000000000001);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFhFhQiSCTjPAAQjPAAiSiTQiSiRAAjQQAAjOCSiTQCSiSDPAAQDPAACSCSQCTCTAADOQAADQiTCRg");
	this.shape.setTransform(50,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AlhFhQiSiRAAjQQAAjOCSiTQCSiSDPAAQDPAACSCSQCTCTAADOQAADQiTCRQiSCTjPAAQjPAAiSiTg");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,102,102), null);


(lib.thomas_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fadeIn:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(1));

	// thomas
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(154.95,46.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(154.95,46.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},46).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,alpha:1},46).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.2,310.79999999999995,93.4);


(lib.Circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {shieldUp:1,shieldDown:29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(32));

	// animation
	this.instance = new lib.Symbol1();
	this.instance.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-50},28).to({y:50},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-100.5,102,201);


// stage content:
(lib.loops = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var shield_1 = "down";
		var shield_2 = "down";
		var shield_3 = "down";
		var shield_4 = "down";
		var shield_5 = "down";
		var shield_6 = "down";
		this.shield_1.state = "down";
		this.shield_2.state = "down";
		this.shield_3.state = "down";
		this.shield_4.state = "down";
		this.shield_5.state = "down";
		this.shield_6.state = "down";
		
		var shieldArray = [this.shield_1, this.shield_2, this.shield_3, this.shield_4,
			this.shield_5, this.shield_6];
		
		this.shield_1.addEventListener("click", shieldMove);
		this.shield_2.addEventListener("click", shieldMove);
		this.shield_3.addEventListener("click", shieldMove);
		this.shield_4.addEventListener("click", shieldMove);
		this.shield_5.addEventListener("click", shieldMove);
		this.shield_6.addEventListener("click", shieldMove);
		
		function shieldMove(evnt) {
			currShield = evnt.currentTarget.name;
			// console.log("currShield is " + currShield);
			// console.log("currShield state is " + evnt.currentTarget.state);
			if(evnt.currentTarget.state == "down"){
				evnt.currentTarget.gotoAndPlay('shieldUp');
				evnt.currentTarget.state = "up";
			} else {
				evnt.currentTarget.gotoAndPlay('shieldDown');
				evnt.currentTarget.state = "down";
			}
			
			if(shieldArray[0].state == "up" && shieldArray[1].state == "up" && 
				shieldArray[2].state == "up" && shieldArray[3].state == "up" && 
				shieldArray[4].state == "up" && shieldArray[5].state == "up"){
					for(i=0;i<6;i++){
						shieldChange(shieldArray[i]);
				}
				exportRoot.name_mc.gotoAndPlay('fadeIn');
			}
		}
		
		function shieldChange(mClip) {
			currShield = mClip.name;
			// console.log("currShield is " + currShield);
			// console.log("currShield state is " + mClip.state);
			if(mClip.state == "down"){
				mClip.gotoAndPlay('shieldUp');
				mClip.state = "up";
			} else {
				mClip.gotoAndPlay('shieldDown');
				mClip.state = "down";
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shield_1
	this.shield_1 = new lib.Circle();
	this.shield_1.name = "shield_1";
	this.shield_1.setTransform(136,145,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.shield_1).wait(1));

	// shield_2
	this.shield_2 = new lib.Circle();
	this.shield_2.name = "shield_2";
	this.shield_2.setTransform(236,145,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.shield_2).wait(1));

	// shield_3
	this.shield_3 = new lib.Circle();
	this.shield_3.name = "shield_3";
	this.shield_3.setTransform(336,145,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.shield_3).wait(1));

	// shield_4
	this.shield_4 = new lib.Circle();
	this.shield_4.name = "shield_4";
	this.shield_4.setTransform(436,145,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.shield_4).wait(1));

	// shield_5
	this.shield_5 = new lib.Circle();
	this.shield_5.name = "shield_5";
	this.shield_5.setTransform(536,145,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.shield_5).wait(1));

	// shield_6
	this.shield_6 = new lib.Circle();
	this.shield_6.name = "shield_6";
	this.shield_6.setTransform(636,145,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.shield_6).wait(1));

	// buddha_text
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(605.25,102,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(505.4,102,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(405.65,102,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(305.9,102,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(206.15,102,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1();
	this.instance_5.setTransform(101.95,102,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// thomas_text
	this.name_mc = new lib.thomas_txt();
	this.name_mc.name = "name_mc";
	this.name_mc.setTransform(233.4,258.95);

	this.timeline.addTween(cjs.Tween.get(this.name_mc).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(465.5,304.5,221,-109);
// library properties:
lib.properties = {
	id: '9504172DA9854171BBDE095B7138B73A',
	width: 760,
	height: 420,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../images/loops_atlas_1.png", id:"loops_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9504172DA9854171BBDE095B7138B73A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;