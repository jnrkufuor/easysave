<?php

// Let us test the SDK

 if(isset($_REQUEST['message']))
{
    $receiver =($_REQUEST['receiver']);
    $message=($_REQUEST['message']);
}

require '../sites/Smsgh/Api.php';

$auth = new BasicAuth("whmixrtt", "icnfjuku");
// instance of ApiHost
$apiHost = new ApiHost($auth);

// instance of AccountApi
$accountApi = new AccountApi($apiHost);
// Get the account profile
// Let us try to send some message
$messagingApi = new MessagingApi($apiHost);
try {
    // Send a quick message
    $messageResponse = $messagingApi->sendQuickMessage("EasySave", $receiver, $message);


//    $mesg = new Message();
//    $mesg->setContent("I will eat the beautiful Food you have");
//    $mesg->setTo("+233244219234");
//    $mesg->setFrom("+233204567867");
//    $mesg->setRegisteredDelivery(true);

    // Let us say we want to send the message 3 days from today
//    $mesg->setTime(date('Y-m-d H:i:s', strtotime('+1 week')));
//
//    $messageResponse = $messagingApi->sendMessage($mesg);
//
//    if ($messageResponse instanceof MessageResponse) {
//        echo $messageResponse->getStatus();
//    } elseif ($messageResponse instanceof HttpResponse) {
//        echo "\nServer Response Status : " . $messageResponse->getStatus();
//    }
} catch (Exception $ex) {
    echo $ex->getTraceAsString();
}
