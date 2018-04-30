
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['about', 'currencies','contact','markets','footer'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['About', 'Currencies','Contact','Markets','Footer'],
		showActiveTooltip: false,
		scrollOverflow: true,
		dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
		slidesNavigation: false,
		slidesNavPosition: 'bottom',
		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);

			//using index
				if(index == 1){
					$('.content-index-one').addClass('animated fadeInDown');
					setTimeout(function(){ 
						$('.img-index-one').addClass('animated fadeInUp');
					}, 500);
				}
				if(index == 2){
					$('.content-index-two').addClass('animated fadeInRight');
					setTimeout(function(){ 
						$('.img-index-two').addClass('animated fadeInLeft');
					}, 500);
				}
				if(index == 3){
					$('.content-index-three').addClass('animated fadeInLeft');
					setTimeout(function(){ 
						$('.img-index-three').addClass('animated fadeInRight');
					}, 500);
				}
				if(index == 4){
					setTimeout(function(){ 
						$('.item-one').addClass('animated fadeInDown');
					}, 100);
					setTimeout(function(){ 
						$('.item-two').addClass('animated fadeInDown');
					}, 400);
					setTimeout(function(){ 
						$('.item-three').addClass('animated fadeInDown');
					}, 700);
					setTimeout(function(){ 
						$('.item-four').addClass('animated fadeInDown');
					}, 1000);

				}

		},
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);
				//after leaving section 2
				if(index == 1 && direction == 'down'){
					$('.content-index-one').removeClass('animated fadeInDown');
					$('.img-index-one').removeClass('animated fadeInUp');
				}
				if(index == 2 && direction == 'down'){
					$('.content-index-two').removeClass('animated fadeInRight');
					$('.img-index-two').removeClass('animated fadeInLeft');
				}

				else if(index == 2 && direction == 'up'){
					$('.content-index-two').removeClass('animated fadeInRight');
					$('.img-index-two').removeClass('animated fadeInLeft');
				}
				if(index == 3 && direction == 'down'){
					$('.content-index-three').removeClass('animated fadeInLeft');
					$('.img-index-three').removeClass('animated fadeInRight');
				}

				else if(index == 3 && direction == 'up'){
					$('.content-index-three').removeClass('animated fadeInLeft');
					$('.img-index-three').removeClass('animated fadeInRight');
				}

				if(index == 4 && direction == 'up'){
					$('.item-one').removeClass('animated fadeInDown');
					$('.item-two').removeClass('animated fadeInDown');
					$('.item-three').removeClass('animated fadeInDown');
					$('.item-four').removeClass('animated fadeInDown');
				}
		}
	});
});
$(document).ready(function(){
    $('.sidenav').sidenav();
});
new WOW().init();
