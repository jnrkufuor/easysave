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
    $(".login-panel").fadeOut();
    $(".sign-fa").removeClass("fa-chevron-up");
    $(".sign-fa").addClass("fa-chevron-down");
});

$(".signup-panel-hide").click(function(){
   $(".signup-panel").slideToggle();
    $(".login-panel").slideToggle();
    $(".sign-fa").removeClass("fa-chevron-down");
    $(".sign-fa").addClass("fa-chevron-up");
});