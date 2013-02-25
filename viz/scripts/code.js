(function(){
	var context;
	if (typeof AudioContext !== "undefined") {
	    context = new AudioContext();
	} else if (typeof webkitAudioContext !== "undefined") {
	    context = new webkitAudioContext();
	} else {
	    throw new Error('AudioContext not supported. :(');
	}

	var request = new XMLHttpRequest();
	request.open("GET", "audio/track.mp3", true);
	request.responseType = "arraybuffer";
	
	var analyser;

	var API = {

		loadAudio: function(){
			request.send();
		},

		onReady: function(){
			console.log("Override onReady function");
		},

		onData: function(){
			console.log("Override onData function");
		}
	}

	// Our asynchronous callback
	request.onload = function() {
	    var audioData = request.response;
	    var soundSrc = createSoundSource(audioData);

		analyser = context.createAnalyser();
	    soundSrc.connect(analyser);
	    analyser.connect(context.destination);

	    soundSrc.noteOn(context.currentTime);
	    API.onReady();
	    draw();
	};

	function createSoundSource(data){
		// create a sound source
        var soundSource = context.createBufferSource();

        // The Audio Context handles creating source buffers from raw binary
        soundBuffer = context.createBuffer(data, true/* make mono */);
      
        // Add the buffered data to our object
        soundSource.buffer = soundBuffer;

        return soundSource;
	}

	function draw(){
		  // See http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		  window.requestAnimationFrame(draw);
		  // New typed array for the raw frequency data
		  freqData = new Uint8Array(analyser.frequencyBinCount);
		  // Put the raw frequency into the newly created array
		  analyser.getByteFrequencyData(freqData);

		  API.onData(freqData);
	}

	window.exerciseAPI = API;
})()