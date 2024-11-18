var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerText = video.volume * 100 + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate -= 0.1;
	console.log("New speed is " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate += 0.1;
	console.log("New speed is " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current location is " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute Video");
		video.muted = false;
		this.innerText = "Mute";
	} else {
		console.log("Mute Video");
		video.muted = true;
		this.innerText = "Unmute";
	}
});
document.querySelector("#slider").addEventListener("input", function() {
	console.log("Change Volume");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerText = video.volume * 100 + "%";
});
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Old School");
	video.classList.remove("oldSchool");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

