function create_qr_code(xhr,status){
console.log(xhr.responseText);
window.location="#mapPage";
}

function generate_qrcode(){
  var _amount = $('#amount').val();
  var _merchantID = sessionStorage.merchantID;
  var _merchantName = sessionStorage.merchantName;

  $.ajax({
    type: 'post',
    url: '../Ajax/qrcode.php',
    data: {merchantID: _merchantID, merchantName: _merchantName, passedValue: _amount},
    success: function(code){
      $('#result').html(code);
    }
  })
}
