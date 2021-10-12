
////////////AADDDDDD BORDER//////////
var navli1 = document.getElementById('li1'), navli2 = document.getElementById('li2'), navli3 = document.getElementById('li3'),
    navli4 = document.getElementById('li4');
var navdiv1 = document.querySelector('.header'),navdiv2 = document.querySelector('.sub-main'),navdiv3 = document.querySelector('.trd-main'),
     navdiv4 = document.querySelector('.sec-main');
var navdiv5 = document.querySelector('.footer');
var navli5 = document.getElementById('li5');
///////////////////////////////////////////////////////////////////////


     /////////////////L I N K   NA V B O  R D E R J////////////////////////////////////
function navlink(e) {
	var target, elParent, elGrand;
	target = e.target;
	elParent = target.parentNode;
	elGrand = elParent.parentNode;
	elParent.className = 'border';
}
function linkbor() {
	navli1.addEventListener('click',function(e) {
		navlink(e);
	},false);
	navli2.addEventListener('click',function(e) {
		navlink(e);
	},false);
	navli3.addEventListener('click',function(e) {
		navlink(e);
	},false);
	navli4.addEventListener('click',function(e) {
		navlink(e);
	},false);
	navli5.addEventListener('click',function(e) {
		navlink(e);
	},false);
}
window.addEventListener('load',linkbor,false);
//remove
function remnavlinkB(e) {
	var target, elParent, elGrand; 
	target = e.target;
	elParent = target.parentNode;
	elGrand = elParent.parentNode;
	elParent.className = '';
}
function navlinkrem() {
	var ellist = document.getElementById('list');
	ellist.addEventListener('mouseout',function(e) {
		remnavlinkB(e)
	},false);
}
window.addEventListener('load',navlinkrem,false);


///////////  NAV B O R D E R  M O U S E  H O V E R  /////////////
function boradd(navli) {
	navli.className = 'border';
}

function addbor(navdiv, linav) {
	navdiv.addEventListener('mouseover', function() {
		boradd(linav);
	}, false);
}
///////////////////  R E MOVE NAV BORDR/////
function navrem() {
	var lirem = document.querySelector('.border');
	lirem.className = '';
}

function remnav(divrem) {
	divrem.addEventListener('mouseout', navrem, false);
}
//////////  T  O  P  //////
function top1(e) {
    var top2 = document.getElementById('top');
    if(top2.className == 'top')
    top2.className = 'top appear-top';
}
function app_top() {
	var main = document.querySelector('.main');
	main.addEventListener('mouseover',function(e) {
		top1(e);
	},false);
}


//////////////////// T H I R D   M A I N   H O V E R   E F F E C T
var trd_1, trd_2, trd_3, read1, read2, read3;
function third1() {
	trd_1 = document.getElementById('trd-1');
	read1 = document.getElementById('read1');
	trd_1.removeAttribute('class');
	trd_1.className = 'trd-hover';
	read1.removeAttribute('class');
	read1.className = 'read-hover';
}
function trd1() {
	trd_1 = document.querySelector('.trd-1');
	trd_1.addEventListener('mouseover', third1,false);
}
window.addEventListener('load',trd1,false);

function third2() {
	trd_2 = document.getElementById('trd-2');
	read2 = document.getElementById('read2');
	trd_2.removeAttribute('class');
	trd_2.className = 'trd-hover';
	read2.removeAttribute('class');
	read2.className = 'read-hover';
}
function trd2() {
	trd_2 = document.querySelector('.trd-2');
	trd_2.addEventListener('mouseover', third2,false);
}
window.addEventListener('load',trd2,false);

function third3() {
	trd_3 = document.getElementById('trd-3');
	read3 = document.getElementById('read3');
	trd_3.removeAttribute('class');
	trd_3.className = 'trd-hover';
	read3.removeAttribute('class');
	read3.className = 'read-hover';
}

function trd3() {
	trd_3 = document.querySelector('.trd-3');
	trd_3.addEventListener('mouseover', third3,false);
}
window.addEventListener('load',trd3,false);

var sx = document.querySelector('.d1-head'); //to hold screenX
var sy = document.querySelector('.d2-head'); //to hold sc reenY
var px = document.querySelector('.d3-head'); //to hold pageX
var py = document.querySelector ('.d4-head'); //to hold pageY
var ex = document.querySelector('.d5-head'); //to hold cl ientX
var cy = document.querySelector('.d6-head'); //to hold clientY



function showPosition(event) {// Declare function
sx.value = event.screenX// Update element with screenX
sy.value = event.screenY; // Update element with screenY
px.value = event.pageX; // Update element with pageX
py.value = event.pageY; // Update element with pageY
ex.value = event.clientX; // Update element wi t h cli entX
cy.value = event.clientY; // Update element wi th cli entY
}
function position() {
	var head = document.querySelector('.sec-d1');
	head.addEventListener('mouseover',showPosition,false);
}
window.addEventListener('load',position,false);