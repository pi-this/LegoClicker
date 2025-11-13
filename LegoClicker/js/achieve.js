var a1 = document.getElementById("ach1");
var a2 = document.getElementById("ach2");
var y1 = document.getElementById("yellow1");
var noA = document.getElementById("noAchive");
a1.style.display = 'none';
a2.style.display = 'none';

function anyA() {
	noA.style.display = 'none';
}

function ach1Show() {
	anyA();
	a1.style.display = 'block';
	y1.style.display = 'block';
}

function ach2Show() {
	anyA();
	a2.style.display = 'block';
	money = money + 0.50;
	document.getElementById('money').innerHTML = money;
}
