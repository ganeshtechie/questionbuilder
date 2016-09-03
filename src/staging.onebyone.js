/*
	"OneByOne" - This plugin makes the assessment to show one question at once. It also puts a navigation button to move back and forth. 
*/

(function(){
	
	"use strict";



	$.fn.oneByOne = function(){

		function showPrevious(element){

			var root = $(event.target).closest("[data-obo]");

			var nav = root.find("[data-obo-role='nav']");

			var currentNode  =  root.find("[data-obo-role='item']:visible");

			var siblings = root.find("[data-obo-role='item']");

			var poisition = siblings.index(currentNode);


			if(poisition > 0){

				// hide the current node
				currentNode.hide();

				poisition -= 1;

				//siblings.removeAttr("value");

				// show the previous node
				$(siblings.get(poisition)).show().attr("value", poisition + 1);


				// if the new position is 0, which means the first node is the active node, then hide the previous button
				if(poisition > 0){
					nav.find("[data-name='previous']").show();
				} else if(poisition === 0){
					nav.find("[data-name='previous']").hide();
				}

				if(poisition < siblings.length - 1){
					nav.find("[data-name='next']").show();
				}

			}

			console.log("next");

		}

		function showNext(event){
			event.preventDefault();

			var root = $(event.target).closest("[data-obo]");

			var nav = root.find("[data-obo-role='nav']");

			var currentNode  =  root.find("[data-obo-role='item']:visible");

			var siblings = root.find("[data-obo-role='item']");

			var poisition = siblings.index(currentNode);


			if(poisition < siblings.length - 1){

				currentNode.hide();

				poisition += 1;

				$(siblings.get(poisition)).show().attr("value", poisition + 1);

				if(poisition  === siblings.length - 1){
					$(event.target).hide();
				} else {
					$(event.target).show();
				}

				if(poisition > 0){
					nav.find("[data-name='previous']").show();
				} else if(poisition === 0){
					nav.find("[data-name='previous']").hide();
				}

			}

			console.log("next");

		}




		this.each(function(){

			var root = $(this);

			// added this element in the root, to help finding  for any child elements 
			root.attr("data-obo", "");

			root.on("click", "[data-name='next']", showNext);

			root.on("click", "[data-name='previous']", showPrevious);

			var list = root.find("[data-obo-role='list']");

			var items = list.find("[data-obo-role='item']");

			var nav = root.find("[data-obo-role='nav']");

			var btnPrevious = $("<button type='button' class='btn btn-primary' data-name='previous'>Previous</button>");
			var btnNext = $("<button type='button' data-name='next' class='btn btn-primary'>Next</button>");

			nav.append([btnPrevious, btnNext]);

			btnPrevious.hide();

			items.hide();

			// show only first item
			$(items.get(0)).show();

		});

		return this;

	};



})();