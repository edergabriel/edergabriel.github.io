
$( window ).load(function() {
  var dir = "img/";
	
	var fileextension = ".jpg";
	$.ajax({
	    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
	    url: dir,
	    success: function (data) {
	        //List all .png file names in the page
	        $(data).find("a[href*='.jpg']").each(function () {
	            var filename = this.href.replace(window.location.host, "").replace("http://", "");
	            $("body").append("<img src='img" +  filename + "' class='load'>");
	        });
	        $('.load').remove();
	        $('.loader').fadeOut();
	    },
	    error: function(
	    	) {
	    	$('.loader').fadeOut();
	    }
	});


});


	$('.controlMenu').click(function(event){
		event.preventDefault();
		if(!$('header nav').hasClass('open-menu')){
			$('header nav').removeClass('menu-full').addClass('open-menu').animate({"left": "+=271px"}, 400, "easeOutQuad");
			$('.bgShadow').fadeIn();
		} else {
			$('header nav').addClass('menu-full').removeClass('open-menu').animate({"left": "-=271px"}, 400, "easeInQuad");
			$('.bgShadow').fadeOut();
		}
	});

	$('.bgShadow').click(function(){
		$('header nav').addClass('menu-full').removeClass('open-menu').animate({"left": "-=271px"}, 400, "easeInQuad");
		$(this).fadeOut();
	});

	var orderID;

	$(".contentFeature a").click(function(e){
		e.preventDefault();

		$('.bgProjectDescription').css("display", "block");


		orderID  = $(this).data("orderid");

		createProjectDetail(orderID)
		$("body").css("overflow", "hidden");
	});

	$(".closeProject").click(function(e){
		e.preventDefault();
		$('.bgProjectDescription').css("display", "none");
		$("body").css("overflow", "auto");
	})

	$(".prevProject").click(function(){
		if (orderID > 0){
			orderID = orderID - 1;
			createProjectDetail(orderID)
		}
	})

	$(".nextProject").click(function(){
		if(orderID < qtdTotalProjects-1) {
			orderID = orderID + 1;
			createProjectDetail(orderID)
		}
	})

var qtdTotalProjects;

function createProjectDetail(orderID) {
	var portfolio = obj.portfolio[orderID];
	qtdTotalProjects = obj.portfolio.length;

	var titleSelect = portfolio.titleProject;
	var descriptionSelect = portfolio.description;
	var yearSelect = portfolio.year;
	
	$('.bgProjectDescription h2').html(titleSelect);
	$('.bgProjectDescription p').html(descriptionSelect);
	$('.detailsProject span').html(yearSelect);
	$('.imagesProject').html("");

	if (orderID == 0) {
		$(".prevProject").css("display", "none");
	} else {
		$(".prevProject").css("display", "block");
	}

	if (orderID == qtdTotalProjects-1) {
		$(".nextProject").css("display", "none");
	} else {
		$(".nextProject").css("display", "block");
	}

	for (var i=0; i< portfolio.images.length; i++){
		$(".imagesProject").append("<img src="+portfolio.images[i]+">")
	}	

	$(".descriptionProject a").addClass("hide");

	if(portfolio.links.iStock == "" && portfolio.links.googlePlay == "" && portfolio.links.appStore == ""){
		$('.links').hide();
	} else {
		$('.links').show();
		if (portfolio.links.iStock == "") {
			$('.links a.iStock').hide();
		} else {
			$('.links a.iStock').show().attr("href", portfolio.links.iStock );
		}

		if (portfolio.links.googlePlay == "") {
			$('.links a.googlePlay').hide();
		} else {
			$('.links a.googlePlay').show().attr("href", portfolio.links.googlePlay );
		}

		if (portfolio.links.appStore == "") {
			$('.links a.appStore').hide();
		} else {
			$('.links a.appStore').show().attr("href", portfolio.links.appStore );
		}
	}
}

	$( document ).ready(function() {

	    $('div.bgParallax').each(function(){
	    	var $obj = $(this);
	     
	    	$(window).scroll(function() {
	    		var yPos = -($(window).scrollTop() / $obj.data('speed')); 
	    		var bgpos = '50% '+ yPos  + 'px';
	    		console.log("bgpos: ", bgpos);
	    		$obj.css('background-position', bgpos );
	    	}); 
	    });
	   	$('div.textIntro').each(function(){
	    	var $obj = $(this);
	     
	    	$(window).scroll(function() {
	    		var yPos = -($(window).scrollTop() / $obj.data('speed')); 
	    		var bgpos = yPos  + 'px';
	    		$obj.css('top', bgpos );
	    	}); 
	    });
	});

