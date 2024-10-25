document.oncontextmenu = () => {
	alert("Don't right click")
	return false
}

document.onkeydown = e => {
	if (e.key == "F12") {
	alert("Don't try to inspect element")
	return false
}
	if(e.ctrlKey && e.key == "u"){
		alert("Don't try to view page sources")
		return false
	}
	if (e.ctrlKey && e.key == "c"){
		alert("Don't try to copy page element")
		return false
	}
	if(e.ctrlKey && e.key == "v"){
		alert("Don't try to paste anything to page")
		return false
	}
}


const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const mp4 = document.querySelector(".mp4");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I Love You See you on Christmas";
	onload = () => {
		const c = setTimeout(() => {
		  document.body.classList.remove("not-loaded");
		  clearTimeout(c);
		}, 1000);
	  };
});

noBtn.addEventListener('click', () => {
	question.innerHTML = "I Love You See you on Christmas";
});