(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.upperarm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aheh3QD8ABC7AUQD6AZAAAxQAAAvp/BDQgNAAg8AFQg8AFgMAAQgKAAg6AKQgPADgNACQgGAMgUACQgLABgWAAQgDAAgCAAQgyAAhfgoQhkgqAAgcQAAhcD6gbQA9gHBvgFQBOgDAAgFQAAgNgFAEQgNAJgLAAQAOAAAPAAgAkdBzQgmAIgVAH");
	this.shape.setTransform(59.5,13.0293);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upperarm, new cjs.Rectangle(-1,-1,121,28.1), null);


(lib.hand = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAthaIAAhKIASgTQAMgPAAgGQAaAUAXBUQAVBLAAAtQAAAug7BZQg+BaghAAQgYAAgTgMQgIgFgGgIQgBAAAAgBQgcgZgNgPQgKgLgEgGQgWglAAhGQAAgiAHgiQAJgoAOgVQATAOAMAUQADAFADAGQAHAQAQAmIAAAyQgWgVgGhOQgBgGAAgKQgBgcAAgzQAAgLAFgpQAFgpAAgWQAVAJAKA8QgBgLAAgDQAAgRAGgSQAEgKAKgUQASAkAEBMIAHCAQAAhYACgmQABhAAHgoIAUAAQAAAxAKBfQAEAnAGAvIgKAAgAgrilQACASADAWQALB5ADAJIgKAAQAAghgFhIQgDgtgBgUgAhDDbQgXgegSgKAg0DpQgJgIgGgG");
	this.shape.setTransform(14.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-1,-1,31,51), null);


(lib.forearm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABMF8QgCAVgCAOQgHAjgTAUQhFACguhDQgshAAAhbQAAkXA3jiQAkiUAmhCQBVA/ALDIQAGBmgMByQAABggLBfQgGA3gNBIQgFAZAFAbgABMFIQAAAGAAALQAAAUAAAPABCE2QAIAHABAFQABACAAAE");
	this.shape.setTransform(11.3779,47.0029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forearm, new cjs.Rectangle(-1,-1,24.8,96), null);


// stage content:
(lib.Arm_Move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_11
	this.ikNode_1 = new lib.upperarm();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(366.15,320.5,0.9988,0.9988,0,0,0,10.2,13.6);

	this.ikNode_2 = new lib.forearm();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(467.95,314.35,0.9988,0.9988,0,0,0,12,84.5);

	this.ikNode_4 = new lib.hand();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(471.15,246.4,0.9988,0.9988,0,0,0,15.2,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9988,scaleY:0.9988,rotation:0,x:471.15,y:246.4,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12,rotation:0,x:467.95,y:314.35,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:0,x:366.15,y:320.5,regY:13.6,scaleX:0.9988,scaleY:0.9988}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-1.9244,x:471.8,y:250.7,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:0.4981,x:468.15,y:318.7,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.3,rotation:2.3729,x:366.25,y:320.65,regY:13.6,scaleX:0.9988,scaleY:0.9988}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9988,scaleY:0.9988,rotation:-3.8519,x:472.35,y:255.05,regY:49.6,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:0.9988,x:468.05,y:323,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:4.7491,x:366.05,y:320.75,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-5.7785,x:472.7,y:259.15,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:1.4987,x:467.85,y:327.1,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:7.1256,x:366.05,y:320.75,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-7.7065,x:472.95,y:263.35,regY:49.5,regX:15.3}},{t:this.ikNode_2,p:{regX:12.1,rotation:2.0005,x:467.4,y:331.3,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:9.5002,x:365.95,y:320.75,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.6333,x:472.75,y:267.55,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12,rotation:2.5007,x:466.65,y:335.45,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:11.8763,x:365.95,y:320.8,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-11.5608,x:472.6,y:271.75,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:3.0011,x:466,y:339.7,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:14.2524,x:365.95,y:320.7,regY:13.6,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-13.4887,x:472.3,y:275.85,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:3.5026,x:465.05,y:343.75,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:16.6284,x:365.85,y:320.8,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-15.4154,x:471.9,y:279.95,regY:49.5,regX:15.3}},{t:this.ikNode_2,p:{regX:12.1,rotation:4.0027,x:463.95,y:347.85,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:19.0035,x:365.85,y:320.85,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-17.3431,x:471.15,y:284.05,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:4.503,x:462.65,y:351.85,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.3,rotation:21.3794,x:365.9,y:320.9,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-19.2704,x:470.25,y:288.05,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:5.0045,x:461.25,y:355.75,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:23.7562,x:365.7,y:320.85,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-21.1978,x:469.25,y:292,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:5.5047,x:459.65,y:359.65,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:26.1313,x:365.65,y:320.95,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-23.1246,x:468,y:295.9,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12,rotation:6.0052,x:457.75,y:363.5,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.3,rotation:28.5072,x:365.8,y:320.95,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-25.0518,x:466.75,y:299.75,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:6.5064,x:455.95,y:367.25,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:30.8833,x:365.65,y:320.95,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-26.9789,x:465.35,y:303.45,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:7.007,x:453.95,y:370.9,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:33.2594,x:365.55,y:320.95,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-28.9068,x:463.75,y:307.2,regY:49.6,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:7.5074,x:451.7,y:374.5,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:35.6362,x:365.6,y:320.9,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-30.8334,x:461.95,y:310.65,regY:49.5,regX:15.3}},{t:this.ikNode_2,p:{regX:12.1,rotation:8.0092,x:449.3,y:378,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:38.012,x:365.5,y:321,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-32.7611,x:460,y:314.15,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:8.5089,x:446.8,y:381.4,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:40.3873,x:365.45,y:321,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-34.6885,x:457.95,y:317.55,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:9.0096,x:444.25,y:384.65,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{regX:10.2,rotation:42.7624,x:365.5,y:321,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-36.6162,x:455.85,y:320.8,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:9.5121,x:441.5,y:387.85,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:45.1393,x:365.4,y:321,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-38.5426,x:453.5,y:324,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:10.0113,x:438.65,y:390.95,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:47.5158,x:365.35,y:321,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-40.4705,x:451.15,y:326.95,regY:49.5,regX:15.3}},{t:this.ikNode_2,p:{regX:12.1,rotation:10.5113,x:435.65,y:393.95,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:49.8905,x:365.3,y:321.05,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-42.3981,x:448.5,y:329.95,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:11.0129,x:432.5,y:396.75,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:52.2661,x:365.3,y:321.05,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-44.3253,x:446,y:332.65,regY:49.5,regX:15.3}},{t:this.ikNode_2,p:{regX:12.1,rotation:11.5137,x:429.25,y:399.4,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:54.6424,x:365.25,y:321.1,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-46.2523,x:443.1,y:335.5,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:12.0134,x:425.85,y:401.95,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:57.0184,x:365.2,y:321.15,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-48.1796,x:440.25,y:337.95,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:12.5151,x:422.5,y:404.35,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:59.3938,x:365.15,y:321.05,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-50.1067,x:437.35,y:340.4,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:13.0163,x:418.95,y:406.65,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:61.7697,x:365.1,y:321.15,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-52.0335,x:434.25,y:342.65,regY:49.5,regX:15.2}},{t:this.ikNode_2,p:{regX:12,rotation:13.5167,x:415.25,y:408.7,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:64.1455,x:365.1,y:321.15,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-53.9617,x:431.2,y:344.75,regY:49.6,regX:15.2}},{t:this.ikNode_2,p:{regX:12.1,rotation:14.0169,x:411.65,y:410.75,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.3,rotation:66.5217,x:365.1,y:321.3,regY:13.7,scaleX:0.9987,scaleY:0.9987}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9987,scaleY:0.9987,rotation:-55.8884,x:428,y:346.65,regY:49.5,regX:15.3}},{t:this.ikNode_2,p:{regX:12.1,rotation:14.5175,x:407.9,y:412.55,scaleX:0.9988,scaleY:0.9988}},{t:this.ikNode_1,p:{regX:10.2,rotation:68.8978,x:365.1,y:321.2,regY:13.6,scaleX:0.9987,scaleY:0.9987}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(748.6,496.5,-261.6,-68.80000000000001);
// library properties:
lib.properties = {
	id: '2F502E6B1E63454E9377E20735551AAA',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['2F502E6B1E63454E9377E20735551AAA'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;