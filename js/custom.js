$(document).ready(function() {
	// change glyphicon in sidebar
	$("[id*='collapse']").on("hide.bs.collapse", function () {
		$(this).siblings().eq(0).children().eq(0).removeClass("glyphicon-collapse-down");
		$(this).siblings().eq(0).children().eq(0).addClass("glyphicon-expand");
	});
	$("[id*='collapse']").on("show.bs.collapse", function () {
		$(this).siblings().eq(0).children().eq(0).removeClass("glyphicon-expand");
		$(this).siblings().eq(0).children().eq(0).addClass("glyphicon-collapse-down");
	});

	// add responsive image class to all images in posts
	$(".post img").addClass("img-responsive img-rounded");

	// make certain images larger than the standard picture
	var images = [
		{"alt": "accident equation",
		"width": "600px"},
		{"alt": "rope",
		"width": "400px"},
		{"alt": "clove",
		"width": "400px"},
		{"alt": "sheet",
		"width": "400px"},
		{"alt": "tarp",
		"width": "400px"},
		{"alt": "pinch",
		"width": "400px"},
		{"alt": "pulley",
		"width": "600px"},
		{"alt": "princess",
		"width": "400px"},
		{"alt": "trucker",
		"width": "400px"},
		{"alt": "bowline1234",
		"width": "400px"},
		{"alt": "bowline5678",
		"width": "400px"},
		{"alt": "butterfly1234",
		"width": "400px"},
		{"alt": "butterfly5678",
		"width": "400px"},
		{"alt": "butterflylast",
		"width": "400px"},
		{"alt": "stove parts",
		"width": "400px"},
		{"alt": "bearbag1",
		"width": "400px"},
		{"alt": "bearbag2",
		"width": "400px"},
		{"alt": "bearbag3",
		"width": "400px"},
		{"alt": "bearbag4",
		"width": "400px"},
		{"alt": "period kit",
		"width": "600px"},
		{"alt": "canoe parts",
		"width": "400px"},
		{"alt": "paddle parts",
		"width": "400px"},
		{"alt": "chart",
		"width": "400px"}
	];

	for (var i in images) {
		var alt = images[i]["alt"];
		var width = images[i]["width"];
		$(".post [alt='" + alt + "']").css("width", width);
	}
});
