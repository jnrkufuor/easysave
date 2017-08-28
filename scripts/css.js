//CSS Animations
$(".login-pop").click(function(){
    $(".login-panel").slideToggle();
    $(".login-pop").hide();
    $(".fa").removeClass("fa-chevron-up");
    $(".fa").addClass("fa-chevron-down");
});

$(".panel-hide").click(function(){
    $(".login-panel").slideToggle();
    $(".login-pop").fadeIn();
    $(".fa").removeClass("fa-chevron-down");
    $(".fa").addClass("fa-chevron-up");
});

$(".signpanel-btn").click(function(){
    $(".signup-panel").slideToggle();
    $(".login-panel").slideToggle();
    $(".user-type-panel").fadeIn(800);
    $(".user-type-panel").css("display","inline-block");
    $(".sign-fa").removeClass("fa-chevron-up");
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-chevron-down");
});

$(".signup-panel-hide").click(function(){
    $(".user-type-panel").fadeOut(300);
    $(".signup-panel").slideToggle();
    $(".login-panel").slideToggle();
    $(".signup-form").fadeOut(100);
    $(".verification-form").hide(); 
    $(".signup-form").hide();
    $(".sign-fa").removeClass("fa-chevron-up");
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-chevron-down");
    $(".input").val("");
});

$(".type-merchant").click(function(){
    $(".user-type-panel").hide();
    $(".signup-form").fadeIn(600);
    $(".signup-form").css("display","inline-block");
    $(".sign-fa").removeClass("fa-chevron-down");
    $(".sign-fa").addClass("fa-chevron-left");
});

$(".type-customer").click(function(){
    $(".user-type-panel").hide();
    $(".signup-form").fadeIn(600);
    $(".signup-form").css("display","inline-block");
    $(".sign-fa").removeClass("fa-chevron-down");
    $(".sign-fa").addClass("fa-chevron-left");
});

$(".back").click(function(){
    $(".signup-form").fadeIn(600);
    $(".verification-form").hide();
    $(".sign-fa").addClass("fa-chevron-left");
    $(".sign-fa").removeClass("fa-close");
}); 

$(".code-back").click(function(){
    $(".verification-form").fadeIn(600);
    $(".code-form").hide();
}); 

$(".confirm").click(function(){
    $(".code-form").fadeIn(600); 
    $(".verification-form").hide(); 
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-close");
});

$(".confirm-code ").click(function(){
    iqwerty.toast.Toast('Signing In...');
    setTimeout(function() {
        window.location="Pages/dashboard.html";
    }, 3000);
});

$(".signup-btn").click(function(){
    $(".signup-form").hide();
    $(".verification-form").fadeIn(600); 
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-close");
});

$(".login-btn").click(function(){
   iqwerty.toast.Toast('Loggin In...');
    setTimeout(function() {
        window.location="Pages/dashboard.html";
    }, 3000);
});

/* to display any information just put this snippet wherever you want some displaying to be done*/

//iqwerty.toast.Toast('Your message here');
