$(document).ready(function() {

	$(".sidebar_wrap").stick_in_parent();
	$(".category_header").stick_in_parent();
	$(".slides").slidesjs({
		width: 16,
		height: 9,
		play: {
			active: true,
			effect: "slide",
			interval: 12500,
			auto: true,
			swap: false,
			pauseOnHover: true,
			restartDelay: 5000
		}
	})
});

var mobileOpened = false;

$(document).on('click','.mobile-menu-element',function(){
	MobileMenuOpenClose()
});

function MobileMenuOpenClose() {
	mobileOpened = !mobileOpened;

	if(mobileOpened == true){
		$('.mobile-menu').removeClass("closed");
	} else {
		$('.mobile-menu').addClass("closed");
	}
}
