sessionStorage.logoutCount= 0;
sessionStorage.currentPage=".dashboard";
//CSS Animations
//Index Page 
$(".ti-power-off").click(function(){
    var options = {
        settings: {
            duration: 1000
        }
    };
    if(sessionStorage.logoutCount== 1){
        iqwerty.toast.Toast('Loggin Out...');
        sessionStorage.clear();
        setTimeout(function() {
            window.location="../index.html";
        }, 3000);
    }
    if(sessionStorage.logoutCount== 0){
        sessionStorage.logoutCount= 1;
        iqwerty.toast.Toast('Press Again to Logout',options);
    }
    setTimeout(function() {
        sessionStorage.logoutCount= 0;
    }, 10000);
});

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


//Dashboard Page
$(".info-down").click(function(){
    $(".cover").fadeIn();
    $(".modal-div").fadeIn();
    $(".modal").fadeIn(600);
});

$(".ti-share").click(function(){
    $(".info-modal-info").html("AUTOMATIC CASHOUT");
    $(".info-modal-content").html('<span class="modal-info">We can automate cash outs to your primary account.'
                                  +'Please let us know at what available balance this should occur</span>'
                                  +'<input type="number" placeholder="GHS">'
                                  +'<div class="cashout-btn btn" >Cashout</div>');
    $(".info-cover").fadeIn();
    $(".info-modal-div").fadeIn();
    $(".info-modal").fadeIn(600);
});

$(".modal-close").click(function(){
    $(".modal").fadeOut();
    $(".cover").fadeOut();
    $(".modal-div").fadeOut();
});

$(".ti-home").click(function(){
    $( ".cashout" ).hide();
    if( $( ".dashboard" ).css("display")=="none"){
        $( ".dashboard" ).fadeIn(600);
    }
    $(".ti-wallet").removeClass("active");
    $(".ti-home").addClass("active");
    sessionStorage.currentPage=".dashboard";
});

$(".ti-settings").click(function(){
    $( ".dashboard" ).hide();
    if( $( ".settings" ).css("display")=="none"){
        $(sessionStorage.currentPage).hide();
        $( ".settings" ).fadeIn(600);
    }
});

$(".ti-wallet").click(function(){
    $( ".dashboard" ).hide();
    if( $( ".cashout" ).css("display")=="none"){
        $( ".cashout" ).fadeIn(600);
    }
    $(".ti-home").removeClass("active");
    $(".ti-wallet").addClass("active");
    sessionStorage.currentPage=".cashout";
});

$(".ti-close").click(function(){
    $(".info-cover").fadeOut();
    $(".info-modal-div").fadeOut();
    $(".info-modal").fadeOut();
});

$(".ti-arrow-left").click(function(){
    $( ".settings" ).hide();
    if( $( sessionStorage.currentPage).css("display")=="none"){
        $( sessionStorage.currentPage ).fadeIn(600);
    }
});

$(".ti-plus").click(function(){
    $(".info-modal-info").html("ADD ACCOUNT");
    $(".info-modal-content").html('<span class="modal-info">Add a new account to your current ones.'
                                  +'This account is however not your primary account</span>'
                                  +'<input type="text" placeholder="Account Name">'
                                  +'<input type="number" placeholder="Account Number">'
                                  +'<select> <option value="MTN Mobile Money">MTN MM</option>'
                                  + '<option value="Vodafone Cash">Vodafone Cash</option>'
                                  + '<option value="Tigo Cash">Tigo Cash</option>'
                                  + '<option value="Airtel Money">Airtel Money</option>'
                                  +'</select>'
                                  +'<div class="cashout-btn btn" >Login</div>');
    $(".info-cover").fadeIn();
    $(".info-modal-div").fadeIn();
    $(".info-modal").fadeIn(600);
});