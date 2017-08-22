// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };
  
  window.plugins.OneSignal
    .startInit("48ca0537-8221-40f6-a2be-c184b577db73")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

  // Call syncHashedEmail anywhere in your app if you have the user's email.
  // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);

/**
 * [[Description]]
 */
//function dailyMessages()
//{
//  $.ajax({
//    type: 'POST',
//    url: 'ajax.php?cmd=1',
//    error: function () {
//
//    },
//    dataType: 'json',
//    success: function (response) {
//      if( response.message!="false"){
//        response.
//      }
//
//    },
//  });
//}