		
		
		// Buttons Redirect to a link
		document.getElementById("anim1").onclick = function () {
					location.href = "animation.html";
		};
		document.getElementById("anim2").onclick = function () {
					location.href = "animation2.html";
        };
		document.getElementById("anim3").onclick = function () {
					location.href = "animation3.html";
        };
		document.getElementById("anim4").onclick = function () {
					location.href = "animation4.html";
        }; 
		document.getElementById("anim5").onclick = function () {
					location.href = "animation5.html";
        };
		  
		// Enlarge Preview
		function enlargeSize1() {
			img = document.getElementById("prev");
			img.src="assets/gif/prev.gif";
			img.style.transform = "scale(1.5)";
			img.style.transition = "transform 0.25s ease";
		}
		function enlargeSize2() {
			img = document.getElementById("prev2");
			img.src="assets/gif/prev2.gif";
			img.style.transform = "scale(1.5)";
			img.style.transition = "transform 0.25s ease";
		}
		function enlargeSize3() {
			img = document.getElementById("prev3");
			img.src="assets/gif/prev3.gif";
			img.style.transform = "scale(1.5)";
			img.style.transition = "transform 0.25s ease";
		}
		function enlargeSize4() {
			img = document.getElementById("prev4");
			img.src="assets/gif/prev4.gif";
			img.style.transform = "scale(1.5)";
			img.style.transition = "transform 0.25s ease";
		}
		function enlargeSize5() {
			img = document.getElementById("prev5");
			img.src="assets/gif/prev5.gif";
			img.style.transform = "scale(1.5)";
			img.style.transition = "transform 0.25s ease";
		}
		function resetSize() {
			
			document.getElementById("prev").src="assets/prev.png";
			document.getElementById("prev2").src="assets/prev2.png";
			document.getElementById("prev3").src="assets/prev3.png";
			document.getElementById("prev4").src="assets/prev4.png";
			document.getElementById("prev5").src="assets/prev5.png";

			img.style.transform = "scale(1.0)";
			img.style.boxShadow= "0 10px 10px -5px";
			img.style.transition = "transform 0.25s ease";
		}



