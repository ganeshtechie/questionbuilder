(function(){
	
	"use strict";

	var template = window.dw.templates.staging_startpage;


	$.widget("dw.staging", {

		options: {},

		_create: function(){

			var data = {

				title: "Health Care Assessment",

				description: "Designed for everyone, everywhere. Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes. Sass and Less support Preprocessors Bootstrap ships with vanilla CSS, but its source code utilizes the two most popular CSS preprocessors, Less and Sass. Quickly get started with precompiled CSS or build on the source. Responsive across devices One framework, every device. Bootstrap easily and efficiently scales your websites and applications with a single code base, from phones to tablets to desktops with CSS media queries. Components Full of features With Bootstrap, you get extensive and beautiful documentation for common HTML elements, dozens of custom HTML and CSS components, and awesome jQuery plugins.",

				totalQuestions: 10,

				totalScore: 100,

				retakeLimit: 5

			};

			var html = template(data);

			this.element.html(html);
		}

	});

})();