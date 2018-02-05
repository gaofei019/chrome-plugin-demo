// function my_clock(el){
//     var today=new Date();
//     var h=today.getHours();
//     var m=today.getMinutes();
//     var s=today.getSeconds();
//     m=m>=10?m:('0'+m);
//     s=s>=10?s:('0'+s);
//     el.innerHTML = h+":"+m+":"+s;
//     setTimeout(function(){my_clock(el)}, 1000);
// }

//var clock_div = document.getElementById('clock_div');
//my_clock(clock_div);
chrome.storage.local.get("ainfo", function(val){
  $('#ainfo').val(val.ainfo || '');
});
chrome.storage.local.get("abegin", function(val){
  $('#abegin').val(val.abegin || 1);
});
chrome.storage.local.get("cardinfo", function(val){
  $('#cardinfo').val(val.cardinfo || '');
});
// chrome.storage.local.get("buy_money", function(val){
//   $('#buy_money').val(val.buy_money || '100000');
// });
// chrome.storage.local.get("trans_password", function(val){
//   $('#trans_password').val(val.trans_password || '123456');
// });
// var account = localStorage.account || '张金军';
// var ac_password = localStorage.ac_password || 'zhjj19740125';
// var buy_money = localStorage.buy_money || '100000';
// var trans_password = localStorage.trans_password || '123456';
// $('#account').val(account);
// $('#ac_password').val(ac_password);
// $('#buy_money').val(buy_money);
// $('#trans_password').val(trans_password);

$('#save').on('click', function(){
	chrome.storage.local.set({"ainfo":$('#ainfo').val()});
	chrome.storage.local.set({"abegin":$('#abegin').val()});
  chrome.storage.local.set({"cardinfo":$('#cardinfo').val()});
  var tmpinfo = $('#ainfo').val();
  var infoarray= new Array();
  infoarray = tmpinfo.split("\n");
  chrome.storage.local.set({"infoarray":infoarray});
  var cardinfo = $('#cardinfo').val();
  var cardinfoarray= new Array();
  cardinfoarray = cardinfo.split("\n");
  chrome.storage.local.set({"cardinfoarray":cardinfoarray});
  console.log(cardinfo);
  // console.log(infoarray);
	// chrome.storage.local.set({"buy_money":$('#buy_money').val()});
	// chrome.storage.local.set({"trans_password":$('#trans_password').val()});
    // localStorage.account = $('#account').val();
    // localStorage.ac_password = $('#ac_password').val();
    // localStorage.buy_money = $('#buy_money').val();
    // localStorage.trans_password = $('#trans_password').val();
    alert('保存成功。');
})

