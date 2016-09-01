(function(){
	
	"use strict";

	// the namespace "ab" stands for AssessmentBuilder


	// I've created this object to share the state across all the jquery widgets and plugins
	$.ab = $.ab || {};


	// only the state object will be modified by all the other parts of the application
	$.ab.state = $.ab.state || {

		// title of the assessment
		title: "",

		// a description which tells about the assessment
		description: "",

		feeback_message: "",

		retake: -1,

		questions: []

	};





})();