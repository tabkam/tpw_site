(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ani_fx_atlas_1", frames: [[762,354,68,35],[762,206,105,35],[762,132,136,35],[762,317,79,35],[762,243,103,35],[762,0,192,42],[832,354,58,35],[762,169,108,35],[762,44,192,42],[762,280,89,35],[762,88,192,42],[0,422,1374,121],[900,132,35,42],[869,206,36,42],[853,280,39,45],[0,0,760,420],[892,327,38,38]]}
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



(lib.CachedBmp_17 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bulbasaur = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.charmander = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.pikachu = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.pokeball_bkg = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.squirtle = function() {
	this.initialize(ss["ani_fx_atlas_1"]);
	this.gotoAndStop(16);
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


(lib.squirtle_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.squirtle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.squirtle_mc, new cjs.Rectangle(0,0,38,38), null);


(lib.show_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-17,-9.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-47.95,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.show_btn, new cjs.Rectangle(-47.9,-10.5,96,21), null);


(lib.scaleUp_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-26.1,-9.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-47.95,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scaleUp_btn, new cjs.Rectangle(-47.9,-10.5,96,21), null);


(lib.scaleDown_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-34,-9.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-47.95,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scaleDown_btn, new cjs.Rectangle(-47.9,-10.5,96,21), null);


(lib.rotate_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-19.65,-9.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-47.95,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rotate_btn, new cjs.Rectangle(-47.9,-10.5,96,21), null);


(lib.resetAll_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-25.7,-9.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-48,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.resetAll_btn, new cjs.Rectangle(-48,-10.5,96,21), null);


(lib.pikachu_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pikachu();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pikachu_mc, new cjs.Rectangle(0,0,39,45), null);


(lib.hide_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-14.65,-9.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-47.95,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hide_btn, new cjs.Rectangle(-47.9,-10.5,96,21), null);


(lib.fadeOut_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-27.1,-9.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-47.95,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fadeOut_btn, new cjs.Rectangle(-47.9,-10.5,96,21), null);


(lib.fadeIn_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-22.35,-9.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-47.95,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fadeIn_btn, new cjs.Rectangle(-47.9,-10.5,96,21), null);


(lib.charmander_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.charmander();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.charmander_mc, new cjs.Rectangle(0,0,36,42), null);


(lib.bulbasaur_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bulbasaur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bulbasaur_mc, new cjs.Rectangle(0,0,35,42), null);


// stage content:
(lib.ani_fx = function(mode,startPosition,loop,reversed) {
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
		var currMCName = "";
		var currClip;
		this.bulbasaur_mc.name = "Bulbasaur";
		this.charmander_mc.name = "Charmander";
		this.squirtle_mc.name = "Squirtle";
		this.pikachu_mc.name = "Pikachu";
		
		//this.bulbasaur_mc.name = "bulbasaur";
		
		this.bulbasaur_mc.addEventListener("click", storeMCName.bind(this));
		this.charmander_mc.addEventListener("click", storeMCName.bind(this));
		this.squirtle_mc.addEventListener("click", storeMCName.bind(this));
		this.pikachu_mc.addEventListener("click", storeMCName.bind(this));
		this.resetAll_btn.addEventListener("click", resetAll);
		this.hide_btn.addEventListener("click", hideClickHandler);
		this.show_btn.addEventListener("click", showClickHandler);
		this.fadeOut_btn.addEventListener("click", fadeOut);
		this.fadeIn_btn.addEventListener("click", fadeIn);
		this.scaleUp_btn.addEventListener("click", scaleUp);
		this.scaleDown_btn.addEventListener("click", scaleDown);
		this.rotate_btn.addEventListener("click", rotate);
		
		function storeMCName(mClip) {
			currMCName = mClip.currentTarget.name;
			currClip = mClip;
			exportRoot.pkmn_slct_msg.text = "The currently selected Pokémon is " + currMCName + ".";
		}
		
		function resetAll() {
			currMCName = "";
			exportRoot.pkmn_slct_msg.text = "";
			exportRoot.bulbasaur_mc.visible = true;
			exportRoot.charmander_mc.visible = true;
			exportRoot.squirtle_mc.visible = true;
			exportRoot.pikachu_mc.visible = true;
			gsap.to(exportRoot.bulbasaur_mc, 5, {alpha:100, rotation:0, scale:1});
			gsap.to(exportRoot.charmander_mc, 5, {alpha:100, rotation:0, scale:1});
			gsap.to(exportRoot.squirtle_mc, 5, {alpha:100, rotation:0, scale:1});
			gsap.to(exportRoot.pikachu_mc, 5, {alpha:100, rotation:0, scale:1});
		}
		
		
		//code for hide button
		function hideClickHandler() {
			//currMCName = mClip.currentTarget.name;
			if (currMCName == "") {
				exportRoot.pkmn_slct_msg.text = "You must select a Pokémon first.";
			}
			else {
				//alert("You selected Pokémon " + currMCName);
				currClip.currentTarget.visible = false;
			}
		}
		
		//Code for show button
		function showClickHandler() {
			//currMCName = mClip.currentTarget.name;
			if (currMCName == "") {
				exportRoot.pkmn_slct_msg.text = "You must select a Pokémon first.";
			}
			else {
				//alert("You selected Pokémon " + currMCName);
				currClip.currentTarget.visible = true;
			}
		}
		
		//The fadeOut listener
		function fadeOut() {
			if (currMCName == "") {
				exportRoot.pkmn_slct_msg.text = "You must select a Pokémon first.";
			}
			else {
				gsap.to(currClip.currentTarget, 5, {alpha:0});
			}
		}
		
		//The fadeIn listener
		function fadeIn() {
			if (currMCName == "") {
				exportRoot.pkmn_slct_msg.text = "You must select a Pokémon first.";
			}
			else {
				gsap.to(currClip.currentTarget, 5, {alpha:1});
			}
		}
		
		//The scaleUp listener
		function scaleUp() {
			if (currMCName == "") {
				exportRoot.pkmn_slct_msg.text = "You must select a Pokémon first.";
			}
			else {
				//gsap.to(currClip.currentTarget, 2, {scale:2});
				gsap.to(currClip.currentTarget, 2, {scale:currClip.currentTarget.scale+.5});
			}
		}
		
		//The scaleDown listener
		function scaleDown() {
			if (currMCName == "") {
				exportRoot.pkmn_slct_msg.text = "You must select a Pokémon first.";
			}
			else {
				//alert("currentScale is " + currClip.currentTarget.scale);
				gsap.to(currClip.currentTarget, 2, {scale:currClip.currentTarget.scale-.5});
			}
		}
		
		//The rotate listener
		function rotate() {
			if (currMCName == "") {
				exportRoot.pkmn_slct_msg.text = "You must select a Pokémon first.";
			}
			else {
				//alert("currentScale is " + currClip.currentTarget.scale);
				gsap.to(currClip.currentTarget, 2, {rotation:currClip.currentTarget.rotation+15});
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// scaleUp_btn
	this.scaleUp_btn = new lib.scaleUp_btn();
	this.scaleUp_btn.name = "scaleUp_btn";
	this.scaleUp_btn.setTransform(47.45,410);

	this.timeline.addTween(cjs.Tween.get(this.scaleUp_btn).wait(1));

	// scaleDown_btn
	this.scaleDown_btn = new lib.scaleDown_btn();
	this.scaleDown_btn.name = "scaleDown_btn";
	this.scaleDown_btn.setTransform(142.4,410);

	this.timeline.addTween(cjs.Tween.get(this.scaleDown_btn).wait(1));

	// rotate_btn
	this.rotate_btn = new lib.rotate_btn();
	this.rotate_btn.name = "rotate_btn";
	this.rotate_btn.setTransform(237.35,410);

	this.timeline.addTween(cjs.Tween.get(this.rotate_btn).wait(1));

	// hide_btn
	this.hide_btn = new lib.hide_btn();
	this.hide_btn.name = "hide_btn";
	this.hide_btn.setTransform(332.3,410);

	this.timeline.addTween(cjs.Tween.get(this.hide_btn).wait(1));

	// show_btn
	this.show_btn = new lib.show_btn();
	this.show_btn.name = "show_btn";
	this.show_btn.setTransform(427.25,410);

	this.timeline.addTween(cjs.Tween.get(this.show_btn).wait(1));

	// fadeOut_btn
	this.fadeOut_btn = new lib.fadeOut_btn();
	this.fadeOut_btn.name = "fadeOut_btn";
	this.fadeOut_btn.setTransform(522.2,410);

	this.timeline.addTween(cjs.Tween.get(this.fadeOut_btn).wait(1));

	// fadeIn_btn
	this.fadeIn_btn = new lib.fadeIn_btn();
	this.fadeIn_btn.name = "fadeIn_btn";
	this.fadeIn_btn.setTransform(617.15,410);

	this.timeline.addTween(cjs.Tween.get(this.fadeIn_btn).wait(1));

	// resetAll_btn
	this.resetAll_btn = new lib.resetAll_btn();
	this.resetAll_btn.name = "resetAll_btn";
	this.resetAll_btn.setTransform(712.5,410);

	this.timeline.addTween(cjs.Tween.get(this.resetAll_btn).wait(1));

	// pikachu
	this.pikachu_mc = new lib.pikachu_mc();
	this.pikachu_mc.name = "pikachu_mc";
	this.pikachu_mc.setTransform(700,212,1,1,0,0,0,19.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.pikachu_mc).wait(1));

	// squirtle
	this.squirtle_mc = new lib.squirtle_mc();
	this.squirtle_mc.name = "squirtle_mc";
	this.squirtle_mc.setTransform(540,209,1,1,0,0,0,19,19);

	this.timeline.addTween(cjs.Tween.get(this.squirtle_mc).wait(1));

	// charmander
	this.charmander_mc = new lib.charmander_mc();
	this.charmander_mc.name = "charmander_mc";
	this.charmander_mc.setTransform(220,210,1,1,0,0,0,18,21);

	this.timeline.addTween(cjs.Tween.get(this.charmander_mc).wait(1));

	// bulbasaur
	this.bulbasaur_mc = new lib.bulbasaur_mc();
	this.bulbasaur_mc.name = "bulbasaur_mc";
	this.bulbasaur_mc.setTransform(60,210,1,1,0,0,0,17.5,21);

	this.timeline.addTween(cjs.Tween.get(this.bulbasaur_mc).wait(1));

	// text
	this.pkmn_slct_msg = new cjs.Text("", "24px 'Helvetica'");
	this.pkmn_slct_msg.name = "pkmn_slct_msg";
	this.pkmn_slct_msg.textAlign = "center";
	this.pkmn_slct_msg.lineHeight = 29;
	this.pkmn_slct_msg.lineWidth = 743;
	this.pkmn_slct_msg.parent = this;
	this.pkmn_slct_msg.setTransform(378,360.95);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(36.55,21.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.pkmn_slct_msg}]}).wait(1));

	// bkg
	this.instance_1 = new lib.pokeball_bkg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(379.5,210,381,210.5);
// library properties:
lib.properties = {
	id: '28050047EB07474293E044DF841508C2',
	width: 760,
	height: 420,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../../images/ani_fx_atlas_1.png?1609127780465", id:"ani_fx_atlas_1"}
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
an.compositions['28050047EB07474293E044DF841508C2'] = {
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