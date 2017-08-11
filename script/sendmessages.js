function sendMessage(receiver, message)
{
  $.ajax({
    type: 'POST',
    url: '../ajax/message.php?receiver='+receiver+'&message='+message,
    error: function () {
      // alert('error, failed to get id');
    },
    dataType: 'json',
    success: function (response) {
    
    },
  });
}

jQuery(document).ready(function ($) {
  $('#sendMessage').click(function (event) {
    event.preventDefault();
    sendMessage('+233208497162','This is Sparta');
  });
});