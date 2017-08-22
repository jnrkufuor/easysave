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

$(".signup-btn").click(function(){

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
    $(".sign-fa").removeClass("fa-chevron-up");
    $(".sign-fa").removeClass("fa-chevron-left");
    $(".sign-fa").addClass("fa-chevron-down");
});

$(".type-merchant").click(function(){
    $(".user-type-panel").hide();
    $(".signup-form").fadeIn(600);
    $(".sign-fa").removeClass("fa-chevron-down");
    $(".sign-fa").addClass("fa-chevron-left");

});

$(".type-customer").click(function(){
    $(".user-type-panel").hide();
    $(".signup-form").fadeIn(600);
    $(".sign-fa").removeClass("fa-chevron-down");
    $(".sign-fa").addClass("fa-chevron-left");

});

