$(document).ready(function(){

	$("#flipbook").turn({
	autoCenter: true,
		
	});
	//MOBILTOGGLE
	$("#dropbtn_mobil,#mobil").click(function(){
		$("#dropdown-content_mobil").toggleClass("hide");	
	});

	//DROPDOWNMENYN
	$("#inne").click(function(){
		$("#flipbook").turn("page", 3);	
	});

	$("#forord").click(function(){
		$("#flipbook").turn("page", 4);	
	});

	$("#inledning").click(function(){
		$("#flipbook").turn("page", 6);	
	});

	$("#robin").click(function(){
		$("#flipbook").turn("page", 8);	
	});

	$("#terra").click(function(){
		$("#flipbook").turn("page", 10);	
	});

	$("#tjanster").click(function(){
		$("#flipbook").turn("page", 12);	
	});

	$("#event").click(function(){
		$("#flipbook").turn("page", 14);	
	});

	$("#ceremonier").click(function(){
		$("#flipbook").turn("page", 16);	
	});

	$("#volva").click(function(){
		$("#flipbook").turn("page", 18);	
	});

	$("#vagvisaren").click(function(){
		$("#flipbook").turn("page", 20);	
	});

	$("#unikt").click(function(){
		$("#flipbook").turn("page", 21);	
	});

	$("#kontakter").click(function(){
		$("#flipbook").turn("page", 22);	
	});
	
	//INNEHÅLLSMENYN:
	$("#inne1").click(function(){
		$("#flipbook").turn("page", 3);	
	});

	$("#forord1").click(function(){
		$("#flipbook").turn("page", 4);	
	});

	$("#inledning1").click(function(){
		$("#flipbook").turn("page", 6);	
	});

	$("#robin1").click(function(){
		$("#flipbook").turn("page", 8);	
	});

	$("#terra1").click(function(){
		$("#flipbook").turn("page", 10);	
	});

	$("#tjanster1").click(function(){
		$("#flipbook").turn("page", 12);	
	});

	$("#event1").click(function(){
		$("#flipbook").turn("page", 14);	
	});

	$("#ceremonier1").click(function(){
		$("#flipbook").turn("page", 16);	
	});

	$("#volva1").click(function(){
		$("#flipbook").turn("page", 18);	
	});

	$("#vagvisaren1").click(function(){
		$("#flipbook").turn("page", 20);	
	});

	$("#unikt1").click(function(){
		$("#flipbook").turn("page", 21);	
	});

	$("#kontakter1").click(function(){
		$("#flipbook").turn("page", 22);	
	});


	$("#flipbook").turn("center");

	//$("#flipbook").turn("addPage", element);
	
	$("<div />", {"class": "p5"}).html("Loading...");
	$("<div />", {"class": "p6"}).html("Loading...");
	$("<div />", {"class": "p7"}).html("Loading...");
	$("<div />", {"class": "p8"}).html("Loading...");
	$("<div />", {"class": "p9"}).html("Loading...");
	$("<div />", {"class": "p10"}).html("Loading...");
	$("<div />", {"class": "p11"}).html("Loading...");
	$("<div />", {"class": "p12"}).html("Loading...");
	$("<div />", {"class": "p13"}).html("Loading...");
	$("<div />", {"class": "p14"}).html("Loading...");
	$("<div />", {"class": "p15"}).html("Loading...");
	$("<div />", {"class": "p16"}).html("Loading...");
	$("<div />", {"class": "p17"}).html("Loading...");
	$("<div />", {"class": "p18"}).html("Loading...");
	$("<div />", {"class": "p19"}).html("Loading...");
	$("<div />", {"class": "p20"}).html("Loading...");
	$("<div />", {"class": "p21"}).html("Loading...");
	






});