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


(lib.window = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2A2828").ss(1,1,1).p("AgekgQBDgEA2AXQA6AZAPAuQA/gsBPAJQBJAIA2AvQA4AwAEA7QAGBDg/A0QAlAsgOAtQgNAqgzAXQg0AYhAgLQhJgMg/g3QgHA3gtAmQgoAig2ALQg2AKgogQQgqgSgEgpQhUAZhUgIQhTgIgxgmQg2gpAEg9QAFhGBOhQQADgOAHgTQAPglAVgaQBBhRBiBIQAEg4A0ghQAugeBFgEg");
	this.shape.setTransform(166.0082,77.7906);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhEYQgqgSgEgpQhUAZhUgIQhTgIgxgmQg2gpAEg9QAFhGBOhQQADgOAHgTQAPglAVgaQBBhRBiBIQAEg4A0ghQAugeBFgEQBDgEA2AXQA6AZAPAuQA/gsBPAJQBJAIA2AvQA4AwAEA7QAGBDg/A0QAlAsgOAtQgNAqgzAXQg0AYhAgLQhJgMg/g3QgHA3gtAmQgoAig2ALQgUAEgTAAQgeAAgZgKg");
	this.shape_1.setTransform(166.0082,77.7906);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bush
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2A2828").ss(1,1,1).p("Ajjo2QBUggA3gLQC/glCPCKQCJhQBugVQDMgnBxCWQAlgdBDgdQBWgkBOgGQDdgRAyDsIAAPlMgqJAAAIAAvlQAXg5A+gsQB+hZDKA9QBVhCCMgaQDOgmCwBqQAXgDBOgfg");
	this.shape_2.setTransform(151.575,243.4726);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B239").s().p("A1EJqIAAvlQAXg5A+gsQB+hZDKA9QBVhCCMgaQDOgmCwBqQAXgDBOgfQBUggA3gLQC/glCPCKQCJhQBugVQDMgnBxCWQAlgdBDgdQBWgkBOgGQDdgRAyDsIAAPlg");
	this.shape_3.setTransform(151.575,243.4726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// sky
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2A2828").ss(1,1,1).p("AVF2nMgqJAAAMAAAAtPMAqJAAAg");
	this.shape_4.setTransform(151.575,160.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9CE2FC").s().p("A1EWoMAAAgtPMAqJAAAMAAAAtPg");
	this.shape_5.setTransform(151.575,160.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// window_frame
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2A2828").ss(1,1,1).p("AX3ZKMgvtAAAMAAAgyTMAvtAAAg");
	this.shape_6.setTransform(152.65,161.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A66B42").s().p("A32ZKMAAAgyTMAvsAAAMAAAAyTg");
	this.shape_7.setTransform(152.65,161.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,307.3,324.1);


(lib.restart_btn = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Restart", "13px 'Euphemia UCAS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 50;
	this.text.parent = this;
	this.text.setTransform(47,5.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmjhoINHAAQAyAAAAAyIAABtQAAAygyAAItHAAQgyAAAAgyIAAhtQAAgyAyAAg");
	this.shape.setTransform(47,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AmjBpQgyAAAAgyIAAhtQAAgyAyAAINHAAQAyAAAAAyIAABtQAAAygyAAg");
	this.shape_1.setTransform(47,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.restart_btn, new cjs.Rectangle(-1,-1,96,24.8), null);


(lib.curtain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// curtain_outline_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2A2828").ss(1,1,1).p("AAAEOIAAob");
	this.shape.setTransform(277.1,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// curtain_outline_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2A2828").ss(1,1,1).p("AAAEOIAAob");
	this.shape_1.setTransform(235.3,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// curtain_outline_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2A2828").ss(1,1,1).p("AAAEOIAAob");
	this.shape_2.setTransform(201.8,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// curtain_outline_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2A2828").ss(1,1,1).p("AAAEOIAAob");
	this.shape_3.setTransform(160,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// curtain_outline_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2A2828").ss(1,1,1).p("AAAEOIAAob");
	this.shape_4.setTransform(112.9,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// curtain_outline_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2A2828").ss(1,1,1).p("AAAEOIAAob");
	this.shape_5.setTransform(72.35,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// curtain_outline_7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2A2828").ss(1,1,1).p("AAAEOIAAob");
	this.shape_6.setTransform(28.25,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// curtain_top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2A2828").ss(1,1,1).p("AYqEOQg4Ash3AAQhpAAgsgsQgagZgHgFQgXgNglAAQgmAAgSANQgHAGgPAYQgaAshcAAQhcAAgogsQgWgYgJgGQgVgNgmAAQg/AAg5ArQg5AsghAAQgnAAgZgsQgZgrgkAAQgXAAgEANIgEAeQgNAsiGAAQh/AAgcgsIgXgeQgSgNgrAAQgtAAgbANQgOAIgWAWQgqAshRAAQhUAAg3gsIgpgeQgagNgiAAQgjAAgYANQgMAHgZAXQgvAshGAAQgsAAgUgOQgKgHgMgXQgMgVgQgJQgagNg1AAQg1AAggANQgSAIgbAWQg0AshcAAQg7AAgXgOQgOgJgDgVQgDgXgGgHQgOgNgtAAQgsAAgaANIgoAeQg0Ash4AAIAApzMAyTAAAIAAIcQgEAWgcAVg");
	this.shape_7.setTransform(161.025,31.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBCD9").s().p("ATmEOQgagZgHgFQgXgNglAAQgmAAgSANQgHAGgPAYQgaAshcAAQhcAAgogsQgWgYgJgGQgVgNgmAAQg/AAg5ArQg5AsghAAQgnAAgZgsQgZgrgkAAQgXAAgEANIgEAeQgNAsiGAAQh/AAgcgsIgXgeQgSgNgrAAQgtAAgbANQgOAIgWAWQgqAshRAAQhUAAg3gsIgpgeQgagNgiAAQgjAAgYANQgMAHgZAXQgvAshGAAQgsAAgUgOQgKgHgMgXQgMgVgQgJQgagNg1AAQg1AAggANQgSAIgbAWQg0AshcAAQg7AAgXgOQgOgJgDgVQgDgXgGgHQgOgNgtAAQgsAAgaANIgoAeQg0Ash4AAIAApzMAyTAAAIAAIcQgEAWgcAVQg4Ash3AAQhpAAgsgsg");
	this.shape_8.setTransform(161.025,31.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// curtain_outline_8
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2A2828").ss(1,1,1).p("AAAsuIAAZd");
	this.shape_9.setTransform(313.7,258.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// curtain_outline_9
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2A2828").ss(1,1,1).p("ADeNAIm75/");
	this.shape_10.setTransform(257.5,83.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// curtain_outline_10
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2A2828").ss(1,1,1).p("ACNNAIkZ5/");
	this.shape_11.setTransform(279.725,83.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// curtain_outline_11
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2A2828").ss(1,1,1).p("ABjNAIjF5/");
	this.shape_12.setTransform(303.775,83.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// curtain_outline_12
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2A2828").ss(1,1,1).p("AAAM1IAA5p");
	this.shape_13.setTransform(277.1,258.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// curtain_outline_13
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2A2828").ss(1,1,1).p("AAAMWIAA4r");
	this.shape_14.setTransform(296.95,255.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// curtain_holder_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2A2828").ss(1,1,1).p("AEaA0IozAAIAAhnIIzAAg");
	this.shape_15.setTransform(293.825,171.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF007E").s().p("AkZA0IAAhnIIzAAIAABng");
	this.shape_16.setTransform(293.825,171.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// right_curtain_side
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2A2828").ss(1,1,1).p("AI0aoMAAAg1PIxoAAII0Z/IAAacIAXAaQAhAaA7AAQAvAAA0gfQA0gfAvAAQAsAABHAfQBGAfBCAAg");
	this.shape_17.setTransform(265.6,170.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBCD9").s().p("AGraJQhGgfgsAAQgvAAg0AfQg0AfgvAAQg6AAgjgaIgWgaIAA6cIoz5/IRnAAMAAAA1PQhCAAhHgfg");
	this.shape_18.setTransform(265.6,170.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// curtain_outline_14
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2A2828").ss(1,1,1).p("AAAsuIAAZd");
	this.shape_19.setTransform(8.4,258.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	// curtain_outline_15
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2A2828").ss(1,1,1).p("AjdNAIG75/");
	this.shape_20.setTransform(64.575,83.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// curtain_outline_16
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#2A2828").ss(1,1,1).p("AiMNAIEZ5/");
	this.shape_21.setTransform(42.35,83.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// curtain_outline_17
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2A2828").ss(1,1,1).p("AhiNAIDF5/");
	this.shape_22.setTransform(18.325,83.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// curtain_outline_18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#2A2828").ss(1,1,1).p("AAAM1IAA5p");
	this.shape_23.setTransform(44.95,258.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// curtain_outline_19
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2A2828").ss(1,1,1).p("AAAMWIAA4r");
	this.shape_24.setTransform(25.1,255.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// left_curtain_holder
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#2A2828").ss(1,1,1).p("AkZgzIAABnIIzAAIAAhng");
	this.shape_25.setTransform(28.225,171.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF007E").s().p("AkZA0IAAhnIIzAAIAABng");
	this.shape_26.setTransform(28.225,171.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// left_curtain_side
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2A2828").ss(1,1,1).p("AAAgoIAAacIgVAaQgiAag7AAQgvAAg0gfQg0gfgwAAQgrAAhGAfQhHAfhDAAMAAAg1PIRpAAg");
	this.shape_27.setTransform(56.45,170.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFBCD9").s().p("AjVaJQg0gfgvAAQgrAAhHAfQhHAfhDAAMAAAg1PIRoAAIo0Z/IAAacIgVAaQgiAag7AAQgvAAg0gfg");
	this.shape_28.setTransform(56.45,170.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,324.1,342.9);


(lib.btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AogjWIRBAAQAyAAAAAyIAAFJQAAAygyAAIxBAAQgyAAAAgyIAAlJQAAgyAyAAg");
	this.shape.setTransform(59,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AogDXQgyAAAAgyIAAlJQAAgyAyAAIRBAAQAyAAAAAyIAAFJQAAAygyAAg");
	this.shape_1.setTransform(59,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-1.5,-1.5,121,45), null);


(lib.bkg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skirt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB6h2IgZC+IjMAFIgEjDQgIAEgJADIgNDCIgWAAIAAAkIFHAAIgDguIgVgBIgEi3g");
	this.shape.setTransform(711.775,233.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99FF").s().p("AijB3IAAgkIAWAAIANjCIARgHIAEDDIDMgFIAZi+IAOAHIAEC3IAVABIADAug");
	this.shape_1.setTransform(711.775,233.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// right_arm_line
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAgfIABA/");
	this.shape_2.setTransform(726.85,230.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// left_arm_line
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AACgkIgDBJ");
	this.shape_3.setTransform(696.225,231.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// right_eyelash_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AASAHIgEAAQgLgHgUgG");
	this.shape_4.setTransform(700.125,199.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// right_eyelash_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAOAJQgNgBgFgEIgJgM");
	this.shape_5.setTransform(701.175,197.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// right_eyelash_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAKAKQgJAAgCgGIgIgN");
	this.shape_6.setTransform(702.8,196.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// left_eyelash_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AgUAAIAEAAIAUACQANAAAEgD");
	this.shape_7.setTransform(721.625,200.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// left_eyelash_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgSAEIAJAAIAQgDIAMgE");
	this.shape_8.setTransform(721.075,198.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// left_eyelash_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgMAIIAIgCIAIgGIAJgH");
	this.shape_9.setTransform(719.575,197.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// left_eye_pupil
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAAgDIAAAH");
	this.shape_10.setTransform(716.8,201.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// right_eye_pupil
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AAAgCIAAAF");
	this.shape_11.setTransform(704.575,200.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// left_eye
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAOAVQgGAJgIAAQgHAAgGgJQgFgIAAgNQAAgMAFgJQAGgIAHAAQAIAAAGAIQAGAJAAAMQAAANgGAIg");
	this.shape_12.setTransform(717.55,201.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AgNAVQgFgJgBgMQABgLAFgJQAGgJAHAAQAIAAAGAJQAFAJAAALQAAAMgFAJQgGAJgIAAQgHAAgGgJg");
	this.shape_13.setTransform(717.55,201.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// right_eye
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAOAVQgGAJgIAAQgHAAgGgJQgGgIAAgNQAAgMAGgIQAGgJAHAAQAIAAAGAJQAGAIAAAMQAAANgGAIg");
	this.shape_14.setTransform(704,200.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AgNAVQgGgJABgMQgBgLAGgJQAGgJAHAAQAIAAAFAJQAHAJAAALQAAAMgHAJQgFAJgIAAQgHAAgGgJg");
	this.shape_15.setTransform(704,200.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// right_nostril
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AABADIgBgDIAAgC");
	this.shape_16.setTransform(709.9,208.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// left_protrusion_line_2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AgVBiIArjD");
	this.shape_17.setTransform(727.825,182.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// left_protrusion_line_1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AgaB/IA1j9");
	this.shape_18.setTransform(724.875,182.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	// left_protrusion
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AgkCdIgiAAQgFhSAMhQQAYihBVALQAaAFAAAkQABAqgeCEIgRAIQgWAOgLAPQgTAXgKAlQAAhJAKhLQAViWAzgO");
	this.shape_19.setTransform(722.9531,185.3929);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000099").s().p("AgkCdQAAhJAKhLQAViWAzgOQAaAFAAAkQABAqgeCEIgRAIQgWAOgLAPQgTAXgKAlIAAAAgAhGCdQgFhSAMhQQAYihBVALQgzAOgVCWQgKBLAABJgAAuibIAAAAg");
	this.shape_20.setTransform(722.9531,185.3929);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// right_protrusion_line_1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAZB2Igxjr");
	this.shape_21.setTransform(696.125,181.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// right_protrusion
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AhHh1IgBAFQgHA8A0BtIgsiuQAFglAVAAQBFgCAgCbQAQBNACBNIggADQgIgtgegeQgJgKgMgIIgKgGAgtiaQAuAdAZCPQANBIADBC");
	this.shape_22.setTransform(698.2088,185.5493);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000099").s().p("AAqCcQgDhCgNhIQgZiPgugdQAuAdAZCPQANBIADBCQgIgtgegeQgJgKgMgIIgKgGIgsiuIAsCuQg0htAHg8IABgFQAFglAVAAQBFgCAgCbQAQBNACBNIggADIAAAAg");
	this.shape_23.setTransform(698.2088,185.5493);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).wait(1));

	// left_nostril
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AgDAFIAHgJ");
	this.shape_24.setTransform(712.275,208.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// left_gill
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AgqhUIAJAuIB5g8IhSBSIAlAMIggARIAxBCIhmggIgLAUQgPAWgTAKQAEg9AJgtQANg9ATgQg");
	this.shape_25.setTransform(736.775,206.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9900").s().p("AhKgHQANg9ATgQIAJAuIB5g8IhSBSIAlAMIggARIAxBCIhmggIgLAUQgPAWgTAKQAEg9AJgtg");
	this.shape_26.setTransform(736.775,206.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// right_gill
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AA8A4Ih4AgIA/hOIghgLIAagUIhRhCIBvAsIAEglIAXAdQAZAuAIBXg");
	this.shape_27.setTransform(687,209.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9900").s().p("AACAKIghgLIAbgUIhShCIBwAsIADglIAYAdQAZAuAIBXIgbgaIh3Agg");
	this.shape_28.setTransform(687,209.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

	// body_underside
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AC5hXIgqAdQgVAPAEARIAXBiQARBPABA8IlHAAQgCgZAFgrQAKhVAnhUQgCgLgSgLIgkgZQgfgdgJgNQgTgfAFgvQAfAUAvAGIAdAjIAigYIAnAFIAlAdIAmggIAvgHIAgAUIARgoIAdgEQAhgIAYgRQADAlgFAYQgHAogZAWg");
	this.shape_29.setTransform(711.4426,224.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#66CCFF").s().p("AigDTQgCgZAFgrQAKhVAnhUQgCgLgSgLIgkgZQgfgdgJgNQgTgfAFgvQAfAUAvAGIAdAjIAigYIAnAFIAlAdIAmggIAvgHIAgAUIARgoIAdgEQAhgIAYgRQADAlgFAYQgHAogZAWIgqAdQgVAPAEARIAXBiQARBPABA8g");
	this.shape_30.setTransform(711.4426,224.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// body
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AAJkcQCNAAAuA/QAVAdAFBSQAEBGg4AnQgaAPgJAHQgOAMAFANQAnAUAZAgQAyBBAJB6InxAAQAEguATg1QAmhqBPgiQAAgIgSgMQgZgQgOgKQg4gsADg9QAEhgAeggQAugzCTAAg");
	this.shape_31.setTransform(711.325,216.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0066FF").s().p("Aj4EdQAEguATg1QAmhqBPgiQAAgIgSgMQgZgQgOgKQg4gsADg9QAEhgAeggQAugzCTAAQCNAAAuA/QAVAdAFBSQAEBGg4AnQgaAPgJAHQgOAMAFANQAnAUAZAgQAyBBAJB6g");
	this.shape_32.setTransform(711.325,216.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// nail
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AAmAAQAAAQgMAKQgLALgPAAQgPAAgLgLQgLgKAAgQQAAgOALgLQALgLAPAAQAPAAALALQAMALAAAOg");
	this.shape_33.setTransform(711.45,108.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F6164").s().p("AgZAaQgMgKAAgQQAAgOAMgLQAKgLAPAAQAQAAAKALQAMALAAAOQAAAQgMAKQgKALgQAAQgPAAgKgLg");
	this.shape_34.setTransform(711.45,108.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// string_idn
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AiaBoICjjQICSDQ");
	this.shape_35.setTransform(710.525,118.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// photo_bkg
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AlQniIKgAAIAAPFIqgAAg");
	this.shape_36.setTransform(711.95,197);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#008D39").s().p("AlPHjIAAvEIKfAAIAAPEg");
	this.shape_37.setTransform(711.95,197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// photo_frame
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AnpqiIPTAAIAAVFIvTAAg");
	this.shape_38.setTransform(711.225,195.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C48A59").s().p("AnpKjIAA1FIPTAAIAAVFg");
	this.shape_39.setTransform(711.225,195.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	// chair
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("ACWoYIAAI5ImFAAIAAH4IBaAAIAAmOIErAAIAAGOIBaAAIAAwxg");
	this.shape_40.setTransform(536.075,419.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A66B42").s().p("ACWIZIAAmOIkrAAIAAGOIhaAAIAAn4IGFAAIAAo5IBaAAIAAQxg");
	this.shape_41.setTransform(536.075,419.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	// wall
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1,3,true).p("EA+gAg0Mh8/AAAMAAAhBnMB8/AAAg");
	this.shape_42.setTransform(400,210);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF7FB7").s().p("Eg+fAg0MAAAhBnMB8/AAAMAAABBng");
	this.shape_43.setTransform(400,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42}]}).wait(1));

	// floor
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("EA+ggODMh8/AAAIAAcHMB8/AAAg");
	this.shape_44.setTransform(400,510);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C48A59").s().p("Eg+fAOEIAA8HMB8/AAAIAAcHg");
	this.shape_45.setTransform(400,510);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,802,602);


(lib.billy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhcgUIAQAMQAUAOAVAHQBEAXA8gu");
	this.shape.setTransform(560.425,422.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag9A6QAMg2AVg9QAoh8AsgoQA2gwAdANQAeAOACBLQgnAAgxAeQhgA8gwCXIgBAQAg9A6IAAAQAg8C2IgCgVIgCgaAg8C2IhuAAIAIgCQALgEAJgLQAfghAJhVIApALACrinQADBtg1DkQgRA7gyAXQg/Afgzhl");
	this.shape_1.setTransform(557.583,404.1081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("Ag8C2IgCgVIgCgaIACAaIACAVIhuAAIAIgCQALgEAJgLQAfghAJhVIApALQAMg2AVg9QAoh8AsgoQA2gwAdANQAeAOACBLIgBAAIAAAAIgBAAQgmABgwAdQhgA8gwCXIAAgQIAAAQQAwiXBgg8QAwgdAmgBIABAAIAAAAIABAAQADBtg1DkQgRA7gyAXQgPAIgOAAQguAAgnhOgAg+BaIABgQgAg9BKg");
	this.shape_2.setTransform(557.583,404.1081);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAugrIgrACQgrAJgFAjQAEBLAsg8QAIgMADABQAIAAALAcIAJg2g");
	this.shape_3.setTransform(505.975,395.3411);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AgtADQAFgjArgJIArgCIgEAYIgJA2QgLgcgIAAQgDgBgIAMQgTAagMAAQgPAAgCgpg");
	this.shape_4.setTransform(505.975,395.3411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AglhqQg6A3gVCCIDfAdQALg5gBg7QgBhBgSgi");
	this.shape_5.setTransform(536.529,385.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ah0BcQAViDA6g3IAGABIAXgNQAUgOAaAAQAeAAAJAOQAKANAFgBIAGgBQASAiABBAQABA9gLA4g");
	this.shape_6.setTransform(536.529,384.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer_5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AjiASQgiAGAKA5QAEAsAmAZQBLAwDLgCQBGAAAkgTQBJglAFhyIgBiHQgMhjg6APQgeAGgeAkQg9BHgECTIisADQgDgQgGgJQgNgSgRAkQgIAQgPAAQgSgBABglQABgKgLgIQgLgHgMACg");
	this.shape_7.setTransform(520.8451,392.1074);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AjQCWQgmgZgEgsQgKg5AigGQAMgCALAHQALAIgBAKQgBAlASABQAPAAAIgQQARgkANASQAGAJADAQICsgDQAEiTA9hHQAegkAegGQA6gPAMBjIABCHQgFByhJAlQgkAThGAAIgUAAQi7AAhHgug");
	this.shape_8.setTransform(520.8451,392.1074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer_6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AirAhIFOhbIAHAFQAHAJACATQACASi0AiIi0Agg");
	this.shape_9.setTransform(531.7511,367.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Aiwg/QgWBugMCJICOAFQCUAOCCAkQgCkWgEhJQgGh2gTgIIlPBcg");
	this.shape_10.setTransform(530.2,385.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhEC9IiOgFQAMiJAWhuIAUhTIFPhcQATAIAGB2QAEBJACEWQiCgkiUgOg");
	this.shape_11.setTransform(530.2,385.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Layer_8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AADAdQgKACgFgHQgJgOAjgn");
	this.shape_12.setTransform(494.51,470.8132);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_9
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AAAFTIAAql");
	this.shape_13.setTransform(533.825,279.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_10
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAKFTIgTqk");
	this.shape_14.setTransform(526.225,280.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer_11
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AhxgZIgKBRIBQgFIA8AfIAWhGIBVg3IhZgm");
	this.shape_15.setTransform(536.825,344.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AgrAzIhQAFIAKhRQAggmA+gNIA2gFIBZAmIhVA3IgWBGg");
	this.shape_16.setTransform(536.825,344.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer_12
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("ABPhCQgYgLgyAEQgyAEgbAMQglARAAAgQABAlAYAUQAaAWA6AEIAQAAQAVgCARgGQA3gUAAg5QACgrgggNg");
	this.shape_17.setTransform(534.0058,340.9448);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AhUAxQgYgUgBglQAAggAlgRQAbgMAygEQAygEAYALQAgANgCArQAAA5g3AUQgRAGgVACIgQAAQg6gEgagWg");
	this.shape_18.setTransform(534.0058,340.9448);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Layer_13
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AgBACIAAgDIADAAIgBACg");
	this.shape_19.setTransform(498.025,345.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	// Layer_14
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AgKgYQgLALAAAgQAIALALAAQAJAAAOgJQABgOgFgQQgHgVgKACQgFgBgFAFg");
	this.shape_20.setTransform(504.5523,333.1423);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVATQAAggALgLQAFgFAFABQAKgCAHAVQAFAQgBAOQgOAJgJAAQgLAAgIgLg");
	this.shape_21.setTransform(504.5523,333.1423);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// Layer_15
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AAPghQAHAOAAATQAAAVgHAOQgGAOgJAAQgIAAgHgOQgGgOAAgVQAAgTAGgOQAHgPAIAAQAJAAAGAPg");
	this.shape_22.setTransform(504.525,335.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAjQgGgPAAgUQAAgTAGgPQAHgOAIAAQAJAAAGAOQAHAPAAATQAAAUgHAPQgGAOgJAAQgIAAgHgOg");
	this.shape_23.setTransform(504.525,335.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).wait(1));

	// Layer_16
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AC1jwQgQBJg1BNQAZBNALBIQARBpADChQiegVhDAFQAGhPAPhcQAWiQAghPIgggDQgegIgegRQhVgxgeheIAlAEQAvAEAwgDQCWgIBhhBIgCAiQgCAbgFAXg");
	this.shape_24.setTransform(514.95,373.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CCFF").s().p("Ag5E1QAGhPAPhcQAWiQAfhPIgfgDQgdgIgegRQhWgxgeheIAlAEQAwAEAvgDQCWgIBhhBIgCAiQgCAbgFAXQgPBJg2BNQAZBNAMBIQARBpACChQiegVhDAFg");
	this.shape_25.setTransform(514.95,373.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	// Layer_17
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AgXnBQg5jCgPimQgdlFCzgFQCFgLAaCxQAZCphJFbIAbAMQAiASAcAWQBZBIACBjQAAAygOArQgZBPhGBWIAKAJQAGAMAEAtQAMB7AAGeImIAAIgCHYQgHAqgbAAIibAAQgPAAgHgOQgOgeAqhKQgLgogLhGQgRhqADhXQAJkMC3gFQAMhtAJg8QAQhpAnh5QhCAAhGg8QhMhCAAhRQAAhlA7hQQBIhhCGgQg");
	this.shape_26.setTransform(524.4336,359.6455);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0099FF").s().p("Ak6R1QgPAAgHgOQgOgeAqhKQgLgogLhGQgRhqADhXQAJkMC3gFQAMhtAJg8QAQhpAnh5QhCAAhGg8QhMhCAAhRQAAhlA7hQQBIhhCGgQQg5jCgPimQgdlFCzgFQCFgLAaCxQAZCphJFbIAbAMQAiASAcAWQBZBIACBjQAAAygOArQgZBPhGBWIAKAJQAGAMAEAtQAMB7AAGeImIAAIgCHYQgHAqgbAAg");
	this.shape_27.setTransform(524.4336,359.6455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(488.9,244.6,86.80000000000007,230.20000000000002);


(lib.airplane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// airplane
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AthBKMArAAAfIhaiBIBaigMgrPAALIhXCCIjMgUImjgXQiqgChNAyIAABnIgxgqQAOAaAjAQQBdAqD1gVIA5AqQgQAFAAAQQAAAHAGASQAGAQAOgHIANgJIBmgbIhEhKIgmgqIiUgBIBIA4Av+i3IAuAMIgeB7Ig/gFgAvGgkIhnAFIgBAbIBuAAIAVAAIAAghIgbABIgBgHAu/gBIgBgDAu/gBIBeBLAtwitIAPD3A2iCAIAbAVIgEAZA2HCVIBigCA1pBJQCIgRCdgeICFgbA8tgmQgdASgNAXQgGAMgBAIQgBgJAFgMQALgYAigQgA8RAGIBIgEIAAhLIhZAdg");
	this.shape.setTransform(188.7839,18.521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgOASQgGgSAAgHQAAgPAPgFIAaAUIgDAYIgNAKQgFABgCAAQgIAAgEgKg");
	this.shape_1.setTransform(45.025,34.196);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgsgKIBYgdIAABLIhHAEg");
	this.shape_2.setTransform(10.5,15.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmTALQAAgJAHgLQANgXAdgTIAABngAF9gFIAAgYIAXAAIAAAYgAFZgFIAAgYIAXAAIAAAYgAE0gFIAAgYIAXAAIAAAYgAEIgFIAAgYIAXAAIAAAYgADggFIAAgYIAYAAIAAAYgAC4gFIAAgYIAXAAIAAAYgACRgFIAAgYIAXAAIAAAYgABrgFIAAgYIAYAAIAAAYgABEgFIAAgYIAYAAIAAAYgAAegFIAAgYIAXAAIAAAYgAgKgFIAAgYIAXAAIAAAYgAg0gFIAAgYIAXAAIAAAYgAhdgFIAAgYIAYAAIAAAYgAiJgFIAAgYIAYAAIAAAYgAixgFIAAgYIAXAAIAAAYgAjhgFIAAgYIAXAAIAAAYg");
	this.shape_3.setTransform(40.5,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A2gCaIgbgUIg5grQj1AWhcgqIAAhoQBMgxCqACIGkAXIDLAUIABAHIhnAFIAAAaIBtAAIhtAAIAAgaIBngFIAbgCIAAAhIgVAAIABACIiFAcQicAfiIARIgngqIiUgBIBIA3IhIg3ICUABIAnAqIBDBKIhiABIBigBIhmAbgAxmAMIAYAAIAAgWIgYAAgAyKAMIAYAAIAAgWIgYAAgAyvAMIAYAAIAAgWIgYAAgAzbAMIAYAAIAAgWIgYAAgA0CAMIAXAAIAAgWIgXAAgA0rAMIAYAAIAAgWIgYAAgA1SAMIAYAAIAAgWIgYAAgA13AMIAYAAIAAgWIgYAAgA2eAMIAXAAIAAgWIgXAAgA3FAMIAYAAIAAgWIgYAAgA3tAMIAXAAIAAgWIgXAAgA4YAMIAYAAIAAgWIgYAAgA5AAMIAXAAIAAgWIgXAAgA5sAMIAXAAIAAgWIgXAAgA6VAMIAYAAIAAgWIgYAAgA7EAMIAXAAIAAgWIgXAAgA87gmIARAyIBIgEIAAhMgA0+CZgAt6BQIgPj3MArPgAMIhaChIBaCAgAvfgegAxFgvIAuiDIAuANIgdB7g");
	this.shape_4.setTransform(191.25,17.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.airplane, new cjs.Rectangle(-0.9,-1,379.4,39.1), null);


(lib.spanish_button = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Español", "25px 'Euphemia UCAS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(59,11);

	this.instance = new lib.btn();
	this.instance.setTransform(59,21.5,1,1,0,0,0,59,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spanish_button, new cjs.Rectangle(-1,-1,120,47), null);


(lib.french_button = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("French", "25px 'Euphemia UCAS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(59,11);

	this.instance = new lib.btn();
	this.instance.setTransform(59,21.5,1,1,0,0,0,59,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.french_button, new cjs.Rectangle(-1,-1,120,47), null);


(lib.english_button = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("English", "25px 'Euphemia UCAS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(59,10);

	this.en_btn = new lib.btn();
	this.en_btn.name = "en_btn";
	this.en_btn.setTransform(59,21.5,1,1,0,0,0,59,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.en_btn},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.english_button, new cjs.Rectangle(-1,-1,120,46), null);


// stage content:
(lib.dynamic_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {loop:0,endloop:45,home:54};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		//this.banner_txt.text = "Your movie will start in 5.";
		
		this.en_btn.addEventListener("click", engMouseClickHandler);
		function engMouseClickHandler() {
			exportRoot.banner_txt.text = "Your movie will start in 5.";
		}
		
		this.es_btn.addEventListener("click", espMouseClickHandler);
		function espMouseClickHandler() {
			exportRoot.banner_txt.text = "Tu película comenzará en 5.";
		}
		
		this.fr_btn.addEventListener("click", fraMouseClickHandler);
		function fraMouseClickHandler() {
			exportRoot.banner_txt.text = "Votre film commencera dans 5.";
		}
		
		this.restart_btn.addEventListener("click", resMouseClickHander);
		function resMouseClickHander() {
			exportRoot.gotoAndPlay("loop");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(65));

	// restart_button
	this.restart_btn = new lib.restart_btn();
	this.restart_btn.name = "restart_btn";
	this.restart_btn.setTransform(745.5,585,1,1,0,0,0,47,11.9);

	this.timeline.addTween(cjs.Tween.get(this.restart_btn).wait(65));

	// french_button
	this.fr_btn = new lib.french_button();
	this.fr_btn.name = "fr_btn";
	this.fr_btn.setTransform(74,156.5,1,1,0,0,0,59,21.5);

	this.timeline.addTween(cjs.Tween.get(this.fr_btn).wait(65));

	// spanish_button
	this.es_btn = new lib.spanish_button();
	this.es_btn.name = "es_btn";
	this.es_btn.setTransform(74,96.5,1,1,0,0,0,59,21.5);

	this.timeline.addTween(cjs.Tween.get(this.es_btn).wait(65));

	// english_button
	this.en_btn = new lib.english_button();
	this.en_btn.name = "en_btn";
	this.en_btn.setTransform(74,39,1,1,0,0,0,59,21.5);

	this.timeline.addTween(cjs.Tween.get(this.en_btn).wait(65));

	// billy
	this.instance = new lib.billy("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65));

	// curtain
	this.instance_1 = new lib.curtain("synched",0);
	this.instance_1.setTransform(30.65,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

	// airplane_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1AWvMAAAgtdMAqBAAAMAAAAtdg");
	mask.setTransform(193.45,196.5);

	// dynamic_text
	this.banner_txt = new cjs.Text("", "15px 'Euphemia UCAS'");
	this.banner_txt.name = "banner_txt";
	this.banner_txt.textAlign = "center";
	this.banner_txt.lineHeight = 22;
	this.banner_txt.lineWidth = 334;
	this.banner_txt.parent = this;
	this.banner_txt.setTransform(603.15,175.2);

	var maskedShapeInstanceList = [this.banner_txt];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.banner_txt).wait(1).to({x:586.15},0).wait(1).to({x:570.15},0).wait(1).to({x:554.15},0).wait(1).to({x:538.15},0).wait(1).to({x:522.15},0).wait(1).to({x:505.15},0).wait(1).to({x:489.15},0).wait(1).to({x:473.15},0).wait(1).to({x:457.15},0).wait(1).to({x:441.15},0).wait(1).to({x:425.15},0).wait(1).to({x:409.15},0).wait(1).to({x:393.15},0).wait(1).to({x:377.15},0).wait(1).to({x:361.15},0).wait(1).to({x:344.15},0).wait(1).to({x:328.15},0).wait(1).to({x:312.15},0).wait(1).to({x:296.15},0).wait(1).to({x:280.15},0).wait(1).to({x:264.15},0).wait(1).to({x:247.15},0).wait(1).to({x:231.15},0).wait(1).to({x:215.15},0).wait(1).to({x:199.15},0).wait(1).to({x:183.15},0).wait(1).to({x:166.15},0).wait(1).to({x:151.15},0).wait(1).to({x:134.15},0).wait(1).to({x:118.15},0).wait(1).to({x:102.15},0).wait(1).to({x:86.15},0).wait(1).to({x:70.15},0).wait(1).to({x:54.15},0).wait(1).to({x:38.15},0).wait(1).to({x:22.15},0).wait(1).to({x:6.15},0).wait(1).to({x:-9.85},0).wait(1).to({x:-26.85},0).wait(1).to({x:-42.85},0).wait(1).to({x:-58.85},0).wait(1).to({x:-74.85},0).wait(1).to({x:-90.85},0).wait(1).to({x:-106.85},0).wait(21));

	// airplane
	this.airplane_mc = new lib.airplane();
	this.airplane_mc.name = "airplane_mc";
	this.airplane_mc.setTransform(301.7,167.7,1.2973,1.2973);

	var maskedShapeInstanceList = [this.airplane_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.airplane_mc).wait(1).to({x:285.6},0).wait(1).to({x:269.45},0).wait(1).to({x:253.35},0).wait(1).to({x:237.2},0).wait(1).to({x:221.1},0).wait(1).to({x:204.95},0).wait(1).to({x:188.85},0).wait(1).to({x:172.7},0).wait(1).to({x:156.55},0).wait(1).to({x:140.45},0).wait(1).to({x:124.3},0).wait(1).to({x:108.2},0).wait(1).to({x:92.05},0).wait(1).to({x:75.95},0).wait(1).to({x:59.8},0).wait(1).to({x:43.65},0).wait(1).to({x:27.55},0).wait(1).to({x:11.4},0).wait(1).to({x:-4.7},0).wait(1).to({x:-20.85},0).wait(1).to({x:-36.95},0).wait(1).to({x:-53.1},0).wait(1).to({x:-69.25},0).wait(1).to({x:-85.35},0).wait(1).to({x:-101.5},0).wait(1).to({x:-117.6},0).wait(1).to({x:-133.75},0).wait(1).to({x:-149.85},0).wait(1).to({x:-166},0).wait(1).to({x:-182.15},0).wait(1).to({x:-198.25},0).wait(1).to({x:-214.4},0).wait(1).to({x:-230.5},0).wait(1).to({x:-246.65},0).wait(1).to({x:-262.75},0).wait(1).to({x:-278.9},0).wait(1).to({x:-295.05},0).wait(1).to({x:-311.15},0).wait(1).to({x:-327.3},0).wait(1).to({x:-343.4},0).wait(1).to({x:-359.55},0).wait(1).to({x:-375.65},0).wait(1).to({x:-391.8},0).wait(1).to({x:-407.95},0).wait(21));

	// window
	this.instance_2 = new lib.window("synched",0);
	this.instance_2.setTransform(194.05,197,1,1,0,0,0,152.7,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65));

	// background
	this.instance_3 = new lib.bkg("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(399,299,402,302);
// library properties:
lib.properties = {
	id: '3B551D9EE9794076B3100571E3565261',
	width: 800,
	height: 600,
	fps: 12,
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
an.compositions['3B551D9EE9794076B3100571E3565261'] = {
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