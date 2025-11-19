var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video= this.document.querySelector("#player1")
video.autoplay = false;
video.loop= false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerText = video.volume * 100 + "%";
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("New speed:", video.playbackRate);
	video.playbackRate = video.playbackRate * 0.9;
});

document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate /= 0.9;
    console.log("New speed:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location", video.currentTime);
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("New location", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
    console.log("Mute/Unmute");
    
    if (video.muted === false) {
        video.muted = true;
        document.querySelector("#mute").innerText = "Unmute";
    } else {
        video.muted = false;
        document.querySelector("#mute").innerText = "Mute";
    }
});



document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerText = video.volume * 100 + "%";
    console.log("Volume set to", video.volume);
});
 
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});		

