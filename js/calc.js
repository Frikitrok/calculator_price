function doCalc() {
    let duration = 0;
    let price = 0;
    let checkForm1 = $('.toggle-wrap').eq(0).hasClass("toggle-active");
    let checkForm2 = $('.toggle-wrap').eq(1).hasClass("toggle-active");
    let checkForm3 = $('.toggle-wrap').eq(2).hasClass("toggle-active");
    if (checkForm1==true) {
        let hosts = $('[name=hosts]').val();
        let applications = $('[name=applications]').val();
        let services = $('[name=services]').val();
        let checkPerform = $('.toggle-wrap-pref').eq(0).hasClass("toggle-active");
        price += +hosts + +applications + +services;
        duration += +hosts + +applications + +services;
        if(checkPerform==true) {
            price *= 1.5; 
            duration *= 1.5;
        };
    };
    if (checkForm2==true) {
        let sample = $('[name=sample]').val();
        let checkPerform2 = $('.toggle-wrap-pref').eq(1).hasClass("toggle-active");
        price += +sample;
        duration += +sample;
        if(checkPerform2==true) {
            price *= 1.5; 
            duration *= 1.5;
        };
    };
    if (checkForm3==true) {
        price *= 2;
        duration *= 2;
    };
    $('[name=duration]').val(duration/10);
    $('[name=price]').val(price);
};


$(".toggle-wrap").click(function() {
	if($(this).hasClass("toggle-active")) {
		$(this).removeClass("toggle-active");
        let s = $(this).parent().parent(); //data( "name" );
        $(s).addClass("tog-form-inactive");
        $(s).find('input').prop('disabled', true);
        $(s).find('.toggle-wrap-pref').addClass('pref-disabled');
    }
    else {
        $(this).addClass("toggle-active");
        let s =  $(this).parent().parent();
        $(s).removeClass("tog-form-inactive");
        $(s).find('input').prop('disabled', false);
        $(s).find('.toggle-wrap-pref').removeClass('pref-disabled');
    }
});

$('.toggle-wrap-pref').click(function() {
    if($(this).hasClass("toggle-active")) {
		$(this).removeClass("toggle-active");
    } else {
        $(this).addClass("toggle-active");
    }
});

doCalc();
document.addEventListener('input', function() {
    doCalc();
});

$('a').click(function(e) {
    e.preventDefault();
    doCalc();
});